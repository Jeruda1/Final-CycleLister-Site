console.log("loaded");
// event.preventDefault();

$("document").ready(function(){
	  $("#search-input input[type=text]").click(function() {
	  
	  $(this).attr( "placeholder", "");
	});

	  	  $("#search-input input[type=text]").keypress(function(e) {


	  if(e.which == 13){
	  		  	  	// console.log($(this));
	  		$(this).val(""); 
	  	 	
	  		$(this).attr("placeholder", "search site"); 	
	 
	  }
	});
	  $("#search a").click(function() {
	  event.preventDefault();
	  $(this).attr( "placeholder", "search site");

	});

	   $("#email-input input[type=email]").click(function() {
	  event.preventDefault();
	  $("#email-input input[type=email]").attr( "placeholder", "");
	});
	   $("#submit-btn").click(function() {
	   		event.preventDefault();
	  		$("#email-input input[type=email]").val(""); 
	  	 	
	  		$("#email-input input[type=email]").attr("placeholder", "search site"); 	
	 
	  });

  	  $("#search a").click(function() {
        // var toggleWidth = $("#search-input input[type=text]").width() == 182 ? 0 : 182;
        event.preventDefault();
        $("#search-input input[type=text]").toggle("fast");
        console.log("working");
        // $("#search-input input[type=text]").animate({ width: toggleWidth });
        // console.log(toggleWidth);
 	});
  	  
  	  /*when you scroll to specific pt. on y axis, the testimonial bar will slide down from 90px to 380px
  	  and reveal the blockquotes*/
  	  $("#testimonial a").click(function(){
  	  	event.preventDefault();

  	  $("#testimonial").removeClass("open")
  	});

  	  $(window).scroll (function () {
//detects everytime pg scrolls 
        var sT = $(window).scrollTop();
        //setting variable to detect when scroll down to height of 225 on screen
        var testimonialOffset = $("#testimonial").offset().top
        var aboveTestimonial = testimonialOffset - sT
        var count = 0
        console.log("above testimonial", aboveTestimonial);
        var offsetLessWindow = testimonialOffset-window.innerHeight;
        console.log("offsetLessWindow", Math.floor(offsetLessWindow))
        //targets position of top of #testimonial element to then perform the .open function
        console.log(sT);
            if (sT >= 225) {
            	//sT=scroll top
                $('header').addClass('navfixed')
                $("#slideshow").css("margin-top", "80px")
            }
            else {
                $('header').removeClass('navfixed')
                $("#slideshow").css("margin-top", "10px")
            }

            console.log("testimonial offset",testimonialOffset)

            // if (sT>=testimonialOffset-aboveTestimonial){
            	if (sT>=Math.floor(offsetLessWindow) && count ==0){
            //math.floor dictates the position height exact with no decimals (1576 instead of 1576.3432)
            	$("#testimonial").addClass("open")
            	count = count + 1;
            	console.log(count);

            }
            
    });
  	   $("#button", ".btn").click(function() {
	  event.preventDefault();

	});
});



   // $("#search").click(runAnimation);
  
  // function runAnimation(){
  //   $("search").animate(
  //  {
  //     width:"182px"
  //  }, 
  //     500, 
  //     function(){
        
  //  }
  //   )//end of animate
  // }//end of run animation function