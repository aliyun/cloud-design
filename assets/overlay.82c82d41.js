import{r as e,M as t,B as r,f as o}from"./index.672a70f3.js";import{q as l}from"./styled-components.browser.esm.f3e9ec77.js";const n=l.div`
  .overlay-container {
    position: relative;
    height: 150px;
    margin: 50px;
    border: 1px solid #eee;
    overflow: auto;
    text-align: center;
  }
`;var s=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const o=e.exports.createElement("div",{id:"containerId",className:"overlay-container"},e.exports.createElement(t,{target:"containerId",visible:!0,align:"br tl"},e.exports.createElement(r,null,"br tl")),e.exports.createElement(t,{target:"containerId",visible:!0,align:"tc tc"},e.exports.createElement(r,null,"tc tc")),e.exports.createElement(t,{target:"containerId",visible:!0,align:"bl tr"},e.exports.createElement(r,null,"bl tr")),e.exports.createElement(t,{target:"containerId",visible:!0,align:"cr cr"},e.exports.createElement(r,null,"cr cr")),e.exports.createElement(t,{target:"containerId",visible:!0,align:"br br"},e.exports.createElement(r,null,"br br")),e.exports.createElement(t,{target:"containerId",visible:!0,align:"tc bc"},e.exports.createElement(r,null,"tc bc")),e.exports.createElement(t,{target:"containerId",visible:!0,align:"bl bl"},e.exports.createElement(r,null,"bl bl")),e.exports.createElement(t,{target:"containerId",visible:!0,align:"cl cl"},e.exports.createElement(r,null,"cl cl")),e.exports.createElement(t,{target:"containerId",visible:!0,align:"cc cc"},e.exports.createElement(r,null,"cc cc")));return e.exports.createElement(n,null,o)}});class a extends e.exports.Component{constructor(e){super(e),this.onClick=()=>{this.setState({visible:!0})},this.onClose=()=>{this.setState({visible:!1})},this.state={visible:!1}}render(){return e.exports.createElement("div",null,e.exports.createElement(r,{onClick:this.onClick,ref:e=>{this.btn=e}},"Open"),e.exports.createElement(t,{visible:this.state.visible,safeNode:()=>this.btn,align:"cc cc",hasMask:!0,disableScroll:!0,onRequestClose:this.onClose},e.exports.createElement("span",{className:"overlay-demo"},"Hello World From Overlay!")))}}const i=l.div`
  .overlay-demo {
    width: 300px;
    height: 100px;
    padding: 10px;
    border: 1px solid #efefef;
    background: #ffffff;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
  }
`;var p=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(a,null);return e.exports.createElement(i,null,t)}});class c extends e.exports.Component{constructor(e){super(e),this.onClick=()=>{this.setState({visible:!this.state.visible})},this.onClose=()=>{this.setState({visible:!1})},this.state={visible:!1}}render(){return e.exports.createElement("div",null,e.exports.createElement(r,{onClick:this.onClick,ref:e=>{this.btn=e}},"Toggle visible"),e.exports.createElement(t,{visible:this.state.visible,target:()=>this.btn,safeNode:()=>this.btn,onRequestClose:this.onClose},e.exports.createElement("span",{className:"overlay-demo"},"Hello World From Overlay!")))}}const d=l.div`
  .overlay-demo {
    width: 300px;
    height: 100px;
    padding: 10px;
    border: 1px solid #efefef;
    background: #ffffff;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
  }
`;var x=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(c,null);return e.exports.createElement(d,null,t)}});const{Popup:m}=t;class g extends e.exports.Component{constructor(e){super(e),this.onVisibleChange=e=>{this.setState({visible:e})},this.onGroupVisibleChange=e=>{this.setState({groupVisible:e})},this.state={visible:!1}}render(){return e.exports.createElement("div",null,e.exports.createElement("div",null,e.exports.createElement(m,{trigger:e.exports.createElement(r,null,"Open"),triggerType:"click",visible:this.state.visible,onVisibleChange:this.onVisibleChange},e.exports.createElement("span",{className:"overlay-demo"},"Hello World From Popup!"))),e.exports.createElement("br",null),e.exports.createElement("div",null,e.exports.createElement(m,{trigger:e.exports.createElement(r,{style:{marginRight:"50px"},ref:e=>{this.btn1=e}},"Paired Popup 1"),triggerType:"click",visible:this.state.groupVisible,safeNode:[()=>this.btn2,()=>this.overlay2],onVisibleChange:this.onGroupVisibleChange},e.exports.createElement("span",{className:"overlay-demo",ref:e=>{this.overlay1=e}},"Hello World From Popup!")),e.exports.createElement(m,{trigger:e.exports.createElement(r,{ref:e=>{this.btn2=e}},"Paired Popup 2"),triggerType:"click",visible:this.state.groupVisible,safeNode:[()=>this.btn1,()=>this.overlay1],onVisibleChange:this.onGroupVisibleChange},e.exports.createElement("span",{className:"overlay-demo",ref:e=>{this.overlay2=e}},"Hello World From Popup!"))))}}const u=l.div`
  .overlay-demo {
    width: 300px;
    height: 100px;
    padding: 10px;
    border: 1px solid #eee;
    background: #ffffff;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
  }
`;var b=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(g,null);return e.exports.createElement(u,null,t)}});const{Popup:v}=t;const f=l.div`
  .overlay-demo {
    width: 300px;
    height: 100px;
    padding: 10px;
    border: 1px solid #eee;
    background: #ffffff;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
  }
`;var h=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(v,{trigger:e.exports.createElement(r,null,"Open first overlay"),triggerType:"click"},e.exports.createElement("div",{className:"overlay-demo"},e.exports.createElement(v,{trigger:e.exports.createElement(r,null,"Open second overlay"),triggerType:"click",container:e=>e.parentNode},e.exports.createElement("div",{className:"overlay-demo"},e.exports.createElement("p",null,"Hello World From Second Overlay!"))),e.exports.createElement("p",null,"Hello World From First Overlay!")));return e.exports.createElement(f,null,t)}});const{Popup:E}=t;const y=l.div`
  .overlay-demo {
    width: 300px;
    height: 100px;
    padding: 10px;
    border: 1px solid #999999;
    background: #ffffff;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
  }
`;var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement("div",null,e.exports.createElement(E,{trigger:e.exports.createElement(r,null,"Open"),triggerType:"click"},e.exports.createElement("span",{className:"overlay-demo"},"Hello World From Popup!")),e.exports.createElement("br",null),e.exports.createElement("br",null),e.exports.createElement(E,{trigger:e.exports.createElement(o,{placeholder:"Use Down Arrow to open"}),triggerType:"click",triggerClickKeycode:40},e.exports.createElement("span",{className:"overlay-demo"},"Hello World From Popup!")));return e.exports.createElement(y,null,t)}});const{Popup:k}=t;const C=l.div`
  .overlay-demo {
    width: 300px;
    height: 100px;
    padding: 10px;
    border: 1px solid #eee;
    background: #ffffff;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
  }

  .scroll-container {
    position: relative;
    height: 150px;
    padding: 10px;
    border: 1px solid #eee;
    overflow: auto;
  }
`;var S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement("div",{className:"scroll-container"},e.exports.createElement(k,{trigger:e.exports.createElement(r,null,"Open"),triggerType:"click",container:e=>e.parentNode},e.exports.createElement("div",{className:"overlay-demo"},"Hello World From Popup!")),e.exports.createElement("div",{style:{height:"300px"}}));return e.exports.createElement(C,null,t)}});const{Popup:N}=t;const T=l.div`
  .overlay-demo {
    width: 300px;
    height: 100px;
    padding: 10px;
    border: 1px solid #eee;
    background: #ffffff;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
  }
  .next-btn:not(last-child) {
    margin-right: 20px;
  }
`;var w=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement("div",null,e.exports.createElement(N,{trigger:e.exports.createElement(r,null,"click"),triggerType:"click"},e.exports.createElement("span",{className:"overlay-demo"},"Click to open Popup!")),e.exports.createElement(N,{trigger:e.exports.createElement(r,null,"hover"),triggerType:"hover"},e.exports.createElement("span",{className:"overlay-demo"},"Hover to open Popup!")),e.exports.createElement(N,{trigger:e.exports.createElement(r,null,"focus"),triggerType:"focus"},e.exports.createElement("span",{className:"overlay-demo"},"Focus to open Popup!")));return e.exports.createElement(T,null,t)}});const O={};O._align=s,O._backdrop=p,O._baisc=x,O._controlled=b,O._nested=h,O._popup=_,O._scroll=S,O["_trigger-type"]=w;export default O;
