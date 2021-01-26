var e=Object.prototype.hasOwnProperty,r=Object.getOwnPropertySymbols,t=Object.prototype.propertyIsEnumerable,n=Object.assign;import{r as o}from"./index.4642f55c.js";function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=o.createContext({}),f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=function(e){var r=o.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t}(t),y=n,s=m["".concat(p,".").concat(y)]||m[y]||f[y]||a;return t?o.createElement(s,c(c({ref:r},u),{},{components:t})):o.createElement(s,c({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,p=new Array(a);p[0]=u;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var i=2;i<a;i++)p[i]=t[i];return o.createElement.apply(null,p)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement";const y={};function s(o){var{components:a}=o,p=((n,o)=>{var a={};for(var p in n)e.call(n,p)&&o.indexOf(p)<0&&(a[p]=n[p]);if(null!=n&&r)for(var p of r(n))o.indexOf(p)<0&&t.call(n,p)&&(a[p]=n[p]);return a})(o,["components"]);return m("wrapper",n(n(n({},y),p),{components:a,mdxType:"MDXLayout"}),m("h1",null,"开发环境说明"),m("p",null,"这是组件的本地开发环境。你可以开发用例将组件的 demo 目录下，这个目录下的每个 tsx/jsx/mdx 会成为一个页面。"),m("p",null,"在 demo 中，你可以 ",m("inlineCode",{parentName:"p"},"import {xxx} from '@alicloudfe/components'"),"，从用户的视角来 import 组件库，而不应该用相对路径，以便我们将 demo 通过文档透出给用户。",m("inlineCode",{parentName:"p"},"@alicloudfe/components"),"会被映射到",m("inlineCode",{parentName:"p"},"src/index.ts")))}s.isMDXComponent=!0;var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:s});const b={};b.main=O;export default b;
