import{r as e,ag as t,F as l,B as n}from"./index.4642f55c.js";import{q as a}from"./styled-components.browser.esm.1feaecc0.js";function r(e){console.log(e)}const o=()=>[e.createElement("p",{key:"1"},"simple"),e.createElement(t,{key:"2",shape:"simple",onSearch:r,style:{width:"400px"}}),e.createElement("p",{key:"3"},"default"),e.createElement(t,{key:"4",onSearch:r,style:{width:"400px"}}),e.createElement("p",{key:"5"},"custom text "),e.createElement(t,{key:"6",searchText:"search",onSearch:r,style:{width:"400px"}}),e.createElement("p",{key:"7"},"custom text widthout icon"),e.createElement(t,{key:"8",hasIcon:!1,searchText:e.createElement("span",{style:{color:"blue"}},"search"),onSearch:r,style:{width:"400px"}})];const s=a.div``;var c=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(o,null);return e.createElement(s,null,t)}});const i=a.div``;var u=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.createElement("div",null,e.createElement(t,{key:"3",placeholder:"Please enter the search content",onSearch:e=>console.log(e),searchText:e.createElement("span",null,"search"),style:{width:"400px"}}));return e.createElement(i,null,l)}});const h=[{label:"Recent",value:"Recent"},{label:"dress",value:"dress"},{label:"sunglasses",value:"sunglasses"},{label:"t-shirt",value:"t-shirt"}];class d extends e.Component{onSearch(e,t){console.log("onSearch",e,t)}onChange(e,t,l){console.log("onChange",e,t,l),this.setState({value:e})}render(){return e.createElement("div",null,"auto highlight first item",e.createElement("br",null),e.createElement(t,{dataSource:h,onChange:this.onChange.bind(this),onSearch:this.onSearch.bind(this)}),e.createElement("br",null),e.createElement("br",null),"no default highlight item, should use UP/DOWN",e.createElement("br",null),e.createElement(t,{autoHighlightFirstItem:!1,dataSource:h,onChange:this.onChange.bind(this),onSearch:this.onSearch.bind(this)}))}}const m=a.div``;var b=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(d,null);return e.createElement(m,null,t)}});const p=[{label:"Option 1",value:"Option 1 Value",index:"1"},{label:"Option 2",value:"Option 2 Value",index:"2"},{label:"Option 3",value:"Option 3 Value",index:"3"},{label:"Option 4",value:"Option 4 Value",index:"4"}];class g extends e.Component{constructor(e){super(e),this.state={visible:!1,value:"111222",menuData:p},this.onVisibleChange=this.onVisibleChange.bind(this),this.onSearch=this.onSearch.bind(this),this.onChange=this.onChange.bind(this),this.onFocus=this.onFocus.bind(this)}renderMenu(){const t=this.state.menuData;return e.createElement(l,{onSelect:this.onSelect.bind(this),rtl:!0,className:"diy-menu",selectMode:"single"},e.createElement(l.Group,{label:"Recent",key:"xxx"},t.map((t=>e.createElement(l.Item,{key:t.value},t.label,e.createElement(n,{className:"diy-menu-button",onClick:this.onDelete.bind(this,t.index),text:!0},"Delete"))))))}onSearch(e){console.log(e)}onChange(e){this.setState({visible:e.length>0,value:e})}onSelect(e){this.setState({visible:!1,value:e[0]})}onDelete(e,t){t.stopPropagation();const l=this.state.menuData,n=[];l.forEach((function(t){t.index!==e&&n.push(t)})),this.setState({menuData:n})}onFocus(){this.setState({visible:!0})}onVisibleChange(){this.setState({visible:!1})}render(){const{visible:l,value:n}=this.state;return e.createElement("div",{style:{width:700}},e.createElement(t,{onVisibleChange:this.onVisibleChange,popupContent:this.renderMenu(),visible:l,value:n,onSearch:this.onSearch,onChange:this.onChange,onFocus:this.onFocus}))}}const E=a.div`
  .diy-menu {
    /*width: 275px*/
  }

  .diy-menu .next-menu-item a {
    display: none;
    float: right;
    cursor: pointer;
  }
  .diy-menu .next-menu-item:hover a {
    display: inline-block;
  }
  .diy-menu .diy-menu-button {
    float: right;
  }
  .diy-menu[dir='rtl'] .diy-menu-button {
    float: left;
  }
`;var v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(g,null);return e.createElement(E,null,t)}});const y=a.div``;var S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.createElement("div",null,e.createElement(t,{size:"large",defaultValue:"large",searchText:"Search",placeholder:"What are you looking for..."}),e.createElement("br",null),e.createElement("br",null),e.createElement(t,{size:"medium",defaultValue:"medium",searchText:"Search",placeholder:"What are you looking for..."}));return e.createElement(y,null,l)}});class f extends e.Component{constructor(e){super(e),this.state={filter:[{label:"Products",value:"Products"},{label:"Products1",value:"Products1"},{label:"Products2",value:"Products2"},{label:"Products3",value:"Products3"},{label:"Products4",value:"Products4"},{label:"Products5",value:"Products5"},{label:"Products6",value:"Products6"},{label:"Products7",value:"Products7"},{label:"Products8",value:"Products8"},{label:"Products9",value:"Products9"},{label:"Products10",value:"Products10"},{label:"Suppliers",value:"Suppliers"}],value:""}}onSearch(e,t){console.log(e,t)}onChange(e){this.setState({value:e})}onFilterChange(e){console.log(e)}render(){return e.createElement("div",null,e.createElement(t,{onChange:this.onChange.bind(this),onSearch:this.onSearch.bind(this),filterProps:{autoWidth:!1},defaultFilterValue:"Suppliers",filter:this.state.filter,onFilterChange:this.onFilterChange.bind(this)}))}}const _=a.div``;var x=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const t=e.createElement(f,null);return e.createElement(_,null,t)}});const C=a.div``;var P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const l=e.createElement("div",null,e.createElement("h2",null,"Normal"),e.createElement(t,{type:"primary",placeholder:"primary"}),e.createElement("br",null)," ",e.createElement("br",null),e.createElement(t,{type:"secondary",placeholder:"Secondary"}),e.createElement("br",null)," ",e.createElement("br",null),e.createElement(t,{type:"normal",placeholder:"normal"}),e.createElement("br",null)," ",e.createElement("br",null),e.createElement("div",{style:{background:"#333",padding:20}},e.createElement(t,{type:"dark",placeholder:"dark"})),e.createElement("h2",null,"Simple"),e.createElement(t,{type:"normal",shape:"simple",placeholder:"normal"}),e.createElement("br",null)," ",e.createElement("br",null),e.createElement("div",{style:{background:"#333",padding:20}},e.createElement(t,{shape:"simple",type:"dark",placeholder:"dark"})));return e.createElement(C,null,l)}});const k={};k._base=c,k._accessibility=u,k._combobox=b,k._custom=v,k._size=S,k._filter=x,k._type=P;export default k;
