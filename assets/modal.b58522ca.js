import{r as e,B as t,al as n,b as l}from"./index.db891132.js";import{q as a}from"./styled-components.browser.esm.2d3384e1.js";const r=a.div`
  .custom-content {
    height: 2000px;
  }
`;var c=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:()=>{const[a,c]=e.useState(!1);return e.createElement(r,null,e.createElement("div",null,e.createElement(t,{onClick:()=>{c(!0)}},"打开Modal"),e.createElement(n,{title:"标题",description:"描述区域",visible:a,onClose:()=>{c(!1)},operations:e.createElement(e.Fragment,null,e.createElement(t,{type:"secondary"},e.createElement(l,{type:"edit"}),"编辑"),e.createElement(t,{type:"secondary"},e.createElement(l,{type:"success"}),"保存"))},e.createElement("div",{className:"custom-content"}))))}});const s=a.div`
  .custom-content {
    height: 2000px;
  }
`;var o=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:()=>{const[a,r]=e.useState(!1),[c,o]=e.useState(!0);return e.createElement(s,null,e.createElement("div",null,e.createElement(t,{onClick:()=>{r(!0)}},"打开Modal"),e.createElement(n,{title:"标题",description:"描述区域",visible:a,onClose:()=>{r(!1)},sideDrawerLabel:"侧栏",sideDrawer:e.createElement("div",{className:"custom-content"}),sideDrawerVisible:c,onSideDrawerVisibleChange:o,operations:e.createElement(e.Fragment,null,e.createElement(t,{type:"secondary"},e.createElement(l,{type:"edit"}),"编辑"),e.createElement(t,{type:"secondary"},e.createElement(l,{type:"success"}),"保存"))},e.createElement("div",{className:"custom-content"}))))}});const i=a.div`
  .custom-content {
    height: 2000px;
  }
`;var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:()=>{const[a,r]=e.useState(!1),[c,s]=e.useState(!0),[o,m]=e.useState("标题");return e.createElement(i,null,e.createElement("div",null,e.createElement(t,{onClick:()=>{r(!0)}},"打开Modal"),e.createElement(n,{title:o,titleEditable:!0,onEditTitleChange:m,visible:a,onClose:()=>{r(!1)},sideDrawerLabel:"侧栏",sideDrawer:e.createElement("div",{className:"custom-content"}),sideDrawerVisible:c,onSideDrawerVisibleChange:s,operations:e.createElement(e.Fragment,null,e.createElement(t,{type:"secondary"},e.createElement(l,{type:"edit"}),"编辑"),e.createElement(t,{type:"secondary"},e.createElement(l,{type:"success"}),"保存"))},e.createElement("div",{className:"custom-content"}))))}});const d={};d._basic=c,d["_side-drawer"]=o,d["_title-editable"]=m;export default d;
