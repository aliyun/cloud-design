var e=Object.prototype.hasOwnProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,l=Object.assign,a=(l,a)=>{var o={};for(var c in l)e.call(l,c)&&a.indexOf(c)<0&&(o[c]=l[c]);if(null!=l&&t)for(var c of t(l))a.indexOf(c)<0&&n.call(l,c)&&(o[c]=l[c]);return o};import{r as o,G as c,k as r,l as m}from"./index.9e4b8ce1.js";import{q as i}from"./styled-components.browser.esm.19571eea.js";const{CheckboxItem:u,RadioItem:s,Divider:p}=c,d=["male","female"],b=["football","basketball","volleyball"];class h extends o.Component{constructor(e){super(e),this.state={sex:"male",balls:[]},this.handleSexCheck=this.handleSexCheck.bind(this),this.handleBallCheck=this.handleBallCheck.bind(this)}handleSexCheck(e){this.setState({sex:e})}handleBallCheck(e,t){let n;const l=this.state.balls.indexOf(e);t&&-1===l?n=this.state.balls.concat(e):!t&&l>-1&&(n=[...this.state.balls.slice(0,l),...this.state.balls.slice(l+1)]),n&&this.setState({balls:n})}render(){return o.createElement(c,{className:"my-menu"},d.map((e=>o.createElement(s,{key:e,checked:this.state.sex===e,onChange:this.handleSexCheck.bind(this,e)},e))),o.createElement(p,{key:"divider"}),b.map((e=>o.createElement(u,{key:e,checked:this.state.balls.indexOf(e)>-1,onChange:this.handleBallCheck.bind(this,e)},e))))}}const y=i.div`
  .my-menu {
    width: 200px;
  }
`;var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(h,null);return o.createElement(y,null,e)}});const{PopupItem:k}=c;class S extends o.Component{render(){const e={target:()=>ReactDOM.findDOMNode(this),offset:[-1,0],animation:!1};return o.createElement(c,{className:"my-custom-menu",popupProps:e},o.createElement(k,{key:"0",label:"Popup item 1"},o.createElement("div",{className:"my-custom-content"},"Custom content 1")),o.createElement(k,{key:"1",label:"Popup item 2"},o.createElement("div",{className:"my-custom-content"},"Custom content 2")),o.createElement(k,{key:"2",label:"Popup item 3"},o.createElement("div",{className:"my-custom-content"},"Custom content 3")),o.createElement(k,{key:"3",label:"Popup item 4"},o.createElement("div",{className:"my-custom-content"},"Custom content 4")))}}const g=i.div`
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
`;var f=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(S,null);return o.createElement(g,null,e)}});const{SubMenu:x,Item:v}=c;const _=i.div`
  .my-menu {
    width: 200px;
  }
`;var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{defaultOpenKeys:"1",className:"my-menu",openMode:"single"},o.createElement(x,{key:"0",label:"Sub menu 1"},o.createElement(v,{key:"0-0"},"Sub option 1"),o.createElement(v,{key:"0-1"},"Sub option 2"),o.createElement(v,{key:"0-2"},"Sub option 3")),o.createElement(x,{key:"1",label:"Sub menu 2"},o.createElement(v,{key:"1-0"},"Sub option 1"),o.createElement(v,{key:"1-1"},"Sub option 2"),o.createElement(v,{key:"1-2"},"Sub option 3")),o.createElement(x,{key:"2",label:"Sub menu 3"},o.createElement(v,{key:"2-0"},"Sub option 1"),o.createElement(v,{key:"2-1"},"Sub option 2"),o.createElement(v,{key:"2-2"},"Sub option 3")),o.createElement(x,{key:"3",label:"Sub menu 4"},o.createElement(v,{key:"3-0"},"Sub option 1"),o.createElement(v,{key:"3-1"},"Sub option 2"),o.createElement(v,{key:"3-2"},"Sub option 3")));return o.createElement(_,null,e)}});const{SubMenu:w,Item:C,Divider:M}=c;const I=i.div`
  .my-menu {
    width: 200px;
  }
`;var P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{className:"my-menu",mode:"popup",triggerType:"hover"},o.createElement(C,{key:"1"},"Option 1"),o.createElement(C,{key:"2"},"Option 2"),o.createElement(C,{key:"3"},"Option 3"),o.createElement(M,{key:"divider"}),o.createElement(w,{key:"sub-1",label:"Popup menu 1"},o.createElement(C,{key:"popup-1-1"},"Popup option 1"),o.createElement(C,{key:"popup-1-2"},"Popup option 2")),o.createElement(w,{key:"sub-2",label:"Popup menu 2"},o.createElement(C,{key:"popup-2-1"},"Popup option 1"),o.createElement(C,{key:"popup-2-2"},"Popup option 2")));return o.createElement(I,null,e)}});const{SubMenu:N,Item:z}=c;const j=i.div`
  .my-hoz-menu .next-menu-item {
    width: 160px;
  }
  .my-hoz-menu .next-menu-item.next-menu-more {
    width: 60px;
  }
`;var D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{hozInLine:!0,direction:"hoz",mode:"popup",className:"my-hoz-menu",popupClassName:"my-hoz-menu",popupAutoWidth:!0},o.createElement(z,{key:"1"},"First"),o.createElement(z,{key:"2"},"Second"),o.createElement(N,{label:"Sub Nav"},o.createElement(z,{key:"sub-12"},"Sub option 1"),o.createElement(z,{key:"sub-22"},"Sub option 2"),o.createElement(N,{label:"Sub Sub Nav"},o.createElement(z,{key:"sub-sub-122"},"Sub sub option 1"),o.createElement(z,{key:"sub-sub-222"},"Sub sub option 2"))),o.createElement(N,{label:"Sub Nav"},o.createElement(z,{key:"sub-1"},"Sub option 1"),o.createElement(z,{key:"sub-2"},"Sub option 2"),o.createElement(N,{label:"Sub Sub Nav"},o.createElement(z,{key:"sub-sub-1"},"Sub sub option 1"),o.createElement(z,{key:"sub-sub-2"},"Sub sub option 2"))),o.createElement(z,{key:"3"},"Third"));return o.createElement(j,null,e)}});const{SubMenu:T,Item:K,Divider:R}=c;class L extends o.Component{constructor(e){super(e),this.createContextMenu=e=>{e.preventDefault();const t=e.target,{top:n,left:l}=t.getBoundingClientRect();c.create({target:e.target,offset:[e.clientX-l,e.clientY-n],className:"context-menu",popupClassName:"context-menu",onItemClick:console.log,selectedKeys:this.state.selectedKeys,selectMode:"multiple",onSelect:this.handleSelect,children:[o.createElement(K,{key:"1"},"Option 1"),o.createElement(K,{key:"2"},"Option 2"),o.createElement(K,{key:"3"},"Option 3"),o.createElement(R,{key:"divider-1"}),o.createElement(T,{key:"sub-menu",label:"Sub menu"},o.createElement(K,{key:"sub-1"},"Sub option 1"),o.createElement(K,{key:"sub-2"},"Sub option 2")),o.createElement(K,{key:"4"},"Option 4"),o.createElement(R,{key:"divider-2"}),o.createElement(K,{key:"5"},"Option 5")]})},this.state={selectedKeys:[]},this.handleSelect=this.handleSelect.bind(this)}handleSelect(e){e=e.filter((e=>["sub-1","sub-2"].indexOf(e)>-1)),this.setState({selectedKeys:e})}render(){return o.createElement("div",{className:"context-demo",onContextMenu:this.createContextMenu},"Right click here to see the context menu!")}}const B=i.div`
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
`;var G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(L,null);return o.createElement(B,null,e)}});const{SubMenu:A,Item:q,Divider:F}=c;const W=i.div`
  .my-menu {
    width: 200px;
  }
`;var X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{className:"my-menu",mode:"popup",popupAlign:"outside"},o.createElement(q,{key:"1"},"Option 1"),o.createElement(q,{key:"2"},"Option 2"),o.createElement(q,{key:"3"},"Option 3"),o.createElement(F,{key:"divider"}),o.createElement(A,{key:"sub-1",label:"Popup menu 1"},o.createElement(q,{key:"popup-1-1"},"Popup option 1"),o.createElement(q,{key:"popup-1-2"},"Popup option 2")),o.createElement(A,{key:"sub-2",label:"Popup menu 2"},o.createElement(q,{key:"popup-2-1"},"Popup option 1"),o.createElement(q,{key:"popup-2-2"},"Popup option 2")));return o.createElement(W,null,e)}});const{SubMenu:Y,Item:$,Divider:H}=c;const J=i.div`
  .my-menu {
    width: 200px;
  }
`;var Q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{className:"my-menu",mode:"popup"},o.createElement($,{key:"1"},"Option 1"),o.createElement($,{key:"2"},"Option 2"),o.createElement($,{key:"3"},"Option 3"),o.createElement(H,{key:"divider"}),o.createElement(Y,{key:"sub-1",label:"Popup menu 1"},o.createElement($,{key:"popup-1-1"},"Popup option 1"),o.createElement($,{key:"popup-1-2"},"Popup option 2")),o.createElement(Y,{key:"sub-2",label:"Popup menu 2"},o.createElement($,{key:"popup-2-1"},"Popup option 1"),o.createElement($,{key:"popup-2-2"},"Popup option 2")));return o.createElement(J,null,e)}});const{SubMenu:U,Item:V,PopupItem:Z,Divider:ee}=c,te={align:"tc bc",triggerType:"click"},ne=[{title:"库存管理",children:[{title:"部门库存管理",link:""},{title:"小二库存管理",link:""}]},{title:"功能模块管理",children:[{title:"功能模块管理",link:""},{title:"卡片管理",link:""},{title:"首页布局",link:""},{title:"页面管理",link:""}]},{title:"系统管理",children:[{title:"角色管理",link:""},{title:"标签管理",link:""},{title:"字典管理",link:""}]}],le=e=>{const{dataSource:t}=e,n=a(e,["dataSource"]);return o.createElement("div",l({className:"my-custom-content3"},n),o.createElement(r,{direction:"row"},t.map(((e,t)=>o.createElement(c,{embeddable:!0,key:t},o.createElement(c.Item,null,o.createElement("div",{className:"title"},e.title)),o.createElement(ee,null),e.dataSource.map(((e,t)=>{const n=e.children&&e.children.map(((e,t)=>o.createElement(c.Item,{key:t},o.createElement("a",{href:e.link},e.title))));return[o.createElement("div",{className:"sub-title",key:`title-${t}`},e.title),...n]})))))))},ae=e=>{const{dataSource:t}=e,n=a(e,["dataSource"]);return o.createElement("div",l({className:"my-custom-content2"},n),o.createElement(r,{direction:"row"},t.map(((e,t)=>o.createElement(c,{embeddable:!0,key:t},o.createElement("div",{className:"sub-title"},e.title),e.children.map(((e,t)=>o.createElement(c.Item,{key:t},o.createElement("a",{href:e.link},e.title)))))))))};const oe=i.div`
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
`;var ce=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{hozInLine:!0,direction:"hoz",mode:"popup",className:"my-hoz-menu",popupClassName:"my-hoz-menu",popupProps:te,renderMore:e=>{const t=e.map(((e,t)=>{const n=e.props.children.props;return{title:e.props.label,dataSource:n.dataSource}}));return o.createElement(Z,{noIcon:!0,triggerType:"click",key:"0-more",label:"更多"},o.createElement(le,{dataSource:t}))}},o.createElement(Z,{key:"0",label:"Popup item 1",noIcon:!0},o.createElement(ae,{dataSource:ne})),o.createElement(Z,{key:"1",label:"Popup item 2",noIcon:!0},o.createElement(ae,{dataSource:ne})),o.createElement(Z,{key:"2",label:"Popup item 3",noIcon:!0},o.createElement(ae,{dataSource:ne})),o.createElement(Z,{key:"3",label:"Popup item 4",noIcon:!0},o.createElement(ae,{dataSource:ne})),o.createElement(Z,{key:"4",label:"Popup item 5",noIcon:!0},o.createElement(ae,{dataSource:ne})),o.createElement(Z,{key:"5",label:"Popup item 6",noIcon:!0},o.createElement(ae,{dataSource:ne})),o.createElement(Z,{key:"6",label:"Popup item 7",noIcon:!0},o.createElement(ae,{dataSource:ne})),o.createElement(Z,{key:"7",label:"Popup item 8",noIcon:!0},o.createElement(ae,{dataSource:ne})),o.createElement(Z,{key:"8",label:"Popup item 9",noIcon:!0},o.createElement(ae,{dataSource:ne})));return o.createElement(oe,null,e)}});const{SubMenu:re,Item:me}=c;class ie extends o.Component{constructor(e){super(e),this.state={multiple:!1,subMenuSelectable:!1,shallowSelect:!1,isSelectIconRight:!1,selectedKeys:["1"]},["handleMultipleChange","handleSubMenuSelectableChange","handleShallowSelectChange","handleSelect","handleIconDirectionChange"].forEach((e=>{this[e]=this[e].bind(this)}))}handleMultipleChange(){this.setState({multiple:!this.state.multiple,selectedKeys:[]})}handleIconDirectionChange(){this.setState({isSelectIconRight:!this.state.isSelectIconRight,selectedKeys:[]})}handleSubMenuSelectableChange(){this.setState({subMenuSelectable:!this.state.subMenuSelectable,selectedKeys:[]})}handleShallowSelectChange(){this.setState({shallowSelect:!this.state.shallowSelect,selectedKeys:[]})}handleSelect(e,...t){this.setState({selectedKeys:e}),console.log(e,...t)}render(){const{multiple:e,subMenuSelectable:t,shallowSelect:n,selectedKeys:l,isSelectIconRight:a}=this.state,r=e?"multiple":"single";return o.createElement("div",null,o.createElement("div",null,o.createElement("span",{className:"my-switch-label"},"Multiple "),o.createElement(m,{value:e,onChange:this.handleMultipleChange})),o.createElement("div",null,o.createElement("span",{className:"my-switch-label"},"isSelectIconRight "),o.createElement(m,{value:e,onChange:this.handleIconDirectionChange})),o.createElement("div",null,o.createElement("span",{className:"my-switch-label"},"Label of submenu selectable "),o.createElement(m,{value:e,onChange:this.handleSubMenuSelectableChange})),o.createElement("div",null,o.createElement("span",{className:"my-switch-label"},"Only first level selectable "),o.createElement(m,{value:e,onChange:this.handleShallowSelectChange})),o.createElement(c,{isSelectIconRight:a,className:"my-select-menu",defaultOpenKeys:["sub"],selectMode:r,selectedKeys:l,shallowSelect:n,onSelect:this.handleSelect},o.createElement(me,{key:"1"},"Option 1"),o.createElement(me,{disabled:!0,key:"2"},"Disabled option 2"),o.createElement(re,{key:"sub",label:"Sub menu",selectable:t},o.createElement(me,{key:"sub-1"},"Sub option 1"),o.createElement(me,{key:"sub-2"},"Sub option 2")),o.createElement(me,{key:"3"},"Option 3")))}}const ue=i.div`
  .my-switch-label {
    vertical-align: super;
  }

  .my-select-menu {
    margin-top: 10px;
    width: 200px;
  }
`;var se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(ie,null);return o.createElement(ue,null,e)}});const{SubMenu:pe,Item:de,Group:be,Divider:he}=c;const ye=i.div`
  .my-menu {
    width: 200px;
  }
`;var Ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{className:"my-menu",defaultOpenKeys:"sub-menu"},o.createElement(de,{key:"1"},"Option 1"),o.createElement(de,{disabled:!0,key:"2"},"Disabled option 2"),o.createElement(he,{key:"divider"}),o.createElement(be,{label:"Group"},o.createElement(de,{key:"group-1"},"Group option 1"),o.createElement(de,{key:"group-2"},"Group option 2")),o.createElement(he,null),o.createElement(pe,{key:"sub-menu",label:"Sub menu"},o.createElement(de,{key:"sub-1"},"Sub option 1"),o.createElement(de,{key:"sub-2"},"Sub option 2"),o.createElement(de,{disabled:!0,key:"sub-3"},o.createElement("a",{href:"https://www.taobao.com/",target:"__blank"},"Disabled Option Link 3")),o.createElement(de,{key:"sub-4"},o.createElement("a",{href:"https://www.taobao.com/",target:"__blank"},"Option Link 4"))),o.createElement(de,{key:"3",helper:"CTRL+P"},"Option 3"),o.createElement(de,{disabled:!0,key:"4"},o.createElement("a",{href:"https://www.taobao.com/",target:"__blank"},"Disabled Option Link")),o.createElement(de,{key:"5"},o.createElement("a",{href:"https://www.taobao.com/",target:"__blank"},"Option Link")));return o.createElement(ye,null,e)}});const ke={};ke["_csutom-select"]=E,ke["_custom-popup"]=f,ke._accordian=O,ke._hover=P,ke._hoz=D,ke._context=G,ke["_popup-align"]=X,ke._popup=Q,ke["_render-more"]=ce,ke._select=se,ke._basic=Ee;export default ke;
