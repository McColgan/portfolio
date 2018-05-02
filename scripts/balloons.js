/* $(document).ready(function(){
    //var parentContainerHeight = $('.balloons-outer').height();
            
        var wScroll = $(this).scrollTop();
    
        //if(wScroll <= parentContainerHeight){
        //if(wScroll > $('.balloons-outer').offset().top - $(window).height()){

            //var offset = wScroll - $('.balloons-outer').offset().top +$(window).height() - 100;
            
            //$('.balloon1').css({'transform': 'translate(0px, '+ wScroll /2 + '%)'});
        $('.balloon1').css('top',-(wScroll * 0.5)+'px');
        //}


        //} */



//});