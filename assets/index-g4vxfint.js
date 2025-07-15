(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();function h0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Vc={exports:{}},li={},$c={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp;function f0(){if(Rp)return oe;Rp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.iterator;function w(C){return C===null||typeof C!="object"?null:(C=v&&C[v]||C["@@iterator"],typeof C=="function"?C:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,M={};function O(C,P,ie){this.props=C,this.context=P,this.refs=M,this.updater=ie||T}O.prototype.isReactComponent={},O.prototype.setState=function(C,P){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,P,"setState")},O.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function re(){}re.prototype=O.prototype;function D(C,P,ie){this.props=C,this.context=P,this.refs=M,this.updater=ie||T}var q=D.prototype=new re;q.constructor=D,R(q,O.prototype),q.isPureReactComponent=!0;var ne=Array.isArray,de=Object.prototype.hasOwnProperty,U={current:null},_e={key:!0,ref:!0,__self:!0,__source:!0};function xe(C,P,ie){var ce,pe={},me=null,Ie=null;if(P!=null)for(ce in P.ref!==void 0&&(Ie=P.ref),P.key!==void 0&&(me=""+P.key),P)de.call(P,ce)&&!_e.hasOwnProperty(ce)&&(pe[ce]=P[ce]);var ke=arguments.length-2;if(ke===1)pe.children=ie;else if(1<ke){for(var Ae=Array(ke),kt=0;kt<ke;kt++)Ae[kt]=arguments[kt+2];pe.children=Ae}if(C&&C.defaultProps)for(ce in ke=C.defaultProps,ke)pe[ce]===void 0&&(pe[ce]=ke[ce]);return{$$typeof:s,type:C,key:me,ref:Ie,props:pe,_owner:U.current}}function Me(C,P){return{$$typeof:s,type:C.type,key:P,ref:C.ref,props:C.props,_owner:C._owner}}function ee(C){return typeof C=="object"&&C!==null&&C.$$typeof===s}function he(C){var P={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(ie){return P[ie]})}var se=/\/+/g;function Je(C,P){return typeof C=="object"&&C!==null&&C.key!=null?he(""+C.key):P.toString(36)}function lt(C,P,ie,ce,pe){var me=typeof C;(me==="undefined"||me==="boolean")&&(C=null);var Ie=!1;if(C===null)Ie=!0;else switch(me){case"string":case"number":Ie=!0;break;case"object":switch(C.$$typeof){case s:case e:Ie=!0}}if(Ie)return Ie=C,pe=pe(Ie),C=ce===""?"."+Je(Ie,0):ce,ne(pe)?(ie="",C!=null&&(ie=C.replace(se,"$&/")+"/"),lt(pe,P,ie,"",function(kt){return kt})):pe!=null&&(ee(pe)&&(pe=Me(pe,ie+(!pe.key||Ie&&Ie.key===pe.key?"":(""+pe.key).replace(se,"$&/")+"/")+C)),P.push(pe)),1;if(Ie=0,ce=ce===""?".":ce+":",ne(C))for(var ke=0;ke<C.length;ke++){me=C[ke];var Ae=ce+Je(me,ke);Ie+=lt(me,P,ie,Ae,pe)}else if(Ae=w(C),typeof Ae=="function")for(C=Ae.call(C),ke=0;!(me=C.next()).done;)me=me.value,Ae=ce+Je(me,ke++),Ie+=lt(me,P,ie,Ae,pe);else if(me==="object")throw P=String(C),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.");return Ie}function Nt(C,P,ie){if(C==null)return C;var ce=[],pe=0;return lt(C,ce,"","",function(me){return P.call(ie,me,pe++)}),ce}function nt(C){if(C._status===-1){var P=C._result;P=P(),P.then(function(ie){(C._status===0||C._status===-1)&&(C._status=1,C._result=ie)},function(ie){(C._status===0||C._status===-1)&&(C._status=2,C._result=ie)}),C._status===-1&&(C._status=0,C._result=P)}if(C._status===1)return C._result.default;throw C._result}var je={current:null},z={transition:null},X={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:z,ReactCurrentOwner:U};function H(){throw Error("act(...) is not supported in production builds of React.")}return oe.Children={map:Nt,forEach:function(C,P,ie){Nt(C,function(){P.apply(this,arguments)},ie)},count:function(C){var P=0;return Nt(C,function(){P++}),P},toArray:function(C){return Nt(C,function(P){return P})||[]},only:function(C){if(!ee(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},oe.Component=O,oe.Fragment=n,oe.Profiler=a,oe.PureComponent=D,oe.StrictMode=i,oe.Suspense=m,oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X,oe.act=H,oe.cloneElement=function(C,P,ie){if(C==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+C+".");var ce=R({},C.props),pe=C.key,me=C.ref,Ie=C._owner;if(P!=null){if(P.ref!==void 0&&(me=P.ref,Ie=U.current),P.key!==void 0&&(pe=""+P.key),C.type&&C.type.defaultProps)var ke=C.type.defaultProps;for(Ae in P)de.call(P,Ae)&&!_e.hasOwnProperty(Ae)&&(ce[Ae]=P[Ae]===void 0&&ke!==void 0?ke[Ae]:P[Ae])}var Ae=arguments.length-2;if(Ae===1)ce.children=ie;else if(1<Ae){ke=Array(Ae);for(var kt=0;kt<Ae;kt++)ke[kt]=arguments[kt+2];ce.children=ke}return{$$typeof:s,type:C.type,key:pe,ref:me,props:ce,_owner:Ie}},oe.createContext=function(C){return C={$$typeof:d,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},C.Provider={$$typeof:c,_context:C},C.Consumer=C},oe.createElement=xe,oe.createFactory=function(C){var P=xe.bind(null,C);return P.type=C,P},oe.createRef=function(){return{current:null}},oe.forwardRef=function(C){return{$$typeof:f,render:C}},oe.isValidElement=ee,oe.lazy=function(C){return{$$typeof:x,_payload:{_status:-1,_result:C},_init:nt}},oe.memo=function(C,P){return{$$typeof:_,type:C,compare:P===void 0?null:P}},oe.startTransition=function(C){var P=z.transition;z.transition={};try{C()}finally{z.transition=P}},oe.unstable_act=H,oe.useCallback=function(C,P){return je.current.useCallback(C,P)},oe.useContext=function(C){return je.current.useContext(C)},oe.useDebugValue=function(){},oe.useDeferredValue=function(C){return je.current.useDeferredValue(C)},oe.useEffect=function(C,P){return je.current.useEffect(C,P)},oe.useId=function(){return je.current.useId()},oe.useImperativeHandle=function(C,P,ie){return je.current.useImperativeHandle(C,P,ie)},oe.useInsertionEffect=function(C,P){return je.current.useInsertionEffect(C,P)},oe.useLayoutEffect=function(C,P){return je.current.useLayoutEffect(C,P)},oe.useMemo=function(C,P){return je.current.useMemo(C,P)},oe.useReducer=function(C,P,ie){return je.current.useReducer(C,P,ie)},oe.useRef=function(C){return je.current.useRef(C)},oe.useState=function(C){return je.current.useState(C)},oe.useSyncExternalStore=function(C,P,ie){return je.current.useSyncExternalStore(C,P,ie)},oe.useTransition=function(){return je.current.useTransition()},oe.version="18.3.1",oe}var bp;function Lu(){return bp||(bp=1,$c.exports=f0()),$c.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp;function p0(){if(Pp)return li;Pp=1;var s=Lu(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(f,m,_){var x,v={},w=null,T=null;_!==void 0&&(w=""+_),m.key!==void 0&&(w=""+m.key),m.ref!==void 0&&(T=m.ref);for(x in m)i.call(m,x)&&!c.hasOwnProperty(x)&&(v[x]=m[x]);if(f&&f.defaultProps)for(x in m=f.defaultProps,m)v[x]===void 0&&(v[x]=m[x]);return{$$typeof:e,type:f,key:w,ref:T,props:v,_owner:a.current}}return li.Fragment=n,li.jsx=d,li.jsxs=d,li}var Ap;function m0(){return Ap||(Ap=1,Vc.exports=p0()),Vc.exports}var p=m0(),K=Lu();const Dp=h0(K);var ea={},Gc={exports:{}},_t={},qc={exports:{}},Kc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op;function g0(){return Op||(Op=1,function(s){function e(z,X){var H=z.length;z.push(X);e:for(;0<H;){var C=H-1>>>1,P=z[C];if(0<a(P,X))z[C]=X,z[H]=P,H=C;else break e}}function n(z){return z.length===0?null:z[0]}function i(z){if(z.length===0)return null;var X=z[0],H=z.pop();if(H!==X){z[0]=H;e:for(var C=0,P=z.length,ie=P>>>1;C<ie;){var ce=2*(C+1)-1,pe=z[ce],me=ce+1,Ie=z[me];if(0>a(pe,H))me<P&&0>a(Ie,pe)?(z[C]=Ie,z[me]=H,C=me):(z[C]=pe,z[ce]=H,C=ce);else if(me<P&&0>a(Ie,H))z[C]=Ie,z[me]=H,C=me;else break e}}return X}function a(z,X){var H=z.sortIndex-X.sortIndex;return H!==0?H:z.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,f=d.now();s.unstable_now=function(){return d.now()-f}}var m=[],_=[],x=1,v=null,w=3,T=!1,R=!1,M=!1,O=typeof setTimeout=="function"?setTimeout:null,re=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function q(z){for(var X=n(_);X!==null;){if(X.callback===null)i(_);else if(X.startTime<=z)i(_),X.sortIndex=X.expirationTime,e(m,X);else break;X=n(_)}}function ne(z){if(M=!1,q(z),!R)if(n(m)!==null)R=!0,nt(de);else{var X=n(_);X!==null&&je(ne,X.startTime-z)}}function de(z,X){R=!1,M&&(M=!1,re(xe),xe=-1),T=!0;var H=w;try{for(q(X),v=n(m);v!==null&&(!(v.expirationTime>X)||z&&!he());){var C=v.callback;if(typeof C=="function"){v.callback=null,w=v.priorityLevel;var P=C(v.expirationTime<=X);X=s.unstable_now(),typeof P=="function"?v.callback=P:v===n(m)&&i(m),q(X)}else i(m);v=n(m)}if(v!==null)var ie=!0;else{var ce=n(_);ce!==null&&je(ne,ce.startTime-X),ie=!1}return ie}finally{v=null,w=H,T=!1}}var U=!1,_e=null,xe=-1,Me=5,ee=-1;function he(){return!(s.unstable_now()-ee<Me)}function se(){if(_e!==null){var z=s.unstable_now();ee=z;var X=!0;try{X=_e(!0,z)}finally{X?Je():(U=!1,_e=null)}}else U=!1}var Je;if(typeof D=="function")Je=function(){D(se)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,Nt=lt.port2;lt.port1.onmessage=se,Je=function(){Nt.postMessage(null)}}else Je=function(){O(se,0)};function nt(z){_e=z,U||(U=!0,Je())}function je(z,X){xe=O(function(){z(s.unstable_now())},X)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_continueExecution=function(){R||T||(R=!0,nt(de))},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Me=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return w},s.unstable_getFirstCallbackNode=function(){return n(m)},s.unstable_next=function(z){switch(w){case 1:case 2:case 3:var X=3;break;default:X=w}var H=w;w=X;try{return z()}finally{w=H}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(z,X){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var H=w;w=z;try{return X()}finally{w=H}},s.unstable_scheduleCallback=function(z,X,H){var C=s.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?C+H:C):H=C,z){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=H+P,z={id:x++,callback:X,priorityLevel:z,startTime:H,expirationTime:P,sortIndex:-1},H>C?(z.sortIndex=H,e(_,z),n(m)===null&&z===n(_)&&(M?(re(xe),xe=-1):M=!0,je(ne,H-C))):(z.sortIndex=P,e(m,z),R||T||(R=!0,nt(de))),z},s.unstable_shouldYield=he,s.unstable_wrapCallback=function(z){var X=w;return function(){var H=w;w=X;try{return z.apply(this,arguments)}finally{w=H}}}}(Kc)),Kc}var Lp;function _0(){return Lp||(Lp=1,qc.exports=g0()),qc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function y0(){if(Mp)return _t;Mp=1;var s=Lu(),e=_0();function n(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,a={};function c(t,r){d(t,r),d(t+"Capture",r)}function d(t,r){for(a[t]=r,t=0;t<r.length;t++)i.add(r[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},v={};function w(t){return m.call(v,t)?!0:m.call(x,t)?!1:_.test(t)?v[t]=!0:(x[t]=!0,!1)}function T(t,r,o,l){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function R(t,r,o,l){if(r===null||typeof r>"u"||T(t,r,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function M(t,r,o,l,u,h,g){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=o,this.propertyName=t,this.type=r,this.sanitizeURL=h,this.removeEmptyString=g}var O={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){O[t]=new M(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];O[r]=new M(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){O[t]=new M(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){O[t]=new M(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){O[t]=new M(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){O[t]=new M(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){O[t]=new M(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){O[t]=new M(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){O[t]=new M(t,5,!1,t.toLowerCase(),null,!1,!1)});var re=/[\-:]([a-z])/g;function D(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(re,D);O[r]=new M(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(re,D);O[r]=new M(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(re,D);O[r]=new M(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){O[t]=new M(t,1,!1,t.toLowerCase(),null,!1,!1)}),O.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){O[t]=new M(t,1,!1,t.toLowerCase(),null,!0,!0)});function q(t,r,o,l){var u=O.hasOwnProperty(r)?O[r]:null;(u!==null?u.type!==0:l||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(R(r,o,u,l)&&(o=null),l||u===null?w(r)&&(o===null?t.removeAttribute(r):t.setAttribute(r,""+o)):u.mustUseProperty?t[u.propertyName]=o===null?u.type===3?!1:"":o:(r=u.attributeName,l=u.attributeNamespace,o===null?t.removeAttribute(r):(u=u.type,o=u===3||u===4&&o===!0?"":""+o,l?t.setAttributeNS(l,r,o):t.setAttribute(r,o))))}var ne=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,de=Symbol.for("react.element"),U=Symbol.for("react.portal"),_e=Symbol.for("react.fragment"),xe=Symbol.for("react.strict_mode"),Me=Symbol.for("react.profiler"),ee=Symbol.for("react.provider"),he=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),Je=Symbol.for("react.suspense"),lt=Symbol.for("react.suspense_list"),Nt=Symbol.for("react.memo"),nt=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),z=Symbol.iterator;function X(t){return t===null||typeof t!="object"?null:(t=z&&t[z]||t["@@iterator"],typeof t=="function"?t:null)}var H=Object.assign,C;function P(t){if(C===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);C=r&&r[1]||""}return`
`+C+t}var ie=!1;function ce(t,r){if(!t||ie)return"";ie=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(N){var l=N}Reflect.construct(t,[],r)}else{try{r.call()}catch(N){l=N}t.call(r.prototype)}else{try{throw Error()}catch(N){l=N}t()}}catch(N){if(N&&l&&typeof N.stack=="string"){for(var u=N.stack.split(`
`),h=l.stack.split(`
`),g=u.length-1,y=h.length-1;1<=g&&0<=y&&u[g]!==h[y];)y--;for(;1<=g&&0<=y;g--,y--)if(u[g]!==h[y]){if(g!==1||y!==1)do if(g--,y--,0>y||u[g]!==h[y]){var k=`
`+u[g].replace(" at new "," at ");return t.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",t.displayName)),k}while(1<=g&&0<=y);break}}}finally{ie=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?P(t):""}function pe(t){switch(t.tag){case 5:return P(t.type);case 16:return P("Lazy");case 13:return P("Suspense");case 19:return P("SuspenseList");case 0:case 2:case 15:return t=ce(t.type,!1),t;case 11:return t=ce(t.type.render,!1),t;case 1:return t=ce(t.type,!0),t;default:return""}}function me(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _e:return"Fragment";case U:return"Portal";case Me:return"Profiler";case xe:return"StrictMode";case Je:return"Suspense";case lt:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case he:return(t.displayName||"Context")+".Consumer";case ee:return(t._context.displayName||"Context")+".Provider";case se:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Nt:return r=t.displayName||null,r!==null?r:me(t.type)||"Memo";case nt:r=t._payload,t=t._init;try{return me(t(r))}catch{}}return null}function Ie(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return me(r);case 8:return r===xe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ke(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ae(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function kt(t){var r=Ae(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),l=""+t[r];if(!t.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return u.call(this)},set:function(g){l=""+g,h.call(this,g)}}),Object.defineProperty(t,r,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(g){l=""+g},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function Hi(t){t._valueTracker||(t._valueTracker=kt(t))}function Od(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var o=r.getValue(),l="";return t&&(l=Ae(t)?t.checked?"true":"false":t.value),t=l,t!==o?(r.setValue(t),!0):!1}function Vi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xa(t,r){var o=r.checked;return H({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Ld(t,r){var o=r.defaultValue==null?"":r.defaultValue,l=r.checked!=null?r.checked:r.defaultChecked;o=ke(r.value!=null?r.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Md(t,r){r=r.checked,r!=null&&q(t,"checked",r,!1)}function Ja(t,r){Md(t,r);var o=ke(r.value),l=r.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?Za(t,r.type,o):r.hasOwnProperty("defaultValue")&&Za(t,r.type,ke(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function jd(t,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var l=r.type;if(!(l!=="submit"&&l!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,o||r===t.value||(t.value=r),t.defaultValue=r}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Za(t,r,o){(r!=="number"||Vi(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Es=Array.isArray;function Tr(t,r,o,l){if(t=t.options,r){r={};for(var u=0;u<o.length;u++)r["$"+o[u]]=!0;for(o=0;o<t.length;o++)u=r.hasOwnProperty("$"+t[o].value),t[o].selected!==u&&(t[o].selected=u),u&&l&&(t[o].defaultSelected=!0)}else{for(o=""+ke(o),r=null,u=0;u<t.length;u++){if(t[u].value===o){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}r!==null||t[u].disabled||(r=t[u])}r!==null&&(r.selected=!0)}}function el(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(n(91));return H({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Fd(t,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(n(92));if(Es(o)){if(1<o.length)throw Error(n(93));o=o[0]}r=o}r==null&&(r=""),o=r}t._wrapperState={initialValue:ke(o)}}function Ud(t,r){var o=ke(r.value),l=ke(r.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),r.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function zd(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function Wd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tl(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?Wd(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $i,Bd=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,l,u){MSApp.execUnsafeLocalFunction(function(){return t(r,o,l,u)})}:t}(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for($i=$i||document.createElement("div"),$i.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=$i.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function Cs(t,r){if(r){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=r;return}}t.textContent=r}var Ss={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gy=["Webkit","ms","Moz","O"];Object.keys(Ss).forEach(function(t){gy.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),Ss[r]=Ss[t]})});function Hd(t,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||Ss.hasOwnProperty(t)&&Ss[t]?(""+r).trim():r+"px"}function Vd(t,r){t=t.style;for(var o in r)if(r.hasOwnProperty(o)){var l=o.indexOf("--")===0,u=Hd(o,r[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,u):t[o]=u}}var _y=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nl(t,r){if(r){if(_y[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(n(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(n(61))}if(r.style!=null&&typeof r.style!="object")throw Error(n(62))}}function rl(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sl=null;function il(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ol=null,Rr=null,br=null;function $d(t){if(t=qs(t)){if(typeof ol!="function")throw Error(n(280));var r=t.stateNode;r&&(r=mo(r),ol(t.stateNode,t.type,r))}}function Gd(t){Rr?br?br.push(t):br=[t]:Rr=t}function qd(){if(Rr){var t=Rr,r=br;if(br=Rr=null,$d(t),r)for(t=0;t<r.length;t++)$d(r[t])}}function Kd(t,r){return t(r)}function Yd(){}var al=!1;function Qd(t,r,o){if(al)return t(r,o);al=!0;try{return Kd(t,r,o)}finally{al=!1,(Rr!==null||br!==null)&&(Yd(),qd())}}function Is(t,r){var o=t.stateNode;if(o===null)return null;var l=mo(o);if(l===null)return null;o=l[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,r,typeof o));return o}var ll=!1;if(f)try{var Ns={};Object.defineProperty(Ns,"passive",{get:function(){ll=!0}}),window.addEventListener("test",Ns,Ns),window.removeEventListener("test",Ns,Ns)}catch{ll=!1}function yy(t,r,o,l,u,h,g,y,k){var N=Array.prototype.slice.call(arguments,3);try{r.apply(o,N)}catch(A){this.onError(A)}}var Ts=!1,Gi=null,qi=!1,cl=null,vy={onError:function(t){Ts=!0,Gi=t}};function wy(t,r,o,l,u,h,g,y,k){Ts=!1,Gi=null,yy.apply(vy,arguments)}function xy(t,r,o,l,u,h,g,y,k){if(wy.apply(this,arguments),Ts){if(Ts){var N=Gi;Ts=!1,Gi=null}else throw Error(n(198));qi||(qi=!0,cl=N)}}function nr(t){var r=t,o=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(o=r.return),t=r.return;while(t)}return r.tag===3?o:null}function Xd(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function Jd(t){if(nr(t)!==t)throw Error(n(188))}function ky(t){var r=t.alternate;if(!r){if(r=nr(t),r===null)throw Error(n(188));return r!==t?null:t}for(var o=t,l=r;;){var u=o.return;if(u===null)break;var h=u.alternate;if(h===null){if(l=u.return,l!==null){o=l;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===o)return Jd(u),t;if(h===l)return Jd(u),r;h=h.sibling}throw Error(n(188))}if(o.return!==l.return)o=u,l=h;else{for(var g=!1,y=u.child;y;){if(y===o){g=!0,o=u,l=h;break}if(y===l){g=!0,l=u,o=h;break}y=y.sibling}if(!g){for(y=h.child;y;){if(y===o){g=!0,o=h,l=u;break}if(y===l){g=!0,l=h,o=u;break}y=y.sibling}if(!g)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:r}function Zd(t){return t=ky(t),t!==null?eh(t):null}function eh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=eh(t);if(r!==null)return r;t=t.sibling}return null}var th=e.unstable_scheduleCallback,nh=e.unstable_cancelCallback,Ey=e.unstable_shouldYield,Cy=e.unstable_requestPaint,ze=e.unstable_now,Sy=e.unstable_getCurrentPriorityLevel,ul=e.unstable_ImmediatePriority,rh=e.unstable_UserBlockingPriority,Ki=e.unstable_NormalPriority,Iy=e.unstable_LowPriority,sh=e.unstable_IdlePriority,Yi=null,Yt=null;function Ny(t){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(Yi,t,void 0,(t.current.flags&128)===128)}catch{}}var Lt=Math.clz32?Math.clz32:by,Ty=Math.log,Ry=Math.LN2;function by(t){return t>>>=0,t===0?32:31-(Ty(t)/Ry|0)|0}var Qi=64,Xi=4194304;function Rs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ji(t,r){var o=t.pendingLanes;if(o===0)return 0;var l=0,u=t.suspendedLanes,h=t.pingedLanes,g=o&268435455;if(g!==0){var y=g&~u;y!==0?l=Rs(y):(h&=g,h!==0&&(l=Rs(h)))}else g=o&~u,g!==0?l=Rs(g):h!==0&&(l=Rs(h));if(l===0)return 0;if(r!==0&&r!==l&&(r&u)===0&&(u=l&-l,h=r&-r,u>=h||u===16&&(h&4194240)!==0))return r;if((l&4)!==0&&(l|=o&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=l;0<r;)o=31-Lt(r),u=1<<o,l|=t[o],r&=~u;return l}function Py(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ay(t,r){for(var o=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes;0<h;){var g=31-Lt(h),y=1<<g,k=u[g];k===-1?((y&o)===0||(y&l)!==0)&&(u[g]=Py(y,r)):k<=r&&(t.expiredLanes|=y),h&=~y}}function dl(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ih(){var t=Qi;return Qi<<=1,(Qi&4194240)===0&&(Qi=64),t}function hl(t){for(var r=[],o=0;31>o;o++)r.push(t);return r}function bs(t,r,o){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-Lt(r),t[r]=o}function Dy(t,r){var o=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var u=31-Lt(o),h=1<<u;r[u]=0,l[u]=-1,t[u]=-1,o&=~h}}function fl(t,r){var o=t.entangledLanes|=r;for(t=t.entanglements;o;){var l=31-Lt(o),u=1<<l;u&r|t[l]&r&&(t[l]|=r),o&=~u}}var Ee=0;function oh(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var ah,pl,lh,ch,uh,ml=!1,Zi=[],xn=null,kn=null,En=null,Ps=new Map,As=new Map,Cn=[],Oy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dh(t,r){switch(t){case"focusin":case"focusout":xn=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":En=null;break;case"pointerover":case"pointerout":Ps.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":As.delete(r.pointerId)}}function Ds(t,r,o,l,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:r,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[u]},r!==null&&(r=qs(r),r!==null&&pl(r)),t):(t.eventSystemFlags|=l,r=t.targetContainers,u!==null&&r.indexOf(u)===-1&&r.push(u),t)}function Ly(t,r,o,l,u){switch(r){case"focusin":return xn=Ds(xn,t,r,o,l,u),!0;case"dragenter":return kn=Ds(kn,t,r,o,l,u),!0;case"mouseover":return En=Ds(En,t,r,o,l,u),!0;case"pointerover":var h=u.pointerId;return Ps.set(h,Ds(Ps.get(h)||null,t,r,o,l,u)),!0;case"gotpointercapture":return h=u.pointerId,As.set(h,Ds(As.get(h)||null,t,r,o,l,u)),!0}return!1}function hh(t){var r=rr(t.target);if(r!==null){var o=nr(r);if(o!==null){if(r=o.tag,r===13){if(r=Xd(o),r!==null){t.blockedOn=r,uh(t.priority,function(){lh(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function eo(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var o=_l(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);sl=l,o.target.dispatchEvent(l),sl=null}else return r=qs(o),r!==null&&pl(r),t.blockedOn=o,!1;r.shift()}return!0}function fh(t,r,o){eo(t)&&o.delete(r)}function My(){ml=!1,xn!==null&&eo(xn)&&(xn=null),kn!==null&&eo(kn)&&(kn=null),En!==null&&eo(En)&&(En=null),Ps.forEach(fh),As.forEach(fh)}function Os(t,r){t.blockedOn===r&&(t.blockedOn=null,ml||(ml=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,My)))}function Ls(t){function r(u){return Os(u,t)}if(0<Zi.length){Os(Zi[0],t);for(var o=1;o<Zi.length;o++){var l=Zi[o];l.blockedOn===t&&(l.blockedOn=null)}}for(xn!==null&&Os(xn,t),kn!==null&&Os(kn,t),En!==null&&Os(En,t),Ps.forEach(r),As.forEach(r),o=0;o<Cn.length;o++)l=Cn[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<Cn.length&&(o=Cn[0],o.blockedOn===null);)hh(o),o.blockedOn===null&&Cn.shift()}var Pr=ne.ReactCurrentBatchConfig,to=!0;function jy(t,r,o,l){var u=Ee,h=Pr.transition;Pr.transition=null;try{Ee=1,gl(t,r,o,l)}finally{Ee=u,Pr.transition=h}}function Fy(t,r,o,l){var u=Ee,h=Pr.transition;Pr.transition=null;try{Ee=4,gl(t,r,o,l)}finally{Ee=u,Pr.transition=h}}function gl(t,r,o,l){if(to){var u=_l(t,r,o,l);if(u===null)Ol(t,r,l,no,o),dh(t,l);else if(Ly(u,t,r,o,l))l.stopPropagation();else if(dh(t,l),r&4&&-1<Oy.indexOf(t)){for(;u!==null;){var h=qs(u);if(h!==null&&ah(h),h=_l(t,r,o,l),h===null&&Ol(t,r,l,no,o),h===u)break;u=h}u!==null&&l.stopPropagation()}else Ol(t,r,l,null,o)}}var no=null;function _l(t,r,o,l){if(no=null,t=il(l),t=rr(t),t!==null)if(r=nr(t),r===null)t=null;else if(o=r.tag,o===13){if(t=Xd(r),t!==null)return t;t=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return no=t,null}function ph(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sy()){case ul:return 1;case rh:return 4;case Ki:case Iy:return 16;case sh:return 536870912;default:return 16}default:return 16}}var Sn=null,yl=null,ro=null;function mh(){if(ro)return ro;var t,r=yl,o=r.length,l,u="value"in Sn?Sn.value:Sn.textContent,h=u.length;for(t=0;t<o&&r[t]===u[t];t++);var g=o-t;for(l=1;l<=g&&r[o-l]===u[h-l];l++);return ro=u.slice(t,1<l?1-l:void 0)}function so(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function io(){return!0}function gh(){return!1}function Et(t){function r(o,l,u,h,g){this._reactName=o,this._targetInst=u,this.type=l,this.nativeEvent=h,this.target=g,this.currentTarget=null;for(var y in t)t.hasOwnProperty(y)&&(o=t[y],this[y]=o?o(h):h[y]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?io:gh,this.isPropagationStopped=gh,this}return H(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=io)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=io)},persist:function(){},isPersistent:io}),r}var Ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vl=Et(Ar),Ms=H({},Ar,{view:0,detail:0}),Uy=Et(Ms),wl,xl,js,oo=H({},Ms,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:El,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==js&&(js&&t.type==="mousemove"?(wl=t.screenX-js.screenX,xl=t.screenY-js.screenY):xl=wl=0,js=t),wl)},movementY:function(t){return"movementY"in t?t.movementY:xl}}),_h=Et(oo),zy=H({},oo,{dataTransfer:0}),Wy=Et(zy),By=H({},Ms,{relatedTarget:0}),kl=Et(By),Hy=H({},Ar,{animationName:0,elapsedTime:0,pseudoElement:0}),Vy=Et(Hy),$y=H({},Ar,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Gy=Et($y),qy=H({},Ar,{data:0}),yh=Et(qy),Ky={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xy(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=Qy[t])?!!r[t]:!1}function El(){return Xy}var Jy=H({},Ms,{key:function(t){if(t.key){var r=Ky[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=so(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Yy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:El,charCode:function(t){return t.type==="keypress"?so(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?so(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Zy=Et(Jy),ev=H({},oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vh=Et(ev),tv=H({},Ms,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:El}),nv=Et(tv),rv=H({},Ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),sv=Et(rv),iv=H({},oo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ov=Et(iv),av=[9,13,27,32],Cl=f&&"CompositionEvent"in window,Fs=null;f&&"documentMode"in document&&(Fs=document.documentMode);var lv=f&&"TextEvent"in window&&!Fs,wh=f&&(!Cl||Fs&&8<Fs&&11>=Fs),xh=" ",kh=!1;function Eh(t,r){switch(t){case"keyup":return av.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ch(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Dr=!1;function cv(t,r){switch(t){case"compositionend":return Ch(r);case"keypress":return r.which!==32?null:(kh=!0,xh);case"textInput":return t=r.data,t===xh&&kh?null:t;default:return null}}function uv(t,r){if(Dr)return t==="compositionend"||!Cl&&Eh(t,r)?(t=mh(),ro=yl=Sn=null,Dr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return wh&&r.locale!=="ko"?null:r.data;default:return null}}var dv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sh(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!dv[t.type]:r==="textarea"}function Ih(t,r,o,l){Gd(l),r=ho(r,"onChange"),0<r.length&&(o=new vl("onChange","change",null,o,l),t.push({event:o,listeners:r}))}var Us=null,zs=null;function hv(t){Vh(t,0)}function ao(t){var r=Fr(t);if(Od(r))return t}function fv(t,r){if(t==="change")return r}var Nh=!1;if(f){var Sl;if(f){var Il="oninput"in document;if(!Il){var Th=document.createElement("div");Th.setAttribute("oninput","return;"),Il=typeof Th.oninput=="function"}Sl=Il}else Sl=!1;Nh=Sl&&(!document.documentMode||9<document.documentMode)}function Rh(){Us&&(Us.detachEvent("onpropertychange",bh),zs=Us=null)}function bh(t){if(t.propertyName==="value"&&ao(zs)){var r=[];Ih(r,zs,t,il(t)),Qd(hv,r)}}function pv(t,r,o){t==="focusin"?(Rh(),Us=r,zs=o,Us.attachEvent("onpropertychange",bh)):t==="focusout"&&Rh()}function mv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ao(zs)}function gv(t,r){if(t==="click")return ao(r)}function _v(t,r){if(t==="input"||t==="change")return ao(r)}function yv(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Mt=typeof Object.is=="function"?Object.is:yv;function Ws(t,r){if(Mt(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var o=Object.keys(t),l=Object.keys(r);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var u=o[l];if(!m.call(r,u)||!Mt(t[u],r[u]))return!1}return!0}function Ph(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ah(t,r){var o=Ph(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=r&&l>=r)return{node:o,offset:r-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Ph(o)}}function Dh(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Dh(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Oh(){for(var t=window,r=Vi();r instanceof t.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)t=r.contentWindow;else break;r=Vi(t.document)}return r}function Nl(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function vv(t){var r=Oh(),o=t.focusedElem,l=t.selectionRange;if(r!==o&&o&&o.ownerDocument&&Dh(o.ownerDocument.documentElement,o)){if(l!==null&&Nl(o)){if(r=l.start,t=l.end,t===void 0&&(t=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(t,o.value.length);else if(t=(r=o.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var u=o.textContent.length,h=Math.min(l.start,u);l=l.end===void 0?h:Math.min(l.end,u),!t.extend&&h>l&&(u=l,l=h,h=u),u=Ah(o,h);var g=Ah(o,l);u&&g&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==g.node||t.focusOffset!==g.offset)&&(r=r.createRange(),r.setStart(u.node,u.offset),t.removeAllRanges(),h>l?(t.addRange(r),t.extend(g.node,g.offset)):(r.setEnd(g.node,g.offset),t.addRange(r)))}}for(r=[],t=o;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)t=r[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var wv=f&&"documentMode"in document&&11>=document.documentMode,Or=null,Tl=null,Bs=null,Rl=!1;function Lh(t,r,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Rl||Or==null||Or!==Vi(l)||(l=Or,"selectionStart"in l&&Nl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Bs&&Ws(Bs,l)||(Bs=l,l=ho(Tl,"onSelect"),0<l.length&&(r=new vl("onSelect","select",null,r,o),t.push({event:r,listeners:l}),r.target=Or)))}function lo(t,r){var o={};return o[t.toLowerCase()]=r.toLowerCase(),o["Webkit"+t]="webkit"+r,o["Moz"+t]="moz"+r,o}var Lr={animationend:lo("Animation","AnimationEnd"),animationiteration:lo("Animation","AnimationIteration"),animationstart:lo("Animation","AnimationStart"),transitionend:lo("Transition","TransitionEnd")},bl={},Mh={};f&&(Mh=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function co(t){if(bl[t])return bl[t];if(!Lr[t])return t;var r=Lr[t],o;for(o in r)if(r.hasOwnProperty(o)&&o in Mh)return bl[t]=r[o];return t}var jh=co("animationend"),Fh=co("animationiteration"),Uh=co("animationstart"),zh=co("transitionend"),Wh=new Map,Bh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function In(t,r){Wh.set(t,r),c(r,[t])}for(var Pl=0;Pl<Bh.length;Pl++){var Al=Bh[Pl],xv=Al.toLowerCase(),kv=Al[0].toUpperCase()+Al.slice(1);In(xv,"on"+kv)}In(jh,"onAnimationEnd"),In(Fh,"onAnimationIteration"),In(Uh,"onAnimationStart"),In("dblclick","onDoubleClick"),In("focusin","onFocus"),In("focusout","onBlur"),In(zh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ev=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hs));function Hh(t,r,o){var l=t.type||"unknown-event";t.currentTarget=o,xy(l,r,void 0,t),t.currentTarget=null}function Vh(t,r){r=(r&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],u=l.event;l=l.listeners;e:{var h=void 0;if(r)for(var g=l.length-1;0<=g;g--){var y=l[g],k=y.instance,N=y.currentTarget;if(y=y.listener,k!==h&&u.isPropagationStopped())break e;Hh(u,y,N),h=k}else for(g=0;g<l.length;g++){if(y=l[g],k=y.instance,N=y.currentTarget,y=y.listener,k!==h&&u.isPropagationStopped())break e;Hh(u,y,N),h=k}}}if(qi)throw t=cl,qi=!1,cl=null,t}function Re(t,r){var o=r[zl];o===void 0&&(o=r[zl]=new Set);var l=t+"__bubble";o.has(l)||($h(r,t,2,!1),o.add(l))}function Dl(t,r,o){var l=0;r&&(l|=4),$h(o,t,l,r)}var uo="_reactListening"+Math.random().toString(36).slice(2);function Vs(t){if(!t[uo]){t[uo]=!0,i.forEach(function(o){o!=="selectionchange"&&(Ev.has(o)||Dl(o,!1,t),Dl(o,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[uo]||(r[uo]=!0,Dl("selectionchange",!1,r))}}function $h(t,r,o,l){switch(ph(r)){case 1:var u=jy;break;case 4:u=Fy;break;default:u=gl}o=u.bind(null,r,o,t),u=void 0,!ll||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(r,o,{capture:!0,passive:u}):t.addEventListener(r,o,!0):u!==void 0?t.addEventListener(r,o,{passive:u}):t.addEventListener(r,o,!1)}function Ol(t,r,o,l,u){var h=l;if((r&1)===0&&(r&2)===0&&l!==null)e:for(;;){if(l===null)return;var g=l.tag;if(g===3||g===4){var y=l.stateNode.containerInfo;if(y===u||y.nodeType===8&&y.parentNode===u)break;if(g===4)for(g=l.return;g!==null;){var k=g.tag;if((k===3||k===4)&&(k=g.stateNode.containerInfo,k===u||k.nodeType===8&&k.parentNode===u))return;g=g.return}for(;y!==null;){if(g=rr(y),g===null)return;if(k=g.tag,k===5||k===6){l=h=g;continue e}y=y.parentNode}}l=l.return}Qd(function(){var N=h,A=il(o),L=[];e:{var b=Wh.get(t);if(b!==void 0){var W=vl,V=t;switch(t){case"keypress":if(so(o)===0)break e;case"keydown":case"keyup":W=Zy;break;case"focusin":V="focus",W=kl;break;case"focusout":V="blur",W=kl;break;case"beforeblur":case"afterblur":W=kl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":W=_h;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":W=Wy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":W=nv;break;case jh:case Fh:case Uh:W=Vy;break;case zh:W=sv;break;case"scroll":W=Uy;break;case"wheel":W=ov;break;case"copy":case"cut":case"paste":W=Gy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":W=vh}var $=(r&4)!==0,We=!$&&t==="scroll",S=$?b!==null?b+"Capture":null:b;$=[];for(var E=N,I;E!==null;){I=E;var j=I.stateNode;if(I.tag===5&&j!==null&&(I=j,S!==null&&(j=Is(E,S),j!=null&&$.push($s(E,j,I)))),We)break;E=E.return}0<$.length&&(b=new W(b,V,null,o,A),L.push({event:b,listeners:$}))}}if((r&7)===0){e:{if(b=t==="mouseover"||t==="pointerover",W=t==="mouseout"||t==="pointerout",b&&o!==sl&&(V=o.relatedTarget||o.fromElement)&&(rr(V)||V[nn]))break e;if((W||b)&&(b=A.window===A?A:(b=A.ownerDocument)?b.defaultView||b.parentWindow:window,W?(V=o.relatedTarget||o.toElement,W=N,V=V?rr(V):null,V!==null&&(We=nr(V),V!==We||V.tag!==5&&V.tag!==6)&&(V=null)):(W=null,V=N),W!==V)){if($=_h,j="onMouseLeave",S="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&($=vh,j="onPointerLeave",S="onPointerEnter",E="pointer"),We=W==null?b:Fr(W),I=V==null?b:Fr(V),b=new $(j,E+"leave",W,o,A),b.target=We,b.relatedTarget=I,j=null,rr(A)===N&&($=new $(S,E+"enter",V,o,A),$.target=I,$.relatedTarget=We,j=$),We=j,W&&V)t:{for($=W,S=V,E=0,I=$;I;I=Mr(I))E++;for(I=0,j=S;j;j=Mr(j))I++;for(;0<E-I;)$=Mr($),E--;for(;0<I-E;)S=Mr(S),I--;for(;E--;){if($===S||S!==null&&$===S.alternate)break t;$=Mr($),S=Mr(S)}$=null}else $=null;W!==null&&Gh(L,b,W,$,!1),V!==null&&We!==null&&Gh(L,We,V,$,!0)}}e:{if(b=N?Fr(N):window,W=b.nodeName&&b.nodeName.toLowerCase(),W==="select"||W==="input"&&b.type==="file")var G=fv;else if(Sh(b))if(Nh)G=_v;else{G=mv;var Y=pv}else(W=b.nodeName)&&W.toLowerCase()==="input"&&(b.type==="checkbox"||b.type==="radio")&&(G=gv);if(G&&(G=G(t,N))){Ih(L,G,o,A);break e}Y&&Y(t,b,N),t==="focusout"&&(Y=b._wrapperState)&&Y.controlled&&b.type==="number"&&Za(b,"number",b.value)}switch(Y=N?Fr(N):window,t){case"focusin":(Sh(Y)||Y.contentEditable==="true")&&(Or=Y,Tl=N,Bs=null);break;case"focusout":Bs=Tl=Or=null;break;case"mousedown":Rl=!0;break;case"contextmenu":case"mouseup":case"dragend":Rl=!1,Lh(L,o,A);break;case"selectionchange":if(wv)break;case"keydown":case"keyup":Lh(L,o,A)}var Q;if(Cl)e:{switch(t){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else Dr?Eh(t,o)&&(te="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(te="onCompositionStart");te&&(wh&&o.locale!=="ko"&&(Dr||te!=="onCompositionStart"?te==="onCompositionEnd"&&Dr&&(Q=mh()):(Sn=A,yl="value"in Sn?Sn.value:Sn.textContent,Dr=!0)),Y=ho(N,te),0<Y.length&&(te=new yh(te,t,null,o,A),L.push({event:te,listeners:Y}),Q?te.data=Q:(Q=Ch(o),Q!==null&&(te.data=Q)))),(Q=lv?cv(t,o):uv(t,o))&&(N=ho(N,"onBeforeInput"),0<N.length&&(A=new yh("onBeforeInput","beforeinput",null,o,A),L.push({event:A,listeners:N}),A.data=Q))}Vh(L,r)})}function $s(t,r,o){return{instance:t,listener:r,currentTarget:o}}function ho(t,r){for(var o=r+"Capture",l=[];t!==null;){var u=t,h=u.stateNode;u.tag===5&&h!==null&&(u=h,h=Is(t,o),h!=null&&l.unshift($s(t,h,u)),h=Is(t,r),h!=null&&l.push($s(t,h,u))),t=t.return}return l}function Mr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Gh(t,r,o,l,u){for(var h=r._reactName,g=[];o!==null&&o!==l;){var y=o,k=y.alternate,N=y.stateNode;if(k!==null&&k===l)break;y.tag===5&&N!==null&&(y=N,u?(k=Is(o,h),k!=null&&g.unshift($s(o,k,y))):u||(k=Is(o,h),k!=null&&g.push($s(o,k,y)))),o=o.return}g.length!==0&&t.push({event:r,listeners:g})}var Cv=/\r\n?/g,Sv=/\u0000|\uFFFD/g;function qh(t){return(typeof t=="string"?t:""+t).replace(Cv,`
`).replace(Sv,"")}function fo(t,r,o){if(r=qh(r),qh(t)!==r&&o)throw Error(n(425))}function po(){}var Ll=null,Ml=null;function jl(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Fl=typeof setTimeout=="function"?setTimeout:void 0,Iv=typeof clearTimeout=="function"?clearTimeout:void 0,Kh=typeof Promise=="function"?Promise:void 0,Nv=typeof queueMicrotask=="function"?queueMicrotask:typeof Kh<"u"?function(t){return Kh.resolve(null).then(t).catch(Tv)}:Fl;function Tv(t){setTimeout(function(){throw t})}function Ul(t,r){var o=r,l=0;do{var u=o.nextSibling;if(t.removeChild(o),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(l===0){t.removeChild(u),Ls(r);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=u}while(o);Ls(r)}function Nn(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function Yh(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return t;r--}else o==="/$"&&r++}t=t.previousSibling}return null}var jr=Math.random().toString(36).slice(2),Qt="__reactFiber$"+jr,Gs="__reactProps$"+jr,nn="__reactContainer$"+jr,zl="__reactEvents$"+jr,Rv="__reactListeners$"+jr,bv="__reactHandles$"+jr;function rr(t){var r=t[Qt];if(r)return r;for(var o=t.parentNode;o;){if(r=o[nn]||o[Qt]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(t=Yh(t);t!==null;){if(o=t[Qt])return o;t=Yh(t)}return r}t=o,o=t.parentNode}return null}function qs(t){return t=t[Qt]||t[nn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function mo(t){return t[Gs]||null}var Wl=[],Ur=-1;function Tn(t){return{current:t}}function be(t){0>Ur||(t.current=Wl[Ur],Wl[Ur]=null,Ur--)}function Ne(t,r){Ur++,Wl[Ur]=t.current,t.current=r}var Rn={},rt=Tn(Rn),ht=Tn(!1),sr=Rn;function zr(t,r){var o=t.type.contextTypes;if(!o)return Rn;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===r)return l.__reactInternalMemoizedMaskedChildContext;var u={},h;for(h in o)u[h]=r[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=u),u}function ft(t){return t=t.childContextTypes,t!=null}function go(){be(ht),be(rt)}function Qh(t,r,o){if(rt.current!==Rn)throw Error(n(168));Ne(rt,r),Ne(ht,o)}function Xh(t,r,o){var l=t.stateNode;if(r=r.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var u in l)if(!(u in r))throw Error(n(108,Ie(t)||"Unknown",u));return H({},o,l)}function _o(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Rn,sr=rt.current,Ne(rt,t),Ne(ht,ht.current),!0}function Jh(t,r,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=Xh(t,r,sr),l.__reactInternalMemoizedMergedChildContext=t,be(ht),be(rt),Ne(rt,t)):be(ht),Ne(ht,o)}var rn=null,yo=!1,Bl=!1;function Zh(t){rn===null?rn=[t]:rn.push(t)}function Pv(t){yo=!0,Zh(t)}function bn(){if(!Bl&&rn!==null){Bl=!0;var t=0,r=Ee;try{var o=rn;for(Ee=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}rn=null,yo=!1}catch(u){throw rn!==null&&(rn=rn.slice(t+1)),th(ul,bn),u}finally{Ee=r,Bl=!1}}return null}var Wr=[],Br=0,vo=null,wo=0,Tt=[],Rt=0,ir=null,sn=1,on="";function or(t,r){Wr[Br++]=wo,Wr[Br++]=vo,vo=t,wo=r}function ef(t,r,o){Tt[Rt++]=sn,Tt[Rt++]=on,Tt[Rt++]=ir,ir=t;var l=sn;t=on;var u=32-Lt(l)-1;l&=~(1<<u),o+=1;var h=32-Lt(r)+u;if(30<h){var g=u-u%5;h=(l&(1<<g)-1).toString(32),l>>=g,u-=g,sn=1<<32-Lt(r)+u|o<<u|l,on=h+t}else sn=1<<h|o<<u|l,on=t}function Hl(t){t.return!==null&&(or(t,1),ef(t,1,0))}function Vl(t){for(;t===vo;)vo=Wr[--Br],Wr[Br]=null,wo=Wr[--Br],Wr[Br]=null;for(;t===ir;)ir=Tt[--Rt],Tt[Rt]=null,on=Tt[--Rt],Tt[Rt]=null,sn=Tt[--Rt],Tt[Rt]=null}var Ct=null,St=null,De=!1,jt=null;function tf(t,r){var o=Dt(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=t,r=t.deletions,r===null?(t.deletions=[o],t.flags|=16):r.push(o)}function nf(t,r){switch(t.tag){case 5:var o=t.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,Ct=t,St=Nn(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,Ct=t,St=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=ir!==null?{id:sn,overflow:on}:null,t.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=Dt(18,null,null,0),o.stateNode=r,o.return=t,t.child=o,Ct=t,St=null,!0):!1;default:return!1}}function $l(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Gl(t){if(De){var r=St;if(r){var o=r;if(!nf(t,r)){if($l(t))throw Error(n(418));r=Nn(o.nextSibling);var l=Ct;r&&nf(t,r)?tf(l,o):(t.flags=t.flags&-4097|2,De=!1,Ct=t)}}else{if($l(t))throw Error(n(418));t.flags=t.flags&-4097|2,De=!1,Ct=t}}}function rf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ct=t}function xo(t){if(t!==Ct)return!1;if(!De)return rf(t),De=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!jl(t.type,t.memoizedProps)),r&&(r=St)){if($l(t))throw sf(),Error(n(418));for(;r;)tf(t,r),r=Nn(r.nextSibling)}if(rf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(r===0){St=Nn(t.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}t=t.nextSibling}St=null}}else St=Ct?Nn(t.stateNode.nextSibling):null;return!0}function sf(){for(var t=St;t;)t=Nn(t.nextSibling)}function Hr(){St=Ct=null,De=!1}function ql(t){jt===null?jt=[t]:jt.push(t)}var Av=ne.ReactCurrentBatchConfig;function Ks(t,r,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var u=l,h=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===h?r.ref:(r=function(g){var y=u.refs;g===null?delete y[h]:y[h]=g},r._stringRef=h,r)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function ko(t,r){throw t=Object.prototype.toString.call(r),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function of(t){var r=t._init;return r(t._payload)}function af(t){function r(S,E){if(t){var I=S.deletions;I===null?(S.deletions=[E],S.flags|=16):I.push(E)}}function o(S,E){if(!t)return null;for(;E!==null;)r(S,E),E=E.sibling;return null}function l(S,E){for(S=new Map;E!==null;)E.key!==null?S.set(E.key,E):S.set(E.index,E),E=E.sibling;return S}function u(S,E){return S=Fn(S,E),S.index=0,S.sibling=null,S}function h(S,E,I){return S.index=I,t?(I=S.alternate,I!==null?(I=I.index,I<E?(S.flags|=2,E):I):(S.flags|=2,E)):(S.flags|=1048576,E)}function g(S){return t&&S.alternate===null&&(S.flags|=2),S}function y(S,E,I,j){return E===null||E.tag!==6?(E=Fc(I,S.mode,j),E.return=S,E):(E=u(E,I),E.return=S,E)}function k(S,E,I,j){var G=I.type;return G===_e?A(S,E,I.props.children,j,I.key):E!==null&&(E.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===nt&&of(G)===E.type)?(j=u(E,I.props),j.ref=Ks(S,E,I),j.return=S,j):(j=Go(I.type,I.key,I.props,null,S.mode,j),j.ref=Ks(S,E,I),j.return=S,j)}function N(S,E,I,j){return E===null||E.tag!==4||E.stateNode.containerInfo!==I.containerInfo||E.stateNode.implementation!==I.implementation?(E=Uc(I,S.mode,j),E.return=S,E):(E=u(E,I.children||[]),E.return=S,E)}function A(S,E,I,j,G){return E===null||E.tag!==7?(E=pr(I,S.mode,j,G),E.return=S,E):(E=u(E,I),E.return=S,E)}function L(S,E,I){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Fc(""+E,S.mode,I),E.return=S,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case de:return I=Go(E.type,E.key,E.props,null,S.mode,I),I.ref=Ks(S,null,E),I.return=S,I;case U:return E=Uc(E,S.mode,I),E.return=S,E;case nt:var j=E._init;return L(S,j(E._payload),I)}if(Es(E)||X(E))return E=pr(E,S.mode,I,null),E.return=S,E;ko(S,E)}return null}function b(S,E,I,j){var G=E!==null?E.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return G!==null?null:y(S,E,""+I,j);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case de:return I.key===G?k(S,E,I,j):null;case U:return I.key===G?N(S,E,I,j):null;case nt:return G=I._init,b(S,E,G(I._payload),j)}if(Es(I)||X(I))return G!==null?null:A(S,E,I,j,null);ko(S,I)}return null}function W(S,E,I,j,G){if(typeof j=="string"&&j!==""||typeof j=="number")return S=S.get(I)||null,y(E,S,""+j,G);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case de:return S=S.get(j.key===null?I:j.key)||null,k(E,S,j,G);case U:return S=S.get(j.key===null?I:j.key)||null,N(E,S,j,G);case nt:var Y=j._init;return W(S,E,I,Y(j._payload),G)}if(Es(j)||X(j))return S=S.get(I)||null,A(E,S,j,G,null);ko(E,j)}return null}function V(S,E,I,j){for(var G=null,Y=null,Q=E,te=E=0,Ke=null;Q!==null&&te<I.length;te++){Q.index>te?(Ke=Q,Q=null):Ke=Q.sibling;var ge=b(S,Q,I[te],j);if(ge===null){Q===null&&(Q=Ke);break}t&&Q&&ge.alternate===null&&r(S,Q),E=h(ge,E,te),Y===null?G=ge:Y.sibling=ge,Y=ge,Q=Ke}if(te===I.length)return o(S,Q),De&&or(S,te),G;if(Q===null){for(;te<I.length;te++)Q=L(S,I[te],j),Q!==null&&(E=h(Q,E,te),Y===null?G=Q:Y.sibling=Q,Y=Q);return De&&or(S,te),G}for(Q=l(S,Q);te<I.length;te++)Ke=W(Q,S,te,I[te],j),Ke!==null&&(t&&Ke.alternate!==null&&Q.delete(Ke.key===null?te:Ke.key),E=h(Ke,E,te),Y===null?G=Ke:Y.sibling=Ke,Y=Ke);return t&&Q.forEach(function(Un){return r(S,Un)}),De&&or(S,te),G}function $(S,E,I,j){var G=X(I);if(typeof G!="function")throw Error(n(150));if(I=G.call(I),I==null)throw Error(n(151));for(var Y=G=null,Q=E,te=E=0,Ke=null,ge=I.next();Q!==null&&!ge.done;te++,ge=I.next()){Q.index>te?(Ke=Q,Q=null):Ke=Q.sibling;var Un=b(S,Q,ge.value,j);if(Un===null){Q===null&&(Q=Ke);break}t&&Q&&Un.alternate===null&&r(S,Q),E=h(Un,E,te),Y===null?G=Un:Y.sibling=Un,Y=Un,Q=Ke}if(ge.done)return o(S,Q),De&&or(S,te),G;if(Q===null){for(;!ge.done;te++,ge=I.next())ge=L(S,ge.value,j),ge!==null&&(E=h(ge,E,te),Y===null?G=ge:Y.sibling=ge,Y=ge);return De&&or(S,te),G}for(Q=l(S,Q);!ge.done;te++,ge=I.next())ge=W(Q,S,te,ge.value,j),ge!==null&&(t&&ge.alternate!==null&&Q.delete(ge.key===null?te:ge.key),E=h(ge,E,te),Y===null?G=ge:Y.sibling=ge,Y=ge);return t&&Q.forEach(function(d0){return r(S,d0)}),De&&or(S,te),G}function We(S,E,I,j){if(typeof I=="object"&&I!==null&&I.type===_e&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case de:e:{for(var G=I.key,Y=E;Y!==null;){if(Y.key===G){if(G=I.type,G===_e){if(Y.tag===7){o(S,Y.sibling),E=u(Y,I.props.children),E.return=S,S=E;break e}}else if(Y.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===nt&&of(G)===Y.type){o(S,Y.sibling),E=u(Y,I.props),E.ref=Ks(S,Y,I),E.return=S,S=E;break e}o(S,Y);break}else r(S,Y);Y=Y.sibling}I.type===_e?(E=pr(I.props.children,S.mode,j,I.key),E.return=S,S=E):(j=Go(I.type,I.key,I.props,null,S.mode,j),j.ref=Ks(S,E,I),j.return=S,S=j)}return g(S);case U:e:{for(Y=I.key;E!==null;){if(E.key===Y)if(E.tag===4&&E.stateNode.containerInfo===I.containerInfo&&E.stateNode.implementation===I.implementation){o(S,E.sibling),E=u(E,I.children||[]),E.return=S,S=E;break e}else{o(S,E);break}else r(S,E);E=E.sibling}E=Uc(I,S.mode,j),E.return=S,S=E}return g(S);case nt:return Y=I._init,We(S,E,Y(I._payload),j)}if(Es(I))return V(S,E,I,j);if(X(I))return $(S,E,I,j);ko(S,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,E!==null&&E.tag===6?(o(S,E.sibling),E=u(E,I),E.return=S,S=E):(o(S,E),E=Fc(I,S.mode,j),E.return=S,S=E),g(S)):o(S,E)}return We}var Vr=af(!0),lf=af(!1),Eo=Tn(null),Co=null,$r=null,Kl=null;function Yl(){Kl=$r=Co=null}function Ql(t){var r=Eo.current;be(Eo),t._currentValue=r}function Xl(t,r,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),t===o)break;t=t.return}}function Gr(t,r){Co=t,Kl=$r=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(pt=!0),t.firstContext=null)}function bt(t){var r=t._currentValue;if(Kl!==t)if(t={context:t,memoizedValue:r,next:null},$r===null){if(Co===null)throw Error(n(308));$r=t,Co.dependencies={lanes:0,firstContext:t}}else $r=$r.next=t;return r}var ar=null;function Jl(t){ar===null?ar=[t]:ar.push(t)}function cf(t,r,o,l){var u=r.interleaved;return u===null?(o.next=o,Jl(r)):(o.next=u.next,u.next=o),r.interleaved=o,an(t,l)}function an(t,r){t.lanes|=r;var o=t.alternate;for(o!==null&&(o.lanes|=r),o=t,t=t.return;t!==null;)t.childLanes|=r,o=t.alternate,o!==null&&(o.childLanes|=r),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Pn=!1;function Zl(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uf(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ln(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function An(t,r,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(fe&2)!==0){var u=l.pending;return u===null?r.next=r:(r.next=u.next,u.next=r),l.pending=r,an(t,o)}return u=l.interleaved,u===null?(r.next=r,Jl(l)):(r.next=u.next,u.next=r),l.interleaved=r,an(t,o)}function So(t,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var l=r.lanes;l&=t.pendingLanes,o|=l,r.lanes=o,fl(t,o)}}function df(t,r){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var u=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var g={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?u=h=g:h=h.next=g,o=o.next}while(o!==null);h===null?u=h=r:h=h.next=r}else u=h=r;o={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=r:t.next=r,o.lastBaseUpdate=r}function Io(t,r,o,l){var u=t.updateQueue;Pn=!1;var h=u.firstBaseUpdate,g=u.lastBaseUpdate,y=u.shared.pending;if(y!==null){u.shared.pending=null;var k=y,N=k.next;k.next=null,g===null?h=N:g.next=N,g=k;var A=t.alternate;A!==null&&(A=A.updateQueue,y=A.lastBaseUpdate,y!==g&&(y===null?A.firstBaseUpdate=N:y.next=N,A.lastBaseUpdate=k))}if(h!==null){var L=u.baseState;g=0,A=N=k=null,y=h;do{var b=y.lane,W=y.eventTime;if((l&b)===b){A!==null&&(A=A.next={eventTime:W,lane:0,tag:y.tag,payload:y.payload,callback:y.callback,next:null});e:{var V=t,$=y;switch(b=r,W=o,$.tag){case 1:if(V=$.payload,typeof V=="function"){L=V.call(W,L,b);break e}L=V;break e;case 3:V.flags=V.flags&-65537|128;case 0:if(V=$.payload,b=typeof V=="function"?V.call(W,L,b):V,b==null)break e;L=H({},L,b);break e;case 2:Pn=!0}}y.callback!==null&&y.lane!==0&&(t.flags|=64,b=u.effects,b===null?u.effects=[y]:b.push(y))}else W={eventTime:W,lane:b,tag:y.tag,payload:y.payload,callback:y.callback,next:null},A===null?(N=A=W,k=L):A=A.next=W,g|=b;if(y=y.next,y===null){if(y=u.shared.pending,y===null)break;b=y,y=b.next,b.next=null,u.lastBaseUpdate=b,u.shared.pending=null}}while(!0);if(A===null&&(k=L),u.baseState=k,u.firstBaseUpdate=N,u.lastBaseUpdate=A,r=u.shared.interleaved,r!==null){u=r;do g|=u.lane,u=u.next;while(u!==r)}else h===null&&(u.shared.lanes=0);ur|=g,t.lanes=g,t.memoizedState=L}}function hf(t,r,o){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var l=t[r],u=l.callback;if(u!==null){if(l.callback=null,l=o,typeof u!="function")throw Error(n(191,u));u.call(l)}}}var Ys={},Xt=Tn(Ys),Qs=Tn(Ys),Xs=Tn(Ys);function lr(t){if(t===Ys)throw Error(n(174));return t}function ec(t,r){switch(Ne(Xs,r),Ne(Qs,t),Ne(Xt,Ys),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:tl(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=tl(r,t)}be(Xt),Ne(Xt,r)}function qr(){be(Xt),be(Qs),be(Xs)}function ff(t){lr(Xs.current);var r=lr(Xt.current),o=tl(r,t.type);r!==o&&(Ne(Qs,t),Ne(Xt,o))}function tc(t){Qs.current===t&&(be(Xt),be(Qs))}var Oe=Tn(0);function No(t){for(var r=t;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var nc=[];function rc(){for(var t=0;t<nc.length;t++)nc[t]._workInProgressVersionPrimary=null;nc.length=0}var To=ne.ReactCurrentDispatcher,sc=ne.ReactCurrentBatchConfig,cr=0,Le=null,He=null,Ge=null,Ro=!1,Js=!1,Zs=0,Dv=0;function st(){throw Error(n(321))}function ic(t,r){if(r===null)return!1;for(var o=0;o<r.length&&o<t.length;o++)if(!Mt(t[o],r[o]))return!1;return!0}function oc(t,r,o,l,u,h){if(cr=h,Le=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,To.current=t===null||t.memoizedState===null?jv:Fv,t=o(l,u),Js){h=0;do{if(Js=!1,Zs=0,25<=h)throw Error(n(301));h+=1,Ge=He=null,r.updateQueue=null,To.current=Uv,t=o(l,u)}while(Js)}if(To.current=Ao,r=He!==null&&He.next!==null,cr=0,Ge=He=Le=null,Ro=!1,r)throw Error(n(300));return t}function ac(){var t=Zs!==0;return Zs=0,t}function Jt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Le.memoizedState=Ge=t:Ge=Ge.next=t,Ge}function Pt(){if(He===null){var t=Le.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var r=Ge===null?Le.memoizedState:Ge.next;if(r!==null)Ge=r,He=t;else{if(t===null)throw Error(n(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Ge===null?Le.memoizedState=Ge=t:Ge=Ge.next=t}return Ge}function ei(t,r){return typeof r=="function"?r(t):r}function lc(t){var r=Pt(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=He,u=l.baseQueue,h=o.pending;if(h!==null){if(u!==null){var g=u.next;u.next=h.next,h.next=g}l.baseQueue=u=h,o.pending=null}if(u!==null){h=u.next,l=l.baseState;var y=g=null,k=null,N=h;do{var A=N.lane;if((cr&A)===A)k!==null&&(k=k.next={lane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),l=N.hasEagerState?N.eagerState:t(l,N.action);else{var L={lane:A,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null};k===null?(y=k=L,g=l):k=k.next=L,Le.lanes|=A,ur|=A}N=N.next}while(N!==null&&N!==h);k===null?g=l:k.next=y,Mt(l,r.memoizedState)||(pt=!0),r.memoizedState=l,r.baseState=g,r.baseQueue=k,o.lastRenderedState=l}if(t=o.interleaved,t!==null){u=t;do h=u.lane,Le.lanes|=h,ur|=h,u=u.next;while(u!==t)}else u===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function cc(t){var r=Pt(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,u=o.pending,h=r.memoizedState;if(u!==null){o.pending=null;var g=u=u.next;do h=t(h,g.action),g=g.next;while(g!==u);Mt(h,r.memoizedState)||(pt=!0),r.memoizedState=h,r.baseQueue===null&&(r.baseState=h),o.lastRenderedState=h}return[h,l]}function pf(){}function mf(t,r){var o=Le,l=Pt(),u=r(),h=!Mt(l.memoizedState,u);if(h&&(l.memoizedState=u,pt=!0),l=l.queue,uc(yf.bind(null,o,l,t),[t]),l.getSnapshot!==r||h||Ge!==null&&Ge.memoizedState.tag&1){if(o.flags|=2048,ti(9,_f.bind(null,o,l,u,r),void 0,null),qe===null)throw Error(n(349));(cr&30)!==0||gf(o,r,u)}return u}function gf(t,r,o){t.flags|=16384,t={getSnapshot:r,value:o},r=Le.updateQueue,r===null?(r={lastEffect:null,stores:null},Le.updateQueue=r,r.stores=[t]):(o=r.stores,o===null?r.stores=[t]:o.push(t))}function _f(t,r,o,l){r.value=o,r.getSnapshot=l,vf(r)&&wf(t)}function yf(t,r,o){return o(function(){vf(r)&&wf(t)})}function vf(t){var r=t.getSnapshot;t=t.value;try{var o=r();return!Mt(t,o)}catch{return!0}}function wf(t){var r=an(t,1);r!==null&&Wt(r,t,1,-1)}function xf(t){var r=Jt();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ei,lastRenderedState:t},r.queue=t,t=t.dispatch=Mv.bind(null,Le,t),[r.memoizedState,t]}function ti(t,r,o,l){return t={tag:t,create:r,destroy:o,deps:l,next:null},r=Le.updateQueue,r===null?(r={lastEffect:null,stores:null},Le.updateQueue=r,r.lastEffect=t.next=t):(o=r.lastEffect,o===null?r.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,r.lastEffect=t)),t}function kf(){return Pt().memoizedState}function bo(t,r,o,l){var u=Jt();Le.flags|=t,u.memoizedState=ti(1|r,o,void 0,l===void 0?null:l)}function Po(t,r,o,l){var u=Pt();l=l===void 0?null:l;var h=void 0;if(He!==null){var g=He.memoizedState;if(h=g.destroy,l!==null&&ic(l,g.deps)){u.memoizedState=ti(r,o,h,l);return}}Le.flags|=t,u.memoizedState=ti(1|r,o,h,l)}function Ef(t,r){return bo(8390656,8,t,r)}function uc(t,r){return Po(2048,8,t,r)}function Cf(t,r){return Po(4,2,t,r)}function Sf(t,r){return Po(4,4,t,r)}function If(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Nf(t,r,o){return o=o!=null?o.concat([t]):null,Po(4,4,If.bind(null,r,t),o)}function dc(){}function Tf(t,r){var o=Pt();r=r===void 0?null:r;var l=o.memoizedState;return l!==null&&r!==null&&ic(r,l[1])?l[0]:(o.memoizedState=[t,r],t)}function Rf(t,r){var o=Pt();r=r===void 0?null:r;var l=o.memoizedState;return l!==null&&r!==null&&ic(r,l[1])?l[0]:(t=t(),o.memoizedState=[t,r],t)}function bf(t,r,o){return(cr&21)===0?(t.baseState&&(t.baseState=!1,pt=!0),t.memoizedState=o):(Mt(o,r)||(o=ih(),Le.lanes|=o,ur|=o,t.baseState=!0),r)}function Ov(t,r){var o=Ee;Ee=o!==0&&4>o?o:4,t(!0);var l=sc.transition;sc.transition={};try{t(!1),r()}finally{Ee=o,sc.transition=l}}function Pf(){return Pt().memoizedState}function Lv(t,r,o){var l=Mn(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Af(t))Df(r,o);else if(o=cf(t,r,o,l),o!==null){var u=ut();Wt(o,t,l,u),Of(o,r,l)}}function Mv(t,r,o){var l=Mn(t),u={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Af(t))Df(r,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=r.lastRenderedReducer,h!==null))try{var g=r.lastRenderedState,y=h(g,o);if(u.hasEagerState=!0,u.eagerState=y,Mt(y,g)){var k=r.interleaved;k===null?(u.next=u,Jl(r)):(u.next=k.next,k.next=u),r.interleaved=u;return}}catch{}finally{}o=cf(t,r,u,l),o!==null&&(u=ut(),Wt(o,t,l,u),Of(o,r,l))}}function Af(t){var r=t.alternate;return t===Le||r!==null&&r===Le}function Df(t,r){Js=Ro=!0;var o=t.pending;o===null?r.next=r:(r.next=o.next,o.next=r),t.pending=r}function Of(t,r,o){if((o&4194240)!==0){var l=r.lanes;l&=t.pendingLanes,o|=l,r.lanes=o,fl(t,o)}}var Ao={readContext:bt,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useInsertionEffect:st,useLayoutEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useMutableSource:st,useSyncExternalStore:st,useId:st,unstable_isNewReconciler:!1},jv={readContext:bt,useCallback:function(t,r){return Jt().memoizedState=[t,r===void 0?null:r],t},useContext:bt,useEffect:Ef,useImperativeHandle:function(t,r,o){return o=o!=null?o.concat([t]):null,bo(4194308,4,If.bind(null,r,t),o)},useLayoutEffect:function(t,r){return bo(4194308,4,t,r)},useInsertionEffect:function(t,r){return bo(4,2,t,r)},useMemo:function(t,r){var o=Jt();return r=r===void 0?null:r,t=t(),o.memoizedState=[t,r],t},useReducer:function(t,r,o){var l=Jt();return r=o!==void 0?o(r):r,l.memoizedState=l.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},l.queue=t,t=t.dispatch=Lv.bind(null,Le,t),[l.memoizedState,t]},useRef:function(t){var r=Jt();return t={current:t},r.memoizedState=t},useState:xf,useDebugValue:dc,useDeferredValue:function(t){return Jt().memoizedState=t},useTransition:function(){var t=xf(!1),r=t[0];return t=Ov.bind(null,t[1]),Jt().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,o){var l=Le,u=Jt();if(De){if(o===void 0)throw Error(n(407));o=o()}else{if(o=r(),qe===null)throw Error(n(349));(cr&30)!==0||gf(l,r,o)}u.memoizedState=o;var h={value:o,getSnapshot:r};return u.queue=h,Ef(yf.bind(null,l,h,t),[t]),l.flags|=2048,ti(9,_f.bind(null,l,h,o,r),void 0,null),o},useId:function(){var t=Jt(),r=qe.identifierPrefix;if(De){var o=on,l=sn;o=(l&~(1<<32-Lt(l)-1)).toString(32)+o,r=":"+r+"R"+o,o=Zs++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=Dv++,r=":"+r+"r"+o.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},Fv={readContext:bt,useCallback:Tf,useContext:bt,useEffect:uc,useImperativeHandle:Nf,useInsertionEffect:Cf,useLayoutEffect:Sf,useMemo:Rf,useReducer:lc,useRef:kf,useState:function(){return lc(ei)},useDebugValue:dc,useDeferredValue:function(t){var r=Pt();return bf(r,He.memoizedState,t)},useTransition:function(){var t=lc(ei)[0],r=Pt().memoizedState;return[t,r]},useMutableSource:pf,useSyncExternalStore:mf,useId:Pf,unstable_isNewReconciler:!1},Uv={readContext:bt,useCallback:Tf,useContext:bt,useEffect:uc,useImperativeHandle:Nf,useInsertionEffect:Cf,useLayoutEffect:Sf,useMemo:Rf,useReducer:cc,useRef:kf,useState:function(){return cc(ei)},useDebugValue:dc,useDeferredValue:function(t){var r=Pt();return He===null?r.memoizedState=t:bf(r,He.memoizedState,t)},useTransition:function(){var t=cc(ei)[0],r=Pt().memoizedState;return[t,r]},useMutableSource:pf,useSyncExternalStore:mf,useId:Pf,unstable_isNewReconciler:!1};function Ft(t,r){if(t&&t.defaultProps){r=H({},r),t=t.defaultProps;for(var o in t)r[o]===void 0&&(r[o]=t[o]);return r}return r}function hc(t,r,o,l){r=t.memoizedState,o=o(l,r),o=o==null?r:H({},r,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Do={isMounted:function(t){return(t=t._reactInternals)?nr(t)===t:!1},enqueueSetState:function(t,r,o){t=t._reactInternals;var l=ut(),u=Mn(t),h=ln(l,u);h.payload=r,o!=null&&(h.callback=o),r=An(t,h,u),r!==null&&(Wt(r,t,u,l),So(r,t,u))},enqueueReplaceState:function(t,r,o){t=t._reactInternals;var l=ut(),u=Mn(t),h=ln(l,u);h.tag=1,h.payload=r,o!=null&&(h.callback=o),r=An(t,h,u),r!==null&&(Wt(r,t,u,l),So(r,t,u))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var o=ut(),l=Mn(t),u=ln(o,l);u.tag=2,r!=null&&(u.callback=r),r=An(t,u,l),r!==null&&(Wt(r,t,l,o),So(r,t,l))}};function Lf(t,r,o,l,u,h,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,g):r.prototype&&r.prototype.isPureReactComponent?!Ws(o,l)||!Ws(u,h):!0}function Mf(t,r,o){var l=!1,u=Rn,h=r.contextType;return typeof h=="object"&&h!==null?h=bt(h):(u=ft(r)?sr:rt.current,l=r.contextTypes,h=(l=l!=null)?zr(t,u):Rn),r=new r(o,h),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Do,t.stateNode=r,r._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=h),r}function jf(t,r,o,l){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,l),r.state!==t&&Do.enqueueReplaceState(r,r.state,null)}function fc(t,r,o,l){var u=t.stateNode;u.props=o,u.state=t.memoizedState,u.refs={},Zl(t);var h=r.contextType;typeof h=="object"&&h!==null?u.context=bt(h):(h=ft(r)?sr:rt.current,u.context=zr(t,h)),u.state=t.memoizedState,h=r.getDerivedStateFromProps,typeof h=="function"&&(hc(t,r,h,o),u.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(r=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),r!==u.state&&Do.enqueueReplaceState(u,u.state,null),Io(t,o,u,l),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function Kr(t,r){try{var o="",l=r;do o+=pe(l),l=l.return;while(l);var u=o}catch(h){u=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:r,stack:u,digest:null}}function pc(t,r,o){return{value:t,source:null,stack:o??null,digest:r??null}}function mc(t,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var zv=typeof WeakMap=="function"?WeakMap:Map;function Ff(t,r,o){o=ln(-1,o),o.tag=3,o.payload={element:null};var l=r.value;return o.callback=function(){zo||(zo=!0,bc=l),mc(t,r)},o}function Uf(t,r,o){o=ln(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var u=r.value;o.payload=function(){return l(u)},o.callback=function(){mc(t,r)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){mc(t,r),typeof l!="function"&&(On===null?On=new Set([this]):On.add(this));var g=r.stack;this.componentDidCatch(r.value,{componentStack:g!==null?g:""})}),o}function zf(t,r,o){var l=t.pingCache;if(l===null){l=t.pingCache=new zv;var u=new Set;l.set(r,u)}else u=l.get(r),u===void 0&&(u=new Set,l.set(r,u));u.has(o)||(u.add(o),t=e0.bind(null,t,r,o),r.then(t,t))}function Wf(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function Bf(t,r,o,l,u){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=ln(-1,1),r.tag=2,An(o,r,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var Wv=ne.ReactCurrentOwner,pt=!1;function ct(t,r,o,l){r.child=t===null?lf(r,null,o,l):Vr(r,t.child,o,l)}function Hf(t,r,o,l,u){o=o.render;var h=r.ref;return Gr(r,u),l=oc(t,r,o,l,h,u),o=ac(),t!==null&&!pt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~u,cn(t,r,u)):(De&&o&&Hl(r),r.flags|=1,ct(t,r,l,u),r.child)}function Vf(t,r,o,l,u){if(t===null){var h=o.type;return typeof h=="function"&&!jc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=h,$f(t,r,h,l,u)):(t=Go(o.type,null,l,r,r.mode,u),t.ref=r.ref,t.return=r,r.child=t)}if(h=t.child,(t.lanes&u)===0){var g=h.memoizedProps;if(o=o.compare,o=o!==null?o:Ws,o(g,l)&&t.ref===r.ref)return cn(t,r,u)}return r.flags|=1,t=Fn(h,l),t.ref=r.ref,t.return=r,r.child=t}function $f(t,r,o,l,u){if(t!==null){var h=t.memoizedProps;if(Ws(h,l)&&t.ref===r.ref)if(pt=!1,r.pendingProps=l=h,(t.lanes&u)!==0)(t.flags&131072)!==0&&(pt=!0);else return r.lanes=t.lanes,cn(t,r,u)}return gc(t,r,o,l,u)}function Gf(t,r,o){var l=r.pendingProps,u=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ne(Qr,It),It|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,Ne(Qr,It),It|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,Ne(Qr,It),It|=l}else h!==null?(l=h.baseLanes|o,r.memoizedState=null):l=o,Ne(Qr,It),It|=l;return ct(t,r,u,o),r.child}function qf(t,r){var o=r.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function gc(t,r,o,l,u){var h=ft(o)?sr:rt.current;return h=zr(r,h),Gr(r,u),o=oc(t,r,o,l,h,u),l=ac(),t!==null&&!pt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~u,cn(t,r,u)):(De&&l&&Hl(r),r.flags|=1,ct(t,r,o,u),r.child)}function Kf(t,r,o,l,u){if(ft(o)){var h=!0;_o(r)}else h=!1;if(Gr(r,u),r.stateNode===null)Lo(t,r),Mf(r,o,l),fc(r,o,l,u),l=!0;else if(t===null){var g=r.stateNode,y=r.memoizedProps;g.props=y;var k=g.context,N=o.contextType;typeof N=="object"&&N!==null?N=bt(N):(N=ft(o)?sr:rt.current,N=zr(r,N));var A=o.getDerivedStateFromProps,L=typeof A=="function"||typeof g.getSnapshotBeforeUpdate=="function";L||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(y!==l||k!==N)&&jf(r,g,l,N),Pn=!1;var b=r.memoizedState;g.state=b,Io(r,l,g,u),k=r.memoizedState,y!==l||b!==k||ht.current||Pn?(typeof A=="function"&&(hc(r,o,A,l),k=r.memoizedState),(y=Pn||Lf(r,o,y,l,b,k,N))?(L||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(r.flags|=4194308)):(typeof g.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=k),g.props=l,g.state=k,g.context=N,l=y):(typeof g.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{g=r.stateNode,uf(t,r),y=r.memoizedProps,N=r.type===r.elementType?y:Ft(r.type,y),g.props=N,L=r.pendingProps,b=g.context,k=o.contextType,typeof k=="object"&&k!==null?k=bt(k):(k=ft(o)?sr:rt.current,k=zr(r,k));var W=o.getDerivedStateFromProps;(A=typeof W=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(y!==L||b!==k)&&jf(r,g,l,k),Pn=!1,b=r.memoizedState,g.state=b,Io(r,l,g,u);var V=r.memoizedState;y!==L||b!==V||ht.current||Pn?(typeof W=="function"&&(hc(r,o,W,l),V=r.memoizedState),(N=Pn||Lf(r,o,N,l,b,V,k)||!1)?(A||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(l,V,k),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(l,V,k)),typeof g.componentDidUpdate=="function"&&(r.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof g.componentDidUpdate!="function"||y===t.memoizedProps&&b===t.memoizedState||(r.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&b===t.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=V),g.props=l,g.state=V,g.context=k,l=N):(typeof g.componentDidUpdate!="function"||y===t.memoizedProps&&b===t.memoizedState||(r.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&b===t.memoizedState||(r.flags|=1024),l=!1)}return _c(t,r,o,l,h,u)}function _c(t,r,o,l,u,h){qf(t,r);var g=(r.flags&128)!==0;if(!l&&!g)return u&&Jh(r,o,!1),cn(t,r,h);l=r.stateNode,Wv.current=r;var y=g&&typeof o.getDerivedStateFromError!="function"?null:l.render();return r.flags|=1,t!==null&&g?(r.child=Vr(r,t.child,null,h),r.child=Vr(r,null,y,h)):ct(t,r,y,h),r.memoizedState=l.state,u&&Jh(r,o,!0),r.child}function Yf(t){var r=t.stateNode;r.pendingContext?Qh(t,r.pendingContext,r.pendingContext!==r.context):r.context&&Qh(t,r.context,!1),ec(t,r.containerInfo)}function Qf(t,r,o,l,u){return Hr(),ql(u),r.flags|=256,ct(t,r,o,l),r.child}var yc={dehydrated:null,treeContext:null,retryLane:0};function vc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Xf(t,r,o){var l=r.pendingProps,u=Oe.current,h=!1,g=(r.flags&128)!==0,y;if((y=g)||(y=t!==null&&t.memoizedState===null?!1:(u&2)!==0),y?(h=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),Ne(Oe,u&1),t===null)return Gl(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(g=l.children,t=l.fallback,h?(l=r.mode,h=r.child,g={mode:"hidden",children:g},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=g):h=qo(g,l,0,null),t=pr(t,l,o,null),h.return=r,t.return=r,h.sibling=t,r.child=h,r.child.memoizedState=vc(o),r.memoizedState=yc,t):wc(r,g));if(u=t.memoizedState,u!==null&&(y=u.dehydrated,y!==null))return Bv(t,r,g,l,y,u,o);if(h){h=l.fallback,g=r.mode,u=t.child,y=u.sibling;var k={mode:"hidden",children:l.children};return(g&1)===0&&r.child!==u?(l=r.child,l.childLanes=0,l.pendingProps=k,r.deletions=null):(l=Fn(u,k),l.subtreeFlags=u.subtreeFlags&14680064),y!==null?h=Fn(y,h):(h=pr(h,g,o,null),h.flags|=2),h.return=r,l.return=r,l.sibling=h,r.child=l,l=h,h=r.child,g=t.child.memoizedState,g=g===null?vc(o):{baseLanes:g.baseLanes|o,cachePool:null,transitions:g.transitions},h.memoizedState=g,h.childLanes=t.childLanes&~o,r.memoizedState=yc,l}return h=t.child,t=h.sibling,l=Fn(h,{mode:"visible",children:l.children}),(r.mode&1)===0&&(l.lanes=o),l.return=r,l.sibling=null,t!==null&&(o=r.deletions,o===null?(r.deletions=[t],r.flags|=16):o.push(t)),r.child=l,r.memoizedState=null,l}function wc(t,r){return r=qo({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function Oo(t,r,o,l){return l!==null&&ql(l),Vr(r,t.child,null,o),t=wc(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Bv(t,r,o,l,u,h,g){if(o)return r.flags&256?(r.flags&=-257,l=pc(Error(n(422))),Oo(t,r,g,l)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(h=l.fallback,u=r.mode,l=qo({mode:"visible",children:l.children},u,0,null),h=pr(h,u,g,null),h.flags|=2,l.return=r,h.return=r,l.sibling=h,r.child=l,(r.mode&1)!==0&&Vr(r,t.child,null,g),r.child.memoizedState=vc(g),r.memoizedState=yc,h);if((r.mode&1)===0)return Oo(t,r,g,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var y=l.dgst;return l=y,h=Error(n(419)),l=pc(h,l,void 0),Oo(t,r,g,l)}if(y=(g&t.childLanes)!==0,pt||y){if(l=qe,l!==null){switch(g&-g){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|g))!==0?0:u,u!==0&&u!==h.retryLane&&(h.retryLane=u,an(t,u),Wt(l,t,u,-1))}return Mc(),l=pc(Error(n(421))),Oo(t,r,g,l)}return u.data==="$?"?(r.flags|=128,r.child=t.child,r=t0.bind(null,t),u._reactRetry=r,null):(t=h.treeContext,St=Nn(u.nextSibling),Ct=r,De=!0,jt=null,t!==null&&(Tt[Rt++]=sn,Tt[Rt++]=on,Tt[Rt++]=ir,sn=t.id,on=t.overflow,ir=r),r=wc(r,l.children),r.flags|=4096,r)}function Jf(t,r,o){t.lanes|=r;var l=t.alternate;l!==null&&(l.lanes|=r),Xl(t.return,r,o)}function xc(t,r,o,l,u){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:u}:(h.isBackwards=r,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=u)}function Zf(t,r,o){var l=r.pendingProps,u=l.revealOrder,h=l.tail;if(ct(t,r,l.children,o),l=Oe.current,(l&2)!==0)l=l&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jf(t,o,r);else if(t.tag===19)Jf(t,o,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Ne(Oe,l),(r.mode&1)===0)r.memoizedState=null;else switch(u){case"forwards":for(o=r.child,u=null;o!==null;)t=o.alternate,t!==null&&No(t)===null&&(u=o),o=o.sibling;o=u,o===null?(u=r.child,r.child=null):(u=o.sibling,o.sibling=null),xc(r,!1,u,o,h);break;case"backwards":for(o=null,u=r.child,r.child=null;u!==null;){if(t=u.alternate,t!==null&&No(t)===null){r.child=u;break}t=u.sibling,u.sibling=o,o=u,u=t}xc(r,!0,o,null,h);break;case"together":xc(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Lo(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function cn(t,r,o){if(t!==null&&(r.dependencies=t.dependencies),ur|=r.lanes,(o&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(n(153));if(r.child!==null){for(t=r.child,o=Fn(t,t.pendingProps),r.child=o,o.return=r;t.sibling!==null;)t=t.sibling,o=o.sibling=Fn(t,t.pendingProps),o.return=r;o.sibling=null}return r.child}function Hv(t,r,o){switch(r.tag){case 3:Yf(r),Hr();break;case 5:ff(r);break;case 1:ft(r.type)&&_o(r);break;case 4:ec(r,r.stateNode.containerInfo);break;case 10:var l=r.type._context,u=r.memoizedProps.value;Ne(Eo,l._currentValue),l._currentValue=u;break;case 13:if(l=r.memoizedState,l!==null)return l.dehydrated!==null?(Ne(Oe,Oe.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?Xf(t,r,o):(Ne(Oe,Oe.current&1),t=cn(t,r,o),t!==null?t.sibling:null);Ne(Oe,Oe.current&1);break;case 19:if(l=(o&r.childLanes)!==0,(t.flags&128)!==0){if(l)return Zf(t,r,o);r.flags|=128}if(u=r.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ne(Oe,Oe.current),l)break;return null;case 22:case 23:return r.lanes=0,Gf(t,r,o)}return cn(t,r,o)}var ep,kc,tp,np;ep=function(t,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},kc=function(){},tp=function(t,r,o,l){var u=t.memoizedProps;if(u!==l){t=r.stateNode,lr(Xt.current);var h=null;switch(o){case"input":u=Xa(t,u),l=Xa(t,l),h=[];break;case"select":u=H({},u,{value:void 0}),l=H({},l,{value:void 0}),h=[];break;case"textarea":u=el(t,u),l=el(t,l),h=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=po)}nl(o,l);var g;o=null;for(N in u)if(!l.hasOwnProperty(N)&&u.hasOwnProperty(N)&&u[N]!=null)if(N==="style"){var y=u[N];for(g in y)y.hasOwnProperty(g)&&(o||(o={}),o[g]="")}else N!=="dangerouslySetInnerHTML"&&N!=="children"&&N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&N!=="autoFocus"&&(a.hasOwnProperty(N)?h||(h=[]):(h=h||[]).push(N,null));for(N in l){var k=l[N];if(y=u?.[N],l.hasOwnProperty(N)&&k!==y&&(k!=null||y!=null))if(N==="style")if(y){for(g in y)!y.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(o||(o={}),o[g]="");for(g in k)k.hasOwnProperty(g)&&y[g]!==k[g]&&(o||(o={}),o[g]=k[g])}else o||(h||(h=[]),h.push(N,o)),o=k;else N==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,y=y?y.__html:void 0,k!=null&&y!==k&&(h=h||[]).push(N,k)):N==="children"?typeof k!="string"&&typeof k!="number"||(h=h||[]).push(N,""+k):N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&(a.hasOwnProperty(N)?(k!=null&&N==="onScroll"&&Re("scroll",t),h||y===k||(h=[])):(h=h||[]).push(N,k))}o&&(h=h||[]).push("style",o);var N=h;(r.updateQueue=N)&&(r.flags|=4)}},np=function(t,r,o,l){o!==l&&(r.flags|=4)};function ni(t,r){if(!De)switch(t.tailMode){case"hidden":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function it(t){var r=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(r)for(var u=t.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=o,r}function Vv(t,r,o){var l=r.pendingProps;switch(Vl(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(r),null;case 1:return ft(r.type)&&go(),it(r),null;case 3:return l=r.stateNode,qr(),be(ht),be(rt),rc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(xo(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,jt!==null&&(Dc(jt),jt=null))),kc(t,r),it(r),null;case 5:tc(r);var u=lr(Xs.current);if(o=r.type,t!==null&&r.stateNode!=null)tp(t,r,o,l,u),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!l){if(r.stateNode===null)throw Error(n(166));return it(r),null}if(t=lr(Xt.current),xo(r)){l=r.stateNode,o=r.type;var h=r.memoizedProps;switch(l[Qt]=r,l[Gs]=h,t=(r.mode&1)!==0,o){case"dialog":Re("cancel",l),Re("close",l);break;case"iframe":case"object":case"embed":Re("load",l);break;case"video":case"audio":for(u=0;u<Hs.length;u++)Re(Hs[u],l);break;case"source":Re("error",l);break;case"img":case"image":case"link":Re("error",l),Re("load",l);break;case"details":Re("toggle",l);break;case"input":Ld(l,h),Re("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Re("invalid",l);break;case"textarea":Fd(l,h),Re("invalid",l)}nl(o,h),u=null;for(var g in h)if(h.hasOwnProperty(g)){var y=h[g];g==="children"?typeof y=="string"?l.textContent!==y&&(h.suppressHydrationWarning!==!0&&fo(l.textContent,y,t),u=["children",y]):typeof y=="number"&&l.textContent!==""+y&&(h.suppressHydrationWarning!==!0&&fo(l.textContent,y,t),u=["children",""+y]):a.hasOwnProperty(g)&&y!=null&&g==="onScroll"&&Re("scroll",l)}switch(o){case"input":Hi(l),jd(l,h,!0);break;case"textarea":Hi(l),zd(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=po)}l=u,r.updateQueue=l,l!==null&&(r.flags|=4)}else{g=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Wd(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=g.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=g.createElement(o,{is:l.is}):(t=g.createElement(o),o==="select"&&(g=t,l.multiple?g.multiple=!0:l.size&&(g.size=l.size))):t=g.createElementNS(t,o),t[Qt]=r,t[Gs]=l,ep(t,r,!1,!1),r.stateNode=t;e:{switch(g=rl(o,l),o){case"dialog":Re("cancel",t),Re("close",t),u=l;break;case"iframe":case"object":case"embed":Re("load",t),u=l;break;case"video":case"audio":for(u=0;u<Hs.length;u++)Re(Hs[u],t);u=l;break;case"source":Re("error",t),u=l;break;case"img":case"image":case"link":Re("error",t),Re("load",t),u=l;break;case"details":Re("toggle",t),u=l;break;case"input":Ld(t,l),u=Xa(t,l),Re("invalid",t);break;case"option":u=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},u=H({},l,{value:void 0}),Re("invalid",t);break;case"textarea":Fd(t,l),u=el(t,l),Re("invalid",t);break;default:u=l}nl(o,u),y=u;for(h in y)if(y.hasOwnProperty(h)){var k=y[h];h==="style"?Vd(t,k):h==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Bd(t,k)):h==="children"?typeof k=="string"?(o!=="textarea"||k!=="")&&Cs(t,k):typeof k=="number"&&Cs(t,""+k):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?k!=null&&h==="onScroll"&&Re("scroll",t):k!=null&&q(t,h,k,g))}switch(o){case"input":Hi(t),jd(t,l,!1);break;case"textarea":Hi(t),zd(t);break;case"option":l.value!=null&&t.setAttribute("value",""+ke(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?Tr(t,!!l.multiple,h,!1):l.defaultValue!=null&&Tr(t,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=po)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return it(r),null;case 6:if(t&&r.stateNode!=null)np(t,r,t.memoizedProps,l);else{if(typeof l!="string"&&r.stateNode===null)throw Error(n(166));if(o=lr(Xs.current),lr(Xt.current),xo(r)){if(l=r.stateNode,o=r.memoizedProps,l[Qt]=r,(h=l.nodeValue!==o)&&(t=Ct,t!==null))switch(t.tag){case 3:fo(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fo(l.nodeValue,o,(t.mode&1)!==0)}h&&(r.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[Qt]=r,r.stateNode=l}return it(r),null;case 13:if(be(Oe),l=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(De&&St!==null&&(r.mode&1)!==0&&(r.flags&128)===0)sf(),Hr(),r.flags|=98560,h=!1;else if(h=xo(r),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Qt]=r}else Hr(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;it(r),h=!1}else jt!==null&&(Dc(jt),jt=null),h=!0;if(!h)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||(Oe.current&1)!==0?Ve===0&&(Ve=3):Mc())),r.updateQueue!==null&&(r.flags|=4),it(r),null);case 4:return qr(),kc(t,r),t===null&&Vs(r.stateNode.containerInfo),it(r),null;case 10:return Ql(r.type._context),it(r),null;case 17:return ft(r.type)&&go(),it(r),null;case 19:if(be(Oe),h=r.memoizedState,h===null)return it(r),null;if(l=(r.flags&128)!==0,g=h.rendering,g===null)if(l)ni(h,!1);else{if(Ve!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(g=No(t),g!==null){for(r.flags|=128,ni(h,!1),l=g.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),r.subtreeFlags=0,l=o,o=r.child;o!==null;)h=o,t=l,h.flags&=14680066,g=h.alternate,g===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=g.childLanes,h.lanes=g.lanes,h.child=g.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=g.memoizedProps,h.memoizedState=g.memoizedState,h.updateQueue=g.updateQueue,h.type=g.type,t=g.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Ne(Oe,Oe.current&1|2),r.child}t=t.sibling}h.tail!==null&&ze()>Xr&&(r.flags|=128,l=!0,ni(h,!1),r.lanes=4194304)}else{if(!l)if(t=No(g),t!==null){if(r.flags|=128,l=!0,o=t.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),ni(h,!0),h.tail===null&&h.tailMode==="hidden"&&!g.alternate&&!De)return it(r),null}else 2*ze()-h.renderingStartTime>Xr&&o!==1073741824&&(r.flags|=128,l=!0,ni(h,!1),r.lanes=4194304);h.isBackwards?(g.sibling=r.child,r.child=g):(o=h.last,o!==null?o.sibling=g:r.child=g,h.last=g)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=ze(),r.sibling=null,o=Oe.current,Ne(Oe,l?o&1|2:o&1),r):(it(r),null);case 22:case 23:return Lc(),l=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(r.flags|=8192),l&&(r.mode&1)!==0?(It&1073741824)!==0&&(it(r),r.subtreeFlags&6&&(r.flags|=8192)):it(r),null;case 24:return null;case 25:return null}throw Error(n(156,r.tag))}function $v(t,r){switch(Vl(r),r.tag){case 1:return ft(r.type)&&go(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return qr(),be(ht),be(rt),rc(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return tc(r),null;case 13:if(be(Oe),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(n(340));Hr()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return be(Oe),null;case 4:return qr(),null;case 10:return Ql(r.type._context),null;case 22:case 23:return Lc(),null;case 24:return null;default:return null}}var Mo=!1,ot=!1,Gv=typeof WeakSet=="function"?WeakSet:Set,B=null;function Yr(t,r){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Fe(t,r,l)}else o.current=null}function Ec(t,r,o){try{o()}catch(l){Fe(t,r,l)}}var rp=!1;function qv(t,r){if(Ll=to,t=Oh(),Nl(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var u=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var g=0,y=-1,k=-1,N=0,A=0,L=t,b=null;t:for(;;){for(var W;L!==o||u!==0&&L.nodeType!==3||(y=g+u),L!==h||l!==0&&L.nodeType!==3||(k=g+l),L.nodeType===3&&(g+=L.nodeValue.length),(W=L.firstChild)!==null;)b=L,L=W;for(;;){if(L===t)break t;if(b===o&&++N===u&&(y=g),b===h&&++A===l&&(k=g),(W=L.nextSibling)!==null)break;L=b,b=L.parentNode}L=W}o=y===-1||k===-1?null:{start:y,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(Ml={focusedElem:t,selectionRange:o},to=!1,B=r;B!==null;)if(r=B,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,B=t;else for(;B!==null;){r=B;try{var V=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(V!==null){var $=V.memoizedProps,We=V.memoizedState,S=r.stateNode,E=S.getSnapshotBeforeUpdate(r.elementType===r.type?$:Ft(r.type,$),We);S.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var I=r.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(j){Fe(r,r.return,j)}if(t=r.sibling,t!==null){t.return=r.return,B=t;break}B=r.return}return V=rp,rp=!1,V}function ri(t,r,o){var l=r.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&t)===t){var h=u.destroy;u.destroy=void 0,h!==void 0&&Ec(r,o,h)}u=u.next}while(u!==l)}}function jo(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==r)}}function Cc(t){var r=t.ref;if(r!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof r=="function"?r(t):r.current=t}}function sp(t){var r=t.alternate;r!==null&&(t.alternate=null,sp(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[Qt],delete r[Gs],delete r[zl],delete r[Rv],delete r[bv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ip(t){return t.tag===5||t.tag===3||t.tag===4}function op(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ip(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sc(t,r,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(t,r):o.insertBefore(t,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(t,o)):(r=o,r.appendChild(t)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=po));else if(l!==4&&(t=t.child,t!==null))for(Sc(t,r,o),t=t.sibling;t!==null;)Sc(t,r,o),t=t.sibling}function Ic(t,r,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,r?o.insertBefore(t,r):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Ic(t,r,o),t=t.sibling;t!==null;)Ic(t,r,o),t=t.sibling}var Ze=null,Ut=!1;function Dn(t,r,o){for(o=o.child;o!==null;)ap(t,r,o),o=o.sibling}function ap(t,r,o){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(Yi,o)}catch{}switch(o.tag){case 5:ot||Yr(o,r);case 6:var l=Ze,u=Ut;Ze=null,Dn(t,r,o),Ze=l,Ut=u,Ze!==null&&(Ut?(t=Ze,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):Ze.removeChild(o.stateNode));break;case 18:Ze!==null&&(Ut?(t=Ze,o=o.stateNode,t.nodeType===8?Ul(t.parentNode,o):t.nodeType===1&&Ul(t,o),Ls(t)):Ul(Ze,o.stateNode));break;case 4:l=Ze,u=Ut,Ze=o.stateNode.containerInfo,Ut=!0,Dn(t,r,o),Ze=l,Ut=u;break;case 0:case 11:case 14:case 15:if(!ot&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var h=u,g=h.destroy;h=h.tag,g!==void 0&&((h&2)!==0||(h&4)!==0)&&Ec(o,r,g),u=u.next}while(u!==l)}Dn(t,r,o);break;case 1:if(!ot&&(Yr(o,r),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(y){Fe(o,r,y)}Dn(t,r,o);break;case 21:Dn(t,r,o);break;case 22:o.mode&1?(ot=(l=ot)||o.memoizedState!==null,Dn(t,r,o),ot=l):Dn(t,r,o);break;default:Dn(t,r,o)}}function lp(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new Gv),r.forEach(function(l){var u=n0.bind(null,t,l);o.has(l)||(o.add(l),l.then(u,u))})}}function zt(t,r){var o=r.deletions;if(o!==null)for(var l=0;l<o.length;l++){var u=o[l];try{var h=t,g=r,y=g;e:for(;y!==null;){switch(y.tag){case 5:Ze=y.stateNode,Ut=!1;break e;case 3:Ze=y.stateNode.containerInfo,Ut=!0;break e;case 4:Ze=y.stateNode.containerInfo,Ut=!0;break e}y=y.return}if(Ze===null)throw Error(n(160));ap(h,g,u),Ze=null,Ut=!1;var k=u.alternate;k!==null&&(k.return=null),u.return=null}catch(N){Fe(u,r,N)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)cp(r,t),r=r.sibling}function cp(t,r){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zt(r,t),Zt(t),l&4){try{ri(3,t,t.return),jo(3,t)}catch($){Fe(t,t.return,$)}try{ri(5,t,t.return)}catch($){Fe(t,t.return,$)}}break;case 1:zt(r,t),Zt(t),l&512&&o!==null&&Yr(o,o.return);break;case 5:if(zt(r,t),Zt(t),l&512&&o!==null&&Yr(o,o.return),t.flags&32){var u=t.stateNode;try{Cs(u,"")}catch($){Fe(t,t.return,$)}}if(l&4&&(u=t.stateNode,u!=null)){var h=t.memoizedProps,g=o!==null?o.memoizedProps:h,y=t.type,k=t.updateQueue;if(t.updateQueue=null,k!==null)try{y==="input"&&h.type==="radio"&&h.name!=null&&Md(u,h),rl(y,g);var N=rl(y,h);for(g=0;g<k.length;g+=2){var A=k[g],L=k[g+1];A==="style"?Vd(u,L):A==="dangerouslySetInnerHTML"?Bd(u,L):A==="children"?Cs(u,L):q(u,A,L,N)}switch(y){case"input":Ja(u,h);break;case"textarea":Ud(u,h);break;case"select":var b=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!h.multiple;var W=h.value;W!=null?Tr(u,!!h.multiple,W,!1):b!==!!h.multiple&&(h.defaultValue!=null?Tr(u,!!h.multiple,h.defaultValue,!0):Tr(u,!!h.multiple,h.multiple?[]:"",!1))}u[Gs]=h}catch($){Fe(t,t.return,$)}}break;case 6:if(zt(r,t),Zt(t),l&4){if(t.stateNode===null)throw Error(n(162));u=t.stateNode,h=t.memoizedProps;try{u.nodeValue=h}catch($){Fe(t,t.return,$)}}break;case 3:if(zt(r,t),Zt(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{Ls(r.containerInfo)}catch($){Fe(t,t.return,$)}break;case 4:zt(r,t),Zt(t);break;case 13:zt(r,t),Zt(t),u=t.child,u.flags&8192&&(h=u.memoizedState!==null,u.stateNode.isHidden=h,!h||u.alternate!==null&&u.alternate.memoizedState!==null||(Rc=ze())),l&4&&lp(t);break;case 22:if(A=o!==null&&o.memoizedState!==null,t.mode&1?(ot=(N=ot)||A,zt(r,t),ot=N):zt(r,t),Zt(t),l&8192){if(N=t.memoizedState!==null,(t.stateNode.isHidden=N)&&!A&&(t.mode&1)!==0)for(B=t,A=t.child;A!==null;){for(L=B=A;B!==null;){switch(b=B,W=b.child,b.tag){case 0:case 11:case 14:case 15:ri(4,b,b.return);break;case 1:Yr(b,b.return);var V=b.stateNode;if(typeof V.componentWillUnmount=="function"){l=b,o=b.return;try{r=l,V.props=r.memoizedProps,V.state=r.memoizedState,V.componentWillUnmount()}catch($){Fe(l,o,$)}}break;case 5:Yr(b,b.return);break;case 22:if(b.memoizedState!==null){hp(L);continue}}W!==null?(W.return=b,B=W):hp(L)}A=A.sibling}e:for(A=null,L=t;;){if(L.tag===5){if(A===null){A=L;try{u=L.stateNode,N?(h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(y=L.stateNode,k=L.memoizedProps.style,g=k!=null&&k.hasOwnProperty("display")?k.display:null,y.style.display=Hd("display",g))}catch($){Fe(t,t.return,$)}}}else if(L.tag===6){if(A===null)try{L.stateNode.nodeValue=N?"":L.memoizedProps}catch($){Fe(t,t.return,$)}}else if((L.tag!==22&&L.tag!==23||L.memoizedState===null||L===t)&&L.child!==null){L.child.return=L,L=L.child;continue}if(L===t)break e;for(;L.sibling===null;){if(L.return===null||L.return===t)break e;A===L&&(A=null),L=L.return}A===L&&(A=null),L.sibling.return=L.return,L=L.sibling}}break;case 19:zt(r,t),Zt(t),l&4&&lp(t);break;case 21:break;default:zt(r,t),Zt(t)}}function Zt(t){var r=t.flags;if(r&2){try{e:{for(var o=t.return;o!==null;){if(ip(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(Cs(u,""),l.flags&=-33);var h=op(t);Ic(t,h,u);break;case 3:case 4:var g=l.stateNode.containerInfo,y=op(t);Sc(t,y,g);break;default:throw Error(n(161))}}catch(k){Fe(t,t.return,k)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Kv(t,r,o){B=t,up(t)}function up(t,r,o){for(var l=(t.mode&1)!==0;B!==null;){var u=B,h=u.child;if(u.tag===22&&l){var g=u.memoizedState!==null||Mo;if(!g){var y=u.alternate,k=y!==null&&y.memoizedState!==null||ot;y=Mo;var N=ot;if(Mo=g,(ot=k)&&!N)for(B=u;B!==null;)g=B,k=g.child,g.tag===22&&g.memoizedState!==null?fp(u):k!==null?(k.return=g,B=k):fp(u);for(;h!==null;)B=h,up(h),h=h.sibling;B=u,Mo=y,ot=N}dp(t)}else(u.subtreeFlags&8772)!==0&&h!==null?(h.return=u,B=h):dp(t)}}function dp(t){for(;B!==null;){var r=B;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:ot||jo(5,r);break;case 1:var l=r.stateNode;if(r.flags&4&&!ot)if(o===null)l.componentDidMount();else{var u=r.elementType===r.type?o.memoizedProps:Ft(r.type,o.memoizedProps);l.componentDidUpdate(u,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=r.updateQueue;h!==null&&hf(r,h,l);break;case 3:var g=r.updateQueue;if(g!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}hf(r,g,o)}break;case 5:var y=r.stateNode;if(o===null&&r.flags&4){o=y;var k=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&o.focus();break;case"img":k.src&&(o.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var N=r.alternate;if(N!==null){var A=N.memoizedState;if(A!==null){var L=A.dehydrated;L!==null&&Ls(L)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}ot||r.flags&512&&Cc(r)}catch(b){Fe(r,r.return,b)}}if(r===t){B=null;break}if(o=r.sibling,o!==null){o.return=r.return,B=o;break}B=r.return}}function hp(t){for(;B!==null;){var r=B;if(r===t){B=null;break}var o=r.sibling;if(o!==null){o.return=r.return,B=o;break}B=r.return}}function fp(t){for(;B!==null;){var r=B;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{jo(4,r)}catch(k){Fe(r,o,k)}break;case 1:var l=r.stateNode;if(typeof l.componentDidMount=="function"){var u=r.return;try{l.componentDidMount()}catch(k){Fe(r,u,k)}}var h=r.return;try{Cc(r)}catch(k){Fe(r,h,k)}break;case 5:var g=r.return;try{Cc(r)}catch(k){Fe(r,g,k)}}}catch(k){Fe(r,r.return,k)}if(r===t){B=null;break}var y=r.sibling;if(y!==null){y.return=r.return,B=y;break}B=r.return}}var Yv=Math.ceil,Fo=ne.ReactCurrentDispatcher,Nc=ne.ReactCurrentOwner,At=ne.ReactCurrentBatchConfig,fe=0,qe=null,Be=null,et=0,It=0,Qr=Tn(0),Ve=0,si=null,ur=0,Uo=0,Tc=0,ii=null,mt=null,Rc=0,Xr=1/0,un=null,zo=!1,bc=null,On=null,Wo=!1,Ln=null,Bo=0,oi=0,Pc=null,Ho=-1,Vo=0;function ut(){return(fe&6)!==0?ze():Ho!==-1?Ho:Ho=ze()}function Mn(t){return(t.mode&1)===0?1:(fe&2)!==0&&et!==0?et&-et:Av.transition!==null?(Vo===0&&(Vo=ih()),Vo):(t=Ee,t!==0||(t=window.event,t=t===void 0?16:ph(t.type)),t)}function Wt(t,r,o,l){if(50<oi)throw oi=0,Pc=null,Error(n(185));bs(t,o,l),((fe&2)===0||t!==qe)&&(t===qe&&((fe&2)===0&&(Uo|=o),Ve===4&&jn(t,et)),gt(t,l),o===1&&fe===0&&(r.mode&1)===0&&(Xr=ze()+500,yo&&bn()))}function gt(t,r){var o=t.callbackNode;Ay(t,r);var l=Ji(t,t===qe?et:0);if(l===0)o!==null&&nh(o),t.callbackNode=null,t.callbackPriority=0;else if(r=l&-l,t.callbackPriority!==r){if(o!=null&&nh(o),r===1)t.tag===0?Pv(mp.bind(null,t)):Zh(mp.bind(null,t)),Nv(function(){(fe&6)===0&&bn()}),o=null;else{switch(oh(l)){case 1:o=ul;break;case 4:o=rh;break;case 16:o=Ki;break;case 536870912:o=sh;break;default:o=Ki}o=Ep(o,pp.bind(null,t))}t.callbackPriority=r,t.callbackNode=o}}function pp(t,r){if(Ho=-1,Vo=0,(fe&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Jr()&&t.callbackNode!==o)return null;var l=Ji(t,t===qe?et:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||r)r=$o(t,l);else{r=l;var u=fe;fe|=2;var h=_p();(qe!==t||et!==r)&&(un=null,Xr=ze()+500,hr(t,r));do try{Jv();break}catch(y){gp(t,y)}while(!0);Yl(),Fo.current=h,fe=u,Be!==null?r=0:(qe=null,et=0,r=Ve)}if(r!==0){if(r===2&&(u=dl(t),u!==0&&(l=u,r=Ac(t,u))),r===1)throw o=si,hr(t,0),jn(t,l),gt(t,ze()),o;if(r===6)jn(t,l);else{if(u=t.current.alternate,(l&30)===0&&!Qv(u)&&(r=$o(t,l),r===2&&(h=dl(t),h!==0&&(l=h,r=Ac(t,h))),r===1))throw o=si,hr(t,0),jn(t,l),gt(t,ze()),o;switch(t.finishedWork=u,t.finishedLanes=l,r){case 0:case 1:throw Error(n(345));case 2:fr(t,mt,un);break;case 3:if(jn(t,l),(l&130023424)===l&&(r=Rc+500-ze(),10<r)){if(Ji(t,0)!==0)break;if(u=t.suspendedLanes,(u&l)!==l){ut(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=Fl(fr.bind(null,t,mt,un),r);break}fr(t,mt,un);break;case 4:if(jn(t,l),(l&4194240)===l)break;for(r=t.eventTimes,u=-1;0<l;){var g=31-Lt(l);h=1<<g,g=r[g],g>u&&(u=g),l&=~h}if(l=u,l=ze()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Yv(l/1960))-l,10<l){t.timeoutHandle=Fl(fr.bind(null,t,mt,un),l);break}fr(t,mt,un);break;case 5:fr(t,mt,un);break;default:throw Error(n(329))}}}return gt(t,ze()),t.callbackNode===o?pp.bind(null,t):null}function Ac(t,r){var o=ii;return t.current.memoizedState.isDehydrated&&(hr(t,r).flags|=256),t=$o(t,r),t!==2&&(r=mt,mt=o,r!==null&&Dc(r)),t}function Dc(t){mt===null?mt=t:mt.push.apply(mt,t)}function Qv(t){for(var r=t;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var u=o[l],h=u.getSnapshot;u=u.value;try{if(!Mt(h(),u))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function jn(t,r){for(r&=~Tc,r&=~Uo,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var o=31-Lt(r),l=1<<o;t[o]=-1,r&=~l}}function mp(t){if((fe&6)!==0)throw Error(n(327));Jr();var r=Ji(t,0);if((r&1)===0)return gt(t,ze()),null;var o=$o(t,r);if(t.tag!==0&&o===2){var l=dl(t);l!==0&&(r=l,o=Ac(t,l))}if(o===1)throw o=si,hr(t,0),jn(t,r),gt(t,ze()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,fr(t,mt,un),gt(t,ze()),null}function Oc(t,r){var o=fe;fe|=1;try{return t(r)}finally{fe=o,fe===0&&(Xr=ze()+500,yo&&bn())}}function dr(t){Ln!==null&&Ln.tag===0&&(fe&6)===0&&Jr();var r=fe;fe|=1;var o=At.transition,l=Ee;try{if(At.transition=null,Ee=1,t)return t()}finally{Ee=l,At.transition=o,fe=r,(fe&6)===0&&bn()}}function Lc(){It=Qr.current,be(Qr)}function hr(t,r){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Iv(o)),Be!==null)for(o=Be.return;o!==null;){var l=o;switch(Vl(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&go();break;case 3:qr(),be(ht),be(rt),rc();break;case 5:tc(l);break;case 4:qr();break;case 13:be(Oe);break;case 19:be(Oe);break;case 10:Ql(l.type._context);break;case 22:case 23:Lc()}o=o.return}if(qe=t,Be=t=Fn(t.current,null),et=It=r,Ve=0,si=null,Tc=Uo=ur=0,mt=ii=null,ar!==null){for(r=0;r<ar.length;r++)if(o=ar[r],l=o.interleaved,l!==null){o.interleaved=null;var u=l.next,h=o.pending;if(h!==null){var g=h.next;h.next=u,l.next=g}o.pending=l}ar=null}return t}function gp(t,r){do{var o=Be;try{if(Yl(),To.current=Ao,Ro){for(var l=Le.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}Ro=!1}if(cr=0,Ge=He=Le=null,Js=!1,Zs=0,Nc.current=null,o===null||o.return===null){Ve=1,si=r,Be=null;break}e:{var h=t,g=o.return,y=o,k=r;if(r=et,y.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var N=k,A=y,L=A.tag;if((A.mode&1)===0&&(L===0||L===11||L===15)){var b=A.alternate;b?(A.updateQueue=b.updateQueue,A.memoizedState=b.memoizedState,A.lanes=b.lanes):(A.updateQueue=null,A.memoizedState=null)}var W=Wf(g);if(W!==null){W.flags&=-257,Bf(W,g,y,h,r),W.mode&1&&zf(h,N,r),r=W,k=N;var V=r.updateQueue;if(V===null){var $=new Set;$.add(k),r.updateQueue=$}else V.add(k);break e}else{if((r&1)===0){zf(h,N,r),Mc();break e}k=Error(n(426))}}else if(De&&y.mode&1){var We=Wf(g);if(We!==null){(We.flags&65536)===0&&(We.flags|=256),Bf(We,g,y,h,r),ql(Kr(k,y));break e}}h=k=Kr(k,y),Ve!==4&&(Ve=2),ii===null?ii=[h]:ii.push(h),h=g;do{switch(h.tag){case 3:h.flags|=65536,r&=-r,h.lanes|=r;var S=Ff(h,k,r);df(h,S);break e;case 1:y=k;var E=h.type,I=h.stateNode;if((h.flags&128)===0&&(typeof E.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(On===null||!On.has(I)))){h.flags|=65536,r&=-r,h.lanes|=r;var j=Uf(h,y,r);df(h,j);break e}}h=h.return}while(h!==null)}vp(o)}catch(G){r=G,Be===o&&o!==null&&(Be=o=o.return);continue}break}while(!0)}function _p(){var t=Fo.current;return Fo.current=Ao,t===null?Ao:t}function Mc(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),qe===null||(ur&268435455)===0&&(Uo&268435455)===0||jn(qe,et)}function $o(t,r){var o=fe;fe|=2;var l=_p();(qe!==t||et!==r)&&(un=null,hr(t,r));do try{Xv();break}catch(u){gp(t,u)}while(!0);if(Yl(),fe=o,Fo.current=l,Be!==null)throw Error(n(261));return qe=null,et=0,Ve}function Xv(){for(;Be!==null;)yp(Be)}function Jv(){for(;Be!==null&&!Ey();)yp(Be)}function yp(t){var r=kp(t.alternate,t,It);t.memoizedProps=t.pendingProps,r===null?vp(t):Be=r,Nc.current=null}function vp(t){var r=t;do{var o=r.alternate;if(t=r.return,(r.flags&32768)===0){if(o=Vv(o,r,It),o!==null){Be=o;return}}else{if(o=$v(o,r),o!==null){o.flags&=32767,Be=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ve=6,Be=null;return}}if(r=r.sibling,r!==null){Be=r;return}Be=r=t}while(r!==null);Ve===0&&(Ve=5)}function fr(t,r,o){var l=Ee,u=At.transition;try{At.transition=null,Ee=1,Zv(t,r,o,l)}finally{At.transition=u,Ee=l}return null}function Zv(t,r,o,l){do Jr();while(Ln!==null);if((fe&6)!==0)throw Error(n(327));o=t.finishedWork;var u=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(Dy(t,h),t===qe&&(Be=qe=null,et=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Wo||(Wo=!0,Ep(Ki,function(){return Jr(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=At.transition,At.transition=null;var g=Ee;Ee=1;var y=fe;fe|=4,Nc.current=null,qv(t,o),cp(o,t),vv(Ml),to=!!Ll,Ml=Ll=null,t.current=o,Kv(o),Cy(),fe=y,Ee=g,At.transition=h}else t.current=o;if(Wo&&(Wo=!1,Ln=t,Bo=u),h=t.pendingLanes,h===0&&(On=null),Ny(o.stateNode),gt(t,ze()),r!==null)for(l=t.onRecoverableError,o=0;o<r.length;o++)u=r[o],l(u.value,{componentStack:u.stack,digest:u.digest});if(zo)throw zo=!1,t=bc,bc=null,t;return(Bo&1)!==0&&t.tag!==0&&Jr(),h=t.pendingLanes,(h&1)!==0?t===Pc?oi++:(oi=0,Pc=t):oi=0,bn(),null}function Jr(){if(Ln!==null){var t=oh(Bo),r=At.transition,o=Ee;try{if(At.transition=null,Ee=16>t?16:t,Ln===null)var l=!1;else{if(t=Ln,Ln=null,Bo=0,(fe&6)!==0)throw Error(n(331));var u=fe;for(fe|=4,B=t.current;B!==null;){var h=B,g=h.child;if((B.flags&16)!==0){var y=h.deletions;if(y!==null){for(var k=0;k<y.length;k++){var N=y[k];for(B=N;B!==null;){var A=B;switch(A.tag){case 0:case 11:case 15:ri(8,A,h)}var L=A.child;if(L!==null)L.return=A,B=L;else for(;B!==null;){A=B;var b=A.sibling,W=A.return;if(sp(A),A===N){B=null;break}if(b!==null){b.return=W,B=b;break}B=W}}}var V=h.alternate;if(V!==null){var $=V.child;if($!==null){V.child=null;do{var We=$.sibling;$.sibling=null,$=We}while($!==null)}}B=h}}if((h.subtreeFlags&2064)!==0&&g!==null)g.return=h,B=g;else e:for(;B!==null;){if(h=B,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:ri(9,h,h.return)}var S=h.sibling;if(S!==null){S.return=h.return,B=S;break e}B=h.return}}var E=t.current;for(B=E;B!==null;){g=B;var I=g.child;if((g.subtreeFlags&2064)!==0&&I!==null)I.return=g,B=I;else e:for(g=E;B!==null;){if(y=B,(y.flags&2048)!==0)try{switch(y.tag){case 0:case 11:case 15:jo(9,y)}}catch(G){Fe(y,y.return,G)}if(y===g){B=null;break e}var j=y.sibling;if(j!==null){j.return=y.return,B=j;break e}B=y.return}}if(fe=u,bn(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(Yi,t)}catch{}l=!0}return l}finally{Ee=o,At.transition=r}}return!1}function wp(t,r,o){r=Kr(o,r),r=Ff(t,r,1),t=An(t,r,1),r=ut(),t!==null&&(bs(t,1,r),gt(t,r))}function Fe(t,r,o){if(t.tag===3)wp(t,t,o);else for(;r!==null;){if(r.tag===3){wp(r,t,o);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(On===null||!On.has(l))){t=Kr(o,t),t=Uf(r,t,1),r=An(r,t,1),t=ut(),r!==null&&(bs(r,1,t),gt(r,t));break}}r=r.return}}function e0(t,r,o){var l=t.pingCache;l!==null&&l.delete(r),r=ut(),t.pingedLanes|=t.suspendedLanes&o,qe===t&&(et&o)===o&&(Ve===4||Ve===3&&(et&130023424)===et&&500>ze()-Rc?hr(t,0):Tc|=o),gt(t,r)}function xp(t,r){r===0&&((t.mode&1)===0?r=1:(r=Xi,Xi<<=1,(Xi&130023424)===0&&(Xi=4194304)));var o=ut();t=an(t,r),t!==null&&(bs(t,r,o),gt(t,o))}function t0(t){var r=t.memoizedState,o=0;r!==null&&(o=r.retryLane),xp(t,o)}function n0(t,r){var o=0;switch(t.tag){case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(o=u.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(r),xp(t,o)}var kp;kp=function(t,r,o){if(t!==null)if(t.memoizedProps!==r.pendingProps||ht.current)pt=!0;else{if((t.lanes&o)===0&&(r.flags&128)===0)return pt=!1,Hv(t,r,o);pt=(t.flags&131072)!==0}else pt=!1,De&&(r.flags&1048576)!==0&&ef(r,wo,r.index);switch(r.lanes=0,r.tag){case 2:var l=r.type;Lo(t,r),t=r.pendingProps;var u=zr(r,rt.current);Gr(r,o),u=oc(null,r,l,t,u,o);var h=ac();return r.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,ft(l)?(h=!0,_o(r)):h=!1,r.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Zl(r),u.updater=Do,r.stateNode=u,u._reactInternals=r,fc(r,l,t,o),r=_c(null,r,l,!0,h,o)):(r.tag=0,De&&h&&Hl(r),ct(null,r,u,o),r=r.child),r;case 16:l=r.elementType;e:{switch(Lo(t,r),t=r.pendingProps,u=l._init,l=u(l._payload),r.type=l,u=r.tag=s0(l),t=Ft(l,t),u){case 0:r=gc(null,r,l,t,o);break e;case 1:r=Kf(null,r,l,t,o);break e;case 11:r=Hf(null,r,l,t,o);break e;case 14:r=Vf(null,r,l,Ft(l.type,t),o);break e}throw Error(n(306,l,""))}return r;case 0:return l=r.type,u=r.pendingProps,u=r.elementType===l?u:Ft(l,u),gc(t,r,l,u,o);case 1:return l=r.type,u=r.pendingProps,u=r.elementType===l?u:Ft(l,u),Kf(t,r,l,u,o);case 3:e:{if(Yf(r),t===null)throw Error(n(387));l=r.pendingProps,h=r.memoizedState,u=h.element,uf(t,r),Io(r,l,null,o);var g=r.memoizedState;if(l=g.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},r.updateQueue.baseState=h,r.memoizedState=h,r.flags&256){u=Kr(Error(n(423)),r),r=Qf(t,r,l,o,u);break e}else if(l!==u){u=Kr(Error(n(424)),r),r=Qf(t,r,l,o,u);break e}else for(St=Nn(r.stateNode.containerInfo.firstChild),Ct=r,De=!0,jt=null,o=lf(r,null,l,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Hr(),l===u){r=cn(t,r,o);break e}ct(t,r,l,o)}r=r.child}return r;case 5:return ff(r),t===null&&Gl(r),l=r.type,u=r.pendingProps,h=t!==null?t.memoizedProps:null,g=u.children,jl(l,u)?g=null:h!==null&&jl(l,h)&&(r.flags|=32),qf(t,r),ct(t,r,g,o),r.child;case 6:return t===null&&Gl(r),null;case 13:return Xf(t,r,o);case 4:return ec(r,r.stateNode.containerInfo),l=r.pendingProps,t===null?r.child=Vr(r,null,l,o):ct(t,r,l,o),r.child;case 11:return l=r.type,u=r.pendingProps,u=r.elementType===l?u:Ft(l,u),Hf(t,r,l,u,o);case 7:return ct(t,r,r.pendingProps,o),r.child;case 8:return ct(t,r,r.pendingProps.children,o),r.child;case 12:return ct(t,r,r.pendingProps.children,o),r.child;case 10:e:{if(l=r.type._context,u=r.pendingProps,h=r.memoizedProps,g=u.value,Ne(Eo,l._currentValue),l._currentValue=g,h!==null)if(Mt(h.value,g)){if(h.children===u.children&&!ht.current){r=cn(t,r,o);break e}}else for(h=r.child,h!==null&&(h.return=r);h!==null;){var y=h.dependencies;if(y!==null){g=h.child;for(var k=y.firstContext;k!==null;){if(k.context===l){if(h.tag===1){k=ln(-1,o&-o),k.tag=2;var N=h.updateQueue;if(N!==null){N=N.shared;var A=N.pending;A===null?k.next=k:(k.next=A.next,A.next=k),N.pending=k}}h.lanes|=o,k=h.alternate,k!==null&&(k.lanes|=o),Xl(h.return,o,r),y.lanes|=o;break}k=k.next}}else if(h.tag===10)g=h.type===r.type?null:h.child;else if(h.tag===18){if(g=h.return,g===null)throw Error(n(341));g.lanes|=o,y=g.alternate,y!==null&&(y.lanes|=o),Xl(g,o,r),g=h.sibling}else g=h.child;if(g!==null)g.return=h;else for(g=h;g!==null;){if(g===r){g=null;break}if(h=g.sibling,h!==null){h.return=g.return,g=h;break}g=g.return}h=g}ct(t,r,u.children,o),r=r.child}return r;case 9:return u=r.type,l=r.pendingProps.children,Gr(r,o),u=bt(u),l=l(u),r.flags|=1,ct(t,r,l,o),r.child;case 14:return l=r.type,u=Ft(l,r.pendingProps),u=Ft(l.type,u),Vf(t,r,l,u,o);case 15:return $f(t,r,r.type,r.pendingProps,o);case 17:return l=r.type,u=r.pendingProps,u=r.elementType===l?u:Ft(l,u),Lo(t,r),r.tag=1,ft(l)?(t=!0,_o(r)):t=!1,Gr(r,o),Mf(r,l,u),fc(r,l,u,o),_c(null,r,l,!0,t,o);case 19:return Zf(t,r,o);case 22:return Gf(t,r,o)}throw Error(n(156,r.tag))};function Ep(t,r){return th(t,r)}function r0(t,r,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(t,r,o,l){return new r0(t,r,o,l)}function jc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function s0(t){if(typeof t=="function")return jc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===se)return 11;if(t===Nt)return 14}return 2}function Fn(t,r){var o=t.alternate;return o===null?(o=Dt(t.tag,r,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=r,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,r=t.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Go(t,r,o,l,u,h){var g=2;if(l=t,typeof t=="function")jc(t)&&(g=1);else if(typeof t=="string")g=5;else e:switch(t){case _e:return pr(o.children,u,h,r);case xe:g=8,u|=8;break;case Me:return t=Dt(12,o,r,u|2),t.elementType=Me,t.lanes=h,t;case Je:return t=Dt(13,o,r,u),t.elementType=Je,t.lanes=h,t;case lt:return t=Dt(19,o,r,u),t.elementType=lt,t.lanes=h,t;case je:return qo(o,u,h,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ee:g=10;break e;case he:g=9;break e;case se:g=11;break e;case Nt:g=14;break e;case nt:g=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return r=Dt(g,o,r,u),r.elementType=t,r.type=l,r.lanes=h,r}function pr(t,r,o,l){return t=Dt(7,t,l,r),t.lanes=o,t}function qo(t,r,o,l){return t=Dt(22,t,l,r),t.elementType=je,t.lanes=o,t.stateNode={isHidden:!1},t}function Fc(t,r,o){return t=Dt(6,t,null,r),t.lanes=o,t}function Uc(t,r,o){return r=Dt(4,t.children!==null?t.children:[],t.key,r),r.lanes=o,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function i0(t,r,o,l,u){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hl(0),this.expirationTimes=hl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hl(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function zc(t,r,o,l,u,h,g,y,k){return t=new i0(t,r,o,y,k),r===1?(r=1,h===!0&&(r|=8)):r=0,h=Dt(3,null,null,r),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zl(h),t}function o0(t,r,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:l==null?null:""+l,children:t,containerInfo:r,implementation:o}}function Cp(t){if(!t)return Rn;t=t._reactInternals;e:{if(nr(t)!==t||t.tag!==1)throw Error(n(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(ft(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(ft(o))return Xh(t,o,r)}return r}function Sp(t,r,o,l,u,h,g,y,k){return t=zc(o,l,!0,t,u,h,g,y,k),t.context=Cp(null),o=t.current,l=ut(),u=Mn(o),h=ln(l,u),h.callback=r??null,An(o,h,u),t.current.lanes=u,bs(t,u,l),gt(t,l),t}function Ko(t,r,o,l){var u=r.current,h=ut(),g=Mn(u);return o=Cp(o),r.context===null?r.context=o:r.pendingContext=o,r=ln(h,g),r.payload={element:t},l=l===void 0?null:l,l!==null&&(r.callback=l),t=An(u,r,g),t!==null&&(Wt(t,u,g,h),So(t,u,g)),g}function Yo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ip(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<r?o:r}}function Wc(t,r){Ip(t,r),(t=t.alternate)&&Ip(t,r)}function a0(){return null}var Np=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bc(t){this._internalRoot=t}Qo.prototype.render=Bc.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(n(409));Ko(t,r,null,null)},Qo.prototype.unmount=Bc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;dr(function(){Ko(null,t,null,null)}),r[nn]=null}};function Qo(t){this._internalRoot=t}Qo.prototype.unstable_scheduleHydration=function(t){if(t){var r=ch();t={blockedOn:null,target:t,priority:r};for(var o=0;o<Cn.length&&r!==0&&r<Cn[o].priority;o++);Cn.splice(o,0,t),o===0&&hh(t)}};function Hc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Tp(){}function l0(t,r,o,l,u){if(u){if(typeof l=="function"){var h=l;l=function(){var N=Yo(g);h.call(N)}}var g=Sp(r,l,t,0,null,!1,!1,"",Tp);return t._reactRootContainer=g,t[nn]=g.current,Vs(t.nodeType===8?t.parentNode:t),dr(),g}for(;u=t.lastChild;)t.removeChild(u);if(typeof l=="function"){var y=l;l=function(){var N=Yo(k);y.call(N)}}var k=zc(t,0,!1,null,null,!1,!1,"",Tp);return t._reactRootContainer=k,t[nn]=k.current,Vs(t.nodeType===8?t.parentNode:t),dr(function(){Ko(r,k,o,l)}),k}function Jo(t,r,o,l,u){var h=o._reactRootContainer;if(h){var g=h;if(typeof u=="function"){var y=u;u=function(){var k=Yo(g);y.call(k)}}Ko(r,g,t,u)}else g=l0(o,r,t,u,l);return Yo(g)}ah=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var o=Rs(r.pendingLanes);o!==0&&(fl(r,o|1),gt(r,ze()),(fe&6)===0&&(Xr=ze()+500,bn()))}break;case 13:dr(function(){var l=an(t,1);if(l!==null){var u=ut();Wt(l,t,1,u)}}),Wc(t,1)}},pl=function(t){if(t.tag===13){var r=an(t,134217728);if(r!==null){var o=ut();Wt(r,t,134217728,o)}Wc(t,134217728)}},lh=function(t){if(t.tag===13){var r=Mn(t),o=an(t,r);if(o!==null){var l=ut();Wt(o,t,r,l)}Wc(t,r)}},ch=function(){return Ee},uh=function(t,r){var o=Ee;try{return Ee=t,r()}finally{Ee=o}},ol=function(t,r,o){switch(r){case"input":if(Ja(t,o),r=o.name,o.type==="radio"&&r!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var l=o[r];if(l!==t&&l.form===t.form){var u=mo(l);if(!u)throw Error(n(90));Od(l),Ja(l,u)}}}break;case"textarea":Ud(t,o);break;case"select":r=o.value,r!=null&&Tr(t,!!o.multiple,r,!1)}},Kd=Oc,Yd=dr;var c0={usingClientEntryPoint:!1,Events:[qs,Fr,mo,Gd,qd,Oc]},ai={findFiberByHostInstance:rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},u0={bundleType:ai.bundleType,version:ai.version,rendererPackageName:ai.rendererPackageName,rendererConfig:ai.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ne.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Zd(t),t===null?null:t.stateNode},findFiberByHostInstance:ai.findFiberByHostInstance||a0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zo.isDisabled&&Zo.supportsFiber)try{Yi=Zo.inject(u0),Yt=Zo}catch{}}return _t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c0,_t.createPortal=function(t,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hc(r))throw Error(n(200));return o0(t,r,null,o)},_t.createRoot=function(t,r){if(!Hc(t))throw Error(n(299));var o=!1,l="",u=Np;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(u=r.onRecoverableError)),r=zc(t,1,!1,null,null,o,!1,l,u),t[nn]=r.current,Vs(t.nodeType===8?t.parentNode:t),new Bc(r)},_t.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Zd(r),t=t===null?null:t.stateNode,t},_t.flushSync=function(t){return dr(t)},_t.hydrate=function(t,r,o){if(!Xo(r))throw Error(n(200));return Jo(null,t,r,!0,o)},_t.hydrateRoot=function(t,r,o){if(!Hc(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,u=!1,h="",g=Np;if(o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(g=o.onRecoverableError)),r=Sp(r,null,t,1,o??null,u,!1,h,g),t[nn]=r.current,Vs(t),l)for(t=0;t<l.length;t++)o=l[t],u=o._getVersion,u=u(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,u]:r.mutableSourceEagerHydrationData.push(o,u);return new Qo(r)},_t.render=function(t,r,o){if(!Xo(r))throw Error(n(200));return Jo(null,t,r,!1,o)},_t.unmountComponentAtNode=function(t){if(!Xo(t))throw Error(n(40));return t._reactRootContainer?(dr(function(){Jo(null,null,t,!1,function(){t._reactRootContainer=null,t[nn]=null})}),!0):!1},_t.unstable_batchedUpdates=Oc,_t.unstable_renderSubtreeIntoContainer=function(t,r,o,l){if(!Xo(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Jo(t,r,o,!1,l)},_t.version="18.3.1-next-f1338f8080-20240426",_t}var jp;function v0(){if(jp)return Gc.exports;jp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Gc.exports=y0(),Gc.exports}var Fp;function w0(){if(Fp)return ea;Fp=1;var s=v0();return ea.createRoot=s.createRoot,ea.hydrateRoot=s.hydrateRoot,ea}var x0=w0();const Up=s=>{let e;const n=new Set,i=(_,x)=>{const v=typeof _=="function"?_(e):_;if(!Object.is(v,e)){const w=e;e=x??(typeof v!="object"||v===null)?v:Object.assign({},e,v),n.forEach(T=>T(e,w))}},a=()=>e,f={setState:i,getState:a,getInitialState:()=>m,subscribe:_=>(n.add(_),()=>n.delete(_))},m=e=s(i,a,f);return f},k0=s=>s?Up(s):Up,E0=s=>s;function C0(s,e=E0){const n=Dp.useSyncExternalStore(s.subscribe,()=>e(s.getState()),()=>e(s.getInitialState()));return Dp.useDebugValue(n),n}const zp=s=>{const e=k0(s),n=i=>C0(e,i);return Object.assign(n,e),n},S0=s=>s?zp(s):zp,I0=()=>{};var Wp={};/**
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
 */const sg={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const F=function(s,e){if(!s)throw ms(e)},ms=function(s){return new Error("Firebase Database ("+sg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+s)};/**
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
 */const ig=function(s){const e=[];let n=0;for(let i=0;i<s.length;i++){let a=s.charCodeAt(i);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):(a&64512)===55296&&i+1<s.length&&(s.charCodeAt(i+1)&64512)===56320?(a=65536+((a&1023)<<10)+(s.charCodeAt(++i)&1023),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},N0=function(s){const e=[];let n=0,i=0;for(;n<s.length;){const a=s[n++];if(a<128)e[i++]=String.fromCharCode(a);else if(a>191&&a<224){const c=s[n++];e[i++]=String.fromCharCode((a&31)<<6|c&63)}else if(a>239&&a<365){const c=s[n++],d=s[n++],f=s[n++],m=((a&7)<<18|(c&63)<<12|(d&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(m>>10)),e[i++]=String.fromCharCode(56320+(m&1023))}else{const c=s[n++],d=s[n++];e[i++]=String.fromCharCode((a&15)<<12|(c&63)<<6|d&63)}}return e.join("")},Mu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let a=0;a<s.length;a+=3){const c=s[a],d=a+1<s.length,f=d?s[a+1]:0,m=a+2<s.length,_=m?s[a+2]:0,x=c>>2,v=(c&3)<<4|f>>4;let w=(f&15)<<2|_>>6,T=_&63;m||(T=64,d||(w=64)),i.push(n[x],n[v],n[w],n[T])}return i.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(ig(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):N0(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let a=0;a<s.length;){const c=n[s.charAt(a++)],f=a<s.length?n[s.charAt(a)]:0;++a;const _=a<s.length?n[s.charAt(a)]:64;++a;const v=a<s.length?n[s.charAt(a)]:64;if(++a,c==null||f==null||_==null||v==null)throw new T0;const w=c<<2|f>>4;if(i.push(w),_!==64){const T=f<<4&240|_>>2;if(i.push(T),v!==64){const R=_<<6&192|v;i.push(R)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class T0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const og=function(s){const e=ig(s);return Mu.encodeByteArray(e,!0)},ua=function(s){return og(s).replace(/\./g,"")},da=function(s){try{return Mu.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function R0(s){return ag(void 0,s)}function ag(s,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:s===void 0&&(s={});break;case Array:s=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!b0(n)||(s[n]=ag(s[n],e[n]));return s}function b0(s){return s!=="__proto__"}/**
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
 */function P0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const A0=()=>P0().__FIREBASE_DEFAULTS__,D0=()=>{if(typeof process>"u"||typeof Wp>"u")return;const s=Wp.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},O0=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&da(s[1]);return e&&JSON.parse(e)},ju=()=>{try{return I0()||A0()||D0()||O0()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},lg=s=>{var e,n;return(n=(e=ju())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[s]},L0=s=>{const e=lg(s);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},cg=()=>{var s;return(s=ju())===null||s===void 0?void 0:s.config},ug=s=>{var e;return(e=ju())===null||e===void 0?void 0:e[`_${s}`]};/**
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
 */class Oa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function dg(s){return(await fetch(s,{credentials:"include"})).ok}/**
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
 */function M0(s,e){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",a=s.iat||0,c=s.sub||s.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:a,exp:a+3600,auth_time:a,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},s);return[ua(JSON.stringify(n)),ua(JSON.stringify(d)),""].join(".")}const mi={};function j0(){const s={prod:[],emulator:[]};for(const e of Object.keys(mi))mi[e]?s.emulator.push(e):s.prod.push(e);return s}function F0(s){let e=document.getElementById(s),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",s),n=!0),{created:n,element:e}}let Bp=!1;function hg(s,e){if(typeof window>"u"||typeof document>"u"||!gs(window.location.host)||mi[s]===e||mi[s]||Bp)return;mi[s]=e;function n(w){return`__firebase__banner__${w}`}const i="__firebase__banner",c=j0().prod.length>0;function d(){const w=document.getElementById(i);w&&w.remove()}function f(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function m(w,T){w.setAttribute("width","24"),w.setAttribute("id",T),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function _(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{Bp=!0,d()},w}function x(w,T){w.setAttribute("id",T),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function v(){const w=F0(i),T=n("text"),R=document.getElementById(T)||document.createElement("span"),M=n("learnmore"),O=document.getElementById(M)||document.createElement("a"),re=n("preprendIcon"),D=document.getElementById(re)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const q=w.element;f(q),x(O,M);const ne=_();m(D,re),q.append(D,R,O,ne),document.body.appendChild(q)}c?(R.innerText="Preview backend disconnected.",D.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(D.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",T)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",v):v()}/**
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
 */function dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function U0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function z0(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function fg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function W0(){const s=dt();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function B0(){return sg.NODE_ADMIN===!0}function H0(){try{return typeof indexedDB=="object"}catch{return!1}}function V0(){return new Promise((s,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(i);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(i),s(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var c;e(((c=a.error)===null||c===void 0?void 0:c.message)||"")}}catch(n){e(n)}})}/**
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
 */const $0="FirebaseError";class Zn extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=$0,Object.setPrototypeOf(this,Zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oi.prototype.create)}}class Oi{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},a=`${this.service}/${e}`,c=this.errors[e],d=c?G0(c,i):"Error",f=`${this.serviceName}: ${d} (${a}).`;return new Zn(a,f,i)}}function G0(s,e){return s.replace(q0,(n,i)=>{const a=e[i];return a!=null?String(a):`<${i}?>`})}const q0=/\{\$([^}]+)}/g;/**
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
 */function ki(s){return JSON.parse(s)}function Xe(s){return JSON.stringify(s)}/**
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
 */const pg=function(s){let e={},n={},i={},a="";try{const c=s.split(".");e=ki(da(c[0])||""),n=ki(da(c[1])||""),a=c[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:a}},K0=function(s){const e=pg(s),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Y0=function(s){const e=pg(s).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function vn(s,e){return Object.prototype.hasOwnProperty.call(s,e)}function cs(s,e){if(Object.prototype.hasOwnProperty.call(s,e))return s[e]}function uu(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}function ha(s,e,n){const i={};for(const a in s)Object.prototype.hasOwnProperty.call(s,a)&&(i[a]=e.call(n,s[a],a,s));return i}function vr(s,e){if(s===e)return!0;const n=Object.keys(s),i=Object.keys(e);for(const a of n){if(!i.includes(a))return!1;const c=s[a],d=e[a];if(Hp(c)&&Hp(d)){if(!vr(c,d))return!1}else if(c!==d)return!1}for(const a of i)if(!n.includes(a))return!1;return!0}function Hp(s){return s!==null&&typeof s=="object"}/**
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
 */function _s(s){const e=[];for(const[n,i]of Object.entries(s))Array.isArray(i)?i.forEach(a=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function fi(s){const e={};return s.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[a,c]=i.split("=");e[decodeURIComponent(a)]=decodeURIComponent(c)}}),e}function pi(s){const e=s.indexOf("?");if(!e)return"";const n=s.indexOf("#",e);return s.substring(e,n>0?n:void 0)}/**
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
 */class Q0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let v=0;v<16;v++)i[v]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let v=0;v<16;v++)i[v]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let v=16;v<80;v++){const w=i[v-3]^i[v-8]^i[v-14]^i[v-16];i[v]=(w<<1|w>>>31)&4294967295}let a=this.chain_[0],c=this.chain_[1],d=this.chain_[2],f=this.chain_[3],m=this.chain_[4],_,x;for(let v=0;v<80;v++){v<40?v<20?(_=f^c&(d^f),x=1518500249):(_=c^d^f,x=1859775393):v<60?(_=c&d|f&(c|d),x=2400959708):(_=c^d^f,x=3395469782);const w=(a<<5|a>>>27)+_+m+x+i[v]&4294967295;m=f,f=d,d=(c<<30|c>>>2)&4294967295,c=a,a=w}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+d&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+m&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let a=0;const c=this.buf_;let d=this.inbuf_;for(;a<n;){if(d===0)for(;a<=i;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<n;)if(c[d]=e.charCodeAt(a),++d,++a,d===this.blockSize){this.compress_(c),d=0;break}}else for(;a<n;)if(c[d]=e[a],++d,++a,d===this.blockSize){this.compress_(c),d=0;break}}this.inbuf_=d,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let a=0;a<5;a++)for(let c=24;c>=0;c-=8)e[i]=this.chain_[a]>>c&255,++i;return e}}function X0(s,e){const n=new J0(s,e);return n.subscribe.bind(n)}class J0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let a;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Z0(e,["next","error","complete"])?a=e:a={next:e,error:n,complete:i},a.next===void 0&&(a.next=Yc),a.error===void 0&&(a.error=Yc),a.complete===void 0&&(a.complete=Yc);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Z0(s,e){if(typeof s!="object"||s===null)return!1;for(const n of e)if(n in s&&typeof s[n]=="function")return!0;return!1}function Yc(){}function Uu(s,e){return`${s} failed: ${e} argument `}/**
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
 */const ew=function(s){const e=[];let n=0;for(let i=0;i<s.length;i++){let a=s.charCodeAt(i);if(a>=55296&&a<=56319){const c=a-55296;i++,F(i<s.length,"Surrogate pair missing trail surrogate.");const d=s.charCodeAt(i)-56320;a=65536+(c<<10)+d}a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):a<65536?(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},La=function(s){let e=0;for(let n=0;n<s.length;n++){const i=s.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ot(s){return s&&s._delegate?s._delegate:s}class wr{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const mr="[DEFAULT]";/**
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
 */class tw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Oa;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&i.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e?.identifier),a=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(c){if(a)return null;throw c}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rw(e))try{this.getOrInitializeService({instanceIdentifier:mr})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:a});i.resolve(c)}catch{}}}}clearInstance(e=mr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=mr){return this.instances.has(e)}getOptions(e=mr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[c,d]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(c);i===f&&d.resolve(a)}return a}onInit(e,n){var i;const a=this.normalizeInstanceIdentifier(n),c=(i=this.onInitCallbacks.get(a))!==null&&i!==void 0?i:new Set;c.add(e),this.onInitCallbacks.set(a,c);const d=this.instances.get(a);return d&&e(d,a),()=>{c.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const a of i)try{a(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:nw(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=mr){return this.component?this.component.multipleInstances?e:mr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nw(s){return s===mr?void 0:s}function rw(s){return s.instantiationMode==="EAGER"}/**
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
 */class sw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ce;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(Ce||(Ce={}));const iw={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},ow=Ce.INFO,aw={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},lw=(s,e,...n)=>{if(e<s.logLevel)return;const i=new Date().toISOString(),a=aw[e];if(a)console[a](`[${i}]  ${s.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zu{constructor(e){this.name=e,this._logLevel=ow,this._logHandler=lw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?iw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const cw=(s,e)=>e.some(n=>s instanceof n);let Vp,$p;function uw(){return Vp||(Vp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dw(){return $p||($p=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mg=new WeakMap,du=new WeakMap,gg=new WeakMap,Qc=new WeakMap,Wu=new WeakMap;function hw(s){const e=new Promise((n,i)=>{const a=()=>{s.removeEventListener("success",c),s.removeEventListener("error",d)},c=()=>{n(Gn(s.result)),a()},d=()=>{i(s.error),a()};s.addEventListener("success",c),s.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&mg.set(n,s)}).catch(()=>{}),Wu.set(e,s),e}function fw(s){if(du.has(s))return;const e=new Promise((n,i)=>{const a=()=>{s.removeEventListener("complete",c),s.removeEventListener("error",d),s.removeEventListener("abort",d)},c=()=>{n(),a()},d=()=>{i(s.error||new DOMException("AbortError","AbortError")),a()};s.addEventListener("complete",c),s.addEventListener("error",d),s.addEventListener("abort",d)});du.set(s,e)}let hu={get(s,e,n){if(s instanceof IDBTransaction){if(e==="done")return du.get(s);if(e==="objectStoreNames")return s.objectStoreNames||gg.get(s);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gn(s[e])},set(s,e,n){return s[e]=n,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function pw(s){hu=s(hu)}function mw(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=s.call(Xc(this),e,...n);return gg.set(i,e.sort?e.sort():[e]),Gn(i)}:dw().includes(s)?function(...e){return s.apply(Xc(this),e),Gn(mg.get(this))}:function(...e){return Gn(s.apply(Xc(this),e))}}function gw(s){return typeof s=="function"?mw(s):(s instanceof IDBTransaction&&fw(s),cw(s,uw())?new Proxy(s,hu):s)}function Gn(s){if(s instanceof IDBRequest)return hw(s);if(Qc.has(s))return Qc.get(s);const e=gw(s);return e!==s&&(Qc.set(s,e),Wu.set(e,s)),e}const Xc=s=>Wu.get(s);function _w(s,e,{blocked:n,upgrade:i,blocking:a,terminated:c}={}){const d=indexedDB.open(s,e),f=Gn(d);return i&&d.addEventListener("upgradeneeded",m=>{i(Gn(d.result),m.oldVersion,m.newVersion,Gn(d.transaction),m)}),n&&d.addEventListener("blocked",m=>n(m.oldVersion,m.newVersion,m)),f.then(m=>{c&&m.addEventListener("close",()=>c()),a&&m.addEventListener("versionchange",_=>a(_.oldVersion,_.newVersion,_))}).catch(()=>{}),f}const yw=["get","getKey","getAll","getAllKeys","count"],vw=["put","add","delete","clear"],Jc=new Map;function Gp(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(Jc.get(e))return Jc.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,a=vw.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(a||yw.includes(n)))return;const c=async function(d,...f){const m=this.transaction(d,a?"readwrite":"readonly");let _=m.store;return i&&(_=_.index(f.shift())),(await Promise.all([_[n](...f),a&&m.done]))[0]};return Jc.set(e,c),c}pw(s=>({...s,get:(e,n,i)=>Gp(e,n)||s.get(e,n,i),has:(e,n)=>!!Gp(e,n)||s.has(e,n)}));/**
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
 */class ww{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xw(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function xw(s){const e=s.getComponent();return e?.type==="VERSION"}const fu="@firebase/app",qp="0.13.2";/**
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
 */const mn=new zu("@firebase/app"),kw="@firebase/app-compat",Ew="@firebase/analytics-compat",Cw="@firebase/analytics",Sw="@firebase/app-check-compat",Iw="@firebase/app-check",Nw="@firebase/auth",Tw="@firebase/auth-compat",Rw="@firebase/database",bw="@firebase/data-connect",Pw="@firebase/database-compat",Aw="@firebase/functions",Dw="@firebase/functions-compat",Ow="@firebase/installations",Lw="@firebase/installations-compat",Mw="@firebase/messaging",jw="@firebase/messaging-compat",Fw="@firebase/performance",Uw="@firebase/performance-compat",zw="@firebase/remote-config",Ww="@firebase/remote-config-compat",Bw="@firebase/storage",Hw="@firebase/storage-compat",Vw="@firebase/firestore",$w="@firebase/ai",Gw="@firebase/firestore-compat",qw="firebase",Kw="11.10.0";/**
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
 */const pu="[DEFAULT]",Yw={[fu]:"fire-core",[kw]:"fire-core-compat",[Cw]:"fire-analytics",[Ew]:"fire-analytics-compat",[Iw]:"fire-app-check",[Sw]:"fire-app-check-compat",[Nw]:"fire-auth",[Tw]:"fire-auth-compat",[Rw]:"fire-rtdb",[bw]:"fire-data-connect",[Pw]:"fire-rtdb-compat",[Aw]:"fire-fn",[Dw]:"fire-fn-compat",[Ow]:"fire-iid",[Lw]:"fire-iid-compat",[Mw]:"fire-fcm",[jw]:"fire-fcm-compat",[Fw]:"fire-perf",[Uw]:"fire-perf-compat",[zw]:"fire-rc",[Ww]:"fire-rc-compat",[Bw]:"fire-gcs",[Hw]:"fire-gcs-compat",[Vw]:"fire-fst",[Gw]:"fire-fst-compat",[$w]:"fire-vertex","fire-js":"fire-js",[qw]:"fire-js-all"};/**
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
 */const fa=new Map,Qw=new Map,mu=new Map;function Kp(s,e){try{s.container.addComponent(e)}catch(n){mn.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,n)}}function us(s){const e=s.name;if(mu.has(e))return mn.debug(`There were multiple attempts to register component ${e}.`),!1;mu.set(e,s);for(const n of fa.values())Kp(n,s);for(const n of Qw.values())Kp(n,s);return!0}function Bu(s,e){const n=s.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),s.container.getProvider(e)}function Bt(s){return s==null?!1:s.settings!==void 0}/**
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
 */const Xw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qn=new Oi("app","Firebase",Xw);/**
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
 */class Jw{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new wr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qn.create("app-deleted",{appName:this._name})}}/**
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
 */const ys=Kw;function _g(s,e={}){let n=s;typeof e!="object"&&(e={name:e});const i=Object.assign({name:pu,automaticDataCollectionEnabled:!0},e),a=i.name;if(typeof a!="string"||!a)throw qn.create("bad-app-name",{appName:String(a)});if(n||(n=cg()),!n)throw qn.create("no-options");const c=fa.get(a);if(c){if(vr(n,c.options)&&vr(i,c.config))return c;throw qn.create("duplicate-app",{appName:a})}const d=new sw(a);for(const m of mu.values())d.addComponent(m);const f=new Jw(n,i,d);return fa.set(a,f),f}function yg(s=pu){const e=fa.get(s);if(!e&&s===pu&&cg())return _g();if(!e)throw qn.create("no-app",{appName:s});return e}function Kn(s,e,n){var i;let a=(i=Yw[s])!==null&&i!==void 0?i:s;n&&(a+=`-${n}`);const c=a.match(/\s|\//),d=e.match(/\s|\//);if(c||d){const f=[`Unable to register library "${a}" with version "${e}":`];c&&f.push(`library name "${a}" contains illegal characters (whitespace or "/")`),c&&d&&f.push("and"),d&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mn.warn(f.join(" "));return}us(new wr(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
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
 */const Zw="firebase-heartbeat-database",ex=1,Ei="firebase-heartbeat-store";let Zc=null;function vg(){return Zc||(Zc=_w(Zw,ex,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(Ei)}catch(n){console.warn(n)}}}}).catch(s=>{throw qn.create("idb-open",{originalErrorMessage:s.message})})),Zc}async function tx(s){try{const n=(await vg()).transaction(Ei),i=await n.objectStore(Ei).get(wg(s));return await n.done,i}catch(e){if(e instanceof Zn)mn.warn(e.message);else{const n=qn.create("idb-get",{originalErrorMessage:e?.message});mn.warn(n.message)}}}async function Yp(s,e){try{const i=(await vg()).transaction(Ei,"readwrite");await i.objectStore(Ei).put(e,wg(s)),await i.done}catch(n){if(n instanceof Zn)mn.warn(n.message);else{const i=qn.create("idb-set",{originalErrorMessage:n?.message});mn.warn(i.message)}}}function wg(s){return`${s.name}!${s.options.appId}`}/**
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
 */const nx=1024,rx=30;class sx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ox(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=Qp();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(d=>d.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:a}),this._heartbeatsCache.heartbeats.length>rx){const d=ax(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){mn.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Qp(),{heartbeatsToSend:i,unsentEntries:a}=ix(this._heartbeatsCache.heartbeats),c=ua(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(n){return mn.warn(n),""}}}function Qp(){return new Date().toISOString().substring(0,10)}function ix(s,e=nx){const n=[];let i=s.slice();for(const a of s){const c=n.find(d=>d.agent===a.agent);if(c){if(c.dates.push(a.date),Xp(n)>e){c.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),Xp(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class ox{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return H0()?V0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await tx(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return Yp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return Yp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function Xp(s){return ua(JSON.stringify({version:2,heartbeats:s})).length}function ax(s){if(s.length===0)return-1;let e=0,n=s[0].date;for(let i=1;i<s.length;i++)s[i].date<n&&(n=s[i].date,e=i);return e}/**
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
 */function lx(s){us(new wr("platform-logger",e=>new ww(e),"PRIVATE")),us(new wr("heartbeat",e=>new sx(e),"PRIVATE")),Kn(fu,qp,s),Kn(fu,qp,"esm2017"),Kn("fire-js","")}lx("");function Hu(s,e){var n={};for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&e.indexOf(i)<0&&(n[i]=s[i]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,i=Object.getOwnPropertySymbols(s);a<i.length;a++)e.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(s,i[a])&&(n[i[a]]=s[i[a]]);return n}function xg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cx=xg,kg=new Oi("auth","Firebase",xg());/**
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
 */const pa=new zu("@firebase/auth");function ux(s,...e){pa.logLevel<=Ce.WARN&&pa.warn(`Auth (${ys}): ${s}`,...e)}function sa(s,...e){pa.logLevel<=Ce.ERROR&&pa.error(`Auth (${ys}): ${s}`,...e)}/**
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
 */function Kt(s,...e){throw Vu(s,...e)}function en(s,...e){return Vu(s,...e)}function Eg(s,e,n){const i=Object.assign(Object.assign({},cx()),{[e]:n});return new Oi("auth","Firebase",i).create(e,{appName:s.name})}function Yn(s){return Eg(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vu(s,...e){if(typeof s!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=s.name),s._errorFactory.create(n,...i)}return kg.create(s,...e)}function J(s,e,...n){if(!s)throw Vu(e,...n)}function dn(s){const e="INTERNAL ASSERTION FAILED: "+s;throw sa(e),new Error(e)}function gn(s,e){s||dn(e)}/**
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
 */function gu(){var s;return typeof self<"u"&&((s=self.location)===null||s===void 0?void 0:s.href)||""}function dx(){return Jp()==="http:"||Jp()==="https:"}function Jp(){var s;return typeof self<"u"&&((s=self.location)===null||s===void 0?void 0:s.protocol)||null}/**
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
 */function hx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dx()||z0()||"connection"in navigator)?navigator.onLine:!0}function fx(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
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
 */class Li{constructor(e,n){this.shortDelay=e,this.longDelay=n,gn(n>e,"Short delay should be less than long delay!"),this.isMobile=Fu()||fg()}get(){return hx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function $u(s,e){gn(s.emulator,"Emulator should always be set here");const{url:n}=s.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Cg{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const px={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const mx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],gx=new Li(3e4,6e4);function er(s,e){return s.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:s.tenantId}):e}async function wn(s,e,n,i,a={}){return Sg(s,a,async()=>{let c={},d={};i&&(e==="GET"?d=i:c={body:JSON.stringify(i)});const f=_s(Object.assign({key:s.config.apiKey},d)).slice(1),m=await s._getAdditionalHeaders();m["Content-Type"]="application/json",s.languageCode&&(m["X-Firebase-Locale"]=s.languageCode);const _=Object.assign({method:e,headers:m},c);return U0()||(_.referrerPolicy="no-referrer"),s.emulatorConfig&&gs(s.emulatorConfig.host)&&(_.credentials="include"),Cg.fetch()(await Ig(s,s.config.apiHost,n,f),_)})}async function Sg(s,e,n){s._canInitEmulator=!1;const i=Object.assign(Object.assign({},px),e);try{const a=new yx(s),c=await Promise.race([n(),a.promise]);a.clearNetworkTimeout();const d=await c.json();if("needConfirmation"in d)throw ta(s,"account-exists-with-different-credential",d);if(c.ok&&!("errorMessage"in d))return d;{const f=c.ok?d.errorMessage:d.error.message,[m,_]=f.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw ta(s,"credential-already-in-use",d);if(m==="EMAIL_EXISTS")throw ta(s,"email-already-in-use",d);if(m==="USER_DISABLED")throw ta(s,"user-disabled",d);const x=i[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw Eg(s,x,_);Kt(s,x)}}catch(a){if(a instanceof Zn)throw a;Kt(s,"network-request-failed",{message:String(a)})}}async function Ma(s,e,n,i,a={}){const c=await wn(s,e,n,i,a);return"mfaPendingCredential"in c&&Kt(s,"multi-factor-auth-required",{_serverResponse:c}),c}async function Ig(s,e,n,i){const a=`${e}${n}?${i}`,c=s,d=c.config.emulator?$u(s.config,a):`${s.config.apiScheme}://${a}`;return mx.includes(n)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(d).toString():d}function _x(s){switch(s){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(en(this.auth,"network-request-failed")),gx.get())})}}function ta(s,e,n){const i={appName:s.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const a=en(s,e,i);return a.customData._tokenResponse=n,a}function Zp(s){return s!==void 0&&s.enterprise!==void 0}class vx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return _x(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function wx(s,e){return wn(s,"GET","/v2/recaptchaConfig",er(s,e))}/**
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
 */async function xx(s,e){return wn(s,"POST","/v1/accounts:delete",e)}async function ma(s,e){return wn(s,"POST","/v1/accounts:lookup",e)}/**
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
 */function gi(s){if(s)try{const e=new Date(Number(s));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kx(s,e=!1){const n=Ot(s),i=await n.getIdToken(e),a=Gu(i);J(a&&a.exp&&a.auth_time&&a.iat,n.auth,"internal-error");const c=typeof a.firebase=="object"?a.firebase:void 0,d=c?.sign_in_provider;return{claims:a,token:i,authTime:gi(eu(a.auth_time)),issuedAtTime:gi(eu(a.iat)),expirationTime:gi(eu(a.exp)),signInProvider:d||null,signInSecondFactor:c?.sign_in_second_factor||null}}function eu(s){return Number(s)*1e3}function Gu(s){const[e,n,i]=s.split(".");if(e===void 0||n===void 0||i===void 0)return sa("JWT malformed, contained fewer than 3 sections"),null;try{const a=da(n);return a?JSON.parse(a):(sa("Failed to decode base64 JWT payload"),null)}catch(a){return sa("Caught error parsing JWT payload as JSON",a?.toString()),null}}function em(s){const e=Gu(s);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ci(s,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Zn&&Ex(i)&&s.auth.currentUser===s&&await s.auth.signOut(),i}}function Ex({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
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
 */class Cx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const a=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _u{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=gi(this.lastLoginAt),this.creationTime=gi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ga(s){var e;const n=s.auth,i=await s.getIdToken(),a=await Ci(s,ma(n,{idToken:i}));J(a?.users.length,n,"internal-error");const c=a.users[0];s._notifyReloadListener(c);const d=!((e=c.providerUserInfo)===null||e===void 0)&&e.length?Ng(c.providerUserInfo):[],f=Ix(s.providerData,d),m=s.isAnonymous,_=!(s.email&&c.passwordHash)&&!f?.length,x=m?_:!1,v={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:f,metadata:new _u(c.createdAt,c.lastLoginAt),isAnonymous:x};Object.assign(s,v)}async function Sx(s){const e=Ot(s);await ga(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ix(s,e){return[...s.filter(i=>!e.some(a=>a.providerId===i.providerId)),...e]}function Ng(s){return s.map(e=>{var{providerId:n}=e,i=Hu(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function Nx(s,e){const n=await Sg(s,{},async()=>{const i=_s({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:c}=s.config,d=await Ig(s,a,"/v1/token",`key=${c}`),f=await s._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:f,body:i};return s.emulatorConfig&&gs(s.emulatorConfig.host)&&(m.credentials="include"),Cg.fetch()(d,m)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Tx(s,e){return wn(s,"POST","/v2/accounts:revokeToken",er(s,e))}/**
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
 */class rs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):em(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=em(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:a,expiresIn:c}=await Nx(e,n);this.updateTokensAndExpiration(i,a,Number(c))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:a,expirationTime:c}=n,d=new rs;return i&&(J(typeof i=="string","internal-error",{appName:e}),d.refreshToken=i),a&&(J(typeof a=="string","internal-error",{appName:e}),d.accessToken=a),c&&(J(typeof c=="number","internal-error",{appName:e}),d.expirationTime=c),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new rs,this.toJSON())}_performRefresh(){return dn("not implemented")}}/**
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
 */function zn(s,e){J(typeof s=="string"||typeof s>"u","internal-error",{appName:e})}class Vt{constructor(e){var{uid:n,auth:i,stsTokenManager:a}=e,c=Hu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Cx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new _u(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(e){const n=await Ci(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kx(this,e)}reload(){return Sx(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Vt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await ga(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Bt(this.auth.app))return Promise.reject(Yn(this.auth));const e=await this.getIdToken();return await Ci(this,xx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,a,c,d,f,m,_,x;const v=(i=n.displayName)!==null&&i!==void 0?i:void 0,w=(a=n.email)!==null&&a!==void 0?a:void 0,T=(c=n.phoneNumber)!==null&&c!==void 0?c:void 0,R=(d=n.photoURL)!==null&&d!==void 0?d:void 0,M=(f=n.tenantId)!==null&&f!==void 0?f:void 0,O=(m=n._redirectEventId)!==null&&m!==void 0?m:void 0,re=(_=n.createdAt)!==null&&_!==void 0?_:void 0,D=(x=n.lastLoginAt)!==null&&x!==void 0?x:void 0,{uid:q,emailVerified:ne,isAnonymous:de,providerData:U,stsTokenManager:_e}=n;J(q&&_e,e,"internal-error");const xe=rs.fromJSON(this.name,_e);J(typeof q=="string",e,"internal-error"),zn(v,e.name),zn(w,e.name),J(typeof ne=="boolean",e,"internal-error"),J(typeof de=="boolean",e,"internal-error"),zn(T,e.name),zn(R,e.name),zn(M,e.name),zn(O,e.name),zn(re,e.name),zn(D,e.name);const Me=new Vt({uid:q,auth:e,email:w,emailVerified:ne,displayName:v,isAnonymous:de,photoURL:R,phoneNumber:T,tenantId:M,stsTokenManager:xe,createdAt:re,lastLoginAt:D});return U&&Array.isArray(U)&&(Me.providerData=U.map(ee=>Object.assign({},ee))),O&&(Me._redirectEventId=O),Me}static async _fromIdTokenResponse(e,n,i=!1){const a=new rs;a.updateFromServerResponse(n);const c=new Vt({uid:n.localId,auth:e,stsTokenManager:a,isAnonymous:i});return await ga(c),c}static async _fromGetAccountInfoResponse(e,n,i){const a=n.users[0];J(a.localId!==void 0,"internal-error");const c=a.providerUserInfo!==void 0?Ng(a.providerUserInfo):[],d=!(a.email&&a.passwordHash)&&!c?.length,f=new rs;f.updateFromIdToken(i);const m=new Vt({uid:a.localId,auth:e,stsTokenManager:f,isAnonymous:d}),_={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new _u(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!c?.length};return Object.assign(m,_),m}}/**
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
 */const tm=new Map;function hn(s){gn(s instanceof Function,"Expected a class definition");let e=tm.get(s);return e?(gn(e instanceof s,"Instance stored in cache mismatched with class"),e):(e=new s,tm.set(s,e),e)}/**
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
 */class Tg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Tg.type="NONE";const nm=Tg;/**
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
 */function ia(s,e,n){return`firebase:${s}:${e}:${n}`}class ss{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:a,name:c}=this.auth;this.fullUserKey=ia(this.userKey,a.apiKey,c),this.fullPersistenceKey=ia("persistence",a.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ma(this.auth,{idToken:e}).catch(()=>{});return n?Vt._fromGetAccountInfoResponse(this.auth,n,e):null}return Vt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new ss(hn(nm),e,i);const a=(await Promise.all(n.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let c=a[0]||hn(nm);const d=ia(i,e.config.apiKey,e.name);let f=null;for(const _ of n)try{const x=await _._get(d);if(x){let v;if(typeof x=="string"){const w=await ma(e,{idToken:x}).catch(()=>{});if(!w)break;v=await Vt._fromGetAccountInfoResponse(e,w,x)}else v=Vt._fromJSON(e,x);_!==c&&(f=v),c=_;break}}catch{}const m=a.filter(_=>_._shouldAllowMigration);return!c._shouldAllowMigration||!m.length?new ss(c,e,i):(c=m[0],f&&await c._set(d,f.toJSON()),await Promise.all(n.map(async _=>{if(_!==c)try{await _._remove(d)}catch{}})),new ss(c,e,i))}}/**
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
 */function rm(s){const e=s.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ag(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Og(e))return"Blackberry";if(Lg(e))return"Webos";if(bg(e))return"Safari";if((e.includes("chrome/")||Pg(e))&&!e.includes("edge/"))return"Chrome";if(Dg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=s.match(n);if(i?.length===2)return i[1]}return"Other"}function Rg(s=dt()){return/firefox\//i.test(s)}function bg(s=dt()){const e=s.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pg(s=dt()){return/crios\//i.test(s)}function Ag(s=dt()){return/iemobile/i.test(s)}function Dg(s=dt()){return/android/i.test(s)}function Og(s=dt()){return/blackberry/i.test(s)}function Lg(s=dt()){return/webos/i.test(s)}function qu(s=dt()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function Rx(s=dt()){var e;return qu(s)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function bx(){return W0()&&document.documentMode===10}function Mg(s=dt()){return qu(s)||Dg(s)||Lg(s)||Og(s)||/windows phone/i.test(s)||Ag(s)}/**
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
 */function jg(s,e=[]){let n;switch(s){case"Browser":n=rm(dt());break;case"Worker":n=`${rm(dt())}-${s}`;break;default:n=s}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ys}/${i}`}/**
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
 */class Px{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=c=>new Promise((d,f)=>{try{const m=e(c);d(m)}catch(m){f(m)}});i.onAbort=n,this.queue.push(i);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const a of n)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function Ax(s,e={}){return wn(s,"GET","/v2/passwordPolicy",er(s,e))}/**
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
 */const Dx=6;class Ox{constructor(e){var n,i,a,c;const d=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=d.minPasswordLength)!==null&&n!==void 0?n:Dx,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(c=e.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,a,c,d,f;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(n=m.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),m.isValid&&(m.isValid=(i=m.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),m.isValid&&(m.isValid=(a=m.containsLowercaseLetter)!==null&&a!==void 0?a:!0),m.isValid&&(m.isValid=(c=m.containsUppercaseLetter)!==null&&c!==void 0?c:!0),m.isValid&&(m.isValid=(d=m.containsNumericCharacter)!==null&&d!==void 0?d:!0),m.isValid&&(m.isValid=(f=m.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),m}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),a&&(n.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let a=0;a<e.length;a++)i=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,a,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
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
 */class Lx{constructor(e,n,i,a){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sm(this),this.idTokenSubscription=new sm(this),this.beforeStateQueue=new Px(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=hn(n)),this._initializationPromise=this.queue(async()=>{var i,a,c;if(!this._deleted&&(this.persistenceManager=await ss.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((c=this.currentUser)===null||c===void 0?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ma(this,{idToken:e}),i=await Vt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Bt(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(f,f))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let a=i,c=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,f=a?._redirectEventId,m=await this.tryRedirectSignIn(e);(!d||d===f)&&m?.user&&(a=m.user,c=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(a)}catch(d){a=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ga(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Bt(this.app))return Promise.reject(Yn(this));const n=e?Ot(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Bt(this.app)?Promise.reject(Yn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Bt(this.app)?Promise.reject(Yn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(hn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ax(this),n=new Ox(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Oi("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await Tx(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&hn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await ss.create(this,[hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,a){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let d=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(f,this,"internal-error"),f.then(()=>{d||c(this.currentUser)}),typeof n=="function"){const m=e.addObserver(n,i,a);return()=>{d=!0,m()}}else{const m=e.addObserver(n);return()=>{d=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const a=await this._getAppCheckToken();return a&&(n["X-Firebase-AppCheck"]=a),n}async _getAppCheckToken(){var e;if(Bt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&ux(`Error while retrieving App Check token: ${n.error}`),n?.token}}function Ir(s){return Ot(s)}class sm{constructor(e){this.auth=e,this.observer=null,this.addObserver=X0(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ja={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Mx(s){ja=s}function Fg(s){return ja.loadJS(s)}function jx(){return ja.recaptchaEnterpriseScript}function Fx(){return ja.gapiScript}function Ux(s){return`__${s}${Math.floor(Math.random()*1e6)}`}class zx{constructor(){this.enterprise=new Wx}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Wx{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Bx="recaptcha-enterprise",Ug="NO_RECAPTCHA";class Hx{constructor(e){this.type=Bx,this.auth=Ir(e)}async verify(e="verify",n=!1){async function i(c){if(!n){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(d,f)=>{wx(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const _=new vx(m);return c.tenantId==null?c._agentRecaptchaConfig=_:c._tenantRecaptchaConfigs[c.tenantId]=_,d(_.siteKey)}}).catch(m=>{f(m)})})}function a(c,d,f){const m=window.grecaptcha;Zp(m)?m.enterprise.ready(()=>{m.enterprise.execute(c,{action:e}).then(_=>{d(_)}).catch(()=>{d(Ug)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new zx().execute("siteKey",{action:"verify"}):new Promise((c,d)=>{i(this.auth).then(f=>{if(!n&&Zp(window.grecaptcha))a(f,c,d);else{if(typeof window>"u"){d(new Error("RecaptchaVerifier is only supported in browser"));return}let m=jx();m.length!==0&&(m+=f),Fg(m).then(()=>{a(f,c,d)}).catch(_=>{d(_)})}}).catch(f=>{d(f)})})}}async function im(s,e,n,i=!1,a=!1){const c=new Hx(s);let d;if(a)d=Ug;else try{d=await c.verify(n)}catch{d=await c.verify(n,!0)}const f=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const m=f.phoneEnrollmentInfo.phoneNumber,_=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:_,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const m=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return i?Object.assign(f,{captchaResp:d}):Object.assign(f,{captchaResponse:d}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function yu(s,e,n,i,a){var c;if(!((c=s._getRecaptchaConfig())===null||c===void 0)&&c.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const d=await im(s,e,n,n==="getOobCode");return i(s,d)}else return i(s,e).catch(async d=>{if(d.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await im(s,e,n,n==="getOobCode");return i(s,f)}else return Promise.reject(d)})}/**
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
 */function Vx(s,e){const n=Bu(s,"auth");if(n.isInitialized()){const a=n.getImmediate(),c=n.getOptions();if(vr(c,e??{}))return a;Kt(a,"already-initialized")}return n.initialize({options:e})}function $x(s,e){const n=e?.persistence||[],i=(Array.isArray(n)?n:[n]).map(hn);e?.errorMap&&s._updateErrorMap(e.errorMap),s._initializeWithPersistence(i,e?.popupRedirectResolver)}function Gx(s,e,n){const i=Ir(s);J(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const a=!1,c=zg(e),{host:d,port:f}=qx(e),m=f===null?"":`:${f}`,_={url:`${c}//${d}${m}/`},x=Object.freeze({host:d,port:f,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!i._canInitEmulator){J(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),J(vr(_,i.config.emulator)&&vr(x,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=_,i.emulatorConfig=x,i.settings.appVerificationDisabledForTesting=!0,gs(d)?(dg(`${c}//${d}${m}`),hg("Auth",!0)):Kx()}function zg(s){const e=s.indexOf(":");return e<0?"":s.substr(0,e+1)}function qx(s){const e=zg(s),n=/(\/\/)?([^?#/]+)/.exec(s.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){const c=a[1];return{host:c,port:om(i.substr(c.length+1))}}else{const[c,d]=i.split(":");return{host:c,port:om(d)}}}function om(s){if(!s)return null;const e=Number(s);return isNaN(e)?null:e}function Kx(){function s(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
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
 */class Ku{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dn("not implemented")}_getIdTokenResponse(e){return dn("not implemented")}_linkToIdToken(e,n){return dn("not implemented")}_getReauthenticationResolver(e){return dn("not implemented")}}async function Yx(s,e){return wn(s,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Qx(s,e){return Ma(s,"POST","/v1/accounts:signInWithPassword",er(s,e))}async function Xx(s,e){return wn(s,"POST","/v1/accounts:sendOobCode",er(s,e))}async function Jx(s,e){return Xx(s,e)}/**
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
 */async function Zx(s,e){return Ma(s,"POST","/v1/accounts:signInWithEmailLink",er(s,e))}async function e1(s,e){return Ma(s,"POST","/v1/accounts:signInWithEmailLink",er(s,e))}/**
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
 */class Si extends Ku{constructor(e,n,i,a=null){super("password",i),this._email=e,this._password=n,this._tenantId=a}static _fromEmailAndPassword(e,n){return new Si(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new Si(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yu(e,n,"signInWithPassword",Qx);case"emailLink":return Zx(e,{email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yu(e,i,"signUpPassword",Yx);case"emailLink":return e1(e,{idToken:n,email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function is(s,e){return Ma(s,"POST","/v1/accounts:signInWithIdp",er(s,e))}/**
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
 */const t1="http://localhost";class xr extends Ku{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:a}=n,c=Hu(n,["providerId","signInMethod"]);if(!i||!a)return null;const d=new xr(i,a);return d.idToken=c.idToken||void 0,d.accessToken=c.accessToken||void 0,d.secret=c.secret,d.nonce=c.nonce,d.pendingToken=c.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return is(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,is(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,is(e,n)}buildRequest(){const e={requestUri:t1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=_s(n)}return e}}/**
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
 */function n1(s){switch(s){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function r1(s){const e=fi(pi(s)).link,n=e?fi(pi(e)).deep_link_id:null,i=fi(pi(s)).deep_link_id;return(i?fi(pi(i)).link:null)||i||n||e||s}class Yu{constructor(e){var n,i,a,c,d,f;const m=fi(pi(e)),_=(n=m.apiKey)!==null&&n!==void 0?n:null,x=(i=m.oobCode)!==null&&i!==void 0?i:null,v=n1((a=m.mode)!==null&&a!==void 0?a:null);J(_&&x&&v,"argument-error"),this.apiKey=_,this.operation=v,this.code=x,this.continueUrl=(c=m.continueUrl)!==null&&c!==void 0?c:null,this.languageCode=(d=m.lang)!==null&&d!==void 0?d:null,this.tenantId=(f=m.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const n=r1(e);try{return new Yu(n)}catch{return null}}}/**
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
 */class vs{constructor(){this.providerId=vs.PROVIDER_ID}static credential(e,n){return Si._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=Yu.parseLink(n);return J(i,"argument-error"),Si._fromEmailAndCode(e,i.code,i.tenantId)}}vs.PROVIDER_ID="password";vs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Wg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Mi extends Wg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Wn extends Mi{constructor(){super("facebook.com")}static credential(e){return xr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wn.PROVIDER_ID="facebook.com";/**
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
 */class Bn extends Mi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Bn.credential(n,i)}catch{return null}}}Bn.GOOGLE_SIGN_IN_METHOD="google.com";Bn.PROVIDER_ID="google.com";/**
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
 */class Hn extends Mi{constructor(){super("github.com")}static credential(e){return xr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.GITHUB_SIGN_IN_METHOD="github.com";Hn.PROVIDER_ID="github.com";/**
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
 */class Vn extends Mi{constructor(){super("twitter.com")}static credential(e,n){return xr._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Vn.credential(n,i)}catch{return null}}}Vn.TWITTER_SIGN_IN_METHOD="twitter.com";Vn.PROVIDER_ID="twitter.com";/**
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
 */class ds{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,a=!1){const c=await Vt._fromIdTokenResponse(e,i,a),d=am(i);return new ds({user:c,providerId:d,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const a=am(i);return new ds({user:e,providerId:a,_tokenResponse:i,operationType:n})}}function am(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
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
 */class _a extends Zn{constructor(e,n,i,a){var c;super(n.code,n.message),this.operationType=i,this.user=a,Object.setPrototypeOf(this,_a.prototype),this.customData={appName:e.name,tenantId:(c=e.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,a){return new _a(e,n,i,a)}}function Bg(s,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(s):n._getIdTokenResponse(s)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?_a._fromErrorAndOperation(s,c,e,i):c})}async function s1(s,e,n=!1){const i=await Ci(s,e._linkToIdToken(s.auth,await s.getIdToken()),n);return ds._forOperation(s,"link",i)}/**
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
 */async function i1(s,e,n=!1){const{auth:i}=s;if(Bt(i.app))return Promise.reject(Yn(i));const a="reauthenticate";try{const c=await Ci(s,Bg(i,a,e,s),n);J(c.idToken,i,"internal-error");const d=Gu(c.idToken);J(d,i,"internal-error");const{sub:f}=d;return J(s.uid===f,i,"user-mismatch"),ds._forOperation(s,a,c)}catch(c){throw c?.code==="auth/user-not-found"&&Kt(i,"user-mismatch"),c}}/**
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
 */async function Hg(s,e,n=!1){if(Bt(s.app))return Promise.reject(Yn(s));const i="signIn",a=await Bg(s,i,e),c=await ds._fromIdTokenResponse(s,i,a);return n||await s._updateCurrentUser(c.user),c}async function o1(s,e){return Hg(Ir(s),e)}/**
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
 */async function a1(s){const e=Ir(s);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function l1(s,e,n){const i=Ir(s);await yu(i,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Jx)}function c1(s,e,n){return Bt(s.app)?Promise.reject(Yn(s)):o1(Ot(s),vs.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&a1(s),i})}function u1(s,e,n,i){return Ot(s).onIdTokenChanged(e,n,i)}function d1(s,e,n){return Ot(s).beforeAuthStateChanged(e,n)}const ya="__sak";/**
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
 */class Vg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ya,"1"),this.storage.removeItem(ya),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const h1=1e3,f1=10;class $g extends Vg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Mg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),a=this.localCache[n];i!==a&&e(n,a,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,f,m)=>{this.notifyListeners(d,m)});return}const i=e.key;n?this.detachListener():this.stopPolling();const a=()=>{const d=this.storage.getItem(i);!n&&this.localCache[i]===d||this.notifyListeners(i,d)},c=this.storage.getItem(i);bx()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,f1):a()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},h1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$g.type="LOCAL";const p1=$g;/**
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
 */class Gg extends Vg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Gg.type="SESSION";const qg=Gg;/**
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
 */function m1(s){return Promise.all(s.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Fa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(a=>a.isListeningto(e));if(n)return n;const i=new Fa(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:a,data:c}=n.data,d=this.handlersMap[a];if(!d?.size)return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:a});const f=Array.from(d).map(async _=>_(n.origin,c)),m=await m1(f);n.ports[0].postMessage({status:"done",eventId:i,eventType:a,response:m})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fa.receivers=[];/**
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
 */function Qu(s="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return s+n}/**
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
 */class g1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let c,d;return new Promise((f,m)=>{const _=Qu("",20);a.port1.start();const x=setTimeout(()=>{m(new Error("unsupported_event"))},i);d={messageChannel:a,onMessage(v){const w=v;if(w.data.eventId===_)switch(w.data.status){case"ack":clearTimeout(x),c=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),f(w.data.response);break;default:clearTimeout(x),clearTimeout(c),m(new Error("invalid_response"));break}}},this.handlers.add(d),a.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:_,data:n},[a.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
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
 */function tn(){return window}function _1(s){tn().location.href=s}/**
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
 */function Kg(){return typeof tn().WorkerGlobalScope<"u"&&typeof tn().importScripts=="function"}async function y1(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function v1(){var s;return((s=navigator?.serviceWorker)===null||s===void 0?void 0:s.controller)||null}function w1(){return Kg()?self:null}/**
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
 */const Yg="firebaseLocalStorageDb",x1=1,va="firebaseLocalStorage",Qg="fbase_key";class ji{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ua(s,e){return s.transaction([va],e?"readwrite":"readonly").objectStore(va)}function k1(){const s=indexedDB.deleteDatabase(Yg);return new ji(s).toPromise()}function vu(){const s=indexedDB.open(Yg,x1);return new Promise((e,n)=>{s.addEventListener("error",()=>{n(s.error)}),s.addEventListener("upgradeneeded",()=>{const i=s.result;try{i.createObjectStore(va,{keyPath:Qg})}catch(a){n(a)}}),s.addEventListener("success",async()=>{const i=s.result;i.objectStoreNames.contains(va)?e(i):(i.close(),await k1(),e(await vu()))})})}async function lm(s,e,n){const i=Ua(s,!0).put({[Qg]:e,value:n});return new ji(i).toPromise()}async function E1(s,e){const n=Ua(s,!1).get(e),i=await new ji(n).toPromise();return i===void 0?null:i.value}function cm(s,e){const n=Ua(s,!0).delete(e);return new ji(n).toPromise()}const C1=800,S1=3;class Xg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>S1)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fa._getInstance(w1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await y1(),!this.activeServiceWorker)return;this.sender=new g1(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||v1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vu();return await lm(e,ya,"1"),await cm(e,ya),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>lm(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>E1(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const c=Ua(a,!1).getAll();return new ji(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:a,value:c}of e)i.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(c)&&(this.notifyListeners(a,c),n.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!i.has(a)&&(this.notifyListeners(a,null),n.push(a));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),C1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xg.type="LOCAL";const I1=Xg;new Li(3e4,6e4);/**
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
 */function N1(s,e){return e?hn(e):(J(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
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
 */class Xu extends Ku{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return is(e,this._buildIdpRequest())}_linkToIdToken(e,n){return is(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return is(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function T1(s){return Hg(s.auth,new Xu(s),s.bypassAuthState)}function R1(s){const{auth:e,user:n}=s;return J(n,e,"internal-error"),i1(n,new Xu(s),s.bypassAuthState)}async function b1(s){const{auth:e,user:n}=s;return J(n,e,"internal-error"),s1(n,new Xu(s),s.bypassAuthState)}/**
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
 */class Jg{constructor(e,n,i,a,c=!1){this.auth=e,this.resolver=i,this.user=a,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:a,tenantId:c,error:d,type:f}=e;if(d){this.reject(d);return}const m={auth:this.auth,requestUri:n,sessionId:i,tenantId:c||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(m))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return T1;case"linkViaPopup":case"linkViaRedirect":return b1;case"reauthViaPopup":case"reauthViaRedirect":return R1;default:Kt(this.auth,"internal-error")}}resolve(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const P1=new Li(2e3,1e4);class es extends Jg{constructor(e,n,i,a,c){super(e,n,a,c),this.provider=i,this.authWindow=null,this.pollId=null,es.currentPopupAction&&es.currentPopupAction.cancel(),es.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){gn(this.filter.length===1,"Popup operations only handle one event");const e=Qu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,es.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,P1.get())};e()}}es.currentPopupAction=null;/**
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
 */const A1="pendingRedirect",oa=new Map;class D1 extends Jg{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=oa.get(this.auth._key());if(!e){try{const i=await O1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}oa.set(this.auth._key(),e)}return this.bypassAuthState||oa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function O1(s,e){const n=j1(e),i=M1(s);if(!await i._isAvailable())return!1;const a=await i._get(n)==="true";return await i._remove(n),a}function L1(s,e){oa.set(s._key(),e)}function M1(s){return hn(s._redirectPersistence)}function j1(s){return ia(A1,s.config.apiKey,s.name)}async function F1(s,e,n=!1){if(Bt(s.app))return Promise.reject(Yn(s));const i=Ir(s),a=N1(i,e),d=await new D1(i,a,n).execute();return d&&!n&&(delete d.user._redirectEventId,await i._persistUserIfCurrent(d.user),await i._setRedirectUser(null,e)),d}/**
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
 */const U1=10*60*1e3;class z1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!W1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Zg(e)){const a=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(en(this.auth,a))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=U1&&this.cachedEventUids.clear(),this.cachedEventUids.has(um(e))}saveEventToCache(e){this.cachedEventUids.add(um(e)),this.lastProcessedEventTime=Date.now()}}function um(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(e=>e).join("-")}function Zg({type:s,error:e}){return s==="unknown"&&e?.code==="auth/no-auth-event"}function W1(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zg(s);default:return!1}}/**
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
 */async function B1(s,e={}){return wn(s,"GET","/v1/projects",e)}/**
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
 */const H1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,V1=/^https?/;async function $1(s){if(s.config.emulator)return;const{authorizedDomains:e}=await B1(s);for(const n of e)try{if(G1(n))return}catch{}Kt(s,"unauthorized-domain")}function G1(s){const e=gu(),{protocol:n,hostname:i}=new URL(e);if(s.startsWith("chrome-extension://")){const d=new URL(s);return d.hostname===""&&i===""?n==="chrome-extension:"&&s.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===i}if(!V1.test(n))return!1;if(H1.test(s))return i===s;const a=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(i)}/**
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
 */const q1=new Li(3e4,6e4);function dm(){const s=tn().___jsl;if(s?.H){for(const e of Object.keys(s.H))if(s.H[e].r=s.H[e].r||[],s.H[e].L=s.H[e].L||[],s.H[e].r=[...s.H[e].L],s.CP)for(let n=0;n<s.CP.length;n++)s.CP[n]=null}}function K1(s){return new Promise((e,n)=>{var i,a,c;function d(){dm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dm(),n(en(s,"network-request-failed"))},timeout:q1.get()})}if(!((a=(i=tn().gapi)===null||i===void 0?void 0:i.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((c=tn().gapi)===null||c===void 0)&&c.load)d();else{const f=Ux("iframefcb");return tn()[f]=()=>{gapi.load?d():n(en(s,"network-request-failed"))},Fg(`${Fx()}?onload=${f}`).catch(m=>n(m))}}).catch(e=>{throw aa=null,e})}let aa=null;function Y1(s){return aa=aa||K1(s),aa}/**
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
 */const Q1=new Li(5e3,15e3),X1="__/auth/iframe",J1="emulator/auth/iframe",Z1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ek=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tk(s){const e=s.config;J(e.authDomain,s,"auth-domain-config-required");const n=e.emulator?$u(e,J1):`https://${s.config.authDomain}/${X1}`,i={apiKey:e.apiKey,appName:s.name,v:ys},a=ek.get(s.config.apiHost);a&&(i.eid=a);const c=s._getFrameworks();return c.length&&(i.fw=c.join(",")),`${n}?${_s(i).slice(1)}`}async function nk(s){const e=await Y1(s),n=tn().gapi;return J(n,s,"internal-error"),e.open({where:document.body,url:tk(s),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Z1,dontclear:!0},i=>new Promise(async(a,c)=>{await i.restyle({setHideOnLeave:!1});const d=en(s,"network-request-failed"),f=tn().setTimeout(()=>{c(d)},Q1.get());function m(){tn().clearTimeout(f),a(i)}i.ping(m).then(m,()=>{c(d)})}))}/**
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
 */const rk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sk=500,ik=600,ok="_blank",ak="http://localhost";class hm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lk(s,e,n,i=sk,a=ik){const c=Math.max((window.screen.availHeight-a)/2,0).toString(),d=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const m=Object.assign(Object.assign({},rk),{width:i.toString(),height:a.toString(),top:c,left:d}),_=dt().toLowerCase();n&&(f=Pg(_)?ok:n),Rg(_)&&(e=e||ak,m.scrollbars="yes");const x=Object.entries(m).reduce((w,[T,R])=>`${w}${T}=${R},`,"");if(Rx(_)&&f!=="_self")return ck(e||"",f),new hm(null);const v=window.open(e||"",f,x);J(v,s,"popup-blocked");try{v.focus()}catch{}return new hm(v)}function ck(s,e){const n=document.createElement("a");n.href=s,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const uk="__/auth/handler",dk="emulator/auth/handler",hk=encodeURIComponent("fac");async function fm(s,e,n,i,a,c){J(s.config.authDomain,s,"auth-domain-config-required"),J(s.config.apiKey,s,"invalid-api-key");const d={apiKey:s.config.apiKey,appName:s.name,authType:n,redirectUrl:i,v:ys,eventId:a};if(e instanceof Wg){e.setDefaultLanguage(s.languageCode),d.providerId=e.providerId||"",uu(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[x,v]of Object.entries({}))d[x]=v}if(e instanceof Mi){const x=e.getScopes().filter(v=>v!=="");x.length>0&&(d.scopes=x.join(","))}s.tenantId&&(d.tid=s.tenantId);const f=d;for(const x of Object.keys(f))f[x]===void 0&&delete f[x];const m=await s._getAppCheckToken(),_=m?`#${hk}=${encodeURIComponent(m)}`:"";return`${fk(s)}?${_s(f).slice(1)}${_}`}function fk({config:s}){return s.emulator?$u(s,dk):`https://${s.authDomain}/${uk}`}/**
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
 */const tu="webStorageSupport";class pk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qg,this._completeRedirectFn=F1,this._overrideRedirectResult=L1}async _openPopup(e,n,i,a){var c;gn((c=this.eventManagers[e._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const d=await fm(e,n,i,gu(),a);return lk(e,d,Qu())}async _openRedirect(e,n,i,a){await this._originValidation(e);const c=await fm(e,n,i,gu(),a);return _1(c),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:a,promise:c}=this.eventManagers[n];return a?Promise.resolve(a):(gn(c,"If manager is not set, promise should be"),c)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await nk(e),i=new z1(e);return n.register("authEvent",a=>(J(a?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(tu,{type:tu},a=>{var c;const d=(c=a?.[0])===null||c===void 0?void 0:c[tu];d!==void 0&&n(!!d),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Mg()||bg()||qu()}}const mk=pk;var pm="@firebase/auth",mm="1.10.8";/**
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
 */class gk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function _k(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yk(s){us(new wr("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:d,authDomain:f}=i.options;J(d&&!d.includes(":"),"invalid-api-key",{appName:i.name});const m={apiKey:d,authDomain:f,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jg(s)},_=new Lx(i,a,c,m);return $x(_,n),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),us(new wr("auth-internal",e=>{const n=Ir(e.getProvider("auth").getImmediate());return(i=>new gk(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kn(pm,mm,_k(s)),Kn(pm,mm,"esm2017")}/**
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
 */const vk=5*60,wk=ug("authIdTokenMaxAge")||vk;let gm=null;const xk=s=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>wk)return;const a=n?.token;gm!==a&&(gm=a,await fetch(s,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function kk(s=yg()){const e=Bu(s,"auth");if(e.isInitialized())return e.getImmediate();const n=Vx(s,{popupRedirectResolver:mk,persistence:[I1,p1,qg]}),i=ug("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(i,location.origin);if(location.origin===c.origin){const d=xk(c.toString());d1(n,d,()=>d(n.currentUser)),u1(n,f=>d(f))}}const a=lg("auth");return a&&Gx(n,`http://${a}`),n}function Ek(){var s,e;return(e=(s=document.getElementsByTagName("head"))===null||s===void 0?void 0:s[0])!==null&&e!==void 0?e:document}Mx({loadJS(s){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",s),i.onload=e,i.onerror=a=>{const c=en("internal-error");c.customData=a,n(c)},i.type="text/javascript",i.charset="UTF-8",Ek().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yk("Browser");var Ck="firebase",Sk="11.10.0";/**
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
 */Kn(Ck,Sk,"app");var _m={};const ym="@firebase/database",vm="1.0.20";/**
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
 */let e_="";function Ik(s){e_=s}/**
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
 */class Nk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Xe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ki(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Tk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return vn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const t_=function(s){try{if(typeof window<"u"&&typeof window[s]<"u"){const e=window[s];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Nk(e)}}catch{}return new Tk},_r=t_("localStorage"),Rk=t_("sessionStorage");/**
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
 */const os=new zu("@firebase/database"),bk=function(){let s=1;return function(){return s++}}(),n_=function(s){const e=ew(s),n=new Q0;n.update(e);const i=n.digest();return Mu.encodeByteArray(i)},Fi=function(...s){let e="";for(let n=0;n<s.length;n++){const i=s[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Fi.apply(null,i):typeof i=="object"?e+=Xe(i):e+=i,e+=" "}return e};let _i=null,wm=!0;const Pk=function(s,e){F(!0,"Can't turn on custom loggers persistently."),os.logLevel=Ce.VERBOSE,_i=os.log.bind(os)},at=function(...s){if(wm===!0&&(wm=!1,_i===null&&Rk.get("logging_enabled")===!0&&Pk()),_i){const e=Fi.apply(null,s);_i(e)}},Ui=function(s){return function(...e){at(s,...e)}},wu=function(...s){const e="FIREBASE INTERNAL ERROR: "+Fi(...s);os.error(e)},_n=function(...s){const e=`FIREBASE FATAL ERROR: ${Fi(...s)}`;throw os.error(e),new Error(e)},wt=function(...s){const e="FIREBASE WARNING: "+Fi(...s);os.warn(e)},Ak=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&wt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},r_=function(s){return typeof s=="number"&&(s!==s||s===Number.POSITIVE_INFINITY||s===Number.NEGATIVE_INFINITY)},Dk=function(s){if(document.readyState==="complete")s();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,s())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},hs="[MIN_NAME]",kr="[MAX_NAME]",ws=function(s,e){if(s===e)return 0;if(s===hs||e===kr)return-1;if(e===hs||s===kr)return 1;{const n=xm(s),i=xm(e);return n!==null?i!==null?n-i===0?s.length-e.length:n-i:-1:i!==null?1:s<e?-1:1}},Ok=function(s,e){return s===e?0:s<e?-1:1},ci=function(s,e){if(e&&s in e)return e[s];throw new Error("Missing required key ("+s+") in object: "+Xe(e))},Ju=function(s){if(typeof s!="object"||s===null)return Xe(s);const e=[];for(const i in s)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=Xe(e[i]),n+=":",n+=Ju(s[e[i]]);return n+="}",n},s_=function(s,e){const n=s.length;if(n<=e)return[s];const i=[];for(let a=0;a<n;a+=e)a+e>n?i.push(s.substring(a,n)):i.push(s.substring(a,a+e));return i};function xt(s,e){for(const n in s)s.hasOwnProperty(n)&&e(n,s[n])}const i_=function(s){F(!r_(s),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let a,c,d,f,m;s===0?(c=0,d=0,a=1/s===-1/0?1:0):(a=s<0,s=Math.abs(s),s>=Math.pow(2,1-i)?(f=Math.min(Math.floor(Math.log(s)/Math.LN2),i),c=f+i,d=Math.round(s*Math.pow(2,n-f)-Math.pow(2,n))):(c=0,d=Math.round(s/Math.pow(2,1-i-n))));const _=[];for(m=n;m;m-=1)_.push(d%2?1:0),d=Math.floor(d/2);for(m=e;m;m-=1)_.push(c%2?1:0),c=Math.floor(c/2);_.push(a?1:0),_.reverse();const x=_.join("");let v="";for(m=0;m<64;m+=8){let w=parseInt(x.substr(m,8),2).toString(16);w.length===1&&(w="0"+w),v=v+w}return v.toLowerCase()},Lk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Mk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function jk(s,e){let n="Unknown Error";s==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":s==="permission_denied"?n="Client doesn't have permission to access the desired data.":s==="unavailable"&&(n="The service is unavailable");const i=new Error(s+" at "+e._path.toString()+": "+n);return i.code=s.toUpperCase(),i}const Fk=new RegExp("^-?(0*)\\d{1,10}$"),Uk=-2147483648,zk=2147483647,xm=function(s){if(Fk.test(s)){const e=Number(s);if(e>=Uk&&e<=zk)return e}return null},xs=function(s){try{s()}catch(e){setTimeout(()=>{const n=e.stack||"";throw wt("Exception was thrown by user callback.",n),e},Math.floor(0))}},Wk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},yi=function(s,e){const n=setTimeout(s,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Bk{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Bt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){wt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Hk{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(at("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',wt(e)}}class la{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}la.OWNER="owner";/**
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
 */const Zu="5",o_="v",a_="s",l_="r",c_="f",u_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,d_="ls",h_="p",xu="ac",f_="websocket",p_="long_polling";/**
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
 */class m_{constructor(e,n,i,a,c=!1,d="",f=!1,m=!1,_=null){this.secure=n,this.namespace=i,this.webSocketOnly=a,this.nodeAdmin=c,this.persistenceKey=d,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=m,this.emulatorOptions=_,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=_r.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&_r.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Vk(s){return s.host!==s.internalHost||s.isCustomHost()||s.includeNamespaceInQueryParams}function g_(s,e,n){F(typeof e=="string","typeof type must == string"),F(typeof n=="object","typeof params must == object");let i;if(e===f_)i=(s.secure?"wss://":"ws://")+s.internalHost+"/.ws?";else if(e===p_)i=(s.secure?"https://":"http://")+s.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Vk(s)&&(n.ns=s.namespace);const a=[];return xt(n,(c,d)=>{a.push(c+"="+d)}),i+a.join("&")}/**
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
 */class $k{constructor(){this.counters_={}}incrementCounter(e,n=1){vn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return R0(this.counters_)}}/**
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
 */const nu={},ru={};function ed(s){const e=s.toString();return nu[e]||(nu[e]=new $k),nu[e]}function Gk(s,e){const n=s.toString();return ru[n]||(ru[n]=e()),ru[n]}/**
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
 */class qk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<i.length;++a)i[a]&&xs(()=>{this.onMessage_(i[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const km="start",Kk="close",Yk="pLPCommand",Qk="pRTLPCB",__="id",y_="pw",v_="ser",Xk="cb",Jk="seg",Zk="ts",eE="d",tE="dframe",w_=1870,x_=30,nE=w_-x_,rE=25e3,sE=3e4;class ts{constructor(e,n,i,a,c,d,f){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=a,this.authToken=c,this.transportSessionId=d,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ui(e),this.stats_=ed(n),this.urlFn=m=>(this.appCheckToken&&(m[xu]=this.appCheckToken),g_(n,p_,m))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new qk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(sE)),Dk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new td((...c)=>{const[d,f,m,_,x]=c;if(this.incrementIncomingBytes_(c),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,d===km)this.id=f,this.password=m;else if(d===Kk)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+d)},(...c)=>{const[d,f]=c;this.incrementIncomingBytes_(c),this.myPacketOrderer.handleResponse(d,f)},()=>{this.onClosed_()},this.urlFn);const i={};i[km]="t",i[v_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Xk]=this.scriptTagHolder.uniqueCallbackIdentifier),i[o_]=Zu,this.transportSessionId&&(i[a_]=this.transportSessionId),this.lastSessionId&&(i[d_]=this.lastSessionId),this.applicationId&&(i[h_]=this.applicationId),this.appCheckToken&&(i[xu]=this.appCheckToken),typeof location<"u"&&location.hostname&&u_.test(location.hostname)&&(i[l_]=c_);const a=this.urlFn(i);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ts.forceAllow_=!0}static forceDisallow(){ts.forceDisallow_=!0}static isAvailable(){return ts.forceAllow_?!0:!ts.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Lk()&&!Mk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=og(n),a=s_(i,nE);for(let c=0;c<a.length;c++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[c]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[tE]="t",i[__]=e,i[y_]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Xe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class td{constructor(e,n,i,a){this.onDisconnect=i,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=bk(),window[Yk+this.uniqueCallbackIdentifier]=e,window[Qk+this.uniqueCallbackIdentifier]=n,this.myIFrame=td.createIFrame_();let c="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(c='<script>document.domain="'+document.domain+'";<\/script>');const d="<html><body>"+c+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(d),this.myIFrame.doc.close()}catch(f){at("frame writing exception"),f.stack&&at(f.stack),at(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||at("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[__]=this.myID,e[y_]=this.myPW,e[v_]=this.currentSerial;let n=this.urlFn(e),i="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+x_+i.length<=w_;){const d=this.pendingSegs.shift();i=i+"&"+Jk+a+"="+d.seg+"&"+Zk+a+"="+d.ts+"&"+eE+a+"="+d.d,a++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},a=setTimeout(i,Math.floor(rE)),c=()=>{clearTimeout(a),i()};this.addTag(e,c)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const a=i.readyState;(!a||a==="loaded"||a==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{at("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const iE=16384,oE=45e3;let wa=null;typeof MozWebSocket<"u"?wa=MozWebSocket:typeof WebSocket<"u"&&(wa=WebSocket);class Ht{constructor(e,n,i,a,c,d,f){this.connId=e,this.applicationId=i,this.appCheckToken=a,this.authToken=c,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ui(this.connId),this.stats_=ed(n),this.connURL=Ht.connectionURL_(n,d,f,a,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,a,c){const d={};return d[o_]=Zu,typeof location<"u"&&location.hostname&&u_.test(location.hostname)&&(d[l_]=c_),n&&(d[a_]=n),i&&(d[d_]=i),a&&(d[xu]=a),c&&(d[h_]=c),g_(e,f_,d)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,_r.set("previous_websocket_failure",!0);try{let i;B0(),this.mySock=new wa(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const a=i.message||i.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const a=i.message||i.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){Ht.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&wa!==null&&!Ht.forceDisallow_}static previouslyFailed(){return _r.isInMemoryStorage||_r.get("previous_websocket_failure")===!0}markConnectionHealthy(){_r.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=ki(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(F(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=Xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=s_(n,iE);i.length>1&&this.sendString_(String(i.length));for(let a=0;a<i.length;a++)this.sendString_(i[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(oE))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ht.responsesRequiredToBeHealthy=2;Ht.healthyTimeout=3e4;/**
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
 */class Ii{static get ALL_TRANSPORTS(){return[ts,Ht]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Ht&&Ht.isAvailable();let i=n&&!Ht.previouslyFailed();if(e.webSocketOnly&&(n||wt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Ht];else{const a=this.transports_=[];for(const c of Ii.ALL_TRANSPORTS)c&&c.isAvailable()&&a.push(c);Ii.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ii.globalTransportInitialized_=!1;/**
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
 */const aE=6e4,lE=5e3,cE=10*1024,uE=100*1024,su="t",Em="d",dE="s",Cm="r",hE="e",Sm="o",Im="a",Nm="n",Tm="p",fE="h";class pE{constructor(e,n,i,a,c,d,f,m,_,x){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=a,this.authToken_=c,this.onMessage_=d,this.onReady_=f,this.onDisconnect_=m,this.onKill_=_,this.lastSessionId=x,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ui("c:"+this.id+":"),this.transportManager_=new Ii(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=yi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>uE?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>cE?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(su in e){const n=e[su];n===Im?this.upgradeIfSecondaryHealthy_():n===Cm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Sm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ci("t",e),i=ci("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Tm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Im,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Nm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ci("t",e),i=ci("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ci(su,e);if(Em in e){const i=e[Em];if(n===fE){const a=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(n===Nm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===dE?this.onConnectionShutdown_(i):n===Cm?this.onReset_(i):n===hE?wu("Server Error: "+i):n===Sm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):wu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Zu!==i&&wt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),yi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(aE))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):yi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(lE))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Tm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(_r.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class k_{put(e,n,i,a){}merge(e,n,i,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class E_{constructor(e){this.allowedEvents_=e,this.listeners_={},F(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let a=0;a<i.length;a++)i[a].callback.apply(i[a].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const a=this.getInitialEvent(e);a&&n.apply(i,a)}off(e,n,i){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let c=0;c<a.length;c++)if(a[c].callback===n&&(!i||i===a[c].context)){a.splice(c,1);return}}validateEventType_(e){F(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class xa extends E_{static getInstance(){return new xa}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Fu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return F(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Rm=32,bm=768;class Se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[i]=this.pieces_[a],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ve(){return new Se("")}function ae(s){return s.pieceNum_>=s.pieces_.length?null:s.pieces_[s.pieceNum_]}function Xn(s){return s.pieces_.length-s.pieceNum_}function Te(s){let e=s.pieceNum_;return e<s.pieces_.length&&e++,new Se(s.pieces_,e)}function C_(s){return s.pieceNum_<s.pieces_.length?s.pieces_[s.pieces_.length-1]:null}function mE(s){let e="";for(let n=s.pieceNum_;n<s.pieces_.length;n++)s.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(s.pieces_[n])));return e||"/"}function S_(s,e=0){return s.pieces_.slice(s.pieceNum_+e)}function I_(s){if(s.pieceNum_>=s.pieces_.length)return null;const e=[];for(let n=s.pieceNum_;n<s.pieces_.length-1;n++)e.push(s.pieces_[n]);return new Se(e,0)}function $e(s,e){const n=[];for(let i=s.pieceNum_;i<s.pieces_.length;i++)n.push(s.pieces_[i]);if(e instanceof Se)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let a=0;a<i.length;a++)i[a].length>0&&n.push(i[a])}return new Se(n,0)}function ue(s){return s.pieceNum_>=s.pieces_.length}function yt(s,e){const n=ae(s),i=ae(e);if(n===null)return e;if(n===i)return yt(Te(s),Te(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+s+")")}function nd(s,e){if(Xn(s)!==Xn(e))return!1;for(let n=s.pieceNum_,i=e.pieceNum_;n<=s.pieces_.length;n++,i++)if(s.pieces_[n]!==e.pieces_[i])return!1;return!0}function $t(s,e){let n=s.pieceNum_,i=e.pieceNum_;if(Xn(s)>Xn(e))return!1;for(;n<s.pieces_.length;){if(s.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class gE{constructor(e,n){this.errorPrefix_=n,this.parts_=S_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=La(this.parts_[i]);N_(this)}}function _E(s,e){s.parts_.length>0&&(s.byteLength_+=1),s.parts_.push(e),s.byteLength_+=La(e),N_(s)}function yE(s){const e=s.parts_.pop();s.byteLength_-=La(e),s.parts_.length>0&&(s.byteLength_-=1)}function N_(s){if(s.byteLength_>bm)throw new Error(s.errorPrefix_+"has a key path longer than "+bm+" bytes ("+s.byteLength_+").");if(s.parts_.length>Rm)throw new Error(s.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Rm+") or object contains a cycle "+gr(s))}function gr(s){return s.parts_.length===0?"":"in property '"+s.parts_.join(".")+"'"}/**
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
 */class rd extends E_{static getInstance(){return new rd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return F(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ui=1e3,vE=60*5*1e3,Pm=30*1e3,wE=1.3,xE=3e4,kE="server_kill",Am=3;class pn extends k_{constructor(e,n,i,a,c,d,f,m){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=a,this.onServerInfoUpdate_=c,this.authTokenProvider_=d,this.appCheckTokenProvider_=f,this.authOverride_=m,this.id=pn.nextPersistentConnectionId_++,this.log_=Ui("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ui,this.maxReconnectDelay_=vE,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,m)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");rd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&xa.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const a=++this.requestNumber_,c={r:a,a:e,b:n};this.log_(Xe(c)),F(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(c),i&&(this.requestCBHash_[a]=i)}get(e){this.initConnection_();const n=new Oa,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:d=>{const f=d.d;d.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const c=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(c),n.promise}listen(e,n,i,a){this.initConnection_();const c=e._queryIdentifier,d=e._path.toString();this.log_("Listen called for "+d+" "+c),this.listens.has(d)||this.listens.set(d,new Map),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),F(!this.listens.get(d).has(c),"listen() called twice for same path/queryId.");const f={onComplete:a,hashFn:n,query:e,tag:i};this.listens.get(d).set(c,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),a=n._queryIdentifier;this.log_("Listen on "+i+" for "+a);const c={p:i},d="q";e.tag&&(c.q=n._queryObject,c.t=e.tag),c.h=e.hashFn(),this.sendRequest(d,c,f=>{const m=f.d,_=f.s;pn.warnOnListenWarnings_(m,n),(this.listens.get(i)&&this.listens.get(i).get(a))===e&&(this.log_("listen response",f),_!=="ok"&&this.removeListen_(i,a),e.onComplete&&e.onComplete(_,m))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&vn(e,"w")){const i=cs(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const a='".indexOn": "'+n._queryParams.getIndex().toString()+'"',c=n._path.toString();wt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${c} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Y0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Pm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=K0(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,a=>{const c=a.s,d=a.d||"error";this.authToken_===e&&(c==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(c,d))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+a),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,a)&&this.connected_&&this.sendUnlisten_(i,a,e._queryObject,n)}sendUnlisten_(e,n,i,a){this.log_("Unlisten on "+e+" for "+n);const c={p:e},d="n";a&&(c.q=i,c.t=a),this.sendRequest(d,c)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,a){const c={p:n,d:i};this.log_("onDisconnect "+e,c),this.sendRequest(e,c,d=>{a&&setTimeout(()=>{a(d.s,d.d)},Math.floor(0))})}put(e,n,i,a){this.putInternal("p",e,n,i,a)}merge(e,n,i,a){this.putInternal("m",e,n,i,a)}putInternal(e,n,i,a,c){this.initConnection_();const d={p:n,d:i};c!==void 0&&(d.h=c),this.outstandingPuts_.push({action:e,request:d,onComplete:a}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,c=>{this.log_(n+" response",c),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(c.s,c.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const c=i.d;this.log_("reportStats","Error sending stats: "+c)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Xe(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):wu("Unrecognized action received from server: "+Xe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){F(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ui,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ui,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>xE&&(this.reconnectDelay_=ui),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*wE)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+pn.nextConnectionId_++,c=this.lastSessionId;let d=!1,f=null;const m=function(){f?f.close():(d=!0,i())},_=function(v){F(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(v)};this.realtime_={close:m,sendRequest:_};const x=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[v,w]=await Promise.all([this.authTokenProvider_.getToken(x),this.appCheckTokenProvider_.getToken(x)]);d?at("getToken() completed but was canceled"):(at("getToken() completed. Creating connection."),this.authToken_=v&&v.accessToken,this.appCheckToken_=w&&w.token,f=new pE(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,T=>{wt(T+" ("+this.repoInfo_.toString()+")"),this.interrupt(kE)},c))}catch(v){this.log_("Failed to get token: "+v),d||(this.repoInfo_.nodeAdmin&&wt(v),m())}}}interrupt(e){at("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){at("Resuming connection for reason: "+e),delete this.interruptReasons_[e],uu(this.interruptReasons_)&&(this.reconnectDelay_=ui,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(c=>Ju(c)).join("$"):i="default";const a=this.removeListen_(e,i);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,n){const i=new Se(e).toString();let a;if(this.listens.has(i)){const c=this.listens.get(i);a=c.get(n),c.delete(n),c.size===0&&this.listens.delete(i)}else a=void 0;return a}onAuthRevoked_(e,n){at("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Am&&(this.reconnectDelay_=Pm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){at("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Am&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+e_.replace(/\./g,"-")]=1,Fu()?e["framework.cordova"]=1:fg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=xa.getInstance().currentlyOnline();return uu(this.interruptReasons_)&&e}}pn.nextPersistentConnectionId_=0;pn.nextConnectionId_=0;/**
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
 */class le{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new le(e,n)}}/**
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
 */class za{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new le(hs,e),a=new le(hs,n);return this.compare(i,a)!==0}minPost(){return le.MIN}}/**
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
 */let na;class T_ extends za{static get __EMPTY_NODE(){return na}static set __EMPTY_NODE(e){na=e}compare(e,n){return ws(e.name,n.name)}isDefinedOn(e){throw ms("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return le.MIN}maxPost(){return new le(kr,na)}makePost(e,n){return F(typeof e=="string","KeyIndex indexValue must always be a string."),new le(e,na)}toString(){return".key"}}const as=new T_;/**
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
 */class ra{constructor(e,n,i,a,c=null){this.isReverse_=a,this.resultGenerator_=c,this.nodeStack_=[];let d=1;for(;!e.isEmpty();)if(e=e,d=n?i(e.key,n):1,a&&(d*=-1),d<0)this.isReverse_?e=e.left:e=e.right;else if(d===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Qe{constructor(e,n,i,a,c){this.key=e,this.value=n,this.color=i??Qe.RED,this.left=a??vt.EMPTY_NODE,this.right=c??vt.EMPTY_NODE}copy(e,n,i,a,c){return new Qe(e??this.key,n??this.value,i??this.color,a??this.left,c??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let a=this;const c=i(e,a.key);return c<0?a=a.copy(null,null,null,a.left.insert(e,n,i),null):c===0?a=a.copy(null,n,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,n,i)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return vt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,a;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return vt.EMPTY_NODE;a=i.right.min_(),i=i.copy(a.key,a.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Qe.RED=!0;Qe.BLACK=!1;class EE{copy(e,n,i,a,c){return this}insert(e,n,i){return new Qe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class vt{constructor(e,n=vt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new vt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Qe.BLACK,null,null))}remove(e){return new vt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Qe.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,a=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return a?a.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(a=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ra(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ra(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ra(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ra(this.root_,null,this.comparator_,!0,e)}}vt.EMPTY_NODE=new EE;/**
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
 */function CE(s,e){return ws(s.name,e.name)}function sd(s,e){return ws(s,e)}/**
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
 */let ku;function SE(s){ku=s}const R_=function(s){return typeof s=="number"?"number:"+i_(s):"string:"+s},b_=function(s){if(s.isLeafNode()){const e=s.val();F(typeof e=="string"||typeof e=="number"||typeof e=="object"&&vn(e,".sv"),"Priority must be a string or number.")}else F(s===ku||s.isEmpty(),"priority of unexpected type.");F(s===ku||s.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Dm;class Ye{static set __childrenNodeConstructor(e){Dm=e}static get __childrenNodeConstructor(){return Dm}constructor(e,n=Ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,F(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),b_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ye(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ue(e)?this:ae(e)===".priority"?this.priorityNode_:Ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=ae(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(F(i!==".priority"||Xn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(Te(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+R_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=i_(this.value_):e+=this.value_,this.lazyHash_=n_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ye.__childrenNodeConstructor?-1:(F(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,a=Ye.VALUE_TYPE_ORDER.indexOf(n),c=Ye.VALUE_TYPE_ORDER.indexOf(i);return F(a>=0,"Unknown leaf type: "+n),F(c>=0,"Unknown leaf type: "+i),a===c?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:c-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let P_,A_;function IE(s){P_=s}function NE(s){A_=s}class TE extends za{compare(e,n){const i=e.node.getPriority(),a=n.node.getPriority(),c=i.compareTo(a);return c===0?ws(e.name,n.name):c}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return le.MIN}maxPost(){return new le(kr,new Ye("[PRIORITY-POST]",A_))}makePost(e,n){const i=P_(e);return new le(n,new Ye("[PRIORITY-POST]",i))}toString(){return".priority"}}const Ue=new TE;/**
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
 */const RE=Math.log(2);class bE{constructor(e){const n=c=>parseInt(Math.log(c)/RE,10),i=c=>parseInt(Array(c+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const a=i(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ka=function(s,e,n,i){s.sort(e);const a=function(m,_){const x=_-m;let v,w;if(x===0)return null;if(x===1)return v=s[m],w=n?n(v):v,new Qe(w,v.node,Qe.BLACK,null,null);{const T=parseInt(x/2,10)+m,R=a(m,T),M=a(T+1,_);return v=s[T],w=n?n(v):v,new Qe(w,v.node,Qe.BLACK,R,M)}},c=function(m){let _=null,x=null,v=s.length;const w=function(R,M){const O=v-R,re=v;v-=R;const D=a(O+1,re),q=s[O],ne=n?n(q):q;T(new Qe(ne,q.node,M,null,D))},T=function(R){_?(_.left=R,_=R):(x=R,_=R)};for(let R=0;R<m.count;++R){const M=m.nextBitIsOne(),O=Math.pow(2,m.count-(R+1));M?w(O,Qe.BLACK):(w(O,Qe.BLACK),w(O,Qe.RED))}return x},d=new bE(s.length),f=c(d);return new vt(i||e,f)};/**
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
 */let iu;const Zr={};class fn{static get Default(){return F(Zr&&Ue,"ChildrenNode.ts has not been loaded"),iu=iu||new fn({".priority":Zr},{".priority":Ue}),iu}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=cs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof vt?n:null}hasIndex(e){return vn(this.indexSet_,e.toString())}addIndex(e,n){F(e!==as,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let a=!1;const c=n.getIterator(le.Wrap);let d=c.getNext();for(;d;)a=a||e.isDefinedOn(d.node),i.push(d),d=c.getNext();let f;a?f=ka(i,e.getCompare()):f=Zr;const m=e.toString(),_=Object.assign({},this.indexSet_);_[m]=e;const x=Object.assign({},this.indexes_);return x[m]=f,new fn(x,_)}addToIndexes(e,n){const i=ha(this.indexes_,(a,c)=>{const d=cs(this.indexSet_,c);if(F(d,"Missing index implementation for "+c),a===Zr)if(d.isDefinedOn(e.node)){const f=[],m=n.getIterator(le.Wrap);let _=m.getNext();for(;_;)_.name!==e.name&&f.push(_),_=m.getNext();return f.push(e),ka(f,d.getCompare())}else return Zr;else{const f=n.get(e.name);let m=a;return f&&(m=m.remove(new le(e.name,f))),m.insert(e,e.node)}});return new fn(i,this.indexSet_)}removeFromIndexes(e,n){const i=ha(this.indexes_,a=>{if(a===Zr)return a;{const c=n.get(e.name);return c?a.remove(new le(e.name,c)):a}});return new fn(i,this.indexSet_)}}/**
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
 */let di;class Z{static get EMPTY_NODE(){return di||(di=new Z(new vt(sd),null,fn.Default))}constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&b_(this.priorityNode_),this.children_.isEmpty()&&F(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||di}updatePriority(e){return this.children_.isEmpty()?this:new Z(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?di:n}}getChild(e){const n=ae(e);return n===null?this:this.getImmediateChild(n).getChild(Te(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(F(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new le(e,n);let a,c;n.isEmpty()?(a=this.children_.remove(e),c=this.indexMap_.removeFromIndexes(i,this.children_)):(a=this.children_.insert(e,n),c=this.indexMap_.addToIndexes(i,this.children_));const d=a.isEmpty()?di:this.priorityNode_;return new Z(a,d,c)}}updateChild(e,n){const i=ae(e);if(i===null)return n;{F(ae(e)!==".priority"||Xn(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(i).updateChild(Te(e),n);return this.updateImmediateChild(i,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,a=0,c=!0;if(this.forEachChild(Ue,(d,f)=>{n[d]=f.val(e),i++,c&&Z.INTEGER_REGEXP_.test(d)?a=Math.max(a,Number(d)):c=!1}),!e&&c&&a<2*i){const d=[];for(const f in n)d[f]=n[f];return d}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+R_(this.getPriority().val())+":"),this.forEachChild(Ue,(n,i)=>{const a=i.hash();a!==""&&(e+=":"+n+":"+a)}),this.lazyHash_=e===""?"":n_(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const a=this.resolveIndex_(i);if(a){const c=a.getPredecessorKey(new le(e,n));return c?c.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new le(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new le(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(a=>n(a.name,a.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,le.Wrap);let c=a.peek();for(;c!=null&&n.compare(c,e)<0;)a.getNext(),c=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,le.Wrap);let c=a.peek();for(;c!=null&&n.compare(c,e)>0;)a.getNext(),c=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===zi?-1:0}withIndex(e){if(e===as||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Z(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===as||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Ue),a=n.getIterator(Ue);let c=i.getNext(),d=a.getNext();for(;c&&d;){if(c.name!==d.name||!c.node.equals(d.node))return!1;c=i.getNext(),d=a.getNext()}return c===null&&d===null}else return!1;else return!1}}resolveIndex_(e){return e===as?null:this.indexMap_.get(e.toString())}}Z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class PE extends Z{constructor(){super(new vt(sd),Z.EMPTY_NODE,fn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Z.EMPTY_NODE}isEmpty(){return!1}}const zi=new PE;Object.defineProperties(le,{MIN:{value:new le(hs,Z.EMPTY_NODE)},MAX:{value:new le(kr,zi)}});T_.__EMPTY_NODE=Z.EMPTY_NODE;Ye.__childrenNodeConstructor=Z;SE(zi);NE(zi);/**
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
 */const AE=!0;function tt(s,e=null){if(s===null)return Z.EMPTY_NODE;if(typeof s=="object"&&".priority"in s&&(e=s[".priority"]),F(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof s=="object"&&".value"in s&&s[".value"]!==null&&(s=s[".value"]),typeof s!="object"||".sv"in s){const n=s;return new Ye(n,tt(e))}if(!(s instanceof Array)&&AE){const n=[];let i=!1;if(xt(s,(d,f)=>{if(d.substring(0,1)!=="."){const m=tt(f);m.isEmpty()||(i=i||!m.getPriority().isEmpty(),n.push(new le(d,m)))}}),n.length===0)return Z.EMPTY_NODE;const c=ka(n,CE,d=>d.name,sd);if(i){const d=ka(n,Ue.getCompare());return new Z(c,tt(e),new fn({".priority":d},{".priority":Ue}))}else return new Z(c,tt(e),fn.Default)}else{let n=Z.EMPTY_NODE;return xt(s,(i,a)=>{if(vn(s,i)&&i.substring(0,1)!=="."){const c=tt(a);(c.isLeafNode()||!c.isEmpty())&&(n=n.updateImmediateChild(i,c))}}),n.updatePriority(tt(e))}}IE(tt);/**
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
 */class DE extends za{constructor(e){super(),this.indexPath_=e,F(!ue(e)&&ae(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),a=this.extractChild(n.node),c=i.compareTo(a);return c===0?ws(e.name,n.name):c}makePost(e,n){const i=tt(e),a=Z.EMPTY_NODE.updateChild(this.indexPath_,i);return new le(n,a)}maxPost(){const e=Z.EMPTY_NODE.updateChild(this.indexPath_,zi);return new le(kr,e)}toString(){return S_(this.indexPath_,0).join("/")}}/**
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
 */class OE extends za{compare(e,n){const i=e.node.compareTo(n.node);return i===0?ws(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return le.MIN}maxPost(){return le.MAX}makePost(e,n){const i=tt(e);return new le(n,i)}toString(){return".value"}}const LE=new OE;/**
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
 */function D_(s){return{type:"value",snapshotNode:s}}function fs(s,e){return{type:"child_added",snapshotNode:e,childName:s}}function Ni(s,e){return{type:"child_removed",snapshotNode:e,childName:s}}function Ti(s,e,n){return{type:"child_changed",snapshotNode:e,childName:s,oldSnap:n}}function ME(s,e){return{type:"child_moved",snapshotNode:e,childName:s}}/**
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
 */class id{constructor(e){this.index_=e}updateChild(e,n,i,a,c,d){F(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(a).equals(i.getChild(a))&&f.isEmpty()===i.isEmpty()||(d!=null&&(i.isEmpty()?e.hasChild(n)?d.trackChildChange(Ni(n,f)):F(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?d.trackChildChange(fs(n,i)):d.trackChildChange(Ti(n,i,f))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(Ue,(a,c)=>{n.hasChild(a)||i.trackChildChange(Ni(a,c))}),n.isLeafNode()||n.forEachChild(Ue,(a,c)=>{if(e.hasChild(a)){const d=e.getImmediateChild(a);d.equals(c)||i.trackChildChange(Ti(a,c,d))}else i.trackChildChange(fs(a,c))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?Z.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ri{constructor(e){this.indexedFilter_=new id(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ri.getStartPost_(e),this.endPost_=Ri.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,a,c,d){return this.matches(new le(n,i))||(i=Z.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,a,c,d)}updateFullNode(e,n,i){n.isLeafNode()&&(n=Z.EMPTY_NODE);let a=n.withIndex(this.index_);a=a.updatePriority(Z.EMPTY_NODE);const c=this;return n.forEachChild(Ue,(d,f)=>{c.matches(new le(d,f))||(a=a.updateImmediateChild(d,Z.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,a,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class jE{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Ri(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,a,c,d){return this.rangedFilter_.matches(new le(n,i))||(i=Z.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,a,c,d):this.fullLimitUpdateChild_(e,n,i,c,d)}updateFullNode(e,n,i){let a;if(n.isLeafNode()||n.isEmpty())a=Z.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){a=Z.EMPTY_NODE.withIndex(this.index_);let c;this.reverse_?c=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):c=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let d=0;for(;c.hasNext()&&d<this.limit_;){const f=c.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))a=a.updateImmediateChild(f.name,f.node),d++;else break;else continue}}else{a=n.withIndex(this.index_),a=a.updatePriority(Z.EMPTY_NODE);let c;this.reverse_?c=a.getReverseIterator(this.index_):c=a.getIterator(this.index_);let d=0;for(;c.hasNext();){const f=c.getNext();d<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?d++:a=a.updateImmediateChild(f.name,Z.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,a,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,a,c){let d;if(this.reverse_){const v=this.index_.getCompare();d=(w,T)=>v(T,w)}else d=this.index_.getCompare();const f=e;F(f.numChildren()===this.limit_,"");const m=new le(n,i),_=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),x=this.rangedFilter_.matches(m);if(f.hasChild(n)){const v=f.getImmediateChild(n);let w=a.getChildAfterChild(this.index_,_,this.reverse_);for(;w!=null&&(w.name===n||f.hasChild(w.name));)w=a.getChildAfterChild(this.index_,w,this.reverse_);const T=w==null?1:d(w,m);if(x&&!i.isEmpty()&&T>=0)return c?.trackChildChange(Ti(n,i,v)),f.updateImmediateChild(n,i);{c?.trackChildChange(Ni(n,v));const M=f.updateImmediateChild(n,Z.EMPTY_NODE);return w!=null&&this.rangedFilter_.matches(w)?(c?.trackChildChange(fs(w.name,w.node)),M.updateImmediateChild(w.name,w.node)):M}}else return i.isEmpty()?e:x&&d(_,m)>=0?(c!=null&&(c.trackChildChange(Ni(_.name,_.node)),c.trackChildChange(fs(n,i))),f.updateImmediateChild(n,i).updateImmediateChild(_.name,Z.EMPTY_NODE)):e}}/**
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
 */class od{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ue}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return F(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return F(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:hs}hasEnd(){return this.endSet_}getIndexEndValue(){return F(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return F(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:kr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return F(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ue}copy(){const e=new od;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function FE(s){return s.loadsAllData()?new id(s.getIndex()):s.hasLimit()?new jE(s):new Ri(s)}function Om(s){const e={};if(s.isDefault())return e;let n;if(s.index_===Ue?n="$priority":s.index_===LE?n="$value":s.index_===as?n="$key":(F(s.index_ instanceof DE,"Unrecognized index type!"),n=s.index_.toString()),e.orderBy=Xe(n),s.startSet_){const i=s.startAfterSet_?"startAfter":"startAt";e[i]=Xe(s.indexStartValue_),s.startNameSet_&&(e[i]+=","+Xe(s.indexStartName_))}if(s.endSet_){const i=s.endBeforeSet_?"endBefore":"endAt";e[i]=Xe(s.indexEndValue_),s.endNameSet_&&(e[i]+=","+Xe(s.indexEndName_))}return s.limitSet_&&(s.isViewFromLeft()?e.limitToFirst=s.limit_:e.limitToLast=s.limit_),e}function Lm(s){const e={};if(s.startSet_&&(e.sp=s.indexStartValue_,s.startNameSet_&&(e.sn=s.indexStartName_),e.sin=!s.startAfterSet_),s.endSet_&&(e.ep=s.indexEndValue_,s.endNameSet_&&(e.en=s.indexEndName_),e.ein=!s.endBeforeSet_),s.limitSet_){e.l=s.limit_;let n=s.viewFrom_;n===""&&(s.isViewFromLeft()?n="l":n="r"),e.vf=n}return s.index_!==Ue&&(e.i=s.index_.toString()),e}/**
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
 */class Ea extends k_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(F(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,i,a){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=a,this.log_=Ui("p:rest:"),this.listens_={}}listen(e,n,i,a){const c=e._path.toString();this.log_("Listen called for "+c+" "+e._queryIdentifier);const d=Ea.getListenId_(e,i),f={};this.listens_[d]=f;const m=Om(e._queryParams);this.restRequest_(c+".json",m,(_,x)=>{let v=x;if(_===404&&(v=null,_=null),_===null&&this.onDataUpdate_(c,v,!1,i),cs(this.listens_,d)===f){let w;_?_===401?w="permission_denied":w="rest_error:"+_:w="ok",a(w,null)}})}unlisten(e,n){const i=Ea.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Om(e._queryParams),i=e._path.toString(),a=new Oa;return this.restRequest_(i+".json",n,(c,d)=>{let f=d;c===404&&(f=null,c=null),c===null?(this.onDataUpdate_(i,f,!1,null),a.resolve(f)):a.reject(new Error(f))}),a.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,c])=>{a&&a.accessToken&&(n.auth=a.accessToken),c&&c.token&&(n.ac=c.token);const d=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+_s(n);this.log_("Sending REST request for "+d);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(i&&f.readyState===4){this.log_("REST Response for "+d+" received. status:",f.status,"response:",f.responseText);let m=null;if(f.status>=200&&f.status<300){try{m=ki(f.responseText)}catch{wt("Failed to parse JSON response for "+d+": "+f.responseText)}i(null,m)}else f.status!==401&&f.status!==404&&wt("Got unsuccessful REST response for "+d+" Status: "+f.status),i(f.status);i=null}},f.open("GET",d,!0),f.send()})}}/**
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
 */class UE{constructor(){this.rootNode_=Z.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Ca(){return{value:null,children:new Map}}function O_(s,e,n){if(ue(e))s.value=n,s.children.clear();else if(s.value!==null)s.value=s.value.updateChild(e,n);else{const i=ae(e);s.children.has(i)||s.children.set(i,Ca());const a=s.children.get(i);e=Te(e),O_(a,e,n)}}function Eu(s,e,n){s.value!==null?n(e,s.value):zE(s,(i,a)=>{const c=new Se(e.toString()+"/"+i);Eu(a,c,n)})}function zE(s,e){s.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class WE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&xt(this.last_,(i,a)=>{n[i]=n[i]-a}),this.last_=e,n}}/**
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
 */const Mm=10*1e3,BE=30*1e3,HE=5*60*1e3;class VE{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new WE(e);const i=Mm+(BE-Mm)*Math.random();yi(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;xt(e,(a,c)=>{c>0&&vn(this.statsToReport_,a)&&(n[a]=c,i=!0)}),i&&this.server_.reportStats(n),yi(this.reportStats_.bind(this),Math.floor(Math.random()*2*HE))}}/**
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
 */var Gt;(function(s){s[s.OVERWRITE=0]="OVERWRITE",s[s.MERGE=1]="MERGE",s[s.ACK_USER_WRITE=2]="ACK_USER_WRITE",s[s.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Gt||(Gt={}));function L_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ad(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ld(s){return{fromUser:!1,fromServer:!0,queryId:s,tagged:!0}}/**
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
 */class Sa{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Gt.ACK_USER_WRITE,this.source=L_()}operationForChild(e){if(ue(this.path)){if(this.affectedTree.value!=null)return F(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Se(e));return new Sa(ve(),n,this.revert)}}else return F(ae(this.path)===e,"operationForChild called for unrelated child."),new Sa(Te(this.path),this.affectedTree,this.revert)}}/**
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
 */class bi{constructor(e,n){this.source=e,this.path=n,this.type=Gt.LISTEN_COMPLETE}operationForChild(e){return ue(this.path)?new bi(this.source,ve()):new bi(this.source,Te(this.path))}}/**
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
 */class Er{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Gt.OVERWRITE}operationForChild(e){return ue(this.path)?new Er(this.source,ve(),this.snap.getImmediateChild(e)):new Er(this.source,Te(this.path),this.snap)}}/**
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
 */class Pi{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Gt.MERGE}operationForChild(e){if(ue(this.path)){const n=this.children.subtree(new Se(e));return n.isEmpty()?null:n.value?new Er(this.source,ve(),n.value):new Pi(this.source,ve(),n)}else return F(ae(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Pi(this.source,Te(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Cr{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ue(e))return this.isFullyInitialized()&&!this.filtered_;const n=ae(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class $E{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function GE(s,e,n,i){const a=[],c=[];return e.forEach(d=>{d.type==="child_changed"&&s.index_.indexedValueChanged(d.oldSnap,d.snapshotNode)&&c.push(ME(d.childName,d.snapshotNode))}),hi(s,a,"child_removed",e,i,n),hi(s,a,"child_added",e,i,n),hi(s,a,"child_moved",c,i,n),hi(s,a,"child_changed",e,i,n),hi(s,a,"value",e,i,n),a}function hi(s,e,n,i,a,c){const d=i.filter(f=>f.type===n);d.sort((f,m)=>KE(s,f,m)),d.forEach(f=>{const m=qE(s,f,c);a.forEach(_=>{_.respondsTo(f.type)&&e.push(_.createEvent(m,s.query_))})})}function qE(s,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,s.index_)),e}function KE(s,e,n){if(e.childName==null||n.childName==null)throw ms("Should only compare child_ events.");const i=new le(e.childName,e.snapshotNode),a=new le(n.childName,n.snapshotNode);return s.index_.compare(i,a)}/**
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
 */function Wa(s,e){return{eventCache:s,serverCache:e}}function vi(s,e,n,i){return Wa(new Cr(e,n,i),s.serverCache)}function M_(s,e,n,i){return Wa(s.eventCache,new Cr(e,n,i))}function Cu(s){return s.eventCache.isFullyInitialized()?s.eventCache.getNode():null}function Sr(s){return s.serverCache.isFullyInitialized()?s.serverCache.getNode():null}/**
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
 */let ou;const YE=()=>(ou||(ou=new vt(Ok)),ou);class Pe{static fromObject(e){let n=new Pe(null);return xt(e,(i,a)=>{n=n.set(new Se(i),a)}),n}constructor(e,n=YE()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ve(),value:this.value};if(ue(e))return null;{const i=ae(e),a=this.children.get(i);if(a!==null){const c=a.findRootMostMatchingPathAndValue(Te(e),n);return c!=null?{path:$e(new Se(i),c.path),value:c.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ue(e))return this;{const n=ae(e),i=this.children.get(n);return i!==null?i.subtree(Te(e)):new Pe(null)}}set(e,n){if(ue(e))return new Pe(n,this.children);{const i=ae(e),c=(this.children.get(i)||new Pe(null)).set(Te(e),n),d=this.children.insert(i,c);return new Pe(this.value,d)}}remove(e){if(ue(e))return this.children.isEmpty()?new Pe(null):new Pe(null,this.children);{const n=ae(e),i=this.children.get(n);if(i){const a=i.remove(Te(e));let c;return a.isEmpty()?c=this.children.remove(n):c=this.children.insert(n,a),this.value===null&&c.isEmpty()?new Pe(null):new Pe(this.value,c)}else return this}}get(e){if(ue(e))return this.value;{const n=ae(e),i=this.children.get(n);return i?i.get(Te(e)):null}}setTree(e,n){if(ue(e))return n;{const i=ae(e),c=(this.children.get(i)||new Pe(null)).setTree(Te(e),n);let d;return c.isEmpty()?d=this.children.remove(i):d=this.children.insert(i,c),new Pe(this.value,d)}}fold(e){return this.fold_(ve(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((a,c)=>{i[a]=c.fold_($e(e,a),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,ve(),n)}findOnPath_(e,n,i){const a=this.value?i(n,this.value):!1;if(a)return a;if(ue(e))return null;{const c=ae(e),d=this.children.get(c);return d?d.findOnPath_(Te(e),$e(n,c),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ve(),n)}foreachOnPath_(e,n,i){if(ue(e))return this;{this.value&&i(n,this.value);const a=ae(e),c=this.children.get(a);return c?c.foreachOnPath_(Te(e),$e(n,a),i):new Pe(null)}}foreach(e){this.foreach_(ve(),e)}foreach_(e,n){this.children.inorderTraversal((i,a)=>{a.foreach_($e(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class qt{constructor(e){this.writeTree_=e}static empty(){return new qt(new Pe(null))}}function wi(s,e,n){if(ue(e))return new qt(new Pe(n));{const i=s.writeTree_.findRootMostValueAndPath(e);if(i!=null){const a=i.path;let c=i.value;const d=yt(a,e);return c=c.updateChild(d,n),new qt(s.writeTree_.set(a,c))}else{const a=new Pe(n),c=s.writeTree_.setTree(e,a);return new qt(c)}}}function jm(s,e,n){let i=s;return xt(n,(a,c)=>{i=wi(i,$e(e,a),c)}),i}function Fm(s,e){if(ue(e))return qt.empty();{const n=s.writeTree_.setTree(e,new Pe(null));return new qt(n)}}function Su(s,e){return Nr(s,e)!=null}function Nr(s,e){const n=s.writeTree_.findRootMostValueAndPath(e);return n!=null?s.writeTree_.get(n.path).getChild(yt(n.path,e)):null}function Um(s){const e=[],n=s.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ue,(i,a)=>{e.push(new le(i,a))}):s.writeTree_.children.inorderTraversal((i,a)=>{a.value!=null&&e.push(new le(i,a.value))}),e}function Qn(s,e){if(ue(e))return s;{const n=Nr(s,e);return n!=null?new qt(new Pe(n)):new qt(s.writeTree_.subtree(e))}}function Iu(s){return s.writeTree_.isEmpty()}function ps(s,e){return j_(ve(),s.writeTree_,e)}function j_(s,e,n){if(e.value!=null)return n.updateChild(s,e.value);{let i=null;return e.children.inorderTraversal((a,c)=>{a===".priority"?(F(c.value!==null,"Priority writes must always be leaf nodes"),i=c.value):n=j_($e(s,a),c,n)}),!n.getChild(s).isEmpty()&&i!==null&&(n=n.updateChild($e(s,".priority"),i)),n}}/**
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
 */function cd(s,e){return W_(e,s)}function QE(s,e,n,i,a){F(i>s.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),s.allWrites.push({path:e,snap:n,writeId:i,visible:a}),a&&(s.visibleWrites=wi(s.visibleWrites,e,n)),s.lastWriteId=i}function XE(s,e){for(let n=0;n<s.allWrites.length;n++){const i=s.allWrites[n];if(i.writeId===e)return i}return null}function JE(s,e){const n=s.allWrites.findIndex(f=>f.writeId===e);F(n>=0,"removeWrite called with nonexistent writeId.");const i=s.allWrites[n];s.allWrites.splice(n,1);let a=i.visible,c=!1,d=s.allWrites.length-1;for(;a&&d>=0;){const f=s.allWrites[d];f.visible&&(d>=n&&ZE(f,i.path)?a=!1:$t(i.path,f.path)&&(c=!0)),d--}if(a){if(c)return eC(s),!0;if(i.snap)s.visibleWrites=Fm(s.visibleWrites,i.path);else{const f=i.children;xt(f,m=>{s.visibleWrites=Fm(s.visibleWrites,$e(i.path,m))})}return!0}else return!1}function ZE(s,e){if(s.snap)return $t(s.path,e);for(const n in s.children)if(s.children.hasOwnProperty(n)&&$t($e(s.path,n),e))return!0;return!1}function eC(s){s.visibleWrites=F_(s.allWrites,tC,ve()),s.allWrites.length>0?s.lastWriteId=s.allWrites[s.allWrites.length-1].writeId:s.lastWriteId=-1}function tC(s){return s.visible}function F_(s,e,n){let i=qt.empty();for(let a=0;a<s.length;++a){const c=s[a];if(e(c)){const d=c.path;let f;if(c.snap)$t(n,d)?(f=yt(n,d),i=wi(i,f,c.snap)):$t(d,n)&&(f=yt(d,n),i=wi(i,ve(),c.snap.getChild(f)));else if(c.children){if($t(n,d))f=yt(n,d),i=jm(i,f,c.children);else if($t(d,n))if(f=yt(d,n),ue(f))i=jm(i,ve(),c.children);else{const m=cs(c.children,ae(f));if(m){const _=m.getChild(Te(f));i=wi(i,ve(),_)}}}else throw ms("WriteRecord should have .snap or .children")}}return i}function U_(s,e,n,i,a){if(!i&&!a){const c=Nr(s.visibleWrites,e);if(c!=null)return c;{const d=Qn(s.visibleWrites,e);if(Iu(d))return n;if(n==null&&!Su(d,ve()))return null;{const f=n||Z.EMPTY_NODE;return ps(d,f)}}}else{const c=Qn(s.visibleWrites,e);if(!a&&Iu(c))return n;if(!a&&n==null&&!Su(c,ve()))return null;{const d=function(_){return(_.visible||a)&&(!i||!~i.indexOf(_.writeId))&&($t(_.path,e)||$t(e,_.path))},f=F_(s.allWrites,d,e),m=n||Z.EMPTY_NODE;return ps(f,m)}}}function nC(s,e,n){let i=Z.EMPTY_NODE;const a=Nr(s.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(Ue,(c,d)=>{i=i.updateImmediateChild(c,d)}),i;if(n){const c=Qn(s.visibleWrites,e);return n.forEachChild(Ue,(d,f)=>{const m=ps(Qn(c,new Se(d)),f);i=i.updateImmediateChild(d,m)}),Um(c).forEach(d=>{i=i.updateImmediateChild(d.name,d.node)}),i}else{const c=Qn(s.visibleWrites,e);return Um(c).forEach(d=>{i=i.updateImmediateChild(d.name,d.node)}),i}}function rC(s,e,n,i,a){F(i||a,"Either existingEventSnap or existingServerSnap must exist");const c=$e(e,n);if(Su(s.visibleWrites,c))return null;{const d=Qn(s.visibleWrites,c);return Iu(d)?a.getChild(n):ps(d,a.getChild(n))}}function sC(s,e,n,i){const a=$e(e,n),c=Nr(s.visibleWrites,a);if(c!=null)return c;if(i.isCompleteForChild(n)){const d=Qn(s.visibleWrites,a);return ps(d,i.getNode().getImmediateChild(n))}else return null}function iC(s,e){return Nr(s.visibleWrites,e)}function oC(s,e,n,i,a,c,d){let f;const m=Qn(s.visibleWrites,e),_=Nr(m,ve());if(_!=null)f=_;else if(n!=null)f=ps(m,n);else return[];if(f=f.withIndex(d),!f.isEmpty()&&!f.isLeafNode()){const x=[],v=d.getCompare(),w=c?f.getReverseIteratorFrom(i,d):f.getIteratorFrom(i,d);let T=w.getNext();for(;T&&x.length<a;)v(T,i)!==0&&x.push(T),T=w.getNext();return x}else return[]}function aC(){return{visibleWrites:qt.empty(),allWrites:[],lastWriteId:-1}}function Ia(s,e,n,i){return U_(s.writeTree,s.treePath,e,n,i)}function ud(s,e){return nC(s.writeTree,s.treePath,e)}function zm(s,e,n,i){return rC(s.writeTree,s.treePath,e,n,i)}function Na(s,e){return iC(s.writeTree,$e(s.treePath,e))}function lC(s,e,n,i,a,c){return oC(s.writeTree,s.treePath,e,n,i,a,c)}function dd(s,e,n){return sC(s.writeTree,s.treePath,e,n)}function z_(s,e){return W_($e(s.treePath,e),s.writeTree)}function W_(s,e){return{treePath:s,writeTree:e}}/**
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
 */class cC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;F(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),F(i!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(i);if(a){const c=a.type;if(n==="child_added"&&c==="child_removed")this.changeMap.set(i,Ti(i,e.snapshotNode,a.snapshotNode));else if(n==="child_removed"&&c==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&c==="child_changed")this.changeMap.set(i,Ni(i,a.oldSnap));else if(n==="child_changed"&&c==="child_added")this.changeMap.set(i,fs(i,e.snapshotNode));else if(n==="child_changed"&&c==="child_changed")this.changeMap.set(i,Ti(i,e.snapshotNode,a.oldSnap));else throw ms("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class uC{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const B_=new uC;class hd{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Cr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return dd(this.writes_,e,i)}}getChildAfterChild(e,n,i){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Sr(this.viewCache_),c=lC(this.writes_,a,n,1,i,e);return c.length===0?null:c[0]}}/**
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
 */function dC(s){return{filter:s}}function hC(s,e){F(e.eventCache.getNode().isIndexed(s.filter.getIndex()),"Event snap not indexed"),F(e.serverCache.getNode().isIndexed(s.filter.getIndex()),"Server snap not indexed")}function fC(s,e,n,i,a){const c=new cC;let d,f;if(n.type===Gt.OVERWRITE){const _=n;_.source.fromUser?d=Nu(s,e,_.path,_.snap,i,a,c):(F(_.source.fromServer,"Unknown source."),f=_.source.tagged||e.serverCache.isFiltered()&&!ue(_.path),d=Ta(s,e,_.path,_.snap,i,a,f,c))}else if(n.type===Gt.MERGE){const _=n;_.source.fromUser?d=mC(s,e,_.path,_.children,i,a,c):(F(_.source.fromServer,"Unknown source."),f=_.source.tagged||e.serverCache.isFiltered(),d=Tu(s,e,_.path,_.children,i,a,f,c))}else if(n.type===Gt.ACK_USER_WRITE){const _=n;_.revert?d=yC(s,e,_.path,i,a,c):d=gC(s,e,_.path,_.affectedTree,i,a,c)}else if(n.type===Gt.LISTEN_COMPLETE)d=_C(s,e,n.path,i,c);else throw ms("Unknown operation type: "+n.type);const m=c.getChanges();return pC(e,d,m),{viewCache:d,changes:m}}function pC(s,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const a=i.getNode().isLeafNode()||i.getNode().isEmpty(),c=Cu(s);(n.length>0||!s.eventCache.isFullyInitialized()||a&&!i.getNode().equals(c)||!i.getNode().getPriority().equals(c.getPriority()))&&n.push(D_(Cu(e)))}}function H_(s,e,n,i,a,c){const d=e.eventCache;if(Na(i,n)!=null)return e;{let f,m;if(ue(n))if(F(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const _=Sr(e),x=_ instanceof Z?_:Z.EMPTY_NODE,v=ud(i,x);f=s.filter.updateFullNode(e.eventCache.getNode(),v,c)}else{const _=Ia(i,Sr(e));f=s.filter.updateFullNode(e.eventCache.getNode(),_,c)}else{const _=ae(n);if(_===".priority"){F(Xn(n)===1,"Can't have a priority with additional path components");const x=d.getNode();m=e.serverCache.getNode();const v=zm(i,n,x,m);v!=null?f=s.filter.updatePriority(x,v):f=d.getNode()}else{const x=Te(n);let v;if(d.isCompleteForChild(_)){m=e.serverCache.getNode();const w=zm(i,n,d.getNode(),m);w!=null?v=d.getNode().getImmediateChild(_).updateChild(x,w):v=d.getNode().getImmediateChild(_)}else v=dd(i,_,e.serverCache);v!=null?f=s.filter.updateChild(d.getNode(),_,v,x,a,c):f=d.getNode()}}return vi(e,f,d.isFullyInitialized()||ue(n),s.filter.filtersNodes())}}function Ta(s,e,n,i,a,c,d,f){const m=e.serverCache;let _;const x=d?s.filter:s.filter.getIndexedFilter();if(ue(n))_=x.updateFullNode(m.getNode(),i,null);else if(x.filtersNodes()&&!m.isFiltered()){const T=m.getNode().updateChild(n,i);_=x.updateFullNode(m.getNode(),T,null)}else{const T=ae(n);if(!m.isCompleteForPath(n)&&Xn(n)>1)return e;const R=Te(n),O=m.getNode().getImmediateChild(T).updateChild(R,i);T===".priority"?_=x.updatePriority(m.getNode(),O):_=x.updateChild(m.getNode(),T,O,R,B_,null)}const v=M_(e,_,m.isFullyInitialized()||ue(n),x.filtersNodes()),w=new hd(a,v,c);return H_(s,v,n,a,w,f)}function Nu(s,e,n,i,a,c,d){const f=e.eventCache;let m,_;const x=new hd(a,e,c);if(ue(n))_=s.filter.updateFullNode(e.eventCache.getNode(),i,d),m=vi(e,_,!0,s.filter.filtersNodes());else{const v=ae(n);if(v===".priority")_=s.filter.updatePriority(e.eventCache.getNode(),i),m=vi(e,_,f.isFullyInitialized(),f.isFiltered());else{const w=Te(n),T=f.getNode().getImmediateChild(v);let R;if(ue(w))R=i;else{const M=x.getCompleteChild(v);M!=null?C_(w)===".priority"&&M.getChild(I_(w)).isEmpty()?R=M:R=M.updateChild(w,i):R=Z.EMPTY_NODE}if(T.equals(R))m=e;else{const M=s.filter.updateChild(f.getNode(),v,R,w,x,d);m=vi(e,M,f.isFullyInitialized(),s.filter.filtersNodes())}}}return m}function Wm(s,e){return s.eventCache.isCompleteForChild(e)}function mC(s,e,n,i,a,c,d){let f=e;return i.foreach((m,_)=>{const x=$e(n,m);Wm(e,ae(x))&&(f=Nu(s,f,x,_,a,c,d))}),i.foreach((m,_)=>{const x=$e(n,m);Wm(e,ae(x))||(f=Nu(s,f,x,_,a,c,d))}),f}function Bm(s,e,n){return n.foreach((i,a)=>{e=e.updateChild(i,a)}),e}function Tu(s,e,n,i,a,c,d,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let m=e,_;ue(n)?_=i:_=new Pe(null).setTree(n,i);const x=e.serverCache.getNode();return _.children.inorderTraversal((v,w)=>{if(x.hasChild(v)){const T=e.serverCache.getNode().getImmediateChild(v),R=Bm(s,T,w);m=Ta(s,m,new Se(v),R,a,c,d,f)}}),_.children.inorderTraversal((v,w)=>{const T=!e.serverCache.isCompleteForChild(v)&&w.value===null;if(!x.hasChild(v)&&!T){const R=e.serverCache.getNode().getImmediateChild(v),M=Bm(s,R,w);m=Ta(s,m,new Se(v),M,a,c,d,f)}}),m}function gC(s,e,n,i,a,c,d){if(Na(a,n)!=null)return e;const f=e.serverCache.isFiltered(),m=e.serverCache;if(i.value!=null){if(ue(n)&&m.isFullyInitialized()||m.isCompleteForPath(n))return Ta(s,e,n,m.getNode().getChild(n),a,c,f,d);if(ue(n)){let _=new Pe(null);return m.getNode().forEachChild(as,(x,v)=>{_=_.set(new Se(x),v)}),Tu(s,e,n,_,a,c,f,d)}else return e}else{let _=new Pe(null);return i.foreach((x,v)=>{const w=$e(n,x);m.isCompleteForPath(w)&&(_=_.set(x,m.getNode().getChild(w)))}),Tu(s,e,n,_,a,c,f,d)}}function _C(s,e,n,i,a){const c=e.serverCache,d=M_(e,c.getNode(),c.isFullyInitialized()||ue(n),c.isFiltered());return H_(s,d,n,i,B_,a)}function yC(s,e,n,i,a,c){let d;if(Na(i,n)!=null)return e;{const f=new hd(i,e,a),m=e.eventCache.getNode();let _;if(ue(n)||ae(n)===".priority"){let x;if(e.serverCache.isFullyInitialized())x=Ia(i,Sr(e));else{const v=e.serverCache.getNode();F(v instanceof Z,"serverChildren would be complete if leaf node"),x=ud(i,v)}x=x,_=s.filter.updateFullNode(m,x,c)}else{const x=ae(n);let v=dd(i,x,e.serverCache);v==null&&e.serverCache.isCompleteForChild(x)&&(v=m.getImmediateChild(x)),v!=null?_=s.filter.updateChild(m,x,v,Te(n),f,c):e.eventCache.getNode().hasChild(x)?_=s.filter.updateChild(m,x,Z.EMPTY_NODE,Te(n),f,c):_=m,_.isEmpty()&&e.serverCache.isFullyInitialized()&&(d=Ia(i,Sr(e)),d.isLeafNode()&&(_=s.filter.updateFullNode(_,d,c)))}return d=e.serverCache.isFullyInitialized()||Na(i,ve())!=null,vi(e,_,d,s.filter.filtersNodes())}}/**
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
 */class vC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,a=new id(i.getIndex()),c=FE(i);this.processor_=dC(c);const d=n.serverCache,f=n.eventCache,m=a.updateFullNode(Z.EMPTY_NODE,d.getNode(),null),_=c.updateFullNode(Z.EMPTY_NODE,f.getNode(),null),x=new Cr(m,d.isFullyInitialized(),a.filtersNodes()),v=new Cr(_,f.isFullyInitialized(),c.filtersNodes());this.viewCache_=Wa(v,x),this.eventGenerator_=new $E(this.query_)}get query(){return this.query_}}function wC(s){return s.viewCache_.serverCache.getNode()}function xC(s,e){const n=Sr(s.viewCache_);return n&&(s.query._queryParams.loadsAllData()||!ue(e)&&!n.getImmediateChild(ae(e)).isEmpty())?n.getChild(e):null}function Hm(s){return s.eventRegistrations_.length===0}function kC(s,e){s.eventRegistrations_.push(e)}function Vm(s,e,n){const i=[];if(n){F(e==null,"A cancel should cancel all event registrations.");const a=s.query._path;s.eventRegistrations_.forEach(c=>{const d=c.createCancelEvent(n,a);d&&i.push(d)})}if(e){let a=[];for(let c=0;c<s.eventRegistrations_.length;++c){const d=s.eventRegistrations_[c];if(!d.matches(e))a.push(d);else if(e.hasAnyCallback()){a=a.concat(s.eventRegistrations_.slice(c+1));break}}s.eventRegistrations_=a}else s.eventRegistrations_=[];return i}function $m(s,e,n,i){e.type===Gt.MERGE&&e.source.queryId!==null&&(F(Sr(s.viewCache_),"We should always have a full cache before handling merges"),F(Cu(s.viewCache_),"Missing event cache, even though we have a server cache"));const a=s.viewCache_,c=fC(s.processor_,a,e,n,i);return hC(s.processor_,c.viewCache),F(c.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),s.viewCache_=c.viewCache,V_(s,c.changes,c.viewCache.eventCache.getNode(),null)}function EC(s,e){const n=s.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ue,(c,d)=>{i.push(fs(c,d))}),n.isFullyInitialized()&&i.push(D_(n.getNode())),V_(s,i,n.getNode(),e)}function V_(s,e,n,i){const a=i?[i]:s.eventRegistrations_;return GE(s.eventGenerator_,e,n,a)}/**
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
 */let Ra;class CC{constructor(){this.views=new Map}}function SC(s){F(!Ra,"__referenceConstructor has already been defined"),Ra=s}function IC(){return F(Ra,"Reference.ts has not been loaded"),Ra}function NC(s){return s.views.size===0}function fd(s,e,n,i){const a=e.source.queryId;if(a!==null){const c=s.views.get(a);return F(c!=null,"SyncTree gave us an op for an invalid query."),$m(c,e,n,i)}else{let c=[];for(const d of s.views.values())c=c.concat($m(d,e,n,i));return c}}function TC(s,e,n,i,a){const c=e._queryIdentifier,d=s.views.get(c);if(!d){let f=Ia(n,a?i:null),m=!1;f?m=!0:i instanceof Z?(f=ud(n,i),m=!1):(f=Z.EMPTY_NODE,m=!1);const _=Wa(new Cr(f,m,!1),new Cr(i,a,!1));return new vC(e,_)}return d}function RC(s,e,n,i,a,c){const d=TC(s,e,i,a,c);return s.views.has(e._queryIdentifier)||s.views.set(e._queryIdentifier,d),kC(d,n),EC(d,n)}function bC(s,e,n,i){const a=e._queryIdentifier,c=[];let d=[];const f=Jn(s);if(a==="default")for(const[m,_]of s.views.entries())d=d.concat(Vm(_,n,i)),Hm(_)&&(s.views.delete(m),_.query._queryParams.loadsAllData()||c.push(_.query));else{const m=s.views.get(a);m&&(d=d.concat(Vm(m,n,i)),Hm(m)&&(s.views.delete(a),m.query._queryParams.loadsAllData()||c.push(m.query)))}return f&&!Jn(s)&&c.push(new(IC())(e._repo,e._path)),{removed:c,events:d}}function $_(s){const e=[];for(const n of s.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ls(s,e){let n=null;for(const i of s.views.values())n=n||xC(i,e);return n}function G_(s,e){if(e._queryParams.loadsAllData())return Ba(s);{const i=e._queryIdentifier;return s.views.get(i)}}function q_(s,e){return G_(s,e)!=null}function Jn(s){return Ba(s)!=null}function Ba(s){for(const e of s.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let ba;function PC(s){F(!ba,"__referenceConstructor has already been defined"),ba=s}function AC(){return F(ba,"Reference.ts has not been loaded"),ba}let DC=1;class Gm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Pe(null),this.pendingWriteTree_=aC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function K_(s,e,n,i,a){return QE(s.pendingWriteTree_,e,n,i,a),a?Wi(s,new Er(L_(),e,n)):[]}function yr(s,e,n=!1){const i=XE(s.pendingWriteTree_,e);if(JE(s.pendingWriteTree_,e)){let c=new Pe(null);return i.snap!=null?c=c.set(ve(),!0):xt(i.children,d=>{c=c.set(new Se(d),!0)}),Wi(s,new Sa(i.path,c,n))}else return[]}function Ha(s,e,n){return Wi(s,new Er(ad(),e,n))}function OC(s,e,n){const i=Pe.fromObject(n);return Wi(s,new Pi(ad(),e,i))}function LC(s,e){return Wi(s,new bi(ad(),e))}function MC(s,e,n){const i=md(s,n);if(i){const a=gd(i),c=a.path,d=a.queryId,f=yt(c,e),m=new bi(ld(d),f);return _d(s,c,m)}else return[]}function Ru(s,e,n,i,a=!1){const c=e._path,d=s.syncPointTree_.get(c);let f=[];if(d&&(e._queryIdentifier==="default"||q_(d,e))){const m=bC(d,e,n,i);NC(d)&&(s.syncPointTree_=s.syncPointTree_.remove(c));const _=m.removed;if(f=m.events,!a){const x=_.findIndex(w=>w._queryParams.loadsAllData())!==-1,v=s.syncPointTree_.findOnPath(c,(w,T)=>Jn(T));if(x&&!v){const w=s.syncPointTree_.subtree(c);if(!w.isEmpty()){const T=UC(w);for(let R=0;R<T.length;++R){const M=T[R],O=M.query,re=X_(s,M);s.listenProvider_.startListening(xi(O),Pa(s,O),re.hashFn,re.onComplete)}}}!v&&_.length>0&&!i&&(x?s.listenProvider_.stopListening(xi(e),null):_.forEach(w=>{const T=s.queryToTagMap.get(Va(w));s.listenProvider_.stopListening(xi(w),T)}))}zC(s,_)}return f}function jC(s,e,n,i){const a=md(s,i);if(a!=null){const c=gd(a),d=c.path,f=c.queryId,m=yt(d,e),_=new Er(ld(f),m,n);return _d(s,d,_)}else return[]}function FC(s,e,n,i){const a=md(s,i);if(a){const c=gd(a),d=c.path,f=c.queryId,m=yt(d,e),_=Pe.fromObject(n),x=new Pi(ld(f),m,_);return _d(s,d,x)}else return[]}function qm(s,e,n,i=!1){const a=e._path;let c=null,d=!1;s.syncPointTree_.foreachOnPath(a,(w,T)=>{const R=yt(w,a);c=c||ls(T,R),d=d||Jn(T)});let f=s.syncPointTree_.get(a);f?(d=d||Jn(f),c=c||ls(f,ve())):(f=new CC,s.syncPointTree_=s.syncPointTree_.set(a,f));let m;c!=null?m=!0:(m=!1,c=Z.EMPTY_NODE,s.syncPointTree_.subtree(a).foreachChild((T,R)=>{const M=ls(R,ve());M&&(c=c.updateImmediateChild(T,M))}));const _=q_(f,e);if(!_&&!e._queryParams.loadsAllData()){const w=Va(e);F(!s.queryToTagMap.has(w),"View does not exist, but we have a tag");const T=WC();s.queryToTagMap.set(w,T),s.tagToQueryMap.set(T,w)}const x=cd(s.pendingWriteTree_,a);let v=RC(f,e,n,x,c,m);if(!_&&!d&&!i){const w=G_(f,e);v=v.concat(BC(s,e,w))}return v}function pd(s,e,n){const a=s.pendingWriteTree_,c=s.syncPointTree_.findOnPath(e,(d,f)=>{const m=yt(d,e),_=ls(f,m);if(_)return _});return U_(a,e,c,n,!0)}function Wi(s,e){return Y_(e,s.syncPointTree_,null,cd(s.pendingWriteTree_,ve()))}function Y_(s,e,n,i){if(ue(s.path))return Q_(s,e,n,i);{const a=e.get(ve());n==null&&a!=null&&(n=ls(a,ve()));let c=[];const d=ae(s.path),f=s.operationForChild(d),m=e.children.get(d);if(m&&f){const _=n?n.getImmediateChild(d):null,x=z_(i,d);c=c.concat(Y_(f,m,_,x))}return a&&(c=c.concat(fd(a,s,i,n))),c}}function Q_(s,e,n,i){const a=e.get(ve());n==null&&a!=null&&(n=ls(a,ve()));let c=[];return e.children.inorderTraversal((d,f)=>{const m=n?n.getImmediateChild(d):null,_=z_(i,d),x=s.operationForChild(d);x&&(c=c.concat(Q_(x,f,m,_)))}),a&&(c=c.concat(fd(a,s,i,n))),c}function X_(s,e){const n=e.query,i=Pa(s,n);return{hashFn:()=>(wC(e)||Z.EMPTY_NODE).hash(),onComplete:a=>{if(a==="ok")return i?MC(s,n._path,i):LC(s,n._path);{const c=jk(a,n);return Ru(s,n,null,c)}}}}function Pa(s,e){const n=Va(e);return s.queryToTagMap.get(n)}function Va(s){return s._path.toString()+"$"+s._queryIdentifier}function md(s,e){return s.tagToQueryMap.get(e)}function gd(s){const e=s.indexOf("$");return F(e!==-1&&e<s.length-1,"Bad queryKey."),{queryId:s.substr(e+1),path:new Se(s.substr(0,e))}}function _d(s,e,n){const i=s.syncPointTree_.get(e);F(i,"Missing sync point for query tag that we're tracking");const a=cd(s.pendingWriteTree_,e);return fd(i,n,a,null)}function UC(s){return s.fold((e,n,i)=>{if(n&&Jn(n))return[Ba(n)];{let a=[];return n&&(a=$_(n)),xt(i,(c,d)=>{a=a.concat(d)}),a}})}function xi(s){return s._queryParams.loadsAllData()&&!s._queryParams.isDefault()?new(AC())(s._repo,s._path):s}function zC(s,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const a=Va(i),c=s.queryToTagMap.get(a);s.queryToTagMap.delete(a),s.tagToQueryMap.delete(c)}}}function WC(){return DC++}function BC(s,e,n){const i=e._path,a=Pa(s,e),c=X_(s,n),d=s.listenProvider_.startListening(xi(e),a,c.hashFn,c.onComplete),f=s.syncPointTree_.subtree(i);if(a)F(!Jn(f.value),"If we're adding a query, it shouldn't be shadowed");else{const m=f.fold((_,x,v)=>{if(!ue(_)&&x&&Jn(x))return[Ba(x).query];{let w=[];return x&&(w=w.concat($_(x).map(T=>T.query))),xt(v,(T,R)=>{w=w.concat(R)}),w}});for(let _=0;_<m.length;++_){const x=m[_];s.listenProvider_.stopListening(xi(x),Pa(s,x))}}return d}/**
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
 */class yd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new yd(n)}node(){return this.node_}}class vd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=$e(this.path_,e);return new vd(this.syncTree_,n)}node(){return pd(this.syncTree_,this.path_)}}const HC=function(s){return s=s||{},s.timestamp=s.timestamp||new Date().getTime(),s},Km=function(s,e,n){if(!s||typeof s!="object")return s;if(F(".sv"in s,"Unexpected leaf node or priority contents"),typeof s[".sv"]=="string")return VC(s[".sv"],e,n);if(typeof s[".sv"]=="object")return $C(s[".sv"],e);F(!1,"Unexpected server value: "+JSON.stringify(s,null,2))},VC=function(s,e,n){switch(s){case"timestamp":return n.timestamp;default:F(!1,"Unexpected server value: "+s)}},$C=function(s,e,n){s.hasOwnProperty("increment")||F(!1,"Unexpected server value: "+JSON.stringify(s,null,2));const i=s.increment;typeof i!="number"&&F(!1,"Unexpected increment value: "+i);const a=e.node();if(F(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return i;const d=a.getValue();return typeof d!="number"?i:d+i},GC=function(s,e,n,i){return wd(e,new vd(n,s),i)},J_=function(s,e,n){return wd(s,new yd(e),n)};function wd(s,e,n){const i=s.getPriority().val(),a=Km(i,e.getImmediateChild(".priority"),n);let c;if(s.isLeafNode()){const d=s,f=Km(d.getValue(),e,n);return f!==d.getValue()||a!==d.getPriority().val()?new Ye(f,tt(a)):s}else{const d=s;return c=d,a!==d.getPriority().val()&&(c=c.updatePriority(new Ye(a))),d.forEachChild(Ue,(f,m)=>{const _=wd(m,e.getImmediateChild(f),n);_!==m&&(c=c.updateImmediateChild(f,_))}),c}}/**
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
 */class xd{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function kd(s,e){let n=e instanceof Se?e:new Se(e),i=s,a=ae(n);for(;a!==null;){const c=cs(i.node.children,a)||{children:{},childCount:0};i=new xd(a,i,c),n=Te(n),a=ae(n)}return i}function ks(s){return s.node.value}function Z_(s,e){s.node.value=e,bu(s)}function ey(s){return s.node.childCount>0}function qC(s){return ks(s)===void 0&&!ey(s)}function $a(s,e){xt(s.node.children,(n,i)=>{e(new xd(n,s,i))})}function ty(s,e,n,i){n&&e(s),$a(s,a=>{ty(a,e,!0)})}function KC(s,e,n){let i=s.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Bi(s){return new Se(s.parent===null?s.name:Bi(s.parent)+"/"+s.name)}function bu(s){s.parent!==null&&YC(s.parent,s.name,s)}function YC(s,e,n){const i=qC(n),a=vn(s.node.children,e);i&&a?(delete s.node.children[e],s.node.childCount--,bu(s)):!i&&!a&&(s.node.children[e]=n.node,s.node.childCount++,bu(s))}/**
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
 */const QC=/[\[\].#$\/\u0000-\u001F\u007F]/,XC=/[\[\].#$\u0000-\u001F\u007F]/,au=10*1024*1024,ny=function(s){return typeof s=="string"&&s.length!==0&&!QC.test(s)},ry=function(s){return typeof s=="string"&&s.length!==0&&!XC.test(s)},JC=function(s){return s&&(s=s.replace(/^\/*\.info(\/|$)/,"/")),ry(s)},ZC=function(s,e,n,i){Ed(Uu(s,"value"),e,n)},Ed=function(s,e,n){const i=n instanceof Se?new gE(n,s):n;if(e===void 0)throw new Error(s+"contains undefined "+gr(i));if(typeof e=="function")throw new Error(s+"contains a function "+gr(i)+" with contents = "+e.toString());if(r_(e))throw new Error(s+"contains "+e.toString()+" "+gr(i));if(typeof e=="string"&&e.length>au/3&&La(e)>au)throw new Error(s+"contains a string greater than "+au+" utf8 bytes "+gr(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,c=!1;if(xt(e,(d,f)=>{if(d===".value")a=!0;else if(d!==".priority"&&d!==".sv"&&(c=!0,!ny(d)))throw new Error(s+" contains an invalid key ("+d+") "+gr(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);_E(i,d),Ed(s,f,i),yE(i)}),a&&c)throw new Error(s+' contains ".value" child '+gr(i)+" in addition to actual children.")}},sy=function(s,e,n,i){if(!ry(n))throw new Error(Uu(s,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},eS=function(s,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),sy(s,e,n)},tS=function(s,e){if(ae(e)===".info")throw new Error(s+" failed = Can't modify data under /.info/")},nS=function(s,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ny(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!JC(n))throw new Error(Uu(s,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class rS{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Cd(s,e){let n=null;for(let i=0;i<e.length;i++){const a=e[i],c=a.getPath();n!==null&&!nd(c,n.path)&&(s.eventLists_.push(n),n=null),n===null&&(n={events:[],path:c}),n.events.push(a)}n&&s.eventLists_.push(n)}function iy(s,e,n){Cd(s,n),oy(s,i=>nd(i,e))}function yn(s,e,n){Cd(s,n),oy(s,i=>$t(i,e)||$t(e,i))}function oy(s,e){s.recursionDepth_++;let n=!0;for(let i=0;i<s.eventLists_.length;i++){const a=s.eventLists_[i];if(a){const c=a.path;e(c)?(sS(s.eventLists_[i]),s.eventLists_[i]=null):n=!1}}n&&(s.eventLists_=[]),s.recursionDepth_--}function sS(s){for(let e=0;e<s.events.length;e++){const n=s.events[e];if(n!==null){s.events[e]=null;const i=n.getEventRunner();_i&&at("event: "+n.toString()),xs(i)}}}/**
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
 */const iS="repo_interrupt",oS=25;class aS{constructor(e,n,i,a){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new rS,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ca(),this.transactionQueueTree_=new xd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function lS(s,e,n){if(s.stats_=ed(s.repoInfo_),s.forceRestClient_||Wk())s.server_=new Ea(s.repoInfo_,(i,a,c,d)=>{Ym(s,i,a,c,d)},s.authTokenProvider_,s.appCheckProvider_),setTimeout(()=>Qm(s,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Xe(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}s.persistentConnection_=new pn(s.repoInfo_,e,(i,a,c,d)=>{Ym(s,i,a,c,d)},i=>{Qm(s,i)},i=>{uS(s,i)},s.authTokenProvider_,s.appCheckProvider_,n),s.server_=s.persistentConnection_}s.authTokenProvider_.addTokenChangeListener(i=>{s.server_.refreshAuthToken(i)}),s.appCheckProvider_.addTokenChangeListener(i=>{s.server_.refreshAppCheckToken(i.token)}),s.statsReporter_=Gk(s.repoInfo_,()=>new VE(s.stats_,s.server_)),s.infoData_=new UE,s.infoSyncTree_=new Gm({startListening:(i,a,c,d)=>{let f=[];const m=s.infoData_.getNode(i._path);return m.isEmpty()||(f=Ha(s.infoSyncTree_,i._path,m),setTimeout(()=>{d("ok")},0)),f},stopListening:()=>{}}),Id(s,"connected",!1),s.serverSyncTree_=new Gm({startListening:(i,a,c,d)=>(s.server_.listen(i,c,a,(f,m)=>{const _=d(f,m);yn(s.eventQueue_,i._path,_)}),[]),stopListening:(i,a)=>{s.server_.unlisten(i,a)}})}function cS(s){const n=s.infoData_.getNode(new Se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Sd(s){return HC({timestamp:cS(s)})}function Ym(s,e,n,i,a){s.dataUpdateCount++;const c=new Se(e);n=s.interceptServerDataCallback_?s.interceptServerDataCallback_(e,n):n;let d=[];if(a)if(i){const m=ha(n,_=>tt(_));d=FC(s.serverSyncTree_,c,m,a)}else{const m=tt(n);d=jC(s.serverSyncTree_,c,m,a)}else if(i){const m=ha(n,_=>tt(_));d=OC(s.serverSyncTree_,c,m)}else{const m=tt(n);d=Ha(s.serverSyncTree_,c,m)}let f=c;d.length>0&&(f=Ga(s,c)),yn(s.eventQueue_,f,d)}function Qm(s,e){Id(s,"connected",e),e===!1&&hS(s)}function uS(s,e){xt(e,(n,i)=>{Id(s,n,i)})}function Id(s,e,n){const i=new Se("/.info/"+e),a=tt(n);s.infoData_.updateSnapshot(i,a);const c=Ha(s.infoSyncTree_,i,a);yn(s.eventQueue_,i,c)}function ay(s){return s.nextWriteId_++}function dS(s,e,n,i,a){Nd(s,"set",{path:e.toString(),value:n,priority:i});const c=Sd(s),d=tt(n,i),f=pd(s.serverSyncTree_,e),m=J_(d,f,c),_=ay(s),x=K_(s.serverSyncTree_,e,m,_,!0);Cd(s.eventQueue_,x),s.server_.put(e.toString(),d.val(!0),(w,T)=>{const R=w==="ok";R||wt("set at "+e+" failed: "+w);const M=yr(s.serverSyncTree_,_,!R);yn(s.eventQueue_,e,M),gS(s,a,w,T)});const v=hy(s,e);Ga(s,v),yn(s.eventQueue_,v,[])}function hS(s){Nd(s,"onDisconnectEvents");const e=Sd(s),n=Ca();Eu(s.onDisconnect_,ve(),(a,c)=>{const d=GC(a,c,s.serverSyncTree_,e);O_(n,a,d)});let i=[];Eu(n,ve(),(a,c)=>{i=i.concat(Ha(s.serverSyncTree_,a,c));const d=hy(s,a);Ga(s,d)}),s.onDisconnect_=Ca(),yn(s.eventQueue_,ve(),i)}function fS(s,e,n){let i;ae(e._path)===".info"?i=qm(s.infoSyncTree_,e,n):i=qm(s.serverSyncTree_,e,n),iy(s.eventQueue_,e._path,i)}function pS(s,e,n){let i;ae(e._path)===".info"?i=Ru(s.infoSyncTree_,e,n):i=Ru(s.serverSyncTree_,e,n),iy(s.eventQueue_,e._path,i)}function mS(s){s.persistentConnection_&&s.persistentConnection_.interrupt(iS)}function Nd(s,...e){let n="";s.persistentConnection_&&(n=s.persistentConnection_.id+":"),at(n,...e)}function gS(s,e,n,i){e&&xs(()=>{if(n==="ok")e(null);else{const a=(n||"error").toUpperCase();let c=a;i&&(c+=": "+i);const d=new Error(c);d.code=a,e(d)}})}function ly(s,e,n){return pd(s.serverSyncTree_,e,n)||Z.EMPTY_NODE}function Td(s,e=s.transactionQueueTree_){if(e||qa(s,e),ks(e)){const n=uy(s,e);F(n.length>0,"Sending zero length transaction queue"),n.every(a=>a.status===0)&&_S(s,Bi(e),n)}else ey(e)&&$a(e,n=>{Td(s,n)})}function _S(s,e,n){const i=n.map(_=>_.currentWriteId),a=ly(s,e,i);let c=a;const d=a.hash();for(let _=0;_<n.length;_++){const x=n[_];F(x.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),x.status=1,x.retryCount++;const v=yt(e,x.path);c=c.updateChild(v,x.currentOutputSnapshotRaw)}const f=c.val(!0),m=e;s.server_.put(m.toString(),f,_=>{Nd(s,"transaction put response",{path:m.toString(),status:_});let x=[];if(_==="ok"){const v=[];for(let w=0;w<n.length;w++)n[w].status=2,x=x.concat(yr(s.serverSyncTree_,n[w].currentWriteId)),n[w].onComplete&&v.push(()=>n[w].onComplete(null,!0,n[w].currentOutputSnapshotResolved)),n[w].unwatcher();qa(s,kd(s.transactionQueueTree_,e)),Td(s,s.transactionQueueTree_),yn(s.eventQueue_,e,x);for(let w=0;w<v.length;w++)xs(v[w])}else{if(_==="datastale")for(let v=0;v<n.length;v++)n[v].status===3?n[v].status=4:n[v].status=0;else{wt("transaction at "+m.toString()+" failed: "+_);for(let v=0;v<n.length;v++)n[v].status=4,n[v].abortReason=_}Ga(s,e)}},d)}function Ga(s,e){const n=cy(s,e),i=Bi(n),a=uy(s,n);return yS(s,a,i),i}function yS(s,e,n){if(e.length===0)return;const i=[];let a=[];const d=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const m=e[f],_=yt(n,m.path);let x=!1,v;if(F(_!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),m.status===4)x=!0,v=m.abortReason,a=a.concat(yr(s.serverSyncTree_,m.currentWriteId,!0));else if(m.status===0)if(m.retryCount>=oS)x=!0,v="maxretry",a=a.concat(yr(s.serverSyncTree_,m.currentWriteId,!0));else{const w=ly(s,m.path,d);m.currentInputSnapshot=w;const T=e[f].update(w.val());if(T!==void 0){Ed("transaction failed: Data returned ",T,m.path);let R=tt(T);typeof T=="object"&&T!=null&&vn(T,".priority")||(R=R.updatePriority(w.getPriority()));const O=m.currentWriteId,re=Sd(s),D=J_(R,w,re);m.currentOutputSnapshotRaw=R,m.currentOutputSnapshotResolved=D,m.currentWriteId=ay(s),d.splice(d.indexOf(O),1),a=a.concat(K_(s.serverSyncTree_,m.path,D,m.currentWriteId,m.applyLocally)),a=a.concat(yr(s.serverSyncTree_,O,!0))}else x=!0,v="nodata",a=a.concat(yr(s.serverSyncTree_,m.currentWriteId,!0))}yn(s.eventQueue_,n,a),a=[],x&&(e[f].status=2,function(w){setTimeout(w,Math.floor(0))}(e[f].unwatcher),e[f].onComplete&&(v==="nodata"?i.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):i.push(()=>e[f].onComplete(new Error(v),!1,null))))}qa(s,s.transactionQueueTree_);for(let f=0;f<i.length;f++)xs(i[f]);Td(s,s.transactionQueueTree_)}function cy(s,e){let n,i=s.transactionQueueTree_;for(n=ae(e);n!==null&&ks(i)===void 0;)i=kd(i,n),e=Te(e),n=ae(e);return i}function uy(s,e){const n=[];return dy(s,e,n),n.sort((i,a)=>i.order-a.order),n}function dy(s,e,n){const i=ks(e);if(i)for(let a=0;a<i.length;a++)n.push(i[a]);$a(e,a=>{dy(s,a,n)})}function qa(s,e){const n=ks(e);if(n){let i=0;for(let a=0;a<n.length;a++)n[a].status!==2&&(n[i]=n[a],i++);n.length=i,Z_(e,n.length>0?n:void 0)}$a(e,i=>{qa(s,i)})}function hy(s,e){const n=Bi(cy(s,e)),i=kd(s.transactionQueueTree_,e);return KC(i,a=>{lu(s,a)}),lu(s,i),ty(i,a=>{lu(s,a)}),n}function lu(s,e){const n=ks(e);if(n){const i=[];let a=[],c=-1;for(let d=0;d<n.length;d++)n[d].status===3||(n[d].status===1?(F(c===d-1,"All SENT items should be at beginning of queue."),c=d,n[d].status=3,n[d].abortReason="set"):(F(n[d].status===0,"Unexpected transaction status in abort"),n[d].unwatcher(),a=a.concat(yr(s.serverSyncTree_,n[d].currentWriteId,!0)),n[d].onComplete&&i.push(n[d].onComplete.bind(null,new Error("set"),!1,null))));c===-1?Z_(e,void 0):n.length=c+1,yn(s.eventQueue_,Bi(e),a);for(let d=0;d<i.length;d++)xs(i[d])}}/**
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
 */function vS(s){let e="";const n=s.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let a=n[i];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function wS(s){const e={};s.charAt(0)==="?"&&(s=s.substring(1));for(const n of s.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):wt(`Invalid query segment '${n}' in query '${s}'`)}return e}const Xm=function(s,e){const n=xS(s),i=n.namespace;n.domain==="firebase.com"&&_n(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&_n("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Ak();const a=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new m_(n.host,n.secure,i,a,e,"",i!==n.subdomain),path:new Se(n.pathString)}},xS=function(s){let e="",n="",i="",a="",c="",d=!0,f="https",m=443;if(typeof s=="string"){let _=s.indexOf("//");_>=0&&(f=s.substring(0,_-1),s=s.substring(_+2));let x=s.indexOf("/");x===-1&&(x=s.length);let v=s.indexOf("?");v===-1&&(v=s.length),e=s.substring(0,Math.min(x,v)),x<v&&(a=vS(s.substring(x,v)));const w=wS(s.substring(Math.min(s.length,v)));_=e.indexOf(":"),_>=0?(d=f==="https"||f==="wss",m=parseInt(e.substring(_+1),10)):_=e.length;const T=e.slice(0,_);if(T.toLowerCase()==="localhost")n="localhost";else if(T.split(".").length<=2)n=T;else{const R=e.indexOf(".");i=e.substring(0,R).toLowerCase(),n=e.substring(R+1),c=i}"ns"in w&&(c=w.ns)}return{host:e,port:m,domain:n,subdomain:i,secure:d,scheme:f,pathString:a,namespace:c}};/**
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
 */class kS{constructor(e,n,i,a){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=a}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Xe(this.snapshot.exportVal())}}class ES{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class CS{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return F(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Rd{constructor(e,n,i,a){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=a}get key(){return ue(this._path)?null:C_(this._path)}get ref(){return new tr(this._repo,this._path)}get _queryIdentifier(){const e=Lm(this._queryParams),n=Ju(e);return n==="{}"?"default":n}get _queryObject(){return Lm(this._queryParams)}isEqual(e){if(e=Ot(e),!(e instanceof Rd))return!1;const n=this._repo===e._repo,i=nd(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return n&&i&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+mE(this._path)}}class tr extends Rd{constructor(e,n){super(e,n,new od,!1)}get parent(){const e=I_(this._path);return e===null?null:new tr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Aa{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Se(e),i=Pu(this.ref,e);return new Aa(this._node.getChild(n),i,Ue)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,a)=>e(new Aa(a,Pu(this.ref,i),Ue)))}hasChild(e){const n=new Se(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Jm(s,e){return s=Ot(s),s._checkNotDeleted("ref"),e!==void 0?Pu(s._root,e):s._root}function Pu(s,e){return s=Ot(s),ae(s._path)===null?eS("child","path",e):sy("child","path",e),new tr(s._repo,$e(s._path,e))}function SS(s,e){s=Ot(s),tS("set",s._path),ZC("set",e,s._path);const n=new Oa;return dS(s._repo,s._path,e,null,n.wrapCallback(()=>{})),n.promise}class bd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new kS("value",this,new Aa(e.snapshotNode,new tr(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new ES(this,e,n):null}matches(e){return e instanceof bd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function IS(s,e,n,i,a){const c=new CS(n,void 0),d=new bd(c);return fS(s._repo,s,d),()=>pS(s._repo,s,d)}function NS(s,e,n,i){return IS(s,"value",e)}SC(tr);PC(tr);/**
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
 */const TS="FIREBASE_DATABASE_EMULATOR_HOST",Au={};let RS=!1;function bS(s,e,n,i){const a=e.lastIndexOf(":"),c=e.substring(0,a),d=gs(c);s.repoInfo_=new m_(e,d,s.repoInfo_.namespace,s.repoInfo_.webSocketOnly,s.repoInfo_.nodeAdmin,s.repoInfo_.persistenceKey,s.repoInfo_.includeNamespaceInQueryParams,!0,n),i&&(s.authTokenProvider_=i)}function PS(s,e,n,i,a){let c=i||s.options.databaseURL;c===void 0&&(s.options.projectId||_n("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),at("Using default host for project ",s.options.projectId),c=`${s.options.projectId}-default-rtdb.firebaseio.com`);let d=Xm(c,a),f=d.repoInfo,m;typeof process<"u"&&_m&&(m=_m[TS]),m?(c=`http://${m}?ns=${f.namespace}`,d=Xm(c,a),f=d.repoInfo):d.repoInfo.secure;const _=new Hk(s.name,s.options,e);nS("Invalid Firebase Database URL",d),ue(d.path)||_n("Database URL must point to the root of a Firebase Database (not including a child path).");const x=DS(f,s,_,new Bk(s,n));return new OS(x,s)}function AS(s,e){const n=Au[e];(!n||n[s.key]!==s)&&_n(`Database ${e}(${s.repoInfo_}) has already been deleted.`),mS(s),delete n[s.key]}function DS(s,e,n,i){let a=Au[e.name];a||(a={},Au[e.name]=a);let c=a[s.toURLString()];return c&&_n("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),c=new aS(s,RS,n,i),a[s.toURLString()]=c,c}class OS{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(lS(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new tr(this._repo,ve())),this._rootInternal}_delete(){return this._rootInternal!==null&&(AS(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&_n("Cannot call "+e+" on a deleted database.")}}function LS(s=yg(),e){const n=Bu(s,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=L0("database");i&&MS(n,...i)}return n}function MS(s,e,n,i={}){s=Ot(s),s._checkNotDeleted("useEmulator");const a=`${e}:${n}`,c=s._repoInternal;if(s._instanceStarted){if(a===s._repoInternal.repoInfo_.host&&vr(i,c.repoInfo_.emulatorOptions))return;_n("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let d;if(c.repoInfo_.nodeAdmin)i.mockUserToken&&_n('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),d=new la(la.OWNER);else if(i.mockUserToken){const f=typeof i.mockUserToken=="string"?i.mockUserToken:M0(i.mockUserToken,s.app.options.projectId);d=new la(f)}gs(e)&&(dg(e),hg("Database",!0)),bS(c,a,i,d)}/**
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
 */function jS(s){Ik(ys),us(new wr("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),c=e.getProvider("app-check-internal");return PS(i,a,c,n)},"PUBLIC").setMultipleInstances(!0)),Kn(ym,vm,s),Kn(ym,vm,"esm2017")}pn.prototype.simpleListen=function(s,e){this.sendRequest("q",{p:s},e)};pn.prototype.echo=function(s,e){this.sendRequest("echo",{d:s},e)};jS();const FS={apiKey:"AIzaSyCTA3NZsYoSeGskrIL_2isF2aCqLpEsRYc",authDomain:"rbgh-app.firebaseapp.com",databaseURL:"https://rbgh-app-default-rtdb.europe-west1.firebasedatabase.app",projectId:"rbgh-app",storageBucket:"rbgh-app.firebasestorage.app",messagingSenderId:"955092745966",appId:"1:955092745966:web:237adaa1a37752a93ebdff",measurementId:"G-004FZK6EXT"},fy=_g(FS),cu=kk(fy),Zm=LS(fy),US=S0(s=>{const e=localStorage.getItem("user"),n=e?JSON.parse(e):null;return{user:n,isLoading:!1,error:null,isAuthenticated:!!n,login:async({emailOrUsername:i,password:a,rememberMe:c})=>{s({isLoading:!0,error:null});try{const f=(await c1(cu,i,a)).user,m={id:f.uid,email:f.email||"",username:f.displayName||"",name:f.displayName||""};c&&localStorage.setItem("user",JSON.stringify(m)),s({user:m,isAuthenticated:!0,isLoading:!1})}catch(d){s({error:d.message||"Login failed",isLoading:!1})}},logout:async()=>{await cu.signOut(),localStorage.removeItem("user"),s({user:null,isAuthenticated:!1,error:null})},forgotPassword:async i=>{s({isLoading:!0,error:null});try{await l1(cu,i),s({isLoading:!1})}catch(a){s({error:a.message||"Failed to send reset email",isLoading:!1})}},clearError:()=>s({error:null})}}),Ka=()=>{const{user:s,isLoading:e,error:n,isAuthenticated:i,login:a,logout:c,forgotPassword:d,clearError:f}=US();return{user:s,isLoading:e,error:n,isAuthenticated:i,login:a,logout:c,forgotPassword:d,clearError:f}};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var zS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),we=(s,e)=>{const n=K.forwardRef(({color:i="currentColor",size:a=24,strokeWidth:c=2,absoluteStrokeWidth:d,className:f="",children:m,..._},x)=>K.createElement("svg",{ref:x,...zS,width:a,height:a,stroke:i,strokeWidth:d?Number(c)*24/Number(a):c,className:["lucide",`lucide-${WS(s)}`,f].join(" "),..._},[...e.map(([v,w])=>K.createElement(v,w)),...Array.isArray(m)?m:[m]]));return n.displayName=`${s}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=we("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=we("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=we("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=we("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=we("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=we("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=we("CheckSquare",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=we("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=we("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=we("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=we("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=we("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=we("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=we("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=we("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=we("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=we("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=we("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=we("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=we("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=we("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=we("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=we("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=we("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=we("Refrigerator",[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z",key:"fpq118"}],["path",{d:"M5 10h14",key:"elsbfy"}],["path",{d:"M15 7v6",key:"1nx30x"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=we("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eI=we("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tI=we("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=we("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qa=we("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),nI=({size:s="md",className:e=""})=>{const n={sm:"w-4 h-4",md:"w-6 h-6",lg:"w-8 h-8"};return p.jsx(QS,{className:`animate-spin ${n[s]} ${e}`})},ye=({variant:s="primary",size:e="md",loading:n=!1,children:i,className:a="",disabled:c,...d})=>{const f="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",m={primary:"bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-md hover:shadow-lg dark:bg-blue-600 dark:hover:bg-blue-700",secondary:"bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 shadow-md hover:shadow-lg dark:bg-gray-600 dark:hover:bg-gray-700",outline:"border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-blue-500 dark:focus:ring-blue-400",ghost:"text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-gray-500 dark:focus:ring-gray-400"},_={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-base",lg:"px-6 py-3 text-lg"};return p.jsxs("button",{className:`${f} ${m[s]} ${_[e]} ${a}`,disabled:c||n,...d,children:[n&&p.jsx(nI,{size:"sm",className:"mr-2"}),i]})},Da=K.forwardRef(({label:s,error:e,icon:n,className:i="",...a},c)=>p.jsxs("div",{className:"space-y-1",children:[s&&p.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:s}),p.jsxs("div",{className:"relative",children:[n&&p.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:p.jsx("div",{className:"text-gray-400 dark:text-gray-500",children:n})}),p.jsx("input",{ref:c,className:`
              block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400
              focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-1 dark:focus:ring-offset-gray-800
              disabled:bg-gray-50 dark:disabled:bg-gray-800 disabled:text-gray-500 dark:disabled:text-gray-400 transition-all duration-200
              ${n?"pl-10":""}
              ${e?"border-red-500 dark:border-red-500 focus:border-red-500 focus:ring-red-500":""}
              ${i}
            `,...a})]}),e&&p.jsx("p",{className:"text-sm text-red-600 dark:text-red-400 mt-1",children:e})]}));Da.displayName="Input";const Dd=s=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s),rI=s=>s.length>=3&&/^[a-zA-Z0-9_]+$/.test(s),sI=s=>s.length>=6,rg=s=>Dd(s)?"email":"username",iI=({onForgotPassword:s})=>{const[e,n]=K.useState({emailOrUsername:"",password:"",rememberMe:!1}),[i,a]=K.useState({}),[c,d]=K.useState(!1),[f,m]=K.useState({}),{login:_,isLoading:x,error:v,clearError:w}=Ka();K.useEffect(()=>{if(v){const D=setTimeout(()=>{w()},5e3);return()=>clearTimeout(D)}},[v,w]);const T=()=>{const D={};if(!e.emailOrUsername.trim())D.emailOrUsername="Email or username is required";else{const q=rg(e.emailOrUsername);q==="email"&&!Dd(e.emailOrUsername)?D.emailOrUsername="Please enter a valid email address":q==="username"&&!rI(e.emailOrUsername)&&(D.emailOrUsername="Username must be at least 3 characters and contain only letters, numbers, and underscores")}return e.password?sI(e.password)||(D.password="Password must be at least 6 characters"):D.password="Password is required",a(D),Object.keys(D).length===0},R=async D=>{D.preventDefault(),T()&&await _(e)},M=(D,q)=>{n(ne=>({...ne,[D]:q})),f[D]&&a(ne=>({...ne,[D]:""}))},O=D=>{m(q=>({...q,[D]:!0})),T()},re=rg(e.emailOrUsername)==="email"?p.jsx(Ou,{size:20}):p.jsx(tI,{size:20});return p.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-3 sm:p-4",children:p.jsx("div",{className:"w-full max-w-sm sm:max-w-md",children:p.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700",children:p.jsxs("div",{className:"px-6 sm:px-8 pt-6 sm:pt-8 pb-4 sm:pb-6",children:[p.jsxs("div",{className:"text-center mb-8",children:[p.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4",children:p.jsx(eg,{className:"w-8 h-8 text-white"})}),p.jsx("h1",{className:"text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2",children:"Welcome Back"}),p.jsx("p",{className:"text-gray-600 dark:text-gray-300 text-sm sm:text-base",children:"Sign in to your account to continue"})]}),v&&p.jsxs("div",{className:"mb-6 p-3 sm:p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center space-x-2 text-red-700 dark:text-red-400",children:[p.jsx(py,{size:20}),p.jsx("span",{className:"text-sm font-medium flex-1",children:v})]}),p.jsxs("form",{onSubmit:R,className:"space-y-5 sm:space-y-6",children:[p.jsx(Da,{label:"Email or Username",type:"text",placeholder:"Enter your email or username",value:e.emailOrUsername,onChange:D=>M("emailOrUsername",D.target.value),onBlur:()=>O("emailOrUsername"),error:i.emailOrUsername,icon:re,disabled:x}),p.jsxs("div",{className:"relative",children:[p.jsx(Da,{label:"Password",type:c?"text":"password",placeholder:"Enter your password",value:e.password,onChange:D=>M("password",D.target.value),onBlur:()=>O("password"),error:i.password,icon:p.jsx(eg,{size:20}),disabled:x}),p.jsx("button",{type:"button",className:"absolute right-3 top-8 text-gray-400 hover:text-gray-600 transition-colors",onClick:()=>d(!c),children:c?p.jsx(KS,{size:20}):p.jsx(Ad,{size:20})})]}),p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("label",{className:"flex items-center space-x-2",children:[p.jsx("input",{type:"checkbox",checked:e.rememberMe,onChange:D=>M("rememberMe",D.target.checked.toString()),className:"w-4 h-4 text-blue-600 border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded focus:ring-blue-500"}),p.jsx("span",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Remember me"})]}),p.jsx("button",{type:"button",onClick:s,className:"text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors",children:"Forgot password?"})]}),p.jsxs(ye,{type:"submit",loading:x,className:"w-full",size:"lg",children:["Sign In",!x&&p.jsx(BS,{className:"ml-2 w-5 h-5"})]})]})]})})})})},oI=({onBackToLogin:s})=>{const[e,n]=K.useState(""),[i,a]=K.useState(""),[c,d]=K.useState(!1),[f,m]=K.useState(!1),{forgotPassword:_,isLoading:x}=Ka(),v=()=>e.trim()?Dd(e)?(a(""),!0):(a("Please enter a valid email address"),!1):(a("Email is required"),!1),w=async M=>{M.preventDefault(),v()&&(await _(e),d(!0))},T=M=>{n(M),f&&a("")},R=()=>{m(!0),v()};return c?p.jsx("div",{className:"min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-3 sm:p-4",children:p.jsx("div",{className:"w-full max-w-sm sm:max-w-md",children:p.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700",children:p.jsxs("div",{className:"px-6 sm:px-8 py-8 sm:py-12 text-center",children:[p.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-6",children:p.jsx(VS,{className:"w-8 h-8 text-green-600"})}),p.jsx("h1",{className:"text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4",children:"Check Your Email"}),p.jsxs("p",{className:"text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-sm sm:text-base",children:["We've sent a password reset link to"," ",p.jsx("span",{className:"font-medium text-gray-900 dark:text-white break-all",children:e}),". Please check your email and follow the instructions to reset your password."]}),p.jsxs("div",{className:"space-y-3 sm:space-y-4",children:[p.jsxs(ye,{onClick:s,variant:"primary",className:"w-full",size:"lg",children:[p.jsx(Du,{className:"mr-2 w-5 h-5"}),"Back to Login"]}),p.jsx(ye,{onClick:()=>d(!1),variant:"ghost",className:"w-full",children:"Didn't receive the email?"})]})]})})})}):p.jsx("div",{className:"min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-3 sm:p-4",children:p.jsx("div",{className:"w-full max-w-sm sm:max-w-md",children:p.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700",children:p.jsxs("div",{className:"px-6 sm:px-8 pt-6 sm:pt-8 pb-4 sm:pb-6",children:[p.jsxs("div",{className:"text-center mb-8",children:[p.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl mb-4",children:p.jsx(Ou,{className:"w-8 h-8 text-white"})}),p.jsx("h1",{className:"text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2",children:"Reset Password"}),p.jsx("p",{className:"text-gray-600 dark:text-gray-300 text-sm sm:text-base",children:"Enter your email address and we'll send you a link to reset your password"})]}),i&&p.jsxs("div",{className:"mb-6 p-3 sm:p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center space-x-2 text-red-700 dark:text-red-400",children:[p.jsx(py,{size:20}),p.jsx("span",{className:"text-sm font-medium flex-1",children:i})]}),p.jsxs("form",{onSubmit:w,className:"space-y-5 sm:space-y-6",children:[p.jsx(Da,{label:"Email Address",type:"email",placeholder:"Enter your email address",value:e,onChange:M=>T(M.target.value),onBlur:R,error:i,icon:p.jsx(Ou,{size:20}),disabled:x}),p.jsx(ye,{type:"submit",loading:x,className:"w-full",size:"lg",children:"Send Reset Link"})]}),p.jsx("div",{className:"mt-5 sm:mt-6 text-center",children:p.jsxs("button",{type:"button",onClick:s,className:"inline-flex items-center text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors",children:[p.jsx(Du,{className:"mr-2 w-4 h-4"}),"Back to Login"]})})]})})})})},aI=({onCheckIn:s,onShowQR:e,onOpenFridge:n})=>{const[i,a]=K.useState(!1),[c,d]=K.useState(!1),[f,m]=K.useState({x:20,y:20}),[_,x]=K.useState({x:0,y:0}),[v,w]=K.useState(!1),[T,R]=K.useState("PXL"),[M,O]=K.useState(0),re=K.useRef(null),D=K.useRef(null),q=[{id:"PXL",name:"PXL Campus",color:"bg-blue-500 hover:bg-blue-600"},{id:"RBGH",name:"RBGH Center",color:"bg-green-500 hover:bg-green-600"},{id:"STREAM",name:"STREAM Hub",color:"bg-purple-500 hover:bg-purple-600"}],ne=ee=>{if(v)return;const he="touches"in ee?ee.touches[0].clientX:ee.clientX,se="touches"in ee?ee.touches[0].clientY:ee.clientY;d(!0),x({x:he-f.x,y:se-f.y})},de=ee=>{if(!c)return;const he="touches"in ee?ee.touches[0].clientX:ee.clientX,se="touches"in ee?ee.touches[0].clientY:ee.clientY,Je=he-_.x,lt=se-_.y,Nt=window.innerWidth-64,nt=window.innerHeight-64;m({x:Math.max(0,Math.min(Je,Nt)),y:Math.max(0,Math.min(lt,nt))})},U=()=>{d(!1)};K.useEffect(()=>{if(c)return document.addEventListener("mousemove",de),document.addEventListener("mouseup",U),document.addEventListener("touchmove",de),document.addEventListener("touchend",U),()=>{document.removeEventListener("mousemove",de),document.removeEventListener("mouseup",U),document.removeEventListener("touchmove",de),document.removeEventListener("touchend",U)}},[c,_]),K.useEffect(()=>{const ee=he=>{if(he.key==="Escape"&&(v?w(!1):i&&a(!1)),v){if(he.key==="Enter"&&Me(),he.key==="ArrowUp"||he.key==="ArrowDown"){he.preventDefault();const se=q.findIndex(lt=>lt.id===T),Je=he.key==="ArrowUp"?(se-1+q.length)%q.length:(se+1)%q.length;R(q[Je].id)}(he.key==="+"||he.key==="=")&&(he.preventDefault(),O(se=>Math.min(se+1,10))),(he.key==="-"||he.key==="_")&&(he.preventDefault(),O(se=>Math.max(se-1,0)))}};return document.addEventListener("keydown",ee),()=>document.removeEventListener("keydown",ee)},[i,v,T,M]),K.useEffect(()=>{const ee=he=>{D.current&&!D.current.contains(he.target)&&w(!1),re.current&&!re.current.contains(he.target)&&!v&&a(!1)};return document.addEventListener("mousedown",ee),()=>document.removeEventListener("mousedown",ee)},[v]);const _e=()=>{c||a(!i)},xe=()=>{w(!0),a(!1)},Me=()=>{const ee=Array(M).fill("").map((he,se)=>`friend_${se+1}`);s(T,ee),w(!1),O(0)};return p.jsxs(p.Fragment,{children:[p.jsx("div",{ref:re,className:"fixed z-50 select-none",style:{right:`${f.x}px`,bottom:`${f.y}px`},children:p.jsxs("div",{className:"relative",children:[i&&p.jsxs("div",{className:"absolute bottom-16 right-0 space-y-3 animate-in slide-in-from-bottom-2 duration-200",children:[p.jsx(ye,{onClick:n,className:"w-12 h-12 rounded-full shadow-lg bg-orange-500 hover:bg-orange-600 text-white p-0","aria-label":"Open fridge",children:p.jsx(my,{className:"w-6 h-6"})}),p.jsx(ye,{onClick:e,className:"w-12 h-12 rounded-full shadow-lg bg-green-500 hover:bg-green-600 text-white p-0","aria-label":"Show QR code",children:p.jsx(JS,{className:"w-6 h-6"})}),p.jsx(ye,{onClick:xe,className:"w-12 h-12 rounded-full shadow-lg bg-blue-500 hover:bg-blue-600 text-white p-0","aria-label":"Check in",children:p.jsx(Di,{className:"w-6 h-6"})})]}),p.jsx("button",{onMouseDown:ne,onTouchStart:ne,onClick:_e,className:`w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-blue-500/30 ${c?"cursor-grabbing scale-110":"cursor-grab hover:scale-105"}`,"aria-label":i?"Close menu":"Open check-in menu",children:p.jsx("div",{className:`transition-transform duration-200 ${i?"rotate-45":""}`,children:p.jsx($n,{className:"w-7 h-7"})})})]})}),v&&p.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:p.jsxs("div",{ref:D,className:"bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-sm shadow-2xl animate-in zoom-in-95 duration-200",children:[p.jsxs("div",{className:"flex items-center justify-between mb-6",children:[p.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"Check In"}),p.jsx("button",{onClick:()=>w(!1),className:"text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors","aria-label":"Close modal",children:p.jsx(Qa,{className:"w-6 h-6"})})]}),p.jsxs("div",{className:"space-y-6",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3",children:"Choose Location"}),p.jsx("div",{className:"space-y-2",children:q.map(ee=>p.jsx("button",{onClick:()=>R(ee.id),className:`w-full p-3 rounded-lg border-2 transition-all text-left ${T===ee.id?"border-blue-500 bg-blue-50 dark:bg-blue-900/20":"border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500"}`,children:p.jsxs("div",{className:"flex items-center space-x-3",children:[p.jsx("div",{className:`w-4 h-4 rounded-full ${ee.color.split(" ")[0]}`}),p.jsx("span",{className:"font-medium text-gray-900 dark:text-white",children:ee.name})]})},ee.id))})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3",children:"Check in with friends"}),p.jsxs("div",{className:"flex items-center space-x-4",children:[p.jsx("button",{onClick:()=>O(ee=>Math.max(ee-1,0)),className:"w-10 h-10 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors","aria-label":"Decrease friend count",children:p.jsx(ns,{className:"w-5 h-5 text-gray-600 dark:text-gray-300"})}),p.jsxs("div",{className:"flex items-center space-x-2 min-w-0 flex-1",children:[p.jsx(Ya,{className:"w-5 h-5 text-gray-500"}),p.jsx("span",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:M}),p.jsxs("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:["friend",M!==1?"s":""]})]}),p.jsx("button",{onClick:()=>O(ee=>Math.min(ee+1,10)),className:"w-10 h-10 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors","aria-label":"Increase friend count",children:p.jsx($n,{className:"w-5 h-5 text-gray-600 dark:text-gray-300"})})]})]}),p.jsxs("div",{className:"flex space-x-3 pt-4",children:[p.jsx(ye,{onClick:()=>w(!1),variant:"outline",className:"flex-1",children:"Cancel"}),p.jsx(ye,{onClick:Me,className:"flex-1",children:"Check In"})]})]}),p.jsx("div",{className:"mt-4 pt-4 border-t border-gray-200 dark:border-gray-600",children:p.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 text-center",children:"Use ↑↓ to select location, +/- for friends, Enter to check in, Esc to close"})})]})})]})},lI=({isOpen:s,onClose:e})=>{const n="https://linktr.ee/esports_pxl",i=`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(n)}`;return s?p.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:p.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-sm shadow-2xl animate-in zoom-in-95 duration-200",children:[p.jsxs("div",{className:"flex items-center justify-between mb-6",children:[p.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"QR Code"}),p.jsx("button",{onClick:e,className:"text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors","aria-label":"Close modal",children:p.jsx(Qa,{className:"w-6 h-6"})})]}),p.jsxs("div",{className:"text-center space-y-4",children:[p.jsxs("div",{className:"bg-white p-4 rounded-xl border border-gray-200 dark:border-gray-600 inline-block",children:[p.jsx("img",{src:i,alt:"QR Code for esports_pxl",className:"w-64 h-64 mx-auto",onError:a=>{const c=a.target;c.style.display="none",c.nextElementSibling?.classList.remove("hidden")}}),p.jsx("div",{className:"hidden w-64 h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center",children:p.jsxs("div",{className:"text-center",children:[p.jsx("div",{className:"text-4xl mb-2",children:"📱"}),p.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"QR Code"})]})})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Scan to visit:"}),p.jsx("div",{className:"bg-gray-50 dark:bg-gray-700 rounded-lg p-3",children:p.jsx("p",{className:"text-sm font-mono text-gray-900 dark:text-white break-all",children:n})})]}),p.jsxs("div",{className:"flex space-x-3 pt-4",children:[p.jsx(ye,{onClick:e,variant:"outline",className:"flex-1",children:"Close"}),p.jsxs(ye,{onClick:()=>window.open(n,"_blank"),className:"flex-1",children:[p.jsx(qS,{className:"w-4 h-4 mr-2"}),"Visit"]})]})]}),p.jsx("div",{className:"mt-6 pt-4 border-t border-gray-200 dark:border-gray-600",children:p.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 text-center",children:"Point your camera at the QR code to open the link"})})]})}):null},cI=({onAddStock:s,onShowLog:e,onTakeItem:n})=>{const[i,a]=K.useState(!1),[c,d]=K.useState(!1),[f,m]=K.useState({x:20,y:20}),[_,x]=K.useState({x:0,y:0}),v=K.useRef(null),w=O=>{const re="touches"in O?O.touches[0].clientX:O.clientX,D="touches"in O?O.touches[0].clientY:O.clientY;d(!0),x({x:re-f.x,y:D-f.y})},T=O=>{if(!c)return;const re="touches"in O?O.touches[0].clientX:O.clientX,D="touches"in O?O.touches[0].clientY:O.clientY,q=re-_.x,ne=D-_.y,de=window.innerWidth-64,U=window.innerHeight-64;m({x:Math.max(0,Math.min(q,de)),y:Math.max(0,Math.min(ne,U))})},R=()=>{d(!1)};K.useEffect(()=>{if(c)return document.addEventListener("mousemove",T),document.addEventListener("mouseup",R),document.addEventListener("touchmove",T),document.addEventListener("touchend",R),()=>{document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",R),document.removeEventListener("touchmove",T),document.removeEventListener("touchend",R)}},[c,_]),K.useEffect(()=>{const O=re=>{v.current&&!v.current.contains(re.target)&&a(!1)};return document.addEventListener("mousedown",O),()=>document.removeEventListener("mousedown",O)},[]);const M=()=>{c||a(!i)};return p.jsx("div",{ref:v,className:"fixed z-50 select-none",style:{right:`${f.x}px`,bottom:`${f.y}px`},children:p.jsxs("div",{className:"relative",children:[i&&p.jsxs("div",{className:"absolute bottom-16 right-0 space-y-3 animate-in slide-in-from-bottom-2 duration-200",children:[p.jsx(ye,{onClick:e,className:"w-12 h-12 rounded-full shadow-lg bg-purple-500 hover:bg-purple-600 text-white p-0","aria-label":"Show log",children:p.jsx(Ad,{className:"w-6 h-6"})}),p.jsx(ye,{onClick:s,className:"w-12 h-12 rounded-full shadow-lg bg-green-500 hover:bg-green-600 text-white p-0","aria-label":"Add stock",children:p.jsx($n,{className:"w-6 h-6"})}),p.jsx(ye,{onClick:n,className:"w-12 h-12 rounded-full shadow-lg bg-blue-500 hover:bg-blue-600 text-white p-0","aria-label":"Take item",children:p.jsx(ns,{className:"w-6 h-6"})})]}),p.jsx("button",{onMouseDown:w,onTouchStart:w,onClick:M,className:`w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-orange-500/30 ${c?"cursor-grabbing scale-110":"cursor-grab hover:scale-105"}`,"aria-label":i?"Close fridge menu":"Open fridge menu",children:p.jsx("div",{className:`transition-transform duration-200 ${i?"rotate-45":""}`,children:p.jsx($n,{className:"w-7 h-7"})})})]})})},uI=({onBack:s})=>{const[e,n]=K.useState([{id:"1",name:"RedBull Energy Drink",stock:24,lastUpdated:new Date}]),[i,a]=K.useState([{id:"1",action:"take",amount:2,user:"Alice Johnson",timestamp:new Date(Date.now()-30*60*1e3),itemName:"RedBull Energy Drink"},{id:"2",action:"add",amount:12,user:"Bob Smith",timestamp:new Date(Date.now()-2*60*60*1e3),itemName:"RedBull Energy Drink"},{id:"3",action:"take",amount:1,user:"Carol Davis",timestamp:new Date(Date.now()-4*60*60*1e3),itemName:"RedBull Energy Drink"}]),[c,d]=K.useState(!1),[f,m]=K.useState(!1),[_,x]=K.useState(!1),[v,w]=K.useState(1),[T,R]=K.useState(1),M=D=>{const ne=Math.floor((new Date().getTime()-D.getTime())/(1e3*60));if(ne<1)return"Just now";if(ne<60)return`${ne}m ago`;const de=Math.floor(ne/60);return de<24?`${de}h ago`:`${Math.floor(de/24)}d ago`},O=()=>{const D=e[0].stock;if(v>D)return;const q=D-v;n(de=>de.map(U=>U.id==="1"?{...U,stock:q,lastUpdated:new Date}:U));const ne={id:Date.now().toString(),action:"take",amount:v,user:"Demo User",timestamp:new Date,itemName:"RedBull Energy Drink"};a(de=>[ne,...de]),d(!1),w(1)},re=()=>{const q=e[0].stock+T;n(de=>de.map(U=>U.id==="1"?{...U,stock:q,lastUpdated:new Date}:U));const ne={id:Date.now().toString(),action:"add",amount:T,user:"Demo User",timestamp:new Date,itemName:"RedBull Energy Drink"};a(de=>[ne,...de]),m(!1),R(1)};return p.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 pb-20",children:[p.jsx("header",{className:"bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700",children:p.jsx("div",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8",children:p.jsx("div",{className:"flex justify-between items-center py-3 sm:py-4",children:p.jsxs("div",{className:"flex items-center space-x-3 sm:space-x-4",children:[p.jsx(ye,{onClick:s,variant:"ghost",size:"sm",children:p.jsx(Du,{className:"w-5 h-5"})}),p.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center",children:p.jsx(my,{className:"w-6 h-6 text-white"})}),p.jsxs("div",{className:"min-w-0 flex-1",children:[p.jsx("h1",{className:"text-xl sm:text-2xl font-bold text-gray-900 dark:text-white",children:"Fridge"}),p.jsx("p",{className:"text-gray-600 dark:text-gray-300 text-sm sm:text-base",children:"Stock management"})]})]})})})}),p.jsxs("main",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8",children:[p.jsx("div",{className:"grid grid-cols-1 gap-4 mb-6",children:e.map(D=>p.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm",children:p.jsxs("div",{className:"flex items-center space-x-4",children:[p.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center",children:p.jsx(ng,{className:"w-8 h-8 text-white"})}),p.jsxs("div",{className:"flex-1",children:[p.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-1",children:D.name}),p.jsxs("div",{className:"flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300",children:[p.jsxs("div",{className:"flex items-center space-x-1",children:[p.jsx(ng,{className:"w-4 h-4"}),p.jsxs("span",{children:[D.stock," in stock"]})]}),p.jsxs("div",{className:"flex items-center space-x-1",children:[p.jsx(Ai,{className:"w-4 h-4"}),p.jsxs("span",{children:["Updated ",M(D.lastUpdated)]})]})]})]}),p.jsxs("div",{className:"text-right",children:[p.jsx("div",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:D.stock}),p.jsx("div",{className:"text-sm text-gray-500 dark:text-gray-400",children:"units"})]})]})},D.id))}),p.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700",children:[p.jsx("div",{className:"p-4 border-b border-gray-200 dark:border-gray-700",children:p.jsx("h2",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:"Recent Activity"})}),p.jsx("div",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:i.slice(0,5).map(D=>p.jsx("div",{className:"p-4",children:p.jsxs("div",{className:"flex items-center space-x-3",children:[p.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center ${D.action==="take"?"bg-red-100 dark:bg-red-900/30":"bg-green-100 dark:bg-green-900/30"}`,children:D.action==="take"?p.jsx(ns,{className:`w-4 h-4 ${D.action==="take"?"text-red-600 dark:text-red-400":"text-green-600 dark:text-green-400"}`}):p.jsx($n,{className:"w-4 h-4 text-green-600 dark:text-green-400"})}),p.jsxs("div",{className:"flex-1",children:[p.jsxs("p",{className:"text-sm font-medium text-gray-900 dark:text-white",children:[D.user," ",D.action==="take"?"took":"added"," ",D.amount," ",D.itemName]}),p.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:M(D.timestamp)})]}),p.jsxs("div",{className:`text-sm font-medium ${D.action==="take"?"text-red-600 dark:text-red-400":"text-green-600 dark:text-green-400"}`,children:[D.action==="take"?"-":"+",D.amount]})]})},D.id))})]})]}),p.jsx(cI,{onTakeItem:()=>d(!0),onAddStock:()=>m(!0),onShowLog:()=>x(!0)}),c&&p.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:p.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-sm shadow-2xl",children:[p.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white mb-4",children:"Take from Stock"}),p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Amount to take"}),p.jsxs("div",{className:"flex items-center space-x-3",children:[p.jsx(ye,{onClick:()=>w(Math.max(1,v-1)),variant:"outline",size:"sm",children:p.jsx(ns,{className:"w-4 h-4"})}),p.jsx("span",{className:"text-lg font-semibold text-gray-900 dark:text-white min-w-[3rem] text-center",children:v}),p.jsx(ye,{onClick:()=>w(Math.min(e[0].stock,v+1)),variant:"outline",size:"sm",children:p.jsx($n,{className:"w-4 h-4"})})]}),p.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-1",children:["Available: ",e[0].stock," units"]})]}),p.jsxs("div",{className:"flex space-x-3",children:[p.jsx(ye,{onClick:()=>d(!1),variant:"outline",className:"flex-1",children:"Cancel"}),p.jsx(ye,{onClick:O,className:"flex-1",children:"Take"})]})]})]})}),f&&p.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:p.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-sm shadow-2xl",children:[p.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white mb-4",children:"Add to Stock"}),p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Amount to add"}),p.jsxs("div",{className:"flex items-center space-x-3",children:[p.jsx(ye,{onClick:()=>R(Math.max(1,T-1)),variant:"outline",size:"sm",children:p.jsx(ns,{className:"w-4 h-4"})}),p.jsx("span",{className:"text-lg font-semibold text-gray-900 dark:text-white min-w-[3rem] text-center",children:T}),p.jsx(ye,{onClick:()=>R(T+1),variant:"outline",size:"sm",children:p.jsx($n,{className:"w-4 h-4"})})]})]}),p.jsxs("div",{className:"flex space-x-3",children:[p.jsx(ye,{onClick:()=>m(!1),variant:"outline",className:"flex-1",children:"Cancel"}),p.jsx(ye,{onClick:re,className:"flex-1",children:"Add"})]})]})]})}),_&&p.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:p.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-md shadow-2xl max-h-[80vh] overflow-hidden",children:[p.jsxs("div",{className:"flex items-center justify-between mb-4",children:[p.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"Activity Log"}),p.jsx(ye,{onClick:()=>x(!1),variant:"ghost",size:"sm",children:p.jsx(Qa,{className:"w-5 h-5"})})]}),p.jsx("div",{className:"overflow-y-auto max-h-96 space-y-3",children:i.map(D=>p.jsxs("div",{className:"flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg",children:[p.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center ${D.action==="take"?"bg-red-100 dark:bg-red-900/30":"bg-green-100 dark:bg-green-900/30"}`,children:D.action==="take"?p.jsx(ns,{className:"w-4 h-4 text-red-600 dark:text-red-400"}):p.jsx($n,{className:"w-4 h-4 text-green-600 dark:text-green-400"})}),p.jsxs("div",{className:"flex-1",children:[p.jsx("p",{className:"text-sm font-medium text-gray-900 dark:text-white",children:D.user}),p.jsxs("p",{className:"text-xs text-gray-600 dark:text-gray-300",children:[D.action==="take"?"Took":"Added"," ",D.amount," units"]}),p.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:[D.timestamp.toLocaleDateString()," ",D.timestamp.toLocaleTimeString()]})]}),p.jsxs("div",{className:`text-sm font-medium ${D.action==="take"?"text-red-600 dark:text-red-400":"text-green-600 dark:text-green-400"}`,children:[D.action==="take"?"-":"+",D.amount]})]},D.id))})]})})]})},dI=({user:s,onClose:e})=>p.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4",children:p.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg p-6 relative",children:[p.jsx("button",{onClick:e,className:"absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300",children:p.jsx(Qa,{className:"w-5 h-5"})}),p.jsx("div",{className:"flex justify-center -mt-16",children:p.jsx("img",{src:s.avatar,alt:`${s.name}'s avatar`,onError:n=>n.currentTarget.src="https://via.placeholder.com/150",className:"w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"})}),p.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white mt-4 text-center",children:s.name}),p.jsxs("div",{className:"space-y-2 mt-4",children:[p.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:[p.jsx("strong",{children:"Username:"})," ",s.username]}),p.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:[p.jsx("strong",{children:"Last Check-in:"})," ",s.location," at"," ",s.checkedInAt.toLocaleString()]}),p.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:[p.jsx("strong",{children:"Email:"})," ",s.email||"N/A"]}),p.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:[p.jsx("strong",{children:"Phone:"})," ",s.phoneNumber||"N/A"]}),p.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:[p.jsx("strong",{children:"Discord:"})," ",s.discordUsername||"N/A"]}),p.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:[p.jsx("strong",{children:"Friends:"})," ",s.friendCount||0]})]})]})}),hI=()=>{const{user:s,logout:e}=Ka(),[n,i]=K.useState([]),[a,c]=K.useState(""),[d,f]=K.useState("ALL"),[m,_]=K.useState(!1),[x,v]=K.useState(!1),[w,T]=K.useState(null),R=[{id:"RBGH",name:"Red Bull",color:"bg-green-500"},{id:"PXL",name:"PXL",color:"bg-blue-500"},{id:"STREAM",name:"Streaming room",color:"bg-purple-500"}];K.useEffect(()=>{const U=Jm(Zm,"users"),_e=NS(U,xe=>{const Me=xe.val();if(!Me){i([]);return}const ee=Object.entries(Me).filter(([he,se])=>se.checkInStatus===!0).map(([he,se])=>({id:he,username:se.username,name:`${se.firstname} ${se.lastname}`,location:se.checkedInWhere||"Unknown",checkedInAt:new Date(se.checkedInAt??Date.now()),isResponsible:se.isResponsible||!1,friendCount:se.friendCount||0,activeAssignment:se.activeAssignment||!1,discordUsername:se.discordUsername||"",email:se.email||"",phoneNumber:se.phoneNumber||"",avatar:`https://api.boelguard.me/assets/headshot?name=${se.username}.jpg`}));ee.sort((he,se)=>he.isResponsible&&!se.isResponsible?-1:!he.isResponsible&&se.isResponsible?1:he.username.localeCompare(se.username)),i(ee)});return()=>_e()},[]);const M=async(U,_e=[])=>{if(!s)return;const xe=Jm(Zm,`users/${s.id}`);await SS(xe,{checkInStatus:!0,checkedInWhere:U,checkedInAt:Date.now(),username:s.username,firstname:s.name?.split(" ")[0]??"",lastname:s.name?.split(" ")[1]??"",friendCount:_e.length,activeAssignment:!1,isResponsible:!1})},O=n.filter(U=>{const _e=U.name.toLowerCase().includes(a.toLowerCase())||U.username.toLowerCase().includes(a.toLowerCase()),xe=d==="ALL"||U.location===d;return _e&&xe}),re=U=>R.find(_e=>_e.id===U),D=U=>{const xe=Math.floor((new Date().getTime()-U.getTime())/(1e3*60));if(xe<1)return"Just now";if(xe<60)return`${xe}m ago`;const Me=Math.floor(xe/60);return Me<24?`${Me}h ago`:`${Math.floor(Me/24)}d ago`},q=n.find(U=>U.id===s?.id),ne=U=>{T(U)},de=()=>{T(null)};return x?p.jsx(uI,{onBack:()=>v(!1)}):p.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 pb-20",children:[p.jsx("header",{className:"bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700",children:p.jsx("div",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8",children:p.jsxs("div",{className:"flex justify-between items-center py-3 sm:py-4",children:[p.jsxs("div",{className:"flex items-center space-x-3 sm:space-x-4",children:[p.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center",children:p.jsx(Di,{className:"w-6 h-6 text-white"})}),p.jsxs("div",{className:"min-w-0 flex-1",children:[p.jsx("h1",{className:"text-xl sm:text-2xl font-bold text-gray-900 dark:text-white",children:"Check-ins"}),p.jsxs("p",{className:"text-gray-600 dark:text-gray-300 text-sm sm:text-base truncate",children:[O.length," users checked in"]})]})]}),p.jsxs("div",{className:"flex items-center space-x-2 sm:space-x-3",children:[p.jsx(ye,{variant:"ghost",size:"sm",className:"hidden sm:flex",children:p.jsx(HS,{className:"w-5 h-5"})}),p.jsx(ye,{variant:"ghost",size:"sm",className:"hidden sm:flex",children:p.jsx(eI,{className:"w-5 h-5"})}),p.jsxs(ye,{onClick:e,variant:"outline",size:"sm",className:"hidden sm:flex",children:[p.jsx(tg,{className:"w-4 h-4 mr-2"}),p.jsx("span",{children:"Logout"})]}),p.jsx(ye,{onClick:e,variant:"outline",size:"sm",className:"sm:hidden",children:p.jsx(tg,{className:"w-4 h-4"})})]})]})})}),w&&p.jsx(dI,{user:w,onClose:de}),p.jsxs("main",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8",children:[q&&p.jsx("div",{className:"mb-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800",children:p.jsxs("div",{className:"flex items-center space-x-3",children:[p.jsx("div",{className:`w-3 h-3 rounded-full ${re(q.location)?.color}`}),p.jsxs("div",{className:"flex-1",children:[p.jsxs("p",{className:"text-sm font-medium text-gray-900 dark:text-white",children:["You're checked in at ",re(q.location)?.name]}),p.jsxs("p",{className:"text-xs text-gray-600 dark:text-gray-300",children:[D(q.checkedInAt),(q.friendCount??0)>0&&p.jsxs("span",{className:"ml-2",children:["• With ",q.friendCount," friend",(q.friendCount??0)>1?"s":""]})]})]})]})}),p.jsxs("div",{className:"mb-6 space-y-4",children:[p.jsxs("div",{className:"relative",children:[p.jsx(ZS,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),p.jsx("input",{type:"text",placeholder:"Search users...",value:a,onChange:U=>c(U.target.value),className:"w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"})]}),p.jsxs("div",{className:"flex space-x-2 overflow-x-auto pb-2",children:[p.jsx("button",{onClick:()=>f("ALL"),className:`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${d==="ALL"?"bg-blue-500 text-white":"bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"}`,children:"All Locations"}),R.map(U=>p.jsx("button",{onClick:()=>f(U.id),className:`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${d===U.id?`${U.color} text-white`:"bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"}`,children:U.name},U.id))]})]}),p.jsx("div",{className:"space-y-3",children:O.length===0?p.jsxs("div",{className:"text-center py-12",children:[p.jsx(Di,{className:"w-12 h-12 text-gray-400 mx-auto mb-4"}),p.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"No users found"}),p.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:a?"Try adjusting your search terms":"No users are currently checked in"})]}):O.map(U=>{const _e=re(U.location);return p.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer",onClick:()=>ne(U),children:p.jsxs("div",{className:"flex items-center space-x-4",children:[p.jsx("img",{src:U.avatar,alt:`${U.name}'s avatar`,onError:xe=>xe.currentTarget.src="https://via.placeholder.com/150",className:"w-12 h-12 rounded-full"}),p.jsxs("div",{className:"flex-1 min-w-0",children:[p.jsxs("div",{className:"flex items-center space-x-2 mb-1",children:[p.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white truncate",children:U.name}),U.id===s?.id&&p.jsx("span",{className:"px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full",children:"You"})]}),p.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-300 mb-2",children:["@",U.username]}),p.jsxs("div",{className:"flex items-center space-x-4 text-sm",children:[p.jsxs("div",{className:"flex items-center space-x-2",children:[p.jsx("div",{className:`w-2 h-2 rounded-full ${_e?.color}`}),p.jsx("span",{className:"text-gray-600 dark:text-gray-300",children:_e?.name})]}),p.jsxs("div",{className:"flex items-center space-x-1 text-gray-500 dark:text-gray-400",children:[p.jsx(Ai,{className:"w-4 h-4"}),p.jsx("span",{children:D(U.checkedInAt)})]})]}),(U.friendCount??0)>0&&p.jsxs("div",{className:"flex items-center space-x-1 mt-2 text-sm text-gray-500 dark:text-gray-400",children:[p.jsx(Ya,{className:"w-4 h-4"}),p.jsxs("span",{children:["With ",U.friendCount," friend",(U.friendCount??0)>1?"s":""]})]})]})]})},`${U.id}-${U.checkedInAt.getTime()}`)})})]}),p.jsx(aI,{onCheckIn:M,onShowQR:()=>_(!0),onOpenFridge:()=>v(!0)}),p.jsx(lI,{isOpen:m,onClose:()=>_(!1)})]})},fI=()=>{const[s,e]=K.useState(new Date),n=[{id:"1",title:"Web Development Workshop",responsibles:["Alice Johnson","Bob Smith"],time:"09:00 - 12:00",location:"PXL",date:new Date(2025,0,13)},{id:"2",title:"Database Design Meeting",responsibles:["Carol Davis"],time:"14:00 - 16:00",location:"RBGH",date:new Date(2025,0,13)},{id:"3",title:"Mobile App Testing",responsibles:["David Wilson","Eva Brown"],time:"10:00 - 11:30",location:"STREAM",date:new Date(2025,0,15)},{id:"4",title:"Project Presentation",responsibles:["Alice Johnson","Carol Davis","Frank Miller"],time:"13:00 - 15:00",location:"PXL",date:new Date(2025,0,17)},{id:"5",title:"Code Review Session",responsibles:["Bob Smith"],time:"16:00 - 17:00",location:"RBGH",date:new Date(2025,0,20)}],i={PXL:{name:"PXL Campus",color:"bg-blue-500"},RBGH:{name:"RBGH Center",color:"bg-green-500"},STREAM:{name:"STREAM Hub",color:"bg-purple-500"}},c=(T=>{const R=[],M=new Date(T),O=M.getDay(),re=M.getDate()-O+(O===0?-6:1);M.setDate(re);for(let D=0;D<7;D++){const q=new Date(M);q.setDate(M.getDate()+D),R.push(q)}return R})(s),d=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],f=()=>{const T=new Date(s);T.setDate(s.getDate()-7),e(T)},m=()=>{const T=new Date(s);T.setDate(s.getDate()+7),e(T)},_=()=>{e(new Date)},x=T=>n.filter(R=>R.date.toDateString()===T.toDateString()),v=T=>{const R=new Date;return T.toDateString()===R.toDateString()},w=T=>T.toLocaleDateString("en-US",{month:"long",year:"numeric"});return p.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 pb-20",children:[p.jsx("header",{className:"bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700",children:p.jsx("div",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8",children:p.jsxs("div",{className:"flex justify-between items-center py-3 sm:py-4",children:[p.jsxs("div",{className:"flex items-center space-x-3 sm:space-x-4",children:[p.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center",children:p.jsx(Pd,{className:"w-6 h-6 text-white"})}),p.jsxs("div",{className:"min-w-0 flex-1",children:[p.jsx("h1",{className:"text-xl sm:text-2xl font-bold text-gray-900 dark:text-white",children:"Calendar"}),p.jsx("p",{className:"text-gray-600 dark:text-gray-300 text-sm sm:text-base",children:w(s)})]})]}),p.jsx(ye,{onClick:_,variant:"outline",size:"sm",children:"Today"})]})})}),p.jsxs("main",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8",children:[p.jsxs("div",{className:"flex items-center justify-between mb-6",children:[p.jsx(ye,{onClick:f,variant:"ghost",size:"sm",children:p.jsx($S,{className:"w-5 h-5"})}),p.jsx("div",{className:"text-center",children:p.jsxs("h2",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:[c[0].toLocaleDateString("en-US",{month:"short",day:"numeric"})," - ",c[6].toLocaleDateString("en-US",{month:"short",day:"numeric"})]})}),p.jsx(ye,{onClick:m,variant:"ghost",size:"sm",children:p.jsx(GS,{className:"w-5 h-5"})})]}),p.jsx("div",{className:"grid grid-cols-7 gap-1 sm:gap-2 mb-4",children:d.map((T,R)=>p.jsxs("div",{className:"text-center py-2",children:[p.jsx("div",{className:"text-sm font-medium text-gray-600 dark:text-gray-300 mb-1",children:T}),p.jsx("div",{className:`text-lg font-semibold rounded-lg py-2 ${v(c[R])?"bg-blue-500 text-white":"text-gray-900 dark:text-white"}`,children:c[R].getDate()})]},T))}),p.jsx("div",{className:"grid grid-cols-7 gap-1 sm:gap-4",children:c.map((T,R)=>{const M=x(T);return p.jsx("div",{className:"space-y-2",children:M.length===0?p.jsx("div",{className:"h-20"}):M.map(O=>p.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-2 sm:p-3 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow",children:[p.jsxs("div",{className:"flex items-start space-x-2 mb-2",children:[p.jsx("div",{className:`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${i[O.location].color} mt-1 flex-shrink-0`}),p.jsx("div",{className:"min-w-0 flex-1",children:p.jsx("h3",{className:"text-xs sm:text-sm font-semibold text-gray-900 dark:text-white line-clamp-2",children:O.title})})]}),p.jsxs("div",{className:"space-y-1 text-xs text-gray-600 dark:text-gray-300 hidden sm:block",children:[p.jsxs("div",{className:"flex items-center space-x-1",children:[p.jsx(Ai,{className:"w-3 h-3"}),p.jsx("span",{children:O.time})]}),p.jsxs("div",{className:"flex items-center space-x-1",children:[p.jsx(Di,{className:"w-3 h-3"}),p.jsx("span",{children:i[O.location].name})]}),p.jsxs("div",{className:"flex items-center space-x-1",children:[p.jsx(Ya,{className:"w-3 h-3"}),p.jsx("span",{className:"truncate",children:O.responsibles.length===1?O.responsibles[0]:`${O.responsibles[0]} +${O.responsibles.length-1}`})]})]}),p.jsx("div",{className:"sm:hidden text-xs text-gray-600 dark:text-gray-300",children:p.jsxs("div",{className:"flex items-center space-x-1",children:[p.jsx(Ai,{className:"w-3 h-3"}),p.jsx("span",{children:O.time.split(" - ")[0]})]})})]},O.id))},R)})})]})]})},pI=()=>{const[s,e]=K.useState("todo"),n=[{id:"1",title:"Web Development Workshop",responsibles:["Alice Johnson","Bob Smith"],time:"09:00 - 12:00",date:new Date(2025,0,13),location:"PXL",completed:!1},{id:"2",title:"Database Design Meeting",responsibles:["Carol Davis"],time:"14:00 - 16:00",date:new Date(2025,0,13),location:"RBGH",completed:!1},{id:"3",title:"Mobile App Testing",responsibles:["David Wilson","Eva Brown"],time:"10:00 - 11:30",date:new Date(2025,0,15),location:"STREAM",completed:!1},{id:"4",title:"React Components Workshop",responsibles:["Alice Johnson"],time:"13:00 - 16:00",date:new Date(2025,0,10),location:"PXL",completed:!0,visitors:24,remarks:"Great turnout! Students were very engaged with the hands-on exercises. Need to prepare more advanced examples for next time."},{id:"5",title:"Database Optimization Seminar",responsibles:["Bob Smith","Carol Davis"],time:"09:00 - 12:00",date:new Date(2025,0,8),location:"RBGH",completed:!0,visitors:18,remarks:"Technical session went well. Some students struggled with complex queries, consider adding a prerequisite course."},{id:"6",title:"UI/UX Design Principles",responsibles:["Eva Brown"],time:"14:00 - 17:00",date:new Date(2025,0,5),location:"STREAM",completed:!0,visitors:31,remarks:"Excellent feedback from participants. The design thinking exercises were particularly well received. Room was at capacity."}],i={PXL:{name:"PXL Campus",color:"bg-blue-500"},RBGH:{name:"RBGH Center",color:"bg-green-500"},STREAM:{name:"STREAM Hub",color:"bg-purple-500"}},a=n.filter(_=>!_.completed),c=n.filter(_=>_.completed),d=_=>{const x=new Date,v=new Date(x);return v.setDate(x.getDate()+1),_.toDateString()===x.toDateString()?"Today":_.toDateString()===v.toDateString()?"Tomorrow":_.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"})},f=_=>{const x=new Date;x.setHours(0,0,0,0);const v=new Date(_);return v.setHours(0,0,0,0),v<x},m=({assignment:_,showVisitors:x=!1})=>p.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow",children:p.jsxs("div",{className:"flex items-start space-x-3 mb-3",children:[p.jsx("div",{className:`w-4 h-4 rounded-full ${i[_.location].color} mt-1 flex-shrink-0`}),p.jsxs("div",{className:"flex-1 min-w-0",children:[p.jsxs("div",{className:"flex items-start justify-between mb-2",children:[p.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white line-clamp-2 flex-1",children:_.title}),!_.completed&&f(_.date)&&p.jsx("span",{className:"ml-2 px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 text-xs rounded-full whitespace-nowrap",children:"Overdue"})]}),p.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-300",children:[p.jsxs("div",{className:"flex items-center space-x-2",children:[p.jsx(Pd,{className:"w-4 h-4"}),p.jsx("span",{children:d(_.date)})]}),p.jsxs("div",{className:"flex items-center space-x-2",children:[p.jsx(Ai,{className:"w-4 h-4"}),p.jsx("span",{children:_.time})]}),p.jsxs("div",{className:"flex items-center space-x-2",children:[p.jsx(Di,{className:"w-4 h-4"}),p.jsx("span",{children:i[_.location].name})]}),p.jsxs("div",{className:"flex items-center space-x-2",children:[p.jsx(Ya,{className:"w-4 h-4"}),p.jsx("span",{className:"truncate",children:_.responsibles.length===1?_.responsibles[0]:`${_.responsibles[0]} +${_.responsibles.length-1}`})]})]}),x&&_.visitors!==void 0&&p.jsxs("div",{className:"mt-3 pt-3 border-t border-gray-200 dark:border-gray-600",children:[p.jsx("div",{className:"flex items-center space-x-4 text-sm",children:p.jsxs("div",{className:"flex items-center space-x-2 text-gray-600 dark:text-gray-300",children:[p.jsx(Ad,{className:"w-4 h-4"}),p.jsxs("span",{children:[_.visitors," visitors"]})]})}),_.remarks&&p.jsx("div",{className:"mt-2",children:p.jsxs("div",{className:"flex items-start space-x-2",children:[p.jsx(XS,{className:"w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0"}),p.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 leading-relaxed",children:_.remarks})]})})]})]})]})});return p.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 pb-20",children:[p.jsx("header",{className:"bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700",children:p.jsx("div",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8",children:p.jsx("div",{className:"flex justify-between items-center py-3 sm:py-4",children:p.jsxs("div",{className:"flex items-center space-x-3 sm:space-x-4",children:[p.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center",children:p.jsx(ca,{className:"w-6 h-6 text-white"})}),p.jsxs("div",{className:"min-w-0 flex-1",children:[p.jsx("h1",{className:"text-xl sm:text-2xl font-bold text-gray-900 dark:text-white",children:"Assignments"}),p.jsx("p",{className:"text-gray-600 dark:text-gray-300 text-sm sm:text-base",children:s==="todo"?`${a.length} pending`:`${c.length} completed`})]})]})})})}),p.jsxs("main",{className:"max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8",children:[p.jsxs("div",{className:"flex space-x-1 mb-6 bg-gray-100 dark:bg-gray-800 rounded-lg p-1",children:[p.jsxs("button",{onClick:()=>e("todo"),className:`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${s==="todo"?"bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm":"text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"}`,children:["To Do (",a.length,")"]}),p.jsxs("button",{onClick:()=>e("finished"),className:`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${s==="finished"?"bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm":"text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"}`,children:["Finished (",c.length,")"]})]}),p.jsx("div",{className:"space-y-4",children:s==="todo"?a.length===0?p.jsxs("div",{className:"text-center py-12",children:[p.jsx(ca,{className:"w-12 h-12 text-gray-400 mx-auto mb-4"}),p.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"No pending assignments"}),p.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:"All assignments are completed. Great job!"})]}):a.sort((_,x)=>_.date.getTime()-x.date.getTime()).map(_=>p.jsx(m,{assignment:_},_.id)):c.length===0?p.jsxs("div",{className:"text-center py-12",children:[p.jsx(ca,{className:"w-12 h-12 text-gray-400 mx-auto mb-4"}),p.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-2",children:"No completed assignments"}),p.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:"Completed assignments will appear here."})]}):c.sort((_,x)=>x.date.getTime()-_.date.getTime()).map(_=>p.jsx(m,{assignment:_,showVisitors:!0},_.id))})]})]})},mI=({activeView:s,onViewChange:e})=>{const n=[{id:"home",label:"Home",icon:YS},{id:"calendar",label:"Calendar",icon:Pd},{id:"assignments",label:"Assignments",icon:ca}];return p.jsx("nav",{className:"fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 z-40",children:p.jsx("div",{className:"max-w-7xl mx-auto px-4",children:p.jsx("div",{className:"flex justify-around",children:n.map(i=>{const a=i.icon,c=s===i.id;return p.jsxs("button",{onClick:()=>e(i.id),className:`flex flex-col items-center py-3 px-4 transition-colors ${c?"text-blue-600 dark:text-blue-400":"text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"}`,"aria-label":i.label,children:[p.jsx(a,{className:`w-6 h-6 mb-1 ${c?"text-blue-600 dark:text-blue-400":""}`}),p.jsx("span",{className:`text-xs font-medium ${c?"text-blue-600 dark:text-blue-400":""}`,children:i.label})]},i.id)})})})})};function gI(){const{isAuthenticated:s}=Ka(),[e,n]=K.useState("login"),[i,a]=K.useState("home");if(s)return p.jsxs(p.Fragment,{children:[i==="home"&&p.jsx(hI,{}),i==="calendar"&&p.jsx(fI,{}),i==="assignments"&&p.jsx(pI,{}),p.jsx(mI,{activeView:i,onViewChange:a})]});switch(e){case"forgot-password":return p.jsx(oI,{onBackToLogin:()=>n("login")});case"login":default:return p.jsx(iI,{onForgotPassword:()=>n("forgot-password")})}}const _I=K.createContext(void 0),yI=({children:s})=>{const[e,n]=K.useState(()=>{const c=localStorage.getItem("theme");return c||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")});K.useEffect(()=>{const c=window.document.documentElement;e==="dark"?c.classList.add("dark"):c.classList.remove("dark"),localStorage.setItem("theme",e)},[e]);const i=()=>{n(c=>c==="light"?"dark":"light")},a=c=>{n(c)};return p.jsx(_I.Provider,{value:{theme:e,toggleTheme:i,setTheme:a},children:s})};x0.createRoot(document.getElementById("root")).render(p.jsx(K.StrictMode,{children:p.jsx(yI,{children:p.jsx(gI,{})})}));
