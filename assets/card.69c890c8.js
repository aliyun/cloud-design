var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,n=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,o=(e,o)=>{for(var l in o||(o={}))r.call(o,l)&&n(e,l,o[l]);if(t)for(var l of t(o))a.call(o,l)&&n(e,l,o[l]);return e};import{r as l,az as i,B as c,R as s,j as m}from"./index.6a707a19.js";import{q as p}from"./styled-components.browser.esm.a87ca0b6.js";const u={subTitle:"SubTitle",extra:l.exports.createElement(c,{text:!0,type:"primary"},"Link")};const d=p.div`
  .card-placeholder {
    height: 200px;
  }
`;var x=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=l.exports.createElement("div",null,l.exports.createElement(i,{free:!0,style:{width:300}},l.exports.createElement(i.Header,o({title:"Simple Card"},u)),l.exports.createElement(i.Content,null,"Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et. Ne petentium quaerendum nec, eos ex recteque mediocritatem, ex usu assum legendos temporibus. Ius feugiat pertinacia an, cu verterem praesent quo.")));return l.exports.createElement(d,null,e)}});var f=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:e=>{const[t,r]=l.exports.useState(!0);return s.createElement(i,{free:!0,contentHeight:"auto",style:{width:300}},s.createElement(i.CollapsableHead,{collapsed:t,onCollapsedChange:r},"项目标题"),t&&s.createElement(i.Content,null,"阿里云公共云控制台是一个包含了100+云产品的庞大产品集群，是一个结构复杂且庞大，目前仍在快速迭代更新的产品体系。我们通过大量实践、梳理和打磨，呈现出公共云控制台设计系统。将为阿里云公共云提供前沿创新、包容且智能的产品解决方案。提供轻松、可信赖的使用体验。呈现简洁有序、精致的视觉体验。"))}});var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:e=>{const[t,r]=l.exports.useState(!0);return s.createElement(i,{free:!0,contentHeight:"auto",style:{width:300}},s.createElement(i.Header,{title:"最新热点"}),s.createElement(i.Header,{title:"AI如何把招人的效率提高四成"}),s.createElement(i.Content,null,t?"阿里云公共云控制台是一个包含了100+云产品的庞大产品集群，是一个结构复杂且庞大，目前仍在快速迭代更新的产品体系。我们通过大量实践、梳理和打磨，呈现出公共云控制台设计系统。":"阿里云公共云控制台是一个包含了100+云产品的庞大产品集群，是一个结构复杂且庞大，目前仍在快速迭代更新的产品体系。我们通过大量实践、梳理和打磨，呈现出公共云控制台设计系统。将为阿里云公共云提供前沿创新、包容且智能的产品解决方案。提供轻松、可信赖的使用体验。呈现简洁有序、精致的视觉体验。"),s.createElement(i.CollapsableTail,{collapsed:t,onCollapsedChange:r},"展开更多"))}});const y={title:"Title",style:{width:300},subTitle:"Sub-title",extra:l.exports.createElement(c,{text:!0,type:"primary"},"Link")};const g=p.div``;var b=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=l.exports.createElement(m,{direction:"row",spacing:20},l.exports.createElement(i,{free:!0,style:{width:300}},l.exports.createElement(i.Header,o({title:"Simple Card"},y)),l.exports.createElement(i.Divider,null),l.exports.createElement(i.Content,null,"Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et. Ne petentium quaerendum nec, eos ex recteque mediocritatem, ex usu assum legendos temporibus. Ius feugiat pertinacia an, cu verterem praesent quo."),l.exports.createElement(i.Divider,null),l.exports.createElement(i.Actions,null,l.exports.createElement(c,{type:"primary",key:"action1",text:!0},"Action 1"),l.exports.createElement(c,{type:"primary",key:"action2",text:!0},"Action 2"))),l.exports.createElement(i,{free:!0,style:{width:300}},l.exports.createElement(i.Header,o({title:"Simple Card"},y)),l.exports.createElement(i.Divider,{inset:!0}),l.exports.createElement(i.Content,null,"Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et. Ne petentium quaerendum nec, eos ex recteque mediocritatem, ex usu assum legendos temporibus. Ius feugiat pertinacia an, cu verterem praesent quo."),l.exports.createElement(i.Divider,{inset:!0}),l.exports.createElement(i.Actions,null,l.exports.createElement(c,{type:"primary",key:"action1",text:!0},"Action 1"),l.exports.createElement(c,{type:"primary",key:"action2",text:!0},"Action 2"))));return l.exports.createElement(g,null,e)}});const X=p.div`
  .free-card {
    display: inline-block;
    width: 300px;
    vertical-align: top;
  }
  .free-card + .free-card {
    margin-left: 20px;
  }

  .free-card.custom {
    display: flex;
    justify-content: space-between;
    width: 500px;
    height: 200px;
  }

  .free-card.custom .next-card-media {
    height: 100%;
    width: 200px;
    flex-shrink: 0;
  }

  .free-card-main {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  .free-card-main .next-card-content-container {
    flex: 1;
  }

  .free-card-main .next-card-actions {
    text-align: right;
  }
`;var v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=l.exports.createElement("div",null,l.exports.createElement(i,{className:"free-card custom",free:!0},l.exports.createElement(i.Media,{image:"https://img.alicdn.com/tfs/TB1FNIOSFXXXXaWXXXXXXXXXXXX-260-188.png"}),l.exports.createElement("div",{className:"free-card-main"},l.exports.createElement(i.Header,{title:"Title",subTitle:"Sub Title",extra:l.exports.createElement(c,{type:"primary",text:!0},"Link")}),l.exports.createElement(i.Content,null,"Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et."),l.exports.createElement(i.Actions,null,l.exports.createElement(c,{type:"primary",key:"action1",text:!0},"Action 1"),l.exports.createElement(c,{type:"primary",key:"action2",text:!0},"Action 2")))),l.exports.createElement("br",null),l.exports.createElement(i,{className:"free-card",free:!0},l.exports.createElement(i.Media,{style:{height:140},image:"https://img.alicdn.com/tfs/TB1FNIOSFXXXXaWXXXXXXXXXXXX-260-188.png"}),l.exports.createElement(i.Header,{title:"Title",subTitle:"Sub Title",extra:l.exports.createElement(c,{type:"primary",text:!0},"Link")}),l.exports.createElement(i.Divider,null),l.exports.createElement(i.Content,null,"Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et. Ne petentium quaerendum nec, eos ex recteque mediocritatem, ex usu assum legendos temporibus. Ius feugiat pertinacia an, cu verterem praesent quo."),l.exports.createElement(i.Actions,null,l.exports.createElement(c,{type:"primary",key:"action1",text:!0},"Action 1"),l.exports.createElement(c,{type:"primary",key:"action2",text:!0},"Action 2"))));return l.exports.createElement(X,null,e)}});const h={extra:l.exports.createElement(i.DropDownActions,{actions:[{label:"Action1",onClick:()=>{console.log("Action1 clicked")}},{label:"Action2",onClick:()=>{console.log("Action2 clicked")}}]})};const _=p.div`
  .card-placeholder {
    height: 200px;
  }
`;var S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){return l.exports.createElement(_,null,l.exports.createElement("div",null,l.exports.createElement(i,{free:!0,style:{width:300}},l.exports.createElement(i.Header,o({title:"Simple Card"},h)),l.exports.createElement(i.Content,null,"Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et. Ne petentium quaerendum nec, eos ex recteque mediocritatem, ex usu assum legendos temporibus. Ius feugiat pertinacia an, cu verterem praesent quo."))))}});const T=p.div`
  .media-card {
    width: 300px;
  }

  .custom-card p {
    color: #999;
  }
`;var k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=l.exports.createElement(i,{className:"media-card",free:!0},l.exports.createElement(i.Media,null,l.exports.createElement("img",{src:"https://img.alicdn.com/tfs/TB1FNIOSFXXXXaWXXXXXXXXXXXX-260-188.png"})),l.exports.createElement(i.Header,{title:"Title",subTitle:"Sub Title",extra:[l.exports.createElement(c,{type:"primary",key:"action1",text:!0},"More")]}),l.exports.createElement(i.Content,null,"Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et. Ne petentium quaerendum nec, eos ex recteque mediocritatem, ex usu assum legendos temporibus. Ius feugiat pertinacia an, cu verterem praesent quo."),l.exports.createElement(i.Actions,null,l.exports.createElement(c,{type:"primary",key:"action1",text:!0},"Action 1"),l.exports.createElement(c,{type:"primary",key:"action2",text:!0},"Action 2")));return l.exports.createElement(T,null,e)}});const A={};A._basic=x,A["_collapsable-head"]=f,A["_collapsable-tail"]=E,A._divider=b,A._free=v,A["_header-actions"]=S,A._media=k;export default A;
