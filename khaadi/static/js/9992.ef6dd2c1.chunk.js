"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[531,2663,2685,5537,9649,9992],{45285:(e,t,i)=>{i.d(t,{bs:()=>r});var n=i(80415),o=i(296),s=i(66345),l=i(28322),a=i(14313);let d=[];const r=e=>{e.persist();const t=e.target,{network:i,itemId:n,themeId:o}=t.dataset;if(1!=i||[3,4,16,47,50,55,60].includes(o))d.includes(e)||d.push(e);else{const e=document.querySelector(`.tb_media-${n}`);e&&(e.style.display="none")}1===d.length&&c()},c=async()=>{var e;const{postData:t,wall:i}=o.A.getState().appData;if(!i||!Object.keys(i).length||!d.length)return;const{User:r,Wall:h}=i,p=null===r||void 0===r?void 0:r.id,m=(s.HY,null===h||void 0===h?void 0:h.id),v=null===(e=d[0])||void 0===e?void 0:e.target,{filterId:_,network:b,itemId:g,load:f}=v.dataset,w=document.querySelector(`img[data-item-id="${g}"]`),x=null!==t&&void 0!==t&&t.completeDataObject?Object.values(t.completeDataObject).filter((e=>e.id===g)):[];if(null!==x&&void 0!==x&&x.length){var y;const e=await(async e=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((t=>e.includes(t)))||await fetch(e).then((e=>e.ok)).catch((()=>!1)))(null===(y=x[0])||void 0===y?void 0:y.postFileNew);if(!e&&w){if([2,18,3,28].includes(+b)&&"0"===f&&"34"!==_&&!v.src.includes("cloud.taggbox.com")){const e=((e,t,i)=>{var n,o,s,l,a;const{UserPlan:d,Wall:r}=t;return{table_name:null===d||void 0===d?void 0:d.db_table,...e,...null!==i&&void 0!==i&&i.length?{feedId:null===(n=i[0])||void 0===n?void 0:n.feedId,type:null===(o=i[0])||void 0===o?void 0:o.type,link:null===(s=i[0])||void 0===s?void 0:s.link,postFile:null===(l=i[0])||void 0===l?void 0:l.postFile,mediaFile:null===(a=i[0])||void 0===a?void 0:a.mediaFile}:{},url:null===r||void 0===r?void 0:r.url}})({wallId:m,postId:g,ownerId:p},i,x);try{const{data:t}=await(new a.A).post(s.t5,e,{headers:l.ML}),i=s.HY||s.MH?"":`https://images.${s.QR}/`;v.src="18"===b?`${i}${t.media}`:t.media}catch{v.src=n.gX}finally{u(v)}}else v.src=n.gX,u(v);d.shift(),c()}else{const e=`${n.th}/media/images/no-image.svg`;v.src=e,v.srcset=e,u(v),d.shift()}}},u=e=>e.setAttribute("data-load","1")},60531:(e,t,i)=>{i.r(t),i.d(t,{default:()=>l});var n=i(9950),o=i(44414);class s extends n.PureComponent{render(){const{Post:e,ctaClass:t,onClickToCTA:i}=this.props,{cta:n}=e,s={color:null===n||void 0===n?void 0:n.color,backgroundColor:null===n||void 0===n?void 0:n.background};return(0,o.jsxs)("div",{className:t,style:s,role:"button",tabIndex:"0","aria-label":"CTA Button",onClick:t=>{t.stopPropagation(),i(e),window.open(`${n.url}`,"_blank")},children:[" ",n.text]})}}const l=s},89874:(e,t,i)=>{i.d(t,{A:()=>p});var n=i(9950),o=i(10300),s=i(1823),l=i(76506),a=i(21850),d=i(82652),r=i(44414);const c=(0,n.memo)((e=>{let{item:t}=e;const i=t.discount>0&&t.discount!==t.price,n=t.discount>0?t.discount:t.price;return(0,r.jsxs)("a",{hotspot:1,href:t.url,target:"_blank",rel:"noopener noreferrer",className:"tb_tooltip_wrap",children:[(0,r.jsx)("div",{hotspot:1,className:"tb_p_tooltip_title",children:t.title}),i&&(0,r.jsxs)("div",{hotspot:1,className:"tb_p_tooltip_price tb_price_disabled",children:[t.currency,t.price]}),(t.price>0||t.discount>0)&&(0,r.jsxs)("div",{hotspot:1,className:"tb_p_tooltip_price",children:[t.currency,n]})]})})),u=e=>{let{products:t,appData:i,Post:o,showTooltip:u,isPopup:h,dataItem:p}=e;const[m,v]=(0,n.useState)(null),_=(0,n.useMemo)((()=>{var e,t;return(null===i||void 0===i||null===(e=i.wall)||void 0===e||null===(t=e.ProductSetting)||void 0===t?void 0:t.Hotspot)||{}}),[i]);(0,n.useEffect)((()=>{if(u){const e=t.findIndex((e=>e.id===u));-1!==e&&v(e)}else v(null)}),[u,t]);const b=(0,n.useCallback)((e=>{var t,n,o,s;null!==i&&void 0!==i&&i.wall&&(0,a.hq)({type:1,action:2,wall:null===i||void 0===i||null===(t=i.wall)||void 0===t||null===(n=t.ThemeInfo)||void 0===n?void 0:n.webId,product_id:e.id,post:p.referenceId,owner:null===i||void 0===i||null===(o=i.wall)||void 0===o||null===(s=o.ThemeInfo)||void 0===s?void 0:s.ownerId,feed:p.feedId,currency:e.currency,price:Number(e.price)>0?e.discount:e.price})}),[i,o]),g=(0,n.useCallback)(((e,t)=>{e.stopPropagation(),b(t),window.open(t.url,"_blank")}),[b]);return null!==_&&void 0!==_&&_.status?t.map(((e,t)=>{const i=`hotspot-${e.id}-${(0,l.Ul)()}-`,n=m===t;return(0,r.jsxs)("div",{id:i,className:"tb_hotspot_dot"+(n?" tb_hotspot_active_":""),role:"button",style:{top:e.hotspot.top,left:e.hotspot.left},onMouseEnter:()=>v(t),onMouseLeave:()=>v(null),onClick:t=>{g(t,e)},"data-tooltip-offset":7,children:[(0,r.jsx)("div",{hotspot:1,className:"tb_hotspot__ "+(0===_.type?"tb_hotspot_ani__":""),children:t+1}),(0,r.jsx)(d.A,{wallId:i,children:(0,r.jsx)(s.m_,{appendTo:"body","data-tooltip-id":`tooltip-${e.id}-${Math.random().toString(36).substr(2,9)}`,className:"tb_pro_tooltip",anchorSelect:`#${i}`,clickable:!0,...h?{isOpen:n}:{},children:(0,r.jsx)(c,{item:e})},t)})]},`${e.id}-${t}`)})):null},h=(0,n.memo)(u),p=(0,o.Ng)((e=>({appData:e.appData})))(h)},56071:(e,t,i)=>{i.d(t,{A:()=>p});var n=i(9950),o=Object.defineProperty,s=(e,t,i)=>((e,t,i)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i)(e,"symbol"!==typeof t?t+"":t,i),l=new Map,a=new WeakMap,d=0,r=void 0;function c(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(i=e.root,i?(a.has(i)||(d+=1,a.set(i,d.toString())),a.get(i)):"0"):e[t]}`;var i})).toString()}function u(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r;if("undefined"===typeof window.IntersectionObserver&&void 0!==n){const o=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"===typeof i.threshold?i.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),()=>{}}const{id:o,observer:s,elements:a}=function(e){const t=c(e);let i=l.get(t);if(!i){const n=new Map;let o;const s=new IntersectionObserver((t=>{t.forEach((t=>{var i;const s=t.isIntersecting&&o.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=s),null==(i=n.get(t.target))||i.forEach((e=>{e(s,t)}))}))}),e);o=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:t,observer:s,elements:n},l.set(t,i)}return i}(i),d=a.get(e)||[];return a.has(e)||a.set(e,d),d.push(t),s.observe(e),function(){d.splice(d.indexOf(t),1),0===d.length&&(a.delete(e),s.unobserve(e)),0===a.size&&(s.disconnect(),l.delete(o))}}n.Component;var h=i(52867);const p=e=>{let{children:t}=e;const{ref:i,inView:o,entry:s}=function(){let{threshold:e,delay:t,trackVisibility:i,rootMargin:o,root:s,triggerOnce:l,skip:a,initialInView:d,fallbackInView:r,onChange:c}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var h;const[p,m]=n.useState(null),v=n.useRef(c),[_,b]=n.useState({inView:!!d,entry:void 0});v.current=c,n.useEffect((()=>{if(a||!p)return;let n;return n=u(p,((e,t)=>{b({inView:e,entry:t}),v.current&&v.current(e,t),t.isIntersecting&&l&&n&&(n(),n=void 0)}),{root:s,rootMargin:o,threshold:e,trackVisibility:i,delay:t},r),()=>{n&&n()}}),[Array.isArray(e)?e.toString():e,p,s,o,l,a,i,r,t]);const g=null==(h=_.entry)?void 0:h.target,f=n.useRef(void 0);p||!g||l||a||f.current===g||(f.current=g,b({inView:!!d,entry:void 0}));const w=[m,_.inView,_.entry];return w.ref=w[0],w.inView=w[1],w.entry=w[2],w}({triggerOnce:!0,threshold:.01});return o&&(0,h._7)(s),t({ref:i,inView:o})}},78262:(e,t,i)=>{i.d(t,{A:()=>r});var n=i(9950),o=i(76506),s=i(80415),l=i(45285),a=i(89874),d=i(44414);class r extends n.PureComponent{constructor(e){var t,i;super(e),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:e,offsetWidth:t}=this.mediaRef.current;this.setState({currentHeight:e,currentWidth:t})}},this.mediaSizeCalc=async()=>{const{Post:e,mediaOnly:t}=this.props,i=t||e.media;if((null===i||void 0===i||!i.height)&&(null===i||void 0===i||!i.width))try{var n;const{width:e,height:t}=await(0,o.TW)(null===i||void 0===i||null===(n=i.image)||void 0===n?void 0:n.small);this._isMounted&&this.setState({height:t,width:e})}catch(s){this._isMounted&&this.setState({height:300,width:300})}};const{mediaOnly:s,Post:l}=e;this.state={height:(null===s||void 0===s?void 0:s.height)||(null===l||void 0===l||null===(t=l.media)||void 0===t?void 0:t.height)||0,width:(null===s||void 0===s?void 0:s.width)||(null===l||void 0===l||null===(i=l.media)||void 0===i?void 0:i.width)||0,currentHeight:0,currentWidth:0},this.mediaRef=n.createRef()}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var e,t,i,n;const{height:o,width:r}=this.state,{ImageClass:c,Post:u,hotspot:h,size:p,blurBG:m,ProductSetting:v,mediaOnly:_,inView:b,multiKey:g,index:f}=this.props,{id:w,link:x,products:y}=u,k=_||(null===u||void 0===u?void 0:u.media),{currentWidth:j,currentHeight:C}=this.state,S=p||100*o/r,I={paddingBottom:1===S?null:`${S}%`},$={backgroundImage:b?`url(${null===k||void 0===k||null===(e=k.image)||void 0===e?void 0:e.small})`:null},P=r>o?"100%":r/o*100+"%",T=r>o?o/r*100+"%":"100%",N=u.isProduct&&h&&u.hotspot,A={width:N&&p?P:null,height:N&&p?T:null};return(0,d.jsxs)("div",{className:`${c}_wrap_`,style:I,ref:this.mediaRef,children:[N&&m?(0,d.jsx)("div",{className:"tb_blur_bg_",style:$}):null,(0,d.jsxs)("div",{className:`${c}_wrap_in`,style:A,children:[N?(0,d.jsx)(a.A,{products:this.props.multiPic?u.mediaList[g].product:y,ProductSetting:v,hotspot:u.hotspot,dataPost:u,showTooltip:null},f):null,b?(0,d.jsx)("img",{className:`${c} tb_media-${w}`,src:null===k||void 0===k||null===(t=k.image)||void 0===t?void 0:t.small,srcSet:`${null===k||void 0===k||null===(i=k.image)||void 0===i?void 0:i.small} 1x, ${null===k||void 0===k||null===(n=k.image)||void 0===n?void 0:n.large} 2x`,sizes:`${j}px`,loading:b?"eager":"lazy",decoding:"async",fetchPriority:b?"high":"low","data-id":w,height:C,width:j,"data-height":o,"data-width":r,"data-link":x,onLoad:this.onLoad,onError:e=>{e.target.src=`${s.th}/media/error/no-image.svg`,e.target.srcset=`${s.th}/media/error/no-image.svg`,(0,l.bs)(e)},alt:null===k||void 0===k?void 0:k.title,title:null===k||void 0===k?void 0:k.title},`${w}-${o}-${r}-${b}`):null]})]})}}},3720:(e,t,i)=>{i.d(t,{A:()=>c});var n=i(9950),o=i(38092),s=i.n(o),l=i(66345),a=i(76506),d=i(44414);class r extends n.Component{constructor(e){super(e),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:e,offsetWidth:t}=this.mediaRef.current;this.setState({currentHeight:e,currentWidth:t})}},this.mediaSizeCalc=async()=>{const{media:e}=this.props.Post;if((null===e||void 0===e||!e.height)&&(null===e||void 0===e||!e.width))try{var t;const{width:i,height:n}=await(0,a.TW)(null===e||void 0===e||null===(t=e.image)||void 0===t?void 0:t.small);this._isMounted&&this.setState({calcHeight:n,calcWidth:i})}catch(i){this._isMounted&&this.setState({calcHeight:300,calcWidth:300})}},this.setVideoLoaded=e=>{this._isMounted&&this.setState({videoLoaded:e})},this.state={loadError:!1,videoLoaded:!1,calcHeight:0,calcWidth:0,currentHeight:0,currentWidth:0},this.mediaRef=n.createRef(),this._isMounted=!1}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var e,t,i,n,o,a;const{VideoClass:r,Post:c,controls:u,autoPlay:h,handleVideoEnded:p,muted:m,intervalTime:v,size:_,inView:b}=this.props,{calcHeight:g,calcWidth:f,currentWidth:w,currentHeight:x}=this.state,{media:y,id:k,link:j,networkId:C}=c,S=1===_,I=null!==y&&void 0!==y&&y.height?null===y||void 0===y?void 0:y.height:g,$=null!==y&&void 0!==y&&y.width?null===y||void 0===y?void 0:y.width:f,P={paddingBottom:`${S?null:_||100*I/$}%`};return(0,d.jsx)("div",{className:`${r}_wrap_`,style:P,ref:this.mediaRef,children:(0,d.jsx)(s(),{className:`${r} tb_media-${k}`,url:null!==y&&void 0!==y&&null!==(e=y.video)&&void 0!==e&&e.clip?null===y||void 0===y||null===(t=y.video)||void 0===t?void 0:t.clip:b?null===y||void 0===y||null===(i=y.video)||void 0===i?void 0:i.full:null===y||void 0===y||null===(n=y.image)||void 0===n?void 0:n.small,"data-height":g,"data-width":f,"data-type":"video","data-network":C,"data-link":j,"data-item-id":k,"data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":$,"data-height":I,poster:null===y||void 0===y||null===(o=y.image)||void 0===o?void 0:o.small}},file:{attributes:{preload:"metadata",poster:null===y||void 0===y||null===(a=y.image)||void 0===a?void 0:a.small,height:x,width:w}}},loop:!(l.aD&&!l.HY&&null!==c&&void 0!==c&&c.loopStop)&&h,onError:e=>{S&&p&&setTimeout((()=>{this._isMounted&&p&&p()}),1e3*v),this.setVideoLoaded(!1)},autoPlay:b&&h?1:0,muted:m,volume:h?1:0,playsinline:1,onReady:()=>this.setVideoLoaded(!l.HY),playing:b&&h?1:0,controls:u||!1,onEnded:p,title:null===y||void 0===y?void 0:y.title},`${k}-${x}-${f}-${b}`)})}}const c=(0,n.memo)(r)},15537:(e,t,i)=>{i.r(t),i.d(t,{default:()=>a});var n=i(9950),o=i(66345),s=i(44414);const l=n.lazy((()=>i.e(620).then(i.bind(i,20620)))),a=e=>{const{Post:t,IconClass:i,isCenter:a,hideVideo:d,show:r}=e,c=!![3,5].includes(t.type),u=7===t.network.id,h=!!(t.mediaList&&t.mediaList.length>0),p=1===t.isAudio,m=!!t.isProduct,v=(0,s.jsx)(n.Suspense,{fallback:(0,s.jsx)(s.Fragment,{}),children:(0,s.jsx)(l,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"})}),_=(0,s.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:"  "}),b=(0,s.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:"  "}),g=(0,s.jsx)("div",{className:"tb__icon tb-"+(o.aD?"reel-fill tb_reel_ico":"video tb_video_ico"),children:"  "}),f=(0,s.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:"  "}),w=(0,s.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:"  "});return r?(0,s.jsxs)(s.Fragment,{children:[a&&(u||c)?(0,s.jsxs)("div",{className:`${i} tb__media_ico_c`,children:[c&&!u?w:"",c&&u?v:""]}):null,m||h||c?(0,s.jsxs)("div",{className:`${i} tb__media_ico_`,children:[m?f:"",h?_:"",a||!c||u||d?"":p?b:g]}):null]}):null}},92663:(e,t,i)=>{i.r(t),i.d(t,{default:()=>a});var n=i(9950),o=i(91697),s=i(44414);const l=n.lazy((()=>i.e(620).then(i.bind(i,20620))));class a extends n.PureComponent{render(){const{networkId:e,networkClass:t,iconStyle:i,isPopUp:a}=this.props;return(null===i||void 0===i?void 0:i.default)||[7,4,36].includes(e)?(0,s.jsx)(n.Suspense,{fallback:(0,s.jsx)(s.Fragment,{}),children:(0,s.jsx)(l,{networkId:e,networkClass:t})}):(0,s.jsx)("div",{className:`${t} tb__icon tb-${(0,o.EC)(e)}`,"aria-label":`post network ${(0,o.Oi)(e)}`,children:(0,s.jsx)("div",{})})}}},89649:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d});var n=i(9950),o=i(66345),s=i(88740),l=i(76506),a=i(44414);class d extends n.PureComponent{constructor(e){super(e),this.contentRef=n.createRef()}componentDidMount(){setTimeout((()=>{var e,t;if(null!==(e=this.contentRef)&&void 0!==e&&null!==(t=e.current)&&void 0!==t&&t.clientHeight){var i,n;const e=(null===(i=this.contentRef)||void 0===i||null===(n=i.current)||void 0===n?void 0:n.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(e)}}),100)}render(){const{CardStyle:e,contentClass:t,content:i,contentTitle:n,maxLines:d,isReadMore:r}=this.props,c=e.content.trimcontent&&!o.HY?e.content.trimcontent:0,u={WebkitLineClamp:d,textAlign:e.style.textAlign},h=(0,l.w)(i),p=`${t} ${r?"":""+(c?` tb_content_line-${c}`:"")} tb-cTBfont-${e.style.variant}`;return(0,a.jsxs)("div",{className:p,ref:this.contentRef,style:u,children:[n?(0,a.jsx)("div",{className:"tb_bold_txt__",children:(0,s.Ay)(n)}):null,(0,s.Ay)(h)]})}}},72685:(e,t,i)=>{i.r(t),i.d(t,{default:()=>l});var n=i(9950),o=i(21850),s=i(44414);class l extends n.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{Post:i,ThemeInfo:n}=this.props;t.stopPropagation(),(0,o.hq)({type:2,action:2,wall:n.wallID,feed:i.feedId,post:i.referenceId?i.referenceId:i.id,owner:n.ownerId}),(0,o.x9)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{shareClass:e,Post:t}=this.props,{facebook:i,twitter:n,linkedin:o}=null===t||void 0===t?void 0:t.share,l=e=>{let{shareOn:t,icon:i}=e;return(0,s.jsx)("div",{className:"tb_share_icon_list",children:(0,s.jsx)("div",{onClick:this.onClickData(t),className:`tb_share_ico__ tb__icon tb-${i}`,title:i,children:(0,s.jsx)("div",{})})})};return(0,s.jsxs)("div",{className:`tb_share_wrapper ${e}`,children:[(0,s.jsx)("div",{className:"tb_share_button_ tb__icon tb-share",children:(0,s.jsx)("div",{})}),(0,s.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[i?(0,s.jsx)(l,{shareOn:i,icon:"facebook"}):"",n?(0,s.jsx)(l,{shareOn:n,icon:"twitter"}):"",o?(0,s.jsx)(l,{shareOn:o,icon:"linkedin"}):""]})]})}}},59992:(e,t,i)=>{i.r(t),i.d(t,{default:()=>I});var n=i(9950),o=i(74378),s=i.n(o),l=i(66345),a=i(52867),d=i(44414);const r=(0,n.lazy)((()=>i.e(8167).then(i.bind(i,78167)))),c=(0,n.lazy)((()=>i.e(6723).then(i.bind(i,6723)))),u=(0,n.lazy)((()=>Promise.resolve().then(i.bind(i,92663)))),h=(0,n.lazy)((()=>i.e(7949).then(i.bind(i,37949)))),p=e=>{let{Post:t,CardStyle:i,ThemeInfo:o,inView:s}=e;const{author:l,networkId:p}=t,{ThemeId:m}=o.id,v=l.username&&l.username.length>0?`@${l.username}`:"",_=(0,a.zK)(l.name),b=!(!i.author.status||_),g=!(!i.author.status||!i.timeStatus||_||""==v);return(0,d.jsxs)("div",{className:"tb_nc_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:[(0,d.jsxs)("div",{className:"tb_nc_author",children:[b?(0,d.jsxs)(n.Suspense,{fallback:(0,d.jsx)("div",{className:"tb_nc_author_profile"}),children:[(0,d.jsx)(r,{author:l,network:t.network,networkId:p,authorClass:"tb_nc_author_profile",inView:s})," "]}):"",(0,d.jsxs)("div",{className:"tb_nc_author_info",children:[b?(0,d.jsx)("div",{className:"tb_nc_authorname",children:l.name}):"",(0,d.jsxs)("div",{className:"tb_nc_post_info",children:[b&&""!=v?(0,d.jsx)("div",{className:"tb_nc_username",children:v}):"",g?(0,d.jsx)(n.Suspense,{fallback:(0,d.jsx)("div",{}),children:(0,d.jsx)(h,{sepClass:"tb_nc_seprator"})}):"",i.timeStatus?(0,d.jsx)(n.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(c,{createdAt:t.createdAt,timeClass:`tb_nc_time tb-cTBfont-${i.author.variant}`})}):""]})]})]}),(0,d.jsx)("div",{className:"tb_nc_social_",children:(0,d.jsx)(n.Suspense,{fallback:(0,d.jsx)("div",{style:{minWidth:20}}),children:(0,d.jsx)(u,{networkClass:"tb_nc_social_ico",networkId:p,iconStyle:i.icon})})})]})};var m=i(78262),v=i(3720),_=i(15537),b=i(92663);const g=e=>{let{Post:t,ThemeStyle:i,CardStyle:n,ThemeInfo:o,index:s,inView:a}=e;const r=[3,5].includes(t.type)&&1==i.autoPlay||!1,c=!(!l.MH||!n.style.ratio)&&n.style.ratio,u=59==!o.id&&!l.HY&&!l.MH;return(0,d.jsxs)("div",{className:"tb_nc_media_wrap",children:[u?(0,d.jsx)("div",{className:"tb_nc_social_ tb_nc_social_top_",children:(0,d.jsx)(b.default,{networkClass:"tb_nc_social_ico",networkId:t.network.id,network:t.network,iconStyle:n.icon})}):null,(0,d.jsx)(_.default,{Post:t,IconClass:u?"tb_nc_media_icon_te":"tb_nc_media_icon",show:!0,hideVideo:r}),r?(0,d.jsx)(v.A,{VideoClass:"tb_nc_video",Post:t,size:c,isCover:!0,controls:!1,autoPlay:r,muted:!0,index:s,inView:a}):(0,d.jsx)(m.A,{ImageClass:"tb_nc_image",Post:t,size:c,hotspot:l.HY,blurBG:!1,observer:!0,index:s,inView:a})]})};var f=i(89649),w=i(72685),x=i(60531),y=i(56071);const k=n.lazy((()=>i.e(342).then(i.bind(i,60342)))),j=n.lazy((()=>i.e(5507).then(i.bind(i,55507)))),C=e=>{let{postSize:t,clickToShowPopUp:i,index:o,onClickToCTA:s,ThemeStyle:r,CardStyle:c,Post:u,ThemeInfo:h,counter:m}=e;const v=h.id,_=1!==u.type,b=u.rating>0,C=u.rating>0?"tb_nc_rating_content":"tb_nc_content",S=1===u.type&&c.style.textDecoration?"tb_nc_text_decoration tb_nc_text_post":"",I=c.content.trimcontent?(0,a.Ex)(u.content.text,200):u.content.text;return(0,d.jsx)(y.A,{children:e=>{let{ref:a,inView:y}=e;return(0,d.jsx)("div",{ref:a,style:{width:`${t}%`,padding:c.style.padding/2,opacity:y?1:0,transition:y?"opacity .5s ease-in-out":""},className:"tb_nc_post_wrapper"+(l.MH&&83===v?` tb_nc_post_gradient tb_nc_gradient-${m}`:""),role:"article","area-label":u.content.text,"post-id":u.referenceId?u.referenceId:u.id,"feed-id":u.feedId,children:(0,d.jsx)("div",{id:`tb_nc_id-${u.id}`,"tb-network":u.networkId,"post-id":u.referenceId||u.id,"feed-id":u.feedId,tabIndex:"0","area-label":I,role:"article",children:(0,d.jsx)("div",{className:"tb_nc_post_wrap_in",children:(0,d.jsxs)("div",{className:"tb_nc_post_in",onClick:i(o,u),role:"button","aria-label":"open detail modal for post",tabIndex:"0",children:[u.share.status?(0,d.jsx)(w.default,{share:u.share,shareClass:"tb_nc_share_container",Post:u,ThemeInfo:h}):null,_?(0,d.jsx)(g,{Post:u,CardStyle:c,ThemeStyle:r,ThemeInfo:h,index:o,inView:y}):null,b&&59!==v&&!l.HY?(0,d.jsx)("div",{className:"tb_nc_rating__",children:(0,d.jsx)(n.Suspense,{fallback:(0,d.jsx)("div",{className:"rating-default-height"}),children:(0,d.jsx)(j,{rating:u.rating,networkId:u.networkId})})}):null,(0,d.jsxs)("div",{className:"tb_nc_contant_wrapper",children:[(0,d.jsx)(p,{Post:u,CardStyle:c,ThemeStyle:r,mediaType:_,ThemeInfo:h,inView:y}),u.ctaStatus?(0,d.jsx)("div",{className:"tb_nc_post_cta",children:(0,d.jsx)(x.default,{ctaClass:"tb_nc_post_cta_btn",cta:u,Post:u,onClickToCTA:s})}):null,b&&l.HY?(0,d.jsx)("div",{className:"tb_nc_rating__",children:(0,d.jsx)(n.Suspense,{fallback:(0,d.jsx)("div",{className:"rating-default-height"}),children:(0,d.jsx)(j,{rating:u.rating,networkId:u.networkId})})}):null,c.content.status||1===u.type?(0,d.jsx)(f.default,{contentClass:`${C} ${S}`,Post:u,content:I,CardStyle:c,contentTitle:u.content.title}):null]}),c.actionStatus?(0,d.jsx)(n.Suspense,{fallback:"",children:(0,d.jsx)(k,{Post:u,CardStyle:c,actionClass:"tb_nc_social_action__"})}):null]})})})})}})};class S extends n.PureComponent{componentDidMount(){this.props.loadBranding()}render(){const{postData:e,completeDataObject:t,CardStyle:i,ThemeStyle:n,ThemeInfo:o,clickToShowPopUp:r,onClickToCTA:c,onClickPopUpSlider:u,containerSize:h}=this.props,p=Math.max((h.width/(i.minimumWidth+20)).toFixed(),1),m=(0,a.GH)(h.width,n.column,p),v=(0,a.Cv)(h.width,m);let _=0;return(0,d.jsx)(s(),{className:"tb_nc_post_container",tabIndex:"0","aria-label":`There are ${e&&e.length>0?e.length:0} posts in the feed`,role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_nc_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:e&&e.length>0&&e.map(((e,s)=>{const a=t[e];return _=l.MH&&83==(null===o||void 0===o?void 0:o.id)?s%6===0?1:_+1:1,(0,d.jsx)(C,{postSize:v,clickToShowPopUp:r,onClickToCTA:c,onClickPopUpSlider:u,Post:a,index:s,CardStyle:i,ThemeStyle:n,ThemeInfo:o},s)}))})}}const I=S},91697:(e,t,i)=>{i.d(t,{EC:()=>n,Oi:()=>s,Yo:()=>o});const n=e=>({0:"manual-upload",1:"twitter",2:"instagram",3:"facebook",4:"google",5:"pinterest",6:"flickr",7:"youtube",8:"vimeo",10:"linkedin",11:"tumblr",12:"rss",13:"star",15:"workplace",18:"instagram",19:"yelp",20:"slack",21:"yammer",23:"airbnb",25:"soundcloud",26:"giphy",27:"deviantart",28:"tiktok",29:"onsite-upload",30:"vkontakte",32:"chrome",33:"collabration",34:"amazon",35:"tripadvisor",36:"star",37:"aliexpress"}[e]||""),o=e=>({0:"#313A53",1:"#29a9e1",2:"#000000",3:"#1b74e4",4:"#4081ed",5:"#e60022",6:"#0a63dc",7:"#FF0000",8:"#1eb8eb",10:"#0a66c2",11:"#36465d",12:"#f78422",13:"#FABF04",15:"#4767ab",18:"#000000",19:"#be362e",20:"#510d4e",21:"#0078d4",23:"#ff7977",25:"#ff7700",26:"#000000",27:"#00e59b",28:"#000000",29:"#613983",30:"#0077FF",32:"#4c8bf5",33:"#4e69ed",34:"#4e69ed",35:"#60c196",36:"#00e9ff",37:"#E52F20"}[e]||""),s=e=>({0:"Manual Upload",1:"Twitter",2:"Instagram",3:"Facebook",4:"Google",5:"Pinterest",6:"Flickr",7:"YouTube",8:"Vimeo",10:"LinkedIn",11:"Tumblr",12:"RSS",13:"Star",15:"Workplace",18:"Instagram",19:"Yelp",20:"Slack",21:"Yammer",23:"Airbnb",25:"Soundcloud",26:"Giphy",27:"Deviantart",28:"Tiktok",29:"Review Hub",30:"Vkontakte",32:"Chrome Extension",33:"Collab with Creators",34:"Amazon",35:"Tripadvisor",36:"Review Hub",37:"Aliexpress"}[e]||"")}}]);