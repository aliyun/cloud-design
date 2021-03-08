var e=Object.assign;import{r as t,F as r,J as a,B as n}from"./index.e23bfa0a.js";import{q as l}from"./styled-components.browser.esm.9bbc5b35.js";const i={title:"Title",style:{width:300},subTitle:"Sub-title",extra:t.createElement(n,{text:!0,type:"primary"},"Link")};const c=l.div``;var o=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=t.createElement(r,{direction:"row",spacing:20},t.createElement(a,{free:!0,style:{width:300}},t.createElement(a.Header,e({title:"Simple Card"},i)),t.createElement(a.Divider,null),t.createElement(a.Content,null,"Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et. Ne petentium quaerendum nec, eos ex recteque mediocritatem, ex usu assum legendos temporibus. Ius feugiat pertinacia an, cu verterem praesent quo."),t.createElement(a.Divider,null),t.createElement(a.Actions,null,t.createElement(n,{type:"primary",key:"action1",text:!0},"Action 1"),t.createElement(n,{type:"primary",key:"action2",text:!0},"Action 2"))),t.createElement(a,{free:!0,style:{width:300}},t.createElement(a.Header,e({title:"Simple Card"},i)),t.createElement(a.Divider,{inset:!0}),t.createElement(a.Content,null,"Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et. Ne petentium quaerendum nec, eos ex recteque mediocritatem, ex usu assum legendos temporibus. Ius feugiat pertinacia an, cu verterem praesent quo."),t.createElement(a.Divider,{inset:!0}),t.createElement(a.Actions,null,t.createElement(n,{type:"primary",key:"action1",text:!0},"Action 1"),t.createElement(n,{type:"primary",key:"action2",text:!0},"Action 2"))));return t.createElement(c,null,l)}});var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:e=>{const[r,n]=t.useState(!0);return t.createElement(a,{free:!0,contentHeight:"auto",style:{width:300}},t.createElement(a.CollapsableHead,{collapsed:r,onCollapsedChange:n},"项目标题"),r&&t.createElement(a.Content,null,"阿里云公共云控制台是一个包含了100+云产品的庞大产品集群，是一个结构复杂且庞大，目前仍在快速迭代更新的产品体系。我们通过大量实践、梳理和打磨，呈现出公共云控制台设计系统。将为阿里云公共云提供前沿创新、包容且智能的产品解决方案。提供轻松、可信赖的使用体验。呈现简洁有序、精致的视觉体验。"))}});var u=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:e=>{const[r,n]=t.useState(!0);return t.createElement(a,{free:!0,contentHeight:"auto",style:{width:300}},t.createElement(a.Header,{title:"最新热点"}),t.createElement(a.Header,{title:"AI如何把招人的效率提高四成"}),t.createElement(a.Content,null,r?"阿里云公共云控制台是一个包含了100+云产品的庞大产品集群，是一个结构复杂且庞大，目前仍在快速迭代更新的产品体系。我们通过大量实践、梳理和打磨，呈现出公共云控制台设计系统。":"阿里云公共云控制台是一个包含了100+云产品的庞大产品集群，是一个结构复杂且庞大，目前仍在快速迭代更新的产品体系。我们通过大量实践、梳理和打磨，呈现出公共云控制台设计系统。将为阿里云公共云提供前沿创新、包容且智能的产品解决方案。提供轻松、可信赖的使用体验。呈现简洁有序、精致的视觉体验。"),t.createElement(a.CollapsableTail,{collapsed:r,onCollapsedChange:n},"展开更多"))}});const s=l.div`
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
`;var d=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",null,t.createElement(a,{className:"free-card custom",free:!0},t.createElement(a.Media,{image:"https://img.alicdn.com/tfs/TB1FNIOSFXXXXaWXXXXXXXXXXXX-260-188.png"}),t.createElement("div",{className:"free-card-main"},t.createElement(a.Header,{title:"Title",subTitle:"Sub Title",extra:t.createElement(n,{type:"primary",text:!0},"Link")}),t.createElement(a.Content,null,"Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et."),t.createElement(a.Actions,null,t.createElement(n,{type:"primary",key:"action1",text:!0},"Action 1"),t.createElement(n,{type:"primary",key:"action2",text:!0},"Action 2")))),t.createElement("br",null),t.createElement(a,{className:"free-card",free:!0},t.createElement(a.Media,{style:{height:140},image:"https://img.alicdn.com/tfs/TB1FNIOSFXXXXaWXXXXXXXXXXXX-260-188.png"}),t.createElement(a.Header,{title:"Title",subTitle:"Sub Title",extra:t.createElement(n,{type:"primary",text:!0},"Link")}),t.createElement(a.Divider,null),t.createElement(a.Content,null,"Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et. Ne petentium quaerendum nec, eos ex recteque mediocritatem, ex usu assum legendos temporibus. Ius feugiat pertinacia an, cu verterem praesent quo."),t.createElement(a.Actions,null,t.createElement(n,{type:"primary",key:"action1",text:!0},"Action 1"),t.createElement(n,{type:"primary",key:"action2",text:!0},"Action 2"))));return t.createElement(s,null,e)}});const p={subTitle:"SubTitle",extra:t.createElement(n,{text:!0,type:"primary"},"Link")};const E=l.div`
  .card-placeholder {
    height: 200px;
  }
`;var f=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const r=t.createElement("div",null,t.createElement(a,{free:!0,style:{width:300}},t.createElement(a.Header,e({title:"Simple Card"},p)),t.createElement(a.Content,null,"Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et. Ne petentium quaerendum nec, eos ex recteque mediocritatem, ex usu assum legendos temporibus. Ius feugiat pertinacia an, cu verterem praesent quo.")));return t.createElement(E,null,r)}});const y={extra:t.createElement(a.DropDownActions,{actions:[{label:"Action1",onClick:()=>{console.log("Action1 clicked")}},{label:"Action2",onClick:()=>{console.log("Action2 clicked")}}]})};const g=l.div`
  .card-placeholder {
    height: 200px;
  }
`;var x=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){return t.createElement(g,null,t.createElement("div",null,t.createElement(a,{free:!0,style:{width:300}},t.createElement(a.Header,e({title:"Simple Card"},y)),t.createElement(a.Content,null,"Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et. Ne petentium quaerendum nec, eos ex recteque mediocritatem, ex usu assum legendos temporibus. Ius feugiat pertinacia an, cu verterem praesent quo."))))}});const X=l.div`
  .media-card {
    width: 300px;
  }

  .custom-card p {
    color: #999;
  }
`;var b=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(a,{className:"media-card",free:!0},t.createElement(a.Media,null,t.createElement("img",{src:"https://img.alicdn.com/tfs/TB1FNIOSFXXXXaWXXXXXXXXXXXX-260-188.png"})),t.createElement(a.Header,{title:"Title",subTitle:"Sub Title",extra:[t.createElement(n,{type:"primary",key:"action1",text:!0},"More")]}),t.createElement(a.Content,null,"Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et. Ne petentium quaerendum nec, eos ex recteque mediocritatem, ex usu assum legendos temporibus. Ius feugiat pertinacia an, cu verterem praesent quo."),t.createElement(a.Actions,null,t.createElement(n,{type:"primary",key:"action1",text:!0},"Action 1"),t.createElement(n,{type:"primary",key:"action2",text:!0},"Action 2")));return t.createElement(X,null,e)}});const v={};v._divider=o,v["_collapsable-head"]=m,v["_collapsable-tail"]=u,v._free=d,v._basic=f,v["_header-actions"]=x,v._media=b;export default v;
