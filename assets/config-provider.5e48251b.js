import{P as e,r as t,aq as r,B as o,e as n,D as l,I as s,L as a,ap as c,a5 as i,aw as p}from"./index.672a70f3.js";import{q as m}from"./styled-components.browser.esm.f3e9ec77.js";import{T as u}from"./timeline.a1eef704.js";const{config:d}=r;class x extends t.exports.Component{render(){const{prefix:e,locale:r}=this.props;return t.exports.createElement("ul",null,t.exports.createElement("li",null,"prefix: ",e),t.exports.createElement("li",null,"locale: ",JSON.stringify(r)))}}x.propTypes={prefix:e.string,locale:e.object},x.defaultProps={prefix:"next-",locale:{hello:"你好"}};const h=d((e=>t.exports.createElement("div",null,"This is a Function Component"))),E=d(x);class g extends t.exports.Component{render(){return t.exports.createElement(r,{prefix:"custom-",locale:{Output:{hello:"hello"}}},t.exports.createElement("div",null,t.exports.createElement(E,null),t.exports.createElement(h,null)))}}const b=m.div``;var f=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.exports.createElement(g,null);return t.exports.createElement(b,null,e)}});const C={momentLocale:"fr-FR",CustomizedComponent:{helloWorld:"hello, world"}},y=({children:e})=>t.exports.createElement(r,{prefix:"customized-",locale:C,pure:!0,warning:!1},e);y.propTypes={children:e.node};const k=()=>t.exports.createElement(r.Consumer,null,(e=>t.exports.createElement("div",{className:"context-data"},t.exports.createElement("h3",null,"Context's state"),t.exports.createElement("pre",null,JSON.stringify(e,!1,2))))),v=()=>t.exports.createElement(y,null,t.exports.createElement(k,null));const w=m.div`
  .context-data {
    padding: 0 32px 32px;
    border: 3px dashed #aaa;
    border-radius: 9px;
  }
`;var S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.exports.createElement(v,null);return t.exports.createElement(w,null,e)}});const{ErrorBoundary:_,config:T}=r;class O extends t.exports.Component{render(){if(this.props.throwError)throw Error("There is something going wrong!");return t.exports.createElement("span",null,"normal")}}const I=T(O);class z extends t.exports.Component{constructor(){super(...arguments),this.state={throwError:!1},this.onClick=()=>{this.setState({throwError:!0})}}render(){return t.exports.createElement("div",null,"Click to throw an error"," ",t.exports.createElement(o,{type:"primary",onClick:this.onClick},"trigger error"),t.exports.createElement("br",null),t.exports.createElement("br",null),"Default fallback UI:",t.exports.createElement("hr",null),t.exports.createElement(r,{errorBoundary:!0},t.exports.createElement(I,{throwError:this.state.throwError})),t.exports.createElement("br",null),t.exports.createElement("br",null),"Customize fallback UI of configed Component(Basic Components / Biz Components):",t.exports.createElement("hr",null),t.exports.createElement(r,{errorBoundary:{fallbackUI:e=>{const{error:r,errorInfo:o}=e;return t.exports.createElement("span",{style:{color:"red"}},"Error: ",r.toString())},afterCatch:()=>{console.log("catching")}}},t.exports.createElement(I,{throwError:this.state.throwError})))}}const D=m.div``;var M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.exports.createElement(z,null);return t.exports.createElement(D,null,e)}});const j={Menu:{isSelectIconRight:!0},Table:{hasBorder:!1},Dialog:{footerActions:["cancel","ok"]}},L=()=>{const e=[];for(let t=0;t<4;t++)e.push({title:{name:`Quotation for 1PCS Nano ${3+t}.0 controller compatible`},id:100306660940+t,time:2e3+t});return e};class R extends t.exports.Component{constructor(){super(...arguments),this.state={visible:!1},this.onOpen=()=>{this.setState({visible:!0})},this.onClose=e=>{console.log(e),this.setState({visible:!1})}}render(){return t.exports.createElement("div",null,t.exports.createElement(r,{defaultPropsConfig:j},t.exports.createElement("div",null,t.exports.createElement(o,{onClick:this.onOpen,type:"primary"},"Open dialog"),t.exports.createElement(n,{title:"Welcome to Alibaba.com",visible:this.state.visible,onOk:this.onClose.bind(this,"okClick"),onCancel:this.onClose.bind(this,"cancelClick"),onClose:this.onClose},"Start your business here by searching a popular product"),t.exports.createElement("br",null),t.exports.createElement("br",null),t.exports.createElement(l,{style:{width:200},selectMode:"single",selectedKeys:"1"},t.exports.createElement(l.Item,{key:"1"},"Option 1"),t.exports.createElement(l.Item,{disabled:!0,key:"2"},"Disabled option 2"),t.exports.createElement(l.SubMenu,{key:"sub",label:"Sub menu"},t.exports.createElement(l.Item,{key:"sub-1"},"Sub option 1"),t.exports.createElement(l.Item,{key:"sub-2"},"Sub option 2")),t.exports.createElement(l.Item,{key:"3"},"Option 3")),t.exports.createElement("br",null),t.exports.createElement(s,{dataSource:L()},t.exports.createElement(s.Column,{title:"Id",htmlTitle:"Unique Id",dataIndex:"id"}),t.exports.createElement(s.Column,{title:"Title",dataIndex:"title.name"}),t.exports.createElement(s.Column,{title:"Time",dataIndex:"time"})))))}}const N=m.div``;var P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.exports.createElement(R,null);return t.exports.createElement(N,null,e)}});const{config:B,getContextProps:A}=r,{Option:G}=a,q={"zh-cn":{ClickMe:{clickMe:"点我！"},Toast:{close:"关闭"}},"en-us":{ClickMe:{clickMe:"click me!"},Toast:{close:"close"}}};class U extends t.exports.Component{render(){const{locale:e,onClick:r}=this.props;return t.exports.createElement(o,{onClick:r},e.clickMe)}}U.propTypes={locale:e.object,onClick:e.func},U.defaultProps={locale:q["zh-cn"].ClickMe,onClick:()=>{}};class F extends t.exports.Component{constructor(e){super(e),this.state={visible:!1},this.handleClose=this.handleClose.bind(this)}handleClose(){this.setState({visible:!1}),this.props.afterClose()}render(){return t.exports.createElement("div",{className:"toast"},t.exports.createElement(o,{type:"primary",onClick:this.handleClose},this.props.locale.close))}}F.propTypes={locale:e.object,afterClose:e.func},F.defaultProps={locale:q["zh-cn"].Toast,afterClose:()=>{}},F.create=(e={})=>{const r=document.createElement("div");document.body.appendChild(r);const o=A(e,"Toast").locale;ReactDOM.render(t.exports.createElement(F,{afterClose:()=>{ReactDOM.unmountComponentAtNode(r),document.body.removeChild(r)},locale:o}),r)};const H=B(U),Z=B(F);class J extends t.exports.Component{constructor(e){super(e),this.state={language:"zh-cn"},this.handleClick=this.handleClick.bind(this),this.handleChangeLanguage=this.handleChangeLanguage.bind(this)}handleClick(){Z.create()}handleChangeLanguage(e){this.setState({language:e})}render(){const{language:e}=this.state;return t.exports.createElement(r,{locale:q[e]},t.exports.createElement("div",null,t.exports.createElement("div",{className:"select-language"},t.exports.createElement(a,{value:e,onChange:this.handleChangeLanguage},t.exports.createElement(G,{value:"zh-cn"},"zh-cn"),t.exports.createElement(G,{value:"en-us"},"en-us"))),t.exports.createElement(H,{onClick:this.handleClick})))}}const K=m.div`
  .toast {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 200px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    background: white;
    box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.32);
  }

  .toast .next-btn {
    margin: auto;
  }

  .select-language {
    margin-bottom: 20px;
  }
`;var W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.exports.createElement(J,null);return t.exports.createElement(K,null,e)}});const{SubMenu:Q,Item:$,Group:V,Divider:X}=l,Y=c.RangePicker;class ee extends t.exports.Component{constructor(e){super(e),this.state={dir:"rtl"},this.changeDir=this.changeDir.bind(this),this.showDialog=this.showDialog.bind(this)}changeDir(e){this.setState({dir:e})}showDialog(){n.confirm({title:"Confirm",content:"Are you sure you want to delete all alert e-mails waiting in queue?"})}render(){return t.exports.createElement("div",null,t.exports.createElement("div",{className:"change-rtl"},t.exports.createElement("span",{style:{marginRight:16}},"Change direction of components:"," "),t.exports.createElement(i.Group,{shape:"button",size:"large",value:this.state.dir,onChange:this.changeDir},t.exports.createElement(i,{key:"rtl",value:"rtl"},"RTL"),t.exports.createElement(i,{key:"ltr",value:"ltr"},"LTR"))),t.exports.createElement("br",null),t.exports.createElement("hr",null),t.exports.createElement(r,{rtl:"rtl"===this.state.dir},t.exports.createElement("div",{className:"locale-components",dir:this.state.dir},t.exports.createElement(o,{type:"primary",onClick:this.showDialog},"Show Dialog"),t.exports.createElement(a,{style:{width:"150px"},dataSource:["hello","bye"]}),t.exports.createElement(Y,{showTime:!0}),t.exports.createElement(p,{style:{width:"350px",padding:"12px",border:"1px solid #C4C6CF",borderRadius:"3px"},shape:"card"}),t.exports.createElement(u,{fold:[{foldArea:[1,2],foldShow:!0}]},t.exports.createElement(u.Item,{title:"Signed",content:"Signed, sign Alibaba is a small post office, thanks to the use of STO, look forward to once again at your service",time:"2016-06-10 10:30:00",state:"process"}),t.exports.createElement(u.Item,{title:"Ship",content:"Express has arrived in Hangzhou, Zhejiang Binjiang company",time:"2016-06-10 09:30:00"}),t.exports.createElement(u.Item,{title:"Ship",content:"Zhejiang Hangzhou Riverside company sent a member for you to send pieces",time:"2016-06-10 09:03:00"}),t.exports.createElement(u.Item,{title:"Ship",content:"Zhejiang Hangzhou Transshipment Center has been issued",time:"2016-06-10 06:10:00"})),t.exports.createElement(l,{className:"my-menu",defaultOpenKeys:"sub-menu"},t.exports.createElement($,{key:"1"},"Option 1"),t.exports.createElement($,{disabled:!0,key:"2"},"Disabled option 2"),t.exports.createElement(X,{key:"divider"}),t.exports.createElement(V,{label:"Group"},t.exports.createElement($,{key:"group-1"},"Group option 1"),t.exports.createElement($,{key:"group-2"},"Group option 2")),t.exports.createElement(X,null),t.exports.createElement(Q,{key:"sub-menu",label:"Sub menu"},t.exports.createElement($,{key:"sub-1"},"Sub option 1"),t.exports.createElement($,{key:"sub-2"},"Sub option 2"),t.exports.createElement($,{disabled:!0,key:"sub-3"},t.exports.createElement("a",{href:"https://www.taobao.com/",target:"__blank"},"Disabled Option Link 3")),t.exports.createElement($,{key:"sub-4"},t.exports.createElement("a",{href:"https://www.taobao.com/",target:"__blank"},"Option Link 4"))),t.exports.createElement($,{key:"3",helper:"CTRL+P"},"Option 3"),t.exports.createElement($,{disabled:!0,key:"4"},t.exports.createElement("a",{href:"https://www.taobao.com/",target:"__blank"},"Disabled Option Link")),t.exports.createElement($,{key:"5"},t.exports.createElement("a",{href:"https://www.taobao.com/",target:"__blank"},"Option Link"))))))}}const te=m.div`
  .my-menu {
    width: 200px;
  }

  .change-locale {
    border-bottom: 1px solid #d9d9d9;
    padding-bottom: 16px;
  }

  .locale-components > * {
    margin: 16px 0;
    display: block;
  }
`;var re=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=t.exports.createElement(ee,null);return t.exports.createElement(te,null,e)}});const oe={};oe._basic=f,oe._consumer=S,oe["_error-boundary"]=M,oe._interactive=P,oe._locale=W,oe._rtl=re;export default oe;