$(document).ready(function() {
	$("#lightSlider").lightSlider({
		item: $(window).width() < 900 ? 2 : 4,
		autoWidth: false,
		slideMove: 1, // slidemove will be 1 if loop is true
		slideMargin: 10,
		mode: "slide",
	});
});