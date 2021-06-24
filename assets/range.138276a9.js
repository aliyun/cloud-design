import{r as e,ah as t,a7 as l,ai as r,d as s}from"./index.672a70f3.js";import{q as o}from"./styled-components.browser.esm.f3e9ec77.js";const a={marginBottom:20},n=()=>{const[r,s]=e.exports.useState(!1);return e.exports.createElement("div",{style:{width:400}},e.exports.createElement(t,{defaultValue:30,disabled:r,style:a}),e.exports.createElement(t,{slider:"double",defaultValue:[20,70],disabled:r,style:a}),e.exports.createElement("div",{style:{display:"flex",alignItems:"center"}},"Disabled: ",e.exports.createElement(l,{checked:r,onChange:s})))};const m=o.div``;var i=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(n,null);return e.exports.createElement(m,null,t)}});const u=e=>{console.log("onProcess: ",e)},c=()=>{const[l,r]=e.exports.useState(128),[s,o]=e.exports.useState([200,500]);return e.exports.createElement("div",{style:{width:400}},e.exports.createElement("div",{style:{display:"flex",marginBottom:20}},e.exports.createElement(t,{value:l,onChange:r,onProcess:u,min:0,max:1024,marks:[0,1024],style:{marginRight:30}}),e.exports.createElement(t,{value:l,onProcess:u,min:0,max:1024,marks:[0,1024]})),e.exports.createElement(t,{slider:"double",value:s,onChange:o,onProcess:u,min:0,max:1024,marks:[0,1024]}))};const p=o.div``;var d=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(c,null);return e.exports.createElement(p,null,t)}});const x=()=>{const[l,o]=e.exports.useState(30);return e.exports.createElement("div",{style:{width:400}},e.exports.createElement("div",{style:{display:"flex"}},e.exports.createElement(t,{value:l,onChange:o,min:0,max:100,step:5,style:{marginRight:10}}),e.exports.createElement(r,{value:l,onChange:o,min:0,max:100,step:5})),e.exports.createElement("div",{style:{display:"flex",marginTop:20}},e.exports.createElement(s,{type:"cry",style:{marginRight:10,color:`rgba(50,50,50, ${(100-l)/100})`}}),e.exports.createElement(t,{value:l,onProcess:o,min:0,max:100,style:{marginRight:10}}),e.exports.createElement(s,{type:"smile",style:{color:`rgba(50,50,50, ${l/100})`}})))};const E=o.div``;var f=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(x,null);return e.exports.createElement(E,null,t)}});const g={marginBottom:"15px"},y={marginBottom:"45px"};class h extends e.exports.Component{constructor(e){super(e),this.state={value:[10,300]}}onChange(e){console.log("onChange value:",e),this.setState({value:e})}onProcess(e){console.log("onProcess: ",e)}render(){return e.exports.createElement("div",{style:{width:"400px",margin:"50px"}},e.exports.createElement(t,{fixedWidth:!0,defaultValue:[20,40],style:g}),e.exports.createElement("h4",null,"with tooltipVisible"),e.exports.createElement(t,{tooltipVisible:!0,fixedWidth:!0,defaultValue:[70,90],style:y}),e.exports.createElement("h4",null,"with marks"),e.exports.createElement(t,{fixedWidth:!0,step:10,defaultValue:[20,40],marks:10,style:y}),e.exports.createElement("h4",null,"with 0.01 step"),e.exports.createElement(t,{fixedWidth:!0,defaultValue:[.6,.7],min:.5,max:1,step:.01}))}}const v=o.div``;var b=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(h,null);return e.exports.createElement(v,null,t)}});const _={marginBottom:"20px",marginTop:"20px"};const k=o.div``;var V=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.exports.createElement("div",{style:{width:"400px",margin:"50px"}},e.exports.createElement("p",null,"With minimal and maximal value"),e.exports.createElement(t,{defaultValue:0,marks:[0,100],style:_}),e.exports.createElement(t,{slider:"double",defaultValue:[20,40],marks:[0,100],style:_}),e.exports.createElement(t,{defaultValue:30,style:_}),e.exports.createElement("p",null,"Marks below"),e.exports.createElement(t,{defaultValue:0,marks:[0,100],style:_,marksPosition:"below"}),e.exports.createElement(t,{slider:"double",defaultValue:[20,40],marks:[0,100],style:_,marksPosition:"below"}),e.exports.createElement(t,{defaultValue:30,marks:[0,100],style:_,marksPosition:"below"}),e.exports.createElement("p",null,"Equal division"),e.exports.createElement(t,{defaultValue:30,marks:5,style:_}),e.exports.createElement(t,{slider:"double",defaultValue:[20,40],marks:10,style:_}),e.exports.createElement(t,{disabled:!0,slider:"double",defaultValue:[20,40],marks:10,style:_}),e.exports.createElement("p",null,"Free"),e.exports.createElement(t,{defaultValue:30,marks:[0,26,37,100],style:_}),e.exports.createElement(t,{slider:"double",defaultValue:[20,40],marks:[0,26,37,100],style:_,hasTip:!1}),e.exports.createElement(t,{defaultValue:30,marks:{0:"0°C",26:"26°C",37:"37°C",100:"100°C"},style:_}));return e.exports.createElement(k,null,l)}});const S={marginBottom:"15px"};const C=o.div``;var w=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.exports.createElement("div",{style:{width:"400px",margin:"50px"}},e.exports.createElement(t,{defaultValue:30,style:S,reverse:!0,hasTip:!1}),e.exports.createElement(t,{slider:"double",defaultValue:[20,40],style:S,reverse:!0}));return e.exports.createElement(C,null,l)}});class P extends e.exports.Component{constructor(e){super(e),this.state={value:128}}onChange(e){console.log("onChange value:",e)}onProcess(e){console.log("onProcess"),this.setState({value:e})}formatter(e){return`0 ~ ${e}`}render(){return e.exports.createElement("div",{style:{margin:"50px"}},e.exports.createElement(t,{defaultValue:256,tipRender:this.formatter.bind(this),value:this.state.value,onChange:this.onChange.bind(this),onProcess:this.onProcess.bind(this),min:0,max:1024,marks:[0,1024]}))}}const T=o.div``;var j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.exports.createElement(P,null);return e.exports.createElement(T,null,t)}});const M={};M._basic=i,M._change=d,M._control=f,M._fixedWidth=b,M._marks=V,M._reverse=w,M._tipRender=j;export default M;