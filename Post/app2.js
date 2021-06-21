import { NavLinks }  from '../datas/HomeData.js'
/* import what Post you click on Home Page */
const clickData2 = localStorage.getItem('clickData');
window.console.log(clickData2);

/*** link post info's to Post page ***/
document.addEventListener('DOMContentLoaded',async()=>{

	/**** dunamic import ****/
	const pathData = `./postData/Post${clickData2}.js`;
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
			return NavLinks;
		}
	}
	class UI {
		displayPostInfo(infos){
			let result = '';
			let pResult = '';
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


