import{r as e,G as t,l,u as a,a7 as n}from"./index.26e635a6.js";import{q as r}from"./styled-components.browser.esm.08d92d51.js";const i=r.div``;var o=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.createElement(t,null,"Fusion Radio");return e.createElement(i,null,l)}});const s=t.Group,c=[{value:"apple",label:"Apple",disabled:!1},{value:"pear",label:"Pear"},{value:"orange",label:"Orange",disabled:!0}];class u extends e.Component{constructor(e){super(e),this.state={value1:"apple",value2:"apple",value3:""},this.onNestChange=this.onNestChange.bind(this),this.onSmallChange=this.onSmallChange.bind(this),this.onMediumChange=this.onMediumChange.bind(this)}onSmallChange(e){this.setState({value1:e})}onMediumChange(e){this.setState({value2:e})}onNestChange(e){this.setState({value3:e})}render(){return e.createElement("div",null,e.createElement("p",{style:{fontSize:14}},"Small size"),e.createElement(s,{dataSource:c,shape:"button",size:"small",value:this.state.value1,onChange:this.onSmallChange}),e.createElement("br",null),e.createElement("br",null),e.createElement("p",{style:{fontSize:14}},"Medium size (default)"),e.createElement(s,{dataSource:c,shape:"button",size:"medium",value:this.state.value2,onChange:this.onMediumChange}),e.createElement("br",null),e.createElement("br",null),e.createElement("p",{style:{fontSize:14}},"Large size"),e.createElement(s,{shape:"button",size:"large",value:this.state.value3,onChange:this.onNestChange},e.createElement(t,{id:"banana",value:"banana"},"Banana"),e.createElement(t,{id:"watermelon",value:"watermelon"},"Watermelon"),e.createElement(t,{id:"peach",value:"peach"},"Peach")),e.createElement("br",null),e.createElement("br",null),e.createElement("p",{style:{fontSize:14}},"Disabled and Selected-Disabled status"),e.createElement(s,{shape:"button",value:"banana",onChange:this.onNestChange},e.createElement(t,{id:"peach",disabled:!0,value:"peach"},"Peach"),e.createElement(t,{id:"banana",disabled:!0,value:"banana"},"Banana")))}}const d=r.div``;var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(u,null);return e.createElement(d,null,t)}});const h=t.Group,g=[{value:"appale",label:"Appale"},{value:"pear",label:"Pear"},{value:"orange",label:"Orange"}];class p extends e.Component{constructor(e){super(e),this.state={value:"orange"},this.onChange=this.onChange.bind(this)}onChange(e){this.setState({value:e}),console.log("onChange",e)}onClick(e){console.log("onClick",e)}render(){return e.createElement("div",null,"normal:"," ",e.createElement(h,{dataSource:g,value:this.state.value,onChange:this.onChange}),e.createElement("br",null),e.createElement("br",null),e.createElement("br",null),"disabled:"," ",e.createElement(h,{disabled:!0,dataSource:g,value:this.state.value,onChange:this.onChange}))}}const v=r.div``;var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(p,null);return e.createElement(v,null,t)}});const b=t.Group,C=[{value:"apple",label:"Apple",disabled:!1},{value:"pear",label:"Pear"},{value:"orange",label:"Orange",disabled:!0}];class S extends e.Component{constructor(e){super(e),this.onChange=e=>{this.setState({value:e})},this.onButtonChange=e=>{this.setState({buttonValue:e})},this.state={value:"apple",buttonValue:"pear"}}render(){return e.createElement("div",null,e.createElement(b,{dataSource:C,value:this.state.value,onChange:this.onChange}),e.createElement("br",null),e.createElement("br",null),e.createElement(b,{dataSource:C,shape:"button",value:this.state.buttonValue,onChange:this.onButtonChange}))}}const f=r.div``;var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(S,null);return e.createElement(f,null,t)}});const y=t.Group;const k=r.div``;var w=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.createElement("div",null,e.createElement("span",{id:"radio-a11y"},"Programming language ："),e.createElement(y,{"aria-labelledby":"radio-a11y"},e.createElement(t,{id:"python",value:"python"},"python"),e.createElement(t,{id:"java",value:"java"},"java"),e.createElement(t,{id:"c",value:"c"},"c")));return e.createElement(k,null,l)}});const z=t.Group;class P extends e.Component{constructor(e){super(e),this.state={value:"orange"},this.onChange=this.onChange.bind(this)}onChange(e){this.setState({value:e})}render(){return e.createElement("div",null,e.createElement("span",{style:{fontSize:14}},e.createElement("label",{id:"groupId"},"Choose fruit: ")),e.createElement("br",null),e.createElement("br",null),e.createElement(z,{value:this.state.value,onChange:this.onChange,"aria-labelledby":"groupId"},e.createElement(t,{id:"apple",value:"apple"},"Apple"),e.createElement(t,{id:"watermelon",value:"watermelon"},"Watermelon"),e.createElement(t,{id:"orange",value:"orange"},"Orange")))}}const O=r.div``;var M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(P,null);return e.createElement(O,null,t)}});class j extends e.Component{constructor(){super(...arguments),this.state={disabled:!0},this.toggleDisabled=()=>{this.setState({disabled:!this.state.disabled})}}render(){return e.createElement(e.Fragment,null,"disabled:"," ",e.createElement(l,{size:"small",defaultChecked:!0,onChange:this.toggleDisabled,style:{verticalAlign:"middle"}}),e.createElement("br",null),e.createElement("br",null),e.createElement("br",null),e.createElement(t,{defaultChecked:!1,disabled:this.state.disabled,style:{marginRight:10}},"Disabled"),e.createElement(t,{defaultChecked:!0,disabled:this.state.disabled},"Disabled"))}}const x=r.div``;var G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(j,null);return e.createElement(x,null,t)}});class A extends e.Component{constructor(){super(...arguments),this.state={value:1,dir:!0},this.onChange=(e,t)=>{console.log("radio checked",e,t),this.setState({value:e})},this.changeDir=()=>{this.setState({dir:!this.state.dir})}}render(){const{value:n}=this.state;return e.createElement(e.Fragment,null,"toggle direction:"," ",e.createElement(l,{size:"small",defaultChecked:!0,onChange:this.changeDir,style:{verticalAlign:"middle"}}),e.createElement("br",null),e.createElement("br",null),e.createElement(t.Group,{onChange:this.onChange,value:n,itemDirection:this.state.dir?"ver":"hoz"},e.createElement(t,{value:1},"Option A"),e.createElement(t,{value:2},"Option B"),e.createElement(t,{value:3},"Option C"),e.createElement(t,{value:4},"More...",4===n?e.createElement(a,{style:{width:100,marginLeft:10}}):null)))}}const T=r.div``;var D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(A,null);return e.createElement(T,null,t)}});class N extends e.Component{constructor(){super(...arguments),this.state={isPreview:!0,checked:!0},this.togglePreview=()=>{this.setState({isPreview:!this.state.isPreview})},this.toggleCheck=()=>{this.setState({checked:!this.state.checked})},this.renderChecked=(t,l)=>t?e.createElement("span",null,l.children):e.createElement("span",null,"null"),this.renderPreview=(t,l)=>e.createElement("span",null,t.label)}render(){return e.createElement(e.Fragment,null,"toggle checked:",e.createElement(l,{size:"small",defaultChecked:!0,onChange:this.toggleCheck,style:{verticalAlign:"middle",marginRight:30}}),"toggle isPreview:"," ",e.createElement(l,{size:"small",defaultChecked:!0,onChange:this.togglePreview,style:{verticalAlign:"middle"}}),e.createElement("br",null),e.createElement("br",null),e.createElement("span",{style:{fontSize:14}},"Single: "),e.createElement(t,{className:"radio-preview-inline",checked:this.state.checked,isPreview:this.state.isPreview,renderPreview:this.renderChecked},"Radio"),e.createElement("br",null),e.createElement("span",{style:{fontSize:14}},"Group: "),e.createElement(t.Group,{className:"radio-group-preview-inlline",name:"radio",defaultValue:"react",isPreview:this.state.isPreview,renderPreview:this.renderPreview},e.createElement(t,{value:"react"},"React"),e.createElement(t,{value:"vue"},"Vue"),e.createElement(t,{value:"angular"},"Angular")))}}const B=r.div`
  .radio-preview-inline {
    display: inline-block;
    margin-left: 8px;
    line-height: 40px;
  }

  .radio-group-preview-inlline {
    display: inline-block;
    margin-left: 8px;
    line-height: 40px;
  }
`;var R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(N,null);return e.createElement(B,null,t)}});const V=t.Group,F=[{value:"apple",label:"Apple",disabled:!1},{value:"pear",label:"Pear",disabled:!0},{value:"orange",label:"Orange"}],W=()=>e.createElement("div",null,e.createElement(V,{dataSource:F,defaultValue:"apple"}));const L=r.div``;var I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(W,null);return e.createElement(L,null,t)}});const{Row:q,Col:H}=n,J=t.Group;class K extends e.Component{constructor(e){super(e),this.state={value:"orange",other:0},this.onChange=this.onChange.bind(this)}onChange(e){this.setState({value:e}),console.log("onChange",e)}onClick(e){console.log("onClick",e)}render(){return e.createElement("div",null,e.createElement("p",{style:{fontSize:14}},"Grid Layout:"),e.createElement(J,{onChange:this.onChange,style:{width:"1000px"}},e.createElement(q,null,e.createElement(H,{span:"8"},e.createElement(t,{value:"apple1",onClick:this.onClick},"Apple")),e.createElement(H,{span:"8"},e.createElement(t,{value:"pear1",onClick:this.onClick},"Pear")),e.createElement(H,{span:"8"},e.createElement(t,{value:"banana1",onClick:this.onClick},"Banana"))),e.createElement("br",null),e.createElement(q,null,e.createElement(H,{span:"8"},e.createElement(t,{value:"peach",onClick:this.onClick},"Peach")),e.createElement(H,{span:"8"},e.createElement(t,{value:"watermelon",onClick:this.onClick},"Watermelon")),e.createElement(H,{span:"8"},e.createElement(t,{value:"strawberry",onClick:this.onClick},"Strawberry")))))}}const Q=r.div``;var U=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(K,null);return e.createElement(Q,null,t)}});const X={};X._basic=o,X._button=m,X._control=E,X._dataSource=_,X._accessibility=w,X._group=M,X._disabled=G,X._direction=D,X._isPreview=R,X._uncontrol=I,X._useWithGrid=U;export default X;
