mistats.isEscenic = true;

mistats.escenicId = (location.pathname || '').match(/article\d+\.html/);
mistats.escenicId = mistats.escenicId ? mistats.escenicId[0].match(/\d+/)[0] : '';

mistats.Hashtags = function ()
{
   function addHashtags(pParent, pHashtag)
   {
      var i;
      var links;

      if (!(pParent && pHashtag))
         return;

      links = pParent.getElementsByTagName('a');
      for (i = 0; i < links.length; i++)
         links[i].href && !(links[i].href || '').match(/^mail|^javascript|^tel/) && (links[i].href = links[i].href.replace(/#.*/, '') + '#' + pHashtag);
   };

   function init()
   {
      var i;
      var objs;

      mistats.pagelevel === 'Video' && (addHashtags(mistats.getElementByClassName(/related-stories-organism/), 'videolink=related_stories'));
      addHashtags(mistats.getElementByClassName(/author-card/), 'storylink=authorcard');
      addHashtags(document.getElementById('related-links'), 'storylink=related_inline');
      addHashtags(document.getElementById('series-links') || document.getElementById('story-series'), 'storylink=series');
      addHashtags(document.getElementById('more-stories-widget'), 'wgt=more_stories');

      if ((location.pathname || '').match(/\/profile\/\d+/))
      {
         addHashtags(document.getElementById('vueContainer'), 'storylink=authorpage');
         objs = mistats.getElementsByClassName(/card impact/);
         for (i = 0; i < objs.length; i++)
            addHashtags(objs[i], 'storylink=authorpage-featured');
      }

      objs = document.getElementsByTagName('div');
      for (i = 0; i < objs.length; i++)
         (objs[i].className || '').match(/story-readmorelink/) && (addHashtags(objs[i], 'storylink=readmore_inline'));
   };

   setTimeout(init, 100);
};

(new mistats.Hashtags());

mistats.useMetaKeyword = function ()
{
   var i;
   var kw;
   var objs;

   if (!mistats.keywords)
      return;

   objs = document.getElementsByTagName('meta');
   for (i = 0; i < objs.length; i++)
      if (objs[i].getAttribute('name') === 'keywords')
      {
         kw = objs[i].getAttribute('content') || '';
         kw = kw.replace(/, +/g, ',');
         kw && (mistats.keywords = kw);
         return;
      }
};
mistats.useMetaKeyword();

mistats.getSearchTerm = function ()
{
   var count;
   var q;
   var ssc;

   q = unescape(location.search || '').match(/q=[^&\?]*/i);
   if (q)
      q = q[0].toLowerCase().substr(2).replace(/[\s\+]+/g, ' ').replace(/^\s*/, '').replace(/\s*$/, '').replace(/[\'\"]/g, '');
   else
      q = '(blank)';

   mistats.events.add('event4');

   facet = unescape(location.search || '').match(/facet=[^&\?]*/i);
   facet && (mistats.setOnce('eVar61', facet[0].toLowerCase().substr(6)));

   ssc = document.getElementById('site-search-counter');
   ssc && (ssc = (ssc.innerHTML || '').replace(/<[^>]+>/g, ' '));
   if (ssc && !ssc.match(/^\S+$/))
   {
      count = ssc.match(/about\s+\d+/i);
      mistats.setOnce('eVar52', count ? count[0].match(/\d+/)[0] : '0');
   }

   mistats.setOnce('eVar51', '' + q);
   s.eVar52 === '0' && (mistats.events.add('event5'));
   s.eVar51 && s.eVar51 !== '(blank)' && (mistats.score('search'));
};

mistats.googleSearch = function ()
{
   var hash;
   var timer;

   function setKeywords()
   {
      var count;
      var srch;
      var tab;

      srch = (location.hash || '').match(/gsc.q=[^&]*/);
      srch = srch ? unescape(srch[0]) : 'gsc.q=(blank)';
      srch = srch.substr(6).toLowerCase().replace(/[\s\+]+/g, ' ').replace(/^\s*/, '').replace(/\s*$/, '').replace(/[\'\"]/g, '');

      tab = ((location.hash || '').match(/gsc.tab=\d/) || [''])[0].substr(8);
      mistats.events.add('event4');
      mistats.setOnce('eVar51', '' + srch);
      mistats.setOnce('eVar61', tab == '1' ? 'Image' : '');

      count = document.getElementById('resInfo-' + tab);
      count && (count = (count.innerHTML || '').match(/about\s+\d+\s+result/i));
      mistats.setOnce('eVar52', count ? count[0].match(/\d+/)[0] : '0');
      s.eVar52 === '0' && (mistats.events.add('event5'));
   };

   function track(pEvent)
   {
      var to;

      if (pEvent)
      {
         to = pEvent.srcElement || pEvent.target;
         if (!to || (to.nodeName === 'INPUT' && to.value !== 'Search') || (to.nodeName === 'DIV' && !(to.innerHTML || '').match(/Web|Image/)))
            return;
         hash = location.hash;
      }

      timer && (clearTimeout(timer));
      timer = setTimeout(function ()
      {
         if (hash == location.hash)
            return;

         setKeywords();
         s.eVar13 = location.hash || '';
         mistats.events.add('event7');
         s.eVar51 && s.eVar51 !== '(blank)' && (mistats.score('search'));
         mistats.adobe.addToQueue(function ()
         {
            s.visitor = Visitor.getInstance(mistats.adobe.mcId);
            mistats.events.add('event7');
            s.t();
         });
      }, 500);
   };

   mistats.bind(window, 'load', function ()
   {
      var fld;
      var gsc;

      fld = document.getElementById('gsc-i-id1');
      gsc = mistats.getElementByClassName(/gsc-control-cse/);
      if (!(fld && gsc))
         return;

      mistats.bind(gsc, 'mouseup', track);
      mistats.bind(fld, 'keyup', function (pEvent)
      {
         if (!(pEvent && pEvent.keyCode))
            return;
         if (pEvent.keyCode == '13')
            track();
         else
            hash = location.hash;
      });
   });

   setKeywords();
};

if (location.pathname === '/search/')
{
   if (mistats.bizunit === 'MIA')
      mistats.googleSearch();
   else
      mistats.getSearchTerm();
}

mistats.escenicLayout = function ()
{
   var l;
   var w;
   
   l = 'escenic';

   w = window.innerWidth || document.documentElement.clientWidth;
   if (w)
   {
      if (w < 768)
         l += ':phone';
      else if (w < 992)
         l += ':tablet-portrait';
      else if (w < 1200)
         l += ':tablet-landscape';
      else
         l += ':desktop';

      w < 1200 && (mistats.responsiveTemplate = 'all');
   }

   return l;
}();

mistats.Interactions = function ()
{
   var count;
   var types;

   types =
   {
      'email_cta': {name: 'Newsletter CTA Signup', type: 'newsletter', once: true},

      'fbc_new_post':  {name: 'FB-Comment Post',   type: 'comment'},
      'fbc_new_reply': {name: 'FB-Comment Reply',  type: 'comment'},
      'fbc_remove':    {name: 'FB-Comment Remove', type: 'comment'},
      'fbc_login':     {name: 'FB-Comment Login',  type: 'comment', once: true},
      'fbc_logout':    {name: 'FB-Comment Logout', type: 'comment', once: true},

      'gfc_allowads': {name: 'GFC Allow Ads Click', once: true},

      'hype_click': {name: 'Hype Click',        type: 'tool'},
      'hype_scene': {name: 'Hype Scene Change', type: 'tool'},

      'load_more': {name: 'Load More'},

      'newsletter_cta': {name: 'Newsletter CTA Click', type: 'newsletter', once: true},

      'promo_click': {name: 'Promo Banner Click', type: 'promoclick', once: true},

      'sec_filter': {name: 'Section Filter Click'},

      'share_fb':    {name: 'Share Facebook',  type: 'social', once: true},
      'share_tw':    {name: 'Share Twitter',   type: 'social', once: true},
      'share_gp':    {name: 'Share Google+',   type: 'social', once: true},
      'share_rd':    {name: 'Share Reddit',    type: 'social', once: true},
      'share_pn':    {name: 'Share Pinterest', type: 'social', once: true},
      'share_dg':    {name: 'Share Digg',      type: 'social', once: true},
      'share_dl':    {name: 'Share Delicious', type: 'social', once: true},
      'share_li':    {name: 'Share LinkedIn',  type: 'social', once: true},
      'share_ms':    {name: 'Share Myspace',   type: 'social', once: true},
      'share_print': {name: 'Share Print',     type: 'social', once: true},
      'share_email': {name: 'Share Email',     type: 'social', once: true},

      'storify_click': {name: 'Storify Click', type: 'tool'},

      'sub_cta_inline_click': {name: 'Sub CTA Inline Click', once: true},
      'sub_cta_card_click':   {name: 'Sub CTA Card Click',   once: true},

      'transparency': {name: 'Transparency Click', once: true},

      'zerg_click': {name: 'Zergnet Click', once: true}
   };

   function increment(pType, pSend)
   {
      var list;

      if (!(pType && types[pType]))
         return false;

      list = (s.list1 || '').length ? s.list1.split(',') : [];
      if (types[pType].once)
         for (i = 0; i < list.length; i++)
            if (list[i] === types[pType].name)
               return false;

      list[list.length] = types[pType].name;
      while (list.length > 250)
         list.shift();

      mistats.setOnce('list1', list.join(','));
      mistats.events.add('event15');

      types[pType].type && (mistats.score(types[pType].type));

      (pSend === true && sendCountsNow());
   };

   function remove(pType)
   {
      var i;
      var list;

      if (!(pType && types[pType]))
         return false;

      list = (s.list1 || '').split(',');
      for (i = 0; i < list.length; i++)
         list[i] === types[pType].name && (list[i] = '');

      list = list.join(',').replace(/,+/g, ',').replace(/^,/, '').replace(/,$/, '');
      mistats.setOnce('list1', list);

      !list.length && (mistats.events.remove('event15'));
   };

   function setCount(pType, pCount, pSend)
   {
      var i;

      if (!(pType && types[pType] && pCount && !isNaN(pCount)))
         return false;

      remove(pType);
      if (pCount > 0)
         for (i = 0; i < pCount; i++)
            increment(pType);

      (pSend === true && sendCountsNow());
   };

   function galleryView()
   {
      mistats.setOnce('eVar56', 'D=eVar59');
      !count && (count = 0);
      count++;
   };

   function custom(pObj)
   {
      if (!(pObj && pObj.name && typeof pObj.count !== 'undefined'))
         return;

      types[pObj.name] =
      {
         name: pObj.name,
         type: pObj.type
      };

      setCount(pObj.name, pObj.count);
      pObj.sendNow === true && (sendCountsNow());
   };

   function sendCountsNow(pEvent)
   {
      if (!(count || s.list1))
         return;

      count && (mistats.events.add('event16=' + count));
      s.tl(true, pEvent ? 'e' : 'o', 'interactions');
   };

   function init()
   {
      if ('onpagehide' in window)
         mistats.bind(window, 'pagehide', sendCountsNow);

      if ('ontouchstart' in window && 'orientation' in window)
         mistats.bind(window, 'blur', sendCountsNow);
      else
         mistats.bind(window, 'beforeunload', sendCountsNow);
   };

   init();

   this.increment   = increment;
   this.remove      = remove;
   this.setCount    = setCount;
   this.galleryView = galleryView;
   this.custom      = custom;
};

mistats.interactions = mistats.interactions || (new mistats.Interactions());

mistats.IframeTracker = function ()
{
   var disabled;
   var iframes;
   var lastTime;
   var mouseX;
   var mouseY;
   var timeout;

   function toggle(pEvent)
   {
      if (pEvent.type === 'keydown')
         disabled = true;
      else
         disabled = false;

      timeout && (clearTimeout(timeout));
      timeout = setTimeout(function ()
      {
         disabled = false;
      }, 1000);
   };

   function click()
   {
      var coords;
      var i;
      var thisTime;

      for (i = 0; i < iframes.length; i++)
      {
         coords = iframes[i].iframe.getBoundingClientRect();

         if (disabled
          || mouseX < coords.left - 5
          || mouseX > coords.right + 5
          || mouseY < coords.top - 5
          || mouseY > coords.bottom + 5
          || coords.top < 6)
            continue;

         thisTime = (new Date()).getTime();
         (!lastTime || thisTime - lastTime > 500) && (iframes[i].callout(iframes[i].iframe));
         lastTime = thisTime;

         if (window.addEventListener)
            window.focus();
         else if (document.documentElement.attachEvent)
            document.documentElement.setActive();
      }
   };

   function trackMouse(pEvent)
   {
      mouseX = pEvent.clientX;
      mouseY = pEvent.clientY;
   };

   function getIframe(pIframe)
   {
      var i;

      for (i = 0; i < iframes.length; i++)
         if (iframes[i].iframe && iframes[i].iframe == pIframe)
            return i;

      return null;
   };

   function init()
   {
      iframes = [];

      if (window.addEventListener)
      {
         window.addEventListener('mousemove', trackMouse, false);
         window.addEventListener('blur', click, false);
         window.addEventListener('keydown', toggle, false);
         window.addEventListener('keyup', toggle, false);
      } else if (document.documentElement.attachEvent)
      {
         document.documentElement.attachEvent('onmousemove', trackMouse);
         document.documentElement.attachEvent('ondeactivate', click);
         document.documentElement.attachEvent('onkeydown', toggle);
         document.documentElement.attachEvent('onkeyup', toggle);
      }
   };

   this.start = function (pIframe, pCallout)
   {
      if (!(pIframe && pIframe.nodeName && pIframe.nodeName === 'IFRAME') || getIframe(pIframe) !== null)
         return;

      iframes[iframes.length] =
      {
         iframe:  pIframe,
         callout: pCallout || function () {}
      };
   };

   this.stop = function (pIframe)
   {
      var i;

      i = getIframe(pIframe);
      i && (iframes.splice(i, 1));
   };

   init();
};

mistats.iframeTracker = mistats.iframeTracker || (new mistats.IframeTracker());

mistats.CommentingTracker = function ()
{
   var pp;

   function create(pEvent)
   {
      if (pEvent && pEvent.parentCommentID)
         mistats.interactions.increment('fbc_new_reply');
      else
         mistats.interactions.increment('fbc_new_post');
   };

   function remove()
   {
      mistats.interactions.increment('fbc_remove');
   };

   function like()
   {
      mistats.interactions.increment('share_fb');
   };

   function unlike()
   {
      mistats.interactions.setCount('share_fb', 0);
   };

   function login()
   {
      mistats.interactions.setCount('fbc_login', 1);
   };

   function logout()
   {
      mistats.interactions.setCount('fbc_logout', 1);
   };

   function clear()
   {
      clearInterval(pp);
   }

   function setup()
   {
      clear();

      FB.Event.subscribe('comment.create', create);
      FB.Event.subscribe('comment.remove', remove);
      FB.Event.subscribe('edge.create', like);
      FB.Event.subscribe('edge.remove', unlike);
      FB.Event.subscribe('auth.prompt', login);
      FB.Event.subscribe('auth.logout', logout);
   };

   function init()
   {
      pp = setInterval(function ()
      {
         if (typeof FB === 'object' && FB.Event && FB.Event.subscribe && mistats.interactions)
            setup();
      }, 500);
      mistats.bind(window, 'load', clear);
   };

   init();
};

mistats.commentingTracker = new mistats.CommentingTracker();

mistats.ShareTracker = function ()
{
   function track(pEvent)
   {
      var label;
      var to;

      to = pEvent.srcElement || pEvent.target;

      if (to.nodeName === 'DIV' && (to.className || '').match(/gig-/))
         label = to.alt || '';
      else
      {
         while (to && to.nodeName !== 'A')
            to = to.parentNode || null;
         to && (label = (to.title || '').match(/facebook|twitter|google|pinterest|reddit|linked-?in|email|^print|reprints/i));
         label && (label = label[0].toLowerCase());
      }
            
      if (!label)
         return;

      switch (label.toLowerCase())
      {
         case 'facebook':
            mistats.interactions.increment('share_fb');
            break;
         case 'twitter':
            mistats.interactions.increment('share_tw');
            break;
         case 'google':
            mistats.interactions.increment('share_gp');
            break;
         case 'pinterest':
            mistats.interactions.increment('share_pn');
            break;
         case 'reddit':
            mistats.interactions.increment('share_rd');
            break;
         case 'linkedin':
         case 'linked-in':
            mistats.interactions.increment('share_li');
            break;
         case 'email':
            mistats.interactions.increment('share_email');
            break;
         case 'print':
            mistats.interactions.increment('share_print');
            break;
         case 'reprints':
            mistats.interactions.increment('order_reprint');
            break;
      }
   };

   function init()
   {
      var i;
      var o;
      var objs;
      var sb;

      sb = mistats.getElementsByClassName(/social-network-macro|share-tools-wrapper/);
      if (mistats.interactions && sb && sb.length)
      {
         for (i = 0; i < sb.length; i++)
            mistats.bind(sb[i], 'mouseup', track);
         return;
      }

      document.readyState !== 'complete' && (setTimeout(init, 1000));
   };

   init();
};

mistats.shareTracker = mistats.shareTracker || (new mistats.ShareTracker());

mistats.GalleryTracker = function ()
{
   var carousel;
   var lastActive;
   var pollPtr;

   function clear()
   {
      pollPtr && (clearInterval(pollPtr));
   };

   function trackCarousel()
   {
      var count;

      clear();
      count = 0;

      pollPtr = setInterval(function ()
      {
         var active;

         active = mistats.getElementByClassName(/active/, carousel)
         if (lastActive && active && lastActive != active)
         {
            clear();
            mistats.interactions && (mistats.interactions.galleryView());
         }
         lastActive = active;
         count++ > 20 && (clear());
      }, 250);
   };

   function init()
   {
      pollPtr = setInterval(function ()
      {
         var i;
         var obj;

         carousel = document.getElementById('story-gallery') || mistats.getElementByClassName(/carousel-inner|gallery-container/);
         if (!carousel)
            return;
         clear();
         mistats.bind(carousel, 'ontouchstart' in window ? 'touchstart' : 'mousedown', trackCarousel);

         obj = document.getElementsByTagName('a');
         if (!obj)
            return;
         for (i = 0; i < obj.length; i++)
            (obj[i].getAttribute('onclick') || '').toString().match(/\.updatePictureIndex/) && (mistats.bind(obj[i], 'mousedown', trackCarousel));
      }, 500);

      mistats.bind(window, 'load', function ()
      {
         setTimeout(clear, 1000);
      });
   };

   init();
};

mistats.galleryTracker = mistats.galleryTracker || (new mistats.GalleryTracker());

mistats.StorifyTracker = function ()
{
   var disabled;
   var lastTime;
   var mouseX;
   var mouseY;
   var storify;
   var timeout;

   function toggle(pEvent)
   {
      if (pEvent.type === 'keydown')
         disabled = true;
      else
         disabled = false;

      timeout && (clearTimeout(timeout));
      timeout = setTimeout(function ()
      {
         disabled = false;
      }, 1000);
   };

   function click()
   {
      var coords;
      var thisTime;

      coords = storify.getBoundingClientRect();

      if (disabled
       || mouseX < coords.left - 5
       || mouseX > coords.right + 5
       || mouseY < coords.top - 5
       || mouseY > coords.bottom + 5)
         return;

      thisTime = (new Date()).getTime();
      (!lastTime || thisTime - lastTime > 500) && mistats.interactions && (mistats.interactions.increment('storify_click'));
      lastTime = thisTime;

      if (window.addEventListener)
         window.focus();
      else if (document.documentElement.attachEvent)
         document.documentElement.setActive();
   };

   function trackMouse(pEvent)
   {
      mouseX = pEvent.clientX;
      mouseY = pEvent.clientY;
   };

   function setup()
   {
      if (window.addEventListener)
      {
         window.addEventListener('mousemove', trackMouse, false);
         window.addEventListener('blur', click, false);
         window.addEventListener('keydown', toggle, false);
         window.addEventListener('keyup', toggle, false);
      } else if (document.documentElement.attachEvent)
      {
         document.documentElement.attachEvent('onmousemove', trackMouse);
         document.documentElement.attachEvent('ondeactivate', click);
         document.documentElement.attachEvent('onkeydown', toggle);
         document.documentElement.attachEvent('onkeyup', toggle);
      }
   };

   function init()
   {
      var i;
      var iframes;

      iframes = document.getElementsByTagName('iframe');
      for (i = 0; !storify && i < iframes.length; i++)
         (iframes[i].src || '').match(/storify\.com\/.+/i) && (storify = iframes[i]);
      storify && storify.getBoundingClientRect && (setup());
   };

   init();
};

mistats.storifyTracker = mistats.storifyTracker || (new mistats.StorifyTracker());

mistats.TrackVideoJS = function ()
{
   var isAMP;
   var isEmbed;
   var players;

   function Player(pPlayer)
   {
      var index;
      var timer;
      var video;

      function trim(pStr)
      {
         return (pStr || '').replace(/^\s+/, '').replace(/\s+$/, '').replace(/\s+/g, ' ');
      };

      function getIndex()
      {
         var i;

         if (pPlayer.playlist && pPlayer.playlist.currentIndex)
         {
            i = pPlayer.playlist.currentIndex();
            return i < 0 ? 0 : i;
         }

         if (pPlayer.options_ && pPlayer.options_.irisPlays)
            return pPlayer.options_.irisPlays;

         return 0;
      };

      function getItem()
      {
         var bl;
         var cv;
         var el;
         var i;
         var id;
         var item;
         var md;
         var obj;
         var pd;
         var t;
         var url;

         if (pPlayer.playlist && pPlayer.playlist.currentIndex)
         {
            item  = (pPlayer.playlist())[getIndex()];
            t   = item.title;
            url = item.url;
            id  = item.id;
            bl  = item.videographer;
         } else if (pPlayer.options_)
         {
            item = pPlayer.options_;
            if (item.playlist && Array.isArray(item.playlist))
            {
               el = pPlayer.el();
               el.parentNode && el.parentNode.parentNode && el.parentNode.parentNode.parentNode && (obj = mistats.getElementByClassName(/playlistItem selected/, el.parentNode.parentNode.parentNode));
               cv = obj && !isNaN(obj.getAttribute('data-index')) ? item.playlist[parseInt(obj.getAttribute('data-index'))] : null;
            } else
               cv = item.playlist;

            t   = cv && cv.name ? cv.name : item['data-title'];
            url = item['data-url'];
            id  = item['data-video-id'];
            md  = cv && cv.updated_at ? cv.updated_at : '';
            pd  = cv && cv.published_at ? cv.published_at : '';

            bl = [];
            if (cv && cv.custom_fields)
               for (i in cv.custom_fields)
                  (i || '').match(/byline\d*|credit\d*/) && (typeof cv.custom_fields[i] === 'string') && (bl[bl.length] = trim(cv.custom_fields[i]));
            bl = bl.join(',');
         }

         return (
         {
            t:   trim(t || 'No Title'),
            url: trim(url || ''),
            id:  id || 'None',
            bl:  trim(bl || 'None'),
            md:  md || '',
            pd:  pd || ''
         });
      };

      function getDateString(pDate)
      {
         var ds;
         var rv;

         if (!(pDate || '').match(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/))
            return '';

         ds = new Date(pDate);
         rv = ds.getFullYear() + '/';
         t = (ds.getMonth() + 1).toString();
         rv += (t.length < 2 ? '0' : '') + t + '/'
         t = ds.getDate().toString();
         rv += (t.length < 2 ? '0' : '') + t + ' H';
         t = ds.getHours().toString();
         rv += (t.length < 2 ? '0' : '') + t;

         return rv;
      };

      function Video()
      {
         var cc;
         var i;
         var item;
         var loc;
         var obj;
         var self;
         var vids;

         index = getIndex();
         item  = getItem();
         obj   = pPlayer.el();
         vids  = obj.getElementsByTagName('video');

         cc = obj && mistats.getElementByClassName(/vjs-subs-caps-button/, obj) ? 'yes' : 'no';

         while (obj && !loc)
         {
             loc = (obj.id || '').match(/in-depth|mainstage|video-widget|video-full|story-gallery|story-body-items/) || (obj.className || '').match(/top-video|inline-video|lead-item|video-gallery|main-stage|story-gallery|story-cta-wrap|big-digest|video_inline|video-detail/);
             obj = obj.parentNode || null;
         }
         loc && (loc = loc[0]);

         self = this;

         self.title    = item.t || 'No Title';
         self.current  = 0;
         self.elapsed  = 0;
         self.duration = 0;
         self.file     = pPlayer.currentSrc() || '';
         self.location = loc || '';
         self.playing  = 0;
         self.started  = false;
         self.playlist = pPlayer.options_ && pPlayer.options_['data-video-type'] === 'playlist' ? 'Manual' : 'Automatic';
         self.url      = item.url;
         self.videoId  = item.id;
         self.vgrapher = item.bl;
         self.modDate  = getDateString(item.md);
         self.pubDate  = getDateString(item.pd).replace(/\sH.*/, '');
         self.adId     = '';
         self.cc       = cc;

         self.ad =
         {
            click:      { event: 'event26', value: 0 },
            companions: { event: 'event27', value: 0 },
            complete:   { event: 'event28', value: 0 },
            error:      { event: 'event29', value: 0 },
            impression: { event: 'event30', value: 0 },
            skipped:    { event: 'event31', value: 0 }
         };

         self.shares =
         {
            facebook: { name: 'Video Share Facebook', value: false },
            twitter:  { name: 'Video Share Twitter',  value: false },
            email:    { name: 'Video Share Email',    value: false },
            embed:    { name: 'Video Share Embed',    value: false },
            link:     { name: 'Video Share Link',     value: false }
         };

         self.iris =
         {
            back:       { name: 'Video Back',        value: false },
            forward:    { name: 'Video Forward',     value: false },
            mute:       { name: 'Video Mute',        value: false },
            unmute:     { name: 'Video Unmute',      value: false },
            fullscreen: { name: 'Video Fullscreen',  value: false },
            slate:      { name: 'Video Up Next',     value: false },
            close:      { name: 'Video Close Fixed', value: false },
            'vjs-caps-active':   { name: 'Video Captions Off', value: false},
            'vjs-caps-inactive': { name: 'Video Captions On',  value: false}
         };

         if (vids)
            for (i = 0; i < vids.length; i++)
               vids[i].title = self.title;

         timer = setInterval(function ()
         {
//            !self.started && self.paused && !self.paused() && (self.started = true);
            if (!self.started)
               return;
            !self.duration && (self.duration = pPlayer.duration());
            self.elapsed += self.playing;
            self.current += self.playing;
         }, 1000);
      };

      function close(pEvent)
      {
         var ev;
         var i;
         var list;
         var obj;
         var sn;

         timer && (clearInterval(timer));

         if (video && video.started && !(video.file || '').match(/\/solid_black-\d+.mp4/))
         {
            video.current > video.duration && (video.current = video.duration);
            sn = Math.ceil((video.current || 1) / Math.round(video.duration / 4));
            video.elapsed > video.duration && (video.elapsed = Math.round(video.duration));
            ev = ['event22=' + video.elapsed, 'event23', 'event25'];

            if (video.duration - video.elapsed < 3)
            {
               ev[ev.length] = 'event24';
               sn = 5;
               mistats.score('video');
            }

            for (i in video.ad)
               video.ad[i].value && (ev[ev.length] = video.ad[i].event + '=' + video.ad[i].value);

            list = [];

            for (i in video.shares)
               video.shares[i].value && (list[list.length] = video.shares[i].name);

            for (i in video.iris)
               video.iris[i].value && (list[list.length] = video.iris[i].name);

            if (list.length)
            {
               list = list.concat(s.list1 ? s.list1.split(',') : []);
               mistats.setOnce('list1', list.join(','));
               mistats.events.add('event15');
            }

            ev[ev.length] = ['event33', 'event34', 'event35', 'event36'][sn - 1];

            if (video.location === 'lead-item')
            {
               obj = pPlayer.el();
               while (obj)
                  if  ((obj.className || '').match(/is-sticky/))
                  {
                     video.location = 'fixed';
                     break;
                  } else
                     obj = obj.parentNode || null;
            }

            mistats.events.add(ev);
            mistats.setOnce('eVar2', 'MCVideo: ' + video.file);
            mistats.setOnce('eVar17', video.title);
            mistats.setOnce('eVar18', sn + ':' + ['Start', '25%', '50%', '75%', 'End'][sn - 1]);
            mistats.setOnce('eVar19', 'video');
            mistats.setOnce('eVar20', (isEmbed && !isAMP ? 'Offsite embed: ' : '') + 'MCVideo played on ' + mistats.bizunit);
            mistats.setOnce('eVar34', video.playlist);
            mistats.setOnce('eVar35', 'D=h1');
            mistats.setOnce('eVar36', video.videoId);
            mistats.setOnce('eVar37', video.vgrapher);
            mistats.setOnce('eVar38', isAMP ? 'AMP' : (isEmbed ? 'Offsite' : video.location));
            mistats.setOnce('eVar39', s.referrer);
            mistats.setOnce('eVar62', video.cc);
            isAMP && (mistats.setOnce('eVar74', 'Vendor: AMP'));
            mistats.setOnce('prop32', video.modDate);
            mistats.setOnce('prop31', video.pubDate);
            mistats.setOnce('list2', video.adId);
            if (video.ad.click.value)
            {
               mistats.setOnce('eVar3', 'video');
               mistats.setOnce('eVar47', 'preroll');
            }

            isEmbed && !isAMP && window.adobe && window.adobe.target && mistats.adobe && window.Visitor && (s.visitor = Visitor.getInstance(mistats.adobe.mcId));
            s.tl(true, pEvent ? 'e' : 'o', 'video');
         }

         delete video;
         video = null;
      };

      function event(pObj)
      {
         var curIdx;

         if (!pObj)
            return;

         curIdx = getIndex();

         if (!video || index !== curIdx)
         {
            close();
            video = new Video();
         }

         switch (pObj.type)
         {
            case 'loadstart':
               break;
            case 'firstplay':
            case 'play':
            case 'playing':
            case 'seeked':
               video.started = true;
               video.playing = 1;
               video.current = pPlayer.currentTime();
               break;
            case 'adclick':
               video.ad.click.value++;
               break;
            case 'adskip':
               video.ad.skipped.value++;
               break;
            case 'adend':
               video.ad.complete.value++;
               break;
            case 'adstart':
               video.ad.impression.value++;
            case 'pause':
            case 'seeking':
               video.playing = 0;
               video.current = pPlayer.currentTime();
               break;
            case 'ended':
               video.playing = 0;
               close();
               break;
            case 'error':
               video.playing = 0;
               break;
         }

         if (video)
            !video.adId
            && pPlayer.ima
            && pPlayer.ima.controller
            && pPlayer.ima.controller.sdkImpl
            && pPlayer.ima.controller.sdkImpl.currentAd
            && pPlayer.ima.controller.sdkImpl.currentAd.g
            && pPlayer.ima.controller.sdkImpl.currentAd.g.adId
            && (video.adId = pPlayer.ima.controller.sdkImpl.currentAd.g.adId);
      };

      function share(pEvent)
      {
         var to;
         var type;

         pEvent && pEvent.target && (to = pEvent.target);
         while (to && !(to.nodeName === 'A' || to.nodeName === 'FORM'))
            to = to.parentNode || null;

         to && (type = (to.className || '').match(/facebook|twitter|email|embed|link/));
         type && video.shares[type[0]] && (video.shares[type[0]].value = true);
      };

      function irisControl(pEvent)
      {
         var to;
         var type;

         pEvent && pEvent.target && (to = pEvent.target);
         while (to && to.nodeName !== 'BUTTON')
            to = to.parentNode || null;

         to && (type = (to.title || '').toLowerCase().match(/back|forward|mute|unmute|fullscreen/) || (to.className || '').match(/vjs-caps-inactive|vjs-caps-active/));
         type && video.iris[type[0]] && (video.iris[type[0]].value = true);
      };

      function irisUpNextClose(pEvent)
      {
         var to;
         var type;

         pEvent && pEvent.target && (to = pEvent.target);
         while (to && !type)
         {
            type = (to.className || '').match(to.nodeName === 'BUTTON' ? /close/ : /slate/);
            to = to.parentNode || null;
         }

         type && video.iris[type[0]] && (video.iris[type[0]].value = true);
      };

      function initPlayer()
      {
         var i;
         var icons;
         var obj;
         var vids;

         if (pPlayer.el && pPlayer.el().id === 'gallery-preroll')
            return;

         pPlayer.on('playing', event);
         pPlayer.on('play', event);
         pPlayer.on('pause', event);
         pPlayer.on('ended', event);
         pPlayer.on('seeked', event);
         pPlayer.on('seeking', event);
         pPlayer.on('loadstart', event);
         pPlayer.on('adclick', event);
         pPlayer.on('adstart', event);
         pPlayer.on('adend', event);
         pPlayer.on('adskip', event);

         if ('onpagehide' in window)
            mistats.bind(window, 'pagehide', close);

         if ('ontouchstart' in window && 'orientation' in window)
            mistats.bind(window, 'blur', close);
         else
            mistats.bind(window, 'beforeunload', close);

         obj = pPlayer.el();
         obj && obj.parentNode && (icons = mistats.getElementByClassName(/video-share-icons/, obj.parentNode));
         icons && (mistats.bind(icons, 'mouseup', share));

         icons = null;
         obj && (icons = mistats.getElementByClassName(/vjs-control-bar/, obj));
         icons && (mistats.bind(icons, 'mousedown', irisControl));
         obj && (mistats.bind(obj, 'mousedown', irisUpNextClose));

/*
         obj && (vids = obj.getElementsByTagName('video'));
         if (vids)
         {
            window._cbv = window._cbv || [];
            for (i = 0; i < vids.length; i++)
               window._cbv.push(vids[i]);
         }
*/
         video = new Video();
         obj = video.location === 'lead-item' ? mistats.getElementByClassName('mi-sticky-player') : null;
         obj && (mistats.bind(obj, 'mousedown', irisUpNextClose));
      };

      initPlayer();
   };

   function init(pCount)
   {
      var i;
      var objs;
      var player;
      var vjsArray;
      var vjsObjs;

      if (typeof videojs !== 'undefined' && videojs.getPlayers)
      {
         players = [];
         vjsArray = [];
         objs = mistats.getElementsByClassName(/mi-videojs/);
         vjsObjs = videojs.getPlayers();

         for (i in vjsObjs)
            vjsArray[vjsArray.length] = i;

         if (objs.length && vjsArray.length && objs.length <= vjsArray.length)
         {
            for (i = 0; i < objs.length; i++)
            {
               player = objs[i].id ? vjsObjs[objs[i].id] : null;
               player && (players[players.length] = new Player(player));
            }

            isEmbed = (location.pathname || '').match(/\/video-embed/i);
            isAMP = isEmbed && window != top && (document.referrer || '').match(/\/{2}amp(-|\.)|relaymedia\.com\/amp/);

            if (players.length)
              return;
         }
      }

      pCount < 120 && (setTimeout(function ()
      {
         init(++pCount);
      }, 1000));
   };

   init(0);
};

mistats.trackVideoJS = mistats.trackVideoJS || (new mistats.TrackVideoJS());

mistats.ViewTracker = function ()
{
   var date;
   var events;
   var height;
   var length;
   var page;
   var peakView;
   var pgLevel;
   var poller;
   var scroll;

   var cCookie = 'mi_ppv';
   var cTTL = 604800000;

   function trackView(pEvent)
   {
      var comments;
      var newView;
      var numPages;
      var pageLength;
      var rect;
      var zoom;

      zoom = 1;

      if (document.body.getBoundingClientRect)
      {
         rect = document.body.getBoundingClientRect();
         zoom = (rect.right - rect.left) / document.body.offsetWidth;
      }

      if (page.clientHeight / zoom < height || (window.pageYOffset || page.scrollTop) / zoom < scroll)
         return;

      height = page.clientHeight / zoom;
      length = page.scrollHeight / zoom;
      scroll = (window.pageYOffset || page.scrollTop) / zoom;

      date.setTime(date.getTime() + cTTL);

      if (!height)
         return s.c_w(cCookie, 'No Viewport Height', date);

      if (!length)
         return s.c_w(cCookie, 'No Page Height', date);

      comments = document.getElementById('commentingStage');

      if (comments && comments.offsetTop)
      {
         length -= comments.scrollHeight;
         if (scroll > comments.offsetTop - height)
         {
            if (scroll > (comments.offsetTop - height) + comments.scrollHeight)
               scroll -= comments.scrollHeight;
            else
               scroll = comments.offsetTop - height;
         }
      }

      pageLength = (Math.round(length / 500) * 500);
      numPages = Math.round(length / height);

      if (pageLength <= 250)
         pageLength = 500;
      else if (pageLength > 20000)
         pageLength = 'Over20k';

      if (numPages > 10)
         numPages = '10+';

      newView = (Math.round((((scroll + height) / length) * 100) / 5) * 5);

      if (peakView < newView)
         peakView = newView;

      if (peakView >= 100)
      {
         if (events)
         {
            mistats.unbind(window, 'scroll', trackView);
            mistats.unbind(window, 'resize', trackView);
            mistats.unbind(window, 'zoom', trackView);

            events = false;
         }
         peakView = 100;
      }

      s.c_w(cCookie, pgLevel + ': ' + [pageLength + 'px', numPages + 'sc', peakView + '%'].join(' : '), date);
   };

   function init()
   {
      page = document.documentElement;
      peakView = 0;
      date = new Date();

      if (s.prop3.match(/Home|Section|Story|Vendor|Product/i) && !s.prop3.match(/Drupal/i))
         pgLevel = s.prop3.replace(/^\*/, '').substring(0, 3);
      else
         pgLevel = 'Oth';

      trackView();

      mistats.bind(window, 'scroll', trackView);
      mistats.bind(window, 'resize', trackView);
      mistats.bind(window, 'zoom', trackView);

      events = true;
   };

   poller = setInterval(function ()
   {
      if (typeof mitagsent === 'undefined' || !mitagsent)
         return;

      clearTimeout(poller);
      init();
   }, 1000);
};

mistats.viewTracker = new mistats.ViewTracker();

mistats.wordCount = function ()
{
   var entries;
   var i;
   var objs;
   var story;
   var total;

   objs = document.getElementsByTagName('*');
   for (i = 0; !story && i < objs.length; i++)
      ((objs[i].id || '').match(/^content-body/) || (objs[i].className || '').toString().match(/^story-body/)) && (story = objs[i]);

   if (!story || !(mistats.pagelevel || '').match(/story/i))
      return null;

   story = story.cloneNode(true);
   objs = story.getElementsByTagName('script');
   for (i = 0; i < objs.length; i++)
      objs[i].innerHTML = '';

   entries = encodeURIComponent((story.innerHTML || '').
      replace(/<[^>]+>/g, '').
      replace(/&nbsp;/gi, '').
      replace(/\s+/g, ' ').
      replace(/^\s/, '').
      replace(/\s$/, '')
   ).replace(/%20/g, ' ').replace(/%\w{2}/g, '');

   total = entries.split(' ').length;
   if (total && total < 50)
      total = 50;
   else
      total = Math.round(total / 100) * 100;

   return 'StoryWords:' + total;
};

mistats.HypeTracker = function (pWin)
{
   var dn;
   var doc;
   var hype;
   var pp;

   function clear()
   {
      pp && (clearInterval(pp));
   };

   function loaded()
   {
      var i;
      var loader;
      var objs;

      objs = hype.getElementsByTagName('div');
      for (i = 0; !loader && i < objs.length; i++)
         ((objs[i].className || '').match(/HYPE_Loading/i) || (objs[i].innerHTML || '').match(/\s*Loading\s*/i)) && (loader = objs[i]);

      if (!loader || (loader.style.display || '') === 'none')
         return true;
      return false;
   };

   function click()
   {
      var state;
      var scene;

      state = hype.innerHTML;
      scene = doc.currentSceneName();

      clear();
      pp = setTimeout(function ()
      {
         if (state != hype.innerHTML)
         {
            if (scene == doc.currentSceneName())
               mistats.interactions.increment('hype_click');
            else
               mistats.interactions.increment('hype_scene');
         }
      }, 1000);
   };

   function findHype()
   {
      var i;
      var objs;

      objs = pWin.document.getElementsByTagName('*');
      for (i = 0; i < objs.length; i++)
         for (dn in {'hype_documentname': true, 'hyp_dn': true})
            if (objs[i][dn] || objs[i].getAttribute(dn))
               return objs[i];

      return null;
   };

   function setup()
   {
      clear();
      doc = pWin.HYPE.documents[hype.getAttribute(dn)];
      mistats.bind(hype, 'mousedown', click);
   };

   function init()
   {
      var pc;

      pc = 0;
      pp = setInterval(function ()
      {
         try
         {
            pWin.mistats_hypeTracker = true;
         } catch (error)
         {
            return clear();
         }

         if (!(pWin && pWin.document))
            return clear();

         if (pc++ > 120 || pWin.document.readyState === 'complete')
            clear();

         hype = hype || findHype();
         hype && pWin.HYPE && loaded() && (setup());
      }, 1000);
   };

   init();
};

window == top && (mistats.trackHype = setInterval(function ()
{
   var i;
   var iframes;
   var wins;

   document.readyState === 'complete' && (clearInterval(mistats.trackHype));

   wins = [window];
   iframes = document.getElementsByTagName('iframe');
   for (i = 0; i < iframes.length; i++)
      try
      {
         iframes[i].src.length &&
         (iframes[i].src.match(new RegExp('^/[a-z0-9]|https*://' + location.hostname, 'i')) || !iframes[i].src.match(/^https*:/i)) &&
         iframes[i].contentWindow &&
         !iframes[i].contentWindow.mistats_hypeTracker &&
         (wins[wins.length] = iframes[i].contentWindow);
      } catch (error)
      {
      }
   for (i = 0; i < wins.length; i++)
      try
      {
         !wins[i].mistats_hypeTracker && (new mistats.HypeTracker(wins[i]));
      } catch (error)
      {
      }
}, 2000));

mistats.bind(window, 'load', function ()
{
   mistats.trackHype && (clearInterval(mistats.trackHype));
});

mistats.TrackSectionFilter = function ()
{
   var pm;
   var pp;

   function clear()
   {
      pp && (clearInterval(pp));
   };

   function setup()
   {
      clear();
      mistats.bind(pm, 'mouseup', function (pEvent)
      {
         pEvent && pEvent.target && pEvent.target.nodeName === 'A' && mistats.interactions && (mistats.interactions.increment('sec_filter'));
      });
   };

   function init()
   {
      pp = setInterval(function ()
      {
         pm = mistats.getElementByClassName(/portable-menu-rollup/);
         pm && (setup());
      }, 250);

      mistats.bind(window, 'load', clear);
   };

   init();
};

mistats.trackSectionFilter = mistats.trackSectionFilter || (new mistats.TrackSectionFilter());

mistats.CTAListener = function ()
{
   var timer;
   var waiting;

   function clearTimer()
   {
      timer && (clearTimeout(timer));
      mistats.unbind(window, 'load', setTimer);
   };

   function setTimer()
   {
      clearTimer();
      timer = setTimeout(ready, 2000);
   };

   function isWaiting()
   {
      mistats.ctaWidget && (waiting = false);
      return waiting;
   };

   function ready()
   {
      waiting = false;
      clearTimer();
      timer = null;
      mistats.windowEvent('mistats_cta_widget');
   };

   function init()
   {
      var enabled;
      var i;
      var objs;

      objs = document.getElementsByTagName('script');
      for (i = 0; !enabled && i < objs.length; i++)
         (objs[i].innerHTML || '').match(/mi.calltoActionCtrl\s*=/) && (objs[i].innerHTML || '').match(/mi.calltoActionCtrl\.init\(true,\s*true\)/) && (enabled = true);

      waiting = false;
      if (!enabled || mistats.ctaWidget || !(document.getElementById('story-cta-widget') && document.getElementById('newsletter-signUpWidget')))
         return;

      waiting = true;
      mistats.bind(window, 'cta_widget', ready);

      if (document.readyState === 'complete')
         setTimer();
      else
         mistats.bind(window, 'load', setTimer);
   };

   this.isWaiting = isWaiting;
   init();
};

mistats.ctaListener = mistats.ctaListener || (new mistats.CTAListener());

mistats.TrackConnatix = function ()
{
   var clicked;
   var count;
   var open;

   function decorate()
   {
      clicked = true;
      if (!open)
      {
         open = window.open;
         window.open = function (a, b, c)
         {
            typeof a === 'string' && a.match(/\/article\d+\.html/) && clicked && (a = a.replace(/#intcid=connatix[^&]*/g, '') + '#intcid=connatix');
            clicked = false;
            return open.call(window, a, b, c);
         };
      }
   };

   function init()
   {
      var cnx;

      cnx = document.getElementById('ConnatixVideoAd');

      if (!(cnx && window.cnxExternalInterface))
      {
         count++ < 60 && (setTimeout(init, 1000));
         return;
      }

      mistats.bind(cnx, 'mouseup', decorate);
   };

   count = 0;
   init();
};

mistats.trackConnatix = mistats.trackConnatix || (new mistats.TrackConnatix());

mistats.updateStoryHistory = function (pBeacon)
{
   var i;
   var list;
   var nlist;
   var now;
   var np;
   var op;
   var url;

   if (!(window.localStorage && pBeacon && (pBeacon || '').match(/^https?:\/\/mcclatchy\.sc\.omtrdc\.net\/b\/ss/)))
//   if (!window.localStorage)
      return;

   list = window.localStorage.getItem('mistats_sh');
   if (list)
      try
      {
         list = JSON.parse(atob(list));
      } catch (err)
      {
      }

   list = list && Array.isArray(list) ? list : [];
   nlist = [];
   now = Date.now();

   if (mistats.escenicId)
   {
      url = pBeacon.split('?');
      url.length === 2 && (op = url[1].split('&'));
      np = ['ts=' + Math.round(now / 1000)];
      for (i = 0; i < op.length; i++)
         op[i].match(/^(pageName|g|ch|server|sdid|mid|aid|aamlh|aamb|v1|v4|v7|v13|v14|v23|v24|v26|v27|v54|v59|v74|h1|c1|c2|c3|c4|c6|c13|c18|c21|c22|c23|c24|c25|c26|c27|c31|c32|c35|c39|c41|c52|c53|c56|r|mcorgid|)=/) && (np[np.length] = op[i]);
      np[np.length] = 'pe=lnk_o&pev1=D%3Dg&pev2=conversion';

      i = list.findIndex(function (pItem)
      {
         return pItem && pItem.id == mistats.escenicId
      });
      i > -1 && (list.splice(i, 1));
      list[list.length] = {id: mistats.escenicId, ts: now, qs: np};
//      list[list.length] = {id: mistats.escenicId, ts: now};
   }

   for (i = 0; i < list.length; i++)
//      list[i].ts && now - list[i].ts > 2592000000 && (list[i] = null);
      list[i].ts && now - list[i].ts > 604800000 && (list[i] = null);
   for (i = 0; i < list.length; i++)
      list[i] && list[i].id && list[i].ts && (nlist[nlist.length] = list[i]);
   while (nlist.length > 5)
//   while (nlist.length > 10)
      nlist.shift();

   window.localStorage.setItem('mistats_sh', btoa(JSON.stringify(nlist)));
};

mistats.trackDirectConversion = function ()
{
   var sid;
   var url;
   var xr;

   sid = s.c_r('mi_rsi');
   if (!sid)
      return;

   s.c_w('mi_rsi', '', new Date(Date.now() - 60000));
   if (isNaN(sid) || mistats.isDirectConv)
      return;

   if (mistats.escenicId == sid)
   {
      mistats.events.add('event45');
      return;
   }

   url = location.protocol + '//' + location.hostname + '/article' + sid + '.html';
   xr = new XMLHttpRequest();
   xr.open('get', url + '?' + Date.now(), true);
   xr.onreadystatechange = function ()
   {
      var at;
      var i;
      var obj;
      var page;
      var resp;

      if (xr.readyState < 4)
         return;
      if (xr.status == 200)
         resp = xr.responseText;
      if (!resp)
         return;
      resp = resp.replace(/\n/g, ' ').replace(/\s+/, ' ');

      page = '<!DOCTYPE html><html lang="en"><head>';
      obj = resp.match(/<meta name="keywords"[^>]+>/);
      obj && (page += obj[0]);
      at = (resp.match(/'access.tags':\s*'[^']+/) || [''])[0].replace(/'access.tags':\s*'/, '');
      obj = resp.match(/<script type="text\/javascript">\s+var mistats[^<]+<\/script>/);
      obj && (page += obj[0]);
      obj = resp.match(/<script src="(https?:)?\/{2}media\d?\.[^\.]+\.com\/misites\/[a-z]{3}\/[^\.]+\.js"><\/script>/);
      if (!obj)
         return;
      page = page
       + '</head><body><script type="text\/javascript">history.replaceState(\'\', document.title, \'' + url + '\');</script>'
       +  obj[0].replace(/src="\/{2}/, 'src="https://')
       + '<script type="text\/javascript" src="https://media2.newsobserver.com/mistats/products/escenic_s_code.js"></script>'
       + '<script type="text\/javascript" src="https://media2.newsobserver.com/mistats/products/escenic.js"></script>'
       + '<script type="text\/javascript">mistats.isDirectConv = true; window != top && (mistats.events.add(\'event45\'));' + (at ? ('s.prop59 = \'' + at + '\';') : '') + '</script>'
       + '<script type="text\/javascript" src="https://media2.newsobserver.com/mistats/finalizestats.js"></script>'
       + '</body></html>';

      ifr = document.body.appendChild(document.createElement('iframe'));
      ifr.width = 1;
      ifr.height = 1;
      ifr.style.display = 'none';
      ifr.contentWindow.document.write(page);
   };
   xr.send(null);
};

mistats.updateMeter = function ()
{
   var i;
   var meter;
   var now;
   var seen;
   var token;

   function Meter()
   {
      this.at = token;
      this.ts = now;
      this.sh = [];
      this.pw = false;
   };

   if (!window.localStorage)
      return 'meter:storage_unsupported';

   token = s.c_r('AccessToken');
   if (!token)
      return 'meter:anonymous';

   now = Date.now();
   meter = window.localStorage.getItem('mistats_pm');
   if (meter)
      try
      {
         meter = JSON.parse(atob(meter));
      } catch (err)
      {
         meter = undefined;
      }

   (!meter || !meter.sh || !Array.isArray(meter.sh) || meter.at !== token || now - meter.ts > 2592000000) && (meter = new Meter());
   s.c_r('mi_rsi') && (meter.pw = true);

   if (mistats.escenicId && mistats.pagelevel === 'Story')
   {
      for (i = 0; !seen && i < meter.sh.length; i++)
         meter.sh[i] == mistats.escenicId && (seen = true);
      !seen && (meter.sh[meter.sh.length] = mistats.escenicId);
   }

   while (meter.sh.length > 25)
      meter.sh.shift();

   window.localStorage.setItem('mistats_pm', btoa(JSON.stringify(meter)));

   return 'meter:' + meter.sh.length;
};

mistats.getAuthors = function ()
{
   var auth;
   var byline;
   var i;
   var ld;
   var objs;

   if (mistats.pagelevel === 'Story')
   {
      if (mistats.contentsource && !mistats.contentsource.match(/\||^by\s+|\s+y\s+|^por\s+/i))
         auth = mistats.contentsource.replace(/^\s+/, '').replace(/\s*$/, '').replace(/\s+/g, ' ');
      else
      {
         byline = (((mistats.getElementsByClassName(/^ng_byline_name/) ||
            mistats.getElementsByClassName(/^ng_byline_credit/)) ||
               mistats.getElementsByClassName(/^naox_byline_name/)) ||
            mistats.getElementsByClassName(/^byline/)) ||
         [];

         auth = [];

         for (i = 0; i < byline.length; i++)
         {
            tmp = (byline[i].innerHTML || '').
               replace(/\n/g, ' ').
               replace(/<[^>]+>/g, ' ').
               replace(/^\s+/, '').
               replace(/\s*$/, '').
               replace(/\w*\s+by\s+/gi, '').
               replace(/^by\s+/gi, '').
               replace(/\?+/g, '').
               replace(/\s+/g, ' ').
               replace(/ and /gi, ',').
               replace(/ y /gi, ',').
               replace(/\s*,\s*/g, ',').
               replace(/,+/g, ',').
               replace(/^by,/i, '').
               replace(/,by$/i, '').
               replace(/,by,/gi, ',').
               replace(/^por\s/gi, '').
               replace(/,por\s/gi, ',').
               replace(/^,+/, '').
               replace(/,+$/, '').
               replace(/N,O Editorial/, 'N And O Editorial');
            tmp && (auth[auth.length] = tmp);
         }

         if (!auth.length)
         {
            objs = document.getElementsByTagName('script');
            for (i = 0; !ld && i < objs.length; i++)
               (objs[i].innerHTML || '').match(/"@type": "NewsArticle"/) && (ld = objs[i].innerHTML.replace(/\n/g, ' ').match(/"author": \{[^\}]+\}/g));
            if (ld)
               for (i = 0; i < ld.length; i++)
                  try
                  {
                     objs = JSON.parse('{' + ld[i] + '}');
                     objs && objs['author'] && objs['author']['name'] && (auth[auth.length] = objs['author']['name']);
                  } catch (ldErr)
                  {
                  }
         }

         auth = auth.join(',');
      }
      mistats.authors = auth;
   }
};

mistats.getAuthors();

mistats.trackLoadMore = function ()
{
   var lm;

   lm = mistats.getElementByClassName('load-more');
   if (!(lm && lm.parentNode && mistats.bind && mistats.interactions))
      return;
   mistats.bind(lm.parentNode, 'mousedown', function (pEvent)
   {
      var to;
      if (!pEvent)
         return;
      to = pEvent.target;
      while (to && !(to.nodeName.match(/BUTTON|A/)))
         to = to.parentNode || null;
      if (!to)
         return;
      switch(to.nodeName)
      {
         case 'BUTTON':
            mistats.interactions.increment('load_more');
            break;
         case 'A':
            (to.href || '').match(/^(https?:\/{2}|\/)/) && (to.href = to.href.replace(/#.*/, '') + '#storylink=loadmore');
      };
   });
};

if (mistats.pagelevel === 'Section')
{
   if (document.readyState === 'complete')
      mistats.trackLoadMore();
   else
      document.addEventListener('DOMContentLoaded', mistats.trackLoadMore, false);
}

mistats.pagelevel === 'Story' && (document.addEventListener('DOMContentLoaded', function ()
{
   var efjs;
   var scr;

   function f()
   {
      if (!(window.EF && window.EF.init && window.EF.main))
         return;

      window.EF.init(
      {
         eventType: 'transaction',
         transactionProperties: 'ev_ContentPage_Story=1&timestamp=' + Date.now(),
         segment: '',
         searchSegment: '',
         sku: '',
         userid: '7996',
         pixelHost: 'pixel.everesttech.net',
         allow3rdPartyPixels: 1
      });
      window.EF.main();
   };

   window.EF = window.EF || {};

   if (window.EF.main)
   {
      f();
      return;
   }

   window.EF.onloadCallbacks = window.EF.onloadCallbacks || [];
   window.EF.onloadCallbacks[window.EF.onloadCallbacks.length] = f;

   if (!window.EF.jsTagAdded)
   {
      efjs = document.createElement('script');
      efjs.type = 'text/javascript';
      efjs.async = true;
      efjs.src = 'https://www.everestjs.net/static/st.v3.js';
      scr = document.getElementsByTagName('script')[0];
      scr.parentNode.insertBefore(efjs, scr);
      window.EF.jsTagAdded = 1;
   }
}));

(function ()
{
   var i;
   var objs;

   if (typeof s === 'undefined')
      return;

   objs = document.getElementsByTagName('meta');
   for (i = 0; i < objs.length; i++)
      if (objs[i].getAttribute('name') === 'standout')
      {
         s.prop42 = 'googlestandout:true';
         return;
      }

   objs = document.getElementsByTagName('link');
   for (i = 0; i < objs.length; i++)
      if (objs[i].getAttribute('rel') === 'standout')
      {
         s.prop42 = 'googlestandout:true';
         return;
      }
})();

(function ()
{
   var a;
   var articles;
   var b;
   var id;
   var ids;
   var links;
   var list;

   if (mistats.pagelevel !== 'Section' || !mistats.setOnce)
      return;

   ids = {};
   articles = document.getElementsByTagName('article');
   for (a = 0; a < articles.length; a++)
   {
      if (articles[a].parentNode && articles[a].parentNode.className === 'paper')
         continue;
      links = articles[a].getElementsByTagName('a');
      for (b = 0; b < links.length; b++)
      {
         id = (((links[b].href || '').match(/\/article\d+\.html#?/) || [''])[0].match(/\d+/) || [''])[0];
         id && (ids[id] = true);
      }
   }

   list = [];
   for (id in ids)
      list[list.length] = id;

   while (list.join(',').length > 255)
      list.pop();

   mistats.setOnce('eVar91', list.join(','));
})();

mistats.hasCore && (window.addEventListener('load', function ()
{
   var cs;
   var i;
   var ifr;
   var scr;

   ifr = document.getElementsByTagName('iframe');
   for (i = 0; i < ifr.length; i++)
      if (ifr[i].getAttribute('sandbox') && ifr[i].style && ifr[i].style.display === 'none')
         try
         {
            if (ifr[i].contentWindow
             && ifr[i].contentWindow.document
             && ifr[i].contentWindow.document.documentElement
             && (ifr[i].contentWindow.document.documentElement.innerHTML || '').match(/scorecardresearch\.com\/beacon\.js/))
               return;
         } catch (err)
         {
         }

   console.log('mistats: comscore failover');
   cs = cs || [];
   cs.push(
   {
      c1: '2',
      c2:'6035363'
   });
   window._comscore = cs;
   scr = document.createElement('script');
   scr.src = 'https://sb.scorecardresearch.com/beacon.js';
   document.getElementsByTagName('head')[0].appendChild(scr);
}, false));

/*
(function ()
{
   var i;
   var objs;

   function track(pEvent)
   {
      var to;
      if (!pEvent)
         return;
      to = pEvent.target;
      while (to && to.nodeName !== 'H3')
         to = to.parentNode || null;
      if (!(to && to.nodeName === 'H3' && (to.className || '').match(/expander impact/)))
         return;
      mistats.unbind(to, 'mouseup', track);
      label = (to.innerHTML || '').match(/sign up|download|explore|connect/i);
      label && mistats.interactions && mistats.interactions.custom && (mistats.interactions.custom(
      {
         name: 'OnBoarding ' + label[0],
         type: null,
         count: 1,
         sendNow: false
      }));
   };

   if (mistats.bizunit !== 'MIA' && mistats.escenicId != '236579973')
      return;

   objs = mistats.getElementsByClassName(/expander impact/);
   for (i = 0; i < objs.length; i++)
      mistats.bind(objs[i], 'mouseup', track);
})();
*/

(function ()
{
   var types;

   function track(pEvent)
   {
      var label;
      var to;

      if (!pEvent)
         return;

      to = pEvent.target;
      if (!to)
         return;

      if (to.nodeName === 'H3' && (to.className || '').match(/expander impact/))
         label = ((to.innerHTML || '').match(/sign up|download|explore|connect/i) || [''])[0];
      else if (to.nodeName === 'BUTTON' && (to.innerHTML || '').match(/continue to next/i))
            label = 'click_continue';
      else if (to.nodeName === 'IMG')
      {
         if ((to.src || '').match(/app-store/i))
            label = 'click_appios';
         else if ((to.src || '').match(/google-play/i))
            label = 'click_appandroid';
      } else if (to.nodeName === 'A')
      {
         if ((to.innerHTML || '').match(/continue to home/i))
            label = 'click_home';
         else if ((to.href || '').match(/twitter\.com\/miamiherald/i))
            label = 'click_soctwt';
         else if ((to.href || '').match(/twitter\.com\/heraldsports/i))
            label = 'click_soctwt_sports';
         else if ((to.href || '').match(/facebook\.com\/miamiheraldsports/i))
            label = 'click_socfb_sports';
         else if ((to.href || '').match(/facebook\.com\/miamiherald/i))
            label = 'click_socfb';
         else if ((to.href || '').match(/instagram\.com\/miamiherald/i))
            label = 'click_socinst';
         else if ((to.href || '').match(/instagram\.com\/miami_com/i))
            label = 'click_socinst_miamicom';
      }

      if (!label || types[label])
         return;
      types[label] = true;

      mistats.unbind(to, pEvent.type, track);
      mistats.interactions && mistats.interactions.custom && (mistats.interactions.custom(
      {
         name: 'OnBoarding ' + label,
         type: null,
         count: 1,
         sendNow: false
      }));
   };

   if (mistats.bizunit !== 'MIA' && mistats.escenicId != '236579973')
      return;

   types = {};
   mistats.bind(mistats.getElementByClassName(/welcome-video/), 'mousedown', track);
})();

mistats.doQualtrics = function ()
{
   var obj;

   if (!document.body)
      return;
   obj = document.body.appendChild(document.createElement('div'));
   obj.id = '_ZN_e4ggyW07IMID52Z';

   (function(){var g=function(e,h,f,g){
   this.get=function(a){for(var a=a+"=",c=document.cookie.split(";"),b=0,e=c.length;b<e;b++){for(var d=c[b];" "==d.charAt(0);)d=d.substring(1,d.length);if(0==d.indexOf(a))return d.substring(a.length,d.length)}return null};
   this.set=function(a,c){var b="",b=new Date;b.setTime(b.getTime()+6048E5);b="; expires="+b.toGMTString();document.cookie=a+"="+c+b+"; path=/; "};
   this.check=function(){var a=this.get(f);if(a)a=a.split(":");else if(100!=e)"v"==h&&(e=Math.random()>=e/100?0:100),a=[h,e,0],this.set(f,a.join(":"));else return!0;var c=a[1];if(100==c)return!0;switch(a[0]){case "v":return!1;case "r":return c=a[2]%Math.floor(100/c),a[2]++,this.set(f,a.join(":")),!c}return!0};
   this.go=function(){if(this.check()){var a=document.createElement("script");a.type="text/javascript";a.onload=function(){if(!(window.QSI&&window.QSI.API))return;window.QSI.API.load();window.QSI.API.run();};a.src=g;document.body&&document.body.appendChild(a)}};
   this.start=function(){var a=this;document.readyState==='complete'?a.go():(window.addEventListener?window.addEventListener("load",function(){a.go()},!1):window.attachEvent&&window.attachEvent("onload",function(){a.go()}))}};
//   try{(new g(100,"r","QSI_S_ZN_e4ggyW07IMID52Z","https://zne4ggyw07imid52z-mcclatchy.siteintercept.qualtrics.com/WRSiteInterceptEngine/?Q_ZID=ZN_e4ggyW07IMID52Z")).start()}catch(i){}})();
   try{(new g(100,"r","QSI_S_ZN_e4ggyW07IMID52Z","https://zne4ggyw07imid52z-mcclatchy.siteintercept.qualtrics.com/WRSiteInterceptEngine/?Q_ZID=ZN_e4ggyW07IMID52Z")).start()}catch(i){}})();
};

(location.pathname || '').match(/\/customer-service|\/servicios/) && (mistats.doQualtrics());

/*
(function ()
{
   var gst;
   var obj;
   var sdst;
   var sdsv;

   if (mistats.subData)
   {
      sdst = mistats.subData.getStatus() || '';
      sdsv = mistats.subData.getService() || '';
      if (!sdst && s.c_r('mi_mppaid'))
         gst = 'unknown';
      else if (sdst.match(/Active|Failure Retry/i))
         gst = 'subscriber';
      else if (sdst === 'Expired')
         gst = 'past_subscriber';
      else
         gst = 'non_subscriber';
   }
   if (!(gst && mistats.pagelevel === 'Story' && mistats.sendToSubOpts))
      return;

   obj =
   {
      type: 'states',
      name: gst
   };

   sdsv && (obj.info = {'product': [sdsv.match(/sports/i) ? 'sports' : 'basic']});
   mistats.sendToSubOpts(obj);
})();
*/

