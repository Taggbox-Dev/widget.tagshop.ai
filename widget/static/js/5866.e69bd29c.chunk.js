"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[548,2663,5044,5866,6723,8167],{18459:(t,e,o)=>{o.d(e,{A:()=>l});var s=o(9950),i=o(80415),a=o(76506),n=o(44414);class l extends s.PureComponent{constructor(t){super(t),this.onLoad=t=>1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src,loadError:!1}),this.state={loadError:!1,paddingBottom:100,imgUrl:this.props.media}}UNSAFE_componentWillReceiveProps(t){const{itemDetails:e}=t,{loadError:o}=this.state;o&&t!=this.props&&e&&Object.keys(e).length&&e.showCart&&this.setState({imgUrl:e.data.featured_image,loadError:!1})}render(){const{ImageClass:t}=this.props,{imgUrl:e,paddingBottom:o}=this.state,s={paddingBottom:`${o}%`};return(0,n.jsx)("div",{className:`${t}_wrap`,style:s,children:(0,n.jsx)("img",{className:t,role:"img",src:e,height:300,width:300,onLoad:this.onLoad,onError:t=>{this.setState({loadError:!0}),t.target.src=i.qF},alt:(0,a.wG)(e)})})}}},2561:(t,e,o)=>{o.r(e),o.d(e,{default:()=>M});var s=o(9950),i=o(10300),a=o(66345),n=o(76506),l=o(80415),r=o(44414);const d=t=>{let{size:e,themeId:o}=t;const s=t=>o==t&&1==e;return(0,r.jsx)("div",{ref:t=>{t&&(t.style.setProperty("opacity","0.8","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("width",""+(2==e?"110px":"75px"),"important"),t.style.setProperty("height",""+(2==e?"25px":"18px"),"important"),t.style.setProperty("max-width",""+(2==e?"110px":"75px"),"important"),t.style.setProperty("max-height",""+(2==e?"25px":"18px"),"important"),t.style.setProperty("top",""+(s(55)||s(62)||s(61)?"auto":"14px"),"important"),t.style.setProperty("left",""+(s(62)||s(61)?"auto":"14px"),"important"),t.style.setProperty("right",""+(s(55)||s(62)||s(61)?"14px":"auto"),"important"),t.style.setProperty("bottom",""+(s(55)||s(62)||s(61)?"14px":"auto"),"important"),t.style.setProperty("margin","0 auto","important"),t.style.setProperty("position","absolute","important"),t.style.setProperty("visibility","visible","important"),t.style.setProperty("z-index","3","important"),t.style.setProperty("background-image",`url(${l.th}/media/logo/tagshop-light.svg)`,"important"),t.style.setProperty("background-repeat","no-repeat","important"),t.style.setProperty("background-size","contain","important"),t.style.setProperty("clip-path","initial","important"))},children:(0,r.jsx)("div",{children:" "})})},c=s.lazy((()=>Promise.all([o.e(8092),o.e(3556),o.e(1823),o.e(1828)]).then(o.bind(o,51828)))),p=s.lazy((()=>Promise.all([o.e(1823),o.e(9924)]).then(o.bind(o,69924)))),h=s.lazy((()=>Promise.all([o.e(8092),o.e(7482)]).then(o.bind(o,7482)))),_=s.lazy((()=>Promise.all([o.e(9992),o.e(1883)]).then(o.bind(o,29779))));class m extends s.PureComponent{constructor(t){super(t),this.handleResize=()=>{this.setState({winSize:{width:window.innerWidth,height:window.innerHeight}},(()=>{const{mediaSize:t}=this.state;this.setSize(t.height,t.width)}))},this.setSize=(t,e)=>{const{hideContent:o}=this.props,{winSize:s}=this.state,i=Math.min((s.width-535)/e,(s.height-(90+(o?69:0)))/t),a={height:t*i,width:e*i,paddingBottom:100*t/e},n={winHeight:s.height,winWidth:s.width,height:a.height,width:a.width,paddingBottom:a.paddingBottom};this.props.allSizeCallback(n),this.setState({mediaSize:{height:a.height,width:a.width,paddingBottom:a.paddingBottom}})},this.onMediaLoad=async t=>{const{height:e,width:o}=t.media;if(e&&o)this.setSize(e,o);else{const e=document.querySelector(`.tb_media-${t.id}`),o=e?parseInt(e.getAttribute("data-height"),10):0,i=e?parseInt(e.getAttribute("data-width"),10):0;if(i>0&&o>0)this.setSize(o,i);else try{const{width:e,height:o}=await(0,n.TW)(t.media.image.small);this._isMounted&&this.setSize(o,e)}catch(s){this._isMounted&&this.setSize(1e3,1e3)}}},this.state={winSize:{width:window.innerWidth,height:window.innerHeight},mediaSize:{height:0,width:0,paddingBottom:0}}}static getDerivedStateFromProps(t,e){return t.Post!==e.Post?{...e,Post:t.Post}:null}componentDidMount(){const{Post:t}=this.props;window.addEventListener("resize",this.handleResize),this._isMounted=!0,this.onMediaLoad(t)}componentDidUpdate(t){this.props.Post!==t.Post&&this.onMediaLoad(this.props.Post)}componentWillUnmount(){this._isMounted=!1,window.removeEventListener("resize",this.handleResize)}render(){const{Post:t,ThemeInfo:e,onUpdateProdImgIdx:o,showTooltip:i}=this.props,{winSize:a,mediaSize:n}=this.state,l={maxHeight:a.width>991?n.height:null,maxWidth:a.width>991?n.width:null,aspectRatio:`${n.width} / ${n.height}`,flexBasis:a.width>991?n.height:null},m={paddingBottom:`${n.paddingBottom}%`,width:a.width>991?n.width:null};return(0,r.jsxs)("div",{className:"tb_post_modal_media_holder",style:l,children:[null!==e&&void 0!==e&&e.branding?(0,r.jsx)(d,{size:2,themeId:e.id}):null,(0,r.jsx)("div",{className:"tb_post_modal_media",style:m,children:(0,r.jsx)("div",{className:"tb_post_modal_media_",children:t.mediaList&&t.mediaList.length>0?(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(c,{winSize:a,Post:t,mediaSize:n,ThemeInfo:e,onUpdateProdImgIdx:o,showTooltip:i})}):[2,4].includes(t.type)?(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(p,{winSize:a,Post:t,Item:!1,Products:t.products,mediaSize:n,ThemeInfo:e,opacity:1,showTooltip:i,hotspot:!0})}):[3,5].includes(t.type)?t.isAudio?(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(_,{Post:t})}):(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(h,{Post:t,mediaSize:n},t.id)}):null})})]})}}var u=o(92663),b=o(52867),v=o(78167),g=o(6723);class w extends s.PureComponent{constructor(t){super(t),this.state={picture:t.Post.author.picture}}UNSAFE_componentWillReceiveProps(t){const{Post:e}=t;this.setState({picture:e.author.picture})}render(){const{Post:t,CardStyle:e}=this.props,{name:o,username:s}=t.author,i=e.author.status,l=`${s&&s.length>0?"@":""}${s}`,d=!(a.HY&&!i||0==i||(0,b.zK)(o))||!(!a.aD&&!a.Vn),c=0==t.timePost||t.author.isInstaUser,p=a.HY?!(!e.timeStatus||0==i||c):0!=i&&!c,h=a.HY?!(!e.timeStatus||c):!c||!(!a.aD&&!a.Vn);return(0,r.jsxs)("div",{className:"tb_post_modal_post_author",children:[(0,r.jsxs)("div",{className:"tb_post_modal_author_details",children:[d?(0,r.jsx)(v.default,{author:t.author,networkId:t.networkId,authorClass:`tb_post_modal_author_media tb-cTBfont-${e.author.variant}`,inView:!0}):null,(0,r.jsxs)("div",{className:"tb_post_modal_author_deatils",children:[d?(0,r.jsx)("div",{className:"tb_post_modal_author_wrap",children:(0,r.jsxs)("div",{className:`tb_post_modal_author_usrname tb-cTBfont-${e.author.variant}`,onClick:e=>t.link&&a.yR?window.open(t.link):null,children:[o," "]})}):null,(0,r.jsxs)("div",{className:"tb_post_modal_author_info",children:[d?(0,r.jsx)("div",{className:`tb_post_modal_author_handlename tb-cTBfont-${e.author.variant}`,children:l}):null,p?(0,r.jsx)("div",{className:"tb_post_modal_seprator_dot",children:(0,r.jsx)("div",{})}):null,h?(0,r.jsx)(g.default,{createdAt:t.createdAt,timeClass:`tb_post_modal_post_time tb-cTBfont-${e.author.variant}`}):null]})]})]}),(0,r.jsx)("div",{className:"tb_post_modal_social_wrapper",onClick:e=>t.link&&a.yR?window.open((0,n.C9)(t.link),"_blank"):null,children:(0,r.jsx)(u.default,{networkClass:`tb_post_modal_social_ico tb-cTBfont-${e.author.variant}`,networkId:t.networkId,iconStyle:e.icon,isPopUp:!0})})]})}}var y=o(93152),x=o(21850);const f={sharePostPopUP:y.CW},P=(0,i.Ng)(null,f)((t=>{let{sharePostPopUP:e,item:o,wall:i,color:l}=t;const{webId:d,wallId:c,ownerId:p}=i.ThemeInfo;(0,s.useEffect)((()=>{window.twttr&&window.twttr.ready((t=>{window.twttr.events.bind("tweet",h)}))}),[]);const h=t=>{t&&((0,x.hq)({type:2,action:2,wall:a.HY?d:c,feed:o.feedId,post:o.referenceId?o.referenceId:o.id,owner:p}),(0,x.x9)("Tagbox","popup_share_click","popup_share",a.HY?d:c)),window.open(o.share.twitter,"_target")},_={color:l};return(0,r.jsx)("div",{className:"tb_post_modal_post_footer_social_",children:(0,r.jsxs)("div",{className:"tb_post_modal_share_ico",children:[(0,r.jsx)("div",{className:"tb_post_modal_social_ico_list___",children:(0,r.jsx)("div",{onClick:(u=o.share.facebook,t=>{window.open(u,"_target"),(0,x.hq)({type:2,action:2,wall:a.HY?d:c,feed:o.feedId,post:o.referenceId?o.referenceId:o.id,owner:p}),(0,x.x9)("Tagbox","popup_share_click","popup_share",a.HY?d:c)}),children:(0,r.jsx)("div",{className:"tb_post_modal_share_button tb__icon tb-facebook",style:_,children:(0,r.jsx)("div",{})})})}),(0,r.jsx)("div",{className:"tb_post_modal_social_ico_list___",children:(0,r.jsx)("div",{className:"tb_post_modal_share_button tb__icon tb-twitter",onClick:h,style:_,children:(0,r.jsx)("div",{})})}),(0,r.jsx)("div",{className:"tb_post_modal_social_ico_list___",children:(0,r.jsx)("div",{className:"tb_post_modal_share_button tb__icon tb-linkedin",onClick:(t=>e=>{(0,x.hq)({type:2,action:2,wall:a.HY?d:c,feed:o.feedId,post:o.referenceId?o.referenceId:o.id,owner:p}),(0,x.x9)("Tagbox","popup_share_click","popup_share",a.HY?d:c),window.open(t,"_target")})(o.share.linkedin),style:_,children:(0,r.jsx)("div",{})})}),a.MH&&o.link&&(0,r.jsx)("div",{className:"tb_post_modal_social_ico_list___",onClick:()=>e(o),children:(0,r.jsx)("div",{className:"tb_post_modal_share_button tb__icon tb-mail",style:_})}),o.link&&(0,r.jsx)("div",{className:"tb_post_modal_social_ico_list___ tb_post_link__",onClick:(m=o.link,t=>{window.open((0,n.C9)(m),"_blank")}),children:(0,r.jsx)("div",{className:"tb_post_modal_share_button tb__icon tb-link",style:_})})]})});var m,u}));var S=o(88740);const k=t=>{let{network:e}=t;const{className:o,color:s,fontSize:i}={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4",fontSize:30},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707",fontSize:30},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c",fontSize:30},28:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C",fontSize:30},29:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983",fontSize:30},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000",fontSize:30},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1",fontSize:30}}[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C",fontSize:30};return(0,r.jsx)("div",{className:o,style:{color:s,fontSize:i},"tb-network":e.id,children:(0,r.jsx)("div",{})})};class j extends s.PureComponent{render(){const{rating:t,network:e}=this.props;return(0,r.jsx)("div",{className:"tb__modal_rating__",children:t?[...Array(t)].map(((t,o)=>(0,r.jsx)(k,{network:e},o))):null})}}const I=s.lazy((()=>o.e(9422).then(o.bind(o,89422))));class C extends s.PureComponent{constructor(t){super(t),this.state={scrollAmount:1,scrollDirection:1,contentHeightInner:100,contentHeightUpper:100},this.upperDivRef=s.createRef(),this.innerDivRef=s.createRef()}componentDidMount(){const t=this.upperDivRef.current,e=this.innerDivRef.current;e&&this.setState({contentHeightInner:e.clientHeight,contentHeightUpEle:t.clientHeight})}render(){const{contentTitle:t,item:e,CardStyle:o,allSize:i,isProduct:l,socialAction:d}=this.props,{contentHeightInner:c,contentHeightUpEle:p}=this.state,h=!l&&!a.HY&&i.winWidth>991?i.height-(d?100:0):null;let _=(0,n.w)(this.props.contentData.text);const m=String(this.props.contentData).length>0&&o.style.textDecoration?" tb_post_modal_text_decorate":"";47===o.widgetTheme&&(document.querySelector("html").style.overflow="auto");const u=!a.yR&&c>(h||p);return(0,r.jsx)("div",{className:"tb_post_modal_post_wrapper  "+(u?"tb_scroll_auto":""),style:{height:1!=e.type?h:"100%"},children:(0,r.jsx)("div",{className:"tb_post_modal_post_wrap_in",ref:this.upperDivRef,children:(0,r.jsxs)("div",{className:"tb_post_modal_post_content",children:[null!=e.rating&&e.rating?(0,r.jsx)(j,{rating:e.rating,network:e.network}):null,(0,r.jsxs)("div",{className:`tb_post_modal_content tb-cTBfont-${o.style.variant} ${m}`,ref:this.innerDivRef,children:[t?(0,r.jsx)("div",{className:"tb_post_bold_txt",children:(0,S.Ay)(t)}):null,(0,r.jsxs)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:[" ",(0,r.jsx)(I,{content:_,CardStyle:o})]})]})]})})},`content_${e.id}`)}}o(96011);var N=o(83744),D=o(18459);class T extends s.Component{constructor(){super(...arguments),this.state={prdImgLoaded:!1,noImg:!1,itemDetails:{},isLoading:!0},this.openUrl=t=>{const{ProductSetting:e}=this.props,{Button:o}=e;var s=t;2==parseInt(o.newTab)?window.parent.location.href=s:window.open(s,"_blank")},this.tracking=(t,e)=>{var o,s;const{item:i}=this.props;(0,x.hq)({type:1,action:2,wall:null===t||void 0===t||null===(o=t.ThemeInfo)||void 0===o?void 0:o.webId,product_id:e.id,post:i.referenceId,owner:null===t||void 0===t||null===(s=t.ThemeInfo)||void 0===s?void 0:s.ownerId,feed:i.feedId,currency:e.currencyCode,price:Number(e.discount)>0?e.discount:e.price})},this.showTooltipFunCallback=t=>{this.props.showTooltipFun(t)}}componentDidMount(){const{item:t,wall:e}=this.props;let{itemDetails:o}=this.state;if(t&&t.isProduct){this.setState({isLoading:!0});const s=t.products.map((t=>{var s,i;const a=t.url;if(1==(null===e||void 0===e||null===(s=e.ProductSetting)||void 0===s||null===(i=s.Button)||void 0===i?void 0:i.pdp_target))return o[t.id]={data:null,showCart:!1},this.setState({itemDetails:o}),Promise.resolve();if(a&&!String(a).includes(".html")&&""!=t.createdFrom){const s="magento"===t.createdFrom||!1;return(0,N.YS)(a,s,{productId:t.id,storeId:t.storeId}).then((i=>{if(s&&!1===i.status)o[t.id]={data:{available:!0},showCart:140717!==(null===e||void 0===e?void 0:e.ThemeInfo.ownerId)};else{var a;const n=s&&(null===i||void 0===i||null===(a=i.data)||void 0===a?void 0:a.data)||(null===i||void 0===i?void 0:i.data),l=s?{available:!0}:{};o[t.id]={data:null!==n&&void 0!==n&&n.id?{...n,...l}:null,showCart:(null===n||void 0===n?void 0:n.id)&&140717!==(null===e||void 0===e?void 0:e.ThemeInfo.ownerId)}}this.setState({itemDetails:o})})).catch((e=>{o[t.id]={data:null,showCart:!1},this.setState({itemDetails:o})}))}return o[t.id]={data:null,showCart:!1},this.setState({itemDetails:o}),Promise.resolve()}));Promise.all(s).then((()=>{this.setState({isLoading:!1})}))}}render(){const{item:t,products:e,wall:o,openCart:s,ProductSetting:i}=this.props,{itemDetails:a,isLoading:n}=this.state,{CatalogueTitle:l,Price:d,ProductTitle:c,Button:p}=i;return Object.keys(e||{}).length?(0,r.jsxs)("div",{className:"tb_pro__container",children:[(0,r.jsx)("div",{className:`tb_pro__heading tb-cTBfont-${l.variant}`,children:(0,S.Ay)(l.text)}),(0,r.jsx)("div",{className:"tb_pro__wrap",children:e.map(((e,i)=>{var l,h,_,m,u,b,v;return(0,r.jsx)("div",{className:"tb_pro__item",children:(0,r.jsxs)("div",{className:"tb_pro__wrap_in",onMouseEnter:()=>this.showTooltipFunCallback(e.id),onMouseLeave:()=>this.showTooltipFunCallback(0),children:[(0,r.jsx)("div",{className:"tb_pro__img_wrapper",children:(0,r.jsx)(D.A,{ImageClass:"tb_pro__image",media:e.image,size:!1,itemDetails:a[e.id]||null},`pro-${e.id}`)}),null!==e&&void 0!==e&&e.title?(0,r.jsx)("div",{className:`tb_pro__title tb-cTBfont-${c.variant}`,children:(0,S.Ay)(e.title)}):null,Number(e.price)>0||Number(e.discount)>0?(0,r.jsxs)("div",{className:"tb_pro__price_wrap",children:[(0,r.jsxs)("div",{className:`tb_pro__price tb-cTBfont-${d.variant}`,children:[e.currency,Number(e.discount)>0?e.discount:e.price]}),Number(e.discount)>0&&e.discount!=e.price?(0,r.jsxs)("div",{className:`tb_pro__discount_price tb-cTBfont-${d.variant}`,children:[e.currency,e.price]}):null]}):null,a&&Object.keys(a).length&&a[e.id]&&null!==(l=a[e.id])&&void 0!==l&&l.showCart?(0,r.jsx)("div",{className:"tb_pro__link",children:(0,r.jsx)("div",{onClick:null!==(h=a[e.id])&&void 0!==h&&null!==(_=h.data)&&void 0!==_&&_.available?()=>s(e.id,e,a[e.id],t):null,className:`tb_pro__btn ${null!==(m=a[e.id])&&void 0!==m&&null!==(u=m.data)&&void 0!==u&&u.available?"":"tb_pro_sold"} tb-cTBfont-${p.variant} ${n?"tb_pro_sold":""}`,children:null!==(b=a[e.id])&&void 0!==b&&null!==(v=b.data)&&void 0!==v&&v.available?p.text:"Sold Out"})}):(0,r.jsx)("div",{className:"tb_pro__link",children:(0,r.jsx)("div",{onClick:()=>{this.openUrl(e.url),this.tracking(o,e)},className:`tb_pro__btn tb-cTBfont-${p.variant} ${n?" tb_pro_sold":""}`,target:o&&o.User&&"102810"!=o.User.id?"_blank":"",children:p.text})})]})},i)}))})]}):null}}const z=T;function U(t){t.style.setProperty("visibility","visible","important"),t.style.setProperty("opacity","1","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("transform","none","important"),t.style.setProperty("clip-path","initial","important"),t.style.setProperty("border","none","important")}class $ extends s.PureComponent{render(){const{brandingNetworks:t,wallId:e,wall:o}=this.props,s=a.HY||`${(0,n.hZ)(t,e)[0]}`,i=a.HY?"tagshop-light.svg":a.aD?"socialwalls-light.svg":"tagbox-light.svg",{poweredBy:d}=o.ThemeStyle.language.text;return(0,r.jsxs)("a",{href:s,target:"_blank",ref:t=>{t&&(t.style.setProperty("position","absolute","important"),t.style.setProperty("left","auto","important"),t.style.setProperty("right","0","important"),t.style.setProperty("bottom","-26px","important"),t.style.setProperty("align-items","center","important"),t.style.setProperty("padding-top","4px","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("width","auto","important"),t.style.setProperty("text-decoration","none","important"),t.style.setProperty("direction","ltr","important"),U(t))},children:[(0,r.jsxs)("div",{ref:t=>{t&&(t.style.setProperty("font-size","13px","important"),t.style.setProperty("color","#fff","important"),t.style.setProperty("margin-right","5px","important"),t.style.setProperty("width","100%","important"),t.style.setProperty("height","auto","important"),t.style.setProperty("font-family","inherit","important"),U(t))},children:[d||"Powered by"," "]}),(0,r.jsx)("div",{ref:t=>{t&&(t.style.setProperty("background-image",`url(${l.th}/media/logo/${i})`,"important"),t.style.setProperty("background-size","contain","important"),t.style.setProperty("background-position","left center","important"),t.style.setProperty("background-repeat","no-repeat","important"),t.style.setProperty("height","22px","important"),t.style.setProperty("min-height","22px","important"),t.style.setProperty("width","90px","important"),t.style.setProperty("min-width","90px","important"),U(t))}})]})}}var H=o(54199),A=o(92687);class E extends s.PureComponent{constructor(){super(...arguments),this.state={isEnable:0,eventData:{},shareText:"SHARE",viewOnText:"View on",currentIndex:null,completeData:{},personalization:{},url:null,imgData:[],type:"",parentID:"",isRepeatingPost:!1,allSize:{winHeight:null,winWidth:null,height:null,width:null,paddingBottom:null},addtoCartPopup:!1,productImg:"",prodImgIdx:0},this.keyboardEvent=t=>{let e=this.state.currentIndex;[39,40].includes(t.keyCode)?(e+=1,this.featuredPopSliderChangeIndex(e)(t)):[37,38].includes(t.keyCode)?(e-=1,this.featuredPopSliderChangeIndex(e)(t)):27==t.keyCode&&this.closeWidgetPopUP()},this.onCloseModal=()=>{var t=document.querySelector(`#tb_post_modal_modal-${this.state.parentID}`);t&&t.classList.contains("tb_post_modal_show")&&(t.classList.remove("tb_post_modal_show"),this.setState({isEnable:0,currentIndex:null,type:"",addtoCartPopup:!1,selectedProdDetails:null}),this.props.closePopUP());var e=document.getElementsByTagName("html");e&&e[0]&&(e[0].style.overflow="")},this.closeWidgetPopUP=t=>this.onCloseModal(),this.getWidgetPopUPEvent=t=>{void 0!==t&&""!=t&&t.card&&("post"==t.type?this.setState({url:"",isEnable:1,eventData:t,currentIndex:t.index,completeData:t.idArray,viewOnText:t.viewOnText,shareText:t.shareText,imgData:t.imgData,personalization:t.personalization,type:t.type,showTooltip:0}):"submit-pic"==t.type&&this.setState({isEnable:1,type:t.type,windowParent:t}))},this.featuredPopSliderChangeIndex=t=>e=>{const{eventData:o,isRepeatingPost:s}=this.state;if(o.idArray.length-1!=t&&t!==o.idArray.length||s){let e;e=t===o.idArray.length-1||t===o.idArray.length?0:-1===t?o.idArray.length-1:t,this.setState({currentIndex:e,isRepeatingPost:!1},(()=>this.onPopUpTrack()))}else this.loadMore()},this.onPopUpTrack=()=>{try{const{wall:t}=this.props,{currentIndex:e,completeData:o,eventData:s}=this.state;let i=null;i=-1===e?o[s.idArray.length-1]:o[e];const n={feed:i.feedId,post:i.referenceId?i.referenceId:i.id},l={action:2,wall:t.ThemeInfo.webId,feed:i.feedId,post:i.referenceId?i.referenceId:i.id,type:3,owner:t.ThemeInfo.ownerId};(0,x.hq)(a.Qy?l:{action:2,wall:t.ThemeInfo.webId,...n,owner:t.ThemeInfo.ownerId,type:3})}catch(t){console.log("Error in PopUp Tracking",t)}},this.loadMore=()=>{const{wall:t,postData:e}=this.props,{eventData:o,currentIndex:s}=this.state,i=!e.hasMoreData||!Object.keys(e.hasMoreData).length||(!e.hasMoreData[0]||0!=e.hasMoreData[0].hasMoreData)&&(!e.hasMoreData[e.appendData.networkID]||e.hasMoreData[e.appendData.networkID].hasMoreData);if(o.idArray.length-1==s&&this.setState({isRepeatingPost:!0}),i){const o=t.ThemeStyle.totalPosts,s=Math.floor(Date.now()/1e3);this.props.nextData(a.HY?t.ThemeInfo.webId:t.ThemeInfo.wallId,s,o,e.appendData.networkID,e.appendData.after,e.appendData.heightEvent)}else this.setState({currentIndex:0})},this.popUpCloseClckOnWindow=()=>{document.addEventListener("click",(t=>{t.target.matches(`#tb_post_modal_modal-${this.state.parentID}`)&&this.onCloseModal()}))},this.allSize=t=>{this.setState({allSize:{winHeight:window.innerHeight,winWidth:window.innerWidth,height:t.height,width:t.width,paddingBottom:100*t.height/t.width}})},this.onClickOpenCart=(t,e,o,s)=>{const{ThemeInfo:i}=this.props.wall,n={type:1,action:2,wall:a.HY?i.webId:i.wallId,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:i.ownerId,product_id:e.id,productList:[],currency:e.currency,currencyCode:e.currencyCode,price:Number(e.discount)>0?Number(e.discount):Number(e.price)};this.setState({addtoCartPopup:!0,selectedProdDetails:o,tagProdDetail:{...e,trackingData:n},pId:t,productImg:e.image})},this.closeCart=t=>{this.setState({addtoCartPopup:!1,selectedProdDetails:null},(()=>{var t=document.querySelector(`#tb_post_modal_modal-${this.state.parentID}`);t&&t.classList.add("tb_post_modal_show")}))},this.onUpdateProdImgIdx=t=>{this.setState({prodImgIdx:t})},this.showTooltipFun=t=>{this.setState({showTooltip:t})}}componentDidMount(){var t;const{data:e}=this.props;let o=document.querySelector(".tb_app_container"),s=b.wV?b.wV:null===o||void 0===o||null===(t=o.parentNode)||void 0===t?void 0:t.id;this.setState({parentID:s}),this.getWidgetPopUPEvent(e),setTimeout((()=>{var t=document.querySelector(`#tb_post_modal_modal-${this.state.parentID}`);t&&t.classList.add("tb_post_modal_show")}));var i=document.getElementsByTagName("html");i&&i[0]&&(i[0].style.overflow="hidden"),this.popUpCloseClckOnWindow(),window.addEventListener&&window.addEventListener("keydown",this.keyboardEvent)}componentWillUnmount(){window.removeEventListener("keydown",this.keyboardEvent)}componentDidUpdate(){const t=this;let e=0;if(window.editor){let o=document.getElementById("tb_post_modal_modal-taggbox_main"),s=document.querySelector(".tb_post_modal_conetent"),i=document.querySelector(".tb_post_modal_nxt_btn"),a=document.querySelector(".tb_post_modal_prev_btn");o&&(s&&(s.onclick=()=>e=1),i&&(i.onclick=()=>e=1),a&&(a.onclick=()=>e=1),o.onclick=()=>{0==e&&t.onCloseModal(),e=0})}}UNSAFE_componentWillReceiveProps(t){const{postData:e}=t;let{completeData:o,eventData:s}=this.state;if(o.length!=e.postData.length){let t=e.postData.map((t=>e.completeDataObject[t])).filter((t=>!String(t.id).includes("free_add_")));s.idArray=t,this.setState({completeData:t,eventData:s},(()=>{const{currentIndex:t}=this.state;this.setState({currentIndex:t+1},(()=>this.onPopUpTrack()))}))}}render(){var t,e,o,s,i,n,l,d,c,p,h,_;const{wall:u,reportMediaPopUp:b,brandingNetworks:v,postData:g}=this.props,{currentIndex:y,completeData:x,eventData:f,parentID:S,allSize:k,addtoCartPopup:j,productImg:I,selectedProdDetails:N,tagProdDetail:D,prodImgIdx:T,showTooltip:U}=this.state;let E=null;E=-1===y?x[f.idArray.length-1]:x[y];const M=1==(null===(t=u.ThemeStyle)||void 0===t||null===(e=t.modal)||void 0===e?void 0:e.slide),B=a.HY?1==(null===(o=u.CardStyle)||void 0===o||null===(s=o.content)||void 0===s?void 0:s.modalContentStatus)?0:1:null===(i=u.CardStyle)||void 0===i||null===(n=i.content)||void 0===n?void 0:n.status,F=!!(E&&S&&Object.keys(E).length&&1==B&&1!=E.type),R=!!(E&&S&&Object.keys(E).length&&E.isProduct),L=!!(null!==u&&void 0!==u&&null!==(l=u.CardStyle)&&void 0!==l&&l.actionStatus&&a.HY||!a.HY),Y=a.HY&&R?" tb_post_modal_ts_p":"",W=`${a.HY?" tb_post_modal_ts_":""}${Y}`,O={maxHeight:R&&a.HY&&k.winWidth>991?k.height-(L?45:0):null};return E&&S&&Object.keys(E).length?j?"magento"==(null===D||void 0===D||null===(d=D.UgcProduct)||void 0===d?void 0:d.created_from)?(0,r.jsx)(A.A,{productImg:I,addtoCartPopup:j,productDetails:N,tagshopProductDeatil:D,closeCart:this.closeCart,onAddToCart:()=>this.setState({continueShopping:!0}),onSelectedVariant:t=>this.setState({selectedVariant:t}),wall:u,closePopUp:this.props.closePopUP}):(0,r.jsx)(H.A,{productImg:I,addtoCartPopup:j,productDetails:N,tagshopProductDeatil:D,closeCart:this.closeCart,onAddToCart:()=>this.setState({continueShopping:!0}),onSelectedVariant:t=>this.setState({selectedVariant:t}),wall:u,closePopUp:this.props.closePopUP}):(0,r.jsx)("div",{className:"tb_post_modal_modal "+(a.yR?"":"tb_post_wall_modal"),id:`tb_post_modal_modal-${S}`,children:(0,r.jsx)("div",{className:`tb_post_modal_modal_dialog${F&&!R?" tb_only_media_modal":""} ${L&&a.yR?" tb_post_modal_modal_full":""}${W}`,children:(0,r.jsxs)("div",{className:"tb_post_modal_conetent",children:[a.yR?(0,r.jsxs)("div",{className:"tb_post_modal_modal_head",children:[(0,r.jsxs)("div",{className:"tb_post_modal_modal_header",children:[(0,r.jsx)("div",{className:"tb_post_modal_post_link_small",children:(0,r.jsx)("div",{className:"tb_post_modal_post_address",children:E.link?(0,r.jsxs)("div",{className:"tb_post_modal_view_link",onClick:t=>window.open(E.link,"_blank"),children:[(0,r.jsxs)("div",{className:"tb_post_modal_view",children:[u.ThemeStyle.language.text.viewOn," ",E.network.name]}),(0,r.jsx)("div",{className:"tb_post_view_ico tb__icon tb-arrow-right-alt",children:" "})]}):null})}),a.yR?(0,r.jsx)("div",{className:"tb_post_modal_close_wrap",children:(0,r.jsx)("div",{className:"tb_post_modal_close_btn",onClick:this.closeWidgetPopUP,children:(0,r.jsx)("div",{className:"tb_post_close_ico tb__icon tb-close-alt",children:" "})})}):null]}),a.yR&&M?(0,r.jsxs)("div",{className:"tb_post_modal_navigation tb_post_modal_nav_content "+(1===E.type?"tb_post_modal_text_nav__":""),children:[(0,r.jsx)("div",{className:"tb_post_modal_nav tb_post_modal_prev_btn",onClick:this.featuredPopSliderChangeIndex(y-1),children:(0,r.jsx)("div",{className:"tb_post_nav tb__icon tb-arrow-left-alt",children:" "})}),(0,r.jsx)("div",{className:"tb_post_modal_nav tb_post_modal_nxt_btn",onClick:this.featuredPopSliderChangeIndex(y+1),children:(0,r.jsx)("div",{className:"tb_post_nav tb__icon tb-arrow-right-alt",children:" "})})]}):null]}):null,(0,r.jsx)("div",{className:"tb_post_modal_body_container",children:(0,r.jsxs)("div",{className:"tb_post_modal_modal_body",children:[1!=E.type?(0,r.jsxs)("div",{className:"tb_post_modal_details_left",children:[a.yR&&M?(0,r.jsxs)("div",{className:"tb_post_modal_navigation tb_post_modal_nav_img",children:[(0,r.jsx)("div",{className:"tb_post_modal_nav tb_post_modal_prev_btn",onClick:this.featuredPopSliderChangeIndex(y-1),children:(0,r.jsx)("div",{className:"tb_post_nav tb__icon tb-arrow-left-alt",children:" "})}),(0,r.jsx)("div",{className:"tb_post_modal_nav tb_post_modal_nxt_btn",onClick:this.featuredPopSliderChangeIndex(y+1),children:(0,r.jsx)("div",{className:"tb_post_nav tb__icon tb-arrow-right-alt",children:" "})})]}):null,(0,r.jsx)(m,{allSizeCallback:this.allSize,hideContent:F&&!R,Post:E,CardStyle:u.CardStyle,ThemeStyle:u.ThemeStyle,ThemeInfo:u.ThemeInfo,onUpdateProdImgIdx:this.onUpdateProdImgIdx,showTooltip:U})]}):null,(0,r.jsx)("div",{className:"tb_post_modal_details_right"+(1===E.type?" tb_post_modal_text__":""),children:(0,r.jsxs)("div",{className:"tb_post_modal_content_wrap",children:[(0,r.jsx)("div",{className:"tb_post_modal_content_in",style:O,children:(0,r.jsxs)("div",{className:"tb_post_modal_post_detail_wrap",children:[R?(0,r.jsx)(z,{item:E,wall:u,ProductSetting:u.ProductSetting,products:null!==(c=E.mediaList)&&void 0!==c&&c.length?null===(p=E.mediaList[T])||void 0===p?void 0:p.product:E.products,openCart:this.onClickOpenCart,showTooltipFun:this.showTooltipFun},`product_${E.id}`):null,(0,r.jsx)(w,{Post:E,ThemeStyle:u.ThemeStyle,CardStyle:u.CardStyle},`author-${E.id}`),F?null:(0,r.jsx)(C,{CardStyle:u.CardStyle,item:E,contentData:E.content,contentTitle:E.content.title,allSize:k,isProduct:null===(h=E.mediaList[T])||void 0===h?void 0:h.product,socialAction:L},E.id)]})}),L&&a.yR?(0,r.jsxs)("div",{className:"tb_post_modal_post_footer",children:[a.MH||a.aD||a.Vn?(0,r.jsx)("div",{className:"tb_post_modal_post_footer_report",children:(0,r.jsx)("div",{className:"tb_post_modal_post_report_media_btn_wrap__",onClick:t=>b(E),children:(0,r.jsx)("div",{className:"tb_post_modal_post_report_media_btn__",children:"Report"})})}):null,u.CardStyle.actionStatus||a.MH?(0,r.jsx)(P,{item:E,wall:u}):null]}):null]})}),!a.aD&&!a.Vn&&1==(null===u||void 0===u||null===(_=u.UserRule)||void 0===_?void 0:_.branding_lite)||g.isFreeAdsStatus?(0,r.jsx)($,{brandingNetworks:v,wallId:u.ThemeInfo.webId,themeID:null===u||void 0===u?void 0:u.ThemeInfo.id}):null]})})]})})}):null}}const M=(0,i.Ng)((t=>({loaderData:t.loaderData})),(t=>({closePopUP:e=>t((0,y.ng)(e)),reportMediaPopUp:e=>t((0,y.lM)(e)),nextData:(e,o,s,i,a,n,l)=>t((0,x.wF)(e,o,s,i,a,n,l))})))(E)},78167:(t,e,o)=>{o.r(e),o.d(e,{default:()=>n});var s=o(9950),i=o(91697),a=o(44414);class n extends s.PureComponent{render(){const{author:t,authorClass:e,networkId:o,size:s,inView:n}=this.props;return(0,a.jsx)("div",{className:e,style:{overflow:4==o?"visible":""},children:n?(0,a.jsx)("img",{className:`${e}__`,src:t.picture,"aria-label":"author",alt:t.name,width:s||44,height:s||44,onError:e=>{const s=(0,i.Yo)(o),a="#ffffff"==s?"000":s.replace("#","");e.target.src=t.errorPic?t.errorPic:`https://ui-avatars.com/api/?name=${t.name.replace(/\s/g,"")}&background=${a}&color=fff&length=1`}}):null},Math.random())}}},92663:(t,e,o)=>{o.r(e),o.d(e,{default:()=>l});var s=o(9950),i=o(91697),a=o(44414);const n=s.lazy((()=>o.e(620).then(o.bind(o,20620))));class l extends s.PureComponent{render(){const{networkId:t,networkClass:e,iconStyle:o}=this.props;return 505==(null===o||void 0===o?void 0:o.default)||[7,4,36].includes(t)?(0,a.jsx)(s.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:(0,a.jsx)(n,{networkId:t,networkClass:e})}):(0,a.jsx)("div",{className:`${e} tb__icon tb-${(0,i.EC)(t)}`,"aria-label":`post network ${(0,i.Oi)(t)}`,children:(0,a.jsx)("div",{})})}}},6723:(t,e,o)=>{o.r(e),o.d(e,{default:()=>l});var s=o(9950),i=o(76506),a=o(44414);const n=t=>{const{createdAt:e,timeClass:o}=t;return(0,a.jsx)("div",{className:o,role:"status","aria-label":`post timestamp ${(0,i.fF)(e)}`,children:(0,i.fF)(e)})},l=(0,s.memo)(n)},91697:(t,e,o)=>{o.d(e,{EC:()=>s,Oi:()=>a,Yo:()=>i});const s=t=>({0:"manual-upload",1:"twitter",2:"instagram",3:"facebook",4:"google",5:"pinterest",6:"flickr",7:"youtube",8:"vimeo",10:"linkedin",11:"tumblr",12:"rss",13:"star",15:"workplace",18:"instagram",19:"yelp",20:"slack",21:"yammer",23:"airbnb",25:"soundcloud",26:"giphy",27:"deviantart",28:"tiktok",29:"onsite-upload",30:"vkontakte",32:"chrome",33:"collabration",34:"amazon",35:"tripadvisor",36:"star",37:"aliexpress"}[t]||""),i=t=>({0:"#313A53",1:"#29a9e1",2:"#000000",3:"#1b74e4",4:"#4081ed",5:"#e60022",6:"#0a63dc",7:"#FF0000",8:"#1eb8eb",10:"#0a66c2",11:"#36465d",12:"#f78422",13:"#FABF04",15:"#4767ab",18:"#000000",19:"#be362e",20:"#510d4e",21:"#0078d4",23:"#ff7977",25:"#ff7700",26:"#000000",27:"#00e59b",28:"#000000",29:"#613983",30:"#0077FF",32:"#4c8bf5",33:"#4e69ed",34:"#4e69ed",35:"#60c196",36:"#00e9ff",37:"#E52F20"}[t]||""),a=t=>({0:"Manual Upload",1:"Twitter",2:"Instagram",3:"Facebook",4:"Google",5:"Pinterest",6:"Flickr",7:"YouTube",8:"Vimeo",10:"LinkedIn",11:"Tumblr",12:"RSS",13:"Star",15:"Workplace",18:"Instagram",19:"Yelp",20:"Slack",21:"Yammer",23:"Airbnb",25:"Soundcloud",26:"Giphy",27:"Deviantart",28:"Tiktok",29:"Review Hub",30:"Vkontakte",32:"Chrome Extension",33:"Collab with Creators",34:"Amazon",35:"Tripadvisor",36:"Review Hub",37:"Aliexpress"}[t]||"")}}]);