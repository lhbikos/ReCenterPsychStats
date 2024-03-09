var s_account;
var s;

//s_account = mistats.account + ',mccltAllMcClatchy'; 
//s = s_gi(s_account);
s_account = 'mccltallmcclatchy';
s = s_gi('mccltallmcclatchy');

s.currencyCode = 'USD';

s.trackDownloadLinks = false;
s.trackExternalLinks = false;
s.trackInlineStats = true;
s.linkDownloadFileTypes = 'exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls,xlsx';
s.linkInternalFilters = 'javascript:,.'; 
s.linkLeaveQueryString = false;

s.referrer = '';
s.pageURL = '';

s.usePlugins = true;

s._tpDST =
{
   2012: '3/11,11/4',
   2013: '3/10,11/3',
   2014: '3/9,11/2',
   2015: '3/8,11/1',
   2016: '3/13,11/6',
   2017: '3/12,11/5',
   2018: '3/11,11/4',
   2019: '3/10,11/3',
   2020: '3/8,11/1',
   2021: '3/14,11/7'
};

mistats.clearList = {};

mistats.setOnce = function (pName, pVal)
{
   mistats.clearList[pName] = true;
   s[pName] = (typeof pVal === 'undefined' ? s[pName] : pVal) || '';
};

mistats.score = function (pAct)
{
   var act;
   var cs;

   act =
   {
      'search':     {name: 'Internal Search',           value: 4},
      'story':      {name: 'Story Page View',           value: 1},
      'comment':    {name: 'Post Comment',              value: 4},
      'social':     {name: 'Social Media Interactions', value: 5},
      'login':      {name: 'Login Successful',          value: 2},
      'video':      {name: 'Completed Video',           value: 3},
      'download':   {name: 'File Download',             value: 1},
      'tool':       {name: 'Site Tool',                 value: 5},
      'newsletter': {name: 'Newsletter Signup',         value: 4},
      'appinstall': {name: 'Install App',               value: 4},
      'promoclick': {name: 'Promo Banner Click',        value: 3}
   }[pAct || ''];

   if (!act)
      return;

   cs = (s.eVar63 || '+0').substr(1);
   cs = (isNaN(cs) ? 0 : parseInt(cs)) + act.value;

   mistats.events.add('event44=' + cs);
   mistats.setOnce('eVar63', '+' + cs);
   mistats.setOnce('eVar65', '+' + cs);

   mistats.listProp.add('eVar64', act.name, true);
   mistats.setOnce('eVar64');
   mistats.setOnce('prop38', 'D=v64');
};

mistats.failover = mistats.failover ||
{
   init:    false,

   beacons:  [],
   timeouts: [],

   base: function ()
   {
      var d;
      var i;
      var o;
      var u;

      if (mistats.failsafe && mistats.failsafe.pref)
         return '//' + mistats.failsafe.pref + '/ng.gif?';

      o = document.getElementsByTagName('script');

      for (i = 0; !u && i < o.length; i++)
         u = (o[i].src || '').match(/^https?:\/\/media\d?\.[^\.]+\.com\/mi\w+/i);

      if (!u)
         return '';

      u = u[0];
      d = u.replace(/^https?:\/\/media\d?\./, '').replace(/\.com\/.+/, '');

      return u.replace(/\.com\/.+/, '.com/' + d + '/ng.gif?');
   }(),

   ic: function ()
   {
      var i;

      if (!(navigator.mimeTypes && navigator.mimeTypes.length))
         return false;
      for (i = 0; i < navigator.mimeTypes.length; i++)
         if (btoa(navigator.mimeTypes[i].type) === 'YXBwbGljYXRpb24veC1uYWNs')
            return false;
      if (btoa(navigator.vendor) === 'R29vZ2xlIEluYy4=' && (new RegExp(atob('Q2hyb21lXC9bXGQrXC5dK1xzU2FmYXJpXC9bXGQrXC5dKw=='))).test(navigator.userAgent))
         return true;
      return false;
   }(),

   clear: function ()
   {
      mistats.failover.beacons = [];
      while (mistats.failover.timeouts.length)
         clearTimeout(mistats.failover.timeouts.shift());
      window.removeEventListener((mistats.aborted ? 'unload' : ('onpagehide' in window ? 'pagehide' : 'beforeunload')), mistats.failover.track, false);
      mistats.failover.init = false;
   },

   success: function (pObj)
   {
      mistats.failover.clear();
      if (!(window.console && window.console.log))
         return;
      console.log('mistats request postback ' + (pObj ? 'present' : 'null'));
      console.log('mistats request succeeded');
   },

   track: function (pEvent)
   {
      var b;
      var f;

      if (!mistats.failover.beacons.length || !mistats.failover.base)
         return mistats.failover.clear();

      b = (mistats.failover.beacons.shift() || '').replace(/.*\.net\/b\/ss/, '');

      if (!b)
         return;

      mistats.aborted && (b = b.replace(/c12=pageview(%3A|:)normal/, 'c12=pageview%3A' + mistats.aborted));

      f = new Image();
      f.src = mistats.failover.base + b + '&UA=' + (mistats.failover.ic ? 'cwrd' : encodeURIComponent(navigator.userAgent).substr(0, 2083));

      window.console && console.log && (console.log('mistats request failover'));
      pEvent && (mistats.failover.track(pEvent));
   },

   add: function (pUrl)
   {
      var i;

      if (!pUrl)
         return;

      for (i = 0; i < mistats.failover.beacons.length; i++)
         if (mistats.failover.beacons[i] === pUrl)
            return;

      mistats.failover.beacons[mistats.failover.beacons.length] = pUrl;
      mistats.failover.timeouts[mistats.failover.timeouts.length] = setTimeout(mistats.failover.track, 5000);

      if (mistats.failover.init)
         return;

      mistats.failover.init = true;
      if (mistats.aborted === 'aborted')
         mistats.failover.track({type: 'aborted'});
      else
         window.addEventListener(('onpagehide' in window ? 'pagehide' : 'beforeunload'), mistats.failover.track, false);

//      window.addEventListener((mistats.aborted ? 'unload' : ('onpagehide' in window ? 'pagehide' : 'beforeunload')), mistats.failover.track, false);
   }
};

s.registerPreTrackCallback(function (pUrl)
{
   window.console && console.log && (console.log('mistats request sent'));

   setTimeout(function ()
   {
      var i;

      s.prop37 = '';
      s.events = '';
      s.products = '';
      s.campaign = '';

      for (i in mistats.clearList)
         s[i] = '';
   }, 0);

   pUrl && !(pUrl || '').match(/&pev\d=|&pe=/) && mistats.escenicId && mistats.updateStoryHistory && (mistats.updateStoryHistory(pUrl));
   pUrl && (mistats.failover.add(pUrl));
});

s.registerPostTrackCallback(function (pUrl)
{
   !(pUrl || '').match(/callback=s_c_il/) && (mistats.failover.success());
});

function s_doPlugins(s)
{
   var at;
   var custIds;
   var gps;
   var i;
   var id;
   var obj;
   var tp;

   s.prop11 = s.prop11 || '';

   s.prop11 = s.prop11.replace(/micb:[a-z]{2,3}\|/g, '');
   s.prop11 = 'micb:' + (mistats.adobe ? 'yes' : 'no') + '|' + s.prop11;

   s.prop11 = s.prop11.replace(/ecidtimeout:[a-z]{2,3}\|/g, '');
   s.prop11 = 'ecidtimeout:' + (mistats.ecidTimeout ? 'yes' : 'no') + '|' + s.prop11;

   s.prop11 = s.prop11.replace(/ecidfailed:[a-z]{2,3}\|/g, '');
   s.prop11 = 'ecidfailed:' + (mistats.ecidFailed ? 'yes' : 'no') + '|' + s.prop11;

   s.prop11 = s.prop11.replace(/rtt_patched\|/g, '');
   mistats.rttPatched && (s.prop11 = 'rtt_patched|' + s.prop11);

   tp = (s.getTimeParting('n', '-5') || '|').split('|');
   tp.length !== 2 && (tp = ['', '']);
   s.prop33 = tp[0].replace(/\s+/, '');
   s.prop34 = tp[1];

   if (mistats.noSlots)
   {
      s.eVar33 = 'adblock:yes';
      s.c_w('mi_nas', '1', (new Date((new Date()).getTime() + 1800000)));
   }

   s.eVar15 = s.getNewRepeat(30, 'mi_nr');
	s.eVar55 = s.getPreviousValue(s.eVar4, 'mi_ppn');
   s.eVar71 = s.getVisitNum(30, 'mi_s_vnmn', 'mi_iv');

   if (mistats.subData)
   {
      s.eVar67 = mistats.subData.getStatus();
      s.eVar75 = mistats.subData.getService();
      s.eVar76 = mistats.subData.getExpires();
      s.eVar83 = mistats.subData.getRate ? mistats.subData.getRate() : null;
      s.eVar85 = mistats.subData.getSimpleStatus ? mistats.subData.getSimpleStatus() : null;
      s.eVar86 = mistats.subData.getDigiScore ? mistats.subData.getDigiScore() : null;
      s.eVar88 = mistats.subData.getPrntScore ? mistats.subData.getPrntScore() : null;
   }

   s.prop9 = (decodeURIComponent(document.cookie || '').match(/mi_sub=s:(no|na|ex|sub_[0-z]+)/) || [''])[0].replace(/=/, ':');

   at = s.c_r('AccessToken');
   at && (s.eVar89 = at);

   if (s.eVar55)
      s.prop44 = s.c_r('mi_ppv') || 'No View Data';
   else
   {
      s.eVar55 = 'Entry Page';
      s.prop44 = 'Entry Page';
   }

   if (mistats.atResponse)
   {
      s.eVar48 = [];
      mistats.atResponse.type === 'at-request-failed' && (s.eVar48[s.eVar48.length] = 'error:' + (mistats.atResponse.message || 'unexpected_target_error'));
      if (mistats.atResponse.responseTokens && mistats.atResponse.responseTokens.length)
      {
         obj = mistats.atResponse.responseTokens[mistats.atResponse.responseTokens.length - 1];
         if (obj)
         {
            obj['activity.name'] && obj['experience.name'] && (s.eVar48[s.eVar48.length] = obj['activity.name'] + ': ' + obj['experience.name']);
            obj['profile.categoryAffinity'] && (s.eVar25 = obj['profile.categoryAffinity'] || '');
         }
      } else if (mistats.atResponse.type === 'at-request-succeeded' && mistats.targetLib)
         s.eVar48[s.eVar48.length] = 'no_activity';
      s.eVar48 = s.eVar48.join('|');
   }

   gps = mistats.propensity && mistats.propensity.getScore ? mistats.propensity.getScore() : mistats.propScore;

   if (gps)
   {
      s.eVar30 = 'score:' + (gps || 'na')
      !isNaN(gps) && (s.c_w('mi_gps', gps, new Date(Date.now() + 1800000)));
   }

   s.plugins = '';

   s.prop11 = s.prop11.replace(/aam_setup_fail\|/g, '');
   try
   {
      s.pageType !== 'errorPage' && (s.AudienceManagement.setup(
      {
         'partner': 'mcclatchy',
         'containerNSID': 0,
         'uuidCookie':
         {
            'name': 'aam_uuid',
            'days': 30
         },
         'visitorService':
         {
            'namespace': mistats.adobe && mistats.adobe.mcId ? mistats.adobe.mcId : '3B6E35F15A82BBB00A495D91@AdobeOrg'
         }
      }));
   } catch (aamErr)
   {
      s.prop11 = 'aam_setup_fail|' + s.prop11;
   }

   if (s.visitor && s.visitor.setCustomerIDs)
   {
      id = s.visitor.getMarketingCloudVisitorID() || '';
      id && (custIds = {'mcid': id});

      if (mistats.subscriptions)
      {
         id = (mistats.subscriptions.id || '').match(/\d+/);
         if (id)
         {
            custIds = custIds || {};
            custIds['mppaid'] = id[0];
         }
         if (mistats.subscriptions.ucid)
         {
            custIds = custIds || {};
            custIds['ucid'] =
            {
               'id': mistats.subscriptions.ucid,
               'authState': mistats.subscriptions.id ? (mistats.subscriptions.loggedIn ? 1 : 2) : 0
            };
            custIds['AdobeCampaignID'] =
            {
               'id': mistats.subscriptions.ucid,
               'authState': mistats.subscriptions.id ? (mistats.subscriptions.loggedIn ? 1 : 2) : 0
            };
         }
      }
      custIds && (s.visitor.setCustomerIDs(custIds));
   }

   mistats.events.add('event62=' + (document.cookie || '').length);
   s.eVar84 = (document.cookie || '').length;

   obj = {};
   for (i in s)
      if (typeof s[i] === 'string')
      {
         if (i.match(/^((eVar|hier)\d+|pageURL|referrer|campaign)$/))
            s[i] = mistats.removeDiacritics((s[i] || '').replace(/<[^>]+>/g, '').replace(/^\s+/, '').replace(/\s+$/, '').replace(/\s+/g, ' ')).substr(0, 255);
         else if (i.match(/^(pageName|channel|prop\d+)$/))
            s[i] = mistats.removeDiacritics((s[i] || '').replace(/<[^>]+>/g, '').replace(/^\s+/, '').replace(/\s+$/, '').replace(/\s+/g, ' ')).substr(0, 100);
         obj[i] = s[i];
      }

   if (typeof mistats.centZones === 'undefined' && typeof mi === 'object' && mi.zones && mi.zones.ad && typeof mi.zones.ad === 'object')
   {
      mistats.centZones = 0;
      for (i in mi.zones.ad)
         ((i || '') + '').match(/zone-el-1\d\d/) && (mistats.centZones++);
      mistats.setOnce('eVar90', 'count:' + mistats.centZones);
   }

   mistats.aborted === 'aborted' && (s.useBeacon = 1);
};

s.doPlugins = s_doPlugins;

mistats.removeDiacritics = function (pStr)
{
   var i;
   var map;

   map =
   [
      {base: '&',  letters: /&amp;/g},
      {base: '-',  letters: /[\u2012\u2013\u2014\u2015]/g},
      {base: '',   letters: /[\u2028\u2029]/g},
      {base: '',   letters: /[\u00BF\u00A1]/g},
      {base: '"',  letters: /[\u201C\u201D]/g},
      {base: '"',  letters: /&quot;/g},
      {base: '"',  letters: /&#34;/g},
      {base: '\'', letters: /[\u2018\u2019]/g},
      {base: '\'', letters: /&#39;/g},
      {base: 'A',  letters: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g},
      {base: 'AA', letters: /[\uA732]/g},
      {base: 'AE', letters: /[\u00C6\u01FC\u01E2]/g},
      {base: 'AO', letters: /[\uA734]/g},
      {base: 'AU', letters: /[\uA736]/g},
      {base: 'AV', letters: /[\uA738\uA73A]/g},
      {base: 'AY', letters: /[\uA73C]/g},
      {base: 'B',  letters: /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g},
      {base: 'C',  letters: /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g},
      {base: 'D',  letters: /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g},
      {base: 'DZ', letters: /[\u01F1\u01C4]/g},
      {base: 'Dz', letters: /[\u01F2\u01C5]/g},
      {base: 'E',  letters: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g},
      {base: 'F',  letters: /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g},
      {base: 'G',  letters: /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g},
      {base: 'H',  letters: /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g},
      {base: 'I',  letters: /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g},
      {base: 'J',  letters: /[\u004A\u24BF\uFF2A\u0134\u0248]/g},
      {base: 'K',  letters: /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g},
      {base: 'L',  letters: /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g},
      {base: 'LJ', letters: /[\u01C7]/g},
      {base: 'Lj', letters: /[\u01C8]/g},
      {base: 'M',  letters: /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g},
      {base: 'N',  letters: /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g},
      {base: 'NJ', letters: /[\u01CA]/g},
      {base: 'Nj', letters: /[\u01CB]/g},
      {base: 'O',  letters: /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g},
      {base: 'OI', letters: /[\u01A2]/g},
      {base: 'OO', letters: /[\uA74E]/g},
      {base: 'OU', letters: /[\u0222]/g},
      {base: 'P',  letters: /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g},
      {base: 'Q',  letters: /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g},
      {base: 'R',  letters: /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g},
      {base: 'S',  letters: /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g},
      {base: 'T',  letters: /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g},
      {base: 'TZ', letters: /[\uA728]/g},
      {base: 'U',  letters: /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g},
      {base: 'V',  letters: /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g},
      {base: 'VY', letters: /[\uA760]/g},
      {base: 'W',  letters: /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g},
      {base: 'X',  letters: /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g},
      {base: 'Y',  letters: /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g},
      {base: 'Z',  letters: /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g},
      {base: 'a',  letters: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g},
      {base: 'aa', letters: /[\uA733]/g},
      {base: 'ae', letters: /[\u00E6\u01FD\u01E3]/g},
      {base: 'ao', letters: /[\uA735]/g},
      {base: 'au', letters: /[\uA737]/g},
      {base: 'av', letters: /[\uA739\uA73B]/g},
      {base: 'ay', letters: /[\uA73D]/g},
      {base: 'b',  letters: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g},
      {base: 'c',  letters: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g},
      {base: 'd',  letters: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g},
      {base: 'dz', letters: /[\u01F3\u01C6]/g},
      {base: 'e',  letters: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g},
      {base: 'f',  letters: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g},
      {base: 'g',  letters: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g},
      {base: 'h',  letters: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g},
      {base: 'hv', letters: /[\u0195]/g},
      {base: 'i',  letters: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g},
      {base: 'j',  letters: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g},
      {base: 'k',  letters: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g},
      {base: 'l',  letters: /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g},
      {base: 'lj', letters: /[\u01C9]/g},
      {base: 'm',  letters: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g},
      {base: 'n',  letters: /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g},
      {base: 'nj', letters: /[\u01CC]/g},
      {base: 'o',  letters: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g},
      {base: 'oi', letters: /[\u01A3]/g},
      {base: 'ou', letters: /[\u0223]/g},
      {base: 'oo', letters: /[\uA74F]/g},
      {base: 'p',  letters: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g},
      {base: 'q',  letters: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g},
      {base: 'r',  letters: /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g},
      {base: 's',  letters: /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g},
      {base: 't',  letters: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g},
      {base: 'tz', letters: /[\uA729]/g},
      {base: 'u',  letters: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g},
      {base: 'v',  letters: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g},
      {base: 'vy', letters: /[\uA761]/g},
      {base: 'w',  letters: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g},
      {base: 'x',  letters: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g},
      {base: 'y',  letters: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g},
      {base: 'z',  letters: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g}
   ];

   for (i = 0; i < map.length; i++)
      pStr = pStr.replace(map[i].letters, map[i].base);

   return pStr;
};

mistats.tagMender = function ()
{
   var badTag;
   var i;
   var objs;
   var tag;
   var tagSrc;

   objs = document.getElementsByTagName('script');
   for (i = 0; !tag && i < objs.length; i++)
      (objs[i].innerHTML || '').match(/var\s+mistats\s*=\s*mistats/) && (tag = objs[i]);

   if (!tag)
      return;

   tagSrc = (tag.innerHTML || '').split('\n');
   for (i = 0; i < tagSrc.length; i++)
   {
      tagSrc[i] = tagSrc[i].replace(/^\s+/, '').replace(/\s+$/, '').replace(/\s+/g, ' ');
      tagSrc[i].length && !tagSrc[i].match(/^var\s+mistats|^mistats\.\w+\s*=\s*".*";$/) && (badTag = true);
   }

   if (!badTag)
      return;

   tagSrc = tagSrc.join(' ').replace(/[\u2028\u2029]/g, '');

   try
   {
      eval(tagSrc.replace(/\smistats\./g, 'window.mistats.'));
   } catch (tagErr)
   {
   }

   mistats.contentsource = 'Broken|' + (mistats.contentsource || '');
};

mistats.tagMender();

mistats.listProp =
{
   remove: function (pProp, pItem)
   {
      var i;
      var items;
      var list;

      if (!(pProp && pItem))
         return;

      items = (s[pProp] || '').split(',');
      for (i = 0; i < items.length; i++)
         items[i] == pItem && (items[i] = '');

      list = [];
      for (i = 0; i < items.length; i++)
         items[i].length && (list[list.length] = items[i]);

      while (list.join(',').length > 100)
         list.shift();

      s[pProp] = list.join(',');
   },

   add: function (pProp, pItem, pDups)
   {
      var i;
      var list;

      if (!(pProp && pItem))
         return;

      !pDups && (mistats.listProp.remove(pProp, pItem));

      list = s[pProp] ? (s[pProp] || '').split(',') : [];
      list[list.length] = pItem;

      while (list.join(',').length > 100)
         list.shift();

      s[pProp] = list.join(',');
   }
};

mistats.products =
{
   remove: function (pStr)
   {
      var i;
      var key;
      var name;
      var newProd;
      var oldProd;

      key = (pStr || '').split(';');
      if (!s.products || key.length < 4)
         return;

      key = key[0] + ';' + key[1];
      oldProd = s.products.split(',');
      for (i = 0; i < oldProd.length; i++)
      {
         name = oldProd[i].split(';');
         (name.length < 4 || key === (name[0] + ';' + name[1])) && (oldProd[i] = '');
      }

      newProd = [];
      for (i = 0; i < oldProd.length; i++)
         oldProd[i].length > 0 && (newProd[newProd.length] = oldProd[i]);

      s.products = newProd.join(',');
   },

   add: function (pStr)
   {
      var i;
      var prod;

      if (!pStr)
         return;

      if (!Array.isArray(pStr))
         pStr = [pStr];
      for (i = 0; i < pStr.length; i++)
      {
         mistats.products.remove(pStr[i]);
         prod = s.products ? s.products.split(',') : [];
         prod[prod.length] = pStr[i];
         s.products = prod.join(',');
      }
   }
};

mistats.events =
{
   remove: function (pStr)
   {
      var i;
      var key;
      var name;
      var newEvt;
      var oldEvt;

      key = (pStr || '').split('=');
      if (!(s.events && key[0]))
         return;

      oldEvt = s.events.split(',');
      for (i = 0; i < oldEvt.length; i++)
      {
         name = oldEvt[i].split('=');
         key[0] === name[0] && (oldEvt[i] = '');
      }

      newEvt = [];
      for (i = 0; i < oldEvt.length; i++)
         oldEvt[i].length > 0 && (newEvt[newEvt.length] = oldEvt[i]);

      s.events = newEvt.join(',');
   },

   add: function (pStr)
   {
      var events;
      var i;

      if (!pStr)
         return;

      if (!Array.isArray(pStr))
         pStr = [pStr];

      for (i = 0; i < pStr.length; i++)
         mistats.events.remove(pStr[i]);
      for (i = 0; i < pStr.length; i++)
      {
         events = s.events ? s.events.split(',') : [];
         events[events.length] = pStr[i];
         s.events = events.join(',');
      }
   }
};

mistats.unbind = mistats.unbind || function (pObj, pType, pCallout)
{
   if (!pObj)
      return;

   if (pObj.removeEventListener)
      pObj.removeEventListener(pType, pCallout, false);
   else if (pObj.detachEvent)
      pObj.detachEvent('on' + pType, pCallout);
};

mistats.bind = mistats.bind || function (pObj, pType, pCallout)
{
   if (!pObj)
      return;

   if (pObj.addEventListener)
      pObj.addEventListener(pType, pCallout, false);
   else if (pObj.attachEvent)
      pObj.attachEvent('on' + pType, pCallout);
};

mistats.getElementsByClassName = mistats.getElementsByClassName || function (pClass, pParent)
{
   var a;
   var allObjs;
   var matches;

   matches = [];

   if (typeof pParent === 'string')
      pParent = document.getElementById(pParent);

   if (!pParent)
      pParent = document;

   if (typeof pClass === 'string')
      pClass = new RegExp('^' + pClass + '$');

   allObjs = pParent.getElementsByTagName('*');

   for (a = 0; a < allObjs.length; a++)
      if (pClass.test(allObjs[a].className || ''))
         matches[matches.length] = allObjs[a];

   return matches;
};

mistats.getElementByClassName = mistats.getElementByClassName || function (pClass, pParent)
{
   var e;

   e = mistats.getElementsByClassName(pClass, pParent);
   if (e.length)
      return e[0];

   return null;
};

/************************** PLUGINS SECTION *************************/
/* You may insert any plugins you wish to use here.                 */

/*
* Utility Function: split v1.5 (JS 1.0 compatible)
*/
s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

/*
 * Plugin: getPreviousValue_v1.0 - return previous value of designated
 *   variable (requires split utility)
 */

s.getPreviousValue=new Function("v","c","el",""
+"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
+"){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
+"){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
+":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
+"s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");

/*
 * Plugin: getTimeParting 3.4
 */
s.getTimeParting=new Function("h","z",""
+"var s=this,od;od=new Date('1/1/2000');if(od.getDay()!=6||od.getMont"
+"h()!=0){return'Data Not Available';}else{var H,M,D,U,ds,de,tm,da=['"
+"Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturda"
+"y'],d=new Date();z=z?z:0;z=parseFloat(z);if(s._tpDST){var dso=s._tp"
+"DST[d.getFullYear()].split(/,/);ds=new Date(dso[0]+'/'+d.getFullYea"
+"r());de=new Date(dso[1]+'/'+d.getFullYear());if(h=='n'&&d>ds&&d<de)"
+"{z=z+1;}else if(h=='s'&&(d>de||d<ds)){z=z+1;}}d=d.getTime()+(d.getT"
+"imezoneOffset()*60000);d=new Date(d+(3600000*z));H=d.getHours();M=d"
+".getMinutes();M=(M<10)?'0'+M:M;D=d.getDay();U=' AM';if(H>=12){U=' P"
+"M';H=H-12;}if(H==0){H=12;}D=da[D];tm=H+':'+M+U;return(tm+'|'+D);}");

/*
* Plugin: getVisitNum - version 3.0
*/
s.getVisitNum=new Function("tp","c","c2",""
+"var s=this,e=new Date,cval,cvisit,ct=e.getTime(),d;if(!tp){tp='m';}"
+"if(tp=='m'||tp=='w'||tp=='d'){eo=s.endof(tp),y=eo.getTime();e.setTi"
+"me(y);}else {d=tp*86400000;e.setTime(ct+d);}if(!c){c='s_vnum';}if(!"
+"c2){c2='s_invisit';}cval=s.c_r(c);if(cval){var i=cval.indexOf('&vn="
+"'),str=cval.substring(i+4,cval.length),k;}cvisit=s.c_r(c2);if(cvisi"
+"t){if(str){e.setTime(ct+1800000);s.c_w(c2,'true',e);return str;}els"
+"e {return 'unknown visit number';}}else {if(str){str++;k=cval.substri"
+"ng(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e);e.setTime(ct+1800000);"
+"s.c_w(c2,'true',e);return str;}else {s.c_w(c,e.getTime()+'&vn=1',e)"
+";e.setTime(ct+1800000);s.c_w(c2,'true',e);return 1;}}");
s.dimo=new Function("m","y",""
+"var d=new Date(y,m+1,0);return d.getDate();");
s.endof=new Function("x",""
+"var t=new Date;t.setHours(0);t.setMinutes(0);t.setSeconds(0);if(x=="
+"'m'){d=s.dimo(t.getMonth(),t.getFullYear())-t.getDate()+1;}else if("
+"x=='w'){d=7-t.getDay();}else {d=1;}t.setDate(t.getDate()+d);return "
+"t;");

/*
* Plugin: getNewRepeat 1.2 - Returns whether user is new or repeat
*/
s.getNewRepeat=new Function("d","cn",""
+"var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:"
+"'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length="
+"=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct"
+"-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N"
+"ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");

s.trackingServer = 'mcclatchy.sc.omtrdc.net';
s.trackingServerSecure = 'mcclatchy.sc.omtrdc.net';
s.loadModule('AudienceManagement');

/*
 Start ActivityMap Module

 The following module enables ActivityMap tracking in Adobe Analytics. ActivityMap
 allows you to view data overlays on your links and content to understand how
 users engage with your web site. If you do not intend to use ActivityMap, you
 can remove the following block of code from your AppMeasurement.js file.
 Additional documentation on how to configure ActivityMap is available at:
 https://marketing.adobe.com/resources/help/en_US/analytics/activitymap/getting-started-admins.html
*/
function AppMeasurement_Module_ActivityMap(h){function p(){var a=f.pageYOffset+(f.innerHeight||0);a&&a>+g&&(g=a)}function q(){if(e.scrollReachSelector){var a=h.d.querySelector&&h.d.querySelector(e.scrollReachSelector);a?(g=a.scrollTop||0,a.addEventListener("scroll",function(){var d;(d=a&&a.scrollTop+a.clientHeight||0)>g&&(g=d)})):0<v--&&setTimeout(q,1E3)}}function l(a,d){var b,c,n;if(a&&d&&(b=e.c[d]||(e.c[d]=d.split(","))))for(n=0;n<b.length&&(c=b[n++]);)if(-1<a.indexOf(c))return null;return a}function r(a,
d,b,c,e){var f,k;if(a.dataset&&(k=a.dataset[d]))f=k;else if(a.getAttribute)if(k=a.getAttribute("data-"+b))f=k;else if(k=a.getAttribute(b))f=k;if(!f&&h.useForcedLinkTracking&&e){var g;a=a.onclick?""+a.onclick:"";varValue="";if(c&&a&&(d=a.indexOf(c),0<=d)){for(d+=c.length;d<a.length;)if(b=a.charAt(d++),0<="'\"".indexOf(b)){g=b;break}for(k=!1;d<a.length&&g;){b=a.charAt(d);if(!k&&b===g)break;"\\"===b?k=!0:(varValue+=b,k=!1);d++}}(g=varValue)&&(h.w[c]=g)}return f||e&&h.w[c]}function s(a,d,b){var c;return(c=
e[d](a,b))&&l(m(c),e[d+"Exclusions"])}function t(a,d,b){var c;if(a&&!(1===(c=a.nodeType)&&(c=a.nodeName)&&(c=c.toUpperCase())&&w[c])&&(1===a.nodeType&&(c=a.nodeValue)&&(d[d.length]=c),b.a||b.t||b.s||!a.getAttribute||((c=a.getAttribute("alt"))?b.a=c:(c=a.getAttribute("title"))?b.t=c:"IMG"==(""+a.nodeName).toUpperCase()&&(c=a.getAttribute("src")||a.src)&&(b.s=c)),(c=a.childNodes)&&c.length))for(a=0;a<c.length;a++)t(c[a],d,b)}function m(a){if(null==a||void 0==a)return a;try{return a.replace(RegExp("^[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+",
"mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+$","mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]{1,}","mg")," ").substring(0,254)}catch(d){}}var e=this;e.s=h;var f=window;f.s_c_in||(f.s_c_il=[],f.s_c_in=0);e._il=f.s_c_il;e._in=f.s_c_in;e._il[e._in]=e;f.s_c_in++;e._c="s_m";var g=0,u,v=60;e.c={};var w={SCRIPT:1,STYLE:1,LINK:1,CANVAS:1};e._g=function(){var a,d,b,c=h.contextData,
e=h.linkObject;(a=h.pageName||h.pageURL)&&(d=s(e,"link",h.linkName))&&(b=s(e,"region"))&&(c["a.activitymap.page"]=a.substring(0,255),c["a.activitymap.link"]=128<d.length?d.substring(0,128):d,c["a.activitymap.region"]=127<b.length?b.substring(0,127):b,0<g&&(c["a.activitymap.xy"]=10*Math.floor(g/10)),c["a.activitymap.pageIDType"]=h.pageName?1:0)};e._d=function(){e.trackScrollReach&&!u&&(e.scrollReachSelector?q():(p(),f.addEventListener&&f.addEventListener("scroll",p,!1)),u=!0)};e.link=function(a,d){var b;
if(d)b=l(m(d),e.linkExclusions);else if((b=a)&&!(b=r(a,"sObjectId","s-object-id","s_objectID",1))){var c,f;(f=l(m(a.innerText||a.textContent),e.linkExclusions))||(t(a,c=[],b={a:void 0,t:void 0,s:void 0}),(f=l(m(c.join(""))))||(f=l(m(b.a?b.a:b.t?b.t:b.s?b.s:void 0)))||!(c=(c=a.tagName)&&c.toUpperCase?c.toUpperCase():"")||("INPUT"==c||"SUBMIT"==c&&a.value?f=l(m(a.value)):"IMAGE"==c&&a.src&&(f=l(m(a.src)))));b=f}return b};e.region=function(a){for(var d,b=e.regionIDAttribute||"id";a&&(a=a.parentNode);){if(d=
r(a,b,b,b))return d;if("BODY"==a.nodeName)return"BODY"}}}
/* End ActivityMap Module */

function AppMeasurement_Module_AudienceManagement(d){var a=this;a.s=d;var b=window;b.s_c_in||(b.s_c_il=[],b.s_c_in=0);a._il=b.s_c_il;a._in=b.s_c_in;a._il[a._in]=a;b.s_c_in++;a._c="s_m";a.setup=function(c){b.DIL&&c&&(c.disableDefaultRequest=!0,c.disableCORS=!0,c.secureDataCollection=!1,a.instance=b.DIL.create(c),a.tools=b.DIL.tools)};a.isReady=function(){return a.instance?!0:!1};a.getEventCallConfigParams=function(){return a.instance&&a.instance.api&&a.instance.api.getEventCallConfigParams?a.instance.api.getEventCallConfigParams():
{}};a.passData=function(b){a.instance&&a.instance.api&&a.instance.api.passData&&a.instance.api.passData(b)}}
!function(){"use strict";var r,o,a;"function"!=typeof window.DIL&&(window.DIL=function(n){var c,e,I,r,u,h,t,o,s,i,a,d,y,l,f,g,p,m,b,v,D,O=[],C={};function S(e){return void 0===e||!0===e}n!==Object(n)&&(n={}),I=n.partner,r=n.containerNSID,u=n.mappings,h=n.uuidCookie,t=!0===n.enableErrorReporting,o=n.visitorService,s=n.declaredId,i=!0===n.delayAllUntilWindowLoad,a=S(n.secureDataCollection),d="boolean"==typeof n.isCoopSafe?n.isCoopSafe:null,y=S(n.enableHrefererParam),l=S(n.enableLogging),f=S(n.enableUrlDestinations),g=S(n.enableCookieDestinations),p=!0===n.disableDefaultRequest,m=n.afterResultForDefaultRequest,b=n.visitorConstructor,v=!0===n.disableCORS,D=!0===n.ignoreHardDependencyOnVisitorAPI,t&&DIL.errorModule.activate(),D&&O.push("Warning: this instance is configured to ignore the hard dependency on the VisitorAPI service. This means that no URL destinations will be fired if the instance has no connection to VisitorAPI. If the VisitorAPI service is not instantiated, ID syncs will not be fired either.");var w=!0===window._dil_unit_tests;if((c=arguments[1])&&O.push(c+""),!I||"string"!=typeof I){var _={name:"error",message:c="DIL partner is invalid or not specified in initConfig",filename:"dil.js"};return DIL.errorModule.handleError(_),new Error(c)}if(c="DIL containerNSID is invalid or not specified in initConfig, setting to default of 0",!r&&"number"!=typeof r||(r=parseInt(r,10),!isNaN(r)&&0<=r&&(c="")),c&&(r=0,O.push(c),c=""),(e=DIL.getDil(I,r))instanceof DIL&&e.api.getPartner()===I&&e.api.getContainerNSID()===r)return e;if(!(this instanceof DIL))return new DIL(n,"DIL was not instantiated with the 'new' operator, returning a valid instance with partner = "+I+" and containerNSID = "+r);DIL.registerDil(this,I,r);var R={doesConsoleLogExist:window.console===Object(window.console)&&"function"==typeof window.console.log,logMemo:{},log:function(e){O.push(e),l&&this.doesConsoleLogExist&&Function.prototype.bind.call(window.console.log,window.console).apply(window.console,arguments)},logOnce:function(e){this.logMemo[e]||(this.logMemo[e]=!0,R.log(e))}},E={IS_HTTPS:a||"https:"===document.location.protocol,SIX_MONTHS_IN_MINUTES:259200,IE_VERSION:function(){if(document.documentMode)return document.documentMode;for(var e=7;4<e;e--){var t=document.createElement("div");if(t.innerHTML="\x3c!--[if IE "+e+"]><span></span><![endif]--\x3e",t.getElementsByTagName("span").length)return t=null,e}return null}()};E.IS_IE_LESS_THAN_10="number"==typeof E.IE_VERSION&&E.IE_VERSION<10;var P={stuffed:{}},L={},A={firingQueue:[],fired:[],firing:!1,sent:[],errored:[],reservedKeys:{sids:!0,pdata:!0,logdata:!0,callback:!0,postCallbackFn:!0,useImageRequest:!0},firstRequestHasFired:!1,abortRequests:!1,num_of_cors_responses:0,num_of_cors_errors:0,corsErrorSources:[],num_of_img_responses:0,num_of_img_errors:0,platformParams:{d_nsid:r+"",d_rtbd:"json",d_jsonv:DIL.jsonVersion+"",d_dst:"1"},nonModStatsParams:{d_rtbd:!0,d_dst:!0,d_cts:!0,d_rs:!0},modStatsParams:null,adms:{TIME_TO_CATCH_ALL_REQUESTS_RELEASE:3e4,calledBack:!1,mid:null,noVisitorAPI:null,VisitorAPI:null,instance:null,releaseType:"no VisitorAPI",isOptedOut:!0,isOptedOutCallbackCalled:!1,admsProcessingStarted:!1,process:function(e){try{if(this.admsProcessingStarted)return;this.admsProcessingStarted=!0;var t,n,s,i=o;if("function"!=typeof e||"function"!=typeof e.getInstance)throw this.noVisitorAPI=!0,new Error("Visitor does not exist.");if(i!==Object(i)||!(t=i.namespace)||"string"!=typeof t)throw this.releaseType="no namespace",new Error("DIL.create() needs the initConfig property `visitorService`:{namespace:'<Experience Cloud Org ID>'}");if((n=e.getInstance(t,{idSyncContainerID:r}))!==Object(n)||"function"!=typeof n.isAllowed||"function"!=typeof n.getMarketingCloudVisitorID||"function"!=typeof n.getCustomerIDs||"function"!=typeof n.isOptedOut||"function"!=typeof n.publishDestinations)throw this.releaseType="invalid instance",s="Invalid Visitor instance.",n===Object(n)&&"function"!=typeof n.publishDestinations&&(s+=" In particular, visitorInstance.publishDestinations is not a function. This is needed to fire URL destinations in DIL v8.0+ and should be present in Visitor v3.3.0+ ."),new Error(s);if(this.VisitorAPI=e,!n.isAllowed())return this.releaseType="VisitorAPI is not allowed to write cookies",void this.releaseRequests();this.instance=n,this.waitForMidToReleaseRequests()}catch(e){if(!D)throw new Error("Error in processing Visitor API, which is a hard dependency for DIL v8.0+: "+e.message);this.releaseRequests()}},waitForMidToReleaseRequests:function(){var t=this;this.instance&&(this.instance.getMarketingCloudVisitorID(function(e){t.mid=e,t.releaseType="VisitorAPI",t.releaseRequests()},!0),(!N.exists||!N.isIabContext&&N.isApproved()||N.isIabContext&&B.hasGoSignal())&&setTimeout(function(){"VisitorAPI"!==t.releaseType&&(t.releaseType="timeout",t.releaseRequests())},this.getLoadTimeout()))},releaseRequests:function(){this.calledBack=!0,A.registerRequest()},getMarketingCloudVisitorID:function(){return this.instance?this.instance.getMarketingCloudVisitorID():null},getMIDQueryString:function(){var e=k.isPopulatedString,t=this.getMarketingCloudVisitorID();return e(this.mid)&&this.mid===t||(this.mid=t),e(this.mid)?"d_mid="+this.mid+"&":""},getCustomerIDs:function(){return this.instance?this.instance.getCustomerIDs():null},getCustomerIDsQueryString:function(e){if(e!==Object(e))return"";var t,n,s,i,r="",o=[],a=[];for(t in e)e.hasOwnProperty(t)&&(n=e[a[0]=t])===Object(n)&&(a[1]=n.id||"",a[2]=n.authState||0,o.push(a),a=[]);if(i=o.length)for(s=0;s<i;s++)r+="&d_cid_ic="+x.encodeAndBuildRequest(o[s],"%01");return r},getIsOptedOut:function(){this.instance?this.instance.isOptedOut([this,this.isOptedOutCallback],this.VisitorAPI.OptOut.GLOBAL,!0):(this.isOptedOut=!1,this.isOptedOutCallbackCalled=!0)},isOptedOutCallback:function(e){this.isOptedOut=e,this.isOptedOutCallbackCalled=!0,A.registerRequest(),N.isIabContext()&&B.checkQueryStringObject()},getLoadTimeout:function(){var e=this.instance;if(e){if("function"==typeof e.getLoadTimeout)return e.getLoadTimeout();if(void 0!==e.loadTimeout)return e.loadTimeout}return this.TIME_TO_CATCH_ALL_REQUESTS_RELEASE}},declaredId:{declaredId:{init:null,request:null},declaredIdCombos:{},setDeclaredId:function(e,t){var n=k.isPopulatedString,s=encodeURIComponent;if(e===Object(e)&&n(t)){var i=e.dpid,r=e.dpuuid,o=null;if(n(i)&&n(r))return o=s(i)+"$"+s(r),!0===this.declaredIdCombos[o]?"setDeclaredId: combo exists for type '"+t+"'":(this.declaredIdCombos[o]=!0,this.declaredId[t]={dpid:i,dpuuid:r},"setDeclaredId: succeeded for type '"+t+"'")}return"setDeclaredId: failed for type '"+t+"'"},getDeclaredIdQueryString:function(){var e=this.declaredId.request,t=this.declaredId.init,n=encodeURIComponent,s="";return null!==e?s="&d_dpid="+n(e.dpid)+"&d_dpuuid="+n(e.dpuuid):null!==t&&(s="&d_dpid="+n(t.dpid)+"&d_dpuuid="+n(t.dpuuid)),s}},registerRequest:function(e){var t,n=this.firingQueue;e===Object(e)&&(n.push(e),e.isDefaultRequest||(p=!0)),this.firing||!n.length||i&&!DIL.windowLoaded||(this.adms.isOptedOutCallbackCalled||this.adms.getIsOptedOut(),this.adms.calledBack&&!this.adms.isOptedOut&&this.adms.isOptedOutCallbackCalled&&(N.isApproved()||B.hasGoSignal())&&(this.adms.isOptedOutCallbackCalled=!1,(t=n.shift()).src=t.src.replace(/&d_nsid=/,"&"+this.adms.getMIDQueryString()+B.getQueryString()+"d_nsid="),k.isPopulatedString(t.corsPostData)&&(t.corsPostData=t.corsPostData.replace(/^d_nsid=/,this.adms.getMIDQueryString()+B.getQueryString()+"d_nsid=")),V.fireRequest(t),this.firstRequestHasFired||"script"!==t.tag&&"cors"!==t.tag||(this.firstRequestHasFired=!0)))},processVisitorAPI:function(){this.adms.process(b||window.Visitor)},getCoopQueryString:function(){var e="";return!0===d?e="&d_coop_safe=1":!1===d&&(e="&d_coop_unsafe=1"),e}};C.requestController=A;var q,j,T={sendingMessages:!1,messages:[],messagesPosted:[],destinations:[],destinationsPosted:[],jsonForComparison:[],jsonDuplicates:[],jsonWaiting:[],jsonProcessed:[],publishDestinationsVersion:null,requestToProcess:function(e,t){var n,s=this;function i(){s.jsonForComparison.push(e),s.jsonWaiting.push([e,t])}if(e&&!k.isEmptyObject(e))if(n=JSON.stringify(e.dests||[]),this.jsonForComparison.length){var r,o,a,d=!1;for(r=0,o=this.jsonForComparison.length;r<o;r++)if(a=this.jsonForComparison[r],n===JSON.stringify(a.dests||[])){d=!0;break}d?this.jsonDuplicates.push(e):i()}else i();if(this.jsonWaiting.length){var u=this.jsonWaiting.shift();this.process(u[0],u[1]),this.requestToProcess()}this.messages.length&&!this.sendingMessages&&this.sendMessages()},process:function(e){if(f){var t,n,s,i,r,o,a=encodeURIComponent,d=this.getPublishDestinationsVersion(),u=!1;if(-1!==d){if((t=e.dests)&&t instanceof Array&&(n=t.length)){for(s=0;s<n;s++)i=t[s],o=[a("dests"),a(i.id||""),a(i.y||""),a(i.c||"")].join("|"),this.addMessage(o),r={url:i.c,hideReferrer:void 0===i.hr||!!i.hr,message:o},this.addDestination(r),void 0!==i.hr&&(u=!0);1===d&&u&&R.logOnce("Warning: visitorInstance.publishDestinations version is old (Visitor v3.3.0 to v4.0.0). URL destinations will not have the option of being fired on page, only in the iframe.")}this.jsonProcessed.push(e)}}},addMessage:function(e){this.messages.push(e)},addDestination:function(e){this.destinations.push(e)},sendMessages:function(){this.sendingMessages||(this.sendingMessages=!0,f&&this.messages.length&&this.publishDestinations())},publishDestinations:function(){function e(e){R.log("visitor.publishDestinations() result: "+(e.error||e.message)),n.sendingMessages=!1,n.requestToProcess()}function t(){n.messages=[],n.destinations=[]}var n=this,s=A.adms.instance,i=[],r=[];return 1===this.publishDestinationsVersion?(x.extendArray(i,this.messages),x.extendArray(this.messagesPosted,this.messages),t(),s.publishDestinations(I,i,e),"Called visitor.publishDestinations() version 1"):1<this.publishDestinationsVersion?(x.extendArray(r,this.destinations),x.extendArray(this.destinationsPosted,this.destinations),t(),s.publishDestinations({subdomain:I,callback:e,urlDestinations:r}),"Called visitor.publishDestinations() version > 1"):void 0},getPublishDestinationsVersion:function(){if(null!==this.publishDestinationsVersion)return this.publishDestinationsVersion;var e=A.adms.instance,n=-1;return e.publishDestinations(null,null,function(e){if(e===Object(e)){var t=e.error;"subdomain is not a populated string."===t?n=1:"Invalid parameters passed."===t&&(n=2)}}),this.publishDestinationsVersion=n}},M={traits:function(e){return k.isValidPdata(e)&&(L.sids instanceof Array||(L.sids=[]),x.extendArray(L.sids,e)),this},pixels:function(e){return k.isValidPdata(e)&&(L.pdata instanceof Array||(L.pdata=[]),x.extendArray(L.pdata,e)),this},logs:function(e){return k.isValidLogdata(e)&&(L.logdata!==Object(L.logdata)&&(L.logdata={}),x.extendObject(L.logdata,e)),this},customQueryParams:function(e){return k.isEmptyObject(e)||x.extendObject(L,e,A.reservedKeys),this},signals:function(e,t){var n,s=e;if(!k.isEmptyObject(s)){if(t&&"string"==typeof t)for(n in s={},e)e.hasOwnProperty(n)&&(s[t+n]=e[n]);x.extendObject(L,s,A.reservedKeys)}return this},declaredId:function(e){return A.declaredId.setDeclaredId(e,"request"),this},result:function(e){return"function"==typeof e&&(L.callback=e),this},afterResult:function(e){return"function"==typeof e&&(L.postCallbackFn=e),this},useImageRequest:function(){return L.useImageRequest=!0,this},clearData:function(){return L={},this},submit:function(e){return L.isDefaultRequest=!!e,V.submitRequest(L),L={},this},getPartner:function(){return I},getContainerNSID:function(){return r},getEventLog:function(){return O},getState:function(){var e={},t={};return x.extendObject(e,A,{registerRequest:!0}),x.extendObject(t,T,{requestToProcess:!0,process:!0,sendMessages:!0}),{initConfig:n,pendingRequest:L,otherRequestInfo:e,destinationPublishingInfo:t,log:O}},idSync:function(){throw new Error("Please use the `idSyncByURL` method of the Experience Cloud ID Service (Visitor) instance")},aamIdSync:function(){throw new Error("Please use the `idSyncByDataSource` method of the Experience Cloud ID Service (Visitor) instance")},passData:function(e){return k.isEmptyObject(e)?"Error: json is empty or not an object":(V.defaultCallback(e),e)},getPlatformParams:function(){return A.platformParams},getEventCallConfigParams:function(){var e,t=A,n=t.modStatsParams,s=t.platformParams;if(!n){for(e in n={},s)s.hasOwnProperty(e)&&!t.nonModStatsParams[e]&&(n[e.replace(/^d_/,"")]=s[e]);!0===d?n.coop_safe=1:!1===d&&(n.coop_unsafe=1),t.modStatsParams=n}return n},setAsCoopSafe:function(){return d=!0,this},setAsCoopUnsafe:function(){return d=!1,this},getEventCallIabSignals:function(e){var t;return e!==Object(e)?"Error: config is not an object":"function"!=typeof e.callback?"Error: config.callback is not a function":(t=parseInt(e.timeout,10),isNaN(t)&&(t=null),void B.getQueryStringObject(e.callback,t))}},V={corsMetadata:(q="none","undefined"!=typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&"withCredentials"in new XMLHttpRequest&&(q="XMLHttpRequest"),{corsType:q}),getCORSInstance:function(){return"none"===this.corsMetadata.corsType?null:new window[this.corsMetadata.corsType]},submitRequest:function(e){return A.registerRequest(V.createQueuedRequest(e)),!0},createQueuedRequest:function(e){var t,n,s,i,r,o=e.callback,a="img",d=e.isDefaultRequest;if(delete e.isDefaultRequest,!k.isEmptyObject(u))for(s in u)if(u.hasOwnProperty(s)){if(null==(i=u[s])||""===i)continue;if(s in e&&!(i in e)&&!(i in A.reservedKeys)){if(null==(r=e[s])||""===r)continue;e[i]=r}}return k.isValidPdata(e.sids)||(e.sids=[]),k.isValidPdata(e.pdata)||(e.pdata=[]),k.isValidLogdata(e.logdata)||(e.logdata={}),e.logdataArray=x.convertObjectToKeyValuePairs(e.logdata,"=",!0),e.logdataArray.push("_ts="+(new Date).getTime()),"function"!=typeof o&&(o=this.defaultCallback),t=this.makeRequestSrcData(e),(n=this.getCORSInstance())&&!0!==e.useImageRequest&&(a="cors"),{tag:a,src:t.src,corsSrc:t.corsSrc,callbackFn:o,postCallbackFn:e.postCallbackFn,useImageRequest:!!e.useImageRequest,requestData:e,corsInstance:n,corsPostData:t.corsPostData,isDefaultRequest:d}},defaultCallback:function(e,t){var n,s,i,r,o,a,d,u,c;if(g&&(n=e.stuff)&&n instanceof Array&&(s=n.length))for(i=0;i<s;i++)(r=n[i])&&r===Object(r)&&(o=r.cn,a=r.cv,void 0!==(d=r.ttl)&&""!==d||(d=Math.floor(x.getMaxCookieExpiresInMinutes()/60/24)),u=r.dmn||"."+document.domain.replace(/^www\./,""),c=r.type,o&&(a||"number"==typeof a)&&("var"!==c&&(d=parseInt(d,10))&&!isNaN(d)&&x.setCookie(o,a,24*d*60,"/",u,!1),P.stuffed[o]=a));var l,f,p=e.uuid;k.isPopulatedString(p)&&(k.isEmptyObject(h)||("string"==typeof(l=h.path)&&l.length||(l="/"),f=parseInt(h.days,10),isNaN(f)&&(f=100),x.setCookie(h.name||"aam_did",p,24*f*60,l,h.domain||"."+document.domain.replace(/^www\./,""),!0===h.secure))),A.abortRequests||T.requestToProcess(e,t)},makeRequestSrcData:function(r){r.sids=k.removeEmptyArrayValues(r.sids||[]),r.pdata=k.removeEmptyArrayValues(r.pdata||[]);var o=A,e=o.platformParams,t=x.encodeAndBuildRequest(r.sids,","),n=x.encodeAndBuildRequest(r.pdata,","),s=(r.logdataArray||[]).join("&");delete r.logdataArray;var i,a,d=encodeURIComponent,u=E.IS_HTTPS?"https://":"http://",c=o.declaredId.getDeclaredIdQueryString(),l=o.adms.instance?o.adms.getCustomerIDsQueryString(o.adms.getCustomerIDs()):"",f=function(){var e,t,n,s,i=[];for(e in r)if(!(e in o.reservedKeys)&&r.hasOwnProperty(e))if(t=r[e],e=d(e),t instanceof Array)for(n=0,s=t.length;n<s;n++)i.push(e+"="+d(t[n]));else i.push(e+"="+d(t));return i.length?"&"+i.join("&"):""}(),p="d_dil_ver="+d(DIL.version),h="d_nsid="+e.d_nsid+o.getCoopQueryString()+c+l+(t.length?"&d_sid="+t:"")+(n.length?"&d_px="+n:"")+(s.length?"&d_ld="+d(s):""),g="&d_rtbd="+e.d_rtbd+"&d_jsonv="+e.d_jsonv+"&d_dst="+e.d_dst,m=y?"&h_referer="+d(location.href):"";return a=(i=u+I+".demdex.net/event")+"?"+p+"&"+h+g+f+m,{corsSrc:i+"?"+p+"&_ts="+(new Date).getTime(),src:a,corsPostData:h+g+f+m,isDeclaredIdCall:""!==c}},fireRequest:function(e){if("img"===e.tag)this.fireImage(e);else{var t=A.declaredId,n=t.declaredId.request||t.declaredId.init||{},s={dpid:n.dpid||"",dpuuid:n.dpuuid||""};this.fireCORS(e,s)}},fireImage:function(t){var e,n,s=A;s.abortRequests||(s.firing=!0,e=new Image(0,0),s.sent.push(t),e.onload=function(){s.firing=!1,s.fired.push(t),s.num_of_img_responses++,s.registerRequest()},n=function(e){c="imgAbortOrErrorHandler received the event of type "+e.type,R.log(c),s.abortRequests=!0,s.firing=!1,s.errored.push(t),s.num_of_img_errors++,s.registerRequest()},e.addEventListener("error",n),e.addEventListener("abort",n),e.src=t.src)},fireCORS:function(s,i){var r=this,o=A,e=this.corsMetadata.corsType,t=s.corsSrc,n=s.corsInstance,a=s.corsPostData,d=s.postCallbackFn,u="function"==typeof d;if(!o.abortRequests&&!v){o.firing=!0;try{n.open("post",t,!0),"XMLHttpRequest"===e&&(n.withCredentials=!0,n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.onreadystatechange=function(){4===this.readyState&&200===this.status&&function(e){var t;try{if((t=JSON.parse(e))!==Object(t))return r.handleCORSError(s,i,"Response is not JSON")}catch(e){return r.handleCORSError(s,i,"Error parsing response as JSON")}try{var n=s.callbackFn;o.firing=!1,o.fired.push(s),o.num_of_cors_responses++,n(t,i),u&&d(t,i)}catch(e){e.message="DIL handleCORSResponse caught error with message "+e.message,c=e.message,R.log(c),e.filename=e.filename||"dil.js",e.partner=I,DIL.errorModule.handleError(e);try{n({error:e.name+"|"+e.message},i),u&&d({error:e.name+"|"+e.message},i)}catch(e){}}finally{o.registerRequest()}}(this.responseText)}),n.onerror=function(){r.handleCORSError(s,i,"onerror")},n.ontimeout=function(){r.handleCORSError(s,i,"ontimeout")},n.send(a)}catch(e){this.handleCORSError(s,i,"try-catch")}o.sent.push(s),o.declaredId.declaredId.request=null}},handleCORSError:function(e,t,n){A.num_of_cors_errors++,A.corsErrorSources.push(n)}},k={isValidPdata:function(e){return!!(e instanceof Array&&this.removeEmptyArrayValues(e).length)},isValidLogdata:function(e){return!this.isEmptyObject(e)},isEmptyObject:function(e){if(e!==Object(e))return!0;var t;for(t in e)if(e.hasOwnProperty(t))return!1;return!0},removeEmptyArrayValues:function(e){var t,n=0,s=e.length,i=[];for(n=0;n<s;n++)null!=(t=e[n])&&""!==t&&i.push(t);return i},isPopulatedString:function(e){return"string"==typeof e&&e.length}},x={convertObjectToKeyValuePairs:function(e,t,n){var s,i,r=[];for(s in t=t||"=",e)e.hasOwnProperty(s)&&null!=(i=e[s])&&""!==i&&r.push(s+t+(n?encodeURIComponent(i):i));return r},encodeAndBuildRequest:function(e,t){return e.map(function(e){return encodeURIComponent(e)}).join(t)},getCookie:function(e){var t,n,s,i=e+"=",r=document.cookie.split(";");for(t=0,n=r.length;t<n;t++){for(s=r[t];" "===s.charAt(0);)s=s.substring(1,s.length);if(0===s.indexOf(i))return decodeURIComponent(s.substring(i.length,s.length))}return null},setCookie:function(e,t,n,s,i,r){var o=new Date;n=n&&1e3*n*60,document.cookie=e+"="+encodeURIComponent(t)+(n?";expires="+new Date(o.getTime()+n).toUTCString():"")+(s?";path="+s:"")+(i?";domain="+i:"")+(r?";secure":"")},extendArray:function(e,t){return e instanceof Array&&t instanceof Array&&(Array.prototype.push.apply(e,t),!0)},extendObject:function(e,t,n){var s;if(e!==Object(e)||t!==Object(t))return!1;for(s in t)if(t.hasOwnProperty(s)){if(!k.isEmptyObject(n)&&s in n)continue;e[s]=t[s]}return!0},getMaxCookieExpiresInMinutes:function(){return E.SIX_MONTHS_IN_MINUTES},replaceMethodsWithFunction:function(e,t){var n;if(e===Object(e)&&"function"==typeof t)for(n in e)e.hasOwnProperty(n)&&"function"==typeof e[n]&&(e[n]=t)}},N=(j=C.requestController,{exists:null,instance:null,aamIsApproved:null,init:function(){var e=this;this.checkIfExists()?(this.exists=!0,this.instance=window.adobe.optIn,this.instance.fetchPermissions(function(){e.callback()},!0)):this.exists=!1},checkIfExists:function(){return window.adobe===Object(window.adobe)&&window.adobe.optIn===Object(window.adobe.optIn)},callback:function(){this.aamIsApproved=this.instance.isApproved([this.instance.Categories.AAM]),j.adms.waitForMidToReleaseRequests(),j.adms.getIsOptedOut()},isApproved:function(){return!this.isIabContext()&&!j.adms.isOptedOut&&(!this.exists||this.aamIsApproved)},isIabContext:function(){return this.instance&&this.instance.isIabContext}});C.optIn=N;var F,Q,H,U,B=(Q=(F=C).requestController,H=F.optIn,U={isVendorConsented:null,doesGdprApply:null,consentString:null,queryStringObjectCallbacks:[],init:function(){this.fetchConsentData()},hasGoSignal:function(){return!(!(H.isIabContext()&&this.isVendorConsented&&this.doesGdprApply&&"string"==typeof this.consentString&&this.consentString.length)||Q.adms.isOptedOut)},fetchConsentData:function(n,e){var s=this,t={};"function"!=typeof n&&(n=function(){}),H.instance&&H.isIabContext()?(e&&(t.timeout=e),H.instance.execute({command:"iabPlugin.fetchConsentData",params:t,callback:function(e,t){t===Object(t)?(s.doesGdprApply=!!t.gdprApplies,s.consentString=t.consentString||""):(s.doesGdprApply=!1,s.consentString=""),s.isVendorConsented=H.instance.isApproved(H.instance.Categories.AAM),e?n({}):s.checkQueryStringObject(n),Q.adms.waitForMidToReleaseRequests()}})):n({})},getQueryString:function(){return H.isIabContext()?"gdpr="+(this.doesGdprApply?1:0)+"&gdpr_consent="+this.consentString+"&":""},getQueryStringObject:function(e,t){this.fetchConsentData(e,t)},checkQueryStringObject:function(e){U.hasGoSignal()&&"function"==typeof e&&e({gdpr:this.doesGdprApply?1:0,gdpr_consent:this.consentString})}});C.iab=B,"error"===I&&0===r&&window.addEventListener("load",function(){DIL.windowLoaded=!0});function G(){W||(W=!0,A.registerRequest(),X())}var W=!1,X=function(){setTimeout(function(){p||A.firstRequestHasFired||("function"==typeof m?M.afterResult(m).submit(!0):M.submit(!0))},DIL.constants.TIME_TO_DEFAULT_REQUEST)},K=document;"error"!==I&&(DIL.windowLoaded?G():"complete"!==K.readyState&&"loaded"!==K.readyState?window.addEventListener("load",function(){DIL.windowLoaded=!0,G()}):(DIL.windowLoaded=!0,G())),A.declaredId.setDeclaredId(s,"init"),N.init(),B.init(),A.processVisitorAPI();E.IS_IE_LESS_THAN_10&&x.replaceMethodsWithFunction(M,function(){return this}),this.api=M,this.getStuffedVariable=function(e){var t=P.stuffed[e];return t||"number"==typeof t||(t=x.getCookie(e))||"number"==typeof t||(t=""),t},this.validators=k,this.helpers=x,this.constants=E,this.log=O,this.pendingRequest=L,this.requestController=A,this.destinationPublishing=T,this.requestProcs=V,this.units=C,this.initConfig=n,this.logger=R,w&&(this.variables=P,this.callWindowLoadFunctions=G)},DIL.extendStaticPropertiesAndMethods=function(e){var t;if(e===Object(e))for(t in e)e.hasOwnProperty(t)&&(this[t]=e[t])},DIL.extendStaticPropertiesAndMethods({version:"9.4",jsonVersion:1,constants:{TIME_TO_DEFAULT_REQUEST:500},variables:{scriptNodeList:document.getElementsByTagName("script")},windowLoaded:!1,dils:{},isAddedPostWindowLoad:function(){var e=arguments[0];this.windowLoaded="function"==typeof e?!!e():"boolean"!=typeof e||e},create:function(e){try{return new DIL(e)}catch(e){throw new Error("Error in attempt to create DIL instance with DIL.create(): "+e.message)}},registerDil:function(e,t,n){var s=t+"$"+n;s in this.dils||(this.dils[s]=e)},getDil:function(e,t){var n;return"string"!=typeof e&&(e=""),(n=e+"$"+(t=t||0))in this.dils?this.dils[n]:new Error("The DIL instance with partner = "+e+" and containerNSID = "+t+" was not found")},dexGetQSVars:function(e,t,n){var s=this.getDil(t,n);return s instanceof this?s.getStuffedVariable(e):""}}),DIL.errorModule=(r=DIL.create({partner:"error",containerNSID:0,ignoreHardDependencyOnVisitorAPI:!0}),a=!(o={harvestererror:14138,destpuberror:14139,dpmerror:14140,generalerror:14137,error:14137,noerrortypedefined:15021,evalerror:15016,rangeerror:15017,referenceerror:15018,typeerror:15019,urierror:15020}),{activate:function(){a=!0},handleError:function(e){if(!a)return"DIL error module has not been activated";e!==Object(e)&&(e={});var t=e.name?(e.name+"").toLowerCase():"",n=t in o?o[t]:o.noerrortypedefined,s=[],i={name:t,filename:e.filename?e.filename+"":"",partner:e.partner?e.partner+"":"no_partner",site:e.site?e.site+"":document.location.href,message:e.message?e.message+"":""};return s.push(n),r.api.pixels(s).logs(i).useImageRequest().submit(),"DIL error report sent"},pixelMap:o}),DIL.tools={},DIL.modules={helpers:{}})}();

/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============

AppMeasurement for JavaScript version: 2.22.0
Copyright 1996-2016 Adobe, Inc. All Rights Reserved
More info available at http://www.adobe.com/marketing-cloud.html
*/
function AppMeasurement(r){var a=this;a.version="2.22.0";var h=window;h.s_c_in||(h.s_c_il=[],h.s_c_in=0);a._il=h.s_c_il;a._in=h.s_c_in;a._il[a._in]=a;h.s_c_in++;a._c="s_c";var q=h.AppMeasurement.ic;q||(q=null);var p=h,m,s;try{for(m=p.parent,s=p.location;m&&m.location&&s&&""+m.location!==""+s&&p.location&&""+m.location!==""+p.location&&m.location.host===s.host;)p=m,m=p.parent}catch(u){}a.C=function(a){try{console.log(a)}catch(b){}};a.Ra=function(a){return""+parseInt(a)==""+a};a.replace=function(a,
b,d){return!a||0>a.indexOf(b)?a:a.split(b).join(d)};a.escape=function(c){var b,d;if(!c)return c;c=encodeURIComponent(c);for(b=0;7>b;b++)d="+~!*()'".substring(b,b+1),0<=c.indexOf(d)&&(c=a.replace(c,d,"%"+d.charCodeAt(0).toString(16).toUpperCase()));return c};a.unescape=function(c){if(!c)return c;c=0<=c.indexOf("+")?a.replace(c,"+"," "):c;try{return decodeURIComponent(c)}catch(b){}return unescape(c)};a.Nb=function(){var c=h.location.hostname,b=a.fpCookieDomainPeriods,d;b||(b=a.cookieDomainPeriods);
if(c&&!a.Ka&&!/^[0-9.]+$/.test(c)&&(b=b?parseInt(b):2,b=2<b?b:2,d=c.lastIndexOf("."),0<=d)){for(;0<=d&&1<b;)d=c.lastIndexOf(".",d-1),b--;a.Ka=0<d?c.substring(d):c}return a.Ka};a.c_r=a.cookieRead=function(c){c=a.escape(c);var b=" "+a.d.cookie,d=b.indexOf(" "+c+"="),f=0>d?d:b.indexOf(";",d);c=0>d?"":a.unescape(b.substring(d+2+c.length,0>f?b.length:f));return"[[B]]"!=c?c:""};a.c_w=a.cookieWrite=function(c,b,d){var f=a.Nb(),e=a.cookieLifetime,g;b=""+b;e=e?(""+e).toUpperCase():"";d&&"SESSION"!=e&&"NONE"!=
e&&((g=""!=b?parseInt(e?e:0):-60)?(d=new Date,d.setTime(d.getTime()+1E3*g)):1===d&&(d=new Date,g=d.getYear(),d.setYear(g+2+(1900>g?1900:0))));return c&&"NONE"!=e?(a.d.cookie=a.escape(c)+"="+a.escape(""!=b?b:"[[B]]")+"; path=/;"+(d&&"SESSION"!=e?" expires="+d.toUTCString()+";":"")+(f?" domain="+f+";":"")+(a.writeSecureCookies?" secure;":""),a.cookieRead(c)==b):0};a.Kb=function(){var c=a.Util.getIeVersion();"number"===typeof c&&10>c&&(a.unsupportedBrowser=!0,a.xb(a,function(){}))};a.ya=function(){var a=
navigator.userAgent;return"Microsoft Internet Explorer"===navigator.appName||0<=a.indexOf("MSIE ")||0<=a.indexOf("Trident/")&&0<=a.indexOf("Windows NT 6")?!0:!1};a.xb=function(a,b){for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&"function"===typeof a[d]&&(a[d]=b)};a.K=[];a.fa=function(c,b,d){if(a.La)return 0;a.maxDelay||(a.maxDelay=250);var f=0,e=(new Date).getTime()+a.maxDelay,g=a.d.visibilityState,k=["webkitvisibilitychange","visibilitychange"];g||(g=a.d.webkitVisibilityState);if(g&&"prerender"==
g){if(!a.ga)for(a.ga=1,d=0;d<k.length;d++)a.d.addEventListener(k[d],function(){var c=a.d.visibilityState;c||(c=a.d.webkitVisibilityState);"visible"==c&&(a.ga=0,a.delayReady())});f=1;e=0}else d||a.u("_d")&&(f=1);f&&(a.K.push({m:c,a:b,t:e}),a.ga||setTimeout(a.delayReady,a.maxDelay));return f};a.delayReady=function(){var c=(new Date).getTime(),b=0,d;for(a.u("_d")?b=1:a.Aa();0<a.K.length;){d=a.K.shift();if(b&&!d.t&&d.t>c){a.K.unshift(d);setTimeout(a.delayReady,parseInt(a.maxDelay/2));break}a.La=1;a[d.m].apply(a,
d.a);a.La=0}};a.setAccount=a.sa=function(c){var b,d;if(!a.fa("setAccount",arguments))if(a.account=c,a.allAccounts)for(b=a.allAccounts.concat(c.split(",")),a.allAccounts=[],b.sort(),d=0;d<b.length;d++)0!=d&&b[d-1]==b[d]||a.allAccounts.push(b[d]);else a.allAccounts=c.split(",")};a.foreachVar=function(c,b){var d,f,e,g,k="";e=f="";if(a.lightProfileID)d=a.O,(k=a.lightTrackVars)&&(k=","+k+","+a.la.join(",")+",");else{d=a.g;if(a.pe||a.linkType)k=a.linkTrackVars,f=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,
1).toUpperCase()+a.pe.substring(1),a[e]&&(k=a[e].ec,f=a[e].cc));k&&(k=","+k+","+a.F.join(",")+",");f&&k&&(k+=",events,")}b&&(b=","+b+",");for(f=0;f<d.length;f++)e=d[f],(g=a[e])&&(!k||0<=k.indexOf(","+e+","))&&(!b||0<=b.indexOf(","+e+","))&&c(e,g)};a.o=function(c,b,d,f,e){var g="",k,l,h,n,m=0;"contextData"==c&&(c="c");if(b){for(k in b)if(!(Object.prototype[k]||e&&k.substring(0,e.length)!=e)&&b[k]&&(!d||0<=d.indexOf(","+(f?f+".":"")+k+","))){h=!1;if(m)for(l=0;l<m.length;l++)if(k.substring(0,m[l].length)==
m[l]){h=!0;break}if(!h&&(""==g&&(g+="&"+c+"."),l=b[k],e&&(k=k.substring(e.length)),0<k.length))if(h=k.indexOf("."),0<h)l=k.substring(0,h),h=(e?e:"")+l+".",m||(m=[]),m.push(h),g+=a.o(l,b,d,f,h);else if("boolean"==typeof l&&(l=l?"true":"false"),l){if("retrieveLightData"==f&&0>e.indexOf(".contextData."))switch(h=k.substring(0,4),n=k.substring(4),k){case "transactionID":k="xact";break;case "channel":k="ch";break;case "campaign":k="v0";break;default:a.Ra(n)&&("prop"==h?k="c"+n:"eVar"==h?k="v"+n:"list"==
h?k="l"+n:"hier"==h&&(k="h"+n,l=l.substring(0,255)))}g+="&"+a.escape(k)+"="+a.escape(l)}}""!=g&&(g+="&."+c)}return g};a.usePostbacks=0;a.Qb=function(){var c="",b,d,f,e,g,k,l,h,n="",m="",p=e="",r=a.T();if(a.lightProfileID)b=a.O,(n=a.lightTrackVars)&&(n=","+n+","+a.la.join(",")+",");else{b=a.g;if(a.pe||a.linkType)n=a.linkTrackVars,m=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(n=a[e].ec,m=a[e].cc));n&&(n=","+n+","+a.F.join(",")+",");m&&(m=","+m+",",n&&(n+=",events,"));
a.events2&&(p+=(""!=p?",":"")+a.events2)}if(r&&r.getCustomerIDs){e=q;if(g=r.getCustomerIDs())for(d in g)Object.prototype[d]||(f=g[d],"object"==typeof f&&(e||(e={}),f.id&&(e[d+".id"]=f.id),f.authState&&(e[d+".as"]=f.authState)));e&&(c+=a.o("cid",e))}a.AudienceManagement&&a.AudienceManagement.isReady()&&(c+=a.o("d",a.AudienceManagement.getEventCallConfigParams()));for(d=0;d<b.length;d++){e=b[d];g=a[e];f=e.substring(0,4);k=e.substring(4);g||("events"==e&&p?(g=p,p=""):"marketingCloudOrgID"==e&&r&&a.V("ECID")&&
(g=r.marketingCloudOrgID));if(g&&(!n||0<=n.indexOf(","+e+","))){switch(e){case "customerPerspective":e="cp";break;case "marketingCloudOrgID":e="mcorgid";break;case "supplementalDataID":e="sdid";break;case "timestamp":e="ts";break;case "dynamicVariablePrefix":e="D";break;case "visitorID":e="vid";break;case "marketingCloudVisitorID":e="mid";break;case "analyticsVisitorID":e="aid";break;case "audienceManagerLocationHint":e="aamlh";break;case "audienceManagerBlob":e="aamb";break;case "authState":e="as";
break;case "pageURL":e="g";255<g.length&&(a.pageURLRest=g.substring(255),g=g.substring(0,255));break;case "pageURLRest":e="-g";break;case "referrer":e="r";break;case "vmk":case "visitorMigrationKey":e="vmt";break;case "visitorMigrationServer":e="vmf";a.ssl&&a.visitorMigrationServerSecure&&(g="");break;case "visitorMigrationServerSecure":e="vmf";!a.ssl&&a.visitorMigrationServer&&(g="");break;case "charSet":e="ce";break;case "visitorNamespace":e="ns";break;case "cookieDomainPeriods":e="cdp";break;case "cookieLifetime":e=
"cl";break;case "variableProvider":e="vvp";break;case "currencyCode":e="cc";break;case "channel":e="ch";break;case "transactionID":e="xact";break;case "campaign":e="v0";break;case "latitude":e="lat";break;case "longitude":e="lon";break;case "resolution":e="s";break;case "colorDepth":e="c";break;case "javascriptVersion":e="j";break;case "javaEnabled":e="v";break;case "cookiesEnabled":e="k";break;case "browserWidth":e="bw";break;case "browserHeight":e="bh";break;case "connectionType":e="ct";break;case "homepage":e=
"hp";break;case "events":p&&(g+=(""!=g?",":"")+p);if(m)for(k=g.split(","),g="",f=0;f<k.length;f++)l=k[f],h=l.indexOf("="),0<=h&&(l=l.substring(0,h)),h=l.indexOf(":"),0<=h&&(l=l.substring(0,h)),0<=m.indexOf(","+l+",")&&(g+=(g?",":"")+k[f]);break;case "events2":g="";break;case "contextData":c+=a.o("c",a[e],n,e);g="";break;case "lightProfileID":e="mtp";break;case "lightStoreForSeconds":e="mtss";a.lightProfileID||(g="");break;case "lightIncrementBy":e="mti";a.lightProfileID||(g="");break;case "retrieveLightProfiles":e=
"mtsr";break;case "deleteLightProfiles":e="mtsd";break;case "retrieveLightData":a.retrieveLightProfiles&&(c+=a.o("mts",a[e],n,e));g="";break;default:a.Ra(k)&&("prop"==f?e="c"+k:"eVar"==f?e="v"+k:"list"==f?e="l"+k:"hier"==f&&(e="h"+k,g=g.substring(0,255)))}g&&(c+="&"+e+"="+("pev"!=e.substring(0,3)?a.escape(g):g))}"pev3"==e&&a.e&&(c+=a.e)}a.ka&&(c+="&lrt="+a.ka,a.ka=null);return c};a.B=function(a){var b=a.tagName;if("undefined"!=""+a.lc||"undefined"!=""+a.Zb&&"HTML"!=(""+a.Zb).toUpperCase())return"";
b=b&&b.toUpperCase?b.toUpperCase():"";"SHAPE"==b&&(b="");b&&(("INPUT"==b||"BUTTON"==b)&&a.type&&a.type.toUpperCase?b=a.type.toUpperCase():!b&&a.href&&(b="A"));return b};a.Na=function(a){var b=h.location,d=a.href?a.href:"",f,e,g;f=d.indexOf(":");e=d.indexOf("?");g=d.indexOf("/");d&&(0>f||0<=e&&f>e||0<=g&&f>g)&&(e=a.protocol&&1<a.protocol.length?a.protocol:b.protocol?b.protocol:"",f=b.pathname.lastIndexOf("/"),d=(e?e+"//":"")+(a.host?a.host:b.host?b.host:"")+("/"!=d.substring(0,1)?b.pathname.substring(0,
0>f?0:f)+"/":"")+d);return d};a.L=function(c){var b=a.B(c),d,f,e="",g=0;return b&&(d=c.protocol,f=c.onclick,!c.href||"A"!=b&&"AREA"!=b||f&&d&&!(0>d.toLowerCase().indexOf("javascript"))?f?(e=a.replace(a.replace(a.replace(a.replace(""+f,"\r",""),"\n",""),"\t","")," ",""),g=2):"INPUT"==b||"SUBMIT"==b?(c.value?e=c.value:c.innerText?e=c.innerText:c.textContent&&(e=c.textContent),g=3):"IMAGE"==b&&c.src&&(e=c.src):e=a.Na(c),e)?{id:e.substring(0,100),type:g}:0};a.jc=function(c){for(var b=a.B(c),d=a.L(c);c&&
!d&&"BODY"!=b;)if(c=c.parentElement?c.parentElement:c.parentNode)b=a.B(c),d=a.L(c);d&&"BODY"!=b||(c=0);c&&(b=c.onclick?""+c.onclick:"",0<=b.indexOf(".tl(")||0<=b.indexOf(".trackLink("))&&(c=0);return c};a.Yb=function(){var c,b,d=a.linkObject,f=a.linkType,e=a.linkURL,g,k;a.ma=1;d||(a.ma=0,d=a.clickObject);if(d){c=a.B(d);for(b=a.L(d);d&&!b&&"BODY"!=c;)if(d=d.parentElement?d.parentElement:d.parentNode)c=a.B(d),b=a.L(d);b&&"BODY"!=c||(d=0);if(d&&!a.linkObject){var l=d.onclick?""+d.onclick:"";if(0<=l.indexOf(".tl(")||
0<=l.indexOf(".trackLink("))d=0}}else a.ma=1;!e&&d&&(e=a.Na(d));e&&!a.linkLeaveQueryString&&(g=e.indexOf("?"),0<=g&&(e=e.substring(0,g)));if(!f&&e){var m=0,n=0,p;if(a.trackDownloadLinks&&a.linkDownloadFileTypes)for(l=e.toLowerCase(),g=l.indexOf("?"),k=l.indexOf("#"),0<=g?0<=k&&k<g&&(g=k):g=k,0<=g&&(l=l.substring(0,g)),g=a.linkDownloadFileTypes.toLowerCase().split(","),k=0;k<g.length;k++)(p=g[k])&&l.substring(l.length-(p.length+1))=="."+p&&(f="d");if(a.trackExternalLinks&&!f&&(l=e.toLowerCase(),a.Qa(l)&&
(a.linkInternalFilters||(a.linkInternalFilters=h.location.hostname),g=0,a.linkExternalFilters?(g=a.linkExternalFilters.toLowerCase().split(","),m=1):a.linkInternalFilters&&(g=a.linkInternalFilters.toLowerCase().split(",")),g))){for(k=0;k<g.length;k++)p=g[k],0<=l.indexOf(p)&&(n=1);n?m&&(f="e"):m||(f="e")}}a.linkObject=d;a.linkURL=e;a.linkType=f;if(a.trackClickMap||a.trackInlineStats)a.e="",d&&(f=a.pageName,e=1,d=d.sourceIndex,f||(f=a.pageURL,e=0),h.s_objectID&&(b.id=h.s_objectID,d=b.type=1),f&&b&&
b.id&&c&&(a.e="&pid="+a.escape(f.substring(0,255))+(e?"&pidt="+e:"")+"&oid="+a.escape(b.id.substring(0,100))+(b.type?"&oidt="+b.type:"")+"&ot="+c+(d?"&oi="+d:"")))};a.Rb=function(){var c=a.ma,b=a.linkType,d=a.linkURL,f=a.linkName;b&&(d||f)&&(b=b.toLowerCase(),"d"!=b&&"e"!=b&&(b="o"),a.pe="lnk_"+b,a.pev1=d?a.escape(d):"",a.pev2=f?a.escape(f):"",c=1);a.abort&&(c=0);if(a.trackClickMap||a.trackInlineStats||a.Ub()){var b={},d=0,e=a.rb(),g=e?e.split("&"):0,k,l,h,e=0;if(g)for(k=0;k<g.length;k++)l=g[k].split("="),
f=a.unescape(l[0]).split(","),l=a.unescape(l[1]),b[l]=f;f=a.account.split(",");k={};for(h in a.contextData)h&&!Object.prototype[h]&&"a.activitymap."==h.substring(0,14)&&(k[h]=a.contextData[h],a.contextData[h]="");a.e=a.o("c",k)+(a.e?a.e:"");if(c||a.e){c&&!a.e&&(e=1);for(l in b)if(!Object.prototype[l])for(h=0;h<f.length;h++)for(e&&(g=b[l].join(","),g==a.account&&(a.e+=("&"!=l.charAt(0)?"&":"")+l,b[l]=[],d=1)),k=0;k<b[l].length;k++)g=b[l][k],g==f[h]&&(e&&(a.e+="&u="+a.escape(g)+("&"!=l.charAt(0)?"&":
"")+l+"&u=0"),b[l].splice(k,1),d=1);c||(d=1);if(d){e="";k=2;!c&&a.e&&(e=a.escape(f.join(","))+"="+a.escape(a.e),k=1);for(l in b)!Object.prototype[l]&&0<k&&0<b[l].length&&(e+=(e?"&":"")+a.escape(b[l].join(","))+"="+a.escape(l),k--);a.zb(e)}}}return c};a.rb=function(){if(a.useLinkTrackSessionStorage){if(a.Ea())return h.sessionStorage.getItem(a.P)}else return a.cookieRead(a.P)};a.Ea=function(){return h.sessionStorage?!0:!1};a.zb=function(c){a.useLinkTrackSessionStorage?a.Ea()&&h.sessionStorage.setItem(a.P,
c):a.cookieWrite(a.P,c)};a.Sb=function(){if(!a.bc){var c=new Date,b=p.location,d,f,e=f=d="",g="",k="",l="1.2",h=a.cookieWrite("s_cc","true",0)?"Y":"N",m="",q="";if(c.setUTCDate&&(l="1.3",(0).toPrecision&&(l="1.5",c=[],c.forEach))){l="1.6";f=0;d={};try{f=new Iterator(d),f.next&&(l="1.7",c.reduce&&(l="1.8",l.trim&&(l="1.8.1",Date.parse&&(l="1.8.2",Object.create&&(l="1.8.5")))))}catch(r){}}d=screen.width+"x"+screen.height;e=navigator.javaEnabled()?"Y":"N";f=screen.pixelDepth?screen.pixelDepth:screen.colorDepth;
g=a.w.innerWidth?a.w.innerWidth:a.d.documentElement.offsetWidth;k=a.w.innerHeight?a.w.innerHeight:a.d.documentElement.offsetHeight;try{a.b.addBehavior("#default#homePage"),m=a.b.kc(b)?"Y":"N"}catch(s){}try{a.b.addBehavior("#default#clientCaps"),q=a.b.connectionType}catch(t){}a.resolution=d;a.colorDepth=f;a.javascriptVersion=l;a.javaEnabled=e;a.cookiesEnabled=h;a.browserWidth=g;a.browserHeight=k;a.connectionType=q;a.homepage=m;a.bc=1}};a.Q={};a.loadModule=function(c,b){var d=a.Q[c];if(!d){d=h["AppMeasurement_Module_"+
c]?new h["AppMeasurement_Module_"+c](a):{};a.Q[c]=a[c]=d;d.kb=function(){return d.ub};d.Ab=function(b){if(d.ub=b)a[c+"_onLoad"]=b,a.fa(c+"_onLoad",[a,d],1)||b(a,d)};try{Object.defineProperty?Object.defineProperty(d,"onLoad",{get:d.kb,set:d.Ab}):d._olc=1}catch(f){d._olc=1}}b&&(a[c+"_onLoad"]=b,a.fa(c+"_onLoad",[a,d],1)||b(a,d))};a.u=function(c){var b,d;for(b in a.Q)if(!Object.prototype[b]&&(d=a.Q[b])&&(d._olc&&d.onLoad&&(d._olc=0,d.onLoad(a,d)),d[c]&&d[c]()))return 1;return 0};a.Ub=function(){return a.ActivityMap&&
a.ActivityMap._c?!0:!1};a.Vb=function(){var c=Math.floor(1E13*Math.random()),b=a.visitorSampling,d=a.visitorSamplingGroup,d="s_vsn_"+(a.visitorNamespace?a.visitorNamespace:a.account)+(d?"_"+d:""),f=a.cookieRead(d);if(b){b*=100;f&&(f=parseInt(f));if(!f){if(!a.cookieWrite(d,c))return 0;f=c}if(f%1E4>b)return 0}return 1};a.S=function(c,b){var d,f,e,g,k,h,m;m={};for(d=0;2>d;d++)for(f=0<d?a.Ga:a.g,e=0;e<f.length;e++)if(g=f[e],(k=c[g])||c["!"+g]){if(k&&!b&&("contextData"==g||"retrieveLightData"==g)&&a[g])for(h in a[g])k[h]||
(k[h]=a[g][h]);a[g]||(m["!"+g]=1);m[g]=a[g];a[g]=k}return m};a.hc=function(c){var b,d,f,e;for(b=0;2>b;b++)for(d=0<b?a.Ga:a.g,f=0;f<d.length;f++)e=d[f],c[e]=a[e],c[e]||"prop"!==e.substring(0,4)&&"eVar"!==e.substring(0,4)&&"hier"!==e.substring(0,4)&&"list"!==e.substring(0,4)&&"channel"!==e&&"events"!==e&&"eventList"!==e&&"products"!==e&&"productList"!==e&&"purchaseID"!==e&&"transactionID"!==e&&"state"!==e&&"zip"!==e&&"campaign"!==e&&"events2"!==e&&"latitude"!==e&&"longitude"!==e&&"ms_a"!==e&&"contextData"!==
e&&"supplementalDataID"!==e&&"tnt"!==e&&"timestamp"!==e&&"abort"!==e&&"useBeacon"!==e&&"linkObject"!==e&&"clickObject"!==e&&"linkType"!==e&&"linkName"!==e&&"linkURL"!==e&&"bodyClickTarget"!==e&&"bodyClickFunction"!==e||(c["!"+e]=1)};a.Mb=function(a){var b,d,f,e,g,k=0,h,m="",n="";if(a&&255<a.length&&(b=""+a,d=b.indexOf("?"),0<d&&(h=b.substring(d+1),b=b.substring(0,d),e=b.toLowerCase(),f=0,"http://"==e.substring(0,7)?f+=7:"https://"==e.substring(0,8)&&(f+=8),d=e.indexOf("/",f),0<d&&(e=e.substring(f,
d),g=b.substring(d),b=b.substring(0,d),0<=e.indexOf("google")?k=",q,ie,start,search_key,word,kw,cd,":0<=e.indexOf("yahoo.co")?k=",p,ei,":0<=e.indexOf("baidu.")&&(k=",wd,word,"),k&&h)))){if((a=h.split("&"))&&1<a.length){for(f=0;f<a.length;f++)e=a[f],d=e.indexOf("="),0<d&&0<=k.indexOf(","+e.substring(0,d)+",")?m+=(m?"&":"")+e:n+=(n?"&":"")+e;m&&n?h=m+"&"+n:n=""}d=253-(h.length-n.length)-b.length;a=b+(0<d?g.substring(0,d):"")+"?"+h}return a};a.eb=function(c){var b=a.d.visibilityState,d=["webkitvisibilitychange",
"visibilitychange"];b||(b=a.d.webkitVisibilityState);if(b&&"prerender"==b){if(c)for(b=0;b<d.length;b++)a.d.addEventListener(d[b],function(){var b=a.d.visibilityState;b||(b=a.d.webkitVisibilityState);"visible"==b&&c()});return!1}return!0};a.ca=!1;a.H=!1;a.Cb=function(){a.H=!0;a.p()};a.I=!1;a.Db=function(c){a.marketingCloudVisitorID=c.MCMID;a.visitorOptedOut=c.MCOPTOUT;a.analyticsVisitorID=c.MCAID;a.audienceManagerLocationHint=c.MCAAMLH;a.audienceManagerBlob=c.MCAAMB;a.I=!1;a.p()};a.cb=function(c){a.maxDelay||
(a.maxDelay=250);return a.u("_d")?(c&&setTimeout(function(){c()},a.maxDelay),!1):!0};a.aa=!1;a.G=!1;a.Aa=function(){a.G=!0;a.p()};a.isReadyToTrack=function(){var c=!0;if(!a.ob()||!a.mb())return!1;a.qb()||(c=!1);a.tb()||(c=!1);return c};a.ob=function(){a.ca||a.H||(a.eb(a.Cb)?a.H=!0:a.ca=!0);return a.ca&&!a.H?!1:!0};a.mb=function(){var c=a.wa();if(c)if(a.ta||a.ba)if(a.ta){if(!c.isApproved(c.Categories.ANALYTICS))return!1}else return!1;else return c.fetchPermissions(a.vb,!0),a.ba=!0,!1;return!0};a.V=
function(c){var b=a.wa();return b&&!b.isApproved(b.Categories[c])?!1:!0};a.wa=function(){return h.adobe&&h.adobe.optIn?h.adobe.optIn:null};a.Y=!0;a.qb=function(){var c=a.T();if(!c||!c.getVisitorValues)return!0;a.Y&&(a.Y=!1,a.I||(a.I=!0,c.getVisitorValues(a.Db)));return!a.I};a.T=function(){var c=a.visitor;c&&!c.isAllowed()&&(c=null);return c};a.tb=function(){a.aa||a.G||(a.cb(a.Aa)?a.G=!0:a.aa=!0);return a.aa&&!a.G?!1:!0};a.ba=!1;a.vb=function(){a.ba=!1;a.ta=!0};a.j=q;a.q=0;a.callbackWhenReadyToTrack=
function(c,b,d){var f;f={};f.Hb=c;f.Gb=b;f.Eb=d;a.j==q&&(a.j=[]);a.j.push(f);0==a.q&&(a.q=setInterval(a.p,100))};a.p=function(){var c;if(a.isReadyToTrack()&&(a.Bb(),a.j!=q))for(;0<a.j.length;)c=a.j.shift(),c.Gb.apply(c.Hb,c.Eb)};a.Bb=function(){a.q&&(clearInterval(a.q),a.q=0)};a.ua=function(c){var b,d={};a.hc(d);if(c!=q)for(b in c)d[b]=c[b];a.callbackWhenReadyToTrack(a,a.Fa,[d]);a.Da()};a.Ob=function(){var c=a.cookieRead("s_fid"),b="",d="",f;f=8;var e=4;if(!c||0>c.indexOf("-")){for(c=0;16>c;c++)f=
Math.floor(Math.random()*f),b+="0123456789ABCDEF".substring(f,f+1),f=Math.floor(Math.random()*e),d+="0123456789ABCDEF".substring(f,f+1),f=e=16;c=b+"-"+d}a.cookieWrite("s_fid",c,1)||(c=0);return c};a.Fa=function(c){var b=new Date,d="s"+Math.floor(b.getTime()/108E5)%10+Math.floor(1E13*Math.random()),f=b.getYear(),f="t="+a.escape(b.getDate()+"/"+b.getMonth()+"/"+(1900>f?f+1900:f)+" "+b.getHours()+":"+b.getMinutes()+":"+b.getSeconds()+" "+b.getDay()+" "+b.getTimezoneOffset()),e=a.T(),g;c&&(g=a.S(c,1));
a.Vb()&&!a.visitorOptedOut&&(a.xa()||(a.fid=a.Ob()),a.Yb(),a.usePlugins&&a.doPlugins&&a.doPlugins(a),a.account&&(a.abort||(a.trackOffline&&!a.timestamp&&(a.timestamp=Math.floor(b.getTime()/1E3)),c=h.location,a.pageURL||(a.pageURL=c.href?c.href:c),a.referrer||a.$a||(c=a.Util.getQueryParam("adobe_mc_ref",null,null,!0),a.referrer=c||void 0===c?void 0===c?"":c:p.document.referrer),a.$a=1,!a.referrer&&a.Z&&(a.referrer=a.Z),a.Z=0,a.referrer=a.Mb(a.referrer),a.u("_g")),a.Rb()&&!a.abort&&(e&&a.V("TARGET")&&
!a.supplementalDataID&&e.getSupplementalDataID&&(a.supplementalDataID=e.getSupplementalDataID("AppMeasurement:"+a._in,a.expectSupplementalData?!1:!0)),a.V("AAM")||(a.contextData["cm.ssf"]=1),a.Sb(),a.wb(),f+=a.Qb(),a.sb(d,f),a.u("_t"),a.referrer="")));a.referrer&&(a.Z=a.referrer);a.Da();g&&a.S(g,1)};a.t=a.track=function(c,b){b&&a.S(b);a.Y=!0;a.isReadyToTrack()?null!=a.j&&0<a.j.length?(a.ua(c),a.p()):a.Fa(c):a.ua(c)};a.wb=function(){a.writeSecureCookies&&!a.ssl&&a.ab()};a.ab=function(){a.contextData.excCodes=
a.contextData.excCodes?a.contextData.excCodes:[];a.contextData.excCodes.push(1)};a.Da=function(){a.abort=a.supplementalDataID=a.timestamp=a.pageURLRest=a.linkObject=a.clickObject=a.linkURL=a.linkName=a.linkType=h.s_objectID=a.pe=a.pev1=a.pev2=a.pev3=a.e=a.lightProfileID=a.useBeacon=a.referrer=0;a.contextData&&a.contextData.excCodes&&(a.contextData.excCodes=0)};a.Ca=[];a.registerPreTrackCallback=function(c){for(var b=[],d=1;d<arguments.length;d++)b.push(arguments[d]);"function"==typeof c?a.Ca.push([c,
b]):a.debugTracking&&a.C("DEBUG: Non function type passed to registerPreTrackCallback")};a.hb=function(c){a.va(a.Ca,c)};a.Ba=[];a.registerPostTrackCallback=function(c){for(var b=[],d=1;d<arguments.length;d++)b.push(arguments[d]);"function"==typeof c?a.Ba.push([c,b]):a.debugTracking&&a.C("DEBUG: Non function type passed to registerPostTrackCallback")};a.gb=function(c){a.va(a.Ba,c)};a.va=function(c,b){if("object"==typeof c)for(var d=0;d<c.length;d++){var f=c[d][0],e=c[d][1].slice();e.unshift(b);if("function"==
typeof f)try{f.apply(null,e)}catch(g){a.debugTracking&&a.C(g.message)}}};a.tl=a.trackLink=function(c,b,d,f,e){a.linkObject=c;a.linkType=b;a.linkName=d;e&&(a.bodyClickTarget=c,a.bodyClickFunction=e);return a.track(f)};a.trackLight=function(c,b,d,f){a.lightProfileID=c;a.lightStoreForSeconds=b;a.lightIncrementBy=d;return a.track(f)};a.clearVars=function(){var c,b;for(c=0;c<a.g.length;c++)if(b=a.g[c],"prop"==b.substring(0,4)||"eVar"==b.substring(0,4)||"hier"==b.substring(0,4)||"list"==b.substring(0,4)||
"channel"==b||"events"==b||"eventList"==b||"products"==b||"productList"==b||"purchaseID"==b||"transactionID"==b||"state"==b||"zip"==b||"campaign"==b)a[b]=void 0};a.tagContainerMarker="";a.sb=function(c,b){var d=a.ib()+"/"+c+"?AQB=1&ndh=1&pf=1&"+(a.za()?"callback=s_c_il["+a._in+"].doPostbacks&et=1&":"")+b+"&AQE=1";a.hb(d);a.fb(d);a.U()};a.ib=function(){var c=a.jb();return"http"+(a.ssl?"s":"")+"://"+c+"/b/ss/"+a.account+"/"+(a.mobile?"5.":"")+(a.za()?"10":"1")+"/JS-"+a.version+(a.ac?"T":"")+(a.tagContainerMarker?
"-"+a.tagContainerMarker:"")};a.za=function(){return a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks};a.jb=function(){var c=a.dc,b=a.trackingServer;b?a.trackingServerSecure&&a.ssl&&(b=a.trackingServerSecure):(c=c?(""+c).toLowerCase():"d1","d1"==c?c="112":"d2"==c&&(c="122"),b=a.lb()+"."+c+".2o7.net");return b};a.lb=function(){var c=a.visitorNamespace;c||(c=a.account.split(",")[0],c=c.replace(/[^0-9a-z]/gi,""));return c};a.Za=/{(%?)(.*?)(%?)}/;a.gc=RegExp(a.Za.source,"g");a.Lb=
function(c){if("object"==typeof c.dests)for(var b=0;b<c.dests.length;++b){var d=c.dests[b];if("string"==typeof d.c&&"aa."==d.id.substr(0,3))for(var f=d.c.match(a.gc),e=0;e<f.length;++e){var g=f[e],k=g.match(a.Za),h="";"%"==k[1]&&"timezone_offset"==k[2]?h=(new Date).getTimezoneOffset():"%"==k[1]&&"timestampz"==k[2]&&(h=a.Pb());d.c=d.c.replace(g,a.escape(h))}}};a.Pb=function(){var c=new Date,b=new Date(6E4*Math.abs(c.getTimezoneOffset()));return a.k(4,c.getFullYear())+"-"+a.k(2,c.getMonth()+1)+"-"+
a.k(2,c.getDate())+"T"+a.k(2,c.getHours())+":"+a.k(2,c.getMinutes())+":"+a.k(2,c.getSeconds())+(0<c.getTimezoneOffset()?"-":"+")+a.k(2,b.getUTCHours())+":"+a.k(2,b.getUTCMinutes())};a.k=function(a,b){return(Array(a+1).join(0)+b).slice(-a)};a.qa={};a.doPostbacks=function(c){mistats.failover && mistats.failover.success && (mistats.failover.success(c));if("object"==typeof c)if(a.Lb(c),"object"==typeof a.AudienceManagement&&"function"==typeof a.AudienceManagement.isReady&&a.AudienceManagement.isReady()&&"function"==typeof a.AudienceManagement.passData)a.AudienceManagement.passData(c);
else if("object"==typeof c&&"object"==typeof c.dests)for(var b=0;b<c.dests.length;++b){var d=c.dests[b];"object"==typeof d&&"string"==typeof d.c&&"string"==typeof d.id&&"aa."==d.id.substr(0,3)&&(a.qa[d.id]=new Image,a.qa[d.id].alt="",a.qa[d.id].src=d.c)}};a.fb=function(c){a.i||a.Tb();a.i.push(c);a.ja=a.A();a.Ya()};a.Tb=function(){a.i=a.Wb();a.i||(a.i=[])};a.Wb=function(){var c,b;if(a.pa()){try{(b=h.localStorage.getItem(a.na()))&&(c=h.JSON.parse(b))}catch(d){}return c}};a.pa=function(){var c=!0;a.trackOffline&&
a.offlineFilename&&h.localStorage&&h.JSON||(c=!1);return c};a.Oa=function(){var c=0;a.i&&(c=a.i.length);a.l&&c++;return c};a.U=function(){if(a.l&&(a.v&&a.v.complete&&a.v.D&&a.v.R(),a.l))return;a.Pa=q;if(a.oa)a.ja>a.N&&a.Wa(a.i),a.ra(500);else{var c=a.Fb();if(0<c)a.ra(c);else if(c=a.Ma())a.l=1,a.Xb(c),a.$b(c)}};a.ra=function(c){a.Pa||(c||(c=0),a.Pa=setTimeout(a.U,c))};a.Fb=function(){var c;if(!a.trackOffline||0>=a.offlineThrottleDelay)return 0;c=a.A()-a.Ua;return a.offlineThrottleDelay<c?0:a.offlineThrottleDelay-
c};a.Ma=function(){if(0<a.i.length)return a.i.shift()};a.Xb=function(c){if(a.debugTracking){var b="AppMeasurement Debug: "+c;c=c.split("&");var d;for(d=0;d<c.length;d++)b+="\n\t"+a.unescape(c[d]);a.C(b)}};a.xa=function(){return a.marketingCloudVisitorID||a.analyticsVisitorID};a.X=!1;var t;try{t=JSON.parse('{"x":"y"}')}catch(v){t=null}t&&"y"==t.x?(a.X=!0,a.W=function(a){return JSON.parse(a)}):h.$&&h.$.parseJSON?(a.W=function(a){return h.$.parseJSON(a)},a.X=!0):a.W=function(){return null};a.$b=function(c){var b,
d,f;a.nb(c)&&(d=1,b={send:function(c){a.useBeacon=!1;navigator.sendBeacon(c)?b.R():b.ha()}});!b&&a.xa()&&2047<c.length&&(a.bb()&&(d=2,b=new XMLHttpRequest),b&&(a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks)&&(a.X?b.Ha=!0:b=0));!b&&a.fc&&(c=c.substring(0,2047));!b&&a.d.createElement&&(0!=a.usePostbacks||a.AudienceManagement&&a.AudienceManagement.isReady())&&(b=a.d.createElement("SCRIPT"))&&"async"in b&&((f=(f=a.d.getElementsByTagName("HEAD"))&&f[0]?f[0]:a.d.body)?(b.type=
"text/javascript",b.setAttribute("async","async"),d=3):b=0);b||(b=new Image,b.alt="",b.abort||"undefined"===typeof h.InstallTrigger||(b.abort=function(){b.src=q}));b.Va=Date.now();b.Ja=function(){try{b.D&&(clearTimeout(b.D),b.D=0)}catch(a){}};b.onload=b.R=function(){b.Va&&(a.ka=Date.now()-b.Va);a.gb(c);b.Ja();a.Jb();a.da();a.l=0;a.U();if(b.Ha){b.Ha=!1;try{a.doPostbacks(a.W(b.responseText))}catch(d){}}};b.onabort=b.onerror=b.ha=function(){b.Ja();(a.trackOffline||a.oa)&&a.l&&a.i.unshift(a.Ib);a.l=0;
a.ja>a.N&&a.Wa(a.i);a.da();a.ra(500)};b.onreadystatechange=function(){4==b.readyState&&(200==b.status?b.R():b.ha())};a.Ua=a.A();if(1===d)b.send(c);else if(2===d)f=c.indexOf("?"),d=c.substring(0,f),f=c.substring(f+1),f=f.replace(/&callback=[a-zA-Z0-9_.\[\]]+/,""),b.open("POST",d,!0),b.withCredentials=!0,b.send(f);else if(b.src=c,3===d){if(a.Sa)try{f.removeChild(a.Sa)}catch(e){}f.firstChild?f.insertBefore(b,f.firstChild):f.appendChild(b);a.Sa=a.v}b.D=setTimeout(function(){b.D&&(b.complete?b.R():(a.trackOffline&&
b.abort&&b.abort(),b.ha()))},5E3);a.Ib=c;a.v=h["s_i_"+a.replace(a.account,",","_")]=b;if(a.useForcedLinkTracking&&a.J||a.bodyClickFunction)a.forcedLinkTrackingTimeout||(a.forcedLinkTrackingTimeout=250),a.ea=setTimeout(a.da,a.forcedLinkTrackingTimeout)};a.nb=function(c){var b=!1;navigator.sendBeacon&&(a.pb(c)?b=!0:a.useBeacon&&(b=!0));a.yb(c)&&(b=!1);return b};a.pb=function(a){return a&&0<a.indexOf("pe=lnk_e")?!0:!1};a.yb=function(a){return 64E3<=a.length};a.bb=function(){return"undefined"!==typeof XMLHttpRequest&&
"withCredentials"in new XMLHttpRequest?!0:!1};a.Jb=function(){if(a.pa()&&!(a.Ta>a.N))try{h.localStorage.removeItem(a.na()),a.Ta=a.A()}catch(c){}};a.Wa=function(c){if(a.pa()){a.Ya();try{h.localStorage.setItem(a.na(),h.JSON.stringify(c)),a.N=a.A()}catch(b){}}};a.Ya=function(){if(a.trackOffline){if(!a.offlineLimit||0>=a.offlineLimit)a.offlineLimit=10;for(;a.i.length>a.offlineLimit;)a.Ma()}};a.forceOffline=function(){a.oa=!0};a.forceOnline=function(){a.oa=!1};a.na=function(){return a.offlineFilename+
"-"+a.visitorNamespace+a.account};a.A=function(){return(new Date).getTime()};a.Qa=function(a){a=a.toLowerCase();return 0!=a.indexOf("#")&&0!=a.indexOf("about:")&&0!=a.indexOf("opera:")&&0!=a.indexOf("javascript:")?!0:!1};a.setTagContainer=function(c){var b,d,f;a.ac=c;for(b=0;b<a._il.length;b++)if((d=a._il[b])&&"s_l"==d._c&&d.tagContainerName==c){a.S(d);if(d.lmq)for(b=0;b<d.lmq.length;b++)f=d.lmq[b],a.loadModule(f.n);if(d.ml)for(f in d.ml)if(a[f])for(b in c=a[f],f=d.ml[f],f)!Object.prototype[b]&&("function"!=
typeof f[b]||0>(""+f[b]).indexOf("s_c_il"))&&(c[b]=f[b]);if(d.mmq)for(b=0;b<d.mmq.length;b++)f=d.mmq[b],a[f.m]&&(c=a[f.m],c[f.f]&&"function"==typeof c[f.f]&&(f.a?c[f.f].apply(c,f.a):c[f.f].apply(c)));if(d.tq)for(b=0;b<d.tq.length;b++)a.track(d.tq[b]);d.s=a;break}};a.Util={urlEncode:a.escape,urlDecode:a.unescape,cookieRead:a.cookieRead,cookieWrite:a.cookieWrite,getQueryParam:function(c,b,d,f){var e,g="";b||(b=a.pageURL?a.pageURL:h.location);d=d?d:"&";if(!c||!b)return g;b=""+b;e=b.indexOf("?");if(0>
e)return g;b=d+b.substring(e+1)+d;if(!f||!(0<=b.indexOf(d+c+d)||0<=b.indexOf(d+c+"="+d))){e=b.indexOf("#");0<=e&&(b=b.substr(0,e)+d);e=b.indexOf(d+c+"=");if(0>e)return g;b=b.substring(e+d.length+c.length+1);e=b.indexOf(d);0<=e&&(b=b.substring(0,e));0<b.length&&(g=a.unescape(b));return g}},getIeVersion:function(){return document.documentMode?document.documentMode:a.ya()?7:null}};a.F="supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");
a.g=a.F.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));a.la="timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");a.O=a.la.slice(0);a.Ga="account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout writeSecureCookies useLinkTrackSessionStorage trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData useBeacon usePostbacks registerPreTrackCallback registerPostTrackCallback bodyClickTarget bodyClickFunction AudienceManagement".split(" ");
for(m=0;250>=m;m++)76>m&&(a.g.push("prop"+m),a.O.push("prop"+m)),a.g.push("eVar"+m),a.O.push("eVar"+m),6>m&&a.g.push("hier"+m),4>m&&a.g.push("list"+m);m="pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID ms_a".split(" ");a.g=a.g.concat(m);a.F=a.F.concat(m);a.ssl=0<=h.location.protocol.toLowerCase().indexOf("https");a.charSet="UTF-8";a.contextData={};a.writeSecureCookies=
!1;a.offlineThrottleDelay=0;a.offlineFilename="AppMeasurement.offline";a.P="s_sq";a.Ua=0;a.ja=0;a.N=0;a.Ta=0;a.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";a.w=h;a.d=h.document;a.da=function(){a.ea&&(h.clearTimeout(a.ea),a.ea=q);a.bodyClickTarget&&a.J&&a.bodyClickTarget.dispatchEvent(a.J);a.bodyClickFunction&&("function"==typeof a.bodyClickFunction?a.bodyClickFunction():a.bodyClickTarget&&a.bodyClickTarget.href&&(a.d.location=a.bodyClickTarget.href));a.bodyClickTarget=
a.J=a.bodyClickFunction=0};a.Xa=function(){a.b=a.d.body;a.b?(a.r=function(c){var b,d,f,e,g;if(!(a.d&&a.d.getElementById("cppXYctnr")||c&&c["s_fe_"+a._in])){if(a.Ia)if(a.useForcedLinkTracking)a.b.removeEventListener("click",a.r,!1);else{a.b.removeEventListener("click",a.r,!0);a.Ia=a.useForcedLinkTracking=0;return}else a.useForcedLinkTracking=0;a.clickObject=c.srcElement?c.srcElement:c.target;try{if(!a.clickObject||a.M&&a.M==a.clickObject||!(a.clickObject.tagName||a.clickObject.parentElement||a.clickObject.parentNode))a.clickObject=
0;else{var k=a.M=a.clickObject;a.ia&&(clearTimeout(a.ia),a.ia=0);a.ia=setTimeout(function(){a.M==k&&(a.M=0)},1E4);f=a.Oa();a.track();if(f<a.Oa()&&a.useForcedLinkTracking&&c.target){for(e=c.target;e&&e!=a.b&&"A"!=e.tagName.toUpperCase()&&"AREA"!=e.tagName.toUpperCase();)e=e.parentNode;if(e&&(g=e.href,a.Qa(g)||(g=0),d=e.target,c.target.dispatchEvent&&g&&(!d||"_self"==d||"_top"==d||"_parent"==d||h.name&&d==h.name))){try{b=a.d.createEvent("MouseEvents")}catch(l){b=new h.MouseEvent}if(b){try{b.initMouseEvent("click",
c.bubbles,c.cancelable,c.view,c.detail,c.screenX,c.screenY,c.clientX,c.clientY,c.ctrlKey,c.altKey,c.shiftKey,c.metaKey,c.button,c.relatedTarget)}catch(m){b=0}b&&(b["s_fe_"+a._in]=b.s_fe=1,c.stopPropagation(),c.stopImmediatePropagation&&c.stopImmediatePropagation(),c.preventDefault(),a.bodyClickTarget=c.target,a.J=b)}}}}}catch(n){a.clickObject=0}}},a.b&&a.b.attachEvent?a.b.attachEvent("onclick",a.r):a.b&&a.b.addEventListener&&(navigator&&(0<=navigator.userAgent.indexOf("WebKit")&&a.d.createEvent||
0<=navigator.userAgent.indexOf("Firefox/2")&&h.MouseEvent)&&(a.Ia=1,a.useForcedLinkTracking=1,a.b.addEventListener("click",a.r,!0)),a.b.addEventListener("click",a.r,!1))):setTimeout(a.Xa,30)};a.fc=a.ya();a.Kb();a.mc||(r?a.setAccount(r):a.C("Error, missing Report Suite ID in AppMeasurement initialization"),a.Xa(),a.loadModule("ActivityMap"))}
function s_gi(r){var a,h=window.s_c_il,q,p,m=r.split(","),s,u,t=0;if(h)for(q=0;!t&&q<h.length;){a=h[q];if("s_c"==a._c&&(a.account||a.oun))if(a.account&&a.account==r)t=1;else for(p=a.account?a.account:a.oun,p=a.allAccounts?a.allAccounts:p.split(","),s=0;s<m.length;s++)for(u=0;u<p.length;u++)m[s]==p[u]&&(t=1);q++}t?a.setAccount&&a.setAccount(r):a=new AppMeasurement(r);return a}AppMeasurement.getInstance=s_gi;window.s_objectID||(window.s_objectID=0);
function s_pgicq(){var r=window,a=r.s_giq,h,q,p;if(a)for(h=0;h<a.length;h++)q=a[h],p=s_gi(q.oun),p.setAccount(q.un),p.setTagContainer(q.tagContainerName);r.s_giq=0}s_pgicq();

!function r(a,s,d){function l(t,e){if(!s[t]){if(!a[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(u)return u(t,!0);var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}var i=s[t]={exports:{}};a[t][0].call(i.exports,function(e){return l(a[t][1][e]||e)},i,i.exports,r,a,s,d)}return s[t].exports}for(var u="function"==typeof require&&require,e=0;e<d.length;e++)l(d[e]);return l}({1:[function(e,t,n){t.exports={AdCloudCookie:e("./AdCloudCookieUtils")()}},{"./AdCloudCookieUtils":2}],2:[function(t,e,n){e.exports=function(){var a=t("js-cookie"),e={getTLD:function(){var e=document.domain||document.location.hostname,t=e.split("."),n=0,o="-tld-IhQJ0wbEdH8Zpylse209g";for(n=t.length-1;0<=n;n--){var i=t.slice(n).join("."),r={domain:i};if(a.set(o,"a",r),"a"==a.get(o))return a.remove(o,r),i}return e},init:function(){if(void 0===window.adCloudCookieData){var e=a.get("adcloud");if(void 0===e||""==e)window.adCloudCookieData={};else for(var t in window.adCloudCookieData=JSON.parse(e),window.adCloudCookieData){var n=adCloudCookieData[t].split(",");parseInt((new Date).valueOf()/1e3)>parseInt(n[2])&&delete adCloudCookieData[t]}}},get:function(e){return void 0===window.adCloudCookieData&&init(),window.adCloudCookieData&&window.adCloudCookieData[e]?window.adCloudCookieData[e]:""},set:function(e,t,n,o){var i,r=new Date;void 0===o&&(o=this.getTLD()),void 0!==n?void 0===n.endsWith?i=new Date(r.getFullYear(),r.getMonth(),r.getDate()+parseInt(n),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()):n.endsWith("D")||n.endsWith("d")?i=new Date(r.getFullYear(),r.getMonth(),r.getDate()+parseInt(n.substring(0,n.length-1)),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()):n.endsWith("M")||n.endsWith("m")?i=new Date(r.getFullYear(),r.getMonth()+parseInt(n.substring(0,n.length-1)),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()):n.endsWith("MIN")||n.endsWith("min")?i=new Date(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes()+parseInt(n.substring(0,n.length-3)),r.getSeconds(),r.getMilliseconds()):(n.endsWith("Y")||n.endsWith("y"))&&(i=new Date(r.getFullYear()+parseInt(n.substring(0,n.length-1)),r.getMonth(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds())):i=new Date(r.getFullYear()+2,r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()),window.adCloudCookieData[e]=new Array(t,o,parseInt(i.valueOf()/1e3)).toString(),a.remove("adcloud"),a.set("adcloud",JSON.stringify(window.adCloudCookieData),{expires:731,path:"/",domain:o})}};return void 0===window.adCloudCookieData&&e.init(),e}},{"js-cookie":5}],3:[function(r,e,t){e.exports=function(){return function(e,t,n,o,i){this.imsOrgId=e,this.rsid=t,this.cookieInstance=r("./AdCloudCookie").AdCloudCookie;var g=this,f={retrieveCookie:function(e){var t=g.cookieInstance.get(e);return void 0!==t&&""!==t&&1<t.split(",").length?t.split(",")[0]:""},expireCookie:function(e,t){g.cookieInstance.set(e,t,"-1D")},hasEfIDURL:function(){var e=this.getEfIdQParam();return null!=e&&""!==e},getEfIdQParam:function(){var e=!!window.MSInputMethodContext&&!!document.documentMode,t=window.location.href;if(e){var n={},o=document.createElement("a");o.href=t;for(var i=o.search.substring(1).split("&"),r=0;r<i.length;r++){var a=i[r].split("=");n[a[0]]=decodeURIComponent(a[1])}return n.ef_id}return new URL(t).searchParams.get("ef_id")},makeLastEventCall:function(e,t){var n=g.imsOrgId,o=g.rsid,i="https://lasteventf-tm.everesttech.net";null!=e&&""!==e&&(i=e);var r="_les_v",a="_les_lsc";if(void 0!==g.cookieInstance&&this.hasEfIDURL()){var s=Date.now();g.cookieInstance.set(a,s,"91D")}if("y"===this.retrieveCookie(r)||this.hasEfIDURL())g.cookieInstance.set(r,"y","30MIN");else if("undefined"!=typeof Visitor){var d=Visitor.getInstance(n),l=d.getSupplementalDataID("AdCloud:les1"),u="";void 0!==g.cookieInstance&&(u=this.retrieveCookie(a));var c=d.getMarketingCloudVisitorID(function(e){f.executeCall(i,f.createQueryString(n,l,u,o,e),r,"y",t)});c&&this.executeCall(i,f.createQueryString(n,l,u,o,c),r,"y",t)}},createQueryString:function(e,t,n,o,i){return"?_les_imsOrgId="+e+"&_les_sdid="+t+"&_les_last_search_click="+n+"&_les_rsid="+o+"&_les_mid="+i+"&_les_url="+encodeURIComponent(window.location.href)},executeCall:function(e,t,n,o,i){var r=new XMLHttpRequest;r.onreadystatechange=function(){4==this.readyState&&200==this.status&&(g.cookieInstance.set(n,o,"30MIN"),"function"==typeof i&&i(r))},r.open("GET",e+t,!0),r.withCredentials=!0,r.send(null)}};if(!n)try{f.makeLastEventCall(o,i)}catch(e){try{console.log("Failure making last event call.",e)}catch(e){}}return f}}},{"./AdCloudCookie":1}],4:[function(e,t,n){var o=e("./les.js")();window.AdCloudEvent=o},{"./les.js":3}],5:[function(e,t,n){t.exports=function(){function p(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var o in n)t[o]=n[o]}return t}return function e(f){function h(e,t,n){var o;if("undefined"!=typeof document){if(1<arguments.length){if("number"==typeof(n=p({path:"/"},h.defaults,n)).expires){var i=new Date;i.setMilliseconds(i.getMilliseconds()+864e5*n.expires),n.expires=i}n.expires=n.expires?n.expires.toUTCString():"";try{o=JSON.stringify(t),/^[\{\[]/.test(o)&&(t=o)}catch(e){}t=f.write?f.write(t,e):encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=(e=(e=encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var r="";for(var a in n)n[a]&&(r+="; "+a,!0!==n[a]&&(r+="="+n[a]));return document.cookie=e+"="+t+r}e||(o={});for(var s=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,l=0;l<s.length;l++){var u=s[l].split("="),c=u.slice(1).join("=");this.json||'"'!==c.charAt(0)||(c=c.slice(1,-1));try{var g=u[0].replace(d,decodeURIComponent);if(c=f.read?f.read(c,g):f(c,g)||c.replace(d,decodeURIComponent),this.json)try{c=JSON.parse(c)}catch(e){}if(e===g){o=c;break}e||(o[g]=c)}catch(e){}}return o}}return(h.set=h).get=function(e){return h.call(h,e)},h.getJSON=function(){return h.apply({json:!0},[].slice.call(arguments))},h.defaults={},h.remove=function(e,t){h(e,"",p(t,{expires:-1}))},h.withConverter=e,h}(function(){})}()},{}]},{},[4]);

