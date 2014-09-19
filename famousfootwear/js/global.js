jQuery(document).ready(function($){

	function fade_header() {

		if ( $(window).width() > 300 ) {

			window_scroll = $(this).scrollTop();

			if ( window_scroll > $('#header').height() ) {

				$('#secondary-header').fadeIn();

			} else {
				
				$('#secondary-header').fadeOut('fast');

			}
		}
	}

	$(window).scroll(function() { fade_header(); });
	
	//toggle menu
	  
    $("li.content").hide();
    $("ul.toggle-menu").delegate("li.toggle", "click", function() { 
        $(this).next().toggle("fast").siblings(".content").hide("fast");
    });

	
	// Fading welcome message

	function detect_browser_width() {
		if ( $(window).width() > 800 ) {
			$('#header').addClass('fade');
		} else {
			$('#header').removeClass('fade');
		}	
	}
	detect_browser_width();

	$(window).resize(function() {
		detect_browser_width()
	});

	function fade_welcome() {
		if ( $(window).width() > 800 ) {

        window_scroll = $(this).scrollTop();

	   		$(".welcome").css({
				  'opacity' : 1-(window_scroll/300)
	    	});
		}
	}

	$(window).scroll(function() { fade_welcome(); });
	

	//Scroll to anchor
    $(".scrolltoanchor").click(function() {
        $.scrollTo($($(this).attr("href")), {
            duration: 950
        });
        return false;
    });
	

	




	$( window ).resize(function() {
	if($(window).width() <= 480) {
	$("#nike").each(function() {
	  $(this).attr("src", $(this).attr("src").replace("images/04.png", "images/04-stretched.png"));
	});
	$("#chukkas").each(function() {
	  $(this).attr("src", $(this).attr("src").replace("images/05.png", "images/05-stretched.png"));
	});
	$("#outdoor").each(function() {
	  $(this).attr("src", $(this).attr("src").replace("images/06.png", "images/06-stretched.png"));
	});
    $(".shorter").each(function() {
      $(this).attr("src", $(this).attr("src").replace("images/01.png", "images/01-stretched.png"));
    });
	$(".thinner").each(function() {
	  $(this).attr("src", $(this).attr("src").replace("images/02.png", "images/02-smaller.png"));
	});
	$(".thinnerTwo").each(function() {
	  $(this).attr("src", $(this).attr("src").replace("images/03.png", "images/03-smaller.png"));
	});
	$(".biggerSocial").each(function() {
	  $(this).attr("src", $(this).attr("src").replace("images/socialbox.jpg", "images/socialbox-bigger.jpg"));
	});
  } 
	else if($(window).width() > 480 && $(window).width() <= 640) {
    $(".shorter").each(function() { $(this).attr("src", $(this).attr("src").replace("images/01.png", "images/01-stretched.png"));});
	$("#nike").each(function() {
	  $(this).attr("src", $(this).attr("src").replace("images/04.png", "images/04-stretched.png"));
	});
	$("#chukkas").each(function() {
	  $(this).attr("src", $(this).attr("src").replace("images/05.png", "images/05-stretched.png"));
	});
	$("#outdoor").each(function() {
	  $(this).attr("src", $(this).attr("src").replace("images/06.png", "images/06-stretched.png"));
	});
	$(".thinner").each(function() {
	  $(this).attr("src", $(this).attr("src").replace("images/02-smaller.png", "images/02.png"));
	});
	$(".thinnerTwo").each(function() {
	  $(this).attr("src", $(this).attr("src").replace("images/03-smaller.png", "images/03.png"));
	});
  } 
	else if($(window).width() > 640 && $(window).width() <= 768) {
    $(".shorter").each(function() { $(this).attr("src", $(this).attr("src").replace("images/01.png", "images/01-stretched.png"));});
	$("#nike").each(function() {
	  $(this).attr("src", $(this).attr("src").replace("images/04.png", "images/04-stretched.png"));
	});
	$("#chukkas").each(function() {
	  $(this).attr("src", $(this).attr("src").replace("images/05.png", "images/05-stretched.png"));
	});
	$("#outdoor").each(function() {
	  $(this).attr("src", $(this).attr("src").replace("images/06.png", "images/06-stretched.png"));
	});
	$(".thinner").each(function() {
	  $(this).attr("src", $(this).attr("src").replace("images/02-smaller.png", "images/02.png"));
	});
	$(".thinnerTwo").each(function() {
	  $(this).attr("src", $(this).attr("src").replace("images/03-smaller.png", "images/03.png"));
	});
	$(".biggerSocial").each(function() {
	  $(this).attr("src", $(this).attr("src").replace("images/socialbox.jpg", "images/socialbox-stretched.jpg"));
	});
  } 
	else if($(window).width() > 768 && $(window).width() <= 1024) {
    $(".shorter").each(function() { $(this).attr("src", $(this).attr("src").replace("images/01-stretched.png", "images/01.png"));});
	$("#nike").each(function() {
	  $(this).attr("src", $(this).attr("src").replace("images/04-stretched.png", "images/04.png"));
	});
	$("#chukkas").each(function() {
	  $(this).attr("src", $(this).attr("src").replace("images/05-stretched.png", "images/05.png"));
	});
	$("#outdoor").each(function() {
	  $(this).attr("src", $(this).attr("src").replace("images/06-stretched.png", "images/06.png"));
	});
	$(".thinner").each(function() {
	  $(this).attr("src", $(this).attr("src").replace("images/02-smaller.png", "images/02.png"));
	});
	$(".thinnerTwo").each(function() {
	  $(this).attr("src", $(this).attr("src").replace("images/03-smaller.png", "images/03.png"));
	});
	$(".biggerSocial").each(function() {
	  $(this).attr("src", $(this).attr("src").replace("images/socialbox-stretched.jpg", "images/socialbox.jpg"));
	});
  } 
  });
	
});  


