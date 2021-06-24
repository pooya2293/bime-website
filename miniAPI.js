// make mini API from total posts info api's
import * as Post from './index.js';

/* get length of Post api's */
let lengthPost= 0;
for(let i=1;i<100;i++){
	eval(`Post.Post${i}`)?lengthPost++ : '';
}

/* Make mini Posts API until lengthPost */
let PminiApi = '[';
for(let i=1;i<=lengthPost;i++){
	 PminiApi += `{"id": "Post${i}","mainImage" : "Post.Post${i}[0].mainImage","title":"Post.Post${i}[0].title","text":"Post.Post${i}[0].p[0]"},`;	
	}
PminiApi = PminiApi.slice(0,-1) + ']';


/* change apiResult to js Array*/
export let PminiApiParse =JSON.parse(PminiApi);




/* Make mini Links API until lengthLinks */

/* get length of Link api's */
let lengthLink= 0;
for(let i=1;i<100;i++){
	eval(`Post.Link${i}`)?lengthLink++ : '';
}

let nestFor=',"subLinks":[';
const nestForFunc=()=>{
	for(let i=1;i<=lengthLink;i++){
	 		nestFor += (eval(`Post.Link${i}[0].sub`)?`{"id": "Link${i}","subLinkTitle":"Post.Link${i}[0].subLinkTitle","subTitle":"Post.Link${i}[0].subTitle"},`:'')
	 	}
	nestFor = nestFor.slice(0,-1) + ']';
}
nestForFunc();
let nestForFilter = nestFor.slice(12,-1) + ']';//for filter
let nestForApiParse = JSON.parse(nestForFilter);//for total

let LminiApi = '[';
let LminiApiFilter='';
function makeTotalApi(i){
	return (`{"id": "Link${i}","linkTitle":"Post.Link${i}[0].linkTitle"${
	 		(eval(`Post.Link${i}[0].sub`)&&eval(`Post.Link${i}[0].subMain`)?`,"sub":"Post.Link${i}[0].sub","subTitle":"Post.Link${i}[0].subTitle"${nestFor}`:'') 
	 	}},`);
}
for(let i=1;i<=lengthLink;i++){

	 // LminiApi += makeTotalApi(i);
	 LminiApiFilter = makeTotalApi(i).slice(0,-1);//for filter
	 let LFiltParse = JSON.parse(LminiApiFilter);//for filter
	 let filtered=[];//for filter

	 // if sub & mainSub true filter with subTitle
	(eval(`Post.Link${i}[0].sub`)&&eval(`Post.Link${i}[0].subMain`)&&LFiltParse.subLinks.map((item)=>{
		filtered = LFiltParse.subLinks.filter((item)=>{
			return eval(LFiltParse.subTitle) === eval(item.subTitle);
		});
	}))
	LminiApi += `{"id": "Link${i}","linkTitle":"Post.Link${i}[0].linkTitle"${
	 		(eval(`Post.Link${i}[0].sub`)&&eval(`Post.Link${i}[0].subMain`)?`,"sub":"Post.Link${i}[0].sub","subTitle":"Post.Link${i}[0].subTitle","subLinks":${JSON.stringify(filtered)}`:'') 
	 	}},`;
	}

LminiApi = LminiApi.slice(0,-1) + ']';
/* change apiResult to js Array*/
export let LminiApiParse = JSON.parse(LminiApi);
window.console.log(LminiApiParse);





/* Make mini Mix API until lengthMix's */

/* get length of Mix api's */
let lengthMix= 0;
for(let i=1;i<100;i++){
	eval(`Post.Mix${i}`)?lengthMix++ : '';
}

let MminiApi = '[';
for(let i=1;i<=lengthMix;i++){
	 MminiApi += `{"id": "Mix${i}","mixImg" : "Post.Mix${i}[0].mainImage","mixTitle" : "Post.Mix${i}[0].MixTitle","mixUrl":"Post.Mix${i}[0].MixUrl"},`;	
	}

MminiApi = MminiApi.slice(0,-1) + ']';

/* change apiResult to js Array*/
export let MminiApiParse = JSON.parse(MminiApi);
