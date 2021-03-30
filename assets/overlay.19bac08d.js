import{r as e,B as t,z as l,q as r}from"./index.4543a34a.js";import{q as n}from"./styled-components.browser.esm.09d3b94c.js";class o extends e.Component{constructor(e){super(e),this.onClick=()=>{this.setState({visible:!0})},this.onClose=()=>{this.setState({visible:!1})},this.state={visible:!1}}render(){return e.createElement("div",null,e.createElement(t,{onClick:this.onClick,ref:e=>{this.btn=e}},"Open"),e.createElement(l,{visible:this.state.visible,safeNode:()=>this.btn,align:"cc cc",hasMask:!0,disableScroll:!0,onRequestClose:this.onClose},e.createElement("span",{className:"overlay-demo"},"Hello World From Overlay!")))}}const a=n.div`
  .overlay-demo {
    width: 300px;
    height: 100px;
    padding: 10px;
    border: 1px solid #efefef;
    background: #ffffff;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
  }
`;var i=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(o,null);return e.createElement(a,null,t)}});const c=n.div`
  .overlay-container {
    position: relative;
    height: 150px;
    margin: 50px;
    border: 1px solid #eee;
    overflow: auto;
    text-align: center;
  }
`;var s=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const r=e.createElement("div",{id:"containerId",className:"overlay-container"},e.createElement(l,{target:"containerId",visible:!0,align:"br tl"},e.createElement(t,null,"br tl")),e.createElement(l,{target:"containerId",visible:!0,align:"tc tc"},e.createElement(t,null,"tc tc")),e.createElement(l,{target:"containerId",visible:!0,align:"bl tr"},e.createElement(t,null,"bl tr")),e.createElement(l,{target:"containerId",visible:!0,align:"cr cr"},e.createElement(t,null,"cr cr")),e.createElement(l,{target:"containerId",visible:!0,align:"br br"},e.createElement(t,null,"br br")),e.createElement(l,{target:"containerId",visible:!0,align:"tc bc"},e.createElement(t,null,"tc bc")),e.createElement(l,{target:"containerId",visible:!0,align:"bl bl"},e.createElement(t,null,"bl bl")),e.createElement(l,{target:"containerId",visible:!0,align:"cl cl"},e.createElement(t,null,"cl cl")),e.createElement(l,{target:"containerId",visible:!0,align:"cc cc"},e.createElement(t,null,"cc cc")));return e.createElement(c,null,r)}});class p extends e.Component{constructor(e){super(e),this.onClick=()=>{this.setState({visible:!this.state.visible})},this.onClose=()=>{this.setState({visible:!1})},this.state={visible:!1}}render(){return e.createElement("div",null,e.createElement(t,{onClick:this.onClick,ref:e=>{this.btn=e}},"Toggle visible"),e.createElement(l,{visible:this.state.visible,target:()=>this.btn,safeNode:()=>this.btn,onRequestClose:this.onClose},e.createElement("span",{className:"overlay-demo"},"Hello World From Overlay!")))}}const d=n.div`
  .overlay-demo {
    width: 300px;
    height: 100px;
    padding: 10px;
    border: 1px solid #efefef;
    background: #ffffff;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
  }
`;var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(p,null);return e.createElement(d,null,t)}});const{Popup:g}=l;const u=n.div`
  .overlay-demo {
    width: 300px;
    height: 100px;
    padding: 10px;
    border: 1px solid #eee;
    background: #ffffff;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
  }
`;var b=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.createElement(g,{trigger:e.createElement(t,null,"Open first overlay"),triggerType:"click"},e.createElement("div",{className:"overlay-demo"},e.createElement(g,{trigger:e.createElement(t,null,"Open second overlay"),triggerType:"click",container:e=>e.parentNode},e.createElement("div",{className:"overlay-demo"},e.createElement("p",null,"Hello World From Second Overlay!"))),e.createElement("p",null,"Hello World From First Overlay!")));return e.createElement(u,null,l)}});const{Popup:v}=l;class f extends e.Component{constructor(e){super(e),this.onVisibleChange=e=>{this.setState({visible:e})},this.onGroupVisibleChange=e=>{this.setState({groupVisible:e})},this.state={visible:!1}}render(){return e.createElement("div",null,e.createElement("div",null,e.createElement(v,{trigger:e.createElement(t,null,"Open"),triggerType:"click",visible:this.state.visible,onVisibleChange:this.onVisibleChange},e.createElement("span",{className:"overlay-demo"},"Hello World From Popup!"))),e.createElement("br",null),e.createElement("div",null,e.createElement(v,{trigger:e.createElement(t,{style:{marginRight:"50px"},ref:e=>{this.btn1=e}},"Paired Popup 1"),triggerType:"click",visible:this.state.groupVisible,safeNode:[()=>this.btn2,()=>this.overlay2],onVisibleChange:this.onGroupVisibleChange},e.createElement("span",{className:"overlay-demo",ref:e=>{this.overlay1=e}},"Hello World From Popup!")),e.createElement(v,{trigger:e.createElement(t,{ref:e=>{this.btn2=e}},"Paired Popup 2"),triggerType:"click",visible:this.state.groupVisible,safeNode:[()=>this.btn1,()=>this.overlay1],onVisibleChange:this.onGroupVisibleChange},e.createElement("span",{className:"overlay-demo",ref:e=>{this.overlay2=e}},"Hello World From Popup!"))))}}const h=n.div`
  .overlay-demo {
    width: 300px;
    height: 100px;
    padding: 10px;
    border: 1px solid #eee;
    background: #ffffff;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
  }
`;var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(f,null);return e.createElement(h,null,t)}});const{Popup:x}=l;const y=n.div`
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
`;var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.createElement("div",{className:"scroll-container"},e.createElement(x,{trigger:e.createElement(t,null,"Open"),triggerType:"click",container:e=>e.parentNode},e.createElement("div",{className:"overlay-demo"},"Hello World From Popup!")),e.createElement("div",{style:{height:"300px"}}));return e.createElement(y,null,l)}});const{Popup:k}=l;const C=n.div`
  .overlay-demo {
    width: 300px;
    height: 100px;
    padding: 10px;
    border: 1px solid #999999;
    background: #ffffff;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
  }
`;var S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.createElement("div",null,e.createElement(k,{trigger:e.createElement(t,null,"Open"),triggerType:"click"},e.createElement("span",{className:"overlay-demo"},"Hello World From Popup!")),e.createElement("br",null),e.createElement("br",null),e.createElement(k,{trigger:e.createElement(r,{placeholder:"Use Down Arrow to open"}),triggerType:"click",triggerClickKeycode:40},e.createElement("span",{className:"overlay-demo"},"Hello World From Popup!")));return e.createElement(C,null,l)}});const{Popup:N}=l;const T=n.div`
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
`;var w=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.createElement("div",null,e.createElement(N,{trigger:e.createElement(t,null,"click"),triggerType:"click"},e.createElement("span",{className:"overlay-demo"},"Click to open Popup!")),e.createElement(N,{trigger:e.createElement(t,null,"hover"),triggerType:"hover"},e.createElement("span",{className:"overlay-demo"},"Hover to open Popup!")),e.createElement(N,{trigger:e.createElement(t,null,"focus"),triggerType:"focus"},e.createElement("span",{className:"overlay-demo"},"Focus to open Popup!")));return e.createElement(T,null,l)}});const O={};O._backdrop=i,O._align=s,O._baisc=m,O._nested=b,O._controlled=E,O._scroll=_,O._popup=S,O["_trigger-type"]=w;export default O;
