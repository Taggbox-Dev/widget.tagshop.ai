"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[271],{25810:(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var n=s(47313),a=s(35179),o=s(17739),i=s(46417);const l=n.lazy((()=>s.e(5867).then(s.bind(s,95867))));class r extends n.PureComponent{render(){const{network:e,networkClass:t,ThemeRule:s,isDefault:r,Personalization:c}=this.props,d=!!r&&(7!==e.id&&4!==e.id&&36!==e.id),p=a.ZQ&&36==e.id?"tagembed":e.icon;var h=[61,16,53,4,50,55].includes(parseInt(null===c||void 0===c?void 0:c.widgetTheme))?1==s.postHover?(0,o.uu)(s.iconColor,"#000000"):(0,o.uu)(s.iconColor,"#ffffff"):s.iconColor;const _=(0,o.mD)(59)?null:a.ig?a.Jc?(0,o.uu)(s.iconColor,s.cardColor):h:s.iconColor;return d?(0,i.jsx)("div",{className:"".concat(t," tb__icon tb-").concat(p.replace(/fa-/g,"")),style:{color:_},children:(0,i.jsx)("div",{})}):(0,i.jsxs)(n.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:[" ",(0,i.jsx)(l,{network:e,networkClass:t})]})}}},5744:(e,t,s)=>{s.d(t,{Z:()=>l});var n=s(47313),a=s(43635),o=s(35179),i=s(46417);class l extends n.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{item:s,wallID:n,ownerId:i}=this.props;t.stopPropagation(),o.ZQ||(0,a.S5)({type:2,action:2,wall:n,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:i}),(0,a.Fv)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{share:e,shareClass:t}=this.props;return(0,i.jsxs)("div",{className:"tb_share_wrapper ".concat(t),children:[(0,i.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(o.ZQ?"tb-share-fill":"tb-share"),children:(0,i.jsx)("div",{})}),(0,i.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[e.facebook?(0,i.jsx)("div",{className:"tb_share_icon_list",children:(0,i.jsx)("div",{onClick:this.onClickData(e.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,i.jsx)("div",{})})}):"",e.twitter?(0,i.jsx)("div",{className:"tb_share_icon_list",children:(0,i.jsx)("div",{onClick:this.onClickData(e.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,i.jsx)("div",{})})}):"",e.linkedin?(0,i.jsx)("div",{className:"tb_share_icon_list",children:(0,i.jsx)("div",{onClick:this.onClickData(e.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,i.jsx)("div",{})})}):""]})]})}}},11502:(e,t,s)=>{s.d(t,{Z:()=>o});var n=s(17739),a=s(46417);const o=e=>{let{ThemeRule:t,btnClass:s}=e;const o={fontFamily:t.css_font};return(0,a.jsx)("div",{className:"tb_shop_btn_wrap ".concat(s),children:(0,a.jsx)("div",{className:"tb_shop_btn".concat(t.postHover||(0,n.mD)(4)||(0,n.mD)(55)?" tb_shop_btn_light":" tb_shop_btn_dark"),style:o,children:t.shoppingText})})}},30271:(e,t,s)=>{s.r(t),s.d(t,{default:()=>w});var n=s(47313),a=s(17739),o=s(35179),i=s(5744),l=s(25810),r=s(11502),c=s(46417);const d=n.lazy((()=>s.e(1101).then(s.bind(s,1101)))),p=n.lazy((()=>Promise.all([s.e(6119),s.e(407)]).then(s.bind(s,407)))),h=n.lazy((()=>Promise.all([s.e(6390),s.e(8342)]).then(s.bind(s,62245)))),_=o.ZQ?null:200,b=e=>{let{itemData:t,personalization:s,adjustWidth:b,ThemeRule:u,clickToShowPopUp:m,itemIndex:x,wallID:w,ownerId:j,postSizeInPx:k,wall:f,onClickPopUpSlider:v}=e;const g=(0,n.useRef)(null),C=2===t.type||3===t.type||4===t.type||5===t.type,I=s.trimcontent?(0,a.Sv)(t.content,_):t.content,T=k.adjustWidth<250,P=u.postHover?" tb_sp_post_overlay-light":" tb_sp_post_overlay-dark";(0,n.useEffect)((()=>{o.nX&&(0,a.YN)(g)}),[]);const N=!!(t.hotspot&&t.ugc_products.length>0),D=!!(o.ig&&!t.hotspot&&t.ugc_products.length>0);return(0,n.useEffect)((()=>{t.isPopUp&&v(x,t)}),[x,t.isPopUp,t]),(0,c.jsx)("div",{id:"tb-sp-post-".concat(t.id),className:"tb_sp_post_wrapper".concat(T?" tb_sp_post_wrapper2x":""),style:{width:"".concat(b,"%"),padding:s.padding/2},"tb-network":t.network.id,"tb-product":D?1:N?2:0,tabIndex:"0",role:"article","aria-label":"Post ".concat(parseInt(x)+1,",").concat(I),ref:g,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,children:(0,c.jsx)("div",{className:"tb_sp_post_in",onClick:m(x,t),children:(0,c.jsxs)("div",{className:"tb_sp_post_media_wrapp",children:[t.share.status?(0,c.jsx)(i.Z,{share:t.share,shareClass:"tb_sp_share_container",item:t,wallID:w,ownerId:j}):"",C?(0,c.jsx)(n.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:(0,c.jsx)(p,{itemData:t,wallID:w,ownerId:j,ThemeID:s.widgetTheme,wall:f},"img".concat(x,"_").concat(t.id))}):"",N?null:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"tb_sp_post_details",children:[o.ig?(0,c.jsx)("div",{className:"tb_sp_social_",children:(0,c.jsx)(l.default,{networkClass:"tb_sp_social__ico",network:t.network,isDefault:1===u.iconType,ThemeRule:u,Personalization:s})}):null,D?(0,c.jsx)(r.Z,{ThemeRule:u,btnClass:"tb_sp_btn_wrap"}):null,o.ig?null:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"tb_sp_contant_wrapper",children:u.hideContent&&1!=t.type?"":(0,c.jsx)(n.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:(0,c.jsx)(h,{contentClass:"tb_sp_content",item:t,content:I,font:u,ThemeRule:u,personalization:s,contentTitle:t.contentTitle})})}),(0,c.jsx)(n.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:(0,c.jsx)(d,{ownerId:j,postTime:t.createdAt,author:t.author,network:t.network,font:u,personalization:s,ThemeRule:u})})]})]}),(0,c.jsx)("div",{className:"tb_sp_post_overlay".concat(P),children:(0,c.jsx)("div",{})})]})]})})})};var u=s(43411),m=s(43635);class x extends n.PureComponent{constructor(){super(...arguments),this.state={postData:[]}}render(){const{postData:e,completeDataObject:t,adjustWidth:s,wall:n,clickToShowPopUp:a,cardNumber:o,onClickToCTA:i,postSizeInPx:l,onClickPopUpSlider:r}=this.props;let d=e.length;if(n&&1==n.Personalization.fitRow&&e.length>=parseInt(o)){let t=e.length/parseInt(o);d=parseInt(o)*parseInt(t)}return(0,c.jsx)("div",{tabIndex:"0","aria-label":"There are ".concat(e&&e.length>0?e.length:0," posts in the feed"),role:"feed",className:"tb_sp_post_container",children:e&&e.length>0&&e.map(((e,o)=>{const p=t[e];return parseInt(d)>=parseInt(o+1)?(0,c.jsx)(b,{ownerId:n.Wall.owner,itemData:p,itemIndex:o,adjustWidth:1==p.highlight?2*s:s,personalization:n.Personalization,ThemeRule:n.ThemeRule,wallID:n.Wall.id,clickToShowPopUp:a,onClickToCTA:i,postSizeInPx:l,wall:n,onClickPopUpSlider:r},"sqr_crd_".concat(o,"_").concat(e.id)):null}))})}}const w=(0,u.$j)((e=>({postHeight:e.postHeight.data})),(e=>({managePostHeight:t=>e((0,m.B0)(t))})))(x)}}]);