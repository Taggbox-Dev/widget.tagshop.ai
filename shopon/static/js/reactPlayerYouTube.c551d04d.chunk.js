(self.webpackChunkcommerce_themes_update=self.webpackChunkcommerce_themes_update||[]).push([[446],{1059:(e,t,a)=>{var s,o=Object.create,l=Object.defineProperty,r=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,i=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,c=(e,t,a,s)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let o of n(t))p.call(e,o)||o===a||l(e,o,{get:()=>t[o],enumerable:!(s=r(t,o))||s.enumerable});return e},y=(e,t,a)=>(((e,t,a)=>{t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a})(e,"symbol"!==typeof t?t+"":t,a),a),u={};((e,t)=>{for(var a in t)l(e,a,{get:t[a],enumerable:!0})})(u,{default:()=>b}),e.exports=(s=u,c(l({},"__esModule",{value:!0}),s));var h=((e,t,a)=>(a=null!=e?o(i(e)):{},c(!t&&e&&e.__esModule?a:l(a,"default",{value:e,enumerable:!0}),e)))(a(5043)),d=a(2206),m=a(1520);const P=/[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,g=/user\/([a-zA-Z0-9_-]+)\/?/,f=/youtube-nocookie\.com/;class b extends h.Component{constructor(){super(...arguments),y(this,"callPlayer",d.callPlayer),y(this,"parsePlaylist",(e=>{if(e instanceof Array)return{listType:"playlist",playlist:e.map(this.getID).join(",")};if(P.test(e)){const[,t]=e.match(P);return{listType:"playlist",list:t.replace(/^UC/,"UU")}}if(g.test(e)){const[,t]=e.match(g);return{listType:"user_uploads",list:t}}return{}})),y(this,"onStateChange",(e=>{const{data:t}=e,{onPlay:a,onPause:s,onBuffer:o,onBufferEnd:l,onEnded:r,onReady:n,loop:i,config:{playerVars:p,onUnstarted:c}}=this.props,{UNSTARTED:y,PLAYING:u,PAUSED:h,BUFFERING:d,ENDED:m,CUED:P}=window.YT.PlayerState;if(t===y&&c(),t===u&&(a(),l()),t===h&&s(),t===d&&o(),t===m){const e=!!this.callPlayer("getPlaylist");i&&!e&&(p.start?this.seekTo(p.start):this.play()),r()}t===P&&n()})),y(this,"mute",(()=>{this.callPlayer("mute")})),y(this,"unmute",(()=>{this.callPlayer("unMute")})),y(this,"ref",(e=>{this.container=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}getID(e){return!e||e instanceof Array||P.test(e)?null:e.match(m.MATCH_URL_YOUTUBE)[1]}load(e,t){const{playing:a,muted:s,playsinline:o,controls:l,loop:r,config:n,onError:i}=this.props,{playerVars:p,embedOptions:c}=n,y=this.getID(e);if(t)return P.test(e)||g.test(e)||e instanceof Array?void this.player.loadPlaylist(this.parsePlaylist(e)):void this.player.cueVideoById({videoId:y,startSeconds:(0,d.parseStartTime)(e)||p.start,endSeconds:(0,d.parseEndTime)(e)||p.end});(0,d.getSDK)("https://www.youtube.com/iframe_api","YT","onYouTubeIframeAPIReady",(e=>e.loaded)).then((t=>{this.container&&(this.player=new t.Player(this.container,{width:"100%",height:"100%",videoId:y,playerVars:{autoplay:a?1:0,mute:s?1:0,controls:l?1:0,start:(0,d.parseStartTime)(e),end:(0,d.parseEndTime)(e),origin:window.location.origin,playsinline:o?1:0,...this.parsePlaylist(e),...p},events:{onReady:()=>{r&&this.player.setLoop(!0),this.props.onReady()},onPlaybackRateChange:e=>this.props.onPlaybackRateChange(e.data),onPlaybackQualityChange:e=>this.props.onPlaybackQualityChange(e),onStateChange:this.onStateChange,onError:e=>i(e.data)},host:f.test(e)?"https://www.youtube-nocookie.com":void 0,...c}))}),i),c.events&&console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer\u2019s callback props instead, eg onReady, onPlay, onPause")}play(){this.callPlayer("playVideo")}pause(){this.callPlayer("pauseVideo")}stop(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}seekTo(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.callPlayer("seekTo",e),t||this.props.playing||this.pause()}setVolume(e){this.callPlayer("setVolume",100*e)}setPlaybackRate(e){this.callPlayer("setPlaybackRate",e)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}render(){const{display:e}=this.props,t={width:"100%",height:"100%",display:e};return h.default.createElement("div",{style:t},h.default.createElement("div",{ref:this.ref}))}}y(b,"displayName","YouTube"),y(b,"canPlay",m.canPlay.youtube)}}]);
//# sourceMappingURL=reactPlayerYouTube.c551d04d.chunk.js.map