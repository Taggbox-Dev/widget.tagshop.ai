"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4121],{82603:(e,t,a)=>{a.d(t,{Z:()=>u});var n,s=a(96011),r=a.n(s),o=a(296),i=a(52867),l=a(66345),d=a(63246),c=a(14313),h=a(28322);let v;const u=(e,t,a,s,u,p,w)=>g=>{var _,b,m;const{wall:f,postData:k}=o.A.getState().appData,y=4===(null===f||void 0===f||null===(_=f.ThemeInfo)||void 0===_?void 0:_.id)&&1===(null===(b=f.ThemeStyle)||void 0===b?void 0:b.row),x=Object.keys((null===k||void 0===k?void 0:k.filteredDataObject)||{}).reduce(((e,t)=>{var a;return e+(0===s&&(null===(a=k.filteredDataObject[t])||void 0===a?void 0:a.length)||0)}),(null===k||void 0===k||null===(m=k.filteredDataObject[s])||void 0===m?void 0:m.length)||0),j=k.appendData.after,R=(e=>{const t=window.location.href,a=e?`#co_${e}`:".taggbox";let n={},s={};const r=e=>(0,i.eA)(t,e),o=r("region"),d=r("website"),c=r("tags");return l.HY&&(/.*(test\.tagshop\.ai\/w\/|widget-test\.tagshop\.ai|widget\.tagshop\.ai).*/.test(window.location.host)||d||o)&&(n=r("wall")?{}:{Website:1},o&&(v=o)),l.aD&&r("wallKey")&&(n.wallKey=r("wallKey")),s=c?{tag:c.includes("true")?1:0,keywords:decodeURIComponent(r("data-keywords")||r("keywords")||"")}:d?{Website:1,...v&&{region:v}}:(()=>{const e=document.querySelector(a);if(!e)return{};const{keywords:t,source:n,region:s,tags:r}=e.dataset;return{...r&&{tag:r.includes("true")?1:0,keywords:decodeURIComponent(t||"")},...l.HY&&{Website:n?1:void 0,region:s||void 0}}})(),{headers:{...n,...s,...h.ML}}})(i.wV)||{headers:{}},{headers:N}=R;N.tag=w?1:N.tag||void 0,N.keywords=w||N.keywords||void 0,N.action=1;const I={appendData:{after:j,networkID:s,heightEvent:p,tagName:w},filterNetworkId:s,newData:[],hasMoreData:{[s]:{hasMoreData:!0,after:j}},tagName:w};if(x<a&&x!==s){var M;n&&n.cancel(),n=r().CancelToken.source(),R.cancelToken=n.token,g({type:d.dC,payload:!0});const o=`${d.NH}${e}/${t}/${a}/${s}/1/${u}`,v=l.HY?`${o}/${(null===(M=(0,h.gu)(i.wV))||void 0===M?void 0:M.mUrl)||""}`:o,p=l.MH?`${d.NH}${e}/${a}/${s}/${u}`:v;(new c.A).get(p,R).then((t=>{const n=l.MH&&!["62229",62229].includes(e)?{data:JSON.parse([])}:t;g({type:d.Sg,payload:{...I,newData:n.data.data,hasMoreData:{[s]:{hasMoreData:!(y&&Object.keys(n.data.data).length<a)&&1===n.data.hasPost,after:n.data.after}},isFilter:!0}})})).catch((()=>{g({type:d.dC,payload:!1})}))}else g({type:d.Sg,payload:I})}},14121:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var n=a(9950),s=a(66345),r=a(80415),o=a(10300),i=a(82603),l=a(81572),d=a(76506),c=a(44414);const h=n.lazy((()=>a.e(620).then(a.bind(a,20620))));class v extends n.PureComponent{constructor(e){super(e),this.toggleDropdown=()=>{const{activeId:e}=this.state,{reviewFilters:t}=this.props;if(0!==e&&t.length>0){const a=t.filter((t=>t.Network.id===e));a&&a.length>0&&window.open(a[0].Network.link,"_blank")}else this.setState((e=>({isOpen:!this.state.isOpen})))},this.handleClickOutside=e=>{this.dropdownRef.current&&!this.dropdownRef.current.contains(e.target)&&this.setState((e=>({isOpen:!1})))},this.onLoadTotalRating=e=>{let t=0,a=0,n="",s=0,r=this.props.wall.Banner.title_font_color;return e.map((o=>{const i=o.Network;t+=i.averageReviews*i.totalReviews,a+=i.totalReviews,n=e.length>1?"Overall":i.name,s=e.length>1?0:i.id,r=e.length>1?this.props.wall.Banner.title_font_color:i.color})),{network:{name:n,avgRate:isNaN(t/a)?0:(t/a).toFixed(1),totalReviews:a,color:r},activeId:s}},this.totalReviewNetworks=e=>t=>{const{network:a,activeId:n}=this.onLoadTotalRating(e);this.props.changeFilterStatus&&this.props.changeFilterStatus(2);const s=Math.floor(Date.now()/1e3),{appendData:r,wall:o}=this.props;let i=o.ThemeRule.numberOfPosts;this.props.filterPostDataAppendWebFilter(o.ThemeInfo.wallId,s,i,n,r.after,r.heightEvent,null),this.setState({network:a,activeId:n,networkID:n})},this.getReviewLogo=e=>{switch(e){case"Overall":return"";case"Facebook":return"facebook";case"Google Review":return"google";case"Yelp":return"yelp";case"Etsy":return"etsy";case"Amazon":return"amazon";case"Tripadvisor":return"tripadvisor";case"Review Hub":return s.MH?"tagbox":"tagembed";case"AliExpress":return"aliexpress";case"Airbnb":return"airbnb";case"Trustpilot Reviews":return"trustpilot";case"UGC Uploader":return"snapup";case"Booking.com":return"booking"}},this.state={networkID:null,isOpen:!1,activeId:0,network:{name:"",avgRate:0,totalReviews:0,color:this.props.wall.Banner.title_font_color}},this.dropdownRef=n.createRef()}componentDidMount(){document.addEventListener("click",this.handleClickOutside);const{network:e,activeId:t}=this.onLoadTotalRating(this.props.reviewFilters);this.setState({network:e,activeId:t,networkID:t})}componentWillUnmount(){document.removeEventListener("click",this.handleClickOutside)}render(){const{reviewFilters:e,wall:t}=this.props,{isOpen:a,network:o,activeId:i}=this.state,v={color:t.Banner.subTitle_font_color,fontFamily:t.Banner.subtitle_css_font,fontSize:t.Banner.subTitle_font_size},u={color:t.Banner.title_font_color,fontFamily:t.Banner.title_css_font},p={backgroundColor:t.Banner.background_color_two,color:"#fff"};return(0,c.jsx)("div",{className:"tb_rv_container",style:{padding:t.Personalization.padding/2},children:(0,c.jsxs)("div",{className:"tb_rv_wrapper",style:{borderRadius:t.ThemeRule.radius,backgroundColor:t.Banner.background_color},children:[e&&e.length>1?(0,c.jsx)("div",{className:"tb_rv_scrollable",children:(0,c.jsx)("div",{className:"tb_rv_filter_wrap",children:(0,c.jsxs)("div",{className:"tb_rv_filter_wrap_in",children:[Object.keys(e).length?(0,c.jsx)("div",{className:"tb_fil_soc_btn"+(0===i?" tb_fil_active":""),onClick:this.totalReviewNetworks(e),children:(0,c.jsx)("div",{className:"tb_fil_btn_txt",children:t.ThemeStyle.language.text.all})}):null,Object.keys(e).length&&e.map(((e,t)=>{const a=e.Network;return(0,c.jsx)("div",{className:"tb_fil_soc_btn"+(i===a.id?" tb_fil_active":""),onClick:this.totalReviewNetworks([e]),children:(0,c.jsx)(n.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:(0,c.jsx)(h,{network:a,networkClass:"tb_review_filter_ico"})})},t)}))]})})}):null,(0,c.jsxs)("div",{className:"tb_rv_banner_wrap",style:{minHeight:t.Banner.banner_height},children:[(0,c.jsxs)("div",{className:"tb_rv_rating",children:[(0,c.jsxs)("div",{className:"tb_rv_head_text",children:["Overall"!==o.name?(0,c.jsx)("div",{className:"tb_rv_head_logo",children:(0,c.jsx)("img",{className:"tb_rv_head_log_img","data-name":this.getReviewLogo(o.name),src:`${r.th}/media/review-logo/${this.getReviewLogo(o.name)}.svg`,height:40,width:50,style:{marginTop:"Trustpilot Reviews"===o.name?-6:""}})}):null,(0,c.jsx)("div",{className:"tb_rv_head_r_text "+(s.MH?`tb-cTBfont-${t.Banner.title_font_varient}`:""),style:s.MH?u:{},children:"Overall"==o.name?"Overall Rating":"Rating"})]}),(0,c.jsxs)("div",{className:"tb_rv_rating_wrap",children:[(0,c.jsx)("div",{className:"tb_rv_review_count "+(s.MH?`tb-cTBfont-${t.Banner.title_font_varient}`:""),style:s.MH?u:{color:t.Banner.subTitle_font_color},children:o.avgRate}),(0,c.jsx)("div",{className:"tb_rv_rview_star",children:(0,c.jsx)(l.A,{size:!1,rating:o.avgRate})}),(0,c.jsxs)("div",{className:`tb_rv_review_total_post tb-cTBfont-${s.MH?t.Banner.title_font_varient:t.Banner.subtitle_font_varient}`,style:s.MH?u:v,children:[(0,d.sl)(o.totalReviews)," reviews"]})]})]}),(0,c.jsxs)("div",{className:"tb_rv_banner_btn_wrap",ref:this.dropdownRef,children:[(0,c.jsx)("div",{className:`tb_rv_banner_btn tb-cTBfont-${s.MH?t.Banner.subtitle_font_varient:""}`,onClick:this.toggleDropdown,style:p,children:"Write a Review"}),a&&(0,c.jsxs)("div",{className:"tb_rv_dropdown_ "+(a?"tb_rv_dd_show":""),children:[(0,c.jsx)("div",{className:"tb_rv_dropdown_title",children:"Where do you want to leave a review?"}),Object.keys(e).length&&e.map(((e,t)=>{const a=e.Network;return(0,c.jsxs)("div",{className:"tb_rv_dropdown_list",onClick:e=>a.link?window.open(a.link,"_blank"):null,children:[(0,c.jsx)(h,{network:a,networkClass:"tb_rv_dd_ico"}),a.name&&String(a.name).includes("Google")?"Google":String(a.name).includes("UGC Upload")?"SnapUp":a.name]},t)}))]})]})]})]})})}}const u=(0,o.Ng)((e=>({})),(e=>({filterPostDataAppendWebFilter:(t,a,n,s,r,o,l)=>e((0,i.Z)(t,a,n,s,r,o,l))})))(v),p=n.lazy((()=>a.e(7774).then(a.bind(a,27774)))),w=n.lazy((()=>a.e(1265).then(a.bind(a,91265))));class g extends n.PureComponent{constructor(e){super(e),this.toggleDropdown=()=>{const{activeId:e}=this.state,{reviewFilters:t}=this.props;if(0!=e&&t.length>0){const a=t.filter((t=>t.Network.id==e));a&&a.length>0&&window.open(a[0].Network.link,"_blank")}else this.setState((e=>({isOpen:!this.state.isOpen})))},this.handleClickOutside=e=>{this.dropdownRef.current&&!this.dropdownRef.current.contains(e.target)&&this.setState((e=>({isOpen:!1})))},this.onLoadTotalRating=e=>{let t=0,a=0,n="",s=0,r=this.props.wall.Banner.title_font_color;return e.map((o=>{const i=o.Network;t+=i.averageReviews*i.totalReviews,a+=i.totalReviews,n=e.length>1?"Overall":i.name,s=e.length>1?0:i.id,r=e.length>1?this.props.wall.Banner.title_font_color:i.color})),{network:{name:n,avgRate:isNaN(t/a)?0:(t/a).toFixed(1),totalReviews:a,color:r},activeId:s}},this.totalReviewNetworks=e=>t=>{const{network:a,activeId:n}=this.onLoadTotalRating(e);this.props.changeFilterStatus&&this.props.changeFilterStatus(2);const s=Math.floor(Date.now()/1e3),{appendData:r,wall:o,ThemeStyle:i}=this.props;let l=i.totalPosts;this.props.filterPostDataAppendWebFilter(o.Wall.id,s,l,n,r.after,r.heightEvent,null),this.setState({network:a,activeId:n,networkID:n})},this.getReviewLogo=e=>{switch(e){case"Overall":default:return"";case"Facebook":return"facebook";case"Google Review":return"google";case"Yelp":return"yelp";case"Etsy":return"etsy";case"Amazon":return"amazon";case"Tripadvisor":return"tripadvisor";case"Review Hub":return s.MH?"tagbox":"tagembed";case"AliExpress":return"aliexpress";case"Airbnb":return"airbnb";case"Trustpilot Reviews":return"trustpilot";case"UGC Uploader":return"snapup";case"Booking.com":return"booking"}},this.state={networkID:null,isOpen:!1,activeId:0},this.dropdownRef=n.createRef()}componentDidMount(){document.addEventListener("click",this.handleClickOutside);const{network:e,activeId:t}=this.onLoadTotalRating(this.props.reviewFilters);this.setState({network:e,activeId:t,networkID:t})}componentWillUnmount(){document.removeEventListener("click",this.handleClickOutside)}render(){const{wall:e,isHeader:t}=this.props;return t?(0,c.jsx)(c.Fragment,{children:1==e.Reviews.headerType?(0,c.jsxs)(n.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:[" ",(0,c.jsx)(p,{...this.props})]}):2==e.Reviews.headerType?(0,c.jsx)(n.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:(0,c.jsx)(w,{...this.props})}):null}):(0,c.jsx)(u,{...this.props})}}const _=g},81572:(e,t,a)=>{a.d(t,{A:()=>r});var n=a(44414);const s=(e,t,a)=>(0,n.jsx)("div",{className:"tb_avg_rating_ico__ tb__icon tb-star-outline",style:{color:e,fontSize:a,minWidth:a+"px"},children:(0,n.jsxs)("div",{className:"tb_avg_rating_ico_fill__ tb__icon tb-star-fill",style:{color:e,width:10*t+"%",fontSize:a,minWidth:a+"px"},children:[(0,n.jsx)("div",{})," "]})}),r=e=>{let{rating:t,size:a,color:r}=e;const o=t>5?5:t,i=Math.trunc(5-o),l=Math.trunc(o),d=String(o).split(".")[1];return(0,n.jsxs)("div",{className:"tb_avg_rating__","aria-label":"Ratings",role:"status",children:[l?[...Array(l)].map(((e,t)=>(0,n.jsx)("div",{"data-index":t,className:"tb_avg_rating_ico__ tb__icon tb-star-fill",style:{color:r||"#F8B90C",fontSize:a,minWidth:a+"px"},children:(0,n.jsx)("div",{})},t))):null,d>0?s(r||"#F8B90C",d,a):null,i?[...Array(i)].map(((e,t)=>(0,n.jsx)("div",{className:"tb_avg_rating_ico__ tb__icon tb-star-outline",style:{fontSize:a,minWidth:a+"px"},children:(0,n.jsx)("div",{})},t))):null]})}},76506:(e,t,a)=>{a.d(t,{C9:()=>g,Cq:()=>w,HI:()=>u,Ph:()=>y,TW:()=>S,Uy:()=>c,fF:()=>_,hZ:()=>m,hz:()=>p,iS:()=>v,p5:()=>I,pj:()=>M,sl:()=>k,um:()=>h,vG:()=>N,w:()=>b,wG:()=>f});var n=a(66345),s=a(80415),r=a(296),o=a(86961);let i=[],l=!1;const d=new Headers({"Content-Type":"application/json",Authorization:`Bearer ${n.$x}`,Productdomain:n.QR}),c=e=>{var t;return null===(t=document.getElementById("tb_onsite_btn_id"))||void 0===t?void 0:t.classList.toggle("tb_onsite_btn_disabled",1===e)},h=e=>{var t,a;return null===(t=(a={1:()=>window.onShowDemoPost(1),2:()=>window.hendleFeeds("addFeeds"),3:()=>window.hendleFeeds("manageFeeds")})[e])||void 0===t?void 0:t.call(a)},v=e=>{const t=new Date(1e3*e);return`${["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]} ${t.getDate()}, ${t.getFullYear()}`},u=e=>{try{i.push(e)}catch(t){console.log(t)}},p=e=>e&&""!==e&&!e.includes("ui-avatars"),w=e=>{if(!e)return"0 Byte";const t=Math.floor(Math.log(e)/Math.log(1024));return{size:Math.round(e/Math.pow(1024,t),2),sizeText:["Bytes","KB","MB","GB","TB"][t]}},g=e=>e.startsWith("http://")||e.startsWith("https://")?e:"https://"+e,_=e=>{const t=Date.now()-1e3*e;if(t<6e4)return"just now";const a=[{label:"year",ms:31536e6},{label:"month",ms:2592e6},{label:"week",ms:6048e5},{label:"day",ms:864e5},{label:"hour",ms:36e5},{label:"minute",ms:6e4}].find((e=>{let{ms:a}=e;return t>=a})),n=Math.floor(t/a.ms);return`${n} ${a.label}${n>1?"s":""} ago`},b=e=>{try{return null!==e&&void 0!==e&&e.includes("http")?[...new Set(e.match(/(((ftp|https?):\/\/)[\w@:%_\+.~#?&//=]+)/g))].reduce(((e,t)=>e.replaceAll(t,`<a class="text_links_" role="link" target="_blank" href="${t}">${t}</a>`)),e):e}catch{return e}},m=()=>[`${s.om}`,"Website Widget"],f=e=>e&&String(e)?unescape(e).split("/").pop().split("/").slice(-1).join().split(".").shift():"",k=(["localhost","widget","wall_id="].every((e=>(0,n.vq)(e)))||(n.MH||[`${n.Xg}.${n.IF}`,`${n.Xg}${n.t6}${n.IF}`,`${n.Xg}s.${n.IF}`].some((e=>(0,n.vq)(e)))||n.HY),e=>{const t=Math.floor(Math.log10(e)/3)||0;return t?+(e/Math.pow(1e3,t)).toFixed(0)+["","K","M","B","T"][t]:e}),y=e=>n.MH?e:atob(e),x=e=>{if(null===(a=e)||void 0===a?void 0:a.startsWith("#")){const t=parseInt(e.slice(1),16);return{r:t>>16&255,g:t>>8&255,b:255&t}}{var t;const a=(null===e||void 0===e||null===(t=e.match(/\d+/g))||void 0===t?void 0:t.map(Number))||[0,0,0];return{r:a[0],g:a[1],b:a[2]}}var a},j=e=>{const{r:t,g:a,b:n}=x(e);return Math.sqrt((255-t)**2+(255-a)**2+(255-n)**2)<=30},R=e=>{const{r:t,g:a,b:n}=x(e);return Math.sqrt((t-50)**2+(a-50)**2+(n-50)**2)<50},N=(e,t)=>{var a;null!==(a=e)&&void 0!==a&&a.startsWith("rgba")&&(e="#000000");const n=(e,t)=>t.some((t=>null===e||void 0===e?void 0:e.includes(t))),s=e=>n(e,["ffffff","255, 255, 255","#fff"]),r=e=>n(e,["000000","0, 0, 0","#000"]),[o,i]=[j(e),R(e)],[l,d]=[j(t),R(t)];return o&&l||s(e)&&s(t)?"#000000":i&&d||r(e)&&r(t)?"#ffffff":e},I=(e,t,a)=>e&&e.length>0?e.findIndex((e=>e.id===t)):a,M=()=>{try{const{wall:e}=r.A.getState().appData,{webId:t,wallId:a,ownerId:s}=e.ThemeInfo;l||(window.addEventListener("beforeunload",(()=>{if(0===i.length)return;const e=i.reduce(((e,t)=>e+t),0);e>0?fetch(n.KQ,{method:"POST",headers:d,body:JSON.stringify({action:1,model:null!==o.Ex&&void 0!==o.Ex&&o.Ex.includes("website")?"website":"wall",playCount:i.length,wall:n.HY?t:a,playTime:e,owner:s}),keepalive:!0}).finally((()=>(i=[],l=!1))):(i=[],l=!1)})),l=!0)}catch(e){console.error(e)}},S=e=>new Promise(((t,a)=>Object.assign(new Image,{onload:function(){t({width:this.naturalWidth,height:this.naturalHeight})},onerror:e=>a(new Error(`Image loading error: ${e.message}`)),src:e})))}}]);