import{r as e,E as t,am as a}from"./index.4543a34a.js";import{q as r}from"./styled-components.browser.esm.09d3b94c.js";const{Cell:l}=a,n=["desktop","tablet","phone"];class i extends e.Component{constructor(){super(...arguments),this.state={device:"desktop"},this.onChange=e=>{this.setState({device:e})}}render(){const{device:r}=this.state;return e.createElement("div",{className:"list"},e.createElement(t.Group,{shape:"button",onChange:this.onChange,dataSource:n,defaultValue:"desktop"}),e.createElement("br",null),e.createElement("br",null),e.createElement("div",{className:`list-item ${r}`},e.createElement(a,{gap:10,device:r},e.createElement(l,{className:"mygrid grid-12",colSpan:12},"12"),e.createElement(l,{className:"mygrid grid-6",colSpan:6},"6"),e.createElement(l,{className:"mygrid grid-6",colSpan:6},"6"),e.createElement(l,{className:"mygrid grid-4",colSpan:4},"4"),e.createElement(l,{className:"mygrid grid-4",colSpan:4},"4"),e.createElement(l,{className:"mygrid grid-4",colSpan:4},"4"),e.createElement(l,{className:"mygrid grid-3",colSpan:3},"3"),e.createElement(l,{className:"mygrid grid-3",colSpan:3},"3"),e.createElement(l,{className:"mygrid grid-3",colSpan:3},"3"),e.createElement(l,{className:"mygrid grid-3",colSpan:3},"3"))))}}const c=r.div`
  .list {
    position: relative;
  }
  .list-item {
    position: relative;
    border: 1px solid #eee;
    margin-bottom: 20px;
  }
  .phone {
    width: 30%;
  }
  .tablet {
    width: 60%;
  }
  .child {
    width: 100%;
    height: 100%;
    background: 'red';
  }
  .mygrid {
    display: block;
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
  .grid-12 {
    background: rgba(59, 154, 255, 0.25);
  }
  .grid-6 {
    background: rgba(59, 154, 255, 1);
  }
  .grid-4 {
    background: rgba(59, 154, 255, 0.25);
  }
  .grid-3 {
    background: rgba(59, 154, 255, 1);
  }
`;var s=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(i,null);return e.createElement(c,null,t)}});const d={};d._basic=s;export default d;
