// make mini API from total posts info api's
import * as Post from './Post/postData/index.js';


	var apiResult = '[';
	for(let i=1;i<10;i++){
		 apiResult += `{"mainImage${i}" : "Post.Post${i}[0].mainImage","title${i}":"Post.Post${i}[0].title","text${i}":"Post.Post${i}[0].p[0]"},`;	
	}
	apiResult = apiResult + '{}]';


let kholase2 = JSON.parse(apiResult);

export default kholase2;