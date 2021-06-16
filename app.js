import { PostsData,SliderData }  from './hello.js'

const postsDOM = document.querySelector('.weblog');
const sliderDOM = document.querySelector('.sliderDATA');

/* get weblogs item */
class Posts {
	getPosts() {
		return PostsData ;
	}
}
/* get slider items */
class Sliders {
	getSliders() {
		return SliderData ;
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
	displaySliders(sliders) {
		let result = '';
		sliders.forEach((slide)=>{
			result +=`<div class="mySlides fade">
				  <div class="numbertext">${slide.id} / ${sliders.length}</div>
				  <img src=${slide.img} style="width:100%">
				  <div class="text">${slide.title}</div>
				</div>`
		});
		sliderDOM.innerHTML = result;
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

});

