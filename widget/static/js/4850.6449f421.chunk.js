"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4850,368,5790,6946,9239],{46588:(t,e,i)=>{i.d(e,{ht:()=>c});var n=i(98501),o=i(70656),a=i(35179),l=i(71287),s=i(32626);let r=[];const c=t=>{t.persist();const e=t.target,{network:i,itemId:n,themeId:o}=e.dataset;if(1!=i||[3,4,16,47,50,55,60].includes(o))r.includes(t)||r.push(t);else{const t=document.querySelector(".tb_media-".concat(n));t&&(t.style.display="none")}1===r.length&&d()},d=async()=>{var t;const{postData:e,wall:i}=o.Z.getState().appData;if(!i||!Object.keys(i).length||!r.length)return;const{User:c,Wall:h}=i,p=null===c||void 0===c?void 0:c.id,m=(a.ig,null===h||void 0===h?void 0:h.id),v=null===(t=r[0])||void 0===t?void 0:t.target,{filterId:_,network:b,itemId:g,load:f}=v.dataset,y=document.querySelector('img[data-item-id="'.concat(g,'"]')),w=null!==e&&void 0!==e&&e.completeDataObject?Object.values(e.completeDataObject).filter((t=>t.id===g)):[];if(null!==w&&void 0!==w&&w.length){var x;const t=await(async t=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((e=>t.includes(e)))||await fetch(t).then((t=>t.ok)).catch((()=>!1)))(null===(x=w[0])||void 0===x?void 0:x.postFileNew);if(!t&&y){if([2,18,3,28].includes(+b)&&"0"===f&&"34"!==_&&!v.src.includes("cloud.taggbox.com")){const t=((t,e,i)=>{var n,o,a,l,s;const{UserPlan:r,Wall:c}=e;return{table_name:null===r||void 0===r?void 0:r.db_table,...t,...null!==i&&void 0!==i&&i.length?{feedId:null===(n=i[0])||void 0===n?void 0:n.feedId,type:null===(o=i[0])||void 0===o?void 0:o.type,link:null===(a=i[0])||void 0===a?void 0:a.link,postFile:null===(l=i[0])||void 0===l?void 0:l.postFile,mediaFile:null===(s=i[0])||void 0===s?void 0:s.mediaFile}:{},url:null===c||void 0===c?void 0:c.url}})({wallId:m,postId:g,ownerId:p},i,w);try{const{data:e}=await(new s.Z).post(a.g$,t,{headers:l.JW}),i=a.ig||a.Jx?"":"https://images.".concat(a.yM,"/");v.src="18"===b?"".concat(i).concat(e.media):e.media}catch{v.src=n.Ty}finally{u(v)}}else v.src=n.Ty,u(v);r.shift(),d()}else{const t="".concat(n.do,"/media/images/no-image.svg");v.src=t,v.srcset=t,u(v),r.shift()}}},u=t=>t.setAttribute("data-load","1")},89239:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});var n=i(47313),o=i(63214),a=i(46417);class l extends n.PureComponent{render(){const{author:t,authorClass:e,networkId:i,size:n,inView:l}=this.props;return(0,a.jsx)("div",{className:e,style:{overflow:4==i?"visible":""},children:l?(0,a.jsx)("img",{className:"".concat(e,"__"),src:t.picture,"aria-label":"author",alt:t.name,width:n||44,height:n||44,onError:e=>{const n=(0,o.B4)(i),a="#ffffff"==n?"000":n.replace("#","");e.target.src=t.errorPic?t.errorPic:"https://ui-avatars.com/api/?name=".concat(t.name.replace(/\s/g,""),"&background=").concat(a,"&color=fff&length=1")}}):null},Math.random())}}},66533:(t,e,i)=>{i.d(e,{Z:()=>a});var n=i(46417);const o=(t,e,i)=>(0,n.jsx)("div",{className:"tb_avg_rating_ico__ tb__icon tb-star-outline",style:{color:t,fontSize:i,minWidth:i+"px"},children:(0,n.jsxs)("div",{className:"tb_avg_rating_ico_fill__ tb__icon tb-star-fill",style:{color:t,width:10*e+"%",fontSize:i,minWidth:i+"px"},children:[(0,n.jsx)("div",{})," "]})}),a=t=>{let{rating:e,size:i,color:a}=t;const l=e>5?5:e,s=Math.trunc(5-l),r=Math.trunc(l),c=String(l).split(".")[1];return(0,n.jsxs)("div",{className:"tb_avg_rating__","aria-label":"Ratings",role:"status",children:[r?[...Array(r)].map(((t,e)=>(0,n.jsx)("div",{"data-index":e,className:"tb_avg_rating_ico__ tb__icon tb-star-fill",style:{color:a||"#F8B90C",fontSize:i,minWidth:i+"px"},children:(0,n.jsx)("div",{})},e))):null,c>0?o(a||"#F8B90C",c,i):null,s?[...Array(s)].map(((t,e)=>(0,n.jsx)("div",{className:"tb_avg_rating_ico__ tb__icon tb-star-outline",style:{fontSize:i,minWidth:i+"px"},children:(0,n.jsx)("div",{})},e))):null]})}},97915:(t,e,i)=>{i.d(e,{Z:()=>p});var n=i(47313),o=i(65537),a=i(6119),l=i(46335),s=i(61893),r=i(75729),c=i(46417);const d=(0,n.memo)((t=>{let{item:e}=t;const i=e.discount>0&&e.discount!==e.price,n=e.discount>0?e.discount:e.price;return(0,c.jsxs)("a",{hotspot:1,href:e.url,target:"_blank",rel:"noopener noreferrer",className:"tb_tooltip_wrap",children:[(0,c.jsx)("div",{hotspot:1,className:"tb_p_tooltip_title",children:e.title}),i&&(0,c.jsxs)("div",{hotspot:1,className:"tb_p_tooltip_price tb_price_disabled",children:[e.currency,e.price]}),(e.price>0||e.discount>0)&&(0,c.jsxs)("div",{hotspot:1,className:"tb_p_tooltip_price",children:[e.currency,n]})]})})),u=t=>{let{products:e,appData:i,Post:o,showTooltip:u,isPopup:h,dataItem:p}=t;const[m,v]=(0,n.useState)(null),_=(0,n.useMemo)((()=>{var t,e;return(null===i||void 0===i||null===(t=i.wall)||void 0===t||null===(e=t.ProductSetting)||void 0===e?void 0:e.Hotspot)||{}}),[i]);(0,n.useEffect)((()=>{if(u){const t=e.findIndex((t=>t.id===u));-1!==t&&v(t)}else v(null)}),[u,e]);const b=(0,n.useCallback)((t=>{var e,n,o,a;null!==i&&void 0!==i&&i.wall&&(0,s.S5)({type:1,action:2,wall:null===i||void 0===i||null===(e=i.wall)||void 0===e||null===(n=e.ThemeInfo)||void 0===n?void 0:n.webId,product_id:t.id,post:p.referenceId,owner:null===i||void 0===i||null===(o=i.wall)||void 0===o||null===(a=o.ThemeInfo)||void 0===a?void 0:a.ownerId,feed:p.feedId,currency:t.currency,price:Number(t.price)>0?t.discount:t.price})}),[i,o]),g=(0,n.useCallback)(((t,e)=>{t.stopPropagation(),b(e),window.open(e.url,"_blank")}),[b]);return null!==_&&void 0!==_&&_.status?e.map(((t,e)=>{const i="hotspot-".concat(t.id,"-").concat((0,l.i1)(),"-"),n=m===e;return(0,c.jsxs)("div",{id:i,className:"tb_hotspot_dot".concat(n?" tb_hotspot_active_":""),role:"button",style:{top:t.hotspot.top,left:t.hotspot.left},onMouseEnter:()=>v(e),onMouseLeave:()=>v(null),onClick:e=>{g(e,t)},"data-tooltip-offset":7,children:[(0,c.jsx)("div",{hotspot:1,className:"tb_hotspot__ ".concat(0===_.type?"tb_hotspot_ani__":""),children:e+1}),(0,c.jsx)(r.Z,{wallId:i,children:(0,c.jsx)(a.u,{appendTo:"body","data-tooltip-id":"tooltip-".concat(t.id,"-").concat(Math.random().toString(36).substr(2,9)),className:"tb_pro_tooltip",anchorSelect:"#".concat(i),clickable:!0,...h?{isOpen:n}:{},children:(0,c.jsx)(d,{item:t})},e)})]},"".concat(t.id,"-").concat(e))})):null},h=(0,n.memo)(u),p=(0,o.$j)((t=>({appData:t.appData})))(h)},37174:(t,e,i)=>{i.d(e,{Z:()=>p});var n=i(47313),o=Object.defineProperty,a=(t,e,i)=>((t,e,i)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i)(t,"symbol"!==typeof e?e+"":e,i),l=new Map,s=new WeakMap,r=0,c=void 0;function d(t){return Object.keys(t).sort().filter((e=>void 0!==t[e])).map((e=>{return"".concat(e,"_").concat("root"===e?(i=t.root)?(s.has(i)||(r+=1,s.set(i,r.toString())),s.get(i)):"0":t[e]);var i})).toString()}function u(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:c;if("undefined"===typeof window.IntersectionObserver&&void 0!==n){const o=t.getBoundingClientRect();return e(n,{isIntersecting:n,target:t,intersectionRatio:"number"===typeof i.threshold?i.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),()=>{}}const{id:o,observer:a,elements:s}=function(t){const e=d(t);let i=l.get(e);if(!i){const n=new Map;let o;const a=new IntersectionObserver((e=>{e.forEach((e=>{var i;const a=e.isIntersecting&&o.some((t=>e.intersectionRatio>=t));t.trackVisibility&&"undefined"===typeof e.isVisible&&(e.isVisible=a),null==(i=n.get(e.target))||i.forEach((t=>{t(a,e)}))}))}),t);o=a.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),i={id:e,observer:a,elements:n},l.set(e,i)}return i}(i),r=s.get(t)||[];return s.has(t)||s.set(t,r),r.push(e),a.observe(t),function(){r.splice(r.indexOf(e),1),0===r.length&&(s.delete(t),a.unobserve(t)),0===s.size&&(a.disconnect(),l.delete(o))}}n.Component;var h=i(17739);const p=t=>{let{children:e}=t;const{ref:i,inView:o,entry:a}=function(){let{threshold:t,delay:e,trackVisibility:i,rootMargin:o,root:a,triggerOnce:l,skip:s,initialInView:r,fallbackInView:c,onChange:d}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var h;const[p,m]=n.useState(null),v=n.useRef(d),[_,b]=n.useState({inView:!!r,entry:void 0});v.current=d,n.useEffect((()=>{if(s||!p)return;let n;return n=u(p,((t,e)=>{b({inView:t,entry:e}),v.current&&v.current(t,e),e.isIntersecting&&l&&n&&(n(),n=void 0)}),{root:a,rootMargin:o,threshold:t,trackVisibility:i,delay:e},c),()=>{n&&n()}}),[Array.isArray(t)?t.toString():t,p,a,o,l,s,i,c,e]);const g=null==(h=_.entry)?void 0:h.target,f=n.useRef(void 0);p||!g||l||s||f.current===g||(f.current=g,b({inView:!!r,entry:void 0}));const y=[m,_.inView,_.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}({triggerOnce:!0,threshold:.01});return o&&(0,h.YN)(a),e({ref:i,inView:o})}},84261:(t,e,i)=>{i.d(e,{Z:()=>c});var n=i(47313),o=i(46335),a=i(98501),l=i(46588),s=i(97915),r=i(46417);class c extends n.PureComponent{constructor(t){var e,i;super(t),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:t,offsetWidth:e}=this.mediaRef.current;this.setState({currentHeight:t,currentWidth:e})}},this.mediaSizeCalc=async()=>{const{Post:t,mediaOnly:e}=this.props,i=e||t.media;if((null===i||void 0===i||!i.height)&&(null===i||void 0===i||!i.width))try{var n;const{width:t,height:e}=await(0,o.GF)(null===i||void 0===i||null===(n=i.image)||void 0===n?void 0:n.small);this._isMounted&&this.setState({height:e,width:t})}catch(a){this._isMounted&&this.setState({height:300,width:300})}};const{mediaOnly:a,Post:l}=t;this.state={height:(null===a||void 0===a?void 0:a.height)||(null===l||void 0===l||null===(e=l.media)||void 0===e?void 0:e.height)||0,width:(null===a||void 0===a?void 0:a.width)||(null===l||void 0===l||null===(i=l.media)||void 0===i?void 0:i.width)||0,currentHeight:0,currentWidth:0},this.mediaRef=n.createRef()}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var t,e,i,n;const{height:o,width:c}=this.state,{ImageClass:d,Post:u,hotspot:h,size:p,blurBG:m,ProductSetting:v,mediaOnly:_,inView:b,multiKey:g,index:f}=this.props,{id:y,link:w,products:x}=u,j=_||(null===u||void 0===u?void 0:u.media),{currentWidth:k,currentHeight:S}=this.state,I=p||100*o/c,N={paddingBottom:1===I?null:"".concat(I,"%")},C={backgroundImage:b?"url(".concat(null===j||void 0===j||null===(t=j.image)||void 0===t?void 0:t.small,")"):null},P=c>o?"100%":"".concat(c/o*100,"%"),T=c>o?"".concat(o/c*100,"%"):"100%",V=u.isProduct&&h&&u.hotspot,R={width:V&&p?P:null,height:V&&p?T:null};return(0,r.jsxs)("div",{className:"".concat(d,"_wrap_"),style:N,ref:this.mediaRef,children:[V&&m?(0,r.jsx)("div",{className:"tb_blur_bg_",style:C}):null,(0,r.jsxs)("div",{className:"".concat(d,"_wrap_in"),style:R,children:[V?(0,r.jsx)(s.Z,{products:this.props.multiPic?u.mediaList[g].product:x,ProductSetting:v,hotspot:u.hotspot,dataPost:u,showTooltip:null},f):null,b?(0,r.jsx)("img",{className:"".concat(d," tb_media-").concat(y),src:null===j||void 0===j||null===(e=j.image)||void 0===e?void 0:e.small,srcSet:"".concat(null===j||void 0===j||null===(i=j.image)||void 0===i?void 0:i.small," 1x, ").concat(null===j||void 0===j||null===(n=j.image)||void 0===n?void 0:n.large," 2x"),sizes:"".concat(k,"px"),loading:b?"eager":"lazy",decoding:"async",fetchPriority:b?"high":"low","data-id":y,height:S,width:k,"data-height":o,"data-width":c,"data-link":w,onLoad:this.onLoad,onError:t=>{t.target.src="".concat(a.do,"/media/error/no-image.svg"),t.target.srcset="".concat(a.do,"/media/error/no-image.svg"),(0,l.ht)(t)},alt:null===j||void 0===j?void 0:j.title,title:null===j||void 0===j?void 0:j.title},"".concat(y,"-").concat(o,"-").concat(c,"-").concat(b)):null]})]})}}},16946:(t,e,i)=>{i.r(e),i.d(e,{default:()=>r});var n=i(47313),o=i(35179),a=i(63346),l=i(46335),s=i(46417);class r extends n.PureComponent{constructor(t){super(t),this.contentRef=n.createRef()}componentDidMount(){setTimeout((()=>{var t,e;if(null!==(t=this.contentRef)&&void 0!==t&&null!==(e=t.current)&&void 0!==e&&e.clientHeight){var i,n;const t=(null===(i=this.contentRef)||void 0===i||null===(n=i.current)||void 0===n?void 0:n.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}}),100)}render(){const{CardStyle:t,contentClass:e,content:i,contentTitle:n,maxLines:r,isReadMore:c}=this.props,d=t.content.trimcontent&&!o.ig?t.content.trimcontent:0,u={WebkitLineClamp:r,textAlign:t.style.textAlign},h=(0,l.Fx)(i),p="".concat(d?" tb_content_line-".concat(d):""),m="".concat(e," ").concat(c?"":p," tb-cTBfont-").concat(t.style.variant);return(0,s.jsxs)("div",{className:m,ref:this.contentRef,style:u,children:[n?(0,s.jsx)("div",{className:"tb_bold_txt__",children:(0,a.ZP)(n)}):null,(0,a.ZP)(h)]})}}},55790:(t,e,i)=>{i.r(e),i.d(e,{default:()=>s});var n=i(47313),o=i(46335),a=i(46417);const l=t=>{const{createdAt:e,timeClass:i}=t;return(0,a.jsx)("div",{className:i,role:"status","aria-label":"post timestamp ".concat((0,o.Sy)(e)),children:(0,o.Sy)(e)})},s=(0,n.memo)(l)},14850:(t,e,i)=>{i.r(e),i.d(e,{default:()=>g});var n=i(47313),o=i(89239),a=i(55790),l=i(66533),s=i(17739),r=i(46417);const c=t=>{let{Post:e,CardStyle:i,inView:n}=t;const{author:c,networkId:d}=e,u=(0,s.sZ)(c.name),h=!(!i.author.status||u),p=e.rating>0;return(0,r.jsxs)("div",{className:"tb_l_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:[(0,r.jsxs)("div",{className:"tb_l_author",children:[h?(0,r.jsx)(o.default,{author:c,network:e.network,networkId:d,authorClass:"tb_l_author_profile",inView:n}):"",(0,r.jsxs)("div",{className:"tb_l_author_info",children:[h?(0,r.jsx)("div",{className:"tb_l_authorname",children:c.name}):"",i.timeStatus?(0,r.jsx)(a.default,{createdAt:e.createdAt,timeClass:"tb_l_time tb-cTBfont-".concat(i.author.variant)}):""]})]}),p?(0,r.jsxs)("div",{className:"tb_l_rating__",children:[(0,r.jsx)(l.Z,{size:16,rating:e.rating})," "]}):""]})};var d=i(16946),u=i(35179),h=i(98501),p=i(84261);const m=()=>(0,r.jsx)("div",{className:"tb_l_media_icon tb__media_ico_c",children:(0,r.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:(0,r.jsx)("div",{})})}),v=t=>{let{Post:e,inView:i}=t;return e.mediaList.length>0?e.mediaList.map(((t,n)=>(0,r.jsxs)("div",{className:"tb_l_media_wrap",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[[3,5].includes(t.type)?(0,r.jsx)(m,{}):null,(0,r.jsx)(p.Z,{ImageClass:"tb_l_image",Post:e,size:1,mediaOnly:t,hotspot:!1,blurBG:!1,observer:!0,inView:i},n)]}))):(0,r.jsxs)("div",{className:"tb_l_media_wrap",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[[3,5].includes(e.type)?(0,r.jsx)(m,{}):null,(0,r.jsx)(p.Z,{ImageClass:"tb_l_image",Post:e,size:1,hotspot:!1,blurBG:!1,observer:!0,inView:i})]})};var _=i(37174);const b=t=>{let{Post:e,clickToShowPopUp:i,itemIndex:n,CardStyle:o,ThemeStyle:a}=t;const l=1!==e.type,p=o.content.trimcontent?(0,s.Sv)(e.content.text,200):e.content.text,m=e.products;return(0,r.jsx)(_.Z,{children:t=>{var s,_,b,g,f,y,w;let{ref:x,inView:j}=t;return(0,r.jsx)("div",{id:"tb_l_id-".concat(e.id),className:"tb_l_post_wrapper","tb-network":e.networkId,role:"article","aria-label":"Post ".concat(parseInt(n)+1,",").concat(p),style:{padding:o.style.padding/2,opacity:j?1:0,transition:j?"opacity .5s ease-in-out":""},tabIndex:"0",ref:x,"post-id":e.referenceId?e.referenceId:e.id,"feed-id":e.feedId,children:(0,r.jsxs)("div",{className:"tb_l_post_in",onClick:i(n,e),role:"button","aria-label":"Popup",tabIndex:"0",children:[(0,r.jsx)(c,{Post:e,CardStyle:o,ThemeStyle:a,mediaType:l,size:40,rating:e.rating,inView:j}),u.ig&&o.content.status?(0,r.jsx)("div",{className:"tb_l_contant_wrapper",children:(0,r.jsx)(d.default,{contentClass:"tb_l_content",Post:e,content:p,CardStyle:o,contentTitle:e.content.title})}):"",l?(0,r.jsx)("div",{className:"tb_l_media_cont",children:(0,r.jsx)(v,{Post:e,CardStyle:o,ThemeStyle:a,inView:j})}):"",e.isProduct?(0,r.jsx)("div",{className:"tb_l_p_list",children:(0,r.jsxs)("div",{className:"tb_l_p_wrp",children:[(0,r.jsx)("div",{className:"tb_l_p_",children:(0,r.jsx)("img",{className:"tb_l_p_img",decoding:"async",src:null===(s=m[0])||void 0===s?void 0:s.image,width:"60",height:"60",alt:null===(_=m[0])||void 0===_?void 0:_.title,loading:"lazy",draggable:"false",onError:t=>t.target.src=h.XW})}),(0,r.jsxs)("div",{className:"tb_l_p_info",children:[(0,r.jsx)("div",{className:"tb_l_p_t",children:null===(b=m[0])||void 0===b?void 0:b.title}),(0,r.jsxs)("div",{className:"tb_l_p_p",children:[null===(g=m[0])||void 0===g?void 0:g.currency,(null===(f=m[0])||void 0===f?void 0:f.discount)>0?null===(y=m[0])||void 0===y?void 0:y.discount:null===(w=m[0])||void 0===w?void 0:w.price]})]})]})}):null]})})}})},g=t=>{let{postData:e,completeDataObject:i,CardStyle:o,ThemeStyle:a,clickToShowPopUp:l,loadBranding:s}=t;return(0,n.useEffect)((()=>{s()}),[]),(0,r.jsx)("div",{className:"tb_l_post_container",children:e&&e.length>0&&e.map(((t,e)=>{const n=i[t];return(0,r.jsx)(b,{Post:n,CardStyle:o,ThemeStyle:a,itemIndex:e,clickToShowPopUp:l},"wdt_crd_".concat(e,"_").concat(t.id))}))})}},63214:(t,e,i)=>{i.d(e,{B4:()=>o,BK:()=>a,O5:()=>n});const n=t=>({0:"manual-upload",1:"twitter",2:"instagram",3:"facebook",4:"google",5:"pinterest",6:"flickr",7:"youtube",8:"vimeo",10:"linkedin",11:"tumblr",12:"rss",13:"star",15:"workplace",18:"instagram",19:"yelp",20:"slack",21:"yammer",23:"airbnb",25:"soundcloud",26:"giphy",27:"deviantart",28:"tiktok",29:"onsite-upload",30:"vkontakte",32:"chrome",33:"collabration",34:"amazon",35:"tripadvisor",36:"star",37:"aliexpress"}[t]||""),o=t=>({0:"#313A53",1:"#29a9e1",2:"#000000",3:"#1b74e4",4:"#4081ed",5:"#e60022",6:"#0a63dc",7:"#FF0000",8:"#1eb8eb",10:"#0a66c2",11:"#36465d",12:"#f78422",13:"#FABF04",15:"#4767ab",18:"#000000",19:"#be362e",20:"#510d4e",21:"#0078d4",23:"#ff7977",25:"#ff7700",26:"#000000",27:"#00e59b",28:"#000000",29:"#613983",30:"#0077FF",32:"#4c8bf5",33:"#4e69ed",34:"#4e69ed",35:"#60c196",36:"#00e9ff",37:"#E52F20"}[t]||""),a=t=>({0:"Manual Upload",1:"Twitter",2:"Instagram",3:"Facebook",4:"Google",5:"Pinterest",6:"Flickr",7:"YouTube",8:"Vimeo",10:"LinkedIn",11:"Tumblr",12:"RSS",13:"Star",15:"Workplace",18:"Instagram",19:"Yelp",20:"Slack",21:"Yammer",23:"Airbnb",25:"Soundcloud",26:"Giphy",27:"Deviantart",28:"Tiktok",29:"Review Hub",30:"Vkontakte",32:"Chrome Extension",33:"Collab with Creators",34:"Amazon",35:"Tripadvisor",36:"Review Hub",37:"Aliexpress"}[t]||"")}}]);