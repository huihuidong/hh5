    //   window.onload=function(){
    //     var audio=document.getElementsByTagName('audio');
    //      $('.music').click(function(){
    //     if(audio.paused){
    //         audio.play();
    //         $(this).attr('class','music muc')
    //     }else{
    //         audio.pause();
    //         $(this).attr('class','music')
    //     }
        
    // });
    //   }

$(function(){
    var audio=document.getElementsByTagName('audio')[0];
    
    $('.music').click(function(){
        if(audio.paused){
            audio.play();
            $(this).attr('class','music muc')
        }else{
            audio.pause();
            $(this).attr('class','music')
        }
        
    });
     
})
