"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4735,6538,5867,9239,5790],{66538:(t,e,s)=>{s.r(e),s.d(e,{default:()=>d});var i=s(47313),a=s(97914),c=s(43411),o=s(98501),l=s(43635),n=s(35179),r=s(46417);class _ extends i.PureComponent{render(){const{UgcSettings:t,id:e,tagShopWallId:s}=this.props;var i=window.ugcSuite||window.location.href.includes("ugcSuite=1")?{ugcSuite:1}:{};const c=Object.keys(i).length>0?"&ugcSuite=1":"",l=!(s||!n.ig),_=t.onsite_qr_code_status||""!=t.onsite_qr_code_btn_text?t.onsite_qr_code_btn_text:"",d=n.ig?"".concat(o.oC,"/").concat(e,"/onsite-upload").concat(l?"?wall=1":""):"".concat(o.nn,"/").concat(e,"?onsite-upload=true").concat(c);return!t.onsite_status||!n.ig&&!t.onsite_button_status||1!=t.onsite_qr_code_status&&""===_?null:(0,r.jsx)("div",{className:"tb_onsite_upload_btn_wrap",children:(0,r.jsx)("div",{className:"tb_onsite_upload_btn",children:(0,r.jsx)("div",{className:"tb_onsite_btn",onClick:()=>this.props.onSitePopup(!0),children:(0,r.jsxs)("div",{className:"tb_onsite_qr_btn_wrap",children:[1==t.onsite_qr_code_status?(0,r.jsx)("div",{className:"tb_onsite_qr_code",children:(0,r.jsx)(a.ZP,{level:"L",size:60,value:d})}):null,""!==_?(0,r.jsx)("div",{className:"tb_onsite_btn_txt tb-cTBfont-".concat(t.onsite_font_varient_btn),children:_}):""]})})})})}}const d=(0,c.$j)((t=>({modalPop:t.modalPop})),(t=>({onSitePopup:e=>t((0,l.wg)(e))})))(_)},89239:(t,e,s)=>{s.r(e),s.d(e,{default:()=>l});var i=s(47313),a=s(17739),c=s(98935),o=s(46417);class l extends i.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:s}=this.props;return(0,o.jsx)("div",{className:e,style:{overflow:4==s.id?"visible":""},children:this.state.isAuthorImagevalid?(0,o.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,a.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,o.jsx)(c.Z,{authorClass:e,username:t.name,network:s,color:null===s.id?"#000":s.color})},Math.random())}}},98935:(t,e,s)=>{s.d(e,{Z:()=>a});s(47313);var i=s(46417);const a=t=>{let{username:e,network:s,authorClass:a}=t;return(0,i.jsx)("img",{className:"".concat(a,"__"),src:"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":s.color).replace("#",""),"&color=fff&length=1"),alt:e,width:44,height:44})}},81349:(t,e,s)=>{s.d(e,{Z:()=>o});s(47313);var i=s(35179),a=s(95867),c=s(46417);const o=t=>{const{itemData:e,IconClass:s,show:o}=t,l=3===e.type||5===e.type,n=7===e.network.id,r=!!(e.imageList&&e.imageList.length>0),_=1===e.isAudio,d=!!(e.ugc_products&&e.ugc_products.length>0),h=(0,c.jsx)(a.default,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"}),b=(0,c.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:(0,c.jsx)("div",{})}),p=(0,c.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:(0,c.jsx)("div",{})}),m=(0,c.jsx)("div",{className:"tb_video_ico tb__icon tb-video",children:(0,c.jsx)("div",{})}),x=(0,c.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:(0,c.jsx)("div",{})}),u=(0,c.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:(0,c.jsx)("div",{})});return(d||r||l)&&o?(0,c.jsxs)("div",{className:"".concat(s," tb__media_ico_"),children:[d?x:"",r?b:"",l&&!n&&i.ZQ?u:"",l?n&&!i.ig?h:_?p:i.ZQ?u:m:""]}):null}},95867:(t,e,s)=>{s.r(e),s.d(e,{default:()=>l});var i=s(47313),a=s(35179),c=s(46417);const o=i.memo((t=>{let{network:e,networkClass:s}=t;switch(e.id){case 1:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-twitter")});case 2:case 18:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-instagram-default"),children:(0,c.jsx)("div",{})});case 3:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-facebook"),children:(0,c.jsx)("div",{})});case 4:return(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-google-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})})]});case 5:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-pinterest"),children:(0,c.jsx)("div",{})});case 6:return(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-flickr-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})})]});case 7:return(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-youtube-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})})]});case 8:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-vimeo"),children:(0,c.jsx)("div",{})});case 10:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-linkedin"),children:(0,c.jsx)("div",{})});case 11:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-tumblr"),children:(0,c.jsx)("div",{})});case 12:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-rss"),children:(0,c.jsx)("div",{})});case 15:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-workplace"),children:(0,c.jsx)("div",{})});case 19:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-yelp"),children:(0,c.jsx)("div",{})});case 20:return(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-slack-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path8",children:(0,c.jsx)("div",{})})]});case 21:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-yammer"),children:(0,c.jsx)("div",{})});case 23:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-airbnb"),children:(0,c.jsx)("div",{})});case 25:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-soundcloud"),children:(0,c.jsx)("div",{})});case 26:return(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-giphy-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,c.jsx)("div",{})})]});case 28:return a.ZQ?(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-capterra-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1"}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2"}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3"}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4"})]}):(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-tiktok-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,c.jsx)("div",{})})]});case 29:return a.ZQ?(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-etsy"),children:(0,c.jsx)("div",{})}):(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-onsite-upload-default"),children:(0,c.jsx)("div",{})});case 30:case 32:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-vk"),children:(0,c.jsx)("div",{})});case 31:return(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-tiktok-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,c.jsx)("div",{})})]});case 33:return(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-trustpilot-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})})]});case 34:return(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-amazon-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})})]});case 35:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-tripadvisor"),children:(0,c.jsx)("div",{})});case 36:return(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-tagembed-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})})]});case 37:return(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-aliexpress-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})})]});default:return""}}));class l extends i.PureComponent{render(){return(0,c.jsx)(o,{...this.props})}}},55790:(t,e,s)=>{s.r(e),s.d(e,{default:()=>l});var i=s(47313),a=s(17739),c=s(46417);const o=t=>{const{postTime:e,timeClass:s}=t;return(0,c.jsx)("div",{className:s,children:(0,a.Sy)(e)})},l=(0,i.memo)(o)},91744:(t,e,s)=>{s.r(e),s.d(e,{default:()=>C});var i=s(47313),a=s(43411),c=s(11774),o=s(44084),l=s(89239),n=s(55790),r=s(25810),_=s(35179),d=s(46417);const h=t=>{let{author:e,personalization:s,postTime:i,network:a,ThemeRule:c,font:o}=t;const h=!(!s.postAuthor||e.isInstaUser),b=!(!s.postAuthor||!s.postTime||e.isInstaUser);return(0,d.jsxs)("div",{className:"tb_gt_author_wrapper ".concat(_.ZQ?"tb_gt_author_wrapper_top":""),children:[(0,d.jsxs)("div",{className:"tb_gt_author",children:[h?(0,d.jsx)(l.default,{network:a,author:e,authorClass:"tb_gt_author_profile"}):"",(0,d.jsxs)("div",{className:"tb_gt_author_info",children:[h?(0,d.jsx)("div",{className:"tb_gt_authorname",children:e.name}):"",(0,d.jsxs)("div",{className:"tb_gt_post_info",children:[h?(0,d.jsx)("div",{className:"tb_gt_username",children:"@".concat(e.username)}):"",b?(0,d.jsx)("div",{className:"tb_gt_seprator",children:" "}):"",s.postTime?(0,d.jsx)(n.default,{postTime:i,timeClass:"tb_gt_time tb-cTBfont-".concat(c.font_varient),authorColor:c.authorColor}):""]})]})]}),_.ZQ?null:(0,d.jsx)("div",{className:"tb_gt_social_",children:(0,d.jsx)(r.default,{networkClass:"tb_gt_social__ico",network:a,isDefault:1===c.iconType,ThemeRule:c})})]})};var b=s(81349),p=s(84261);const m=i.lazy((()=>Promise.resolve().then(s.bind(s,25810)))),x=t=>{let{itemData:e,wallID:s,ThemeID:a,ownerId:c,wall:o}=t;const l=!e.hotspot;return(0,d.jsxs)("div",{className:"tb_gt_media_wrap",children:[_.ZQ?(0,d.jsx)("div",{className:"tb_gt_social_top_",children:(0,d.jsx)(i.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(m,{networkClass:"tb_gt_social__ico",network:e.network,isDefault:1===o.ThemeRule.iconType,ThemeRule:o.ThemeRule})})}):null,(0,d.jsx)(b.Z,{itemData:e,IconClass:"tb_gt_media_icon",show:l}),(0,d.jsx)(p.default,{ImageClass:"tb_gt_image",data:e,wallID:s,themeID:a,ownerId:c,size:100,hotspot:!!e.hotspot})]})};var u=s(17739),v=s(11502);const j=i.lazy((()=>Promise.all([s.e(6390),s.e(8342)]).then(s.bind(s,62245)))),g=_.ZQ?null:200,N=t=>{let{itemData:e,personalization:s,ThemeRule:a,clickToShowPopUp:c,itemIndex:o,wallID:l,ownerId:n,postSizeInPx:b,wall:p}=t;const m=2===e.type||3===e.type||4===e.type||5===e.type,N=s.trimcontent?(0,u.Sv)(e.content,g):e.content,w=b.adjustWidth<250,f=_.ig&&1==a.postHover?" tb_sp_post_overlay-light":" tb_sp_post_overlay-dark",k=!!(e.hotspot&&e.ugc_products.length>0),T=!!(_.ig&&!e.hotspot&&e.ugc_products.length>0);return(0,d.jsx)("div",{id:"tb-hs-post-".concat(e.id),className:"tb_gt_post_wrapper".concat(w?" tb_gt_post_wrapper2x":""),"tb-network":e.network.id,"tb-product":T?1:k?2:0,children:(0,d.jsx)("div",{className:"tb_gt_post_in",onClick:c(o,e),children:(0,d.jsxs)("div",{className:"tb_gt_post_media_wrapp",children:[m?(0,d.jsx)(x,{itemData:e,wallID:l,wall:p,ownerId:n}):"",k?null:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"tb_gt_post_details",children:[_.ig?(0,d.jsx)("div",{className:"tb_gt_social_",children:(0,d.jsx)(r.default,{networkClass:"tb_gt_social__ico",network:e.network,isDefault:1===a.iconType,ThemeRule:a,Personalization:s})}):null,T?(0,d.jsx)(v.Z,{ThemeRule:a,btnClass:"tb_gt_btn_wrap"}):null,_.ig?null:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"tb_gt_contant_wrapper",children:a.hideContent&&1!=e.type?"":(0,d.jsx)(i.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(j,{contentClass:"tb_gt_content",item:e,content:N,font:a,ThemeRule:a,personalization:s,contentTitle:e.contentTitle})})}),(0,d.jsx)(i.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(h,{ownerId:n,postTime:e.createdAt,author:e.author,network:e.network,font:a,personalization:s,ThemeRule:a})})]})]}),(0,d.jsx)("div",{className:"tb_gt_post_overlay".concat(f),style:{backgroundColor:_.Jx?a.cardColor:null},children:(0,d.jsx)("div",{})})]})]})})})};var w=s(66538);class f extends i.Component{constructor(t){super(t),this.state={snapBtnSize:0,sizeClass:""},this.updateDimensions=this.updateDimensions.bind(this)}componentDidMount(){window.addEventListener("resize",this.updateDimensions),this.updateDimensions()}componentWillUnmount(){window.removeEventListener("resize",this.updateDimensions)}componentDidUpdate(){this.updateDimensions()}updateDimensions(){const{className:t,wall:e}=this.props,s=this.divRef.offsetWidth;s!==this.state.snapBtnSize&&(s<200&&s>150?this.setState({sizeClass:"".concat(t,"-3x")}):s<150&&s>120?this.setState({sizeClass:"".concat(t,"-2x")}):s<120&&s>0&&this.setState({sizeClass:"".concat(t,"-1x")}),this.setState({snapBtnSize:s}))}render(){const{className:t,wall:e}=this.props,{sizeClass:s}=this.state;return(0,d.jsx)("div",{className:"".concat(t," ").concat(s),ref:t=>{this.divRef=t},children:(0,d.jsx)(w.default,{UgcSettings:e.UgcSettings,id:e.Wall.id,tagShopWallId:e.Wall.wallId})})}}const k=t=>{let{wall:e,itemData:s,completeDataObject:a,parentID:c,itemIndex:o,clickToShowPopUp:l,onClickToCTA:n,postSizeInPx:r,isOnsite:_}=t;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"tb_gt_post_small",children:[_?(0,d.jsx)("div",{className:"tb_gt_post_wrapper tb_onsite_post__",children:(0,d.jsxs)(i.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:[" ",(0,d.jsx)(f,{className:"tb_gt_post_in",wall:e})," "]})}):(0,d.jsx)(N,{parentID:c,ownerId:e.Wall.owner,wall:e,itemData:a[s[0]],itemIndex:o,personalization:e.Personalization,ThemeRule:e.ThemeRule,clickToShowPopUp:l,wallID:e.Wall.id,onClickToCTA:n,postSizeInPx:r}),(0,d.jsx)(N,{parentID:c,ownerId:e.Wall.owner,wall:e,itemData:a[s[1]],itemIndex:o,personalization:e.Personalization,ThemeRule:e.ThemeRule,clickToShowPopUp:l,wallID:e.Wall.id,onClickToCTA:n,postSizeInPx:r})]}),(0,d.jsx)("div",{className:"tb_gt_post_large",children:(0,d.jsx)(N,{parentID:c,ownerId:e.Wall.owner,wall:e,itemData:a[s[2]],itemIndex:o,personalization:e.Personalization,ThemeRule:e.ThemeRule,clickToShowPopUp:l,wallID:e.Wall.id,onClickToCTA:n,postSizeInPx:r})})]})};var T=s(43635);s(37210);class D extends i.PureComponent{constructor(t){super(t),this.requestData=()=>{const{appendData:t,wall:e,preRender:s,hasMoreData:i}=this.props;i&&(0,T.Sx)(e.Wall.id,Math.floor(Date.now()/1e3),e.ThemeRule.numberOfPosts,t.networkID,t.after,s,t.heightEvent)},this.state={parent_id:""},this.inputRefs={}}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((t,e)=>{t.removeAttribute("role")}))}),100)}render(){const{postData:t,completeDataObject:e,wall:s,clickToShowPopUp:i,onClickToCTA:a,postSizeInPx:l,parentID:n}=this.props,r=(s.UserRule.on_site_upload,n),h=s.ThemeRule.numberOfCoumn,b=s.ThemeRule.mobileColumn,p=s.ThemeRule.slidePost,m=s.ThemeRule.slideDuration,x=(s.Personalization.autoScrollStatus,{grid:{rows:s.ThemeRule.multiRow},rewind:!0,speed:1e3,interval:1===p?1e3*parseInt(m):5e3,perPage:h>0?h:_.ZQ||_.ig?3:6,perMove:1,gap:0,autoplay:1===p,padding:0,pagination:!1,arrows:!0,breakpoints:{560:{perPage:b>0?b:1},767:{perPage:b>0?b:2},991:{perPage:b>0?b:3},1200:{perPage:h>0?h:_.ig?3:4},1400:{perPage:h>0?h:_.ig?3:5},1600:{perPage:h>0?h:_.ZQ||_.ig?3:6}}}),u=[],v=!!s.UgcSettings.onsite_status;for(let c=0;c<t.length;){let e=0==c&&v?2:3;const s=2==e?[0].concat(t.slice(c,c+e)):t.slice(c,c+e);u.push(s),c+=e}return t&&t.length>2?(0,d.jsx)("div",{className:"tb_gt_post_container",children:(0,d.jsxs)(c.tv,{hasTrack:!1,className:"tb_gt_post_slider",options:x,extensions:{Grid:o.r},ref:t=>this.inputRefs[r]=t,children:[(0,d.jsx)(c.Gj,{children:u.map(((t,o)=>t&&3==t.length?(0,d.jsx)(c.jw,{id:"tb_gt-".concat(o),className:"tb_gt_post_row tb_".concat(o),idd:n,children:(0,d.jsx)(k,{parentID:n,ownerId:s.Wall.owner,wall:s,completeDataObject:e,itemIndex:o,personalization:s.Personalization,ThemeRule:s.ThemeRule,clickToShowPopUp:i,wallID:s.Wall.id,onClickToCTA:a,postSizeInPx:l,indexNo:o<6?o:"0",largeDiv:66.66,smallDiv:33.33,itemData:t,isOnsite:v&&0==o})},o):null))}),(0,d.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_gt_arrow_wrapper_",children:[(0,d.jsx)("div",{className:"tb_gt_arrow splide__arrow splide__arrow--prev tb_gt_arrow tb_gt_arrow_left__ tb__icon tb-arrow-left-alt",children:(0,d.jsx)("div",{})}),(0,d.jsx)("div",{className:"tb_gt_arrow splide__arrow splide__arrow--next  tb_gt_arrow_right__ tb__icon tb-arrow-right-alt",onClick:this.requestData,children:(0,d.jsx)("div",{})})]})]})}):null}}const C=(0,a.$j)((t=>({})),(t=>({getDataNextSteps:(e,s,i,a,c,o,l,n)=>t((0,T.Sx)(e,s,i,a,c,o,l,n))})))(D)}}]);