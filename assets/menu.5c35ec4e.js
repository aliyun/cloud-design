var e=Object.prototype.hasOwnProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,l=Object.assign,a=(l,a)=>{var o={};for(var c in l)e.call(l,c)&&a.indexOf(c)<0&&(o[c]=l[c]);if(null!=l&&t)for(var c of t(l))a.indexOf(c)<0&&n.call(l,c)&&(o[c]=l[c]);return o};import{r as o,J as c,k as r,G as i,V as s,l as m}from"./index.26e635a6.js";import{q as u}from"./styled-components.browser.esm.08d92d51.js";const{SubMenu:p,Item:d}=c;const b=u.div`
  .my-menu {
    width: 200px;
  }
`;var h=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{defaultOpenKeys:"1",className:"my-menu",openMode:"single"},o.createElement(p,{key:"0",label:"Sub menu 1"},o.createElement(d,{key:"0-0"},"Sub option 1"),o.createElement(d,{key:"0-1"},"Sub option 2"),o.createElement(d,{key:"0-2"},"Sub option 3")),o.createElement(p,{key:"1",label:"Sub menu 2"},o.createElement(d,{key:"1-0"},"Sub option 1"),o.createElement(d,{key:"1-1"},"Sub option 2"),o.createElement(d,{key:"1-2"},"Sub option 3")),o.createElement(p,{key:"2",label:"Sub menu 3"},o.createElement(d,{key:"2-0"},"Sub option 1"),o.createElement(d,{key:"2-1"},"Sub option 2"),o.createElement(d,{key:"2-2"},"Sub option 3")),o.createElement(p,{key:"3",label:"Sub menu 4"},o.createElement(d,{key:"3-0"},"Sub option 1"),o.createElement(d,{key:"3-1"},"Sub option 2"),o.createElement(d,{key:"3-2"},"Sub option 3")));return o.createElement(b,null,e)}});const{SubMenu:E,Item:y,Group:k,Divider:S}=c;const g=u.div`
  .my-menu {
    width: 200px;
  }
`;var f=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{className:"my-menu",defaultOpenKeys:"sub-menu"},o.createElement(y,{key:"1"},"Option 1"),o.createElement(y,{disabled:!0,key:"2"},"Disabled option 2"),o.createElement(S,{key:"divider"}),o.createElement(k,{label:"Group"},o.createElement(y,{key:"group-1"},"Group option 1"),o.createElement(y,{key:"group-2"},"Group option 2")),o.createElement(S,null),o.createElement(E,{key:"sub-menu",label:"Sub menu"},o.createElement(y,{key:"sub-1"},"Sub option 1"),o.createElement(y,{key:"sub-2"},"Sub option 2"),o.createElement(y,{disabled:!0,key:"sub-3"},o.createElement("a",{href:"https://www.taobao.com/",target:"__blank"},"Disabled Option Link 3")),o.createElement(y,{key:"sub-4"},o.createElement("a",{href:"https://www.taobao.com/",target:"__blank"},"Option Link 4"))),o.createElement(y,{key:"3",helper:"CTRL+P"},"Option 3"),o.createElement(y,{disabled:!0,key:"4"},o.createElement("a",{href:"https://www.taobao.com/",target:"__blank"},"Disabled Option Link")),o.createElement(y,{key:"5"},o.createElement("a",{href:"https://www.taobao.com/",target:"__blank"},"Option Link")));return o.createElement(g,null,e)}});const{SubMenu:v,Item:x,Divider:_}=c;class O extends o.Component{constructor(e){super(e),this.createContextMenu=e=>{e.preventDefault();const t=e.target,{top:n,left:l}=t.getBoundingClientRect();c.create({target:e.target,offset:[e.clientX-l,e.clientY-n],className:"context-menu",popupClassName:"context-menu",onItemClick:console.log,selectedKeys:this.state.selectedKeys,selectMode:"multiple",onSelect:this.handleSelect,children:[o.createElement(x,{key:"1"},"Option 1"),o.createElement(x,{key:"2"},"Option 2"),o.createElement(x,{key:"3"},"Option 3"),o.createElement(_,{key:"divider-1"}),o.createElement(v,{key:"sub-menu",label:"Sub menu"},o.createElement(x,{key:"sub-1"},"Sub option 1"),o.createElement(x,{key:"sub-2"},"Sub option 2")),o.createElement(x,{key:"4"},"Option 4"),o.createElement(_,{key:"divider-2"}),o.createElement(x,{key:"5"},"Option 5")]})},this.state={selectedKeys:[]},this.handleSelect=this.handleSelect.bind(this)}handleSelect(e){e=e.filter((e=>["sub-1","sub-2"].indexOf(e)>-1)),this.setState({selectedKeys:e})}render(){return o.createElement("div",{className:"context-demo",onContextMenu:this.createContextMenu},"Right click here to see the context menu!")}}const C=u.div`
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
`;var w=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(O,null);return o.createElement(C,null,e)}});const{CheckboxItem:M,RadioItem:I,Divider:P}=c,N=["male","female"],z=["football","basketball","volleyball"];class D extends o.Component{constructor(e){super(e),this.state={sex:"male",balls:[]},this.handleSexCheck=this.handleSexCheck.bind(this),this.handleBallCheck=this.handleBallCheck.bind(this)}handleSexCheck(e){this.setState({sex:e})}handleBallCheck(e,t){let n;const l=this.state.balls.indexOf(e);t&&-1===l?n=this.state.balls.concat(e):!t&&l>-1&&(n=[...this.state.balls.slice(0,l),...this.state.balls.slice(l+1)]),n&&this.setState({balls:n})}render(){return o.createElement(c,{className:"my-menu"},N.map((e=>o.createElement(I,{key:e,checked:this.state.sex===e,onChange:this.handleSexCheck.bind(this,e)},e))),o.createElement(P,{key:"divider"}),z.map((e=>o.createElement(M,{key:e,checked:this.state.balls.indexOf(e)>-1,onChange:this.handleBallCheck.bind(this,e)},e))))}}const K=u.div`
  .my-menu {
    width: 200px;
  }
`;var j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(D,null);return o.createElement(K,null,e)}});const{SubMenu:T,Item:R,Divider:L}=c;const G=u.div`
  .my-menu {
    width: 200px;
  }
`;var B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{className:"my-menu",mode:"popup",triggerType:"hover"},o.createElement(R,{key:"1"},"Option 1"),o.createElement(R,{key:"2"},"Option 2"),o.createElement(R,{key:"3"},"Option 3"),o.createElement(L,{key:"divider"}),o.createElement(T,{key:"sub-1",label:"Popup menu 1"},o.createElement(R,{key:"popup-1-1"},"Popup option 1"),o.createElement(R,{key:"popup-1-2"},"Popup option 2")),o.createElement(T,{key:"sub-2",label:"Popup menu 2"},o.createElement(R,{key:"popup-2-1"},"Popup option 1"),o.createElement(R,{key:"popup-2-2"},"Popup option 2")));return o.createElement(G,null,e)}});const{PopupItem:A}=c;class q extends o.Component{render(){const e={target:()=>ReactDOM.findDOMNode(this),offset:[-1,0],animation:!1};return o.createElement(c,{className:"my-custom-menu",popupProps:e},o.createElement(A,{key:"0",label:"Popup item 1"},o.createElement("div",{className:"my-custom-content"},"Custom content 1")),o.createElement(A,{key:"1",label:"Popup item 2"},o.createElement("div",{className:"my-custom-content"},"Custom content 2")),o.createElement(A,{key:"2",label:"Popup item 3"},o.createElement("div",{className:"my-custom-content"},"Custom content 3")),o.createElement(A,{key:"3",label:"Popup item 4"},o.createElement("div",{className:"my-custom-content"},"Custom content 4")))}}const F=u.div`
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
`;var J=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(q,null);return o.createElement(F,null,e)}});const{SubMenu:V,Item:W,Divider:X}=c;const Y=u.div`
  .my-menu {
    width: 200px;
  }
`;var $=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{className:"my-menu",mode:"popup"},o.createElement(W,{key:"1"},"Option 1"),o.createElement(W,{key:"2"},"Option 2"),o.createElement(W,{key:"3"},"Option 3"),o.createElement(X,{key:"divider"}),o.createElement(V,{key:"sub-1",label:"Popup menu 1"},o.createElement(W,{key:"popup-1-1"},"Popup option 1"),o.createElement(W,{key:"popup-1-2"},"Popup option 2")),o.createElement(V,{key:"sub-2",label:"Popup menu 2"},o.createElement(W,{key:"popup-2-1"},"Popup option 1"),o.createElement(W,{key:"popup-2-2"},"Popup option 2")));return o.createElement(Y,null,e)}});const{SubMenu:H,Item:Q,PopupItem:U,Divider:Z}=c,ee={align:"tc bc",triggerType:"click"},te=[{title:"库存管理",children:[{title:"部门库存管理",link:""},{title:"小二库存管理",link:""}]},{title:"功能模块管理",children:[{title:"功能模块管理",link:""},{title:"卡片管理",link:""},{title:"首页布局",link:""},{title:"页面管理",link:""}]},{title:"系统管理",children:[{title:"角色管理",link:""},{title:"标签管理",link:""},{title:"字典管理",link:""}]}],ne=e=>{const{dataSource:t}=e,n=a(e,["dataSource"]);return o.createElement("div",l({className:"my-custom-content3"},n),o.createElement(r,{direction:"row"},t.map(((e,t)=>o.createElement(c,{embeddable:!0,key:t},o.createElement(c.Item,null,o.createElement("div",{className:"title"},e.title)),o.createElement(Z,null),e.dataSource.map(((e,t)=>{const n=e.children&&e.children.map(((e,t)=>o.createElement(c.Item,{key:t},o.createElement("a",{href:e.link},e.title))));return[o.createElement("div",{className:"sub-title",key:`title-${t}`},e.title),...n]})))))))},le=e=>{const{dataSource:t}=e,n=a(e,["dataSource"]);return o.createElement("div",l({className:"my-custom-content2"},n),o.createElement(r,{direction:"row"},t.map(((e,t)=>o.createElement(c,{embeddable:!0,key:t},o.createElement("div",{className:"sub-title"},e.title),e.children.map(((e,t)=>o.createElement(c.Item,{key:t},o.createElement("a",{href:e.link},e.title)))))))))};const ae=u.div`
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
`;var oe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{hozInLine:!0,direction:"hoz",mode:"popup",className:"my-hoz-menu",popupClassName:"my-hoz-menu",popupProps:ee,renderMore:e=>{const t=e.map(((e,t)=>{const n=e.props.children.props;return{title:e.props.label,dataSource:n.dataSource}}));return o.createElement(U,{noIcon:!0,triggerType:"click",key:"0-more",label:"更多"},o.createElement(ne,{dataSource:t}))}},o.createElement(U,{key:"0",label:"Popup item 1",noIcon:!0},o.createElement(le,{dataSource:te})),o.createElement(U,{key:"1",label:"Popup item 2",noIcon:!0},o.createElement(le,{dataSource:te})),o.createElement(U,{key:"2",label:"Popup item 3",noIcon:!0},o.createElement(le,{dataSource:te})),o.createElement(U,{key:"3",label:"Popup item 4",noIcon:!0},o.createElement(le,{dataSource:te})),o.createElement(U,{key:"4",label:"Popup item 5",noIcon:!0},o.createElement(le,{dataSource:te})),o.createElement(U,{key:"5",label:"Popup item 6",noIcon:!0},o.createElement(le,{dataSource:te})),o.createElement(U,{key:"6",label:"Popup item 7",noIcon:!0},o.createElement(le,{dataSource:te})),o.createElement(U,{key:"7",label:"Popup item 8",noIcon:!0},o.createElement(le,{dataSource:te})),o.createElement(U,{key:"8",label:"Popup item 9",noIcon:!0},o.createElement(le,{dataSource:te})));return o.createElement(ae,null,e)}});const{SubMenu:ce,Item:re,Divider:ie}=c;const se=u.div`
  .my-menu {
    width: 200px;
  }
`;var me=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{className:"my-menu",mode:"popup",popupAlign:"outside"},o.createElement(re,{key:"1"},"Option 1"),o.createElement(re,{key:"2"},"Option 2"),o.createElement(re,{key:"3"},"Option 3"),o.createElement(ie,{key:"divider"}),o.createElement(ce,{key:"sub-1",label:"Popup menu 1"},o.createElement(re,{key:"popup-1-1"},"Popup option 1"),o.createElement(re,{key:"popup-1-2"},"Popup option 2")),o.createElement(ce,{key:"sub-2",label:"Popup menu 2"},o.createElement(re,{key:"popup-2-1"},"Popup option 1"),o.createElement(re,{key:"popup-2-2"},"Popup option 2")));return o.createElement(se,null,e)}});const{SubMenu:ue,Item:pe}=c;class de extends o.Component{constructor(e){super(e),this.handleIconDirectionChange=()=>{this.setState({isSelectIconRight:!this.state.isSelectIconRight})},this.onSelectModeChange=e=>{console.log(e,"======="),this.setState({selectMode:e})},this.handleSelect=(e,...t)=>{this.setState({selectedKeys:e}),console.log(e,...t)},this.state={selectMode:void 0,multiple:!1,isSelectIconRight:!1,selectedKeys:["1"]}}render(){const{selectMode:e,selectedKeys:t,isSelectIconRight:n}=this.state;return o.createElement("div",null,o.createElement(i.Group,{value:e,onChange:this.onSelectModeChange},o.createElement(i,{value:"single"},"单选带符号"),o.createElement(i,{value:void 0},"单选不带符号(默认)"),o.createElement(i,{value:"multiple"},"多选")),o.createElement("br",null),e?o.createElement(s,{checked:n,onChange:this.handleIconDirectionChange},"切换标记位置 (默认在左)"):null,o.createElement("br",null),o.createElement(c,{isSelectIconRight:n,className:"my-select-menu",defaultOpenKeys:["sub"],selectMode:e,selectedKeys:t,onSelect:this.handleSelect},o.createElement(pe,{key:"1"},"Option 1"),o.createElement(pe,{disabled:!0,key:"2"},"Disabled option 2"),o.createElement(ue,{key:"sub",label:"Sub menu"},o.createElement(pe,{key:"sub-1"},"Sub option 1"),o.createElement(pe,{key:"sub-2"},"Sub option 2")),o.createElement(pe,{key:"3"},"Option 3")))}}const be=u.div`
  .my-select-menu {
    margin-top: 10px;
    width: 200px;
  }
`;var he=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(de,null);return o.createElement(be,null,e)}});const{SubMenu:Ee,Item:ye}=c;const ke=u.div`
  .my-hoz-menu .next-menu-item {
    width: 160px;
  }
  .my-hoz-menu .next-menu-item.next-menu-more {
    width: 60px;
  }
`;var Se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{hozInLine:!0,direction:"hoz",mode:"popup",className:"my-hoz-menu",popupClassName:"my-hoz-menu",popupAutoWidth:!0},o.createElement(ye,{key:"1"},"First"),o.createElement(ye,{key:"2"},"Second"),o.createElement(Ee,{label:"Sub Nav"},o.createElement(ye,{key:"sub-12"},"Sub option 1"),o.createElement(ye,{key:"sub-22"},"Sub option 2"),o.createElement(Ee,{label:"Sub Sub Nav"},o.createElement(ye,{key:"sub-sub-122"},"Sub sub option 1"),o.createElement(ye,{key:"sub-sub-222"},"Sub sub option 2"))),o.createElement(Ee,{label:"Sub Nav"},o.createElement(ye,{key:"sub-1"},"Sub option 1"),o.createElement(ye,{key:"sub-2"},"Sub option 2"),o.createElement(Ee,{label:"Sub Sub Nav"},o.createElement(ye,{key:"sub-sub-1"},"Sub sub option 1"),o.createElement(ye,{key:"sub-sub-2"},"Sub sub option 2"))),o.createElement(ye,{key:"3"},"Third"));return o.createElement(ke,null,e)}});const{SubMenu:ge,Item:fe}=c;class ve extends o.Component{constructor(e){super(e),this.state={multiple:!1,subMenuSelectable:!1,shallowSelect:!1,isSelectIconRight:!1,selectedKeys:["1"]},["handleMultipleChange","handleSubMenuSelectableChange","handleShallowSelectChange","handleSelect","handleIconDirectionChange"].forEach((e=>{this[e]=this[e].bind(this)}))}handleMultipleChange(){this.setState({multiple:!this.state.multiple,selectedKeys:[]})}handleIconDirectionChange(){this.setState({isSelectIconRight:!this.state.isSelectIconRight,selectedKeys:[]})}handleSubMenuSelectableChange(){this.setState({subMenuSelectable:!this.state.subMenuSelectable,selectedKeys:[]})}handleShallowSelectChange(){this.setState({shallowSelect:!this.state.shallowSelect,selectedKeys:[]})}handleSelect(e,...t){this.setState({selectedKeys:e}),console.log(e,...t)}render(){const{multiple:e,subMenuSelectable:t,shallowSelect:n,selectedKeys:l,isSelectIconRight:a}=this.state,r=e?"multiple":"single";return o.createElement("div",null,o.createElement("div",null,o.createElement("span",{className:"my-switch-label"},"Multiple "),o.createElement(m,{value:e,onChange:this.handleMultipleChange})),o.createElement("div",null,o.createElement("span",{className:"my-switch-label"},"isSelectIconRight "),o.createElement(m,{value:e,onChange:this.handleIconDirectionChange})),o.createElement("div",null,o.createElement("span",{className:"my-switch-label"},"Label of submenu selectable "),o.createElement(m,{value:e,onChange:this.handleSubMenuSelectableChange})),o.createElement("div",null,o.createElement("span",{className:"my-switch-label"},"Only first level selectable "),o.createElement(m,{value:e,onChange:this.handleShallowSelectChange})),o.createElement(c,{isSelectIconRight:a,className:"my-select-menu",defaultOpenKeys:["sub"],selectMode:r,selectedKeys:l,shallowSelect:n,onSelect:this.handleSelect},o.createElement(fe,{key:"1"},"Option 1"),o.createElement(fe,{disabled:!0,key:"2"},"Disabled option 2"),o.createElement(ge,{key:"sub",label:"Sub menu",selectable:t},o.createElement(fe,{key:"sub-1"},"Sub option 1"),o.createElement(fe,{key:"sub-2"},"Sub option 2")),o.createElement(fe,{key:"3"},"Option 3")))}}const xe=u.div`
  .my-switch-label {
    vertical-align: super;
  }

  .my-select-menu {
    margin-top: 10px;
    width: 200px;
  }
`;var _e=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(ve,null);return o.createElement(xe,null,e)}});const Oe={};Oe._accordian=h,Oe._basic=f,Oe._context=w,Oe["_csutom-select"]=j,Oe._hover=B,Oe["_custom-popup"]=J,Oe._popup=$,Oe["_render-more"]=oe,Oe["_popup-align"]=me,Oe._selected=he,Oe._hoz=Se,Oe._select=_e;export default Oe;
