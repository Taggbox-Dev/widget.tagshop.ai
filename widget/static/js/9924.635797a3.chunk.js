"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[9874,9924],{45285:(t,e,o)=>{o.d(e,{bs:()=>r});var l=o(80415),i=o(296),a=o(66345),s=o(28322),d=o(14313);let n=[];const r=t=>{t.persist();const e=t.target,{network:o,itemId:l,themeId:i}=e.dataset;if(1!=o||[3,4,16,47,50,55,60].includes(i))n.includes(t)||n.push(t);else{const t=document.querySelector(`.tb_media-${l}`);t&&(t.style.display="none")}1===n.length&&c()},c=async()=>{var t;const{postData:e,wall:o}=i.A.getState().appData;if(!o||!Object.keys(o).length||!n.length)return;const{User:r,Wall:u}=o,m=null===r||void 0===r?void 0:r.id,h=(a.HY,null===u||void 0===u?void 0:u.id),v=null===(t=n[0])||void 0===t?void 0:t.target,{filterId:g,network:_,itemId:b,load:w}=v.dataset,f=document.querySelector(`img[data-item-id="${b}"]`),I=null!==e&&void 0!==e&&e.completeDataObject?Object.values(e.completeDataObject).filter((t=>t.id===b)):[];if(null!==I&&void 0!==I&&I.length){var y;const t=await(async t=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((e=>t.includes(e)))||await fetch(t).then((t=>t.ok)).catch((()=>!1)))(null===(y=I[0])||void 0===y?void 0:y.postFileNew);if(!t&&f){if([2,18,3,28].includes(+_)&&"0"===w&&"34"!==g&&!v.src.includes("cloud.taggbox.com")){const t=((t,e,o)=>{var l,i,a,s,d;const{UserPlan:n,Wall:r}=e;return{table_name:null===n||void 0===n?void 0:n.db_table,...t,...null!==o&&void 0!==o&&o.length?{feedId:null===(l=o[0])||void 0===l?void 0:l.feedId,type:null===(i=o[0])||void 0===i?void 0:i.type,link:null===(a=o[0])||void 0===a?void 0:a.link,postFile:null===(s=o[0])||void 0===s?void 0:s.postFile,mediaFile:null===(d=o[0])||void 0===d?void 0:d.mediaFile}:{},url:null===r||void 0===r?void 0:r.url}})({wallId:h,postId:b,ownerId:m},o,I);try{const{data:e}=await(new d.A).post(a.t5,t,{headers:s.ML}),o=a.HY||a.MH?"":`https://images.${a.QR}/`;v.src="18"===_?`${o}${e.media}`:e.media}catch{v.src=l.gX}finally{p(v)}}else v.src=l.gX,p(v);n.shift(),c()}else{const t=`${l.th}/media/images/no-image.svg`;v.src=t,v.srcset=t,p(v),n.shift()}}},p=t=>t.setAttribute("data-load","1")},69924:(t,e,o)=>{o.r(e),o.d(e,{default:()=>n});var l=o(9950),i=o(89874),a=o(80415),s=o(45285),d=o(44414);class n extends l.PureComponent{constructor(t){super(t),this.state={mediaLoaded:!1}}UNSAFE_componentWillReceiveProps(t){const{Post:e}=t,{media:o}=e;this.props.Post!==e&&this.setState({imgSize:{small:o.image.small,large:o.image.large,orignal:o.image.orignal}})}render(){const{Post:t,opacity:e,mediaSize:o,Products:l,Item:n,ThemeInfo:r,showTooltip:c}=this.props,{mediaLoaded:p}=this.state,u=n||t.media,m=!!(l&&l.length>0&&t.hotspot),h={opacity:e,filter:p?"blur(2px)":null,aspectRatio:`${o.width}/${o.height}`};return(0,d.jsxs)("div",{className:"tb_post_modal_img_holder",children:[m?(0,d.jsx)(i.default,{isPopup:!0,products:l,Post:t,showTooltip:c}):null,(0,d.jsx)("img",{className:"tb_post_modal_img_",decoding:"async",src:u.image.small,srcSet:`${u.image.large}, 991w ${u.image.small}, 480w`,sizes:o&&o.width,alt:u.title,"data-link":t.link,"data-network":t.networkId,"data-wall-id":r.wallId,"data-owner-id":r.ownerId,"data-item-id":t.id,"data-feed-id":r.feedId?r.feedId:"","data-load":"0",onLoad:this.handleImageLoad,onError:t=>{t.target.src=`${a.th}/media/error/no-image.svg`,t.target.srcset=`${a.th}/media/error/no-image.svg`,(0,s.bs)(t)},loading:"lazy",draggable:"false",width:o&&o.width,height:o&&o.height,style:h})]})}}},89874:(t,e,o)=>{o.r(e),o.d(e,{default:()=>u});var l=o(9950),i=o(10300),a=o(1823),s=o(21850),d=o(82652),n=o(44414);const r=(0,l.memo)((t=>{let{item:e}=t;const o=e.discount>0&&e.discount!==e.price,l=e.discount>0?e.discount:e.price;return(0,n.jsxs)("a",{hotspot:1,href:e.url,target:"_blank",rel:"noopener noreferrer",className:"tb_tooltip_wrap",children:[(0,n.jsx)("div",{hotspot:1,className:"tb_p_tooltip_title",children:e.title}),o&&(0,n.jsxs)("div",{hotspot:1,className:"tb_p_tooltip_price tb_price_disabled",children:[e.currency,e.price]}),(e.price>0||e.discount>0)&&(0,n.jsxs)("div",{hotspot:1,className:"tb_p_tooltip_price",children:[e.currency,l]})]})})),c=t=>{let{products:e,appData:o,Post:i,showTooltip:c,isPopup:p}=t;const[u,m]=(0,l.useState)(null),h=(0,l.useMemo)((()=>{var t,e;return(null===o||void 0===o||null===(t=o.wall)||void 0===t||null===(e=t.ProductSetting)||void 0===e?void 0:e.Hotspot)||{}}),[o]);(0,l.useEffect)((()=>{if(c){const t=e.findIndex((t=>t.id===c));-1!==t&&m(t)}else m(null)}),[c,e]);const v=(0,l.useCallback)((t=>{var e,l,a,d;null!==o&&void 0!==o&&o.wall&&(0,s.hq)({type:1,action:2,wall:null===o||void 0===o||null===(e=o.wall)||void 0===e||null===(l=e.ThemeInfo)||void 0===l?void 0:l.webId,product_id:t.id,post:i.referenceId,owner:null===o||void 0===o||null===(a=o.wall)||void 0===a||null===(d=a.ThemeInfo)||void 0===d?void 0:d.ownerId,feed:i.feedId,currency:t.currencyCode,price:Number(t.discount)>0?t.discount:t.price})}),[o,i]),g=(0,l.useCallback)(((t,e)=>{t.stopPropagation(),v(e),window.open(e.url,"_blank")}),[v]);return null!==h&&void 0!==h&&h.status?e.map(((t,e)=>{const o=`hotspot-${t.id}-${e}${p?"-pop":""}`,l=u===e;return(0,n.jsxs)("div",{id:o,className:"tb_hotspot_dot"+(l?" tb_hotspot_active_":""),role:"button",style:{top:t.hotspot.top,left:t.hotspot.left},onMouseEnter:()=>m(e),onMouseLeave:()=>m(null),onClick:e=>{g(e,t)},"data-tooltip-offset":7,children:[(0,n.jsx)("div",{hotspot:1,className:"tb_hotspot__ "+(0===h.type?"tb_hotspot_ani__":""),children:e+1}),(0,n.jsx)(d.A,{wallId:o,children:(0,n.jsx)(a.m_,{appendTo:"body","data-tooltip-id":`tooltip-${t.id}-${e}${p?"-pop":""}`,className:"tb_pro_tooltip",anchorSelect:`#${o}`,clickable:!0,...p?{isOpen:l}:{},children:(0,n.jsx)(r,{item:t})},e)})]},`${t.id}-${e}`)})):null},p=(0,l.memo)(c),u=(0,i.Ng)((t=>({appData:t.appData})))(p)}}]);