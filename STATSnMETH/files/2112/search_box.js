jQuery(document).ready(function($) {
	var form = $('#psu-search-form');
  var options = $(form).find('.form-type-radios');

  // Hide Options initially
  $(options).addClass('element-invisible');

  $(form).focusin(function() {
    $(options).removeClass('element-invisible');
		$(this).addClass('expanded');
	});

  $(form).click(function(event) {
    event.stopPropagation();
  });

	$(document).click(function() {
    $(options).addClass('element-invisible');
    $(form).removeClass('expanded');
  });

  var button =$(form).find('#edit-submit');
  $(button).detach();
  $('<span class="input-group-btn"><button type="submit" class="btn btn-primary"><i class="fa fa-search fa-2x" aria-hidden="true"></i></button></span>').insertAfter('input#edit-textfield');
});
