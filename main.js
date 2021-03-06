/* toggle navbar colapsable */
const openLinks= ()=>{
	var links = document.querySelector('.links');
	links.classList.toggle('responsive');
}
const content = document.querySelector('.content');
content.addEventListener('click',()=>{
  // if click to content close navbar
 document.querySelector('.links').classList.remove('responsive')
  // if click to content close sublinks
 document.querySelectorAll('.show').forEach(e => e.classList.remove("show")); 
}); 


/* slider */
// get slides item from DOM after 2s
let getSlidesItem = () => {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let slides = document.getElementsByClassName("mySlides");
            resolve(slides);
        }, 5000);
    });
}
async function render(){
   const innerLoad = await getSlidesItem();
   showSlides(slideIndex);//show slider
}
render();
// SETUP slider
var slideIndex = 1;
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
// change slides after 9 sec
setInterval(()=>{
  plusSlides(1);
},9000)


/* sticky navbar */
window.onscroll = function() {stickyNav()};

const navbar = document.querySelector(".navbar");
const navTop = navbar.offsetTop;
const layer = document.querySelector(".layer");
const ulLinks = document.querySelector('.links').querySelector('ul');
const logo = document.querySelector('.logo').querySelector('img');

function stickyNav() {
  if (window.pageYOffset > 0) {
    navbar.classList.add("sticky");
    layer.style.position = 'relative';
    ulLinks.classList.add('linksUl-scroll');
    ulLinks.style.top = '2.2px';
    logo.style.width = '55px';
  } else  {
    navbar.classList.remove("sticky");
    layer.style.position = 'absolute';
    ulLinks.classList.remove('linksUl-scroll');
    ulLinks.style.top = '10px';
    logo.style.width = '100px';
  }
}

