$(document).ready(function(){
    // Clear
    $('.clear-customize').click(function(){
        $('.step-customize').removeClass('no-active');
        $('.step-customize,#step-finish').fadeOut(1500);
        $('#step-1').fadeIn(500);
        $('.step-customize .wrapp-vubrano').hide();
        $('.clear-cl').removeClass('no-vubor').removeClass('vubor');
        $('body').animate({scrollTop: $('#step-1').offset().top}, 1500);
    });
    // 1
    $('#step-1 .conf').click(function(){
        $('#step-1 .conf').addClass('no-vubor');
        $(this).removeClass('no-vubor').addClass('vubor');
        $('#step-1').addClass('no-active');
        $('#step-2').fadeIn();
        $('body').animate({scrollTop: $('#step-2').offset().top}, 1500);
        $('#step-1 .wrapp-vubrano').show();
    });
    // Prev
    $("#step-up-1").click(function(){
        $('#step-1 .conf').removeClass('no-vubor').removeClass('vubor');
        $('#step-1').removeClass('no-active');
        $('#step-2').fadeOut(1500);
        $('body').animate({scrollTop: $('#step-1').offset().top}, 1500);
        $('#step-1 .wrapp-vubrano').hide();
    });
    // 2
    $('#step-2 .size').click(function(){
        $('#step-2 .size').addClass('no-vubor');
        $(this).removeClass('no-vubor').addClass('vubor');
        $('#step-2').addClass('no-active');
        $('#step-2 .wrapp-vubrano').show();
        $('#step-3').fadeIn();
        $('body').animate({scrollTop: $('#step-3').offset().top}, 1500); 
    });
    // Prev
    $("#step-up-2").click(function(){
        $('#step-2 .size').removeClass('no-vubor').removeClass('vubor');
        $('#step-2').removeClass('no-active');
        $('#step-2 .wrapp-vubrano').hide();
        $('#step-3').fadeOut(1500);
        $('body').animate({scrollTop: $('#step-2').offset().top}, 1500);
    });
    // 3
    var step2;
    $('#conf-1').click(function(){step2 = 1;});
    $('#conf-2').click(function(){step2 = 2;});
    $('#step-3 .sel').click(function(){
        $('#step-3 .sel').addClass('no-vubor');
        $(this).removeClass('no-vubor').addClass('vubor');
        $('#step-3').addClass('no-active');
        $('#step-3 .wrapp-vubrano').show();
        if(step2 == 1){
            $('#step-4-1').fadeIn();
            $('body').animate({scrollTop: $('#step-4-1').offset().top}, 1500);  
        } else if(step2 ==2){
            $('#step-4-2').fadeIn();
            $('body').animate({scrollTop: $('#step-4-2').offset().top}, 1500);
        }
    });
    // Prev
    $(".step-up-3").click(function(){
        $('#step-3 .sel').removeClass('no-vubor').removeClass('vubor');
        $('#step-3').removeClass('no-active');
        $('.step-4').fadeOut(1500);
        $('body').animate({scrollTop: $('#step-3').offset().top}, 1500);
        $('#step-3 .wrapp-vubrano').hide();
    });
    // 3
    $('.step-4 .sel').click(function(){
        $('.step-4 .sel').addClass('no-vubor');
        $(this).removeClass('no-vubor').addClass('vubor');
        $('.step-4').addClass('no-active');
        $('.step-4 .wrapp-vubrano').show();
        $('#step-5').fadeIn();
        $('body').animate({scrollTop: $('#step-5').offset().top}, 1500); 
    });
    // Prev
    $("#step-up-4").click(function(){
        $('.step-4 .sel').removeClass('no-vubor').removeClass('vubor');
        $('.step-4').removeClass('no-active');
        $('#step-5').fadeOut(1500);
        if(step2 == 1){
            $('body').animate({scrollTop: $('#step-4-1').offset().top}, 1500);  
        } else if(step2 ==2){
            $('body').animate({scrollTop: $('#step-4-2').offset().top}, 1500);
        }
        $('.step-4 .wrapp-vubrano').hide();
    });
    // 4
    $('#step-5 .sel').click(function(){
        $('#step-5 .sel').addClass('no-vubor');
        $(this).removeClass('no-vubor').addClass('vubor');
        $('#step-5').addClass('no-active');
        $('#step-5 .wrapp-vubrano').show();
        $('#step-finish').fadeIn();
        $('body').animate({scrollTop: $('#step-finish').offset().top}, 1500); 
    });
    // Prev
    $("#step-up-5").click(function(){
        $('#step-5 .sel').removeClass('no-vubor').removeClass('vubor');
        $('#step-5').removeClass('no-active');
        $('#step-finish').fadeOut(1500);
        $('body').animate({scrollTop: $('#step-5').offset().top}, 1500);
        $('#step-5 .wrapp-vubrano').hide();
    });
});