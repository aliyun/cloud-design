import{r as e,a8 as t,B as r,L as n,d as o,a5 as l}from"./index.672a70f3.js";import{q as s}from"./styled-components.browser.esm.f3e9ec77.js";const a=[["Step 1","Open the refrigerator door"],["Step 2","Put the elephant in the refrigerator"],["Step 3","Close the refrigerator door"]].map(((r,n)=>e.exports.createElement(t.Item,{"aria-current":1===n?"step":null,key:n,title:r[0],content:r[1]})));const c=s.div``;var i=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const r=e.exports.createElement("div",null,e.exports.createElement("h3",null,"Arrow"),e.exports.createElement(t,{current:1,shape:"arrow"},a),e.exports.createElement("h3",null,"Circle"),e.exports.createElement(t,{current:1,stretch:!0,shape:"circle"},a),e.exports.createElement("h3",null,"Circle(Horizontal content)"),e.exports.createElement(t,{current:1,stretch:!0,shape:"circle",labelPlacement:"hoz"},a),e.exports.createElement("h3",null,"Dot"),e.exports.createElement(t,{current:1,stretch:!0,shape:"dot"},a),e.exports.createElement("h3",null,"Stretch"),e.exports.createElement(t,{current:1,stretch:!0,shape:"dot",labelPlacement:"ver"},e.exports.createElement(t.Item,{title:"步骤1"}),e.exports.createElement(t.Item,{title:"步骤2"}),e.exports.createElement(t.Item,{title:"步骤3"})));return e.exports.createElement(c,null,r)}});const p=t.Item,m=r.Group,u={1:function(t){return e.exports.createElement("div",{className:"custom-node1"},e.exports.createElement("span",null,t+1))},2:function(t,r){return e.exports.createElement("div",{className:"custom-node2"},"finish"===r?e.exports.createElement(o,{type:"success"}):e.exports.createElement("span",null,t+1)," ")}},d=["Description1","Description2 --- Very Looooooooooooooooooooooog content","Description3"];class x extends e.exports.Component{constructor(e){super(e),this.state={currentStep:1,stepType:"circle",stepAnimation:!0,labelPlacement:"ver"},this.onClick=this.onClick.bind(this)}next(){const e=this.state.currentStep+1;this.setState({currentStep:e>6?6:e})}prev(){const e=this.state.currentStep-1;this.setState({currentStep:e<0?0:e})}onClick(e){console.log(e),this.setState({currentStep:e})}onStepTypeChange(e){this.setState({stepType:e})}onStepAnimation(e){this.setState({stepAnimation:e})}onLabelPlacementChange(e){this.setState({labelPlacement:e})}onItemRenderChange(e){this.setState({itemRender:u[e],content:d[e]})}render(){const{currentStep:o}=this.state;return e.exports.createElement("div",null,e.exports.createElement("div",{className:"custom-step-option"},e.exports.createElement(n,{innerBefore:"shape:",placeholder:"Choose the dispaly type",onChange:this.onStepTypeChange.bind(this),className:"custom-select",defaultValue:"circle"},["circle","arrow","dot"].map((t=>e.exports.createElement(n.Option,{value:t,key:t},t)))),e.exports.createElement(n,{innerBefore:"labelPlacement:",placeholder:"Label placement",onChange:this.onLabelPlacementChange.bind(this),className:"custom-select",defaultValue:"hoz"},["hoz","ver"].map((t=>e.exports.createElement(n.Option,{value:t,key:t},t)))),e.exports.createElement(n,{innerBefore:"animation:",placeholder:"Enable animation",onChange:this.onStepAnimation.bind(this),className:"custom-select",defaultValue:!0},[!0,!1].map(((t,r)=>e.exports.createElement(n.Option,{value:t,key:r},t?"on":"off")))),e.exports.createElement(n,{innerBefore:"render:",placeholder:"Choose itemRender",onChange:this.onItemRenderChange.bind(this),className:"custom-select",defaultValue:0},["ItemRender","ItemRender1","ItemRender2"].map(((t,r)=>e.exports.createElement(n.Option,{value:r,key:r},t))))),e.exports.createElement(t,{itemRender:this.state.itemRender,current:o,shape:this.state.stepType,animation:this.state.stepAnimation,labelPlacement:this.state.labelPlacement},e.exports.createElement(p,{title:"Step 1",onClick:this.onClick,content:"Description"}),e.exports.createElement(p,{title:"Step 2",onClick:this.onClick,content:"Description"}),e.exports.createElement(p,{title:"Step 3",onClick:this.onClick,content:this.state.content||"Description1"}),e.exports.createElement(p,{title:"Step 4",onClick:this.onClick,content:"Description"}),e.exports.createElement(p,{title:"Step 5",onClick:this.onClick,content:"Description"}),e.exports.createElement(p,{title:"Step 6",onClick:this.onClick,content:"Description"})),e.exports.createElement("div",{className:"steps-content"},d[o]),e.exports.createElement("br",null),e.exports.createElement("br",null),e.exports.createElement(m,null,e.exports.createElement(r,{onClick:this.prev.bind(this),type:"primary",disabled:0===o},"Backward"),e.exports.createElement(r,{onClick:this.next.bind(this),type:"primary",disabled:5===o},"Forward")))}}const h=s.div`
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
  .steps-content {
    margin-top: 16px;
    border: 1px dashed #e9e9e9;
    border-radius: 2px;
    background-color: #fafafa;
    min-height: 200px;
    text-align: center;
    padding-top: 80px;
  }
`;var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(x,null);return e.exports.createElement(h,null,t)}});const f=["one","two","three","four"];function b(t){return e.exports.createElement("div",{className:"custom-node1"},e.exports.createElement("span",null,t+1))}function S(t,r){return e.exports.createElement("div",{className:"custom-node2"},"finish"===r?e.exports.createElement(o,{type:"success"}):e.exports.createElement("span",null,t+1)," ")}const g=s.div`
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
`;var v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const r=e.exports.createElement("div",{className:"fusion-demo"},e.exports.createElement("div",{className:"fusion-demo-item"},e.exports.createElement(t,{current:2,animation:!1,itemRender:b},f.map((r=>e.exports.createElement(t.Item,{key:r,title:r}))))),e.exports.createElement("div",{className:"fusion-demo-item"},e.exports.createElement(t,{current:2,animation:!1,itemRender:S},f.map((r=>e.exports.createElement(t.Item,{key:r,title:r}))))));return e.exports.createElement(g,null,r)}});const C=()=>{const[t,n]=e.exports.useState([]);return e.exports.createElement("div",null,t&&t.length>0&&t.map(((t,r)=>e.exports.createElement("div",{key:`step-content-${r}`,style:{width:"100%",maxWidth:200,height:20,background:"#2196f3",margin:"10px 0"}}))),e.exports.createElement(r,{onClick:()=>{const e=[...t,{type:"null",fieldName:"null"}];n(e)}},"add new div"))},k=()=>{e.exports.useState([]);const[r,n]=e.exports.useState("ver");return console.log("direction: ",r),e.exports.createElement("div",null,e.exports.createElement(l.Group,{style:{padding:30},shape:"button",value:r,onChange:n},e.exports.createElement(l,{value:"hoz"},"hoz"),e.exports.createElement(l,{value:"ver"},"ver")),e.exports.createElement(t,{current:1,direction:r,stretch:!0,animation:!0,style:{marginTop:30}},e.exports.createElement(t.Item,{title:"What would youlike to test?",content:"test"}),e.exports.createElement(t.Item,{title:"What would youlike to test?",content:e.exports.createElement(C,null)}),e.exports.createElement(t.Item,{title:"A bit more on the background",content:"test"})))};const y=s.div``;var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(k,null);return e.exports.createElement(y,null,t)}});const I=s.div``;var w=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const r=e.exports.createElement("div",null,e.exports.createElement(t,{current:1,shape:"arrow"},e.exports.createElement(t.Item,{title:"Step 1"}),e.exports.createElement(t.Item,{title:"Step 2"}),e.exports.createElement(t.Item,{title:"Step 3",disabled:!0}),e.exports.createElement(t.Item,{title:"Step 4"})),e.exports.createElement("br",null),e.exports.createElement("br",null),e.exports.createElement(t,{current:1,shape:"dot"},e.exports.createElement(t.Item,{title:"Step 1"}),e.exports.createElement(t.Item,{title:"Step 2"}),e.exports.createElement(t.Item,{title:"Step 3",disabled:!0}),e.exports.createElement(t.Item,{title:"Step 4"})),e.exports.createElement("br",null),e.exports.createElement("br",null),e.exports.createElement(t,{current:1,shape:"circle"},e.exports.createElement(t.Item,{title:"Step 1"}),e.exports.createElement(t.Item,{title:"Step 2"}),e.exports.createElement(t.Item,{title:"Step 3",disabled:!0}),e.exports.createElement(t.Item,{title:"Step 4"})));return e.exports.createElement(I,null,r)}});const z=s.div``;var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const r=e.exports.createElement("div",null,e.exports.createElement(t,{current:1,animation:!1,shape:"dot"},e.exports.createElement(t.Item,{title:"Step 1",content:"Open the refrigerator door",icon:"calendar"}),e.exports.createElement(t.Item,{title:"Step 2",content:"Put the elephant in the refrigerator",percent:40}),e.exports.createElement(t.Item,{title:"Step 3",content:"Close the refrigerator door",icon:"smile"})),e.exports.createElement("br",null),e.exports.createElement("br",null),e.exports.createElement(t,{current:1,animation:!1},e.exports.createElement(t.Item,{title:"Step 1",content:"Open the refrigerator door",icon:"calendar"}),e.exports.createElement(t.Item,{title:"Step 2",content:"Put the elephant in the refrigerator",percent:40}),e.exports.createElement(t.Item,{title:"Step 3",content:"Close the refrigerator door",icon:"smile"})));return e.exports.createElement(z,null,r)}});const N=t.Item,T=r.Group;class P extends e.exports.Component{constructor(e){super(e),this.state={currentStep:3}}next(){const e=this.state.currentStep+1;this.setState({currentStep:e>6?6:e})}prev(){const e=this.state.currentStep-1;this.setState({currentStep:e<0?0:e})}onClick(e){console.log(e),this.setState({currentStep:e})}render(){const{currentStep:n}=this.state;return e.exports.createElement("div",null,e.exports.createElement(t,{current:n,readOnly:!0},e.exports.createElement(N,{title:"Step 1",onClick:this.onClick.bind(this)}),e.exports.createElement(N,{title:"Step 2",onClick:this.onClick.bind(this)}),e.exports.createElement(N,{title:"Step 3",onClick:this.onClick.bind(this)}),e.exports.createElement(N,{title:"Step 4",onClick:this.onClick.bind(this)}),e.exports.createElement(N,{title:"Step 5",onClick:this.onClick.bind(this)}),e.exports.createElement(N,{title:"Step 6",onClick:this.onClick.bind(this)})),e.exports.createElement("br",null),e.exports.createElement("br",null),e.exports.createElement(T,null,e.exports.createElement(r,{onClick:this.prev.bind(this),type:"primary",disabled:0===n},"Backward"),e.exports.createElement(r,{onClick:this.next.bind(this),type:"primary",disabled:6===n},"Forward")))}}const R=s.div``;var j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(P,null);return e.exports.createElement(R,null,t)}});const D=s.div``;var M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const r=e.exports.createElement("div",null,e.exports.createElement(t,{current:1},e.exports.createElement(t.Item,{title:"Step 1"}),e.exports.createElement(t.Item,{title:e.exports.createElement("span",{style:{color:"red"}},"In Progress"),content:e.exports.createElement("span",{style:{color:"red"}},"download image failed"),itemRender:(t,r)=>e.exports.createElement("div",null,e.exports.createElement(o,{type:"error",size:"xl",style:{color:"#FF3333"}}))}),e.exports.createElement(t.Item,{title:"Step 3"}),e.exports.createElement(t.Item,{title:"Step 4"})));return e.exports.createElement(D,null,r)}});const A={};A._basic=i,A._controlled=E,A["_custom-step-item"]=v,A._direction=_,A._disable=w,A._percent=O,A["_read-only"]=j,A["_step-process-failed"]=M;export default A;
