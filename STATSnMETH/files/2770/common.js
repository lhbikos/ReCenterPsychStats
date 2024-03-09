var mistats;
mistats = mistats || {};

mistats.log = mistats.log || [];

mistats.failsafe =
{
   list: [],

   pref: function ()
   {
      var bu;
      var dirs;
      var dn;

      dirs = 'eyJiZWwiOiJibmQiLCJ0YmgiOiJiZWxsaW5naGFtaGVyYWxkIiwic3VuIjoic3VuaGVyYWxkIiwiaWRhIjoiaWRhaG9zdGF0ZXNtYW4iLCJicmEiOiJicmFkZW50b24iLCJjbHQiOiJjaGFybG90dGVvYnNlcnZlciIsInN0YSI6InRoZXN0YXRlIiwibGVkIjoibGVkZ2VyLWVucXVpcmVyIiwiZWxuIjoiZWxudWV2b2hlcmFsZCIsImZycyI6ImZyZXNub2JlZSIsImRmdyI6InN0YXItdGVsZWdyYW0iLCJoaGQiOiJpc2xhbmRwYWNrZXQiLCJrc2MiOiJrYW5zYXNjaXR5Iiwia2VuIjoia2VudHVja3kiLCJtYWMiOiJtYWNvbiIsIm1lciI6Im1lcmNlZHN1bnN0YXIiLCJtaWEiOiJtaWFtaWhlcmFsZCIsIm1vZCI6Im1vZGJlZSIsIm1ibyI6Im15cnRsZWJlYWNob25saW5lIiwib2x5IjoidGhlb2x5bXBpYW4iLCJuYW8iOiJuZXdzb2JzZXJ2ZXIiLCJkdXIiOiJoZXJhbGRzdW4iLCJyaGgiOiJoZXJhbGRvbmxpbmUiLCJzYWMiOiJzYWNiZWUiLCJzbG8iOiJzYW5sdWlzb2Jpc3BvIiwiY2R0IjoiY2VudHJlZGFpbHkiLCJ0bnQiOiJ0aGVuZXdzdHJpYnVuZSIsInRjaCI6InRyaS1jaXR5aGVyYWxkIiwid2ljIjoia2Fuc2FzIiwibWNkIjoibWNjbGF0Y2h5ZGMifQ==',
      bu = (mistats.sitefileNode.src || '').match(/\/[a-z]{3}\/[a-z\-]+\.js/);
      bu = bu ? bu[0].substr(1, 3) : 'nao';
      dn = JSON.parse(atob(dirs));

      return 'media' + (bu === 'nao' ? '2' : '') + '.' + dn[bu] + '.com/' + dn[bu];
   }(),

   next: function ()
   {
      mistats.failsafe.list.length && (mistats.jsLoader(mistats.failsafe.list.shift(), false, mistats.failsafe.next));
      !mistats.failsafe.list.length && (mistats.log.push('mistats failsafe complete'));
   },

   tag: function (pEvent)
   {
      var dofs;
      var i;
      var objs;

      if (mistats.failsafe.last || mistats.referrer)
         return;

      mistats.failsafe.last = true;
      window.removeEventListener('mi_micb_loaded', mistats.failsafe.tag, false);

      objs = document.getElementsByTagName('script');
      for (i = 0; i < objs.length; i++)
         if ((objs[i].src || '').match(/\/mistats\/vendors|\/mistats\/products/))
            mistats.failsafe.list[mistats.failsafe.list.length] =
               objs[i].src.replace(/^https?:/, '').replace(/^\/{2}/, '').replace(/media\d?\.[^\.]+\.com\/mistats/, 'https://' + mistats.failsafe.pref);
         else if ((objs[i].src || '').match(/\/mistats\/fina\w+\.js/))
            dofs = true;

      dofs && (mistats.failsafe.list[mistats.failsafe.list.length] = 'https://' + mistats.failsafe.pref + '/fs.js');

      mistats.failsafe.next();
   },

   first: function ()
   {
      if (!mistats.failsafe.pref || mistats.micbLoaded)
         return;

      window.addEventListener('mi_micb_loaded', mistats.failsafe.tag, false);
      mistats.jsLoader('https://' + mistats.failsafe.pref + '/micb.js', false);
   },

   init: function (pEvent)
   {
      var i;
      var objs;

      if (mistats.micbLoaded || !mistats.sitefileNode)
      {
         if (pEvent)
            document.removeEventListener('readystatechange', mistats.failsafe.init, false);
         return;
      }

      if (!(document.readyState || '').match(/interactive|complete/))
         return;

      document.removeEventListener('readystatechange', mistats.failsafe.init, false);

      mistats.log.push('mistats failsafe init');

      objs = document.getElementsByTagName('script');
      for (i = 0; i < objs.length; i++)
         if ((objs[i].src || '').match(/\/mistats\/micb\.js/) && !mistats.micbLoaded)
         {
            if ((location.pathname || '').match(/ccidist-replica-reader/))
               return setTimeout(mistats.failsafe.first, 2000);
            else
               return mistats.failsafe.first();
         }
   }
};

if (!mistats.micbLoaded && mistats.sitefileNode)
{
   if ((document.readyState || '').match(/interactive|complete/))
      mistats.failsafe.init();
   else
      document.addEventListener('readystatechange', mistats.failsafe.init, false);
}

