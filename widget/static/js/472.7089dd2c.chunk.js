"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[472,1528,6696],{46588:(t,e,i)=>{i.d(e,{ht:()=>r});var a=i(98501),o=i(70656),s=i(35179),d=i(71287),l=i(32626);let n=[];const r=t=>{t.persist();const e=t.target,{network:i,itemId:a,themeId:o}=e.dataset;if(1!=i||[3,4,16,47,50,55,60].includes(o))n.includes(t)||n.push(t);else{const t=document.querySelector(".tb_media-".concat(a));t&&(t.style.display="none")}1===n.length&&c()},c=async()=>{var t;const{postData:e,wall:i}=o.Z.getState().appData;if(!i||!Object.keys(i).length||!n.length)return;const{User:r,Wall:m}=i,h=null===r||void 0===r?void 0:r.id,u=(s.ig,null===m||void 0===m?void 0:m.id),_=null===(t=n[0])||void 0===t?void 0:t.target,{filterId:g,network:v,itemId:b,load:w}=_.dataset,f=document.querySelector('img[data-item-id="'.concat(b,'"]')),x=null!==e&&void 0!==e&&e.completeDataObject?Object.values(e.completeDataObject).filter((t=>t.id===b)):[];if(null!==x&&void 0!==x&&x.length){var S;const t=await(async t=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((e=>t.includes(e)))||await fetch(t).then((t=>t.ok)).catch((()=>!1)))(null===(S=x[0])||void 0===S?void 0:S.postFileNew);if(!t&&f){if([2,18,3,28].includes(+v)&&"0"===w&&"34"!==g&&!_.src.includes("cloud.taggbox.com")){const t=((t,e,i)=>{var a,o,s,d,l;const{UserPlan:n,Wall:r}=e;return{table_name:null===n||void 0===n?void 0:n.db_table,...t,...null!==i&&void 0!==i&&i.length?{feedId:null===(a=i[0])||void 0===a?void 0:a.feedId,type:null===(o=i[0])||void 0===o?void 0:o.type,link:null===(s=i[0])||void 0===s?void 0:s.link,postFile:null===(d=i[0])||void 0===d?void 0:d.postFile,mediaFile:null===(l=i[0])||void 0===l?void 0:l.mediaFile}:{},url:null===r||void 0===r?void 0:r.url}})({wallId:u,postId:b,ownerId:h},i,x);try{const{data:e}=await(new l.Z).post(s.g$,t,{headers:d.JW}),i=s.ig||s.Jx?"":"https://images.".concat(s.yM,"/");_.src="18"===v?"".concat(i).concat(e.media):e.media}catch{_.src=a.Ty}finally{p(_)}}else _.src=a.Ty,p(_);n.shift(),c()}else{const t="".concat(a.do,"/media/images/no-image.svg");_.src=t,_.srcset=t,p(_),n.shift()}}},p=t=>t.setAttribute("data-load","1")},91528:(t,e,i)=>{i.r(e),i.d(e,{default:()=>n});var a=i(47313),o=i(97915),s=i(98501),d=i(46588),l=i(46417);class n extends a.PureComponent{constructor(t){super(t),this.state={mediaLoaded:!1}}UNSAFE_componentWillReceiveProps(t){const{Post:e}=t,{media:i}=e;this.props.Post!==e&&this.setState({imgSize:{small:i.image.small,large:i.image.large,orignal:i.image.orignal}})}render(){const{Post:t,opacity:e,mediaSize:i,Products:a,Item:n,ThemeInfo:r,showTooltip:c}=this.props,{mediaLoaded:p}=this.state,m=n||t.media,h=!!(a&&a.length>0&&t.hotspot),u={opacity:e,filter:p?"blur(2px)":null,aspectRatio:"".concat(i.width,"/").concat(i.height)};return(0,l.jsxs)("div",{className:"tb_post_modal_img_holder",children:[h?(0,l.jsx)(o.Z,{isPopup:!0,products:a,dataItem:t,showTooltip:c}):null,(0,l.jsx)("img",{className:"tb_post_modal_img_",decoding:"async",src:m.image.small,srcSet:"".concat(m.image.large,", 991w ").concat(m.image.small,", 480w"),sizes:i&&i.width,alt:m.title,"data-link":t.link,"data-network":t.networkId,"data-wall-id":r.wallId,"data-owner-id":r.ownerId,"data-item-id":t.id,"data-feed-id":r.feedId?r.feedId:"","data-load":"0",onLoad:this.handleImageLoad,onError:t=>{t.target.src="".concat(s.do,"/media/error/no-image.svg"),t.target.srcset="".concat(s.do,"/media/error/no-image.svg"),(0,d.ht)(t)},loading:"lazy",draggable:"false",width:i&&i.width,height:i&&i.height,style:u})]})}}},70472:(t,e,i)=>{i.r(e),i.d(e,{default:()=>n});var a=i(47313),o=i(91528),s=i(36696),d=i(11774),l=i(46417);class n extends a.PureComponent{constructor(t){super(t),this.handleSlideChange=()=>{const t=this.splideRef.current.splide,e=t.index,i=0===e,a=e===t.length-1;this.setState({isFirst:i,isLast:a})},this.state={mediaSize:{height:1e3,width:1e3},mediaLoaded:!1,imgUrl:t.Post.media.image.small,largerHeight:0,isFirst:!1,isLast:!1,currentIndex:0},this.splideRef=a.createRef()}UNSAFE_componentWillReceiveProps(t){const{Post:e}=t,{ImageUrl:i}=t;this.state.imgUrl!==i&&this.setState({imgUrl:i,mediaLoaded:!1,mediaSize:{height:e.media.height,width:e.media.width}})}componentDidMount(){const{Post:t}=this.props;this.setState({mediaSize:{height:t.media.height,width:t.media.width}}),this.splideRef.current.splide.on("moved",this.handleSlideChange),this.handleSlideChange()}componentWillUnmount(){this.splideRef.current.splide.off("moved",this.handleSlideChange)}render(){const{Post:t,mediaSize:e,ThemeInfo:i,onUpdateProdImgIdx:a,winSize:n}=this.props,{isFirst:r,isLast:c,currentIndex:p}=this.state;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.default,{winSize:n,Post:t,mediaSize:e,ThemeInfo:i,mediaSizeCallback:this.mediaSize,opacity:0}),(0,l.jsx)("div",{className:"tb_post_modal_slide_holder_",children:(0,l.jsxs)(d.tv,{hasTrack:!1,className:"tb_post_modal_media_slider",options:{type:"slide",rewind:!1,speed:400,gap:0,drag:!0,autoplay:!1,autoHeight:!0,padding:0,gap:"1rem",pagination:!0,arrows:!0,classes:{pagination:"splide__pagination tb_modal_slider_dots",page:"splide__pagination__page tb_modal_slider_dot"}},ref:this.splideRef,onActive:(t,e,i)=>{this.setState({currentIndex:e.index},(()=>a(this.state.currentIndex)))},children:[(0,l.jsx)(d.Gj,{children:t.mediaList.map(((a,r)=>{const c=p==r;return(0,l.jsx)(d.jw,{style:{margin:0,padding:0},children:[2,4].includes(a.type)||!c?(0,l.jsx)(o.default,{winSize:n,Post:t,Item:a,Products:a.product,mediaSize:e,ThemeInfo:i,mediaSizeCallback:this.mediaSize,hotspot:!0,opacity:1}):[3,5].includes(a.type)?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(s.default,{winSize:n,Post:{...t,networkId:t.networkId,media:a},Item:a,Products:a.products,mediaSize:e,ThemeInfo:i,mediaSizeCallback:this.mediaSize,opacity:1})}):null},r)}))}),(0,l.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_post_modal_arrow_wrapper_",children:[(0,l.jsx)("div",{className:"splide__arrow splide__arrow--prev tb_post_modal_arrow tb_post_modal_arrow_left__ tb__icon tb-arrow-left-alt",disabled:r,role:"button","aria-label":"Go to previous slide",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"splide__arrow splide__arrow--next  tb_post_modal_arrow tb_post_modal_arrow_right__ tb__icon tb-arrow-right-alt",disabled:c,role:"button","aria-label":"Go to next slide",children:(0,l.jsx)("div",{})})]})]})})]})}}},36696:(t,e,i)=>{i.r(e),i.d(e,{default:()=>r});var a=i(47313),o=i(20510),s=i.n(o),d=i(35179),l=i(46335),n=i(46417);class r extends a.PureComponent{constructor(t){super(t),this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.muteToggle=()=>{this.setState({muted:!this.state.muted})},this.onUpdateTime=t=>{try{if(d.ig){const{played:e}=this.state;this.setState({played:e+t.playedSeconds})}}catch(e){console.log(e)}},this.state={videoLoaded:!1,muted:!0,played:0},this.VideoWrap=a.createRef()}componentWillUnmount(){const{played:t}=this.state;d.ig&&(0,l.qE)(t)}render(){const{Post:t,mediaSize:e}=this.props,{videoLoaded:i,muted:a}=this.state,{media:o,id:d,link:l,networkId:r}=t,c=![7,3,25].includes(t.networkId),{height:p,width:m}=e;return(0,n.jsxs)("div",{className:"tb_post_modal_video_holder".concat(i?" tb_post_video_loaded":""),ref:this.VideoWrap,children:[c?(0,n.jsx)("div",{className:"tb_m_mute_btn",onClick:this.muteToggle,children:(0,n.jsx)("div",{className:"tb__icon tb-".concat(a?"mute":"unmute"),children:(0,n.jsx)("div",{})})}):"",(0,n.jsx)(s(),{className:"tb_post_modal_video tb_p_media-".concat(d),url:o.video.full,"data-height":p,"data-width":m,"data-type":"video","data-network":r,"data-link":l,"data-item-id":d,"data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":m,"data-height":p,poster:o.image.small,muted:a}},file:{attributes:{preload:"metadata",poster:o.image.small,muted:a}}},loop:!0,autoPlay:!0,muted:a,volume:1,playsinline:!0,onReady:t=>{this.setVideoLoaded(!0)},playing:!0,height:"100%",width:"100%",controls:!c,onProgress:this.onUpdateTime}),i?null:(0,n.jsx)("div",{className:"tb_post_modal_spinner",children:(0,n.jsx)("div",{})})]},o.video.full)}}},97915:(t,e,i)=>{i.d(e,{Z:()=>h});var a=i(47313),o=i(65537),s=i(6119),d=i(46335),l=i(61893),n=i(75729),r=i(46417);const c=(0,a.memo)((t=>{let{item:e}=t;const i=e.discount>0&&e.discount!==e.price,a=e.discount>0?e.discount:e.price;return(0,r.jsxs)("a",{hotspot:1,href:e.url,target:"_blank",rel:"noopener noreferrer",className:"tb_tooltip_wrap",children:[(0,r.jsx)("div",{hotspot:1,className:"tb_p_tooltip_title",children:e.title}),i&&(0,r.jsxs)("div",{hotspot:1,className:"tb_p_tooltip_price tb_price_disabled",children:[e.currency,e.price]}),(e.price>0||e.discount>0)&&(0,r.jsxs)("div",{hotspot:1,className:"tb_p_tooltip_price",children:[e.currency,a]})]})})),p=t=>{let{products:e,appData:i,Post:o,showTooltip:p,isPopup:m}=t;const[h,u]=(0,a.useState)(null),_=(0,a.useMemo)((()=>{var t,e;return(null===i||void 0===i||null===(t=i.wall)||void 0===t||null===(e=t.ProductSetting)||void 0===e?void 0:e.Hotspot)||{}}),[i]);(0,a.useEffect)((()=>{if(p){const t=e.findIndex((t=>t.id===p));-1!==t&&u(t)}else u(null)}),[p,e]);const g=(0,a.useCallback)((t=>{null!==i&&void 0!==i&&i.wall&&(0,l.S5)({})}),[i,o]),v=(0,a.useCallback)(((t,e)=>{t.stopPropagation(),g(e),window.open(e.url,"_blank")}),[g]);return null!==_&&void 0!==_&&_.status?e.map(((t,e)=>{const i="hotspot-".concat(t.id,"-").concat((0,d.i1)(),"-"),a=h===e;return(0,r.jsxs)("div",{id:i,className:"tb_hotspot_dot".concat(a?" tb_hotspot_active_":""),role:"button",style:{top:t.hotspot.top,left:t.hotspot.left},onMouseEnter:()=>u(e),onMouseLeave:()=>u(null),onClick:e=>{v(e,t)},"data-tooltip-offset":7,children:[(0,r.jsx)("div",{hotspot:1,className:"tb_hotspot__ ".concat(0===_.type?"tb_hotspot_ani__":""),children:e+1}),(0,r.jsx)(n.Z,{wallId:i,children:(0,r.jsx)(s.u,{appendTo:"body","data-tooltip-id":"tooltip-".concat(t.id,"-").concat(Math.random().toString(36).substr(2,9)),className:"tb_pro_tooltip",anchorSelect:"#".concat(i),clickable:!0,...m?{isOpen:a}:{},children:(0,r.jsx)(c,{item:t})},e)})]},"".concat(t.id,"-").concat(e))})):null},m=(0,a.memo)(p),h=(0,o.$j)((t=>({appData:t.appData})))(m)}}]);