(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3541,4261,8342,9239,5790],{89239:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var o=s(47313),i=s(17739),a=s(98935),r=s(46417);class n extends o.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:s}=this.props;return(0,r.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,r.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,i.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,r.jsx)(a.Z,{authorClass:e,username:t.name,network:s,color:null===s.id?"#000":s.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});var o=s(47313),i=s(46417);const a=t=>{let{username:e,network:s,authorClass:o,errorPic:a}=t;const r="#ffffff"==s.color?"#000":s.color;return(0,i.jsx)("img",{className:"".concat(o,"__"),src:a||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":r).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},r=(0,o.memo)(a)},98511:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});var o=s(98501),i=s(17739),a=s(46417);const r=t=>{let{size:e}=t;const s=t=>!(!(0,i.mD)(t)||1!=e);return(0,a.jsx)("div",{ref:t=>{t&&(t.style.setProperty("opacity","0.8","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("width","".concat(2==e?"110px":"75px"),"important"),t.style.setProperty("height","".concat(2==e?"25px":"18px"),"important"),t.style.setProperty("max-width","".concat(2==e?"110px":"75px"),"important"),t.style.setProperty("max-height","".concat(2==e?"25px":"18px"),"important"),t.style.setProperty("top","14px","important"),t.style.setProperty("left","".concat(s(62)||s(61)?"auto":"14px"),"important"),t.style.setProperty("right","".concat(s(55)||s(62)||s(61)?"14px":"auto"),"important"),t.style.setProperty("margin","0 auto","important"),t.style.setProperty("position","absolute","important"),t.style.setProperty("visibility","visible","important"),t.style.setProperty("z-index","3","important"),t.style.setProperty("background-image","url(".concat(o.do,"/media/images/tagshop-light.svg)"),"important"),t.style.setProperty("background-repeat","no-repeat","important"),t.style.setProperty("background-size","contain","important"),t.style.setProperty("clip-path","initial","important"))},children:(0,a.jsx)("div",{children:" "})})}},7138:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});var o=s(47313),i=s(46417);class a extends o.PureComponent{render(){const{cta:t,ctaClass:e,postCta:s,onClickToCTA:o,item:a}=this.props,r=!(!s||1!==s.status);return(0,i.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),o(a),window.open("".concat(r?s.url:t.url),"_blank")},children:[" ",r?s.text:t.text]})}}const r=a},97915:(t,e,s)=>{"use strict";s.d(e,{Z:()=>h});var o=s(47313),i=s(43411),a=s(83773),r=s(6119),n=s(17739),c=s(46417);const l=(0,a.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),d=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,s=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",o=t.product_price>0||t.product_discount>0?"".concat(s,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(o,"\n        </a>")};class p extends o.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:s}=this.state,o=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return o.status?(0,c.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const i=(0,n.i1)();return(0,c.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(i),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(s==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,c.jsx)("div",{className:"tb_hotspot__ ".concat(0==o.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,c.jsx)(l,{children:(0,c.jsx)(r.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(i),clickable:!0,html:d(t.UgcProduct)})})]},e)}))}):null}}const h=(0,i.$j)((t=>({appData:t.appData})))(p)},84261:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>p});var o=s(47313),i=s(43635),a=s(97915),r=s(2406),n=s(17739),c=s(98501),l=(s(35179),s(98511)),d=s(46417);class p extends o.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const s=document.querySelector(".track".concat(this.props.data.id));s&&(s.setAttribute("data-height",e),s.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:s}=await(0,r.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t,size:{height:parseInt(s),width:parseInt(t)}})}catch(s){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(s){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,size:{height:100,width:100}}}componentWillMount(){const{data:t,hotspot:e,size:s}=this.props;t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:s})}componentDidMount(){const{data:t,hotspot:e,size:s}=this.props;!s||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:s})}render(){const{ImageClass:t,data:e,wallID:s,themeID:o,ownerId:r,hotspot:p}=this.props,{imgUrl:h,paddingBottom:_,size:u,fixedPaddingBottom:m}=this.state,g={paddingBottom:"".concat(this.props.size?1==this.props.size?null:m:_,"%")},b={backgroundImage:"url(".concat(h,")")};if(u.width>u.height)var w="100%",v="".concat(u.height/u.width*100,"%");else v="100%",w="".concat(u.width/u.height*100,"%");const x=!!(e.hotspot&&e.ugc_products.length>0&&p),f={width:x&&this.props.size?w:null,height:x&&this.props.size?v:null};return(0,d.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:g,children:[null!==e&&void 0!==e&&e.postBranding?(0,d.jsx)(l.Z,{size:1}):null,x?(0,d.jsx)("div",{className:"tb_blur_bg_",style:b}):null,(0,d.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:f,children:[x?(0,d.jsx)(a.Z,{product:e.ugc_products}):null,(0,d.jsx)("img",{className:"".concat(t," track").concat(e.id),role:"img",src:h,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":s,"data-owner-id":r,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":o,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(c.do,"/media/images/no-image.svg"),(0,i.ht)(t)},alt:(0,n.P)(h)})]})]})}}},64442:(t,e,s)=>{"use strict";s.d(e,{Z:()=>h});var o=s(47313),i=s(2406),a=s(20510),r=s.n(a),n=s(43635),c=s(35179),l=s(98511),d=s(46417);const p=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class h extends o.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:s}=await(0,i.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t})}catch(s){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=o.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(s){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:s,isCover:o,controls:i,autoPlay:a,handleVideoEnded:h,muted:_}=this.props,{paddingBottom:u,videoLoaded:m,isVisible:g}=this.state,b={paddingBottom:"".concat(u,"%")},w=e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,d.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:b,ref:this.videoRef,children:[null!==e&&void 0!==e&&e.postBranding?(0,d.jsx)(l.Z,{size:1}):null,(0,d.jsx)(r(),{className:"".concat(t," video").concat(e.id),url:p(w,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":s,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata"}}},loop:!0,onError:t=>{e.stories&&0!=e.stories||(0,n.ib)(t,e.id)},autoPlay:a,muted:_,volume:a?1:0,playsinline:!0,onReady:t=>{c.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:c.ig?g:a,height:"100%",width:"100%",controls:i||!1,style:{backgroundImage:"url(".concat(e.postFileNew,")"),backgroundSize:o?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:h||null})]})}}},25810:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var o=s(47313),i=s(35179),a=s(46417);const r=o.lazy((()=>s.e(5867).then(s.bind(s,95867))));class n extends o.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:s,isDefault:n,Personalization:c}=this.props,l=!!n&&(7!==t.id&&4!==t.id&&36!==t.id),d=i.ZQ&&36==t.id?"tagembed":t.icon;return l?(0,a.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,a.jsx)("div",{})}):(0,a.jsxs)(o.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:[" ",(0,a.jsx)(r,{network:t,networkClass:e})]})}}},62245:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>c});var o=s(47313),i=s(16390),a=s(17739),r=(s(35179),s(25810),s(46417));const n=o.lazy((()=>Promise.all([s.e(622),s.e(584)]).then(s.bind(s,30584))));class c extends o.PureComponent{constructor(t){super(t),this.contentRef=o.createRef()}componentDidMount(){setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){const{contentClass:t,content:e,ThemeRule:s,font:c,personalization:l,item:d,contentTitle:p,readMore:h,maxLength:_,textAlign:u,maxLines:m,isReadMore:g}=this.props,b={WebkitLineClamp:m,textAlign:s.textAlignment};u||s.textAlignment;let w=20==d.network.id?e:(0,a.Fx)(e);12==d.network.id&&(w=(0,i.ZP)(w));const v="".concat(s.lineTrim?" tb_content_line-".concat(s.lineTrim):""),x="".concat(t," ").concat(g?"":v);return(0,r.jsxs)("div",{className:x,ref:this.contentRef,style:b,children:[p?(0,r.jsx)("div",{className:"tb_bold_txt__",children:(0,i.ZP)(p)}):null,(0,r.jsxs)(o.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:[" ",(0,r.jsx)(n,{data:d,content:w,Personalization:l})]})]})}}},55790:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var o=s(47313),i=s(17739),a=s(46417);const r=t=>{const{postTime:e,timeClass:s}=t;return(0,a.jsx)("div",{className:s,children:(0,i.Sy)(e)})},n=(0,o.memo)(r)},56094:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>f});var o=s(47313),i=s(11774),a=s(89239),r=s(55790),n=s(25810),c=s(46417);const l=t=>{let{author:e,personalization:s,postTime:o,network:i,ThemeRule:l,font:d}=t;const p=e.username&&e.username.length>0?"@".concat(e.username):"",h={color:l.authorColor,fontFamily:l.css_font},_={backgroundColor:l.authorColor},u=!(!s.postAuthor||e.isInstaUser),m=!(!s.postAuthor||!s.postTime||e.isInstaUser);return(0,c.jsxs)("div",{className:"tb_spt_author_wrapper",children:[(0,c.jsxs)("div",{className:"tb_spt_author",children:[u?(0,c.jsx)(a.default,{author:e,network:i,authorClass:"tb_spt_author_profile"}):"",(0,c.jsxs)("div",{className:"tb_spt_author_info",children:[u?(0,c.jsx)("div",{className:"tb_spt_authorname",style:h,children:e.name}):"",(0,c.jsxs)("div",{className:"tb_spt_post_info",children:[u?(0,c.jsx)("div",{className:"tb_spt_username",style:h,children:p}):"",m?(0,c.jsx)("div",{className:"tb_spt_seprator",style:_,children:" "}):"",s.postTime?(0,c.jsx)(r.default,{postTime:o,timeClass:"tb_spt_time tb-cTBfont-".concat(l.font_varient),authorColor:l.authorColor,authorNameStyle:h}):""]})]})]}),(0,c.jsx)("div",{className:"tb_spt_social_",children:(0,c.jsx)(n.default,{networkClass:"tb_spt_social_ico",network:i,isDefault:1===l.iconType,ThemeRule:l})})]})},d=t=>{let{share:e,shareColor:s}=t;const o={color:s};return(0,c.jsxs)("div",{className:"tb_spt_share_wrapper",children:[(0,c.jsxs)("div",{className:"tb_spt_share_button_",children:[(0,c.jsx)("div",{className:"tb_spt_share_ico tb__icon tb-share",style:o,children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_spt_share_btn_txt",style:o,children:"Share"})]}),(0,c.jsx)("div",{className:"tb_spt_share_wrapper_dropdown",children:(0,c.jsxs)("div",{className:"tb_spt_share_icon_list",children:[e.facebook?(0,c.jsxs)("a",{href:e.facebook,target:"_blank",className:"tb_spt_share_list_in",rel:"noopener noreferrer nofollow",children:[(0,c.jsx)("div",{className:"tb_spt_share_ico__ tb__icon tb-facebook",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_spt_share_ico_txt",children:"Facebook"})]}):"",e.twitter?(0,c.jsxs)("a",{href:e.twitter,target:"_blank",className:"tb_spt_share_list_in",rel:"noopener noreferrer nofollow",children:[(0,c.jsx)("div",{className:"tb_spt_share_ico__  tb__icon tb-twitter",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_spt_share_ico_txt",children:"Twitter"})]}):"",e.linkedin?(0,c.jsxs)("a",{href:e.linkedin,target:"_blank",className:"tb_spt_share_list_in",rel:"noopener noreferrer nofollow",children:[(0,c.jsx)("div",{className:"tb_spt_share_ico__ tb__icon tb-linkedin",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_spt_share_ico_txt",children:"LinkedIn"})]}):""]})})]})};var p=s(84261),h=s(64442);const _=t=>{let{itemData:e,wallID:s,ownerId:o,wall:i}=t;const a=(3===e.type||5===e.type)&&28!==e.network.id&&1==i.ThemeRule.autoPlay;return(0,c.jsx)("div",{className:"tb_spt_media_wrap",children:a?(0,c.jsx)(h.Z,{VideoClass:"tb_spt_video",data:e,wallID:s,themeID:i.Personalization.widgetTheme,ownerId:o,size:130,muted:!0,autoPlay:a,handleVideoEnded:()=>{}}):(0,c.jsx)(p.default,{ImageClass:"tb_spt_image",data:e,wallID:s,themeID:i.Personalization.widgetTheme,ownerId:o,size:130})})};var u=s(62245),m=s(7138),g=s(17739);const b=(t,e,s)=>1===t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,g.ok)(e)):s,w=(t,e,s)=>1===t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,g.ok)(e)):s,v=t=>{let{itemData:e,ThemeRule:s}=t;const o={color:s.fontColor},i=e.network.id,a=3===i||10===i?"like":"heart";return(0,c.jsx)(c.Fragment,{children:12!==i&&15!==i&&20!==i&&21!==i?(0,c.jsxs)("div",{className:"tb_spt_social_action__",children:[(0,c.jsx)("div",{className:"tb_spt_social_action__list",children:(0,c.jsxs)("a",{href:b(i,e.postId,e.link),target:"_blank",className:"tb_spt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:[(0,c.jsx)("div",{className:"tb_spt_social_action_ico__ tb__icon tb-".concat(a),style:o,children:" "}),e.like_count>0?(0,c.jsx)("div",{className:"tb_spt_social_action_counts__",style:o,children:e.like_count}):""]})}),(0,c.jsx)("div",{className:"tb_spt_social_action__list",children:(0,c.jsxs)("a",{href:w(i,e.postId,e.link),target:"_blank",className:"tb_spt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:[(0,c.jsx)("div",{className:"tb_spt_social_action_ico__ tb__icon tb-comment",style:o,children:" "}),e.like_count>0?(0,c.jsx)("div",{className:"tb_spt_social_action_counts__",style:o,children:e.like_count}):""]})}),1===i?(0,c.jsx)("div",{className:"tb_spt_social_action__list",children:(0,c.jsx)("a",{href:"https://twitter.com/intent/retweet?tweet_id=".concat((0,g.ok)(e.postId)),target:"_blank",className:"tb_spt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:(0,c.jsx)("div",{className:"tb_spt_social_action_ico__ tb__icon tb-retweet",style:o,children:" "})})}):""]}):""})},x=t=>{let{itemData:e,personalization:s,ThemeRule:o,itemIndex:i,clickToShowPopUp:a,wallID:r,ownerId:n,onClickToCTA:p,wall:h}=t;const g=!!(e.ugc_products&&e.ugc_products.length>0),b=!(!g||0!==e.hotspot),w=!(!e.hotspot||!g),x={backgroundColor:o.cardColor},f=1!==e.type,y=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),j={justifyContent:e.share.status?"":"flex-end",borderTop:"1px solid ".concat(o.fontColor)};return(0,c.jsx)("div",{id:"tb-spt-post-".concat(e.id),className:"tb_spt_post_wrapper","tb-network":e.network.id,"tb-product":b?1:w?2:0,children:(0,c.jsx)("div",{className:"tb_spt_post_in",onClick:a(i,e),children:(0,c.jsxs)("div",{className:"tb_spt_post_media_wrapp",children:[f?(0,c.jsx)(_,{itemData:e,wallID:r,wall:h,ownerId:n}):"",(0,c.jsx)("div",{className:"tb_spt_post_details",children:(0,c.jsxs)("div",{className:"tb_spt_contant_wrapper",children:[(0,c.jsx)(l,{ownerId:n,postTime:e.createdAt,author:e.author,network:e.network,font:o,personalization:s,ThemeRule:o}),(0,c.jsxs)("div",{className:"tb_spt_content_wrap",children:[(0,c.jsxs)("div",{className:"tb_spt_content_wrap_in",children:[o.hideContent&&1!=e.type?"":(0,c.jsx)(u.default,{contentClass:"tb_spt_content",item:e,content:e.content,font:o,ThemeRule:o,personalization:s}),y?(0,c.jsxs)("div",{className:"tb_spt_post_cta",children:[(0,c.jsx)(m.Z,{ctaClass:"tb_spt_post_cta_btn",cta:e.cta,contentTitle:e.contentTitle,item:e,onClickToCTA:p})," "]}):""]}),(0,c.jsxs)("div",{className:"tb_spt_social_actions_container",style:j,children:[e.share.status?(0,c.jsx)(d,{share:e.share,shareColor:o.fontColor}):"",o.socialAction?(0,c.jsx)(v,{itemData:e,ThemeRule:o}):""]})]})]})}),(0,c.jsx)("div",{className:"tb_spt_post_overlay",style:x,children:(0,c.jsx)("div",{})})]})})})};s(37210);class f extends o.PureComponent{componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((t,e)=>{t.removeAttribute("role")}))}),100)}render(){const{postData:t,completeDataObject:e,wall:s,clickToShowPopUp:o,onClickToCTA:a}=this.props,r={type:"loop",rewind:!0,speed:500,gap:0,autoplay:!!s.ThemeRule.slidePost,padding:0,pagination:!1,arrows:!0};return(0,c.jsx)("div",{className:"tb_spt_post_container",children:(0,c.jsxs)(i.tv,{hasTrack:!1,className:"tb_spt_post_slider",options:r,ref:this.myRef,children:[(0,c.jsx)(i.Gj,{children:t&&t.length>0&&t.map(((t,r)=>{const n=e[t];return(0,c.jsx)(i.jw,{style:{margin:0,padding:0},children:(0,c.jsx)(x,{ownerId:s.Wall.owner,itemData:n,itemIndex:r,personalization:s.Personalization,ThemeRule:s.ThemeRule,wallID:s.Wall.id,clickToShowPopUp:o,onClickToCTA:a,wall:s})},r)}))}),(0,c.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_spt_arrow_wrapper_",children:[(0,c.jsx)("div",{className:"splide__arrow splide__arrow--prev tb_spt_arrow tb_spt_arrow_left__ tb__icon tb-arrow-left-alt",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"splide__arrow splide__arrow--next tb_spt_arrow tb_spt_arrow_right__ tb__icon tb-arrow-right-alt",children:(0,c.jsx)("div",{})})]})]})})}}},2406:(t,e,s)=>{"use strict";e.Ad=void 0;var o=s(84228);var i=s(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return i.getImageSize}});var a=s(22537)},84228:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,s)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const o=s(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((s,i)=>{if("undefined"===typeof window)return i(o.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return i(o.ErrorMessage.URL_IS_NOT_DEFINED);let a=null;const r=new Image;r.addEventListener("load",(()=>{a&&window.clearTimeout(a),s({width:r.naturalWidth,height:r.naturalHeight})})),r.addEventListener("error",(t=>{a&&window.clearTimeout(a),i("".concat(t.type,": ").concat(t.message))})),r.src=t,e.timeout&&(a=window.setTimeout((()=>i(o.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,s){"use strict";var o=this&&this.__awaiter||function(t,e,s,o){return new(s||(s=Promise))((function(i,a){function r(t){try{c(o.next(t))}catch(e){a(e)}}function n(t){try{c(o.throw(t))}catch(e){a(e)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(r,n)}c((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const i=s(47313),a=s(65786);e.useImageSize=(t,e)=>{const[s,r]=(0,i.useState)(null),[n,c]=(0,i.useState)(!1),[l,d]=(0,i.useState)(null);return(0,i.useEffect)((()=>{o(void 0,void 0,void 0,(function*(){c(!0),r(null);try{const{width:s,height:o}=yield(0,a.getImageSize)(t,e);r({width:s,height:o})}catch(l){d(l.toString())}finally{c(!1)}}))}),[t,e]),[s,{loading:n,error:l}]}},37210:()=>{},50247:()=>{}}]);