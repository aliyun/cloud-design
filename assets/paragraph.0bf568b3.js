import{c as e,_ as r,d as t,e as a,ae as l,t as n,f as s,r as o,g as p,p as i}from"./index.db891132.js";import{q as m}from"./styled-components.browser.esm.2d3384e1.js";var c,u,d=(u=c=function(e){function i(r){t(this,i);var n=a(this,e.call(this,r));return l.warning("[Paragraph] is deprecated, please use Typography.Paragraph instead!"),n}return r(i,e),i.prototype.render=function(){var e=this.props,r=e.prefix,t=e.className,a=e.type,l=e.size,i=e.rtl,m=n(e,["prefix","className","type","size","rtl"]),c=s(r+"paragraph","short"===a?r+"paragraph-short":r+"paragraph-long","small"===l?r+"paragraph-small":r+"paragraph-medium",t);return i&&(m.dir="rtl"),o.createElement("div",p({},m,{className:c}),this.props.children)},i}(o.Component),c.propTypes={prefix:i.string,className:i.string,type:i.oneOf(["long","short"]),size:i.oneOf(["medium","small"]),rtl:i.bool},c.defaultProps={prefix:"next-",type:"long",size:"medium"},u);d.displayName="Paragraph";var f=e.config(d);const g=m.div``;var h=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement("div",null,o.createElement(f,null,e),o.createElement("br",null),o.createElement(f,{size:"small"},e));return o.createElement(g,null,e)}});const y=m.div``;var v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=o.createElement("div",null,o.createElement(f,null,e),o.createElement("br",null),o.createElement(f,{type:"short"},e));return o.createElement(y,null,e)}});const E={};E._basic=h,E._type=v;export default E;