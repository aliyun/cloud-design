import{r as e}from"./index.26e635a6.js";import{q as t}from"./styled-components.browser.esm.08d92d51.js";import{N as n}from"./index.7c1508ee.js";import{m as l}from"./moment.ebc1a0ce.js";import{s as a}from"./solarlunar.min.0b79acba.js";function o(e){console.log(e)}const r=t.div`
  .wrapped-calendar {
    width: 300px;
    border: 1px solid #c4c6cf;
    border-radius: 3px;
    padding: 8px;
  }
`;var c=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"wrapped-calendar"},e.createElement(n,{onSelect:o,shape:"card"}));return e.createElement(r,null,t)}});function d(e){console.log(e.format("L"))}const i=t.div``;var u=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,e.createElement(n,{onSelect:d,defaultValue:l().add(1,"days")}));return e.createElement(i,null,t)}});const m=l(),s=function(e){return e.valueOf()>m.valueOf()};const p=t.div`
  .wrapped-calendar {
    width: 300px;
    border: 1px solid #c4c6cf;
    border-radius: 3px;
    padding: 8px;
  }
`;var f=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"wrapped-calendar"},e.createElement(n,{disabledDate:s,shape:"card"}));return e.createElement(p,null,t)}});const v=l(),b=v.clone().localeData().monthsShort();function _(t){const n=t.date();if(v.month()!==t.month())return n;let l;switch(n){case 1:l=[{type:"primary",content:"Event 1"},{type:"normal",content:"Event 2"}];break;case 10:l=[{type:"normal",content:"Event 3"},{type:"normal",content:"Event 4"}];break;case 11:l=[{type:"primary",content:"Event 5"},{type:"primary",content:"Event 6"}];break;default:l=[]}return e.createElement("div",{className:"custom-calendar-cell"},e.createElement("div",{className:"custom-calendar-cell-value"},n),e.createElement("div",{className:"custom-calendar-cell-content"},e.createElement("ul",{className:"event-list"},l.map(((t,n)=>e.createElement("li",{className:`${t.type}-event`,key:n},t.content))))))}function g(t){return v.month()===t.month()?e.createElement("div",null,e.createElement("div",null,b[t.month()]),e.createElement("div",null,"Events")):b[t.month()]}const E=t.div`
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
`;var h=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(n,{dateCellRender:_,monthCellRender:g});return e.createElement(E,null,t)}});function y(e){console.log(e.format("L"))}function x(e,t){console.log("Visible month changed to %s from <%s>",e.format("YYYY-MM"),t)}const S=t.div``;var j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(n,{onSelect:y,defaultVisibleMonth:()=>l("2018-01","YYYY-MM",!0),onVisibleMonthChange:x});return e.createElement(S,null,t)}});const w=t.div``;var M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,e.createElement(n,{shape:"panel",defaultValue:l().add(1,"days")}));return e.createElement(w,null,t)}});function O(e){console.log(e.format("L"))}function z(t){const n=a.solar2lunar(t.year(),t.month(),t.date());return e.createElement("div",{className:"custom-cell"},t.date(),e.createElement("span",null,1===n.lDay?n.monthCn:n.dayCn))}const N=t.div`
  .custom-cell {
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }
`;var T=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,e.createElement(n,{onSelect:O,dateCellRender:z,defaultValue:l().add(1,"days")}));return e.createElement(N,null,t)}});l.locale("zh-cn");const Y=t.div``;var k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(n,null);return e.createElement(Y,null,t)}});const C={};C._card=c,C._basic=u,C._disabled=f,C["_custom-cell"]=h,C["_default-visible-month"]=j,C._panel=M,C._lunar=T,C._locale=k;export default C;
