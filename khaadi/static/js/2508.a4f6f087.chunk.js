"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[548,2508,2663,2685,5044,5537,6723,7713,7949,8167,9649],{45285:(t,e,i)=>{i.d(e,{bs:()=>r});var s=i(80415),o=i(296),a=i(66345),l=i(28322),n=i(14313);let d=[];const r=t=>{t.persist();const e=t.target,{network:i,itemId:s,themeId:o}=e.dataset;if(1!=i||[3,4,16,47,50,55,60].includes(o))d.includes(t)||d.push(t);else{const t=document.querySelector(`.tb_media-${s}`);t&&(t.style.display="none")}1===d.length&&c()},c=async()=>{var t;const{postData:e,wall:i}=o.A.getState().appData;if(!i||!Object.keys(i).length||!d.length)return;const{User:r,Wall:u}=i,p=null===r||void 0===r?void 0:r.id,m=(a.HY,null===u||void 0===u?void 0:u.id),_=null===(t=d[0])||void 0===t?void 0:t.target,{filterId:v,network:b,itemId:g,load:f}=_.dataset,w=document.querySelector(`img[data-item-id="${g}"]`),x=null!==e&&void 0!==e&&e.completeDataObject?Object.values(e.completeDataObject).filter((t=>t.id===g)):[];if(null!==x&&void 0!==x&&x.length){var y;const t=await(async t=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((e=>t.includes(e)))||await fetch(t).then((t=>t.ok)).catch((()=>!1)))(null===(y=x[0])||void 0===y?void 0:y.postFileNew);if(!t&&w){if([2,18,3,28].includes(+b)&&"0"===f&&"34"!==v&&!_.src.includes("cloud.taggbox.com")){const t=((t,e,i)=>{var s,o,a,l,n;const{UserPlan:d,Wall:r}=e;return{table_name:null===d||void 0===d?void 0:d.db_table,...t,...null!==i&&void 0!==i&&i.length?{feedId:null===(s=i[0])||void 0===s?void 0:s.feedId,type:null===(o=i[0])||void 0===o?void 0:o.type,link:null===(a=i[0])||void 0===a?void 0:a.link,postFile:null===(l=i[0])||void 0===l?void 0:l.postFile,mediaFile:null===(n=i[0])||void 0===n?void 0:n.mediaFile}:{},url:null===r||void 0===r?void 0:r.url}})({wallId:m,postId:g,ownerId:p},i,x);try{const{data:e}=await(new n.A).post(a.t5,t,{headers:l.ML}),i=a.HY||a.MH?"":`https://images.${a.QR}/`;_.src="18"===b?`${i}${e.media}`:e.media}catch{_.src=s.gX}finally{h(_)}}else _.src=s.gX,h(_);d.shift(),c()}else{const t=`${s.th}/media/images/no-image.svg`;_.src=t,_.srcset=t,h(_),d.shift()}}},h=t=>t.setAttribute("data-load","1")},78167:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});var s=i(9950),o=i(91697),a=i(44414);class l extends s.PureComponent{render(){const{author:t,authorClass:e,networkId:i,size:s,inView:l}=this.props;return(0,a.jsx)("div",{className:e,style:{overflow:4==i?"visible":""},children:l?(0,a.jsx)("img",{className:`${e}__`,src:t.picture,"aria-label":"author",alt:t.name,width:s||44,height:s||44,onError:e=>{const s=(0,o.Yo)(i),a="#ffffff"==s?"000":s.replace("#","");e.target.src=t.errorPic?t.errorPic:`https://ui-avatars.com/api/?name=${t.name.replace(/\s/g,"")}&background=${a}&color=fff&length=1`}}):null},Math.random())}}},89874:(t,e,i)=>{i.d(e,{A:()=>u});var s=i(9950),o=i(10300),a=i(1823),l=i(21850),n=i(82652),d=i(44414);const r=(0,s.memo)((t=>{let{item:e}=t;const i=e.discount>0&&e.discount!==e.price,s=e.discount>0?e.discount:e.price;return(0,d.jsxs)("a",{hotspot:1,href:e.url,target:"_blank",rel:"noopener noreferrer",className:"tb_tooltip_wrap",children:[(0,d.jsx)("div",{hotspot:1,className:"tb_p_tooltip_title",children:e.title}),i&&(0,d.jsxs)("div",{hotspot:1,className:"tb_p_tooltip_price tb_price_disabled",children:[e.currency,e.price]}),(e.price>0||e.discount>0)&&(0,d.jsxs)("div",{hotspot:1,className:"tb_p_tooltip_price",children:[e.currency,s]})]})})),c=t=>{let{products:e,appData:i,Post:o,showTooltip:c,isPopup:h,dataItem:u}=t;const[p,m]=(0,s.useState)(null),_=(0,s.useMemo)((()=>{var t,e;return(null===i||void 0===i||null===(t=i.wall)||void 0===t||null===(e=t.ProductSetting)||void 0===e?void 0:e.Hotspot)||{}}),[i]);(0,s.useEffect)((()=>{if(c){const t=e.findIndex((t=>t.id===c));-1!==t&&m(t)}else m(null)}),[c,e]);const v=(0,s.useCallback)((t=>{var e,s,o,a;null!==i&&void 0!==i&&i.wall&&(0,l.hq)({type:1,action:2,wall:null===i||void 0===i||null===(e=i.wall)||void 0===e||null===(s=e.ThemeInfo)||void 0===s?void 0:s.webId,product_id:t.id,post:u.referenceId,owner:null===i||void 0===i||null===(o=i.wall)||void 0===o||null===(a=o.ThemeInfo)||void 0===a?void 0:a.ownerId,feed:u.feedId,currency:t.currencyCode,price:Number(t.price)>0?t.discount:t.price})}),[i,o]),b=(0,s.useCallback)(((t,e)=>{t.stopPropagation(),v(e),window.open(e.url,"_blank")}),[v]);return null!==_&&void 0!==_&&_.status?e.map(((t,e)=>{const i=`hotspot-${t.id}-${e}${h?"-pop":""}`,s=p===e;return(0,d.jsxs)("div",{id:i,className:"tb_hotspot_dot"+(s?" tb_hotspot_active_":""),role:"button",style:{top:t.hotspot.top,left:t.hotspot.left},onMouseEnter:()=>m(e),onMouseLeave:()=>m(null),onClick:e=>{b(e,t)},"data-tooltip-offset":7,children:[(0,d.jsx)("div",{hotspot:1,className:"tb_hotspot__ "+(0===_.type?"tb_hotspot_ani__":""),children:e+1}),(0,d.jsx)(n.A,{wallId:i,children:(0,d.jsx)(a.m_,{appendTo:"body","data-tooltip-id":`tooltip-${t.id}-${e}${h?"-pop":""}`,className:"tb_pro_tooltip",anchorSelect:`#${i}`,clickable:!0,...h?{isOpen:s}:{},children:(0,d.jsx)(r,{item:t})},e)})]},`${t.id}-${e}`)})):null},h=(0,s.memo)(c),u=(0,o.Ng)((t=>({appData:t.appData})))(h)},78262:(t,e,i)=>{i.d(e,{A:()=>r});var s=i(9950),o=i(76506),a=i(80415),l=i(45285),n=i(89874),d=i(44414);class r extends s.PureComponent{constructor(t){var e,i;super(t),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:t,offsetWidth:e}=this.mediaRef.current;this.setState({currentHeight:t,currentWidth:e})}},this.mediaSizeCalc=async()=>{const{Post:t,mediaOnly:e}=this.props,i=e||t.media;if((null===i||void 0===i||!i.height)&&(null===i||void 0===i||!i.width))try{var s;const{width:t,height:e}=await(0,o.TW)(null===i||void 0===i||null===(s=i.image)||void 0===s?void 0:s.small);this._isMounted&&this.setState({height:e,width:t})}catch(a){this._isMounted&&this.setState({height:300,width:300})}};const{mediaOnly:a,Post:l}=t;this.state={height:(null===a||void 0===a?void 0:a.height)||(null===l||void 0===l||null===(e=l.media)||void 0===e?void 0:e.height)||0,width:(null===a||void 0===a?void 0:a.width)||(null===l||void 0===l||null===(i=l.media)||void 0===i?void 0:i.width)||0,currentHeight:0,currentWidth:0},this.mediaRef=s.createRef()}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var t,e,i,s;const{height:o,width:r}=this.state,{ImageClass:c,Post:h,hotspot:u,size:p,blurBG:m,mediaOnly:_,inView:v,multiKey:b,index:g}=this.props,{id:f,link:w,products:x}=h,y=_||(null===h||void 0===h?void 0:h.media),{currentWidth:j,currentHeight:k}=this.state,S=p||100*o/r,C={paddingBottom:1===S?null:`${S}%`},P={backgroundImage:v?`url(${null===y||void 0===y||null===(t=y.image)||void 0===t?void 0:t.small})`:null},N=r>o?"100%":r/o*100+"%",$=r>o?o/r*100+"%":"100%",I=h.isProduct&&u&&h.hotspot,D={width:I&&p?N:null,height:I&&p?$:null};return(0,d.jsxs)("div",{className:`${c}_wrap_`,style:C,ref:this.mediaRef,children:[I&&m?(0,d.jsx)("div",{className:"tb_blur_bg_",style:P}):null,(0,d.jsxs)("div",{className:`${c}_wrap_in`,style:D,children:[I?(0,d.jsx)(n.A,{products:this.props.multiPic?h.mediaList[b].product:x,hotspot:h.hotspot,Post:h,showTooltip:null},g):null,v?(0,d.jsx)("img",{className:`${c} tb_media-${f}`,src:null===y||void 0===y||null===(e=y.image)||void 0===e?void 0:e.small,srcSet:`${null===y||void 0===y||null===(i=y.image)||void 0===i?void 0:i.small} 1x, ${null===y||void 0===y||null===(s=y.image)||void 0===s?void 0:s.large} 2x`,sizes:`${j}px`,loading:v?"eager":"lazy",decoding:"async",fetchPriority:v?"high":"low","data-id":f,height:k,width:j,"data-height":o,"data-width":r,"data-link":w,onLoad:this.onLoad,onError:t=>{t.target.src=`${a.th}/media/error/no-image.svg`,t.target.srcset=`${a.th}/media/error/no-image.svg`,(0,l.bs)(t)},alt:null===y||void 0===y?void 0:y.title,title:null===y||void 0===y?void 0:y.title},`${f}-${o}-${r}-${v}`):null]})]})}}},3720:(t,e,i)=>{i.d(e,{A:()=>c});var s=i(9950),o=i(38092),a=i.n(o),l=i(66345),n=i(76506),d=i(44414);class r extends s.Component{constructor(t){super(t),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:t,offsetWidth:e}=this.mediaRef.current;this.setState({currentHeight:t,currentWidth:e})}},this.mediaSizeCalc=async()=>{const{media:t}=this.props.Post;if((null===t||void 0===t||!t.height)&&(null===t||void 0===t||!t.width))try{var e;const{width:i,height:s}=await(0,n.TW)(null===t||void 0===t||null===(e=t.image)||void 0===e?void 0:e.small);this._isMounted&&this.setState({calcHeight:s,calcWidth:i})}catch(i){this._isMounted&&this.setState({calcHeight:300,calcWidth:300})}},this.setVideoLoaded=t=>{this._isMounted&&this.setState({videoLoaded:t})},this.state={loadError:!1,videoLoaded:!1,calcHeight:0,calcWidth:0,currentHeight:0,currentWidth:0},this.mediaRef=s.createRef(),this._isMounted=!1}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var t,e,i,s,o,n;const{VideoClass:r,Post:c,controls:h,autoPlay:u,handleVideoEnded:p,muted:m,intervalTime:_,size:v,inView:b}=this.props,{calcHeight:g,calcWidth:f,currentWidth:w,currentHeight:x}=this.state,{media:y,id:j,link:k,networkId:S}=c,C=1===v,P=null!==y&&void 0!==y&&y.height?null===y||void 0===y?void 0:y.height:g,N=null!==y&&void 0!==y&&y.width?null===y||void 0===y?void 0:y.width:f,$={paddingBottom:`${C?null:v||100*P/N}%`};return(0,d.jsx)("div",{className:`${r}_wrap_`,style:$,ref:this.mediaRef,children:(0,d.jsx)(a(),{className:`${r} tb_media-${j}`,url:null!==y&&void 0!==y&&null!==(t=y.video)&&void 0!==t&&t.clip?null===y||void 0===y||null===(e=y.video)||void 0===e?void 0:e.clip:b?null===y||void 0===y||null===(i=y.video)||void 0===i?void 0:i.full:null===y||void 0===y||null===(s=y.image)||void 0===s?void 0:s.small,"data-height":g,"data-width":f,"data-type":"video","data-network":S,"data-link":k,"data-item-id":j,"data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":N,"data-height":P,poster:null===y||void 0===y||null===(o=y.image)||void 0===o?void 0:o.small}},file:{attributes:{preload:"metadata",poster:null===y||void 0===y||null===(n=y.image)||void 0===n?void 0:n.small,height:x,width:w}}},loop:!(l.aD&&!l.HY&&null!==c&&void 0!==c&&c.loopStop)&&u,onError:t=>{C&&p&&setTimeout((()=>{this._isMounted&&p&&p()}),1e3*_),this.setVideoLoaded(!1)},autoPlay:b&&u?1:0,muted:m,volume:u?1:0,playsinline:1,onReady:()=>this.setVideoLoaded(!l.HY),playing:b&&u?1:0,controls:h||!1,onEnded:p,title:null===y||void 0===y?void 0:y.title},`${j}-${x}-${f}-${b}`)})}}const c=(0,s.memo)(r)},15537:(t,e,i)=>{i.r(e),i.d(e,{default:()=>n});var s=i(9950),o=i(66345),a=i(44414);const l=s.lazy((()=>i.e(620).then(i.bind(i,20620)))),n=t=>{const{Post:e,IconClass:i,isCenter:n,hideVideo:d,show:r}=t,c=!![3,5].includes(e.type),h=7===e.network.id,u=!!(e.mediaList&&e.mediaList.length>0),p=1===e.isAudio,m=!!e.isProduct,_=(0,a.jsx)(s.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:(0,a.jsx)(l,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"})}),v=(0,a.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:"  "}),b=(0,a.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:"  "}),g=(0,a.jsx)("div",{className:"tb__icon tb-"+(o.aD?"reel-fill tb_reel_ico":"video tb_video_ico"),children:"  "}),f=(0,a.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:"  "}),w=(0,a.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:"  "});return r?(0,a.jsxs)(a.Fragment,{children:[n&&(h||c)?(0,a.jsxs)("div",{className:`${i} tb__media_ico_c`,children:[c&&!h?w:"",c&&h?_:""]}):null,m||u||c?(0,a.jsxs)("div",{className:`${i} tb__media_ico_`,children:[m?f:"",u?v:"",n||!c||h||d?"":p?b:g]}):null]}):null}},92663:(t,e,i)=>{i.r(e),i.d(e,{default:()=>n});var s=i(9950),o=i(91697),a=i(44414);const l=s.lazy((()=>i.e(620).then(i.bind(i,20620))));class n extends s.PureComponent{render(){const{networkId:t,networkClass:e,iconStyle:i,isPopUp:n}=this.props;return(null===i||void 0===i?void 0:i.default)||[7,4,36].includes(t)?(0,a.jsx)(s.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:(0,a.jsx)(l,{networkId:t,networkClass:e})}):(0,a.jsx)("div",{className:`${e} tb__icon tb-${(0,o.EC)(t)}`,"aria-label":`post network ${(0,o.Oi)(t)}`,children:(0,a.jsx)("div",{})})}}},89649:(t,e,i)=>{i.r(e),i.d(e,{default:()=>d});var s=i(9950),o=i(66345),a=i(88740),l=i(76506),n=i(44414);class d extends s.PureComponent{constructor(t){super(t),this.contentRef=s.createRef()}componentDidMount(){setTimeout((()=>{var t,e;if(null!==(t=this.contentRef)&&void 0!==t&&null!==(e=t.current)&&void 0!==e&&e.clientHeight){var i,s;const t=(null===(i=this.contentRef)||void 0===i||null===(s=i.current)||void 0===s?void 0:s.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}}),100)}render(){const{CardStyle:t,contentClass:e,content:i,contentTitle:s,maxLines:d,isReadMore:r}=this.props,c=t.content.trimcontent&&!o.HY?t.content.trimcontent:0,h={WebkitLineClamp:d,textAlign:t.style.textAlign},u=(0,l.w)(i),p=`${e} ${r?"":""+(c?` tb_content_line-${c}`:"")} tb-cTBfont-${t.style.variant}`;return(0,n.jsxs)("div",{className:p,ref:this.contentRef,style:h,children:[s?(0,n.jsx)("div",{className:"tb_bold_txt__",children:(0,a.Ay)(s)}):null,(0,a.Ay)(u)]})}}},37949:(t,e,i)=>{i.r(e),i.d(e,{default:()=>o});i(9950);var s=i(44414);const o=t=>{const{sepClass:e}=t;return(0,s.jsx)("div",{className:e,children:"   "})}},72685:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});var s=i(9950),o=i(21850),a=i(44414);class l extends s.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{Post:i,ThemeInfo:s}=this.props;e.stopPropagation(),(0,o.hq)({type:2,action:2,wall:s.wallID,feed:i.feedId,post:i.referenceId?i.referenceId:i.id,owner:s.ownerId}),(0,o.x9)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{shareClass:t,Post:e}=this.props,{facebook:i,twitter:s,linkedin:o}=null===e||void 0===e?void 0:e.share,l=t=>{let{shareOn:e,icon:i}=t;return(0,a.jsx)("div",{className:"tb_share_icon_list",children:(0,a.jsx)("div",{onClick:this.onClickData(e),className:`tb_share_ico__ tb__icon tb-${i}`,title:i,children:(0,a.jsx)("div",{})})})};return(0,a.jsxs)("div",{className:`tb_share_wrapper ${t}`,children:[(0,a.jsx)("div",{className:"tb_share_button_ tb__icon tb-share",children:(0,a.jsx)("div",{})}),(0,a.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[i?(0,a.jsx)(l,{shareOn:i,icon:"facebook"}):"",s?(0,a.jsx)(l,{shareOn:s,icon:"twitter"}):"",o?(0,a.jsx)(l,{shareOn:o,icon:"linkedin"}):""]})]})}}},47713:(t,e,i)=>{i.r(e),i.d(e,{default:()=>o});var s=i(44414);const o=t=>{var e;let{CardStyle:i,btnClass:o,mode:a}=t;const l={fontFamily:null===i||void 0===i||null===(e=i.style)||void 0===e?void 0:e.font};return(0,s.jsx)("div",{className:`tb_shop_btn_wrap ${o}`,children:(0,s.jsx)("div",{className:"tb_shop_btn"+(a?" tb_shop_btn_light":" tb_shop_btn_dark"),style:l,children:i.shopText})})}},6723:(t,e,i)=>{i.r(e),i.d(e,{default:()=>n});var s=i(9950),o=i(76506),a=i(44414);const l=t=>{const{createdAt:e,timeClass:i}=t;return(0,a.jsx)("div",{className:i,role:"status","aria-label":`post timestamp ${(0,o.fF)(e)}`,children:(0,o.fF)(e)})},n=(0,s.memo)(l)},2508:(t,e,i)=>{i.r(e),i.d(e,{default:()=>S});var s=i(9950),o=i(10300),a=i(53556),l=(i(61038),i(66345)),n=i(52867),d=i(21850),r=i(78167),c=i(6723),h=i(37949),u=i(44414);const p=s.lazy((()=>Promise.resolve().then(i.bind(i,92663)))),m=t=>{let{Post:e,CardStyle:i}=t;const{author:o,networkId:a}=e,d=o.username&&o.username.length>0?`@${o.username}`:"",m=(0,n.zK)(o.name),_=!(!i.author.status||m),v=!(!i.author.status||!i.timeStatus||m||""==d);return(0,u.jsxs)("div",{className:"tb_hs_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:[(0,u.jsxs)("div",{className:"tb_hs_author",children:[_?(0,u.jsx)(r.default,{author:o,network:e.network,networkId:a,authorClass:"tb_hs_author_profile"}):"",(0,u.jsxs)("div",{className:"tb_hs_author_info",children:[_?(0,u.jsx)("div",{className:"tb_hs_authorname",children:o.name}):"",(0,u.jsxs)("div",{className:"tb_hs_post_info",children:[_?(0,u.jsx)("div",{className:"tb_hs_username",children:`@${d}`}):"",v?(0,u.jsx)(h.default,{sepClass:"tb_hs_seprator"}):"",i.timeStatus?(0,u.jsx)(c.default,{createdAt:e.createdAt,timeClass:`tb_hs_time tb-cTBfont-${i.author.variant}`}):""]})]})]}),l.O7?null:(0,u.jsx)("div",{className:"tb_hs_social_",children:(0,u.jsx)(s.Suspense,{fallback:(0,u.jsx)(u.Fragment,{}),children:(0,u.jsx)(p,{networkClass:"tb_hs_social__ico",networkId:a,iconStyle:i.icon})})})]})};var _=i(78262),v=i(3720),b=i(15537);const g=t=>{let{Post:e,CardStyle:i,ThemeStyle:s,ProductSetting:o,index:a,inView:n}=t;const d=l.MH&&i.style.ratio?i.style.ratio:100,r=!(![3,5].includes(e.type)||1!=s.autoPlay||!n),c=!l.HY||!e.hotspot;return(0,u.jsxs)("div",{className:"tb_hs_media_wrap",children:[(0,u.jsx)(b.default,{Post:e,IconClass:"tb_hs_media_icon",show:c,hideVideo:s.autoPlay}),r?(0,u.jsx)(v.A,{VideoClass:"tb_hs_video",Post:e,size:d,isCover:!0,muted:!0,autoPlay:!0,index:a,inView:n},e.id):(0,u.jsx)(_.A,{ImageClass:"tb_hs_image",Post:e,size:d,ProductSetting:o,hotspot:!0,blurBG:l.HY,index:a,inView:n},e.id)]})};var f=i(89649),w=i(92663),x=i(47713),y=i(72685);const j=t=>{let{onClickPopUpSlider:e,postSizeInPx:i,index:o,ThemeStyle:a,CardStyle:d,Post:r,ProductSetting:c,ThemeInfo:h,clickToShowPopUp:p}=t;const{networkId:_}=r,{style:v}=d,b=1!==r.type,j=d.content.trimcontent?(0,n.Ex)(r.content.text,200):r.content.text,k=i<200,S=!d.content.status,C=r.isShopIcon?0==S:1!=d.content.status,P=!!r.isShopIcon&&0!=S,N=0==d.style.mode&&l.HY?"light":"dark",$=l.MH?"tb_hs_color_overlay":"tb_hs_post_overlay-"+N,I={backgroundColor:l.MH?d.style.background:""};return(0,s.useEffect)((()=>{r.isPopUp&&e(o,r)}),[o,r.isPopUp,r]),(0,u.jsx)("div",{id:`tb_hs_id-${r.id}`,className:"tb_hs_post_wrapper"+(k?" tb_hs_post_wrapper2x":""),style:{padding:v.padding/2,opacity:1,transition:"opacity .5s ease-in-out"},"tb-product":r.isShopIcon?1:r.isHotspot?2:0,"area-label":r.content.text,role:"article",children:(0,u.jsxs)("div",{id:r.id,className:"tb_hs_post_in"+(l.HY?" tb_hs_post_ani":""),onClick:p(o,r),role:"button","aria-label":"Popup",children:[b?(0,u.jsx)(g,{Post:r,CardStyle:d,ThemeStyle:a,ProductSetting:c,index:o,inView:!0},o):"",r.isHotspot?null:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:"tb_hs_post_details",children:[(0,u.jsxs)("div",{className:"tb_hs_contant_wrapper",children:[l.HY?(0,u.jsx)("div",{className:"tb_hs_social_",children:(0,u.jsx)(w.default,{networkClass:"tb_hs_social__ico",networkId:_,iconStyle:d.icon})}):null,P?(0,u.jsx)(x.default,{CardStyle:d,btnClass:"tb_hs_btn_wrap"}):null,C||1==r.type?(0,u.jsx)(f.default,{contentClass:"tb_hs_content",Post:r,content:j,CardStyle:d,contentTitle:r.content.title}):null]}),l.HY?null:(0,u.jsx)(m,{Post:r,CardStyle:d}),r.share.status?(0,u.jsx)(y.default,{Post:r,ThemeInfo:h,shareClass:"tb_hs_share_container"}):null]}),r.isHotspot?null:(0,u.jsx)("div",{className:`tb_hs_post_overlay ${$}`,style:I,children:(0,u.jsx)("div",{})})]})]})})};class k extends s.PureComponent{constructor(t){super(t),this.handleKeyPress=t=>{try{const{ThemeStyle:i}=this.props;if(1==i.slide.autoSlide){if(!["INPUT","TEXTAREA"].includes(t.target.tagName)&&"Space"===t.code){const{parentID:i}=this.props;t.preventDefault();var e=this.inputRefs[i].splide.Components.Autoplay;e.isPaused()?e.play():e.pause()}}}catch(i){}},this.requestData=()=>{const{appendData:t,preRender:e,hasMoreData:i,nextData:s,ThemeStyle:o,ThemeInfo:a}=this.props;!this.state.loadData&&this.updatepost(0),i&&s(l.HY?a.webId:a.wallId,Math.floor(Date.now()/1e3),o.totalPosts,t.networkID,t.after,e,t.heightEvent)},this.autoScrollSlider=t=>{const{ThemeStyle:e}=this.props,i=e.autoScrollStatus;if(t.on("drag",(()=>{this.isDragging=!0,!this.state.loadData&&this.updatepost(0)})),t.on("move",(()=>{!this.state.loadData&&!this.isDragging&&this.updatepost(3)})),1==i||l.HY){t.index,t.length,t._o.perPage;this.requestData()}},this.updatepost=t=>{this.state.loadData||(this.setState({loadData:!0}),setTimeout((()=>this.props.loadMoredata()),1e3*t))},this.handleResize=()=>{this.setState({resizeKey:Math.random()}),this.splideRef.current&&this.splideRef.current.refresh()},this.state={parent_id:"",postData:[],loadData:!1,resizeKey:Math.random()},this.inputRefs={},this.isDragging=!1,this.splideRef=(0,s.createRef)()}componentDidMount(){setTimeout((()=>{const t=document.querySelectorAll(".splide__slide");t&&t.forEach((t=>{t.removeAttribute("aria-hidden"),t.removeAttribute("role")}))}),100);const{Post:t,loadBranding:e}=this.props;this.setState({Post:t}),window.addEventListener("keydown",this.handleKeyPress),window.addEventListener("resize",this.handleResize),e()}componentWillUnmount(){window.removeEventListener("keydown",this.handleKeyPress),window.removeEventListener("resize",this.handleResize)}render(){const{postData:t,completeDataObject:e,CardStyle:i,ThemeStyle:s,ProductSetting:o,ThemeInfo:d,onClickToCTA:r,parentID:c,loaderData:h,onClickPopUpSlider:p,containerSize:m,clickToShowPopUp:_}=this.props,{resizeKey:v}=this.state,b=c;var g=[];const f=s.slide.autoSlide,w=s.slide.slideDuration,x=s.row&&0!==s.row?t.length<15&&(l.aD||l.Vn)?1:s.row:1,y=Math.max((m.width/310).toFixed(),1),k=(0,n.GH)(m.width,s.column,y);for(var S=0,C=t.length;S<C;)g.push(t.slice(S,S+=x));const P=k>=C,N={type:"slide",rewind:!0,speed:1e3,interval:1===f?1e3*parseInt(w):5e3,perPage:k,perMove:1,gap:0,autoplay:1===f,padding:0,updateOnMove:!0,dragThreshold:1e3,pagination:!1,arrows:!P};return""!=c?(0,u.jsx)("div",{className:"tb_hs_post_container",children:g.length?(0,u.jsxs)(a.eB,{ref:t=>{this.splideRef=t,this.inputRefs[b]=t},hasTrack:!1,className:"tb_hs_post_slider",options:N,onMove:this.autoScrollSlider,children:[(0,u.jsx)("div",{className:"splide__track",children:(0,u.jsx)("div",{className:"splide__list",children:(s.row>1&&1!==g.length&&g.length%2!==0?g.pop():g)&&g&&g.length>0&&g.map(((t,a)=>(0,u.jsx)("div",{className:`splide__slide splide__${a}`,children:t.map(((t,l)=>{const n=e[t];return(0,u.jsx)("div",{className:"tb_hs_col_wrap","data-id":n.id,children:(0,u.jsx)(j,{Post:n,index:a,CardStyle:i,ThemeStyle:s,ProductSetting:o,ThemeInfo:d,onClickToCTA:r,onClickPopUpSlider:p,postSizeInPx:m.width/k,clickToShowPopUp:_})},l)}))},`tb_${a}_${a}`)))})}),(0,u.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_hs_arrow_wrapper_",children:[(0,u.jsx)("div",{className:"tb_hs_arrow splide__arrow splide__arrow--prev tb_hs_arrow tb_hs_arrow_left__ tb__icon tb-arrow-left-alt",role:"button","aria-label":"Go to previous slide",children:(0,u.jsx)("div",{})}),(0,u.jsx)("div",{className:"tb_hs_arrow splide__arrow splide__arrow--next  tb_hs_arrow_right__ tb__icon tb-arrow-right-alt "+(h.isShowMoreLoading?"tb_a_spinner":""),onClick:l.HY?t=>this.requestData():null,role:"button","aria-label":"Go to next slide",children:(0,u.jsx)("div",{})})]})]},v):null}):null}}const S=(0,o.Ng)((t=>({loaderData:t.loaderData})),(t=>({nextData:(e,i,s,o,a,l,n,r)=>t((0,d.wF)(e,i,s,o,a,l,n,r))})))(k)},91697:(t,e,i)=>{i.d(e,{EC:()=>s,Oi:()=>a,Yo:()=>o});const s=t=>({0:"manual-upload",1:"twitter",2:"instagram",3:"facebook",4:"google",5:"pinterest",6:"flickr",7:"youtube",8:"vimeo",10:"linkedin",11:"tumblr",12:"rss",13:"star",15:"workplace",18:"instagram",19:"yelp",20:"slack",21:"yammer",23:"airbnb",25:"soundcloud",26:"giphy",27:"deviantart",28:"tiktok",29:"onsite-upload",30:"vkontakte",32:"chrome",33:"collabration",34:"amazon",35:"tripadvisor",36:"star",37:"aliexpress"}[t]||""),o=t=>({0:"#313A53",1:"#29a9e1",2:"#000000",3:"#1b74e4",4:"#4081ed",5:"#e60022",6:"#0a63dc",7:"#FF0000",8:"#1eb8eb",10:"#0a66c2",11:"#36465d",12:"#f78422",13:"#FABF04",15:"#4767ab",18:"#000000",19:"#be362e",20:"#510d4e",21:"#0078d4",23:"#ff7977",25:"#ff7700",26:"#000000",27:"#00e59b",28:"#000000",29:"#613983",30:"#0077FF",32:"#4c8bf5",33:"#4e69ed",34:"#4e69ed",35:"#60c196",36:"#00e9ff",37:"#E52F20"}[t]||""),a=t=>({0:"Manual Upload",1:"Twitter",2:"Instagram",3:"Facebook",4:"Google",5:"Pinterest",6:"Flickr",7:"YouTube",8:"Vimeo",10:"LinkedIn",11:"Tumblr",12:"RSS",13:"Star",15:"Workplace",18:"Instagram",19:"Yelp",20:"Slack",21:"Yammer",23:"Airbnb",25:"Soundcloud",26:"Giphy",27:"Deviantart",28:"Tiktok",29:"Review Hub",30:"Vkontakte",32:"Chrome Extension",33:"Collab with Creators",34:"Amazon",35:"Tripadvisor",36:"Review Hub",37:"Aliexpress"}[t]||"")},61038:()=>{}}]);