(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[1960,8342,9239,5790],{89239:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>i});var a=s(47313),n=s(17739),o=s(98935),r=s(46417);class i extends a.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:s}=this.props;return(0,r.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,r.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,n.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,r.jsx)(o.Z,{authorClass:e,username:t.name,network:s,color:null===s.id?"#000":s.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});var a=s(47313),n=s(46417);const o=t=>{let{username:e,network:s,authorClass:a,errorPic:o}=t;const r="#ffffff"==s.color?"#000":s.color;return(0,n.jsx)("img",{className:"".concat(a,"__"),src:o||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":r).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},r=(0,a.memo)(o)},25810:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>i});var a=s(47313),n=s(35179),o=s(46417);const r=a.lazy((()=>s.e(5867).then(s.bind(s,95867))));class i extends a.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:s,isDefault:i,Personalization:c}=this.props,l=!!i&&(7!==t.id&&4!==t.id&&36!==t.id),d=n.ZQ&&36==t.id?"tagembed":t.icon;return l?(0,o.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,o.jsx)("div",{})}):(0,o.jsxs)(a.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(r,{network:t,networkClass:e})]})}}},62245:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>c});var a=s(47313),n=s(16390),o=s(17739),r=(s(35179),s(25810),s(46417));const i=a.lazy((()=>Promise.all([s.e(622),s.e(584)]).then(s.bind(s,30584))));class c extends a.PureComponent{constructor(t){super(t),this.contentRef=a.createRef()}componentDidMount(){setTimeout((()=>{var t,e;const s=(null===(t=this.contentRef)||void 0===t||null===(e=t.current)||void 0===e?void 0:e.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(s)}),100)}render(){const{contentClass:t,content:e,ThemeRule:s,font:c,personalization:l,item:d,contentTitle:p,readMore:h,maxLength:_,textAlign:u,maxLines:m,isReadMore:b}=this.props,g={WebkitLineClamp:m,textAlign:s.textAlignment};u||s.textAlignment;let f=20==d.network.id?e:(0,o.Fx)(e);12==d.network.id&&(f=(0,n.ZP)(f));const x="".concat(s.lineTrim?" tb_content_line-".concat(s.lineTrim):""),w="".concat(t," ").concat(b?"":x);return(0,r.jsxs)("div",{className:w,ref:this.contentRef,style:g,children:[p?(0,r.jsx)("div",{className:"tb_bold_txt__",children:(0,n.ZP)(p)}):null,(0,r.jsxs)(a.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:[" ",(0,r.jsx)(i,{data:d,content:f,Personalization:l})]})]})}}},5744:(t,e,s)=>{"use strict";s.d(e,{Z:()=>i});var a=s(47313),n=s(43635),o=s(35179),r=s(46417);class i extends a.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:s,wallID:a,ownerId:r}=this.props;e.stopPropagation(),o.ZQ||(0,n.S5)({type:2,action:2,wall:a,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:r}),(0,n.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,r.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,r.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(o.ZQ?"tb-share-fill":"tb-share"),children:(0,r.jsx)("div",{})}),(0,r.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,r.jsx)("div",{className:"tb_share_icon_list",children:(0,r.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,r.jsx)("div",{})})}):"",t.twitter?(0,r.jsx)("div",{className:"tb_share_icon_list",children:(0,r.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,r.jsx)("div",{})})}):"",t.linkedin?(0,r.jsx)("div",{className:"tb_share_icon_list",children:(0,r.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,r.jsx)("div",{})})}):""]})]})}}},55790:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>i});var a=s(47313),n=s(17739),o=s(46417);const r=t=>{const{postTime:e,timeClass:s}=t;return(0,o.jsx)("div",{className:s,children:(0,n.Sy)(e)})},i=(0,a.memo)(r)},12465:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>j});var a=s(47313),n=s(61395),o=s.n(n),r=s(89239),i=s(55790),c=s(46417);const l=t=>{let{author:e,personalization:s,postTime:a,network:n,ThemeRule:o,ownerId:l}=t;const d=e.username&&e.username.length>0?"@".concat(e.username):"",p=!(!s.postAuthor||e.isInstaUser),h=!(!s.postAuthor||!s.postTime||e.isInstaUser);return(0,c.jsx)("div",{className:"tb_gp_author_wrapper",children:(0,c.jsxs)("div",{className:"tb_gp_author",children:[p?(0,c.jsx)(r.default,{author:e,authorClass:"tb_gp_author_profile",network:n}):"",(0,c.jsxs)("div",{className:"tb_gp_author_info",children:[p?(0,c.jsx)("div",{className:"tb_gp_authorname",children:e.name}):"",(0,c.jsxs)("div",{className:"tb_gp_post_info".concat(h?"":" tb_gp_post_info__"),children:[p?(0,c.jsx)("div",{className:"tb_gp_username",children:d}):"",h?(0,c.jsx)("div",{className:"tb_gp_seprator",children:" "}):"",s.postTime?(0,c.jsx)(i.default,{postTime:a,timeClass:"tb_gp_time tb-cTBfont-".concat(o.font_varient),authorColor:o.authorColor}):""]})]})]})})};var d=s(5744),p=s(84261),h=s(81349),_=s(35179);class u extends a.PureComponent{render(){const{itemData:t,wallID:e,themeID:s,ownerId:a}=this.props;return(0,c.jsxs)("div",{className:"tb_gp_media_wrap",children:[(0,c.jsx)(h.Z,{itemData:t,IconClass:"tb_gp_media_icon",position:1,show:!0,isCenter:_.ZQ}),(0,c.jsx)(p.default,{ImageClass:"tb_gp_image",data:t,wallID:e,themeID:s,ownerId:a,size:100})]})}}var m=s(62245),b=s(25810),g=s(17739);class f extends a.PureComponent{constructor(t){super(t),this.cardSize=a.createRef()}componentDidMount(){const t=document.querySelector(".tb_gp_post_container");setTimeout((()=>{this.cardSize.current.offsetWidth<250&&t.classList.add("tb_gp_post_wrapper2x"),this.cardSize.current.offsetWidth<120&&t.classList.add("tb_gp_post_wrapper1x"),_.nX&&(0,g.YN)(this.cardSize)}),100)}render(){const{itemData:t,personalization:e,adjustWidth:s,ThemeRule:a,clickToShowPopUp:n,itemIndex:o,wallID:r,ownerId:i,onClickToCTA:p}=this.props,h={width:"".concat(s,"%"),padding:e.padding/2},g=1!==t.type,f=7===t.network.id,x=!!(t.ugc_products&&t.ugc_products.length>0),w=!(!x||0!==t.hotspot),v=!(!t.hotspot||!x),j=0==a.postHover&&_.ig?"light":"dark",k=_.Jx?"tb_gp_color_overlay":"tb_gp_post_overlay-"+j,I={backgroundColor:_.Jx?a.cardColor:""};return(0,c.jsx)("div",{id:"tb-gp-post-".concat(t.id),"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,className:"tb_gp_post_wrapper ".concat(_.ZQ?"tb_gp_post_wrapper_te":""),style:h,"tb-network":t.network.id,"tb-product":w?1:v?2:0,tabIndex:"0",role:"article","aria-label":"Post ".concat(parseInt(o)+1,",").concat(t.content),ref:this.cardSize,children:(0,c.jsx)("div",{className:"tb_gp_post_in".concat(_.ZQ?" tb_gp_post_ani":""),onClick:n(o,t),children:(0,c.jsxs)("div",{className:"tb_gp_post_media_wrapp",children:[t.share.status?(0,c.jsx)(d.Z,{share:t.share,shareClass:"tb_gp_share_container",item:t,wallID:r,ownerId:i}):null,g?(0,c.jsx)(u,{itemData:t,wallID:r,themeID:e.widgetTheme,ownerId:i},"img_gly_".concat(t.id)):"",_.ZQ||!f?(0,c.jsx)("div",{className:"tb_gp_contant_".concat(_.ZQ?" tb_gp_hover_content_":""),children:(0,c.jsxs)("div",{className:"tb_gp_contant__in",children:[(0,c.jsxs)("div",{className:"tb_gp_content__",children:[(0,c.jsx)(l,{adjustWidth:s,postTime:t.createdAt,network:t.network,ownerId:i,author:t.author,font:a,personalization:e,ThemeRule:a}),a.hideContent&&1!=t.type?"":(0,c.jsx)(m.default,{item:t,contentClass:"tb_gp_content",content:t.content,font:a,ThemeRule:a,personalization:e,contentTitle:t.contentTitle})]}),(0,c.jsx)("div",{className:"tb_gp_post_overlay ".concat(k),style:I,children:(0,c.jsx)("div",{})})]})}):"",(0,c.jsx)("div",{className:"tb_gp_social_",children:_.ZQ||!f?(0,c.jsx)(b.default,{networkClass:"tb_gp_social__ico",network:t.network,isDefault:1===a.iconType,ThemeRule:a}):""})]})})})}}var x=s(43411),w=s(43635);class v extends a.PureComponent{constructor(){super(...arguments),this.state={postData:[],windowWidth:window.innerWidth,containerWidth:0,loadData:0},this.onLoadMasonry=()=>{var t=document.querySelector(".tb_gp_post_container");if(t){const e=t.style.height;if(e){const t=e.split("px");t&&JSON.stringify(t)&&t[0]>0&&this.props.managePostHeight("".concat(e))}}},this.calculationData=(t,e,s,a)=>t>a&&t>a+s?{totalPostBestFit:a+s,isLastRow:!0}:{totalPostBestFit:a,isLastRow:!1}}componentDidMount(){const{postData:t,renderId:e}=this.props;setTimeout((()=>this.setState({postData:t,loadData:1},(()=>this.onLoadMasonry()))),100),e.renderId&&this.setState({windowWidth:document.getElementById(e.renderId).clientWidth})}componentWillReceiveProps(t){const{postData:e}=t;this.setState({postData:e,loadData:1},(()=>this.onLoadMasonry()))}render(){const{postData:t,completeDataObject:e,adjustWidth:s,wall:a,clickToShowPopUp:n,cardNumber:r,onClickToCTA:i}=this.props,{windowWidth:l,loadData:d}=this.state;var p={totalPostBestFit:0,isLastRow:!1};let h=0===a.ThemeRule.numberOfCoumn?Math.trunc(r)>5?5:Math.trunc(r):a.ThemeRule.numberOfCoumn;if(t.length>parseInt(r)){let e=parseInt(r);4===h?e=9:2===h?e=3:3===h?e=6:5===h&&(e=12),l<768&&(e=parseInt(r));let s=t.length/parseInt(e);p=parseInt(e)*parseInt(s),p=this.calculationData(t.length,e,h,p)}let _=0===a.ThemeRule.numberOfCoumn?Math.trunc(r)>5?5:Math.trunc(r)+1:a.ThemeRule.numberOfCoumn+1;return(0,c.jsx)(o(),{className:"tb_gp_post_container",tabIndex:"0","aria-label":"There are ".concat(t&&t.length>0?t.length:0," posts in the feed"),role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_gp_post_wrapper",resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:d?t&&t.length>0&&t.map(((t,o)=>{const r=e[t];let l=s;if(3===h&&_===o+1){l=2*s,_=_+2*h}else if(2===h&&_===o+1){l=2*s,_=_+(h+1)}else if(4===h&&_===o+1){l=2*s,_=_+(2*h+1)}else if(5===h&&_===o+1){l=2*s,_=_+(2*h+2)}return parseInt(p.totalPostBestFit)>=parseInt(o+1)?(0,c.jsx)(f,{ownerId:a.Wall.owner,itemData:r,itemIndex:o,adjustWidth:l,personalization:a.Personalization,ThemeRule:a.ThemeRule,clickToShowPopUp:n,wallID:a.Wall.id,onClickToCTA:i},o):0===parseInt(p.totalPostBestFit)?(0,c.jsx)(f,{ownerId:a.Wall.owner,itemData:r,itemIndex:o,adjustWidth:l,personalization:a.Personalization,ThemeRule:a.ThemeRule,clickToShowPopUp:n,wallID:a.Wall.id,onClickToCTA:i},"galry_".concat(r.id)):null})):null})}}const j=(0,x.$j)((t=>({})),(t=>({managePostHeight:e=>t((0,w.B0)(e))})))(v)},61729:(t,e,s)=>{"use strict";var a=s(79165);function n(){}function o(){}o.resetWarningCache=n,t.exports=function(){function t(t,e,s,n,o,r){if(r!==a){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function e(){return t}t.isRequired=t;var s={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:n};return s.PropTypes=s,s}},75192:(t,e,s)=>{t.exports=s(61729)()},79165:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},50247:()=>{}}]);