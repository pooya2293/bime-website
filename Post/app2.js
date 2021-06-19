import { Post1 } from './postData/post1.js'

const postInfoDOM = document.querySelector('.weblog')
/* get weblog data */
class Posts {
	getPosts() {
		return Post1;
	}
}

class UI {
	displayPostInfo(infos){
		let result = '';
		let pResult = '';
		infos.forEach((info)=>{
			result += `<img src=${info.mainImage} alt="">
			<div class="text">
				<h2>${info.title}</h2>
				${info.p.map((item)=>{
					return `<p>${item}</p>`
				})}
			</div>`
			
		});
		result = result.replace(/,/g, "");//remove all coloms (,);
		postInfoDOM.innerHTML = result ;
	}
}

document.addEventListener('DOMContentLoaded',()=>{
	const ui = new UI();
	// get all the Post info 
	const posts = new Posts();
	const postsInfos = posts.getPosts();
	ui.displayPostInfo(postsInfos);
});