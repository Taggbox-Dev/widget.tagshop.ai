"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2104],{52104:(t,e,a)=>{a.r(e),a.d(e,{default:()=>f});var r=a(47313),s=a(43411),i=a(43635),o=a(17739),n=a(35179),d=a(60088),l=a(98501),c=a(46417);function p(t){t.style.setProperty("visibility","visible","important"),t.style.setProperty("opacity","1","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("transform","none","important"),t.style.setProperty("clip-path","initial","important")}class u extends r.PureComponent{render(){return(0,c.jsx)("a",{href:l.ZS,target:"_blank",ref:t=>{t&&(t.style.setProperty("margin-right","15px","important"),t.style.setProperty("width","90px","important"),t.style.setProperty("height","auto","important"),p(t))},children:(0,c.jsx)("img",{ref:t=>{t&&(t.style.setProperty("width","100%","important"),t.style.setProperty("height","auto","important"),p(t))},src:"".concat(l.do,"/media/images/").concat("tagshop-branding.svg")})})}}var h=a(53049);const m=t=>{let{product:e,wall:a,onsetProductImg:s,openAddtocart:o,item:n,setOnProductDetails:l}=t;const[p,u]=(0,r.useState)(!1),[h,m]=(0,r.useState)(!1),g=(a.User.id,a.ProductSetting.Button),_=(t,e)=>{var a;return(0,i.S5)({type:1,action:2,wall:null===t||void 0===t||null===(a=t.Wall)||void 0===a?void 0:a.id,product_id:e.id,post:n.referenceId,owner:t.Wall.owner,feed:n.feedId,currency:e.price_currency,price:e.product_discount>0?e.product_discount:e.product_price})},P=t=>{const{Button:e}=a.ProductSetting;var r=t;2==parseInt(e.newTab)?window.parent.location.href=r:window.open(r,"_blank")},w=e.UgcProduct;return(0,c.jsxs)("div",{className:"tb_rpp_pro ".concat(p?"ts_reelTheme_No_Product":""),children:[p?null:(0,c.jsx)("div",{className:"tb_rpp_pro_img",children:(0,c.jsx)("img",{src:w.product_image,alt:"",onError:()=>u(!0)})}),(0,c.jsxs)("div",{className:"tb_rpp_pro_cont",children:[(0,c.jsx)("div",{className:"tb_rpp_pro_title",children:w.product_title}),w.product_price>0||w.product_discount>0?(0,c.jsxs)("div",{className:"tb_rpp_p_wrap",children:[(0,c.jsxs)("div",{className:"tb_rpp_p",children:[w.price_currency_symbol,w.product_discount>0?w.product_discount:w.product_price]}),0==w.product_discount||w.product_price==w.product_discount?(0,c.jsx)(c.Fragment,{}):(0,c.jsxs)("div",{className:"tb_rpp_p tb_rpp_d_p",children:[w.price_currency_symbol,w.product_price]})]}):null,(0,c.jsxs)("div",{className:"tb_rpp_btn".concat(h?" tb_rpp_btn_spinner":""),disabled:h,onClick:()=>{(async()=>{m(!0);const t={};if(e&&e.UgcProduct&&e.UgcProduct.product_url)try{var r,i,n;140717==(null===a||void 0===a||null===(r=a.Wall)||void 0===r?void 0:r.owner)||1==(null===a||void 0===a||null===(i=a.ProductSetting)||void 0===i||null===(n=i.Button)||void 0===n?void 0:n.pdp_target)?(P(e.UgcProduct.product_url),s(e.product_image),m(!1),_(a,e.UgcProduct)):(0,d.PC)(e.UgcProduct.product_url).then((a=>{a.data&&(t[e.id]=a.data,s(a.data.featured_image?a.data.featured_image:e.product_image),m(!1),l(t),o(e.id,e))})).catch((t=>{console.log("error",t),P(e.UgcProduct.product_url),s(e.product_image),m(!1),_(a,e.UgcProduct)}))}catch(c){console.log("error",c),P(e.UgcProduct.product_url),m(!1)}})()},children:[g.text," "]})]})]})},g=(0,r.memo)(m),_=r.lazy((()=>Promise.all([a.e(6119),a.e(4261)]).then(a.bind(a,84261)))),P=r.lazy((()=>Promise.all([a.e(510),a.e(3494)]).then(a.bind(a,3494)))),w=r.lazy((()=>a.e(7084).then(a.bind(a,77084)))),D=t=>{const{itemData:e,wallID:a,ownerId:s,wall:i,muted:o,autoPlay:n,index:d}=t;return(0,c.jsx)("div",{className:"tb_rp_media_wrap",children:e.imageList&&e.imageList.length>0?(0,c.jsx)(r.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:(0,c.jsx)(w,{imageList:e.imageList,...t})}):2!==e.type&&4!==e.type&&n?3===e.type||5===e.type?(0,c.jsx)(r.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:(0,c.jsx)(P,{VideoClass:"tb_rp_video",data:{...e,postFileNew:e.filename},wallID:a,themeID:i.Personalization.widgetTheme,ownerId:s,size:false,isCover:!0,controls:!1,autoPlay:n,muted:o,handleVideoEnded:()=>{},index:d})}):null:(0,c.jsx)(r.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:(0,c.jsx)(_,{ImageClass:"tb_rp_image",data:{...e,postFileNew:e.filename},wallID:a,themeID:i.Personalization.widgetTheme,ownerId:s,size:false,ThemeRule:i.ThemeRule})})})},x=(0,r.memo)(D);var v=a(97529);a(6940);const I=t=>{let{wall:e,item:a,personalization:r,productLoading:s,showAddToCart:i,onsetProductImg:o,openAddtocart:n,setOnProductDetails:d,isFreePlan:l,index:p,currentVideo:h,muteToggle:m,muted:_}=t;const P=a.ugc_products,w=!(3!==a.type&&5!==a.type||!h);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(x,{itemData:a,wallID:e.Wall.wallId,ownerId:e.Wall.owner,ThemeID:r.widgetTheme,wall:e,muted:_,autoPlay:w,index:p}),(0,c.jsxs)("div",{className:"tb_rp_content",children:[e.ProductSetting&&1==r.themeType&&P&&P.length>0?(0,c.jsx)(v.tq,{autoHeight:!0,speed:400,edgeSwipeDetection:!0,slidesPerView:a.ugc_products&&a.ugc_products.length>1?1.3:1,touchRatio:2,spaceBetween:0,mousewheel:{forceToAxis:!0,sensitivity:2},watchSlidesProgress:!0,direction:"horizontal",className:"tb_rpp_wrap",children:a.ugc_products&&a.ugc_products.map(((t,r)=>(0,c.jsx)(v.o5,{children:(0,c.jsx)(g,{product:t,openAddtocart:n,onsetProductImg:o,showAddToCart:i,productLoading:s,wall:e,ugcSetting:e.ProductSetting,item:a,setOnProductDetails:d})},r)))}):null,w?(0,c.jsx)("div",{className:"tb_rp_mute_btn",onClick:m,children:(0,c.jsx)("div",{className:"tb__icon tb-".concat(_?"mute":"unmute"),children:(0,c.jsx)("div",{})})}):null,e.UserRule.branding_lite&&1==e.UserRule.branding_lite||l?(0,c.jsx)(u,{wallId:e.Wall.id,themeID:e.Personalization.widgetTheme}):null]})]})},S=(0,r.memo)(I);(0,a(12488).z2)();class y extends r.Component{constructor(t){var e;super(t),this.setMuted=t=>this.setState({muted:!this.state.muted}),this.setOnProductDetails=t=>this.setState({allProductDetails:t}),this.onErrorVideo=t=>this.setState({isVideoError:!0}),this.onMediaUpdate=t=>this.setState({isAuthorImagevalid:!1}),this.onAddToCart=(t,e,a)=>{const{wall:r}=this.props;setTimeout((()=>{this.setState({addCartSetTime:!0})}),100);const s={type:1,action:2,wall:r.Wall.id,feed:a.feedId,post:a.referenceId?a.referenceId:a.id,owner:r.Wall.owner,product_id:e.UgcProduct.id,currency:e.UgcProduct.price_currency,price:e.UgcProduct.product_discount>0?e.UgcProduct.product_discount:e.UgcProduct.product_price};this.setState({addtoCartPopup:!0,selectedProductDetails:this.state.allProductDetails[t],tagshopProductDeatil:{...e,trackingData:s}})},this.requestData=()=>{const{wall:t,appendData:e,hasMoreData:a,loaderData:r}=this.props,s=t.ThemeRule.numberOfPosts,i=Math.floor(Date.now()/1e3);a&&!r.isShowMoreLoading&&this.props.getDataNextSteps(t.Wall.id,i,s,e.networkID,e.after,e.heightEvent)},this.onItemChange=t=>this.setState({item:t}),this.currentSwiperSlide=t=>{this.props.hasMoreData&&t.progress>.9&&this.requestData(),this.onPopUpTrack(t.activeIndex)},this.onPopUpTrack=t=>{try{const{wall:e,completeData:a}=this.props;let r=a[t]?a[t]:null;if(r){const t={feed:r.feedId,post:r.referenceId?r.referenceId:r.id},a={wallId:e.Wall.id,userId:e.Wall.owner,feedId:r.feedId,postId:r.id},s={action:2,wall:e.Wall.id,feed:r.feedId,post:r.referenceId?r.referenceId:r.id,type:3,owner:e.Wall.owner};(0,i.S5)(n.ZQ?a:n.nX?s:{action:2,wall:e.Wall.id,...t,owner:e.Wall.owner})}}catch(e){console.log("Error in PopUp Tracking",e)}},this.startSwiperSlide=t=>{this.setState({activeSlide:t.activeIndex})},this.onClickClosePopUp=t=>this.setState({addtoCartPopup:!1,continueShopping:!1,selectedProductDetails:null,addCartSetTime:!1}),this.onClickCheckOut=t=>this.setState({addtoCartPopup:!0,continueShopping:!1}),this.sliderRef=r.createRef(),this.state={currentIndex:null===(e=this.props)||void 0===e?void 0:e.currentIndex,item:this.props.item,isVideoError:!1,windowWidth:window.innerWidth,isAuthorImagevalid:!0,instaImg:(0,o.TI)(this.props.imgData,this.props.item.link),isHotspot:!1,addtoCartPopup:!1,allProductDetails:null,selectedProductId:null,selectedProductDetails:null,continueShopping:!1,selectedVariant:null,showAddToCart:!1,productLoading:!0,productImg:"",tagshopProductDeatil:null,muted:!0,activeSlide:0,addCartSetTime:!1,selectedProdDetails:null,tagProdDetail:null},this.splideRef=r.createRef()}componentDidMount(){const{currentIndex:t,item:e}=this.props,a=(0,o.uB)(e.author.picture);this.setState({currentIndex:t,item:e,isAuthorImagevalid:a,instaImg:(0,o.TI)(this.props.imgData,this.props.item.link)}),this.splideRef.current.addEventListener("swiperslidechange",(t=>{this.props.hasMoreData&&t.detail[0].progress>.9&&(this.requestData(),this.setState({currentIndex:this.splideRef.current.swiper.activeIndex}))}))}componentWillReceiveProps(t){const{currentIndex:e,item:a}=t,r=(0,o.uB)(a.author.picture);this.setState({currentIndex:e,item:a,isVideoError:!1,isAuthorImagevalid:r,instaImg:(0,o.TI)(this.props.imgData,this.props.item.link)})}render(){const{personalization:t,onClosePopUp:e,slideWithArrowKeys:a,wall:r,webFilters:s,completeData:i,isFreePlan:o}=this.props,{currentIndex:n,item:d,isVideoError:l,instaImg:p,addtoCartPopup:u,selectedProductDetails:m,continueShopping:g,selectedVariant:_,showAddToCart:P,productImg:w,productLoading:D,tagshopProductDeatil:x,activeSlide:I,addCartSetTime:y,muted:b,selectedProdDetails:C,tagProdDetail:f}=this.state;return(0,c.jsxs)("div",{className:"modalId".concat(d.id," tb_rp_modal ").concat(y?"tb_rp_add_cart_m":""),onKeyDown:a,onKeyPress:a,onLoad:a,onClick:t=>t.currentTarget==t.target&&e(t),children:[(0,c.jsxs)("div",{className:"tb_rp_dialog",children:[u||g?null:(0,c.jsx)("div",{className:"tb_reel_close_btn",onClick:e,children:(0,c.jsx)("div",{className:"tb__icon tb-close-thin",children:(0,c.jsx)("div",{})})}),(0,c.jsx)("div",{className:"tb_time_line_wrap",children:(0,c.jsx)("div",{className:"tb_time_line",children:(0,c.jsx)("div",{})})}),(0,c.jsx)(v.tq,{ref:this.splideRef,direction:"vertical",touchRatio:2,freeMode:JSON.stringify({enabled:!0,sticky:!0}),height:"".concat(window.innerHeight),initialSlide:n,passiveListeners:!0,mousewheel:{forceToAxis:!0,sensitivity:2},watchSlidesProgress:!0,onSlideChange:t=>this.currentSwiperSlide(t),children:i&&i.length>0?i.map(((a,s)=>(0,c.jsx)(v.o5,{children:i=>{let{isActive:n}=i;return(0,c.jsx)(S,{currentVideo:n,onClosePopUp:e,wall:r,item:a,instaImg:p,showAddToCart:P,openAddtocart:(t,e)=>this.onAddToCart(t,e,a),onsetProductImg:t=>this.setState({productImg:t}),productLoading:D,sliderRef:this.sliderRef,personalization:t,isVideoError:l,addtoCartPopup:u,continueShopping:g,setOnProductDetails:this.setOnProductDetails,isFreePlan:o,muteToggle:this.setMuted,muted:b},"".concat(a.id,"-").concat(s))}},"".concat(a.id,"-").concat(s)))):(0,c.jsx)(c.Fragment,{})})]}),u&&m?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"tb_rp_cart_overlay",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_rp_cart_modal",children:(0,c.jsxs)("div",{className:"tb_rp_cart_body",children:[(0,c.jsx)("div",{className:"ts_reel_close_btn tb_reel_close_btn",onClick:u&&!g?this.onClickClosePopUp:g?t=>this.setState({addtoCartPopup:!0,continueShopping:!1}):null,children:(0,c.jsx)("div",{className:"tb__icon tb-close-thin",children:(0,c.jsx)("div",{})})}),(0,c.jsx)("div",{className:"tb_rp_cart_wrap",children:m&&Object.keys(m).length>0?(0,c.jsx)(h.Z,{productImg:w,addtoCartPopup:u,productDetails:{data:m},tagshopProductDeatil:x,closeCart:t=>this.setState({addtoCartPopup:!1,continueShopping:!1,selectedProductDetails:null}),onAddToCart:()=>this.setState({continueShopping:!0}),onSelectedVariant:t=>this.setState({selectedVariant:t}),wall:r,closePopUp:this.props.onClosePopUp}):null})]})})]}):null]})}}const b=(0,s.$j)((t=>{const{appData:e}=t;return{loaderData:t.loaderData,appendData:e.postData.appendData,hasMoreData:!e.postData.hasMoreData[0]||0!=e.postData.hasMoreData[0].hasMoreData&&(!e.postData.hasMoreData[e.postData.appendData.networkID]||e.postData.hasMoreData[e.postData.appendData.networkID].hasMoreData)}}),(t=>({getDataNextSteps:(e,a,r,s,o,n,d)=>t((0,i.Sx)(e,a,r,s,o,n,d))})))((0,r.memo)(y));class C extends r.PureComponent{constructor(){super(...arguments),this.state={isEnable:0,eventData:{},shareText:"SHARE",viewOnText:"View on",currentIndex:null,completeData:{},personalization:{},url:null,imgData:[]},this.closeCommercePopUP=t=>{this.setState({isEnable:0,currentIndex:null},(()=>this.props.closePopUP()));var e=document.getElementsByTagName("html");e&&e[0]&&(e[0].style.overflow="")},this.getCommercePopUPEvent=t=>{void 0!==t&&""!==t&&t.card&&this.setState({url:"",isEnable:1,eventData:t,currentIndex:t.index,completeData:t.idArray,viewOnText:t.viewOnText,shareText:t.shareText,windowParent:t,imgData:t.imgData,personalization:t.personalization},(()=>this.CommercePopUPSlideWithArrowKey()))},this.featuredPopSliderChangeIndex=t=>e=>{const{eventData:a}=this.state;-1===t?this.setState({currentIndex:a.idArray.length-1}):this.setState({currentIndex:a.idArray.length===t?0:t})},this.SliderWithKey=t=>{const{eventData:e}=this.state;-1===t?this.setState({currentIndex:e.idArray.length-1}):this.setState({currentIndex:e.idArray.length===t?0:t})},this.CommercePopUPSlideWithArrowKey=t=>{const{personalization:e}=this.state;if(e&&1===e.popupSlideShow){let e=this;(t=t||window.event)&&t.keyCode&&void 0!==t.keyCode&&(37===t.keyCode?e.SliderWithKey(e.state.currentIndex-1):39===t.keyCode?e.SliderWithKey(e.state.currentIndex+1):27===t.keyCode&&this.closeCommercePopUP())}}}componentDidMount(){const{data:t}=this.props;this.getCommercePopUPEvent(t);var e=document.getElementsByTagName("html");e&&e[0]&&(e[0].style.overflow="hidden")}componentDidUpdate(t){this.props.data!==t.data&&this.getCommercePopUPEvent(this.props.data)}componentWillReceiveProps(t){const{postData:e}=t;let{completeData:a,eventData:r}=this.state;if(a.length!=e.postData.length){let t=e.postData.map((t=>e.completeDataObject[t])).filter((t=>!String(t.id).includes("free_add_")));r.idArray=t,this.setState({completeData:t,eventData:r},(()=>{const{currentIndex:t}=this.state;this.setState({currentIndex:t+1})}))}else{!(e.hasMoreData&&Object.keys(e.hasMoreData).length>0)||(!e.hasMoreData[0]||0!=e.hasMoreData[0].hasMoreData)&&(!e.hasMoreData[e.appendData.networkID]||e.hasMoreData[e.appendData.networkID].hasMoreData)}}render(){const{viewOnText:t,isEnable:e,currentIndex:a,personalization:r,completeData:s,eventData:i,url:o,imgData:n}=this.state,{postData:d}=this.props;let l=null;l=-1===a?s[i.idArray.length-1]:s[a];const{wall:p,webFilters:u}=this.props;return 1===e&&p&&s&&Object(s).length>0?(0,c.jsx)(b,{webFilters:u,wall:p,item:l,completeData:s,onClosePopUp:this.closeCommercePopUP,currentIndex:a,personalization:r,viewOnText:t,slideWithArrowKeys:this.CommercePopUPSlideWithArrowKey,featuredPopSliderChangeIndex:this.featuredPopSliderChangeIndex,hostUrl:o,imgData:n,isFreePlan:d&&d.isFreeAdsStatus}):null}}const f=(0,s.$j)((t=>({wall:t.appData.wall,webFilters:t.appData.webFilters})),(t=>({closePopUP:e=>t((0,i.zj)(e))})))(C)}}]);