//$(document).ready(function(){
$(function(){
    $("#call_phone").click(function(){
        $("#call_phone_style").css('display','inline-block');
    });
    $("#email").click(function(){
        $("#email_style").css('display','inline-block');
    });
    $("#call_phone").mouseenter(function(){
        $("#call_phone_legend").css('display','inline-block');
    });
    $("#call_phone").mouseleave(function(){
        $("#call_phone_legend").css('display','none');
    });
    $("#email").mouseenter(function(){
        $("#email_legend").css('display','inline-block');
    });
    $("#email").mouseleave(function(){
        $("#email_legend").css('display','none');
    });
    $("#linkedIn").mouseenter(function(){
        $("#linkedIn_legend").css('display','inline-block');
    });
    $("#linkedIn").mouseleave(function(){
        $("#linkedIn_legend").css('display','none');
    });
    $("#add_cv").mouseenter(function(){
        $("#add_cv_legend").css('display','inline-block');
    });
    $("#add_cv").mouseleave(function(){
        $("#add_cv_legend").css('display','none');
    });
    $("#audio_logo").click(function(){
        $("#audio_description").css('display','flex');
    });
    /*$("#audio_show").click(function(){
        $("#audio").css('display','none');
    });*/
    $("#github").mouseenter(function(){
        $("#github_legend").css('display','inline-block');
    });
    $("#github").mouseleave(function(){
        $("#github_legend").css('display','none');
    });
});

 setTimeout('$("#audio_description").hide()',8500);

function showAudio(){
    let elem = document.getElementById("audio");
    elem.classList.toggle("active_audio");
}


//let audio = document.getElementById('audio');
/* function hide(elem) {
    elem.classList.toggle('audio');
}*/


