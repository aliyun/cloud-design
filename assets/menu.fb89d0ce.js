var e=Object.prototype.hasOwnProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,l=Object.assign,a=(l,a)=>{var o={};for(var c in l)e.call(l,c)&&a.indexOf(c)<0&&(o[c]=l[c]);if(null!=l&&t)for(var c of t(l))a.indexOf(c)<0&&n.call(l,c)&&(o[c]=l[c]);return o};import{r as o,D as c,G as r,F as m}from"./index.9ecd65a8.js";import{q as i}from"./styled-components.browser.esm.fe3a3df0.js";const{SubMenu:u,Item:s}=c;const p=i.div`
  .my-menu {
    width: 200px;
  }
`;var d=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{defaultOpenKeys:"1",className:"my-menu",openMode:"single"},o.createElement(u,{key:"0",label:"Sub menu 1"},o.createElement(s,{key:"0-0"},"Sub option 1"),o.createElement(s,{key:"0-1"},"Sub option 2"),o.createElement(s,{key:"0-2"},"Sub option 3")),o.createElement(u,{key:"1",label:"Sub menu 2"},o.createElement(s,{key:"1-0"},"Sub option 1"),o.createElement(s,{key:"1-1"},"Sub option 2"),o.createElement(s,{key:"1-2"},"Sub option 3")),o.createElement(u,{key:"2",label:"Sub menu 3"},o.createElement(s,{key:"2-0"},"Sub option 1"),o.createElement(s,{key:"2-1"},"Sub option 2"),o.createElement(s,{key:"2-2"},"Sub option 3")),o.createElement(u,{key:"3",label:"Sub menu 4"},o.createElement(s,{key:"3-0"},"Sub option 1"),o.createElement(s,{key:"3-1"},"Sub option 2"),o.createElement(s,{key:"3-2"},"Sub option 3")));return o.createElement(p,null,e)}});const{SubMenu:b,Item:h,Group:y,Divider:E}=c;const k=i.div`
  .my-menu {
    width: 200px;
  }
`;var S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{className:"my-menu",defaultOpenKeys:"sub-menu"},o.createElement(h,{key:"1"},"Option 1"),o.createElement(h,{disabled:!0,key:"2"},"Disabled option 2"),o.createElement(E,{key:"divider"}),o.createElement(y,{label:"Group"},o.createElement(h,{key:"group-1"},"Group option 1"),o.createElement(h,{key:"group-2"},"Group option 2")),o.createElement(E,null),o.createElement(b,{key:"sub-menu",label:"Sub menu"},o.createElement(h,{key:"sub-1"},"Sub option 1"),o.createElement(h,{key:"sub-2"},"Sub option 2"),o.createElement(h,{disabled:!0,key:"sub-3"},o.createElement("a",{href:"https://www.taobao.com/",target:"__blank"},"Disabled Option Link 3")),o.createElement(h,{key:"sub-4"},o.createElement("a",{href:"https://www.taobao.com/",target:"__blank"},"Option Link 4"))),o.createElement(h,{key:"3",helper:"CTRL+P"},"Option 3"),o.createElement(h,{disabled:!0,key:"4"},o.createElement("a",{href:"https://www.taobao.com/",target:"__blank"},"Disabled Option Link")),o.createElement(h,{key:"5"},o.createElement("a",{href:"https://www.taobao.com/",target:"__blank"},"Option Link")));return o.createElement(k,null,e)}});const{CheckboxItem:g,RadioItem:f,Divider:x}=c,v=["male","female"],_=["football","basketball","volleyball"];class O extends o.Component{constructor(e){super(e),this.state={sex:"male",balls:[]},this.handleSexCheck=this.handleSexCheck.bind(this),this.handleBallCheck=this.handleBallCheck.bind(this)}handleSexCheck(e){this.setState({sex:e})}handleBallCheck(e,t){let n;const l=this.state.balls.indexOf(e);t&&-1===l?n=this.state.balls.concat(e):!t&&l>-1&&(n=[...this.state.balls.slice(0,l),...this.state.balls.slice(l+1)]),n&&this.setState({balls:n})}render(){return o.createElement(c,{className:"my-menu"},v.map((e=>o.createElement(f,{key:e,checked:this.state.sex===e,onChange:this.handleSexCheck.bind(this,e)},e))),o.createElement(x,{key:"divider"}),_.map((e=>o.createElement(g,{key:e,checked:this.state.balls.indexOf(e)>-1,onChange:this.handleBallCheck.bind(this,e)},e))))}}const w=i.div`
  .my-menu {
    width: 200px;
  }
`;var C=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(O,null);return o.createElement(w,null,e)}});const{SubMenu:M,Item:I,Divider:P}=c;const N=i.div`
  .my-menu {
    width: 200px;
  }
`;var z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{className:"my-menu",mode:"popup",triggerType:"hover"},o.createElement(I,{key:"1"},"Option 1"),o.createElement(I,{key:"2"},"Option 2"),o.createElement(I,{key:"3"},"Option 3"),o.createElement(P,{key:"divider"}),o.createElement(M,{key:"sub-1",label:"Popup menu 1"},o.createElement(I,{key:"popup-1-1"},"Popup option 1"),o.createElement(I,{key:"popup-1-2"},"Popup option 2")),o.createElement(M,{key:"sub-2",label:"Popup menu 2"},o.createElement(I,{key:"popup-2-1"},"Popup option 1"),o.createElement(I,{key:"popup-2-2"},"Popup option 2")));return o.createElement(N,null,e)}});const{PopupItem:D}=c;class j extends o.Component{render(){const e={target:()=>ReactDOM.findDOMNode(this),offset:[-1,0],animation:!1};return o.createElement(c,{className:"my-custom-menu",popupProps:e},o.createElement(D,{key:"0",label:"Popup item 1"},o.createElement("div",{className:"my-custom-content"},"Custom content 1")),o.createElement(D,{key:"1",label:"Popup item 2"},o.createElement("div",{className:"my-custom-content"},"Custom content 2")),o.createElement(D,{key:"2",label:"Popup item 3"},o.createElement("div",{className:"my-custom-content"},"Custom content 3")),o.createElement(D,{key:"3",label:"Popup item 4"},o.createElement("div",{className:"my-custom-content"},"Custom content 4")))}}const T=i.div`
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
`;var K=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(j,null);return o.createElement(T,null,e)}});const{SubMenu:R,Item:L,Divider:B}=c;class G extends o.Component{constructor(e){super(e),this.createContextMenu=e=>{e.preventDefault();const t=e.target,{top:n,left:l}=t.getBoundingClientRect();c.create({target:e.target,offset:[e.clientX-l,e.clientY-n],className:"context-menu",popupClassName:"context-menu",onItemClick:console.log,selectedKeys:this.state.selectedKeys,selectMode:"multiple",onSelect:this.handleSelect,children:[o.createElement(L,{key:"1"},"Option 1"),o.createElement(L,{key:"2"},"Option 2"),o.createElement(L,{key:"3"},"Option 3"),o.createElement(B,{key:"divider-1"}),o.createElement(R,{key:"sub-menu",label:"Sub menu"},o.createElement(L,{key:"sub-1"},"Sub option 1"),o.createElement(L,{key:"sub-2"},"Sub option 2")),o.createElement(L,{key:"4"},"Option 4"),o.createElement(B,{key:"divider-2"}),o.createElement(L,{key:"5"},"Option 5")]})},this.state={selectedKeys:[]},this.handleSelect=this.handleSelect.bind(this)}handleSelect(e){e=e.filter((e=>["sub-1","sub-2"].indexOf(e)>-1)),this.setState({selectedKeys:e})}render(){return o.createElement("div",{className:"context-demo",onContextMenu:this.createContextMenu},"Right click here to see the context menu!")}}const A=i.div`
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
`;var F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(G,null);return o.createElement(A,null,e)}});const{SubMenu:q,Item:W,Divider:X}=c;const Y=i.div`
  .my-menu {
    width: 200px;
  }
`;var $=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{className:"my-menu",mode:"popup",popupAlign:"outside"},o.createElement(W,{key:"1"},"Option 1"),o.createElement(W,{key:"2"},"Option 2"),o.createElement(W,{key:"3"},"Option 3"),o.createElement(X,{key:"divider"}),o.createElement(q,{key:"sub-1",label:"Popup menu 1"},o.createElement(W,{key:"popup-1-1"},"Popup option 1"),o.createElement(W,{key:"popup-1-2"},"Popup option 2")),o.createElement(q,{key:"sub-2",label:"Popup menu 2"},o.createElement(W,{key:"popup-2-1"},"Popup option 1"),o.createElement(W,{key:"popup-2-2"},"Popup option 2")));return o.createElement(Y,null,e)}});const{SubMenu:H,Item:J,Divider:Q}=c;const U=i.div`
  .my-menu {
    width: 200px;
  }
`;var V=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{className:"my-menu",mode:"popup"},o.createElement(J,{key:"1"},"Option 1"),o.createElement(J,{key:"2"},"Option 2"),o.createElement(J,{key:"3"},"Option 3"),o.createElement(Q,{key:"divider"}),o.createElement(H,{key:"sub-1",label:"Popup menu 1"},o.createElement(J,{key:"popup-1-1"},"Popup option 1"),o.createElement(J,{key:"popup-1-2"},"Popup option 2")),o.createElement(H,{key:"sub-2",label:"Popup menu 2"},o.createElement(J,{key:"popup-2-1"},"Popup option 1"),o.createElement(J,{key:"popup-2-2"},"Popup option 2")));return o.createElement(U,null,e)}});const{SubMenu:Z,Item:ee}=c;const te=i.div`
  .my-hoz-menu .next-menu-item {
    width: 160px;
  }
  .my-hoz-menu .next-menu-item.next-menu-more {
    width: 60px;
  }
`;var ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{hozInLine:!0,direction:"hoz",mode:"popup",className:"my-hoz-menu",popupClassName:"my-hoz-menu",popupAutoWidth:!0},o.createElement(ee,{key:"1"},"First"),o.createElement(ee,{key:"2"},"Second"),o.createElement(Z,{label:"Sub Nav"},o.createElement(ee,{key:"sub-12"},"Sub option 1"),o.createElement(ee,{key:"sub-22"},"Sub option 2"),o.createElement(Z,{label:"Sub Sub Nav"},o.createElement(ee,{key:"sub-sub-122"},"Sub sub option 1"),o.createElement(ee,{key:"sub-sub-222"},"Sub sub option 2"))),o.createElement(Z,{label:"Sub Nav"},o.createElement(ee,{key:"sub-1"},"Sub option 1"),o.createElement(ee,{key:"sub-2"},"Sub option 2"),o.createElement(Z,{label:"Sub Sub Nav"},o.createElement(ee,{key:"sub-sub-1"},"Sub sub option 1"),o.createElement(ee,{key:"sub-sub-2"},"Sub sub option 2"))),o.createElement(ee,{key:"3"},"Third"));return o.createElement(te,null,e)}});const{SubMenu:le,Item:ae}=c;class oe extends o.Component{constructor(e){super(e),this.state={multiple:!1,subMenuSelectable:!1,shallowSelect:!1,isSelectIconRight:!1,selectedKeys:["1"]},["handleMultipleChange","handleSubMenuSelectableChange","handleShallowSelectChange","handleSelect","handleIconDirectionChange"].forEach((e=>{this[e]=this[e].bind(this)}))}handleMultipleChange(){this.setState({multiple:!this.state.multiple,selectedKeys:[]})}handleIconDirectionChange(){this.setState({isSelectIconRight:!this.state.isSelectIconRight,selectedKeys:[]})}handleSubMenuSelectableChange(){this.setState({subMenuSelectable:!this.state.subMenuSelectable,selectedKeys:[]})}handleShallowSelectChange(){this.setState({shallowSelect:!this.state.shallowSelect,selectedKeys:[]})}handleSelect(e,...t){this.setState({selectedKeys:e}),console.log(e,...t)}render(){const{multiple:e,subMenuSelectable:t,shallowSelect:n,selectedKeys:l,isSelectIconRight:a}=this.state,m=e?"multiple":"single";return o.createElement("div",null,o.createElement("div",null,o.createElement("span",{className:"my-switch-label"},"Multiple "),o.createElement(r,{value:e,onChange:this.handleMultipleChange})),o.createElement("div",null,o.createElement("span",{className:"my-switch-label"},"isSelectIconRight "),o.createElement(r,{value:e,onChange:this.handleIconDirectionChange})),o.createElement("div",null,o.createElement("span",{className:"my-switch-label"},"Label of submenu selectable "),o.createElement(r,{value:e,onChange:this.handleSubMenuSelectableChange})),o.createElement("div",null,o.createElement("span",{className:"my-switch-label"},"Only first level selectable "),o.createElement(r,{value:e,onChange:this.handleShallowSelectChange})),o.createElement(c,{isSelectIconRight:a,className:"my-select-menu",defaultOpenKeys:["sub"],selectMode:m,selectedKeys:l,shallowSelect:n,onSelect:this.handleSelect},o.createElement(ae,{key:"1"},"Option 1"),o.createElement(ae,{disabled:!0,key:"2"},"Disabled option 2"),o.createElement(le,{key:"sub",label:"Sub menu",selectable:t},o.createElement(ae,{key:"sub-1"},"Sub option 1"),o.createElement(ae,{key:"sub-2"},"Sub option 2")),o.createElement(ae,{key:"3"},"Option 3")))}}const ce=i.div`
  .my-switch-label {
    vertical-align: super;
  }

  .my-select-menu {
    margin-top: 10px;
    width: 200px;
  }
`;var re=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(oe,null);return o.createElement(ce,null,e)}});const{SubMenu:me,Item:ie,PopupItem:ue,Divider:se}=c,pe={align:"tc bc",triggerType:"click"},de=[{title:"库存管理",children:[{title:"部门库存管理",link:""},{title:"小二库存管理",link:""}]},{title:"功能模块管理",children:[{title:"功能模块管理",link:""},{title:"卡片管理",link:""},{title:"首页布局",link:""},{title:"页面管理",link:""}]},{title:"系统管理",children:[{title:"角色管理",link:""},{title:"标签管理",link:""},{title:"字典管理",link:""}]}],be=e=>{const{dataSource:t}=e,n=a(e,["dataSource"]);return o.createElement("div",l({className:"my-custom-content3"},n),o.createElement(m,{direction:"row"},t.map(((e,t)=>o.createElement(c,{embeddable:!0,key:t},o.createElement(c.Item,null,o.createElement("div",{className:"title"},e.title)),o.createElement(se,null),e.dataSource.map(((e,t)=>{const n=e.children&&e.children.map(((e,t)=>o.createElement(c.Item,{key:t},o.createElement("a",{href:e.link},e.title))));return[o.createElement("div",{className:"sub-title",key:`title-${t}`},e.title),...n]})))))))},he=e=>{const{dataSource:t}=e,n=a(e,["dataSource"]);return o.createElement("div",l({className:"my-custom-content2"},n),o.createElement(m,{direction:"row"},t.map(((e,t)=>o.createElement(c,{embeddable:!0,key:t},o.createElement("div",{className:"sub-title"},e.title),e.children.map(((e,t)=>o.createElement(c.Item,{key:t},o.createElement("a",{href:e.link},e.title)))))))))};const ye=i.div`
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
`;var Ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{hozInLine:!0,direction:"hoz",mode:"popup",className:"my-hoz-menu",popupClassName:"my-hoz-menu",popupProps:pe,renderMore:e=>{const t=e.map(((e,t)=>{const n=e.props.children.props;return{title:e.props.label,dataSource:n.dataSource}}));return o.createElement(ue,{noIcon:!0,triggerType:"click",key:"0-more",label:"更多"},o.createElement(be,{dataSource:t}))}},o.createElement(ue,{key:"0",label:"Popup item 1",noIcon:!0},o.createElement(he,{dataSource:de})),o.createElement(ue,{key:"1",label:"Popup item 2",noIcon:!0},o.createElement(he,{dataSource:de})),o.createElement(ue,{key:"2",label:"Popup item 3",noIcon:!0},o.createElement(he,{dataSource:de})),o.createElement(ue,{key:"3",label:"Popup item 4",noIcon:!0},o.createElement(he,{dataSource:de})),o.createElement(ue,{key:"4",label:"Popup item 5",noIcon:!0},o.createElement(he,{dataSource:de})),o.createElement(ue,{key:"5",label:"Popup item 6",noIcon:!0},o.createElement(he,{dataSource:de})),o.createElement(ue,{key:"6",label:"Popup item 7",noIcon:!0},o.createElement(he,{dataSource:de})),o.createElement(ue,{key:"7",label:"Popup item 8",noIcon:!0},o.createElement(he,{dataSource:de})),o.createElement(ue,{key:"8",label:"Popup item 9",noIcon:!0},o.createElement(he,{dataSource:de})));return o.createElement(ye,null,e)}});const ke={};ke._accordian=d,ke._basic=S,ke["_csutom-select"]=C,ke._hover=z,ke["_custom-popup"]=K,ke._context=F,ke["_popup-align"]=$,ke._popup=V,ke._hoz=ne,ke._select=re,ke["_render-more"]=Ee;export default ke;
