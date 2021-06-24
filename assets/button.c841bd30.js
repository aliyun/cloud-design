var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,l=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,s=(e,t)=>{for(var r in t||(t={}))n.call(t,r)&&l(e,r,t[r]);if(o)for(var r of o(t))a.call(t,r)&&l(e,r,t[r]);return e},p=(e,o)=>t(e,r(o));import{r as c,B as i,d as m,j as d}from"./index.672a70f3.js";import{q as x}from"./styled-components.browser.esm.f3e9ec77.js";const g=x.div``;var y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=c.exports.createElement("div",null,c.exports.createElement(i.Group,null,c.exports.createElement(i,{type:"primary","aria-label":"prompt button"},c.exports.createElement(m,{type:"prompt"})),c.exports.createElement(i,{type:"primary","aria-label":"clock button"},c.exports.createElement(m,{type:"clock"})),c.exports.createElement(i,{type:"primary","aria-label":"set button"},c.exports.createElement(m,{type:"set"}))));return c.exports.createElement(g,null,e)}});const u={component:"a",href:"http://www.alibaba.com",target:"_blank"};const E=x.div``;var b=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=c.exports.createElement(d,{direction:"row",spacing:20},c.exports.createElement(i,p(s({},u),{type:"primary"}),"alibaba.com"),c.exports.createElement(i,p(s({},u),{type:"secondary"}),"alibaba.com"),c.exports.createElement(i,p(s({},u),{type:"normal"}),"alibaba.com"),c.exports.createElement(i,p(s({},u),{loading:!0}),"alibaba.com loading"));return c.exports.createElement(E,null,e)}});class h extends c.exports.Component{constructor(e,t){super(e,t),this.setLoading=()=>{this.setState({loading:!0})},this.state={loading:!1}}render(){return c.exports.createElement("div",null,c.exports.createElement(i,{type:"secondary",iconSize:"xs",loading:!0,icons:{loading:c.exports.createElement(m,{type:"loading",style:{color:"#1b58f4"}})}},"Custom loading icon"),"  ",c.exports.createElement(i,{type:"primary",loading:this.state.loading,onClick:this.setLoading,icons:{loading:c.exports.createElement(m,{type:"loading",style:{color:"#1b58f4"}})}},"Click to loading and show loading icon"))}}const f=x.div``;var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=c.exports.createElement(h,null);return c.exports.createElement(f,null,e)}});const v=x.div`
  .ghost-light-background {
    display: inline-block;
    height: 100px;
    line-height: 100px;
    width: 50%;
    background: #ebecf0;
    margin-bottom: 20px;
    padding-left: 10px;
    box-sizing: border-box;
  }
  .ghost-dark-background {
    display: inline-block;
    height: 100px;
    line-height: 100px;
    width: 50%;
    background: #333;
    margin-bottom: 20px;
    padding-left: 10px;
    box-sizing: border-box;
  }
`;var k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=c.exports.createElement("div",null,c.exports.createElement(d,{wrap:!0,direction:"column",spacing:20},c.exports.createElement(d,{direction:"row",spacing:20},c.exports.createElement(i,{type:"primary"},"Primary"),c.exports.createElement(i,{component:"a",type:"primary",disabled:!0},"Primary")),c.exports.createElement(d,{direction:"row",spacing:20},c.exports.createElement(i,{type:"secondary"},"Secondary"),c.exports.createElement(i,{type:"secondary",disabled:!0},"Secondary")),c.exports.createElement(d,{direction:"row",spacing:20},c.exports.createElement(i,{type:"normal"},"Normal"),c.exports.createElement(i,{type:"normal",disabled:!0},"Normal"))),c.exports.createElement("br",null),c.exports.createElement("div",null,c.exports.createElement("div",{className:"ghost-light-background"},c.exports.createElement(i,{ghost:"light",disabled:!0},"Ghost Light")),c.exports.createElement("div",{className:"ghost-dark-background"},c.exports.createElement(i,{ghost:"dark",disabled:!0},"Ghost Dark"))));return c.exports.createElement(v,null,e)}});const w=x.div`
  .ghost-light-background {
    display: inline-block;
    height: 100px;
    line-height: 100px;
    width: 50%;
    background: #ebecf0;
    margin-bottom: 20px;
    padding-left: 10px;
    box-sizing: border-box;
  }
  .ghost-dark-background {
    display: inline-block;
    height: 100px;
    line-height: 100px;
    width: 50%;
    background: #333;
    margin-bottom: 20px;
    padding-left: 10px;
    box-sizing: border-box;
  }
`;var S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=c.exports.createElement("div",{style:{clear:"both"}},c.exports.createElement("div",{className:"ghost-light-background"},c.exports.createElement(i,{ghost:"light"},"Ghost light")),c.exports.createElement("div",{className:"ghost-dark-background"},c.exports.createElement(i,{ghost:"dark"},"Ghost dark")));return c.exports.createElement(w,null,e)}});const z=x.div``;var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=c.exports.createElement("div",null,c.exports.createElement(i.Group,{style:{marginRight:20}},c.exports.createElement(i,{type:"primary"},"OK"),c.exports.createElement(i,{type:"secondary"},"Cancel")),c.exports.createElement(i.Group,null,c.exports.createElement(i,{disabled:!0},"Left"),c.exports.createElement(i,{disabled:!0},"Middle"),c.exports.createElement(i,{disabled:!0},"Right")),c.exports.createElement("br",null),c.exports.createElement("br",null),c.exports.createElement(i.Group,{style:{marginRight:20}},c.exports.createElement(i,{type:"primary"},c.exports.createElement(m,{type:"arrow-left"})," Backward"),c.exports.createElement(i,{type:"primary"},"Forward ",c.exports.createElement(m,{type:"arrow-right"}))),c.exports.createElement(i.Group,null,c.exports.createElement(i,{type:"primary"},c.exports.createElement(m,{type:"prompt"})),c.exports.createElement(i,{type:"primary"},c.exports.createElement(m,{type:"clock"})),c.exports.createElement(i,{type:"primary"},c.exports.createElement(m,{type:"set"}))));return c.exports.createElement(z,null,e)}});class j extends c.exports.Component{constructor(e,t){super(e,t),this.setLoading=()=>{this.setState({loading:!0})},this.state={loading:!1}}render(){return c.exports.createElement(d,{direction:"row",spacing:20},c.exports.createElement(i,{type:"secondary",iconSize:"xs",loading:!0,icons:{loading:c.exports.createElement(m,{type:"loading",style:{color:"orange"}})}},"Custom loading icon"),c.exports.createElement(i,{type:"primary",loading:this.state.loading,onClick:this.setLoading,icons:{loading:c.exports.createElement(m,{type:"loading",style:{color:"orange"}})}},"Click to loading and show loading icon"))}}const M=x.div``;var T=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=c.exports.createElement("div",null,c.exports.createElement(d,{direction:"row",spacing:20},c.exports.createElement(i,null,c.exports.createElement(m,{type:"atm"})," ATM"),c.exports.createElement(i,{text:!0},c.exports.createElement(m,{type:"atm"})," ATM"),c.exports.createElement(i,{warning:!0},c.exports.createElement(m,{type:"atm"})," ATM"),c.exports.createElement(i,{iconSize:"xxs"},c.exports.createElement(m,{type:"arrow-left"})," ARROW")),c.exports.createElement("br",null),c.exports.createElement(j,null));return c.exports.createElement(M,null,e)}});class C extends c.exports.Component{constructor(e,t){super(e,t),this.setLoading=()=>{this.setState({loading:!0})},this.state={loading:!1}}render(){return c.exports.createElement(d,{direction:"row",spacing:20},c.exports.createElement(i,{type:"secondary",loading:!0},"Loading"),c.exports.createElement(i,{type:"primary",loading:this.state.loading,onClick:this.setLoading},"Click to loading"))}}const N=x.div``;var G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=c.exports.createElement(C,null);return c.exports.createElement(N,null,e)}});const L=x.div``;var P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=c.exports.createElement("div",null,c.exports.createElement(i,{warning:!0},c.exports.createElement(m,{type:"atm"})));return c.exports.createElement(L,null,e)}});const B=x.div``;var R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=c.exports.createElement("div",null,c.exports.createElement(d,{direction:"row",spacing:20},c.exports.createElement(i,{type:"primary",size:"large"},c.exports.createElement(m,{type:"atm"}),"Large"),c.exports.createElement(i,{type:"primary"},c.exports.createElement(m,{type:"atm"}),"Medium"),c.exports.createElement(i,{type:"primary",size:"small"},c.exports.createElement(m,{type:"atm"}),"Small")),c.exports.createElement("br",null),c.exports.createElement(i.Group,{size:"large"},c.exports.createElement(i,{className:"basic-button"},"Button"),c.exports.createElement(i,{className:"basic-button"},"Button"),c.exports.createElement(i,{className:"basic-button"},"Button")));return c.exports.createElement(B,null,e)}});const A=x.div``;var D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=c.exports.createElement("div",null,c.exports.createElement(d,{direction:"row",spacing:20},c.exports.createElement(i,{type:"normal"},"Normal"),c.exports.createElement(i,{type:"primary",size:"small"},"思考"),c.exports.createElement(i,{type:"primary",size:"small"},"思考的"),c.exports.createElement(i,{type:"primary",size:"small"},"思考的到"),c.exports.createElement(i,{type:"primary"},"思考"),c.exports.createElement(i,{type:"primary"},"思考的"),c.exports.createElement(i,{type:"primary"},"思考的到"),c.exports.createElement(i,{type:"primary",size:"large"},"思考"),c.exports.createElement(i,{type:"primary",size:"large"},"思考的"),c.exports.createElement(i,{type:"primary",size:"large"},"思考的到"),c.exports.createElement(i,{type:"secondary",size:"large"},"Secondary")),c.exports.createElement("br",null),c.exports.createElement(d,{direction:"row",spacing:20},c.exports.createElement(i,{type:"normal",text:!0},"Normal"),c.exports.createElement(i,{type:"primary",text:!0},"Primary"),c.exports.createElement(i,{type:"secondary",text:!0},"Secondary")),c.exports.createElement("br",null),c.exports.createElement(d,{direction:"row",spacing:20},c.exports.createElement(i,{type:"normal",warning:!0},"Normal"),c.exports.createElement(i,{type:"primary",warning:!0},"Primary")));return c.exports.createElement(A,null,e)}});const q={};q._accessibility=y,q._component=b,q["_custom-icons"]=_,q._disabled=k,q._ghost=S,q._group=O,q._icon=T,q._loading=G,q["_only-icon"]=P,q._size=R,q._type=D;export default q;