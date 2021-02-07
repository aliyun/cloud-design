import{r as e,v as t}from"./index.fee66166.js";import{q as l}from"./styled-components.browser.esm.6d4e4fc0.js";const r=l.div`
  .overlay-container {
    position: relative;
    height: 150px;
    margin: 50px;
    border: 1px solid #999;
    overflow: auto;
    text-align: center;
    color: red;
  }
`;var n=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.createElement("div",null,e.createElement("div",{id:"container1",className:"overlay-container"},"normal example",e.createElement(t,{target:"container1",visible:!0,align:"tr tr"},e.createElement("span",null,"123")),e.createElement(t,{target:"container1",visible:!0,align:"cc cr"},e.createElement("span",null,"123")),e.createElement(t,{target:"container1",visible:!0,align:"bc bc"},e.createElement("span",null,"123"))),e.createElement("br",null),e.createElement("br",null),e.createElement("br",null),e.createElement("br",null),e.createElement("div",{id:"container2",className:"overlay-container",dir:"rtl"},"dir=rtl example",e.createElement(t,{target:"container2",rtl:!0,visible:!0,align:"tr tr"},e.createElement("span",null,"123")),e.createElement(t,{target:"container2",rtl:!0,visible:!0,align:"cc cr"},e.createElement("span",null,"123")),e.createElement(t,{target:"container2",rtl:!0,visible:!0,align:"bc bc"},e.createElement("span",null,"123"))));return e.createElement(r,null,l)}});class o extends e.Component{constructor(e){super(e),this.onClick=()=>{this.setState({visible:!this.state.visible})},this.onClose=()=>{this.setState({visible:!1})},this.state={visible:!1}}render(){return e.createElement("div",null,e.createElement("button",{onClick:this.onClick,ref:e=>{this.btn=e}},"Toggle visible"),e.createElement(t,{visible:this.state.visible,target:()=>this.btn,safeNode:()=>this.btn,onRequestClose:this.onClose},e.createElement("span",{className:"overlay-demo"},"Hello World From Overlay!")))}}const a=l.div`
  .overlay-demo {
    width: 300px;
    height: 100px;
    padding: 10px;
    border: 1px solid #999999;
    background: #ffffff;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
  }
`;var i=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(o,null);return e.createElement(a,null,t)}});const{Popup:s}=t;class c extends e.Component{constructor(e){super(e),this.onVisibleChange=e=>{this.setState({visible:e})},this.onGroupVisibleChange=e=>{this.setState({groupVisible:e})},this.state={visible:!1}}render(){return e.createElement("div",null,e.createElement("div",null,e.createElement(s,{trigger:e.createElement("button",null,"Open"),triggerType:"click",visible:this.state.visible,onVisibleChange:this.onVisibleChange},e.createElement("span",{className:"overlay-demo"},"Hello World From Popup!"))),e.createElement("br",null),e.createElement("div",null,e.createElement(s,{trigger:e.createElement("button",{style:{"margin-right":"50px"},ref:e=>{this.btn1=e}},"Paired Popup 1"),triggerType:"click",visible:this.state.groupVisible,safeNode:[()=>this.btn2,()=>this.overlay2],onVisibleChange:this.onGroupVisibleChange},e.createElement("span",{className:"overlay-demo",ref:e=>{this.overlay1=e}},"Hello World From Popup!")),e.createElement(s,{trigger:e.createElement("button",{ref:e=>{this.btn2=e}},"Paired Popup 2"),triggerType:"click",visible:this.state.groupVisible,safeNode:[()=>this.btn1,()=>this.overlay1],onVisibleChange:this.onGroupVisibleChange},e.createElement("span",{className:"overlay-demo",ref:e=>{this.overlay2=e}},"Hello World From Popup!"))))}}const p=l.div`
  .overlay-demo {
    width: 300px;
    height: 100px;
    padding: 10px;
    border: 1px solid #999999;
    background: #ffffff;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
  }
`;var d=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(c,null);return e.createElement(p,null,t)}});class m extends e.Component{constructor(e){super(e),this.onClick=()=>{this.setState({visible:!0})},this.onClose=()=>{this.setState({visible:!1})},this.state={visible:!1}}render(){return e.createElement("div",null,e.createElement("button",{onClick:this.onClick,ref:e=>{this.btn=e}},"Open"),e.createElement(t,{visible:this.state.visible,safeNode:()=>this.btn,align:"cc cc",hasMask:!0,disableScroll:!0,onRequestClose:this.onClose},e.createElement("span",{className:"overlay-demo"},"Hello World From Overlay!")))}}const u=l.div`
  .overlay-demo {
    width: 300px;
    height: 100px;
    padding: 10px;
    border: 1px solid #999999;
    background: #ffffff;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
  }
`;var g=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(m,null);return e.createElement(u,null,t)}});const{Popup:b}=t;const v=l.div`
  .overlay-demo {
    width: 300px;
    height: 100px;
    padding: 10px;
    border: 1px solid #999999;
    background: #ffffff;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
  }
`;var h=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(b,{trigger:e.createElement("button",null,"Open first overlay"),triggerType:"click"},e.createElement("div",{className:"overlay-demo"},e.createElement(b,{trigger:e.createElement("button",null,"Open second overlay"),triggerType:"click",container:e=>e.parentNode},e.createElement("div",{className:"overlay-demo"},e.createElement("p",null,"Hello World From Second Overlay!"))),e.createElement("p",null,"Hello World From First Overlay!")));return e.createElement(v,null,t)}});const{Popup:f}=t;const E=l.div`
  .overlay-demo {
    width: 300px;
    height: 100px;
    padding: 10px;
    border: 1px solid #999999;
    background: #ffffff;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
  }
`;var x=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,e.createElement(f,{trigger:e.createElement("button",null,"Open"),triggerType:"click"},e.createElement("span",{className:"overlay-demo"},"Hello World From Popup!")),e.createElement("br",null),e.createElement(f,{trigger:e.createElement("button",null,"Use Down Arrow to open"),triggerType:"click",triggerClickKeycode:40},e.createElement("span",{className:"overlay-demo"},"Hello World From Popup!")));return e.createElement(E,null,t)}});const{Popup:y}=t;const _=l.div`
  .overlay-demo {
    width: 300px;
    height: 100px;
    padding: 10px;
    border: 1px solid #999999;
    background: #ffffff;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
  }

  .scroll-container {
    position: relative;
    height: 150px;
    padding: 10px;
    border: 1px solid #999999;
    overflow: auto;
  }
`;var C=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"scroll-container"},e.createElement(y,{trigger:e.createElement("button",null,"Open"),triggerType:"click",container:e=>e.parentNode},e.createElement("div",{className:"overlay-demo"},"Hello World From Popup!")),e.createElement("div",{style:{height:"300px"}}));return e.createElement(_,null,t)}});const k={};k._align=n,k._overlay=i,k._controlled=d,k._backdrop=g,k._nested=h,k._popup=x,k._scroll=C;export default k;
