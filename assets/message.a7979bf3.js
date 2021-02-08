import{r as e,R as t,a0 as n,B as l}from"./index.353b20bd.js";import{q as o}from"./styled-components.browser.esm.78ec4042.js";const a=["success","warning","error","notice","help","loading"],s=[{value:"inline",label:"inline"},{value:"addon",label:"addon"},{value:"toast",label:"toast"}];class i extends e.Component{constructor(e){super(e),this.state={shape:"inline"},this.handleSelect=this.handleSelect.bind(this)}handleSelect(e){this.setState({shape:e})}render(){const{shape:l}=this.state;return e.createElement("div",{className:"message-shape-demo"},e.createElement("span",{className:"demo-label"},"Select Shape："),e.createElement(t.Group,{defaultValue:"inline",dataSource:s,value:this.state.shape,onChange:this.handleSelect}),a.map((t=>e.createElement(n,{key:t,title:t,type:t,shape:l,closeable:!0},"Content Content Content Content"))))}}const r=o.div`
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
`;var c=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(i,null);return e.createElement(r,null,t)}});class m extends e.Component{constructor(){super(...arguments),this.state={visible:!0},this.handleChange=()=>{this.setState({visible:!this.state.visible})},this.handleClose=()=>{this.setState({visible:!1})}}render(){const{visible:t}=this.state;return e.createElement("div",{className:"control-demo"},e.createElement(l,{onClick:this.handleChange},"Toggle Visible"),e.createElement(n,{type:"warning",visible:t,title:"Warning",closeable:!0,onClose:this.handleClose},'This item already has the label "travel". You can add a new label.'))}}const d=o.div`
  .control-demo .next-btn.next-medium {
    margin-bottom: 10px;
  }
`;var u=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(m,null);return e.createElement(d,null,t)}});const g=()=>console.log("onClose triggered!"),p=()=>console.log("afterClose triggered!");const h=o.div``;var C=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,e.createElement(n,{title:"title",closeable:!0,onClose:g,afterClose:p},"Content Content Content Content"));return e.createElement(h,null,t)}});const b=()=>n.success("成功消息其它文案，会主动消失");const E=o.div``;var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"message-toast-quick-demo"},e.createElement(l,{onClick:b},"success"));return e.createElement(E,null,t)}});const v=["success","warning","error","notice","help","loading"],f=[{value:"medium",label:"medium"},{value:"large",label:"large"}];class S extends e.Component{constructor(e){super(e),this.state={size:"medium"},this.handleSelect=this.handleSelect.bind(this)}handleSelect(e){this.setState({size:e})}render(){const{size:l}=this.state;return e.createElement("div",{className:"message-size-demo"},e.createElement("span",{className:"demo-label"},"Select Size："),e.createElement(t.Group,{defaultValue:"medium",dataSource:f,value:this.state.size,onChange:this.handleSelect}),v.map((t=>e.createElement(n,{key:t,title:t,type:t,size:l},"Content Content Content Content"))))}}const x=o.div`
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
`;var y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(S,null);return e.createElement(x,null,t)}});const z=o.div`
  .message-type-demo .next-message {
    margin-bottom: 10px;
  }
`;var k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"message-type-demo"},e.createElement(n,{title:"Success",type:"success"},"Content Content Content Content"),e.createElement(n,{title:"Warning",type:"warning"},"Content Content Content Content"),e.createElement(n,{title:"Error",type:"error"},"Content Content Content Content"),e.createElement(n,{title:"Notice",type:"notice"},"Content Content Content Content"),e.createElement(n,{title:"Help",type:"help"},"Content Content Content Content"),e.createElement(n,{title:"Loading",type:"loading"},"Content Content Content Content"));return e.createElement(z,null,t)}});const j=()=>{n.show({type:"loading",content:"Will be closed after 3 seconds or manually click on the close button",afterClose:()=>console.log("Closed the toast")})},w=()=>n.hide();const T=o.div`
  .message-toast-demo .next-btn.next-medium {
    margin-right: 10px;
  }
`;var M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"message-toast-demo"},e.createElement(l,{onClick:j},"Show"),e.createElement(l,{onClick:w},"Hide"));return e.createElement(T,null,t)}});const N=()=>n.success({title:"success",duration:0}),O=()=>n.warning("warning"),q=()=>n.error("error"),V=()=>n.notice("notice"),W=()=>n.help("help"),G=()=>n.loading("loading");const H=o.div`
  .message-toast-quick-demo .next-btn.next-medium {
    margin-right: 10px;
    margin-bottom: 10px;
  }
`;var B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"message-toast-quick-demo"},e.createElement(l,{onClick:N},"success"),e.createElement(l,{onClick:O},"warning"),e.createElement(l,{onClick:q},"error"),e.createElement(l,{onClick:V},"notice"),e.createElement(l,{onClick:W},"help"),e.createElement(l,{onClick:G},"loading"));return e.createElement(H,null,t)}});const D=o.div``;var L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://codepen.io/acejerry/pen/ZEOQjzr"},"点击查看 Message.withContext Demo");return e.createElement(D,null,t)}});const Q={};Q._shape=c,Q._control=u,Q["_inline-close"]=C,Q._accessibility=_,Q._size=y,Q._type=k,Q._toast=M,Q["_toast-quick"]=B,Q._withContext=L;export default Q;
