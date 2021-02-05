var e=Object.prototype.hasOwnProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,l=Object.assign,a=(l,a)=>{var o={};for(var c in l)e.call(l,c)&&a.indexOf(c)<0&&(o[c]=l[c]);if(null!=l&&t)for(var c of t(l))a.indexOf(c)<0&&n.call(l,c)&&(o[c]=l[c]);return o};import{r as o,D as c,F as r,G as m}from"./index.3c24fdbb.js";import{q as i}from"./styled-components.browser.esm.1222bcc8.js";const{CheckboxItem:u,RadioItem:s,Divider:p}=c,d=["male","female"],b=["football","basketball","volleyball"];class h extends o.Component{constructor(e){super(e),this.state={sex:"male",balls:[]},this.handleSexCheck=this.handleSexCheck.bind(this),this.handleBallCheck=this.handleBallCheck.bind(this)}handleSexCheck(e){this.setState({sex:e})}handleBallCheck(e,t){let n;const l=this.state.balls.indexOf(e);t&&-1===l?n=this.state.balls.concat(e):!t&&l>-1&&(n=[...this.state.balls.slice(0,l),...this.state.balls.slice(l+1)]),n&&this.setState({balls:n})}render(){return o.createElement(c,{className:"my-menu"},d.map((e=>o.createElement(s,{key:e,checked:this.state.sex===e,onChange:this.handleSexCheck.bind(this,e)},e))),o.createElement(p,{key:"divider"}),b.map((e=>o.createElement(u,{key:e,checked:this.state.balls.indexOf(e)>-1,onChange:this.handleBallCheck.bind(this,e)},e))))}}const y=i.div`
  .my-menu {
    width: 200px;
  }
`;var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(h,null);return o.createElement(y,null,e)}});const{SubMenu:k,Item:S,Group:g,Divider:f}=c;const x=i.div`
  .my-menu {
    width: 200px;
  }
`;var v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{className:"my-menu",defaultOpenKeys:"sub-menu"},o.createElement(S,{key:"1"},"Option 1"),o.createElement(S,{disabled:!0,key:"2"},"Disabled option 2"),o.createElement(f,{key:"divider"}),o.createElement(g,{label:"Group"},o.createElement(S,{key:"group-1"},"Group option 1"),o.createElement(S,{key:"group-2"},"Group option 2")),o.createElement(f,null),o.createElement(k,{key:"sub-menu",label:"Sub menu"},o.createElement(S,{key:"sub-1"},"Sub option 1"),o.createElement(S,{key:"sub-2"},"Sub option 2"),o.createElement(S,{disabled:!0,key:"sub-3"},o.createElement("a",{href:"https://www.taobao.com/",target:"__blank"},"Disabled Option Link 3")),o.createElement(S,{key:"sub-4"},o.createElement("a",{href:"https://www.taobao.com/",target:"__blank"},"Option Link 4"))),o.createElement(S,{key:"3",helper:"CTRL+P"},"Option 3"),o.createElement(S,{disabled:!0,key:"4"},o.createElement("a",{href:"https://www.taobao.com/",target:"__blank"},"Disabled Option Link")),o.createElement(S,{key:"5"},o.createElement("a",{href:"https://www.taobao.com/",target:"__blank"},"Option Link")));return o.createElement(x,null,e)}});const{SubMenu:_,Item:O,Divider:w}=c;class C extends o.Component{constructor(e){super(e),this.createContextMenu=e=>{e.preventDefault();const t=e.target,{top:n,left:l}=t.getBoundingClientRect();c.create({target:e.target,offset:[e.clientX-l,e.clientY-n],className:"context-menu",popupClassName:"context-menu",onItemClick:console.log,selectedKeys:this.state.selectedKeys,selectMode:"multiple",onSelect:this.handleSelect,children:[o.createElement(O,{key:"1"},"Option 1"),o.createElement(O,{key:"2"},"Option 2"),o.createElement(O,{key:"3"},"Option 3"),o.createElement(w,{key:"divider-1"}),o.createElement(_,{key:"sub-menu",label:"Sub menu"},o.createElement(O,{key:"sub-1"},"Sub option 1"),o.createElement(O,{key:"sub-2"},"Sub option 2")),o.createElement(O,{key:"4"},"Option 4"),o.createElement(w,{key:"divider-2"}),o.createElement(O,{key:"5"},"Option 5")]})},this.state={selectedKeys:[]},this.handleSelect=this.handleSelect.bind(this)}handleSelect(e){e=e.filter((e=>["sub-1","sub-2"].indexOf(e)>-1)),this.setState({selectedKeys:e})}render(){return o.createElement("div",{className:"context-demo",onContextMenu:this.createContextMenu},"Right click here to see the context menu!")}}const M=i.div`
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
`;var I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(C,null);return o.createElement(M,null,e)}});const{SubMenu:P,Item:N,Divider:z}=c;const D=i.div`
  .my-menu {
    width: 200px;
  }
`;var j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{className:"my-menu",mode:"popup",triggerType:"hover"},o.createElement(N,{key:"1"},"Option 1"),o.createElement(N,{key:"2"},"Option 2"),o.createElement(N,{key:"3"},"Option 3"),o.createElement(z,{key:"divider"}),o.createElement(P,{key:"sub-1",label:"Popup menu 1"},o.createElement(N,{key:"popup-1-1"},"Popup option 1"),o.createElement(N,{key:"popup-1-2"},"Popup option 2")),o.createElement(P,{key:"sub-2",label:"Popup menu 2"},o.createElement(N,{key:"popup-2-1"},"Popup option 1"),o.createElement(N,{key:"popup-2-2"},"Popup option 2")));return o.createElement(D,null,e)}});const{SubMenu:T,Item:K,Divider:R}=c;const L=i.div`
  .my-menu {
    width: 200px;
  }
`;var B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{className:"my-menu",mode:"popup",popupAlign:"outside"},o.createElement(K,{key:"1"},"Option 1"),o.createElement(K,{key:"2"},"Option 2"),o.createElement(K,{key:"3"},"Option 3"),o.createElement(R,{key:"divider"}),o.createElement(T,{key:"sub-1",label:"Popup menu 1"},o.createElement(K,{key:"popup-1-1"},"Popup option 1"),o.createElement(K,{key:"popup-1-2"},"Popup option 2")),o.createElement(T,{key:"sub-2",label:"Popup menu 2"},o.createElement(K,{key:"popup-2-1"},"Popup option 1"),o.createElement(K,{key:"popup-2-2"},"Popup option 2")));return o.createElement(L,null,e)}});const{SubMenu:G,Item:A,PopupItem:F,Divider:q}=c,W={align:"tc bc",triggerType:"click"},X=[{title:"库存管理",children:[{title:"部门库存管理",link:""},{title:"小二库存管理",link:""}]},{title:"功能模块管理",children:[{title:"功能模块管理",link:""},{title:"卡片管理",link:""},{title:"首页布局",link:""},{title:"页面管理",link:""}]},{title:"系统管理",children:[{title:"角色管理",link:""},{title:"标签管理",link:""},{title:"字典管理",link:""}]}],Y=e=>{const{dataSource:t}=e,n=a(e,["dataSource"]);return o.createElement("div",l({className:"my-custom-content3"},n),o.createElement(r,{direction:"row"},t.map(((e,t)=>o.createElement(c,{embeddable:!0,key:t},o.createElement(c.Item,null,o.createElement("div",{className:"title"},e.title)),o.createElement(q,null),e.dataSource.map(((e,t)=>{const n=e.children&&e.children.map(((e,t)=>o.createElement(c.Item,{key:t},o.createElement("a",{href:e.link},e.title))));return[o.createElement("div",{className:"sub-title",key:`title-${t}`},e.title),...n]})))))))},$=e=>{const{dataSource:t}=e,n=a(e,["dataSource"]);return o.createElement("div",l({className:"my-custom-content2"},n),o.createElement(r,{direction:"row"},t.map(((e,t)=>o.createElement(c,{embeddable:!0,key:t},o.createElement("div",{className:"sub-title"},e.title),e.children.map(((e,t)=>o.createElement(c.Item,{key:t},o.createElement("a",{href:e.link},e.title)))))))))};const H=i.div`
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
`;var J=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{hozInLine:!0,direction:"hoz",mode:"popup",className:"my-hoz-menu",popupClassName:"my-hoz-menu",popupProps:W,renderMore:e=>{const t=e.map(((e,t)=>{const n=e.props.children.props;return{title:e.props.label,dataSource:n.dataSource}}));return o.createElement(F,{noIcon:!0,triggerType:"click",key:"0-more",label:"更多"},o.createElement(Y,{dataSource:t}))}},o.createElement(F,{key:"0",label:"Popup item 1",noIcon:!0},o.createElement($,{dataSource:X})),o.createElement(F,{key:"1",label:"Popup item 2",noIcon:!0},o.createElement($,{dataSource:X})),o.createElement(F,{key:"2",label:"Popup item 3",noIcon:!0},o.createElement($,{dataSource:X})),o.createElement(F,{key:"3",label:"Popup item 4",noIcon:!0},o.createElement($,{dataSource:X})),o.createElement(F,{key:"4",label:"Popup item 5",noIcon:!0},o.createElement($,{dataSource:X})),o.createElement(F,{key:"5",label:"Popup item 6",noIcon:!0},o.createElement($,{dataSource:X})),o.createElement(F,{key:"6",label:"Popup item 7",noIcon:!0},o.createElement($,{dataSource:X})),o.createElement(F,{key:"7",label:"Popup item 8",noIcon:!0},o.createElement($,{dataSource:X})),o.createElement(F,{key:"8",label:"Popup item 9",noIcon:!0},o.createElement($,{dataSource:X})));return o.createElement(H,null,e)}});const{SubMenu:Q,Item:U,Divider:V}=c;const Z=i.div`
  .my-menu {
    width: 200px;
  }
`;var ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{className:"my-menu",mode:"popup"},o.createElement(U,{key:"1"},"Option 1"),o.createElement(U,{key:"2"},"Option 2"),o.createElement(U,{key:"3"},"Option 3"),o.createElement(V,{key:"divider"}),o.createElement(Q,{key:"sub-1",label:"Popup menu 1"},o.createElement(U,{key:"popup-1-1"},"Popup option 1"),o.createElement(U,{key:"popup-1-2"},"Popup option 2")),o.createElement(Q,{key:"sub-2",label:"Popup menu 2"},o.createElement(U,{key:"popup-2-1"},"Popup option 1"),o.createElement(U,{key:"popup-2-2"},"Popup option 2")));return o.createElement(Z,null,e)}});const{SubMenu:te,Item:ne}=c;class le extends o.Component{constructor(e){super(e),this.state={multiple:!1,subMenuSelectable:!1,shallowSelect:!1,isSelectIconRight:!1,selectedKeys:["1"]},["handleMultipleChange","handleSubMenuSelectableChange","handleShallowSelectChange","handleSelect","handleIconDirectionChange"].forEach((e=>{this[e]=this[e].bind(this)}))}handleMultipleChange(){this.setState({multiple:!this.state.multiple,selectedKeys:[]})}handleIconDirectionChange(){this.setState({isSelectIconRight:!this.state.isSelectIconRight,selectedKeys:[]})}handleSubMenuSelectableChange(){this.setState({subMenuSelectable:!this.state.subMenuSelectable,selectedKeys:[]})}handleShallowSelectChange(){this.setState({shallowSelect:!this.state.shallowSelect,selectedKeys:[]})}handleSelect(e,...t){this.setState({selectedKeys:e}),console.log(e,...t)}render(){const{multiple:e,subMenuSelectable:t,shallowSelect:n,selectedKeys:l,isSelectIconRight:a}=this.state,r=e?"multiple":"single";return o.createElement("div",null,o.createElement("div",null,o.createElement("span",{className:"my-switch-label"},"Multiple "),o.createElement(m,{value:e,onChange:this.handleMultipleChange})),o.createElement("div",null,o.createElement("span",{className:"my-switch-label"},"isSelectIconRight "),o.createElement(m,{value:e,onChange:this.handleIconDirectionChange})),o.createElement("div",null,o.createElement("span",{className:"my-switch-label"},"Label of submenu selectable "),o.createElement(m,{value:e,onChange:this.handleSubMenuSelectableChange})),o.createElement("div",null,o.createElement("span",{className:"my-switch-label"},"Only first level selectable "),o.createElement(m,{value:e,onChange:this.handleShallowSelectChange})),o.createElement(c,{isSelectIconRight:a,className:"my-select-menu",defaultOpenKeys:["sub"],selectMode:r,selectedKeys:l,shallowSelect:n,onSelect:this.handleSelect},o.createElement(ne,{key:"1"},"Option 1"),o.createElement(ne,{disabled:!0,key:"2"},"Disabled option 2"),o.createElement(te,{key:"sub",label:"Sub menu",selectable:t},o.createElement(ne,{key:"sub-1"},"Sub option 1"),o.createElement(ne,{key:"sub-2"},"Sub option 2")),o.createElement(ne,{key:"3"},"Option 3")))}}const ae=i.div`
  .my-switch-label {
    vertical-align: super;
  }

  .my-select-menu {
    margin-top: 10px;
    width: 200px;
  }
`;var oe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(le,null);return o.createElement(ae,null,e)}});const{SubMenu:ce,Item:re}=c;const me=i.div`
  .my-menu {
    width: 200px;
  }
`;var ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{defaultOpenKeys:"1",className:"my-menu",openMode:"single"},o.createElement(ce,{key:"0",label:"Sub menu 1"},o.createElement(re,{key:"0-0"},"Sub option 1"),o.createElement(re,{key:"0-1"},"Sub option 2"),o.createElement(re,{key:"0-2"},"Sub option 3")),o.createElement(ce,{key:"1",label:"Sub menu 2"},o.createElement(re,{key:"1-0"},"Sub option 1"),o.createElement(re,{key:"1-1"},"Sub option 2"),o.createElement(re,{key:"1-2"},"Sub option 3")),o.createElement(ce,{key:"2",label:"Sub menu 3"},o.createElement(re,{key:"2-0"},"Sub option 1"),o.createElement(re,{key:"2-1"},"Sub option 2"),o.createElement(re,{key:"2-2"},"Sub option 3")),o.createElement(ce,{key:"3",label:"Sub menu 4"},o.createElement(re,{key:"3-0"},"Sub option 1"),o.createElement(re,{key:"3-1"},"Sub option 2"),o.createElement(re,{key:"3-2"},"Sub option 3")));return o.createElement(me,null,e)}});const{SubMenu:ue,Item:se}=c;const pe=i.div`
  .my-hoz-menu .next-menu-item {
    width: 160px;
  }
  .my-hoz-menu .next-menu-item.next-menu-more {
    width: 60px;
  }
`;var de=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(c,{hozInLine:!0,direction:"hoz",mode:"popup",className:"my-hoz-menu",popupClassName:"my-hoz-menu",popupAutoWidth:!0},o.createElement(se,{key:"1"},"First"),o.createElement(se,{key:"2"},"Second"),o.createElement(ue,{label:"Sub Nav"},o.createElement(se,{key:"sub-12"},"Sub option 1"),o.createElement(se,{key:"sub-22"},"Sub option 2"),o.createElement(ue,{label:"Sub Sub Nav"},o.createElement(se,{key:"sub-sub-122"},"Sub sub option 1"),o.createElement(se,{key:"sub-sub-222"},"Sub sub option 2"))),o.createElement(ue,{label:"Sub Nav"},o.createElement(se,{key:"sub-1"},"Sub option 1"),o.createElement(se,{key:"sub-2"},"Sub option 2"),o.createElement(ue,{label:"Sub Sub Nav"},o.createElement(se,{key:"sub-sub-1"},"Sub sub option 1"),o.createElement(se,{key:"sub-sub-2"},"Sub sub option 2"))),o.createElement(se,{key:"3"},"Third"));return o.createElement(pe,null,e)}});const{PopupItem:be}=c;class he extends o.Component{render(){const e={target:()=>ReactDOM.findDOMNode(this),offset:[-1,0],animation:!1};return o.createElement(c,{className:"my-custom-menu",popupProps:e},o.createElement(be,{key:"0",label:"Popup item 1"},o.createElement("div",{className:"my-custom-content"},"Custom content 1")),o.createElement(be,{key:"1",label:"Popup item 2"},o.createElement("div",{className:"my-custom-content"},"Custom content 2")),o.createElement(be,{key:"2",label:"Popup item 3"},o.createElement("div",{className:"my-custom-content"},"Custom content 3")),o.createElement(be,{key:"3",label:"Popup item 4"},o.createElement("div",{className:"my-custom-content"},"Custom content 4")))}}const ye=i.div`
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
`;var Ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement(he,null);return o.createElement(ye,null,e)}});const ke={};ke["_csutom-select"]=E,ke._basic=v,ke._context=I,ke._hover=j,ke["_popup-align"]=B,ke["_render-more"]=J,ke._popup=ee,ke._select=oe,ke._accordian=ie,ke._hoz=de,ke["_custom-popup"]=Ee;export default ke;
