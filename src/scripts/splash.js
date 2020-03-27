$(function() {
    setTimeout(function() {
        $('.fly-in-text').removeClass('hidden');
    }, 500);
    setTimeout(function() {
        $('.preloader').addClass('preload-finish');
    }, 3000);
    setTimeout(function() {
        document.body.style.overflowY="scroll";
    }, 3000);
    
})();
