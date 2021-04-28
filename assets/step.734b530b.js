import{r as e,at as t,B as n,S as r,b as l,J as a}from"./index.db891132.js";import{q as o}from"./styled-components.browser.esm.2d3384e1.js";const c=[["Step 1","Open the refrigerator door"],["Step 2","Put the elephant in the refrigerator"],["Step 3","Close the refrigerator door"]].map(((n,r)=>e.createElement(t.Item,{"aria-current":1===r?"step":null,key:r,title:n[0],content:n[1]})));const i=o.div``;var s=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement("h3",null,"Arrow"),e.createElement(t,{current:1,shape:"arrow"},c),e.createElement("h3",null,"Circle"),e.createElement(t,{current:1,stretch:!0,shape:"circle"},c),e.createElement("h3",null,"Circle(Horizontal content)"),e.createElement(t,{current:1,stretch:!0,shape:"circle",labelPlacement:"hoz"},c),e.createElement("h3",null,"Dot"),e.createElement(t,{current:1,stretch:!0,shape:"dot"},c),e.createElement("h3",null,"Stretch"),e.createElement(t,{current:1,stretch:!0,shape:"dot",labelPlacement:"ver"},e.createElement(t.Item,{title:"步骤1"}),e.createElement(t.Item,{title:"步骤2"}),e.createElement(t.Item,{title:"步骤3"})));return e.createElement(i,null,n)}});const m=t.Item,u=n.Group,p={1:function(t){return e.createElement("div",{className:"custom-node1"},e.createElement("span",null,t+1))},2:function(t,n){return e.createElement("div",{className:"custom-node2"},"finish"===n?e.createElement(l,{type:"success"}):e.createElement("span",null,t+1)," ")}},d=["Description1","Description2 --- Very Looooooooooooooooooooooog content","Description3"];class h extends e.Component{constructor(e){super(e),this.state={currentStep:1,stepType:"circle",stepAnimation:!0,labelPlacement:"ver"},this.onClick=this.onClick.bind(this)}next(){const e=this.state.currentStep+1;this.setState({currentStep:e>6?6:e})}prev(){const e=this.state.currentStep-1;this.setState({currentStep:e<0?0:e})}onClick(e){console.log(e),this.setState({currentStep:e})}onStepTypeChange(e){this.setState({stepType:e})}onStepAnimation(e){this.setState({stepAnimation:e})}onLabelPlacementChange(e){this.setState({labelPlacement:e})}onItemRenderChange(e){this.setState({itemRender:p[e],content:d[e]})}render(){const{currentStep:l}=this.state;return e.createElement("div",null,e.createElement("div",{className:"custom-step-option"},e.createElement(r,{innerBefore:"shape:",placeholder:"Choose the dispaly type",onChange:this.onStepTypeChange.bind(this),className:"custom-select",defaultValue:"circle"},["circle","arrow","dot"].map((t=>e.createElement(r.Option,{value:t,key:t},t)))),e.createElement(r,{innerBefore:"labelPlacement:",placeholder:"Label placement",onChange:this.onLabelPlacementChange.bind(this),className:"custom-select",defaultValue:"hoz"},["hoz","ver"].map((t=>e.createElement(r.Option,{value:t,key:t},t)))),e.createElement(r,{innerBefore:"animation:",placeholder:"Enable animation",onChange:this.onStepAnimation.bind(this),className:"custom-select",defaultValue:!0},[!0,!1].map(((t,n)=>e.createElement(r.Option,{value:t,key:n},t?"on":"off")))),e.createElement(r,{innerBefore:"render:",placeholder:"Choose itemRender",onChange:this.onItemRenderChange.bind(this),className:"custom-select",defaultValue:0},["ItemRender","ItemRender1","ItemRender2"].map(((t,n)=>e.createElement(r.Option,{value:n,key:n},t))))),e.createElement(t,{itemRender:this.state.itemRender,current:l,shape:this.state.stepType,animation:this.state.stepAnimation,labelPlacement:this.state.labelPlacement},e.createElement(m,{title:"Step 1",onClick:this.onClick,content:"Description"}),e.createElement(m,{title:"Step 2",onClick:this.onClick,content:"Description"}),e.createElement(m,{title:"Step 3",onClick:this.onClick,content:this.state.content||"Description1"}),e.createElement(m,{title:"Step 4",onClick:this.onClick,content:"Description"}),e.createElement(m,{title:"Step 5",onClick:this.onClick,content:"Description"}),e.createElement(m,{title:"Step 6",onClick:this.onClick,content:"Description"})),e.createElement("div",{className:"steps-content"},d[l]),e.createElement("br",null),e.createElement("br",null),e.createElement(u,null,e.createElement(n,{onClick:this.prev.bind(this),type:"primary",disabled:0===l},"Backward"),e.createElement(n,{onClick:this.next.bind(this),type:"primary",disabled:5===l},"Forward")))}}const E=o.div`
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
`;var f=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(h,null);return e.createElement(E,null,t)}});const b=["one","two","three","four"];function S(t){return e.createElement("div",{className:"custom-node1"},e.createElement("span",null,t+1))}function g(t,n){return e.createElement("div",{className:"custom-node2"},"finish"===n?e.createElement(l,{type:"success"}):e.createElement("span",null,t+1)," ")}const v=o.div`
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
`;var C=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",{className:"fusion-demo"},e.createElement("div",{className:"fusion-demo-item"},e.createElement(t,{current:2,animation:!1,itemRender:S},b.map((n=>e.createElement(t.Item,{key:n,title:n}))))),e.createElement("div",{className:"fusion-demo-item"},e.createElement(t,{current:2,animation:!1,itemRender:g},b.map((n=>e.createElement(t.Item,{key:n,title:n}))))));return e.createElement(v,null,n)}});const k=()=>{const[t,r]=e.useState([]);return e.createElement("div",null,t&&t.length>0&&t.map(((t,n)=>e.createElement("div",{key:`step-content-${n}`,style:{width:"100%",maxWidth:200,height:20,background:"#2196f3",margin:"10px 0"}}))),e.createElement(n,{onClick:()=>{const e=[...t,{type:"null",fieldName:"null"}];r(e)}},"add new div"))},y=()=>{const[n,r]=e.useState([]),[l,o]=e.useState("ver");return console.log("direction: ",l),e.createElement("div",null,e.createElement(a.Group,{style:{padding:30},shape:"button",value:l,onChange:o},e.createElement(a,{value:"hoz"},"hoz"),e.createElement(a,{value:"ver"},"ver")),e.createElement(t,{current:1,direction:l,stretch:!0,animation:!0,style:{marginTop:30}},e.createElement(t.Item,{title:"What would youlike to test?",content:"test"}),e.createElement(t.Item,{title:"What would youlike to test?",content:e.createElement(k,null)}),e.createElement(t.Item,{title:"A bit more on the background",content:"test"})))};const _=o.div``;var I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(y,null);return e.createElement(_,null,t)}});const x=o.div``;var w=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{current:1,shape:"arrow"},e.createElement(t.Item,{title:"Step 1"}),e.createElement(t.Item,{title:"Step 2"}),e.createElement(t.Item,{title:"Step 3",disabled:!0}),e.createElement(t.Item,{title:"Step 4"})),e.createElement("br",null),e.createElement("br",null),e.createElement(t,{current:1,shape:"dot"},e.createElement(t.Item,{title:"Step 1"}),e.createElement(t.Item,{title:"Step 2"}),e.createElement(t.Item,{title:"Step 3",disabled:!0}),e.createElement(t.Item,{title:"Step 4"})),e.createElement("br",null),e.createElement("br",null),e.createElement(t,{current:1,shape:"circle"},e.createElement(t.Item,{title:"Step 1"}),e.createElement(t.Item,{title:"Step 2"}),e.createElement(t.Item,{title:"Step 3",disabled:!0}),e.createElement(t.Item,{title:"Step 4"})));return e.createElement(x,null,n)}});const z=o.div``;var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{current:1},e.createElement(t.Item,{title:"Step 1"}),e.createElement(t.Item,{title:e.createElement("span",{style:{color:"red"}},"In Progress"),content:e.createElement("span",{style:{color:"red"}},"download image failed"),itemRender:(t,n)=>e.createElement("div",null,e.createElement(l,{type:"error",size:"xl",style:{color:"#FF3333"}}))}),e.createElement(t.Item,{title:"Step 3"}),e.createElement(t.Item,{title:"Step 4"})));return e.createElement(z,null,n)}});const N=t.Item,T=n.Group;class P extends e.Component{constructor(e){super(e),this.state={currentStep:3}}next(){const e=this.state.currentStep+1;this.setState({currentStep:e>6?6:e})}prev(){const e=this.state.currentStep-1;this.setState({currentStep:e<0?0:e})}onClick(e){console.log(e),this.setState({currentStep:e})}render(){const{currentStep:r}=this.state;return e.createElement("div",null,e.createElement(t,{current:r,readOnly:!0},e.createElement(N,{title:"Step 1",onClick:this.onClick.bind(this)}),e.createElement(N,{title:"Step 2",onClick:this.onClick.bind(this)}),e.createElement(N,{title:"Step 3",onClick:this.onClick.bind(this)}),e.createElement(N,{title:"Step 4",onClick:this.onClick.bind(this)}),e.createElement(N,{title:"Step 5",onClick:this.onClick.bind(this)}),e.createElement(N,{title:"Step 6",onClick:this.onClick.bind(this)})),e.createElement("br",null),e.createElement("br",null),e.createElement(T,null,e.createElement(n,{onClick:this.prev.bind(this),type:"primary",disabled:0===r},"Backward"),e.createElement(n,{onClick:this.next.bind(this),type:"primary",disabled:6===r},"Forward")))}}const R=o.div``;var j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(P,null);return e.createElement(R,null,t)}});const D=o.div``;var M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{current:1,animation:!1,shape:"dot"},e.createElement(t.Item,{title:"Step 1",content:"Open the refrigerator door",icon:"calendar"}),e.createElement(t.Item,{title:"Step 2",content:"Put the elephant in the refrigerator",percent:40}),e.createElement(t.Item,{title:"Step 3",content:"Close the refrigerator door",icon:"smile"})),e.createElement("br",null),e.createElement("br",null),e.createElement(t,{current:1,animation:!1},e.createElement(t.Item,{title:"Step 1",content:"Open the refrigerator door",icon:"calendar"}),e.createElement(t.Item,{title:"Step 2",content:"Put the elephant in the refrigerator",percent:40}),e.createElement(t.Item,{title:"Step 3",content:"Close the refrigerator door",icon:"smile"})));return e.createElement(D,null,n)}});const A={};A._basic=s,A._controlled=f,A["_custom-step-item"]=C,A._direction=I,A._disable=w,A["_step-process-failed"]=O,A["_read-only"]=j,A._percent=M;export default A;
