import{r as e,a7 as t,d as n,B as l}from"./index.16a07d60.js";import{q as r}from"./styled-components.browser.esm.d6068967.js";function o(e){console.log(`switch to ${e}`)}const c=r.div`
  .large-width {
    width: 100px;
  }
`;var s=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.exports.createElement("div",null,e.exports.createElement(t,{checkedChildren:"on",onChange:o,unCheckedChildren:"off","aria-label":"accessible switch"}));return e.exports.createElement(c,null,n)}});function a(e){console.log(`switch to ${e}`)}const i=r.div`
  .large-width {
    width: 100px;
  }
`;var d=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.exports.createElement("div",null,e.exports.createElement(t,{defaultChecked:!1,onChange:a}));return e.exports.createElement(i,null,n)}});function u(e){console.log(`switch to ${e}`)}const p=r.div``;var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.exports.createElement("div",null,e.exports.createElement(t,{checkedChildren:"on",unCheckedChildren:"off",onChange:u}),e.exports.createElement("br",null),e.exports.createElement(t,{checkedChildren:"已启用",unCheckedChildren:"已关闭",onChange:u,style:{width:76}}),e.exports.createElement("br",null),e.exports.createElement(t,{checkedChildren:e.exports.createElement(n,{type:"select",size:"xs"}),unCheckedChildren:e.exports.createElement(n,{type:"close",size:"xs"}),onChange:u}));return e.exports.createElement(p,null,l)}});const h=()=>{const[n,r]=e.exports.useState(!0);return e.exports.createElement("div",null,e.exports.createElement(t,{disabled:n,defaultChecked:!0}),e.exports.createElement("br",null),e.exports.createElement(l,{type:"primary",onClick:()=>{r(!n)}},"Toggle disabled"))};const x=r.div``;var f=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(h,null);return e.exports.createElement(x,null,t)}});const E=r.div`
  .line {
    margin-bottom: 10px;
  }
  .next-switch {
    margin-right: 20px;
  }
`;var g=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.exports.createElement("div",null,e.exports.createElement(t,null),e.exports.createElement("br",null),e.exports.createElement(t,{size:"small"}));return e.exports.createElement(E,null,n)}});const _={};_._accessibility=s,_._basic=d,_["_checked-children"]=m,_._disabled=f,_._size=g;export default _;
