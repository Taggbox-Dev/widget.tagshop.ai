"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2663,2685,3382,5044,5537,7713,9649],{45285:(e,t,i)=>{i.d(t,{bs:()=>r});var s=i(80415),o=i(296),n=i(66345),l=i(28322),a=i(14313);let d=[];const r=e=>{e.persist();const t=e.target,{network:i,itemId:s,themeId:o}=t.dataset;if(1!=i||[3,4,16,47,50,55,60].includes(o))d.includes(e)||d.push(e);else{const e=document.querySelector(`.tb_media-${s}`);e&&(e.style.display="none")}1===d.length&&c()},c=async()=>{var e;const{postData:t,wall:i}=o.A.getState().appData;if(!i||!Object.keys(i).length||!d.length)return;const{User:r,Wall:u}=i,p=null===r||void 0===r?void 0:r.id,m=(n.HY,null===u||void 0===u?void 0:u.id),v=null===(e=d[0])||void 0===e?void 0:e.target,{filterId:_,network:b,itemId:g,load:f}=v.dataset,w=document.querySelector(`img[data-item-id="${g}"]`),x=null!==t&&void 0!==t&&t.completeDataObject?Object.values(t.completeDataObject).filter((e=>e.id===g)):[];if(null!==x&&void 0!==x&&x.length){var y;const e=await(async e=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((t=>e.includes(t)))||await fetch(e).then((e=>e.ok)).catch((()=>!1)))(null===(y=x[0])||void 0===y?void 0:y.postFileNew);if(!e&&w){if([2,18,3,28].includes(+b)&&"0"===f&&"34"!==_&&!v.src.includes("cloud.taggbox.com")){const e=((e,t,i)=>{var s,o,n,l,a;const{UserPlan:d,Wall:r}=t;return{table_name:null===d||void 0===d?void 0:d.db_table,...e,...null!==i&&void 0!==i&&i.length?{feedId:null===(s=i[0])||void 0===s?void 0:s.feedId,type:null===(o=i[0])||void 0===o?void 0:o.type,link:null===(n=i[0])||void 0===n?void 0:n.link,postFile:null===(l=i[0])||void 0===l?void 0:l.postFile,mediaFile:null===(a=i[0])||void 0===a?void 0:a.mediaFile}:{},url:null===r||void 0===r?void 0:r.url}})({wallId:m,postId:g,ownerId:p},i,x);try{const{data:t}=await(new a.A).post(n.t5,e,{headers:l.ML}),i=n.HY||n.MH?"":`https://images.${n.QR}/`;v.src="18"===b?`${i}${t.media}`:t.media}catch{v.src=s.gX}finally{h(v)}}else v.src=s.gX,h(v);d.shift(),c()}else{const e=`${s.th}/media/images/no-image.svg`;v.src=e,v.srcset=e,h(v),d.shift()}}},h=e=>e.setAttribute("data-load","1")},89874:(e,t,i)=>{i.d(t,{A:()=>u});var s=i(9950),o=i(10300),n=i(1823),l=i(21850),a=i(82652),d=i(44414);const r=(0,s.memo)((e=>{let{item:t}=e;const i=t.discount>0&&t.discount!==t.price,s=t.discount>0?t.discount:t.price;return(0,d.jsxs)("a",{hotspot:1,href:t.url,target:"_blank",rel:"noopener noreferrer",className:"tb_tooltip_wrap",children:[(0,d.jsx)("div",{hotspot:1,className:"tb_p_tooltip_title",children:t.title}),i&&(0,d.jsxs)("div",{hotspot:1,className:"tb_p_tooltip_price tb_price_disabled",children:[t.currency,t.price]}),(t.price>0||t.discount>0)&&(0,d.jsxs)("div",{hotspot:1,className:"tb_p_tooltip_price",children:[t.currency,s]})]})})),c=e=>{let{products:t,appData:i,Post:o,showTooltip:c,isPopup:h,dataItem:u}=e;const[p,m]=(0,s.useState)(null),v=(0,s.useMemo)((()=>{var e,t;return(null===i||void 0===i||null===(e=i.wall)||void 0===e||null===(t=e.ProductSetting)||void 0===t?void 0:t.Hotspot)||{}}),[i]);(0,s.useEffect)((()=>{if(c){const e=t.findIndex((e=>e.id===c));-1!==e&&m(e)}else m(null)}),[c,t]);const _=(0,s.useCallback)((e=>{var t,s,o,n;null!==i&&void 0!==i&&i.wall&&(0,l.hq)({type:1,action:2,wall:null===i||void 0===i||null===(t=i.wall)||void 0===t||null===(s=t.ThemeInfo)||void 0===s?void 0:s.webId,product_id:e.id,post:u.referenceId,owner:null===i||void 0===i||null===(o=i.wall)||void 0===o||null===(n=o.ThemeInfo)||void 0===n?void 0:n.ownerId,feed:u.feedId,currency:e.currencyCode,price:Number(e.price)>0?e.discount:e.price})}),[i,o]),b=(0,s.useCallback)(((e,t)=>{e.stopPropagation(),_(t),window.open(t.url,"_blank")}),[_]);return null!==v&&void 0!==v&&v.status?t.map(((e,t)=>{const i=`hotspot-${e.id}-${t}${h?"-pop":""}`,s=p===t;return(0,d.jsxs)("div",{id:i,className:"tb_hotspot_dot"+(s?" tb_hotspot_active_":""),role:"button",style:{top:e.hotspot.top,left:e.hotspot.left},onMouseEnter:()=>m(t),onMouseLeave:()=>m(null),onClick:t=>{b(t,e)},"data-tooltip-offset":7,children:[(0,d.jsx)("div",{hotspot:1,className:"tb_hotspot__ "+(0===v.type?"tb_hotspot_ani__":""),children:t+1}),(0,d.jsx)(a.A,{wallId:i,children:(0,d.jsx)(n.m_,{appendTo:"body","data-tooltip-id":`tooltip-${e.id}-${t}${h?"-pop":""}`,className:"tb_pro_tooltip",anchorSelect:`#${i}`,clickable:!0,...h?{isOpen:s}:{},children:(0,d.jsx)(r,{item:e})},t)})]},`${e.id}-${t}`)})):null},h=(0,s.memo)(c),u=(0,o.Ng)((e=>({appData:e.appData})))(h)},56071:(e,t,i)=>{i.d(t,{A:()=>p});var s=i(9950),o=Object.defineProperty,n=(e,t,i)=>((e,t,i)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i)(e,"symbol"!==typeof t?t+"":t,i),l=new Map,a=new WeakMap,d=0,r=void 0;function c(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(i=e.root,i?(a.has(i)||(d+=1,a.set(i,d.toString())),a.get(i)):"0"):e[t]}`;var i})).toString()}function h(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r;if("undefined"===typeof window.IntersectionObserver&&void 0!==s){const o=e.getBoundingClientRect();return t(s,{isIntersecting:s,target:e,intersectionRatio:"number"===typeof i.threshold?i.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),()=>{}}const{id:o,observer:n,elements:a}=function(e){const t=c(e);let i=l.get(t);if(!i){const s=new Map;let o;const n=new IntersectionObserver((t=>{t.forEach((t=>{var i;const n=t.isIntersecting&&o.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=n),null==(i=s.get(t.target))||i.forEach((e=>{e(n,t)}))}))}),e);o=n.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:t,observer:n,elements:s},l.set(t,i)}return i}(i),d=a.get(e)||[];return a.has(e)||a.set(e,d),d.push(t),n.observe(e),function(){d.splice(d.indexOf(t),1),0===d.length&&(a.delete(e),n.unobserve(e)),0===a.size&&(n.disconnect(),l.delete(o))}}s.Component;var u=i(52867);const p=e=>{let{children:t}=e;const{ref:i,inView:o,entry:n}=function(){let{threshold:e,delay:t,trackVisibility:i,rootMargin:o,root:n,triggerOnce:l,skip:a,initialInView:d,fallbackInView:r,onChange:c}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var u;const[p,m]=s.useState(null),v=s.useRef(c),[_,b]=s.useState({inView:!!d,entry:void 0});v.current=c,s.useEffect((()=>{if(a||!p)return;let s;return s=h(p,((e,t)=>{b({inView:e,entry:t}),v.current&&v.current(e,t),t.isIntersecting&&l&&s&&(s(),s=void 0)}),{root:n,rootMargin:o,threshold:e,trackVisibility:i,delay:t},r),()=>{s&&s()}}),[Array.isArray(e)?e.toString():e,p,n,o,l,a,i,r,t]);const g=null==(u=_.entry)?void 0:u.target,f=s.useRef(void 0);p||!g||l||a||f.current===g||(f.current=g,b({inView:!!d,entry:void 0}));const w=[m,_.inView,_.entry];return w.ref=w[0],w.inView=w[1],w.entry=w[2],w}({triggerOnce:!0,threshold:.01});return o&&(0,u._7)(n),t({ref:i,inView:o})}},78262:(e,t,i)=>{i.d(t,{A:()=>r});var s=i(9950),o=i(76506),n=i(80415),l=i(45285),a=i(89874),d=i(44414);class r extends s.PureComponent{constructor(e){var t,i;super(e),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:e,offsetWidth:t}=this.mediaRef.current;this.setState({currentHeight:e,currentWidth:t})}},this.mediaSizeCalc=async()=>{const{Post:e,mediaOnly:t}=this.props,i=t||e.media;if((null===i||void 0===i||!i.height)&&(null===i||void 0===i||!i.width))try{var s;const{width:e,height:t}=await(0,o.TW)(null===i||void 0===i||null===(s=i.image)||void 0===s?void 0:s.small);this._isMounted&&this.setState({height:t,width:e})}catch(n){this._isMounted&&this.setState({height:300,width:300})}};const{mediaOnly:n,Post:l}=e;this.state={height:(null===n||void 0===n?void 0:n.height)||(null===l||void 0===l||null===(t=l.media)||void 0===t?void 0:t.height)||0,width:(null===n||void 0===n?void 0:n.width)||(null===l||void 0===l||null===(i=l.media)||void 0===i?void 0:i.width)||0,currentHeight:0,currentWidth:0},this.mediaRef=s.createRef()}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var e,t,i,s;const{height:o,width:r}=this.state,{ImageClass:c,Post:h,hotspot:u,size:p,blurBG:m,mediaOnly:v,inView:_,multiKey:b,index:g}=this.props,{id:f,link:w,products:x}=h,y=v||(null===h||void 0===h?void 0:h.media),{currentWidth:j,currentHeight:k}=this.state,S=p||100*o/r,I={paddingBottom:1===S?null:`${S}%`},C={backgroundImage:_?`url(${null===y||void 0===y||null===(e=y.image)||void 0===e?void 0:e.small})`:null},$=r>o?"100%":r/o*100+"%",P=r>o?o/r*100+"%":"100%",N=h.isProduct&&u&&h.hotspot,T={width:N&&p?$:null,height:N&&p?P:null};return(0,d.jsxs)("div",{className:`${c}_wrap_`,style:I,ref:this.mediaRef,children:[N&&m?(0,d.jsx)("div",{className:"tb_blur_bg_",style:C}):null,(0,d.jsxs)("div",{className:`${c}_wrap_in`,style:T,children:[N?(0,d.jsx)(a.A,{products:this.props.multiPic?h.mediaList[b].product:x,hotspot:h.hotspot,Post:h,showTooltip:null},g):null,_?(0,d.jsx)("img",{className:`${c} tb_media-${f}`,src:null===y||void 0===y||null===(t=y.image)||void 0===t?void 0:t.small,srcSet:`${null===y||void 0===y||null===(i=y.image)||void 0===i?void 0:i.small} 1x, ${null===y||void 0===y||null===(s=y.image)||void 0===s?void 0:s.large} 2x`,sizes:`${j}px`,loading:_?"eager":"lazy",decoding:"async",fetchPriority:_?"high":"low","data-id":f,height:k,width:j,"data-height":o,"data-width":r,"data-link":w,onLoad:this.onLoad,onError:e=>{e.target.src=`${n.th}/media/error/no-image.svg`,e.target.srcset=`${n.th}/media/error/no-image.svg`,(0,l.bs)(e)},alt:null===y||void 0===y?void 0:y.title,title:null===y||void 0===y?void 0:y.title},`${f}-${o}-${r}-${_}`):null]})]})}}},3720:(e,t,i)=>{i.d(t,{A:()=>c});var s=i(9950),o=i(38092),n=i.n(o),l=i(66345),a=i(76506),d=i(44414);class r extends s.Component{constructor(e){super(e),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:e,offsetWidth:t}=this.mediaRef.current;this.setState({currentHeight:e,currentWidth:t})}},this.mediaSizeCalc=async()=>{const{media:e}=this.props.Post;if((null===e||void 0===e||!e.height)&&(null===e||void 0===e||!e.width))try{var t;const{width:i,height:s}=await(0,a.TW)(null===e||void 0===e||null===(t=e.image)||void 0===t?void 0:t.small);this._isMounted&&this.setState({calcHeight:s,calcWidth:i})}catch(i){this._isMounted&&this.setState({calcHeight:300,calcWidth:300})}},this.setVideoLoaded=e=>{this._isMounted&&this.setState({videoLoaded:e})},this.state={loadError:!1,videoLoaded:!1,calcHeight:0,calcWidth:0,currentHeight:0,currentWidth:0},this.mediaRef=s.createRef(),this._isMounted=!1}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var e,t,i,s,o,a;const{VideoClass:r,Post:c,controls:h,autoPlay:u,handleVideoEnded:p,muted:m,intervalTime:v,size:_,inView:b}=this.props,{calcHeight:g,calcWidth:f,currentWidth:w,currentHeight:x}=this.state,{media:y,id:j,link:k,networkId:S}=c,I=1===_,C=null!==y&&void 0!==y&&y.height?null===y||void 0===y?void 0:y.height:g,$=null!==y&&void 0!==y&&y.width?null===y||void 0===y?void 0:y.width:f,P={paddingBottom:`${I?null:_||100*C/$}%`};return(0,d.jsx)("div",{className:`${r}_wrap_`,style:P,ref:this.mediaRef,children:(0,d.jsx)(n(),{className:`${r} tb_media-${j}`,url:null!==y&&void 0!==y&&null!==(e=y.video)&&void 0!==e&&e.clip?null===y||void 0===y||null===(t=y.video)||void 0===t?void 0:t.clip:b?null===y||void 0===y||null===(i=y.video)||void 0===i?void 0:i.full:null===y||void 0===y||null===(s=y.image)||void 0===s?void 0:s.small,"data-height":g,"data-width":f,"data-type":"video","data-network":S,"data-link":k,"data-item-id":j,"data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":$,"data-height":C,poster:null===y||void 0===y||null===(o=y.image)||void 0===o?void 0:o.small}},file:{attributes:{preload:"metadata",poster:null===y||void 0===y||null===(a=y.image)||void 0===a?void 0:a.small,height:x,width:w}}},loop:!(l.aD&&!l.HY&&null!==c&&void 0!==c&&c.loopStop)&&u,onError:e=>{I&&p&&setTimeout((()=>{this._isMounted&&p&&p()}),1e3*v),this.setVideoLoaded(!1)},autoPlay:b&&u?1:0,muted:m,volume:u?1:0,playsinline:1,onReady:()=>this.setVideoLoaded(!l.HY),playing:b&&u?1:0,controls:h||!1,onEnded:p,title:null===y||void 0===y?void 0:y.title},`${j}-${x}-${f}-${b}`)})}}const c=(0,s.memo)(r)},15537:(e,t,i)=>{i.r(t),i.d(t,{default:()=>a});var s=i(9950),o=i(66345),n=i(44414);const l=s.lazy((()=>i.e(620).then(i.bind(i,20620)))),a=e=>{const{Post:t,IconClass:i,isCenter:a,hideVideo:d,show:r}=e,c=!![3,5].includes(t.type),h=7===t.network.id,u=!!(t.mediaList&&t.mediaList.length>0),p=1===t.isAudio,m=!!t.isProduct,v=(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(l,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"})}),_=(0,n.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:"  "}),b=(0,n.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:"  "}),g=(0,n.jsx)("div",{className:"tb__icon tb-"+(o.aD?"reel-fill tb_reel_ico":"video tb_video_ico"),children:"  "}),f=(0,n.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:"  "}),w=(0,n.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:"  "});return r?(0,n.jsxs)(n.Fragment,{children:[a&&(h||c)?(0,n.jsxs)("div",{className:`${i} tb__media_ico_c`,children:[c&&!h?w:"",c&&h?v:""]}):null,m||u||c?(0,n.jsxs)("div",{className:`${i} tb__media_ico_`,children:[m?f:"",u?_:"",a||!c||h||d?"":p?b:g]}):null]}):null}},92663:(e,t,i)=>{i.r(t),i.d(t,{default:()=>a});var s=i(9950),o=i(91697),n=i(44414);const l=s.lazy((()=>i.e(620).then(i.bind(i,20620))));class a extends s.PureComponent{render(){const{networkId:e,networkClass:t,iconStyle:i,isPopUp:a}=this.props;return(null===i||void 0===i?void 0:i.default)||[7,4,36].includes(e)?(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(l,{networkId:e,networkClass:t})}):(0,n.jsx)("div",{className:`${t} tb__icon tb-${(0,o.EC)(e)}`,"aria-label":`post network ${(0,o.Oi)(e)}`,children:(0,n.jsx)("div",{})})}}},89649:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d});var s=i(9950),o=i(66345),n=i(88740),l=i(76506),a=i(44414);class d extends s.PureComponent{constructor(e){super(e),this.contentRef=s.createRef()}componentDidMount(){setTimeout((()=>{var e,t;if(null!==(e=this.contentRef)&&void 0!==e&&null!==(t=e.current)&&void 0!==t&&t.clientHeight){var i,s;const e=(null===(i=this.contentRef)||void 0===i||null===(s=i.current)||void 0===s?void 0:s.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(e)}}),100)}render(){const{CardStyle:e,contentClass:t,content:i,contentTitle:s,maxLines:d,isReadMore:r}=this.props,c=e.content.trimcontent&&!o.HY?e.content.trimcontent:0,h={WebkitLineClamp:d,textAlign:e.style.textAlign},u=(0,l.w)(i),p=`${t} ${r?"":""+(c?` tb_content_line-${c}`:"")} tb-cTBfont-${e.style.variant}`;return(0,a.jsxs)("div",{className:p,ref:this.contentRef,style:h,children:[s?(0,a.jsx)("div",{className:"tb_bold_txt__",children:(0,n.Ay)(s)}):null,(0,n.Ay)(u)]})}}},72685:(e,t,i)=>{i.r(t),i.d(t,{default:()=>l});var s=i(9950),o=i(21850),n=i(44414);class l extends s.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{Post:i,ThemeInfo:s}=this.props;t.stopPropagation(),(0,o.hq)({type:2,action:2,wall:s.wallID,feed:i.feedId,post:i.referenceId?i.referenceId:i.id,owner:s.ownerId}),(0,o.x9)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{shareClass:e,Post:t}=this.props,{facebook:i,twitter:s,linkedin:o}=null===t||void 0===t?void 0:t.share,l=e=>{let{shareOn:t,icon:i}=e;return(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t),className:`tb_share_ico__ tb__icon tb-${i}`,title:i,children:(0,n.jsx)("div",{})})})};return(0,n.jsxs)("div",{className:`tb_share_wrapper ${e}`,children:[(0,n.jsx)("div",{className:"tb_share_button_ tb__icon tb-share",children:(0,n.jsx)("div",{})}),(0,n.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[i?(0,n.jsx)(l,{shareOn:i,icon:"facebook"}):"",s?(0,n.jsx)(l,{shareOn:s,icon:"twitter"}):"",o?(0,n.jsx)(l,{shareOn:o,icon:"linkedin"}):""]})]})}}},47713:(e,t,i)=>{i.r(t),i.d(t,{default:()=>o});var s=i(44414);const o=e=>{var t;let{CardStyle:i,btnClass:o,mode:n}=e;const l={fontFamily:null===i||void 0===i||null===(t=i.style)||void 0===t?void 0:t.font};return(0,s.jsx)("div",{className:`tb_shop_btn_wrap ${o}`,children:(0,s.jsx)("div",{className:"tb_shop_btn"+(n?" tb_shop_btn_light":" tb_shop_btn_dark"),style:l,children:i.shopText})})}},53382:(e,t,i)=>{i.r(t),i.d(t,{default:()=>j});var s=i(9950),o=i(52867),n=i(66345),l=i(78262),a=i(3720),d=i(15537),r=i(44414);const c=e=>{let{Post:t,ThemeStyle:i,index:s,inView:o}=e;const c=!t.hotspot,h=!(![3,5].includes(t.type)||1!=i.autoPlay);return(0,r.jsxs)("div",{className:"tb_sp_media_wrap",children:[(0,r.jsx)(d.default,{Post:t,IconClass:"tb_sp_media_icon",show:c,hideVideo:i.autoPlay}),h?(0,r.jsx)(a.A,{VideoClass:"tb_sp_video",Post:t,size:100,isCover:!0,controls:!1,autoPlay:!0,muted:!0,observer:!0,index:s,inView:o}):(0,r.jsx)(l.A,{ImageClass:"tb_sp_image",Post:t,size:100,hotspot:!0,blurBG:n.HY,observer:!0,index:s,inView:o})]})};var h=i(72685),u=i(92663),p=i(47713);const m=(0,s.lazy)((()=>i.e(8167).then(i.bind(i,78167)))),v=(0,s.lazy)((()=>i.e(6723).then(i.bind(i,6723)))),_=(0,s.lazy)((()=>Promise.resolve().then(i.bind(i,92663)))),b=(0,s.lazy)((()=>i.e(7949).then(i.bind(i,37949)))),g=e=>{let{Post:t,CardStyle:i}=e;const{author:o,networkId:n}=t,l=o.username&&o.username.length>0?`@${o.username}`:"",a=!(!i.author.status||o.isInstaUser),d=!(!i.author.status||!i.timeStatus||o.isInstaUser);return(0,r.jsxs)("div",{className:"tb_sp_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:[(0,r.jsxs)("div",{className:"tb_sp_author",children:[a?(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(m,{author:o,network:t.network,authorClass:"tb_sp_author_profile"})}):"",(0,r.jsxs)("div",{className:"tb_sp_author_info",children:[a?(0,r.jsx)("div",{className:"tb_sp_authorname",children:o.name}):"",(0,r.jsxs)("div",{className:"tb_sp_post_info",children:[a?(0,r.jsx)("div",{className:"tb_sp_username",children:l}):"",d?(0,r.jsx)(b,{sepClass:"tb_sp_seprator"}):"",i.timeStatus?(0,r.jsxs)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:[(0,r.jsx)(v,{postTime:t.createdAt,timeClass:`tb_sp_time tb-cTBfont-${i.author.variant}`})," "]}):""]})]})]}),(0,r.jsx)("div",{className:"tb_sp_social_",children:(0,r.jsxs)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:[(0,r.jsx)(_,{networkClass:"tb_sp_social__ico",networkId:n,iconStyle:i.icon})," "]})})]})};var f=i(89649),w=i(56071);const x=s.memo((e=>{let{Post:t,CardStyle:i,clickToShowPopUp:s,index:l,ThemeInfo:a,ThemeStyle:d,postSizeInPx:m,postSize:v}=e;const{networkId:_,share:b}=t,{style:x,content:y}=i,j=1!==t.type,k=i.content.status?(0,o.Ex)(t.content.text,200):t.content.text,S=m>200,I="tb_sp_"+(n.MH?"color_overlay":"post_overlay-"+(0===i.style.mode&&n.HY?"light":"dark")),C={backgroundColor:n.MH?x.background:""};return(0,r.jsx)(w.A,{children:e=>{let{ref:o,inView:m}=e;return(0,r.jsx)("div",{id:`tb_sp_id-${t.id}`,className:"tb_sp_post_wrapper"+(S?" tb_sp_post_wrapper2x":""),style:{width:`${v}%`,padding:x.padding/2,opacity:m?1:0,transition:m?"opacity .5s ease-in-out":""},"tb-network":t.network.id,"tb-product":""!=i.shopText&&t.isShopIcon?1:t.isHotspot?2:0,role:"article","aria-label":`Post ${parseInt(l)+1},${k}`,"post-id":t.referenceId?t.referenceId:t.id,tabIndex:"0",ref:o,"feed-id":t.feedId,children:(0,r.jsx)("div",{className:"tb_sp_post_in"+(n.HY?" tb_sp_post_ani":""),onClick:s(l,t),role:"button","aria-label":"Popup",tabIndex:0,children:(0,r.jsxs)("div",{className:"tb_sp_post_media_wrapp",role:"button",tabIndex:0,"aria-label":"Pop Up Button",children:[b.status&&(0,r.jsx)(h.default,{Post:t,ThemeInfo:a,shareClass:"tb_sp_share_container"}),j&&(0,r.jsx)(c,{Post:t,CardStyle:i,ThemeStyle:d,ThemeInfo:a,index:l,inView:m}),!t.isHotspot&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"tb_sp_post_details",children:[n.HY&&(0,r.jsx)("div",{className:"tb_sp_social_",children:(0,r.jsx)(u.default,{networkClass:"tb_sp_social__ico",networkId:_,iconStyle:i.icon})}),""!=i.shopText&&t.isShopIcon&&(0,r.jsx)(p.default,{CardStyle:i,mode:1,btnClass:"tb_sp_btn_wrap"}),!n.HY&&(0,r.jsxs)(r.Fragment,{children:[65!==a.id&&(0,r.jsx)("div",{className:"tb_sp_contant_wrapper",children:(!i.content.status||1===t.type)&&(0,r.jsx)(f.default,{contentClass:"tb_sp_content",Post:t,content:k,CardStyle:i,contentTitle:y.title})}),(0,r.jsx)(g,{Post:t,CardStyle:i,ThemeStyle:d})]})]}),(0,r.jsx)("div",{className:`tb_sp_post_overlay ${I}`,style:C,children:(0,r.jsx)("div",{})})]})]})})})}})}));class y extends s.PureComponent{constructor(){super(...arguments),this.state={loadDelaydata:!1},this.handleScroll=()=>{this.state.loadDelaydata||this.setState({loadDelaydata:!0},(()=>this.props.loadMoredata()))}}componentDidMount(){window.addEventListener("scroll",this.handleScroll),this.props.loadBranding()}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}render(){const{postData:e,completeDataObject:t,CardStyle:i,ThemeStyle:s,ProductSetting:n,ThemeInfo:l,clickToShowPopUp:a,onClickPopUpSlider:d,containerSize:c}=this.props,h=Math.max((c.width/310).toFixed(),1),u=(0,o.GH)(c.width,s.column,h),p=(0,o.Cv)(c.width,u);let m=e.length;if(null!==s&&void 0!==s&&s.bestFit&&e.length>=parseInt(u)){const t=Math.floor(e.length/parseInt(u));m=parseInt(u)*t}return(0,r.jsx)("div",{tabIndex:"0","aria-label":`There are ${e.length>0?e.length:0} posts in the feed`,role:"feed",className:"tb_sp_post_container",children:e.map(((e,o)=>{if(o>=m)return null;const h=t[e];return(0,r.jsx)(x,{Post:h,ThemeInfo:l,index:o,CardStyle:i,ThemeStyle:s,ProductSetting:n,clickToShowPopUp:a,onClickPopUpSlider:d,postSize:p,postSizeInPx:c.width/u},o)}))})}}const j=y},91697:(e,t,i)=>{i.d(t,{EC:()=>s,Oi:()=>n,Yo:()=>o});const s=e=>({0:"manual-upload",1:"twitter",2:"instagram",3:"facebook",4:"google",5:"pinterest",6:"flickr",7:"youtube",8:"vimeo",10:"linkedin",11:"tumblr",12:"rss",13:"star",15:"workplace",18:"instagram",19:"yelp",20:"slack",21:"yammer",23:"airbnb",25:"soundcloud",26:"giphy",27:"deviantart",28:"tiktok",29:"onsite-upload",30:"vkontakte",32:"chrome",33:"collabration",34:"amazon",35:"tripadvisor",36:"star",37:"aliexpress"}[e]||""),o=e=>({0:"#313A53",1:"#29a9e1",2:"#000000",3:"#1b74e4",4:"#4081ed",5:"#e60022",6:"#0a63dc",7:"#FF0000",8:"#1eb8eb",10:"#0a66c2",11:"#36465d",12:"#f78422",13:"#FABF04",15:"#4767ab",18:"#000000",19:"#be362e",20:"#510d4e",21:"#0078d4",23:"#ff7977",25:"#ff7700",26:"#000000",27:"#00e59b",28:"#000000",29:"#613983",30:"#0077FF",32:"#4c8bf5",33:"#4e69ed",34:"#4e69ed",35:"#60c196",36:"#00e9ff",37:"#E52F20"}[e]||""),n=e=>({0:"Manual Upload",1:"Twitter",2:"Instagram",3:"Facebook",4:"Google",5:"Pinterest",6:"Flickr",7:"YouTube",8:"Vimeo",10:"LinkedIn",11:"Tumblr",12:"RSS",13:"Star",15:"Workplace",18:"Instagram",19:"Yelp",20:"Slack",21:"Yammer",23:"Airbnb",25:"Soundcloud",26:"Giphy",27:"Deviantart",28:"Tiktok",29:"Review Hub",30:"Vkontakte",32:"Chrome Extension",33:"Collab with Creators",34:"Amazon",35:"Tripadvisor",36:"Review Hub",37:"Aliexpress"}[e]||"")}}]);