"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2879,5867,4261],{97915:(t,e,i)=>{i.d(e,{Z:()=>_});var s=i(47313),a=i(43411),o=i(83773),c=i(6119),d=i(17739),r=i(46417);const n=(0,o.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),l=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,i=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",s=t.product_price>0||t.product_discount>0?"".concat(i,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(s,"\n        </a>")};class h extends s.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:i}=this.state,s=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return s.status?(0,r.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const a=(0,d.i1)();return(0,r.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(a),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(i==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,r.jsx)("div",{className:"tb_hotspot__ ".concat(0==s.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,r.jsx)(n,{children:(0,r.jsx)(c.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(a),clickable:!0,html:l(t.UgcProduct)})})]},e)}))}):null}}const _=(0,a.$j)((t=>({appData:t.appData})))(h)},84261:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});var s=i(47313),a=i(43635),o=i(97915),c=i(2406),d=i(17739),r=i(98501),n=(i(35179),i(46417));class l extends s.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const i=document.querySelector(".track".concat(this.props.data.id));i&&(i.setAttribute("data-height",e),i.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:i}=await(0,c.Ad)(e.postFileNew);this.setState({paddingBottom:100*i/t,size:{height:parseInt(i),width:parseInt(t)}})}catch(i){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(i){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,size:{height:100,width:100}}}componentWillMount(){const{data:t,hotspot:e,size:i}=this.props;t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:i})}componentDidMount(){const{data:t,hotspot:e,size:i}=this.props;!i||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:i})}render(){const{ImageClass:t,data:e,wallID:i,themeID:s,ownerId:c,hotspot:l}=this.props,{imgUrl:h,paddingBottom:_,size:p,fixedPaddingBottom:u}=this.state,m={paddingBottom:"".concat(this.props.size?1==this.props.size?null:u:_,"%")},b={backgroundImage:"url(".concat(h,")")};if(p.width>p.height)var v="100%",x="".concat(p.height/p.width*100,"%");else x="100%",v="".concat(p.width/p.height*100,"%");const j=!!(e.hotspot&&e.ugc_products.length>0&&l),g={width:j&&this.props.size?v:null,height:j&&this.props.size?x:null};return(0,n.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:m,children:[j?(0,n.jsx)("div",{className:"tb_blur_bg_",style:b}):null,(0,n.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:g,children:[j?(0,n.jsx)(o.Z,{product:e.ugc_products}):null,(0,n.jsx)("img",{className:"".concat(t," track").concat(e.id),role:"img",src:h,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":i,"data-owner-id":c,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":s,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(r.do,"/media/images/no-image.svg"),(0,a.ht)(t)},alt:(0,d.P)(h)})]})]})}}},64442:(t,e,i)=>{i.d(e,{Z:()=>h});var s=i(47313),a=i(2406),o=i(20510),c=i.n(o),d=i(43635),r=i(35179),n=i(46417);const l=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class h extends s.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:i}=await(0,a.Ad)(e.postFileNew);this.setState({paddingBottom:100*i/t})}catch(i){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=s.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(i){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:i,isCover:s,controls:a,autoPlay:o,handleVideoEnded:h,muted:_}=this.props,{paddingBottom:p,videoLoaded:u,isVisible:m}=this.state,b={paddingBottom:"".concat(p,"%")},v=e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,n.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:b,ref:this.videoRef,children:(0,n.jsx)(c(),{className:"".concat(t," video").concat(e.id),url:l(v,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":i,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata"}}},loop:!0,onError:t=>{e.stories&&0!=e.stories||(0,d.ib)(t,e.id)},autoPlay:o,muted:_,volume:o?1:0,playsinline:!0,onReady:t=>{r.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:r.ig?m:o,height:"100%",width:"100%",controls:a||!1,style:{backgroundImage:"url(".concat(e.postFileNew,")"),backgroundSize:s?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:h||null})})}}},81349:(t,e,i)=>{i.d(e,{Z:()=>c});i(47313);var s=i(35179),a=i(95867),o=i(46417);const c=t=>{const{itemData:e,IconClass:i,isCenter:c,hideVideo:d,show:r}=t,n=3===e.type||5===e.type,l=7===e.network.id,h=!!(e.imageList&&e.imageList.length>0),_=1===e.isAudio,p=!!(e.ugc_products&&e.ugc_products.length>0),u=(0,o.jsx)(a.default,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"}),m=(0,o.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:(0,o.jsx)("div",{})}),b=(0,o.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:(0,o.jsx)("div",{})}),v=(0,o.jsx)("div",{className:"tb_video_ico tb__icon tb-video",children:(0,o.jsx)("div",{})}),x=(0,o.jsx)("div",{className:"tb_play_ico tb__icon tb-play",children:(0,o.jsx)("div",{})}),j=(0,o.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:(0,o.jsx)("div",{})}),g=(0,o.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:(0,o.jsx)("div",{})});return r?(0,o.jsxs)(o.Fragment,{children:[c&&(l||n)?(0,o.jsxs)("div",{className:"".concat(i," tb__media_ico_c"),children:[n&&!l?g:"",n&&l?u:""]}):null,p||h||n?(0,o.jsxs)("div",{className:"".concat(i," tb__media_ico_"),children:[p?j:"",h?m:"",c||!n||l||d?"":_?b:s.ZQ?x:v]}):null]}):null}},95867:(t,e,i)=>{i.r(e),i.d(e,{default:()=>d});var s=i(47313),a=i(35179),o=i(46417);const c=s.memo((t=>{let{network:e,networkClass:i}=t;const s="".concat(i," tb__icon tb_ico_default");switch(e.id){case 1:return(0,o.jsx)("div",{className:"".concat(s," tb-twitter")});case 2:case 18:return(0,o.jsx)("div",{className:"".concat(s," tb-instagram-default"),children:(0,o.jsx)("div",{})});case 3:return(0,o.jsx)("div",{className:"".concat(s," tb-facebook"),children:(0,o.jsx)("div",{})});case 4:return(0,o.jsxs)("div",{className:"".concat(s," tb-google-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})})]});case 5:return(0,o.jsx)("div",{className:"".concat(s," tb-pinterest"),children:(0,o.jsx)("div",{})});case 6:return(0,o.jsxs)("div",{className:"".concat(s," tb-flickr-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 7:return(0,o.jsxs)("div",{className:"".concat(s," tb-youtube-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 8:return(0,o.jsx)("div",{className:"".concat(s," tb-vimeo"),children:(0,o.jsx)("div",{})});case 10:return(0,o.jsx)("div",{className:"".concat(s," tb-linkedin"),children:(0,o.jsx)("div",{})});case 11:return(0,o.jsx)("div",{className:"".concat(s," tb-tumblr"),children:(0,o.jsx)("div",{})});case 12:return(0,o.jsx)("div",{className:"".concat(s," tb-rss"),children:(0,o.jsx)("div",{})});case 15:return(0,o.jsx)("div",{className:"".concat(s," tb-workplace"),children:(0,o.jsx)("div",{})});case 19:return(0,o.jsx)("div",{className:"".concat(s," tb-yelp"),children:(0,o.jsx)("div",{})});case 20:return(0,o.jsxs)("div",{className:"".concat(s," tb-slack-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path8",children:(0,o.jsx)("div",{})})]});case 21:return(0,o.jsx)("div",{className:"".concat(s," tb-yammer"),children:(0,o.jsx)("div",{})});case 23:return(0,o.jsx)("div",{className:"".concat(s," tb-airbnb"),children:(0,o.jsx)("div",{})});case 25:return(0,o.jsx)("div",{className:"".concat(s," tb-soundcloud"),children:(0,o.jsx)("div",{})});case 26:return(0,o.jsxs)("div",{className:"".concat(s," tb-giphy-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})})]});case 28:return a.ZQ?(0,o.jsxs)("div",{className:"".concat(s," tb-capterra-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1"}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2"}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3"}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4"})]}):(0,o.jsxs)("div",{className:"".concat(s," tb-tiktok-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})})]});case 29:return a.ZQ?(0,o.jsx)("div",{className:"".concat(s," tb-etsy"),children:(0,o.jsx)("div",{})}):(0,o.jsx)("div",{className:"".concat(s," tb-onsite-upload-default"),children:(0,o.jsx)("div",{})});case 30:case 32:return(0,o.jsx)("div",{className:"".concat(s," tb-vk"),children:(0,o.jsx)("div",{})});case 31:return(0,o.jsxs)("div",{className:"".concat(s," tb-tiktok-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})})]});case 33:return(0,o.jsxs)("div",{className:"".concat(s," tb-trustpilot-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 34:return(0,o.jsxs)("div",{className:"".concat(s," tb-amazon-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 35:return(0,o.jsx)("div",{className:"".concat(s," tb-tripadvisor"),children:(0,o.jsx)("div",{})});case 36:return(0,o.jsxs)("div",{className:"".concat(s," tb-tagembed-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})})]});case 37:return(0,o.jsxs)("div",{className:"".concat(s," tb-aliexpress-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})})]});default:return""}}));class d extends s.PureComponent{render(){return(0,o.jsx)(c,{...this.props})}}},25810:(t,e,i)=>{i.r(e),i.d(e,{default:()=>d});var s=i(47313),a=i(35179),o=i(46417);const c=s.lazy((()=>i.e(5867).then(i.bind(i,95867))));class d extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:i,isDefault:d,Personalization:r}=this.props,n=!!d&&(7!==t.id&&4!==t.id&&36!==t.id),l=a.ZQ&&36==t.id?"tagembed":t.icon;return n?(0,o.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(l.replace(/fa-/g,"")),children:(0,o.jsx)("div",{})}):(0,o.jsxs)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(c,{network:t,networkClass:e})]})}}},11502:(t,e,i)=>{i.d(e,{Z:()=>o});var s=i(17739),a=i(46417);const o=t=>{let{ThemeRule:e,btnClass:i}=t;const o={fontFamily:e.css_font};return(0,a.jsx)("div",{className:"tb_shop_btn_wrap ".concat(i),children:(0,a.jsx)("div",{className:"tb_shop_btn".concat(e.postHover||(0,s.mD)(4)||(0,s.mD)(55)?" tb_shop_btn_light":" tb_shop_btn_dark"),style:o,children:e.shoppingText})})}},24235:(t,e,i)=>{i.d(e,{Z:()=>o});var s=i(17739),a=i(46417);const o=t=>{let{count:e}=t;return(0,a.jsxs)("div",{className:"tb_r_view",children:[(0,a.jsx)("div",{className:"tb__icon tb-eye",children:(0,a.jsx)("div",{})}),(0,s.sy)(e)]})}},99154:(t,e,i)=>{i.r(e),i.d(e,{default:()=>w});var s=i(47313),a=i(34862),o=i(43411),c=i(97529),d=i(47330),r=(i(6940),i(65192),i(59606),i(98907),i(84261)),n=i(64442),l=i(81349),h=i(35179),_=i(46417);const p=t=>{let{itemData:e,wallID:i,wall:s,ownerId:a,isVisible:o}=t;const c=!(3!==e.type&&5!==e.type||!o||1!=s.ThemeRule.autoPlay&&h.ig);return(0,_.jsxs)("div",{className:"tb_rt_media_wrap",children:[(0,_.jsx)(l.Z,{itemData:e,IconClass:"tb_rt_media_icon",show:!0,hideVideo:!0}),c?(0,_.jsx)(n.Z,{VideoClass:"tb_rt_video",data:e,wallID:i,themeID:s.Personalization.widgetTheme,ownerId:a,size:178,isCover:!0,muted:!0,autoPlay:!0}):(0,_.jsx)(r.default,{ImageClass:"tb_rt_image",data:e,wallID:i,themeID:s.Personalization.widgetTheme,ownerId:a,size:178})]})};var u=i(17739),m=i(25810),b=i(11502),v=i(24235);class x extends s.PureComponent{constructor(t){super(t),this.mediaHeight=s.createRef()}componentDidMount(){h.nX&&(0,u.YN)(this.mediaHeight)}render(){const{itemData:t,itemIndex:e,wallID:i,ownerId:s,wall:a,isVisible:o,clickToShowPopUp:c,ThemeRule:d,personalization:r}=this.props,n=!!(t.ugc_products&&t.ugc_products.length>0),l={backgroundColor:d.cardColor},u=!(!h.ig||!n||d.hideContent),x=!(!h.ig||!n||0!==t.hotspot),j=!!(h.ig&&t.hotspot&&n),g=0==d.postHover&&h.ig?"light":"dark",w=3===t.type||5===t.type;return(0,_.jsx)("div",{"item-id":t.id,id:"tb-hc-post-".concat(t.id),className:"tb_rt_post_wrapper",ref:this.mediaHeight,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,style:{padding:a.Personalization.padding/2},"tb-product":x?1:j?2:0,children:(0,_.jsx)("div",{className:"tb_rt_post_in tb_icon_animate ".concat(h.ig?"":"tb_rt_post_in_animate"),style:l,onClick:c(e,t),children:(0,_.jsxs)("div",{className:"tb_rt_post_media_wrapp",children:[w&&1==d.showReelsView&&(null===t||void 0===t?void 0:t.views)>0?(0,_.jsx)(v.Z,{count:null===t||void 0===t?void 0:t.views}):null,(0,_.jsx)(p,{itemData:t,wallID:i,wall:a,ownerId:s,preload:0==e,isVisible:o}),h.ig?null:(0,_.jsx)("div",{className:"tb_rt_play_ico",children:(0,_.jsx)("div",{className:"tb__icon tb-play",children:(0,_.jsx)("div",{})})}),(0,_.jsxs)("div",{className:"tb_rt_post_details",children:[(0,_.jsx)("div",{className:"tb_rt_social_",children:(0,_.jsx)(m.default,{networkClass:"tb_rt_social_ico_",network:t.network,ThemeRule:d,isDefault:1===d.iconType,Personalization:r})}),u?(0,_.jsx)(b.Z,{ThemeRule:d,btnClass:"tb_rt_btn_wrap"}):null]}),(0,_.jsx)("div",{className:"tb_rt_post_overlay tb_rt_post_overlay-".concat(g),children:(0,_.jsx)("div",{})})]})})})}}var j=i(43635);class g extends s.Component{constructor(t){super(t),this.requestData=t=>{const{appendData:e,wall:i,preRender:s,hasMoreData:a,getDataNextSteps:o,loaderData:c}=this.props;t.progress>.8&&a&&!c.isShowMoreLoading&&o(i.Wall.id,Math.floor(Date.now()/1e3),i.ThemeRule.numberOfPosts,e.networkID,e.after,s,e.heightEvent)},this.reScrolled=()=>{setTimeout((()=>{let t=document.querySelector(".splide__list"),e=document.querySelector(".splide__slide").offsetWidth;const i=document.querySelectorAll(".splide__slide.is-visible").length,s=document.querySelector(".splide__slide.is-active.is-visible").getAttribute("aria-label").substring(0,2),a=Number(s)+(i-1)+i;a>0?(t.style.transition="0s ease",t.style.transform="translateX(-".concat(a*e,"px)")):t.style.transform="translateX(0px)"}),200)},this.inputRefs={}}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((t,e)=>{t.removeAttribute("role")}))}),100);const{postData:t}=this.props;if(t&&1==t.length){let t=document.querySelector(".tb_rt_arrow_left__"),e=document.querySelector(".tb_rt_arrow_right__");t&&e&&(document.querySelector(".tb_rt_arrow_left__").style="display:none",document.querySelector(".tb_rt_arrow_right__").style="display:none")}}componentDidUpdate(){const t=Object.values(this.inputRefs)[0],{postData:e,completeDataObject:i,onClickPopUpSlider:s,parentID:a}=this.props;if(t&&Object.values(t)[5].length>0){Object.values(t)[5].map(((t,o)=>{if(t.classList){const o=String(t.classList.value).split(" ").filter((t=>String(t).includes("tb_")));var c=o[0];String(o[0]).includes("tb_")&&(c=String(o[0]).replace("tb_",""));const d=e.findIndex((t=>t==c));let r=document.querySelectorAll(".tb_rt_post_container #".concat(t.id));for(let t=0;t<r.length;t++){let e=r[t],o=e.getAttribute("p_id");String(a)===String(o)&&e.addEventListener("click",(t=>{t.preventDefault();const e=i[c];s(d,e)}))}}}))}}render(){const{postData:t,completeDataObject:e,wall:i,clickToShowPopUp:s,hasMoreData:o,parentID:r,keyRender:n}=this.props,l=r,p=i.ThemeRule.numberOfCoumn,u=i.ThemeRule.mobileColumn,m=i.ThemeRule.slidePost,b=i.ThemeRule.slideDuration,v=1===i.Personalization.trimcontent;return(0,_.jsx)(_.Fragment,{children:""!=r?(0,_.jsx)("div",{className:"tb_rt_post_container",ref:this.sliderHeight,children:(0,_.jsx)(c.tq,{ref:t=>this.inputRefs[l]=t,style:{width:"100%"},onScroll:t=>this.requestData(t),onSlideChange:t=>this.requestData(t),onAutoplay:t=>this.requestData(t),autoHeight:!0,speed:700,edgeSwipeDetection:!0,slidesPerView:"auto",touchRatio:2,cssMode:a.tq,passiveListeners:!0,height:"250px",freeMode:{enabled:!0,sticky:!1,momentumBounceRatio:2,momentumVelocityRatio:3},autoplay:!(!h.ig&&!h.Jx)&&{delay:1===m?1e3*b:99e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},loop:!o,breakpoints:{0:{slidesPerView:0==u?1.6:parseInt(u)+.6},480:{slidesPerView:0==u?1.6:parseInt(u)+.6},575:{slidesPerView:0==u?2.6:parseInt(u)+.6},767:{slidesPerView:0==p?3.6:parseInt(p)+.6},1024:{slidesPerView:0==p?5.6:parseInt(p)+.6},1400:{slidesPerView:0==p?6.6:parseInt(p)+.6},1600:{slidesPerView:0==p?7.6:parseInt(p)+.6}},mousewheel:{forceToAxis:!0,sensitivity:2},watchSlidesProgress:!0,modules:[d.pt,d.Gk,d.Rv],className:"tb_rt_post_slider ".concat(v?"tb_rt_fixed_height":""),children:(0,_.jsx)(_.Fragment,{children:t&&t.length>0&&t.map(((t,a)=>{const o=e[t];return h.ig||1!=o.type?(0,_.jsx)(c.o5,{style:{margin:0,padding:0},p_id:r,className:"tb_".concat(o.id),children:t=>{let{isVisible:e}=t;return(0,_.jsx)(x,{isVisible:e,ownerId:i.Wall.owner,itemData:o,itemIndex:a,personalization:i.Personalization,ThemeRule:i.ThemeRule,wallID:i.Wall.id,clickToShowPopUp:s,wall:i})}},a):null}))})},n)}):null})}}const w=(0,s.memo)((0,o.$j)((t=>({loaderData:t.loaderData})),(t=>({getDataNextSteps:(e,i,s,a,o,c,d,r)=>t((0,j.Sx)(e,i,s,a,o,c,d,r))})))(g))},2406:(t,e,i)=>{e.Ad=void 0;var s=i(84228);var a=i(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return a.getImageSize}});var o=i(22537)},84228:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const s=i(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((i,a)=>{if("undefined"===typeof window)return a(s.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return a(s.ErrorMessage.URL_IS_NOT_DEFINED);let o=null;const c=new Image;c.addEventListener("load",(()=>{o&&window.clearTimeout(o),i({width:c.naturalWidth,height:c.naturalHeight})})),c.addEventListener("error",(t=>{o&&window.clearTimeout(o),a("".concat(t.type,": ").concat(t.message))})),c.src=t,e.timeout&&(o=window.setTimeout((()=>a(s.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,i){var s=this&&this.__awaiter||function(t,e,i,s){return new(i||(i=Promise))((function(a,o){function c(t){try{r(s.next(t))}catch(e){o(e)}}function d(t){try{r(s.throw(t))}catch(e){o(e)}}function r(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(c,d)}r((s=s.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const a=i(47313),o=i(65786);e.useImageSize=(t,e)=>{const[i,c]=(0,a.useState)(null),[d,r]=(0,a.useState)(!1),[n,l]=(0,a.useState)(null);return(0,a.useEffect)((()=>{s(void 0,void 0,void 0,(function*(){r(!0),c(null);try{const{width:i,height:s}=yield(0,o.getImageSize)(t,e);c({width:i,height:s})}catch(n){l(n.toString())}finally{r(!1)}}))}),[t,e]),[i,{loading:d,error:n}]}},65192:()=>{},59606:()=>{},98907:()=>{}}]);