$(document).ready(function () {
    jQuery('ul.nav li.dropdown').hover(function () {
      jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
    }, function () {
      jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
    });
        
    startCamera();



});
function startCamera() {
    jQuery('#camera_wrap').camera({ fx: 'scrollLeft', time: 2000, loader: 'none', playPause: false, height: '65%', pagination: true });
}