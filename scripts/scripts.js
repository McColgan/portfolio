$(document).ready(function(){

    // Nav-Icon Animation
    $('#nav-icon').click(function(){
        $('.nav-outer').toggleClass('nav-outer--open', 400);
        $(this).toggleClass('open');
        $('.home-nav').fadeTo(300, 1);
        $('.intro-nav').fadeTo(500, 1);
        $('.skills-nav').fadeTo(700, 1);
        $('.portfolio-nav').fadeTo(900, 1);
        $('.contact-nav').fadeTo(1100, 1);

        return false;
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
        //var parentContainerHeight = $('.showcase').height();
        var wScroll = $(window).scrollTop();

        //if(wScroll <= parentContainerHeight){
            $('.box-text-outer').css('top',-(wScroll * 0.02)+'em');
            $('.profile-img').css('top',(wScroll * 0.07)+'em');

            if(wScroll > $('.skills-flexbox').offset().top - ($(window).height() / 1.7)){
                $('.skill-box').each(function(i){

                    setTimeout(function(){
                    
                        $('.skill-box').eq(i).addClass('is-showing');
                    }, (700 * (Math.exp(i * 0.14))) - 400);
                });
            }
        
    }
    $(window).scroll(function(){
        parallax();
        //linkSwitching();
        //fadeOut();
    });
});