$(document).ready(function() {

	// new WOW().init();
	AOS.init();

	var $header = $("header")
	var userChooseForm = '2'

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

	// form form-set-country

	$('.form-set-country .dropdown').dropdown({
		fullTextSearch: true
	});

	$('.form-set-country .dropdown').dropdown('setting', 'onChange', function(value){
		console.log(value)
	});


	// form register

	$('#register .dropdown').dropdown({
		fullTextSearch: true
	});

	$('#register .dropdown').dropdown('setting', 'onChange', function(value){
		console.log(value)
	});


	// form getstart-form-register

	// $('.getstart-form-register .dropdown').dropdown({
	// 	fullTextSearch: true
	// });

	// $('.getstart-form-register__country .dropdown').dropdown('setting', 'onChange', function(value){
	// 	console.log(value)
	// });

	// $('.getstart-form-register__timezone .dropdown').dropdown('setting', 'onChange', function(value){
	// 	console.log(value)
	// });

	// $('.getstart-form-register__currency .dropdown').dropdown('setting', 'onChange', function(value){
	// 	console.log(value)
	// });

	// $('.getstart-form-register__phonenumber .dropdown').dropdown('setting', 'onChange', function(value){
	// 	console.log(value)
	// });

	// $('.getstart-form-register__agency .dropdown').dropdown('setting', 'onChange', function(value){
	// 	console.log(value)
	// });

	// form form-set-country
	$('.getstart-form-leaveinfo .dropdown').dropdown({
		fullTextSearch: true
	});

	$('.getstart-form-leaveinfo__agency .dropdown').dropdown('setting', 'onChange', function(value){
		console.log(value)
	});

	$('.getstart-form-leaveinfo__industry .dropdown').dropdown('setting', 'onChange', function(value){
		console.log(value)
	});

	$('.getstart-form-leaveinfo__phonenumber .dropdown').dropdown('setting', 'onChange', function(value){
		console.log(value)
	});

	$('.getstart-form-leaveinfo__budget .dropdown').dropdown('setting', 'onChange', function(value){
		console.log(value)
	});



	$('.form-set-country button').on('click', function() {

		if(userChooseForm == '2'){
			$('.form-set-country').css({'display': 'none'});
			$('.getstart-form-leaveinfo').css({'display': 'none'})
			$('.getstart-form').removeClass('two-column')
			$('#register').css({'display': 'block'});
			$('#form .prev-btn').css({'display': 'block'});
		}else{
			$('.form-set-country, #register').css({'display': 'none'})
			$('#register').css({'display': 'none'});
			$('.getstart-form').addClass('two-column')
			$('.getstart-form-leaveinfo').css({'display': 'block'})
			$('#form .prev-btn').css({'display': 'block'});
		}
		
	});

	$('#form .prev-btn').on('click', function(){
		$('.form-set-country').css({'display': 'block'});
		$('#register').css({'display': 'none'});
		$('#form .prev-btn').css({'display': 'none'});
		$('.getstart-form-leaveinfo').css({'display': 'none'})
		$('.getstart-form').removeClass('two-column')
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

	$('.getstart-form-leaveinfo .getstart-comp-agreeterm').on('click', function(e){
		$(this).find('.getstart-comp-agreeterm-check').toggleClass('is-checked')
		$(this).find('.vi-checkbox__input').toggleClass('is-checked')
		e.preventDefault()
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
		let attr = $(this).find('input[type="radio"]').attr('value')
		if(attr){
			userChooseForm = attr
			if(attr == '3'){
				$('#form .form-header .title').text('Leave Your Contact Info')
			}else{
				$('#form .form-header .title').text('Create an Account')
			}
		}

	})

	$('.getstart-form-register .form-edit-btn').on('click', function(){
		$('.getstart-form-register__country .dropdown').removeClass('disabled')
		$(this).remove()
	})

});