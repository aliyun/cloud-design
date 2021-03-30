import{ao as e,B as t,r as n,t as r,b as l,E as a}from"./index.4543a34a.js";import{q as o}from"./styled-components.browser.esm.09d3b94c.js";const c=e.Item,i=t.Group,s={1:function(e){return n.createElement("div",{className:"custom-node1"},n.createElement("span",null,e+1))},2:function(e,t){return n.createElement("div",{className:"custom-node2"},"finish"===t?n.createElement(l,{type:"success"}):n.createElement("span",null,e+1)," ")}},m=["Description1","Description2 --- Very Looooooooooooooooooooooog content","Description3"];class u extends n.Component{constructor(e){super(e),this.state={currentStep:1,stepType:"circle",stepAnimation:!0,labelPlacement:"ver"},this.onClick=this.onClick.bind(this)}next(){const e=this.state.currentStep+1;this.setState({currentStep:e>6?6:e})}prev(){const e=this.state.currentStep-1;this.setState({currentStep:e<0?0:e})}onClick(e){console.log(e),this.setState({currentStep:e})}onStepTypeChange(e){this.setState({stepType:e})}onStepAnimation(e){this.setState({stepAnimation:e})}onLabelPlacementChange(e){this.setState({labelPlacement:e})}onItemRenderChange(e){this.setState({itemRender:s[e],content:m[e]})}render(){const{currentStep:l}=this.state;return n.createElement("div",null,n.createElement("div",{className:"custom-step-option"},n.createElement(r,{innerBefore:"shape:",placeholder:"Choose the dispaly type",onChange:this.onStepTypeChange.bind(this),className:"custom-select",defaultValue:"circle"},["circle","arrow","dot"].map((e=>n.createElement(r.Option,{value:e,key:e},e)))),n.createElement(r,{innerBefore:"labelPlacement:",placeholder:"Label placement",onChange:this.onLabelPlacementChange.bind(this),className:"custom-select",defaultValue:"hoz"},["hoz","ver"].map((e=>n.createElement(r.Option,{value:e,key:e},e)))),n.createElement(r,{innerBefore:"animation:",placeholder:"Enable animation",onChange:this.onStepAnimation.bind(this),className:"custom-select",defaultValue:!0},[!0,!1].map(((e,t)=>n.createElement(r.Option,{value:e,key:t},e?"on":"off")))),n.createElement(r,{innerBefore:"render:",placeholder:"Choose itemRender",onChange:this.onItemRenderChange.bind(this),className:"custom-select",defaultValue:0},["ItemRender","ItemRender1","ItemRender2"].map(((e,t)=>n.createElement(r.Option,{value:t,key:t},e))))),n.createElement(e,{itemRender:this.state.itemRender,current:l,shape:this.state.stepType,animation:this.state.stepAnimation,labelPlacement:this.state.labelPlacement},n.createElement(c,{title:"Step 1",onClick:this.onClick,content:"Description"}),n.createElement(c,{title:"Step 2",onClick:this.onClick,content:"Description"}),n.createElement(c,{title:"Step 3",onClick:this.onClick,content:this.state.content||"Description1"}),n.createElement(c,{title:"Step 4",onClick:this.onClick,content:"Description"}),n.createElement(c,{title:"Step 5",onClick:this.onClick,content:"Description"}),n.createElement(c,{title:"Step 6",onClick:this.onClick,content:"Description"})),n.createElement("div",{className:"steps-content"},m[l]),n.createElement("br",null),n.createElement("br",null),n.createElement(i,null,n.createElement(t,{onClick:this.prev.bind(this),type:"primary",disabled:0===l},"Backward"),n.createElement(t,{onClick:this.next.bind(this),type:"primary",disabled:5===l},"Forward")))}}const p=o.div`
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
`;var d=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=n.createElement(u,null);return n.createElement(p,null,e)}});const h=[["Step 1","Open the refrigerator door"],["Step 2","Put the elephant in the refrigerator"],["Step 3","Close the refrigerator door"]].map(((t,r)=>n.createElement(e.Item,{"aria-current":1===r?"step":null,key:r,title:t[0],content:t[1]})));const E=o.div``;var f=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=n.createElement("div",null,n.createElement("h3",null,"Arrow"),n.createElement(e,{current:1,shape:"arrow"},h),n.createElement("h3",null,"Circle"),n.createElement(e,{current:1,stretch:!0,shape:"circle"},h),n.createElement("h3",null,"Circle(Horizontal content)"),n.createElement(e,{current:1,stretch:!0,shape:"circle",labelPlacement:"hoz"},h),n.createElement("h3",null,"Dot"),n.createElement(e,{current:1,stretch:!0,shape:"dot"},h),n.createElement("h3",null,"Stretch"),n.createElement(e,{current:1,stretch:!0,shape:"dot",labelPlacement:"ver"},n.createElement(e.Item,{title:"步骤1"}),n.createElement(e.Item,{title:"步骤2"}),n.createElement(e.Item,{title:"步骤3"})));return n.createElement(E,null,t)}});const b=()=>{const[e,r]=n.useState([]);return n.createElement("div",null,e&&e.length>0&&e.map(((e,t)=>n.createElement("div",{key:`step-content-${t}`,style:{width:"100%",maxWidth:200,height:20,background:"#2196f3",margin:"10px 0"}}))),n.createElement(t,{onClick:()=>{const t=[...e,{type:"null",fieldName:"null"}];r(t)}},"add new div"))},S=()=>{const[t,r]=n.useState([]),[l,o]=n.useState("ver");return console.log("direction: ",l),n.createElement("div",null,n.createElement(a.Group,{style:{padding:30},shape:"button",value:l,onChange:o},n.createElement(a,{value:"hoz"},"hoz"),n.createElement(a,{value:"ver"},"ver")),n.createElement(e,{current:1,direction:l,stretch:!0,animation:!0,style:{marginTop:30}},n.createElement(e.Item,{title:"What would youlike to test?",content:"test"}),n.createElement(e.Item,{title:"What would youlike to test?",content:n.createElement(b,null)}),n.createElement(e.Item,{title:"A bit more on the background",content:"test"})))};const g=o.div``;var v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=n.createElement(S,null);return n.createElement(g,null,e)}});const C=["one","two","three","four"];function k(e){return n.createElement("div",{className:"custom-node1"},n.createElement("span",null,e+1))}function y(e,t){return n.createElement("div",{className:"custom-node2"},"finish"===t?n.createElement(l,{type:"success"}):n.createElement("span",null,e+1)," ")}const _=o.div`
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
`;var I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=n.createElement("div",{className:"fusion-demo"},n.createElement("div",{className:"fusion-demo-item"},n.createElement(e,{current:2,animation:!1,itemRender:k},C.map((t=>n.createElement(e.Item,{key:t,title:t}))))),n.createElement("div",{className:"fusion-demo-item"},n.createElement(e,{current:2,animation:!1,itemRender:y},C.map((t=>n.createElement(e.Item,{key:t,title:t}))))));return n.createElement(_,null,t)}});const x=o.div``;var w=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=n.createElement("div",null,n.createElement(e,{current:1,animation:!1,shape:"dot"},n.createElement(e.Item,{title:"Step 1",content:"Open the refrigerator door",icon:"calendar"}),n.createElement(e.Item,{title:"Step 2",content:"Put the elephant in the refrigerator",percent:40}),n.createElement(e.Item,{title:"Step 3",content:"Close the refrigerator door",icon:"smile"})),n.createElement("br",null),n.createElement("br",null),n.createElement(e,{current:1,animation:!1},n.createElement(e.Item,{title:"Step 1",content:"Open the refrigerator door",icon:"calendar"}),n.createElement(e.Item,{title:"Step 2",content:"Put the elephant in the refrigerator",percent:40}),n.createElement(e.Item,{title:"Step 3",content:"Close the refrigerator door",icon:"smile"})));return n.createElement(x,null,t)}});const z=o.div``;var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=n.createElement("div",null,n.createElement(e,{current:1,shape:"arrow"},n.createElement(e.Item,{title:"Step 1"}),n.createElement(e.Item,{title:"Step 2"}),n.createElement(e.Item,{title:"Step 3",disabled:!0}),n.createElement(e.Item,{title:"Step 4"})),n.createElement("br",null),n.createElement("br",null),n.createElement(e,{current:1,shape:"dot"},n.createElement(e.Item,{title:"Step 1"}),n.createElement(e.Item,{title:"Step 2"}),n.createElement(e.Item,{title:"Step 3",disabled:!0}),n.createElement(e.Item,{title:"Step 4"})),n.createElement("br",null),n.createElement("br",null),n.createElement(e,{current:1,shape:"circle"},n.createElement(e.Item,{title:"Step 1"}),n.createElement(e.Item,{title:"Step 2"}),n.createElement(e.Item,{title:"Step 3",disabled:!0}),n.createElement(e.Item,{title:"Step 4"})));return n.createElement(z,null,t)}});const N=o.div``;var T=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=n.createElement("div",null,n.createElement(e,{current:1},n.createElement(e.Item,{title:"Step 1"}),n.createElement(e.Item,{title:n.createElement("span",{style:{color:"red"}},"In Progress"),content:n.createElement("span",{style:{color:"red"}},"download image failed"),itemRender:(e,t)=>n.createElement("div",null,n.createElement(l,{type:"error",size:"xl",style:{color:"#FF3333"}}))}),n.createElement(e.Item,{title:"Step 3"}),n.createElement(e.Item,{title:"Step 4"})));return n.createElement(N,null,t)}});const P=e.Item,R=t.Group;class j extends n.Component{constructor(e){super(e),this.state={currentStep:3}}next(){const e=this.state.currentStep+1;this.setState({currentStep:e>6?6:e})}prev(){const e=this.state.currentStep-1;this.setState({currentStep:e<0?0:e})}onClick(e){console.log(e),this.setState({currentStep:e})}render(){const{currentStep:r}=this.state;return n.createElement("div",null,n.createElement(e,{current:r,readOnly:!0},n.createElement(P,{title:"Step 1",onClick:this.onClick.bind(this)}),n.createElement(P,{title:"Step 2",onClick:this.onClick.bind(this)}),n.createElement(P,{title:"Step 3",onClick:this.onClick.bind(this)}),n.createElement(P,{title:"Step 4",onClick:this.onClick.bind(this)}),n.createElement(P,{title:"Step 5",onClick:this.onClick.bind(this)}),n.createElement(P,{title:"Step 6",onClick:this.onClick.bind(this)})),n.createElement("br",null),n.createElement("br",null),n.createElement(R,null,n.createElement(t,{onClick:this.prev.bind(this),type:"primary",disabled:0===r},"Backward"),n.createElement(t,{onClick:this.next.bind(this),type:"primary",disabled:6===r},"Forward")))}}const D=o.div``;var M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=n.createElement(j,null);return n.createElement(D,null,e)}});const A={};A._controlled=d,A._basic=f,A._direction=v,A["_custom-step-item"]=I,A._percent=w,A._disable=O,A["_step-process-failed"]=T,A["_read-only"]=M;export default A;
