$(document).ready(function(){
    
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
    
});