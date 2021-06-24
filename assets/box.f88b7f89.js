import{r as e,j as t,a7 as r}from"./index.672a70f3.js";import{q as s}from"./styled-components.browser.esm.f3e9ec77.js";class o extends e.exports.Component{render(){return e.exports.createElement("div",{className:"list"},e.exports.createElement("div",{className:"list-item"},e.exports.createElement(t,{direction:"row",align:"center",style:{height:90}},e.exports.createElement(t,{className:"box-180-50"}),e.exports.createElement(t,{className:"box-180-50"}),e.exports.createElement(t,{className:"box-180-50"}),e.exports.createElement(t,{className:"box-180-50"}))),e.exports.createElement("div",{className:"list-item"},e.exports.createElement(t,{direction:"row",justify:"center"},e.exports.createElement(t,{className:"box-180-50"}),e.exports.createElement(t,{className:"box-180-50"}),e.exports.createElement(t,{className:"box-180-50"}),e.exports.createElement(t,{className:"box-180-50"}))),e.exports.createElement("div",{className:"list-item"},e.exports.createElement(t,{direction:"row",justify:"center",padding:20},e.exports.createElement(t,{className:"box-180-50"}),e.exports.createElement(t,{className:"box-180-50"}),e.exports.createElement(t,{className:"box-180-50"}),e.exports.createElement(t,{className:"box-180-50"}))))}}const a=s.div`
  .list {
    position: relative;
  }
  .list-item {
    position: relative;
    background: #ddd;
    border: 1px solid #eee;
    margin-bottom: 20px;
  }
  .box-180-50 {
    background: #5584ff;
    width: 180px;
    height: 50px;
    border: 1px solid #ddd;
  }
  .box {
    background: #5584ff;
    min-height: 100%;
  }
  .distinct {
    background: #46bc15;
  }
`;var l=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(o,null);return e.exports.createElement(a,null,t)}});class i extends e.exports.Component{render(){return e.exports.createElement("div",{className:"list"},e.exports.createElement("div",{className:"list-item"},e.exports.createElement(t,{spacing:20},e.exports.createElement("div",{className:"border-box height-30"}),e.exports.createElement("div",{className:"border-box height-30"}),e.exports.createElement("div",{className:"border-box height-30"}),e.exports.createElement("div",{className:"border-box height-30"}))))}}const n=s.div`
  .list {
    position: relative;
  }
  .list-item {
    position: relative;
    background: #ddd;
    border: 1px solid #eee;
    margin-bottom: 20px;
  }
  .child {
    width: 100%;
    height: 100%;
    background: 'red';
  }
  .border-box {
    background: #5584ff;
  }
  .height-30 {
    height: 30px;
  }
`;var c=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(i,null);return e.exports.createElement(n,null,t)}});class m extends e.exports.Component{render(){return e.exports.createElement("div",{className:"list"},e.exports.createElement("div",{className:"list-item"},e.exports.createElement(t,{spacing:20},e.exports.createElement("div",{className:"box height-30"}),e.exports.createElement("div",{className:"box height-30"}),e.exports.createElement("div",{className:"box height-30"}),e.exports.createElement("div",{className:"box height-30"}))),e.exports.createElement("div",{className:"list-item"},e.exports.createElement(t,{spacing:20,direction:"row"},e.exports.createElement("div",{className:"box width-30 height-30"}),e.exports.createElement("div",{className:"box width-30 height-30"}),e.exports.createElement("div",{className:"box width-30 height-30"}),e.exports.createElement("div",{className:"box width-30 height-30"}))))}}const x=s.div`
  .list {
    position: relative;
  }
  .list-item {
    position: relative;
    background: #ddd;
    border: 1px solid #eee;
    margin-bottom: 20px;
    min-height: 30px;
  }
  .box {
    background: #5584ff;
  }

  .height-30 {
    height: 30px;
  }

  .width-30 {
    width: 30px;
  }
`;var d=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(m,null);return e.exports.createElement(x,null,t)}});class p extends e.exports.Component{render(){return e.exports.createElement("div",{className:"list"},e.exports.createElement("div",{className:"list-item"},e.exports.createElement(t,{direction:"row",align:"center",padding:20,className:"box"},e.exports.createElement("div",{className:"box-180-50"}),e.exports.createElement("div",{className:"box-180-50"}),e.exports.createElement("div",{className:"box-180-50"}),e.exports.createElement("div",{className:"box-180-50"}))),e.exports.createElement("div",{className:"list-item"},e.exports.createElement(t,{direction:"row"},e.exports.createElement(t,{className:"box-180-50 box"}),e.exports.createElement(t,{className:"box-180-50 box"}),e.exports.createElement(t,{margin:[0,20],className:"box-180-50 box"}),e.exports.createElement(t,{className:"box-180-50 box"}))))}}const b=s.div`
  .list {
    position: relative;
  }
  .list-item {
    position: relative;
    background: #ddd;
    border: 1px solid #eee;
    margin-bottom: 20px;
  }
  .box-180-50 {
    width: 180px;
    height: 50px;
    border: 1px solid #5584ff;
    background: #fff;
  }
  .box {
    background: #5584ff;
    min-height: 100%;
    border: 1px solid #ddd;
  }
  .distinct {
    background: #46bc15;
  }
`;var h=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(p,null);return e.exports.createElement(b,null,t)}});class E extends e.exports.Component{constructor(){super(...arguments),this.state={wrap:!0},this.onSwitchChange=e=>{this.setState({wrap:e})}}render(){return e.exports.createElement("div",{className:"list"},e.exports.createElement(r,{style:{width:70},defaultChecked:!0,checkedChildren:"wrap",onChange:this.onSwitchChange}),e.exports.createElement("div",{className:"list-item"},e.exports.createElement(t,{spacing:20,wrap:this.state.wrap,direction:"row"},e.exports.createElement("div",{className:"box-180-50"}),e.exports.createElement("div",{className:"box-180-50"}),e.exports.createElement("div",{className:"box-180-50"}),e.exports.createElement("div",{className:"box-180-50"}),e.exports.createElement("div",{className:"box-180-50"}),e.exports.createElement("div",{className:"box-180-50"}),e.exports.createElement("div",{className:"box-180-50"}),e.exports.createElement("div",{className:"box-180-50"}),e.exports.createElement("div",{className:"box-180-50"}))))}}const g=s.div`
  .list {
    position: relative;
  }
  .list-item {
    position: relative;
    background: #ddd;
    border: 1px solid #eee;
    margin-bottom: 20px;
    min-height: 50px;
  }
  .box-180-50 {
    background: #5584ff;
    width: 180px;
    height: 50px;
  }
`;var u=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(E,null);return e.exports.createElement(g,null,t)}});const v={};v["_align&justify"]=l,v._basic=c,v._direction=d,v["_padding&margin"]=h,v._wrap=u;export default v;
