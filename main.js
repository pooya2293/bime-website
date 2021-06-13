
function openLinks(){
	const links = document.querySelector('.links');
	links.classList.toggle('responsive');
}

/* slider */

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

/* sticky navbar */
window.onscroll = function() {stickyNav()};

const navbar = document.querySelector(".navbar");
const navTop = navbar.offsetTop;
const layer = document.querySelector(".layer");

function stickyNav() {
  if (window.pageYOffset > navTop) {
    navbar.classList.add("sticky");
    layer.style.position = 'relative';
  } else {
    navbar.classList.remove("sticky");
    layer.style.position = 'absolute';
  }
}