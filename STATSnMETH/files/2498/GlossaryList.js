jQuery(function($) {
	$j('.glossaryEntry').on('click', function(){
		var glossId = $j(this).attr('id');
		var position = GetScreenCordinates($j(this));
		
		//hide all other glossaryEntrys
		$j('.glossaryTermPopup').each(function() {
			if (!$j(this).hasClass('hidden') && 
					glossId != null &&
					$j(this).attr('id') != 'glossary-'+glossId) {
				$j(this).addClass('hidden');
			}
		});
		if($j('#glossary-'+glossId).removeClass('hidden')) {
			$j('#glossary-'+glossId).removeClass('hidden');
		}
		$j('#glossary-'+glossId).css({top: position.y - $j('#glossary-'+glossId).height() - 35, left: position.x-100});
	});
	
	$j('.glossaryEntry').hover(function() {
		var glossId = $j(this).attr('id');
		var position = GetScreenCordinates(this);
		
		//hide all other glossaryEntrys
		$j('.glossaryTermPopup').each(function() {
			if (!$j(this).hasClass('hidden') && 
					glossId != null &&
					$j(this).attr('id') != 'glossary-'+glossId) {
				if(!$j(this).hasClass('hidden')) {
					$j(this).addClass('hidden');
				}
			}
		});
		
		if($j('#glossary-'+glossId).removeClass('hidden')) {
			$j('#glossary-'+glossId).removeClass('hidden');
		}
		$j('#glossary-'+glossId).css({top: position.y  - $j('#glossary-'+glossId).height() - 35, left: position.x-100});
	}, function() {
		 var timeout = setTimeout(function(){
			$j('.glossaryTermPopup').each(function() {
				if(!$j(this).hasClass('hidden')) {
					$j(this).addClass('hidden');
				}
			});
		 }, 2000);
		 $j('.glossaryTermPopup').hover(function() {
			 clearTimeout(timeout);
			 if($j(this).hasClass('hidden')) {
				 $j(this).removeClass('hidden');
			 }
		 },
		 function() {
			 var timeout = setTimeout(function(){
					$j('.glossaryTermPopup').each(function() {
						if(!$j(this).hasClass('hidden')) {
							$j(this).addClass('hidden');
						}
					});
				 }, 1000);
		 });
	});
	
	$j('body').on('click', function () {
		$j('.glossaryTermPopup').each(function() {
			if(!$j(this).hasClass('hidden')) {
				$j(this).addClass('hidden');
			}
		});
	});
});

function GetScreenCordinates(obj) {
    var p = {};
    p.x = obj.offsetLeft;
    p.y = obj.offsetTop;
    while (obj.offsetParent) {
        p.x = p.x + obj.offsetParent.offsetLeft;
        p.y = p.y + obj.offsetParent.offsetTop;
        if (obj == document.getElementsByTagName("body")[0]) {
            break;
        }
        else {
            obj = obj.offsetParent;
        }
    }
    return p;
}