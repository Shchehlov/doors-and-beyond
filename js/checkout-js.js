$(document).ready(function(){
    
    $('.method-wrapp .method').click(function(){
        $('.method-wrapp .method').removeClass('active');
        $(this).addClass('active');
        $('.method-form').hide();
    });
    
    $('.method-visa').click(function(){
        $('.visa-wrapp').fadeIn();
        $('.submit-bl input[type=submit]').val('submit my order');
    });
    $('.method-paypal').click(function(){
        $('.paypal-wrapp').fadeIn();
        $('.submit-bl input[type=submit]').val('PROCEED TO PAYPAL');
    });
    $('.method-billMeLater').click(function(){
        $('.billMeLater-wrapp').fadeIn();
        $('.submit-bl input[type=submit]').val('submit my order');
    });
    $('.method-amazon').click(function(){
        $('.amazon-wrapp').fadeIn();
        $('.submit-bl input[type=submit]').val('submit my order');
    });
    
});