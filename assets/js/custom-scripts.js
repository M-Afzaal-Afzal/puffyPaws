$('.drawer-menu-opener').click(function (e) {
	e.preventDefault();
	$('.drawer-menu').toggleClass('shown');
});
$('.drawer-menu-closer').click(function (e) {
	e.preventDefault();
	$('.drawer-menu').removeClass('shown');
});
$('.drawer-menu-li a').click(function () {
	$('.drawer-menu').removeClass('shown');
});

$('.roadmap-item .roadmap-label-outer').hover(function (){
	$(this).next('.roadmap-content').fadeToggle();
});

var $example1 = $('.artist-heading-1').hide();
var $example2 = $('.artist-heading-2').hide();
$example1.show().arctext({ radius: 900 });
$example2.show().arctext({ radius: 800 });

var $genesis1 = $('.genesis-text-1').hide();
var $genesis2 = $('.genesis-text-2').hide();
$genesis1.show().arctext({ radius: 500 });
$genesis2.show().arctext({ radius: 400 });

var $faqheading = $('.faq-heading').hide();
$faqheading.show().arctext({ radius: 300 });

var $disclaimerheading = $('.disclaimer-heading').hide();
$('#exampleModal').on('shown.bs.modal', function (e) {

	$disclaimerheading.show().arctext({ radius: 500 });
})

jQuery(document).ready(function ($) {
	$('.walking-loops-section').slick({
		speed: 5000,
		autoplay: true,
		autoplaySpeed: 0,
		centerMode: true,
		cssEase: 'linear',
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		infinite: true,
		initialSlide: 1,
		arrows: false,
		buttons: false,
		pauseOnFocus: false,
		pauseOnHover: false
	});
	$('.roadmap-cats-carousel').slick({
		speed: 5000,
		autoplay: true,
		autoplaySpeed: 0,
		centerMode: true,
		cssEase: 'linear',
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		infinite: true,
		initialSlide: 1,
		arrows: false,
		buttons: false,
		pauseOnFocus: false,
		pauseOnHover: false
	});
});