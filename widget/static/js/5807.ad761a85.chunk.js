"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[5807],{75807:(t,o,n)=>{n.r(o),n.d(o,{default:()=>m});var e=n(47313),a=n(31172),c=(n(34862),n(90182)),i=n(98501),r=n(17739),l=n(43635),s=n(35179);var g=n(46417);const d=(0,r.CL)()+1e3*((0,r.QM)()+60*((0,r.dn)()+60*(0,r.eZ)())),u=()=>(0,g.jsx)("script",{async:!0,children:'window.twttr = (function (d, s, id) {\n                            var js, fjs = d.getElementsByTagName(s)[0],\n                                t = window.twttr || {};\n                            if (d.getElementById(id)) return t;\n                            js = d.createElement(s);\n                            js.id = id;\n                            js.src = "https://platform.twitter.com/widgets.js";\n                            fjs.parentNode.insertBefore(js, fjs);\n\n                            t._e = [];\n                            t.ready = function (f) {\n                                                    t._e.push(f);\n                            };\n\n                            return t;\n                            }(document, "script", "twitter-wjs"));'}),p=t=>{const{cardStyle:o,ctaBtn:n,button:e,popUpProperties:a,ProductSettings:c,UgcSettings:i,heading:l,subheading:g}=(t=>{var o;const{ThemeRule:n,Personalization:e,ProductSetting:a,UgcSetting:c,Wall:i}=t,l="#ffffff",g="#000000",d="inherit";let u,p,h,b,f;"undefined"!==typeof a&&a?({Button:u,CatalogueTitle:p,Price:h,ProductTitle:b,Hotspot:f}=a):(p={fontLink:"",font:"",varient:"",size:"",color:"",text:""},b={fontLink:"",font:"",varient:"",size:"",color:""},h={fontLink:"",font:"",varient:"",size:"",color:""},u={fontLink:"",font:"",varient:"",size:"",background:"",color:"",text:"",newTab:""},f={type:"",background:"",color:"",status:""}),e.widgetTheme;const m=t=>{var o=[],a=[];s.ig&&(o=[61,16,53],a=[4,55,50]),s.ZQ&&(a=[4,55,16,56,50]);const c=!!o.includes(e.widgetTheme),i=!!a.includes(e.widgetTheme),d=c&&1==n.postHover||i?g:c&&0==n.postHover?l:S;return(0,r.uu)(t,d)},w=t=>{const o=t?t.split("-"):"";return{weight:o[0]?o[0]:"",style:o[1]?o[1]:""}},y=(t,o,n,e,a)=>t?n:""!=o?o:a,v=n.ctaData&&Object.keys(n.ctaData).length>0?n.ctaData:{},_=!(!n.inheritStyles||1!=n.inheritStyles),{authorColor:x,postHover:k,cardColor:S,iconColor:P,fontColor:W,css_font:z,fontSize:C,font_varient:j}=n;var T=document.querySelector("body"),L=document.querySelector("p"),B=T?window.getComputedStyle(T):L?window.getComputedStyle(L):"",H=B?B.getPropertyValue("font-size"):"",V=B?B.getPropertyValue("color"):"",U=B?B.getPropertyValue("font-family"):"",q=B?B.getPropertyValue("line-height"):"",D=B?B.getPropertyValue("font-weight"):"",F=B?B.getPropertyValue("font-style"):"",E=(T=document.querySelector("body"),L=document.querySelector("p"),document.querySelector("strong")),I=document.querySelector("h2"),R=document.querySelector("h3"),M=document.querySelector("h1"),Q=E?window.getComputedStyle(E):I?window.getComputedStyle(I):R?window.getComputedStyle(R):"",Z=document.querySelector(".tb_theme_title");if(Z)var A=Z.tagName;var N=document.querySelector(".tb_theme_sub_title");if(N)var O=N.tagName;var X=[],G=[];!function(t,o){document.querySelectorAll(t).forEach((function(t){t.classList.contains("tb_theme_title")||o(t)}))}(A,(function(t){var o=window.getComputedStyle(t),n=m(o.color),e=o.fontSize,a=o.fontWeight,c=o.fontFamily,i=o.textAlign;X.push(n,e,a,c,i)}));var J=X[0]?X[0]:d,K=X[1]?X[1]:d,Y=X[2]?X[2]:d,$=X[3]?X[3]:d,tt=X[4]?X[4]:d;!function(t,o){document.querySelectorAll(t).forEach((function(t){t.classList.contains("tb_theme_sub_title")||o(t)}))}(O,(function(t){var o=window.getComputedStyle(t),n=m(o.color),e=o.fontSize,a=o.fontWeight,c=o.fontFamily,i=o.textAlign;G.push(n,e,a,c,i)}));var ot,nt=G[0]?G[0]:d,et=G[1]?G[1]:d,at=G[2]?G[2]:d,ct=G[3]?G[3]:d,it=G[4]?G[4]:d,rt=E?window.getComputedStyle(E):M?window.getComputedStyle(M):I?window.getComputedStyle(I):R?window.getComputedStyle(R):"",lt=(rt&&rt.getPropertyValue("font-size"),Q?Q.getPropertyValue("color"):""),st=Q?Q.getPropertyValue("font-family"):"",gt=(Q&&Q.getPropertyValue("line-height"),Q?Q.getPropertyValue("font-weight"):""),dt=Q?Q.getPropertyValue("font-style"):"",ut=(Q&&Q.getPropertyValue("text-align"),document.querySelector("a")),pt=document.getElementsByTagName("button"),ht=((ot=ut?window.getComputedStyle(ut):pt.length>0?window.getComputedStyle(pt[0]):"")&&ot.getPropertyValue("font-size"),ot?ot.getPropertyValue("color"):""),bt=ot?ot.getPropertyValue("font-family"):"",ft=(ot&&ot.getPropertyValue("line-height"),ot&&ot.getPropertyValue("font-weight"),ot&&ot.getPropertyValue("font-style"),ot?ot.getPropertyValue("background-color"):""),mt=ot?ot.getPropertyValue("border-color"):"",wt=m(_?V||g:n.fontColor),yt=_?H||"14px":C,vt=_||""==z?U||d:z||d,_t=y(_,D||"400",D,0,"regular"),xt=y(_,F||"normal",F,0,"normal"),kt=m(P),St=_&&q||"1.5",Pt=m(lt||g),Wt=n.aspectImageRatio?"".concat(n.aspectImageRatio,"%"):"100%",zt=m(_?V||g:x),Ct=_||""==z?st||d:z||d,jt=_?(0,r.uu)(V||g,S):(0,r.uu)(W,S),Tt=_?16:C,Lt=_?(0,r.uu)(V||g,S):(0,r.uu)(P,S),Bt=_?Ct:""!=z?z:U||d,Ht=_?(0,r.uu)(lt||g,S):(0,r.uu)(x,S),Vt=_||""==(null===a||void 0===a||null===(o=a.CatalogueTitle)||void 0===o?void 0:o.font)?st||d:p.font,Ut=y(_,w(p.varient).style,dt,0,"normal"),qt=y(_,w(p.varient).weight,gt,0,"600"),Dt=_?"16px":"".concat(p.size,"px"),Ft=_?(0,r.uu)(lt||g,S):(0,r.uu)(p.color,S),Et=_||""==b.font?st||d:b.font?b.font:d,It=y(_,w(b.varient).style,dt,0,"normal"),Rt=y(_,w(b.varient).weight,gt,0,"600"),Mt=_?"14px":"".concat(b.size,"px"),Qt=_?(0,r.uu)(lt||g,S):(0,r.uu)(b.color,S),Zt=_||""==h.font?st||d:h.font?h.font:d,At=y(_,w(h.varient).style,dt,0,"normal"),Nt=y(_,w(h.varient).weight,gt,0,"600"),Ot=_?"14px":"".concat(h.size,"px"),Xt=_?(0,r.uu)(lt||g,S):(0,r.uu)(h.color,S),Gt=_||""==u.font?st||d:u.font?u.font:d,Jt=y(_,w(u.varient).style,dt,0,"normal"),Kt=y(_,w(u.varient).weight,gt,0,"600"),Yt=_?"14px":"".concat(u.size,"px"),$t=u.color,to=u.background,oo=_&&bt||d,no=y(_,w(u.varient).style,dt,0,"normal"),eo=y(_,w(u.varient).weight,gt,0,"600"),ao=_&&ht?g:"#545454",co=_&&ft||l,io=_&&mt?g:"#545454",ro=_||""==(null===v||void 0===v?void 0:v.font)?st||d:null===v||void 0===v?void 0:v.font,lo=y(_,w(null===v||void 0===v?void 0:v.varient).style,dt,0,"normal"),so=y(_,w(null===v||void 0===v?void 0:v.varient).weight,gt,0,"600"),go=_?"14px":"".concat(null===v||void 0===v?void 0:v.size,"px"),uo=null===v||void 0===v?void 0:v.color,po=null===v||void 0===v?void 0:v.background,ho=f.color,bo=f.background,fo=_||""==(null===c||void 0===c?void 0:c.font)?st||d:null===c||void 0===c?void 0:c.font,mo=y(_,w(null===c||void 0===c?void 0:c.varient).style,dt,0,"normal"),wo=y(_,w(null===c||void 0===c?void 0:c.varient).weight,gt,0,"600"),yo=_?"14px":"".concat(null===c||void 0===c?void 0:c.size,"px"),vo=null===c||void 0===c?void 0:c.color,_o=null===c||void 0===c?void 0:c.background;return{cardStyle:{color:wt,fontSize:yt,font:vt,fontWeight:_t,fontStyle:xt,iconColor:kt,lineHeight:St,linkColor:Pt,background:S,authorColor:zt,authorFont:Ct,radius:"".concat(n.radius,"px"),iconPosition:"".concat(12+(n.radius?n.radius/3.5:0),"px"),cardSize:Wt},ctaBtn:{font:ro,varient:lo,weight:so,size:go,color:uo,background:po,padding:"8px 10px",radius:"3px",minHeight:"40px",transition:"all .3s ease-out 0s",colorHover:uo,backgroundHover:po},button:{font:oo,varient:no,weight:eo,size:"14px",color:ao,borderColor:io,background:co,padding:"8px 10px",radius:"3px",minHeight:"40px",transition:"all .3s ease-out 0s",colorHover:ao,backgroundHover:co},popUpProperties:{background:S,font:vt,fontSize:"".concat(Tt,"px"),color:jt,iconColor:Lt,fontWeight:_t,fontStyle:xt,authorFont:Bt,authorFontSize:"14px",authorColor:Ht,authorfontWeight:"600"},ProductSettings:{CatalogueTitle:{font:Vt,varient:Ut,weight:qt,size:Dt,color:Ft},ProductTitle:{font:Et,varient:It,weight:Rt,size:Mt,color:Qt},Price:{font:Zt,varient:At,weight:Nt,size:Ot,color:Xt},Button:{font:Gt,varient:Jt,weight:Kt,size:Yt,color:$t,background:to},Hotspot:{color:ho,background:bo,status:1}},UgcSettings:{font:fo,varient:mo,weight:wo,size:yo,color:vo,background:_o},heading:{title:{size:K,font:$,fontWeight:Y,color:J,textalign:tt}},subheading:{subtitle:{size:et,font:ct,fontWeight:at,color:nt,textalign:it}}}})(t),d="style-root-".concat(t.Wall.id),u=':root div[data-wall-id="'.concat(t.Wall.id,'"],:root div[data-widget-id="').concat(t.Wall.id,'"] {\n                        --tb-color: ').concat(o.color,";\n                        --tb-font-size:").concat(o.fontSize,";\n                        --tb-font: ").concat(o.font,";\n                        --tb-font-weight: ").concat(o.fontWeight,";\n                        --tb-font-style: ").concat(o.fontStyle,";\n                        --tb-icon-color:").concat(o.iconColor,";\n                        --tb-line-height: ").concat(o.lineHeight,";\n                        --tb-link-color: ").concat(o.linkColor,";\n                        --tb-bg-color: ").concat(o.background,";\n                        --tb-author-color: ").concat(o.authorColor,";\n                        --tb-author-font: ").concat(o.authorFont,";\n                        --tb-border-radius: ").concat(o.radius,";\n                        --tb-icon-position:").concat(o.iconPosition,";\n                        --tb-media-size:").concat(o.cardSize,";\n\n                        --tb-cta-color:").concat(n.color,";\n                        --tb-cta-bg-color:").concat(n.background,";\n                        --tb-cta-border-color:").concat(n.borderColor,";\n                        --tb-cta-color-hover:").concat(n.colorHover,";\n                        --tb-cta-bg-color-hover:").concat(n.backgroundHover,";\n                        --tb-cta-border-color-hover:").concat(n.borderHover,";\n                        --tb-cta-border-radius:").concat(n.radius,";\n                        --tb-cta-padding:").concat(n.padding,";\n                        --tb-cta-height:").concat(n.minHeight,";\n                        --tb-cta-width:").concat(n.minWidth,";\n                        --tb-cta-font:").concat(n.font,";\n                        --tb-cta-font-weight:").concat(n.weight,";\n                        --tb-cta-transition:").concat(n.transition,";\n\n                        --tb-btn-color:").concat(e.color,";\n                        --tb-btn-bg-color:").concat(e.background,";\n                        --tb-btn-border-color:").concat(e.borderColor,";\n                        --tb-btn-color-hover:").concat(e.colorHover,";\n                        --tb-btn-bg-color-hover:").concat(e.backgroundHover,";\n                        --tb-btn-border-color-hover:").concat(e.borderHover,";\n                        --tb-btn-border-radius:").concat(e.radius,";\n                        --tb-btn-padding:").concat(e.padding,";\n                        --tb-btn-height:").concat(e.minHeight,";\n                        --tb-btn-width:").concat(e.minWidth,";\n                        --tb-btn-font:").concat(e.font,";\n                        --tb-btn-font-weight:").concat(e.weight,";\n                        --tb-btn-transition:").concat(e.transition,";\n\n                        --tb-popup-color:").concat(a.color,";\n                        --tb-popup-bg-color:").concat(a.background,";\n                        --tb-popup-font:").concat(a.font,";\n                        --tb-popup-font-size:").concat(a.fontSize,";\n                        --tb-popup-icon-color:").concat(a.iconColor,";\n                        --tb-popup-font-weight:").concat(a.fontWeight,";\n                        --tb-popup-font-style: ").concat(a.fontStyle,";\n\n                        --tb-popup-author-font:").concat(a.authorFont,";\n                        --tb-popup-author-font-size:").concat(a.authorFontSize,";\n                        --tb-popup-author-font-weight:").concat(a.authorfontWeight,";\n                        --tb-popup-author-color:").concat(a.authorColor,";\n\n\n                        --tb-catalogue-font:").concat(c.CatalogueTitle.font,";\n                        --tb-catalogue-varient:").concat(c.CatalogueTitle.varient,";\n                        --tb-catalogue-weight:").concat(c.CatalogueTitle.weight,";\n                        --tb-catalogue-size:").concat(c.CatalogueTitle.size,";\n                        --tb-catalogue-color:").concat(c.CatalogueTitle.color,";\n\n                        --tb-product-font:").concat(c.ProductTitle.font,";\n                        --tb-product-varient:").concat(c.ProductTitle.varient,";\n                        --tb-product-size:").concat(c.ProductTitle.size,";\n                        --tb-product-color:").concat(c.ProductTitle.color,";\n\n                        --tb-price-font:").concat(c.Price.font,";\n                        --tb-price-weight:").concat(c.Price.weight,";\n                        --tb-price-varient:").concat(c.Price.varient,";\n                        --tb-price-size:").concat(c.Price.size,";\n                        --tb-price-color:").concat(c.Price.color,";\n\n                        --tb-shop-btn-font:").concat(c.Button.font,";\n                        --tb-shop-btn-weight:").concat(c.Button.weight,";\n                        --tb-shop-btn-varient:").concat(c.Button.varient,";\n                        --tb-shop-btn-size:").concat(c.Button.size,";\n                        --tb-shop-btn-color:").concat(c.Button.color,";\n                        --tb-shop-btn-bg-color:").concat(c.Button.background,";\n\n                        --tb-hotspot-color:").concat(c.Hotspot.color,";\n                        --tb-hotspot-bg-color:").concat(c.Hotspot.background,";\n\n\n                        --tb-snap-font:").concat(i.font,";\n                        --tb-snap-varient:").concat(i.varient,";\n                        --tb-snap-size:").concat(i.size,";\n                        --tb-snap-color:").concat(i.color,";\n                        --tb-snap-bg-color:").concat(i.background,";\n\n                        --tb-t-font-size:").concat(l.title.size,";\n                        --tb-t-font-family:").concat(l.title.font,";\n                        --tb-t-font-weight:").concat(l.title.fontWeight,";\n                        --tb-t-color:").concat(l.title.color,";\n                        --tb-t-text-align:").concat(l.title.textalign,";\n\n                        --tb-st-font-size:").concat(g.subtitle.size,";\n                        --tb-st-font-family:").concat(g.subtitle.font,";\n                        --tb-st-font-weight:").concat(g.subtitle.fontWeight,";\n                        --tb-st-color:").concat(g.subtitle.color,";\n                        --tb-st-text-align:").concat(g.subtitle.textalign,";\n                    }");if(!document.getElementById(d)){const t=document.createElement("style");t.type="text/css",t.id=d,t.innerHTML=u,document.head.appendChild(t)}},h=t=>{const o="css-".concat(t.Wall.id);if(!document.getElementById(o)&&1===t.Personalization.cssStatus){const n=document.createElement("style");n.type="text/css",n.id=o,n.innerHTML=t.Personalization.css,document.head.appendChild(n)}},b=()=>{try{const o=a.parse(window.location.search);var t=document.documentElement;o&&o.lang?t.setAttribute("lang",o.lang):t.setAttribute("lang","de")}catch(o){console.error(o)}};class f extends e.Component{constructor(t){super(t),this.onLoadModule=t=>{const o=(window.location.href.includes("hashtag_campaign"),!1),{wall:n}=t,e=n.Wall.id,a=n.Wall.owner;o&&(0,l.wl)({wallId:e,domainName:s.QC?s.nX?"https://test.taggbox.com/embed-widget/lite/".concat(e,"?ugcSuite=1&hashtag_campaign=true"):"https://test.taggbox.com/embed-widget/lite/".concat(n.Wall.url,"?hashtag_campaign=true"):s.nX?"https://widget.taggbox.com/".concat(e,"?ugcSuite=1&hashtag_campaign=true"):"https://widget.taggbox.com/".concat(e),ownerId:a,screenshotSize:["1200x624"]}).then((t=>{let{data:o}=t;const{responseCode:e,responseData:a}=o;if(200==e&&a.length>0&&a[0]&&a[0].s3Url){const t=(0,r.CL)()+1e3*((0,r.QM)()+60*((0,r.dn)()+60*(0,r.eZ)()));this.setState({hashtag_campaign_image:"".concat(a[0].s3Url,"?v=").concat(t)})}else{const t=(0,r.Bq)(n.Personalization.widgetTheme);this.setState({hashtag_campaign_image:t})}})).catch((t=>{const o=(0,r.Bq)(n.Personalization.widgetTheme);this.setState({hashtag_campaign_image:o})}))};this.props.wall.ThemeRule.ctaData&&Object.keys(this.props.wall.ThemeRule.ctaData).length>0&&this.props.wall.ThemeRule.ctaData;this.state={hashtag_campaign_image:t.wall.Wall.id&&window.location.href.includes("hashtag_campaign")?"".concat("https://cloud.taggbox.com/wall-branding/wallId_widget_").concat(t.wall.Wall.id,".jpg?v=").concat(d):""}}componentDidMount(){this.onLoadModule(this.props)}componentWillReceiveProps(t){t!=this.props&&s.Jc&&this.onLoadModule(t)}render(){const{hashtag_campaign_image:t}=this.state,{wall:o}=this.props,n=new URLSearchParams(window.location.search).get("preview"),e=o.Personalization.widgetTheme,a=(window.location.href.includes("hashtag_campaign"),!1),r=s.nX?"Tagbox UGC Suite":s.ZQ?"Tagembed Widget":"Taggbox";var l=["inherit","Default"],d=["Inter"];return o.UgcSettings&&o.UgcSettings.onsite_link_font_btn&&!l.includes(o.UgcSettings.onsite_link_font_btn)&&d.push(o.UgcSettings.onsite_link_font_btn),o.UgcSettings&&o.UgcSettings.onsite_link_font_msg&&!l.includes(o.UgcSettings.onsite_link_font_msg)&&d.push(o.UgcSettings.onsite_link_font_msg),o.ThemeRule.link_font&&!l.includes(o.ThemeRule.link_font)&&d.push(o.ThemeRule.link_font),o.Banner&&Object.keys(o.Banner).length&&(o.Banner.subtitle_link_font&&!l.includes(o.Banner.subtitle_link_font)&&d.push(o.Banner.subtitle_link_font),o.Banner.title_link_font&&!l.includes(o.Banner.title_link_font)&&d.push(o.Banner.title_link_font)),o.ProductSetting&&Object.keys(o.ProductSetting).length&&(o.ProductSetting.Button.fontLink&&!l.includes(o.ProductSetting.Button.fontLink)&&d.push(o.ProductSetting.Button.fontLink),o.ProductSetting.CatalogueTitle.fontLink&&!l.includes(o.ProductSetting.CatalogueTitle.fontLink)&&d.push(o.ProductSetting.CatalogueTitle.fontLink),o.ProductSetting.Price.fontLink&&!l.includes(o.ProductSetting.Price.fontLink)&&d.push(o.ProductSetting.Price.fontLink),o.ProductSetting.ProductTitle.fontLink&&!l.includes(o.ProductSetting.ProductTitle.fontLink)&&d.push(o.ProductSetting.ProductTitle.fontLink)),d=d.filter(((t,o,n)=>n&&n.indexOf(t)===o)),(0,g.jsxs)(g.Fragment,{children:[a?(0,g.jsxs)(c.q,{children:[s.nX?(0,g.jsx)("link",{rel:"icon",href:"https://ugc.taggbox.com/favicon.ico"}):null,(0,g.jsx)("meta",{property:"og:type",content:"website"}),(0,g.jsx)("meta",{property:"og:url",content:"https://widget-lite.taggbox.com/".concat(o.Wall.id)}),(0,g.jsx)("meta",{property:"og:title",content:"".concat(o.Wall.name," - ").concat(r," Widget")}),(0,g.jsx)("meta",{property:"og:description",content:"".concat(o.Wall.name," hashtag campaign created using ").concat(r," Widget.")}),(0,g.jsx)("meta",{property:"og:image",content:t}),(0,g.jsx)("meta",{property:"type",content:"website"}),(0,g.jsx)("meta",{property:"url",content:"https://widget-lite.taggbox.com/".concat(o.Wall.id)}),(0,g.jsx)("meta",{property:"title",content:"".concat(o.Wall.name," - ").concat(r," Widget")}),(0,g.jsx)("meta",{property:"description",content:"".concat(o.Wall.name," hashtag campaign created using ").concat(r," Widget.")}),(0,g.jsx)("meta",{property:"image",content:t}),n?document.body.classList.add("tb_previw_th-".concat(e)):null,d.map((function(t,o){return"0"!=t?(0,g.jsx)("link",{href:"".concat(i.do,"/web-fonts/").concat(t,".css"),rel:"stylesheet"},o):null})),u(),o.Wall&&o.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js"}):null,o.Wall&&o.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,children:'window.dataLayer = window.dataLayer || [];\n                    function gtag() {dataLayer.push(arguments); }\n                    gtag("js", new Date());\n                    window.gaTokenClient = \''.concat(o.Wall.google_tacking_code,'\';\n                    gtag("event", "page_view", {\n                        "send_to": window.gaTokenClient,\n                    "anonymize_ip": true,\n                    });')}):null]}):window.location.href.includes("widget.taggbox.com")||window.location.href.includes("widget-test.tagembed.com")||window.location.href.includes("widgets.tagembed.com")||window.location.href.includes("widget-test.tagshop.ai")||window.location.href.includes("widget.tagshop.ai")?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(c.q,{children:[s.nX?(0,g.jsx)("link",{rel:"icon",href:"https://ugc.taggbox.com/favicon.ico"}):s.ZQ?(0,g.jsx)("link",{rel:"icon",href:"https://tagembed.com/wp-content/uploads/2020/09/favicon.ico"}):null,(0,g.jsx)("meta",{property:"og:type",content:"website"}),(0,g.jsx)("meta",{property:"og:url",content:s.ZQ?"https://widget.tagembed.com/".concat(o.Wall.id):"https://widget-lite.taggbox.com/".concat(o.Wall.id)}),(0,g.jsx)("meta",{property:"og:title",content:"".concat(o.Wall.name," - ").concat(r," Widget")}),(0,g.jsx)("meta",{property:"og:description",content:"".concat(o.Wall.name," featuring Social Feed using ").concat(r," Widget. It helps brands to curate & embed social feeds, user reviews, UGC etc. on websites to boost sales, traffic, & engagement.")}),(0,g.jsx)("meta",{property:"og:image",content:t}),(0,g.jsx)("meta",{property:"type",content:"website"}),(0,g.jsx)("meta",{property:"url",content:s.ZQ?"https://widget.tagembed.com/".concat(o.Wall.id):"https://widget-lite.taggbox.com/".concat(o.Wall.id)}),(0,g.jsx)("meta",{property:"title",content:"".concat(o.Wall.name," - ").concat(r," Widget")}),(0,g.jsx)("meta",{property:"description",content:"".concat(o.Wall.name," featuring Social Feed using ").concat(r," Widget. It helps brands to curate & embed social feeds, user reviews, UGC etc. on websites to boost sales, traffic, & engagement.")}),(0,g.jsx)("meta",{property:"image",content:t}),n?document.body.classList.add("tb_previw_th-".concat(e)):null,d.map((function(t,o){return"0"!=t?(0,g.jsx)("link",{href:"".concat(i.do,"/web-fonts/").concat(t,".css"),rel:"stylesheet"},o):null})),u(),o.Wall&&o.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js"}):null,o.Wall&&o.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,children:'window.dataLayer = window.dataLayer || [];\n                    function gtag() {dataLayer.push(arguments); }\n                    gtag("js", new Date());\n                    window.gaTokenClient = \''.concat(o.Wall.google_tacking_code,'\';\n                    gtag("event", "page_view", {\n                        "send_to": window.gaTokenClient,\n                    "anonymize_ip": true,\n                    });')}):null]}),132857==o.Wall.owner&&s.Jx?b():null]}):(0,g.jsxs)(c.q,{children:[n?document.body.classList.add("tb_previw_th-".concat(e)):null,d.map((function(t,o){return"0"!=t?(0,g.jsx)("link",{href:"".concat(i.do,"/web-fonts/").concat(t,".css"),rel:"stylesheet"},o):null})),u(),o.Wall&&o.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js"}):null,o.Wall&&o.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,children:'window.dataLayer = window.dataLayer || [];\n                    function gtag() {dataLayer.push(arguments); }\n                    gtag("js", new Date());\n                    window.gaTokenClient = \''.concat(o.Wall.google_tacking_code,'\';\n                    gtag("event", "page_view", {\n                        "send_to": window.gaTokenClient,\n                    "anonymize_ip": true,\n                    });')}):null]}),p(o),h(o)]})}}const m=(0,e.memo)(f)}}]);