var e=Object.prototype.hasOwnProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,l=Object.assign,a=(l,a)=>{var o={};for(var c in l)e.call(l,c)&&a.indexOf(c)<0&&(o[c]=l[c]);if(null!=l&&t)for(var c of t(l))a.indexOf(c)<0&&n.call(l,c)&&(o[c]=l[c]);return o};import{r as o,X as c,n as r,q as i,J as s,T as m}from"./index.db891132.js";import{q as u}from"./styled-components.browser.esm.2d3384e1.js";const{SubMenu:p,Item:d,Group:b,Divider:h}=c;const E=u.div`
  .my-menu {
    width: 200px;
  }
`;var y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{className:"my-menu",defaultOpenKeys:"sub-menu"},o.createElement(d,{key:"1"},"Option 1"),o.createElement(d,{disabled:!0,key:"2"},"Disabled option 2"),o.createElement(h,{key:"divider"}),o.createElement(b,{label:"Group"},o.createElement(d,{key:"group-1"},"Group option 1"),o.createElement(d,{key:"group-2"},"Group option 2")),o.createElement(h,null),o.createElement(p,{key:"sub-menu",label:"Sub menu"},o.createElement(d,{key:"sub-1"},"Sub option 1"),o.createElement(d,{key:"sub-2"},"Sub option 2"),o.createElement(d,{disabled:!0,key:"sub-3"},o.createElement("a",{href:"https://www.taobao.com/",target:"__blank"},"Disabled Option Link 3")),o.createElement(d,{key:"sub-4"},o.createElement("a",{href:"https://www.taobao.com/",target:"__blank"},"Option Link 4"))),o.createElement(d,{key:"3",helper:"CTRL+P"},"Option 3"),o.createElement(d,{disabled:!0,key:"4"},o.createElement("a",{href:"https://www.taobao.com/",target:"__blank"},"Disabled Option Link")),o.createElement(d,{key:"5"},o.createElement("a",{href:"https://www.taobao.com/",target:"__blank"},"Option Link")));return o.createElement(E,null,e)}});const{SubMenu:k,Item:S}=c;const g=u.div`
  .my-menu {
    width: 200px;
  }
`;var f=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{defaultOpenKeys:"1",className:"my-menu",openMode:"single"},o.createElement(k,{key:"0",label:"Sub menu 1"},o.createElement(S,{key:"0-0"},"Sub option 1"),o.createElement(S,{key:"0-1"},"Sub option 2"),o.createElement(S,{key:"0-2"},"Sub option 3")),o.createElement(k,{key:"1",label:"Sub menu 2"},o.createElement(S,{key:"1-0"},"Sub option 1"),o.createElement(S,{key:"1-1"},"Sub option 2"),o.createElement(S,{key:"1-2"},"Sub option 3")),o.createElement(k,{key:"2",label:"Sub menu 3"},o.createElement(S,{key:"2-0"},"Sub option 1"),o.createElement(S,{key:"2-1"},"Sub option 2"),o.createElement(S,{key:"2-2"},"Sub option 3")),o.createElement(k,{key:"3",label:"Sub menu 4"},o.createElement(S,{key:"3-0"},"Sub option 1"),o.createElement(S,{key:"3-1"},"Sub option 2"),o.createElement(S,{key:"3-2"},"Sub option 3")));return o.createElement(g,null,e)}});const{SubMenu:v,Item:x,Divider:_}=c;class O extends o.Component{constructor(e){super(e),this.createContextMenu=e=>{e.preventDefault();const t=e.target,{top:n,left:l}=t.getBoundingClientRect();c.create({target:e.target,offset:[e.clientX-l,e.clientY-n],className:"context-menu",popupClassName:"context-menu",onItemClick:console.log,selectedKeys:this.state.selectedKeys,selectMode:"multiple",onSelect:this.handleSelect,children:[o.createElement(x,{key:"1"},"Option 1"),o.createElement(x,{key:"2"},"Option 2"),o.createElement(x,{key:"3"},"Option 3"),o.createElement(_,{key:"divider-1"}),o.createElement(v,{key:"sub-menu",label:"Sub menu"},o.createElement(x,{key:"sub-1"},"Sub option 1"),o.createElement(x,{key:"sub-2"},"Sub option 2")),o.createElement(x,{key:"4"},"Option 4"),o.createElement(_,{key:"divider-2"}),o.createElement(x,{key:"5"},"Option 5")]})},this.state={selectedKeys:[]},this.handleSelect=this.handleSelect.bind(this)}handleSelect(e){e=e.filter((e=>["sub-1","sub-2"].indexOf(e)>-1)),this.setState({selectedKeys:e})}render(){return o.createElement("div",{className:"context-demo",onContextMenu:this.createContextMenu},"Right click here to see the context menu!")}}const C=u.div`
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
`;var T=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(D,null);return o.createElement(K,null,e)}});const{SubMenu:j,Item:R,Divider:L}=c;const B=u.div`
  .my-menu {
    width: 200px;
  }
`;var G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{className:"my-menu",mode:"popup",triggerType:"hover"},o.createElement(R,{key:"1"},"Option 1"),o.createElement(R,{key:"2"},"Option 2"),o.createElement(R,{key:"3"},"Option 3"),o.createElement(L,{key:"divider"}),o.createElement(j,{key:"sub-1",label:"Popup menu 1"},o.createElement(R,{key:"popup-1-1"},"Popup option 1"),o.createElement(R,{key:"popup-1-2"},"Popup option 2")),o.createElement(j,{key:"sub-2",label:"Popup menu 2"},o.createElement(R,{key:"popup-2-1"},"Popup option 1"),o.createElement(R,{key:"popup-2-2"},"Popup option 2")));return o.createElement(B,null,e)}});const{PopupItem:q}=c;class A extends o.Component{render(){const e={target:()=>ReactDOM.findDOMNode(this),offset:[-1,0],animation:!1};return o.createElement(c,{className:"my-custom-menu",popupProps:e},o.createElement(q,{key:"0",label:"Popup item 1",triggerType:"click"},o.createElement("div",{className:"my-custom-content"},"Custom content 1")),o.createElement(q,{key:"1",label:"Popup item 2"},o.createElement("div",{className:"my-custom-content"},"Custom content 2")),o.createElement(q,{key:"2",label:"Popup item 3"},o.createElement("div",{className:"my-custom-content"},"Custom content 3")),o.createElement(q,{key:"3",label:"Popup item 4"},o.createElement("div",{className:"my-custom-content"},"Custom content 4")))}}const X=u.div`
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
`;var F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(A,null);return o.createElement(X,null,e)}});const{SubMenu:J,Item:W,Divider:Y}=c;const $=u.div`
  .my-menu {
    width: 200px;
  }
`;var H=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{className:"my-menu",mode:"popup",popupAlign:"outside"},o.createElement(W,{key:"1"},"Option 1"),o.createElement(W,{key:"2"},"Option 2"),o.createElement(W,{key:"3"},"Option 3"),o.createElement(Y,{key:"divider"}),o.createElement(J,{key:"sub-1",label:"Popup menu 1"},o.createElement(W,{key:"popup-1-1"},"Popup option 1"),o.createElement(W,{key:"popup-1-2"},"Popup option 2")),o.createElement(J,{key:"sub-2",label:"Popup menu 2"},o.createElement(W,{key:"popup-2-1"},"Popup option 1"),o.createElement(W,{key:"popup-2-2"},"Popup option 2")));return o.createElement($,null,e)}});const{SubMenu:Q,Item:U}=c;const V=u.div`
  .my-hoz-menu .next-menu-item {
    width: 160px;
  }
  .my-hoz-menu .next-menu-item.next-menu-more {
    width: 60px;
  }
`;var Z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{hozInLine:!0,direction:"hoz",mode:"popup",className:"my-hoz-menu",popupClassName:"my-hoz-menu",popupAutoWidth:!0},o.createElement(U,{key:"1"},"First"),o.createElement(U,{key:"2"},"Second"),o.createElement(Q,{label:"Sub Nav"},o.createElement(U,{key:"sub-12"},"Sub option 1"),o.createElement(U,{key:"sub-22"},"Sub option 2"),o.createElement(Q,{label:"Sub Sub Nav"},o.createElement(U,{key:"sub-sub-122"},"Sub sub option 1"),o.createElement(U,{key:"sub-sub-222"},"Sub sub option 2"))),o.createElement(Q,{label:"Sub Nav"},o.createElement(U,{key:"sub-1"},"Sub option 1"),o.createElement(U,{key:"sub-2"},"Sub option 2"),o.createElement(Q,{label:"Sub Sub Nav"},o.createElement(U,{key:"sub-sub-1"},"Sub sub option 1"),o.createElement(U,{key:"sub-sub-2"},"Sub sub option 2"))),o.createElement(U,{key:"3"},"Third"));return o.createElement(V,null,e)}});const{SubMenu:ee,Item:te,PopupItem:ne,Divider:le}=c,ae={align:"tc bc",triggerType:"click"},oe=[{title:"库存管理",children:[{title:"部门库存管理",link:""},{title:"小二库存管理",link:""}]},{title:"功能模块管理",children:[{title:"功能模块管理",link:""},{title:"卡片管理",link:""},{title:"首页布局",link:""},{title:"页面管理",link:""}]},{title:"系统管理",children:[{title:"角色管理",link:""},{title:"标签管理",link:""},{title:"字典管理",link:""}]}],ce=e=>{const{dataSource:t}=e,n=a(e,["dataSource"]);return o.createElement("div",l({className:"my-custom-content3"},n),o.createElement(r,{direction:"row"},t.map(((e,t)=>o.createElement(c,{embeddable:!0,key:t},o.createElement(c.Item,null,o.createElement("div",{className:"title"},e.title)),o.createElement(le,null),e.dataSource.map(((e,t)=>{const n=e.children&&e.children.map(((e,t)=>o.createElement(c.Item,{key:t},o.createElement("a",{href:e.link},e.title))));return[o.createElement("div",{className:"sub-title",key:`title-${t}`},e.title),...n]})))))))},re=e=>{const{dataSource:t}=e,n=a(e,["dataSource"]);return o.createElement("div",l({className:"my-custom-content2"},n),o.createElement(r,{direction:"row"},t.map(((e,t)=>o.createElement(c,{embeddable:!0,key:t},o.createElement("div",{className:"sub-title"},e.title),e.children.map(((e,t)=>o.createElement(c.Item,{key:t},o.createElement("a",{href:e.link},e.title)))))))))};const ie=u.div`
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
`;var se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{hozInLine:!0,direction:"hoz",mode:"popup",className:"my-hoz-menu",popupClassName:"my-hoz-menu",popupProps:ae,renderMore:e=>{const t=e.map(((e,t)=>{const n=e.props.children.props;return{title:e.props.label,dataSource:n.dataSource}}));return o.createElement(ne,{noIcon:!0,triggerType:"click",key:"0-more",label:"更多"},o.createElement(ce,{dataSource:t}))}},o.createElement(ne,{key:"0",label:"Popup item 1",noIcon:!0},o.createElement(re,{dataSource:oe})),o.createElement(ne,{key:"1",label:"Popup item 2",noIcon:!0},o.createElement(re,{dataSource:oe})),o.createElement(ne,{key:"2",label:"Popup item 3",noIcon:!0},o.createElement(re,{dataSource:oe})),o.createElement(ne,{key:"3",label:"Popup item 4",noIcon:!0},o.createElement(re,{dataSource:oe})),o.createElement(ne,{key:"4",label:"Popup item 5",noIcon:!0},o.createElement(re,{dataSource:oe})),o.createElement(ne,{key:"5",label:"Popup item 6",noIcon:!0},o.createElement(re,{dataSource:oe})),o.createElement(ne,{key:"6",label:"Popup item 7",noIcon:!0},o.createElement(re,{dataSource:oe})),o.createElement(ne,{key:"7",label:"Popup item 8",noIcon:!0},o.createElement(re,{dataSource:oe})),o.createElement(ne,{key:"8",label:"Popup item 9",noIcon:!0},o.createElement(re,{dataSource:oe})));return o.createElement(ie,null,e)}});const{SubMenu:me,Item:ue}=c;class pe extends o.Component{constructor(e){super(e),this.state={multiple:!1,subMenuSelectable:!1,shallowSelect:!1,isSelectIconRight:!1,selectedKeys:["1"]},["handleMultipleChange","handleSubMenuSelectableChange","handleShallowSelectChange","handleSelect","handleIconDirectionChange"].forEach((e=>{this[e]=this[e].bind(this)}))}handleMultipleChange(){this.setState({multiple:!this.state.multiple,selectedKeys:[]})}handleIconDirectionChange(){this.setState({isSelectIconRight:!this.state.isSelectIconRight,selectedKeys:[]})}handleSubMenuSelectableChange(){this.setState({subMenuSelectable:!this.state.subMenuSelectable,selectedKeys:[]})}handleShallowSelectChange(){this.setState({shallowSelect:!this.state.shallowSelect,selectedKeys:[]})}handleSelect(e,...t){this.setState({selectedKeys:e}),console.log(e,...t)}render(){const{multiple:e,subMenuSelectable:t,shallowSelect:n,selectedKeys:l,isSelectIconRight:a}=this.state,r=e?"multiple":"single";return o.createElement("div",null,o.createElement("div",null,o.createElement("span",{className:"my-switch-label"},"Multiple "),o.createElement(i,{value:e,onChange:this.handleMultipleChange})),o.createElement("div",null,o.createElement("span",{className:"my-switch-label"},"isSelectIconRight "),o.createElement(i,{value:e,onChange:this.handleIconDirectionChange})),o.createElement("div",null,o.createElement("span",{className:"my-switch-label"},"Label of submenu selectable "),o.createElement(i,{value:e,onChange:this.handleSubMenuSelectableChange})),o.createElement("div",null,o.createElement("span",{className:"my-switch-label"},"Only first level selectable "),o.createElement(i,{value:e,onChange:this.handleShallowSelectChange})),o.createElement(c,{isSelectIconRight:a,className:"my-select-menu",defaultOpenKeys:["sub"],selectMode:r,selectedKeys:l,shallowSelect:n,onSelect:this.handleSelect},o.createElement(ue,{key:"1"},"Option 1"),o.createElement(ue,{disabled:!0,key:"2"},"Disabled option 2"),o.createElement(me,{key:"sub",label:"Sub menu",selectable:t},o.createElement(ue,{key:"sub-1"},"Sub option 1"),o.createElement(ue,{key:"sub-2"},"Sub option 2")),o.createElement(ue,{key:"3"},"Option 3")))}}const de=u.div`
  .my-switch-label {
    vertical-align: super;
  }

  .my-select-menu {
    margin-top: 10px;
    width: 200px;
  }
`;var be=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(pe,null);return o.createElement(de,null,e)}});const{SubMenu:he,Item:Ee,Divider:ye}=c;const ke=u.div`
  .my-menu {
    width: 200px;
  }
`;var Se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{className:"my-menu",mode:"popup"},o.createElement(Ee,{key:"1"},"Option 1"),o.createElement(Ee,{key:"2"},"Option 2"),o.createElement(Ee,{key:"3"},"Option 3"),o.createElement(ye,{key:"divider"}),o.createElement(he,{key:"sub-1",label:"Popup menu 1"},o.createElement(Ee,{key:"popup-1-1"},"Popup option 1"),o.createElement(Ee,{key:"popup-1-2"},"Popup option 2")),o.createElement(he,{key:"sub-2",label:"Popup menu 2"},o.createElement(Ee,{key:"popup-2-1"},"Popup option 1"),o.createElement(Ee,{key:"popup-2-2"},"Popup option 2")));return o.createElement(ke,null,e)}});const{SubMenu:ge,Item:fe}=c;class ve extends o.Component{constructor(e){super(e),this.handleIconDirectionChange=()=>{this.setState({isSelectIconRight:!this.state.isSelectIconRight})},this.onSelectModeChange=e=>{console.log(e,"======="),this.setState({selectMode:e})},this.handleSelect=(e,...t)=>{this.setState({selectedKeys:e}),console.log(e,...t)},this.state={selectMode:void 0,multiple:!1,isSelectIconRight:!1,selectedKeys:["1"]}}render(){const{selectMode:e,selectedKeys:t,isSelectIconRight:n}=this.state;return o.createElement("div",null,o.createElement(s.Group,{value:e,onChange:this.onSelectModeChange},o.createElement(s,{value:"single"},"单选带符号"),o.createElement(s,{value:void 0},"单选不带符号(默认)"),o.createElement(s,{value:"multiple"},"多选")),o.createElement("br",null),e?o.createElement(m,{checked:n,onChange:this.handleIconDirectionChange},"切换标记位置 (默认在左)"):null,o.createElement("br",null),o.createElement(c,{isSelectIconRight:n,className:"my-select-menu",defaultOpenKeys:["sub"],selectMode:e,selectedKeys:t,onSelect:this.handleSelect},o.createElement(fe,{key:"1"},"Option 1"),o.createElement(fe,{disabled:!0,key:"2"},"Disabled option 2"),o.createElement(ge,{key:"sub",label:"Sub menu"},o.createElement(fe,{key:"sub-1"},"Sub option 1"),o.createElement(fe,{key:"sub-2"},"Sub option 2")),o.createElement(fe,{key:"3"},"Option 3")))}}const xe=u.div`
  .my-select-menu {
    margin-top: 10px;
    width: 200px;
  }
`;var _e=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(ve,null);return o.createElement(xe,null,e)}});const Oe={};Oe._basic=y,Oe._accordian=f,Oe._context=w,Oe["_csutom-select"]=T,Oe._hover=G,Oe["_custom-popup"]=F,Oe["_popup-align"]=H,Oe._hoz=Z,Oe["_render-more"]=se,Oe._select=be,Oe._popup=Se,Oe._selected=_e;export default Oe;
