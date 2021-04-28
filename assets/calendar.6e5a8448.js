import{r as e,x as t,m as n}from"./index.db891132.js";import{q as l}from"./styled-components.browser.esm.2d3384e1.js";import{s as a}from"./solarlunar.min.20828db6.js";function o(e){console.log(e)}const r=l.div`
  .wrapped-calendar {
    width: 300px;
    border: 1px solid #c4c6cf;
    border-radius: 3px;
    padding: 8px;
  }
`;var c=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",{className:"wrapped-calendar"},e.createElement(t,{onSelect:o,shape:"card"}));return e.createElement(r,null,n)}});const d=n(),u=d.clone().localeData().monthsShort();function i(t){const n=t.date();if(d.month()!==t.month())return n;let l;switch(n){case 1:l=[{type:"primary",content:"Event 1"},{type:"normal",content:"Event 2"}];break;case 10:l=[{type:"normal",content:"Event 3"},{type:"normal",content:"Event 4"}];break;case 11:l=[{type:"primary",content:"Event 5"},{type:"primary",content:"Event 6"}];break;default:l=[]}return e.createElement("div",{className:"custom-calendar-cell"},e.createElement("div",{className:"custom-calendar-cell-value"},n),e.createElement("div",{className:"custom-calendar-cell-content"},e.createElement("ul",{className:"event-list"},l.map(((t,n)=>e.createElement("li",{className:`${t.type}-event`,key:n},t.content))))))}function s(t){return d.month()===t.month()?e.createElement("div",null,e.createElement("div",null,u[t.month()]),e.createElement("div",null,"Events")):u[t.month()]}const m=l.div`
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
`;var p=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement(t,{dateCellRender:i,monthCellRender:s});return e.createElement(m,null,n)}});function f(e){console.log(e.format("L"))}function v(e,t){console.log("Visible month changed to %s from <%s>",e.format("YYYY-MM"),t)}const b=l.div``;var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.createElement(t,{onSelect:f,defaultVisibleMonth:()=>n("2018-01","YYYY-MM",!0),onVisibleMonthChange:v});return e.createElement(b,null,l)}});const g=n(),E=function(e){return e.valueOf()>g.valueOf()};const h=l.div`
  .wrapped-calendar {
    width: 300px;
    border: 1px solid #c4c6cf;
    border-radius: 3px;
    padding: 8px;
  }
`;var y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",{className:"wrapped-calendar"},e.createElement(t,{disabledDate:E,shape:"card"}));return e.createElement(h,null,n)}});n.locale("zh-cn");const x=l.div``;var S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement(t,null);return e.createElement(x,null,n)}});function w(e){console.log(e.format("L"))}const M=l.div``;var j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.createElement("div",null,e.createElement(t,{onSelect:w,defaultValue:n().add(1,"days")}));return e.createElement(M,null,l)}});function O(e){console.log(e.format("L"))}function z(t){const n=a.solar2lunar(t.year(),t.month(),t.date());return e.createElement("div",{className:"custom-cell"},t.date(),e.createElement("span",null,1===n.lDay?n.monthCn:n.dayCn))}const N=l.div`
  .custom-cell {
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }
`;var T=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.createElement("div",null,e.createElement(t,{onSelect:O,dateCellRender:z,defaultValue:n().add(1,"days")}));return e.createElement(N,null,l)}});const Y=l.div``;var k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.createElement("div",null,e.createElement(t,{shape:"panel",defaultValue:n().add(1,"days")}));return e.createElement(Y,null,l)}});const C={};C._card=c,C["_custom-cell"]=p,C["_default-visible-month"]=_,C._disabled=y,C._locale=S,C._basic=j,C._lunar=T,C._panel=k;export default C;
