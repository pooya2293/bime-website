
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
content.addEventListener('click',()=>document.querySelector('.links').classList.remove('responsive'));

navbar.classList.add("sticky");
// layer.style.position = 'relative';
ulLinks.classList.add('linksUl-scroll');
ulLinks.style.top = '2.2px';
logo.style.width = '55px';

