import{r as e,U as t}from"./index.d204dc79.js";import{q as n}from"./styled-components.browser.esm.b206912e.js";import{C as o}from"./index.fe1bd9c3.js";import{s as r}from"./solarlunar.min.cedb6bb7.js";function l(e){console.log(e.format("L"))}const a=n.div``;var c=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.exports.createElement("div",null,e.exports.createElement(o,{onSelect:l,defaultValue:t().add(1,"days")}));return e.exports.createElement(a,null,n)}});function s(e){console.log(e)}const d=n.div`
  .wrapped-calendar {
    width: 300px;
    border: 1px solid #eee;
    border-radius: 3px;
  }
`;var i=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement("div",{className:"wrapped-calendar"},e.exports.createElement(o,{onSelect:s,shape:"card"}));return e.exports.createElement(d,null,t)}});const u=t();function m(t){const n=t.date();if(u.month()!==t.month())return n;let o;switch(n){case 1:o=[{type:"primary",content:"Event 1"},{type:"normal",content:"Event 2"}];break;case 10:o=[{type:"normal",content:"Event 3"},{type:"normal",content:"Event 4"}];break;case 11:o=[{type:"primary",content:"Event 5"},{type:"primary",content:"Event 6"}];break;default:o=[]}return e.exports.createElement("div",{className:"custom-calendar-cell"},e.exports.createElement("div",{className:"custom-calendar-cell-value"},n),e.exports.createElement("div",{className:"custom-calendar-cell-content"},e.exports.createElement("ul",{className:"event-list"},o.map(((t,n)=>e.exports.createElement("li",{className:`${t.type}-event`,key:n},t.content))))))}function p(t){return u.month()===t.month()?e.exports.createElement("div",null,e.exports.createElement("div",null,t.month()),e.exports.createElement("div",null,"Events")):t.month()}const f=n.div`
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
`;var x=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(o,{dateCellRender:m,monthCellRender:p});return e.exports.createElement(f,null,t)}});function b(e){console.log(e.format("L"))}function v(e,t){console.log("Visible month changed to %s from <%s>",e.format("YYYY-MM"),t)}const g=n.div``;var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.exports.createElement(o,{onSelect:b,defaultPanelValue:()=>t("2018-01","YYYY-MM",!0),onPanelChange:v});return e.exports.createElement(g,null,n)}});const _=t(),y=function(e){return e.valueOf()>_.valueOf()};const h=n.div`
  .wrapped-calendar {
    width: 300px;
    border: 1px solid #f0f0f0;
    border-radius: 3px;
    padding: 8px;
  }
`;var S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement("div",{className:"wrapped-calendar"},e.exports.createElement(o,{disabledDate:y,shape:"card"}));return e.exports.createElement(h,null,t)}});function w(e){console.log(e.format())}function j(t){const n=r.solar2lunar(t.year(),t.month(),t.date());return e.exports.createElement("div",{className:"custom-cell"},t.date(),e.exports.createElement("span",null,1===n.lDay?n.monthCn:n.dayCn))}const M=n.div`
  .custom-cell {
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }
`;var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.exports.createElement("div",null,e.exports.createElement(o,{onSelect:w,dateCellRender:j,defaultValue:t().add(1,"days")}));return e.exports.createElement(M,null,n)}});const N=n.div``;var Y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.exports.createElement("div",{style:{border:"1px solid #f0f0f0"}},e.exports.createElement(o,{shape:"panel",defaultValue:t().add(1,"days")}));return e.exports.createElement(N,null,n)}});const z={};z._basic=c,z._card=i,z["_custom-cell"]=x,z["_default-visible-month"]=E,z._disabled=S,z._lunar=O,z._panel=Y;export default z;
