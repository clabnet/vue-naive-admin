var so=Object.defineProperty,uo=Object.defineProperties;var mo=Object.getOwnPropertyDescriptors;var $e=Object.getOwnPropertySymbols;var ho=Object.prototype.hasOwnProperty,vo=Object.prototype.propertyIsEnumerable;var Re=(e,t,o)=>t in e?so(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Pe=(e,t)=>{for(var o in t||(t={}))ho.call(t,o)&&Re(e,o,t[o]);if($e)for(var o of $e(t))vo.call(t,o)&&Re(e,o,t[o]);return e},Te=(e,t)=>uo(e,mo(t));var ne=(e,t,o)=>new Promise((r,a)=>{var i=s=>{try{m(o.next(s))}catch(v){a(v)}},c=s=>{try{m(o.throw(s))}catch(v){a(v)}},m=s=>s.done?r(s.value):Promise.resolve(s.value).then(i,c);m((o=o.apply(e,t)).next())});import{d as D,h as _,c as g,a as w,b as L,e as f,u as le,f as X,g as po,p as Y,t as oe,i as I,j as ae,k as Q,r as F,o as Ee,l as fo,m as go,n as W,q as bo,s as _o,v as xo,w as yo,x as Le,y as Fe,N as je,z as Ke,A as U,B as J,F as ee,C as pe,D as Co,E as he,G as ye,H as re,I as wo,J as zo,K as Ae,L as ce,M as se,O as y,P as H,Q as V,R as j,S as Ve,T as S,U as De,V as Ue,W as de,X as N,Y as Z,Z as So,_ as Io,$ as E,a0 as ko,a1 as $o,a2 as We,a3 as qe,a4 as Ro,a5 as Po,a6 as fe,a7 as ge,a8 as He,a9 as To,aa as ue,ab as Xe,ac as Lo,ad as Ao,ae as Ho,af as Mo,ag as be,ah as No,ai as _e,aj as Bo,ak as Oo,al as Me}from"./index-0748ec09.js";import{r as Ye,a as q,N as me}from"./icon-e8e96f67.js";import{C as Eo,_ as Ce,c as Fo,d as Ne,a as jo}from"./Dropdown-17f39936.js";import{_ as Ko}from"./logo-c890039e.js";import{N as Vo,u as Do}from"./Tooltip-2d8fc94a.js";import{f as ve,u as xe}from"./use-merged-state-bac9929e.js";import{_ as Uo}from"./_plugin-vue_export-helper-c27b6911.js";const Wo=D({name:"ChevronDownFilled",render(){return _("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},_("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),qo=g("breadcrumb",`
 white-space: nowrap;
 cursor: default;
 line-height: var(--n-item-line-height);
`,[w("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),w("a",`
 color: inherit;
 text-decoration: inherit;
 `),g("breadcrumb-item",`
 font-size: var(--n-font-size);
 transition: color .3s var(--n-bezier);
 display: inline-flex;
 align-items: center;
 `,[g("icon",`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),w("&:not(:last-child)",[L("clickable",[f("link",`
 cursor: pointer;
 `,[w("&:hover",`
 background-color: var(--n-item-color-hover);
 `),w("&:active",`
 background-color: var(--n-item-color-pressed); 
 `)])])]),f("link",`
 padding: 4px;
 border-radius: var(--n-item-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 position: relative;
 `,[w("&:hover",`
 color: var(--n-item-text-color-hover);
 `,[g("icon",`
 color: var(--n-item-text-color-hover);
 `)]),w("&:active",`
 color: var(--n-item-text-color-pressed);
 `,[g("icon",`
 color: var(--n-item-text-color-pressed);
 `)])]),f("separator",`
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 `),w("&:last-child",[f("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `,[g("icon",`
 color: var(--n-item-text-color-active);
 `)]),f("separator",`
 display: none;
 `)])])]),Ge=Q("n-breadcrumb"),Xo=Object.assign(Object.assign({},X.props),{separator:{type:String,default:"/"}}),Yo=D({name:"Breadcrumb",props:Xo,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=le(e),r=X("Breadcrumb","-breadcrumb",qo,po,e,t);Y(Ge,{separatorRef:oe(e,"separator"),mergedClsPrefixRef:t});const a=I(()=>{const{common:{cubicBezierEaseInOut:c},self:{separatorColor:m,itemTextColor:s,itemTextColorHover:v,itemTextColorPressed:z,itemTextColorActive:b,fontSize:n,fontWeightActive:h,itemBorderRadius:u,itemColorHover:p,itemColorPressed:x,itemLineHeight:P}}=r.value;return{"--n-font-size":n,"--n-bezier":c,"--n-item-text-color":s,"--n-item-text-color-hover":v,"--n-item-text-color-pressed":z,"--n-item-text-color-active":b,"--n-separator-color":m,"--n-item-color-hover":p,"--n-item-color-pressed":x,"--n-item-border-radius":u,"--n-font-weight-active":h,"--n-item-line-height":P}}),i=o?ae("breadcrumb",void 0,a,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:a,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),_("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},_("ul",null,this.$slots))}}),Go=go?window:null,Zo=(e=Go)=>{const t=()=>{const{hash:a,host:i,hostname:c,href:m,origin:s,pathname:v,port:z,protocol:b,search:n}=(e==null?void 0:e.location)||{};return{hash:a,host:i,hostname:c,href:m,origin:s,pathname:v,port:z,protocol:b,search:n}},o=()=>{r.value=t()},r=F(t());return Ee(()=>{e&&(e.addEventListener("popstate",o),e.addEventListener("hashchange",o))}),fo(()=>{e&&(e.removeEventListener("popstate",o),e.removeEventListener("hashchange",o))}),r},Jo={separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function},Qo=D({name:"BreadcrumbItem",props:Jo,setup(e,{slots:t}){const o=W(Ge,null);if(!o)return()=>null;const{separatorRef:r,mergedClsPrefixRef:a}=o,i=Zo(),c=I(()=>e.href?"a":"span"),m=I(()=>i.value.href===e.href?"location":null);return()=>{const{value:s}=a;return _("li",{class:[`${s}-breadcrumb-item`,e.clickable&&`${s}-breadcrumb-item--clickable`]},_(c.value,{class:`${s}-breadcrumb-item__link`,"aria-current":m.value,href:e.href,onClick:e.onClick},t),_("span",{class:`${s}-breadcrumb-item__separator`,"aria-hidden":"true"},bo(t.separator,()=>{var v;return[(v=e.separator)!==null&&v!==void 0?v:r.value]})))}}}),et=e=>{const{baseColor:t,textColor2:o,bodyColor:r,cardColor:a,dividerColor:i,actionColor:c,scrollbarColor:m,scrollbarColorHover:s,invertedColor:v}=e;return{textColor:o,textColorInverted:"#FFF",color:r,colorEmbedded:c,headerColor:a,headerColorInverted:v,footerColor:c,footerColorInverted:v,headerBorderColor:i,headerBorderColorInverted:v,footerBorderColor:i,footerBorderColorInverted:v,siderBorderColor:i,siderBorderColorInverted:v,siderColor:a,siderColorInverted:v,siderToggleButtonBorder:`1px solid ${i}`,siderToggleButtonColor:t,siderToggleButtonIconColor:o,siderToggleButtonIconColorInverted:o,siderToggleBarColor:Le(r,m),siderToggleBarColorHover:Le(r,s),__invertScrollbar:"true"}},ot=_o({name:"Layout",common:xo,peers:{Scrollbar:yo},self:et}),Ze=ot,Je=Q("n-layout-sider"),Qe={type:String,default:"static"},tt=g("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[g("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),L("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),nt={embedded:Boolean,position:Qe,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},eo=Q("n-layout");function rt(e){return D({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},X.props),nt),setup(t){const o=F(null),r=F(null),{mergedClsPrefixRef:a,inlineThemeDisabled:i}=le(t),c=X("Layout","-layout",tt,Ze,t,a);function m(p,x){if(t.nativeScrollbar){const{value:P}=o;P&&(x===void 0?P.scrollTo(p):P.scrollTo(p,x))}else{const{value:P}=r;P&&P.scrollTo(p,x)}}Y(eo,t);let s=0,v=0;const z=p=>{var x;const P=p.target;s=P.scrollLeft,v=P.scrollTop,(x=t.onScroll)===null||x===void 0||x.call(t,p)};Fe(()=>{if(t.nativeScrollbar){const p=o.value;p&&(p.scrollTop=v,p.scrollLeft=s)}});const b={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},n={scrollTo:m},h=I(()=>{const{common:{cubicBezierEaseInOut:p},self:x}=c.value;return{"--n-bezier":p,"--n-color":t.embedded?x.colorEmbedded:x.color,"--n-text-color":x.textColor}}),u=i?ae("layout",I(()=>t.embedded?"e":""),h,t):void 0;return Object.assign({mergedClsPrefix:a,scrollableElRef:o,scrollbarInstRef:r,hasSiderStyle:b,mergedTheme:c,handleNativeElScroll:z,cssVars:i?void 0:h,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender},n)},render(){var t;const{mergedClsPrefix:o,hasSider:r}=this;(t=this.onRender)===null||t===void 0||t.call(this);const a=r?this.hasSiderStyle:void 0,i=[this.themeClass,e&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return _("div",{class:i,style:this.cssVars},this.nativeScrollbar?_("div",{ref:"scrollableElRef",class:`${o}-layout-scroll-container`,style:[this.contentStyle,a],onScroll:this.handleNativeElScroll},this.$slots):_(je,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,a]}),this.$slots))}})}const it=rt(!1),lt=g("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[L("bordered",[f("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),f("left-placement",[L("bordered",[f("border",`
 right: 0;
 `)])]),L("right-placement",`
 justify-content: flex-start;
 `,[L("bordered",[f("border",`
 left: 0;
 `)]),L("collapsed",[g("layout-toggle-button",[g("base-icon",`
 transform: rotate(180deg);
 `)]),g("layout-toggle-bar",[w("&:hover",[f("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),f("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),g("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[g("base-icon",`
 transform: rotate(0);
 `)]),g("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[w("&:hover",[f("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),f("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),L("collapsed",[g("layout-toggle-bar",[w("&:hover",[f("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),f("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),g("layout-toggle-button",[g("base-icon",`
 transform: rotate(0);
 `)])]),g("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[g("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),g("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[f("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),f("bottom",`
 position: absolute;
 top: 34px;
 `),w("&:hover",[f("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),f("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),f("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),w("&:hover",[f("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),f("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),g("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),L("show-content",[g("layout-sider-scroll-container",{opacity:1})]),L("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),at=D({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return _("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},_(Ke,{clsPrefix:e},{default:()=>_(Eo,null)}))}}),ct=D({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return _("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},_("div",{class:`${e}-layout-toggle-bar__top`}),_("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),st={position:Qe,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},dt=D({name:"LayoutSider",props:Object.assign(Object.assign({},X.props),st),setup(e){const t=W(eo),o=F(null),r=F(null),a=I(()=>ve(s.value?e.collapsedWidth:e.width)),i=I(()=>e.collapseMode!=="transform"?{}:{minWidth:ve(e.width)}),c=I(()=>t?t.siderPlacement:"left"),m=F(e.defaultCollapsed),s=xe(oe(e,"collapsed"),m);function v(T,R){if(e.nativeScrollbar){const{value:A}=o;A&&(R===void 0?A.scrollTo(T):A.scrollTo(T,R))}else{const{value:A}=r;A&&A.scrollTo(T,R)}}function z(){const{"onUpdate:collapsed":T,onUpdateCollapsed:R,onExpand:A,onCollapse:k}=e,{value:$}=s;R&&U(R,!$),T&&U(T,!$),m.value=!$,$?A&&U(A):k&&U(k)}let b=0,n=0;const h=T=>{var R;const A=T.target;b=A.scrollLeft,n=A.scrollTop,(R=e.onScroll)===null||R===void 0||R.call(e,T)};Fe(()=>{if(e.nativeScrollbar){const T=o.value;T&&(T.scrollTop=n,T.scrollLeft=b)}}),Y(Je,{collapsedRef:s,collapseModeRef:oe(e,"collapseMode")});const{mergedClsPrefixRef:u,inlineThemeDisabled:p}=le(e),x=X("Layout","-layout-sider",lt,Ze,e,u);function P(T){var R,A;T.propertyName==="max-width"&&(s.value?(R=e.onAfterLeave)===null||R===void 0||R.call(e):(A=e.onAfterEnter)===null||A===void 0||A.call(e))}const M={scrollTo:v},K=I(()=>{const{common:{cubicBezierEaseInOut:T},self:R}=x.value,{siderToggleButtonColor:A,siderToggleButtonBorder:k,siderToggleBarColor:$,siderToggleBarColorHover:l}=R,C={"--n-bezier":T,"--n-toggle-button-color":A,"--n-toggle-button-border":k,"--n-toggle-bar-color":$,"--n-toggle-bar-color-hover":l};return e.inverted?(C["--n-color"]=R.siderColorInverted,C["--n-text-color"]=R.textColorInverted,C["--n-border-color"]=R.siderBorderColorInverted,C["--n-toggle-button-icon-color"]=R.siderToggleButtonIconColorInverted,C.__invertScrollbar=R.__invertScrollbar):(C["--n-color"]=R.siderColor,C["--n-text-color"]=R.textColor,C["--n-border-color"]=R.siderBorderColor,C["--n-toggle-button-icon-color"]=R.siderToggleButtonIconColor),C}),B=p?ae("layout-sider",I(()=>e.inverted?"a":"b"),K,e):void 0;return Object.assign({scrollableElRef:o,scrollbarInstRef:r,mergedClsPrefix:u,mergedTheme:x,styleMaxWidth:a,mergedCollapsed:s,scrollContainerStyle:i,siderPlacement:c,handleNativeElScroll:h,handleTransitionend:P,handleTriggerClick:z,inlineThemeDisabled:p,cssVars:K,themeClass:B==null?void 0:B.themeClass,onRender:B==null?void 0:B.onRender},M)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:o,showTrigger:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),_("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,o&&`${t}-layout-sider--collapsed`,(!o||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:ve(this.width)}]},this.nativeScrollbar?_("div",{class:`${t}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):_(je,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),r?r==="bar"?_(ct,{clsPrefix:t,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):_(at,{clsPrefix:t,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?_("div",{class:`${t}-layout-sider__border`}):null)}}),te=Q("n-menu"),we=Q("n-submenu"),ze=Q("n-menu-item-group"),ie=8;function Se(e){const t=W(te),{props:o,mergedCollapsedRef:r}=t,a=W(we,null),i=W(ze,null),c=I(()=>o.mode==="horizontal"),m=I(()=>c.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),s=I(()=>{var n;return Math.max((n=o.collapsedIconSize)!==null&&n!==void 0?n:o.iconSize,o.iconSize)}),v=I(()=>{var n;return!c.value&&e.root&&r.value&&(n=o.collapsedIconSize)!==null&&n!==void 0?n:o.iconSize}),z=I(()=>{if(c.value)return;const{collapsedWidth:n,indent:h,rootIndent:u}=o,{root:p,isGroup:x}=e,P=u===void 0?h:u;if(p)return r.value?n/2-s.value/2:P;if(i)return h/2+i.paddingLeftRef.value;if(a)return(x?h/2:h)+a.paddingLeftRef.value}),b=I(()=>{const{collapsedWidth:n,indent:h,rootIndent:u}=o,{value:p}=s,{root:x}=e;return c.value||!x||!r.value?ie:(u===void 0?h:u)+p+ie-(n+p)/2});return{dropdownPlacement:m,activeIconSize:v,maxIconSize:s,paddingLeft:z,iconMarginRight:b,NMenu:t,NSubmenu:a}}const Ie={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},oo=Object.assign(Object.assign({},Ie),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),ut=D({name:"MenuOptionGroup",props:oo,setup(e){Y(we,null);const t=Se(e);Y(ze,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:r}=W(te);return function(){const{value:a}=o,i=t.paddingLeft.value,{nodeProps:c}=r,m=c==null?void 0:c(e.tmNode.rawNode);return _("div",{class:`${a}-menu-item-group`,role:"group"},_("div",Object.assign({},m,{class:[`${a}-menu-item-group-title`,m==null?void 0:m.class],style:[(m==null?void 0:m.style)||"",i!==void 0?`padding-left: ${i}px;`:""]}),J(e.title),e.extra?_(ee,null," ",J(e.extra)):null),_("div",null,e.tmNodes.map(s=>ke(s,r))))}}}),to=D({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:t}=W(te);return{menuProps:t,style:I(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:I(()=>{const{maxIconSize:o,activeIconSize:r,iconMarginRight:a}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${r}px`,marginRight:`${a}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:r,renderExtra:a,expandIcon:i}}=this,c=o?o(t.rawNode):J(this.icon);return _("div",{onClick:m=>{var s;(s=this.onClick)===null||s===void 0||s.call(this,m)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},c&&_("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[c]),_("div",{class:`${e}-menu-item-content-header`,role:"none"},r?r(t.rawNode):J(this.title),this.extra||a?_("span",{class:`${e}-menu-item-content-header__extra`}," ",a?a(t.rawNode):J(this.extra)):null),this.showArrow?_(Ke,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>i?i(t.rawNode):_(Wo,null)}):null)}}),no=Object.assign(Object.assign({},Ie),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),mt=D({name:"Submenu",props:no,setup(e){const t=Se(e),{NMenu:o,NSubmenu:r}=t,{props:a,mergedCollapsedRef:i,mergedThemeRef:c}=o,m=I(()=>{const{disabled:n}=e;return r!=null&&r.mergedDisabledRef.value||a.disabled?!0:n}),s=F(!1);Y(we,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:m}),Y(ze,null);function v(){const{onClick:n}=e;n&&n()}function z(){m.value||(i.value||o.toggleExpand(e.internalKey),v())}function b(n){s.value=n}return{menuProps:a,mergedTheme:c,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:s,paddingLeft:t.paddingLeft,mergedDisabled:m,mergedValue:o.mergedValueRef,childActive:pe(()=>o.activePathRef.value.includes(e.internalKey)),collapsed:I(()=>a.mode==="horizontal"?!1:i.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:I(()=>!m.value&&(a.mode==="horizontal"||i.value)),handlePopoverShowChange:b,handleClick:z}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:r}}=this,a=()=>{const{isHorizontal:c,paddingLeft:m,collapsed:s,mergedDisabled:v,maxIconSize:z,activeIconSize:b,title:n,childActive:h,icon:u,handleClick:p,menuProps:{nodeProps:x},dropdownShow:P,iconMarginRight:M,tmNode:K,mergedClsPrefix:B}=this,T=x==null?void 0:x(K.rawNode);return _("div",Object.assign({},T,{class:[`${B}-menu-item`,T==null?void 0:T.class],role:"menuitem"}),_(to,{tmNode:K,paddingLeft:m,collapsed:s,disabled:v,iconMarginRight:M,maxIconSize:z,activeIconSize:b,title:n,extra:this.extra,showArrow:!c,childActive:h,clsPrefix:B,icon:u,hover:P,onClick:p}))},i=()=>_(Co,null,{default:()=>{const{tmNodes:c,collapsed:m}=this;return m?null:_("div",{class:`${t}-submenu-children`,role:"menu"},c.map(s=>ke(s,this.menuProps)))}});return this.root?_(Ce,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:r}),{default:()=>_("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),this.isHorizontal?null:i())}):_("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),i())}}),ro=Object.assign(Object.assign({},Ie),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),ht=D({name:"MenuOption",props:ro,setup(e){const t=Se(e),{NSubmenu:o,NMenu:r}=t,{props:a,mergedClsPrefixRef:i,mergedCollapsedRef:c}=r,m=o?o.mergedDisabledRef:{value:!1},s=I(()=>m.value||e.disabled);function v(b){const{onClick:n}=e;n&&n(b)}function z(b){s.value||(r.doSelect(e.internalKey,e.tmNode.rawNode),v(b))}return{mergedClsPrefix:i,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:r.mergedThemeRef,menuProps:a,dropdownEnabled:pe(()=>e.root&&c.value&&a.mode!=="horizontal"&&!s.value),selected:pe(()=>r.mergedValueRef.value===e.internalKey),mergedDisabled:s,handleClick:z}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:r,nodeProps:a}}=this,i=a==null?void 0:a(o.rawNode);return _("div",Object.assign({},i,{role:"menuitem",class:[`${e}-menu-item`,i==null?void 0:i.class]}),_(Vo,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>r?r(o.rawNode):J(this.title),trigger:()=>_(to,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),vt=D({name:"MenuDivider",setup(){const e=W(te),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:_("div",{class:`${t.value}-menu-divider`})}}),pt=ye(oo),ft=ye(ro),gt=ye(no);function io(e){return e.type==="divider"||e.type==="render"}function bt(e){return e.type==="divider"}function ke(e,t){const{rawNode:o}=e,{show:r}=o;if(r===!1)return null;if(io(o))return bt(o)?_(vt,Object.assign({key:e.key},o.props)):null;const{labelField:a}=t,{key:i,level:c,isGroup:m}=e,s=Object.assign(Object.assign({},o),{title:o.title||o[a],extra:o.titleExtra||o.extra,key:i,internalKey:i,level:c,root:c===0,isGroup:m});return e.children?e.isGroup?_(ut,he(s,pt,{tmNode:e,tmNodes:e.children,key:i})):_(mt,he(s,gt,{key:i,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):_(ht,he(s,ft,{key:i,tmNode:e}))}const Be=[w("&::before","background-color: var(--n-item-color-hover);"),f("arrow",`
 color: var(--n-arrow-color-hover);
 `),f("icon",`
 color: var(--n-item-icon-color-hover);
 `),g("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[w("a",`
 color: var(--n-item-text-color-hover);
 `),f("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Oe=[f("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),g("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[w("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),f("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],_t=w([g("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[L("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[g("submenu","margin: 0;"),g("menu-item","margin: 0;"),g("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[w("&::before","display: none;"),L("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),g("menu-item-content",[L("selected",[f("icon","color: var(--n-item-icon-color-active-horizontal);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[w("a","color: var(--n-item-text-color-active-horizontal);"),f("extra","color: var(--n-item-text-color-active-horizontal);")])]),L("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[g("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[w("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),f("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),f("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),re("disabled",[re("selected, child-active",[w("&:focus-within",Oe)]),L("selected",[G(null,[f("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[w("a","color: var(--n-item-text-color-active-hover-horizontal);"),f("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),L("child-active",[G(null,[f("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[w("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),f("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),G("border-bottom: 2px solid var(--n-border-color-horizontal);",Oe)]),g("menu-item-content-header",[w("a","color: var(--n-item-text-color-horizontal);")])])]),L("collapsed",[g("menu-item-content",[L("selected",[w("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),g("menu-item-content-header","opacity: 0;"),f("arrow","opacity: 0;"),f("icon","color: var(--n-item-icon-color-collapsed);")])]),g("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),g("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[w("> *","z-index: 1;"),w("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),L("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),L("collapsed",[f("arrow","transform: rotate(0);")]),L("selected",[w("&::before","background-color: var(--n-item-color-active);"),f("arrow","color: var(--n-arrow-color-active);"),f("icon","color: var(--n-item-icon-color-active);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[w("a","color: var(--n-item-text-color-active);"),f("extra","color: var(--n-item-text-color-active);")])]),L("child-active",[g("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[w("a",`
 color: var(--n-item-text-color-child-active);
 `),f("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),f("arrow",`
 color: var(--n-arrow-color-child-active);
 `),f("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),re("disabled",[re("selected, child-active",[w("&:focus-within",Be)]),L("selected",[G(null,[f("arrow","color: var(--n-arrow-color-active-hover);"),f("icon","color: var(--n-item-icon-color-active-hover);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[w("a","color: var(--n-item-text-color-active-hover);"),f("extra","color: var(--n-item-text-color-active-hover);")])])]),L("child-active",[G(null,[f("arrow","color: var(--n-arrow-color-child-active-hover);"),f("icon","color: var(--n-item-icon-color-child-active-hover);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[w("a","color: var(--n-item-text-color-child-active-hover);"),f("extra","color: var(--n-item-text-color-child-active-hover);")])])]),L("selected",[G(null,[w("&::before","background-color: var(--n-item-color-active-hover);")])]),G(null,Be)]),f("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),f("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),g("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[w("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[w("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),f("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),g("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[g("menu-item-content",`
 height: var(--n-item-height);
 `),g("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[wo({duration:".2s"})])]),g("menu-item-group",[g("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),g("menu-tooltip",[w("a",`
 color: inherit;
 text-decoration: none;
 `)]),g("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function G(e,t){return[L("hover",e,t),w("&:hover",e,t)]}const xt=Object.assign(Object.assign({},X.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,defalut:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),yt=D({name:"Menu",props:xt,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=le(e),r=X("Menu","-menu",_t,zo,e,t),a=W(Je,null),i=I(()=>{var k;const{collapsed:$}=e;if($!==void 0)return $;if(a){const{collapseModeRef:l,collapsedRef:C}=a;if(l.value==="width")return(k=C.value)!==null&&k!==void 0?k:!1}return!1}),c=I(()=>{const{keyField:k,childrenField:$,disabledField:l}=e;return Fo(e.items||e.options,{getIgnored(C){return io(C)},getChildren(C){return C[$]},getDisabled(C){return C[l]},getKey(C){var O;return(O=C[k])!==null&&O!==void 0?O:C.name}})}),m=I(()=>new Set(c.value.treeNodes.map(k=>k.key))),{watchProps:s}=e,v=F(null);s!=null&&s.includes("defaultValue")?Ae(()=>{v.value=e.defaultValue}):v.value=e.defaultValue;const z=oe(e,"value"),b=xe(z,v),n=F([]),h=()=>{n.value=e.defaultExpandAll?c.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||c.value.getPath(b.value,{includeSelf:!1}).keyPath};s!=null&&s.includes("defaultExpandedKeys")?Ae(h):h();const u=Do(e,["expandedNames","expandedKeys"]),p=xe(u,n),x=I(()=>c.value.treeNodes),P=I(()=>c.value.getPath(b.value).keyPath);Y(te,{props:e,mergedCollapsedRef:i,mergedThemeRef:r,mergedValueRef:b,mergedExpandedKeysRef:p,activePathRef:P,mergedClsPrefixRef:t,isHorizontalRef:I(()=>e.mode==="horizontal"),invertedRef:oe(e,"inverted"),doSelect:M,toggleExpand:B});function M(k,$){const{"onUpdate:value":l,onUpdateValue:C,onSelect:O}=e;C&&U(C,k,$),l&&U(l,k,$),O&&U(O,k,$),v.value=k}function K(k){const{"onUpdate:expandedKeys":$,onUpdateExpandedKeys:l,onExpandedNamesChange:C,onOpenNamesChange:O}=e;$&&U($,k),l&&U(l,k),C&&U(C,k),O&&U(O,k),n.value=k}function B(k){const $=Array.from(p.value),l=$.findIndex(C=>C===k);if(~l)$.splice(l,1);else{if(e.accordion&&m.value.has(k)){const C=$.findIndex(O=>m.value.has(O));C>-1&&$.splice(C,1)}$.push(k)}K($)}const T=k=>{const $=c.value.getPath(k!=null?k:b.value,{includeSelf:!1}).keyPath;if(!$.length)return;const l=Array.from(p.value),C=new Set([...l,...$]);e.accordion&&m.value.forEach(O=>{C.has(O)&&!$.includes(O)&&C.delete(O)}),K(Array.from(C))},R=I(()=>{const{inverted:k}=e,{common:{cubicBezierEaseInOut:$},self:l}=r.value,{borderRadius:C,borderColorHorizontal:O,fontSize:lo,itemHeight:ao,dividerColor:co}=l,d={"--n-divider-color":co,"--n-bezier":$,"--n-font-size":lo,"--n-border-color-horizontal":O,"--n-border-radius":C,"--n-item-height":ao};return k?(d["--n-group-text-color"]=l.groupTextColorInverted,d["--n-color"]=l.colorInverted,d["--n-item-text-color"]=l.itemTextColorInverted,d["--n-item-text-color-hover"]=l.itemTextColorHoverInverted,d["--n-item-text-color-active"]=l.itemTextColorActiveInverted,d["--n-item-text-color-child-active"]=l.itemTextColorChildActiveInverted,d["--n-item-text-color-child-active-hover"]=l.itemTextColorChildActiveInverted,d["--n-item-text-color-active-hover"]=l.itemTextColorActiveHoverInverted,d["--n-item-icon-color"]=l.itemIconColorInverted,d["--n-item-icon-color-hover"]=l.itemIconColorHoverInverted,d["--n-item-icon-color-active"]=l.itemIconColorActiveInverted,d["--n-item-icon-color-active-hover"]=l.itemIconColorActiveHoverInverted,d["--n-item-icon-color-child-active"]=l.itemIconColorChildActiveInverted,d["--n-item-icon-color-child-active-hover"]=l.itemIconColorChildActiveHoverInverted,d["--n-item-icon-color-collapsed"]=l.itemIconColorCollapsedInverted,d["--n-item-text-color-horizontal"]=l.itemTextColorHorizontalInverted,d["--n-item-text-color-hover-horizontal"]=l.itemTextColorHoverHorizontalInverted,d["--n-item-text-color-active-horizontal"]=l.itemTextColorActiveHorizontalInverted,d["--n-item-text-color-child-active-horizontal"]=l.itemTextColorChildActiveHorizontalInverted,d["--n-item-text-color-child-active-hover-horizontal"]=l.itemTextColorChildActiveHoverHorizontalInverted,d["--n-item-text-color-active-hover-horizontal"]=l.itemTextColorActiveHoverHorizontalInverted,d["--n-item-icon-color-horizontal"]=l.itemIconColorHorizontalInverted,d["--n-item-icon-color-hover-horizontal"]=l.itemIconColorHoverHorizontalInverted,d["--n-item-icon-color-active-horizontal"]=l.itemIconColorActiveHorizontalInverted,d["--n-item-icon-color-active-hover-horizontal"]=l.itemIconColorActiveHoverHorizontalInverted,d["--n-item-icon-color-child-active-horizontal"]=l.itemIconColorChildActiveHorizontalInverted,d["--n-item-icon-color-child-active-hover-horizontal"]=l.itemIconColorChildActiveHoverHorizontalInverted,d["--n-arrow-color"]=l.arrowColorInverted,d["--n-arrow-color-hover"]=l.arrowColorHoverInverted,d["--n-arrow-color-active"]=l.arrowColorActiveInverted,d["--n-arrow-color-active-hover"]=l.arrowColorActiveHoverInverted,d["--n-arrow-color-child-active"]=l.arrowColorChildActiveInverted,d["--n-arrow-color-child-active-hover"]=l.arrowColorChildActiveHoverInverted,d["--n-item-color-hover"]=l.itemColorHoverInverted,d["--n-item-color-active"]=l.itemColorActiveInverted,d["--n-item-color-active-hover"]=l.itemColorActiveHoverInverted,d["--n-item-color-active-collapsed"]=l.itemColorActiveCollapsedInverted):(d["--n-group-text-color"]=l.groupTextColor,d["--n-color"]=l.color,d["--n-item-text-color"]=l.itemTextColor,d["--n-item-text-color-hover"]=l.itemTextColorHover,d["--n-item-text-color-active"]=l.itemTextColorActive,d["--n-item-text-color-child-active"]=l.itemTextColorChildActive,d["--n-item-text-color-child-active-hover"]=l.itemTextColorChildActiveHover,d["--n-item-text-color-active-hover"]=l.itemTextColorActiveHover,d["--n-item-icon-color"]=l.itemIconColor,d["--n-item-icon-color-hover"]=l.itemIconColorHover,d["--n-item-icon-color-active"]=l.itemIconColorActive,d["--n-item-icon-color-active-hover"]=l.itemIconColorActiveHover,d["--n-item-icon-color-child-active"]=l.itemIconColorChildActive,d["--n-item-icon-color-child-active-hover"]=l.itemIconColorChildActiveHover,d["--n-item-icon-color-collapsed"]=l.itemIconColorCollapsed,d["--n-item-text-color-horizontal"]=l.itemTextColorHorizontal,d["--n-item-text-color-hover-horizontal"]=l.itemTextColorHoverHorizontal,d["--n-item-text-color-active-horizontal"]=l.itemTextColorActiveHorizontal,d["--n-item-text-color-child-active-horizontal"]=l.itemTextColorChildActiveHorizontal,d["--n-item-text-color-child-active-hover-horizontal"]=l.itemTextColorChildActiveHoverHorizontal,d["--n-item-text-color-active-hover-horizontal"]=l.itemTextColorActiveHoverHorizontal,d["--n-item-icon-color-horizontal"]=l.itemIconColorHorizontal,d["--n-item-icon-color-hover-horizontal"]=l.itemIconColorHoverHorizontal,d["--n-item-icon-color-active-horizontal"]=l.itemIconColorActiveHorizontal,d["--n-item-icon-color-active-hover-horizontal"]=l.itemIconColorActiveHoverHorizontal,d["--n-item-icon-color-child-active-horizontal"]=l.itemIconColorChildActiveHorizontal,d["--n-item-icon-color-child-active-hover-horizontal"]=l.itemIconColorChildActiveHoverHorizontal,d["--n-arrow-color"]=l.arrowColor,d["--n-arrow-color-hover"]=l.arrowColorHover,d["--n-arrow-color-active"]=l.arrowColorActive,d["--n-arrow-color-active-hover"]=l.arrowColorActiveHover,d["--n-arrow-color-child-active"]=l.arrowColorChildActive,d["--n-arrow-color-child-active-hover"]=l.arrowColorChildActiveHover,d["--n-item-color-hover"]=l.itemColorHover,d["--n-item-color-active"]=l.itemColorActive,d["--n-item-color-active-hover"]=l.itemColorActiveHover,d["--n-item-color-active-collapsed"]=l.itemColorActiveCollapsed),d}),A=o?ae("menu",I(()=>e.inverted?"a":"b"),R,e):void 0;return{mergedClsPrefix:t,controlledExpandedKeys:u,uncontrolledExpanededKeys:n,mergedExpandedKeys:p,uncontrolledValue:v,mergedValue:b,activePath:P,tmNodes:x,mergedTheme:r,mergedCollapsed:i,cssVars:o?void 0:R,themeClass:A==null?void 0:A.themeClass,onRender:A==null?void 0:A.onRender,showOption:T}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:r}=this;return r==null||r(),_("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(a=>ke(a,this.$props)))}}),Ct={__name:"BreadCrumb",setup(e){const t=ce(),o=se();function r(i){i!==o.path&&t.push(i)}function a(i){return i!=null&&i.customIcon?Ye(i.customIcon,{size:18}):i!=null&&i.icon?q(i.icon,{size:18}):null}return(i,c)=>{const m=Qo,s=Yo;return y(),H(s,null,{default:V(()=>[(y(!0),j(ee,null,Ve(S(o).matched.filter(v=>{var z;return!!((z=v.meta)!=null&&z.title)}),v=>(y(),H(m,{key:v.path,onClick:z=>r(v.path)},{default:V(()=>[(y(),H(De(a(v.meta)))),Ue(" "+de(v.meta.title),1)]),_:2},1032,["onClick"]))),128))]),_:1})}}},wt={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},zt=N("path",{fill:"currentColor",d:"M11 13h10v-2H11m0-2h10V7H11M3 3v2h18V3M3 21h18v-2H3m0-7l4 4V8m4 9h10v-2H11v2Z"},null,-1),St=[zt];function It(e,t){return y(),j("svg",wt,St)}const kt={name:"mdi-format-indent-decrease",render:It},$t={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Rt=N("path",{fill:"currentColor",d:"M11 13h10v-2H11m0-2h10V7H11M3 3v2h18V3M11 17h10v-2H11M3 8v8l4-4m-4 9h18v-2H3v2Z"},null,-1),Pt=[Rt];function Tt(e,t){return y(),j("svg",$t,Pt)}const Lt={name:"mdi-format-indent-increase",render:Tt},At={__name:"MenuCollapse",setup(e){const t=Z();return(o,r)=>{const a=Lt,i=kt,c=me;return y(),H(c,{size:"20","cursor-pointer":"",onClick:S(t).switchCollapsed},{default:V(()=>[S(t).collapsed?(y(),H(a,{key:0})):(y(),H(i,{key:1}))]),_:1},8,["onClick"])}}},Ht={class:"inline-block",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},Mt=N("path",{fill:"currentColor",d:"m290 236.4l43.9-43.9a8.01 8.01 0 0 0-4.7-13.6L169 160c-5.1-.6-9.5 3.7-8.9 8.9L179 329.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L370 423.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L290 236.4zm352.7 187.3c3.1 3.1 8.2 3.1 11.3 0l133.7-133.6l43.7 43.7a8.01 8.01 0 0 0 13.6-4.7L863.9 169c.6-5.1-3.7-9.5-8.9-8.9L694.8 179c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L600.3 370a8.03 8.03 0 0 0 0 11.3l42.4 42.4zM845 694.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L654 600.3a8.03 8.03 0 0 0-11.3 0l-42.4 42.3a8.03 8.03 0 0 0 0 11.3L734 787.6l-43.9 43.9a8.01 8.01 0 0 0 4.7 13.6L855 864c5.1.6 9.5-3.7 8.9-8.9L845 694.9zm-463.7-94.6a8.03 8.03 0 0 0-11.3 0L236.3 733.9l-43.7-43.7a8.01 8.01 0 0 0-13.6 4.7L160.1 855c-.6 5.1 3.7 9.5 8.9 8.9L329.2 845c6.6-.8 9.4-8.9 4.7-13.6L290 787.6L423.7 654c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.4z"},null,-1),Nt=[Mt];function Bt(e,t){return y(),j("svg",Ht,Nt)}const Ot={name:"ant-design-fullscreen-outlined",render:Bt},Et={class:"inline-block",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},Ft=N("path",{fill:"currentColor",d:"M391 240.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L200 146.3a8.03 8.03 0 0 0-11.3 0l-42.4 42.3a8.03 8.03 0 0 0 0 11.3L280 333.6l-43.9 43.9a8.01 8.01 0 0 0 4.7 13.6L401 410c5.1.6 9.5-3.7 8.9-8.9L391 240.9zm10.1 373.2L240.8 633c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L146.3 824a8.03 8.03 0 0 0 0 11.3l42.4 42.3c3.1 3.1 8.2 3.1 11.3 0L333.7 744l43.7 43.7A8.01 8.01 0 0 0 391 783l18.9-160.1c.6-5.1-3.7-9.4-8.8-8.8zm221.8-204.2L783.2 391c6.6-.8 9.4-8.9 4.7-13.6L744 333.6L877.7 200c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.3a8.03 8.03 0 0 0-11.3 0L690.3 279.9l-43.7-43.7a8.01 8.01 0 0 0-13.6 4.7L614.1 401c-.6 5.2 3.7 9.5 8.8 8.9zM744 690.4l43.9-43.9a8.01 8.01 0 0 0-4.7-13.6L623 614c-5.1-.6-9.5 3.7-8.9 8.9L633 783.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L824 877.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L744 690.4z"},null,-1),jt=[Ft];function Kt(e,t){return y(),j("svg",Et,jt)}const Vt={name:"ant-design-fullscreen-exit-outlined",render:Kt},Dt={__name:"FullScreen",setup(e){const{isFullscreen:t,toggle:o}=So();return(r,a)=>{const i=Vt,c=Ot,m=me;return y(),H(m,{mr20:"",size:"18",style:{cursor:"pointer"},onClick:S(o)},{default:V(()=>[S(t)?(y(),H(i,{key:0})):(y(),H(c,{key:1}))]),_:1},8,["onClick"])}}},Ut={flex:"","items-center":"","cursor-pointer":""},Wt=["src"],qt={__name:"UserAvatar",setup(e){const t=Io(),o=[{label:"退出登录",key:"logout",icon:q("mdi:exit-to-app",{size:"14px"})}];function r(a){a==="logout"&&$dialog.confirm({title:"提示",type:"info",content:"确认退出？",confirm(){t.logout(),$message.success("已退出登录")}})}return(a,i)=>{const c=Ce;return y(),H(c,{options:o,onSelect:r},{default:V(()=>[N("div",Ut,[N("img",{src:S(t).avatar,mr10:"","w-35":"","h-35":"","rounded-full":""},null,8,Wt),N("span",null,de(S(t).name),1)])]),_:1})}}},Xt={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Yt=N("path",{fill:"currentColor",d:"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"},null,-1),Gt=[Yt];function Zt(e,t){return y(),j("svg",Xt,Gt)}const Jt={name:"mdi-github",render:Zt},Qt={__name:"GithubSite",setup(e){function t(){window.open("https://github.com/zclzone/vue-naive-admin")}return(o,r)=>{const a=Jt,i=me;return y(),H(i,{"mr-20":"",size:"18",style:{cursor:"pointer"},onClick:t},{default:V(()=>[E(a)]),_:1})}}},en={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},on=N("path",{fill:"currentColor",d:"m3.55 19.09l1.41 1.41l1.8-1.79l-1.42-1.42M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6c0-3.32-2.69-6-6-6m8 7h3v-2h-3m-2.76 7.71l1.8 1.79l1.41-1.41l-1.79-1.8M20.45 5l-1.41-1.4l-1.8 1.79l1.42 1.42M13 1h-2v3h2M6.76 5.39L4.96 3.6L3.55 5l1.79 1.81l1.42-1.42M1 13h3v-2H1m12 9h-2v3h2"},null,-1),tn=[on];function nn(e,t){return y(),j("svg",en,tn)}const rn={name:"mdi-white-balance-sunny",render:nn},ln={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},an=N("path",{fill:"currentColor",d:"M2 12a10 10 0 0 0 13 9.54a10 10 0 0 1 0-19.08A10 10 0 0 0 2 12Z"},null,-1),cn=[an];function sn(e,t){return y(),j("svg",ln,cn)}const dn={name:"mdi-moon-waning-crescent",render:sn},un={__name:"ThemeMode",setup(e){const t=Z(),o=ko(),r=()=>{t.toggleDark(),$o(o)()};return(a,i)=>{const c=dn,m=rn,s=me;return y(),H(s,{"mr-20":"","cursor-pointer":"",size:"18",onClick:r},{default:V(()=>[S(o)?(y(),H(c,{key:0})):(y(),H(m,{key:1}))]),_:1})}}},mn={flex:"","items-center":""},hn={"ml-auto":"",flex:"","items-center":""},vn={__name:"index",setup(e){return(t,o)=>(y(),j(ee,null,[N("div",mn,[E(At),E(Ct,{"ml-15":"",hidden:"","sm:block":""})]),N("div",hn,[E(un),E(Qt),E(Dt),E(qt)])],64))}},pn={__name:"SideLogo",setup(e){const t="Vue Naive Admin",o=Z();return(r,a)=>{const i=Ko,c=We("router-link");return y(),H(c,{"h-60":"","f-c-c":"",to:"/"},{default:V(()=>[E(i,{"text-36":"","color-primary":""}),qe(N("h2",{"ml-10":"","color-primary":"","text-16":"","font-bold":"","max-w-140":"","flex-shrink-0":""},de(S(t)),513),[[Ro,!S(o).collapsed]])]),_:1})}}};const fn={__name:"SideMenu",setup(e){const t=ce(),o=se(),r=Po(),a=Z(),i=I(()=>{var n;return((n=o.meta)==null?void 0:n.activeMenu)||o.name}),c=I(()=>r.menus.map(n=>v(n)).sort((n,h)=>n.order-h.order)),m=F(null);fe(o,()=>ne(this,null,function*(){var n;yield ge(),(n=m.value)==null||n.showOption()}));function s(n,h){return He(h)?h:"/"+[n,h].filter(u=>!!u&&u!=="/").map(u=>u.replace(/(^\/)|(\/$)/g,"")).join("/")}function v(n,h=""){var x,P;let u={label:n.meta&&n.meta.title||n.name,key:n.name,path:s(h,n.path),icon:z(n.meta),order:((x=n.meta)==null?void 0:x.order)||0};const p=n.children?n.children.filter(M=>M.name&&!M.isHidden):[];if(!p.length)return u;if(p.length===1){const M=p[0];u=Te(Pe({},u),{label:((P=M.meta)==null?void 0:P.title)||M.name,key:M.name,path:s(u.path,M.path),icon:z(M.meta)});const K=M.children?M.children.filter(B=>B.name&&!B.isHidden):[];K.length===1?u=v(K[0],u.path):K.length>1&&(u.children=K.map(B=>v(B,u.path)).sort((B,T)=>B.order-T.order))}else u.children=p.map(M=>v(M,u.path)).sort((M,K)=>M.order-K.order);return u}function z(n){return n!=null&&n.customIcon?Ye(n.customIcon,{size:18}):n!=null&&n.icon?q(n.icon,{size:18}):null}function b(n,h){He(h.path)?window.open(h.path):h.path===o.path?a.reloadPage():t.push(h.path)}return(n,h)=>{const u=yt;return y(),H(u,{ref_key:"menu",ref:m,class:"side-menu",accordion:"",indent:18,"collapsed-icon-size":22,"collapsed-width":64,options:S(c),value:S(i),"onUpdate:value":b},null,8,["options","value"])}}},gn={__name:"index",setup(e){return(t,o)=>(y(),j(ee,null,[E(pn),E(fn)],64))}},bn={__name:"AppMain",setup(e){const t=Z(),r=ce().getRoutes(),a=I(()=>r.filter(i=>{var c;return(c=i.meta)==null?void 0:c.keepAlive}).map(i=>i.name));return(i,c)=>{const m=We("router-view");return y(),H(m,null,{default:V(({Component:s,route:v})=>[(y(),H(To,{include:S(a)},[S(t).reloadFlag?(y(),H(De(s),{key:S(t).aliveKeys[v.name]||v.fullPath})):ue("",!0)],1032,["include"]))]),_:1})}}},_n={__name:"ContextMenu",props:{show:{type:Boolean,default:!1},currentPath:{type:String,default:""},x:{type:Number,default:0},y:{type:Number,default:0}},emits:["update:show"],setup(e,{emit:t}){const o=e,r=Xe(),a=Z(),i=I(()=>[{label:"重新加载",key:"reload",disabled:o.currentPath!==r.activeTag,icon:q("mdi:refresh",{size:"14px"})},{label:"关闭",key:"close",disabled:r.tags.length<=1,icon:q("mdi:close",{size:"14px"})},{label:"关闭其他",key:"close-other",disabled:r.tags.length<=1,icon:q("mdi:arrow-expand-horizontal",{size:"14px"})},{label:"关闭左侧",key:"close-left",disabled:r.tags.length<=1||o.currentPath===r.tags[0].path,icon:q("mdi:arrow-expand-left",{size:"14px"})},{label:"关闭右侧",key:"close-right",disabled:r.tags.length<=1||o.currentPath===r.tags[r.tags.length-1].path,icon:q("mdi:arrow-expand-right",{size:"14px"})}]),c=se(),m=new Map([["reload",()=>{var z;(z=c.meta)!=null&&z.keepAlive&&a.setAliveKeys(c.name,+new Date),a.reloadPage()}],["close",()=>{r.removeTag(o.currentPath)}],["close-other",()=>{r.removeOther(o.currentPath)}],["close-left",()=>{r.removeLeft(o.currentPath)}],["close-right",()=>{r.removeRight(o.currentPath)}]]);function s(){t("update:show",!1)}function v(z){const b=m.get(z);b&&b(),s()}return(z,b)=>{const n=Ce;return y(),H(n,{show:e.show,options:S(i),x:e.x,y:e.y,placement:"bottom-start",onClickoutside:s,onSelect:v},null,8,["show","options","x","y"])}}},xn={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},yn=N("path",{fill:"currentColor",d:"M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"},null,-1),Cn=[yn];function wn(e,t){return y(),j("svg",xn,Cn)}const zn={name:"ic-baseline-keyboard-arrow-right",render:wn},Sn={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},In=N("path",{fill:"currentColor",d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.41z"},null,-1),kn=[In];function $n(e,t){return y(),j("svg",Sn,kn)}const Rn={name:"ic-baseline-keyboard-arrow-left",render:$n};const Pn=["onMousewheel"],Tn={__name:"ScrollX",props:{showArrow:{type:Boolean,default:!0}},setup(e,{expose:t}){const o=F(0),r=F(null),a=F(null),i=F(!1),c=Ne(()=>{var h,u;const b=(h=a.value)==null?void 0:h.offsetWidth,n=(u=r.value)==null?void 0:u.offsetWidth;i.value=n>b,s(b,n)},200);function m(b){var p,x;const{wheelDelta:n}=b,h=(p=a.value)==null?void 0:p.offsetWidth,u=(x=r.value)==null?void 0:x.offsetWidth;n<0&&(h>u&&o.value<-10||h<=u&&u+o.value-h<-10)||n>0&&o.value>10||(o.value+=n,s(h,u))}const s=Ne(function(b,n){i.value?-o.value>n-b?o.value=b-n:o.value>0&&(o.value=0):o.value=0},200),v=F(null);Ee(()=>{c(),v.value=Lo(document.body,c)}),Ao(()=>{var b;(b=v.value)==null||b.disconnect()});function z(b,n){var p,x;const h=(p=a.value)==null?void 0:p.offsetWidth,u=(x=r.value)==null?void 0:x.offsetWidth;u<=h||(b<-o.value+150&&(o.value=-(b-150),s(h,u)),b+n>-o.value+h&&(o.value=h-(b+n),s(h,u)))}return t({handleScroll:z}),(b,n)=>{const h=Rn,u=zn,p=Ho("resize");return y(),j("div",{ref_key:"wrapper",ref:a,class:"wrapper",onMousewheel:_e(m,["prevent"])},[e.showArrow&&S(i)?(y(),j(ee,{key:0},[N("div",{class:"left",onClick:n[0]||(n[0]=x=>m({wheelDelta:120}))},[E(h)]),N("div",{class:"right",onClick:n[1]||(n[1]=x=>m({wheelDelta:-120}))},[E(u)])],64)):ue("",!0),qe((y(),j("div",{ref_key:"content",ref:r,class:Mo(["content",{overflow:S(i)&&e.showArrow}]),style:be({transform:`translateX(${S(o)}px)`})},[No(b.$slots,"default",{},void 0,!0)],6)),[[p,S(c)]])],40,Pn)}}},Ln=Uo(Tn,[["__scopeId","data-v-330836ba"]]);const An={__name:"index",setup(e){const t=se(),o=ce(),r=Xe(),a=F([]),i=F(null),c=Bo({show:!1,x:0,y:0,currentPath:""});fe(()=>t.path,()=>{var p;const{name:n,fullPath:h}=t,u=(p=t.meta)==null?void 0:p.title;r.addTag({name:n,path:h,title:u})},{immediate:!0}),fe(()=>r.activeIndex,n=>ne(this,null,function*(){var x,P;yield ge();const h=(x=a.value[n])==null?void 0:x.$el;if(!h)return;const{offsetLeft:u,offsetWidth:p}=h;(P=i.value)==null||P.handleScroll(u+p,p)}),{immediate:!0});const m=n=>{r.setActiveTag(n),o.push(n)};function s(){c.show=!0}function v(){c.show=!1}function z(n,h,u){Object.assign(c,{x:n,y:h,currentPath:u})}function b(n,h){return ne(this,null,function*(){const{clientX:u,clientY:p}=n;v(),z(u,p,h.path),yield ge(),s()})}return(n,h)=>{const u=jo;return y(),H(Ln,{ref_key:"scrollXRef",ref:i,class:"bg-white dark:bg-dark!"},{default:V(()=>[(y(!0),j(ee,null,Ve(S(r).tags,p=>(y(),H(u,{ref_for:!0,ref_key:"tabRefs",ref:a,key:p.path,class:"px-15 mx-5 rounded-4 cursor-pointer hover:color-primary",type:S(r).activeTag===p.path?"primary":"default",closable:S(r).tags.length>1,onClick:x=>m(p.path),onClose:_e(x=>S(r).removeTag(p.path),["stop"]),onContextmenu:_e(x=>b(x,p),["prevent"])},{default:V(()=>[Ue(de(p.title),1)]),_:2},1032,["type","closable","onClick","onClose","onContextmenu"]))),128)),S(c).show?(y(),H(_n,{key:0,show:S(c).show,"onUpdate:show":h[0]||(h[0]=p=>S(c).show=p),"current-path":S(c).currentPath,x:S(c).x,y:S(c).y},null,8,["show","current-path","x","y"])):ue("",!0)]),_:1},512)}}},Hn={"flex-1":"","flex-col":"","overflow-hidden":""},Mn={key:0,"border-b":"","bc-eee":"","dark:border-0":"",hidden:"","sm:block":""},Nn={"flex-1":"","overflow-hidden":"","bg-hex-f5f6fb":"","dark:bg-hex-101014":""},Un={__name:"index",setup(e){const t=Z();return(o,r)=>{const a=dt,i=it;return y(),H(i,{"has-sider":"","wh-full":""},{default:V(()=>[E(a,{bordered:"","collapse-mode":"width","collapsed-width":64,width:220,"native-scrollbar":!1,collapsed:S(t).collapsed},{default:V(()=>[E(gn)]),_:1},8,["collapsed"]),N("article",Hn,[N("header",{class:"bg-white px-15 border-b bc-eee flex items-center",dark:"bg-dark border-0",style:be(`height: ${S(Oo).height}px`)},[E(vn)],4),S(Me).visible?(y(),j("section",Mn,[E(An,{style:be({height:`${S(Me).height}px`})},null,8,["style"])])):ue("",!0),N("section",Nn,[E(bn)])])]),_:1})}}};export{Un as default};
