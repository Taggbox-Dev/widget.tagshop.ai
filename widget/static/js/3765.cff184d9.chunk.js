(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3765,8342],{71325:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>C});var a=s(47313),i=s(61395),o=s.n(i),c=s(35179),n=s(89239),l=s(55790),r=s(25810),_=s(46417);const d=t=>{let{author:e,personalization:s,postTime:a,network:i,ThemeRule:o,font:c}=t;const d=e.username&&e.username.length>0?"@".concat(e.username):"",h=!(!s.postAuthor||e.isInstaUser),m=!(!s.postAuthor||!s.postTime||e.isInstaUser);return(0,_.jsxs)("div",{className:"tb_cc_author_wrapper",children:[(0,_.jsxs)("div",{className:"tb_cc_author",children:[h?(0,_.jsx)(n.default,{author:e,network:i,authorClass:"tb_cc_author_profile"}):"",(0,_.jsxs)("div",{className:"tb_cc_author_info",children:[h?(0,_.jsx)("div",{className:"tb_cc_authorname",children:e.name}):"",(0,_.jsxs)("div",{className:"tb_cc_post_info",children:[h?(0,_.jsx)("div",{className:"tb_cc_username",children:d}):"",m?(0,_.jsx)("div",{className:"tb_cc_seprator",children:" "}):"",s.postTime?(0,_.jsx)(l.default,{postTime:a,timeClass:"tb_cc_time tb-cTBfont-".concat(o.font_varient),authorColor:o.authorColor}):""]})]})]}),(0,_.jsx)("div",{className:"tb_cc_social_",children:(0,_.jsx)(r.default,{networkClass:"tb_cc_social_ico",network:i,ThemeRule:o,isDefault:1===o.iconType})})]})};var h=s(81349),m=s(84261),p=s(64442);const b=t=>{let{itemData:e,wallID:s,ownerId:a,wall:i}=t;const o=!(!c.ZQ||3!==e.type&&5!==e.type||i.Personalization.mobilePopup||i.Personalization.postFeatured),n=(3===e.type||5===e.type)&&28!==e.network.id&&1==i.ThemeRule.autoPlay,l=!!c.ZQ&&(!!i.ThemeRule.aspectImageRatio&&i.ThemeRule.aspectImageRatio);return(0,_.jsxs)("div",{className:"tb_cc_media_wrap",children:[o?null:(0,_.jsx)(h.Z,{itemData:e,IconClass:"tb_cc_media_icon",show:!0,isCenter:c.ZQ}),n||o?(0,_.jsx)(p.Z,{VideoClass:"tb_cc_video",data:e,wallID:s,themeID:i.Personalization.widgetTheme,ownerId:a,size:l,isCover:!0,controls:!0,autoPlay:!1,muted:!0}):(0,_.jsx)(m.default,{ImageClass:"tb_cc_image",data:e,wallID:s,themeID:i.Personalization.widgetTheme,ownerId:a,size:l,ThemeRule:i.ThemeRule})]})};var u=s(62245),w=s(7138),x=s(90905),g=s(17739);const v=t=>{let{itemData:e,ThemeRule:s}=t;const a=(t,e)=>{t.stopPropagation(),e()},i={color:s.fontColor},o=e.network.id,n=3===o||10===o?"like":"heart",l=1===o?"reply":"comment",r=!(!e.share.status||[29,1,3,4,7,8,10,11].includes(o)),d=!![1,2,3,7,8,9,10,18,19,23,26,29,30].includes(o),h=![29,11,19,23,26,29,30].includes(o),m=![12,15,20,21,29,11,19,23,26,29,30].includes(o);return(0,_.jsx)(_.Fragment,{children:d&&s.socialAction||e.share.status?(0,_.jsxs)("div",{className:"tb_cc_social_actions_ ".concat(r?"tb_cc_social_share_only__":"tb_cc_social_actions_only__"),style:s.socialAction&&m?null:{justifyContent:"flex-end"},children:[s.socialAction?(0,_.jsx)(_.Fragment,{children:m?(0,_.jsxs)(_.Fragment,{children:[d?(0,_.jsx)("div",{className:"tb_cc_social_action__list",children:(0,_.jsxs)("div",{onClick:t=>a(t,(()=>window.open(((t,e,s)=>1===t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,g.ok)(e)):s)(o,e.postId,e.link),"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,_.jsx)("div",{className:"tb_cc_social_action_ico__ tb__icon tb-".concat(n),style:i,children:" "}),(0,_.jsx)("div",{className:"tb_cc_social_action_counts__",style:i,children:c.ZQ?e.like_count:"Like"})]})}):null,h?(0,_.jsx)("div",{className:"tb_cc_social_action__list",children:(0,_.jsxs)("div",{onClick:t=>a(t,(()=>window.open(((t,e,s)=>1===t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,g.ok)(e)):s)(o,e.postId,e.link),"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,_.jsx)("div",{className:"tb_cc_social_action_ico__ tb__icon tb-".concat(l),style:i,children:" "}),(0,_.jsx)("div",{className:"tb_cc_social_action_counts__",style:i,children:c.ZQ?e.comment_count:1===o?"Reply":"Comment"})]})}):null,1===o?(0,_.jsx)("div",{className:"tb_cc_social_action__list",children:(0,_.jsxs)("div",{onClick:t=>a(t,(()=>window.open("https://twitter.com/intent/retweet?tweet_id=".concat((0,g.ok)(e.postId)),"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,_.jsx)("div",{className:"tb_cc_social_action_ico__ tb__icon tb-retweet",style:i,children:" "}),(0,_.jsx)("div",{className:"tb_cc_social_action_counts__",style:i,children:"Retweet"})]})}):"",r?(0,_.jsx)("div",{className:"tb_cc_social_action__list",children:(0,_.jsxs)("div",{onClick:t=>a(t,(()=>window.open(e.link,"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,_.jsx)("div",{className:"tb_cc_social_action_ico__ tb__icon tb-eye",style:i,children:" "}),(0,_.jsx)("div",{className:"tb_cc_social_action_counts__",style:i,children:"View"})]})}):""]}):""}):"",e.share.status?(0,_.jsxs)("div",{className:"tb_cc_action_counts_wrap".concat(s.socialAction?"":" tb_cc_action_share_wrap"),children:[(0,_.jsx)("div",{className:"tb_cc_action_ico tb__icon tb-share",style:i,children:" "}),(0,_.jsx)("div",{className:"tb_cc_action_counts",style:i,children:"Share"}),(0,_.jsx)("div",{className:"tb_cc_share_wrapper_dropdown",children:(0,_.jsxs)("div",{className:"tb_cc_share_icon_list",children:[e.share.facebook&&(0,_.jsxs)("div",{onClick:t=>a(t,(()=>window.open(e.share.facebook,"_blank"))),className:"tb_cc_share_list_in",children:[(0,_.jsx)("div",{className:"tb_cc_share_ico__ tb__icon tb-facebook",children:" "}),(0,_.jsx)("div",{className:"tb_cc_share_ico_txt",children:"Facebook"})]}),e.share.twitter&&(0,_.jsxs)("div",{onClick:t=>a(t,(()=>window.open(e.share.twitter,"_blank"))),className:"tb_cc_share_list_in",children:[(0,_.jsx)("div",{className:"tb_cc_share_ico__ tb__icon tb-twitter"}),(0,_.jsx)("div",{className:"tb_cc_share_ico_txt",children:"Twitter"})]}),e.share.linkedin&&(0,_.jsxs)("div",{onClick:t=>a(t,(()=>window.open(e.share.linkedin,"_blank"))),className:"tb_cc_share_list_in",children:[(0,_.jsx)("div",{className:"tb_cc_share_ico__ tb__icon tb-linkedin",children:" "}),(0,_.jsx)("div",{className:"tb_cc_share_ico_txt",children:"LinkedIn"})]})]})})]}):""]}):null})},j=c.ZQ?null:200,k=t=>{let{itemData:e,personalization:s,adjustWidth:a,ThemeRule:i,clickToShowPopUp:o,itemIndex:n,wallID:l,ownerId:r,onClickToCTA:h,wall:m}=t;const p=1!==e.type,k=e.rating>0,N=e.rating>0?"tb_cc_rating_content":"tb_cc_content",f=c.ZQ&&(0,g.mD)(5)?"tb_cc_rating_content_review":null,y=1===e.type&&s.textDecorate?"tb_cc_text_decoration tb_cc_text_post":"",C=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),T=!!(C||i.socialAction||i.shareOption),D=s.trimcontent?(0,g.Sv)(e.content,j):e.content;return(0,_.jsx)("div",{id:"tb-cc-post-".concat(e.id),className:"tb_cc_post_wrapper",style:{width:"".concat(a,"%"),padding:s.padding/2},"tb-network":e.network.icon,children:(0,_.jsxs)("div",{className:"tb_cc_post_in",onClick:o(n,e),children:[c.ZQ?p?(0,_.jsx)("div",{className:"tb_cc_post_media_wrapp",children:(0,_.jsx)(b,{itemData:e,wallID:l,wall:m,ownerId:r},"img".concat(n,"_").concat(e.id))}):"":null,(0,_.jsxs)("div",{className:"tb_cc_contant_wrapper",children:[(0,_.jsx)(d,{ownerId:r,postTime:e.createdAt,author:e.author,network:e.network,font:i,personalization:s,ThemeRule:i}),k&&(0,g.mD)(5)?(0,_.jsxs)("div",{className:"tb_cc_rating__",children:[(0,_.jsx)(x.Z,{rating:e.rating,network:e.network})," "]}):"",i.hideContent&&1!=e.type?"":(0,_.jsx)(u.default,{item:e,contentClass:"".concat(N," ").concat(f," ").concat(y),content:D,font:i,ThemeRule:i,personalization:s,contentTitle:e.contentTitle}),k&&!(0,g.mD)(5)?(0,_.jsxs)("div",{className:"tb_cc_rating__",children:[(0,_.jsx)(x.Z,{rating:e.rating,network:e.network})," "]}):""]}),c.ZQ?null:p?(0,_.jsx)("div",{className:"tb_cc_post_media_wrapp",children:(0,_.jsx)(b,{itemData:e,wallID:l,wall:m,ownerId:r},"img".concat(n,"_").concat(e.id))}):"",T||C||i.shareOption?(0,_.jsxs)("div",{className:"tb_cc_post_actions",children:[C?(0,_.jsxs)("div",{className:"tb_cc_post_cta",children:[(0,_.jsx)(w.Z,{ctaClass:"tb_cc_post_cta_btn",cta:e.cta,item:e,onClickToCTA:h})," "]}):"",T?(0,_.jsx)(v,{itemData:e,ThemeRule:i}):""]}):""]})})};var N=s(43411),f=s(43635);class y extends a.PureComponent{constructor(){super(...arguments),this.state={postData:[],loadData:1},this.onLoadMasonry=()=>{this.editorHeight()},this.editorHeight=()=>{var t=document.querySelector(".tb_cc_post_container");if(t){const e=t.style.height;if(e){const t=e.split("px");t&&JSON.stringify(t)&&t[0]>0&&this.props.managePostHeight("".concat(e))}}}}componentDidMount(){const{postData:t}=this.props,e=this;setTimeout((()=>this.setState({postData:t,loadData:1},(()=>this.onLoadMasonry()))),100),window.addEventListener("resize",(function(t){e.editorHeight()}),!0)}componentWillReceiveProps(t){const{postData:e}=t;this.setState({postData:e,loadData:1},(()=>this.onLoadMasonry()))}render(){const{postData:t,completeDataObject:e,adjustWidth:s,wall:a,languageSetting:i,clickToShowPopUp:c,onClickToCTA:n}=this.props,{loadData:l}=this.state;return(0,_.jsx)(o(),{className:"tb_cc_post_container",tabIndex:"0","aria-label":"There are ".concat(t&&t.length>0?t.length:0," posts in the feed"),elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_cc_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:l?t&&t.length>0&&t.map(((o,l)=>{const r=e[o];return(0,_.jsx)(k,{ownerId:a.Wall.owner,itemData:r,itemIndex:l,adjustWidth:1==r.highlight?2*s:s,personalization:a.Personalization,ThemeRule:a.ThemeRule,completeDataObject:e,postData:t,languageSetting:i,wallID:a.Wall.id,clickToShowPopUp:c,onClickToCTA:n,wall:a},"cls_crd_".concat(l,"_").concat(o.id))})):null})}}const C=(0,N.$j)((t=>({postHeight:t.postHeight.data})),(t=>({managePostHeight:e=>t((0,f.B0)(e))})))(y)},7138:(t,e,s)=>{"use strict";s.d(e,{Z:()=>c});var a=s(47313),i=s(46417);class o extends a.PureComponent{render(){const{cta:t,ctaClass:e,postCta:s,onClickToCTA:a,item:o}=this.props,c=!(!s||1!==s.status);return(0,i.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),a(o),window.open("".concat(c?s.url:t.url),"_blank")},children:[" ",c?s.text:t.text]})}}const c=o},64442:(t,e,s)=>{"use strict";s.d(e,{Z:()=>d});var a=s(47313),i=s(2406),o=s(20510),c=s.n(o),n=s(43635),l=s(35179),r=s(46417);const _=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class d extends a.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:s}=await(0,i.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t})}catch(s){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=a.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(s){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:s,isCover:a,controls:i,autoPlay:o,handleVideoEnded:d,muted:h}=this.props,{paddingBottom:m,videoLoaded:p,isVisible:b}=this.state,u={paddingBottom:"".concat(m,"%")},w=e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,r.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:u,ref:this.videoRef,children:(0,r.jsx)(c(),{className:"".concat(t," video").concat(e.id),url:_(w,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":s,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata"}}},loop:!0,onError:t=>{e.stories&&0!=e.stories||(0,n.ib)(t,e.id)},autoPlay:o,muted:h,volume:o?1:0,playsinline:!0,onReady:t=>{l.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:l.ig?b:o,height:"100%",width:"100%",controls:i||!1,style:{backgroundImage:"url(".concat(e.postFileNew,")"),backgroundSize:a?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:d||null})})}}},62245:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var a=s(47313),i=s(16390),o=s(17739),c=(s(35179),s(25810),s(46417));const n=a.lazy((()=>Promise.all([s.e(622),s.e(584)]).then(s.bind(s,30584))));class l extends a.PureComponent{constructor(t){super(t),this.contentRef=a.createRef()}componentDidMount(){setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){const{contentClass:t,content:e,ThemeRule:s,font:l,personalization:r,item:_,contentTitle:d,readMore:h,maxLength:m,textAlign:p,maxLines:b,isReadMore:u}=this.props,w={WebkitLineClamp:b,textAlign:s.textAlignment};p||s.textAlignment;let x=20==_.network.id?e:(0,o.Fx)(e);12==_.network.id&&(x=(0,i.ZP)(x));const g="".concat(s.lineTrim?" tb_content_line-".concat(s.lineTrim):""),v="".concat(t," ").concat(u?"":g);return(0,c.jsxs)("div",{className:v,ref:this.contentRef,style:w,children:[d?(0,c.jsx)("div",{className:"tb_bold_txt__",children:(0,i.ZP)(d)}):null,(0,c.jsxs)(a.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:[" ",(0,c.jsx)(n,{data:_,content:x,Personalization:r})]})]})}}},90905:(t,e,s)=>{"use strict";s.d(e,{Z:()=>l});var a=s(47313),i=s(35179),o=s(46417);const c=t=>{let{network:e}=t;const s={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:i.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:i.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:a,color:c}=s[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,o.jsx)("div",{className:a,style:{color:c},"tb-network":e.id,children:(0,o.jsx)("div",{})})},n=t=>{let{ThemeID:e}=t;const{className:s,color:a}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,o.jsx)("div",{className:s,style:{color:a},"tb-network":e})};class l extends a.PureComponent{render(){const{rating:t,network:e,ThemeID:s}=this.props;return(0,o.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,a)=>s?(0,o.jsx)(n,{ThemeID:s},a):(0,o.jsx)(c,{network:e},a))):null})}}},50247:()=>{}}]);