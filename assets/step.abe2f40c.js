import{r as e,aj as t,b as n,B as r,S as l}from"./index.4497680a.js";import{q as o}from"./styled-components.browser.esm.86ed65a5.js";const a=["one","two","three","four"];function i(t){return e.createElement("div",{className:"custom-node1"},e.createElement("span",null,t+1))}function c(t,r){return e.createElement("div",{className:"custom-node2"},"finish"===r?e.createElement(n,{type:"success"}):e.createElement("span",null,t+1)," ")}const s=o.div`
  .fusion-demo-item {
    margin: 15px 0;
  }
  .custom-node1 {
    height: 100%;
    width: 100%;
    border-radius: 20%;
    border: 1px dashed #3e71f1;
    text-align: center;
  }
  .custom-node1 span {
    font-size: 12px;

    position: absolute;
    top: 50%;
    text-align: center;
    width: 100%;
    left: 0;
    transform: translateY(-50%);
  }
  .custom-node2 {
    height: 100%;
    width: 100%;
    border-radius: 20%;
    border: 1px dashed #3e71f1;
    text-align: center;
    background: #3e71f1;
    color: #fff;
    position: relative;
  }

  .custom-node2 span,
  .custom-node2 i {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 100%;
    text-align: center;
  }
`;var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",{className:"fusion-demo"},e.createElement("div",{className:"fusion-demo-item"},e.createElement(t,{current:2,animation:!1,itemRender:i},a.map((n=>e.createElement(t.Item,{key:n,title:n}))))),e.createElement("div",{className:"fusion-demo-item"},e.createElement(t,{current:2,animation:!1,itemRender:c},a.map((n=>e.createElement(t.Item,{key:n,title:n}))))));return e.createElement(s,null,n)}});const p=o.div``;var u=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{current:1,shape:"arrow"},e.createElement(t.Item,{title:"Step 1"}),e.createElement(t.Item,{title:"Step 2"}),e.createElement(t.Item,{title:"Step 3",disabled:!0}),e.createElement(t.Item,{title:"Step 4"})),e.createElement("br",null),e.createElement("br",null),e.createElement(t,{current:1,shape:"dot"},e.createElement(t.Item,{title:"Step 1"}),e.createElement(t.Item,{title:"Step 2"}),e.createElement(t.Item,{title:"Step 3",disabled:!0}),e.createElement(t.Item,{title:"Step 4"})),e.createElement("br",null),e.createElement("br",null),e.createElement(t,{current:1,shape:"circle"},e.createElement(t.Item,{title:"Step 1"}),e.createElement(t.Item,{title:"Step 2"}),e.createElement(t.Item,{title:"Step 3",disabled:!0}),e.createElement(t.Item,{title:"Step 4"})));return e.createElement(p,null,n)}});const d=t.Item,h=r.Group,E={1:function(t){return e.createElement("div",{className:"custom-node1"},e.createElement("span",null,t+1))},2:function(t,r){return e.createElement("div",{className:"custom-node2"},"finish"===r?e.createElement(n,{type:"success"}):e.createElement("span",null,t+1)," ")}},f=["Description1","Description2 --- Very Looooooooooooooooooooooog content","Description3"];class S extends e.Component{constructor(e){super(e),this.state={currentStep:3,stepType:"circle",stepAnimation:!0,labelPlacement:"ver"},this.onClick=this.onClick.bind(this)}next(){const e=this.state.currentStep+1;this.setState({currentStep:e>6?6:e})}prev(){const e=this.state.currentStep-1;this.setState({currentStep:e<0?0:e})}onClick(e){console.log(e),this.setState({currentStep:e})}onStepTypeChange(e){this.setState({stepType:e})}onStepAnimation(e){this.setState({stepAnimation:e})}onLabelPlacementChange(e){this.setState({labelPlacement:e})}onItemRenderChange(e){this.setState({itemRender:E[e],content:f[e]})}render(){const{currentStep:n}=this.state;return e.createElement("div",null,e.createElement("div",{className:"custom-step-option"},e.createElement(l,{innerBefore:"shape:",placeholder:"Choose the dispaly type",onChange:this.onStepTypeChange.bind(this),className:"custom-select",defaultValue:"circle"},["circle","arrow","dot"].map((t=>e.createElement(l.Option,{value:t,key:t},t)))),e.createElement(l,{innerBefore:"labelPlacement:",placeholder:"Label placement",onChange:this.onLabelPlacementChange.bind(this),className:"custom-select",defaultValue:"hoz"},["hoz","ver"].map((t=>e.createElement(l.Option,{value:t,key:t},t)))),e.createElement(l,{innerBefore:"animation:",placeholder:"Enable animation",onChange:this.onStepAnimation.bind(this),className:"custom-select",defaultValue:!0},[!0,!1].map(((t,n)=>e.createElement(l.Option,{value:t,key:n},t?"on":"off")))),e.createElement(l,{innerBefore:"render:",placeholder:"Choose itemRender",onChange:this.onItemRenderChange.bind(this),className:"custom-select",defaultValue:0},["ItemRender","ItemRender1","ItemRender2"].map(((t,n)=>e.createElement(l.Option,{value:n,key:n},t))))),e.createElement(t,{itemRender:this.state.itemRender,current:n,shape:this.state.stepType,animation:this.state.stepAnimation,labelPlacement:this.state.labelPlacement},e.createElement(d,{title:"Step 1",onClick:this.onClick,content:"Description"}),e.createElement(d,{title:"Step 2",onClick:this.onClick,content:"Description"}),e.createElement(d,{title:"Step 3",onClick:this.onClick,content:this.state.content||"Description1"}),e.createElement(d,{title:"Step 4",onClick:this.onClick,content:"Description"}),e.createElement(d,{title:"Step 5",onClick:this.onClick,content:"Description"}),e.createElement(d,{title:"Step 6",onClick:this.onClick,content:"Description"})),e.createElement("br",null),e.createElement("br",null),e.createElement(h,null,e.createElement(r,{onClick:this.prev.bind(this),type:"primary",disabled:0===n},"Backward"),e.createElement(r,{onClick:this.next.bind(this),type:"primary",disabled:6===n},"Forward")))}}const b=o.div`
  .custom-step-option {
    margin-bottom: 20px;
  }

  .custom-select {
    margin-right: 20px;
  }
  .next-input-inner.next-before {
    margin-left: 8px;
  }
  .fusion-demo-item {
    margin: 15px 0;
  }
  .custom-node1 {
    height: 100%;
    width: 100%;
    border-radius: 20%;
    border: 1px dashed #3e71f1;
    text-align: center;
  }
  .custom-node1 span {
    font-size: 12px;

    position: absolute;
    top: 50%;
    text-align: center;
    width: 100%;
    left: 0;
    transform: translateY(-50%);
  }
  .custom-node2 {
    height: 100%;
    width: 100%;
    border-radius: 20%;
    border: 1px dashed #3e71f1;
    text-align: center;
    background: #3e71f1;
    color: #fff;
    position: relative;
  }

  .custom-node2 span,
  .custom-node2 i {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 100%;
    text-align: center;
  }
`;var g=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(S,null);return e.createElement(b,null,t)}});const C=[["Step 1","Open the refrigerator door"],["Step 2","Put the elephant in the refrigerator"],["Step 3","Close the refrigerator door"]].map(((n,r)=>e.createElement(t.Item,{"aria-current":1===r?"step":null,key:r,title:n[0],content:n[1]})));const k=o.div``;var v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement("h3",null,"Arrow"),e.createElement(t,{current:1,shape:"arrow"},C),e.createElement("h3",null,"Circle"),e.createElement(t,{current:1,shape:"circle"},C),e.createElement("h3",null,"Circle(Horizontal content)"),e.createElement(t,{current:1,shape:"circle",labelPlacement:"hoz"},C),e.createElement("h3",null,"Dot"),e.createElement(t,{current:1,shape:"dot"},C));return e.createElement(k,null,n)}});const y=o.div``;var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{current:1,animation:!1,shape:"dot"},e.createElement(t.Item,{title:"Step 1",content:"Open the refrigerator door",icon:"calendar"}),e.createElement(t.Item,{title:"Step 2",content:"Put the elephant in the refrigerator",percent:40}),e.createElement(t.Item,{title:"Step 3",content:"Close the refrigerator door",icon:"smile"})),e.createElement("br",null),e.createElement("br",null),e.createElement(t,{current:1,animation:!1},e.createElement(t.Item,{title:"Step 1",content:"Open the refrigerator door",icon:"calendar"}),e.createElement(t.Item,{title:"Step 2",content:"Put the elephant in the refrigerator",percent:40}),e.createElement(t.Item,{title:"Step 3",content:"Close the refrigerator door",icon:"smile"})));return e.createElement(y,null,n)}});const I=t.Item,x=r.Group;class w extends e.Component{constructor(e){super(e),this.state={currentStep:3}}next(){const e=this.state.currentStep+1;this.setState({currentStep:e>6?6:e})}prev(){const e=this.state.currentStep-1;this.setState({currentStep:e<0?0:e})}onClick(e){console.log(e),this.setState({currentStep:e})}render(){const{currentStep:n}=this.state;return e.createElement("div",null,e.createElement(t,{current:n,readOnly:!0},e.createElement(I,{title:"Step 1",onClick:this.onClick.bind(this)}),e.createElement(I,{title:"Step 2",onClick:this.onClick.bind(this)}),e.createElement(I,{title:"Step 3",onClick:this.onClick.bind(this)}),e.createElement(I,{title:"Step 4",onClick:this.onClick.bind(this)}),e.createElement(I,{title:"Step 5",onClick:this.onClick.bind(this)}),e.createElement(I,{title:"Step 6",onClick:this.onClick.bind(this)})),e.createElement("br",null),e.createElement("br",null),e.createElement(x,null,e.createElement(r,{onClick:this.prev.bind(this),type:"primary",disabled:0===n},"Backward"),e.createElement(r,{onClick:this.next.bind(this),type:"primary",disabled:6===n},"Forward")))}}const O=o.div``;var z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(w,null);return e.createElement(O,null,t)}});const P=o.div``;var N=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{current:1,direction:"ver",animation:!1},e.createElement(t.Item,{title:"Step 1",content:"Open the refrigerator door"}),e.createElement(t.Item,{title:"Step 2",content:"Put the elephant in the refrigerator"}),e.createElement(t.Item,{title:"Step 3",content:"Close the refrigerator door"})),e.createElement("br",null),e.createElement("br",null),e.createElement(t,{current:1,direction:"ver",shape:"dot",animation:!1},e.createElement(t.Item,{title:"Step 1",content:"Open the refrigerator door"}),e.createElement(t.Item,{title:"Step 2",content:"Put the elephant in the refrigerator"}),e.createElement(t.Item,{title:"Step 3",content:"Close the refrigerator door"})));return e.createElement(P,null,n)}});const T={};T["_custom-step-item"]=m,T._disable=u,T._controlled=g,T._basic=v,T._percent=_,T["_read-only"]=z,T._direction=N;export default T;
