"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[629],{30629:(s,t,e)=>{e.r(t),e.d(t,{default:()=>c});var n=e(9950),l=e(48400),a=e(10300),o=e(80415),i=e(66345),d=e(52867),p=e(93152),_=e(44414);class b extends n.PureComponent{render(){const{SnapUp:s,id:t,webId:e}=this.props;window.ugcSuite||i.Nz;const n=!(e||!i.HY),{QrCode:a,Form:p}=s,b=a.status||""!=a.text?a.text:"",c=i.HY?`${o.$R}/${t}/onsite-upload${n?"?wall=1":""}`:`${i.aD&&!i.Vn?o.GR:o.Hy}/${t}?onsite-upload=true${i.Nz}`,r=i.aD&&!i.Vn?b.length<31?"tb_snap_btn_wall tb_snap_btn_wall_v":"tb_snap_btn_wall":"",u=null!==a&&void 0!==a&&a.position?` tb_pos-${a.position}`:null;return!p.status||!i.HY&&!p.status||1!=a.status&&""===b?null:(0,_.jsx)("div",{className:`tb_onsite_upload_btn_wrap ${r}${u}`,children:(0,_.jsxs)("div",{className:"tb_onsite_upload_btn",children:[(0,_.jsx)("div",{className:"tb_snap_btn_bg",style:{opacity:i.aD?.7:null},children:(0,_.jsx)("div",{})}),(0,_.jsx)("div",{className:"tb_onsite_btn",onClick:()=>i.bU||(0,d.vq)("display.socialwalls.com")?this.props.onSitePopup(!1):this.props.onSitePopup(!0),children:(0,_.jsxs)("div",{className:"tb_onsite_qr_btn_wrap",children:[1==a.status?(0,_.jsx)("div",{className:"tb_onsite_qr_code",children:(0,_.jsx)(l.Ay,{level:"L",size:60,value:c,fgColor:"#000",bgColor:"#fff"})}):null,""!==b?(0,_.jsx)("div",{className:`tb_onsite_btn_txt tb-cTBfont-${a.style.variant}`,children:b}):""]})})]})})}}const c=(0,a.Ng)((s=>({modalPop:s.modalPop})),(s=>({onSitePopup:t=>s((0,p.b8)(t))})))(b)}}]);