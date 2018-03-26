$(document).ready(function(){

    // Nav-Icon Animation
    $('#nav-icon').click(function(){
        $('.nav-outer').toggleClass('nav-outer--open', 400);
        $(this).toggleClass('open');
    });

    // Smooth Scrolling
    var scrollLink = $('.scroll');
    scrollLink.click(function(e){
        e.preventDefault();
        $('body,html').animate({
        scrollTop: $(this.hash).offset().top - $('.header-outer').outerHeight()
        }, 1500);
    });

    //Parallax 
    function parallax(){
        var wScroll = $(window).scrollTop();
        $('.box-text-outer').css('top',-(wScroll * 0.02)+'em');
    }
    $(window).scroll(function(){
        parallax();
        //linkSwitching();
        //fadeOut();
    });
});