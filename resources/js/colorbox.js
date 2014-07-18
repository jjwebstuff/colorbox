// Can also be used with $(document).ready()
$(window).load(function() {
	//add a mouse over handler to the word coordinates that is are {}s - it will cause the related square to shake
	$('.carousel').mouseenter(function() {
		$('#slider-arrow-right').removeClass("animated fadeOutRight").addClass("animated fadeInRight");
		$('#slider-arrow-left').removeClass("animated fadeOutLeft").addClass("animated fadeInLeft");
	}).mouseleave(function(){
		$('#slider-arrow-right').removeClass("animated fadeInRight").addClass("animated fadeOutRight");
		$('#slider-arrow-left').removeClass("animated fadeInLeft").addClass("animated fadeOutLeft");
  	});
});