import{r as e}from"./index.4543a34a.js";import{q as t}from"./styled-components.browser.esm.09d3b94c.js";import{m as n}from"./moment.32698ee1.js";import{N as l}from"./index.41812848.js";import{s as a}from"./solarlunar.min.2270d141.js";function o(e){console.log(e.format("L"))}const r=t.div``;var c=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,e.createElement(l,{onSelect:o,defaultValue:n().add(1,"days")}));return e.createElement(r,null,t)}});function d(e){console.log(e.format("L"))}function i(e,t){console.log("Visible month changed to %s from <%s>",e.format("YYYY-MM"),t)}const u=t.div``;var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(l,{onSelect:d,defaultVisibleMonth:()=>n("2018-01","YYYY-MM",!0),onVisibleMonthChange:i});return e.createElement(u,null,t)}});const s=n(),p=s.clone().localeData().monthsShort();function f(t){const n=t.date();if(s.month()!==t.month())return n;let l;switch(n){case 1:l=[{type:"primary",content:"Event 1"},{type:"normal",content:"Event 2"}];break;case 10:l=[{type:"normal",content:"Event 3"},{type:"normal",content:"Event 4"}];break;case 11:l=[{type:"primary",content:"Event 5"},{type:"primary",content:"Event 6"}];break;default:l=[]}return e.createElement("div",{className:"custom-calendar-cell"},e.createElement("div",{className:"custom-calendar-cell-value"},n),e.createElement("div",{className:"custom-calendar-cell-content"},e.createElement("ul",{className:"event-list"},l.map(((t,n)=>e.createElement("li",{className:`${t.type}-event`,key:n},t.content))))))}function v(t){return s.month()===t.month()?e.createElement("div",null,e.createElement("div",null,p[t.month()]),e.createElement("div",null,"Events")):p[t.month()]}const b=t.div`
  .custom-calendar-guide {
    width: 270px;
    border: 1px solid #c4c6cf;
    border-radius: 3px;
    overflow: hidden;
    margin-top: 20px;
  }

  .custom-calendar-cell-content {
    height: 50px;
    text-align: left;
  }

  .event-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .primary-event {
    color: white;
    background: red;
    border-radius: 3px;
    padding-left: 10px;
    margin-bottom: 3px;
  }

  .normal-event {
    color: white;
    background: blue;
    border-radius: 3px;
    padding-left: 10px;
    margin-bottom: 3px;
  }
`;var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(l,{dateCellRender:f,monthCellRender:v});return e.createElement(b,null,t)}});function g(e){console.log(e)}const E=t.div`
  .wrapped-calendar {
    width: 300px;
    border: 1px solid #c4c6cf;
    border-radius: 3px;
    padding: 8px;
  }
`;var h=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"wrapped-calendar"},e.createElement(l,{onSelect:g,shape:"card"}));return e.createElement(E,null,t)}});const y=n(),x=function(e){return e.valueOf()>y.valueOf()};const S=t.div`
  .wrapped-calendar {
    width: 300px;
    border: 1px solid #c4c6cf;
    border-radius: 3px;
    padding: 8px;
  }
`;var j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"wrapped-calendar"},e.createElement(l,{disabledDate:x,shape:"card"}));return e.createElement(S,null,t)}});const w=t.div``;var M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,e.createElement(l,{shape:"panel",defaultValue:n().add(1,"days")}));return e.createElement(w,null,t)}});n.locale("zh-cn");const O=t.div``;var z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(l,null);return e.createElement(O,null,t)}});function N(e){console.log(e.format("L"))}function T(t){const n=a.solar2lunar(t.year(),t.month(),t.date());return e.createElement("div",{className:"custom-cell"},t.date(),e.createElement("span",null,1===n.lDay?n.monthCn:n.dayCn))}const Y=t.div`
  .custom-cell {
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }
`;var k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,e.createElement(l,{onSelect:N,dateCellRender:T,defaultValue:n().add(1,"days")}));return e.createElement(Y,null,t)}});const C={};C._basic=c,C["_default-visible-month"]=m,C["_custom-cell"]=_,C._card=h,C._disabled=j,C._panel=M,C._locale=z,C._lunar=k;export default C;
