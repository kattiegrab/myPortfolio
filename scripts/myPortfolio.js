$(document).ready(function() {
	$('a').click(function() {
  		var href = $(this).attr("href");
     	$('html, body').animate({
        	scrollTop: $(href).offset().top
     		}, 600);
    	return false;
	});
  
});



    
    /* Every time the window is scrolled ... 
    // $(window).scroll( function(){
    
        /* Check the location of each desired element */
//         $('.hideme').each( function(i){
            
//             var bottom_of_object = $(this).offset().top + $(this).outerHeight();
//             var bottom_of_window = $(window).scrollTop() + $(window).height();
            
//              If the object is completely visible in the window, fade it it 
//             if( bottom_of_window > bottom_of_object ){
                
//                 $(this).animate({'opacity':'1'},1000);
                    
//             }
            
//         }); 
    
//     });
    
// });



