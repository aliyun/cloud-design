import{r as e,l as t,b as n,B as l}from"./index.9e4b8ce1.js";import{q as a}from"./styled-components.browser.esm.19571eea.js";function c(e){console.log(`switch to ${e}`)}const s=a.div`
  .large-width {
    width: 100px;
  }
`;var r=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{checkedChildren:"on",onChange:c,unCheckedChildren:"off"}),e.createElement("br",null),e.createElement(t,{defaultChecked:!1,onChange:c,size:"small"}),e.createElement("br",null),e.createElement(t,{className:"large-width",checkedChildren:"on",onChange:c,unCheckedChildren:"off please"}));return e.createElement(s,null,n)}});class i extends e.Component{constructor(e){super(e),this.state={checked:!1},this.onChange=this.onChange.bind(this)}onChange(e){this.setState({checked:e})}render(){return e.createElement("div",null,e.createElement("div",{className:"line"},"value of switch: ",this.state.checked?"true":"false"),e.createElement("div",{className:"line"},e.createElement(t,{checked:this.state.checked,onChange:this.onChange}),e.createElement(t,{checked:this.state.checked,onChange:this.onChange,disabled:!0})))}}const o=a.div`
  .line {
    margin-bottom: 10px;
  }
  .next-switch {
    margin-right: 20px;
  }
`;var d=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(i,null);return e.createElement(o,null,t)}});function h(e){console.log(`switch to ${e}`)}const u=a.div`
  .large-width {
    width: 100px;
  }
`;var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const n=e.createElement("div",null,e.createElement(t,{checkedChildren:"on",onChange:h,unCheckedChildren:"off","aria-label":"accessible switch"}));return e.createElement(u,null,n)}});class g extends e.Component{constructor(e){super(e),this.state={disabled:!0}}toggle(){this.setState(Object.assign({},this.state,{disabled:!this.state.disabled}))}render(){return e.createElement("div",null,e.createElement(t,{checkedChildren:e.createElement(n,{type:"select",size:"small"}),unCheckedChildren:e.createElement(n,{type:"close",size:"small"}),disabled:this.state.disabled}),e.createElement(t,{checkedChildren:"on",unCheckedChildren:"off",disabled:this.state.disabled}),e.createElement("br",null),e.createElement("br",null),e.createElement(l,{type:"primary",onClick:this.toggle.bind(this)},"Toggle disabled"))}}const b=a.div``;var C=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(g,null);return e.createElement(b,null,t)}});const f={};f._basic=r,f._control=d,f._accessibility=m,f._disabled=C;export default f;
