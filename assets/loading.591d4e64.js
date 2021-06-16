var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,a=(e,a)=>{for(var i in a||(a={}))r.call(a,i)&&o(e,i,a[i]);if(t)for(var i of t(a))n.call(a,i)&&o(e,i,a[i]);return e};import{r as i,am as s,g as l,an as c,a0 as u,B as d,R as p,F as f,f as m}from"./index.16a07d60.js";import{s as h,m as b,u as v,q as y}from"./styled-components.browser.esm.d6068967.js";var g={},x={};var E=function(){function e(e){this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.before=null}var t=e.prototype;return t.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)==0){var t,r=function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t}(this);t=0===this.tags.length?this.before:this.tags[this.tags.length-1].nextSibling,this.container.insertBefore(r,t),this.tags.push(r)}var n=this.tags[this.tags.length-1];if(this.isSpeedy){var o=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(n);try{var a=105===e.charCodeAt(1)&&64===e.charCodeAt(0);o.insertRule(e,a?0:o.cssRules.length)}catch(i){}}else n.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}();function _(e){e&&w.current.insert(e+"}")}var w={current:null},k=function(e,t,r,n,o,a,i,s,l,c){switch(e){case 1:switch(t.charCodeAt(0)){case 64:return w.current.insert(t+";"),"";case 108:if(98===t.charCodeAt(2))return""}break;case 2:if(0===s)return t+"/*|*/";break;case 3:switch(s){case 102:case 112:return w.current.insert(r[0]+t),"";default:return t+(0===c?"/*|*/":"")}case-2:t.split("/*|*/}").forEach(_)}};function O(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]):n+=r+" "})),n}var S=function(e,t,r){var n=e.key+"-"+t.name;if(!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles),void 0===e.inserted[t.name]){var o=t;do{e.insert("."+n,o,e.sheet,!0),o=o.next}while(void 0!==o)}};var C=/[A-Z]|^ms/g,j=/_EMO_([^_]+?)_([^]*?)_EMO_/g,P=function(e){return 45===e.charCodeAt(1)},A=function(e){return null!=e&&"boolean"!=typeof e},N=b((function(e){return P(e)?e:e.replace(C,"-$&").toLowerCase()})),z=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(j,(function(e,t,r){return T={name:t,styles:r,next:T},t}))}return 1===v[e]||P(e)||"number"!=typeof t||0===t?t:t+"px"};function M(e,t,r,n){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return T={name:r.name,styles:r.styles,next:T},r.name;if(void 0!==r.styles){var o=r.next;if(void 0!==o)for(;void 0!==o;)T={name:o.name,styles:o.styles,next:T},o=o.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var o=0;o<r.length;o++)n+=M(e,t,r[o],!1);else for(var a in r){var i=r[a];if("object"!=typeof i)null!=t&&void 0!==t[i]?n+=a+"{"+t[i]+"}":A(i)&&(n+=N(a)+":"+z(a,i)+";");else if(!Array.isArray(i)||"string"!=typeof i[0]||null!=t&&void 0!==t[i[0]]){var s=M(e,t,i,!1);switch(a){case"animation":case"animationName":n+=N(a)+":"+s+";";break;default:n+=a+"{"+s+"}"}}else for(var l=0;l<i.length;l++)A(i[l])&&(n+=N(a)+":"+z(a,i[l])+";")}return n}(e,t,r);case"function":if(void 0!==e){var a=T,i=r(e);return T=a,M(e,t,i,n)}}if(null==t)return r;var s=t[r];return void 0===s||n?r:s}var T,D=/label:\s*([^\s;\n{]+)\s*;/g,R=function(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,o="";T=void 0;var a=e[0];null==a||void 0===a.raw?(n=!1,o+=M(r,t,a,!1)):o+=a[0];for(var i=1;i<e.length;i++)o+=M(r,t,e[i],46===o.charCodeAt(o.length-1)),n&&(o+=a[i]);D.lastIndex=0;for(var s,l="";null!==(s=D.exec(o));)l+="-"+s[1];return{name:function(e){for(var t,r=0,n=0,o=e.length;o>=4;++n,o-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(o){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)}(o)+l,styles:o,next:T}},B=Object.prototype.hasOwnProperty,L=i.exports.createContext("undefined"!=typeof HTMLElement?function(e){void 0===e&&(e={});var t,r=e.key||"css";void 0!==e.prefix&&(t={prefix:e.prefix});var n,o=new h(t),a={};n=e.container||document.head;var i,s=document.querySelectorAll("style[data-emotion-"+r+"]");Array.prototype.forEach.call(s,(function(e){e.getAttribute("data-emotion-"+r).split(" ").forEach((function(e){a[e]=!0})),e.parentNode!==n&&n.appendChild(e)})),o.use(e.stylisPlugins)(k),i=function(e,t,r,n){var a=t.name;w.current=r,o(e,t.styles),n&&(l.inserted[a]=!0)};var l={key:r,sheet:new E({key:r,container:n,nonce:e.nonce,speedy:e.speedy}),nonce:e.nonce,inserted:a,registered:{},insert:i};return l}():null),V=i.exports.createContext({}),H=L.Provider,I=function(e){var t=function(t,r){return i.exports.createElement(L.Consumer,null,(function(n){return e(t,n,r)}))};return i.exports.forwardRef(t)},U="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",q=function(e,t){var r={};for(var n in t)B.call(t,n)&&(r[n]=t[n]);return r[U]=e,r},F=function(e,t,r,n){var o=null===r?t.css:t.css(r);"string"==typeof o&&void 0!==e.registered[o]&&(o=e.registered[o]);var a=t[U],s=[o],l="";"string"==typeof t.className?l=O(e.registered,s,t.className):null!=t.className&&(l=t.className+" ");var c=R(s);S(e,c,"string"==typeof a),l+=e.key+"-"+c.name;var u={};for(var d in t)B.call(t,d)&&"css"!==d&&d!==U&&(u[d]=t[d]);return u.ref=n,u.className=l,i.exports.createElement(a,u)},W=I((function(e,t,r){return"function"==typeof e.css?i.exports.createElement(V.Consumer,null,(function(n){return F(t,e,n,r)})):F(t,e,null,r)}));function K(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return R(t)}var G=function(e,t){var r=arguments;if(null==t||!B.call(t,"css"))return i.exports.createElement.apply(void 0,r);var n=r.length,o=new Array(n);o[0]=W,o[1]=q(e,t);for(var a=2;a<n;a++)o[a]=r[a];return i.exports.createElement.apply(null,o)},Y=I((function(e,t){var r=e.styles;if("function"==typeof r)return i.exports.createElement(V.Consumer,null,(function(e){var n=R([r(e)]);return i.exports.createElement(Z,{serialized:n,cache:t})}));var n=R([r]);return i.exports.createElement(Z,{serialized:n,cache:t})})),Z=function(e){function t(t,r,n){return e.call(this,t,r,n)||this}s(t,e);var r=t.prototype;return r.componentDidMount=function(){this.sheet=new E({key:this.props.cache.key+"-global",nonce:this.props.cache.sheet.nonce,container:this.props.cache.sheet.container});var e=document.querySelector("style[data-emotion-"+this.props.cache.key+'="'+this.props.serialized.name+'"]');null!==e&&this.sheet.tags.push(e),this.props.cache.sheet.tags.length&&(this.sheet.before=this.props.cache.sheet.tags[0]),this.insertStyles()},r.componentDidUpdate=function(e){e.serialized.name!==this.props.serialized.name&&this.insertStyles()},r.insertStyles=function(){if(void 0!==this.props.serialized.next&&S(this.props.cache,this.props.serialized.next,!0),this.sheet.tags.length){var e=this.sheet.tags[this.sheet.tags.length-1].nextElementSibling;this.sheet.before=e,this.sheet.flush()}this.props.cache.insert("",this.props.serialized,this.sheet,!1)},r.componentWillUnmount=function(){this.sheet.flush()},r.render=function(){return null},t}(i.exports.Component),$=function e(t){for(var r=t.length,n=0,o="";n<r;n++){var a=t[n];if(null!=a){var i=void 0;switch(typeof a){case"boolean":break;case"object":if(Array.isArray(a))i=e(a);else for(var s in i="",a)a[s]&&s&&(i&&(i+=" "),i+=s);break;default:i=a}i&&(o&&(o+=" "),o+=i)}}return o};function J(e,t,r){var n=[],o=O(e,n,r);return n.length<2?r:o+t(n)}var Q,X=I((function(e,t){return i.exports.createElement(V.Consumer,null,(function(r){var n=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var o=R(r,t.registered);return S(t,o,!1),t.key+"-"+o.name},o={css:n,cx:function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return J(t.registered,n,$(r))},theme:r},a=e.children(o);return!0,a}))})),ee=l(Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",ClassNames:X,Global:Y,createElement:G,jsx:G,keyframes:function(){var e=K.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},CacheProvider:H,ThemeContext:V,withEmotionCache:I,css:K}));Object.defineProperty(x,"__esModule",{value:!0}),x.default=le,x.skeletonStyles=x.skeletonKeyframes=x.defaultHighlightColor=x.defaultBaseColor=void 0,!(Q=i.exports)||Q.__esModule;var te=ee;function re(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ne(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?re(r,!0).forEach((function(t){oe(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):re(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function oe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ae(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  0% {\n    background-position: -200px 0;\n  }\n  ","\n  100% {\n    background-position: calc(200px + 100%) 0;\n  }\n"]);return ae=function(){return e},e}x.defaultBaseColor="#eee";x.defaultHighlightColor="#f5f5f5";var ie=function(e,t){return(0,te.keyframes)(ae(),t>0?"".concat(Math.floor(1/(e+t)*e*100),"% {\n    background-position: calc(200px + 100%) 0;\n  }"):void 0)};x.skeletonKeyframes=ie;var se=(0,te.css)("background-color:","#eee",";background-image:linear-gradient( 90deg,","#eee",",","#f5f5f5",",","#eee"," );background-size:200px 100%;background-repeat:no-repeat;border-radius:4px;display:inline-block;line-height:1;width:100%;;label:skeletonStyles;");function le(e){for(var t=e.count,r=e.duration,n=e.width,o=e.wrapper,a=e.height,i=e.circle,s=e.delay,l=e.style,c=e.className,u=[],d=0;d<t;d++){var p={};null!==n&&(p.width=n),null!==a&&(p.height=a),null!==n&&null!==a&&i&&(p.borderRadius="50%");var f="react-loading-skeleton";c&&(f+=" "+c),u.push((0,te.jsx)("span",{key:d,className:f,css:(0,te.css)(se," animation:",ie(r,s)," ",r+s,"s ease-in-out infinite;label:Skeleton;"),style:ne({},l,{},p)},"‌"))}return(0,te.jsx)("span",null,o?u.map((function(e,t){return(0,te.jsx)(o,{key:t},e,"‌")})):u)}x.skeletonStyles=se,le.defaultProps={count:1,duration:1.2,width:null,wrapper:null,height:null,circle:!1,delay:0};var ce={};Object.defineProperty(ce,"__esModule",{value:!0}),ce.default=void 0;var ue=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==me(e)&&"function"!=typeof e)return{default:e};var t=fe();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(i.exports),de=ee,pe=x;function fe(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return fe=function(){return e},e}function me(e){return(me="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function he(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function be(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ve(e,t){return!t||"object"!==me(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ye(e){return(ye=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ge(e,t){return(ge=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var xe=function(e){function t(){return he(this,t),ve(this,ye(t).apply(this,arguments))}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ge(e,t)}(t,ue.Component),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.color,r=e.highlightColor,n=e.children,o=(0,de.css)(".react-loading-skeleton{background-color:",t,";background-image:linear-gradient( 90deg,",t,",",r,",",t," );};label:SkeletonTheme;");return(0,de.jsx)("div",{css:o},n)}}])&&be(r.prototype,n),o&&be(r,o),t}();ce.default=xe,function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(xe,"defaultProps",{color:pe.defaultBaseColor,highlightColor:pe.defaultHighlightColor}),function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"SkeletonTheme",{enumerable:!0,get:function(){return r.default}});var t=n(x),r=n(ce);function n(e){return e&&e.__esModule?e:{default:e}}}(g);var Ee=c(g);class _e extends i.exports.Component{constructor(e,t){super(e,t),this.onClose=()=>{this.setState({visible:!1})},this.state={visible:!1}}onClick(){this.setState({visible:!this.state.visible})}render(){return i.exports.createElement("span",null,i.exports.createElement(u,{visible:this.state.visible,fullScreen:!0,safeNode:this.btn,onVisibleChange:this.onClose.bind(this)},i.exports.createElement(d,{onClick:this.onClick.bind(this),ref:e=>this.btn=e},"Full Screen")))}}const we=y.div``;var ke=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=i.exports.createElement(_e,null);return i.exports.createElement(we,null,e)}});const Oe=y.div`
  .demo-title-basic {
    margin: 0 60px 0 60px;
  }

  .demo-basic {
    width: 120px;
    text-align: center;
    padding: 50px;
  }
`;var Se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=i.exports.createElement("div",null,i.exports.createElement(u,{tip:"加载中..."},i.exports.createElement("div",{className:"demo-basic"},"basic usage")));return i.exports.createElement(Oe,null,e)}});class Ce extends i.exports.Component{constructor(e,t){super(e,t),this.onClose=()=>{this.setState({visible:!1})},this.state={visible:!1}}onClick(){this.setState({visible:!this.state.visible})}render(){return i.exports.createElement("span",null,i.exports.createElement(u,{visible:this.state.visible,fullScreen:!0,safeNode:this.btn,onVisibleChange:this.onClose.bind(this)},i.exports.createElement(d,{onClick:this.onClick.bind(this),ref:e=>this.btn=e},"Full Screen")))}}const je=y.div``;var Pe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=i.exports.createElement(Ce,null);return i.exports.createElement(je,null,e)}});const Ae=i.exports.createElement("div",{className:"load-container load1"},i.exports.createElement("div",{className:"loader"},"loading...")),Ne=i.exports.createElement("div",{className:"load-container load7"},i.exports.createElement("div",{className:"loader"},"loading..."));const ze=y.div`
  .demo {
    width: 200px;
    text-align: center;
    padding: 50px;
  }
  .next-loading {
    margin-bottom: 5px;
  }

  /* start copy from here */

  .load-container {
    margin: 0 auto;
    position: relative;
  }

  /* animation 1 */
  .load1 .loader,
  .load1 .loader:before,
  .load1 .loader:after {
    background: #5584ff;
    color: #5584ff;
    -webkit-animation: load1 1s infinite ease-in-out;
    animation: load1 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
  }
  .load1 .loader:before,
  .load1 .loader:after {
    position: absolute;
    top: 0;
    content: '';
  }
  .load1 .loader:before {
    left: -1.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  .load1 .loader {
    text-indent: -9999em;
    margin: 0 auto !important;
    position: relative;
    font-size: 11px;
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
  .load1 .loader:after {
    left: 1.5em;
  }
  @-webkit-keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }
  @keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }

  /* animation 2 */
  .load7 .loader:before,
  .load7 .loader:after,
  .load7 .loader {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation: load7 1.8s infinite ease-in-out;
    animation: load7 1.8s infinite ease-in-out;
    top: -36px;
  }
  .load7 .loader {
    margin: 0 auto !important;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
  .load7 .loader:before {
    left: -3.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  .load7 .loader:after {
    left: 3.5em;
  }
  .load7 .loader:before,
  .load7 .loader:after {
    content: '';
    position: absolute;
    top: 0;
  }
  @-webkit-keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em #5584ff;
    }
    40% {
      box-shadow: 0 2.5em 0 0 #5584ff;
    }
  }
  @keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em #5584ff;
    }
    40% {
      box-shadow: 0 2.5em 0 0 #5584ff;
    }
  }
`;var Me=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=i.exports.createElement("div",null,i.exports.createElement(u,{tip:"default"},i.exports.createElement("div",{className:"demo"},"test")),i.exports.createElement(u,{indicator:Ae},i.exports.createElement("div",{className:"demo"},"test")),i.exports.createElement(u,{indicator:Ne},i.exports.createElement("div",{className:"demo"},"test")));return i.exports.createElement(ze,null,e)}});const Te=y.div`
  .demo-size {
    width: 200px;
    text-align: center;
    padding: 50px;
  }
  .next-loading {
    margin-bottom: 5px;
  }
`;var De=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=i.exports.createElement("div",null,i.exports.createElement(u,{tip:i.exports.createElement("span",null,"default = large")},i.exports.createElement("div",{className:"demo-size"},"test")),i.exports.createElement(u,{tip:"large",size:"large"},i.exports.createElement("div",{className:"demo-size"},"test")),i.exports.createElement(u,{tip:"medium",size:"medium"},i.exports.createElement("div",{className:"demo-size"},"test")));return i.exports.createElement(Te,null,e)}});var Re=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:e=>p.createElement("div",null,p.createElement("div",{style:{width:400}},p.createElement(Ee,{count:5})),p.createElement("p",null,"本骨架屏组件导出自",p.createElement("a",{href:"https://www.npmjs.com/package/react-loading-skeleton",target:"_blank"},"react-loading-skeleton"),"，更多用法请查阅它的文档。"))});const Be=f.Item,Le={labelCol:{fixedSpan:4},wrapperCol:{span:18}};class Ve extends i.exports.Component{constructor(e){super(e),this.state={visible:!1}}setVisible(e){this.setState({visible:e})}render(){const e=()=>i.exports.createElement(f,{style:{width:500}},i.exports.createElement(Be,a({label:"Username"},Le),i.exports.createElement(m,null)),i.exports.createElement(Be,a({label:"Password"},Le),i.exports.createElement(m,{htmlType:"password",placeholder:"please input"})),i.exports.createElement(Be,a({label:"Detail"},Le),i.exports.createElement(m,{multiple:!0}))),t=()=>i.exports.createElement("div",{style:{paddingLeft:80}},i.exports.createElement(d,{onClick:this.setVisible.bind(this,!0),type:"primary"},"Submit"),i.exports.createElement(d,{onClick:this.setVisible.bind(this,!1),style:{marginLeft:5}},"Cancel"));return i.exports.createElement("div",null,i.exports.createElement(u,{visible:this.state.visible,shape:"fusion-reactor"},i.exports.createElement(e,null)),i.exports.createElement(t,null))}}const He=y.div``;var Ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=i.exports.createElement(Ve,null);return i.exports.createElement(He,null,e)}});const Ue=y.div`
  .demo-tip {
    width: 200px;
    text-align: center;
    padding: 50px;
  }
  .next-loading {
    margin-bottom: 5px;
  }
`;var qe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=i.exports.createElement("div",null,i.exports.createElement(u,{tip:i.exports.createElement("span",null,"default=bottom")},i.exports.createElement("div",{className:"demo-tip"},"default")),i.exports.createElement(u,{tip:"right",tipAlign:"right"},i.exports.createElement("div",{className:"demo-tip"},"right")),i.exports.createElement(u,{tip:"bottom",tipAlign:"bottom"},i.exports.createElement("div",{className:"demo-tip"},"bottom")));return i.exports.createElement(Ue,null,e)}});const Fe={};Fe._accessibility=ke,Fe._basic=Se,Fe._fullscreen=Pe,Fe._indicator=Me,Fe._size=De,Fe._skeleton=Re,Fe._state=Ie,Fe._tipAlign=qe;export default Fe;
