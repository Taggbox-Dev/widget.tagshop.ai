"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3108],{53108:(t,e,i)=>{i.r(e),i.d(e,{default:()=>c});var a=i(72791),s=i(11225),o=i(87641),d=i(2703),n=i(80184);const r=JSON.parse(window.localStorage.getItem("mediaDimension"));class c extends a.PureComponent{constructor(t){super(t),this.updateImageDimensions=()=>{if(this.mediaRef.current){1===this.mediaRef.current.getAttribute("data-load")&&this.setState({imgUrl:this.mediaRef.current.src});const t=[this.mediaRef.current.offsetHeight,this.mediaRef.current.offsetWidth];window.localStorage.setItem("mediaDimension",JSON.stringify(t)),this.setState({largerHeight:t[0]>this.state.largerHeight?t[0]:this.state.largerHeight,mediaLoaded:!0,mediaSize:{height:this.mediaRef.current.offsetHeight,width:this.mediaRef.current.offsetWidth}},(()=>this.props.mediaSizeCallback({height:this.state.mediaSize.height,width:this.state.mediaSize.width})))}},this.state={mediaSize:{height:null!=r?r[0]:"85vh",width:null!=r?r[1]:"85vh"},mediaLoaded:!1,imgUrl:t.ImageUrl,largerHeight:0},this.mediaRef=a.createRef()}componentWillReceiveProps(t){const{ImageUrl:e}=t;this.state.imgUrl!==e&&this.setState({imgUrl:e,mediaLoaded:!1})}componentDidMount(){window.addEventListener&&window.addEventListener("resize",this.updateImageDimensions)}componentWillUnmount(){window.removeEventListener("resize",this.updateImageDimensions)}render(){const{data:t,wall:e,opacity:i}=this.props,{imgUrl:a,mediaSize:r,mediaLoaded:c}=this.state,l=!!(t.hotspot&&t.ugc_products.length>0);return(0,n.jsxs)("div",{className:"tb_post_modal_img_holder".concat(c?"":" tb_media_modal_spinner"),style:{minHeight:c?null:r.height,minWidth:c?null:r.width},children:[l?(0,n.jsx)(o.Z,{product:t.ugc_products}):null,(0,n.jsx)("img",{className:"tb_post_modal_img_",decoding:"async",ref:this.mediaRef,src:a,alt:(0,d.P)(a),"data-link":t.link,"data-network":t.network.id,"data-wall-id":e.Wall.id,"data-owner-id":e.Wall.owner,"data-item-id":t.id,"data-feed-id":t.feedId?t.feedId:"","data-filter-id":t.filterId,"data-load":"0",onLoad:this.updateImageDimensions,onError:t.stories?null:t=>{(0,s.ht)(t)},loading:"lazy",draggable:"false",style:{opacity:c?i:0}},a)]})}}},87641:(t,e,i)=>{i.d(e,{Z:()=>p});var a=i(72791),s=i(77581),o=i(89057),d=i(18947),n=i(2703),r=i(80184);const c=(0,o.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),l=t=>'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n  <div class="tb_p_tooltip_title">').concat(t.product_title,'</div>\n  <div class="tb_p_tooltip_price tb_price_disabled">').concat(t.price_currency_symbol).concat(t.product_discount,'</div>\n  <div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(t.product_price,"</div>\n  </a>");class h extends a.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:i}=this.state,a=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return a.status?(0,r.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const s=(0,n.i1)();return(0,r.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(s),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(i==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,r.jsx)("div",{className:"tb_hotspot__ ".concat(0==a.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,r.jsx)(c,{children:(0,r.jsx)(d.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(s),clickable:!0,html:l(t.UgcProduct)})})]},e)}))}):null}}const p=(0,s.$j)((t=>({appData:t.appData})))(h)}}]);
//# sourceMappingURL=3108.1a11d778.chunk.js.map