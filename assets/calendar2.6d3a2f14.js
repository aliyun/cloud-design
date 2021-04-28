import{r as e,E as t}from"./index.db891132.js";import{q as n}from"./styled-components.browser.esm.2d3384e1.js";import{C as l}from"./index.1c68a5c5.js";import{s as a}from"./solarlunar.min.20828db6.js";function o(e){console.log(e)}const r=n.div`
  .wrapped-calendar {
    width: 300px;
    border: 1px solid #eee;
    border-radius: 3px;
  }
`;var c=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"wrapped-calendar"},e.createElement(l,{onSelect:o,shape:"card"}));return e.createElement(r,null,t)}});function d(e){console.log(e.format())}function s(t){const n=a.solar2lunar(t.year(),t.month(),t.date());return e.createElement("div",{className:"custom-cell"},t.date(),e.createElement("span",null,1===n.lDay?n.monthCn:n.dayCn))}const i=n.div`
  .custom-cell {
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }
`;var u=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(l,{onSelect:d,dateCellRender:s,defaultValue:t().add(1,"days")}));return e.createElement(i,null,n)}});function m(e){console.log(e.format("L"))}const p=n.div``;var f=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(l,{onSelect:m,defaultValue:t().add(1,"days")}));return e.createElement(p,null,n)}});const v=n.div``;var b=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",{style:{border:"1px solid #f0f0f0"}},e.createElement(l,{shape:"panel",defaultValue:t().add(1,"days")}));return e.createElement(v,null,n)}});function E(e){console.log(e.format("L"))}function g(e,t){console.log("Visible month changed to %s from <%s>",e.format("YYYY-MM"),t)}const _=n.div``;var y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement(l,{onSelect:E,defaultPanelValue:()=>t("2018-01","YYYY-MM",!0),onPanelChange:g});return e.createElement(_,null,n)}});const h=t();function x(t){const n=t.date();if(h.month()!==t.month())return n;let l;switch(n){case 1:l=[{type:"primary",content:"Event 1"},{type:"normal",content:"Event 2"}];break;case 10:l=[{type:"normal",content:"Event 3"},{type:"normal",content:"Event 4"}];break;case 11:l=[{type:"primary",content:"Event 5"},{type:"primary",content:"Event 6"}];break;default:l=[]}return e.createElement("div",{className:"custom-calendar-cell"},e.createElement("div",{className:"custom-calendar-cell-value"},n),e.createElement("div",{className:"custom-calendar-cell-content"},e.createElement("ul",{className:"event-list"},l.map(((t,n)=>e.createElement("li",{className:`${t.type}-event`,key:n},t.content))))))}function S(t){return h.month()===t.month()?e.createElement("div",null,e.createElement("div",null,t.month()),e.createElement("div",null,"Events")):t.month()}const w=n.div`
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
`;var j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(l,{dateCellRender:x,monthCellRender:S});return e.createElement(w,null,t)}});const M=t(),O=function(e){return e.valueOf()>M.valueOf()};const N=n.div`
  .wrapped-calendar {
    width: 300px;
    border: 1px solid #f0f0f0;
    border-radius: 3px;
    padding: 8px;
  }
`;var Y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"wrapped-calendar"},e.createElement(l,{disabledDate:O,shape:"card"}));return e.createElement(N,null,t)}});const z={};z._card=c,z._lunar=u,z._basic=f,z._panel=b,z["_default-visible-month"]=y,z["_custom-cell"]=j,z._disabled=Y;export default z;
