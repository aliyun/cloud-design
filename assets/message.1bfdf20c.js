import{r as e,B as t,a0 as n,R as l}from"./index.4642f55c.js";import{q as o}from"./styled-components.browser.esm.1feaecc0.js";class a extends e.Component{constructor(){super(...arguments),this.state={visible:!0},this.handleChange=()=>{this.setState({visible:!this.state.visible})},this.handleClose=()=>{this.setState({visible:!1})}}render(){const{visible:l}=this.state;return e.createElement("div",{className:"control-demo"},e.createElement(t,{onClick:this.handleChange},"Toggle Visible"),e.createElement(n,{type:"warning",visible:l,title:"Warning",closeable:!0,onClose:this.handleClose},'This item already has the label "travel". You can add a new label.'))}}const s=o.div`
  .control-demo .next-btn.next-medium {
    margin-bottom: 10px;
  }
`;var i=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(a,null);return e.createElement(s,null,t)}});const r=()=>n.success("成功消息其它文案，会主动消失");const c=o.div``;var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",{className:"message-toast-quick-demo"},e.createElement(t,{onClick:r},"success"));return e.createElement(c,null,n)}});const d=["success","warning","error","notice","help","loading"],u=[{value:"inline",label:"inline"},{value:"addon",label:"addon"},{value:"toast",label:"toast"}];class g extends e.Component{constructor(e){super(e),this.state={shape:"inline"},this.handleSelect=this.handleSelect.bind(this)}handleSelect(e){this.setState({shape:e})}render(){const{shape:t}=this.state;return e.createElement("div",{className:"message-shape-demo"},e.createElement("span",{className:"demo-label"},"Select Shape："),e.createElement(l.Group,{defaultValue:"inline",dataSource:u,value:this.state.shape,onChange:this.handleSelect}),d.map((l=>e.createElement(n,{key:l,title:l,type:l,shape:t,closeable:!0},"Content Content Content Content"))))}}const p=o.div`
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
`;var h=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(g,null);return e.createElement(p,null,t)}});const C=()=>console.log("onClose triggered!"),b=()=>console.log("afterClose triggered!");const E=o.div``;var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,e.createElement(n,{title:"title",closeable:!0,onClose:C,afterClose:b},"Content Content Content Content"));return e.createElement(E,null,t)}});const v=["success","warning","error","notice","help","loading"],f=[{value:"medium",label:"medium"},{value:"large",label:"large"}];class S extends e.Component{constructor(e){super(e),this.state={size:"medium"},this.handleSelect=this.handleSelect.bind(this)}handleSelect(e){this.setState({size:e})}render(){const{size:t}=this.state;return e.createElement("div",{className:"message-size-demo"},e.createElement("span",{className:"demo-label"},"Select Size："),e.createElement(l.Group,{defaultValue:"medium",dataSource:f,value:this.state.size,onChange:this.handleSelect}),v.map((l=>e.createElement(n,{key:l,title:l,type:l,size:t},"Content Content Content Content"))))}}const x=o.div`
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
`;var k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"message-type-demo"},e.createElement(n,{title:"Success",type:"success"},"Content Content Content Content"),e.createElement(n,{title:"Warning",type:"warning"},"Content Content Content Content"),e.createElement(n,{title:"Error",type:"error"},"Content Content Content Content"),e.createElement(n,{title:"Notice",type:"notice"},"Content Content Content Content"),e.createElement(n,{title:"Help",type:"help"},"Content Content Content Content"),e.createElement(n,{title:"Loading",type:"loading"},"Content Content Content Content"));return e.createElement(z,null,t)}});const j=o.div``;var w=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://codepen.io/acejerry/pen/ZEOQjzr"},"点击查看 Message.withContext Demo");return e.createElement(j,null,t)}});const T=()=>{n.show({type:"loading",content:"Will be closed after 3 seconds or manually click on the close button",afterClose:()=>console.log("Closed the toast")})},M=()=>n.hide();const N=o.div`
  .message-toast-demo .next-btn.next-medium {
    margin-right: 10px;
  }
`;var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",{className:"message-toast-demo"},e.createElement(t,{onClick:T},"Show"),e.createElement(t,{onClick:M},"Hide"));return e.createElement(N,null,n)}});const q=()=>n.success({title:"success",duration:0}),V=()=>n.warning("warning"),W=()=>n.error("error"),G=()=>n.notice("notice"),H=()=>n.help("help"),B=()=>n.loading("loading");const D=o.div`
  .message-toast-quick-demo .next-btn.next-medium {
    margin-right: 10px;
    margin-bottom: 10px;
  }
`;var L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",{className:"message-toast-quick-demo"},e.createElement(t,{onClick:q},"success"),e.createElement(t,{onClick:V},"warning"),e.createElement(t,{onClick:W},"error"),e.createElement(t,{onClick:G},"notice"),e.createElement(t,{onClick:H},"help"),e.createElement(t,{onClick:B},"loading"));return e.createElement(D,null,n)}});const Q={};Q._control=i,Q._accessibility=m,Q._shape=h,Q["_inline-close"]=_,Q._size=y,Q._type=k,Q._withContext=w,Q._toast=O,Q["_toast-quick"]=L;export default Q;
