(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3765,8342,9239,5790],{71325:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>C});var a=s(47313),i=s(61395),o=s.n(i),c=s(35179),n=s(89239),l=s(55790),r=s(25810),d=s(46417);const _=t=>{let{author:e,personalization:s,postTime:a,network:i,ThemeRule:o,font:c}=t;const _=e.username&&e.username.length>0?"@".concat(e.username):"",h=!(!s.postAuthor||e.isInstaUser),m=!(!s.postAuthor||!s.postTime||e.isInstaUser);return(0,d.jsxs)("div",{className:"tb_cc_author_wrapper",children:[(0,d.jsxs)("div",{className:"tb_cc_author",children:[h?(0,d.jsx)(n.default,{author:e,network:i,authorClass:"tb_cc_author_profile"}):"",(0,d.jsxs)("div",{className:"tb_cc_author_info",children:[h?(0,d.jsx)("div",{className:"tb_cc_authorname",children:e.name}):"",(0,d.jsxs)("div",{className:"tb_cc_post_info",children:[h?(0,d.jsx)("div",{className:"tb_cc_username",children:_}):"",m?(0,d.jsx)("div",{className:"tb_cc_seprator",children:" "}):"",s.postTime?(0,d.jsx)(l.default,{postTime:a,timeClass:"tb_cc_time tb-cTBfont-".concat(o.font_varient),authorColor:o.authorColor}):""]})]})]}),(0,d.jsx)("div",{className:"tb_cc_social_",children:(0,d.jsx)(r.default,{networkClass:"tb_cc_social_ico",network:i,ThemeRule:o,isDefault:1===o.iconType})})]})};var h=s(81349),m=s(84261),p=s(64442);const u=t=>{let{itemData:e,wallID:s,ownerId:a,wall:i}=t;const o=!(!c.ZQ||3!==e.type&&5!==e.type||i.Personalization.mobilePopup||i.Personalization.postFeatured),n=(3===e.type||5===e.type)&&28!==e.network.id&&1==i.ThemeRule.autoPlay,l=!!c.ZQ&&(!!i.ThemeRule.aspectImageRatio&&i.ThemeRule.aspectImageRatio);return(0,d.jsxs)("div",{className:"tb_cc_media_wrap",children:[o?null:(0,d.jsx)(h.Z,{itemData:e,IconClass:"tb_cc_media_icon",show:!0,isCenter:c.ZQ}),n||o?(0,d.jsx)(p.Z,{VideoClass:"tb_cc_video",data:e,wallID:s,themeID:i.Personalization.widgetTheme,ownerId:a,size:l,isCover:!0,controls:!1,autoPlay:!1,muted:!0}):(0,d.jsx)(m.default,{ImageClass:"tb_cc_image",data:e,wallID:s,themeID:i.Personalization.widgetTheme,ownerId:a,size:l,ThemeRule:i.ThemeRule})]})};var b=s(62245),w=s(7138),g=s(90905),x=s(17739);const v=t=>{let{itemData:e,ThemeRule:s}=t;const a=(t,e)=>{t.stopPropagation(),e()},i={color:s.fontColor},o=e.network.id,n=3===o||10===o?"like":"heart",l=1===o?"reply":"comment",r=!(!e.share.status||[29,1,3,4,7,8,10,11].includes(o)),_=!![1,2,3,7,8,9,10,18,19,23,26,29,30].includes(o),h=![29,11,19,23,26,29,30].includes(o),m=![12,15,20,21,29,11,19,23,26,29,30].includes(o);return(0,d.jsx)(d.Fragment,{children:_&&s.socialAction||e.share.status?(0,d.jsxs)("div",{className:"tb_cc_social_actions_ ".concat(r?"tb_cc_social_share_only__":"tb_cc_social_actions_only__"),style:s.socialAction&&m?null:{justifyContent:"flex-end"},children:[s.socialAction?(0,d.jsx)(d.Fragment,{children:m?(0,d.jsxs)(d.Fragment,{children:[_?(0,d.jsx)("div",{className:"tb_cc_social_action__list",children:(0,d.jsxs)("div",{onClick:t=>a(t,(()=>window.open(((t,e,s)=>1===t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,x.ok)(e)):s)(o,e.postId,e.link),"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,d.jsx)("div",{className:"tb_cc_social_action_ico__ tb__icon tb-".concat(n),style:i,children:" "}),(0,d.jsx)("div",{className:"tb_cc_social_action_counts__",style:i,children:c.ZQ?e.like_count:"Like"})]})}):null,h?(0,d.jsx)("div",{className:"tb_cc_social_action__list",children:(0,d.jsxs)("div",{onClick:t=>a(t,(()=>window.open(((t,e,s)=>1===t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,x.ok)(e)):s)(o,e.postId,e.link),"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,d.jsx)("div",{className:"tb_cc_social_action_ico__ tb__icon tb-".concat(l),style:i,children:" "}),(0,d.jsx)("div",{className:"tb_cc_social_action_counts__",style:i,children:c.ZQ?e.comment_count:1===o?"Reply":"Comment"})]})}):null,1===o?(0,d.jsx)("div",{className:"tb_cc_social_action__list",children:(0,d.jsxs)("div",{onClick:t=>a(t,(()=>window.open("https://twitter.com/intent/retweet?tweet_id=".concat((0,x.ok)(e.postId)),"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,d.jsx)("div",{className:"tb_cc_social_action_ico__ tb__icon tb-retweet",style:i,children:" "}),(0,d.jsx)("div",{className:"tb_cc_social_action_counts__",style:i,children:"Retweet"})]})}):"",r?(0,d.jsx)("div",{className:"tb_cc_social_action__list",children:(0,d.jsxs)("div",{onClick:t=>a(t,(()=>window.open(e.link,"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,d.jsx)("div",{className:"tb_cc_social_action_ico__ tb__icon tb-eye",style:i,children:" "}),(0,d.jsx)("div",{className:"tb_cc_social_action_counts__",style:i,children:"View"})]})}):""]}):""}):"",e.share.status?(0,d.jsxs)("div",{className:"tb_cc_action_counts_wrap".concat(s.socialAction?"":" tb_cc_action_share_wrap"),children:[(0,d.jsx)("div",{className:"tb_cc_action_ico tb__icon tb-share",style:i,children:" "}),(0,d.jsx)("div",{className:"tb_cc_action_counts",style:i,children:"Share"}),(0,d.jsx)("div",{className:"tb_cc_share_wrapper_dropdown",children:(0,d.jsxs)("div",{className:"tb_cc_share_icon_list",children:[e.share.facebook&&(0,d.jsxs)("div",{onClick:t=>a(t,(()=>window.open(e.share.facebook,"_blank"))),className:"tb_cc_share_list_in",children:[(0,d.jsx)("div",{className:"tb_cc_share_ico__ tb__icon tb-facebook",children:" "}),(0,d.jsx)("div",{className:"tb_cc_share_ico_txt",children:"Facebook"})]}),e.share.twitter&&(0,d.jsxs)("div",{onClick:t=>a(t,(()=>window.open(e.share.twitter,"_blank"))),className:"tb_cc_share_list_in",children:[(0,d.jsx)("div",{className:"tb_cc_share_ico__ tb__icon tb-twitter"}),(0,d.jsx)("div",{className:"tb_cc_share_ico_txt",children:"Twitter"})]}),e.share.linkedin&&(0,d.jsxs)("div",{onClick:t=>a(t,(()=>window.open(e.share.linkedin,"_blank"))),className:"tb_cc_share_list_in",children:[(0,d.jsx)("div",{className:"tb_cc_share_ico__ tb__icon tb-linkedin",children:" "}),(0,d.jsx)("div",{className:"tb_cc_share_ico_txt",children:"LinkedIn"})]})]})})]}):""]}):null})},j=c.ZQ?null:200,k=t=>{let{itemData:e,personalization:s,adjustWidth:a,ThemeRule:i,clickToShowPopUp:o,itemIndex:n,wallID:l,ownerId:r,onClickToCTA:h,wall:m}=t;const p=1!==e.type,k=e.rating>0,f=e.rating>0?"tb_cc_rating_content":"tb_cc_content",N=c.ZQ&&(0,x.mD)(5)?"tb_cc_rating_content_review":null,y=1===e.type&&s.textDecorate?"tb_cc_text_decoration tb_cc_text_post":"",C=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),T=!!(C||i.socialAction||i.shareOption),I=s.trimcontent?(0,x.Sv)(e.content,j):e.content;return(0,d.jsx)("div",{id:"tb-cc-post-".concat(e.id),className:"tb_cc_post_wrapper",style:{width:"".concat(a,"%"),padding:s.padding/2},"tb-network":e.network.icon,children:(0,d.jsxs)("div",{className:"tb_cc_post_in",onClick:o(n,e),children:[c.ZQ?p?(0,d.jsx)("div",{className:"tb_cc_post_media_wrapp",children:(0,d.jsx)(u,{itemData:e,wallID:l,wall:m,ownerId:r},"img".concat(n,"_").concat(e.id))}):"":null,(0,d.jsxs)("div",{className:"tb_cc_contant_wrapper",children:[(0,d.jsx)(_,{ownerId:r,postTime:e.createdAt,author:e.author,network:e.network,font:i,personalization:s,ThemeRule:i}),k&&(0,x.mD)(5)?(0,d.jsxs)("div",{className:"tb_cc_rating__",children:[(0,d.jsx)(g.Z,{rating:e.rating,network:e.network})," "]}):"",i.hideContent&&1!=e.type?"":(0,d.jsx)(b.default,{item:e,contentClass:"".concat(f," ").concat(N," ").concat(y),content:I,font:i,ThemeRule:i,personalization:s,contentTitle:e.contentTitle}),k&&!(0,x.mD)(5)?(0,d.jsxs)("div",{className:"tb_cc_rating__",children:[(0,d.jsx)(g.Z,{rating:e.rating,network:e.network})," "]}):""]}),c.ZQ?null:p?(0,d.jsx)("div",{className:"tb_cc_post_media_wrapp",children:(0,d.jsx)(u,{itemData:e,wallID:l,wall:m,ownerId:r},"img".concat(n,"_").concat(e.id))}):"",T||C||i.shareOption?(0,d.jsxs)("div",{className:"tb_cc_post_actions",children:[C?(0,d.jsxs)("div",{className:"tb_cc_post_cta",children:[(0,d.jsx)(w.Z,{ctaClass:"tb_cc_post_cta_btn",cta:e.cta,item:e,onClickToCTA:h})," "]}):"",T?(0,d.jsx)(v,{itemData:e,ThemeRule:i}):""]}):""]})})};var f=s(43411),N=s(43635);class y extends a.PureComponent{constructor(){super(...arguments),this.state={postData:[],loadData:1},this.onLoadMasonry=()=>{this.editorHeight()},this.editorHeight=()=>{var t=document.querySelector(".tb_cc_post_container");if(t){const e=t.style.height;if(e){const t=e.split("px");t&&JSON.stringify(t)&&t[0]>0&&this.props.managePostHeight("".concat(e))}}}}componentDidMount(){const{postData:t}=this.props,e=this;setTimeout((()=>this.setState({postData:t,loadData:1},(()=>this.onLoadMasonry()))),100),window.addEventListener("resize",(function(t){e.editorHeight()}),!0)}componentWillReceiveProps(t){const{postData:e}=t;this.setState({postData:e,loadData:1},(()=>this.onLoadMasonry()))}render(){const{postData:t,completeDataObject:e,adjustWidth:s,wall:a,languageSetting:i,clickToShowPopUp:c,onClickToCTA:n}=this.props,{loadData:l}=this.state;return(0,d.jsx)(o(),{className:"tb_cc_post_container",tabIndex:"0","aria-label":"There are ".concat(t&&t.length>0?t.length:0," posts in the feed"),elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_cc_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:l?t&&t.length>0&&t.map(((o,l)=>{const r=e[o];return(0,d.jsx)(k,{ownerId:a.Wall.owner,itemData:r,itemIndex:l,adjustWidth:1==r.highlight?2*s:s,personalization:a.Personalization,ThemeRule:a.ThemeRule,completeDataObject:e,postData:t,languageSetting:i,wallID:a.Wall.id,clickToShowPopUp:c,onClickToCTA:n,wall:a},"cls_crd_".concat(l,"_").concat(o.id))})):null})}}const C=(0,f.$j)((t=>({postHeight:t.postHeight.data})),(t=>({managePostHeight:e=>t((0,N.B0)(e))})))(y)},89239:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var a=s(47313),i=s(17739),o=s(98935),c=s(46417);class n extends a.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:s}=this.props;return(0,c.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,c.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,i.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,c.jsx)(o.Z,{authorClass:e,username:t.name,network:s,color:null===s.id?"#000":s.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,s)=>{"use strict";s.d(e,{Z:()=>c});var a=s(47313),i=s(46417);const o=t=>{let{username:e,network:s,authorClass:a,errorPic:o}=t;const c="#ffffff"==s.color?"#000":s.color;return(0,i.jsx)("img",{className:"".concat(a,"__"),src:o||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":c).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},c=(0,a.memo)(o)},7138:(t,e,s)=>{"use strict";s.d(e,{Z:()=>c});var a=s(47313),i=s(46417);class o extends a.PureComponent{render(){const{cta:t,ctaClass:e,postCta:s,onClickToCTA:a,item:o}=this.props,c=!(!s||1!==s.status);return(0,i.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),a(o),window.open("".concat(c?s.url:t.url),"_blank")},children:[" ",c?s.text:t.text]})}}const c=o},64442:(t,e,s)=>{"use strict";s.d(e,{Z:()=>h});var a=s(47313),i=s(2406),o=s(20510),c=s.n(o),n=s(43635),l=s(35179),r=s(98511),d=s(46417);const _=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class h extends a.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:s}=await(0,i.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t})}catch(s){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=a.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(s){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:s,isCover:a,controls:i,autoPlay:o,handleVideoEnded:h,muted:m}=this.props,{paddingBottom:p,videoLoaded:u,isVisible:b}=this.state,w={paddingBottom:"".concat(p,"%")},g=e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,d.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:w,ref:this.videoRef,children:[null!==e&&void 0!==e&&e.postBranding?(0,d.jsx)(r.Z,{size:1}):null,(0,d.jsx)(c(),{className:"".concat(t," video").concat(e.id),url:_(g,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":s,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata"}}},loop:!0,onError:t=>{e.stories&&0!=e.stories||(0,n.ib)(t,e.id)},autoPlay:o,muted:m,volume:o?1:0,playsinline:!0,onReady:t=>{l.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:l.ig?b:o,height:"100%",width:"100%",controls:i||!1,style:{backgroundImage:"url(".concat(e.postFileNew,")"),backgroundSize:a?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:h||null})]})}}},25810:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var a=s(47313),i=s(35179),o=s(46417);const c=a.lazy((()=>s.e(5867).then(s.bind(s,95867))));class n extends a.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:s,isDefault:n,Personalization:l}=this.props,r=!!n&&(7!==t.id&&4!==t.id&&36!==t.id),d=i.ZQ&&36==t.id?"tagembed":t.icon;return r?(0,o.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,o.jsx)("div",{})}):(0,o.jsxs)(a.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(c,{network:t,networkClass:e})]})}}},62245:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var a=s(47313),i=s(16390),o=s(17739),c=(s(35179),s(25810),s(46417));const n=a.lazy((()=>Promise.all([s.e(622),s.e(584)]).then(s.bind(s,30584))));class l extends a.PureComponent{constructor(t){super(t),this.contentRef=a.createRef()}componentDidMount(){setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){const{contentClass:t,content:e,ThemeRule:s,font:l,personalization:r,item:d,contentTitle:_,readMore:h,maxLength:m,textAlign:p,maxLines:u,isReadMore:b}=this.props,w={WebkitLineClamp:u,textAlign:s.textAlignment};p||s.textAlignment;let g=20==d.network.id?e:(0,o.Fx)(e);12==d.network.id&&(g=(0,i.ZP)(g));const x="".concat(s.lineTrim?" tb_content_line-".concat(s.lineTrim):""),v="".concat(t," ").concat(b?"":x);return(0,c.jsxs)("div",{className:v,ref:this.contentRef,style:w,children:[_?(0,c.jsx)("div",{className:"tb_bold_txt__",children:(0,i.ZP)(_)}):null,(0,c.jsxs)(a.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:[" ",(0,c.jsx)(n,{data:d,content:g,Personalization:r})]})]})}}},90905:(t,e,s)=>{"use strict";s.d(e,{Z:()=>l});var a=s(47313),i=s(35179),o=s(46417);const c=t=>{let{network:e}=t;const s={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:i.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:i.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:a,color:c}=s[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,o.jsx)("div",{className:a,style:{color:c},"tb-network":e.id,children:(0,o.jsx)("div",{})})},n=t=>{let{ThemeID:e}=t;const{className:s,color:a}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,o.jsx)("div",{className:s,style:{color:a},"tb-network":e})};class l extends a.PureComponent{render(){const{rating:t,network:e,ThemeID:s}=this.props;return(0,o.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,a)=>s?(0,o.jsx)(n,{ThemeID:s},a):(0,o.jsx)(c,{network:e},a))):null})}}},55790:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var a=s(47313),i=s(17739),o=s(46417);const c=t=>{const{postTime:e,timeClass:s}=t;return(0,o.jsx)("div",{className:s,children:(0,i.Sy)(e)})},n=(0,a.memo)(c)},50247:()=>{}}]);