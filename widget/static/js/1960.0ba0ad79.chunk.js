(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[1960,8342],{62245:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>c});var n=s(47313),a=s(16390),o=s(17739),i=(s(35179),s(25810),s(46417));const r=n.lazy((()=>Promise.all([s.e(622),s.e(584)]).then(s.bind(s,30584))));class c extends n.PureComponent{constructor(t){super(t),this.contentRef=n.createRef()}componentDidMount(){setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){const{contentClass:t,content:e,ThemeRule:s,font:c,personalization:l,item:d,contentTitle:p,readMore:h,maxLength:_,textAlign:m,maxLines:u,isReadMore:b}=this.props,g={WebkitLineClamp:u,textAlign:s.textAlignment};m||s.textAlignment;let w=20==d.network.id?e:(0,o.Fx)(e);12==d.network.id&&(w=(0,a.ZP)(w));const x="".concat(s.lineTrim?" tb_content_line-".concat(s.lineTrim):""),f="".concat(t," ").concat(b?"":x);return(0,i.jsxs)("div",{className:f,ref:this.contentRef,style:g,children:[p?(0,i.jsx)("div",{className:"tb_bold_txt__",children:(0,a.ZP)(p)}):null,(0,i.jsxs)(n.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:[" ",(0,i.jsx)(r,{data:d,content:w,Personalization:l})]})]})}}},5744:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});var n=s(47313),a=s(43635),o=s(35179),i=s(46417);class r extends n.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:s,wallID:n,ownerId:i}=this.props;e.stopPropagation(),o.ZQ||(0,a.S5)({type:2,action:2,wall:n,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:i}),(0,a.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,i.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,i.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(o.ZQ?"tb-share-fill":"tb-share"),children:(0,i.jsx)("div",{})}),(0,i.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,i.jsx)("div",{className:"tb_share_icon_list",children:(0,i.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,i.jsx)("div",{})})}):"",t.twitter?(0,i.jsx)("div",{className:"tb_share_icon_list",children:(0,i.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,i.jsx)("div",{})})}):"",t.linkedin?(0,i.jsx)("div",{className:"tb_share_icon_list",children:(0,i.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,i.jsx)("div",{})})}):""]})]})}}},12465:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>I});var n=s(47313),a=s(61395),o=s.n(a),i=s(89239),r=s(55790),c=s(46417);const l=t=>{let{author:e,personalization:s,postTime:n,network:a,ThemeRule:o,ownerId:l}=t;const d=e.username&&e.username.length>0?"@".concat(e.username):"",p=!(!s.postAuthor||e.isInstaUser),h=!(!s.postAuthor||!s.postTime||e.isInstaUser);return(0,c.jsx)("div",{className:"tb_gp_author_wrapper",children:(0,c.jsxs)("div",{className:"tb_gp_author",children:[p?(0,c.jsx)(i.default,{author:e,authorClass:"tb_gp_author_profile",network:a}):"",(0,c.jsxs)("div",{className:"tb_gp_author_info",children:[p?(0,c.jsx)("div",{className:"tb_gp_authorname",children:e.name}):"",(0,c.jsxs)("div",{className:"tb_gp_post_info".concat(h?"":" tb_gp_post_info__"),children:[p?(0,c.jsx)("div",{className:"tb_gp_username",children:d}):"",h?(0,c.jsx)("div",{className:"tb_gp_seprator",children:" "}):"",s.postTime?(0,c.jsx)(r.default,{postTime:n,timeClass:"tb_gp_time tb-cTBfont-".concat(o.font_varient),authorColor:o.authorColor}):""]})]})]})})};var d=s(5744),p=s(84261),h=s(81349),_=s(35179);class m extends n.PureComponent{render(){const{itemData:t,wallID:e,themeID:s,ownerId:n}=this.props;return(0,c.jsxs)("div",{className:"tb_gp_media_wrap",children:[(0,c.jsx)(h.Z,{itemData:t,IconClass:"tb_gp_media_icon",position:1,show:!0,isCenter:_.ZQ}),(0,c.jsx)(p.default,{ImageClass:"tb_gp_image",data:t,wallID:e,themeID:s,ownerId:n,size:100})]})}}var u=s(62245),b=s(25810),g=s(17739);class w extends n.PureComponent{constructor(t){super(t),this.cardSize=n.createRef()}componentDidMount(){const t=document.querySelector(".tb_gp_post_container");setTimeout((()=>{this.cardSize.current.offsetWidth<250&&t.classList.add("tb_gp_post_wrapper2x"),this.cardSize.current.offsetWidth<120&&t.classList.add("tb_gp_post_wrapper1x"),_.nX&&(0,g.YN)(this.cardSize)}),100)}render(){const{itemData:t,personalization:e,adjustWidth:s,ThemeRule:n,clickToShowPopUp:a,itemIndex:o,wallID:i,ownerId:r,onClickToCTA:p}=this.props,h={width:"".concat(s,"%"),padding:e.padding/2},g=2===t.type||3===t.type||4===t.type||5===t.type,w=7===t.network.id,x=!!(t.ugc_products&&t.ugc_products.length>0),f=!(!x||0!==t.hotspot),j=!(!t.hotspot||!x),I=0==n.postHover&&_.ig?"light":"dark",T=_.Jx?"tb_gp_color_overlay":"tb_gp_post_overlay-"+I,v={backgroundColor:_.Jx?n.backgroundColor:""};return(0,c.jsx)("div",{id:"tb-gp-post-".concat(t.id),"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,className:"tb_gp_post_wrapper ".concat(_.ZQ?"tb_gp_post_wrapper_te":""),style:h,"tb-network":t.network.id,"tb-product":f?1:j?2:0,tabIndex:"0",role:"article","aria-label":"Post ".concat(parseInt(o)+1,",").concat(t.content),ref:this.cardSize,children:(0,c.jsx)("div",{className:"tb_gp_post_in".concat(_.ZQ?" tb_gp_post_ani":""),onClick:a(o,t),children:(0,c.jsxs)("div",{className:"tb_gp_post_media_wrapp",children:[t.share.status?(0,c.jsx)(d.Z,{share:t.share,shareClass:"tb_gp_share_container",item:t,wallID:i,ownerId:r}):null,g?(0,c.jsx)(m,{itemData:t,wallID:i,themeID:e.widgetTheme,ownerId:r},"img_gly_".concat(t.id)):"",_.ZQ||!w?(0,c.jsx)("div",{className:"tb_gp_contant_".concat(_.ZQ?" tb_gp_hover_content_":""),children:(0,c.jsxs)("div",{className:"tb_gp_contant__in",children:[(0,c.jsxs)("div",{className:"tb_gp_content__",children:[(0,c.jsx)(l,{adjustWidth:s,postTime:t.createdAt,network:t.network,ownerId:r,author:t.author,font:n,personalization:e,ThemeRule:n}),n.hideContent&&1!=t.type?"":(0,c.jsx)(u.default,{item:t,contentClass:"tb_gp_content",content:t.content,font:n,ThemeRule:n,personalization:e,contentTitle:t.contentTitle})]}),(0,c.jsx)("div",{className:"tb_gp_post_overlay ".concat(T),style:v,children:(0,c.jsx)("div",{})})]})}):"",(0,c.jsx)("div",{className:"tb_gp_social_",children:_.ZQ||!w?(0,c.jsx)(b.default,{networkClass:"tb_gp_social__ico",network:t.network,isDefault:1===n.iconType,ThemeRule:n}):""})]})})})}}var x=s(43411),f=s(43635);class j extends n.PureComponent{constructor(){super(...arguments),this.state={postData:[],windowWidth:window.innerWidth,containerWidth:0,loadData:0},this.onLoadMasonry=()=>{var t=document.querySelector(".tb_gp_post_container");if(t){const e=t.style.height;if(e){const t=e.split("px");t&&JSON.stringify(t)&&t[0]>0&&this.props.managePostHeight("".concat(e))}}},this.calculationData=(t,e,s,n)=>t>n&&t>n+s?{totalPostBestFit:n+s,isLastRow:!0}:{totalPostBestFit:n,isLastRow:!1}}componentDidMount(){const{postData:t,renderId:e}=this.props;setTimeout((()=>this.setState({postData:t,loadData:1},(()=>this.onLoadMasonry()))),100),e.renderId&&this.setState({windowWidth:document.getElementById(e.renderId).clientWidth})}componentWillReceiveProps(t){const{postData:e}=t;this.setState({postData:e,loadData:1},(()=>this.onLoadMasonry()))}render(){const{postData:t,completeDataObject:e,adjustWidth:s,wall:n,clickToShowPopUp:a,cardNumber:i,onClickToCTA:r}=this.props,{windowWidth:l,loadData:d}=this.state;var p={totalPostBestFit:0,isLastRow:!1};let h=0===n.ThemeRule.numberOfCoumn?Math.trunc(i)>5?5:Math.trunc(i):n.ThemeRule.numberOfCoumn;if(t.length>parseInt(i)){let e=parseInt(i);4===h?e=9:2===h?e=3:3===h?e=6:5===h&&(e=12),l<768&&(e=parseInt(i));let s=t.length/parseInt(e);p=parseInt(e)*parseInt(s),p=this.calculationData(t.length,e,h,p)}let _=0===n.ThemeRule.numberOfCoumn?Math.trunc(i)>5?5:Math.trunc(i)+1:n.ThemeRule.numberOfCoumn+1;return(0,c.jsx)(o(),{className:"tb_gp_post_container",tabIndex:"0","aria-label":"There are ".concat(t&&t.length>0?t.length:0," posts in the feed"),role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_gp_post_wrapper",resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:d?t&&t.length>0&&t.map(((t,o)=>{const i=e[t];let l=s;if(3===h&&_===o+1){l=2*s,_=_+2*h}else if(2===h&&_===o+1){l=2*s,_=_+(h+1)}else if(4===h&&_===o+1){l=2*s,_=_+(2*h+1)}else if(5===h&&_===o+1){l=2*s,_=_+(2*h+2)}return parseInt(p.totalPostBestFit)>=parseInt(o+1)?(0,c.jsx)(w,{ownerId:n.Wall.owner,itemData:i,itemIndex:o,adjustWidth:l,personalization:n.Personalization,ThemeRule:n.ThemeRule,clickToShowPopUp:a,wallID:n.Wall.id,onClickToCTA:r},o):0===parseInt(p.totalPostBestFit)?(0,c.jsx)(w,{ownerId:n.Wall.owner,itemData:i,itemIndex:o,adjustWidth:l,personalization:n.Personalization,ThemeRule:n.ThemeRule,clickToShowPopUp:a,wallID:n.Wall.id,onClickToCTA:r},"galry_".concat(i.id)):null})):null})}}const I=(0,x.$j)((t=>({})),(t=>({managePostHeight:e=>t((0,f.B0)(e))})))(j)},61729:(t,e,s)=>{"use strict";var n=s(79165);function a(){}function o(){}o.resetWarningCache=a,t.exports=function(){function t(t,e,s,a,o,i){if(i!==n){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function e(){return t}t.isRequired=t;var s={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:a};return s.PropTypes=s,s}},75192:(t,e,s)=>{t.exports=s(61729)()},79165:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},50247:()=>{}}]);