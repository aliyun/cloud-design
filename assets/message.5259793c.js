import{r as e,B as t,$ as n,R as l}from"./index.e50fb7cb.js";import{q as o}from"./styled-components.browser.esm.4dfc2252.js";const a=()=>n.success("成功消息其它文案，会主动消失");const s=o.div``;var i=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",{className:"message-toast-quick-demo"},e.createElement(t,{onClick:a},"success"));return e.createElement(s,null,n)}});class r extends e.Component{constructor(){super(...arguments),this.state={visible:!0},this.handleChange=()=>{this.setState({visible:!this.state.visible})},this.handleClose=()=>{this.setState({visible:!1})}}render(){const{visible:l}=this.state;return e.createElement("div",{className:"control-demo"},e.createElement(t,{onClick:this.handleChange},"Toggle Visible"),e.createElement(n,{type:"warning",visible:l,title:"Warning",closeable:!0,onClose:this.handleClose},'This item already has the label "travel". You can add a new label.'))}}const c=o.div`
  .control-demo .next-btn.next-medium {
    margin-bottom: 10px;
  }
`;var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(r,null);return e.createElement(c,null,t)}});const d=()=>console.log("onClose triggered!"),u=()=>console.log("afterClose triggered!");const g=o.div``;var p=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,e.createElement(n,{title:"title",closeable:!0,onClose:d,afterClose:u},"Content Content Content Content"));return e.createElement(g,null,t)}});const h=["success","warning","error","notice","help","loading"],C=[{value:"medium",label:"medium"},{value:"large",label:"large"}];class b extends e.Component{constructor(e){super(e),this.state={size:"medium"},this.handleSelect=this.handleSelect.bind(this)}handleSelect(e){this.setState({size:e})}render(){const{size:t}=this.state;return e.createElement("div",{className:"message-size-demo"},e.createElement("span",{className:"demo-label"},"Select Size："),e.createElement(l.Group,{defaultValue:"medium",dataSource:C,value:this.state.size,onChange:this.handleSelect}),h.map((l=>e.createElement(n,{key:l,title:l,type:l,size:t},"Content Content Content Content"))))}}const E=o.div`
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
`;var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(b,null);return e.createElement(E,null,t)}});const v=["success","warning","error","notice","help","loading"],f=[{value:"inline",label:"inline"},{value:"addon",label:"addon"},{value:"toast",label:"toast"}];class S extends e.Component{constructor(e){super(e),this.state={shape:"inline"},this.handleSelect=this.handleSelect.bind(this)}handleSelect(e){this.setState({shape:e})}render(){const{shape:t}=this.state;return e.createElement("div",{className:"message-shape-demo"},e.createElement("span",{className:"demo-label"},"Select Shape："),e.createElement(l.Group,{defaultValue:"inline",dataSource:f,value:this.state.shape,onChange:this.handleSelect}),v.map((l=>e.createElement(n,{key:l,title:l,type:l,shape:t,closeable:!0},"Content Content Content Content"))))}}const x=o.div`
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
`;var y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(S,null);return e.createElement(x,null,t)}});const z=o.div`
  .message-type-demo .next-message {
    margin-bottom: 10px;
  }
`;var k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"message-type-demo"},e.createElement(n,{title:"Success",type:"success"},"Content Content Content Content"),e.createElement(n,{title:"Warning",type:"warning"},"Content Content Content Content"),e.createElement(n,{title:"Error",type:"error"},"Content Content Content Content"),e.createElement(n,{title:"Notice",type:"notice"},"Content Content Content Content"),e.createElement(n,{title:"Help",type:"help"},"Content Content Content Content"),e.createElement(n,{title:"Loading",type:"loading"},"Content Content Content Content"));return e.createElement(z,null,t)}});const j=()=>{n.show({type:"loading",content:"Will be closed after 3 seconds or manually click on the close button",afterClose:()=>console.log("Closed the toast")})},w=()=>n.hide();const T=o.div`
  .message-toast-demo .next-btn.next-medium {
    margin-right: 10px;
  }
`;var M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",{className:"message-toast-demo"},e.createElement(t,{onClick:j},"Show"),e.createElement(t,{onClick:w},"Hide"));return e.createElement(T,null,n)}});const N=()=>n.success({title:"success",duration:0}),O=()=>n.warning("warning"),q=()=>n.error("error"),V=()=>n.notice("notice"),W=()=>n.help("help"),G=()=>n.loading("loading");const H=o.div`
  .message-toast-quick-demo .next-btn.next-medium {
    margin-right: 10px;
    margin-bottom: 10px;
  }
`;var B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",{className:"message-toast-quick-demo"},e.createElement(t,{onClick:N},"success"),e.createElement(t,{onClick:O},"warning"),e.createElement(t,{onClick:q},"error"),e.createElement(t,{onClick:V},"notice"),e.createElement(t,{onClick:W},"help"),e.createElement(t,{onClick:G},"loading"));return e.createElement(H,null,n)}});const D=o.div``;var L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://codepen.io/acejerry/pen/ZEOQjzr"},"点击查看 Message.withContext Demo");return e.createElement(D,null,t)}});const Q={};Q._accessibility=i,Q._control=m,Q["_inline-close"]=p,Q._size=_,Q._shape=y,Q._type=k,Q._toast=M,Q["_toast-quick"]=B,Q._withContext=L;export default Q;
