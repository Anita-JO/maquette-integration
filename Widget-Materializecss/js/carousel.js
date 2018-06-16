$(document).ready(function(){
	$('.carousel').carousel();
	// init carousel slider
	$('.carousel.carousel-slider').carousel({
		fullWidth: true
	});
	Materialize.toast('Hello World', 3000);
});