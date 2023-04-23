import{_ as N}from"./AppPage-0e75b682.js";import{c as f,e as _,d as T,u as k,f as b,aD as y,i as F,j as B,h as r,aF as v,cG as P,_ as E,P as j,Q as a,O as h,X as e,$ as c,T as p,W as A,V as x,R as O,S as W,F as D,az as H,as as I}from"./index-0748ec09.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./use-merged-state-bac9929e.js";const L=f("statistic",[_("label",`
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `),f("statistic-value",`
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `,[_("prefix",`
 margin: 0 4px 0 0;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `,[f("icon",{verticalAlign:"-0.125em"})]),_("content",`
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `),_("suffix",`
 margin: 0 0 0 4px;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `,[f("icon",{verticalAlign:"-0.125em"})])])]),U=Object.assign(Object.assign({},b.props),{tabularNums:Boolean,label:String,value:[String,Number]}),G=T({name:"Statistic",props:U,setup(n){const{mergedClsPrefixRef:t,inlineThemeDisabled:u,mergedRtlRef:d}=k(n),o=b("Statistic","-statistic",L,P,n,t),l=y("Statistic",d,t),s=F(()=>{const{self:{labelFontWeight:m,valueFontSize:g,valueFontWeight:z,valuePrefixTextColor:w,labelTextColor:S,valueSuffixTextColor:C,valueTextColor:R,labelFontSize:V},common:{cubicBezierEaseInOut:$}}=o.value;return{"--n-bezier":$,"--n-label-font-size":V,"--n-label-font-weight":m,"--n-label-text-color":S,"--n-value-font-weight":z,"--n-value-font-size":g,"--n-value-prefix-text-color":w,"--n-value-suffix-text-color":C,"--n-value-text-color":R}}),i=u?B("statistic",void 0,s,n):void 0;return{rtlEnabled:l,mergedClsPrefix:t,cssVars:u?void 0:s,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var n;const{mergedClsPrefix:t,$slots:{default:u,label:d,prefix:o,suffix:l}}=this;return(n=this.onRender)===null||n===void 0||n.call(this),r("div",{class:[`${t}-statistic`,this.themeClass,this.rtlEnabled&&`${t}-statistic--rtl`],style:this.cssVars},v(d,s=>r("div",{class:`${t}-statistic__label`},this.label||s)),r("div",{class:`${t}-statistic-value`,style:{fontVariantNumeric:this.tabularNums?"tabular-nums":""}},v(o,s=>s&&r("span",{class:`${t}-statistic-value__prefix`},s)),this.value!==void 0?r("span",{class:`${t}-statistic-value__content`},this.value):v(u,s=>s&&r("span",{class:`${t}-statistic-value__content`},s)),v(l,s=>s&&r("span",{class:`${t}-statistic-value__suffix`},s))))}}),Q={"flex-1":""},X={flex:"","items-center":""},q=["src"],J={"ml-20":""},K={"text-16":""},M=e("p",{"mt-5":"","text-12":"","op-60":""},"今天又是元气满满的一天",-1),Y={"ml-auto":"",flex:"","items-center":""},Z=e("a",{href:"https://github.com/zclzone/vue-naive-admin"},[e("img",{allt:"stars",src:"https://badgen.net/github/stars/zclzone/vue-naive-admin"})],-1),ee=e("a",{href:"https://github.com/zclzone/vue-naive-admin"},[e("img",{allt:"forks",src:"https://badgen.net/github/forks/zclzone/vue-naive-admin"})],-1),te={flex:"","flex-wrap":"","justify-between":""},se=e("p",{"op-60":""},"一个基于 Vue3.0、Vite、Naive UI 的轻量级后台管理模板",-1),ae=e("div",{"w-300":"","h-0":""},null,-1),ne=e("div",{"w-300":"","h-0":""},null,-1),ie=e("div",{"w-300":"","h-0":""},null,-1),oe=e("div",{"w-300":"","h-0":""},null,-1),de={__name:"index",setup(n){const t=E();return(u,d)=>{const o=G,l=H,s=I,i=N;return h(),j(i,{"show-footer":!0},{default:a(()=>[e("div",Q,[c(l,{"rounded-10":""},{default:a(()=>[e("div",X,[e("img",{"rounded-full":"",width:"60",src:p(t).avatar},null,8,q),e("div",J,[e("p",K,"Hello, "+A(p(t).name),1),M]),e("div",Y,[c(o,{label:"待办",value:4},{suffix:a(()=>[x(" / 10 ")]),_:1}),c(o,{label:"Stars","w-100":"","ml-80":""},{default:a(()=>[Z]),_:1}),c(o,{label:"Forks","w-100":"","ml-80":""},{default:a(()=>[ee]),_:1})])])]),_:1}),c(l,{title:"项目",size:"small",segmented:!0,"mt-15":"","rounded-10":""},{"header-extra":a(()=>[c(s,{text:"",type:"primary"},{default:a(()=>[x("更多")]),_:1})]),default:a(()=>[e("div",te,[(h(),O(D,null,W(10,m=>c(l,{key:m,class:"w-300 flex-shrink-0 mt-10 mb-10 cursor-pointer","hover:card-shadow":"",title:"Vue Naive Admin",size:"small"},{default:a(()=>[se]),_:2},1024)),64)),ae,ne,ie,oe])]),_:1})])]),_:1})}}};export{de as default};
