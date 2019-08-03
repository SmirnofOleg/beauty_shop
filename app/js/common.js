$(document).ready(function() {
	var link = $('.menu-link');
	var link_active = $('.menu-link_active');

	link.click(function(){
		link.toggleClass('menu-link_active');
		// menu.toggleClass('menu_active');
	});

	// стилизуем меню
	$('#my-menu').mmenu({
		extensions: ['widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black', 'position-right'],
		navbar: {
			title: '<a href="#" class="logo"><span>F</span>unny</a>'
		},
		
	});
	// добавили анимацию бургера
	var api = $("#my-menu").data( "mmenu" );
		api.bind( "open:finish", function( ) {
		$('.menu-link').addClass('menu-link_active');
		});
		api.bind( "close:finish", function( ) {
			$('.menu-link').removeClass('menu-link_active');
			});

	//выравниваем блоки по высоте
	$('.carousel-services').on('initialized.owl.carousel', function(){
		setTimeout(function(){
			carouselServices()
		}, 100);
		});
		
	
	//carousel-services слайдер owl-carousel
	$('.carousel-services').owlCarousel({
		 loop: true, //бесконечный слайдер
		nav: true, //навигация
		smartSpeed: 700, //скорость листания
		navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			},
		}
	});

	// выравниваем блоки по высоте в слайдере
	function carouselServices() {
		$('.carousel-services__item__content').equalHeights();
		$('.carousel-services__item').each(function(){
			var ths  = $(this),
				thsh = ths.find('.carousel-services__item__content').outerHeight();
				ths.find('.carousel-services__item__img').css('min-height', thsh);
		});
	}
	carouselServices();

	window.onresize = carouselService;

	/* меняем заголовок в слайдере и оборачиваем последнее слово в span*/
	
	$('.end-span').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});
});