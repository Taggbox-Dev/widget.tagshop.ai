"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[654],{46588:(t,e,i)=>{i.d(e,{ht:()=>r});var o=i(98501),a=i(70656),s=i(35179),n=i(71287),d=i(32626);let l=[];const r=t=>{t.persist();const e=t.target,{network:i,itemId:o,themeId:a}=e.dataset;if(1!=i||[3,4,16,47,50,55,60].includes(a))l.includes(t)||l.push(t);else{const t=document.querySelector(".tb_media-".concat(o));t&&(t.style.display="none")}1===l.length&&c()},c=async()=>{var t;const{postData:e,wall:i}=a.Z.getState().appData;if(!i||!Object.keys(i).length||!l.length)return;const{User:r,Wall:u}=i,h=null===r||void 0===r?void 0:r.id,m=(s.ig,null===u||void 0===u?void 0:u.id),v=null===(t=l[0])||void 0===t?void 0:t.target,{filterId:g,network:w,itemId:_,load:x}=v.dataset,P=document.querySelector('img[data-item-id="'.concat(_,'"]')),b=null!==e&&void 0!==e&&e.completeDataObject?Object.values(e.completeDataObject).filter((t=>t.id===_)):[];if(null!==b&&void 0!==b&&b.length){var y;const t=await(async t=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((e=>t.includes(e)))||await fetch(t).then((t=>t.ok)).catch((()=>!1)))(null===(y=b[0])||void 0===y?void 0:y.postFileNew);if(!t&&P){if([2,18,3,28].includes(+w)&&"0"===x&&"34"!==g&&!v.src.includes("cloud.taggbox.com")){const t=((t,e,i)=>{var o,a,s,n,d;const{UserPlan:l,Wall:r}=e;return{table_name:null===l||void 0===l?void 0:l.db_table,...t,...null!==i&&void 0!==i&&i.length?{feedId:null===(o=i[0])||void 0===o?void 0:o.feedId,type:null===(a=i[0])||void 0===a?void 0:a.type,link:null===(s=i[0])||void 0===s?void 0:s.link,postFile:null===(n=i[0])||void 0===n?void 0:n.postFile,mediaFile:null===(d=i[0])||void 0===d?void 0:d.mediaFile}:{},url:null===r||void 0===r?void 0:r.url}})({wallId:m,postId:_,ownerId:h},i,b);try{const{data:e}=await(new d.Z).post(s.g$,t,{headers:n.JW}),i=s.ig||s.Jx?"":"https://images.".concat(s.yM,"/");v.src="18"===w?"".concat(i).concat(e.media):e.media}catch{v.src=o.Ty}finally{p(v)}}else v.src=o.Ty,p(v);l.shift(),c()}else{const t="".concat(o.do,"/media/images/no-image.svg");v.src=t,v.srcset=t,p(v),l.shift()}}},p=t=>t.setAttribute("data-load","1")},84247:(t,e,i)=>{i.r(e),i.d(e,{default:()=>U});var o=i(47313),a=i(65537),s=i(35179),n=i(24385),d=i(3133),l=i(60088),r=i(61893),c=i(46417);const p=t=>{let{product:e,wall:i,onsetProductImg:a,openAddtocart:s,item:n,setOnProductDetails:d}=t;const{ThemeInfo:p,ProductSetting:u}=i,[h,m]=(0,o.useState)(!1),[v,g]=(0,o.useState)(!1),w=t=>(0,r.S5)({type:1,action:2,wall:p.webId,product_id:t.id,post:n.referenceId,owner:p.ownerId,feed:n.feedId,currency:t.currency,price:t.discount>0?t.discount:t.price}),_=u.Button,x=t=>{const{Button:e}=u;var i=t;2==parseInt(e.newTab)?window.parent.location.href=i:window.open(i,"_blank")};return(0,c.jsxs)("div",{className:"tb_rpp_pro ".concat(h?"ts_reelTheme_No_Product":""),children:[h?null:(0,c.jsx)("div",{className:"tb_rpp_pro_img",children:(0,c.jsx)("img",{src:e.image,alt:"",onError:()=>m(!0)})}),(0,c.jsxs)("div",{className:"tb_rpp_pro_cont",children:[(0,c.jsx)("div",{className:"tb_rpp_pro_title",children:e.title}),e.price>0||e.discount>0?(0,c.jsxs)("div",{className:"tb_rpp_p_wrap",children:[(0,c.jsxs)("div",{className:"tb_rpp_p",children:[e.currency,e.discount>0?e.discount:e.price]}),0==e.discount||e.price==e.discount?(0,c.jsx)(c.Fragment,{}):(0,c.jsxs)("div",{className:"tb_rpp_p tb_rpp_d_p",children:[e.currency,e.price]})]}):null,(0,c.jsxs)("div",{className:"tb_rpp_btn".concat(v?" tb_rpp_btn_spinner":""),disabled:v,onClick:()=>{(async()=>{g(!0);const t={};if(e&&e.url)try{var o;if(140717==p.ownerId||1==(null===u||void 0===u||null===(o=u.Button)||void 0===o?void 0:o.pdp_target))x(e.url),a(e.image),g(!1),w(i);else{const o="magento"==e.createdFrom||!1;""!=e.createdFrom?(0,l.PC)(e.url,o,{productId:e.sku,storeId:e.storeId}).then((i=>{var n;if(o&&0==i.status)t[e.id]={data:{available:!0},showCart:140717!==p.ownerId};else{var d;const a=o&&(null===i||void 0===i||null===(d=i.data)||void 0===d?void 0:d.data)||(null===i||void 0===i?void 0:i.data),s=o?{available:!0}:{};t[e.id]={data:null!==a&&void 0!==a&&a.id?{...a,...s}:null,showCart:(null===a||void 0===a?void 0:a.id)&&140717!==p.ownerId}}a(null!==i&&void 0!==i&&null!==(n=i.data)&&void 0!==n&&n.featured_image?i.data.featured_image:e.image),g(!1),s(t,e.id,e)})).catch((t=>{console.log("error",t),x(e.url),a(e.image),g(!1),w(i)})):(x(e.url),a(e.image),g(!1),w(i))}}catch(n){console.log("error",n),x(e.url),g(!1)}})()},children:[_.text," "]})]})]},e.id)},u=(0,o.memo)(p);var h=i(84261),m=i(20510),v=i.n(m),g=i(46335);class w extends o.PureComponent{constructor(t){super(t),this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.onUpdateTime=t=>{try{s.ig&&this.setState({played:this.state.played+t.playedSeconds})}catch(e){console.log(e)}},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,played:0}}componentWillUnmount(){const{played:t}=this.state;s.ig&&(0,g.qE)(t)}render(){var t,e,i;const{VideoClass:o,Post:a,controls:s,handleVideoEnded:n,muted:d,currentView:l,inView:r}=this.props,{videoLoaded:p}=this.state,{media:u,height:h,width:m,id:g,link:w,networkId:_}=a;return(0,c.jsxs)("div",{className:"".concat(o,"_wrap_"),style:{paddingBottom:"100vh"},children:[(0,c.jsx)(v(),{className:"".concat(o," tb_media-").concat(g),url:r?u.video.full:null===u||void 0===u||null===(t=u.image)||void 0===t?void 0:t.small,"data-height":h,"data-width":m,"data-type":"video","data-network":_,"data-link":w,"data-item-id":g,"data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":m,"data-height":h,poster:null===u||void 0===u||null===(e=u.image)||void 0===e?void 0:e.small}},file:{attributes:{preload:"auto",poster:null===u||void 0===u||null===(i=u.image)||void 0===i?void 0:i.small,playsInline:!0}}},autoPlay:l?1:0,loop:!0,muted:l&&d,volume:l&&d?0:1,playsinline:!0,playing:l,height:"100%",width:"100%",controls:s,onReady:()=>this.setVideoLoaded(!0),onProgress:this.onUpdateTime,onEnded:n||null},"".concat(g,"-").concat(l,"-").concat(w)),p?null:(0,c.jsx)("div",{className:"tb_rpp_v_spinner",children:(0,c.jsx)("div",{})})]})}}var _=i(11774);const x=JSON.parse(window.localStorage.getItem("mediaDimension"));class P extends o.PureComponent{constructor(t){super(t),this.mediaSize=t=>this.props.mediaSizeCallback(t),this.state={mediaSize:{height:null!=x?x[0]:"85vh",width:null!=x?x[1]:"85vh"}}}render(){const{Post:t,wallID:e,size:i,onUpdateProdImgIdx:o,inView:a}=this.props;return(0,c.jsx)("div",{className:"tb_rp_media_holder",children:(0,c.jsx)(_.tv,{options:{direction:"ltr",pagination:!0,arrows:!1,speed:400,rewind:!0,perPage:1,perMove:1,gap:0,updateOnMove:!0,wheel:!1,paginationDirection:"ltr",classes:{pagination:"splide__pagination tb_rp_bullet"}},onMoved:(t,e)=>o(e),children:t.mediaList.map(((o,n)=>(0,c.jsx)(_.jw,{children:[2,4].includes(o.type)?(0,c.jsx)(h.Z,{ImageClass:"tb_rp_image",Post:t,mediaOnly:o,size:i,multiPic:1,multiKey:n,hotspot:!!o.product.length&&s.ig,inView:!0}):[3,5].includes(o.type)?(0,c.jsx)(w,{VideoClass:"tb_rp_video",media:o.video.full,mediaPoster:o.image.original,Post:{...t,media:{video:o.video,image:o.image}},wallID:e,size:i,isCover:!0,controls:!1,autoPlay:!0,muted:false,index:n,inView:a}):null},n)))})},t.id)}}const b=t=>{var e;const{Post:i,muted:o,index:a,wallID:n,inView:d,currentView:l}=t;return i.mediaList&&i.mediaList.length>0?(0,c.jsx)(P,{Post:i,...t}):[2,4].includes(i.type)&&d?(0,c.jsx)(h.Z,{ImageClass:"tb_rp_image",Post:i,size:false,hotspot:!(null===i||void 0===i||null===(e=i.product)||void 0===e||!e.length)&&s.ig,blurBG:!1,observer:!1,index:a,inView:d}):[3,5].includes(i.type)&&d?(0,c.jsx)(w,{VideoClass:"tb_rp_video",Post:i,size:false,wallID:n,isCover:!0,controls:!1,currentView:l,muted:o,handleVideoEnded:()=>{},index:a,inView:d}):null},y=(0,o.memo)(b);var I=i(98501);function D(t){t.style.setProperty("visibility","visible","important"),t.style.setProperty("opacity","1","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("transform","none","important"),t.style.setProperty("clip-path","initial","important"),t.style.setProperty("border","none","important")}class S extends o.PureComponent{render(){return(0,c.jsx)("a",{href:I.ZS,target:"_blank",ref:t=>{t&&(t.style.setProperty("margin-right","15px","important"),t.style.setProperty("width","90px","important"),t.style.setProperty("height","auto","important"),D(t))},children:(0,c.jsx)("img",{ref:t=>{t&&(t.style.setProperty("width","100%","important"),t.style.setProperty("height","auto","important"),D(t))},src:"".concat(I.do,"/media/logo/").concat("tagshop-branding.svg")})})}}const f=t=>{var e,i,a,s;let{wall:n,item:d,onsetProductImg:l,openAddtocart:r,index:p,currentView:h,muteToggle:m,muted:v,inView:g}=t;const w=!![3,5].includes(d.type),{ThemeInfo:_,ProductSetting:x}=n,[P,b]=(0,o.useState)(0),I=t=>(0,c.jsx)("div",{className:"tb_rpp_slide_wrap",children:t.products&&t.products.map(((t,e)=>(0,c.jsx)(u,{product:t,openAddtocart:r,onsetProductImg:l,wall:n,item:d},e)))});return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(y,{Post:d,wallID:_.wallId,onUpdateProdImgIdx:t=>{b(t)},ownerId:_.ownerId,ThemeID:_.id,wall:n,muted:v,currentView:h,index:p,inView:g}),(0,c.jsxs)("div",{className:"tb_rp_content",children:[x&&d.isProduct?(0,c.jsx)(I,{products:null!==(e=d.mediaList)&&void 0!==e&&e.length?null!==(i=d.mediaList)&&void 0!==i&&null!==(a=i[P])&&void 0!==a&&null!==(s=a.product)&&void 0!==s&&s.length?d.mediaList[P].product:[]:d.products}):null,w?(0,c.jsx)("div",{className:"tb_rp_mute_btn",onClick:m,children:(0,c.jsx)("div",{className:"tb__icon tb-".concat(v?"mute":"unmute"),children:(0,c.jsx)("div",{})})}):null,_.branding?(0,c.jsx)(S,{wallId:_.wallId,themeID:_.id}):null]})]})},j=(0,o.memo)(f);var C=i(17739);class k extends o.Component{constructor(t){var e;super(t),this.setMuted=()=>this.setState({muted:!this.state.muted}),this.onMediaUpdate=()=>this.setState({isAuthorImagevalid:!1}),this.onAddToCart=(t,e,i,o)=>{const{wall:a}=this.props,{webId:n,wallId:d,ownerId:l}=a.ThemeInfo;setTimeout((()=>{this.setState({addCartSetTime:!0})}),100);const r={type:1,action:2,wall:s.ig?n:d,feed:o.feedId,post:o.referenceId?o.referenceId:o.id,owner:l,product_id:i.id,currency:i.price,price:i.discount>0?i.discount:i.price};this.setState({allProductDetails:t,addtoCartPopup:!0,selectedProductDetails:t[e],tagshopProductDeatil:{...i,trackingData:r}})},this.requestData=()=>{const{wall:t,appendData:e,hasMoreData:i,loaderData:o}=this.props,{webId:a,wallId:n}=t.ThemeInfo,d=t.ThemeStyle.totalPosts,l=Math.floor(Date.now()/1e3);i&&!o.isShowMoreLoading&&this.props.nextData(s.ig?a:n,l,d,e.networkID,e.after,e.heightEvent)},this.onItemChange=t=>this.setState({item:t}),this.startSplideSlide=t=>{this.setState({activeSlide:t.index})},this.currentSplideSlide=t=>{this.onPopUpTrack(t.index),this.setState({activeSlide:t.index}),this.props.hasMoreData&&t.index==this.props.completeData.length-2&&this.requestData()},this.onPopUpTrack=t=>{try{const{wall:e,completeData:i}=this.props,{ThemeInfo:o}=e;let a=i[t]?i[t]:null;if(a){const t={feed:a.feedId,post:a.referenceId?a.referenceId:a.id},e={action:2,wall:o.webId,feed:a.feedId,post:a.referenceId?a.referenceId:a.id,type:3,owner:o.ownerId};(0,r.S5)(s.nX?e:{action:2,wall:o.webId,...t,owner:o.ownerId})}}catch(e){console.log("Error in PopUp Tracking",e)}},this.onClickClosePopUp=t=>this.setState({addtoCartPopup:!1,continueShopping:!1,selectedProductDetails:null,addCartSetTime:!1}),this.onClickCheckOut=t=>this.setState({addtoCartPopup:!0,continueShopping:!1}),this.sliderRef=o.createRef(),this.state={currentIndex:null===(e=this.props)||void 0===e?void 0:e.currentIndex,item:this.props.item,windowWidth:window.innerWidth,isAuthorImagevalid:!0,isHotspot:!1,addtoCartPopup:!1,allProductDetails:null,selectedProductId:null,selectedProductDetails:null,continueShopping:!1,selectedVariant:null,showAddToCart:!1,productLoading:!0,productImg:"",tagshopProductDeatil:null,muted:!!(0,C.q5)(),activeSlide:0,addCartSetTime:!1,selectedProdDetails:null,tagProdDetail:null},this.splideRef=o.createRef()}componentDidMount(){const{currentIndex:t,item:e}=this.props,i=(0,g.uB)(e.author.picture);this.setState({currentIndex:t,item:e,isAuthorImagevalid:i})}UNSAFE_componentWillReceiveProps(t){const{currentIndex:e,item:i}=t,o=(0,g.uB)(i.author.picture);this.setState({currentIndex:e,item:i,isAuthorImagevalid:o})}render(){const{onClosePopUp:t,slideWithArrowKeys:e,wall:i,completeData:o}=this.props,{currentIndex:a,item:s,addtoCartPopup:l,selectedProductDetails:r,continueShopping:p,productImg:u,tagshopProductDeatil:h,addCartSetTime:m,muted:v,activeSlide:g}=this.state;return(0,c.jsxs)("div",{className:"modalId".concat(s.id," tb_rp_modal ").concat(m?"tb_rp_add_cart_m":""),onKeyDown:e,onKeyPress:e,onLoad:e,onClick:e=>e.currentTarget==e.target&&t(e),children:[(0,c.jsxs)("div",{className:"tb_rp_dialog",children:[l||p?null:(0,c.jsx)("div",{className:"tb_reel_close_btn",onClick:t,children:(0,c.jsx)("div",{className:"tb__icon tb-close-thin",children:(0,c.jsx)("div",{})})}),(0,c.jsx)("div",{className:"tb_time_line_wrap",children:(0,c.jsx)("div",{className:"tb_time_line",children:(0,c.jsx)("div",{})})}),(0,c.jsx)(_.tv,{ref:this.splideRef,options:{direction:"ttb",height:window.innerHeight,start:a,wheel:!1,releaseWheel:!0,sensitivity:1,drag:!0,pagination:!1,arrows:!1,isNavigation:!1,updateOnMove:!0},onMoved:this.currentSplideSlide,onMounted:this.startSplideSlide,children:o&&o.length>0?o.map(((e,o)=>(0,c.jsx)(_.jw,{children:(0,c.jsx)(j,{currentView:g===o,onClosePopUp:t,wall:i,item:e,openAddtocart:(t,i,o)=>this.onAddToCart(t,i,o,e),onsetProductImg:t=>this.setState({productImg:t}),muteToggle:this.setMuted,muted:v,inView:Math.abs(g-o)<=2},"".concat(e.id,"-").concat(o))},"".concat(e.id,"-").concat(o)))):null})]}),l&&r?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"tb_rp_cart_overlay",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_rp_cart_modal",children:(0,c.jsxs)("div",{className:"tb_rp_cart_body",children:[(0,c.jsx)("div",{className:"ts_reel_close_btn tb_reel_close_btn",onClick:l&&!p?this.onClickClosePopUp:p?t=>this.setState({addtoCartPopup:!0,continueShopping:!1}):null,children:(0,c.jsx)("div",{className:"tb__icon tb-close-thin",children:(0,c.jsx)("div",{})})}),(0,c.jsx)("div",{className:"tb_rp_cart_wrap",children:r&&Object.keys(r).length>0?"magento"==(null===h||void 0===h?void 0:h.createdFrom)?(0,c.jsx)(n.Z,{productImg:u,addtoCartPopup:l,productDetails:r,tagshopProductDeatil:h,closeCart:t=>this.setState({addtoCartPopup:!1,continueShopping:!1,selectedProductDetails:null}),onAddToCart:()=>this.setState({continueShopping:!0}),onSelectedVariant:t=>this.setState({selectedVariant:t}),wall:i,closePopUp:this.props.onClosePopUp}):(0,c.jsx)(d.Z,{productImg:u,addtoCartPopup:l,productDetails:r,tagshopProductDeatil:h,closeCart:t=>this.setState({addtoCartPopup:!1,continueShopping:!1,selectedProductDetails:null}),onAddToCart:()=>this.setState({continueShopping:!0}),onSelectedVariant:t=>this.setState({selectedVariant:t}),wall:i,closePopUp:this.props.onClosePopUp}):null})]})})]}):null]})}}const N=(0,a.$j)((t=>{const{appData:e}=t;return{loaderData:t.loaderData,appendData:e.postData.appendData,hasMoreData:!e.postData.hasMoreData[0]||0!=e.postData.hasMoreData[0].hasMoreData&&(!e.postData.hasMoreData[e.postData.appendData.networkID]||e.postData.hasMoreData[e.postData.appendData.networkID].hasMoreData)}}),(t=>({nextData:(e,i,o,a,s,n,d)=>t((0,r.Mk)(e,i,o,a,s,n,d))})))((0,o.memo)(k));var T=i(3671);class M extends o.PureComponent{constructor(){super(...arguments),this.state={isEnable:0,eventData:{},shareText:"SHARE",viewOnText:"View on",currentIndex:null,completeData:{},personalization:{},url:null,imgData:[]},this.closeCommercePopUP=t=>{this.setState({isEnable:0,currentIndex:null},(()=>this.props.closePopUP()));var e=document.getElementsByTagName("html");e&&e[0]&&(e[0].style.overflow="")},this.getCommercePopUPEvent=t=>{null!==t&&void 0!==t&&t.card&&this.setState({url:"",isEnable:1,eventData:t,currentIndex:t.index,completeData:t.idArray,viewOnText:t.viewOnText,shareText:t.shareText,windowParent:t,imgData:t.imgData,personalization:t.personalization},(()=>this.CommercePopUPSlideWithArrowKey()))},this.featuredPopSliderChangeIndex=t=>this.updateCurrentInde(t),this.SliderWithKey=t=>this.updateCurrentInde(t),this.updateCurrentInde=t=>{const{eventData:e}=this.state;-1===t?this.setState({currentIndex:e.idArray.length-1}):this.setState({currentIndex:e.idArray.length===t?0:t})},this.CommercePopUPSlideWithArrowKey=t=>{const{personalization:e}=this.state;if(e&&1===e.popupSlideShow){let e=this;(t=t||window.event)&&t.keyCode&&void 0!==t.keyCode&&(37===t.keyCode?e.SliderWithKey(e.state.currentIndex-1):39===t.keyCode?e.SliderWithKey(e.state.currentIndex+1):27===t.keyCode&&this.closeCommercePopUP())}}}componentDidMount(){const{data:t}=this.props;this.getCommercePopUPEvent(t);var e=document.getElementsByTagName("html");e&&e[0]&&(e[0].style.overflow="hidden")}componentDidUpdate(t){this.props.data!==t.data&&this.getCommercePopUPEvent(this.props.data)}UNSAFE_componentWillReceiveProps(t){const{postData:e}=t;let{completeData:i,eventData:o}=this.state;if(i.length!=e.postData.length){let t=e.postData.map((t=>e.completeDataObject[t])).filter((t=>!String(t.id).includes("free_add_")));o.idArray=t,this.setState({completeData:t,eventData:o},(()=>{const{currentIndex:t}=this.state;this.setState({currentIndex:t+1})}))}}render(){const{viewOnText:t,isEnable:e,currentIndex:i,personalization:o,completeData:a,eventData:s,url:n,imgData:d}=this.state,{postData:l,wall:r,webFilters:p}=this.props;let u=null;return u=-1===i?a[s.idArray.length-1]:a[i],1===e&&r&&Object(a||{}).length>0?(0,c.jsx)(N,{webFilters:p,wall:r,item:u,completeData:a,onClosePopUp:this.closeCommercePopUP,currentIndex:i,personalization:o,viewOnText:t,slideWithArrowKeys:this.CommercePopUPSlideWithArrowKey,featuredPopSliderChangeIndex:this.featuredPopSliderChangeIndex,hostUrl:n,imgData:d}):null}}const U=(0,a.$j)((t=>({wall:t.appData.wall,webFilters:t.appData.webFilters})),(t=>({closePopUP:e=>t((0,T.zj)(e))})))(M)},97915:(t,e,i)=>{i.d(e,{Z:()=>h});var o=i(47313),a=i(65537),s=i(6119),n=i(46335),d=i(61893),l=i(75729),r=i(46417);const c=(0,o.memo)((t=>{let{item:e}=t;const i=e.discount>0&&e.discount!==e.price,o=e.discount>0?e.discount:e.price;return(0,r.jsxs)("a",{hotspot:1,href:e.url,target:"_blank",rel:"noopener noreferrer",className:"tb_tooltip_wrap",children:[(0,r.jsx)("div",{hotspot:1,className:"tb_p_tooltip_title",children:e.title}),i&&(0,r.jsxs)("div",{hotspot:1,className:"tb_p_tooltip_price tb_price_disabled",children:[e.currency,e.price]}),(e.price>0||e.discount>0)&&(0,r.jsxs)("div",{hotspot:1,className:"tb_p_tooltip_price",children:[e.currency,o]})]})})),p=t=>{let{products:e,appData:i,Post:a,showTooltip:p,isPopup:u}=t;const[h,m]=(0,o.useState)(null),v=(0,o.useMemo)((()=>{var t,e;return(null===i||void 0===i||null===(t=i.wall)||void 0===t||null===(e=t.ProductSetting)||void 0===e?void 0:e.Hotspot)||{}}),[i]);(0,o.useEffect)((()=>{if(p){const t=e.findIndex((t=>t.id===p));-1!==t&&m(t)}else m(null)}),[p,e]);const g=(0,o.useCallback)((t=>{null!==i&&void 0!==i&&i.wall&&(0,d.S5)({})}),[i,a]),w=(0,o.useCallback)(((t,e)=>{t.stopPropagation(),g(e),window.open(e.url,"_blank")}),[g]);return null!==v&&void 0!==v&&v.status?e.map(((t,e)=>{const i="hotspot-".concat(t.id,"-").concat((0,n.i1)(),"-"),o=h===e;return(0,r.jsxs)("div",{id:i,className:"tb_hotspot_dot".concat(o?" tb_hotspot_active_":""),role:"button",style:{top:t.hotspot.top,left:t.hotspot.left},onMouseEnter:()=>m(e),onMouseLeave:()=>m(null),onClick:e=>{w(e,t)},"data-tooltip-offset":7,children:[(0,r.jsx)("div",{hotspot:1,className:"tb_hotspot__ ".concat(0===v.type?"tb_hotspot_ani__":""),children:e+1}),(0,r.jsx)(l.Z,{wallId:i,children:(0,r.jsx)(s.u,{appendTo:"body","data-tooltip-id":"tooltip-".concat(t.id,"-").concat(Math.random().toString(36).substr(2,9)),className:"tb_pro_tooltip",anchorSelect:"#".concat(i),clickable:!0,...u?{isOpen:o}:{},children:(0,r.jsx)(c,{item:t})},e)})]},"".concat(t.id,"-").concat(e))})):null},u=(0,o.memo)(p),h=(0,a.$j)((t=>({appData:t.appData})))(u)},84261:(t,e,i)=>{i.d(e,{Z:()=>r});var o=i(47313),a=i(46335),s=i(98501),n=i(46588),d=i(97915),l=i(46417);class r extends o.PureComponent{constructor(t){var e,i;super(t),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:t,offsetWidth:e}=this.mediaRef.current;this.setState({currentHeight:t,currentWidth:e})}},this.mediaSizeCalc=async()=>{const{Post:t,mediaOnly:e}=this.props,i=e||t.media;if((null===i||void 0===i||!i.height)&&(null===i||void 0===i||!i.width))try{var o;const{width:t,height:e}=await(0,a.GF)(null===i||void 0===i||null===(o=i.image)||void 0===o?void 0:o.small);this._isMounted&&this.setState({height:e,width:t})}catch(s){this._isMounted&&this.setState({height:300,width:300})}};const{mediaOnly:s,Post:n}=t;this.state={height:(null===s||void 0===s?void 0:s.height)||(null===n||void 0===n||null===(e=n.media)||void 0===e?void 0:e.height)||0,width:(null===s||void 0===s?void 0:s.width)||(null===n||void 0===n||null===(i=n.media)||void 0===i?void 0:i.width)||0,currentHeight:0,currentWidth:0},this.mediaRef=o.createRef()}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var t,e,i,o;const{height:a,width:r}=this.state,{ImageClass:c,Post:p,hotspot:u,size:h,blurBG:m,ProductSetting:v,mediaOnly:g,inView:w,multiKey:_,index:x}=this.props,{id:P,link:b,products:y}=p,I=g||(null===p||void 0===p?void 0:p.media),{currentWidth:D,currentHeight:S}=this.state,f=h||100*a/r,j={paddingBottom:1===f?null:"".concat(f,"%")},C={backgroundImage:w?"url(".concat(null===I||void 0===I||null===(t=I.image)||void 0===t?void 0:t.small,")"):null},k=r>a?"100%":"".concat(r/a*100,"%"),N=r>a?"".concat(a/r*100,"%"):"100%",T=p.isProduct&&u&&p.hotspot,M={width:T&&h?k:null,height:T&&h?N:null};return(0,l.jsxs)("div",{className:"".concat(c,"_wrap_"),style:j,ref:this.mediaRef,children:[T&&m?(0,l.jsx)("div",{className:"tb_blur_bg_",style:C}):null,(0,l.jsxs)("div",{className:"".concat(c,"_wrap_in"),style:M,children:[T?(0,l.jsx)(d.Z,{products:this.props.multiPic?p.mediaList[_].product:y,ProductSetting:v,hotspot:p.hotspot,dataPost:p,showTooltip:null},x):null,w?(0,l.jsx)("img",{className:"".concat(c," tb_media-").concat(P),src:null===I||void 0===I||null===(e=I.image)||void 0===e?void 0:e.small,srcSet:"".concat(null===I||void 0===I||null===(i=I.image)||void 0===i?void 0:i.small," 1x, ").concat(null===I||void 0===I||null===(o=I.image)||void 0===o?void 0:o.large," 2x"),sizes:"".concat(D,"px"),loading:w?"eager":"lazy",decoding:"async",fetchPriority:w?"high":"low","data-id":P,height:S,width:D,"data-height":a,"data-width":r,"data-link":b,onLoad:this.onLoad,onError:t=>{t.target.src="".concat(s.do,"/media/error/no-image.svg"),t.target.srcset="".concat(s.do,"/media/error/no-image.svg"),(0,n.ht)(t)},alt:null===I||void 0===I?void 0:I.title,title:null===I||void 0===I?void 0:I.title},"".concat(P,"-").concat(a,"-").concat(r,"-").concat(w)):null]})]})}}}}]);