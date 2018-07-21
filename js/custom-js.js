
/*
  Project Name :Law Firm
  Author Company : LogicsForest
  Project Date: 25 August, 2015
  Author Email : logicsforest@gmail.com
*/







     jQuery(function($) {'use strict',

							
								/* Window Loaded Handler*/
						 $(window).on("load",function(){
							 $('body').addClass('loaded');
		
							});
						
						
							/* Smooth-Scroll */

							$(".scroll").click(function(event){
								
								event.preventDefault();
								$('html,body').animate({scrollTop:$(this.hash).offset().top}, 2000);
							});
							
								//Check to see if the window is top if not then display button
							 var offset =650;
								var duration = 300;
								$(window).scroll(function() {
									if ($(this).scrollTop() > offset) {
										$('.back-to-top').fadeIn(200);
									} else {
										$('.back-to-top').fadeOut(200);
									}
							});
						
							$('.back-to-top').on("click",function(event) {
								event.preventDefault();
								$('html, body').animate({scrollTop: 0}, 500);
								return false;
							});
							
				
							//#main-slider
							$(function(){
								$('#main-slider.carousel').carousel({
									interval: 8000,
								});
							});
	
					
								//OUR BLOG
						  $("#blog-slider").owlCarousel({
								autoPlay: false, //Set AutoPlay to 3 seconds
								items : 4,
								itemsDesktop : [1199,3],
								itemsDesktopSmall : [979,3]
					 
							});
				       
							 	// testinomial slider 
					$("#testimonials-slider").owlCarousel({
				 
								autoPlay: true,
								navigation : false, // Show next and prev buttons
								slideSpeed : 300,
								singleItem:true,
								pagination:true,
								paginationNumbers:false,

					 
								// "singleItem:true" is a shortcut for:
								// items : 1, 
								// itemsDesktop : false,
								// itemsDesktopSmall : false,
								// itemsTablet: false,
								// itemsMobile : false
					 
						});


						
//Clients
//
    $("#client-carousel").owlCarousel({

      navigation : true, // Show next and prev buttons
      navigationText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
      slideSpeed : 400,
      pagination:false,
      items : 5,
      rewindNav: true,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      itemsTablet:[768,3],    //As above.
      // itemsMobile:[479,2],
      itemsMobile:[320,1],
      stopOnHover:true,
      autoPlay:true

    });
	
	  /* ----------------------------------------------------------- */
  /* Blog Carousel
  /* ----------------------------------------------------------- */

  $("#owl-blog").owlCarousel({
    autoPlay: true,  
    items : 4,
    itemsDesktop:[1199,4], 
    itemsDesktopSmall:[979,3],  //As above.
    itemsTablet:[768,2],    //As above.
    itemsMobile:[479,1],    //As above
    goToFirst: true,    //Slide to first item if autoPlay reach end
    goToFirstSpeed:1000, 
  
  });
	
});