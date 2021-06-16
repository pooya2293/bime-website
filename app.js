import { PostsData }  from '/hello.js'

const postsDOM = document.querySelector('.weblog');

/* get weblogs item */
class Posts {
	getPosts() {
		return PostsData ;
	}
}

class UI {
	displayPosts(posts) {
		let result = '';
		posts.forEach((post)=> {
			result += `<a href="#">
						<img src=${post.img} alt="">
					<div class="text">
						<h2>${post.title}</h2>
						<p>${post.text}</p>
					</div>`
		});
		postsDOM.innerHTML = result;
	}
}

document.addEventListener('DOMContentLoaded',()=>{
	const ui = new UI();
	// get all posts
	const posts = new Posts();
	const postsData = posts.getPosts();
	window.console.log(postsData);
	ui.displayPosts(postsData);
});