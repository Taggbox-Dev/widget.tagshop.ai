"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[1332,4416],{15055:(e,t,o)=>{o.r(t),o.d(t,{default:()=>w});var i=o(47313),n=o(61395),s=o.n(n),c=o(35179),l=o(53683),a=o(64442),r=o(84261),d=o(81349),p=o(46417);const _=e=>{let{Post:t,ThemeStyle:o,CardStyle:i,index:n,inView:s}=e;const l=[3,5].includes(t.type)&&1===o.autoPlay||!1,_=!!i.style.ratio&&i.style.ratio,h=!c.ig||!t.hotspot;return(0,p.jsxs)("div",{className:"tb_cp_media_wrap",children:[(0,p.jsx)(d.default,{Post:t,IconClass:"tb_cp_media_icon",show:h,hideVideo:l}),l?(0,p.jsx)(a.Z,{VideoClass:"tb_cp_video",Post:t,size:_,isCover:!0,controls:!1,autoPlay:!0,muted:!0,observer:!0,index:n,inView:s}):(0,p.jsx)(r.Z,{ImageClass:"tb_cp_image",Post:t,size:_,hotspot:c.ig,blurBG:c.ig,observer:!0,index:n,inView:s})]})};var h=o(7138),m=o(64416),u=o(37174);const b=(0,i.lazy)((()=>o.e(2708).then(o.bind(o,22708)))),y=e=>{let{postSize:t,clickToShowPopUp:o,index:n,onClickToCTA:s,ThemeStyle:c,CardStyle:a,Post:r,ThemeInfo:d}=e;const y=1!==r.type;return(0,p.jsx)(u.Z,{children:e=>{let{ref:u,inView:S}=e;return y?(0,p.jsx)("div",{id:"tb_cp_id-".concat(r.id),ref:u,className:"tb_cp_post_wrapper",style:{width:"".concat(t,"%"),padding:a.style.padding/2,opacity:S?1:0,transition:S?"opacity .5s ease-in-out":""},"tb-network":r.networkId,"tb-product":r.isShopIcon?1:r.isHotspot?2:0,"post-id":r.referenceId?r.referenceId:r.id,"feed-id":r.feedId,tabIndex:0,"area-label":r.content.text,role:"article",children:(0,p.jsxs)("div",{className:"tb_cp_post_in",onClick:o(n,r),role:"button","aria-label":"Popup",tabIndex:0,children:[a.shareStatus?(0,p.jsx)(i.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(b,{Post:r,ThemeInfo:d,shareClass:"tb_cp_share_container"})}):"",y?(0,p.jsx)(_,{Post:r,CardStyle:a,ThemeStyle:c,index:n,inView:S}):"",r.ctaStatus?(0,p.jsx)("div",{className:"tb_cp_post_cta",children:(0,p.jsx)(h.default,{ctaClass:"tb_cp_post_cta_btn",Post:r,onClickToCTA:s})}):"",(0,p.jsx)("div",{className:"tb_cp_contant_wrapper",children:(0,p.jsx)(l.Z,{className:"tb_cp",Post:r,CardStyle:a,ThemeStyle:c,inView:S})}),a.actionStatus?(0,p.jsx)(m.default,{Post:r,CardStyle:a,actionClass:"tb_cp_social_action__"}):""]})}):null}})};var S=o(17739);const k=e=>{let{Posts:t,completeDataObject:o,clickToShowPopUp:i,postSize:n,onClickToCTA:s,onClickPopUpSlider:c,CardStyle:l,ThemeStyle:a,ThemeInfo:r}=e;return t&&t.length>0&&t.map(((e,t)=>{const d=o[e];return(0,p.jsx)(y,{postSize:n,clickToShowPopUp:i,onClickToCTA:s,onClickPopUpSlider:c,Post:d,index:t,CardStyle:l,ThemeStyle:a,ThemeInfo:r},t)}))};class C extends i.PureComponent{constructor(){super(...arguments),this.state={loadDelaydata:!1},this.handleScroll=()=>{this.state.loadDelaydata||this.setState({loadDelaydata:!0},(()=>this.props.loadMoredata()))}}componentDidMount(){window.addEventListener("scroll",this.handleScroll),this.props.loadBranding()}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}render(){const{postData:e,completeDataObject:t,CardStyle:o,ThemeStyle:i,ThemeInfo:n,clickToShowPopUp:l,onClickToCTA:a,onClickPopUpSlider:r,containerSize:d}=this.props,_=Math.max((d.width/(o.minimumWidth+20)).toFixed(),1),h=(0,S.Pu)(d.width,i.column,_),m=(0,S.Es)(d.width,h);return c.ig?(0,p.jsx)(s(),{className:"tb_cp_post_container",tabIndex:"0","aria-label":"There are ".concat(e&&e.length>0?e.length:0," posts in the feed"),role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_cp_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:(0,p.jsx)(k,{clickToShowPopUp:l,Posts:e,completeDataObject:t,postSize:m,onClickToCTA:a,onClickPopUpSlider:r,CardStyle:o,ThemeStyle:i,ThemeInfo:n})}):(0,p.jsx)("div",{className:"tb_cp_post_container",children:(0,p.jsx)(k,{clickToShowPopUp:l,Posts:e,completeDataObject:t,postSize:m,onClickToCTA:a,onClickPopUpSlider:r,CardStyle:o,ThemeStyle:i,ThemeInfo:n})})}}const w=C},64416:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});var i=o(47313),n=o(46335),s=o(63214),c=o(46417);const l=(e,t,o,i)=>{const s={like:"https://twitter.com/intent/favorite?tweet_id=".concat((0,n.ok)(t)),comment:"https://twitter.com/intent/tweet?in_reply_to=".concat((0,n.ok)(t)),retweet:"https://twitter.com/intent/retweet?tweet_id=".concat((0,n.ok)(t))};return 1===e?s[i]:o},a=e=>{let{label:t,hrefClick:o,Icon:i,count:s,itemId:l=0,type:a}=e;const r=s>0?(0,n.sy)(s):"";return(0,c.jsx)("div",{className:"tb_social_action__list",role:"listitem","aria-roledescription":"post social action links",children:(0,c.jsxs)("div",{onClick:e=>{e.stopPropagation(),window.open(o,"_blank")},className:"tb_social_action__ico_wrap tb_social_action__ico_wrap_".concat(l),"aria-label":"".concat(t," post ").concat(a," count ").concat(r),role:"button",tabIndex:"0",children:[(0,c.jsx)("div",{className:"tb_social_action_ico__ tb__icon tb-".concat(i),children:"  "}),r?(0,c.jsx)("div",{className:"tb_social_action_counts__",children:r}):""]})})};class r extends i.PureComponent{componentDidMount(){try{var e;const{Post:t}=this.props,o=".tb_social_action__ico_wrap_".concat(null===t||void 0===t?void 0:t.id);null===(e=document.querySelector(o))||void 0===e||e.addEventListener("keydown",(function(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.click())}))}catch(t){console.log(t)}}render(){const{Post:e,CardStyle:t,actionClass:o}=this.props,{icon:i,style:n}=t,r={color:i.default?n.color:i.color},d=e.networkId,{comment:p,like:_}=e.count,h=[3,10,7].includes(d)?"like":"heart-outline",m=[1,2,3,7,8,9,10,18].includes(d),u=![29,19].includes(d),b=(0,s.BK)(d);return[29,26,23,6,5,11,12,15,20,21].includes(d)?null:(0,c.jsx)("div",{className:o,children:(0,c.jsxs)("div",{className:"tb_social_action__",role:"list",children:[m&&(0,c.jsx)(a,{itemId:e.id,label:b,hrefClick:l(d,e.postId,e.link,"like"),Icon:h,iconStyle:r,count:_,type:"like"}),u&&(0,c.jsx)(a,{itemId:e.id,label:b,hrefClick:l(d,e.postId,e.link,"comment"),Icon:"comment",iconStyle:r,count:p,type:"comment"}),1===d&&(0,c.jsx)(a,{itemId:e.id,label:b,hrefClick:l(d,e.postId,e.link,"retweet"),Icon:"retweet",iconStyle:r,count:p,type:"comment"}),(0,c.jsx)(a,{label:b,itemId:e.id,hrefClick:e.link,Icon:"eye",iconStyle:r,count:0,type:"view"})]})})}}}}]);