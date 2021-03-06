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
        } else if (!$('.nav-outer').has('nav-outer--open')){
           $('.nav-outer a').removeClass('is-showing');
        }
        return false;
    });

    // Smooth Scrolling
    var scrollLink = $('.scroll');
    scrollLink.click(function(e){
        e.preventDefault();
        $('body,html').animate({
        scrollTop: $(this.hash).offset().top - $('.header-outer').outerHeight()
        }, 2000);
    });

    // Link switching 
    function linkSwitching(){
        var scrollBarLocation = $(this).scrollTop();
        scrollLink.each(function(){
          var sectionOffset = $(this.hash).offset().top -140;
          if (sectionOffset <= scrollBarLocation){
            $(this).parent().addClass('activelink');
            $(this).parent().siblings().removeClass('activelink');
          }
        });
    }
    
    $(window).scroll(function(){
        linkSwitching();
        update();
    });

    var latestKnownScrollY = 0,
        ticking = false;

    function onScroll(){
        latestKnownScrollY = window.scrollY;
        requestTick();
    }

    function requestTick(){
        if(!ticking){
            requestAnimationFrame(update);
        }
        ticking = true;
    }
    function update(){
        ticking = false;

        var currentScrollY = latestKnownScrollY;

        var wScroll = $(window).scrollTop();

        //if(wScroll <= parentContainerHeight){
        $('.profile-img').css('top',(wScroll * 0.04)+'em');
        $('.box-text-outer').css('top',-(wScroll * 0.02)+'em');
        

        // Skill-box fade in
        if(wScroll > $('.skills-flexbox').offset().top - ($(window).height() / 1)){
            $('.skill-box').each(function(i){
                setTimeout(function(){
                    $('.skill-box').eq(i).addClass('is-showing');
                }, 100 * (i+1));
            });
        }
        // Intro fade in 
        if(wScroll > $('.intro-outer').offset().top - ($(window).height() / 1.3)){
            $('.intro-text').addClass('is-showing');    
        }
        if(wScroll > $('.intro-outer').offset().top - ($(window).height() / 5)){
            $('.intro-h1').addClass('is-showing');
        }
        // Showcase fade in
        if(wScroll > $('.showcase-outer').offset().top - ($(window).height() / 2)){
            $('.showcase-textbox p').addClass('is-showing');
            $('.typing-textbox-static-h1').addClass('is-showing');    
        }
        // intro li fade in
        if(wScroll > $('.intro-outer').offset().top - ($(window).height() / 8)){
            $('.box-text-outer li').each(function(i){
                setTimeout(function(){
                    $('.box-text-outer li').eq(i).addClass('is-showing');
                }, 250 * (i+1));
            });
        }
        if(wScroll > $('.hero').offset().top - $(window).height()){
            $('.hero-mobile-bg').css('top',(wScroll * 0.7 )+'px');
        }
        // Contact Parallax
        if(wScroll > $('.contact').offset().top - ($(window).height())){
            $('#map').css('top',(wScroll * 0.2 )+'px');
        }
        // // Skills Parallax
        if(wScroll > $('.skills').offset().top - ($(window).height())){
            $('.paint-texture').css('top',(wScroll * 0.2)+'px');
        }

        var parentContainerHeight = $('.balloons-outer').height();
        var offset = wScroll - $('.balloons-outer').offset().top +$(window).height() - 500;
            //if(wScroll <= parentContainerHeight){
        if(wScroll > $('.balloons-outer').offset().top - $(window).height()){
            $('.balloon1').css('top',(wScroll * 0.2 )+'px');
            $('.balloon2').css('top',(wScroll * 0.35 )+'px');
            $('.balloon3').css('top',(wScroll * 0.2 )+'px');
            $('.balloon4').css('top',(-wScroll * 0.1 )+'px');
        }
    }

    requestAnimationFrame(update);
    window.addEventListener('scroll', onScroll, false);

});