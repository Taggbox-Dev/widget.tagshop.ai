"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[16,9239,5790],{66538:(e,t,s)=>{s.r(t),s.d(t,{default:()=>p});var a=s(47313),o=s(97914),i=s(43411),n=s(98501),l=s(43635),r=s(35179),c=s(46417);class d extends a.PureComponent{render(){const{UgcSettings:e,id:t,tagShopWallId:s}=this.props;var a=window.ugcSuite||window.location.href.includes("ugcSuite=1")?{ugcSuite:1}:{};const i=Object.keys(a).length>0?"&ugcSuite=1":"",l=!(s||!r.ig),d=e.onsite_qr_code_status||""!=e.onsite_qr_code_btn_text?e.onsite_qr_code_btn_text:"",p=r.ig?"".concat(n.oC,"/").concat(t,"/onsite-upload").concat(l?"?wall=1":""):"".concat(n.nn,"/").concat(t,"?onsite-upload=true").concat(i);return!e.onsite_status||!r.ig&&!e.onsite_button_status||1!=e.onsite_qr_code_status&&""===d?null:(0,c.jsx)("div",{className:"tb_onsite_upload_btn_wrap",children:(0,c.jsx)("div",{className:"tb_onsite_upload_btn",children:(0,c.jsx)("div",{className:"tb_onsite_btn",onClick:()=>this.props.onSitePopup(!0),children:(0,c.jsxs)("div",{className:"tb_onsite_qr_btn_wrap",children:[1==e.onsite_qr_code_status?(0,c.jsx)("div",{className:"tb_onsite_qr_code",children:(0,c.jsx)(o.ZP,{level:"L",size:60,value:p})}):null,""!==d?(0,c.jsx)("div",{className:"tb_onsite_btn_txt tb-cTBfont-".concat(e.onsite_font_varient_btn),children:d}):""]})})})})}}const p=(0,i.$j)((e=>({modalPop:e.modalPop})),(e=>({onSitePopup:t=>e((0,l.wg)(t))})))(d)},89239:(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});var a=s(47313),o=(s(17739),s(98935)),i=s(46417);class n extends a.PureComponent{constructor(e){super(e),this.state={isAuthorImagevalid:!0}}render(){const{author:e,authorClass:t,network:s}=this.props;return(0,i.jsx)("div",{className:t,children:this.state.isAuthorImagevalid?(0,i.jsx)("img",{className:"".concat(t,"__"),src:e.picture&&String(e.picture).includes("author.png")?" ":e.picture.replace(/[ ]+/g,""),srcSet:e.picture&&String(e.picture).includes("author.png")?" ":e.picture.replace(/[ ]+/g,""),"aria-label":"author image",alt:e.name,width:44,height:44,onError:e=>{this.setState({isAuthorImagevalid:!1})}}):(0,i.jsx)(o.Z,{authorClass:t,username:e.name,network:s,color:null===s.id?"#000":s.color,errorPic:e.errorPic})},Math.random())}}},98935:(e,t,s)=>{s.d(t,{Z:()=>n});var a=s(47313),o=s(46417);const i=e=>{let{username:t,network:s,authorClass:a,errorPic:i}=e;const n="#ffffff"==s.color?"#000":s.color;return(0,o.jsx)("img",{className:"".concat(a,"__"),src:i||"https://ui-avatars.com/api/?name=".concat(t.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":n).replace("#",""),"&color=fff&length=1"),alt:t,width:45,height:45,"aria-label":"author image"})},n=(0,a.memo)(i)},55790:(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var a=s(47313),o=s(17739),i=s(46417);const n=e=>{const{postTime:t,timeClass:s}=e;return(0,i.jsx)("div",{className:s,role:"status","aria-label":"post timestamp ".concat((0,o.Sy)(t)),children:(0,o.Sy)(t)})},l=(0,a.memo)(n)},91744:(e,t,s)=>{s.r(t),s.d(t,{default:()=>D});var a=s(47313),o=s(43411),i=s(11774),n=s(44084),l=s(89239),r=s(55790),c=s(25810),d=s(35179),p=s(46417);const _=e=>{let{author:t,personalization:s,postTime:a,network:o,ThemeRule:i,font:n}=e;const _=!(!s.postAuthor||t.isInstaUser),u=!(!s.postAuthor||!s.postTime||t.isInstaUser);return(0,p.jsxs)("div",{className:"tb_gt_author_wrapper ".concat(d.ZQ?"tb_gt_author_wrapper_top":""),"aria-label":"Author details","aria-roledescription":"post author details",children:[(0,p.jsxs)("div",{className:"tb_gt_author",children:[_?(0,p.jsx)(l.default,{network:o,author:t,authorClass:"tb_gt_author_profile"}):"",(0,p.jsxs)("div",{className:"tb_gt_author_info",children:[_?(0,p.jsx)("div",{className:"tb_gt_authorname",children:t.name}):"",(0,p.jsxs)("div",{className:"tb_gt_post_info",children:[_?(0,p.jsx)("div",{className:"tb_gt_username",children:"@".concat(t.username)}):"",u?(0,p.jsx)("div",{className:"tb_gt_seprator",children:" "}):"",s.postTime?(0,p.jsx)(r.default,{postTime:a,timeClass:"tb_gt_time tb-cTBfont-".concat(i.font_varient),authorColor:i.authorColor}):""]})]})]}),d.ZQ?null:(0,p.jsx)("div",{className:"tb_gt_social_",children:(0,p.jsx)(c.default,{networkClass:"tb_gt_social__ico",network:o,isDefault:1===i.iconType,ThemeRule:i})})]})};var u=s(81349),h=s(84261),m=s(64442);const g=a.lazy((()=>Promise.resolve().then(s.bind(s,25810)))),w=e=>{let{itemData:t,wallID:s,ThemeID:o,ownerId:i,wall:n}=e;const l=!t.hotspot,r=!(3!==t.type&&5!==t.type||1!=n.ThemeRule.autoPlay&&d.ig);return(0,p.jsxs)("div",{className:"tb_gt_media_wrap",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[d.ZQ?(0,p.jsx)("div",{className:"tb_gt_social_top_",children:(0,p.jsx)(a.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(g,{networkClass:"tb_gt_social__ico",network:t.network,isDefault:1===n.ThemeRule.iconType,ThemeRule:n.ThemeRule})})}):null,(0,p.jsx)(u.Z,{itemData:t,IconClass:"tb_gt_media_icon",show:l}),r?(0,p.jsx)(m.Z,{VideoClass:"tb_gt_video",data:t,wallID:s,themeID:n.Personalization.widgetTheme,ownerId:i,size:100,isCover:!0,muted:!0}):(0,p.jsx)(h.default,{ImageClass:"tb_gt_image",data:t,wallID:s,themeID:o,ownerId:i,size:100,hotspot:!!t.hotspot})]})};var b=s(17739),x=s(11502);const j=a.lazy((()=>Promise.all([s.e(6390),s.e(8342)]).then(s.bind(s,62245)))),v=d.ZQ?null:200,f=e=>{let{itemData:t,personalization:s,ThemeRule:o,clickToShowPopUp:i,itemIndex:n,wallID:l,ownerId:r,postSizeInPx:u,wall:h,onClickPopUpSlider:m}=e;const g=(0,a.useRef)(null),f=1!==t.type,T=s.trimcontent?(0,b.Sv)(t.content,v):t.content,I=u.adjustWidth<250,S=0==o.postHover&&d.ig?"light":"dark",k=!!(t.hotspot&&t.ugc_products.length>0),C=!!(d.ig&&""!=o.shoppingText&&!t.hotspot&&t.ugc_products.length>0);return(0,a.useEffect)((()=>{d.ig&&(0,b.YN)(g)}),[]),(0,a.useEffect)((()=>{t.isPopUp&&m(n,t)}),[n,t.isPopUp,t]),(0,p.jsx)("div",{id:"tb-hs-post-".concat(t.id),className:"tb_gt_post_wrapper".concat(I?" tb_gt_post_wrapper2x":""),"tb-network":t.network.id,"tb-product":C?1:k?2:0,ref:g,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,children:(0,p.jsx)("div",{className:"tb_gt_post_in".concat(d.ig?" tb_gt_post_ani":""),onClick:i(n,t),role:"button","aria-roledescription":"Click to open pop up",tabIndex:"0",children:(0,p.jsxs)("div",{className:"tb_gt_post_media_wrapp",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[f?(0,p.jsx)(w,{itemData:t,wallID:l,wall:h,ownerId:r}):"",k?null:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"tb_gt_post_details",children:[d.ig?(0,p.jsx)("div",{className:"tb_gt_social_",children:(0,p.jsx)(c.default,{networkClass:"tb_gt_social__ico",network:t.network,isDefault:1===o.iconType,ThemeRule:o,Personalization:s})}):null,C?(0,p.jsx)(x.Z,{ThemeRule:o,btnClass:"tb_gt_btn_wrap"}):null,d.ig?null:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:"tb_gt_contant_wrapper",children:o.hideContent&&1!=t.type?"":(0,p.jsx)(a.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(j,{contentClass:"tb_gt_content",item:t,content:T,font:o,ThemeRule:o,personalization:s,contentTitle:t.contentTitle})})}),(0,p.jsx)(a.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(_,{ownerId:r,postTime:t.createdAt,author:t.author,network:t.network,font:o,personalization:s,ThemeRule:o})})]})]}),(0,p.jsx)("div",{className:"tb_gt_post_overlay tb_gt_post_overlay-".concat(S),children:(0,p.jsx)("div",{})})]})]})})})};var T=s(66538);class I extends a.Component{constructor(e){super(e),this.state={snapBtnSize:0,sizeClass:""},this.updateDimensions=this.updateDimensions.bind(this)}componentDidMount(){window.addEventListener("resize",this.updateDimensions),this.updateDimensions()}componentWillUnmount(){window.removeEventListener("resize",this.updateDimensions)}componentDidUpdate(){this.updateDimensions()}updateDimensions(){const{className:e,wall:t}=this.props,s=this.divRef.offsetWidth;s!==this.state.snapBtnSize&&(s<200&&s>150?this.setState({sizeClass:"".concat(e,"-3x")}):s<150&&s>120?this.setState({sizeClass:"".concat(e,"-2x")}):s<120&&s>0&&this.setState({sizeClass:"".concat(e,"-1x")}),this.setState({snapBtnSize:s}))}render(){const{className:e,wall:t}=this.props,{sizeClass:s}=this.state;return(0,p.jsx)("div",{className:"".concat(e," ").concat(s),ref:e=>{this.divRef=e},children:(0,p.jsx)(T.default,{UgcSettings:t.UgcSettings,id:t.Wall.id,tagShopWallId:t.Wall.wallId})})}}const S=e=>{let{wall:t,itemData:s,completeDataObject:o,parentID:i,itemIndex:n,clickToShowPopUp:l,onClickToCTA:r,postSizeInPx:c,isOnsite:d,onClickPopUpSlider:_}=e;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"tb_gt_post_small",children:[d&&0==s[0]?(0,p.jsx)("div",{className:"tb_gt_post_wrapper tb_onsite_post__",children:(0,p.jsxs)(a.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:[" ",(0,p.jsx)(I,{className:"tb_gt_post_in",wall:t})," "]})}):(0,p.jsx)(f,{parentID:i,ownerId:t.Wall.owner,wall:t,itemData:o[s[0]],itemIndex:n,personalization:t.Personalization,ThemeRule:t.ThemeRule,clickToShowPopUp:l,wallID:t.Wall.id,onClickToCTA:r,postSizeInPx:c,onClickPopUpSlider:_}),(0,p.jsx)(f,{parentID:i,ownerId:t.Wall.owner,wall:t,itemData:o[s[1]],itemIndex:n,personalization:t.Personalization,ThemeRule:t.ThemeRule,clickToShowPopUp:l,wallID:t.Wall.id,onClickToCTA:r,postSizeInPx:c,onClickPopUpSlider:_})]}),(0,p.jsx)("div",{className:"tb_gt_post_large",children:(0,p.jsx)(f,{parentID:i,ownerId:t.Wall.owner,wall:t,itemData:o[s[2]],itemIndex:n,personalization:t.Personalization,ThemeRule:t.ThemeRule,clickToShowPopUp:l,wallID:t.Wall.id,onClickToCTA:r,postSizeInPx:c,onClickPopUpSlider:_})})]})};var k=s(43635);s(37210);class C extends a.PureComponent{constructor(e){super(e),this.requestData=()=>{const{appendData:e,wall:t,preRender:s,hasMoreData:a}=this.props;a&&(0,k.Sx)(t.Wall.id,Math.floor(Date.now()/1e3),t.ThemeRule.numberOfPosts,e.networkID,e.after,s,e.heightEvent)},this.state={parent_id:""},this.inputRefs={}}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((e,t)=>{e.removeAttribute("role")}))}),100)}render(){const{postData:e,completeDataObject:t,wall:s,clickToShowPopUp:a,onClickToCTA:o,postSizeInPx:l,parentID:r,onClickPopUpSlider:c}=this.props,_=r,u=s.ThemeRule.numberOfCoumn,h=s.ThemeRule.mobileColumn,m=s.ThemeRule.slidePost,g=s.ThemeRule.slideDuration,w={grid:{rows:s.ThemeRule.multiRow},rewind:!0,speed:1e3,interval:1===m?1e3*parseInt(g):5e3,perPage:u>0?u:d.ZQ||d.ig?3:6,perMove:1,gap:0,autoplay:1===m,padding:0,pagination:!1,arrows:!0,breakpoints:{560:{perPage:h>0?h:1},767:{perPage:h>0?h:2},991:{perPage:h>0?h:3},1200:{perPage:u>0?u:d.ig?3:4},1400:{perPage:u>0?u:d.ig?3:5},1600:{perPage:u>0?u:d.ZQ||d.ig?3:6}}};let b=[];const x=!!s.UgcSettings.onsite_status;for(let i=0;i<e.length;){let t=0==i&&x?2:3;const s=2==t?[0].concat(e.slice(i,i+t)):e.slice(i,i+t);b.push(s),i+=t}return b=b.length<9?Array(10).fill(b).flat():b,e&&e.length>2?(0,p.jsx)("div",{className:"tb_gt_post_container",children:(0,p.jsxs)(i.tv,{hasTrack:!1,className:"tb_gt_post_slider",options:w,extensions:{Grid:n.r},ref:e=>this.inputRefs[_]=e,children:[(0,p.jsx)(i.Gj,{children:b.map(((e,n)=>e&&3==e.length?(0,p.jsx)(i.jw,{id:"tb_gt-".concat(n),className:"tb_gt_post_row tb_".concat(n),idd:r,children:(0,p.jsx)(S,{parentID:r,ownerId:s.Wall.owner,wall:s,completeDataObject:t,itemIndex:n,personalization:s.Personalization,ThemeRule:s.ThemeRule,clickToShowPopUp:a,wallID:s.Wall.id,onClickToCTA:o,postSizeInPx:l,indexNo:n<6?n:"0",largeDiv:66.66,smallDiv:33.33,itemData:e,isOnsite:x,onClickPopUpSlider:c})},n):null))}),(0,p.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_gt_arrow_wrapper_",children:[(0,p.jsx)("div",{className:"tb_gt_arrow splide__arrow splide__arrow--prev tb_gt_arrow tb_gt_arrow_left__ tb__icon tb-arrow-left-alt",role:"button","aria-label":"Go to previous slide",children:(0,p.jsx)("div",{})}),(0,p.jsx)("div",{className:"tb_gt_arrow splide__arrow splide__arrow--next  tb_gt_arrow_right__ tb__icon tb-arrow-right-alt",onClick:this.requestData,role:"button","aria-label":"Go to next slide",children:(0,p.jsx)("div",{})})]})]})}):null}}const D=(0,o.$j)((e=>({})),(e=>({getDataNextSteps:(t,s,a,o,i,n,l,r)=>e((0,k.Sx)(t,s,a,o,i,n,l,r))})))(C)}}]);