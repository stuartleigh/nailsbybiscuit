(function(){

	"use strict";

	/* expanding events for when on mobile screens */

	var ev = Modernizr.touch ? 'touchstart' : 'click';
	var topbar = $('.top-bar');
	var _offset = topbar.offset().top;

	$('.toggle-topbar a').on(ev, function(e){
		e.preventDefault();
		topbar.toggleClass('expanded');
	});

	$('.top-bar-section ul li a, .top-bar .title-area .name a').not('[data-dropdown]').on(ev, function(e) {
		topbar.removeClass('expanded');
	});

	/* sticky handling */

	$(window).on('scroll', function(){
		$('.sticky-top-bar').toggleClass('fixed', $(this).scrollTop() >= _offset);
	});

})();