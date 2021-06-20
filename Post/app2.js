// import { result } from './postData/postTotal.js';
// import { Post2 } from './postData/post2.js';

// import  Post2  from './postData/Post2.js';
// import * as Post from './postData/index.js';

document.addEventListener('DOMContentLoaded',async()=>{

	/**** dunamic import ****/
	const pathData = 1<2 ? './postData/Post1.js' : './postData/Post2.js';
	const result =await import(pathData);
	window.console.log(result.default);



	/**** linking to DOM ****/

	const postInfoDOM = document.querySelector('.weblog');
	/* get weblog data */
	 class Posts {
		getPosts() {
			return result.default;
		}
	}

	class UI {
		displayPostInfo(infos){
			let result = '';
			let pResult = '';
			infos.forEach((info)=>{
				result += `${info.mainImage?`<img src=${info.mainImage} alt="">`:''}
				<div class="text">
					<span>${info.s ? info.s:'' }</span>
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
	}

	
		const ui = new UI();
		// get all the Post info 
		const posts = new Posts();
		const postsInfos = posts.getPosts();
		ui.displayPostInfo(postsInfos);

});


