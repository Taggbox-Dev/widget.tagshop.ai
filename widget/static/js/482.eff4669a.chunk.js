"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[482],{90484:(e,t,o)=>{o.d(t,{p:()=>n});const n=e=>{const t={backgroundImage:1==e.transparent||5==e.bannerType?"none":"url(".concat(e.CustomBannerImage,")"),backgroundColor:1==e.transparent?"transparent":e.background_color,height:e.banner_height+"px"},o={backgroundColor:1==e.transparent?"transparent":e.background_color_two},n={color:e.subTitle_font_color,fontSize:e.subTitle_font_size,fontFamily:"None"==e.subtitle_css_font?null:e.subtitle_css_font},a=e.subtitle_font_varient,l={color:e.title_font_color,fontSize:e.title_font_size,fontFamily:"None"==e.title_css_font?null:e.title_css_font},r=e.title_font_varient;var s=50;const i={height:1.8*(s=e.social_icon_size>50?50:e.social_icon_size),width:1.8*s},c={fontSize:s},_={borderColor:2===e.social_icon_color_status?e.social_icon_color:"#1b74e4"},d={color:2===e.social_icon_color_status?e.social_icon_color:"#1b74e4"},g={borderColor:2===e.social_icon_color_status?e.social_icon_color:"#000"},u={color:2===e.social_icon_color_status?e.social_icon_color:"#000"},b={borderColor:2===e.social_icon_color_status?e.social_icon_color:"#E2306C"},h={color:2===e.social_icon_color_status?e.social_icon_color:"#E2306C"};return{bannerStyle:t,bannerStyleBgRight:o,subTitleStyle:n,titleStyle:l,iconAreaStyle:i,iconStyle:c,isFacebook:String(e.social_icons).includes("1"),isTwitter:String(e.social_icons).includes("2"),isInstagram:String(e.social_icons).includes("3"),facebookIconAreaStyle:_,facebookIconStyle:d,twitterIconAreaStyle:g,twitterIconStyle:u,instagramIconAreaStyle:b,instagramIconStyle:h,subTitleVarentClass:a,titleVarentClass:r}}},50482:(e,t,o)=>{o.r(t),o.d(t,{default:()=>s});o(47313);var n=o(90484),a=o(98501),l=o(46335),r=o(46417);const s=e=>{let{Banner:t}=e;const{bannerStyle:o,subTitleStyle:s,titleStyle:i,iconAreaStyle:c,iconStyle:_,isFacebook:d,isTwitter:g,isInstagram:u,facebookIconAreaStyle:b,facebookIconStyle:h,twitterIconAreaStyle:m,twitterIconStyle:y,instagramIconAreaStyle:w,instagramIconStyle:f}=(0,n.p)(t);var S=t.LogoImage;if(S&&String(S).length>0&&String(S).includes("banner/logo_bnr")&&String(S).includes(a.lO))S=String(t.LogoImage).replace(a.lO,"");else if(S.includes(a.lO)&&""===S.split(a.lO)[1])S=String(t.LogoImage).replace(a.lO,"");else if(S&&String(S).length>0){let e=S.split("/").pop();"logo_bnr-2.svg"!=e&&"logo_bnr-3.svg"!=e&&"logo_bnr-5.svg"!=e||(S="".concat(a.ho,"react-app/media/banner/logo_bnr-3.svg"))}const p=(e,t,o,n,a,s,i)=>(0,r.jsx)("a",{href:e?(0,l.hd)(e):"#",target:"blank",className:"tb_header3_social_icon_list__",role:"button","aria-label":a,rel:"nofollow",style:{...s,...i},children:(0,r.jsx)("div",{className:"tb_header3_social_icon__ tb__icon  ".concat(n),style:{...t,...o},children:" "})});var v=o;return v&&v.backgroundImage.includes("bg-bnr-3.png")&&v.backgroundImage.includes(a.lO)&&(v.backgroundImage=v.backgroundImage.replace(a.lO,"https://test.taggbox.com/widget/assets/media/banner/")),(0,r.jsx)("div",{className:"tb_wall_header_wrap__",style:v,children:(0,r.jsxs)("div",{className:"tb_header3_row__",children:[(0,r.jsx)("div",{className:"tb_header3_column_logo__",children:S?(0,r.jsx)("div",{className:"tb_header3_logo__",children:(0,r.jsx)("img",{loading:"lazy",className:"tb_header3_logo_img__",src:S,alt:(0,l.P)(S),width:180,height:52})}):""}),(0,r.jsx)("div",{className:"tb_header3_column_content__",children:(0,r.jsxs)("div",{className:"tb_header3_content__",children:[(0,r.jsx)("div",{className:"tb_header3_subtitle__",style:s,children:t.subTitle}),(0,r.jsx)("div",{className:"tb_header3_title__",style:i,children:t.title})]})}),(0,r.jsx)("div",{className:"tb_header3_column_icons__",children:1===t.social_icon_status?(0,r.jsxs)("div",{className:"tb_header3_social_icons__",children:[d?(0,r.jsx)(p,{url:t.facebook_url,iconStyle:_,networkStyle:h,iconAreaStyle:c,iconAreaStyleNetwork:b,iconClass:"tb-facebook",label:"Facebook"}):"",g?(0,r.jsx)(p,{url:t.twitter_url,iconStyle:_,networkStyle:y,iconAreaStyle:c,iconAreaStyleNetwork:m,iconClass:"tb-twitter",label:"Twitter"}):"",u?(0,r.jsx)(p,{url:t.instagram_url,iconStyle:_,networkStyle:f,iconAreaStyle:c,iconAreaStyleNetwork:w,iconClass:"tb-instagram",label:"Instagram"}):""]}):null})]})})}},46335:(e,t,o)=>{o.d(t,{$t:()=>S,AB:()=>_,E6:()=>M,Fx:()=>f,GF:()=>T,P:()=>p,RD:()=>m,Rr:()=>d,Sy:()=>w,ad:()=>C,hd:()=>y,i1:()=>u,ok:()=>I,qE:()=>b,sy:()=>k,u$:()=>v,uB:()=>h,uu:()=>A,w5:()=>g});var n=o(35179),a=o(98501),l=o(70656),r=o(93517);let s=[],i=!1;const c=new Headers({"Content-Type":"application/json",Authorization:"Bearer ".concat(n.UA),Productdomain:n.yM}),_=e=>{var t;return null===(t=document.getElementById("tb_onsite_btn_id"))||void 0===t?void 0:t.classList.toggle("tb_onsite_btn_disabled",1===e)},d=e=>{var t,o;return null===(t=(o={1:()=>window.onShowDemoPost(1),2:()=>window.hendleFeeds("addFeeds"),3:()=>window.hendleFeeds("manageFeeds")})[e])||void 0===t?void 0:t.call(o)},g=e=>{const t=new Date(1e3*e);return"".concat(["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]," ").concat(t.getDate(),", ").concat(t.getFullYear())},u=()=>Math.floor(1e4*Math.random()).toString().padStart(4,"0"),b=e=>{try{s.push(e)}catch(t){console.log(t)}},h=e=>e&&""!==e&&!e.includes("ui-avatars"),m=e=>{if(!e)return"0 Byte";const t=Math.floor(Math.log(e)/Math.log(1024));return{size:Math.round(e/Math.pow(1024,t),2),sizeText:["Bytes","KB","MB","GB","TB"][t]}},y=e=>e.startsWith("http://")||e.startsWith("https://")?e:"https://"+e,w=e=>{const t=Date.now()-1e3*e;if(t<6e4)return"just now";const o=[{label:"year",ms:31536e6},{label:"month",ms:2592e6},{label:"week",ms:6048e5},{label:"day",ms:864e5},{label:"hour",ms:36e5},{label:"minute",ms:6e4}].find((e=>{let{ms:o}=e;return t>=o})),n=Math.floor(t/o.ms);return"".concat(n," ").concat(o.label).concat(n>1?"s":""," ago")},f=e=>{try{return null!==e&&void 0!==e&&e.includes("http")?[...new Set(e.match(/(((ftp|https?):\/\/)[\w@:%_\+.~#?&//=]+)/g))].reduce(((e,t)=>e.replaceAll(t,'<a class="text_links_" role="link" target="_blank" href="'.concat(t,'">').concat(t,"</a>"))),e):e}catch{return e}},S=()=>["".concat(a.ZS),"Website Widget"],p=e=>e&&String(e)?unescape(e).split("/").pop().split("/").slice(-1).join().split(".").shift():"",v=["localhost","widget","wall_id="].every((e=>(0,n.F_)(e)))?"taggbox_main":n.Jx||["".concat(n.l,".").concat(n.wq),"".concat(n.l).concat(n.Bu).concat(n.wq),"".concat(n.l,"s.").concat(n.wq)].some((e=>(0,n.F_)(e)))?"tag_main__root":n.ig?"taggShopRoot":"taggbox_main",k=e=>{const t=Math.floor(Math.log10(e)/3)||0;return t?+(e/Math.pow(1e3,t)).toFixed(0)+["","K","M","B","T"][t]:e},I=e=>n.Jx?e:atob(e),x=e=>{if(null===(o=e)||void 0===o?void 0:o.startsWith("#")){const t=parseInt(e.slice(1),16);return{r:t>>16&255,g:t>>8&255,b:255&t}}{var t;const o=(null===e||void 0===e||null===(t=e.match(/\d+/g))||void 0===t?void 0:t.map(Number))||[0,0,0];return{r:o[0],g:o[1],b:o[2]}}var o},N=e=>{const{r:t,g:o,b:n}=x(e);return Math.sqrt((255-t)**2+(255-o)**2+(255-n)**2)<=30},j=e=>{const{r:t,g:o,b:n}=x(e);return Math.sqrt((t-50)**2+(o-50)**2+(n-50)**2)<50},A=(e,t)=>{var o;null!==(o=e)&&void 0!==o&&o.startsWith("rgba")&&(e="#000000");const n=(e,t)=>t.some((t=>null===e||void 0===e?void 0:e.includes(t))),a=e=>n(e,["ffffff","255, 255, 255","#fff"]),l=e=>n(e,["000000","0, 0, 0","#000"]),[r,s]=[N(e),j(e)],[i,c]=[N(t),j(t)];return r&&i||a(e)&&a(t)?"#000000":s&&c||l(e)&&l(t)?"#ffffff":e},M=(e,t,o)=>e&&e.length>0?e.findIndex((e=>e.id===t)):o,C=()=>{try{const{wall:e}=l.Z.getState().appData,{webId:t,wallId:o,ownerId:a}=e.ThemeInfo;i||(window.addEventListener("beforeunload",(()=>{if(0===s.length)return;const e=s.reduce(((e,t)=>e+t),0);e>0?fetch(n.Zl,{method:"POST",headers:c,body:JSON.stringify({action:1,model:null!==r.mV&&void 0!==r.mV&&r.mV.includes("website")?"website":"wall",playCount:s.length,wall:n.ig?t:o,playTime:e,owner:a}),keepalive:!0}).finally((()=>(s=[],i=!1))):(s=[],i=!1)})),i=!0)}catch(e){console.error(e)}},T=e=>new Promise(((t,o)=>Object.assign(new Image,{onload:function(){t({width:this.naturalWidth,height:this.naturalHeight})},onerror:e=>o(new Error("Image loading error: ".concat(e.message))),src:e})))}}]);