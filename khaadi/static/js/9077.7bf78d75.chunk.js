(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[9077,8342,9239,5790],{89239:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var a=s(47313),o=s(17739),i=s(98935),n=s(46417);class r extends a.PureComponent{constructor(e){super(e),this.state={isAuthorImagevalid:!0}}render(){const{author:e,authorClass:t,network:s}=this.props;return(0,n.jsx)("div",{className:t,children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(t,"__"),src:e.picture&&String(e.picture).includes("author.png")?" ":e.picture.replace(/[ ]+/g,""),alt:(0,o.P)(e.picture),width:44,height:44,onError:e=>{this.setState({isAuthorImagevalid:!1})}}):(0,n.jsx)(i.Z,{authorClass:t,username:e.name,network:s,color:null===s.id?"#000":s.color,errorPic:e.errorPic})},Math.random())}}},98935:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var a=s(47313),o=s(46417);const i=e=>{let{username:t,network:s,authorClass:a,errorPic:i}=e;return(0,o.jsx)("img",{className:"".concat(a,"__"),src:i||"https://ui-avatars.com/api/?name=".concat(t.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":s.color).replace("#",""),"&color=fff&length=1"),alt:t,width:45,height:45})},n=(0,a.memo)(i)},64442:(e,t,s)=>{"use strict";s.d(t,{Z:()=>h});var a=s(47313),o=s(2406),i=s(20510),n=s.n(i),r=s(43635),l=s(35179),c=s(46417);const d=(e,t)=>{if(25===t){return String(e).replace("https://w.soundcloud.com/player/?url=","")}return e};class h extends a.PureComponent{constructor(e){super(e),this.onMediaLoad=async e=>{const{data:t}=this.props;if(t&&Object.keys(t).length>0&&[4,5,3].includes(t.type))if(t.mediaHeight&&""!=t.mediaHeight&&t.mediaWidth&&""!=t.mediaWidth)this.setState({paddingBottom:100*t.mediaHeight/t.mediaWidth});else try{const{width:e,height:s}=await(0,o.Ad)(t.postFileNew);this.setState({paddingBottom:100*s/e})}catch(s){this.setState({paddingBottom:100})}},this.setVideoLoaded=e=>{this.setState({videoLoaded:e})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=a.createRef(),this.observer=null}componentWillMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((e=>{let[t]=e;this.setState({isVisible:t.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(s){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:e,data:t,wallID:s,isCover:a,controls:o,autoPlay:i,handleVideoEnded:h,muted:p}=this.props,{paddingBottom:_,videoLoaded:u,isVisible:m}=this.state,b={paddingBottom:"".concat(_,"%")},w=t.mediaClip&&String(t.mediaClip).length>0?t.mediaClip:t.mediaUrl;return(0,c.jsx)("div",{className:"".concat(e,"_wrap_ mediaHolder").concat(t.id),style:b,ref:this.videoRef,children:(0,c.jsx)(n(),{className:"".concat(e," video").concat(t.id),url:d(w,t.network.id),"data-type":"video","data-network":t.network.id,"data-link":t.link,"data-wall-id":s,"data-item-id":t.id,"data-feed-id":t.feedId?t.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata"}}},loop:!i,onError:e=>{t.stories&&0!=t.stories||(0,r.ib)(e,t.id)},autoPlay:i,muted:p,volume:i?1:0,playsinline:!0,onReady:e=>{l.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:l.ig?m:i,height:"100%",width:"100%",controls:o||!1,style:{backgroundImage:"url(".concat(t.postFileNew,")"),backgroundSize:a?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:h||null})})}}},62245:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var a=s(47313),o=s(16390),i=s(17739),n=(s(35179),s(25810),s(46417));const r=a.lazy((()=>Promise.all([s.e(622),s.e(584)]).then(s.bind(s,30584))));class l extends a.PureComponent{constructor(e){super(e),this.contentRef=a.createRef()}componentDidMount(){setTimeout((()=>{const e=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(e)}),100)}render(){const{contentClass:e,content:t,ThemeRule:s,font:l,personalization:c,item:d,contentTitle:h,readMore:p,maxLength:_,textAlign:u,maxLines:m,isReadMore:b}=this.props,w={WebkitLineClamp:m,textAlign:s.textAlignment};u||s.textAlignment;let g=20==d.network.id?t:(0,i.Fx)(t);12==d.network.id&&(g=(0,o.ZP)(g));const v="".concat(s.lineTrim?" tb_content_line-".concat(s.lineTrim):""),x="".concat(e," ").concat(b?"":v);return(0,n.jsxs)("div",{className:x,ref:this.contentRef,style:w,children:[h?(0,n.jsx)("div",{className:"tb_bold_txt__",children:(0,o.ZP)(h)}):null,(0,n.jsxs)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(r,{data:d,content:g,Personalization:c})]})]})}}},5744:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var a=s(47313),o=s(43635),i=s(35179),n=s(46417);class r extends a.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{item:s,wallID:a,ownerId:n}=this.props;t.stopPropagation(),i.ZQ||(0,o.S5)({type:2,action:2,wall:a,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:n}),(0,o.Fv)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{share:e,shareClass:t}=this.props;return(0,n.jsxs)("div",{className:"tb_share_wrapper ".concat(t),children:[(0,n.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(i.ZQ?"tb-share-fill":"tb-share"),children:(0,n.jsx)("div",{})}),(0,n.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[e.facebook?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(e.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,n.jsx)("div",{})})}):"",e.twitter?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(e.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,n.jsx)("div",{})})}):"",e.linkedin?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(e.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,n.jsx)("div",{})})}):""]})]})}}},55790:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var a=s(47313),o=s(17739),i=s(46417);const n=e=>{const{postTime:t,timeClass:s}=e;return(0,i.jsx)("div",{className:s,children:(0,o.Sy)(t)})},r=(0,a.memo)(n)},9105:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>T});var a=s(47313),o=s(43411),i=s(11774),n=(s(44084),s(89239)),r=s(55790),l=s(25810),c=s(35179),d=s(46417);const h=e=>{let{author:t,personalization:s,postTime:a,network:o,ThemeRule:i,font:h}=e;const p=!(!s.postAuthor||t.isInstaUser),_=!(!s.postAuthor||!s.postTime||t.isInstaUser);return(0,d.jsxs)("div",{className:"tb_hs_author_wrapper ".concat(c.ZQ?"tb_hs_author_wrapper_top":""),children:[(0,d.jsxs)("div",{className:"tb_hs_author",children:[p?(0,d.jsx)(n.default,{network:o,author:t,authorClass:"tb_hs_author_profile"}):"",(0,d.jsxs)("div",{className:"tb_hs_author_info",children:[p?(0,d.jsx)("div",{className:"tb_hs_authorname",children:t.name}):"",(0,d.jsxs)("div",{className:"tb_hs_post_info",children:[p?(0,d.jsx)("div",{className:"tb_hs_username",children:"@".concat(t.username)}):"",_?(0,d.jsx)("div",{className:"tb_hs_seprator",children:" "}):"",s.postTime?(0,d.jsx)(r.default,{postTime:a,timeClass:"tb_hs_time tb-cTBfont-".concat(i.font_varient),authorColor:i.authorColor}):""]})]})]}),c.ZQ?null:(0,d.jsx)("div",{className:"tb_hs_social_",children:(0,d.jsx)(l.default,{networkClass:"tb_hs_social__ico",network:o,isDefault:1===i.iconType,ThemeRule:i})})]})};var p=s(81349),_=s(84261),u=s(64442);const m=e=>{let{itemData:t,wallID:s,ThemeID:a,ThemeRule:o,ownerId:i,wall:n}=e;const r=!(!c.ZQ||3!==t.type&&5!==t.type||n.Personalization.mobilePopup||n.Personalization.postFeatured),l=c.ZQ?n.ThemeRule.aspectImageRatio?n.ThemeRule.aspectImageRatio:75:100,h=(3===t.type||5===t.type)&&28!==t.network.id&&1==n.ThemeRule.autoPlay,m=!c.ig||!t.hotspot;return(0,d.jsxs)("div",{className:"tb_hs_media_wrap",children:[r?null:(0,d.jsx)(p.Z,{itemData:t,IconClass:"tb_hs_media_icon",show:m}),h?(0,d.jsx)(u.Z,{VideoClass:"tb_hs_video",data:t,wallID:s,themeID:n.Personalization.widgetTheme,ownerId:i,size:l,isCover:!0,muted:!0,autoPlay:h,handleVideoEnded:()=>{}}):(0,d.jsx)(_.default,{ImageClass:"tb_hs_image",data:t,wallID:s,themeID:n.Personalization.widgetTheme,ownerId:i,size:l,ThemeRule:o,hotspot:!0})]})};var b=s(62245),w=s(17739),g=s(11502),v=s(5744);const x=c.ZQ?null:200,j=e=>{let{itemData:t,personalization:s,ThemeRule:a,clickToShowPopUp:o,itemIndex:i,wallID:n,ownerId:r,postSizeInPx:p,wall:_,isPadding:u,isRowCount:j}=e;const f=!!(t.ugc_products&&t.ugc_products.length>0),k=!(!f||0!==t.hotspot),T=(""===a.postHover||a.postHover,2===t.type||3===t.type||4===t.type||5===t.type),C=s.trimcontent?(0,w.Sv)(t.content,x):t.content,R=p.adjustWidth<250,y=!(!t.hotspot||!f),P=(!c.ig||t.hotspot,!a.hideContent),I=!k||0==P,D=!!k&&0!=P,N=0==a.postHover&&c.ig?"light":"dark",S=c.Jx?"tb_hs_color_overlay":"tb_hs_post_overlay-"+N,z={backgroundColor:c.Jx?a.backgroundColor:""};return(0,d.jsx)("div",{id:"tb-hs-post-".concat(t.id),className:"tb_hs_post_wrapper".concat(R?" tb_hs_post_wrapper2x":""),"tb-network":t.network.id,"tb-product":k?1:y?2:0,style:{padding:s.padding/2},children:(0,d.jsx)("div",{className:"tb_hs_post_in".concat(c.ig?" tb_hs_post_ani":""),onClick:o(i,t),children:(0,d.jsxs)("div",{className:"tb_hs_post_media_wrapp",children:[T?(0,d.jsx)(m,{itemData:t,wallID:n,wall:_,ownerId:r}):"",y?null:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"tb_hs_post_details",children:[(0,d.jsxs)("div",{className:"tb_hs_contant_wrapper",children:[c.ig?(0,d.jsx)("div",{className:"tb_hs_social_",children:(0,d.jsx)(l.default,{networkClass:"tb_hs_social__ico",network:t.network,isDefault:1===a.iconType,ThemeRule:a,Personalization:s})}):null,D?(0,d.jsx)(g.Z,{ThemeRule:a,btnClass:"tb_hs_btn_wrap"}):null,I||1==t.type?(0,d.jsx)(b.default,{contentClass:"tb_hs_content",item:t,content:C,font:a,ThemeRule:a,personalization:s,contentTitle:t.contentTitle,isNetwork:!0}):null]}),c.ig?null:(0,d.jsx)(h,{ownerId:r,postTime:t.createdAt,author:t.author,network:t.network,font:a,personalization:s,ThemeRule:a}),t.share.status?(0,d.jsx)(v.Z,{share:t.share,shareClass:"tb_hs_share_container ".concat(c.ZQ?"tb_hs_share_container_te":""),item:t,wallID:n,ownerId:r}):null]}),y?null:(0,d.jsx)("div",{className:"tb_hs_post_overlay ".concat(S),style:z,children:(0,d.jsx)("div",{})}),c.ZQ?(0,d.jsx)("div",{className:"tb_hs_social_bottom_",children:(0,d.jsx)(l.default,{networkClass:"tb_hs_social__ico",network:t.network,isDefault:1===a.iconType,ThemeRule:a,Personalization:s})}):null]})]})})})};var f=s(43635);s(37210);class k extends a.PureComponent{constructor(e){super(e),this.requestData=()=>{const{appendData:e,wall:t,preRender:s,hasMoreData:a,getDataNextSteps:o}=this.props;a&&o(t.Wall.id,Math.floor(Date.now()/1e3),t.ThemeRule.numberOfPosts,e.networkID,e.after,s,e.heightEvent)},this.autoScrollSlider=(e,t,s,a)=>{const{wall:o}=this.props;if(1==o.Personalization.autoScrollStatus||c.ig){const t=c.ZQ?e._o.perPage+e.index:e.index;e.length-t===(c.ZQ?1:e._o.perPage)&&this.requestData()}},this.state={parent_id:"",postData:[]},this.inputRefs={}}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((e,t)=>{e.removeAttribute("role")}))}),100);const{postData:e}=this.props;this.setState({postData:e})}render(){var e;const{postData:t,completeDataObject:s,wall:a,clickToShowPopUp:o,onClickToCTA:n,postSizeInPx:r,parentID:l,keyRender:h,loaderData:p}=this.props,_=l;let u=a.ThemeRule.numberOfCoumn;const m=a.ThemeRule.mobileColumn,b=a.ThemeRule.slidePost,w=a.ThemeRule.slideDuration,g=a.Personalization.autoScrollStatus,v=a.ThemeRule.multiRow&&0!==a.ThemeRule.multiRow?a.ThemeRule.multiRow:1;var x=[];let f=!0;const k=(c.ZQ||c.ig)&&void 0!==(null===(e=a.Personalization)||void 0===e?void 0:e.clonePost)&&0===a.Personalization.clonePost?{clones:0}:{};for(var T=0,C=t.length;T<C;)x.push(t.slice(T,T+=v));c.ig&&k&&0==Object.keys(k).length&&(16677==a.User.id?"product"===window.dataFilterType&&(f=!!(x&&x.length>=5)):x=x.length<12?Array(15-x.length).fill(x).flat():x),u>x.length&&1!=x.length&&(u=x.length);const R=1!=g?!(Object.keys(k).length>0)&&(c.ig?"slide":"loop"):c.ig?"slide":"loop",y={...k,type:1!==g&&R,rewind:!0,speed:1e3,interval:1===b?1e3*parseInt(w):5e3,perPage:u>0?u:c.ZQ?3:6,perMove:1,gap:0,autoplay:1===b,padding:0,pagination:!1,arrows:u!=x.length,breakpoints:{560:{perPage:m>0?m:1},767:{perPage:m>0?m:2},991:{perPage:m>0?m:3},1200:{perPage:u>0?u:4},1400:{perPage:u>0?u:5},1600:{perPage:u>0?u:c.ZQ?3:6}}};return(0,d.jsx)(d.Fragment,{children:""!=l?(0,d.jsx)("div",{className:"tb_hs_post_container",children:f?(0,d.jsxs)(i.tv,{hasTrack:!1,className:"tb_hs_post_slider",options:y,ref:e=>this.inputRefs[_]=e,onMove:this.autoScrollSlider,children:[(0,d.jsx)(i.Gj,{children:(a.ThemeRule.multiRow>1&&1!==x.length&&x.length%2!==0?x.pop():x)&&x&&x.length>0&&x.map(((e,t)=>(0,d.jsx)(i.jw,{className:"tb_".concat(t),idd:l,children:(0,d.jsx)("div",{className:"tb_hs_col_wrap",children:e.map(((e,t)=>{const i=s[e];return(0,d.jsx)(j,{parentID:l,ownerId:a.Wall.owner,wall:a,itemData:i,itemIndex:t,personalization:a.Personalization,ThemeRule:a.ThemeRule,clickToShowPopUp:o,wallID:a.Wall.id,onClickToCTA:n,postSizeInPx:r},t)}))})},"tb_".concat(t,"_").concat(t))))}),(0,d.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_hs_arrow_wrapper_",children:[(0,d.jsx)("div",{className:"tb_hs_arrow splide__arrow splide__arrow--prev tb_hs_arrow tb_hs_arrow_left__ tb__icon tb-arrow-left-alt",children:(0,d.jsx)("div",{})}),(0,d.jsx)("div",{className:"tb_hs_arrow splide__arrow splide__arrow--next  tb_hs_arrow_right__ tb__icon tb-arrow-right-alt ".concat(p.isShowMoreLoading?"tb_a_spinner":""),onClick:c.ig?e=>this.requestData():null,children:(0,d.jsx)("div",{})})]})]}):null}):null})}}const T=(0,o.$j)((e=>({loaderData:e.loaderData})),(e=>({getDataNextSteps:(t,s,a,o,i,n,r,l)=>e((0,f.Sx)(t,s,a,o,i,n,r,l))})))(k)},50247:()=>{}}]);