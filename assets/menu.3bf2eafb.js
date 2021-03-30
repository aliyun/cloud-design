var e=Object.prototype.hasOwnProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,l=Object.assign,a=(l,a)=>{var o={};for(var c in l)e.call(l,c)&&a.indexOf(c)<0&&(o[c]=l[c]);if(null!=l&&t)for(var c of t(l))a.indexOf(c)<0&&n.call(l,c)&&(o[c]=l[c]);return o};import{r as o,G as c,M as r,J as i,E as s,V as m}from"./index.4543a34a.js";import{q as u}from"./styled-components.browser.esm.09d3b94c.js";const{SubMenu:p,Item:d,Group:b,Divider:h}=c;const E=u.div`
  .my-menu {
    width: 200px;
  }
`;var y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{className:"my-menu",defaultOpenKeys:"sub-menu"},o.createElement(d,{key:"1"},"Option 1"),o.createElement(d,{disabled:!0,key:"2"},"Disabled option 2"),o.createElement(h,{key:"divider"}),o.createElement(b,{label:"Group"},o.createElement(d,{key:"group-1"},"Group option 1"),o.createElement(d,{key:"group-2"},"Group option 2")),o.createElement(h,null),o.createElement(p,{key:"sub-menu",label:"Sub menu"},o.createElement(d,{key:"sub-1"},"Sub option 1"),o.createElement(d,{key:"sub-2"},"Sub option 2"),o.createElement(d,{disabled:!0,key:"sub-3"},o.createElement("a",{href:"https://www.taobao.com/",target:"__blank"},"Disabled Option Link 3")),o.createElement(d,{key:"sub-4"},o.createElement("a",{href:"https://www.taobao.com/",target:"__blank"},"Option Link 4"))),o.createElement(d,{key:"3",helper:"CTRL+P"},"Option 3"),o.createElement(d,{disabled:!0,key:"4"},o.createElement("a",{href:"https://www.taobao.com/",target:"__blank"},"Disabled Option Link")),o.createElement(d,{key:"5"},o.createElement("a",{href:"https://www.taobao.com/",target:"__blank"},"Option Link")));return o.createElement(E,null,e)}});const{SubMenu:S,Item:k,Divider:g}=c;class f extends o.Component{constructor(e){super(e),this.createContextMenu=e=>{e.preventDefault();const t=e.target,{top:n,left:l}=t.getBoundingClientRect();c.create({target:e.target,offset:[e.clientX-l,e.clientY-n],className:"context-menu",popupClassName:"context-menu",onItemClick:console.log,selectedKeys:this.state.selectedKeys,selectMode:"multiple",onSelect:this.handleSelect,children:[o.createElement(k,{key:"1"},"Option 1"),o.createElement(k,{key:"2"},"Option 2"),o.createElement(k,{key:"3"},"Option 3"),o.createElement(g,{key:"divider-1"}),o.createElement(S,{key:"sub-menu",label:"Sub menu"},o.createElement(k,{key:"sub-1"},"Sub option 1"),o.createElement(k,{key:"sub-2"},"Sub option 2")),o.createElement(k,{key:"4"},"Option 4"),o.createElement(g,{key:"divider-2"}),o.createElement(k,{key:"5"},"Option 5")]})},this.state={selectedKeys:[]},this.handleSelect=this.handleSelect.bind(this)}handleSelect(e){e=e.filter((e=>["sub-1","sub-2"].indexOf(e)>-1)),this.setState({selectedKeys:e})}render(){return o.createElement("div",{className:"context-demo",onContextMenu:this.createContextMenu},"Right click here to see the context menu!")}}const v=u.div`
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
`;var x=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(f,null);return o.createElement(v,null,e)}});const{SubMenu:_,Item:O}=c;const C=u.div`
  .my-menu {
    width: 200px;
  }
`;var w=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{defaultOpenKeys:"1",className:"my-menu",openMode:"single"},o.createElement(_,{key:"0",label:"Sub menu 1"},o.createElement(O,{key:"0-0"},"Sub option 1"),o.createElement(O,{key:"0-1"},"Sub option 2"),o.createElement(O,{key:"0-2"},"Sub option 3")),o.createElement(_,{key:"1",label:"Sub menu 2"},o.createElement(O,{key:"1-0"},"Sub option 1"),o.createElement(O,{key:"1-1"},"Sub option 2"),o.createElement(O,{key:"1-2"},"Sub option 3")),o.createElement(_,{key:"2",label:"Sub menu 3"},o.createElement(O,{key:"2-0"},"Sub option 1"),o.createElement(O,{key:"2-1"},"Sub option 2"),o.createElement(O,{key:"2-2"},"Sub option 3")),o.createElement(_,{key:"3",label:"Sub menu 4"},o.createElement(O,{key:"3-0"},"Sub option 1"),o.createElement(O,{key:"3-1"},"Sub option 2"),o.createElement(O,{key:"3-2"},"Sub option 3")));return o.createElement(C,null,e)}});const{PopupItem:M}=c;class I extends o.Component{render(){const e={target:()=>ReactDOM.findDOMNode(this),offset:[-1,0],animation:!1};return o.createElement(c,{className:"my-custom-menu",popupProps:e},o.createElement(M,{key:"0",label:"Popup item 1"},o.createElement("div",{className:"my-custom-content"},"Custom content 1")),o.createElement(M,{key:"1",label:"Popup item 2"},o.createElement("div",{className:"my-custom-content"},"Custom content 2")),o.createElement(M,{key:"2",label:"Popup item 3"},o.createElement("div",{className:"my-custom-content"},"Custom content 3")),o.createElement(M,{key:"3",label:"Popup item 4"},o.createElement("div",{className:"my-custom-content"},"Custom content 4")))}}const P=u.div`
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
`;var N=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(I,null);return o.createElement(P,null,e)}});const{SubMenu:z,Item:D}=c;const K=u.div`
  .my-hoz-menu .next-menu-item {
    width: 160px;
  }
  .my-hoz-menu .next-menu-item.next-menu-more {
    width: 60px;
  }
`;var j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{hozInLine:!0,direction:"hoz",mode:"popup",className:"my-hoz-menu",popupClassName:"my-hoz-menu",popupAutoWidth:!0},o.createElement(D,{key:"1"},"First"),o.createElement(D,{key:"2"},"Second"),o.createElement(z,{label:"Sub Nav"},o.createElement(D,{key:"sub-12"},"Sub option 1"),o.createElement(D,{key:"sub-22"},"Sub option 2"),o.createElement(z,{label:"Sub Sub Nav"},o.createElement(D,{key:"sub-sub-122"},"Sub sub option 1"),o.createElement(D,{key:"sub-sub-222"},"Sub sub option 2"))),o.createElement(z,{label:"Sub Nav"},o.createElement(D,{key:"sub-1"},"Sub option 1"),o.createElement(D,{key:"sub-2"},"Sub option 2"),o.createElement(z,{label:"Sub Sub Nav"},o.createElement(D,{key:"sub-sub-1"},"Sub sub option 1"),o.createElement(D,{key:"sub-sub-2"},"Sub sub option 2"))),o.createElement(D,{key:"3"},"Third"));return o.createElement(K,null,e)}});const{CheckboxItem:T,RadioItem:R,Divider:L}=c,G=["male","female"],B=["football","basketball","volleyball"];class A extends o.Component{constructor(e){super(e),this.state={sex:"male",balls:[]},this.handleSexCheck=this.handleSexCheck.bind(this),this.handleBallCheck=this.handleBallCheck.bind(this)}handleSexCheck(e){this.setState({sex:e})}handleBallCheck(e,t){let n;const l=this.state.balls.indexOf(e);t&&-1===l?n=this.state.balls.concat(e):!t&&l>-1&&(n=[...this.state.balls.slice(0,l),...this.state.balls.slice(l+1)]),n&&this.setState({balls:n})}render(){return o.createElement(c,{className:"my-menu"},G.map((e=>o.createElement(R,{key:e,checked:this.state.sex===e,onChange:this.handleSexCheck.bind(this,e)},e))),o.createElement(L,{key:"divider"}),B.map((e=>o.createElement(T,{key:e,checked:this.state.balls.indexOf(e)>-1,onChange:this.handleBallCheck.bind(this,e)},e))))}}const q=u.div`
  .my-menu {
    width: 200px;
  }
`;var F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(A,null);return o.createElement(q,null,e)}});const{SubMenu:J,Item:V}=c;class W extends o.Component{constructor(e){super(e),this.state={multiple:!1,subMenuSelectable:!1,shallowSelect:!1,isSelectIconRight:!1,selectedKeys:["1"]},["handleMultipleChange","handleSubMenuSelectableChange","handleShallowSelectChange","handleSelect","handleIconDirectionChange"].forEach((e=>{this[e]=this[e].bind(this)}))}handleMultipleChange(){this.setState({multiple:!this.state.multiple,selectedKeys:[]})}handleIconDirectionChange(){this.setState({isSelectIconRight:!this.state.isSelectIconRight,selectedKeys:[]})}handleSubMenuSelectableChange(){this.setState({subMenuSelectable:!this.state.subMenuSelectable,selectedKeys:[]})}handleShallowSelectChange(){this.setState({shallowSelect:!this.state.shallowSelect,selectedKeys:[]})}handleSelect(e,...t){this.setState({selectedKeys:e}),console.log(e,...t)}render(){const{multiple:e,subMenuSelectable:t,shallowSelect:n,selectedKeys:l,isSelectIconRight:a}=this.state,i=e?"multiple":"single";return o.createElement("div",null,o.createElement("div",null,o.createElement("span",{className:"my-switch-label"},"Multiple "),o.createElement(r,{value:e,onChange:this.handleMultipleChange})),o.createElement("div",null,o.createElement("span",{className:"my-switch-label"},"isSelectIconRight "),o.createElement(r,{value:e,onChange:this.handleIconDirectionChange})),o.createElement("div",null,o.createElement("span",{className:"my-switch-label"},"Label of submenu selectable "),o.createElement(r,{value:e,onChange:this.handleSubMenuSelectableChange})),o.createElement("div",null,o.createElement("span",{className:"my-switch-label"},"Only first level selectable "),o.createElement(r,{value:e,onChange:this.handleShallowSelectChange})),o.createElement(c,{isSelectIconRight:a,className:"my-select-menu",defaultOpenKeys:["sub"],selectMode:i,selectedKeys:l,shallowSelect:n,onSelect:this.handleSelect},o.createElement(V,{key:"1"},"Option 1"),o.createElement(V,{disabled:!0,key:"2"},"Disabled option 2"),o.createElement(J,{key:"sub",label:"Sub menu",selectable:t},o.createElement(V,{key:"sub-1"},"Sub option 1"),o.createElement(V,{key:"sub-2"},"Sub option 2")),o.createElement(V,{key:"3"},"Option 3")))}}const X=u.div`
  .my-switch-label {
    vertical-align: super;
  }

  .my-select-menu {
    margin-top: 10px;
    width: 200px;
  }
`;var Y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(W,null);return o.createElement(X,null,e)}});const{SubMenu:$,Item:H,Divider:Q}=c;const U=u.div`
  .my-menu {
    width: 200px;
  }
`;var Z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{className:"my-menu",mode:"popup",popupAlign:"outside"},o.createElement(H,{key:"1"},"Option 1"),o.createElement(H,{key:"2"},"Option 2"),o.createElement(H,{key:"3"},"Option 3"),o.createElement(Q,{key:"divider"}),o.createElement($,{key:"sub-1",label:"Popup menu 1"},o.createElement(H,{key:"popup-1-1"},"Popup option 1"),o.createElement(H,{key:"popup-1-2"},"Popup option 2")),o.createElement($,{key:"sub-2",label:"Popup menu 2"},o.createElement(H,{key:"popup-2-1"},"Popup option 1"),o.createElement(H,{key:"popup-2-2"},"Popup option 2")));return o.createElement(U,null,e)}});const{SubMenu:ee,Item:te,Divider:ne}=c;const le=u.div`
  .my-menu {
    width: 200px;
  }
`;var ae=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{className:"my-menu",mode:"popup"},o.createElement(te,{key:"1"},"Option 1"),o.createElement(te,{key:"2"},"Option 2"),o.createElement(te,{key:"3"},"Option 3"),o.createElement(ne,{key:"divider"}),o.createElement(ee,{key:"sub-1",label:"Popup menu 1"},o.createElement(te,{key:"popup-1-1"},"Popup option 1"),o.createElement(te,{key:"popup-1-2"},"Popup option 2")),o.createElement(ee,{key:"sub-2",label:"Popup menu 2"},o.createElement(te,{key:"popup-2-1"},"Popup option 1"),o.createElement(te,{key:"popup-2-2"},"Popup option 2")));return o.createElement(le,null,e)}});const{SubMenu:oe,Item:ce,Divider:re}=c;const ie=u.div`
  .my-menu {
    width: 200px;
  }
`;var se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{className:"my-menu",mode:"popup",triggerType:"hover"},o.createElement(ce,{key:"1"},"Option 1"),o.createElement(ce,{key:"2"},"Option 2"),o.createElement(ce,{key:"3"},"Option 3"),o.createElement(re,{key:"divider"}),o.createElement(oe,{key:"sub-1",label:"Popup menu 1"},o.createElement(ce,{key:"popup-1-1"},"Popup option 1"),o.createElement(ce,{key:"popup-1-2"},"Popup option 2")),o.createElement(oe,{key:"sub-2",label:"Popup menu 2"},o.createElement(ce,{key:"popup-2-1"},"Popup option 1"),o.createElement(ce,{key:"popup-2-2"},"Popup option 2")));return o.createElement(ie,null,e)}});const{SubMenu:me,Item:ue,PopupItem:pe,Divider:de}=c,be={align:"tc bc",triggerType:"click"},he=[{title:"库存管理",children:[{title:"部门库存管理",link:""},{title:"小二库存管理",link:""}]},{title:"功能模块管理",children:[{title:"功能模块管理",link:""},{title:"卡片管理",link:""},{title:"首页布局",link:""},{title:"页面管理",link:""}]},{title:"系统管理",children:[{title:"角色管理",link:""},{title:"标签管理",link:""},{title:"字典管理",link:""}]}],Ee=e=>{const{dataSource:t}=e,n=a(e,["dataSource"]);return o.createElement("div",l({className:"my-custom-content3"},n),o.createElement(i,{direction:"row"},t.map(((e,t)=>o.createElement(c,{embeddable:!0,key:t},o.createElement(c.Item,null,o.createElement("div",{className:"title"},e.title)),o.createElement(de,null),e.dataSource.map(((e,t)=>{const n=e.children&&e.children.map(((e,t)=>o.createElement(c.Item,{key:t},o.createElement("a",{href:e.link},e.title))));return[o.createElement("div",{className:"sub-title",key:`title-${t}`},e.title),...n]})))))))},ye=e=>{const{dataSource:t}=e,n=a(e,["dataSource"]);return o.createElement("div",l({className:"my-custom-content2"},n),o.createElement(i,{direction:"row"},t.map(((e,t)=>o.createElement(c,{embeddable:!0,key:t},o.createElement("div",{className:"sub-title"},e.title),e.children.map(((e,t)=>o.createElement(c.Item,{key:t},o.createElement("a",{href:e.link},e.title)))))))))};const Se=u.div`
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
`;var ke=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{hozInLine:!0,direction:"hoz",mode:"popup",className:"my-hoz-menu",popupClassName:"my-hoz-menu",popupProps:be,renderMore:e=>{const t=e.map(((e,t)=>{const n=e.props.children.props;return{title:e.props.label,dataSource:n.dataSource}}));return o.createElement(pe,{noIcon:!0,triggerType:"click",key:"0-more",label:"更多"},o.createElement(Ee,{dataSource:t}))}},o.createElement(pe,{key:"0",label:"Popup item 1",noIcon:!0},o.createElement(ye,{dataSource:he})),o.createElement(pe,{key:"1",label:"Popup item 2",noIcon:!0},o.createElement(ye,{dataSource:he})),o.createElement(pe,{key:"2",label:"Popup item 3",noIcon:!0},o.createElement(ye,{dataSource:he})),o.createElement(pe,{key:"3",label:"Popup item 4",noIcon:!0},o.createElement(ye,{dataSource:he})),o.createElement(pe,{key:"4",label:"Popup item 5",noIcon:!0},o.createElement(ye,{dataSource:he})),o.createElement(pe,{key:"5",label:"Popup item 6",noIcon:!0},o.createElement(ye,{dataSource:he})),o.createElement(pe,{key:"6",label:"Popup item 7",noIcon:!0},o.createElement(ye,{dataSource:he})),o.createElement(pe,{key:"7",label:"Popup item 8",noIcon:!0},o.createElement(ye,{dataSource:he})),o.createElement(pe,{key:"8",label:"Popup item 9",noIcon:!0},o.createElement(ye,{dataSource:he})));return o.createElement(Se,null,e)}});const{SubMenu:ge,Item:fe}=c;class ve extends o.Component{constructor(e){super(e),this.handleIconDirectionChange=()=>{this.setState({isSelectIconRight:!this.state.isSelectIconRight})},this.onSelectModeChange=e=>{console.log(e,"======="),this.setState({selectMode:e})},this.handleSelect=(e,...t)=>{this.setState({selectedKeys:e}),console.log(e,...t)},this.state={selectMode:void 0,multiple:!1,isSelectIconRight:!1,selectedKeys:["1"]}}render(){const{selectMode:e,selectedKeys:t,isSelectIconRight:n}=this.state;return o.createElement("div",null,o.createElement(s.Group,{value:e,onChange:this.onSelectModeChange},o.createElement(s,{value:"single"},"单选带符号"),o.createElement(s,{value:void 0},"单选不带符号(默认)"),o.createElement(s,{value:"multiple"},"多选")),o.createElement("br",null),e?o.createElement(m,{checked:n,onChange:this.handleIconDirectionChange},"切换标记位置 (默认在左)"):null,o.createElement("br",null),o.createElement(c,{isSelectIconRight:n,className:"my-select-menu",defaultOpenKeys:["sub"],selectMode:e,selectedKeys:t,onSelect:this.handleSelect},o.createElement(fe,{key:"1"},"Option 1"),o.createElement(fe,{disabled:!0,key:"2"},"Disabled option 2"),o.createElement(ge,{key:"sub",label:"Sub menu"},o.createElement(fe,{key:"sub-1"},"Sub option 1"),o.createElement(fe,{key:"sub-2"},"Sub option 2")),o.createElement(fe,{key:"3"},"Option 3")))}}const xe=u.div`
  .my-select-menu {
    margin-top: 10px;
    width: 200px;
  }
`;var _e=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(ve,null);return o.createElement(xe,null,e)}});const Oe={};Oe._basic=y,Oe._context=x,Oe._accordian=w,Oe["_custom-popup"]=N,Oe._hoz=j,Oe["_csutom-select"]=F,Oe._select=Y,Oe["_popup-align"]=Z,Oe._popup=ae,Oe._hover=se,Oe["_render-more"]=ke,Oe._selected=_e;export default Oe;
