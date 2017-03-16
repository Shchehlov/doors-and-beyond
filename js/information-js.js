$(document).ready(function(){
    
    /*Плавный скролл*/	
    $('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({scrollTop: $(el).offset().top-110}, 1500);
        return false; 
    });
    /*Плавный скролл*/
    
    /* FAQ page */
	var activeOpis;
	$('.question-wrapp .answ').click(function(){
		$('.question-wrapp .hidden-text').slideUp();
		$('.question-wrapp .answ').removeClass('active');
		activeOpis = $(this).parent().find('.hidden-text').css('display');
		if (activeOpis == 'block'){
			$(this).parent().find('.hidden-text').slideUp();
			$(this).removeClass('active');
		} else{
			$(this).parent().find('.hidden-text').slideDown();
			$(this).addClass('active');
		}
	});
    
	var helpTabs = $('.help-bl .help-tabs .help-tab');
	var helpHiden = $('.help-bl .question-wrapp');
	$(helpTabs).click(function(){
		$('.help-bl .help-tabs .help-tab').removeClass('active');
		$('.help-bl .question-wrapp').hide();
		$(this).addClass('active');
		var indTab = $(this).index();
		$(helpHiden[indTab]).fadeIn();
	});
	
	$('.downloads-bl .present-btn-1').click(function(){$('.downloads-bl .present-1').slideToggle();});
	$('.downloads-bl .present-btn-2').click(function(){$('.downloads-bl .present-2').slideToggle();});
	$('.downloads-bl .present-btn-3').click(function(){$('.downloads-bl .present-3').slideToggle();});
	$(window).resize(function(){$('.downloads-bl .presentation').slideUp();});
});