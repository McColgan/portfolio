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
        $('.profile-img').css('top',(wScroll * 0.035)+'em');

        if(wScroll > $('.skills-flexbox').offset().top - ($(window).height() / 1.7)){
            $('.skill-box').each(function(i){
                setTimeout(function(){
                    $('.skill-box').eq(i).addClass('is-showing');
                }, 250 * (i+1));
                });
        }

        if(wScroll > $('.intro-outer').offset().top - ($(window).height() / 2)){
            $('.intro-text').addClass('is-showing');    
        }

        if(wScroll > $('.showcase-outer').offset().top - ($(window).height() / 2)){
            $('.showcase-textbox p').addClass('is-showing');    
        }

        if(wScroll > $('.intro-outer').offset().top - ($(window).height() / 5)){
            $('.box-text-outer li').each(function(i){
                setTimeout(function(){
                    $('.box-text-outer li').eq(i).addClass('is-showing');
                }, 250 * (i+1));
                });
        }
        

        

        
    }

    // Balloons
    function balloons(){
        //var parentContainerHeight = $('.balloons-outer').height();
        var wScroll = $(this).scrollTop();
        var offset = wScroll - $('.balloons-outer').offset().top +$(window).height() - 500;
        //if(wScroll <= parentContainerHeight){
            if(wScroll > $('.balloons-outer').offset().top - $(window).height()){
                $('.balloon1').css('top',(wScroll * 0.2 )+'px');
                $('.balloon2').css('top',(wScroll * 0.35 )+'px');
                $('.balloon3').css('top',(wScroll * 0.2 )+'px');
                $('.balloon4').css('top',(-wScroll * 0.1 )+'px');
                $('.balloons-container-img').css('top',(-wScroll * 0.25 )+'px');
            }
        //}
    } 



    //var parentContainerHeight = $('.balloons-outer').height();
    $(window).scroll(function(){
        parallax();
        balloons();
        //linkSwitching();
        //fadeOut();
        
        
    });
});