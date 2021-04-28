import{r as e,q as t,B as n,b as l}from"./index.db891132.js";import{q as r}from"./styled-components.browser.esm.2d3384e1.js";function c(e){console.log(`switch to ${e}`)}const o=r.div`
  .large-width {
    width: 100px;
  }
`;var a=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{defaultChecked:!1,onChange:c}));return e.createElement(o,null,n)}});function i(e){console.log(`switch to ${e}`)}const d=r.div`
  .large-width {
    width: 100px;
  }
`;var u=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{checkedChildren:"on",onChange:i,unCheckedChildren:"off","aria-label":"accessible switch"}));return e.createElement(d,null,n)}});const s=r.div`
  .line {
    margin-bottom: 10px;
  }
  .next-switch {
    margin-right: 20px;
  }
`;var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,null),e.createElement("br",null),e.createElement(t,{size:"small"}));return e.createElement(s,null,n)}});const h=()=>{const[l,r]=e.useState(!0);return e.createElement("div",null,e.createElement(t,{disabled:l,defaultChecked:!0}),e.createElement("br",null),e.createElement(n,{type:"primary",onClick:()=>{r(!l)}},"Toggle disabled"))};const f=r.div``;var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(h,null);return e.createElement(f,null,t)}});function b(e){console.log(`switch to ${e}`)}const g=r.div``;var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{checkedChildren:"on",unCheckedChildren:"off",onChange:b}),e.createElement("br",null),e.createElement(t,{checkedChildren:"已启用",unCheckedChildren:"已关闭",onChange:b,style:{width:76}}),e.createElement("br",null),e.createElement(t,{checkedChildren:e.createElement(l,{type:"select",size:"xs"}),unCheckedChildren:e.createElement(l,{type:"close",size:"xs"}),onChange:b}));return e.createElement(g,null,n)}});const C={};C._basic=a,C._accessibility=u,C._size=m,C._disabled=E,C["_checked-children"]=_;export default C;
