import{q as e,r as t,b as n,a0 as o}from"./index.4642f55c.js";import{q as r}from"./styled-components.browser.esm.1feaecc0.js";var l={"text/plain":"Text","text/html":"Url",default:"Text"};var i=function(e,t){var n,o,r,i,a,c,s=!1;t||(t={}),n=t.debug||!1;try{if(r=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}(),i=document.createRange(),a=document.getSelection(),(c=document.createElement("span")).textContent=e,c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",(function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),void 0===o.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=l[t.format]||l.default;window.clipboardData.setData(r,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(c),i.selectNodeContents(c),a.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");s=!0}catch(p){n&&console.error("unable to copy using execCommand: ",p),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),s=!0}catch(u){n&&console.error("unable to copy using clipboardData: ",u),n&&console.error("falling back to prompt"),o=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(o,e)}}finally{a&&("function"==typeof a.removeRange?a.removeRange(i):a.removeAllRanges()),c&&document.body.removeChild(c),r()}return s},a=e((function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.CopyToClipboard=void 0;var o=l(t),r=l(i);function l(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?f(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){function t(){var e,n;p(this,t);for(var l=arguments.length,i=new Array(l),a=0;a<l;a++)i[a]=arguments[a];return g(f(n=m(this,(e=d(t)).call.apply(e,[this].concat(i)))),"onClick",(function(e){var t=n.props,l=t.text,i=t.onCopy,a=t.children,c=t.options,s=o.default.Children.only(a),p=(0,r.default)(l,c);i&&i(l,p),s&&s.props&&"function"==typeof s.props.onClick&&s.props.onClick(e)})),n}var n,l,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(l=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=s(e,["text","onCopy","options","children"]),r=o.default.Children.only(t);return o.default.cloneElement(r,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{onClick:this.onClick}))}}])&&u(n.prototype,l),i&&u(n,i),t}(o.default.PureComponent);n.CopyToClipboard=b,g(b,"defaultProps",{onCopy:void 0,options:void 0})})).CopyToClipboard;a.CopyToClipboard=a;var c=a;const s=["smile","cry","success","warning","prompt","error","help","clock","success-filling","delete-filling","favorites-filling","add","minus","arrow-up","arrow-down","arrow-left","arrow-right","arrow-double-left","arrow-double-right","switch","sorting","descending","ascending","select","semi-select","loading","search","close","ellipsis","picture","calendar","ashbin","upload","download","set","edit","refresh","filter","attachment","account","email","atm","copy","exit","eye","eye-close","toggle-left","toggle-right","lock","unlock","chart-pie","chart-bar","form","detail","list","dashboard"];let p=[];window.customIcons&&(p=window.customIcons);const u=()=>o.success("Copied!");const m=r.div`
  .icon-list-title {
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
  }

  .icon-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .icon-list li {
    display: inline-block;
    width: 140px;
    padding: 30px 0;
    color: #666;
    cursor: pointer;
  }

  .icon-list li:hover {
    color: #333;
    background-color: #f7f7f7;
  }

  .icon-list i {
    display: block;
    width: 32px;
    margin: 0 auto;
  }

  .icon-list span {
    display: block;
    margin-top: 10px;
    text-align: center;
    font-size: 14px;
  }

  .icon-list-custom-title {
    margin: 20px 0 20px 10px;
    font-size: 20px;
    color: #333;
  }
`;var d=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",null,t.createElement("div",{className:"icon-list-title"},"Click on the icon to copy the code."),t.createElement("ul",{className:"icon-list"},s.map(((e,o)=>t.createElement(c,{key:o,text:`<Icon type="${e}" />`,onCopy:u},t.createElement("li",null,t.createElement(n,{type:e,size:"xl"}),t.createElement("span",null,e)))))),p.length?t.createElement("div",null,t.createElement("div",{className:"icon-list-custom-title"},"Custom Icon"),t.createElement("ul",{className:"icon-list"},p.map(((e,o)=>t.createElement(c,{key:o,text:`<Icon type="${e}" />`,onCopy:u},t.createElement("li",null,t.createElement(n,{type:e,size:"xl"}),t.createElement("span",null,e))))))):null);return t.createElement(m,null,e)}});const f=r.div``;var y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",null,"button: ",t.createElement("br",null),t.createElement(n,{type:"atm",role:"button","aria-label":"icon atm",style:{margin:"5px"}}),t.createElement(n,{type:"smile",role:"button","aria-label":"icon smile",style:{margin:"5px"}}),t.createElement("br",null),"decoration: ",t.createElement("br",null),t.createElement(n,{type:"success","aria-hidden":!0,style:{margin:"5px"}}));return t.createElement(f,null,e)}});const g=r.div``;var b=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(n,{type:"atm"});return t.createElement(g,null,e)}});const h=["xxs","xs","small","medium","large","xl","xxl","xxxl"],x=n.createFromIconfontCN({scriptUrl:"//at.alicdn.com/t/font_1464085_egnk4s8yv2f.js"});const E=r.div`
  .icon-list-2 i {
    margin: 0 10px;
  }
  .icon-sizes {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .icon-sizes li {
    display: inline-block;
    width: 80px;
    height: 80px;
  }

  .icon-sizes i {
    display: block;
    margin: 12px auto 0 auto;
    text-align: center;
  }

  .icon-sizes span {
    display: block;
    margin-top: 10px;
    text-align: center;
  }
`;var v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",null,t.createElement("div",{className:"icon-list-2"},t.createElement(x,{type:"icon-store"}),t.createElement(x,{type:"icon-pic"}),t.createElement(x,{type:"icon-gift"})),t.createElement("br",null),t.createElement("ul",{className:"icon-sizes"},h.map(((e,n)=>t.createElement("li",{key:n},t.createElement(x,{type:"icon-pic",size:e}),t.createElement("span",null,e))))));return t.createElement(E,null,e)}});const w=["xxs","xs","small","medium","large","xl","xxl","xxxl"];const C=r.div`
  .icon-sizes {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .icon-sizes li {
    display: inline-block;
    width: 80px;
    height: 80px;
  }

  .icon-sizes i {
    display: block;
    margin: 12px auto 0 auto;
    text-align: center;
  }

  .icon-sizes span {
    display: block;
    margin-top: 10px;
    text-align: center;
  }
`;var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",null,t.createElement("ul",{className:"icon-sizes"},w.map(((e,o)=>t.createElement("li",{key:o},t.createElement(n,{type:"smile",size:e}),t.createElement("span",null,e))))),t.createElement("span",null,"inherit"),t.createElement("h4",null,"Shall I compare thee to a summer's day?"," ",t.createElement(n,{type:"smile",size:"inherit"})," ",t.createElement(n,{type:"set",size:"inherit"})),t.createElement("h3",null,"Thou art more lovely and more temperate."," ",t.createElement(n,{type:"smile",size:"inherit"})," ",t.createElement(n,{type:"set",size:"inherit"})),t.createElement("h2",null,"Rough winds do shake the darling buds of May,"," ",t.createElement(n,{type:"smile",size:"inherit"})," ",t.createElement(n,{type:"set",size:"inherit"})),t.createElement("h1",null,"And summer's lease hath all too short a date."," ",t.createElement(n,{type:"smile",size:"inherit"})," ",t.createElement(n,{type:"set",size:"inherit"})));return t.createElement(C,null,e)}});const O=r.div`
  .icon-style-demo {
    height: 24px;
    line-height: 24px;
    margin-bottom: 10px;
    font-size: 16px;
    color: #333;
  }
`;var k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",null,t.createElement("div",{className:"icon-style-demo"},t.createElement(n,{type:"success",style:{color:"#1DC11D",marginRight:"10px"}}),"This is a success message!"),t.createElement("div",{className:"icon-style-demo"},t.createElement(n,{type:"warning",style:{color:"#FFA003",marginRight:"10px"}}),"This is a warning message!"),t.createElement("div",{className:"icon-style-demo"},t.createElement(n,{type:"error",style:{color:"#FF3333",marginRight:"10px"}}),"This is a failure message!"));return t.createElement(O,null,e)}});const z={};z._type=d,z._accessibility=y,z._basic=b,z._iconfont=v,z._size=_,z._style=k;export default z;
