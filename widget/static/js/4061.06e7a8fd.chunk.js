"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[531,548,2663,2685,4061,5507,5537,6723,7949,8167,9649],{45285:(t,e,i)=>{i.d(e,{bs:()=>d});var o=i(80415),s=i(296),a=i(66345),l=i(28322),n=i(14313);let r=[];const d=t=>{t.persist();const e=t.target,{network:i,itemId:o,themeId:s}=e.dataset;if(1!=i||[3,4,16,47,50,55,60].includes(s))r.includes(t)||r.push(t);else{const t=document.querySelector(`.tb_media-${o}`);t&&(t.style.display="none")}1===r.length&&c()},c=async()=>{var t;const{postData:e,wall:i}=s.A.getState().appData;if(!i||!Object.keys(i).length||!r.length)return;const{User:d,Wall:h}=i,u=null===d||void 0===d?void 0:d.id,m=(a.HY,null===h||void 0===h?void 0:h.id),p=null===(t=r[0])||void 0===t?void 0:t.target,{filterId:b,network:v,itemId:w,load:f}=p.dataset,g=document.querySelector(`img[data-item-id="${w}"]`),x=null!==e&&void 0!==e&&e.completeDataObject?Object.values(e.completeDataObject).filter((t=>t.id===w)):[];if(null!==x&&void 0!==x&&x.length){var k;const t=await(async t=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((e=>t.includes(e)))||await fetch(t).then((t=>t.ok)).catch((()=>!1)))(null===(k=x[0])||void 0===k?void 0:k.postFileNew);if(!t&&g){if([2,18,3,28].includes(+v)&&"0"===f&&"34"!==b&&!p.src.includes("cloud.taggbox.com")){const t=((t,e,i)=>{var o,s,a,l,n;const{UserPlan:r,Wall:d}=e;return{table_name:null===r||void 0===r?void 0:r.db_table,...t,...null!==i&&void 0!==i&&i.length?{feedId:null===(o=i[0])||void 0===o?void 0:o.feedId,type:null===(s=i[0])||void 0===s?void 0:s.type,link:null===(a=i[0])||void 0===a?void 0:a.link,postFile:null===(l=i[0])||void 0===l?void 0:l.postFile,mediaFile:null===(n=i[0])||void 0===n?void 0:n.mediaFile}:{},url:null===d||void 0===d?void 0:d.url}})({wallId:m,postId:w,ownerId:u},i,x);try{const{data:e}=await(new n.A).post(a.t5,t,{headers:l.ML}),i=a.HY||a.MH?"":`https://images.${a.QR}/`;p.src="18"===v?`${i}${e.media}`:e.media}catch{p.src=o.gX}finally{_(p)}}else p.src=o.gX,_(p);r.shift(),c()}else{const t=`${o.th}/media/images/no-image.svg`;p.src=t,p.srcset=t,_(p),r.shift()}}},_=t=>t.setAttribute("data-load","1")},78167:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});var o=i(9950),s=i(91697),a=i(44414);class l extends o.PureComponent{render(){const{author:t,authorClass:e,networkId:i,size:o,inView:l}=this.props;return(0,a.jsx)("div",{className:e,style:{overflow:4==i?"visible":""},children:l?(0,a.jsx)("img",{className:`${e}__`,src:t.picture,"aria-label":"author",alt:t.name,width:o||44,height:o||44,onError:e=>{const o=(0,s.Yo)(i),a="#ffffff"==o?"000":o.replace("#","");e.target.src=t.errorPic?t.errorPic:`https://ui-avatars.com/api/?name=${t.name.replace(/\s/g,"")}&background=${a}&color=fff&length=1`}}):null},Math.random())}}},60531:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});var o=i(9950),s=i(44414);class a extends o.PureComponent{render(){const{Post:t,ctaClass:e,onClickToCTA:i}=this.props,{cta:o}=t,a={color:null===o||void 0===o?void 0:o.color,backgroundColor:null===o||void 0===o?void 0:o.background};return(0,s.jsxs)("div",{className:e,style:a,role:"button",tabIndex:"0","aria-label":"CTA Button",onClick:e=>{e.stopPropagation(),i(t),window.open(`${o.url}`,"_blank")},children:[" ",o.text]})}}const l=a},89874:(t,e,i)=>{i.d(e,{A:()=>u});var o=i(9950),s=i(10300),a=i(1823),l=i(76506),n=i(21850),r=i(82652),d=i(44414);const c=(0,o.memo)((t=>{let{item:e}=t;const i=e.discount>0&&e.discount!==e.price,o=e.discount>0?e.discount:e.price;return(0,d.jsxs)("a",{hotspot:1,href:e.url,target:"_blank",rel:"noopener noreferrer",className:"tb_tooltip_wrap",children:[(0,d.jsx)("div",{hotspot:1,className:"tb_p_tooltip_title",children:e.title}),i&&(0,d.jsxs)("div",{hotspot:1,className:"tb_p_tooltip_price tb_price_disabled",children:[e.currency,e.price]}),(e.price>0||e.discount>0)&&(0,d.jsxs)("div",{hotspot:1,className:"tb_p_tooltip_price",children:[e.currency,o]})]})})),_=t=>{let{products:e,appData:i,Post:s,showTooltip:_,isPopup:h}=t;const[u,m]=(0,o.useState)(null),p=(0,o.useMemo)((()=>{var t,e;return(null===i||void 0===i||null===(t=i.wall)||void 0===t||null===(e=t.ProductSetting)||void 0===e?void 0:e.Hotspot)||{}}),[i]);(0,o.useEffect)((()=>{if(_){const t=e.findIndex((t=>t.id===_));-1!==t&&m(t)}else m(null)}),[_,e]);const b=(0,o.useCallback)((t=>{null!==i&&void 0!==i&&i.wall&&(0,n.hq)({})}),[i,s]),v=(0,o.useCallback)(((t,e)=>{t.stopPropagation(),b(e),window.open(e.url,"_blank")}),[b]);return null!==p&&void 0!==p&&p.status?e.map(((t,e)=>{const i=`hotspot-${t.id}-${(0,l.Ul)()}-`,o=u===e;return(0,d.jsxs)("div",{id:i,className:"tb_hotspot_dot"+(o?" tb_hotspot_active_":""),role:"button",style:{top:t.hotspot.top,left:t.hotspot.left},onMouseEnter:()=>m(e),onMouseLeave:()=>m(null),onClick:e=>{v(e,t)},"data-tooltip-offset":7,children:[(0,d.jsx)("div",{hotspot:1,className:"tb_hotspot__ "+(0===p.type?"tb_hotspot_ani__":""),children:e+1}),(0,d.jsx)(r.A,{wallId:i,children:(0,d.jsx)(a.m_,{appendTo:"body","data-tooltip-id":`tooltip-${t.id}-${Math.random().toString(36).substr(2,9)}`,className:"tb_pro_tooltip",anchorSelect:`#${i}`,clickable:!0,...h?{isOpen:o}:{},children:(0,d.jsx)(c,{item:t})},e)})]},`${t.id}-${e}`)})):null},h=(0,o.memo)(_),u=(0,s.Ng)((t=>({appData:t.appData})))(h)},78262:(t,e,i)=>{i.d(e,{A:()=>d});var o=i(9950),s=i(76506),a=i(80415),l=i(45285),n=i(89874),r=i(44414);class d extends o.PureComponent{constructor(t){var e,i;super(t),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:t,offsetWidth:e}=this.mediaRef.current;this.setState({currentHeight:t,currentWidth:e})}},this.mediaSizeCalc=async()=>{const{Post:t,mediaOnly:e}=this.props,i=e||t.media;if((null===i||void 0===i||!i.height)&&(null===i||void 0===i||!i.width))try{var o;const{width:t,height:e}=await(0,s.TW)(null===i||void 0===i||null===(o=i.image)||void 0===o?void 0:o.small);this._isMounted&&this.setState({height:e,width:t})}catch(a){this._isMounted&&this.setState({height:300,width:300})}};const{mediaOnly:a,Post:l}=t;this.state={height:(null===a||void 0===a?void 0:a.height)||(null===l||void 0===l||null===(e=l.media)||void 0===e?void 0:e.height)||0,width:(null===a||void 0===a?void 0:a.width)||(null===l||void 0===l||null===(i=l.media)||void 0===i?void 0:i.width)||0,currentHeight:0,currentWidth:0},this.mediaRef=o.createRef()}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var t,e,i,o;const{height:s,width:d}=this.state,{ImageClass:c,Post:_,hotspot:h,size:u,blurBG:m,ProductSetting:p,mediaOnly:b,inView:v,multiKey:w,index:f}=this.props,{id:g,link:x,products:k}=_,j=b||(null===_||void 0===_?void 0:_.media),{currentWidth:N,currentHeight:C}=this.state,I=u||100*s/d,y={paddingBottom:1===I?null:`${I}%`},$={backgroundImage:v?`url(${null===j||void 0===j||null===(t=j.image)||void 0===t?void 0:t.small})`:null},T=d>s?"100%":d/s*100+"%",P=d>s?s/d*100+"%":"100%",D=_.isProduct&&h&&_.hotspot,S={width:D&&u?T:null,height:D&&u?P:null};return(0,r.jsxs)("div",{className:`${c}_wrap_`,style:y,ref:this.mediaRef,children:[D&&m?(0,r.jsx)("div",{className:"tb_blur_bg_",style:$}):null,(0,r.jsxs)("div",{className:`${c}_wrap_in`,style:S,children:[D?(0,r.jsx)(n.A,{products:this.props.multiPic?_.mediaList[w].product:k,ProductSetting:p,hotspot:_.hotspot,dataPost:_,showTooltip:null},f):null,v?(0,r.jsx)("img",{className:`${c} tb_media-${g}`,src:null===j||void 0===j||null===(e=j.image)||void 0===e?void 0:e.small,srcSet:`${null===j||void 0===j||null===(i=j.image)||void 0===i?void 0:i.small} 1x, ${null===j||void 0===j||null===(o=j.image)||void 0===o?void 0:o.large} 2x`,sizes:`${N}px`,loading:v?"eager":"lazy",decoding:"async",fetchPriority:v?"high":"low","data-id":g,height:C,width:N,"data-height":s,"data-width":d,"data-link":x,onLoad:this.onLoad,onError:t=>{t.target.src=`${a.th}/media/error/no-image.svg`,t.target.srcset=`${a.th}/media/error/no-image.svg`,(0,l.bs)(t)},alt:null===j||void 0===j?void 0:j.title,title:null===j||void 0===j?void 0:j.title},`${g}-${s}-${d}-${v}`):null]})]})}}},3720:(t,e,i)=>{i.d(e,{A:()=>c});var o=i(9950),s=i(38092),a=i.n(s),l=i(66345),n=i(76506),r=i(44414);class d extends o.Component{constructor(t){super(t),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:t,offsetWidth:e}=this.mediaRef.current;this.setState({currentHeight:t,currentWidth:e})}},this.mediaSizeCalc=async()=>{const{media:t}=this.props.Post;if((null===t||void 0===t||!t.height)&&(null===t||void 0===t||!t.width))try{var e;const{width:i,height:o}=await(0,n.TW)(null===t||void 0===t||null===(e=t.image)||void 0===e?void 0:e.small);this._isMounted&&this.setState({calcHeight:o,calcWidth:i})}catch(i){this._isMounted&&this.setState({calcHeight:300,calcWidth:300})}},this.setVideoLoaded=t=>{this._isMounted&&this.setState({videoLoaded:t})},this.state={loadError:!1,videoLoaded:!1,calcHeight:0,calcWidth:0,currentHeight:0,currentWidth:0},this.mediaRef=o.createRef(),this._isMounted=!1}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var t,e,i,o,s,n;const{VideoClass:d,Post:c,controls:_,autoPlay:h,handleVideoEnded:u,muted:m,intervalTime:p,size:b,inView:v}=this.props,{calcHeight:w,calcWidth:f,currentWidth:g,currentHeight:x}=this.state,{media:k,id:j,link:N,networkId:C}=c,I=1===b,y=null!==k&&void 0!==k&&k.height?null===k||void 0===k?void 0:k.height:w,$=null!==k&&void 0!==k&&k.width?null===k||void 0===k?void 0:k.width:f,T={paddingBottom:`${I?null:b||100*y/$}%`};return(0,r.jsx)("div",{className:`${d}_wrap_`,style:T,ref:this.mediaRef,children:(0,r.jsx)(a(),{className:`${d} tb_media-${j}`,url:null!==k&&void 0!==k&&null!==(t=k.video)&&void 0!==t&&t.clip?null===k||void 0===k||null===(e=k.video)||void 0===e?void 0:e.clip:v?null===k||void 0===k||null===(i=k.video)||void 0===i?void 0:i.full:null===k||void 0===k||null===(o=k.image)||void 0===o?void 0:o.small,"data-height":w,"data-width":f,"data-type":"video","data-network":C,"data-link":N,"data-item-id":j,"data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":$,"data-height":y,poster:null===k||void 0===k||null===(s=k.image)||void 0===s?void 0:s.small}},file:{attributes:{preload:"metadata",poster:null===k||void 0===k||null===(n=k.image)||void 0===n?void 0:n.small,height:x,width:g}}},loop:!(l.aD&&!l.HY&&null!==c&&void 0!==c&&c.loopStop)&&h,onError:t=>{I&&u&&setTimeout((()=>{this._isMounted&&u&&u()}),1e3*p),this.setVideoLoaded(!1)},autoPlay:v&&h?1:0,muted:m,volume:h?1:0,playsinline:1,onReady:()=>this.setVideoLoaded(!l.HY),playing:v&&h?1:0,controls:_||!1,onEnded:u,title:null===k||void 0===k?void 0:k.title},`${j}-${x}-${f}-${v}`)})}}const c=(0,o.memo)(d)},15537:(t,e,i)=>{i.r(e),i.d(e,{default:()=>n});var o=i(9950),s=i(66345),a=i(44414);const l=o.lazy((()=>i.e(620).then(i.bind(i,20620)))),n=t=>{const{Post:e,IconClass:i,isCenter:n,hideVideo:r,show:d}=t,c=!![3,5].includes(e.type),_=7===e.network.id,h=!!(e.mediaList&&e.mediaList.length>0),u=1===e.isAudio,m=!!e.isProduct,p=(0,a.jsx)(o.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:(0,a.jsx)(l,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"})}),b=(0,a.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:"  "}),v=(0,a.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:"  "}),w=(0,a.jsx)("div",{className:"tb__icon tb-"+(s.aD?"reel-fill tb_reel_ico":"video tb_video_ico"),children:"  "}),f=(0,a.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:"  "}),g=(0,a.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:"  "});return d?(0,a.jsxs)(a.Fragment,{children:[n&&(_||c)?(0,a.jsxs)("div",{className:`${i} tb__media_ico_c`,children:[c&&!_?g:"",c&&_?p:""]}):null,m||h||c?(0,a.jsxs)("div",{className:`${i} tb__media_ico_`,children:[m?f:"",h?b:"",n||!c||_||r?"":u?v:w]}):null]}):null}},92663:(t,e,i)=>{i.r(e),i.d(e,{default:()=>n});var o=i(9950),s=i(91697),a=i(44414);const l=o.lazy((()=>i.e(620).then(i.bind(i,20620))));class n extends o.PureComponent{render(){const{networkId:t,networkClass:e,iconStyle:i,isPopUp:n}=this.props;return(null===i||void 0===i?void 0:i.default)||[7,4,36].includes(t)?(0,a.jsx)(o.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:(0,a.jsx)(l,{networkId:t,networkClass:e})}):(0,a.jsx)("div",{className:`${e} tb__icon tb-${(0,s.EC)(t)}`,"aria-label":`post network ${(0,s.Oi)(t)}`,children:(0,a.jsx)("div",{})})}}},89649:(t,e,i)=>{i.r(e),i.d(e,{default:()=>r});var o=i(9950),s=i(66345),a=i(88740),l=i(76506),n=i(44414);class r extends o.PureComponent{constructor(t){super(t),this.contentRef=o.createRef()}componentDidMount(){setTimeout((()=>{var t,e;if(null!==(t=this.contentRef)&&void 0!==t&&null!==(e=t.current)&&void 0!==e&&e.clientHeight){var i,o;const t=(null===(i=this.contentRef)||void 0===i||null===(o=i.current)||void 0===o?void 0:o.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}}),100)}render(){const{CardStyle:t,contentClass:e,content:i,contentTitle:o,maxLines:r,isReadMore:d}=this.props,c=t.content.trimcontent&&!s.HY?t.content.trimcontent:0,_={WebkitLineClamp:r,textAlign:t.style.textAlign},h=(0,l.w)(i),u=`${e} ${d?"":""+(c?` tb_content_line-${c}`:"")} tb-cTBfont-${t.style.variant}`;return(0,n.jsxs)("div",{className:u,ref:this.contentRef,style:_,children:[o?(0,n.jsx)("div",{className:"tb_bold_txt__",children:(0,a.Ay)(o)}):null,(0,a.Ay)(h)]})}}},55507:(t,e,i)=>{i.r(e),i.d(e,{default:()=>n});var o=i(9950),s=i(44414);const a=t=>{let{networkId:e}=t;const{className:i,color:o}={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,s.jsx)("div",{className:i,style:{color:o},"tb-network":e,children:(0,s.jsx)("div",{})})},l=t=>{let{ThemeID:e,networkId:i}=t;const{className:o,color:a}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,s.jsx)("div",{className:o,style:{color:a},"tb-network":i})};class n extends o.PureComponent{render(){const{rating:t,networkId:e,ThemeID:i}=this.props;return(0,s.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,o)=>i?(0,s.jsx)(l,{ThemeID:i,networkId:e},o):(0,s.jsx)(a,{networkId:e},o))):null})}}},37949:(t,e,i)=>{i.r(e),i.d(e,{default:()=>s});i(9950);var o=i(44414);const s=t=>{const{sepClass:e}=t;return(0,o.jsx)("div",{className:e,children:"   "})}},72685:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});var o=i(9950),s=i(21850),a=i(44414);class l extends o.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{Post:i,ThemeInfo:o}=this.props;e.stopPropagation(),(0,s.hq)({type:2,action:2,wall:o.wallID,feed:i.feedId,post:i.referenceId?i.referenceId:i.id,owner:o.ownerId}),(0,s.x9)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{shareClass:t,Post:e}=this.props,{facebook:i,twitter:o,linkedin:s}=null===e||void 0===e?void 0:e.share,l=t=>{let{shareOn:e,icon:i}=t;return(0,a.jsx)("div",{className:"tb_share_icon_list",children:(0,a.jsx)("div",{onClick:this.onClickData(e),className:`tb_share_ico__ tb__icon tb-${i}`,title:i,children:(0,a.jsx)("div",{})})})};return(0,a.jsxs)("div",{className:`tb_share_wrapper ${t}`,children:[(0,a.jsx)("div",{className:"tb_share_button_ tb__icon tb-share",children:(0,a.jsx)("div",{})}),(0,a.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[i?(0,a.jsx)(l,{shareOn:i,icon:"facebook"}):"",o?(0,a.jsx)(l,{shareOn:o,icon:"twitter"}):"",s?(0,a.jsx)(l,{shareOn:s,icon:"linkedin"}):""]})]})}}},6723:(t,e,i)=>{i.r(e),i.d(e,{default:()=>n});var o=i(9950),s=i(76506),a=i(44414);const l=t=>{const{createdAt:e,timeClass:i}=t;return(0,a.jsx)("div",{className:i,role:"status","aria-label":`post timestamp ${(0,s.fF)(e)}`,children:(0,s.fF)(e)})},n=(0,o.memo)(l)},84061:(t,e,i)=>{i.r(e),i.d(e,{default:()=>I});var o=i(9950),s=i(78167),a=i(6723),l=i(92663),n=i(37949),r=i(44414);const d=t=>{let{author:e,personalization:i,postTime:o,network:d,ThemeRule:c}=t;const _=e.username&&e.username.length>0?`@${e.username}`:"",h=!(!i.postAuthor||e.isInstaUser),u=!(!i.postAuthor||!i.postTime||e.isInstaUser);return(0,r.jsxs)("div",{className:"tb_wt_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:[(0,r.jsxs)("div",{className:"tb_wt_author",children:[h?(0,r.jsx)(s.default,{author:e,network:d,authorClass:"tb_wt_author_profile"}):"",(0,r.jsxs)("div",{className:"tb_wt_author_info",children:[h?(0,r.jsx)("div",{className:"tb_wt_authorname",children:e.name}):"",(0,r.jsxs)("div",{className:"tb_wt_post_info",children:[h?(0,r.jsx)("div",{className:"tb_wt_username",children:_}):"",u?(0,r.jsx)(n.default,{sepClass:"tb_wt_seprator"}):"",i.postTime?(0,r.jsx)(a.default,{postTime:o,timeClass:`tb_wt_time tb-cTBfont-${c.font_varient}`,authorColor:c.authorColor}):""]})]})]}),(0,r.jsx)("div",{className:"tb_wt_social_",children:(0,r.jsx)(l.default,{networkClass:"tb_wt_social_ico",network:d,isDefault:1===c.iconType,ThemeRule:c})})]})};var c=i(66345),_=i(15537),h=i(78262),u=i(3720);const m=t=>{let{itemData:e,wallID:i,ownerId:o,wall:s}=t;const a=!(![3,4].includes(e.type)||1!=s.ThemeRule.autoPlay),l=c.MH&&s.ThemeRule.aspectImageRatio||!1;return(0,r.jsxs)("div",{className:"tb_wt_media_wrap",role:"button",tabIndex:"0","aria-label":"Post Pop up media wrapper",children:[(0,r.jsx)(_.default,{itemData:e,IconClass:"tb_wt_media_icon",show:!0}),a?(0,r.jsx)(u.A,{VideoClass:"tb_wt_video",data:e,wallID:i,themeID:null===s||void 0===s?void 0:s.ThemeInfo.id,ownerId:o,size:l,isCover:!0,controls:!1,autoPlay:!1,muted:!0,observer:!0}):(0,r.jsx)(h.A,{ImageClass:"tb_wt_image",data:e,wallID:i,themeID:null===s||void 0===s?void 0:s.ThemeInfo.id,ownerId:o,size:l,ThemeRule:s.ThemeRule,observer:!0})]})};var p=i(89649),b=i(60531),v=i(55507);const w=t=>{let{share:e,shareClass:i}=t;const o=(t,e)=>{t.stopPropagation(),e()};return(0,r.jsx)("div",{className:i,children:(0,r.jsxs)("div",{className:"tb_wt_share_wrapper",children:[e.facebook&&(0,r.jsx)("div",{className:"tb_wt_share_list",children:(0,r.jsx)("div",{onClick:t=>o(t,(()=>window.open(e.facebook,"_blank"))),className:"tb_wt_share_icon tb__icon tb-facebook tb_wt_cursor_pointer",title:"facebook",rel:"noopener noreferrer nofollow"})}),e.twitter&&(0,r.jsx)("div",{className:"tb_wt_share_list",children:(0,r.jsx)("div",{onClick:t=>o(t,(()=>window.open(e.twitter,"_blank"))),className:"tb_wt_share_icon tb__icon tb-twitter tb_wt_cursor_pointer",title:"twitter",rel:"noopener noreferrer nofollow"})}),e.linkedin&&(0,r.jsx)("div",{className:"tb_wt_share_list",children:(0,r.jsx)("div",{onClick:t=>o(t,(()=>window.open(e.linkedin,"_blank"))),className:"tb_wt_share_icon tb__icon tb-linkedin tb_wt_cursor_pointer",title:"linkedin",rel:"noopener noreferrer nofollow"})})]})})};var f=i(76506);const g=(t,e,i)=>1===t?`https://twitter.com/intent/favorite?tweet_id=${(0,f.Ph)(e)}`:i,x=(t,e,i)=>1===t?`https://twitter.com/intent/tweet?in_reply_to=${(0,f.Ph)(e)}`:i,k=t=>{let{itemData:e,ThemeRule:i}=t;const o=e.network.id,s=3===o||10===o?"like":"heart-outline";return(0,r.jsx)(r.Fragment,{children:12!==o&&15!==o&&20!==o&&21!==o&&29!==o?(0,r.jsxs)("div",{className:"tb_wt_social_action__",role:"navigation",children:[(0,r.jsx)("div",{className:"tb_wt_social_action__list",children:(0,r.jsxs)("a",{href:g(o,e.postId,e.link),target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow","aria-label":`Post Like Url ${g(o,e.postId,e.link)}`,title:"Favorite",children:[(0,r.jsx)("div",{className:`tb_wt_social_action_ico__ tb__icon tb-${s}`,children:" "}),e.like_count>0?(0,r.jsx)("div",{className:"tb_wt_social_action_counts__",children:e.like_count}):""]})}),(0,r.jsx)("div",{className:"tb_wt_social_action__list",children:(0,r.jsxs)("a",{href:x(o,e.postId,e.link),target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow","aria-label":`Post comment Url ${x(o,e.postId,e.link)}`,title:"Comment",children:[(0,r.jsx)("div",{className:"tb_wt_social_action_ico__ tb__icon tb-comment",children:" "}),e.like_count>0||e.comment_count>0?(0,r.jsx)("div",{className:"tb_wt_social_action_counts__",children:e.like_count}):""]})}),1===o?(0,r.jsx)("div",{className:"tb_wt_social_action__list",children:(0,r.jsx)("a",{href:`https://twitter.com/intent/retweet?tweet_id=${(0,f.Ph)(e.postId)}`,target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow","aria-label":`Post comment Url https://twitter.com/intent/retweet?tweet_id=${(0,f.Ph)(e.postId)}`,title:"Tweet",children:(0,r.jsx)("div",{className:"tb_wt_social_action_ico__ tb__icon tb-retweet",children:" "})})}):""]}):""})};var j=i(52867),N=i(72685);const C=t=>{let{itemData:e,personalization:i,ThemeRule:o,wallID:s,clickToShowPopUp:a,itemIndex:l,ownerId:n,onClickToCTA:_,wall:h,ThemeInfo:u}=t;const f=u.id,g=!([53,57,85].includes(f)&&c.MH||1===e.type),x=e.rating>0,C=e.rating>0?"tb_wt_rating_content":"tb_wt_content",I=1===e.type&&i.textDecorate?"tb_wt_text_decoration tb_wt_text_post":"",y=i.trimcontent?(0,j.Ex)(e.content,200):e.content;return(0,r.jsx)("div",{id:`tb-wt-post-${e.id}`,className:"tb_wt_post_wrapper","tb-network":e.network.id,"tb-product":e.isShopIcon?1:e.isHotspot?2:0,role:"article","aria-label":`Post ${parseInt(l)+1},${y}`,tabIndex:"0",children:(0,r.jsxs)("div",{className:"tb_wt_post_in",onClick:a(l,e),role:"button","aria-label":"Popup",tabIndex:"0",children:[(0,r.jsx)(d,{ownerId:n,postTime:e.createdAt,author:e.author,network:e.network,font:o,personalization:i,ThemeRule:o,mediaType:g}),(0,r.jsxs)("div",{className:"tb_wt_post_media_wrapp",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[g?(0,r.jsx)(m,{itemData:e,wallID:s,ownerId:n,wall:h},`img${l}_${e.id}`):"",x?(0,r.jsxs)("div",{className:"tb_wt_rating__",children:[(0,r.jsx)(v.default,{rating:e.rating,network:e.network})," "]}):""]}),(0,r.jsxs)("div",{className:"tb_wt_contant_wrapper",children:[e.share.status?(0,r.jsx)(N.default,{share:e.share,shareClass:"tb_wt_share_container",ThemeInfo:u,Post:e}):"",e.ctaStatus?(0,r.jsxs)("div",{className:"tb_wt_post_cta",children:[(0,r.jsx)(b.default,{ctaClass:"tb_wt_post_cta_btn",cta:e.cta,item:e,onClickToCTA:_})," "]}):"",o.hideContent&&1!=e.type?"":(0,r.jsx)(p.default,{contentClass:`${C} ${I}`,item:e,content:y,font:o,ThemeRule:o,personalization:i,contentTitle:e.contentTitle}),(0,r.jsxs)("div",{className:"tb_wt_post_share_container",style:e&&29==e.network.id||!o.socialAction?{justifyContent:"flex-end"}:{},children:[o.socialAction?(0,r.jsx)(k,{itemData:e,ThemeRule:o}):"",e.share.status?(0,r.jsx)(w,{share:e.share,shareClass:"tb_mc_share_container"}):""]})]})]})})},I=t=>{let{postData:e,completeDataObject:i,adjustWidth:s,CardStyle:a,ThemeStyle:l,ProductSetting:n,ThemeInfo:d,clickToShowPopUp:c,onClickToCTA:_,loadBranding:h}=t;return(0,o.useEffect)((()=>{h()}),[]),(0,r.jsx)("div",{className:"tb_wt_post_container",children:e&&e.length>0&&e.map(((t,e)=>{const o=i[t];return(0,r.jsx)(C,{ownerId:d.ownerId,itemData:o,itemIndex:e,adjustWidth:s,CardStyle:a,ThemeStyle:l,ProductSetting:n,wallID:d.wallId,clickToShowPopUp:c,onClickToCTA:_},`wdt_crd_${e}_${t.id}`)}))})}},91697:(t,e,i)=>{i.d(e,{EC:()=>o,Oi:()=>a,Yo:()=>s});const o=t=>({0:"manual-upload",1:"twitter",2:"instagram",3:"facebook",4:"google",5:"pinterest",6:"flickr",7:"youtube",8:"vimeo",10:"linkedin",11:"tumblr",12:"rss",13:"star",15:"workplace",18:"instagram",19:"yelp",20:"slack",21:"yammer",23:"airbnb",25:"soundcloud",26:"giphy",27:"deviantart",28:"tiktok",29:"onsite-upload",30:"vkontakte",32:"chrome",33:"collabration",34:"amazon",35:"tripadvisor",36:"star",37:"aliexpress"}[t]||""),s=t=>({0:"#313A53",1:"#29a9e1",2:"#000000",3:"#1b74e4",4:"#4081ed",5:"#e60022",6:"#0a63dc",7:"#FF0000",8:"#1eb8eb",10:"#0a66c2",11:"#36465d",12:"#f78422",13:"#FABF04",15:"#4767ab",18:"#000000",19:"#be362e",20:"#510d4e",21:"#0078d4",23:"#ff7977",25:"#ff7700",26:"#000000",27:"#00e59b",28:"#000000",29:"#613983",30:"#0077FF",32:"#4c8bf5",33:"#4e69ed",34:"#4e69ed",35:"#60c196",36:"#00e9ff",37:"#E52F20"}[t]||""),a=t=>({0:"Manual Upload",1:"Twitter",2:"Instagram",3:"Facebook",4:"Google",5:"Pinterest",6:"Flickr",7:"YouTube",8:"Vimeo",10:"LinkedIn",11:"Tumblr",12:"RSS",13:"Star",15:"Workplace",18:"Instagram",19:"Yelp",20:"Slack",21:"Yammer",23:"Airbnb",25:"Soundcloud",26:"Giphy",27:"Deviantart",28:"Tiktok",29:"Review Hub",30:"Vkontakte",32:"Chrome Extension",33:"Collab with Creators",34:"Amazon",35:"Tripadvisor",36:"Review Hub",37:"Aliexpress"}[t]||"")}}]);