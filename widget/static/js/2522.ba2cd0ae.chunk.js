"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2522],{12522:(e,t,i)=>{i.r(t),i.d(t,{default:()=>v});var s=i(47313),a=i(43411),l=i(43635),r=i(46417);const o=Array.from({length:5},((e,t)=>t+1));class n extends s.Component{constructor(e){super(e),this.handleClick=e=>{const{isActiveIndex:t,addRatings:i}=this.props;this.setState({activeIndex:e}),i(e)},this.handleMouseEnter=e=>{this.setState({hoverIndex:e})},this.handleMouseLeave=()=>{this.setState({hoverIndex:null})},this.state={activeIndex:null,hoverIndex:null}}render(){const{hoverIndex:e,activeIndex:t}=this.state;return(0,r.jsx)("div",{className:"t_rate_wrap",children:o.map(((i,s)=>(0,r.jsx)("div",{className:"t_star_ico_wrap \n                            ".concat(i<=e?"t_h_active_":"","\n                            ").concat(i<=t?"t_active_":"","\n                            "),onClick:()=>this.handleClick(i),onMouseEnter:()=>this.handleMouseEnter(i),onMouseLeave:this.handleMouseLeave,children:(0,r.jsx)("div",{className:"t_star_ico tb__icon tb-star-line",children:(0,r.jsx)("div",{})})},s)))})}}const c=n;var d=i(17739),h=i(98501);const m=s.lazy((()=>Promise.all([i.e(8349),i.e(8783)]).then(i.bind(i,97591)))),_=e=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase()),u=e=>{let{wall:t,type:i,onClosePopUp:s}=e;return(0,r.jsx)("div",{className:"t_modal_content",children:(0,r.jsxs)("div",{className:"t_s_wrap",children:[(0,r.jsx)("img",{className:"t_s_icon_",src:"".concat(h.do,"/media/images/").concat(i,"-icon.svg"),height:80,width:80,alt:""}),"check"==i?(0,r.jsx)("div",{className:"t_s_title",children:"Thanks for Your Efforts!"}):null,(0,r.jsx)("div",{className:"t_s_desc",children:t.UgcSettings.onsite_status?t.UgcSettings.onsite_succ_msg:"Thank you for sharing your amazing content with us."}),(0,r.jsx)("div",{className:"t_f_close_wrap",children:(0,r.jsx)("button",{className:"t_f_p_btn",onClick:s,children:"Close"})})]})})};class p extends s.Component{constructor(){super(...arguments),this.state={submitPost:!0,activeTab:1,isOpen:!0,step:1,wall_id:null,name:null,email:null,upload_image:[],receiveMail:!1,tandc:!0,nameError:!1,emailError:!1,submitErrorMessage:null,apiRequest:!1,isActiveIndex:0,isAddMoreActive:!1,isEdit:!1,submitError:!1,is_terms_check:0,errorClickMore:!1,uploadError:"",rateProduct:0,reviewTitle:null,review:null,rateProductError:!1,reviewTitleError:!1,captionError:!1},this.handleNext=e=>this.setState({submitPost:!1}),this.hanleTab1=e=>this.setState({activeTab:1}),this.hanleTab2=e=>this.setState({activeTab:2}),this.onShowCloseSubmitPicPopUp=e=>{const{isOpen:t}=this.state;this.setState({isOpen:!t})},this.updateImageWithData=e=>{const{upload_image:t}=this.state;t&&t.length<20&&(t.push(e),this.setState({upload_image:t}))},this.onClickToaddMore=e=>{const{upload_image:t}=this.state,{wall:i}=this.props;if(t&&t.length<20){const e=3==i.UgcSettings.choose_content_category?2:1;t.push({file:null,caption:null,review:null,rating:0,error:!1,activeTab:e,type:1,thumb_file:"",videoPath:""}),this.setState({isAddMoreActive:!0,upload_image:t,isActiveIndex:0==t.length||1==t.length?0:parseInt(t.length)-1,step:1,activeTab:e,submitError:!1,errorClickMore:!1})}else t.length>=20&&this.setState({errorClickMore:!0})},this.onClickToUpdateMoreStep=e=>t=>{const{isAddMoreActive:i,isActiveIndex:s,upload_image:a}=this.state;i&&a[s]&&a.splice(s,1),this.setState({isAddMoreActive:!1,upload_image:a,step:e,isEdit:!1,isActiveIndex:a&&a.length>0&&parseInt(a.length)-1>0?parseInt(a.length)-1:0,activeTab:1,errorClickMore:!1})},this.onClickToUpdateStep=e=>t=>{var i=!1;const{upload_image:s,isActiveIndex:a,activeTab:l}=this.state;s&&s[a]&&(1==l?null==s[a].caption||""==s[a].caption||0==s[a].caption.trim().length?(s[a].error=!0,i=!0):s[a].error=!1:2==l&&(null==s[a].review||""==s[a].review||0==s[a].review.length||0==s[a].rating?(s[a].error=!0,i=!0):s[a].error=!1)),i?this.setState({upload_image:s}):this.setState({isAddMoreActive:!1,upload_image:s,step:e,isEdit:!1,activeTab:1,submitErrorMessage:null,errorClickMore:!1})},this.onSubmitPostData=e=>{const{name:t,email:i,upload_image:s,is_terms_check:a,tandc:r,receiveMail:o,rateProduct:n,reviewTitle:c,review:d}=this.state,{wallId:h,modalPop:m,wall:u,feeds:p}=this.props;if(this.setState({submitError:!1}),r&&(null===t||void 0===t?void 0:t.length)>0&&(null===i||void 0===i?void 0:i.length)>0&&_(i)&&!i.includes("mailinator")&&r&&n>0&&c&&(null===d||void 0===d?void 0:d.length)>0){this.setState({apiRequest:!0});var v=!!window.ugcSuite||!!window.location.href.includes("ugcSuite=1"),g={};v&&p&&p.length>0&&p.map((e=>{e&&e.Network&&Object.keys(e.Network).length>0&&29==e.Network.id&&e.value1&&(g={feedId:e.value1})}));let e=[];s&&s.length>0?s.map((t=>{e.push({...t})})):e=[{video:"",type:1,height:"",width:"",thumbnail:""}];const r={wallId:null!==u&&void 0!==u&&u.Wall.wallId?null===u||void 0===u?void 0:u.Wall.wallId:h,name:t,email:i,media:e,onsite_token:m.onsite_token,...g,caption:d,rating:n,title:c};[104746].includes(u.Wall.owner)&&(r.is_terms_check=a),(0,l.uM)(r).then((e=>{const{onsite_token:t}=e.data;this.props.onsiteTokenUpdate(t),this.setState({step:3,apiRequest:!1},(()=>setTimeout((()=>this.props.onSitePopup(!1)),5e3)),document.querySelector("html").style.overflow="auto")})).catch((e=>{const{message:t}=e.toJSON();t&&this.setState({submitError:!0,submitErrorMessage:t,apiRequest:!1}),console.error(e)}))}else null!=this.state.review&&0!=this.state.review.trim().length||this.setState({captionError:!0,apiRequest:!1}),null!=this.state.name&&0!=this.state.name.trim().length||this.setState({nameError:!0,apiRequest:!1}),null!=this.state.email&&0!=this.state.email.trim().length&&_(this.state.email)&&!i.includes("mailinator")||this.setState({emailError:!0,apiRequest:!1}),0==n&&this.setState({rateProductError:!0}),null!=this.state.reviewTitle&&0!=this.state.reviewTitle.trim().length||this.setState({reviewTitleError:!0,apiRequest:!1})},this.addCaption=e=>{String(e.target.value).length<=500?this.setState({review:e.target.value,captionError:!1}):this.setState({captionError:!0})},this.addReview=e=>t=>{const{upload_image:i}=this.state;i&&i[e]&&(i[e].review=t.target.value,i[e].caption="",i[e].error=!1,i[e].activeTab=2,this.setState({upload_image:i}))},this.addRatings=(e,t)=>{this.setState({rateProduct:e,rateProductError:!1})},this.onChangeReviewTitle=e=>{this.setState({reviewTitle:e.target.value,reviewTitleError:!1})},this.addPostImage=(e,t,i,s,a,l,r,o,n,c)=>{const{upload_image:d}=this.state,h={video:e,type:s,height:n,width:c,thumbnail:t};d.push(h),this.setState({upload_image:d,isActiveIndex:d.length+1})},this.onClickToRemove=e=>t=>{const{upload_image:i,isActiveIndex:s}=this.state;i&&i.length>0&&i.splice(e,1),this.setState({upload_image:i,errorClickMore:!1,isActiveIndex:i.length+1})},this.onClickToImageRemove=e=>t=>{const{upload_image:i}=this.state;i&&i[e]&&(i[e].file=null,i[e].thumb_file="",i[e].videoPath="",i[e].type=1,i[e].ext=null,i[e].size=0,i[e].fileName=null,i[e].mediaHeight=0,i[e].mediaWidth=0,this.setState({upload_image:i}),(0,d.AB)(2))},this.onClickToEdit=e=>t=>{const{upload_image:i}=this.state;let s=1;i&&i[e]&&(s=i[e].activeTab),this.setState({isActiveIndex:e,isEdit:!0,step:1,activeTab:s})},this.onTextName=e=>{this.setState({name:e.target.value,nameError:!1},(()=>{null!=this.state.name&&0!=this.state.name.length||this.setState({nameError:!0})}))},this.onTextEmail=e=>{this.setState({email:e.target.value,emailError:!1},(()=>{null!=this.state.email&&0!=this.state.email.length&&_(this.state.email)&&!this.state.email.includes("mailinator")||this.setState({emailError:!0})}))},this.onUpdatereceiveMail=e=>{const{receiveMail:t}=this.state;this.setState({receiveMail:!t})},this.onUpdatetandc=e=>{const{tandc:t}=this.state;this.setState({tandc:!t})},this.onClosePopUp=()=>{this.props.onSitePopup(!1),document.querySelector("html").style.overflow="auto"},this.termsCheck=e=>{this.setState({is_terms_check:e})},this.uploadErrorCallback=e=>{this.setState({uploadError:e},(()=>{setTimeout((()=>{this.setState({uploadError:""})}),5e3)}))}}componentDidMount(){const{wall:e}=this.props;this.setState({activeTab:3==e.UgcSettings.choose_content_category?2:1})}render(){const{activeTab:e,isActiveIndex:t,step:i,upload_image:a,isAddMoreActive:l,isEdit:o,name:n,email:d,receiveMail:h,tandc:_,nameError:p,emailError:v,apiRequest:g,submitError:x,submitErrorMessage:j,errorClickMore:N,uploadError:S,reviewTitle:b,review:k,rateProductError:w,reviewTitleError:f,captionError:E}=this.state,{wall:C,modalPop:T}=this.props,{onClosePopUp:M}=this;return(0,r.jsxs)("div",{className:"t_modal",children:[(0,r.jsx)("div",{className:"t_overlay_",children:(0,r.jsx)("div",{})}),(0,r.jsx)("div",{className:"t_modal_wrap",children:C&&C.UgcSettings&&Object.keys(C.UgcSettings).length>0&&C.UgcSettings.onsite_status?(0,r.jsx)("div",{className:"t_modal_container",children:3==i?(0,r.jsx)(u,{wall:C,onClosePopUp:M,type:"check"}):(0,r.jsxs)("div",{className:"t_modal_content",children:[(0,r.jsx)("div",{className:"t_m_close_btn tb__icon tb-close-alt",onClick:M,children:(0,r.jsx)("div",{})}),(0,r.jsx)("div",{className:"t_m_title",children:"Write a review"}),(0,r.jsxs)("div",{className:"t_f_group",children:[(0,r.jsxs)("div",{className:"t_label_",children:["Rate the Product ",(0,r.jsx)("div",{className:"t_t_danger",children:"*"})]}),(0,r.jsx)(c,{isActiveIndex:t,onClickToUpdateStep:this.onClickToUpdateStep,onClickToUpdateMoreStep:this.onClickToUpdateMoreStep,isAddMoreActive:l,item:a[t],addRatings:this.addRatings}),w?(0,r.jsx)("div",{className:"t_f_error",children:" * Rating is required."}):null]}),(0,r.jsxs)("div",{className:"t_f_group",children:[(0,r.jsxs)("div",{className:"t_label_",children:["Review Title ",(0,r.jsx)("div",{className:"t_t_danger",children:"*"})]}),(0,r.jsx)("input",{type:"text",className:"t_from_input ".concat(f?"t_f_invalid":""),placeholder:"Enter review title",onChange:this.onChangeReviewTitle,value:b}),f?(0,r.jsx)("div",{className:"t_f_error",children:" * Review Title is required."}):null]}),(0,r.jsxs)("div",{className:"t_f_group",children:[(0,r.jsxs)("div",{className:"t_label_",children:["Review  ",(0,r.jsx)("div",{className:"t_t_danger",children:"*"})]}),(0,r.jsx)("textarea",{className:"t_from_textarea ".concat(E?"t_f_invalid":""),placeholder:"Write your review here",onChange:this.addCaption,children:k}),E?(0,r.jsxs)("div",{className:"t_f_error",children:[" * ",String(k).length<=0?"Review is required.":"Review limit of 500 exceeded!"]}):null]}),(0,r.jsxs)("div",{className:"t_f_group",children:[(0,r.jsx)("div",{className:"t_label_",children:"Picture/Video (optional)"}),(0,r.jsxs)("div",{className:"t_f_upload",children:[a&&a.length>0?a&&a.map(((e,t)=>e.thumbnail?(0,r.jsxs)("div",{className:"t_m_up_img_wrap",onClick:this.onClickToEdit(t),children:[e.thumbnail?(0,r.jsxs)("div",{className:"t_m_up_img_in",children:[(0,r.jsx)("img",{className:"t_m_up_img",src:e.thumbnail,height:80,width:80,alt:""}),3==e.type||5==e.type?(0,r.jsx)("div",{className:"t_m_vi_ico tb__icon tb-play",children:(0,r.jsx)("div",{})}):null]}):null,(0,r.jsx)("div",{className:"t_m_remove_btn tb__icon tb-close-alt",onClick:this.onClickToRemove(t),children:(0,r.jsx)("div",{})})]},t):null)):null,(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)("div",{className:"t_m_upload",children:"Loading..."}),children:(0,r.jsx)(m,{updateImageWithData:this.updateImageWithData,isActiveIndex:t,addPostImage:this.addPostImage,onsite_token:T.onsite_token,uploadErrorCallback:this.uploadErrorCallback,upload_image:a,onClickToUpdateMoreStep:this.onClickToUpdateMoreStep})})]}),(0,r.jsx)("div",{className:"t_info_",children:"Video Size : Max 100MB | Photo Size : Max 15MB | Max 20"}),S?(0,r.jsx)("div",{className:"t_f_error",children:S}):null]}),(0,r.jsxs)("div",{className:"t_row_",children:[(0,r.jsx)("div",{className:"t_col_",children:(0,r.jsxs)("div",{className:"t_f_group",children:[(0,r.jsxs)("div",{className:"t_label_",children:["Name  ",(0,r.jsx)("div",{className:"t_t_danger",children:"*"})]}),(0,r.jsx)("input",{type:"text",className:"t_from_input ".concat(p?"t_f_invalid":""),placeholder:"Enter Your name",onChange:this.onTextName,value:n}),p?(0,r.jsx)("div",{className:"t_f_error",children:" Name is required."}):null]})}),(0,r.jsx)("div",{className:"t_col_",children:(0,r.jsxs)("div",{className:"t_f_group",children:[(0,r.jsxs)("div",{className:"t_label_",children:["Email  ",(0,r.jsx)("div",{className:"t_t_danger",children:"*"})]}),(0,r.jsx)("input",{type:"text",className:"t_from_input ".concat(v?"t_f_invalid":""),placeholder:"Enter you email",onChange:this.onTextEmail,value:d}),v?(0,r.jsx)("div",{className:"t_f_error",children:" Email is required."}):null]})})]}),[104746].includes(C.Wall.owner)?(0,r.jsxs)("div",{className:"t_f_check_inline",children:[(0,r.jsx)("input",{type:"checkbox",id:"t_accept",className:"t_from_check",onClick:e=>this.termsCheck(e.target.checked?1:0)}),(0,r.jsxs)("div",{className:"t_f_label_wrap",children:[(0,r.jsx)("label",{className:"t_check_label_",htmlFor:"t_accept",children:"I agree to CALM using my story for marketing purposes --"}),(0,r.jsx)("a",{href:C.UgcSettings.onsite_term_url,className:"t_tc_link",target:"_blank",children:"click for more information on how your story will be used."})]})]}):(0,r.jsxs)("div",{className:"t_f_group",children:[(0,r.jsxs)("div",{className:"t_f_check_inline",children:[(0,r.jsx)("input",{type:"checkbox",id:"t_accept",className:"t_from_check",value:"accept",onClick:this.onUpdatetandc,checked:_}),(0,r.jsxs)("label",{className:"t_check_label_",htmlFor:"t_accept",children:["By clicking on Submit, you are agreeing to our ",(0,r.jsx)("a",{href:C.UgcSettings.onsite_term_url,className:"t_tc_link",target:"_blank",children:"terms and conditions"})," *"]})]}),0==_?(0,r.jsx)("div",{className:"t_f_error",children:"* Please agree to the terms and conditions to submit your media."}):null]}),x?(0,r.jsx)("div",{className:"t_f_group",children:(0,r.jsxs)("div",{className:"t_f_error",children:["* ",j||"Please check complete details."]})}):null,(0,r.jsx)("div",{className:"t_f_group",children:(0,r.jsx)("div",{className:"t_f_p_btn ".concat(g?" t_f_btn_spinner":""),onClick:this.onSubmitPostData,children:C.UgcSettings.onsite_popup_btn_txt})}),N?(0,r.jsx)("div",{className:"t_f_error",children:"* Max 20 posts are allowed."}):null]})}):null})]})}}const v=(0,a.$j)((e=>(void 0!=e.modalPop&&1==e.modalPop.onSiteIsShowPopUp&&(document.querySelector("html").style.overflow="hidden"),{modalPop:e.modalPop})),(e=>({onSitePopup:t=>e((0,l.wg)(t)),onsiteTokenUpdate:t=>e((0,l.q3)(t))})))(p)}}]);