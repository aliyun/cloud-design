import{r as e,am as l}from"./index.9e4b8ce1.js";import{q as t}from"./styled-components.browser.esm.19571eea.js";const a=[{label:"Component",value:"1",children:[{label:"Form",value:"2",children:[{label:"Input",value:"4"},{label:"Select",value:"5"}]},{label:"Display",value:"3",children:[{label:"Table",value:"6"}]}]}];class n extends e.Component{constructor(e){super(e),this.handleChange=this.handleChange.bind(this)}handleChange(e,l){console.log(e,l)}render(){return e.createElement(l,{treeDefaultExpandAll:!0,treeCheckable:!0,dataSource:a,onChange:this.handleChange,style:{width:200}})}}const r=t.div``;var o=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.createElement(n,null);return e.createElement(r,null,l)}});const s=l.Node;class c extends e.Component{constructor(e){super(e),this.handleChange=this.handleChange.bind(this)}handleChange(e,l){console.log(e,l)}render(){return e.createElement("div",null,e.createElement("span",{id:"a11y-tree-select"},"TreeSelect: "),e.createElement(l,{treeDefaultExpandAll:!0,"aria-labelledby":"a11y-tree-select",onChange:this.handleChange,style:{width:200}},e.createElement(s,{key:"1",value:"1",label:"Component"},e.createElement(s,{key:"2",value:"2",label:"Form"},e.createElement(s,{key:"4",value:"4",label:"Input"}),e.createElement(s,{key:"5",value:"5",label:"Select",disabled:!0})),e.createElement(s,{key:"3",value:"3",label:"Display"},e.createElement(s,{key:"6",value:"6",label:"Table"})))))}}const u=t.div``;var h=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.createElement(c,null);return e.createElement(u,null,l)}});const d=l.Node;class i extends e.Component{constructor(e){super(e),this.handleChange=this.handleChange.bind(this)}handleChange(e,l){console.log(e,l)}render(){return e.createElement(l,{treeDefaultExpandAll:!0,onChange:this.handleChange,style:{width:200}},e.createElement(d,{key:"1",value:"1",label:"Component"},e.createElement(d,{key:"2",value:"2",label:"Form"},e.createElement(d,{key:"4",value:"4",label:"Input"}),e.createElement(d,{key:"5",value:"5",label:"Select",disabled:!0})),e.createElement(d,{key:"3",value:"3",label:"Display"},e.createElement(d,{key:"6",value:"6",label:"Table"}))))}}const b=t.div``;var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.createElement(i,null);return e.createElement(b,null,l)}});const v=[{label:"Component",value:"1",children:[{label:"Form",value:"2",children:[{label:"Input",value:"4"},{label:"Select",value:"5"}]},{label:"Display",value:"3",children:[{label:"Table",value:"6"}]}]}];class p extends e.Component{constructor(e){super(e),this.state={value:["4","6"]},this.handleChange=this.handleChange.bind(this)}handleChange(e,l){console.log(e,l),this.setState({value:e})}render(){return e.createElement(l,{treeDefaultExpandAll:!0,treeCheckable:!0,dataSource:v,value:this.state.value,onChange:this.handleChange,style:{width:200}})}}const g=t.div``;var C=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.createElement(p,null);return e.createElement(g,null,l)}});const E=[{label:"Component",value:"1",children:[{label:"Form",value:"2",children:[{label:"Input",value:"4"},{label:"Select",value:"5",disabled:!0}]},{label:"Display",value:"3",children:[{label:"Table",value:"6"}]}]}];class y extends e.Component{constructor(e){super(e),this.handleChange=this.handleChange.bind(this)}handleChange(e,l){console.log(e,l)}render(){return e.createElement(l,{treeDefaultExpandAll:!0,dataSource:E,onChange:this.handleChange,style:{width:200}})}}const S=t.div``;var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.createElement(y,null);return e.createElement(S,null,l)}});const f=[{label:"Component",value:"1",selectable:!1,children:[{label:"Form",value:"2",children:[{label:"Input",value:"4"},{label:"Select",value:"5",disabled:!0}]},{label:"Display",value:"3",children:[{label:"Table",value:"6"}]}]}];class D extends e.Component{constructor(e){super(e),this.state={value:["4","6"]},this.handleChange=this.handleChange.bind(this)}handleChange(e,l){console.log(e,l)}render(){return e.createElement(l,{treeDefaultExpandAll:!0,showSearch:!0,dataSource:f,onChange:this.handleChange,style:{width:200}})}}const x=t.div``;var T=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.createElement(D,null);return e.createElement(x,null,l)}});const k=[{label:"浙江",value:"浙江",children:[{label:"绍兴",value:"绍兴"}]}];class w extends e.Component{constructor(e){super(e),this.state={value:["浙江"],treeData:k},this.handleSearch=this.handleSearch.bind(this)}handleSearch(e,l){clearTimeout(this.timeId),e?this.timeId=setTimeout((()=>{this.setState({treeData:[{label:e,value:e}]})}),500):this.setState({treeData:k})}render(){return e.createElement(l,{treeDefaultExpandAll:!0,showSearch:!0,onSearch:this.handleSearch,dataSource:this.state.treeData,style:{width:200}})}}const j=t.div``;var I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.createElement(w,null);return e.createElement(j,null,l)}});const z={};z._check=o,z._accessibility=h,z._basic=m,z._control=C,z._data=_,z._search=T,z["_pro-search"]=I;export default z;
