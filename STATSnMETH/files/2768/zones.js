(function(win,doc){var dwData='',adCache=[],serverUri='',cssLoaded=false,zoneAttr='data-oio-zone',serverAttr='data-oio-uri',jsonObj='oio'+Math.floor(Math.random()*99999999);var init=function(){var i,zn,zno,els=doc.querySelectorAll('*['+zoneAttr+']');for(i=0;i<els.length;i++){if(zn=els[i].getAttribute(zoneAttr)){zn+='&rand='+Math.floor(Math.random()*99999999);}
zno=parseQuery(zn);if(!zno||!zno.type||!zno.zone){continue;}
zno.el=els[i];zno.qs=zn;zno.uri=els[i].getAttribute(serverAttr)||serverUri;adCache.push(zno);els[i].removeAttribute(zoneAttr);}
if(adCache.length){loadAds();}
setTimeout(init,1000);};var loadAds=function(){var i,uri,ref=0,queries=[];for(i=0;i<adCache.length;i++){if(adCache[i].processing){continue;}
adCache[i].processing=true;ref=adCache[i].ref||0;uri=adCache[i].uri||serverUri;queries.push('queries[]='+encodeURIComponent(adCache[i].qs+(adCache[i].refreshed?'&refreshed=1':'')));}
if(!queries.length){return;}
queries.push('rand='+Math.floor(Math.random()*99999999));queries.push('cls='+jsonObj);queries.push('ref='+ref);loadResource('script',uri+'?'+queries.join('&'),doc.body,function(){this.parentNode.removeChild(this);});};var execJson=function(data){var cache={};for(var i=0;i<data.length;i++){for(var z=0;z<adCache.length;i++){if(adCache[z].processing&&adCache[z].qs==data[i].query){cache=adCache[z];adCache.splice(z,1);break;}}
if(!cache){continue;}
var node=doc.createElement('div');node.innerHTML=data[i].content;var parent=doc.createElement('div');cache.el.parentNode.replaceChild(parent,cache.el);writeNode(node.firstChild,parent);if(data[i].refresh>0){var timer,ms=data[i].refresh*1000;if(cache.lastTime){timer=(cache.lastTime+ms)-Date.now();}else{timer=ms;}
while(timer<0&&ms>0){timer=timer+ms;}
(function(qso,el,timer){setTimeout(function(){qso.processing=false;qso.refreshed=1;qso.el=el;qso.lastTime=Date.now();adCache.push(qso);},timer);})(cache,parent,timer>0?timer:0);}}};var writeNode=function(node,parent,isChild){if(!node||!parent){return;}
var clone,orgDw=[];if(!isChild){orgDw=[doc.write,doc.writeln];doc.write=function(){return docWrite([].slice.call(arguments,0),"");};doc.writeln=function(){return docWrite([].slice.call(arguments,0),"\n");};}
while(node){if(node.nodeName.toLowerCase()=='script'){loadResource('script',node.src||node.text,parent,function(){if(!dwData)return;var node=doc.createElement('div');node.innerHTML=dwData;dwData='';writeNode(node.firstChild,this.parentNode,true);});}else{clone=node.cloneNode(false);parent.appendChild(clone);if(node.firstChild){if(node.getElementsByTagName('script').length){writeNode(node.firstChild,clone);}else{clone.innerHTML=node.innerHTML;}}}
node=node.nextSibling;}
if(orgDw){doc.write=orgDw[0];doc.writeln=orgDw[1];}};var docWrite=function(args,sep){if(typeof args==='string'){args=[args];}
while(args.length){dwData+=args.shift()+(sep||'');}};var loadResource=function(tag,content,parent,callback){var el,attr,isUrl=content.indexOf('http')==0||content.indexOf('//')==0;if(tag=='script'){attr=isUrl?'src':'text';}
if(tag=='link'||tag=='style'){tag=isUrl?'link':'style';attr=isUrl?'href':'innerHTML';}
el=doc.createElement(tag);el[attr]=content;if(tag=='link'){el['rel']='stylesheet';}
if(callback&&isUrl){el.onload=function(){callback.call(el);};}
parent.appendChild(el);if(callback&&!isUrl){callback.call(el);}};var serverUri=function(){var i,s=doc.getElementsByTagName('script');for(i=0;i<s.length;i++){if(s[i].src&&s[i].src.indexOf('/zones.js')>=0){return s[i].src.replace('/zones.js','/js_http.php');}}
return null;};var parseQuery=function(qstr){var query={};var a=qstr.split('&');for(var i=0;i<a.length;i++){var b=a[i].split('=');query[decodeURIComponent(b[0])]=decodeURIComponent(b[1]||'');}
return query;};if(win['oiopub']&&win['oiopub']['__loaded']){return;}
win['oiopub']={__loaded:true};win[jsonObj]={json:function(data){if(!data||!data.length){return;}
if(!cssLoaded&&data[0].css){cssLoaded=true;if(!doc.querySelector('link[href*="/images/style/output.css"]')){loadResource('style',data[0].css,doc.body,function(){execJson(data);});return;}}
execJson(data);}};serverUri=serverUri();if(/complete|interactive|loaded/.test(doc.readyState)){init();}else{doc.addEventListener('DOMContentLoaded',init,false);}})(window,document);