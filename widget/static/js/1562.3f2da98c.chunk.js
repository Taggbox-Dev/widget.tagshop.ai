(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[1562,5867,8342,9239,5790],{89239:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var i=s(47313),a=s(17739),c=s(98935),o=s(46417);class n extends i.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:s}=this.props;return(0,o.jsx)("div",{className:e,style:{overflow:4==s.id?"visible":""},children:this.state.isAuthorImagevalid?(0,o.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,a.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,o.jsx)(c.Z,{authorClass:e,username:t.name,network:s,color:null===s.id?"#000":s.color})},Math.random())}}},98935:(t,e,s)=>{"use strict";s.d(e,{Z:()=>a});s(47313);var i=s(46417);const a=t=>{let{username:e,network:s,authorClass:a}=t;return(0,i.jsx)("img",{className:"".concat(a,"__"),src:"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":s.color).replace("#",""),"&color=fff&length=1"),alt:e,width:44,height:44})}},97915:(t,e,s)=>{"use strict";s.d(e,{Z:()=>h});var i=s(47313),a=s(43411),c=s(83773),o=s(6119),n=s(17739),r=s(46417);const l=(0,c.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),d=t=>'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n  <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n  ").concat(t.product_discount>0&&t.product_price>t.product_discount?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_discount,"</div>"):"","\n  ").concat(t.product_price>0?'<div class="tb_p_tooltip_price">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"","\n  </a>");class _ extends i.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:s}=this.state,i=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return i.status?(0,r.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const a=(0,n.i1)();return(0,r.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(a),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(s==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,r.jsx)("div",{className:"tb_hotspot__ ".concat(0==i.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,r.jsx)(l,{children:(0,r.jsx)(o.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(a),clickable:!0,html:d(t.UgcProduct)})})]},e)}))}):null}}const h=(0,a.$j)((t=>({appData:t.appData})))(_)},84261:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>d});var i=s(47313),a=s(43635),c=s(97915),o=s(2406),n=s(17739),r=s(98501),l=s(46417);class d extends i.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:s}=await(0,o.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t})}catch(s){this.setState({paddingBottom:100})}},this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src})},this.state={loadError:!1,paddingBottom:100,imgUrl:this.props.data.postFileNew}}componentWillMount(){this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}componentDidMount(){this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}render(){const{ImageClass:t,data:e,wallID:s,themeID:i,ownerId:o,hotspot:d}=this.props,{imgUrl:_,paddingBottom:h}=this.state,p={paddingBottom:"".concat(h,"%")},b={backgroundImage:"url(".concat(_,")")},u=!!(e.hotspot&&e.ugc_products.length>0&&d);return(0,l.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:p,children:[u?(0,l.jsx)("div",{className:"tb_blur_bg_",style:b}):null,(0,l.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:{width:u?"":"100%"},children:[u?(0,l.jsx)(c.Z,{product:e.ugc_products}):null,(0,l.jsx)("img",{className:"".concat(t),role:"img",src:_,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":s,"data-owner-id":o,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":i,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(r.do,"/media/images/no-image.svg"),(0,a.ht)(t)},alt:(0,n.P)(_)})]})]})}}},81349:(t,e,s)=>{"use strict";s.d(e,{Z:()=>o});s(47313);var i=s(35179),a=s(95867),c=s(46417);const o=t=>{const{itemData:e,IconClass:s,show:o}=t,n=3===e.type||5===e.type,r=7===e.network.id,l=!!(e.imageList&&e.imageList.length>0),d=1===e.isAudio,_=!!(e.ugc_products&&e.ugc_products.length>0),h=(0,c.jsx)(a.default,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"}),p=(0,c.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:(0,c.jsx)("div",{})}),b=(0,c.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:(0,c.jsx)("div",{})}),u=(0,c.jsx)("div",{className:"tb_video_ico tb__icon tb-video",children:(0,c.jsx)("div",{})}),m=(0,c.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:(0,c.jsx)("div",{})}),x=(0,c.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:(0,c.jsx)("div",{})});return(_||l||n)&&o?(0,c.jsxs)("div",{className:"".concat(s," tb__media_ico_"),children:[_?m:"",l?p:"",n&&!r&&i.ZQ?x:"",n?r&&!i.ig?h:d?b:i.ZQ?x:u:""]}):null}},95867:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var i=s(47313),a=s(35179),c=s(46417);const o=i.memo((t=>{let{network:e,networkClass:s}=t;switch(e.id){case 1:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-twitter")});case 2:case 18:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-instagram-default"),children:(0,c.jsx)("div",{})});case 3:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-facebook"),children:(0,c.jsx)("div",{})});case 4:return(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-google-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})})]});case 5:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-pinterest"),children:(0,c.jsx)("div",{})});case 6:return(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-flickr-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})})]});case 7:return(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-youtube-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})})]});case 8:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-vimeo"),children:(0,c.jsx)("div",{})});case 10:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-linkedin"),children:(0,c.jsx)("div",{})});case 11:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-tumblr"),children:(0,c.jsx)("div",{})});case 12:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-rss"),children:(0,c.jsx)("div",{})});case 15:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-workplace"),children:(0,c.jsx)("div",{})});case 19:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-yelp"),children:(0,c.jsx)("div",{})});case 20:return(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-slack-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path8",children:(0,c.jsx)("div",{})})]});case 21:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-yammer"),children:(0,c.jsx)("div",{})});case 23:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-airbnb"),children:(0,c.jsx)("div",{})});case 25:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-soundcloud"),children:(0,c.jsx)("div",{})});case 26:return(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-giphy-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,c.jsx)("div",{})})]});case 28:return a.ZQ?(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-capterra-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1"}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2"}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3"}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4"})]}):(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-tiktok-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,c.jsx)("div",{})})]});case 29:return a.ZQ?(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-etsy"),children:(0,c.jsx)("div",{})}):(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-onsite-upload-default"),children:(0,c.jsx)("div",{})});case 30:case 32:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-vk"),children:(0,c.jsx)("div",{})});case 31:return(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-tiktok-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,c.jsx)("div",{})})]});case 33:return(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-trustpilot-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})})]});case 34:return(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-amazon-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})})]});case 35:return(0,c.jsx)("div",{className:"".concat(s," tb__icon tb-tripadvisor"),children:(0,c.jsx)("div",{})});case 36:return(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-tagembed-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})})]});case 37:return(0,c.jsxs)("div",{className:"".concat(s," tb__icon tb-aliexpress-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})})]});default:return""}}));class n extends i.PureComponent{render(){return(0,c.jsx)(o,{...this.props})}}},25810:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var i=s(47313),a=s(35179),c=s(17739),o=s(46417);const n=i.lazy((()=>s.e(5867).then(s.bind(s,95867))));class r extends i.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:s,isDefault:r,Personalization:l}=this.props,d=!!r&&(7!==t.id&&4!==t.id&&36!==t.id),_=a.ZQ&&36==t.id?"tagembed":t.icon;var h=[61,16,53,4,50,55].includes(parseInt(null===l||void 0===l?void 0:l.widgetTheme))?1==s.postHover?(0,c.uu)(s.iconColor,"#000000"):(0,c.uu)(s.iconColor,"#ffffff"):s.iconColor;const p=(0,c.mD)(59)?null:a.ig?a.Jc?(0,c.uu)(s.iconColor,s.cardColor):h:s.iconColor;return d?(0,o.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(_.replace(/fa-/g,"")),style:{color:p},children:(0,o.jsx)("div",{})}):(0,o.jsxs)(i.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(n,{network:t,networkClass:e})]})}}},62245:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var i=s(47313),a=s(16390),c=s(17739),o=(s(35179),s(25810),s(46417));const n=i.lazy((()=>Promise.all([s.e(622),s.e(584)]).then(s.bind(s,30584))));class r extends i.PureComponent{constructor(t){super(t),this.toggleExpanded=t=>{this.setState({expanded:!this.state.expanded}),t.stopPropagation()},this.state={expanded:!1}}render(){const{contentClass:t,content:e,ThemeRule:s,font:r,personalization:l,item:d,contentTitle:_,readMore:h,maxLength:p,textAlign:b,isNetwork:u}=this.props,{expanded:m}=this.state,x={textAlign:b||s.textAlignment};let v=20==d.network.id?e:(0,c.Fx)(e);12==d.network.id&&(v=(0,a.ZP)(v));const j=h?m?v:v.slice(0,p):v,g="".concat(t).concat(s.lineTrim?" tb_content_line-".concat(s.lineTrim):"").concat(s.font_varient?" tb-cTBfont-".concat(s.font_varient):"");return(0,o.jsxs)("div",{className:g,style:x,children:[_?(0,o.jsx)("div",{className:"tb_bold_txt__",children:(0,a.ZP)(_)}):null,(0,o.jsxs)(i.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(n,{data:d,content:j,Personalization:l})]}),h&&v.length>p&&(0,o.jsx)("div",{className:"tb_read_more_",onClick:this.toggleExpanded,children:m?"...Read Less...":"...Read More..."})]})}}},5744:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});var i=s(47313),a=s(43635),c=s(35179),o=s(46417);class n extends i.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:s,wallID:i,ownerId:o}=this.props;e.stopPropagation(),c.ZQ||(0,a.S5)({type:2,action:2,wall:i,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:o}),(0,a.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,o.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,o.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(c.ZQ?"tb-share-fill":"tb-share"),children:(0,o.jsx)("div",{})}),(0,o.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,o.jsx)("div",{className:"tb_share_icon_list",children:(0,o.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,o.jsx)("div",{})})}):"",t.twitter?(0,o.jsx)("div",{className:"tb_share_icon_list",children:(0,o.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,o.jsx)("div",{})})}):"",t.linkedin?(0,o.jsx)("div",{className:"tb_share_icon_list",children:(0,o.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,o.jsx)("div",{})})}):""]})]})}}},55790:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var i=s(47313),a=s(17739),c=s(46417);const o=t=>{const{postTime:e,timeClass:s}=t;return(0,c.jsx)("div",{className:s,children:(0,a.Sy)(e)})},n=(0,i.memo)(o)},12465:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>f});var i=s(47313),a=s(61395),c=s.n(a),o=s(89239),n=s(55790),r=s(46417);const l=t=>{let{author:e,personalization:s,postTime:i,network:a,ThemeRule:c,ownerId:l}=t;const d=e.username&&e.username.length>0?"@".concat(e.username):"",_=!(!s.postAuthor||e.isInstaUser),h=!(!s.postAuthor||!s.postTime||e.isInstaUser);return(0,r.jsx)("div",{className:"tb_gp_author_wrapper",children:(0,r.jsxs)("div",{className:"tb_gp_author",children:[_?(0,r.jsx)(o.default,{author:e,authorClass:"tb_gp_author_profile",network:a}):"",(0,r.jsxs)("div",{className:"tb_gp_author_info",children:[_?(0,r.jsx)("div",{className:"tb_gp_authorname",children:e.name}):"",(0,r.jsxs)("div",{className:"tb_gp_post_info".concat(h?"":" tb_gp_post_info__"),children:[_?(0,r.jsx)("div",{className:"tb_gp_username",children:d}):"",h?(0,r.jsx)("div",{className:"tb_gp_seprator",children:" "}):"",s.postTime?(0,r.jsx)(n.default,{postTime:i,timeClass:"tb_gp_time tb-cTBfont-".concat(c.font_varient),authorColor:c.authorColor}):""]})]})]})})};var d=s(5744),_=s(84261),h=s(81349);class p extends i.PureComponent{render(){const{itemData:t,wallID:e,themeID:s,ownerId:i}=this.props;return(0,r.jsxs)("div",{className:"tb_gp_media_wrap",children:[(0,r.jsx)(h.Z,{itemData:t,IconClass:"tb_gp_media_icon",position:1}),(0,r.jsx)(_.default,{ImageClass:"tb_gp_image",data:t,wallID:e,themeID:s,ownerId:i,size:100})]})}}var b=s(62245),u=s(25810),m=s(17739),x=s(35179);class v extends i.PureComponent{constructor(t){super(t),this.cardSize=i.createRef()}componentDidMount(){const t=document.querySelector(".tb_gp_post_container");setTimeout((()=>{this.cardSize.current.offsetWidth<250&&t.classList.add("tb_gp_post_wrapper2x"),this.cardSize.current.offsetWidth<120&&t.classList.add("tb_gp_post_wrapper1x"),x.nX&&(0,m.YN)(this.cardSize)}),100)}render(){const{itemData:t,personalization:e,adjustWidth:s,ThemeRule:i,clickToShowPopUp:a,itemIndex:c,wallID:o,ownerId:n,onClickToCTA:_}=this.props,h={backgroundColor:x.ZQ?null:i.cardColor},m={width:"".concat(s,"%"),padding:e.padding/2},v=2===t.type||3===t.type||4===t.type||5===t.type,j=7===t.network.id,g=!!(t.ugc_products&&t.ugc_products.length>0),N=!(!g||0!==t.hotspot),f=!(!t.hotspot||!g);return(0,r.jsx)("div",{id:"tb-gp-post-".concat(t.id),"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,className:"tb_gp_post_wrapper ".concat(x.ZQ?"tb_gp_post_wrapper_te":""),style:m,"tb-network":t.network.id,"tb-product":N?1:f?2:0,tabIndex:"0",role:"article","aria-label":"Post ".concat(parseInt(c)+1,",").concat(t.content),ref:this.cardSize,children:(0,r.jsx)("div",{className:"tb_gp_post_in",onClick:a(c,t),children:(0,r.jsxs)("div",{className:"tb_gp_post_media_wrapp",children:[t.share.status?(0,r.jsx)(d.Z,{share:t.share,shareClass:"tb_gp_share_container",item:t,wallID:o,ownerId:n}):null,v?(0,r.jsx)(p,{itemData:t,wallID:o,themeID:e.widgetTheme,ownerId:n},"img_gly_".concat(t.id)):"",x.ZQ||!j?(0,r.jsx)("div",{className:"tb_gp_contant_".concat(x.ZQ?" tb_gp_hover_content_":""),children:(0,r.jsxs)("div",{className:"tb_gp_contant__in",children:[(0,r.jsxs)("div",{className:"tb_gp_content__",children:[(0,r.jsx)(l,{adjustWidth:s,postTime:t.createdAt,network:t.network,ownerId:n,author:t.author,font:i,personalization:e,ThemeRule:i}),i.hideContent&&1!=t.type?"":(0,r.jsx)(b.default,{item:t,contentClass:"tb_gp_content",content:t.content,font:i,ThemeRule:i,personalization:e,contentTitle:t.contentTitle})]}),(0,r.jsx)("div",{className:"tb_gp_post_overlay",style:h,children:(0,r.jsx)("div",{})})]})}):"",(0,r.jsx)("div",{className:"tb_gp_social_",children:x.ZQ||!j?(0,r.jsx)(u.default,{networkClass:"tb_gp_social__ico",network:t.network,isDefault:1===i.iconType,ThemeRule:i}):""})]})})})}}var j=s(43411),g=s(43635);class N extends i.PureComponent{constructor(){super(...arguments),this.state={postData:[],windowWidth:window.innerWidth,containerWidth:0,loadData:0},this.onLoadMasonry=()=>{var t=document.querySelector(".tb_gp_post_container");if(t){const e=t.style.height;if(e){const t=e.split("px");t&&JSON.stringify(t)&&t[0]>0&&this.props.managePostHeight("".concat(e))}}},this.calculationData=(t,e,s,i)=>t>i&&t>i+s?{totalPostBestFit:i+s,isLastRow:!0}:{totalPostBestFit:i,isLastRow:!1}}componentDidMount(){const{postData:t,renderId:e}=this.props;setTimeout((()=>this.setState({postData:t,loadData:1},(()=>this.onLoadMasonry()))),100),e.renderId&&this.setState({windowWidth:document.getElementById(e.renderId).clientWidth})}componentWillReceiveProps(t){const{postData:e}=t;this.setState({postData:e,loadData:1},(()=>this.onLoadMasonry()))}render(){const{postData:t,completeDataObject:e,adjustWidth:s,wall:i,clickToShowPopUp:a,cardNumber:o,onClickToCTA:n}=this.props,{windowWidth:l,loadData:d}=this.state;var _={totalPostBestFit:0,isLastRow:!1};let h=0===i.ThemeRule.numberOfCoumn?Math.trunc(o)>5?5:Math.trunc(o):i.ThemeRule.numberOfCoumn;if(t.length>parseInt(o)){let e=parseInt(o);4===h?e=9:2===h?e=3:3===h?e=6:5===h&&(e=12),l<768&&(e=parseInt(o));let s=t.length/parseInt(e);_=parseInt(e)*parseInt(s),_=this.calculationData(t.length,e,h,_)}let p=0===i.ThemeRule.numberOfCoumn?Math.trunc(o)>5?5:Math.trunc(o)+1:i.ThemeRule.numberOfCoumn+1;return(0,r.jsx)(c(),{className:"tb_gp_post_container",tabIndex:"0","aria-label":"There are ".concat(t&&t.length>0?t.length:0," posts in the feed"),role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_gp_post_wrapper",resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:d?t&&t.length>0&&t.map(((t,c)=>{const o=e[t];let l=s;if(3===h&&p===c+1){l=2*s,p=p+2*h}else if(2===h&&p===c+1){l=2*s,p=p+(h+1)}else if(4===h&&p===c+1){l=2*s,p=p+(2*h+1)}else if(5===h&&p===c+1){l=2*s,p=p+(2*h+2)}return parseInt(_.totalPostBestFit)>=parseInt(c+1)?(0,r.jsx)(v,{ownerId:i.Wall.owner,itemData:o,itemIndex:c,adjustWidth:l,personalization:i.Personalization,ThemeRule:i.ThemeRule,clickToShowPopUp:a,wallID:i.Wall.id,onClickToCTA:n},c):0===parseInt(_.totalPostBestFit)?(0,r.jsx)(v,{ownerId:i.Wall.owner,itemData:o,itemIndex:c,adjustWidth:l,personalization:i.Personalization,ThemeRule:i.ThemeRule,clickToShowPopUp:a,wallID:i.Wall.id,onClickToCTA:n},"galry_".concat(o.id)):null})):null})}}const f=(0,j.$j)((t=>({})),(t=>({managePostHeight:e=>t((0,g.B0)(e))})))(N)},61729:(t,e,s)=>{"use strict";var i=s(79165);function a(){}function c(){}c.resetWarningCache=a,t.exports=function(){function t(t,e,s,a,c,o){if(o!==i){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}function e(){return t}t.isRequired=t;var s={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:c,resetWarningCache:a};return s.PropTypes=s,s}},75192:(t,e,s)=>{t.exports=s(61729)()},79165:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},50247:()=>{}}]);