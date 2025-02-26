function toggleMenu() {
  const navLinks = document.querySelector('.nav-links.mobile-menu');

  if (navLinks) {
    navLinks.classList.toggle('active');
  } else {
    console.error("Menu element not found! Check if '.nav-links.mobile-menu' exists in HTML.");
  }
}
jQuery('#clock').countdown('2025/2/28',function(event){
  var $this=jQuery(this).html(event.strftime(''
  +'<div class="time-entry days"><span>%-D</span> <b>:</b> Days</div> '
  +'<div class="time-entry hours"><span>%H</span> <b>:</b> Hours</div> '
  +'<div class="time-entry minutes"><span>%M</span> <b>:</b> Minutes</div> '
  +'<div class="time-entry seconds"><span>%S</span> Seconds</div> '));
});
// document.querySelectorAll('.event').forEach(event => {
//   event.addEventListener('click', function() {
//       this.classList.toggle('active');
//   });
// });

// document.querySelectorAll('.no-flip').forEach((element) => {
//   element.addEventListener('click', (event) => {
//       event.stopPropagation();
//   });
// });
