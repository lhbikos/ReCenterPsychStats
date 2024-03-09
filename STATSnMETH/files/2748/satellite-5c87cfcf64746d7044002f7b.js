window.fbq && fbq('trackCustom', 'FullTextArticle', {
  'articleDoi' : _satellite.getVar('articleDoi'),
  'subjects' : _satellite.getVar('globalSubjectString').split('|'),
  'publicationDoi' : _satellite.getVar('pubDoi'),
  'pagePath' : _satellite.getVar('pageGroup') + "|" + _satellite.getVar('pageTemplate') + "|" + _satellite.getVar('pageSubtype'),
  'publicationTitle' : _satellite.getVar('pubTitle'),
  'publicationType' : _satellite.getVar('pubType'),
  'hub' : _satellite.getVar('website')
});
