
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        450:{
            item:2
        },
        1000:{
            items:5
        }
    }
})

// wow animation Js
    new WOW().init();

// Smooth scrolling
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

//**********MODAL STYLES************//
//var modal = document.querySelector("#instructionModal");
//var modalBtn = document.querySelector("#modalBtn");
//var closeBtn = document.querySelector(".closeBtn");
//
////Listen for open click
//modalBtn.addEventListener('click', openModal);
//
////Listen for close click
//closeBtn.addEventListener('click', closeModal);
//
////Listen for outside click
//window.addEventListener('click', clickOutside);
//
//
//// function for open modal
//function openModal(){
//    modal.style.display = 'block';
//}
//
//// function for close modal
//function closeModal(){
//    modal.style.display = 'none';
//}
//
//// function for close modal if click outside
//function clickOutside(e){
//    if(e.target == modal){
//        modal.style.display = 'none';   
//       }    
//}






































