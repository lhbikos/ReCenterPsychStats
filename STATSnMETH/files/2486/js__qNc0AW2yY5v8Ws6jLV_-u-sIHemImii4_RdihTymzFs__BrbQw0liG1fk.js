(function(t){Drupal.behaviors.highwire_log={attach:function(e,i){t('.service-links a').each(function(){if(!t(this).is('#twitter_widget')&&!t(this).is('#facebook_like')&&!t(this).is('#google_plus_one')){if(typeof t(this).attr('data-log-redirect-set')=='undefined'){t(this).attr('href','/highwire_log/share/'+t(this).attr('id')+'?link='+encodeURIComponent(t(this).attr('href')));t(this).attr('data-log-redirect-set',!0)}}});if(typeof(Drupal.settings.highwire_log)!='undefined'&&Drupal.settings.highwire_log!==null){if(Drupal.settings.highwire_log.has_run!=!0){requestData={};t.each(Drupal.settings.highwire_log.userdata,function(t,e){requestData[t]=e});if(Drupal.settings.highwire_log.auth!=null){t.each(Drupal.settings.highwire_log.auth,function(t,e){requestData[t]=e})};if(requestData){t.ajax({url:'/highwire_log/submit',type:'POST',cache:!1,data:requestData,dataType:'json',success:function(t){}})}
else{};Drupal.settings.highwire_log.has_run=!0}}}}}(jQuery));(function(t){Drupal.behaviors.highwire_user_meta_add={attach:function(e,a){t.ajax({url:'/highwire/sub-data',type:'POST',cache:!1,dataType:'json',success:function(a){if(t('script[id="user"]').length==0){var e=document.createElement('script');e.type='application/json';e.id='user';e.text=JSON.stringify(a);t(e).insertAfter(t('meta').last())}}})}}}(jQuery));(function(n){Drupal.Panels=Drupal.Panels||{};Drupal.Panels.autoAttach=function(){if(n.browser.msie){n('div.panel-pane').hover(function(){n('div.panel-hide',this).addClass('panel-hide-hover');return!0},function(){n('div.panel-hide',this).removeClass('panel-hide-hover');return!0});n('div.admin-links').hover(function(){n(this).addClass('admin-links-hover');return!0},function(){n(this).removeClass('admin-links-hover');return!0})}};n(Drupal.Panels.autoAttach)})(jQuery);(function(a){if(a().jquery.split('.')[0]=='1'&&parseInt(a().jquery.split('.')[1])<6){if(typeof console=='object'){console.error('Panels Ajax Tab Error: jQuery 1.6 or higher required.')}};window.onpopstate=function(t){if(t.state!=null){a('a[data-panel-name="'+t.state.tab+'"]').panels_ajax_tabs_trigger()}};Drupal.behaviors.panels_ajax_tabs={attach:function(t){a('.panels-ajax-tab-tab',t).once('panels-ajax-tabs-once',function(){if(a(this).parent().hasClass('active')&&a(this).data('url-enabled')==1){if(typeof window.history.pushState!='undefined'){window.history.replaceState({'tab':a(this).data('panel-name')},a(this).html(),window.location.href)}};a(this).click(function(t){t.preventDefault();if(typeof window.history.pushState!='undefined'&&a(this).data('url-enabled')==1){var e=a(this).attr('href')?a(this).attr('href'):location.pathname;window.history.pushState({'tab':a(this).data('panel-name')},a(this).html(),e)};if(!a(this).parent().hasClass('active')){a(this).panels_ajax_tabs_trigger()}}).css('cursor','pointer')});a('.pane-panels-ajax-tab-tabs',t).once('panels-ajax-tabs-once',function(){var i=a('.panels-ajax-tab-tab:not(.panels-ajax-tabs-first-loaded)',this),e=i.first(),r=e.data('target-id'),n=a('#panels-ajax-tab-container-'+r).data('panels-ajax-tab-preloaded'),t;if(n===''){t=e;e.trigger('click')}
else{t=i.filter('*[data-panel-name="'+n+'"]')};t.addClass('panels-ajax-tabs-first-loaded');t.parent().addClass('active')})}}})(jQuery);(function(a){a.fn.extend({panels_ajax_tabs_trigger:function(t){return this.each(function(){var e=a(this),r=e.parents('.panels-ajax-tab:first');if(a(r).data('loading')===!0){return!0};a(r).data('loading',!0);var n=e.data('target-id'),i=e.data('panel-name'),c=e.data('entity-context'),p=e.data('url-enabled'),h=e.data('trigger'),l={tab:this,tabObject:e,containerId:'#panels-ajax-tab-container-'+n,callback:t,cache:!1,};var s=a.Event('panelsAjaxTabsPreLoad',l),d=a.Event('panelsAjaxTabsPreBehavior',l),o=a.Event('panelsAjaxTabsLoaded',l);if(a('#panels-ajax-tab-container-'+n).children('.panels-ajax-tab-wrap-'+i).length){s.cached=!0;a(document).trigger(s,s.data);a('#panels-ajax-tab-container-'+n).children().hide();a('#panels-ajax-tab-container-'+n).children('.panels-ajax-tab-wrap-'+i).show();a(r).data('loading',!1);if(t){t.call(this,e)};o.cached=!0;a(document).trigger(o)}
else{a.ajax({url:Drupal.settings.basePath+'panels_ajax_tab/'+i+'/'+c+'/'+p+'?panels_ajax_tab_trigger='+h+'&panels_ajax_tab_tab='+i,datatype:'html',headers:{'X-Request-Path':document.location.pathname},cache:!1,beforeSend:function(t){a(document).trigger(s);a('#panels-ajax-tab-container-'+n).children().hide();a('#panels-ajax-tab-container-'+n).children('.panels-ajax-tab-loading').show()},error:function(t,n,e){if(typeof console=='object'){console.error('Panels Ajax Tab Error: '+e)};a(r).data('loading',!1)}}).done(function(s){a('#panels-ajax-tab-container-'+n).children('.panels-ajax-tab-loading').hide();a('#panels-ajax-tab-container-'+n).append('<div class="panels-ajax-tab-wrap-'+i+'">'+s['markup']+'</div>');a(document).trigger(d,d.data);Drupal.attachBehaviors(a('#panels-ajax-tab-container-'+n+' .panels-ajax-tab-wrap-'+i)[0]);a(r).data('loading',!1);if(t){t.call(this,e)};a(document).trigger(o)})};e.parent().siblings().removeClass('active');e.parent().addClass('active')})}})})(jQuery);(function(e){var r=function(){var e=function(){var e=navigator?navigator.userAgent.toLowerCase():'other';if(e.indexOf('chrome')>-1)return'chrome';else if(e.indexOf('safari')>-1)return'safari';else if(e.indexOf('msie')>-1)return'ie';else if(e.indexOf('firefox')>-1)return'firefox';else if(e.match(/trident.*rv[ :]*11\./))return'ie';return e},a=function(){var r=navigator.userAgent,i;if(r.toLowerCase().match(/trident.*rv[ :]*11\./)){return 11};var e=r.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);if(e&&(i=r.match(/version\/([\.\d]+)/i))!=null){e[2]=i[1]};browserVersion=e?e[2]:navigator.appVersion;return browserVersion},i=function(e){try{return new ActiveXObject(e)}catch(r){}},r=function(e){for(key in navigator.plugins){var r=navigator.plugins[key];if(r.name==e)return r}},t=function(){return this.plugin=this.plugin||function(){if(e()=='ie'){return i('AcroPDF.PDF')||i('PDF.PdfCtrl')}
else{return r('Adobe Acrobat')||r('Chrome PDF Viewer')||r('WebKit built-in PDF')}}()},n=function(){return!!t()},o=function(){try{var r=t();if(e()=='ie'){var n=r.GetVersions().split(','),o=n[0].split('=');return parseFloat(o[1])};if(r.version)return parseInt(r.version);return r.name}catch(i){return null}};return{browser:e(),browserVersion:a(),acrobat:n()?'installed':!1,acrobatVersion:o()}};Drupal.behaviors.highwire_toggle_pdf={attach:function(i,d){var s=r(),o=s.browser,n=s.browserVersion,h=s.acrobat,c=s.acrobatVersion,a=e('div.highwire-pdf',i).attr('data-pdf-path'),f=e('div.highwire-pdf',i).data('pdfjs-path'),t='';if((o=='chrome')||(o=='firefox')||((o=='safari')&&(parseInt(n)>=5.0))){show_pdf=!0;if(h){var t='<object width="100%"><embed src="'+a+'#zoom=75" width="100%" height="785px"></object>'}
else{t='<iframe src=\''+f+'\' width=\'100%\' height=\'750px\'></iframe>'};e('.highwire-pdf',i).html(t);e('.higwire-pdf-download-link',i).remove()}
else if(((o=='safari')&&(parseInt(n)<5.0))){show_pdf=!0;if(h){e('.higwire-pdf-download-link',i).remove();var t='<object width="100%"><embed src="'+a+'#zoom=80" width="100%" height="785px"></object>'}
else{t='<iframe src="http://docs.google.com/viewer?url='+a+'&embedded=true" style="width:718px; height:700px;" frameborder="0"></iframe>'};e('.highwire-pdf',i).html(t)}
else if((o=='ie')&&(parseInt(n)>8.0)){t='<iframe src=\''+f+'\' width=\'100%\' height=\'750px\'></iframe>';e('.highwire-pdf',i).html(t);e('.higwire-pdf-download-link',i).remove()}
else if((o=='ie')(parseInt(n)<=8.0)){show_pdf=!0;if(h){e('.higwire-pdf-download-link',i).remove();var t='<object width="100%"><embed src="'+a+'#view=fitbh&toolbars=1&pagemode=none&navpanes=0" width="100%" height="785px"></object>';e('.highwire-pdf',i).html(t);e('.ui-dialog').once('dialogopen',function(r,i){e(this).append('<iframe class="highwire-dialog-ie-wrap" src="about:blank"></iframe>');e('.highwire-dialog-ie-wrap').css('z-index','-1');e('.highwire-dialog-ie-wrap').css('position','absolute');e(this).css('z-index','100')})}}
else{e('.highwire-pdf',i).remove()}}}})(jQuery);(function(c){Drupal.behaviors.captcha={attach:function(t){c('#edit-captcha-response').attr('autocomplete','off')}};Drupal.behaviors.captchaAdmin={attach:function(t){c('#edit-captcha-add-captcha-description').click(function(){if(c('#edit-captcha-add-captcha-description').is(':checked')){c('div.form-item-captcha-description').show('slow')}
else{c('div.form-item-captcha-description').hide('slow')}});if(!c('#edit-captcha-add-captcha-description').is(':checked')){c('div.form-item-captcha-description').hide()}}}})(jQuery);(function(e){Drupal.behaviors.textarea={attach:function(t,a){e('.form-textarea-wrapper.resizable',t).once('textarea',function(){var n=null,t=e(this).addClass('resizable-textarea').find('textarea'),i=e('<div class="grippie"></div>').mousedown(r);i.insertAfter(t);function r(i){n=t.height()-i.pageY;t.css('opacity',0.25);e(document).mousemove(u).mouseup(a);return!1};function u(e){t.height(Math.max(32,n+e.pageY)+'px');return!1};function a(n){e(document).unbind('mousemove',u).unbind('mouseup',a);t.css('opacity',1)}})}}})(jQuery);(function(a,c,e){e.behaviors.recaptcha={attach:function(e){a('.g-recaptcha',e).each(function(){if(typeof grecaptcha==='undefined'||typeof grecaptcha.render!=='function'){return};if(a(this).hasClass('recaptcha-processed')){grecaptcha.reset()}
else{if(!a(this).hasClass('recaptcha-processed')){grecaptcha.render(this,a(this).data());a(this).addClass('recaptcha-processed')}}})}};c.drupalRecaptchaOnload=function(){a('.g-recaptcha').each(function(){if(!a(this).hasClass('recaptcha-processed')){grecaptcha.render(this,a(this).data());a(this).addClass('recaptcha-processed')}})}})(jQuery,window,Drupal);