(function(i){Drupal.behaviors.highwire_citation_export={attach:function(a,o){var t=!1;i('.highwire-citation-export-link-ajax',a).click(function(){i('.highwire-citation-export-link-ajax-popup').dialog({modal:!0,draggable:!1,maxWidth:700});return!1})}}}(jQuery));(function(a){Drupal.behaviors.myCustomJS={attach:function(t,h){a(".highwire-markup .em-addr",t).each(function(){var t=a(this).html().replace("\{at\}","@"),t="<a href='mailto:"+t+"'>"+t+"</a>";a(this).html(t)})}}})(jQuery);(function(i){Drupal.behaviors.highwire_shareitajax={attach:function(r,e){var h=function(){var a=i(window).width();if(a>=Drupal.settings.highwire.share_modal_width){return Drupal.settings.highwire.share_modal_width}
else{return'90%'}},t=Drupal.settings.highwire.share_modal_title,n=!1,a='',l='';i('.highwire_clipboard_link_ajax',r,e).click(function(){a=i(this).attr('id');i(this).parent().find('.highwire_clipboard_form_ajax_'+a).dialog({'modal':!0,'draggable':!1,'width':h(),'title':t,'resizable':!1});i('.highwire_clipboard_form_ajax_'+a).dialog('open');return!1})}}}(jQuery));