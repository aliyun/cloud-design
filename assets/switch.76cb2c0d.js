import{r as e,M as t,b as n,B as l}from"./index.4543a34a.js";import{q as c}from"./styled-components.browser.esm.09d3b94c.js";function r(e){console.log(`switch to ${e}`)}const o=c.div`
  .large-width {
    width: 100px;
  }
`;var a=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{defaultChecked:!1,onChange:r}));return e.createElement(o,null,n)}});function i(e){console.log(`switch to ${e}`)}const d=c.div``;var u=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.createElement("div",null,e.createElement(t,{checkedChildren:"on",unCheckedChildren:"off",onChange:i}),e.createElement("br",null),e.createElement(t,{checkedChildren:"已启用",unCheckedChildren:"已关闭",onChange:i,style:{width:76}}),e.createElement("br",null),e.createElement(t,{checkedChildren:e.createElement(n,{type:"select",size:"xs"}),unCheckedChildren:e.createElement(n,{type:"close",size:"xs"}),onChange:i}));return e.createElement(d,null,l)}});const s=c.div`
  .line {
    margin-bottom: 10px;
  }
  .next-switch {
    margin-right: 20px;
  }
`;var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,null),e.createElement("br",null),e.createElement(t,{size:"small"}));return e.createElement(s,null,n)}});function h(e){console.log(`switch to ${e}`)}const f=c.div`
  .large-width {
    width: 100px;
  }
`;var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{checkedChildren:"on",onChange:h,unCheckedChildren:"off","aria-label":"accessible switch"}));return e.createElement(f,null,n)}});const b=()=>{const[n,c]=e.useState(!0);return e.createElement("div",null,e.createElement(t,{disabled:n,defaultChecked:!0}),e.createElement("br",null),e.createElement(l,{type:"primary",onClick:()=>{c(!n)}},"Toggle disabled"))};const g=c.div``;var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(b,null);return e.createElement(g,null,t)}});const C={};C._basic=a,C["_checked-children"]=u,C._size=m,C._accessibility=E,C._disabled=_;export default C;
