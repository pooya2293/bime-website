import {LminiApiParse} from '../miniAPI.js';
import * as Post from '../index.js';

/* import what Post you click on Home Page */
const clickData2 = localStorage.getItem('clickData');
window.console.log(clickData2);

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
			navLinks.forEach((link)=>{
				result += `<li data="${link.id}" onclick="getData(event)">
							<a data="${link.id}" href='./Post.html'>
							${eval(link.linkTitle)}</a>
						</li>`
			});
			navLinksDOM.innerHTML = result;
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