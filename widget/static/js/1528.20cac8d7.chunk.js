"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[1528],{46588:(t,e,o)=>{o.d(e,{ht:()=>c});var a=o(98501),l=o(70656),i=o(35179),d=o(71287),s=o(32626);let n=[];const c=t=>{t.persist();const e=t.target,{network:o,itemId:a,themeId:l}=e.dataset;if(1!=o||[3,4,16,47,50,55,60].includes(l))n.includes(t)||n.push(t);else{const t=document.querySelector(".tb_media-".concat(a));t&&(t.style.display="none")}1===n.length&&r()},r=async()=>{var t;const{postData:e,wall:o}=l.Z.getState().appData;if(!o||!Object.keys(o).length||!n.length)return;const{User:c,Wall:u}=o,m=null===c||void 0===c?void 0:c.id,h=(i.ig,null===u||void 0===u?void 0:u.id),v=null===(t=n[0])||void 0===t?void 0:t.target,{filterId:g,network:_,itemId:b,load:w}=v.dataset,f=document.querySelector('img[data-item-id="'.concat(b,'"]')),y=null!==e&&void 0!==e&&e.completeDataObject?Object.values(e.completeDataObject).filter((t=>t.id===b)):[];if(null!==y&&void 0!==y&&y.length){var I;const t=await(async t=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((e=>t.includes(e)))||await fetch(t).then((t=>t.ok)).catch((()=>!1)))(null===(I=y[0])||void 0===I?void 0:I.postFileNew);if(!t&&f){if([2,18,3,28].includes(+_)&&"0"===w&&"34"!==g&&!v.src.includes("cloud.taggbox.com")){const t=((t,e,o)=>{var a,l,i,d,s;const{UserPlan:n,Wall:c}=e;return{table_name:null===n||void 0===n?void 0:n.db_table,...t,...null!==o&&void 0!==o&&o.length?{feedId:null===(a=o[0])||void 0===a?void 0:a.feedId,type:null===(l=o[0])||void 0===l?void 0:l.type,link:null===(i=o[0])||void 0===i?void 0:i.link,postFile:null===(d=o[0])||void 0===d?void 0:d.postFile,mediaFile:null===(s=o[0])||void 0===s?void 0:s.mediaFile}:{},url:null===c||void 0===c?void 0:c.url}})({wallId:h,postId:b,ownerId:m},o,y);try{const{data:e}=await(new s.Z).post(i.g$,t,{headers:d.JW}),o=i.ig||i.Jx?"":"https://images.".concat(i.yM,"/");v.src="18"===_?"".concat(o).concat(e.media):e.media}catch{v.src=a.Ty}finally{p(v)}}else v.src=a.Ty,p(v);n.shift(),r()}else{const t="".concat(a.do,"/media/images/no-image.svg");v.src=t,v.srcset=t,p(v),n.shift()}}},p=t=>t.setAttribute("data-load","1")},91528:(t,e,o)=>{o.r(e),o.d(e,{default:()=>n});var a=o(47313),l=o(97915),i=o(98501),d=o(46588),s=o(46417);class n extends a.PureComponent{constructor(t){super(t),this.state={mediaLoaded:!1}}UNSAFE_componentWillReceiveProps(t){const{Post:e}=t,{media:o}=e;this.props.Post!==e&&this.setState({imgSize:{small:o.image.small,large:o.image.large,orignal:o.image.orignal}})}render(){const{Post:t,opacity:e,mediaSize:o,Products:a,Item:n,ThemeInfo:c,showTooltip:r}=this.props,{mediaLoaded:p}=this.state,u=n||t.media,m=!!(a&&a.length>0&&t.hotspot),h={opacity:e,filter:p?"blur(2px)":null,aspectRatio:"".concat(o.width,"/").concat(o.height)};return(0,s.jsxs)("div",{className:"tb_post_modal_img_holder",children:[m?(0,s.jsx)(l.Z,{isPopup:!0,products:a,dataItem:t,showTooltip:r}):null,(0,s.jsx)("img",{className:"tb_post_modal_img_",decoding:"async",src:u.image.small,srcSet:"".concat(u.image.large,", 991w ").concat(u.image.small,", 480w"),sizes:o&&o.width,alt:u.title,"data-link":t.link,"data-network":t.networkId,"data-wall-id":c.wallId,"data-owner-id":c.ownerId,"data-item-id":t.id,"data-feed-id":c.feedId?c.feedId:"","data-load":"0",onLoad:this.handleImageLoad,onError:t=>{t.target.src="".concat(i.do,"/media/error/no-image.svg"),t.target.srcset="".concat(i.do,"/media/error/no-image.svg"),(0,d.ht)(t)},loading:"lazy",draggable:"false",width:o&&o.width,height:o&&o.height,style:h})]})}}},97915:(t,e,o)=>{o.d(e,{Z:()=>m});var a=o(47313),l=o(65537),i=o(6119),d=o(46335),s=o(61893),n=o(75729),c=o(46417);const r=(0,a.memo)((t=>{let{item:e}=t;const o=e.discount>0&&e.discount!==e.price,a=e.discount>0?e.discount:e.price;return(0,c.jsxs)("a",{hotspot:1,href:e.url,target:"_blank",rel:"noopener noreferrer",className:"tb_tooltip_wrap",children:[(0,c.jsx)("div",{hotspot:1,className:"tb_p_tooltip_title",children:e.title}),o&&(0,c.jsxs)("div",{hotspot:1,className:"tb_p_tooltip_price tb_price_disabled",children:[e.currency,e.price]}),(e.price>0||e.discount>0)&&(0,c.jsxs)("div",{hotspot:1,className:"tb_p_tooltip_price",children:[e.currency,a]})]})})),p=t=>{let{products:e,appData:o,Post:l,showTooltip:p,isPopup:u,dataItem:m}=t;const[h,v]=(0,a.useState)(null),g=(0,a.useMemo)((()=>{var t,e;return(null===o||void 0===o||null===(t=o.wall)||void 0===t||null===(e=t.ProductSetting)||void 0===e?void 0:e.Hotspot)||{}}),[o]);(0,a.useEffect)((()=>{if(p){const t=e.findIndex((t=>t.id===p));-1!==t&&v(t)}else v(null)}),[p,e]);const _=(0,a.useCallback)((t=>{var e,a,l,i;null!==o&&void 0!==o&&o.wall&&(0,s.S5)({type:1,action:2,wall:null===o||void 0===o||null===(e=o.wall)||void 0===e||null===(a=e.ThemeInfo)||void 0===a?void 0:a.webId,product_id:t.id,post:m.referenceId,owner:null===o||void 0===o||null===(l=o.wall)||void 0===l||null===(i=l.ThemeInfo)||void 0===i?void 0:i.ownerId,feed:m.feedId,currency:t.currency,price:Number(t.price)>0?t.discount:t.price})}),[o,l]),b=(0,a.useCallback)(((t,e)=>{t.stopPropagation(),_(e),window.open(e.url,"_blank")}),[_]);return null!==g&&void 0!==g&&g.status?e.map(((t,e)=>{const o="hotspot-".concat(t.id,"-").concat((0,d.i1)(),"-"),a=h===e;return(0,c.jsxs)("div",{id:o,className:"tb_hotspot_dot".concat(a?" tb_hotspot_active_":""),role:"button",style:{top:t.hotspot.top,left:t.hotspot.left},onMouseEnter:()=>v(e),onMouseLeave:()=>v(null),onClick:e=>{b(e,t)},"data-tooltip-offset":7,children:[(0,c.jsx)("div",{hotspot:1,className:"tb_hotspot__ ".concat(0===g.type?"tb_hotspot_ani__":""),children:e+1}),(0,c.jsx)(n.Z,{wallId:o,children:(0,c.jsx)(i.u,{appendTo:"body","data-tooltip-id":"tooltip-".concat(t.id,"-").concat(Math.random().toString(36).substr(2,9)),className:"tb_pro_tooltip",anchorSelect:"#".concat(o),clickable:!0,...u?{isOpen:a}:{},children:(0,c.jsx)(r,{item:t})},e)})]},"".concat(t.id,"-").concat(e))})):null},u=(0,a.memo)(p),m=(0,l.$j)((t=>({appData:t.appData})))(u)}}]);