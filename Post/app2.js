import {LminiApiParse} from '../miniAPI.js';
import * as Post from '../index.js';

/* import what Post you click on Home Page */
const clickData2 = localStorage.getItem('clickData');

/*** link post info's to Post page ***/
document.addEventListener('DOMContentLoaded',async()=>{

	/**** dunamic import ****/
	const pathData = `./postData/${clickData2}.js`;
	const result =await import(pathData);
	window.console.log(result.default);


	/**** linking to DOM ****/

	const postInfoDOM = document.querySelector('.weblog');
	const navLinksDOM = document.querySelector('.navLinks');
	/* get weblog data */
	 class Posts {
		getPosts() {
			return result.default;
		}
	}
	/* get slider Data */
	class Nav_Links {
		getNavLinks(){
			return LminiApiParse;
		}
	}
	class UI {
		displayPostInfo(infos){
			let result = '';
			infos.forEach((info)=>{
				result += `${info.mainImage?`<img src=${info.mainImage} alt="">`:''}
				<div class="text">
					${info.s?`<span>${info.s ? info.s:'' }</span>`:''}
					${info.title?`<h2>${info.title}</h2>`:''}
					
						${info.img?`<div class="img">
							<img src=${info.img} alt="">
						<i>${info.i}</i>
						</div>`:''}
						
					
					${info.p.map((item)=>{
						return `<p>${item}</p>`
					})}
				</div>`

				
			});
			result = result.replace(/,/g, "");//remove all coloms (,);
			postInfoDOM.innerHTML = result ;
		}
			displayNavLinks(navLinks){
			let result = '<li><a href="../index.html">خانه</a></li>';
			let subResult ='';
			var subNavLinksDOM;
			navLinks.forEach((link,index)=>{
				const {id,subLinks,subTitle}=link;
				result += (eval(link.sub))?`<li id="sub" onclick="displaySubMenue(event)">
							<a href="javascript:void(0)">${eval(link.subTitle)}</a>
							<span class='subLinks' data-main="${eval(subTitle)}">
							<ul id="subUl${index}">
							${subLinks.forEach((item)=>{
								const {id,subLinkTitle} = item;
								 subResult +=`<li onclick="getData(event)" data="${id}" data-main="${eval(subTitle)}">
									<a href='./Post.html' data="${id}">${eval(subLinkTitle)}</a>
									</li>`;
								
							})};
							
							</ul>
							</span>`:(eval(link.linkTitle)?`<li data="${link.id}" onclick="getData(event)">
								<a data="${link.id}" href='./Post.html'>
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
							}
						}	
				}
			}
			filterSubs();
		
		}
	}

	
		const ui = new UI();
		// get all the Post info 
		const posts = new Posts();
		const postsInfos = posts.getPosts();
		ui.displayPostInfo(postsInfos);
		// get all navLinks
		const nav = new Nav_Links();
		const navLinks = nav.getNavLinks();
		ui.displayNavLinks(navLinks);

});


/* Save data target event click */
window.getData = function getData(event) {
    	localStorage.setItem('clickData',event.target.getAttribute('data'));
}

window.displaySubMenue = function(e){
	
	const tempBtn = e.target.getBoundingClientRect();

	const SubSpan = e.path[1].getElementsByTagName('span')[0];
	const UlInSpan = e.path[1].getElementsByTagName('ul')[0];

 	if(UlInSpan.className === "show"){
 		UlInSpan.classList.toggle("show");
 	}else{
 		document.querySelectorAll('.show').forEach(e => e.classList.remove("show"));
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