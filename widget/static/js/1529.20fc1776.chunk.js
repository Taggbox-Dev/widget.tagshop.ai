(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[1529,5537],{45285:(t,e,i)=>{"use strict";i.d(e,{bs:()=>d});var n=i(80415),o=i(296),s=i(66345),r=i(28322),a=i(14313);let l=[];const d=t=>{t.persist();const e=t.target,{network:i,itemId:n,themeId:o}=e.dataset;if(1!=i||[3,4,16,47,50,55,60].includes(o))l.includes(t)||l.push(t);else{const t=document.querySelector(`.tb_media-${n}`);t&&(t.style.display="none")}1===l.length&&c()},c=async()=>{var t;const{postData:e,wall:i}=o.A.getState().appData;if(!i||!Object.keys(i).length||!l.length)return;const{User:d,Wall:h}=i,p=null===d||void 0===d?void 0:d.id,m=(s.HY,null===h||void 0===h?void 0:h.id),f=null===(t=l[0])||void 0===t?void 0:t.target,{filterId:v,network:g,itemId:_,load:b}=f.dataset,y=document.querySelector(`img[data-item-id="${_}"]`),w=null!==e&&void 0!==e&&e.completeDataObject?Object.values(e.completeDataObject).filter((t=>t.id===_)):[];if(null!==w&&void 0!==w&&w.length){var x;const t=await(async t=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((e=>t.includes(e)))||await fetch(t).then((t=>t.ok)).catch((()=>!1)))(null===(x=w[0])||void 0===x?void 0:x.postFileNew);if(!t&&y){if([2,18,3,28].includes(+g)&&"0"===b&&"34"!==v&&!f.src.includes("cloud.taggbox.com")){const t=((t,e,i)=>{var n,o,s,r,a;const{UserPlan:l,Wall:d}=e;return{table_name:null===l||void 0===l?void 0:l.db_table,...t,...null!==i&&void 0!==i&&i.length?{feedId:null===(n=i[0])||void 0===n?void 0:n.feedId,type:null===(o=i[0])||void 0===o?void 0:o.type,link:null===(s=i[0])||void 0===s?void 0:s.link,postFile:null===(r=i[0])||void 0===r?void 0:r.postFile,mediaFile:null===(a=i[0])||void 0===a?void 0:a.mediaFile}:{},url:null===d||void 0===d?void 0:d.url}})({wallId:m,postId:_,ownerId:p},i,w);try{const{data:e}=await(new a.A).post(s.t5,t,{headers:r.ML}),i=s.HY||s.MH?"":`https://images.${s.QR}/`;f.src="18"===g?`${i}${e.media}`:e.media}catch{f.src=n.gX}finally{u(f)}}else f.src=n.gX,u(f);l.shift(),c()}else{const t=`${n.th}/media/images/no-image.svg`;f.src=t,f.srcset=t,u(f),l.shift()}}},u=t=>t.setAttribute("data-load","1")},89874:(t,e,i)=>{"use strict";i.d(e,{A:()=>p});var n=i(9950),o=i(10300),s=i(17119),r=i(1823),a=i(76506),l=i(21850),d=i(44414);const c=(0,n.memo)((t=>{let{item:e}=t;const i=e.discount>0&&e.discount!==e.price,n=e.discount>0?e.discount:e.price;return(0,d.jsxs)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"tb_tooltip_wrap",children:[(0,d.jsx)("div",{className:"tb_p_tooltip_title",children:e.title}),i&&(0,d.jsxs)("div",{className:"tb_p_tooltip_price tb_price_disabled",children:[e.currency,e.price]}),(e.price>0||e.discount>0)&&(0,d.jsxs)("div",{className:"tb_p_tooltip_price",children:[e.currency,n]})]})})),u=t=>{let{products:e,appData:i,Post:o,showTooltip:u}=t;const[h,p]=(0,n.useState)(null),m=(0,n.useMemo)((()=>{var t,e;return(null===i||void 0===i||null===(t=i.wall)||void 0===t||null===(e=t.ProductSetting)||void 0===e?void 0:e.Hotspot)||{}}),[i]);(0,n.useEffect)((()=>{if(u){const t=e.findIndex((t=>t.id===u));-1!==t&&p(t)}else p(null)}),[u,e]);const f=(0,n.useCallback)((t=>{null!==i&&void 0!==i&&i.wall&&(0,l.hq)({})}),[i,o]),v=(0,n.useCallback)(((t,e)=>{t.stopPropagation(),f(e),window.open(e.url,"_blank")}),[f]);return null!==m&&void 0!==m&&m.status?e.map(((t,e)=>{const i=`hotspot-${t.id}-${(0,a.Ul)()}`,n=h===e;return(0,d.jsxs)("div",{id:i,className:"tb_hotspot_dot"+(n?" tb_hotspot_active_":""),role:"button",style:{top:t.hotspot.top,left:t.hotspot.left},onMouseEnter:()=>p(e),onMouseLeave:()=>p(null),onClick:e=>v(e,t),"data-tooltip-offset":7,children:[(0,d.jsx)("div",{className:"tb_hotspot__ "+(0===m.type?"tb_hotspot_ani__":""),children:e+1}),(0,s.createPortal)((0,d.jsx)(r.m_,{className:"tb_pro_tooltip",anchorSelect:`#${i}`,clickable:!0,isOpen:n,children:(0,d.jsx)(c,{item:t})}),document.body)]},`${t.id}-${e}`)})):null},h=(0,n.memo)(u),p=(0,o.Ng)((t=>({appData:t.appData})))(h)},56071:(t,e,i)=>{"use strict";i.d(e,{A:()=>m});var n=i(9950),o=Object.defineProperty,s=(t,e,i)=>((t,e,i)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i)(t,"symbol"!==typeof e?e+"":e,i),r=new Map,a=new WeakMap,l=0,d=void 0;function c(t){return Object.keys(t).sort().filter((e=>void 0!==t[e])).map((e=>{return`${e}_${"root"===e?(i=t.root,i?(a.has(i)||(l+=1,a.set(i,l.toString())),a.get(i)):"0"):t[e]}`;var i})).toString()}function u(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:d;if("undefined"===typeof window.IntersectionObserver&&void 0!==n){const o=t.getBoundingClientRect();return e(n,{isIntersecting:n,target:t,intersectionRatio:"number"===typeof i.threshold?i.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),()=>{}}const{id:o,observer:s,elements:a}=function(t){const e=c(t);let i=r.get(e);if(!i){const n=new Map;let o;const s=new IntersectionObserver((e=>{e.forEach((e=>{var i;const s=e.isIntersecting&&o.some((t=>e.intersectionRatio>=t));t.trackVisibility&&"undefined"===typeof e.isVisible&&(e.isVisible=s),null==(i=n.get(e.target))||i.forEach((t=>{t(s,e)}))}))}),t);o=s.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),i={id:e,observer:s,elements:n},r.set(e,i)}return i}(i),l=a.get(t)||[];return a.has(t)||a.set(t,l),l.push(e),s.observe(t),function(){l.splice(l.indexOf(e),1),0===l.length&&(a.delete(t),s.unobserve(t)),0===a.size&&(s.disconnect(),r.delete(o))}}n.Component;var h=i(66345),p=i(52867);const m=t=>{let{children:e}=t;const{ref:i,inView:o}=function(){let{threshold:t,delay:e,trackVisibility:i,rootMargin:o,root:s,triggerOnce:r,skip:a,initialInView:l,fallbackInView:d,onChange:c}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var h;const[p,m]=n.useState(null),f=n.useRef(c),[v,g]=n.useState({inView:!!l,entry:void 0});f.current=c,n.useEffect((()=>{if(a||!p)return;let n;return n=u(p,((t,e)=>{g({inView:t,entry:e}),f.current&&f.current(t,e),e.isIntersecting&&r&&n&&(n(),n=void 0)}),{root:s,rootMargin:o,threshold:t,trackVisibility:i,delay:e},d),()=>{n&&n()}}),[Array.isArray(t)?t.toString():t,p,s,o,r,a,i,d,e]);const _=null==(h=v.entry)?void 0:h.target,b=n.useRef(void 0);p||!_||r||a||b.current===_||(b.current=_,g({inView:!!l,entry:void 0}));const y=[m,v.inView,v.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}({triggerOnce:!0,threshold:.01});return h.HY&&(0,p._7)(i),e({ref:i,inView:o})}},78262:(t,e,i)=>{"use strict";i.d(e,{A:()=>d});var n=i(9950),o=i(76506),s=i(80415),r=i(45285),a=i(89874),l=i(44414);class d extends n.PureComponent{constructor(t){var e,i;super(t),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:t,offsetWidth:e}=this.mediaRef.current;this.setState({currentHeight:t,currentWidth:e})}},this.mediaSizeCalc=async()=>{const{Post:t,mediaOnly:e}=this.props,i=e||t.media;if((null===i||void 0===i||!i.height)&&(null===i||void 0===i||!i.width))try{var n;const{width:t,height:e}=await(0,o.TW)(null===i||void 0===i||null===(n=i.image)||void 0===n?void 0:n.small);this._isMounted&&this.setState({height:e,width:t})}catch(s){this._isMounted&&this.setState({height:300,width:300})}};const{mediaOnly:s,Post:r}=t;this.state={height:(null===s||void 0===s?void 0:s.height)||(null===r||void 0===r||null===(e=r.media)||void 0===e?void 0:e.height)||0,width:(null===s||void 0===s?void 0:s.width)||(null===r||void 0===r||null===(i=r.media)||void 0===i?void 0:i.width)||0,currentHeight:0,currentWidth:0},this.mediaRef=n.createRef()}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var t,e,i,n;const{height:o,width:d}=this.state,{ImageClass:c,Post:u,hotspot:h,size:p,blurBG:m,ProductSetting:f,mediaOnly:v,inView:g,multiKey:_}=this.props,{id:b,link:y,products:w}=u,x=v||(null===u||void 0===u?void 0:u.media),{currentWidth:S,currentHeight:j}=this.state,k=p||100*o/d,P={paddingBottom:1===k?null:`${k}%`},$={backgroundImage:g?`url(${null===x||void 0===x||null===(t=x.image)||void 0===t?void 0:t.small})`:null},C=d>o?"100%":d/o*100+"%",E=d>o?o/d*100+"%":"100%",I=u.isProduct&&h&&u.hotspot,N={width:I&&p?C:null,height:I&&p?E:null};return(0,l.jsxs)("div",{className:`${c}_wrap_`,style:P,ref:this.mediaRef,children:[I&&m?(0,l.jsx)("div",{className:"tb_blur_bg_",style:$}):null,(0,l.jsxs)("div",{className:`${c}_wrap_in`,style:N,children:[I?(0,l.jsx)(a.A,{products:this.props.multiPic?u.mediaList[_].product:w,ProductSetting:f,hotspot:u.hotspot,dataPost:u}):null,g?(0,l.jsx)("img",{className:`${c} tb_media-${b}`,src:null===x||void 0===x||null===(e=x.image)||void 0===e?void 0:e.small,srcSet:`${null===x||void 0===x||null===(i=x.image)||void 0===i?void 0:i.small} 1x, ${null===x||void 0===x||null===(n=x.image)||void 0===n?void 0:n.large} 2x`,sizes:`${S}px`,loading:g?"eager":"lazy",decoding:"async",fetchPriority:g?"high":"low","data-id":b,height:j,width:S,"data-height":o,"data-width":d,"data-link":y,onLoad:this.onLoad,onError:t=>{t.target.src=`${s.th}/media/error/no-image.svg`,t.target.srcset=`${s.th}/media/error/no-image.svg`,(0,r.bs)(t)},alt:null===x||void 0===x?void 0:x.title,title:null===x||void 0===x?void 0:x.title},`${b}-${o}-${d}-${g}`):null]})]})}}},3720:(t,e,i)=>{"use strict";i.d(e,{A:()=>c});var n=i(9950),o=i(38092),s=i.n(o),r=i(66345),a=i(76506),l=i(44414);class d extends n.Component{constructor(t){super(t),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:t,offsetWidth:e}=this.mediaRef.current;this.setState({currentHeight:t,currentWidth:e})}},this.mediaSizeCalc=async()=>{const{media:t}=this.props.Post;if((null===t||void 0===t||!t.height)&&(null===t||void 0===t||!t.width))try{var e;const{width:i,height:n}=await(0,a.TW)(null===t||void 0===t||null===(e=t.image)||void 0===e?void 0:e.small);this._isMounted&&this.setState({calcHeight:n,calcWidth:i})}catch(i){this._isMounted&&this.setState({calcHeight:300,calcWidth:300})}},this.setVideoLoaded=t=>{this._isMounted&&this.setState({videoLoaded:t})},this.state={loadError:!1,videoLoaded:!1,calcHeight:0,calcWidth:0,currentHeight:0,currentWidth:0},this.mediaRef=n.createRef(),this._isMounted=!1}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var t,e,i,n;const{VideoClass:o,Post:a,controls:d,autoPlay:c,handleVideoEnded:u,muted:h,intervalTime:p,size:m,inView:f}=this.props,{calcHeight:v,calcWidth:g,currentWidth:_,currentHeight:b}=this.state,{media:y,id:w,link:x,networkId:S}=a,j=1===m,k=null!==y&&void 0!==y&&y.height?null===y||void 0===y?void 0:y.height:v,P=null!==y&&void 0!==y&&y.width?null===y||void 0===y?void 0:y.width:g,$={paddingBottom:`${j?null:m||100*k/P}%`};return(0,l.jsx)("div",{className:`${o}_wrap_`,style:$,ref:this.mediaRef,children:(0,l.jsx)(s(),{className:`${o} tb_media-${w}`,url:f?null===y||void 0===y||null===(t=y.video)||void 0===t?void 0:t.full:null===y||void 0===y||null===(e=y.image)||void 0===e?void 0:e.small,"data-height":v,"data-width":g,"data-type":"video","data-network":S,"data-link":x,"data-item-id":w,"data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":P,"data-height":k,poster:null===y||void 0===y||null===(i=y.image)||void 0===i?void 0:i.small}},file:{attributes:{preload:"metadata",poster:null===y||void 0===y||null===(n=y.image)||void 0===n?void 0:n.small,height:b,width:_}}},loop:!(r.aD&&!r.HY&&null!==a&&void 0!==a&&a.loopStop)&&c,onError:t=>{j&&u&&setTimeout((()=>{this._isMounted&&u&&u()}),1e3*p),this.setVideoLoaded(!1)},autoPlay:f&&c?1:0,muted:h,volume:c?1:0,playsinline:1,onReady:()=>this.setVideoLoaded(!r.HY),playing:f&&c?1:0,controls:d||!1,onEnded:u,title:null===y||void 0===y?void 0:y.title},`${w}-${b}-${g}-${f}`)})}}const c=(0,n.memo)(d)},15537:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>a});var n=i(9950),o=i(66345),s=i(44414);const r=n.lazy((()=>i.e(620).then(i.bind(i,20620)))),a=t=>{const{Post:e,IconClass:i,isCenter:a,hideVideo:l,show:d}=t,c=!![3,5].includes(e.type),u=7===e.network.id,h=!!(e.mediaList&&e.mediaList.length>0),p=1===e.isAudio,m=!!e.isProduct,f=(0,s.jsx)(n.Suspense,{fallback:(0,s.jsx)(s.Fragment,{}),children:(0,s.jsx)(r,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"})}),v=(0,s.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:"  "}),g=(0,s.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:"  "}),_=(0,s.jsx)("div",{className:"tb__icon tb-"+(o.aD?"reel-fill tb_reel_ico":"video tb_video_ico"),children:"  "}),b=(0,s.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:"  "}),y=(0,s.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:"  "});return d?(0,s.jsxs)(s.Fragment,{children:[a&&(u||c)?(0,s.jsxs)("div",{className:`${i} tb__media_ico_c`,children:[c&&!u?y:"",c&&u?f:""]}):null,m||h||c?(0,s.jsxs)("div",{className:`${i} tb__media_ico_`,children:[m?b:"",h?v:"",a||!c||u||l?"":p?g:_]}):null]}):null}},50566:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>y});var n=i(9950),o=i(66345),s=i(10300),r=i(53556),a=i(61302),l=i(78262),d=i(3720),c=i(15537),u=i(44414);const h=t=>{let{Post:e,ThemeInfo:i,ThemeStyle:n,ThemeRule:s,index:r,inView:a}=t;const h=(9==(null===i||void 0===i?void 0:i.productType)||o.MH)&&s.aspectImageRatio?s.aspectImageRatio:100,p=!(![3,5].includes(e.type)||1!=n.autoPlay);return(0,u.jsxs)("div",{className:"tb_ht_media_wrap",children:[(0,u.jsx)(c.default,{Post:e,IconClass:"tb_ht_media_icon",isCenter:!1}),p?(0,u.jsx)(d.A,{VideoClass:"tb_ht_video",Post:e,size:h,isCover:!0,controls:!1,autoPlay:!0,muted:!0,index:r,inView:a}):(0,u.jsx)(l.A,{ImageClass:"tb_ht_image",Post:e,size:h,hotspot:!1,index:r,inView:a})]})};var p=i(56071);const m=(0,n.lazy)((()=>i.e(2663).then(i.bind(i,92663)))),f=(0,n.lazy)((()=>i.e(7713).then(i.bind(i,47713)))),v=(0,n.lazy)((()=>i.e(531).then(i.bind(i,60531)))),g=t=>{let{Post:e,CardStyle:i,index:s,ThemeInfo:r,onClickToCTA:a,ThemeStyle:l,onClickPopUpSlider:d}=t;const c=81!=r.id,g=o.MH?"tb_ht_color_overlay":"tb_ht_post_overlay-dark",_={backgroundColor:o.MH?i.style.background:""},b=c&&o.MH?"50%":null;return(0,n.useEffect)((()=>{e.isPopUp&&d(s,e)}),[s,e.isPopUp,e]),(0,u.jsx)(p.A,{children:t=>{let{ref:o,inView:d}=t;return(0,u.jsx)("div",{id:`tb_ht_id-${e.id}`,className:"tb_ht_post_wrapper",style:{padding:i.style.padding/2,opacity:d?1:0,transition:d?"opacity .5s ease-in-out":""},"tb-network":e.network.id,"tb-product":e.isShopIcon?1:e.isHotspot?2:0,"area-label":e.content.text,role:"article",ref:o,children:(0,u.jsx)("div",{className:"tb_ht_post_in",style:{borderRadius:b},role:"button","aria-label":"Popup",tabIndex:"0",children:(0,u.jsxs)("div",{className:"tb_ht_post_media_wrapp",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[(0,u.jsx)(h,{Post:e,CardStyle:i,ThemeStyle:l,ThemeInfo:r,index:s,inView:d},s),(0,u.jsxs)("div",{className:"tb_ht_post_details",children:[(0,u.jsx)("div",{className:"tb_ht_social_",children:(0,u.jsx)(n.Suspense,{fallback:(0,u.jsx)(u.Fragment,{}),children:(0,u.jsx)(m,{networkClass:"tb_ht_social_ico_",networkId:e.networkId,iconStyle:i.icon})})}),""!=i.shopText&&e.isProduct?(0,u.jsx)(n.Suspense,{fallback:(0,u.jsx)(u.Fragment,{}),children:(0,u.jsx)(f,{CardStyle:i,mode:1,btnClass:"tb_ht_btn_wrap"})}):null,e.ctaStatus?(0,u.jsx)("div",{className:"tb_ht_post_cta",onClick:t=>{t.stopPropagation()},children:(0,u.jsx)(n.Suspense,{fallback:(0,u.jsx)(u.Fragment,{}),children:(0,u.jsx)(v,{ctaClass:"tb_ht_post_cta_btn",Post:e,onClickToCTA:a})})}):null]}),(0,u.jsx)("div",{className:`tb_ht_post_overlay ${g}`,style:_,children:(0,u.jsx)("div",{})})]})})})}})};i(61038);var _=i(21850);class b extends n.Component{constructor(t){super(t),this.requestData=()=>{const{appendData:t,ThemeInfo:e,ThemeStyle:i,preRender:n,hasMoreData:s,nextData:r}=this.props;!this.state.loadData&&this.updatepost(0),s&&r(o.HY?e.webId:e.wallId,Math.floor(Date.now()/1e3),i.totalPosts,t.networkID,t.after,n,t.heightEvent)},this.updatepost=t=>{this.state.loadData||(this.setState({loadData:!0}),setTimeout((()=>this.props.loadMoredata()),1e3*t))},this.autoScrollSlider=t=>{t.on("drag",(()=>{this.isDragging=!0,!this.state.loadData&&this.updatepost(0)})),t.on("move",(()=>{!this.state.loadData&&!this.isDragging&&this.updatepost(3)}));const e=t.index;t.length-e===t._o.perPage&&this.requestData()},this.getPerPage=t=>{const e=this.props.ThemeStyle.column.mobile;return o.HY?this.props.cardNumber:e>0?e:t},this.state={loadData:!1},this.inputRefs={},this.isDragging=!1}componentDidMount(){setTimeout((()=>{const t=document.querySelectorAll(".splide__slide");t&&t.forEach((t=>{t.removeAttribute("aria-hidden"),t.removeAttribute("role")}))}),100)}componentDidUpdate(){const t=Object.values(this.inputRefs)[0],{postData:e,completeDataObject:i,onClickPopUpSlider:n,ThemeStyle:o,parentID:s}=this.props,r=o.row;if(t&&Object.values(t)[5].length>0){Object.values(t)[5].map((t=>{if(t.classList){const r=String(t.classList.value).split(" ").filter((t=>String(t).includes("tb_")));var o=r[0];String(r[0]).includes("tb_")&&(o=String(r[0]).replace("tb_",""));const a=e.findIndex((t=>t==o));let l=document.querySelectorAll(`#${t.id}`);for(let t=0;t<l.length;t++){let e=l[t],r=e.getAttribute("p_id");String(s)===String(r)&&e.addEventListener("click",(t=>{t.preventDefault();const e=i[o];n(a,e)}))}}}))}else if(2==r){Object.values(t)[5].map((t=>{t&&t.childNodes.length>0&&t.childNodes.forEach((t=>{t&&t.childNodes.length>0&&t.childNodes.forEach((t=>{if(t.classList){const r=String(t.classList.value).split(" ").filter((t=>String(t).includes("tb_")));var o=r[0];String(r[0]).includes("tb_")&&(o=String(r[0]).replace("tb_",""));const a=e.findIndex((t=>t==o));let l=document.querySelectorAll(`.tb_hs_post_container #${t.id}`);for(let t=0;t<l.length;t++){let e=l[t],r=e.getAttribute("p_id");String(s)===String(r)&&e.addEventListener("click",(t=>{t.preventDefault();const e=i[o];n(a,e)}))}}}))}))}))}}render(){const{postData:t,completeDataObject:e,CardStyle:i,ThemeStyle:n,ThemeInfo:s,parentID:l,onClickToCTA:d,cardNumber:c,onClickPopUpSlider:h,handlePressStart:p,handlePressEnd:m}=this.props,f=n.column.desktop,v=n.slide.autoSlide,_=n.slide.slideDuration,b=n.autoScrollStatus,y=l,w={},x=(1===b||!Object.keys(w).length)&&"slide",S={...w,grid:{rows:1},type:1!==b&&x,rewind:!0,rewindSpeed:1e3,interval:1===v&&parseInt(_)>0?1e3*parseInt(_):5e3,perPage:o.HY?c:f>0?f:5,perMove:1,gap:0,autoplay:1===v,padding:0,pagination:!1,arrows:!0,breakpoints:{560:{perPage:this.getPerPage(1)},767:{perPage:this.getPerPage(2)},991:{perPage:this.getPerPage(3)},1200:{perPage:o.HY?c:f>0?f:4},1400:{perPage:o.HY?c:f>0?f:5},1600:{perPage:o.HY?c:f>0?f:6}}};let j=t.length<10?Array.from({length:10},((e,i)=>t[i%t.length])):t;return""!=l?(0,u.jsx)("div",{className:"tb_ht_post_container",children:(0,u.jsxs)(r.eB,{hasTrack:!1,className:"tb_ht_post_slider",options:S,extensions:{Grid:a.x},ref:t=>this.inputRefs[y]=t,onMove:this.autoScrollSlider,children:[(0,u.jsx)("div",{className:"splide__track",children:(0,u.jsx)("div",{className:"splide__list",children:(n.row>1&&1!==j.length&&j.length%2!==0?j.pop():j)&&j&&j.length>0&&j.map(((t,o)=>{const a=e[t];return(0,u.jsx)(r.Nn,{"data-id":a.id,onMouseDown:p,onMouseUp:t=>m(t,o,a),onTouchStart:p,onTouchEnd:t=>m(t,o,a),style:{margin:0,padding:0},className:`tb_${a.id}`,p_id:l,children:(0,u.jsx)(g,{onClickToCTA:d,onClickPopUpSlider:h,Post:a,index:o,CardStyle:i,ThemeStyle:n,ThemeInfo:s})},o)}))})}),(0,u.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_ht_arrow_wrapper_",children:[(0,u.jsx)("div",{className:"tb_ht_arrow splide__arrow splide__arrow--prev tb_ht_arrow tb_ht_arrow_left__ tb__icon tb-arrow-left-alt",role:"button","aria-label":"Go to previous slide",children:(0,u.jsx)("div",{})}),(0,u.jsx)("div",{className:"tb_ht_arrow splide__arrow splide__arrow--next  tb_ht_arrow_right__ tb__icon tb-arrow-right-alt",onClick:()=>!this.state.loadData&&this.updatepost(0),role:"button","aria-label":"Go to next slide",children:(0,u.jsx)("div",{})})]})]})}):null}}const y=(0,n.memo)((0,s.Ng)("",(t=>({nextData:(e,i,n,o,s,r,a,l)=>t((0,_.wF)(e,i,n,o,s,r,a,l))})))(b))},61302:(t,e,i)=>{"use strict";function n(t,e,i){return Array.prototype.slice.call(t,e,i)}function o(t){return t.bind.apply(t,[null].concat(n(arguments,1)))}function s(t,e){return typeof e===t}i.d(e,{x:()=>nt});var r=Array.isArray;function a(t){return r(t)?t:[t]}function l(t,e){a(t).forEach(e)}o(s,"function"),o(s,"string"),o(s,"undefined");var d=Object.keys;function c(t){return n(arguments,1).forEach((function(e){!function(t,e,i){if(t){var n=d(t);n=i?n.reverse():n;for(var o=0;o<n.length;o++){var s=n[o];if("__proto__"!==s&&!1===e(t[s],s))break}}}(e,(function(i,n){t[n]=e[n]}))})),t}var u="splide";var h="visible",p="hidden",m="refresh",f="updated",v="destroy";function g(t){var e=t?t.event.bus:document.createDocumentFragment(),i=function(){var t=[];function e(t,e,i){l(t,(function(t){t&&l(e,(function(e){e.split(" ").forEach((function(e){var n=e.split(".");i(t,n[0],n[1])}))}))}))}return{bind:function(i,n,o,s){e(i,n,(function(e,i,n){var r="addEventListener"in e,a=r?e.removeEventListener.bind(e,i,o,s):e.removeListener.bind(e,o);r?e.addEventListener(i,o,s):e.addListener(o),t.push([e,i,n,o,a])}))},unbind:function(i,n,o){e(i,n,(function(e,i,n){t=t.filter((function(t){return!!(t[0]!==e||t[1]!==i||t[2]!==n||o&&t[3]!==o)||(t[4](),!1)}))}))},dispatch:function(t,e,i){var n,o=!0;return"function"===typeof CustomEvent?n=new CustomEvent(e,{bubbles:o,detail:i}):(n=document.createEvent("CustomEvent")).initCustomEvent(e,o,!1,i),t.dispatchEvent(n),n},destroy:function(){t.forEach((function(t){t[4]()})),t.length=0}}}();return t&&t.event.on(v,i.destroy),c(i,{bus:e,on:function(t,n){i.bind(e,a(t).join(" "),(function(t){n.apply(n,r(t.detail)?t.detail:[])}))},off:o(i.unbind,e),emit:function(t){i.dispatch(e,t,n(arguments,1))}})}var _=u,b=u+"__slide",y=b+"__container";function w(t){t.length=0}function x(t,e,i){return Array.prototype.slice.call(t,e,i)}function S(t){return t.bind(null,...x(arguments,1))}function j(t,e){return typeof e===t}const k=Array.isArray;S(j,"function");const P=S(j,"string"),$=S(j,"undefined");function C(t){return null===t}function E(t){return k(t)?t:[t]}function I(t,e){E(t).forEach(e)}function N(t,e){return t.push(...E(e)),t}function D(t,e,i){t&&I(e,(e=>{e&&t.classList[i?"add":"remove"](e)}))}function T(t,e){D(t,P(e)?e.split(" "):e,!0)}function A(t,e){I(e,t.appendChild.bind(t))}function M(t,e){return t instanceof HTMLElement&&(t.msMatchesSelector||t.matches).call(t,e)}function O(t,e){return e?function(t,e){const i=t?x(t.children):[];return e?i.filter((t=>M(t,e))):i}(t,e)[0]:t.firstElementChild}const R=Object.keys;function H(t,e,i){if(t){let n=R(t);n=i?n.reverse():n;for(let i=0;i<n.length;i++){const o=n[i];if("__proto__"!==o&&!1===e(t[o],o))break}}return t}function L(t,e){I(t,(t=>{I(e,(e=>{t&&t.removeAttribute(e)}))}))}function V(t,e,i){var n;!C(n=e)&&j("object",n)?H(e,((e,i)=>{V(t,i,e)})):I(t,(t=>{C(i)||""===i?L(t,e):t.setAttribute(e,String(i))}))}function W(t,e,i){const n=document.createElement(t);return e&&(P(e)?T(n,e):V(n,e)),i&&A(i,n),n}function F(t,e,i){if($(i))return getComputedStyle(t)[e];C(i)||(t.style[e]=`${i}`)}function U(t,e){return e?x(t.querySelectorAll(e)):[]}function z(t,e){D(t,e,!1)}function Y(t){return P(t)?t:t?`${t}px`:""}const q="splide";const{min:B,max:G,floor:X,ceil:K,abs:Q}=Math;const J=`${b}__row`,Z=`${b}--col`,tt={rows:1,cols:1,dimensions:[],gap:{}};function et(t){function e(){const{rows:e,cols:i,dimensions:n}=t;return k(n)&&n.length?n:[[e,i]]}return{get:function(t){const i=e();return i[B(t,i.length-1)]},getAt:function(t){const i=e();let n,o,s=0;for(let e=0;e<i.length;e++){const r=i[e];if(n=r[0]||1,o=r[1]||1,s+=n*o,t<s)break}return function(t,e){if(!t)throw new Error(`[${q}] ${e||""}`)}(n&&o,"Invalid dimension"),[n,o]}}}function it(t,e,i){const{on:n,destroy:o}=g(t),{Components:s,options:r}=t,{resolve:a}=s.Direction,{forEach:l}=s.Slides;function d(t,e){const i=O(t,`.${y}`),n=O(i||t,"img");n&&n.src&&(F(i||t,"background",e?"":`center/cover no-repeat url("${n.src}")`),F(n,"display",e?"":"none"))}function c(t){return U(t,`.${J}`)}function u(t){return U(t,`.${Z}`)}function m(t,e){u(t).forEach((t=>{V(t,"tabindex",e?0:null)}))}function f(t){m(t.slide,!0)}function v(t){m(t.slide,!1)}return{mount:function(){l((n=>{const{slide:o}=n,[s,r]=i.get(n.isClone?n.slideIndex:n.index);!function(t,i){const{row:n}=e.gap,o=`calc(${100/t}%${n?` - ${Y(n)} * ${(t-1)/t}`:""})`;c(i).forEach(((t,e,i)=>{F(t,"height",o),F(t,"display","flex"),F(t,"margin",`0 0 ${Y(n)} 0`),F(t,"padding",0),e===i.length-1&&F(t,"marginBottom",0)}))}(s,o),function(t,i){const{col:n}=e.gap,o=`calc(${100/t}%${n?` - ${Y(n)} * ${(t-1)/t}`:""})`;u(i).forEach(((t,e,i)=>{F(t,"width",o),e!==i.length-1&&F(t,a("marginRight"),Y(n))}))}(r,o),u(n.slide).forEach(((e,i)=>{var o;e.id=`${n.slide.id}-col${o=i+1,o<10?`0${o}`:`${o}`}`,t.options.cover&&d(e)}))})),r.slideFocus&&(n(h,f),n(p,v))},destroy:function(){l((t=>{const{slide:e}=t;m(e,!1),c(e).forEach((t=>{L(t,"style")})),u(e).forEach((t=>{d(t,!0),L(t,"style")}))})),o()}}}function nt(t,e,i){const{on:n,off:o}=g(t),{Elements:s}=e,r={},a=et(r),l=it(t,r,a),d=`${_}--grid`,c=[];function u(){var e,l;e=r,E(l||R(e)).forEach((t=>{delete e[t]})),function(t){x(arguments,1).forEach((e=>{H(e,((i,n)=>{t[n]=e[n]}))}))}(r,tt,i.grid||{}),!function(){if(i.grid){const{rows:t,cols:e,dimensions:i}=r;return t>1||e>1||k(i)&&i.length>0}return!1}()?y()&&(h(),p()):(h(),N(c,s.slides),T(t.root,d),A(s.list,function(){const t=[];let e,i,n=0,o=0;return c.forEach(((s,r)=>{const[l,d]=a.getAt(r);o||(n||(e=W(s.tagName,b),t.push(e)),i=function(t,e,i){const n="li"===e.tagName.toLowerCase()?"ul":"div";return W(n,J,i)}(0,s,e)),function(t,e,i){T(e,Z),A(i,e)}(0,s,i),++o>=d&&(o=0,n=++n>=l?0:n)})),t}()),o(m),n(m,v),p())}function h(){if(y()){const{slides:e}=s;l.destroy(),c.forEach((t=>{z(t,Z),A(s.list,t)})),I(e,(t=>{t&&t.parentNode&&t.parentNode.removeChild(t)})),z(t.root,d),w(e),N(e,c),w(c),o(m)}}function p(){t.refresh()}function v(){y()&&l.mount()}function y(){return e=t.root,i=d,e&&e.classList.contains(i);var e,i}return{mount:function(){u(),n(f,u)},destroy:h}}},43488:(t,e,i)=>{"use strict";var n=i(93959);function o(){}function s(){}s.resetWarningCache=o,t.exports=function(){function t(t,e,i,o,s,r){if(r!==n){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}t.isRequired=t;var i={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:s,resetWarningCache:o};return i.PropTypes=i,i}},11942:(t,e,i)=>{t.exports=i(43488)()},93959:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},61038:()=>{}}]);