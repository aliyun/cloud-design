import{r as e,M as t,B as l}from"./index.9e4b8ce1.js";import{q as n}from"./styled-components.browser.esm.19571eea.js";const a=()=>e.createElement("div",null,e.createElement("h4",null,"Programming language："),e.createElement(t.Group,{"aria-label":"Please select a programming language"},e.createElement(t,{value:"python"},"python"),e.createElement(t,{value:"java"},"java"),e.createElement(t,{value:"angular"},"angular"),e.createElement(t,{value:"c"},"c"),e.createElement(t,{value:"other"},"other")));const r=n.div``;var c=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(a,null);return e.createElement(r,null,t)}});class o extends e.Component{constructor(e){super(e),this.state={checked:!1,indeterminate:!0,disabled:!1}}render(){return e.createElement("div",null,e.createElement(t,{checked:this.state.checked,indeterminate:this.state.indeterminate,disabled:this.state.disabled,onChange:e=>{this.setState({checked:e,indeterminate:!1})}}),e.createElement("br",null),e.createElement("br",null),e.createElement(l,{type:"primary",onClick:()=>{this.setState({checked:!0,indeterminate:!1})}},"checked = true"),e.createElement("br",null),e.createElement("br",null),e.createElement(l,{type:"primary",onClick:()=>{this.setState({checked:!1})}},"checked = false"),e.createElement("br",null),e.createElement("br",null),e.createElement(l,{type:"primary",onClick:()=>{this.setState({checked:!1,indeterminate:!0})}},"indeterminate = true"),e.createElement("br",null),e.createElement("br",null),e.createElement(l,{type:"primary",onClick:()=>{this.setState({indeterminate:!1})}},"indeterminate = false"),e.createElement("br",null),e.createElement("br",null),e.createElement(l,{type:"primary",onClick:()=>{this.setState({disabled:!this.state.disabled})}},"toggle disabled"))}}const u=n.div``;var i=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(o,null);return e.createElement(u,null,t)}});const s=n.div``;var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.createElement("div",null,e.createElement("h6",null,"Different status without label:"),e.createElement(t,null,"Unchecked"),e.createElement(t,{defaultChecked:!0},"DefaultChecked"),e.createElement(t,{defaultIndeterminate:!0},"Indeterminate"),e.createElement(t,{disabled:!0},"Disabled"),";",e.createElement(t,{disabled:!0,checked:!0},"Checked-Disabled"),e.createElement(t,{checked:!0},"Checked"),e.createElement("h6",null,"Using with label"),e.createElement(t,null,"Banana")," ",e.createElement(t,{id:"apple"}),e.createElement("label",{htmlFor:"apple",className:"next-checkbox-label"},"Apple")," ",e.createElement("label",null,e.createElement(t,{id:"pear"}),e.createElement("span",{className:"next-checkbox-label"},"Pear"))," ",e.createElement(t,{label:"Banana"}));return e.createElement(s,null,l)}});const{Group:d}=t,h=[{value:"apple",label:"Apple",disabled:!1},{value:"pear",label:"Pear"},{value:"orange",label:"Orange",disabled:!0}];class E extends e.Component{constructor(e){super(e),this.onChange=this.onChange.bind(this)}onChange(e){console.log("onChange callback",e)}render(){return e.createElement("div",{style:{padding:"20px"}},e.createElement(d,{defaultValue:["apple"],dataSource:h,onChange:this.onChange}))}}const p=n.div``;var g=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(E,null);return e.createElement(p,null,t)}});const{Group:b}=t,v=[{value:"apple",label:"Apple"},{value:"pear",label:"Pear"},{value:"orange",label:"Orange"}];class _ extends e.Component{constructor(e){super(e),this.state={value:["orange"]},this.onChange=this.onChange.bind(this)}onChange(e){console.log("onChange callback",e),this.setState({value:e})}render(){return e.createElement("div",{style:{padding:"20px"}},e.createElement(b,{value:this.state.value,dataSource:v,onChange:this.onChange}))}}const f=n.div``;var C=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(_,null);return e.createElement(f,null,t)}});const{Group:k}=t;class S extends e.Component{constructor(e){super(e),this.state={value:["orange"]},this.onChange=this.onChange.bind(this)}onChange(e){this.setState({value:e})}render(){return e.createElement("div",null,e.createElement(k,{value:this.state.value,onChange:this.onChange},e.createElement(t,{id:"apple",value:"apple",disabled:!0},"Apple"),e.createElement(t,{id:"watermelon",value:"watermelon"},"Watermelon"),e.createElement(t,{id:"orange",value:"orange"},"Orange")))}}const y=n.div``;var x=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(S,null);return e.createElement(y,null,t)}});const j=()=>e.createElement("div",null,e.createElement("h4",null,"Horizonal direction"),e.createElement("p",null,e.createElement(t.Group,{itemDirection:"hoz"},e.createElement(t,{value:"react"},"React"),e.createElement(t,{value:"vue"},"Vue"),e.createElement(t,{value:"angular"},"Angular"))),e.createElement("h4",null,"Vertical direction"),e.createElement("p",null,e.createElement(t.Group,{itemDirection:"ver"},e.createElement(t,{value:"react"},"React"),e.createElement(t,{value:"vue"},"Vue"),e.createElement(t,{value:"angular"},"Angular"))));const O=n.div``;var z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(j,null);return e.createElement(O,null,t)}});const M={};M._accessibility=c,M._indeterminate=i,M._basic=m,M._uncontrol=g,M._control=C,M._nest=x,M._group=z;export default M;
