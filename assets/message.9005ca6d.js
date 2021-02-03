import{r as e,B as t,a0 as n,R as l}from"./index.9e4b8ce1.js";import{q as o}from"./styled-components.browser.esm.19571eea.js";const a=()=>n.success("成功消息其它文案，会主动消失");const s=o.div``;var i=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",{className:"message-toast-quick-demo"},e.createElement(t,{onClick:a},"success"));return e.createElement(s,null,n)}});class r extends e.Component{constructor(){super(...arguments),this.state={visible:!0},this.handleChange=()=>{this.setState({visible:!this.state.visible})},this.handleClose=()=>{this.setState({visible:!1})}}render(){const{visible:l}=this.state;return e.createElement("div",{className:"control-demo"},e.createElement(t,{onClick:this.handleChange},"Toggle Visible"),e.createElement(n,{type:"warning",visible:l,title:"Warning",closeable:!0,onClose:this.handleClose},'This item already has the label "travel". You can add a new label.'))}}const c=o.div`
  .control-demo .next-btn.next-medium {
    margin-bottom: 10px;
  }
`;var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(r,null);return e.createElement(c,null,t)}});const d=["success","warning","error","notice","help","loading"],u=[{value:"inline",label:"inline"},{value:"addon",label:"addon"},{value:"toast",label:"toast"}];class g extends e.Component{constructor(e){super(e),this.state={shape:"inline"},this.handleSelect=this.handleSelect.bind(this)}handleSelect(e){this.setState({shape:e})}render(){const{shape:t}=this.state;return e.createElement("div",{className:"message-shape-demo"},e.createElement("span",{className:"demo-label"},"Select Shape："),e.createElement(l.Group,{defaultValue:"inline",dataSource:u,value:this.state.shape,onChange:this.handleSelect}),d.map((l=>e.createElement(n,{key:l,title:l,type:l,shape:t,closeable:!0},"Content Content Content Content"))))}}const p=o.div`
  .message-shape-demo .demo-label {
    display: inline-block;
    vertical-align: top;
    height: 22px;
    line-height: 22px;
  }

  .message-shape-demo .next-message-title {
    text-transform: capitalize;
  }

  .message-shape-demo .next-message {
    margin-top: 10px;
  }

  .message-shape-demo .next-message.next-message-toast {
    position: relative !important;
  }
`;var h=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(g,null);return e.createElement(p,null,t)}});const C=["success","warning","error","notice","help","loading"],b=[{value:"medium",label:"medium"},{value:"large",label:"large"}];class E extends e.Component{constructor(e){super(e),this.state={size:"medium"},this.handleSelect=this.handleSelect.bind(this)}handleSelect(e){this.setState({size:e})}render(){const{size:t}=this.state;return e.createElement("div",{className:"message-size-demo"},e.createElement("span",{className:"demo-label"},"Select Size："),e.createElement(l.Group,{defaultValue:"medium",dataSource:b,value:this.state.size,onChange:this.handleSelect}),C.map((l=>e.createElement(n,{key:l,title:l,type:l,size:t},"Content Content Content Content"))))}}const _=o.div`
  .message-size-demo .demo-label {
    display: inline-block;
    vertical-align: top;
    height: 28px;
    line-height: 28px;
  }

  .message-size-demo .next-message-title {
    text-transform: capitalize;
  }

  .message-size-demo .next-message {
    margin-top: 10px;
  }
`;var v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(E,null);return e.createElement(_,null,t)}});const f=()=>n.success({title:"success",duration:0}),S=()=>n.warning("warning"),x=()=>n.error("error"),y=()=>n.notice("notice"),z=()=>n.help("help"),k=()=>n.loading("loading");const j=o.div`
  .message-toast-quick-demo .next-btn.next-medium {
    margin-right: 10px;
    margin-bottom: 10px;
  }
`;var w=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",{className:"message-toast-quick-demo"},e.createElement(t,{onClick:f},"success"),e.createElement(t,{onClick:S},"warning"),e.createElement(t,{onClick:x},"error"),e.createElement(t,{onClick:y},"notice"),e.createElement(t,{onClick:z},"help"),e.createElement(t,{onClick:k},"loading"));return e.createElement(j,null,n)}});const T=()=>console.log("onClose triggered!"),M=()=>console.log("afterClose triggered!");const N=o.div``;var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,e.createElement(n,{title:"title",closeable:!0,onClose:T,afterClose:M},"Content Content Content Content"));return e.createElement(N,null,t)}});const q=()=>{n.show({type:"loading",content:"Will be closed after 3 seconds or manually click on the close button",afterClose:()=>console.log("Closed the toast")})},V=()=>n.hide();const W=o.div`
  .message-toast-demo .next-btn.next-medium {
    margin-right: 10px;
  }
`;var G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",{className:"message-toast-demo"},e.createElement(t,{onClick:q},"Show"),e.createElement(t,{onClick:V},"Hide"));return e.createElement(W,null,n)}});const H=o.div``;var B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://codepen.io/acejerry/pen/ZEOQjzr"},"点击查看 Message.withContext Demo");return e.createElement(H,null,t)}});const D=o.div`
  .message-type-demo .next-message {
    margin-bottom: 10px;
  }
`;var L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"message-type-demo"},e.createElement(n,{title:"Success",type:"success"},"Content Content Content Content"),e.createElement(n,{title:"Warning",type:"warning"},"Content Content Content Content"),e.createElement(n,{title:"Error",type:"error"},"Content Content Content Content"),e.createElement(n,{title:"Notice",type:"notice"},"Content Content Content Content"),e.createElement(n,{title:"Help",type:"help"},"Content Content Content Content"),e.createElement(n,{title:"Loading",type:"loading"},"Content Content Content Content"));return e.createElement(D,null,t)}});const Q={};Q._accessibility=i,Q._control=m,Q._shape=h,Q._size=v,Q["_toast-quick"]=w,Q["_inline-close"]=O,Q._toast=G,Q._withContext=B,Q._type=L;export default Q;
