"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[1764,368,5790,9239],{34873:(t,e,i)=>{i.d(e,{Z:()=>n});var r=i(47313),a=i(98501),s=i(46335),o=i(46417);class n extends r.PureComponent{constructor(t){super(t),this.onLoad=t=>1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src,loadError:!1}),this.state={loadError:!1,paddingBottom:100,imgUrl:this.props.media}}UNSAFE_componentWillReceiveProps(t){const{itemDetails:e}=t,{loadError:i}=this.state;i&&t!=this.props&&e&&Object.keys(e).length&&e.showCart&&this.setState({imgUrl:e.data.featured_image,loadError:!1})}render(){const{ImageClass:t}=this.props,{imgUrl:e,paddingBottom:i}=this.state,r={paddingBottom:"".concat(i,"%")};return(0,o.jsx)("div",{className:"".concat(t,"_wrap"),style:r,children:(0,o.jsx)("img",{className:t,role:"img",src:e,height:300,width:300,onLoad:this.onLoad,onError:t=>{this.setState({loadError:!0}),t.target.src=a.XW},alt:(0,s.P)(e)})})}}},89239:(t,e,i)=>{i.r(e),i.d(e,{default:()=>o});var r=i(47313),a=i(63214),s=i(46417);class o extends r.PureComponent{render(){const{author:t,authorClass:e,networkId:i,size:r,inView:o}=this.props;return(0,s.jsx)("div",{className:e,style:{overflow:4==i?"visible":""},children:o?(0,s.jsx)("img",{className:"".concat(e,"__"),src:t.picture,"aria-label":"author",alt:t.name,width:r||44,height:r||44,onError:e=>{const r=(0,a.B4)(i),s="#ffffff"==r?"000":r.replace("#","");e.target.src=t.errorPic?t.errorPic:"https://ui-avatars.com/api/?name=".concat(t.name.replace(/\s/g,""),"&background=").concat(s,"&color=fff&length=1")}}):null},Math.random())}}},55790:(t,e,i)=>{i.r(e),i.d(e,{default:()=>n});var r=i(47313),a=i(46335),s=i(46417);const o=t=>{const{createdAt:e,timeClass:i}=t;return(0,s.jsx)("div",{className:i,role:"status","aria-label":"post timestamp ".concat((0,a.Sy)(e)),children:(0,a.Sy)(e)})},n=(0,r.memo)(o)},81750:(t,e,i)=>{i.r(e),i.d(e,{default:()=>P});var r=i(47313),a=i(65537),s=i(83912),o=i(49860),n=(i(9860),i(35179)),l=i(17739),c=i(61893),d=i(84261),p=i(64442),u=i(24235),m=i(46417);const _=t=>{let{Post:e,ThemeStyle:i,CardStyle:r,index:a,inView:s}=t;const o=!(![3,5].includes(e.type)||1!==i.autoPlay||!s);return(0,m.jsxs)("div",{className:"tb_rtp_media_wrap",children:[o&&1==r.viewCountStatus&&(null===e||void 0===e?void 0:e.count.views)>0?(0,m.jsx)(u.Z,{count:null===e||void 0===e?void 0:e.count.views}):null,o?(0,m.jsx)(p.Z,{VideoClass:"tb_rtp_video",Post:e,size:1,isCover:!0,muted:!0,autoPlay:!0,index:a,inView:s}):(0,m.jsx)(d.Z,{ImageClass:"tb_rtp_image",Post:e,size:1,index:a,inView:s})]})};var h=i(34873);const b=(t,e)=>{if(0!=t){if(e>0&&e<t){let i=(t-e)/t*100;return i>0?"".concat(i.toFixed(),"%"):""}return!1}return!1},g=t=>{let{Post:e,ProductSetting:i}=t;const r=e.products,{Price:a,ProductTitle:n}=i,l=!(!r||1!=r.length);return(0,m.jsx)("div",{className:"tb_rtp_wrap",id:"slide-".concat(e.id),children:(0,m.jsxs)("div",{className:"tb_rtp_wrap_in tb_swiper",children:[(0,m.jsx)(s.tq,{id:"product_slide-".concat(e.id),modules:[o.tl,o.W_],spaceBetween:10,navigation:{prevEl:"#tb_rtn_prev-".concat(e.id),nextEl:"#tb_rtn_next-".concat(e.id)},children:r.map(((t,e)=>(0,m.jsx)(s.o5,{children:(0,m.jsxs)("div",{className:"tb_rtp",children:[(0,m.jsx)("div",{className:"tb_rtp_media",style:{opacity:t.image?1:0},children:(0,m.jsx)(h.Z,{ImageClass:"tb_rtp_img",media:t.image,size:!1,itemDetails:""})}),(0,m.jsx)("div",{className:"tb_rtp_title_w",children:t.title?(0,m.jsx)("div",{className:"tb_rtp_title tb-cTBfont-".concat(n.variant),children:t.title}):null}),t.price>0||t.discount>0?(0,m.jsxs)("div",{className:"tb_rtp_price_wrap",children:[(0,m.jsxs)("div",{className:"tb_rtp_price tb-cTBfont-".concat(a.variant),children:[t.currency,t.discount>0?t.discount:t.price]}),t.discount>0&&t.discount!=t.price?(0,m.jsxs)("div",{className:"tb_rtp_d_price tb-cTBfont-".concat(a.variant),children:[t.currency,t.price]}):null,b(Number(t.price),Number(t.discount))&&""!=b(Number(t.price),Number(t.discount))?(0,m.jsx)("div",{className:"tb_rtp_dp",children:b(Number(t.price),Number(t.discount))}):null]}):null]},e)},e)))}),l?null:(0,m.jsxs)("div",{className:"tb_rtn_wrap",onClick:t=>{t.stopPropagation()},children:[(0,m.jsx)("div",{id:"tb_rtn_prev-".concat(e.id),className:"tb_rtn_btn tb_rtn_btn_left tb__icon tb-arrow-left-alt",children:(0,m.jsx)("div",{})}),(0,m.jsx)("div",{id:"tb_rtn_next-".concat(e.id),className:"tb_rtn_btn tb_rtn_btn_right tb__icon tb-arrow-right-alt",children:(0,m.jsx)("div",{})})]})]})})};var v=i(89239),x=i(55790);const w=t=>{let{Post:e,CardStyle:i,ProductSetting:r,inView:a}=t;const{author:s,networkId:o}=e,{ProductTitle:n}=r,c=!(!i.author.status||(0,l.sZ)(s.name));return(0,m.jsx)("div",{className:"tb_rtp_wrap",children:(0,m.jsxs)("div",{className:"tb_rtp_wrap_in",style:{marginTop:c?"":0},children:[c?(0,m.jsxs)("div",{className:"tb_rtp_media",children:[(0,m.jsx)(v.default,{networkId:o,author:s,authorClass:"tb_rtp_a_img",inView:a},s.username)," "]}):"",c?(0,m.jsx)("div",{className:"tb_rtp_title_w",children:(0,m.jsx)("div",{className:"tb_rtp_authorname tb-cTBfont-".concat(n.variant),children:s.username&&s.username.length>0?"".concat(s.username):""})}):"",i.timeStatus?(0,m.jsx)(x.default,{createdAt:e.createdAt,timeClass:"tb_rtp_time tb-cTBfont-".concat(i.author.variant)}):""]})})};var f=i(37174);class y extends r.PureComponent{constructor(t){super(t),this.mediaHeight=r.createRef()}componentDidMount(){const{Post:t,itemIndex:e,onClickPopUpSlider:i}=this.props;(0,l.YN)(this.mediaHeight),t.isPopUp&&i(e,t)}render(){const{itemIndex:t,ThemeStyle:e,CardStyle:i,Post:r,ProductSetting:a,sliderHeight:s,clickToShowPopUp:o,index:l}=this.props,{style:c}=i,d={backgroundColor:c.background,minHeight:s};[3,5].includes(r.type);return(0,m.jsx)(f.Z,{children:s=>{let{ref:p,inView:u}=s;return(0,m.jsx)("div",{"data-id":r.id,id:"tb_rt_id-".concat(r.id),className:"tb_rtp_post_wrapper",onClick:o(t,r),style:{padding:c.padding/2,opacity:u?1:0,transition:u?"opacity .5s ease-in-out":""},"tb-product":r.isShopIcon?1:r.isHotspot?2:0,"area-label":r.content.text,role:"article",ref:p,"post-id":r.referenceId?r.referenceId:r.id,"feed-id":r.feedId,children:(0,m.jsxs)("div",{className:"tb_rtp_post_in tb_icon_animate ".concat(n.ig?"":"tb_rtp_post_in_animate"),style:d,role:"button","aria-label":"Popup",tabIndex:0,ref:this.mediaHeight,children:[(0,m.jsx)(_,{Post:r,CardStyle:i,ThemeStyle:e,index:l,inView:u}),n.ig?null:(0,m.jsx)("div",{className:"tb_rtp_play_ico",children:(0,m.jsx)("div",{className:"tb__icon tb-play",children:(0,m.jsx)("div",{})})}),r.isProduct?(0,m.jsx)(g,{Post:r,ProductSetting:a},"product_slide".concat(r.id)):(0,m.jsx)(w,{Post:r,CardStyle:i,ThemeStyle:e,ProductSetting:a,inView:u})]})})}})}}const S=(0,r.memo)((t=>{const{postData:e,completeDataObject:i,clickToShowPopUp:a,hasMoreData:c,parentID:d,keyRender:p,containerSize:u,onClickPopUpSlider:_,CardStyle:h,ThemeStyle:b,ProductSetting:g,ThemeInfo:v,appendData:x,preRender:w,loaderData:f,nextData:S,loadMoredata:j,handlePressStart:P,handlePressEnd:k,loadBranding:N}=t,C=(0,r.useRef)(null),T=(0,r.useRef)({}),[I,D]=(0,r.useState)(!1),E=(0,r.useCallback)((t=>{t.progress>.8&&c&&!f.isShowMoreLoading&&S(n.ig?v.webId:v.wallId,Math.floor(Date.now()/1e3),b.totalPosts,x.networkID,x.after,w,x.heightEvent)}),[c,f.isShowMoreLoading,S,v,b.totalPosts,x,w]),V=t=>{D(!0),setTimeout((()=>j()),1e3*t)};(0,r.useEffect)((()=>{const t=document.querySelectorAll(".splide__slide");if(t&&t.forEach((t=>{t.removeAttribute("aria-hidden"),t.removeAttribute("role")})),e&&1===e.length){const t=document.querySelector(".tb_rtp_arrow_left__"),e=document.querySelector(".tb_rtp_arrow_right__");t&&e&&(t.style.display="none",e.style.display="none")}N()}),[e]);const A=d,B=b.slide.autoSlide,F=b.slide.slideDuration,M=1===h.content.trimcontent,R=u.width>767?280:300,U=Math.max((u.width/R).toFixed(),1),H=(0,l.Pu)(u.width,b.column,U);return(0,m.jsx)(m.Fragment,{children:d&&(0,m.jsx)("div",{className:"tb_rtp_post_container tb_swiper",ref:C,children:(0,m.jsx)(s.tq,{ref:t=>T.current[A]=t,onScroll:t=>{E(t),I||V(3)},onTouchMove:t=>{E(t),I||V(0)},onAutoplay:t=>{E(t),I||V(4)},speed:700,edgeSwipeDetection:!0,slidesPerView:H+.4,touchRatio:2,cssMode:(0,l.b)(),passiveListeners:!0,freeMode:{enabled:!0,sticky:!1,momentumBounceRatio:2,momentumVelocityRatio:3},autoplay:!!n.ig&&{delay:1===B?1e3*F:99e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},loop:!c,slideFullyVisibleClass:"tb-swiper-slide-fully-visible",mousewheel:{forceToAxis:!0,sensitivity:2},watchSlidesProgress:!0,modules:[o.pt,o.Gk,o.Rv],className:"tb_rtp_post_slider ".concat(M?"tb_rtp_fixed_height":""),children:e&&e.length>0&&e.map(((t,e)=>{const r=i[t];return(n.ig||[3,5].includes(r.type))&&(0,m.jsx)(s.o5,{"data-id":r.id,onTouchStart:P,onTouchEnd:t=>k(t,e,r),style:{margin:0,padding:0},p_id:d,className:"tb_".concat(r.id),children:t=>{let{isVisible:i}=t;return(0,m.jsx)(y,{isVisible:i,Post:r,index:e,clickToShowPopUp:a,CardStyle:h,ThemeStyle:b,ProductSetting:g,ThemeInfo:v,onClickPopUpSlider:_},e)}},"".concat(r.id,"-").concat(e))}))},p)})})})),j={nextData:c.Mk},P=(0,a.$j)((t=>({loaderData:t.loaderData})),j)(S)},63214:(t,e,i)=>{i.d(e,{B4:()=>a,BK:()=>s,O5:()=>r});const r=t=>({0:"manual-upload",1:"twitter",2:"instagram",3:"facebook",4:"google",5:"pinterest",6:"flickr",7:"youtube",8:"vimeo",10:"linkedin",11:"tumblr",12:"rss",13:"star",15:"workplace",18:"instagram",19:"yelp",20:"slack",21:"yammer",23:"airbnb",25:"soundcloud",26:"giphy",27:"deviantart",28:"tiktok",29:"onsite-upload",30:"vkontakte",32:"chrome",33:"collabration",34:"amazon",35:"tripadvisor",36:"star",37:"aliexpress"}[t]||""),a=t=>({0:"#313A53",1:"#29a9e1",2:"#000000",3:"#1b74e4",4:"#4081ed",5:"#e60022",6:"#0a63dc",7:"#FF0000",8:"#1eb8eb",10:"#0a66c2",11:"#36465d",12:"#f78422",13:"#FABF04",15:"#4767ab",18:"#000000",19:"#be362e",20:"#510d4e",21:"#0078d4",23:"#ff7977",25:"#ff7700",26:"#000000",27:"#00e59b",28:"#000000",29:"#613983",30:"#0077FF",32:"#4c8bf5",33:"#4e69ed",34:"#4e69ed",35:"#60c196",36:"#00e9ff",37:"#E52F20"}[t]||""),s=t=>({0:"Manual Upload",1:"Twitter",2:"Instagram",3:"Facebook",4:"Google",5:"Pinterest",6:"Flickr",7:"YouTube",8:"Vimeo",10:"LinkedIn",11:"Tumblr",12:"RSS",13:"Star",15:"Workplace",18:"Instagram",19:"Yelp",20:"Slack",21:"Yammer",23:"Airbnb",25:"Soundcloud",26:"Giphy",27:"Deviantart",28:"Tiktok",29:"Review Hub",30:"Vkontakte",32:"Chrome Extension",33:"Collab with Creators",34:"Amazon",35:"Tripadvisor",36:"Review Hub",37:"Aliexpress"}[t]||"")}}]);