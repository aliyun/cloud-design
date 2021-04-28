import{r as e,l,b as t,S as a,B as n}from"./index.db891132.js";import{q as r}from"./styled-components.browser.esm.2d3384e1.js";function o(e){console.log(e)}function i(e){console.log(e)}const c=r.div``;var s=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,e.createElement(l,{size:"large",placeholder:"please input",onChange:o,onKeyDown:i,"aria-label":"this is input"}));return e.createElement(c,null,t)}});function u(e){console.log(e)}const m=r.div``;var d=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,e.createElement(l,{size:"large",placeholder:"Large",onChange:u,"aria-label":"Large"}),e.createElement("br",null),e.createElement("br",null),e.createElement("span",{id:"J_InputMedium",style:{display:"none"}},"Aria Labelby Demo"," "),e.createElement(l,{placeholder:"Medium","aria-label":"Medium","aria-labelledby":"J_InputMedium"}),e.createElement("br",null),e.createElement("br",null),e.createElement(l,{placeholder:"Small",size:"small",label:"SIZE :",id:"J_InputSmall"}),e.createElement("br",null),e.createElement("br",null),e.createElement(l.TextArea,{placeholder:"TextArea","aria-label":"TextArea"}));return e.createElement(m,null,t)}});const b=r.div``;var h=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,e.createElement(l,{showLimitHint:!0,addonTextBefore:"http://",addonTextAfter:".com",size:"large",defaultValue:"alibaba",maxLength:5,"aria-label":"input with config of addonTextBefore and addonTextAfter"}),e.createElement("br",null),e.createElement("br",null),e.createElement(l,{addonTextBefore:"http://",addonTextAfter:".com",size:"medium",value:"alibaba","aria-label":"input with config of addonTextBefore and addonTextAfter"}),e.createElement("br",null),e.createElement("br",null),e.createElement(l,{addonTextBefore:"http://",addonTextAfter:".com",size:"small",value:"alibaba","aria-label":"input with config of addonTextBefore and addonTextAfter"}));return e.createElement(b,null,t)}});const E=r.div``;var g=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,e.createElement(l.TextArea,{autoHeight:!0,"aria-label":"auto height",placeholder:"autoHeight",onKeyDown:(e,l)=>{console.log("onKeyDown",l)}}),e.createElement("br",null),e.createElement("br",null),e.createElement(l.TextArea,{"aria-label":"auto height",autoHeight:{minRows:2,maxRows:6}}));return e.createElement(E,null,t)}});class p extends e.Component{constructor(){super(...arguments),this.state={v:""},this.onChange=e=>{this.setState({v:e})},this.onClick=()=>{console.log(this.state.v)}}render(){return e.createElement("div",null,e.createElement(l,{innerBefore:e.createElement(t,{type:"search",style:{margin:4},onClick:this.onClick}),placeholder:"search",value:this.state.v,"aria-label":"input with config of innerBefore",onChange:this.onChange}),e.createElement("br",null),e.createElement("br",null),e.createElement(l,{innerAfter:e.createElement(t,{type:"search",size:"xs",onClick:this.onClick,style:{margin:4}}),placeholder:"search",value:this.state.v,"aria-label":"input with config of innerAfter",onChange:this.onChange}),e.createElement("br",null),e.createElement("br",null),e.createElement(l,{disabled:!0,defaultValue:"hi",innerAfter:e.createElement(t,{type:"calendar",style:{margin:4}}),"aria-label":"input with config of innerAfter and disabled"}))}}const f=r.div``;var v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.createElement(p,null);return e.createElement(f,null,l)}});const _=r.div``;var y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,e.createElement(l,{disabled:!0,"aria-label":"disabled",placeholder:"disabled",size:"small"}),e.createElement("br",null),e.createElement("br",null),e.createElement(l,{disabled:!0,"aria-label":"disabled",addonTextBefore:"http://",addonTextAfter:".com",size:"medium",value:"alibaba"}),e.createElement("br",null),e.createElement("br",null),e.createElement(l,{disabled:!0,"aria-label":"disabled",placeholder:"medium",maxLength:10,showLimitHint:!0}),e.createElement("br",null),e.createElement("br",null),e.createElement(l.TextArea,{disabled:!0,"aria-label":"disabled",placeholder:"medium",maxLength:10,showLimitHint:!0}));return e.createElement(_,null,t)}});const w=e=>{console.log(e)},x=e=>{console.log(e)};const T=r.div``;var z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,e.createElement(l,{hasClear:!0,defaultValue:"clear by click",size:"small","aria-label":"input with config of hasClear",onChange:w}),e.createElement("br",null),e.createElement("br",null),e.createElement(l,{hasClear:!0,defaultValue:"2019-09-10 10:10:20","aria-label":"input with config of hasClear",onChange:w,onBlur:x,hint:"calendar"}),e.createElement("br",null),e.createElement("br",null),e.createElement(l,{hasClear:!0,defaultValue:"clear by click",size:"large","aria-label":"input with config of hasClear",onChange:w}),e.createElement("br",null),e.createElement("br",null));return e.createElement(T,null,t)}});class C extends e.Component{constructor(e){super(e),this.state={maxLength:10,control:"maxLen control"}}onChange(e){console.log(e),this.setState({control:e})}onKeyDown(e,l){console.log("onKeyDown",l)}render(){return e.createElement("div",null,e.createElement(l,{maxLength:10,size:"large",placeholder:"Large",value:this.state.control,showLimitHint:!0,"aria-label":"input max length 10",onChange:this.onChange.bind(this),onKeyDown:this.onKeyDown.bind(this)}),e.createElement("br",null),e.createElement("br",null),e.createElement(l,{maxLength:20,placeholder:"medium",showLimitHint:!0,cutString:!1,"aria-label":"input max length 20",onChange:e=>{this.setState({control:e}),console.log(e)},onKeyDown:(e,l)=>{console.log("onKeyDown",l)}}),e.createElement("br",null),e.createElement("br",null),e.createElement(l,{showLimitHint:!0,size:"small",placeholder:"small",maxLength:100,"aria-label":"input max length 100"}),e.createElement("br",null),e.createElement("br",null),e.createElement(l.TextArea,{placeholder:"TextArea",maxLength:100,rows:4,showLimitHint:!0,"aria-label":"input max length 100"}),e.createElement("br",null),e.createElement("br",null),e.createElement(l,{maxLength:5,placeholder:"Original maxLength","aria-label":"input max length 5"}))}}const S=r.div``;var L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.createElement(C,null);return e.createElement(S,null,l)}});function A(e){console.log(e)}const M=r.div``;var j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,e.createElement(l.Password,{placeholder:"please input password",onChange:A}),e.createElement("br",null),e.createElement("br",null),e.createElement(l.Password,{size:"large",placeholder:"please input password",onChange:A}),e.createElement("br",null),e.createElement("br",null),e.createElement(l.Password,{size:"small",placeholder:"please input password",onChange:A}),e.createElement("br",null),e.createElement("br",null));return e.createElement(M,null,t)}});const B=r.div``;var D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,e.createElement(l,{state:"error",placeholder:"error",size:"small","aria-live":"assertive","aria-label":"error"}),e.createElement("br",null),e.createElement("br",null),e.createElement(l,{state:"error",showLimitHint:!0,maxLength:100,placeholder:"error",size:"medium","aria-live":"assertive","aria-label":"error"}),e.createElement("br",null),e.createElement("br",null),e.createElement(l,{state:"error",multiple:!0,placeholder:"error",size:"large","aria-live":"assertive","aria-label":"error"}),e.createElement("br",null),e.createElement("br",null),e.createElement(l,{state:"success",size:"small",value:"success","aria-live":"assertive","aria-label":"success"}),e.createElement("br",null),e.createElement("br",null),e.createElement(l,{state:"success",maxLength:100,showLimitHint:!0,placeholder:"success",size:"medium","aria-live":"assertive","aria-label":"success"}),e.createElement("br",null),e.createElement("br",null),e.createElement(l,{state:"success",placeholder:"success",size:"large","aria-live":"assertive","aria-label":"success"}),e.createElement("br",null),e.createElement("br",null),e.createElement(l,{state:"loading",placeholder:"loading",size:"small","aria-live":"assertive","aria-label":"loading"}),e.createElement("br",null),e.createElement("br",null),e.createElement(l,{state:"loading",placeholder:"loading",size:"medium","aria-live":"assertive","aria-label":"loading"}),e.createElement("br",null),e.createElement("br",null),e.createElement(l,{state:"loading",placeholder:"loading",size:"large","aria-live":"assertive","aria-label":"loading"}),e.createElement("br",null),e.createElement("br",null));return e.createElement(B,null,t)}});class H extends e.Component{constructor(){super(...arguments),this.state={value:""}}onChange(e){console.log("onChange",e),this.setState({value:e})}onKeyDown(e,l){console.log("onKeyDown",l)}render(){return e.createElement("div",null,e.createElement(l,{trim:!0,placeholder:"cant not input space","aria-label":"cant not input space",onChange:this.onChange.bind(this),onKeyDown:this.onKeyDown.bind(this)}))}}const O=r.div``;var K=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.createElement(H,null);return e.createElement(O,null,l)}});const k=e.createElement(a,{"aria-label":"please select"},e.createElement("option",{value:"https"},"https"),e.createElement("option",{value:"http"},"http")),V=e.createElement(n,null,"search");const I=r.div``;var J=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,e.createElement(l.Group,{addonBefore:k,addonAfter:V},e.createElement(l,{hasClear:!0,defaultValue:"abc",style:{width:"100%"},"aria-label":"please input"})),e.createElement("br",null),e.createElement("br",null),e.createElement(l,{addonTextAfter:".com",addonBefore:k,"aria-label":"please input"}));return e.createElement(I,null,t)}});const N=r.div`
  body .my-input-class {
    width: 500px;
  }
`;var P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement("div",null,e.createElement(l,{placeholder:"width:400",style:{width:400},"aria-label":"style width 400"}),e.createElement("br",null),e.createElement("br",null),e.createElement(l,{addonTextBefore:"http://",addonTextAfter:".com",size:"medium",value:"alibaba",style:{width:400},"aria-label":"style width 400"}),e.createElement("br",null),e.createElement("br",null),e.createElement(l,{placeholder:"medium",maxLength:10,showLimitHint:!0,style:{width:400},"aria-label":"style width 400"}),e.createElement("br",null),e.createElement("br",null),e.createElement(l,{placeholder:"medium",hasClear:!0,maxLength:10,showLimitHint:!0,style:{width:400},className:"my-input-class",state:"success","aria-label":"style width 400"}),e.createElement("br",null),e.createElement("br",null),e.createElement(l,{placeholder:"className",className:"my-input-class","aria-label":"custom my input class"}),e.createElement(l,{htmlType:"hidden","aria-label":"hidden input"}));return e.createElement(N,null,t)}});const R={};R._accessibility=s,R._basic=d,R._addon=h,R._autoheight=g,R._inner=v,R._disabled=y,R._clear=z,R._maxlen=L,R._passwd=j,R._state=D,R._trim=K,R._group=J,R._style=P;export default R;