import{r as e,X as t,a2 as l,B as n}from"./index.db891132.js";import{q as r}from"./styled-components.browser.esm.2d3384e1.js";const o=e.createElement(t,null,e.createElement(t.Item,null,"Option 1"),e.createElement(t.Item,null,"Option 2"),e.createElement(t.Item,null,"Option 3"),e.createElement(t.Item,null,"Option 4"));const i=r.div``;var c=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,e.createElement(l,{trigger:e.createElement("button",null,"Hello dropdown"),triggerType:["click","hover"],afterOpen:()=>console.log("after open")},o));return e.createElement(i,null,t)}});const a=e.createElement(t,null,e.createElement(t.Item,null,"Option 1"),e.createElement(t.Item,null,"Option 2"),e.createElement(t.Item,null,"Option 3"),e.createElement(t.Item,null,"Option 4"));class m extends e.Component{constructor(){super(...arguments),this.state={visible:!1},this.toggleVisible=()=>{this.setState({visible:!this.state.visible})},this.onVisibleChange=e=>{this.setState({visible:e})}}render(){return e.createElement("div",null,e.createElement("div",{style:{marginBottom:"20px"}},e.createElement(n,{onClick:this.toggleVisible,ref:"button"},"Toggle Overlay")),e.createElement(l,{trigger:e.createElement("span",null,"Hello dropdown"),triggerType:"click",visible:this.state.visible,onVisibleChange:this.onVisibleChange,safeNode:()=>this.refs.button},a))}}const s=r.div``;var u=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(m,null);return e.createElement(s,null,t)}});const p=e.createElement(t,null,e.createElement(t.Item,null,"Option 1"),e.createElement(t.Item,null,"Option 2"),e.createElement(t.Item,null,"Option 3"),e.createElement(t.Item,null,"Option 4"));const g=r.div``;var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,e.createElement(l,{trigger:e.createElement("button",null,"Hello dropdown"),triggerType:["click","hover"],afterOpen:()=>console.log("after open")},p));return e.createElement(g,null,t)}});const d=e.createElement(t,null,e.createElement(t.Item,null,"Option 1"),e.createElement(t.Item,null,"Option 2"),e.createElement(t.Item,null,"Option 3"),e.createElement(t.Item,null,"Option 4"));const b=r.div``;var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(l,{trigger:e.createElement("a",null,"Click me"),triggerType:"click"},d);return e.createElement(b,null,t)}});const f={};f._accessibility=c,f._controlled=u,f._basic=E,f["_trigger-type"]=O;export default f;