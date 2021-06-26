
const navbar = document.querySelector(".navbar");
const navTop = navbar.offsetTop;
const layer = document.querySelector(".layer");
const ulLinks = document.querySelector('.links').querySelector('ul');
const logo = document.querySelector('.logo').querySelector('img');

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

navbar.classList.add("sticky");
// layer.style.position = 'relative';
ulLinks.classList.add('linksUl-scroll');
ulLinks.style.top = '2.2px';
logo.style.width = '55px';

