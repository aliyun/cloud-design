import{r as e,B as t,a0 as n,R as l}from"./index.e23bfa0a.js";import{q as o}from"./styled-components.browser.esm.9bbc5b35.js";const a=()=>n.success("成功消息其它文案，会主动消失");const s=o.div``;var i=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",{className:"message-toast-quick-demo"},e.createElement(t,{onClick:a},"success"));return e.createElement(s,null,n)}});const r=()=>console.log("onClose triggered!"),c=()=>console.log("afterClose triggered!");const m=o.div``;var d=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,e.createElement(n,{title:"title",closeable:!0,onClose:r,afterClose:c},"Content Content Content Content"));return e.createElement(m,null,t)}});class u extends e.Component{constructor(){super(...arguments),this.state={visible:!0},this.handleChange=()=>{this.setState({visible:!this.state.visible})},this.handleClose=()=>{this.setState({visible:!1})}}render(){const{visible:l}=this.state;return e.createElement("div",{className:"control-demo"},e.createElement(t,{onClick:this.handleChange},"Toggle Visible"),e.createElement(n,{type:"warning",visible:l,title:"Warning",closeable:!0,onClose:this.handleClose},'This item already has the label "travel". You can add a new label.'))}}const g=o.div`
  .control-demo .next-btn.next-medium {
    margin-bottom: 10px;
  }
`;var p=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(u,null);return e.createElement(g,null,t)}});const h=()=>n.success({title:"success",duration:0}),C=()=>n.warning("warning"),b=()=>n.error("error"),E=()=>n.notice("notice"),_=()=>n.help("help"),v=()=>n.loading("loading");const f=o.div`
  .message-toast-quick-demo .next-btn.next-medium {
    margin-right: 10px;
    margin-bottom: 10px;
  }
`;var S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",{className:"message-toast-quick-demo"},e.createElement(t,{onClick:h},"success"),e.createElement(t,{onClick:C},"warning"),e.createElement(t,{onClick:b},"error"),e.createElement(t,{onClick:E},"notice"),e.createElement(t,{onClick:_},"help"),e.createElement(t,{onClick:v},"loading"));return e.createElement(f,null,n)}});const x=()=>{n.show({type:"loading",content:"Will be closed after 3 seconds or manually click on the close button",afterClose:()=>console.log("Closed the toast")})},y=()=>n.hide();const z=o.div`
  .message-toast-demo .next-btn.next-medium {
    margin-right: 10px;
  }
`;var k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",{className:"message-toast-demo"},e.createElement(t,{onClick:x},"Show"),e.createElement(t,{onClick:y},"Hide"));return e.createElement(z,null,n)}});const j=o.div``;var w=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://codepen.io/acejerry/pen/ZEOQjzr"},"点击查看 Message.withContext Demo");return e.createElement(j,null,t)}});const T=o.div`
  .message-type-demo .next-message {
    margin-bottom: 10px;
  }
`;var M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"message-type-demo"},e.createElement(n,{title:"Success",type:"success"},"Content Content Content Content"),e.createElement(n,{title:"Warning",type:"warning"},"Content Content Content Content"),e.createElement(n,{title:"Error",type:"error"},"Content Content Content Content"),e.createElement(n,{title:"Notice",type:"notice"},"Content Content Content Content"),e.createElement(n,{title:"Help",type:"help"},"Content Content Content Content"),e.createElement(n,{title:"Loading",type:"loading"},"Content Content Content Content"));return e.createElement(T,null,t)}});const N=["success","warning","error","notice","help","loading"],O=[{value:"medium",label:"medium"},{value:"large",label:"large"}];class q extends e.Component{constructor(e){super(e),this.state={size:"medium"},this.handleSelect=this.handleSelect.bind(this)}handleSelect(e){this.setState({size:e})}render(){const{size:t}=this.state;return e.createElement("div",{className:"message-size-demo"},e.createElement("span",{className:"demo-label"},"Select Size："),e.createElement(l.Group,{defaultValue:"medium",dataSource:O,value:this.state.size,onChange:this.handleSelect}),N.map((l=>e.createElement(n,{key:l,title:l,type:l,size:t},"Content Content Content Content"))))}}const V=o.div`
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
`;var W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(q,null);return e.createElement(V,null,t)}});const G=["success","warning","error","notice","help","loading"],H=[{value:"inline",label:"inline"},{value:"addon",label:"addon"},{value:"toast",label:"toast"}];class B extends e.Component{constructor(e){super(e),this.state={shape:"inline"},this.handleSelect=this.handleSelect.bind(this)}handleSelect(e){this.setState({shape:e})}render(){const{shape:t}=this.state;return e.createElement("div",{className:"message-shape-demo"},e.createElement("span",{className:"demo-label"},"Select Shape："),e.createElement(l.Group,{defaultValue:"inline",dataSource:H,value:this.state.shape,onChange:this.handleSelect}),G.map((l=>e.createElement(n,{key:l,title:l,type:l,shape:t,closeable:!0},"Content Content Content Content"))))}}const D=o.div`
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
`;var L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(B,null);return e.createElement(D,null,t)}});const Q={};Q._accessibility=i,Q["_inline-close"]=d,Q._control=p,Q["_toast-quick"]=S,Q._toast=k,Q._withContext=w,Q._type=M,Q._size=W,Q._shape=L;export default Q;
