var e=Object.assign;import{at as t,r as l,V as n,b as a,ak as c}from"./index.26e635a6.js";import{q as o}from"./styled-components.browser.esm.08d92d51.js";const r=t.Node;class s extends l.Component{onSelect(e,t){console.log("onSelect",e,t)}onCheck(e,t){console.log("onCheck",e,t)}onEditFinish(e,t,l){console.log("onEditFinish",e,t,l)}onRightClick(e){console.log("onRightClick",e)}render(){return l.createElement(t,{checkable:!0,editable:!0,defaultExpandedKeys:["2"],defaultCheckedKeys:["2","4","5"],onSelect:this.onSelect,onCheck:this.onCheck,onEditFinish:this.onEditFinish,onRightClick:this.onRightClick},l.createElement(r,{key:"1",label:"Component"},l.createElement(r,{key:"2",label:"Form",selectable:!1},l.createElement(r,{key:"4",label:"Input"}),l.createElement(r,{key:"5",label:"Select",disabled:!0})),l.createElement(r,{key:"3",label:"Display"},l.createElement(r,{key:"6",label:"Table"}))))}}const i=o.div``;var d=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=l.createElement(s,null);return l.createElement(i,null,e)}});const h=[{label:"Component",key:"1",children:[{label:"Form",key:"2",selectable:!1,children:[{label:"Input",key:"4"},{label:"Select",key:"5",disabled:!0}]},{label:"Display",key:"3",children:[{label:"Table",key:"6"}]}]}];class u extends l.Component{constructor(e){super(e),this.state={checkedKeys:[],checkStrictly:!1},this.handleCheck=this.handleCheck.bind(this),this.handleCheckStrictly=this.handleCheckStrictly.bind(this)}handleCheck(e,t){console.log(e,t),this.setState({checkedKeys:e})}handleCheckStrictly(){this.setState({checkStrictly:!this.state.checkStrictly,checkedKeys:[]})}render(){const{checkedKeys:e,checkStrictly:a}=this.state;return l.createElement("div",{className:"control-check-demo"},l.createElement("label",{className:"strictly-check"},l.createElement(n,{checked:a,onChange:this.handleCheckStrictly}),l.createElement("span",{className:"strictly-text"},"取消选中关联")),l.createElement(t,{defaultExpandAll:!0,checkable:!0,checkStrictly:a,checkedKeys:e,onCheck:this.handleCheck,dataSource:h}))}}const m=o.div`
  .control-check-demo .strictly-check {
    display: block;
    margin-bottom: 10px;
  }

  .control-check-demo .strictly-text {
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
    color: #666;
    font-size: 14px;
  }
`;var p=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=l.createElement(u,null);return l.createElement(m,null,e)}});const y=t.Node,k=[],b=(e,t,l)=>{const n=t||"0",a=l||k,c=[];for(let r=0;r<3;r++){const e=`${n}-${r}`;a.push({label:e,key:e}),r<2&&c.push(e)}if(e<0)return a;const o=e-1;c.forEach(((e,t)=>(a[t].children=[],b(o,e,a[t].children))))};b(1);class E extends l.Component{constructor(e){super(e),this.state={gData:k}}onDrop(e){if(!e.dragNode)return;const t=e.dragNode.props.eventKey,l=e.node.props.eventKey,n=e.dropPosition,a=(e,t,l)=>{e.forEach(((e,n,c)=>e.key===t?l(e,n,c):e.children?a(e.children,t,l):void 0))},c=[...this.state.gData];let o;if(a(c,t,((e,t,l)=>{l.splice(t,1),o=e})),0===e.dropPosition)a(c,l,(e=>{e.children=e.children||[],e.children.push(o)}));else{let e,t;a(c,l,((l,n,a)=>{e=a,t=n})),-1===n?e.splice(t,0,o):e.splice(t+1,0,o)}this.setState({gData:c})}render(){const e=t=>t.map((t=>t.children?l.createElement(y,{key:t.key,label:t.key},e(t.children)):l.createElement(y,{key:t.key,label:t.key})));return l.createElement(t,{draggable:!0,selectable:!1,isLabelBlock:!0,defaultExpandedKeys:["0-0","0-0-0","0-0-0-0"],onDrop:this.onDrop.bind(this)},e(this.state.gData))}}const f=o.div``;var S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=l.createElement(E,null);return l.createElement(f,null,e)}});const g=[{label:"Component",key:"1",children:[{label:"Form",key:"2",selectable:!1,children:[{label:"Input",key:"4"},{label:"Select",key:"5",disabled:!0}]},{label:"Display",key:"3",children:[{label:"Table",key:"6"}]}]}];class x extends l.Component{onSelect(e,t){console.log("onSelect",e,t)}onCheck(e,t){console.log("onCheck",e,t)}onEditFinish(e,t,l){console.log("onEditFinish",e,t,l)}onRightClick(e){console.log("onRightClick",e)}render(){return l.createElement(t,{checkable:!0,editable:!0,defaultExpandedKeys:["2"],defaultCheckedKeys:["2","4","5"],onSelect:this.onSelect,onCheck:this.onCheck,onEditFinish:this.onEditFinish,onRightClick:this.onRightClick,dataSource:g})}}const C=o.div``;var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=l.createElement(x,null);return l.createElement(C,null,e)}});const v=[{label:"Component",key:"1",icon:l.createElement(a,{type:"favorites-filling"}),children:[{label:"Form",key:"2",icon:"form",children:[{label:"Input",key:"4"},{label:"Select",key:"5"}]},{label:"Display",key:"3",icon:"form",children:[{label:"Table",key:"6"}]}]}];const K=o.div``;var T=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=l.createElement(t,{defaultExpandAll:!0,dataSource:v});return l.createElement(K,null,e)}});const D=[{label:"Component",key:"1",children:[{label:"Form",key:"2",selectable:!1,children:[{label:"Input",key:"4"},{label:"Select",key:"5"}]},{label:"Display",key:"3",children:[{label:"Table",key:"6"}]}]}];const j=o.div``;var F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=l.createElement(t,{defaultExpandAll:!0,showLine:!0,dataSource:D});return l.createElement(j,null,e)}});const O=[{label:"Component",key:"1",children:[{label:"Form",key:"2",selectable:!1,children:[{label:"Input",key:"4"},{label:"Select",key:"5",disabled:!0}]},{label:"Display",key:"3",children:[{label:"Table",key:"6"}]}]}];class z extends l.Component{constructor(e){super(e),this.state={selectedKeys:[],multiple:!1},this.handleSelect=this.handleSelect.bind(this),this.handleCheck=this.handleCheck.bind(this)}handleSelect(e,t){console.log(e,t),this.setState({selectedKeys:e})}handleCheck(){this.setState({multiple:!this.state.multiple,selectedKeys:[]})}render(){const{multiple:e,selectedKeys:a}=this.state;return l.createElement("div",{className:"control-select-demo"},l.createElement("label",{className:"multiple-check"},l.createElement(n,{checked:e,onChange:this.handleCheck}),l.createElement("span",{className:"multiple-text"},"多选")),l.createElement(t,{defaultExpandAll:!0,multiple:e,selectedKeys:a,onSelect:this.handleSelect,dataSource:O}))}}const N=o.div`
  .control-select-demo .multiple-check {
    display: block;
    margin-bottom: 10px;
  }

  .control-select-demo .multiple-text {
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
    color: #666;
    font-size: 14px;
  }
`;var M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=l.createElement(z,null);return l.createElement(N,null,e)}});t.Node;const w=t=>t.map((t=>e(e({},t),{key:t.value,children:w(t.children||[])})));class L extends l.Component{constructor(e){super(e),this.state={data:[]}}componentDidMount(){fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((e=>e.json())).then((e=>this.setState({data:w([e[0]])}))).catch((e=>console.log(e)))}render(){return l.createElement(t,{checkable:!0,renderChildNodes:e=>(e.find((e=>e.props.children&&e.props.children.length)),l.createElement("ul",{role:"group",className:"next-tree-child-tree custom-leaf-tree"},e)),defaultExpandAll:!0,dataSource:this.state.data})}}const P=o.div`
  .custom-leaf-tree {
    padding-left: 20px;
    display: block;
    font-size: 0;
    white-space: normal;
  }
  .custom-leaf-tree .next-tree-switcher {
    display: none;
  }

  .custom-leaf-tree .next-tree-node {
    margin-left: 0 !important;
    margin-right: 8px;
    width: 68px;
    display: inline-block;
  }
`;var I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=l.createElement(L,null);return l.createElement(P,null,e)}});const A=[{label:"Component",key:"1",children:[{label:"Form",key:"2",children:[{label:"Input",key:"4"},{label:"Select",key:"5"}]},{label:"Display",key:"3",children:[{label:"Table",key:"6"}]}]}];class R extends l.Component{constructor(e){super(e),this.state={expandedKeys:["2"],autoExpandParent:!0},this.matchedKeys=[],this.handleSearch=this.handleSearch.bind(this),this.handleExpand=this.handleExpand.bind(this)}handleSearch(e){if(!(e=e.trim()))return void(this.matchedKeys=null);const t=[],l=n=>n.forEach((n=>{n.label.indexOf(e)>-1&&t.push(n.key),n.children&&n.children.length&&l(n.children)}));l(A),this.setState({expandedKeys:[...t],autoExpandParent:!0}),this.matchedKeys=t}handleExpand(e){this.setState({expandedKeys:e,autoExpandParent:!1})}render(){const{expandedKeys:e,autoExpandParent:n}=this.state;return l.createElement("div",null,l.createElement(c,{shape:"simple",size:"medium",style:{width:"200px",marginBottom:"10px"},onChange:this.handleSearch}),l.createElement(t,{expandedKeys:e,autoExpandParent:n,filterTreeNode:e=>this.matchedKeys&&this.matchedKeys.indexOf(e.props.eventKey)>-1,onExpand:this.handleExpand,dataSource:A}))}}const $=o.div``;var B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=l.createElement(R,null);return l.createElement($,null,e)}});class q extends l.Component{constructor(e){super(e),this.state={data:[{label:"Expand to load",key:"0"},{label:"Expand to load",key:"1"},{label:"Leaf",key:"2",isLeaf:!0}]},this.onLoadData=this.onLoadData.bind(this)}onLoadData(e){return new Promise((t=>{if(e.props.children)return t();const{eventKey:l,pos:n}=e.props,a=this.getItemByPos(n);setTimeout((()=>{a.children=[{label:"Child Tree",key:`${l}-0`},{label:"Child Tree",key:`${l}-1`}],this.setState({data:[...this.state.data]}),t()}),1e3)}))}getItemByPos(e){return e.split("-").slice(1).reduce(((e,t)=>e.children[t]),{children:this.state.data})}render(){return l.createElement(t,{dataSource:this.state.data,loadData:this.onLoadData})}}const V=o.div``;var H=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=l.createElement(q,null);return l.createElement(V,null,e)}});function W(e=3,t=5){const l=[];let n=0;const a=(e,l,c)=>{e.forEach(((e,o)=>{e.children=new Array(c).fill(null).map(((t,l)=>{const a=`${e.key}-${l}`;return n++,{key:a,label:a}})),l>0&&a(e.children,l-1,t)}))};return l.push({label:"0-0",key:"0-0"}),a(l,e,t),console.log("node num:",n+1),l}class X extends l.Component{constructor(){super(),this.state={dataSource:[]}}componentDidMount(){this.setState({dataSource:W()})}onSelect(e,t){console.log("onSelect",e,t)}onCheck(e,t){console.log("onCheck",e,t)}render(){const e=this.state.dataSource;return e.length?l.createElement(t,{checkable:!0,showLine:!0,useVirtual:!0,style:{maxHeight:"300px",overflow:"auto"},defaultExpandAll:!0,defaultCheckedKeys:["0-0-1","0-0-2"],onSelect:this.onSelect,onCheck:this.onCheck,dataSource:e}):null}}const G=o.div``;var J=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=l.createElement(X,null);return l.createElement(G,null,e)}});const Q=t.Node;const U=o.div``;var Y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=l.createElement(t,{defaultExpandAll:!0,isNodeBlock:{defaultPaddingLeft:50},defaultSelectedKeys:["1"],style:{width:"300px"}},l.createElement(Q,{label:"Component",key:"0"},l.createElement(Q,{label:"Form",key:"1",disabled:!0},l.createElement(Q,{label:"Select",key:"2"},l.createElement(Q,{label:"TreeSelect",key:"3"})),l.createElement(Q,{label:"Input",key:"4"})),l.createElement(Q,{label:"Display",key:"5"},l.createElement(Q,{label:"Card",key:"6"}),l.createElement(Q,{label:"Table",key:"7"}))));return l.createElement(U,null,e)}});const Z={};Z._basic=d,Z["_control-check"]=p,Z._draggable=S,Z._data=_,Z._icon=T,Z._line=F,Z["_control-select"]=M,Z["_render-child-nodes"]=I,Z["_search-tree"]=B,Z._dynamic=H,Z["_virtual-tree"]=J,Z["_node-block"]=Y;export default Z;
