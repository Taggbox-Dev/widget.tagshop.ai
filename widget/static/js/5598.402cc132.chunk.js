"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[5598],{15598:(e,t,s)=>{s.r(t),s.d(t,{default:()=>x,getPostWidth:()=>b});var a=s(47313),l=s(17739),i=s(35179),n=s(5744),o=s(25810),c=s(11502),r=s(46417);const d=a.lazy((()=>Promise.all([s.e(6119),s.e(421)]).then(s.bind(s,20421)))),h=i.ZQ?null:200,p=e=>{let{itemData:t,personalization:s,adjustWidth:p,ThemeRule:_,clickToShowPopUp:m,itemIndex:u,wallID:b,ownerId:w,postSizeInPx:x,wall:g,onClickPopUpSlider:j}=e;const k=(0,a.useRef)(null),v=2===t.type||3===t.type||4===t.type||5===t.type,f=s.trimcontent?(0,l.Sv)(t.content,h):t.content,I=x.adjustWidth<250;(0,a.useEffect)((()=>{i.nX&&(0,l.YN)(k)}),[]);const C=!!(t.hotspot&&t.ugc_products.length>0),D=!!(i.ig&&!t.hotspot&&t.ugc_products.length>0),P=i.ig&&1==_.postHover?" tb_ct_post_overlay-dark":" tb_ct_post_overlay-light";return(0,a.useEffect)((()=>{t.isPopUp&&j(u,t)}),[u,t.isPopUp,t]),(0,r.jsx)("div",{id:"tb-sp-post-".concat(t.id),className:"tb_ct_post_wrapper".concat(I?" tb_ct_post_wrapper2x":""),style:{width:"".concat(p,"%"),padding:s.padding/2,float:"left"},"tb-network":t.network.id,"tb-product":D?1:C?2:0,tabIndex:"0",role:"article","aria-label":"Post ".concat(parseInt(u)+1,",").concat(f),ref:k,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,children:(0,r.jsx)("div",{className:"tb_ct_post_in",onClick:m(u,t),children:(0,r.jsxs)("div",{className:"tb_ct_post_media_wrapp",children:[t.share.status&&!i.ig?(0,r.jsx)(n.Z,{share:t.share,shareClass:"tb_ct_share_container",item:t,wallID:b,ownerId:w}):"",v?(0,r.jsx)(a.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(d,{itemData:t,wallID:b,ownerId:w,ThemeID:s.widgetTheme,wall:g},"img".concat(u,"_").concat(t.id))}):"",C?null:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"tb_ct_post_details",children:i.ig?(0,r.jsxs)("div",{className:"tb_ct_social_",children:[(0,r.jsx)(o.default,{networkClass:"tb_ct_social__ico",network:t.network,isDefault:1===_.iconType,ThemeRule:_,Personalization:s}),D?(0,r.jsx)(c.Z,{ThemeRule:_,btnClass:"tb_ct_btn_wrap"}):null]}):null}),(0,r.jsx)("div",{className:"tb_ct_post_overlay".concat(P),style:{backgroundColor:i.Jx?_.cardColor:null},children:(0,r.jsx)("div",{})})]})]})})})};var _=s(43411),m=s(43635);const u=e=>{let{wall:t,largeDiv:s,smallDiv:a,itemData:l,completeDataObject:i,parentID:n,itemIndex:o,clickToShowPopUp:c,onClickToCTA:d,postSizeInPx:h,adjustWidth:_,onClickPopUpSlider:m}=e;const u=t.ThemeRule.highlightPosition,b=o%2,w={width:s+"%",float:"0"==b?"right"==u?"right":"left":"right"==u?"left":"right"},x={width:a+"%",float:"right"==u?"left":"right"};return l&&l.length>0?(0,r.jsxs)("div",{className:"ts_cs_post_row",style:{width:"100%"},children:[(0,r.jsx)("div",{className:"ts_cs_post_large",style:w,children:(0,r.jsx)(p,{ownerId:t.Wall.owner,itemData:i[l[0]],itemIndex:o,adjustWidth:100,personalization:t.Personalization,ThemeRule:t.ThemeRule,wallID:t.Wall.id,clickToShowPopUp:c,onClickToCTA:d,postSizeInPx:h,wall:t,completeDataObject:i,onClickPopUpSlider:m},"sqr_crd_".concat(0,"_",i[l[0]].id))}),(0,r.jsxs)("div",{className:"ts_cs_post_small",style:x,children:[l&&l.length>0?l.map(((e,s)=>{const a=i[e];return 0!=s?(0,r.jsx)(p,{ownerId:t.Wall.owner,itemData:a,itemIndex:s,adjustWidth:_,personalization:t.Personalization,ThemeRule:t.ThemeRule,wallID:t.Wall.id,clickToShowPopUp:c,onClickToCTA:d,postSizeInPx:h,wall:t,completeDataObject:i,onClickPopUpSlider:m},"sqr_crd_".concat(s,"_").concat(e.id)):null})):null," "]})]}):null},b=(e,t)=>{const s=(e,t)=>({cardWidth:t,largeDiv:2*e,smallDiv:100-2*e});switch(t){case 3:return s(100/3,100);case 5:return s(e>767?25:100/3,e>767?50:100);case 7:return s(e>767?20:100/3,e>767?100/3:100);case 9:return s(e>767?100/6:100/3,e>767?25:100);default:return s(e<767?100/3:100,100)}};class w extends a.PureComponent{constructor(){super(...arguments),this.state={postData:[],windowWidth:window.innerWidth}}componentDidMount(){const{renderId:e}=this.props;e.renderId&&this.setState({windowWidth:document.getElementById(e.renderId).clientWidth})}render(){const{postData:e,completeDataObject:t,adjustWidth:s,wall:a,clickToShowPopUp:l,cardNumber:i,onClickToCTA:n,postSizeInPx:o,onClickPopUpSlider:c}=this.props,{windowWidth:d}=this.state;let h=e.length;if(a&&1==a.Personalization.fitRow&&e.length>=parseInt(i)){let t=e.length/parseInt(i);h=parseInt(i)*parseInt(t)}var p="";const _=a.ThemeRule.numberOfCoumn,{cardWidth:m,largeDiv:w,smallDiv:x}=b(d,_);p=d<768?3:_||1;for(var g=0,j=e.length,k=[];g<j;)k.push(e.slice(g,g+=p));var v=d<768?"3":_;return(0,r.jsx)("div",{tabIndex:"0","aria-label":"There are ".concat(e&&e.length>0?e.length:0," posts in the feed"),role:"feed",className:"tb_ct_post_container",children:k&&k.length>0&&k.map(((e,s)=>e.length==v?(0,r.jsx)(u,{ownerId:a.Wall.owner,itemData:e,itemIndex:s,adjustWidth:m,personalization:a.Personalization,ThemeRule:a.ThemeRule,wallID:a.Wall.id,clickToShowPopUp:l,onClickToCTA:n,postSizeInPx:o,wall:a,completeDataObject:t,largeDiv:w,smallDiv:x,onClickPopUpSlider:c},"sqr_crd_".concat(s,"_").concat(e.id)):null))})}}const x=(0,_.$j)((e=>({postHeight:e.postHeight.data})),(e=>({managePostHeight:t=>e((0,m.B0)(t))})))(w)},25810:(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var a=s(47313),l=s(35179),i=(s(17739),s(46417));const n=a.lazy((()=>s.e(5867).then(s.bind(s,95867))));class o extends a.PureComponent{render(){const{network:e,networkClass:t,ThemeRule:s,isDefault:o,Personalization:c}=this.props,r=!!o&&(7!==e.id&&4!==e.id&&36!==e.id),d=l.ZQ&&36==e.id?"tagembed":e.icon;return r?(0,i.jsx)("div",{className:"".concat(t," tb__icon tb-").concat(d.replace(/fa-/g,"")),style:{color:""},children:(0,i.jsx)("div",{})}):(0,i.jsxs)(a.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:[" ",(0,i.jsx)(n,{network:e,networkClass:t})]})}}},5744:(e,t,s)=>{s.d(t,{Z:()=>o});var a=s(47313),l=s(43635),i=s(35179),n=s(46417);class o extends a.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{item:s,wallID:a,ownerId:n}=this.props;t.stopPropagation(),i.ZQ||(0,l.S5)({type:2,action:2,wall:a,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:n}),(0,l.Fv)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{share:e,shareClass:t}=this.props;return(0,n.jsxs)("div",{className:"tb_share_wrapper ".concat(t),children:[(0,n.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(i.ZQ?"tb-share-fill":"tb-share"),children:(0,n.jsx)("div",{})}),(0,n.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[e.facebook?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(e.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,n.jsx)("div",{})})}):"",e.twitter?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(e.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,n.jsx)("div",{})})}):"",e.linkedin?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(e.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,n.jsx)("div",{})})}):""]})]})}}},11502:(e,t,s)=>{s.d(t,{Z:()=>i});var a=s(17739),l=s(46417);const i=e=>{let{ThemeRule:t,btnClass:s}=e;const i={fontFamily:t.css_font};return(0,l.jsx)("div",{className:"tb_shop_btn_wrap ".concat(s),children:(0,l.jsx)("div",{className:"tb_shop_btn".concat(t.postHover||(0,a.mD)(4)||(0,a.mD)(55)?" tb_shop_btn_light":" tb_shop_btn_dark"),style:i,children:t.shoppingText})})}}}]);