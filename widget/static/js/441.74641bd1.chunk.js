"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[441],{60441:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});var l=a(47313),s=a(83773),n=a(43411),i=a(43635),o=a(35179),r=a(46417);const d=l.lazy((()=>a.e(7018).then(a.bind(a,7018)))),p=l.lazy((()=>a.e(4792).then(a.bind(a,84792)))),c=l.lazy((()=>a.e(1819).then(a.bind(a,61819)))),h=l.lazy((()=>Promise.all([a.e(6119),a.e(510),a.e(6390),a.e(6158),a.e(2314)]).then(a.bind(a,95136)))),u=l.lazy((()=>Promise.all([a.e(6390),a.e(5210)]).then(a.bind(a,95289)))),g=l.lazy((()=>a.e(9065).then(a.bind(a,89065)))),b=l.lazy((()=>a.e(8257).then(a.bind(a,28257)))),m=(0,s.componentWillAppendToBody)((e=>{let{children:t,wallId:a}=e;return a?(0,r.jsx)("div",{"data-widget-id":a,children:t}):null}));class _ extends l.PureComponent{constructor(e){super(e),this.togglePopup=()=>{this.setState((e=>({isPopupVisible:!e.isPopupVisible,showFirstButton:!e.showFirstButton})))},this.toggleDivs=()=>{this.setState((e=>({toggleSticky:!e.isClickStoped&&!e.toggleSticky})))},this.autoLoadEditorScrollData=e=>{const{wall:t,appendData:a,loaderData:l}=this.props,s=t.ThemeRule.numberOfPosts;if(1===t.Personalization.autoScrollStatus){let e=document.getElementById("BadgeThemeScroll");if(e){document.body.scrollHeight;let n=e.scrollTop,i=e.scrollHeight;if(n+e.clientHeight>=i-10&&(!l||!l.isShowMoreLoading)){const e=Math.floor(Date.now()/1e3);this.props.getDataNextSteps(t.Wall.id,e,s,a.networkID,a.after,a.heightEvent)}}}},this.state={isClickStoped:!1,isPopupVisible:!1,showFirstButton:!0,toggleSticky:!1},this.interval=null}componentDidMount(){this.interval=setInterval(this.toggleDivs,1e4);let e=document.getElementById("BadgeThemeScroll");e&&e.addEventListener("scroll",this.autoLoadEditorScrollData)}componentWillUnmount(){clearInterval(this.interval)}render(){var e;const{postData:t,completeDataObject:a,adjustWidth:s,wall:n,reviewFilters:i,languageSetting:_,appendData:j,appData:x,filter_tags:w,webFilters:S,isFreeAdsStatus:v}=this.props,{isPopupVisible:D,showFirstButton:y,toggleSticky:k}=this.state,f=!!(n.Banner&&Object.keys(n.Banner).length>0&&(1===n.Banner.status&&1===n.Banner.banner_position||1===n.BannerImage.status)),B=!!(n.Banner&&Object.keys(n.Banner).length>0&&1===n.Banner.status&&2===n.Banner.banner_position),F=!!(n.Banner&&Object.keys(n.Banner).length>0&&1===n.Banner.status&&6==n.Banner.bannerType),P=o.ZQ?1===n.Personalization.filterStatus:!!(S&&S.length>1);l.Suspense,r.Fragment,n.Personalization.filter_type,t.appendData;const z=Object.keys(a).map((e=>a[e])).sort((()=>Math.random()-Math.random())).find((()=>!0));return(0,r.jsxs)("div",{className:"tb_bt__container",children:[(0,r.jsx)(m,{wallId:null===n||void 0===n||null===(e=n.Wall)||void 0===e?void 0:e.id,children:(0,r.jsxs)("div",{className:"tb_bt_popup_wrapper tb_bt_popup_show",style:{display:D?null:"none"},children:[(0,r.jsx)("div",{className:"tb_bt_popup_close_btn",onClick:this.togglePopup,children:(0,r.jsx)("div",{className:"tb_bt_popup_close_ico tb__icon tb-close-alt"})}),(0,r.jsx)("div",{className:"tb_bt_head_title",children:"What our customer say"}),(0,r.jsxs)("div",{className:"tb_bt_post_wrap",id:"BadgeThemeScroll",children:[F&&f?(0,r.jsx)(l.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(p,{reviewFilters:i,wall:n,appendData:j,languageSetting:_})}):null,P?(0,r.jsx)(l.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(c,{type:n.Personalization.filter_type,webFilters:S,filter_tags:w,appendData:j,wall:n,languageSetting:_,postData:t})}):null,(0,r.jsx)(l.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(h,{...this.props})}),1===n.Personalization.loadMoreStatus?(0,r.jsx)(l.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(b,{languageSetting:_,wall:n,appendData:j,postData:x.postData})}):null,F&&B?(0,r.jsx)(l.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(p,{reviewFilters:i,wall:n,appendData:j,languageSetting:_})}):null]})]})}),(0,r.jsx)("div",{className:"tb_bt_wrapper",children:y&&(0,r.jsxs)("div",{className:"tb_bt_post_wrapper",children:[k?null:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"tb_bt_average_sticky ".concat(k?"":"tb_bt_show"),children:(0,r.jsx)(l.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(g,{ThemeRule:n.ThemeRule,reviewFilters:i,togglePopup:this.togglePopup})})}),v?(0,r.jsxs)(l.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:[(0,r.jsx)(d,{languageSetting:_,wallId:n.Wall.id,themeID:n.Personalization.widgetTheme})," "]}):null]}),t&&t.length>0&&k&&(0,r.jsx)("div",{className:"tb_bt_post_contain ".concat(k?"tb_bt_show":""),children:(0,r.jsx)(l.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(u,{ownerId:n.Wall.owner,itemData:z,itemIndex:z.id,adjustWidth:s,personalization:n.Personalization,ThemeRule:n.ThemeRule,wallID:n.Wall.id,toggleDivs:this.toggleDivs},z.id)},z.id)})]})})]})}}const j=(0,n.$j)((e=>({appData:e.appData})),(e=>({getDataNextSteps:(t,a,l,s,n,o,r)=>e((0,i.Sx)(t,a,l,s,n,o,r))})))(_)}}]);