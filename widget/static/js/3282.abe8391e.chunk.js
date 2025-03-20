"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3282],{73282:(s,e,t)=>{t.r(e),t.d(e,{default:()=>c});var a=t(47313),i=t(65537),r=t(46417);class l extends a.PureComponent{render(){return(0,r.jsx)("div",{className:"tb_share_post_succ",children:(0,r.jsxs)("div",{className:"tb_share_post_succ_00",children:[(0,r.jsx)("div",{className:"tb_share_post_title",children:"Success"}),(0,r.jsx)("div",{className:"tb_share_post_p",children:"Post shared successfully on email"}),(0,r.jsx)("div",{className:"tb_share_post_succ_ico",children:(0,r.jsx)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 98.5 98.5",enableBackground:"new 0 0 98.5 98.5",space:"preserve",children:(0,r.jsx)("path",{className:"tb_share_post_suc_svg",fill:"none",strokeWidth:"8",strokeMiterlimit:"10",d:"M81.7,17.8C73.5,9.3,62,4,49.2,4C24.3,4,4,24.3,4,49.2s20.3,45.2,45.2,45.2s45.2-20.3,45.2-45.2c0-8.6-2.4-16.6-6.5-23.4l0,0L45.6,68.2L24.7,47.3"})})})]})})}}var o=t(3671);const n=s=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(s).toLowerCase());class h extends a.PureComponent{constructor(){super(...arguments),this.state={email:"",emailError:!1,submitErrorMessage:null,modalShow:!1,successModal:!1,loadbtn:!1},this.onTextEmail=s=>{this.setState({email:s.target.value,emailError:!1},(()=>{null!=this.state.email&&0!=this.state.email.length&&n(this.state.email)&&!this.state.email.includes("mailinator")||this.setState({emailError:!0})}))},this.onSubmitData=s=>{const{email:e}=this.state,{item:t}=this.props,a=this.props.userName,i=this.props.postLink,r={image:t.file,rating:t.rating,network:t.network.id,authorImage:t.author.picture,authorName:t.author.name,authorUsername:t.author.username,content:t.content,time:t.createdAt,mediaType:t.type};e&&e.length>0&&n(e)&&!e.includes("mailinator")?(this.setState({loadbtn:!0}),(0,o.pE)({email:e,username:a,link:i,post_data:r}).then((s=>{this.setState({successModal:!0,loadbtn:!1})})).catch((s=>{this.setState({loadbtn:!1});const{data:e}=s.response;404==e.response_code?this.setState({submitErrorMessage:e.message}):this.setState({submitErrorMessage:"Something went wrong"})}))):null!=this.state.email&&0!=this.state.email.length&&n(this.state.email)&&!e.includes("mailinator")||this.setState({emailError:!0})},this.onClose=s=>{const{sharePostClosePopUP:e}=this.props;e()},this.popUpCloseClckOnWindow=()=>{var s=this;document.addEventListener("click",(e=>{e.target.matches(".tb_share_post_modal")&&s.props.sharePostClosePopUP()}),!1)}}componentDidMount(){setTimeout((()=>this.setState({modalShow:!0})),100),this.popUpCloseClckOnWindow()}render(){const{email:s,emailError:e,submitErrorMessage:t,successModal:a,modalShow:i,loadbtn:o}=this.state;return(0,r.jsx)("div",{className:"tb_share_post_modal ".concat(i?"tb_modal_show":""),children:(0,r.jsx)("div",{className:"tb_share_post_container",children:(0,r.jsxs)("div",{className:"tb_share_post_body",children:[(0,r.jsx)("div",{className:"tb_share_post_close",onClick:this.onClose,children:(0,r.jsx)("div",{className:"tb_share_close_ico tb__icon tb-close-alt",children:" "})}),a?(0,r.jsx)(l,{}):(0,r.jsxs)("div",{className:"tb_share_post_wrapper",children:[(0,r.jsx)("div",{className:"tb_share_post_title",children:"Share This Social Post On Email"}),(0,r.jsx)("div",{className:"tb_share_post_p",children:"Share the social media post with anyone by entering the email address below."}),(0,r.jsxs)("div",{className:"tb_share_post_form",children:[(0,r.jsxs)("div",{className:"tb_share_post_form_group",children:[(0,r.jsxs)("div",{className:"tb_share_post_label",children:["Email ",(0,r.jsx)("div",{className:"tb_share_post_required",children:"*"})]}),(0,r.jsx)("input",{type:"email",value:s,className:"tb_share_post_input",onChange:this.onTextEmail,placeholder:"Enter email address"}),e?(0,r.jsx)("div",{className:"tb_share_post_error_",children:"* Please enter correct email."}):null]}),(0,r.jsxs)("div",{className:"tb_share_post_buttons",children:[(0,r.jsx)("div",{className:"tb_share_post_cancel",onClick:this.onClose,children:"Cancel"}),(0,r.jsx)("div",{className:"tb_share_post_submit ".concat(o?"tb_share_post_spinner":""),onClick:this.onSubmitData,children:"Submit"})]}),t&&t.length>0?(0,r.jsxs)("div",{className:"tb_share_post_error",children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",version:"1.1",children:(0,r.jsxs)("g",{id:"Stockholm-icons-/-Code-/-Info-circle",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:[(0,r.jsx)("rect",{id:"bound",x:"0",y:"0",width:"24",height:"24"}),(0,r.jsx)("circle",{id:"Oval-5",fill:"#db4b20",opacity:"0.3",cx:"12",cy:"12",r:"10"}),(0,r.jsx)("rect",{id:"Rectangle-9",fill:"#db4b20",x:"11",y:"10",width:"2",height:"7",rx:"1"}),(0,r.jsx)("rect",{id:"Rectangle-9-Copy",fill:"#db4b20",x:"11",y:"7",width:"2",height:"2",rx:"1"})]})}),t]}):null]})]})]})})})}}const c=(0,i.$j)((s=>({item:s.modalPop.shareData})),(s=>({sharePostClosePopUP:()=>s((0,o.ES)())})))(h)}}]);