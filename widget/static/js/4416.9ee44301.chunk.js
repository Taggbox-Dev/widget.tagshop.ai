"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4416],{64416:(t,e,o)=>{o.r(e),o.d(e,{default:()=>r});var c=o(47313),i=o(46335),n=o(63214),l=o(46417);const s=(t,e,o,c)=>{const n={like:"https://twitter.com/intent/favorite?tweet_id=".concat((0,i.ok)(e)),comment:"https://twitter.com/intent/tweet?in_reply_to=".concat((0,i.ok)(e)),retweet:"https://twitter.com/intent/retweet?tweet_id=".concat((0,i.ok)(e))};return 1===t?n[c]:o},a=t=>{let{label:e,hrefClick:o,Icon:c,count:n,itemId:s=0,type:a}=t;const r=n>0?(0,i.sy)(n):"";return(0,l.jsx)("div",{className:"tb_social_action__list",role:"listitem","aria-roledescription":"post social action links",children:(0,l.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(o,"_blank")},className:"tb_social_action__ico_wrap tb_social_action__ico_wrap_".concat(s),"aria-label":"".concat(e," post ").concat(a," count ").concat(r),role:"button",tabIndex:"0",children:[(0,l.jsx)("div",{className:"tb_social_action_ico__ tb__icon tb-".concat(c),children:"  "}),r?(0,l.jsx)("div",{className:"tb_social_action_counts__",children:r}):""]})})};class r extends c.PureComponent{componentDidMount(){try{var t;const{Post:e}=this.props,o=".tb_social_action__ico_wrap_".concat(null===e||void 0===e?void 0:e.id);null===(t=document.querySelector(o))||void 0===t||t.addEventListener("keydown",(function(t){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.click())}))}catch(e){console.log(e)}}render(){const{Post:t,CardStyle:e,actionClass:o}=this.props,{icon:c,style:i}=e,r={color:c.default?i.color:c.color},d=t.networkId,{comment:_,like:m}=t.count,u=[3,10,7].includes(d)?"like":"heart-outline",p=[1,2,3,7,8,9,10,18].includes(d),k=![29,19].includes(d),b=(0,n.BK)(d);return[29,26,23,6,5,11,12,15,20,21].includes(d)?null:(0,l.jsx)("div",{className:o,children:(0,l.jsxs)("div",{className:"tb_social_action__",role:"list",children:[p&&(0,l.jsx)(a,{itemId:t.id,label:b,hrefClick:s(d,t.postId,t.link,"like"),Icon:u,iconStyle:r,count:m,type:"like"}),k&&(0,l.jsx)(a,{itemId:t.id,label:b,hrefClick:s(d,t.postId,t.link,"comment"),Icon:"comment",iconStyle:r,count:_,type:"comment"}),1===d&&(0,l.jsx)(a,{itemId:t.id,label:b,hrefClick:s(d,t.postId,t.link,"retweet"),Icon:"retweet",iconStyle:r,count:_,type:"comment"}),(0,l.jsx)(a,{label:b,itemId:t.id,hrefClick:t.link,Icon:"eye",iconStyle:r,count:0,type:"view"})]})})}}}}]);