$(document).ready(function() {
	$('a').click(function() {
  		var href = $(this).attr("href");
     	$('html, body').animate({
        	scrollTop: $(href).offset().top
     		}, 600);
    	return false;
	});




})