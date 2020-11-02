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

	$('.form-set-country .dropdown').dropdown({
		fullTextSearch: true
	});

	$('.form-set-country .dropdown').dropdown('setting', 'onChange', function(value){
		console.log(value)
	});

	$('#register .dropdown').dropdown({
		fullTextSearch: true
	});

	$('#register .dropdown').dropdown('setting', 'onChange', function(value){
		console.log(value)
	});

	$('.getstart-form-register .dropdown').dropdown({
		fullTextSearch: true
	});

	$('.getstart-form-register__country .dropdown').dropdown('setting', 'onChange', function(value){
		console.log(value)
	});

	$('.getstart-form-register__timezone .dropdown').dropdown('setting', 'onChange', function(value){
		console.log(value)
	});

	$('.getstart-form-register__currency .dropdown').dropdown('setting', 'onChange', function(value){
		console.log(value)
	});

	$('.getstart-form-register__phonenumber .dropdown').dropdown('setting', 'onChange', function(value){
		console.log(value)
	});

	$('.getstart-form-register__agency .dropdown').dropdown('setting', 'onChange', function(value){
		console.log(value)
	});

	$('.form-set-country button').on('click', function() {
		$('.form-set-country').css({'display': 'none'});
		$('#register').css({'display': 'block'});
		$('#form .prev-btn').css({'display': 'block'});
	});

	$('#form .prev-btn').on('click', function(){
		$('.form-set-country').css({'display': 'block'});
		$('#register').css({'display': 'none'});
		$('#form .prev-btn').css({'display': 'none'});
	})

	$('#register .multiple-inputs--1 .active-account').on('click', function(){
		$('.multiple-inputs--1').css({'display': 'none'});
		$('.multiple-inputs--2').css({'display': 'block'});
	})
	$('#register .multiple-inputs--2 .active-account').on('click', function(){
		$('.multiple-inputs--2').css({'display': 'none'});
		$('.multiple-inputs--1').css({'display': 'block'});
	})


	$('#register .password .icon').on('click', function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active')
			$('#register .password input').attr('type', 'password')
		}else{
			$(this).addClass('active')
			$('#register .password input').attr('type', 'text')
		}
	})
	$('#register .confirm-password .icon').on('click', function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active')
			$('#register .confirm-password input').attr('type', 'password')
		}else{
			$(this).addClass('active')
			$('#register .confirm-password input').attr('type', 'text')
		}
	})
	$('#register .account-center-agreement-check').on('click', function(){
		$(this).toggleClass('checked')
	})

	$('.getstart-form .getstart-comp-radio .vi-radio').on('click', function(){
		if($(this).find('input[type="radio"]').attr('checked')){
			return
		}
		$('.getstart-form .getstart-comp-radio .vi-radio').removeClass('is-checked')
		$('.getstart-form .getstart-comp-radio .vi-radio__input').removeClass('is-checked')
		$('.getstart-form .getstart-comp-radio input[type="radio"]').removeAttr('checked')
		$(this).addClass('is-checked')
		$(this).find('.vi-radio__input').addClass('is-checked')
		$(this).find('input[type="radio"]').attr('checked', 'checked')
	})

	$('.getstart-form-register .form-edit-btn').on('click', function(){
		$('.getstart-form-register__country .dropdown').removeClass('disabled')
		$(this).remove()
	})


	// Nếu đang ở form có TikTok Ads Program Terms

	// $('.form-set-country, #register').css({'display': 'none'})
	// $('.getstart-form').addClass('two-column')
	// $('.getstart-form-register').css({'display': 'block'})
});