(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7134,1088,7033,7234,7668],{97234:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});var s=i(72791),a=i(2703),o=i(14496),c=i(80184);class n extends s.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:i}=this.props;return(0,c.jsx)("div",{className:e,style:{overflow:4==i.id?"visible":""},children:this.state.isAuthorImagevalid?(0,c.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,a.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,c.jsx)(o.Z,{authorClass:e,username:t.name,network:i,color:null===i.id?"#000":i.color})},Math.random())}}},14496:(t,e,i)=>{"use strict";i.d(e,{Z:()=>a});i(72791);var s=i(80184);const a=t=>{let{username:e,network:i,authorClass:a}=t;return(0,s.jsx)("img",{className:"".concat(a,"__"),src:"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===i.id?"#000":i.color).replace("#",""),"&color=fff&length=1&rounded=true"),alt:e,width:44,height:44})}},16243:(t,e,i)=>{"use strict";i.d(e,{Z:()=>c});var s=i(72791),a=i(80184);class o extends s.PureComponent{render(){const{cta:t,ctaClass:e,postCta:i,onClickToCTA:s,item:o}=this.props,c=!(!i||1!==i.status);return(0,a.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),s(o),window.open("".concat(c?i.url:t.url),"_blank")},children:[" ",c?i.text:t.text]})}}const c=o},87641:(t,e,i)=>{"use strict";i.d(e,{Z:()=>h});var s=i(72791),a=i(77581),o=i(89057),c=i(18947),n=i(2703),r=i(80184);const l=(0,o.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),d=t=>'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n  <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n  ").concat(t.product_discount>0&&t.product_price>t.product_discount?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_discount,"</div>"):"","\n  ").concat(t.product_price>0?'<div class="tb_p_tooltip_price">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"","\n  </a>");class _ extends s.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:i}=this.state,s=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return s.status?(0,r.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const a=(0,n.i1)();return(0,r.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(a),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(i==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,r.jsx)("div",{className:"tb_hotspot__ ".concat(0==s.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,r.jsx)(l,{children:(0,r.jsx)(c.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(a),clickable:!0,html:d(t.UgcProduct)})})]},e)}))}):null}}const h=(0,a.$j)((t=>({appData:t.appData})))(_)},40115:(t,e,i)=>{"use strict";i.d(e,{Z:()=>d});var s=i(72791),a=i(11225),o=i(87641),c=i(80413),n=i(2703),r=i(70188),l=i(80184);class d extends s.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props,{imgUrl:i}=this.state;if(e&&Object.keys(e).length>0&&[4,2,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:i}=await(0,c.Ad)(e.postFileNew);this.setState({paddingBottom:100*i/t})}catch(s){this.setState({paddingBottom:100})}},this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src})},this.state={loadError:!1,paddingBottom:100,imgUrl:this.props.data.postFileNew}}componentWillMount(){this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}componentDidMount(){this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}render(){const{ImageClass:t,data:e,wallID:i,themeID:s,ownerId:c,hotspot:d}=this.props,{imgUrl:_,paddingBottom:h}=this.state,p={paddingBottom:"".concat(h,"%")},u={backgroundImage:"url(".concat(_,")")},m=!!(e.hotspot&&e.ugc_products.length>0&&d);return(0,l.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:p,children:[m?(0,l.jsx)("div",{className:"tb_blur_bg_",style:u}):null,(0,l.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:{width:m?"":"100%"},children:[m?(0,l.jsx)(o.Z,{product:e.ugc_products}):null,(0,l.jsx)("img",{className:"".concat(t),role:"img",src:_,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":i,"data-owner-id":c,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":s,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(r.do,"/media/images/no-image.svg"),(0,a.ht)(t)},alt:(0,n.P)(_)})]})]})}}},98270:(t,e,i)=>{"use strict";i.d(e,{Z:()=>_});var s=i(72791),a=i(80413),o=i(96710),c=i.n(o),n=i(11225),r=i(46535),l=i(80184);const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class _ extends s.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:i}=await(0,a.Ad)(e.postFileNew);this.setState({paddingBottom:100*i/t})}catch(i){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew}}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}render(){const{VideoClass:t,data:e,wallID:i,isCover:s,controls:a,autoPlay:o,handleVideoEnded:_,muted:h}=this.props,{paddingBottom:p,videoLoaded:u}=this.state,m={paddingBottom:"".concat(p,"%")},b=e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,l.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:m,children:(0,l.jsx)(c(),{className:"".concat(t," video").concat(e.id),url:d(b,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":i,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto"}}},loop:!o,onError:t=>{e.stories&&0!=e.stories||(0,n.ib)(t,e.id)},autoPlay:o,muted:h,volume:o?1:0,playsinline:!0,onReady:t=>{r.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:!!r.ig||o,height:"100%",width:"100%",controls:a||!1,style:{backgroundImage:u?"":"url(".concat(e.postFileNew,")"),backgroundSize:s?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:_||null})})}}},37989:(t,e,i)=>{"use strict";i.d(e,{Z:()=>c});i(72791);var s=i(46535),a=i(41088),o=i(80184);const c=t=>{const{itemData:e,IconClass:i,show:c}=t,n=3===e.type||5===e.type,r=7===e.network.id,l=!!(e.imageList&&e.imageList.length>0),d=1===e.isAudio,_=!!(e.ugc_products&&e.ugc_products.length>0),h=(0,o.jsx)(a.default,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"}),p=(0,o.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:(0,o.jsx)("div",{})}),u=(0,o.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:(0,o.jsx)("div",{})}),m=(0,o.jsx)("div",{className:"tb_video_ico tb__icon tb-video",children:(0,o.jsx)("div",{})}),b=(0,o.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:(0,o.jsx)("div",{})}),v=(0,o.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:(0,o.jsx)("div",{})});return(_||l||n)&&c?(0,o.jsxs)("div",{className:"".concat(i," tb__media_ico_"),children:[_?b:"",l?p:"",n&&!r&&s.ZQ?v:"",n?r?h:d?u:s.ZQ?v:m:""]}):null}},41088:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});var s=i(72791),a=i(46535),o=i(80184);const c=s.memo((t=>{let{network:e,networkClass:i}=t;switch(e.id){case 1:return(0,o.jsx)("div",{className:"".concat(i," tb__icon tb-twitter")});case 2:case 18:return(0,o.jsx)("div",{className:"".concat(i," tb__icon tb-instagram-default"),children:(0,o.jsx)("div",{})});case 3:return(0,o.jsx)("div",{className:"".concat(i," tb__icon tb-facebook"),children:(0,o.jsx)("div",{})});case 4:return(0,o.jsxs)("div",{className:"".concat(i," tb__icon tb-google-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})})]});case 5:return(0,o.jsx)("div",{className:"".concat(i," tb__icon tb-pinterest"),children:(0,o.jsx)("div",{})});case 6:return(0,o.jsxs)("div",{className:"".concat(i," tb__icon tb-flickr-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 7:return(0,o.jsxs)("div",{className:"".concat(i," tb__icon tb-youtube-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 8:return(0,o.jsx)("div",{className:"".concat(i," tb__icon tb-vimeo"),children:(0,o.jsx)("div",{})});case 10:return(0,o.jsx)("div",{className:"".concat(i," tb__icon tb-linkedin"),children:(0,o.jsx)("div",{})});case 11:return(0,o.jsx)("div",{className:"".concat(i," tb__icon tb-tumblr"),children:(0,o.jsx)("div",{})});case 12:return(0,o.jsx)("div",{className:"".concat(i," tb__icon tb-rss"),children:(0,o.jsx)("div",{})});case 15:return(0,o.jsx)("div",{className:"".concat(i," tb__icon tb-workplace"),children:(0,o.jsx)("div",{})});case 19:return(0,o.jsx)("div",{className:"".concat(i," tb__icon tb-yelp"),children:(0,o.jsx)("div",{})});case 20:return(0,o.jsxs)("div",{className:"".concat(i," tb__icon tb-slack-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path8",children:(0,o.jsx)("div",{})})]});case 21:return(0,o.jsx)("div",{className:"".concat(i," tb__icon tb-yammer"),children:(0,o.jsx)("div",{})});case 23:return(0,o.jsx)("div",{className:"".concat(i," tb__icon tb-airbnb"),children:(0,o.jsx)("div",{})});case 25:return(0,o.jsx)("div",{className:"".concat(i," tb__icon tb-soundcloud"),children:(0,o.jsx)("div",{})});case 26:return(0,o.jsxs)("div",{className:"".concat(i," tb__icon tb-giphy-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})})]});case 28:return a.ZQ?(0,o.jsxs)("div",{className:"".concat(i," tb__icon tb-capterra-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1"}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2"}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3"}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4"})]}):(0,o.jsxs)("div",{className:"".concat(i," tb__icon tb-tiktok-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})})]});case 29:return a.ZQ?(0,o.jsx)("div",{className:"".concat(i," tb__icon tb-etsy"),children:(0,o.jsx)("div",{})}):(0,o.jsx)("div",{className:"".concat(i," tb__icon tb-onsite-upload-default"),children:(0,o.jsx)("div",{})});case 30:case 32:return(0,o.jsx)("div",{className:"".concat(i," tb__icon tb-vk"),children:(0,o.jsx)("div",{})});case 31:return(0,o.jsxs)("div",{className:"".concat(i," tb__icon tb-tiktok-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})})]});case 33:return(0,o.jsxs)("div",{className:"".concat(i," tb__icon tb-trustpilot-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 34:return(0,o.jsxs)("div",{className:"".concat(i," tb__icon tb-amazon-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 35:return(0,o.jsx)("div",{className:"".concat(i," tb__icon tb-tripadvisor"),children:(0,o.jsx)("div",{})});case 36:return(0,o.jsxs)("div",{className:"".concat(i," tb__icon tb-tagembed-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})})]});case 37:return(0,o.jsxs)("div",{className:"".concat(i," tb__icon tb-aliexpress-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})})]});default:return""}}));class n extends s.PureComponent{render(){return(0,o.jsx)(c,{...this.props})}}},70757:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>r});var s=i(72791),a=i(46535),o=i(2703),c=i(80184);const n=s.lazy((()=>i.e(1088).then(i.bind(i,41088))));class r extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:i,isDefault:r,Personalization:l}=this.props,d=!!r&&(7!==t.id&&4!==t.id&&36!==t.id),_=a.ZQ&&36==t.id?"tagembed":t.icon;var h=[61,16,53,4,50,55].includes(parseInt(null===l||void 0===l?void 0:l.widgetTheme))?1==i.postHover?(0,o.uu)(i.iconColor,"#000000"):(0,o.uu)(i.iconColor,"#ffffff"):i.iconColor;const p=(0,o.mD)(59)?null:a.ig?a.Jc?(0,o.uu)(i.iconColor,i.cardColor):h:i.iconColor;return d?(0,c.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(_.replace(/fa-/g,"")),style:{color:p},children:(0,c.jsx)("div",{})}):(0,c.jsxs)(s.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:[" ",(0,c.jsx)(n,{network:t,networkClass:e})]})}}},23450:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>r});var s=i(72791),a=i(34867),o=i(2703),c=(i(46535),i(70757),i(80184));const n=s.lazy((()=>Promise.all([i.e(6332),i.e(6476)]).then(i.bind(i,46476))));class r extends s.PureComponent{constructor(t){super(t),this.toggleExpanded=t=>{this.setState({expanded:!this.state.expanded}),t.stopPropagation()},this.state={expanded:!1}}render(){const{contentClass:t,content:e,ThemeRule:i,font:r,personalization:l,item:d,contentTitle:_,readMore:h,maxLength:p,textAlign:u,isNetwork:m}=this.props,{expanded:b}=this.state,v={textAlign:u||i.textAlignment};let x=20==d.network.id?e:(0,o.Fx)(e);12==d.network.id&&(x=(0,a.ZP)(x));const j=h?b?x:x.slice(0,p):x,g="".concat(t).concat(i.lineTrim?" tb_content_line-".concat(i.lineTrim):"").concat(i.font_varient?" tb-cTBfont-".concat(i.font_varient):"");return(0,c.jsxs)("div",{className:g,style:v,children:[_?(0,c.jsx)("div",{className:"tb_bold_txt__",children:(0,a.ZP)(_)}):null,(0,c.jsxs)(s.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:[" ",(0,c.jsx)(n,{data:d,content:j,Personalization:l})]}),h&&x.length>p&&(0,c.jsx)("div",{className:"tb_read_more_",onClick:this.toggleExpanded,children:b?"...Read Less...":"...Read More..."})]})}}},19036:(t,e,i)=>{"use strict";i.d(e,{Z:()=>r});var s=i(72791),a=i(46535),o=i(80184);const c=t=>{let{network:e}=t;const i={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:s,color:c}=i[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,o.jsx)("div",{className:s,style:{color:c},"tb-network":e.id,children:(0,o.jsx)("div",{})})},n=t=>{let{ThemeID:e}=t;const{className:i,color:s}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,o.jsx)("div",{className:i,style:{color:s},"tb-network":e})};class r extends s.PureComponent{render(){const{rating:t,network:e,ThemeID:i}=this.props;return(0,o.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,s)=>i?(0,o.jsx)(n,{ThemeID:i},s):(0,o.jsx)(c,{network:e},s))):null})}}},20169:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});var s=i(72791),a=i(11225),o=i(46535),c=i(80184);class n extends s.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:i,wallID:s,ownerId:c}=this.props;e.stopPropagation(),o.ZQ||(0,a.S5)({type:2,action:2,wall:s,feed:i.feedId,post:i.referenceId?i.referenceId:i.id,owner:c}),(0,a.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,c.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,c.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(o.ZQ?"tb-share-fill":"tb-share"),children:(0,c.jsx)("div",{})}),(0,c.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,c.jsx)("div",{className:"tb_share_icon_list",children:(0,c.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,c.jsx)("div",{})})}):"",t.twitter?(0,c.jsx)("div",{className:"tb_share_icon_list",children:(0,c.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,c.jsx)("div",{})})}):"",t.linkedin?(0,c.jsx)("div",{className:"tb_share_icon_list",children:(0,c.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,c.jsx)("div",{})})}):""]})]})}}},31152:(t,e,i)=>{"use strict";i.d(e,{Z:()=>l});var s=i(72791),a=(i(46535),i(2703)),o=i(80184);const c=(t,e,i)=>1==t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,a.ok)(e)):i,n=(t,e,i)=>1==t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,a.ok)(e)):i,r=t=>{let{arialbl:e,hrefClick:i,Icon:s,count:c}=t;return(0,o.jsx)("div",{className:"tb_social_action__list",children:(0,o.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(i,"_blank")},className:"tb_social_action__ico_wrap",children:[(0,o.jsx)("div",{className:"tb_social_action_ico__ tb__icon tb-".concat(s),children:" "}),c>0?(0,o.jsx)("div",{className:"tb_social_action_counts__",children:(0,a.sy)(c)}):""]})})};class l extends s.PureComponent{render(){const{itemData:t,ThemeRule:e,actionClass:i,ThemeID:s}=this.props,l={color:3===s?1===e.iconType?e.iconColor:t.network.color:e.fontColor},d=t.network.id,_=3===d||10===d||7===d?"like":"heart",h=!![1,2,3,7,8,9,10,18].includes(d),p=![29,19].includes(d),u=t.network.name?t.network.name:"";return(0,o.jsx)(o.Fragment,{children:29!==d&&26!==d&&23!==d&&6!==d&&5!==d&&11!==d&&12!==d&&15!==d&&20!==d&&21!==d?(0,o.jsx)("div",{className:i,children:(0,o.jsxs)("div",{className:"tb_social_action__",children:[h?(0,o.jsx)(r,{arialbl:u,hrefClick:c(d,t.postId,t.link),Icon:_,iconColorStyle:l,count:t.like_count}):null,p?(0,o.jsx)(r,{arialbl:u,hrefClick:n(d,t.postId,t.link),Icon:"comment",iconColorStyle:l,count:t.comment_count}):null,1===d?(0,o.jsx)(r,{arialbl:u,hrefClick:"https://twitter.com/intent/retweet?tweet_id=".concat((0,a.ok)(t.postId)),Icon:"retweet",iconColorStyle:l,count:t.comment_count}):null,(0,o.jsx)(r,{arialbl:u,hrefClick:t.link,Icon:"eye",iconColorStyle:l,count:0})]})}):""})}}},27668:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});var s=i(72791),a=i(2703),o=i(80184);const c=t=>{const{postTime:e,timeClass:i}=t;return(0,o.jsx)("div",{className:i,children:(0,a.Sy)(e)})},n=(0,s.memo)(c)},1419:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>I});var s=i(72791),a=i(60173),o=i(77581),c=i(48282),n=i(98270),r=i(46535),l=i(40115),d=i(37989),_=i(80184);const h=t=>{let{itemData:e,wallID:i,ownerId:s,wall:a,isCover:o,ThemeRule:c}=t;const h=(3===e.type||5===e.type)&&28!==e.network.id&&1==a.ThemeRule.autoPlay,p=r.ZQ&&c.aspectImageRatio?c.aspectImageRatio:100,u=!(!r.ig||e.hotspot);return(0,_.jsxs)("div",{className:"tb_hc_media_wrap",children:[(0,_.jsx)(d.Z,{itemData:e,IconClass:"tb_hc_media_icon",show:u}),h?(0,_.jsx)(n.Z,{VideoClass:"tb_hc_video",data:e,wallID:i,themeID:a.Personalization.widgetTheme,wall:a,size:p,isCover:o,muted:!0,autoPlay:h,handleVideoEnded:()=>{}}):(0,_.jsx)(l.Z,{ImageClass:"tb_hc_image",data:e,wallID:i,themeID:a.Personalization.widgetTheme,ownerId:s,size:p,hotspot:!0})]})};var p=i(23450),u=i(20169),m=i(16243),b=i(19036),v=i(31152),x=i(27668),j=i(70757),g=i(97234);const w=t=>{let{author:e,personalization:i,postTime:a,network:o,ThemeRule:c,font:n,rating:l,ownerId:d,instaHash:h}=t;const p=e.username&&e.username.length>0?"@".concat(e.username):"",u=!(!i.postAuthor||e.isInstaUser),m=!(!i.postAuthor||!i.postTime||e.isInstaUser),b=null!==o.id&&""!==o.id;return(0,_.jsxs)("div",{className:"tb_hc_author_wrapper",children:[u?(0,_.jsx)(s.Suspense,{fallback:(0,_.jsx)(_.Fragment,{}),children:(0,_.jsx)(g.default,{network:o,author:e,authorClass:"tb_hc_author_profile"})}):"",(0,_.jsxs)("div",{className:"tb_hc_author_info",children:[u&&(r.ZQ||r.ig)?(0,_.jsx)("div",{className:"tb_hc_authorname tb-cTBfont-".concat(c.font_varient),children:e.name}):"",(0,_.jsxs)("div",{className:"tb_hc_post_info",children:[u?(0,_.jsx)("div",{className:"tb_hc_username",children:p}):"",m?(0,_.jsx)("div",{className:"tb_hc_seprator",children:" "}):"",i.postTime?(0,_.jsx)(s.Suspense,{fallback:(0,_.jsx)(_.Fragment,{}),children:(0,_.jsx)(x.default,{postTime:a,timeClass:"tb_hc_time tb-cTBfont-".concat(c.font_varient),authorColor:c.authorColor})}):""]})]}),b?(0,_.jsx)("div",{className:"tb_hc_social_",children:(0,_.jsx)(s.Suspense,{fallback:(0,_.jsx)(_.Fragment,{}),children:(0,_.jsx)(j.default,{networkClass:"tb_hc_social_ico",network:o,isDefault:1===c.iconType,ThemeRule:c})})}):null]})};var N=i(2703);const f=r.ZQ?null:140;class k extends s.PureComponent{constructor(t){super(t),this.postTrack=s.createRef()}componentDidMount(){r.nX&&(0,N.YN)(this.postTrack)}render(){const{itemData:t,personalization:e,ThemeRule:i,clickToShowPopUp:a,itemIndex:o,wallID:c,ownerId:n,onClickToCTA:l,wall:d}=this.props,x=2===t.type||3===t.type||4===t.type||5===t.type,j=!!(t.rating&&t.rating>0),g=t.rating>0?"tb_hc_rating_content":"tb_hc_content",k=1===t.type?"tb_hc_text_post":"",y=1===t.type&&e.textDecorate?"tb_hc_text_decoration":"",C=!!t.cta.status,I=e.trimcontent?(0,N.Sv)(t.content,f):t.content;return(0,_.jsx)("div",{"item-id":t.id,id:"tb-hc-post-".concat(t.id),className:"tb_hc_post_wrapper",ref:this.postTrack,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,style:{padding:e.padding/2},children:(0,_.jsxs)("div",{className:"tb_hc_post_in",onClick:a(o,t),children:[(0,_.jsxs)("div",{className:"tb_hc_post_media_wrapp",children:[t.share.status?(0,_.jsx)(u.Z,{share:t.share,shareClass:"tb_hc_share_container",item:t,wallID:c,ownerId:n}):"",x?(0,_.jsx)(h,{itemData:t,wallID:c,wall:d,ownerId:n,size:!!e.trimcontent&&100,isCover:!!e.trimcontent,ThemeRule:i}):null]}),(0,_.jsxs)("div",{className:"tb_hc_contant_wrapper ".concat(k),children:[(0,_.jsx)(s.Suspense,{fallback:(0,_.jsx)(_.Fragment,{}),children:(0,_.jsx)(w,{ownerId:n,postTime:t.createdAt,author:t.author,network:t.network,font:i,personalization:e,ThemeRule:i,rating:t.rating,instaHash:t.instaHash})}),C?(0,_.jsxs)("div",{className:"tb_hc_post_cta",onClick:t=>{t.stopPropagation()},children:[(0,_.jsx)(m.Z,{ctaClass:"tb_hc_post_cta_btn",cta:e.cta,postCta:t.cta,item:t,onClickToCTA:l})," "]}):"",j?(0,_.jsx)("div",{className:"tb_hc_rating__",children:(0,_.jsx)(b.Z,{rating:t.rating,network:t.network})}):null,r.ig&&i.hideContent||!r.ig&&!i.hideContent||1==t.type?(0,_.jsx)("div",{className:"tb_hc_content_wrapper__",children:(0,_.jsx)(p.default,{contentClass:"".concat(g," ").concat(y),item:t,content:I,font:i,ThemeRule:i,personalization:e,contentTitle:t.contentTitle},t.id)}):null]}),r.ig?i.socialAction?(0,_.jsx)(v.Z,{itemData:t,ThemeRule:i,ThemeID:e.widgetTheme,actionClass:"tb_hc_social_action__"}):null:""]})})}}var y=i(11225);i(59169);class C extends s.Component{constructor(t){super(t),this.state={windowWidth:document.getElementById(N.u$)&&document.getElementById(N.u$).clientWidth?document.getElementById(N.u$).clientWidth:window.innerWidth,sliderHeight:300},this.onScreenLoad=()=>{const{renderId:t}=this.props.renderId;this.setState({windowWidth:t?document.getElementById(t).clientWidth:document.getElementById(N.u$)&&document.getElementById(N.u$).clientWidth?document.getElementById(N.u$).clientWidth:window.innerWidth})},this.requestData=()=>{const{appendData:t,wall:e,preRender:i,hasMoreData:s,getDataNextSteps:a}=this.props;s&&a(e.Wall.id,Math.floor(Date.now()/1e3),e.ThemeRule.numberOfPosts,t.networkID,t.after,i,t.heightEvent)},this.reScrolled=()=>{setTimeout((()=>{let t=document.querySelector(".splide__list"),e=document.querySelector(".splide__slide").offsetWidth;const i=document.querySelectorAll(".splide__slide.is-visible").length,s=document.querySelector(".splide__slide.is-active.is-visible").getAttribute("aria-label").substring(0,2),a=Number(s)+(i-1)+i;a>0?(t.style.transition="0s ease",t.style.transform="translateX(-".concat(a*e,"px)")):t.style.transform="translateX(0px)"}),200)},this.autoScrollSlider=(t,e,i,s)=>{const{wall:a}=this.props;if(1==a.Personalization.autoScrollStatus){const e=r.ZQ?t._o.perPage+t.index:t.index;t.length-e===(r.ZQ?1:t._o.perPage)&&this.requestData()}},this.inputRefs={}}componentWillMount(){this.onScreenLoad()}componentDidMount(){var t=document.querySelector(".tb_hc_post_slider"),e=t?t.offsetHeight:this.state.height;setTimeout((()=>{this.setState({sliderHeight:e});document.querySelectorAll(".splide__slide").forEach((t=>{t.removeAttribute("role")}))}),100);const{postData:i}=this.props;if(i&&1==i.length){let a=document.querySelector(".tb_hc_arrow_left__"),o=document.querySelector(".tb_hc_arrow_right__");function c(){setTimeout((()=>{let t=document.querySelector(".splide__list");null!=t&&(t.style.transform="translateX(0)")}),100)}a&&o&&(document.querySelector(".tb_hc_arrow_left__").style="display:none",document.querySelector(".tb_hc_arrow_right__").style="display:none"),document.body.addEventListener("click",(function(){c()})),c(),window.addEventListener("resize",c)}else window.addEventListener("resize",(()=>{this.onScreenLoad()}));let s=document.querySelector("#kt_aside_toggle");null!=s&&s.addEventListener("click",this.reScrolled)}componentDidUpdate(){Object.values(this.inputRefs)[0];const{postData:t,completeDataObject:e,onClickPopUpSlider:i,parentID:s}=this.props;var a=document.querySelector(".tb_hc_post_slider"),o=a?a.offsetHeight:this.state.height;setTimeout((()=>{this.setState({sliderHeight:o+15})}),100)}render(){var t;const{postData:e,completeDataObject:i,wall:s,clickToShowPopUp:o,hasMoreData:n,onClickToCTA:l,parentID:d,keyRender:h}=this.props,{sliderHeight:p}=this.state,u=d,{windowWidth:m}=this.state,b=s.ThemeRule.numberOfCoumn,v=s.ThemeRule.mobileColumn,x=s.ThemeRule.slidePost&&!r.ig,j=s.ThemeRule.slideDuration,g=s.Personalization.autoScrollStatus,w=1===s.Personalization.trimcontent,f=r.ZQ?(0,N.b)():!!(m<768||a.tq),y=e&&e.length?f?1:e.length>3?3:e.length:3,C=e&&e.length?f?1:e.length>4?4:e.length:4;f||1===g||e.length;const I=r.ZQ&&void 0!==(null===(t=s.Personalization)||void 0===t?void 0:t.clonePost)&&0===s.Personalization.clonePost?{clones:0}:{},S=1!=g?!(Object.keys(I).length>0)&&"slide":"slide",T=y!=e.length&&C!=e.length||0!=Object.keys(I).length?e:Array(2).fill(e).flat(),D={...I,type:1!==g&&S,role:"article",label:"social widget",rewind:!0,speed:1e3,loop:1!==g,interval:1===x?1e3*j:5e3,perPage:b>0?b:f?1:e.length>5?5:e.length,gap:0,perMove:!!r.ZQ&&1,autoplay:1===x,padding:"0",pagination:!1,arrows:!!f||e.length>=(b>0?b:C),fixedHeight:w&&!r.ZQ,breakpoints:{560:{perPage:v>0?v:1,perMove:v>0?v:1,arrows:e.length>=(v>0?v:1)},767:{perPage:b>0?b-3<1?b:b-3:y,arrows:e.length>=(b>0?b-3<1?b:b-3:y)},991:{perPage:b>0?b-4<1?b:b-4:y,arrows:e.length>=(b>0?b-4<1?b:b-4:y)},1200:{perPage:b>0?b-1==0?b:b-1:y,arrows:e.length>=(b>0?b-1==0?b:b-1:y)},1600:{perPage:b>0?b:C,arrows:e.length>=(b>0?b:C)}}};return(0,_.jsx)(_.Fragment,{children:""!=d?(0,_.jsx)("div",{className:"tb_hc_post_container",ref:this.sliderHeight,style:{minHeight:p},children:(0,_.jsxs)(c.tv,{hasTrack:!1,className:"tb_hc_post_slider ".concat(w&&!r.ZQ?"tb_hc_fixed_height":""," ").concat(r.Jc?"is-overflow is-initialized":""),options:D,ref:t=>this.inputRefs[u]=t,tag:"section",onMove:this.autoScrollSlider,children:[(0,_.jsx)(c.Gj,{children:T&&T.length>0&&T.map(((t,e)=>{const a=i[t];return(0,_.jsx)(c.jw,{p_id:d,className:"tb_".concat(a.id),children:(0,_.jsx)(k,{ownerId:s.Wall.owner,itemData:a,itemIndex:e,personalization:s.Personalization,ThemeRule:s.ThemeRule,clickToShowPopUp:o,wallID:s.Wall.id,onClickToCTA:l,wall:s})},e)}))}),(0,_.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_hc_arrow_wrapper_",role:"navigation","aria-label":"Slider Navigation Wrapper",children:[(0,_.jsx)("div",{role:"navigation",className:"tb_hc_arrow splide__arrow splide__arrow--prev tb_hc_arrow_left__ tb__icon tb-arrow-left-alt","aria-labelledby":"Navigation Previous Slide",children:" "}),(0,_.jsx)("div",{role:"navigation",className:"tb_hc_arrow splide__arrow splide__arrow--next tb_hc_arrow_right__ tb__icon tb-arrow-right-alt","aria-labelledby":"Navigation Next Slide",onClick:r.ig?this.requestData:"",children:" "})]})]},h)}):null})}}const I=(0,s.memo)((0,o.$j)((t=>({})),(t=>({getDataNextSteps:(e,i,s,a,o,c,n,r)=>t((0,y.Sx)(e,i,s,a,o,c,n,r))})))(C))},80413:(t,e,i)=>{"use strict";e.Ad=void 0;var s=i(7782);var a=i(94590);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return a.getImageSize}});var o=i(52047)},7782:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},94590:(t,e,i)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const s=i(7782);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((i,a)=>{if("undefined"===typeof window)return a(s.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return a(s.ErrorMessage.URL_IS_NOT_DEFINED);let o=null;const c=new Image;c.addEventListener("load",(()=>{o&&window.clearTimeout(o),i({width:c.naturalWidth,height:c.naturalHeight})})),c.addEventListener("error",(t=>{o&&window.clearTimeout(o),a("".concat(t.type,": ").concat(t.message))})),c.src=t,e.timeout&&(o=window.setTimeout((()=>a(s.ErrorMessage.TIMEOUT)),e.timeout))}))}},52047:function(t,e,i){"use strict";var s=this&&this.__awaiter||function(t,e,i,s){return new(i||(i=Promise))((function(a,o){function c(t){try{r(s.next(t))}catch(e){o(e)}}function n(t){try{r(s.throw(t))}catch(e){o(e)}}function r(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(c,n)}r((s=s.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const a=i(72791),o=i(94590);e.useImageSize=(t,e)=>{const[i,c]=(0,a.useState)(null),[n,r]=(0,a.useState)(!1),[l,d]=(0,a.useState)(null);return(0,a.useEffect)((()=>{s(void 0,void 0,void 0,(function*(){r(!0),c(null);try{const{width:i,height:s}=yield(0,o.getImageSize)(t,e);c({width:i,height:s})}catch(l){d(l.toString())}finally{r(!1)}}))}),[t,e]),[i,{loading:n,error:l}]}},59169:()=>{},50247:()=>{}}]);
//# sourceMappingURL=7134.5b9677e6.chunk.js.map