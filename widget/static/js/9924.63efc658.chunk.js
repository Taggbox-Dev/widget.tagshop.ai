"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[9924],{45285:(t,e,o)=>{o.d(e,{bs:()=>r});var l=o(80415),a=o(296),i=o(66345),s=o(28322),d=o(14313);let n=[];const r=t=>{t.persist();const e=t.target,{network:o,itemId:l,themeId:a}=e.dataset;if(1!=o||[3,4,16,47,50,55,60].includes(a))n.includes(t)||n.push(t);else{const t=document.querySelector(`.tb_media-${l}`);t&&(t.style.display="none")}1===n.length&&c()},c=async()=>{var t;const{postData:e,wall:o}=a.A.getState().appData;if(!o||!Object.keys(o).length||!n.length)return;const{User:r,Wall:m}=o,u=null===r||void 0===r?void 0:r.id,h=(i.HY,null===m||void 0===m?void 0:m.id),g=null===(t=n[0])||void 0===t?void 0:t.target,{filterId:v,network:_,itemId:b,load:w}=g.dataset,f=document.querySelector(`img[data-item-id="${b}"]`),y=null!==e&&void 0!==e&&e.completeDataObject?Object.values(e.completeDataObject).filter((t=>t.id===b)):[];if(null!==y&&void 0!==y&&y.length){var k;const t=await(async t=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((e=>t.includes(e)))||await fetch(t).then((t=>t.ok)).catch((()=>!1)))(null===(k=y[0])||void 0===k?void 0:k.postFileNew);if(!t&&f){if([2,18,3,28].includes(+_)&&"0"===w&&"34"!==v&&!g.src.includes("cloud.taggbox.com")){const t=((t,e,o)=>{var l,a,i,s,d;const{UserPlan:n,Wall:r}=e;return{table_name:null===n||void 0===n?void 0:n.db_table,...t,...null!==o&&void 0!==o&&o.length?{feedId:null===(l=o[0])||void 0===l?void 0:l.feedId,type:null===(a=o[0])||void 0===a?void 0:a.type,link:null===(i=o[0])||void 0===i?void 0:i.link,postFile:null===(s=o[0])||void 0===s?void 0:s.postFile,mediaFile:null===(d=o[0])||void 0===d?void 0:d.mediaFile}:{},url:null===r||void 0===r?void 0:r.url}})({wallId:h,postId:b,ownerId:u},o,y);try{const{data:e}=await(new d.A).post(i.t5,t,{headers:s.ML}),o=i.HY||i.MH?"":`https://images.${i.QR}/`;g.src="18"===_?`${o}${e.media}`:e.media}catch{g.src=l.gX}finally{p(g)}}else g.src=l.gX,p(g);n.shift(),c()}else{const t=`${l.th}/media/images/no-image.svg`;g.src=t,g.srcset=t,p(g),n.shift()}}},p=t=>t.setAttribute("data-load","1")},69924:(t,e,o)=>{o.r(e),o.d(e,{default:()=>n});var l=o(9950),a=o(89874),i=o(80415),s=o(45285),d=o(44414);class n extends l.PureComponent{constructor(t){super(t),this.state={mediaLoaded:!1}}UNSAFE_componentWillReceiveProps(t){const{Post:e}=t,{media:o}=e;this.props.Post!==e&&this.setState({imgSize:{small:o.image.small,large:o.image.large,orignal:o.image.orignal}})}render(){const{Post:t,opacity:e,mediaSize:o,Products:l,Item:n,ThemeInfo:r,showTooltip:c}=this.props,{mediaLoaded:p}=this.state,m=n||t.media,u=!!(l&&l.length>0&&t.hotspot),h={opacity:e,filter:p?"blur(2px)":null,aspectRatio:`${o.width}/${o.height}`};return(0,d.jsxs)("div",{className:"tb_post_modal_img_holder",children:[u?(0,d.jsx)(a.A,{products:l,dataItem:t,showTooltip:c}):null,(0,d.jsx)("img",{className:"tb_post_modal_img_",decoding:"async",src:m.image.small,srcSet:`${m.image.large}, 991w ${m.image.small}, 480w`,sizes:o&&o.width,alt:m.title,"data-link":t.link,"data-network":t.networkId,"data-wall-id":r.wallId,"data-owner-id":r.ownerId,"data-item-id":t.id,"data-feed-id":r.feedId?r.feedId:"","data-load":"0",onLoad:this.handleImageLoad,onError:t=>{t.target.src=`${i.th}/media/error/no-image.svg`,t.target.srcset=`${i.th}/media/error/no-image.svg`,(0,s.bs)(t)},loading:"lazy",draggable:"false",width:o&&o.width,height:o&&o.height,style:h})]})}}},89874:(t,e,o)=>{o.d(e,{A:()=>u});var l=o(9950),a=o(10300),i=o(17119),s=o(1823),d=o(76506),n=o(21850),r=o(44414);const c=(0,l.memo)((t=>{let{item:e}=t;const o=e.discount>0&&e.discount!==e.price,l=e.discount>0?e.discount:e.price;return(0,r.jsxs)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"tb_tooltip_wrap",children:[(0,r.jsx)("div",{className:"tb_p_tooltip_title",children:e.title}),o&&(0,r.jsxs)("div",{className:"tb_p_tooltip_price tb_price_disabled",children:[e.currency,e.price]}),(e.price>0||e.discount>0)&&(0,r.jsxs)("div",{className:"tb_p_tooltip_price",children:[e.currency,l]})]})})),p=t=>{let{products:e,appData:o,Post:a,showTooltip:p}=t;const[m,u]=(0,l.useState)(null),h=(0,l.useMemo)((()=>{var t,e;return(null===o||void 0===o||null===(t=o.wall)||void 0===t||null===(e=t.ProductSetting)||void 0===e?void 0:e.Hotspot)||{}}),[o]);(0,l.useEffect)((()=>{if(p){const t=e.findIndex((t=>t.id===p));-1!==t&&u(t)}else u(null)}),[p,e]);const g=(0,l.useCallback)((t=>{null!==o&&void 0!==o&&o.wall&&(0,n.hq)({})}),[o,a]),v=(0,l.useCallback)(((t,e)=>{t.stopPropagation(),g(e),window.open(e.url,"_blank")}),[g]);return null!==h&&void 0!==h&&h.status?e.map(((t,e)=>{const o=`hotspot-${t.id}-${(0,d.Ul)()}`,l=m===e;return(0,r.jsxs)("div",{id:o,className:"tb_hotspot_dot"+(l?" tb_hotspot_active_":""),role:"button",style:{top:t.hotspot.top,left:t.hotspot.left},onMouseEnter:()=>u(e),onMouseLeave:()=>u(null),onClick:e=>v(e,t),"data-tooltip-offset":7,children:[(0,r.jsx)("div",{className:"tb_hotspot__ "+(0===h.type?"tb_hotspot_ani__":""),children:e+1}),(0,i.createPortal)((0,r.jsx)(s.m_,{className:"tb_pro_tooltip",anchorSelect:`#${o}`,clickable:!0,isOpen:l,children:(0,r.jsx)(c,{item:t})}),document.body)]},`${t.id}-${e}`)})):null},m=(0,l.memo)(p),u=(0,a.Ng)((t=>({appData:t.appData})))(m)}}]);