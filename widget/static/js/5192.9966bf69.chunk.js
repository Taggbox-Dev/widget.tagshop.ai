"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[5192],{87641:(t,n,e)=>{e.d(n,{Z:()=>f});var o=e(72791),i=e(77581),c=e(89057),r=e(18947),s=e(2703),a=e(80184);const d=(0,c.componentWillAppendToBody)((t=>{let{children:n}=t;return n})),u=t=>'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n  <div class="tb_p_tooltip_title">').concat(t.product_title,'</div>\n  <div class="tb_p_tooltip_price tb_price_disabled">').concat(t.price_currency_symbol).concat(t.product_discount,'</div>\n  <div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(t.product_price,"</div>\n  </a>");class l extends o.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:n}=this.props,{activeMouse:e}=this.state,o=n&&Object.keys(n).length>0?n.wall.ProductSetting.Hotspot:"";return o.status?(0,a.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,n)=>{const i=(0,s.i1)();return(0,a.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(i),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(n),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(e==n?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,a.jsx)("div",{className:"tb_hotspot__ ".concat(0==o.type?"tb_hotspot_ani__":""),onClick:n=>window.open(t.UgcProduct.product_url,"_blank"),children:n+1}),(0,a.jsx)(d,{children:(0,a.jsx)(r.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(i),clickable:!0,html:u(t.UgcProduct)})})]},n)}))}):null}}const f=(0,i.$j)((t=>({appData:t.appData})))(l)},40115:(t,n,e)=>{e.d(n,{Z:()=>u});var o=e(72791),i=e(11225),c=e(87641),r=e(80413),s=e(2703),a=e(70188),d=e(80184);class u extends o.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:n}=this.props,{imgUrl:e}=this.state;if(n&&Object.keys(n).length>0&&[4,2,5,3].includes(n.type))if(n.mediaHeight&&""!=n.mediaHeight&&n.mediaWidth&&""!=n.mediaWidth)this.setState({paddingBottom:100*n.mediaHeight/n.mediaWidth});else try{const{width:t,height:e}=await(0,r.Ad)(n.postFileNew);this.setState({paddingBottom:100*e/t})}catch(o){this.setState({paddingBottom:100})}},this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src})},this.state={loadError:!1,paddingBottom:100,imgUrl:this.props.data.postFileNew}}componentWillMount(){this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}componentDidMount(){this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}render(){const{ImageClass:t,data:n,wallID:e,themeID:o,ownerId:r,hotspot:u}=this.props,{imgUrl:l,paddingBottom:f}=this.state,p={paddingBottom:"".concat(f,"%")},h={backgroundImage:"url(".concat(l,")")},m=!!(n.hotspot&&n.ugc_products.length>0&&u);return(0,d.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(n.id),style:p,children:[m?(0,d.jsx)("div",{className:"tb_blur_bg_",style:h}):null,(0,d.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:{width:m?"":"100%"},children:[m?(0,d.jsx)(c.Z,{product:n.ugc_products}):null,(0,d.jsx)("img",{className:"".concat(t),role:"img",src:l,height:300,width:300,"data-link":n.link,"data-load":"0","data-network":n.network.id,"data-wall-id":e,"data-owner-id":r,"data-item-id":n.id,"data-feed-id":n.feedId?n.feedId:"","data-filter-id":n.filterId,"theme-id":o,onLoad:this.onLoad,onError:n.stories?null:t=>{t.target.src="".concat(a.do,"/media/images/no-image.svg"),(0,i.ht)(t)},alt:(0,s.P)(l)})]})]})}}},70757:(t,n,e)=>{e.r(n),e.d(n,{default:()=>a});var o=e(72791),i=e(46535),c=e(2703),r=e(80184);const s=o.lazy((()=>e.e(1088).then(e.bind(e,41088))));class a extends o.PureComponent{render(){const{network:t,networkClass:n,ThemeRule:e,isDefault:a,Personalization:d}=this.props,u=!!a&&(7!==t.id&&4!==t.id&&36!==t.id),l=i.ZQ&&36==t.id?"tagembed":t.icon;var f=[61,16,53,4,50,55].includes(parseInt(null===d||void 0===d?void 0:d.widgetTheme))?1==e.postHover?(0,c.uu)(e.iconColor,"#000000"):(0,c.uu)(e.iconColor,"#ffffff"):null;const p=(0,c.mD)(59)?null:i.ig?f:e.iconColor;return u?(0,r.jsx)("div",{className:"".concat(n," tb__icon tb-").concat(l.replace(/fa-/g,"")),style:{color:p},children:(0,r.jsx)("div",{})}):(0,r.jsxs)(o.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:[" ",(0,r.jsx)(s,{network:t,networkClass:n})]})}}},20672:(t,n,e)=>{e.d(n,{Z:()=>c});var o=e(2703),i=e(80184);const c=t=>{let{ThemeRule:n,btnClass:e}=t;const c={fontFamily:n.css_font};return(0,i.jsx)("div",{className:"tb_shop_btn_wrap ".concat(e),children:(0,i.jsx)("div",{className:"tb_shop_btn".concat(n.postHover||(0,o.mD)(4)||(0,o.mD)(55)?" tb_shop_btn_light":" tb_shop_btn_dark"),style:c,children:n.shoppingText})})}},98529:(t,n,e)=>{function o(t,n,e){return Array.prototype.slice.call(t,n,e)}function i(t){return t.bind.apply(t,[null].concat(o(arguments,1)))}function c(t,n){return typeof n===t}e.d(n,{r:()=>ot});var r=Array.isArray;function s(t){return r(t)?t:[t]}function a(t,n){s(t).forEach(n)}i(c,"function"),i(c,"string"),i(c,"undefined");var d=Object.keys;function u(t){return o(arguments,1).forEach((function(n){!function(t,n,e){if(t){var o=d(t);o=e?o.reverse():o;for(var i=0;i<o.length;i++){var c=o[i];if("__proto__"!==c&&!1===n(t[c],c))break}}}(n,(function(e,o){t[o]=n[o]}))})),t}var l="splide";var f="visible",p="hidden",h="refresh",m="updated",g="destroy";function _(t){var n=t?t.event.bus:document.createDocumentFragment(),e=function(){var t=[];function n(t,n,e){a(t,(function(t){t&&a(n,(function(n){n.split(" ").forEach((function(n){var o=n.split(".");e(t,o[0],o[1])}))}))}))}return{bind:function(e,o,i,c){n(e,o,(function(n,e,o){var r="addEventListener"in n,s=r?n.removeEventListener.bind(n,e,i,c):n.removeListener.bind(n,i);r?n.addEventListener(e,i,c):n.addListener(i),t.push([n,e,o,i,s])}))},unbind:function(e,o,i){n(e,o,(function(n,e,o){t=t.filter((function(t){return!!(t[0]!==n||t[1]!==e||t[2]!==o||i&&t[3]!==i)||(t[4](),!1)}))}))},dispatch:function(t,n,e){var o;return"function"===typeof CustomEvent?o=new CustomEvent(n,{bubbles:!0,detail:e}):(o=document.createEvent("CustomEvent")).initCustomEvent(n,!0,!1,e),t.dispatchEvent(o),o},destroy:function(){t.forEach((function(t){t[4]()})),t.length=0}}}();return t&&t.event.on(g,e.destroy),u(e,{bus:n,on:function(t,o){e.bind(n,s(t).join(" "),(function(t){o.apply(o,r(t.detail)?t.detail:[])}))},off:i(e.unbind,n),emit:function(t){e.dispatch(n,t,o(arguments,1))}})}var v=l,b=l+"__slide",y=b+"__container";function w(t){t.length=0}function E(t,n,e){return Array.prototype.slice.call(t,n,e)}function I(t){return t.bind(null,...E(arguments,1))}function x(t,n){return typeof n===t}const j=Array.isArray;I(x,"function");const k=I(x,"string"),S=I(x,"undefined");function N(t){return null===t}function C(t){return j(t)?t:[t]}function M(t,n){C(t).forEach(n)}function D(t,n){return t.push(...C(n)),t}function A(t,n,e){t&&M(n,(n=>{n&&t.classList[e?"add":"remove"](n)}))}function L(t,n){A(t,k(n)?n.split(" "):n,!0)}function T(t,n){M(n,t.appendChild.bind(t))}function O(t,n){return t instanceof HTMLElement&&(t.msMatchesSelector||t.matches).call(t,n)}function P(t,n){return n?function(t,n){const e=t?E(t.children):[];return n?e.filter((t=>O(t,n))):e}(t,n)[0]:t.firstElementChild}const z=Object.keys;function U(t,n,e){if(t){let o=z(t);o=e?o.reverse():o;for(let e=0;e<o.length;e++){const i=o[e];if("__proto__"!==i&&!1===n(t[i],i))break}}return t}function W(t,n){M(t,(t=>{M(n,(n=>{t&&t.removeAttribute(n)}))}))}function B(t,n,e){var o;!N(o=n)&&x("object",o)?U(n,((n,e)=>{B(t,e,n)})):M(t,(t=>{N(e)||""===e?W(t,n):t.setAttribute(n,String(e))}))}function F(t,n,e){const o=document.createElement(t);return n&&(k(n)?L(o,n):B(o,n)),e&&T(e,o),o}function H(t,n,e){if(S(e))return getComputedStyle(t)[n];N(e)||(t.style[n]="".concat(e))}function R(t,n){return n?E(t.querySelectorAll(n)):[]}function Z(t,n){A(t,n,!1)}function q(t){return k(t)?t:t?"".concat(t,"px"):""}const Q="splide";const{min:$,max:G,floor:J,ceil:K,abs:V}=Math;const X="".concat(b,"__row"),Y="".concat(b,"--col"),tt={rows:1,cols:1,dimensions:[],gap:{}};function nt(t){function n(){const{rows:n,cols:e,dimensions:o}=t;return j(o)&&o.length?o:[[n,e]]}return{get:function(t){const e=n();return e[$(t,e.length-1)]},getAt:function(t){const e=n();let o,i,c=0;for(let n=0;n<e.length;n++){const r=e[n];if(o=r[0]||1,i=r[1]||1,c+=o*i,t<c)break}return function(t,n){if(!t)throw new Error("[".concat(Q,"] ").concat(n||""))}(o&&i,"Invalid dimension"),[o,i]}}}function et(t,n,e){const{on:o,destroy:i}=_(t),{Components:c,options:r}=t,{resolve:s}=c.Direction,{forEach:a}=c.Slides;function d(t,n){const e=P(t,".".concat(y)),o=P(e||t,"img");o&&o.src&&(H(e||t,"background",n?"":'center/cover no-repeat url("'.concat(o.src,'")')),H(o,"display",n?"":"none"))}function u(t){return R(t,".".concat(X))}function l(t){return R(t,".".concat(Y))}function h(t,n){l(t).forEach((t=>{B(t,"tabindex",n?0:null)}))}function m(t){h(t.slide,!0)}function g(t){h(t.slide,!1)}return{mount:function(){a((o=>{const{slide:i}=o,[c,r]=e.get(o.isClone?o.slideIndex:o.index);!function(t,e){const{row:o}=n.gap,i="calc(".concat(100/t,"%").concat(o?" - ".concat(q(o)," * ").concat((t-1)/t):"",")");u(e).forEach(((t,n,e)=>{H(t,"height",i),H(t,"display","flex"),H(t,"margin","0 0 ".concat(q(o)," 0")),H(t,"padding",0),n===e.length-1&&H(t,"marginBottom",0)}))}(c,i),function(t,e){const{col:o}=n.gap,i="calc(".concat(100/t,"%").concat(o?" - ".concat(q(o)," * ").concat((t-1)/t):"",")");l(e).forEach(((t,n,e)=>{H(t,"width",i),n!==e.length-1&&H(t,s("marginRight"),q(o))}))}(r,i),l(o.slide).forEach(((n,e)=>{var i;n.id="".concat(o.slide.id,"-col").concat((i=e+1)<10?"0".concat(i):"".concat(i)),t.options.cover&&d(n)}))})),r.slideFocus&&(o(f,m),o(p,g))},destroy:function(){a((t=>{const{slide:n}=t;h(n,!1),u(n).forEach((t=>{W(t,"style")})),l(n).forEach((t=>{d(t,!0),W(t,"style")}))})),i()}}}function ot(t,n,e){const{on:o,off:i}=_(t),{Elements:c}=n,r={},s=nt(r),a=et(t,r,s),d="".concat(v,"--grid"),u=[];function l(){var n,a;n=r,C(a||z(n)).forEach((t=>{delete n[t]})),function(t){E(arguments,1).forEach((n=>{U(n,((e,o)=>{t[o]=n[o]}))}))}(r,tt,e.grid||{}),!function(){if(e.grid){const{rows:t,cols:n,dimensions:e}=r;return t>1||n>1||j(e)&&e.length>0}return!1}()?y()&&(f(),p()):(f(),D(u,c.slides),L(t.root,d),T(c.list,function(){const t=[];let n,e,o=0,i=0;return u.forEach(((c,r)=>{const[a,d]=s.getAt(r);i||(o||(n=F(c.tagName,b),t.push(n)),e=function(t,n,e){const o="li"===n.tagName.toLowerCase()?"ul":"div";return F(o,X,e)}(0,c,n)),function(t,n,e){L(n,Y),T(e,n)}(0,c,e),++i>=d&&(i=0,o=++o>=a?0:o)})),t}()),i(h),o(h,g),p())}function f(){if(y()){const{slides:n}=c;a.destroy(),u.forEach((t=>{Z(t,Y),T(c.list,t)})),M(n,(t=>{t&&t.parentNode&&t.parentNode.removeChild(t)})),Z(t.root,d),w(n),D(n,u),w(u),i(h)}}function p(){t.refresh()}function g(){y()&&a.mount()}function y(){return n=t.root,e=d,n&&n.classList.contains(e);var n,e}return{mount:function(){l(),o(m,l)},destroy:f}}},80413:(t,n,e)=>{n.Ad=void 0;var o=e(7782);var i=e(94590);Object.defineProperty(n,"Ad",{enumerable:!0,get:function(){return i.getImageSize}});var c=e(52047)},7782:(t,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.ErrorMessage=void 0,n.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},94590:(t,n,e)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.getImageSize=void 0;const o=e(7782);n.getImageSize=function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((e,i)=>{if("undefined"===typeof window)return i(o.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return i(o.ErrorMessage.URL_IS_NOT_DEFINED);let c=null;const r=new Image;r.addEventListener("load",(()=>{c&&window.clearTimeout(c),e({width:r.naturalWidth,height:r.naturalHeight})})),r.addEventListener("error",(t=>{c&&window.clearTimeout(c),i("".concat(t.type,": ").concat(t.message))})),r.src=t,n.timeout&&(c=window.setTimeout((()=>i(o.ErrorMessage.TIMEOUT)),n.timeout))}))}},52047:function(t,n,e){var o=this&&this.__awaiter||function(t,n,e,o){return new(e||(e=Promise))((function(i,c){function r(t){try{a(o.next(t))}catch(n){c(n)}}function s(t){try{a(o.throw(t))}catch(n){c(n)}}function a(t){var n;t.done?i(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(r,s)}a((o=o.apply(t,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.useImageSize=void 0;const i=e(72791),c=e(94590);n.useImageSize=(t,n)=>{const[e,r]=(0,i.useState)(null),[s,a]=(0,i.useState)(!1),[d,u]=(0,i.useState)(null);return(0,i.useEffect)((()=>{o(void 0,void 0,void 0,(function*(){a(!0),r(null);try{const{width:e,height:o}=yield(0,c.getImageSize)(t,n);r({width:e,height:o})}catch(d){u(d.toString())}finally{a(!1)}}))}),[t,n]),[e,{loading:s,error:d}]}},59169:()=>{}}]);
//# sourceMappingURL=5192.9966bf69.chunk.js.map