$(document).ready(function(){
	//we write everything here
document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
    var options = {
        fullWidth: true, 
        indicators: true
    };
    var elem = document.querySelector('.carousel');
    var instance = M.Carousel.init(elem, options);
});
$('#playButton').click(function () {
    $('#productsCarousel').carousel('cycle');
});
$('#pauseButton').click(function () {
    $('#productsCarousel').carousel('pause');
});

$("#modalSubscriptionForm").modal('show');

});