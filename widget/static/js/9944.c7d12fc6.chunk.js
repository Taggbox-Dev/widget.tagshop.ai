"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[548,6723,8167,9649,9944],{45285:(t,e,i)=>{i.d(e,{bs:()=>d});var n=i(80415),s=i(296),o=i(66345),a=i(28322),l=i(14313);let r=[];const d=t=>{t.persist();const e=t.target,{network:i,itemId:n,themeId:s}=e.dataset;if(1!=i||[3,4,16,47,50,55,60].includes(s))r.includes(t)||r.push(t);else{const t=document.querySelector(`.tb_media-${n}`);t&&(t.style.display="none")}1===r.length&&c()},c=async()=>{var t;const{postData:e,wall:i}=s.A.getState().appData;if(!i||!Object.keys(i).length||!r.length)return;const{User:d,Wall:h}=i,p=null===d||void 0===d?void 0:d.id,m=(o.HY,null===h||void 0===h?void 0:h.id),_=null===(t=r[0])||void 0===t?void 0:t.target,{filterId:v,network:g,itemId:b,load:f}=_.dataset,w=document.querySelector(`img[data-item-id="${b}"]`),x=null!==e&&void 0!==e&&e.completeDataObject?Object.values(e.completeDataObject).filter((t=>t.id===b)):[];if(null!==x&&void 0!==x&&x.length){var y;const t=await(async t=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((e=>t.includes(e)))||await fetch(t).then((t=>t.ok)).catch((()=>!1)))(null===(y=x[0])||void 0===y?void 0:y.postFileNew);if(!t&&w){if([2,18,3,28].includes(+g)&&"0"===f&&"34"!==v&&!_.src.includes("cloud.taggbox.com")){const t=((t,e,i)=>{var n,s,o,a,l;const{UserPlan:r,Wall:d}=e;return{table_name:null===r||void 0===r?void 0:r.db_table,...t,...null!==i&&void 0!==i&&i.length?{feedId:null===(n=i[0])||void 0===n?void 0:n.feedId,type:null===(s=i[0])||void 0===s?void 0:s.type,link:null===(o=i[0])||void 0===o?void 0:o.link,postFile:null===(a=i[0])||void 0===a?void 0:a.postFile,mediaFile:null===(l=i[0])||void 0===l?void 0:l.mediaFile}:{},url:null===d||void 0===d?void 0:d.url}})({wallId:m,postId:b,ownerId:p},i,x);try{const{data:e}=await(new l.A).post(o.t5,t,{headers:a.ML}),i=o.HY||o.MH?"":`https://images.${o.QR}/`;_.src="18"===g?`${i}${e.media}`:e.media}catch{_.src=n.gX}finally{u(_)}}else _.src=n.gX,u(_);r.shift(),c()}else{const t=`${n.th}/media/images/no-image.svg`;_.src=t,_.srcset=t,u(_),r.shift()}}},u=t=>t.setAttribute("data-load","1")},78167:(t,e,i)=>{i.r(e),i.d(e,{default:()=>a});var n=i(9950),s=i(91697),o=i(44414);class a extends n.PureComponent{render(){const{author:t,authorClass:e,networkId:i,size:n,inView:a}=this.props;return(0,o.jsx)("div",{className:e,style:{overflow:4==i?"visible":""},children:a?(0,o.jsx)("img",{className:`${e}__`,src:t.picture,"aria-label":"author",alt:t.name,width:n||44,height:n||44,onError:e=>{const n=(0,s.Yo)(i),o="#ffffff"==n?"000":n.replace("#","");e.target.src=t.errorPic?t.errorPic:`https://ui-avatars.com/api/?name=${t.name.replace(/\s/g,"")}&background=${o}&color=fff&length=1`}}):null},Math.random())}}},81572:(t,e,i)=>{i.d(e,{A:()=>o});var n=i(44414);const s=(t,e,i)=>(0,n.jsx)("div",{className:"tb_avg_rating_ico__ tb__icon tb-star-outline",style:{color:t,fontSize:i,minWidth:i+"px"},children:(0,n.jsxs)("div",{className:"tb_avg_rating_ico_fill__ tb__icon tb-star-fill",style:{color:t,width:10*e+"%",fontSize:i,minWidth:i+"px"},children:[(0,n.jsx)("div",{})," "]})}),o=t=>{let{rating:e,size:i,color:o}=t;const a=e>5?5:e,l=Math.trunc(5-a),r=Math.trunc(a),d=String(a).split(".")[1];return(0,n.jsxs)("div",{className:"tb_avg_rating__","aria-label":"Ratings",role:"status",children:[r?[...Array(r)].map(((t,e)=>(0,n.jsx)("div",{"data-index":e,className:"tb_avg_rating_ico__ tb__icon tb-star-fill",style:{color:o||"#F8B90C",fontSize:i,minWidth:i+"px"},children:(0,n.jsx)("div",{})},e))):null,d>0?s(o||"#F8B90C",d,i):null,l?[...Array(l)].map(((t,e)=>(0,n.jsx)("div",{className:"tb_avg_rating_ico__ tb__icon tb-star-outline",style:{fontSize:i,minWidth:i+"px"},children:(0,n.jsx)("div",{})},e))):null]})}},89874:(t,e,i)=>{i.d(e,{A:()=>p});var n=i(9950),s=i(10300),o=i(17119),a=i(1823),l=i(76506),r=i(21850),d=i(44414);const c=(0,n.memo)((t=>{let{item:e}=t;const i=e.discount>0&&e.discount!==e.price,n=e.discount>0?e.discount:e.price;return(0,d.jsxs)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"tb_tooltip_wrap",children:[(0,d.jsx)("div",{className:"tb_p_tooltip_title",children:e.title}),i&&(0,d.jsxs)("div",{className:"tb_p_tooltip_price tb_price_disabled",children:[e.currency,e.price]}),(e.price>0||e.discount>0)&&(0,d.jsxs)("div",{className:"tb_p_tooltip_price",children:[e.currency,n]})]})})),u=t=>{let{products:e,appData:i,Post:s,showTooltip:u}=t;const[h,p]=(0,n.useState)(null),m=(0,n.useMemo)((()=>{var t,e;return(null===i||void 0===i||null===(t=i.wall)||void 0===t||null===(e=t.ProductSetting)||void 0===e?void 0:e.Hotspot)||{}}),[i]);(0,n.useEffect)((()=>{if(u){const t=e.findIndex((t=>t.id===u));-1!==t&&p(t)}else p(null)}),[u,e]);const _=(0,n.useCallback)((t=>{null!==i&&void 0!==i&&i.wall&&(0,r.hq)({})}),[i,s]),v=(0,n.useCallback)(((t,e)=>{t.stopPropagation(),_(e),window.open(e.url,"_blank")}),[_]);return null!==m&&void 0!==m&&m.status?e.map(((t,e)=>{const i=`hotspot-${t.id}-${(0,l.Ul)()}`,n=h===e;return(0,d.jsxs)("div",{id:i,className:"tb_hotspot_dot"+(n?" tb_hotspot_active_":""),role:"button",style:{top:t.hotspot.top,left:t.hotspot.left},onMouseEnter:()=>p(e),onMouseLeave:()=>p(null),onClick:e=>v(e,t),"data-tooltip-offset":7,children:[(0,d.jsx)("div",{className:"tb_hotspot__ "+(0===m.type?"tb_hotspot_ani__":""),children:e+1}),(0,o.createPortal)((0,d.jsx)(a.m_,{className:"tb_pro_tooltip",anchorSelect:`#${i}`,clickable:!0,isOpen:n,children:(0,d.jsx)(c,{item:t})}),document.body)]},`${t.id}-${e}`)})):null},h=(0,n.memo)(u),p=(0,s.Ng)((t=>({appData:t.appData})))(h)},56071:(t,e,i)=>{i.d(e,{A:()=>m});var n=i(9950),s=Object.defineProperty,o=(t,e,i)=>((t,e,i)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i)(t,"symbol"!==typeof e?e+"":e,i),a=new Map,l=new WeakMap,r=0,d=void 0;function c(t){return Object.keys(t).sort().filter((e=>void 0!==t[e])).map((e=>{return`${e}_${"root"===e?(i=t.root,i?(l.has(i)||(r+=1,l.set(i,r.toString())),l.get(i)):"0"):t[e]}`;var i})).toString()}function u(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:d;if("undefined"===typeof window.IntersectionObserver&&void 0!==n){const s=t.getBoundingClientRect();return e(n,{isIntersecting:n,target:t,intersectionRatio:"number"===typeof i.threshold?i.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}const{id:s,observer:o,elements:l}=function(t){const e=c(t);let i=a.get(e);if(!i){const n=new Map;let s;const o=new IntersectionObserver((e=>{e.forEach((e=>{var i;const o=e.isIntersecting&&s.some((t=>e.intersectionRatio>=t));t.trackVisibility&&"undefined"===typeof e.isVisible&&(e.isVisible=o),null==(i=n.get(e.target))||i.forEach((t=>{t(o,e)}))}))}),t);s=o.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),i={id:e,observer:o,elements:n},a.set(e,i)}return i}(i),r=l.get(t)||[];return l.has(t)||l.set(t,r),r.push(e),o.observe(t),function(){r.splice(r.indexOf(e),1),0===r.length&&(l.delete(t),o.unobserve(t)),0===l.size&&(o.disconnect(),a.delete(s))}}n.Component;var h=i(66345),p=i(52867);const m=t=>{let{children:e}=t;const{ref:i,inView:s}=function(){let{threshold:t,delay:e,trackVisibility:i,rootMargin:s,root:o,triggerOnce:a,skip:l,initialInView:r,fallbackInView:d,onChange:c}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var h;const[p,m]=n.useState(null),_=n.useRef(c),[v,g]=n.useState({inView:!!r,entry:void 0});_.current=c,n.useEffect((()=>{if(l||!p)return;let n;return n=u(p,((t,e)=>{g({inView:t,entry:e}),_.current&&_.current(t,e),e.isIntersecting&&a&&n&&(n(),n=void 0)}),{root:o,rootMargin:s,threshold:t,trackVisibility:i,delay:e},d),()=>{n&&n()}}),[Array.isArray(t)?t.toString():t,p,o,s,a,l,i,d,e]);const b=null==(h=v.entry)?void 0:h.target,f=n.useRef(void 0);p||!b||a||l||f.current===b||(f.current=b,g({inView:!!r,entry:void 0}));const w=[m,v.inView,v.entry];return w.ref=w[0],w.inView=w[1],w.entry=w[2],w}({triggerOnce:!0,threshold:.01});return h.HY&&(0,p._7)(i),e({ref:i,inView:s})}},78262:(t,e,i)=>{i.d(e,{A:()=>d});var n=i(9950),s=i(76506),o=i(80415),a=i(45285),l=i(89874),r=i(44414);class d extends n.PureComponent{constructor(t){var e,i;super(t),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:t,offsetWidth:e}=this.mediaRef.current;this.setState({currentHeight:t,currentWidth:e})}},this.mediaSizeCalc=async()=>{const{Post:t,mediaOnly:e}=this.props,i=e||t.media;if((null===i||void 0===i||!i.height)&&(null===i||void 0===i||!i.width))try{var n;const{width:t,height:e}=await(0,s.TW)(null===i||void 0===i||null===(n=i.image)||void 0===n?void 0:n.small);this._isMounted&&this.setState({height:e,width:t})}catch(o){this._isMounted&&this.setState({height:300,width:300})}};const{mediaOnly:o,Post:a}=t;this.state={height:(null===o||void 0===o?void 0:o.height)||(null===a||void 0===a||null===(e=a.media)||void 0===e?void 0:e.height)||0,width:(null===o||void 0===o?void 0:o.width)||(null===a||void 0===a||null===(i=a.media)||void 0===i?void 0:i.width)||0,currentHeight:0,currentWidth:0},this.mediaRef=n.createRef()}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var t,e,i,n;const{height:s,width:d}=this.state,{ImageClass:c,Post:u,hotspot:h,size:p,blurBG:m,ProductSetting:_,mediaOnly:v,inView:g,multiKey:b}=this.props,{id:f,link:w,products:x}=u,y=v||(null===u||void 0===u?void 0:u.media),{currentWidth:j,currentHeight:k}=this.state,S=p||100*s/d,P={paddingBottom:1===S?null:`${S}%`},C={backgroundImage:g?`url(${null===y||void 0===y||null===(t=y.image)||void 0===t?void 0:t.small})`:null},$=d>s?"100%":d/s*100+"%",I=d>s?s/d*100+"%":"100%",N=u.isProduct&&h&&u.hotspot,A={width:N&&p?$:null,height:N&&p?I:null};return(0,r.jsxs)("div",{className:`${c}_wrap_`,style:P,ref:this.mediaRef,children:[N&&m?(0,r.jsx)("div",{className:"tb_blur_bg_",style:C}):null,(0,r.jsxs)("div",{className:`${c}_wrap_in`,style:A,children:[N?(0,r.jsx)(l.A,{products:this.props.multiPic?u.mediaList[b].product:x,ProductSetting:_,hotspot:u.hotspot,dataPost:u}):null,g?(0,r.jsx)("img",{className:`${c} tb_media-${f}`,src:null===y||void 0===y||null===(e=y.image)||void 0===e?void 0:e.small,srcSet:`${null===y||void 0===y||null===(i=y.image)||void 0===i?void 0:i.small} 1x, ${null===y||void 0===y||null===(n=y.image)||void 0===n?void 0:n.large} 2x`,sizes:`${j}px`,loading:g?"eager":"lazy",decoding:"async",fetchPriority:g?"high":"low","data-id":f,height:k,width:j,"data-height":s,"data-width":d,"data-link":w,onLoad:this.onLoad,onError:t=>{t.target.src=`${o.th}/media/error/no-image.svg`,t.target.srcset=`${o.th}/media/error/no-image.svg`,(0,a.bs)(t)},alt:null===y||void 0===y?void 0:y.title,title:null===y||void 0===y?void 0:y.title},`${f}-${s}-${d}-${g}`):null]})]})}}},89649:(t,e,i)=>{i.r(e),i.d(e,{default:()=>r});var n=i(9950),s=i(66345),o=i(88740),a=i(76506),l=i(44414);class r extends n.PureComponent{constructor(t){super(t),this.contentRef=n.createRef()}componentDidMount(){setTimeout((()=>{var t,e;if(null!==(t=this.contentRef)&&void 0!==t&&null!==(e=t.current)&&void 0!==e&&e.clientHeight){var i,n;const t=(null===(i=this.contentRef)||void 0===i||null===(n=i.current)||void 0===n?void 0:n.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}}),100)}render(){const{CardStyle:t,contentClass:e,content:i,contentTitle:n,maxLines:r,isReadMore:d}=this.props,c=t.content.trimcontent&&!s.HY?t.content.trimcontent:0,u={WebkitLineClamp:r,textAlign:t.style.textAlign},h=(0,a.w)(i),p=`${e} ${d?"":""+(c?` tb_content_line-${c}`:"")} tb-cTBfont-${t.style.variant}`;return(0,l.jsxs)("div",{className:p,ref:this.contentRef,style:u,children:[n?(0,l.jsx)("div",{className:"tb_bold_txt__",children:(0,o.Ay)(n)}):null,(0,o.Ay)(h)]})}}},6723:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});var n=i(9950),s=i(76506),o=i(44414);const a=t=>{const{createdAt:e,timeClass:i}=t;return(0,o.jsx)("div",{className:i,role:"status","aria-label":`post timestamp ${(0,s.fF)(e)}`,children:(0,s.fF)(e)})},l=(0,n.memo)(a)},8568:(t,e,i)=>{i.r(e),i.d(e,{default:()=>k});var n=i(9950),s=i(74378),o=i.n(s),a=i(78167),l=i(6723),r=i(52867),d=i(44414);const c=t=>{let{Post:e,CardStyle:i,inView:n}=t;const{author:s,networkId:o}=e,c=(0,r.zK)(s.name),u=!(!i.author.status||c);return(0,d.jsx)("div",{className:"tb_g_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:(0,d.jsxs)("div",{className:"tb_g_author",children:[u?(0,d.jsx)(a.default,{author:s,network:e.network,networkId:o,authorClass:"tb_g_author_profile",inView:n}):"",(0,d.jsxs)("div",{className:"tb_g_author_info",children:[u?(0,d.jsx)("div",{className:"tb_g_authorname",children:s.name}):"",i.timeStatus?(0,d.jsx)(l.default,{createdAt:e.createdAt,timeClass:`tb_g_time tb-cTBfont-${i.author.variant}`}):""]})]})})};i(61038);var u=i(78262),h=i(78885),p=i(60497);i(99425),i(49071);const m=t=>{let{Post:e,ImageClass:i,Item:n,index:s,inView:o}=t;return(0,d.jsx)(u.A,{ImageClass:i,Post:e,mediaOnly:n||!1,size:!1,inView:o,multiKey:s})},_=t=>{let{Post:e,ImageClass:i,inView:n}=t;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h.RC,{modules:[p.dK,p.Vx],spaceBetween:0,autoHeight:!0,slidesPerView:1,pagination:!1,navigation:{prevEl:`#tb_c_p_prev-${e.id}`,nextEl:`#tb_c_p_next-${e.id}`},className:"tb_c_p__media_slider",children:e.mediaList.length>0?e.mediaList.map(((t,s)=>(0,d.jsx)(h.qr,{children:(0,d.jsx)(m,{ImageClass:i,Post:e,Item:t,index:s,inView:n},s)},s?`slider_${s}`:null))):(0,d.jsx)(m,{ImageClass:i,Post:e,inView:n})}),(null===e||void 0===e?void 0:e.mediaList.length)>1&&(0,d.jsxs)("div",{className:"tb_c_p__arrow_wrapper_",onClick:t=>t.stopPropagation(),children:[(0,d.jsx)("div",{id:`tb_c_p_prev-${e.id}`,className:"tb_c_p__arrow tb_c_p__arrow_left__ tb__icon tb-arrow-left-alt",children:(0,d.jsx)("div",{})}),(0,d.jsx)("div",{id:`tb_c_p_next-${e.id}`,className:"tb_c_p__arrow tb_c_p__arrow_right__ tb__icon tb-arrow-right-alt",children:(0,d.jsx)("div",{})})]})]})},v=n.memo(_);var g=i(89649),b=i(81572),f=i(66345),w=i(80415),x=i(56071);const y=t=>{let{Post:e,adjustWidth:i,CardStyle:s,clickToShowPopUp:o,itemIndex:a,handlePressStart:l,handlePressEnd:u,ThemeStyle:h,ThemeInfo:p,onClickPopUpSlider:m}=t;const _=1!=e.type,y=s.content.trimcontent?(0,r.Ex)(e.content.text,200):e.content.text;(0,n.useEffect)((()=>{e.isPopUp&&m(a,e)}),[a,e.isPopUp,e]);const j=e.products;return(0,d.jsx)(x.A,{children:t=>{var i,n,r,m,x,k;let{ref:S,inView:P}=t;return(0,d.jsx)("div",{id:`tb_g_id-${e.id}`,className:"tb_g_post_wrapper","tb-network":e.network.id,role:"article","aria-label":`Post ${parseInt(a)+1},${y}`,style:{padding:s.style.padding/2,opacity:P?1:0,transition:P?"opacity .5s ease-in-out":""},tabIndex:"0",ref:S,children:(0,d.jsxs)("div",{className:"tb_g_post_in",onTouchStart:l,onTouchEnd:t=>u(t,a,e),onClick:o(a,e),role:"button","aria-label":"Popup",tabIndex:"0",children:[_?(0,d.jsx)("div",{className:"tb_g_media_wrap",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:(0,d.jsx)(v,{ImageClass:"tb_g_image",VideoClass:"tb_g_video",Post:e,CardStyle:s,ThemeInfo:p,ThemeStyle:h,inView:P})}):null,(0,d.jsxs)("div",{className:"tb_g_contant_wrapper",children:[(0,d.jsx)(c,{Post:e,CardStyle:s,ThemeStyle:h,mediaType:_,size:40,inView:P}),e.rating>0?(0,d.jsxs)("div",{className:"tb_g_rating__",children:[(0,d.jsx)(b.A,{size:20,rating:e.rating})," "]}):"",f.HY&&s.content.status?(0,d.jsx)(g.default,{contentClass:"tb_g_content",Post:e,content:y,CardStyle:s,contentTitle:e.contentTitle}):"",e.isProduct?(0,d.jsxs)("div",{className:"tb_g_p_wrp",children:[(0,d.jsx)("div",{className:"tb_g_p_",children:(0,d.jsx)("img",{className:"tb_g_p_img",decoding:"async",src:null===(i=j[0])||void 0===i?void 0:i.image,width:"187",height:"259",alt:"",loading:"lazy",draggable:"false",onError:t=>t.target.src=w.qF})}),(0,d.jsxs)("div",{className:"tb_g_p_info",children:[(0,d.jsx)("div",{className:"tb_g_p_t",children:null===(n=j[0])||void 0===n?void 0:n.title}),(0,d.jsxs)("div",{className:"tb_g_p_p",children:[null===(r=j[0])||void 0===r?void 0:r.currency,(null===(m=j[0])||void 0===m?void 0:m.discount)>0?null===(x=j[0])||void 0===x?void 0:x.discount:null===(k=j[0])||void 0===k?void 0:k.price]})]})]}):null]})]})})}})};class j extends n.PureComponent{render(){const{postData:t,completeDataObject:e,adjustWidth:i,handlePressStart:n,handlePressEnd:s,CardStyle:a,ThemeStyle:l,postSize:r,clickToShowPopUp:c,onClickPopUpSlider:u}=this.props;return(0,d.jsx)(o(),{className:"tb_g_post_container",tabIndex:"0","aria-label":`There are ${t&&t.length>0?t.length:0} posts in the feed`,role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_g_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:t&&t.length>0&&t.map(((t,o)=>{const h=e[t];return(0,d.jsx)(y,{adjustWidth:1==h.highlight?2*i:i,clickToShowPopUp:c,handlePressStart:n,handlePressEnd:s,onClickPopUpSlider:u,Post:h,postSize:r,itemIndex:o,CardStyle:a,ThemeStyle:l},o)}))})}}const k=j},91697:(t,e,i)=>{i.d(e,{EC:()=>n,Oi:()=>o,Yo:()=>s});const n=t=>({0:"manual-upload",1:"twitter",2:"instagram",3:"facebook",4:"google",5:"pinterest",6:"flickr",7:"youtube",8:"vimeo",10:"linkedin",11:"tumblr",12:"rss",13:"star",15:"workplace",18:"instagram",19:"yelp",20:"slack",21:"yammer",23:"airbnb",25:"soundcloud",26:"giphy",27:"deviantart",28:"tiktok",29:"onsite-upload",30:"vkontakte",32:"chrome",33:"collabration",34:"amazon",35:"tripadvisor",36:"star",37:"aliexpress"}[t]||""),s=t=>({0:"#313A53",1:"#29a9e1",2:"#000000",3:"#1b74e4",4:"#4081ed",5:"#e60022",6:"#0a63dc",7:"#FF0000",8:"#1eb8eb",10:"#0a66c2",11:"#36465d",12:"#f78422",13:"#FABF04",15:"#4767ab",18:"#000000",19:"#be362e",20:"#510d4e",21:"#0078d4",23:"#ff7977",25:"#ff7700",26:"#000000",27:"#00e59b",28:"#000000",29:"#613983",30:"#0077FF",32:"#4c8bf5",33:"#4e69ed",34:"#4e69ed",35:"#60c196",36:"#00e9ff",37:"#E52F20"}[t]||""),o=t=>({0:"Manual Upload",1:"Twitter",2:"Instagram",3:"Facebook",4:"Google",5:"Pinterest",6:"Flickr",7:"YouTube",8:"Vimeo",10:"LinkedIn",11:"Tumblr",12:"RSS",13:"Star",15:"Workplace",18:"Instagram",19:"Yelp",20:"Slack",21:"Yammer",23:"Airbnb",25:"Soundcloud",26:"Giphy",27:"Deviantart",28:"Tiktok",29:"Review Hub",30:"Vkontakte",32:"Chrome Extension",33:"Collab with Creators",34:"Amazon",35:"Tripadvisor",36:"Review Hub",37:"Aliexpress"}[t]||"")},49071:()=>{},61038:()=>{}}]);