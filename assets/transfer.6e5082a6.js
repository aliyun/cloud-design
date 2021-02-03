var e=Object.prototype.hasOwnProperty,t=Object.getOwnPropertySymbols,l=Object.prototype.propertyIsEnumerable,n=Object.assign;import{r as a,al as o,B as r,U as s}from"./index.9e4b8ce1.js";import{q as c}from"./styled-components.browser.esm.19571eea.js";import{T as u}from"./transfer.60a223a8.js";const d=(()=>{const e=[];for(let t=0;t<10;t++)e.push({label:`content${t}`,value:`${t}`});return e})(),h={items:"项",item:"项",moveAll:"移动全部",searchPlaceholder:"请输入",moveToLeft:"撤销选中元素",moveToRight:"提交选中元素"};class i extends a.Component{constructor(e){super(e),this.handleChange=this.handleChange.bind(this)}handleChange(e,t,l){console.log(e,t,l)}render(){return a.createElement(u,{id:"a11y-transfer",defaultValue:["2"],dataSource:d,defaultLeftChecked:["1"],locale:h,onChange:this.handleChange,titles:["Title","Title"]})}}const m=c.div``;var g=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=a.createElement(i,null);return a.createElement(m,null,e)}});const f=(()=>{const e=[];for(let t=0;t<10;t++)e.push({label:`content${t}`,value:`${t}`,disabled:t%4==0});return e})();class b extends a.Component{constructor(e){super(e),this.handleChange=this.handleChange.bind(this)}handleChange(e,t,l){console.log(e,t,l)}render(){return a.createElement(u,{defaultValue:["3"],dataSource:f,defaultLeftChecked:["1"],onChange:this.handleChange,titles:["Title","Title"]})}}const p=c.div``;var C=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=a.createElement(b,null);return a.createElement(p,null,e)}});const S=(()=>{const e=[];for(let t=0;t<10;t++)e.push({label:`content${t}`,value:`${t}`,disabled:t%4==0});return e})();class v extends a.Component{constructor(e){super(e),this.state={value:["3"]},this.handleChange=this.handleChange.bind(this)}handleChange(e,t,l){console.log(e,t,l),this.setState({value:e})}render(){return a.createElement(u,{value:this.state.value,dataSource:S,defaultLeftChecked:["1"],onChange:this.handleChange,titles:["Title","Title"]})}}const _=c.div``;var y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=a.createElement(v,null);return a.createElement(_,null,e)}});const E=o.Node,T=[{label:"Form",key:"2",value:"2",children:[{label:"Input",key:"4",value:"4"},{label:"Field",key:"7",value:"7"},{label:"Select",key:"5",value:"5"}]},{label:"Display",key:"3",value:"3",children:[{label:"Table",key:"6",value:"6"}]},{label:"Data",key:"8",value:"8"}],w=[];!function e(t=[]){t.forEach((t=>{w.push(t),e(t.children)}))}(T);class x extends a.Component{constructor(e){super(e),this.handleChange=this.handleChange.bind(this),this.state={selected:[]}}handleChange(e,t,l){this.setState({selected:e})}onCheck(e,t){}getTreeDataSource(o=[],r){return o.map((o=>{var{children:s}=o,c=((n,a)=>{var o={};for(var r in n)e.call(n,r)&&a.indexOf(r)<0&&(o[r]=n[r]);if(null!=n&&t)for(var r of t(n))a.indexOf(r)<0&&l.call(n,r)&&(o[r]=n[r]);return o})(o,["children"]);return a.createElement(E,n(n({},c),{disabled:c.disabled||r.includes(c.value),key:c.value}),this.getTreeDataSource(s,r))}))}render(){const{onChange:e}=this.props,{selected:t}=this.state;return a.createElement(u,{dataSource:w,listStyle:{width:"200px",height:"192px"},onChange:this.handleChange,titles:[a.createElement(r,{key:"left",type:"primary"},"Source"),"Target"]},(({position:e,onChange:l,value:n})=>{if("left"===e)return a.createElement(o,{checkable:!0,editable:!0,style:{padding:"10px"},checkedKeys:n,onCheck:(t,n)=>{const a=n.checkedNodes.map((e=>e.props.value));l(e,a)}},this.getTreeDataSource(T,t))}))}}const k=c.div``;var $=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=a.createElement(x,null);return a.createElement(k,null,e)}});const j=(()=>{const e=[];for(let t=0;t<10;t++)e.push({label:t%3==0?`content${t}contentcontentcontentcontentcontent`:`content${t}`,value:`${t}`,disabled:t%4==0});return e})();class O extends a.Component{constructor(e){super(e),this.handleChange=this.handleChange.bind(this)}handleChange(e,t,l){console.log(e,t,l)}render(){return a.createElement(u,{defaultValue:["3"],dataSource:j,listStyle:{width:"200px",height:"192px"},defaultLeftChecked:["1"],onChange:this.handleChange,titles:[a.createElement(r,{key:"left",type:"primary"},"Source"),"Target"],operations:[">>","<<"]})}}const M=c.div``;var D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=a.createElement(O,null);return a.createElement(M,null,e)}});const R=(()=>{const e=[];for(let t=0;t<10;t++)e.push({label:`content${t}`,value:`${t}`,disabled:t%4==0});return e})();class K extends a.Component{constructor(e){super(e),this.handleChange=this.handleChange.bind(this)}handleChange(e,t,l){console.log(e,t,l)}render(){return a.createElement(u,{mode:"simple",defaultValue:["3"],dataSource:R,defaultLeftChecked:["1"],onChange:this.handleChange,titles:["Simple Mode","Simple Mode"]})}}const z=c.div``;var L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=a.createElement(K,null);return a.createElement(z,null,e)}});const V=(()=>{const e=[];for(let t=0;t<10;t++)e.push({label:`content${t}`,value:`${t}`,disabled:t%4==0});return e})();class I extends a.Component{constructor(e){super(e),this.handleChange=this.handleChange.bind(this)}handleChange(e,t,l){console.log(e,t,l)}render(){return a.createElement(u,{showSearch:!0,defaultValue:["3"],dataSource:V,defaultLeftChecked:["1"],onChange:this.handleChange,titles:["Searchable","Searchable"]})}}const N=c.div``;var P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=a.createElement(I,null);return a.createElement(N,null,e)}});const A=(()=>{const e=[];for(let t=0;t<10;t++)e.push({label:`content${t}`,value:`${t}`,disabled:t%4==0});return e})();class F extends a.Component{constructor(e){super(e),this.handleSort=this.handleSort.bind(this)}handleSort(e,t){console.log(e,t)}render(){return a.createElement(u,{sortable:!0,defaultValue:["3"],dataSource:A,onSort:this.handleSort,titles:["Sortable","Sortable"]})}}const q=c.div``;var B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=a.createElement(F,null);return a.createElement(q,null,e)}});const Q=((e,t)=>{const l=[];for(let n=e;n<t;n++)l.push({label:`Quotation Nano ${3+e}`,value:`${100306660940+n}`});return l})(0,3),U=e=>e.map((e=>({label:e.label,id:e.value}))),G=U(Q),H=(e,t,l)=>a.createElement("a",{href:"javascript:;"},"Remove(",l.id,")");class J extends a.Component{constructor(){super(...arguments),this.state={selectedValue:[],leftTableDataSource:G,rightTableDataSource:[],rselectedRowKeys:[],lselectedRowKeys:[]},this.handleChange=(e,t,l)=>{console.log("handleChange",e,t,l),this.setState({leftTableDataSource:U(l.leftData),rightTableDataSource:U(t),rselectedRowKeys:[],lselectedRowKeys:[]})}}render(){const{selectedValue:e,leftTableDataSource:t,rightTableDataSource:l,rselectedRowKeys:n,lselectedRowKeys:o}=this.state;return a.createElement(u,{dataSource:Q,titles:["Source","Target"],onChange:this.handleChange,showCheckAll:!1,className:"table-transfer-demo"},(({position:e,onChange:r,value:c,dataSource:u})=>"left"===e?a.createElement(s,{dataSource:t,rowSelection:{onChange:(t,l)=>{console.log(t,l),this.setState({lselectedRowKeys:t},(()=>{r(e,t)}))},selectedRowKeys:o}},a.createElement(s.Column,{title:"Label",dataIndex:"label",width:150}),a.createElement(s.Column,{title:"Id",dataIndex:"id",width:150}),a.createElement(s.Column,{cell:H,width:200})):a.createElement(s,{dataSource:l,rowSelection:{onChange:(t,l)=>{console.log(t,l),this.setState({rselectedRowKeys:t},(()=>{r(e,t)}))},selectedRowKeys:n}},a.createElement(s.Column,{title:"Label",dataIndex:"label",width:150}))))}}const W=c.div`
  .table-transfer-demo.next-transfer .next-transfer-panel-list {
    width: auto;
  }
`;var X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=a.createElement(J,null);return a.createElement(W,null,e)}});const Y=(()=>{const e=[];for(let t=0;t<1e3;t++)e.push({label:`content${t}`,value:`${t}`,disabled:t%4==0});return e})();class Z extends a.Component{constructor(e){super(e),this.handleChange=this.handleChange.bind(this)}handleChange(e,t,l){console.log(e,t,l)}render(){return a.createElement(u,{mode:"simple",useVirtual:!0,defaultValue:["3"],dataSource:Y,defaultLeftChecked:["1"],onChange:this.handleChange,titles:["Simple Mode","Simple Mode"]})}}const ee=c.div``;var te=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=a.createElement(Z,null);return a.createElement(ee,null,e)}});const le={};le._accessibility=g,le._basic=C,le._control=y,le["_custom-panel"]=$,le._custom=D,le._simple=L,le._search=P,le._sortable=B,le["_table-transfer"]=X,le["_virtual-list"]=te;export default le;
