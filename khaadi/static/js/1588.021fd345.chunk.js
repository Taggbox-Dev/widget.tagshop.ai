"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[1588,2663,5044,5537,7713],{45285:(e,t,i)=>{i.d(t,{bs:()=>r});var o=i(80415),s=i(296),n=i(66345),l=i(28322),d=i(14313);let a=[];const r=e=>{e.persist();const t=e.target,{network:i,itemId:o,themeId:s}=t.dataset;if(1!=i||[3,4,16,47,50,55,60].includes(s))a.includes(e)||a.push(e);else{const e=document.querySelector(`.tb_media-${o}`);e&&(e.style.display="none")}1===a.length&&c()},c=async()=>{var e;const{postData:t,wall:i}=s.A.getState().appData;if(!i||!Object.keys(i).length||!a.length)return;const{User:r,Wall:u}=i,m=null===r||void 0===r?void 0:r.id,p=(n.HY,null===u||void 0===u?void 0:u.id),v=null===(e=a[0])||void 0===e?void 0:e.target,{filterId:g,network:_,itemId:b,load:f}=v.dataset,w=document.querySelector(`img[data-item-id="${b}"]`),y=null!==t&&void 0!==t&&t.completeDataObject?Object.values(t.completeDataObject).filter((e=>e.id===b)):[];if(null!==y&&void 0!==y&&y.length){var x;const e=await(async e=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((t=>e.includes(t)))||await fetch(e).then((e=>e.ok)).catch((()=>!1)))(null===(x=y[0])||void 0===x?void 0:x.postFileNew);if(!e&&w){if([2,18,3,28].includes(+_)&&"0"===f&&"34"!==g&&!v.src.includes("cloud.taggbox.com")){const e=((e,t,i)=>{var o,s,n,l,d;const{UserPlan:a,Wall:r}=t;return{table_name:null===a||void 0===a?void 0:a.db_table,...e,...null!==i&&void 0!==i&&i.length?{feedId:null===(o=i[0])||void 0===o?void 0:o.feedId,type:null===(s=i[0])||void 0===s?void 0:s.type,link:null===(n=i[0])||void 0===n?void 0:n.link,postFile:null===(l=i[0])||void 0===l?void 0:l.postFile,mediaFile:null===(d=i[0])||void 0===d?void 0:d.mediaFile}:{},url:null===r||void 0===r?void 0:r.url}})({wallId:p,postId:b,ownerId:m},i,y);try{const{data:t}=await(new d.A).post(n.t5,e,{headers:l.ML}),i=n.HY||n.MH?"":`https://images.${n.QR}/`;v.src="18"===_?`${i}${t.media}`:t.media}catch{v.src=o.gX}finally{h(v)}}else v.src=o.gX,h(v);a.shift(),c()}else{const e=`${o.th}/media/images/no-image.svg`;v.src=e,v.srcset=e,h(v),a.shift()}}},h=e=>e.setAttribute("data-load","1")},1588:(e,t,i)=>{i.r(t),i.d(t,{default:()=>y,getCollageColumns:()=>f});var o=i(9950),s=i(52867),n=i(66345),l=i(92663),d=i(47713),a=i(15537),r=i(78262),c=i(3720),h=i(44414);const u=e=>{let{Post:t,ThemeStyle:i,index:o,inView:s}=e;const l=!(!n.HY||t.hotspot),d=!(![3,5].includes(t.type)||1!=i.autoPlay&&n.HY);return(0,h.jsxs)("div",{className:"tb_ct_media_wrap",children:[(0,h.jsx)(a.default,{Post:t,IconClass:"tb_ct_media_icon",show:l,hideVideo:i.autoPlay}),d?(0,h.jsx)(c.A,{VideoClass:"tb_ct_video",Post:t,isCover:!0,size:100,controls:!1,autoPlay:!0,muted:!0,index:o,inView:s}):(0,h.jsx)(r.A,{ImageClass:"tb_ct_image",Post:t,size:100,hotspot:t.hotspot,blurBG:n.HY,index:o,inView:s})]})};var m=i(56071);const p=o.lazy((()=>i.e(3294).then(i.bind(i,3294)))),v=o.lazy((()=>Promise.all([i.e(8740),i.e(9649)]).then(i.bind(i,89649)))),g=o.lazy((()=>i.e(2685).then(i.bind(i,72685)))),_=e=>{let{Post:t,postSize:i,CardStyle:a,clickToShowPopUp:r,index:c,ThemeInfo:_,postSizeInPx:b,ThemeStyle:f,onClickPopUpSlider:w,ProductSetting:y}=e;const x=1!==t.type,S=a.content.trimcontent?(0,s.Ex)(t.content.text,200):t.content.text,k=b<250,j=0==a.style.mode&&n.HY?"light":"dark";return(0,o.useEffect)((()=>{t.isPopUp&&w(c,t)}),[c,t.isPopUp,t]),(0,h.jsx)(m.A,{children:e=>{let{ref:s,inView:m}=e;return(0,h.jsx)("div",{id:`tb_ct_id-${t.id}`,className:"tb_ct_post_wrapper"+(k?" tb_ct_post_wrapper2x":""),style:{width:`${i}%`,padding:a.style.padding/2,opacity:m?1:0,transition:m?"opacity .5s ease-in-out":""},"tb-network":t.network.id,"tb-product":""!=a.shopText&&t.isShopIcon?1:t.isHotspot?2:0,tabIndex:0,role:"article","aria-label":`Post ${parseInt(c)+1},${S}`,ref:s,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,data:b,children:(0,h.jsx)("div",{className:"tb_ct_post_in",onClick:r(c,t),role:"button","aria-label":"Popup",tabIndex:0,children:(0,h.jsxs)("div",{className:"tb_ct_post_media_wrapp",children:[t.share.status&&!n.HY?(0,h.jsx)(o.Suspense,{fallback:(0,h.jsx)(h.Fragment,{}),children:(0,h.jsx)(g,{Post:t,ThemeInfo:_,shareClass:"tb_ct_share_container"})}):null,x?(0,h.jsx)(u,{Post:t,CardStyle:a,ThemeStyle:f,ProductSetting:y,ThemeInfo:_,index:c,inView:m}):null,t.isHotspot?null:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:"tb_ct_post_details",children:n.HY?(0,h.jsxs)("div",{className:"tb_ct_social_",children:[(0,h.jsx)(l.default,{networkClass:"tb_ct_social__ico",networkId:t.networkId,iconStyle:a.icon}),""!=a.shopText&&t.isShopIcon?(0,h.jsx)(d.default,{CardStyle:a,mode:a.style.mode,btnClass:"tb_ct_btn_wrap"}):null]}):null}),(0,h.jsx)("div",{className:`tb_ct_post_overlay tb_ct_post_overlay-${j}`,children:(0,h.jsx)("div",{})})]}),68==_.id?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:"tb_sp_contant_wrapper",children:a.contentstatus&&1!=t.type?null:(0,h.jsx)(o.Suspense,{fallback:(0,h.jsx)(h.Fragment,{}),children:(0,h.jsx)(v,{contentClass:"tb_sp_content",Post:t,content:S,CardStyle:a,contentTitle:t.contentTitle})})}),(0,h.jsx)(o.Suspense,{fallback:(0,h.jsx)(h.Fragment,{}),children:(0,h.jsx)(p,{Post:t,CardStyle:a,ThemeStyle:f})})]}):null]})})})}})},b=e=>{let{CardStyle:t,ThemeStyle:i,ThemeInfo:o,largeDiv:s,smallDiv:n,Post:l,completeDataObject:d,index:a,clickToShowPopUp:r,postSizeInPx:c,postSize:u,onClickPopUpSlider:m,ProductSetting:p}=e;const v={width:`${s}%`},g={width:`${n}%`};return l&&0!==l.length?(0,h.jsxs)("div",{className:"ts_cs_post_row "+("right"==i.direction?"ts_cs_row_right":"ts_cs_row_left"),children:[(0,h.jsx)("div",{className:"ts_cs_wrap_single",style:v,children:(0,h.jsx)(_,{Post:d[l[0]],CardStyle:t,ThemeStyle:i,ThemeInfo:o,index:a,postSize:100,clickToShowPopUp:r,postSizeInPx:2*c,onClickPopUpSlider:m},`sqr_crd_0_${d[l[0]].id}`)}),(0,h.jsx)("div",{className:"ts_cs_wrap_multi",style:g,children:l.map(((e,s)=>{if(0===s)return null;const n=d[e];return(0,h.jsx)(_,{Post:n,ProductSetting:p,CardStyle:t,ThemeStyle:i,ThemeInfo:o,index:s,postSize:u,clickToShowPopUp:r,postSizeInPx:c,onClickPopUpSlider:m},`sqr_crd_${s}_${e.id}`)}))})]}):null},f=e=>{switch(e){case 3:return 3;case 5:return 4;case 7:return 5;case 9:return 6;default:return 1}};class w extends o.PureComponent{componentDidMount(){this.props.loadBranding()}render(){const{postData:e,completeDataObject:t,CardStyle:i,ThemeStyle:o,ProductSetting:n,ThemeInfo:l,clickToShowPopUp:d,onClickToCTA:a,onClickPopUpSlider:r,containerSize:c}=this.props,{desktop:u,mobile:m}=o.column,p=c.width>767?u:m||3,v=(0,s.Ci)(c.width,o.column,300),g=(0,s.Cv)(c.width,f(p));for(var _=0,w=e.length,y=[];_<w;)y.push(e.slice(_,_+=p));return(0,h.jsx)("div",{tabIndex:"0","aria-label":`There are ${e&&e.length>0?e.length:0} posts in the feed`,role:"feed",className:"tb_ct_post_container",children:y&&y.length>0&&y.map(((e,s)=>e.length==p?(0,h.jsx)(b,{CardStyle:i,ThemeStyle:o,ProductSetting:n,ThemeInfo:l,ownerId:l.ownerId,Post:e,index:s,clickToShowPopUp:d,onClickToCTA:a,postSizeInPx:c.width/v,completeDataObject:t,largeDiv:2*g,smallDiv:100-2*g,postSize:100/(p-1)*2,onClickPopUpSlider:r},`sqr_crd_${s}_${e.id}`):null))})}}const y=w},56071:(e,t,i)=>{i.d(t,{A:()=>m});var o=i(9950),s=Object.defineProperty,n=(e,t,i)=>((e,t,i)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i)(e,"symbol"!==typeof t?t+"":t,i),l=new Map,d=new WeakMap,a=0,r=void 0;function c(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(i=e.root,i?(d.has(i)||(a+=1,d.set(i,a.toString())),d.get(i)):"0"):e[t]}`;var i})).toString()}function h(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r;if("undefined"===typeof window.IntersectionObserver&&void 0!==o){const s=e.getBoundingClientRect();return t(o,{isIntersecting:o,target:e,intersectionRatio:"number"===typeof i.threshold?i.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}const{id:s,observer:n,elements:d}=function(e){const t=c(e);let i=l.get(t);if(!i){const o=new Map;let s;const n=new IntersectionObserver((t=>{t.forEach((t=>{var i;const n=t.isIntersecting&&s.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=n),null==(i=o.get(t.target))||i.forEach((e=>{e(n,t)}))}))}),e);s=n.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:t,observer:n,elements:o},l.set(t,i)}return i}(i),a=d.get(e)||[];return d.has(e)||d.set(e,a),a.push(t),n.observe(e),function(){a.splice(a.indexOf(t),1),0===a.length&&(d.delete(e),n.unobserve(e)),0===d.size&&(n.disconnect(),l.delete(s))}}o.Component;var u=i(52867);const m=e=>{let{children:t}=e;const{ref:i,inView:s,entry:n}=function(){let{threshold:e,delay:t,trackVisibility:i,rootMargin:s,root:n,triggerOnce:l,skip:d,initialInView:a,fallbackInView:r,onChange:c}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var u;const[m,p]=o.useState(null),v=o.useRef(c),[g,_]=o.useState({inView:!!a,entry:void 0});v.current=c,o.useEffect((()=>{if(d||!m)return;let o;return o=h(m,((e,t)=>{_({inView:e,entry:t}),v.current&&v.current(e,t),t.isIntersecting&&l&&o&&(o(),o=void 0)}),{root:n,rootMargin:s,threshold:e,trackVisibility:i,delay:t},r),()=>{o&&o()}}),[Array.isArray(e)?e.toString():e,m,n,s,l,d,i,r,t]);const b=null==(u=g.entry)?void 0:u.target,f=o.useRef(void 0);m||!b||l||d||f.current===b||(f.current=b,_({inView:!!a,entry:void 0}));const w=[p,g.inView,g.entry];return w.ref=w[0],w.inView=w[1],w.entry=w[2],w}({triggerOnce:!0,threshold:.01});return s&&(0,u._7)(n),t({ref:i,inView:s})}},78262:(e,t,i)=>{i.d(t,{A:()=>r});var o=i(9950),s=i(76506),n=i(80415),l=i(45285),d=i(44414);const a=(0,o.lazy)((()=>Promise.all([i.e(1823),i.e(9874)]).then(i.bind(i,89874))));class r extends o.PureComponent{constructor(e){var t,i;super(e),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:e,offsetWidth:t}=this.mediaRef.current;this.setState({currentHeight:e,currentWidth:t})}},this.mediaSizeCalc=async()=>{const{Post:e,mediaOnly:t}=this.props,i=t||e.media;if((null===i||void 0===i||!i.height)&&(null===i||void 0===i||!i.width))try{var o;const{width:e,height:t}=await(0,s.TW)(null===i||void 0===i||null===(o=i.image)||void 0===o?void 0:o.small);this._isMounted&&this.setState({height:t,width:e})}catch(n){this._isMounted&&this.setState({height:300,width:300})}};const{mediaOnly:n,Post:l}=e;this.state={height:(null===n||void 0===n?void 0:n.height)||(null===l||void 0===l||null===(t=l.media)||void 0===t?void 0:t.height)||0,width:(null===n||void 0===n?void 0:n.width)||(null===l||void 0===l||null===(i=l.media)||void 0===i?void 0:i.width)||0,currentHeight:0,currentWidth:0},this.mediaRef=o.createRef()}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var e,t,i,s,r;const{height:c,width:h}=this.state,{ImageClass:u,Post:m,hotspot:p,size:v,blurBG:g,mediaOnly:_,inView:b,multiKey:f,index:w,ProductSetting:y}=this.props,{id:x,link:S,products:k}=m,j=_||(null===m||void 0===m?void 0:m.media),{currentWidth:P,currentHeight:C}=this.state,I=v||100*c/h,$={paddingBottom:1===I?null:`${I}%`},T={backgroundImage:b?`url(${null===j||void 0===j||null===(e=j.image)||void 0===e?void 0:e.small})`:null},V=h>c?"100%":h/c*100+"%",z=h>c?c/h*100+"%":"100%",N=m.isProduct&&p&&m.hotspot&&(null===y||void 0===y||null===(t=y.Hotspot)||void 0===t?void 0:t.status),H={width:N&&v?V:null,height:N&&v?z:null};return(0,d.jsxs)("div",{className:`${u}_wrap_`,style:$,ref:this.mediaRef,children:[N&&g?(0,d.jsx)("div",{className:"tb_blur_bg_",style:T}):null,(0,d.jsxs)("div",{className:`${u}_wrap_in`,style:H,children:[N?(0,d.jsx)(o.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(a,{products:this.props.multiPic?m.mediaList[f].product:k,hotspot:m.hotspot,Post:m,showTooltip:null},w)}):null,b?(0,d.jsx)("img",{className:`${u} tb_media-${x}`,src:null===j||void 0===j||null===(i=j.image)||void 0===i?void 0:i.small,srcSet:`${null===j||void 0===j||null===(s=j.image)||void 0===s?void 0:s.small} 1x, ${null===j||void 0===j||null===(r=j.image)||void 0===r?void 0:r.large} 2x`,sizes:`${P}px`,loading:b?"eager":"lazy",decoding:"async",fetchPriority:b?"high":"low","data-id":x,height:C,width:P,"data-height":c,"data-width":h,"data-link":S,onLoad:this.onLoad,onError:e=>{e.target.src=`${n.th}/media/error/no-image.svg`,e.target.srcset=`${n.th}/media/error/no-image.svg`,(0,l.bs)(e)},alt:null===j||void 0===j?void 0:j.title,title:null===j||void 0===j?void 0:j.title},`${x}-${c}-${h}-${b}`):null]})]})}}},3720:(e,t,i)=>{i.d(t,{A:()=>c});var o=i(9950),s=i(38092),n=i.n(s),l=i(66345),d=i(76506),a=i(44414);class r extends o.Component{constructor(e){super(e),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:e,offsetWidth:t}=this.mediaRef.current;this.setState({currentHeight:e,currentWidth:t})}},this.mediaSizeCalc=async()=>{const{media:e}=this.props.Post;if((null===e||void 0===e||!e.height)&&(null===e||void 0===e||!e.width))try{var t;const{width:i,height:o}=await(0,d.TW)(null===e||void 0===e||null===(t=e.image)||void 0===t?void 0:t.small);this._isMounted&&this.setState({calcHeight:o,calcWidth:i})}catch(i){this._isMounted&&this.setState({calcHeight:300,calcWidth:300})}},this.setVideoLoaded=e=>{this._isMounted&&this.setState({videoLoaded:e})},this.state={loadError:!1,videoLoaded:!1,calcHeight:0,calcWidth:0,currentHeight:0,currentWidth:0},this.mediaRef=o.createRef(),this._isMounted=!1}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var e,t,i,o,s,d;const{VideoClass:r,Post:c,controls:h,autoPlay:u,handleVideoEnded:m,muted:p,intervalTime:v,size:g,inView:_}=this.props,{calcHeight:b,calcWidth:f,currentWidth:w,currentHeight:y}=this.state,{media:x,id:S,link:k,networkId:j}=c,P=1===g,C=null!==x&&void 0!==x&&x.height?null===x||void 0===x?void 0:x.height:b,I=null!==x&&void 0!==x&&x.width?null===x||void 0===x?void 0:x.width:f,$={paddingBottom:`${P?null:g||100*C/I}%`};return(0,a.jsx)("div",{className:`${r}_wrap_`,style:$,ref:this.mediaRef,children:(0,a.jsx)(n(),{className:`${r} tb_media-${S}`,url:null!==x&&void 0!==x&&null!==(e=x.video)&&void 0!==e&&e.clip?null===x||void 0===x||null===(t=x.video)||void 0===t?void 0:t.clip:_?null===x||void 0===x||null===(i=x.video)||void 0===i?void 0:i.full:null===x||void 0===x||null===(o=x.image)||void 0===o?void 0:o.small,"data-height":b,"data-width":f,"data-type":"video","data-network":j,"data-link":k,"data-item-id":S,"data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":I,"data-height":C,poster:null===x||void 0===x||null===(s=x.image)||void 0===s?void 0:s.small}},file:{attributes:{preload:"metadata",poster:null===x||void 0===x||null===(d=x.image)||void 0===d?void 0:d.small,height:y,width:w}}},loop:!(l.aD&&!l.HY&&null!==c&&void 0!==c&&c.loopStop)&&u,onError:e=>{P&&m&&setTimeout((()=>{this._isMounted&&m&&m()}),1e3*v),this.setVideoLoaded(!1)},autoPlay:_&&u?1:0,muted:p,volume:u?1:0,playsinline:1,onReady:()=>this.setVideoLoaded(!l.HY),playing:_&&u?1:0,controls:h||!1,onEnded:m,title:null===x||void 0===x?void 0:x.title},`${S}-${y}-${f}-${_}`)})}}const c=(0,o.memo)(r)},15537:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d});var o=i(9950),s=i(66345),n=i(44414);const l=o.lazy((()=>i.e(620).then(i.bind(i,20620)))),d=e=>{const{Post:t,IconClass:i,isCenter:d,hideVideo:a,show:r}=e,c=!![3,5].includes(t.type),h=7===t.network.id,u=!!(t.mediaList&&t.mediaList.length>0),m=1===t.isAudio,p=!!t.isProduct,v=(0,n.jsx)(o.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(l,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"})}),g=(0,n.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:"  "}),_=(0,n.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:"  "}),b=(0,n.jsx)("div",{className:"tb__icon tb-"+(s.aD?"reel-fill tb_reel_ico":"video tb_video_ico"),children:"  "}),f=(0,n.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:"  "}),w=(0,n.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:"  "});return r?(0,n.jsxs)(n.Fragment,{children:[d&&(h||c)?(0,n.jsxs)("div",{className:`${i} tb__media_ico_c`,children:[c&&!h?w:"",c&&h?v:""]}):null,p||u||c?(0,n.jsxs)("div",{className:`${i} tb__media_ico_`,children:[p?f:"",u?g:"",d||!c||h||a?"":m?_:b]}):null]}):null}},92663:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d});var o=i(9950),s=i(91697),n=i(44414);const l=o.lazy((()=>i.e(620).then(i.bind(i,20620))));class d extends o.PureComponent{render(){const{networkId:e,networkClass:t,iconStyle:i}=this.props;return 505==(null===i||void 0===i?void 0:i.default)||[7,4,36].includes(e)?(0,n.jsx)(o.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(l,{networkId:e,networkClass:t})}):(0,n.jsx)("div",{className:`${t} tb__icon tb-${(0,s.EC)(e)}`,"aria-label":`post network ${(0,s.Oi)(e)}`,children:(0,n.jsx)("div",{})})}}},47713:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});var o=i(44414);const s=e=>{var t;let{CardStyle:i,btnClass:s}=e;const n={fontFamily:null===i||void 0===i||null===(t=i.style)||void 0===t?void 0:t.font};return(0,o.jsx)("div",{className:`tb_shop_btn_wrap ${s}`,children:(0,o.jsxs)("div",{className:"tb_shop_btn"+(i.style.mode?" tb_shop_btn_light":" tb_shop_btn_dark"),style:n,children:["      ",i.shopText]})})}},91697:(e,t,i)=>{i.d(t,{EC:()=>o,Oi:()=>n,Yo:()=>s});const o=e=>({0:"manual-upload",1:"twitter",2:"instagram",3:"facebook",4:"google",5:"pinterest",6:"flickr",7:"youtube",8:"vimeo",10:"linkedin",11:"tumblr",12:"rss",13:"star",15:"workplace",18:"instagram",19:"yelp",20:"slack",21:"yammer",23:"airbnb",25:"soundcloud",26:"giphy",27:"deviantart",28:"tiktok",29:"onsite-upload",30:"vkontakte",32:"chrome",33:"collabration",34:"amazon",35:"tripadvisor",36:"star",37:"aliexpress"}[e]||""),s=e=>({0:"#313A53",1:"#29a9e1",2:"#000000",3:"#1b74e4",4:"#4081ed",5:"#e60022",6:"#0a63dc",7:"#FF0000",8:"#1eb8eb",10:"#0a66c2",11:"#36465d",12:"#f78422",13:"#FABF04",15:"#4767ab",18:"#000000",19:"#be362e",20:"#510d4e",21:"#0078d4",23:"#ff7977",25:"#ff7700",26:"#000000",27:"#00e59b",28:"#000000",29:"#613983",30:"#0077FF",32:"#4c8bf5",33:"#4e69ed",34:"#4e69ed",35:"#60c196",36:"#00e9ff",37:"#E52F20"}[e]||""),n=e=>({0:"Manual Upload",1:"Twitter",2:"Instagram",3:"Facebook",4:"Google",5:"Pinterest",6:"Flickr",7:"YouTube",8:"Vimeo",10:"LinkedIn",11:"Tumblr",12:"RSS",13:"Star",15:"Workplace",18:"Instagram",19:"Yelp",20:"Slack",21:"Yammer",23:"Airbnb",25:"Soundcloud",26:"Giphy",27:"Deviantart",28:"Tiktok",29:"Review Hub",30:"Vkontakte",32:"Chrome Extension",33:"Collab with Creators",34:"Amazon",35:"Tripadvisor",36:"Review Hub",37:"Aliexpress"}[e]||"")}}]);