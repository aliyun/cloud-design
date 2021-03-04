import{r as e,a0 as t,B as n,R as l}from"./index.85ae9c06.js";import{q as o}from"./styled-components.browser.esm.1d25448f.js";const a=()=>console.log("onClose triggered!"),s=()=>console.log("afterClose triggered!");const i=o.div``;var r=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{title:"title",closeable:!0,onClose:a,afterClose:s},"Content Content Content Content"));return e.createElement(i,null,n)}});const c=()=>t.success("成功消息其它文案，会主动消失");const m=o.div``;var d=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"message-toast-quick-demo"},e.createElement(n,{onClick:c},"success"));return e.createElement(m,null,t)}});class u extends e.Component{constructor(){super(...arguments),this.state={visible:!0},this.handleChange=()=>{this.setState({visible:!this.state.visible})},this.handleClose=()=>{this.setState({visible:!1})}}render(){const{visible:l}=this.state;return e.createElement("div",{className:"control-demo"},e.createElement(n,{onClick:this.handleChange},"Toggle Visible"),e.createElement(t,{type:"warning",visible:l,title:"Warning",closeable:!0,onClose:this.handleClose},'This item already has the label "travel". You can add a new label.'))}}const g=o.div`
  .control-demo .next-btn.next-medium {
    margin-bottom: 10px;
  }
`;var p=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(u,null);return e.createElement(g,null,t)}});const h=["success","warning","error","notice","help","loading"],C=[{value:"medium",label:"medium"},{value:"large",label:"large"}];class b extends e.Component{constructor(e){super(e),this.state={size:"medium"},this.handleSelect=this.handleSelect.bind(this)}handleSelect(e){this.setState({size:e})}render(){const{size:n}=this.state;return e.createElement("div",{className:"message-size-demo"},e.createElement("span",{className:"demo-label"},"Select Size："),e.createElement(l.Group,{defaultValue:"medium",dataSource:C,value:this.state.size,onChange:this.handleSelect}),h.map((l=>e.createElement(t,{key:l,title:l,type:l,size:n},"Content Content Content Content"))))}}const E=o.div`
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
`;var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(b,null);return e.createElement(E,null,t)}});const v=()=>t.success({title:"success",duration:0}),f=()=>t.warning("warning"),S=()=>t.error("error"),x=()=>t.notice("notice"),y=()=>t.help("help"),z=()=>t.loading("loading");const k=o.div`
  .message-toast-quick-demo .next-btn.next-medium {
    margin-right: 10px;
    margin-bottom: 10px;
  }
`;var j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"message-toast-quick-demo"},e.createElement(n,{onClick:v},"success"),e.createElement(n,{onClick:f},"warning"),e.createElement(n,{onClick:S},"error"),e.createElement(n,{onClick:x},"notice"),e.createElement(n,{onClick:y},"help"),e.createElement(n,{onClick:z},"loading"));return e.createElement(k,null,t)}});const w=["success","warning","error","notice","help","loading"],T=[{value:"inline",label:"inline"},{value:"addon",label:"addon"},{value:"toast",label:"toast"}];class M extends e.Component{constructor(e){super(e),this.state={shape:"inline"},this.handleSelect=this.handleSelect.bind(this)}handleSelect(e){this.setState({shape:e})}render(){const{shape:n}=this.state;return e.createElement("div",{className:"message-shape-demo"},e.createElement("span",{className:"demo-label"},"Select Shape："),e.createElement(l.Group,{defaultValue:"inline",dataSource:T,value:this.state.shape,onChange:this.handleSelect}),w.map((l=>e.createElement(t,{key:l,title:l,type:l,shape:n,closeable:!0},"Content Content Content Content"))))}}const N=o.div`
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
`;var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(M,null);return e.createElement(N,null,t)}});const q=o.div`
  .message-type-demo .next-message {
    margin-bottom: 10px;
  }
`;var V=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",{className:"message-type-demo"},e.createElement(t,{title:"Success",type:"success"},"Content Content Content Content"),e.createElement(t,{title:"Warning",type:"warning"},"Content Content Content Content"),e.createElement(t,{title:"Error",type:"error"},"Content Content Content Content"),e.createElement(t,{title:"Notice",type:"notice"},"Content Content Content Content"),e.createElement(t,{title:"Help",type:"help"},"Content Content Content Content"),e.createElement(t,{title:"Loading",type:"loading"},"Content Content Content Content"));return e.createElement(q,null,n)}});const W=o.div``;var G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://codepen.io/acejerry/pen/ZEOQjzr"},"点击查看 Message.withContext Demo");return e.createElement(W,null,t)}});const H=()=>{t.show({type:"loading",content:"Will be closed after 3 seconds or manually click on the close button",afterClose:()=>console.log("Closed the toast")})},B=()=>t.hide();const D=o.div`
  .message-toast-demo .next-btn.next-medium {
    margin-right: 10px;
  }
`;var L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"message-toast-demo"},e.createElement(n,{onClick:H},"Show"),e.createElement(n,{onClick:B},"Hide"));return e.createElement(D,null,t)}});const Q={};Q["_inline-close"]=r,Q._accessibility=d,Q._control=p,Q._size=_,Q["_toast-quick"]=j,Q._shape=O,Q._type=V,Q._withContext=G,Q._toast=L;export default Q;
