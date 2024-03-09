// Final Omniture Code File
// Used to convert MI variable to Omniture variables and
// also makes the final img call.
///////////////////////////////////////////////////////////////

var mistats;
mistats = mistats || {};

// Server and URL variables
mistats.server      = (location.hostname || '').toLowerCase().replace(/^www\./, '');
mistats.url         = location.protocol + '//' + location.hostname + location.pathname;
mistats.querystring = ((location.search || '').length > 1 ? location.search : '') + ((location.hash || '').length > 1 ? location.hash : '');
mistats.referrer    = document.referrer || '';

mistats.getContentService = function ()
{
   var cat;
   var ch;
   var cs;
   var name;

   ch = mistats.channel || '';

   cat = ch.match(/^Product|^Vendor|^Static/);
   cat = cat ? cat[0] : (mistats.isEscenic ? 'Product: Escenic' : (window.pubsys ? 'Product: Pubsys' : 'Other'));

   (cat === 'Product' || cat === 'Vendor') && (name = ch.replace(/^\w+:\s*/, '').match(/[^:]+/))

   if ((mistats.pagename || '').indexOf('Wordpress:') === 0)
      cat = 'Product: Wordpress';

   cs = [cat];
   name && (cs[cs.length] = name[0]);

   return mistats.AMPPV ? 'Vendor: AMP' : cs.join(': ');
};

mistats.contentService = mistats.getContentService();

mistats.cleanupValues = function ()
{
   if (location.pathname !== '/' && (mistats.pagelevel || '').match(/^Home/i))
      mistats.pagelevel = 'Bad Page Level';
   else
      switch (((mistats.pagelevel || '').toLowerCase().match(/story|video|gallery|section|home/) || [''])[0])
      {
         case 'story':
            mistats.pagelevel = 'Story';
            mistats.events.add('event10');
            mistats.score('story');
            break;
         case 'video':
            mistats.pagelevel = 'Video';
            break;
         case 'gallery':
            mistats.pagelevel = 'Gallery';
            break;
         case 'section':
            mistats.pagelevel = 'Section';
            break;
         case 'home':
            mistats.pagelevel = 'Home';
            break;
         default:
            mistats.pagelevel = 'Other';
      }

   mistats.bizunit = (mistats.bizunit || '').toUpperCase();

   !mistats.taxonomy && (mistats.taxonomy = 'NotSet||||');
   window.mitagsent && (mistats.taxonomy = 'DOUBLETAG-Not-Reported||||');
   (mistats.taxonomy.split('|').length !== 5 || (location.pathname !== '/' && mistats.taxonomy.match(/^_Homepage\|/i))) && (mistats.taxonomy = 'BadTaxonomy||||');
   mistats.taxArray = mistats.taxonomy.split('|');

   mistats.channel = (mistats.channel || '').replace(/^Vendor:\s*|^Product:\s*/, '');
   mistats.pagename = (mistats.pagename || '').replace(/^Vendor:\s*|^Product:\s*|^Static:\s*|^CGI:\s*/, '');

   // Temporary fix util API bug fix
   mistats.pagename === 'Home:Homepage' && (mistats.pagename = 'Home: Homepage');
};

mistats.cleanupValues();

mistats.ClickTracker = function ()
{
   var files;
   var validExt;

   function click(pEvent)
   {
      var cfm;
      var hashTag;
      var loc;
      var pn;
      var to;

      pEvent && (to = pEvent.target);
      while (to && to.nodeName !== 'A')
         to = to.parentNode || null;
      if (!(to && (to.href || '').search(/\/|https?:/) === 0))
         return;

      href = to.href.toLowerCase();
      pathArr = href.replace(/^https?:\/{2}/, '').replace(/\?.*/, '').replace(/#.*/, '').split('/');
      if (pathArr.length > 1 && validExt[(ext = ((pathArr.pop() || '').match(/\.[^\.]{3,4}$/)) || [''])[0].substr(1)])
      {
         file = href.replace(/\?.*/, '').replace(/#.*/, '');
         if (files[file])
            return;
         files[file] = true;
         mistats.setOnce('eVar40', file);
         mistats.events.add('event11');
         mistats.score('download');
         s.tl(true, 'o', 'download');
      } else if (window.sessionStorage)
      {
         hashTag = href.match(/#.*/);
         hashTag = hashTag ? hashTag[0].substr(1) : '';
         if (!hashTag)
         {
            loc = to;
            while (loc && !loc.nodeName.match(/HEADER|FOOTER|BODY/))
               loc = loc.parentNode || null;
            loc = (loc ? loc.nodeName.toLowerCase() : 'generic') + '_link';
         }

         pn = to;
         while (pn && !(pn.id || '').match(/-nav/))
            pn = pn.parentNode || null;

         if (hashTag.match(/mainnav|subnav/) || (pn && (pn.id || '').match(/-nav/)))
            cfm = 'navigation';
         else if (pEvent.target.nodeName === 'IMG')
            cfm = 'internal banner';
         try
         {
            window.sessionStorage.setItem('mistats_lnktrk', btoa(JSON.stringify(
            {
               type: (hashTag || loc),
               text: to && to.innerHTML ? to.innerHTML.toLowerCase().replace(/<[^>]+>/g, '').replace(/^\s+/, '').replace(/\s+$/, '').replace(/\s+/g, ' ') : '(image)',
               cfm:  cfm || ''
            })));
         } catch (err)
         {
         }
      }
   };

   function init()
   {
      var cfm;
      var i;
      var lnkTrk;
      var objs;
      var types;

      files = {};
      validExt = {};

      types = (s.linkDownloadFileTypes || '').toLowerCase().split(/\s*,\s*/);
      for (i = 0; i < types.length; i++)
         validExt[types[i]] = true;

      objs = document.getElementsByTagName('a');
      for (i = 0; i < objs.length; i++)
         (objs[i].href || '').search(/\/|https?:/i) === 0 && (mistats.bind(objs[i], 'mousedown', click));

      try
      {
         lnkTrk = window.sessionStorage.getItem('mistats_lnktrk');
         if (lnkTrk)
         {
            lnkTrk = JSON.parse(atob(lnkTrk));
            if (lnkTrk && lnkTrk.type && lnkTrk.text)
            {
               mistats.setOnce('eVar8', lnkTrk.text);
               mistats.setOnce('eVar9', lnkTrk.type);
               mistats.events.add('event21');
               cfm = lnkTrk.cfm;
            }
         }
         window.sessionStorage.removeItem('mistats_lnktrk');
      } catch (err)
      {
      }

      if (cfm)
         s.eVar6 = cfm;
      else if ((location.hash || '').match(/#mid=/))
         s.eVar6 = 'marketing landing page';
      else if ((document.referrer || '').replace(/^https?:\/{2}/, '').indexOf(location.hostname) === 0)
      {
         if ((document.referrer || '').match(/\/search/))
            s.eVar6 = 'internal search';
         else
            s.eVar6 = 'internal link';
      }
   };

   init();
};

mistats.clickTracker = mistats.clickTracker || (new mistats.ClickTracker());

mistats.YouTubeTracker = function ()
{
   var channels;
   var id;
   var ready;
   var video;

   channels =
   {
      'UCxDyxzQYNzowcbVllJ-kLdA': 'ADN',
      'UCdvNyVMVK2rOqXk3drYgkag': 'TBH',
      'UCAJjqXbGLRavOcDSYTi0vIQ': 'BDN',
      'UChhMimKzhrAaUcts3Qtn7BA': 'BRA',
      'UCEVbxWQraW1wGUJsaQfVEWA': 'CDT',
      'UCO6BPX6_ubwGTGHIVdYTpcg': 'CLT',
      'UCUBWCthNWS-Zz-wCqs--Fwg': 'ELN',
      'UCJJdg3DIki29jDC3Pe2y-3w': 'ELN',
      'UC6PiEr5ig3dT2lje5sCUnRw': 'IDA',
      'UCDKXqKVQz__gFavp64iyx8w': 'KSC',
      'UC6JWJSxmhlS5AyUUFQcijxQ': 'KSC',
      'UCPhVqO6gISmStEikSvmvYyA': 'KEN',
      'UCGzqHjAMWhetPFOl4bQDsNQ': 'LED',
      'UCTo_GrhRsASw22tOpwXfEaQ': 'MDC',
      'UC7Ij5ZCf2E9GmZ86cIw3vVg': 'MIA',
      'UCGlDwgJrOnjdg3rQhz3gzZA': 'MIA',
      'UC63Uq3FnVf6-wEaAV3RmfSw': 'MOD',
      'UC8GJ5jSV8_EgTOaJkQkdcIg': 'OLY',
      'UC8bT1KkT-mRHi6LJiu7lg1g': 'HHD',
      'UChoAiXYGltbgjmecrsKCA3g': 'HHD',
      'UC4avTc8dkviV1IObCbEsg7Q': 'HHD',
      'UCX-7YWAOdZ6P6tPRXeEs49A': 'RHH',
      'UCosNuCC96Oicg_3CqBCfuRg': 'SAC',
      'UCWw-nlUjdUD_KZQqZyQnhTw': 'MER',
      'UC6WdZQhg1wkZJWCmnDiIeOQ': 'SLO',
      'UCs4TGanvFtdeg4E4Muggm9g': 'DFW',
      'UCdDd6LgfG_boD2rlOvp0qjg': 'SUN',
      'UC2CMVhcb4-BYjdK23O5cwYA': 'TNT',
      'UCASQzDb4SUC0gZNPbwBubIQ': 'NAO',
      'UC26DKudZ5F71qIR5FDKB-GQ': 'STA',
      'UCvI0HizglCQikF1NqOn9hbw': 'STA',
      'UC5zGLHfr1G8EGkBERaSHkFg': 'MBO',
      'UCTKsYy6HWFA0qhfdfG2R3BA': 'MBO',
      'UCZXkH_Lk9AISsAKWEqknxEA': 'MAC',
      'UCbtsn1mDk5ExgFZWQMUgSaw': 'MAC',
      'UCZvZ0x94IKEjEB7yomwNOCQ': 'FRS',
      'UC5lKJCWHxy9nORbFL_E4iTQ': 'WIC',
      'UCSt51g5IgVFryJVUO13ZkVQ': 'WIC',
      'UCkSABPjMyyabWy-x22R7dfQ': 'TCH'
   };

   function Video(pInfo)
   {
      var self;

      self = this;

      this.init     = false;
      this.title    = null;
      this.uploader = null;
      this.videoId  = pInfo.videoData.video_id;
      this.current  = pInfo.currentTime;
      this.duration = pInfo.duration;
      this.playing  = 0;
      this.elapsed  = 0;

      this.open = function ()
      {
         var scr;

         if (!self.title)
         {
            scr = document.createElement('script');
            scr.type = 'text/javascript';
            scr.async = 'async';
            scr.src = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' + self.videoId + '&key=AIzaSyBZEnKTcfLe9-t2H4OM1DfpOtfjxLtj_no&callback=mistats.youTubeTracker[' + id + '].callback';
            document.body.appendChild(scr);

            return;
         }

         self.timer && (clearInterval(self.timer));
         self.timer = setInterval(function ()
         {
            self.elapsed += self.playing;
            self.duration - self.current < 2 && (close());
         }, 1000);

         self.init = true;
      };

      this.open();
   };

   function update(pInfo)
   {
      if (!(video.init && pInfo))
         return;

      video.current = Math.round(pInfo.currentTime);
   };

   function close(pEvent)
   {
      var ev;
      var sn;

      if (!video || !video.init)
         return;

      video.init = false;
      video.playing = 0;

      if (!video.elapsed)
         return;

      sn = Math.ceil((video.current || 1) / Math.round(video.duration / 4));
      video.elapsed > video.duration && (video.elapsed = video.duration);
      ev = ['event22=' + video.elapsed, 'event23', 'event25'];
      if (video.duration - video.elapsed < 2)
      {
         ev[ev.length] = 'event24';
         sn = 5;
      }

      ev[ev.length] = ['event33', 'event34', 'event35', 'event36'][sn - 1];

      video.current = 0;
      video.elapsed = 0;

      mistats.events.add(ev);
      mistats.setOnce('eVar2', 'YT: ' + video.videoId);
      mistats.setOnce('eVar17', video.title);
      mistats.setOnce('eVar18', sn + ':' + ['Start', '25%', '50%', '75%', 'End'][sn - 1]);
      mistats.setOnce('eVar19', 'video');
      mistats.setOnce('eVar20', 'YTchannel: ' + video.uploader);
      mistats.setOnce('eVar39', s.referrer);

      s.tl(true, pEvent ? 'e' : 'o', 'video');
   };

   function init()
   {
      if (typeof s !== 'object')
         return;

      if ('onpagehide' in window)
         mistats.bind(window, 'pagehide', close);
      else
         mistats.bind(window, 'beforeunload', close);

      ready = true;
   };

   this.event = function (pData)
   {
      !id && (id = pData.id);

      if (!ready || typeof pData !== 'object')
         return;

      switch (pData.event)
      {
         case 'initialDelivery':
            close();
            video = new Video(pData.info);
            break;
         case 'infoDelivery':
            switch (pData.info.playerState)
            {
               case -1:
                  close();
                  video = new Video(pData.info)
                  break;
               case 0:
                  close();
                  break;
               case 1:
                  !video.init && (video = new Video(pData.info));
                  video.playing = 1;
                  break;
               case 2:
               case 3:
                  video.playing = 0;
                  break;
            }
            update(pData.info);
            break;
      }
   };

   this.callback = function (pObj)
   {
      if (!(typeof pObj === 'object'
         && pObj.items
         && pObj.items[0]
         && pObj.items[0].snippet
         && pObj.items[0].snippet.title
         && pObj.items[0].snippet.channelId))
         return;

      video.title = pObj.items[0].snippet.title;
      video.uploader = channels[pObj.items[0].snippet.channelId] || 'External';
      video.open();
   };

   init();
};

mistats.MessageHandler = function ()
{
   var handlers;

   handlers =
   {
      'youtube': function (pData)
      {
         var ytEvent;

         try
         {
            ytEvent = JSON.parse(pData);
         } catch (err)
         {
         }

         if (!(mistats.YouTubeTracker && ytEvent && ytEvent.id))
            return;
         mistats.youTubeTracker = mistats.youTubeTracker || [];
         mistats.youTubeTracker[ytEvent.id] = mistats.youTubeTracker[ytEvent.id] || (new mistats.YouTubeTracker());
         mistats.youTubeTracker[ytEvent.id].event(ytEvent);
      },

      'apis\.google': function (pData)
      {
         (pData || '').match(/::onPlusOne/i) && (mistats.interactions.increment('share_gp'));
      },

      'coralproject\.net': function (pData)
      {
         var action;
         var ctEvent;
         var score;

         if (!(pData || '').toString().match(/eventName/) || !mistats.interactions)
            return;
         try
         {
            ctEvent = JSON.parse(pData.replace(/^[^\{]*/, ''));
         } catch (err)
         {
         }

         if (!(ctEvent && ctEvent.eventName))
            return;

         switch (ctEvent.eventName)
         {
            case 'action.TALK_FRAMEWORK_LOGOUT':
            case 'mutation.signOut':
               action = 'Logout';
               break;
            case 'action.TALK_FRAMEWORK_HANDLE_SUCCESSFUL_LOGIN':
            case 'mutation.setAccessToken':
               action = 'Login Successful';
               break;
            case 'action.TALK_VIEWING_OPTIONS_OPEN_MENU':
            case 'openSortMenu':
               action = 'Open Viewing Options';
               break;
            case 'action.SHOW_SIGNIN_DIALOG':
            case 'mutation.showAuthPopup':
               action = 'Show Login Dialog';
               break;
            case 'action.TALK_AUTHOR_MENU_OPEN_MENU':
            case 'showUserPopover':
               action = 'Show Author Menu';
               break;
            case 'action.SET_ACTIVE_TAB':
            case 'mutation.setActiveTab':
               action = 'Toggle Comment/Profile Tabs';
               break;
            case 'mutation.PostComment.success':
               action = ctEvent.value && ctEvent.value.variables && ctEvent.value.variables.input && ctEvent.value.variables.input.parent_id ? 'Post Reply' : 'Post Comment';
               score = true;
               break;
            case 'createComment.success':
               action = 'Post Comment';
               score = true;
               break;
            case 'createCommentReply.success':
               action = 'Post Reply';
               score = true;
               break;
            case 'showEditForm':
               action = 'Edit Comment';
               breakl
            case 'mutation.CreateRespectAction.success':
            case 'createCommentReaction.success':
               action = 'Respect Post';
               score = true;
               break;
            case 'mutation.DeleteRespectAction.success':
            case 'removeCommentReaction.success':
               action = 'Un-Respect Post';
               score = true;
               break;
         }

         if (!action)
            return;

         mistats.interactions.custom(
         {
            name: 'Coral ' + action,
            type: score ? 'social' : '',
            count: 1,
            sendNow: false
         });
      }
   };

   function parse(pEvent)
   {
      if (!(pEvent && pEvent.origin && pEvent.data))
         return;

      for (h in handlers)
         if ((pEvent.origin || '').toLowerCase().match(h))
            try
            {
               return handlers[h](pEvent.data);
            } catch (pError)
            {
               typeof console !== 'undefined' && console.log && (console.log('mistats.messageHandler: ' + pError));
            }
   };

   function init()
   {
      if (window.mistats_messageHandler || typeof JSON === 'undefined' || !JSON.parse)
         return;

      window.mistats_messageHandler = true;
      mistats.bind(window, 'message', parse);
   };

   init();
};

mistats.messageHandler = mistats.messageHandler || (new mistats.MessageHandler());

mistats.SetupYouTube = function ()
{
   var deferred;
   var onready;
   var origin;
   var pollPtr;
   var videos;

   function clear()
   {
      pollPtr && (clearInterval(pollPtr));
   };

   function loadApi(pEvent)
   {
      var obj;

      if (typeof YT !== 'undefined')
         return;

      obj = document.createElement('script');
      obj.type = 'text/javascript';
      obj.src = location.protocol + '//www.youtube.com/iframe_api';
      document.body.appendChild(obj);

      onready = onready || [];
      window.onYouTubeIframeAPIReady && (onready[onready.length] = window.onYouTubeIframeAPIReady);

      window.onYouTubeIframeAPIReady = function ()
      {
         var i;

         while (onready.length)
            onready.shift()();

         if (typeof YT !== 'undefined')
            for (i = 0; i < videos.length; i++)
               (new YT.Player(videos[i].id));
      };
   };

   function defer()
   {
      !deferred && (mistats.bind(window, 'mousedown', init));
      deferred = true;
   };

   function setup(pEvent)
   {
      var i;
      var qStr;
      var src;

      if (!videos.length)
         return defer();

      clear();

      for (i = 0; i < videos.length; i++)
      {
         if (!videos[i].id)
            videos[i].id = 'mi_yt_player' + i;

         if ((videos[i].src || '').match(/(\?|&)enablejsapi=1/i) && decodeURIComponent(videos[i].src || '').match(new RegExp('(\\?|&)origin=' + origin, 'i')))
            continue;

         src = videos[i].src;
         qStr = src.indexOf('?');
         qStr = qStr === -1 ? '' : src.substr(qStr + 1);
         qStr = qStr.replace(/(\?|&)*enablejsapi[^&]*/gi, '').replace(/(\?|&)*origin=[^&]*/gi, '').replace(/\?+/g, '&');
         videos[i].src =
            src.replace(/\?.*/, '')
          + '?'
          + ('enablejsapi=1&origin=' + encodeURIComponent(origin) + '&' + qStr).replace(/&+/g, '&').replace(/&$/, '');
      }

      if (!pEvent)
         return mistats.bind(window, 'load', loadApi);

      loadApi();
   };

   function init(pEvent)
   {
      var i;
      var objs;
      var pc;

      origin = location.protocol + '//' + location.hostname;

      pc = 0;
      clear();

      pollPtr = setInterval(function ()
      {
         if (!(document.readyState || '').match(/interactive|complete/i))
            return;

         ((pEvent && pc++ > 10) || !pEvent) && (clear());

         videos = [];
         objs = document.getElementsByTagName('iframe');

         for (i = 0; i < objs.length; i++)
            (objs[i].src || '').match(/^(https*:)*\/\/www\.youtube\.com\/embed/i) && (videos[videos.length] = objs[i]);
         setup(pEvent);
      }, 1000);
   };

   init();
};

mistats.setupYouTube = mistats.setupYouTube || new mistats.SetupYouTube();

mistats.subscriptions =
{
   id: null,
   loggedIn: false,
   ucid: '',

   mpp: function ()
   {
      var i;
      var list;
      var miAccId;
      var mppAccId;
      var mppUser;
      var ucids;

      mppAccId = s.c_r('MPPAccountId');
      miAccId = s.c_r('mi_mppaid');
      mppAccId && (miAccId = mppAccId);

      try
      {
         ucids = window.localStorage.getItem('mistats_ucids');
         ucids && (ucids = atob(ucids));
         ucids = ucids ? JSON.parse(ucids) : {};

         list = {};

         if (ucids.baseIds)
            for (i = 0; i < ucids.baseIds.length; i++)
               list[ucids.baseIds[i]] = true;

         ucids.parentId && (list[ucids.parentId] = true);

         mppUser = s.c_r('MPPUser');
         mppUser && (mppUser = JSON.parse(mppUser));

         ucids.parentId = mppUser && mppUser['ucid'] ? mppUser['ucid'] : ucids.parentId;
         ucids.parentId && (list[ucids.parentId] = true);

         ucids.baseIds = [];

         for (i in list)
            ucids.baseIds[ucids.baseIds.length] = i;

         ucids.baseIds.sort(function (pA, pB)
         {
            return pA > pB;
         });

         while (ucids.baseIds.join(',').length > 255)
            ucids.baseIds.shift();

         window.localStorage.setItem('mistats_ucids', btoa(JSON.stringify(ucids)));
         ucids.baseIds.length && (s.c_w('mi_ei', btoa(JSON.stringify(ucids)), new Date((new Date()).getTime() + 31536000000)));
      } catch (mppErr)
      {
      }

      s.c_w('mi_mppaid', miAccId, new Date((new Date()).getTime() + 31536000000));
      miAccId && (s.eVar1  = ['MPP', miAccId].join(': '));

      if (ucids)
      {
         s.eVar72 = (ucids.baseIds || []).join(',');
         s.eVar73 = ucids.parentId || '';
         s.eVar73 && (mistats.subscriptions.ucid = s.eVar73);
      }
   },

   getValues: function ()
   {
      mistats.subscriptions.mpp();
      s.eVar1 = s.eVar1 || 'Unregistered';
      mistats.subscriptions.id = s.eVar1 || null;
      mistats.subscriptions.loggedIn = mistats.subscriptions.id && s.c_r('MPPSessionId') ? true : false;
   }
};

mistats.subscriptions.getValues();

mistats.newsletter =
{
   id: '',

   hash: function (pStr)
   {
      var hash;
      var i;

      hash = 5381;
      pStr = pStr || '';
      i = pStr.length;

      while (i)
         hash = (hash * 31) ^ pStr.charCodeAt(--i);

      hash = (hash >>> 0).toString();

      while (hash.length < 10)
         hash = '0' + hash;

      return hash;
   },

   store: function (pEml)
   {
      var h;
      var id;

      id = (pEml || '').split('@');
      if (id.length !== 2)
         return;

      h = mistats.newsletter.hash(id[0]) + '' + mistats.newsletter.hash(id[1]);
      h && (s.eVar16 = 'EmailID: ' + h);

      if (window.localStorage)
      {
         window.localStorage.setItem('mi_nl_id', h);
         window.localStorage.setItem('mi_nl_nm', btoa(id[0]));
         window.localStorage.setItem('mi_nl_dm', btoa(id[1]));
      }
   },

   getId: function ()
   {
      var cmp;
      var id;

      if (window.localStorage)
      {
         id = window.localStorage.getItem('mi_nl_id');
         id && !isNaN(id) && (s.eVar16 = 'EmailID: ' + id);
      }

      cmp = decodeURIComponent(location.search || '').match(/\&?(ac_)?cid=DM\d+&(ac_)?bid=\d+/);
      if (cmp)
      {
         mistats.setOnce('eVar80', cmp[0].match(/DM\d+/)[0]);
         mistats.setOnce('eVar81', cmp[0].match(/&(ac_)?bid=\d*/)[0].match(/\d+/)[0]);
         !(location.hostname || '').match(/^checkout\./) && history.replaceState && (history.replaceState('', document.title, location.pathname + (location.search || '').replace(cmp[0], '').replace(/^[\?&]+/, '?') + (location.hash || '')));
      }

      id = (location.hash || '').match(/#emlnl=[^&]+&id=[^&#]+/);
      if (!id)
         return;

      if (history.replaceState)
         history.replaceState('', document.title, location.pathname + (location.search || '') + (location.hash || '').replace(/&id[^&#]+/, ''));
      else if (location.hash !== '#')
         location.hash = (location.hash || '').replace(/&id[^&#]+/, '');

      try
      {
         id = atob(id[0].match(/&id=[^&#]+/)[0].substr(4).replace(/=+$/, ''));
         id && id.match(/^[^@]+@[^@]+$/) && (mistats.newsletter.store(id));
      } catch (err)
      {
      }
   },

   utmString: (function ()
   {
      var nl;

      nl = (location.hash || '').match(/#emlnl=[^&#\?]+/);
      return nl ? ('?utm_source=newsletter&utm_medium=email&utm_campaign=' + nl[0].substr(7) + (location.search ? (location.search || '').replace(/\?/g, '&') : '')) : (location.search || '');
   })()
};

mistats.newsletter.getId();

mistats.findWidgets = function ()
{
   var form;
   var htsc;
   var i;
   var objs;
   var pos;
   var sb;
   var wgts;

   wgts = 'eVar10';

   objs = document.getElementsByTagName('script');
   for (i = 0; i < objs.length; i++)
      if ((objs[i].src || '').match(/ntv\.io\/serve/i))
         mistats.listProp.add(wgts, 'Nativo');
      else if ((objs[i].src || '').match(/instagram\.com/))
         mistats.listProp.add(wgts, 'Instagram');
      else if ((objs[i].src || '').match(/twitter\.com/))
         mistats.listProp.add(wgts, 'Twitter');

   objs = document.getElementsByTagName('section');
   for (i = 0; i < objs.length; i++)
      if ((objs[i].innerHTML || '').match(/>Stay Connected</))
         mistats.listProp.add(wgts, 'Stay Connected');

   (document.getElementById('video-full') || mistats.getElementByClassName(/video_inline/)) && (mistats.listProp.add(wgts, 'Video Full'));
   document.getElementById('video-widget') && (mistats.listProp.add(wgts, 'Video Widget'));
   document.getElementById('related-links') && (mistats.listProp.add(wgts, 'Related Links'));
   mistats.getElementByClassName(/lead-item video/) && (mistats.listProp.add(wgts, 'Video Lead'));
   mistats.getElementByClassName(/inline-video/) && (mistats.listProp.add(wgts, 'Video Inline'));
   mistats.getElementByClassName(/story-readmorelink/) && (mistats.listProp.add(wgts, 'Read More'));
   mistats.getElementByClassName(/related-stories-organism/) && (mistats.listProp.add(wgts, 'Related Stories'));

   objs = mistats.getElementsByClassName('transparency');
   for (i = 0; i < objs.length; i++)
      if (objs[i].nodeName === 'DIV' && mistats.getElementsByClassName(/question/, objs[i]).length > 0)
      {
         try
         {
            sb = mistats.getElementByClassName('story-body');
            sb && (pos = Math.round((objs[i].offsetTop / sb.clientHeight) * 100));
            if (pos > 66)
               pos = 'Btm';
            else if (pos > 33)
               pos = 'Mid';
            else if (pos > 0)
               pos = 'Top';
            else
               pos = '';
            pos && (pos = ' ' + pos);
         } catch (err)
         {
         }

         mistats.listProp.add(wgts, 'Transparency' + (pos || ''));
         mistats.bind(objs[i], 'mouseup', function (pEvent)
         {
            var to;
            if (!pEvent)
               return;
            to = pEvent.target;
            while (to && to.className !== 'expander')
               to = to.parentNode || null;
            if (!to)
               return;
            mistats.interactions.setCount('transparency', 1);
         });
         break;
      }

   objs = mistats.getElementByClassName(/embed-infographic/);
   objs && (objs.innerHTML || '').match(/sketchfab/) && (mistats.listProp.add(wgts, 'Sketchfab'));

   objs = mistats.getElementByClassName(/banner-promo-link/);
   if (objs && (objs.href || '').match(/https:\/\/account/))
   {
      mistats.listProp.add(wgts, 'Promo Banner CTA');
      mistats.bind(objs, 'mousedown', function (pEvent)
      {
         var to;

         to = pEvent.target;
         while (to && !(to.nodeName === 'A' && (to.className || '').match(/banner-promo-link/)))
            to = to.parentNode || null;

         if (!(to && mistats.interactions) || mistats.promoClicked)
            return;

         mistats.promoClicked = true;
         mistats.interactions.increment('promo_click', true);
      });
   }

   objs = document.getElementById('zerg-target');
   if (objs)
   {
      mistats.listProp.add(wgts, 'Zergnet');
      mistats.bind(objs, 'mouseup', function (pEvent)
      {
         var to;

         to = pEvent.target;
         while (to && !(to.nodeName === 'DIV' && to.className === 'zergentity'))
            to = to.parentNode || null;

         if (!(to && mistats.interactions))
            return;

         if (mistats.zergClicked)
            return;
         mistats.zergClicked = true;

         mistats.interactions.increment('zerg_click', true);
      });
   }

   if (mistats.atResponse)
      (function ()
      {
         var obj;
         var xt;

         try
         {
            obj = document.getElementById('story-cta-widget');
            (JSON.stringify(mistats.atResponse || {}) || '').match(/SubCTA_AffinityTestSites_rollout_100218/) && (xt = 'AFF');
            (JSON.stringify(mistats.atResponse || {}) || '').match(/AB_CreditCardFailure_CTA/) && (xt = 'CCF');
            (JSON.stringify(mistats.atResponse || {}) || '').match(/AB_SwGcta_message/) && (xt = 'SwG');
            (JSON.stringify(mistats.atResponse || {}) || '').match(/AB_DigitalActivation_CTA/) && (xt = 'DA');
            (JSON.stringify(mistats.atResponse || {}) || '').match(/XT_SportsPassAbandon/) && (xt = 'SP');
            (JSON.stringify(mistats.atResponse || {}) || '').match(/XT_CartAbandon/) && (xt = 'CA');
            (JSON.stringify(mistats.atResponse || {}) || '').match(/XT_History/) && (xt = 'HIST');
            (JSON.stringify(mistats.atResponse || {}) || '').match(/XT_GooglePropensity/) && (xt = 'GP');
            (JSON.stringify(mistats.atResponse || {}) || '').match(/A\/B StateWorker_CTA_SAC/) && (xt = 'SW_SAC');
            (JSON.stringify(mistats.atResponse || {}) || '').match(/AB_StateWorkerCTA_SAC/) && (xt = 'SW_SAC');
            (JSON.stringify(mistats.atResponse || {}) || '').match(/XT_JeffreyEpstein_CTA/) && (xt = 'SW_JE');

            if (xt)
            {
               mistats.listProp.add(wgts, 'Subscription CTA ' + (obj ? xt : 'DEL'));
               function bindTracker()
               {
                  var cta;

                  cta = document.getElementById('story-cta-widget');
                  mistats.bind(cta, 'mousedown', function (pEvent)
                  {
                     var to;

                     to = pEvent.target;
                     while (to && !(to.className || '').match(/button\s+impact|widget-button|subscribe-button/))
                        to = to.parentNode || null;

                     if (!(to && mistats.interactions))
                        return;

                     if (mistats.ctaClicked)
                        return;
                     mistats.ctaClicked = true;

                     window.adobe && window.adobe.target && window.adobe.target.trackEvent && (window.adobe.target.trackEvent(
                     {
                        'mbox': 'mboxClickTrack',
                        'params':
                        {
                           'clicked': (mistats.server || '').replace(/\.com$/, '')
                        }
                     }));

                     mistats.interactions.increment('sub_cta_inline_click', true);
                  });

                  mistats.bind(document.getElementById('subscription-cta-module'), 'mousedown', function (pEvent)
                  {
                     var to;

                     to = pEvent.target;
                     while (to && !(to.nodeName === 'A' && (to.href || '').match(/\/subscribe\/create|Google6Month\.html/)))
                        to = to.parentNode || null;

                     if (!(to && mistats.interactions))
                        return;

                     if (mistats.ctaClicked)
                        return;
                     mistats.ctaClicked = true;

                     window.adobe && window.adobe.target && window.adobe.target.trackEvent && (window.adobe.target.trackEvent(
                     {
                        'mbox': 'mboxClickTrack',
                        'params':
                        {
                           'clicked': (mistats.server || '').replace(/\.com$/, '')
                        }
                     }));

                     mistats.interactions.increment('sub_cta_card_click', true);
                  });

                  return !!cta;
               };
               !bindTracker() && (mistats.bind(window, 'load', bindTracker));
               htsc = true;
               console.log('mistats v10: ' + s.eVar10);
            }
         } catch (atError)
         {
         }
      })();

   if (htsc)
      return;

   objs = document.getElementById('story-cta-widget');
   if (objs && !(objs.className || '').match(/hidden/))
   {
      mistats.listProp.add(wgts, 'Sub CTA Inline');
      mistats.bind(objs, 'mousedown', function (pEvent)
      {
         var to;

         to = pEvent.target;
         while (to && !(to.className || '').match(/button\s+impact|widget-button|subscribe-button/))
            to = to.parentNode || null;

         if (!(to && mistats.interactions))
            return;

         if (mistats.ctaClicked)
            return;
         mistats.ctaClicked = true;

         mistats.interactions.increment('sub_cta_inline_click', true);
      });
   }

   objs = document.getElementById('subscription-cta-module') || document.getElementById('subscription-cta-container');
   if (objs)
   {
      mistats.listProp.add(wgts, 'Sub CTA Card');
      mistats.bind(objs, 'mousedown', function (pEvent)
      {
         var to;

         to = pEvent.target;
         while (to && !(to.nodeName === 'A' && (to.href || '').match(/\/subscribe\/create/)))
            to = to.parentNode || null;

         if (!(to && mistats.interactions))
            return;

         if (mistats.ctaClicked)
            return;
         mistats.ctaClicked = true;

         mistats.interactions.increment('sub_cta_card_click', true);
      });
   }

   form = document.getElementById('newsletter-signUpWidget');
   if (form)
      switch (form.nodeName)
      {
         case 'FORM':
            (function ()
            {
               var mo;
               var nn;
               var nt;
               var val;

               function track(pEvent)
               {
                  var fld;
                  fld = document.getElementById('s_email_address');
                  fld && (val = (fld.value || '').replace(/\s+/g, '').toLowerCase());
               };

               mistats.listProp.add(wgts, 'Newsletter CTA');
               if (typeof MutationObserver === 'undefined')
                  return;

               if (window.pageInfo && window.pageInfo['newsletter.name'])
                  nn = window.pageInfo['newsletter.name'];
               else
               {
                  nt = document.getElementById('newletter-title') || document.getElementById('newsletter-title');
                  nt && (nn = (nt.innerHTML || '').replace(/<[^>]+>/g, '').replace(/,/g, ' ').replace(/^\s+/, '').replace(/\s+$/, '').replace(/\s+/g, ' '));
               }
               nn = nn || 'Unknown Newsletter';

               mistats.bind(form, 'keypress', track);
               mistats.bind(mistats.getElementByClassName(/button/, form), 'mousedown', track);
               mo = new MutationObserver(function (pList, pObserver)
               {
                  var eml;
                  track();
                  if (!(form && mistats.getElementByClassName('success', form)))
                     return;
                  typeof btoa !== 'undefined' && (val || '').match(/[^@]+@[^\.@]+\..+/) && (eml = btoa(val));
                  if (eml)
                  {
                     s.eVar16 = eml;
                     s.contextData.postEvent = 'mistats_nl_signup';
                     mistats.products.add(['', 'Newsletter Subscriptions', '', '', 'event72=1', 'eVar70=' + nn].join(';'));
                     mistats.setOnce('eVar68', nn);
                     mistats.events.add(['event70', 'event72']);
                  }
                  mistats.interactions && (mistats.interactions.increment('email_cta', true));
               });
               mo.observe(form, {childList: true});
            })();
            break;
         case 'DIV':
            mistats.listProp.add(wgts, 'Newsletter CTA');
            mistats.bind(form, 'mousedown', function (pEvent)
            {
               var to;

               if (!pEvent)
                  return;
               to = pEvent.target;

               while (to && !(to.nodeName === 'A' && to.className === 'button'))
                  to = to.parentNode || null;

               to && mistats.interactions && (mistats.interactions.increment('newsletter_cta', true));
            });
            break;
      }

   objs = document.getElementById('newsletter');
   if (objs)
   {
      mistats.listProp.add(wgts, 'Newsletter CTA');
      mistats.bind(mistats.getElementByClassName(/more-link-macro/, objs), 'mousedown', function (pEvent)
      {
         var id;
         var to;

         to = pEvent.target;
         while (to && to.nodeName !== 'A' && !(to.innerHTML || '').match(/subscribe/i))
            to = to.parentNode || null;

         if (!to || (to.className || '').match(/disabled/i))
            return;

         id = mistats.getElementByClassName(/form-control/, document.getElementById('newsletter'));
         id && (mistats.newsletter.store(id.value));

         if (mistats.ctaClicked)
            return;
         mistats.ctaClicked = true;

         mistats.interactions && (mistats.interactions.increment('email_cta', true));
      });
   }
};

mistats.filterOldStories = function ()
{
   var pd;

   if (!mistats.popular)
      return;

   pd = (location.pathname || '').replace(new RegExp('^/'), '').split('/');
   while (pd.length > 3)
      pd.splice(pd.length - 1, 1);
   pd = pd.join('-');

   pd.match(/^\d{4}-\d{2}-\d{2}$/) && (new Date()).getTime() - (new Date(pd)).getTime() > 2592000000 && (mistats.popular = '');
};

mistats.filterOldStories();

mistats.device =
{
   userAgent: (navigator.userAgent || '').toLowerCase(),

   isPrivate: function ()
   {
      return s.c_r('mi_pbm') == '1' || (mistats.browserMode && mistats.browserMode.isPrivate && mistats.browserMode.isPrivate());
   },

   isFacebook: function()
   {
      return mistats.device.userAgent.search(/fb_iab|fb4a|fban|fbios|fbforiphone/) > -1;
   },

   isOlive: function ()
   {
      return !mistats.device.isFacebook() && mistats.device.userAgent.search(/(ipad|iphone|ipod).+applewebkit.+mobile\/\S+\s\(\d+\)$/) > -1;
   },

   isWebView: function ()
   {
      return !mistats.device.isFacebook() && mistats.device.userAgent.search(/;\s+wv\)|(ipad|iphone|ipod).+applewebkit.+mobile\/\S+$/) > -1;
   },

   orientation: function ()
   {
      return 'orientation' in window ? (Math.abs(window.orientation) === 90 ? 'landscape' : 'portrait') : 'unsupported';
   },

   formFactor: function ()
   {
      var pw;
      var ua;

      ua = mistats.device.userAgent;
      pw = Math.min(screen.width, screen.height) / (window.devicePixelRatio && !isNaN(window.devicePixelRatio) ? parseFloat(window.devicePixelRatio) : 1);

      if ((navigator.platform || ua).match(/ipad/i)
       || ((navigator.platform || '').match(/macintel/i) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2)
       || (ua.match(/windows\snt\s/i) && !ua.match(/windows\sphone/i) && ua.match(/\sarm;/i))
       || (ua.match(/android/i) && pw > 800)
       || ua.match(/android\s3/i)
       || ua.match(/rim\stablet/i)
       || ua.match(/silk/i))
         return 'tablet';

      if ((navigator.platform || ua).match(/iphone|ipod/i)
       || (ua.match(/android/i) && !ua.match(/android\s3/i) && pw <= 800)
       || (ua.match(/blackberry/i) && ua.match(/mobile/i))
       || ua.match(/windows\sphone/i)
       || (pw && pw <= 320))
         return 'phone';

      return 'other';
   },

   type: function ()
   {
      var a;

      a = ':' + mistats.device.orientation();
      if (mistats.device.isFacebook())
      {
         a += ':in-fb browser';
         mistats.referrer = mistats.referrer || 'http://m.facebook.com';
      } else if (mistats.device.isWebView())
      {
         if (mistats.appvid || s.c_r('mi_mwvs'))
         {
            s.c_w('mi_mwvs', '1');
            a += ':in-mcc-app browser';
         } else
            a += ':in-app browser';
      } else if (mistats.device.isOlive())
         a += ':in-olive browser';

      if (mistats.device.formFactor() === 'other')
         return 'other';
      else
         return mistats.device.formFactor() + a;
   },

   details: function ()
   {
      var dv;
      var os;
      var ua;

      function osVersion()
      {
         var hw;
         hw = ua.match(/\([^\)]+/);
         hw && (os = hw[0].match(/([\._]?\d+){1,3}/));
         os = os ? os[0].replace(/_/g, '.') : '1.0';
      };

      function getDevice()
      {
         var date;
         var g;
         var i;
         var map;
         var v;

         date = new Date();

         map =
         {
            'i386':      'simulator',
            'ipad1,1':   'ipad1',
            'ipad2,1':   'ipad2',
            'ipad3,':    'ipad3+',
            'iphone1,1': 'iphone1',
            'iphone1,2': 'iphone3g',
            'iphone2,1': 'iphone3gs',
            'iphone3,1': 'iphone4',
            'iphone4,1': 'iphone4s',
            'iphone5,':  'iphone5',
            'ipod1,1':   'ipod',
            'ipod2,1':   'ipod2',
            'ipod3,1':   'ipod3',
            'ipod4,1':   'ipod4',
            'ipod5,1':   'ipod5'
         };

         for (i in map)
            if (ua.match(i))
               return map[i];

         v = os.replace(/\./g, '');
         while (v.length < 3)
            v += '0';
         v = parseInt(v);

         switch (dv)
         {
            case 'ipad':
               window.ondevicemotion = function (pEvent)
               {
                  if (!pEvent.acceleration)
                     s.c_w('mi_igen', '1', new Date(date.getTime() + 63072000000));
                  else if (window.devicePixelRatio === 1)
                     s.c_w('mi_igen', '2', new Date(date.getTime() + 63072000000));
                  else
                     s.c_w('mi_igen', '3+', new Date(date.getTime() + 63072000000));
                  window.ondevicemotion = null;
               };
               g = (s.c_r('mi_igen') || '').match(/1|2|3\+/);
               g && (dv += g[0]);
               break;
            case 'iphone':
               if (v < 200)
                  dv += '1';
               else if (screen.colorDepth === 18)
                  dv += '3g';
               else if (window.devicePixelRatio === 1)
                  dv += '3gs';
               else if (v < 500)
                  dv += '4';
               else if (Math.max(screen.width, screen.height) < 568)
                  dv += '4s';
               else
                  dv += '5';
               break;
            case 'ipod':
               if (screen.colorDepth === 18)
               {
                  if (v > 313)
                     dv += '1';
                  else if (v > 421)
                     dv += '2';
                  else
                     dv += '3';
               } else if (window.devicePixelRatio === 2)
               {
                  if (Math.max(screen.width, screen.height) < 568)
                     dv += '4';
                  else
                     dv += '5';
               }
         }
      };

      ua = this.userAgent;

      dv = ua.match(/ipad|iphone|ipod|android/);
      if (!dv || ua.match(/\sedge\//))
         return 'other';
      dv = dv[0];

      osVersion();
      getDevice();

      return dv + ':' + os;
   }
};

mistats.referringHost = function ()
{
   var g;
   var h;
   var hs;
   var r;
   var rs;

   r = document.referrer.toLowerCase() || '';

   if (!r.length || !r.match(/\w+/))
   {
      if (window.opener)
         try
         {
            r = window.opener.location.href || '';
         } catch (miError)
         {
            if (window.name)
               return 'external opener: ' + window.name;
            return 'external opener';
         }
      else
         return 'no referrer';
   }

   r = r.replace(/https*\W+/, '').split('/')[0];
   h = location.hostname.toLowerCase();

   if (r == h)
      return 'internal';

   rs = r.split('.');
   hs = h.split('.');

   r = r.replace(/[www\.]*/, '');

   rs.splice(0, (rs.length > 2) ? rs.length - 2 : 0);
   hs.splice(0, (hs.length > 2) ? hs.length - 2 : 0);

   if (rs.join('.') == hs.join('.'))
      return 'subdomain: ' + r;

   g = r.lastIndexOf('google.');

   if (g !== -1)
      return r.substring(0, g + 7);

   return r;
};

mistats.iframeNesting = function ()
{
   var nestCount;
   var result;
   var topLevel;

   nestCount = 0;
   result = [];
   topLevel = window;

   while (topLevel != top)
   {
      nestCount++;

      try
      {
         topLevel = topLevel.parent;
      } catch(e)
      {
         break;
      }
   }

   if (nestCount > 0)
   {
      result = ['IFRM', nestCount, (document.referrer || '').toLowerCase().split('?')[0].replace(/https?:\/{2}/, '')];
      if (nestCount > 1)
         try
         {
            result[result.length] = (topLevel.location.href || '').toLowerCase().split('?')[0].replace(/https?:\/{2}/, '');
         } catch (e)
         {
            result[result.length] = 'diff';
         }
   }

   return result.join('|');
};

mistats.getStoryHistory = function ()
{
   var conv;
   var hist;
   var i;
   var imgs;
   var list;

   conv = s.c_r('mi_shpc') == '1';
	conv && !mistats.mpp && mistats.trackDirectConversion && (mistats.trackDirectConversion());

   if (!mistats.mpp && conv && window.localStorage)
   {
      hist = window.localStorage.getItem('mistats_sh') || '';
      window.localStorage.removeItem('mistats_sh');
      s.c_w('mi_shpc', '0', new Date(Date.now() - 60000));

      if (hist)
         try
         {
            hist = JSON.parse(atob(hist));
         } catch (err)
         {
         }
   }

   imgs = [];
   list = [];

   if (hist && Array.isArray(hist))
      for (i = 0; i < hist.length; i++)
         if (hist[i].id && !isNaN(hist[i].id))
         {
            list[list.length] = hist[i].id;
            hist[i].qs && Array.isArray(hist[i].qs) && hist[i].qs.length && (imgs[imgs.length] =
            {
//               hit: '//mcclatchy.sc.omtrdc.net/b/ss/' + mistats.account + ',mccltAllMcClatchy/0/' + Math.round(Math.random() * 1000000000) + '?' + hist[i].qs.join('&'),
               hit: '//mcclatchy.sc.omtrdc.net/b/ss/mccltallmcclatchy/0/' + Math.round(Math.random() * 1000000000) + '?' + hist[i].qs.join('&'),
            });
         }

   imgs.reverse();
   for (i = 0; i < imgs.length; i++)
   {
      imgs[i].img = new Image();
      imgs[i].img.src = imgs[i].hit + '&events=event' + (i === 0 ? '20' : '1');
   }

   return list.join(',');
};

mistats.contentsource = (mistats.sinclairTracker && mistats.sinclairTracker.active ? 'Sinclair code:' : '') + (mistats.contentsource || '');

// Convert MI variables to Omniture variables
s_account  = mistats.account;
s.pageName = 'D=v4';
s.channel  = 'D=v23';
s.server   = 'D=v24';
s.referrer = mistats.referrer;

s.hier1 = mistats.bizunit + '|' + mistats.sitename + '|' + mistats.taxonomy + '|' + (mistats.channel || '').replace(/\|/g, '_');

s.eVar4  = mistats.pagename && !mistats.pagename.match(/^pubsys:/i) ? mistats.pagename : ('noname:' + location.href);
s.eVar7  = mistats.pagelevel;
s.eVar12 = mistats.referringHost();
s.eVar13 = ((location.hash || '').length > 1 ? location.hash : '') + (location.search.match(/storylink=\w+/gi) || []).join('#');
s.eVar14 = ((location.search || '').length > 1 ? location.search : '');
s.eVar23 = mistats.channel;
s.eVar24 = mistats.server;
s.eVar26 = mistats.bizunit;
s.eVar27 = mistats.sitename;
s.eVar41 = mistats.taxonomy + '|' + (mistats.channel || '').replace(/\|/g, '_');
s.eVar45 = 'loggedin:' + (mistats.subscriptions.loggedIn ? 'yes' : 'no');
s.eVar50 = 'D=v0';
s.eVar54 = mistats.url;
s.eVar59 = (mistats.pagename || '').search(/Story:|Gallery:|Video:/) === 0 ? mistats.pagename.replace(/^[^\|]+\|/, '') : '';
s.eVar74 = mistats.contentService;
s.eVar79 = 'D=mid';

s.prop1  = 'D=v54';
s.prop2  = 'dev:' + mistats.device.type() + (mistats.device.isPrivate() ? ': private:yes' : '');
s.prop3  = 'D=v7';
s.prop4  = mistats.contentsource;
s.prop5  = mistats.updateMeter ? mistats.updateMeter() : '';
s.prop6  = 'D=h1';
s.prop7  = mistats.custom1;
s.prop8  = mistats.custom2;
s.prop9  = mistats.custom3;
s.prop10 = (location.pathname || '').replace(/\/article\d+\.\w{3,4}/, '');
s.prop11 = 'refresh:' + ((location.hash || '').match(/mirefresh/i) ? 'yes' : 'no') + '|hasFocus:' + (document.hasFocus ? (document.hasFocus() ? 'yes' : 'no') : 'unknown');
s.prop13 = mistats.subscriptions.id;
s.prop14 = 'D=v16';
s.prop15 = 'dev:' + mistats.device.details();
s.prop17 = 'D=v8';
s.prop18 = 'D=v15';
s.prop19 = mistats.wordCount ? mistats.wordCount() : null;
s.prop20 = 'D=v51';
s.prop21 = mistats.taxArray[0];
s.prop22 = mistats.taxArray[1];
s.prop23 = mistats.taxArray[2];
s.prop24 = mistats.taxArray[3];
s.prop25 = mistats.taxArray[4];
s.prop26 = 'D=v26';
s.prop27 = 'D=v27';
s.prop29 = (mistats.keywords || '').replace(/,+/g, ',').replace(/^,/, '').replace(/,$/, '').toLowerCase();
s.prop30 = mistats.geography;
s.prop31 = mistats.pubdate;
s.prop32 = mistats.moddate;
s.prop35 = 'D=v13';
s.prop36 = 'D=v10';
s.prop39 = 'D=v14';
s.prop41 = 'D=v74';
s.prop43 = 'D=v55';
s.prop47 = mistats.escenicLayout || '';
s.prop48 = mistats.iframeNesting();
s.prop49 = 'D=v12';
s.prop52 = mistats.authors || ((mistats.pagelevel || '').match(/story|video|gallery/i) ? 'No Byline' : '');
s.prop53 = mistats.escenicId || '';
s.prop56 = 'D=v45';
s.prop58 = ['core:' + (mistats.hasCore ? 'yes' : 'no'), 'dl:' + (window.digitalData && window.digitalData.page_instance_id ? 'yes' : 'no')].join('|');
window.mi && window.mi.pageInfo && window.mi.pageInfo.getConf && (s.prop59 = window.mi.pageInfo.getConf('access.tags')|| '');

mistats.setOnce('prop37', mistats.getStoryHistory());
s.prop37 && (mistats.setOnce('prop40', (s.prop37 || '').replace(/[^,]+,/g, '')));

(function ()
{
   var h;
   var p;
   var r;

   r = document.referrer || '';
   h = r.match(/https*:\/\/[^\/]+\//i);
   p = h ? r.substr(h[0].length + 1) : '';

//   p && p.indexOf('/') === -1 && p.match(/^[A-Za-z0-9]{30,}$/) && (mistats.events.add('event33=1'));
})();

mistats.events.add('event7');

if (mistats.bizunit === 'ADN')
{
   s.t = function () {};
   s.tl = function () {};
}

if (window != top && (document.referrer || '').match(/pixel.cpm2track.com/i))
{
   s.t = function () {};
   s.tl = function () {};
}

(function ()
{
   var gua;

   gua = s.c_r('mi_gua');
   gua && (s.prop54 = 'GoogleUA: ' + gua);
   s.c_w('mi_gua', '', new Date((new Date()).getTime() - 86400000));

   mistats.bind(window, 'beforeunload', function ()
   {
      var c;
      var i;
      var ids;
      var idList;
      var objs;

      objs = document.getElementsByTagName('script');
      for (c = 0, i = 0; i < objs.length; i++)
         (objs[i].src || '').match(/google-analytics\.com\/analytics\.js/i) && (c++);

      idList = {};
      for (objs in window)
      {
         typeof window[objs] === 'function' && window[objs].h && (ids = JSON.stringify(window[objs].h).match(/UA-\d+-\d+/g));
         if (ids)
            for (i = 0; i < ids.length; i++)
               idList[ids[i]] = true;
      }

      ids = [];
      for (i in idList)
         ids[ids.length] = i;

      (c || ids.length) && (s.c_w('mi_gua', c + ':' + ids.join(','), new Date((new Date()).getTime() + 300000)));
   });
})();

(function ()
{
   var cid;

   cid = (location.hash || '').match(/[#&]cid=[^\?#&]+/i) || (location.search || '').match(/[\?&]cid=[^\?#&]+/gi);
   if (cid)
   {
      mistats.setOnce('campaign', cid[((location.hostname || '').match(/^checkout\./) ? (cid.length - 1) : 0)].substr(5));
//      mistats.setOnce('campaign', cid[0].substr(5));
      mistats.setOnce('eVar82', s.campaign);
      mistats.events.add('event60');
   }
   cid = (location.hash || '').match(/[#&]intcid=[^\?#&]+/i) || (location.search || '').match(/[\?&]intcid=[^\?#&]+/i);
   if (cid)
   {
      mistats.setOnce('eVar11', cid[0].substr(8));
      mistats.setOnce('eVar82', s.eVar11);
      mistats.events.add('event2');
   }
})();

mistats.sendBeacon = function ()
{
   var a;
   var b;
   var host;
   var i;
   var loaded;
   var path;
   var query;
   var ref;
   var s_code;
   var timer;
   var waitEvents;

   waitEvents =
   {
      'adobe.target': 'mistats_target',
      'propensity':   'mistats_propensity',
      'ctaListener':  'mistats_cta_widget',
      'subData':      'mistats_subdata'
   };

   function track(pEvent)
   {
      var a;
      var b;
      var et;
      var i;
      var ms;

      pEvent && pEvent.type && (window.removeEventListener(pEvent.type, track, false));

      if (window.mitagsent)
         return;

      if ((pEvent || {}).type === 'load')
      {
         timer = setTimeout(function ()
         {
            track({type: 'timeout'});
         }, 5000);
         return console.log('mistats timer started');
      } else if (((pEvent || {}).type || '').match(/pagehide|beforeunload|timeout|blur/))
      {
         et = pEvent.type === 'timeout' ? 'timeout' : 'aborted';
         mistats.setOnce('prop12', 'pageview:' + et);
         mistats.aborted = et;
         mistats.adobe && (mistats.adobe.ready = true);
      } else
      {
         pEvent && pEvent.type && (window.addEventListener(pEvent.type, track, false));
         for (i in waitEvents)
         {
            a = i.split('.');
            b = mistats[a.shift()];
            while (b && a.length)
               b = b[a.shift()];
            if (b && b.isWaiting && b.isWaiting())
               return console.log('waiting for ' + waitEvents[i]);
            else
               console.log(waitEvents[i] + ' ready');
         }
/*
         for (i in waitEvents)
            if (mistats[i] && mistats[i].isWaiting && mistats[i].isWaiting())
               return console.log('waiting for ' + waitEvents[i]);
*/
      }

      timer && (clearTimeout(timer));
      mistats.adSlots && mistats.adSlots.getTransactionId && (mistats.setOnce('transactionID', mistats.adSlots.getTransactionId()));

      window.mitagsent = true;

      typeof console !== 'undefined' && console.log && (console.log('mistats request queued'));

      !s.prop12 && (mistats.setOnce('prop12', 'pageview:normal'));

      if (mistats.listProp)
      {
         ms = (s.c_r('_matherSegments') || '').split(',');
         for (i = 0; i < ms.length; i++)
            mistats.listProp.add('prop60', ms[i].replace(/\s+/g, ''));
      }

      if (mistats.atResponse && mistats.atResponse.responseTokens && mistats.atResponse.responseTokens.length)
         s.eVar78 = mistats.atResponse.responseTokens[0]['profile.fivegroups'] || '';

      if (mistats.adobe)
         mistats.adobe.addToQueue(function ()
         {
            s.visitor = mistats.visitor || (typeof Visitor === 'function' && Visitor.getInstance ? Visitor.getInstance(mistats.adobe.mcId) : null);
            window.AdCloudEvent && (window.AdCloudEvent(mistats.adobe.mcId, (s.account || '').toLowerCase()));
            mistats.findWidgets();
            s.t();
            if (mistats.aborted && window.s.isReadyToTrack && !window.s.isReadyToTrack())
            {
               mistats.rttPatched = true;
               window.s.isReadyToTrack = function ()
               {
                  console.log('mistats: rtt_patched');
                  return true;
               };
            } else
               setTimeout(function ()
               {
                  if (!window.s || (window.s.isReadyToTrack && window.s.isReadyToTrack()))
                     return;
                  mistats.rttPatched = true;
                  window.s.isReadyToTrack = function ()
                  {
                     console.log('mistats: rtt_patched');
                     return true;
                  };
               }, 5000);
         });
      else
         s.t();

      window.removeEventListener('load', track, false);
      window.removeEventListener(('onpagehide' in window ? 'pagehide' : 'beforeunload'), track, false);
      'ontouchstart' in window && 'orientation' in window && (window.removeEventListener('blur', track, false));
   };

   function postOmni(pIp)
   {
      var ts;
      var xhr;

      if (!(mistats.account && pIp))
         return;

      s.c_w('mi_ib', '1', (new Date((new Date()).getTime() + 1800000)));

      ts = Math.round((new Date()).getTime() / 1000);
      xhr = new XMLHttpRequest();
      xhr.open('post', 'https://mcclatchy.sc.omtrdc.net/b/ss//6?', false);
      xhr.send(
         '<?xml version=1.0 encoding=UTF-8?>'
       + '<request>'
       + '<sc_xml_ver>1.0</sc_xml_ver>'
       + '<pageURL>' + (location.href || '') + '</pageURL>'
       + '<referrer>' + ref + '</referrer>'
       + '<ipAddress>' + pIp + '</ipAddress>'
       + '<pageName>' + (s.eVar4 || 'noname') + '</pageName>'
       + '<userAgent>' + (navigator.userAgent || '') + '</userAgent>'
       + '<visitorID>' + ((s.c_r('s_fid') || '').replace(/-/g, '.') || ts) + '</visitorID>'
       + '<timestamp>' + ts + '</timestamp>'
       + '<reportSuiteID>mccltallmcclatchy</reportSuiteID>'
       + '</request>');
   };

   if (window.mitagsent || (location.pathname || '').match(/\/video-embed/i))
      return;

   if (window != top && mistats.escenicLayout && location.pathname.match(/\/welcome-page-\w+/))
      try
      {
         typeof console !== 'undefined' && console.log && (console.log('mistats.sendBeacon: Waiting'));
         if (!(parent.mitagsent || parent.document.readyState === 'complete'))
            return setTimeout(mistats.sendBeacon, 50);
      } catch (err)
      {
         typeof console !== 'undefined' && console.log && (console.log('mistats.sendBeacon: Restricted'));
      }

   ref = document.referrer || '';
   host = ref.match(/https*:\/\/[^\/]+\//i);
   path = host ? ref.substr(host[0].length).match(/^[A-Za-z0-9]{20,}$/) : '';
   query = (location.search || '').match(/^\?p=\d{10}&subid=\d{3}&uid=[0-9A-Z]{16}$|^\?utm_campaign=\d{4}&utm_source=\d{5}&utm_medium=\d{1,3}$/);

   if (((navigator.userAgent || '').match(/MSIE|msie|rv:11\.0/) && query && path)
    || (mistats.server === 'macon.com' && mistats.isEscenic && !mistats.adobe && !document.referrer && !mistats.hasCore && !decodeURIComponent(document.cookie || '').match(/MCMID\|/))
    || s.c_r('mi_ib') == '1')
      return postOmni('1.1.1.1');

   track();

   'ontouchstart' in window && 'orientation' in window && (window.addEventListener('blur', track, false));
   window.addEventListener(('onpagehide' in window ? 'pagehide' : 'beforeunload'), track, false);
   window.addEventListener('load', track, false);

   for (i in waitEvents)
   {
      a = i.split('.');
      b = mistats[a.shift()];
      while (b && a.length)
         b = b[a.shift()];
      b && b.isWaiting && b.isWaiting() && (window.addEventListener(waitEvents[i], track, false));
   }
/*
   for (i in waitEvents)
      mistats[i] && mistats[i].isWaiting && mistats[i].isWaiting() && (window.addEventListener(waitEvents[i], track, false));
*/
};

if ((location.href || '').match(/^https:\/{2}checkout\.[^\.]+\.com\/apps\/payment|^https:\/{2}checkout\.qa\d+\.[^\.]+\.com\/apps\/payment/) && !mistats.micbLoaded)
   window.addEventListener('mi_micb_loaded', mistats.sendBeacon, false);
else
   mistats.sendBeacon();

mistats.doListenerTag = function ()
{
   var anonId;
   var by;
   var cid;
   var mrk;
   var obj;
   var pt;
   var scripts;
   var sp;
   var src;
   var tz;
   var uid;

   cid = 'ma12095';
   mrk = mistats.listenerMarket;
   uid = mistats.subscriptions.id === 'Unregistered' ? null : mistats.subscriptions.id;

   if (!mrk || (location.pathname || '').match(/\/video-embed/i))
      return;

   switch (mistats.bizunit)
   {
      case 'FRS':
      case 'MER':
      case 'MOD':
      case 'OLY':
      case 'SAC':
      case 'SLO':
      case 'TBH':
      case 'TCH':
      case 'TNT':
         tz = '-0800';
         break;
      case 'IDA':
         tz = '-0700';
         break;
      case 'BEL':
      case 'DFW':
      case 'KSC':
      case 'SUN':
      case 'WIC':
         tz = '-0600';
         break;
      default:
         tz = '-0500';
   };

   pt = (mistats.moddate || '').replace(/ H/, ' ');
   pt && (pt += (!pt.match(/ \d+/) ? ' 00' : '') + ':00:00' + tz);

   by = mistats.authors || (mistats.contentsource || '').replace(/.*\|/, '').replace(/^\s*/, '').replace(/\s*$/, '').replace(/\s+/g, ' ').replace(/^by /i, '');

   obj = {};
   mistats.taxonomy && (obj.category = { categories: [[mistats.taxonomy || '']] });
   anonId = s.c_r('AccessToken');
   anonId && (obj.identity = { paywallUserId: anonId });

   (window._matherq = window._matherq || []).push(['getTracker', function (tracker)
   {
      var emla;
      var emlb;
      var links;

      try
      {
         emla = window.localStorage.getItem('mi_nl_nm');
         emlb = window.localStorage.getItem('mi_nl_dm');
         emla && (emla = atob(emla));
         emlb && (emlb = atob(emlb));
      } catch (emlErr)
      {
      }

      tracker.setCollectorUrl('www.i.matheranalytics.com');
      tracker.setAppId('v1');
      tracker.setCustomerId(cid);
      tracker.setMarket(mrk);
      tracker.setSection(mistats.channel);
      tracker.setPremium(!!(mistats.pagelevel || '').match(/story/i));
      tracker.setPageType(((mistats.pagelevel || '').match(/\w+/) || [''])[0]);
      tracker.setHier && (tracker.setHier(mistats.taxonomy));
      tracker.enableActivityTracking(30, 10);
      tracker.setUserId(uid);
      by && (tracker.setAuthor(by));
      pt && (tracker.setArticlePublishTime(pt));
      emla && emlb && (tracker.setEmail(emla + '@' + emlb));
      tracker.trackPageView(null, obj);

      links = document.getElementsByTagName('a');
      for (var i = 0; i < links.length; i++)
         (links[i].href || '').match(/\/static\/subscribe/) && (mistats.bind(links[i], 'mousedown', function ()
         {
            tracker.paywallEvent(
            {
               type: 'subscription',
               category: 'payment',
               action: 'subscription_started'
            },
            {
               customerId: cid,
               market: mrk,
               userId: uid
            });
         }));
   }]);

   if (!window._mather)
   {
      sp = document.createElement('script');
      scripts = document.getElementsByTagName('script')[0];
      src = cid + '/' + mrk + '/sp.js?cb=' + Math.round((new Date()) / 1.0368e9);

      sp.type = 'text/javascript';
      sp.async = true;
      sp.defer = true;
      sp.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://js.matheranalytics.com/s/' + src;
      scripts.parentNode.insertBefore(sp, scripts);
   }
};

mistats.listenerMarket && (mistats.doListenerTag());

mistats.ga =
{
   global: 'UA-48280268-1',
   account:
   {
//      'nmanchorage':     'UA-48282983-1',
      'nmanchorage':     'UA-5429367-5',
      'nmbelleville':    'UA-48277881-1',
      'gpaper111':       'UA-48327948-1',
      'nmbiloxi':        'UA-48281278-1',
      'gpaper113':       'UA-48283980-1',
      'nmbradenton':     'UA-48278177-1',
      'nmcharlotte':     'UA-48278383-1',
      'nmcolumbia':      'UA-48283981-1',
      'nmcolumbus':      'UA-48280669-1',
      'nmnuevo':         'UA-48385706-1',
      'nmfresno':        'UA-48283279-1',
      'nmfortworth':     'UA-48279680-1',
      'nmhiltonhead':    'UA-48278776-1',
      'nmkansascity':    'UA-48279380-1',
      'nmlexington':     'UA-48283280-1',
      'nmmacon':         'UA-48283982-1',
      'nmmerced':        'UA-48277496-1',
      'nmmiami':         'UA-48282577-1',
      'nmmodesto':       'UA-48283983-1',
      'nmmyrtlebeach':   'UA-48278975-1',
      'gpaper154':       'UA-48286261-1',
      'nmraleigh':       'UA-48279682-1',
      'nmolathe':        'UA-89824220-1',
      'nmrockhill':      'UA-48284889-1',
      'nmsacramento':    'UA-48281280-1',
      'nmsanluisobispo': 'UA-48283984-1',
      'nmstatecollege':  'UA-48284890-1',
      'nmtacoma':        'UA-48278079-1',
      'nmtricity':       'UA-48281581-1',
      'nmwichita':       'UA-48385707-1',
      'nmmclatchy':      'UA-48282677-1',
      'nmmcclatchycorp': 'UA-48279381-1',
      'nmmianalytics':   'UA-48284891-1'
   }[mistats.account || ''],

   go: function (pFields, pType, pPath)
   {
      if (!this.account || (this.tagSent && !pFields) || (location.pathname || '').match(/\/video-embed/i) || (location.hostname || '').match(/legacy\.com/))
         return;

      this.tagSent = true;

      if (!this.created)
      {
         this.created = true;

         (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
         (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
         m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
         })(window,document,'script','//www.google-analytics.com/analytics.js','mistats_ga');

         mistats_ga('create', this.account, {'clientId': null, 'name': 'mistats_ga_' + this.account});
         mistats_ga('create', this.global,  {'clientId': null, 'name': 'mistats_ga_' + this.global});
         (function (pName)
         {
            var evt;

            try
            {
               window.dispatchEvent((new Event(pName)));
            } catch (evtErr)
            {
               evt = document.createEvent('CustomEvent');
               evt.initCustomEvent(pName, false, false, undefined);
               window.dispatchEvent(evt);
            }
         })('mistats_ga');
      }

      if (typeof mistats_ga !== 'undefined')
         mistats_ga(function ()
         {
            var f;
            var i;
            var t;

            f =
            {
               'hostname': mistats.server || null,
               'path':     location.pathname.toLowerCase() || null,
               'title':    (mistats.pagename ||'').replace(/^vendor\s*:\s*[^:]*:*\s*/i, '') || null,

               'dimension1':  mistats.bizunit || null,
               'dimension2':  mistats.sitename || null,
               'dimension3':  (mistats.pagelevel || '').replace(/\*/g, '') || null,
               'dimension4':  mistats.taxonomy || null,
               'dimension5':  mistats.subscriptions.id || null,
               'dimension6':  mistats.channel || null,
               'dimension7':  mistats.popular || null,
               'dimension8':  mistats.contentsource || null,
               'dimension9':  mistats.pubdate || null,
               'dimension10': mistats.moddate || null,
               'dimension11': mistats.custom1 || null,
               'dimension12': mistats.custom2 || null,
               'dimension13': mistats.custom3 || null,
               'dimension14': (((location.hash || '').length > 1 ? location.hash : '') + (location.search.match(/storylink=\w+/gi) || []).join('#')) || null,
               'dimension15': (((location.search || '').length > 1 ? location.search : '')) || null,

               'contentGroup1': mistats.sitename || null,
               'contentGroup2': mistats.channel || null
            };

            if (typeof pFields === 'object' && pFields.constructor !== Array)
               for (i in pFields)
                  f[i] = pFields[i];

            t = mistats_ga.getAll();
            (mistats.account || '').match(/nmmianalytics|nmanchorage/i) && (t[1] = null);
            t[0].set(f);
            t[1] && (t[1].set(f));
            if (pPath)
            {
               t[0].send(pType || 'pageview', pPath);
               t[1] && (t[1].send(pType || 'pageview', pPath));
            } else {
               t[0].send(pType || 'pageview');
               t[1] && (t[1].send(pType || 'pageview'));
            }
         });
   }
};

mistats.ga.go();

if (location.href.match(/#\s*$/) || (location.hash || '').match(/wgt=|navlinks?=|storylink=|videolink=|cardlink=|emlnl=|mirefresh/i))
{
   if (history.replaceState)
      history.replaceState('', document.title, location.pathname + (location.search || ''))
   else if (location.hash !== '#')
      location.hash = '';
}

(function ()
{
   var av;

   if (!mistats.subscriptions.loggedIn)
      return;

   av = s.c_r('mi_av');
   s.c_w('mi_av', '1', new Date(Date.now() + 1800000));

   if (av == '1')
      return;

   if (!window.fbq)
   {
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      window.fbq('init', '1081709588515684');
      window.fbq('trackSingle', '1081709588515684', 'ActiveSubscriberPageview');
   } else
      window.fbq('trackSingle', '1081709588515684', 'ActiveSubscriberPageview');

   mistats.ga && mistats.ga.go && (mistats.ga.go(
   {
      eventCategory: 'Engagement',
      eventAction: 'Active Subscriber Session',
      eventLabel: (mistats.sitename || location.hostname) + ' - Active Subscriber Session'
   }, 'event'));
})();

mistats.doQuantServe = function ()
{
   var scr;

   if (mistats.mpp)
      return;

   window._qoptions =
   {
      qacct: 'p-50B2Fi6bBqYto',
      labels: mistats.bizunit
   };

   scr = document.createElement('script');
   scr.type = 'text/javascript';
   scr.async = 'async';
   scr.src = location.protocol + '//edge.quantserve.com/quant.js';
   document.body.appendChild(scr);
};

mistats.doQuantServe();

mistats.tyntid && mistats.isEscenic && mistats.mediaHost && mistats.jsLoader && (mistats.jsLoader((mistats.mediaHost ||'').replace(/^http:/, 'https:') + '/mistats/mi_content_tracker.js'));

(function ()
{
   var d;

   d = new Image(1, 1);
   d.onerror = d.onload = function ()
   {
      d.onerror = d.onload = null;
   };
   d.src = ['//secure-us.imrworldwide.com/cgi-bin/m?ci=us-203838h&cg=0&cc=1&si=', escape(window.location.href), '&rp=', escape(document.referrer), '&ts=compact&rnd=', (new Date()).getTime()].join('');
})();

if (location.search === '?mi_ticker')
   (function ()
   {
      var scr;
      scr = document.createElement('script');
      scr.type = 'text/javascript';
      scr.src = 'https://media.mcclatchyinteractive.com/mistats/realtime/ticker.js';
      document.body.appendChild(scr);
   })();
if (location.search === '?mi_ticker_auth')
   (function ()
   {
      var scr;
      scr = document.createElement('script');
      scr.type = 'text/javascript';
      scr.src = 'https://media.mcclatchyinteractive.com/mistats/realtime/ticker_topref.js';
      document.body.appendChild(scr);
   })();
/*
(function ()
{
   if (location.search === '?botsurvey' || ((!location.pathname || location.pathname === '/') && (navigator.userAgent || '').match(/Mozilla\/5\.0 \(Windows NT[^\)]+\) AppleWebKit\/537\.36 \(KHTML, like Gecko\) Chrome\/7[01]/)))
      mistats.jsLoader && mistats.mediaHost && (mistats.jsLoader(mistats.mediaHost + '/mistats/referrer_survey.js', false));
})();
*/
(function ()
{
   if ((location.href || '').match(/omni_debug/) || (window != top && (document.referrer || '').match(/omni_debug/)))
      window.open('','dp_debugger','width=600,height=600,location=0,menubar=0,status=1,toolbar=0,resizable=1,scrollbars=1').document.write('<html><head></head><body><scr\ipt type="text/javascr\ipt" id="dbg" src="https://www.adobetag.com/d1/digitalpulsedebugger/live/DPD.js"></scr\ipt></body></html>');
})();

if (mistats.hasCore && window.digitalData && window._satellite)
{
   window._satellite.pageBottom();
   mistats.windowEvent('mistats_adobe');
} else
   (function ()
   {
      window.addEventListener('mi_launchload', function ()
      {
         console.log('mi_launchload');
         window._satellite && window._satellite.pageBottom && (window._satellite.pageBottom());
         mistats.windowEvent('mistats_adobe');
      }, false);
   })();

