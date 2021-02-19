/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const W=typeof window!="undefined"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,k=(n,e,t=null)=>{for(;e!==t;){const s=e.nextSibling;n.removeChild(e),e=s}};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const _=`{{lit-${String(Math.random()).slice(2)}}}`,D=`<!--${_}-->`,J=new RegExp(`${_}|${D}`),x="$lit$";class K{constructor(e,t){this.parts=[],this.element=t;const s=[],i=[],r=document.createTreeWalker(t.content,133,null,!1);let a=0,o=-1,d=0;const{strings:c,values:{length:h}}=e;for(;d<h;){const l=r.nextNode();if(l===null){r.currentNode=i.pop();continue}if(o++,l.nodeType===1){if(l.hasAttributes()){const u=l.attributes,{length:N}=u;let S=0;for(let f=0;f<N;f++)G(u[f].name,x)&&S++;for(;S-- >0;){const f=c[d],w=R.exec(f)[2],P=w.toLowerCase()+x,g=l.getAttribute(P);l.removeAttribute(P);const m=g.split(J);this.parts.push({type:"attribute",index:o,name:w,strings:m}),d+=m.length-1}}l.tagName==="TEMPLATE"&&(i.push(l),r.currentNode=l.content)}else if(l.nodeType===3){const u=l.data;if(u.indexOf(_)>=0){const N=l.parentNode,S=u.split(J),f=S.length-1;for(let w=0;w<f;w++){let P,g=S[w];if(g==="")P=y();else{const m=R.exec(g);m!==null&&G(m[2],x)&&(g=g.slice(0,m.index)+m[1]+m[2].slice(0,-x.length)+m[3]),P=document.createTextNode(g)}N.insertBefore(P,l),this.parts.push({type:"node",index:++o})}S[f]===""?(N.insertBefore(y(),l),s.push(l)):l.data=S[f],d+=f}}else if(l.nodeType===8)if(l.data===_){const u=l.parentNode;(l.previousSibling===null||o===a)&&(o++,u.insertBefore(y(),l)),a=o,this.parts.push({type:"node",index:o}),l.nextSibling===null?l.data="":(s.push(l),o--),d++}else{let u=-1;for(;(u=l.data.indexOf(_,u+1))!==-1;)this.parts.push({type:"node",index:-1}),d++}}for(const l of s)l.parentNode.removeChild(l)}}const G=(n,e)=>{const t=n.length-e.length;return t>=0&&n.slice(t)===e},Y=n=>n.index!==-1,y=()=>document.createComment(""),R=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const V=133;function Q(n,e){const{element:{content:t},parts:s}=n,i=document.createTreeWalker(t,V,null,!1);let r=T(s),a=s[r],o=-1,d=0;const c=[];let h=null;for(;i.nextNode();){o++;const l=i.currentNode;for(l.previousSibling===h&&(h=null),e.has(l)&&(c.push(l),h===null&&(h=l)),h!==null&&d++;a!==void 0&&a.index===o;)a.index=h!==null?-1:a.index-d,r=T(s,r),a=s[r]}c.forEach(l=>l.parentNode.removeChild(l))}const pe=n=>{let e=n.nodeType===11?0:1;const t=document.createTreeWalker(n,V,null,!1);for(;t.nextNode();)e++;return e},T=(n,e=-1)=>{for(let t=e+1;t<n.length;t++){const s=n[t];if(Y(s))return t}return-1};function ue(n,e,t=null){const{element:{content:s},parts:i}=n;if(t==null){s.appendChild(e);return}const r=document.createTreeWalker(s,V,null,!1);let a=T(i),o=0,d=-1;for(;r.nextNode();)for(d++,r.currentNode===t&&(o=pe(e),t.parentNode.insertBefore(e,t));a!==-1&&i[a].index===d;){if(o>0){for(;a!==-1;)i[a].index+=o,a=T(i,a);return}a=T(i,a)}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const fe=new WeakMap,v=n=>typeof n=="function"&&fe.has(n);/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const p={},X={};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class U{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this.__parts)s!==void 0&&s.setValue(e[t]),t++;for(const s of this.__parts)s!==void 0&&s.commit()}_clone(){const e=W?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],s=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let r=0,a=0,o,d=i.nextNode();for(;r<s.length;){if(o=s[r],!Y(o)){this.__parts.push(void 0),r++;continue}for(;a<o.index;)a++,d.nodeName==="TEMPLATE"&&(t.push(d),i.currentNode=d.content),(d=i.nextNode())===null&&(i.currentNode=t.pop(),d=i.nextNode());if(o.type==="node"){const c=this.processor.handleTextExpression(this.options);c.insertAfterNode(d.previousSibling),this.__parts.push(c)}else this.__parts.push(...this.processor.handleAttributeExpressions(d,o.name,o.strings,this.options));r++}return W&&(document.adoptNode(e),customElements.upgrade(e)),e}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Z=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:n=>n}),me=` ${_} `;class ee{constructor(e,t,s,i){this.strings=e,this.values=t,this.type=s,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",s=!1;for(let i=0;i<e;i++){const r=this.strings[i],a=r.lastIndexOf("<!--");s=(a>-1||s)&&r.indexOf("-->",a+1)===-1;const o=R.exec(r);o===null?t+=r+(s?me:D):t+=r.substr(0,o.index)+o[1]+o[2]+x+o[3]+_}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return Z!==void 0&&(t=Z.createHTML(t)),e.innerHTML=t,e}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const I=n=>n===null||!(typeof n=="object"||typeof n=="function"),O=n=>Array.isArray(n)||!!(n&&n[Symbol.iterator]);class te{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let i=0;i<s.length-1;i++)this.parts[i]=this._createPart()}_createPart(){return new se(this)}_getValue(){const e=this.strings,t=e.length-1,s=this.parts;if(t===1&&e[0]===""&&e[1]===""){const r=s[0].value;if(typeof r=="symbol")return String(r);if(typeof r=="string"||!O(r))return r}let i="";for(let r=0;r<t;r++){i+=e[r];const a=s[r];if(a!==void 0){const o=a.value;if(I(o)||!O(o))i+=typeof o=="string"?o:String(o);else for(const d of o)i+=typeof d=="string"?d:String(d)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class se{constructor(e){this.value=void 0,this.committer=e}setValue(e){e!==p&&(!I(e)||e!==this.value)&&(this.value=e,v(e)||(this.committer.dirty=!0))}commit(){for(;v(this.value);){const e=this.value;this.value=p,e(this)}this.value!==p&&this.committer.commit()}}class A{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(y()),this.endNode=e.appendChild(y())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=y()),e.__insert(this.endNode=y())}insertAfterPart(e){e.__insert(this.startNode=y()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(this.startNode.parentNode===null)return;for(;v(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=p,t(this)}const e=this.__pendingValue;e!==p&&(I(e)?e!==this.value&&this.__commitText(e):e instanceof ee?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):O(e)?this.__commitIterable(e):e===X?(this.value=X,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling;e=e??"";const s=typeof e=="string"?e:String(e);t===this.endNode.previousSibling&&t.nodeType===3?t.data=s:this.__commitNode(document.createTextNode(s)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof U&&this.value.template===t)this.value.update(e.values);else{const s=new U(t,e.processor,this.options),i=s._clone();s.update(e.values),this.__commitNode(i),this.value=s}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s=0,i;for(const r of e)i=t[s],i===void 0&&(i=new A(this.options),t.push(i),s===0?i.appendIntoPart(this):i.insertAfterPart(t[s-1])),i.setValue(r),i.commit(),s++;s<t.length&&(t.length=s,this.clear(i&&i.endNode))}clear(e=this.startNode){k(this.startNode.parentNode,e.nextSibling,this.endNode)}}class _e{constructor(e,t,s){if(this.value=void 0,this.__pendingValue=void 0,s.length!==2||s[0]!==""||s[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this.__pendingValue=e}commit(){for(;v(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=p,t(this)}if(this.__pendingValue===p)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=p}}class ye extends te{constructor(e,t,s){super(e,t,s);this.single=s.length===2&&s[0]===""&&s[1]===""}_createPart(){return new Se(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Se extends se{}let ne=!1;(()=>{try{const n={get capture(){return ne=!0,!1}};window.addEventListener("test",n,n),window.removeEventListener("test",n,n)}catch(n){}})();class ge{constructor(e,t,s){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this.__boundHandleEvent=i=>this.handleEvent(i)}setValue(e){this.__pendingValue=e}commit(){for(;v(this.__pendingValue);){const r=this.__pendingValue;this.__pendingValue=p,r(this)}if(this.__pendingValue===p)return;const e=this.__pendingValue,t=this.value,s=e==null||t!=null&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=e!=null&&(t==null||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=we(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=p}handleEvent(e){typeof this.value=="function"?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const we=n=>n&&(ne?{capture:n.capture,passive:n.passive,once:n.once}:n.capture);/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function Pe(n){let e=C.get(n.type);e===void 0&&(e={stringsArray:new WeakMap,keyString:new Map},C.set(n.type,e));let t=e.stringsArray.get(n.strings);if(t!==void 0)return t;const s=n.strings.join(_);return t=e.keyString.get(s),t===void 0&&(t=new K(n,n.getTemplateElement()),e.keyString.set(s,t)),e.stringsArray.set(n.strings,t),t}const C=new Map;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const b=new WeakMap,be=(n,e,t)=>{let s=b.get(e);s===void 0&&(k(e,e.firstChild),b.set(e,s=new A(Object.assign({templateFactory:Pe},t))),s.appendInto(e)),s.setValue(n),s.commit()};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class xe{handleAttributeExpressions(e,t,s,i){const r=t[0];return r==="."?new ye(e,t.slice(1),s).parts:r==="@"?[new ge(e,t.slice(1),i.eventContext)]:r==="?"?[new _e(e,t.slice(1),s)]:new te(e,t,s).parts}handleTextExpression(e){return new A(e)}}const Te=new xe;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */typeof window!="undefined"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const ve=(n,...e)=>new ee(n,e,"html",Te);/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const ie=(n,e)=>`${n}--${e}`;let E=!0;typeof window.ShadyCSS=="undefined"?E=!1:typeof window.ShadyCSS.prepareTemplateDom=="undefined"&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),E=!1);const Ce=n=>e=>{const t=ie(e.type,n);let s=C.get(t);s===void 0&&(s={stringsArray:new WeakMap,keyString:new Map},C.set(t,s));let i=s.stringsArray.get(e.strings);if(i!==void 0)return i;const r=e.strings.join(_);if(i=s.keyString.get(r),i===void 0){const a=e.getTemplateElement();E&&window.ShadyCSS.prepareTemplateDom(a,n),i=new K(e,a),s.keyString.set(r,i)}return s.stringsArray.set(e.strings,i),i},Ne=["html","svg"],Ae=n=>{Ne.forEach(e=>{const t=C.get(ie(e,n));t!==void 0&&t.keyString.forEach(s=>{const{element:{content:i}}=s,r=new Set;Array.from(i.querySelectorAll("style")).forEach(a=>{r.add(a)}),Q(s,r)})})},re=new Set,Ee=(n,e,t)=>{re.add(n);const s=t?t.element:document.createElement("template"),i=e.querySelectorAll("style"),{length:r}=i;if(r===0){window.ShadyCSS.prepareTemplateStyles(s,n);return}const a=document.createElement("style");for(let c=0;c<r;c++){const h=i[c];h.parentNode.removeChild(h),a.textContent+=h.textContent}Ae(n);const o=s.content;t?ue(t,a,o.firstChild):o.insertBefore(a,o.firstChild),window.ShadyCSS.prepareTemplateStyles(s,n);const d=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&d!==null)e.insertBefore(d.cloneNode(!0),e.firstChild);else if(t){o.insertBefore(a,o.firstChild);const c=new Set;c.add(a),Q(t,c)}},ke=(n,e,t)=>{if(!t||typeof t!="object"||!t.scopeName)throw new Error("The `scopeName` option is required.");const s=t.scopeName,i=b.has(e),r=E&&e.nodeType===11&&!!e.host,a=r&&!re.has(s),o=a?document.createDocumentFragment():e;if(be(n,o,Object.assign({templateFactory:Ce(s)},t)),a){const d=b.get(o);b.delete(o);const c=d.value instanceof U?d.value.template:void 0;Ee(s,o,c),k(e,e.firstChild),e.appendChild(o),b.set(e,d)}!i&&r&&window.ShadyCSS.styleElement(e.host)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */var oe;window.JSCompiler_renameProperty=(n,e)=>n;const M={toAttribute(n,e){switch(e){case Boolean:return n?"":null;case Object:case Array:return n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){switch(e){case Boolean:return n!==null;case Number:return n===null?null:Number(n);case Object:case Array:return JSON.parse(n)}return n}},ae=(n,e)=>e!==n&&(e===e||n===n),L={attribute:!0,type:String,converter:M,reflect:!1,hasChanged:ae},F=1,q=1<<2,j=1<<3,z=1<<4,B="finalized";class le extends HTMLElement{constructor(){super();this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,s)=>{const i=this._attributeNameForProperty(s,t);i!==void 0&&(this._attributeToPropertyMap.set(i,s),e.push(i))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;e!==void 0&&e.forEach((t,s)=>this._classProperties.set(s,t))}}static createProperty(e,t=L){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const s=typeof e=="symbol"?Symbol():`__${e}`,i=this.getPropertyDescriptor(e,s,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(i){const r=this[e];this[t]=i,this.requestUpdateInternal(e,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||L}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(B)||e.finalize(),this[B]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,s=[...Object.getOwnPropertyNames(t),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(t):[]];for(const i of s)this.createProperty(i,t[i])}}static _attributeNameForProperty(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}static _valueHasChanged(e,t,s=ae){return s(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,i=t.converter||M,r=typeof i=="function"?i:i.fromAttribute;return r?r(e,s):e}static _propertyValueToAttribute(e,t){if(t.reflect===void 0)return;const s=t.type,i=t.converter;return(i&&i.toAttribute||M.toAttribute)(e,s)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const s=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,s)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t,s=L){const i=this.constructor,r=i._attributeNameForProperty(e,s);if(r!==void 0){const a=i._propertyValueToAttribute(t,s);if(a===void 0)return;this._updateState=this._updateState|j,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._updateState=this._updateState&~j}}_attributeToProperty(e,t){if(this._updateState&j)return;const s=this.constructor,i=s._attributeToPropertyMap.get(e);if(i!==void 0){const r=s.getPropertyOptions(i);this._updateState=this._updateState|z,this[i]=s._propertyValueFromAttribute(t,r),this._updateState=this._updateState&~z}}requestUpdateInternal(e,t,s){let i=!0;if(e!==void 0){const r=this.constructor;s=s||r.getPropertyOptions(e),r._valueHasChanged(this[e],t,s.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),s.reflect===!0&&!(this._updateState&z)&&(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,s))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=this._updateState|q;try{await this._updatePromise}catch(t){}const e=this.performUpdate();return e!=null&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return this._updateState&q}get hasUpdated(){return this._updateState&F}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(s){throw e=!1,this._markUpdated(),s}e&&(this._updateState&F||(this._updateState=this._updateState|F,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~q}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,s)=>this._propertyToAttribute(s,this[s],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}oe=B,le[oe]=!0;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Re=(n,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(t){t.createProperty(e.key,n)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,n)}},Ve=(n,e,t)=>{e.constructor.createProperty(t,n)};function Ue(n){return(e,t)=>t!==void 0?Ve(n,e,t):Re(n,e)}/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const H=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,de=Symbol();class Ie{constructor(e,t){if(t!==de)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return this._styleSheet===void 0&&(H?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ce=n=>new Ie(String(n),de);/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const he={};class $ extends le{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(r,a)=>r.reduceRight((o,d)=>Array.isArray(d)?t(d,o):(o.add(d),o),a),s=t(e,new Set),i=[];s.forEach(r=>i.unshift(r)),this._styles=i}else this._styles=e===void 0?[]:[e];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!H){const s=Array.prototype.slice.call(t.cssRules).reduce((i,r)=>i+r.cssText,"");return ce(s)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;e.length!==0&&(window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow?window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(t=>t.cssText),this.localName):H?this.renderRoot.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0)}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==he&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(s=>{const i=document.createElement("style");i.textContent=s.cssText,this.renderRoot.appendChild(i)}))}render(){return he}}$.finalized=!0,$.render=ke;export{$ as LitElement,ve as html,Ue as property,ce as unsafeCSS};
