$(document).ready(function(){
    var parametr2 = 0;
    // Clear
    $('.clear-customize').click(function(){
        $('.step-customize').removeClass('no-active');
        $('.step-customize,#step-finish').fadeOut(1500);
        $('#step-1').fadeIn(500);
        $('.step-customize .wrapp-vubrano').hide();
        $('.clear-cl').removeClass('no-vubor').removeClass('vubor');
        $('body').animate({scrollTop: $('#step-1').offset().top}, 1500);
        parametr2 = 0;
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
    var step2;
    $('#pocket-1').click(function(){step2 = 1;});
    $('#pocket-2').click(function(){step2 = 2;});
    $('#step-2 .pocket').click(function(){
        $('#step-2 .pocket').addClass('no-vubor');
        $(this).removeClass('no-vubor').addClass('vubor');
        $('#step-2').addClass('no-active');
        $('#step-2 .wrapp-vubrano').show();
        if(step2 == 1){
            $('#step-3-1').fadeIn();
            $('body').animate({scrollTop: $('#step-3-1').offset().top}, 1500);  
        } else if(step2 ==2){
            $('#step-3-2').fadeIn();
            $('body').animate({scrollTop: $('#step-3-2').offset().top}, 1500);
        }
    });
    // Prev
    $(".step-up-2").click(function(){
        $('#step-2 .pocket').removeClass('no-vubor').removeClass('vubor');
        $('#step-2').removeClass('no-active');
        $('.step-3').fadeOut(1500);
        $('body').animate({scrollTop: $('#step-2').offset().top}, 1500);
        $('#step-2 .wrapp-vubrano').hide();
    });
    // 3
    $('.step-3 .size').click(function(){
        if(step2 == 1){
            $('.step-3 .size').addClass('no-vubor');
            $(this).removeClass('no-vubor').addClass('vubor');
            $('.step-3').addClass('no-active');
            $('.step-3 .wrapp-vubrano').show();
            $('#step-4').fadeIn();
            $('body').animate({scrollTop: $('#step-4').offset().top}, 1500);
        } else if(step2 ==2){
            $(this).parent().find('.size').addClass('no-vubor');
            $(this).removeClass('no-vubor').addClass('vubor');
            if(parametr2 == 0){
                parametr2 =1;
                
            } else{
                $('.step-3').addClass('no-active');
                $('.step-3 .wrapp-vubrano').show();
                $('#step-4').fadeIn();
                $('body').animate({scrollTop: $('#step-4').offset().top}, 1500);
            }
        }       
    });
    // Prev
    $("#step-up-3").click(function(){
        $('.step-3 .size').removeClass('no-vubor').removeClass('vubor');
        $('.step-3').removeClass('no-active');
        $('#step-4').fadeOut(1500);
        $('.step-3 .wrapp-vubrano').hide();
        if(step2 == 1){
            $('body').animate({scrollTop: $('#step-3-1').offset().top}, 1500);
        } else if(step2 ==2){
            $('body').animate({scrollTop: $('#step-3-2').offset().top}, 1500);
            parametr2 = 0;
        }
    });
    // 4
    $('#step-4 .sel').click(function(){
        $('#step-4 .sel').addClass('no-vubor');
        $(this).removeClass('no-vubor').addClass('vubor');
        $('#step-4').addClass('no-active');
        $('#step-4 .wrapp-vubrano').show(); 
        $('#step-5').fadeIn();
        $('body').animate({scrollTop: $('#step-5').offset().top}, 1500);
        $('#step-4 .wrapp-vubrano').show();
    });  
    // Prev
    $("#step-up-4").click(function(){
        $('#step-4 .sel').removeClass('no-vubor').removeClass('vubor');
        $('#step-4').removeClass('no-active');
        $('#step-5').fadeOut(1500);
        $('body').animate({scrollTop: $('#step-4').offset().top}, 1500);
        $('#step-4 .wrapp-vubrano').hide();
    });
    // 5
    $('#step-5 .sel').click(function(){
        $('#step-5 .sel').addClass('no-vubor');
        $(this).removeClass('no-vubor').addClass('vubor');
        $('#step-5').addClass('no-active');
        $('#step-5 .wrapp-vubrano').show();
        if(step2 == 1){
            $('#step-6-1').fadeIn();
            $('body').animate({scrollTop: $('#step-6-1').offset().top}, 1500);  
        } else if(step2 == 2){
            $('#step-6-2').fadeIn();
            $('body').animate({scrollTop: $('#step-6-2').offset().top}, 1500);
        }
    }); 
    // Prev
    $(".step-up-5").click(function(){
        $('#step-5 .sel').removeClass('no-vubor').removeClass('vubor');
        $('#step-5').removeClass('no-active');
        $('.step-6').fadeOut(1500);
        $('body').animate({scrollTop: $('#step-5').offset().top}, 1500);
        $('#step-5 .wrapp-vubrano').hide();
    });
    // 6
    var step6;
    $('#closure-1').click(function(){step6 = 1;});
    $('#closure-2').click(function(){step6 = 2;});
    $('.step-6 .sel').click(function(){
        $('.step-6 .sel').addClass('no-vubor');
        $(this).removeClass('no-vubor').addClass('vubor');
        $('.step-6').addClass('no-active');
        $('.step-6 .wrapp-vubrano').show();
        if(step6 == 1){
            $('#step-finish').fadeIn();
            $('body').animate({scrollTop: $('#step-finish').offset().top}, 1500);  
        } else{
            if(step2 == 1){
                $('#step-7-1').fadeIn();
                $('body').animate({scrollTop: $('#step-7-1').offset().top}, 1500);  
            } else if(step2 ==2){
                $('#step-7-2').fadeIn();
                $('body').animate({scrollTop: $('#step-7-2').offset().top}, 1500); 
            }  
        }
    });
    // Prev
    $(".step-up-6").click(function(){
        $('.step-6 .sel').removeClass('no-vubor').removeClass('vubor');
        $('.step-6').removeClass('no-active');
        $('.step-7').fadeOut(1500);
        $('.step-6 .wrapp-vubrano').hide();
        if(step2 == 1){
            $('body').animate({scrollTop: $('#step-6-1').offset().top}, 1500);
        } else if(step2 ==2){
            $('body').animate({scrollTop: $('#step-6-2').offset().top}, 1500);
        }
    });
    // 7
    $('.step-7 .sel').click(function(){
        $('.step-7 .sel').addClass('no-vubor');
        $(this).removeClass('no-vubor').addClass('vubor');
        $('.step-7').addClass('no-active');
        $('.step-7 .wrapp-vubrano').show();
        $('#step-finish').fadeIn();
        $('body').animate({scrollTop: $('#step-finish').offset().top}, 1500); 
    });
    // Prev
    $("#step-up-7").click(function(){
        if(step6 == 1){
            $('#step-6-2 .sel').removeClass('no-vubor').removeClass('vubor');
            $('#step-6-2').removeClass('no-active');
            $('#step-finish').fadeOut(1500);
            $('body').animate({scrollTop: $('#step-6-2').offset().top}, 1500);
            $('#step-6-2 .wrapp-vubrano').hide();
        } else{
            $('.step-7 .sel').removeClass('no-vubor').removeClass('vubor');
            $('.step-7').removeClass('no-active');
            $('#step-finish').fadeOut(1500);
            $('.step-7 .wrapp-vubrano').hide();
            if(step2 == 1){
                $('body').animate({scrollTop: $('#step-7-1').offset().top}, 1500);
            } else if(step2 ==2){
                $('body').animate({scrollTop: $('#step-7-2').offset().top}, 1500);
            }
        }     
    });
});