import{r as e,aw as t,W as n}from"./index.672a70f3.js";import{q as l}from"./styled-components.browser.esm.f3e9ec77.js";import{s as o}from"./solarlunar.min.e0b63036.js";function r(e){console.log(e.format("L"))}const a=l.div``;var c=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.exports.createElement("div",null,e.exports.createElement(t,{onSelect:r,defaultValue:n().add(1,"days")}));return e.exports.createElement(a,null,l)}});function s(e){console.log(e)}const d=l.div`
  .wrapped-calendar {
    width: 300px;
    border: 1px solid #c4c6cf;
    border-radius: 3px;
    padding: 8px;
  }
`;var u=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.exports.createElement("div",{className:"wrapped-calendar"},e.exports.createElement(t,{onSelect:s,shape:"card"}));return e.exports.createElement(d,null,n)}});const i=n(),m=i.clone().localeData().monthsShort();function p(t){const n=t.date();if(i.month()!==t.month())return n;let l;switch(n){case 1:l=[{type:"primary",content:"Event 1"},{type:"normal",content:"Event 2"}];break;case 10:l=[{type:"normal",content:"Event 3"},{type:"normal",content:"Event 4"}];break;case 11:l=[{type:"primary",content:"Event 5"},{type:"primary",content:"Event 6"}];break;default:l=[]}return e.exports.createElement("div",{className:"custom-calendar-cell"},e.exports.createElement("div",{className:"custom-calendar-cell-value"},n),e.exports.createElement("div",{className:"custom-calendar-cell-content"},e.exports.createElement("ul",{className:"event-list"},l.map(((t,n)=>e.exports.createElement("li",{className:`${t.type}-event`,key:n},t.content))))))}function f(t){return i.month()===t.month()?e.exports.createElement("div",null,e.exports.createElement("div",null,m[t.month()]),e.exports.createElement("div",null,"Events")):m[t.month()]}const x=l.div`
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
`;var v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.exports.createElement(t,{dateCellRender:p,monthCellRender:f});return e.exports.createElement(x,null,n)}});function b(e){console.log(e.format("L"))}function _(e,t){console.log("Visible month changed to %s from <%s>",e.format("YYYY-MM"),t)}const g=l.div``;var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.exports.createElement(t,{onSelect:b,defaultVisibleMonth:()=>n("2018-01","YYYY-MM",!0),onVisibleMonthChange:_});return e.exports.createElement(g,null,l)}});const h=n(),y=function(e){return e.valueOf()>h.valueOf()};const S=l.div`
  .wrapped-calendar {
    width: 300px;
    border: 1px solid #c4c6cf;
    border-radius: 3px;
    padding: 8px;
  }
`;var w=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.exports.createElement("div",{className:"wrapped-calendar"},e.exports.createElement(t,{disabledDate:y,shape:"card"}));return e.exports.createElement(S,null,n)}});n.locale("zh-cn");const M=l.div``;var j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.exports.createElement(t,null);return e.exports.createElement(M,null,n)}});function O(e){console.log(e.format("L"))}function z(t){const n=o.solar2lunar(t.year(),t.month(),t.date());return e.exports.createElement("div",{className:"custom-cell"},t.date(),e.exports.createElement("span",null,1===n.lDay?n.monthCn:n.dayCn))}const N=l.div`
  .custom-cell {
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }
`;var T=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.exports.createElement("div",null,e.exports.createElement(t,{onSelect:O,dateCellRender:z,defaultValue:n().add(1,"days")}));return e.exports.createElement(N,null,l)}});const Y=l.div``;var k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.exports.createElement("div",null,e.exports.createElement(t,{shape:"panel",defaultValue:n().add(1,"days")}));return e.exports.createElement(Y,null,l)}});const C={};C._basic=c,C._card=u,C["_custom-cell"]=v,C["_default-visible-month"]=E,C._disabled=w,C._locale=j,C._lunar=T,C._panel=k;export default C;
