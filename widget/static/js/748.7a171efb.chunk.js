"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[748],{90748:(e,t,s)=>{s.r(t),s.d(t,{default:()=>x,getPostWidth:()=>w});var a=s(72791),i=s(77581),l=s(11225),n=s(2703),o=s(46535),c=s(20169),r=s(70757),d=s(20672),h=s(80184);const p=a.lazy((()=>Promise.all([s.e(8947),s.e(6710),s.e(6425)]).then(s.bind(s,16425)))),_=o.ZQ?null:200,m=e=>{let{itemData:t,personalization:s,adjustWidth:i,ThemeRule:l,clickToShowPopUp:m,itemIndex:u,wallID:w,ownerId:b,postSizeInPx:x,wall:g,onClickPopUpSlider:j}=e;const k=(0,a.useRef)(null),v=1!==t.type,f=s.trimcontent?(0,n.Sv)(t.content,_):t.content,I=x.adjustWidth<250;(0,a.useEffect)((()=>{o.nX&&(0,n.YN)(k)}),[]);const D=!!(t.hotspot&&t.ugc_products.length>0),C=!!(o.ig&&!t.hotspot&&t.ugc_products.length>0),P=0==l.postHover&&o.ig?"light":"dark";return(0,a.useEffect)((()=>{t.isPopUp&&j(u,t)}),[u,t.isPopUp,t]),(0,h.jsx)("div",{id:"tb-sp-post-".concat(t.id),className:"tb_ct_post_wrapper".concat(I?" tb_ct_post_wrapper2x":""),style:{width:"".concat(i,"%"),padding:s.padding/2,float:"left"},"tb-network":t.network.id,"tb-product":C?1:D?2:0,tabIndex:"0",role:"article","aria-label":"Post ".concat(parseInt(u)+1,",").concat(f),ref:k,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,children:(0,h.jsx)("div",{className:"tb_ct_post_in",onClick:m(u,t),children:(0,h.jsxs)("div",{className:"tb_ct_post_media_wrapp",children:[t.share.status&&!o.ig?(0,h.jsx)(c.Z,{share:t.share,shareClass:"tb_ct_share_container",item:t,wallID:w,ownerId:b}):"",v?(0,h.jsx)(a.Suspense,{fallback:(0,h.jsx)(h.Fragment,{}),children:(0,h.jsx)(p,{itemData:{...t,postFileNew:t.filename},wallID:w,ownerId:b,ThemeID:s.widgetTheme,wall:g},"img".concat(u,"_").concat(t.id))}):"",D?null:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:"tb_ct_post_details",children:o.ig?(0,h.jsxs)("div",{className:"tb_ct_social_",children:[(0,h.jsx)(r.default,{networkClass:"tb_ct_social__ico",network:t.network,isDefault:1===l.iconType,ThemeRule:l,Personalization:s}),C?(0,h.jsx)(d.Z,{ThemeRule:l,btnClass:"tb_ct_btn_wrap"}):null]}):null}),(0,h.jsx)("div",{className:"tb_ct_post_overlay tb_ct_post_overlay-".concat(P),children:(0,h.jsx)("div",{})})]})]})})})},u=e=>{let{wall:t,largeDiv:s,smallDiv:a,itemData:i,completeDataObject:l,parentID:n,itemIndex:o,clickToShowPopUp:c,onClickToCTA:r,postSizeInPx:d,adjustWidth:p,onClickPopUpSlider:_}=e;const u=t.ThemeRule.highlightPosition,w=o%2,b={width:s+"%",float:"0"==w?"right"==u?"right":"left":"right"==u?"left":"right"},x={width:a+"%",float:"right"==u?"left":"right"};return i&&i.length>0?(0,h.jsxs)("div",{className:"ts_cs_post_row",style:{width:"100%"},children:[(0,h.jsx)("div",{className:"ts_cs_post_large",style:b,children:(0,h.jsx)(m,{ownerId:t.Wall.owner,itemData:l[i[0]],itemIndex:o,adjustWidth:100,personalization:t.Personalization,ThemeRule:t.ThemeRule,wallID:t.Wall.id,clickToShowPopUp:c,onClickToCTA:r,postSizeInPx:d,wall:t,completeDataObject:l,onClickPopUpSlider:_},"sqr_crd_".concat(0,"_",l[i[0]].id))}),(0,h.jsxs)("div",{className:"ts_cs_post_small",style:x,children:[i&&i.length>0?i.map(((e,s)=>{const a=l[e];return 0!=s?(0,h.jsx)(m,{ownerId:t.Wall.owner,itemData:a,itemIndex:s,adjustWidth:p,personalization:t.Personalization,ThemeRule:t.ThemeRule,wallID:t.Wall.id,clickToShowPopUp:c,onClickToCTA:r,postSizeInPx:d,wall:t,completeDataObject:l,onClickPopUpSlider:_},"sqr_crd_".concat(s,"_").concat(e.id)):null})):null," "]})]}):null},w=(e,t)=>{const s=(e,t)=>({cardWidth:t,largeDiv:2*e,smallDiv:100-2*e});switch(t){case 3:return s(100/3,100);case 5:return s(e>767?25:100/3,e>767?50:100);case 7:return s(e>767?20:100/3,e>767?100/3:100);case 9:return s(e>767?100/6:100/3,e>767?25:100);default:return s(e<767?100/3:100,100)}};class b extends a.PureComponent{constructor(){super(...arguments),this.state={postData:[],windowWidth:window.innerWidth}}componentDidMount(){const{renderId:e}=this.props;e.renderId&&this.setState({windowWidth:document.getElementById(e.renderId).clientWidth})}render(){const{postData:e,completeDataObject:t,wall:s,clickToShowPopUp:a,cardNumber:i,onClickToCTA:l,postSizeInPx:n,onClickPopUpSlider:o}=this.props,{windowWidth:c}=this.state;let r=e.length;if(s&&1==s.Personalization.fitRow&&e.length>=parseInt(i)){let t=e.length/parseInt(i);r=parseInt(i)*parseInt(t)}var d="";const p=s.ThemeRule.numberOfCoumn,{cardWidth:_,largeDiv:m,smallDiv:b}=w(c,p);d=c<768?3:p||1;for(var x=0,g=e.length,j=[];x<g;)j.push(e.slice(x,x+=d));var k=c<768?"3":p;return(0,h.jsx)("div",{tabIndex:"0","aria-label":"There are ".concat(e&&e.length>0?e.length:0," posts in the feed"),role:"feed",className:"tb_ct_post_container",children:j&&j.length>0&&j.map(((e,i)=>e.length==k?(0,h.jsx)(u,{ownerId:s.Wall.owner,itemData:e,itemIndex:i,adjustWidth:_,personalization:s.Personalization,ThemeRule:s.ThemeRule,wallID:s.Wall.id,clickToShowPopUp:a,onClickToCTA:l,postSizeInPx:n,wall:s,completeDataObject:t,largeDiv:m,smallDiv:b,onClickPopUpSlider:o},"sqr_crd_".concat(i,"_").concat(e.id)):null))})}}const x=(0,i.$j)((e=>({postHeight:e.postHeight.data})),(e=>({managePostHeight:t=>e((0,l.B0)(t))})))(b)},70757:(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var a=s(72791),i=s(46535),l=s(80184);const n=a.lazy((()=>s.e(1088).then(s.bind(s,41088))));class o extends a.PureComponent{render(){const{network:e,networkClass:t,ThemeRule:s,isDefault:o,Personalization:c}=this.props,r=!!o&&(7!==e.id&&4!==e.id&&36!==e.id),d=i.ZQ&&36==e.id?"tagembed":e.icon;return r?(0,l.jsx)("div",{className:"".concat(t," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,l.jsx)("div",{})}):(0,l.jsxs)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:[" ",(0,l.jsx)(n,{network:e,networkClass:t})]})}}},20169:(e,t,s)=>{s.d(t,{Z:()=>o});var a=s(72791),i=s(11225),l=s(46535),n=s(80184);class o extends a.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{item:s,wallID:a,ownerId:n}=this.props;t.stopPropagation(),l.ZQ||(0,i.S5)({type:2,action:2,wall:a,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:n}),(0,i.Fv)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{share:e,shareClass:t}=this.props;return(0,n.jsxs)("div",{className:"tb_share_wrapper ".concat(t),children:[(0,n.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(l.ZQ?"tb-share-fill":"tb-share"),children:(0,n.jsx)("div",{})}),(0,n.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[e.facebook?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(e.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,n.jsx)("div",{})})}):"",e.twitter?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(e.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,n.jsx)("div",{})})}):"",e.linkedin?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(e.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,n.jsx)("div",{})})}):""]})]})}}},20672:(e,t,s)=>{s.d(t,{Z:()=>l});var a=s(2703),i=s(80184);const l=e=>{let{ThemeRule:t,btnClass:s}=e;const l={fontFamily:t.css_font};return(0,i.jsx)("div",{className:"tb_shop_btn_wrap ".concat(s),children:(0,i.jsx)("div",{className:"tb_shop_btn".concat(t.postHover||(0,a.mD)(4)||(0,a.mD)(55)?" tb_shop_btn_light":" tb_shop_btn_dark"),style:l,children:t.shoppingText})})}}}]);
//# sourceMappingURL=748.7a171efb.chunk.js.map