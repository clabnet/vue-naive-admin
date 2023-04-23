import{bu as Fe,r as Y,a6 as ye,aj as je,bv as Ge,bw as We,ad as Ue,ba as oe,bx as Ve,aG as ne,d as q,h as v,v as qe,by as Ye,bo as P,c as j,b as E,e as H,H as J,a as W,u as Ie,f as ae,p as Z,t as G,aD as Ze,i as $,am as A,j as Re,bz as xe,aF as Ce,bA as Xe,k as se,A as re,n as X,bB as Ke,C as te,aU as Je,aP as ze,B as ie,bd as Qe,F as eo,bC as oo,bD as no,bE as ro,aV as to,bF as io,E as lo}from"./index-0748ec09.js";import{V as ao,g as so,h as co,r as uo,e as fo,p as _e}from"./Tooltip-2d8fc94a.js";import{N as ho}from"./icon-e8e96f67.js";import{u as po}from"./use-merged-state-bac9929e.js";function cn(e=void 0,n="YYYY-MM-DD HH:mm:ss"){return Fe(e).format(n)}function un(e,n,o){let r;return function(...t){let i=this;if(r&&clearTimeout(r),o){let l=!r;r=setTimeout(()=>{r=null},n),l&&e.apply(i,t)}else r=setTimeout(()=>{e.apply(i,t)},n)}}function ke(e,n){let{target:o}=e;for(;o;){if(o.dataset&&o.dataset[n]!==void 0)return!0;o=o.parentElement}return!1}function vo(e){return n=>{n?e.value=n.$el:e.value=null}}function bo(e,n,o){if(!n)return e;const r=Y(e.value);let t=null;return ye(e,i=>{t!==null&&window.clearTimeout(t),i===!0?o&&!o.value?r.value=!0:t=window.setTimeout(()=>{r.value=!0},n):r.value=!1}),r}function go(e={},n){const o=je({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:t}=e,i=a=>{switch(a.key){case"Control":o.ctrl=!0;break;case"Meta":o.command=!0,o.win=!0;break;case"Shift":o.shift=!0;break;case"Tab":o.tab=!0;break}r!==void 0&&Object.keys(r).forEach(d=>{if(d!==a.key)return;const f=r[d];if(typeof f=="function")f(a);else{const{stop:c=!1,prevent:m=!1}=f;c&&a.stopPropagation(),m&&a.preventDefault(),f.handler(a)}})},l=a=>{switch(a.key){case"Control":o.ctrl=!1;break;case"Meta":o.command=!1,o.win=!1;break;case"Shift":o.shift=!1;break;case"Tab":o.tab=!1;break}t!==void 0&&Object.keys(t).forEach(d=>{if(d!==a.key)return;const f=t[d];if(typeof f=="function")f(a);else{const{stop:c=!1,prevent:m=!1}=f;c&&a.stopPropagation(),m&&a.preventDefault(),f.handler(a)}})},s=()=>{(n===void 0||n.value)&&(ne("keydown",document,i),ne("keyup",document,l)),n!==void 0&&ye(n,a=>{a?(ne("keydown",document,i),ne("keyup",document,l)):(oe("keydown",document,i),oe("keyup",document,l))})};return Ge()?(We(s),Ue(()=>{(n===void 0||n.value)&&(oe("keydown",document,i),oe("keyup",document,l))})):s(),Ve(o)}const yo=q({name:"ChevronRight",render(){return v("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}});function Se(e){return Array.isArray(e)?e:[e]}const be={STOP:"STOP"};function Ae(e,n){const o=n(e);e.children!==void 0&&o!==be.STOP&&e.children.forEach(r=>Ae(r,n))}function mo(e,n={}){const{preserveGroup:o=!1}=n,r=[],t=o?l=>{l.isLeaf||(r.push(l.key),i(l.children))}:l=>{l.isLeaf||(l.isGroup||r.push(l.key),i(l.children))};function i(l){l.forEach(t)}return i(e),r}function wo(e,n){const{isLeaf:o}=e;return o!==void 0?o:!n(e)}function xo(e){return e.children}function Co(e){return e.key}function ko(){return!1}function So(e,n){const{isLeaf:o}=e;return!(o===!1&&!Array.isArray(n(e)))}function Po(e){return e.disabled===!0}function No(e,n){return e.isLeaf===!1&&!Array.isArray(n(e))}function he(e){var n;return e==null?[]:Array.isArray(e)?e:(n=e.checkedKeys)!==null&&n!==void 0?n:[]}function pe(e){var n;return e==null||Array.isArray(e)?[]:(n=e.indeterminateKeys)!==null&&n!==void 0?n:[]}function Io(e,n){const o=new Set(e);return n.forEach(r=>{o.has(r)||o.add(r)}),Array.from(o)}function Ro(e,n){const o=new Set(e);return n.forEach(r=>{o.has(r)&&o.delete(r)}),Array.from(o)}function Ko(e){return(e==null?void 0:e.type)==="group"}function fn(e){const n=new Map;return e.forEach((o,r)=>{n.set(o.key,r)}),o=>{var r;return(r=n.get(o))!==null&&r!==void 0?r:null}}class zo extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function _o(e,n,o,r){return le(n.concat(e),o,r,!1)}function Ao(e,n){const o=new Set;return e.forEach(r=>{const t=n.treeNodeMap.get(r);if(t!==void 0){let i=t.parent;for(;i!==null&&!(i.disabled||o.has(i.key));)o.add(i.key),i=i.parent}}),o}function Oo(e,n,o,r){const t=le(n,o,r,!1),i=le(e,o,r,!0),l=Ao(e,o),s=[];return t.forEach(a=>{(i.has(a)||l.has(a))&&s.push(a)}),s.forEach(a=>t.delete(a)),t}function ve(e,n){const{checkedKeys:o,keysToCheck:r,keysToUncheck:t,indeterminateKeys:i,cascade:l,leafOnly:s,checkStrategy:a,allowNotLoaded:d}=e;if(!l)return r!==void 0?{checkedKeys:Io(o,r),indeterminateKeys:Array.from(i)}:t!==void 0?{checkedKeys:Ro(o,t),indeterminateKeys:Array.from(i)}:{checkedKeys:Array.from(o),indeterminateKeys:Array.from(i)};const{levelTreeNodeMap:f}=n;let c;t!==void 0?c=Oo(t,o,n,d):r!==void 0?c=_o(r,o,n,d):c=le(o,n,d,!1);const m=a==="parent",b=a==="child"||s,p=c,z=new Set,C=Math.max.apply(null,Array.from(f.keys()));for(let S=C;S>=0;S-=1){const D=S===0,B=f.get(S);for(const u of B){if(u.isLeaf)continue;const{key:h,shallowLoaded:R}=u;if(b&&R&&u.children.forEach(k=>{!k.disabled&&!k.isLeaf&&k.shallowLoaded&&p.has(k.key)&&p.delete(k.key)}),u.disabled||!R)continue;let T=!0,O=!1,_=!0;for(const k of u.children){const L=k.key;if(!k.disabled){if(_&&(_=!1),p.has(L))O=!0;else if(z.has(L)){O=!0,T=!1;break}else if(T=!1,O)break}}T&&!_?(m&&u.children.forEach(k=>{!k.disabled&&p.has(k.key)&&p.delete(k.key)}),p.add(h)):O&&z.add(h),D&&b&&p.has(h)&&p.delete(h)}}return{checkedKeys:Array.from(p),indeterminateKeys:Array.from(z)}}function le(e,n,o,r){const{treeNodeMap:t,getChildren:i}=n,l=new Set,s=new Set(e);return e.forEach(a=>{const d=t.get(a);d!==void 0&&Ae(d,f=>{if(f.disabled)return be.STOP;const{key:c}=f;if(!l.has(c)&&(l.add(c),s.add(c),No(f.rawNode,i))){if(r)return be.STOP;if(!o)throw new zo}})}),s}function $o(e,{includeGroup:n=!1,includeSelf:o=!0},r){var t;const i=r.treeNodeMap;let l=e==null?null:(t=i.get(e))!==null&&t!==void 0?t:null;const s={keyPath:[],treeNodePath:[],treeNode:l};if(l!=null&&l.ignored)return s.treeNode=null,s;for(;l;)!l.ignored&&(n||!l.isGroup)&&s.treeNodePath.push(l),l=l.parent;return s.treeNodePath.reverse(),o||s.treeNodePath.pop(),s.keyPath=s.treeNodePath.map(a=>a.key),s}function To(e){if(e.length===0)return null;const n=e[0];return n.isGroup||n.ignored||n.disabled?n.getNext():n}function Eo(e,n){const o=e.siblings,r=o.length,{index:t}=e;return n?o[(t+1)%r]:t===o.length-1?null:o[t+1]}function Pe(e,n,{loop:o=!1,includeDisabled:r=!1}={}){const t=n==="prev"?Bo:Eo,i={reverse:n==="prev"};let l=!1,s=null;function a(d){if(d!==null){if(d===e){if(!l)l=!0;else if(!e.disabled&&!e.isGroup){s=e;return}}else if((!d.disabled||r)&&!d.ignored&&!d.isGroup){s=d;return}if(d.isGroup){const f=me(d,i);f!==null?s=f:a(t(d,o))}else{const f=t(d,!1);if(f!==null)a(f);else{const c=Lo(d);c!=null&&c.isGroup?a(t(c,o)):o&&a(t(d,!0))}}}}return a(e),s}function Bo(e,n){const o=e.siblings,r=o.length,{index:t}=e;return n?o[(t-1+r)%r]:t===0?null:o[t-1]}function Lo(e){return e.parent}function me(e,n={}){const{reverse:o=!1}=n,{children:r}=e;if(r){const{length:t}=r,i=o?t-1:0,l=o?-1:t,s=o?-1:1;for(let a=i;a!==l;a+=s){const d=r[a];if(!d.disabled&&!d.ignored)if(d.isGroup){const f=me(d,n);if(f!==null)return f}else return d}}return null}const Mo={getChild(){return this.ignored?null:me(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return Pe(this,"next",e)},getPrev(e={}){return Pe(this,"prev",e)}};function Ho(e,n){const o=n?new Set(n):void 0,r=[];function t(i){i.forEach(l=>{r.push(l),!(l.isLeaf||!l.children||l.ignored)&&(l.isGroup||o===void 0||o.has(l.key))&&t(l.children)})}return t(e),r}function Do(e,n){const o=e.key;for(;n;){if(n.key===o)return!0;n=n.parent}return!1}function Oe(e,n,o,r,t,i=null,l=0){const s=[];return e.forEach((a,d)=>{var f;const c=Object.create(r);if(c.rawNode=a,c.siblings=s,c.level=l,c.index=d,c.isFirstChild=d===0,c.isLastChild=d+1===e.length,c.parent=i,!c.ignored){const m=t(a);Array.isArray(m)&&(c.children=Oe(m,n,o,r,t,c,l+1))}s.push(c),n.set(c.key,c),o.has(l)||o.set(l,[]),(f=o.get(l))===null||f===void 0||f.push(c)}),s}function Fo(e,n={}){var o;const r=new Map,t=new Map,{getDisabled:i=Po,getIgnored:l=ko,getIsGroup:s=Ko,getKey:a=Co}=n,d=(o=n.getChildren)!==null&&o!==void 0?o:xo,f=n.ignoreEmptyChildren?u=>{const h=d(u);return Array.isArray(h)?h.length?h:null:h}:d,c=Object.assign({get key(){return a(this.rawNode)},get disabled(){return i(this.rawNode)},get isGroup(){return s(this.rawNode)},get isLeaf(){return wo(this.rawNode,f)},get shallowLoaded(){return So(this.rawNode,f)},get ignored(){return l(this.rawNode)},contains(u){return Do(this,u)}},Mo),m=Oe(e,r,t,c,f);function b(u){if(u==null)return null;const h=r.get(u);return h&&!h.isGroup&&!h.ignored?h:null}function p(u){if(u==null)return null;const h=r.get(u);return h&&!h.ignored?h:null}function z(u,h){const R=p(u);return R?R.getPrev(h):null}function C(u,h){const R=p(u);return R?R.getNext(h):null}function S(u){const h=p(u);return h?h.getParent():null}function D(u){const h=p(u);return h?h.getChild():null}const B={treeNodes:m,treeNodeMap:r,levelTreeNodeMap:t,maxLevel:Math.max(...t.keys()),getChildren:f,getFlattenedNodes(u){return Ho(m,u)},getNode:b,getPrev:z,getNext:C,getParent:S,getChild:D,getFirstAvailableNode(){return To(m)},getPath(u,h={}){return $o(u,h,B)},getCheckedKeys(u,h={}){const{cascade:R=!0,leafOnly:T=!1,checkStrategy:O="all",allowNotLoaded:_=!1}=h;return ve({checkedKeys:he(u),indeterminateKeys:pe(u),cascade:R,leafOnly:T,checkStrategy:O,allowNotLoaded:_},B)},check(u,h,R={}){const{cascade:T=!0,leafOnly:O=!1,checkStrategy:_="all",allowNotLoaded:k=!1}=R;return ve({checkedKeys:he(h),indeterminateKeys:pe(h),keysToCheck:u==null?[]:Se(u),cascade:T,leafOnly:O,checkStrategy:_,allowNotLoaded:k},B)},uncheck(u,h,R={}){const{cascade:T=!0,leafOnly:O=!1,checkStrategy:_="all",allowNotLoaded:k=!1}=R;return ve({checkedKeys:he(h),indeterminateKeys:pe(h),keysToUncheck:u==null?[]:Se(u),cascade:T,leafOnly:O,checkStrategy:_,allowNotLoaded:k},B)},getNonLeafKeys(u={}){return mo(m,u)}};return B}const jo=e=>{const{textColor2:n,primaryColorHover:o,primaryColorPressed:r,primaryColor:t,infoColor:i,successColor:l,warningColor:s,errorColor:a,baseColor:d,borderColor:f,opacityDisabled:c,tagColor:m,closeIconColor:b,closeIconColorHover:p,closeIconColorPressed:z,borderRadiusSmall:C,fontSizeMini:S,fontSizeTiny:D,fontSizeSmall:B,fontSizeMedium:u,heightMini:h,heightTiny:R,heightSmall:T,heightMedium:O,closeColorHover:_,closeColorPressed:k,buttonColor2Hover:L,buttonColor2Pressed:g,fontWeightStrong:N}=e;return Object.assign(Object.assign({},Ye),{closeBorderRadius:C,heightTiny:h,heightSmall:R,heightMedium:T,heightLarge:O,borderRadius:C,opacityDisabled:c,fontSizeTiny:S,fontSizeSmall:D,fontSizeMedium:B,fontSizeLarge:u,fontWeightStrong:N,textColorCheckable:n,textColorHoverCheckable:n,textColorPressedCheckable:n,textColorChecked:d,colorCheckable:"#0000",colorHoverCheckable:L,colorPressedCheckable:g,colorChecked:t,colorCheckedHover:o,colorCheckedPressed:r,border:`1px solid ${f}`,textColor:n,color:m,colorBordered:"rgb(250, 250, 252)",closeIconColor:b,closeIconColorHover:p,closeIconColorPressed:z,closeColorHover:_,closeColorPressed:k,borderPrimary:`1px solid ${P(t,{alpha:.3})}`,textColorPrimary:t,colorPrimary:P(t,{alpha:.12}),colorBorderedPrimary:P(t,{alpha:.1}),closeIconColorPrimary:t,closeIconColorHoverPrimary:t,closeIconColorPressedPrimary:t,closeColorHoverPrimary:P(t,{alpha:.12}),closeColorPressedPrimary:P(t,{alpha:.18}),borderInfo:`1px solid ${P(i,{alpha:.3})}`,textColorInfo:i,colorInfo:P(i,{alpha:.12}),colorBorderedInfo:P(i,{alpha:.1}),closeIconColorInfo:i,closeIconColorHoverInfo:i,closeIconColorPressedInfo:i,closeColorHoverInfo:P(i,{alpha:.12}),closeColorPressedInfo:P(i,{alpha:.18}),borderSuccess:`1px solid ${P(l,{alpha:.3})}`,textColorSuccess:l,colorSuccess:P(l,{alpha:.12}),colorBorderedSuccess:P(l,{alpha:.1}),closeIconColorSuccess:l,closeIconColorHoverSuccess:l,closeIconColorPressedSuccess:l,closeColorHoverSuccess:P(l,{alpha:.12}),closeColorPressedSuccess:P(l,{alpha:.18}),borderWarning:`1px solid ${P(s,{alpha:.35})}`,textColorWarning:s,colorWarning:P(s,{alpha:.15}),colorBorderedWarning:P(s,{alpha:.12}),closeIconColorWarning:s,closeIconColorHoverWarning:s,closeIconColorPressedWarning:s,closeColorHoverWarning:P(s,{alpha:.12}),closeColorPressedWarning:P(s,{alpha:.18}),borderError:`1px solid ${P(a,{alpha:.23})}`,textColorError:a,colorError:P(a,{alpha:.1}),colorBorderedError:P(a,{alpha:.08}),closeIconColorError:a,closeIconColorHoverError:a,closeIconColorPressedError:a,closeColorHoverError:P(a,{alpha:.12}),closeColorPressedError:P(a,{alpha:.18})})},Go={name:"Tag",common:qe,self:jo},Wo=Go,Uo={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Vo=j("tag",`
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[E("strong",`
 font-weight: var(--n-font-weight-strong);
 `),H("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),H("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),H("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),H("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),E("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[H("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),H("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),E("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),E("icon, avatar",[E("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),E("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),E("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[J("disabled",[W("&:hover","background-color: var(--n-color-hover-checkable);",[J("checked","color: var(--n-text-color-hover-checkable);")]),W("&:active","background-color: var(--n-color-pressed-checkable);",[J("checked","color: var(--n-text-color-pressed-checkable);")])]),E("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[J("disabled",[W("&:hover","background-color: var(--n-color-checked-hover);"),W("&:active","background-color: var(--n-color-checked-pressed);")])])])]),qo=Object.assign(Object.assign(Object.assign({},ae.props),Uo),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),Yo=se("n-tag"),hn=q({name:"Tag",props:qo,setup(e){const n=Y(null),{mergedBorderedRef:o,mergedClsPrefixRef:r,inlineThemeDisabled:t,mergedRtlRef:i}=Ie(e),l=ae("Tag","-tag",Vo,Wo,e,r);Z(Yo,{roundRef:G(e,"round")});function s(b){if(!e.disabled&&e.checkable){const{checked:p,onCheckedChange:z,onUpdateChecked:C,"onUpdate:checked":S}=e;C&&C(!p),S&&S(!p),z&&z(!p)}}function a(b){if(e.triggerClickOnClose||b.stopPropagation(),!e.disabled){const{onClose:p}=e;p&&re(p,b)}}const d={setTextContent(b){const{value:p}=n;p&&(p.textContent=b)}},f=Ze("Tag",i,r),c=$(()=>{const{type:b,size:p,color:{color:z,textColor:C}={}}=e,{common:{cubicBezierEaseInOut:S},self:{padding:D,closeMargin:B,closeMarginRtl:u,borderRadius:h,opacityDisabled:R,textColorCheckable:T,textColorHoverCheckable:O,textColorPressedCheckable:_,textColorChecked:k,colorCheckable:L,colorHoverCheckable:g,colorPressedCheckable:N,colorChecked:x,colorCheckedHover:w,colorCheckedPressed:M,closeBorderRadius:y,fontWeightStrong:K,[A("colorBordered",b)]:F,[A("closeSize",p)]:U,[A("closeIconSize",p)]:Q,[A("fontSize",p)]:V,[A("height",p)]:ee,[A("color",b)]:ce,[A("textColor",b)]:ue,[A("border",b)]:fe,[A("closeIconColor",b)]:I,[A("closeIconColorHover",b)]:Le,[A("closeIconColorPressed",b)]:Me,[A("closeColorHover",b)]:He,[A("closeColorPressed",b)]:De}}=l.value;return{"--n-font-weight-strong":K,"--n-avatar-size-override":`calc(${ee} - 8px)`,"--n-bezier":S,"--n-border-radius":h,"--n-border":fe,"--n-close-icon-size":Q,"--n-close-color-pressed":De,"--n-close-color-hover":He,"--n-close-border-radius":y,"--n-close-icon-color":I,"--n-close-icon-color-hover":Le,"--n-close-icon-color-pressed":Me,"--n-close-icon-color-disabled":I,"--n-close-margin":B,"--n-close-margin-rtl":u,"--n-close-size":U,"--n-color":z||(o.value?F:ce),"--n-color-checkable":L,"--n-color-checked":x,"--n-color-checked-hover":w,"--n-color-checked-pressed":M,"--n-color-hover-checkable":g,"--n-color-pressed-checkable":N,"--n-font-size":V,"--n-height":ee,"--n-opacity-disabled":R,"--n-padding":D,"--n-text-color":C||ue,"--n-text-color-checkable":T,"--n-text-color-checked":k,"--n-text-color-hover-checkable":O,"--n-text-color-pressed-checkable":_}}),m=t?Re("tag",$(()=>{let b="";const{type:p,size:z,color:{color:C,textColor:S}={}}=e;return b+=p[0],b+=z[0],C&&(b+=`a${xe(C)}`),S&&(b+=`b${xe(S)}`),o.value&&(b+="c"),b}),c,e):void 0;return Object.assign(Object.assign({},d),{rtlEnabled:f,mergedClsPrefix:r,contentRef:n,mergedBordered:o,handleClick:s,handleCloseClick:a,cssVars:t?void 0:c,themeClass:m==null?void 0:m.themeClass,onRender:m==null?void 0:m.onRender})},render(){var e,n;const{mergedClsPrefix:o,rtlEnabled:r,closable:t,color:{borderColor:i}={},round:l,onRender:s,$slots:a}=this;s==null||s();const d=Ce(a.avatar,c=>c&&v("div",{class:`${o}-tag__avatar`},c)),f=Ce(a.icon,c=>c&&v("div",{class:`${o}-tag__icon`},c));return v("div",{class:[`${o}-tag`,this.themeClass,{[`${o}-tag--rtl`]:r,[`${o}-tag--strong`]:this.strong,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:l,[`${o}-tag--avatar`]:d,[`${o}-tag--icon`]:f,[`${o}-tag--closable`]:t}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},f||d,v("span",{class:`${o}-tag__content`,ref:"contentRef"},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e)),!this.checkable&&t?v(Xe,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:l,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?v("div",{class:`${o}-tag__border`,style:{borderColor:i}}):null)}}),$e=q({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return v("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),we=se("n-dropdown-menu"),de=se("n-dropdown"),Ne=se("n-dropdown-option");function ge(e,n){return e.type==="submenu"||e.type===void 0&&e[n]!==void 0}function Zo(e){return e.type==="group"}function Te(e){return e.type==="divider"}function Xo(e){return e.type==="render"}const Ee=q({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const n=X(de),{hoverKeyRef:o,keyboardKeyRef:r,lastToggledSubmenuKeyRef:t,pendingKeyPathRef:i,activeKeyPathRef:l,animatedRef:s,mergedShowRef:a,renderLabelRef:d,renderIconRef:f,labelFieldRef:c,childrenFieldRef:m,renderOptionRef:b,nodePropsRef:p,menuPropsRef:z}=n,C=X(Ne,null),S=X(we),D=X(Ke),B=$(()=>e.tmNode.rawNode),u=$(()=>{const{value:y}=m;return ge(e.tmNode.rawNode,y)}),h=$(()=>{const{disabled:y}=e.tmNode;return y}),R=$(()=>{if(!u.value)return!1;const{key:y,disabled:K}=e.tmNode;if(K)return!1;const{value:F}=o,{value:U}=r,{value:Q}=t,{value:V}=i;return F!==null?V.includes(y):U!==null?V.includes(y)&&V[V.length-1]!==y:Q!==null?V.includes(y):!1}),T=$(()=>r.value===null&&!s.value),O=bo(R,300,T),_=$(()=>!!(C!=null&&C.enteringSubmenuRef.value)),k=Y(!1);Z(Ne,{enteringSubmenuRef:k});function L(){k.value=!0}function g(){k.value=!1}function N(){const{parentKey:y,tmNode:K}=e;K.disabled||a.value&&(t.value=y,r.value=null,o.value=K.key)}function x(){const{tmNode:y}=e;y.disabled||a.value&&o.value!==y.key&&N()}function w(y){if(e.tmNode.disabled||!a.value)return;const{relatedTarget:K}=y;K&&!ke({target:K},"dropdownOption")&&!ke({target:K},"scrollbarRail")&&(o.value=null)}function M(){const{value:y}=u,{tmNode:K}=e;a.value&&!y&&!K.disabled&&(n.doSelect(K.key,K.rawNode),n.doUpdateShow(!1))}return{labelField:c,renderLabel:d,renderIcon:f,siblingHasIcon:S.showIconRef,siblingHasSubmenu:S.hasSubmenuRef,menuProps:z,popoverBody:D,animated:s,mergedShowSubmenu:$(()=>O.value&&!_.value),rawNode:B,hasSubmenu:u,pending:te(()=>{const{value:y}=i,{key:K}=e.tmNode;return y.includes(K)}),childActive:te(()=>{const{value:y}=l,{key:K}=e.tmNode,F=y.findIndex(U=>K===U);return F===-1?!1:F<y.length-1}),active:te(()=>{const{value:y}=l,{key:K}=e.tmNode,F=y.findIndex(U=>K===U);return F===-1?!1:F===y.length-1}),mergedDisabled:h,renderOption:b,nodeProps:p,handleClick:M,handleMouseMove:x,handleMouseEnter:N,handleMouseLeave:w,handleSubmenuBeforeEnter:L,handleSubmenuAfterEnter:g}},render(){var e,n;const{animated:o,rawNode:r,mergedShowSubmenu:t,clsPrefix:i,siblingHasIcon:l,siblingHasSubmenu:s,renderLabel:a,renderIcon:d,renderOption:f,nodeProps:c,props:m,scrollable:b}=this;let p=null;if(t){const D=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,r,r.children);p=v(Be,Object.assign({},D,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const z={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},C=c==null?void 0:c(r),S=v("div",Object.assign({class:[`${i}-dropdown-option`,C==null?void 0:C.class],"data-dropdown-option":!0},C),v("div",ze(z,m),[v("div",{class:[`${i}-dropdown-option-body__prefix`,l&&`${i}-dropdown-option-body__prefix--show-icon`]},[d?d(r):ie(r.icon)]),v("div",{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},a?a(r):ie((n=r[this.labelField])!==null&&n!==void 0?n:r.title)),v("div",{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,s&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?v(ho,null,{default:()=>v(yo,null)}):null)]),this.hasSubmenu?v(ao,null,{default:()=>[v(so,null,{default:()=>v("div",{class:`${i}-dropdown-offset-container`},v(co,{show:this.mergedShowSubmenu,placement:this.placement,to:b&&this.popoverBody||void 0,teleportDisabled:!b},{default:()=>v("div",{class:`${i}-dropdown-menu-wrapper`},o?v(Je,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>p}):p)}))})]}):null);return f?f({node:S,option:r}):S}}),Jo=q({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:n}=X(we),{renderLabelRef:o,labelFieldRef:r,nodePropsRef:t,renderOptionRef:i}=X(de);return{labelField:r,showIcon:e,hasSubmenu:n,renderLabel:o,nodeProps:t,renderOption:i}},render(){var e;const{clsPrefix:n,hasSubmenu:o,showIcon:r,nodeProps:t,renderLabel:i,renderOption:l}=this,{rawNode:s}=this.tmNode,a=v("div",Object.assign({class:`${n}-dropdown-option`},t==null?void 0:t(s)),v("div",{class:`${n}-dropdown-option-body ${n}-dropdown-option-body--group`},v("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__prefix`,r&&`${n}-dropdown-option-body__prefix--show-icon`]},ie(s.icon)),v("div",{class:`${n}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(s):ie((e=s.title)!==null&&e!==void 0?e:s[this.labelField])),v("div",{class:[`${n}-dropdown-option-body__suffix`,o&&`${n}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return l?l({node:a,option:s}):a}}),Qo=q({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:n,clsPrefix:o}=this,{children:r}=e;return v(eo,null,v(Jo,{clsPrefix:o,tmNode:e,key:e.key}),r==null?void 0:r.map(t=>{const{rawNode:i}=t;return i.show===!1?null:Te(i)?v($e,{clsPrefix:o,key:t.key}):t.isGroup?(Qe("dropdown","`group` node is not allowed to be put in `group` node."),null):v(Ee,{clsPrefix:o,tmNode:t,parentKey:n,key:t.key})}))}}),en=q({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:n}}=this.tmNode;return v("div",n,[e==null?void 0:e()])}}),Be=q({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:n,childrenFieldRef:o}=X(de);Z(we,{showIconRef:$(()=>{const t=n.value;return e.tmNodes.some(i=>{var l;if(i.isGroup)return(l=i.children)===null||l===void 0?void 0:l.some(({rawNode:a})=>t?t(a):a.icon);const{rawNode:s}=i;return t?t(s):s.icon})}),hasSubmenuRef:$(()=>{const{value:t}=o;return e.tmNodes.some(i=>{var l;if(i.isGroup)return(l=i.children)===null||l===void 0?void 0:l.some(({rawNode:a})=>ge(a,t));const{rawNode:s}=i;return ge(s,t)})})});const r=Y(null);return Z(oo,null),Z(no,null),Z(Ke,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:n,scrollable:o}=this,r=this.tmNodes.map(t=>{const{rawNode:i}=t;return i.show===!1?null:Xo(i)?v(en,{tmNode:t,key:t.key}):Te(i)?v($e,{clsPrefix:n,key:t.key}):Zo(i)?v(Qo,{clsPrefix:n,tmNode:t,parentKey:e,key:t.key}):v(Ee,{clsPrefix:n,tmNode:t,parentKey:e,key:t.key,props:i.props,scrollable:o})});return v("div",{class:[`${n}-dropdown-menu`,o&&`${n}-dropdown-menu--scrollable`],ref:"bodyRef"},o?v(ro,{contentClass:`${n}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?uo({clsPrefix:n,arrowStyle:this.arrowStyle}):null)}}),on=j("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[to(),j("dropdown-option",`
 position: relative;
 `,[W("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[W("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),j("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[W("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),J("disabled",[E("pending",`
 color: var(--n-option-text-color-hover);
 `,[H("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),W("&::before","background-color: var(--n-option-color-hover);")]),E("active",`
 color: var(--n-option-text-color-active);
 `,[H("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),W("&::before","background-color: var(--n-option-color-active);")]),E("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[H("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),E("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),E("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[H("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[E("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),H("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[E("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),j("icon",`
 font-size: var(--n-option-icon-size);
 `)]),H("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),H("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[E("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),j("icon",`
 font-size: var(--n-option-icon-size);
 `)]),j("dropdown-menu","pointer-events: all;")]),j("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),j("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),j("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),W(">",[j("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),J("scrollable",`
 padding: var(--n-padding);
 `),E("scrollable",[H("content",`
 padding: var(--n-padding);
 `)])]),nn={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},rn=Object.keys(_e),tn=Object.assign(Object.assign(Object.assign({},_e),nn),ae.props),pn=q({name:"Dropdown",inheritAttrs:!1,props:tn,setup(e){const n=Y(!1),o=po(G(e,"show"),n),r=$(()=>{const{keyField:g,childrenField:N}=e;return Fo(e.options,{getKey(x){return x[g]},getDisabled(x){return x.disabled===!0},getIgnored(x){return x.type==="divider"||x.type==="render"},getChildren(x){return x[N]}})}),t=$(()=>r.value.treeNodes),i=Y(null),l=Y(null),s=Y(null),a=$(()=>{var g,N,x;return(x=(N=(g=i.value)!==null&&g!==void 0?g:l.value)!==null&&N!==void 0?N:s.value)!==null&&x!==void 0?x:null}),d=$(()=>r.value.getPath(a.value).keyPath),f=$(()=>r.value.getPath(e.value).keyPath),c=te(()=>e.keyboard&&o.value);go({keydown:{ArrowUp:{prevent:!0,handler:h},ArrowRight:{prevent:!0,handler:u},ArrowDown:{prevent:!0,handler:R},ArrowLeft:{prevent:!0,handler:B},Enter:{prevent:!0,handler:T},Escape:D}},c);const{mergedClsPrefixRef:m,inlineThemeDisabled:b}=Ie(e),p=ae("Dropdown","-dropdown",on,io,e,m);Z(de,{labelFieldRef:G(e,"labelField"),childrenFieldRef:G(e,"childrenField"),renderLabelRef:G(e,"renderLabel"),renderIconRef:G(e,"renderIcon"),hoverKeyRef:i,keyboardKeyRef:l,lastToggledSubmenuKeyRef:s,pendingKeyPathRef:d,activeKeyPathRef:f,animatedRef:G(e,"animated"),mergedShowRef:o,nodePropsRef:G(e,"nodeProps"),renderOptionRef:G(e,"renderOption"),menuPropsRef:G(e,"menuProps"),doSelect:z,doUpdateShow:C}),ye(o,g=>{!e.animated&&!g&&S()});function z(g,N){const{onSelect:x}=e;x&&re(x,g,N)}function C(g){const{"onUpdate:show":N,onUpdateShow:x}=e;N&&re(N,g),x&&re(x,g),n.value=g}function S(){i.value=null,l.value=null,s.value=null}function D(){C(!1)}function B(){_("left")}function u(){_("right")}function h(){_("up")}function R(){_("down")}function T(){const g=O();g!=null&&g.isLeaf&&o.value&&(z(g.key,g.rawNode),C(!1))}function O(){var g;const{value:N}=r,{value:x}=a;return!N||x===null?null:(g=N.getNode(x))!==null&&g!==void 0?g:null}function _(g){const{value:N}=a,{value:{getFirstAvailableNode:x}}=r;let w=null;if(N===null){const M=x();M!==null&&(w=M.key)}else{const M=O();if(M){let y;switch(g){case"down":y=M.getNext();break;case"up":y=M.getPrev();break;case"right":y=M.getChild();break;case"left":y=M.getParent();break}y&&(w=y.key)}}w!==null&&(i.value=null,l.value=w)}const k=$(()=>{const{size:g,inverted:N}=e,{common:{cubicBezierEaseInOut:x},self:w}=p.value,{padding:M,dividerColor:y,borderRadius:K,optionOpacityDisabled:F,[A("optionIconSuffixWidth",g)]:U,[A("optionSuffixWidth",g)]:Q,[A("optionIconPrefixWidth",g)]:V,[A("optionPrefixWidth",g)]:ee,[A("fontSize",g)]:ce,[A("optionHeight",g)]:ue,[A("optionIconSize",g)]:fe}=w,I={"--n-bezier":x,"--n-font-size":ce,"--n-padding":M,"--n-border-radius":K,"--n-option-height":ue,"--n-option-prefix-width":ee,"--n-option-icon-prefix-width":V,"--n-option-suffix-width":Q,"--n-option-icon-suffix-width":U,"--n-option-icon-size":fe,"--n-divider-color":y,"--n-option-opacity-disabled":F};return N?(I["--n-color"]=w.colorInverted,I["--n-option-color-hover"]=w.optionColorHoverInverted,I["--n-option-color-active"]=w.optionColorActiveInverted,I["--n-option-text-color"]=w.optionTextColorInverted,I["--n-option-text-color-hover"]=w.optionTextColorHoverInverted,I["--n-option-text-color-active"]=w.optionTextColorActiveInverted,I["--n-option-text-color-child-active"]=w.optionTextColorChildActiveInverted,I["--n-prefix-color"]=w.prefixColorInverted,I["--n-suffix-color"]=w.suffixColorInverted,I["--n-group-header-text-color"]=w.groupHeaderTextColorInverted):(I["--n-color"]=w.color,I["--n-option-color-hover"]=w.optionColorHover,I["--n-option-color-active"]=w.optionColorActive,I["--n-option-text-color"]=w.optionTextColor,I["--n-option-text-color-hover"]=w.optionTextColorHover,I["--n-option-text-color-active"]=w.optionTextColorActive,I["--n-option-text-color-child-active"]=w.optionTextColorChildActive,I["--n-prefix-color"]=w.prefixColor,I["--n-suffix-color"]=w.suffixColor,I["--n-group-header-text-color"]=w.groupHeaderTextColor),I}),L=b?Re("dropdown",$(()=>`${e.size[0]}${e.inverted?"i":""}`),k,e):void 0;return{mergedClsPrefix:m,mergedTheme:p,tmNodes:t,mergedShow:o,handleAfterLeave:()=>{e.animated&&S()},doUpdateShow:C,cssVars:b?void 0:k,themeClass:L==null?void 0:L.themeClass,onRender:L==null?void 0:L.onRender}},render(){const e=(r,t,i,l,s)=>{var a;const{mergedClsPrefix:d,menuProps:f}=this;(a=this.onRender)===null||a===void 0||a.call(this);const c=(f==null?void 0:f(void 0,this.tmNodes.map(b=>b.rawNode)))||{},m={ref:vo(t),class:[r,`${d}-dropdown`,this.themeClass],clsPrefix:d,tmNodes:this.tmNodes,style:[i,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:l,onMouseleave:s};return v(Be,ze(this.$attrs,m,c))},{mergedTheme:n}=this,o={show:this.mergedShow,theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return v(fo,Object.assign({},lo(this.$props,rn),o),{trigger:()=>{var r,t;return(t=(r=this.$slots).default)===null||t===void 0?void 0:t.call(r)}})}});export{yo as C,pn as _,hn as a,fn as b,Fo as c,un as d,vo as e,cn as f,ke as h};
