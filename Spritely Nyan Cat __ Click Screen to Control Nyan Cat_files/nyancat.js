(function($) {
			$(document).ready(function() {
							
				$('#clouds').pan({fps: 30, speed: 20, dir: 'left', depth: 10});
				
				$('#nyancat').sprite({fps: 12, no_of_frames: 6})
				.spRandom({top: 80, left: 100, right: 200, bottom: 340, speed: 1500, pause: 100})
				.activeOnClick()
				.active();
				$('body').flyToTap();
				
				
			});
		})(jQuery);