(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[1685,839,2708,368,5790,4422,6946,2842,1349,9239],{46588:(t,e,o)=>{"use strict";o.d(e,{ht:()=>c});var i=o(98501),a=o(70656),s=o(35179),n=o(71287),l=o(32626);let r=[];const c=t=>{t.persist();const e=t.target,{network:o,itemId:i,themeId:a}=e.dataset;if(1!=o||[3,4,16,47,50,55,60].includes(a))r.includes(t)||r.push(t);else{const t=document.querySelector(".tb_media-".concat(i));t&&(t.style.display="none")}1===r.length&&d()},d=async()=>{var t;const{postData:e,wall:o}=a.Z.getState().appData;if(!o||!Object.keys(o).length||!r.length)return;const{User:c,Wall:u}=o,h=null===c||void 0===c?void 0:c.id,m=(s.ig,null===u||void 0===u?void 0:u.id),_=null===(t=r[0])||void 0===t?void 0:t.target,{filterId:v,network:b,itemId:g,load:f}=_.dataset,w=document.querySelector('img[data-item-id="'.concat(g,'"]')),x=null!==e&&void 0!==e&&e.completeDataObject?Object.values(e.completeDataObject).filter((t=>t.id===g)):[];if(null!==x&&void 0!==x&&x.length){var k;const t=await(async t=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((e=>t.includes(e)))||await fetch(t).then((t=>t.ok)).catch((()=>!1)))(null===(k=x[0])||void 0===k?void 0:k.postFileNew);if(!t&&w){if([2,18,3,28].includes(+b)&&"0"===f&&"34"!==v&&!_.src.includes("cloud.taggbox.com")){const t=((t,e,o)=>{var i,a,s,n,l;const{UserPlan:r,Wall:c}=e;return{table_name:null===r||void 0===r?void 0:r.db_table,...t,...null!==o&&void 0!==o&&o.length?{feedId:null===(i=o[0])||void 0===i?void 0:i.feedId,type:null===(a=o[0])||void 0===a?void 0:a.type,link:null===(s=o[0])||void 0===s?void 0:s.link,postFile:null===(n=o[0])||void 0===n?void 0:n.postFile,mediaFile:null===(l=o[0])||void 0===l?void 0:l.mediaFile}:{},url:null===c||void 0===c?void 0:c.url}})({wallId:m,postId:g,ownerId:h},o,x);try{const{data:e}=await(new l.Z).post(s.g$,t,{headers:n.JW}),o=s.ig||s.Jx?"":"https://images.".concat(s.yM,"/");_.src="18"===b?"".concat(o).concat(e.media):e.media}catch{_.src=i.Ty}finally{p(_)}}else _.src=i.Ty,p(_);r.shift(),d()}else{const t="".concat(i.do,"/media/images/no-image.svg");_.src=t,_.srcset=t,p(_),r.shift()}}},p=t=>t.setAttribute("data-load","1")},89239:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>n});var i=o(47313),a=o(63214),s=o(46417);class n extends i.PureComponent{render(){const{author:t,authorClass:e,networkId:o,size:i,inView:n}=this.props;return(0,s.jsx)("div",{className:e,style:{overflow:4==o?"visible":""},children:n?(0,s.jsx)("img",{className:"".concat(e,"__"),src:t.picture,"aria-label":"author",alt:t.name,width:i||44,height:i||44,onError:e=>{const i=(0,a.B4)(o),s="#ffffff"==i?"000":i.replace("#","");e.target.src=t.errorPic?t.errorPic:"https://ui-avatars.com/api/?name=".concat(t.name.replace(/\s/g,""),"&background=").concat(s,"&color=fff&length=1")}}):null},Math.random())}}},97915:(t,e,o)=>{"use strict";o.d(e,{Z:()=>u});var i=o(47313),a=o(65537),s=o(6119),n=o(61893),l=o(75729),r=o(46417);const c=(0,i.memo)((t=>{let{item:e}=t;const o=e.discount>0&&e.discount!==e.price,i=e.discount>0?e.discount:e.price;return(0,r.jsxs)("a",{hotspot:1,href:e.url,target:"_blank",rel:"noopener noreferrer",className:"tb_tooltip_wrap",children:[(0,r.jsx)("div",{hotspot:1,className:"tb_p_tooltip_title",children:e.title}),o&&(0,r.jsxs)("div",{hotspot:1,className:"tb_p_tooltip_price tb_price_disabled",children:[e.currency,e.price]}),(e.price>0||e.discount>0)&&(0,r.jsxs)("div",{hotspot:1,className:"tb_p_tooltip_price",children:[e.currency,i]})]})})),d=t=>{let{products:e,appData:o,Post:a,showTooltip:d,isPopup:p,dataItem:u}=t;const[h,m]=(0,i.useState)(null),_=(0,i.useMemo)((()=>{var t,e;return(null===o||void 0===o||null===(t=o.wall)||void 0===t||null===(e=t.ProductSetting)||void 0===e?void 0:e.Hotspot)||{}}),[o]);(0,i.useEffect)((()=>{if(d){const t=e.findIndex((t=>t.id===d));-1!==t&&m(t)}else m(null)}),[d,e]);const v=(0,i.useCallback)((t=>{var e,i,a,s;null!==o&&void 0!==o&&o.wall&&(0,n.S5)({type:1,action:2,wall:null===o||void 0===o||null===(e=o.wall)||void 0===e||null===(i=e.ThemeInfo)||void 0===i?void 0:i.webId,product_id:t.id,post:u.referenceId,owner:null===o||void 0===o||null===(a=o.wall)||void 0===a||null===(s=a.ThemeInfo)||void 0===s?void 0:s.ownerId,feed:u.feedId,currency:t.currencyCode,price:Number(t.price)>0?t.discount:t.price})}),[o,a]),b=(0,i.useCallback)(((t,e)=>{t.stopPropagation(),v(e),window.open(e.url,"_blank")}),[v]);return null!==_&&void 0!==_&&_.status?e.map(((t,e)=>{const o="hotspot-".concat(t.id,"-").concat(e).concat(p?"-pop":""),i=h===e;return(0,r.jsxs)("div",{id:o,className:"tb_hotspot_dot".concat(i?" tb_hotspot_active_":""),role:"button",style:{top:t.hotspot.top,left:t.hotspot.left},onMouseEnter:()=>m(e),onMouseLeave:()=>m(null),onClick:e=>{b(e,t)},"data-tooltip-offset":7,children:[(0,r.jsx)("div",{hotspot:1,className:"tb_hotspot__ ".concat(0===_.type?"tb_hotspot_ani__":""),children:e+1}),(0,r.jsx)(l.Z,{wallId:o,children:(0,r.jsx)(s.u,{appendTo:"body","data-tooltip-id":"tooltip-".concat(t.id,"-").concat(e).concat(p?"-pop":""),className:"tb_pro_tooltip",anchorSelect:"#".concat(o),clickable:!0,...p?{isOpen:i}:{},children:(0,r.jsx)(c,{item:t})},e)})]},"".concat(t.id,"-").concat(e))})):null},p=(0,i.memo)(d),u=(0,a.$j)((t=>({appData:t.appData})))(p)},84261:(t,e,o)=>{"use strict";o.d(e,{Z:()=>c});var i=o(47313),a=o(46335),s=o(98501),n=o(46588),l=o(97915),r=o(46417);class c extends i.PureComponent{constructor(t){var e,o;super(t),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:t,offsetWidth:e}=this.mediaRef.current;this.setState({currentHeight:t,currentWidth:e})}},this.mediaSizeCalc=async()=>{const{Post:t,mediaOnly:e}=this.props,o=e||t.media;if((null===o||void 0===o||!o.height)&&(null===o||void 0===o||!o.width))try{var i;const{width:t,height:e}=await(0,a.GF)(null===o||void 0===o||null===(i=o.image)||void 0===i?void 0:i.small);this._isMounted&&this.setState({height:e,width:t})}catch(s){this._isMounted&&this.setState({height:300,width:300})}};const{mediaOnly:s,Post:n}=t;this.state={height:(null===s||void 0===s?void 0:s.height)||(null===n||void 0===n||null===(e=n.media)||void 0===e?void 0:e.height)||0,width:(null===s||void 0===s?void 0:s.width)||(null===n||void 0===n||null===(o=n.media)||void 0===o?void 0:o.width)||0,currentHeight:0,currentWidth:0},this.mediaRef=i.createRef()}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var t,e,o,i;const{height:a,width:c}=this.state,{ImageClass:d,Post:p,hotspot:u,size:h,blurBG:m,mediaOnly:_,inView:v,multiKey:b,index:g}=this.props,{id:f,link:w,products:x}=p,k=_||(null===p||void 0===p?void 0:p.media),{currentWidth:I,currentHeight:j}=this.state,y=h||100*a/c,C={paddingBottom:1===y?null:"".concat(y,"%")},T={backgroundImage:v?"url(".concat(null===k||void 0===k||null===(t=k.image)||void 0===t?void 0:t.small,")"):null},P=c>a?"100%":"".concat(c/a*100,"%"),N=c>a?"".concat(a/c*100,"%"):"100%",S=p.isProduct&&u&&p.hotspot,D={width:S&&h?P:null,height:S&&h?N:null};return(0,r.jsxs)("div",{className:"".concat(d,"_wrap_"),style:C,ref:this.mediaRef,children:[S&&m?(0,r.jsx)("div",{className:"tb_blur_bg_",style:T}):null,(0,r.jsxs)("div",{className:"".concat(d,"_wrap_in"),style:D,children:[S?(0,r.jsx)(l.Z,{products:this.props.multiPic?p.mediaList[b].product:x,hotspot:p.hotspot,Post:p,showTooltip:null},g):null,v?(0,r.jsx)("img",{className:"".concat(d," tb_media-").concat(f),src:null===k||void 0===k||null===(e=k.image)||void 0===e?void 0:e.small,srcSet:"".concat(null===k||void 0===k||null===(o=k.image)||void 0===o?void 0:o.small," 1x, ").concat(null===k||void 0===k||null===(i=k.image)||void 0===i?void 0:i.large," 2x"),sizes:"".concat(I,"px"),loading:v?"eager":"lazy",decoding:"async",fetchPriority:v?"high":"low","data-id":f,height:j,width:I,"data-height":a,"data-width":c,"data-link":w,onLoad:this.onLoad,onError:t=>{t.target.src="".concat(s.do,"/media/error/no-image.svg"),t.target.srcset="".concat(s.do,"/media/error/no-image.svg"),(0,n.ht)(t)},alt:null===k||void 0===k?void 0:k.title,title:null===k||void 0===k?void 0:k.title},"".concat(f,"-").concat(a,"-").concat(c,"-").concat(v)):null]})]})}}},81349:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>l});var i=o(47313),a=o(35179),s=o(46417);const n=i.lazy((()=>o.e(5867).then(o.bind(o,95867)))),l=t=>{const{Post:e,IconClass:o,isCenter:l,hideVideo:r,show:c}=t,d=!![3,5].includes(e.type),p=7===e.network.id,u=!!(e.mediaList&&e.mediaList.length>0),h=1===e.isAudio,m=!!e.isProduct,_=(0,s.jsx)(i.Suspense,{fallback:(0,s.jsx)(s.Fragment,{}),children:(0,s.jsx)(n,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"})}),v=(0,s.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:"  "}),b=(0,s.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:"  "}),g=(0,s.jsx)("div",{className:"tb__icon tb-".concat(a.bX?"reel-fill tb_reel_ico":"video tb_video_ico"),children:"  "}),f=(0,s.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:"  "}),w=(0,s.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:"  "});return c?(0,s.jsxs)(s.Fragment,{children:[l&&(p||d)?(0,s.jsxs)("div",{className:"".concat(o," tb__media_ico_c"),children:[d&&!p?w:"",d&&p?_:""]}):null,m||u||d?(0,s.jsxs)("div",{className:"".concat(o," tb__media_ico_"),children:[m?f:"",u?v:"",l||!d||p||r?"":h?b:g]}):null]}):null}},72842:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>l});var i=o(47313),a=o(63214),s=o(46417);const n=i.lazy((()=>o.e(5867).then(o.bind(o,95867))));class l extends i.PureComponent{render(){const{networkId:t,networkClass:e,iconStyle:o,isPopUp:l}=this.props;return(null===o||void 0===o?void 0:o.default)||[7,4,36].includes(t)?(0,s.jsx)(i.Suspense,{fallback:(0,s.jsx)(s.Fragment,{}),children:(0,s.jsx)(n,{networkId:t,networkClass:e})}):(0,s.jsx)("div",{className:"".concat(e," tb__icon tb-").concat((0,a.O5)(t)),"aria-label":"post network ".concat((0,a.BK)(t)),children:(0,s.jsx)("div",{})})}}},16946:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>r});var i=o(47313),a=o(35179),s=o(63346),n=o(46335),l=o(46417);class r extends i.PureComponent{constructor(t){super(t),this.contentRef=i.createRef()}componentDidMount(){setTimeout((()=>{var t,e;if(null!==(t=this.contentRef)&&void 0!==t&&null!==(e=t.current)&&void 0!==e&&e.clientHeight){var o,i;const t=(null===(o=this.contentRef)||void 0===o||null===(i=o.current)||void 0===i?void 0:i.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}}),100)}render(){const{CardStyle:t,contentClass:e,content:o,contentTitle:i,maxLines:r,isReadMore:c}=this.props,d=t.content.trimcontent&&!a.ig?t.content.trimcontent:0,p={WebkitLineClamp:r,textAlign:t.style.textAlign},u=(0,n.Fx)(o),h="".concat(d?" tb_content_line-".concat(d):""),m="".concat(e," ").concat(c?"":h," tb-cTBfont-").concat(t.style.variant);return(0,l.jsxs)("div",{className:m,ref:this.contentRef,style:p,children:[i?(0,l.jsx)("div",{className:"tb_bold_txt__",children:(0,s.ZP)(i)}):null,(0,s.ZP)(u)]})}}},34422:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>a});o(47313);var i=o(46417);const a=t=>{const{sepClass:e}=t;return(0,i.jsx)("div",{className:e,children:"   "})}},22708:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>n});var i=o(47313),a=o(61893),s=o(46417);class n extends i.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{Post:o,ThemeInfo:i}=this.props;e.stopPropagation(),(0,a.S5)({type:2,action:2,wall:i.wallID,feed:o.feedId,post:o.referenceId?o.referenceId:o.id,owner:i.ownerId}),(0,a.WI)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{shareClass:t,Post:e}=this.props,{facebook:o,twitter:i,linkedin:a}=null===e||void 0===e?void 0:e.share,n=t=>{let{shareOn:e,icon:o}=t;return(0,s.jsx)("div",{className:"tb_share_icon_list",children:(0,s.jsx)("div",{onClick:this.onClickData(e),className:"tb_share_ico__ tb__icon tb-".concat(o),title:o,children:(0,s.jsx)("div",{})})})};return(0,s.jsxs)("div",{className:"tb_share_wrapper ".concat(t),children:[(0,s.jsx)("div",{className:"tb_share_button_ tb__icon ".concat("tb-share"),children:(0,s.jsx)("div",{})}),(0,s.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[o?(0,s.jsx)(n,{shareOn:o,icon:"facebook"}):"",i?(0,s.jsx)(n,{shareOn:i,icon:"twitter"}):"",a?(0,s.jsx)(n,{shareOn:a,icon:"linkedin"}):""]})]})}}},55790:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>l});var i=o(47313),a=o(46335),s=o(46417);const n=t=>{const{createdAt:e,timeClass:o}=t;return(0,s.jsx)("div",{className:o,role:"status","aria-label":"post timestamp ".concat((0,a.Sy)(e)),children:(0,a.Sy)(e)})},l=(0,i.memo)(n)},12465:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>x});var i=o(47313),a=o(61395),s=o.n(a),n=o(89239),l=o(55790),r=o(34422),c=o(46417);const d=t=>{let{author:e,personalization:o,postTime:i,network:a,ThemeRule:s}=t;const d=e.username&&e.username.length>0?"@".concat(e.username):"",p=!(!o.postAuthor||e.isInstaUser),u=!(!o.postAuthor||!o.postTime||e.isInstaUser);return(0,c.jsx)("div",{className:"tb_gp_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:(0,c.jsxs)("div",{className:"tb_gp_author",children:[p?(0,c.jsx)(n.default,{author:e,authorClass:"tb_gp_author_profile",network:a}):"",(0,c.jsxs)("div",{className:"tb_gp_author_info",children:[p?(0,c.jsx)("div",{className:"tb_gp_authorname",children:e.name}):"",(0,c.jsxs)("div",{className:"tb_gp_post_info".concat(u?"":" tb_gp_post_info__"),children:[p?(0,c.jsx)("div",{className:"tb_gp_username",children:d}):"",u?(0,c.jsx)(r.default,{sepClass:"tb_gp_seprator"}):"",o.postTime?(0,c.jsx)(l.default,{postTime:i,timeClass:"tb_gp_time tb-cTBfont-".concat(s.font_varient),authorColor:s.authorColor}):""]})]})]})})};var p=o(22708),u=o(81349),h=o(84261);class m extends i.PureComponent{render(){const{itemData:t,wallID:e,themeID:o,ownerId:i}=this.props;return(0,c.jsxs)("div",{className:"tb_gp_media_wrap",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[(0,c.jsx)(u.default,{itemData:t,IconClass:"tb_gp_media_icon",position:1,show:!0,observer:!0}),(0,c.jsx)(h.Z,{ImageClass:"tb_gp_image",data:t,wallID:e,themeID:o,ownerId:i,size:100,observer:!0})]})}}var _=o(16946),v=o(72842),b=o(17739),g=o(35179);class f extends i.PureComponent{constructor(t){super(t),this.cardSize=i.createRef()}componentDidMount(){const{itemData:t,itemIndex:e,onClickPopUpSlider:o}=this.props,i=document.querySelector(".tb_gp_post_container");setTimeout((()=>{var t,e,o,a;(null===this||void 0===this||null===(t=this.cardSize)||void 0===t||null===(e=t.current)||void 0===e?void 0:e.offsetWidth)<250&&i.classList.add("tb_gp_post_wrapper2x"),(null===this||void 0===this||null===(o=this.cardSize)||void 0===o||null===(a=o.current)||void 0===a?void 0:a.offsetWidth)<120&&i.classList.add("tb_gp_post_wrapper1x"),(0,b.YN)(this.cardSize)}),100),t.isPopUp&&o(e,t)}render(){const{itemData:t,personalization:e,adjustWidth:o,ThemeRule:i,clickToShowPopUp:a,itemIndex:s,wallID:n,ownerId:l}=this.props,r={width:"".concat(o,"%"),padding:e.padding/2},u=1!==t.type,h=7===t.network.id,b=0==i.postHover&&g.ig?"light":"dark",f=g.Jx?"tb_gp_color_overlay":"tb_gp_post_overlay-"+b,w={backgroundColor:g.Jx?i.cardColor:""};return(0,c.jsx)("div",{id:"tb-gp-post-".concat(t.id),"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,className:"tb_gp_post_wrapper",style:r,"tb-network":t.network.id,"tb-product":t.isShopIcon?1:t.isHotspot?2:0,tabIndex:"0",role:"article","aria-label":"Post ".concat(parseInt(s)+1,",").concat(t.content),ref:this.cardSize,children:(0,c.jsx)("div",{className:"tb_gp_post_in",onClick:a(s,t),role:"button","aria-label":"Popup",tabIndex:"0",children:(0,c.jsxs)("div",{className:"tb_gp_post_media_wrapp",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[t.share.status?(0,c.jsx)(p.default,{share:t.share,shareClass:"tb_gp_share_container",item:t,wallID:n,ownerId:l}):null,u?(0,c.jsx)(m,{itemData:t,wallID:n,themeID:e.widgetTheme,ownerId:l},"img_gly_".concat(t.id)):"",h?"":(0,c.jsx)("div",{className:"tb_gp_contant_",children:(0,c.jsxs)("div",{className:"tb_gp_contant__in",children:[(0,c.jsxs)("div",{className:"tb_gp_content__",children:[(0,c.jsx)(d,{adjustWidth:o,postTime:t.createdAt,network:t.network,ownerId:l,author:t.author,font:i,personalization:e,ThemeRule:i}),i.hideContent&&1!=t.type?"":(0,c.jsx)(_.default,{item:t,contentClass:"tb_gp_content",content:t.content,font:i,ThemeRule:i,personalization:e,contentTitle:t.contentTitle})]}),(0,c.jsx)("div",{className:"tb_gp_post_overlay ".concat(f),style:w,children:(0,c.jsx)("div",{})})]})}),(0,c.jsx)("div",{className:"tb_gp_social_",children:h?"":(0,c.jsx)(v.default,{networkClass:"tb_gp_social__ico",network:t.network,isDefault:1===i.iconType,ThemeRule:i})})]})})})}}class w extends i.PureComponent{constructor(){super(...arguments),this.state={postData:[],windowWidth:window.innerWidth,containerWidth:0,loadData:0},this.calculationData=(t,e,o,i)=>t>i&&t>i+o?{totalPostBestFit:i+o,isLastRow:!0}:{totalPostBestFit:i,isLastRow:!1}}componentDidMount(){const{postData:t,renderId:e,loadBranding:o}=this.props;setTimeout((()=>this.setState({postData:t,loadData:1},(()=>this.onLoadMasonry()))),100),e.renderId&&this.setState({windowWidth:document.getElementById(e.renderId).clientWidth}),o()}UNSAFE_componentWillReceiveProps(t){const{postData:e}=t;this.setState({postData:e,loadData:1})}render(){const{postData:t,completeDataObject:e,adjustWidth:o,ThemeStyle:i,ThemeInfo:a,clickToShowPopUp:n,cardNumber:l,onClickToCTA:r,onClickPopUpSlider:d}=this.props,{windowWidth:p,loadData:u}=this.state;var h={totalPostBestFit:0,isLastRow:!1};let m=0===i.column.desktop?Math.trunc(l)>5?5:Math.trunc(l):i.column.desktop;if(t.length>parseInt(l)){let e=parseInt(l);4===m?e=9:2===m?e=3:3===m?e=6:5===m&&(e=12),p<768&&(e=parseInt(l));let o=t.length/parseInt(e);h=parseInt(e)*parseInt(o),h=this.calculationData(t.length,e,m,h)}let _=0===i.column.desktop?Math.trunc(l)>5?5:Math.trunc(l)+1:i.column.desktop+1;return(0,c.jsx)(s(),{className:"tb_gp_post_container",tabIndex:"0","aria-label":"There are ".concat(t&&t.length>0?t.length:0," posts in the feed"),role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_gp_post_wrapper",resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:u?t&&t.length>0&&t.map(((t,i)=>{const s=e[t];let l=o;if(3===m&&_===i+1){l=2*o,_=_+2*m}else if(2===m&&_===i+1){l=2*o,_=_+(m+1)}else if(4===m&&_===i+1){l=2*o,_=_+(2*m+1)}else if(5===m&&_===i+1){l=2*o,_=_+(2*m+2)}return parseInt(h.totalPostBestFit)>=parseInt(i+1)?(0,c.jsx)(f,{ownerId:a.ownerId,itemData:s,itemIndex:i,adjustWidth:l,clickToShowPopUp:n,onClickToCTA:r,onClickPopUpSlider:d},i):0===parseInt(h.totalPostBestFit)?(0,c.jsx)(f,{ownerId:a.ownerId,itemData:s,itemIndex:i,adjustWidth:l,clickToShowPopUp:n,onClickToCTA:r,onClickPopUpSlider:d},"galry_".concat(s.id)):null})):null})}}const x=w},63214:(t,e,o)=>{"use strict";o.d(e,{B4:()=>a,BK:()=>s,O5:()=>i});const i=t=>({0:"manual-upload",1:"twitter",2:"instagram",3:"facebook",4:"google",5:"pinterest",6:"flickr",7:"youtube",8:"vimeo",10:"linkedin",11:"tumblr",12:"rss",13:"star",15:"workplace",18:"instagram",19:"yelp",20:"slack",21:"yammer",23:"airbnb",25:"soundcloud",26:"giphy",27:"deviantart",28:"tiktok",29:"onsite-upload",30:"vkontakte",32:"chrome",33:"collabration",34:"amazon",35:"tripadvisor",36:"star",37:"aliexpress"}[t]||""),a=t=>({0:"#313A53",1:"#29a9e1",2:"#000000",3:"#1b74e4",4:"#4081ed",5:"#e60022",6:"#0a63dc",7:"#FF0000",8:"#1eb8eb",10:"#0a66c2",11:"#36465d",12:"#f78422",13:"#FABF04",15:"#4767ab",18:"#000000",19:"#be362e",20:"#510d4e",21:"#0078d4",23:"#ff7977",25:"#ff7700",26:"#000000",27:"#00e59b",28:"#000000",29:"#613983",30:"#0077FF",32:"#4c8bf5",33:"#4e69ed",34:"#4e69ed",35:"#60c196",36:"#00e9ff",37:"#E52F20"}[t]||""),s=t=>({0:"Manual Upload",1:"Twitter",2:"Instagram",3:"Facebook",4:"Google",5:"Pinterest",6:"Flickr",7:"YouTube",8:"Vimeo",10:"LinkedIn",11:"Tumblr",12:"RSS",13:"Star",15:"Workplace",18:"Instagram",19:"Yelp",20:"Slack",21:"Yammer",23:"Airbnb",25:"Soundcloud",26:"Giphy",27:"Deviantart",28:"Tiktok",29:"Review Hub",30:"Vkontakte",32:"Chrome Extension",33:"Collab with Creators",34:"Amazon",35:"Tripadvisor",36:"Review Hub",37:"Aliexpress"}[t]||"")},61729:(t,e,o)=>{"use strict";var i=o(79165);function a(){}function s(){}s.resetWarningCache=a,t.exports=function(){function t(t,e,o,a,s,n){if(n!==i){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function e(){return t}t.isRequired=t;var o={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:s,resetWarningCache:a};return o.PropTypes=o,o}},75192:(t,e,o)=>{t.exports=o(61729)()},79165:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);