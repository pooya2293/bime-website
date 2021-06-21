import { PostsData,SliderData,MixInfo,NavLinks }  from './datas/hello.js'
import * as Post from './Post/postData/index.js';
import miniApiParse from './splitData.js';
// import {getData} from './Post/app2.js'



/*** link Info's to UI ***/
const postsDOM = document.querySelector('.weblog');
const sliderDOM = document.querySelector('.sliderDATA');
const mixDOM = document.querySelector('.mix');
const navLinksDOM = document.querySelector('.navLinks');
/* get weblogs Data */
class Posts {
	getPosts() {
		return miniApiParse ;
	}
}
/* get slider Data */
class Sliders {
	getSliders() {
		return SliderData ;
	}
}
/* get MixInfos Data */
class Mixs {
	getMixInfos(){
		return MixInfo;
	}
}
/* get slider Data */
class Nav_Links {
	getNavLinks(){
		return NavLinks;
	}
}

/* get Title and join together with underscore( _ ) */
function  getTitle(item){
var key='';
    key= item.split(' ').join('_');
    return key;
}


class UI {
	displayPosts(posts) {
		let result = '';
		let i=1;
		posts.map((post)=> {
			result += `<a href="./Post/Post.html" data=${eval(post.id)} onclick="getData(event)">
						<img src=${eval(post.mainImage)} alt=${eval(post.title)} title=${getTitle(eval(post.title))} data=${eval(post.id)}>
					<div class="text">
						<h2>${eval(post.title)}</h2>
						<p>${eval(post.text)}</p>
					</div>`
		});
		postsDOM.innerHTML = result;
	}
	displaySliders(sliders) {
		let result = '';
		sliders.forEach((slide)=>{
			result +=`<div class="mySlides fade">
				  <div class="numbertext">${slide.id} / ${sliders.length}</div>
				  <img src=${slide.img} style="width:100%" alt=${slide.title} title=${getTitle(slide.title)}>
				  <div class="text">${slide.title}</div>
				</div>`
		});
		sliderDOM.innerHTML = result;
	}
	displayMixInfo(mixInfos) {
		let result = '';
		mixInfos.forEach((mixInfo)=>{
			result += `<a href=${mixInfo.img}>
						<img src=${mixInfo.img} alt=${mixInfo.title} title=${getTitle(mixInfo.title)}>
					</a>`
		});
		mixDOM.innerHTML = result;
	}
	displayNavLinks(navLinks){
		let result = '';
		navLinks.forEach((link)=>{
			result += `<li>
						<a href=${link.url}>
						${link.text}</a>
					</li>`
		});
		navLinksDOM.innerHTML = result;
	}

}


document.addEventListener('DOMContentLoaded',()=>{
	const ui = new UI();
	
	// get all posts
	const posts = new Posts();
	const postsData = posts.getPosts();
	ui.displayPosts(postsData);
	// get all sliders
	const sliders = new Sliders();
	const sliderData = sliders.getSliders();
	ui.displaySliders(sliderData);
	// get all mixInfos 
	const mixs = new Mixs();
	const mixInfoData = mixs.getMixInfos();
	ui.displayMixInfo(mixInfoData);
	// get all navLinks
	const nav = new Nav_Links();
	const navLinks = nav.getNavLinks();
	ui.displayNavLinks(navLinks);

	const aTag =  postsDOM.querySelectorAll('a')
	window.console.log(aTag);
});


window.getData = function getData(event) {
    	localStorage.setItem('clickData',event.target.getAttribute('data'));
}




