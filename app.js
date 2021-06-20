import { PostsData,SliderData,MixInfo,NavLinks }  from './datas/hello.js'

import * as Post from './Post/postData/index.js';
// window.console.log(Post);
import kholase2 from './splitData.js';


window.console.log(eval(kholase2[0].mainImage1));//https://www.bazicenter.com/wp-content/uploads/2020/09/god-of-war-ascension.jpg




const postsDOM = document.querySelector('.weblog');
const sliderDOM = document.querySelector('.sliderDATA');
const mixDOM = document.querySelector('.mix');
const navLinksDOM = document.querySelector('.navLinks');
/* get weblogs Data */
class Posts {
	getPosts() {
		return PostsData ;
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
		posts.map((post)=> {
			result += `<a href="#">
						<img src=${post.img} alt=${post.title} title=${getTitle(post.title)} >
					<div class="text">
						<h2>${post.title}</h2>
						<p>${post.text}</p>
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

});