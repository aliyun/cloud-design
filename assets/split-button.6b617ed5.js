import{r as e,a9 as t,j as o}from"./index.672a70f3.js";import{q as r}from"./styled-components.browser.esm.f3e9ec77.js";const{Item:l}=t,n=["Undo","Redo","Cut","Copy","Paste"].map((t=>e.exports.createElement(l,{key:t},t)));const s=r.div``;var a=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const o=e.exports.createElement("div",null,e.exports.createElement(t,{label:"Edit Document",type:"primary",triggerProps:{"aria-label":"click to see more menu option"}},n));return e.exports.createElement(s,null,o)}});const{Item:c}=t,i=["Undo","Redo","Cut","Copy","Paste"].map((t=>e.exports.createElement(c,{key:t},t)));const m=r.div``;var p=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const r=e.exports.createElement(o,{direction:"row",spacing:20},e.exports.createElement(t,{label:"Edit Document"},i),e.exports.createElement(t,{label:"Edit Document",type:"secondary"},i),e.exports.createElement(t,{label:"Edit Document",type:"primary"},i));return e.exports.createElement(m,null,r)}});const{Item:u}=t,d=["Undo","Redo","Cut","Copy","Paste"].map((t=>e.exports.createElement(u,{key:t},t)));class E extends e.exports.Component{constructor(){super(...arguments),this.state={visible:!1,label:"Choose Action"},this.onSelect=e=>{this.setState({visible:!1,label:e})},this.changeVisible=e=>{this.setState({visible:e})}}render(){const{visible:o,label:r}=this.state;return e.exports.createElement(t,{label:r,visible:o,onVisibleChange:this.changeVisible,onItemClick:this.onSelect,type:"secondary"},d)}}const b=r.div``;var x=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(E,null);return e.exports.createElement(b,null,t)}});const{Item:y,Group:_,Divider:f}=t;const g=r.div``;var C=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const o=e.exports.createElement(t,{type:"primary",label:"Edit Document",onItemClick:e=>console.log(e)},e.exports.createElement(y,null,"Undo"),e.exports.createElement(y,null,"Redo"),e.exports.createElement(f,null),e.exports.createElement(_,null,e.exports.createElement(y,{helper:"CTRL + X"},"Cut"),e.exports.createElement(y,{helper:"CTRL + C"},"Copy"),e.exports.createElement(y,{helper:"CTRL + V"},"Paste")));return e.exports.createElement(g,null,o)}});const{Item:v}=t,h=["Undo","Redo","Cut","Copy","Paste"].map((t=>e.exports.createElement(v,{key:t},t)));const S=r.div``;var z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const r=e.exports.createElement(o,{direction:"row",spacing:20},e.exports.createElement(t,{label:"Edit Document",size:"small",type:"secondary"},h),e.exports.createElement(t,{label:"Edit Document",size:"medium",type:"secondary"},h),e.exports.createElement(t,{label:"Edit Document",size:"large",type:"secondary"},h));return e.exports.createElement(S,null,r)}});const D={};D._accessibility=a,D._basic=p,D._composite=x,D._menu=C,D._size=z;export default D;