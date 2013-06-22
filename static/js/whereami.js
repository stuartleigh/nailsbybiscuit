(function($){
	
	"use strict";

	function WhereAmI() {
		this.buffer = 40;
		this._destinations = $('[data-destination]');
		this._arrivals = $('[data-arrival]');
		return this.init();
	}

	WhereAmI.prototype = {
		init: function() {
			$(window).on('scroll', $.proxy(this.checkDestinations, this));
			this._arrivals.on('click', function(e) {
				e.preventDefault();
				var id = $(this).data('arrival');
				$('html,body').animate({
					scrollTop: $('#'+id).offset().top
				}, 'fast');
			});
		},
		checkDestinations: function(e) {
			this._destinations.each($.proxy(this.checkOffset, this));
		},
		checkOffset: function(index, el) {
			var currentTop = $(window).scrollTop();
			if(currentTop + this.buffer >= $(el).offset().top) {
				var box = $(el).data('destination');
				this.markArrival($('[data-arrival="'+box+'"]'));
			}
		},
		markArrival: function(elements) {
			this._arrivals.removeClass('active');
			elements.addClass('active');
		}
	}

	$(document).ready(function(){
		var whereami = new WhereAmI();
	});

})(window.jQuery)