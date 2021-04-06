import{r as e,ao as t,G as n,B as r,v as l,b as a}from"./index.26e635a6.js";import{q as o}from"./styled-components.browser.esm.08d92d51.js";const c=[["Step 1","Open the refrigerator door"],["Step 2","Put the elephant in the refrigerator"],["Step 3","Close the refrigerator door"]].map(((n,r)=>e.createElement(t.Item,{"aria-current":1===r?"step":null,key:r,title:n[0],content:n[1]})));const i=o.div``;var s=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement("h3",null,"Arrow"),e.createElement(t,{current:1,shape:"arrow"},c),e.createElement("h3",null,"Circle"),e.createElement(t,{current:1,stretch:!0,shape:"circle"},c),e.createElement("h3",null,"Circle(Horizontal content)"),e.createElement(t,{current:1,stretch:!0,shape:"circle",labelPlacement:"hoz"},c),e.createElement("h3",null,"Dot"),e.createElement(t,{current:1,stretch:!0,shape:"dot"},c),e.createElement("h3",null,"Stretch"),e.createElement(t,{current:1,stretch:!0,shape:"dot",labelPlacement:"ver"},e.createElement(t.Item,{title:"步骤1"}),e.createElement(t.Item,{title:"步骤2"}),e.createElement(t.Item,{title:"步骤3"})));return e.createElement(i,null,n)}});const m=()=>{const[t,n]=e.useState([]);return e.createElement("div",null,t&&t.length>0&&t.map(((t,n)=>e.createElement("div",{key:`step-content-${n}`,style:{width:"100%",maxWidth:200,height:20,background:"#2196f3",margin:"10px 0"}}))),e.createElement(r,{onClick:()=>{const e=[...t,{type:"null",fieldName:"null"}];n(e)}},"add new div"))},u=()=>{const[r,l]=e.useState([]),[a,o]=e.useState("ver");return console.log("direction: ",a),e.createElement("div",null,e.createElement(n.Group,{style:{padding:30},shape:"button",value:a,onChange:o},e.createElement(n,{value:"hoz"},"hoz"),e.createElement(n,{value:"ver"},"ver")),e.createElement(t,{current:1,direction:a,stretch:!0,animation:!0,style:{marginTop:30}},e.createElement(t.Item,{title:"What would youlike to test?",content:"test"}),e.createElement(t.Item,{title:"What would youlike to test?",content:e.createElement(m,null)}),e.createElement(t.Item,{title:"A bit more on the background",content:"test"})))};const p=o.div``;var d=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(u,null);return e.createElement(p,null,t)}});const h=t.Item,E=r.Group,f={1:function(t){return e.createElement("div",{className:"custom-node1"},e.createElement("span",null,t+1))},2:function(t,n){return e.createElement("div",{className:"custom-node2"},"finish"===n?e.createElement(a,{type:"success"}):e.createElement("span",null,t+1)," ")}},b=["Description1","Description2 --- Very Looooooooooooooooooooooog content","Description3"];class S extends e.Component{constructor(e){super(e),this.state={currentStep:1,stepType:"circle",stepAnimation:!0,labelPlacement:"ver"},this.onClick=this.onClick.bind(this)}next(){const e=this.state.currentStep+1;this.setState({currentStep:e>6?6:e})}prev(){const e=this.state.currentStep-1;this.setState({currentStep:e<0?0:e})}onClick(e){console.log(e),this.setState({currentStep:e})}onStepTypeChange(e){this.setState({stepType:e})}onStepAnimation(e){this.setState({stepAnimation:e})}onLabelPlacementChange(e){this.setState({labelPlacement:e})}onItemRenderChange(e){this.setState({itemRender:f[e],content:b[e]})}render(){const{currentStep:n}=this.state;return e.createElement("div",null,e.createElement("div",{className:"custom-step-option"},e.createElement(l,{innerBefore:"shape:",placeholder:"Choose the dispaly type",onChange:this.onStepTypeChange.bind(this),className:"custom-select",defaultValue:"circle"},["circle","arrow","dot"].map((t=>e.createElement(l.Option,{value:t,key:t},t)))),e.createElement(l,{innerBefore:"labelPlacement:",placeholder:"Label placement",onChange:this.onLabelPlacementChange.bind(this),className:"custom-select",defaultValue:"hoz"},["hoz","ver"].map((t=>e.createElement(l.Option,{value:t,key:t},t)))),e.createElement(l,{innerBefore:"animation:",placeholder:"Enable animation",onChange:this.onStepAnimation.bind(this),className:"custom-select",defaultValue:!0},[!0,!1].map(((t,n)=>e.createElement(l.Option,{value:t,key:n},t?"on":"off")))),e.createElement(l,{innerBefore:"render:",placeholder:"Choose itemRender",onChange:this.onItemRenderChange.bind(this),className:"custom-select",defaultValue:0},["ItemRender","ItemRender1","ItemRender2"].map(((t,n)=>e.createElement(l.Option,{value:n,key:n},t))))),e.createElement(t,{itemRender:this.state.itemRender,current:n,shape:this.state.stepType,animation:this.state.stepAnimation,labelPlacement:this.state.labelPlacement},e.createElement(h,{title:"Step 1",onClick:this.onClick,content:"Description"}),e.createElement(h,{title:"Step 2",onClick:this.onClick,content:"Description"}),e.createElement(h,{title:"Step 3",onClick:this.onClick,content:this.state.content||"Description1"}),e.createElement(h,{title:"Step 4",onClick:this.onClick,content:"Description"}),e.createElement(h,{title:"Step 5",onClick:this.onClick,content:"Description"}),e.createElement(h,{title:"Step 6",onClick:this.onClick,content:"Description"})),e.createElement("div",{className:"steps-content"},b[n]),e.createElement("br",null),e.createElement("br",null),e.createElement(E,null,e.createElement(r,{onClick:this.prev.bind(this),type:"primary",disabled:0===n},"Backward"),e.createElement(r,{onClick:this.next.bind(this),type:"primary",disabled:5===n},"Forward")))}}const g=o.div`
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
`;var v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(S,null);return e.createElement(g,null,t)}});const C=["one","two","three","four"];function k(t){return e.createElement("div",{className:"custom-node1"},e.createElement("span",null,t+1))}function y(t,n){return e.createElement("div",{className:"custom-node2"},"finish"===n?e.createElement(a,{type:"success"}):e.createElement("span",null,t+1)," ")}const _=o.div`
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
`;var I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",{className:"fusion-demo"},e.createElement("div",{className:"fusion-demo-item"},e.createElement(t,{current:2,animation:!1,itemRender:k},C.map((n=>e.createElement(t.Item,{key:n,title:n}))))),e.createElement("div",{className:"fusion-demo-item"},e.createElement(t,{current:2,animation:!1,itemRender:y},C.map((n=>e.createElement(t.Item,{key:n,title:n}))))));return e.createElement(_,null,n)}});const x=t.Item,w=r.Group;class z extends e.Component{constructor(e){super(e),this.state={currentStep:3}}next(){const e=this.state.currentStep+1;this.setState({currentStep:e>6?6:e})}prev(){const e=this.state.currentStep-1;this.setState({currentStep:e<0?0:e})}onClick(e){console.log(e),this.setState({currentStep:e})}render(){const{currentStep:n}=this.state;return e.createElement("div",null,e.createElement(t,{current:n,readOnly:!0},e.createElement(x,{title:"Step 1",onClick:this.onClick.bind(this)}),e.createElement(x,{title:"Step 2",onClick:this.onClick.bind(this)}),e.createElement(x,{title:"Step 3",onClick:this.onClick.bind(this)}),e.createElement(x,{title:"Step 4",onClick:this.onClick.bind(this)}),e.createElement(x,{title:"Step 5",onClick:this.onClick.bind(this)}),e.createElement(x,{title:"Step 6",onClick:this.onClick.bind(this)})),e.createElement("br",null),e.createElement("br",null),e.createElement(w,null,e.createElement(r,{onClick:this.prev.bind(this),type:"primary",disabled:0===n},"Backward"),e.createElement(r,{onClick:this.next.bind(this),type:"primary",disabled:6===n},"Forward")))}}const O=o.div``;var N=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(z,null);return e.createElement(O,null,t)}});const T=o.div``;var P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{current:1,shape:"arrow"},e.createElement(t.Item,{title:"Step 1"}),e.createElement(t.Item,{title:"Step 2"}),e.createElement(t.Item,{title:"Step 3",disabled:!0}),e.createElement(t.Item,{title:"Step 4"})),e.createElement("br",null),e.createElement("br",null),e.createElement(t,{current:1,shape:"dot"},e.createElement(t.Item,{title:"Step 1"}),e.createElement(t.Item,{title:"Step 2"}),e.createElement(t.Item,{title:"Step 3",disabled:!0}),e.createElement(t.Item,{title:"Step 4"})),e.createElement("br",null),e.createElement("br",null),e.createElement(t,{current:1,shape:"circle"},e.createElement(t.Item,{title:"Step 1"}),e.createElement(t.Item,{title:"Step 2"}),e.createElement(t.Item,{title:"Step 3",disabled:!0}),e.createElement(t.Item,{title:"Step 4"})));return e.createElement(T,null,n)}});const R=o.div``;var j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{current:1,animation:!1,shape:"dot"},e.createElement(t.Item,{title:"Step 1",content:"Open the refrigerator door",icon:"calendar"}),e.createElement(t.Item,{title:"Step 2",content:"Put the elephant in the refrigerator",percent:40}),e.createElement(t.Item,{title:"Step 3",content:"Close the refrigerator door",icon:"smile"})),e.createElement("br",null),e.createElement("br",null),e.createElement(t,{current:1,animation:!1},e.createElement(t.Item,{title:"Step 1",content:"Open the refrigerator door",icon:"calendar"}),e.createElement(t.Item,{title:"Step 2",content:"Put the elephant in the refrigerator",percent:40}),e.createElement(t.Item,{title:"Step 3",content:"Close the refrigerator door",icon:"smile"})));return e.createElement(R,null,n)}});const D=o.div``;var M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{current:1},e.createElement(t.Item,{title:"Step 1"}),e.createElement(t.Item,{title:e.createElement("span",{style:{color:"red"}},"In Progress"),content:e.createElement("span",{style:{color:"red"}},"download image failed"),itemRender:(t,n)=>e.createElement("div",null,e.createElement(a,{type:"error",size:"xl",style:{color:"#FF3333"}}))}),e.createElement(t.Item,{title:"Step 3"}),e.createElement(t.Item,{title:"Step 4"})));return e.createElement(D,null,n)}});const A={};A._basic=s,A._direction=d,A._controlled=v,A["_custom-step-item"]=I,A["_read-only"]=N,A._disable=P,A._percent=j,A["_step-process-failed"]=M;export default A;
