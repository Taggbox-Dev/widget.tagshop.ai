(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[8342],{62245:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var s=n(47313),i=n(16390),o=n(17739),l=(n(35179),n(25810),n(46417));const c=s.lazy((()=>Promise.all([n.e(622),n.e(584)]).then(n.bind(n,30584))));class a extends s.PureComponent{constructor(e){super(e),this.contentRef=s.createRef()}componentDidMount(){setTimeout((()=>{var e,t;const n=(null===(e=this.contentRef)||void 0===e||null===(t=e.current)||void 0===t?void 0:t.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(n)}),100)}render(){const{contentClass:e,content:t,ThemeRule:n,font:a,personalization:r,item:d,contentTitle:m,readMore:u,maxLength:h,textAlign:p,maxLines:x,isReadMore:f}=this.props,b={WebkitLineClamp:x,textAlign:n.textAlignment};p||n.textAlignment;let k=20==d.network.id?t:(0,o.Fx)(t);12==d.network.id&&(k=(0,i.ZP)(k));const g="".concat(n.lineTrim?" tb_content_line-".concat(n.lineTrim):""),R="".concat(e," ").concat(f?"":g);return(0,l.jsxs)("div",{className:R,ref:this.contentRef,style:b,children:[m?(0,l.jsx)("div",{className:"tb_bold_txt__",children:(0,i.ZP)(m)}):null,(0,l.jsxs)(s.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:[" ",(0,l.jsx)(c,{data:d,content:k,Personalization:r})]})]})}}},50247:()=>{}}]);