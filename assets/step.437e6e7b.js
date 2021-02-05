import{ai as e,B as t,r as n,S as r,b as l}from"./index.3c24fdbb.js";import{q as o}from"./styled-components.browser.esm.1222bcc8.js";const a=e.Item,i=t.Group,c={1:function(e){return n.createElement("div",{className:"custom-node1"},n.createElement("span",null,e+1))},2:function(e,t){return n.createElement("div",{className:"custom-node2"},"finish"===t?n.createElement(l,{type:"success"}):n.createElement("span",null,e+1)," ")}},s=["Description1","Description2 --- Very Looooooooooooooooooooooog content","Description3"];class m extends n.Component{constructor(e){super(e),this.state={currentStep:3,stepType:"circle",stepAnimation:!0,labelPlacement:"ver"},this.onClick=this.onClick.bind(this)}next(){const e=this.state.currentStep+1;this.setState({currentStep:e>6?6:e})}prev(){const e=this.state.currentStep-1;this.setState({currentStep:e<0?0:e})}onClick(e){console.log(e),this.setState({currentStep:e})}onStepTypeChange(e){this.setState({stepType:e})}onStepAnimation(e){this.setState({stepAnimation:e})}onLabelPlacementChange(e){this.setState({labelPlacement:e})}onItemRenderChange(e){this.setState({itemRender:c[e],content:s[e]})}render(){const{currentStep:l}=this.state;return n.createElement("div",null,n.createElement("div",{className:"custom-step-option"},n.createElement(r,{innerBefore:"shape:",placeholder:"Choose the dispaly type",onChange:this.onStepTypeChange.bind(this),className:"custom-select",defaultValue:"circle"},["circle","arrow","dot"].map((e=>n.createElement(r.Option,{value:e,key:e},e)))),n.createElement(r,{innerBefore:"labelPlacement:",placeholder:"Label placement",onChange:this.onLabelPlacementChange.bind(this),className:"custom-select",defaultValue:"hoz"},["hoz","ver"].map((e=>n.createElement(r.Option,{value:e,key:e},e)))),n.createElement(r,{innerBefore:"animation:",placeholder:"Enable animation",onChange:this.onStepAnimation.bind(this),className:"custom-select",defaultValue:!0},[!0,!1].map(((e,t)=>n.createElement(r.Option,{value:e,key:t},e?"on":"off")))),n.createElement(r,{innerBefore:"render:",placeholder:"Choose itemRender",onChange:this.onItemRenderChange.bind(this),className:"custom-select",defaultValue:0},["ItemRender","ItemRender1","ItemRender2"].map(((e,t)=>n.createElement(r.Option,{value:t,key:t},e))))),n.createElement(e,{itemRender:this.state.itemRender,current:l,shape:this.state.stepType,animation:this.state.stepAnimation,labelPlacement:this.state.labelPlacement},n.createElement(a,{title:"Step 1",onClick:this.onClick,content:"Description"}),n.createElement(a,{title:"Step 2",onClick:this.onClick,content:"Description"}),n.createElement(a,{title:"Step 3",onClick:this.onClick,content:this.state.content||"Description1"}),n.createElement(a,{title:"Step 4",onClick:this.onClick,content:"Description"}),n.createElement(a,{title:"Step 5",onClick:this.onClick,content:"Description"}),n.createElement(a,{title:"Step 6",onClick:this.onClick,content:"Description"})),n.createElement("br",null),n.createElement("br",null),n.createElement(i,null,n.createElement(t,{onClick:this.prev.bind(this),type:"primary",disabled:0===l},"Backward"),n.createElement(t,{onClick:this.next.bind(this),type:"primary",disabled:6===l},"Forward")))}}const p=o.div`
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
`;var u=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=n.createElement(m,null);return n.createElement(p,null,e)}});const d=[["Step 1","Open the refrigerator door"],["Step 2","Put the elephant in the refrigerator"],["Step 3","Close the refrigerator door"]].map(((t,r)=>n.createElement(e.Item,{"aria-current":1===r?"step":null,key:r,title:t[0],content:t[1]})));const h=o.div``;var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=n.createElement("div",null,n.createElement("h3",null,"Arrow"),n.createElement(e,{current:1,shape:"arrow"},d),n.createElement("h3",null,"Circle"),n.createElement(e,{current:1,shape:"circle"},d),n.createElement("h3",null,"Circle(Horizontal content)"),n.createElement(e,{current:1,shape:"circle",labelPlacement:"hoz"},d),n.createElement("h3",null,"Dot"),n.createElement(e,{current:1,shape:"dot"},d));return n.createElement(h,null,t)}});const f=["one","two","three","four"];function S(e){return n.createElement("div",{className:"custom-node1"},n.createElement("span",null,e+1))}function b(e,t){return n.createElement("div",{className:"custom-node2"},"finish"===t?n.createElement(l,{type:"success"}):n.createElement("span",null,e+1)," ")}const g=o.div`
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
`;var C=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=n.createElement("div",{className:"fusion-demo"},n.createElement("div",{className:"fusion-demo-item"},n.createElement(e,{current:2,animation:!1,itemRender:S},f.map((t=>n.createElement(e.Item,{key:t,title:t}))))),n.createElement("div",{className:"fusion-demo-item"},n.createElement(e,{current:2,animation:!1,itemRender:b},f.map((t=>n.createElement(e.Item,{key:t,title:t}))))));return n.createElement(g,null,t)}});const k=o.div``;var v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=n.createElement("div",null,n.createElement(e,{current:1,direction:"ver",animation:!1},n.createElement(e.Item,{title:"Step 1",content:"Open the refrigerator door"}),n.createElement(e.Item,{title:"Step 2",content:"Put the elephant in the refrigerator"}),n.createElement(e.Item,{title:"Step 3",content:"Close the refrigerator door"})),n.createElement("br",null),n.createElement("br",null),n.createElement(e,{current:1,direction:"ver",shape:"dot",animation:!1},n.createElement(e.Item,{title:"Step 1",content:"Open the refrigerator door"}),n.createElement(e.Item,{title:"Step 2",content:"Put the elephant in the refrigerator"}),n.createElement(e.Item,{title:"Step 3",content:"Close the refrigerator door"})));return n.createElement(k,null,t)}});const y=o.div``;var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=n.createElement("div",null,n.createElement(e,{current:1,shape:"arrow"},n.createElement(e.Item,{title:"Step 1"}),n.createElement(e.Item,{title:"Step 2"}),n.createElement(e.Item,{title:"Step 3",disabled:!0}),n.createElement(e.Item,{title:"Step 4"})),n.createElement("br",null),n.createElement("br",null),n.createElement(e,{current:1,shape:"dot"},n.createElement(e.Item,{title:"Step 1"}),n.createElement(e.Item,{title:"Step 2"}),n.createElement(e.Item,{title:"Step 3",disabled:!0}),n.createElement(e.Item,{title:"Step 4"})),n.createElement("br",null),n.createElement("br",null),n.createElement(e,{current:1,shape:"circle"},n.createElement(e.Item,{title:"Step 1"}),n.createElement(e.Item,{title:"Step 2"}),n.createElement(e.Item,{title:"Step 3",disabled:!0}),n.createElement(e.Item,{title:"Step 4"})));return n.createElement(y,null,t)}});const I=o.div``;var x=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=n.createElement("div",null,n.createElement(e,{current:1,animation:!1,shape:"dot"},n.createElement(e.Item,{title:"Step 1",content:"Open the refrigerator door",icon:"calendar"}),n.createElement(e.Item,{title:"Step 2",content:"Put the elephant in the refrigerator",percent:40}),n.createElement(e.Item,{title:"Step 3",content:"Close the refrigerator door",icon:"smile"})),n.createElement("br",null),n.createElement("br",null),n.createElement(e,{current:1,animation:!1},n.createElement(e.Item,{title:"Step 1",content:"Open the refrigerator door",icon:"calendar"}),n.createElement(e.Item,{title:"Step 2",content:"Put the elephant in the refrigerator",percent:40}),n.createElement(e.Item,{title:"Step 3",content:"Close the refrigerator door",icon:"smile"})));return n.createElement(I,null,t)}});const w=e.Item,O=t.Group;class z extends n.Component{constructor(e){super(e),this.state={currentStep:3}}next(){const e=this.state.currentStep+1;this.setState({currentStep:e>6?6:e})}prev(){const e=this.state.currentStep-1;this.setState({currentStep:e<0?0:e})}onClick(e){console.log(e),this.setState({currentStep:e})}render(){const{currentStep:r}=this.state;return n.createElement("div",null,n.createElement(e,{current:r,readOnly:!0},n.createElement(w,{title:"Step 1",onClick:this.onClick.bind(this)}),n.createElement(w,{title:"Step 2",onClick:this.onClick.bind(this)}),n.createElement(w,{title:"Step 3",onClick:this.onClick.bind(this)}),n.createElement(w,{title:"Step 4",onClick:this.onClick.bind(this)}),n.createElement(w,{title:"Step 5",onClick:this.onClick.bind(this)}),n.createElement(w,{title:"Step 6",onClick:this.onClick.bind(this)})),n.createElement("br",null),n.createElement("br",null),n.createElement(O,null,n.createElement(t,{onClick:this.prev.bind(this),type:"primary",disabled:0===r},"Backward"),n.createElement(t,{onClick:this.next.bind(this),type:"primary",disabled:6===r},"Forward")))}}const P=o.div``;var N=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=n.createElement(z,null);return n.createElement(P,null,e)}});const T={};T._controlled=u,T._basic=E,T["_custom-step-item"]=C,T._direction=v,T._disable=_,T._percent=x,T["_read-only"]=N;export default T;
