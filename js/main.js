$(document).ready(function() {

	// new WOW().init();
	AOS.init();

	var $header = $("header")

	function onScroll(){
		$(window).on("scroll", function() {
			if ($(this).scrollTop() >= 1) {
				$header.removeClass('changing-head changing-head-mask');
			}
			else {      
				$header.addClass('changing-head changing-head-mask');
			}
		});

		if($(window).width() <= 480){
			$(window).on("scroll", function() {
				var scrollCurrent = $(document).height() - ( $(this).scrollTop() + $(window).height())
				if (scrollCurrent <= 200) {
					$('.bottomButton_1ccv4').css({'display': 'none'});
				}
				else {      
					$('.bottomButton_1ccv4').css({'display': 'block'});
				}
			});
		}
	}

	onScroll()


	$( window ).resize(function() {
		$(window).off("scroll")
		onScroll()
	})
	
	$('header .dropdown').dropdown({
		label: {
		  duration: 0,
		},
		on: 'hover'
	});

	$('#form .dropdown').dropdown(	);
});