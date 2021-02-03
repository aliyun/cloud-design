import{r as e,a0 as t,B as n,R as l}from"./index.3d842b9a.js";import{q as o}from"./styled-components.browser.esm.b64bc59a.js";const a=()=>console.log("onClose triggered!"),s=()=>console.log("afterClose triggered!");const i=o.div``;var r=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{title:"title",closeable:!0,onClose:a,afterClose:s},"Content Content Content Content"));return e.createElement(i,null,n)}});class c extends e.Component{constructor(){super(...arguments),this.state={visible:!0},this.handleChange=()=>{this.setState({visible:!this.state.visible})},this.handleClose=()=>{this.setState({visible:!1})}}render(){const{visible:l}=this.state;return e.createElement("div",{className:"control-demo"},e.createElement(n,{onClick:this.handleChange},"Toggle Visible"),e.createElement(t,{type:"warning",visible:l,title:"Warning",closeable:!0,onClose:this.handleClose},'This item already has the label "travel". You can add a new label.'))}}const m=o.div`
  .control-demo .next-btn.next-medium {
    margin-bottom: 10px;
  }
`;var d=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(c,null);return e.createElement(m,null,t)}});const u=["success","warning","error","notice","help","loading"],g=[{value:"medium",label:"medium"},{value:"large",label:"large"}];class p extends e.Component{constructor(e){super(e),this.state={size:"medium"},this.handleSelect=this.handleSelect.bind(this)}handleSelect(e){this.setState({size:e})}render(){const{size:n}=this.state;return e.createElement("div",{className:"message-size-demo"},e.createElement("span",{className:"demo-label"},"Select Size："),e.createElement(l.Group,{defaultValue:"medium",dataSource:g,value:this.state.size,onChange:this.handleSelect}),u.map((l=>e.createElement(t,{key:l,title:l,type:l,size:n},"Content Content Content Content"))))}}const h=o.div`
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
`;var C=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(p,null);return e.createElement(h,null,t)}});const b=()=>t.success("成功消息其它文案，会主动消失");const E=o.div``;var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"message-toast-quick-demo"},e.createElement(n,{onClick:b},"success"));return e.createElement(E,null,t)}});const v=["success","warning","error","notice","help","loading"],f=[{value:"inline",label:"inline"},{value:"addon",label:"addon"},{value:"toast",label:"toast"}];class S extends e.Component{constructor(e){super(e),this.state={shape:"inline"},this.handleSelect=this.handleSelect.bind(this)}handleSelect(e){this.setState({shape:e})}render(){const{shape:n}=this.state;return e.createElement("div",{className:"message-shape-demo"},e.createElement("span",{className:"demo-label"},"Select Shape："),e.createElement(l.Group,{defaultValue:"inline",dataSource:f,value:this.state.shape,onChange:this.handleSelect}),v.map((l=>e.createElement(t,{key:l,title:l,type:l,shape:n,closeable:!0},"Content Content Content Content"))))}}const x=o.div`
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
`;var y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(S,null);return e.createElement(x,null,t)}});const z=()=>{t.show({type:"loading",content:"Will be closed after 3 seconds or manually click on the close button",afterClose:()=>console.log("Closed the toast")})},k=()=>t.hide();const j=o.div`
  .message-toast-demo .next-btn.next-medium {
    margin-right: 10px;
  }
`;var w=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"message-toast-demo"},e.createElement(n,{onClick:z},"Show"),e.createElement(n,{onClick:k},"Hide"));return e.createElement(j,null,t)}});const T=()=>t.success({title:"success",duration:0}),M=()=>t.warning("warning"),N=()=>t.error("error"),O=()=>t.notice("notice"),q=()=>t.help("help"),V=()=>t.loading("loading");const W=o.div`
  .message-toast-quick-demo .next-btn.next-medium {
    margin-right: 10px;
    margin-bottom: 10px;
  }
`;var G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"message-toast-quick-demo"},e.createElement(n,{onClick:T},"success"),e.createElement(n,{onClick:M},"warning"),e.createElement(n,{onClick:N},"error"),e.createElement(n,{onClick:O},"notice"),e.createElement(n,{onClick:q},"help"),e.createElement(n,{onClick:V},"loading"));return e.createElement(W,null,t)}});const H=o.div``;var B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://codepen.io/acejerry/pen/ZEOQjzr"},"点击查看 Message.withContext Demo");return e.createElement(H,null,t)}});const D=o.div`
  .message-type-demo .next-message {
    margin-bottom: 10px;
  }
`;var L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",{className:"message-type-demo"},e.createElement(t,{title:"Success",type:"success"},"Content Content Content Content"),e.createElement(t,{title:"Warning",type:"warning"},"Content Content Content Content"),e.createElement(t,{title:"Error",type:"error"},"Content Content Content Content"),e.createElement(t,{title:"Notice",type:"notice"},"Content Content Content Content"),e.createElement(t,{title:"Help",type:"help"},"Content Content Content Content"),e.createElement(t,{title:"Loading",type:"loading"},"Content Content Content Content"));return e.createElement(D,null,n)}});const Q={};Q["_inline-close"]=r,Q._control=d,Q._size=C,Q._accessibility=_,Q._shape=y,Q._toast=w,Q["_toast-quick"]=G,Q._withContext=B,Q._type=L;export default Q;
