"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[82],{7138:(t,e,s)=>{s.d(e,{Z:()=>i});var a=s(47313),o=s(46417);class l extends a.PureComponent{render(){const{cta:t,ctaClass:e,postCta:s,onClickToCTA:a,item:l}=this.props,i=!(!s||1!==s.status);return(0,o.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),a(l),window.open("".concat(i?s.url:t.url),"_blank")},children:[" ",i?s.text:t.text]})}}const i=l},76254:(t,e,s)=>{s.r(e),s.d(e,{default:()=>w});var a=s(47313),o=s(35179),l=s(43411),i=s(11774),r=s(43635),n=s(44084),c=s(84261),d=s(81349),p=s(46417);const h=t=>{let{itemData:e,wallID:s,themeID:a,ownerId:l,ThemeRule:i}=t;const r=o.ZQ&&i.aspectImageRatio?i.aspectImageRatio:100;return(0,p.jsxs)("div",{className:"tb_ht_media_wrap",children:[(0,p.jsx)(d.Z,{itemData:e,IconClass:"tb_ht_media_icon",show:o.ZQ,isCenter:!1}),(0,p.jsx)(c.default,{ImageClass:"tb_ht_image",data:e,wallID:s,themeID:a,ownerId:l,size:r,hotspot:!1})]})};var _=s(25810),u=s(11502),m=s(7138);const g=t=>{let{itemData:e,personalization:s,ThemeRule:a,wallID:l,ownerId:i,onClickToCTA:r,clickToShowPopUp:n,itemIndex:c,adjustWidth:d}=t;const g=1==a.postHover&&o.ig||o.ZQ?" tb_ht_post_overlay-dark":"",b=0==a.postHover&&o.ig?" tb_ht_post_overlay-light":"",w={padding:s.padding/2},v=2===e.type||3===e.type||4===e.type||5===e.type,x=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status)&&!!o.ZQ,j=o.ZQ?null:"50%",D=!!(o.ig&&e.ugc_products.length>0),T=!!(o.ig&&e.ugc_products&&e.ugc_products.length>0),f=!(!o.ig||!T||0!==e.hotspot),k=!!(o.ig&&e.hotspot&&T);return(0,p.jsx)("div",{id:"tb-ht-post-".concat(e.id),className:"tb_ht_post_wrapper",style:w,"tb-network":e.network.id,"tb-product":f?1:k?2:0,children:(0,p.jsx)("div",{className:"tb_ht_post_in",onClick:n(c,e),style:{borderRadius:j},children:(0,p.jsxs)("div",{className:"tb_ht_post_media_wrapp",children:[v?(0,p.jsx)(h,{itemData:e,wallID:l,themeID:s.widgetTheme,ownerId:i,ThemeRule:a}):"",(0,p.jsxs)("div",{className:"tb_ht_post_details",children:[(0,p.jsx)("div",{className:"tb_ht_social_",children:(0,p.jsx)(_.default,{networkClass:"tb_ht_social_ico_",network:e.network,ThemeRule:a,isDefault:1===a.iconType,Personalization:s})}),D?(0,p.jsx)(u.Z,{ThemeRule:a,btnClass:"tb_ht_btn_wrap"}):null,x?(0,p.jsxs)("div",{className:"tb_ht_post_cta",onClick:t=>{t.stopPropagation()},children:[(0,p.jsx)(m.Z,{ctaClass:"tb_ht_post_cta_btn",cta:e.cta,item:e,onClickToCTA:r})," "]}):""]}),(0,p.jsx)("div",{className:"tb_ht_post_overlay".concat(g).concat(b),style:{backgroundColor:o.Jx?a.cardColor:null},children:(0,p.jsx)("div",{})})]})})})};s(37210);class b extends a.Component{constructor(t){super(t),this.requestData=()=>{const{appendData:t,wall:e,preRender:s,hasMoreData:a,getDataNextSteps:o}=this.props;a&&o(e.Wall.id,Math.floor(Date.now()/1e3),e.ThemeRule.numberOfPosts,t.networkID,t.after,s,t.heightEvent)},this.onUpdateData=t=>{},this.autoScrollSlider=(t,e,s,a)=>{const l=o.ZQ?t._o.perPage+t.index:t.index;t.length-l===(o.ZQ?1:t._o.perPage)&&this.requestData()},this.inputRefs={}}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((t,e)=>{t.removeAttribute("role")}))}),100)}componentDidUpdate(){const t=Object.values(this.inputRefs)[0],{postData:e,completeDataObject:s,onClickPopUpSlider:a,wall:o,parentID:l}=this.props,i=o.ThemeRule.multiRow;if(t&&Object.values(t)[5].length>0){Object.values(t)[5].map(((t,o)=>{if(t.classList){const o=String(t.classList.value).split(" ").filter((t=>String(t).includes("tb_")));var i=o[0];String(o[0]).includes("tb_")&&(i=String(o[0]).replace("tb_",""));const r=e.findIndex((t=>t==i));let n=document.querySelectorAll("#".concat(t.id));for(let t=0;t<n.length;t++){let e=n[t],o=e.getAttribute("p_id");String(l)===String(o)&&e.addEventListener("click",(t=>{t.preventDefault();const e=s[i];a(r,e)}))}}}))}else if(2==i){Object.values(t)[5].map(((t,o)=>{t&&t.childNodes.length>0&&t.childNodes.forEach((t=>{t&&t.childNodes.length>0&&t.childNodes.forEach((t=>{if(t.classList){const i=String(t.classList.value).split(" ").filter((t=>String(t).includes("tb_")));var o=i[0];String(i[0]).includes("tb_")&&(o=String(i[0]).replace("tb_",""));const r=e.findIndex((t=>t==o));let n=document.querySelectorAll(".tb_hs_post_container #".concat(t.id));for(let t=0;t<n.length;t++){let e=n[t],i=e.getAttribute("p_id");String(l)===String(i)&&e.addEventListener("click",(t=>{t.preventDefault();const e=s[o];a(r,e)}))}}}))}))}))}}render(){var t;const{postData:e,completeDataObject:s,wall:a,clickToShowPopUp:l,onClickToCTA:r,parentID:c,adjustWidth:d,cardNumber:h}=this.props,_=c,u=a.ThemeRule.numberOfCoumn,m=a.ThemeRule.mobileColumn,b=a.ThemeRule.slidePost,w=a.ThemeRule.slideDuration,v=a.Personalization.autoScrollStatus,x=o.ZQ?a.ThemeRule.multiRow:1,j=o.ZQ&&void 0!==(null===(t=a.Personalization)||void 0===t?void 0:t.clonePost)&&0===a.Personalization.clonePost?{clones:0}:{},D=1!=v?!(Object.keys(j).length>0)&&"loop":"loop",T={...j,grid:{rows:x},type:1!==v&&D,rewind:!1,rewindSpeed:1e3,interval:1===b&&parseInt(w)>0?1e3*parseInt(w):5e3,perPage:o.ig?h:u>0?u:5,perMove:1,gap:0,autoplay:1===b,padding:0,pagination:!1,arrows:!0,breakpoints:{560:{perPage:o.ig?h:m>0?m:1},767:{perPage:o.ig?h:m>0?m:2},991:{perPage:o.ig?h:m>0?m:3},1200:{perPage:o.ig?h:u>0?u:4},1400:{perPage:o.ig?h:u>0?u:5},1600:{perPage:o.ig?h:u>0?u:6}}};return""!=c?(0,p.jsx)("div",{className:"tb_ht_post_container",children:(0,p.jsxs)(i.tv,{hasTrack:!1,className:"tb_ht_post_slider",options:T,extensions:{Grid:n.r},ref:t=>this.inputRefs[_]=t,onMove:this.autoScrollSlider,children:[(0,p.jsx)(i.Gj,{children:(a.ThemeRule.multiRow>1&&1!==e.length&&e.length%2!==0?e.pop():e)&&e&&e.length>0&&e.map(((t,e)=>{const o=s[t];return(0,p.jsx)(i.jw,{style:{margin:0,padding:0},className:"tb_".concat(o.id),p_id:c,children:(0,p.jsx)(g,{itemData:o,itemIndex:e,personalization:a.Personalization,ThemeRule:a.ThemeRule,clickToShowPopUp:l,wallID:a.Wall.id,onClickToCTA:r,adjustWidth:d})},e)}))}),(0,p.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_ht_arrow_wrapper_",children:[(0,p.jsx)("div",{className:"tb_ht_arrow splide__arrow splide__arrow--prev tb_ht_arrow tb_ht_arrow_left__ tb__icon tb-arrow-left-alt",children:(0,p.jsx)("div",{})}),(0,p.jsx)("div",{className:"tb_ht_arrow splide__arrow splide__arrow--next  tb_ht_arrow_right__ tb__icon tb-arrow-right-alt",children:(0,p.jsx)("div",{})})]})]})}):null}}const w=(0,a.memo)((0,l.$j)((t=>({})),(t=>({getDataNextSteps:(e,s,a,o,l,i,n,c)=>t((0,r.Sx)(e,s,a,o,l,i,n,c))})))(b))}}]);