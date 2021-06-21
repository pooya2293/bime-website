// make mini API from total posts info api's
import * as Post from './Post/postData/index.js';

/* get length of Post api's */
var lengthPost= 0;
for(let i=1;i<100;i++){
	eval(`Post.Post${i}`)?lengthPost++ : '';
}

/* get Posts infos until length */
export var miniApi = '[';
for(let i=1;i<=lengthPost;i++){
	 miniApi += `{"id": ${i},"mainImage" : "Post.Post${i}[0].mainImage","title":"Post.Post${i}[0].title","text":"Post.Post${i}[0].p[0]"},`;	
	}
miniApi = miniApi.slice(0,lengthPost*108) + ']';

/* change apiResult to js Array*/
let miniApiParse = JSON.parse(miniApi);

export default miniApiParse;