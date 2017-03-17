$(document).ready(function(){
    
    $('.product-cart .desc-bl .addcart-btn').click(function(){
        $('body').animate({scrollTop: $('.customize-line').offset().top-115}, 1500);
        return false; 
    });
    
    /* Tabs */
    var productTabs = $('.content-product .tabs-wrapp .tab');
    var productOpis = $('.content-product .opis-wrapp .opis');
	
	$(productTabs).click(function(){
        $('.content-product .tab').removeClass('active');
        $('.content-product .opis-wrapp .opis').hide();
		$(this).addClass('active');
		var ind = $(this).index();
		$(productOpis[ind]).fadeIn();
	});
    
	var activeOpis;
    $('.content-product .opis .open-opis').click(function(){
        $('.content-product .opis .wrapp-txt').slideUp();
        $('.content-product .opis .open-opis').removeClass('active');
		activeOpis = $(this).parent().find('.wrapp-txt').css('display');
		if (activeOpis == 'block'){
			$(this).parent().find('.wrapp-txt').slideUp();
			$(this).removeClass('active');
		} else{
			$(this).parent().find('.wrapp-txt').slideDown();	
			$(this).addClass('active');
		}
	}); 
    
    if ($(window).width() > 1160){
        $('#multizoom1').addimagezoom({
            speed: 1500,
            descpos: true,
            imagevertcenter: true,
            magvertcenter: true,
            zoomrange: [3, 10],
            magnifiersize: [300,300],
            magnifierpos: 'right',
            cursorshadecolor: '#fff',
            cursorshade: true
        });   
    }
    
    if ($(window).width() < 1160){
        $('.small-foto-bl .nav-foto').attr('data-fancybox','gallery');
    }
});