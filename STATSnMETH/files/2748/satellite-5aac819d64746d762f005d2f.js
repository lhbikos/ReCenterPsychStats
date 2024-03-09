// If you're reading this: we're hiring. Email wolanalytics [at] wiley [dot] com with your resume or LinkedIn address
(function() {
    if (!Array.prototype.forEach) {
        Array.prototype.forEach = function forEach(callback, thisArg) {
            if (typeof callback !== 'function') {
                throw new TypeError(callback + ' is not a function');
            }
            var array = this;
            thisArg = thisArg || this;
            for (var i = 0, l = array.length; i !== l; ++i) {
                callback.call(thisArg, array[i], i, array);
            }
        };
    }
    if (!Array.isArray) {
        Array.isArray = function(arg) {
            return Object.prototype.toString.call(arg) === '[object Array]';
        };
    }
})();
WileyDTM = {}
if(!(window.eReaderPage)){
	if (window.digitalData ) {
		try {

			var WileyDTM = {
				setCookie: function(name, value, seconds) {
					if (seconds == 'delete') {
						var expires = "; expires=Thu, 01 Jan 1970 00:00:01 GMT";
					} else if (seconds) {
						var date = new Date();
						date.setTime(date.getTime() + (seconds * 1000));
						var expires = "; expires=" + date.toGMTString();
					}
					/*try at highest scope and iterate lower*/
					var i = 0;
					var domain = document.location.hostname;
					p = domain.split('.');
					if (seconds == 'delete') {
						while (i < (p.length - 1)) {
							domain = p.splice(-1 - (++i)).join('.');
							document.cookie = name + "=" + value + expires + ";domain=" + domain + ";path=/";
						}
					} else {
						while (i < (p.length - 1) && document.cookie.indexOf(name + '=' + value) == -1) {
							domain = p.splice(-1 - (++i)).join('.');
							document.cookie = name + "=" + value + expires + ";domain=" + domain + ";path=/";
						}
					}
				},
				checkVI: function() {
					//only return this on the ToC pages. Articles will have a primary volume, other pages will be undefined as well
					if (digitalData.page && digitalData.page.page && digitalData.page.page == "Table of Contents") {
						if (typeof(digitalData.publication.group.volume) == "undefined") {
							return true;
						}
					}
					return false;
				},
				isArticle: function() {
					if (digitalData.publication && digitalData.publication.item) return true;
					else return false;
				},
				hasSeries: function() {
					if (digitalData.publication && digitalData.publication.series) return true;
					else return false;
				},
				hasGroup: function() {
					if (digitalData.publication && digitalData.publication.group) return true;
					else return false;
				},
				getPublicationType: function() {
					if (WileyDTM.hasGroup()) {
						if (WileyDTM.hasSeries() && digitalData.publication.series.code == "mrwseries") return "mrw";
						else if (digitalData.publication.group.eisbn) return "book"
					}
					if (WileyDTM.hasSeries() && digitalData.publication.series.eissn) return "journal"
					return false;
				},
				getPublicationDOI: function() {
					if (WileyDTM.hasGroup() && digitalData.publication.group.eisbn) return digitalData.publication.group.doi;
					if (WileyDTM.hasSeries()) return digitalData.publication.series.doi;
					return false;
				},
				getPublicationTitle: function() {
					if (WileyDTM.hasGroup() && digitalData.publication.group.eisbn && digitalData.publication.group.title) {

						return digitalData.publication.group.title.replace("&amp;", "&").replace("&apos;", "'").replace("&#233;", "é").replace("&#252;", "ü");
					}
					if (WileyDTM.hasSeries() && digitalData.publication.series.title) {
						return digitalData.publication.series.title.replace("&amp;", "&").replace("&apos;", "'").replace("&#233;", "é").replace("&#252;", "ü");
					}
					return false;
				},
				getPublicationAccess: function() {
					if (WileyDTM.hasGroup() && digitalData.publication.group.eisbn) return digitalData.publication.group.access;
					if (WileyDTM.hasSeries()) return digitalData.publication.series.access;
					return false;
				},
				getJournalCode: function() {
					if (WileyDTM.getPublicationType() == "journal") return digitalData.publication.series.code;
					return "";
				},
				getArticleFormats: function() {
					if (WileyDTM.isArticle()) {
						if (Array.isArray(digitalData.publication.item.formats)) return digitalData.publication.item.formats.join("|").replace("Full text", "HTML")

						else return false;
					}
				},
				getVolumeIssue: function() {
					if (WileyDTM.hasGroup()) {
						if (WileyDTM.checkVI()) {
							return "Virtual Issue"
						}
						if (digitalData.publication.group.volume && digitalData.publication.group.issue) {
							return digitalData.publication.group.volume + "/" + digitalData.publication.group.issue;
						}
					}
					return false;

				},
				getIssueData: function() {
					imap = {};
					if (WileyDTM.getPublicationType() == "journal" && WileyDTM.hasGroup()) {
						imap.issueTitle = digitalData.publication.group.title;
						imap.issueDOI = digitalData.publication.group.doi;
					}

					return imap;
				},
				getTaxonomyMap: function() {
					var tmap = {};
					tmap.globalSubjects = [];
					tmap.viCategories = [];
					tmap.gptZoneName = "";
					tmap.gptSiteName = "";

					pubTopics = [];

					if (WileyDTM.getPublicationType() == "journal") {
						pubTopics = digitalData.publication.series.topics;
						if (WileyDTM.hasGroup() && Array.isArray(digitalData.publication.group.topics)) {
							digitalData.publication.group.topics.forEach(function(topic) {
								if (topic.taxonomyUri && topic.taxonomyUri.indexOf("vi-categories") >= 0) {
									tmap.viCategories.push(topic.topicLabel);
								}
							});
						}
					} else if (WileyDTM.getPublicationType() == "book") {
						pubTopics = digitalData.publication.group.topics;
					}

					if (Array.isArray(pubTopics)) {
						pubTopics.forEach(function(topic) {
							if (topic.taxonomyUri) {
								if (topic.taxonomyUri == "global-subject-codes") {
									tmap.globalSubjects.push(topic.topicUri);
								}
								if (topic.taxonomyUri == "gpt-zonename") {
									tmap.gptZoneName = topic.topicUri;
								}
								if (topic.taxonomyUri == "gpt-sitename") {
									tmap.gptSiteName = topic.topicUri;
								}
							}
						});
					}
					tmap.globalSubjectsString = tmap.globalSubjects.join("|");
					tmap.viCategoriesString = tmap.viCategories.join("|");
					return tmap
				},
				getIdentities: function() {
					var imap = {};
					imap.personUser = "";
					imap.institutions = [];
					if (digitalData.identities && Array.isArray(digitalData.identities)) {
						digitalData.identities.forEach(function(identity) {
							if (identity.type == "InstitutionUser") {
								if (Array.isArray(identity.customerRecords)) {
									identity.customerRecords.forEach(function(cr) {
										imap.institutions.push(cr.customerDomain + ":" + cr.customerNumber);
									});
								}
							} else if (identity.type == "PersonUser") {
								if (Array.isArray(identity.customerRecords) && identity.customerRecords.length > 0) {
									imap.personUser = identity.customerRecords[0].customerDomain + ":" + identity.customerRecords[0].customerNumber
								}
							}

						});
					}
					imap.institutionsString = imap.institutions.join("|");
					return imap;
				},
				isLoggedIn: function() {
					if (WileyDTM.getIdentities().personUser) return true;
					else return false;
				},
				getArticleAge: function() {
					//in days
					if (WileyDTM.isArticle()) {
						if (digitalData.publication.item.earliestDate) {
							if (typeof(Date.parse(digitalData.publication.item.earliestDate)) == "number") {
								now = new Date();
								pubDate = Date.parse(digitalData.publication.item.earliestDate);

								timediff = now - Date.parse(digitalData.publication.item.earliestDate);
								daydiff = Math.floor(timediff / (1000 * 60 * 60 * 24));
								return daydiff;
							}
						}
					}
					return false;
				},
				getSearchData: function() {
					searchData = {};
					if (digitalData.page && digitalData.page.page && (digitalData.page.page == "Search Result" ||
							digitalData.page.page == "Show Publications")) {
						if (digitalData.search) {
							searchData.type = digitalData.search.type;

							if (digitalData.search.resultCounts) {
								searchData.articleResults = digitalData.search.resultCounts.articlesChapters;
								searchData.pubResults = digitalData.search.resultCounts.journalTitle;
							}
							if (digitalData.search.resultsDisplayed) {
								searchData.sort = digitalData.search.resultsDisplayed.sort;
								searchData.startPage = digitalData.search.resultsDisplayed.startPage;
							}
							if (digitalData.page.title.indexOf("[Earliest") >= 0) {
								dfrag = digitalData.page.title.substring(digitalData.page.title.indexOf("[Earliest") + 11);
								searchData.dateRange = dfrag.substring(0, dfrag.indexOf("]"))
							}
							if (digitalData.page.title.indexOf("[Publication Date") >= 0) {
								searchData.dateRange = "Custom";
							}

							if (Array.isArray(digitalData.search.fields)) {
								digitalData.search.fields.forEach(function(field) {
									if (field.type == "AllField") {
										searchData.searchTerm = searchData.searchTerm ? searchData.searchTerm : field.term[0];
									}
									if (field.type == "ContentGroupKey") {
										searchData.title = field.term[0];
									} else if (field.type == "SeriesKey") {
										searchData.title = field.term[0];
									}

									if (field.type == "content") {
										searchData.tab = field.term[0];
									}
									if (field.type == "PubType") {
										searchData.pubType = field.term[0];
									}
									if (field.type == "ConceptID") {
										if (field.term[0] == "15941") {
											searchData.accessType = "Open Access";
										} else {
											searchData.subject = field.term[0];
										}
									}
									if (field.type == "Title") {
										searchData.advTitle = searchData.advTitle ? searchData.advTitle : field.term[0];
									}
									if (field.type == "ContribStored" || field.type == "ContribAuthorStored") {
										searchData.authorFilter = true;
									}

									if (field.type == "target") {
										searchData.mode = field.term[0];
									}

								});


							}

						}
					}
					return searchData;
				}
			};
			WileyDTM.data = {
				articleAge: WileyDTM.getArticleAge(),
				publicationType: WileyDTM.getPublicationType(),
				publicationDOI: WileyDTM.getPublicationDOI(),
				publicationTitle: WileyDTM.getPublicationTitle(),
				publicationAccess: WileyDTM.getPublicationAccess(),
				volumeIssue: WileyDTM.getVolumeIssue(),
				journalCode: WileyDTM.getJournalCode(),
				tmap: WileyDTM.getTaxonomyMap(),
				hasGroup: WileyDTM.hasGroup(),
				issueData: WileyDTM.getIssueData(),
				identities: WileyDTM.getIdentities(),
				isLoggedIn: WileyDTM.isLoggedIn(),
				isVI: WileyDTM.checkVI(),
				articleFormats: WileyDTM.getArticleFormats(),
				searchData: WileyDTM.getSearchData()
			};
		} catch (e) {
			WileyDTM = {
				'DTMError': 'WileyDTM failed: ' + e
			};
		}
	} 
	else {
		WileyDTM = {
			'DTMError': 'digitalData not defined'
		};
	}
}