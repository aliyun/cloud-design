import{r as e,Q as t}from"./index.4543a34a.js";import{q as n}from"./styled-components.browser.esm.09d3b94c.js";import{C as l}from"./index.4d7cb9e7.js";import{s as a}from"./solarlunar.min.2270d141.js";function o(e){console.log(e.format("L"))}function r(e,t){console.log("Visible month changed to %s from <%s>",e.format("YYYY-MM"),t)}const c=n.div``;var d=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement(l,{onSelect:o,defaultPanelValue:()=>t("2018-01","YYYY-MM",!0),onPanelChange:r});return e.createElement(c,null,n)}});function s(e){console.log(e)}const i=n.div`
  .wrapped-calendar {
    width: 300px;
    border: 1px solid #eee;
    border-radius: 3px;
  }
`;var u=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"wrapped-calendar"},e.createElement(l,{onSelect:s,shape:"card"}));return e.createElement(i,null,t)}});const m=t();function p(t){const n=t.date();if(m.month()!==t.month())return n;let l;switch(n){case 1:l=[{type:"primary",content:"Event 1"},{type:"normal",content:"Event 2"}];break;case 10:l=[{type:"normal",content:"Event 3"},{type:"normal",content:"Event 4"}];break;case 11:l=[{type:"primary",content:"Event 5"},{type:"primary",content:"Event 6"}];break;default:l=[]}return e.createElement("div",{className:"custom-calendar-cell"},e.createElement("div",{className:"custom-calendar-cell-value"},n),e.createElement("div",{className:"custom-calendar-cell-content"},e.createElement("ul",{className:"event-list"},l.map(((t,n)=>e.createElement("li",{className:`${t.type}-event`,key:n},t.content))))))}function f(t){return m.month()===t.month()?e.createElement("div",null,e.createElement("div",null,t.month()),e.createElement("div",null,"Events")):t.month()}const v=n.div`
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
`;var b=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(l,{dateCellRender:p,monthCellRender:f});return e.createElement(v,null,t)}});function g(e){console.log(e.format("L"))}const E=n.div``;var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(l,{onSelect:g,defaultValue:t().add(1,"days")}));return e.createElement(E,null,n)}});const y=t(),h=function(e){return e.valueOf()>y.valueOf()};const x=n.div`
  .wrapped-calendar {
    width: 300px;
    border: 1px solid #f0f0f0;
    border-radius: 3px;
    padding: 8px;
  }
`;var S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",{className:"wrapped-calendar"},e.createElement(l,{disabledDate:h,shape:"card"}));return e.createElement(x,null,t)}});function w(e){console.log(e.format())}function j(t){const n=a.solar2lunar(t.year(),t.month(),t.date());return e.createElement("div",{className:"custom-cell"},t.date(),e.createElement("span",null,1===n.lDay?n.monthCn:n.dayCn))}const M=n.div`
  .custom-cell {
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }
`;var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(l,{onSelect:w,dateCellRender:j,defaultValue:t().add(1,"days")}));return e.createElement(M,null,n)}});const N=n.div``;var Y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",{style:{border:"1px solid #f0f0f0"}},e.createElement(l,{shape:"panel",defaultValue:t().add(1,"days")}));return e.createElement(N,null,n)}});const z={};z["_default-visible-month"]=d,z._card=u,z["_custom-cell"]=b,z._basic=_,z._disabled=S,z._lunar=O,z._panel=Y;export default z;
