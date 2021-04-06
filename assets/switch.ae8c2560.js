import{r as e,l as t,b as n,B as l}from"./index.26e635a6.js";import{q as r}from"./styled-components.browser.esm.08d92d51.js";function c(e){console.log(`switch to ${e}`)}const o=r.div`
  .large-width {
    width: 100px;
  }
`;var a=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{defaultChecked:!1,onChange:c}));return e.createElement(o,null,n)}});function i(e){console.log(`switch to ${e}`)}const d=r.div`
  .large-width {
    width: 100px;
  }
`;var u=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{checkedChildren:"on",onChange:i,unCheckedChildren:"off","aria-label":"accessible switch"}));return e.createElement(d,null,n)}});function s(e){console.log(`switch to ${e}`)}const m=r.div``;var h=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.createElement("div",null,e.createElement(t,{checkedChildren:"on",unCheckedChildren:"off",onChange:s}),e.createElement("br",null),e.createElement(t,{checkedChildren:"已启用",unCheckedChildren:"已关闭",onChange:s,style:{width:76}}),e.createElement("br",null),e.createElement(t,{checkedChildren:e.createElement(n,{type:"select",size:"xs"}),unCheckedChildren:e.createElement(n,{type:"close",size:"xs"}),onChange:s}));return e.createElement(m,null,l)}});const f=r.div`
  .line {
    margin-bottom: 10px;
  }
  .next-switch {
    margin-right: 20px;
  }
`;var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,null),e.createElement("br",null),e.createElement(t,{size:"small"}));return e.createElement(f,null,n)}});const g=()=>{const[n,r]=e.useState(!0);return e.createElement("div",null,e.createElement(t,{disabled:n,defaultChecked:!0}),e.createElement("br",null),e.createElement(l,{type:"primary",onClick:()=>{r(!n)}},"Toggle disabled"))};const _=r.div``;var b=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(g,null);return e.createElement(_,null,t)}});const C={};C._basic=a,C._accessibility=u,C["_checked-children"]=h,C._size=E,C._disabled=b;export default C;
