import{r as e,Q as t}from"./index.26e635a6.js";import{q as n}from"./styled-components.browser.esm.08d92d51.js";import{C as l}from"./index.da23cd57.js";import{s as a}from"./solarlunar.min.0b79acba.js";function o(e){console.log(e.format("L"))}const r=n.div``;var c=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(l,{onSelect:o,defaultValue:t().add(1,"days")}));return e.createElement(r,null,n)}});function d(e){console.log(e)}const s=n.div`
  .wrapped-calendar {
    width: 300px;
    border: 1px solid #eee;
    border-radius: 3px;
  }
`;var i=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"wrapped-calendar"},e.createElement(l,{onSelect:d,shape:"card"}));return e.createElement(s,null,t)}});const u=t();function m(t){const n=t.date();if(u.month()!==t.month())return n;let l;switch(n){case 1:l=[{type:"primary",content:"Event 1"},{type:"normal",content:"Event 2"}];break;case 10:l=[{type:"normal",content:"Event 3"},{type:"normal",content:"Event 4"}];break;case 11:l=[{type:"primary",content:"Event 5"},{type:"primary",content:"Event 6"}];break;default:l=[]}return e.createElement("div",{className:"custom-calendar-cell"},e.createElement("div",{className:"custom-calendar-cell-value"},n),e.createElement("div",{className:"custom-calendar-cell-content"},e.createElement("ul",{className:"event-list"},l.map(((t,n)=>e.createElement("li",{className:`${t.type}-event`,key:n},t.content))))))}function p(t){return u.month()===t.month()?e.createElement("div",null,e.createElement("div",null,t.month()),e.createElement("div",null,"Events")):t.month()}const f=n.div`
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
`;var v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(l,{dateCellRender:m,monthCellRender:p});return e.createElement(f,null,t)}});const b=t(),g=function(e){return e.valueOf()>b.valueOf()};const E=n.div`
  .wrapped-calendar {
    width: 300px;
    border: 1px solid #f0f0f0;
    border-radius: 3px;
    padding: 8px;
  }
`;var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"wrapped-calendar"},e.createElement(l,{disabledDate:g,shape:"card"}));return e.createElement(E,null,t)}});function y(e){console.log(e.format("L"))}function h(e,t){console.log("Visible month changed to %s from <%s>",e.format("YYYY-MM"),t)}const x=n.div``;var S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement(l,{onSelect:y,defaultPanelValue:()=>t("2018-01","YYYY-MM",!0),onPanelChange:h});return e.createElement(x,null,n)}});const w=n.div``;var j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",{style:{border:"1px solid #f0f0f0"}},e.createElement(l,{shape:"panel",defaultValue:t().add(1,"days")}));return e.createElement(w,null,n)}});function M(e){console.log(e.format())}function O(t){const n=a.solar2lunar(t.year(),t.month(),t.date());return e.createElement("div",{className:"custom-cell"},t.date(),e.createElement("span",null,1===n.lDay?n.monthCn:n.dayCn))}const N=n.div`
  .custom-cell {
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }
`;var Y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(l,{onSelect:M,dateCellRender:O,defaultValue:t().add(1,"days")}));return e.createElement(N,null,n)}});const z={};z._basic=c,z._card=i,z["_custom-cell"]=v,z._disabled=_,z["_default-visible-month"]=S,z._panel=j,z._lunar=Y;export default z;
