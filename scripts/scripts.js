$(document).ready(function(){

    // Nav-Icon Animation
    $('#nav-icon').click(function(){
        $('.nav-outer').toggleClass('nav-outer--open', 400);
        $(this).toggleClass('open');
        
        if ($('.nav-outer').has('nav-outer--open')){
            $('.nav-outer a').each(function(i){
                setTimeout(function(){
                    $('.nav-outer a').eq(i).addClass('is-showing');
                }, 200 * (i+1));
            });
        } 
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

    

    //Parallax / Scroll events
    function parallax(){
        //var parentContainerHeight = $('.showcase').height();
        var wScroll = $(window).scrollTop();

        //if(wScroll <= parentContainerHeight){

        $('.box-text-outer').css('top',-(wScroll * 0.02)+'em');
        $('.profile-img').css('top',(wScroll * 0.035)+'em');

        // Skill-box fade in
        if(wScroll > $('.skills-flexbox').offset().top - ($(window).height() / 1.4)){
            $('.skill-box').each(function(i){
                setTimeout(function(){
                    $('.skill-box').eq(i).addClass('is-showing');
                }, 250 * (i+1));
                });
        }
        // Intro fade in 
        if(wScroll > $('.intro-outer').offset().top - ($(window).height() / 2)){
            $('.intro-text').addClass('is-showing');    
        }
        // Showcase fade in
        if(wScroll > $('.showcase-outer').offset().top - ($(window).height() / 2)){
            $('.showcase-textbox p').addClass('is-showing');    
        }
        // intro li fade in
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