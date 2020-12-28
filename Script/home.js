// $(document).ready(function(){
//    var slideIndex = 0;
//    showSlides();

//    function showSlides() {
//       var i;
//       var $slides = $(".eventImage")
//       for (i = 0; i < $slides.length; i++) {
//          $slides[i].style.display = "none";
//       }  
//       slideIndex++;
//       if (slideIndex > $slides.length) {slideIndex = 1}
//       $slides[slideIndex-1].style.display = "block";
//       setTimeout(showSlides, 2000); 
//    }
   
// });

$(document).ready(function(){
   $(".eventImage:first-child").fadeIn();
   setInterval(function(){
      $('.slideshow-container > :first-child').fadeOut(2000, function() {
      $(this).next(".eventImage").fadeIn(2000).end().appendTo('.slideshow-container');   
  })
  }, 5000);
});
