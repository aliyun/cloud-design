import{r as e,M as t,B as l}from"./index.4272a92a.js";import{q as n}from"./styled-components.browser.esm.6c715b82.js";const{Group:a}=t,r=[{value:"apple",label:"Apple"},{value:"pear",label:"Pear"},{value:"orange",label:"Orange"}];class c extends e.Component{constructor(e){super(e),this.state={value:["orange"]},this.onChange=this.onChange.bind(this)}onChange(e){console.log("onChange callback",e),this.setState({value:e})}render(){return e.createElement("div",{style:{padding:"20px"}},e.createElement(a,{value:this.state.value,dataSource:r,onChange:this.onChange}))}}const o=n.div``;var u=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(c,null);return e.createElement(o,null,t)}});const i=()=>e.createElement("div",null,e.createElement("h4",null,"Programming language："),e.createElement(t.Group,{"aria-label":"Please select a programming language"},e.createElement(t,{value:"python"},"python"),e.createElement(t,{value:"java"},"java"),e.createElement(t,{value:"angular"},"angular"),e.createElement(t,{value:"c"},"c"),e.createElement(t,{value:"other"},"other")));const s=n.div``;var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(i,null);return e.createElement(s,null,t)}});const{Group:d}=t;class h extends e.Component{constructor(e){super(e),this.state={value:["orange"]},this.onChange=this.onChange.bind(this)}onChange(e){this.setState({value:e})}render(){return e.createElement("div",null,e.createElement(d,{value:this.state.value,onChange:this.onChange},e.createElement(t,{id:"apple",value:"apple",disabled:!0},"Apple"),e.createElement(t,{id:"watermelon",value:"watermelon"},"Watermelon"),e.createElement(t,{id:"orange",value:"orange"},"Orange")))}}const E=n.div``;var p=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(h,null);return e.createElement(E,null,t)}});const g=n.div``;var b=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.createElement("div",null,e.createElement("h6",null,"Different status without label:"),e.createElement(t,null,"Unchecked"),e.createElement(t,{defaultChecked:!0},"DefaultChecked"),e.createElement(t,{defaultIndeterminate:!0},"Indeterminate"),e.createElement(t,{disabled:!0},"Disabled"),";",e.createElement(t,{disabled:!0,checked:!0},"Checked-Disabled"),e.createElement(t,{checked:!0},"Checked"),e.createElement("h6",null,"Using with label"),e.createElement(t,null,"Banana")," ",e.createElement(t,{id:"apple"}),e.createElement("label",{htmlFor:"apple",className:"next-checkbox-label"},"Apple")," ",e.createElement("label",null,e.createElement(t,{id:"pear"}),e.createElement("span",{className:"next-checkbox-label"},"Pear"))," ",e.createElement(t,{label:"Banana"}));return e.createElement(g,null,l)}});class v extends e.Component{constructor(e){super(e),this.state={checked:!1,indeterminate:!0,disabled:!1}}render(){return e.createElement("div",null,e.createElement(t,{checked:this.state.checked,indeterminate:this.state.indeterminate,disabled:this.state.disabled,onChange:e=>{this.setState({checked:e,indeterminate:!1})}}),e.createElement("br",null),e.createElement("br",null),e.createElement(l,{type:"primary",onClick:()=>{this.setState({checked:!0,indeterminate:!1})}},"checked = true"),e.createElement("br",null),e.createElement("br",null),e.createElement(l,{type:"primary",onClick:()=>{this.setState({checked:!1})}},"checked = false"),e.createElement("br",null),e.createElement("br",null),e.createElement(l,{type:"primary",onClick:()=>{this.setState({checked:!1,indeterminate:!0})}},"indeterminate = true"),e.createElement("br",null),e.createElement("br",null),e.createElement(l,{type:"primary",onClick:()=>{this.setState({indeterminate:!1})}},"indeterminate = false"),e.createElement("br",null),e.createElement("br",null),e.createElement(l,{type:"primary",onClick:()=>{this.setState({disabled:!this.state.disabled})}},"toggle disabled"))}}const _=n.div``;var f=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(v,null);return e.createElement(_,null,t)}});const C=()=>e.createElement("div",null,e.createElement("h4",null,"Horizonal direction"),e.createElement("p",null,e.createElement(t.Group,{itemDirection:"hoz"},e.createElement(t,{value:"react"},"React"),e.createElement(t,{value:"vue"},"Vue"),e.createElement(t,{value:"angular"},"Angular"))),e.createElement("h4",null,"Vertical direction"),e.createElement("p",null,e.createElement(t.Group,{itemDirection:"ver"},e.createElement(t,{value:"react"},"React"),e.createElement(t,{value:"vue"},"Vue"),e.createElement(t,{value:"angular"},"Angular"))));const k=n.div``;var S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(C,null);return e.createElement(k,null,t)}});const{Group:y}=t,x=[{value:"apple",label:"Apple",disabled:!1},{value:"pear",label:"Pear"},{value:"orange",label:"Orange",disabled:!0}];class j extends e.Component{constructor(e){super(e),this.onChange=this.onChange.bind(this)}onChange(e){console.log("onChange callback",e)}render(){return e.createElement("div",{style:{padding:"20px"}},e.createElement(y,{defaultValue:["apple"],dataSource:x,onChange:this.onChange}))}}const O=n.div``;var z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(j,null);return e.createElement(O,null,t)}});const M={};M._control=u,M._accessibility=m,M._nest=p,M._basic=b,M._indeterminate=f,M._group=S,M._uncontrol=z;export default M;
