var Hb=Object.defineProperty;var zb=(t,e,n)=>e in t?Hb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ba=(t,e,n)=>(zb(t,typeof e!="symbol"?e+"":e,n),n);const Kb=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),Sg={},Gb="/metricalo-test-task/",on=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${Gb}${r}`,r in Sg)return;Sg[r]=!0;const s=r.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":Kb,s||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),s)return new Promise((a,l)=>{o.addEventListener("load",a),o.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function sf(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const Me={},ti=[],Ft=()=>{},Qb=()=>!1,Sc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),of=t=>t.startsWith("onUpdate:"),Qe=Object.assign,af=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Yb=Object.prototype.hasOwnProperty,we=(t,e)=>Yb.call(t,e),ee=Array.isArray,ni=t=>Cc(t)==="[object Map]",hv=t=>Cc(t)==="[object Set]",ce=t=>typeof t=="function",qe=t=>typeof t=="string",ki=t=>typeof t=="symbol",Oe=t=>t!==null&&typeof t=="object",dv=t=>(Oe(t)||ce(t))&&ce(t.then)&&ce(t.catch),fv=Object.prototype.toString,Cc=t=>fv.call(t),Xb=t=>Cc(t).slice(8,-1),pv=t=>Cc(t)==="[object Object]",lf=t=>qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,fl=sf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Rc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Jb=/-(\w)/g,Dn=Rc(t=>t.replace(Jb,(e,n)=>n?n.toUpperCase():"")),Zb=/\B([A-Z])/g,xi=Rc(t=>t.replace(Zb,"-$1").toLowerCase()),Pc=Rc(t=>t.charAt(0).toUpperCase()+t.slice(1)),ju=Rc(t=>t?`on${Pc(t)}`:""),Or=(t,e)=>!Object.is(t,e),qu=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Pl=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},eA=t=>{const e=parseFloat(t);return isNaN(e)?t:e},tA=t=>{const e=qe(t)?Number(t):NaN;return isNaN(e)?t:e};let Cg;const gv=()=>Cg||(Cg=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function cf(t){if(ee(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=qe(r)?iA(r):cf(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(qe(t)||Oe(t))return t}const nA=/;(?![^(]*\))/g,rA=/:([^]+)/,sA=/\/\*[^]*?\*\//g;function iA(t){const e={};return t.replace(sA,"").split(nA).forEach(n=>{if(n){const r=n.split(rA);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function uf(t){let e="";if(qe(t))e=t;else if(ee(t))for(let n=0;n<t.length;n++){const r=uf(t[n]);r&&(e+=r+" ")}else if(Oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const oA="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",aA=sf(oA);function mv(t){return!!t||t===""}const sB=t=>qe(t)?t:t==null?"":ee(t)||Oe(t)&&(t.toString===fv||!ce(t.toString))?JSON.stringify(t,_v,2):String(t),_v=(t,e)=>e&&e.__v_isRef?_v(t,e.value):ni(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Wu(r,i)+" =>"]=s,n),{})}:hv(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Wu(n))}:ki(e)?Wu(e):Oe(e)&&!ee(e)&&!pv(e)?String(e):e,Wu=(t,e="")=>{var n;return ki(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Lt;class yv{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Lt,!e&&Lt&&(this.index=(Lt.scopes||(Lt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Lt;try{return Lt=this,e()}finally{Lt=n}}}on(){Lt=this}off(){Lt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function hf(t){return new yv(t)}function lA(t,e=Lt){e&&e.active&&e.effects.push(t)}function vv(){return Lt}function cA(t){Lt&&Lt.cleanups.push(t)}let ls;class df{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,lA(this,s)}get dirty(){if(this._dirtyLevel===1){As();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(uA(n.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),Ss()}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Sr,n=ls;try{return Sr=!0,ls=this,this._runnings++,Rg(this),this.fn()}finally{Pg(this),this._runnings--,ls=n,Sr=e}}stop(){var e;this.active&&(Rg(this),Pg(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function uA(t){return t.value}function Rg(t){t._trackId++,t._depsLength=0}function Pg(t){if(t.deps&&t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Ev(t.deps[e],t);t.deps.length=t._depsLength}}function Ev(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Sr=!0,Vh=0;const wv=[];function As(){wv.push(Sr),Sr=!1}function Ss(){const t=wv.pop();Sr=t===void 0?!0:t}function ff(){Vh++}function pf(){for(Vh--;!Vh&&Fh.length;)Fh.shift()()}function Tv(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Ev(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Fh=[];function Iv(t,e,n){ff();for(const r of t.keys())if(r._dirtyLevel<e&&t.get(r)===r._trackId){const s=r._dirtyLevel;r._dirtyLevel=e,s===0&&(r._shouldSchedule=!0,r.trigger())}bv(t),pf()}function bv(t){for(const e of t.keys())e.scheduler&&e._shouldSchedule&&(!e._runnings||e.allowRecurse)&&t.get(e)===e._trackId&&(e._shouldSchedule=!1,Fh.push(e.scheduler))}const Av=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},kl=new WeakMap,cs=Symbol(""),Uh=Symbol("");function Dt(t,e,n){if(Sr&&ls){let r=kl.get(t);r||kl.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Av(()=>r.delete(n))),Tv(ls,s)}}function Gn(t,e,n,r,s,i){const o=kl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ee(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||!ki(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ee(t)?lf(n)&&a.push(o.get("length")):(a.push(o.get(cs)),ni(t)&&a.push(o.get(Uh)));break;case"delete":ee(t)||(a.push(o.get(cs)),ni(t)&&a.push(o.get(Uh)));break;case"set":ni(t)&&a.push(o.get(cs));break}ff();for(const l of a)l&&Iv(l,2);pf()}function hA(t,e){var n;return(n=kl.get(t))==null?void 0:n.get(e)}const dA=sf("__proto__,__v_isRef,__isVue"),Sv=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ki)),kg=fA();function fA(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=me(this);for(let i=0,o=this.length;i<o;i++)Dt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(me)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){As(),ff();const r=me(this)[e].apply(this,n);return pf(),Ss(),r}}),t}function pA(t){const e=me(this);return Dt(e,"has",t),e.hasOwnProperty(t)}class Cv{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?CA:xv:i?kv:Pv).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ee(e);if(!s){if(o&&we(kg,n))return Reflect.get(kg,n,r);if(n==="hasOwnProperty")return pA}const a=Reflect.get(e,n,r);return(ki(n)?Sv.has(n):dA(n))||(s||Dt(e,"get",n),i)?a:We(a)?o&&lf(n)?a:a.value:Oe(a)?s?Ov(a):Jn(a):a}}class Rv extends Cv{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._shallow){const l=di(i);if(!xl(r)&&!di(r)&&(i=me(i),r=me(r)),!ee(e)&&We(i)&&!We(r))return l?!1:(i.value=r,!0)}const o=ee(e)&&lf(n)?Number(n)<e.length:we(e,n),a=Reflect.set(e,n,r,s);return e===me(s)&&(o?Or(r,i)&&Gn(e,"set",n,r):Gn(e,"add",n,r)),a}deleteProperty(e,n){const r=we(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Gn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!ki(n)||!Sv.has(n))&&Dt(e,"has",n),r}ownKeys(e){return Dt(e,"iterate",ee(e)?"length":cs),Reflect.ownKeys(e)}}class gA extends Cv{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const mA=new Rv,_A=new gA,yA=new Rv(!0),gf=t=>t,kc=t=>Reflect.getPrototypeOf(t);function ja(t,e,n=!1,r=!1){t=t.__v_raw;const s=me(t),i=me(e);n||(Or(e,i)&&Dt(s,"get",e),Dt(s,"get",i));const{has:o}=kc(s),a=r?gf:n?yf:xo;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function qa(t,e=!1){const n=this.__v_raw,r=me(n),s=me(t);return e||(Or(t,s)&&Dt(r,"has",t),Dt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Wa(t,e=!1){return t=t.__v_raw,!e&&Dt(me(t),"iterate",cs),Reflect.get(t,"size",t)}function xg(t){t=me(t);const e=me(this);return kc(e).has.call(e,t)||(e.add(t),Gn(e,"add",t,t)),this}function Ng(t,e){e=me(e);const n=me(this),{has:r,get:s}=kc(n);let i=r.call(n,t);i||(t=me(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Or(e,o)&&Gn(n,"set",t,e):Gn(n,"add",t,e),this}function Og(t){const e=me(this),{has:n,get:r}=kc(e);let s=n.call(e,t);s||(t=me(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Gn(e,"delete",t,void 0),i}function Dg(){const t=me(this),e=t.size!==0,n=t.clear();return e&&Gn(t,"clear",void 0,void 0),n}function Ha(t,e){return function(r,s){const i=this,o=i.__v_raw,a=me(o),l=e?gf:t?yf:xo;return!t&&Dt(a,"iterate",cs),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function za(t,e,n){return function(...r){const s=this.__v_raw,i=me(s),o=ni(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?gf:e?yf:xo;return!e&&Dt(i,"iterate",l?Uh:cs),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function lr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function vA(){const t={get(i){return ja(this,i)},get size(){return Wa(this)},has:qa,add:xg,set:Ng,delete:Og,clear:Dg,forEach:Ha(!1,!1)},e={get(i){return ja(this,i,!1,!0)},get size(){return Wa(this)},has:qa,add:xg,set:Ng,delete:Og,clear:Dg,forEach:Ha(!1,!0)},n={get(i){return ja(this,i,!0)},get size(){return Wa(this,!0)},has(i){return qa.call(this,i,!0)},add:lr("add"),set:lr("set"),delete:lr("delete"),clear:lr("clear"),forEach:Ha(!0,!1)},r={get(i){return ja(this,i,!0,!0)},get size(){return Wa(this,!0)},has(i){return qa.call(this,i,!0)},add:lr("add"),set:lr("set"),delete:lr("delete"),clear:lr("clear"),forEach:Ha(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=za(i,!1,!1),n[i]=za(i,!0,!1),e[i]=za(i,!1,!0),r[i]=za(i,!0,!0)}),[t,n,e,r]}const[EA,wA,TA,IA]=vA();function mf(t,e){const n=e?t?IA:TA:t?wA:EA;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(we(n,s)&&s in r?n:r,s,i)}const bA={get:mf(!1,!1)},AA={get:mf(!1,!0)},SA={get:mf(!0,!1)},Pv=new WeakMap,kv=new WeakMap,xv=new WeakMap,CA=new WeakMap;function RA(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function PA(t){return t.__v_skip||!Object.isExtensible(t)?0:RA(Xb(t))}function Jn(t){return di(t)?t:_f(t,!1,mA,bA,Pv)}function Nv(t){return _f(t,!1,yA,AA,kv)}function Ov(t){return _f(t,!0,_A,SA,xv)}function _f(t,e,n,r,s){if(!Oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=PA(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Qn(t){return di(t)?Qn(t.__v_raw):!!(t&&t.__v_isReactive)}function di(t){return!!(t&&t.__v_isReadonly)}function xl(t){return!!(t&&t.__v_isShallow)}function Dv(t){return Qn(t)||di(t)}function me(t){const e=t&&t.__v_raw;return e?me(e):t}function Ur(t){return Pl(t,"__v_skip",!0),t}const xo=t=>Oe(t)?Jn(t):t,yf=t=>Oe(t)?Ov(t):t;class Mv{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new df(()=>e(this._value),()=>pl(this,1),()=>this.dep&&bv(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=me(this);return(!e._cacheable||e.effect.dirty)&&Or(e._value,e._value=e.effect.run())&&pl(e,2),Lv(e),e.effect._dirtyLevel>=1&&pl(e,1),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function kA(t,e,n=!1){let r,s;const i=ce(t);return i?(r=t,s=Ft):(r=t.get,s=t.set),new Mv(r,s,i||!s,n)}function Lv(t){Sr&&ls&&(t=me(t),Tv(ls,t.dep||(t.dep=Av(()=>t.dep=void 0,t instanceof Mv?t:void 0))))}function pl(t,e=2,n){t=me(t);const r=t.dep;r&&Iv(r,e)}function We(t){return!!(t&&t.__v_isRef===!0)}function Zn(t){return Vv(t,!1)}function xA(t){return Vv(t,!0)}function Vv(t,e){return We(t)?t:new NA(t,e)}class NA{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:me(e),this._value=n?e:xo(e)}get value(){return Lv(this),this._value}set value(e){const n=this.__v_isShallow||xl(e)||di(e);e=n?e:me(e),Or(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:xo(e),pl(this,2))}}function Cr(t){return We(t)?t.value:t}function iB(t){return ce(t)?t():Cr(t)}const OA={get:(t,e,n)=>Cr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return We(s)&&!We(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Fv(t){return Qn(t)?t:new Proxy(t,OA)}function DA(t){const e=ee(t)?new Array(t.length):{};for(const n in t)e[n]=Uv(t,n);return e}class MA{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return hA(me(this._object),this._key)}}class LA{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function VA(t,e,n){return We(t)?t:ce(t)?new LA(t):Oe(t)&&arguments.length>1?Uv(t,e,n):Zn(t)}function Uv(t,e,n){const r=t[e];return We(r)?r:new MA(t,e,n)}/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Rr(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){xc(i,e,n)}return s}function Yt(t,e,n,r){if(ce(t)){const i=Rr(t,e,n,r);return i&&dv(i)&&i.catch(o=>{xc(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Yt(t[i],e,n,r));return s}function xc(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Rr(l,null,10,[t,o,a]);return}}FA(t,n,s,r)}function FA(t,e,n,r=!0){console.error(t)}let No=!1,$h=!1;const Et=[];let bn=0;const ri=[];let pr=null,Jr=0;const $v=Promise.resolve();let vf=null;function Ef(t){const e=vf||$v;return t?e.then(this?t.bind(this):t):e}function UA(t){let e=bn+1,n=Et.length;for(;e<n;){const r=e+n>>>1,s=Et[r],i=Oo(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function wf(t){(!Et.length||!Et.includes(t,No&&t.allowRecurse?bn+1:bn))&&(t.id==null?Et.push(t):Et.splice(UA(t.id),0,t),Bv())}function Bv(){!No&&!$h&&($h=!0,vf=$v.then(qv))}function $A(t){const e=Et.indexOf(t);e>bn&&Et.splice(e,1)}function BA(t){ee(t)?ri.push(...t):(!pr||!pr.includes(t,t.allowRecurse?Jr+1:Jr))&&ri.push(t),Bv()}function Mg(t,e,n=No?bn+1:0){for(;n<Et.length;n++){const r=Et[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;Et.splice(n,1),n--,r()}}}function jv(t){if(ri.length){const e=[...new Set(ri)].sort((n,r)=>Oo(n)-Oo(r));if(ri.length=0,pr){pr.push(...e);return}for(pr=e,Jr=0;Jr<pr.length;Jr++)pr[Jr]();pr=null,Jr=0}}const Oo=t=>t.id==null?1/0:t.id,jA=(t,e)=>{const n=Oo(t)-Oo(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function qv(t){$h=!1,No=!0,Et.sort(jA);const e=Ft;try{for(bn=0;bn<Et.length;bn++){const n=Et[bn];n&&n.active!==!1&&Rr(n,null,14)}}finally{bn=0,Et.length=0,jv(),No=!1,vf=null,(Et.length||ri.length)&&qv()}}function qA(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Me;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Me;d&&(s=n.map(f=>qe(f)?f.trim():f)),h&&(s=n.map(eA))}let a,l=r[a=ju(e)]||r[a=ju(Dn(e))];!l&&i&&(l=r[a=ju(xi(e))]),l&&Yt(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Yt(c,t,6,s)}}function Wv(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ce(t)){const l=c=>{const u=Wv(c,e,!0);u&&(a=!0,Qe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Oe(t)&&r.set(t,null),null):(ee(i)?i.forEach(l=>o[l]=null):Qe(o,i),Oe(t)&&r.set(t,o),o)}function Nc(t,e){return!t||!Sc(e)?!1:(e=e.slice(2).replace(/Once$/,""),we(t,e[0].toLowerCase()+e.slice(1))||we(t,xi(e))||we(t,e))}let Ge=null,Hv=null;function Nl(t){const e=Ge;return Ge=t,Hv=t&&t.type.__scopeId||null,e}function WA(t,e=Ge,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Qg(-1);const i=Nl(e);let o;try{o=t(...s)}finally{Nl(i),r._d&&Qg(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Hu(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:g,inheritAttrs:y}=t;let _,E;const S=Nl(t);try{if(n.shapeFlag&4){const k=s||r,N=k;_=In(u.call(N,k,h,i,f,d,g)),E=l}else{const k=e;_=In(k.length>1?k(i,{attrs:l,slots:a,emit:c}):k(i,null)),E=e.props?l:HA(l)}}catch(k){_o.length=0,xc(k,t,1),_=St(Xt)}let C=_;if(E&&y!==!1){const k=Object.keys(E),{shapeFlag:N}=C;k.length&&N&7&&(o&&k.some(of)&&(E=zA(E,o)),C=Dr(C,E))}return n.dirs&&(C=Dr(C),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),_=C,Nl(S),_}const HA=t=>{let e;for(const n in t)(n==="class"||n==="style"||Sc(n))&&((e||(e={}))[n]=t[n]);return e},zA=(t,e)=>{const n={};for(const r in t)(!of(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function KA(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Lg(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!Nc(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Lg(r,o,c):!0:!!o;return!1}function Lg(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Nc(n,i))return!0}return!1}function GA({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const zv="components";function QA(t,e){return XA(zv,t,!0,e)||t}const YA=Symbol.for("v-ndc");function XA(t,e,n=!0,r=!1){const s=Ge||rt;if(s){const i=s.type;if(t===zv){const a=KS(i,!1);if(a&&(a===e||a===Dn(e)||a===Pc(Dn(e))))return i}const o=Vg(s[t]||i[t],e)||Vg(s.appContext[t],e);return!o&&r?i:o}}function Vg(t,e){return t&&(t[e]||t[Dn(e)]||t[Pc(Dn(e))])}const JA=t=>t.__isSuspense;function ZA(t,e){e&&e.pendingBranch?ee(t)?e.effects.push(...t):e.effects.push(t):BA(t)}const eS=Symbol.for("v-scx"),tS=()=>$t(eS);function oB(t,e){return Tf(t,null,e)}const Ka={};function fo(t,e,n){return Tf(t,e,n)}function Tf(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=Me){if(e&&i){const x=e;e=(...G)=>{x(...G),N()}}const l=rt,c=x=>r===!0?x:ts(x,r===!1?1:void 0);let u,h=!1,d=!1;if(We(t)?(u=()=>t.value,h=xl(t)):Qn(t)?(u=()=>c(t),h=!0):ee(t)?(d=!0,h=t.some(x=>Qn(x)||xl(x)),u=()=>t.map(x=>{if(We(x))return x.value;if(Qn(x))return c(x);if(ce(x))return Rr(x,l,2)})):ce(t)?e?u=()=>Rr(t,l,2):u=()=>(f&&f(),Yt(t,l,3,[g])):u=Ft,e&&r){const x=u;u=()=>ts(x())}let f,g=x=>{f=C.onStop=()=>{Rr(x,l,4),f=C.onStop=void 0}},y;if(Fc)if(g=Ft,e?n&&Yt(e,l,3,[u(),d?[]:void 0,g]):u(),s==="sync"){const x=tS();y=x.__watcherHandles||(x.__watcherHandles=[])}else return Ft;let _=d?new Array(t.length).fill(Ka):Ka;const E=()=>{if(!(!C.active||!C.dirty))if(e){const x=C.run();(r||h||(d?x.some((G,P)=>Or(G,_[P])):Or(x,_)))&&(f&&f(),Yt(e,l,3,[x,_===Ka?void 0:d&&_[0]===Ka?[]:_,g]),_=x)}else C.run()};E.allowRecurse=!!e;let S;s==="sync"?S=E:s==="post"?S=()=>Pt(E,l&&l.suspense):(E.pre=!0,l&&(E.id=l.uid),S=()=>wf(E));const C=new df(u,Ft,S),k=vv(),N=()=>{C.stop(),k&&af(k.effects,C)};return e?n?E():_=C.run():s==="post"?Pt(C.run.bind(C),l&&l.suspense):C.run(),y&&y.push(N),N}function nS(t,e,n){const r=this.proxy,s=qe(t)?t.includes(".")?Kv(r,t):()=>r[t]:t.bind(r,r);let i;ce(e)?i=e:(i=e.handler,n=e);const o=ua(this),a=Tf(s,i.bind(r),n);return o(),a}function Kv(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function ts(t,e,n=0,r){if(!Oe(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),We(t))ts(t.value,e,n,r);else if(ee(t))for(let s=0;s<t.length;s++)ts(t[s],e,n,r);else if(hv(t)||ni(t))t.forEach(s=>{ts(s,e,n,r)});else if(pv(t))for(const s in t)ts(t[s],e,n,r);return t}function Gv(t,e){if(Ge===null)return t;const n=Uc(Ge)||Ge.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=Me]=e[s];i&&(ce(i)&&(i={mounted:i,updated:i}),i.deep&&ts(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Kr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(As(),Yt(l,n,8,[t.el,a,t,e]),Ss())}}const gr=Symbol("_leaveCb"),Ga=Symbol("_enterCb");function Qv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Zv(()=>{t.isMounted=!0}),bf(()=>{t.isUnmounting=!0}),t}const Ht=[Function,Array],Yv={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ht,onEnter:Ht,onAfterEnter:Ht,onEnterCancelled:Ht,onBeforeLeave:Ht,onLeave:Ht,onAfterLeave:Ht,onLeaveCancelled:Ht,onBeforeAppear:Ht,onAppear:Ht,onAfterAppear:Ht,onAppearCancelled:Ht},rS={name:"BaseTransition",props:Yv,setup(t,{slots:e}){const n=Ni(),r=Qv();let s;return()=>{const i=e.default&&If(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const y of i)if(y.type!==Xt){o=y;break}}const a=me(t),{mode:l}=a;if(r.isLeaving)return zu(o);const c=Fg(o);if(!c)return zu(o);const u=Do(c,a,r,n);Mo(c,u);const h=n.subTree,d=h&&Fg(h);let f=!1;const{getTransitionKey:g}=c.type;if(g){const y=g();s===void 0?s=y:y!==s&&(s=y,f=!0)}if(d&&d.type!==Xt&&(!Zr(c,d)||f)){const y=Do(d,a,r,n);if(Mo(d,y),l==="out-in")return r.isLeaving=!0,y.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},zu(o);l==="in-out"&&c.type!==Xt&&(y.delayLeave=(_,E,S)=>{const C=Xv(r,d);C[String(d.key)]=d,_[gr]=()=>{E(),_[gr]=void 0,delete u.delayedLeave},u.delayedLeave=S})}return o}}},sS=rS;function Xv(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Do(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:g,onBeforeAppear:y,onAppear:_,onAfterAppear:E,onAppearCancelled:S}=e,C=String(t.key),k=Xv(n,t),N=(P,L)=>{P&&Yt(P,r,9,L)},x=(P,L)=>{const Y=L[1];N(P,L),ee(P)?P.every(K=>K.length<=1)&&Y():P.length<=1&&Y()},G={mode:i,persisted:o,beforeEnter(P){let L=a;if(!n.isMounted)if(s)L=y||a;else return;P[gr]&&P[gr](!0);const Y=k[C];Y&&Zr(t,Y)&&Y.el[gr]&&Y.el[gr](),N(L,[P])},enter(P){let L=l,Y=c,K=u;if(!n.isMounted)if(s)L=_||l,Y=E||c,K=S||u;else return;let B=!1;const ie=P[Ga]=W=>{B||(B=!0,W?N(K,[P]):N(Y,[P]),G.delayedLeave&&G.delayedLeave(),P[Ga]=void 0)};L?x(L,[P,ie]):ie()},leave(P,L){const Y=String(t.key);if(P[Ga]&&P[Ga](!0),n.isUnmounting)return L();N(h,[P]);let K=!1;const B=P[gr]=ie=>{K||(K=!0,L(),ie?N(g,[P]):N(f,[P]),P[gr]=void 0,k[Y]===t&&delete k[Y])};k[Y]=t,d?x(d,[P,B]):B()},clone(P){return Do(P,e,n,r)}};return G}function zu(t){if(Dc(t))return t=Dr(t),t.children=null,t}function Fg(t){return Dc(t)?t.children?t.children[0]:void 0:t}function Mo(t,e){t.shapeFlag&6&&t.component?Mo(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function If(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Vt?(o.patchFlag&128&&s++,r=r.concat(If(o.children,e,a))):(e||o.type!==Xt)&&r.push(a!=null?Dr(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Oc(t,e){return ce(t)?(()=>Qe({name:t.name},e,{setup:t}))():t}const po=t=>!!t.type.__asyncLoader,Dc=t=>t.type.__isKeepAlive;function iS(t,e){Jv(t,"a",e)}function oS(t,e){Jv(t,"da",e)}function Jv(t,e,n=rt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Mc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Dc(s.parent.vnode)&&aS(r,e,n,s),s=s.parent}}function aS(t,e,n,r){const s=Mc(e,t,r,!0);tE(()=>{af(r[e],s)},n)}function Mc(t,e,n=rt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;As();const a=ua(n),l=Yt(e,n,t,o);return a(),Ss(),l});return r?s.unshift(i):s.push(i),i}}const sr=t=>(e,n=rt)=>(!Fc||t==="sp")&&Mc(t,(...r)=>e(...r),n),lS=sr("bm"),Zv=sr("m"),cS=sr("bu"),eE=sr("u"),bf=sr("bum"),tE=sr("um"),uS=sr("sp"),hS=sr("rtg"),dS=sr("rtc");function fS(t,e=rt){Mc("ec",t,e)}function aB(t,e,n,r){let s;const i=n&&n[r];if(ee(t)||qe(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Oe(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function lB(t,e,n={},r,s){if(Ge.isCE||Ge.parent&&po(Ge.parent)&&Ge.parent.isCE)return e!=="default"&&(n.name=e),St("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),Rf();const o=i&&nE(i(n)),a=Pf(Vt,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function nE(t){return t.some(e=>Dl(e)?!(e.type===Xt||e.type===Vt&&!nE(e.children)):!0)?t:null}const Bh=t=>t?gE(t)?Uc(t)||t.proxy:Bh(t.parent):null,go=Qe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Bh(t.parent),$root:t=>Bh(t.root),$emit:t=>t.emit,$options:t=>Af(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,wf(t.update)}),$nextTick:t=>t.n||(t.n=Ef.bind(t.proxy)),$watch:t=>nS.bind(t)}),Ku=(t,e)=>t!==Me&&!t.__isScriptSetup&&we(t,e),pS={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ku(r,e))return o[e]=1,r[e];if(s!==Me&&we(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&we(c,e))return o[e]=3,i[e];if(n!==Me&&we(n,e))return o[e]=4,n[e];jh&&(o[e]=0)}}const u=go[e];let h,d;if(u)return e==="$attrs"&&Dt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Me&&we(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,we(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ku(s,e)?(s[e]=n,!0):r!==Me&&we(r,e)?(r[e]=n,!0):we(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Me&&we(t,o)||Ku(e,o)||(a=i[0])&&we(a,o)||we(r,o)||we(go,o)||we(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:we(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ug(t){return ee(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let jh=!0;function gS(t){const e=Af(t),n=t.proxy,r=t.ctx;jh=!1,e.beforeCreate&&$g(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:g,activated:y,deactivated:_,beforeDestroy:E,beforeUnmount:S,destroyed:C,unmounted:k,render:N,renderTracked:x,renderTriggered:G,errorCaptured:P,serverPrefetch:L,expose:Y,inheritAttrs:K,components:B,directives:ie,filters:W}=e;if(c&&mS(c,r,null),o)for(const Re in o){const Ie=o[Re];ce(Ie)&&(r[Re]=Ie.bind(n))}if(s){const Re=s.call(n,n);Oe(Re)&&(t.data=Jn(Re))}if(jh=!0,i)for(const Re in i){const Ie=i[Re],$n=ce(Ie)?Ie.bind(n,n):ce(Ie.get)?Ie.get.bind(n,n):Ft,ar=!ce(Ie)&&ce(Ie.set)?Ie.set.bind(n):Ft,vn=ne({get:$n,set:ar});Object.defineProperty(r,Re,{enumerable:!0,configurable:!0,get:()=>vn.value,set:Rt=>vn.value=Rt})}if(a)for(const Re in a)rE(a[Re],r,n,Re);if(l){const Re=ce(l)?l.call(n):l;Reflect.ownKeys(Re).forEach(Ie=>{gl(Ie,Re[Ie])})}u&&$g(u,t,"c");function de(Re,Ie){ee(Ie)?Ie.forEach($n=>Re($n.bind(n))):Ie&&Re(Ie.bind(n))}if(de(lS,h),de(Zv,d),de(cS,f),de(eE,g),de(iS,y),de(oS,_),de(fS,P),de(dS,x),de(hS,G),de(bf,S),de(tE,k),de(uS,L),ee(Y))if(Y.length){const Re=t.exposed||(t.exposed={});Y.forEach(Ie=>{Object.defineProperty(Re,Ie,{get:()=>n[Ie],set:$n=>n[Ie]=$n})})}else t.exposed||(t.exposed={});N&&t.render===Ft&&(t.render=N),K!=null&&(t.inheritAttrs=K),B&&(t.components=B),ie&&(t.directives=ie)}function mS(t,e,n=Ft){ee(t)&&(t=qh(t));for(const r in t){const s=t[r];let i;Oe(s)?"default"in s?i=$t(s.from||r,s.default,!0):i=$t(s.from||r):i=$t(s),We(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function $g(t,e,n){Yt(ee(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function rE(t,e,n,r){const s=r.includes(".")?Kv(n,r):()=>n[r];if(qe(t)){const i=e[t];ce(i)&&fo(s,i)}else if(ce(t))fo(s,t.bind(n));else if(Oe(t))if(ee(t))t.forEach(i=>rE(i,e,n,r));else{const i=ce(t.handler)?t.handler.bind(n):e[t.handler];ce(i)&&fo(s,i,t)}}function Af(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>Ol(l,c,o,!0)),Ol(l,e,o)),Oe(e)&&i.set(e,l),l}function Ol(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ol(t,i,n,!0),s&&s.forEach(o=>Ol(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=_S[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const _S={data:Bg,props:jg,emits:jg,methods:ro,computed:ro,beforeCreate:At,created:At,beforeMount:At,mounted:At,beforeUpdate:At,updated:At,beforeDestroy:At,beforeUnmount:At,destroyed:At,unmounted:At,activated:At,deactivated:At,errorCaptured:At,serverPrefetch:At,components:ro,directives:ro,watch:vS,provide:Bg,inject:yS};function Bg(t,e){return e?t?function(){return Qe(ce(t)?t.call(this,this):t,ce(e)?e.call(this,this):e)}:e:t}function yS(t,e){return ro(qh(t),qh(e))}function qh(t){if(ee(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function At(t,e){return t?[...new Set([].concat(t,e))]:e}function ro(t,e){return t?Qe(Object.create(null),t,e):e}function jg(t,e){return t?ee(t)&&ee(e)?[...new Set([...t,...e])]:Qe(Object.create(null),Ug(t),Ug(e!=null?e:{})):e}function vS(t,e){if(!t)return e;if(!e)return t;const n=Qe(Object.create(null),t);for(const r in e)n[r]=At(t[r],e[r]);return n}function sE(){return{app:null,config:{isNativeTag:Qb,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ES=0;function wS(t,e){return function(r,s=null){ce(r)||(r=Qe({},r)),s!=null&&!Oe(s)&&(s=null);const i=sE(),o=new WeakSet;let a=!1;const l=i.app={_uid:ES++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:QS,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&ce(c.install)?(o.add(c),c.install(l,...u)):ce(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const d=St(r,s);return d.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Uc(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){Lo=l;try{return c()}finally{Lo=null}}};return l}}let Lo=null;function gl(t,e){if(rt){let n=rt.provides;const r=rt.parent&&rt.parent.provides;r===n&&(n=rt.provides=Object.create(r)),n[t]=e}}function $t(t,e,n=!1){const r=rt||Ge;if(r||Lo){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Lo._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ce(e)?e.call(r&&r.proxy):e}}function TS(){return!!(rt||Ge||Lo)}function IS(t,e,n,r=!1){const s={},i={};Pl(i,Vc,1),t.propsDefaults=Object.create(null),iE(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Nv(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function bS(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=me(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Nc(t.emitsOptions,d))continue;const f=e[d];if(l)if(we(i,d))f!==i[d]&&(i[d]=f,c=!0);else{const g=Dn(d);s[g]=Wh(l,a,g,f,t,!1)}else f!==i[d]&&(i[d]=f,c=!0)}}}else{iE(t,e,s,i)&&(c=!0);let u;for(const h in a)(!e||!we(e,h)&&((u=xi(h))===h||!we(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Wh(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!we(e,h)&&!0)&&(delete i[h],c=!0)}c&&Gn(t,"set","$attrs")}function iE(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(fl(l))continue;const c=e[l];let u;s&&we(s,u=Dn(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:Nc(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=me(n),c=a||Me;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Wh(s,l,h,c[h],t,!we(c,h))}}return o}function Wh(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=we(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ce(l)){const{propsDefaults:c}=s;if(n in c)r=c[n];else{const u=ua(s);r=c[n]=l.call(null,e),u()}}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===xi(n))&&(r=!0))}return r}function oE(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!ce(t)){const u=h=>{l=!0;const[d,f]=oE(h,e,!0);Qe(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return Oe(t)&&r.set(t,ti),ti;if(ee(i))for(let u=0;u<i.length;u++){const h=Dn(i[u]);qg(h)&&(o[h]=Me)}else if(i)for(const u in i){const h=Dn(u);if(qg(h)){const d=i[u],f=o[h]=ee(d)||ce(d)?{type:d}:Qe({},d);if(f){const g=zg(Boolean,f.type),y=zg(String,f.type);f[0]=g>-1,f[1]=y<0||g<y,(g>-1||we(f,"default"))&&a.push(h)}}}const c=[o,a];return Oe(t)&&r.set(t,c),c}function qg(t){return t[0]!=="$"}function Wg(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Hg(t,e){return Wg(t)===Wg(e)}function zg(t,e){return ee(e)?e.findIndex(n=>Hg(n,t)):ce(e)&&Hg(e,t)?0:-1}const aE=t=>t[0]==="_"||t==="$stable",Sf=t=>ee(t)?t.map(In):[In(t)],AS=(t,e,n)=>{if(e._n)return e;const r=WA((...s)=>Sf(e(...s)),n);return r._c=!1,r},lE=(t,e,n)=>{const r=t._ctx;for(const s in t){if(aE(s))continue;const i=t[s];if(ce(i))e[s]=AS(s,i,r);else if(i!=null){const o=Sf(i);e[s]=()=>o}}},cE=(t,e)=>{const n=Sf(e);t.slots.default=()=>n},SS=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=me(e),Pl(e,"_",n)):lE(e,t.slots={})}else t.slots={},e&&cE(t,e);Pl(t.slots,Vc,1)},CS=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Me;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Qe(s,e),!n&&a===1&&delete s._):(i=!e.$stable,lE(e,s)),o=e}else e&&(cE(t,e),o={default:1});if(i)for(const a in s)!aE(a)&&o[a]==null&&delete s[a]};function Hh(t,e,n,r,s=!1){if(ee(t)){t.forEach((d,f)=>Hh(d,e&&(ee(e)?e[f]:e),n,r,s));return}if(po(r)&&!s)return;const i=r.shapeFlag&4?Uc(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Me?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(qe(c)?(u[c]=null,we(h,c)&&(h[c]=null)):We(c)&&(c.value=null)),ce(l))Rr(l,a,12,[o,u]);else{const d=qe(l),f=We(l),g=t.f;if(d||f){const y=()=>{if(g){const _=d?we(h,l)?h[l]:u[l]:l.value;s?ee(_)&&af(_,i):ee(_)?_.includes(i)||_.push(i):d?(u[l]=[i],we(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,we(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};s||g?y():(y.id=-1,Pt(y,n))}}}const Pt=ZA;function RS(t){return PS(t)}function PS(t,e){const n=gv();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Ft,insertStaticContent:g}=t,y=(p,m,v,b=null,T=null,D=null,q=void 0,O=null,V=!!m.dynamicChildren)=>{if(p===m)return;p&&!Zr(p,m)&&(b=I(p),Rt(p,T,D,!0),p=null),m.patchFlag===-2&&(V=!1,m.dynamicChildren=null);const{type:R,ref:z,shapeFlag:Z}=m;switch(R){case Lc:_(p,m,v,b);break;case Xt:E(p,m,v,b);break;case Qu:p==null&&S(m,v,b,q);break;case Vt:B(p,m,v,b,T,D,q,O,V);break;default:Z&1?N(p,m,v,b,T,D,q,O,V):Z&6?ie(p,m,v,b,T,D,q,O,V):(Z&64||Z&128)&&R.process(p,m,v,b,T,D,q,O,V,Q)}z!=null&&T&&Hh(z,p&&p.ref,D,m||p,!m)},_=(p,m,v,b)=>{if(p==null)r(m.el=a(m.children),v,b);else{const T=m.el=p.el;m.children!==p.children&&c(T,m.children)}},E=(p,m,v,b)=>{p==null?r(m.el=l(m.children||""),v,b):m.el=p.el},S=(p,m,v,b)=>{[p.el,p.anchor]=g(p.children,m,v,b,p.el,p.anchor)},C=({el:p,anchor:m},v,b)=>{let T;for(;p&&p!==m;)T=d(p),r(p,v,b),p=T;r(m,v,b)},k=({el:p,anchor:m})=>{let v;for(;p&&p!==m;)v=d(p),s(p),p=v;s(m)},N=(p,m,v,b,T,D,q,O,V)=>{m.type==="svg"?q="svg":m.type==="math"&&(q="mathml"),p==null?x(m,v,b,T,D,q,O,V):L(p,m,T,D,q,O,V)},x=(p,m,v,b,T,D,q,O)=>{let V,R;const{props:z,shapeFlag:Z,transition:J,dirs:oe}=p;if(V=p.el=o(p.type,D,z&&z.is,z),Z&8?u(V,p.children):Z&16&&P(p.children,V,null,b,T,Gu(p,D),q,O),oe&&Kr(p,null,b,"created"),G(V,p,p.scopeId,q,b),z){for(const Pe in z)Pe!=="value"&&!fl(Pe)&&i(V,Pe,null,z[Pe],D,p.children,b,T,ft);"value"in z&&i(V,"value",null,z.value,D),(R=z.onVnodeBeforeMount)&&wn(R,b,p)}oe&&Kr(p,null,b,"beforeMount");const fe=kS(T,J);fe&&J.beforeEnter(V),r(V,m,v),((R=z&&z.onVnodeMounted)||fe||oe)&&Pt(()=>{R&&wn(R,b,p),fe&&J.enter(V),oe&&Kr(p,null,b,"mounted")},T)},G=(p,m,v,b,T)=>{if(v&&f(p,v),b)for(let D=0;D<b.length;D++)f(p,b[D]);if(T){let D=T.subTree;if(m===D){const q=T.vnode;G(p,q,q.scopeId,q.slotScopeIds,T.parent)}}},P=(p,m,v,b,T,D,q,O,V=0)=>{for(let R=V;R<p.length;R++){const z=p[R]=O?mr(p[R]):In(p[R]);y(null,z,m,v,b,T,D,q,O)}},L=(p,m,v,b,T,D,q)=>{const O=m.el=p.el;let{patchFlag:V,dynamicChildren:R,dirs:z}=m;V|=p.patchFlag&16;const Z=p.props||Me,J=m.props||Me;let oe;if(v&&Gr(v,!1),(oe=J.onVnodeBeforeUpdate)&&wn(oe,v,m,p),z&&Kr(m,p,v,"beforeUpdate"),v&&Gr(v,!0),R?Y(p.dynamicChildren,R,O,v,b,Gu(m,T),D):q||Ie(p,m,O,null,v,b,Gu(m,T),D,!1),V>0){if(V&16)K(O,m,Z,J,v,b,T);else if(V&2&&Z.class!==J.class&&i(O,"class",null,J.class,T),V&4&&i(O,"style",Z.style,J.style,T),V&8){const fe=m.dynamicProps;for(let Pe=0;Pe<fe.length;Pe++){const $e=fe[Pe],Ze=Z[$e],Zt=J[$e];(Zt!==Ze||$e==="value")&&i(O,$e,Ze,Zt,T,p.children,v,b,ft)}}V&1&&p.children!==m.children&&u(O,m.children)}else!q&&R==null&&K(O,m,Z,J,v,b,T);((oe=J.onVnodeUpdated)||z)&&Pt(()=>{oe&&wn(oe,v,m,p),z&&Kr(m,p,v,"updated")},b)},Y=(p,m,v,b,T,D,q)=>{for(let O=0;O<m.length;O++){const V=p[O],R=m[O],z=V.el&&(V.type===Vt||!Zr(V,R)||V.shapeFlag&70)?h(V.el):v;y(V,R,z,null,b,T,D,q,!0)}},K=(p,m,v,b,T,D,q)=>{if(v!==b){if(v!==Me)for(const O in v)!fl(O)&&!(O in b)&&i(p,O,v[O],null,q,m.children,T,D,ft);for(const O in b){if(fl(O))continue;const V=b[O],R=v[O];V!==R&&O!=="value"&&i(p,O,R,V,q,m.children,T,D,ft)}"value"in b&&i(p,"value",v.value,b.value,q)}},B=(p,m,v,b,T,D,q,O,V)=>{const R=m.el=p?p.el:a(""),z=m.anchor=p?p.anchor:a("");let{patchFlag:Z,dynamicChildren:J,slotScopeIds:oe}=m;oe&&(O=O?O.concat(oe):oe),p==null?(r(R,v,b),r(z,v,b),P(m.children||[],v,z,T,D,q,O,V)):Z>0&&Z&64&&J&&p.dynamicChildren?(Y(p.dynamicChildren,J,v,T,D,q,O),(m.key!=null||T&&m===T.subTree)&&Cf(p,m,!0)):Ie(p,m,v,z,T,D,q,O,V)},ie=(p,m,v,b,T,D,q,O,V)=>{m.slotScopeIds=O,p==null?m.shapeFlag&512?T.ctx.activate(m,v,b,q,V):W(m,v,b,T,D,q,V):he(p,m,V)},W=(p,m,v,b,T,D,q)=>{const O=p.component=jS(p,b,T);if(Dc(p)&&(O.ctx.renderer=Q),qS(O),O.asyncDep){if(T&&T.registerDep(O,de),!p.el){const V=O.subTree=St(Xt);E(null,V,m,v)}}else de(O,p,m,v,T,D,q)},he=(p,m,v)=>{const b=m.component=p.component;if(KA(p,m,v))if(b.asyncDep&&!b.asyncResolved){Re(b,m,v);return}else b.next=m,$A(b.update),b.effect.dirty=!0,b.update();else m.el=p.el,b.vnode=m},de=(p,m,v,b,T,D,q)=>{const O=()=>{if(p.isMounted){let{next:z,bu:Z,u:J,parent:oe,vnode:fe}=p;{const Vs=uE(p);if(Vs){z&&(z.el=fe.el,Re(p,z,q)),Vs.asyncDep.then(()=>{p.isUnmounted||O()});return}}let Pe=z,$e;Gr(p,!1),z?(z.el=fe.el,Re(p,z,q)):z=fe,Z&&qu(Z),($e=z.props&&z.props.onVnodeBeforeUpdate)&&wn($e,oe,z,fe),Gr(p,!0);const Ze=Hu(p),Zt=p.subTree;p.subTree=Ze,y(Zt,Ze,h(Zt.el),I(Zt),p,T,D),z.el=Ze.el,Pe===null&&GA(p,Ze.el),J&&Pt(J,T),($e=z.props&&z.props.onVnodeUpdated)&&Pt(()=>wn($e,oe,z,fe),T)}else{let z;const{el:Z,props:J}=m,{bm:oe,m:fe,parent:Pe}=p,$e=po(m);if(Gr(p,!1),oe&&qu(oe),!$e&&(z=J&&J.onVnodeBeforeMount)&&wn(z,Pe,m),Gr(p,!0),Z&&Ue){const Ze=()=>{p.subTree=Hu(p),Ue(Z,p.subTree,p,T,null)};$e?m.type.__asyncLoader().then(()=>!p.isUnmounted&&Ze()):Ze()}else{const Ze=p.subTree=Hu(p);y(null,Ze,v,b,p,T,D),m.el=Ze.el}if(fe&&Pt(fe,T),!$e&&(z=J&&J.onVnodeMounted)){const Ze=m;Pt(()=>wn(z,Pe,Ze),T)}(m.shapeFlag&256||Pe&&po(Pe.vnode)&&Pe.vnode.shapeFlag&256)&&p.a&&Pt(p.a,T),p.isMounted=!0,m=v=b=null}},V=p.effect=new df(O,Ft,()=>wf(R),p.scope),R=p.update=()=>{V.dirty&&V.run()};R.id=p.uid,Gr(p,!0),R()},Re=(p,m,v)=>{m.component=p;const b=p.vnode.props;p.vnode=m,p.next=null,bS(p,m.props,b,v),CS(p,m.children,v),As(),Mg(p),Ss()},Ie=(p,m,v,b,T,D,q,O,V=!1)=>{const R=p&&p.children,z=p?p.shapeFlag:0,Z=m.children,{patchFlag:J,shapeFlag:oe}=m;if(J>0){if(J&128){ar(R,Z,v,b,T,D,q,O,V);return}else if(J&256){$n(R,Z,v,b,T,D,q,O,V);return}}oe&8?(z&16&&ft(R,T,D),Z!==R&&u(v,Z)):z&16?oe&16?ar(R,Z,v,b,T,D,q,O,V):ft(R,T,D,!0):(z&8&&u(v,""),oe&16&&P(Z,v,b,T,D,q,O,V))},$n=(p,m,v,b,T,D,q,O,V)=>{p=p||ti,m=m||ti;const R=p.length,z=m.length,Z=Math.min(R,z);let J;for(J=0;J<Z;J++){const oe=m[J]=V?mr(m[J]):In(m[J]);y(p[J],oe,v,null,T,D,q,O,V)}R>z?ft(p,T,D,!0,!1,Z):P(m,v,b,T,D,q,O,V,Z)},ar=(p,m,v,b,T,D,q,O,V)=>{let R=0;const z=m.length;let Z=p.length-1,J=z-1;for(;R<=Z&&R<=J;){const oe=p[R],fe=m[R]=V?mr(m[R]):In(m[R]);if(Zr(oe,fe))y(oe,fe,v,null,T,D,q,O,V);else break;R++}for(;R<=Z&&R<=J;){const oe=p[Z],fe=m[J]=V?mr(m[J]):In(m[J]);if(Zr(oe,fe))y(oe,fe,v,null,T,D,q,O,V);else break;Z--,J--}if(R>Z){if(R<=J){const oe=J+1,fe=oe<z?m[oe].el:b;for(;R<=J;)y(null,m[R]=V?mr(m[R]):In(m[R]),v,fe,T,D,q,O,V),R++}}else if(R>J)for(;R<=Z;)Rt(p[R],T,D,!0),R++;else{const oe=R,fe=R,Pe=new Map;for(R=fe;R<=J;R++){const Mt=m[R]=V?mr(m[R]):In(m[R]);Mt.key!=null&&Pe.set(Mt.key,R)}let $e,Ze=0;const Zt=J-fe+1;let Vs=!1,Ig=0;const zi=new Array(Zt);for(R=0;R<Zt;R++)zi[R]=0;for(R=oe;R<=Z;R++){const Mt=p[R];if(Ze>=Zt){Rt(Mt,T,D,!0);continue}let En;if(Mt.key!=null)En=Pe.get(Mt.key);else for($e=fe;$e<=J;$e++)if(zi[$e-fe]===0&&Zr(Mt,m[$e])){En=$e;break}En===void 0?Rt(Mt,T,D,!0):(zi[En-fe]=R+1,En>=Ig?Ig=En:Vs=!0,y(Mt,m[En],v,null,T,D,q,O,V),Ze++)}const bg=Vs?xS(zi):ti;for($e=bg.length-1,R=Zt-1;R>=0;R--){const Mt=fe+R,En=m[Mt],Ag=Mt+1<z?m[Mt+1].el:b;zi[R]===0?y(null,En,v,Ag,T,D,q,O,V):Vs&&($e<0||R!==bg[$e]?vn(En,v,Ag,2):$e--)}}},vn=(p,m,v,b,T=null)=>{const{el:D,type:q,transition:O,children:V,shapeFlag:R}=p;if(R&6){vn(p.component.subTree,m,v,b);return}if(R&128){p.suspense.move(m,v,b);return}if(R&64){q.move(p,m,v,Q);return}if(q===Vt){r(D,m,v);for(let Z=0;Z<V.length;Z++)vn(V[Z],m,v,b);r(p.anchor,m,v);return}if(q===Qu){C(p,m,v);return}if(b!==2&&R&1&&O)if(b===0)O.beforeEnter(D),r(D,m,v),Pt(()=>O.enter(D),T);else{const{leave:Z,delayLeave:J,afterLeave:oe}=O,fe=()=>r(D,m,v),Pe=()=>{Z(D,()=>{fe(),oe&&oe()})};J?J(D,fe,Pe):Pe()}else r(D,m,v)},Rt=(p,m,v,b=!1,T=!1)=>{const{type:D,props:q,ref:O,children:V,dynamicChildren:R,shapeFlag:z,patchFlag:Z,dirs:J}=p;if(O!=null&&Hh(O,null,v,p,!0),z&256){m.ctx.deactivate(p);return}const oe=z&1&&J,fe=!po(p);let Pe;if(fe&&(Pe=q&&q.onVnodeBeforeUnmount)&&wn(Pe,m,p),z&6)$a(p.component,v,b);else{if(z&128){p.suspense.unmount(v,b);return}oe&&Kr(p,null,m,"beforeUnmount"),z&64?p.type.remove(p,m,v,T,Q,b):R&&(D!==Vt||Z>0&&Z&64)?ft(R,m,v,!1,!0):(D===Vt&&Z&384||!T&&z&16)&&ft(V,m,v),b&&Ms(p)}(fe&&(Pe=q&&q.onVnodeUnmounted)||oe)&&Pt(()=>{Pe&&wn(Pe,m,p),oe&&Kr(p,null,m,"unmounted")},v)},Ms=p=>{const{type:m,el:v,anchor:b,transition:T}=p;if(m===Vt){Ls(v,b);return}if(m===Qu){k(p);return}const D=()=>{s(v),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(p.shapeFlag&1&&T&&!T.persisted){const{leave:q,delayLeave:O}=T,V=()=>q(v,D);O?O(p.el,D,V):V()}else D()},Ls=(p,m)=>{let v;for(;p!==m;)v=d(p),s(p),p=v;s(m)},$a=(p,m,v)=>{const{bum:b,scope:T,update:D,subTree:q,um:O}=p;b&&qu(b),T.stop(),D&&(D.active=!1,Rt(q,p,m,v)),O&&Pt(O,m),Pt(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},ft=(p,m,v,b=!1,T=!1,D=0)=>{for(let q=D;q<p.length;q++)Rt(p[q],m,v,b,T)},I=p=>p.shapeFlag&6?I(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el);let H=!1;const j=(p,m,v)=>{p==null?m._vnode&&Rt(m._vnode,null,null,!0):y(m._vnode||null,p,m,null,null,null,v),H||(H=!0,Mg(),jv(),H=!1),m._vnode=p},Q={p:y,um:Rt,m:vn,r:Ms,mt:W,mc:P,pc:Ie,pbc:Y,n:I,o:t};let be,Ue;return e&&([be,Ue]=e(Q)),{render:j,hydrate:be,createApp:wS(j,be)}}function Gu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Gr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function kS(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Cf(t,e,n=!1){const r=t.children,s=e.children;if(ee(r)&&ee(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=mr(s[i]),a.el=o.el),n||Cf(o,a)),a.type===Lc&&(a.el=o.el)}}function xS(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function uE(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:uE(e)}const NS=t=>t.__isTeleport,mo=t=>t&&(t.disabled||t.disabled===""),Kg=t=>typeof SVGElement!="undefined"&&t instanceof SVGElement,Gg=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,zh=(t,e)=>{const n=t&&t.to;return qe(n)?e?e(n):null:n},OS={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,a,l,c){const{mc:u,pc:h,pbc:d,o:{insert:f,querySelector:g,createText:y,createComment:_}}=c,E=mo(e.props);let{shapeFlag:S,children:C,dynamicChildren:k}=e;if(t==null){const N=e.el=y(""),x=e.anchor=y("");f(N,n,r),f(x,n,r);const G=e.target=zh(e.props,g),P=e.targetAnchor=y("");G&&(f(P,G),o==="svg"||Kg(G)?o="svg":(o==="mathml"||Gg(G))&&(o="mathml"));const L=(Y,K)=>{S&16&&u(C,Y,K,s,i,o,a,l)};E?L(n,x):G&&L(G,P)}else{e.el=t.el;const N=e.anchor=t.anchor,x=e.target=t.target,G=e.targetAnchor=t.targetAnchor,P=mo(t.props),L=P?n:x,Y=P?N:G;if(o==="svg"||Kg(x)?o="svg":(o==="mathml"||Gg(x))&&(o="mathml"),k?(d(t.dynamicChildren,k,L,s,i,o,a),Cf(t,e,!0)):l||h(t,e,L,Y,s,i,o,a,!1),E)P?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Qa(e,n,N,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const K=e.target=zh(e.props,g);K&&Qa(e,K,null,c,0)}else P&&Qa(e,x,G,c,1)}hE(e)},remove(t,e,n,r,{um:s,o:{remove:i}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:h,props:d}=t;if(h&&i(u),o&&i(c),a&16){const f=o||!mo(d);for(let g=0;g<l.length;g++){const y=l[g];s(y,e,n,f,!!y.dynamicChildren)}}},move:Qa,hydrate:DS};function Qa(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,h=i===2;if(h&&r(o,e,n),(!h||mo(u))&&l&16)for(let d=0;d<c.length;d++)s(c[d],e,n,2);h&&r(a,e,n)}function DS(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=zh(e.props,l);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(mo(e.props))e.anchor=c(o(t),e,a(t),n,r,s,i),e.targetAnchor=h;else{e.anchor=o(t);let d=h;for(;d;)if(d=o(d),d&&d.nodeType===8&&d.data==="teleport anchor"){e.targetAnchor=d,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(h,e,u,n,r,s,i)}hE(e)}return e.anchor&&o(e.anchor)}const cB=OS;function hE(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const Vt=Symbol.for("v-fgt"),Lc=Symbol.for("v-txt"),Xt=Symbol.for("v-cmt"),Qu=Symbol.for("v-stc"),_o=[];let an=null;function Rf(t=!1){_o.push(an=t?null:[])}function MS(){_o.pop(),an=_o[_o.length-1]||null}let Vo=1;function Qg(t){Vo+=t}function dE(t){return t.dynamicChildren=Vo>0?an||ti:null,MS(),Vo>0&&an&&an.push(t),t}function uB(t,e,n,r,s,i){return dE(pE(t,e,n,r,s,i,!0))}function Pf(t,e,n,r,s){return dE(St(t,e,n,r,s,!0))}function Dl(t){return t?t.__v_isVNode===!0:!1}function Zr(t,e){return t.type===e.type&&t.key===e.key}const Vc="__vInternal",fE=({key:t})=>t!=null?t:null,ml=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?qe(t)||We(t)||ce(t)?{i:Ge,r:t,k:e,f:!!n}:t:null);function pE(t,e=null,n=null,r=0,s=null,i=t===Vt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&fE(e),ref:e&&ml(e),scopeId:Hv,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ge};return a?(kf(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=qe(n)?8:16),Vo>0&&!o&&an&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&an.push(l),l}const St=LS;function LS(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===YA)&&(t=Xt),Dl(t)){const a=Dr(t,e,!0);return n&&kf(a,n),Vo>0&&!i&&an&&(a.shapeFlag&6?an[an.indexOf(t)]=a:an.push(a)),a.patchFlag|=-2,a}if(GS(t)&&(t=t.__vccOpts),e){e=VS(e);let{class:a,style:l}=e;a&&!qe(a)&&(e.class=uf(a)),Oe(l)&&(Dv(l)&&!ee(l)&&(l=Qe({},l)),e.style=cf(l))}const o=qe(t)?1:JA(t)?128:NS(t)?64:Oe(t)?4:ce(t)?2:0;return pE(t,e,n,r,s,o,i,!0)}function VS(t){return t?Dv(t)||Vc in t?Qe({},t):t:null}function Dr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?US(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&fE(a),ref:e&&e.ref?n&&s?ee(s)?s.concat(ml(e)):[s,ml(e)]:ml(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Vt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Dr(t.ssContent),ssFallback:t.ssFallback&&Dr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function FS(t=" ",e=0){return St(Lc,null,t,e)}function hB(t="",e=!1){return e?(Rf(),Pf(Xt,null,t)):St(Xt,null,t)}function In(t){return t==null||typeof t=="boolean"?St(Xt):ee(t)?St(Vt,null,t.slice()):typeof t=="object"?mr(t):St(Lc,null,String(t))}function mr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Dr(t)}function kf(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ee(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),kf(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Vc in e)?e._ctx=Ge:s===3&&Ge&&(Ge.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ce(e)?(e={default:e,_ctx:Ge},n=32):(e=String(e),r&64?(n=16,e=[FS(e)]):n=8);t.children=e,t.shapeFlag|=n}function US(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=uf([e.class,r.class]));else if(s==="style")e.style=cf([e.style,r.style]);else if(Sc(s)){const i=e[s],o=r[s];o&&i!==o&&!(ee(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function wn(t,e,n,r=null){Yt(t,e,7,[n,r])}const $S=sE();let BS=0;function jS(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||$S,i={uid:BS++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new yv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:oE(r,s),emitsOptions:Wv(r,s),emit:null,emitted:null,propsDefaults:Me,inheritAttrs:r.inheritAttrs,ctx:Me,data:Me,props:Me,attrs:Me,slots:Me,refs:Me,setupState:Me,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=qA.bind(null,i),t.ce&&t.ce(i),i}let rt=null;const Ni=()=>rt||Ge;let Ml,Kh;{const t=gv(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ml=e("__VUE_INSTANCE_SETTERS__",n=>rt=n),Kh=e("__VUE_SSR_SETTERS__",n=>Fc=n)}const ua=t=>{const e=rt;return Ml(t),t.scope.on(),()=>{t.scope.off(),Ml(e)}},Yg=()=>{rt&&rt.scope.off(),Ml(null)};function gE(t){return t.vnode.shapeFlag&4}let Fc=!1;function qS(t,e=!1){e&&Kh(e);const{props:n,children:r}=t.vnode,s=gE(t);IS(t,n,s,e),SS(t,r);const i=s?WS(t,e):void 0;return e&&Kh(!1),i}function WS(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ur(new Proxy(t.ctx,pS));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?zS(t):null,i=ua(t);As();const o=Rr(r,t,0,[t.props,s]);if(Ss(),i(),dv(o)){if(o.then(Yg,Yg),e)return o.then(a=>{Xg(t,a,e)}).catch(a=>{xc(a,t,0)});t.asyncDep=o}else Xg(t,o,e)}else mE(t,e)}function Xg(t,e,n){ce(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Oe(e)&&(t.setupState=Fv(e)),mE(t,n)}let Jg;function mE(t,e,n){const r=t.type;if(!t.render){if(!e&&Jg&&!r.render){const s=r.template||Af(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=Qe(Qe({isCustomElement:i,delimiters:a},o),l);r.render=Jg(s,c)}}t.render=r.render||Ft}{const s=ua(t);As();try{gS(t)}finally{Ss(),s()}}}function HS(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Dt(t,"get","$attrs"),e[n]}}))}function zS(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return HS(t)},slots:t.slots,emit:t.emit,expose:e}}function Uc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Fv(Ur(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in go)return go[n](t)},has(e,n){return n in e||n in go}}))}function KS(t,e=!0){return ce(t)?t.displayName||t.name:t.name||e&&t.__name}function GS(t){return ce(t)&&"__vccOpts"in t}const ne=(t,e)=>kA(t,e,Fc);function te(t,e,n){const r=arguments.length;return r===2?Oe(e)&&!ee(e)?Dl(e)?St(t,null,[e]):St(t,e):St(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Dl(n)&&(n=[n]),St(t,e,n))}const QS="3.4.15";/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const YS="http://www.w3.org/2000/svg",XS="http://www.w3.org/1998/Math/MathML",_r=typeof document!="undefined"?document:null,Zg=_r&&_r.createElement("template"),JS={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?_r.createElementNS(YS,t):e==="mathml"?_r.createElementNS(XS,t):_r.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>_r.createTextNode(t),createComment:t=>_r.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>_r.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Zg.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=Zg.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},cr="transition",Ki="animation",fi=Symbol("_vtc"),xf=(t,{slots:e})=>te(sS,yE(t),e);xf.displayName="Transition";const _E={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ZS=xf.props=Qe({},Yv,_E),Qr=(t,e=[])=>{ee(t)?t.forEach(n=>n(...e)):t&&t(...e)},em=t=>t?ee(t)?t.some(e=>e.length>1):t.length>1:!1;function yE(t){const e={};for(const B in t)B in _E||(e[B]=t[B]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,g=eC(s),y=g&&g[0],_=g&&g[1],{onBeforeEnter:E,onEnter:S,onEnterCancelled:C,onLeave:k,onLeaveCancelled:N,onBeforeAppear:x=E,onAppear:G=S,onAppearCancelled:P=C}=e,L=(B,ie,W)=>{dr(B,ie?u:a),dr(B,ie?c:o),W&&W()},Y=(B,ie)=>{B._isLeaving=!1,dr(B,h),dr(B,f),dr(B,d),ie&&ie()},K=B=>(ie,W)=>{const he=B?G:S,de=()=>L(ie,B,W);Qr(he,[ie,de]),tm(()=>{dr(ie,B?l:i),qn(ie,B?u:a),em(he)||nm(ie,r,y,de)})};return Qe(e,{onBeforeEnter(B){Qr(E,[B]),qn(B,i),qn(B,o)},onBeforeAppear(B){Qr(x,[B]),qn(B,l),qn(B,c)},onEnter:K(!1),onAppear:K(!0),onLeave(B,ie){B._isLeaving=!0;const W=()=>Y(B,ie);qn(B,h),EE(),qn(B,d),tm(()=>{!B._isLeaving||(dr(B,h),qn(B,f),em(k)||nm(B,r,_,W))}),Qr(k,[B,W])},onEnterCancelled(B){L(B,!1),Qr(C,[B])},onAppearCancelled(B){L(B,!0),Qr(P,[B])},onLeaveCancelled(B){Y(B),Qr(N,[B])}})}function eC(t){if(t==null)return null;if(Oe(t))return[Yu(t.enter),Yu(t.leave)];{const e=Yu(t);return[e,e]}}function Yu(t){return tA(t)}function qn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[fi]||(t[fi]=new Set)).add(e)}function dr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[fi];n&&(n.delete(e),n.size||(t[fi]=void 0))}function tm(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let tC=0;function nm(t,e,n,r){const s=t._endId=++tC,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=vE(t,e);if(!o)return r();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),i()},d=f=>{f.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,d)}function vE(t,e){const n=window.getComputedStyle(t),r=g=>(n[g]||"").split(", "),s=r(`${cr}Delay`),i=r(`${cr}Duration`),o=rm(s,i),a=r(`${Ki}Delay`),l=r(`${Ki}Duration`),c=rm(a,l);let u=null,h=0,d=0;e===cr?o>0&&(u=cr,h=o,d=i.length):e===Ki?c>0&&(u=Ki,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?cr:Ki:null,d=u?u===cr?i.length:l.length:0);const f=u===cr&&/\b(transform|all)(,|$)/.test(r(`${cr}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function rm(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>sm(n)+sm(t[r])))}function sm(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function EE(){return document.body.offsetHeight}function nC(t,e,n){const r=t[fi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const rC=Symbol("_vod"),sC=Symbol("");function iC(t,e,n){const r=t.style,s=r.display,i=qe(n);if(n&&!i){if(e&&!qe(e))for(const o in e)n[o]==null&&Gh(r,o,"");for(const o in n)Gh(r,o,n[o])}else if(i){if(e!==n){const o=r[sC];o&&(n+=";"+o),r.cssText=n}}else e&&t.removeAttribute("style");rC in t&&(r.display=s)}const im=/\s*!important$/;function Gh(t,e,n){if(ee(n))n.forEach(r=>Gh(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=oC(t,e);im.test(n)?t.setProperty(xi(r),n.replace(im,""),"important"):t[r]=n}}const om=["Webkit","Moz","ms"],Xu={};function oC(t,e){const n=Xu[e];if(n)return n;let r=Dn(e);if(r!=="filter"&&r in t)return Xu[e]=r;r=Pc(r);for(let s=0;s<om.length;s++){const i=om[s]+r;if(i in t)return Xu[e]=i}return e}const am="http://www.w3.org/1999/xlink";function aC(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(am,e.slice(6,e.length)):t.setAttributeNS(am,e,n);else{const i=aA(e);n==null||i&&!mv(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function lC(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n==null?"":n;c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=mv(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function cC(t,e,n,r){t.addEventListener(e,n,r)}function uC(t,e,n,r){t.removeEventListener(e,n,r)}const lm=Symbol("_vei");function hC(t,e,n,r,s=null){const i=t[lm]||(t[lm]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=dC(e);if(r){const c=i[e]=gC(r,s);cC(t,a,c,l)}else o&&(uC(t,a,o,l),i[e]=void 0)}}const cm=/(?:Once|Passive|Capture)$/;function dC(t){let e;if(cm.test(t)){e={};let r;for(;r=t.match(cm);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):xi(t.slice(2)),e]}let Ju=0;const fC=Promise.resolve(),pC=()=>Ju||(fC.then(()=>Ju=0),Ju=Date.now());function gC(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Yt(mC(r,n.value),e,5,[r])};return n.value=t,n.attached=pC(),n}function mC(t,e){if(ee(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const um=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,_C=(t,e,n,r,s,i,o,a,l)=>{const c=s==="svg";e==="class"?nC(t,r,c):e==="style"?iC(t,n,r):Sc(e)?of(e)||hC(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):yC(t,e,r,c))?lC(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),aC(t,e,r,c))};function yC(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&um(e)&&ce(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return um(e)&&qe(n)?!1:e in t}const wE=new WeakMap,TE=new WeakMap,Ll=Symbol("_moveCb"),hm=Symbol("_enterCb"),IE={name:"TransitionGroup",props:Qe({},ZS,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Ni(),r=Qv();let s,i;return eE(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!bC(s[0].el,n.vnode.el,o))return;s.forEach(wC),s.forEach(TC);const a=s.filter(IC);EE(),a.forEach(l=>{const c=l.el,u=c.style;qn(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=c[Ll]=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",h),c[Ll]=null,dr(c,o))};c.addEventListener("transitionend",h)})}),()=>{const o=me(t),a=yE(o);let l=o.tag||Vt;s=i,i=e.default?If(e.default()):[];for(let c=0;c<i.length;c++){const u=i[c];u.key!=null&&Mo(u,Do(u,a,r,n))}if(s)for(let c=0;c<s.length;c++){const u=s[c];Mo(u,Do(u,a,r,n)),wE.set(u,u.el.getBoundingClientRect())}return St(l,null,i)}}},vC=t=>delete t.mode;IE.props;const EC=IE;function wC(t){const e=t.el;e[Ll]&&e[Ll](),e[hm]&&e[hm]()}function TC(t){TE.set(t,t.el.getBoundingClientRect())}function IC(t){const e=wE.get(t),n=TE.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function bC(t,e,n){const r=t.cloneNode(),s=t[fi];s&&s.forEach(a=>{a.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&r.classList.add(a)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=vE(r);return i.removeChild(r),o}const AC=Qe({patchProp:_C},JS);let dm;function SC(){return dm||(dm=RS(AC))}const bE=(...t)=>{const e=SC().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=RC(r);if(!s)return;const i=e._component;!ce(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,CC(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function CC(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function RC(t){return qe(t)?document.querySelector(t):t}function $c(t,e,n,r){return Object.defineProperty(t,e,{get:n,set:r,enumerable:!0}),t}function dB(t,e){for(const n in e)$c(t,n,e[n]);return t}const pi=Zn(!1);let Bc;function PC(t,e){const n=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(t)||/(opr)[\/]([\w.]+)/.exec(t)||/(vivaldi)[\/]([\w.]+)/.exec(t)||/(chrome|crios)[\/]([\w.]+)/.exec(t)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(firefox|fxios)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(t)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[2]||n[4]||"0",versionNumber:n[4]||n[2]||"0",platform:e[0]||""}}function kC(t){return/(ipad)/.exec(t)||/(ipod)/.exec(t)||/(windows phone)/.exec(t)||/(iphone)/.exec(t)||/(kindle)/.exec(t)||/(silk)/.exec(t)||/(android)/.exec(t)||/(win)/.exec(t)||/(mac)/.exec(t)||/(linux)/.exec(t)||/(cros)/.exec(t)||/(playbook)/.exec(t)||/(bb)/.exec(t)||/(blackberry)/.exec(t)||[]}const AE="ontouchstart"in window||window.navigator.maxTouchPoints>0;function xC(t){Bc={is:{...t}},delete t.mac,delete t.desktop;const e=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(t,{mobile:!0,ios:!0,platform:e,[e]:!0})}function NC(t){const e=t.toLowerCase(),n=kC(e),r=PC(e,n),s={};r.browser&&(s[r.browser]=!0,s.version=r.version,s.versionNumber=parseInt(r.versionNumber,10)),r.platform&&(s[r.platform]=!0);const i=s.android||s.ios||s.bb||s.blackberry||s.ipad||s.iphone||s.ipod||s.kindle||s.playbook||s.silk||s["windows phone"];return i===!0||e.indexOf("mobile")>-1?(s.mobile=!0,s.edga||s.edgios?(s.edge=!0,r.browser="edge"):s.crios?(s.chrome=!0,r.browser="chrome"):s.fxios&&(s.firefox=!0,r.browser="firefox")):s.desktop=!0,(s.ipod||s.ipad||s.iphone)&&(s.ios=!0),s["windows phone"]&&(s.winphone=!0,delete s["windows phone"]),(s.chrome||s.opr||s.safari||s.vivaldi||s.mobile===!0&&s.ios!==!0&&i!==!0)&&(s.webkit=!0),s.edg&&(r.browser="edgechromium",s.edgeChromium=!0),(s.safari&&s.blackberry||s.bb)&&(r.browser="blackberry",s.blackberry=!0),s.safari&&s.playbook&&(r.browser="playbook",s.playbook=!0),s.opr&&(r.browser="opera",s.opera=!0),s.safari&&s.android&&(r.browser="android",s.android=!0),s.safari&&s.kindle&&(r.browser="kindle",s.kindle=!0),s.safari&&s.silk&&(r.browser="silk",s.silk=!0),s.vivaldi&&(r.browser="vivaldi",s.vivaldi=!0),s.name=r.browser,s.platform=r.platform,e.indexOf("electron")>-1?s.electron=!0:document.location.href.indexOf("-extension://")>-1?s.bex=!0:(window.Capacitor!==void 0?(s.capacitor=!0,s.nativeMobile=!0,s.nativeMobileWrapper="capacitor"):(window._cordovaNative!==void 0||window.cordova!==void 0)&&(s.cordova=!0,s.nativeMobile=!0,s.nativeMobileWrapper="cordova"),AE===!0&&s.mac===!0&&(s.desktop===!0&&s.safari===!0||s.nativeMobile===!0&&s.android!==!0&&s.ios!==!0&&s.ipad!==!0)&&xC(s)),s}const fm=navigator.userAgent||navigator.vendor||window.opera,OC={has:{touch:!1,webStorage:!1},within:{iframe:!1}},Gt={userAgent:fm,is:NC(fm),has:{touch:AE},within:{iframe:window.self!==window.top}},Qh={install(t){const{$q:e}=t;pi.value===!0?(t.onSSRHydrated.push(()=>{Object.assign(e.platform,Gt),pi.value=!1,Bc=void 0}),e.platform=Jn(this)):e.platform=this}};{let t;$c(Gt.has,"webStorage",()=>{if(t!==void 0)return t;try{if(window.localStorage)return t=!0,!0}catch{}return t=!1,!1}),Gt.is.ios===!0&&window.navigator.vendor.toLowerCase().indexOf("apple"),pi.value===!0?Object.assign(Qh,Gt,Bc,OC):Object.assign(Qh,Gt)}var jc=(t,e)=>{const n=Jn(t);for(const r in t)$c(e,r,()=>n[r],s=>{n[r]=s});return e};const ps={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const t=Object.defineProperty({},"passive",{get(){Object.assign(ps,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,t),window.removeEventListener("qtest",null,t)}catch{}function Fo(){}function fB(t){return t.button===0}function DC(t){return t.touches&&t.touches[0]?t=t.touches[0]:t.changedTouches&&t.changedTouches[0]?t=t.changedTouches[0]:t.targetTouches&&t.targetTouches[0]&&(t=t.targetTouches[0]),{top:t.clientY,left:t.clientX}}function pB(t){if(t.path)return t.path;if(t.composedPath)return t.composedPath();const e=[];let n=t.target;for(;n;){if(e.push(n),n.tagName==="HTML")return e.push(document),e.push(window),e;n=n.parentElement}}function SE(t){t.stopPropagation()}function Yh(t){t.cancelable!==!1&&t.preventDefault()}function Fs(t){t.cancelable!==!1&&t.preventDefault(),t.stopPropagation()}function gB(t,e){if(t===void 0||e===!0&&t.__dragPrevented===!0)return;const n=e===!0?r=>{r.__dragPrevented=!0,r.addEventListener("dragstart",Yh,ps.notPassiveCapture)}:r=>{delete r.__dragPrevented,r.removeEventListener("dragstart",Yh,ps.notPassiveCapture)};t.querySelectorAll("a, img").forEach(n)}function MC(t,e,n){const r=`__q_${e}_evt`;t[r]=t[r]!==void 0?t[r].concat(n):n,n.forEach(s=>{s[0].addEventListener(s[1],t[s[2]],ps[s[3]])})}function LC(t,e){const n=`__q_${e}_evt`;t[n]!==void 0&&(t[n].forEach(r=>{r[0].removeEventListener(r[1],t[r[2]],ps[r[3]])}),t[n]=void 0)}function VC(t,e=250,n){let r=null;function s(){const i=arguments,o=()=>{r=null,n!==!0&&t.apply(this,i)};r!==null?clearTimeout(r):n===!0&&t.apply(this,i),r=setTimeout(o,e)}return s.cancel=()=>{r!==null&&clearTimeout(r)},s}const Zu=["sm","md","lg","xl"],{passive:pm}=ps;var FC=jc({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:Fo,setDebounce:Fo,install({$q:t,onSSRHydrated:e}){if(t.screen=this,this.__installed===!0){t.config.screen!==void 0&&(t.config.screen.bodyClasses===!1?document.body.classList.remove(`screen--${this.name}`):this.__update(!0));return}const{visualViewport:n}=window,r=n||window,s=document.scrollingElement||document.documentElement,i=n===void 0||Gt.is.mobile===!0?()=>[Math.max(window.innerWidth,s.clientWidth),Math.max(window.innerHeight,s.clientHeight)]:()=>[n.width*n.scale+window.innerWidth-s.clientWidth,n.height*n.scale+window.innerHeight-s.clientHeight],o=t.config.screen!==void 0&&t.config.screen.bodyClasses===!0;this.__update=h=>{const[d,f]=i();if(f!==this.height&&(this.height=f),d!==this.width)this.width=d;else if(h!==!0)return;let g=this.sizes;this.gt.xs=d>=g.sm,this.gt.sm=d>=g.md,this.gt.md=d>=g.lg,this.gt.lg=d>=g.xl,this.lt.sm=d<g.sm,this.lt.md=d<g.md,this.lt.lg=d<g.lg,this.lt.xl=d<g.xl,this.xs=this.lt.sm,this.sm=this.gt.xs===!0&&this.lt.md===!0,this.md=this.gt.sm===!0&&this.lt.lg===!0,this.lg=this.gt.md===!0&&this.lt.xl===!0,this.xl=this.gt.lg,g=this.xs===!0&&"xs"||this.sm===!0&&"sm"||this.md===!0&&"md"||this.lg===!0&&"lg"||"xl",g!==this.name&&(o===!0&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${g}`)),this.name=g)};let a,l={},c=16;this.setSizes=h=>{Zu.forEach(d=>{h[d]!==void 0&&(l[d]=h[d])})},this.setDebounce=h=>{c=h};const u=()=>{const h=getComputedStyle(document.body);h.getPropertyValue("--q-size-sm")&&Zu.forEach(d=>{this.sizes[d]=parseInt(h.getPropertyValue(`--q-size-${d}`),10)}),this.setSizes=d=>{Zu.forEach(f=>{d[f]&&(this.sizes[f]=d[f])}),this.__update(!0)},this.setDebounce=d=>{a!==void 0&&r.removeEventListener("resize",a,pm),a=d>0?VC(this.__update,d):this.__update,r.addEventListener("resize",a,pm)},this.setDebounce(c),Object.keys(l).length!==0?(this.setSizes(l),l=void 0):this.__update(),o===!0&&this.name==="xs"&&document.body.classList.add("screen--xs")};pi.value===!0?e.push(u):u()}});const gt=jc({isActive:!1,mode:!1},{__media:void 0,set(t){gt.mode=t,t==="auto"?(gt.__media===void 0&&(gt.__media=window.matchMedia("(prefers-color-scheme: dark)"),gt.__updateMedia=()=>{gt.set("auto")},gt.__media.addListener(gt.__updateMedia)),t=gt.__media.matches):gt.__media!==void 0&&(gt.__media.removeListener(gt.__updateMedia),gt.__media=void 0),gt.isActive=t===!0,document.body.classList.remove(`body--${t===!0?"light":"dark"}`),document.body.classList.add(`body--${t===!0?"dark":"light"}`)},toggle(){gt.set(gt.isActive===!1)},install({$q:t,ssrContext:e}){const{dark:n}=t.config;t.dark=this,this.__installed!==!0&&this.set(n!==void 0?n:!1)}}),CE=()=>!0;function UC(t){return typeof t=="string"&&t!==""&&t!=="/"&&t!=="#/"}function $C(t){return t.startsWith("#")===!0&&(t=t.substring(1)),t.startsWith("/")===!1&&(t="/"+t),t.endsWith("/")===!0&&(t=t.substring(0,t.length-1)),"#"+t}function BC(t){if(t.backButtonExit===!1)return()=>!1;if(t.backButtonExit==="*")return CE;const e=["#/"];return Array.isArray(t.backButtonExit)===!0&&e.push(...t.backButtonExit.filter(UC).map($C)),()=>e.includes(window.location.hash)}var jC={__history:[],add:Fo,remove:Fo,install({$q:t}){if(this.__installed===!0)return;const{cordova:e,capacitor:n}=Gt.is;if(e!==!0&&n!==!0)return;const r=t.config[e===!0?"cordova":"capacitor"];if(r!==void 0&&r.backButton===!1||n===!0&&(window.Capacitor===void 0||window.Capacitor.Plugins.App===void 0))return;this.add=o=>{o.condition===void 0&&(o.condition=CE),this.__history.push(o)},this.remove=o=>{const a=this.__history.indexOf(o);a>=0&&this.__history.splice(a,1)};const s=BC(Object.assign({backButtonExit:!0},r)),i=()=>{if(this.__history.length){const o=this.__history[this.__history.length-1];o.condition()===!0&&(this.__history.pop(),o.handler())}else s()===!0?navigator.app.exitApp():window.history.back()};e===!0?document.addEventListener("deviceready",()=>{document.addEventListener("backbutton",i,!1)}):window.Capacitor.Plugins.App.addListener("backButton",i)}},gm={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:t=>t?`Expand "${t}"`:"Expand",collapse:t=>t?`Collapse "${t}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days"},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:t=>t===1?"1 record selected.":(t===0?"No":t)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(t,e,n)=>t+"-"+e+" of "+n,columns:"Columns"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function mm(){const t=Array.isArray(navigator.languages)===!0&&navigator.languages.length!==0?navigator.languages[0]:navigator.language;if(typeof t=="string")return t.split(/[-_]/).map((e,n)=>n===0?e.toLowerCase():n>1||e.length<4?e.toUpperCase():e[0].toUpperCase()+e.slice(1).toLowerCase()).join("-")}const tn=jc({__langPack:{}},{getLocale:mm,set(t=gm,e){const n={...t,rtl:t.rtl===!0,getLocale:mm};{if(n.set=tn.set,tn.__langConfig===void 0||tn.__langConfig.noHtmlAttrs!==!0){const r=document.documentElement;r.setAttribute("dir",n.rtl===!0?"rtl":"ltr"),r.setAttribute("lang",n.isoName)}Object.assign(tn.__langPack,n),tn.props=n,tn.isoName=n.isoName,tn.nativeName=n.nativeName}},install({$q:t,lang:e,ssrContext:n}){t.lang=tn.__langPack,tn.__langConfig=t.config.lang,this.__installed===!0?e!==void 0&&this.set(e):this.set(e||gm)}});function qC(t,e,n=document.body){if(typeof t!="string")throw new TypeError("Expected a string as propName");if(typeof e!="string")throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${t}`,e)}let RE=!1;function WC(t){RE=t.isComposing===!0}function HC(t){return RE===!0||t!==Object(t)||t.isComposing===!0||t.qKeyEvent===!0}function Xh(t,e){return HC(t)===!0?!1:[].concat(e).includes(t.keyCode)}function PE(t){if(t.ios===!0)return"ios";if(t.android===!0)return"android"}function zC({is:t,has:e,within:n},r){const s=[t.desktop===!0?"desktop":"mobile",`${e.touch===!1?"no-":""}touch`];if(t.mobile===!0){const i=PE(t);i!==void 0&&s.push("platform-"+i)}if(t.nativeMobile===!0){const i=t.nativeMobileWrapper;s.push(i),s.push("native-mobile"),t.ios===!0&&(r[i]===void 0||r[i].iosStatusBarPadding!==!1)&&s.push("q-ios-padding")}else t.electron===!0?s.push("electron"):t.bex===!0&&s.push("bex");return n.iframe===!0&&s.push("within-iframe"),s}function KC(){const{is:t}=Gt,e=document.body.className,n=new Set(e.replace(/ {2}/g," ").split(" "));if(Bc!==void 0)n.delete("desktop"),n.add("platform-ios"),n.add("mobile");else if(t.nativeMobile!==!0&&t.electron!==!0&&t.bex!==!0){if(t.desktop===!0)n.delete("mobile"),n.delete("platform-ios"),n.delete("platform-android"),n.add("desktop");else if(t.mobile===!0){n.delete("desktop"),n.add("mobile");const s=PE(t);s!==void 0?(n.add(`platform-${s}`),n.delete(`platform-${s==="ios"?"android":"ios"}`)):(n.delete("platform-ios"),n.delete("platform-android"))}}Gt.has.touch===!0&&(n.delete("no-touch"),n.add("touch")),Gt.within.iframe===!0&&n.add("within-iframe");const r=Array.from(n).join(" ");e!==r&&(document.body.className=r)}function GC(t){for(const e in t)qC(e,t[e])}var QC={install(t){if(this.__installed!==!0){if(pi.value===!0)KC();else{const{$q:e}=t;e.config.brand!==void 0&&GC(e.config.brand);const n=zC(Gt,e.config);document.body.classList.add.apply(document.body.classList,n)}Gt.is.ios===!0&&document.body.addEventListener("touchstart",Fo),window.addEventListener("keydown",WC,!0)}}},YC={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}};const Vl=jc({iconMapFn:null,__icons:{}},{set(t,e){const n={...t,rtl:t.rtl===!0};n.set=Vl.set,Object.assign(Vl.__icons,n)},install({$q:t,iconSet:e,ssrContext:n}){t.config.iconMapFn!==void 0&&(this.iconMapFn=t.config.iconMapFn),t.iconSet=this.__icons,$c(t,"iconMapFn",()=>this.iconMapFn,r=>{this.iconMapFn=r}),this.__installed===!0?e!==void 0&&this.set(e):this.set(e||YC)}}),XC="_q_",mB="_q_l_",_B="_q_pc_",yB="_q_fo_",vB="_q_tabs_",EB=()=>{},Fl={};let kE=!1;function JC(){kE=!0}function eh(t,e){if(t===e)return!0;if(t!==null&&e!==null&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;let n,r;if(t.constructor===Array){if(n=t.length,n!==e.length)return!1;for(r=n;r--!==0;)if(eh(t[r],e[r])!==!0)return!1;return!0}if(t.constructor===Map){if(t.size!==e.size)return!1;let i=t.entries();for(r=i.next();r.done!==!0;){if(e.has(r.value[0])!==!0)return!1;r=i.next()}for(i=t.entries(),r=i.next();r.done!==!0;){if(eh(r.value[1],e.get(r.value[0]))!==!0)return!1;r=i.next()}return!0}if(t.constructor===Set){if(t.size!==e.size)return!1;const i=t.entries();for(r=i.next();r.done!==!0;){if(e.has(r.value[0])!==!0)return!1;r=i.next()}return!0}if(t.buffer!=null&&t.buffer.constructor===ArrayBuffer){if(n=t.length,n!==e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();const s=Object.keys(t).filter(i=>t[i]!==void 0);if(n=s.length,n!==Object.keys(e).filter(i=>e[i]!==void 0).length)return!1;for(r=n;r--!==0;){const i=s[r];if(eh(t[i],e[i])!==!0)return!1}return!0}return t!==t&&e!==e}function Uo(t){return t!==null&&typeof t=="object"&&Array.isArray(t)!==!0}function wB(t){return Object.prototype.toString.call(t)==="[object Date]"}function TB(t){return typeof t=="number"&&isFinite(t)}const _m=[Qh,QC,gt,FC,jC,tn,Vl];function ZC(t,e){const n=bE(t);n.config.globalProperties=e.config.globalProperties;const{reload:r,...s}=e._context;return Object.assign(n._context,s),n}function ym(t,e){e.forEach(n=>{n.install(t),n.__installed=!0})}function eR(t,e,n){t.config.globalProperties.$q=n.$q,t.provide(XC,n.$q),ym(n,_m),e.components!==void 0&&Object.values(e.components).forEach(r=>{Uo(r)===!0&&r.name!==void 0&&t.component(r.name,r)}),e.directives!==void 0&&Object.values(e.directives).forEach(r=>{Uo(r)===!0&&r.name!==void 0&&t.directive(r.name,r)}),e.plugins!==void 0&&ym(n,Object.values(e.plugins).filter(r=>typeof r.install=="function"&&_m.includes(r)===!1)),pi.value===!0&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach(r=>{r()}),n.$q.onSSRHydrated=()=>{}})}var tR=function(t,e={}){const n={version:"2.14.3"};kE===!1?(e.config!==void 0&&Object.assign(Fl,e.config),n.config={...Fl},JC()):n.config=e.config||{},eR(t,e,{parentApp:t,$q:n,lang:e.lang,iconSet:e.iconSet,onSSRHydrated:[]})},nR={version:"2.14.3",install:tR,lang:tn,iconSet:Vl};const rR=Oc({__name:"App",setup(t){return(e,n)=>{const r=QA("router-view");return Rf(),Pf(r)}}});function IB(t){return t}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const zs=typeof window!="undefined";function sR(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Se=Object.assign;function th(t,e){const n={};for(const r in e){const s=e[r];n[r]=hn(s)?s.map(t):t(s)}return n}const yo=()=>{},hn=Array.isArray,iR=/\/$/,oR=t=>t.replace(iR,"");function nh(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=uR(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function aR(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function vm(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function lR(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&gi(e.matched[r],n.matched[s])&&xE(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function gi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function xE(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!cR(t[n],e[n]))return!1;return!0}function cR(t,e){return hn(t)?Em(t,e):hn(e)?Em(e,t):t===e}function Em(t,e){return hn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function uR(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var $o;(function(t){t.pop="pop",t.push="push"})($o||($o={}));var vo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(vo||(vo={}));function hR(t){if(!t)if(zs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),oR(t)}const dR=/^[^#]+#/;function fR(t,e){return t.replace(dR,"#")+e}function pR(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const qc=()=>({left:window.pageXOffset,top:window.pageYOffset});function gR(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=pR(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function wm(t,e){return(history.state?history.state.position-e:-1)+t}const Jh=new Map;function mR(t,e){Jh.set(t,e)}function _R(t){const e=Jh.get(t);return Jh.delete(t),e}let yR=()=>location.protocol+"//"+location.host;function NE(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),vm(l,"")}return vm(n,t)+r+s}function vR(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const f=NE(t,location),g=n.value,y=e.value;let _=0;if(d){if(n.value=f,e.value=d,o&&o===g){o=null;return}_=y?d.position-y.position:0}else r(f);s.forEach(E=>{E(n.value,g,{delta:_,type:$o.pop,direction:_?_>0?vo.forward:vo.back:vo.unknown})})};function l(){o=n.value}function c(d){s.push(d);const f=()=>{const g=s.indexOf(d);g>-1&&s.splice(g,1)};return i.push(f),f}function u(){const{history:d}=window;!d.state||d.replaceState(Se({},d.state,{scroll:qc()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Tm(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?qc():null}}function ER(t){const{history:e,location:n}=window,r={value:NE(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:yR()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){const u=Se({},e.state,Tm(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=Se({},s.value,e.state,{forward:l,scroll:qc()});i(u.current,u,!0);const h=Se({},Tm(r.value,l,null),{position:u.position+1},c);i(l,h,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function wR(t){t=hR(t);const e=ER(t),n=vR(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Se({location:"",base:t,go:r,createHref:fR.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function TR(t){return typeof t=="string"||t&&typeof t=="object"}function OE(t){return typeof t=="string"||typeof t=="symbol"}const ur={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},DE=Symbol("");var Im;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Im||(Im={}));function mi(t,e){return Se(new Error,{type:t,[DE]:!0},e)}function Bn(t,e){return t instanceof Error&&DE in t&&(e==null||!!(t.type&e))}const bm="[^/]+?",IR={sensitive:!1,strict:!1,start:!0,end:!0},bR=/[.+*?^${}()[\]/\\]/g;function AR(t,e){const n=Se({},IR,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(bR,"\\$&"),f+=40;else if(d.type===1){const{value:g,repeatable:y,optional:_,regexp:E}=d;i.push({name:g,repeatable:y,optional:_});const S=E||bm;if(S!==bm){f+=10;try{new RegExp(`(${S})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${g}" (${S}): `+k.message)}}let C=y?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;h||(C=_&&c.length<2?`(?:/${C})`:"/"+C),_&&(C+="?"),s+=C,f+=20,_&&(f+=-8),y&&(f+=-20),S===".*"&&(f+=-50)}u.push(f)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",g=i[d-1];h[g.name]=f&&g.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:g,repeatable:y,optional:_}=f,E=g in c?c[g]:"";if(hn(E)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const S=hn(E)?E.join("/"):E;if(!S)if(_)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=S}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function SR(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function CR(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=SR(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Am(r))return 1;if(Am(s))return-1}return s.length-r.length}function Am(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const RR={type:0,value:""},PR=/[a-zA-Z0-9_]/;function kR(t){if(!t)return[[]];if(t==="/")return[[RR]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function h(){!c||(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:PR.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function xR(t,e,n){const r=AR(kR(t.path),n),s=Se(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function NR(t,e){const n=[],r=new Map;e=Rm({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const f=!d,g=OR(u);g.aliasOf=d&&d.record;const y=Rm(e,u),_=[g];if("alias"in u){const C=typeof u.alias=="string"?[u.alias]:u.alias;for(const k of C)_.push(Se({},g,{components:d?d.record.components:g.components,path:k,aliasOf:d?d.record:g}))}let E,S;for(const C of _){const{path:k}=C;if(h&&k[0]!=="/"){const N=h.record.path,x=N[N.length-1]==="/"?"":"/";C.path=h.record.path+(k&&x+k)}if(E=xR(C,h,y),d?d.alias.push(E):(S=S||E,S!==E&&S.alias.push(E),f&&u.name&&!Cm(E)&&o(u.name)),g.children){const N=g.children;for(let x=0;x<N.length;x++)i(N[x],E,d&&d.children[x])}d=d||E,(E.record.components&&Object.keys(E.record.components).length||E.record.name||E.record.redirect)&&l(E)}return S?()=>{o(S)}:yo}function o(u){if(OE(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&CR(u,n[h])>=0&&(u.record.path!==n[h].record.path||!ME(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Cm(u)&&r.set(u.record.name,u)}function c(u,h){let d,f={},g,y;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw mi(1,{location:u});y=d.record.name,f=Se(Sm(h.params,d.keys.filter(S=>!S.optional).map(S=>S.name)),u.params&&Sm(u.params,d.keys.map(S=>S.name))),g=d.stringify(f)}else if("path"in u)g=u.path,d=n.find(S=>S.re.test(g)),d&&(f=d.parse(g),y=d.record.name);else{if(d=h.name?r.get(h.name):n.find(S=>S.re.test(h.path)),!d)throw mi(1,{location:u,currentLocation:h});y=d.record.name,f=Se({},h.params,u.params),g=d.stringify(f)}const _=[];let E=d;for(;E;)_.unshift(E.record),E=E.parent;return{name:y,path:g,params:f,matched:_,meta:MR(_)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Sm(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function OR(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:DR(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function DR(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Cm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function MR(t){return t.reduce((e,n)=>Se(e,n.meta),{})}function Rm(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ME(t,e){return e.children.some(n=>n===t||ME(t,n))}const LE=/#/g,LR=/&/g,VR=/\//g,FR=/=/g,UR=/\?/g,VE=/\+/g,$R=/%5B/g,BR=/%5D/g,FE=/%5E/g,jR=/%60/g,UE=/%7B/g,qR=/%7C/g,$E=/%7D/g,WR=/%20/g;function Nf(t){return encodeURI(""+t).replace(qR,"|").replace($R,"[").replace(BR,"]")}function HR(t){return Nf(t).replace(UE,"{").replace($E,"}").replace(FE,"^")}function Zh(t){return Nf(t).replace(VE,"%2B").replace(WR,"+").replace(LE,"%23").replace(LR,"%26").replace(jR,"`").replace(UE,"{").replace($E,"}").replace(FE,"^")}function zR(t){return Zh(t).replace(FR,"%3D")}function KR(t){return Nf(t).replace(LE,"%23").replace(UR,"%3F")}function GR(t){return t==null?"":KR(t).replace(VR,"%2F")}function Ul(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function QR(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(VE," "),o=i.indexOf("="),a=Ul(o<0?i:i.slice(0,o)),l=o<0?null:Ul(i.slice(o+1));if(a in e){let c=e[a];hn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Pm(t){let e="";for(let n in t){const r=t[n];if(n=zR(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(hn(r)?r.map(i=>i&&Zh(i)):[r&&Zh(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function YR(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=hn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const XR=Symbol(""),km=Symbol(""),Wc=Symbol(""),BE=Symbol(""),ed=Symbol("");function Gi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function yr(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(mi(4,{from:n,to:e})):h instanceof Error?a(h):TR(h)?a(mi(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(r&&r.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function rh(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(JR(a)){const c=(a.__vccOpts||a)[e];c&&s.push(yr(c,n,r,i,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=sR(c)?c.default:c;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&yr(d,n,r,i,o)()}))}}return s}function JR(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function xm(t){const e=$t(Wc),n=$t(BE),r=ne(()=>e.resolve(Cr(t.to))),s=ne(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(gi.bind(null,u));if(d>-1)return d;const f=Nm(l[c-2]);return c>1&&Nm(u)===f&&h[h.length-1].path!==f?h.findIndex(gi.bind(null,l[c-2])):d}),i=ne(()=>s.value>-1&&nP(n.params,r.value.params)),o=ne(()=>s.value>-1&&s.value===n.matched.length-1&&xE(n.params,r.value.params));function a(l={}){return tP(l)?e[Cr(t.replace)?"replace":"push"](Cr(t.to)).catch(yo):Promise.resolve()}return{route:r,href:ne(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const ZR=Oc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:xm,setup(t,{slots:e}){const n=Jn(xm(t)),{options:r}=$t(Wc),s=ne(()=>({[Om(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Om(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:te("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),eP=ZR;function tP(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function nP(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!hn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Nm(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Om=(t,e,n)=>t!=null?t:e!=null?e:n,rP=Oc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=$t(ed),s=ne(()=>t.route||r.value),i=$t(km,0),o=ne(()=>{let c=Cr(i);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=ne(()=>s.value.matched[o.value]);gl(km,ne(()=>o.value+1)),gl(XR,a),gl(ed,s);const l=Zn();return fo(()=>[l.value,a.value,t.name],([c,u,h],[d,f,g])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!gi(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Dm(n.default,{Component:d,route:c});const f=h.props[u],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,_=te(d,Se({},g,e,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Dm(n.default,{Component:_,route:c})||_}}});function Dm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const sP=rP;function iP(t){const e=NR(t.routes,t),n=t.parseQuery||QR,r=t.stringifyQuery||Pm,s=t.history,i=Gi(),o=Gi(),a=Gi(),l=xA(ur);let c=ur;zs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=th.bind(null,I=>""+I),h=th.bind(null,GR),d=th.bind(null,Ul);function f(I,H){let j,Q;return OE(I)?(j=e.getRecordMatcher(I),Q=H):Q=I,e.addRoute(Q,j)}function g(I){const H=e.getRecordMatcher(I);H&&e.removeRoute(H)}function y(){return e.getRoutes().map(I=>I.record)}function _(I){return!!e.getRecordMatcher(I)}function E(I,H){if(H=Se({},H||l.value),typeof I=="string"){const m=nh(n,I,H.path),v=e.resolve({path:m.path},H),b=s.createHref(m.fullPath);return Se(m,v,{params:d(v.params),hash:Ul(m.hash),redirectedFrom:void 0,href:b})}let j;if("path"in I)j=Se({},I,{path:nh(n,I.path,H.path).path});else{const m=Se({},I.params);for(const v in m)m[v]==null&&delete m[v];j=Se({},I,{params:h(m)}),H.params=h(H.params)}const Q=e.resolve(j,H),be=I.hash||"";Q.params=u(d(Q.params));const Ue=aR(r,Se({},I,{hash:HR(be),path:Q.path})),p=s.createHref(Ue);return Se({fullPath:Ue,hash:be,query:r===Pm?YR(I.query):I.query||{}},Q,{redirectedFrom:void 0,href:p})}function S(I){return typeof I=="string"?nh(n,I,l.value.path):Se({},I)}function C(I,H){if(c!==I)return mi(8,{from:H,to:I})}function k(I){return G(I)}function N(I){return k(Se(S(I),{replace:!0}))}function x(I){const H=I.matched[I.matched.length-1];if(H&&H.redirect){const{redirect:j}=H;let Q=typeof j=="function"?j(I):j;return typeof Q=="string"&&(Q=Q.includes("?")||Q.includes("#")?Q=S(Q):{path:Q},Q.params={}),Se({query:I.query,hash:I.hash,params:"path"in Q?{}:I.params},Q)}}function G(I,H){const j=c=E(I),Q=l.value,be=I.state,Ue=I.force,p=I.replace===!0,m=x(j);if(m)return G(Se(S(m),{state:typeof m=="object"?Se({},be,m.state):be,force:Ue,replace:p}),H||j);const v=j;v.redirectedFrom=H;let b;return!Ue&&lR(r,Q,j)&&(b=mi(16,{to:v,from:Q}),vn(Q,Q,!0,!1)),(b?Promise.resolve(b):Y(v,Q)).catch(T=>Bn(T)?Bn(T,2)?T:ar(T):Ie(T,v,Q)).then(T=>{if(T){if(Bn(T,2))return G(Se({replace:p},S(T.to),{state:typeof T.to=="object"?Se({},be,T.to.state):be,force:Ue}),H||v)}else T=B(v,Q,!0,p,be);return K(v,Q,T),T})}function P(I,H){const j=C(I,H);return j?Promise.reject(j):Promise.resolve()}function L(I){const H=Ls.values().next().value;return H&&typeof H.runWithContext=="function"?H.runWithContext(I):I()}function Y(I,H){let j;const[Q,be,Ue]=oP(I,H);j=rh(Q.reverse(),"beforeRouteLeave",I,H);for(const m of Q)m.leaveGuards.forEach(v=>{j.push(yr(v,I,H))});const p=P.bind(null,I,H);return j.push(p),ft(j).then(()=>{j=[];for(const m of i.list())j.push(yr(m,I,H));return j.push(p),ft(j)}).then(()=>{j=rh(be,"beforeRouteUpdate",I,H);for(const m of be)m.updateGuards.forEach(v=>{j.push(yr(v,I,H))});return j.push(p),ft(j)}).then(()=>{j=[];for(const m of Ue)if(m.beforeEnter)if(hn(m.beforeEnter))for(const v of m.beforeEnter)j.push(yr(v,I,H));else j.push(yr(m.beforeEnter,I,H));return j.push(p),ft(j)}).then(()=>(I.matched.forEach(m=>m.enterCallbacks={}),j=rh(Ue,"beforeRouteEnter",I,H),j.push(p),ft(j))).then(()=>{j=[];for(const m of o.list())j.push(yr(m,I,H));return j.push(p),ft(j)}).catch(m=>Bn(m,8)?m:Promise.reject(m))}function K(I,H,j){a.list().forEach(Q=>L(()=>Q(I,H,j)))}function B(I,H,j,Q,be){const Ue=C(I,H);if(Ue)return Ue;const p=H===ur,m=zs?history.state:{};j&&(Q||p?s.replace(I.fullPath,Se({scroll:p&&m&&m.scroll},be)):s.push(I.fullPath,be)),l.value=I,vn(I,H,j,p),ar()}let ie;function W(){ie||(ie=s.listen((I,H,j)=>{if(!$a.listening)return;const Q=E(I),be=x(Q);if(be){G(Se(be,{replace:!0}),Q).catch(yo);return}c=Q;const Ue=l.value;zs&&mR(wm(Ue.fullPath,j.delta),qc()),Y(Q,Ue).catch(p=>Bn(p,12)?p:Bn(p,2)?(G(p.to,Q).then(m=>{Bn(m,20)&&!j.delta&&j.type===$o.pop&&s.go(-1,!1)}).catch(yo),Promise.reject()):(j.delta&&s.go(-j.delta,!1),Ie(p,Q,Ue))).then(p=>{p=p||B(Q,Ue,!1),p&&(j.delta&&!Bn(p,8)?s.go(-j.delta,!1):j.type===$o.pop&&Bn(p,20)&&s.go(-1,!1)),K(Q,Ue,p)}).catch(yo)}))}let he=Gi(),de=Gi(),Re;function Ie(I,H,j){ar(I);const Q=de.list();return Q.length?Q.forEach(be=>be(I,H,j)):console.error(I),Promise.reject(I)}function $n(){return Re&&l.value!==ur?Promise.resolve():new Promise((I,H)=>{he.add([I,H])})}function ar(I){return Re||(Re=!I,W(),he.list().forEach(([H,j])=>I?j(I):H()),he.reset()),I}function vn(I,H,j,Q){const{scrollBehavior:be}=t;if(!zs||!be)return Promise.resolve();const Ue=!j&&_R(wm(I.fullPath,0))||(Q||!j)&&history.state&&history.state.scroll||null;return Ef().then(()=>be(I,H,Ue)).then(p=>p&&gR(p)).catch(p=>Ie(p,I,H))}const Rt=I=>s.go(I);let Ms;const Ls=new Set,$a={currentRoute:l,listening:!0,addRoute:f,removeRoute:g,hasRoute:_,getRoutes:y,resolve:E,options:t,push:k,replace:N,go:Rt,back:()=>Rt(-1),forward:()=>Rt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:de.add,isReady:$n,install(I){const H=this;I.component("RouterLink",eP),I.component("RouterView",sP),I.config.globalProperties.$router=H,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>Cr(l)}),zs&&!Ms&&l.value===ur&&(Ms=!0,k(s.location).catch(be=>{}));const j={};for(const be in ur)Object.defineProperty(j,be,{get:()=>l.value[be],enumerable:!0});I.provide(Wc,H),I.provide(BE,Nv(j)),I.provide(ed,l);const Q=I.unmount;Ls.add(I),I.unmount=function(){Ls.delete(I),Ls.size<1&&(c=ur,ie&&ie(),ie=null,l.value=ur,Ms=!1,Re=!1),Q()}}};function ft(I){return I.reduce((H,j)=>H.then(()=>L(j)),Promise.resolve())}return $a}function oP(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>gi(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>gi(c,l))||s.push(l))}return[n,r,s]}function bB(){return $t(Wc)}var aP=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let jE;const Hc=t=>jE=t,qE=Symbol();function td(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Eo;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Eo||(Eo={}));function AB(){const t=hf(!0),e=t.run(()=>Zn({}));let n=[],r=[];const s=Ur({install(i){Hc(s),s._a=i,i.provide(qE,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!aP?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const WE=()=>{};function Mm(t,e,n,r=WE){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&vv()&&cA(s),s}function Us(t,...e){t.slice().forEach(n=>{n(...e)})}const lP=t=>t();function nd(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];td(s)&&td(r)&&t.hasOwnProperty(n)&&!We(r)&&!Qn(r)?t[n]=nd(s,r):t[n]=r}return t}const cP=Symbol();function uP(t){return!td(t)||!t.hasOwnProperty(cP)}const{assign:fr}=Object;function hP(t){return!!(We(t)&&t.effect)}function dP(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=s?s():{});const u=DA(n.state.value[t]);return fr(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=Ur(ne(()=>{Hc(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return l=HE(t,c,e,n,r,!0),l}function HE(t,e,n={},r,s,i){let o;const a=fr({actions:{}},n),l={deep:!0};let c,u,h=[],d=[],f;const g=r.state.value[t];!i&&!g&&(r.state.value[t]={}),Zn({});let y;function _(P){let L;c=u=!1,typeof P=="function"?(P(r.state.value[t]),L={type:Eo.patchFunction,storeId:t,events:f}):(nd(r.state.value[t],P),L={type:Eo.patchObject,payload:P,storeId:t,events:f});const Y=y=Symbol();Ef().then(()=>{y===Y&&(c=!0)}),u=!0,Us(h,L,r.state.value[t])}const E=i?function(){const{state:L}=n,Y=L?L():{};this.$patch(K=>{fr(K,Y)})}:WE;function S(){o.stop(),h=[],d=[],r._s.delete(t)}function C(P,L){return function(){Hc(r);const Y=Array.from(arguments),K=[],B=[];function ie(de){K.push(de)}function W(de){B.push(de)}Us(d,{args:Y,name:P,store:N,after:ie,onError:W});let he;try{he=L.apply(this&&this.$id===t?this:N,Y)}catch(de){throw Us(B,de),de}return he instanceof Promise?he.then(de=>(Us(K,de),de)).catch(de=>(Us(B,de),Promise.reject(de))):(Us(K,he),he)}}const k={_p:r,$id:t,$onAction:Mm.bind(null,d),$patch:_,$reset:E,$subscribe(P,L={}){const Y=Mm(h,P,L.detached,()=>K()),K=o.run(()=>fo(()=>r.state.value[t],B=>{(L.flush==="sync"?u:c)&&P({storeId:t,type:Eo.direct,events:f},B)},fr({},l,L)));return Y},$dispose:S},N=Jn(k);r._s.set(t,N);const G=(r._a&&r._a.runWithContext||lP)(()=>r._e.run(()=>(o=hf()).run(e)));for(const P in G){const L=G[P];if(We(L)&&!hP(L)||Qn(L))i||(g&&uP(L)&&(We(L)?L.value=g[P]:nd(L,g[P])),r.state.value[t][P]=L);else if(typeof L=="function"){const Y=C(P,L);G[P]=Y,a.actions[P]=L}}return fr(N,G),fr(me(N),G),Object.defineProperty(N,"$state",{get:()=>r.state.value[t],set:P=>{_(L=>{fr(L,P)})}}),r._p.forEach(P=>{fr(N,o.run(()=>P({store:N,app:r._a,pinia:r,options:a})))}),g&&i&&n.hydrate&&n.hydrate(N.$state,g),c=!0,u=!0,N}function fP(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,l){const c=TS();return a=a||(c?$t(qE,null):null),a&&Hc(a),a=jE,a._s.has(r)||(i?HE(r,e,s,a):dP(r,s,a)),a._s.get(r)}return o.$id=r,o}function SB(t){{t=me(t);const e={};for(const n in t){const r=t[n];(We(r)||Qn(r))&&(e[n]=VA(t,n))}return e}}const rd={xs:18,sm:24,md:32,lg:38,xl:46},Of={size:String};function Df(t,e=rd){return ne(()=>t.size!==void 0?{fontSize:t.size in e?`${e[t.size]}px`:t.size}:null)}const ha=t=>Ur(Oc(t)),pP=t=>Ur(t);function gP(t,e){return t!==void 0&&t()||e}function CB(t,e){if(t!==void 0){const n=t();if(n!=null)return n.slice()}return e}function so(t,e){return t!==void 0?e.concat(t()):e}function mP(t,e){return t===void 0?e:e!==void 0?e.concat(t()):t()}function RB(t,e,n,r,s,i){e.key=r+s;const o=te(t,e,n);return s===!0?Gv(o,i()):o}const Lm="0 0 24 24",Vm=t=>t,sh=t=>`ionicons ${t}`,zE={"mdi-":t=>`mdi ${t}`,"icon-":Vm,"bt-":t=>`bt ${t}`,"eva-":t=>`eva ${t}`,"ion-md":sh,"ion-ios":sh,"ion-logo":sh,"iconfont ":Vm,"ti-":t=>`themify-icon ${t}`,"bi-":t=>`bootstrap-icons ${t}`},KE={o_:"-outlined",r_:"-round",s_:"-sharp"},GE={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},_P=new RegExp("^("+Object.keys(zE).join("|")+")"),yP=new RegExp("^("+Object.keys(KE).join("|")+")"),Fm=new RegExp("^("+Object.keys(GE).join("|")+")"),vP=/^[Mm]\s?[-+]?\.?\d/,EP=/^img:/,wP=/^svguse:/,TP=/^ion-/,IP=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var $l=ha({name:"QIcon",props:{...Of,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(t,{slots:e}){const{proxy:{$q:n}}=Ni(),r=Df(t),s=ne(()=>"q-icon"+(t.left===!0?" on-left":"")+(t.right===!0?" on-right":"")+(t.color!==void 0?` text-${t.color}`:"")),i=ne(()=>{let o,a=t.name;if(a==="none"||!a)return{none:!0};if(n.iconMapFn!==null){const u=n.iconMapFn(a);if(u!==void 0)if(u.icon!==void 0){if(a=u.icon,a==="none"||!a)return{none:!0}}else return{cls:u.cls,content:u.content!==void 0?u.content:" "}}if(vP.test(a)===!0){const[u,h=Lm]=a.split("|");return{svg:!0,viewBox:h,nodes:u.split("&&").map(d=>{const[f,g,y]=d.split("@@");return te("path",{style:g,d:f,transform:y})})}}if(EP.test(a)===!0)return{img:!0,src:a.substring(4)};if(wP.test(a)===!0){const[u,h=Lm]=a.split("|");return{svguse:!0,src:u.substring(7),viewBox:h}}let l=" ";const c=a.match(_P);if(c!==null)o=zE[c[1]](a);else if(IP.test(a)===!0)o=a;else if(TP.test(a)===!0)o=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${a.substring(3)}`;else if(Fm.test(a)===!0){o="notranslate material-symbols";const u=a.match(Fm);u!==null&&(a=a.substring(6),o+=GE[u[1]]),l=a}else{o="notranslate material-icons";const u=a.match(yP);u!==null&&(a=a.substring(2),o+=KE[u[1]]),l=a}return{cls:o,content:l}});return()=>{const o={class:s.value,style:r.value,"aria-hidden":"true",role:"presentation"};return i.value.none===!0?te(t.tag,o,gP(e.default)):i.value.img===!0?te(t.tag,o,so(e.default,[te("img",{src:i.value.src})])):i.value.svg===!0?te(t.tag,o,so(e.default,[te("svg",{viewBox:i.value.viewBox||"0 0 24 24"},i.value.nodes)])):i.value.svguse===!0?te(t.tag,o,so(e.default,[te("svg",{viewBox:i.value.viewBox},[te("use",{"xlink:href":i.value.src})])])):(i.value.cls!==void 0&&(o.class+=" "+i.value.cls),te(t.tag,o,so(e.default,[i.value.content])))}}}),bP=ha({name:"QAvatar",props:{...Of,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(t,{slots:e}){const n=Df(t),r=ne(()=>"q-avatar"+(t.color?` bg-${t.color}`:"")+(t.textColor?` text-${t.textColor} q-chip--colored`:"")+(t.square===!0?" q-avatar--square":t.rounded===!0?" rounded-borders":"")),s=ne(()=>t.fontSize?{fontSize:t.fontSize}:null);return()=>{const i=t.icon!==void 0?[te($l,{name:t.icon})]:void 0;return te("div",{class:r.value,style:n.value},[te("div",{class:"q-avatar__content row flex-center overflow-hidden",style:s.value},mP(e.default,i))])}}});const AP={size:{type:[Number,String],default:"1em"},color:String};function SP(t){return{cSize:ne(()=>t.size in rd?`${rd[t.size]}px`:t.size),classes:ne(()=>"q-spinner"+(t.color?` text-${t.color}`:""))}}var QE=ha({name:"QSpinner",props:{...AP,thickness:{type:Number,default:5}},setup(t){const{cSize:e,classes:n}=SP(t);return()=>te("svg",{class:n.value+" q-spinner-mat",width:e.value,height:e.value,viewBox:"25 25 50 50"},[te("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":t.thickness,"stroke-miterlimit":"10"})])}});function CP(t,e){const n=t.style;for(const r in e)n[r]=e[r]}function PB(t){if(t==null)return;if(typeof t=="string")try{return document.querySelector(t)||void 0}catch{return}const e=Cr(t);if(e)return e.$el||e}function kB(t,e){if(t==null||t.contains(e)===!0)return!0;for(let n=t.nextElementSibling;n!==null;n=n.nextElementSibling)if(n.contains(e))return!0;return!1}function RP(t,e=250){let n=!1,r;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},e),r=t.apply(this,arguments)),r}}function Um(t,e,n,r){n.modifiers.stop===!0&&SE(t);const s=n.modifiers.color;let i=n.modifiers.center;i=i===!0||r===!0;const o=document.createElement("span"),a=document.createElement("span"),l=DC(t),{left:c,top:u,width:h,height:d}=e.getBoundingClientRect(),f=Math.sqrt(h*h+d*d),g=f/2,y=`${(h-f)/2}px`,_=i?y:`${l.left-c-g}px`,E=`${(d-f)/2}px`,S=i?E:`${l.top-u-g}px`;a.className="q-ripple__inner",CP(a,{height:`${f}px`,width:`${f}px`,transform:`translate3d(${_},${S},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${s?" text-"+s:""}`,o.setAttribute("dir","ltr"),o.appendChild(a),e.appendChild(o);const C=()=>{o.remove(),clearTimeout(k)};n.abort.push(C);let k=setTimeout(()=>{a.classList.add("q-ripple__inner--enter"),a.style.transform=`translate3d(${y},${E},0) scale3d(1,1,1)`,a.style.opacity=.2,k=setTimeout(()=>{a.classList.remove("q-ripple__inner--enter"),a.classList.add("q-ripple__inner--leave"),a.style.opacity=0,k=setTimeout(()=>{o.remove(),n.abort.splice(n.abort.indexOf(C),1)},275)},250)},50)}function $m(t,{modifiers:e,value:n,arg:r}){const s=Object.assign({},t.cfg.ripple,e,n);t.modifiers={early:s.early===!0,stop:s.stop===!0,center:s.center===!0,color:s.color||r,keyCodes:[].concat(s.keyCodes||13)}}var PP=pP({name:"ripple",beforeMount(t,e){const n=e.instance.$.appContext.config.globalProperties.$q.config||{};if(n.ripple===!1)return;const r={cfg:n,enabled:e.value!==!1,modifiers:{},abort:[],start(s){r.enabled===!0&&s.qSkipRipple!==!0&&s.type===(r.modifiers.early===!0?"pointerdown":"click")&&Um(s,t,r,s.qKeyEvent===!0)},keystart:RP(s=>{r.enabled===!0&&s.qSkipRipple!==!0&&Xh(s,r.modifiers.keyCodes)===!0&&s.type===`key${r.modifiers.early===!0?"down":"up"}`&&Um(s,t,r,!0)},300)};$m(r,e),t.__qripple=r,MC(r,"main",[[t,"pointerdown","start","passive"],[t,"click","start","passive"],[t,"keydown","keystart","passive"],[t,"keyup","keystart","passive"]])},updated(t,e){if(e.oldValue!==e.value){const n=t.__qripple;n!==void 0&&(n.enabled=e.value!==!1,n.enabled===!0&&Object(e.value)===e.value&&$m(n,e))}},beforeUnmount(t){const e=t.__qripple;e!==void 0&&(e.abort.forEach(n=>{n()}),LC(e,"main"),delete t._qripple)}});const YE={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},kP=Object.keys(YE),xP={align:{type:String,validator:t=>kP.includes(t)}};function NP(t){return ne(()=>{const e=t.align===void 0?t.vertical===!0?"stretch":"left":t.align;return`${t.vertical===!0?"items":"justify"}-${YE[e]}`})}function xB(t){if(Object(t.$parent)===t.$parent)return t.$parent;let{parent:e}=t.$;for(;Object(e)===e;){if(Object(e.proxy)===e.proxy)return e.proxy;e=e.parent}}function OP(t){return t.appContext.config.globalProperties.$router!==void 0}function NB(t){return t.isUnmounted===!0||t.isDeactivated===!0}function Bm(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}function jm(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function DP(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(Array.isArray(s)===!1||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function qm(t,e){return Array.isArray(e)===!0?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function MP(t,e){return Array.isArray(t)===!0?qm(t,e):Array.isArray(e)===!0?qm(e,t):t===e}function LP(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(MP(t[n],e[n])===!1)return!1;return!0}const VP={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function FP({fallbackTag:t,useDisableForRouterLinkProps:e=!0}={}){const n=Ni(),{props:r,proxy:s,emit:i}=n,o=OP(n),a=ne(()=>r.disable!==!0&&r.href!==void 0),l=ne(e===!0?()=>o===!0&&r.disable!==!0&&a.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!=="":()=>o===!0&&a.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""),c=ne(()=>l.value===!0?S(r.to):null),u=ne(()=>c.value!==null),h=ne(()=>a.value===!0||u.value===!0),d=ne(()=>r.type==="a"||h.value===!0?"a":r.tag||t||"div"),f=ne(()=>a.value===!0?{href:r.href,target:r.target}:u.value===!0?{href:c.value.href,target:r.target}:{}),g=ne(()=>{if(u.value===!1)return-1;const{matched:N}=c.value,{length:x}=N,G=N[x-1];if(G===void 0)return-1;const P=s.$route.matched;if(P.length===0)return-1;const L=P.findIndex(jm.bind(null,G));if(L>-1)return L;const Y=Bm(N[x-2]);return x>1&&Bm(G)===Y&&P[P.length-1].path!==Y?P.findIndex(jm.bind(null,N[x-2])):L}),y=ne(()=>u.value===!0&&g.value!==-1&&DP(s.$route.params,c.value.params)),_=ne(()=>y.value===!0&&g.value===s.$route.matched.length-1&&LP(s.$route.params,c.value.params)),E=ne(()=>u.value===!0?_.value===!0?` ${r.exactActiveClass} ${r.activeClass}`:r.exact===!0?"":y.value===!0?` ${r.activeClass}`:"":"");function S(N){try{return s.$router.resolve(N)}catch{}return null}function C(N,{returnRouterError:x,to:G=r.to,replace:P=r.replace}={}){if(r.disable===!0)return N.preventDefault(),Promise.resolve(!1);if(N.metaKey||N.altKey||N.ctrlKey||N.shiftKey||N.button!==void 0&&N.button!==0||r.target==="_blank")return Promise.resolve(!1);N.preventDefault();const L=s.$router[P===!0?"replace":"push"](G);return x===!0?L:L.then(()=>{}).catch(()=>{})}function k(N){if(u.value===!0){const x=G=>C(N,G);i("click",N,x),N.defaultPrevented!==!0&&x()}else i("click",N)}return{hasRouterLink:u,hasHrefLink:a,hasLink:h,linkTag:d,resolvedLink:c,linkIsActive:y,linkIsExactActive:_,linkClass:E,linkAttrs:f,getLink:S,navigateToRouterLink:C,navigateOnClick:k}}const Wm={none:0,xs:4,sm:8,md:16,lg:24,xl:32},UP={xs:8,sm:10,md:14,lg:20,xl:24},$P=["button","submit","reset"],BP=/[^\s]\/[^\s]/,jP=["flat","outline","push","unelevated"],qP=(t,e)=>t.flat===!0?"flat":t.outline===!0?"outline":t.push===!0?"push":t.unelevated===!0?"unelevated":e,WP={...Of,...VP,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...jP.reduce((t,e)=>(t[e]=Boolean)&&t,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...xP.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function HP(t){const e=Df(t,UP),n=NP(t),{hasRouterLink:r,hasLink:s,linkTag:i,linkAttrs:o,navigateOnClick:a}=FP({fallbackTag:"button"}),l=ne(()=>{const _=t.fab===!1&&t.fabMini===!1?e.value:{};return t.padding!==void 0?Object.assign({},_,{padding:t.padding.split(/\s+/).map(E=>E in Wm?Wm[E]+"px":E).join(" "),minWidth:"0",minHeight:"0"}):_}),c=ne(()=>t.rounded===!0||t.fab===!0||t.fabMini===!0),u=ne(()=>t.disable!==!0&&t.loading!==!0),h=ne(()=>u.value===!0?t.tabindex||0:-1),d=ne(()=>qP(t,"standard")),f=ne(()=>{const _={tabindex:h.value};return s.value===!0?Object.assign(_,o.value):$P.includes(t.type)===!0&&(_.type=t.type),i.value==="a"?(t.disable===!0?_["aria-disabled"]="true":_.href===void 0&&(_.role="button"),r.value!==!0&&BP.test(t.type)===!0&&(_.type=t.type)):t.disable===!0&&(_.disabled="",_["aria-disabled"]="true"),t.loading===!0&&t.percentage!==void 0&&Object.assign(_,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":t.percentage}),_}),g=ne(()=>{let _;t.color!==void 0?t.flat===!0||t.outline===!0?_=`text-${t.textColor||t.color}`:_=`bg-${t.color} text-${t.textColor||"white"}`:t.textColor&&(_=`text-${t.textColor}`);const E=t.round===!0?"round":`rectangle${c.value===!0?" q-btn--rounded":t.square===!0?" q-btn--square":""}`;return`q-btn--${d.value} q-btn--${E}`+(_!==void 0?" "+_:"")+(u.value===!0?" q-btn--actionable q-focusable q-hoverable":t.disable===!0?" disabled":"")+(t.fab===!0?" q-btn--fab":t.fabMini===!0?" q-btn--fab-mini":"")+(t.noCaps===!0?" q-btn--no-uppercase":"")+(t.dense===!0?" q-btn--dense":"")+(t.stretch===!0?" no-border-radius self-stretch":"")+(t.glossy===!0?" glossy":"")+(t.square?" q-btn--square":"")}),y=ne(()=>n.value+(t.stack===!0?" column":" row")+(t.noWrap===!0?" no-wrap text-no-wrap":"")+(t.loading===!0?" q-btn__content--hidden":""));return{classes:g,style:l,innerClasses:y,attributes:f,hasLink:s,linkTag:i,navigateOnClick:a,isActionable:u}}const{passiveCapture:zt}=ps;let $s=null,Bs=null,js=null;var zP=ha({name:"QBtn",props:{...WP,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(t,{slots:e,emit:n}){const{proxy:r}=Ni(),{classes:s,style:i,innerClasses:o,attributes:a,hasLink:l,linkTag:c,navigateOnClick:u,isActionable:h}=HP(t),d=Zn(null),f=Zn(null);let g=null,y,_=null;const E=ne(()=>t.label!==void 0&&t.label!==null&&t.label!==""),S=ne(()=>t.disable===!0||t.ripple===!1?!1:{keyCodes:l.value===!0?[13,32]:[13],...t.ripple===!0?{}:t.ripple}),C=ne(()=>({center:t.round})),k=ne(()=>{const W=Math.max(0,Math.min(100,t.percentage));return W>0?{transition:"transform 0.6s",transform:`translateX(${W-100}%)`}:{}}),N=ne(()=>{if(t.loading===!0)return{onMousedown:ie,onTouchstart:ie,onClick:ie,onKeydown:ie,onKeyup:ie};if(h.value===!0){const W={onClick:G,onKeydown:P,onMousedown:Y};if(r.$q.platform.has.touch===!0){const he=t.onTouchstart!==void 0?"":"Passive";W[`onTouchstart${he}`]=L}return W}return{onClick:Fs}}),x=ne(()=>({ref:d,class:"q-btn q-btn-item non-selectable no-outline "+s.value,style:i.value,...a.value,...N.value}));function G(W){if(d.value!==null){if(W!==void 0){if(W.defaultPrevented===!0)return;const he=document.activeElement;if(t.type==="submit"&&he!==document.body&&d.value.contains(he)===!1&&he.contains(d.value)===!1){d.value.focus();const de=()=>{document.removeEventListener("keydown",Fs,!0),document.removeEventListener("keyup",de,zt),d.value!==null&&d.value.removeEventListener("blur",de,zt)};document.addEventListener("keydown",Fs,!0),document.addEventListener("keyup",de,zt),d.value.addEventListener("blur",de,zt)}}u(W)}}function P(W){d.value!==null&&(n("keydown",W),Xh(W,[13,32])===!0&&Bs!==d.value&&(Bs!==null&&B(),W.defaultPrevented!==!0&&(d.value.focus(),Bs=d.value,d.value.classList.add("q-btn--active"),document.addEventListener("keyup",K,!0),d.value.addEventListener("blur",K,zt)),Fs(W)))}function L(W){d.value!==null&&(n("touchstart",W),W.defaultPrevented!==!0&&($s!==d.value&&($s!==null&&B(),$s=d.value,g=W.target,g.addEventListener("touchcancel",K,zt),g.addEventListener("touchend",K,zt)),y=!0,_!==null&&clearTimeout(_),_=setTimeout(()=>{_=null,y=!1},200)))}function Y(W){d.value!==null&&(W.qSkipRipple=y===!0,n("mousedown",W),W.defaultPrevented!==!0&&js!==d.value&&(js!==null&&B(),js=d.value,d.value.classList.add("q-btn--active"),document.addEventListener("mouseup",K,zt)))}function K(W){if(d.value!==null&&!(W!==void 0&&W.type==="blur"&&document.activeElement===d.value)){if(W!==void 0&&W.type==="keyup"){if(Bs===d.value&&Xh(W,[13,32])===!0){const he=new MouseEvent("click",W);he.qKeyEvent=!0,W.defaultPrevented===!0&&Yh(he),W.cancelBubble===!0&&SE(he),d.value.dispatchEvent(he),Fs(W),W.qKeyEvent=!0}n("keyup",W)}B()}}function B(W){const he=f.value;W!==!0&&($s===d.value||js===d.value)&&he!==null&&he!==document.activeElement&&(he.setAttribute("tabindex",-1),he.focus()),$s===d.value&&(g!==null&&(g.removeEventListener("touchcancel",K,zt),g.removeEventListener("touchend",K,zt)),$s=g=null),js===d.value&&(document.removeEventListener("mouseup",K,zt),js=null),Bs===d.value&&(document.removeEventListener("keyup",K,!0),d.value!==null&&d.value.removeEventListener("blur",K,zt),Bs=null),d.value!==null&&d.value.classList.remove("q-btn--active")}function ie(W){Fs(W),W.qSkipRipple=!0}return bf(()=>{B(!0)}),Object.assign(r,{click:G}),()=>{let W=[];t.icon!==void 0&&W.push(te($l,{name:t.icon,left:t.stack!==!0&&E.value===!0,role:"img","aria-hidden":"true"})),E.value===!0&&W.push(te("span",{class:"block"},[t.label])),W=so(e.default,W),t.iconRight!==void 0&&t.round===!1&&W.push(te($l,{name:t.iconRight,right:t.stack!==!0&&E.value===!0,role:"img","aria-hidden":"true"}));const he=[te("span",{class:"q-focus-helper",ref:f})];return t.loading===!0&&t.percentage!==void 0&&he.push(te("span",{class:"q-btn__progress absolute-full overflow-hidden"+(t.darkPercentage===!0?" q-btn__progress--dark":"")},[te("span",{class:"q-btn__progress-indicator fit block",style:k.value})])),he.push(te("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+o.value},W)),t.loading!==null&&he.push(te(xf,{name:"q-transition--fade"},()=>t.loading===!0?[te("span",{key:"loading",class:"absolute-full flex flex-center"},e.loading!==void 0?e.loading():[te(QE)])]:null)),Gv(te(c.value,x.value,he),[[PP,S.value,void 0,C.value]])}}});let KP=1,GP=document.body;function QP(t,e){const n=document.createElement("div");if(n.id=e!==void 0?`q-portal--${e}--${KP++}`:t,Fl.globalNodes!==void 0){const r=Fl.globalNodes.class;r!==void 0&&(n.className=r)}return GP.appendChild(n),n}function OB(t){t.remove()}let YP=0;const _l={},yl={},rn={},XE={},XP=/^\s*$/,JE=[],JP=[void 0,null,!0,!1,""],Mf=["top-left","top-right","bottom-left","bottom-right","top","bottom","left","right","center"],ZP=["top-left","top-right","bottom-left","bottom-right"],Ks={positive:{icon:t=>t.iconSet.type.positive,color:"positive"},negative:{icon:t=>t.iconSet.type.negative,color:"negative"},warning:{icon:t=>t.iconSet.type.warning,color:"warning",textColor:"dark"},info:{icon:t=>t.iconSet.type.info,color:"info"},ongoing:{group:!1,timeout:0,spinner:!0,color:"grey-8"}};function ZE(t,e,n){if(!t)return Qi("parameter required");let r;const s={textColor:"white"};if(t.ignoreDefaults!==!0&&Object.assign(s,_l),Uo(t)===!1&&(s.type&&Object.assign(s,Ks[s.type]),t={message:t}),Object.assign(s,Ks[t.type||s.type],t),typeof s.icon=="function"&&(s.icon=s.icon(e)),s.spinner?(s.spinner===!0&&(s.spinner=QE),s.spinner=Ur(s.spinner)):s.spinner=!1,s.meta={hasMedia:Boolean(s.spinner!==!1||s.icon||s.avatar),hasText:Hm(s.message)||Hm(s.caption)},s.position){if(Mf.includes(s.position)===!1)return Qi("wrong position",t)}else s.position="bottom";if(JP.includes(s.timeout)===!0)s.timeout=5e3;else{const l=Number(s.timeout);if(isNaN(l)||l<0)return Qi("wrong timeout",t);s.timeout=Number.isFinite(l)?l:0}s.timeout===0?s.progress=!1:s.progress===!0&&(s.meta.progressClass="q-notification__progress"+(s.progressClass?` ${s.progressClass}`:""),s.meta.progressStyle={animationDuration:`${s.timeout+1e3}ms`});const i=(Array.isArray(t.actions)===!0?t.actions:[]).concat(t.ignoreDefaults!==!0&&Array.isArray(_l.actions)===!0?_l.actions:[]).concat(Ks[t.type]!==void 0&&Array.isArray(Ks[t.type].actions)===!0?Ks[t.type].actions:[]),{closeBtn:o}=s;if(o&&i.push({label:typeof o=="string"?o:e.lang.label.close}),s.actions=i.map(({handler:l,noDismiss:c,...u})=>({flat:!0,...u,onClick:typeof l=="function"?()=>{l(),c!==!0&&a()}:()=>{a()}})),s.multiLine===void 0&&(s.multiLine=s.actions.length>1),Object.assign(s.meta,{class:`q-notification row items-stretch q-notification--${s.multiLine===!0?"multi-line":"standard"}`+(s.color!==void 0?` bg-${s.color}`:"")+(s.textColor!==void 0?` text-${s.textColor}`:"")+(s.classes!==void 0?` ${s.classes}`:""),wrapperClass:"q-notification__wrapper col relative-position border-radius-inherit "+(s.multiLine===!0?"column no-wrap justify-center":"row items-center"),contentClass:"q-notification__content row items-center"+(s.multiLine===!0?"":" col"),leftClass:s.meta.hasText===!0?"additional":"single",attrs:{role:"alert",...s.attrs}}),s.group===!1?(s.group=void 0,s.meta.group=void 0):((s.group===void 0||s.group===!0)&&(s.group=[s.message,s.caption,s.multiline].concat(s.actions.map(l=>`${l.label}*${l.icon}`)).join("|")),s.meta.group=s.group+"|"+s.position),s.actions.length===0?s.actions=void 0:s.meta.actionsClass="q-notification__actions row items-center "+(s.multiLine===!0?"justify-end":"col-auto")+(s.meta.hasMedia===!0?" q-notification__actions--with-media":""),n!==void 0){n.notif.meta.timer&&(clearTimeout(n.notif.meta.timer),n.notif.meta.timer=void 0),s.meta.uid=n.notif.meta.uid;const l=rn[s.position].value.indexOf(n.notif);rn[s.position].value[l]=s}else{const l=yl[s.meta.group];if(l===void 0){if(s.meta.uid=YP++,s.meta.badge=1,["left","right","center"].indexOf(s.position)!==-1)rn[s.position].value.splice(Math.floor(rn[s.position].value.length/2),0,s);else{const c=s.position.indexOf("top")>-1?"unshift":"push";rn[s.position].value[c](s)}s.group!==void 0&&(yl[s.meta.group]=s)}else{if(l.meta.timer&&(clearTimeout(l.meta.timer),l.meta.timer=void 0),s.badgePosition!==void 0){if(ZP.includes(s.badgePosition)===!1)return Qi("wrong badgePosition",t)}else s.badgePosition=`top-${s.position.indexOf("left")>-1?"right":"left"}`;s.meta.uid=l.meta.uid,s.meta.badge=l.meta.badge+1,s.meta.badgeClass=`q-notification__badge q-notification__badge--${s.badgePosition}`+(s.badgeColor!==void 0?` bg-${s.badgeColor}`:"")+(s.badgeTextColor!==void 0?` text-${s.badgeTextColor}`:"")+(s.badgeClass?` ${s.badgeClass}`:"");const c=rn[s.position].value.indexOf(l);rn[s.position].value[c]=yl[s.meta.group]=s}}const a=()=>{ek(s),r=void 0};if(s.timeout>0&&(s.meta.timer=setTimeout(()=>{s.meta.timer=void 0,a()},s.timeout+1e3)),s.group!==void 0)return l=>{l!==void 0?Qi("trying to update a grouped one which is forbidden",t):a()};if(r={dismiss:a,config:t,notif:s},n!==void 0){Object.assign(n,r);return}return l=>{if(r!==void 0)if(l===void 0)r.dismiss();else{const c=Object.assign({},r.config,l,{group:!1,position:s.position});ZE(c,e,r)}}}function ek(t){t.meta.timer&&(clearTimeout(t.meta.timer),t.meta.timer=void 0);const e=rn[t.position].value.indexOf(t);if(e!==-1){t.group!==void 0&&delete yl[t.meta.group];const n=JE[""+t.meta.uid];if(n){const{width:r,height:s}=getComputedStyle(n);n.style.left=`${n.offsetLeft}px`,n.style.width=r,n.style.height=s}rn[t.position].value.splice(e,1),typeof t.onDismiss=="function"&&t.onDismiss()}}function Hm(t){return t!=null&&XP.test(t)!==!0}function Qi(t,e){return console.error(`Notify: ${t}`,e),!1}function tk(){return ha({name:"QNotifications",devtools:{hide:!0},setup(){return()=>te("div",{class:"q-notifications"},Mf.map(t=>te(EC,{key:t,class:XE[t],tag:"div",name:`q-notification--${t}`},()=>rn[t].value.map(e=>{const n=e.meta,r=[];if(n.hasMedia===!0&&(e.spinner!==!1?r.push(te(e.spinner,{class:"q-notification__spinner q-notification__spinner--"+n.leftClass,color:e.spinnerColor,size:e.spinnerSize})):e.icon?r.push(te($l,{class:"q-notification__icon q-notification__icon--"+n.leftClass,name:e.icon,color:e.iconColor,size:e.iconSize,role:"img"})):e.avatar&&r.push(te(bP,{class:"q-notification__avatar q-notification__avatar--"+n.leftClass},()=>te("img",{src:e.avatar,"aria-hidden":"true"})))),n.hasText===!0){let i;const o={class:"q-notification__message col"};if(e.html===!0)o.innerHTML=e.caption?`<div>${e.message}</div><div class="q-notification__caption">${e.caption}</div>`:e.message;else{const a=[e.message];i=e.caption?[te("div",a),te("div",{class:"q-notification__caption"},[e.caption])]:a}r.push(te("div",o,i))}const s=[te("div",{class:n.contentClass},r)];return e.progress===!0&&s.push(te("div",{key:`${n.uid}|p|${n.badge}`,class:n.progressClass,style:n.progressStyle})),e.actions!==void 0&&s.push(te("div",{class:n.actionsClass},e.actions.map(i=>te(zP,i)))),n.badge>1&&s.push(te("div",{key:`${n.uid}|${n.badge}`,class:e.meta.badgeClass,style:e.badgeStyle},[n.badge])),te("div",{ref:i=>{JE[""+n.uid]=i},key:n.uid,class:n.class,...n.attrs},[te("div",{class:n.wrapperClass},s)])}))))}})}var sd={setDefaults(t){Uo(t)===!0&&Object.assign(_l,t)},registerType(t,e){Uo(e)===!0&&(Ks[t]=e)},install({$q:t,parentApp:e}){if(t.notify=this.create=n=>ZE(n,t),t.notify.setDefaults=this.setDefaults,t.notify.registerType=this.registerType,t.config.notify!==void 0&&this.setDefaults(t.config.notify),this.__installed!==!0){Mf.forEach(r=>{rn[r]=Zn([]);const s=["left","center","right"].includes(r)===!0?"center":r.indexOf("top")>-1?"top":"bottom",i=r.indexOf("left")>-1?"start":r.indexOf("right")>-1?"end":"center",o=["left","right"].includes(r)?`items-${r==="left"?"start":"end"} justify-center`:r==="center"?"flex-center":`items-${i}`;XE[r]=`q-notifications__list q-notifications__list--${s} fixed column no-wrap ${o}`});const n=QP("q-notify");ZC(tk(),e).mount(n)}}},Bl;(t=>{function e(r){sd.create({type:"negative",message:r})}t.error=e;function n(r){sd.create({type:"positive",badgeColor:"positive",message:r})}t.success=n})(Bl||(Bl={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U=function(t,e){if(!t)throw Oi(e)},Oi=function(t){return new Error("Firebase Database ("+ew.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},nk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},zc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),r.push(n[u],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(tw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):nk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new rk;const d=i<<2|a>>4;if(r.push(d),c!==64){const f=a<<4&240|c>>2;if(r.push(f),h!==64){const g=c<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nw=function(t){const e=tw(t);return zc.encodeByteArray(e,!0)},jl=function(t){return nw(t).replace(/\./g,"")},ql=function(t){try{return zc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sk(t){return rw(void 0,t)}function rw(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ik(n)||(t[n]=rw(t[n],e[n]));return t}function ik(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ok(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak=()=>ok().__FIREBASE_DEFAULTS__,lk=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ck=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ql(t[1]);return e&&JSON.parse(e)},Kc=()=>{try{return ak()||lk()||ck()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},uk=t=>{var e,n;return(n=(e=Kc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},hk=t=>{const e=uk(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},sw=()=>{var t;return(t=Kc())===null||t===void 0?void 0:t.config},dk=t=>{var e;return(e=Kc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fk(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[jl(JSON.stringify(n)),jl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Lf(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ye())}function pk(){var t;const e=(t=Kc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function iw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mk(){const t=Ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ow(){return ew.NODE_ADMIN===!0}function _k(){return!pk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Vf(){try{return typeof indexedDB=="object"}catch{return!1}}function yk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk="FirebaseError";class yn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vk,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Di.prototype.create)}}class Di{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Ek(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new yn(s,a,r)}}function Ek(t,e){return t.replace(wk,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const wk=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(t){return JSON.parse(t)}function ct(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=jo(ql(i[0])||""),n=jo(ql(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},Tk=function(t){const e=aw(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Ik=function(t){const e=aw(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function _i(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function id(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wl(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function Hl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(zm(i)&&zm(o)){if(!Hl(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function zm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function io(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function oo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^i&(o^a),u=1518500249):(c=i^o^a,u=1859775393):h<60?(c=i&o|a&(i|o),u=2400959708):(c=i^o^a,u=3395469782);const d=(s<<5|s>>>27)+c+l+u+r[h]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function Ak(t,e){const n=new Sk(t,e);return n.subscribe.bind(n)}class Sk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ck(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ih),s.error===void 0&&(s.error=ih),s.complete===void 0&&(s.complete=ih);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ck(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ih(){}function Rk(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,U(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Gc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(t){return t&&t._delegate?t._delegate:t}class dn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Bo;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Nk(e))try{this.getOrInitializeService({instanceIdentifier:Yr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yr){return this.instances.has(e)}getOptions(e=Yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yr){return this.component?this.component.multipleInstances?e:Yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xk(t){return t===Yr?void 0:t}function Nk(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new kk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const Dk={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},Mk=pe.INFO,Lk={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},Vk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Lk[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class da{constructor(e){this.name=e,this._logLevel=Mk,this._logHandler=Vk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Dk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const Fk=(t,e)=>e.some(n=>t instanceof n);let Km,Gm;function Uk(){return Km||(Km=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $k(){return Gm||(Gm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lw=new WeakMap,od=new WeakMap,cw=new WeakMap,oh=new WeakMap,Ff=new WeakMap;function Bk(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Pr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&lw.set(n,t)}).catch(()=>{}),Ff.set(e,t),e}function jk(t){if(od.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});od.set(t,e)}let ad={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return od.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qk(t){ad=t(ad)}function Wk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ah(this),e,...n);return cw.set(r,e.sort?e.sort():[e]),Pr(r)}:$k().includes(t)?function(...e){return t.apply(ah(this),e),Pr(lw.get(this))}:function(...e){return Pr(t.apply(ah(this),e))}}function Hk(t){return typeof t=="function"?Wk(t):(t instanceof IDBTransaction&&jk(t),Fk(t,Uk())?new Proxy(t,ad):t)}function Pr(t){if(t instanceof IDBRequest)return Bk(t);if(oh.has(t))return oh.get(t);const e=Hk(t);return e!==t&&(oh.set(t,e),Ff.set(e,t)),e}const ah=t=>Ff.get(t);function zk(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Pr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Pr(o.result),l.oldVersion,l.newVersion,Pr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Kk=["get","getKey","getAll","getAllKeys","count"],Gk=["put","add","delete","clear"],lh=new Map;function Qm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lh.get(e))return lh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Gk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Kk.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return lh.set(e,i),i}qk(t=>({...t,get:(e,n,r)=>Qm(e,n)||t.get(e,n,r),has:(e,n)=>!!Qm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Yk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Yk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ld="@firebase/app",Ym="0.9.27";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=new da("@firebase/app"),Xk="@firebase/app-compat",Jk="@firebase/analytics-compat",Zk="@firebase/analytics",ex="@firebase/app-check-compat",tx="@firebase/app-check",nx="@firebase/auth",rx="@firebase/auth-compat",sx="@firebase/database",ix="@firebase/database-compat",ox="@firebase/functions",ax="@firebase/functions-compat",lx="@firebase/installations",cx="@firebase/installations-compat",ux="@firebase/messaging",hx="@firebase/messaging-compat",dx="@firebase/performance",fx="@firebase/performance-compat",px="@firebase/remote-config",gx="@firebase/remote-config-compat",mx="@firebase/storage",_x="@firebase/storage-compat",yx="@firebase/firestore",vx="@firebase/firestore-compat",Ex="firebase",wx="10.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd="[DEFAULT]",Tx={[ld]:"fire-core",[Xk]:"fire-core-compat",[Zk]:"fire-analytics",[Jk]:"fire-analytics-compat",[tx]:"fire-app-check",[ex]:"fire-app-check-compat",[nx]:"fire-auth",[rx]:"fire-auth-compat",[sx]:"fire-rtdb",[ix]:"fire-rtdb-compat",[ox]:"fire-fn",[ax]:"fire-fn-compat",[lx]:"fire-iid",[cx]:"fire-iid-compat",[ux]:"fire-fcm",[hx]:"fire-fcm-compat",[dx]:"fire-perf",[fx]:"fire-perf-compat",[px]:"fire-rc",[gx]:"fire-rc-compat",[mx]:"fire-gcs",[_x]:"fire-gcs-compat",[yx]:"fire-fst",[vx]:"fire-fst-compat","fire-js":"fire-js",[Ex]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl=new Map,ud=new Map;function Ix(t,e){try{t.container.addComponent(e)}catch(n){gs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Mn(t){const e=t.name;if(ud.has(e))return gs.debug(`There were multiple attempts to register component ${e}.`),!1;ud.set(e,t);for(const n of zl.values())Ix(n,t);return!0}function uw(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bx={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},kr=new Di("app","Firebase",bx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=wx;function Sx(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:cd,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw kr.create("bad-app-name",{appName:String(s)});if(n||(n=sw()),!n)throw kr.create("no-options");const i=zl.get(s);if(i){if(Hl(n,i.options)&&Hl(r,i.config))return i;throw kr.create("duplicate-app",{appName:s})}const o=new Ok(s);for(const l of ud.values())o.addComponent(l);const a=new Ax(n,r,o);return zl.set(s,a),a}function hw(t=cd){const e=zl.get(t);if(!e&&t===cd&&sw())return Sx();if(!e)throw kr.create("no-app",{appName:t});return e}function Bt(t,e,n){var r;let s=(r=Tx[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gs.warn(a.join(" "));return}Mn(new dn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cx="firebase-heartbeat-database",Rx=1,qo="firebase-heartbeat-store";let ch=null;function dw(){return ch||(ch=zk(Cx,Rx,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(qo)}catch(n){console.warn(n)}}}}).catch(t=>{throw kr.create("idb-open",{originalErrorMessage:t.message})})),ch}async function Px(t){try{const n=(await dw()).transaction(qo),r=await n.objectStore(qo).get(fw(t));return await n.done,r}catch(e){if(e instanceof yn)gs.warn(e.message);else{const n=kr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gs.warn(n.message)}}}async function Xm(t,e){try{const r=(await dw()).transaction(qo,"readwrite");await r.objectStore(qo).put(e,fw(t)),await r.done}catch(n){if(n instanceof yn)gs.warn(n.message);else{const r=kr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});gs.warn(r.message)}}}function fw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kx=1024,xx=30*24*60*60*1e3;class Nx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Dx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Jm();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=xx}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Jm(),{heartbeatsToSend:r,unsentEntries:s}=Ox(this._heartbeatsCache.heartbeats),i=jl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Jm(){return new Date().toISOString().substring(0,10)}function Ox(t,e=kx){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Zm(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Zm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Dx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vf()?yk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Px(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Xm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Xm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Zm(t){return jl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mx(t){Mn(new dn("platform-logger",e=>new Qk(e),"PRIVATE")),Mn(new dn("heartbeat",e=>new Nx(e),"PRIVATE")),Bt(ld,Ym,t),Bt(ld,Ym,"esm2017"),Bt("fire-js","")}Mx("");var Lx="firebase",Vx="10.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bt(Lx,Vx,"app");const uh=async t=>{var e,n;t.state.loading();try{const r=await t.action;return t.state.success(),await((e=t.onSuccess)==null?void 0:e.call(t,r)),r}catch(r){return t.state.error(),await((n=t.onError)==null?void 0:n.call(t,r)),r instanceof yn,r}};function e_(t,e){return{data:e!=null?e:null,state:t,loading(){this.state="loading"},success(){this.state="success"},error(){this.state="error"}}}function Uf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function pw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fx=pw,gw=new Di("auth","Firebase",pw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl=new da("@firebase/auth");function Ux(t,...e){Kl.logLevel<=pe.WARN&&Kl.warn(`Auth (${$r}): ${t}`,...e)}function vl(t,...e){Kl.logLevel<=pe.ERROR&&Kl.error(`Auth (${$r}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t,...e){throw $f(t,...e)}function Pn(t,...e){return $f(t,...e)}function $x(t,e,n){const r=Object.assign(Object.assign({},Fx()),{[e]:n});return new Di("auth","Firebase",r).create(e,{appName:t.name})}function $f(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return gw.create(t,...e)}function le(t,e,...n){if(!t)throw $f(e,...n)}function Wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vl(e),new Error(e)}function er(t,e){t||Wn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Bx(){return t_()==="http:"||t_()==="https:"}function t_(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jx(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Bx()||gk()||"connection"in navigator)?navigator.onLine:!0}function qx(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,n){this.shortDelay=e,this.longDelay=n,er(n>e,"Short delay should be less than long delay!"),this.isMobile=Lf()||iw()}get(){return jx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(t,e){er(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;Wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;Wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;Wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hx=new fa(3e4,6e4);function Br(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function jr(t,e,n,r,s={}){return _w(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Mi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),mw.fetch()(yw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function _w(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Wx),e);try{const s=new Kx(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ya(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ya(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ya(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ya(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw $x(t,u,c);fn(t,u)}}catch(s){if(s instanceof yn)throw s;fn(t,"network-request-failed",{message:String(s)})}}async function pa(t,e,n,r,s={}){const i=await jr(t,e,n,r,s);return"mfaPendingCredential"in i&&fn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function yw(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Bf(t.config,s):`${t.config.apiScheme}://${s}`}function zx(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Kx{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Pn(this.auth,"network-request-failed")),Hx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ya(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Pn(t,e,r);return s.customData._tokenResponse=n,s}function n_(t){return t!==void 0&&t.enterprise!==void 0}class Gx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return zx(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Qx(t,e){return jr(t,"GET","/v2/recaptchaConfig",Br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yx(t,e){return jr(t,"POST","/v1/accounts:delete",e)}async function Xx(t,e){return jr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Jx(t,e=!1){const n=Xe(t),r=await n.getIdToken(e),s=jf(r);le(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:wo(hh(s.auth_time)),issuedAtTime:wo(hh(s.iat)),expirationTime:wo(hh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function hh(t){return Number(t)*1e3}function jf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return vl("JWT malformed, contained fewer than 3 sections"),null;try{const s=ql(n);return s?JSON.parse(s):(vl("Failed to decode base64 JWT payload"),null)}catch(s){return vl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Zx(t){const e=jf(t);return le(e,"internal-error"),le(typeof e.exp!="undefined","internal-error"),le(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof yn&&eN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function eN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wo(this.lastLoginAt),this.creationTime=wo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gl(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Wo(t,Xx(n,{idToken:r}));le(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?sN(i.providerUserInfo):[],a=rN(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new vw(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function nN(t){const e=Xe(t);await Gl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rN(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function sN(t){return t.map(e=>{var{providerId:n}=e,r=Uf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iN(t,e){const n=await _w(t,{},async()=>{const r=Mi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=yw(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",mw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function oN(t,e){return jr(t,"POST","/v2/accounts:revokeToken",Br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken!="undefined","internal-error"),le(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Zx(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return le(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await iN(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ho;return r&&(le(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(le(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(le(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ho,this.toJSON())}_performRefresh(){return Wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(t,e){le(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class us{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Uf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new vw(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Wo(this,this.stsTokenManager.getToken(this.auth,e));return le(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Jx(this,e)}reload(){return nN(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new us(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Gl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Wo(this,Yx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,S=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:C,emailVerified:k,isAnonymous:N,providerData:x,stsTokenManager:G}=n;le(C&&G,e,"internal-error");const P=Ho.fromJSON(this.name,G);le(typeof C=="string",e,"internal-error"),hr(h,e.name),hr(d,e.name),le(typeof k=="boolean",e,"internal-error"),le(typeof N=="boolean",e,"internal-error"),hr(f,e.name),hr(g,e.name),hr(y,e.name),hr(_,e.name),hr(E,e.name),hr(S,e.name);const L=new us({uid:C,auth:e,email:d,emailVerified:k,displayName:h,isAnonymous:N,photoURL:g,phoneNumber:f,tenantId:y,stsTokenManager:P,createdAt:E,lastLoginAt:S});return x&&Array.isArray(x)&&(L.providerData=x.map(Y=>Object.assign({},Y))),_&&(L._redirectEventId=_),L}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ho;s.updateFromServerResponse(n);const i=new us({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Gl(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_=new Map;function Hn(t){er(t instanceof Function,"Expected a class definition");let e=r_.get(t);return e?(er(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,r_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ew.type="NONE";const s_=Ew;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(t,e,n){return`firebase:${t}:${e}:${n}`}class si{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=El(this.userKey,s.apiKey,i),this.fullPersistenceKey=El("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?us._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new si(Hn(s_),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Hn(s_);const o=El(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=us._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new si(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new si(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Iw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ww(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Aw(e))return"Blackberry";if(Sw(e))return"Webos";if(qf(e))return"Safari";if((e.includes("chrome/")||Tw(e))&&!e.includes("edge/"))return"Chrome";if(bw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ww(t=Ye()){return/firefox\//i.test(t)}function qf(t=Ye()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Tw(t=Ye()){return/crios\//i.test(t)}function Iw(t=Ye()){return/iemobile/i.test(t)}function bw(t=Ye()){return/android/i.test(t)}function Aw(t=Ye()){return/blackberry/i.test(t)}function Sw(t=Ye()){return/webos/i.test(t)}function Qc(t=Ye()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function aN(t=Ye()){var e;return Qc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lN(){return mk()&&document.documentMode===10}function Cw(t=Ye()){return Qc(t)||bw(t)||Sw(t)||Aw(t)||/windows phone/i.test(t)||Iw(t)}function cN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rw(t,e=[]){let n;switch(t){case"Browser":n=i_(Ye());break;case"Worker":n=`${i_(Ye())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$r}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hN(t,e={}){return jr(t,"GET","/v2/passwordPolicy",Br(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dN=6;class fN{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:dN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new o_(this),this.idTokenSubscription=new o_(this),this.beforeStateQueue=new uN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Hn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await si.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Gl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Xe(e):null;return n&&le(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Hn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hN(this),n=new fN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Di("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await oN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Hn(e)||this._popupRedirectResolver;le(n,this,"argument-error"),this.redirectPersistenceManager=await si.create(this,[Hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Ux(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Li(t){return Xe(t)}class o_{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ak(n=>this.observer=n)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gN(t){Yc=t}function Pw(t){return Yc.loadJS(t)}function mN(){return Yc.recaptchaEnterpriseScript}function _N(){return Yc.gapiScript}function yN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const vN="recaptcha-enterprise",EN="NO_RECAPTCHA";class wN{constructor(e){this.type=vN,this.auth=Li(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Qx(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Gx(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;n_(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(EN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&n_(window.grecaptcha))s(a,i,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=mN();l.length!==0&&(l+=a),Pw(l).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function a_(t,e,n,r=!1){const s=new wN(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function dd(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await a_(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await a_(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TN(t,e){const n=uw(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Hl(i,e!=null?e:{}))return s;fn(s,"already-initialized")}return n.initialize({options:e})}function IN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Hn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wn("not implemented")}_getIdTokenResponse(e){return Wn("not implemented")}_linkToIdToken(e,n){return Wn("not implemented")}_getReauthenticationResolver(e){return Wn("not implemented")}}async function bN(t,e){return jr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AN(t,e){return pa(t,"POST","/v1/accounts:signInWithPassword",Br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SN(t,e){return pa(t,"POST","/v1/accounts:signInWithEmailLink",Br(t,e))}async function CN(t,e){return pa(t,"POST","/v1/accounts:signInWithEmailLink",Br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo extends Wf{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new zo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new zo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dd(e,n,"signInWithPassword",AN);case"emailLink":return SN(e,{email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dd(e,r,"signUpPassword",bN);case"emailLink":return CN(e,{idToken:n,email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ii(t,e){return pa(t,"POST","/v1/accounts:signInWithIdp",Br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RN="http://localhost";class ms extends Wf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ms(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Uf(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ms(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ii(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ii(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ii(e,n)}buildRequest(){const e={requestUri:RN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Mi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function kN(t){const e=io(oo(t)).link,n=e?io(oo(e)).deep_link_id:null,r=io(oo(t)).deep_link_id;return(r?io(oo(r)).link:null)||r||n||e||t}class Hf{constructor(e){var n,r,s,i,o,a;const l=io(oo(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,h=PN((s=l.mode)!==null&&s!==void 0?s:null);le(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=kN(e);try{return new Hf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(){this.providerId=Vi.PROVIDER_ID}static credential(e,n){return zo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Hf.parseLink(n);return le(r,"argument-error"),zo._fromEmailAndCode(e,r.code,r.tenantId)}}Vi.PROVIDER_ID="password";Vi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga extends kw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends ga{constructor(){super("facebook.com")}static credential(e){return ms._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vr.credential(e.oauthAccessToken)}catch{return null}}}vr.FACEBOOK_SIGN_IN_METHOD="facebook.com";vr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends ga{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ms._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Er.credential(n,r)}catch{return null}}}Er.GOOGLE_SIGN_IN_METHOD="google.com";Er.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends ga{constructor(){super("github.com")}static credential(e){return ms._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wr.credential(e.oauthAccessToken)}catch{return null}}}wr.GITHUB_SIGN_IN_METHOD="github.com";wr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends ga{constructor(){super("twitter.com")}static credential(e,n){return ms._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Tr.credential(n,r)}catch{return null}}}Tr.TWITTER_SIGN_IN_METHOD="twitter.com";Tr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xN(t,e){return pa(t,"POST","/v1/accounts:signUp",Br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await us._fromIdTokenResponse(e,r,s),o=l_(r);return new _s({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=l_(r);return new _s({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function l_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql extends yn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ql.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ql(e,n,r,s)}}function xw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ql._fromErrorAndOperation(t,i,e,r):i})}async function NN(t,e,n=!1){const r=await Wo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _s._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ON(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Wo(t,xw(r,s,e,t),n);le(i.idToken,r,"internal-error");const o=jf(i.idToken);le(o,r,"internal-error");const{sub:a}=o;return le(t.uid===a,r,"user-mismatch"),_s._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&fn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nw(t,e,n=!1){const r="signIn",s=await xw(t,r,e),i=await _s._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function DN(t,e){return Nw(Li(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ow(t){const e=Li(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function MN(t,e,n){const r=Li(t),o=await dd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",xN).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Ow(t),l}),a=await _s._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function LN(t,e,n){return DN(Xe(t),Vi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ow(t),r})}function VN(t,e,n,r){return Xe(t).onIdTokenChanged(e,n,r)}function FN(t){return Xe(t).signOut()}const Yl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yl,"1"),this.storage.removeItem(Yl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UN(){const t=Ye();return qf(t)||Qc(t)}const $N=1e3,BN=10;class Mw extends Dw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=UN()&&cN(),this.fallbackToPolling=Cw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);lN()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,BN):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},$N)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Mw.type="LOCAL";const jN=Mw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw extends Dw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Lw.type="SESSION";const Vw=Lw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qN(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Xc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await qN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=zf("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(){return window}function HN(t){kn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(){return typeof kn().WorkerGlobalScope!="undefined"&&typeof kn().importScripts=="function"}async function zN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function KN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function GN(){return Fw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw="firebaseLocalStorageDb",QN=1,Xl="firebaseLocalStorage",$w="fbase_key";class ma{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jc(t,e){return t.transaction([Xl],e?"readwrite":"readonly").objectStore(Xl)}function YN(){const t=indexedDB.deleteDatabase(Uw);return new ma(t).toPromise()}function fd(){const t=indexedDB.open(Uw,QN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Xl,{keyPath:$w})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Xl)?e(r):(r.close(),await YN(),e(await fd()))})})}async function c_(t,e,n){const r=Jc(t,!0).put({[$w]:e,value:n});return new ma(r).toPromise()}async function XN(t,e){const n=Jc(t,!1).get(e),r=await new ma(n).toPromise();return r===void 0?null:r.value}function u_(t,e){const n=Jc(t,!0).delete(e);return new ma(n).toPromise()}const JN=800,ZN=3;class Bw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ZN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xc._getInstance(GN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await zN(),!this.activeServiceWorker)return;this.sender=new WN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||KN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fd();return await c_(e,Yl,"1"),await u_(e,Yl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>c_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>XN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>u_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Jc(s,!1).getAll();return new ma(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),JN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bw.type="LOCAL";const eO=Bw;new fa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tO(t,e){return e?Hn(e):(le(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf extends Wf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ii(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ii(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ii(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function nO(t){return Nw(t.auth,new Kf(t),t.bypassAuthState)}function rO(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),ON(n,new Kf(t),t.bypassAuthState)}async function sO(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),NN(n,new Kf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nO;case"linkViaPopup":case"linkViaRedirect":return sO;case"reauthViaPopup":case"reauthViaRedirect":return rO;default:fn(this.auth,"internal-error")}}resolve(e){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iO=new fa(2e3,1e4);class Ys extends jw{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ys.currentPopupAction&&Ys.currentPopupAction.cancel(),Ys.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){er(this.filter.length===1,"Popup operations only handle one event");const e=zf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ys.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,iO.get())};e()}}Ys.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oO="pendingRedirect",wl=new Map;class aO extends jw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=wl.get(this.auth._key());if(!e){try{const r=await lO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}wl.set(this.auth._key(),e)}return this.bypassAuthState||wl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lO(t,e){const n=hO(e),r=uO(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function cO(t,e){wl.set(t._key(),e)}function uO(t){return Hn(t._redirectPersistence)}function hO(t){return El(oO,t.config.apiKey,t.name)}async function dO(t,e,n=!1){const r=Li(t),s=tO(r,e),o=await new aO(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fO=10*60*1e3;class pO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!qw(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Pn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fO&&this.cachedEventUids.clear(),this.cachedEventUids.has(h_(e))}saveEventToCache(e){this.cachedEventUids.add(h_(e)),this.lastProcessedEventTime=Date.now()}}function h_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mO(t,e={}){return jr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _O=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yO=/^https?/;async function vO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await mO(t);for(const n of e)try{if(EO(n))return}catch{}fn(t,"unauthorized-domain")}function EO(t){const e=hd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!yO.test(n))return!1;if(_O.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wO=new fa(3e4,6e4);function d_(){const t=kn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function TO(t){return new Promise((e,n)=>{var r,s,i;function o(){d_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{d_(),n(Pn(t,"network-request-failed"))},timeout:wO.get()})}if(!((s=(r=kn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=kn().gapi)===null||i===void 0)&&i.load)o();else{const a=yN("iframefcb");return kn()[a]=()=>{gapi.load?o():n(Pn(t,"network-request-failed"))},Pw(`${_N()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Tl=null,e})}let Tl=null;function IO(t){return Tl=Tl||TO(t),Tl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bO=new fa(5e3,15e3),AO="__/auth/iframe",SO="emulator/auth/iframe",CO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},RO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function PO(t){const e=t.config;le(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bf(e,SO):`https://${t.config.authDomain}/${AO}`,r={apiKey:e.apiKey,appName:t.name,v:$r},s=RO.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Mi(r).slice(1)}`}async function kO(t){const e=await IO(t),n=kn().gapi;return le(n,t,"internal-error"),e.open({where:document.body,url:PO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:CO,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Pn(t,"network-request-failed"),a=kn().setTimeout(()=>{i(o)},bO.get());function l(){kn().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},NO=500,OO=600,DO="_blank",MO="http://localhost";class f_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function LO(t,e,n,r=NO,s=OO){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},xO),{width:r.toString(),height:s.toString(),top:i,left:o}),c=Ye().toLowerCase();n&&(a=Tw(c)?DO:n),ww(c)&&(e=e||MO,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(aN(c)&&a!=="_self")return VO(e||"",a),new f_(null);const h=window.open(e||"",a,u);le(h,t,"popup-blocked");try{h.focus()}catch{}return new f_(h)}function VO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FO="__/auth/handler",UO="emulator/auth/handler",$O=encodeURIComponent("fac");async function p_(t,e,n,r,s,i){le(t.config.authDomain,t,"auth-domain-config-required"),le(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:$r,eventId:s};if(e instanceof kw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",id(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof ga){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${$O}=${encodeURIComponent(l)}`:"";return`${BO(t)}?${Mi(a).slice(1)}${c}`}function BO({config:t}){return t.emulator?Bf(t,UO):`https://${t.authDomain}/${FO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh="webStorageSupport";class jO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vw,this._completeRedirectFn=dO,this._overrideRedirectResult=cO}async _openPopup(e,n,r,s){var i;er((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await p_(e,n,r,hd(),s);return LO(e,o,zf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await p_(e,n,r,hd(),s);return HN(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(er(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await kO(e),r=new pO(e);return n.register("authEvent",s=>(le(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dh,{type:dh},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[dh];o!==void 0&&n(!!o),fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Cw()||qf()||Qc()}}const qO=jO;var g_="@firebase/auth",m_="1.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function zO(t){Mn(new dn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;le(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rw(t)},c=new pN(r,s,i,l);return IN(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Mn(new dn("auth-internal",e=>{const n=Li(e.getProvider("auth").getImmediate());return(r=>new WO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bt(g_,m_,HO(t)),Bt(g_,m_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KO=5*60;dk("authIdTokenMaxAge");function GO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}gN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Pn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",GO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});zO("Browser");var QO=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},$,Gf=Gf||{},se=QO||self;function Zc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function _a(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function YO(t){return Object.prototype.hasOwnProperty.call(t,fh)&&t[fh]||(t[fh]=++XO)}var fh="closure_uid_"+(1e9*Math.random()>>>0),XO=0;function JO(t,e,n){return t.call.apply(t.bind,arguments)}function ZO(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Tt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Tt=JO:Tt=ZO,Tt.apply(null,arguments)}function Xa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ot(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function qr(){this.s=this.s,this.o=this.o}var eD=0;qr.prototype.s=!1;qr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),eD!=0)&&YO(this)};qr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ww=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Qf(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function __(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Zc(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function It(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}It.prototype.h=function(){this.defaultPrevented=!0};var tD=function(){if(!se.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};se.addEventListener("test",n,e),se.removeEventListener("test",n,e)}catch{}return t}();function Ko(t){return/^[\s\xa0]*$/.test(t)}function eu(){var t=se.navigator;return t&&(t=t.userAgent)?t:""}function An(t){return eu().indexOf(t)!=-1}function Yf(t){return Yf[" "](t),t}Yf[" "]=function(){};function nD(t,e){var n=GD;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var rD=An("Opera"),yi=An("Trident")||An("MSIE"),Hw=An("Edge"),pd=Hw||yi,zw=An("Gecko")&&!(eu().toLowerCase().indexOf("webkit")!=-1&&!An("Edge"))&&!(An("Trident")||An("MSIE"))&&!An("Edge"),sD=eu().toLowerCase().indexOf("webkit")!=-1&&!An("Edge");function Kw(){var t=se.document;return t?t.documentMode:void 0}var gd;e:{var ph="",gh=function(){var t=eu();if(zw)return/rv:([^\);]+)(\)|;)/.exec(t);if(Hw)return/Edge\/([\d\.]+)/.exec(t);if(yi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(sD)return/WebKit\/(\S+)/.exec(t);if(rD)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(gh&&(ph=gh?gh[1]:""),yi){var mh=Kw();if(mh!=null&&mh>parseFloat(ph)){gd=String(mh);break e}}gd=ph}var md;if(se.document&&yi){var y_=Kw();md=y_||parseInt(gd,10)||void 0}else md=void 0;var iD=md;function Go(t,e){if(It.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(zw){e:{try{Yf(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:oD[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Go.$.h.call(this)}}ot(Go,It);var oD={2:"touch",3:"pen",4:"mouse"};Go.prototype.h=function(){Go.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ya="closure_listenable_"+(1e6*Math.random()|0),aD=0;function lD(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++aD,this.fa=this.ia=!1}function tu(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Xf(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function cD(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Gw(t){const e={};for(const n in t)e[n]=t[n];return e}const v_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Qw(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<v_.length;i++)n=v_[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function nu(t){this.src=t,this.g={},this.h=0}nu.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=yd(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new lD(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function _d(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Ww(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(tu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function yd(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Jf="closure_lm_"+(1e6*Math.random()|0),_h={};function Yw(t,e,n,r,s){if(r&&r.once)return Jw(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Yw(t,e[i],n,r,s);return null}return n=tp(n),t&&t[ya]?t.O(e,n,_a(r)?!!r.capture:!!r,s):Xw(t,e,n,!1,r,s)}function Xw(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=_a(s)?!!s.capture:!!s,a=ep(t);if(a||(t[Jf]=a=new nu(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=uD(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)tD||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(eT(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function uD(){function t(n){return e.call(t.src,t.listener,n)}const e=hD;return t}function Jw(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Jw(t,e[i],n,r,s);return null}return n=tp(n),t&&t[ya]?t.P(e,n,_a(r)?!!r.capture:!!r,s):Xw(t,e,n,!0,r,s)}function Zw(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Zw(t,e[i],n,r,s);else r=_a(r)?!!r.capture:!!r,n=tp(n),t&&t[ya]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=yd(i,n,r,s),-1<n&&(tu(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=ep(t))&&(e=t.g[e.toString()],t=-1,e&&(t=yd(e,n,r,s)),(n=-1<t?e[t]:null)&&Zf(n))}function Zf(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ya])_d(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(eT(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ep(e))?(_d(n,t),n.h==0&&(n.src=null,e[Jf]=null)):tu(t)}}}function eT(t){return t in _h?_h[t]:_h[t]="on"+t}function hD(t,e){if(t.fa)t=!0;else{e=new Go(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Zf(t),t=n.call(r,e)}return t}function ep(t){return t=t[Jf],t instanceof nu?t:null}var yh="__closure_events_fn_"+(1e9*Math.random()>>>0);function tp(t){return typeof t=="function"?t:(t[yh]||(t[yh]=function(e){return t.handleEvent(e)}),t[yh])}function it(){qr.call(this),this.i=new nu(this),this.S=this,this.J=null}ot(it,qr);it.prototype[ya]=!0;it.prototype.removeEventListener=function(t,e,n,r){Zw(this,t,e,n,r)};function ht(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new It(e,t);else if(e instanceof It)e.target=e.target||t;else{var s=e;e=new It(r,t),Qw(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Ja(o,r,!0,e)&&s}if(o=e.g=t,s=Ja(o,r,!0,e)&&s,s=Ja(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Ja(o,r,!1,e)&&s}it.prototype.N=function(){if(it.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)tu(n[r]);delete t.g[e],t.h--}}this.J=null};it.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};it.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ja(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&_d(t.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var np=se.JSON.stringify;class dD{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function fD(){var t=rp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class pD{constructor(){this.h=this.g=null}add(e,n){const r=tT.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var tT=new dD(()=>new gD,t=>t.reset());class gD{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function mD(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function _D(t){se.setTimeout(()=>{throw t},0)}let Qo,Yo=!1,rp=new pD,nT=()=>{const t=se.Promise.resolve(void 0);Qo=()=>{t.then(yD)}};var yD=()=>{for(var t;t=fD();){try{t.h.call(t.g)}catch(n){_D(n)}var e=tT;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Yo=!1};function ru(t,e){it.call(this),this.h=t||1,this.g=e||se,this.j=Tt(this.qb,this),this.l=Date.now()}ot(ru,it);$=ru.prototype;$.ga=!1;$.T=null;$.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ht(this,"tick"),this.ga&&(sp(this),this.start()))}};$.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function sp(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}$.N=function(){ru.$.N.call(this),sp(this),delete this.g};function ip(t,e,n){if(typeof t=="function")n&&(t=Tt(t,n));else if(t&&typeof t.handleEvent=="function")t=Tt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:se.setTimeout(t,e||0)}function rT(t){t.g=ip(()=>{t.g=null,t.i&&(t.i=!1,rT(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class vD extends qr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:rT(this)}N(){super.N(),this.g&&(se.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xo(t){qr.call(this),this.h=t,this.g={}}ot(Xo,qr);var E_=[];function sT(t,e,n,r){Array.isArray(n)||(n&&(E_[0]=n.toString()),n=E_);for(var s=0;s<n.length;s++){var i=Yw(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function iT(t){Xf(t.g,function(e,n){this.g.hasOwnProperty(n)&&Zf(e)},t),t.g={}}Xo.prototype.N=function(){Xo.$.N.call(this),iT(this)};Xo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function su(){this.g=!0}su.prototype.Ea=function(){this.g=!1};function ED(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function wD(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Xs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+ID(t,n)+(r?" "+r:"")})}function TD(t,e){t.info(function(){return"TIMEOUT: "+e})}su.prototype.info=function(){};function ID(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return np(n)}catch{return e}}var Cs={},w_=null;function iu(){return w_=w_||new it}Cs.Ta="serverreachability";function oT(t){It.call(this,Cs.Ta,t)}ot(oT,It);function Jo(t){const e=iu();ht(e,new oT(e))}Cs.STAT_EVENT="statevent";function aT(t,e){It.call(this,Cs.STAT_EVENT,t),this.stat=e}ot(aT,It);function Ct(t){const e=iu();ht(e,new aT(e,t))}Cs.Ua="timingevent";function lT(t,e){It.call(this,Cs.Ua,t),this.size=e}ot(lT,It);function va(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return se.setTimeout(function(){t()},e)}var ou={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},cT={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function op(){}op.prototype.h=null;function T_(t){return t.h||(t.h=t.i())}function uT(){}var Ea={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ap(){It.call(this,"d")}ot(ap,It);function lp(){It.call(this,"c")}ot(lp,It);var vd;function au(){}ot(au,op);au.prototype.g=function(){return new XMLHttpRequest};au.prototype.i=function(){return{}};vd=new au;function wa(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Xo(this),this.P=bD,t=pd?125:void 0,this.V=new ru(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new hT}function hT(){this.i=null,this.g="",this.h=!1}var bD=45e3,dT={},Ed={};$=wa.prototype;$.setTimeout=function(t){this.P=t};function wd(t,e,n){t.L=1,t.A=cu(tr(e)),t.u=n,t.S=!0,fT(t,null)}function fT(t,e){t.G=Date.now(),Ta(t),t.B=tr(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),wT(n.i,"t",r),t.o=0,n=t.l.J,t.h=new hT,t.g=jT(t.l,n?e:null,!t.u),0<t.O&&(t.M=new vD(Tt(t.Pa,t,t.g),t.O)),sT(t.U,t.g,"readystatechange",t.nb),e=t.I?Gw(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Jo(),ED(t.j,t.v,t.B,t.m,t.W,t.u)}$.nb=function(t){t=t.target;const e=this.M;e&&Sn(t)==3?e.l():this.Pa(t)};$.Pa=function(t){try{if(t==this.g)e:{const u=Sn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||pd||this.g&&(this.h.h||this.g.ja()||S_(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Jo(3):Jo(2)),lu(this);var n=this.g.da();this.ca=n;t:if(pT(this)){var r=S_(this.g);t="";var s=r.length,i=Sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){ns(this),To(this);var o="";break t}this.h.i=new se.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,wD(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ko(a)){var c=a;break t}}c=null}if(n=c)Xs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Td(this,n);else{this.i=!1,this.s=3,Ct(12),ns(this),To(this);break e}}this.S?(gT(this,u,o),pd&&this.i&&u==3&&(sT(this.U,this.V,"tick",this.mb),this.V.start())):(Xs(this.j,this.m,o,null),Td(this,o)),u==4&&ns(this),this.i&&!this.J&&(u==4?FT(this.l,this):(this.i=!1,Ta(this)))}else HD(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Ct(12)):(this.s=0,Ct(13)),ns(this),To(this)}}}catch{}finally{}};function pT(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function gT(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=AD(t,n),s==Ed){e==4&&(t.s=4,Ct(14),r=!1),Xs(t.j,t.m,null,"[Incomplete Response]");break}else if(s==dT){t.s=4,Ct(15),Xs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Xs(t.j,t.m,s,null),Td(t,s);pT(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Ct(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),pp(e),e.M=!0,Ct(11))):(Xs(t.j,t.m,n,"[Invalid Chunked Response]"),ns(t),To(t))}$.mb=function(){if(this.g){var t=Sn(this.g),e=this.g.ja();this.o<e.length&&(lu(this),gT(this,t,e),this.i&&t!=4&&Ta(this))}};function AD(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Ed:(n=Number(e.substring(n,r)),isNaN(n)?dT:(r+=1,r+n>e.length?Ed:(e=e.slice(r,r+n),t.o=r+n,e)))}$.cancel=function(){this.J=!0,ns(this)};function Ta(t){t.Y=Date.now()+t.P,mT(t,t.P)}function mT(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=va(Tt(t.lb,t),e)}function lu(t){t.C&&(se.clearTimeout(t.C),t.C=null)}$.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(TD(this.j,this.B),this.L!=2&&(Jo(),Ct(17)),ns(this),this.s=2,To(this)):mT(this,this.Y-t)};function To(t){t.l.H==0||t.J||FT(t.l,t)}function ns(t){lu(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,sp(t.V),iT(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Td(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Id(n.i,t))){if(!t.K&&Id(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)ec(n),fu(n);else break e;fp(n),Ct(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=va(Tt(n.ib,n),6e3));if(1>=bT(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else rs(n,11)}else if((t.K||n.g==t)&&ec(n),!Ko(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=r.i;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(cp(i,i.h),i.h=null))}if(r.F){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,Ve(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=BT(r,r.J?r.pa:null,r.Y),o.K){AT(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(lu(a),Ta(a)),r.g=o}else LT(r);0<n.j.length&&pu(n)}else c[0]!="stop"&&c[0]!="close"||rs(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?rs(n,7):dp(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Jo(4)}catch{}}function SD(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map!="undefined"&&t instanceof Map||typeof Set!="undefined"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Zc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function CD(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map!="undefined"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set!="undefined"&&t instanceof Set)){if(Zc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function _T(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Zc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=CD(t),r=SD(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var yT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function RD(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function hs(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof hs){this.h=t.h,Jl(this,t.j),this.s=t.s,this.g=t.g,Zl(this,t.m),this.l=t.l;var e=t.i,n=new Zo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),I_(this,n),this.o=t.o}else t&&(e=String(t).match(yT))?(this.h=!1,Jl(this,e[1]||"",!0),this.s=ao(e[2]||""),this.g=ao(e[3]||"",!0),Zl(this,e[4]),this.l=ao(e[5]||"",!0),I_(this,e[6]||"",!0),this.o=ao(e[7]||"")):(this.h=!1,this.i=new Zo(null,this.h))}hs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(lo(e,b_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(lo(e,b_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(lo(n,n.charAt(0)=="/"?xD:kD,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",lo(n,OD)),t.join("")};function tr(t){return new hs(t)}function Jl(t,e,n){t.j=n?ao(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Zl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function I_(t,e,n){e instanceof Zo?(t.i=e,DD(t.i,t.h)):(n||(e=lo(e,ND)),t.i=new Zo(e,t.h))}function Ve(t,e,n){t.i.set(e,n)}function cu(t){return Ve(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ao(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function lo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,PD),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function PD(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var b_=/[#\/\?@]/g,kD=/[#\?:]/g,xD=/[#\?]/g,ND=/[#\?@]/g,OD=/#/g;function Zo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Wr(t){t.g||(t.g=new Map,t.h=0,t.i&&RD(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}$=Zo.prototype;$.add=function(t,e){Wr(this),this.i=null,t=Fi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function vT(t,e){Wr(t),e=Fi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ET(t,e){return Wr(t),e=Fi(t,e),t.g.has(e)}$.forEach=function(t,e){Wr(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};$.ta=function(){Wr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};$.Z=function(t){Wr(this);let e=[];if(typeof t=="string")ET(this,t)&&(e=e.concat(this.g.get(Fi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};$.set=function(t,e){return Wr(this),this.i=null,t=Fi(this,t),ET(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};$.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function wT(t,e,n){vT(t,e),0<n.length&&(t.i=null,t.g.set(Fi(t,e),Qf(n)),t.h+=n.length)}$.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Fi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function DD(t,e){e&&!t.j&&(Wr(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(vT(this,r),wT(this,s,n))},t)),t.j=e}var MD=class{constructor(t,e){this.g=t,this.map=e}};function TT(t){this.l=t||LD,se.PerformanceNavigationTiming?(t=se.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(se.g&&se.g.Ka&&se.g.Ka()&&se.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var LD=10;function IT(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function bT(t){return t.h?1:t.g?t.g.size:0}function Id(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function cp(t,e){t.g?t.g.add(e):t.h=e}function AT(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}TT.prototype.cancel=function(){if(this.i=ST(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ST(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Qf(t.i)}var VD=class{stringify(t){return se.JSON.stringify(t,void 0)}parse(t){return se.JSON.parse(t,void 0)}};function FD(){this.g=new VD}function UD(t,e,n){const r=n||"";try{_T(t,function(s,i){let o=s;_a(s)&&(o=np(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function $D(t,e){const n=new su;if(se.Image){const r=new Image;r.onload=Xa(Za,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Xa(Za,n,r,"TestLoadImage: error",!1,e),r.onabort=Xa(Za,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Xa(Za,n,r,"TestLoadImage: timeout",!1,e),se.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Za(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function uu(t){this.l=t.ec||null,this.j=t.ob||!1}ot(uu,op);uu.prototype.g=function(){return new hu(this.l,this.j)};uu.prototype.i=function(t){return function(){return t}}({});function hu(t,e){it.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=up,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ot(hu,it);var up=0;$=hu.prototype;$.open=function(t,e){if(this.readyState!=up)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ea(this)};$.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||se).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};$.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ia(this)),this.readyState=up};$.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ea(this)),this.g&&(this.readyState=3,ea(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof se.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;CT(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function CT(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}$.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ia(this):ea(this),this.readyState==3&&CT(this)}};$.Za=function(t){this.g&&(this.response=this.responseText=t,Ia(this))};$.Ya=function(t){this.g&&(this.response=t,Ia(this))};$.ka=function(){this.g&&Ia(this)};function Ia(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ea(t)}$.setRequestHeader=function(t,e){this.v.append(t,e)};$.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};$.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ea(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(hu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var BD=se.JSON.parse;function je(t){it.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=RT,this.L=this.M=!1}ot(je,it);var RT="",jD=/^https?$/i,qD=["POST","PUT"];$=je.prototype;$.Oa=function(t){this.M=t};$.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():vd.g(),this.C=this.u?T_(this.u):T_(vd),this.g.onreadystatechange=Tt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){A_(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=se.FormData&&t instanceof se.FormData,!(0<=Ww(qD,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{xT(this),0<this.B&&((this.L=WD(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Tt(this.ua,this)):this.A=ip(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){A_(this,i)}};function WD(t){return yi&&typeof t.timeout=="number"&&t.ontimeout!==void 0}$.ua=function(){typeof Gf!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ht(this,"timeout"),this.abort(8))};function A_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,PT(t),du(t)}function PT(t){t.F||(t.F=!0,ht(t,"complete"),ht(t,"error"))}$.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ht(this,"complete"),ht(this,"abort"),du(this))};$.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),du(this,!0)),je.$.N.call(this)};$.La=function(){this.s||(this.G||this.v||this.l?kT(this):this.kb())};$.kb=function(){kT(this)};function kT(t){if(t.h&&typeof Gf!="undefined"&&(!t.C[1]||Sn(t)!=4||t.da()!=2)){if(t.v&&Sn(t)==4)ip(t.La,0,t);else if(ht(t,"readystatechange"),Sn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(yT)[1]||null;!s&&se.self&&se.self.location&&(s=se.self.location.protocol.slice(0,-1)),r=!jD.test(s?s.toLowerCase():"")}n=r}if(n)ht(t,"complete"),ht(t,"success");else{t.m=6;try{var i=2<Sn(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",PT(t)}}finally{du(t)}}}}function du(t,e){if(t.g){xT(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ht(t,"ready");try{n.onreadystatechange=r}catch{}}}function xT(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(se.clearTimeout(t.A),t.A=null)}$.isActive=function(){return!!this.g};function Sn(t){return t.g?t.g.readyState:0}$.da=function(){try{return 2<Sn(this)?this.g.status:-1}catch{return-1}};$.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};$.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),BD(e)}};function S_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case RT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function HD(t){const e={};t=(t.g&&2<=Sn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Ko(t[r]))continue;var n=mD(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}cD(e,function(r){return r.join(", ")})}$.Ia=function(){return this.m};$.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function NT(t){let e="";return Xf(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function hp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=NT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ve(t,e,n))}function Yi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function OT(t){this.Ga=0,this.j=[],this.l=new su,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Yi("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Yi("baseRetryDelayMs",5e3,t),this.hb=Yi("retryDelaySeedMs",1e4,t),this.eb=Yi("forwardChannelMaxRetries",2,t),this.xa=Yi("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new TT(t&&t.concurrentRequestLimit),this.Ja=new FD,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}$=OT.prototype;$.ra=8;$.H=1;function dp(t){if(DT(t),t.H==3){var e=t.W++,n=tr(t.I);if(Ve(n,"SID",t.K),Ve(n,"RID",e),Ve(n,"TYPE","terminate"),ba(t,n),e=new wa(t,t.l,e),e.L=2,e.A=cu(tr(n)),n=!1,se.navigator&&se.navigator.sendBeacon)try{n=se.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&se.Image&&(new Image().src=e.A,n=!0),n||(e.g=jT(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Ta(e)}$T(t)}function fu(t){t.g&&(pp(t),t.g.cancel(),t.g=null)}function DT(t){fu(t),t.u&&(se.clearTimeout(t.u),t.u=null),ec(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&se.clearTimeout(t.m),t.m=null)}function pu(t){if(!IT(t.i)&&!t.m){t.m=!0;var e=t.Na;Qo||nT(),Yo||(Qo(),Yo=!0),rp.add(e,t),t.C=0}}function zD(t,e){return bT(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=va(Tt(t.Na,t,e),UT(t,t.C)),t.C++,!0)}$.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new wa(this,this.l,t);let i=this.s;if(this.U&&(i?(i=Gw(i),Qw(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=MT(this,s,e),n=tr(this.I),Ve(n,"RID",t),Ve(n,"CVER",22),this.F&&Ve(n,"X-HTTP-Session-Id",this.F),ba(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(NT(i)))+"&"+e:this.o&&hp(n,this.o,i)),cp(this.i,s),this.bb&&Ve(n,"TYPE","init"),this.P?(Ve(n,"$req",e),Ve(n,"SID","null"),s.aa=!0,wd(s,n,null)):wd(s,n,e),this.H=2}}else this.H==3&&(t?C_(this,t):this.j.length==0||IT(this.i)||C_(this))};function C_(t,e){var n;e?n=e.m:n=t.W++;const r=tr(t.I);Ve(r,"SID",t.K),Ve(r,"RID",n),Ve(r,"AID",t.V),ba(t,r),t.o&&t.s&&hp(r,t.o,t.s),n=new wa(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=MT(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),cp(t.i,n),wd(n,r,e)}function ba(t,e){t.na&&Xf(t.na,function(n,r){Ve(e,r,n)}),t.h&&_T({},function(n,r){Ve(e,r,n)})}function MT(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Tt(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=i,0>c)i=Math.max(0,s[l].g-100),a=!1;else try{UD(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function LT(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Qo||nT(),Yo||(Qo(),Yo=!0),rp.add(e,t),t.A=0}}function fp(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=va(Tt(t.Ma,t),UT(t,t.A)),t.A++,!0)}$.Ma=function(){if(this.u=null,VT(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=va(Tt(this.jb,this),t)}};$.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ct(10),fu(this),VT(this))};function pp(t){t.B!=null&&(se.clearTimeout(t.B),t.B=null)}function VT(t){t.g=new wa(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=tr(t.wa);Ve(e,"RID","rpc"),Ve(e,"SID",t.K),Ve(e,"AID",t.V),Ve(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ve(e,"TO",t.qa),Ve(e,"TYPE","xmlhttp"),ba(t,e),t.o&&t.s&&hp(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=cu(tr(e)),n.u=null,n.S=!0,fT(n,t)}$.ib=function(){this.v!=null&&(this.v=null,fu(this),fp(this),Ct(19))};function ec(t){t.v!=null&&(se.clearTimeout(t.v),t.v=null)}function FT(t,e){var n=null;if(t.g==e){ec(t),pp(t),t.g=null;var r=2}else if(Id(t.i,e))n=e.F,AT(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=iu(),ht(r,new lT(r,n)),pu(t)}else LT(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&zD(t,e)||r==2&&fp(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:rs(t,5);break;case 4:rs(t,10);break;case 3:rs(t,6);break;default:rs(t,2)}}}function UT(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function rs(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Tt(t.pb,t);n||(n=new hs("//www.google.com/images/cleardot.gif"),se.location&&se.location.protocol=="http"||Jl(n,"https"),cu(n)),$D(n.toString(),r)}else Ct(2);t.H=0,t.h&&t.h.za(e),$T(t),DT(t)}$.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Ct(2)):(this.l.info("Failed to ping google.com"),Ct(1))};function $T(t){if(t.H=0,t.ma=[],t.h){const e=ST(t.i);(e.length!=0||t.j.length!=0)&&(__(t.ma,e),__(t.ma,t.j),t.i.i.length=0,Qf(t.j),t.j.length=0),t.h.ya()}}function BT(t,e,n){var r=n instanceof hs?tr(n):new hs(n);if(r.g!="")e&&(r.g=e+"."+r.g),Zl(r,r.m);else{var s=se.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new hs(null);r&&Jl(i,r),e&&(i.g=e),s&&Zl(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Ve(r,n,e),Ve(r,"VER",t.ra),ba(t,r),r}function jT(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new je(new uu({ob:n})):new je(t.va),e.Oa(t.J),e}$.isActive=function(){return!!this.h&&this.h.isActive(this)};function qT(){}$=qT.prototype;$.Ba=function(){};$.Aa=function(){};$.za=function(){};$.ya=function(){};$.isActive=function(){return!0};$.Va=function(){};function tc(){if(yi&&!(10<=Number(iD)))throw Error("Environmental error: no available transport.")}tc.prototype.g=function(t,e){return new Wt(t,e)};function Wt(t,e){it.call(this),this.g=new OT(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ko(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ko(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ui(this)}ot(Wt,it);Wt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Ct(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=BT(t,null,t.Y),pu(t)};Wt.prototype.close=function(){dp(this.g)};Wt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=np(t),t=n);e.j.push(new MD(e.fb++,t)),e.H==3&&pu(e)};Wt.prototype.N=function(){this.g.h=null,delete this.j,dp(this.g),delete this.g,Wt.$.N.call(this)};function WT(t){ap.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ot(WT,ap);function HT(){lp.call(this),this.status=1}ot(HT,lp);function Ui(t){this.g=t}ot(Ui,qT);Ui.prototype.Ba=function(){ht(this.g,"a")};Ui.prototype.Aa=function(t){ht(this.g,new WT(t))};Ui.prototype.za=function(t){ht(this.g,new HT)};Ui.prototype.ya=function(){ht(this.g,"b")};function KD(){this.blockSize=-1}function pn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ot(pn,KD);pn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function vh(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}pn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)vh(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){vh(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){vh(this,r),s=0;break}}this.h=s,this.i+=e};pn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Ce(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var GD={};function gp(t){return-128<=t&&128>t?nD(t,function(e){return new Ce([e|0],0>e?-1:0)}):new Ce([t|0],0>t?-1:0)}function Cn(t){if(isNaN(t)||!isFinite(t))return oi;if(0>t)return lt(Cn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=bd;return new Ce(e,0)}function zT(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return lt(zT(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Cn(Math.pow(e,8)),r=oi,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Cn(Math.pow(e,i)),r=r.R(i).add(Cn(o))):(r=r.R(n),r=r.add(Cn(o)))}return r}var bd=4294967296,oi=gp(0),Ad=gp(1),R_=gp(16777216);$=Ce.prototype;$.ea=function(){if(Kt(this))return-lt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:bd+r)*e,e*=bd}return t};$.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(zn(this))return"0";if(Kt(this))return"-"+lt(this).toString(t);for(var e=Cn(Math.pow(t,6)),n=this,r="";;){var s=rc(n,e).g;n=nc(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,zn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};$.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function zn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Kt(t){return t.h==-1}$.X=function(t){return t=nc(this,t),Kt(t)?-1:zn(t)?0:1};function lt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Ce(n,~t.h).add(Ad)}$.abs=function(){return Kt(this)?lt(this):this};$.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Ce(n,n[n.length-1]&-2147483648?-1:0)};function nc(t,e){return t.add(lt(e))}$.R=function(t){if(zn(this)||zn(t))return oi;if(Kt(this))return Kt(t)?lt(this).R(lt(t)):lt(lt(this).R(t));if(Kt(t))return lt(this.R(lt(t)));if(0>this.X(R_)&&0>t.X(R_))return Cn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*r+2*s]+=o*l,el(n,2*r+2*s),n[2*r+2*s+1]+=i*l,el(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,el(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,el(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Ce(n,0)};function el(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Xi(t,e){this.g=t,this.h=e}function rc(t,e){if(zn(e))throw Error("division by zero");if(zn(t))return new Xi(oi,oi);if(Kt(t))return e=rc(lt(t),e),new Xi(lt(e.g),lt(e.h));if(Kt(e))return e=rc(t,lt(e)),new Xi(lt(e.g),e.h);if(30<t.g.length){if(Kt(t)||Kt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ad,r=e;0>=r.X(t);)n=P_(n),r=P_(r);var s=qs(n,1),i=qs(r,1);for(r=qs(r,2),n=qs(n,2);!zn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=qs(r,1),n=qs(n,1)}return e=nc(t,s.R(e)),new Xi(s,e)}for(s=oi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Cn(n),o=i.R(e);Kt(o)||0<o.X(t);)n-=r,i=Cn(n),o=i.R(e);zn(i)&&(i=Ad),s=s.add(i),t=nc(t,o)}return new Xi(s,t)}$.gb=function(t){return rc(this,t).h};$.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Ce(n,this.h&t.h)};$.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Ce(n,this.h|t.h)};$.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Ce(n,this.h^t.h)};function P_(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Ce(n,t.h)}function qs(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Ce(s,t.h)}tc.prototype.createWebChannel=tc.prototype.g;Wt.prototype.send=Wt.prototype.u;Wt.prototype.open=Wt.prototype.m;Wt.prototype.close=Wt.prototype.close;ou.NO_ERROR=0;ou.TIMEOUT=8;ou.HTTP_ERROR=6;cT.COMPLETE="complete";uT.EventType=Ea;Ea.OPEN="a";Ea.CLOSE="b";Ea.ERROR="c";Ea.MESSAGE="d";it.prototype.listen=it.prototype.O;je.prototype.listenOnce=je.prototype.P;je.prototype.getLastError=je.prototype.Sa;je.prototype.getLastErrorCode=je.prototype.Ia;je.prototype.getStatus=je.prototype.da;je.prototype.getResponseJson=je.prototype.Wa;je.prototype.getResponseText=je.prototype.ja;je.prototype.send=je.prototype.ha;je.prototype.setWithCredentials=je.prototype.Oa;pn.prototype.digest=pn.prototype.l;pn.prototype.reset=pn.prototype.reset;pn.prototype.update=pn.prototype.j;Ce.prototype.add=Ce.prototype.add;Ce.prototype.multiply=Ce.prototype.R;Ce.prototype.modulo=Ce.prototype.gb;Ce.prototype.compare=Ce.prototype.X;Ce.prototype.toNumber=Ce.prototype.ea;Ce.prototype.toString=Ce.prototype.toString;Ce.prototype.getBits=Ce.prototype.D;Ce.fromNumber=Cn;Ce.fromString=zT;var QD=function(){return new tc},YD=function(){return iu()},Eh=ou,XD=cT,JD=Cs,k_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},tl=uT,ZD=je,e1=pn,ai=Ce;const x_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $i="10.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=new da("@firebase/firestore");function Ji(){return ys.logLevel}function F(t,...e){if(ys.logLevel<=pe.DEBUG){const n=e.map(mp);ys.debug(`Firestore (${$i}): ${t}`,...n)}}function Ln(t,...e){if(ys.logLevel<=pe.ERROR){const n=e.map(mp);ys.error(`Firestore (${$i}): ${t}`,...n)}}function vi(t,...e){if(ys.logLevel<=pe.WARN){const n=e.map(mp);ys.warn(`Firestore (${$i}): ${t}`,...n)}}function mp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(t="Unexpected state"){const e=`FIRESTORE (${$i}) INTERNAL ASSERTION FAILED: `+t;throw Ln(e),new Error(e)}function xe(t,e){t||re()}function ue(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends yn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class t1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(mt.UNAUTHENTICATED))}shutdown(){}}class n1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class r1{constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new xn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new xn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new xn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(xe(typeof r.accessToken=="string"),new KT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return xe(e===null||typeof e=="string"),new mt(e)}}class s1{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class i1{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new s1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class o1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class a1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(xe(typeof n.token=="string"),this.R=n.token,new o1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l1(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=l1(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Te(t,e){return t<e?-1:t>e?1:0}function Ei(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ae(e)}static min(){return new ae(new Je(0,0))}static max(){return new ae(new Je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,n,r){n===void 0?n=0:n>e.length&&re(),r===void 0?r=e.length-n:r>e.length-n&&re(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ta.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ta?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ne extends ta{construct(e,n,r){return new Ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(w.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ne(n)}static emptyPath(){return new Ne([])}}const c1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends ta{construct(e,n,r){return new ut(e,n,r)}static isValidIdentifier(e){return c1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new M(w.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new M(w.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new M(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new M(w.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ut(n)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Ne.fromString(e))}static fromName(e){return new X(Ne.fromString(e).popFirst(5))}static empty(){return new X(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Ne(e.slice()))}}function u1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ae.fromTimestamp(r===1e9?new Je(n+1,0):new Je(n,r));return new Mr(s,X.empty(),e)}function h1(t){return new Mr(t.readTime,t.key,-1)}class Mr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Mr(ae.min(),X.empty(),-1)}static max(){return new Mr(ae.max(),X.empty(),-1)}}function d1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:Te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class p1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aa(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==f1)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,r)=>{n(e)})}static reject(e){return new A((n,r)=>{r(e)})}static waitFor(e){return new A((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=A.resolve(!1);for(const r of e)n=n.next(s=>s?A.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new A((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new A((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new xn,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Io(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=yp(r.target.error);this.V.reject(new Io(e,s))}}static open(e,n,r,s){try{return new _p(n,e.transaction(s,r))}catch(i){throw new Io(n,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(F("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new m1(n)}}class ss{constructor(e,n,r){this.name=e,this.version=n,this.p=r,ss.S(Ye())===12.2&&Ln("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return F("SimpleDb","Removing database:",e),es(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Vf())return!1;if(ss.C())return!0;const e=Ye(),n=ss.S(e),r=0<n&&n<10,s=ss.v(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static C(){var e;return typeof process!="undefined"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(F("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new Io(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new M(w.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new M(w.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Io(e,o))},s.onupgradeneeded=i=>{F("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{F("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=_p.open(this.db,e,i?"readonly":"readwrite",r),l=s(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),A.reject(c))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,c=l.name!=="FirebaseError"&&o<3;if(F("SimpleDb","Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class g1{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return es(this.k.delete())}}class Io extends M{constructor(e,n){super(w.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Sa(t){return t.name==="IndexedDbTransactionError"}class m1{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(F("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(F("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),es(r)}add(e){return F("SimpleDb","ADD",this.store.name,e,e),es(this.store.add(e))}get(e){return es(this.store.get(e)).next(n=>(n===void 0&&(n=null),F("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return F("SimpleDb","DELETE",this.store.name,e),es(this.store.delete(e))}count(){return F("SimpleDb","COUNT",this.store.name),es(this.store.count())}W(e,n){const r=this.options(e,n),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new A((o,a)=>{i.onerror=l=>{a(l.target.error)},i.onsuccess=l=>{o(l.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,l)=>{o.push(l)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new A((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(e,n){F("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const s=this.cursor(r);return this.G(s,n)}Z(e){const n=this.cursor({});return new A((r,s)=>{n.onerror=i=>{const o=yp(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new A((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const l=new g1(a),c=n(a.primaryKey,a.value,l);if(c instanceof A){const u=c.catch(h=>(l.done(),A.reject(h)));r.push(u)}l.isDone?s():l.$===null?a.continue():a.continue(l.$)}}).next(()=>A.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function es(t){return new A((e,n)=>{t.onsuccess=r=>{const s=r.target.result;e(s)},t.onerror=r=>{const s=yp(r.target.error);n(s)}})}let N_=!1;function yp(t){const e=ss.S(Ye());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new M("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return N_||(N_=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}vp._e=-1;function gu(t){return t==null}function sc(t){return t===0&&1/t==-1/0}function _1(t){return typeof t=="number"&&Number.isInteger(t)&&!sc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Rs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function QT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new nl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new nl(this.root,e,this.comparator,!1)}getReverseIterator(){return new nl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new nl(this.root,e,this.comparator,!0)}}class nl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:at.RED,this.left=s!=null?s:at.EMPTY,this.right=i!=null?i:at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new at(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return at.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(e,n,r,s,i){return this}insert(e,n,r){return new at(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new D_(this.data.getIterator())}getIteratorFrom(e){return new D_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof dt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new dt(this.comparator);return n.data=e,n}}class D_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.fields=e,e.sort(ut.comparator)}static empty(){return new Ut([])}unionWith(e){let n=new dt(ut.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ut(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ei(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException!="undefined"&&i instanceof DOMException?new YT("Invalid base64 string: "+i):i}}(e);return new bt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new bt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const y1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lr(t){if(xe(!!t),typeof t=="string"){let e=0;const n=y1.exec(t);if(xe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function vs(t){return typeof t=="string"?bt.fromBase64String(t):bt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ep(t){const e=t.mapValue.fields.__previous_value__;return mu(e)?Ep(e):e}function na(t){const e=Lr(t.mapValue.fields.__local_write_time__.timestampValue);return new Je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e,n,r,s,i,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class ra{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ra("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ra&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Es(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?mu(t)?4:E1(t)?9007199254740991:10:re()}function Vn(t,e){if(t===e)return!0;const n=Es(t);if(n!==Es(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return na(t).isEqual(na(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Lr(s.timestampValue),a=Lr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return vs(s.bytesValue).isEqual(vs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ze(s.geoPointValue.latitude)===ze(i.geoPointValue.latitude)&&ze(s.geoPointValue.longitude)===ze(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ze(s.integerValue)===ze(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ze(s.doubleValue),a=ze(i.doubleValue);return o===a?sc(o)===sc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ei(t.arrayValue.values||[],e.arrayValue.values||[],Vn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(O_(o)!==O_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Vn(o[l],a[l])))return!1;return!0}(t,e);default:return re()}}function sa(t,e){return(t.values||[]).find(n=>Vn(n,e))!==void 0}function wi(t,e){if(t===e)return 0;const n=Es(t),r=Es(e);if(n!==r)return Te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Te(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=ze(i.integerValue||i.doubleValue),l=ze(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return M_(t.timestampValue,e.timestampValue);case 4:return M_(na(t),na(e));case 5:return Te(t.stringValue,e.stringValue);case 6:return function(i,o){const a=vs(i),l=vs(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=Te(a[c],l[c]);if(u!==0)return u}return Te(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=Te(ze(i.latitude),ze(o.latitude));return a!==0?a:Te(ze(i.longitude),ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=wi(a[c],l[c]);if(u)return u}return Te(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===rl.mapValue&&o===rl.mapValue)return 0;if(i===rl.mapValue)return 1;if(o===rl.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=Te(l[h],u[h]);if(d!==0)return d;const f=wi(a[l[h]],c[u[h]]);if(f!==0)return f}return Te(l.length,u.length)}(t.mapValue,e.mapValue);default:throw re()}}function M_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Te(t,e);const n=Lr(t),r=Lr(e),s=Te(n.seconds,r.seconds);return s!==0?s:Te(n.nanos,r.nanos)}function Ti(t){return Sd(t)}function Sd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Lr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return vs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Sd(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Sd(n.fields[o])}`;return s+"}"}(t.mapValue):re()}function ic(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Cd(t){return!!t&&"integerValue"in t}function wp(t){return!!t&&"arrayValue"in t}function L_(t){return!!t&&"nullValue"in t}function V_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Il(t){return!!t&&"mapValue"in t}function bo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Rs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=bo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=bo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function E1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.value=e}static empty(){return new xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Il(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=bo(n)}setAll(e){let n=ut.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=bo(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Il(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Il(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Rs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new xt(bo(this.value))}}function XT(t){const e=[];return Rs(t.fields,(n,r)=>{const s=new ut([n]);if(Il(r)){const i=XT(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ut(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new _t(e,0,ae.min(),ae.min(),ae.min(),xt.empty(),0)}static newFoundDocument(e,n,r,s){return new _t(e,1,n,ae.min(),r,s,0)}static newNoDocument(e,n){return new _t(e,2,n,ae.min(),ae.min(),xt.empty(),0)}static newUnknownDocument(e,n){return new _t(e,3,n,ae.min(),ae.min(),xt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,n){this.position=e,this.inclusive=n}}function F_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=X.comparator(X.fromName(o.referenceValue),n.key):r=wi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function U_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Vn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,n="asc"){this.field=e,this.dir=n}}function w1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{}class Ke extends JT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new I1(e,n,r):n==="array-contains"?new S1(e,r):n==="in"?new C1(e,r):n==="not-in"?new R1(e,r):n==="array-contains-any"?new P1(e,r):new Ke(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new b1(e,r):new A1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(wi(n,this.value)):n!==null&&Es(this.value)===Es(n)&&this.matchesComparison(wi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class gn extends JT{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new gn(e,n)}matches(e){return ZT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function ZT(t){return t.op==="and"}function e0(t){return T1(t)&&ZT(t)}function T1(t){for(const e of t.filters)if(e instanceof gn)return!1;return!0}function Rd(t){if(t instanceof Ke)return t.field.canonicalString()+t.op.toString()+Ti(t.value);if(e0(t))return t.filters.map(e=>Rd(e)).join(",");{const e=t.filters.map(n=>Rd(n)).join(",");return`${t.op}(${e})`}}function t0(t,e){return t instanceof Ke?function(r,s){return s instanceof Ke&&r.op===s.op&&r.field.isEqual(s.field)&&Vn(r.value,s.value)}(t,e):t instanceof gn?function(r,s){return s instanceof gn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&t0(o,s.filters[a]),!0):!1}(t,e):void re()}function n0(t){return t instanceof Ke?function(n){return`${n.field.canonicalString()} ${n.op} ${Ti(n.value)}`}(t):t instanceof gn?function(n){return n.op.toString()+" {"+n.getFilters().map(n0).join(" ,")+"}"}(t):"Filter"}class I1 extends Ke{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class b1 extends Ke{constructor(e,n){super(e,"in",n),this.keys=r0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class A1 extends Ke{constructor(e,n){super(e,"not-in",n),this.keys=r0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function r0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class S1 extends Ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return wp(n)&&sa(n.arrayValue,this.value)}}class C1 extends Ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&sa(this.value.arrayValue,n)}}class R1 extends Ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(sa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!sa(this.value.arrayValue,n)}}class P1 extends Ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!wp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>sa(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function $_(t,e=null,n=[],r=[],s=null,i=null,o=null){return new k1(t,e,n,r,s,i,o)}function Tp(t){const e=ue(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Rd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),gu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ti(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ti(r)).join(",")),e.ce=n}return e.ce}function Ip(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!w1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!t0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!U_(t.startAt,e.startAt)&&U_(t.endAt,e.endAt)}function Pd(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function x1(t,e,n,r,s,i,o,a){return new Ps(t,e,n,r,s,i,o,a)}function s0(t){return new Ps(t)}function B_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function bp(t){return t.collectionGroup!==null}function li(t){const e=ue(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new dt(ut.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new ia(i,r))}),n.has(ut.keyField().canonicalString())||e.le.push(new ia(ut.keyField(),r))}return e.le}function Nn(t){const e=ue(t);return e.he||(e.he=i0(e,li(t))),e.he}function i0(t,e){if(t.limitType==="F")return $_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ia(s.field,i)});const n=t.endAt?new Ii(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ii(t.startAt.position,t.startAt.inclusive):null;return $_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function kd(t,e){const n=t.filters.concat([e]);return new Ps(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function oc(t,e,n){return new Ps(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function _u(t,e){return Ip(Nn(t),Nn(e))&&t.limitType===e.limitType}function o0(t){return`${Tp(Nn(t))}|lt:${t.limitType}`}function Gs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>n0(s)).join(", ")}]`),gu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ti(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ti(s)).join(",")),`Target(${r})`}(Nn(t))}; limitType=${t.limitType})`}function yu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):X.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of li(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const c=F_(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,li(r),s)||r.endAt&&!function(o,a,l){const c=F_(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,li(r),s))}(t,e)}function N1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function a0(t){return(e,n)=>{let r=!1;for(const s of li(t)){const i=O1(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function O1(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?wi(l,c):re()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return re()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Rs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return QT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D1=new Be(X.comparator);function nr(){return D1}const l0=new Be(X.comparator);function co(...t){let e=l0;for(const n of t)e=e.insert(n.key,n);return e}function c0(t){let e=l0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function is(){return Ao()}function u0(){return Ao()}function Ao(){return new Bi(t=>t.toString(),(t,e)=>t.isEqual(e))}const M1=new Be(X.comparator),L1=new dt(X.comparator);function ge(...t){let e=L1;for(const n of t)e=e.add(n);return e}const V1=new dt(Te);function F1(){return V1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h0(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:sc(e)?"-0":e}}function d0(t){return{integerValue:""+t}}function U1(t,e){return _1(e)?d0(e):h0(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(){this._=void 0}}function $1(t,e,n){return t instanceof ac?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&mu(i)&&(i=Ep(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof oa?p0(t,e):t instanceof aa?g0(t,e):function(s,i){const o=f0(s,i),a=j_(o)+j_(s.Ie);return Cd(o)&&Cd(s.Ie)?d0(a):h0(s.serializer,a)}(t,e)}function B1(t,e,n){return t instanceof oa?p0(t,e):t instanceof aa?g0(t,e):n}function f0(t,e){return t instanceof lc?function(r){return Cd(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ac extends vu{}class oa extends vu{constructor(e){super(),this.elements=e}}function p0(t,e){const n=m0(e);for(const r of t.elements)n.some(s=>Vn(s,r))||n.push(r);return{arrayValue:{values:n}}}class aa extends vu{constructor(e){super(),this.elements=e}}function g0(t,e){let n=m0(e);for(const r of t.elements)n=n.filter(s=>!Vn(s,r));return{arrayValue:{values:n}}}class lc extends vu{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function j_(t){return ze(t.integerValue||t.doubleValue)}function m0(t){return wp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function j1(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof oa&&s instanceof oa||r instanceof aa&&s instanceof aa?Ei(r.elements,s.elements,Vn):r instanceof lc&&s instanceof lc?Vn(r.Ie,s.Ie):r instanceof ac&&s instanceof ac}(t.transform,e.transform)}class q1{constructor(e,n){this.version=e,this.transformResults=n}}class Ot{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ot}static exists(e){return new Ot(void 0,e)}static updateTime(e){return new Ot(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function bl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Eu{}function _0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new wu(t.key,Ot.none()):new Ca(t.key,t.data,Ot.none());{const n=t.data,r=xt.empty();let s=new dt(ut.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Hr(t.key,r,new Ut(s.toArray()),Ot.none())}}function W1(t,e,n){t instanceof Ca?function(s,i,o){const a=s.value.clone(),l=W_(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Hr?function(s,i,o){if(!bl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=W_(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(y0(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function So(t,e,n,r){return t instanceof Ca?function(i,o,a,l){if(!bl(i.precondition,o))return a;const c=i.value.clone(),u=H_(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Hr?function(i,o,a,l){if(!bl(i.precondition,o))return a;const c=H_(i.fieldTransforms,l,o),u=o.data;return u.setAll(y0(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return bl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function H1(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=f0(r.transform,s||null);i!=null&&(n===null&&(n=xt.empty()),n.set(r.field,i))}return n||null}function q_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ei(r,s,(i,o)=>j1(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ca extends Eu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Hr extends Eu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function y0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function W_(t,e,n){const r=new Map;xe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,B1(o,a,n[s]))}return r}function H_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,$1(i,o,e))}return r}class wu extends Eu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class z1 extends Eu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&W1(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=So(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=So(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=u0();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=_0(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ae.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ge())}isEqual(e){return this.batchId===e.batchId&&Ei(this.mutations,e.mutations,(n,r)=>q_(n,r))&&Ei(this.baseMutations,e.baseMutations,(n,r)=>q_(n,r))}}class Ap{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){xe(e.mutations.length===r.length);let s=function(){return M1}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Ap(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(e,n,r){this.alias=e,this.aggregateType=n,this.fieldPath=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var He,ye;function X1(t){switch(t){default:return re();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function v0(t){if(t===void 0)return Ln("GRPC error has no .code"),w.UNKNOWN;switch(t){case He.OK:return w.OK;case He.CANCELLED:return w.CANCELLED;case He.UNKNOWN:return w.UNKNOWN;case He.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case He.INTERNAL:return w.INTERNAL;case He.UNAVAILABLE:return w.UNAVAILABLE;case He.UNAUTHENTICATED:return w.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case He.NOT_FOUND:return w.NOT_FOUND;case He.ALREADY_EXISTS:return w.ALREADY_EXISTS;case He.PERMISSION_DENIED:return w.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case He.ABORTED:return w.ABORTED;case He.OUT_OF_RANGE:return w.OUT_OF_RANGE;case He.UNIMPLEMENTED:return w.UNIMPLEMENTED;case He.DATA_LOSS:return w.DATA_LOSS;default:return re()}}(ye=He||(He={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J1(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1=new ai([4294967295,4294967295],0);function z_(t){const e=J1().encode(t),n=new e1;return n.update(e),new Uint8Array(n.digest())}function K_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ai([n,r],0),new ai([s,i],0)]}class Sp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new uo(`Invalid padding: ${n}`);if(r<0)throw new uo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new uo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new uo(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=ai.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(ai.fromNumber(r)));return s.compare(Z1)===1&&(s=new ai([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=z_(e),[r,s]=K_(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Sp(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=z_(e),[r,s]=K_(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class uo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ra.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Tu(ae.min(),s,new Be(Te),nr(),ge())}}class Ra{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ra(r,n,ge(),ge(),ge())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,n,r,s){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=s}}class E0{constructor(e,n){this.targetId=e,this.fe=n}}class w0{constructor(e,n,r=bt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class G_{constructor(){this.ge=0,this.pe=Y_(),this.ye=bt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=ge(),n=ge(),r=ge();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:re()}}),new Ra(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=Y_()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,xe(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class eM{constructor(e){this.Le=e,this.ke=new Map,this.qe=nr(),this.Qe=Q_(),this.Ke=new Be(Te)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:re()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.fe.count,s=this.Ye(n);if(s){const i=s.target;if(Pd(i))if(r===0){const o=new X(i.path);this.We(n,o,_t.newNoDocument(o,ae.min()))}else xe(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=vs(r).toUint8Array()}catch(l){if(l instanceof YT)return vi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Sp(o,s,i)}catch(l){return vi(l instanceof uo?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Pd(a.target)){const l=new X(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,_t.newNoDocument(l,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=ge();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ye(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new Tu(e,n,this.Ke,this.qe,r);return this.qe=nr(),this.Qe=Q_(),this.Ke=new Be(Te),s}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new G_,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new dt(Te),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new G_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Q_(){return new Be(X.comparator)}function Y_(){return new Be(X.comparator)}const tM=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),nM=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),rM=(()=>({and:"AND",or:"OR"}))();class sM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function xd(t,e){return t.useProto3Json||gu(e)?e:{value:e}}function cc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function T0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function iM(t,e){return cc(t,e.toTimestamp())}function On(t){return xe(!!t),ae.fromTimestamp(function(n){const r=Lr(n);return new Je(r.seconds,r.nanos)}(t))}function Cp(t,e){return Nd(t,e).canonicalString()}function Nd(t,e){const n=function(s){return new Ne(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function I0(t){const e=Ne.fromString(t);return xe(P0(e)),e}function Od(t,e){return Cp(t.databaseId,e.path)}function wh(t,e){const n=I0(e);if(n.get(1)!==t.databaseId.projectId)throw new M(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(A0(n))}function b0(t,e){return Cp(t.databaseId,e)}function oM(t){const e=I0(t);return e.length===4?Ne.emptyPath():A0(e)}function Dd(t){return new Ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function A0(t){return xe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function X_(t,e,n){return{name:Od(t,e),fields:n.value.mapValue.fields}}function aM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:re()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(xe(u===void 0||typeof u=="string"),bt.fromBase64String(u||"")):(xe(u===void 0||u instanceof Uint8Array),bt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?w.UNKNOWN:v0(c.code);return new M(u,c.message||"")}(o);n=new w0(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=wh(t,r.document.name),i=On(r.document.updateTime),o=r.document.createTime?On(r.document.createTime):ae.min(),a=new xt({mapValue:{fields:r.document.fields}}),l=_t.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Al(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=wh(t,r.document),i=r.readTime?On(r.readTime):ae.min(),o=_t.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Al([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=wh(t,r.document),i=r.removedTargetIds||[];n=new Al([],i,s,null)}else{if(!("filter"in e))return re();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Y1(s,i),a=r.targetId;n=new E0(a,o)}}return n}function lM(t,e){let n;if(e instanceof Ca)n={update:X_(t,e.key,e.value)};else if(e instanceof wu)n={delete:Od(t,e.key)};else if(e instanceof Hr)n={update:X_(t,e.key,e.data),updateMask:mM(e.fieldMask)};else{if(!(e instanceof z1))return re();n={verify:Od(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof ac)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof oa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof aa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof lc)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw re()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:iM(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:re()}(t,e.precondition)),n}function cM(t,e){return t&&t.length>0?(xe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?On(s.updateTime):On(i);return o.isEqual(ae.min())&&(o=On(i)),new q1(o,s.transformResults||[])}(n,e))):[]}function uM(t,e){return{documents:[b0(t,e.path)]}}function S0(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=b0(t,s);const i=function(c){if(c.length!==0)return R0(gn.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(u=>function(d){return{field:Ir(d.field),direction:fM(d.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=xd(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ut:n,parent:s}}function hM(t){let e=oM(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){xe(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=C0(h);return d instanceof gn&&e0(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(g){return new ia(Qs(g.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,gu(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new Ii(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new Ii(f,d)}(n.endAt)),x1(e,s,o,i,a,"F",l,c)}function dM(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function C0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Qs(n.unaryFilter.field);return Ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Qs(n.unaryFilter.field);return Ke.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Qs(n.unaryFilter.field);return Ke.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Qs(n.unaryFilter.field);return Ke.create(o,"!=",{nullValue:"NULL_VALUE"});default:return re()}}(t):t.fieldFilter!==void 0?function(n){return Ke.create(Qs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return gn.create(n.compositeFilter.filters.map(r=>C0(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return re()}}(n.compositeFilter.op))}(t):re()}function fM(t){return tM[t]}function pM(t){return nM[t]}function gM(t){return rM[t]}function Ir(t){return{fieldPath:t.canonicalString()}}function Qs(t){return ut.fromServerFormat(t.fieldPath)}function R0(t){return t instanceof Ke?function(n){if(n.op==="=="){if(V_(n.value))return{unaryFilter:{field:Ir(n.field),op:"IS_NAN"}};if(L_(n.value))return{unaryFilter:{field:Ir(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(V_(n.value))return{unaryFilter:{field:Ir(n.field),op:"IS_NOT_NAN"}};if(L_(n.value))return{unaryFilter:{field:Ir(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ir(n.field),op:pM(n.op),value:n.value}}}(t):t instanceof gn?function(n){const r=n.getFilters().map(s=>R0(s));return r.length===1?r[0]:{compositeFilter:{op:gM(n.op),filters:r}}}(t):re()}function mM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function P0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,n,r,s,i=ae.min(),o=ae.min(),a=bt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new br(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _M{constructor(e){this.ct=e}}function yM(t){const e=hM({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?oc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vM{constructor(){this._n=new EM}addToCollectionParentIndex(e,n){return this._n.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}deleteAllFieldIndexes(e){return A.resolve()}createTargetIndexes(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(Mr.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(Mr.min())}updateCollectionGroup(e,n,r){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class EM{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new dt(Ne.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new dt(Ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new bi(0)}static Bn(){return new bi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wM{constructor(){this.changes=new Bi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TM{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IM{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&So(r.mutation,s,Ut.empty(),Je.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ge()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ge()){const s=is();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=co();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=is();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ge()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=nr();const o=Ao(),a=function(){return Ao()}();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof Hr)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),So(u.mutation,c,u.mutation.getFieldMask(),Je.now())):o.set(c.key,Ut.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new TM(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ao();let s=new Be((o,a)=>o-a),i=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||Ut.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(s.get(a.batchId)||ge()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=u0();u.forEach(d=>{if(!i.has(d)){const f=_0(n.get(d),r.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return A.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return X.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):bp(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):A.resolve(is());let a=-1,l=i;return o.next(c=>A.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?A.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,ge())).next(u=>({batchId:a,changes:c0(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let s=co();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=co();return this.indexManager.getCollectionParents(e,i).next(a=>A.forEach(a,l=>{const c=function(h,d){return new Ps(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,_t.newInvalidDocument(u)))});let a=co();return o.forEach((l,c)=>{const u=i.get(l);u!==void 0&&So(u.mutation,c,Ut.empty(),Je.now()),yu(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bM{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return A.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:On(s.createTime)}}(n)),A.resolve()}getNamedQuery(e,n){return A.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:yM(s.bundledQuery),readTime:On(s.readTime)}}(n)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AM{constructor(){this.overlays=new Be(X.comparator),this.hr=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const r=is();return A.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),A.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),A.resolve()}getOverlaysForCollection(e,n,r){const s=is(),i=n.length+1,o=new X(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return A.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Be((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=is(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=is(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return A.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new G1(n,r));let i=this.hr.get(n);i===void 0&&(i=ge(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(){this.Pr=new dt(tt.Ir),this.Tr=new dt(tt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new tt(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new tt(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new X(new Ne([])),r=new tt(n,e),s=new tt(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new X(new Ne([])),r=new tt(n,e),s=new tt(n,e+1);let i=ge();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new tt(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class tt{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return X.comparator(e.key,n.key)||Te(e.pr,n.pr)}static Er(e,n){return Te(e.pr,n.pr)||X.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SM{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new dt(tt.Ir)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new K1(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new tt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return A.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new tt(n,0),s=new tt(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new dt(Te);return n.forEach(s=>{const i=new tt(s,0),o=new tt(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),A.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;X.isDocumentKey(i)||(i=i.child(""));const o=new tt(new X(i),0);let a=new dt(Te);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.pr)),!0)},o),A.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){xe(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return A.forEach(n.mutations,s=>{const i=new tt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new tt(n,0),s=this.wr.firstAfterOrEqual(r);return A.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CM{constructor(e){this.vr=e,this.docs=function(){return new Be(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return A.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(n))}getEntries(e,n){let r=nr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():_t.newInvalidDocument(s))}),A.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=nr();const o=n.path,a=new X(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||d1(h1(u),r)<=0||(s.has(u.key)||yu(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return A.resolve(i)}getAllFromCollectionGroup(e,n,r,s){re()}Fr(e,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new RM(this)}getSize(e){return A.resolve(this.size)}}class RM extends wM{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),A.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PM{constructor(e){this.persistence=e,this.Mr=new Bi(n=>Tp(n),Ip),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Rp,this.targetCount=0,this.Br=bi.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),A.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new bi(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.qn(n),A.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),A.waitFor(i).next(()=>s)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return A.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),A.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),A.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),A.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return A.resolve(r)}containsKey(e,n){return A.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kM{constructor(e,n){this.Lr={},this.overlays={},this.kr=new vp(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new PM(this),this.indexManager=new vM,this.remoteDocumentCache=function(s){return new CM(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new _M(n),this.$r=new bM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new AM,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new SM(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){F("MemoryPersistence","Starting transaction:",e);const s=new xM(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return A.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class xM extends p1{constructor(e){super(),this.currentSequenceNumber=e}}class Pp{constructor(e){this.persistence=e,this.zr=new Rp,this.jr=null}static Hr(e){return new Pp(e)}get Jr(){if(this.jr)return this.jr;throw re()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),A.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),A.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Jr,r=>{const s=X.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,ae.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return A.or([()=>A.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=ge(),s=ge();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new kp(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OM{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return _k()?8:ss.v(Ye())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new NM;return this.Ji(e,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(Ji()<=pe.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",Gs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),A.resolve()):(Ji()<=pe.DEBUG&&F("QueryEngine","Query:",Gs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Ji()<=pe.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",Gs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Nn(n))):A.resolve())}ji(e,n){if(B_(n))return A.resolve(null);let r=Nn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=oc(n,null,"F"),r=Nn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ge(...i);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Zi(n,a);return this.Xi(n,c,o,l.readTime)?this.ji(e,oc(n,null,"F")):this.es(e,c,n,l)}))})))}Hi(e,n,r,s){return B_(n)||s.isEqual(ae.min())?A.resolve(null):this.zi.getDocuments(e,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?A.resolve(null):(Ji()<=pe.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Gs(n)),this.es(e,o,n,u1(s,-1)).next(a=>a))})}Zi(e,n){let r=new dt(a0(e));return n.forEach((s,i)=>{yu(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return Ji()<=pe.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",Gs(n)),this.zi.getDocumentsMatchingQuery(e,n,Mr.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DM{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new Be(Te),this.rs=new Bi(i=>Tp(i),Ip),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new IM(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function MM(t,e,n,r){return new DM(t,e,n,r)}async function k0(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=ge();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function LM(t,e){const n=ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let f=A.resolve();return d.forEach(g=>{f=f.next(()=>u.getEntry(l,g)).next(y=>{const _=c.docVersions.get(g);xe(_!==null),y.version.compareTo(_)<0&&(h.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),u.addEntry(y)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ge();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function x0(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function VM(t,e){const n=ue(t),r=e.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,u.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(bt.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),s=s.insert(h,f),function(y,_,E){return y.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,f,u)&&a.push(n.Qr.updateTargetData(i,f))});let l=nr(),c=ge();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(FM(i,o,e.documentUpdates).next(u=>{l=u.cs,c=u.ls})),!r.isEqual(ae.min())){const u=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return A.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.ns=s,i))}function FM(t,e,n){let r=ge(),s=ge();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=nr();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(ae.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):F("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{cs:o,ls:s}})}function UM(t,e){const n=ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function $M(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,A.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new br(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Md(t,e,n){const r=ue(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Sa(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function J_(t,e,n){const r=ue(t);let s=ae.min(),i=ge();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=ue(l),d=h.rs.get(u);return d!==void 0?A.resolve(h.ns.get(d)):h.Qr.getTargetData(c,u)}(r,o,Nn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?s:ae.min(),n?i:ge())).next(a=>(BM(r,N1(e),a),{documents:a,hs:i})))}function BM(t,e,n){let r=t.ss.get(e)||ae.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}class Z_{constructor(){this.activeTargetIds=F1()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jM{constructor(){this.no=new Z_,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Z_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qM{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sl=null;function Th(){return sl===null?sl=function(){return 268435456+Math.round(2147483648*Math.random())}():sl++,"0x"+sl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HM{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class zM extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(n,r,s,i,o){const a=Th(),l=this.bo(n,r.toUriEncodedString());F("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(c,i,o),this.Co(n,l,c,s).then(u=>(F("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw vi("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}vo(n,r,s,i,o,a){return this.So(n,r,s,i,o)}Do(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+$i}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}bo(n,r){const s=WM[n];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,s){const i=Th();return new Promise((o,a)=>{const l=new ZD;l.setWithCredentials(!0),l.listenOnce(XD.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Eh.NO_ERROR:const u=l.getResponseJson();F(pt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Eh.TIMEOUT:F(pt,`RPC '${e}' ${i} timed out`),a(new M(w.DEADLINE_EXCEEDED,"Request time out"));break;case Eh.HTTP_ERROR:const h=l.getStatus();if(F(pt,`RPC '${e}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const g=function(_){const E=_.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(E)>=0?E:w.UNKNOWN}(f.status);a(new M(g,f.message))}else a(new M(w.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new M(w.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{F(pt,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);F(pt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",c,r,15)})}Fo(e,n,r){const s=Th(),i=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=QD(),a=YD(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");F(pt,`Creating RPC '${e}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const g=new HM({lo:_=>{f?F(pt,`Not sending because RPC '${e}' stream ${s} is closed:`,_):(d||(F(pt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),F(pt,`RPC '${e}' stream ${s} sending:`,_),h.send(_))},ho:()=>h.close()}),y=(_,E,S)=>{_.listen(E,C=>{try{S(C)}catch(k){setTimeout(()=>{throw k},0)}})};return y(h,tl.EventType.OPEN,()=>{f||F(pt,`RPC '${e}' stream ${s} transport opened.`)}),y(h,tl.EventType.CLOSE,()=>{f||(f=!0,F(pt,`RPC '${e}' stream ${s} transport closed`),g.Vo())}),y(h,tl.EventType.ERROR,_=>{f||(f=!0,vi(pt,`RPC '${e}' stream ${s} transport errored:`,_),g.Vo(new M(w.UNAVAILABLE,"The operation could not be completed")))}),y(h,tl.EventType.MESSAGE,_=>{var E;if(!f){const S=_.data[0];xe(!!S);const C=S,k=C.error||((E=C[0])===null||E===void 0?void 0:E.error);if(k){F(pt,`RPC '${e}' stream ${s} received error:`,k);const N=k.status;let x=function(L){const Y=He[L];if(Y!==void 0)return v0(Y)}(N),G=k.message;x===void 0&&(x=w.INTERNAL,G="Unknown error status: "+N+" with message "+k.message),f=!0,g.Vo(new M(x,G)),h.close()}else F(pt,`RPC '${e}' stream ${s} received:`,S),g.mo(S)}}),y(a,JD.STAT_EVENT,_=>{_.stat===k_.PROXY?F(pt,`RPC '${e}' stream ${s} detected buffering proxy`):_.stat===k_.NOPROXY&&F(pt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{g.Ro()},0),g}}function Ih(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(t){return new sM(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),s=Math.max(0,n-r);s>0&&F("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e,n,r,s,i,o,a,l){this.oi=e,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new N0(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===w.RESOURCE_EXHAUSTED?(Ln(n.toString()),Ln("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===w.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===n&&this.o_(r,s)},r=>{e(()=>{const s=new M(w.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class KM extends O0{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=aM(this.serializer,e),r=function(i){if(!("targetChange"in i))return ae.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ae.min():o.readTime?On(o.readTime):ae.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=Dd(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=Pd(l)?{documents:uM(i,l)}:{query:S0(i,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=T0(i,o.resumeToken);const c=xd(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ae.min())>0){a.readTime=cc(i,o.snapshotVersion.toTimestamp());const c=xd(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=dM(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=Dd(this.serializer),n.removeTarget=e,this.t_(n)}}class GM extends O0{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(xe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=cM(e.writeResults,e.commitTime),r=On(e.commitTime);return this.listener.T_(r,n)}return xe(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=Dd(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>lM(this.serializer,r))};this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QM extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new M(w.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(e,Nd(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(w.UNKNOWN,i.toString())})}vo(e,n,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,Nd(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new M(w.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}async function YM(t,e,n){var r;const s=ue(t),{request:i,V_:o,parent:a}=function(h,d,f){const{ut:g,parent:y}=S0(h,d),_={},E=[];let S=0;return f.forEach(C=>{const k="aggregate_"+S++;_[k]=C.alias,C.aggregateType==="count"?E.push({alias:k,count:{}}):C.aggregateType==="avg"?E.push({alias:k,avg:{field:Ir(C.fieldPath)}}):C.aggregateType==="sum"&&E.push({alias:k,sum:{field:Ir(C.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:E,structuredQuery:g.structuredQuery},parent:g.parent},V_:_,parent:y}}(s.serializer,function(h){const d=ue(h);return d.Pe||(d.Pe=i0(d,h.explicitOrderBy)),d.Pe}(e),n);s.connection.wo||delete i.parent;const l=(await s.vo("RunAggregationQuery",s.serializer.databaseId,a,i,1)).filter(u=>!!u.result);xe(l.length===1);const c=(r=l[0].result)===null||r===void 0?void 0:r.aggregateFields;return Object.keys(c).reduce((u,h)=>(u[o[h]]=c[h],u),{})}class XM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Ln(n),this.g_=!1):F("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JM{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{ks(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=ue(l);c.v_.add(4),await Pa(c),c.x_.set("Unknown"),c.v_.delete(4),await bu(c)}(this))})}),this.x_=new XM(r,s)}}async function bu(t){if(ks(t))for(const e of t.F_)await e(!0)}async function Pa(t){for(const e of t.F_)await e(!1)}function D0(t,e){const n=ue(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),Op(n)?Np(n):ji(n).Jo()&&xp(n,e))}function M0(t,e){const n=ue(t),r=ji(n);n.C_.delete(e),r.Jo()&&L0(n,e),n.C_.size===0&&(r.Jo()?r.Xo():ks(n)&&n.x_.set("Unknown"))}function xp(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ae.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ji(t).c_(e)}function L0(t,e){t.O_.Oe(e),ji(t).l_(e)}function Np(t){t.O_=new eM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),ji(t).start(),t.x_.p_()}function Op(t){return ks(t)&&!ji(t).Ho()&&t.C_.size>0}function ks(t){return ue(t).v_.size===0}function V0(t){t.O_=void 0}async function ZM(t){t.C_.forEach((e,n)=>{xp(t,e)})}async function eL(t,e){V0(t),Op(t)?(t.x_.S_(e),Np(t)):t.x_.set("Unknown")}async function tL(t,e,n){if(t.x_.set("Online"),e instanceof w0&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(t,e)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await uc(t,r)}else if(e instanceof Al?t.O_.$e(e):e instanceof E0?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(ae.min()))try{const r=await x0(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.C_.get(c);u&&i.C_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=i.C_.get(l);if(!u)return;i.C_.set(l,u.withResumeToken(bt.EMPTY_BYTE_STRING,u.snapshotVersion)),L0(i,l);const h=new br(u.target,l,c,u.sequenceNumber);xp(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await uc(t,r)}}async function uc(t,e,n){if(!Sa(e))throw e;t.v_.add(1),await Pa(t),t.x_.set("Offline"),n||(n=()=>x0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await bu(t)})}function F0(t,e){return e().catch(n=>uc(t,n,e))}async function Au(t){const e=ue(t),n=Vr(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;nL(e);)try{const s=await UM(e.localStore,r);if(s===null){e.D_.length===0&&n.Xo();break}r=s.batchId,rL(e,s)}catch(s){await uc(e,s)}U0(e)&&$0(e)}function nL(t){return ks(t)&&t.D_.length<10}function rL(t,e){t.D_.push(e);const n=Vr(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function U0(t){return ks(t)&&!Vr(t).Ho()&&t.D_.length>0}function $0(t){Vr(t).start()}async function sL(t){Vr(t).d_()}async function iL(t){const e=Vr(t);for(const n of t.D_)e.I_(n.mutations)}async function oL(t,e,n){const r=t.D_.shift(),s=Ap.from(r,e,n);await F0(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Au(t)}async function aL(t,e){e&&Vr(t).P_&&await async function(r,s){if(function(o){return X1(o)&&o!==w.ABORTED}(s.code)){const i=r.D_.shift();Vr(r).Zo(),await F0(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Au(r)}}(t,e),U0(t)&&$0(t)}async function ty(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=ks(n);n.v_.add(3),await Pa(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await bu(n)}async function lL(t,e){const n=ue(t);e?(n.v_.delete(2),await bu(n)):e||(n.v_.add(2),await Pa(n),n.x_.set("Unknown"))}function ji(t){return t.N_||(t.N_=function(n,r,s){const i=ue(n);return i.R_(),new KM(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:ZM.bind(null,t),To:eL.bind(null,t),u_:tL.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),Op(t)?Np(t):t.x_.set("Unknown")):(await t.N_.stop(),V0(t))})),t.N_}function Vr(t){return t.B_||(t.B_=function(n,r,s){const i=ue(n);return i.R_(),new GM(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:sL.bind(null,t),To:aL.bind(null,t),E_:iL.bind(null,t),T_:oL.bind(null,t)}),t.F_.push(async e=>{e?(t.B_.Zo(),await Au(t)):(await t.B_.stop(),t.D_.length>0&&(F("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new xn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Dp(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(w.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Mp(t,e){if(Ln("AsyncQueue",`${e}: ${t}`),Sa(t))return new M(w.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=co(),this.sortedSet=new Be(this.comparator)}static emptySet(e){return new ci(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ci)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ci;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(){this.L_=new Be(X.comparator)}track(e){const n=e.doc.key,r=this.L_.get(n);r?e.type!==0&&r.type===3?this.L_=this.L_.insert(n,e):e.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.L_=this.L_.remove(n):e.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):re():this.L_=this.L_.insert(n,e)}k_(){const e=[];return this.L_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ai{constructor(e,n,r,s,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ai(e,n,ci.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_u(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cL{constructor(){this.q_=void 0,this.Q_=[]}}class uL{constructor(){this.queries=new Bi(e=>o0(e),_u),this.onlineState="Unknown",this.K_=new Set}}async function hL(t,e){const n=ue(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new cL),s)try{i.q_=await n.onListen(r)}catch(o){const a=Mp(o,`Initialization of query '${Gs(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.Q_.push(e),e.U_(n.onlineState),i.q_&&e.W_(i.q_)&&Lp(n)}async function dL(t,e){const n=ue(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.Q_.indexOf(e);o>=0&&(i.Q_.splice(o,1),s=i.Q_.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function fL(t,e){const n=ue(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Q_)a.W_(s)&&(r=!0);o.q_=s}}r&&Lp(n)}function pL(t,e,n){const r=ue(t),s=r.queries.get(e);if(s)for(const i of s.Q_)i.onError(n);r.queries.delete(e)}function Lp(t){t.K_.forEach(e=>{e.next()})}class gL{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ai(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=Ai.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e){this.key=e}}class j0{constructor(e){this.key=e}}class mL{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=ge(),this.mutatedKeys=ge(),this.ua=a0(e),this.ca=new ci(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new ny,s=n?n.ca:this.ca;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),f=yu(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let _=!1;d&&f?d.data.isEqual(f.data)?g!==y&&(r.track({type:3,doc:f}),_=!0):this.Ia(d,f)||(r.track({type:2,doc:f}),_=!0,(l&&this.ua(f,l)>0||c&&this.ua(f,c)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),_=!0):d&&!f&&(r.track({type:1,doc:d}),_=!0,(l||c)&&(a=!0)),_&&(f?(o=o.add(f),i=y?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ca:o,Pa:r,Xi:a,mutatedKeys:i}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const o=e.Pa.k_();o.sort((u,h)=>function(f,g){const y=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re()}};return y(f)-y(g)}(u.type,h.type)||this.ua(u.doc,h.doc)),this.Ta(r),s=s!=null&&s;const a=n&&!s?this.Ea():[],l=this.aa.size===0&&this.current&&!s?1:0,c=l!==this._a;return this._a=l,o.length!==0||c?{snapshot:new Ai(this.query,e.ca,i,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new ny,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}Ta(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ea(){if(!this.current)return[];const e=this.aa;this.aa=ge(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new j0(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new B0(r))}),n}Ra(e){this.oa=e.hs,this.aa=ge();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return Ai.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class _L{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class yL{constructor(e){this.key=e,this.ma=!1}}class vL{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new Bi(a=>o0(a),_u),this.pa=new Map,this.ya=new Set,this.wa=new Be(X.comparator),this.Sa=new Map,this.ba=new Rp,this.Da={},this.Ca=new Map,this.va=bi.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function EL(t,e){const n=kL(t);let r,s;const i=n.ga.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Va();else{const o=await $M(n.localStore,Nn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await wL(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&D0(n.remoteStore,o)}return s}async function wL(t,e,n,r,s){t.Ma=(h,d,f)=>async function(y,_,E,S){let C=_.view.ha(E);C.Xi&&(C=await J_(y.localStore,_.query,!1).then(({documents:G})=>_.view.ha(G,C)));const k=S&&S.targetChanges.get(_.targetId),N=S&&S.targetMismatches.get(_.targetId)!=null,x=_.view.applyChanges(C,y.isPrimaryClient,k,N);return sy(y,_.targetId,x.da),x.snapshot}(t,h,d,f);const i=await J_(t.localStore,e,!0),o=new mL(e,i.hs),a=o.ha(i.documents),l=Ra.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);sy(t,n,c.da);const u=new _L(e,n,o);return t.ga.set(e,u),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),c.snapshot}async function TL(t,e){const n=ue(t),r=n.ga.get(e),s=n.pa.get(r.targetId);if(s.length>1)return n.pa.set(r.targetId,s.filter(i=>!_u(i,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Md(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),M0(n.remoteStore,r.targetId),Ld(n,r.targetId)}).catch(Aa)):(Ld(n,r.targetId),await Md(n.localStore,r.targetId,!0))}async function IL(t,e,n){const r=xL(t);try{const s=await function(o,a){const l=ue(o),c=Je.now(),u=a.reduce((f,g)=>f.add(g.key),ge());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=nr(),y=ge();return l.os.getEntries(f,u).next(_=>{g=_,g.forEach((E,S)=>{S.isValidDocument()||(y=y.add(E))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,g)).next(_=>{h=_;const E=[];for(const S of a){const C=H1(S,h.get(S.key).overlayedDocument);C!=null&&E.push(new Hr(S.key,C,XT(C.value.mapValue),Ot.exists(!0)))}return l.mutationQueue.addMutationBatch(f,c,E,a)}).next(_=>{d=_;const E=_.applyToLocalDocumentSet(h,y);return l.documentOverlayCache.saveOverlays(f,_.batchId,E)})}).then(()=>({batchId:d.batchId,changes:c0(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.Da[o.currentUser.toKey()];c||(c=new Be(Te)),c=c.insert(a,l),o.Da[o.currentUser.toKey()]=c}(r,s.batchId,n),await ka(r,s.changes),await Au(r.remoteStore)}catch(s){const i=Mp(s,"Failed to persist write");n.reject(i)}}async function q0(t,e){const n=ue(t);try{const r=await VM(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Sa.get(i);o&&(xe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ma=!0:s.modifiedDocuments.size>0?xe(o.ma):s.removedDocuments.size>0&&(xe(o.ma),o.ma=!1))}),await ka(n,r,e)}catch(r){await Aa(r)}}function ry(t,e,n){const r=ue(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ga.forEach((i,o)=>{const a=o.view.U_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=ue(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.Q_)d.U_(a)&&(c=!0)}),c&&Lp(l)}(r.eventManager,e),s.length&&r.fa.u_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function bL(t,e,n){const r=ue(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Sa.get(e),i=s&&s.key;if(i){let o=new Be(X.comparator);o=o.insert(i,_t.newNoDocument(i,ae.min()));const a=ge().add(i),l=new Tu(ae.min(),new Map,new Be(Te),o,a);await q0(r,l),r.wa=r.wa.remove(i),r.Sa.delete(e),Vp(r)}else await Md(r.localStore,e,!1).then(()=>Ld(r,e,n)).catch(Aa)}async function AL(t,e){const n=ue(t),r=e.batch.batchId;try{const s=await LM(n.localStore,e);H0(n,r,null),W0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ka(n,s)}catch(s){await Aa(s)}}async function SL(t,e,n){const r=ue(t);try{const s=await function(o,a){const l=ue(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(xe(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,e);H0(r,e,n),W0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ka(r,s)}catch(s){await Aa(s)}}function W0(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function H0(t,e,n){const r=ue(t);let s=r.Da[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Da[r.currentUser.toKey()]=s}}function Ld(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.Vr(e).forEach(r=>{t.ba.containsKey(r)||z0(t,r)})}function z0(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(M0(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),Vp(t))}function sy(t,e,n){for(const r of n)r instanceof B0?(t.ba.addReference(r.key,e),CL(t,r)):r instanceof j0?(F("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||z0(t,r.key)):re()}function CL(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(F("SyncEngine","New document in limbo: "+n),t.ya.add(r),Vp(t))}function Vp(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new X(Ne.fromString(e)),r=t.va.next();t.Sa.set(r,new yL(n)),t.wa=t.wa.insert(n,r),D0(t.remoteStore,new br(Nn(s0(n.path)),r,"TargetPurposeLimboResolution",vp._e))}}async function ka(t,e,n){const r=ue(t),s=[],i=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{o.push(r.Ma(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=kp.Ki(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.fa.u_(s),await async function(l,c){const u=ue(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>A.forEach(c,d=>A.forEach(d.qi,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>A.forEach(d.Qi,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Sa(h))throw h;F("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.ns.get(d),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);u.ns=u.ns.insert(d,y)}}}(r.localStore,i))}async function RL(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await k0(n.localStore,e);n.currentUser=e,function(i,o){i.Ca.forEach(a=>{a.forEach(l=>{l.reject(new M(w.CANCELLED,o))})}),i.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ka(n,r.us)}}function PL(t,e){const n=ue(t),r=n.Sa.get(e);if(r&&r.ma)return ge().add(r.key);{let s=ge();const i=n.pa.get(e);if(!i)return s;for(const o of i){const a=n.ga.get(o);s=s.unionWith(a.view.la)}return s}}function kL(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=q0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=PL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bL.bind(null,e),e.fa.u_=fL.bind(null,e.eventManager),e.fa.xa=pL.bind(null,e.eventManager),e}function xL(t){const e=ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=AL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=SL.bind(null,e),e}class iy{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Iu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return MM(this.persistence,new OM,e.initialUser,this.serializer)}createPersistence(e){return new kM(Pp.Hr,this.serializer)}createSharedClientState(e){return new jM}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class NL{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ry(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=RL.bind(null,this.syncEngine),await lL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new uL}()}createDatastore(e){const n=Iu(e.databaseInfo.databaseId),r=function(i){return new zM(i)}(e.databaseInfo);return function(i,o,a,l){return new QM(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new JM(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>ry(this.syncEngine,n,0),function(){return ey.D()?new ey:new qM}())}createSyncEngine(e,n){return function(s,i,o,a,l,c,u){const h=new vL(s,i,o,a,l,c);return u&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=ue(r);F("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await Pa(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OL{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):Ln("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DL{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=mt.UNAUTHENTICATED,this.clientId=GT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{F("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(F("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Mp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function bh(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await k0(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function oy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await LL(t);F("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>ty(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>ty(e.remoteStore,s)),t._onlineComponents=e}function ML(t){return t.name==="FirebaseError"?t.code===w.FAILED_PRECONDITION||t.code===w.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function LL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await bh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!ML(n))throw n;vi("Error using user provided cache. Falling back to memory cache: "+n),await bh(t,new iy)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await bh(t,new iy);return t._offlineComponents}async function Fp(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await oy(t,t._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await oy(t,new NL))),t._onlineComponents}function VL(t){return Fp(t).then(e=>e.syncEngine)}function FL(t){return Fp(t).then(e=>e.datastore)}async function UL(t){const e=await Fp(t),n=e.eventManager;return n.onListen=EL.bind(null,e.syncEngine),n.onUnlisten=TL.bind(null,e.syncEngine),n}function $L(t,e,n={}){const r=new xn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new OL({next:d=>{o.enqueueAndForget(()=>dL(i,h)),d.fromCache&&l.source==="server"?c.reject(new M(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new gL(a,u,{includeMetadataChanges:!0,Z_:!0});return hL(i,h)}(await UL(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(t,e,n){if(!n)throw new M(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function BL(t,e,n,r){if(e===!0&&r===!0)throw new M(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ly(t){if(!X.isDocumentKey(t))throw new M(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function cy(t){if(X.isDocumentKey(t))throw new M(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Su(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re()}function rr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Su(t);throw new M(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function jL(t,e){if(e<=0)throw new M(w.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new M(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}BL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=K0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new M(w.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new M(w.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new M(w.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Cu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uy({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new t1;switch(r.type){case"firstParty":return new i1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new M(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ay.get(n);r&&(F("ComponentProvider","Removing Datastore"),ay.delete(n),r.terminate())}(this),Promise.resolve()}}function qL(t,e,n,r={}){var s;const i=(t=rr(t,Cu))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&vi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=mt.MOCK_USER;else{a=fk(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new M(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new mt(c)}t._authCredentials=new n1(new KT(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new or(this.firestore,e,this._query)}}class jt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new jt(this.firestore,e,this._key)}}class xr extends or{constructor(e,n,r){super(e,n,s0(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new jt(this.firestore,null,new X(e))}withConverter(e){return new xr(this.firestore,e,this._path)}}function Q0(t,e,...n){if(t=Xe(t),G0("collection","path",e),t instanceof Cu){const r=Ne.fromString(e,...n);return cy(r),new xr(t,null,r)}{if(!(t instanceof jt||t instanceof xr))throw new M(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return cy(r),new xr(t.firestore,null,r)}}function Y0(t,e,...n){if(t=Xe(t),arguments.length===1&&(e=GT.newId()),G0("doc","path",e),t instanceof Cu){const r=Ne.fromString(e,...n);return ly(r),new jt(t,null,new X(r))}{if(!(t instanceof jt||t instanceof xr))throw new M(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return ly(r),new jt(t.firestore,t instanceof xr?t.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WL{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new N0(this,"async_queue_retry"),this._u=()=>{const n=Ih();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=Ih();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.au(),this.uu(e)}enterRestrictedMode(e){if(!this.tu){this.tu=!0,this.su=e||!1;const n=Ih();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(e){if(this.au(),this.tu)return new Promise(()=>{});const n=new xn;return this.uu(()=>this.tu&&this.su?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.eu.push(e),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(e){if(!Sa(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(e){const n=this.Xa.then(()=>(this.iu=!0,e().catch(r=>{this.ru=r,this.iu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ln("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(e,n,r){this.au(),this.ou.indexOf(e)>-1&&(n=0);const s=Dp.createAndSchedule(this,e,n,r,i=>this.lu(i));return this.nu.push(s),s}au(){this.ru&&re()}verifyOperationInProgress(){}async hu(){let e;do e=this.Xa,await e;while(e!==this.Xa)}Pu(e){for(const n of this.nu)if(n.timerId===e)return!0;return!1}Iu(e){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.hu()})}Tu(e){this.ou.push(e)}lu(e){const n=this.nu.indexOf(e);this.nu.splice(n,1)}}class xs extends Cu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new WL}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||X0(this),this._firestoreClient.terminate()}}function HL(t,e){const n=typeof t=="object"?t:hw(),r=typeof t=="string"?t:e||"(default)",s=uw(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=hk("firestore");i&&qL(s,...i)}return s}function Ru(t){return t._firestoreClient||X0(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function X0(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,c,u){return new v1(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,K0(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new DL(t._authCredentials,t._appCheckCredentials,t._queue,i),((n=s.localCache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((r=s.localCache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zL{constructor(e="count",n){this._internalFieldPath=n,this.type="AggregateField",this.aggregateType=e}}class KL{constructor(e,n,r){this._userDataWriter=n,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Si(bt.fromBase64String(e))}catch(n){throw new M(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Si(bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GL=/^__.*__$/;class QL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Hr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ca(e,this.data,n,this.fieldTransforms)}}class J0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Hr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Z0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class Bp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Eu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(e){return new Bp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Au({path:r,Vu:!1});return s.mu(e),s}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Au({path:r,Vu:!1});return s.Eu(),s}gu(e){return this.Au({path:void 0,Vu:!0})}pu(e){return hc(e,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Eu(){if(this.path)for(let e=0;e<this.path.length;e++)this.mu(this.path.get(e))}mu(e){if(e.length===0)throw this.pu("Document fields must not be empty");if(Z0(this.du)&&GL.test(e))throw this.pu('Document fields cannot begin and end with "__"')}}class YL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Iu(e)}Su(e,n,r,s=!1){return new Bp({du:e,methodName:n,wu:r,path:ut.emptyPath(),Vu:!1,yu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Na(t){const e=t._freezeSettings(),n=Iu(t._databaseId);return new YL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function eI(t,e,n,r,s,i={}){const o=t.Su(i.merge||i.mergeFields?2:0,e,n,s);jp("Data must be an object, but it was:",o,r);const a=sI(r,o);let l,c;if(i.merge)l=new Ut(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=Vd(e,h,n);if(!o.contains(d))throw new M(w.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);oI(u,d)||u.push(d)}l=new Ut(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new QL(new xt(a),l,c)}class Pu extends Up{_toFieldTransform(e){if(e.du!==2)throw e.du===1?e.pu(`${this._methodName}() can only appear at the top level of your update data`):e.pu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Pu}}function tI(t,e,n,r){const s=t.Su(1,e,n);jp("Data must be an object, but it was:",s,r);const i=[],o=xt.empty();Rs(r,(l,c)=>{const u=qp(e,l,n);c=Xe(c);const h=s.fu(u);if(c instanceof Pu)i.push(u);else{const d=Oa(c,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new Ut(i);return new J0(o,a,s.fieldTransforms)}function nI(t,e,n,r,s,i){const o=t.Su(1,e,n),a=[Vd(e,r,n)],l=[s];if(i.length%2!=0)throw new M(w.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Vd(e,i[d])),l.push(i[d+1]);const c=[],u=xt.empty();for(let d=a.length-1;d>=0;--d)if(!oI(c,a[d])){const f=a[d];let g=l[d];g=Xe(g);const y=o.fu(f);if(g instanceof Pu)c.push(f);else{const _=Oa(g,y);_!=null&&(c.push(f),u.set(f,_))}}const h=new Ut(c);return new J0(u,h,o.fieldTransforms)}function rI(t,e,n,r=!1){return Oa(n,t.Su(r?4:3,e))}function Oa(t,e){if(iI(t=Xe(t)))return jp("Unsupported field value:",e,t),sI(t,e);if(t instanceof Up)return function(r,s){if(!Z0(s.du))throw s.pu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.pu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Vu&&e.du!==4)throw e.pu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Oa(a,s.gu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Xe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return U1(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Je.fromDate(r);return{timestampValue:cc(s.serializer,i)}}if(r instanceof Je){const i=new Je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:cc(s.serializer,i)}}if(r instanceof $p)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Si)return{bytesValue:T0(s.serializer,r._byteString)};if(r instanceof jt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Cp(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.pu(`Unsupported field value: ${Su(r)}`)}(t,e)}function sI(t,e){const n={};return QT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rs(t,(r,s)=>{const i=Oa(s,e.Ru(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function iI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Je||t instanceof $p||t instanceof Si||t instanceof jt||t instanceof Up)}function jp(t,e,n){if(!iI(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Su(n);throw r==="an object"?e.pu(t+" a custom object"):e.pu(t+" "+r)}}function Vd(t,e,n){if((e=Xe(e))instanceof xa)return e._internalPath;if(typeof e=="string")return qp(t,e);throw hc("Field path arguments must be of type string or ",t,!1,void 0,n)}const XL=new RegExp("[~\\*/\\[\\]]");function qp(t,e,n){if(e.search(XL)>=0)throw hc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xa(...e.split("."))._internalPath}catch{throw hc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function hc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new M(w.INVALID_ARGUMENT,a+t+l)}function oI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new jt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new JL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ku("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class JL extends Wp{data(){return super.data()}}function ku(t,e){return typeof e=="string"?qp(t,e):e instanceof xa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZL(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new M(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hp{}class xu extends Hp{}function VB(t,e,...n){let r=[];e instanceof Hp&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof zp).length,a=i.filter(l=>l instanceof Nu).length;if(o>1||o>0&&a>0)throw new M(w.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Nu extends xu{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Nu(e,n,r)}_apply(e){const n=this._parse(e);return aI(e._query,n),new or(e.firestore,e.converter,kd(e._query,n))}_parse(e){const n=Na(e.firestore);return function(i,o,a,l,c,u,h){let d;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new M(w.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){dy(h,u);const f=[];for(const g of h)f.push(hy(l,i,g));d={arrayValue:{values:f}}}else d=hy(l,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||dy(h,u),d=rI(a,o,h,u==="in"||u==="not-in");return Ke.create(c,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function FB(t,e,n){const r=e,s=ku("where",t);return Nu._create(s,r,n)}class zp extends Hp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new zp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:gn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)aI(o,l),o=kd(o,l)}(e._query,n),new or(e.firestore,e.converter,kd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Kp extends xu{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Kp(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new M(w.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new M(w.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ia(i,o)}(e._query,this._field,this._direction);return new or(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Ps(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function UB(t,e="asc"){const n=e,r=ku("orderBy",t);return Kp._create(r,n)}class Gp extends xu{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Gp(e,n,r)}_apply(e){return new or(e.firestore,e.converter,oc(e._query,this._limit,this._limitType))}}function $B(t){return jL("limit",t),Gp._create("limit",t,"F")}class Qp extends xu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Qp(e,n,r)}_apply(e){const n=eV(e,this.type,this._docOrFields,this._inclusive);return new or(e.firestore,e.converter,function(s,i){return new Ps(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(e._query,n))}}function BB(...t){return Qp._create("startAt",t,!0)}function eV(t,e,n,r){if(n[0]=Xe(n[0]),n[0]instanceof Wp)return function(i,o,a,l,c){if(!l)throw new M(w.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const u=[];for(const h of li(i))if(h.field.isKeyField())u.push(ic(o,l.key));else{const d=l.data.field(h.field);if(mu(d))throw new M(w.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const f=h.field.canonicalString();throw new M(w.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}u.push(d)}return new Ii(u,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const s=Na(t.firestore);return function(o,a,l,c,u,h){const d=o.explicitOrderBy;if(u.length>d.length)throw new M(w.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let g=0;g<u.length;g++){const y=u[g];if(d[g].field.isKeyField()){if(typeof y!="string")throw new M(w.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof y}`);if(!bp(o)&&y.indexOf("/")!==-1)throw new M(w.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${y}' contains a slash.`);const _=o.path.child(Ne.fromString(y));if(!X.isDocumentKey(_))throw new M(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${_}' is not because it contains an odd number of segments.`);const E=new X(_);f.push(ic(a,E))}else{const _=rI(l,c,y);f.push(_)}}return new Ii(f,h)}(t._query,t.firestore._databaseId,s,e,n,r)}}function hy(t,e,n){if(typeof(n=Xe(n))=="string"){if(n==="")throw new M(w.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bp(e)&&n.indexOf("/")!==-1)throw new M(w.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ne.fromString(n));if(!X.isDocumentKey(r))throw new M(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ic(t,new X(r))}if(n instanceof jt)return ic(t,n._key);throw new M(w.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Su(n)}.`)}function dy(t,e){if(!Array.isArray(t)||t.length===0)throw new M(w.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function aI(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new M(w.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new M(w.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class tV{convertValue(e,n="none"){switch(Es(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(vs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw re()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Rs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new $p(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ep(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(na(e));default:return null}}convertTimestamp(e){const n=Lr(e);return new Je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ne.fromString(e);xe(P0(r));const s=new ra(r.get(1),r.get(3)),i=new X(r.popFirst(5));return s.isEqual(n)||Ln(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}function nV(){return new zL("count")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rV extends Wp{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Sl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ku("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Sl extends rV{data(e={}){return super.data(e)}}class sV{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new il(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Sl(this._firestore,this._userDataWriter,r.key,r,new il(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new Sl(s._firestore,s._userDataWriter,a.doc.key,a.doc,new il(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new Sl(s._firestore,s._userDataWriter,a.doc.key,a.doc,new il(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:iV(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function iV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re()}}class cI extends tV{constructor(e){super(),this.firestore=e}convertBytes(e){return new Si(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new jt(this.firestore,null,n)}}function jB(t){t=rr(t,or);const e=rr(t.firestore,xs),n=Ru(e),r=new cI(e);return ZL(t._query),$L(n,t._query).then(s=>new sV(e,r,t,s))}function qB(t,e,n,...r){t=rr(t,jt);const s=rr(t.firestore,xs),i=Na(s);let o;return o=typeof(e=Xe(e))=="string"||e instanceof xa?nI(i,"updateDoc",t._key,e,n,r):tI(i,"updateDoc",t._key,e),Ou(s,[o.toMutation(t._key,Ot.exists(!0))])}function WB(t){return Ou(rr(t.firestore,xs),[new wu(t._key,Ot.none())])}function oV(t,e){const n=rr(t.firestore,xs),r=Y0(t),s=lI(t.converter,e);return Ou(n,[eI(Na(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Ot.exists(!1))]).then(()=>r)}function Ou(t,e){return function(r,s){const i=new xn;return r.asyncQueue.enqueueAndForget(async()=>IL(await VL(r),s,i)),i.promise}(Ru(t),e)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HB(t){return aV(t,{count:nV()})}function aV(t,e){const n=rr(t.firestore,xs),r=Ru(n),s=function(o,a){const l=[];for(const c in o)Object.prototype.hasOwnProperty.call(o,c)&&l.push(a(o[c],c,o));return l}(e,(i,o)=>new Q1(o,i.aggregateType,i._internalFieldPath));return function(o,a,l){const c=new xn;return o.asyncQueue.enqueueAndForget(async()=>{try{const u=await FL(o);c.resolve(YM(u,a,l))}catch(u){c.reject(u)}}),c.promise}(r,t._query,s).then(i=>function(a,l,c){const u=new cI(a);return new KL(l,u,c)}(n,t,i))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lV{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Na(e)}set(e,n,r){this._verifyNotCommitted();const s=Ah(e,this._firestore),i=lI(s.converter,n,r),o=eI(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Ot.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Ah(e,this._firestore);let o;return o=typeof(n=Xe(n))=="string"||n instanceof xa?nI(this._dataReader,"WriteBatch.update",i._key,n,r,s):tI(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Ot.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Ah(e,this._firestore);return this._mutations=this._mutations.concat(new wu(n._key,Ot.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new M(w.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ah(t,e){if((t=Xe(t)).firestore!==e)throw new M(w.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zB(t){return Ru(t=rr(t,xs)),new lV(t,e=>Ou(t,e))}(function(e,n=!0){(function(s){$i=s})($r),Mn(new dn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new xs(new r1(r.getProvider("auth-internal")),new a1(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new M(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ra(c.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Bt(x_,"4.4.2",e),Bt(x_,"4.4.2","esm2017")})();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cV=new Map,uV={activated:!1,tokenObservers:[]};function mn(t){return cV.get(t)||Object.assign({},uV)}const fy={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hV{constructor(e,n,r,s,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=s,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=s,s>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Bo,this.pending.promise.catch(n=>{}),await dV(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Bo,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function dV(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fV={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},dc=new Di("appCheck","AppCheck",fV);function uI(t){if(!mn(t).activated)throw dc.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pV="firebase-app-check-database",gV=1,Fd="firebase-app-check-store";let ol=null;function mV(){return ol||(ol=new Promise((t,e)=>{try{const n=indexedDB.open(pV,gV);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var s;e(dc.create("storage-open",{originalErrorMessage:(s=r.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=r=>{const s=r.target.result;switch(r.oldVersion){case 0:s.createObjectStore(Fd,{keyPath:"compositeKey"})}}}catch(n){e(dc.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),ol)}function _V(t,e){return yV(vV(t),e)}async function yV(t,e){const r=(await mV()).transaction(Fd,"readwrite"),i=r.objectStore(Fd).put({compositeKey:t,value:e});return new Promise((o,a)=>{i.onsuccess=l=>{o()},r.onerror=l=>{var c;a(dc.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function vV(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud=new da("@firebase/app-check");function py(t,e){return Vf()?_V(t,e).catch(n=>{Ud.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EV={error:"UNKNOWN_ERROR"};function wV(t){return zc.encodeString(JSON.stringify(t),!1)}async function $d(t,e=!1){const n=t.app;uI(n);const r=mn(n);let s=r.token,i;if(s&&!ho(s)&&(r.token=void 0,s=void 0),!s){const l=await r.cachedTokenPromise;l&&(ho(l)?s=l:await py(n,void 0))}if(!e&&s&&ho(s))return{token:s.token};let o=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),o=!0),s=await mn(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Ud.warn(l.message):Ud.error(l),i=l}let a;return s?i?ho(s)?a={token:s.token,internalError:i}:a=my(i):(a={token:s.token},r.token=s,await py(n,s)):a=my(i),o&&AV(n,a),a}async function TV(t){const e=t.app;uI(e);const{provider:n}=mn(e);{const{token:r}=await n.getToken();return{token:r}}}function IV(t,e,n,r){const{app:s}=t,i=mn(s),o={next:n,error:r,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&ho(i.token)){const a=i.token;Promise.resolve().then(()=>{n({token:a.token}),gy(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>gy(t))}function hI(t,e){const n=mn(t),r=n.tokenObservers.filter(s=>s.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function gy(t){const{app:e}=t,n=mn(e);let r=n.tokenRefresher;r||(r=bV(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function bV(t){const{app:e}=t;return new hV(async()=>{const n=mn(e);let r;if(n.token?r=await $d(t,!0):r=await $d(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=mn(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,s),Math.max(0,r-Date.now())}else return 0},fy.RETRIAL_MIN_WAIT,fy.RETRIAL_MAX_WAIT)}function AV(t,e){const n=mn(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function ho(t){return t.expireTimeMillis-Date.now()>0}function my(t){return{token:wV(EV),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SV{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=mn(this.app);for(const n of e)hI(this.app,n.next);return Promise.resolve()}}function CV(t,e){return new SV(t,e)}function RV(t){return{getToken:e=>$d(t,e),getLimitedUseToken:()=>TV(t),addTokenListener:e=>IV(t,"INTERNAL",e),removeTokenListener:e=>hI(t.app,e)}}const PV="@firebase/app-check",kV="0.8.2",xV="app-check",_y="app-check-internal";function NV(){Mn(new dn(xV,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return CV(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(_y).initialize()})),Mn(new dn(_y,t=>{const e=t.getProvider("app-check").getImmediate();return RV(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Bt(PV,kV)}NV();const dI=Symbol("firebaseApp");function Yp(t){return Ni()&&$t(dI,null)||hw(t)}const OV=typeof window!="undefined",al=new WeakMap;function DV(t,e){if(!al.has(t)){const n=hf(!0);al.set(t,n);const{unmount:r}=e;e.unmount=()=>{r.call(e),n.stop(),al.delete(t)}}return al.get(t)}const fI=new WeakMap;function KB(t){return fI.get(Yp(t))}const ll=new WeakMap;function MV(t){const e=Yp(t);if(!ll.has(e)){let n;const s=[new Promise(i=>{n=i}),i=>{ll.set(e,i),n(i.value)}];ll.set(e,s)}return ll.get(e)}function LV(t,e){VN(e,n=>{const r=MV();t.value=n,Array.isArray(r)&&r[1](t)})}const yy="@firebase/database",vy="1.0.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pI="";function VV(t){pI=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FV{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ct(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:jo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UV{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ir(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new FV(e)}}catch{}return new UV},os=gI("localStorage"),Bd=gI("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=new da("@firebase/database"),$V=function(){let t=1;return function(){return t++}}(),mI=function(t){const e=Pk(t),n=new bk;n.update(e);const r=n.digest();return zc.encodeByteArray(r)},Da=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Da.apply(null,r):typeof r=="object"?e+=ct(r):e+=r,e+=" "}return e};let ds=null,Ey=!0;const BV=function(t,e){U(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ui.logLevel=pe.VERBOSE,ds=ui.log.bind(ui),e&&Bd.set("logging_enabled",!0)):typeof t=="function"?ds=t:(ds=null,Bd.remove("logging_enabled"))},yt=function(...t){if(Ey===!0&&(Ey=!1,ds===null&&Bd.get("logging_enabled")===!0&&BV(!0)),ds){const e=Da.apply(null,t);ds(e)}},Ma=function(t){return function(...e){yt(t,...e)}},jd=function(...t){const e="FIREBASE INTERNAL ERROR: "+Da(...t);ui.error(e)},ws=function(...t){const e=`FIREBASE FATAL ERROR: ${Da(...t)}`;throw ui.error(e),new Error(e)},qt=function(...t){const e="FIREBASE WARNING: "+Da(...t);ui.warn(e)},jV=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&qt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},_I=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},qV=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ci="[MIN_NAME]",Ts="[MAX_NAME]",qi=function(t,e){if(t===e)return 0;if(t===Ci||e===Ts)return-1;if(e===Ci||t===Ts)return 1;{const n=wy(t),r=wy(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},WV=function(t,e){return t===e?0:t<e?-1:1},Zi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ct(e))},Xp=function(t){if(typeof t!="object"||t===null)return ct(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ct(e[r]),n+=":",n+=Xp(t[e[r]]);return n+="}",n},yI=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function Jt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const vI=function(t){U(!_I(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,l;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},HV=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},zV=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},KV=new RegExp("^-?(0*)\\d{1,10}$"),GV=-2147483648,QV=2147483647,wy=function(t){if(KV.test(t)){const e=Number(t);if(e>=GV&&e<=QV)return e}return null},La=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw qt("Exception was thrown by user callback.",n),e},Math.floor(0))}},YV=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Co=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno!="undefined"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XV{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){qt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JV{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(yt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',qt(e)}}class qd{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}qd.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp="5",EI="v",wI="s",TI="r",II="f",bI=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,AI="ls",SI="p",Wd="ac",CI="websocket",RI="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZV{constructor(e,n,r,s,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=os.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&os.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function eF(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function PI(t,e,n){U(typeof e=="string","typeof type must == string"),U(typeof n=="object","typeof params must == object");let r;if(e===CI)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===RI)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);eF(t)&&(n.ns=t.namespace);const s=[];return Jt(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tF{constructor(){this.counters_={}}incrementCounter(e,n=1){ir(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return sk(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh={},Ch={};function Zp(t){const e=t.toString();return Sh[e]||(Sh[e]=new tF),Sh[e]}function nF(t,e){const n=t.toString();return Ch[n]||(Ch[n]=e()),Ch[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rF{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&La(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty="start",sF="close",iF="pLPCommand",oF="pRTLPCB",kI="id",xI="pw",NI="ser",aF="cb",lF="seg",cF="ts",uF="d",hF="dframe",OI=1870,DI=30,dF=OI-DI,fF=25e3,pF=3e4;class Js{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ma(e),this.stats_=Zp(n),this.urlFn=l=>(this.appCheckToken&&(l[Wd]=this.appCheckToken),PI(n,RI,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new rF(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(pF)),qV(()=>{if(this.isClosed_)return;this.scriptTagHolder=new eg((...i)=>{const[o,a,l,c,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ty)this.id=a,this.password=l;else if(o===sF)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Ty]="t",r[NI]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[aF]=this.scriptTagHolder.uniqueCallbackIdentifier),r[EI]=Jp,this.transportSessionId&&(r[wI]=this.transportSessionId),this.lastSessionId&&(r[AI]=this.lastSessionId),this.applicationId&&(r[SI]=this.applicationId),this.appCheckToken&&(r[Wd]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&bI.test(location.hostname)&&(r[TI]=II);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Js.forceAllow_=!0}static forceDisallow(){Js.forceDisallow_=!0}static isAvailable(){return Js.forceAllow_?!0:!Js.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!HV()&&!zV()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ct(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=nw(n),s=yI(r,dF);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[hF]="t",r[kI]=e,r[xI]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ct(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class eg{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=$V(),window[iF+this.uniqueCallbackIdentifier]=e,window[oF+this.uniqueCallbackIdentifier]=n,this.myIFrame=eg.createIFrame_();let i="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;i='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){yt("frame writing exception"),a.stack&&yt(a.stack),yt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||yt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[kI]=this.myID,e[xI]=this.myPW,e[NI]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+DI+r.length<=OI;){const o=this.pendingSegs.shift();r=r+"&"+lF+s+"="+o.seg+"&"+cF+s+"="+o.ts+"&"+uF+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(fF)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{yt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gF=16384,mF=45e3;let fc=null;typeof MozWebSocket!="undefined"?fc=MozWebSocket:typeof WebSocket!="undefined"&&(fc=WebSocket);class sn{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ma(this.connId),this.stats_=Zp(n),this.connURL=sn.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[EI]=Jp,typeof location!="undefined"&&location.hostname&&bI.test(location.hostname)&&(o[TI]=II),n&&(o[wI]=n),r&&(o[AI]=r),s&&(o[Wd]=s),i&&(o[SI]=i),PI(e,CI,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,os.set("previous_websocket_failure",!0);try{let r;ow(),this.mySock=new fc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){sn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&fc!==null&&!sn.forceDisallow_}static previouslyFailed(){return os.isInMemoryStorage||os.get("previous_websocket_failure")===!0}markConnectionHealthy(){os.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=jo(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(U(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ct(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=yI(n,gF);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(mF))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}sn.responsesRequiredToBeHealthy=2;sn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Js,sn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=sn&&sn.isAvailable();let r=n&&!sn.previouslyFailed();if(e.webSocketOnly&&(n||qt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[sn];else{const s=this.transports_=[];for(const i of la.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);la.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}la.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _F=6e4,yF=5e3,vF=10*1024,EF=100*1024,Rh="t",Iy="d",wF="s",by="r",TF="e",Ay="o",Sy="a",Cy="n",Ry="p",IF="h";class bF{constructor(e,n,r,s,i,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ma("c:"+this.id+":"),this.transportManager_=new la(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Co(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>EF?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>vF?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Rh in e){const n=e[Rh];n===Sy?this.upgradeIfSecondaryHealthy_():n===by?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ay&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Zi("t",e),r=Zi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ry,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Sy,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Cy,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Zi("t",e),r=Zi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Zi(Rh,e);if(Iy in e){const r=e[Iy];if(n===IF){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Cy){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===wF?this.onConnectionShutdown_(r):n===by?this.onReset_(r):n===TF?jd("Server Error: "+r):n===Ay?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):jd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Jp!==r&&qt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Co(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(_F))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Co(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(yF))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ry,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(os.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e){this.allowedEvents_=e,this.listeners_={},U(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){U(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc extends LI{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Lf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new pc}getInitialEvent(e){return U(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Py=32,ky=768;class Fe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ke(){return new Fe("")}function ve(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Fr(t){return t.pieces_.length-t.pieceNum_}function Le(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Fe(t.pieces_,e)}function VI(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function AF(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function FI(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function UI(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Fe(e,0)}function st(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Fe)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new Fe(n,0)}function _e(t){return t.pieceNum_>=t.pieces_.length}function Qt(t,e){const n=ve(t),r=ve(e);if(n===null)return e;if(n===r)return Qt(Le(t),Le(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function $I(t,e){if(Fr(t)!==Fr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ln(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Fr(t)>Fr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class SF{constructor(e,n){this.errorPrefix_=n,this.parts_=FI(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Gc(this.parts_[r]);BI(this)}}function CF(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Gc(e),BI(t)}function RF(t){const e=t.parts_.pop();t.byteLength_-=Gc(e),t.parts_.length>0&&(t.byteLength_-=1)}function BI(t){if(t.byteLength_>ky)throw new Error(t.errorPrefix_+"has a key path longer than "+ky+" bytes ("+t.byteLength_+").");if(t.parts_.length>Py)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Py+") or object contains a cycle "+Xr(t))}function Xr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg extends LI{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new tg}getInitialEvent(e){return U(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo=1e3,PF=60*5*1e3,xy=30*1e3,kF=1.3,xF=3e4,NF="server_kill",Ny=3;class Yn extends MI{constructor(e,n,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Yn.nextPersistentConnectionId_++,this.log_=Ma("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=eo,this.maxReconnectDelay_=PF,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!ow())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");tg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&pc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(ct(i)),U(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new Bo,r={p:e._path.toString(),q:e._queryObject},s={action:"g",request:r,onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),U(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;Yn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ir(e,"w")){const r=_i(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();qt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ik(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=xy)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Tk(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ct(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):jd("Unrecognized action received from server: "+ct(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){U(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=eo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=eo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>xF&&(this.reconnectDelay_=eo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*kF)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Yn.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(h){U(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?yt("getToken() completed but was canceled"):(yt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new bF(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,f=>{qt(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(NF)},i))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&qt(h),l())}}}interrupt(e){yt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){yt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],id(this.interruptReasons_)&&(this.reconnectDelay_=eo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>Xp(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new Fe(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){yt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ny&&(this.reconnectDelay_=xy,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){yt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ny&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+pI.replace(/\./g,"-")]=1,Lf()?e["framework.cordova"]=1:iw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=pc.getInstance().currentlyOnline();return id(this.interruptReasons_)&&e}}Yn.nextPersistentConnectionId_=0;Yn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Ee(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Ee(Ci,e),s=new Ee(Ci,n);return this.compare(r,s)!==0}minPost(){return Ee.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cl;class jI extends Du{static get __EMPTY_NODE(){return cl}static set __EMPTY_NODE(e){cl=e}compare(e,n){return qi(e.name,n.name)}isDefinedOn(e){throw Oi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Ee.MIN}maxPost(){return new Ee(Ts,cl)}makePost(e,n){return U(typeof e=="string","KeyIndex indexValue must always be a string."),new Ee(e,cl)}toString(){return".key"}}const hi=new jI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class nt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:nt.RED,this.left=s!=null?s:Nt.EMPTY_NODE,this.right=i!=null?i:Nt.EMPTY_NODE}copy(e,n,r,s,i){return new nt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Nt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Nt.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}nt.RED=!0;nt.BLACK=!1;class OF{copy(e,n,r,s,i){return this}insert(e,n,r){return new nt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Nt{constructor(e,n=Nt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Nt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,nt.BLACK,null,null))}remove(e){return new Nt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,nt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ul(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ul(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ul(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ul(this.root_,null,this.comparator_,!0,e)}}Nt.EMPTY_NODE=new OF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DF(t,e){return qi(t.name,e.name)}function ng(t,e){return qi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hd;function MF(t){Hd=t}const qI=function(t){return typeof t=="number"?"number:"+vI(t):"string:"+t},WI=function(t){if(t.isLeafNode()){const e=t.val();U(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ir(e,".sv"),"Priority must be a string or number.")}else U(t===Hd||t.isEmpty(),"priority of unexpected type.");U(t===Hd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oy;class et{constructor(e,n=et.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,U(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),WI(this.priorityNode_)}static set __childrenNodeConstructor(e){Oy=e}static get __childrenNodeConstructor(){return Oy}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new et(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return _e(e)?this:ve(e)===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:et.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ve(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(U(r!==".priority"||Fr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,et.__childrenNodeConstructor.EMPTY_NODE.updateChild(Le(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+qI(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=vI(this.value_):e+=this.value_,this.lazyHash_=mI(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===et.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof et.__childrenNodeConstructor?-1:(U(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=et.VALUE_TYPE_ORDER.indexOf(n),i=et.VALUE_TYPE_ORDER.indexOf(r);return U(s>=0,"Unknown leaf type: "+n),U(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}et.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let HI,zI;function LF(t){HI=t}function VF(t){zI=t}class FF extends Du{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?qi(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Ee.MIN}maxPost(){return new Ee(Ts,new et("[PRIORITY-POST]",zI))}makePost(e,n){const r=HI(e);return new Ee(n,new et("[PRIORITY-POST]",r))}toString(){return".priority"}}const wt=new FF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UF=Math.log(2);class $F{constructor(e){const n=i=>parseInt(Math.log(i)/UF,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const gc=function(t,e,n,r){t.sort(e);const s=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new nt(d,h.node,nt.BLACK,null,null);{const f=parseInt(u/2,10)+l,g=s(l,f),y=s(f+1,c);return h=t[f],d=n?n(h):h,new nt(d,h.node,nt.BLACK,g,y)}},i=function(l){let c=null,u=null,h=t.length;const d=function(g,y){const _=h-g,E=h;h-=g;const S=s(_+1,E),C=t[_],k=n?n(C):C;f(new nt(k,C.node,y,null,S))},f=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const y=l.nextBitIsOne(),_=Math.pow(2,l.count-(g+1));y?d(_,nt.BLACK):(d(_,nt.BLACK),d(_,nt.RED))}return u},o=new $F(t.length),a=i(o);return new Nt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ph;const Ws={};class Kn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return U(Ws&&wt,"ChildrenNode.ts has not been loaded"),Ph=Ph||new Kn({".priority":Ws},{".priority":wt}),Ph}get(e){const n=_i(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Nt?n:null}hasIndex(e){return ir(this.indexSet_,e.toString())}addIndex(e,n){U(e!==hi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(Ee.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=gc(r,e.getCompare()):a=Ws;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Kn(u,c)}addToIndexes(e,n){const r=Wl(this.indexes_,(s,i)=>{const o=_i(this.indexSet_,i);if(U(o,"Missing index implementation for "+i),s===Ws)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Ee.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),gc(a,o.getCompare())}else return Ws;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new Ee(e.name,a))),l.insert(e,e.node)}});return new Kn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Wl(this.indexes_,s=>{if(s===Ws)return s;{const i=n.get(e.name);return i?s.remove(new Ee(e.name,i)):s}});return new Kn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let to;class Ae{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&WI(this.priorityNode_),this.children_.isEmpty()&&U(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return to||(to=new Ae(new Nt(ng),null,Kn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||to}updatePriority(e){return this.children_.isEmpty()?this:new Ae(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?to:n}}getChild(e){const n=ve(e);return n===null?this:this.getImmediateChild(n).getChild(Le(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(U(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Ee(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?to:this.priorityNode_;return new Ae(s,o,i)}}updateChild(e,n){const r=ve(e);if(r===null)return n;{U(ve(e)!==".priority"||Fr(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(Le(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(wt,(o,a)=>{n[o]=a.val(e),r++,i&&Ae.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+qI(this.getPriority().val())+":"),this.forEachChild(wt,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":mI(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new Ee(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Ee(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Ee(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Ee.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Ee.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Va?-1:0}withIndex(e){if(e===hi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Ae(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===hi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(wt),s=n.getIterator(wt);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===hi?null:this.indexMap_.get(e.toString())}}Ae.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class BF extends Ae{constructor(){super(new Nt(ng),Ae.EMPTY_NODE,Kn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ae.EMPTY_NODE}isEmpty(){return!1}}const Va=new BF;Object.defineProperties(Ee,{MIN:{value:new Ee(Ci,Ae.EMPTY_NODE)},MAX:{value:new Ee(Ts,Va)}});jI.__EMPTY_NODE=Ae.EMPTY_NODE;et.__childrenNodeConstructor=Ae;MF(Va);VF(Va);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jF=!0;function vt(t,e=null){if(t===null)return Ae.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),U(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new et(n,vt(e))}if(!(t instanceof Array)&&jF){const n=[];let r=!1;if(Jt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=vt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new Ee(o,l)))}}),n.length===0)return Ae.EMPTY_NODE;const i=gc(n,DF,o=>o.name,ng);if(r){const o=gc(n,wt.getCompare());return new Ae(i,vt(e),new Kn({".priority":o},{".priority":wt}))}else return new Ae(i,vt(e),Kn.Default)}else{let n=Ae.EMPTY_NODE;return Jt(t,(r,s)=>{if(ir(t,r)&&r.substring(0,1)!=="."){const i=vt(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(vt(e))}}LF(vt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qF extends Du{constructor(e){super(),this.indexPath_=e,U(!_e(e)&&ve(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?qi(e.name,n.name):i}makePost(e,n){const r=vt(e),s=Ae.EMPTY_NODE.updateChild(this.indexPath_,r);return new Ee(n,s)}maxPost(){const e=Ae.EMPTY_NODE.updateChild(this.indexPath_,Va);return new Ee(Ts,e)}toString(){return FI(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WF extends Du{compare(e,n){const r=e.node.compareTo(n.node);return r===0?qi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Ee.MIN}maxPost(){return Ee.MAX}makePost(e,n){const r=vt(e);return new Ee(n,r)}toString(){return".value"}}const HF=new WF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zF(t){return{type:"value",snapshotNode:t}}function KF(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function GF(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Dy(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function QF(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=wt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return U(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return U(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ci}hasEnd(){return this.endSet_}getIndexEndValue(){return U(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return U(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ts}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return U(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===wt}copy(){const e=new rg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function My(t){const e={};if(t.isDefault())return e;let n;if(t.index_===wt?n="$priority":t.index_===HF?n="$value":t.index_===hi?n="$key":(U(t.index_ instanceof qF,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ct(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ct(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ct(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ct(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ct(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ly(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==wt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc extends MI{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Ma("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(U(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=mc.getListenId_(e,r),a={};this.listens_[o]=a;const l=My(e._queryParams);this.restRequest_(i+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(i,h,!1,r),_i(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,n){const r=mc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=My(e._queryParams),r=e._path.toString(),s=new Bo;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Mi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=jo(a.responseText)}catch{qt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&qt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YF{constructor(){this.rootNode_=Ae.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(){return{value:null,children:new Map}}function KI(t,e,n){if(_e(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ve(e);t.children.has(r)||t.children.set(r,_c());const s=t.children.get(r);e=Le(e),KI(s,e,n)}}function zd(t,e,n){t.value!==null?n(e,t.value):XF(t,(r,s)=>{const i=new Fe(e.toString()+"/"+r);zd(s,i,n)})}function XF(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JF{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Jt(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy=10*1e3,ZF=30*1e3,e2=5*60*1e3;class t2{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new JF(e);const r=Vy+(ZF-Vy)*Math.random();Co(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Jt(e,(s,i)=>{i>0&&ir(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),Co(this.reportStats_.bind(this),Math.floor(Math.random()*2*e2))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Rn||(Rn={}));function GI(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function QI(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function YI(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Rn.ACK_USER_WRITE,this.source=GI()}operationForChild(e){if(_e(this.path)){if(this.affectedTree.value!=null)return U(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Fe(e));return new yc(ke(),n,this.revert)}}else return U(ve(this.path)===e,"operationForChild called for unrelated child."),new yc(Le(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Rn.OVERWRITE}operationForChild(e){return _e(this.path)?new Is(this.source,ke(),this.snap.getImmediateChild(e)):new Is(this.source,Le(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Rn.MERGE}operationForChild(e){if(_e(this.path)){const n=this.children.subtree(new Fe(e));return n.isEmpty()?null:n.value?new Is(this.source,ke(),n.value):new ca(this.source,ke(),n)}else return U(ve(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ca(this.source,Le(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(_e(e))return this.isFullyInitialized()&&!this.filtered_;const n=ve(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function n2(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(QF(o.childName,o.snapshotNode))}),no(t,s,"child_removed",e,r,n),no(t,s,"child_added",e,r,n),no(t,s,"child_moved",i,r,n),no(t,s,"child_changed",e,r,n),no(t,s,"value",e,r,n),s}function no(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,l)=>s2(t,a,l)),o.forEach(a=>{const l=r2(t,a,i);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function r2(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function s2(t,e,n){if(e.childName==null||n.childName==null)throw Oi("Should only compare child_ events.");const r=new Ee(e.childName,e.snapshotNode),s=new Ee(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(t,e){return{eventCache:t,serverCache:e}}function Ro(t,e,n,r){return XI(new sg(e,n,r),t.serverCache)}function JI(t,e,n,r){return XI(t.eventCache,new sg(e,n,r))}function Kd(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function bs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kh;const i2=()=>(kh||(kh=new Nt(WV)),kh);class De{constructor(e,n=i2()){this.value=e,this.children=n}static fromObject(e){let n=new De(null);return Jt(e,(r,s)=>{n=n.set(new Fe(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ke(),value:this.value};if(_e(e))return null;{const r=ve(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(Le(e),n);return i!=null?{path:st(new Fe(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(_e(e))return this;{const n=ve(e),r=this.children.get(n);return r!==null?r.subtree(Le(e)):new De(null)}}set(e,n){if(_e(e))return new De(n,this.children);{const r=ve(e),i=(this.children.get(r)||new De(null)).set(Le(e),n),o=this.children.insert(r,i);return new De(this.value,o)}}remove(e){if(_e(e))return this.children.isEmpty()?new De(null):new De(null,this.children);{const n=ve(e),r=this.children.get(n);if(r){const s=r.remove(Le(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new De(null):new De(this.value,i)}else return this}}get(e){if(_e(e))return this.value;{const n=ve(e),r=this.children.get(n);return r?r.get(Le(e)):null}}setTree(e,n){if(_e(e))return n;{const r=ve(e),i=(this.children.get(r)||new De(null)).setTree(Le(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new De(this.value,o)}}fold(e){return this.fold_(ke(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(st(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ke(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(_e(e))return null;{const i=ve(e),o=this.children.get(i);return o?o.findOnPath_(Le(e),st(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ke(),n)}foreachOnPath_(e,n,r){if(_e(e))return this;{this.value&&r(n,this.value);const s=ve(e),i=this.children.get(s);return i?i.foreachOnPath_(Le(e),st(n,s),r):new De(null)}}foreach(e){this.foreach_(ke(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(st(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.writeTree_=e}static empty(){return new un(new De(null))}}function Po(t,e,n){if(_e(e))return new un(new De(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=Qt(s,e);return i=i.updateChild(o,n),new un(t.writeTree_.set(s,i))}else{const s=new De(n),i=t.writeTree_.setTree(e,s);return new un(i)}}}function Fy(t,e,n){let r=t;return Jt(n,(s,i)=>{r=Po(r,st(e,s),i)}),r}function Uy(t,e){if(_e(e))return un.empty();{const n=t.writeTree_.setTree(e,new De(null));return new un(n)}}function Gd(t,e){return Ns(t,e)!=null}function Ns(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Qt(n.path,e)):null}function $y(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(wt,(r,s)=>{e.push(new Ee(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new Ee(r,s.value))}),e}function Nr(t,e){if(_e(e))return t;{const n=Ns(t,e);return n!=null?new un(new De(n)):new un(t.writeTree_.subtree(e))}}function Qd(t){return t.writeTree_.isEmpty()}function Ri(t,e){return ZI(ke(),t.writeTree_,e)}function ZI(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(U(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=ZI(st(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(st(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eb(t,e){return ib(e,t)}function o2(t,e,n,r,s){U(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=Po(t.visibleWrites,e,n)),t.lastWriteId=r}function a2(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function l2(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);U(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&c2(a,r.path)?s=!1:ln(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return u2(t),!0;if(r.snap)t.visibleWrites=Uy(t.visibleWrites,r.path);else{const a=r.children;Jt(a,l=>{t.visibleWrites=Uy(t.visibleWrites,st(r.path,l))})}return!0}else return!1}function c2(t,e){if(t.snap)return ln(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ln(st(t.path,n),e))return!0;return!1}function u2(t){t.visibleWrites=tb(t.allWrites,h2,ke()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function h2(t){return t.visible}function tb(t,e,n){let r=un.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)ln(n,o)?(a=Qt(n,o),r=Po(r,a,i.snap)):ln(o,n)&&(a=Qt(o,n),r=Po(r,ke(),i.snap.getChild(a)));else if(i.children){if(ln(n,o))a=Qt(n,o),r=Fy(r,a,i.children);else if(ln(o,n))if(a=Qt(o,n),_e(a))r=Fy(r,ke(),i.children);else{const l=_i(i.children,ve(a));if(l){const c=l.getChild(Le(a));r=Po(r,ke(),c)}}}else throw Oi("WriteRecord should have .snap or .children")}}return r}function nb(t,e,n,r,s){if(!r&&!s){const i=Ns(t.visibleWrites,e);if(i!=null)return i;{const o=Nr(t.visibleWrites,e);if(Qd(o))return n;if(n==null&&!Gd(o,ke()))return null;{const a=n||Ae.EMPTY_NODE;return Ri(o,a)}}}else{const i=Nr(t.visibleWrites,e);if(!s&&Qd(i))return n;if(!s&&n==null&&!Gd(i,ke()))return null;{const o=function(c){return(c.visible||s)&&(!r||!~r.indexOf(c.writeId))&&(ln(c.path,e)||ln(e,c.path))},a=tb(t.allWrites,o,e),l=n||Ae.EMPTY_NODE;return Ri(a,l)}}}function d2(t,e,n){let r=Ae.EMPTY_NODE;const s=Ns(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(wt,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=Nr(t.visibleWrites,e);return n.forEachChild(wt,(o,a)=>{const l=Ri(Nr(i,new Fe(o)),a);r=r.updateImmediateChild(o,l)}),$y(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Nr(t.visibleWrites,e);return $y(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function f2(t,e,n,r,s){U(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=st(e,n);if(Gd(t.visibleWrites,i))return null;{const o=Nr(t.visibleWrites,i);return Qd(o)?s.getChild(n):Ri(o,s.getChild(n))}}function p2(t,e,n,r){const s=st(e,n),i=Ns(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=Nr(t.visibleWrites,s);return Ri(o,r.getNode().getImmediateChild(n))}else return null}function g2(t,e){return Ns(t.visibleWrites,e)}function m2(t,e,n,r,s,i,o){let a;const l=Nr(t.visibleWrites,e),c=Ns(l,ke());if(c!=null)a=c;else if(n!=null)a=Ri(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let f=d.getNext();for(;f&&u.length<s;)h(f,r)!==0&&u.push(f),f=d.getNext();return u}else return[]}function _2(){return{visibleWrites:un.empty(),allWrites:[],lastWriteId:-1}}function Yd(t,e,n,r){return nb(t.writeTree,t.treePath,e,n,r)}function rb(t,e){return d2(t.writeTree,t.treePath,e)}function By(t,e,n,r){return f2(t.writeTree,t.treePath,e,n,r)}function vc(t,e){return g2(t.writeTree,st(t.treePath,e))}function y2(t,e,n,r,s,i){return m2(t.writeTree,t.treePath,e,n,r,s,i)}function ig(t,e,n){return p2(t.writeTree,t.treePath,e,n)}function sb(t,e){return ib(st(t.treePath,e),t.writeTree)}function ib(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;U(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),U(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,Dy(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,GF(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,KF(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,Dy(r,e.snapshotNode,s.oldSnap));else throw Oi("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const ob=new E2;class og{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new sg(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ig(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:bs(this.viewCache_),i=y2(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}function w2(t,e){U(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),U(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function T2(t,e,n,r,s){const i=new v2;let o,a;if(n.type===Rn.OVERWRITE){const c=n;c.source.fromUser?o=Xd(t,e,c.path,c.snap,r,s,i):(U(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!_e(c.path),o=Ec(t,e,c.path,c.snap,r,s,a,i))}else if(n.type===Rn.MERGE){const c=n;c.source.fromUser?o=b2(t,e,c.path,c.children,r,s,i):(U(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Jd(t,e,c.path,c.children,r,s,a,i))}else if(n.type===Rn.ACK_USER_WRITE){const c=n;c.revert?o=C2(t,e,c.path,r,s,i):o=A2(t,e,c.path,c.affectedTree,r,s,i)}else if(n.type===Rn.LISTEN_COMPLETE)o=S2(t,e,n.path,r,i);else throw Oi("Unknown operation type: "+n.type);const l=i.getChanges();return I2(e,o,l),{viewCache:o,changes:l}}function I2(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=Kd(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(zF(Kd(e)))}}function ab(t,e,n,r,s,i){const o=e.eventCache;if(vc(r,n)!=null)return e;{let a,l;if(_e(n))if(U(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=bs(e),u=c instanceof Ae?c:Ae.EMPTY_NODE,h=rb(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const c=Yd(r,bs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=ve(n);if(c===".priority"){U(Fr(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=By(r,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Le(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=By(r,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=ig(r,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,s,i):a=o.getNode()}}return Ro(e,a,o.isFullyInitialized()||_e(n),t.filter.filtersNodes())}}function Ec(t,e,n,r,s,i,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(_e(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),f,null)}else{const f=ve(n);if(!l.isCompleteForPath(n)&&Fr(n)>1)return e;const g=Le(n),_=l.getNode().getImmediateChild(f).updateChild(g,r);f===".priority"?c=u.updatePriority(l.getNode(),_):c=u.updateChild(l.getNode(),f,_,g,ob,null)}const h=JI(e,c,l.isFullyInitialized()||_e(n),u.filtersNodes()),d=new og(s,h,i);return ab(t,h,n,s,d,a)}function Xd(t,e,n,r,s,i,o){const a=e.eventCache;let l,c;const u=new og(s,e,i);if(_e(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Ro(e,c,!0,t.filter.filtersNodes());else{const h=ve(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Ro(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=Le(n),f=a.getNode().getImmediateChild(h);let g;if(_e(d))g=r;else{const y=u.getCompleteChild(h);y!=null?VI(d)===".priority"&&y.getChild(UI(d)).isEmpty()?g=y:g=y.updateChild(d,r):g=Ae.EMPTY_NODE}if(f.equals(g))l=e;else{const y=t.filter.updateChild(a.getNode(),h,g,d,u,o);l=Ro(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function jy(t,e){return t.eventCache.isCompleteForChild(e)}function b2(t,e,n,r,s,i,o){let a=e;return r.foreach((l,c)=>{const u=st(n,l);jy(e,ve(u))&&(a=Xd(t,a,u,c,s,i,o))}),r.foreach((l,c)=>{const u=st(n,l);jy(e,ve(u))||(a=Xd(t,a,u,c,s,i,o))}),a}function qy(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Jd(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;_e(n)?c=r:c=new De(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),g=qy(t,f,d);l=Ec(t,l,new Fe(h),g,s,i,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const g=e.serverCache.getNode().getImmediateChild(h),y=qy(t,g,d);l=Ec(t,l,new Fe(h),y,s,i,o,a)}}),l}function A2(t,e,n,r,s,i,o){if(vc(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(_e(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ec(t,e,n,l.getNode().getChild(n),s,i,a,o);if(_e(n)){let c=new De(null);return l.getNode().forEachChild(hi,(u,h)=>{c=c.set(new Fe(u),h)}),Jd(t,e,n,c,s,i,a,o)}else return e}else{let c=new De(null);return r.foreach((u,h)=>{const d=st(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Jd(t,e,n,c,s,i,a,o)}}function S2(t,e,n,r,s){const i=e.serverCache,o=JI(e,i.getNode(),i.isFullyInitialized()||_e(n),i.isFiltered());return ab(t,o,n,r,ob,s)}function C2(t,e,n,r,s,i){let o;if(vc(r,n)!=null)return e;{const a=new og(r,e,s),l=e.eventCache.getNode();let c;if(_e(n)||ve(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Yd(r,bs(e));else{const h=e.serverCache.getNode();U(h instanceof Ae,"serverChildren would be complete if leaf node"),u=rb(r,h)}u=u,c=t.filter.updateFullNode(l,u,i)}else{const u=ve(n);let h=ig(r,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Le(n),a,i):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,Ae.EMPTY_NODE,Le(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Yd(r,bs(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||vc(r,ke())!=null,Ro(e,c,o,t.filter.filtersNodes())}}function R2(t,e){const n=bs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!_e(e)&&!n.getImmediateChild(ve(e)).isEmpty())?n.getChild(e):null}function Wy(t,e,n,r){e.type===Rn.MERGE&&e.source.queryId!==null&&(U(bs(t.viewCache_),"We should always have a full cache before handling merges"),U(Kd(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=T2(t.processor_,s,e,n,r);return w2(t.processor_,i.viewCache),U(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,P2(t,i.changes,i.viewCache.eventCache.getNode(),null)}function P2(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return n2(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hy;function k2(t){U(!Hy,"__referenceConstructor has already been defined"),Hy=t}function ag(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return U(i!=null,"SyncTree gave us an op for an invalid query."),Wy(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(Wy(o,e,n,r));return i}}function lg(t,e){let n=null;for(const r of t.views.values())n=n||R2(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zy;function x2(t){U(!zy,"__referenceConstructor has already been defined"),zy=t}class Ky{constructor(e){this.listenProvider_=e,this.syncPointTree_=new De(null),this.pendingWriteTree_=_2(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function N2(t,e,n,r,s){return o2(t.pendingWriteTree_,e,n,r,s),s?Lu(t,new Is(GI(),e,n)):[]}function Zs(t,e,n=!1){const r=a2(t.pendingWriteTree_,e);if(l2(t.pendingWriteTree_,e)){let i=new De(null);return r.snap!=null?i=i.set(ke(),!0):Jt(r.children,o=>{i=i.set(new Fe(o),!0)}),Lu(t,new yc(r.path,i,n))}else return[]}function Mu(t,e,n){return Lu(t,new Is(QI(),e,n))}function O2(t,e,n){const r=De.fromObject(n);return Lu(t,new ca(QI(),e,r))}function D2(t,e,n,r){const s=hb(t,r);if(s!=null){const i=db(s),o=i.path,a=i.queryId,l=Qt(o,e),c=new Is(YI(a),l,n);return fb(t,o,c)}else return[]}function M2(t,e,n,r){const s=hb(t,r);if(s){const i=db(s),o=i.path,a=i.queryId,l=Qt(o,e),c=De.fromObject(n),u=new ca(YI(a),l,c);return fb(t,o,u)}else return[]}function lb(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Qt(o,e),c=lg(a,l);if(c)return c});return nb(s,e,i,n,!0)}function Lu(t,e){return cb(e,t.syncPointTree_,null,eb(t.pendingWriteTree_,ke()))}function cb(t,e,n,r){if(_e(t.path))return ub(t,e,n,r);{const s=e.get(ke());n==null&&s!=null&&(n=lg(s,ke()));let i=[];const o=ve(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=sb(r,o);i=i.concat(cb(a,l,c,u))}return s&&(i=i.concat(ag(s,t,r,n))),i}}function ub(t,e,n,r){const s=e.get(ke());n==null&&s!=null&&(n=lg(s,ke()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=sb(r,o),u=t.operationForChild(o);u&&(i=i.concat(ub(u,a,l,c)))}),s&&(i=i.concat(ag(s,t,r,n))),i}function hb(t,e){return t.tagToQueryMap.get(e)}function db(t){const e=t.indexOf("$");return U(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Fe(t.substr(0,e))}}function fb(t,e,n){const r=t.syncPointTree_.get(e);U(r,"Missing sync point for query tag that we're tracking");const s=eb(t.pendingWriteTree_,e);return ag(r,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new cg(n)}node(){return this.node_}}class ug{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=st(this.path_,e);return new ug(this.syncTree_,n)}node(){return lb(this.syncTree_,this.path_)}}const L2=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Gy=function(t,e,n){if(!t||typeof t!="object")return t;if(U(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return V2(t[".sv"],e,n);if(typeof t[".sv"]=="object")return F2(t[".sv"],e);U(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},V2=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:U(!1,"Unexpected server value: "+t)}},F2=function(t,e,n){t.hasOwnProperty("increment")||U(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&U(!1,"Unexpected increment value: "+r);const s=e.node();if(U(s!==null&&typeof s!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},U2=function(t,e,n,r){return hg(e,new ug(n,t),r)},$2=function(t,e,n){return hg(t,new cg(e),n)};function hg(t,e,n){const r=t.getPriority().val(),s=Gy(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=Gy(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new et(a,vt(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new et(s))),o.forEachChild(wt,(a,l)=>{const c=hg(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function fg(t,e){let n=e instanceof Fe?e:new Fe(e),r=t,s=ve(n);for(;s!==null;){const i=_i(r.node.children,s)||{children:{},childCount:0};r=new dg(s,r,i),n=Le(n),s=ve(n)}return r}function Wi(t){return t.node.value}function pb(t,e){t.node.value=e,Zd(t)}function gb(t){return t.node.childCount>0}function B2(t){return Wi(t)===void 0&&!gb(t)}function Vu(t,e){Jt(t.node.children,(n,r)=>{e(new dg(n,t,r))})}function mb(t,e,n,r){n&&!r&&e(t),Vu(t,s=>{mb(s,e,!0,r)}),n&&r&&e(t)}function j2(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Fa(t){return new Fe(t.parent===null?t.name:Fa(t.parent)+"/"+t.name)}function Zd(t){t.parent!==null&&q2(t.parent,t.name,t)}function q2(t,e,n){const r=B2(n),s=ir(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,Zd(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Zd(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W2=/[\[\].#$\/\u0000-\u001F\u007F]/,H2=/[\[\].#$\u0000-\u001F\u007F]/,xh=10*1024*1024,_b=function(t){return typeof t=="string"&&t.length!==0&&!W2.test(t)},z2=function(t){return typeof t=="string"&&t.length!==0&&!H2.test(t)},K2=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),z2(t)},yb=function(t,e,n){const r=n instanceof Fe?new SF(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Xr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Xr(r)+" with contents = "+e.toString());if(_I(e))throw new Error(t+"contains "+e.toString()+" "+Xr(r));if(typeof e=="string"&&e.length>xh/3&&Gc(e)>xh)throw new Error(t+"contains a string greater than "+xh+" utf8 bytes "+Xr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(Jt(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!_b(o)))throw new Error(t+" contains an invalid key ("+o+") "+Xr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);CF(r,o),yb(t,a,r),RF(r)}),s&&i)throw new Error(t+' contains ".value" child '+Xr(r)+" in addition to actual children.")}},G2=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!_b(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!K2(n))throw new Error(Rk(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Y2(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!$I(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function Os(t,e,n){Y2(t,n),X2(t,r=>ln(r,e)||ln(e,r))}function X2(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(J2(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function J2(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ds&&yt("event: "+n.toString()),La(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z2="repo_interrupt",eU=25;class tU{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Q2,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=_c(),this.transactionQueueTree_=new dg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function nU(t,e,n){if(t.stats_=Zp(t.repoInfo_),t.forceRestClient_||YV())t.server_=new mc(t.repoInfo_,(r,s,i,o)=>{Qy(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Yy(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ct(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Yn(t.repoInfo_,e,(r,s,i,o)=>{Qy(t,r,s,i,o)},r=>{Yy(t,r)},r=>{sU(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=nF(t.repoInfo_,()=>new t2(t.stats_,t.server_)),t.infoData_=new YF,t.infoSyncTree_=new Ky({startListening:(r,s,i,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Mu(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),pg(t,"connected",!1),t.serverSyncTree_=new Ky({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,l)=>{const c=o(a,l);Os(t.eventQueue_,r._path,c)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function rU(t){const n=t.infoData_.getNode(new Fe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function vb(t){return L2({timestamp:rU(t)})}function Qy(t,e,n,r,s){t.dataUpdateCount++;const i=new Fe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const l=Wl(n,c=>vt(c));o=M2(t.serverSyncTree_,i,l,s)}else{const l=vt(n);o=D2(t.serverSyncTree_,i,l,s)}else if(r){const l=Wl(n,c=>vt(c));o=O2(t.serverSyncTree_,i,l)}else{const l=vt(n);o=Mu(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=mg(t,i)),Os(t.eventQueue_,a,o)}function Yy(t,e){pg(t,"connected",e),e===!1&&oU(t)}function sU(t,e){Jt(e,(n,r)=>{pg(t,n,r)})}function pg(t,e,n){const r=new Fe("/.info/"+e),s=vt(n);t.infoData_.updateSnapshot(r,s);const i=Mu(t.infoSyncTree_,r,s);Os(t.eventQueue_,r,i)}function iU(t){return t.nextWriteId_++}function oU(t){Eb(t,"onDisconnectEvents");const e=vb(t),n=_c();zd(t.onDisconnect_,ke(),(s,i)=>{const o=U2(s,i,t.serverSyncTree_,e);KI(n,s,o)});let r=[];zd(n,ke(),(s,i)=>{r=r.concat(Mu(t.serverSyncTree_,s,i));const o=uU(t,s);mg(t,o)}),t.onDisconnect_=_c(),Os(t.eventQueue_,ke(),r)}function aU(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Z2)}function Eb(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),yt(n,...e)}function wb(t,e,n){return lb(t.serverSyncTree_,e,n)||Ae.EMPTY_NODE}function gg(t,e=t.transactionQueueTree_){if(e||Fu(t,e),Wi(e)){const n=Ib(t,e);U(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&lU(t,Fa(e),n)}else gb(e)&&Vu(e,n=>{gg(t,n)})}function lU(t,e,n){const r=n.map(c=>c.currentWriteId),s=wb(t,e,r);let i=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];U(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Qt(e,u.path);i=i.updateChild(h,u.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Eb(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Zs(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Fu(t,fg(t.transactionQueueTree_,e)),gg(t,t.transactionQueueTree_),Os(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)La(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{qt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}mg(t,e)}},o)}function mg(t,e){const n=Tb(t,e),r=Fa(n),s=Ib(t,n);return cU(t,s,r),r}function cU(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Qt(n,l.path);let u=!1,h;if(U(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(Zs(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=eU)u=!0,h="maxretry",s=s.concat(Zs(t.serverSyncTree_,l.currentWriteId,!0));else{const d=wb(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){yb("transaction failed: Data returned ",f,l.path);let g=vt(f);typeof f=="object"&&f!=null&&ir(f,".priority")||(g=g.updatePriority(d.getPriority()));const _=l.currentWriteId,E=vb(t),S=$2(g,d,E);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=S,l.currentWriteId=iU(t),o.splice(o.indexOf(_),1),s=s.concat(N2(t.serverSyncTree_,l.path,S,l.currentWriteId,l.applyLocally)),s=s.concat(Zs(t.serverSyncTree_,_,!0))}else u=!0,h="nodata",s=s.concat(Zs(t.serverSyncTree_,l.currentWriteId,!0))}Os(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}Fu(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)La(r[a]);gg(t,t.transactionQueueTree_)}function Tb(t,e){let n,r=t.transactionQueueTree_;for(n=ve(e);n!==null&&Wi(r)===void 0;)r=fg(r,n),e=Le(e),n=ve(e);return r}function Ib(t,e){const n=[];return bb(t,e,n),n.sort((r,s)=>r.order-s.order),n}function bb(t,e,n){const r=Wi(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);Vu(e,s=>{bb(t,s,n)})}function Fu(t,e){const n=Wi(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,pb(e,n.length>0?n:void 0)}Vu(e,r=>{Fu(t,r)})}function uU(t,e){const n=Fa(Tb(t,e)),r=fg(t.transactionQueueTree_,e);return j2(r,s=>{Nh(t,s)}),Nh(t,r),mb(r,s=>{Nh(t,s)}),n}function Nh(t,e){const n=Wi(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(U(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(U(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Zs(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?pb(e,void 0):n.length=i+1,Os(t.eventQueue_,Fa(e),s);for(let o=0;o<r.length;o++)La(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hU(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function dU(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):qt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Xy=function(t,e){const n=fU(t),r=n.namespace;n.domain==="firebase.com"&&ws(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&ws("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||jV();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new ZV(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new Fe(n.pathString)}},fU=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=hU(t.substring(u,h)));const d=dU(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),i=r}"ns"in d&&(i=d.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return _e(this._path)?null:VI(this._path)}get ref(){return new Hi(this._repo,this._path)}get _queryIdentifier(){const e=Ly(this._queryParams),n=Xp(e);return n==="{}"?"default":n}get _queryObject(){return Ly(this._queryParams)}isEqual(e){if(e=Xe(e),!(e instanceof _g))return!1;const n=this._repo===e._repo,r=$I(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+AF(this._path)}}class Hi extends _g{constructor(e,n){super(e,n,new rg,!1)}get parent(){const e=UI(this._path);return e===null?null:new Hi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}k2(Hi);x2(Hi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pU="FIREBASE_DATABASE_EMULATOR_HOST",ef={};let gU=!1;function mU(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||ws("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),yt("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Xy(i,s),a=o.repoInfo,l,c;typeof process!="undefined"&&process.env&&(c=process.env[pU]),c?(l=!0,i=`http://${c}?ns=${a.namespace}`,o=Xy(i,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new qd(qd.OWNER):new JV(t.name,t.options,e);G2("Invalid Firebase Database URL",o),_e(o.path)||ws("Database URL must point to the root of a Firebase Database (not including a child path).");const h=yU(a,t,u,new XV(t.name,n));return new vU(h,t)}function _U(t,e){const n=ef[e];(!n||n[t.key]!==t)&&ws(`Database ${e}(${t.repoInfo_}) has already been deleted.`),aU(t),delete n[t.key]}function yU(t,e,n,r){let s=ef[e.name];s||(s={},ef[e.name]=s);let i=s[t.toURLString()];return i&&ws("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new tU(t,gU,n,r),s[t.toURLString()]=i,i}class vU{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(nU(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Hi(this._repo,ke())),this._rootInternal}_delete(){return this._rootInternal!==null&&(_U(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ws("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EU(t){VV($r),Mn(new dn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return mU(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),Bt(yy,vy,t),Bt(yy,vy,"esm2017")}Yn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Yn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};EU();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab="firebasestorage.googleapis.com",wU="storageBucket",TU=2*60*1e3,IU=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends yn{constructor(e,n,r=0){super(Oh(e),`Firebase Storage: ${n} (${Oh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Un.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Oh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Fn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Fn||(Fn={}));function Oh(t){return"storage/"+t}function bU(){const t="An unknown error occurred, please check the error payload for server response.";return new Un(Fn.UNKNOWN,t)}function AU(){return new Un(Fn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function SU(){return new Un(Fn.CANCELED,"User canceled the upload/download.")}function CU(t){return new Un(Fn.INVALID_URL,"Invalid URL '"+t+"'.")}function RU(t){return new Un(Fn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Jy(t){return new Un(Fn.INVALID_ARGUMENT,t)}function Sb(){return new Un(Fn.APP_DELETED,"The Firebase app was deleted.")}function PU(t){return new Un(Fn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=cn.makeFromUrl(e,n)}catch{return new cn(e,"")}if(r.path==="")return r;throw RU(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(k){k.path.charAt(k.path.length-1)==="/"&&(k.path_=k.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(k){k.path_=decodeURIComponent(k.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),g={bucket:1,path:3},y=n===Ab?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",E=new RegExp(`^https?://${y}/${s}/${_}`,"i"),C=[{regex:a,indices:l,postModify:i},{regex:f,indices:g,postModify:c},{regex:E,indices:{bucket:1,path:2},postModify:c}];for(let k=0;k<C.length;k++){const N=C[k],x=N.regex.exec(e);if(x){const G=x[N.indices.bucket];let P=x[N.indices.path];P||(P=""),r=new cn(G,P),N.postModify(r);break}}if(r==null)throw CU(e);return r}}class kU{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xU(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(..._){c||(c=!0,e.apply(null,_))}function h(_){s=setTimeout(()=>{s=null,t(f,l())},_)}function d(){i&&clearTimeout(i)}function f(_,...E){if(c){d();return}if(_){d(),u.call(null,_,...E);return}if(l()||o){d(),u.call(null,_,...E);return}r<64&&(r*=2);let C;a===1?(a=2,C=0):C=(r+Math.random())*1e3,h(C)}let g=!1;function y(_){g||(g=!0,d(),!c&&(s!==null?(_||(a=2),clearTimeout(s),h(0)):_||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,y(!0)},n),y}function NU(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OU(t){return t!==void 0}function Zy(t,e,n,r){if(r<e)throw Jy(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Jy(`Invalid value for '${t}'. Expected ${n} or less.`)}function DU(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(wc||(wc={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MU(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LU{constructor(e,n,r,s,i,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new hl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===wc.NO_ERROR,l=i.getStatus();if(!a||MU(l,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===wc.ABORT;r(!1,new hl(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new hl(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());OU(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=bU();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Sb():SU();o(l)}else{const l=AU();o(l)}};this.canceled_?n(!1,new hl(!1,null,!0)):this.backoffId_=xU(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&NU(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class hl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function VU(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function FU(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function UU(t,e){e&&(t["X-Firebase-GMPID"]=e)}function $U(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function BU(t,e,n,r,s,i,o=!0){const a=DU(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return UU(c,e),VU(c,n),FU(c,i),$U(c,r),new LU(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jU(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function qU(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,n){this._service=e,n instanceof cn?this._location=n:this._location=cn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Tc(e,n)}get root(){const e=new cn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return qU(this._location.path)}get storage(){return this._service}get parent(){const e=jU(this._location.path);if(e===null)return null;const n=new cn(this._location.bucket,e);return new Tc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw PU(e)}}function ev(t,e){const n=e==null?void 0:e[wU];return n==null?null:cn.makeFromBucketSpec(n,t)}class WU{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Ab,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=TU,this._maxUploadRetryTime=IU,this._requests=new Set,s!=null?this._bucket=cn.makeFromBucketSpec(s,this._host):this._bucket=ev(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=cn.makeFromBucketSpec(this._url,e):this._bucket=ev(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Zy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Zy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Tc(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new kU(Sb());{const o=BU(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const tv="@firebase/storage",nv="0.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HU="storage";function zU(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new WU(n,r,s,e,$r)}function KU(){Mn(new dn(HU,zU,"PUBLIC").setMultipleInstances(!0)),Bt(tv,nv,""),Bt(tv,nv,"esm2017")}KU();function yg(t){return HL(Yp(t))}function GB(t){return GU({initialUser:t,dependencies:{popupRedirectResolver:qO,persistence:[eO,jN,Vw]}})}const Cb=Symbol("VueFireAuth");function GU({dependencies:t,initialUser:e}){return(n,r)=>{const[s,i]=QU(n,r,e,t);LV(s,i)}}function QU(t,e,n,r,s=TN(t,r)){const i=DV(t,e).run(()=>Zn(n));return fI.set(t,i),e.provide(Cb,s),[i,s]}function YU(t){return OV?$t(Cb):null}function QB(t,{firebaseApp:e,modules:n=[]}){t.provide(dI,e);for(const r of n)r(e,t)}const XU=()=>{const t=yg();return Q0(t,"users")},YB=()=>{const t=yg();return Q0(t,"events")};class JU{constructor(){Ba(this,"db",yg());Ba(this,"auth",YU())}async signup(e){await MN(this.auth,e.email,e.password);const n=await oV(XU(),{...e,...this.getEmptyPassword()});return Y0(this.db,n.path)}getEmptyPassword(){return{password:null,passwordRepeat:null}}async login(e){return LN(this.auth,e.email,e.password)}async logout(){return FN(this.auth)}}function Rb(t){return encodeURIComponent(t)}function Pb(t){return decodeURIComponent(t)}function ZU(t){return Rb(t===Object(t)?JSON.stringify(t):""+t)}function e$(t){if(t==="")return t;t.indexOf('"')===0&&(t=t.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")),t=Pb(t.replace(/\+/g," "));try{const e=JSON.parse(t);(e===Object(e)||Array.isArray(e)===!0)&&(t=e)}catch{}return t}function kb(t){const e=new Date;return e.setMilliseconds(e.getMilliseconds()+t),e.toUTCString()}function t$(t){let e=0;const n=t.match(/(\d+)d/),r=t.match(/(\d+)h/),s=t.match(/(\d+)m/),i=t.match(/(\d+)s/);return n&&(e+=n[1]*864e5),r&&(e+=r[1]*36e5),s&&(e+=s[1]*6e4),i&&(e+=i[1]*1e3),e===0?t:kb(e)}function xb(t,e,n={},r){let s,i;n.expires!==void 0&&(Object.prototype.toString.call(n.expires)==="[object Date]"?s=n.expires.toUTCString():typeof n.expires=="string"?s=t$(n.expires):(i=parseFloat(n.expires),s=isNaN(i)===!1?kb(i*864e5):n.expires));const o=`${Rb(t)}=${ZU(e)}`,a=[o,s!==void 0?"; Expires="+s:"",n.path?"; Path="+n.path:"",n.domain?"; Domain="+n.domain:"",n.sameSite?"; SameSite="+n.sameSite:"",n.httpOnly?"; HttpOnly":"",n.secure?"; Secure":"",n.other?"; "+n.other:""].join("");if(r){r.req.qCookies?r.req.qCookies.push(a):r.req.qCookies=[a],r.res.setHeader("Set-Cookie",r.req.qCookies);let l=r.req.headers.cookie||"";if(s!==void 0&&i<0){const c=Ic(t,r);c!==void 0&&(l=l.replace(`${t}=${c}; `,"").replace(`; ${t}=${c}`,"").replace(`${t}=${c}`,""))}else l=l?`${o}; ${l}`:a;r.req.headers.cookie=l}else document.cookie=a}function Ic(t,e){const n=e?e.req.headers:document,r=n.cookie?n.cookie.split("; "):[],s=r.length;let i=t?null:{},o=0,a,l,c;for(;o<s;o++)if(a=r[o].split("="),l=Pb(a.shift()),c=a.join("="),!t)i[l]=c;else if(t===l){i=e$(c);break}return i}function n$(t,e,n){xb(t,"",{expires:-1,...e},n)}function r$(t,e){return Ic(t,e)!==null}function s$(t){return{get:e=>Ic(e,t),set:(e,n,r)=>xb(e,n,r,t),has:e=>r$(e,t),remove:(e,n)=>n$(e,n,t),getAll:()=>Ic(null,t)}}const ko={install({$q:t,ssrContext:e}){t.cookies=this}};Object.assign(ko,s$());class i${constructor(){Ba(this,"keys",{refresh:"refresh_token"})}getRefreshToken(){return ko.get(this.keys.refresh)}setRefreshToken(e){ko.set(this.keys.refresh,e,{sameSite:"Strict",path:"/"})}clearToken(){ko.remove(this.keys.refresh)}}const o$=fP("auth",()=>{const t=new JU,e=new i$,n=Jn(e_("unset",!!e.getRefreshToken())),r=Jn(e_("unset"));return{login:a=>uh({state:n,action:t.login(a),onSuccess:l=>{e.setRefreshToken(l.user.refreshToken),n.data=!0},onError:l=>Bl.error(l.message)}),signup:a=>uh({state:n,action:t.signup(a),onError:l=>Bl.error(l.message)}),isAuth:n,logout:()=>uh({state:r,action:t.logout(),onSuccess:()=>{e.clearToken(),n.data=!1}}),logoutState:r}});function Ds(t){this._maxSize=t,this.clear()}Ds.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Ds.prototype.get=function(t){return this._values[t]};Ds.prototype.set=function(t,e){return this._size>=this._maxSize&&this.clear(),t in this._values||this._size++,this._values[t]=e};var a$=/[^.^\]^[]+|(?=\[\]|\.\.)/g,Nb=/^\d+$/,l$=/^\d/,c$=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,u$=/^\s*(['"]?)(.*?)(\1)\s*$/,vg=512,rv=new Ds(vg),sv=new Ds(vg),iv=new Ds(vg),fs={Cache:Ds,split:tf,normalizePath:Dh,setter:function(t){var e=Dh(t);return sv.get(t)||sv.set(t,function(r,s){for(var i=0,o=e.length,a=r;i<o-1;){var l=e[i];if(l==="__proto__"||l==="constructor"||l==="prototype")return r;a=a[e[i++]]}a[e[i]]=s})},getter:function(t,e){var n=Dh(t);return iv.get(t)||iv.set(t,function(s){for(var i=0,o=n.length;i<o;)if(s!=null||!e)s=s[n[i++]];else return;return s})},join:function(t){return t.reduce(function(e,n){return e+(Eg(n)||Nb.test(n)?"["+n+"]":(e?".":"")+n)},"")},forEach:function(t,e,n){h$(Array.isArray(t)?t:tf(t),e,n)}};function Dh(t){return rv.get(t)||rv.set(t,tf(t).map(function(e){return e.replace(u$,"$2")}))}function tf(t){return t.match(a$)||[""]}function h$(t,e,n){var r=t.length,s,i,o,a;for(i=0;i<r;i++)s=t[i],s&&(p$(s)&&(s='"'+s+'"'),a=Eg(s),o=!a&&/^\d+$/.test(s),e.call(n,s,a,o,i,t))}function Eg(t){return typeof t=="string"&&t&&["'",'"'].indexOf(t.charAt(0))!==-1}function d$(t){return t.match(l$)&&!t.match(Nb)}function f$(t){return c$.test(t)}function p$(t){return!Eg(t)&&(d$(t)||f$(t))}const g$=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Uu=t=>t.match(g$)||[],$u=t=>t[0].toUpperCase()+t.slice(1),wg=(t,e)=>Uu(t).join(e).toLowerCase(),Ob=t=>Uu(t).reduce((e,n)=>`${e}${e?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),m$=t=>$u(Ob(t)),_$=t=>wg(t,"_"),y$=t=>wg(t,"-"),v$=t=>$u(wg(t," ")),E$=t=>Uu(t).map($u).join(" ");var Mh={words:Uu,upperFirst:$u,camelCase:Ob,pascalCase:m$,snakeCase:_$,kebabCase:y$,sentenceCase:v$,titleCase:E$},Tg={exports:{}};Tg.exports=function(t){return Db(w$(t),t)};Tg.exports.array=Db;function Db(t,e){var n=t.length,r=new Array(n),s={},i=n,o=T$(e),a=I$(t);for(e.forEach(function(c){if(!a.has(c[0])||!a.has(c[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});i--;)s[i]||l(t[i],i,new Set);return r;function l(c,u,h){if(h.has(c)){var d;try{d=", node was:"+JSON.stringify(c)}catch{d=""}throw new Error("Cyclic dependency"+d)}if(!a.has(c))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(c));if(!s[u]){s[u]=!0;var f=o.get(c)||new Set;if(f=Array.from(f),u=f.length){h.add(c);do{var g=f[--u];l(g,a.get(g),h)}while(u);h.delete(c)}r[--n]=c}}}function w$(t){for(var e=new Set,n=0,r=t.length;n<r;n++){var s=t[n];e.add(s[0]),e.add(s[1])}return Array.from(e)}function T$(t){for(var e=new Map,n=0,r=t.length;n<r;n++){var s=t[n];e.has(s[0])||e.set(s[0],new Set),e.has(s[1])||e.set(s[1],new Set),e.get(s[0]).add(s[1])}return e}function I$(t){for(var e=new Map,n=0,r=t.length;n<r;n++)e.set(t[n],n);return e}var b$=Tg.exports;const A$=Object.prototype.toString,S$=Error.prototype.toString,C$=RegExp.prototype.toString,R$=typeof Symbol!="undefined"?Symbol.prototype.toString:()=>"",P$=/^Symbol\((.*)\)(.*)$/;function k$(t){return t!=+t?"NaN":t===0&&1/t<0?"-0":""+t}function ov(t,e=!1){if(t==null||t===!0||t===!1)return""+t;const n=typeof t;if(n==="number")return k$(t);if(n==="string")return e?`"${t}"`:t;if(n==="function")return"[Function "+(t.name||"anonymous")+"]";if(n==="symbol")return R$.call(t).replace(P$,"Symbol($1)");const r=A$.call(t).slice(8,-1);return r==="Date"?isNaN(t.getTime())?""+t:t.toISOString(t):r==="Error"||t instanceof Error?"["+S$.call(t)+"]":r==="RegExp"?C$.call(t):null}function Xn(t,e){let n=ov(t,e);return n!==null?n:JSON.stringify(t,function(r,s){let i=ov(this[r],e);return i!==null?i:s},2)}function Mb(t){return t==null?[]:[].concat(t)}let Lb,x$=/\$\{\s*(\w+)\s*\}/g;Lb=Symbol.toStringTag;class kt extends Error{static formatError(e,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof e=="string"?e.replace(x$,(s,i)=>Xn(n[i])):typeof e=="function"?e(n):e}static isError(e){return e&&e.name==="ValidationError"}constructor(e,n,r,s,i){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this[Lb]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=s,this.errors=[],this.inner=[],Mb(e).forEach(o=>{if(kt.isError(o)){this.errors.push(...o.errors);const a=o.inner.length?o.inner:[o];this.inner.push(...a)}else this.errors.push(o)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],!i&&Error.captureStackTrace&&Error.captureStackTrace(this,kt)}}let Tn={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:t,type:e,value:n,originalValue:r})=>{const s=r!=null&&r!==n?` (cast from the value \`${Xn(r,!0)}\`).`:".";return e!=="mixed"?`${t} must be a \`${e}\` type, but the final value was: \`${Xn(n,!0)}\``+s:`${t} must match the configured type. The validated value was: \`${Xn(n,!0)}\``+s}},en={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},N$={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},nf={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},O$={isValue:"${path} field must be ${value}"},rf={noUnknown:"${path} field has unspecified keys: ${unknown}"},Cl={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},D$={notType:t=>{const{path:e,value:n,spec:r}=t,s=r.types.length;if(Array.isArray(n)){if(n.length<s)return`${e} tuple value has too few items, expected a length of ${s} but got ${n.length} for value: \`${Xn(n,!0)}\``;if(n.length>s)return`${e} tuple value has too many items, expected a length of ${s} but got ${n.length} for value: \`${Xn(n,!0)}\``}return kt.formatError(Tn.notType,t)}};Object.assign(Object.create(null),{mixed:Tn,string:en,number:N$,date:nf,object:rf,array:Cl,boolean:O$,tuple:D$});const Bu=t=>t&&t.__isYupSchema__;class bc{static fromOptions(e,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:s,otherwise:i}=n,o=typeof r=="function"?r:(...a)=>a.every(l=>l===r);return new bc(e,(a,l)=>{var c;let u=o(...a)?s:i;return(c=u==null?void 0:u(l))!=null?c:l})}constructor(e,n){this.fn=void 0,this.refs=e,this.refs=e,this.fn=n}resolve(e,n){let r=this.refs.map(i=>i.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),s=this.fn(r,e,n);if(s===void 0||s===e)return e;if(!Bu(s))throw new TypeError("conditions must return a schema object");return s.resolve(n)}}const dl={context:"$",value:"."};function M$(t,e){return new zr(t,e)}class zr{constructor(e,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof e!="string")throw new TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),e==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===dl.context,this.isValue=this.key[0]===dl.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?dl.context:this.isValue?dl.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&fs.getter(this.path,!0),this.map=n.map}getValue(e,n,r){let s=this.isContext?r:this.isValue?e:n;return this.getter&&(s=this.getter(s||{})),this.map&&(s=this.map(s)),s}cast(e,n){return this.getValue(e,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}}zr.prototype.__isYupRef=!0;const as=t=>t==null;function Hs(t){function e({value:n,path:r="",options:s,originalValue:i,schema:o},a,l){const{name:c,test:u,params:h,message:d,skipAbsent:f}=t;let{parent:g,context:y,abortEarly:_=o.spec.abortEarly,disableStackTrace:E=o.spec.disableStackTrace}=s;function S(K){return zr.isRef(K)?K.getValue(n,g,y):K}function C(K={}){var B;const ie=Object.assign({value:n,originalValue:i,label:o.spec.label,path:K.path||r,spec:o.spec},h,K.params);for(const he of Object.keys(ie))ie[he]=S(ie[he]);const W=new kt(kt.formatError(K.message||d,ie),n,ie.path,K.type||c,(B=K.disableStackTrace)!=null?B:E);return W.params=ie,W}const k=_?a:l;let N={path:r,parent:g,type:c,from:s.from,createError:C,resolve:S,options:s,originalValue:i,schema:o};const x=K=>{kt.isError(K)?k(K):K?l(null):k(C())},G=K=>{kt.isError(K)?k(K):a(K)};if(f&&as(n))return x(!0);let L;try{var Y;if(L=u.call(N,n,N),typeof((Y=L)==null?void 0:Y.then)=="function"){if(s.sync)throw new Error(`Validation test of type: "${N.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(L).then(x,G)}}catch(K){G(K);return}x(L)}return e.OPTIONS=t,e}function L$(t,e,n,r=n){let s,i,o;return e?(fs.forEach(e,(a,l,c)=>{let u=l?a.slice(1,a.length-1):a;t=t.resolve({context:r,parent:s,value:n});let h=t.type==="tuple",d=c?parseInt(u,10):0;if(t.innerType||h){if(h&&!c)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);if(n&&d>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${e}. because there is no value at that index. `);s=n,n=n&&n[d],t=h?t.spec.types[d]:t.innerType}if(!c){if(!t.fields||!t.fields[u])throw new Error(`The schema does not contain the path: ${e}. (failed at: ${o} which is a type: "${t.type}")`);s=n,n=n&&n[u],t=t.fields[u]}i=u,o=l?"["+a+"]":"."+a}),{schema:t,parent:s,parentPath:i}):{parent:s,parentPath:e,schema:t}}class Ac extends Set{describe(){const e=[];for(const n of this.values())e.push(zr.isRef(n)?n.describe():n);return e}resolveAll(e){let n=[];for(const r of this.values())n.push(e(r));return n}clone(){return new Ac(this.values())}merge(e,n){const r=this.clone();return e.forEach(s=>r.add(s)),n.forEach(s=>r.delete(s)),r}}function ei(t,e=new Map){if(Bu(t)||!t||typeof t!="object")return t;if(e.has(t))return e.get(t);let n;if(t instanceof Date)n=new Date(t.getTime()),e.set(t,n);else if(t instanceof RegExp)n=new RegExp(t),e.set(t,n);else if(Array.isArray(t)){n=new Array(t.length),e.set(t,n);for(let r=0;r<t.length;r++)n[r]=ei(t[r],e)}else if(t instanceof Map){n=new Map,e.set(t,n);for(const[r,s]of t.entries())n.set(r,ei(s,e))}else if(t instanceof Set){n=new Set,e.set(t,n);for(const r of t)n.add(ei(r,e))}else if(t instanceof Object){n={},e.set(t,n);for(const[r,s]of Object.entries(t))n[r]=ei(s,e)}else throw Error(`Unable to clone ${t}`);return n}class _n{constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new Ac,this._blacklist=new Ac,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(Tn.notType)}),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},e==null?void 0:e.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=ei(Object.assign({},this.spec,e)),n}label(e){let n=this.clone();return n.spec.label=e,n}meta(...e){if(e.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},e[0]),n}withMutation(e){let n=this._mutate;this._mutate=!0;let r=e(this);return this._mutate=n,r}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let n=this,r=e.clone();const s=Object.assign({},n.spec,r.spec);return r.spec=s,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(e._whitelist,e._blacklist),r._blacklist=n._blacklist.merge(e._blacklist,e._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(i=>{e.tests.forEach(o=>{i.test(o.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(e){return e==null?!!(this.spec.nullable&&e===null||this.spec.optional&&e===void 0):this._typeCheck(e)}resolve(e){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((s,i)=>i.resolve(s,e),n),n=n.resolve(e)}return n}resolveOptions(e){var n,r,s,i;return Object.assign({},e,{from:e.from||[],strict:(n=e.strict)!=null?n:this.spec.strict,abortEarly:(r=e.abortEarly)!=null?r:this.spec.abortEarly,recursive:(s=e.recursive)!=null?s:this.spec.recursive,disableStackTrace:(i=e.disableStackTrace)!=null?i:this.spec.disableStackTrace})}cast(e,n={}){let r=this.resolve(Object.assign({value:e},n)),s=n.assert==="ignore-optionality",i=r._cast(e,n);if(n.assert!==!1&&!r.isType(i)){if(s&&as(i))return i;let o=Xn(e),a=Xn(i);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${o} 
`+(a!==o?`result of cast: ${a}`:""))}return i}_cast(e,n){let r=e===void 0?e:this.transforms.reduce((s,i)=>i.call(this,s,e,this),e);return r===void 0&&(r=this.getDefault(n)),r}_validate(e,n={},r,s){let{path:i,originalValue:o=e,strict:a=this.spec.strict}=n,l=e;a||(l=this._cast(l,Object.assign({assert:!1},n)));let c=[];for(let u of Object.values(this.internalTests))u&&c.push(u);this.runTests({path:i,value:l,originalValue:o,options:n,tests:c},r,u=>{if(u.length)return s(u,l);this.runTests({path:i,value:l,originalValue:o,options:n,tests:this.tests},r,s)})}runTests(e,n,r){let s=!1,{tests:i,value:o,originalValue:a,path:l,options:c}=e,u=y=>{s||(s=!0,n(y,o))},h=y=>{s||(s=!0,r(y,o))},d=i.length,f=[];if(!d)return h([]);let g={value:o,originalValue:a,path:l,options:c,schema:this};for(let y=0;y<i.length;y++){const _=i[y];_(g,u,function(S){S&&(Array.isArray(S)?f.push(...S):f.push(S)),--d<=0&&h(f)})}}asNestedTest({key:e,index:n,parent:r,parentPath:s,originalParent:i,options:o}){const a=e!=null?e:n;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof a=="number";let c=r[a];const u=Object.assign({},o,{strict:!0,parent:r,value:c,originalValue:i[a],key:void 0,[l?"index":"key"]:a,path:l||a.includes(".")?`${s||""}[${c?a:`"${a}"`}]`:(s?`${s}.`:"")+e});return(h,d,f)=>this.resolve(u)._validate(c,u,d,f)}validate(e,n){var r;let s=this.resolve(Object.assign({},n,{value:e})),i=(r=n==null?void 0:n.disableStackTrace)!=null?r:s.spec.disableStackTrace;return new Promise((o,a)=>s._validate(e,n,(l,c)=>{kt.isError(l)&&(l.value=c),a(l)},(l,c)=>{l.length?a(new kt(l,c,void 0,void 0,i)):o(c)}))}validateSync(e,n){var r;let s=this.resolve(Object.assign({},n,{value:e})),i,o=(r=n==null?void 0:n.disableStackTrace)!=null?r:s.spec.disableStackTrace;return s._validate(e,Object.assign({},n,{sync:!0}),(a,l)=>{throw kt.isError(a)&&(a.value=l),a},(a,l)=>{if(a.length)throw new kt(a,e,void 0,void 0,o);i=l}),i}isValid(e,n){return this.validate(e,n).then(()=>!0,r=>{if(kt.isError(r))return!1;throw r})}isValidSync(e,n){try{return this.validateSync(e,n),!0}catch(r){if(kt.isError(r))return!1;throw r}}_getDefault(e){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,e):ei(n)}getDefault(e){return this.resolve(e||{})._getDefault(e)}default(e){return arguments.length===0?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,n){const r=this.clone({nullable:e});return r.internalTests.nullable=Hs({message:n,name:"nullable",test(s){return s===null?this.schema.spec.nullable:!0}}),r}optionality(e,n){const r=this.clone({optional:e});return r.internalTests.optionality=Hs({message:n,name:"optionality",test(s){return s===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(e=Tn.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=Tn.notNull){return this.nullability(!1,e)}required(e=Tn.required){return this.clone().withMutation(n=>n.nonNullable(e).defined(e))}notRequired(){return this.clone().withMutation(e=>e.nullable().optional())}transform(e){let n=this.clone();return n.transforms.push(e),n}test(...e){let n;if(e.length===1?typeof e[0]=="function"?n={test:e[0]}:n=e[0]:e.length===2?n={name:e[0],test:e[1]}:n={name:e[0],message:e[1],test:e[2]},n.message===void 0&&(n.message=Tn.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),s=Hs(n),i=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(o=>!(o.OPTIONS.name===n.name&&(i||o.OPTIONS.test===s.OPTIONS.test))),r.tests.push(s),r}when(e,n){!Array.isArray(e)&&typeof e!="string"&&(n=e,e=".");let r=this.clone(),s=Mb(e).map(i=>new zr(i));return s.forEach(i=>{i.isSibling&&r.deps.push(i.key)}),r.conditions.push(typeof n=="function"?new bc(s,n):bc.fromOptions(s,n)),r}typeError(e){let n=this.clone();return n.internalTests.typeError=Hs({message:e,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(e,n=Tn.oneOf){let r=this.clone();return e.forEach(s=>{r._whitelist.add(s),r._blacklist.delete(s)}),r.internalTests.whiteList=Hs({message:n,name:"oneOf",skipAbsent:!0,test(s){let i=this.schema._whitelist,o=i.resolveAll(this.resolve);return o.includes(s)?!0:this.createError({params:{values:Array.from(i).join(", "),resolved:o}})}}),r}notOneOf(e,n=Tn.notOneOf){let r=this.clone();return e.forEach(s=>{r._blacklist.add(s),r._whitelist.delete(s)}),r.internalTests.blacklist=Hs({message:n,name:"notOneOf",test(s){let i=this.schema._blacklist,o=i.resolveAll(this.resolve);return o.includes(s)?this.createError({params:{values:Array.from(i).join(", "),resolved:o}}):!0}}),r}strip(e=!0){let n=this.clone();return n.spec.strip=e,n}describe(e){const n=(e?this.resolve(e):this).clone(),{label:r,meta:s,optional:i,nullable:o}=n.spec;return{meta:s,label:r,optional:i,nullable:o,default:n.getDefault(e),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,c,u)=>u.findIndex(h=>h.name===l.name)===c)}}}_n.prototype.__isYupSchema__=!0;for(const t of["validate","validateSync"])_n.prototype[`${t}At`]=function(e,n,r={}){const{parent:s,parentPath:i,schema:o}=L$(this,e,n,r.context);return o[t](s&&s[i],Object.assign({},r,{parent:s,path:e}))};for(const t of["equals","is"])_n.prototype[t]=_n.prototype.oneOf;for(const t of["not","nope"])_n.prototype[t]=_n.prototype.notOneOf;let V$=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,F$=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,U$=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,$$=t=>as(t)||t===t.trim(),B$={}.toString();function nn(){return new Vb}class Vb extends _n{constructor(){super({type:"string",check(e){return e instanceof String&&(e=e.valueOf()),typeof e=="string"}}),this.withMutation(()=>{this.transform((e,n,r)=>{if(!r.spec.coerce||r.isType(e)||Array.isArray(e))return e;const s=e!=null&&e.toString?e.toString():e;return s===B$?e:s})})}required(e){return super.required(e).withMutation(n=>n.test({message:e||Tn.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(e=>(e.tests=e.tests.filter(n=>n.OPTIONS.name!=="required"),e))}length(e,n=en.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(r){return r.length===this.resolve(e)}})}min(e,n=en.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(r){return r.length>=this.resolve(e)}})}max(e,n=en.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:e},skipAbsent:!0,test(r){return r.length<=this.resolve(e)}})}matches(e,n){let r=!1,s,i;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:s,name:i}=n:s=n),this.test({name:i||"matches",message:s||en.matches,params:{regex:e},skipAbsent:!0,test:o=>o===""&&r||o.search(e)!==-1})}email(e=en.email){return this.matches(V$,{name:"email",message:e,excludeEmptyString:!0})}url(e=en.url){return this.matches(F$,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=en.uuid){return this.matches(U$,{name:"uuid",message:e,excludeEmptyString:!1})}ensure(){return this.default("").transform(e=>e===null?"":e)}trim(e=en.trim){return this.transform(n=>n!=null?n.trim():n).test({message:e,name:"trim",test:$$})}lowercase(e=en.lowercase){return this.transform(n=>as(n)?n:n.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>as(n)||n===n.toLowerCase()})}uppercase(e=en.uppercase){return this.transform(n=>as(n)?n:n.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>as(n)||n===n.toUpperCase()})}}nn.prototype=Vb.prototype;const j$=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function jn(t,e=0){return Number(t)||e}function q$(t){const e=j$.exec(t);if(!e)return Date.parse?Date.parse(t):Number.NaN;const n={year:jn(e[1]),month:jn(e[2],1)-1,day:jn(e[3],1),hour:jn(e[4]),minute:jn(e[5]),second:jn(e[6]),millisecond:e[7]?jn(e[7].substring(0,3)):0,z:e[8]||void 0,plusMinus:e[9]||void 0,hourOffset:jn(e[10]),minuteOffset:jn(e[11])};if(n.z===void 0&&n.plusMinus===void 0)return new Date(n.year,n.month,n.day,n.hour,n.minute,n.second,n.millisecond).valueOf();let r=0;return n.z!=="Z"&&n.plusMinus!==void 0&&(r=n.hourOffset*60+n.minuteOffset,n.plusMinus==="+"&&(r=0-r)),Date.UTC(n.year,n.month,n.day,n.hour,n.minute+r,n.second,n.millisecond)}let Fb=new Date(""),W$=t=>Object.prototype.toString.call(t)==="[object Date]";function Ub(){return new Ua}class Ua extends _n{constructor(){super({type:"date",check(e){return W$(e)&&!isNaN(e.getTime())}}),this.withMutation(()=>{this.transform((e,n,r)=>!r.spec.coerce||r.isType(e)||e===null?e:(e=q$(e),isNaN(e)?Ua.INVALID_DATE:new Date(e)))})}prepareParam(e,n){let r;if(zr.isRef(e))r=e;else{let s=this.cast(e);if(!this._typeCheck(s))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=s}return r}min(e,n=nf.min){let r=this.prepareParam(e,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(s){return s>=this.resolve(r)}})}max(e,n=nf.max){let r=this.prepareParam(e,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(s){return s<=this.resolve(r)}})}}Ua.INVALID_DATE=Fb;Ub.prototype=Ua.prototype;Ub.INVALID_DATE=Fb;function H$(t,e=[]){let n=[],r=new Set,s=new Set(e.map(([o,a])=>`${o}-${a}`));function i(o,a){let l=fs.split(o)[0];r.add(l),s.has(`${a}-${l}`)||n.push([a,l])}for(const o of Object.keys(t)){let a=t[o];r.add(o),zr.isRef(a)&&a.isSibling?i(a.path,o):Bu(a)&&"deps"in a&&a.deps.forEach(l=>i(l,o))}return b$.array(Array.from(r),n).reverse()}function av(t,e){let n=1/0;return t.some((r,s)=>{var i;if((i=e.path)!=null&&i.includes(r))return n=s,!0}),n}function $b(t){return(e,n)=>av(t,e)-av(t,n)}const Bb=(t,e,n)=>{if(typeof t!="string")return t;let r=t;try{r=JSON.parse(t)}catch{}return n.isType(r)?r:t};function Rl(t){if("fields"in t){const e={};for(const[n,r]of Object.entries(t.fields))e[n]=Rl(r);return t.setFields(e)}if(t.type==="array"){const e=t.optional();return e.innerType&&(e.innerType=Rl(e.innerType)),e}return t.type==="tuple"?t.optional().clone({types:t.spec.types.map(Rl)}):"optional"in t?t.optional():t}const z$=(t,e)=>{const n=[...fs.normalizePath(e)];if(n.length===1)return n[0]in t;let r=n.pop(),s=fs.getter(fs.join(n),!0)(t);return!!(s&&r in s)};let lv=t=>Object.prototype.toString.call(t)==="[object Object]";function K$(t,e){let n=Object.keys(t.fields);return Object.keys(e).filter(r=>n.indexOf(r)===-1)}const G$=$b([]);function jb(t){return new qb(t)}class qb extends _n{constructor(e){super({type:"object",check(n){return lv(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=G$,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{e&&this.shape(e)})}_cast(e,n={}){var r;let s=super._cast(e,n);if(s===void 0)return this.getDefault(n);if(!this._typeCheck(s))return s;let i=this.fields,o=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,a=[].concat(this._nodes,Object.keys(s).filter(h=>!this._nodes.includes(h))),l={},c=Object.assign({},n,{parent:l,__validating:n.__validating||!1}),u=!1;for(const h of a){let d=i[h],f=h in s;if(d){let g,y=s[h];c.path=(n.path?`${n.path}.`:"")+h,d=d.resolve({value:y,context:n.context,parent:l});let _=d instanceof _n?d.spec:void 0,E=_==null?void 0:_.strict;if(_!=null&&_.strip){u=u||h in s;continue}g=!n.__validating||!E?d.cast(s[h],c):s[h],g!==void 0&&(l[h]=g)}else f&&!o&&(l[h]=s[h]);(f!==h in l||l[h]!==s[h])&&(u=!0)}return u?l:s}_validate(e,n={},r,s){let{from:i=[],originalValue:o=e,recursive:a=this.spec.recursive}=n;n.from=[{schema:this,value:o},...i],n.__validating=!0,n.originalValue=o,super._validate(e,n,r,(l,c)=>{if(!a||!lv(c)){s(l,c);return}o=o||c;let u=[];for(let h of this._nodes){let d=this.fields[h];!d||zr.isRef(d)||u.push(d.asNestedTest({options:n,key:h,parent:c,parentPath:n.path,originalParent:o}))}this.runTests({tests:u,value:c,originalValue:o,options:n},r,h=>{s(h.sort(this._sortErrors).concat(l),c)})})}clone(e){const n=super.clone(e);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(e){let n=super.concat(e),r=n.fields;for(let[s,i]of Object.entries(this.fields)){const o=r[s];r[s]=o===void 0?i:o}return n.withMutation(s=>s.setFields(r,[...this._excludedEdges,...e._excludedEdges]))}_getDefault(e){if("default"in this.spec)return super._getDefault(e);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var s;const i=this.fields[r];let o=e;(s=o)!=null&&s.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[r]})),n[r]=i&&"getDefault"in i?i.getDefault(o):void 0}),n}setFields(e,n){let r=this.clone();return r.fields=e,r._nodes=H$(e,n),r._sortErrors=$b(Object.keys(e)),n&&(r._excludedEdges=n),r}shape(e,n=[]){return this.clone().withMutation(r=>{let s=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),s=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,e),s)})}partial(){const e={};for(const[n,r]of Object.entries(this.fields))e[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(e)}deepPartial(){return Rl(this)}pick(e){const n={};for(const r of e)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n,this._excludedEdges.filter(([r,s])=>e.includes(r)&&e.includes(s)))}omit(e){const n=[];for(const r of Object.keys(this.fields))e.includes(r)||n.push(r);return this.pick(n)}from(e,n,r){let s=fs.getter(e,!0);return this.transform(i=>{if(!i)return i;let o=i;return z$(i,e)&&(o=Object.assign({},i),r||delete o[e],o[n]=s(i)),o})}json(){return this.transform(Bb)}noUnknown(e=!0,n=rf.noUnknown){typeof e!="boolean"&&(n=e,e=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(s){if(s==null)return!0;const i=K$(this.schema,s);return!e||i.length===0||this.createError({params:{unknown:i.join(", ")}})}});return r.spec.noUnknown=e,r}unknown(e=!0,n=rf.noUnknown){return this.noUnknown(!e,n)}transformKeys(e){return this.transform(n=>{if(!n)return n;const r={};for(const s of Object.keys(n))r[e(s)]=n[s];return r})}camelCase(){return this.transformKeys(Mh.camelCase)}snakeCase(){return this.transformKeys(Mh.snakeCase)}constantCase(){return this.transformKeys(e=>Mh.snakeCase(e).toUpperCase())}describe(e){const n=(e?this.resolve(e):this).clone(),r=super.describe(e);r.fields={};for(const[i,o]of Object.entries(n.fields)){var s;let a=e;(s=a)!=null&&s.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[i]})),r.fields[i]=o.describe(a)}return r}}jb.prototype=qb.prototype;function Q$(t){return new Wb(t)}class Wb extends _n{constructor(e){super({type:"array",spec:{types:e},check(n){return Array.isArray(n)}}),this.innerType=void 0,this.innerType=e}_cast(e,n){const r=super._cast(e,n);if(!this._typeCheck(r)||!this.innerType)return r;let s=!1;const i=r.map((o,a)=>{const l=this.innerType.cast(o,Object.assign({},n,{path:`${n.path||""}[${a}]`}));return l!==o&&(s=!0),l});return s?i:r}_validate(e,n={},r,s){var i;let o=this.innerType,a=(i=n.recursive)!=null?i:this.spec.recursive;n.originalValue!=null&&n.originalValue,super._validate(e,n,r,(l,c)=>{var u;if(!a||!o||!this._typeCheck(c)){s(l,c);return}let h=new Array(c.length);for(let f=0;f<c.length;f++){var d;h[f]=o.asNestedTest({options:n,index:f,parent:c,parentPath:n.path,originalParent:(d=n.originalValue)!=null?d:e})}this.runTests({value:c,tests:h,originalValue:(u=n.originalValue)!=null?u:e,options:n},r,f=>s(f.concat(l),c))})}clone(e){const n=super.clone(e);return n.innerType=this.innerType,n}json(){return this.transform(Bb)}concat(e){let n=super.concat(e);return n.innerType=this.innerType,e.innerType&&(n.innerType=n.innerType?n.innerType.concat(e.innerType):e.innerType),n}of(e){let n=this.clone();if(!Bu(e))throw new TypeError("`array.of()` sub-schema must be a valid yup schema not: "+Xn(e));return n.innerType=e,n.spec=Object.assign({},n.spec,{types:e}),n}length(e,n=Cl.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(r){return r.length===this.resolve(e)}})}min(e,n){return n=n||Cl.min,this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(r){return r.length>=this.resolve(e)}})}max(e,n){return n=n||Cl.max,this.test({message:n,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(r){return r.length<=this.resolve(e)}})}ensure(){return this.default(()=>[]).transform((e,n)=>this._typeCheck(e)?e:n==null?[]:[].concat(n))}compact(e){let n=e?(r,s,i)=>!e(r,s,i):r=>!!r;return this.transform(r=>r!=null?r.filter(n):r)}describe(e){const n=(e?this.resolve(e):this).clone(),r=super.describe(e);if(n.innerType){var s;let i=e;(s=i)!=null&&s.value&&(i=Object.assign({},i,{parent:i.value,value:i.value[0]})),r.innerType=n.innerType.describe(i)}return r}}Q$.prototype=Wb.prototype;var Pi;(t=>{t.phoneRegExp=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,t.passwordSchema=nn().min(8,"Password too short").matches(/\d+/,"Password no number").matches(/[a-z]+/,"Password no lowercase").matches(/[A-Z]+/,"Password no uppercase").test("Password has spaces","Password has spaces",e=>!/\s+/.test(e!=null?e:" ")).required(),t.shape=jb({firstName:nn().min(2).max(255).required(),lastName:nn().min(2).max(255).required(),username:nn().min(2).max(255).required(),work:nn().min(2).max(255).required(),email:nn().email().min(2).max(255).required(),organization:nn().min(2).max(255).required(),phone:nn().matches(t.phoneRegExp,"phone must be valid phone number").required(),country:nn().min(2).max(255).required()})})(Pi||(Pi={}));var cv;(t=>{t.shape=Pi.shape.pick(["email"]).shape({password:Pi.passwordSchema})})(cv||(cv={}));var uv;(t=>{t.shape=Pi.shape.shape({password:Pi.passwordSchema,passwordRepeat:nn().required().oneOf([M$("password")],"passwords must match")})})(uv||(uv={}));const Ar={AUTH:{LAYOUT:"auth-layout",LOGIN:"auth-login",SIGNUP:"auth-signup"},DASHBOARD:{LAYOUT:"dashboard-layout",EVENTS:"dashboard-events"},EVENT:{CREATE:"create-event",EDIT:"edit-event"}},Y$=[{name:Ar.AUTH.LAYOUT,path:"/auth",component:()=>on(()=>import("./LAuth.e1538a30.js"),["assets/LAuth.e1538a30.js","assets/QTabs.01400f65.js","assets/use-prevent-scroll.d4318e21.js","assets/QScrollArea.1873af3f.js","assets/AppLayout.a1a094e3.js"]),children:[{path:"",name:Ar.AUTH.LOGIN,component:()=>on(()=>import("./PLogin.dd65bec5.js"),["assets/PLogin.dd65bec5.js","assets/WLogin.8d9179e8.js","assets/SBtn.386dd5c3.js","assets/SBtn.42addab8.css","assets/use-prevent-scroll.d4318e21.js"])},{path:"signup",name:Ar.AUTH.SIGNUP,component:()=>on(()=>import("./PSignup.61f62502.js"),["assets/PSignup.61f62502.js","assets/WLogin.8d9179e8.js","assets/SBtn.386dd5c3.js","assets/SBtn.42addab8.css","assets/use-prevent-scroll.d4318e21.js"])}]}],X$=[{name:Ar.DASHBOARD.LAYOUT,path:"/",meta:{auth:!0},component:()=>on(()=>import("./LDashboard.271874e7.js"),["assets/LDashboard.271874e7.js","assets/QTabs.01400f65.js","assets/use-prevent-scroll.d4318e21.js","assets/QScrollArea.1873af3f.js","assets/AppLayout.a1a094e3.js"]),children:[{path:"",meta:{auth:!0},name:Ar.DASHBOARD.EVENTS,component:()=>on(()=>import("./PEventsList.02f8bfaa.js"),["assets/PEventsList.02f8bfaa.js","assets/WEditEvent.a5a0ab2a.js","assets/SBtn.386dd5c3.js","assets/SBtn.42addab8.css","assets/use-prevent-scroll.d4318e21.js","assets/QScrollArea.1873af3f.js"])}]},{path:"/event/create",name:Ar.EVENT.CREATE,meta:{auth:!0},component:()=>on(()=>import("./PCreateEvent.0038d266.js"),["assets/PCreateEvent.0038d266.js","assets/WEditEvent.a5a0ab2a.js","assets/SBtn.386dd5c3.js","assets/SBtn.42addab8.css","assets/use-prevent-scroll.d4318e21.js","assets/QScrollArea.1873af3f.js","assets/AppLayout.a1a094e3.js"])},{path:"/event/:eventName",name:Ar.EVENT.EDIT,props:!0,meta:{auth:!0},component:()=>on(()=>import("./PEditEvent.6057c2ee.js"),["assets/PEditEvent.6057c2ee.js","assets/WEditEvent.a5a0ab2a.js","assets/SBtn.386dd5c3.js","assets/SBtn.42addab8.css","assets/use-prevent-scroll.d4318e21.js","assets/QScrollArea.1873af3f.js","assets/AppLayout.a1a094e3.js"])}],J$=[...Y$,...X$];var Lh=function(){const e=iP({scrollBehavior:()=>({left:0,top:0,behavior:"smooth"}),history:wR("/metricalo-test-task/"),routes:J$});return e.beforeEach(async n=>{const{isAuth:r}=o$();return n.meta.auth&&!r.data?{name:Ar.AUTH.LOGIN}:!0}),e};async function Z$(t,e){const n=t(rR);n.use(nR,e);const r=Ur(typeof Lh=="function"?await Lh({}):Lh);return{app:n,router:r}}var eB={config:{},plugins:{Notify:sd,Cookies:ko}};const tB="/metricalo-test-task/";async function nB({app:t,router:e},n){let r=!1;const s=a=>{try{return e.resolve(a).href}catch{}return Object(a)===a?null:a},i=a=>{if(r=!0,typeof a=="string"&&/^https?:\/\//.test(a)){window.location.href=a;return}const l=s(a);l!==null&&(window.location.href=l)},o=window.location.href.replace(window.location.origin,"");for(let a=0;r===!1&&a<n.length;a++)try{await n[a]({app:t,router:e,ssrContext:null,redirect:i,urlPath:o,publicPath:tB})}catch(l){if(l&&l.url){i(l.url);return}console.error("[Quasar] boot error:",l);return}r!==!0&&(t.use(e),t.mount("#q-app"))}Z$(bE,eB).then(t=>{const[e,n]=Promise.allSettled!==void 0?["allSettled",r=>r.map(s=>{if(s.status==="rejected"){console.error("[Quasar] boot error:",s.reason);return}return s.value.default})]:["all",r=>r.map(s=>s.default)];return Promise[e]([on(()=>import("./axios.c38aac73.js"),[]),on(()=>import("./i18n.7573cbee.js"),[]),on(()=>import("./pinia.92c5f42d.js"),[]),on(()=>import("./firebase.69d009b4.js"),[])]).then(r=>{const s=n(r).filter(i=>typeof i=="function");nB(t,s)})});export{pP as $,pE as A,EB as B,vB as C,bf as D,Gv as E,Vt as F,PP as G,Fs as H,Xh as I,HC as J,so as K,eh as L,ha as M,VP as N,FP as O,gl as P,$l as Q,Ar as R,oS as S,Lc as T,iS as U,QB as V,gP as W,pi as X,Fo as Y,Ef as Z,ps as _,tE as a,FB as a$,Gt as a0,fB as a1,MC as a2,gB as a3,Yh as a4,SE as a5,DC as a6,LC as a7,VC as a8,mB as a9,$c as aA,cS as aB,iB as aC,Ov as aD,oB as aE,uf as aF,mP as aG,xB as aH,cB as aI,QP as aJ,OB as aK,kB as aL,lS as aM,eE as aN,jP as aO,Wm as aP,qP as aQ,TB as aR,wB as aS,Uo as aT,dB as aU,Pi as aV,nn as aW,Ub as aX,yg as aY,YB as aZ,VB as a_,RB as aa,CB as ab,_B as ac,Jn as ad,lB as ae,hB as af,zP as ag,NB as ah,PB as ai,CP as aj,Qh as ak,jC as al,OP as am,pB as an,o$ as ao,bB as ap,uv as aq,yn as ar,cv as as,Df as at,me as au,Of as av,US as aw,xf as ax,QE as ay,yB as az,IB as b,HB as b0,$B as b1,UB as b2,jB as b3,oV as b4,Y0 as b5,BB as b6,WB as b7,qB as b8,zB as b9,fP as ba,e_ as bb,uh as bc,Bl as bd,xP as be,NP as bf,SB as bg,jb as bh,Q$ as bi,XU as bj,KB as bk,VA as bl,ne as c,Oc as d,hf as e,We as f,Ni as g,te as h,$t as i,St as j,AB as k,Sx as l,GB as m,QA as n,Zv as o,Rf as p,Pf as q,Zn as r,xA as s,WA as t,Cr as u,uB as v,fo as w,aB as x,FS as y,sB as z};
