class LibreTextsGlossarizer {
    constructor() {
        this.pluginName = 'glossarizer';
        this.defaults = {
            replaceTag: 'div',
            /* Matching words will be wrapped with abbr tags by default */
            lookupTagName: 'p, ul, a, div',
            /* Lookup in either paragraphs or lists. Do not replace in headings */
            callback: null,
            /* Callback once all tags are replaced: Call or tooltip or anything you like */
            replaceOnce: false,
            /* Replace only once in a TextNode */
            replaceClass: 'glossarizer_replaced',
            caseSensitive: false,
            exactMatch: true
        };
        if (typeof(localStorage.glossarizerType) == "undefined" || !localStorage.getItem("glossarizerType")) {
            localStorage.setItem("glossarizerType", "textbook");
        }

    }
    isArticleTopicPage() {
        return document.getElementById('pageTagsHolder').innerText.includes(`"article:topic"`);
    }
    removeGlossary() {
        let pluginName = this.pluginName;
        let defaults = this.defaults;
        $('.mt-content-container').removeData('plugin_' + pluginName);

        /* Remove wrapping tag */
        $('.mt-content-container').find(defaults.replaceClass).each(function () {
            let $this = $(this),
                text = $this.text()

            $this.replaceWith(text);
        });
        localStorage.setItem("glossarizerType", "none");
    }
    getTermCols(rowText) { // tableRows[r]
        let cols = {};
        let colStart = [
            ['<td data-th="Word' + '(s)">', "word"],
            ['<td data-th="Definition">', "definition"],
            ['<td data-th="Image">', "image"],
            ['<td data-th="Caption">', "caption"],
            ['<td data-th="Link">', "link"],
            ['<td data-th="Source">', "source"]
        ]
        let colEnd = '</td>';
        for (let t = 0; t < colStart.length; t++) {
            let tag = colStart[t][0];
            let colStr = rowText.substring(rowText.search(tag) + tag.length);
            cols[colStart[t][1]] = (colStr.substring(0, colStr.search(colEnd)).trim());
        }
        return cols;
    }
    async makeGlossary(inputSourceOption) {
        if (!this.isArticleTopicPage()) { //If article isn't a topic page, don't do anything
            return;
        }
        let sourceOption = inputSourceOption || localStorage.getItem("glossarizerType");
        let pluginName = this.pluginName;
        let defaults = this.defaults;
        let getTermCols = this.getTermCols;
        this.removeGlossary();
        let retrievedGlossary = [];
        switch ((sourceOption || "").trim().toLowerCase()) {
            case "none":
                return;
            case "iupac gold book":
                localStorage.setItem("glossarizerType", "iupac gold book");
                let goldbook = await $.getJSON("https://files.libretexts.org/github/LibreTextsMain/Leo%20Jayachandran/Glossarizer/goldbook_vocab.json");
                for (let i = 1; i <= 7035; i++) {
                    if (goldbook.entries[i].definition === null || goldbook.entries[i].term === null || goldbook.entries[i].definition.length == 0) { // If definition is empty skip term
                        continue;
                    }
                    let breakingTerms = ["Br&#xF8;nsted relation", "<i>", "<em>", "→"];
                    for (let u = 0; u < breakingTerms.length; u++) {
                        if (goldbook.entries[i].term.includes(breakingTerms[u])) {
                            continue;
                        }
                    }
                    let cleanedDef = "";

                    if (typeof goldbook.entries[i].definition === "object") {
                        for (let u = 0; u < goldbook.entries[i].definition.length; u++) {
                            if (goldbook.entries[i].definition[u].length)
                                cleanedDef += `<p>${i}. ${goldbook.entries[i].definition}</p>`;
                        }
                        if (cleanedDef.length == 0) {
                            continue;
                        }
                    } else {
                        cleanedDef = goldbook.entries[i].definition.trim();
                    }
                    retrievedGlossary.push({
                        "term": goldbook.entries[i].term,
                        "description": cleanedDef
                    });

                }
                break;
            case "ichem":
                localStorage.setItem("glossarizerType", "ichem");
                let ichemPage = 278612;
                retrievedGlossary = await getGlossaryJSON(ichemPage);
                break;
            case "achem":
                localStorage.setItem("glossarizerType", "achem");
                let achemPage = 278614;
                retrievedGlossary = await getGlossaryJSON(achemPage);
                break;
            case "ochem":
                localStorage.setItem("glossarizerType", "ochem");
                let ochemPage = 278613;
                retrievedGlossary = await getGlossaryJSON(ochemPage);
                break;
            case "textbook": //The textbook should be the default option
            default:
                localStorage.setItem("glossarizerType", "textbook");
                const coverPage = await LibreTexts.getCoverpage();
                const subdomain = window.location.origin.split('/')[2].split('.')[0];
                let glossaryPage = await LibreTexts.getAPI(`https://${subdomain}.libretexts.org/${coverPage}/zz%3A_Back_Matter/20%3A_Glossary`);
                retrievedGlossary = await getGlossaryJSON(glossaryPage.id);
        }
        async function getGlossaryJSON(sourceID) {
            let data = await LibreTexts.authenticatedFetch(sourceID, 'contents?dream.out.format=json').then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.error("Textbook glossary not found!");
                    return {
                        body: ""
                    };
                }
            });
            let bodycontent = (typeof (data.body) == "string") ? data.body : data.body[0];
            if (!(bodycontent.includes('Word' + "(s)"))) {
                bodycontent = "";
                return [];
            }
            bodycontent = bodycontent.substring(bodycontent.search(/<tbody.*>\s*<tr>\s*<td data-th="Word\(s\)"/));
            //Find the body of the glossary table
            let tableStart = '<tbody';
            let tableEnd = "</tbody>";
            let startPoint = bodycontent.search(tableStart) + tableStart.length;
            let endPoint = bodycontent.substring(startPoint).search(tableEnd) + startPoint;
            let tBody = bodycontent.substring(startPoint, endPoint).replace(/&nbsp;/g, " ").trim();

            //Generate the rows of the table
            let tableRows = [];
            for (let i = 0; i < tBody.length;) {
                let trimmedBody = tBody.substring(i);
                let rowStart = '<tr>';
                let rowEnd = '</tr>';
                let rowContent = trimmedBody.substring(trimmedBody.search(rowStart) + rowStart.length, trimmedBody.search(rowEnd)).trim();
                tableRows.push(rowContent);
                i += trimmedBody.search(rowEnd) + rowEnd.length;
            }

            //Generate the Glossary
            let retrievedGlossary = [];
            for (let r = 0; r < tableRows.length; r++) {
                let newTerm = {
                    "term": "",
                    "description": ""
                };
                //Get data from the columns in the row
                let cols = getTermCols(tableRows[r]);
                newTerm["term"] = cols["word"].substring(1).toLowerCase().replace(/<p>/g, " ").replace(/<\/p>/g, " ").trim();

                //Make Description
                if (cols["link"].length) {
                    let aTagStart = 'href="';
                    let aTagEnd = '">';
                    let href = cols["link"].substring(cols["link"].search(aTagStart) + aTagStart.length, cols["link"].search(aTagEnd));
                    cols["definition"] = `<a href = "${href}" target="_blank">${cols["definition"]}</a>`;
                }
                if (cols["image"].length) {
                    cols["definition"] += `<div class='imageContainer'>${cols["image"]}</div>`;
                }
                if (cols["caption"].length) {
                    cols["definition"] += `<p class = 'caption'>${cols["caption"]}</p>`;
                }
                if (cols["source"].length) {
                    cols["definition"] = cols["definition"].trim() + `<p class = "glossarySource">[Source: ${cols["source"].replace(/<p>/g, " ").replace(/<\/p>/g, " ").trim()}]</p>`;
                }

                newTerm["description"] = cols["definition"];

                //Add new term
               if (newTerm["term"].split(",")) { //If more than 1 word is used for the term then split them up in the glossary element
                let terms  = newTerm["term"].split(",");
                for (let t = 0; t < terms.length; t++) {
                    if (terms[t].trim() === "" || terms[t].includes("!")) {
                        continue;
                    }
                    retrievedGlossary.push({"term": terms[t], "description": newTerm["description"]});
                }
                } else {
                    retrievedGlossary.push(newTerm);
                }
            }
            return retrievedGlossary;
        }

        if (retrievedGlossary.length <= 1) { // Deal with incompatible Glossary
            console.error("incompatible glossary");
            return;
        }
        retrievedGlossary.sort((a,b) => {return b.term.length - a.term.length}) //sort from longest term to shortest term

        /**
         * Plugin Name: Glossarizer
         * Author : Vinay @Pebbleroad
         * Date: 02/04/2013
         * Description: Takes glossary terms from a JSON object -> Searches for terms in your html -> Wraps a abbr tag around the matched word
         * 1. Fixed IE8 bug where whitespace get removed - Had to change `abbr` tag to a block element `div`
         */
        /**
         * Constructor
         */

        function Glossarizer(el, options) {
            let base = this;
            base.el = el;

            /* Element */
            base.$el = $(el);

            /* Extend options */

            base.options = $.extend({}, defaults, options);

            /* Terms */

            base.terms = [];

            /* Excludes array */

            base.excludes = [];

            /* Replaced words array */

            base.replaced = [];

            /* Regex Tags */

            base.regexOption = (base.options.caseSensitive ? '' : 'i') + (base.options.replaceOnce ? '' : 'g');

            /* Fetch glossary JSON */
            //Trim the content to remove the example table

            base.glossary = retrievedGlossary.splice(0);

            if (!base.glossary.length || base.glossary.length == 0) return;
            /**
             * Get all terms
             */

            for (let i = 0; i < base.glossary.length; i++) {
                let terms = base.glossary[i].term.split(',')

                for (let j = 0; j < terms.length; j++) {
                    /* Trim */

                    let trimmed = terms[j].replace(/^\s+|\s+$/g, ''),
                        isExclusion = trimmed.indexOf('!')

                    if (isExclusion == -1 || isExclusion != 0) {
                        /* Glossary terms array */

                        base.terms.push(trimmed)
                    } else {
                        /* Excluded terms array */

                        base.excludes.push(trimmed.substr(1))
                    }
                }
            }

            /**
             * Wrap terms
             */

            base.wrapTerms();

        }

        /**
         * Prototypes
         */
        Glossarizer.prototype = {
            getDescription: function (term) {
                let regex = new RegExp('(\,|\s*)' + this.clean(term) + '\\s*|\\,$', 'i')

                /**
                 * Matches
                 * 1. Starts with \s* (zero or more spaces)
                 * 2. Ends with zero or more spaces
                 * 3. Ends with comma
                 */

                for (let i = 0; i < this.glossary.length; i++) {
                    if (this.options.exactMatch) {
                        if (this.glossary[i].term.toLowerCase() == this.clean(term).toLowerCase()) {
                            return this.glossary[i].description.replace(/\"/gi, '&quot;')
                        }
                    } else {
                        if (this.glossary[i].term.match(regex)) {
                            return this.glossary[i].description.replace(/\"/gi, '&quot;')
                        }
                    }
                }
            },
            clean: function (text) {
                let reEscape = new RegExp('(\\' + ['/', '.', '*', '+', '?', '(', ')', '[', ']', '{', '}', '\\'].join('|\\') + ')', 'g')

                return text.replace(reEscape, '\\$1')
            },

            /**
             * Wraps the matched terms by calling traverser
             */
            wrapTerms: function () {
                this.cleanedTerms = this.clean(this.terms.join('|'))
                this.excludedTerms = this.clean(this.excludes.join('|'))

                let nodes = this.el.querySelectorAll(this.options.lookupTagName)

                for (let i = 0; i < nodes.length; i++) {
                    this.traverser(nodes[i])
                }

                /**
                 * Callback
                 */

                if (this.options.callback) this.options.callback.call(this.$el)
            },

            /**
             * Traverses through nodes to find the matching terms in TEXTNODES
             */

            traverser: function (node) {
                let next,
                    base = this

                if (node.nodeType === 1) {
                    /*
                    Element Node
                    */

                    if (node = node.firstChild) {
                        do {
                            // Recursively call traverseChildNodes
                            // on each child node
                            next = node.nextSibling

                            /**
                             * Check if the node is not glossarized
                             */

                            if (node.className != this.options.replaceClass) {
                                this.traverser(node)
                            }
                        } while (node = next)
                    }
                } else if (node.nodeType === 3) {
                    /*
                    Text Node
                    */

                    let temp = document.createElement('div'),
                        data = node.data

                    let re = new RegExp('(?:^|\\b)(' + this.cleanedTerms + ')(?!\\w)', base.regexOption),
                        reEx = new RegExp('(?:^|\\b)(' + this.excludedTerms + ')(?!\\w)', base.regexOption)

                    if (re.test(data)) {
                        let excl = reEx.exec(data)

                        data = data.replace(re, function (match, item, offset, string) {
                            if (base.options.replaceOnce && inArrayIn(match, base.replaced) >= 0) {
                                return match
                            }

                            base.replaced.push(match)

                            let ir = new RegExp('(?:^|\\b)' + base.clean(match) + '(?!\\w)'),
                                result = ir.exec(data)

                            if (result) {
                                if (excl && base.excludes.length) {
                                    let id = offset,
                                        exid = excl.index,
                                        exl = excl.index + excl[0].length

                                    if (exid <= id && id <= exl) {
                                        return match
                                    } else {
                                        return '<' + base.options.replaceTag + ' class="' + base.options.replaceClass + '" title="' + base.getDescription(match) + '">' + match + '</' + base.options.replaceTag + '>'
                                    }
                                } else {
                                    return '<' + base.options.replaceTag + ' class="' + base.options.replaceClass + '" title="' + base.getDescription(match) + '">' + match + '</' + base.options.replaceTag + '>'
                                }
                            }
                        })

                        /**
                         * Only replace when a match is found
                         * Resorting to jQuery html() because of IE8 whitespace issue.
                         * IE 8 removes leading whitespace from Text Nodes. Hence innerhtml doesnt work.
                         *
                         */

                        $(temp).html(data)

                        while (temp.firstChild) {
                            node.parentNode.insertBefore(temp.firstChild, node)
                        }

                        node.parentNode.removeChild(node)
                    }
                }
            },

        }

        /**
         * Public Methods
         */

        let methods = {
            destroy: function () {
                this.$el.removeData('plugin_' + pluginName)

                /* Remove abbr tag */
                this.$el.find('.' + this.options.replaceClass).each(function () {
                    let $this = $(this),
                        text = $this.text()

                    $this.replaceWith(text)
                })
            }
        }

        /**
         * Extend Prototype
         */

        Glossarizer.prototype = $.extend({}, Glossarizer.prototype, methods);

        /**
         * Plugin
         * @param  {[type]} options
         */
        $.fn[pluginName] = function (options) {
            return this.each(function () {
                let $this = $(this),
                    glossarizer = $this.data('plugin_' + pluginName)

                /*
                Check if its a method
                */

                if (typeof options == 'string' && glossarizer && methods.hasOwnProperty(options)) {
                    glossarizer[options].apply(glossarizer)
                } else {
                    /* Destroy if exists */

                    if (glossarizer) glossarizer['destroy'].apply(glossarizer)

                    /* Initialize */

                    $.data(this, 'plugin_' + pluginName, new Glossarizer(this, options))
                }
            })
        };

        /**
         * In Array
         */

        function inArrayIn(elem, arr, i) {
            if (typeof elem !== 'string') {
                return $.inArray.apply(this, arguments)
            }

            if (arr) {
                let len = arr.length
                i = i ? (i < 0 ? Math.max(0, len + i) : i) : 0
                elem = elem.toLowerCase()
                for (; i < len; i++) {
                    if (i in arr && arr[i].toLowerCase() == elem) {
                        return i
                    }
                }
            }
            return -1
        }

        //Tooltip Constructor
        // 
        // Author : http://osvaldas.info/elegant-css-and-jquery-tooltip-responsive-mobile-friendly
        // 
        // 
        // Author : http://osvaldas.info/elegant-css-and-jquery-tooltip-responsive-mobile-friendly
        // 

        function ToolTip() {
            let targets = $("." + defaults.replaceClass),
                target = false,
                tooltip = false,
                title = false;

            targets.bind('mouseenter', function () {
                target = $(this);
                let tip = target.attr('title');
                tooltip = $(`<div id="tooltip${target.text()}" class= "glossarizerTooltip"></div>`);
                let inputs = {
                    "tooltip": tooltip,
                    "target": target,
                    "tip": tip
                };
                if (!tip || tip == '')
                    return false;

                target.removeAttr('title');
                tooltip.html(tip).appendTo('body');

                let init_tooltip = function () {
                    tooltip.css('max-width', "");
                    if ($(window).width() <= tooltip.outerWidth() * 2)
                        tooltip.css('max-width', $(window).width() / 2);
                    else
                        tooltip.css('max-width', 340);

                    let pos_left = target.offset().left + (target.outerWidth() / 2) - (tooltip.outerWidth() / 2);

                    if (pos_left < 0) {
                        pos_left = target.offset().left + target.outerWidth() / 2 - 20;
                        tooltip.addClass('left');
                    } else
                        tooltip.removeClass('left');

                    if (pos_left + tooltip.outerWidth() > $(window).width()) {
                        pos_left = target.offset().left - tooltip.outerWidth() + target.outerWidth() / 2 + 20;
                        tooltip.addClass('right');
                    } else
                        tooltip.removeClass('right');

                    let pos_top = target.offset().top - tooltip.outerHeight() - 20;

                    if (pos_top < 0) {
                        pos_top = target.offset().top + target.outerHeight();
                        tooltip.addClass('top');
                    } else
                        tooltip.removeClass('top');


                    tooltip.css({
                        left: pos_left,
                        top: pos_top,
                    }).fadeIn();
                };

                init_tooltip();
                $(window).resize(init_tooltip);


                function remove_tooltip(inputs) {

                    inputs.target.attr("title", inputs.tip);
                    inputs.tooltip.fadeOut();
                    inputs.tooltip.remove();

                }
                if (tooltip.html().includes("<img")) {
                    $(`#tooltip${target.text()} img`).on("load", init_tooltip);
                }

                tooltip.bind("mouseleave", () => {
                    remove_tooltip(inputs);
                });
                tooltip.bind('click', () => {
                    remove_tooltip(inputs);
                });
                target.bind('mouseleave', () => {
                    setTimeout((inputs) => {
                        if ($(`#tooltip${inputs.target.text()}:hover`).length == 0) {
                            remove_tooltip(inputs);
                        }
                    }, 300, inputs);
                });
            });

        }

        window.tooltip = ToolTip;



        //Initialise Glossariser
        $(function () {
            $('.mt-content-container').glossarizer({
                callback: function () {
                    new tooltip();
                }
            });


        });

    }

    buildBackMatter() {
        let $glossaryTable = $("table:contains('Word" + "(s)')")
        let tBody = $glossaryTable.html().replace(/&nbsp;/g, " ").replace(/<p>/g, " ").replace(/<\/p>/g, " ").trim();
        tBody = tBody.substring(tBody.search("<tbody"), tBody.search("</tbody>")).trim();
        let tableRows = [];
        for (let i = 0; i < tBody.length;) {
            let trimmedBody = tBody.substring(i);
            let rowStart = '<tr>';
            let rowEnd = '</tr>';
            let rowContent = trimmedBody.substring(trimmedBody.search(rowStart) + rowStart.length, trimmedBody.search(rowEnd)).trim();
            tableRows.push(rowContent);
            i += trimmedBody.search(rowEnd) + rowEnd.length;
        }
        //Generate the Glossary
        let glossaryList = [];
        for (let r = 0; r < tableRows.length; r++) {
            let newTerm = {
                "term": "",
                "description": ""
            };
            //Get cells in the 3 columns
            let cols = this.getTermCols(tableRows[r]);
            if (cols["definition"].trim().length === 0 || cols["word"].trim().length === 0) continue; // Handle empty terms and definitions
            if (cols["source"].length) {
                cols["definition"] = cols["definition"].trim() + ` [Source: ${cols["source"].replace(/<p>/g, " ").replace(/<\/p>/g, " ").trim()}]`;
            }
            if (cols["link"].length) {
                let aTagStart = 'href="';
                let aTagEnd = '">';
                let href = cols["link"].substring(cols["link"].search(aTagStart) + aTagStart.length, cols["link"].search(aTagEnd));
                newTerm["description"] = `<a href = "${href}" target="_blank" class = "glossaryDefinition">${cols["definition"].trim()}</a>`;
            } else {
                newTerm["description"] = `<span class = "glossaryDefinition">${cols["definition"].trim()}</span>`;
            }
            let currentTerm = cols["word"].substring(1).split(",")[0].trim();
            newTerm["term"] = `<span class = "glossaryTerm">${currentTerm.substring(0,1).toUpperCase() + currentTerm.substring(1)}</span>`;
            glossaryList.push(newTerm);
        }
        glossaryList.sort((a, b) => {
            return (a["term"].replace(/<.*?>/g, "").toLowerCase() < b["term"].replace(/<.*?>/g, "").toLowerCase()) ? -1 : 1;
        });
        let glossaryText = "";
        glossaryList.map((currentValue) => {
            glossaryText += '<p class="glossaryElement">' + currentValue["term"] + " | " + currentValue["description"] + "</p>";
        });

        $(document.currentScript).after(`<div id = "visibleGlossary">${glossaryText}</div>`);


    }
}


//Self Initialize
let libretextGlossary = new LibreTextsGlossarizer(); // Needs to be accessible to the sidebar buttons
window.addEventListener('load', ()=>{
    libretextGlossary.makeGlossary();
});
