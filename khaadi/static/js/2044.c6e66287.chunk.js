(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2044,5867,4261,8342,9239,5790,8829],{89239:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var i=s(47313),a=s(17739),c=s(98935),o=s(46417);class r extends i.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:s}=this.props;return(0,o.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,o.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,a.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,o.jsx)(c.Z,{authorClass:e,username:t.name,network:s,color:null===s.id?"#000":s.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,s)=>{"use strict";s.d(e,{Z:()=>o});var i=s(47313),a=s(46417);const c=t=>{let{username:e,network:s,authorClass:i,errorPic:c}=t;return(0,a.jsx)("img",{className:"".concat(i,"__"),src:c||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":s.color).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},o=(0,i.memo)(c)},7138:(t,e,s)=>{"use strict";s.d(e,{Z:()=>o});var i=s(47313),a=s(46417);class c extends i.PureComponent{render(){const{cta:t,ctaClass:e,postCta:s,onClickToCTA:i,item:c}=this.props,o=!(!s||1!==s.status);return(0,a.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),i(c),window.open("".concat(o?s.url:t.url),"_blank")},children:[" ",o?s.text:t.text]})}}const o=c},97915:(t,e,s)=>{"use strict";s.d(e,{Z:()=>h});var i=s(47313),a=s(43411),c=s(83773),o=s(6119),r=s(17739),n=s(46417);const l=(0,c.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),d=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,s=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",i=t.product_price>0||t.product_discount>0?"".concat(s,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(i,"\n        </a>")};class _ extends i.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:s}=this.state,i=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return i.status?(0,n.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const a=(0,r.i1)();return(0,n.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(a),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(s==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,n.jsx)("div",{className:"tb_hotspot__ ".concat(0==i.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,n.jsx)(l,{children:(0,n.jsx)(o.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(a),clickable:!0,html:d(t.UgcProduct)})})]},e)}))}):null}}const h=(0,a.$j)((t=>({appData:t.appData})))(_)},84261:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>d});var i=s(47313),a=s(43635),c=s(97915),o=s(2406),r=s(17739),n=s(98501),l=s(46417);class d extends i.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const s=document.querySelector(".track".concat(this.props.data.id));s&&(s.setAttribute("data-height",e),s.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:s}=await(0,o.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t})}catch(s){this.setState({paddingBottom:100})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(s){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,imgUrl:this.props.data.postFileNew}}componentWillMount(){this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}componentDidMount(){this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}render(){const{ImageClass:t,data:e,wallID:s,themeID:i,ownerId:o,hotspot:d}=this.props,{imgUrl:_,paddingBottom:h}=this.state,u={paddingBottom:"".concat(h,"%")},m={backgroundImage:"url(".concat(_,")")},p=!!(e.hotspot&&e.ugc_products.length>0&&d);return(0,l.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:u,children:[p?(0,l.jsx)("div",{className:"tb_blur_bg_",style:m}):null,(0,l.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:{width:p?"":"100%"},children:[p?(0,l.jsx)(c.Z,{product:e.ugc_products}):null,(0,l.jsx)("img",{className:"".concat(t," track").concat(e.id),role:"img",src:_,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":s,"data-owner-id":o,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":i,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(n.do,"/media/images/no-image.svg"),(0,a.ht)(t)},alt:(0,r.P)(_)})]})]})}}},64442:(t,e,s)=>{"use strict";s.d(e,{Z:()=>_});var i=s(47313),a=s(2406),c=s(20510),o=s.n(c),r=s(43635),n=s(35179),l=s(46417);const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class _ extends i.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:s}=await(0,a.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t})}catch(s){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=i.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(s){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:s,isCover:i,controls:a,autoPlay:c,handleVideoEnded:_,muted:h}=this.props,{paddingBottom:u,videoLoaded:m,isVisible:p}=this.state,b={paddingBottom:"".concat(u,"%")},v=e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,l.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:b,ref:this.videoRef,children:(0,l.jsx)(o(),{className:"".concat(t," video").concat(e.id),url:d(v,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":s,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata"}}},loop:!c,onError:t=>{e.stories&&0!=e.stories||(0,r.ib)(t,e.id)},autoPlay:c,muted:h,volume:c?1:0,playsinline:!0,onReady:t=>{n.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:n.ig?p:c,height:"100%",width:"100%",controls:a||!1,style:{backgroundImage:"url(".concat(e.postFileNew,")"),backgroundSize:i?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:_||null})})}}},81349:(t,e,s)=>{"use strict";s.d(e,{Z:()=>o});s(47313);var i=s(35179),a=s(95867),c=s(46417);const o=t=>{const{itemData:e,IconClass:s,isCenter:o,hideVideo:r,show:n}=t,l=3===e.type||5===e.type,d=7===e.network.id,_=!!(e.imageList&&e.imageList.length>0),h=1===e.isAudio,u=!!(e.ugc_products&&e.ugc_products.length>0),m=(0,c.jsx)(a.default,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"}),p=(0,c.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:(0,c.jsx)("div",{})}),b=(0,c.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:(0,c.jsx)("div",{})}),v=(0,c.jsx)("div",{className:"tb_video_ico tb__icon tb-video",children:(0,c.jsx)("div",{})}),x=(0,c.jsx)("div",{className:"tb_play_ico tb__icon tb-play",children:(0,c.jsx)("div",{})}),j=(0,c.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:(0,c.jsx)("div",{})}),w=(0,c.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:(0,c.jsx)("div",{})});return n?(0,c.jsxs)(c.Fragment,{children:[o&&(d||l)?(0,c.jsxs)("div",{className:"".concat(s," tb__media_ico_c"),children:[l&&!d?w:"",l&&d?m:""]}):null,u||_||l?(0,c.jsxs)("div",{className:"".concat(s," tb__media_ico_"),children:[u?j:"",_?p:"",o||!l||d||r?"":h?b:i.ZQ?x:v]}):null]}):null}},95867:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var i=s(47313),a=s(35179),c=s(46417);const o=i.memo((t=>{let{network:e,networkClass:s}=t;const i="".concat(s," tb__icon tb_ico_default");switch(e.id){case 1:return(0,c.jsx)("div",{className:"".concat(i," tb-twitter")});case 2:case 18:return(0,c.jsx)("div",{className:"".concat(i," tb-instagram-default"),children:(0,c.jsx)("div",{})});case 3:return(0,c.jsx)("div",{className:"".concat(i," tb-facebook"),children:(0,c.jsx)("div",{})});case 4:return(0,c.jsxs)("div",{className:"".concat(i," tb-google-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})})]});case 5:return(0,c.jsx)("div",{className:"".concat(i," tb-pinterest"),children:(0,c.jsx)("div",{})});case 6:return(0,c.jsxs)("div",{className:"".concat(i," tb-flickr-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})})]});case 7:return(0,c.jsxs)("div",{className:"".concat(i," tb-youtube-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})})]});case 8:return(0,c.jsx)("div",{className:"".concat(i," tb-vimeo"),children:(0,c.jsx)("div",{})});case 10:return(0,c.jsx)("div",{className:"".concat(i," tb-linkedin"),children:(0,c.jsx)("div",{})});case 11:return(0,c.jsx)("div",{className:"".concat(i," tb-tumblr"),children:(0,c.jsx)("div",{})});case 12:return(0,c.jsx)("div",{className:"".concat(i," tb-rss"),children:(0,c.jsx)("div",{})});case 15:return(0,c.jsx)("div",{className:"".concat(i," tb-workplace"),children:(0,c.jsx)("div",{})});case 19:return(0,c.jsx)("div",{className:"".concat(i," tb-yelp"),children:(0,c.jsx)("div",{})});case 20:return(0,c.jsxs)("div",{className:"".concat(i," tb-slack-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path8",children:(0,c.jsx)("div",{})})]});case 21:return(0,c.jsx)("div",{className:"".concat(i," tb-yammer"),children:(0,c.jsx)("div",{})});case 23:return(0,c.jsx)("div",{className:"".concat(i," tb-airbnb"),children:(0,c.jsx)("div",{})});case 25:return(0,c.jsx)("div",{className:"".concat(i," tb-soundcloud"),children:(0,c.jsx)("div",{})});case 26:return(0,c.jsxs)("div",{className:"".concat(i," tb-giphy-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,c.jsx)("div",{})})]});case 28:return a.ZQ?(0,c.jsxs)("div",{className:"".concat(i," tb-capterra-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1"}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2"}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3"}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4"})]}):(0,c.jsxs)("div",{className:"".concat(i," tb-tiktok-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,c.jsx)("div",{})})]});case 29:return a.ZQ?(0,c.jsx)("div",{className:"".concat(i," tb-etsy"),children:(0,c.jsx)("div",{})}):(0,c.jsx)("div",{className:"".concat(i," tb-onsite-upload-default"),children:(0,c.jsx)("div",{})});case 30:case 32:return(0,c.jsx)("div",{className:"".concat(i," tb-vk"),children:(0,c.jsx)("div",{})});case 31:return(0,c.jsxs)("div",{className:"".concat(i," tb-tiktok-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,c.jsx)("div",{})})]});case 33:return(0,c.jsxs)("div",{className:"".concat(i," tb-trustpilot-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})})]});case 34:return(0,c.jsxs)("div",{className:"".concat(i," tb-amazon-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})})]});case 35:return(0,c.jsx)("div",{className:"".concat(i," tb-tripadvisor"),children:(0,c.jsx)("div",{})});case 36:return(0,c.jsxs)("div",{className:"".concat(i," tb-tagembed-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})})]});case 37:return(0,c.jsxs)("div",{className:"".concat(i," tb-aliexpress-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})})]});default:return""}}));class r extends i.PureComponent{render(){return(0,c.jsx)(o,{...this.props})}}},25810:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var i=s(47313),a=s(35179),c=s(46417);const o=i.lazy((()=>s.e(5867).then(s.bind(s,95867))));class r extends i.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:s,isDefault:r,Personalization:n}=this.props,l=!!r&&(7!==t.id&&4!==t.id&&36!==t.id),d=a.ZQ&&36==t.id?"tagembed":t.icon;return l?(0,c.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,c.jsx)("div",{})}):(0,c.jsxs)(i.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:[" ",(0,c.jsx)(o,{network:t,networkClass:e})]})}}},62245:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var i=s(47313),a=s(16390),c=s(17739),o=(s(35179),s(25810),s(46417));const r=i.lazy((()=>Promise.all([s.e(622),s.e(584)]).then(s.bind(s,30584))));class n extends i.PureComponent{constructor(t){super(t),this.contentRef=i.createRef()}componentDidMount(){setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){const{contentClass:t,content:e,ThemeRule:s,font:n,personalization:l,item:d,contentTitle:_,readMore:h,maxLength:u,textAlign:m,maxLines:p,isReadMore:b}=this.props,v={WebkitLineClamp:p,textAlign:s.textAlignment};m||s.textAlignment;let x=20==d.network.id?e:(0,c.Fx)(e);12==d.network.id&&(x=(0,a.ZP)(x));const j="".concat(s.lineTrim?" tb_content_line-".concat(s.lineTrim):""),w="".concat(t," ").concat(b?"":j);return(0,o.jsxs)("div",{className:w,ref:this.contentRef,style:v,children:[_?(0,o.jsx)("div",{className:"tb_bold_txt__",children:(0,a.ZP)(_)}):null,(0,o.jsxs)(i.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(r,{data:d,content:x,Personalization:l})]})]})}}},90905:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});var i=s(47313),a=s(35179),c=s(46417);const o=t=>{let{network:e}=t;const s={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:i,color:o}=s[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,c.jsx)("div",{className:i,style:{color:o},"tb-network":e.id,children:(0,c.jsx)("div",{})})},r=t=>{let{ThemeID:e}=t;const{className:s,color:i}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,c.jsx)("div",{className:s,style:{color:i},"tb-network":e})};class n extends i.PureComponent{render(){const{rating:t,network:e,ThemeID:s}=this.props;return(0,c.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,i)=>s?(0,c.jsx)(r,{ThemeID:s},i):(0,c.jsx)(o,{network:e},i))):null})}}},55790:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var i=s(47313),a=s(17739),c=s(46417);const o=t=>{const{postTime:e,timeClass:s}=t;return(0,c.jsx)("div",{className:s,children:(0,a.Sy)(e)})},r=(0,i.memo)(o)},95136:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>f});s(47313);var i=s(89239),a=s(55790),c=s(25810),o=s(46417);const r=t=>{let{author:e,personalization:s,postTime:r,network:n,ThemeRule:l,font:d,mediaType:_}=t;const h=e.username&&e.username.length>0?"@".concat(e.username):"",u=!(!s.postAuthor||e.isInstaUser),m=!(!s.postAuthor||!s.postTime||e.isInstaUser);return(0,o.jsxs)("div",{className:"tb_wt_author_wrapper",children:[(0,o.jsxs)("div",{className:"tb_wt_author",children:[u?(0,o.jsx)(i.default,{author:e,network:n,authorClass:"tb_wt_author_profile"}):"",(0,o.jsxs)("div",{className:"tb_wt_author_info",children:[u?(0,o.jsx)("div",{className:"tb_wt_authorname",children:e.name}):"",(0,o.jsxs)("div",{className:"tb_wt_post_info",children:[u?(0,o.jsx)("div",{className:"tb_wt_username",children:h}):"",m?(0,o.jsx)("div",{className:"tb_wt_seprator",children:" "}):"",s.postTime?(0,o.jsx)(a.default,{postTime:r,timeClass:"tb_wt_time tb-cTBfont-".concat(l.font_varient),authorColor:l.authorColor}):""]})]})]}),(0,o.jsx)("div",{className:"tb_wt_social_",children:(0,o.jsx)(c.default,{networkClass:"tb_wt_social_ico",network:n,isDefault:1===l.iconType,ThemeRule:l})})]})};var n=s(35179),l=s(81349),d=s(84261),_=s(64442);const h=t=>{let{itemData:e,wallID:s,ownerId:i,wall:a}=t;const c=!(!n.ZQ||3!==e.type&&5!==e.type||a.Personalization.mobilePopup||a.Personalization.postFeatured),r=(3===e.type||5===e.type)&&28!==e.network.id&&1==a.ThemeRule.autoPlay,h=!!n.ZQ&&(!!a.ThemeRule.aspectImageRatio&&a.ThemeRule.aspectImageRatio);return(0,o.jsxs)("div",{className:"tb_wt_media_wrap",children:[c?null:(0,o.jsx)(l.Z,{itemData:e,IconClass:"tb_wt_media_icon",show:!0,isCenter:n.ZQ}),r||c?(0,o.jsx)(_.Z,{VideoClass:"tb_wt_video",data:e,wallID:s,themeID:a.Personalization.widgetTheme,ownerId:i,size:h,isCover:!0,controls:!0,autoPlay:!1,muted:!0}):(0,o.jsx)(d.default,{ImageClass:"tb_wt_image",data:e,wallID:s,themeID:a.Personalization.widgetTheme,ownerId:i,size:h,ThemeRule:a.ThemeRule})]})};var u=s(62245),m=s(7138),p=s(90905);const b=t=>{let{share:e,shareClass:s}=t;const i=(t,e)=>{t.stopPropagation(),e()};return(0,o.jsx)("div",{className:s,children:(0,o.jsxs)("div",{className:"tb_wt_share_wrapper",children:[e.facebook&&(0,o.jsx)("div",{className:"tb_wt_share_list",children:(0,o.jsx)("div",{onClick:t=>i(t,(()=>window.open(e.facebook,"_blank"))),className:"tb_wt_share_icon tb__icon tb-facebook tb_wt_cursor_pointer",title:"facebook",rel:"noopener noreferrer nofollow"})}),e.twitter&&(0,o.jsx)("div",{className:"tb_wt_share_list",children:(0,o.jsx)("div",{onClick:t=>i(t,(()=>window.open(e.twitter,"_blank"))),className:"tb_wt_share_icon tb__icon tb-twitter tb_wt_cursor_pointer",title:"twitter",rel:"noopener noreferrer nofollow"})}),e.linkedin&&(0,o.jsx)("div",{className:"tb_wt_share_list",children:(0,o.jsx)("div",{onClick:t=>i(t,(()=>window.open(e.linkedin,"_blank"))),className:"tb_wt_share_icon tb__icon tb-linkedin tb_wt_cursor_pointer",title:"linkedin",rel:"noopener noreferrer nofollow"})})]})})};var v=s(17739);const x=(t,e,s)=>1===t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,v.ok)(e)):s,j=(t,e,s)=>1===t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,v.ok)(e)):s,w=t=>{let{itemData:e,ThemeRule:s}=t;const i=e.network.id,a=3===i||10===i?"like":"heart";return(0,o.jsx)(o.Fragment,{children:12!==i&&15!==i&&20!==i&&21!==i&&29!==i?(0,o.jsxs)("div",{className:"tb_wt_social_action__",children:[(0,o.jsx)("div",{className:"tb_wt_social_action__list",children:(0,o.jsxs)("a",{href:x(i,e.postId,e.link),target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:[(0,o.jsx)("div",{className:"tb_wt_social_action_ico__ tb__icon tb-".concat(a),children:" "}),e.like_count>0?(0,o.jsx)("div",{className:"tb_wt_social_action_counts__",children:e.like_count}):""]})}),(0,o.jsx)("div",{className:"tb_wt_social_action__list",children:(0,o.jsxs)("a",{href:j(i,e.postId,e.link),target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:[(0,o.jsx)("div",{className:"tb_wt_social_action_ico__ tb__icon tb-comment",children:" "}),e.like_count>0||e.comment_count>0?(0,o.jsx)("div",{className:"tb_wt_social_action_counts__",children:n.ZQ?e.comment_count:e.like_count}):""]})}),1===i?(0,o.jsx)("div",{className:"tb_wt_social_action__list",children:(0,o.jsx)("a",{href:"https://twitter.com/intent/retweet?tweet_id=".concat((0,v.ok)(e.postId)),target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:(0,o.jsx)("div",{className:"tb_wt_social_action_ico__ tb__icon tb-retweet",children:" "})})}):""]}):""})},g=n.ZQ?null:200,N=t=>{let{itemData:e,personalization:s,ThemeRule:i,wallID:a,clickToShowPopUp:c,itemIndex:l,ownerId:d,onClickToCTA:_,wall:x}=t;const j=!!(e.ugc_products&&e.ugc_products.length>0),N=!(!j||0!==e.hotspot),f=!(!e.hotspot||!j),k=!(n.ZQ&&(0,v.mD)(53)||(0,v.mD)(57)||2!==e.type&&3!==e.type&&4!==e.type&&5!==e.type),y=e.rating>0,C=e.rating>0?"tb_wt_rating_content":"tb_wt_content",I=1===e.type&&s.textDecorate?"tb_wt_text_decoration tb_wt_text_post":"",T=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),S=s.trimcontent?(0,v.Sv)(e.content,g):e.content;return(0,o.jsx)("div",{id:"tb-wt-post-".concat(e.id),className:"tb_wt_post_wrapper","tb-network":e.network.id,"tb-product":N?1:f?2:0,children:(0,o.jsxs)("div",{className:"tb_wt_post_in",onClick:c(l,e),children:[(0,o.jsx)(r,{ownerId:d,postTime:e.createdAt,author:e.author,network:e.network,font:i,personalization:s,ThemeRule:i,mediaType:k}),(0,o.jsxs)("div",{className:"tb_wt_post_media_wrapp",children:[k?(0,o.jsx)(h,{itemData:e,wallID:a,ownerId:d,wall:x},"img".concat(l,"_").concat(e.id)):"",y?(0,o.jsxs)("div",{className:"tb_wt_rating__",children:[(0,o.jsx)(p.Z,{rating:e.rating,network:e.network})," "]}):""]}),(0,o.jsxs)("div",{className:"tb_wt_contant_wrapper",children:[T?(0,o.jsxs)("div",{className:"tb_wt_post_cta",children:[(0,o.jsx)(m.Z,{ctaClass:"tb_wt_post_cta_btn",cta:e.cta,item:e,onClickToCTA:_})," "]}):"",i.hideContent&&1!=e.type?"":(0,o.jsx)(u.default,{contentClass:"".concat(C," ").concat(I),item:e,content:S,font:i,ThemeRule:i,personalization:s,contentTitle:e.contentTitle}),(0,o.jsxs)("div",{className:"tb_wt_post_share_container",style:e&&29==e.network.id||!i.socialAction?{justifyContent:"flex-end"}:{},children:[i.socialAction?(0,o.jsx)(w,{itemData:e,ThemeRule:i}):"",e.share.status?(0,o.jsx)(b,{share:e.share,shareClass:"tb_mc_share_container"}):""]})]})]})})},f=t=>{let{postData:e,completeDataObject:s,adjustWidth:i,wall:a,clickToShowPopUp:c,onClickToCTA:r}=t;return(0,o.jsx)("div",{className:"tb_wt_post_container",children:e&&e.length>0&&e.map(((t,e)=>{const n=s[t];return(0,o.jsx)(N,{ownerId:a.Wall.owner,itemData:n,itemIndex:e,adjustWidth:i,personalization:a.Personalization,ThemeRule:a.ThemeRule,wallID:a.Wall.id,clickToShowPopUp:c,onClickToCTA:r,wall:a},"wdt_crd_".concat(e,"_").concat(t.id))}))})}},2406:(t,e,s)=>{"use strict";e.Ad=void 0;var i=s(84228);var a=s(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return a.getImageSize}});var c=s(22537)},84228:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,s)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const i=s(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((s,a)=>{if("undefined"===typeof window)return a(i.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return a(i.ErrorMessage.URL_IS_NOT_DEFINED);let c=null;const o=new Image;o.addEventListener("load",(()=>{c&&window.clearTimeout(c),s({width:o.naturalWidth,height:o.naturalHeight})})),o.addEventListener("error",(t=>{c&&window.clearTimeout(c),a("".concat(t.type,": ").concat(t.message))})),o.src=t,e.timeout&&(c=window.setTimeout((()=>a(i.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,s){"use strict";var i=this&&this.__awaiter||function(t,e,s,i){return new(s||(s=Promise))((function(a,c){function o(t){try{n(i.next(t))}catch(e){c(e)}}function r(t){try{n(i.throw(t))}catch(e){c(e)}}function n(t){var e;t.done?a(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(o,r)}n((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const a=s(47313),c=s(65786);e.useImageSize=(t,e)=>{const[s,o]=(0,a.useState)(null),[r,n]=(0,a.useState)(!1),[l,d]=(0,a.useState)(null);return(0,a.useEffect)((()=>{i(void 0,void 0,void 0,(function*(){n(!0),o(null);try{const{width:s,height:i}=yield(0,c.getImageSize)(t,e);o({width:s,height:i})}catch(l){d(l.toString())}finally{n(!1)}}))}),[t,e]),[s,{loading:r,error:l}]}},50247:()=>{}}]);