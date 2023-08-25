(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function $a(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const et={},Vi=[],nn=()=>{},pf=()=>!1,mf=/^on[^a-z]/,bs=n=>mf.test(n),Za=n=>n.startsWith("onUpdate:"),xt=Object.assign,Ja=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},_f=Object.prototype.hasOwnProperty,Ke=(n,e)=>_f.call(n,e),Oe=Array.isArray,ki=n=>Ts(n)==="[object Map]",Uc=n=>Ts(n)==="[object Set]",We=n=>typeof n=="function",ct=n=>typeof n=="string",Qa=n=>typeof n=="symbol",nt=n=>n!==null&&typeof n=="object",Dc=n=>nt(n)&&We(n.then)&&We(n.catch),Ic=Object.prototype.toString,Ts=n=>Ic.call(n),gf=n=>Ts(n).slice(8,-1),Nc=n=>Ts(n)==="[object Object]",eo=n=>ct(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,fs=$a(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),As=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},vf=/-(\w)/g,mn=As(n=>n.replace(vf,(e,t)=>t?t.toUpperCase():"")),xf=/\B([A-Z])/g,nr=As(n=>n.replace(xf,"-$1").toLowerCase()),ws=As(n=>n.charAt(0).toUpperCase()+n.slice(1)),Vs=As(n=>n?`on${ws(n)}`:""),Er=(n,e)=>!Object.is(n,e),ks=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},gs=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Mf=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Uo;const wa=()=>Uo||(Uo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function to(n){if(Oe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=ct(i)?bf(i):to(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(ct(n))return n;if(nt(n))return n}}const Sf=/;(?![^(]*\))/g,Ef=/:([^]+)/,yf=/\/\*[^]*?\*\//g;function bf(n){const e={};return n.replace(yf,"").split(Sf).forEach(t=>{if(t){const i=t.split(Ef);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ji(n){let e="";if(ct(n))e=n;else if(Oe(n))for(let t=0;t<n.length;t++){const i=ji(n[t]);i&&(e+=i+" ")}else if(nt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Tf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Af=$a(Tf);function Fc(n){return!!n||n===""}const st=n=>ct(n)?n:n==null?"":Oe(n)||nt(n)&&(n.toString===Ic||!We(n.toString))?JSON.stringify(n,Oc,2):String(n),Oc=(n,e)=>e&&e.__v_isRef?Oc(n,e.value):ki(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r])=>(t[`${i} =>`]=r,t),{})}:Uc(e)?{[`Set(${e.size})`]:[...e.values()]}:nt(e)&&!Oe(e)&&!Nc(e)?String(e):e;let Kt;class wf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Kt,!e&&Kt&&(this.index=(Kt.scopes||(Kt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=Kt;try{return Kt=this,e()}finally{Kt=t}}}on(){Kt=this}off(){Kt=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Rf(n,e=Kt){e&&e.active&&e.effects.push(n)}function Cf(){return Kt}const no=n=>{const e=new Set(n);return e.w=0,e.n=0,e},Bc=n=>(n.w&qn)>0,zc=n=>(n.n&qn)>0,Pf=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=qn},Lf=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];Bc(r)&&!zc(r)?r.delete(n):e[t++]=r,r.w&=~qn,r.n&=~qn}e.length=t}},Ra=new WeakMap;let dr=0,qn=1;const Ca=30;let Zt;const li=Symbol(""),Pa=Symbol("");class io{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Rf(this,i)}run(){if(!this.active)return this.fn();let e=Zt,t=Vn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Zt,Zt=this,Vn=!0,qn=1<<++dr,dr<=Ca?Pf(this):Do(this),this.fn()}finally{dr<=Ca&&Lf(this),qn=1<<--dr,Zt=this.parent,Vn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Zt===this?this.deferStop=!0:this.active&&(Do(this),this.onStop&&this.onStop(),this.active=!1)}}function Do(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Vn=!0;const Hc=[];function ir(){Hc.push(Vn),Vn=!1}function rr(){const n=Hc.pop();Vn=n===void 0?!0:n}function It(n,e,t){if(Vn&&Zt){let i=Ra.get(n);i||Ra.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=no()),Gc(r)}}function Gc(n,e){let t=!1;dr<=Ca?zc(n)||(n.n|=qn,t=!Bc(n)):t=!n.has(Zt),t&&(n.add(Zt),Zt.deps.push(n))}function Pn(n,e,t,i,r,s){const a=Ra.get(n);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&Oe(n)){const l=Number(i);a.forEach((c,u)=>{(u==="length"||u>=l)&&o.push(c)})}else switch(t!==void 0&&o.push(a.get(t)),e){case"add":Oe(n)?eo(t)&&o.push(a.get("length")):(o.push(a.get(li)),ki(n)&&o.push(a.get(Pa)));break;case"delete":Oe(n)||(o.push(a.get(li)),ki(n)&&o.push(a.get(Pa)));break;case"set":ki(n)&&o.push(a.get(li));break}if(o.length===1)o[0]&&La(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);La(no(l))}}function La(n,e){const t=Oe(n)?n:[...n];for(const i of t)i.computed&&Io(i);for(const i of t)i.computed||Io(i)}function Io(n,e){(n!==Zt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Uf=$a("__proto__,__v_isRef,__isVue"),Vc=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Qa)),Df=ro(),If=ro(!1,!0),Nf=ro(!0),No=Ff();function Ff(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=Je(this);for(let s=0,a=this.length;s<a;s++)It(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(Je)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){ir();const i=Je(this)[e].apply(this,t);return rr(),i}}),n}function Of(n){const e=Je(this);return It(e,"has",n),e.hasOwnProperty(n)}function ro(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?Qf:Yc:e?qc:Xc).get(i))return i;const a=Oe(i);if(!n){if(a&&Ke(No,r))return Reflect.get(No,r,s);if(r==="hasOwnProperty")return Of}const o=Reflect.get(i,r,s);return(Qa(r)?Vc.has(r):Uf(r))||(n||It(i,"get",r),e)?o:yt(o)?a&&eo(r)?o:o.value:nt(o)?n?jc(o):Cs(o):o}}const Bf=kc(),zf=kc(!0);function kc(n=!1){return function(t,i,r,s){let a=t[i];if(Ki(a)&&yt(a)&&!yt(r))return!1;if(!n&&(!vs(r)&&!Ki(r)&&(a=Je(a),r=Je(r)),!Oe(t)&&yt(a)&&!yt(r)))return a.value=r,!0;const o=Oe(t)&&eo(i)?Number(i)<t.length:Ke(t,i),l=Reflect.set(t,i,r,s);return t===Je(s)&&(o?Er(r,a)&&Pn(t,"set",i,r):Pn(t,"add",i,r)),l}}function Hf(n,e){const t=Ke(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&Pn(n,"delete",e,void 0),i}function Gf(n,e){const t=Reflect.has(n,e);return(!Qa(e)||!Vc.has(e))&&It(n,"has",e),t}function Vf(n){return It(n,"iterate",Oe(n)?"length":li),Reflect.ownKeys(n)}const Wc={get:Df,set:Bf,deleteProperty:Hf,has:Gf,ownKeys:Vf},kf={get:Nf,set(n,e){return!0},deleteProperty(n,e){return!0}},Wf=xt({},Wc,{get:If,set:zf}),so=n=>n,Rs=n=>Reflect.getPrototypeOf(n);function Br(n,e,t=!1,i=!1){n=n.__v_raw;const r=Je(n),s=Je(e);t||(e!==s&&It(r,"get",e),It(r,"get",s));const{has:a}=Rs(r),o=i?so:t?lo:yr;if(a.call(r,e))return o(n.get(e));if(a.call(r,s))return o(n.get(s));n!==r&&n.get(e)}function zr(n,e=!1){const t=this.__v_raw,i=Je(t),r=Je(n);return e||(n!==r&&It(i,"has",n),It(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Hr(n,e=!1){return n=n.__v_raw,!e&&It(Je(n),"iterate",li),Reflect.get(n,"size",n)}function Fo(n){n=Je(n);const e=Je(this);return Rs(e).has.call(e,n)||(e.add(n),Pn(e,"add",n,n)),this}function Oo(n,e){e=Je(e);const t=Je(this),{has:i,get:r}=Rs(t);let s=i.call(t,n);s||(n=Je(n),s=i.call(t,n));const a=r.call(t,n);return t.set(n,e),s?Er(e,a)&&Pn(t,"set",n,e):Pn(t,"add",n,e),this}function Bo(n){const e=Je(this),{has:t,get:i}=Rs(e);let r=t.call(e,n);r||(n=Je(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&Pn(e,"delete",n,void 0),s}function zo(){const n=Je(this),e=n.size!==0,t=n.clear();return e&&Pn(n,"clear",void 0,void 0),t}function Gr(n,e){return function(i,r){const s=this,a=s.__v_raw,o=Je(a),l=e?so:n?lo:yr;return!n&&It(o,"iterate",li),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Vr(n,e,t){return function(...i){const r=this.__v_raw,s=Je(r),a=ki(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?so:e?lo:yr;return!e&&It(s,"iterate",l?Pa:li),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Un(n){return function(...e){return n==="delete"?!1:this}}function Xf(){const n={get(s){return Br(this,s)},get size(){return Hr(this)},has:zr,add:Fo,set:Oo,delete:Bo,clear:zo,forEach:Gr(!1,!1)},e={get(s){return Br(this,s,!1,!0)},get size(){return Hr(this)},has:zr,add:Fo,set:Oo,delete:Bo,clear:zo,forEach:Gr(!1,!0)},t={get(s){return Br(this,s,!0)},get size(){return Hr(this,!0)},has(s){return zr.call(this,s,!0)},add:Un("add"),set:Un("set"),delete:Un("delete"),clear:Un("clear"),forEach:Gr(!0,!1)},i={get(s){return Br(this,s,!0,!0)},get size(){return Hr(this,!0)},has(s){return zr.call(this,s,!0)},add:Un("add"),set:Un("set"),delete:Un("delete"),clear:Un("clear"),forEach:Gr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Vr(s,!1,!1),t[s]=Vr(s,!0,!1),e[s]=Vr(s,!1,!0),i[s]=Vr(s,!0,!0)}),[n,t,e,i]}const[qf,Yf,jf,Kf]=Xf();function ao(n,e){const t=e?n?Kf:jf:n?Yf:qf;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Ke(t,r)&&r in i?t:i,r,s)}const $f={get:ao(!1,!1)},Zf={get:ao(!1,!0)},Jf={get:ao(!0,!1)},Xc=new WeakMap,qc=new WeakMap,Yc=new WeakMap,Qf=new WeakMap;function eh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function th(n){return n.__v_skip||!Object.isExtensible(n)?0:eh(gf(n))}function Cs(n){return Ki(n)?n:oo(n,!1,Wc,$f,Xc)}function nh(n){return oo(n,!1,Wf,Zf,qc)}function jc(n){return oo(n,!0,kf,Jf,Yc)}function oo(n,e,t,i,r){if(!nt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=th(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function Wi(n){return Ki(n)?Wi(n.__v_raw):!!(n&&n.__v_isReactive)}function Ki(n){return!!(n&&n.__v_isReadonly)}function vs(n){return!!(n&&n.__v_isShallow)}function Kc(n){return Wi(n)||Ki(n)}function Je(n){const e=n&&n.__v_raw;return e?Je(e):n}function $c(n){return gs(n,"__v_skip",!0),n}const yr=n=>nt(n)?Cs(n):n,lo=n=>nt(n)?jc(n):n;function Zc(n){Vn&&Zt&&(n=Je(n),Gc(n.dep||(n.dep=no())))}function Jc(n,e){n=Je(n);const t=n.dep;t&&La(t)}function yt(n){return!!(n&&n.__v_isRef===!0)}function Rt(n){return ih(n,!1)}function ih(n,e){return yt(n)?n:new rh(n,e)}class rh{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Je(e),this._value=t?e:yr(e)}get value(){return Zc(this),this._value}set value(e){const t=this.__v_isShallow||vs(e)||Ki(e);e=t?e:Je(e),Er(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:yr(e),Jc(this))}}function Ve(n){return yt(n)?n.value:n}const sh={get:(n,e,t)=>Ve(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return yt(r)&&!yt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Qc(n){return Wi(n)?n:new Proxy(n,sh)}class ah{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new io(e,()=>{this._dirty||(this._dirty=!0,Jc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=Je(this);return Zc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function oh(n,e,t=!1){let i,r;const s=We(n);return s?(i=n,r=nn):(i=n.get,r=n.set),new ah(i,r,s||!r,t)}function kn(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){Ps(s,e,t)}return r}function rn(n,e,t,i){if(We(n)){const s=kn(n,e,t,i);return s&&Dc(s)&&s.catch(a=>{Ps(a,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(rn(n[s],e,t,i));return r}function Ps(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){kn(l,null,10,[n,a,o]);return}}lh(n,t,r,i)}function lh(n,e,t,i=!0){console.error(n)}let br=!1,Ua=!1;const Et=[];let fn=0;const Xi=[];let An=null,si=0;const eu=Promise.resolve();let co=null;function ch(n){const e=co||eu;return n?e.then(this?n.bind(this):n):e}function uh(n){let e=fn+1,t=Et.length;for(;e<t;){const i=e+t>>>1;Tr(Et[i])<n?e=i+1:t=i}return e}function uo(n){(!Et.length||!Et.includes(n,br&&n.allowRecurse?fn+1:fn))&&(n.id==null?Et.push(n):Et.splice(uh(n.id),0,n),tu())}function tu(){!br&&!Ua&&(Ua=!0,co=eu.then(iu))}function fh(n){const e=Et.indexOf(n);e>fn&&Et.splice(e,1)}function hh(n){Oe(n)?Xi.push(...n):(!An||!An.includes(n,n.allowRecurse?si+1:si))&&Xi.push(n),tu()}function Ho(n,e=br?fn+1:0){for(;e<Et.length;e++){const t=Et[e];t&&t.pre&&(Et.splice(e,1),e--,t())}}function nu(n){if(Xi.length){const e=[...new Set(Xi)];if(Xi.length=0,An){An.push(...e);return}for(An=e,An.sort((t,i)=>Tr(t)-Tr(i)),si=0;si<An.length;si++)An[si]();An=null,si=0}}const Tr=n=>n.id==null?1/0:n.id,dh=(n,e)=>{const t=Tr(n)-Tr(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function iu(n){Ua=!1,br=!0,Et.sort(dh);const e=nn;try{for(fn=0;fn<Et.length;fn++){const t=Et[fn];t&&t.active!==!1&&kn(t,null,14)}}finally{fn=0,Et.length=0,nu(),br=!1,co=null,(Et.length||Xi.length)&&iu()}}function ph(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||et;let r=t;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:d}=i[u]||et;d&&(r=t.map(m=>ct(m)?m.trim():m)),f&&(r=t.map(Mf))}let o,l=i[o=Vs(e)]||i[o=Vs(mn(e))];!l&&s&&(l=i[o=Vs(nr(e))]),l&&rn(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,rn(c,n,6,r)}}function ru(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!We(n)){const l=c=>{const u=ru(c,e,!0);u&&(o=!0,xt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(nt(n)&&i.set(n,null),null):(Oe(s)?s.forEach(l=>a[l]=null):xt(a,s),nt(n)&&i.set(n,a),a)}function Ls(n,e){return!n||!bs(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ke(n,e[0].toLowerCase()+e.slice(1))||Ke(n,nr(e))||Ke(n,e))}let en=null,su=null;function xs(n){const e=en;return en=n,su=n&&n.type.__scopeId||null,e}function mh(n,e=en,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Zo(-1);const s=xs(e);let a;try{a=n(...r)}finally{xs(s),i._d&&Zo(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Ws(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:f,data:d,setupState:m,ctx:x,inheritAttrs:v}=n;let p,h;const P=xs(n);try{if(t.shapeFlag&4){const b=r||i;p=cn(u.call(b,b,f,s,m,d,x)),h=l}else{const b=e;p=cn(b.length>1?b(s,{attrs:l,slots:o,emit:c}):b(s,null)),h=e.props?l:_h(l)}}catch(b){Mr.length=0,Ps(b,n,1),p=dn(Ar)}let E=p;if(h&&v!==!1){const b=Object.keys(h),{shapeFlag:T}=E;b.length&&T&7&&(a&&b.some(Za)&&(h=gh(h,a)),E=$i(E,h))}return t.dirs&&(E=$i(E),E.dirs=E.dirs?E.dirs.concat(t.dirs):t.dirs),t.transition&&(E.transition=t.transition),p=E,xs(P),p}const _h=n=>{let e;for(const t in n)(t==="class"||t==="style"||bs(t))&&((e||(e={}))[t]=n[t]);return e},gh=(n,e)=>{const t={};for(const i in n)(!Za(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function vh(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Go(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(a[d]!==i[d]&&!Ls(c,d))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Go(i,a,c):!0:!!a;return!1}function Go(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Ls(t,s))return!0}return!1}function xh({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const Mh=n=>n.__isSuspense;function Sh(n,e){e&&e.pendingBranch?Oe(n)?e.effects.push(...n):e.effects.push(n):hh(n)}const kr={};function hs(n,e,t){return au(n,e,t)}function au(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:a}=et){var o;const l=Cf()===((o=vt)==null?void 0:o.scope)?vt:null;let c,u=!1,f=!1;if(yt(n)?(c=()=>n.value,u=vs(n)):Wi(n)?(c=()=>n,i=!0):Oe(n)?(f=!0,u=n.some(b=>Wi(b)||vs(b)),c=()=>n.map(b=>{if(yt(b))return b.value;if(Wi(b))return Hi(b);if(We(b))return kn(b,l,2)})):We(n)?e?c=()=>kn(n,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),rn(n,l,3,[m])}:c=nn,e&&i){const b=c;c=()=>Hi(b())}let d,m=b=>{d=P.onStop=()=>{kn(b,l,4)}},x;if(Cr)if(m=nn,e?t&&rn(e,l,3,[c(),f?[]:void 0,m]):c(),r==="sync"){const b=gd();x=b.__watcherHandles||(b.__watcherHandles=[])}else return nn;let v=f?new Array(n.length).fill(kr):kr;const p=()=>{if(P.active)if(e){const b=P.run();(i||u||(f?b.some((T,C)=>Er(T,v[C])):Er(b,v)))&&(d&&d(),rn(e,l,3,[b,v===kr?void 0:f&&v[0]===kr?[]:v,m]),v=b)}else P.run()};p.allowRecurse=!!e;let h;r==="sync"?h=p:r==="post"?h=()=>Ut(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),h=()=>uo(p));const P=new io(c,h);e?t?p():v=P.run():r==="post"?Ut(P.run.bind(P),l&&l.suspense):P.run();const E=()=>{P.stop(),l&&l.scope&&Ja(l.scope.effects,P)};return x&&x.push(E),E}function Eh(n,e,t){const i=this.proxy,r=ct(n)?n.includes(".")?ou(i,n):()=>i[n]:n.bind(i,i);let s;We(e)?s=e:(s=e.handler,t=e);const a=vt;Zi(this);const o=au(r,s.bind(i),t);return a?Zi(a):ci(),o}function ou(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Hi(n,e){if(!nt(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),yt(n))Hi(n.value,e);else if(Oe(n))for(let t=0;t<n.length;t++)Hi(n[t],e);else if(Uc(n)||ki(n))n.forEach(t=>{Hi(t,e)});else if(Nc(n))for(const t in n)Hi(n[t],e);return n}function Zn(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(ir(),rn(l,t,8,[n.el,o,n,e]),rr())}}const ds=n=>!!n.type.__asyncLoader,lu=n=>n.type.__isKeepAlive;function yh(n,e){cu(n,"a",e)}function bh(n,e){cu(n,"da",e)}function cu(n,e,t=vt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Us(e,i,t),t){let r=t.parent;for(;r&&r.parent;)lu(r.parent.vnode)&&Th(i,e,t,r),r=r.parent}}function Th(n,e,t,i){const r=Us(e,n,i,!0);fu(()=>{Ja(i[e],r)},t)}function Us(n,e,t=vt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;ir(),Zi(t);const o=rn(e,t,n,a);return ci(),rr(),o});return i?r.unshift(s):r.push(s),s}}const Ln=n=>(e,t=vt)=>(!Cr||n==="sp")&&Us(n,(...i)=>e(...i),t),Ah=Ln("bm"),uu=Ln("m"),wh=Ln("bu"),Rh=Ln("u"),Ch=Ln("bum"),fu=Ln("um"),Ph=Ln("sp"),Lh=Ln("rtg"),Uh=Ln("rtc");function Dh(n,e=vt){Us("ec",n,e)}const hu="components",du=Symbol.for("v-ndc");function Ih(n){return ct(n)?Nh(hu,n,!1)||n:n||du}function Nh(n,e,t=!0,i=!1){const r=en||vt;if(r){const s=r.type;if(n===hu){const o=pd(s,!1);if(o&&(o===e||o===mn(e)||o===ws(mn(e))))return s}const a=Vo(r[n]||s[n],e)||Vo(r.appContext[n],e);return!a&&i?s:a}}function Vo(n,e){return n&&(n[e]||n[mn(e)]||n[ws(mn(e))])}function Fh(n,e,t,i){let r;const s=t&&t[i];if(Oe(n)||ct(n)){r=new Array(n.length);for(let a=0,o=n.length;a<o;a++)r[a]=e(n[a],a,void 0,s&&s[a])}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s&&s[a])}else if(nt(n))if(n[Symbol.iterator])r=Array.from(n,(a,o)=>e(a,o,void 0,s&&s[o]));else{const a=Object.keys(n);r=new Array(a.length);for(let o=0,l=a.length;o<l;o++){const c=a[o];r[o]=e(n[c],c,o,s&&s[o])}}else r=[];return t&&(t[i]=r),r}const Da=n=>n?bu(n)?_o(n)||n.proxy:Da(n.parent):null,xr=xt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Da(n.parent),$root:n=>Da(n.root),$emit:n=>n.emit,$options:n=>fo(n),$forceUpdate:n=>n.f||(n.f=()=>uo(n.update)),$nextTick:n=>n.n||(n.n=ch.bind(n.proxy)),$watch:n=>Eh.bind(n)}),Xs=(n,e)=>n!==et&&!n.__isScriptSetup&&Ke(n,e),Oh={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Xs(i,e))return a[e]=1,i[e];if(r!==et&&Ke(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&Ke(c,e))return a[e]=3,s[e];if(t!==et&&Ke(t,e))return a[e]=4,t[e];Ia&&(a[e]=0)}}const u=xr[e];let f,d;if(u)return e==="$attrs"&&It(n,"get",e),u(n);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==et&&Ke(t,e))return a[e]=4,t[e];if(d=l.config.globalProperties,Ke(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Xs(r,e)?(r[e]=t,!0):i!==et&&Ke(i,e)?(i[e]=t,!0):Ke(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!t[a]||n!==et&&Ke(n,a)||Xs(e,a)||(o=s[0])&&Ke(o,a)||Ke(i,a)||Ke(xr,a)||Ke(r.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ke(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function ko(n){return Oe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ia=!0;function Bh(n){const e=fo(n),t=n.proxy,i=n.ctx;Ia=!1,e.beforeCreate&&Wo(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:x,activated:v,deactivated:p,beforeDestroy:h,beforeUnmount:P,destroyed:E,unmounted:b,render:T,renderTracked:C,renderTriggered:y,errorCaptured:z,serverPrefetch:S,expose:R,inheritAttrs:ae,components:re,directives:N,filters:W}=e;if(c&&zh(c,i,null),a)for(const V in a){const q=a[V];We(q)&&(i[V]=q.bind(t))}if(r){const V=r.call(t,t);nt(V)&&(n.data=Cs(V))}if(Ia=!0,s)for(const V in s){const q=s[V],de=We(q)?q.bind(t,t):We(q.get)?q.get.bind(t,t):nn,oe=!We(q)&&We(q.set)?q.set.bind(t):nn,G=Au({get:de,set:oe});Object.defineProperty(i,V,{enumerable:!0,configurable:!0,get:()=>G.value,set:Y=>G.value=Y})}if(o)for(const V in o)pu(o[V],i,t,V);if(l){const V=We(l)?l.call(t):l;Reflect.ownKeys(V).forEach(q=>{Xh(q,V[q])})}u&&Wo(u,n,"c");function J(V,q){Oe(q)?q.forEach(de=>V(de.bind(t))):q&&V(q.bind(t))}if(J(Ah,f),J(uu,d),J(wh,m),J(Rh,x),J(yh,v),J(bh,p),J(Dh,z),J(Uh,C),J(Lh,y),J(Ch,P),J(fu,b),J(Ph,S),Oe(R))if(R.length){const V=n.exposed||(n.exposed={});R.forEach(q=>{Object.defineProperty(V,q,{get:()=>t[q],set:de=>t[q]=de})})}else n.exposed||(n.exposed={});T&&n.render===nn&&(n.render=T),ae!=null&&(n.inheritAttrs=ae),re&&(n.components=re),N&&(n.directives=N)}function zh(n,e,t=nn){Oe(n)&&(n=Na(n));for(const i in n){const r=n[i];let s;nt(r)?"default"in r?s=ps(r.from||i,r.default,!0):s=ps(r.from||i):s=ps(r),yt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function Wo(n,e,t){rn(Oe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function pu(n,e,t,i){const r=i.includes(".")?ou(t,i):()=>t[i];if(ct(n)){const s=e[n];We(s)&&hs(r,s)}else if(We(n))hs(r,n.bind(t));else if(nt(n))if(Oe(n))n.forEach(s=>pu(s,e,t,i));else{const s=We(n.handler)?n.handler.bind(t):e[n.handler];We(s)&&hs(r,s,n)}}function fo(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Ms(l,c,a,!0)),Ms(l,e,a)),nt(e)&&s.set(e,l),l}function Ms(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Ms(n,s,t,!0),r&&r.forEach(a=>Ms(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=Hh[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const Hh={data:Xo,props:qo,emits:qo,methods:pr,computed:pr,beforeCreate:wt,created:wt,beforeMount:wt,mounted:wt,beforeUpdate:wt,updated:wt,beforeDestroy:wt,beforeUnmount:wt,destroyed:wt,unmounted:wt,activated:wt,deactivated:wt,errorCaptured:wt,serverPrefetch:wt,components:pr,directives:pr,watch:Vh,provide:Xo,inject:Gh};function Xo(n,e){return e?n?function(){return xt(We(n)?n.call(this,this):n,We(e)?e.call(this,this):e)}:e:n}function Gh(n,e){return pr(Na(n),Na(e))}function Na(n){if(Oe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function wt(n,e){return n?[...new Set([].concat(n,e))]:e}function pr(n,e){return n?xt(Object.create(null),n,e):e}function qo(n,e){return n?Oe(n)&&Oe(e)?[...new Set([...n,...e])]:xt(Object.create(null),ko(n),ko(e??{})):e}function Vh(n,e){if(!n)return e;if(!e)return n;const t=xt(Object.create(null),n);for(const i in e)t[i]=wt(n[i],e[i]);return t}function mu(){return{app:null,config:{isNativeTag:pf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kh=0;function Wh(n,e){return function(i,r=null){We(i)||(i=xt({},i)),r!=null&&!nt(r)&&(r=null);const s=mu(),a=new Set;let o=!1;const l=s.app={_uid:kh++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:vd,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&We(c.install)?(a.add(c),c.install(l,...u)):We(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!o){const d=dn(i,r);return d.appContext=s,u&&e?e(d,c):n(d,c,f),o=!0,l._container=c,c.__vue_app__=l,_o(d.component)||d.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){Ss=l;try{return c()}finally{Ss=null}}};return l}}let Ss=null;function Xh(n,e){if(vt){let t=vt.provides;const i=vt.parent&&vt.parent.provides;i===t&&(t=vt.provides=Object.create(i)),t[n]=e}}function ps(n,e,t=!1){const i=vt||en;if(i||Ss){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Ss._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&We(e)?e.call(i&&i.proxy):e}}function qh(n,e,t,i=!1){const r={},s={};gs(s,Is,1),n.propsDefaults=Object.create(null),_u(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:nh(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Yh(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=Je(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Ls(n.emitsOptions,d))continue;const m=e[d];if(l)if(Ke(s,d))m!==s[d]&&(s[d]=m,c=!0);else{const x=mn(d);r[x]=Fa(l,o,x,m,n,!1)}else m!==s[d]&&(s[d]=m,c=!0)}}}else{_u(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!Ke(e,f)&&((u=nr(f))===f||!Ke(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Fa(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!Ke(e,f))&&(delete s[f],c=!0)}c&&Pn(n,"set","$attrs")}function _u(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(fs(l))continue;const c=e[l];let u;r&&Ke(r,u=mn(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:Ls(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=Je(t),c=o||et;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Fa(r,l,f,c[f],n,!Ke(c,f))}}return a}function Fa(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=Ke(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&We(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(Zi(r),i=c[t]=l.call(null,e),ci())}else i=l}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===nr(t))&&(i=!0))}return i}function gu(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!We(n)){const u=f=>{l=!0;const[d,m]=gu(f,e,!0);xt(a,d),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return nt(n)&&i.set(n,Vi),Vi;if(Oe(s))for(let u=0;u<s.length;u++){const f=mn(s[u]);Yo(f)&&(a[f]=et)}else if(s)for(const u in s){const f=mn(u);if(Yo(f)){const d=s[u],m=a[f]=Oe(d)||We(d)?{type:d}:xt({},d);if(m){const x=$o(Boolean,m.type),v=$o(String,m.type);m[0]=x>-1,m[1]=v<0||x<v,(x>-1||Ke(m,"default"))&&o.push(f)}}}const c=[a,o];return nt(n)&&i.set(n,c),c}function Yo(n){return n[0]!=="$"}function jo(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function Ko(n,e){return jo(n)===jo(e)}function $o(n,e){return Oe(e)?e.findIndex(t=>Ko(t,n)):We(e)&&Ko(e,n)?0:-1}const vu=n=>n[0]==="_"||n==="$stable",ho=n=>Oe(n)?n.map(cn):[cn(n)],jh=(n,e,t)=>{if(e._n)return e;const i=mh((...r)=>ho(e(...r)),t);return i._c=!1,i},xu=(n,e,t)=>{const i=n._ctx;for(const r in n){if(vu(r))continue;const s=n[r];if(We(s))e[r]=jh(r,s,i);else if(s!=null){const a=ho(s);e[r]=()=>a}}},Mu=(n,e)=>{const t=ho(e);n.slots.default=()=>t},Kh=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=Je(e),gs(e,"_",t)):xu(e,n.slots={})}else n.slots={},e&&Mu(n,e);gs(n.slots,Is,1)},$h=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=et;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:(xt(r,e),!t&&o===1&&delete r._):(s=!e.$stable,xu(e,r)),a=e}else e&&(Mu(n,e),a={default:1});if(s)for(const o in r)!vu(o)&&!(o in a)&&delete r[o]};function Oa(n,e,t,i,r=!1){if(Oe(n)){n.forEach((d,m)=>Oa(d,e&&(Oe(e)?e[m]:e),t,i,r));return}if(ds(i)&&!r)return;const s=i.shapeFlag&4?_o(i.component)||i.component.proxy:i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===et?o.refs={}:o.refs,f=o.setupState;if(c!=null&&c!==l&&(ct(c)?(u[c]=null,Ke(f,c)&&(f[c]=null)):yt(c)&&(c.value=null)),We(l))kn(l,o,12,[a,u]);else{const d=ct(l),m=yt(l);if(d||m){const x=()=>{if(n.f){const v=d?Ke(f,l)?f[l]:u[l]:l.value;r?Oe(v)&&Ja(v,s):Oe(v)?v.includes(s)||v.push(s):d?(u[l]=[s],Ke(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else d?(u[l]=a,Ke(f,l)&&(f[l]=a)):m&&(l.value=a,n.k&&(u[n.k]=a))};a?(x.id=-1,Ut(x,t)):x()}}}const Ut=Sh;function Zh(n){return Jh(n)}function Jh(n,e){const t=wa();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=nn,insertStaticContent:x}=n,v=(_,L,D,k=null,O=null,ce=null,ue=!1,Z=null,le=!!L.dynamicChildren)=>{if(_===L)return;_&&!or(_,L)&&(k=$(_),Y(_,O,ce,!0),_=null),L.patchFlag===-2&&(le=!1,L.dynamicChildren=null);const{type:se,ref:Ae,shapeFlag:M}=L;switch(se){case Ds:p(_,L,D,k);break;case Ar:h(_,L,D,k);break;case qs:_==null&&P(L,D,k,ue);break;case Gt:re(_,L,D,k,O,ce,ue,Z,le);break;default:M&1?T(_,L,D,k,O,ce,ue,Z,le):M&6?N(_,L,D,k,O,ce,ue,Z,le):(M&64||M&128)&&se.process(_,L,D,k,O,ce,ue,Z,le,me)}Ae!=null&&O&&Oa(Ae,_&&_.ref,ce,L||_,!L)},p=(_,L,D,k)=>{if(_==null)i(L.el=o(L.children),D,k);else{const O=L.el=_.el;L.children!==_.children&&c(O,L.children)}},h=(_,L,D,k)=>{_==null?i(L.el=l(L.children||""),D,k):L.el=_.el},P=(_,L,D,k)=>{[_.el,_.anchor]=x(_.children,L,D,k,_.el,_.anchor)},E=({el:_,anchor:L},D,k)=>{let O;for(;_&&_!==L;)O=d(_),i(_,D,k),_=O;i(L,D,k)},b=({el:_,anchor:L})=>{let D;for(;_&&_!==L;)D=d(_),r(_),_=D;r(L)},T=(_,L,D,k,O,ce,ue,Z,le)=>{ue=ue||L.type==="svg",_==null?C(L,D,k,O,ce,ue,Z,le):S(_,L,O,ce,ue,Z,le)},C=(_,L,D,k,O,ce,ue,Z)=>{let le,se;const{type:Ae,props:M,shapeFlag:g,transition:I,dirs:Q}=_;if(le=_.el=a(_.type,ce,M&&M.is,M),g&8?u(le,_.children):g&16&&z(_.children,le,null,k,O,ce&&Ae!=="foreignObject",ue,Z),Q&&Zn(_,null,k,"created"),y(le,_,_.scopeId,ue,k),M){for(const w in M)w!=="value"&&!fs(w)&&s(le,w,null,M[w],ce,_.children,k,O,Ce);"value"in M&&s(le,"value",null,M.value),(se=M.onVnodeBeforeMount)&&ln(se,k,_)}Q&&Zn(_,null,k,"beforeMount");const ie=(!O||O&&!O.pendingBranch)&&I&&!I.persisted;ie&&I.beforeEnter(le),i(le,L,D),((se=M&&M.onVnodeMounted)||ie||Q)&&Ut(()=>{se&&ln(se,k,_),ie&&I.enter(le),Q&&Zn(_,null,k,"mounted")},O)},y=(_,L,D,k,O)=>{if(D&&m(_,D),k)for(let ce=0;ce<k.length;ce++)m(_,k[ce]);if(O){let ce=O.subTree;if(L===ce){const ue=O.vnode;y(_,ue,ue.scopeId,ue.slotScopeIds,O.parent)}}},z=(_,L,D,k,O,ce,ue,Z,le=0)=>{for(let se=le;se<_.length;se++){const Ae=_[se]=Z?On(_[se]):cn(_[se]);v(null,Ae,L,D,k,O,ce,ue,Z)}},S=(_,L,D,k,O,ce,ue)=>{const Z=L.el=_.el;let{patchFlag:le,dynamicChildren:se,dirs:Ae}=L;le|=_.patchFlag&16;const M=_.props||et,g=L.props||et;let I;D&&Jn(D,!1),(I=g.onVnodeBeforeUpdate)&&ln(I,D,L,_),Ae&&Zn(L,_,D,"beforeUpdate"),D&&Jn(D,!0);const Q=O&&L.type!=="foreignObject";if(se?R(_.dynamicChildren,se,Z,D,k,Q,ce):ue||q(_,L,Z,null,D,k,Q,ce,!1),le>0){if(le&16)ae(Z,L,M,g,D,k,O);else if(le&2&&M.class!==g.class&&s(Z,"class",null,g.class,O),le&4&&s(Z,"style",M.style,g.style,O),le&8){const ie=L.dynamicProps;for(let w=0;w<ie.length;w++){const ee=ie[w],he=M[ee],X=g[ee];(X!==he||ee==="value")&&s(Z,ee,he,X,O,_.children,D,k,Ce)}}le&1&&_.children!==L.children&&u(Z,L.children)}else!ue&&se==null&&ae(Z,L,M,g,D,k,O);((I=g.onVnodeUpdated)||Ae)&&Ut(()=>{I&&ln(I,D,L,_),Ae&&Zn(L,_,D,"updated")},k)},R=(_,L,D,k,O,ce,ue)=>{for(let Z=0;Z<L.length;Z++){const le=_[Z],se=L[Z],Ae=le.el&&(le.type===Gt||!or(le,se)||le.shapeFlag&70)?f(le.el):D;v(le,se,Ae,null,k,O,ce,ue,!0)}},ae=(_,L,D,k,O,ce,ue)=>{if(D!==k){if(D!==et)for(const Z in D)!fs(Z)&&!(Z in k)&&s(_,Z,D[Z],null,ue,L.children,O,ce,Ce);for(const Z in k){if(fs(Z))continue;const le=k[Z],se=D[Z];le!==se&&Z!=="value"&&s(_,Z,se,le,ue,L.children,O,ce,Ce)}"value"in k&&s(_,"value",D.value,k.value)}},re=(_,L,D,k,O,ce,ue,Z,le)=>{const se=L.el=_?_.el:o(""),Ae=L.anchor=_?_.anchor:o("");let{patchFlag:M,dynamicChildren:g,slotScopeIds:I}=L;I&&(Z=Z?Z.concat(I):I),_==null?(i(se,D,k),i(Ae,D,k),z(L.children,D,Ae,O,ce,ue,Z,le)):M>0&&M&64&&g&&_.dynamicChildren?(R(_.dynamicChildren,g,D,O,ce,ue,Z),(L.key!=null||O&&L===O.subTree)&&Su(_,L,!0)):q(_,L,D,Ae,O,ce,ue,Z,le)},N=(_,L,D,k,O,ce,ue,Z,le)=>{L.slotScopeIds=Z,_==null?L.shapeFlag&512?O.ctx.activate(L,D,k,ue,le):W(L,D,k,O,ce,ue,le):j(_,L,le)},W=(_,L,D,k,O,ce,ue)=>{const Z=_.component=cd(_,k,O);if(lu(_)&&(Z.ctx.renderer=me),ud(Z),Z.asyncDep){if(O&&O.registerDep(Z,J),!_.el){const le=Z.subTree=dn(Ar);h(null,le,L,D)}return}J(Z,_,L,D,O,ce,ue)},j=(_,L,D)=>{const k=L.component=_.component;if(vh(_,L,D))if(k.asyncDep&&!k.asyncResolved){V(k,L,D);return}else k.next=L,fh(k.update),k.update();else L.el=_.el,k.vnode=L},J=(_,L,D,k,O,ce,ue)=>{const Z=()=>{if(_.isMounted){let{next:Ae,bu:M,u:g,parent:I,vnode:Q}=_,ie=Ae,w;Jn(_,!1),Ae?(Ae.el=Q.el,V(_,Ae,ue)):Ae=Q,M&&ks(M),(w=Ae.props&&Ae.props.onVnodeBeforeUpdate)&&ln(w,I,Ae,Q),Jn(_,!0);const ee=Ws(_),he=_.subTree;_.subTree=ee,v(he,ee,f(he.el),$(he),_,O,ce),Ae.el=ee.el,ie===null&&xh(_,ee.el),g&&Ut(g,O),(w=Ae.props&&Ae.props.onVnodeUpdated)&&Ut(()=>ln(w,I,Ae,Q),O)}else{let Ae;const{el:M,props:g}=L,{bm:I,m:Q,parent:ie}=_,w=ds(L);if(Jn(_,!1),I&&ks(I),!w&&(Ae=g&&g.onVnodeBeforeMount)&&ln(Ae,ie,L),Jn(_,!0),M&&Ee){const ee=()=>{_.subTree=Ws(_),Ee(M,_.subTree,_,O,null)};w?L.type.__asyncLoader().then(()=>!_.isUnmounted&&ee()):ee()}else{const ee=_.subTree=Ws(_);v(null,ee,D,k,_,O,ce),L.el=ee.el}if(Q&&Ut(Q,O),!w&&(Ae=g&&g.onVnodeMounted)){const ee=L;Ut(()=>ln(Ae,ie,ee),O)}(L.shapeFlag&256||ie&&ds(ie.vnode)&&ie.vnode.shapeFlag&256)&&_.a&&Ut(_.a,O),_.isMounted=!0,L=D=k=null}},le=_.effect=new io(Z,()=>uo(se),_.scope),se=_.update=()=>le.run();se.id=_.uid,Jn(_,!0),se()},V=(_,L,D)=>{L.component=_;const k=_.vnode.props;_.vnode=L,_.next=null,Yh(_,L.props,k,D),$h(_,L.children,D),ir(),Ho(),rr()},q=(_,L,D,k,O,ce,ue,Z,le=!1)=>{const se=_&&_.children,Ae=_?_.shapeFlag:0,M=L.children,{patchFlag:g,shapeFlag:I}=L;if(g>0){if(g&128){oe(se,M,D,k,O,ce,ue,Z,le);return}else if(g&256){de(se,M,D,k,O,ce,ue,Z,le);return}}I&8?(Ae&16&&Ce(se,O,ce),M!==se&&u(D,M)):Ae&16?I&16?oe(se,M,D,k,O,ce,ue,Z,le):Ce(se,O,ce,!0):(Ae&8&&u(D,""),I&16&&z(M,D,k,O,ce,ue,Z,le))},de=(_,L,D,k,O,ce,ue,Z,le)=>{_=_||Vi,L=L||Vi;const se=_.length,Ae=L.length,M=Math.min(se,Ae);let g;for(g=0;g<M;g++){const I=L[g]=le?On(L[g]):cn(L[g]);v(_[g],I,D,null,O,ce,ue,Z,le)}se>Ae?Ce(_,O,ce,!0,!1,M):z(L,D,k,O,ce,ue,Z,le,M)},oe=(_,L,D,k,O,ce,ue,Z,le)=>{let se=0;const Ae=L.length;let M=_.length-1,g=Ae-1;for(;se<=M&&se<=g;){const I=_[se],Q=L[se]=le?On(L[se]):cn(L[se]);if(or(I,Q))v(I,Q,D,null,O,ce,ue,Z,le);else break;se++}for(;se<=M&&se<=g;){const I=_[M],Q=L[g]=le?On(L[g]):cn(L[g]);if(or(I,Q))v(I,Q,D,null,O,ce,ue,Z,le);else break;M--,g--}if(se>M){if(se<=g){const I=g+1,Q=I<Ae?L[I].el:k;for(;se<=g;)v(null,L[se]=le?On(L[se]):cn(L[se]),D,Q,O,ce,ue,Z,le),se++}}else if(se>g)for(;se<=M;)Y(_[se],O,ce,!0),se++;else{const I=se,Q=se,ie=new Map;for(se=Q;se<=g;se++){const ye=L[se]=le?On(L[se]):cn(L[se]);ye.key!=null&&ie.set(ye.key,se)}let w,ee=0;const he=g-Q+1;let X=!1,Re=0;const Le=new Array(he);for(se=0;se<he;se++)Le[se]=0;for(se=I;se<=M;se++){const ye=_[se];if(ee>=he){Y(ye,O,ce,!0);continue}let be;if(ye.key!=null)be=ie.get(ye.key);else for(w=Q;w<=g;w++)if(Le[w-Q]===0&&or(ye,L[w])){be=w;break}be===void 0?Y(ye,O,ce,!0):(Le[be-Q]=se+1,be>=Re?Re=be:X=!0,v(ye,L[be],D,null,O,ce,ue,Z,le),ee++)}const Ue=X?Qh(Le):Vi;for(w=Ue.length-1,se=he-1;se>=0;se--){const ye=Q+se,be=L[ye],De=ye+1<Ae?L[ye+1].el:k;Le[se]===0?v(null,be,D,De,O,ce,ue,Z,le):X&&(w<0||se!==Ue[w]?G(be,D,De,2):w--)}}},G=(_,L,D,k,O=null)=>{const{el:ce,type:ue,transition:Z,children:le,shapeFlag:se}=_;if(se&6){G(_.component.subTree,L,D,k);return}if(se&128){_.suspense.move(L,D,k);return}if(se&64){ue.move(_,L,D,me);return}if(ue===Gt){i(ce,L,D);for(let M=0;M<le.length;M++)G(le[M],L,D,k);i(_.anchor,L,D);return}if(ue===qs){E(_,L,D);return}if(k!==2&&se&1&&Z)if(k===0)Z.beforeEnter(ce),i(ce,L,D),Ut(()=>Z.enter(ce),O);else{const{leave:M,delayLeave:g,afterLeave:I}=Z,Q=()=>i(ce,L,D),ie=()=>{M(ce,()=>{Q(),I&&I()})};g?g(ce,Q,ie):ie()}else i(ce,L,D)},Y=(_,L,D,k=!1,O=!1)=>{const{type:ce,props:ue,ref:Z,children:le,dynamicChildren:se,shapeFlag:Ae,patchFlag:M,dirs:g}=_;if(Z!=null&&Oa(Z,null,D,_,!0),Ae&256){L.ctx.deactivate(_);return}const I=Ae&1&&g,Q=!ds(_);let ie;if(Q&&(ie=ue&&ue.onVnodeBeforeUnmount)&&ln(ie,L,_),Ae&6)Se(_.component,D,k);else{if(Ae&128){_.suspense.unmount(D,k);return}I&&Zn(_,null,L,"beforeUnmount"),Ae&64?_.type.remove(_,L,D,O,me,k):se&&(ce!==Gt||M>0&&M&64)?Ce(se,L,D,!1,!0):(ce===Gt&&M&384||!O&&Ae&16)&&Ce(le,L,D),k&&ve(_)}(Q&&(ie=ue&&ue.onVnodeUnmounted)||I)&&Ut(()=>{ie&&ln(ie,L,_),I&&Zn(_,null,L,"unmounted")},D)},ve=_=>{const{type:L,el:D,anchor:k,transition:O}=_;if(L===Gt){xe(D,k);return}if(L===qs){b(_);return}const ce=()=>{r(D),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(_.shapeFlag&1&&O&&!O.persisted){const{leave:ue,delayLeave:Z}=O,le=()=>ue(D,ce);Z?Z(_.el,ce,le):le()}else ce()},xe=(_,L)=>{let D;for(;_!==L;)D=d(_),r(_),_=D;r(L)},Se=(_,L,D)=>{const{bum:k,scope:O,update:ce,subTree:ue,um:Z}=_;k&&ks(k),O.stop(),ce&&(ce.active=!1,Y(ue,_,L,D)),Z&&Ut(Z,L),Ut(()=>{_.isUnmounted=!0},L),L&&L.pendingBranch&&!L.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===L.pendingId&&(L.deps--,L.deps===0&&L.resolve())},Ce=(_,L,D,k=!1,O=!1,ce=0)=>{for(let ue=ce;ue<_.length;ue++)Y(_[ue],L,D,k,O)},$=_=>_.shapeFlag&6?$(_.component.subTree):_.shapeFlag&128?_.suspense.next():d(_.anchor||_.el),pe=(_,L,D)=>{_==null?L._vnode&&Y(L._vnode,null,null,!0):v(L._vnode||null,_,L,null,null,null,D),Ho(),nu(),L._vnode=_},me={p:v,um:Y,m:G,r:ve,mt:W,mc:z,pc:q,pbc:R,n:$,o:n};let fe,Ee;return e&&([fe,Ee]=e(me)),{render:pe,hydrate:fe,createApp:Wh(pe,fe)}}function Jn({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Su(n,e,t=!1){const i=n.children,r=e.children;if(Oe(i)&&Oe(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=On(r[s]),o.el=a.el),t||Su(a,o)),o.type===Ds&&(o.el=a.el)}}function Qh(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}const ed=n=>n.__isTeleport,Gt=Symbol.for("v-fgt"),Ds=Symbol.for("v-txt"),Ar=Symbol.for("v-cmt"),qs=Symbol.for("v-stc"),Mr=[];let tn=null;function Bn(n=!1){Mr.push(tn=n?null:[])}function td(){Mr.pop(),tn=Mr[Mr.length-1]||null}let wr=1;function Zo(n){wr+=n}function Eu(n){return n.dynamicChildren=wr>0?tn||Vi:null,td(),wr>0&&tn&&tn.push(n),n}function Rr(n,e,t,i,r,s){return Eu(_e(n,e,t,i,r,s,!0))}function Ba(n,e,t,i,r){return Eu(dn(n,e,t,i,r,!0))}function nd(n){return n?n.__v_isVNode===!0:!1}function or(n,e){return n.type===e.type&&n.key===e.key}const Is="__vInternal",yu=({key:n})=>n??null,ms=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?ct(n)||yt(n)||We(n)?{i:en,r:n,k:e,f:!!t}:n:null);function _e(n,e=null,t=null,i=0,r=null,s=n===Gt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&yu(e),ref:e&&ms(e),scopeId:su,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:en};return o?(po(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=ct(t)?8:16),wr>0&&!a&&tn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&tn.push(l),l}const dn=id;function id(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===du)&&(n=Ar),nd(n)){const o=$i(n,e,!0);return t&&po(o,t),wr>0&&!s&&tn&&(o.shapeFlag&6?tn[tn.indexOf(n)]=o:tn.push(o)),o.patchFlag|=-2,o}if(md(n)&&(n=n.__vccOpts),e){e=rd(e);let{class:o,style:l}=e;o&&!ct(o)&&(e.class=ji(o)),nt(l)&&(Kc(l)&&!Oe(l)&&(l=xt({},l)),e.style=to(l))}const a=ct(n)?1:Mh(n)?128:ed(n)?64:nt(n)?4:We(n)?2:0;return _e(n,e,t,i,r,a,s,!0)}function rd(n){return n?Kc(n)||Is in n?xt({},n):n:null}function $i(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:a}=n,o=e?ad(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&yu(o),ref:e&&e.ref?t&&r?Oe(r)?r.concat(ms(e)):[r,ms(e)]:ms(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Gt?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&$i(n.ssContent),ssFallback:n.ssFallback&&$i(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function sd(n=" ",e=0){return dn(Ds,null,n,e)}function cn(n){return n==null||typeof n=="boolean"?dn(Ar):Oe(n)?dn(Gt,null,n.slice()):typeof n=="object"?On(n):dn(Ds,null,String(n))}function On(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:$i(n)}function po(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Oe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),po(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(Is in e)?e._ctx=en:r===3&&en&&(en.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else We(e)?(e={default:e,_ctx:en},t=32):(e=String(e),i&64?(t=16,e=[sd(e)]):t=8);n.children=e,n.shapeFlag|=t}function ad(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=ji([e.class,i.class]));else if(r==="style")e.style=to([e.style,i.style]);else if(bs(r)){const s=e[r],a=i[r];a&&s!==a&&!(Oe(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function ln(n,e,t,i=null){rn(n,e,7,[t,i])}const od=mu();let ld=0;function cd(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||od,s={uid:ld++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new wf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gu(i,r),emitsOptions:ru(i,r),emit:null,emitted:null,propsDefaults:et,inheritAttrs:i.inheritAttrs,ctx:et,data:et,props:et,attrs:et,slots:et,refs:et,setupState:et,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=ph.bind(null,s),n.ce&&n.ce(s),s}let vt=null,mo,vi,Jo="__VUE_INSTANCE_SETTERS__";(vi=wa()[Jo])||(vi=wa()[Jo]=[]),vi.push(n=>vt=n),mo=n=>{vi.length>1?vi.forEach(e=>e(n)):vi[0](n)};const Zi=n=>{mo(n),n.scope.on()},ci=()=>{vt&&vt.scope.off(),mo(null)};function bu(n){return n.vnode.shapeFlag&4}let Cr=!1;function ud(n,e=!1){Cr=e;const{props:t,children:i}=n.vnode,r=bu(n);qh(n,t,r,e),Kh(n,i);const s=r?fd(n,e):void 0;return Cr=!1,s}function fd(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=$c(new Proxy(n.ctx,Oh));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?dd(n):null;Zi(n),ir();const s=kn(i,n,0,[n.props,r]);if(rr(),ci(),Dc(s)){if(s.then(ci,ci),e)return s.then(a=>{Qo(n,a,e)}).catch(a=>{Ps(a,n,0)});n.asyncDep=s}else Qo(n,s,e)}else Tu(n,e)}function Qo(n,e,t){We(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:nt(e)&&(n.setupState=Qc(e)),Tu(n,t)}let el;function Tu(n,e,t){const i=n.type;if(!n.render){if(!e&&el&&!i.render){const r=i.template||fo(n).template;if(r){const{isCustomElement:s,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=xt(xt({isCustomElement:s,delimiters:o},a),l);i.render=el(r,c)}}n.render=i.render||nn}Zi(n),ir(),Bh(n),rr(),ci()}function hd(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return It(n,"get","$attrs"),e[t]}}))}function dd(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return hd(n)},slots:n.slots,emit:n.emit,expose:e}}function _o(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Qc($c(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in xr)return xr[t](n)},has(e,t){return t in e||t in xr}}))}function pd(n,e=!0){return We(n)?n.displayName||n.name:n.name||e&&n.__name}function md(n){return We(n)&&"__vccOpts"in n}const Au=(n,e)=>oh(n,e,Cr),_d=Symbol.for("v-scx"),gd=()=>ps(_d),vd="3.3.4",xd="http://www.w3.org/2000/svg",ai=typeof document<"u"?document:null,tl=ai&&ai.createElement("template"),Md={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?ai.createElementNS(xd,n):ai.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>ai.createTextNode(n),createComment:n=>ai.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ai.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{tl.innerHTML=i?`<svg>${n}</svg>`:n;const o=tl.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Sd(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function Ed(n,e,t){const i=n.style,r=ct(t);if(t&&!r){if(e&&!ct(e))for(const s in e)t[s]==null&&za(i,s,"");for(const s in t)za(i,s,t[s])}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const nl=/\s*!important$/;function za(n,e,t){if(Oe(t))t.forEach(i=>za(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=yd(n,e);nl.test(t)?n.setProperty(nr(i),t.replace(nl,""),"important"):n[i]=t}}const il=["Webkit","Moz","ms"],Ys={};function yd(n,e){const t=Ys[e];if(t)return t;let i=mn(e);if(i!=="filter"&&i in n)return Ys[e]=i;i=ws(i);for(let r=0;r<il.length;r++){const s=il[r]+i;if(s in n)return Ys[e]=s}return e}const rl="http://www.w3.org/1999/xlink";function bd(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(rl,e.slice(6,e.length)):n.setAttributeNS(rl,e,t);else{const s=Af(e);t==null||s&&!Fc(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function Td(n,e,t,i,r,s,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,r,s),n[e]=t??"";return}const o=n.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){n._value=t;const c=o==="OPTION"?n.getAttribute("value"):n.value,u=t??"";c!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=Fc(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function Ad(n,e,t,i){n.addEventListener(e,t,i)}function wd(n,e,t,i){n.removeEventListener(e,t,i)}function Rd(n,e,t,i,r=null){const s=n._vei||(n._vei={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=Cd(e);if(i){const c=s[e]=Ud(i,r);Ad(n,o,c,l)}else a&&(wd(n,o,a,l),s[e]=void 0)}}const sl=/(?:Once|Passive|Capture)$/;function Cd(n){let e;if(sl.test(n)){e={};let i;for(;i=n.match(sl);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):nr(n.slice(2)),e]}let js=0;const Pd=Promise.resolve(),Ld=()=>js||(Pd.then(()=>js=0),js=Date.now());function Ud(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;rn(Dd(i,t.value),e,5,[i])};return t.value=n,t.attached=Ld(),t}function Dd(n,e){if(Oe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const al=/^on[a-z]/,Id=(n,e,t,i,r=!1,s,a,o,l)=>{e==="class"?Sd(n,i,r):e==="style"?Ed(n,t,i):bs(e)?Za(e)||Rd(n,e,t,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Nd(n,e,i,r))?Td(n,e,i,s,a,o,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),bd(n,e,i,r))};function Nd(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&al.test(e)&&We(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||al.test(e)&&ct(t)?!1:e in n}const Fd=["ctrl","shift","alt","meta"],Od={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Fd.some(t=>n[`${t}Key`]&&!e.includes(t))},lr=(n,e)=>(t,...i)=>{for(let r=0;r<e.length;r++){const s=Od[e[r]];if(s&&s(t,e))return}return n(t,...i)},Bd=xt({patchProp:Id},Md);let ol;function zd(){return ol||(ol=Zh(Bd))}const Hd=(...n)=>{const e=zd().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Gd(i);if(!r)return;const s=e._component;!We(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function Gd(n){return ct(n)?document.querySelector(n):n}const Vd="/crepe-maker/assets/to-dd8647e4.png";const kd=_e("svg",{class:"p-2 w-32",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 511.81 130"},[_e("defs",null,[_e("linearGradient",{id:"bdad1a26-5d46-4c81-b4c8-0983968b0442",x1:"29.75",y1:"11.15",x2:"135.83",y2:"54.06",gradientUnits:"userSpaceOnUse"},[_e("stop",{offset:"0","stop-color":"#f9bb12"}),_e("stop",{offset:"0.5","stop-color":"#00a19a"}),_e("stop",{offset:"0.7","stop-color":"#0da1b8"}),_e("stop",{offset:"1","stop-color":"#24a1eb"})]),_e("linearGradient",{id:"e834f88c-69cb-427b-ae2f-421021ab1512",x1:"9.3",y1:"61.7",x2:"115.38",y2:"104.61","xlink:href":"#bdad1a26-5d46-4c81-b4c8-0983968b0442"}),_e("linearGradient",{id:"f9c97884-f414-4f9d-b979-f86a24977a09",x1:"25.14",y1:"22.53",x2:"131.22",y2:"65.44","xlink:href":"#bdad1a26-5d46-4c81-b4c8-0983968b0442"}),_e("linearGradient",{id:"e752a0e8-bca1-4546-a8ca-4d6d675a9054",x1:"2.01",y1:"79.72",x2:"108.09",y2:"122.63","xlink:href":"#bdad1a26-5d46-4c81-b4c8-0983968b0442"}),_e("linearGradient",{id:"f6775863-44eb-4a4d-af35-91b6d16ea345",x1:"12.81",y1:"53.02",x2:"118.89",y2:"95.93","xlink:href":"#bdad1a26-5d46-4c81-b4c8-0983968b0442"}),_e("linearGradient",{id:"e3932fc9-ae63-4bd9-95aa-e4c4c2e87dbb",x1:"-1.49",y1:"88.38",x2:"104.59",y2:"131.29","xlink:href":"#bdad1a26-5d46-4c81-b4c8-0983968b0442"}),_e("linearGradient",{id:"a3e511f2-8512-4b7b-9256-2335d6a75612",x1:"23.72",y1:"26.06",x2:"129.8",y2:"68.97","xlink:href":"#bdad1a26-5d46-4c81-b4c8-0983968b0442"}),_e("linearGradient",{id:"b4748a6d-a663-4d5d-ab03-cad696a0a732",x1:"-3.51",y1:"93.37",x2:"102.57",y2:"136.27","xlink:href":"#bdad1a26-5d46-4c81-b4c8-0983968b0442"}),_e("linearGradient",{id:"a00ceedc-a37a-4883-84e1-1f795ce59572",x1:"9.62",y1:"60.9",x2:"115.7",y2:"103.81","xlink:href":"#bdad1a26-5d46-4c81-b4c8-0983968b0442"}),_e("linearGradient",{id:"f98eab8f-02b6-4b84-a4d3-951dd01fecef",x1:"2.51",y1:"78.48",x2:"108.59",y2:"121.39","xlink:href":"#bdad1a26-5d46-4c81-b4c8-0983968b0442"})]),_e("g",{id:"eca93773-d953-45f9-a081-d0c230c017a2","data-name":"Calque 2"},[_e("g",{id:"baf28447-d6f6-4c9f-ba4c-15c0c0ac604a","data-name":"Calque 1"},[_e("polygon",{class:"e3accb8a-14f1-4370-b656-d7874a6d5d7d",points:"197.36 9.32 155.64 9.32 155.64 17.5 172.41 17.5 172.41 59.4 180.59 59.4 180.59 17.5 197.36 17.5 197.36 9.32"}),_e("polygon",{class:"e3accb8a-14f1-4370-b656-d7874a6d5d7d",points:"366.83 8.41 342.13 59.4 351.06 59.4 366.81 26.82 382.57 59.4 391.48 59.4 366.83 8.41"}),_e("polygon",{class:"e3accb8a-14f1-4370-b656-d7874a6d5d7d",points:"241.47 17.39 241.47 9.28 205.66 9.28 205.66 10.68 205.66 17.39 205.66 30.61 205.66 38.72 205.66 51.28 205.66 58.98 205.66 59.4 241.47 59.4 241.47 51.28 213.83 51.28 213.83 38.72 236.35 38.72 236.35 30.61 213.83 30.61 213.83 17.39 241.47 17.39"}),_e("path",{class:"e3accb8a-14f1-4370-b656-d7874a6d5d7d",d:"M336.19,25.71A16.43,16.43,0,0,0,319.84,9.32h-23V59.4h8.15V17.5h15.27c3.94,0,7.85,3.87,7.85,8.2a8.15,8.15,0,0,1-7.85,8.4h-7.57L327,59.4h8.93L326.2,41.31A17,17,0,0,0,336.19,25.71Z"}),_e("path",{class:"ffea8a58-cc19-4cb0-840a-e7da1eb1ac15",d:"M197.68,119.09H189.8L166.54,85.81v33.28h-7.82V72.31h7.89l23.32,33.28V72.31h7.75Z"}),_e("path",{class:"ffea8a58-cc19-4cb0-840a-e7da1eb1ac15",d:"M208.3,103.45V71.64h7.82v31.81c.4,5.42,4.74,7.82,9.69,7.82s9.76-2.6,9.76-7.82V71.64h7.81v31.81c0,10-7.61,15.64-17.57,15.64C216.18,119.09,208.3,113.08,208.3,103.45Z"}),_e("path",{class:"ffea8a58-cc19-4cb0-840a-e7da1eb1ac15",d:"M304.59,119.09h-7.82V90.35l-13.43,28.74H276l-14.3-29.34v29.34h-7.82V72.24h7.95l17.78,36.43,17-36.43h7.95Z"}),_e("path",{class:"ffea8a58-cc19-4cb0-840a-e7da1eb1ac15",d:"M323,80.13v11.7h19.45v7.75H323v11.69h23.39v7.82H315.14V72.31h31.21v7.82Z"}),_e("path",{class:"ffea8a58-cc19-4cb0-840a-e7da1eb1ac15",d:"M403.28,72.31h7.82v46.78h-7.82Z"}),_e("path",{class:"ffea8a58-cc19-4cb0-840a-e7da1eb1ac15",d:"M455.67,106.73l5.48,5.54a23.24,23.24,0,0,1-16.51,6.82c-12.9,0-23.46-9.36-23.46-24.06,0-14.1,9.76-24.06,23.46-24.06a23,23,0,0,1,16.51,6.89l-5.48,5.48a15.61,15.61,0,0,0-11-4.55c-9.62,0-15.5,6.82-15.5,16.24,0,10,6.88,16.24,15.5,16.24A15.65,15.65,0,0,0,455.67,106.73Z"}),_e("polygon",{class:"ffea8a58-cc19-4cb0-840a-e7da1eb1ac15",points:"488.53 70.94 465.2 119.09 473.55 119.09 488.5 88.07 503.46 119.09 511.81 119.09 488.53 70.94"}),_e("path",{class:"e3accb8a-14f1-4370-b656-d7874a6d5d7d",d:"M289.3,25.71A16.43,16.43,0,0,0,272.94,9.32h-23V59.4H258V17.5h15.27c3.95,0,7.85,3.87,7.85,8.2a8.15,8.15,0,0,1-7.85,8.4h-7.57L280.05,59.4H289L279.3,41.31A17,17,0,0,0,289.3,25.71Z"}),_e("path",{class:"ffea8a58-cc19-4cb0-840a-e7da1eb1ac15",d:"M392.67,87.28A15.52,15.52,0,0,0,377.23,71.8H355.46v47.29h7.88V79.52h14.24c3.72,0,7.41,3.66,7.41,7.75a7.7,7.7,0,0,1-7.41,7.93h-7.15l13.51,23.88h8.43L383.23,102A16,16,0,0,0,392.67,87.28Z"}),_e("path",{class:"b4972d74-5c14-4231-b16f-b749fcaad728",d:"M35.74,24.11a5.5,5.5,0,0,1-5.5,5.5c-.11,0-.22,0-.33,0-.87,2.83-1.62,5.73-2.24,8.66a5.54,5.54,0,0,1,3.19,3.89A105.09,105.09,0,0,1,69.64,52.69a5.41,5.41,0,0,1,6.45-1,104.82,104.82,0,0,0,7.41-8.48A10.91,10.91,0,0,1,95,24.9a103.18,103.18,0,0,0,5.68-14.21A64.94,64.94,0,0,0,41.6,4.36,102.44,102.44,0,0,0,33.5,19.7,5.49,5.49,0,0,1,35.74,24.11Z"}),_e("path",{class:"effdc8ae-96b7-4f4b-8b56-8895891bc015",d:"M109.5,95.64a7,7,0,0,1-7-7A6.91,6.91,0,0,1,104.3,84,104.29,104.29,0,0,0,77.76,60.06a5.42,5.42,0,0,1-7.76.67A107.22,107.22,0,0,1,53.9,71.86a7,7,0,0,1,.44,2.39,7.06,7.06,0,0,1-13.1,3.66,105,105,0,0,1-13.41,4.36,101.32,101.32,0,0,0,5.43,17.21,103,103,0,0,0,20.61,9.29,11.65,11.65,0,0,1,22.47,4.34c0,.08,0,.15,0,.22,3.06.28,6.15.44,9.27.44a102.87,102.87,0,0,0,25.84-3.31,64.75,64.75,0,0,0,5.31-6.14q-2.19-4.69-4.81-9.14A7.05,7.05,0,0,1,109.5,95.64Z"}),_e("path",{class:"be5c75c1-e5f7-4b13-bf39-5111bb1e7988",d:"M101.42,34.84a10.91,10.91,0,0,1-15.84,9.74A108.83,108.83,0,0,1,78,53.31a5.3,5.3,0,0,1,.91,4.54,106.67,106.67,0,0,1,27.37,24.62,6.86,6.86,0,0,1,3.25-.84,7,7,0,0,1,4.56,12.29q2.34,4,4.34,8.13a65,65,0,0,0-15.58-89.9,105.19,105.19,0,0,1-5.69,14A10.88,10.88,0,0,1,101.42,34.84Z"}),_e("path",{class:"a11335d6-0c1a-4e19-a369-fb30edf6e87c",d:"M13.92,84.77A104.3,104.3,0,0,0,29.74,97.31a105.26,105.26,0,0,1-4.32-14.49A106.13,106.13,0,0,1,13.92,84.77Z"}),_e("path",{class:"b74aac4f-eb3f-40be-9d83-66406728cdc8",d:"M40.33,75.62a6.84,6.84,0,0,1-.14-1.37,7,7,0,0,1,12.47-4.53,104,104,0,0,0,15.85-11,5.5,5.5,0,0,1-.46-2.19,5.32,5.32,0,0,1,.31-1.75A102.61,102.61,0,0,0,30.81,44.6,5.49,5.49,0,0,1,26,48.74a102.91,102.91,0,0,0-.62,11.16,104.06,104.06,0,0,0,1.95,19.95A102.55,102.55,0,0,0,40.33,75.62Z"}),_e("path",{class:"e783ffa9-b81d-444a-a448-dc31a834e59e",d:"M107.85,113.85a105.18,105.18,0,0,1-22.25,2.39c-3.23,0-6.42-.17-9.58-.45a11.66,11.66,0,0,1-23-2.68,11.52,11.52,0,0,1,.18-2A105.58,105.58,0,0,1,35,103.3a103.64,103.64,0,0,0,16.68,25.32,65,65,0,0,0,56.22-14.77Z"}),_e("path",{class:"a07217ac-3d6c-4280-ac14-9ab18d2719cb",d:"M25.23,37.81c.65-3,1.41-6,2.31-8.93a5.49,5.49,0,0,1,2.7-10.27,5.56,5.56,0,0,1,1,.1A104.91,104.91,0,0,1,37.68,6,65.14,65.14,0,0,0,3.62,43.61a106.21,106.21,0,0,1,16.57-1.74A5.46,5.46,0,0,1,25.23,37.81Z"}),_e("path",{class:"b65b54f8-3fa8-4163-892a-d2b361deb91e",d:"M10.67,85.06q-3.66.3-7.38.35a65.1,65.1,0,0,0,44.16,42.17,105.49,105.49,0,0,1-16.16-26.39A106.2,106.2,0,0,1,10.67,85.06Z"}),_e("path",{class:"f57a2c59-2e3e-45aa-9f02-f402fffd6ee2",d:"M24.91,80.41a104.53,104.53,0,0,1-1.38-32,5.47,5.47,0,0,1-3.44-4.07,103.31,103.31,0,0,0-17.35,2A65.21,65.21,0,0,0,0,65c0,1.11,0,2.22.08,3.32A103.13,103.13,0,0,0,11.65,82.51,101.74,101.74,0,0,0,24.91,80.41Z"}),_e("path",{class:"e1f8c41d-7fe8-4637-877e-74b5d4529df6",d:"M.53,73.21a66.59,66.59,0,0,0,2,9.75c2,0,4-.08,5.94-.2A108.33,108.33,0,0,1,.53,73.21Z"})])])],-1),Wd=[kd],wu={__name:"Navbar",props:{class:String},setup(n){return(e,t)=>(Bn(),Rr("div",{class:ji(n.class)},Wd,2))}},ut={eng:{play:"Play",back:"Back",flips_text:"Number of flips",score:"Best score",solve:"Solve",randomize:"Randomize",restart:"Restart",add:"Add",remove:"Remove",lang:"FR",winMessage:"Congratulations. The crepes are sorted",how_to_play_title:"How to play:",how_to_play_description:"You can flip stacks of pancakes: by double-clicking on a pancake,the stack of pancakes above it flips and is upside down.You can zoom in/out and flip the stack back and forth. By pressing Shift and the left mouse button, it is possible to move the stack of pancakes.",game_rule_title:"Game rule:",game_rule_description:"You must sort the pancakes from smallest on top to largest on bottom.",link_text:"more info"},fr:{play:"Jouer",back:"Retour",flips_text:"Nombre de retournements",score:"Meilleur score",solve:"Résoudre",randomize:"Mélanger",restart:"Recommencer",add:"Ajouter",remove:"Supprimer",lang:"EN",winMessage:"Félicitations. Les crêpes sont triées",how_to_play_title:"Comment jouer:",how_to_play_description:"Vous pouvez retourner des piles de crêpes : en double-cliquant sur une crêpe, la pile de crêpes au-dessus d'elle se retourne et se retrouve à l'envers.Vous pouvez effectuer un zoom avant/arrière et retourner la pile d'avant en arrière. En appuyant sur Maj et le bouton gauche de la souris, il est possible de déplacer la pile de crêpes.",game_rule_title:"Régles de jeu:",game_rule_description:"Vous devez trier les crêpes de la plus petite en haut à la plus grande en bas.",link_text:"plus d'info"}},Qe=Cs({current_language:"fr"}),Xd={class:"flex justify-center py-14 w-screen h-screen overflow-y-scroll"},qd={class:""},Yd={class:"p-2 text-black-900 text-2xl"},jd={class:"p-2 text-black-900 text-xl"},Kd=_e("div",{class:"flex flex-wrap"},[_e("img",{class:"object-fill w-96 h-48 sm:w-full sm:h-full p-2",src:Vd,alt:"to"})],-1),$d={class:"p-2 text-black-900 text-2xl"},Zd={class:"p-2 text-black-900 text-xl"},Jd={class:"p-2 py-4 text-blue-500 text-xl",href:"https://portail.terra-numerica.org/res/rsrc/785",target:"_blank"},Qd={href:"#/game",class:"rounded px-5 p-2 m-2 bg-blue-500 text-white font-bold"},ep={__name:"Home",setup(n){function e(){Qe.current_language==="fr"?Qe.current_language="eng":Qe.current_language="fr"}return(t,i)=>(Bn(),Rr(Gt,null,[dn(wu,{class:"fixed p-2 w-full bg-white"}),_e("div",Xd,[_e("div",null,[_e("button",{onClick:e,class:"rounded p-2 m-2 bg-gray-900 text-white font-bold text-xl"},st(Ve(ut)[Ve(Qe).current_language].lang),1),_e("div",qd,[_e("p",Yd,st(Ve(ut)[Ve(Qe).current_language].game_rule_title),1),_e("p",jd,st(Ve(ut)[Ve(Qe).current_language].game_rule_description),1),Kd,_e("p",$d,st(Ve(ut)[Ve(Qe).current_language].how_to_play_title),1),_e("p",Zd,st(Ve(ut)[Ve(Qe).current_language].how_to_play_description),1),_e("a",Jd,st(Ve(ut)[Ve(Qe).current_language].link_text),1),_e("a",Qd,st(Ve(ut)[Ve(Qe).current_language].play),1)])])])],64))}};const tp={class:"class"},ll={__name:"Confetti",props:{isVisible:Boolean,animationDuration:Number,animationDelay:Number},setup(n){const e=n,t=Rt(0);return hs(()=>e.isVisible,()=>{t.value++}),(i,r)=>(Bn(),Rr("div",tp))}};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const go="154",xi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Mi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},np=0,cl=1,ip=2,Ru=1,rp=2,Tn=3,Yn=0,Dt=1,wn=2,Wn=0,qi=1,ul=2,fl=3,hl=4,sp=5,Bi=100,ap=101,op=102,dl=103,pl=104,lp=200,cp=201,up=202,fp=203,Cu=204,Pu=205,hp=206,dp=207,pp=208,mp=209,_p=210,gp=0,vp=1,xp=2,Ha=3,Mp=4,Sp=5,Ep=6,yp=7,vo=0,bp=1,Tp=2,Cn=0,Ap=1,wp=2,Rp=3,Cp=4,Pp=5,Lu=300,Ji=301,Qi=302,Ga=303,Va=304,Ns=306,ka=1e3,Jt=1001,Wa=1002,Pt=1003,ml=1004,Ks=1005,Vt=1006,Lp=1007,Pr=1008,Xn=1009,Up=1010,Dp=1011,xo=1012,Uu=1013,zn=1014,Hn=1015,Lr=1016,Du=1017,Iu=1018,ui=1020,Ip=1021,Qt=1023,Np=1024,Fp=1025,fi=1026,er=1027,Op=1028,Nu=1029,Bp=1030,Fu=1031,Ou=1033,$s=33776,Zs=33777,Js=33778,Qs=33779,_l=35840,gl=35841,vl=35842,xl=35843,zp=36196,Ml=37492,Sl=37496,El=37808,yl=37809,bl=37810,Tl=37811,Al=37812,wl=37813,Rl=37814,Cl=37815,Pl=37816,Ll=37817,Ul=37818,Dl=37819,Il=37820,Nl=37821,ea=36492,Hp=36283,Fl=36284,Ol=36285,Bl=36286,Bu=3e3,hi=3001,Gp=3200,Vp=3201,zu=0,kp=1,di="",ke="srgb",_n="srgb-linear",Hu="display-p3",ta=7680,Wp=519,Xp=512,qp=513,Yp=514,jp=515,Kp=516,$p=517,Zp=518,Jp=519,zl=35044,Hl="300 es",Xa=1035,Rn=2e3,Es=2001;class gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],na=Math.PI/180,qa=180/Math.PI;function Ur(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[i&255]+Mt[i>>8&255]+Mt[i>>16&255]+Mt[i>>24&255]).toLowerCase()}function Lt(n,e,t){return Math.max(e,Math.min(t,n))}function Qp(n,e){return(n%e+e)%e}function ia(n,e,t){return(1-t)*n+t*e}function Gl(n){return(n&n-1)===0&&n!==0}function Ya(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Wr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,i,r,s,a,o,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],m=i[5],x=i[8],v=r[0],p=r[3],h=r[6],P=r[1],E=r[4],b=r[7],T=r[2],C=r[5],y=r[8];return s[0]=a*v+o*P+l*T,s[3]=a*p+o*E+l*C,s[6]=a*h+o*b+l*y,s[1]=c*v+u*P+f*T,s[4]=c*p+u*E+f*C,s[7]=c*h+u*b+f*y,s[2]=d*v+m*P+x*T,s[5]=d*p+m*E+x*C,s[8]=d*h+m*b+x*y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,m=c*s-a*l,x=t*f+i*d+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=d*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ra.makeScale(e,t)),this}rotate(e){return this.premultiply(ra.makeRotation(-e)),this}translate(e,t){return this.premultiply(ra.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ra=new Xe;function Gu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ys(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const Vl={};function Sr(n){n in Vl||(Vl[n]=!0,console.warn(n))}function Yi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function sa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const em=new Xe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),tm=new Xe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function nm(n){return n.convertSRGBToLinear().applyMatrix3(tm)}function im(n){return n.applyMatrix3(em).convertLinearToSRGB()}const rm={[_n]:n=>n,[ke]:n=>n.convertSRGBToLinear(),[Hu]:nm},sm={[_n]:n=>n,[ke]:n=>n.convertLinearToSRGB(),[Hu]:im},Xt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return _n},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=rm[e],r=sm[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Si;class Vu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Si===void 0&&(Si=ys("canvas")),Si.width=e.width,Si.height=e.height;const i=Si.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Si}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ys("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Yi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Yi(t[i]/255)*255):t[i]=Yi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let am=0;class ku{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=Ur(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(aa(r[a].image)):s.push(aa(r[a]))}else s=aa(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function aa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Vu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let om=0;class zt extends gi{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,i=Jt,r=Jt,s=Vt,a=Pr,o=Qt,l=Xn,c=zt.DEFAULT_ANISOTROPY,u=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=Ur(),this.name="",this.source=new ku(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===hi?ke:di),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ka:e.x=e.x-Math.floor(e.x);break;case Jt:e.x=e.x<0?0:1;break;case Wa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ka:e.y=e.y-Math.floor(e.y);break;case Jt:e.y=e.y<0?0:1;break;case Wa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ke?hi:Bu}set encoding(e){Sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===hi?ke:di}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Lu;zt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,i=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],x=l[9],v=l[2],p=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(x-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,b=(m+1)/2,T=(h+1)/2,C=(u+d)/4,y=(f+v)/4,z=(x+p)/4;return E>b&&E>T?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=C/i,s=y/i):b>T?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=C/r,s=z/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=y/s,r=z/s),this.set(i,r,s,t),this}let P=Math.sqrt((p-x)*(p-x)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(P)<.001&&(P=1),this.x=(p-x)/P,this.y=(f-v)/P,this.z=(d-u)/P,this.w=Math.acos((c+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pi extends gi{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Sr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===hi?ke:di),this.texture=new zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Vt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ku(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wu extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lm extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[a+0],m=s[a+1],x=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=x,e[t+3]=v;return}if(f!==v||l!==d||c!==m||u!==x){let p=1-o;const h=l*d+c*m+u*x+f*v,P=h>=0?1:-1,E=1-h*h;if(E>Number.EPSILON){const T=Math.sqrt(E),C=Math.atan2(T,h*P);p=Math.sin(p*C)/T,o=Math.sin(o*C)/T}const b=o*P;if(l=l*p+d*b,c=c*p+m*b,u=u*p+x*b,f=f*p+v*b,p===1-o){const T=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=T,c*=T,u*=T,f*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],m=s[a+2],x=s[a+3];return e[t]=o*x+u*f+l*m-c*d,e[t+1]=l*x+u*d+c*f-o*m,e[t+2]=c*x+u*m+o*d-l*f,e[t+3]=u*x-o*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),m=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*m*x,this._y=c*m*f-d*u*x,this._z=c*u*x+d*m*f,this._w=c*u*f-d*m*x;break;case"YXZ":this._x=d*u*f+c*m*x,this._y=c*m*f-d*u*x,this._z=c*u*x-d*m*f,this._w=c*u*f+d*m*x;break;case"ZXY":this._x=d*u*f-c*m*x,this._y=c*m*f+d*u*x,this._z=c*u*x+d*m*f,this._w=c*u*f-d*m*x;break;case"ZYX":this._x=d*u*f-c*m*x,this._y=c*m*f+d*u*x,this._z=c*u*x-d*m*f,this._w=c*u*f+d*m*x;break;case"YZX":this._x=d*u*f+c*m*x,this._y=c*m*f+d*u*x,this._z=c*u*x-d*m*f,this._w=c*u*f-d*m*x;break;case"XZY":this._x=d*u*f-c*m*x,this._y=c*m*f-d*u*x,this._z=c*u*x+d*m*f,this._w=c*u*f+d*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,u=l*i+o*t-s*r,f=l*r+s*i-a*t,d=-s*t-a*i-o*r;return this.x=c*l+d*-s+u*-o-f*-a,this.y=u*l+d*-a+f*-s-c*-o,this.z=f*l+d*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return oa.copy(this).projectOnVector(e),this.sub(oa)}reflect(e){return this.sub(oa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oa=new B,kl=new mi;class Dr{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ei.copy(e.boundingBox),Ei.applyMatrix4(e.matrixWorld),this.union(Ei);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)Mn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Mn)}else r.boundingBox===null&&r.computeBoundingBox(),Ei.copy(r.boundingBox),Ei.applyMatrix4(e.matrixWorld),this.union(Ei)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),Xr.subVectors(this.max,cr),yi.subVectors(e.a,cr),bi.subVectors(e.b,cr),Ti.subVectors(e.c,cr),Dn.subVectors(bi,yi),In.subVectors(Ti,bi),Qn.subVectors(yi,Ti);let t=[0,-Dn.z,Dn.y,0,-In.z,In.y,0,-Qn.z,Qn.y,Dn.z,0,-Dn.x,In.z,0,-In.x,Qn.z,0,-Qn.x,-Dn.y,Dn.x,0,-In.y,In.x,0,-Qn.y,Qn.x,0];return!la(t,yi,bi,Ti,Xr)||(t=[1,0,0,0,1,0,0,0,1],!la(t,yi,bi,Ti,Xr))?!1:(qr.crossVectors(Dn,In),t=[qr.x,qr.y,qr.z],la(t,yi,bi,Ti,Xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xn=[new B,new B,new B,new B,new B,new B,new B,new B],Mn=new B,Ei=new Dr,yi=new B,bi=new B,Ti=new B,Dn=new B,In=new B,Qn=new B,cr=new B,Xr=new B,qr=new B,ei=new B;function la(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ei.fromArray(n,s);const o=r.x*Math.abs(ei.x)+r.y*Math.abs(ei.y)+r.z*Math.abs(ei.z),l=e.dot(ei),c=t.dot(ei),u=i.dot(ei);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const cm=new Dr,ur=new B,ca=new B;class Mo{constructor(e=new B,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):cm.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ur.subVectors(e,this.center);const t=ur.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ur,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ca.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ur.copy(e.center).add(ca)),this.expandByPoint(ur.copy(e.center).sub(ca))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sn=new B,ua=new B,Yr=new B,Nn=new B,fa=new B,jr=new B,ha=new B;class Xu{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.origin).addScaledVector(this.direction,t),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ua.copy(e).add(t).multiplyScalar(.5),Yr.copy(t).sub(e).normalize(),Nn.copy(this.origin).sub(ua);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Yr),o=Nn.dot(this.direction),l=-Nn.dot(Yr),c=Nn.lengthSq(),u=Math.abs(1-a*a);let f,d,m,x;if(u>0)if(f=a*l-o,d=a*o-l,x=s*u,f>=0)if(d>=-x)if(d<=x){const v=1/u;f*=v,d*=v,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-x?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=x?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ua).addScaledVector(Yr,d),m}intersectSphere(e,t){Sn.subVectors(e.center,this.origin);const i=Sn.dot(this.direction),r=Sn.dot(Sn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,i,r,s){fa.subVectors(t,e),jr.subVectors(i,e),ha.crossVectors(fa,jr);let a=this.direction.dot(ha),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Nn.subVectors(this.origin,e);const l=o*this.direction.dot(jr.crossVectors(Nn,jr));if(l<0)return null;const c=o*this.direction.dot(fa.cross(Nn));if(c<0||l+c>a)return null;const u=-o*Nn.dot(ha);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,i,r,s,a,o,l,c,u,f,d,m,x,v,p){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,d,m,x,v,p)}set(e,t,i,r,s,a,o,l,c,u,f,d,m,x,v,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=x,h[11]=v,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ai.setFromMatrixColumn(e,0).length(),s=1/Ai.setFromMatrixColumn(e,1).length(),a=1/Ai.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,m=a*f,x=o*u,v=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+x*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=x+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,x=c*u,v=c*f;t[0]=d+v*o,t[4]=x*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-x,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,x=c*u,v=c*f;t[0]=d-v*o,t[4]=-a*f,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*f,x=o*u,v=o*f;t[0]=l*u,t[4]=x*c-m,t[8]=d*c+v,t[1]=l*f,t[5]=v*c+d,t[9]=m*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,x=o*l,v=o*c;t[0]=l*u,t[4]=v-d*f,t[8]=x*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+x,t[10]=d-v*f}else if(e.order==="XZY"){const d=a*l,m=a*c,x=o*l,v=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+v,t[5]=a*u,t[9]=m*f-x,t[2]=x*f-m,t[6]=o*u,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(um,e,fm)}lookAt(e,t,i){const r=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),Fn.crossVectors(i,Ot),Fn.lengthSq()===0&&(Math.abs(i.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),Fn.crossVectors(i,Ot)),Fn.normalize(),Kr.crossVectors(Ot,Fn),r[0]=Fn.x,r[4]=Kr.x,r[8]=Ot.x,r[1]=Fn.y,r[5]=Kr.y,r[9]=Ot.y,r[2]=Fn.z,r[6]=Kr.z,r[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],m=i[13],x=i[2],v=i[6],p=i[10],h=i[14],P=i[3],E=i[7],b=i[11],T=i[15],C=r[0],y=r[4],z=r[8],S=r[12],R=r[1],ae=r[5],re=r[9],N=r[13],W=r[2],j=r[6],J=r[10],V=r[14],q=r[3],de=r[7],oe=r[11],G=r[15];return s[0]=a*C+o*R+l*W+c*q,s[4]=a*y+o*ae+l*j+c*de,s[8]=a*z+o*re+l*J+c*oe,s[12]=a*S+o*N+l*V+c*G,s[1]=u*C+f*R+d*W+m*q,s[5]=u*y+f*ae+d*j+m*de,s[9]=u*z+f*re+d*J+m*oe,s[13]=u*S+f*N+d*V+m*G,s[2]=x*C+v*R+p*W+h*q,s[6]=x*y+v*ae+p*j+h*de,s[10]=x*z+v*re+p*J+h*oe,s[14]=x*S+v*N+p*V+h*G,s[3]=P*C+E*R+b*W+T*q,s[7]=P*y+E*ae+b*j+T*de,s[11]=P*z+E*re+b*J+T*oe,s[15]=P*S+E*N+b*V+T*G,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],x=e[3],v=e[7],p=e[11],h=e[15];return x*(+s*l*f-r*c*f-s*o*d+i*c*d+r*o*m-i*l*m)+v*(+t*l*m-t*c*d+s*a*d-r*a*m+r*c*u-s*l*u)+p*(+t*c*f-t*o*m-s*a*f+i*a*m+s*o*u-i*c*u)+h*(-r*o*u-t*l*f+t*o*d+r*a*f-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],x=e[12],v=e[13],p=e[14],h=e[15],P=f*p*c-v*d*c+v*l*m-o*p*m-f*l*h+o*d*h,E=x*d*c-u*p*c-x*l*m+a*p*m+u*l*h-a*d*h,b=u*v*c-x*f*c+x*o*m-a*v*m-u*o*h+a*f*h,T=x*f*l-u*v*l-x*o*d+a*v*d+u*o*p-a*f*p,C=t*P+i*E+r*b+s*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/C;return e[0]=P*y,e[1]=(v*d*s-f*p*s-v*r*m+i*p*m+f*r*h-i*d*h)*y,e[2]=(o*p*s-v*l*s+v*r*c-i*p*c-o*r*h+i*l*h)*y,e[3]=(f*l*s-o*d*s-f*r*c+i*d*c+o*r*m-i*l*m)*y,e[4]=E*y,e[5]=(u*p*s-x*d*s+x*r*m-t*p*m-u*r*h+t*d*h)*y,e[6]=(x*l*s-a*p*s-x*r*c+t*p*c+a*r*h-t*l*h)*y,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*m+t*l*m)*y,e[8]=b*y,e[9]=(x*f*s-u*v*s-x*i*m+t*v*m+u*i*h-t*f*h)*y,e[10]=(a*v*s-x*o*s+x*i*c-t*v*c-a*i*h+t*o*h)*y,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*m-t*o*m)*y,e[12]=T*y,e[13]=(u*v*r-x*f*r+x*i*d-t*v*d-u*i*p+t*f*p)*y,e[14]=(x*o*r-a*v*r-x*i*l+t*v*l+a*i*p-t*o*p)*y,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*d+t*o*d)*y,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,d=s*c,m=s*u,x=s*f,v=a*u,p=a*f,h=o*f,P=l*c,E=l*u,b=l*f,T=i.x,C=i.y,y=i.z;return r[0]=(1-(v+h))*T,r[1]=(m+b)*T,r[2]=(x-E)*T,r[3]=0,r[4]=(m-b)*C,r[5]=(1-(d+h))*C,r[6]=(p+P)*C,r[7]=0,r[8]=(x+E)*y,r[9]=(p-P)*y,r[10]=(1-(d+v))*y,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ai.set(r[0],r[1],r[2]).length();const a=Ai.set(r[4],r[5],r[6]).length(),o=Ai.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qt.copy(this);const c=1/s,u=1/a,f=1/o;return qt.elements[0]*=c,qt.elements[1]*=c,qt.elements[2]*=c,qt.elements[4]*=u,qt.elements[5]*=u,qt.elements[6]*=u,qt.elements[8]*=f,qt.elements[9]*=f,qt.elements[10]*=f,t.setFromRotationMatrix(qt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Rn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let m,x;if(o===Rn)m=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Es)m=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Rn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(a-s),d=(t+e)*c,m=(i+r)*u;let x,v;if(o===Rn)x=(a+s)*f,v=-2*f;else if(o===Es)x=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ai=new B,qt=new ft,um=new B(0,0,0),fm=new B(1,1,1),Fn=new B,Kr=new B,Ot=new B,Wl=new ft,Xl=new mi;class Fs{constructor(e=0,t=0,i=0,r=Fs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Lt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Wl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xl.setFromEuler(this),this.setFromQuaternion(Xl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fs.DEFAULT_ORDER="XYZ";class So{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hm=0;const ql=new B,wi=new mi,En=new ft,$r=new B,fr=new B,dm=new B,pm=new mi,Yl=new B(1,0,0),jl=new B(0,1,0),Kl=new B(0,0,1),mm={type:"added"},$l={type:"removed"};class bt extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=Ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new B,t=new Fs,i=new mi,r=new B(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new Xe}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new So,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.multiply(wi),this}rotateOnWorldAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.premultiply(wi),this}rotateX(e){return this.rotateOnAxis(Yl,e)}rotateY(e){return this.rotateOnAxis(jl,e)}rotateZ(e){return this.rotateOnAxis(Kl,e)}translateOnAxis(e,t){return ql.copy(e).applyQuaternion(this.quaternion),this.position.add(ql.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yl,e)}translateY(e){return this.translateOnAxis(jl,e)}translateZ(e){return this.translateOnAxis(Kl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?$r.copy(e):$r.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(fr,$r,this.up):En.lookAt($r,fr,this.up),this.quaternion.setFromRotationMatrix(En),r&&(En.extractRotation(r.matrixWorld),wi.setFromRotationMatrix(En),this.quaternion.premultiply(wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(mm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($l)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent($l)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),En.multiply(e.parent.matrixWorld)),e.applyMatrix4(En),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,e,dm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,pm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}bt.DEFAULT_UP=new B(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yt=new B,yn=new B,da=new B,bn=new B,Ri=new B,Ci=new B,Zl=new B,pa=new B,ma=new B,_a=new B;let Zr=!1;class $t{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Yt.subVectors(e,t),r.cross(Yt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Yt.subVectors(r,t),yn.subVectors(i,t),da.subVectors(e,t);const a=Yt.dot(Yt),o=Yt.dot(yn),l=Yt.dot(da),c=yn.dot(yn),u=yn.dot(da),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const d=1/f,m=(c*l-o*u)*d,x=(a*u-o*l)*d;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,bn),bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getUV(e,t,i,r,s,a,o,l){return Zr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zr=!0),this.getInterpolation(e,t,i,r,s,a,o,l)}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,bn),l.setScalar(0),l.addScaledVector(s,bn.x),l.addScaledVector(a,bn.y),l.addScaledVector(o,bn.z),l}static isFrontFacing(e,t,i,r){return Yt.subVectors(i,t),yn.subVectors(e,t),Yt.cross(yn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),Yt.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $t.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Zr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zr=!0),$t.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return $t.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return $t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Ri.subVectors(r,i),Ci.subVectors(s,i),pa.subVectors(e,i);const l=Ri.dot(pa),c=Ci.dot(pa);if(l<=0&&c<=0)return t.copy(i);ma.subVectors(e,r);const u=Ri.dot(ma),f=Ci.dot(ma);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Ri,a);_a.subVectors(e,s);const m=Ri.dot(_a),x=Ci.dot(_a);if(x>=0&&m<=x)return t.copy(s);const v=m*c-l*x;if(v<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(Ci,o);const p=u*x-m*f;if(p<=0&&f-u>=0&&m-x>=0)return Zl.subVectors(s,r),o=(f-u)/(f-u+(m-x)),t.copy(r).addScaledVector(Zl,o);const h=1/(p+v+d);return a=v*h,o=d*h,t.copy(i).addScaledVector(Ri,a).addScaledVector(Ci,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let _m=0;class Ir extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=Ur(),this.name="",this.type="Material",this.blending=qi,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cu,this.blendDst=Pu,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ha,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ta,this.stencilZFail=ta,this.stencilZPass=ta,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(i.blending=this.blending),this.side!==Yn&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jt={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function ga(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ke){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Xt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Xt.workingColorSpace){if(e=Qp(e,1),t=Lt(t,0,1),i=Lt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ga(a,s,e+1/3),this.g=ga(a,s,e),this.b=ga(a,s,e-1/3)}return Xt.toWorkingColorSpace(this,r),this}setStyle(e,t=ke){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ke){const i=qu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=sa(e.r),this.g=sa(e.g),this.b=sa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ke){return Xt.fromWorkingColorSpace(St.copy(this),e),Math.round(Lt(St.r*255,0,255))*65536+Math.round(Lt(St.g*255,0,255))*256+Math.round(Lt(St.b*255,0,255))}getHexString(e=ke){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xt.workingColorSpace){Xt.fromWorkingColorSpace(St.copy(this),t);const i=St.r,r=St.g,s=St.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=ke){Xt.fromWorkingColorSpace(St.copy(this),e);const t=St.r,i=St.g,r=St.b;return e!==ke?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(jt),jt.h+=e,jt.s+=t,jt.l+=i,this.setHSL(jt.h,jt.s,jt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(jt),e.getHSL(Jr);const i=ia(jt.h,Jr.h,t),r=ia(jt.s,Jr.s,t),s=ia(jt.l,Jr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const St=new Ze;Ze.NAMES=qu;class Yu extends Ir{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new B,Qr=new ze;class pn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=zl,this.updateRange={offset:0,count:-1},this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Qr.fromBufferAttribute(this,t),Qr.applyMatrix3(e),this.setXY(t,Qr.x,Qr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class ju extends pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ku extends pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class sn extends pn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let gm=0;const Ht=new ft,va=new bt,Pi=new B,Bt=new Dr,hr=new Dr,_t=new B;class jn extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=Ur(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gu(e)?Ku:ju)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,i){return Ht.makeTranslation(e,t,i),this.applyMatrix4(Ht),this}scale(e,t,i){return Ht.makeScale(e,t,i),this.applyMatrix4(Ht),this}lookAt(e){return va.lookAt(e),va.updateMatrix(),this.applyMatrix4(va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new sn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Bt.setFromBufferAttribute(s),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];hr.setFromBufferAttribute(o),this.morphTargetsRelative?(_t.addVectors(Bt.min,hr.min),Bt.expandByPoint(_t),_t.addVectors(Bt.max,hr.max),Bt.expandByPoint(_t)):(Bt.expandByPoint(hr.min),Bt.expandByPoint(hr.max))}Bt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)_t.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(_t));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)_t.fromBufferAttribute(o,c),l&&(Pi.fromBufferAttribute(e,c),_t.add(Pi)),r=Math.max(r,i.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<o;R++)c[R]=new B,u[R]=new B;const f=new B,d=new B,m=new B,x=new ze,v=new ze,p=new ze,h=new B,P=new B;function E(R,ae,re){f.fromArray(r,R*3),d.fromArray(r,ae*3),m.fromArray(r,re*3),x.fromArray(a,R*2),v.fromArray(a,ae*2),p.fromArray(a,re*2),d.sub(f),m.sub(f),v.sub(x),p.sub(x);const N=1/(v.x*p.y-p.x*v.y);isFinite(N)&&(h.copy(d).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(N),P.copy(m).multiplyScalar(v.x).addScaledVector(d,-p.x).multiplyScalar(N),c[R].add(h),c[ae].add(h),c[re].add(h),u[R].add(P),u[ae].add(P),u[re].add(P))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let R=0,ae=b.length;R<ae;++R){const re=b[R],N=re.start,W=re.count;for(let j=N,J=N+W;j<J;j+=3)E(i[j+0],i[j+1],i[j+2])}const T=new B,C=new B,y=new B,z=new B;function S(R){y.fromArray(s,R*3),z.copy(y);const ae=c[R];T.copy(ae),T.sub(y.multiplyScalar(y.dot(ae))).normalize(),C.crossVectors(z,ae);const N=C.dot(u[R])<0?-1:1;l[R*4]=T.x,l[R*4+1]=T.y,l[R*4+2]=T.z,l[R*4+3]=N}for(let R=0,ae=b.length;R<ae;++R){const re=b[R],N=re.start,W=re.count;for(let j=N,J=N+W;j<J;j+=3)S(i[j+0]),S(i[j+1]),S(i[j+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new B,s=new B,a=new B,o=new B,l=new B,c=new B,u=new B,f=new B;if(e)for(let d=0,m=e.count;d<m;d+=3){const x=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let m=0,x=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*u;for(let h=0;h<u;h++)d[x++]=c[m++]}return new pn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jl=new ft,ti=new Xu,es=new Mo,Ql=new B,Li=new B,Ui=new B,Di=new B,xa=new B,ts=new B,ns=new ze,is=new ze,rs=new ze,ec=new B,tc=new B,nc=new B,ss=new B,as=new B;class hn extends bt{constructor(e=new jn,t=new Yu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ts.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(xa.fromBufferAttribute(f,e),a?ts.addScaledVector(xa,u):ts.addScaledVector(xa.sub(t),u))}t.add(ts)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),es.copy(i.boundingSphere),es.applyMatrix4(s),ti.copy(e.ray).recast(e.near),!(es.containsPoint(ti.origin)===!1&&(ti.intersectSphere(es,Ql)===null||ti.origin.distanceToSquared(Ql)>(e.far-e.near)**2))&&(Jl.copy(s).invert(),ti.copy(e.ray).applyMatrix4(Jl),!(i.boundingBox!==null&&ti.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ti)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=d.length;x<v;x++){const p=d[x],h=a[p.materialIndex],P=Math.max(p.start,m.start),E=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let b=P,T=E;b<T;b+=3){const C=o.getX(b),y=o.getX(b+1),z=o.getX(b+2);r=os(this,h,e,i,c,u,f,C,y,z),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=x,h=v;p<h;p+=3){const P=o.getX(p),E=o.getX(p+1),b=o.getX(p+2);r=os(this,a,e,i,c,u,f,P,E,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,v=d.length;x<v;x++){const p=d[x],h=a[p.materialIndex],P=Math.max(p.start,m.start),E=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=P,T=E;b<T;b+=3){const C=b,y=b+1,z=b+2;r=os(this,h,e,i,c,u,f,C,y,z),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=x,h=v;p<h;p+=3){const P=p,E=p+1,b=p+2;r=os(this,a,e,i,c,u,f,P,E,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function vm(n,e,t,i,r,s,a,o){let l;if(e.side===Dt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Yn,o),l===null)return null;as.copy(o),as.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(as);return c<t.near||c>t.far?null:{distance:c,point:as.clone(),object:n}}function os(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Li),n.getVertexPosition(l,Ui),n.getVertexPosition(c,Di);const u=vm(n,e,t,i,Li,Ui,Di,ss);if(u){r&&(ns.fromBufferAttribute(r,o),is.fromBufferAttribute(r,l),rs.fromBufferAttribute(r,c),u.uv=$t.getInterpolation(ss,Li,Ui,Di,ns,is,rs,new ze)),s&&(ns.fromBufferAttribute(s,o),is.fromBufferAttribute(s,l),rs.fromBufferAttribute(s,c),u.uv1=$t.getInterpolation(ss,Li,Ui,Di,ns,is,rs,new ze),u.uv2=u.uv1),a&&(ec.fromBufferAttribute(a,o),tc.fromBufferAttribute(a,l),nc.fromBufferAttribute(a,c),u.normal=$t.getInterpolation(ss,Li,Ui,Di,ec,tc,nc,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new B,materialIndex:0};$t.getNormal(Li,Ui,Di,f.normal),u.face=f}return u}class Nr extends jn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,m=0;x("z","y","x",-1,-1,i,t,e,a,s,0),x("z","y","x",1,-1,i,t,-e,a,s,1),x("x","z","y",1,1,e,i,t,r,a,2),x("x","z","y",1,-1,e,i,-t,r,a,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(u,3)),this.setAttribute("uv",new sn(f,2));function x(v,p,h,P,E,b,T,C,y,z,S){const R=b/y,ae=T/z,re=b/2,N=T/2,W=C/2,j=y+1,J=z+1;let V=0,q=0;const de=new B;for(let oe=0;oe<J;oe++){const G=oe*ae-N;for(let Y=0;Y<j;Y++){const ve=Y*R-re;de[v]=ve*P,de[p]=G*E,de[h]=W,c.push(de.x,de.y,de.z),de[v]=0,de[p]=0,de[h]=C>0?1:-1,u.push(de.x,de.y,de.z),f.push(Y/y),f.push(1-oe/z),V+=1}}for(let oe=0;oe<z;oe++)for(let G=0;G<y;G++){const Y=d+G+j*oe,ve=d+G+j*(oe+1),xe=d+(G+1)+j*(oe+1),Se=d+(G+1)+j*oe;l.push(Y,ve,Se),l.push(ve,xe,Se),q+=6}o.addGroup(m,q,S),m+=q,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function tr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ct(n){const e={};for(let t=0;t<n.length;t++){const i=tr(n[t]);for(const r in i)e[r]=i[r]}return e}function xm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function $u(n){return n.getRenderTarget()===null?n.outputColorSpace:_n}const Mm={clone:tr,merge:Ct};var Sm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Em=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends Ir{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sm,this.fragmentShader=Em,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tr(e.uniforms),this.uniformsGroups=xm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Zu extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=Rn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class kt extends Zu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qa*2*Math.atan(Math.tan(na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(na*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ii=-90,Ni=1;class ym extends bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new kt(Ii,Ni,e,t);r.layers=this.layers,this.add(r);const s=new kt(Ii,Ni,e,t);s.layers=this.layers,this.add(s);const a=new kt(Ii,Ni,e,t);a.layers=this.layers,this.add(a);const o=new kt(Ii,Ni,e,t);o.layers=this.layers,this.add(o);const l=new kt(Ii,Ni,e,t);l.layers=this.layers,this.add(l);const c=new kt(Ii,Ni,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Rn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Es)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=Cn,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class Ju extends zt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ji,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bm extends pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Sr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===hi?ke:di),this.texture=new Ju(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Nr(5,5,5),s=new _i({name:"CubemapFromEquirect",uniforms:tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dt,blending:Wn});s.uniforms.tEquirect.value=t;const a=new hn(r,s),o=t.minFilter;return t.minFilter===Pr&&(t.minFilter=Vt),new ym(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Ma=new B,Tm=new B,Am=new Xe;class ii{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ma.subVectors(i,t).cross(Tm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ma),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Am.getNormalMatrix(e),r=this.coplanarPoint(Ma).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new Mo,ls=new B;class Eo{constructor(e=new ii,t=new ii,i=new ii,r=new ii,s=new ii,a=new ii){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Rn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],m=r[8],x=r[9],v=r[10],p=r[11],h=r[12],P=r[13],E=r[14],b=r[15];if(i[0].setComponents(l-s,d-c,p-m,b-h).normalize(),i[1].setComponents(l+s,d+c,p+m,b+h).normalize(),i[2].setComponents(l+a,d+u,p+x,b+P).normalize(),i[3].setComponents(l-a,d-u,p-x,b-P).normalize(),i[4].setComponents(l-o,d-f,p-v,b-E).normalize(),t===Rn)i[5].setComponents(l+o,d+f,p+v,b+E).normalize();else if(t===Es)i[5].setComponents(o,f,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(e){return ni.center.set(0,0,0),ni.radius=.7071067811865476,ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ls.x=r.normal.x>0?e.max.x:e.min.x,ls.y=r.normal.y>0?e.max.y:e.min.y,ls.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ls)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qu(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function wm(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,d=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,f,d),c.onUploadCallback();let x;if(f instanceof Float32Array)x=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=n.SHORT;else if(f instanceof Uint32Array)x=n.UNSIGNED_INT;else if(f instanceof Int32Array)x=n.INT;else if(f instanceof Int8Array)x=n.BYTE;else if(f instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const d=u.array,m=u.updateRange;n.bindBuffer(f,c),m.count===-1?n.bufferSubData(f,0,d):(t?n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class yo extends jn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=t/l,m=[],x=[],v=[],p=[];for(let h=0;h<u;h++){const P=h*d-a;for(let E=0;E<c;E++){const b=E*f-s;x.push(b,-P,0),v.push(0,0,1),p.push(E/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let P=0;P<o;P++){const E=P+c*h,b=P+c*(h+1),T=P+1+c*(h+1),C=P+1+c*h;m.push(E,b,C),m.push(b,T,C)}this.setIndex(m),this.setAttribute("position",new sn(x,3)),this.setAttribute("normal",new sn(v,3)),this.setAttribute("uv",new sn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Rm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Pm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Um=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Dm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Im=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Nm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Om=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ym=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,jm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Km=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$m=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zm=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Jm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,e_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,t_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,n_="gl_FragColor = linearToOutputTexel( gl_FragColor );",i_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,r_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,s_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,a_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,o_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,l_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,c_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,u_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,f_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,h_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,d_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,p_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,m_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,__=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,g_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,v_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,x_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,M_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,S_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,E_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,y_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,b_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,T_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,A_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,w_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,R_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,C_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,P_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,U_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,D_=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,I_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,N_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,F_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,B_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,z_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,H_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,G_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,V_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,k_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,W_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,X_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,j_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,K_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,$_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Z_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,J_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Q_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,tg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ng=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ig=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ag=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,og=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,lg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ug=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,dg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,mg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_g=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Mg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ag=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lg=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ug=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Dg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ig=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Og=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zg=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Hg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Wg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$g=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,e0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,t0=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,i0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,r0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:Rm,alphahash_pars_fragment:Cm,alphamap_fragment:Pm,alphamap_pars_fragment:Lm,alphatest_fragment:Um,alphatest_pars_fragment:Dm,aomap_fragment:Im,aomap_pars_fragment:Nm,begin_vertex:Fm,beginnormal_vertex:Om,bsdfs:Bm,iridescence_fragment:zm,bumpmap_pars_fragment:Hm,clipping_planes_fragment:Gm,clipping_planes_pars_fragment:Vm,clipping_planes_pars_vertex:km,clipping_planes_vertex:Wm,color_fragment:Xm,color_pars_fragment:qm,color_pars_vertex:Ym,color_vertex:jm,common:Km,cube_uv_reflection_fragment:$m,defaultnormal_vertex:Zm,displacementmap_pars_vertex:Jm,displacementmap_vertex:Qm,emissivemap_fragment:e_,emissivemap_pars_fragment:t_,colorspace_fragment:n_,colorspace_pars_fragment:i_,envmap_fragment:r_,envmap_common_pars_fragment:s_,envmap_pars_fragment:a_,envmap_pars_vertex:o_,envmap_physical_pars_fragment:x_,envmap_vertex:l_,fog_vertex:c_,fog_pars_vertex:u_,fog_fragment:f_,fog_pars_fragment:h_,gradientmap_pars_fragment:d_,lightmap_fragment:p_,lightmap_pars_fragment:m_,lights_lambert_fragment:__,lights_lambert_pars_fragment:g_,lights_pars_begin:v_,lights_toon_fragment:M_,lights_toon_pars_fragment:S_,lights_phong_fragment:E_,lights_phong_pars_fragment:y_,lights_physical_fragment:b_,lights_physical_pars_fragment:T_,lights_fragment_begin:A_,lights_fragment_maps:w_,lights_fragment_end:R_,logdepthbuf_fragment:C_,logdepthbuf_pars_fragment:P_,logdepthbuf_pars_vertex:L_,logdepthbuf_vertex:U_,map_fragment:D_,map_pars_fragment:I_,map_particle_fragment:N_,map_particle_pars_fragment:F_,metalnessmap_fragment:O_,metalnessmap_pars_fragment:B_,morphcolor_vertex:z_,morphnormal_vertex:H_,morphtarget_pars_vertex:G_,morphtarget_vertex:V_,normal_fragment_begin:k_,normal_fragment_maps:W_,normal_pars_fragment:X_,normal_pars_vertex:q_,normal_vertex:Y_,normalmap_pars_fragment:j_,clearcoat_normal_fragment_begin:K_,clearcoat_normal_fragment_maps:$_,clearcoat_pars_fragment:Z_,iridescence_pars_fragment:J_,opaque_fragment:Q_,packing:eg,premultiplied_alpha_fragment:tg,project_vertex:ng,dithering_fragment:ig,dithering_pars_fragment:rg,roughnessmap_fragment:sg,roughnessmap_pars_fragment:ag,shadowmap_pars_fragment:og,shadowmap_pars_vertex:lg,shadowmap_vertex:cg,shadowmask_pars_fragment:ug,skinbase_vertex:fg,skinning_pars_vertex:hg,skinning_vertex:dg,skinnormal_vertex:pg,specularmap_fragment:mg,specularmap_pars_fragment:_g,tonemapping_fragment:gg,tonemapping_pars_fragment:vg,transmission_fragment:xg,transmission_pars_fragment:Mg,uv_pars_fragment:Sg,uv_pars_vertex:Eg,uv_vertex:yg,worldpos_vertex:bg,background_vert:Tg,background_frag:Ag,backgroundCube_vert:wg,backgroundCube_frag:Rg,cube_vert:Cg,cube_frag:Pg,depth_vert:Lg,depth_frag:Ug,distanceRGBA_vert:Dg,distanceRGBA_frag:Ig,equirect_vert:Ng,equirect_frag:Fg,linedashed_vert:Og,linedashed_frag:Bg,meshbasic_vert:zg,meshbasic_frag:Hg,meshlambert_vert:Gg,meshlambert_frag:Vg,meshmatcap_vert:kg,meshmatcap_frag:Wg,meshnormal_vert:Xg,meshnormal_frag:qg,meshphong_vert:Yg,meshphong_frag:jg,meshphysical_vert:Kg,meshphysical_frag:$g,meshtoon_vert:Zg,meshtoon_frag:Jg,points_vert:Qg,points_frag:e0,shadow_vert:t0,shadow_frag:n0,sprite_vert:i0,sprite_frag:r0},Me={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},un={basic:{uniforms:Ct([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Ct([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Ct([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Ct([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Ct([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Ct([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Ct([Me.points,Me.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Ct([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Ct([Me.common,Me.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Ct([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Ct([Me.sprite,Me.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Ct([Me.common,Me.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Ct([Me.lights,Me.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};un.physical={uniforms:Ct([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const cs={r:0,b:0,g:0};function s0(n,e,t,i,r,s,a){const o=new Ze(0);let l=s===!0?0:1,c,u,f=null,d=0,m=null;function x(p,h){let P=!1,E=h.isScene===!0?h.background:null;switch(E&&E.isTexture&&(E=(h.backgroundBlurriness>0?t:e).get(E)),E===null?v(o,l):E&&E.isColor&&(v(E,1),P=!0),n.xr.getEnvironmentBlendMode()){case"opaque":P=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,a),P=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,a),P=!0;break}(n.autoClear||P)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),E&&(E.isCubeTexture||E.mapping===Ns)?(u===void 0&&(u=new hn(new Nr(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:tr(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,y,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=E.colorSpace!==ke,(f!==E||d!==E.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=E,d=E.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new hn(new yo(2,2),new _i({name:"BackgroundMaterial",uniforms:tr(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=E.colorSpace!==ke,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||d!==E.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=E,d=E.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,h){p.getRGB(cs,$u(n)),i.buffers.color.setClear(cs.r,cs.g,cs.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),l=h,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(o,l)},render:x}}function a0(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function f(W,j,J,V,q){let de=!1;if(a){const oe=v(V,J,j);c!==oe&&(c=oe,m(c.object)),de=h(W,V,J,q),de&&P(W,V,J,q)}else{const oe=j.wireframe===!0;(c.geometry!==V.id||c.program!==J.id||c.wireframe!==oe)&&(c.geometry=V.id,c.program=J.id,c.wireframe=oe,de=!0)}q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),(de||u)&&(u=!1,z(W,j,J,V),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(W){return i.isWebGL2?n.bindVertexArray(W):s.bindVertexArrayOES(W)}function x(W){return i.isWebGL2?n.deleteVertexArray(W):s.deleteVertexArrayOES(W)}function v(W,j,J){const V=J.wireframe===!0;let q=o[W.id];q===void 0&&(q={},o[W.id]=q);let de=q[j.id];de===void 0&&(de={},q[j.id]=de);let oe=de[V];return oe===void 0&&(oe=p(d()),de[V]=oe),oe}function p(W){const j=[],J=[],V=[];for(let q=0;q<r;q++)j[q]=0,J[q]=0,V[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:J,attributeDivisors:V,object:W,attributes:{},index:null}}function h(W,j,J,V){const q=c.attributes,de=j.attributes;let oe=0;const G=J.getAttributes();for(const Y in G)if(G[Y].location>=0){const xe=q[Y];let Se=de[Y];if(Se===void 0&&(Y==="instanceMatrix"&&W.instanceMatrix&&(Se=W.instanceMatrix),Y==="instanceColor"&&W.instanceColor&&(Se=W.instanceColor)),xe===void 0||xe.attribute!==Se||Se&&xe.data!==Se.data)return!0;oe++}return c.attributesNum!==oe||c.index!==V}function P(W,j,J,V){const q={},de=j.attributes;let oe=0;const G=J.getAttributes();for(const Y in G)if(G[Y].location>=0){let xe=de[Y];xe===void 0&&(Y==="instanceMatrix"&&W.instanceMatrix&&(xe=W.instanceMatrix),Y==="instanceColor"&&W.instanceColor&&(xe=W.instanceColor));const Se={};Se.attribute=xe,xe&&xe.data&&(Se.data=xe.data),q[Y]=Se,oe++}c.attributes=q,c.attributesNum=oe,c.index=V}function E(){const W=c.newAttributes;for(let j=0,J=W.length;j<J;j++)W[j]=0}function b(W){T(W,0)}function T(W,j){const J=c.newAttributes,V=c.enabledAttributes,q=c.attributeDivisors;J[W]=1,V[W]===0&&(n.enableVertexAttribArray(W),V[W]=1),q[W]!==j&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](W,j),q[W]=j)}function C(){const W=c.newAttributes,j=c.enabledAttributes;for(let J=0,V=j.length;J<V;J++)j[J]!==W[J]&&(n.disableVertexAttribArray(J),j[J]=0)}function y(W,j,J,V,q,de,oe){oe===!0?n.vertexAttribIPointer(W,j,J,q,de):n.vertexAttribPointer(W,j,J,V,q,de)}function z(W,j,J,V){if(i.isWebGL2===!1&&(W.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const q=V.attributes,de=J.getAttributes(),oe=j.defaultAttributeValues;for(const G in de){const Y=de[G];if(Y.location>=0){let ve=q[G];if(ve===void 0&&(G==="instanceMatrix"&&W.instanceMatrix&&(ve=W.instanceMatrix),G==="instanceColor"&&W.instanceColor&&(ve=W.instanceColor)),ve!==void 0){const xe=ve.normalized,Se=ve.itemSize,Ce=t.get(ve);if(Ce===void 0)continue;const $=Ce.buffer,pe=Ce.type,me=Ce.bytesPerElement,fe=i.isWebGL2===!0&&(pe===n.INT||pe===n.UNSIGNED_INT||ve.gpuType===Uu);if(ve.isInterleavedBufferAttribute){const Ee=ve.data,_=Ee.stride,L=ve.offset;if(Ee.isInstancedInterleavedBuffer){for(let D=0;D<Y.locationSize;D++)T(Y.location+D,Ee.meshPerAttribute);W.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let D=0;D<Y.locationSize;D++)b(Y.location+D);n.bindBuffer(n.ARRAY_BUFFER,$);for(let D=0;D<Y.locationSize;D++)y(Y.location+D,Se/Y.locationSize,pe,xe,_*me,(L+Se/Y.locationSize*D)*me,fe)}else{if(ve.isInstancedBufferAttribute){for(let Ee=0;Ee<Y.locationSize;Ee++)T(Y.location+Ee,ve.meshPerAttribute);W.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ee=0;Ee<Y.locationSize;Ee++)b(Y.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,$);for(let Ee=0;Ee<Y.locationSize;Ee++)y(Y.location+Ee,Se/Y.locationSize,pe,xe,Se*me,Se/Y.locationSize*Ee*me,fe)}}else if(oe!==void 0){const xe=oe[G];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(Y.location,xe);break;case 3:n.vertexAttrib3fv(Y.location,xe);break;case 4:n.vertexAttrib4fv(Y.location,xe);break;default:n.vertexAttrib1fv(Y.location,xe)}}}}C()}function S(){re();for(const W in o){const j=o[W];for(const J in j){const V=j[J];for(const q in V)x(V[q].object),delete V[q];delete j[J]}delete o[W]}}function R(W){if(o[W.id]===void 0)return;const j=o[W.id];for(const J in j){const V=j[J];for(const q in V)x(V[q].object),delete V[q];delete j[J]}delete o[W.id]}function ae(W){for(const j in o){const J=o[j];if(J[W.id]===void 0)continue;const V=J[W.id];for(const q in V)x(V[q].object),delete V[q];delete J[W.id]}}function re(){N(),u=!0,c!==l&&(c=l,m(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:re,resetDefaultState:N,dispose:S,releaseStatesOfGeometry:R,releaseStatesOfProgram:ae,initAttributes:E,enableAttribute:b,disableUnusedAttributes:C}}function o0(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let d,m;if(r)d=n,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function l0(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(y){if(y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),P=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=d>0,b=a||e.has("OES_texture_float"),T=E&&b,C=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:P,vertexTextures:E,floatFragmentTextures:b,floatVertexTextures:T,maxSamples:C}}function c0(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new ii,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,m){const x=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,h=n.get(f);if(!r||x===null||x.length===0||s&&!p)s?u(null):c();else{const P=s?0:i,E=P*4;let b=h.clippingState||null;l.value=b,b=u(x,d,E,m);for(let T=0;T!==E;++T)b[T]=t[T];h.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=P}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,m,x){const v=f!==null?f.length:0;let p=null;if(v!==0){if(p=l.value,x!==!0||p===null){const h=m+v*4,P=d.matrixWorldInverse;o.getNormalMatrix(P),(p===null||p.length<h)&&(p=new Float32Array(h));for(let E=0,b=m;E!==v;++E,b+=4)a.copy(f[E]).applyMatrix4(P,o),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function u0(n){let e=new WeakMap;function t(a,o){return o===Ga?a.mapping=Ji:o===Va&&(a.mapping=Qi),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Ga||o===Va)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new bm(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class ef extends Zu{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gi=4,ic=[.125,.215,.35,.446,.526,.582],oi=20,Sa=new ef,rc=new Ze;let Ea=null;const ri=(1+Math.sqrt(5))/2,Fi=1/ri,sc=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,ri,Fi),new B(0,ri,-Fi),new B(Fi,0,ri),new B(-Fi,0,ri),new B(ri,Fi,0),new B(-ri,Fi,0)];class ac{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ea=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ea),e.scissorTest=!1,us(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ji||e.mapping===Qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ea=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:Lr,format:Qt,colorSpace:_n,depthBuffer:!1},r=oc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=f0(s)),this._blurMaterial=h0(s,e,t)}return r}_compileMaterial(e){const t=new hn(this._lodPlanes[0],e);this._renderer.compile(t,Sa)}_sceneToCubeUV(e,t,i,r){const o=new kt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(rc),u.toneMapping=Cn,u.autoClear=!1;const m=new Yu({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),x=new hn(new Nr,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(rc),v=!0);for(let h=0;h<6;h++){const P=h%3;P===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):P===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const E=this._cubeSize;us(r,P*E,h>2?E:0,E,E),u.setRenderTarget(r),v&&u.render(x,o),u.render(e,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ji||e.mapping===Qi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new hn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;us(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Sa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=sc[(r-1)%sc.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new hn(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*oi-1),v=s/x,p=isFinite(s)?1+Math.floor(u*v):oi;p>oi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${oi}`);const h=[];let P=0;for(let y=0;y<oi;++y){const z=y/v,S=Math.exp(-z*z/2);h.push(S),y===0?P+=S:y<p&&(P+=2*S)}for(let y=0;y<h.length;y++)h[y]=h[y]/P;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=x,d.mipInt.value=E-i;const b=this._sizeLods[r],T=3*b*(r>E-Gi?r-E+Gi:0),C=4*(this._cubeSize-b);us(t,T,C,3*b,2*b),l.setRenderTarget(t),l.render(f,Sa)}}function f0(n){const e=[],t=[],i=[];let r=n;const s=n-Gi+1+ic.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Gi?l=ic[a-n+Gi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,x=6,v=3,p=2,h=1,P=new Float32Array(v*x*m),E=new Float32Array(p*x*m),b=new Float32Array(h*x*m);for(let C=0;C<m;C++){const y=C%3*2/3-1,z=C>2?0:-1,S=[y,z,0,y+2/3,z,0,y+2/3,z+1,0,y,z,0,y+2/3,z+1,0,y,z+1,0];P.set(S,v*x*C),E.set(d,p*x*C);const R=[C,C,C,C,C,C];b.set(R,h*x*C)}const T=new jn;T.setAttribute("position",new pn(P,v)),T.setAttribute("uv",new pn(E,p)),T.setAttribute("faceIndex",new pn(b,h)),e.push(T),r>Gi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function oc(n,e,t){const i=new pi(n,e,t);return i.texture.mapping=Ns,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function us(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function h0(n,e,t){const i=new Float32Array(oi),r=new B(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function lc(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function cc(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function bo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function d0(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ga||l===Va,u=l===Ji||l===Qi;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new ac(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new ac(n));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function p0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function m0(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);for(const x in d.morphAttributes){const v=d.morphAttributes[x];for(let p=0,h=v.length;p<h;p++)e.remove(v[p])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const x in d)e.update(d[x],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const x in m){const v=m[x];for(let p=0,h=v.length;p<h;p++)e.update(v[p],n.ARRAY_BUFFER)}}function c(f){const d=[],m=f.index,x=f.attributes.position;let v=0;if(m!==null){const P=m.array;v=m.version;for(let E=0,b=P.length;E<b;E+=3){const T=P[E+0],C=P[E+1],y=P[E+2];d.push(T,C,C,y,y,T)}}else{const P=x.array;v=x.version;for(let E=0,b=P.length/3-1;E<b;E+=3){const T=E+0,C=E+1,y=E+2;d.push(T,C,C,y,y,T)}}const p=new(Gu(d)?Ku:ju)(d,1);p.version=v;const h=s.get(f);h&&e.remove(h),s.set(f,p)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function _0(n,e,t,i){const r=i.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,m){n.drawElements(s,m,o,d*l),t.update(m,s,1)}function f(d,m,x){if(x===0)return;let v,p;if(r)v=n,p="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[p](s,m,o,d*l,x),t.update(m,s,x)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function g0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function v0(n,e){return n[0]-e[0]}function x0(n,e){return Math.abs(e[1])-Math.abs(n[1])}function M0(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new gt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=x!==void 0?x.length:0;let p=s.get(u);if(p===void 0||p.count!==v){let j=function(){N.dispose(),s.delete(u),u.removeEventListener("dispose",j)};var m=j;p!==void 0&&p.texture.dispose();const E=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],y=u.morphAttributes.normal||[],z=u.morphAttributes.color||[];let S=0;E===!0&&(S=1),b===!0&&(S=2),T===!0&&(S=3);let R=u.attributes.position.count*S,ae=1;R>e.maxTextureSize&&(ae=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const re=new Float32Array(R*ae*4*v),N=new Wu(re,R,ae,v);N.type=Hn,N.needsUpdate=!0;const W=S*4;for(let J=0;J<v;J++){const V=C[J],q=y[J],de=z[J],oe=R*ae*4*J;for(let G=0;G<V.count;G++){const Y=G*W;E===!0&&(a.fromBufferAttribute(V,G),re[oe+Y+0]=a.x,re[oe+Y+1]=a.y,re[oe+Y+2]=a.z,re[oe+Y+3]=0),b===!0&&(a.fromBufferAttribute(q,G),re[oe+Y+4]=a.x,re[oe+Y+5]=a.y,re[oe+Y+6]=a.z,re[oe+Y+7]=0),T===!0&&(a.fromBufferAttribute(de,G),re[oe+Y+8]=a.x,re[oe+Y+9]=a.y,re[oe+Y+10]=a.z,re[oe+Y+11]=de.itemSize===4?a.w:1)}}p={count:v,texture:N,size:new ze(R,ae)},s.set(u,p),u.addEventListener("dispose",j)}let h=0;for(let E=0;E<d.length;E++)h+=d[E];const P=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",P),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const x=d===void 0?0:d.length;let v=i[u.id];if(v===void 0||v.length!==x){v=[];for(let b=0;b<x;b++)v[b]=[b,0];i[u.id]=v}for(let b=0;b<x;b++){const T=v[b];T[0]=b,T[1]=d[b]}v.sort(x0);for(let b=0;b<8;b++)b<x&&v[b][1]?(o[b][0]=v[b][0],o[b][1]=v[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(v0);const p=u.morphAttributes.position,h=u.morphAttributes.normal;let P=0;for(let b=0;b<8;b++){const T=o[b],C=T[0],y=T[1];C!==Number.MAX_SAFE_INTEGER&&y?(p&&u.getAttribute("morphTarget"+b)!==p[C]&&u.setAttribute("morphTarget"+b,p[C]),h&&u.getAttribute("morphNormal"+b)!==h[C]&&u.setAttribute("morphNormal"+b,h[C]),r[b]=y,P+=y):(p&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),h&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),r[b]=0)}const E=u.morphTargetsRelative?1:1-P;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function S0(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const tf=new zt,nf=new Wu,rf=new lm,sf=new Ju,uc=[],fc=[],hc=new Float32Array(16),dc=new Float32Array(9),pc=new Float32Array(4);function sr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=uc[r];if(s===void 0&&(s=new Float32Array(r),uc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Os(n,e){let t=fc[e];t===void 0&&(t=new Int32Array(e),fc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function E0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function y0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2fv(this.addr,e),dt(t,e)}}function b0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;n.uniform3fv(this.addr,e),dt(t,e)}}function T0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4fv(this.addr,e),dt(t,e)}}function A0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,i))return;pc.set(i),n.uniformMatrix2fv(this.addr,!1,pc),dt(t,i)}}function w0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,i))return;dc.set(i),n.uniformMatrix3fv(this.addr,!1,dc),dt(t,i)}}function R0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,i))return;hc.set(i),n.uniformMatrix4fv(this.addr,!1,hc),dt(t,i)}}function C0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function P0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2iv(this.addr,e),dt(t,e)}}function L0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3iv(this.addr,e),dt(t,e)}}function U0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4iv(this.addr,e),dt(t,e)}}function D0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function I0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2uiv(this.addr,e),dt(t,e)}}function N0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3uiv(this.addr,e),dt(t,e)}}function F0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4uiv(this.addr,e),dt(t,e)}}function O0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||tf,r)}function B0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||rf,r)}function z0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||sf,r)}function H0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||nf,r)}function G0(n){switch(n){case 5126:return E0;case 35664:return y0;case 35665:return b0;case 35666:return T0;case 35674:return A0;case 35675:return w0;case 35676:return R0;case 5124:case 35670:return C0;case 35667:case 35671:return P0;case 35668:case 35672:return L0;case 35669:case 35673:return U0;case 5125:return D0;case 36294:return I0;case 36295:return N0;case 36296:return F0;case 35678:case 36198:case 36298:case 36306:case 35682:return O0;case 35679:case 36299:case 36307:return B0;case 35680:case 36300:case 36308:case 36293:return z0;case 36289:case 36303:case 36311:case 36292:return H0}}function V0(n,e){n.uniform1fv(this.addr,e)}function k0(n,e){const t=sr(e,this.size,2);n.uniform2fv(this.addr,t)}function W0(n,e){const t=sr(e,this.size,3);n.uniform3fv(this.addr,t)}function X0(n,e){const t=sr(e,this.size,4);n.uniform4fv(this.addr,t)}function q0(n,e){const t=sr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Y0(n,e){const t=sr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function j0(n,e){const t=sr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function K0(n,e){n.uniform1iv(this.addr,e)}function $0(n,e){n.uniform2iv(this.addr,e)}function Z0(n,e){n.uniform3iv(this.addr,e)}function J0(n,e){n.uniform4iv(this.addr,e)}function Q0(n,e){n.uniform1uiv(this.addr,e)}function ev(n,e){n.uniform2uiv(this.addr,e)}function tv(n,e){n.uniform3uiv(this.addr,e)}function nv(n,e){n.uniform4uiv(this.addr,e)}function iv(n,e,t){const i=this.cache,r=e.length,s=Os(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),dt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||tf,s[a])}function rv(n,e,t){const i=this.cache,r=e.length,s=Os(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),dt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||rf,s[a])}function sv(n,e,t){const i=this.cache,r=e.length,s=Os(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),dt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||sf,s[a])}function av(n,e,t){const i=this.cache,r=e.length,s=Os(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),dt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||nf,s[a])}function ov(n){switch(n){case 5126:return V0;case 35664:return k0;case 35665:return W0;case 35666:return X0;case 35674:return q0;case 35675:return Y0;case 35676:return j0;case 5124:case 35670:return K0;case 35667:case 35671:return $0;case 35668:case 35672:return Z0;case 35669:case 35673:return J0;case 5125:return Q0;case 36294:return ev;case 36295:return tv;case 36296:return nv;case 35678:case 36198:case 36298:case 36306:case 35682:return iv;case 35679:case 36299:case 36307:return rv;case 35680:case 36300:case 36308:case 36293:return sv;case 36289:case 36303:case 36311:case 36292:return av}}class lv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=G0(t.type)}}class cv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=ov(t.type)}}class uv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const ya=/(\w+)(\])?(\[|\.)?/g;function mc(n,e){n.seq.push(e),n.map[e.id]=e}function fv(n,e,t){const i=n.name,r=i.length;for(ya.lastIndex=0;;){const s=ya.exec(i),a=ya.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){mc(t,c===void 0?new lv(o,n,e):new cv(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new uv(o),mc(t,f)),t=f}}}class _s{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);fv(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function _c(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let hv=0;function dv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function pv(n){switch(n){case _n:return["Linear","( value )"];case ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function gc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+dv(n.getShaderSource(e),a)}else return r}function mv(n,e){const t=pv(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function _v(n,e){let t;switch(e){case Ap:t="Linear";break;case wp:t="Reinhard";break;case Rp:t="OptimizedCineon";break;case Cp:t="ACESFilmic";break;case Pp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function gv(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(mr).join(`
`)}function vv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function xv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function mr(n){return n!==""}function vc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Mv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ja(n){return n.replace(Mv,Ev)}const Sv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Ev(n,e){let t=Ge[e];if(t===void 0){const i=Sv.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ja(t)}const yv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mc(n){return n.replace(yv,bv)}function bv(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Sc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Tv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ru?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===rp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Tn&&(e="SHADOWMAP_TYPE_VSM"),e}function Av(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ji:case Qi:e="ENVMAP_TYPE_CUBE";break;case Ns:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Qi:e="ENVMAP_MODE_REFRACTION";break}return e}function Rv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case vo:e="ENVMAP_BLENDING_MULTIPLY";break;case bp:e="ENVMAP_BLENDING_MIX";break;case Tp:e="ENVMAP_BLENDING_ADD";break}return e}function Cv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Pv(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Tv(t),c=Av(t),u=wv(t),f=Rv(t),d=Cv(t),m=t.isWebGL2?"":gv(t),x=vv(s),v=r.createProgram();let p,h,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(mr).join(`
`),p.length>0&&(p+=`
`),h=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(mr).join(`
`),h.length>0&&(h+=`
`)):(p=[Sc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),h=[m,Sc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cn?"#define TONE_MAPPING":"",t.toneMapping!==Cn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Cn?_v("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,mv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mr).join(`
`)),a=ja(a),a=vc(a,t),a=xc(a,t),o=ja(o),o=vc(o,t),o=xc(o,t),a=Mc(a),o=Mc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===Hl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=P+p+a,b=P+h+o,T=_c(r,r.VERTEX_SHADER,E),C=_c(r,r.FRAGMENT_SHADER,b);if(r.attachShader(v,T),r.attachShader(v,C),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),n.debug.checkShaderErrors){const S=r.getProgramInfoLog(v).trim(),R=r.getShaderInfoLog(T).trim(),ae=r.getShaderInfoLog(C).trim();let re=!0,N=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(re=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,T,C);else{const W=gc(r,T,"vertex"),j=gc(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+W+`
`+j)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(R===""||ae==="")&&(N=!1);N&&(this.diagnostics={runnable:re,programLog:S,vertexShader:{log:R,prefix:p},fragmentShader:{log:ae,prefix:h}})}r.deleteShader(T),r.deleteShader(C);let y;this.getUniforms=function(){return y===void 0&&(y=new _s(r,v)),y};let z;return this.getAttributes=function(){return z===void 0&&(z=xv(r,v)),z},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=C,this}let Lv=0;class Uv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Dv(e),t.set(e,i)),i}}class Dv{constructor(e){this.id=Lv++,this.code=e,this.usedTimes=0}}function Iv(n,e,t,i,r,s,a){const o=new So,l=new Uv,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function p(S,R,ae,re,N){const W=re.fog,j=N.geometry,J=S.isMeshStandardMaterial?re.environment:null,V=(S.isMeshStandardMaterial?t:e).get(S.envMap||J),q=V&&V.mapping===Ns?V.image.height:null,de=x[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const oe=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,G=oe!==void 0?oe.length:0;let Y=0;j.morphAttributes.position!==void 0&&(Y=1),j.morphAttributes.normal!==void 0&&(Y=2),j.morphAttributes.color!==void 0&&(Y=3);let ve,xe,Se,Ce;if(de){const an=un[de];ve=an.vertexShader,xe=an.fragmentShader}else ve=S.vertexShader,xe=S.fragmentShader,l.update(S),Se=l.getVertexShaderID(S),Ce=l.getFragmentShaderID(S);const $=n.getRenderTarget(),pe=N.isInstancedMesh===!0,me=!!S.map,fe=!!S.matcap,Ee=!!V,_=!!S.aoMap,L=!!S.lightMap,D=!!S.bumpMap,k=!!S.normalMap,O=!!S.displacementMap,ce=!!S.emissiveMap,ue=!!S.metalnessMap,Z=!!S.roughnessMap,le=S.anisotropy>0,se=S.clearcoat>0,Ae=S.iridescence>0,M=S.sheen>0,g=S.transmission>0,I=le&&!!S.anisotropyMap,Q=se&&!!S.clearcoatMap,ie=se&&!!S.clearcoatNormalMap,w=se&&!!S.clearcoatRoughnessMap,ee=Ae&&!!S.iridescenceMap,he=Ae&&!!S.iridescenceThicknessMap,X=M&&!!S.sheenColorMap,Re=M&&!!S.sheenRoughnessMap,Le=!!S.specularMap,Ue=!!S.specularColorMap,ye=!!S.specularIntensityMap,be=g&&!!S.transmissionMap,De=g&&!!S.thicknessMap,Ye=!!S.gradientMap,U=!!S.alphaMap,Te=S.alphaTest>0,K=!!S.alphaHash,ge=!!S.extensions,we=!!j.attributes.uv1,$e=!!j.attributes.uv2,tt=!!j.attributes.uv3;return{isWebGL2:u,shaderID:de,shaderType:S.type,shaderName:S.name,vertexShader:ve,fragmentShader:xe,defines:S.defines,customVertexShaderID:Se,customFragmentShaderID:Ce,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,instancing:pe,instancingColor:pe&&N.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:$===null?n.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:_n,map:me,matcap:fe,envMap:Ee,envMapMode:Ee&&V.mapping,envMapCubeUVHeight:q,aoMap:_,lightMap:L,bumpMap:D,normalMap:k,displacementMap:d&&O,emissiveMap:ce,normalMapObjectSpace:k&&S.normalMapType===kp,normalMapTangentSpace:k&&S.normalMapType===zu,metalnessMap:ue,roughnessMap:Z,anisotropy:le,anisotropyMap:I,clearcoat:se,clearcoatMap:Q,clearcoatNormalMap:ie,clearcoatRoughnessMap:w,iridescence:Ae,iridescenceMap:ee,iridescenceThicknessMap:he,sheen:M,sheenColorMap:X,sheenRoughnessMap:Re,specularMap:Le,specularColorMap:Ue,specularIntensityMap:ye,transmission:g,transmissionMap:be,thicknessMap:De,gradientMap:Ye,opaque:S.transparent===!1&&S.blending===qi,alphaMap:U,alphaTest:Te,alphaHash:K,combine:S.combine,mapUv:me&&v(S.map.channel),aoMapUv:_&&v(S.aoMap.channel),lightMapUv:L&&v(S.lightMap.channel),bumpMapUv:D&&v(S.bumpMap.channel),normalMapUv:k&&v(S.normalMap.channel),displacementMapUv:O&&v(S.displacementMap.channel),emissiveMapUv:ce&&v(S.emissiveMap.channel),metalnessMapUv:ue&&v(S.metalnessMap.channel),roughnessMapUv:Z&&v(S.roughnessMap.channel),anisotropyMapUv:I&&v(S.anisotropyMap.channel),clearcoatMapUv:Q&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:ie&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:w&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:he&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:X&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Re&&v(S.sheenRoughnessMap.channel),specularMapUv:Le&&v(S.specularMap.channel),specularColorMapUv:Ue&&v(S.specularColorMap.channel),specularIntensityMapUv:ye&&v(S.specularIntensityMap.channel),transmissionMapUv:be&&v(S.transmissionMap.channel),thicknessMapUv:De&&v(S.thicknessMap.channel),alphaMapUv:U&&v(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(k||le),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,vertexUv1s:we,vertexUv2s:$e,vertexUv3s:tt,pointsUvs:N.isPoints===!0&&!!j.attributes.uv&&(me||U),fog:!!W,useFog:S.fog===!0,fogExp2:W&&W.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:N.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:Y,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&ae.length>0,shadowMapType:n.shadowMap.type,toneMapping:S.toneMapped?n.toneMapping:Cn,useLegacyLights:n.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===wn,flipSided:S.side===Dt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ge&&S.extensions.derivatives===!0,extensionFragDepth:ge&&S.extensions.fragDepth===!0,extensionDrawBuffers:ge&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ge&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function h(S){const R=[];if(S.shaderID?R.push(S.shaderID):(R.push(S.customVertexShaderID),R.push(S.customFragmentShaderID)),S.defines!==void 0)for(const ae in S.defines)R.push(ae),R.push(S.defines[ae]);return S.isRawShaderMaterial===!1&&(P(R,S),E(R,S),R.push(n.outputColorSpace)),R.push(S.customProgramCacheKey),R.join()}function P(S,R){S.push(R.precision),S.push(R.outputColorSpace),S.push(R.envMapMode),S.push(R.envMapCubeUVHeight),S.push(R.mapUv),S.push(R.alphaMapUv),S.push(R.lightMapUv),S.push(R.aoMapUv),S.push(R.bumpMapUv),S.push(R.normalMapUv),S.push(R.displacementMapUv),S.push(R.emissiveMapUv),S.push(R.metalnessMapUv),S.push(R.roughnessMapUv),S.push(R.anisotropyMapUv),S.push(R.clearcoatMapUv),S.push(R.clearcoatNormalMapUv),S.push(R.clearcoatRoughnessMapUv),S.push(R.iridescenceMapUv),S.push(R.iridescenceThicknessMapUv),S.push(R.sheenColorMapUv),S.push(R.sheenRoughnessMapUv),S.push(R.specularMapUv),S.push(R.specularColorMapUv),S.push(R.specularIntensityMapUv),S.push(R.transmissionMapUv),S.push(R.thicknessMapUv),S.push(R.combine),S.push(R.fogExp2),S.push(R.sizeAttenuation),S.push(R.morphTargetsCount),S.push(R.morphAttributeCount),S.push(R.numDirLights),S.push(R.numPointLights),S.push(R.numSpotLights),S.push(R.numSpotLightMaps),S.push(R.numHemiLights),S.push(R.numRectAreaLights),S.push(R.numDirLightShadows),S.push(R.numPointLightShadows),S.push(R.numSpotLightShadows),S.push(R.numSpotLightShadowsWithMaps),S.push(R.shadowMapType),S.push(R.toneMapping),S.push(R.numClippingPlanes),S.push(R.numClipIntersection),S.push(R.depthPacking)}function E(S,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),R.anisotropy&&o.enable(17),S.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),S.push(o.mask)}function b(S){const R=x[S.type];let ae;if(R){const re=un[R];ae=Mm.clone(re.uniforms)}else ae=S.uniforms;return ae}function T(S,R){let ae;for(let re=0,N=c.length;re<N;re++){const W=c[re];if(W.cacheKey===R){ae=W,++ae.usedTimes;break}}return ae===void 0&&(ae=new Pv(n,R,S,s),c.push(ae)),ae}function C(S){if(--S.usedTimes===0){const R=c.indexOf(S);c[R]=c[c.length-1],c.pop(),S.destroy()}}function y(S){l.remove(S)}function z(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:b,acquireProgram:T,releaseProgram:C,releaseShaderCache:y,programs:c,dispose:z}}function Nv(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Fv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ec(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function yc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,d,m,x,v,p){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:x,renderOrder:f.renderOrder,z:v,group:p},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=x,h.renderOrder=f.renderOrder,h.z=v,h.group=p),e++,h}function o(f,d,m,x,v,p){const h=a(f,d,m,x,v,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function l(f,d,m,x,v,p){const h=a(f,d,m,x,v,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||Fv),i.length>1&&i.sort(d||Ec),r.length>1&&r.sort(d||Ec)}function u(){for(let f=e,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Ov(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new yc,n.set(i,[a])):r>=s.length?(a=new yc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Bv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Ze};break;case"SpotLight":t={position:new B,direction:new B,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function zv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Hv=0;function Gv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Vv(n,e){const t=new Bv,i=zv(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new B);const s=new B,a=new ft,o=new ft;function l(u,f){let d=0,m=0,x=0;for(let ae=0;ae<9;ae++)r.probe[ae].set(0,0,0);let v=0,p=0,h=0,P=0,E=0,b=0,T=0,C=0,y=0,z=0;u.sort(Gv);const S=f===!0?Math.PI:1;for(let ae=0,re=u.length;ae<re;ae++){const N=u[ae],W=N.color,j=N.intensity,J=N.distance,V=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=W.r*j*S,m+=W.g*j*S,x+=W.b*j*S;else if(N.isLightProbe)for(let q=0;q<9;q++)r.probe[q].addScaledVector(N.sh.coefficients[q],j);else if(N.isDirectionalLight){const q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity*S),N.castShadow){const de=N.shadow,oe=i.get(N);oe.shadowBias=de.bias,oe.shadowNormalBias=de.normalBias,oe.shadowRadius=de.radius,oe.shadowMapSize=de.mapSize,r.directionalShadow[v]=oe,r.directionalShadowMap[v]=V,r.directionalShadowMatrix[v]=N.shadow.matrix,b++}r.directional[v]=q,v++}else if(N.isSpotLight){const q=t.get(N);q.position.setFromMatrixPosition(N.matrixWorld),q.color.copy(W).multiplyScalar(j*S),q.distance=J,q.coneCos=Math.cos(N.angle),q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),q.decay=N.decay,r.spot[h]=q;const de=N.shadow;if(N.map&&(r.spotLightMap[y]=N.map,y++,de.updateMatrices(N),N.castShadow&&z++),r.spotLightMatrix[h]=de.matrix,N.castShadow){const oe=i.get(N);oe.shadowBias=de.bias,oe.shadowNormalBias=de.normalBias,oe.shadowRadius=de.radius,oe.shadowMapSize=de.mapSize,r.spotShadow[h]=oe,r.spotShadowMap[h]=V,C++}h++}else if(N.isRectAreaLight){const q=t.get(N);q.color.copy(W).multiplyScalar(j),q.halfWidth.set(N.width*.5,0,0),q.halfHeight.set(0,N.height*.5,0),r.rectArea[P]=q,P++}else if(N.isPointLight){const q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity*S),q.distance=N.distance,q.decay=N.decay,N.castShadow){const de=N.shadow,oe=i.get(N);oe.shadowBias=de.bias,oe.shadowNormalBias=de.normalBias,oe.shadowRadius=de.radius,oe.shadowMapSize=de.mapSize,oe.shadowCameraNear=de.camera.near,oe.shadowCameraFar=de.camera.far,r.pointShadow[p]=oe,r.pointShadowMap[p]=V,r.pointShadowMatrix[p]=N.shadow.matrix,T++}r.point[p]=q,p++}else if(N.isHemisphereLight){const q=t.get(N);q.skyColor.copy(N.color).multiplyScalar(j*S),q.groundColor.copy(N.groundColor).multiplyScalar(j*S),r.hemi[E]=q,E++}}P>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_FLOAT_1,r.rectAreaLTC2=Me.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_HALF_1,r.rectAreaLTC2=Me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=x;const R=r.hash;(R.directionalLength!==v||R.pointLength!==p||R.spotLength!==h||R.rectAreaLength!==P||R.hemiLength!==E||R.numDirectionalShadows!==b||R.numPointShadows!==T||R.numSpotShadows!==C||R.numSpotMaps!==y)&&(r.directional.length=v,r.spot.length=h,r.rectArea.length=P,r.point.length=p,r.hemi.length=E,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=C+y-z,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=z,R.directionalLength=v,R.pointLength=p,R.spotLength=h,R.rectAreaLength=P,R.hemiLength=E,R.numDirectionalShadows=b,R.numPointShadows=T,R.numSpotShadows=C,R.numSpotMaps=y,r.version=Hv++)}function c(u,f){let d=0,m=0,x=0,v=0,p=0;const h=f.matrixWorldInverse;for(let P=0,E=u.length;P<E;P++){const b=u[P];if(b.isDirectionalLight){const T=r.directional[d];T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(h),d++}else if(b.isSpotLight){const T=r.spot[x];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(h),T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(h),x++}else if(b.isRectAreaLight){const T=r.rectArea[v];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(h),o.identity(),a.copy(b.matrixWorld),a.premultiply(h),o.extractRotation(a),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),v++}else if(b.isPointLight){const T=r.point[m];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(h),m++}else if(b.isHemisphereLight){const T=r.hemi[p];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(h),p++}}}return{setup:l,setupView:c,state:r}}function bc(n,e){const t=new Vv(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function kv(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new bc(n,e),t.set(s,[l])):a>=o.length?(l=new bc(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Wv extends Ir{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xv extends Ir{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jv(n,e,t){let i=new Eo;const r=new ze,s=new ze,a=new gt,o=new Wv({depthPacking:Vp}),l=new Xv,c={},u=t.maxTextureSize,f={[Yn]:Dt,[Dt]:Yn,[wn]:wn},d=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:qv,fragmentShader:Yv}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const x=new jn;x.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new hn(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ru;let h=this.type;this.render=function(T,C,y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const z=n.getRenderTarget(),S=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),ae=n.state;ae.setBlending(Wn),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const re=h!==Tn&&this.type===Tn,N=h===Tn&&this.type!==Tn;for(let W=0,j=T.length;W<j;W++){const J=T[W],V=J.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const q=V.getFrameExtents();if(r.multiply(q),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/q.x),r.x=s.x*q.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/q.y),r.y=s.y*q.y,V.mapSize.y=s.y)),V.map===null||re===!0||N===!0){const oe=this.type!==Tn?{minFilter:Pt,magFilter:Pt}:{};V.map!==null&&V.map.dispose(),V.map=new pi(r.x,r.y,oe),V.map.texture.name=J.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const de=V.getViewportCount();for(let oe=0;oe<de;oe++){const G=V.getViewport(oe);a.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),ae.viewport(a),V.updateMatrices(J,oe),i=V.getFrustum(),b(C,y,V.camera,J,this.type)}V.isPointLightShadow!==!0&&this.type===Tn&&P(V,y),V.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(z,S,R)};function P(T,C){const y=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new pi(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(C,null,y,d,v,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(C,null,y,m,v,null)}function E(T,C,y,z){let S=null;const R=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)S=R;else if(S=y.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const ae=S.uuid,re=C.uuid;let N=c[ae];N===void 0&&(N={},c[ae]=N);let W=N[re];W===void 0&&(W=S.clone(),N[re]=W),S=W}if(S.visible=C.visible,S.wireframe=C.wireframe,z===Tn?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:f[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,y.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const ae=n.properties.get(S);ae.light=y}return S}function b(T,C,y,z,S){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Tn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);const re=e.update(T),N=T.material;if(Array.isArray(N)){const W=re.groups;for(let j=0,J=W.length;j<J;j++){const V=W[j],q=N[V.materialIndex];if(q&&q.visible){const de=E(T,q,z,S);n.renderBufferDirect(y,null,re,de,T,V)}}}else if(N.visible){const W=E(T,N,z,S);n.renderBufferDirect(y,null,re,W,T,null)}}const ae=T.children;for(let re=0,N=ae.length;re<N;re++)b(ae[re],C,y,z,S)}}function Kv(n,e,t){const i=t.isWebGL2;function r(){let U=!1;const Te=new gt;let K=null;const ge=new gt(0,0,0,0);return{setMask:function(we){K!==we&&!U&&(n.colorMask(we,we,we,we),K=we)},setLocked:function(we){U=we},setClear:function(we,$e,tt,pt,an){an===!0&&(we*=pt,$e*=pt,tt*=pt),Te.set(we,$e,tt,pt),ge.equals(Te)===!1&&(n.clearColor(we,$e,tt,pt),ge.copy(Te))},reset:function(){U=!1,K=null,ge.set(-1,0,0,0)}}}function s(){let U=!1,Te=null,K=null,ge=null;return{setTest:function(we){we?$(n.DEPTH_TEST):pe(n.DEPTH_TEST)},setMask:function(we){Te!==we&&!U&&(n.depthMask(we),Te=we)},setFunc:function(we){if(K!==we){switch(we){case gp:n.depthFunc(n.NEVER);break;case vp:n.depthFunc(n.ALWAYS);break;case xp:n.depthFunc(n.LESS);break;case Ha:n.depthFunc(n.LEQUAL);break;case Mp:n.depthFunc(n.EQUAL);break;case Sp:n.depthFunc(n.GEQUAL);break;case Ep:n.depthFunc(n.GREATER);break;case yp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=we}},setLocked:function(we){U=we},setClear:function(we){ge!==we&&(n.clearDepth(we),ge=we)},reset:function(){U=!1,Te=null,K=null,ge=null}}}function a(){let U=!1,Te=null,K=null,ge=null,we=null,$e=null,tt=null,pt=null,an=null;return{setTest:function(it){U||(it?$(n.STENCIL_TEST):pe(n.STENCIL_TEST))},setMask:function(it){Te!==it&&!U&&(n.stencilMask(it),Te=it)},setFunc:function(it,on,Tt){(K!==it||ge!==on||we!==Tt)&&(n.stencilFunc(it,on,Tt),K=it,ge=on,we=Tt)},setOp:function(it,on,Tt){($e!==it||tt!==on||pt!==Tt)&&(n.stencilOp(it,on,Tt),$e=it,tt=on,pt=Tt)},setLocked:function(it){U=it},setClear:function(it){an!==it&&(n.clearStencil(it),an=it)},reset:function(){U=!1,Te=null,K=null,ge=null,we=null,$e=null,tt=null,pt=null,an=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let d={},m={},x=new WeakMap,v=[],p=null,h=!1,P=null,E=null,b=null,T=null,C=null,y=null,z=null,S=!1,R=null,ae=null,re=null,N=null,W=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,V=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(q)[1]),J=V>=1):q.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),J=V>=2);let de=null,oe={};const G=n.getParameter(n.SCISSOR_BOX),Y=n.getParameter(n.VIEWPORT),ve=new gt().fromArray(G),xe=new gt().fromArray(Y);function Se(U,Te,K,ge){const we=new Uint8Array(4),$e=n.createTexture();n.bindTexture(U,$e),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let tt=0;tt<K;tt++)i&&(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)?n.texImage3D(Te,0,n.RGBA,1,1,ge,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(Te+tt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return $e}const Ce={};Ce[n.TEXTURE_2D]=Se(n.TEXTURE_2D,n.TEXTURE_2D,1),Ce[n.TEXTURE_CUBE_MAP]=Se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ce[n.TEXTURE_2D_ARRAY]=Se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ce[n.TEXTURE_3D]=Se(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),$(n.DEPTH_TEST),l.setFunc(Ha),O(!1),ce(cl),$(n.CULL_FACE),D(Wn);function $(U){d[U]!==!0&&(n.enable(U),d[U]=!0)}function pe(U){d[U]!==!1&&(n.disable(U),d[U]=!1)}function me(U,Te){return m[U]!==Te?(n.bindFramebuffer(U,Te),m[U]=Te,i&&(U===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Te),U===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Te)),!0):!1}function fe(U,Te){let K=v,ge=!1;if(U)if(K=x.get(Te),K===void 0&&(K=[],x.set(Te,K)),U.isWebGLMultipleRenderTargets){const we=U.texture;if(K.length!==we.length||K[0]!==n.COLOR_ATTACHMENT0){for(let $e=0,tt=we.length;$e<tt;$e++)K[$e]=n.COLOR_ATTACHMENT0+$e;K.length=we.length,ge=!0}}else K[0]!==n.COLOR_ATTACHMENT0&&(K[0]=n.COLOR_ATTACHMENT0,ge=!0);else K[0]!==n.BACK&&(K[0]=n.BACK,ge=!0);ge&&(t.isWebGL2?n.drawBuffers(K):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(K))}function Ee(U){return p!==U?(n.useProgram(U),p=U,!0):!1}const _={[Bi]:n.FUNC_ADD,[ap]:n.FUNC_SUBTRACT,[op]:n.FUNC_REVERSE_SUBTRACT};if(i)_[dl]=n.MIN,_[pl]=n.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(_[dl]=U.MIN_EXT,_[pl]=U.MAX_EXT)}const L={[lp]:n.ZERO,[cp]:n.ONE,[up]:n.SRC_COLOR,[Cu]:n.SRC_ALPHA,[_p]:n.SRC_ALPHA_SATURATE,[pp]:n.DST_COLOR,[hp]:n.DST_ALPHA,[fp]:n.ONE_MINUS_SRC_COLOR,[Pu]:n.ONE_MINUS_SRC_ALPHA,[mp]:n.ONE_MINUS_DST_COLOR,[dp]:n.ONE_MINUS_DST_ALPHA};function D(U,Te,K,ge,we,$e,tt,pt){if(U===Wn){h===!0&&(pe(n.BLEND),h=!1);return}if(h===!1&&($(n.BLEND),h=!0),U!==sp){if(U!==P||pt!==S){if((E!==Bi||C!==Bi)&&(n.blendEquation(n.FUNC_ADD),E=Bi,C=Bi),pt)switch(U){case qi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ul:n.blendFunc(n.ONE,n.ONE);break;case fl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case qi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ul:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case fl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}b=null,T=null,y=null,z=null,P=U,S=pt}return}we=we||Te,$e=$e||K,tt=tt||ge,(Te!==E||we!==C)&&(n.blendEquationSeparate(_[Te],_[we]),E=Te,C=we),(K!==b||ge!==T||$e!==y||tt!==z)&&(n.blendFuncSeparate(L[K],L[ge],L[$e],L[tt]),b=K,T=ge,y=$e,z=tt),P=U,S=!1}function k(U,Te){U.side===wn?pe(n.CULL_FACE):$(n.CULL_FACE);let K=U.side===Dt;Te&&(K=!K),O(K),U.blending===qi&&U.transparent===!1?D(Wn):D(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),o.setMask(U.colorWrite);const ge=U.stencilWrite;c.setTest(ge),ge&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Z(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?$(n.SAMPLE_ALPHA_TO_COVERAGE):pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function O(U){R!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),R=U)}function ce(U){U!==np?($(n.CULL_FACE),U!==ae&&(U===cl?n.cullFace(n.BACK):U===ip?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pe(n.CULL_FACE),ae=U}function ue(U){U!==re&&(J&&n.lineWidth(U),re=U)}function Z(U,Te,K){U?($(n.POLYGON_OFFSET_FILL),(N!==Te||W!==K)&&(n.polygonOffset(Te,K),N=Te,W=K)):pe(n.POLYGON_OFFSET_FILL)}function le(U){U?$(n.SCISSOR_TEST):pe(n.SCISSOR_TEST)}function se(U){U===void 0&&(U=n.TEXTURE0+j-1),de!==U&&(n.activeTexture(U),de=U)}function Ae(U,Te,K){K===void 0&&(de===null?K=n.TEXTURE0+j-1:K=de);let ge=oe[K];ge===void 0&&(ge={type:void 0,texture:void 0},oe[K]=ge),(ge.type!==U||ge.texture!==Te)&&(de!==K&&(n.activeTexture(K),de=K),n.bindTexture(U,Te||Ce[U]),ge.type=U,ge.texture=Te)}function M(){const U=oe[de];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function g(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function I(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function w(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function X(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ue(U){ve.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),ve.copy(U))}function ye(U){xe.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),xe.copy(U))}function be(U,Te){let K=f.get(Te);K===void 0&&(K=new WeakMap,f.set(Te,K));let ge=K.get(U);ge===void 0&&(ge=n.getUniformBlockIndex(Te,U.name),K.set(U,ge))}function De(U,Te){const ge=f.get(Te).get(U);u.get(Te)!==ge&&(n.uniformBlockBinding(Te,ge,U.__bindingPointIndex),u.set(Te,ge))}function Ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},de=null,oe={},m={},x=new WeakMap,v=[],p=null,h=!1,P=null,E=null,b=null,T=null,C=null,y=null,z=null,S=!1,R=null,ae=null,re=null,N=null,W=null,ve.set(0,0,n.canvas.width,n.canvas.height),xe.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:$,disable:pe,bindFramebuffer:me,drawBuffers:fe,useProgram:Ee,setBlending:D,setMaterial:k,setFlipSided:O,setCullFace:ce,setLineWidth:ue,setPolygonOffset:Z,setScissorTest:le,activeTexture:se,bindTexture:Ae,unbindTexture:M,compressedTexImage2D:g,compressedTexImage3D:I,texImage2D:Re,texImage3D:Le,updateUBOMapping:be,uniformBlockBinding:De,texStorage2D:he,texStorage3D:X,texSubImage2D:Q,texSubImage3D:ie,compressedTexSubImage2D:w,compressedTexSubImage3D:ee,scissor:Ue,viewport:ye,reset:Ye}}function $v(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let v;const p=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(M,g){return h?new OffscreenCanvas(M,g):ys("canvas")}function E(M,g,I,Q){let ie=1;if((M.width>Q||M.height>Q)&&(ie=Q/Math.max(M.width,M.height)),ie<1||g===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const w=g?Ya:Math.floor,ee=w(ie*M.width),he=w(ie*M.height);v===void 0&&(v=P(ee,he));const X=I?P(ee,he):v;return X.width=ee,X.height=he,X.getContext("2d").drawImage(M,0,0,ee,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+ee+"x"+he+")."),X}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function b(M){return Gl(M.width)&&Gl(M.height)}function T(M){return o?!1:M.wrapS!==Jt||M.wrapT!==Jt||M.minFilter!==Pt&&M.minFilter!==Vt}function C(M,g){return M.generateMipmaps&&g&&M.minFilter!==Pt&&M.minFilter!==Vt}function y(M){n.generateMipmap(M)}function z(M,g,I,Q,ie=!1){if(o===!1)return g;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let w=g;return g===n.RED&&(I===n.FLOAT&&(w=n.R32F),I===n.HALF_FLOAT&&(w=n.R16F),I===n.UNSIGNED_BYTE&&(w=n.R8)),g===n.RG&&(I===n.FLOAT&&(w=n.RG32F),I===n.HALF_FLOAT&&(w=n.RG16F),I===n.UNSIGNED_BYTE&&(w=n.RG8)),g===n.RGBA&&(I===n.FLOAT&&(w=n.RGBA32F),I===n.HALF_FLOAT&&(w=n.RGBA16F),I===n.UNSIGNED_BYTE&&(w=Q===ke&&ie===!1?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(w=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(w=n.RGB5_A1)),(w===n.R16F||w===n.R32F||w===n.RG16F||w===n.RG32F||w===n.RGBA16F||w===n.RGBA32F)&&e.get("EXT_color_buffer_float"),w}function S(M,g,I){return C(M,I)===!0||M.isFramebufferTexture&&M.minFilter!==Pt&&M.minFilter!==Vt?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function R(M){return M===Pt||M===ml||M===Ks?n.NEAREST:n.LINEAR}function ae(M){const g=M.target;g.removeEventListener("dispose",ae),N(g),g.isVideoTexture&&x.delete(g)}function re(M){const g=M.target;g.removeEventListener("dispose",re),j(g)}function N(M){const g=i.get(M);if(g.__webglInit===void 0)return;const I=M.source,Q=p.get(I);if(Q){const ie=Q[g.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&W(M),Object.keys(Q).length===0&&p.delete(I)}i.remove(M)}function W(M){const g=i.get(M);n.deleteTexture(g.__webglTexture);const I=M.source,Q=p.get(I);delete Q[g.__cacheKey],a.memory.textures--}function j(M){const g=M.texture,I=i.get(M),Q=i.get(g);if(Q.__webglTexture!==void 0&&(n.deleteTexture(Q.__webglTexture),a.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)n.deleteFramebuffer(I.__webglFramebuffer[ie]),I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer[ie]);else{if(n.deleteFramebuffer(I.__webglFramebuffer),I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&n.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let ie=0;ie<I.__webglColorRenderbuffer.length;ie++)I.__webglColorRenderbuffer[ie]&&n.deleteRenderbuffer(I.__webglColorRenderbuffer[ie]);I.__webglDepthRenderbuffer&&n.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let ie=0,w=g.length;ie<w;ie++){const ee=i.get(g[ie]);ee.__webglTexture&&(n.deleteTexture(ee.__webglTexture),a.memory.textures--),i.remove(g[ie])}i.remove(g),i.remove(M)}let J=0;function V(){J=0}function q(){const M=J;return M>=l&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+l),J+=1,M}function de(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function oe(M,g){const I=i.get(M);if(M.isVideoTexture&&se(M),M.isRenderTargetTexture===!1&&M.version>0&&I.__version!==M.version){const Q=M.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(I,M,g);return}}t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+g)}function G(M,g){const I=i.get(M);if(M.version>0&&I.__version!==M.version){me(I,M,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+g)}function Y(M,g){const I=i.get(M);if(M.version>0&&I.__version!==M.version){me(I,M,g);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+g)}function ve(M,g){const I=i.get(M);if(M.version>0&&I.__version!==M.version){fe(I,M,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+g)}const xe={[ka]:n.REPEAT,[Jt]:n.CLAMP_TO_EDGE,[Wa]:n.MIRRORED_REPEAT},Se={[Pt]:n.NEAREST,[ml]:n.NEAREST_MIPMAP_NEAREST,[Ks]:n.NEAREST_MIPMAP_LINEAR,[Vt]:n.LINEAR,[Lp]:n.LINEAR_MIPMAP_NEAREST,[Pr]:n.LINEAR_MIPMAP_LINEAR},Ce={[Xp]:n.NEVER,[Jp]:n.ALWAYS,[qp]:n.LESS,[jp]:n.LEQUAL,[Yp]:n.EQUAL,[Zp]:n.GEQUAL,[Kp]:n.GREATER,[$p]:n.NOTEQUAL};function $(M,g,I){if(I?(n.texParameteri(M,n.TEXTURE_WRAP_S,xe[g.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,xe[g.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,xe[g.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,Se[g.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,Se[g.minFilter])):(n.texParameteri(M,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(M,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(g.wrapS!==Jt||g.wrapT!==Jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,n.TEXTURE_MAG_FILTER,R(g.magFilter)),n.texParameteri(M,n.TEXTURE_MIN_FILTER,R(g.minFilter)),g.minFilter!==Pt&&g.minFilter!==Vt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,Ce[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===Pt||g.minFilter!==Ks&&g.minFilter!==Pr||g.type===Hn&&e.has("OES_texture_float_linear")===!1||o===!1&&g.type===Lr&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(n.texParameterf(M,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function pe(M,g){let I=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",ae));const Q=g.source;let ie=p.get(Q);ie===void 0&&(ie={},p.set(Q,ie));const w=de(g);if(w!==M.__cacheKey){ie[w]===void 0&&(ie[w]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,I=!0),ie[w].usedTimes++;const ee=ie[M.__cacheKey];ee!==void 0&&(ie[M.__cacheKey].usedTimes--,ee.usedTimes===0&&W(g)),M.__cacheKey=w,M.__webglTexture=ie[w].texture}return I}function me(M,g,I){let Q=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Q=n.TEXTURE_3D);const ie=pe(M,g),w=g.source;t.bindTexture(Q,M.__webglTexture,n.TEXTURE0+I);const ee=i.get(w);if(w.version!==ee.__version||ie===!0){t.activeTexture(n.TEXTURE0+I),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const he=T(g)&&b(g.image)===!1;let X=E(g.image,he,!1,u);X=Ae(g,X);const Re=b(X)||o,Le=s.convert(g.format,g.colorSpace);let Ue=s.convert(g.type),ye=z(g.internalFormat,Le,Ue,g.colorSpace);$(Q,g,Re);let be;const De=g.mipmaps,Ye=o&&g.isVideoTexture!==!0,U=ee.__version===void 0||ie===!0,Te=S(g,X,Re);if(g.isDepthTexture)ye=n.DEPTH_COMPONENT,o?g.type===Hn?ye=n.DEPTH_COMPONENT32F:g.type===zn?ye=n.DEPTH_COMPONENT24:g.type===ui?ye=n.DEPTH24_STENCIL8:ye=n.DEPTH_COMPONENT16:g.type===Hn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===fi&&ye===n.DEPTH_COMPONENT&&g.type!==xo&&g.type!==zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=zn,Ue=s.convert(g.type)),g.format===er&&ye===n.DEPTH_COMPONENT&&(ye=n.DEPTH_STENCIL,g.type!==ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=ui,Ue=s.convert(g.type))),U&&(Ye?t.texStorage2D(n.TEXTURE_2D,1,ye,X.width,X.height):t.texImage2D(n.TEXTURE_2D,0,ye,X.width,X.height,0,Le,Ue,null));else if(g.isDataTexture)if(De.length>0&&Re){Ye&&U&&t.texStorage2D(n.TEXTURE_2D,Te,ye,De[0].width,De[0].height);for(let K=0,ge=De.length;K<ge;K++)be=De[K],Ye?t.texSubImage2D(n.TEXTURE_2D,K,0,0,be.width,be.height,Le,Ue,be.data):t.texImage2D(n.TEXTURE_2D,K,ye,be.width,be.height,0,Le,Ue,be.data);g.generateMipmaps=!1}else Ye?(U&&t.texStorage2D(n.TEXTURE_2D,Te,ye,X.width,X.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,X.width,X.height,Le,Ue,X.data)):t.texImage2D(n.TEXTURE_2D,0,ye,X.width,X.height,0,Le,Ue,X.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ye&&U&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,ye,De[0].width,De[0].height,X.depth);for(let K=0,ge=De.length;K<ge;K++)be=De[K],g.format!==Qt?Le!==null?Ye?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,be.width,be.height,X.depth,Le,be.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,ye,be.width,be.height,X.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,be.width,be.height,X.depth,Le,Ue,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,ye,be.width,be.height,X.depth,0,Le,Ue,be.data)}else{Ye&&U&&t.texStorage2D(n.TEXTURE_2D,Te,ye,De[0].width,De[0].height);for(let K=0,ge=De.length;K<ge;K++)be=De[K],g.format!==Qt?Le!==null?Ye?t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,be.width,be.height,Le,be.data):t.compressedTexImage2D(n.TEXTURE_2D,K,ye,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage2D(n.TEXTURE_2D,K,0,0,be.width,be.height,Le,Ue,be.data):t.texImage2D(n.TEXTURE_2D,K,ye,be.width,be.height,0,Le,Ue,be.data)}else if(g.isDataArrayTexture)Ye?(U&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,ye,X.width,X.height,X.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,Le,Ue,X.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,X.width,X.height,X.depth,0,Le,Ue,X.data);else if(g.isData3DTexture)Ye?(U&&t.texStorage3D(n.TEXTURE_3D,Te,ye,X.width,X.height,X.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,Le,Ue,X.data)):t.texImage3D(n.TEXTURE_3D,0,ye,X.width,X.height,X.depth,0,Le,Ue,X.data);else if(g.isFramebufferTexture){if(U)if(Ye)t.texStorage2D(n.TEXTURE_2D,Te,ye,X.width,X.height);else{let K=X.width,ge=X.height;for(let we=0;we<Te;we++)t.texImage2D(n.TEXTURE_2D,we,ye,K,ge,0,Le,Ue,null),K>>=1,ge>>=1}}else if(De.length>0&&Re){Ye&&U&&t.texStorage2D(n.TEXTURE_2D,Te,ye,De[0].width,De[0].height);for(let K=0,ge=De.length;K<ge;K++)be=De[K],Ye?t.texSubImage2D(n.TEXTURE_2D,K,0,0,Le,Ue,be):t.texImage2D(n.TEXTURE_2D,K,ye,Le,Ue,be);g.generateMipmaps=!1}else Ye?(U&&t.texStorage2D(n.TEXTURE_2D,Te,ye,X.width,X.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Le,Ue,X)):t.texImage2D(n.TEXTURE_2D,0,ye,Le,Ue,X);C(g,Re)&&y(Q),ee.__version=w.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function fe(M,g,I){if(g.image.length!==6)return;const Q=pe(M,g),ie=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+I);const w=i.get(ie);if(ie.version!==w.__version||Q===!0){t.activeTexture(n.TEXTURE0+I),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const ee=g.isCompressedTexture||g.image[0].isCompressedTexture,he=g.image[0]&&g.image[0].isDataTexture,X=[];for(let K=0;K<6;K++)!ee&&!he?X[K]=E(g.image[K],!1,!0,c):X[K]=he?g.image[K].image:g.image[K],X[K]=Ae(g,X[K]);const Re=X[0],Le=b(Re)||o,Ue=s.convert(g.format,g.colorSpace),ye=s.convert(g.type),be=z(g.internalFormat,Ue,ye,g.colorSpace),De=o&&g.isVideoTexture!==!0,Ye=w.__version===void 0||Q===!0;let U=S(g,Re,Le);$(n.TEXTURE_CUBE_MAP,g,Le);let Te;if(ee){De&&Ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,U,be,Re.width,Re.height);for(let K=0;K<6;K++){Te=X[K].mipmaps;for(let ge=0;ge<Te.length;ge++){const we=Te[ge];g.format!==Qt?Ue!==null?De?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,0,0,we.width,we.height,Ue,we.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,be,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,0,0,we.width,we.height,Ue,ye,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,be,we.width,we.height,0,Ue,ye,we.data)}}}else{Te=g.mipmaps,De&&Ye&&(Te.length>0&&U++,t.texStorage2D(n.TEXTURE_CUBE_MAP,U,be,X[0].width,X[0].height));for(let K=0;K<6;K++)if(he){De?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,X[K].width,X[K].height,Ue,ye,X[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,be,X[K].width,X[K].height,0,Ue,ye,X[K].data);for(let ge=0;ge<Te.length;ge++){const $e=Te[ge].image[K].image;De?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,0,0,$e.width,$e.height,Ue,ye,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,be,$e.width,$e.height,0,Ue,ye,$e.data)}}else{De?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ue,ye,X[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,be,Ue,ye,X[K]);for(let ge=0;ge<Te.length;ge++){const we=Te[ge];De?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,0,0,Ue,ye,we.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,be,Ue,ye,we.image[K])}}}C(g,Le)&&y(n.TEXTURE_CUBE_MAP),w.__version=ie.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function Ee(M,g,I,Q,ie){const w=s.convert(I.format,I.colorSpace),ee=s.convert(I.type),he=z(I.internalFormat,w,ee,I.colorSpace);i.get(g).__hasExternalTextures||(ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,0,he,g.width,g.height,g.depth,0,w,ee,null):t.texImage2D(ie,0,he,g.width,g.height,0,w,ee,null)),t.bindFramebuffer(n.FRAMEBUFFER,M),le(g)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,ie,i.get(I).__webglTexture,0,Z(g)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,ie,i.get(I).__webglTexture,0),t.bindFramebuffer(n.FRAMEBUFFER,null)}function _(M,g,I){if(n.bindRenderbuffer(n.RENDERBUFFER,M),g.depthBuffer&&!g.stencilBuffer){let Q=n.DEPTH_COMPONENT16;if(I||le(g)){const ie=g.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Hn?Q=n.DEPTH_COMPONENT32F:ie.type===zn&&(Q=n.DEPTH_COMPONENT24));const w=Z(g);le(g)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,w,Q,g.width,g.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,w,Q,g.width,g.height)}else n.renderbufferStorage(n.RENDERBUFFER,Q,g.width,g.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,M)}else if(g.depthBuffer&&g.stencilBuffer){const Q=Z(g);I&&le(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,g.width,g.height):le(g)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,M)}else{const Q=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let ie=0;ie<Q.length;ie++){const w=Q[ie],ee=s.convert(w.format,w.colorSpace),he=s.convert(w.type),X=z(w.internalFormat,ee,he,w.colorSpace),Re=Z(g);I&&le(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,X,g.width,g.height):le(g)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re,X,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,X,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function L(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),oe(g.depthTexture,0);const Q=i.get(g.depthTexture).__webglTexture,ie=Z(g);if(g.depthTexture.format===fi)le(g)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(g.depthTexture.format===er)le(g)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function D(M){const g=i.get(M),I=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");L(g.__webglFramebuffer,M)}else if(I){g.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[Q]),g.__webglDepthbuffer[Q]=n.createRenderbuffer(),_(g.__webglDepthbuffer[Q],M,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),_(g.__webglDepthbuffer,M,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function k(M,g,I){const Q=i.get(M);g!==void 0&&Ee(Q.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D),I!==void 0&&D(M)}function O(M){const g=M.texture,I=i.get(M),Q=i.get(g);M.addEventListener("dispose",re),M.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=g.version,a.memory.textures++);const ie=M.isWebGLCubeRenderTarget===!0,w=M.isWebGLMultipleRenderTargets===!0,ee=b(M)||o;if(ie){I.__webglFramebuffer=[];for(let he=0;he<6;he++)I.__webglFramebuffer[he]=n.createFramebuffer()}else{if(I.__webglFramebuffer=n.createFramebuffer(),w)if(r.drawBuffers){const he=M.texture;for(let X=0,Re=he.length;X<Re;X++){const Le=i.get(he[X]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&le(M)===!1){const he=w?g:[g];I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let X=0;X<he.length;X++){const Re=he[X];I.__webglColorRenderbuffer[X]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[X]);const Le=s.convert(Re.format,Re.colorSpace),Ue=s.convert(Re.type),ye=z(Re.internalFormat,Le,Ue,Re.colorSpace,M.isXRRenderTarget===!0),be=Z(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,be,ye,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+X,n.RENDERBUFFER,I.__webglColorRenderbuffer[X])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),_(I.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ie){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),$(n.TEXTURE_CUBE_MAP,g,ee);for(let he=0;he<6;he++)Ee(I.__webglFramebuffer[he],M,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he);C(g,ee)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(w){const he=M.texture;for(let X=0,Re=he.length;X<Re;X++){const Le=he[X],Ue=i.get(Le);t.bindTexture(n.TEXTURE_2D,Ue.__webglTexture),$(n.TEXTURE_2D,Le,ee),Ee(I.__webglFramebuffer,M,Le,n.COLOR_ATTACHMENT0+X,n.TEXTURE_2D),C(Le,ee)&&y(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?he=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,Q.__webglTexture),$(he,g,ee),Ee(I.__webglFramebuffer,M,g,n.COLOR_ATTACHMENT0,he),C(g,ee)&&y(he),t.unbindTexture()}M.depthBuffer&&D(M)}function ce(M){const g=b(M)||o,I=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Q=0,ie=I.length;Q<ie;Q++){const w=I[Q];if(C(w,g)){const ee=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,he=i.get(w).__webglTexture;t.bindTexture(ee,he),y(ee),t.unbindTexture()}}}function ue(M){if(o&&M.samples>0&&le(M)===!1){const g=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],I=M.width,Q=M.height;let ie=n.COLOR_BUFFER_BIT;const w=[],ee=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(M),X=M.isWebGLMultipleRenderTargets===!0;if(X)for(let Re=0;Re<g.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Re=0;Re<g.length;Re++){w.push(n.COLOR_ATTACHMENT0+Re),M.depthBuffer&&w.push(ee);const Le=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Le===!1&&(M.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),X&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[Re]),Le===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ee]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ee])),X){const Ue=i.get(g[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ue,0)}n.blitFramebuffer(0,0,I,Q,0,0,I,Q,ie,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,w)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),X)for(let Re=0;Re<g.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,he.__webglColorRenderbuffer[Re]);const Le=i.get(g[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,Le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function Z(M){return Math.min(f,M.samples)}function le(M){const g=i.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function se(M){const g=a.render.frame;x.get(M)!==g&&(x.set(M,g),M.update())}function Ae(M,g){const I=M.colorSpace,Q=M.format,ie=M.type;return M.isCompressedTexture===!0||M.format===Xa||I!==_n&&I!==di&&(I===ke?o===!1?e.has("EXT_sRGB")===!0&&Q===Qt?(M.format=Xa,M.minFilter=Vt,M.generateMipmaps=!1):g=Vu.sRGBToLinear(g):(Q!==Qt||ie!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),g}this.allocateTextureUnit=q,this.resetTextureUnits=V,this.setTexture2D=oe,this.setTexture2DArray=G,this.setTexture3D=Y,this.setTextureCube=ve,this.rebindTextures=k,this.setupRenderTarget=O,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=D,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=le}function Zv(n,e,t){const i=t.isWebGL2;function r(s,a=di){let o;if(s===Xn)return n.UNSIGNED_BYTE;if(s===Du)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Iu)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Up)return n.BYTE;if(s===Dp)return n.SHORT;if(s===xo)return n.UNSIGNED_SHORT;if(s===Uu)return n.INT;if(s===zn)return n.UNSIGNED_INT;if(s===Hn)return n.FLOAT;if(s===Lr)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Ip)return n.ALPHA;if(s===Qt)return n.RGBA;if(s===Np)return n.LUMINANCE;if(s===Fp)return n.LUMINANCE_ALPHA;if(s===fi)return n.DEPTH_COMPONENT;if(s===er)return n.DEPTH_STENCIL;if(s===Xa)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Op)return n.RED;if(s===Nu)return n.RED_INTEGER;if(s===Bp)return n.RG;if(s===Fu)return n.RG_INTEGER;if(s===Ou)return n.RGBA_INTEGER;if(s===$s||s===Zs||s===Js||s===Qs)if(a===ke)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===$s)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Zs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Js)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Qs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===$s)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Zs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Js)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Qs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===_l||s===gl||s===vl||s===xl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===_l)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===gl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===vl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===xl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zp)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ml||s===Sl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Ml)return a===ke?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Sl)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===El||s===yl||s===bl||s===Tl||s===Al||s===wl||s===Rl||s===Cl||s===Pl||s===Ll||s===Ul||s===Dl||s===Il||s===Nl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===El)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===yl)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===bl)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Tl)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Al)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===wl)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Rl)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Cl)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Pl)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ll)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ul)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Dl)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Il)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Nl)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ea)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===ea)return a===ke?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Hp||s===Fl||s===Ol||s===Bl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===ea)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Fl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ol)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Bl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ui?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Jv extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let _r=class extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}};const Qv={type:"move"};class ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _r,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _r,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _r,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),h=this._getHandJoint(c,v);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,x=.005;c.inputState.pinching&&d>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qv)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new _r;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class ex extends zt{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:fi,u!==fi&&u!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===fi&&(i=zn),i===void 0&&u===er&&(i=ui),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Pt,this.minFilter=l!==void 0?l:Pt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class tx extends gi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,x=null;const v=t.getContextAttributes();let p=null,h=null;const P=[],E=[],b=new kt;b.layers.enable(1),b.viewport=new gt;const T=new kt;T.layers.enable(2),T.viewport=new gt;const C=[b,T],y=new Jv;y.layers.enable(1),y.layers.enable(2);let z=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Y=P[G];return Y===void 0&&(Y=new ba,P[G]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(G){let Y=P[G];return Y===void 0&&(Y=new ba,P[G]=Y),Y.getGripSpace()},this.getHand=function(G){let Y=P[G];return Y===void 0&&(Y=new ba,P[G]=Y),Y.getHandSpace()};function R(G){const Y=E.indexOf(G.inputSource);if(Y===-1)return;const ve=P[Y];ve!==void 0&&(ve.update(G.inputSource,G.frame,c||a),ve.dispatchEvent({type:G.type,data:G.inputSource}))}function ae(){r.removeEventListener("select",R),r.removeEventListener("selectstart",R),r.removeEventListener("selectend",R),r.removeEventListener("squeeze",R),r.removeEventListener("squeezestart",R),r.removeEventListener("squeezeend",R),r.removeEventListener("end",ae),r.removeEventListener("inputsourceschange",re);for(let G=0;G<P.length;G++){const Y=E[G];Y!==null&&(E[G]=null,P[G].disconnect(Y))}z=null,S=null,e.setRenderTarget(p),m=null,d=null,f=null,r=null,h=null,oe.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",R),r.addEventListener("selectstart",R),r.addEventListener("selectend",R),r.addEventListener("squeeze",R),r.addEventListener("squeezestart",R),r.addEventListener("squeezeend",R),r.addEventListener("end",ae),r.addEventListener("inputsourceschange",re),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Y),r.updateRenderState({baseLayer:m}),h=new pi(m.framebufferWidth,m.framebufferHeight,{format:Qt,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let Y=null,ve=null,xe=null;v.depth&&(xe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=v.stencil?er:fi,ve=v.stencil?ui:zn);const Se={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Se),r.updateRenderState({layers:[d]}),h=new pi(d.textureWidth,d.textureHeight,{format:Qt,type:Xn,depthTexture:new ex(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Ce=e.properties.get(h);Ce.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),oe.setContext(r),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function re(G){for(let Y=0;Y<G.removed.length;Y++){const ve=G.removed[Y],xe=E.indexOf(ve);xe>=0&&(E[xe]=null,P[xe].disconnect(ve))}for(let Y=0;Y<G.added.length;Y++){const ve=G.added[Y];let xe=E.indexOf(ve);if(xe===-1){for(let Ce=0;Ce<P.length;Ce++)if(Ce>=E.length){E.push(ve),xe=Ce;break}else if(E[Ce]===null){E[Ce]=ve,xe=Ce;break}if(xe===-1)break}const Se=P[xe];Se&&Se.connect(ve)}}const N=new B,W=new B;function j(G,Y,ve){N.setFromMatrixPosition(Y.matrixWorld),W.setFromMatrixPosition(ve.matrixWorld);const xe=N.distanceTo(W),Se=Y.projectionMatrix.elements,Ce=ve.projectionMatrix.elements,$=Se[14]/(Se[10]-1),pe=Se[14]/(Se[10]+1),me=(Se[9]+1)/Se[5],fe=(Se[9]-1)/Se[5],Ee=(Se[8]-1)/Se[0],_=(Ce[8]+1)/Ce[0],L=$*Ee,D=$*_,k=xe/(-Ee+_),O=k*-Ee;Y.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(O),G.translateZ(k),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const ce=$+k,ue=pe+k,Z=L-O,le=D+(xe-O),se=me*pe/ue*ce,Ae=fe*pe/ue*ce;G.projectionMatrix.makePerspective(Z,le,se,Ae,ce,ue),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function J(G,Y){Y===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Y.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;y.near=T.near=b.near=G.near,y.far=T.far=b.far=G.far,(z!==y.near||S!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),z=y.near,S=y.far);const Y=G.parent,ve=y.cameras;J(y,Y);for(let xe=0;xe<ve.length;xe++)J(ve[xe],Y);ve.length===2?j(y,b,T):y.projectionMatrix.copy(b.projectionMatrix),V(G,y,Y)};function V(G,Y,ve){ve===null?G.matrix.copy(Y.matrixWorld):(G.matrix.copy(ve.matrixWorld),G.matrix.invert(),G.matrix.multiply(Y.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0);const xe=G.children;for(let Se=0,Ce=xe.length;Se<Ce;Se++)xe[Se].updateMatrixWorld(!0);G.projectionMatrix.copy(Y.projectionMatrix),G.projectionMatrixInverse.copy(Y.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=qa*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)};let q=null;function de(G,Y){if(u=Y.getViewerPose(c||a),x=Y,u!==null){const ve=u.views;m!==null&&(e.setRenderTargetFramebuffer(h,m.framebuffer),e.setRenderTarget(h));let xe=!1;ve.length!==y.cameras.length&&(y.cameras.length=0,xe=!0);for(let Se=0;Se<ve.length;Se++){const Ce=ve[Se];let $=null;if(m!==null)$=m.getViewport(Ce);else{const me=f.getViewSubImage(d,Ce);$=me.viewport,Se===0&&(e.setRenderTargetTextures(h,me.colorTexture,d.ignoreDepthValues?void 0:me.depthStencilTexture),e.setRenderTarget(h))}let pe=C[Se];pe===void 0&&(pe=new kt,pe.layers.enable(Se),pe.viewport=new gt,C[Se]=pe),pe.matrix.fromArray(Ce.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(Ce.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set($.x,$.y,$.width,$.height),Se===0&&(y.matrix.copy(pe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),xe===!0&&y.cameras.push(pe)}}for(let ve=0;ve<P.length;ve++){const xe=E[ve],Se=P[ve];xe!==null&&Se!==void 0&&Se.update(xe,Y,c||a)}q&&q(G,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),x=null}const oe=new Qu;oe.setAnimationLoop(de),this.setAnimationLoop=function(G){q=G},this.dispose=function(){}}}function nx(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,$u(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,P,E,b){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,b)):h.isMeshMatcapMaterial?(s(p,h),x(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),v(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,P,E):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Dt&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Dt&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const P=e.get(h).envMap;if(P&&(p.envMap.value=P,p.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const E=n.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*E,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,P,E){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*P,p.scale.value=E*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,P){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Dt&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=P.texture,p.transmissionSamplerSize.value.set(P.width,P.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,h){h.matcap&&(p.matcap.value=h.matcap)}function v(p,h){const P=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(P.matrixWorld),p.nearDistance.value=P.shadow.camera.near,p.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ix(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(P,E){const b=E.program;i.uniformBlockBinding(P,b)}function c(P,E){let b=r[P.id];b===void 0&&(x(P),b=u(P),r[P.id]=b,P.addEventListener("dispose",p));const T=E.program;i.updateUBOMapping(P,T);const C=e.render.frame;s[P.id]!==C&&(d(P),s[P.id]=C)}function u(P){const E=f();P.__bindingPointIndex=E;const b=n.createBuffer(),T=P.__size,C=P.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,T,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,b),b}function f(){for(let P=0;P<o;P++)if(a.indexOf(P)===-1)return a.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(P){const E=r[P.id],b=P.uniforms,T=P.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let C=0,y=b.length;C<y;C++){const z=b[C];if(m(z,C,T)===!0){const S=z.__offset,R=Array.isArray(z.value)?z.value:[z.value];let ae=0;for(let re=0;re<R.length;re++){const N=R[re],W=v(N);typeof N=="number"?(z.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,S+ae,z.__data)):N.isMatrix3?(z.__data[0]=N.elements[0],z.__data[1]=N.elements[1],z.__data[2]=N.elements[2],z.__data[3]=N.elements[0],z.__data[4]=N.elements[3],z.__data[5]=N.elements[4],z.__data[6]=N.elements[5],z.__data[7]=N.elements[0],z.__data[8]=N.elements[6],z.__data[9]=N.elements[7],z.__data[10]=N.elements[8],z.__data[11]=N.elements[0]):(N.toArray(z.__data,ae),ae+=W.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,S,z.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(P,E,b){const T=P.value;if(b[E]===void 0){if(typeof T=="number")b[E]=T;else{const C=Array.isArray(T)?T:[T],y=[];for(let z=0;z<C.length;z++)y.push(C[z].clone());b[E]=y}return!0}else if(typeof T=="number"){if(b[E]!==T)return b[E]=T,!0}else{const C=Array.isArray(b[E])?b[E]:[b[E]],y=Array.isArray(T)?T:[T];for(let z=0;z<C.length;z++){const S=C[z];if(S.equals(y[z])===!1)return S.copy(y[z]),!0}}return!1}function x(P){const E=P.uniforms;let b=0;const T=16;let C=0;for(let y=0,z=E.length;y<z;y++){const S=E[y],R={boundary:0,storage:0},ae=Array.isArray(S.value)?S.value:[S.value];for(let re=0,N=ae.length;re<N;re++){const W=ae[re],j=v(W);R.boundary+=j.boundary,R.storage+=j.storage}if(S.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=b,y>0){C=b%T;const re=T-C;C!==0&&re-R.boundary<0&&(b+=T-C,S.__offset=b)}b+=R.storage}return C=b%T,C>0&&(b+=T-C),P.__size=b,P.__cache={},this}function v(P){const E={boundary:0,storage:0};return typeof P=="number"?(E.boundary=4,E.storage=4):P.isVector2?(E.boundary=8,E.storage=8):P.isVector3||P.isColor?(E.boundary=16,E.storage=12):P.isVector4?(E.boundary=16,E.storage=16):P.isMatrix3?(E.boundary=48,E.storage=48):P.isMatrix4?(E.boundary=64,E.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),E}function p(P){const E=P.target;E.removeEventListener("dispose",p);const b=a.indexOf(E.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function h(){for(const P in r)n.deleteBuffer(r[P]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}function rx(){const n=ys("canvas");return n.style.display="block",n}class af{constructor(e={}){const{canvas:t=rx(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),x=new Int32Array(4);let v=null,p=null;const h=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=ke,this.useLegacyLights=!0,this.toneMapping=Cn,this.toneMappingExposure=1;const E=this;let b=!1,T=0,C=0,y=null,z=-1,S=null;const R=new gt,ae=new gt;let re=null;const N=new Ze(0);let W=0,j=t.width,J=t.height,V=1,q=null,de=null;const oe=new gt(0,0,j,J),G=new gt(0,0,j,J);let Y=!1;const ve=new Eo;let xe=!1,Se=!1,Ce=null;const $=new ft,pe=new ze,me=new B,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ee(){return y===null?V:1}let _=i;function L(A,H){for(let te=0;te<A.length;te++){const F=A[te],ne=t.getContext(F,H);if(ne!==null)return ne}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${go}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",K,!1),t.addEventListener("webglcontextcreationerror",ge,!1),_===null){const H=["webgl2","webgl","experimental-webgl"];if(E.isWebGL1Renderer===!0&&H.shift(),_=L(H,A),_===null)throw L(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&_ instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),_.getShaderPrecisionFormat===void 0&&(_.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let D,k,O,ce,ue,Z,le,se,Ae,M,g,I,Q,ie,w,ee,he,X,Re,Le,Ue,ye,be,De;function Ye(){D=new p0(_),k=new l0(_,D,e),D.init(k),ye=new Zv(_,D,k),O=new Kv(_,D,k),ce=new g0(_),ue=new Nv,Z=new $v(_,D,O,ue,k,ye,ce),le=new u0(E),se=new d0(E),Ae=new wm(_,k),be=new a0(_,D,Ae,k),M=new m0(_,Ae,ce,be),g=new S0(_,M,Ae,ce),Re=new M0(_,k,Z),ee=new c0(ue),I=new Iv(E,le,se,D,k,be,ee),Q=new nx(E,ue),ie=new Ov,w=new kv(D,k),X=new s0(E,le,se,O,g,d,l),he=new jv(E,g,k),De=new ix(_,ce,k,O),Le=new o0(_,D,ce,k),Ue=new _0(_,D,ce,k),ce.programs=I.programs,E.capabilities=k,E.extensions=D,E.properties=ue,E.renderLists=ie,E.shadowMap=he,E.state=O,E.info=ce}Ye();const U=new tx(E,_);this.xr=U,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const A=D.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=D.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(j,J,!1))},this.getSize=function(A){return A.set(j,J)},this.setSize=function(A,H,te=!0){if(U.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=A,J=H,t.width=Math.floor(A*V),t.height=Math.floor(H*V),te===!0&&(t.style.width=A+"px",t.style.height=H+"px"),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(j*V,J*V).floor()},this.setDrawingBufferSize=function(A,H,te){j=A,J=H,V=te,t.width=Math.floor(A*te),t.height=Math.floor(H*te),this.setViewport(0,0,A,H)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(oe)},this.setViewport=function(A,H,te,F){A.isVector4?oe.set(A.x,A.y,A.z,A.w):oe.set(A,H,te,F),O.viewport(R.copy(oe).multiplyScalar(V).floor())},this.getScissor=function(A){return A.copy(G)},this.setScissor=function(A,H,te,F){A.isVector4?G.set(A.x,A.y,A.z,A.w):G.set(A,H,te,F),O.scissor(ae.copy(G).multiplyScalar(V).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(A){O.setScissorTest(Y=A)},this.setOpaqueSort=function(A){q=A},this.setTransparentSort=function(A){de=A},this.getClearColor=function(A){return A.copy(X.getClearColor())},this.setClearColor=function(){X.setClearColor.apply(X,arguments)},this.getClearAlpha=function(){return X.getClearAlpha()},this.setClearAlpha=function(){X.setClearAlpha.apply(X,arguments)},this.clear=function(A=!0,H=!0,te=!0){let F=0;if(A){let ne=!1;if(y!==null){const Pe=y.texture.format;ne=Pe===Ou||Pe===Fu||Pe===Nu}if(ne){const Pe=y.texture.type,Ie=Pe===Xn||Pe===zn||Pe===xo||Pe===ui||Pe===Du||Pe===Iu,Ne=X.getClearColor(),Fe=X.getClearAlpha(),qe=Ne.r,Be=Ne.g,He=Ne.b;Ie?(m[0]=qe,m[1]=Be,m[2]=He,m[3]=Fe,_.clearBufferuiv(_.COLOR,0,m)):(x[0]=qe,x[1]=Be,x[2]=He,x[3]=Fe,_.clearBufferiv(_.COLOR,0,x))}else F|=_.COLOR_BUFFER_BIT}H&&(F|=_.DEPTH_BUFFER_BIT),te&&(F|=_.STENCIL_BUFFER_BIT),_.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",K,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),ie.dispose(),w.dispose(),ue.dispose(),le.dispose(),se.dispose(),g.dispose(),be.dispose(),De.dispose(),I.dispose(),U.dispose(),U.removeEventListener("sessionstart",it),U.removeEventListener("sessionend",on),Ce&&(Ce.dispose(),Ce=null),Tt.stop()};function Te(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const A=ce.autoReset,H=he.enabled,te=he.autoUpdate,F=he.needsUpdate,ne=he.type;Ye(),ce.autoReset=A,he.enabled=H,he.autoUpdate=te,he.needsUpdate=F,he.type=ne}function ge(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function we(A){const H=A.target;H.removeEventListener("dispose",we),$e(H)}function $e(A){tt(A),ue.remove(A)}function tt(A){const H=ue.get(A).programs;H!==void 0&&(H.forEach(function(te){I.releaseProgram(te)}),A.isShaderMaterial&&I.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,te,F,ne,Pe){H===null&&(H=fe);const Ie=ne.isMesh&&ne.matrixWorld.determinant()<0,Ne=uf(A,H,te,F,ne);O.setMaterial(F,Ie);let Fe=te.index,qe=1;F.wireframe===!0&&(Fe=M.getWireframeAttribute(te),qe=2);const Be=te.drawRange,He=te.attributes.position;let rt=Be.start*qe,at=(Be.start+Be.count)*qe;Pe!==null&&(rt=Math.max(rt,Pe.start*qe),at=Math.min(at,(Pe.start+Pe.count)*qe)),Fe!==null?(rt=Math.max(rt,0),at=Math.min(at,Fe.count)):He!=null&&(rt=Math.max(rt,0),at=Math.min(at,He.count));const Wt=at-rt;if(Wt<0||Wt===1/0)return;be.setup(ne,F,Ne,te,Fe);let vn,ot=Le;if(Fe!==null&&(vn=Ae.get(Fe),ot=Ue,ot.setIndex(vn)),ne.isMesh)F.wireframe===!0?(O.setLineWidth(F.wireframeLinewidth*Ee()),ot.setMode(_.LINES)):ot.setMode(_.TRIANGLES);else if(ne.isLine){let je=F.linewidth;je===void 0&&(je=1),O.setLineWidth(je*Ee()),ne.isLineSegments?ot.setMode(_.LINES):ne.isLineLoop?ot.setMode(_.LINE_LOOP):ot.setMode(_.LINE_STRIP)}else ne.isPoints?ot.setMode(_.POINTS):ne.isSprite&&ot.setMode(_.TRIANGLES);if(ne.isInstancedMesh)ot.renderInstances(rt,Wt,ne.count);else if(te.isInstancedBufferGeometry){const je=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Bs=Math.min(te.instanceCount,je);ot.renderInstances(rt,Wt,Bs)}else ot.render(rt,Wt)},this.compile=function(A,H){function te(F,ne,Pe){F.transparent===!0&&F.side===wn&&F.forceSinglePass===!1?(F.side=Dt,F.needsUpdate=!0,Or(F,ne,Pe),F.side=Yn,F.needsUpdate=!0,Or(F,ne,Pe),F.side=wn):Or(F,ne,Pe)}p=w.get(A),p.init(),P.push(p),A.traverseVisible(function(F){F.isLight&&F.layers.test(H.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights(E.useLegacyLights),A.traverse(function(F){const ne=F.material;if(ne)if(Array.isArray(ne))for(let Pe=0;Pe<ne.length;Pe++){const Ie=ne[Pe];te(Ie,A,F)}else te(ne,A,F)}),P.pop(),p=null};let pt=null;function an(A){pt&&pt(A)}function it(){Tt.stop()}function on(){Tt.start()}const Tt=new Qu;Tt.setAnimationLoop(an),typeof self<"u"&&Tt.setContext(self),this.setAnimationLoop=function(A){pt=A,U.setAnimationLoop(A),A===null?Tt.stop():Tt.start()},U.addEventListener("sessionstart",it),U.addEventListener("sessionend",on),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),U.enabled===!0&&U.isPresenting===!0&&(U.cameraAutoUpdate===!0&&U.updateCamera(H),H=U.getCamera()),A.isScene===!0&&A.onBeforeRender(E,A,H,y),p=w.get(A,P.length),p.init(),P.push(p),$.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ve.setFromProjectionMatrix($),Se=this.localClippingEnabled,xe=ee.init(this.clippingPlanes,Se),v=ie.get(A,h.length),v.init(),h.push(v),Ao(A,H,0,E.sortObjects),v.finish(),E.sortObjects===!0&&v.sort(q,de),this.info.render.frame++,xe===!0&&ee.beginShadows();const te=p.state.shadowsArray;if(he.render(te,A,H),xe===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),X.render(v,A),p.setupLights(E.useLegacyLights),H.isArrayCamera){const F=H.cameras;for(let ne=0,Pe=F.length;ne<Pe;ne++){const Ie=F[ne];wo(v,A,Ie,Ie.viewport)}}else wo(v,A,H);y!==null&&(Z.updateMultisampleRenderTarget(y),Z.updateRenderTargetMipmap(y)),A.isScene===!0&&A.onAfterRender(E,A,H),be.resetDefaultState(),z=-1,S=null,P.pop(),P.length>0?p=P[P.length-1]:p=null,h.pop(),h.length>0?v=h[h.length-1]:v=null};function Ao(A,H,te,F){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)te=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ve.intersectsSprite(A)){F&&me.setFromMatrixPosition(A.matrixWorld).applyMatrix4($);const Ie=g.update(A),Ne=A.material;Ne.visible&&v.push(A,Ie,Ne,te,me.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ve.intersectsObject(A))){const Ie=g.update(A),Ne=A.material;if(F&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),me.copy(A.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),me.copy(Ie.boundingSphere.center)),me.applyMatrix4(A.matrixWorld).applyMatrix4($)),Array.isArray(Ne)){const Fe=Ie.groups;for(let qe=0,Be=Fe.length;qe<Be;qe++){const He=Fe[qe],rt=Ne[He.materialIndex];rt&&rt.visible&&v.push(A,Ie,rt,te,me.z,He)}}else Ne.visible&&v.push(A,Ie,Ne,te,me.z,null)}}const Pe=A.children;for(let Ie=0,Ne=Pe.length;Ie<Ne;Ie++)Ao(Pe[Ie],H,te,F)}function wo(A,H,te,F){const ne=A.opaque,Pe=A.transmissive,Ie=A.transparent;p.setupLightsView(te),xe===!0&&ee.setGlobalState(E.clippingPlanes,te),Pe.length>0&&cf(ne,Pe,H,te),F&&O.viewport(R.copy(F)),ne.length>0&&Fr(ne,H,te),Pe.length>0&&Fr(Pe,H,te),Ie.length>0&&Fr(Ie,H,te),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function cf(A,H,te,F){const ne=k.isWebGL2;Ce===null&&(Ce=new pi(1,1,{generateMipmaps:!0,type:D.has("EXT_color_buffer_half_float")?Lr:Xn,minFilter:Pr,samples:ne?4:0})),E.getDrawingBufferSize(pe),ne?Ce.setSize(pe.x,pe.y):Ce.setSize(Ya(pe.x),Ya(pe.y));const Pe=E.getRenderTarget();E.setRenderTarget(Ce),E.getClearColor(N),W=E.getClearAlpha(),W<1&&E.setClearColor(16777215,.5),E.clear();const Ie=E.toneMapping;E.toneMapping=Cn,Fr(A,te,F),Z.updateMultisampleRenderTarget(Ce),Z.updateRenderTargetMipmap(Ce);let Ne=!1;for(let Fe=0,qe=H.length;Fe<qe;Fe++){const Be=H[Fe],He=Be.object,rt=Be.geometry,at=Be.material,Wt=Be.group;if(at.side===wn&&He.layers.test(F.layers)){const vn=at.side;at.side=Dt,at.needsUpdate=!0,Ro(He,te,F,rt,at,Wt),at.side=vn,at.needsUpdate=!0,Ne=!0}}Ne===!0&&(Z.updateMultisampleRenderTarget(Ce),Z.updateRenderTargetMipmap(Ce)),E.setRenderTarget(Pe),E.setClearColor(N,W),E.toneMapping=Ie}function Fr(A,H,te){const F=H.isScene===!0?H.overrideMaterial:null;for(let ne=0,Pe=A.length;ne<Pe;ne++){const Ie=A[ne],Ne=Ie.object,Fe=Ie.geometry,qe=F===null?Ie.material:F,Be=Ie.group;Ne.layers.test(te.layers)&&Ro(Ne,H,te,Fe,qe,Be)}}function Ro(A,H,te,F,ne,Pe){A.onBeforeRender(E,H,te,F,ne,Pe),A.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ne.onBeforeRender(E,H,te,F,A,Pe),ne.transparent===!0&&ne.side===wn&&ne.forceSinglePass===!1?(ne.side=Dt,ne.needsUpdate=!0,E.renderBufferDirect(te,H,F,ne,A,Pe),ne.side=Yn,ne.needsUpdate=!0,E.renderBufferDirect(te,H,F,ne,A,Pe),ne.side=wn):E.renderBufferDirect(te,H,F,ne,A,Pe),A.onAfterRender(E,H,te,F,ne,Pe)}function Or(A,H,te){H.isScene!==!0&&(H=fe);const F=ue.get(A),ne=p.state.lights,Pe=p.state.shadowsArray,Ie=ne.state.version,Ne=I.getParameters(A,ne.state,Pe,H,te),Fe=I.getProgramCacheKey(Ne);let qe=F.programs;F.environment=A.isMeshStandardMaterial?H.environment:null,F.fog=H.fog,F.envMap=(A.isMeshStandardMaterial?se:le).get(A.envMap||F.environment),qe===void 0&&(A.addEventListener("dispose",we),qe=new Map,F.programs=qe);let Be=qe.get(Fe);if(Be!==void 0){if(F.currentProgram===Be&&F.lightsStateVersion===Ie)return Co(A,Ne),Be}else Ne.uniforms=I.getUniforms(A),A.onBuild(te,Ne,E),A.onBeforeCompile(Ne,E),Be=I.acquireProgram(Ne,Fe),qe.set(Fe,Be),F.uniforms=Ne.uniforms;const He=F.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(He.clippingPlanes=ee.uniform),Co(A,Ne),F.needsLights=hf(A),F.lightsStateVersion=Ie,F.needsLights&&(He.ambientLightColor.value=ne.state.ambient,He.lightProbe.value=ne.state.probe,He.directionalLights.value=ne.state.directional,He.directionalLightShadows.value=ne.state.directionalShadow,He.spotLights.value=ne.state.spot,He.spotLightShadows.value=ne.state.spotShadow,He.rectAreaLights.value=ne.state.rectArea,He.ltc_1.value=ne.state.rectAreaLTC1,He.ltc_2.value=ne.state.rectAreaLTC2,He.pointLights.value=ne.state.point,He.pointLightShadows.value=ne.state.pointShadow,He.hemisphereLights.value=ne.state.hemi,He.directionalShadowMap.value=ne.state.directionalShadowMap,He.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,He.spotShadowMap.value=ne.state.spotShadowMap,He.spotLightMatrix.value=ne.state.spotLightMatrix,He.spotLightMap.value=ne.state.spotLightMap,He.pointShadowMap.value=ne.state.pointShadowMap,He.pointShadowMatrix.value=ne.state.pointShadowMatrix);const rt=Be.getUniforms(),at=_s.seqWithValue(rt.seq,He);return F.currentProgram=Be,F.uniformsList=at,Be}function Co(A,H){const te=ue.get(A);te.outputColorSpace=H.outputColorSpace,te.instancing=H.instancing,te.skinning=H.skinning,te.morphTargets=H.morphTargets,te.morphNormals=H.morphNormals,te.morphColors=H.morphColors,te.morphTargetsCount=H.morphTargetsCount,te.numClippingPlanes=H.numClippingPlanes,te.numIntersection=H.numClipIntersection,te.vertexAlphas=H.vertexAlphas,te.vertexTangents=H.vertexTangents,te.toneMapping=H.toneMapping}function uf(A,H,te,F,ne){H.isScene!==!0&&(H=fe),Z.resetTextureUnits();const Pe=H.fog,Ie=F.isMeshStandardMaterial?H.environment:null,Ne=y===null?E.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:_n,Fe=(F.isMeshStandardMaterial?se:le).get(F.envMap||Ie),qe=F.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Be=!!te.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),He=!!te.morphAttributes.position,rt=!!te.morphAttributes.normal,at=!!te.morphAttributes.color,Wt=F.toneMapped?E.toneMapping:Cn,vn=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,ot=vn!==void 0?vn.length:0,je=ue.get(F),Bs=p.state.lights;if(xe===!0&&(Se===!0||A!==S)){const Nt=A===S&&F.id===z;ee.setState(F,A,Nt)}let mt=!1;F.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Bs.state.version||je.outputColorSpace!==Ne||ne.isInstancedMesh&&je.instancing===!1||!ne.isInstancedMesh&&je.instancing===!0||ne.isSkinnedMesh&&je.skinning===!1||!ne.isSkinnedMesh&&je.skinning===!0||je.envMap!==Fe||F.fog===!0&&je.fog!==Pe||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==ee.numPlanes||je.numIntersection!==ee.numIntersection)||je.vertexAlphas!==qe||je.vertexTangents!==Be||je.morphTargets!==He||je.morphNormals!==rt||je.morphColors!==at||je.toneMapping!==Wt||k.isWebGL2===!0&&je.morphTargetsCount!==ot)&&(mt=!0):(mt=!0,je.__version=F.version);let Kn=je.currentProgram;mt===!0&&(Kn=Or(F,H,ne));let Po=!1,ar=!1,zs=!1;const At=Kn.getUniforms(),$n=je.uniforms;if(O.useProgram(Kn.program)&&(Po=!0,ar=!0,zs=!0),F.id!==z&&(z=F.id,ar=!0),Po||S!==A){if(At.setValue(_,"projectionMatrix",A.projectionMatrix),k.logarithmicDepthBuffer&&At.setValue(_,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),S!==A&&(S=A,ar=!0,zs=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const Nt=At.map.cameraPosition;Nt!==void 0&&Nt.setValue(_,me.setFromMatrixPosition(A.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&At.setValue(_,"isOrthographic",A.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||ne.isSkinnedMesh)&&At.setValue(_,"viewMatrix",A.matrixWorldInverse)}if(ne.isSkinnedMesh){At.setOptional(_,ne,"bindMatrix"),At.setOptional(_,ne,"bindMatrixInverse");const Nt=ne.skeleton;Nt&&(k.floatVertexTextures?(Nt.boneTexture===null&&Nt.computeBoneTexture(),At.setValue(_,"boneTexture",Nt.boneTexture,Z),At.setValue(_,"boneTextureSize",Nt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Hs=te.morphAttributes;if((Hs.position!==void 0||Hs.normal!==void 0||Hs.color!==void 0&&k.isWebGL2===!0)&&Re.update(ne,te,Kn),(ar||je.receiveShadow!==ne.receiveShadow)&&(je.receiveShadow=ne.receiveShadow,At.setValue(_,"receiveShadow",ne.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&($n.envMap.value=Fe,$n.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),ar&&(At.setValue(_,"toneMappingExposure",E.toneMappingExposure),je.needsLights&&ff($n,zs),Pe&&F.fog===!0&&Q.refreshFogUniforms($n,Pe),Q.refreshMaterialUniforms($n,F,V,J,Ce),_s.upload(_,je.uniformsList,$n,Z)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(_s.upload(_,je.uniformsList,$n,Z),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&At.setValue(_,"center",ne.center),At.setValue(_,"modelViewMatrix",ne.modelViewMatrix),At.setValue(_,"normalMatrix",ne.normalMatrix),At.setValue(_,"modelMatrix",ne.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Nt=F.uniformsGroups;for(let Gs=0,df=Nt.length;Gs<df;Gs++)if(k.isWebGL2){const Lo=Nt[Gs];De.update(Lo,Kn),De.bind(Lo,Kn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Kn}function ff(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function hf(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(A,H,te){ue.get(A.texture).__webglTexture=H,ue.get(A.depthTexture).__webglTexture=te;const F=ue.get(A);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=te===void 0,F.__autoAllocateDepthBuffer||D.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,H){const te=ue.get(A);te.__webglFramebuffer=H,te.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,te=0){y=A,T=H,C=te;let F=!0,ne=null,Pe=!1,Ie=!1;if(A){const Fe=ue.get(A);Fe.__useDefaultFramebuffer!==void 0?(O.bindFramebuffer(_.FRAMEBUFFER,null),F=!1):Fe.__webglFramebuffer===void 0?Z.setupRenderTarget(A):Fe.__hasExternalTextures&&Z.rebindTextures(A,ue.get(A.texture).__webglTexture,ue.get(A.depthTexture).__webglTexture);const qe=A.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ie=!0);const Be=ue.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(ne=Be[H],Pe=!0):k.isWebGL2&&A.samples>0&&Z.useMultisampledRTT(A)===!1?ne=ue.get(A).__webglMultisampledFramebuffer:ne=Be,R.copy(A.viewport),ae.copy(A.scissor),re=A.scissorTest}else R.copy(oe).multiplyScalar(V).floor(),ae.copy(G).multiplyScalar(V).floor(),re=Y;if(O.bindFramebuffer(_.FRAMEBUFFER,ne)&&k.drawBuffers&&F&&O.drawBuffers(A,ne),O.viewport(R),O.scissor(ae),O.setScissorTest(re),Pe){const Fe=ue.get(A.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+H,Fe.__webglTexture,te)}else if(Ie){const Fe=ue.get(A.texture),qe=H||0;_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,Fe.__webglTexture,te||0,qe)}z=-1},this.readRenderTargetPixels=function(A,H,te,F,ne,Pe,Ie){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=ue.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ne=Ne[Ie]),Ne){O.bindFramebuffer(_.FRAMEBUFFER,Ne);try{const Fe=A.texture,qe=Fe.format,Be=Fe.type;if(qe!==Qt&&ye.convert(qe)!==_.getParameter(_.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Be===Lr&&(D.has("EXT_color_buffer_half_float")||k.isWebGL2&&D.has("EXT_color_buffer_float"));if(Be!==Xn&&ye.convert(Be)!==_.getParameter(_.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===Hn&&(k.isWebGL2||D.has("OES_texture_float")||D.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-F&&te>=0&&te<=A.height-ne&&_.readPixels(H,te,F,ne,ye.convert(qe),ye.convert(Be),Pe)}finally{const Fe=y!==null?ue.get(y).__webglFramebuffer:null;O.bindFramebuffer(_.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(A,H,te=0){const F=Math.pow(2,-te),ne=Math.floor(H.image.width*F),Pe=Math.floor(H.image.height*F);Z.setTexture2D(H,0),_.copyTexSubImage2D(_.TEXTURE_2D,te,0,0,A.x,A.y,ne,Pe),O.unbindTexture()},this.copyTextureToTexture=function(A,H,te,F=0){const ne=H.image.width,Pe=H.image.height,Ie=ye.convert(te.format),Ne=ye.convert(te.type);Z.setTexture2D(te,0),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,te.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,te.unpackAlignment),H.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,F,A.x,A.y,ne,Pe,Ie,Ne,H.image.data):H.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,F,A.x,A.y,H.mipmaps[0].width,H.mipmaps[0].height,Ie,H.mipmaps[0].data):_.texSubImage2D(_.TEXTURE_2D,F,A.x,A.y,Ie,Ne,H.image),F===0&&te.generateMipmaps&&_.generateMipmap(_.TEXTURE_2D),O.unbindTexture()},this.copyTextureToTexture3D=function(A,H,te,F,ne=0){if(E.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=A.max.x-A.min.x+1,Ie=A.max.y-A.min.y+1,Ne=A.max.z-A.min.z+1,Fe=ye.convert(F.format),qe=ye.convert(F.type);let Be;if(F.isData3DTexture)Z.setTexture3D(F,0),Be=_.TEXTURE_3D;else if(F.isDataArrayTexture)Z.setTexture2DArray(F,0),Be=_.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,F.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,F.unpackAlignment);const He=_.getParameter(_.UNPACK_ROW_LENGTH),rt=_.getParameter(_.UNPACK_IMAGE_HEIGHT),at=_.getParameter(_.UNPACK_SKIP_PIXELS),Wt=_.getParameter(_.UNPACK_SKIP_ROWS),vn=_.getParameter(_.UNPACK_SKIP_IMAGES),ot=te.isCompressedTexture?te.mipmaps[0]:te.image;_.pixelStorei(_.UNPACK_ROW_LENGTH,ot.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,ot.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,A.min.x),_.pixelStorei(_.UNPACK_SKIP_ROWS,A.min.y),_.pixelStorei(_.UNPACK_SKIP_IMAGES,A.min.z),te.isDataTexture||te.isData3DTexture?_.texSubImage3D(Be,ne,H.x,H.y,H.z,Pe,Ie,Ne,Fe,qe,ot.data):te.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),_.compressedTexSubImage3D(Be,ne,H.x,H.y,H.z,Pe,Ie,Ne,Fe,ot.data)):_.texSubImage3D(Be,ne,H.x,H.y,H.z,Pe,Ie,Ne,Fe,qe,ot),_.pixelStorei(_.UNPACK_ROW_LENGTH,He),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,rt),_.pixelStorei(_.UNPACK_SKIP_PIXELS,at),_.pixelStorei(_.UNPACK_SKIP_ROWS,Wt),_.pixelStorei(_.UNPACK_SKIP_IMAGES,vn),ne===0&&F.generateMipmaps&&_.generateMipmap(Be),O.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Z.setTextureCube(A,0):A.isData3DTexture?Z.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Z.setTexture2DArray(A,0):Z.setTexture2D(A,0),O.unbindTexture()},this.resetState=function(){T=0,C=0,y=null,O.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ke?hi:Bu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===hi?ke:_n}}class sx extends af{}sx.prototype.isWebGL1Renderer=!0;class ax extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class To extends jn{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],m=[];let x=0;const v=[],p=i/2;let h=0;P(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new sn(f,3)),this.setAttribute("normal",new sn(d,3)),this.setAttribute("uv",new sn(m,2));function P(){const b=new B,T=new B;let C=0;const y=(t-e)/i;for(let z=0;z<=s;z++){const S=[],R=z/s,ae=R*(t-e)+e;for(let re=0;re<=r;re++){const N=re/r,W=N*l+o,j=Math.sin(W),J=Math.cos(W);T.x=ae*j,T.y=-R*i+p,T.z=ae*J,f.push(T.x,T.y,T.z),b.set(j,y,J).normalize(),d.push(b.x,b.y,b.z),m.push(N,1-R),S.push(x++)}v.push(S)}for(let z=0;z<r;z++)for(let S=0;S<s;S++){const R=v[S][z],ae=v[S+1][z],re=v[S+1][z+1],N=v[S][z+1];u.push(R,ae,N),u.push(ae,re,N),C+=6}c.addGroup(h,C,0),h+=C}function E(b){const T=x,C=new ze,y=new B;let z=0;const S=b===!0?e:t,R=b===!0?1:-1;for(let re=1;re<=r;re++)f.push(0,p*R,0),d.push(0,R,0),m.push(.5,.5),x++;const ae=x;for(let re=0;re<=r;re++){const W=re/r*l+o,j=Math.cos(W),J=Math.sin(W);y.x=S*J,y.y=p*R,y.z=S*j,f.push(y.x,y.y,y.z),d.push(0,R,0),C.x=j*.5+.5,C.y=J*.5*R+.5,m.push(C.x,C.y),x++}for(let re=0;re<r;re++){const N=T+re,W=ae+re;b===!0?u.push(W,W+1,N):u.push(W+1,W,N),z+=3}c.addGroup(h,z,b===!0?1:2),h+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new To(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Tc extends Ir{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zu,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class of extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ta=new ft,Ac=new B,wc=new B;class ox{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Eo,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ac.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ac),wc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wc),t.updateMatrixWorld(),Ta.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ta),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ta)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class lx extends ox{constructor(){super(new ef(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cx extends of{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new lx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ux extends of{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class fx{constructor(e,t,i=0,r=1/0){this.ray=new Xu(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new So,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Ka(e,this,i,t),i.sort(Rc),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Ka(e[r],this,i,t);return i.sort(Rc),i}}function Rc(n,e){return n.distance-e.distance}function Ka(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,a=r.length;s<a;s++)Ka(r[s],e,t,!0)}}class Cc{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:go}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=go);const Pc={type:"change"},Aa={type:"start"},Lc={type:"end"};class hx extends gi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xi.ROTATE,MIDDLE:xi.DOLLY,RIGHT:xi.PAN},this.touches={ONE:Mi.ROTATE,TWO:Mi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(w){w.addEventListener("keydown",le),this._domElementKeyEvents=w},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",le),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Pc),i.update(),s=r.NONE},this.update=function(){const w=new B,ee=new mi().setFromUnitVectors(e.up,new B(0,1,0)),he=ee.clone().invert(),X=new B,Re=new mi,Le=new B,Ue=2*Math.PI;return function(){const be=i.object.position;w.copy(be).sub(i.target),w.applyQuaternion(ee),o.setFromVector3(w),i.autoRotate&&s===r.NONE&&S(y()),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let De=i.minAzimuthAngle,Ye=i.maxAzimuthAngle;return isFinite(De)&&isFinite(Ye)&&(De<-Math.PI?De+=Ue:De>Math.PI&&(De-=Ue),Ye<-Math.PI?Ye+=Ue:Ye>Math.PI&&(Ye-=Ue),De<=Ye?o.theta=Math.max(De,Math.min(Ye,o.theta)):o.theta=o.theta>(De+Ye)/2?Math.max(De,o.theta):Math.min(Ye,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(i.minDistance,Math.min(i.maxDistance,o.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),w.setFromSpherical(o),w.applyQuaternion(he),be.copy(i.target).add(w),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||X.distanceToSquared(i.object.position)>a||8*(1-Re.dot(i.object.quaternion))>a||Le.distanceToSquared(i.target)>0?(i.dispatchEvent(Pc),X.copy(i.object.position),Re.copy(i.object.quaternion),Le.copy(i.target),f=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",M),i.domElement.removeEventListener("pointerdown",D),i.domElement.removeEventListener("pointercancel",O),i.domElement.removeEventListener("wheel",Z),i.domElement.removeEventListener("pointermove",k),i.domElement.removeEventListener("pointerup",O),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",le),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Cc,l=new Cc;let c=1;const u=new B;let f=!1;const d=new ze,m=new ze,x=new ze,v=new ze,p=new ze,h=new ze,P=new ze,E=new ze,b=new ze,T=[],C={};function y(){return 2*Math.PI/60/60*i.autoRotateSpeed}function z(){return Math.pow(.95,i.zoomSpeed)}function S(w){l.theta-=w}function R(w){l.phi-=w}const ae=function(){const w=new B;return function(he,X){w.setFromMatrixColumn(X,0),w.multiplyScalar(-he),u.add(w)}}(),re=function(){const w=new B;return function(he,X){i.screenSpacePanning===!0?w.setFromMatrixColumn(X,1):(w.setFromMatrixColumn(X,0),w.crossVectors(i.object.up,w)),w.multiplyScalar(he),u.add(w)}}(),N=function(){const w=new B;return function(he,X){const Re=i.domElement;if(i.object.isPerspectiveCamera){const Le=i.object.position;w.copy(Le).sub(i.target);let Ue=w.length();Ue*=Math.tan(i.object.fov/2*Math.PI/180),ae(2*he*Ue/Re.clientHeight,i.object.matrix),re(2*X*Ue/Re.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(ae(he*(i.object.right-i.object.left)/i.object.zoom/Re.clientWidth,i.object.matrix),re(X*(i.object.top-i.object.bottom)/i.object.zoom/Re.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function W(w){i.object.isPerspectiveCamera?c/=w:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*w)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function j(w){i.object.isPerspectiveCamera?c*=w:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/w)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function J(w){d.set(w.clientX,w.clientY)}function V(w){P.set(w.clientX,w.clientY)}function q(w){v.set(w.clientX,w.clientY)}function de(w){m.set(w.clientX,w.clientY),x.subVectors(m,d).multiplyScalar(i.rotateSpeed);const ee=i.domElement;S(2*Math.PI*x.x/ee.clientHeight),R(2*Math.PI*x.y/ee.clientHeight),d.copy(m),i.update()}function oe(w){E.set(w.clientX,w.clientY),b.subVectors(E,P),b.y>0?W(z()):b.y<0&&j(z()),P.copy(E),i.update()}function G(w){p.set(w.clientX,w.clientY),h.subVectors(p,v).multiplyScalar(i.panSpeed),N(h.x,h.y),v.copy(p),i.update()}function Y(w){w.deltaY<0?j(z()):w.deltaY>0&&W(z()),i.update()}function ve(w){let ee=!1;switch(w.code){case i.keys.UP:w.ctrlKey||w.metaKey||w.shiftKey?R(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(0,i.keyPanSpeed),ee=!0;break;case i.keys.BOTTOM:w.ctrlKey||w.metaKey||w.shiftKey?R(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(0,-i.keyPanSpeed),ee=!0;break;case i.keys.LEFT:w.ctrlKey||w.metaKey||w.shiftKey?S(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(i.keyPanSpeed,0),ee=!0;break;case i.keys.RIGHT:w.ctrlKey||w.metaKey||w.shiftKey?S(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(-i.keyPanSpeed,0),ee=!0;break}ee&&(w.preventDefault(),i.update())}function xe(){if(T.length===1)d.set(T[0].pageX,T[0].pageY);else{const w=.5*(T[0].pageX+T[1].pageX),ee=.5*(T[0].pageY+T[1].pageY);d.set(w,ee)}}function Se(){if(T.length===1)v.set(T[0].pageX,T[0].pageY);else{const w=.5*(T[0].pageX+T[1].pageX),ee=.5*(T[0].pageY+T[1].pageY);v.set(w,ee)}}function Ce(){const w=T[0].pageX-T[1].pageX,ee=T[0].pageY-T[1].pageY,he=Math.sqrt(w*w+ee*ee);P.set(0,he)}function $(){i.enableZoom&&Ce(),i.enablePan&&Se()}function pe(){i.enableZoom&&Ce(),i.enableRotate&&xe()}function me(w){if(T.length==1)m.set(w.pageX,w.pageY);else{const he=ie(w),X=.5*(w.pageX+he.x),Re=.5*(w.pageY+he.y);m.set(X,Re)}x.subVectors(m,d).multiplyScalar(i.rotateSpeed);const ee=i.domElement;S(2*Math.PI*x.x/ee.clientHeight),R(2*Math.PI*x.y/ee.clientHeight),d.copy(m)}function fe(w){if(T.length===1)p.set(w.pageX,w.pageY);else{const ee=ie(w),he=.5*(w.pageX+ee.x),X=.5*(w.pageY+ee.y);p.set(he,X)}h.subVectors(p,v).multiplyScalar(i.panSpeed),N(h.x,h.y),v.copy(p)}function Ee(w){const ee=ie(w),he=w.pageX-ee.x,X=w.pageY-ee.y,Re=Math.sqrt(he*he+X*X);E.set(0,Re),b.set(0,Math.pow(E.y/P.y,i.zoomSpeed)),W(b.y),P.copy(E)}function _(w){i.enableZoom&&Ee(w),i.enablePan&&fe(w)}function L(w){i.enableZoom&&Ee(w),i.enableRotate&&me(w)}function D(w){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(w.pointerId),i.domElement.addEventListener("pointermove",k),i.domElement.addEventListener("pointerup",O)),g(w),w.pointerType==="touch"?se(w):ce(w))}function k(w){i.enabled!==!1&&(w.pointerType==="touch"?Ae(w):ue(w))}function O(w){I(w),T.length===0&&(i.domElement.releasePointerCapture(w.pointerId),i.domElement.removeEventListener("pointermove",k),i.domElement.removeEventListener("pointerup",O)),i.dispatchEvent(Lc),s=r.NONE}function ce(w){let ee;switch(w.button){case 0:ee=i.mouseButtons.LEFT;break;case 1:ee=i.mouseButtons.MIDDLE;break;case 2:ee=i.mouseButtons.RIGHT;break;default:ee=-1}switch(ee){case xi.DOLLY:if(i.enableZoom===!1)return;V(w),s=r.DOLLY;break;case xi.ROTATE:if(w.ctrlKey||w.metaKey||w.shiftKey){if(i.enablePan===!1)return;q(w),s=r.PAN}else{if(i.enableRotate===!1)return;J(w),s=r.ROTATE}break;case xi.PAN:if(w.ctrlKey||w.metaKey||w.shiftKey){if(i.enableRotate===!1)return;J(w),s=r.ROTATE}else{if(i.enablePan===!1)return;q(w),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Aa)}function ue(w){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;de(w);break;case r.DOLLY:if(i.enableZoom===!1)return;oe(w);break;case r.PAN:if(i.enablePan===!1)return;G(w);break}}function Z(w){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(w.preventDefault(),i.dispatchEvent(Aa),Y(w),i.dispatchEvent(Lc))}function le(w){i.enabled===!1||i.enablePan===!1||ve(w)}function se(w){switch(Q(w),T.length){case 1:switch(i.touches.ONE){case Mi.ROTATE:if(i.enableRotate===!1)return;xe(),s=r.TOUCH_ROTATE;break;case Mi.PAN:if(i.enablePan===!1)return;Se(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Mi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;$(),s=r.TOUCH_DOLLY_PAN;break;case Mi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;pe(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Aa)}function Ae(w){switch(Q(w),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;me(w),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;fe(w),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;_(w),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;L(w),i.update();break;default:s=r.NONE}}function M(w){i.enabled!==!1&&w.preventDefault()}function g(w){T.push(w)}function I(w){delete C[w.pointerId];for(let ee=0;ee<T.length;ee++)if(T[ee].pointerId==w.pointerId){T.splice(ee,1);return}}function Q(w){let ee=C[w.pointerId];ee===void 0&&(ee=new ze,C[w.pointerId]=ee),ee.set(w.pageX,w.pageY)}function ie(w){const ee=w.pointerId===T[0].pointerId?T[1]:T[0];return C[ee.pointerId]}i.domElement.addEventListener("contextmenu",M),i.domElement.addEventListener("pointerdown",D),i.domElement.addEventListener("pointercancel",O),i.domElement.addEventListener("wheel",Z,{passive:!1}),this.update()}}var Gn={Linear:{None:function(n){return n}},Quadratic:{In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}},Cubic:{In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}},Quartic:{In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}},Quintic:{In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}},Sinusoidal:{In:function(n){return 1-Math.cos(n*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return .5*(1-Math.cos(Math.PI*n))}},Exponential:{In:function(n){return n===0?0:Math.pow(1024,n-1)},Out:function(n){return n===1?1:1-Math.pow(2,-10*n)},InOut:function(n){return n===0?0:n===1?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}},Circular:{In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}},Elastic:{In:function(n){return n===0?0:n===1?1:-Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI)},Out:function(n){return n===0?0:n===1?1:Math.pow(2,-10*n)*Math.sin((n-.1)*5*Math.PI)+1},InOut:function(n){return n===0?0:n===1?1:(n*=2,n<1?-.5*Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin((n-1.1)*5*Math.PI)+1)}},Back:{In:function(n){var e=1.70158;return n*n*((e+1)*n-e)},Out:function(n){var e=1.70158;return--n*n*((e+1)*n+e)+1},InOut:function(n){var e=2.5949095;return(n*=2)<1?.5*(n*n*((e+1)*n-e)):.5*((n-=2)*n*((e+1)*n+e)+2)}},Bounce:{In:function(n){return 1-Gn.Bounce.Out(1-n)},Out:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return n<.5?Gn.Bounce.In(n*2)*.5:Gn.Bounce.Out(n*2-1)*.5+.5}}},gr;typeof self>"u"&&typeof process<"u"&&process.hrtime?gr=function(){var n=process.hrtime();return n[0]*1e3+n[1]/1e6}:typeof self<"u"&&self.performance!==void 0&&self.performance.now!==void 0?gr=self.performance.now.bind(self.performance):Date.now!==void 0?gr=Date.now:gr=function(){return new Date().getTime()};var zi=gr,dx=function(){function n(){this._tweens={},this._tweensAddedDuringUpdate={}}return n.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},n.prototype.removeAll=function(){this._tweens={}},n.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},n.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},n.prototype.update=function(e,t){e===void 0&&(e=zi()),t===void 0&&(t=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<i.length;r++){var s=this._tweens[i[r]],a=!t;s&&s.update(e,a)===!1&&!t&&delete this._tweens[i[r]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},n}(),vr={Linear:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),s=vr.Utils.Linear;return e<0?s(n[0],n[1],i):e>1?s(n[t],n[t-1],t-i):s(n[r],n[r+1>t?t:r+1],i-r)},Bezier:function(n,e){for(var t=0,i=n.length-1,r=Math.pow,s=vr.Utils.Bernstein,a=0;a<=i;a++)t+=r(1-e,i-a)*r(e,a)*n[a]*s(i,a);return t},CatmullRom:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),s=vr.Utils.CatmullRom;return n[0]===n[t]?(e<0&&(r=Math.floor(i=t*(1+e))),s(n[(r-1+t)%t],n[r],n[(r+1)%t],n[(r+2)%t],i-r)):e<0?n[0]-(s(n[0],n[0],n[1],n[1],-i)-n[0]):e>1?n[t]-(s(n[t],n[t],n[t-1],n[t-1],i-t)-n[t]):s(n[r?r-1:0],n[r],n[t<r+1?t:r+1],n[t<r+2?t:r+2],i-r)},Utils:{Linear:function(n,e,t){return(e-n)*t+n},Bernstein:function(n,e){var t=vr.Utils.Factorial;return t(n)/t(e)/t(n-e)},Factorial:function(){var n=[1];return function(e){var t=1;if(n[e])return n[e];for(var i=e;i>1;i--)t*=i;return n[e]=t,t}}(),CatmullRom:function(n,e,t,i,r){var s=(t-n)*.5,a=(i-e)*.5,o=r*r,l=r*o;return(2*e-2*t+s+a)*l+(-3*e+3*t-2*s-a)*o+s*r+e}}},px=function(){function n(){}return n.nextId=function(){return n._nextId++},n._nextId=0,n}(),lf=new dx,Oi=function(){function n(e,t){t===void 0&&(t=lf),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Gn.Linear.None,this._interpolationFunction=vr.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._id=px.nextId(),this._isChainStopped=!1,this._goToEnd=!1}return n.prototype.getId=function(){return this._id},n.prototype.isPlaying=function(){return this._isPlaying},n.prototype.isPaused=function(){return this._isPaused},n.prototype.to=function(e,t){return this._valuesEnd=Object.create(e),t!==void 0&&(this._duration=t),this},n.prototype.duration=function(e){return this._duration=e,this},n.prototype.start=function(e){if(this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var t in this._valuesStartRepeat)this._swapEndStartRepeatValues(t),this._valuesStart[t]=this._valuesStartRepeat[t]}return this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e!==void 0?typeof e=="string"?zi()+parseFloat(e):e:zi(),this._startTime+=this._delayTime,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat),this},n.prototype._setupProperties=function(e,t,i,r){for(var s in i){var a=e[s],o=Array.isArray(a),l=o?"array":typeof a,c=!o&&Array.isArray(i[s]);if(!(l==="undefined"||l==="function")){if(c){var u=i[s];if(u.length===0)continue;u=u.map(this._handleRelativeValue.bind(this,a)),i[s]=[a].concat(u)}if((l==="object"||o)&&a&&!c){t[s]=o?[]:{};for(var f in a)t[s][f]=a[f];r[s]=o?[]:{},this._setupProperties(a,t[s],i[s],r[s])}else typeof t[s]>"u"&&(t[s]=a),o||(t[s]*=1),c?r[s]=i[s].slice().reverse():r[s]=t[s]||0}}},n.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},n.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},n.prototype.pause=function(e){return e===void 0&&(e=zi()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},n.prototype.resume=function(e){return e===void 0&&(e=zi()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},n.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},n.prototype.group=function(e){return this._group=e,this},n.prototype.delay=function(e){return this._delayTime=e,this},n.prototype.repeat=function(e){return this._initialRepeat=e,this._repeat=e,this},n.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},n.prototype.yoyo=function(e){return this._yoyo=e,this},n.prototype.easing=function(e){return this._easingFunction=e,this},n.prototype.interpolation=function(e){return this._interpolationFunction=e,this},n.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},n.prototype.onStart=function(e){return this._onStartCallback=e,this},n.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},n.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},n.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},n.prototype.onStop=function(e){return this._onStopCallback=e,this},n.prototype.update=function(e,t){if(e===void 0&&(e=zi()),t===void 0&&(t=!0),this._isPaused)return!0;var i,r,s=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>s)return!1;t&&this.start(e)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),r=(e-this._startTime)/this._duration,r=this._duration===0||r>1?1:r;var a=this._easingFunction(r);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,a),this._onUpdateCallback&&this._onUpdateCallback(this._object,r),r===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(i in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[i]=="string"&&(this._valuesStartRepeat[i]=this._valuesStartRepeat[i]+parseFloat(this._valuesEnd[i])),this._yoyo&&this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var o=0,l=this._chainedTweens.length;o<l;o++)this._chainedTweens[o].start(this._startTime+this._duration);return this._isPlaying=!1,!1}return!0},n.prototype._updateProperties=function(e,t,i,r){for(var s in i)if(t[s]!==void 0){var a=t[s]||0,o=i[s],l=Array.isArray(e[s]),c=Array.isArray(o),u=!l&&c;u?e[s]=this._interpolationFunction(o,r):typeof o=="object"&&o?this._updateProperties(e[s],a,o,r):(o=this._handleRelativeValue(a,o),typeof o=="number"&&(e[s]=a+(o-a)*r))}},n.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},n.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},n}(),gn=lf;gn.getAll.bind(gn);gn.removeAll.bind(gn);gn.add.bind(gn);gn.remove.bind(gn);var mx=gn.update.bind(gn);const _x={id:"alertInfo",class:"absolute -z-10 opacity-0"},gx=_e("div",{class:"bg-blue-500 text-white font-bold text-xl p-2"}," Info ",-1),vx={class:"flex-col"},xx={class:"p-2 text-black-900 text-2xl"},Mx={class:"p-2 text-black-900 text-xl"},Sx=_e("br",null,null,-1),Ex=_e("br",null,null,-1),yx=_e("br",null,null,-1),bx={class:"p-2 text-black-900 text-2xl"},Tx={class:"p-2 text-black-900 text-xl"},Ax={class:"float-left p-2 py-4 text-blue-500 text-xl",href:"https://portail.terra-numerica.org/res/rsrc/785",target:"_blank"},wx={id:"winInfo",class:"absolute -z-10 opacity-0"},Rx={class:"confetti"},Cx={class:"confetti__wrapper"},Px={class:"bg-white p-2 text-xl w-auto h-auto"},Lx={id:"actions_group",class:"absolute z-10 flex flex-wrap w-full justify-center items-center bottom-0"},Ux=["disabled"],Dx=["disabled"],Ix=["disabled","onClick"],Nx=["disabled","onClick"],Fx={class:"rounded-none p-2 text-black font-bold text-xl"},Ox=["disabled","onClick"],Bx=["disabled","onClick"],zx={class:"p-2 m-2 text-black font-bold text-xl"},Hx=["disabled","onClick"],Gx={href:"#/",class:"rounded px-5 p-2 m-2 bg-amber-400 text-black font-bold text-xl"},Vx={__name:"Game",setup(n){const e=Rt(null),t=Rt(0);function i(){Qe.current_language==="fr"?Qe.current_language="eng":Qe.current_language="fr"}const r=Rt(!1),s=Rt(0),a=Rt(4),o=Rt(0),l=Rt(0),c=Rt(!1),u=Rt(!1);let f;const d=Rt(0);let m,x,v,p,h,P,E=!1;const b=new ze(1/0,1/0),T=new _r;let C=[],y=[],z=[];f=new fx,uu(()=>{try{v=new ax,v.background=new Ze("gainsboro"),x=new cx("white",1),x.position.set(1,1,1),v.add(x),v.add(T);let $=new ux("white",.5);v.add($),h=new af({canvas:e.value,antialias:!0,alpha:!0}),h.setPixelRatio(window.devicePixelRatio),h.setSize(window.innerWidth,window.innerHeight),p=new kt(30,innerWidth/innerHeight),p.position.set(0,2,10),p.lookAt(v.position),P=new hx(p,h.domElement),P.enableDamping=!0,N(),oe()}catch{}});const S=$=>{for(let pe=$.length-1;pe>0;pe--){const me=Math.floor(Math.random()*(pe+1)),fe=$[pe];$[pe]=$[me],$[me]=fe}};function R(){for(;T.children.length;)v.attach(T.children[0]);s.value=0,c.value=!0;for(let $=0;$<C.length;$++)C[$].rotation.set(0,0,0);if(S(C),y=[],t.value===1)for(let $=C.length-1;$>=0;$--)y.push({id:C[$].id,side:Math.floor(Math.random()*2)});else for(let $=C.length-1;$>=0;$--)y.push({id:C[$].id,side:0});z=[];for(let $=C.length-1;$>=0;$--)C[$].position.y=.2*$-.5,z.push({id:C[$].id,y:C[$].position.y,side:y[$].side});for(let $=0;$<C.length;$++)y[$].side===1&&(C[$].rotation.x+=Math.PI/2*2),y[$].side=z[$].side;c.value=!1,u.value=!0}const ae=Rt(!1);function re(){if(ae.value)return;for(ae.value=!0;T.children.length;)v.attach(T.children[0]);y=[];let $=!0,pe=o.value;for(let me=0;me<z.length;me++)y[me]={id:z[me].id,side:z[me].side},y[me].id!==pe&&($=!1),pe++;for(let me=0;me<z.length;me++)for(let fe=0;fe<C.length;fe++)z[me].id===C[fe].id&&(C[fe].rotation.set(0,0,0),z[me].side===1&&(C[fe].rotation.x+=Math.PI/2*2),C[fe].position.set(C[fe].position.x,z[me].y,C[fe].position.z));s.value=0,$?u.value=!1:u.value=!0,E=!1,c.value=!1}function N(){if(E=!1,T.clear(),z=[],y=[],C.length>0)for(let $=0;$<C.length;$++)C[$].geometry.dispose(),v.remove(C[$]);C=[];for(let $=a.value-1;$>=0;$--){let pe=new Ze().setHSL($/a.value,$%2,$%2?.5:1),me=new To(1.2-$/a.value/1,1.2-$/a.value/1,.18),fe;if(t.value===1){const Ee=me.getAttribute("position"),_=new sn(Ee.count*3,3);for(let L=0;L<Ee.count;L+=1){let D=new Ze;L>=Ee.count-196/3?D.setRGB(0,0,0):D.copy(pe),_.setXYZ(L,D.r,D.g,D.b)}me.setAttribute("color",_),fe=new hn(me,new Tc({vertexColors:!0}))}else fe=new hn(me,new Tc({color:pe}));fe.position.y=.2*$-.5,y.push({id:fe.id,side:0}),z.push({id:fe.id,y:fe.position.y,side:0}),C.push(fe),v.add(fe)}o.value=y[0].id,l.value=y[y.length-1].id}function W(){if(C.length<20){d.value=null;for(let $=0;$<C.length;$++)C[$].geometry.dispose(),v.remove(C[$]);y=[],C=[],C.length=0,l.value+=1,a.value+=1,N()}}function j(){if(C.length>4){d.value=null;for(let $=0;$<C.length;$++)C[$].geometry.dispose(),v.remove(C[$]);y=[],C=[],C.length=0,a.value-=1,l.value-=1,N()}}document.addEventListener("mousedown",$=>{if($.detail===2&&!c.value&&!r.value){b.x=$.clientX/window.innerWidth*2-1,b.y=-($.clientY/window.innerHeight)*2+1,f.setFromCamera(b,p);const pe=f.intersectObjects(C);if(!(pe.length>0&&pe[0].object.type==="Mesh"))return;for(;T.children.length;)v.attach(T.children[0]);T.rotation.z=0,T.position.y=0,c.value=!0;let me=pe[0].object.position.y;m=pe[0].object.id,T.position.y=(.2*(a.value-1)-.5+me)/2;let fe=0;for(;fe<C.length;)C[fe].position.y>=me&&T.attach(C[fe]),fe++;for(d.value=T.position.y,fe=0;fe<y.length&&y[fe].id!==m;)fe++;if(t.value===1)if(fe===0)y[0].side=y[0].side===0?1:0;else for(let Ee=0;Ee<fe+1;Ee++)y[Ee].side=y[Ee].side===0?1:0;for(let Ee=0;Ee<fe/2;Ee++){let _=y[Ee];y[Ee]=y[fe-Ee],y[fe-Ee]=_}new Oi(T.position).to({y:T.position.y+1},300).easing(Gn.Quadratic.Out).chain(new Oi(T.position).to({y:d.value},300).easing(Gn.Quadratic.In)).start(),new Oi(T.rotation).to({z:Math.PI},600).onComplete(()=>{s.value+=1,c.value=!1;let Ee=o.value,_=0;for(E=!0;_<y.length;){if(y[_].id!==Ee){E=!1;break}_++,Ee++}if(t.value===1)for(let L=0;L<y.length;L++)y[L].side!==0&&(E=!1,L=y.length);E?u.value=!1:u.value=!0,t.value===1?E&&ve():E&&fe!==0&&ve()}).start()}},!1),window.addEventListener("resize",()=>{p.aspect=window.innerWidth/window.innerHeight,p.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)},!1),window.addEventListener("zoom",()=>{p.aspect=window.innerWidth/window.innerHeight,p.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)},!1);function J($){return new Promise(pe=>{setTimeout(pe,$)})}async function V($){for(;T.children.length;)v.attach(T.children[0]);T.rotation.z=0,T.position.y=0;let me=v.getObjectById($).position.y;T.position.y=(.2*(a.value-1)-.5+me)/2;let fe=0;for(;fe<C.length;)C[fe].position.y>=me&&T.attach(C[fe]),fe++;let Ee=T.position.y;new Oi(T.position).to({y:T.position.y+1},100).easing(Gn.Quadratic.Out).chain(new Oi(T.position).to({y:Ee},100).easing(Gn.Quadratic.In)).start(),new Oi(T.rotation).to({z:Math.PI},200).start(),$=-1}async function q($,pe){c.value=!0;let me=0;for(;me<y.length;){if(y[me].id>=$){$=y[me].id;break}me++}if(me===0&&$===y[me].id&&pe===y.length-1)if(t.value===1){let fe=!0;for(let Ee=0;Ee<y.length;Ee++)y[Ee].side===1&&(fe=!1,Ee=y.length);if(fe){u.value=!1,c.value=!1,ae.value=!1,console.log("done");return}}else{console.log("done"),ae.value=!1,u.value=!1,c.value=!1;return}if(me===0)if(pe===y.length-1)if(t.value===1){if(y[0].side===1){V(y[0].id),await J(600),y[me].side=y[me].side===0?1:0,console.log("done"),u.value=!1,c.value=!1;return}}else{let fe=y[0];y[0]=y[1],y[1]=fe,V(y[0].id),await J(600),y[0]=y[0]===1?0:1,y[1]=y[1]===1?0:1,console.log("done"),u.value=!1,c.value=!1;return}else{t.value===1&&y[me].side===0&&(V(y[0].id),await J(600),y[0].side=1);for(let fe=0;fe<(y.length-pe)/2;fe++){let Ee=y[fe];y[fe]=y[y.length-1-fe-pe],y[y.length-1-fe-pe]=Ee}if(V(y[me].id),await J(600),t.value===1)for(let fe=0;fe<y.length-pe;fe++)y[fe].side=y[fe].side===0?1:0}else if(me>0&&y.length-1-pe!==me){for(let fe=0;fe<me/2;fe++){let Ee=y[fe];y[fe]=y[me-fe],y[me-fe]=Ee}if(V($),await J(600),t.value===1)for(let fe=0;fe<me+1;fe++)y[fe].side=y[fe].side===0?1:0;$+=1,pe--}else if(me===y.length-1-pe&&t.value===1&&y[me].side===1){V(y[me].id),await J(600);for(let fe=0;fe<(y.length-pe)/2;fe++){let Ee=y[fe];y[fe]=y[y.length-1-fe-pe],y[y.length-1-fe-pe]=Ee}for(let fe=0;fe<y.length-pe;fe++)y[fe].side=y[fe].side===0?1:0;$+=1,pe--}pe++,$-=1,await J(100),q($,pe)}function de(){s.value=0,q(l.value,0)}function oe($){p.updateMatrixWorld(),P.update(),mx(),x.position.copy(p.position),h.render(v,p),requestAnimationFrame(oe)}function G(){r.value?Y():(document.getElementById("alertInfo").classList="absolute z-40 lg:flex-col lg:w-1/3 lg:left-1/3 lg:top-1/4 sm:left-0 md:left-0 sm:h-full opacity-100 bg-white",r.value=!0)}function Y(){document.getElementById("alertInfo").classList="absolute -z-10 opacity-0",r.value=!1}function ve(){Ce(),c.value=!0,document.getElementById("winInfo").classList="absolute flex justify-center items-center text-center z-40 w-full top-1/4 opacity-100",setTimeout(()=>{s.value=0,document.getElementById("winInfo").classList="absolute -z-10 opacity-0",c.value=!1},4e3)}const xe=Rt(!1),Se=Rt(0),Ce=()=>{xe.value=!xe.value,Se.value++};return($,pe)=>(Bn(),Rr(Gt,null,[dn(wu,{class:"absolute p-2"}),_e("div",_x,[gx,_e("div",vx,[_e("p",xx,st(Ve(ut)[Ve(Qe).current_language].game_rule_title),1),_e("p",Mx,st(Ve(ut)[Ve(Qe).current_language].game_rule_description),1),Sx,Ex,yx,_e("p",bx,st(Ve(ut)[Ve(Qe).current_language].how_to_play_title),1),_e("p",Tx,st(Ve(ut)[Ve(Qe).current_language].how_to_play_description),1),_e("a",Ax,st(Ve(ut)[Ve(Qe).current_language].link_text),1),_e("button",{onClick:Y,class:"rounded float-right px-5 p-2 m-2 bg-blue-500 text-white font-bold"},"OK")])]),_e("div",wx,[_e("div",Rx,[_e("div",Cx,[(Bn(),Rr(Gt,null,Fh(51,me=>_e("span",null,[(Bn(),Ba(ll,{class:ji("confetti-left-"+(me-1)),key:Se.value},null,8,["class"])),(Bn(),Ba(ll,{class:ji("confetti-right-"+(me-1)),key:Se.value},null,8,["class"]))])),64))])]),_e("p",Px,st(Ve(ut)[Ve(Qe).current_language].winMessage),1)]),_e("div",Lx,[_e("button",{onClick:i,class:"rounded p-2 m-2 bg-gray-900 text-white font-bold text-xl"},st(Ve(ut)[Ve(Qe).current_language].lang),1),_e("button",{disabled:c.value,onClick:G,class:"rounded p-2 m-2 bg-gray-900 text-white font-bold"}," Info ",8,Ux),_e("button",{disabled:c.value,onClick:pe[0]||(pe[0]=()=>{t.value===0?t.value=1:t.value=0,N()}),class:"rounded p-2 px-4 m-2 bg-gray-900 text-white font-bold"}," Version "+st(t.value),9,Dx),_e("button",{disabled:c.value,class:"rounded p-2 m-2 bg-amber-400 text-black font-bold text-xl",onClick:lr(R,["prevent"])},st(Ve(ut)[Ve(Qe).current_language].randomize),9,Ix),_e("button",{disabled:c.value||!(a.value>4),class:"rounded-l p-2 m-2 bg-blue-500 text-white font-bold text-xl",onClick:lr(j,["prevent"])},"-",8,Nx),_e("span",Fx,st(a.value),1),_e("button",{disabled:c.value||!(a.value<20),class:"rounded-r p-2 m-2 bg-blue-500 text-white font-bold text-xl",onClick:lr(W,["prevent"])},"+",8,Ox),_e("button",{disabled:c.value,class:"rounded p-2 m-2 bg-teal-600 text-white font-bold text-xl",onClick:lr(re,["prevent"])},st(Ve(ut)[Ve(Qe).current_language].restart),9,Bx),_e("span",zx,st(Ve(ut)[Ve(Qe).current_language].flips_text)+": "+st(s.value),1),_e("button",{disabled:Ve(E)||c.value||!u.value,class:"flex justify-end rounded p-2 m-2 bg-blue-500 text-black font-bold text-xl",onClick:lr(de,["prevent"])},st(Ve(ut)[Ve(Qe).current_language].solve),9,Hx),_e("a",Gx,st(Ve(ut)[Ve(Qe).current_language].back),1)]),_e("canvas",{class:"z-0",ref_key:"canvas",ref:e},null,512)],64))}},kx={__name:"App",setup(n){const e={"/":ep,"/game":Vx},t=Rt(window.location.hash);window.addEventListener("hashchange",()=>{t.value=window.location.hash});const i=Au(()=>e[t.value.slice(1)||"/"]||NotFound);return(r,s)=>(Bn(),Ba(Ih(i.value)))}};Hd(kx).mount("#app");
