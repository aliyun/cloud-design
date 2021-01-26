import{r as e,a7 as t,B as n,R as l}from"./index.4642f55c.js";import{q as a}from"./styled-components.browser.esm.1feaecc0.js";class r extends e.Component{constructor(e){super(e),this.state={value:0,tip:""},this.onChange=this.onChange.bind(this)}onChange(e,t){let n="";n=e>=0?e:"negative "+-1*e,this.setState({value:e,tip:`${n}`})}render(){const{value:n,tip:l}=this.state;return e.createElement("div",null,e.createElement("span",{id:"a11y-number-picker","aria-live":"assertive","aria-label":l}),e.createElement(t,{type:"inline",value:n,onChange:this.onChange,upBtnProps:{"aria-label":"\b\bincreasing button"},downBtnProps:{"aria-label":"decreasing button"},"aria-labelledby":"a11y-number-picker"}))}}const o=a.div``;var c=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(r,null);return e.createElement(o,null,t)}});const u=a.div``;var i=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{defaultValue:0,disabled:!0}),e.createElement("br",null),e.createElement("br",null),e.createElement(t,{defaultValue:0,type:"inline",disabled:!0}));return e.createElement(u,null,n)}});const s=e=>Intl.NumberFormat("en-US").format(e);const m=a.div``;var d=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{format:s,defaultValue:5e3}),e.createElement("br",null),e.createElement("br",null),e.createElement(t,{label:"p:",format:e=>`${e}%`,defaultValue:85}),e.createElement("br",null),e.createElement("br",null),e.createElement(t,{innerAfter:"%"}));return e.createElement(m,null,n)}});class b extends e.Component{constructor(e){super(e),this.state={editable:!1,value:0}}toogle(){this.setState({editable:!this.state.editable})}onChange(e){console.log("changed",e),this.setState({value:e})}render(){return e.createElement("div",null,e.createElement(t,{onChange:this.onChange.bind(this),value:this.state.value,editable:this.state.editable}),e.createElement("br",null),e.createElement("br",null),e.createElement(n,{onClick:this.toogle.bind(this)},"Toggle to ",this.state.editable?"uneditable":"editable"))}}const g=a.div``;var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(b,null);return e.createElement(g,null,t)}});function f(e,t){console.log("onChange",e,t)}function p(e){console.log("onCorrect",e)}const _=a.div``;var v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{type:"inline",step:3,min:6,max:30,defaultValue:6,onChange:f,onCorrect:p}));return e.createElement(_,null,n)}});function h(e,t){console.log(e,t.type,t.triggerType)}const S=a.div``;var y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{max:3,onChange:h}),e.createElement("br",null),e.createElement("br",null),e.createElement(t,{defaultValue:0,max:3,type:"inline",onChange:h}));return e.createElement(S,null,n)}});function C(e){console.log("changed",e)}function z(e){console.log(e)}const T=a.div``;var V=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{defaultValue:-3.99,onChange:C,onCorrect:z,step:2,precision:2}));return e.createElement(T,null,n)}});class j extends e.Component{constructor(){super(...arguments),this.state={device:"desktop"},this.handleDeviceChange=e=>{this.setState({device:e})}}render(){return e.createElement("div",null,e.createElement(l.Group,{shape:"button",value:this.state.device,onChange:this.handleDeviceChange},e.createElement(l,{value:"desktop"},"desktop"),e.createElement(l,{value:"phone"},"phone")),e.createElement("hr",null),e.createElement(t,{device:this.state.device}))}}const M=a.div``;var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(j,null);return e.createElement(M,null,t)}});const x=a.div`
  .next-number-picker {
    margin-right: 10px;
  }
`;var k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{defaultValue:0,size:"small"}),e.createElement(t,{defaultValue:0}),e.createElement(t,{defaultValue:0,size:"large"}),e.createElement("br",null),e.createElement("br",null),e.createElement(t,{defaultValue:0,size:"small",type:"inline"}),e.createElement(t,{defaultValue:0,type:"inline"}),e.createElement(t,{defaultValue:0,size:"large",type:"inline"}));return e.createElement(x,null,n)}});const w=a.div``;var B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{alwaysShowTrigger:!0}),e.createElement("br",null),e.createElement("br",null),e.createElement(t,{hasTrigger:!1}));return e.createElement(w,null,n)}});function D(e){console.log("changed",e)}function P(e){console.log(e)}const $=a.div``;var q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{defaultValue:0,onChange:D,onCorrect:P,step:.01}));return e.createElement($,null,n)}});const A={};A._accessibility=c,A._disabled=i,A._format=d,A._editable=E,A._limit=v,A._basic=y,A._precision=V,A._mobile=O,A._size=k,A._trigger=B,A._step=q;export default A;
