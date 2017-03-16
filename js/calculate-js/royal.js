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
        $('.step-3 .size').addClass('no-vubor');
        $(this).removeClass('no-vubor').addClass('vubor');
        $('.step-3').addClass('no-active');
        $('.step-3 .wrapp-vubrano').show();
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
        $('.step-3 .size').removeClass('no-vubor').removeClass('vubor');
        $('.step-3').removeClass('no-active');
        $('.step-4').fadeOut(1500);
        $('.step-3 .wrapp-vubrano').hide();
        if(step2 == 1){
            $('body').animate({scrollTop: $('#step-3-1').offset().top}, 1500);  
        } else if(step2 ==2){
            $('body').animate({scrollTop: $('#step-3-2').offset().top}, 1500);
        }        
    });
    // 4
    $('.step-4 .size').click(function(){
        if(step2 == 1){
            $('.step-4 .size').addClass('no-vubor');
            $(this).removeClass('no-vubor').addClass('vubor');
            $('.step-4').addClass('no-active');
            $('.step-4 .wrapp-vubrano').show();
            $('#step-5').fadeIn();
            $('body').animate({scrollTop: $('#step-5').offset().top}, 1500);
        } else if(step2 ==2){
            $(this).parent().find('.size').addClass('no-vubor');
            $(this).removeClass('no-vubor').addClass('vubor');
            if(parametr2 == 0){
                parametr2 =1;

            } else{
                $('.step-4').addClass('no-active');
                $('.step-4 .wrapp-vubrano').show();
                $('#step-5').fadeIn();
                $('body').animate({scrollTop: $('#step-5').offset().top}, 1500);
            }
        }       
    });
    // Prev
    $("#step-up-4").click(function(){
        $('.step-4 .size').removeClass('no-vubor').removeClass('vubor');
        $('.step-4').removeClass('no-active');
        $('#step-5').fadeOut(1500);
        $('.step-4 .wrapp-vubrano').hide();
        if(step2 == 1){
            $('body').animate({scrollTop: $('#step-4-1').offset().top}, 1500);  
        } else if(step2 ==2){
            parametr2 = 0;
            $('body').animate({scrollTop: $('#step-4-2').offset().top}, 1500);
        }        
    });
    // 5
    $('#step-5 .sel').click(function(){
        $('#step-5 .sel').addClass('no-vubor');
        $(this).removeClass('no-vubor').addClass('vubor');
        $('#step-5').addClass('no-active');
        $('#step-5 .wrapp-vubrano').show();
        $('#step-6').fadeIn();
        $('body').animate({scrollTop: $('#step-6').offset().top}, 1500);
    });   
    // Prev
    $("#step-up-5").click(function(){
        $('#step-5 .sel').removeClass('no-vubor').removeClass('vubor');
        $('#step-5').removeClass('no-active');
        $('#step-6').fadeOut(1500);
        $('#step-5 .wrapp-vubrano').hide();
        $('body').animate({scrollTop: $('#step-5').offset().top}, 1500);      
    });
    // 6
    $('#step-6 .sel').click(function(){
        $('#step-6 .sel').addClass('no-vubor');
        $(this).removeClass('no-vubor').addClass('vubor');
        $('#step-6').addClass('no-active');
        $('#step-6 .wrapp-vubrano').show();
        $('#step-7').fadeIn();
        $('body').animate({scrollTop: $('#step-7').offset().top}, 1500);
    });   
    // Prev
    $("#step-up-6").click(function(){
        $('#step-6 .sel').removeClass('no-vubor').removeClass('vubor');
        $('#step-6').removeClass('no-active');
        $('#step-7').fadeOut(1500);
        $('#step-6 .wrapp-vubrano').hide();
        $('body').animate({scrollTop: $('#step-6').offset().top}, 1500);      
    });
    // 7
    $('#step-7 .sel').click(function(){
        $('#step-7 .sel').addClass('no-vubor');
        $(this).removeClass('no-vubor').addClass('vubor');
        $('#step-7').addClass('no-active');
        $('#step-7 .wrapp-vubrano').show();
        $('#step-8').fadeIn();
        $('body').animate({scrollTop: $('#step-8').offset().top}, 1500);
    });   
    // Prev
    $("#step-up-7").click(function(){
        $('#step-7 .sel').removeClass('no-vubor').removeClass('vubor');
        $('#step-7').removeClass('no-active');
        $('#step-8').fadeOut(1500);
        $('#step-7 .wrapp-vubrano').hide();
        $('body').animate({scrollTop: $('#step-7').offset().top}, 1500);      
    });
    // 8
    $('#step-8 .sel').click(function(){
        $('#step-8 .sel').addClass('no-vubor');
        $(this).removeClass('no-vubor').addClass('vubor');
        $('#step-8').addClass('no-active');
        $('#step-8 .wrapp-vubrano').show();
        $('#step-9').fadeIn();
        $('body').animate({scrollTop: $('#step-9').offset().top}, 1500);
    }); 
    // Prev
    $("#step-up-8").click(function(){
        $('#step-8 .sel').removeClass('no-vubor').removeClass('vubor');
        $('#step-8').removeClass('no-active');
        $('#step-9').fadeOut(1500);
        $('#step-8 .wrapp-vubrano').hide();
        $('body').animate({scrollTop: $('#step-8').offset().top}, 1500);      
    });
    // 9
    $('#step-9 .sel').click(function(){
        $('#step-9 .sel').addClass('no-vubor');
        $(this).removeClass('no-vubor').addClass('vubor');
        $('#step-9').addClass('no-active');
        $('#step-9 .wrapp-vubrano').show();
        $('#step-10').fadeIn();
        $('body').animate({scrollTop: $('#step-10').offset().top}, 1500);
    }); 
    // Prev
    $("#step-up-9").click(function(){
        $('#step-9 .sel').removeClass('no-vubor').removeClass('vubor');
        $('#step-9').removeClass('no-active');
        $('#step-10').fadeOut(1500);
        $('#step-9 .wrapp-vubrano').hide();
        $('body').animate({scrollTop: $('#step-9').offset().top}, 1500);      
    });
    // 10
    $('#step-10 .sel').click(function(){
        $('#step-10 .sel').addClass('no-vubor');
        $(this).removeClass('no-vubor').addClass('vubor');
        $('#step-10').addClass('no-active');
        $('#step-10 .wrapp-vubrano').show();
        if(step2 == 1){
            $('#step-13').fadeIn();
            $('body').animate({scrollTop: $('#step-13').offset().top}, 1500);  
        } else if(step2 ==2){
            $('#step-11').fadeIn();
            $('body').animate({scrollTop: $('#step-11').offset().top}, 1500);
        }
    });
    // Prev
    $("#step-up-10").click(function(){
        $('#step-10 .sel').removeClass('no-vubor').removeClass('vubor');
        $('#step-10').removeClass('no-active');
        $('#step-11').fadeOut(1500);
        $('#step-10 .wrapp-vubrano').hide();
        $('body').animate({scrollTop: $('#step-10').offset().top}, 1500);      
    });
    // 11
    var step9;
    $('#closure-1').click(function(){step9 = 1;});
    $('#closure-2').click(function(){step9 = 2;});
    $('#step-11 .sel').click(function(){
        $('#step-11 .sel').addClass('no-vubor');
        $(this).removeClass('no-vubor').addClass('vubor');
        $('#step-11').addClass('no-active');
        $('#step-11 .wrapp-vubrano').show();
        if(step9 == 1){
            $('#step-12-1').fadeIn();
            $('body').animate({scrollTop: $('#step-12-1').offset().top}, 1500);  
        } else if(step9 ==2){
            $('#step-12-2').fadeIn();
            $('body').animate({scrollTop: $('#step-12-2').offset().top}, 1500);
        }
    });
    // Prev
    $(".step-up-11").click(function(){
        $('#step-11 .sel').removeClass('no-vubor').removeClass('vubor');
        $('#step-11').removeClass('no-active');
        $('.step-12').fadeOut(1500);
        $('#step-11 .wrapp-vubrano').hide();
        $('body').animate({scrollTop: $('#step-11').offset().top}, 1500);      
    });
    // 12
    $('.step-12 .sel').click(function(){
        $('.step-12 .sel').addClass('no-vubor');
        $(this).removeClass('no-vubor').addClass('vubor');
        $('.step-12').addClass('no-active');
        $('.step-12 .wrapp-vubrano').show();
        if(step9 == 1){
            $('#step-14').fadeIn();
            $('body').animate({scrollTop: $('#step-14').offset().top}, 1500);  
        } else if(step9 ==2){
            $('#step-13').fadeIn();
            $('body').animate({scrollTop: $('#step-13').offset().top}, 1500);
        }
    });
    // Prev
    $("#step-up-12").click(function(){
        if(step2 == 1){
            $('#step-10 .sel').removeClass('no-vubor').removeClass('vubor');
            $('#step-10').removeClass('no-active');
            $('#step-13').fadeOut(1500);
            $('#step-10 .wrapp-vubrano').hide();
            $('body').animate({scrollTop: $('#step-10').offset().top}, 1500);
        } else if(step2 ==2){
            $('.step-12 .sel').removeClass('no-vubor').removeClass('vubor');
            $('.step-12').removeClass('no-active');
            $('#step-13').fadeOut(1500);
            $('.step-12 .wrapp-vubrano').hide();
            $('body').animate({scrollTop: $('#step-12-2').offset().top}, 1500);
        }

    });
    // 13
    $('#step-13 .sel').click(function(){
        $('#step-13 .sel').addClass('no-vubor');
        $(this).removeClass('no-vubor').addClass('vubor');
        $('#step-13').addClass('no-active');
        $('#step-13 .wrapp-vubrano').show();
        $('#step-14').fadeIn();
        $('body').animate({scrollTop: $('#step-14').offset().top}, 1500); 
    });    
    // Prev
    $("#step-up-13").click(function(){
        if(step9 == 1){
            $('.step-12 .sel').removeClass('no-vubor').removeClass('vubor');
            $('.step-12').removeClass('no-active');
            $('#step-14').fadeOut(1500);
            $('.step-12 .wrapp-vubrano').hide();
            $('body').animate({scrollTop: $('#step-12-1').offset().top}, 1500);
        } else {
            $('#step-13 .sel').removeClass('no-vubor').removeClass('vubor');
            $('#step-13').removeClass('no-active');
            $('#step-14').fadeOut(1500);
            $('#step-13 .wrapp-vubrano').hide();
            $('body').animate({scrollTop: $('#step-13').offset().top}, 1500);
        }

    });
    // 14
    $('#step-14 .sel').click(function(){
        if(step9 == 1){
            $('#step-14 .sel').addClass('no-vubor');
            $(this).removeClass('no-vubor').addClass('vubor');
            $('#step-14').addClass('no-active');
            $('#step-14 .wrapp-vubrano').show();
            $('#step-finish').fadeIn();
            $('body').animate({scrollTop: $('#step-finish').offset().top}, 1500); 
        } else {
            $('#step-14 .sel').addClass('no-vubor');
            $(this).removeClass('no-vubor').addClass('vubor');
            $('#step-14').addClass('no-active');
            $('#step-14 .wrapp-vubrano').show();
            if(step2 == 1){
                $('#step-15-1').fadeIn();
                $('body').animate({scrollTop: $('#step-15-1').offset().top}, 1500);  
            } else if(step2 == 2){
                $('#step-15-2').fadeIn();
                $('body').animate({scrollTop: $('#step-15-2').offset().top}, 1500);
            }
        }
    });
    // Prev
    $(".step-up-14").click(function(){
        $('#step-14 .sel').removeClass('no-vubor').removeClass('vubor');
        $('#step-14').removeClass('no-active');
        $('.step-15').fadeOut(1500);
        $('#step-14 .wrapp-vubrano').hide();
        $('body').animate({scrollTop: $('#step-14').offset().top}, 1500);      
    });
    // 15
    $('.step-15 .sel').click(function(){
        $('.step-15 .sel').addClass('no-vubor');
        $(this).removeClass('no-vubor').addClass('vubor');
        $('.step-15').addClass('no-active');
        $('.step-15 .wrapp-vubrano').show();
        $('#step-finish').fadeIn();
        $('body').animate({scrollTop: $('#step-finish').offset().top}, 1500); 
    });
    // Prev
    $("#step-up-15").click(function(){
        if(step9 == 1){
            $('#step-14 .sel').removeClass('no-vubor').removeClass('vubor');
            $('#step-14').removeClass('no-active');
            $('#step-finish').fadeOut(1500);
            $('#step-14 .wrapp-vubrano').hide();
            $('body').animate({scrollTop: $('#step-12').offset().top}, 1500); 
        } else{
            $('.step-15 .sel').removeClass('no-vubor').removeClass('vubor');
            $('.step-15').removeClass('no-active');
            $('#step-finish').fadeOut(1500);
            $('.step-15 .wrapp-vubrano').hide();
            if(step2 == 1){
                $('body').animate({scrollTop: $('#step-15-1').offset().top}, 1500);  
            } else if(step2 == 2){
                $('body').animate({scrollTop: $('#step-15-2').offset().top}, 1500);
            }   
        }      
    });
});