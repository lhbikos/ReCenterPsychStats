!function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  window.fbq && fbq('init', '263124174624252');
 
if( _satellite.getVar('journalCode')=='15318249' || _satellite.getVar('journalCode')=='123289503'){
	window.fbq && fbq('init', '2240878159265939'); 
}

window.fbq && fbq('trackCustom', 'WOLPageView', {
  'articleDoi' : _satellite.getVar('articleDoi'),
  'subjects' : _satellite.getVar('globalSubjectString').split('|'),
  'publicationDoi' : _satellite.getVar('pubDoi'),
  'pagePath' : _satellite.getVar('pageGroup') + "|" + _satellite.getVar('pageTemplate') + "|" + _satellite.getVar('pageSubtype'),
  'publicationTitle' : _satellite.getVar('pubTitle'),
  'publicationType' : _satellite.getVar('pubType'),
  'hub' : _satellite.getVar('website')
});
