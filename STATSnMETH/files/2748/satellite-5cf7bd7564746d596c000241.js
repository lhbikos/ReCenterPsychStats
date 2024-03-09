gtagjs = document.createElement('script');
gtagjs.setAttribute('src','https://www.googletagmanager.com/gtag/js?id=AW-973395369')
gtagjs.setAttribute('async','true')
document.getElementsByTagName('head')[0].appendChild(gtagjs);

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-973395369');
gtag('event', 'page_view', {
  'send_to': 'AW-973395369',
  'publication': _satellite.getVar('pubTitle')
});
