(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2044,5867,4261,8342,9239,5790,8829],{89239:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});var s=i(47313),a=i(17739),o=i(98935),c=i(46417);class n extends s.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:i}=this.props;return(0,c.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,c.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,a.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,c.jsx)(o.Z,{authorClass:e,username:t.name,network:i,color:null===i.id?"#000":i.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,i)=>{"use strict";i.d(e,{Z:()=>c});var s=i(47313),a=i(46417);const o=t=>{let{username:e,network:i,authorClass:s,errorPic:o}=t;return(0,a.jsx)("img",{className:"".concat(s,"__"),src:o||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===i.id?"#000":i.color).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},c=(0,s.memo)(o)},7138:(t,e,i)=>{"use strict";i.d(e,{Z:()=>c});var s=i(47313),a=i(46417);class o extends s.PureComponent{render(){const{cta:t,ctaClass:e,postCta:i,onClickToCTA:s,item:o}=this.props,c=!(!i||1!==i.status);return(0,a.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),s(o),window.open("".concat(c?i.url:t.url),"_blank")},children:[" ",c?i.text:t.text]})}}const c=o},97915:(t,e,i)=>{"use strict";i.d(e,{Z:()=>h});var s=i(47313),a=i(43411),o=i(83773),c=i(6119),n=i(17739),r=i(46417);const l=(0,o.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),d=t=>'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n  <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n  ").concat(t.product_discount>0&&t.product_price>t.product_discount?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_discount,"</div>"):"","\n  ").concat(t.product_price>0?'<div class="tb_p_tooltip_price">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"","\n  </a>");class _ extends s.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:i}=this.state,s=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return s.status?(0,r.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const a=(0,n.i1)();return(0,r.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(a),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(i==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,r.jsx)("div",{className:"tb_hotspot__ ".concat(0==s.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,r.jsx)(l,{children:(0,r.jsx)(c.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(a),clickable:!0,html:d(t.UgcProduct)})})]},e)}))}):null}}const h=(0,a.$j)((t=>({appData:t.appData})))(_)},84261:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>d});var s=i(47313),a=i(43635),o=i(97915),c=i(2406),n=i(17739),r=i(98501),l=i(46417);class d extends s.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const i=document.querySelector(".track".concat(this.props.data.id));i&&(i.setAttribute("data-height",e),i.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:i}=await(0,c.Ad)(e.postFileNew);this.setState({paddingBottom:100*i/t})}catch(i){this.setState({paddingBottom:100})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(i){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,imgUrl:this.props.data.postFileNew}}componentWillMount(){this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}componentDidMount(){this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}render(){const{ImageClass:t,data:e,wallID:i,themeID:s,ownerId:c,hotspot:d}=this.props,{imgUrl:_,paddingBottom:h}=this.state,m={paddingBottom:"".concat(h,"%")},u={backgroundImage:"url(".concat(_,")")},b=!!(e.hotspot&&e.ugc_products.length>0&&d);return(0,l.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:m,children:[b?(0,l.jsx)("div",{className:"tb_blur_bg_",style:u}):null,(0,l.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:{width:b?"":"100%"},children:[b?(0,l.jsx)(o.Z,{product:e.ugc_products}):null,(0,l.jsx)("img",{className:"".concat(t," track").concat(e.id),role:"img",src:_,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":i,"data-owner-id":c,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":s,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(r.do,"/media/images/no-image.svg"),(0,a.ht)(t)},alt:(0,n.P)(_)})]})]})}}},64442:(t,e,i)=>{"use strict";i.d(e,{Z:()=>_});var s=i(47313),a=i(2406),o=i(20510),c=i.n(o),n=i(43635),r=i(35179),l=i(46417);const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class _ extends s.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:i}=await(0,a.Ad)(e.postFileNew);this.setState({paddingBottom:100*i/t})}catch(i){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=s.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(i){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:i,isCover:s,controls:a,autoPlay:o,handleVideoEnded:_,muted:h}=this.props,{paddingBottom:m,videoLoaded:u,isVisible:b}=this.state,p={paddingBottom:"".concat(m,"%")},v=e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,l.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:p,ref:this.videoRef,children:(0,l.jsx)(c(),{className:"".concat(t," video").concat(e.id),url:d(v,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":i,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{forceVideo:!0,attributes:{muted:h}}},loop:!o,onError:t=>{e.stories&&0!=e.stories||(0,n.ib)(t,e.id)},autoPlay:o,muted:h,volume:o?1:0,playsinline:!0,onReady:t=>{r.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:r.ig?b:o,height:"100%",width:"100%",controls:a||!1,style:{backgroundImage:"url(".concat(e.postFileNew,")"),backgroundSize:s?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:_||null})})}}},81349:(t,e,i)=>{"use strict";i.d(e,{Z:()=>c});i(47313);var s=i(35179),a=i(95867),o=i(46417);const c=t=>{const{itemData:e,IconClass:i,isCenter:c,hideVideo:n,show:r}=t,l=3===e.type||5===e.type,d=7===e.network.id,_=!!(e.imageList&&e.imageList.length>0),h=1===e.isAudio,m=!!(e.ugc_products&&e.ugc_products.length>0),u=(0,o.jsx)(a.default,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"}),b=(0,o.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:(0,o.jsx)("div",{})}),p=(0,o.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:(0,o.jsx)("div",{})}),v=(0,o.jsx)("div",{className:"tb_video_ico tb__icon tb-video",children:(0,o.jsx)("div",{})}),x=(0,o.jsx)("div",{className:"tb_play_ico tb__icon tb-play",children:(0,o.jsx)("div",{})}),j=(0,o.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:(0,o.jsx)("div",{})}),w=(0,o.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:(0,o.jsx)("div",{})});return r?(0,o.jsxs)(o.Fragment,{children:[c&&(d||l)?(0,o.jsxs)("div",{className:"".concat(i," tb__media_ico_c"),children:[l&&!d?w:"",l&&d?u:""]}):null,m||_||l?(0,o.jsxs)("div",{className:"".concat(i," tb__media_ico_"),children:[m?j:"",_?b:"",c||!l||d||n?"":h?p:s.ZQ?x:v]}):null]}):null}},95867:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});var s=i(47313),a=i(35179),o=i(46417);const c=s.memo((t=>{let{network:e,networkClass:i}=t;switch(e.id){case 1:return(0,o.jsx)("div",{className:"".concat(i," tb__icon tb-twitter")});case 2:case 18:return(0,o.jsx)("div",{className:"".concat(i," tb__icon tb-instagram-default"),children:(0,o.jsx)("div",{})});case 3:return(0,o.jsx)("div",{className:"".concat(i," tb__icon tb-facebook"),children:(0,o.jsx)("div",{})});case 4:return(0,o.jsxs)("div",{className:"".concat(i," tb__icon tb-google-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})})]});case 5:return(0,o.jsx)("div",{className:"".concat(i," tb__icon tb-pinterest"),children:(0,o.jsx)("div",{})});case 6:return(0,o.jsxs)("div",{className:"".concat(i," tb__icon tb-flickr-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 7:return(0,o.jsxs)("div",{className:"".concat(i," tb__icon tb-youtube-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 8:return(0,o.jsx)("div",{className:"".concat(i," tb__icon tb-vimeo"),children:(0,o.jsx)("div",{})});case 10:return(0,o.jsx)("div",{className:"".concat(i," tb__icon tb-linkedin"),children:(0,o.jsx)("div",{})});case 11:return(0,o.jsx)("div",{className:"".concat(i," tb__icon tb-tumblr"),children:(0,o.jsx)("div",{})});case 12:return(0,o.jsx)("div",{className:"".concat(i," tb__icon tb-rss"),children:(0,o.jsx)("div",{})});case 15:return(0,o.jsx)("div",{className:"".concat(i," tb__icon tb-workplace"),children:(0,o.jsx)("div",{})});case 19:return(0,o.jsx)("div",{className:"".concat(i," tb__icon tb-yelp"),children:(0,o.jsx)("div",{})});case 20:return(0,o.jsxs)("div",{className:"".concat(i," tb__icon tb-slack-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path8",children:(0,o.jsx)("div",{})})]});case 21:return(0,o.jsx)("div",{className:"".concat(i," tb__icon tb-yammer"),children:(0,o.jsx)("div",{})});case 23:return(0,o.jsx)("div",{className:"".concat(i," tb__icon tb-airbnb"),children:(0,o.jsx)("div",{})});case 25:return(0,o.jsx)("div",{className:"".concat(i," tb__icon tb-soundcloud"),children:(0,o.jsx)("div",{})});case 26:return(0,o.jsxs)("div",{className:"".concat(i," tb__icon tb-giphy-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})})]});case 28:return a.ZQ?(0,o.jsxs)("div",{className:"".concat(i," tb__icon tb-capterra-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1"}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2"}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3"}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4"})]}):(0,o.jsxs)("div",{className:"".concat(i," tb__icon tb-tiktok-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})})]});case 29:return a.ZQ?(0,o.jsx)("div",{className:"".concat(i," tb__icon tb-etsy"),children:(0,o.jsx)("div",{})}):(0,o.jsx)("div",{className:"".concat(i," tb__icon tb-onsite-upload-default"),children:(0,o.jsx)("div",{})});case 30:case 32:return(0,o.jsx)("div",{className:"".concat(i," tb__icon tb-vk"),children:(0,o.jsx)("div",{})});case 31:return(0,o.jsxs)("div",{className:"".concat(i," tb__icon tb-tiktok-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})})]});case 33:return(0,o.jsxs)("div",{className:"".concat(i," tb__icon tb-trustpilot-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 34:return(0,o.jsxs)("div",{className:"".concat(i," tb__icon tb-amazon-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 35:return(0,o.jsx)("div",{className:"".concat(i," tb__icon tb-tripadvisor"),children:(0,o.jsx)("div",{})});case 36:return(0,o.jsxs)("div",{className:"".concat(i," tb__icon tb-tagembed-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})})]});case 37:return(0,o.jsxs)("div",{className:"".concat(i," tb__icon tb-aliexpress-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})})]});default:return""}}));class n extends s.PureComponent{render(){return(0,o.jsx)(c,{...this.props})}}},25810:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});var s=i(47313),a=i(35179),o=(i(17739),i(46417));const c=s.lazy((()=>i.e(5867).then(i.bind(i,95867))));class n extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:i,isDefault:n,Personalization:r}=this.props,l=!!n&&(7!==t.id&&4!==t.id&&36!==t.id),d=a.ZQ&&36==t.id?"tagembed":t.icon;return l?(0,o.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),style:{color:""},children:(0,o.jsx)("div",{})}):(0,o.jsxs)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(c,{network:t,networkClass:e})]})}}},62245:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>r});var s=i(47313),a=i(16390),o=i(17739),c=(i(35179),i(25810),i(46417));const n=s.lazy((()=>Promise.all([i.e(622),i.e(584)]).then(i.bind(i,30584))));class r extends s.PureComponent{constructor(t){super(t),this.contentRef=s.createRef()}componentDidMount(){setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){const{contentClass:t,content:e,ThemeRule:i,font:r,personalization:l,item:d,contentTitle:_,readMore:h,maxLength:m,textAlign:u,maxLines:b,isReadMore:p}=this.props,v={WebkitLineClamp:b,textAlign:i.textAlignment};u||i.textAlignment;let x=20==d.network.id?e:(0,o.Fx)(e);12==d.network.id&&(x=(0,a.ZP)(x));const j="".concat(i.lineTrim?" tb_content_line-".concat(i.lineTrim):""),w="".concat(t," ").concat(p?"":j);return(0,c.jsxs)("div",{className:w,ref:this.contentRef,style:v,children:[_?(0,c.jsx)("div",{className:"tb_bold_txt__",children:(0,a.ZP)(_)}):null,(0,c.jsxs)(s.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:[" ",(0,c.jsx)(n,{data:d,content:x,Personalization:l})]})]})}}},90905:(t,e,i)=>{"use strict";i.d(e,{Z:()=>r});var s=i(47313),a=i(35179),o=i(46417);const c=t=>{let{network:e}=t;const i={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:s,color:c}=i[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,o.jsx)("div",{className:s,style:{color:c},"tb-network":e.id,children:(0,o.jsx)("div",{})})},n=t=>{let{ThemeID:e}=t;const{className:i,color:s}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,o.jsx)("div",{className:i,style:{color:s},"tb-network":e})};class r extends s.PureComponent{render(){const{rating:t,network:e,ThemeID:i}=this.props;return(0,o.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,s)=>i?(0,o.jsx)(n,{ThemeID:i},s):(0,o.jsx)(c,{network:e},s))):null})}}},55790:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});var s=i(47313),a=i(17739),o=i(46417);const c=t=>{const{postTime:e,timeClass:i}=t;return(0,o.jsx)("div",{className:i,children:(0,a.Sy)(e)})},n=(0,s.memo)(c)},95136:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>f});i(47313);var s=i(89239),a=i(55790),o=i(25810),c=i(46417);const n=t=>{let{author:e,personalization:i,postTime:n,network:r,ThemeRule:l,font:d,mediaType:_}=t;const h=e.username&&e.username.length>0?"@".concat(e.username):"",m=!(!i.postAuthor||e.isInstaUser),u=!(!i.postAuthor||!i.postTime||e.isInstaUser);return(0,c.jsxs)("div",{className:"tb_wt_author_wrapper",children:[(0,c.jsxs)("div",{className:"tb_wt_author",children:[m?(0,c.jsx)(s.default,{author:e,network:r,authorClass:"tb_wt_author_profile"}):"",(0,c.jsxs)("div",{className:"tb_wt_author_info",children:[m?(0,c.jsx)("div",{className:"tb_wt_authorname",children:e.name}):"",(0,c.jsxs)("div",{className:"tb_wt_post_info",children:[m?(0,c.jsx)("div",{className:"tb_wt_username",children:h}):"",u?(0,c.jsx)("div",{className:"tb_wt_seprator",children:" "}):"",i.postTime?(0,c.jsx)(a.default,{postTime:n,timeClass:"tb_wt_time tb-cTBfont-".concat(l.font_varient),authorColor:l.authorColor}):""]})]})]}),(0,c.jsx)("div",{className:"tb_wt_social_",children:(0,c.jsx)(o.default,{networkClass:"tb_wt_social_ico",network:r,isDefault:1===l.iconType,ThemeRule:l})})]})};var r=i(35179),l=i(81349),d=i(84261),_=i(64442);const h=t=>{let{itemData:e,wallID:i,ownerId:s,wall:a}=t;const o=!(!r.ZQ||3!==e.type&&5!==e.type||a.Personalization.mobilePopup||a.Personalization.postFeatured),n=(3===e.type||5===e.type)&&28!==e.network.id&&1==a.ThemeRule.autoPlay,h=!!r.ZQ&&(!!a.ThemeRule.aspectImageRatio&&a.ThemeRule.aspectImageRatio);return(0,c.jsxs)("div",{className:"tb_wt_media_wrap",children:[o?null:(0,c.jsx)(l.Z,{itemData:e,IconClass:"tb_wt_media_icon",show:!0,isCenter:r.ZQ}),n||o?(0,c.jsx)(_.Z,{VideoClass:"tb_wt_video",data:e,wallID:i,themeID:a.Personalization.widgetTheme,ownerId:s,size:h,isCover:!0,controls:!0,autoPlay:!1,muted:!0}):(0,c.jsx)(d.default,{ImageClass:"tb_wt_image",data:e,wallID:i,themeID:a.Personalization.widgetTheme,ownerId:s,size:h,ThemeRule:a.ThemeRule})]})};var m=i(62245),u=i(7138),b=i(90905);const p=t=>{let{share:e,shareClass:i}=t;const s=(t,e)=>{t.stopPropagation(),e()};return(0,c.jsx)("div",{className:i,children:(0,c.jsxs)("div",{className:"tb_wt_share_wrapper",children:[e.facebook&&(0,c.jsx)("div",{className:"tb_wt_share_list",children:(0,c.jsx)("div",{onClick:t=>s(t,(()=>window.open(e.facebook,"_blank"))),className:"tb_wt_share_icon tb__icon tb-facebook tb_wt_cursor_pointer",title:"facebook",rel:"noopener noreferrer nofollow"})}),e.twitter&&(0,c.jsx)("div",{className:"tb_wt_share_list",children:(0,c.jsx)("div",{onClick:t=>s(t,(()=>window.open(e.twitter,"_blank"))),className:"tb_wt_share_icon tb__icon tb-twitter tb_wt_cursor_pointer",title:"twitter",rel:"noopener noreferrer nofollow"})}),e.linkedin&&(0,c.jsx)("div",{className:"tb_wt_share_list",children:(0,c.jsx)("div",{onClick:t=>s(t,(()=>window.open(e.linkedin,"_blank"))),className:"tb_wt_share_icon tb__icon tb-linkedin tb_wt_cursor_pointer",title:"linkedin",rel:"noopener noreferrer nofollow"})})]})})};var v=i(17739);const x=(t,e,i)=>1===t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,v.ok)(e)):i,j=(t,e,i)=>1===t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,v.ok)(e)):i,w=t=>{let{itemData:e,ThemeRule:i}=t;const s=e.network.id,a=3===s||10===s?"like":"heart";return(0,c.jsx)(c.Fragment,{children:12!==s&&15!==s&&20!==s&&21!==s&&29!==s?(0,c.jsxs)("div",{className:"tb_wt_social_action__",children:[(0,c.jsx)("div",{className:"tb_wt_social_action__list",children:(0,c.jsxs)("a",{href:x(s,e.postId,e.link),target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:[(0,c.jsx)("div",{className:"tb_wt_social_action_ico__ tb__icon tb-".concat(a),children:" "}),e.like_count>0?(0,c.jsx)("div",{className:"tb_wt_social_action_counts__",children:e.like_count}):""]})}),(0,c.jsx)("div",{className:"tb_wt_social_action__list",children:(0,c.jsxs)("a",{href:j(s,e.postId,e.link),target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:[(0,c.jsx)("div",{className:"tb_wt_social_action_ico__ tb__icon tb-comment",children:" "}),e.like_count>0||e.comment_count>0?(0,c.jsx)("div",{className:"tb_wt_social_action_counts__",children:r.ZQ?e.comment_count:e.like_count}):""]})}),1===s?(0,c.jsx)("div",{className:"tb_wt_social_action__list",children:(0,c.jsx)("a",{href:"https://twitter.com/intent/retweet?tweet_id=".concat((0,v.ok)(e.postId)),target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:(0,c.jsx)("div",{className:"tb_wt_social_action_ico__ tb__icon tb-retweet",children:" "})})}):""]}):""})},g=r.ZQ?null:200,N=t=>{let{itemData:e,personalization:i,ThemeRule:s,wallID:a,clickToShowPopUp:o,itemIndex:l,ownerId:d,onClickToCTA:_,wall:x}=t;const j=!!(e.ugc_products&&e.ugc_products.length>0),N=!(!j||0!==e.hotspot),f=!(!e.hotspot||!j),k=!(r.ZQ&&(0,v.mD)(53)||(0,v.mD)(57)||2!==e.type&&3!==e.type&&4!==e.type&&5!==e.type),y=e.rating>0,C=e.rating>0?"tb_wt_rating_content":"tb_wt_content",I=1===e.type&&i.textDecorate?"tb_wt_text_decoration tb_wt_text_post":"",T=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),S=i.trimcontent?(0,v.Sv)(e.content,g):e.content;return(0,c.jsx)("div",{id:"tb-wt-post-".concat(e.id),className:"tb_wt_post_wrapper","tb-network":e.network.id,"tb-product":N?1:f?2:0,children:(0,c.jsxs)("div",{className:"tb_wt_post_in",onClick:o(l,e),children:[(0,c.jsx)(n,{ownerId:d,postTime:e.createdAt,author:e.author,network:e.network,font:s,personalization:i,ThemeRule:s,mediaType:k}),(0,c.jsxs)("div",{className:"tb_wt_post_media_wrapp",children:[k?(0,c.jsx)(h,{itemData:e,wallID:a,ownerId:d,wall:x},"img".concat(l,"_").concat(e.id)):"",y?(0,c.jsxs)("div",{className:"tb_wt_rating__",children:[(0,c.jsx)(b.Z,{rating:e.rating,network:e.network})," "]}):""]}),(0,c.jsxs)("div",{className:"tb_wt_contant_wrapper",children:[T?(0,c.jsxs)("div",{className:"tb_wt_post_cta",children:[(0,c.jsx)(u.Z,{ctaClass:"tb_wt_post_cta_btn",cta:e.cta,item:e,onClickToCTA:_})," "]}):"",s.hideContent&&1!=e.type?"":(0,c.jsx)(m.default,{contentClass:"".concat(C," ").concat(I),item:e,content:S,font:s,ThemeRule:s,personalization:i,contentTitle:e.contentTitle}),(0,c.jsxs)("div",{className:"tb_wt_post_share_container",style:e&&29==e.network.id||!s.socialAction?{justifyContent:"flex-end"}:{},children:[s.socialAction?(0,c.jsx)(w,{itemData:e,ThemeRule:s}):"",e.share.status?(0,c.jsx)(p,{share:e.share,shareClass:"tb_mc_share_container"}):""]})]})]})})},f=t=>{let{postData:e,completeDataObject:i,adjustWidth:s,wall:a,clickToShowPopUp:o,onClickToCTA:n}=t;return(0,c.jsx)("div",{className:"tb_wt_post_container",children:e&&e.length>0&&e.map(((t,e)=>{const r=i[t];return(0,c.jsx)(N,{ownerId:a.Wall.owner,itemData:r,itemIndex:e,adjustWidth:s,personalization:a.Personalization,ThemeRule:a.ThemeRule,wallID:a.Wall.id,clickToShowPopUp:o,onClickToCTA:n,wall:a},"wdt_crd_".concat(e,"_").concat(t.id))}))})}},2406:(t,e,i)=>{"use strict";e.Ad=void 0;var s=i(84228);var a=i(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return a.getImageSize}});var o=i(22537)},84228:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,i)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const s=i(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((i,a)=>{if("undefined"===typeof window)return a(s.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return a(s.ErrorMessage.URL_IS_NOT_DEFINED);let o=null;const c=new Image;c.addEventListener("load",(()=>{o&&window.clearTimeout(o),i({width:c.naturalWidth,height:c.naturalHeight})})),c.addEventListener("error",(t=>{o&&window.clearTimeout(o),a("".concat(t.type,": ").concat(t.message))})),c.src=t,e.timeout&&(o=window.setTimeout((()=>a(s.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,i){"use strict";var s=this&&this.__awaiter||function(t,e,i,s){return new(i||(i=Promise))((function(a,o){function c(t){try{r(s.next(t))}catch(e){o(e)}}function n(t){try{r(s.throw(t))}catch(e){o(e)}}function r(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(c,n)}r((s=s.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const a=i(47313),o=i(65786);e.useImageSize=(t,e)=>{const[i,c]=(0,a.useState)(null),[n,r]=(0,a.useState)(!1),[l,d]=(0,a.useState)(null);return(0,a.useEffect)((()=>{s(void 0,void 0,void 0,(function*(){r(!0),c(null);try{const{width:i,height:s}=yield(0,o.getImageSize)(t,e);c({width:i,height:s})}catch(l){d(l.toString())}finally{r(!1)}}))}),[t,e]),[i,{loading:n,error:l}]}},50247:()=>{}}]);