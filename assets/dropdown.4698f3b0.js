import{r as e,D as t,a1 as l,B as n}from"./index.4272a92a.js";import{q as r}from"./styled-components.browser.esm.6c715b82.js";const o=e.createElement(t,null,e.createElement(t.Item,null,"Option 1"),e.createElement(t.Item,null,"Option 2"),e.createElement(t.Item,null,"Option 3"),e.createElement(t.Item,null,"Option 4"));const i=r.div``;var a=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,e.createElement(l,{trigger:e.createElement("button",null,"Hello dropdown"),triggerType:["click","hover"],afterOpen:()=>console.log("after open")},o));return e.createElement(i,null,t)}});const c=e.createElement(t,null,e.createElement(t.Item,null,"Option 1"),e.createElement(t.Item,null,"Option 2"),e.createElement(t.Item,null,"Option 3"),e.createElement(t.Item,null,"Option 4"));class s extends e.Component{constructor(){super(...arguments),this.state={visible:!1},this.toggleVisible=()=>{this.setState({visible:!this.state.visible})},this.onVisibleChange=e=>{this.setState({visible:e})}}render(){return e.createElement("div",null,e.createElement("div",{style:{marginBottom:"20px"}},e.createElement(n,{onClick:this.toggleVisible,ref:"button"},"Toggle Overlay")),e.createElement(l,{trigger:e.createElement("span",null,"Hello dropdown"),triggerType:"click",visible:this.state.visible,onVisibleChange:this.onVisibleChange,safeNode:()=>this.refs.button},c))}}const m=r.div``;var u=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(s,null);return e.createElement(m,null,t)}});const g=e.createElement(t,null,e.createElement(t.Item,null,"Option 1"),e.createElement(t.Item,null,"Option 2"),e.createElement(t.Item,null,"Option 3"),e.createElement(t.Item,null,"Option 4"));const p=r.div``;var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(l,{trigger:e.createElement("a",null,"Click me"),triggerType:"click"},g);return e.createElement(p,null,t)}});const b={};b._basic=a,b._controlled=u,b["_trigger-type"]=E;export default b;
