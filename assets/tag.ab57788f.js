var e=Object.assign;import{r as t,ak as l,b as a}from"./index.9e4b8ce1.js";import{q as n}from"./styled-components.browser.esm.19571eea.js";const{Group:r}=l,c=["全部","衣服","手机","化妆品"];class s extends t.Component{constructor(e){super(e),this.state={name:""},this.onclick=this.onclick.bind(this)}onclick(e){this.setState({name:e.item})}render(){return t.createElement("div",null,t.createElement(r,null,c.map((e=>t.createElement(l,{type:"normal",key:e,size:"medium",onClick:()=>this.onclick({item:e})},e)))),this.state.name)}}const m=n.div``;var o=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(s,null);return t.createElement(m,null,e)}});const{Group:i}=l;const u=n.div``;var g=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",{className:"tag-list"},t.createElement("h4",null,"large size"),t.createElement(i,null,t.createElement(l,{type:"normal",size:"large"},"Normal large Tag"),t.createElement(l,{type:"primary",size:"large"},"Primary large Tag"),t.createElement(l,{size:"large"},t.createElement(a,{type:"smile"})," Tag With Icon")),t.createElement("h4",null,"medium(default) size"),t.createElement(i,null,t.createElement(l,{type:"normal",size:"medium"},"Normal Tag"),t.createElement(l,{type:"primary"},"Primary Tag"),t.createElement(l,null,t.createElement(a,{type:"smile"})," Tag With Icon")),t.createElement("h4",null,"small size"),t.createElement(i,null,t.createElement(l,{type:"normal",size:"small"},"Normal Small Tag"),t.createElement(l,{type:"primary",size:"small"},"Primary Small Tag"),t.createElement(l,{size:"small"},t.createElement(a,{type:"smile"})," Tag With Icon")),t.createElement("h4",null,"link tag"),t.createElement(i,null,t.createElement(l,{type:"normal"},t.createElement("a",{href:"//www.alibaba.com",target:"_blank"},"normal Link Tag")),t.createElement(l,{type:"primary"},t.createElement("a",{href:"//www.alibaba.com",target:"_blank"},"primary Link Tag")),t.createElement(l,{size:"small"},t.createElement("a",{href:"//www.alibaba.com",target:"_blank"},t.createElement(a,{type:"smile"})," Link Tag With Icon"))));return t.createElement(u,null,e)}});const{Group:p,Selectable:E}=l,d=["selectable tag","I like orange","small tag","disabled","disabled & checked"];class y extends t.Component{constructor(){super(...arguments),this.state={value:["I like orange","disabled & checked"],singleValue:"selectable tag"}}handleChange(e,t){const{value:l}=this.state,a=t?[...l,e]:l.filter((t=>t!==e));this.setState({value:a})}handleChangeSingle(e,t){const{singleValue:l}=this.state,a=t?e:"";this.setState({singleValue:a})}renderTagList(l){const{value:a}=this.state;return d.map(((n,r)=>t.createElement(E,e({key:n,checked:a.indexOf(n)>-1,disabled:r>2,size:2===r?"small":void 0,onChange:this.handleChange.bind(this,n)},l),n)))}renderTagListSingle(l){const{singleValue:a}=this.state;return d.map(((n,r)=>t.createElement(E,e({key:n,checked:a===n,disabled:r>2,size:2===r?"large":void 0,onChange:this.handleChangeSingle.bind(this,n)},l),n)))}render(){return t.createElement("div",{className:"tag-list"},t.createElement("h4",null,"type: 'default'"),t.createElement(p,null,this.renderTagList({type:"normal"})),t.createElement("h4",null,"type: 'primary'"),t.createElement(p,null,this.renderTagList({type:"primary"})),t.createElement("h4",null,"Controlled Tags: Only one selected at a time"),t.createElement(p,null,this.renderTagListSingle({type:"normal"})))}}const h=n.div``;var b=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(y,null);return t.createElement(h,null,e)}});const{Group:k}=l,_=["blue","green","orange","red","turquoise","yellow"],f=["#f50","#2db7f5","#87d068","#108ee9"];const T=n.div``;var v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement("div",{className:"tag-list"},t.createElement("h4",null,"presets"),t.createElement(k,null,_.map((e=>t.createElement(l,{key:`p_n_${e}`,size:"large",type:"normal",color:e},"标签文字")))),t.createElement(k,null,_.map((e=>t.createElement(l,{key:`p_n_${e}`,type:"normal",color:e},"标签文字")))),t.createElement(k,null,_.map((e=>t.createElement(l,{key:`p_p_${e}`,type:"primary",color:e},e)))),t.createElement("h4",null,"custom colors"),t.createElement(k,null,f.map((e=>t.createElement(l,{key:`c_${e}`,color:e},e)))));return t.createElement(T,null,e)}});const{Group:z,Closeable:C}=l,S=e=>(console.log(`close from ${e}`),!1);class w extends t.Component{renderTagList(e){return[t.createElement(C,{key:"tag-1",type:e.type,size:"large"},e.type),t.createElement(C,{key:"tag-1",type:e.type},e.type),t.createElement(C,{key:"tag-1",type:e.type,size:"small"},e.type),t.createElement(C,{key:"tag-2",type:e.type,disabled:!0},e.type," "," disabled ")]}renderCloseAreaTags(){return["tag","tail"].reduce(((e,l)=>e.concat([t.createElement(C,{key:`tag-${l}-1`,closeArea:l},"closeArea ",l),t.createElement(C,{key:`tag-${l}-2`,type:"primary",closeArea:l},"closeArea ",l)])),[])}render(){return t.createElement("div",{className:"tag-list"},t.createElement("h4",null,"type: 'normal'"),t.createElement(z,null,this.renderTagList({type:"normal"})),t.createElement("h4",null,"type: 'primary'"),t.createElement(z,null,this.renderTagList({type:"primary"})),t.createElement("h4",null,"closeArea: ['tag', 'tail']"),t.createElement(z,null,this.renderCloseAreaTags()),t.createElement("h4",null,"close handler"),t.createElement(z,null,t.createElement(C,{onClose:()=>!0}," onClose allow close"),t.createElement(C,{onClose:()=>!1}," ","onClose prevent close"),t.createElement(C,{onClose:S}," onClose from "),t.createElement(C,{afterClose:()=>console.log("after close")},"after Close")),t.createElement("h4",null,"closeable link tag"),t.createElement(z,null,t.createElement(C,{type:"primary"},t.createElement("a",{href:"//www.alibaba.com",target:"_blank"},"Primary Link Tag")),t.createElement(C,{type:"normal"},t.createElement("a",{href:"//www.alibaba.com",target:"_blank"},"normal Link Tag"))))}}const L=n.div``;var j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.createElement(w,null);return t.createElement(L,null,e)}});const O={};O._accessibility=o,O._basic=g,O._selectable=b,O["_colorful-tag"]=v,O._closable=j;export default O;
