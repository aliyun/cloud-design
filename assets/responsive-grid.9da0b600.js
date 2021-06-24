import{r as e,a5 as t,ag as r}from"./index.672a70f3.js";import{q as a}from"./styled-components.browser.esm.f3e9ec77.js";const{Cell:s}=r,o=["desktop","tablet","phone"];class l extends e.exports.Component{constructor(){super(...arguments),this.state={device:"desktop"},this.onChange=e=>{this.setState({device:e})}}render(){const{device:a}=this.state;return e.exports.createElement("div",{className:"list"},e.exports.createElement(t.Group,{shape:"button",onChange:this.onChange,dataSource:o,defaultValue:"desktop"}),e.exports.createElement("br",null),e.exports.createElement("br",null),e.exports.createElement("div",{className:`list-item ${a}`},e.exports.createElement(r,{gap:10,device:a},e.exports.createElement(s,{className:"mygrid grid-12",colSpan:12},"12"),e.exports.createElement(s,{className:"mygrid grid-6",colSpan:6},"6"),e.exports.createElement(s,{className:"mygrid grid-6",colSpan:6},"6"),e.exports.createElement(s,{className:"mygrid grid-4",colSpan:4},"4"),e.exports.createElement(s,{className:"mygrid grid-4",colSpan:4},"4"),e.exports.createElement(s,{className:"mygrid grid-4",colSpan:4},"4"),e.exports.createElement(s,{className:"mygrid grid-3",colSpan:3},"3"),e.exports.createElement(s,{className:"mygrid grid-3",colSpan:3},"3"),e.exports.createElement(s,{className:"mygrid grid-3",colSpan:3},"3"),e.exports.createElement(s,{className:"mygrid grid-3",colSpan:3},"3"))))}}const n=a.div`
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
`;var i=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(l,null);return e.exports.createElement(n,null,t)}});const c={};c._basic=i;export default c;
