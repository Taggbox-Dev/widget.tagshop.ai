"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2946],{72946:(t,e,a)=>{a.r(e),a.d(e,{default:()=>s});var n=a(47313),o=a(46335),r=a(35179),l=a(46417);class s extends n.PureComponent{constructor(t){super(t),this.state={height:"5",width:"100",error:""}}async UNSAFE_componentWillMount(){const{ImageUrl:t}=this.props,{width:e,height:a}=await(0,o.GF)(t);this.setState({height:100*a/e,width:100*e/a})}render(){const t={backgroundImage:"url(".concat(this.props.ImageUrl,")"),paddingBottom:this.state.height+"%",width:"100%"};return(0,l.jsx)("div",{className:"tb_wall_custom_header_wrap__",children:(0,l.jsx)("div",{className:"tb_header_img_ ".concat(r.bX?"socialwall":""),style:t,children:" "})})}}},46335:(t,e,a)=>{a.d(e,{$t:()=>v,AB:()=>d,E6:()=>W,Fx:()=>_,GF:()=>D,P:()=>y,RD:()=>b,Rr:()=>h,Sy:()=>f,ad:()=>A,hd:()=>p,i1:()=>g,ok:()=>B,qE:()=>m,sy:()=>S,u$:()=>M,uB:()=>w,uu:()=>k,w5:()=>u});var n=a(35179),o=a(98501),r=a(70656),l=a(93517);let s=[],i=!1;const c=new Headers({"Content-Type":"application/json",Authorization:"Bearer ".concat(n.UA),Productdomain:n.yM}),d=t=>{var e;return null===(e=document.getElementById("tb_onsite_btn_id"))||void 0===e?void 0:e.classList.toggle("tb_onsite_btn_disabled",1===t)},h=t=>{var e,a;return null===(e=(a={1:()=>window.onShowDemoPost(1),2:()=>window.hendleFeeds("addFeeds"),3:()=>window.hendleFeeds("manageFeeds")})[t])||void 0===e?void 0:e.call(a)},u=t=>{const e=new Date(1e3*t);return"".concat(["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]," ").concat(e.getDate(),", ").concat(e.getFullYear())},g=()=>Math.floor(1e4*Math.random()).toString().padStart(4,"0"),m=t=>{try{s.push(t)}catch(e){console.log(e)}},w=t=>t&&""!==t&&!t.includes("ui-avatars"),b=t=>{if(!t)return"0 Byte";const e=Math.floor(Math.log(t)/Math.log(1024));return{size:Math.round(t/Math.pow(1024,e),2),sizeText:["Bytes","KB","MB","GB","TB"][e]}},p=t=>t.startsWith("http://")||t.startsWith("https://")?t:"https://"+t,f=t=>{const e=Date.now()-1e3*t;if(e<6e4)return"just now";const a=[{label:"year",ms:31536e6},{label:"month",ms:2592e6},{label:"week",ms:6048e5},{label:"day",ms:864e5},{label:"hour",ms:36e5},{label:"minute",ms:6e4}].find((t=>{let{ms:a}=t;return e>=a})),n=Math.floor(e/a.ms);return"".concat(n," ").concat(a.label).concat(n>1?"s":""," ago")},_=t=>{try{return null!==t&&void 0!==t&&t.includes("http")?[...new Set(t.match(/(((ftp|https?):\/\/)[\w@:%_\+.~#?&//=]+)/g))].reduce(((t,e)=>t.replaceAll(e,'<a class="text_links_" role="link" target="_blank" href="'.concat(e,'">').concat(e,"</a>"))),t):t}catch{return t}},v=()=>["".concat(o.ZS),"Website Widget"],y=t=>t&&String(t)?unescape(t).split("/").pop().split("/").slice(-1).join().split(".").shift():"",M=["localhost","widget","wall_id="].every((t=>(0,n.F_)(t)))?"taggbox_main":n.Jx||["".concat(n.l,".").concat(n.wq),"".concat(n.l).concat(n.Bu).concat(n.wq),"".concat(n.l,"s.").concat(n.wq)].some((t=>(0,n.F_)(t)))?"tag_main__root":n.ig?"taggShopRoot":"taggbox_main",S=t=>{const e=Math.floor(Math.log10(t)/3)||0;return e?+(t/Math.pow(1e3,e)).toFixed(0)+["","K","M","B","T"][e]:t},B=t=>n.Jx?t:atob(t),F=t=>{if(null===(a=t)||void 0===a?void 0:a.startsWith("#")){const e=parseInt(t.slice(1),16);return{r:e>>16&255,g:e>>8&255,b:255&e}}{var e;const a=(null===t||void 0===t||null===(e=t.match(/\d+/g))||void 0===e?void 0:e.map(Number))||[0,0,0];return{r:a[0],g:a[1],b:a[2]}}var a},x=t=>{const{r:e,g:a,b:n}=F(t);return Math.sqrt((255-e)**2+(255-a)**2+(255-n)**2)<=30},I=t=>{const{r:e,g:a,b:n}=F(t);return Math.sqrt((e-50)**2+(a-50)**2+(n-50)**2)<50},k=(t,e)=>{var a;null!==(a=t)&&void 0!==a&&a.startsWith("rgba")&&(t="#000000");const n=(t,e)=>e.some((e=>null===t||void 0===t?void 0:t.includes(e))),o=t=>n(t,["ffffff","255, 255, 255","#fff"]),r=t=>n(t,["000000","0, 0, 0","#000"]),[l,s]=[x(t),I(t)],[i,c]=[x(e),I(e)];return l&&i||o(t)&&o(e)?"#000000":s&&c||r(t)&&r(e)?"#ffffff":t},W=(t,e,a)=>t&&t.length>0?t.findIndex((t=>t.id===e)):a,A=()=>{try{const{wall:t}=r.Z.getState().appData,{webId:e,wallId:a,ownerId:o}=t.ThemeInfo;i||(window.addEventListener("beforeunload",(()=>{if(0===s.length)return;const t=s.reduce(((t,e)=>t+e),0);t>0?fetch(n.Zl,{method:"POST",headers:c,body:JSON.stringify({action:1,model:null!==l.mV&&void 0!==l.mV&&l.mV.includes("website")?"website":"wall",playCount:s.length,wall:n.ig?e:a,playTime:t,owner:o}),keepalive:!0}).finally((()=>(s=[],i=!1))):(s=[],i=!1)})),i=!0)}catch(t){console.error(t)}},D=t=>new Promise(((e,a)=>Object.assign(new Image,{onload:function(){e({width:this.naturalWidth,height:this.naturalHeight})},onerror:t=>a(new Error("Image loading error: ".concat(t.message))),src:t})))}}]);