var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(t,n,o)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,r=(e,r)=>{for(var s in r||(r={}))n.call(r,s)&&l(e,s,r[s]);if(t)for(var s of t(r))o.call(r,s)&&l(e,s,r[s]);return e},s=(e,l)=>{var r={};for(var s in e)n.call(e,s)&&l.indexOf(s)<0&&(r[s]=e[s]);if(null!=e&&t)for(var s of t(e))l.indexOf(s)<0&&o.call(e,s)&&(r[s]=e[s]);return r};import{r as a,D as c,j as p,a7 as i,a5 as m,C as u}from"./index.d204dc79.js";import{q as x}from"./styled-components.browser.esm.b206912e.js";const{SubMenu:d,Item:b}=c;const h=x.div`
  .my-menu {
    width: 200px;
  }
`;var y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=a.exports.createElement(c,{defaultOpenKeys:"1",className:"my-menu",openMode:"single"},a.exports.createElement(d,{key:"0",label:"Sub menu 1"},a.exports.createElement(b,{key:"0-0"},"Sub option 1"),a.exports.createElement(b,{key:"0-1"},"Sub option 2"),a.exports.createElement(b,{key:"0-2"},"Sub option 3")),a.exports.createElement(d,{key:"1",label:"Sub menu 2"},a.exports.createElement(b,{key:"1-0"},"Sub option 1"),a.exports.createElement(b,{key:"1-1"},"Sub option 2"),a.exports.createElement(b,{key:"1-2"},"Sub option 3")),a.exports.createElement(d,{key:"2",label:"Sub menu 3"},a.exports.createElement(b,{key:"2-0"},"Sub option 1"),a.exports.createElement(b,{key:"2-1"},"Sub option 2"),a.exports.createElement(b,{key:"2-2"},"Sub option 3")),a.exports.createElement(d,{key:"3",label:"Sub menu 4"},a.exports.createElement(b,{key:"3-0"},"Sub option 1"),a.exports.createElement(b,{key:"3-1"},"Sub option 2"),a.exports.createElement(b,{key:"3-2"},"Sub option 3")));return a.exports.createElement(h,null,e)}});const{SubMenu:E,Item:k,Group:S,Divider:g}=c;const f=x.div`
  .my-menu {
    width: 200px;
  }
`;var v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=a.exports.createElement(c,{className:"my-menu",defaultOpenKeys:"sub-menu"},a.exports.createElement(k,{key:"1"},"Option 1"),a.exports.createElement(k,{disabled:!0,key:"2"},"Disabled option 2"),a.exports.createElement(g,{key:"divider"}),a.exports.createElement(S,{label:"Group"},a.exports.createElement(k,{key:"group-1"},"Group option 1"),a.exports.createElement(k,{key:"group-2"},"Group option 2")),a.exports.createElement(g,null),a.exports.createElement(E,{key:"sub-menu",label:"Sub menu"},a.exports.createElement(k,{key:"sub-1"},"Sub option 1"),a.exports.createElement(k,{key:"sub-2"},"Sub option 2"),a.exports.createElement(k,{disabled:!0,key:"sub-3"},a.exports.createElement("a",{href:"https://www.taobao.com/",target:"__blank"},"Disabled Option Link 3")),a.exports.createElement(k,{key:"sub-4"},a.exports.createElement("a",{href:"https://www.taobao.com/",target:"__blank"},"Option Link 4"))),a.exports.createElement(k,{key:"3",helper:"CTRL+P"},"Option 3"),a.exports.createElement(k,{disabled:!0,key:"4"},a.exports.createElement("a",{href:"https://www.taobao.com/",target:"__blank"},"Disabled Option Link")),a.exports.createElement(k,{key:"5"},a.exports.createElement("a",{href:"https://www.taobao.com/",target:"__blank"},"Option Link")));return a.exports.createElement(f,null,e)}});const{SubMenu:_,Item:O,Divider:C}=c;class w extends a.exports.Component{constructor(e){super(e),this.createContextMenu=e=>{e.preventDefault();const t=e.target,{top:n,left:o}=t.getBoundingClientRect();c.create({target:e.target,offset:[e.clientX-o,e.clientY-n],className:"context-menu",popupClassName:"context-menu",onItemClick:console.log,selectedKeys:this.state.selectedKeys,selectMode:"multiple",onSelect:this.handleSelect,children:[a.exports.createElement(O,{key:"1"},"Option 1"),a.exports.createElement(O,{key:"2"},"Option 2"),a.exports.createElement(O,{key:"3"},"Option 3"),a.exports.createElement(C,{key:"divider-1"}),a.exports.createElement(_,{key:"sub-menu",label:"Sub menu"},a.exports.createElement(O,{key:"sub-1"},"Sub option 1"),a.exports.createElement(O,{key:"sub-2"},"Sub option 2")),a.exports.createElement(O,{key:"4"},"Option 4"),a.exports.createElement(C,{key:"divider-2"}),a.exports.createElement(O,{key:"5"},"Option 5")]})},this.state={selectedKeys:[]},this.handleSelect=this.handleSelect.bind(this)}handleSelect(e){e=e.filter((e=>["sub-1","sub-2"].indexOf(e)>-1)),this.setState({selectedKeys:e})}render(){return a.exports.createElement("div",{className:"context-demo",onContextMenu:this.createContextMenu},"Right click here to see the context menu!")}}const M=x.div`
  .context-demo {
    width: 500px;
    height: 200px;
    line-height: 200px;
    text-align: center;
    background: #ddd;
    border: 1px solid black;
  }

  .context-menu {
    width: 120px;
  }
`;var I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=a.exports.createElement(w,null);return a.exports.createElement(M,null,e)}});const{CheckboxItem:P,RadioItem:N,Divider:z}=c,D=["male","female"],K=["football","basketball","volleyball"];class j extends a.exports.Component{constructor(e){super(e),this.state={sex:"male",balls:[]},this.handleSexCheck=this.handleSexCheck.bind(this),this.handleBallCheck=this.handleBallCheck.bind(this)}handleSexCheck(e){this.setState({sex:e})}handleBallCheck(e,t){let n;const o=this.state.balls.indexOf(e);t&&-1===o?n=this.state.balls.concat(e):!t&&o>-1&&(n=[...this.state.balls.slice(0,o),...this.state.balls.slice(o+1)]),n&&this.setState({balls:n})}render(){return a.exports.createElement(c,{className:"my-menu"},D.map((e=>a.exports.createElement(N,{key:e,checked:this.state.sex===e,onChange:this.handleSexCheck.bind(this,e)},e))),a.exports.createElement(z,{key:"divider"}),K.map((e=>a.exports.createElement(P,{key:e,checked:this.state.balls.indexOf(e)>-1,onChange:this.handleBallCheck.bind(this,e)},e))))}}const T=x.div`
  .my-menu {
    width: 200px;
  }
`;var R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=a.exports.createElement(j,null);return a.exports.createElement(T,null,e)}});const{PopupItem:L}=c;class B extends a.exports.Component{render(){const e={target:()=>ReactDOM.findDOMNode(this),offset:[-1,0],animation:!1};return a.exports.createElement(c,{className:"my-custom-menu",popupProps:e},a.exports.createElement(L,{key:"0",label:"Popup item 1",triggerType:"click"},a.exports.createElement("div",{className:"my-custom-content"},"Custom content 1")),a.exports.createElement(L,{key:"1",label:"Popup item 2"},a.exports.createElement("div",{className:"my-custom-content"},"Custom content 2")),a.exports.createElement(L,{key:"2",label:"Popup item 3"},a.exports.createElement("div",{className:"my-custom-content"},"Custom content 3")),a.exports.createElement(L,{key:"3",label:"Popup item 4"},a.exports.createElement("div",{className:"my-custom-content"},"Custom content 4")))}}const G=x.div`
  .my-custom-menu {
    width: 200px;
    border: 1px solid #ccc;
    padding: 0;
    box-shadow: none;
    z-index: 1000;
  }

  .my-custom-content {
    width: 400px;
    height: 200px;
    background: #fff;
    border: 1px solid #ccc;
    line-height: 200px;
    text-align: center;
    font-size: 20px;
  }
`;var A=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=a.exports.createElement(B,null);return a.exports.createElement(G,null,e)}});const{SubMenu:q,Item:F,Divider:W}=c;const X=x.div`
  .my-menu {
    width: 200px;
  }
`;var Y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=a.exports.createElement(c,{className:"my-menu",mode:"popup",triggerType:"hover"},a.exports.createElement(F,{key:"1"},"Option 1"),a.exports.createElement(F,{key:"2"},"Option 2"),a.exports.createElement(F,{key:"3"},"Option 3"),a.exports.createElement(W,{key:"divider"}),a.exports.createElement(q,{key:"sub-1",label:"Popup menu 1"},a.exports.createElement(F,{key:"popup-1-1"},"Popup option 1"),a.exports.createElement(F,{key:"popup-1-2"},"Popup option 2")),a.exports.createElement(q,{key:"sub-2",label:"Popup menu 2"},a.exports.createElement(F,{key:"popup-2-1"},"Popup option 1"),a.exports.createElement(F,{key:"popup-2-2"},"Popup option 2")));return a.exports.createElement(X,null,e)}});const{SubMenu:$,Item:H}=c;const J=x.div`
  .my-hoz-menu .next-menu-item {
    width: 160px;
  }
  .my-hoz-menu .next-menu-item.next-menu-more {
    width: 60px;
  }
`;var Q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=a.exports.createElement(c,{hozInLine:!0,direction:"hoz",mode:"popup",className:"my-hoz-menu",popupClassName:"my-hoz-menu",popupAutoWidth:!0},a.exports.createElement(H,{key:"1"},"First"),a.exports.createElement(H,{key:"2"},"Second"),a.exports.createElement($,{label:"Sub Nav"},a.exports.createElement(H,{key:"sub-12"},"Sub option 1"),a.exports.createElement(H,{key:"sub-22"},"Sub option 2"),a.exports.createElement($,{label:"Sub Sub Nav"},a.exports.createElement(H,{key:"sub-sub-122"},"Sub sub option 1"),a.exports.createElement(H,{key:"sub-sub-222"},"Sub sub option 2"))),a.exports.createElement($,{label:"Sub Nav"},a.exports.createElement(H,{key:"sub-1"},"Sub option 1"),a.exports.createElement(H,{key:"sub-2"},"Sub option 2"),a.exports.createElement($,{label:"Sub Sub Nav"},a.exports.createElement(H,{key:"sub-sub-1"},"Sub sub option 1"),a.exports.createElement(H,{key:"sub-sub-2"},"Sub sub option 2"))),a.exports.createElement(H,{key:"3"},"Third"));return a.exports.createElement(J,null,e)}});const{SubMenu:U,Item:V,Divider:Z}=c;const ee=x.div`
  .my-menu {
    width: 200px;
  }
`;var te=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=a.exports.createElement(c,{className:"my-menu",mode:"popup",popupAlign:"outside"},a.exports.createElement(V,{key:"1"},"Option 1"),a.exports.createElement(V,{key:"2"},"Option 2"),a.exports.createElement(V,{key:"3"},"Option 3"),a.exports.createElement(Z,{key:"divider"}),a.exports.createElement(U,{key:"sub-1",label:"Popup menu 1"},a.exports.createElement(V,{key:"popup-1-1"},"Popup option 1"),a.exports.createElement(V,{key:"popup-1-2"},"Popup option 2")),a.exports.createElement(U,{key:"sub-2",label:"Popup menu 2"},a.exports.createElement(V,{key:"popup-2-1"},"Popup option 1"),a.exports.createElement(V,{key:"popup-2-2"},"Popup option 2")));return a.exports.createElement(ee,null,e)}});const{SubMenu:ne,Item:oe,Divider:le}=c;const re=x.div`
  .my-menu {
    width: 200px;
  }
`;var se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=a.exports.createElement(c,{className:"my-menu",mode:"popup"},a.exports.createElement(oe,{key:"1"},"Option 1"),a.exports.createElement(oe,{key:"2"},"Option 2"),a.exports.createElement(oe,{key:"3"},"Option 3"),a.exports.createElement(le,{key:"divider"}),a.exports.createElement(ne,{key:"sub-1",label:"Popup menu 1"},a.exports.createElement(oe,{key:"popup-1-1"},"Popup option 1"),a.exports.createElement(oe,{key:"popup-1-2"},"Popup option 2")),a.exports.createElement(ne,{key:"sub-2",label:"Popup menu 2"},a.exports.createElement(oe,{key:"popup-2-1"},"Popup option 1"),a.exports.createElement(oe,{key:"popup-2-2"},"Popup option 2")));return a.exports.createElement(re,null,e)}});const{SubMenu:ae,Item:ce,PopupItem:pe,Divider:ie}=c,me={align:"tc bc",triggerType:"click"},ue=[{title:"库存管理",children:[{title:"部门库存管理",link:""},{title:"小二库存管理",link:""}]},{title:"功能模块管理",children:[{title:"功能模块管理",link:""},{title:"卡片管理",link:""},{title:"首页布局",link:""},{title:"页面管理",link:""}]},{title:"系统管理",children:[{title:"角色管理",link:""},{title:"标签管理",link:""},{title:"字典管理",link:""}]}],xe=e=>{const t=e,{dataSource:n}=t,o=s(t,["dataSource"]);return a.exports.createElement("div",r({className:"my-custom-content3"},o),a.exports.createElement(p,{direction:"row"},n.map(((e,t)=>a.exports.createElement(c,{embeddable:!0,key:t},a.exports.createElement(c.Item,null,a.exports.createElement("div",{className:"title"},e.title)),a.exports.createElement(ie,null),e.dataSource.map(((e,t)=>{const n=e.children&&e.children.map(((e,t)=>a.exports.createElement(c.Item,{key:t},a.exports.createElement("a",{href:e.link},e.title))));return[a.exports.createElement("div",{className:"sub-title",key:`title-${t}`},e.title),...n]})))))))},de=e=>{const t=e,{dataSource:n}=t,o=s(t,["dataSource"]);return a.exports.createElement("div",r({className:"my-custom-content2"},o),a.exports.createElement(p,{direction:"row"},n.map(((e,t)=>a.exports.createElement(c,{embeddable:!0,key:t},a.exports.createElement("div",{className:"sub-title"},e.title),e.children.map(((e,t)=>a.exports.createElement(c.Item,{key:t},a.exports.createElement("a",{href:e.link},e.title)))))))))};const be=x.div`
  .my-custom-menu {
    width: 200px;
    border: 1px solid #ccc;
    padding: 0;
    box-shadow: none;
    z-index: 1000;
    text-align: left;
  }

  .my-custom-content2 {
    background: #fff;
    border: 1px solid #ccc;
    text-align: center;
    font-size: 20px;
    text-align: left;
  }

  .my-custom-content3 {
    background: #fff;
    border: 1px solid #ccc;
    text-align: center;
    font-size: 20px;
    text-align: left;
  }

  ul {
    list-style: none;
    padding-inline-start: 10px;
  }
  .title {
    font-size: 16px;
    font-weight: bold;
  }
  .sub-title {
    font-size: 12px;
    font-weight: normal;
    color: #999;
    padding-left: 20px;
  }
`;var he=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=a.exports.createElement(c,{hozInLine:!0,direction:"hoz",mode:"popup",className:"my-hoz-menu",popupClassName:"my-hoz-menu",popupProps:me,renderMore:e=>{const t=e.map(((e,t)=>{const n=e.props.children.props;return{title:e.props.label,dataSource:n.dataSource}}));return a.exports.createElement(pe,{noIcon:!0,triggerType:"click",key:"0-more",label:"更多"},a.exports.createElement(xe,{dataSource:t}))}},a.exports.createElement(pe,{key:"0",label:"Popup item 1",noIcon:!0},a.exports.createElement(de,{dataSource:ue})),a.exports.createElement(pe,{key:"1",label:"Popup item 2",noIcon:!0},a.exports.createElement(de,{dataSource:ue})),a.exports.createElement(pe,{key:"2",label:"Popup item 3",noIcon:!0},a.exports.createElement(de,{dataSource:ue})),a.exports.createElement(pe,{key:"3",label:"Popup item 4",noIcon:!0},a.exports.createElement(de,{dataSource:ue})),a.exports.createElement(pe,{key:"4",label:"Popup item 5",noIcon:!0},a.exports.createElement(de,{dataSource:ue})),a.exports.createElement(pe,{key:"5",label:"Popup item 6",noIcon:!0},a.exports.createElement(de,{dataSource:ue})),a.exports.createElement(pe,{key:"6",label:"Popup item 7",noIcon:!0},a.exports.createElement(de,{dataSource:ue})),a.exports.createElement(pe,{key:"7",label:"Popup item 8",noIcon:!0},a.exports.createElement(de,{dataSource:ue})),a.exports.createElement(pe,{key:"8",label:"Popup item 9",noIcon:!0},a.exports.createElement(de,{dataSource:ue})));return a.exports.createElement(be,null,e)}});const{SubMenu:ye,Item:Ee}=c;class ke extends a.exports.Component{constructor(e){super(e),this.state={multiple:!1,subMenuSelectable:!1,shallowSelect:!1,isSelectIconRight:!1,selectedKeys:["1"]},["handleMultipleChange","handleSubMenuSelectableChange","handleShallowSelectChange","handleSelect","handleIconDirectionChange"].forEach((e=>{this[e]=this[e].bind(this)}))}handleMultipleChange(){this.setState({multiple:!this.state.multiple,selectedKeys:[]})}handleIconDirectionChange(){this.setState({isSelectIconRight:!this.state.isSelectIconRight,selectedKeys:[]})}handleSubMenuSelectableChange(){this.setState({subMenuSelectable:!this.state.subMenuSelectable,selectedKeys:[]})}handleShallowSelectChange(){this.setState({shallowSelect:!this.state.shallowSelect,selectedKeys:[]})}handleSelect(e,...t){this.setState({selectedKeys:e}),console.log(e,...t)}render(){const{multiple:e,subMenuSelectable:t,shallowSelect:n,selectedKeys:o,isSelectIconRight:l}=this.state,r=e?"multiple":"single";return a.exports.createElement("div",null,a.exports.createElement("div",null,a.exports.createElement("span",{className:"my-switch-label"},"Multiple "),a.exports.createElement(i,{value:e,onChange:this.handleMultipleChange})),a.exports.createElement("div",null,a.exports.createElement("span",{className:"my-switch-label"},"isSelectIconRight "),a.exports.createElement(i,{value:e,onChange:this.handleIconDirectionChange})),a.exports.createElement("div",null,a.exports.createElement("span",{className:"my-switch-label"},"Label of submenu selectable "),a.exports.createElement(i,{value:e,onChange:this.handleSubMenuSelectableChange})),a.exports.createElement("div",null,a.exports.createElement("span",{className:"my-switch-label"},"Only first level selectable "),a.exports.createElement(i,{value:e,onChange:this.handleShallowSelectChange})),a.exports.createElement(c,{isSelectIconRight:l,className:"my-select-menu",defaultOpenKeys:["sub"],selectMode:r,selectedKeys:o,shallowSelect:n,onSelect:this.handleSelect},a.exports.createElement(Ee,{key:"1"},"Option 1"),a.exports.createElement(Ee,{disabled:!0,key:"2"},"Disabled option 2"),a.exports.createElement(ye,{key:"sub",label:"Sub menu",selectable:t},a.exports.createElement(Ee,{key:"sub-1"},"Sub option 1"),a.exports.createElement(Ee,{key:"sub-2"},"Sub option 2")),a.exports.createElement(Ee,{key:"3"},"Option 3")))}}const Se=x.div`
  .my-switch-label {
    vertical-align: super;
  }

  .my-select-menu {
    margin-top: 10px;
    width: 200px;
  }
`;var ge=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=a.exports.createElement(ke,null);return a.exports.createElement(Se,null,e)}});const{SubMenu:fe,Item:ve}=c;class _e extends a.exports.Component{constructor(e){super(e),this.handleIconDirectionChange=()=>{this.setState({isSelectIconRight:!this.state.isSelectIconRight})},this.onSelectModeChange=e=>{console.log(e,"======="),this.setState({selectMode:e})},this.handleSelect=(e,...t)=>{this.setState({selectedKeys:e}),console.log(e,...t)},this.state={selectMode:void 0,multiple:!1,isSelectIconRight:!1,selectedKeys:["1"]}}render(){const{selectMode:e,selectedKeys:t,isSelectIconRight:n}=this.state;return a.exports.createElement("div",null,a.exports.createElement(m.Group,{value:e,onChange:this.onSelectModeChange},a.exports.createElement(m,{value:"single"},"单选带符号"),a.exports.createElement(m,{value:void 0},"单选不带符号(默认)"),a.exports.createElement(m,{value:"multiple"},"多选")),a.exports.createElement("br",null),e?a.exports.createElement(u,{checked:n,onChange:this.handleIconDirectionChange},"切换标记位置 (默认在左)"):null,a.exports.createElement("br",null),a.exports.createElement(c,{isSelectIconRight:n,className:"my-select-menu",defaultOpenKeys:["sub"],selectMode:e,selectedKeys:t,onSelect:this.handleSelect},a.exports.createElement(ve,{key:"1"},"Option 1"),a.exports.createElement(ve,{disabled:!0,key:"2"},"Disabled option 2"),a.exports.createElement(fe,{key:"sub",label:"Sub menu"},a.exports.createElement(ve,{key:"sub-1"},"Sub option 1"),a.exports.createElement(ve,{key:"sub-2"},"Sub option 2")),a.exports.createElement(ve,{key:"3"},"Option 3")))}}const Oe=x.div`
  .my-select-menu {
    margin-top: 10px;
    width: 200px;
  }
`;var Ce=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=a.exports.createElement(_e,null);return a.exports.createElement(Oe,null,e)}});const we={};we._accordian=y,we._basic=v,we._context=I,we["_csutom-select"]=R,we["_custom-popup"]=A,we._hover=Y,we._hoz=Q,we["_popup-align"]=te,we._popup=se,we["_render-more"]=he,we._select=ge,we._selected=Ce;export default we;
