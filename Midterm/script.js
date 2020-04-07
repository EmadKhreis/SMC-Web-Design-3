$(document).ready(function(){
	//we write everything here
    $('#productsCarousel').carousel({
        interval: 3000
    });

$('#playButton').click(function () {
    $('#productsCarousel').carousel('cycle');
});
$('#pauseButton').click(function () {
    $('#productsCarousel').carousel('pause');
});

});