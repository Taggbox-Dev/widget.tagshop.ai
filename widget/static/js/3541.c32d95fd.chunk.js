(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3541,4261,8342,9239,5790],{89239:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var o=s(47313),a=s(17739),i=s(98935),r=s(46417);class n extends o.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:s}=this.props;return(0,r.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,r.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,a.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,r.jsx)(i.Z,{authorClass:e,username:t.name,network:s,color:null===s.id?"#000":s.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});var o=s(47313),a=s(46417);const i=t=>{let{username:e,network:s,authorClass:o,errorPic:i}=t;return(0,a.jsx)("img",{className:"".concat(o,"__"),src:i||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":s.color).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},r=(0,o.memo)(i)},7138:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});var o=s(47313),a=s(46417);class i extends o.PureComponent{render(){const{cta:t,ctaClass:e,postCta:s,onClickToCTA:o,item:i}=this.props,r=!(!s||1!==s.status);return(0,a.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),o(i),window.open("".concat(r?s.url:t.url),"_blank")},children:[" ",r?s.text:t.text]})}}const r=i},97915:(t,e,s)=>{"use strict";s.d(e,{Z:()=>p});var o=s(47313),a=s(43411),i=s(83773),r=s(6119),n=s(17739),c=s(46417);const l=(0,i.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),d=t=>'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n  <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n  ").concat(t.product_discount>0&&t.product_price>t.product_discount?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_discount,"</div>"):"","\n  ").concat(t.product_price>0?'<div class="tb_p_tooltip_price">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"","\n  </a>");class _ extends o.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:s}=this.state,o=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return o.status?(0,c.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const a=(0,n.i1)();return(0,c.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(a),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(s==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,c.jsx)("div",{className:"tb_hotspot__ ".concat(0==o.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,c.jsx)(l,{children:(0,c.jsx)(r.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(a),clickable:!0,html:d(t.UgcProduct)})})]},e)}))}):null}}const p=(0,a.$j)((t=>({appData:t.appData})))(_)},84261:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>d});var o=s(47313),a=s(43635),i=s(97915),r=s(2406),n=s(17739),c=s(98501),l=s(46417);class d extends o.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const s=document.querySelector(".track".concat(this.props.data.id));s&&(s.setAttribute("data-height",e),s.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:s}=await(0,r.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t})}catch(s){this.setState({paddingBottom:100})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(s){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,imgUrl:this.props.data.postFileNew}}componentWillMount(){this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}componentDidMount(){this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}render(){const{ImageClass:t,data:e,wallID:s,themeID:o,ownerId:r,hotspot:d}=this.props,{imgUrl:_,paddingBottom:p}=this.state,h={paddingBottom:"".concat(p,"%")},u={backgroundImage:"url(".concat(_,")")},m=!!(e.hotspot&&e.ugc_products.length>0&&d);return(0,l.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:h,children:[m?(0,l.jsx)("div",{className:"tb_blur_bg_",style:u}):null,(0,l.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:{width:m?"":"100%"},children:[m?(0,l.jsx)(i.Z,{product:e.ugc_products}):null,(0,l.jsx)("img",{className:"".concat(t," track").concat(e.id),role:"img",src:_,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":s,"data-owner-id":r,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":o,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(c.do,"/media/images/no-image.svg"),(0,a.ht)(t)},alt:(0,n.P)(_)})]})]})}}},64442:(t,e,s)=>{"use strict";s.d(e,{Z:()=>_});var o=s(47313),a=s(2406),i=s(20510),r=s.n(i),n=s(43635),c=s(35179),l=s(46417);const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class _ extends o.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:s}=await(0,a.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t})}catch(s){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=o.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(s){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:s,isCover:o,controls:a,autoPlay:i,handleVideoEnded:_,muted:p}=this.props,{paddingBottom:h,videoLoaded:u,isVisible:m}=this.state;console.warn("isVisible",m);const g={paddingBottom:"".concat(h,"%")},b=e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,l.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:g,ref:this.videoRef,children:(0,l.jsx)(r(),{className:"".concat(t," video").concat(e.id),url:d(b,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":s,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{forceVideo:!0,attributes:{muted:p}}},loop:!i,onError:t=>{e.stories&&0!=e.stories||(0,n.ib)(t,e.id)},autoPlay:i,muted:p,volume:i?1:0,playsinline:!0,onReady:t=>{c.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:c.ig?m:i,height:"100%",width:"100%",controls:a||!1,style:{backgroundImage:u?"":"url(".concat(e.postFileNew,")"),backgroundSize:o?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:_||null})})}}},25810:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>c});var o=s(47313),a=s(35179),i=s(17739),r=s(46417);const n=o.lazy((()=>s.e(5867).then(s.bind(s,95867))));class c extends o.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:s,isDefault:c,Personalization:l}=this.props,d=!!c&&(7!==t.id&&4!==t.id&&36!==t.id),_=a.ZQ&&36==t.id?"tagembed":t.icon;var p=[61,16,53,4,50,55].includes(parseInt(null===l||void 0===l?void 0:l.widgetTheme))?1==s.postHover?(0,i.uu)(s.iconColor,"#000000"):(0,i.uu)(s.iconColor,"#ffffff"):s.iconColor;const h=(0,i.mD)(59)?null:a.ig?a.Jc?(0,i.uu)(s.iconColor,s.cardColor):p:s.iconColor;return d?(0,r.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(_.replace(/fa-/g,"")),style:{color:h},children:(0,r.jsx)("div",{})}):(0,r.jsxs)(o.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:[" ",(0,r.jsx)(n,{network:t,networkClass:e})]})}}},62245:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>c});var o=s(47313),a=s(16390),i=s(17739),r=(s(35179),s(25810),s(46417));const n=o.lazy((()=>Promise.all([s.e(622),s.e(584)]).then(s.bind(s,30584))));class c extends o.PureComponent{constructor(t){super(t),this.contentRef=o.createRef()}componentDidMount(){setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){const{contentClass:t,content:e,ThemeRule:s,font:c,personalization:l,item:d,contentTitle:_,readMore:p,maxLength:h,textAlign:u,maxLines:m,isReadMore:g}=this.props,b={WebkitLineClamp:m,textAlign:s.textAlignment};u||s.textAlignment;let w=20==d.network.id?e:(0,i.Fx)(e);12==d.network.id&&(w=(0,a.ZP)(w));const v="".concat(s.lineTrim?" tb_content_line-".concat(s.lineTrim):""),f="".concat(t," ").concat(g?"":v," ").concat(s.font_varient?"tb-cTBfont-".concat(s.font_varient):"");return(0,r.jsxs)("div",{className:f,ref:this.contentRef,style:b,children:[_?(0,r.jsx)("div",{className:"tb_bold_txt__",children:(0,a.ZP)(_)}):null,(0,r.jsxs)(o.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:[" ",(0,r.jsx)(n,{data:d,content:w,Personalization:l})]})]})}}},55790:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var o=s(47313),a=s(17739),i=s(46417);const r=t=>{const{postTime:e,timeClass:s}=t;return(0,i.jsx)("div",{className:s,children:(0,a.Sy)(e)})},n=(0,o.memo)(r)},56094:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>x});var o=s(47313),a=s(11774),i=s(89239),r=s(55790),n=s(25810),c=s(46417);const l=t=>{let{author:e,personalization:s,postTime:o,network:a,ThemeRule:l,font:d}=t;const _=e.username&&e.username.length>0?"@".concat(e.username):"",p={color:l.authorColor,fontFamily:l.css_font},h={backgroundColor:l.authorColor},u=!(!s.postAuthor||e.isInstaUser),m=!(!s.postAuthor||!s.postTime||e.isInstaUser);return(0,c.jsxs)("div",{className:"tb_spt_author_wrapper",children:[(0,c.jsxs)("div",{className:"tb_spt_author",children:[u?(0,c.jsx)(i.default,{author:e,network:a,authorClass:"tb_spt_author_profile"}):"",(0,c.jsxs)("div",{className:"tb_spt_author_info",children:[u?(0,c.jsx)("div",{className:"tb_spt_authorname",style:p,children:e.name}):"",(0,c.jsxs)("div",{className:"tb_spt_post_info",children:[u?(0,c.jsx)("div",{className:"tb_spt_username",style:p,children:_}):"",m?(0,c.jsx)("div",{className:"tb_spt_seprator",style:h,children:" "}):"",s.postTime?(0,c.jsx)(r.default,{postTime:o,timeClass:"tb_spt_time tb-cTBfont-".concat(l.font_varient),authorColor:l.authorColor,authorNameStyle:p}):""]})]})]}),(0,c.jsx)("div",{className:"tb_spt_social_",children:(0,c.jsx)(n.default,{networkClass:"tb_spt_social_ico",network:a,isDefault:1===l.iconType,ThemeRule:l})})]})},d=t=>{let{share:e,shareColor:s}=t;const o={color:s};return(0,c.jsxs)("div",{className:"tb_spt_share_wrapper",children:[(0,c.jsxs)("div",{className:"tb_spt_share_button_",children:[(0,c.jsx)("div",{className:"tb_spt_share_ico tb__icon tb-share",style:o,children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_spt_share_btn_txt",style:o,children:"Share"})]}),(0,c.jsx)("div",{className:"tb_spt_share_wrapper_dropdown",children:(0,c.jsxs)("div",{className:"tb_spt_share_icon_list",children:[e.facebook?(0,c.jsxs)("a",{href:e.facebook,target:"_blank",className:"tb_spt_share_list_in",rel:"noopener noreferrer nofollow",children:[(0,c.jsx)("div",{className:"tb_spt_share_ico__ tb__icon tb-facebook",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_spt_share_ico_txt",children:"Facebook"})]}):"",e.twitter?(0,c.jsxs)("a",{href:e.twitter,target:"_blank",className:"tb_spt_share_list_in",rel:"noopener noreferrer nofollow",children:[(0,c.jsx)("div",{className:"tb_spt_share_ico__  tb__icon tb-twitter",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_spt_share_ico_txt",children:"Twitter"})]}):"",e.linkedin?(0,c.jsxs)("a",{href:e.linkedin,target:"_blank",className:"tb_spt_share_list_in",rel:"noopener noreferrer nofollow",children:[(0,c.jsx)("div",{className:"tb_spt_share_ico__ tb__icon tb-linkedin",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_spt_share_ico_txt",children:"LinkedIn"})]}):""]})})]})};var _=s(84261),p=s(64442);const h=t=>{let{itemData:e,wallID:s,ownerId:o,wall:a}=t;const i=(3===e.type||5===e.type)&&28!==e.network.id&&1==a.ThemeRule.autoPlay;return(0,c.jsx)("div",{className:"tb_spt_media_wrap",children:i?(0,c.jsx)(p.Z,{VideoClass:"tb_spt_video",data:e,wallID:s,themeID:a.Personalization.widgetTheme,ownerId:o,size:130,muted:!0,autoPlay:i,handleVideoEnded:()=>{}}):(0,c.jsx)(_.default,{ImageClass:"tb_spt_image",data:e,wallID:s,themeID:a.Personalization.widgetTheme,ownerId:o,size:130})})};var u=s(62245),m=s(7138),g=s(17739);const b=(t,e,s)=>1===t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,g.ok)(e)):s,w=(t,e,s)=>1===t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,g.ok)(e)):s,v=t=>{let{itemData:e,ThemeRule:s}=t;const o={color:s.fontColor},a=e.network.id,i=3===a||10===a?"like":"heart";return(0,c.jsx)(c.Fragment,{children:12!==a&&15!==a&&20!==a&&21!==a?(0,c.jsxs)("div",{className:"tb_spt_social_action__",children:[(0,c.jsx)("div",{className:"tb_spt_social_action__list",children:(0,c.jsxs)("a",{href:b(a,e.postId,e.link),target:"_blank",className:"tb_spt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:[(0,c.jsx)("div",{className:"tb_spt_social_action_ico__ tb__icon tb-".concat(i),style:o,children:" "}),e.like_count>0?(0,c.jsx)("div",{className:"tb_spt_social_action_counts__",style:o,children:e.like_count}):""]})}),(0,c.jsx)("div",{className:"tb_spt_social_action__list",children:(0,c.jsxs)("a",{href:w(a,e.postId,e.link),target:"_blank",className:"tb_spt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:[(0,c.jsx)("div",{className:"tb_spt_social_action_ico__ tb__icon tb-comment",style:o,children:" "}),e.like_count>0?(0,c.jsx)("div",{className:"tb_spt_social_action_counts__",style:o,children:e.like_count}):""]})}),1===a?(0,c.jsx)("div",{className:"tb_spt_social_action__list",children:(0,c.jsx)("a",{href:"https://twitter.com/intent/retweet?tweet_id=".concat((0,g.ok)(e.postId)),target:"_blank",className:"tb_spt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:(0,c.jsx)("div",{className:"tb_spt_social_action_ico__ tb__icon tb-retweet",style:o,children:" "})})}):""]}):""})},f=t=>{let{itemData:e,personalization:s,ThemeRule:o,itemIndex:a,clickToShowPopUp:i,wallID:r,ownerId:n,onClickToCTA:_,wall:p}=t;const g=!!(e.ugc_products&&e.ugc_products.length>0),b=!(!g||0!==e.hotspot),w=!(!e.hotspot||!g),f={backgroundColor:o.cardColor},x=2===e.type||3===e.type||4===e.type||5===e.type,j=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),k={justifyContent:e.share.status?"":"flex-end",borderTop:"1px solid ".concat(o.fontColor)};return(0,c.jsx)("div",{id:"tb-spt-post-".concat(e.id),className:"tb_spt_post_wrapper","tb-network":e.network.id,"tb-product":b?1:w?2:0,children:(0,c.jsx)("div",{className:"tb_spt_post_in",onClick:i(a,e),children:(0,c.jsxs)("div",{className:"tb_spt_post_media_wrapp",children:[x?(0,c.jsx)(h,{itemData:e,wallID:r,wall:p,ownerId:n}):"",(0,c.jsx)("div",{className:"tb_spt_post_details",children:(0,c.jsxs)("div",{className:"tb_spt_contant_wrapper",children:[(0,c.jsx)(l,{ownerId:n,postTime:e.createdAt,author:e.author,network:e.network,font:o,personalization:s,ThemeRule:o}),(0,c.jsxs)("div",{className:"tb_spt_content_wrap",children:[(0,c.jsxs)("div",{className:"tb_spt_content_wrap_in",children:[o.hideContent&&1!=e.type?"":(0,c.jsx)(u.default,{contentClass:"tb_spt_content",item:e,content:e.content,font:o,ThemeRule:o,personalization:s}),j?(0,c.jsxs)("div",{className:"tb_spt_post_cta",children:[(0,c.jsx)(m.Z,{ctaClass:"tb_spt_post_cta_btn",cta:e.cta,contentTitle:e.contentTitle,item:e,onClickToCTA:_})," "]}):""]}),(0,c.jsxs)("div",{className:"tb_spt_social_actions_container",style:k,children:[e.share.status?(0,c.jsx)(d,{share:e.share,shareColor:o.fontColor}):"",o.socialAction?(0,c.jsx)(v,{itemData:e,ThemeRule:o}):""]})]})]})}),(0,c.jsx)("div",{className:"tb_spt_post_overlay",style:f,children:(0,c.jsx)("div",{})})]})})})};s(37210);class x extends o.PureComponent{componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((t,e)=>{t.removeAttribute("role")}))}),100)}render(){const{postData:t,completeDataObject:e,wall:s,clickToShowPopUp:o,onClickToCTA:i}=this.props,r={type:"loop",rewind:!0,speed:500,gap:0,autoplay:!!s.ThemeRule.slidePost,padding:0,pagination:!1,arrows:!0};return(0,c.jsx)("div",{className:"tb_spt_post_container",children:(0,c.jsxs)(a.tv,{hasTrack:!1,className:"tb_spt_post_slider",options:r,ref:this.myRef,children:[(0,c.jsx)(a.Gj,{children:t&&t.length>0&&t.map(((t,r)=>{const n=e[t];return(0,c.jsx)(a.jw,{style:{margin:0,padding:0},children:(0,c.jsx)(f,{ownerId:s.Wall.owner,itemData:n,itemIndex:r,personalization:s.Personalization,ThemeRule:s.ThemeRule,wallID:s.Wall.id,clickToShowPopUp:o,onClickToCTA:i,wall:s},r)})}))}),(0,c.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_spt_arrow_wrapper_",children:[(0,c.jsx)("div",{className:"splide__arrow splide__arrow--prev tb_spt_arrow tb_spt_arrow_left__ tb__icon tb-arrow-left-alt",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"splide__arrow splide__arrow--next tb_spt_arrow tb_spt_arrow_right__ tb__icon tb-arrow-right-alt",children:(0,c.jsx)("div",{})})]})]})})}}},2406:(t,e,s)=>{"use strict";e.Ad=void 0;var o=s(84228);var a=s(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return a.getImageSize}});var i=s(22537)},84228:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,s)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const o=s(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((s,a)=>{if("undefined"===typeof window)return a(o.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return a(o.ErrorMessage.URL_IS_NOT_DEFINED);let i=null;const r=new Image;r.addEventListener("load",(()=>{i&&window.clearTimeout(i),s({width:r.naturalWidth,height:r.naturalHeight})})),r.addEventListener("error",(t=>{i&&window.clearTimeout(i),a("".concat(t.type,": ").concat(t.message))})),r.src=t,e.timeout&&(i=window.setTimeout((()=>a(o.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,s){"use strict";var o=this&&this.__awaiter||function(t,e,s,o){return new(s||(s=Promise))((function(a,i){function r(t){try{c(o.next(t))}catch(e){i(e)}}function n(t){try{c(o.throw(t))}catch(e){i(e)}}function c(t){var e;t.done?a(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(r,n)}c((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const a=s(47313),i=s(65786);e.useImageSize=(t,e)=>{const[s,r]=(0,a.useState)(null),[n,c]=(0,a.useState)(!1),[l,d]=(0,a.useState)(null);return(0,a.useEffect)((()=>{o(void 0,void 0,void 0,(function*(){c(!0),r(null);try{const{width:s,height:o}=yield(0,i.getImageSize)(t,e);r({width:s,height:o})}catch(l){d(l.toString())}finally{c(!1)}}))}),[t,e]),[s,{loading:n,error:l}]}},37210:()=>{},50247:()=>{}}]);