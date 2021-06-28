import { SliderData,MixInfo }  from './datas/HomeData.js'
import * as Post from './index.js';
import {PminiApiParse,LminiApiParse,MminiApiParse} from './miniAPI.js';


/*** link Info's to UI ***/
const postsDOM = document.querySelector('.weblog');
const sliderDOM = document.querySelector('.sliderDATA');
const mixDOM = document.querySelector('.mix');
const navLinksDOM = document.querySelector('.navLinks');


/* get weblogs Data */
class Posts {
	getPosts() {
		return PminiApiParse ;
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
		return MminiApiParse;
	}
}
/* get slider Data */
class Nav_Links {
	getNavLinks(){
		return LminiApiParse;
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
			result += `
				<a href="./Post/Post.html" data="${post.id}" onclick="getData(event)">
						<img src=${eval(post.mainImage)} alt=${eval(post.title)} title=${getTitle(eval(post.title))} data="${post.id}">
					<div class="text" data="${post.id}">
						<h2 data="${post.id}">${eval(post.title)}</h2>
						<p data="${post.id}">${eval(post.text).slice(0,80)} ...</p>
					</div>
			</a>
			`
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
			result += `<a href="${eval(mixInfo.mixUrl)}" data="${mixInfo.id}">
						<img src=${eval(mixInfo.mixImg)} alt=${eval(mixInfo.mixTitle)} title=${getTitle(eval(mixInfo.mixTitle))} data="${mixInfo.id}" onclick="getData(event)">
					</a>`
		});
		mixDOM.innerHTML = result;
	}
	displayNavLinks(navLinks){
		let result = '<li><a href="#">خانه</a></li>';
		let subResult ='';
		var subNavLinksDOM;
		navLinks.forEach((link,index)=>{
			const {id,subLinks,subTitle}=link;
			// if sublinks is true
			result += (eval(link.sub))?`<li id="sub" onclick="displaySubMenue(event)">
						<a href="javascript:void(0)">${eval(link.subTitle)}<i class="fa fa-plus"></i></a>
						<span class='subLinks' data-main="${eval(subTitle)}">
						<ul id="subUl${index}">
						${subLinks.forEach((item)=>{
							const {id,subLinkTitle} = item;
							 subResult +=`<li onclick="getData(event)" data="${id}" data-main="${eval(subTitle)}">
								<a href='./Post/Post.html' data="${id}">${eval(subLinkTitle)}</a>
								</li>`;
							
						})};
						
						</ul>
						</span>`:(eval(link.linkTitle)?`<li data="${link.id}" onclick="getData(event)">
							<a data="${link.id}" href='./Post/Post.html'>
							${eval(link.linkTitle)}</a>
						</li>`:'')

		});

		navLinksDOM.innerHTML = result;

		for(let i=0;i<10;i++){
			if(document.querySelector(`#subUl${i}`)){
			subNavLinksDOM = document.querySelector(`#subUl${i}`);
			subNavLinksDOM.innerHTML=subResult;
		
			}
		}
		function filterSubs(){	
			let mainData =document.querySelectorAll('.subLinks');
			let mainData2 = subNavLinksDOM.querySelector('li');
			let subFilter = '';
			for(var k=0;k<mainData.length;k++){
					//get whole li
					let dynamicUlDOM=mainData[k].getElementsByTagName('ul')[0].getElementsByTagName('li');
				for(let j=0;j<dynamicUlDOM.length;j++){
						let dynamicLiDOM = dynamicUlDOM[j];
						//if data li = data ul 
						if(dynamicLiDOM.dataset.main===mainData[k].dataset.main){
							dynamicLiDOM.className='filter';

						}else{

							dynamicLiDOM.innerHTML = '' ;
							dynamicLiDOM.style.position = 'absolute';
							dynamicLiDOM.style.visibility = 'hidden';
						}
					}	
			}
		}
		filterSubs();
	
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

	const aTag =  postsDOM.querySelectorAll('a');
	localStorage.removeItem('clickData');
});

/* Save data target event click */
window.getData = function getData(event) {
    	localStorage.setItem('clickData',event.target.getAttribute('data'));
}

window.displaySubMenue = function(e){
	
	const tempBtn = e.target.getBoundingClientRect();

	const SubSpan = e.path[1].getElementsByTagName('span')[0];
	const UlInSpan = e.path[1].getElementsByTagName('ul')[0];
	const iconSub = e.target.getElementsByTagName('i')[0].classList;
	// if still e.target show = hide it
 	if(UlInSpan.className === "show"){
 		UlInSpan.classList.toggle("show");
 		iconSub.remove('fa-minus');
 		iconSub.add('fa-plus');

 	}else{
 		document.querySelectorAll('.show').forEach(e => e.classList.remove("show"));
 		iconSub.remove('fa-plus');
 		iconSub.add('fa-minus');
 		
 		UlInSpan.classList.toggle("show");
 	}
}

// click navbar hide sublinks 
window.handleSubmenu= function (e){
	// if event target = DIV only remove .show
	if(e.target.tagName === 'DIV'){
		document.querySelectorAll('.show').forEach(e => e.classList.remove("show"));
	}

}

