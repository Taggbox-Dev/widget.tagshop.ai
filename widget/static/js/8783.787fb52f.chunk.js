"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[8783],{97591:(e,t,i)=>{i.r(t),i.d(t,{Loader:()=>x,default:()=>S});var s=i(47313),a=i(31881),o=i.n(a),l=i(68375),r=(i(19161),i(30192)),n=i.n(r),d=i(66266),p=i.n(d),c=i(35179);const h=c.ig?"cloud.tagshop.ai":"cloud.tagbox.com";const u=class{constructor(e,t){let i="media/tmpimages/",s=h;c.nX&&(i="ugc-suite/tmp/",s="cloud.tagbox.com"),c.ig&&(i="tmp/"),this.uppy=new(n())({meta:{type:"avatar"},autoProceed:!0,debug:!0,allowMultipleUploads:!0,restrictions:{maxFileSize:104857600,maxNumberOfFiles:1,minNumberOfFiles:1,allowedFileTypes:["image/*","video/*"]},onBeforeFileAdded:e,onBeforeUpload:t}),this.uppy.use(p(),{params:{auth:{key:"0701d3d7f8d94e92a65a9cba388b1d96"},steps:{store:{robot:"/wasabi/store",bucket_region:"us-west-1",result:!0,bucket:s,key:"47ABVORKG52UYE1KB28S",secret:"pcaTfeokaz28geAAns08H3yaGbOVz6ILgTptu19v",path:i+"${file.id}.${file.ext}"}}},waitForEncoding:!0})}};var m=i(17739),f=i(98501),g=i(46417);const x=e=>{let{value:t}=e;const i=Math.round((100-t)/100*182.12);return(0,g.jsx)("div",{className:"t_m_propgress",children:(0,g.jsxs)("svg",{width:"78",height:"78",viewBox:"-10 -10 100 100",version:"1.1",xmlns:"http://www.w3.org/2000/svg",style:{transform:"rotate(-90deg)"},children:[(0,g.jsx)("circle",{r:"30",cx:"40",cy:"40",fill:"transparent",stroke:"#D9D9D9",strokeWidth:"4",strokeDasharray:"188.4px",strokeDashoffset:"0"}),(0,g.jsx)("circle",{id:"path_fr_circle",r:"30",cx:"40",cy:"40",stroke:"#545454",strokeWidth:"4",strokeLinecap:"butt",strokeDashoffset:"".concat(i,"px"),fill:"transparent",strokeDasharray:"188.4px"}),(0,g.jsxs)("text",{x:"25px",y:"47px",fill:"#545454",fontSize:"14px",style:{transform:"rotate(90deg) translate(17px, -84px)"},textAnchor:"middle",dominantBaseline:"middle",children:[t,"%"]})]})})};class y extends s.Component{constructor(){super(...arguments),this.state={isLoading:!1,selectedFile:null,selectedUrl:null,type:null,thumb_file:[],fileSize:!1,filemaxSize:0,throwError:!1,videoPath:"",fileSizeText:"",ext:null,size:0,fileName:null,mediaHeight:0,mediaWidth:0,uploadPercent:0},this.beforeFileAdded=(e,t)=>{(0,m.AB)(1);const{size:i,sizeText:s}=(0,m.RD)(e.size);if(["GB","TB"].includes(s)){const t=e.meta.type.includes("image")?4:5;this.setState({type:t,fileSize:!0,fileSizeText:"".concat(i).concat(s)},(()=>{this.onLoadError(t),setTimeout((()=>this.setState({fileSize:!1,fileSizeText:""})),2e3)})),(0,m.AB)(2)}else if("MB"==s){const t=e.meta.type.includes("image")?4:5,a=4==t?15:100;if(i>=a)return this.setState({type:t,filemaxSize:a,fileSize:!0,fileSizeText:"".concat(i).concat(s)},(()=>{this.onLoadError(t),setTimeout((()=>this.setState({fileSize:!1,fileSizeText:"",type:null},(()=>this.onLoadError(t)))),5e3)})),(0,m.AB)(2),!1}},this.beforeUpload=e=>{const t=Object.keys(e);if(this.setState({isLoading:!0}),t&&t.length>0&&e[t[0]]&&e[t[0]].meta&&e[t[0]].meta.type.includes("video")){try{const{onsite_token:i}=this.props,s=e[t[0]],a=new FormData;a.append("file",s.data),a.append("onsite_token",i),o().post(c.so,a,{headers:{productdomain:"taggbox.com"}}).then((e=>{const{responseData:t}=e.data;t&&t.length>0&&(this.setState((e=>({videoPath:t[0].sscode,isLoading:!1,type:5,selectedFile:t[0].s3Url,selectedUrl:t[0].s3Url,thumb_file:t[0].s3ThumbUrl,ext:s.extension,size:s.size,fileName:s.name,mediaHeight:t[0].height,mediaWidth:t[0].width})),(()=>this.onUpdateLocalState())),(0,m.AB)(2))})).catch((e=>{this.setState({isLoading:!1,throwError:!0},(()=>setTimeout((()=>this.setState({throwError:!1})),2e3))),this.uppyUploader.uppy.reset(),(0,m.AB)(2)}))}catch(i){this.setState({isLoading:!1,throwError:!0},(()=>setTimeout((()=>this.setState({throwError:!1})),2e3))),this.uppyUploader.uppy.reset(),(0,m.AB)(2)}return!1}},this.uppyUploader=new u(this.beforeFileAdded,this.beforeUpload),this.onUpdateLocalState=()=>{const{addPostImage:e,isActiveIndex:t}=this.props,{selectedUrl:i,type:s,thumb_file:a,videoPath:o,ext:l,size:r,fileName:n,mediaHeight:d,mediaWidth:p}=this.state;e(i,5===s?a:i,o,s,t,l,r,n,d,p),this.setState({selectedFile:null,selectedUrl:null,type:null,thumb_file:"",fileSize:!1,fileSizeText:"",videoPath:"",ext:null,size:0,fileName:null,mediaHeight:0,mediaWidth:0},(()=>{this.onLoadError(s),this.uppyUploader.uppy.reset()}))},this.onLoadError=e=>{const{uploadErrorCallback:t}=this.props,{fileSize:i,fileSizeText:s,filemaxSize:a,throwError:o}=this.state,l=i?"File Size (".concat(s,") Limit Exceeded ").concat(4==e?"Image":"Video"," Size : Max ").concat(a," MB"):"",r=o?"Something went wrong , Please try again.":"";t(l||(r||""))}}componentDidMount(){this.uppyUploader.uppy.on("transloadit:result",((e,t)=>{this.setState({isLoading:!1});const i=t.meta.orientation&&"Rotate 90 CW"==t.meta.orientation?t.meta.width:t.meta.height,s=t.meta.orientation&&"Rotate 90 CW"==t.meta.orientation?t.meta.height:t.meta.width;let a="".concat(f.ho,"media/tmpimages/");c.nX&&(a="https://cloud.tagbox.com/ugc-suite/tmp/"),c.ig&&(a="https://cloud.tagshop.ai/tmp/"),this.setState({type:t.mime.includes("video")?5:4,selectedFile:t.id,selectedUrl:"".concat(a).concat(t.id,".").concat(t.ext),ext:t.ext,size:t.size,fileName:t.name,mediaHeight:i,mediaWidth:s},(()=>this.onUpdateLocalState())),(0,m.AB)(2)})),this.uppyUploader.uppy.on("file-removed",((e,t)=>{(0,m.AB)(2)})),this.uppyUploader.uppy.on("upload-progress",((e,t)=>{this.setState({uploadPercent:(t.bytesUploaded/t.bytesTotal*100).toFixed()})})),this.uppyUploader.uppy.on("upload-error",((e,t,i)=>{this.setState({throwError:!0})}))}render(){var e;const{isLoading:t,fileSize:i,throwError:s,fileSizeText:a,filemaxSize:o,type:r,uploadPercent:n}=this.state,{upload_image:d}=this.props;return d&&d.length<20?(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("div",{className:"t_m_upload",children:t?(0,g.jsx)(x,{value:n}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(l.S2,{uppy:this.uppyUploader.uppy,allowMultipleFiles:!0,locale:{strings:{browse:""}}}),(0,g.jsx)("div",{className:"tb__icon ".concat(d&&d.length>0&&null!==(e=d[0])&&void 0!==e&&e.thumbnail?"tb-close-thin tb-plus_icon":"tb-upload"),children:(0,g.jsx)("div",{})})]})})}):null}}const S=y}}]);