var e=Object.prototype.hasOwnProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,l=Object.assign,a=(l,a)=>{var o={};for(var c in l)e.call(l,c)&&a.indexOf(c)<0&&(o[c]=l[c]);if(null!=l&&t)for(var c of t(l))a.indexOf(c)<0&&n.call(l,c)&&(o[c]=l[c]);return o};import{r as o,F as c,l as r,k as m}from"./index.85ae9c06.js";import{q as i}from"./styled-components.browser.esm.1d25448f.js";const{SubMenu:u,Item:s}=c;const p=i.div`
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
`;var C=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(O,null);return o.createElement(w,null,e)}});const{PopupItem:M}=c;class I extends o.Component{render(){const e={target:()=>ReactDOM.findDOMNode(this),offset:[-1,0],animation:!1};return o.createElement(c,{className:"my-custom-menu",popupProps:e},o.createElement(M,{key:"0",label:"Popup item 1"},o.createElement("div",{className:"my-custom-content"},"Custom content 1")),o.createElement(M,{key:"1",label:"Popup item 2"},o.createElement("div",{className:"my-custom-content"},"Custom content 2")),o.createElement(M,{key:"2",label:"Popup item 3"},o.createElement("div",{className:"my-custom-content"},"Custom content 3")),o.createElement(M,{key:"3",label:"Popup item 4"},o.createElement("div",{className:"my-custom-content"},"Custom content 4")))}}const P=i.div`
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
`;var N=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(I,null);return o.createElement(P,null,e)}});const{SubMenu:z,Item:j,Divider:D}=c;class T extends o.Component{constructor(e){super(e),this.createContextMenu=e=>{e.preventDefault();const t=e.target,{top:n,left:l}=t.getBoundingClientRect();c.create({target:e.target,offset:[e.clientX-l,e.clientY-n],className:"context-menu",popupClassName:"context-menu",onItemClick:console.log,selectedKeys:this.state.selectedKeys,selectMode:"multiple",onSelect:this.handleSelect,children:[o.createElement(j,{key:"1"},"Option 1"),o.createElement(j,{key:"2"},"Option 2"),o.createElement(j,{key:"3"},"Option 3"),o.createElement(D,{key:"divider-1"}),o.createElement(z,{key:"sub-menu",label:"Sub menu"},o.createElement(j,{key:"sub-1"},"Sub option 1"),o.createElement(j,{key:"sub-2"},"Sub option 2")),o.createElement(j,{key:"4"},"Option 4"),o.createElement(D,{key:"divider-2"}),o.createElement(j,{key:"5"},"Option 5")]})},this.state={selectedKeys:[]},this.handleSelect=this.handleSelect.bind(this)}handleSelect(e){e=e.filter((e=>["sub-1","sub-2"].indexOf(e)>-1)),this.setState({selectedKeys:e})}render(){return o.createElement("div",{className:"context-demo",onContextMenu:this.createContextMenu},"Right click here to see the context menu!")}}const K=i.div`
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
`;var R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(T,null);return o.createElement(K,null,e)}});const{SubMenu:L,Item:B}=c;const G=i.div`
  .my-hoz-menu .next-menu-item {
    width: 160px;
  }
  .my-hoz-menu .next-menu-item.next-menu-more {
    width: 60px;
  }
`;var A=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{hozInLine:!0,direction:"hoz",mode:"popup",className:"my-hoz-menu",popupClassName:"my-hoz-menu",popupAutoWidth:!0},o.createElement(B,{key:"1"},"First"),o.createElement(B,{key:"2"},"Second"),o.createElement(L,{label:"Sub Nav"},o.createElement(B,{key:"sub-12"},"Sub option 1"),o.createElement(B,{key:"sub-22"},"Sub option 2"),o.createElement(L,{label:"Sub Sub Nav"},o.createElement(B,{key:"sub-sub-122"},"Sub sub option 1"),o.createElement(B,{key:"sub-sub-222"},"Sub sub option 2"))),o.createElement(L,{label:"Sub Nav"},o.createElement(B,{key:"sub-1"},"Sub option 1"),o.createElement(B,{key:"sub-2"},"Sub option 2"),o.createElement(L,{label:"Sub Sub Nav"},o.createElement(B,{key:"sub-sub-1"},"Sub sub option 1"),o.createElement(B,{key:"sub-sub-2"},"Sub sub option 2"))),o.createElement(B,{key:"3"},"Third"));return o.createElement(G,null,e)}});const{SubMenu:F,Item:q}=c;class W extends o.Component{constructor(e){super(e),this.state={multiple:!1,subMenuSelectable:!1,shallowSelect:!1,isSelectIconRight:!1,selectedKeys:["1"]},["handleMultipleChange","handleSubMenuSelectableChange","handleShallowSelectChange","handleSelect","handleIconDirectionChange"].forEach((e=>{this[e]=this[e].bind(this)}))}handleMultipleChange(){this.setState({multiple:!this.state.multiple,selectedKeys:[]})}handleIconDirectionChange(){this.setState({isSelectIconRight:!this.state.isSelectIconRight,selectedKeys:[]})}handleSubMenuSelectableChange(){this.setState({subMenuSelectable:!this.state.subMenuSelectable,selectedKeys:[]})}handleShallowSelectChange(){this.setState({shallowSelect:!this.state.shallowSelect,selectedKeys:[]})}handleSelect(e,...t){this.setState({selectedKeys:e}),console.log(e,...t)}render(){const{multiple:e,subMenuSelectable:t,shallowSelect:n,selectedKeys:l,isSelectIconRight:a}=this.state,m=e?"multiple":"single";return o.createElement("div",null,o.createElement("div",null,o.createElement("span",{className:"my-switch-label"},"Multiple "),o.createElement(r,{value:e,onChange:this.handleMultipleChange})),o.createElement("div",null,o.createElement("span",{className:"my-switch-label"},"isSelectIconRight "),o.createElement(r,{value:e,onChange:this.handleIconDirectionChange})),o.createElement("div",null,o.createElement("span",{className:"my-switch-label"},"Label of submenu selectable "),o.createElement(r,{value:e,onChange:this.handleSubMenuSelectableChange})),o.createElement("div",null,o.createElement("span",{className:"my-switch-label"},"Only first level selectable "),o.createElement(r,{value:e,onChange:this.handleShallowSelectChange})),o.createElement(c,{isSelectIconRight:a,className:"my-select-menu",defaultOpenKeys:["sub"],selectMode:m,selectedKeys:l,shallowSelect:n,onSelect:this.handleSelect},o.createElement(q,{key:"1"},"Option 1"),o.createElement(q,{disabled:!0,key:"2"},"Disabled option 2"),o.createElement(F,{key:"sub",label:"Sub menu",selectable:t},o.createElement(q,{key:"sub-1"},"Sub option 1"),o.createElement(q,{key:"sub-2"},"Sub option 2")),o.createElement(q,{key:"3"},"Option 3")))}}const X=i.div`
  .my-switch-label {
    vertical-align: super;
  }

  .my-select-menu {
    margin-top: 10px;
    width: 200px;
  }
`;var Y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(W,null);return o.createElement(X,null,e)}});const{SubMenu:$,Item:H,Divider:J}=c;const Q=i.div`
  .my-menu {
    width: 200px;
  }
`;var U=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{className:"my-menu",mode:"popup",triggerType:"hover"},o.createElement(H,{key:"1"},"Option 1"),o.createElement(H,{key:"2"},"Option 2"),o.createElement(H,{key:"3"},"Option 3"),o.createElement(J,{key:"divider"}),o.createElement($,{key:"sub-1",label:"Popup menu 1"},o.createElement(H,{key:"popup-1-1"},"Popup option 1"),o.createElement(H,{key:"popup-1-2"},"Popup option 2")),o.createElement($,{key:"sub-2",label:"Popup menu 2"},o.createElement(H,{key:"popup-2-1"},"Popup option 1"),o.createElement(H,{key:"popup-2-2"},"Popup option 2")));return o.createElement(Q,null,e)}});const{SubMenu:V,Item:Z,Divider:ee}=c;const te=i.div`
  .my-menu {
    width: 200px;
  }
`;var ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{className:"my-menu",mode:"popup",popupAlign:"outside"},o.createElement(Z,{key:"1"},"Option 1"),o.createElement(Z,{key:"2"},"Option 2"),o.createElement(Z,{key:"3"},"Option 3"),o.createElement(ee,{key:"divider"}),o.createElement(V,{key:"sub-1",label:"Popup menu 1"},o.createElement(Z,{key:"popup-1-1"},"Popup option 1"),o.createElement(Z,{key:"popup-1-2"},"Popup option 2")),o.createElement(V,{key:"sub-2",label:"Popup menu 2"},o.createElement(Z,{key:"popup-2-1"},"Popup option 1"),o.createElement(Z,{key:"popup-2-2"},"Popup option 2")));return o.createElement(te,null,e)}});const{SubMenu:le,Item:ae,PopupItem:oe,Divider:ce}=c,re={align:"tc bc",triggerType:"click"},me=[{title:"库存管理",children:[{title:"部门库存管理",link:""},{title:"小二库存管理",link:""}]},{title:"功能模块管理",children:[{title:"功能模块管理",link:""},{title:"卡片管理",link:""},{title:"首页布局",link:""},{title:"页面管理",link:""}]},{title:"系统管理",children:[{title:"角色管理",link:""},{title:"标签管理",link:""},{title:"字典管理",link:""}]}],ie=e=>{const{dataSource:t}=e,n=a(e,["dataSource"]);return o.createElement("div",l({className:"my-custom-content3"},n),o.createElement(m,{direction:"row"},t.map(((e,t)=>o.createElement(c,{embeddable:!0,key:t},o.createElement(c.Item,null,o.createElement("div",{className:"title"},e.title)),o.createElement(ce,null),e.dataSource.map(((e,t)=>{const n=e.children&&e.children.map(((e,t)=>o.createElement(c.Item,{key:t},o.createElement("a",{href:e.link},e.title))));return[o.createElement("div",{className:"sub-title",key:`title-${t}`},e.title),...n]})))))))},ue=e=>{const{dataSource:t}=e,n=a(e,["dataSource"]);return o.createElement("div",l({className:"my-custom-content2"},n),o.createElement(m,{direction:"row"},t.map(((e,t)=>o.createElement(c,{embeddable:!0,key:t},o.createElement("div",{className:"sub-title"},e.title),e.children.map(((e,t)=>o.createElement(c.Item,{key:t},o.createElement("a",{href:e.link},e.title)))))))))};const se=i.div`
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
`;var pe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{hozInLine:!0,direction:"hoz",mode:"popup",className:"my-hoz-menu",popupClassName:"my-hoz-menu",popupProps:re,renderMore:e=>{const t=e.map(((e,t)=>{const n=e.props.children.props;return{title:e.props.label,dataSource:n.dataSource}}));return o.createElement(oe,{noIcon:!0,triggerType:"click",key:"0-more",label:"更多"},o.createElement(ie,{dataSource:t}))}},o.createElement(oe,{key:"0",label:"Popup item 1",noIcon:!0},o.createElement(ue,{dataSource:me})),o.createElement(oe,{key:"1",label:"Popup item 2",noIcon:!0},o.createElement(ue,{dataSource:me})),o.createElement(oe,{key:"2",label:"Popup item 3",noIcon:!0},o.createElement(ue,{dataSource:me})),o.createElement(oe,{key:"3",label:"Popup item 4",noIcon:!0},o.createElement(ue,{dataSource:me})),o.createElement(oe,{key:"4",label:"Popup item 5",noIcon:!0},o.createElement(ue,{dataSource:me})),o.createElement(oe,{key:"5",label:"Popup item 6",noIcon:!0},o.createElement(ue,{dataSource:me})),o.createElement(oe,{key:"6",label:"Popup item 7",noIcon:!0},o.createElement(ue,{dataSource:me})),o.createElement(oe,{key:"7",label:"Popup item 8",noIcon:!0},o.createElement(ue,{dataSource:me})),o.createElement(oe,{key:"8",label:"Popup item 9",noIcon:!0},o.createElement(ue,{dataSource:me})));return o.createElement(se,null,e)}});const{SubMenu:de,Item:be,Divider:he}=c;const ye=i.div`
  .my-menu {
    width: 200px;
  }
`;var Ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{className:"my-menu",mode:"popup"},o.createElement(be,{key:"1"},"Option 1"),o.createElement(be,{key:"2"},"Option 2"),o.createElement(be,{key:"3"},"Option 3"),o.createElement(he,{key:"divider"}),o.createElement(de,{key:"sub-1",label:"Popup menu 1"},o.createElement(be,{key:"popup-1-1"},"Popup option 1"),o.createElement(be,{key:"popup-1-2"},"Popup option 2")),o.createElement(de,{key:"sub-2",label:"Popup menu 2"},o.createElement(be,{key:"popup-2-1"},"Popup option 1"),o.createElement(be,{key:"popup-2-2"},"Popup option 2")));return o.createElement(ye,null,e)}});const ke={};ke._accordian=d,ke._basic=S,ke["_csutom-select"]=C,ke["_custom-popup"]=N,ke._context=R,ke._hoz=A,ke._select=Y,ke._hover=U,ke["_popup-align"]=ne,ke["_render-more"]=pe,ke._popup=Ee;export default ke;
