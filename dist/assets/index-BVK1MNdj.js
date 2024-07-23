import{r as S,a as Np,t as kp,R as kt}from"./react-CcEMKvrb.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var Su={exports:{}},ti={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op=S,Dp=Symbol.for("react.element"),Vp=Symbol.for("react.fragment"),Lp=Object.prototype.hasOwnProperty,Mp=Op.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jp={key:!0,ref:!0,__self:!0,__source:!0};function Pu(n,e,t){var r,s={},i=null,a=null;t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)Lp.call(e,r)&&!jp.hasOwnProperty(r)&&(s[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:Dp,type:n,key:i,ref:a,props:s,_owner:Mp.current}}ti.Fragment=Vp;ti.jsx=Pu;ti.jsxs=Pu;Su.exports=ti;var f=Su.exports,mo={},Wl=Np;mo.createRoot=Wl.createRoot,mo.hydrateRoot=Wl.hydrateRoot;/**
 * @remix-run/router v1.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ar(){return Ar=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Ar.apply(this,arguments)}var Ct;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Ct||(Ct={}));const Gl="popstate";function Up(n){n===void 0&&(n={});function e(r,s){let{pathname:i,search:a,hash:l}=r.location;return go("",{pathname:i,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function t(r,s){return typeof s=="string"?s:Ns(s)}return Bp(e,t,null,n)}function le(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Cu(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Fp(){return Math.random().toString(36).substr(2,8)}function Kl(n,e){return{usr:n.state,key:n.key,idx:e}}function go(n,e,t,r){return t===void 0&&(t=null),Ar({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Mn(e):e,{state:t,key:e&&e.key||r||Fp()})}function Ns(n){let{pathname:e="/",search:t="",hash:r=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Mn(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substr(r),n=n.substr(0,r)),n&&(e.pathname=n)}return e}function Bp(n,e,t,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,a=s.history,l=Ct.Pop,c=null,h=p();h==null&&(h=0,a.replaceState(Ar({},a.state,{idx:h}),""));function p(){return(a.state||{idx:null}).idx}function g(){l=Ct.Pop;let R=p(),V=R==null?null:R-h;h=R,c&&c({action:l,location:N.location,delta:V})}function w(R,V){l=Ct.Push;let j=go(N.location,R,V);h=p()+1;let L=Kl(j,h),B=N.createHref(j);try{a.pushState(L,"",B)}catch(ee){if(ee instanceof DOMException&&ee.name==="DataCloneError")throw ee;s.location.assign(B)}i&&c&&c({action:l,location:N.location,delta:1})}function x(R,V){l=Ct.Replace;let j=go(N.location,R,V);h=p();let L=Kl(j,h),B=N.createHref(j);a.replaceState(L,"",B),i&&c&&c({action:l,location:N.location,delta:0})}function C(R){let V=s.location.origin!=="null"?s.location.origin:s.location.href,j=typeof R=="string"?R:Ns(R);return j=j.replace(/ $/,"%20"),le(V,"No window.location.(origin|href) available to create URL for href: "+j),new URL(j,V)}let N={get action(){return l},get location(){return n(s,a)},listen(R){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(Gl,g),c=R,()=>{s.removeEventListener(Gl,g),c=null}},createHref(R){return e(s,R)},createURL:C,encodeLocation(R){let V=C(R);return{pathname:V.pathname,search:V.search,hash:V.hash}},push:w,replace:x,go(R){return a.go(R)}};return N}var Ql;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Ql||(Ql={}));function qp(n,e,t){return t===void 0&&(t="/"),$p(n,e,t,!1)}function $p(n,e,t,r){let s=typeof e=="string"?Mn(e):e,i=$o(s.pathname||"/",t);if(i==null)return null;let a=Nu(n);zp(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let h=tm(i);l=Zp(a[c],h,r)}return l}function Nu(n,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let s=(i,a,l)=>{let c={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};c.relativePath.startsWith("/")&&(le(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let h=Ot([r,c.relativePath]),p=t.concat(c);i.children&&i.children.length>0&&(le(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),Nu(i.children,e,p,h)),!(i.path==null&&!i.index)&&e.push({path:h,score:Yp(h,i.index),routesMeta:p})};return n.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))s(i,a);else for(let c of ku(i.path))s(i,a,c)}),e}function ku(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,s=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let a=ku(r.join("/")),l=[];return l.push(...a.map(c=>c===""?i:[i,c].join("/"))),s&&l.push(...a),l.map(c=>n.startsWith("/")&&c===""?"/":c)}function zp(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:Jp(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const Hp=/^:[\w-]+$/,Wp=3,Gp=2,Kp=1,Qp=10,Xp=-2,Xl=n=>n==="*";function Yp(n,e){let t=n.split("/"),r=t.length;return t.some(Xl)&&(r+=Xp),e&&(r+=Gp),t.filter(s=>!Xl(s)).reduce((s,i)=>s+(Hp.test(i)?Wp:i===""?Kp:Qp),r)}function Jp(n,e){return n.length===e.length&&n.slice(0,-1).every((r,s)=>r===e[s])?n[n.length-1]-e[e.length-1]:0}function Zp(n,e,t){let{routesMeta:r}=n,s={},i="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],h=l===r.length-1,p=i==="/"?e:e.slice(i.length)||"/",g=Yl({path:c.relativePath,caseSensitive:c.caseSensitive,end:h},p),w=c.route;if(!g&&h&&t&&!r[r.length-1].route.index&&(g=Yl({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},p)),!g)return null;Object.assign(s,g.params),a.push({params:s,pathname:Ot([i,g.pathname]),pathnameBase:im(Ot([i,g.pathnameBase])),route:w}),g.pathnameBase!=="/"&&(i=Ot([i,g.pathnameBase]))}return a}function Yl(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=em(n.path,n.caseSensitive,n.end),s=e.match(t);if(!s)return null;let i=s[0],a=i.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:r.reduce((h,p,g)=>{let{paramName:w,isOptional:x}=p;if(w==="*"){let N=l[g]||"";a=i.slice(0,i.length-N.length).replace(/(.)\/+$/,"$1")}const C=l[g];return x&&!C?h[w]=void 0:h[w]=(C||"").replace(/%2F/g,"/"),h},{}),pathname:i,pathnameBase:a,pattern:n}}function em(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Cu(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let r=[],s="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),s+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":n!==""&&n!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function tm(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Cu(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function $o(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function nm(n,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:s=""}=typeof n=="string"?Mn(n):n;return{pathname:t?t.startsWith("/")?t:rm(t,e):e,search:om(r),hash:am(s)}}function rm(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function Xi(n,e,t,r){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function sm(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function zo(n,e){let t=sm(n);return e?t.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Ho(n,e,t,r){r===void 0&&(r=!1);let s;typeof n=="string"?s=Mn(n):(s=Ar({},n),le(!s.pathname||!s.pathname.includes("?"),Xi("?","pathname","search",s)),le(!s.pathname||!s.pathname.includes("#"),Xi("#","pathname","hash",s)),le(!s.search||!s.search.includes("#"),Xi("#","search","hash",s)));let i=n===""||s.pathname==="",a=i?"/":s.pathname,l;if(a==null)l=t;else{let g=e.length-1;if(!r&&a.startsWith("..")){let w=a.split("/");for(;w[0]==="..";)w.shift(),g-=1;s.pathname=w.join("/")}l=g>=0?e[g]:"/"}let c=nm(s,l),h=a&&a!=="/"&&a.endsWith("/"),p=(i||a===".")&&t.endsWith("/");return!c.pathname.endsWith("/")&&(h||p)&&(c.pathname+="/"),c}const Ot=n=>n.join("/").replace(/\/\/+/g,"/"),im=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),om=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,am=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function lm(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const Ou=["post","put","patch","delete"];new Set(Ou);const cm=["get",...Ou];new Set(cm);/**
 * React Router v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rr(){return Rr=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Rr.apply(this,arguments)}const Wo=S.createContext(null),um=S.createContext(null),Bt=S.createContext(null),ni=S.createContext(null),qt=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Du=S.createContext(null);function hm(n,e){let{relative:t}=e===void 0?{}:e;jn()||le(!1);let{basename:r,navigator:s}=S.useContext(Bt),{hash:i,pathname:a,search:l}=Lu(n,{relative:t}),c=a;return r!=="/"&&(c=a==="/"?r:Ot([r,a])),s.createHref({pathname:c,search:l,hash:i})}function jn(){return S.useContext(ni)!=null}function Un(){return jn()||le(!1),S.useContext(ni).location}function Vu(n){S.useContext(Bt).static||S.useLayoutEffect(n)}function ft(){let{isDataRoute:n}=S.useContext(qt);return n?bm():dm()}function dm(){jn()||le(!1);let n=S.useContext(Wo),{basename:e,future:t,navigator:r}=S.useContext(Bt),{matches:s}=S.useContext(qt),{pathname:i}=Un(),a=JSON.stringify(zo(s,t.v7_relativeSplatPath)),l=S.useRef(!1);return Vu(()=>{l.current=!0}),S.useCallback(function(h,p){if(p===void 0&&(p={}),!l.current)return;if(typeof h=="number"){r.go(h);return}let g=Ho(h,JSON.parse(a),i,p.relative==="path");n==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:Ot([e,g.pathname])),(p.replace?r.replace:r.push)(g,p.state,p)},[e,r,a,i,n])}function Lu(n,e){let{relative:t}=e===void 0?{}:e,{future:r}=S.useContext(Bt),{matches:s}=S.useContext(qt),{pathname:i}=Un(),a=JSON.stringify(zo(s,r.v7_relativeSplatPath));return S.useMemo(()=>Ho(n,JSON.parse(a),i,t==="path"),[n,a,i,t])}function fm(n,e){return pm(n,e)}function pm(n,e,t,r){jn()||le(!1);let{navigator:s}=S.useContext(Bt),{matches:i}=S.useContext(qt),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let h=Un(),p;if(e){var g;let R=typeof e=="string"?Mn(e):e;c==="/"||(g=R.pathname)!=null&&g.startsWith(c)||le(!1),p=R}else p=h;let w=p.pathname||"/",x=w;if(c!=="/"){let R=c.replace(/^\//,"").split("/");x="/"+w.replace(/^\//,"").split("/").slice(R.length).join("/")}let C=qp(n,{pathname:x}),N=vm(C&&C.map(R=>Object.assign({},R,{params:Object.assign({},l,R.params),pathname:Ot([c,s.encodeLocation?s.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?c:Ot([c,s.encodeLocation?s.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),i,t,r);return e&&N?S.createElement(ni.Provider,{value:{location:Rr({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Ct.Pop}},N):N}function mm(){let n=Im(),e=lm(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),t?S.createElement("pre",{style:s},t):null,null)}const gm=S.createElement(mm,null);class _m extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?S.createElement(qt.Provider,{value:this.props.routeContext},S.createElement(Du.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ym(n){let{routeContext:e,match:t,children:r}=n,s=S.useContext(Wo);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),S.createElement(qt.Provider,{value:e},r)}function vm(n,e,t,r){var s;if(e===void 0&&(e=[]),t===void 0&&(t=null),r===void 0&&(r=null),n==null){var i;if((i=t)!=null&&i.errors)n=t.matches;else return null}let a=n,l=(s=t)==null?void 0:s.errors;if(l!=null){let p=a.findIndex(g=>g.route.id&&(l==null?void 0:l[g.route.id])!==void 0);p>=0||le(!1),a=a.slice(0,Math.min(a.length,p+1))}let c=!1,h=-1;if(t&&r&&r.v7_partialHydration)for(let p=0;p<a.length;p++){let g=a[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(h=p),g.route.id){let{loaderData:w,errors:x}=t,C=g.route.loader&&w[g.route.id]===void 0&&(!x||x[g.route.id]===void 0);if(g.route.lazy||C){c=!0,h>=0?a=a.slice(0,h+1):a=[a[0]];break}}}return a.reduceRight((p,g,w)=>{let x,C=!1,N=null,R=null;t&&(x=l&&g.route.id?l[g.route.id]:void 0,N=g.route.errorElement||gm,c&&(h<0&&w===0?(C=!0,R=null):h===w&&(C=!0,R=g.route.hydrateFallbackElement||null)));let V=e.concat(a.slice(0,w+1)),j=()=>{let L;return x?L=N:C?L=R:g.route.Component?L=S.createElement(g.route.Component,null):g.route.element?L=g.route.element:L=p,S.createElement(ym,{match:g,routeContext:{outlet:p,matches:V,isDataRoute:t!=null},children:L})};return t&&(g.route.ErrorBoundary||g.route.errorElement||w===0)?S.createElement(_m,{location:t.location,revalidation:t.revalidation,component:N,error:x,children:j(),routeContext:{outlet:null,matches:V,isDataRoute:!0}}):j()},null)}var Mu=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(Mu||{}),ks=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(ks||{});function wm(n){let e=S.useContext(Wo);return e||le(!1),e}function Em(n){let e=S.useContext(um);return e||le(!1),e}function Tm(n){let e=S.useContext(qt);return e||le(!1),e}function ju(n){let e=Tm(),t=e.matches[e.matches.length-1];return t.route.id||le(!1),t.route.id}function Im(){var n;let e=S.useContext(Du),t=Em(ks.UseRouteError),r=ju(ks.UseRouteError);return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function bm(){let{router:n}=wm(Mu.UseNavigateStable),e=ju(ks.UseNavigateStable),t=S.useRef(!1);return Vu(()=>{t.current=!0}),S.useCallback(function(s,i){i===void 0&&(i={}),t.current&&(typeof s=="number"?n.navigate(s):n.navigate(s,Rr({fromRouteId:e},i)))},[n,e])}function Go(n){let{to:e,replace:t,state:r,relative:s}=n;jn()||le(!1);let{future:i,static:a}=S.useContext(Bt),{matches:l}=S.useContext(qt),{pathname:c}=Un(),h=ft(),p=Ho(e,zo(l,i.v7_relativeSplatPath),c,s==="path"),g=JSON.stringify(p);return S.useEffect(()=>h(JSON.parse(g),{replace:t,state:r,relative:s}),[h,g,s,t,r]),null}function he(n){le(!1)}function Am(n){let{basename:e="/",children:t=null,location:r,navigationType:s=Ct.Pop,navigator:i,static:a=!1,future:l}=n;jn()&&le(!1);let c=e.replace(/^\/*/,"/"),h=S.useMemo(()=>({basename:c,navigator:i,static:a,future:Rr({v7_relativeSplatPath:!1},l)}),[c,l,i,a]);typeof r=="string"&&(r=Mn(r));let{pathname:p="/",search:g="",hash:w="",state:x=null,key:C="default"}=r,N=S.useMemo(()=>{let R=$o(p,c);return R==null?null:{location:{pathname:R,search:g,hash:w,state:x,key:C},navigationType:s}},[c,p,g,w,x,C,s]);return N==null?null:S.createElement(Bt.Provider,{value:h},S.createElement(ni.Provider,{children:t,value:N}))}function Rm(n){let{children:e,location:t}=n;return fm(_o(e),t)}new Promise(()=>{});function _o(n,e){e===void 0&&(e=[]);let t=[];return S.Children.forEach(n,(r,s)=>{if(!S.isValidElement(r))return;let i=[...e,s];if(r.type===S.Fragment){t.push.apply(t,_o(r.props.children,i));return}r.type!==he&&le(!1),!r.props.index||!r.props.children||le(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=_o(r.props.children,i)),t.push(a)}),t}/**
 * React Router DOM v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yo(){return yo=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},yo.apply(this,arguments)}function xm(n,e){if(n==null)return{};var t={},r=Object.keys(n),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(t[s]=n[s]);return t}function Sm(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function Pm(n,e){return n.button===0&&(!e||e==="_self")&&!Sm(n)}const Cm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Nm="6";try{window.__reactRouterVersion=Nm}catch{}const km="startTransition",Jl=kp[km];function Om(n){let{basename:e,children:t,future:r,window:s}=n,i=S.useRef();i.current==null&&(i.current=Up({window:s,v5Compat:!0}));let a=i.current,[l,c]=S.useState({action:a.action,location:a.location}),{v7_startTransition:h}=r||{},p=S.useCallback(g=>{h&&Jl?Jl(()=>c(g)):c(g)},[c,h]);return S.useLayoutEffect(()=>a.listen(p),[a,p]),S.createElement(Am,{basename:e,children:t,location:l.location,navigationType:l.action,navigator:a,future:r})}const Dm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Vm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Q=S.forwardRef(function(e,t){let{onClick:r,relative:s,reloadDocument:i,replace:a,state:l,target:c,to:h,preventScrollReset:p,unstable_viewTransition:g}=e,w=xm(e,Cm),{basename:x}=S.useContext(Bt),C,N=!1;if(typeof h=="string"&&Vm.test(h)&&(C=h,Dm))try{let L=new URL(window.location.href),B=h.startsWith("//")?new URL(L.protocol+h):new URL(h),ee=$o(B.pathname,x);B.origin===L.origin&&ee!=null?h=ee+B.search+B.hash:N=!0}catch{}let R=hm(h,{relative:s}),V=Lm(h,{replace:a,state:l,target:c,preventScrollReset:p,relative:s,unstable_viewTransition:g});function j(L){r&&r(L),L.defaultPrevented||V(L)}return S.createElement("a",yo({},w,{href:C||R,onClick:N||i?r:j,ref:t,target:c}))});var Zl;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(Zl||(Zl={}));var ec;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(ec||(ec={}));function Lm(n,e){let{target:t,replace:r,state:s,preventScrollReset:i,relative:a,unstable_viewTransition:l}=e===void 0?{}:e,c=ft(),h=Un(),p=Lu(n,{relative:a});return S.useCallback(g=>{if(Pm(g,t)){g.preventDefault();let w=r!==void 0?r:Ns(h)===Ns(p);c(n,{replace:w,state:s,preventScrollReset:i,relative:a,unstable_viewTransition:l})}},[h,c,p,r,s,t,n,i,a,l])}var Uu={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},tc=kt.createContext&&kt.createContext(Uu),Mm=["attr","size","title"];function jm(n,e){if(n==null)return{};var t=Um(n,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function Um(n,e){if(n==null)return{};var t={};for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}function Os(){return Os=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Os.apply(this,arguments)}function nc(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),t.push.apply(t,r)}return t}function Ds(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?nc(Object(t),!0).forEach(function(r){Fm(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):nc(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Fm(n,e,t){return e=Bm(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Bm(n){var e=qm(n,"string");return typeof e=="symbol"?e:e+""}function qm(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Fu(n){return n&&n.map((e,t)=>kt.createElement(e.tag,Ds({key:t},e.attr),Fu(e.child)))}function $t(n){return e=>kt.createElement($m,Os({attr:Ds({},n.attr)},e),Fu(n.child))}function $m(n){var e=t=>{var{attr:r,size:s,title:i}=n,a=jm(n,Mm),l=s||t.size||"1em",c;return t.className&&(c=t.className),n.className&&(c=(c?c+" ":"")+n.className),kt.createElement("svg",Os({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,a,{className:c,style:Ds(Ds({color:n.color||t.color},t.style),n.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),i&&kt.createElement("title",null,i),n.children)};return tc!==void 0?kt.createElement(tc.Consumer,null,t=>e(t)):e(Uu)}function Ko(n){return $t({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z",clipRule:"evenodd"},child:[]}]})(n)}function Qo(n){return $t({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"},child:[]}]})(n)}function zm(n){return $t({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"},child:[]}]})(n)}function Hm(n){return $t({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"},child:[]}]})(n)}function Wm(){const[n,e]=S.useState(!1);return f.jsx(f.Fragment,{children:f.jsxs("nav",{className:"bg-blue-800 text-white p-4 shadow-md",children:[f.jsxs("div",{className:"max-w-7xl mx-auto flex justify-between items-center",children:[f.jsx("div",{className:"logo text-2xl font-bold",children:f.jsx(Q,{to:"/",children:"EMRs"})}),f.jsxs("div",{className:"hidden md:flex space-x-6 justify-center flex-grow",children:[f.jsx(Q,{to:"/#home",className:"hover:text-yellow-300 transition duration-300",children:"HOME"}),f.jsx(Q,{to:"/#about",className:"hover:text-yellow-300 transition duration-300",children:"ABOUT"}),f.jsx(Q,{to:"/#best-practices",className:"hover:text-yellow-300 transition duration-300",children:"BEST PRACTICES"}),f.jsx(Q,{to:"/#contact",className:"hover:text-yellow-300 transition duration-300",children:"CONTACT US"})]}),f.jsx("div",{className:"hidden md:flex font-bold",children:f.jsx(Q,{to:"/training",className:"bg-blue-400 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105",target:"_blank",children:"TRAINING"})}),f.jsx("div",{className:"md:hidden",children:f.jsx("button",{onClick:()=>e(!n),children:n?f.jsx(Qo,{className:"h-6 w-6 transition duration-300"}):f.jsx(Ko,{className:"h-6 w-6 transition duration-300"})})})]}),f.jsxs("div",{className:`md:hidden flex flex-col space-y-5 transition-all duration-300 ${n?"max-h-screen opacity-100":"max-h-0 opacity-0 overflow-hidden"}`,children:[f.jsx(Q,{to:"/#home",className:"hover:text-yellow-300 mt-6 transition duration-300",children:"HOME"}),f.jsx(Q,{to:"/#about",className:"hover:text-yellow-300 transition duration-400",children:"ABOUT"}),f.jsx(Q,{to:"/#best-practices",className:"hover:text-yellow-300 transition duration-500",children:"BEST PRACTICES"}),f.jsx(Q,{to:"/#contact",className:"hover:text-yellow-300 transition duration-600",children:"CONTACT US"}),f.jsx(Q,{to:"/training",className:"bg-blue-400 text-white w-full py-2 px-6 rounded-full hover:bg-blue-600 transition duration-700 ease-in-out transform hover:scale-105",target:"_blank",children:"TRAINING"})]})]})})}const Gm="/assets/doctor-laptop-DnrqhuXa.jpg";function Km(){return f.jsxs("header",{className:"bg-blue-600 text-white py-20",id:"home",style:{backgroundImage:`url(${Gm})`},children:[f.jsx("div",{className:"absolute inset-0 bg-blue-600 opacity-75"}),f.jsxs("div",{className:"relative max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8",children:[f.jsx("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-bold mb-4",children:"ELECTRONIC MEDICAL RECORDS SECURITY"}),f.jsx("h2",{className:"text-2xl sm:text-3xl lg:text-4xl mb-6",children:"Secure Your Medical Records"}),f.jsx("p",{className:"text-lg sm:text-xl lg:text-2xl mb-8",children:"Ensuring the confidentiality, integrity, and availability of your Electronic Medical Records."}),f.jsx("a",{href:"/#about",className:"bg-yellow-300 text-white-500 py-2 px-6 rounded-full text-lg sm:text-xl lg:text-2xl hover:bg-white hover:text-blue-500 transition duration-500 shadow-lg",children:"Learn More"})]})]})}const Qm="/assets/about-D-VQ9vrM.png";function Xm(){return f.jsx("section",{className:"bg-gray-100 py-20",id:"about",children:f.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left",children:[f.jsxs("div",{className:"lg:w-2/3 mb-8 lg:mb-0",children:[f.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-blue-500",children:"About Us"}),f.jsx("p",{className:"text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed",children:"Electronic Medical Records (EMR) systems are digital versions of patients' paper charts and have become a cornerstone in modern healthcare for managing patient information. While they offer significant advantages in terms of accessibility, efficiency, and quality of care, they also present considerable security challenges. Ensuring the security of EMR systems is critical to protecting patient privacy, maintaining trust, and complying with legal and regulatory requirements."})]}),f.jsx("div",{className:"lg:w-1/3 lg:pl-8 flex justify-center lg:justify-end",children:f.jsx("img",{src:Qm,alt:"About Us",className:"w-full lg:w-full"})})]})})}function Ym(){return f.jsx("section",{className:"bg-white py-20",id:"features",children:f.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[f.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center text-blue-500",children:"Features"}),f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:[f.jsxs("div",{className:"feature-item p-6 bg-gray-100 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105",children:[f.jsx("h3",{className:"text-2xl font-bold mb-4",children:"Data Breaches"}),f.jsx("p",{children:"Protect your medical records from unauthorized access with cutting-edge encryption technologies that safeguard sensitive information."})]}),f.jsxs("div",{className:"feature-item p-6 bg-gray-100 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105",children:[f.jsx("h3",{className:"text-2xl font-bold mb-4",children:"Insider Threats"}),f.jsx("p",{children:"Implement robust access controls to ensure that only authorized personnel can access and manage sensitive medical data."})]}),f.jsxs("div",{className:"feature-item p-6 bg-gray-100 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105",children:[f.jsx("h3",{className:"text-2xl font-bold mb-4",children:"Ransomware"}),f.jsx("p",{children:"Adopt comprehensive backup and recovery solutions to mitigate the risk of ransomware attacks and ensure business continuity."})]}),f.jsxs("div",{className:"feature-item p-6 bg-gray-100 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105",children:[f.jsx("h3",{className:"text-2xl font-bold mb-4",children:"Weak Passwords"}),f.jsx("p",{children:"Enhance security by enforcing strong password policies and multi-factor authentication to protect user accounts."})]}),f.jsxs("div",{className:"feature-item p-6 bg-gray-100 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105",children:[f.jsx("h3",{className:"text-2xl font-bold mb-4",children:"Physical Theft"}),f.jsx("p",{children:"Implement physical security measures and device encryption to prevent unauthorized access to medical data from stolen devices."})]}),f.jsxs("div",{className:"feature-item p-6 bg-gray-100 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105",children:[f.jsx("h3",{className:"text-2xl font-bold mb-4",children:"Phishing Attacks"}),f.jsx("p",{children:"Educate users about phishing threats and deploy email filtering solutions to prevent malicious emails from reaching your inbox."})]})]})]})})}const Jm="/assets/best-practices-M69zq7wr.png";function Zm(){return f.jsxs("section",{className:"bg-gray-100 py-20",id:"best-practices",children:[f.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:f.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-blue-500",children:"Best Practices"})}),f.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left",children:[f.jsx("div",{className:"lg:w-1/3 mb-8 lg:mb-0 flex justify-center lg:justify-start",children:f.jsx("img",{src:Jm,alt:"Best Practices",className:"w-full lg:w-full",style:{maxWidth:"500px",height:"auto"}})}),f.jsxs("div",{className:"lg:w-2/3 lg:pl-8",children:[f.jsx("p",{className:"text-lg sm:text-xl lg:text-2xl mb-12 text-gray-700 leading-relaxed",children:"Follow these best practices to ensure the security of your EMR systems."}),f.jsxs("ul",{className:" list-disc text-center centerft mx-auto mt-8 max-w-prose space-y-4",children:[f.jsx("li",{children:"Regularly update software and systems."}),f.jsx("li",{children:"Implement strong password policies."}),f.jsx("li",{children:"Use multi-factor authentication."}),f.jsx("li",{children:"Conduct regular security audits."}),f.jsx("li",{children:"Provide ongoing security training for staff."})]})]})]})]})}var rc={};/**
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
 */const Bu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},eg=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},qu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,c=s+2<n.length,h=c?n[s+2]:0,p=i>>2,g=(i&3)<<4|l>>4;let w=(l&15)<<2|h>>6,x=h&63;c||(x=64,a||(w=64)),r.push(t[p],t[g],t[w],t[x])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Bu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):eg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||h==null||g==null)throw new tg;const w=i<<2|l>>4;if(r.push(w),h!==64){const x=l<<4&240|h>>2;if(r.push(x),g!==64){const C=h<<6&192|g;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class tg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ng=function(n){const e=Bu(n);return qu.encodeByteArray(e,!0)},Vs=function(n){return ng(n).replace(/\./g,"")},$u=function(n){try{return qu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function rg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const sg=()=>rg().__FIREBASE_DEFAULTS__,ig=()=>{if(typeof process>"u"||typeof rc>"u")return;const n=rc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},og=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&$u(n[1]);return e&&JSON.parse(e)},ri=()=>{try{return sg()||ig()||og()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},zu=n=>{var e,t;return(t=(e=ri())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Hu=n=>{const e=zu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Wu=()=>{var n;return(n=ri())===null||n===void 0?void 0:n.config},Gu=n=>{var e;return(e=ri())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class ag{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Ku(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Vs(JSON.stringify(t)),Vs(JSON.stringify(a)),""].join(".")}/**
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
 */function we(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function cg(){var n;const e=(n=ri())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Qu(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ug(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hg(){const n=we();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function dg(){return!cg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Xu(){try{return typeof indexedDB=="object"}catch{return!1}}function Yu(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}function fg(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const pg="FirebaseError";class Fe extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=pg,Object.setPrototypeOf(this,Fe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hn.prototype.create)}}class hn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?mg(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Fe(s,l,r)}}function mg(n,e){return n.replace(gg,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const gg=/\{\$([^}]+)}/g;function _g(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function xr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(sc(i)&&sc(a)){if(!xr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function sc(n){return n!==null&&typeof n=="object"}/**
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
 */function Mr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function fr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function pr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function yg(n,e){const t=new vg(n,e);return t.subscribe.bind(t)}class vg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");wg(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Yi),s.error===void 0&&(s.error=Yi),s.complete===void 0&&(s.complete=Yi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Yi(){}/**
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
 */const Eg=1e3,Tg=2,Ig=4*60*60*1e3,bg=.5;function ic(n,e=Eg,t=Tg){const r=e*Math.pow(t,n),s=Math.round(bg*r*(Math.random()-.5)*2);return Math.min(Ig,r+s)}/**
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
 */function pe(n){return n&&n._delegate?n._delegate:n}class Ue{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Xt="[DEFAULT]";/**
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
 */class Ag{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new ag;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xg(e))try{this.getOrInitializeService({instanceIdentifier:Xt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xt){return this.instances.has(e)}getOptions(e=Xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Rg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Xt){return this.component?this.component.multipleInstances?e:Xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rg(n){return n===Xt?void 0:n}function xg(n){return n.instantiationMode==="EAGER"}/**
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
 */class Sg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ag(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var G;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(G||(G={}));const Pg={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},Cg=G.INFO,Ng={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},kg=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Ng[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class si{constructor(e){this.name=e,this._logLevel=Cg,this._logHandler=kg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Pg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const Og=(n,e)=>e.some(t=>n instanceof t);let oc,ac;function Dg(){return oc||(oc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vg(){return ac||(ac=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ju=new WeakMap,vo=new WeakMap,Zu=new WeakMap,Ji=new WeakMap,Xo=new WeakMap;function Lg(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Dt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Ju.set(t,n)}).catch(()=>{}),Xo.set(e,n),e}function Mg(n){if(vo.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});vo.set(n,e)}let wo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return vo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Zu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Dt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function jg(n){wo=n(wo)}function Ug(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Zi(this),e,...t);return Zu.set(r,e.sort?e.sort():[e]),Dt(r)}:Vg().includes(n)?function(...e){return n.apply(Zi(this),e),Dt(Ju.get(this))}:function(...e){return Dt(n.apply(Zi(this),e))}}function Fg(n){return typeof n=="function"?Ug(n):(n instanceof IDBTransaction&&Mg(n),Og(n,Dg())?new Proxy(n,wo):n)}function Dt(n){if(n instanceof IDBRequest)return Lg(n);if(Ji.has(n))return Ji.get(n);const e=Fg(n);return e!==n&&(Ji.set(n,e),Xo.set(e,n)),e}const Zi=n=>Xo.get(n);function eh(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=Dt(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Dt(a.result),c.oldVersion,c.newVersion,Dt(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Bg=["get","getKey","getAll","getAllKeys","count"],qg=["put","add","delete","clear"],eo=new Map;function lc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(eo.get(e))return eo.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=qg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Bg.includes(t)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),s&&c.done]))[0]};return eo.set(e,i),i}jg(n=>({...n,get:(e,t,r)=>lc(e,t)||n.get(e,t,r),has:(e,t)=>!!lc(e,t)||n.has(e,t)}));/**
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
 */class $g{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(zg(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function zg(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Eo="@firebase/app",cc="0.10.5";/**
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
 */const tn=new si("@firebase/app"),Hg="@firebase/app-compat",Wg="@firebase/analytics-compat",Gg="@firebase/analytics",Kg="@firebase/app-check-compat",Qg="@firebase/app-check",Xg="@firebase/auth",Yg="@firebase/auth-compat",Jg="@firebase/database",Zg="@firebase/database-compat",e_="@firebase/functions",t_="@firebase/functions-compat",n_="@firebase/installations",r_="@firebase/installations-compat",s_="@firebase/messaging",i_="@firebase/messaging-compat",o_="@firebase/performance",a_="@firebase/performance-compat",l_="@firebase/remote-config",c_="@firebase/remote-config-compat",u_="@firebase/storage",h_="@firebase/storage-compat",d_="@firebase/firestore",f_="@firebase/vertexai-preview",p_="@firebase/firestore-compat",m_="firebase",g_="10.12.2";/**
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
 */const To="[DEFAULT]",__={[Eo]:"fire-core",[Hg]:"fire-core-compat",[Gg]:"fire-analytics",[Wg]:"fire-analytics-compat",[Qg]:"fire-app-check",[Kg]:"fire-app-check-compat",[Xg]:"fire-auth",[Yg]:"fire-auth-compat",[Jg]:"fire-rtdb",[Zg]:"fire-rtdb-compat",[e_]:"fire-fn",[t_]:"fire-fn-compat",[n_]:"fire-iid",[r_]:"fire-iid-compat",[s_]:"fire-fcm",[i_]:"fire-fcm-compat",[o_]:"fire-perf",[a_]:"fire-perf-compat",[l_]:"fire-rc",[c_]:"fire-rc-compat",[u_]:"fire-gcs",[h_]:"fire-gcs-compat",[d_]:"fire-fst",[p_]:"fire-fst-compat",[f_]:"fire-vertex","fire-js":"fire-js",[m_]:"fire-js-all"};/**
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
 */const Ls=new Map,y_=new Map,Io=new Map;function uc(n,e){try{n.container.addComponent(e)}catch(t){tn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ze(n){const e=n.name;if(Io.has(e))return tn.debug(`There were multiple attempts to register component ${e}.`),!1;Io.set(e,n);for(const t of Ls.values())uc(t,n);for(const t of y_.values())uc(t,n);return!0}function zt(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function We(n){return n.settings!==void 0}/**
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
 */const v_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vt=new hn("app","Firebase",v_);/**
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
 */class w_{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ue("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vt.create("app-deleted",{appName:this._name})}}/**
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
 */const dn=g_;function th(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:To,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Vt.create("bad-app-name",{appName:String(s)});if(t||(t=Wu()),!t)throw Vt.create("no-options");const i=Ls.get(s);if(i){if(xr(t,i.options)&&xr(r,i.config))return i;throw Vt.create("duplicate-app",{appName:s})}const a=new Sg(s);for(const c of Io.values())a.addComponent(c);const l=new w_(t,r,a);return Ls.set(s,l),l}function ii(n=To){const e=Ls.get(n);if(!e&&n===To&&Wu())return th();if(!e)throw Vt.create("no-app",{appName:n});return e}function Oe(n,e,t){var r;let s=(r=__[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tn.warn(l.join(" "));return}ze(new Ue(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const E_="firebase-heartbeat-database",T_=1,Sr="firebase-heartbeat-store";let to=null;function nh(){return to||(to=eh(E_,T_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Sr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Vt.create("idb-open",{originalErrorMessage:n.message})})),to}async function I_(n){try{const t=(await nh()).transaction(Sr),r=await t.objectStore(Sr).get(rh(n));return await t.done,r}catch(e){if(e instanceof Fe)tn.warn(e.message);else{const t=Vt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});tn.warn(t.message)}}}async function hc(n,e){try{const r=(await nh()).transaction(Sr,"readwrite");await r.objectStore(Sr).put(e,rh(n)),await r.done}catch(t){if(t instanceof Fe)tn.warn(t.message);else{const r=Vt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});tn.warn(r.message)}}}function rh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const b_=1024,A_=30*24*60*60*1e3;class R_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new S_(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=dc();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=A_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=dc(),{heartbeatsToSend:r,unsentEntries:s}=x_(this._heartbeatsCache.heartbeats),i=Vs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function dc(){return new Date().toISOString().substring(0,10)}function x_(n,e=b_){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),fc(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),fc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class S_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xu()?Yu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await I_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return hc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return hc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function fc(n){return Vs(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function P_(n){ze(new Ue("platform-logger",e=>new $g(e),"PRIVATE")),ze(new Ue("heartbeat",e=>new R_(e),"PRIVATE")),Oe(Eo,cc,n),Oe(Eo,cc,"esm2017"),Oe("fire-js","")}P_("");var C_="firebase",N_="10.12.2";/**
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
 */Oe(C_,N_,"app");const sh="@firebase/installations",Yo="0.6.7";/**
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
 */const ih=1e4,oh=`w:${Yo}`,ah="FIS_v2",k_="https://firebaseinstallations.googleapis.com/v1",O_=60*60*1e3,D_="installations",V_="Installations";/**
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
 */const L_={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},nn=new hn(D_,V_,L_);function lh(n){return n instanceof Fe&&n.code.includes("request-failed")}/**
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
 */function ch({projectId:n}){return`${k_}/projects/${n}/installations`}function uh(n){return{token:n.token,requestStatus:2,expiresIn:j_(n.expiresIn),creationTime:Date.now()}}async function hh(n,e){const r=(await e.json()).error;return nn.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function dh({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function M_(n,{refreshToken:e}){const t=dh(n);return t.append("Authorization",U_(e)),t}async function fh(n){const e=await n();return e.status>=500&&e.status<600?n():e}function j_(n){return Number(n.replace("s","000"))}function U_(n){return`${ah} ${n}`}/**
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
 */async function F_({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=ch(n),s=dh(n),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={fid:t,authVersion:ah,appId:n.appId,sdkVersion:oh},l={method:"POST",headers:s,body:JSON.stringify(a)},c=await fh(()=>fetch(r,l));if(c.ok){const h=await c.json();return{fid:h.fid||t,registrationStatus:2,refreshToken:h.refreshToken,authToken:uh(h.authToken)}}else throw await hh("Create Installation",c)}/**
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
 */function ph(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function B_(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const q_=/^[cdef][\w-]{21}$/,bo="";function $_(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=z_(n);return q_.test(t)?t:bo}catch{return bo}}function z_(n){return B_(n).substr(0,22)}/**
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
 */function oi(n){return`${n.appName}!${n.appId}`}/**
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
 */const mh=new Map;function gh(n,e){const t=oi(n);_h(t,e),H_(t,e)}function _h(n,e){const t=mh.get(n);if(t)for(const r of t)r(e)}function H_(n,e){const t=W_();t&&t.postMessage({key:n,fid:e}),G_()}let Yt=null;function W_(){return!Yt&&"BroadcastChannel"in self&&(Yt=new BroadcastChannel("[Firebase] FID Change"),Yt.onmessage=n=>{_h(n.data.key,n.data.fid)}),Yt}function G_(){mh.size===0&&Yt&&(Yt.close(),Yt=null)}/**
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
 */const K_="firebase-installations-database",Q_=1,rn="firebase-installations-store";let no=null;function Jo(){return no||(no=eh(K_,Q_,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(rn)}}})),no}async function Ms(n,e){const t=oi(n),s=(await Jo()).transaction(rn,"readwrite"),i=s.objectStore(rn),a=await i.get(t);return await i.put(e,t),await s.done,(!a||a.fid!==e.fid)&&gh(n,e.fid),e}async function yh(n){const e=oi(n),r=(await Jo()).transaction(rn,"readwrite");await r.objectStore(rn).delete(e),await r.done}async function ai(n,e){const t=oi(n),s=(await Jo()).transaction(rn,"readwrite"),i=s.objectStore(rn),a=await i.get(t),l=e(a);return l===void 0?await i.delete(t):await i.put(l,t),await s.done,l&&(!a||a.fid!==l.fid)&&gh(n,l.fid),l}/**
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
 */async function Zo(n){let e;const t=await ai(n.appConfig,r=>{const s=X_(r),i=Y_(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===bo?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function X_(n){const e=n||{fid:$_(),registrationStatus:0};return vh(e)}function Y_(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(nn.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=J_(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Z_(n)}:{installationEntry:e}}async function J_(n,e){try{const t=await F_(n,e);return Ms(n.appConfig,t)}catch(t){throw lh(t)&&t.customData.serverCode===409?await yh(n.appConfig):await Ms(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Z_(n){let e=await pc(n.appConfig);for(;e.registrationStatus===1;)await ph(100),e=await pc(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await Zo(n);return r||t}return e}function pc(n){return ai(n,e=>{if(!e)throw nn.create("installation-not-found");return vh(e)})}function vh(n){return ey(n)?{fid:n.fid,registrationStatus:0}:n}function ey(n){return n.registrationStatus===1&&n.registrationTime+ih<Date.now()}/**
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
 */async function ty({appConfig:n,heartbeatServiceProvider:e},t){const r=ny(n,t),s=M_(n,t),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={installation:{sdkVersion:oh,appId:n.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},c=await fh(()=>fetch(r,l));if(c.ok){const h=await c.json();return uh(h)}else throw await hh("Generate Auth Token",c)}function ny(n,{fid:e}){return`${ch(n)}/${e}/authTokens:generate`}/**
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
 */async function ea(n,e=!1){let t;const r=await ai(n.appConfig,i=>{if(!wh(i))throw nn.create("not-registered");const a=i.authToken;if(!e&&iy(a))return i;if(a.requestStatus===1)return t=ry(n,e),i;{if(!navigator.onLine)throw nn.create("app-offline");const l=ay(i);return t=sy(n,l),l}});return t?await t:r.authToken}async function ry(n,e){let t=await mc(n.appConfig);for(;t.authToken.requestStatus===1;)await ph(100),t=await mc(n.appConfig);const r=t.authToken;return r.requestStatus===0?ea(n,e):r}function mc(n){return ai(n,e=>{if(!wh(e))throw nn.create("not-registered");const t=e.authToken;return ly(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function sy(n,e){try{const t=await ty(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await Ms(n.appConfig,r),t}catch(t){if(lh(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await yh(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ms(n.appConfig,r)}throw t}}function wh(n){return n!==void 0&&n.registrationStatus===2}function iy(n){return n.requestStatus===2&&!oy(n)}function oy(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+O_}function ay(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function ly(n){return n.requestStatus===1&&n.requestTime+ih<Date.now()}/**
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
 */async function cy(n){const e=n,{installationEntry:t,registrationPromise:r}=await Zo(e);return r?r.catch(console.error):ea(e).catch(console.error),t.fid}/**
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
 */async function uy(n,e=!1){const t=n;return await hy(t),(await ea(t,e)).token}async function hy(n){const{registrationPromise:e}=await Zo(n);e&&await e}/**
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
 */function dy(n){if(!n||!n.options)throw ro("App Configuration");if(!n.name)throw ro("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw ro(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function ro(n){return nn.create("missing-app-config-values",{valueName:n})}/**
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
 */const Eh="installations",fy="installations-internal",py=n=>{const e=n.getProvider("app").getImmediate(),t=dy(e),r=zt(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},my=n=>{const e=n.getProvider("app").getImmediate(),t=zt(e,Eh).getImmediate();return{getId:()=>cy(t),getToken:s=>uy(t,s)}};function gy(){ze(new Ue(Eh,py,"PUBLIC")),ze(new Ue(fy,my,"PRIVATE"))}gy();Oe(sh,Yo);Oe(sh,Yo,"esm2017");/**
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
 */const js="analytics",_y="firebase_id",yy="origin",vy=60*1e3,wy="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ta="https://www.googletagmanager.com/gtag/js";/**
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
 */const De=new si("@firebase/analytics");/**
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
 */const Ey={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Me=new hn("analytics","Analytics",Ey);/**
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
 */function Ty(n){if(!n.startsWith(ta)){const e=Me.create("invalid-gtag-resource",{gtagURL:n});return De.warn(e.message),""}return n}function Th(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function Iy(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function by(n,e){const t=Iy("firebase-js-sdk-policy",{createScriptURL:Ty}),r=document.createElement("script"),s=`${ta}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Ay(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Ry(n,e,t,r,s,i){const a=r[s];try{if(a)await e[a];else{const c=(await Th(t)).find(h=>h.measurementId===s);c&&await e[c.appId]}}catch(l){De.error(l)}n("config",s,i)}async function xy(n,e,t,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const l=await Th(t);for(const c of a){const h=l.find(g=>g.measurementId===c),p=h&&e[h.appId];if(p)i.push(p);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",r,s||{})}catch(i){De.error(i)}}function Sy(n,e,t,r){async function s(i,...a){try{if(i==="event"){const[l,c]=a;await xy(n,e,t,l,c)}else if(i==="config"){const[l,c]=a;await Ry(n,e,t,r,l,c)}else if(i==="consent"){const[l,c]=a;n("consent",l,c)}else if(i==="get"){const[l,c,h]=a;n("get",l,c,h)}else if(i==="set"){const[l]=a;n("set",l)}else n(i,...a)}catch(l){De.error(l)}}return s}function Py(n,e,t,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=Sy(i,n,e,t),{gtagCore:i,wrappedGtag:window[s]}}function Cy(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(ta)&&t.src.includes(n))return t;return null}/**
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
 */const Ny=30,ky=1e3;class Oy{constructor(e={},t=ky){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Ih=new Oy;function Dy(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Vy(n){var e;const{appId:t,apiKey:r}=n,s={method:"GET",headers:Dy(r)},i=wy.replace("{app-id}",t),a=await fetch(i,s);if(a.status!==200&&a.status!==304){let l="";try{const c=await a.json();!((e=c.error)===null||e===void 0)&&e.message&&(l=c.error.message)}catch{}throw Me.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function Ly(n,e=Ih,t){const{appId:r,apiKey:s,measurementId:i}=n.options;if(!r)throw Me.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Me.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new Uy;return setTimeout(async()=>{l.abort()},vy),bh({appId:r,apiKey:s,measurementId:i},a,l,e)}async function bh(n,{throttleEndTimeMillis:e,backoffCount:t},r,s=Ih){var i;const{appId:a,measurementId:l}=n;try{await My(r,e)}catch(c){if(l)return De.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:l};throw c}try{const c=await Vy(n);return s.deleteThrottleMetadata(a),c}catch(c){const h=c;if(!jy(h)){if(s.deleteThrottleMetadata(a),l)return De.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:l};throw c}const p=Number((i=h==null?void 0:h.customData)===null||i===void 0?void 0:i.httpStatus)===503?ic(t,s.intervalMillis,Ny):ic(t,s.intervalMillis),g={throttleEndTimeMillis:Date.now()+p,backoffCount:t+1};return s.setThrottleMetadata(a,g),De.debug(`Calling attemptFetch again in ${p} millis`),bh(n,g,r,s)}}function My(n,e){return new Promise((t,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(i),r(Me.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function jy(n){if(!(n instanceof Fe)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class Uy{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Fy(n,e,t,r,s){if(s&&s.global){n("event",t,r);return}else{const i=await e,a=Object.assign(Object.assign({},r),{send_to:i});n("event",t,a)}}/**
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
 */async function By(){if(Xu())try{await Yu()}catch(n){return De.warn(Me.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return De.warn(Me.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function qy(n,e,t,r,s,i,a){var l;const c=Ly(n);c.then(x=>{t[x.measurementId]=x.appId,n.options.measurementId&&x.measurementId!==n.options.measurementId&&De.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${x.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(x=>De.error(x)),e.push(c);const h=By().then(x=>{if(x)return r.getId()}),[p,g]=await Promise.all([c,h]);Cy(i)||by(i,p.measurementId),s("js",new Date);const w=(l=a==null?void 0:a.config)!==null&&l!==void 0?l:{};return w[yy]="firebase",w.update=!0,g!=null&&(w[_y]=g),s("config",p.measurementId,w),p.measurementId}/**
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
 */class $y{constructor(e){this.app=e}_delete(){return delete yr[this.app.options.appId],Promise.resolve()}}let yr={},gc=[];const _c={};let so="dataLayer",zy="gtag",yc,Ah,vc=!1;function Hy(){const n=[];if(Qu()&&n.push("This is a browser extension environment."),fg()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),t=Me.create("invalid-analytics-context",{errorInfo:e});De.warn(t.message)}}function Wy(n,e,t){Hy();const r=n.options.appId;if(!r)throw Me.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)De.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Me.create("no-api-key");if(yr[r]!=null)throw Me.create("already-exists",{id:r});if(!vc){Ay(so);const{wrappedGtag:i,gtagCore:a}=Py(yr,gc,_c,so,zy);Ah=i,yc=a,vc=!0}return yr[r]=qy(n,gc,_c,e,yc,so,t),new $y(n)}function Gy(n=ii()){n=pe(n);const e=zt(n,js);return e.isInitialized()?e.getImmediate():Ky(n)}function Ky(n,e={}){const t=zt(n,js);if(t.isInitialized()){const s=t.getImmediate();if(xr(e,t.getOptions()))return s;throw Me.create("already-initialized")}return t.initialize({options:e})}function Qy(n,e,t,r){n=pe(n),Fy(Ah,yr[n.app.options.appId],e,t,r).catch(s=>De.error(s))}const wc="@firebase/analytics",Ec="0.10.4";function Xy(){ze(new Ue(js,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Wy(r,s,t)},"PUBLIC")),ze(new Ue("analytics-internal",n,"PRIVATE")),Oe(wc,Ec),Oe(wc,Ec,"esm2017");function n(e){try{const t=e.getProvider(js).getImmediate();return{logEvent:(r,s,i)=>Qy(t,r,s,i)}}catch(t){throw Me.create("interop-component-reg-failed",{reason:t})}}}Xy();var Tc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zt,Rh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,_){function y(){}y.prototype=_.prototype,T.D=_.prototype,T.prototype=new y,T.prototype.constructor=T,T.C=function(E,I,A){for(var v=Array(arguments.length-2),et=2;et<arguments.length;et++)v[et-2]=arguments[et];return _.prototype[I].apply(E,v)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,_,y){y||(y=0);var E=Array(16);if(typeof _=="string")for(var I=0;16>I;++I)E[I]=_.charCodeAt(y++)|_.charCodeAt(y++)<<8|_.charCodeAt(y++)<<16|_.charCodeAt(y++)<<24;else for(I=0;16>I;++I)E[I]=_[y++]|_[y++]<<8|_[y++]<<16|_[y++]<<24;_=T.g[0],y=T.g[1],I=T.g[2];var A=T.g[3],v=_+(A^y&(I^A))+E[0]+3614090360&4294967295;_=y+(v<<7&4294967295|v>>>25),v=A+(I^_&(y^I))+E[1]+3905402710&4294967295,A=_+(v<<12&4294967295|v>>>20),v=I+(y^A&(_^y))+E[2]+606105819&4294967295,I=A+(v<<17&4294967295|v>>>15),v=y+(_^I&(A^_))+E[3]+3250441966&4294967295,y=I+(v<<22&4294967295|v>>>10),v=_+(A^y&(I^A))+E[4]+4118548399&4294967295,_=y+(v<<7&4294967295|v>>>25),v=A+(I^_&(y^I))+E[5]+1200080426&4294967295,A=_+(v<<12&4294967295|v>>>20),v=I+(y^A&(_^y))+E[6]+2821735955&4294967295,I=A+(v<<17&4294967295|v>>>15),v=y+(_^I&(A^_))+E[7]+4249261313&4294967295,y=I+(v<<22&4294967295|v>>>10),v=_+(A^y&(I^A))+E[8]+1770035416&4294967295,_=y+(v<<7&4294967295|v>>>25),v=A+(I^_&(y^I))+E[9]+2336552879&4294967295,A=_+(v<<12&4294967295|v>>>20),v=I+(y^A&(_^y))+E[10]+4294925233&4294967295,I=A+(v<<17&4294967295|v>>>15),v=y+(_^I&(A^_))+E[11]+2304563134&4294967295,y=I+(v<<22&4294967295|v>>>10),v=_+(A^y&(I^A))+E[12]+1804603682&4294967295,_=y+(v<<7&4294967295|v>>>25),v=A+(I^_&(y^I))+E[13]+4254626195&4294967295,A=_+(v<<12&4294967295|v>>>20),v=I+(y^A&(_^y))+E[14]+2792965006&4294967295,I=A+(v<<17&4294967295|v>>>15),v=y+(_^I&(A^_))+E[15]+1236535329&4294967295,y=I+(v<<22&4294967295|v>>>10),v=_+(I^A&(y^I))+E[1]+4129170786&4294967295,_=y+(v<<5&4294967295|v>>>27),v=A+(y^I&(_^y))+E[6]+3225465664&4294967295,A=_+(v<<9&4294967295|v>>>23),v=I+(_^y&(A^_))+E[11]+643717713&4294967295,I=A+(v<<14&4294967295|v>>>18),v=y+(A^_&(I^A))+E[0]+3921069994&4294967295,y=I+(v<<20&4294967295|v>>>12),v=_+(I^A&(y^I))+E[5]+3593408605&4294967295,_=y+(v<<5&4294967295|v>>>27),v=A+(y^I&(_^y))+E[10]+38016083&4294967295,A=_+(v<<9&4294967295|v>>>23),v=I+(_^y&(A^_))+E[15]+3634488961&4294967295,I=A+(v<<14&4294967295|v>>>18),v=y+(A^_&(I^A))+E[4]+3889429448&4294967295,y=I+(v<<20&4294967295|v>>>12),v=_+(I^A&(y^I))+E[9]+568446438&4294967295,_=y+(v<<5&4294967295|v>>>27),v=A+(y^I&(_^y))+E[14]+3275163606&4294967295,A=_+(v<<9&4294967295|v>>>23),v=I+(_^y&(A^_))+E[3]+4107603335&4294967295,I=A+(v<<14&4294967295|v>>>18),v=y+(A^_&(I^A))+E[8]+1163531501&4294967295,y=I+(v<<20&4294967295|v>>>12),v=_+(I^A&(y^I))+E[13]+2850285829&4294967295,_=y+(v<<5&4294967295|v>>>27),v=A+(y^I&(_^y))+E[2]+4243563512&4294967295,A=_+(v<<9&4294967295|v>>>23),v=I+(_^y&(A^_))+E[7]+1735328473&4294967295,I=A+(v<<14&4294967295|v>>>18),v=y+(A^_&(I^A))+E[12]+2368359562&4294967295,y=I+(v<<20&4294967295|v>>>12),v=_+(y^I^A)+E[5]+4294588738&4294967295,_=y+(v<<4&4294967295|v>>>28),v=A+(_^y^I)+E[8]+2272392833&4294967295,A=_+(v<<11&4294967295|v>>>21),v=I+(A^_^y)+E[11]+1839030562&4294967295,I=A+(v<<16&4294967295|v>>>16),v=y+(I^A^_)+E[14]+4259657740&4294967295,y=I+(v<<23&4294967295|v>>>9),v=_+(y^I^A)+E[1]+2763975236&4294967295,_=y+(v<<4&4294967295|v>>>28),v=A+(_^y^I)+E[4]+1272893353&4294967295,A=_+(v<<11&4294967295|v>>>21),v=I+(A^_^y)+E[7]+4139469664&4294967295,I=A+(v<<16&4294967295|v>>>16),v=y+(I^A^_)+E[10]+3200236656&4294967295,y=I+(v<<23&4294967295|v>>>9),v=_+(y^I^A)+E[13]+681279174&4294967295,_=y+(v<<4&4294967295|v>>>28),v=A+(_^y^I)+E[0]+3936430074&4294967295,A=_+(v<<11&4294967295|v>>>21),v=I+(A^_^y)+E[3]+3572445317&4294967295,I=A+(v<<16&4294967295|v>>>16),v=y+(I^A^_)+E[6]+76029189&4294967295,y=I+(v<<23&4294967295|v>>>9),v=_+(y^I^A)+E[9]+3654602809&4294967295,_=y+(v<<4&4294967295|v>>>28),v=A+(_^y^I)+E[12]+3873151461&4294967295,A=_+(v<<11&4294967295|v>>>21),v=I+(A^_^y)+E[15]+530742520&4294967295,I=A+(v<<16&4294967295|v>>>16),v=y+(I^A^_)+E[2]+3299628645&4294967295,y=I+(v<<23&4294967295|v>>>9),v=_+(I^(y|~A))+E[0]+4096336452&4294967295,_=y+(v<<6&4294967295|v>>>26),v=A+(y^(_|~I))+E[7]+1126891415&4294967295,A=_+(v<<10&4294967295|v>>>22),v=I+(_^(A|~y))+E[14]+2878612391&4294967295,I=A+(v<<15&4294967295|v>>>17),v=y+(A^(I|~_))+E[5]+4237533241&4294967295,y=I+(v<<21&4294967295|v>>>11),v=_+(I^(y|~A))+E[12]+1700485571&4294967295,_=y+(v<<6&4294967295|v>>>26),v=A+(y^(_|~I))+E[3]+2399980690&4294967295,A=_+(v<<10&4294967295|v>>>22),v=I+(_^(A|~y))+E[10]+4293915773&4294967295,I=A+(v<<15&4294967295|v>>>17),v=y+(A^(I|~_))+E[1]+2240044497&4294967295,y=I+(v<<21&4294967295|v>>>11),v=_+(I^(y|~A))+E[8]+1873313359&4294967295,_=y+(v<<6&4294967295|v>>>26),v=A+(y^(_|~I))+E[15]+4264355552&4294967295,A=_+(v<<10&4294967295|v>>>22),v=I+(_^(A|~y))+E[6]+2734768916&4294967295,I=A+(v<<15&4294967295|v>>>17),v=y+(A^(I|~_))+E[13]+1309151649&4294967295,y=I+(v<<21&4294967295|v>>>11),v=_+(I^(y|~A))+E[4]+4149444226&4294967295,_=y+(v<<6&4294967295|v>>>26),v=A+(y^(_|~I))+E[11]+3174756917&4294967295,A=_+(v<<10&4294967295|v>>>22),v=I+(_^(A|~y))+E[2]+718787259&4294967295,I=A+(v<<15&4294967295|v>>>17),v=y+(A^(I|~_))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(I+(v<<21&4294967295|v>>>11))&4294967295,T.g[2]=T.g[2]+I&4294967295,T.g[3]=T.g[3]+A&4294967295}r.prototype.u=function(T,_){_===void 0&&(_=T.length);for(var y=_-this.blockSize,E=this.B,I=this.h,A=0;A<_;){if(I==0)for(;A<=y;)s(this,T,A),A+=this.blockSize;if(typeof T=="string"){for(;A<_;)if(E[I++]=T.charCodeAt(A++),I==this.blockSize){s(this,E),I=0;break}}else for(;A<_;)if(E[I++]=T[A++],I==this.blockSize){s(this,E),I=0;break}}this.h=I,this.o+=_},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;var y=8*this.o;for(_=T.length-8;_<T.length;++_)T[_]=y&255,y/=256;for(this.u(T),T=Array(16),_=y=0;4>_;++_)for(var E=0;32>E;E+=8)T[y++]=this.g[_]>>>E&255;return T};function i(T,_){var y=l;return Object.prototype.hasOwnProperty.call(y,T)?y[T]:y[T]=_(T)}function a(T,_){this.h=_;for(var y=[],E=!0,I=T.length-1;0<=I;I--){var A=T[I]|0;E&&A==_||(y[I]=A,E=!1)}this.g=y}var l={};function c(T){return-128<=T&&128>T?i(T,function(_){return new a([_|0],0>_?-1:0)}):new a([T|0],0>T?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return g;if(0>T)return R(h(-T));for(var _=[],y=1,E=0;T>=y;E++)_[E]=T/y|0,y*=4294967296;return new a(_,0)}function p(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return R(p(T.substring(1),_));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(_,8)),E=g,I=0;I<T.length;I+=8){var A=Math.min(8,T.length-I),v=parseInt(T.substring(I,I+A),_);8>A?(A=h(Math.pow(_,A)),E=E.j(A).add(h(v))):(E=E.j(y),E=E.add(h(v)))}return E}var g=c(0),w=c(1),x=c(16777216);n=a.prototype,n.m=function(){if(N(this))return-R(this).m();for(var T=0,_=1,y=0;y<this.g.length;y++){var E=this.i(y);T+=(0<=E?E:4294967296+E)*_,_*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(C(this))return"0";if(N(this))return"-"+R(this).toString(T);for(var _=h(Math.pow(T,6)),y=this,E="";;){var I=B(y,_).g;y=V(y,I.j(_));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(T);if(y=I,C(y))return A+E;for(;6>A.length;)A="0"+A;E=A+E}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function C(T){if(T.h!=0)return!1;for(var _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function N(T){return T.h==-1}n.l=function(T){return T=V(this,T),N(T)?-1:C(T)?0:1};function R(T){for(var _=T.g.length,y=[],E=0;E<_;E++)y[E]=~T.g[E];return new a(y,~T.h).add(w)}n.abs=function(){return N(this)?R(this):this},n.add=function(T){for(var _=Math.max(this.g.length,T.g.length),y=[],E=0,I=0;I<=_;I++){var A=E+(this.i(I)&65535)+(T.i(I)&65535),v=(A>>>16)+(this.i(I)>>>16)+(T.i(I)>>>16);E=v>>>16,A&=65535,v&=65535,y[I]=v<<16|A}return new a(y,y[y.length-1]&-2147483648?-1:0)};function V(T,_){return T.add(R(_))}n.j=function(T){if(C(this)||C(T))return g;if(N(this))return N(T)?R(this).j(R(T)):R(R(this).j(T));if(N(T))return R(this.j(R(T)));if(0>this.l(x)&&0>T.l(x))return h(this.m()*T.m());for(var _=this.g.length+T.g.length,y=[],E=0;E<2*_;E++)y[E]=0;for(E=0;E<this.g.length;E++)for(var I=0;I<T.g.length;I++){var A=this.i(E)>>>16,v=this.i(E)&65535,et=T.i(I)>>>16,Gn=T.i(I)&65535;y[2*E+2*I]+=v*Gn,j(y,2*E+2*I),y[2*E+2*I+1]+=A*Gn,j(y,2*E+2*I+1),y[2*E+2*I+1]+=v*et,j(y,2*E+2*I+1),y[2*E+2*I+2]+=A*et,j(y,2*E+2*I+2)}for(E=0;E<_;E++)y[E]=y[2*E+1]<<16|y[2*E];for(E=_;E<2*_;E++)y[E]=0;return new a(y,0)};function j(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function L(T,_){this.g=T,this.h=_}function B(T,_){if(C(_))throw Error("division by zero");if(C(T))return new L(g,g);if(N(T))return _=B(R(T),_),new L(R(_.g),R(_.h));if(N(_))return _=B(T,R(_)),new L(R(_.g),_.h);if(30<T.g.length){if(N(T)||N(_))throw Error("slowDivide_ only works with positive integers.");for(var y=w,E=_;0>=E.l(T);)y=ee(y),E=ee(E);var I=J(y,1),A=J(E,1);for(E=J(E,2),y=J(y,2);!C(E);){var v=A.add(E);0>=v.l(T)&&(I=I.add(y),A=v),E=J(E,1),y=J(y,1)}return _=V(T,I.j(_)),new L(I,_)}for(I=g;0<=T.l(_);){for(y=Math.max(1,Math.floor(T.m()/_.m())),E=Math.ceil(Math.log(y)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),A=h(y),v=A.j(_);N(v)||0<v.l(T);)y-=E,A=h(y),v=A.j(_);C(A)&&(A=w),I=I.add(A),T=V(T,v)}return new L(I,T)}n.A=function(T){return B(this,T).h},n.and=function(T){for(var _=Math.max(this.g.length,T.g.length),y=[],E=0;E<_;E++)y[E]=this.i(E)&T.i(E);return new a(y,this.h&T.h)},n.or=function(T){for(var _=Math.max(this.g.length,T.g.length),y=[],E=0;E<_;E++)y[E]=this.i(E)|T.i(E);return new a(y,this.h|T.h)},n.xor=function(T){for(var _=Math.max(this.g.length,T.g.length),y=[],E=0;E<_;E++)y[E]=this.i(E)^T.i(E);return new a(y,this.h^T.h)};function ee(T){for(var _=T.g.length+1,y=[],E=0;E<_;E++)y[E]=T.i(E)<<1|T.i(E-1)>>>31;return new a(y,T.h)}function J(T,_){var y=_>>5;_%=32;for(var E=T.g.length-y,I=[],A=0;A<E;A++)I[A]=0<_?T.i(A+y)>>>_|T.i(A+y+1)<<32-_:T.i(A+y);return new a(I,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Rh=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=p,Zt=a}).apply(typeof Tc<"u"?Tc:typeof self<"u"?self:typeof window<"u"?window:{});var ps=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xh,Sh,mr,Ph,Ts,Ao,Ch,Nh,kh;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ps=="object"&&ps];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var d=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var b=o[m];if(!(b in d))break e;d=d[b]}o=o[o.length-1],m=d[o],u=u(m),u!=m&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var d=0,m=!1,b={next:function(){if(!m&&d<o.length){var P=d++;return{value:u(P,o[P]),done:!1}}return m=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function p(o,u,d){return o.call.apply(o.bind,arguments)}function g(o,u,d){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,m),o.apply(u,b)}}return function(){return o.apply(u,arguments)}}function w(o,u,d){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:g,w.apply(null,arguments)}function x(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function C(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(m,b,P){for(var D=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)D[Z-2]=arguments[Z];return u.prototype[b].apply(m,D)}}function N(o){const u=o.length;if(0<u){const d=Array(u);for(let m=0;m<u;m++)d[m]=o[m];return d}return[]}function R(o,u){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(c(m)){const b=o.length||0,P=m.length||0;o.length=b+P;for(let D=0;D<P;D++)o[b+D]=m[D]}else o.push(m)}}class V{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function j(o){return/^[\s\xa0]*$/.test(o)}function L(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function B(o){return B[" "](o),o}B[" "]=function(){};var ee=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function J(o,u,d){for(const m in o)u.call(d,o[m],m,o)}function T(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function _(o){const u={};for(const d in o)u[d]=o[d];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,u){let d,m;for(let b=1;b<arguments.length;b++){m=arguments[b];for(d in m)o[d]=m[d];for(let P=0;P<y.length;P++)d=y[P],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function I(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function A(o){l.setTimeout(()=>{throw o},0)}function v(){var o=Ri;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class et{constructor(){this.h=this.g=null}add(u,d){const m=Gn.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Gn=new V(()=>new Xf,o=>o.reset());class Xf{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Kn,Qn=!1,Ri=new et,Wa=()=>{const o=l.Promise.resolve(void 0);Kn=()=>{o.then(Yf)}};var Yf=()=>{for(var o;o=v();){try{o.h.call(o.g)}catch(d){A(d)}var u=Gn;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}Qn=!1};function yt(){this.s=this.s,this.C=this.C}yt.prototype.s=!1,yt.prototype.ma=function(){this.s||(this.s=!0,this.N())},yt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ee(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Ee.prototype.h=function(){this.defaultPrevented=!0};var Jf=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return o}();function Xn(o,u){if(Ee.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(ee){e:{try{B(u.nodeName);var b=!0;break e}catch{}b=!1}b||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Zf[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Xn.aa.h.call(this)}}C(Xn,Ee);var Zf={2:"touch",3:"pen",4:"mouse"};Xn.prototype.h=function(){Xn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Xr="closure_listenable_"+(1e6*Math.random()|0),ep=0;function tp(o,u,d,m,b){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=b,this.key=++ep,this.da=this.fa=!1}function Yr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Jr(o){this.src=o,this.g={},this.h=0}Jr.prototype.add=function(o,u,d,m,b){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var D=Si(o,u,m,b);return-1<D?(u=o[D],d||(u.fa=!1)):(u=new tp(u,this.src,P,!!m,b),u.fa=d,o.push(u)),u};function xi(o,u){var d=u.type;if(d in o.g){var m=o.g[d],b=Array.prototype.indexOf.call(m,u,void 0),P;(P=0<=b)&&Array.prototype.splice.call(m,b,1),P&&(Yr(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Si(o,u,d,m){for(var b=0;b<o.length;++b){var P=o[b];if(!P.da&&P.listener==u&&P.capture==!!d&&P.ha==m)return b}return-1}var Pi="closure_lm_"+(1e6*Math.random()|0),Ci={};function Ga(o,u,d,m,b){if(Array.isArray(u)){for(var P=0;P<u.length;P++)Ga(o,u[P],d,m,b);return null}return d=Xa(d),o&&o[Xr]?o.K(u,d,h(m)?!!m.capture:!!m,b):np(o,u,d,!1,m,b)}function np(o,u,d,m,b,P){if(!u)throw Error("Invalid event type");var D=h(b)?!!b.capture:!!b,Z=ki(o);if(Z||(o[Pi]=Z=new Jr(o)),d=Z.add(u,d,m,D,P),d.proxy)return d;if(m=rp(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)Jf||(b=D),b===void 0&&(b=!1),o.addEventListener(u.toString(),m,b);else if(o.attachEvent)o.attachEvent(Qa(u.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function rp(){function o(d){return u.call(o.src,o.listener,d)}const u=sp;return o}function Ka(o,u,d,m,b){if(Array.isArray(u))for(var P=0;P<u.length;P++)Ka(o,u[P],d,m,b);else m=h(m)?!!m.capture:!!m,d=Xa(d),o&&o[Xr]?(o=o.i,u=String(u).toString(),u in o.g&&(P=o.g[u],d=Si(P,d,m,b),-1<d&&(Yr(P[d]),Array.prototype.splice.call(P,d,1),P.length==0&&(delete o.g[u],o.h--)))):o&&(o=ki(o))&&(u=o.g[u.toString()],o=-1,u&&(o=Si(u,d,m,b)),(d=-1<o?u[o]:null)&&Ni(d))}function Ni(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Xr])xi(u.i,o);else{var d=o.type,m=o.proxy;u.removeEventListener?u.removeEventListener(d,m,o.capture):u.detachEvent?u.detachEvent(Qa(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=ki(u))?(xi(d,o),d.h==0&&(d.src=null,u[Pi]=null)):Yr(o)}}}function Qa(o){return o in Ci?Ci[o]:Ci[o]="on"+o}function sp(o,u){if(o.da)o=!0;else{u=new Xn(u,this);var d=o.listener,m=o.ha||o.src;o.fa&&Ni(o),o=d.call(m,u)}return o}function ki(o){return o=o[Pi],o instanceof Jr?o:null}var Oi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Xa(o){return typeof o=="function"?o:(o[Oi]||(o[Oi]=function(u){return o.handleEvent(u)}),o[Oi])}function Te(){yt.call(this),this.i=new Jr(this),this.M=this,this.F=null}C(Te,yt),Te.prototype[Xr]=!0,Te.prototype.removeEventListener=function(o,u,d,m){Ka(this,o,u,d,m)};function Pe(o,u){var d,m=o.F;if(m)for(d=[];m;m=m.F)d.push(m);if(o=o.M,m=u.type||u,typeof u=="string")u=new Ee(u,o);else if(u instanceof Ee)u.target=u.target||o;else{var b=u;u=new Ee(m,o),E(u,b)}if(b=!0,d)for(var P=d.length-1;0<=P;P--){var D=u.g=d[P];b=Zr(D,m,!0,u)&&b}if(D=u.g=o,b=Zr(D,m,!0,u)&&b,b=Zr(D,m,!1,u)&&b,d)for(P=0;P<d.length;P++)D=u.g=d[P],b=Zr(D,m,!1,u)&&b}Te.prototype.N=function(){if(Te.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],m=0;m<d.length;m++)Yr(d[m]);delete o.g[u],o.h--}}this.F=null},Te.prototype.K=function(o,u,d,m){return this.i.add(String(o),u,!1,d,m)},Te.prototype.L=function(o,u,d,m){return this.i.add(String(o),u,!0,d,m)};function Zr(o,u,d,m){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var b=!0,P=0;P<u.length;++P){var D=u[P];if(D&&!D.da&&D.capture==d){var Z=D.listener,ge=D.ha||D.src;D.fa&&xi(o.i,D),b=Z.call(ge,m)!==!1&&b}}return b&&!m.defaultPrevented}function Ya(o,u,d){if(typeof o=="function")d&&(o=w(o,d));else if(o&&typeof o.handleEvent=="function")o=w(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function Ja(o){o.g=Ya(()=>{o.g=null,o.i&&(o.i=!1,Ja(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class ip extends yt{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ja(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yn(o){yt.call(this),this.h=o,this.g={}}C(Yn,yt);var Za=[];function el(o){J(o.g,function(u,d){this.g.hasOwnProperty(d)&&Ni(u)},o),o.g={}}Yn.prototype.N=function(){Yn.aa.N.call(this),el(this)},Yn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Di=l.JSON.stringify,op=l.JSON.parse,ap=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Vi(){}Vi.prototype.h=null;function tl(o){return o.h||(o.h=o.i())}function nl(){}var Jn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Li(){Ee.call(this,"d")}C(Li,Ee);function Mi(){Ee.call(this,"c")}C(Mi,Ee);var Wt={},rl=null;function es(){return rl=rl||new Te}Wt.La="serverreachability";function sl(o){Ee.call(this,Wt.La,o)}C(sl,Ee);function Zn(o){const u=es();Pe(u,new sl(u))}Wt.STAT_EVENT="statevent";function il(o,u){Ee.call(this,Wt.STAT_EVENT,o),this.stat=u}C(il,Ee);function Ce(o){const u=es();Pe(u,new il(u,o))}Wt.Ma="timingevent";function ol(o,u){Ee.call(this,Wt.Ma,o),this.size=u}C(ol,Ee);function er(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function tr(){this.g=!0}tr.prototype.xa=function(){this.g=!1};function lp(o,u,d,m,b,P){o.info(function(){if(o.g)if(P)for(var D="",Z=P.split("&"),ge=0;ge<Z.length;ge++){var X=Z[ge].split("=");if(1<X.length){var Ie=X[0];X=X[1];var be=Ie.split("_");D=2<=be.length&&be[1]=="type"?D+(Ie+"="+X+"&"):D+(Ie+"=redacted&")}}else D=null;else D=P;return"XMLHTTP REQ ("+m+") [attempt "+b+"]: "+u+`
`+d+`
`+D})}function cp(o,u,d,m,b,P,D){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+b+"]: "+u+`
`+d+`
`+P+" "+D})}function gn(o,u,d,m){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+hp(o,d)+(m?" "+m:"")})}function up(o,u){o.info(function(){return"TIMEOUT: "+u})}tr.prototype.info=function(){};function hp(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var m=d[o];if(!(2>m.length)){var b=m[1];if(Array.isArray(b)&&!(1>b.length)){var P=b[0];if(P!="noop"&&P!="stop"&&P!="close")for(var D=1;D<b.length;D++)b[D]=""}}}}return Di(d)}catch{return u}}var ts={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},al={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ji;function ns(){}C(ns,Vi),ns.prototype.g=function(){return new XMLHttpRequest},ns.prototype.i=function(){return{}},ji=new ns;function vt(o,u,d,m){this.j=o,this.i=u,this.l=d,this.R=m||1,this.U=new Yn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ll}function ll(){this.i=null,this.g="",this.h=!1}var cl={},Ui={};function Fi(o,u,d){o.L=1,o.v=os(tt(u)),o.m=d,o.P=!0,ul(o,null)}function ul(o,u){o.F=Date.now(),rs(o),o.A=tt(o.v);var d=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),bl(d.i,"t",m),o.C=0,d=o.j.J,o.h=new ll,o.g=ql(o.j,d?u:null,!o.m),0<o.O&&(o.M=new ip(w(o.Y,o,o.g),o.O)),u=o.U,d=o.g,m=o.ca;var b="readystatechange";Array.isArray(b)||(b&&(Za[0]=b.toString()),b=Za);for(var P=0;P<b.length;P++){var D=Ga(d,b[P],m||u.handleEvent,!1,u.h||u);if(!D)break;u.g[D.key]=D}u=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Zn(),lp(o.i,o.u,o.A,o.l,o.R,o.m)}vt.prototype.ca=function(o){o=o.target;const u=this.M;u&&nt(o)==3?u.j():this.Y(o)},vt.prototype.Y=function(o){try{if(o==this.g)e:{const be=nt(this.g);var u=this.g.Ba();const vn=this.g.Z();if(!(3>be)&&(be!=3||this.g&&(this.h.h||this.g.oa()||Nl(this.g)))){this.J||be!=4||u==7||(u==8||0>=vn?Zn(3):Zn(2)),Bi(this);var d=this.g.Z();this.X=d;t:if(hl(this)){var m=Nl(this.g);o="";var b=m.length,P=nt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gt(this),nr(this);var D="";break t}this.h.i=new l.TextDecoder}for(u=0;u<b;u++)this.h.h=!0,o+=this.h.i.decode(m[u],{stream:!(P&&u==b-1)});m.length=0,this.h.g+=o,this.C=0,D=this.h.g}else D=this.g.oa();if(this.o=d==200,cp(this.i,this.u,this.A,this.l,this.R,be,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Z,ge=this.g;if((Z=ge.g?ge.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(Z)){var X=Z;break t}}X=null}if(d=X)gn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qi(this,d);else{this.o=!1,this.s=3,Ce(12),Gt(this),nr(this);break e}}if(this.P){d=!0;let Be;for(;!this.J&&this.C<D.length;)if(Be=dp(this,D),Be==Ui){be==4&&(this.s=4,Ce(14),d=!1),gn(this.i,this.l,null,"[Incomplete Response]");break}else if(Be==cl){this.s=4,Ce(15),gn(this.i,this.l,D,"[Invalid Chunk]"),d=!1;break}else gn(this.i,this.l,Be,null),qi(this,Be);if(hl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),be!=4||D.length!=0||this.h.h||(this.s=1,Ce(16),d=!1),this.o=this.o&&d,!d)gn(this.i,this.l,D,"[Invalid Chunked Response]"),Gt(this),nr(this);else if(0<D.length&&!this.W){this.W=!0;var Ie=this.j;Ie.g==this&&Ie.ba&&!Ie.M&&(Ie.j.info("Great, no buffering proxy detected. Bytes received: "+D.length),Ki(Ie),Ie.M=!0,Ce(11))}}else gn(this.i,this.l,D,null),qi(this,D);be==4&&Gt(this),this.o&&!this.J&&(be==4?jl(this.j,this):(this.o=!1,rs(this)))}else Pp(this.g),d==400&&0<D.indexOf("Unknown SID")?(this.s=3,Ce(12)):(this.s=0,Ce(13)),Gt(this),nr(this)}}}catch{}finally{}};function hl(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function dp(o,u){var d=o.C,m=u.indexOf(`
`,d);return m==-1?Ui:(d=Number(u.substring(d,m)),isNaN(d)?cl:(m+=1,m+d>u.length?Ui:(u=u.slice(m,m+d),o.C=m+d,u)))}vt.prototype.cancel=function(){this.J=!0,Gt(this)};function rs(o){o.S=Date.now()+o.I,dl(o,o.I)}function dl(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=er(w(o.ba,o),u)}function Bi(o){o.B&&(l.clearTimeout(o.B),o.B=null)}vt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(up(this.i,this.A),this.L!=2&&(Zn(),Ce(17)),Gt(this),this.s=2,nr(this)):dl(this,this.S-o)};function nr(o){o.j.G==0||o.J||jl(o.j,o)}function Gt(o){Bi(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,el(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function qi(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||$i(d.h,o))){if(!o.K&&$i(d.h,o)&&d.G==3){try{var m=d.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var b=m;if(b[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)hs(d),cs(d);else break e;Gi(d),Ce(18)}}else d.za=b[1],0<d.za-d.T&&37500>b[2]&&d.F&&d.v==0&&!d.C&&(d.C=er(w(d.Za,d),6e3));if(1>=ml(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Qt(d,11)}else if((o.K||d.g==o)&&hs(d),!j(u))for(b=d.Da.g.parse(u),u=0;u<b.length;u++){let X=b[u];if(d.T=X[0],X=X[1],d.G==2)if(X[0]=="c"){d.K=X[1],d.ia=X[2];const Ie=X[3];Ie!=null&&(d.la=Ie,d.j.info("VER="+d.la));const be=X[4];be!=null&&(d.Aa=be,d.j.info("SVER="+d.Aa));const vn=X[5];vn!=null&&typeof vn=="number"&&0<vn&&(m=1.5*vn,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Be=o.g;if(Be){const fs=Be.g?Be.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(fs){var P=m.h;P.g||fs.indexOf("spdy")==-1&&fs.indexOf("quic")==-1&&fs.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(zi(P,P.h),P.h=null))}if(m.D){const Qi=Be.g?Be.g.getResponseHeader("X-HTTP-Session-Id"):null;Qi&&(m.ya=Qi,ne(m.I,m.D,Qi))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var D=o;if(m.qa=Bl(m,m.J?m.ia:null,m.W),D.K){gl(m.h,D);var Z=D,ge=m.L;ge&&(Z.I=ge),Z.B&&(Bi(Z),rs(Z)),m.g=D}else Ll(m);0<d.i.length&&us(d)}else X[0]!="stop"&&X[0]!="close"||Qt(d,7);else d.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?Qt(d,7):Wi(d):X[0]!="noop"&&d.l&&d.l.ta(X),d.v=0)}}Zn(4)}catch{}}var fp=class{constructor(o,u){this.g=o,this.map=u}};function fl(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function pl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ml(o){return o.h?1:o.g?o.g.size:0}function $i(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function zi(o,u){o.g?o.g.add(u):o.h=u}function gl(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}fl.prototype.cancel=function(){if(this.i=_l(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function _l(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return N(o.i)}function pp(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],d=o.length,m=0;m<d;m++)u.push(o[m]);return u}u=[],d=0;for(m in o)u[d++]=o[m];return u}function mp(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const m in o)u[d++]=m;return u}}}function yl(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=mp(o),m=pp(o),b=m.length,P=0;P<b;P++)u.call(void 0,m[P],d&&d[P],o)}var vl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gp(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var m=o[d].indexOf("="),b=null;if(0<=m){var P=o[d].substring(0,m);b=o[d].substring(m+1)}else P=o[d];u(P,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Kt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Kt){this.h=o.h,ss(this,o.j),this.o=o.o,this.g=o.g,is(this,o.s),this.l=o.l;var u=o.i,d=new ir;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),wl(this,d),this.m=o.m}else o&&(u=String(o).match(vl))?(this.h=!1,ss(this,u[1]||"",!0),this.o=rr(u[2]||""),this.g=rr(u[3]||"",!0),is(this,u[4]),this.l=rr(u[5]||"",!0),wl(this,u[6]||"",!0),this.m=rr(u[7]||"")):(this.h=!1,this.i=new ir(null,this.h))}Kt.prototype.toString=function(){var o=[],u=this.j;u&&o.push(sr(u,El,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(sr(u,El,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(sr(d,d.charAt(0)=="/"?vp:yp,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",sr(d,Ep)),o.join("")};function tt(o){return new Kt(o)}function ss(o,u,d){o.j=d?rr(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function is(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function wl(o,u,d){u instanceof ir?(o.i=u,Tp(o.i,o.h)):(d||(u=sr(u,wp)),o.i=new ir(u,o.h))}function ne(o,u,d){o.i.set(u,d)}function os(o){return ne(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function rr(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function sr(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,_p),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function _p(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var El=/[#\/\?@]/g,yp=/[#\?:]/g,vp=/[#\?]/g,wp=/[#\?@]/g,Ep=/#/g;function ir(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function wt(o){o.g||(o.g=new Map,o.h=0,o.i&&gp(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=ir.prototype,n.add=function(o,u){wt(this),this.i=null,o=_n(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function Tl(o,u){wt(o),u=_n(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Il(o,u){return wt(o),u=_n(o,u),o.g.has(u)}n.forEach=function(o,u){wt(this),this.g.forEach(function(d,m){d.forEach(function(b){o.call(u,b,m,this)},this)},this)},n.na=function(){wt(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let m=0;m<u.length;m++){const b=o[m];for(let P=0;P<b.length;P++)d.push(u[m])}return d},n.V=function(o){wt(this);let u=[];if(typeof o=="string")Il(this,o)&&(u=u.concat(this.g.get(_n(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},n.set=function(o,u){return wt(this),this.i=null,o=_n(this,o),Il(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function bl(o,u,d){Tl(o,u),0<d.length&&(o.i=null,o.g.set(_n(o,u),N(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var m=u[d];const P=encodeURIComponent(String(m)),D=this.V(m);for(m=0;m<D.length;m++){var b=P;D[m]!==""&&(b+="="+encodeURIComponent(String(D[m]))),o.push(b)}}return this.i=o.join("&")};function _n(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Tp(o,u){u&&!o.j&&(wt(o),o.i=null,o.g.forEach(function(d,m){var b=m.toLowerCase();m!=b&&(Tl(this,m),bl(this,b,d))},o)),o.j=u}function Ip(o,u){const d=new tr;if(l.Image){const m=new Image;m.onload=x(Et,d,"TestLoadImage: loaded",!0,u,m),m.onerror=x(Et,d,"TestLoadImage: error",!1,u,m),m.onabort=x(Et,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=x(Et,d,"TestLoadImage: timeout",!1,u,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else u(!1)}function bp(o,u){const d=new tr,m=new AbortController,b=setTimeout(()=>{m.abort(),Et(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:m.signal}).then(P=>{clearTimeout(b),P.ok?Et(d,"TestPingServer: ok",!0,u):Et(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(b),Et(d,"TestPingServer: error",!1,u)})}function Et(o,u,d,m,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),m(d)}catch{}}function Ap(){this.g=new ap}function Rp(o,u,d){const m=d||"";try{yl(o,function(b,P){let D=b;h(b)&&(D=Di(b)),u.push(m+P+"="+encodeURIComponent(D))})}catch(b){throw u.push(m+"type="+encodeURIComponent("_badmap")),b}}function or(o){this.l=o.Ub||null,this.j=o.eb||!1}C(or,Vi),or.prototype.g=function(){return new as(this.l,this.j)},or.prototype.i=function(o){return function(){return o}}({});function as(o,u){Te.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(as,Te),n=as.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,lr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ar(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,lr(this)),this.g&&(this.readyState=3,lr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Al(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Al(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?ar(this):lr(this),this.readyState==3&&Al(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,ar(this))},n.Qa=function(o){this.g&&(this.response=o,ar(this))},n.ga=function(){this.g&&ar(this)};function ar(o){o.readyState=4,o.l=null,o.j=null,o.v=null,lr(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function lr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(as.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Rl(o){let u="";return J(o,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function Hi(o,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Rl(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):ne(o,u,d))}function ae(o){Te.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(ae,Te);var xp=/^https?$/i,Sp=["POST","PUT"];n=ae.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ji.g(),this.v=this.o?tl(this.o):tl(ji),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(P){xl(this,P);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var b in m)d.set(b,m[b]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const P of m.keys())d.set(P,m.get(P));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),b=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Sp,u,void 0))||m||b||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,D]of d)this.g.setRequestHeader(P,D);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Cl(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){xl(this,P)}};function xl(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Sl(o),ls(o)}function Sl(o){o.A||(o.A=!0,Pe(o,"complete"),Pe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Pe(this,"complete"),Pe(this,"abort"),ls(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ls(this,!0)),ae.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Pl(this):this.bb())},n.bb=function(){Pl(this)};function Pl(o){if(o.h&&typeof a<"u"&&(!o.v[1]||nt(o)!=4||o.Z()!=2)){if(o.u&&nt(o)==4)Ya(o.Ea,0,o);else if(Pe(o,"readystatechange"),nt(o)==4){o.h=!1;try{const D=o.Z();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=D===0){var b=String(o.D).match(vl)[1]||null;!b&&l.self&&l.self.location&&(b=l.self.location.protocol.slice(0,-1)),m=!xp.test(b?b.toLowerCase():"")}d=m}if(d)Pe(o,"complete"),Pe(o,"success");else{o.m=6;try{var P=2<nt(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",Sl(o)}}finally{ls(o)}}}}function ls(o,u){if(o.g){Cl(o);const d=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||Pe(o,"ready");try{d.onreadystatechange=m}catch{}}}function Cl(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function nt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<nt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),op(u)}};function Nl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Pp(o){const u={};o=(o.g&&2<=nt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(j(o[m]))continue;var d=I(o[m]);const b=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=u[b]||[];u[b]=P,P.push(d)}T(u,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function cr(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function kl(o){this.Aa=0,this.i=[],this.j=new tr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=cr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=cr("baseRetryDelayMs",5e3,o),this.cb=cr("retryDelaySeedMs",1e4,o),this.Wa=cr("forwardChannelMaxRetries",2,o),this.wa=cr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new fl(o&&o.concurrentRequestLimit),this.Da=new Ap,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=kl.prototype,n.la=8,n.G=1,n.connect=function(o,u,d,m){Ce(0),this.W=o,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=Bl(this,null,this.W),us(this)};function Wi(o){if(Ol(o),o.G==3){var u=o.U++,d=tt(o.I);if(ne(d,"SID",o.K),ne(d,"RID",u),ne(d,"TYPE","terminate"),ur(o,d),u=new vt(o,o.j,u),u.L=2,u.v=os(tt(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=ql(u.j,null),u.g.ea(u.v)),u.F=Date.now(),rs(u)}Fl(o)}function cs(o){o.g&&(Ki(o),o.g.cancel(),o.g=null)}function Ol(o){cs(o),o.u&&(l.clearTimeout(o.u),o.u=null),hs(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function us(o){if(!pl(o.h)&&!o.s){o.s=!0;var u=o.Ga;Kn||Wa(),Qn||(Kn(),Qn=!0),Ri.add(u,o),o.B=0}}function Cp(o,u){return ml(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=er(w(o.Ga,o,u),Ul(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const b=new vt(this,this.j,o);let P=this.o;if(this.S&&(P?(P=_(P),E(P,this.S)):P=this.S),this.m!==null||this.O||(b.H=P,P=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Vl(this,b,u),d=tt(this.I),ne(d,"RID",o),ne(d,"CVER",22),this.D&&ne(d,"X-HTTP-Session-Id",this.D),ur(this,d),P&&(this.O?u="headers="+encodeURIComponent(String(Rl(P)))+"&"+u:this.m&&Hi(d,this.m,P)),zi(this.h,b),this.Ua&&ne(d,"TYPE","init"),this.P?(ne(d,"$req",u),ne(d,"SID","null"),b.T=!0,Fi(b,d,null)):Fi(b,d,u),this.G=2}}else this.G==3&&(o?Dl(this,o):this.i.length==0||pl(this.h)||Dl(this))};function Dl(o,u){var d;u?d=u.l:d=o.U++;const m=tt(o.I);ne(m,"SID",o.K),ne(m,"RID",d),ne(m,"AID",o.T),ur(o,m),o.m&&o.o&&Hi(m,o.m,o.o),d=new vt(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Vl(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),zi(o.h,d),Fi(d,m,u)}function ur(o,u){o.H&&J(o.H,function(d,m){ne(u,m,d)}),o.l&&yl({},function(d,m){ne(u,m,d)})}function Vl(o,u,d){d=Math.min(o.i.length,d);var m=o.l?w(o.l.Na,o.l,o):null;e:{var b=o.i;let P=-1;for(;;){const D=["count="+d];P==-1?0<d?(P=b[0].g,D.push("ofs="+P)):P=0:D.push("ofs="+P);let Z=!0;for(let ge=0;ge<d;ge++){let X=b[ge].g;const Ie=b[ge].map;if(X-=P,0>X)P=Math.max(0,b[ge].g-100),Z=!1;else try{Rp(Ie,D,"req"+X+"_")}catch{m&&m(Ie)}}if(Z){m=D.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,m}function Ll(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Kn||Wa(),Qn||(Kn(),Qn=!0),Ri.add(u,o),o.v=0}}function Gi(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=er(w(o.Fa,o),Ul(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Ml(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=er(w(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ce(10),cs(this),Ml(this))};function Ki(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Ml(o){o.g=new vt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=tt(o.qa);ne(u,"RID","rpc"),ne(u,"SID",o.K),ne(u,"AID",o.T),ne(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&ne(u,"TO",o.ja),ne(u,"TYPE","xmlhttp"),ur(o,u),o.m&&o.o&&Hi(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=os(tt(u)),d.m=null,d.P=!0,ul(d,o)}n.Za=function(){this.C!=null&&(this.C=null,cs(this),Gi(this),Ce(19))};function hs(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function jl(o,u){var d=null;if(o.g==u){hs(o),Ki(o),o.g=null;var m=2}else if($i(o.h,u))d=u.D,gl(o.h,u),m=1;else return;if(o.G!=0){if(u.o)if(m==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var b=o.B;m=es(),Pe(m,new ol(m,d)),us(o)}else Ll(o);else if(b=u.s,b==3||b==0&&0<u.X||!(m==1&&Cp(o,u)||m==2&&Gi(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),b){case 1:Qt(o,5);break;case 4:Qt(o,10);break;case 3:Qt(o,6);break;default:Qt(o,2)}}}function Ul(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function Qt(o,u){if(o.j.info("Error code "+u),u==2){var d=w(o.fb,o),m=o.Xa;const b=!m;m=new Kt(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ss(m,"https"),os(m),b?Ip(m.toString(),d):bp(m.toString(),d)}else Ce(2);o.G=0,o.l&&o.l.sa(u),Fl(o),Ol(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ce(2)):(this.j.info("Failed to ping google.com"),Ce(1))};function Fl(o){if(o.G=0,o.ka=[],o.l){const u=_l(o.h);(u.length!=0||o.i.length!=0)&&(R(o.ka,u),R(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function Bl(o,u,d){var m=d instanceof Kt?tt(d):new Kt(d);if(m.g!="")u&&(m.g=u+"."+m.g),is(m,m.s);else{var b=l.location;m=b.protocol,u=u?u+"."+b.hostname:b.hostname,b=+b.port;var P=new Kt(null);m&&ss(P,m),u&&(P.g=u),b&&is(P,b),d&&(P.l=d),m=P}return d=o.D,u=o.ya,d&&u&&ne(m,d,u),ne(m,"VER",o.la),ur(o,m),m}function ql(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new ae(new or({eb:d})):new ae(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function $l(){}n=$l.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ds(){}ds.prototype.g=function(o,u){return new Ve(o,u)};function Ve(o,u){Te.call(this),this.g=new kl(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!j(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!j(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new yn(this)}C(Ve,Te),Ve.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ve.prototype.close=function(){Wi(this.g)},Ve.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Di(o),o=d);u.i.push(new fp(u.Ya++,o)),u.G==3&&us(u)},Ve.prototype.N=function(){this.g.l=null,delete this.j,Wi(this.g),delete this.g,Ve.aa.N.call(this)};function zl(o){Li.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}C(zl,Li);function Hl(){Mi.call(this),this.status=1}C(Hl,Mi);function yn(o){this.g=o}C(yn,$l),yn.prototype.ua=function(){Pe(this.g,"a")},yn.prototype.ta=function(o){Pe(this.g,new zl(o))},yn.prototype.sa=function(o){Pe(this.g,new Hl)},yn.prototype.ra=function(){Pe(this.g,"b")},ds.prototype.createWebChannel=ds.prototype.g,Ve.prototype.send=Ve.prototype.o,Ve.prototype.open=Ve.prototype.m,Ve.prototype.close=Ve.prototype.close,kh=function(){return new ds},Nh=function(){return es()},Ch=Wt,Ao={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ts.NO_ERROR=0,ts.TIMEOUT=8,ts.HTTP_ERROR=6,Ts=ts,al.COMPLETE="complete",Ph=al,nl.EventType=Jn,Jn.OPEN="a",Jn.CLOSE="b",Jn.ERROR="c",Jn.MESSAGE="d",Te.prototype.listen=Te.prototype.K,mr=nl,Sh=or,ae.prototype.listenOnce=ae.prototype.L,ae.prototype.getLastError=ae.prototype.Ka,ae.prototype.getLastErrorCode=ae.prototype.Ba,ae.prototype.getStatus=ae.prototype.Z,ae.prototype.getResponseJson=ae.prototype.Oa,ae.prototype.getResponseText=ae.prototype.oa,ae.prototype.send=ae.prototype.ea,ae.prototype.setWithCredentials=ae.prototype.Ha,xh=ae}).apply(typeof ps<"u"?ps:typeof self<"u"?self:typeof window<"u"?window:{});const Ic="@firebase/firestore";/**
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
 */class Re{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Re.UNAUTHENTICATED=new Re(null),Re.GOOGLE_CREDENTIALS=new Re("google-credentials-uid"),Re.FIRST_PARTY=new Re("first-party-uid"),Re.MOCK_USER=new Re("mock-user");/**
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
 */let Fn="10.12.1";/**
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
 */const sn=new si("@firebase/firestore");function hr(){return sn.logLevel}function M(n,...e){if(sn.logLevel<=G.DEBUG){const t=e.map(na);sn.debug(`Firestore (${Fn}): ${n}`,...t)}}function ut(n,...e){if(sn.logLevel<=G.ERROR){const t=e.map(na);sn.error(`Firestore (${Fn}): ${n}`,...t)}}function Cn(n,...e){if(sn.logLevel<=G.WARN){const t=e.map(na);sn.warn(`Firestore (${Fn}): ${n}`,...t)}}function na(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function $(n="Unexpected state"){const e=`FIRESTORE (${Fn}) INTERNAL ASSERTION FAILED: `+n;throw ut(e),new Error(e)}function te(n,e){n||$()}function H(n,e){return n}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends Fe{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Lt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Oh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Yy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Re.UNAUTHENTICATED))}shutdown(){}}class Jy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Zy{constructor(e){this.t=e,this.currentUser=Re.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new Lt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Lt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Lt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(te(typeof r.accessToken=="string"),new Oh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return te(e===null||typeof e=="string"),new Re(e)}}class ev{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Re.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class tv{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new ev(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Re.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rv{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=i=>{i.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(te(typeof t.token=="string"),this.R=t.token,new nv(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function sv(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Dh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=sv(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function Y(n,e){return n<e?-1:n>e?1:0}function Nn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */class fe{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new U(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new U(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new U(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return fe.fromMillis(Date.now())}static fromDate(e){return fe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new fe(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Y(this.nanoseconds,e.nanoseconds):Y(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new z(e)}static min(){return new z(new fe(0,0))}static max(){return new z(new fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Pr{constructor(e,t,r){t===void 0?t=0:t>e.length&&$(),r===void 0?r=e.length-t:r>e.length-t&&$(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Pr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Pr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class se extends Pr{construct(e,t,r){return new se(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new se(t)}static emptyPath(){return new se([])}}const iv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ye extends Pr{construct(e,t,r){return new ye(e,t,r)}static isValidIdentifier(e){return iv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ye(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new U(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new U(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new U(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new U(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ye(t)}static emptyPath(){return new ye([])}}/**
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
 */class F{constructor(e){this.path=e}static fromPath(e){return new F(se.fromString(e))}static fromName(e){return new F(se.fromString(e).popFirst(5))}static empty(){return new F(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new F(new se(e.slice()))}}function ov(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=z.fromTimestamp(r===1e9?new fe(t+1,0):new fe(t,r));return new jt(s,F.empty(),e)}function av(n){return new jt(n.readTime,n.key,-1)}class jt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new jt(z.min(),F.empty(),-1)}static max(){return new jt(z.max(),F.empty(),-1)}}function lv(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=F.comparator(n.documentKey,e.documentKey),t!==0?t:Y(n.largestBatchId,e.largestBatchId))}/**
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
 */const cv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function jr(n){if(n.code!==O.FAILED_PRECONDITION||n.message!==cv)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):k.reject(t)}static resolve(e){return new k((t,r)=>{t(e)})}static reject(e){return new k((t,r)=>{r(e)})}static waitFor(e){return new k((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},c=>r(c))}),a=!0,i===s&&t()})}static or(e){let t=k.resolve(!1);for(const r of e)t=t.next(s=>s?k.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new k((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;t(e[h]).next(p=>{a[h]=p,++l,l===i&&r(a)},p=>s(p))}})}static doWhile(e,t){return new k((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function hv(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ur(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ra{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ra.oe=-1;function li(n){return n==null}function Us(n){return n===0&&1/n==-1/0}function dv(n){return typeof n=="number"&&Number.isInteger(n)&&!Us(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function bc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Bn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Vh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ie{constructor(e,t){this.comparator=e,this.root=t||_e.EMPTY}insert(e,t){return new ie(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,_e.BLACK,null,null))}remove(e){return new ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_e.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ms(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ms(this.root,e,this.comparator,!1)}getReverseIterator(){return new ms(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ms(this.root,e,this.comparator,!0)}}class ms{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _e{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??_e.RED,this.left=s??_e.EMPTY,this.right=i??_e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new _e(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return _e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return _e.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const e=this.left.check();if(e!==this.right.check())throw $();return e+(this.isRed()?0:1)}}_e.EMPTY=null,_e.RED=!0,_e.BLACK=!1;_e.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(e,t,r,s,i){return this}insert(e,t,r){return new _e(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ve{constructor(e){this.comparator=e,this.data=new ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ac(this.data.getIterator())}getIteratorFrom(e){return new Ac(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ve)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ve(this.comparator);return t.data=e,t}}class Ac{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class qe{constructor(e){this.fields=e,e.sort(ye.comparator)}static empty(){return new qe([])}unionWith(e){let t=new ve(ye.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new qe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Nn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Lh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Se{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Lh("Invalid base64 string: "+i):i}}(e);return new Se(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Se(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Se.EMPTY_BYTE_STRING=new Se("");const fv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ut(n){if(te(!!n),typeof n=="string"){let e=0;const t=fv.exec(n);if(te(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ue(n.seconds),nanos:ue(n.nanos)}}function ue(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function on(n){return typeof n=="string"?Se.fromBase64String(n):Se.fromUint8Array(n)}/**
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
 */function sa(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function ia(n){const e=n.mapValue.fields.__previous_value__;return sa(e)?ia(e):e}function Cr(n){const e=Ut(n.mapValue.fields.__local_write_time__.timestampValue);return new fe(e.seconds,e.nanos)}/**
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
 */class pv{constructor(e,t,r,s,i,a,l,c,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class Nr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Nr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Nr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const gs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function an(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?sa(n)?4:mv(n)?9007199254740991:10:$()}function Je(n,e){if(n===e)return!0;const t=an(n);if(t!==an(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Cr(n).isEqual(Cr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Ut(s.timestampValue),l=Ut(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return on(s.bytesValue).isEqual(on(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ue(s.geoPointValue.latitude)===ue(i.geoPointValue.latitude)&&ue(s.geoPointValue.longitude)===ue(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ue(s.integerValue)===ue(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ue(s.doubleValue),l=ue(i.doubleValue);return a===l?Us(a)===Us(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return Nn(n.arrayValue.values||[],e.arrayValue.values||[],Je);case 10:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(bc(a)!==bc(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!Je(a[c],l[c])))return!1;return!0}(n,e);default:return $()}}function kr(n,e){return(n.values||[]).find(t=>Je(t,e))!==void 0}function kn(n,e){if(n===e)return 0;const t=an(n),r=an(e);if(t!==r)return Y(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Y(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=ue(i.integerValue||i.doubleValue),c=ue(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return Rc(n.timestampValue,e.timestampValue);case 4:return Rc(Cr(n),Cr(e));case 5:return Y(n.stringValue,e.stringValue);case 6:return function(i,a){const l=on(i),c=on(a);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const p=Y(l[h],c[h]);if(p!==0)return p}return Y(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=Y(ue(i.latitude),ue(a.latitude));return l!==0?l:Y(ue(i.longitude),ue(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,a){const l=i.values||[],c=a.values||[];for(let h=0;h<l.length&&h<c.length;++h){const p=kn(l[h],c[h]);if(p)return p}return Y(l.length,c.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,a){if(i===gs.mapValue&&a===gs.mapValue)return 0;if(i===gs.mapValue)return 1;if(a===gs.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},p=Object.keys(h);c.sort(),p.sort();for(let g=0;g<c.length&&g<p.length;++g){const w=Y(c[g],p[g]);if(w!==0)return w;const x=kn(l[c[g]],h[p[g]]);if(x!==0)return x}return Y(c.length,p.length)}(n.mapValue,e.mapValue);default:throw $()}}function Rc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Y(n,e);const t=Ut(n),r=Ut(e),s=Y(t.seconds,r.seconds);return s!==0?s:Y(t.nanos,r.nanos)}function On(n){return Ro(n)}function Ro(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Ut(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return on(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return F.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Ro(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Ro(t.fields[a])}`;return s+"}"}(n.mapValue):$()}function xo(n){return!!n&&"integerValue"in n}function oa(n){return!!n&&"arrayValue"in n}function xc(n){return!!n&&"nullValue"in n}function Sc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Is(n){return!!n&&"mapValue"in n}function vr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Bn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=vr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=vr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function mv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class je{constructor(e){this.value=e}static empty(){return new je({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Is(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=vr(t)}setAll(e){let t=ye.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=vr(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Is(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Je(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Is(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Bn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new je(vr(this.value))}}function Mh(n){const e=[];return Bn(n.fields,(t,r)=>{const s=new ye([t]);if(Is(r)){const i=Mh(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new qe(e)}/**
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
 */class xe{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new xe(e,0,z.min(),z.min(),z.min(),je.empty(),0)}static newFoundDocument(e,t,r,s){return new xe(e,1,t,z.min(),r,s,0)}static newNoDocument(e,t){return new xe(e,2,t,z.min(),z.min(),je.empty(),0)}static newUnknownDocument(e,t){return new xe(e,3,t,z.min(),z.min(),je.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=je.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=je.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Fs{constructor(e,t){this.position=e,this.inclusive=t}}function Pc(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=F.comparator(F.fromName(a.referenceValue),t.key):r=kn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Cc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Je(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Bs{constructor(e,t="asc"){this.field=e,this.dir=t}}function gv(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class jh{}class de extends jh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new yv(e,t,r):t==="array-contains"?new Ev(e,r):t==="in"?new Tv(e,r):t==="not-in"?new Iv(e,r):t==="array-contains-any"?new bv(e,r):new de(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new vv(e,r):new wv(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(kn(t,this.value)):t!==null&&an(this.value)===an(t)&&this.matchesComparison(kn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ze extends jh{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Ze(e,t)}matches(e){return Uh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Uh(n){return n.op==="and"}function Fh(n){return _v(n)&&Uh(n)}function _v(n){for(const e of n.filters)if(e instanceof Ze)return!1;return!0}function So(n){if(n instanceof de)return n.field.canonicalString()+n.op.toString()+On(n.value);if(Fh(n))return n.filters.map(e=>So(e)).join(",");{const e=n.filters.map(t=>So(t)).join(",");return`${n.op}(${e})`}}function Bh(n,e){return n instanceof de?function(r,s){return s instanceof de&&r.op===s.op&&r.field.isEqual(s.field)&&Je(r.value,s.value)}(n,e):n instanceof Ze?function(r,s){return s instanceof Ze&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Bh(a,s.filters[l]),!0):!1}(n,e):void $()}function qh(n){return n instanceof de?function(t){return`${t.field.canonicalString()} ${t.op} ${On(t.value)}`}(n):n instanceof Ze?function(t){return t.op.toString()+" {"+t.getFilters().map(qh).join(" ,")+"}"}(n):"Filter"}class yv extends de{constructor(e,t,r){super(e,t,r),this.key=F.fromName(r.referenceValue)}matches(e){const t=F.comparator(e.key,this.key);return this.matchesComparison(t)}}class vv extends de{constructor(e,t){super(e,"in",t),this.keys=$h("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class wv extends de{constructor(e,t){super(e,"not-in",t),this.keys=$h("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function $h(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>F.fromName(r.referenceValue))}class Ev extends de{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return oa(t)&&kr(t.arrayValue,this.value)}}class Tv extends de{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&kr(this.value.arrayValue,t)}}class Iv extends de{constructor(e,t){super(e,"not-in",t)}matches(e){if(kr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!kr(this.value.arrayValue,t)}}class bv extends de{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!oa(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>kr(this.value.arrayValue,r))}}/**
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
 */class Av{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.ue=null}}function Nc(n,e=null,t=[],r=[],s=null,i=null,a=null){return new Av(n,e,t,r,s,i,a)}function aa(n){const e=H(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>So(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),li(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>On(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>On(r)).join(",")),e.ue=t}return e.ue}function la(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!gv(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Bh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Cc(n.startAt,e.startAt)&&Cc(n.endAt,e.endAt)}function Po(n){return F.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class ci{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Rv(n,e,t,r,s,i,a,l){return new ci(n,e,t,r,s,i,a,l)}function zh(n){return new ci(n)}function kc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function xv(n){return n.collectionGroup!==null}function wr(n){const e=H(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ve(ye.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Bs(i,r))}),t.has(ye.keyField().canonicalString())||e.ce.push(new Bs(ye.keyField(),r))}return e.ce}function Ke(n){const e=H(n);return e.le||(e.le=Sv(e,wr(n))),e.le}function Sv(n,e){if(n.limitType==="F")return Nc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Bs(s.field,i)});const t=n.endAt?new Fs(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Fs(n.startAt.position,n.startAt.inclusive):null;return Nc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Co(n,e,t){return new ci(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ui(n,e){return la(Ke(n),Ke(e))&&n.limitType===e.limitType}function Hh(n){return`${aa(Ke(n))}|lt:${n.limitType}`}function En(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>qh(s)).join(", ")}]`),li(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>On(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>On(s)).join(",")),`Target(${r})`}(Ke(n))}; limitType=${n.limitType})`}function hi(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):F.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of wr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=Pc(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,wr(r),s)||r.endAt&&!function(a,l,c){const h=Pc(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,wr(r),s))}(n,e)}function Pv(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Wh(n){return(e,t)=>{let r=!1;for(const s of wr(n)){const i=Cv(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Cv(n,e,t){const r=n.field.isKeyField()?F.comparator(e.key,t.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?kn(c,h):$()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return $()}}/**
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
 */class qn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Bn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Vh(this.inner)}size(){return this.innerSize}}/**
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
 */const Nv=new ie(F.comparator);function ht(){return Nv}const Gh=new ie(F.comparator);function gr(...n){let e=Gh;for(const t of n)e=e.insert(t.key,t);return e}function Kh(n){let e=Gh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Jt(){return Er()}function Qh(){return Er()}function Er(){return new qn(n=>n.toString(),(n,e)=>n.isEqual(e))}const kv=new ie(F.comparator),Ov=new ve(F.comparator);function W(...n){let e=Ov;for(const t of n)e=e.add(t);return e}const Dv=new ve(Y);function Vv(){return Dv}/**
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
 */function Xh(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Us(e)?"-0":e}}function Yh(n){return{integerValue:""+n}}function Lv(n,e){return dv(e)?Yh(e):Xh(n,e)}/**
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
 */class di{constructor(){this._=void 0}}function Mv(n,e,t){return n instanceof qs?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&sa(i)&&(i=ia(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):n instanceof Or?Zh(n,e):n instanceof Dr?ed(n,e):function(s,i){const a=Jh(s,i),l=Oc(a)+Oc(s.Pe);return xo(a)&&xo(s.Pe)?Yh(l):Xh(s.serializer,l)}(n,e)}function jv(n,e,t){return n instanceof Or?Zh(n,e):n instanceof Dr?ed(n,e):t}function Jh(n,e){return n instanceof $s?function(r){return xo(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class qs extends di{}class Or extends di{constructor(e){super(),this.elements=e}}function Zh(n,e){const t=td(e);for(const r of n.elements)t.some(s=>Je(s,r))||t.push(r);return{arrayValue:{values:t}}}class Dr extends di{constructor(e){super(),this.elements=e}}function ed(n,e){let t=td(e);for(const r of n.elements)t=t.filter(s=>!Je(s,r));return{arrayValue:{values:t}}}class $s extends di{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Oc(n){return ue(n.integerValue||n.doubleValue)}function td(n){return oa(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Uv(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Or&&s instanceof Or||r instanceof Dr&&s instanceof Dr?Nn(r.elements,s.elements,Je):r instanceof $s&&s instanceof $s?Je(r.Pe,s.Pe):r instanceof qs&&s instanceof qs}(n.transform,e.transform)}class Fv{constructor(e,t){this.version=e,this.transformResults=t}}class at{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new at}static exists(e){return new at(void 0,e)}static updateTime(e){return new at(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function bs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class fi{}function nd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new sd(n.key,at.none()):new Fr(n.key,n.data,at.none());{const t=n.data,r=je.empty();let s=new ve(ye.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new fn(n.key,r,new qe(s.toArray()),at.none())}}function Bv(n,e,t){n instanceof Fr?function(s,i,a){const l=s.value.clone(),c=Vc(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof fn?function(s,i,a){if(!bs(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Vc(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(rd(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Tr(n,e,t,r){return n instanceof Fr?function(i,a,l,c){if(!bs(i.precondition,a))return l;const h=i.value.clone(),p=Lc(i.fieldTransforms,c,a);return h.setAll(p),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof fn?function(i,a,l,c){if(!bs(i.precondition,a))return l;const h=Lc(i.fieldTransforms,c,a),p=a.data;return p.setAll(rd(i)),p.setAll(h),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(i,a,l){return bs(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function qv(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Jh(r.transform,s||null);i!=null&&(t===null&&(t=je.empty()),t.set(r.field,i))}return t||null}function Dc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Nn(r,s,(i,a)=>Uv(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Fr extends fi{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class fn extends fi{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function rd(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Vc(n,e,t){const r=new Map;te(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,jv(a,l,t[s]))}return r}function Lc(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,Mv(i,a,e))}return r}class sd extends fi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $v extends fi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class zv{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Bv(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Tr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Tr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Qh();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const c=nd(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),W())}isEqual(e){return this.batchId===e.batchId&&Nn(this.mutations,e.mutations,(t,r)=>Dc(t,r))&&Nn(this.baseMutations,e.baseMutations,(t,r)=>Dc(t,r))}}class ca{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){te(e.mutations.length===r.length);let s=function(){return kv}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new ca(e,t,r,s)}}/**
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
 */class Hv{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Wv{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ce,K;function Gv(n){switch(n){default:return $();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function id(n){if(n===void 0)return ut("GRPC error has no .code"),O.UNKNOWN;switch(n){case ce.OK:return O.OK;case ce.CANCELLED:return O.CANCELLED;case ce.UNKNOWN:return O.UNKNOWN;case ce.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case ce.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case ce.INTERNAL:return O.INTERNAL;case ce.UNAVAILABLE:return O.UNAVAILABLE;case ce.UNAUTHENTICATED:return O.UNAUTHENTICATED;case ce.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case ce.NOT_FOUND:return O.NOT_FOUND;case ce.ALREADY_EXISTS:return O.ALREADY_EXISTS;case ce.PERMISSION_DENIED:return O.PERMISSION_DENIED;case ce.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case ce.ABORTED:return O.ABORTED;case ce.OUT_OF_RANGE:return O.OUT_OF_RANGE;case ce.UNIMPLEMENTED:return O.UNIMPLEMENTED;case ce.DATA_LOSS:return O.DATA_LOSS;default:return $()}}(K=ce||(ce={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Kv(){return new TextEncoder}/**
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
 */const Qv=new Zt([4294967295,4294967295],0);function Mc(n){const e=Kv().encode(n),t=new Rh;return t.update(e),new Uint8Array(t.digest())}function jc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Zt([t,r],0),new Zt([s,i],0)]}class ua{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new _r(`Invalid padding: ${t}`);if(r<0)throw new _r(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new _r(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new _r(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Zt.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(Zt.fromNumber(r)));return s.compare(Qv)===1&&(s=new Zt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Mc(e),[r,s]=jc(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new ua(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=Mc(e),[r,s]=jc(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class _r extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class pi{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Br.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new pi(z.min(),s,new ie(Y),ht(),W())}}class Br{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Br(r,t,W(),W(),W())}}/**
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
 */class As{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class od{constructor(e,t){this.targetId=e,this.me=t}}class ad{constructor(e,t,r=Se.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Uc{constructor(){this.fe=0,this.ge=Bc(),this.pe=Se.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=W(),t=W(),r=W();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:$()}}),new Br(this.pe,this.ye,e,t,r)}ve(){this.we=!1,this.ge=Bc()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,te(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Xv{constructor(e){this.Le=e,this.Be=new Map,this.ke=ht(),this.qe=Fc(),this.Qe=new ie(Y)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:$()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(Po(i))if(r===0){const a=new F(i.path);this.Ue(t,a,xe.newNoDocument(a,z.min()))}else te(r===1);else{const a=this.Ye(t);if(a!==r){const l=this.Ze(e),c=l?this.Xe(l,e,a):1;if(c!==0){this.je(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=on(r).toUint8Array()}catch(c){if(c instanceof Lh)return Cn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new ua(a,s,i)}catch(c){return Cn(c instanceof _r?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,a)=>{const l=this.Je(a);if(l){if(i.current&&Po(l.target)){const c=new F(l.target.path);this.ke.get(c)!==null||this.it(a,c)||this.Ue(a,c,xe.newNoDocument(c,e))}i.be&&(t.set(a,i.Ce()),i.ve())}});let r=W();this.qe.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new pi(e,t,this.Qe,this.ke,r);return this.ke=ht(),this.qe=Fc(),this.Qe=new ie(Y),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Uc,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ve(Y),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||M("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Uc),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Fc(){return new ie(F.comparator)}function Bc(){return new ie(F.comparator)}const Yv={asc:"ASCENDING",desc:"DESCENDING"},Jv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Zv={and:"AND",or:"OR"};class ew{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function No(n,e){return n.useProto3Json||li(e)?e:{value:e}}function zs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ld(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function tw(n,e){return zs(n,e.toTimestamp())}function Qe(n){return te(!!n),z.fromTimestamp(function(t){const r=Ut(t);return new fe(r.seconds,r.nanos)}(n))}function ha(n,e){return ko(n,e).canonicalString()}function ko(n,e){const t=function(s){return new se(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function cd(n){const e=se.fromString(n);return te(pd(e)),e}function Oo(n,e){return ha(n.databaseId,e.path)}function io(n,e){const t=cd(e);if(t.get(1)!==n.databaseId.projectId)throw new U(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new U(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new F(hd(t))}function ud(n,e){return ha(n.databaseId,e)}function nw(n){const e=cd(n);return e.length===4?se.emptyPath():hd(e)}function Do(n){return new se(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function hd(n){return te(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function qc(n,e,t){return{name:Oo(n,e),fields:t.value.mapValue.fields}}function rw(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:$()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,p){return h.useProto3Json?(te(p===void 0||typeof p=="string"),Se.fromBase64String(p||"")):(te(p===void 0||p instanceof Buffer||p instanceof Uint8Array),Se.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const p=h.code===void 0?O.UNKNOWN:id(h.code);return new U(p,h.message||"")}(a);t=new ad(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=io(n,r.document.name),i=Qe(r.document.updateTime),a=r.document.createTime?Qe(r.document.createTime):z.min(),l=new je({mapValue:{fields:r.document.fields}}),c=xe.newFoundDocument(s,i,a,l),h=r.targetIds||[],p=r.removedTargetIds||[];t=new As(h,p,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=io(n,r.document),i=r.readTime?Qe(r.readTime):z.min(),a=xe.newNoDocument(s,i),l=r.removedTargetIds||[];t=new As([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=io(n,r.document),i=r.removedTargetIds||[];t=new As([],i,s,null)}else{if(!("filter"in e))return $();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new Wv(s,i),l=r.targetId;t=new od(l,a)}}return t}function sw(n,e){let t;if(e instanceof Fr)t={update:qc(n,e.key,e.value)};else if(e instanceof sd)t={delete:Oo(n,e.key)};else if(e instanceof fn)t={update:qc(n,e.key,e.data),updateMask:fw(e.fieldMask)};else{if(!(e instanceof $v))return $();t={verify:Oo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof qs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Or)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Dr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof $s)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw $()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:tw(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:$()}(n,e.precondition)),t}function iw(n,e){return n&&n.length>0?(te(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?Qe(s.updateTime):Qe(i);return a.isEqual(z.min())&&(a=Qe(i)),new Fv(a,s.transformResults||[])}(t,e))):[]}function ow(n,e){return{documents:[ud(n,e.path)]}}function aw(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=ud(n,s);const i=function(h){if(h.length!==0)return fd(Ze.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(p=>function(w){return{field:Tn(w.field),direction:uw(w.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=No(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:s}}function lw(n){let e=nw(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){te(r===1);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];t.where&&(i=function(g){const w=dd(g);return w instanceof Ze&&Fh(w)?w.getFilters():[w]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(w=>function(C){return new Bs(In(C.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(w))}(t.orderBy));let l=null;t.limit&&(l=function(g){let w;return w=typeof g=="object"?g.value:g,li(w)?null:w}(t.limit));let c=null;t.startAt&&(c=function(g){const w=!!g.before,x=g.values||[];return new Fs(x,w)}(t.startAt));let h=null;return t.endAt&&(h=function(g){const w=!g.before,x=g.values||[];return new Fs(x,w)}(t.endAt)),Rv(e,s,a,i,l,"F",c,h)}function cw(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function dd(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=In(t.unaryFilter.field);return de.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=In(t.unaryFilter.field);return de.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=In(t.unaryFilter.field);return de.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=In(t.unaryFilter.field);return de.create(a,"!=",{nullValue:"NULL_VALUE"});default:return $()}}(n):n.fieldFilter!==void 0?function(t){return de.create(In(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ze.create(t.compositeFilter.filters.map(r=>dd(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return $()}}(t.compositeFilter.op))}(n):$()}function uw(n){return Yv[n]}function hw(n){return Jv[n]}function dw(n){return Zv[n]}function Tn(n){return{fieldPath:n.canonicalString()}}function In(n){return ye.fromServerFormat(n.fieldPath)}function fd(n){return n instanceof de?function(t){if(t.op==="=="){if(Sc(t.value))return{unaryFilter:{field:Tn(t.field),op:"IS_NAN"}};if(xc(t.value))return{unaryFilter:{field:Tn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Sc(t.value))return{unaryFilter:{field:Tn(t.field),op:"IS_NOT_NAN"}};if(xc(t.value))return{unaryFilter:{field:Tn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Tn(t.field),op:hw(t.op),value:t.value}}}(n):n instanceof Ze?function(t){const r=t.getFilters().map(s=>fd(s));return r.length===1?r[0]:{compositeFilter:{op:dw(t.op),filters:r}}}(n):$()}function fw(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function pd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Nt{constructor(e,t,r,s,i=z.min(),a=z.min(),l=Se.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Nt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Nt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Nt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Nt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class pw{constructor(e){this.ct=e}}function mw(n){const e=lw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Co(e,e.limit,"L"):e}/**
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
 */class gw{constructor(){this._n=new _w}addToCollectionParentIndex(e,t){return this._n.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(jt.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(jt.min())}updateCollectionGroup(e,t,r){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class _w{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ve(se.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ve(se.comparator)).toArray()}}/**
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
 */class Dn{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Dn(0)}static Ln(){return new Dn(-1)}}/**
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
 */class yw{constructor(){this.changes=new qn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,xe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?k.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class vw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class ww{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Tr(r.mutation,s,qe.empty(),fe.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,W()).next(()=>r))}getLocalViewOfDocuments(e,t,r=W()){const s=Jt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=gr();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Jt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,W()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=ht();const a=Er(),l=function(){return Er()}();return t.forEach((c,h)=>{const p=r.get(h.key);s.has(h.key)&&(p===void 0||p.mutation instanceof fn)?i=i.insert(h.key,h):p!==void 0?(a.set(h.key,p.mutation.getFieldMask()),Tr(p.mutation,h,p.mutation.getFieldMask(),fe.now())):a.set(h.key,qe.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,p)=>a.set(h,p)),t.forEach((h,p)=>{var g;return l.set(h,new vw(p,(g=a.get(h))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Er();let s=new ie((a,l)=>a-l),i=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let p=r.get(c)||qe.empty();p=l.applyToLocalView(h,p),r.set(c,p);const g=(s.get(l.batchId)||W()).add(c);s=s.insert(l.batchId,g)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,p=c.value,g=Qh();p.forEach(w=>{if(!i.has(w)){const x=nd(t.get(w),r.get(w));x!==null&&g.set(w,x),i=i.add(w)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,g))}return k.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return F.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):xv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):k.resolve(Jt());let l=-1,c=i;return a.next(h=>k.forEach(h,(p,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(p)?k.resolve():this.remoteDocumentCache.getEntry(e,p).next(w=>{c=c.insert(p,w)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,W())).next(p=>({batchId:l,changes:Kh(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new F(t)).next(r=>{let s=gr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=gr();return this.indexManager.getCollectionParents(e,i).next(l=>k.forEach(l,c=>{const h=function(g,w){return new ci(w,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(p=>{p.forEach((g,w)=>{a=a.insert(g,w)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((c,h)=>{const p=h.getKey();a.get(p)===null&&(a=a.insert(p,xe.newInvalidDocument(p)))});let l=gr();return a.forEach((c,h)=>{const p=i.get(c);p!==void 0&&Tr(p.mutation,h,qe.empty(),fe.now()),hi(t,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class Ew{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return k.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Qe(s.createTime)}}(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(s){return{name:s.name,query:mw(s.bundledQuery),readTime:Qe(s.readTime)}}(t)),k.resolve()}}/**
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
 */class Tw{constructor(){this.overlays=new ie(F.comparator),this.hr=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Jt();return k.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),k.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),k.resolve()}getOverlaysForCollection(e,t,r){const s=Jt(),i=t.length+1,a=new F(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return k.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ie((h,p)=>h-p);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let p=i.get(h.largestBatchId);p===null&&(p=Jt(),i=i.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const l=Jt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,p)=>l.set(h,p)),!(l.size()>=s)););return k.resolve(l)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Hv(t,r));let i=this.hr.get(t);i===void 0&&(i=W(),this.hr.set(t,i)),this.hr.set(t,i.add(r.key))}}/**
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
 */class da{constructor(){this.Pr=new ve(me.Ir),this.Tr=new ve(me.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){const r=new me(e,t);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Ar(new me(e,t))}Rr(e,t){e.forEach(r=>this.removeReference(r,t))}Vr(e){const t=new F(new se([])),r=new me(t,e),s=new me(t,e+1),i=[];return this.Tr.forEachInRange([r,s],a=>{this.Ar(a),i.push(a.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const t=new F(new se([])),r=new me(t,e),s=new me(t,e+1);let i=W();return this.Tr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new me(e,0),r=this.Pr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class me{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return F.comparator(e.key,t.key)||Y(e.pr,t.pr)}static Er(e,t){return Y(e.pr,t.pr)||F.comparator(e.key,t.key)}}/**
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
 */class Iw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new ve(me.Ir)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new zv(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.wr=this.wr.add(new me(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return k.resolve(a)}lookupMutationBatch(e,t){return k.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.br(r),i=s<0?0:s;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new me(t,0),s=new me(t,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],a=>{const l=this.Sr(a.pr);i.push(l)}),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ve(Y);return t.forEach(s=>{const i=new me(s,0),a=new me(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,a],l=>{r=r.add(l.pr)})}),k.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;F.isDocumentKey(i)||(i=i.child(""));const a=new me(new F(i),0);let l=new ve(Y);return this.wr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.pr)),!0)},a),k.resolve(this.Dr(l))}Dr(e){const t=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){te(this.Cr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return k.forEach(t.mutations,s=>{const i=new me(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,t){const r=new me(t,0),s=this.wr.firstAfterOrEqual(r);return k.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}Cr(e,t){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class bw{constructor(e){this.vr=e,this.docs=function(){return new ie(F.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.vr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return k.resolve(r?r.document.mutableCopy():xe.newInvalidDocument(t))}getEntries(e,t){let r=ht();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():xe.newInvalidDocument(s))}),k.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=ht();const a=t.path,l=new F(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:p}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||lv(av(p),r)<=0||(s.has(p.key)||hi(t,p))&&(i=i.insert(p.key,p.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,t,r,s){$()}Fr(e,t){return k.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Aw(this)}getSize(e){return k.resolve(this.size)}}class Aw extends yw{constructor(e){super(),this.ar=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),k.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}/**
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
 */class Rw{constructor(e){this.persistence=e,this.Mr=new qn(t=>aa(t),la),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.Or=0,this.Nr=new da,this.targetCount=0,this.Lr=Dn.Nn()}forEachTarget(e,t){return this.Mr.forEach((r,s)=>t(s)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Or&&(this.Or=t),k.resolve()}qn(e){this.Mr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Lr=new Dn(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.qn(t),k.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Mr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Mr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),k.waitFor(i).next(()=>s)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const r=this.Mr.get(t)||null;return k.resolve(r)}addMatchingKeys(e,t,r){return this.Nr.dr(t,r),k.resolve()}removeMatchingKeys(e,t,r){this.Nr.Rr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),k.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),k.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Nr.gr(t);return k.resolve(r)}containsKey(e,t){return k.resolve(this.Nr.containsKey(t))}}/**
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
 */class xw{constructor(e,t){this.Br={},this.overlays={},this.kr=new ra(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new Rw(this),this.indexManager=new gw,this.remoteDocumentCache=function(s){return new bw(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new pw(t),this.$r=new Ew(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Tw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Br[e.toKey()];return r||(r=new Iw(t,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,r){M("MemoryPersistence","Starting transaction:",e);const s=new Sw(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,t){return k.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,t)))}}class Sw extends uv{constructor(e){super(),this.currentSequenceNumber=e}}class fa{constructor(e){this.persistence=e,this.zr=new da,this.jr=null}static Hr(e){return new fa(e)}get Jr(){if(this.jr)return this.jr;throw $()}addReference(e,t,r){return this.zr.addReference(r,t),this.Jr.delete(r.toString()),k.resolve()}removeReference(e,t,r){return this.zr.removeReference(r,t),this.Jr.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),k.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Jr,r=>{const s=F.fromPath(r);return this.Yr(e,s).next(i=>{i||t.removeEntry(s,z.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(r=>{r?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return k.or([()=>k.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}/**
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
 */class pa{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.qi=r,this.Qi=s}static Ki(e,t){let r=W(),s=W();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new pa(e,t.fromCache,r,s)}}/**
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
 */class Pw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Cw{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return dg()?8:hv(we())>0?6:4}()}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ji(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Hi(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Pw;return this.Ji(e,t,a).next(l=>{if(i.result=l,this.Ui)return this.Yi(e,t,a,l.size)})}).next(()=>i.result)}Yi(e,t,r,s){return r.documentReadCount<this.Wi?(hr()<=G.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",En(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),k.resolve()):(hr()<=G.DEBUG&&M("QueryEngine","Query:",En(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(hr()<=G.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",En(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ke(t))):k.resolve())}ji(e,t){if(kc(t))return k.resolve(null);let r=Ke(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Co(t,null,"F"),r=Ke(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=W(...i);return this.zi.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.Zi(t,l);return this.Xi(t,h,a,c.readTime)?this.ji(e,Co(t,null,"F")):this.es(e,h,t,c)}))})))}Hi(e,t,r,s){return kc(t)||s.isEqual(z.min())?k.resolve(null):this.zi.getDocuments(e,r).next(i=>{const a=this.Zi(t,i);return this.Xi(t,a,r,s)?k.resolve(null):(hr()<=G.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),En(t)),this.es(e,a,t,ov(s,-1)).next(l=>l))})}Zi(e,t){let r=new ve(Wh(e));return t.forEach((s,i)=>{hi(e,i)&&(r=r.add(i))}),r}Xi(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,t,r){return hr()<=G.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",En(t)),this.zi.getDocumentsMatchingQuery(e,t,jt.min(),r)}es(e,t,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */class Nw{constructor(e,t,r,s){this.persistence=e,this.ts=t,this.serializer=s,this.ns=new ie(Y),this.rs=new qn(i=>aa(i),la),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ww(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}}function kw(n,e,t,r){return new Nw(n,e,t,r)}async function md(n,e){const t=H(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t._s(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=W();for(const h of s){a.push(h.batchId);for(const p of h.mutations)c=c.add(p.key)}for(const h of i){l.push(h.batchId);for(const p of h.mutations)c=c.add(p.key)}return t.localDocuments.getDocuments(r,c).next(h=>({us:h,removedBatchIds:a,addedBatchIds:l}))})})}function Ow(n,e){const t=H(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.os.newChangeBuffer({trackRemovals:!0});return function(l,c,h,p){const g=h.batch,w=g.keys();let x=k.resolve();return w.forEach(C=>{x=x.next(()=>p.getEntry(c,C)).next(N=>{const R=h.docVersions.get(C);te(R!==null),N.version.compareTo(R)<0&&(g.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),p.addEntry(N)))})}),x.next(()=>l.mutationQueue.removeMutationBatch(c,g))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=W();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function gd(n){const e=H(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}function Dw(n,e){const t=H(n),r=e.snapshotVersion;let s=t.ns;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.os.newChangeBuffer({trackRemovals:!0});s=t.ns;const l=[];e.targetChanges.forEach((p,g)=>{const w=s.get(g);if(!w)return;l.push(t.Qr.removeMatchingKeys(i,p.removedDocuments,g).next(()=>t.Qr.addMatchingKeys(i,p.addedDocuments,g)));let x=w.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?x=x.withResumeToken(Se.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):p.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(p.resumeToken,r)),s=s.insert(g,x),function(N,R,V){return N.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(w,x,p)&&l.push(t.Qr.updateTargetData(i,x))});let c=ht(),h=W();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,p))}),l.push(Vw(i,a,e.documentUpdates).next(p=>{c=p.cs,h=p.ls})),!r.isEqual(z.min())){const p=t.Qr.getLastRemoteSnapshotVersion(i).next(g=>t.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(p)}return k.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(t.ns=s,i))}function Vw(n,e,t){let r=W(),s=W();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=ht();return t.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(z.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):M("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{cs:a,ls:s}})}function Lw(n,e){const t=H(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Mw(n,e){const t=H(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Qr.getTargetData(r,e).next(i=>i?(s=i,k.resolve(s)):t.Qr.allocateTargetId(r).next(a=>(s=new Nt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.ns=t.ns.insert(r.targetId,r),t.rs.set(e,r.targetId)),r})}async function Vo(n,e,t){const r=H(n),s=r.ns.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Ur(a))throw a;M("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function $c(n,e,t){const r=H(n);let s=z.min(),i=W();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,p){const g=H(c),w=g.rs.get(p);return w!==void 0?k.resolve(g.ns.get(w)):g.Qr.getTargetData(h,p)}(r,a,Ke(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r.ts.getDocumentsMatchingQuery(a,e,t?s:z.min(),t?i:W())).next(l=>(jw(r,Pv(e),l),{documents:l,hs:i})))}function jw(n,e,t){let r=n.ss.get(e)||z.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.ss.set(e,r)}class zc{constructor(){this.activeTargetIds=Vv()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Uw{constructor(){this.no=new zc,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,r){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new zc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Fw{io(e){}shutdown(){}}/**
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
 */class Hc{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let _s=null;function oo(){return _s===null?_s=function(){return 268435456+Math.round(2147483648*Math.random())}():_s++,"0x"+_s.toString(16)}/**
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
 */const Bw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class qw{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const Ae="WebChannelConnection";class $w extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+t.host,this.So=`projects/${s}/databases/${i}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Do(){return!1}Co(t,r,s,i,a){const l=oo(),c=this.vo(t,r.toUriEncodedString());M("RestConnection",`Sending RPC '${t}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(h,i,a),this.Mo(t,c,h,s).then(p=>(M("RestConnection",`Received RPC '${t}' ${l}: `,p),p),p=>{throw Cn("RestConnection",`RPC '${t}' ${l} failed with error: `,p,"url: ",c,"request:",s),p})}xo(t,r,s,i,a,l){return this.Co(t,r,s,i,a)}Fo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}vo(t,r){const s=Bw[t];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,t,r,s){const i=oo();return new Promise((a,l)=>{const c=new xh;c.setWithCredentials(!0),c.listenOnce(Ph.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ts.NO_ERROR:const p=c.getResponseJson();M(Ae,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(p)),a(p);break;case Ts.TIMEOUT:M(Ae,`RPC '${e}' ${i} timed out`),l(new U(O.DEADLINE_EXCEEDED,"Request time out"));break;case Ts.HTTP_ERROR:const g=c.getStatus();if(M(Ae,`RPC '${e}' ${i} failed with status:`,g,"response text:",c.getResponseText()),g>0){let w=c.getResponseJson();Array.isArray(w)&&(w=w[0]);const x=w==null?void 0:w.error;if(x&&x.status&&x.message){const C=function(R){const V=R.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(V)>=0?V:O.UNKNOWN}(x.status);l(new U(C,x.message))}else l(new U(O.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new U(O.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{M(Ae,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);M(Ae,`RPC '${e}' ${i} sending request:`,s),c.send(t,"POST",h,r,15)})}Oo(e,t,r){const s=oo(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=kh(),l=Nh(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.xmlHttpFactory=new Sh({})),this.Fo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const p=i.join("");M(Ae,`Creating RPC '${e}' stream ${s}: ${p}`,c);const g=a.createWebChannel(p,c);let w=!1,x=!1;const C=new qw({lo:R=>{x?M(Ae,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(w||(M(Ae,`Opening RPC '${e}' stream ${s} transport.`),g.open(),w=!0),M(Ae,`RPC '${e}' stream ${s} sending:`,R),g.send(R))},ho:()=>g.close()}),N=(R,V,j)=>{R.listen(V,L=>{try{j(L)}catch(B){setTimeout(()=>{throw B},0)}})};return N(g,mr.EventType.OPEN,()=>{x||(M(Ae,`RPC '${e}' stream ${s} transport opened.`),C.mo())}),N(g,mr.EventType.CLOSE,()=>{x||(x=!0,M(Ae,`RPC '${e}' stream ${s} transport closed`),C.po())}),N(g,mr.EventType.ERROR,R=>{x||(x=!0,Cn(Ae,`RPC '${e}' stream ${s} transport errored:`,R),C.po(new U(O.UNAVAILABLE,"The operation could not be completed")))}),N(g,mr.EventType.MESSAGE,R=>{var V;if(!x){const j=R.data[0];te(!!j);const L=j,B=L.error||((V=L[0])===null||V===void 0?void 0:V.error);if(B){M(Ae,`RPC '${e}' stream ${s} received error:`,B);const ee=B.status;let J=function(y){const E=ce[y];if(E!==void 0)return id(E)}(ee),T=B.message;J===void 0&&(J=O.INTERNAL,T="Unknown error status: "+ee+" with message "+B.message),x=!0,C.po(new U(J,T)),g.close()}else M(Ae,`RPC '${e}' stream ${s} received:`,j),C.yo(j)}}),N(l,Ch.STAT_EVENT,R=>{R.stat===Ao.PROXY?M(Ae,`RPC '${e}' stream ${s} detected buffering proxy`):R.stat===Ao.NOPROXY&&M(Ae,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.fo()},0),C}}function ao(){return typeof document<"u"?document:null}/**
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
 */function mi(n){return new ew(n,!0)}/**
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
 */class _d{constructor(e,t,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=t,this.No=r,this.Lo=s,this.Bo=i,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const t=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,t-r);s>0&&M("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class yd{constructor(e,t,r,s,i,a,l,c){this.oi=e,this.Go=r,this.zo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new _d(e,t)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,t){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():t&&t.code===O.RESOURCE_EXHAUSTED?(ut(t.toString()),ut("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):t&&t.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(t)}__(){}auth(){this.state=1;const e=this.a_(this.jo),t=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===t&&this.u_(r,s)},r=>{e(()=>{const s=new U(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(e,t){const r=this.a_(this.jo);this.stream=this.l_(e,t),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return M("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return t=>{this.oi.enqueueAndForget(()=>this.jo===e?t():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zw extends yd{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}l_(e,t){return this.connection.Oo("Listen",e,t)}onMessage(e){this.Yo.reset();const t=rw(this.serializer,e),r=function(i){if(!("targetChange"in i))return z.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?z.min():a.readTime?Qe(a.readTime):z.min()}(e);return this.listener.h_(t,r)}P_(e){const t={};t.database=Do(this.serializer),t.addTarget=function(i,a){let l;const c=a.target;if(l=Po(c)?{documents:ow(i,c)}:{query:aw(i,c)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=ld(i,a.resumeToken);const h=No(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(z.min())>0){l.readTime=zs(i,a.snapshotVersion.toTimestamp());const h=No(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=cw(this.serializer,e);r&&(t.labels=r),this.i_(t)}I_(e){const t={};t.database=Do(this.serializer),t.removeTarget=e,this.i_(t)}}class Hw extends yd{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,t){return this.connection.Oo("Write",e,t)}onMessage(e){if(te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const t=iw(e.writeResults,e.commitTime),r=Qe(e.commitTime);return this.listener.A_(r,t)}return te(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Do(this.serializer),this.i_(e)}d_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>sw(this.serializer,r))};this.i_(t)}}/**
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
 */class Ww extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new U(O.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,t,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Co(e,ko(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(O.UNKNOWN,i.toString())})}xo(e,t,r,s,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.xo(e,ko(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new U(O.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class Gw{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(ut(t),this.y_=!1):M("OnlineStateTracker",t)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class Kw{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.io(a=>{r.enqueueAndForget(async()=>{pn(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=H(c);h.M_.add(4),await qr(h),h.N_.set("Unknown"),h.M_.delete(4),await gi(h)}(this))})}),this.N_=new Gw(r,s)}}async function gi(n){if(pn(n))for(const e of n.x_)await e(!0)}async function qr(n){for(const e of n.x_)await e(!1)}function vd(n,e){const t=H(n);t.F_.has(e.targetId)||(t.F_.set(e.targetId,e),ya(t)?_a(t):$n(t).Xo()&&ga(t,e))}function ma(n,e){const t=H(n),r=$n(t);t.F_.delete(e),r.Xo()&&wd(t,e),t.F_.size===0&&(r.Xo()?r.n_():pn(t)&&t.N_.set("Unknown"))}function ga(n,e){if(n.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}$n(n).P_(e)}function wd(n,e){n.L_.xe(e),$n(n).I_(e)}function _a(n){n.L_=new Xv({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.F_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),$n(n).start(),n.N_.w_()}function ya(n){return pn(n)&&!$n(n).Zo()&&n.F_.size>0}function pn(n){return H(n).M_.size===0}function Ed(n){n.L_=void 0}async function Qw(n){n.N_.set("Online")}async function Xw(n){n.F_.forEach((e,t)=>{ga(n,e)})}async function Yw(n,e){Ed(n),ya(n)?(n.N_.D_(e),_a(n)):n.N_.set("Unknown")}async function Jw(n,e,t){if(n.N_.set("Online"),e instanceof ad&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.F_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.F_.delete(l),s.L_.removeTarget(l))}(n,e)}catch(r){M("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Hs(n,r)}else if(e instanceof As?n.L_.Ke(e):e instanceof od?n.L_.He(e):n.L_.We(e),!t.isEqual(z.min()))try{const r=await gd(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.L_.rt(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const p=i.F_.get(h);p&&i.F_.set(h,p.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const p=i.F_.get(c);if(!p)return;i.F_.set(c,p.withResumeToken(Se.EMPTY_BYTE_STRING,p.snapshotVersion)),wd(i,c);const g=new Nt(p.target,c,h,p.sequenceNumber);ga(i,g)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){M("RemoteStore","Failed to raise snapshot:",r),await Hs(n,r)}}async function Hs(n,e,t){if(!Ur(e))throw e;n.M_.add(1),await qr(n),n.N_.set("Offline"),t||(t=()=>gd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await t(),n.M_.delete(1),await gi(n)})}function Td(n,e){return e().catch(t=>Hs(n,t,e))}async function _i(n){const e=H(n),t=Ft(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;Zw(e);)try{const s=await Lw(e.localStore,r);if(s===null){e.v_.length===0&&t.n_();break}r=s.batchId,eE(e,s)}catch(s){await Hs(e,s)}Id(e)&&bd(e)}function Zw(n){return pn(n)&&n.v_.length<10}function eE(n,e){n.v_.push(e);const t=Ft(n);t.Xo()&&t.E_&&t.d_(e.mutations)}function Id(n){return pn(n)&&!Ft(n).Zo()&&n.v_.length>0}function bd(n){Ft(n).start()}async function tE(n){Ft(n).V_()}async function nE(n){const e=Ft(n);for(const t of n.v_)e.d_(t.mutations)}async function rE(n,e,t){const r=n.v_.shift(),s=ca.from(r,e,t);await Td(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await _i(n)}async function sE(n,e){e&&Ft(n).E_&&await async function(r,s){if(function(a){return Gv(a)&&a!==O.ABORTED}(s.code)){const i=r.v_.shift();Ft(r).t_(),await Td(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await _i(r)}}(n,e),Id(n)&&bd(n)}async function Wc(n,e){const t=H(n);t.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const r=pn(t);t.M_.add(3),await qr(t),r&&t.N_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.M_.delete(3),await gi(t)}async function iE(n,e){const t=H(n);e?(t.M_.delete(2),await gi(t)):e||(t.M_.add(2),await qr(t),t.N_.set("Unknown"))}function $n(n){return n.B_||(n.B_=function(t,r,s){const i=H(t);return i.f_(),new zw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Po:Qw.bind(null,n),To:Xw.bind(null,n),Ao:Yw.bind(null,n),h_:Jw.bind(null,n)}),n.x_.push(async e=>{e?(n.B_.t_(),ya(n)?_a(n):n.N_.set("Unknown")):(await n.B_.stop(),Ed(n))})),n.B_}function Ft(n){return n.k_||(n.k_=function(t,r,s){const i=H(t);return i.f_(),new Hw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:tE.bind(null,n),Ao:sE.bind(null,n),R_:nE.bind(null,n),A_:rE.bind(null,n)}),n.x_.push(async e=>{e?(n.k_.t_(),await _i(n)):(await n.k_.stop(),n.v_.length>0&&(M("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
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
 */class va{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Lt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new va(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wa(n,e){if(ut("AsyncQueue",`${e}: ${n}`),Ur(n))return new U(O.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Rn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||F.comparator(t.key,r.key):(t,r)=>F.comparator(t.key,r.key),this.keyedMap=gr(),this.sortedSet=new ie(this.comparator)}static emptySet(e){return new Rn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Rn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Rn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Gc{constructor(){this.q_=new ie(F.comparator)}track(e){const t=e.doc.key,r=this.q_.get(t);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(t,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(t):e.type===1&&r.type===2?this.q_=this.q_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):$():this.q_=this.q_.insert(t,e)}Q_(){const e=[];return this.q_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Vn{constructor(e,t,r,s,i,a,l,c,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new Vn(e,t,Rn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ui(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class oE{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class aE{constructor(){this.queries=new qn(e=>Hh(e),ui),this.onlineState="Unknown",this.z_=new Set}}async function lE(n,e){const t=H(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.W_()&&e.G_()&&(r=2):(i=new oE,r=e.G_()?0:1);try{switch(r){case 0:i.K_=await t.onListen(s,!0);break;case 1:i.K_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=wa(a,`Initialization of query '${En(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.U_.push(e),e.j_(t.onlineState),i.K_&&e.H_(i.K_)&&Ea(t)}async function cE(n,e){const t=H(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.U_.indexOf(e);a>=0&&(i.U_.splice(a,1),i.U_.length===0?s=e.G_()?0:1:!i.W_()&&e.G_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function uE(n,e){const t=H(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.U_)l.H_(s)&&(r=!0);a.K_=s}}r&&Ea(t)}function hE(n,e,t){const r=H(n),s=r.queries.get(e);if(s)for(const i of s.U_)i.onError(t);r.queries.delete(e)}function Ea(n){n.z_.forEach(e=>{e.next()})}var Lo,Kc;(Kc=Lo||(Lo={})).J_="default",Kc.Cache="cache";class dE{constructor(e,t,r){this.query=e,this.Y_=t,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Vn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),t=!0):this.ta(e,this.onlineState)&&(this.na(e),t=!0),this.X_=e,t}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let t=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),t=!0),t}ta(e,t){if(!e.fromCache||!this.G_())return!0;const r=t!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const t=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}na(e){e=Vn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Lo.Cache}}/**
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
 */class Ad{constructor(e){this.key=e}}class Rd{constructor(e){this.key=e}}class fE{constructor(e,t){this.query=e,this.la=t,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=W(),this.mutatedKeys=W(),this.Ia=Wh(e),this.Ta=new Rn(this.Ia)}get Ea(){return this.la}da(e,t){const r=t?t.Aa:new Gc,s=t?t.Ta:this.Ta;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,g)=>{const w=s.get(p),x=hi(this.query,g)?g:null,C=!!w&&this.mutatedKeys.has(w.key),N=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let R=!1;w&&x?w.data.isEqual(x.data)?C!==N&&(r.track({type:3,doc:x}),R=!0):this.Ra(w,x)||(r.track({type:2,doc:x}),R=!0,(c&&this.Ia(x,c)>0||h&&this.Ia(x,h)<0)&&(l=!0)):!w&&x?(r.track({type:0,doc:x}),R=!0):w&&!x&&(r.track({type:1,doc:w}),R=!0,(c||h)&&(l=!0)),R&&(x?(a=a.add(x),i=N?i.add(p):i.delete(p)):(a=a.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{Ta:a,Aa:r,Xi:l,mutatedKeys:i}}Ra(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const a=e.Aa.Q_();a.sort((p,g)=>function(x,C){const N=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return N(x)-N(C)}(p.type,g.type)||this.Ia(p.doc,g.doc)),this.Va(r),s=s!=null&&s;const l=t&&!s?this.ma():[],c=this.Pa.size===0&&this.current&&!s?1:0,h=c!==this.ha;return this.ha=c,a.length!==0||h?{snapshot:new Vn(this.query,e.Ta,i,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Gc,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(t=>this.la=this.la.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.la=this.la.delete(t)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=W(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const t=[];return e.forEach(r=>{this.Pa.has(r)||t.push(new Rd(r))}),this.Pa.forEach(r=>{e.has(r)||t.push(new Ad(r))}),t}pa(e){this.la=e.hs,this.Pa=W();const t=this.da(e.documents);return this.applyChanges(t,!0)}ya(){return Vn.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class pE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class mE{constructor(e){this.key=e,this.wa=!1}}class gE{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new qn(l=>Hh(l),ui),this.Da=new Map,this.Ca=new Set,this.va=new ie(F.comparator),this.Fa=new Map,this.Ma=new da,this.xa={},this.Oa=new Map,this.Na=Dn.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function _E(n,e,t=!0){const r=kd(n);let s;const i=r.ba.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ya()):s=await xd(r,e,t,!0),s}async function yE(n,e){const t=kd(n);await xd(t,e,!0,!1)}async function xd(n,e,t,r){const s=await Mw(n.localStore,Ke(e)),i=s.targetId,a=t?n.sharedClientState.addLocalQueryTarget(i):"not-current";let l;return r&&(l=await vE(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&vd(n.remoteStore,s),l}async function vE(n,e,t,r,s){n.Ba=(g,w,x)=>async function(N,R,V,j){let L=R.view.da(V);L.Xi&&(L=await $c(N.localStore,R.query,!1).then(({documents:T})=>R.view.da(T,L)));const B=j&&j.targetChanges.get(R.targetId),ee=j&&j.targetMismatches.get(R.targetId)!=null,J=R.view.applyChanges(L,N.isPrimaryClient,B,ee);return Xc(N,R.targetId,J.fa),J.snapshot}(n,g,w,x);const i=await $c(n.localStore,e,!0),a=new fE(e,i.hs),l=a.da(i.documents),c=Br.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(l,n.isPrimaryClient,c);Xc(n,t,h.fa);const p=new pE(e,t,a);return n.ba.set(e,p),n.Da.has(t)?n.Da.get(t).push(e):n.Da.set(t,[e]),h.snapshot}async function wE(n,e,t){const r=H(n),s=r.ba.get(e),i=r.Da.get(s.targetId);if(i.length>1)return r.Da.set(s.targetId,i.filter(a=>!ui(a,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Vo(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&ma(r.remoteStore,s.targetId),Mo(r,s.targetId)}).catch(jr)):(Mo(r,s.targetId),await Vo(r.localStore,s.targetId,!0))}async function EE(n,e){const t=H(n),r=t.ba.get(e),s=t.Da.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ma(t.remoteStore,r.targetId))}async function TE(n,e,t){const r=PE(n);try{const s=await function(a,l){const c=H(a),h=fe.now(),p=l.reduce((x,C)=>x.add(C.key),W());let g,w;return c.persistence.runTransaction("Locally write mutations","readwrite",x=>{let C=ht(),N=W();return c.os.getEntries(x,p).next(R=>{C=R,C.forEach((V,j)=>{j.isValidDocument()||(N=N.add(V))})}).next(()=>c.localDocuments.getOverlayedDocuments(x,C)).next(R=>{g=R;const V=[];for(const j of l){const L=qv(j,g.get(j.key).overlayedDocument);L!=null&&V.push(new fn(j.key,L,Mh(L.value.mapValue),at.exists(!0)))}return c.mutationQueue.addMutationBatch(x,h,V,l)}).next(R=>{w=R;const V=R.applyToLocalDocumentSet(g,N);return c.documentOverlayCache.saveOverlays(x,R.batchId,V)})}).then(()=>({batchId:w.batchId,changes:Kh(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let h=a.xa[a.currentUser.toKey()];h||(h=new ie(Y)),h=h.insert(l,c),a.xa[a.currentUser.toKey()]=h}(r,s.batchId,t),await $r(r,s.changes),await _i(r.remoteStore)}catch(s){const i=wa(s,"Failed to persist write");t.reject(i)}}async function Sd(n,e){const t=H(n);try{const r=await Dw(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Fa.get(i);a&&(te(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.wa=!0:s.modifiedDocuments.size>0?te(a.wa):s.removedDocuments.size>0&&(te(a.wa),a.wa=!1))}),await $r(t,r,e)}catch(r){await jr(r)}}function Qc(n,e,t){const r=H(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.ba.forEach((i,a)=>{const l=a.view.j_(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=H(a);c.onlineState=l;let h=!1;c.queries.forEach((p,g)=>{for(const w of g.U_)w.j_(l)&&(h=!0)}),h&&Ea(c)}(r.eventManager,e),s.length&&r.Sa.h_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function IE(n,e,t){const r=H(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Fa.get(e),i=s&&s.key;if(i){let a=new ie(F.comparator);a=a.insert(i,xe.newNoDocument(i,z.min()));const l=W().add(i),c=new pi(z.min(),new Map,new ie(Y),a,l);await Sd(r,c),r.va=r.va.remove(i),r.Fa.delete(e),Ta(r)}else await Vo(r.localStore,e,!1).then(()=>Mo(r,e,t)).catch(jr)}async function bE(n,e){const t=H(n),r=e.batch.batchId;try{const s=await Ow(t.localStore,e);Cd(t,r,null),Pd(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await $r(t,s)}catch(s){await jr(s)}}async function AE(n,e,t){const r=H(n);try{const s=await function(a,l){const c=H(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let p;return c.mutationQueue.lookupMutationBatch(h,l).next(g=>(te(g!==null),p=g.keys(),c.mutationQueue.removeMutationBatch(h,g))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,p,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p)).next(()=>c.localDocuments.getDocuments(h,p))})}(r.localStore,e);Cd(r,e,t),Pd(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await $r(r,s)}catch(s){await jr(s)}}function Pd(n,e){(n.Oa.get(e)||[]).forEach(t=>{t.resolve()}),n.Oa.delete(e)}function Cd(n,e,t){const r=H(n);let s=r.xa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.xa[r.currentUser.toKey()]=s}}function Mo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Da.get(e))n.ba.delete(r),t&&n.Sa.ka(r,t);n.Da.delete(e),n.isPrimaryClient&&n.Ma.Vr(e).forEach(r=>{n.Ma.containsKey(r)||Nd(n,r)})}function Nd(n,e){n.Ca.delete(e.path.canonicalString());const t=n.va.get(e);t!==null&&(ma(n.remoteStore,t),n.va=n.va.remove(e),n.Fa.delete(t),Ta(n))}function Xc(n,e,t){for(const r of t)r instanceof Ad?(n.Ma.addReference(r.key,e),RE(n,r)):r instanceof Rd?(M("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,e),n.Ma.containsKey(r.key)||Nd(n,r.key)):$()}function RE(n,e){const t=e.key,r=t.path.canonicalString();n.va.get(t)||n.Ca.has(r)||(M("SyncEngine","New document in limbo: "+t),n.Ca.add(r),Ta(n))}function Ta(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const e=n.Ca.values().next().value;n.Ca.delete(e);const t=new F(se.fromString(e)),r=n.Na.next();n.Fa.set(r,new mE(t)),n.va=n.va.insert(t,r),vd(n.remoteStore,new Nt(Ke(zh(t.path)),r,"TargetPurposeLimboResolution",ra.oe))}}async function $r(n,e,t){const r=H(n),s=[],i=[],a=[];r.ba.isEmpty()||(r.ba.forEach((l,c)=>{a.push(r.Ba(c,e,t).then(h=>{if((h||t)&&r.isPrimaryClient){const p=h&&!h.fromCache;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=pa.Ki(c.targetId,h);i.push(p)}}))}),await Promise.all(a),r.Sa.h_(s),await async function(c,h){const p=H(c);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>k.forEach(h,w=>k.forEach(w.qi,x=>p.persistence.referenceDelegate.addReference(g,w.targetId,x)).next(()=>k.forEach(w.Qi,x=>p.persistence.referenceDelegate.removeReference(g,w.targetId,x)))))}catch(g){if(!Ur(g))throw g;M("LocalStore","Failed to update sequence numbers: "+g)}for(const g of h){const w=g.targetId;if(!g.fromCache){const x=p.ns.get(w),C=x.snapshotVersion,N=x.withLastLimboFreeSnapshotVersion(C);p.ns=p.ns.insert(w,N)}}}(r.localStore,i))}async function xE(n,e){const t=H(n);if(!t.currentUser.isEqual(e)){M("SyncEngine","User change. New user:",e.toKey());const r=await md(t.localStore,e);t.currentUser=e,function(i,a){i.Oa.forEach(l=>{l.forEach(c=>{c.reject(new U(O.CANCELLED,a))})}),i.Oa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await $r(t,r.us)}}function SE(n,e){const t=H(n),r=t.Fa.get(e);if(r&&r.wa)return W().add(r.key);{let s=W();const i=t.Da.get(e);if(!i)return s;for(const a of i){const l=t.ba.get(a);s=s.unionWith(l.view.Ea)}return s}}function kd(n){const e=H(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Sd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=SE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=IE.bind(null,e),e.Sa.h_=uE.bind(null,e.eventManager),e.Sa.ka=hE.bind(null,e.eventManager),e}function PE(n){const e=H(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=bE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=AE.bind(null,e),e}class Yc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=mi(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return kw(this.persistence,new Cw,e.initialUser,this.serializer)}createPersistence(e){return new xw(fa.Hr,this.serializer)}createSharedClientState(e){return new Uw}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class CE{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Qc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=xE.bind(null,this.syncEngine),await iE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new aE}()}createDatastore(e){const t=mi(e.databaseInfo.databaseId),r=function(i){return new $w(i)}(e.databaseInfo);return function(i,a,l,c){return new Ww(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new Kw(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Qc(this.syncEngine,t,0),function(){return Hc.D()?new Hc:new Fw}())}createSyncEngine(e,t){return function(s,i,a,l,c,h,p){const g=new gE(s,i,a,l,c,h);return p&&(g.La=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(r){const s=H(r);M("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await qr(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class NE{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):ut("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class kE{constructor(e,t,r,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Re.UNAUTHENTICATED,this.clientId=Dh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{M("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(M("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(O.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Lt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=wa(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function lo(n,e){n.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await md(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Jc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await DE(n);M("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Wc(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Wc(e.remoteStore,s)),n._onlineComponents=e}function OE(n){return n.name==="FirebaseError"?n.code===O.FAILED_PRECONDITION||n.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function DE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await lo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!OE(t))throw t;Cn("Error using user provided cache. Falling back to memory cache: "+t),await lo(n,new Yc)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await lo(n,new Yc);return n._offlineComponents}async function Od(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await Jc(n,n._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await Jc(n,new CE))),n._onlineComponents}function VE(n){return Od(n).then(e=>e.syncEngine)}async function LE(n){const e=await Od(n),t=e.eventManager;return t.onListen=_E.bind(null,e.syncEngine),t.onUnlisten=wE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=yE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=EE.bind(null,e.syncEngine),t}function ME(n,e,t={}){const r=new Lt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const p=new NE({next:w=>{a.enqueueAndForget(()=>cE(i,g)),w.fromCache&&c.source==="server"?h.reject(new U(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(w)},error:w=>h.reject(w)}),g=new dE(l,p,{includeMetadataChanges:!0,ra:!0});return lE(i,g)}(await LE(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Dd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Zc=new Map;/**
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
 */function Vd(n,e,t){if(!t)throw new U(O.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function jE(n,e,t,r){if(e===!0&&r===!0)throw new U(O.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function eu(n){if(!F.isDocumentKey(n))throw new U(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function tu(n){if(F.isDocumentKey(n))throw new U(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ia(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":$()}function Ws(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new U(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ia(n);throw new U(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class nu{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new U(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}jE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Dd((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new U(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new U(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new U(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class yi{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nu(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Yy;switch(r.type){case"firstParty":return new tv(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new U(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Zc.get(t);r&&(M("ComponentProvider","Removing Datastore"),Zc.delete(t),r.terminate())}(this),Promise.resolve()}}function UE(n,e,t,r={}){var s;const i=(n=Ws(n,yi))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&Cn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=Re.MOCK_USER;else{l=Ku(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new U(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Re(h)}n._authCredentials=new Jy(new Oh(l,c))}}/**
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
 */class vi{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new vi(this.firestore,e,this._query)}}class $e{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $e(this.firestore,e,this._key)}}class Mt extends vi{constructor(e,t,r){super(e,t,zh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $e(this.firestore,null,new F(e))}withConverter(e){return new Mt(this.firestore,e,this._path)}}function pt(n,e,...t){if(n=pe(n),Vd("collection","path",e),n instanceof yi){const r=se.fromString(e,...t);return tu(r),new Mt(n,null,r)}{if(!(n instanceof $e||n instanceof Mt))throw new U(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(se.fromString(e,...t));return tu(r),new Mt(n.firestore,null,r)}}function FE(n,e,...t){if(n=pe(n),arguments.length===1&&(e=Dh.newId()),Vd("doc","path",e),n instanceof yi){const r=se.fromString(e,...t);return eu(r),new $e(n,null,new F(r))}{if(!(n instanceof $e||n instanceof Mt))throw new U(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(se.fromString(e,...t));return eu(r),new $e(n.firestore,n instanceof Mt?n.converter:null,new F(r))}}/**
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
 */class BE{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new _d(this,"async_queue_retry"),this.hu=()=>{const t=ao();t&&M("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Yo.Wo()};const e=ao();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const t=ao();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const t=new Lt;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Ur(e))throw e;M("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const t=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw ut("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=t,t}enqueueAfterDelay(e,t,r){this.Pu(),this.lu.indexOf(e)>-1&&(t=0);const s=va.createAndSchedule(this,e,t,r,i=>this.Eu(i));return this._u.push(s),s}Pu(){this.au&&$()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const t of this._u)if(t.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this._u)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const t=this._u.indexOf(e);this._u.splice(t,1)}}class ba extends yi{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=function(){return new BE}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Md(this),this._firestoreClient.terminate()}}function qE(n,e){const t=typeof n=="object"?n:ii(),r=typeof n=="string"?n:"(default)",s=zt(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Hu("firestore");i&&UE(s,...i)}return s}function Ld(n){return n._firestoreClient||Md(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Md(n){var e,t,r;const s=n._freezeSettings(),i=function(l,c,h,p){return new pv(l,c,h,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Dd(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new kE(n._authCredentials,n._appCheckCredentials,n._queue,i),!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Ln{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ln(Se.fromBase64String(e))}catch(t){throw new U(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ln(Se.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Aa{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new U(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class jd{constructor(e){this._methodName=e}}/**
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
 */class Ra{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new U(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new U(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}}/**
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
 */const $E=/^__.*__$/;class zE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new fn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Fr(e,this.data,t,this.fieldTransforms)}}function Ud(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class xa{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new xa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.gu({path:r,yu:!1});return s.wu(e),s}Su(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Gs(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(Ud(this.fu)&&$E.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class HE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||mi(e)}Fu(e,t,r,s=!1){return new xa({fu:e,methodName:t,vu:r,path:ye.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function WE(n){const e=n._freezeSettings(),t=mi(n._databaseId);return new HE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function GE(n,e,t,r,s,i={}){const a=n.Fu(i.merge||i.mergeFields?2:0,e,t,s);$d("Data must be an object, but it was:",a,r);const l=Bd(r,a);let c,h;if(i.merge)c=new qe(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const p=[];for(const g of i.mergeFields){const w=KE(e,g,t);if(!a.contains(w))throw new U(O.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);XE(p,w)||p.push(w)}c=new qe(p),h=a.fieldTransforms.filter(g=>c.covers(g.field))}else c=null,h=a.fieldTransforms;return new zE(new je(l),c,h)}function Fd(n,e){if(qd(n=pe(n)))return $d("Unsupported field value:",e,n),Bd(n,e);if(n instanceof jd)return function(r,s){if(!Ud(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=Fd(l,s.bu(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=pe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Lv(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=fe.fromDate(r);return{timestampValue:zs(s.serializer,i)}}if(r instanceof fe){const i=new fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:zs(s.serializer,i)}}if(r instanceof Ra)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ln)return{bytesValue:ld(s.serializer,r._byteString)};if(r instanceof $e){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ha(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${Ia(r)}`)}(n,e)}function Bd(n,e){const t={};return Vh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Bn(n,(r,s)=>{const i=Fd(s,e.pu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function qd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof fe||n instanceof Ra||n instanceof Ln||n instanceof $e||n instanceof jd)}function $d(n,e,t){if(!qd(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Ia(t);throw r==="an object"?e.Du(n+" a custom object"):e.Du(n+" "+r)}}function KE(n,e,t){if((e=pe(e))instanceof Aa)return e._internalPath;if(typeof e=="string")return zd(n,e);throw Gs("Field path arguments must be of type string or ",n,!1,void 0,t)}const QE=new RegExp("[~\\*/\\[\\]]");function zd(n,e,t){if(e.search(QE)>=0)throw Gs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Aa(...e.split("."))._internalPath}catch{throw Gs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Gs(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new U(O.INVALID_ARGUMENT,l+n+c)}function XE(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Hd{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new $e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new YE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Wd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class YE extends Hd{data(){return super.data()}}function Wd(n,e){return typeof e=="string"?zd(n,e):e instanceof Aa?e._internalPath:e._delegate._internalPath}/**
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
 */function JE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new U(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ZE{convertValue(e,t="none"){switch(an(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(on(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw $()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Bn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertGeoPoint(e){return new Ra(ue(e.latitude),ue(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ia(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Cr(e));default:return null}}convertTimestamp(e){const t=Ut(e);return new fe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=se.fromString(e);te(pd(r));const s=new Nr(r.get(1),r.get(3)),i=new F(r.popFirst(5));return s.isEqual(t)||ut(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function e0(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
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
 */class ys{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class t0 extends Hd{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Rs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Wd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Rs extends t0{data(e={}){return super.data(e)}}class n0{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new ys(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Rs(this._firestore,this._userDataWriter,r.key,r,new ys(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new U(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new Rs(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ys(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Rs(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ys(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,p=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:r0(l.type),doc:c,oldIndex:h,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function r0(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}class s0 extends ZE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ln(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new $e(this.firestore,null,t)}}function zn(n){n=Ws(n,vi);const e=Ws(n.firestore,ba),t=Ld(e),r=new s0(e);return JE(n._query),ME(t,n._query).then(s=>new n0(e,r,n,s))}function Sa(n,e){const t=Ws(n.firestore,ba),r=FE(n),s=e0(n.converter,e);return i0(t,[GE(WE(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,at.exists(!1))]).then(()=>r)}function i0(n,e){return function(r,s){const i=new Lt;return r.asyncQueue.enqueueAndForget(async()=>TE(await VE(r),s,i)),i.promise}(Ld(n),e)}(function(e,t=!0){(function(s){Fn=s})(dn),ze(new Ue("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new ba(new Zy(r.getProvider("auth-internal")),new rv(r.getProvider("app-check-internal")),function(h,p){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new U(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Nr(h.options.projectId,p)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Oe(Ic,"4.6.3",e),Oe(Ic,"4.6.3","esm2017")})();function Pa(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Gd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const o0=Gd,Kd=new hn("auth","Firebase",Gd());/**
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
 */const Ks=new si("@firebase/auth");function a0(n,...e){Ks.logLevel<=G.WARN&&Ks.warn(`Auth (${dn}): ${n}`,...e)}function xs(n,...e){Ks.logLevel<=G.ERROR&&Ks.error(`Auth (${dn}): ${n}`,...e)}/**
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
 */function He(n,...e){throw Ca(n,...e)}function Xe(n,...e){return Ca(n,...e)}function Qd(n,e,t){const r=Object.assign(Object.assign({},o0()),{[e]:t});return new hn("auth","Firebase",r).create(e,{appName:n.name})}function lt(n){return Qd(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ca(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Kd.create(n,...e)}function q(n,e,...t){if(!n)throw Ca(e,...t)}function rt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw xs(e),new Error(e)}function dt(n,e){n||rt(e)}/**
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
 */function jo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function l0(){return ru()==="http:"||ru()==="https:"}function ru(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function c0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(l0()||Qu()||"connection"in navigator)?navigator.onLine:!0}function u0(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class zr{constructor(e,t){this.shortDelay=e,this.longDelay=t,dt(t>e,"Short delay should be less than long delay!"),this.isMobile=lg()||ug()}get(){return c0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Na(n,e){dt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Xd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const h0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const d0=new zr(3e4,6e4);function mt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function gt(n,e,t,r,s={}){return Yd(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=Mr(Object.assign({key:n.config.apiKey},a)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Xd.fetch()(Jd(n,n.config.apiHost,t,l),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Yd(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},h0),e);try{const s=new p0(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw vs(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw vs(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw vs(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw vs(n,"user-disabled",a);const p=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Qd(n,p,h);He(n,p)}}catch(s){if(s instanceof Fe)throw s;He(n,"network-request-failed",{message:String(s)})}}async function Hr(n,e,t,r,s={}){const i=await gt(n,e,t,r,s);return"mfaPendingCredential"in i&&He(n,"multi-factor-auth-required",{_serverResponse:i}),i}function Jd(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Na(n.config,s):`${n.config.apiScheme}://${s}`}function f0(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class p0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Xe(this.auth,"network-request-failed")),d0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vs(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Xe(n,e,r);return s.customData._tokenResponse=t,s}function su(n){return n!==void 0&&n.enterprise!==void 0}class m0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return f0(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function g0(n,e){return gt(n,"GET","/v2/recaptchaConfig",mt(n,e))}/**
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
 */async function _0(n,e){return gt(n,"POST","/v1/accounts:delete",e)}async function Zd(n,e){return gt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ir(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function y0(n,e=!1){const t=pe(n),r=await t.getIdToken(e),s=ka(r);q(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ir(co(s.auth_time)),issuedAtTime:Ir(co(s.iat)),expirationTime:Ir(co(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function co(n){return Number(n)*1e3}function ka(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return xs("JWT malformed, contained fewer than 3 sections"),null;try{const s=$u(t);return s?JSON.parse(s):(xs("Failed to decode base64 JWT payload"),null)}catch(s){return xs("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function iu(n){const e=ka(n);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Vr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Fe&&v0(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function v0({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class w0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Uo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ir(this.lastLoginAt),this.creationTime=Ir(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Qs(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Vr(n,Zd(t,{idToken:r}));q(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ef(i.providerUserInfo):[],l=E0(n.providerData,a),c=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(l!=null&&l.length),p=c?h:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Uo(i.createdAt,i.lastLoginAt),isAnonymous:p};Object.assign(n,g)}async function Fo(n){const e=pe(n);await Qs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function E0(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ef(n){return n.map(e=>{var{providerId:t}=e,r=Pa(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function T0(n,e){const t=await Yd(n,{},async()=>{const r=Mr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=Jd(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Xd.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function I0(n,e){return gt(n,"POST","/v2/accounts:revokeToken",mt(n,e))}/**
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
 */class xn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):iu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){q(e.length!==0,"internal-error");const t=iu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await T0(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new xn;return r&&(q(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(q(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(q(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xn,this.toJSON())}_performRefresh(){return rt("not implemented")}}/**
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
 */function Tt(n,e){q(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class st{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Pa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new w0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Uo(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Vr(this,this.stsTokenManager.getToken(this.auth,e));return q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return y0(this,e)}reload(){return Fo(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new st(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Qs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(We(this.auth.app))return Promise.reject(lt(this.auth));const e=await this.getIdToken();return await Vr(this,_0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,l,c,h,p;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,w=(s=t.email)!==null&&s!==void 0?s:void 0,x=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,C=(a=t.photoURL)!==null&&a!==void 0?a:void 0,N=(l=t.tenantId)!==null&&l!==void 0?l:void 0,R=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,V=(h=t.createdAt)!==null&&h!==void 0?h:void 0,j=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:L,emailVerified:B,isAnonymous:ee,providerData:J,stsTokenManager:T}=t;q(L&&T,e,"internal-error");const _=xn.fromJSON(this.name,T);q(typeof L=="string",e,"internal-error"),Tt(g,e.name),Tt(w,e.name),q(typeof B=="boolean",e,"internal-error"),q(typeof ee=="boolean",e,"internal-error"),Tt(x,e.name),Tt(C,e.name),Tt(N,e.name),Tt(R,e.name),Tt(V,e.name),Tt(j,e.name);const y=new st({uid:L,auth:e,email:w,emailVerified:B,displayName:g,isAnonymous:ee,photoURL:C,phoneNumber:x,tenantId:N,stsTokenManager:_,createdAt:V,lastLoginAt:j});return J&&Array.isArray(J)&&(y.providerData=J.map(E=>Object.assign({},E))),R&&(y._redirectEventId=R),y}static async _fromIdTokenResponse(e,t,r=!1){const s=new xn;s.updateFromServerResponse(t);const i=new st({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Qs(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];q(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?ef(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new xn;l.updateFromIdToken(r);const c=new st({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Uo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
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
 */const ou=new Map;function it(n){dt(n instanceof Function,"Expected a class definition");let e=ou.get(n);return e?(dt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ou.set(n,e),e)}/**
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
 */class tf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}tf.type="NONE";const au=tf;/**
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
 */function Ss(n,e,t){return`firebase:${n}:${e}:${t}`}class Sn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ss(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ss("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?st._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Sn(it(au),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||it(au);const a=Ss(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const p=await h._get(a);if(p){const g=st._fromJSON(e,p);h!==i&&(l=g),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Sn(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Sn(i,e,r))}}/**
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
 */function lu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(nf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(af(e))return"Blackberry";if(lf(e))return"Webos";if(Oa(e))return"Safari";if((e.includes("chrome/")||rf(e))&&!e.includes("edge/"))return"Chrome";if(of(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function nf(n=we()){return/firefox\//i.test(n)}function Oa(n=we()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rf(n=we()){return/crios\//i.test(n)}function sf(n=we()){return/iemobile/i.test(n)}function of(n=we()){return/android/i.test(n)}function af(n=we()){return/blackberry/i.test(n)}function lf(n=we()){return/webos/i.test(n)}function wi(n=we()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function b0(n=we()){var e;return wi(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function A0(){return hg()&&document.documentMode===10}function cf(n=we()){return wi(n)||of(n)||lf(n)||af(n)||/windows phone/i.test(n)||sf(n)}function R0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function uf(n,e=[]){let t;switch(n){case"Browser":t=lu(we());break;case"Worker":t=`${lu(we())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${dn}/${r}`}/**
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
 */class x0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function S0(n,e={}){return gt(n,"GET","/v2/passwordPolicy",mt(n,e))}/**
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
 */const P0=6;class C0{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:P0,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class N0{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cu(this),this.idTokenSubscription=new cu(this),this.beforeStateQueue=new x0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=it(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Sn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Zd(this,{idToken:e}),r=await st._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(We(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Qs(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=u0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(We(this.app))return Promise.reject(lt(this));const t=e?pe(e):null;return t&&q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return We(this.app)?Promise.reject(lt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return We(this.app)?Promise.reject(lt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(it(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await S0(this),t=new C0(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new hn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await I0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&it(e)||this._popupRedirectResolver;q(t,this,"argument-error"),this.redirectPersistenceManager=await Sn.create(this,[it(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=uf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&a0(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ht(n){return pe(n)}class cu{constructor(e){this.auth=e,this.observer=null,this.addObserver=yg(t=>this.observer=t)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ei={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function k0(n){Ei=n}function hf(n){return Ei.loadJS(n)}function O0(){return Ei.recaptchaEnterpriseScript}function D0(){return Ei.gapiScript}function V0(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const L0="recaptcha-enterprise",M0="NO_RECAPTCHA";class j0{constructor(e){this.type=L0,this.auth=Ht(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{g0(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new m0(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,a,l){const c=window.grecaptcha;su(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(M0)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,a)=>{r(this.auth).then(l=>{if(!t&&su(window.grecaptcha))s(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=O0();c.length!==0&&(c+=l),hf(c).then(()=>{s(l,i,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function uu(n,e,t,r=!1){const s=new j0(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Xs(n,e,t,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await uu(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await uu(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(i)})}/**
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
 */function U0(n,e){const t=zt(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(xr(i,e??{}))return s;He(s,"already-initialized")}return t.initialize({options:e})}function F0(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(it);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function B0(n,e,t){const r=Ht(n);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=df(e),{host:a,port:l}=q0(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),$0()}function df(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function q0(n){const e=df(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:hu(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:hu(a)}}}function hu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function $0(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Da{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return rt("not implemented")}_getIdTokenResponse(e){return rt("not implemented")}_linkToIdToken(e,t){return rt("not implemented")}_getReauthenticationResolver(e){return rt("not implemented")}}async function z0(n,e){return gt(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function H0(n,e){return Hr(n,"POST","/v1/accounts:signInWithPassword",mt(n,e))}async function ff(n,e){return gt(n,"POST","/v1/accounts:sendOobCode",mt(n,e))}async function W0(n,e){return ff(n,e)}async function G0(n,e){return ff(n,e)}/**
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
 */async function K0(n,e){return Hr(n,"POST","/v1/accounts:signInWithEmailLink",mt(n,e))}async function Q0(n,e){return Hr(n,"POST","/v1/accounts:signInWithEmailLink",mt(n,e))}/**
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
 */class Lr extends Da{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Lr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Lr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xs(e,t,"signInWithPassword",H0);case"emailLink":return K0(e,{email:this._email,oobCode:this._password});default:He(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xs(e,r,"signUpPassword",z0);case"emailLink":return Q0(e,{idToken:t,email:this._email,oobCode:this._password});default:He(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Pn(n,e){return Hr(n,"POST","/v1/accounts:signInWithIdp",mt(n,e))}/**
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
 */const X0="http://localhost";class ln extends Da{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ln(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):He("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Pa(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new ln(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Pn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Pn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Pn(e,t)}buildRequest(){const e={requestUri:X0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Mr(t)}return e}}/**
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
 */function Y0(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function J0(n){const e=fr(pr(n)).link,t=e?fr(pr(e)).deep_link_id:null,r=fr(pr(n)).deep_link_id;return(r?fr(pr(r)).link:null)||r||t||e||n}class Va{constructor(e){var t,r,s,i,a,l;const c=fr(pr(e)),h=(t=c.apiKey)!==null&&t!==void 0?t:null,p=(r=c.oobCode)!==null&&r!==void 0?r:null,g=Y0((s=c.mode)!==null&&s!==void 0?s:null);q(h&&p&&g,"argument-error"),this.apiKey=h,this.operation=g,this.code=p,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=J0(e);try{return new Va(t)}catch{return null}}}/**
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
 */class Hn{constructor(){this.providerId=Hn.PROVIDER_ID}static credential(e,t){return Lr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Va.parseLink(t);return q(r,"argument-error"),Lr._fromEmailAndCode(e,r.code,r.tenantId)}}Hn.PROVIDER_ID="password";Hn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Hn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class pf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wr extends pf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class At extends Wr{constructor(){super("facebook.com")}static credential(e){return ln._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return At.credential(e.oauthAccessToken)}catch{return null}}}At.FACEBOOK_SIGN_IN_METHOD="facebook.com";At.PROVIDER_ID="facebook.com";/**
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
 */class Rt extends Wr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ln._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Rt.credential(t,r)}catch{return null}}}Rt.GOOGLE_SIGN_IN_METHOD="google.com";Rt.PROVIDER_ID="google.com";/**
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
 */class xt extends Wr{constructor(){super("github.com")}static credential(e){return ln._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xt.credential(e.oauthAccessToken)}catch{return null}}}xt.GITHUB_SIGN_IN_METHOD="github.com";xt.PROVIDER_ID="github.com";/**
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
 */class St extends Wr{constructor(){super("twitter.com")}static credential(e,t){return ln._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return St.credential(t,r)}catch{return null}}}St.TWITTER_SIGN_IN_METHOD="twitter.com";St.PROVIDER_ID="twitter.com";/**
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
 */async function Z0(n,e){return Hr(n,"POST","/v1/accounts:signUp",mt(n,e))}/**
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
 */class cn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await st._fromIdTokenResponse(e,r,s),a=du(r);return new cn({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=du(r);return new cn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function du(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Ys extends Fe{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ys.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Ys(e,t,r,s)}}function mf(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ys._fromErrorAndOperation(n,i,e,r):i})}async function eT(n,e,t=!1){const r=await Vr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return cn._forOperation(n,"link",r)}/**
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
 */async function tT(n,e,t=!1){const{auth:r}=n;if(We(r.app))return Promise.reject(lt(r));const s="reauthenticate";try{const i=await Vr(n,mf(r,s,e,n),t);q(i.idToken,r,"internal-error");const a=ka(i.idToken);q(a,r,"internal-error");const{sub:l}=a;return q(n.uid===l,r,"user-mismatch"),cn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&He(r,"user-mismatch"),i}}/**
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
 */async function gf(n,e,t=!1){if(We(n.app))return Promise.reject(lt(n));const r="signIn",s=await mf(n,r,e),i=await cn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function nT(n,e){return gf(Ht(n),e)}/**
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
 */async function _f(n){const e=Ht(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function rT(n,e,t){const r=Ht(n);await Xs(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",G0)}async function sT(n,e,t){if(We(n.app))return Promise.reject(lt(n));const r=Ht(n),a=await Xs(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Z0).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&_f(n),c}),l=await cn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function yf(n,e,t){return We(n.app)?Promise.reject(lt(n)):nT(pe(n),Hn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&_f(n),r})}async function iT(n,e){const t=pe(n),s={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()},{email:i}=await W0(t.auth,s);i!==n.email&&await n.reload()}function oT(n,e,t,r){return pe(n).onIdTokenChanged(e,t,r)}function aT(n,e,t){return pe(n).beforeAuthStateChanged(e,t)}const Js="__sak";/**
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
 */class vf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Js,"1"),this.storage.removeItem(Js),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function lT(){const n=we();return Oa(n)||wi(n)}const cT=1e3,uT=10;class wf extends vf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=lT()&&R0(),this.fallbackToPolling=cf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);A0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,uT):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},cT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}wf.type="LOCAL";const hT=wf;/**
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
 */class Ef extends vf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ef.type="SESSION";const Tf=Ef;/**
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
 */function dT(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ti{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Ti(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(t.origin,i)),c=await dT(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ti.receivers=[];/**
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
 */function La(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class fT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const h=La("",20);s.port1.start();const p=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const w=g;if(w.data.eventId===h)switch(w.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(w.data.response);break;default:clearTimeout(p),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Ye(){return window}function pT(n){Ye().location.href=n}/**
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
 */function If(){return typeof Ye().WorkerGlobalScope<"u"&&typeof Ye().importScripts=="function"}async function mT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gT(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function _T(){return If()?self:null}/**
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
 */const bf="firebaseLocalStorageDb",yT=1,Zs="firebaseLocalStorage",Af="fbase_key";class Gr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ii(n,e){return n.transaction([Zs],e?"readwrite":"readonly").objectStore(Zs)}function vT(){const n=indexedDB.deleteDatabase(bf);return new Gr(n).toPromise()}function Bo(){const n=indexedDB.open(bf,yT);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Zs,{keyPath:Af})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Zs)?e(r):(r.close(),await vT(),e(await Bo()))})})}async function fu(n,e,t){const r=Ii(n,!0).put({[Af]:e,value:t});return new Gr(r).toPromise()}async function wT(n,e){const t=Ii(n,!1).get(e),r=await new Gr(t).toPromise();return r===void 0?null:r.value}function pu(n,e){const t=Ii(n,!0).delete(e);return new Gr(t).toPromise()}const ET=800,TT=3;class Rf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>TT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return If()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ti._getInstance(_T()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await mT(),!this.activeServiceWorker)return;this.sender=new fT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bo();return await fu(e,Js,"1"),await pu(e,Js),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>fu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>wT(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>pu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ii(s,!1).getAll();return new Gr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ET)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Rf.type="LOCAL";const IT=Rf;new zr(3e4,6e4);/**
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
 */function bT(n,e){return e?it(e):(q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ma extends Da{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Pn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Pn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function AT(n){return gf(n.auth,new Ma(n),n.bypassAuthState)}function RT(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),tT(t,new Ma(n),n.bypassAuthState)}async function xT(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),eT(t,new Ma(n),n.bypassAuthState)}/**
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
 */class xf{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return AT;case"linkViaPopup":case"linkViaRedirect":return xT;case"reauthViaPopup":case"reauthViaRedirect":return RT;default:He(this.auth,"internal-error")}}resolve(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ST=new zr(2e3,1e4);class An extends xf{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,An.currentPopupAction&&An.currentPopupAction.cancel(),An.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){dt(this.filter.length===1,"Popup operations only handle one event");const e=La();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,An.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ST.get())};e()}}An.currentPopupAction=null;/**
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
 */const PT="pendingRedirect",Ps=new Map;class CT extends xf{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ps.get(this.auth._key());if(!e){try{const r=await NT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ps.set(this.auth._key(),e)}return this.bypassAuthState||Ps.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function NT(n,e){const t=DT(e),r=OT(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function kT(n,e){Ps.set(n._key(),e)}function OT(n){return it(n._redirectPersistence)}function DT(n){return Ss(PT,n.config.apiKey,n.name)}async function VT(n,e,t=!1){if(We(n.app))return Promise.reject(lt(n));const r=Ht(n),s=bT(r,e),a=await new CT(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const LT=10*60*1e3;class MT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Sf(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Xe(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=LT&&this.cachedEventUids.clear(),this.cachedEventUids.has(mu(e))}saveEventToCache(e){this.cachedEventUids.add(mu(e)),this.lastProcessedEventTime=Date.now()}}function mu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Sf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jT(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sf(n);default:return!1}}/**
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
 */async function UT(n,e={}){return gt(n,"GET","/v1/projects",e)}/**
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
 */const FT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BT=/^https?/;async function qT(n){if(n.config.emulator)return;const{authorizedDomains:e}=await UT(n);for(const t of e)try{if($T(t))return}catch{}He(n,"unauthorized-domain")}function $T(n){const e=jo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!BT.test(t))return!1;if(FT.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const zT=new zr(3e4,6e4);function gu(){const n=Ye().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function HT(n){return new Promise((e,t)=>{var r,s,i;function a(){gu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gu(),t(Xe(n,"network-request-failed"))},timeout:zT.get()})}if(!((s=(r=Ye().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ye().gapi)===null||i===void 0)&&i.load)a();else{const l=V0("iframefcb");return Ye()[l]=()=>{gapi.load?a():t(Xe(n,"network-request-failed"))},hf(`${D0()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw Cs=null,e})}let Cs=null;function WT(n){return Cs=Cs||HT(n),Cs}/**
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
 */const GT=new zr(5e3,15e3),KT="__/auth/iframe",QT="emulator/auth/iframe",XT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JT(n){const e=n.config;q(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Na(e,QT):`https://${n.config.authDomain}/${KT}`,r={apiKey:e.apiKey,appName:n.name,v:dn},s=YT.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Mr(r).slice(1)}`}async function ZT(n){const e=await WT(n),t=Ye().gapi;return q(t,n,"internal-error"),e.open({where:document.body,url:JT(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XT,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Xe(n,"network-request-failed"),l=Ye().setTimeout(()=>{i(a)},GT.get());function c(){Ye().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
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
 */const eI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tI=500,nI=600,rI="_blank",sI="http://localhost";class _u{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iI(n,e,t,r=tI,s=nI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},eI),{width:r.toString(),height:s.toString(),top:i,left:a}),h=we().toLowerCase();t&&(l=rf(h)?rI:t),nf(h)&&(e=e||sI,c.scrollbars="yes");const p=Object.entries(c).reduce((w,[x,C])=>`${w}${x}=${C},`,"");if(b0(h)&&l!=="_self")return oI(e||"",l),new _u(null);const g=window.open(e||"",l,p);q(g,n,"popup-blocked");try{g.focus()}catch{}return new _u(g)}function oI(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const aI="__/auth/handler",lI="emulator/auth/handler",cI=encodeURIComponent("fac");async function yu(n,e,t,r,s,i){q(n.config.authDomain,n,"auth-domain-config-required"),q(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:dn,eventId:s};if(e instanceof pf){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",_g(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries({}))a[p]=g}if(e instanceof Wr){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const c=await n._getAppCheckToken(),h=c?`#${cI}=${encodeURIComponent(c)}`:"";return`${uI(n)}?${Mr(l).slice(1)}${h}`}function uI({config:n}){return n.emulator?Na(n,lI):`https://${n.authDomain}/${aI}`}/**
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
 */const uo="webStorageSupport";class hI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tf,this._completeRedirectFn=VT,this._overrideRedirectResult=kT}async _openPopup(e,t,r,s){var i;dt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await yu(e,t,r,jo(),s);return iI(e,a,La())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await yu(e,t,r,jo(),s);return pT(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(dt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await ZT(e),r=new MT(e);return t.register("authEvent",s=>(q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(uo,{type:uo},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[uo];a!==void 0&&t(!!a),He(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=qT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return cf()||Oa()||wi()}}const dI=hI;var vu="@firebase/auth",wu="1.7.4";/**
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
 */class fI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function pI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function mI(n){ze(new Ue("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;q(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uf(n)},h=new N0(r,s,i,c);return F0(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ze(new Ue("auth-internal",e=>{const t=Ht(e.getProvider("auth").getImmediate());return(r=>new fI(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Oe(vu,wu,pI(n)),Oe(vu,wu,"esm2017")}/**
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
 */const gI=5*60,_I=Gu("authIdTokenMaxAge")||gI;let Eu=null;const yI=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>_I)return;const s=t==null?void 0:t.token;Eu!==s&&(Eu=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function vI(n=ii()){const e=zt(n,"auth");if(e.isInitialized())return e.getImmediate();const t=U0(n,{popupRedirectResolver:dI,persistence:[IT,hT,Tf]}),r=Gu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=yI(i.toString());aT(t,a,()=>a(t.currentUser)),oT(t,l=>a(l))}}const s=zu("auth");return s&&B0(t,`http://${s}`),t}function wI(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}k0({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Xe("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",wI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});mI("Browser");/**
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
 */const Pf="firebasestorage.googleapis.com",Cf="storageBucket",EI=2*60*1e3,TI=10*60*1e3,II=1e3;/**
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
 */class oe extends Fe{constructor(e,t,r=0){super(ho(e),`Firebase Storage: ${t} (${ho(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,oe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ho(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var re;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(re||(re={}));function ho(n){return"storage/"+n}function ja(){const n="An unknown error occurred, please check the error payload for server response.";return new oe(re.UNKNOWN,n)}function bI(n){return new oe(re.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function AI(n){return new oe(re.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function RI(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new oe(re.UNAUTHENTICATED,n)}function xI(){return new oe(re.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function SI(n){return new oe(re.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Nf(){return new oe(re.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function kf(){return new oe(re.CANCELED,"User canceled the upload/download.")}function PI(n){return new oe(re.INVALID_URL,"Invalid URL '"+n+"'.")}function CI(n){return new oe(re.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function NI(){return new oe(re.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Cf+"' property when initializing the app?")}function Of(){return new oe(re.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function kI(){return new oe(re.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function OI(){return new oe(re.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function DI(n){return new oe(re.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function qo(n){return new oe(re.INVALID_ARGUMENT,n)}function Df(){return new oe(re.APP_DELETED,"The Firebase app was deleted.")}function VI(n){return new oe(re.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function br(n,e){return new oe(re.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function dr(n){throw new oe(re.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class Le{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Le.makeFromUrl(e,t)}catch{return new Le(e,"")}if(r.path==="")return r;throw CI(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(B){B.path.charAt(B.path.length-1)==="/"&&(B.path_=B.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+s+a,"i"),c={bucket:1,path:3};function h(B){B.path_=decodeURIComponent(B.path)}const p="v[A-Za-z0-9_]+",g=t.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",x=new RegExp(`^https?://${g}/${p}/b/${s}/o${w}`,"i"),C={bucket:1,path:3},N=t===Pf?"(?:storage.googleapis.com|storage.cloud.google.com)":t,R="([^?#]*)",V=new RegExp(`^https?://${N}/${s}/${R}`,"i"),L=[{regex:l,indices:c,postModify:i},{regex:x,indices:C,postModify:h},{regex:V,indices:{bucket:1,path:2},postModify:h}];for(let B=0;B<L.length;B++){const ee=L[B],J=ee.regex.exec(e);if(J){const T=J[ee.indices.bucket];let _=J[ee.indices.path];_||(_=""),r=new Le(T,_),ee.postModify(r);break}}if(r==null)throw PI(e);return r}}class LI{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function MI(n,e,t){let r=1,s=null,i=null,a=!1,l=0;function c(){return l===2}let h=!1;function p(...R){h||(h=!0,e.apply(null,R))}function g(R){s=setTimeout(()=>{s=null,n(x,c())},R)}function w(){i&&clearTimeout(i)}function x(R,...V){if(h){w();return}if(R){w(),p.call(null,R,...V);return}if(c()||a){w(),p.call(null,R,...V);return}r<64&&(r*=2);let L;l===1?(l=2,L=0):L=(r+Math.random())*1e3,g(L)}let C=!1;function N(R){C||(C=!0,w(),!h&&(s!==null?(R||(l=2),clearTimeout(s),g(0)):R||(l=1)))}return g(0),i=setTimeout(()=>{a=!0,N(!0)},t),N}function jI(n){n(!1)}/**
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
 */function UI(n){return n!==void 0}function FI(n){return typeof n=="function"}function BI(n){return typeof n=="object"&&!Array.isArray(n)}function bi(n){return typeof n=="string"||n instanceof String}function Tu(n){return Ua()&&n instanceof Blob}function Ua(){return typeof Blob<"u"}function Iu(n,e,t,r){if(r<e)throw qo(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw qo(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function Kr(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function Vf(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}/**
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
 */var en;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(en||(en={}));/**
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
 */function Lf(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
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
 */class qI{constructor(e,t,r,s,i,a,l,c,h,p,g,w=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=c,this.timeout_=h,this.progressCallback_=p,this.connectionFactory_=g,this.retry=w,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((x,C)=>{this.resolve_=x,this.reject_=C,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ws(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=l=>{const c=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,h)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const l=i.getErrorCode()===en.NO_ERROR,c=i.getStatus();if(!l||Lf(c,this.additionalRetryCodes_)&&this.retry){const p=i.getErrorCode()===en.ABORT;r(!1,new ws(!1,null,p));return}const h=this.successCodes_.indexOf(c)!==-1;r(!0,new ws(h,i))})},t=(r,s)=>{const i=this.resolve_,a=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());UI(c)?i(c):i()}catch(c){a(c)}else if(l!==null){const c=ja();c.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,c)):a(c)}else if(s.canceled){const c=this.appDelete_?Df():kf();a(c)}else{const c=Nf();a(c)}};this.canceled_?t(!1,new ws(!1,null,!0)):this.backoffId_=MI(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&jI(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ws{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function $I(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function zI(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function HI(n,e){e&&(n["X-Firebase-GMPID"]=e)}function WI(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function GI(n,e,t,r,s,i,a=!0){const l=Vf(n.urlParams),c=n.url+l,h=Object.assign({},n.headers);return HI(h,e),$I(h,t),zI(h,i),WI(h,r),new qI(c,n.method,h,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a)}/**
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
 */function KI(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function QI(...n){const e=KI();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(Ua())return new Blob(n);throw new oe(re.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function XI(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function YI(n){if(typeof atob>"u")throw DI("base-64");return atob(n)}/**
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
 */const Ge={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class fo{constructor(e,t){this.data=e,this.contentType=t||null}}function JI(n,e){switch(n){case Ge.RAW:return new fo(Mf(e));case Ge.BASE64:case Ge.BASE64URL:return new fo(jf(n,e));case Ge.DATA_URL:return new fo(eb(e),tb(e))}throw ja()}function Mf(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,a=n.charCodeAt(++t);r=65536|(i&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function ZI(n){let e;try{e=decodeURIComponent(n)}catch{throw br(Ge.DATA_URL,"Malformed data URL.")}return Mf(e)}function jf(n,e){switch(n){case Ge.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw br(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Ge.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw br(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=YI(e)}catch(s){throw s.message.includes("polyfill")?s:br(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class Uf{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw br(Ge.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=nb(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function eb(n){const e=new Uf(n);return e.base64?jf(Ge.BASE64,e.rest):ZI(e.rest)}function tb(n){return new Uf(n).contentType}function nb(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class Pt{constructor(e,t){let r=0,s="";Tu(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Tu(this.data_)){const r=this.data_,s=XI(r,e,t);return s===null?null:new Pt(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Pt(r,!0)}}static getBlob(...e){if(Ua()){const t=e.map(r=>r instanceof Pt?r.data_:r);return new Pt(QI.apply(null,t))}else{const t=e.map(a=>bi(a)?JI(Ge.RAW,a).data:a.data_);let r=0;t.forEach(a=>{r+=a.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(a=>{for(let l=0;l<a.length;l++)s[i++]=a[l]}),new Pt(s,!0)}}uploadData(){return this.data_}}/**
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
 */function Ff(n){let e;try{e=JSON.parse(n)}catch{return null}return BI(e)?e:null}/**
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
 */function rb(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function sb(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function Bf(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function ib(n,e){return e}class Ne{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||ib}}let Es=null;function ob(n){return!bi(n)||n.length<2?n:Bf(n)}function qf(){if(Es)return Es;const n=[];n.push(new Ne("bucket")),n.push(new Ne("generation")),n.push(new Ne("metageneration")),n.push(new Ne("name","fullPath",!0));function e(i,a){return ob(a)}const t=new Ne("name");t.xform=e,n.push(t);function r(i,a){return a!==void 0?Number(a):a}const s=new Ne("size");return s.xform=r,n.push(s),n.push(new Ne("timeCreated")),n.push(new Ne("updated")),n.push(new Ne("md5Hash",null,!0)),n.push(new Ne("cacheControl",null,!0)),n.push(new Ne("contentDisposition",null,!0)),n.push(new Ne("contentEncoding",null,!0)),n.push(new Ne("contentLanguage",null,!0)),n.push(new Ne("contentType",null,!0)),n.push(new Ne("metadata","customMetadata",!0)),Es=n,Es}function ab(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new Le(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function lb(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const a=t[i];r[a.local]=a.xform(r,e[a.server])}return ab(r,n),r}function $f(n,e,t){const r=Ff(e);return r===null?null:lb(n,r,t)}function cb(n,e,t,r){const s=Ff(e);if(s===null||!bi(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(h=>{const p=n.bucket,g=n.fullPath,w="/b/"+a(p)+"/o/"+a(g),x=Kr(w,t,r),C=Vf({alt:"media",token:h});return x+C})[0]}function zf(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class Wn{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function ct(n){if(!n)throw ja()}function Fa(n,e){function t(r,s){const i=$f(n,s,e);return ct(i!==null),i}return t}function ub(n,e){function t(r,s){const i=$f(n,s,e);return ct(i!==null),cb(i,s,n.host,n._protocol)}return t}function Qr(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=xI():s=RI():t.getStatus()===402?s=AI(n.bucket):t.getStatus()===403?s=SI(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Hf(n){const e=Qr(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=bI(n.path)),i.serverResponse=s.serverResponse,i}return t}function hb(n,e,t){const r=e.fullServerUrl(),s=Kr(r,n.host,n._protocol),i="GET",a=n.maxOperationRetryTime,l=new Wn(s,i,Fa(n,t),a);return l.errorHandler=Hf(e),l}function db(n,e,t){const r=e.fullServerUrl(),s=Kr(r,n.host,n._protocol),i="GET",a=n.maxOperationRetryTime,l=new Wn(s,i,ub(n,t),a);return l.errorHandler=Hf(e),l}function fb(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function Wf(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=fb(null,e)),r}function pb(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function l(){let L="";for(let B=0;B<2;B++)L=L+Math.random().toString().slice(2);return L}const c=l();a["Content-Type"]="multipart/related; boundary="+c;const h=Wf(e,r,s),p=zf(h,t),g="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+c+`\r
Content-Type: `+h.contentType+`\r
\r
`,w=`\r
--`+c+"--",x=Pt.getBlob(g,r,w);if(x===null)throw Of();const C={name:h.fullPath},N=Kr(i,n.host,n._protocol),R="POST",V=n.maxUploadRetryTime,j=new Wn(N,R,Fa(n,t),V);return j.urlParams=C,j.headers=a,j.body=x.uploadData(),j.errorHandler=Qr(e),j}class ei{constructor(e,t,r,s){this.current=e,this.total=t,this.finalized=!!r,this.metadata=s||null}}function Ba(n,e){let t=null;try{t=n.getResponseHeader("X-Goog-Upload-Status")}catch{ct(!1)}return ct(!!t&&(e||["active"]).indexOf(t)!==-1),t}function mb(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),a=Wf(e,r,s),l={name:a.fullPath},c=Kr(i,n.host,n._protocol),h="POST",p={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},g=zf(a,t),w=n.maxUploadRetryTime;function x(N){Ba(N);let R;try{R=N.getResponseHeader("X-Goog-Upload-URL")}catch{ct(!1)}return ct(bi(R)),R}const C=new Wn(c,h,x,w);return C.urlParams=l,C.headers=p,C.body=g,C.errorHandler=Qr(e),C}function gb(n,e,t,r){const s={"X-Goog-Upload-Command":"query"};function i(h){const p=Ba(h,["active","final"]);let g=null;try{g=h.getResponseHeader("X-Goog-Upload-Size-Received")}catch{ct(!1)}g||ct(!1);const w=Number(g);return ct(!isNaN(w)),new ei(w,r.size(),p==="final")}const a="POST",l=n.maxUploadRetryTime,c=new Wn(t,a,i,l);return c.headers=s,c.errorHandler=Qr(e),c}const bu=256*1024;function _b(n,e,t,r,s,i,a,l){const c=new ei(0,0);if(a?(c.current=a.current,c.total=a.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw kI();const h=c.total-c.current;let p=h;s>0&&(p=Math.min(p,s));const g=c.current,w=g+p;let x="";p===0?x="finalize":h===p?x="upload, finalize":x="upload";const C={"X-Goog-Upload-Command":x,"X-Goog-Upload-Offset":`${c.current}`},N=r.slice(g,w);if(N===null)throw Of();function R(B,ee){const J=Ba(B,["active","final"]),T=c.current+p,_=r.size();let y;return J==="final"?y=Fa(e,i)(B,ee):y=null,new ei(T,_,J==="final",y)}const V="POST",j=e.maxUploadRetryTime,L=new Wn(t,V,R,j);return L.headers=C,L.body=N.uploadData(),L.progressCallback=l||null,L.errorHandler=Qr(n),L}const ke={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function po(n){switch(n){case"running":case"pausing":case"canceling":return ke.RUNNING;case"paused":return ke.PAUSED;case"success":return ke.SUCCESS;case"canceled":return ke.CANCELED;case"error":return ke.ERROR;default:return ke.ERROR}}/**
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
 */class yb{constructor(e,t,r){if(FI(e)||t!=null||r!=null)this.next=e,this.error=t??void 0,this.complete=r??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
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
 */function wn(n){return(...e)=>{Promise.resolve().then(()=>n(...e))}}class vb{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=en.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=en.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=en.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s){if(this.sent_)throw dr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw dr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw dr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw dr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw dr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class wb extends vb{initXhr(){this.xhr_.responseType="text"}}function bn(){return new wb}/**
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
 */class Eb{constructor(e,t,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=qf(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(re.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(Lf(s.status,[]))if(i)s=Nf();else{this.sleepTime=Math.max(this.sleepTime*2,II),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(re.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,r])=>{switch(this._state){case"running":e(t,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const r=mb(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,bn,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,r)=>{const s=gb(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,bn,t,r);this._request=i,i.getPromise().then(a=>{a=a,this._request=void 0,this._updateProgress(a.current),this._needToFetchStatus=!1,a.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=bu*this._chunkMultiplier,t=new ei(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let a;try{a=_b(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const l=this._ref.storage._makeRequest(a,bn,s,i,!1);this._request=l,l.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){bu*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const r=hb(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,bn,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const r=pb(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,bn,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=kf(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=po(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,r,s){const i=new yb(t||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(po(this._state)){case ke.SUCCESS:wn(this._resolve.bind(null,this.snapshot))();break;case ke.CANCELED:case ke.ERROR:const t=this._reject;wn(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(po(this._state)){case ke.RUNNING:case ke.PAUSED:e.next&&wn(e.next.bind(e,this.snapshot))();break;case ke.SUCCESS:e.complete&&wn(e.complete.bind(e))();break;case ke.CANCELED:case ke.ERROR:e.error&&wn(e.error.bind(e,this._error))();break;default:e.error&&wn(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class un{constructor(e,t){this._service=e,t instanceof Le?this._location=t:this._location=Le.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new un(e,t)}get root(){const e=new Le(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Bf(this._location.path)}get storage(){return this._service}get parent(){const e=rb(this._location.path);if(e===null)return null;const t=new Le(this._location.bucket,e);return new un(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw VI(e)}}function Tb(n,e,t){return n._throwIfRoot("uploadBytesResumable"),new Eb(n,new Pt(e),t)}function Ib(n){n._throwIfRoot("getDownloadURL");const e=db(n.storage,n._location,qf());return n.storage.makeRequestWithTokens(e,bn).then(t=>{if(t===null)throw OI();return t})}function bb(n,e){const t=sb(n._location.path,e),r=new Le(n._location.bucket,t);return new un(n.storage,r)}/**
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
 */function Ab(n){return/^[A-Za-z]+:\/\//.test(n)}function Rb(n,e){return new un(n,e)}function Gf(n,e){if(n instanceof qa){const t=n;if(t._bucket==null)throw NI();const r=new un(t,t._bucket);return e!=null?Gf(r,e):r}else return e!==void 0?bb(n,e):n}function xb(n,e){if(e&&Ab(e)){if(n instanceof qa)return Rb(n,e);throw qo("To use ref(service, url), the first argument must be a Storage instance.")}else return Gf(n,e)}function Au(n,e){const t=e==null?void 0:e[Cf];return t==null?null:Le.makeFromBucketSpec(t,n)}function Sb(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:Ku(s,n.app.options.projectId))}class qa{constructor(e,t,r,s,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Pf,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=EI,this._maxUploadRetryTime=TI,this._requests=new Set,s!=null?this._bucket=Le.makeFromBucketSpec(s,this._host):this._bucket=Au(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Le.makeFromBucketSpec(this._url,e):this._bucket=Au(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Iu("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Iu("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new un(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new LI(Df());{const a=GI(e,this._appId,r,s,t,this._firebaseVersion,i);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const Ru="@firebase/storage",xu="0.12.5";/**
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
 */const Kf="storage";function Pb(n,e,t){return n=pe(n),Tb(n,e,t)}function Cb(n){return n=pe(n),Ib(n)}function Nb(n,e){return n=pe(n),xb(n,e)}function kb(n=ii(),e){n=pe(n);const r=zt(n,Kf).getImmediate({identifier:e}),s=Hu("storage");return s&&Ob(r,...s),r}function Ob(n,e,t,r={}){Sb(n,e,t,r)}function Db(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new qa(t,r,s,e,dn)}function Vb(){ze(new Ue(Kf,Db,"PUBLIC").setMultipleInstances(!0)),Oe(Ru,xu,""),Oe(Ru,xu,"esm2017")}Vb();const Lb={apiKey:"AIzaSyBJn1XFc_QEUjzQ7T4__CAnN0yNAN-ioFo",authDomain:"emrs-fcaab.firebaseapp.com",projectId:"emrs-fcaab",storageBucket:"emrs-fcaab.appspot.com",messagingSenderId:"986997498010",appId:"1:986997498010:web:87dd96591dd28aae66bf23",measurementId:"G-DRDPNYJSDC"},Ai=th(Lb);Gy(Ai);const _t=qE(Ai),ot=vI(Ai),Mb=kb(Ai);function jb(n){return $t({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(n)}function Ub(n){return $t({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"},child:[]}]})(n)}function Fb(){const[n,e]=S.useState(""),[t,r]=S.useState(""),[s,i]=S.useState(""),[a,l]=S.useState(!1),[c,h]=S.useState("");S.useEffect(()=>{let g;return(a||c)&&(g=setTimeout(()=>{l(!1),h("")},4e3)),()=>clearTimeout(g)},[a,c]);const p=async g=>{if(g.preventDefault(),!n||!t||!s){h("All fields are required.");return}try{await Sa(pt(_t,"contacts"),{name:n,email:t,message:s,timestamp:new Date}),e(""),r(""),i(""),l(!0),h("")}catch{h("Failed to send message. Please try again later.")}};return f.jsx("section",{className:"bg-white py-20",id:"contact",children:f.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[f.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-blue-500 text-center",children:"Contact Us"}),f.jsxs("div",{className:"grid shadow-md rounded-lg grid-cols-1 lg:grid-cols-2 gap-12",children:[f.jsxs("div",{className:"mt-9 p-8",children:[f.jsx("div",{className:"text-center mb-8",children:f.jsx("h3",{className:"text-2xl font-semibold",children:"Get in touch"})}),f.jsxs("div",{className:"mb-4 flex items-center justify-center space-x-2",children:[f.jsx(Hm,{className:"text-blue-500 text-lg"}),f.jsx("p",{children:"+234 808 845 9071"})]}),f.jsxs("div",{className:"mb-4 flex items-center justify-center space-x-2",children:[f.jsx(jb,{className:"text-blue-500 text-lg"}),f.jsx("p",{children:"+234 706 328 9337"})]}),f.jsxs("div",{className:"mb-4 flex items-center justify-center space-x-2",children:[f.jsx(zm,{className:"text-blue-500 text-lg"}),f.jsx("p",{children:"jjcomputerlinks@gmail.com"})]})]}),f.jsx("div",{className:"p-8",children:f.jsxs("form",{className:"max-w-lg mx-auto",onSubmit:p,children:[c&&f.jsx("p",{className:"text-red-500 mb-4",children:c}),a&&f.jsx("p",{className:"text-green-500 mb-4",children:"Message sent successfully!"}),f.jsx("div",{className:"mb-4",children:f.jsx("input",{type:"text",className:"w-full p-4 border border-gray-300 rounded-lg",placeholder:"Name",value:n,onChange:g=>e(g.target.value),required:!0})}),f.jsx("div",{className:"mb-4",children:f.jsx("input",{type:"email",className:"w-full p-4 border border-gray-300 rounded-lg",placeholder:"Email",value:t,onChange:g=>r(g.target.value),required:!0})}),f.jsx("div",{className:"mb-4",children:f.jsx("textarea",{className:"w-full p-4 border border-gray-300 rounded-lg",placeholder:"Message",rows:"5",value:s,onChange:g=>i(g.target.value),required:!0})}),f.jsx("button",{type:"submit",className:"bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105",children:"Send Message"})]})})]})]})})}function Bb(){return f.jsx("footer",{className:"bg-blue-800 text-white py-6",children:f.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[f.jsx("p",{children:"© 2024 EMRs Security. All rights reserved."}),f.jsxs("div",{className:"mt-4",children:[f.jsx("a",{href:"#",className:"mx-2",children:"Privacy Policy"}),f.jsx("a",{href:"#",className:"mx-2",children:"Terms of Service"})]})]})})}function qb(){const[n,e]=S.useState(!1);return f.jsx(f.Fragment,{children:f.jsxs("nav",{className:"bg-blue-800 text-white p-4 shadow-md",children:[f.jsxs("div",{className:"max-w-7xl mx-auto flex justify-between items-center",children:[f.jsx("div",{className:"logo text-2xl font-bold",children:f.jsx(Q,{to:"/training",children:"EMRs (Training)"})}),f.jsx("div",{className:"hidden md:flex space-x-6 justify-center flex-grow",children:f.jsx(Q,{to:"/training/feedback",className:"hover:text-yellow-300 transition duration-300",children:"Feedback"})}),f.jsx("div",{className:"hidden md:flex font-bold",children:f.jsx(Q,{to:"/logout",className:"bg-blue-400 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105",children:"LOGOUT"})}),f.jsx("div",{className:"md:hidden",children:f.jsx("button",{onClick:()=>e(!n),children:n?f.jsx(Qo,{className:"h-6 w-6 transition duration-300"}):f.jsx(Ko,{className:"h-6 w-6 transition duration-300"})})})]}),f.jsxs("div",{className:`md:hidden flex flex-col space-y-6 transition-all duration-300 ${n?"max-h-screen opacity-100":"max-h-0 opacity-0 overflow-hidden"}`,children:[f.jsx(Q,{to:"/training/feedback",className:"hover:text-yellow-300 mt-6 transition duration-300",children:"Feedback"}),f.jsx(Q,{to:"/logout",className:"mt-6 bg-blue-400 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105",children:"LOGOUT"})]})]})})}function Qf({isOpen:n,onClose:e,message:t}){return n?f.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-60",children:f.jsxs("div",{className:"bg-white p-6 rounded shadow-lg text-center",children:[f.jsx("h2",{className:"text-xl font-bold mb-4",children:"EMRs Says:"}),f.jsx("p",{children:t}),f.jsx("button",{className:"mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800 transition duration-400",onClick:e,children:"Try Again!"})]})}):null}function $a(n){return $t({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757c-.273.021-.55.038-.841.038-5.351 0-7.424-3.846-7.926-5a8.642 8.642 0 0 1 1.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379a.994.994 0 0 0 0 .633C2.073 12.383 4.367 19 12 19zm0-14c-1.837 0-3.346.396-4.604.981L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657a.994.994 0 0 0 0-.633C21.927 11.617 19.633 5 12 5zm4.972 10.558-2.28-2.28c.19-.39.308-.819.308-1.278 0-1.641-1.359-3-3-3-.459 0-.888.118-1.277.309L8.915 7.501A9.26 9.26 0 0 1 12 7c5.351 0 7.424 3.846 7.926 5-.302.692-1.166 2.342-2.954 3.558z"},child:[]}]})(n)}function za(n){return $t({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"},child:[]},{tag:"path",attr:{d:"M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"},child:[]}]})(n)}function $b(){const[n,e]=S.useState(""),[t,r]=S.useState(""),[s,i]=S.useState(!1),[a,l]=S.useState(!1),[c,h]=S.useState(""),p=ft(),g=async w=>{w.preventDefault();try{await yf(ot,n,t),p("/training")}catch(x){let C;switch(x.code){case"auth/user-not-found":C="No user found with this email.";break;case"auth/wrong-password":C="Invalid password. Please try again.";break;case"auth/invalid-email":C="Invalid email format.";break;case"auth/invalid-credential":C="Invalid Login Credentials.";break;case"auth/network-request-failed":C="Connect to a network!";break;default:C="Invalid Login Credentials. Please try again."}h(C),l(!0)}};return f.jsxs("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:[f.jsxs("div",{className:"bg-white p-8 rounded shadow-md w-full max-w-md",children:[f.jsx("h2",{className:"text-2xl font-bold mb-6 text-center text-blue-500",children:"Login"}),f.jsxs("form",{onSubmit:g,children:[f.jsxs("div",{className:"mb-4",children:[f.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email"}),f.jsx("input",{type:"email",id:"email",value:n,onChange:w=>e(w.target.value),required:!0,className:"mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"})]}),f.jsxs("div",{className:"mb-4",children:[f.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),f.jsxs("div",{className:"relative",children:[f.jsx("input",{type:s?"text":"password",id:"password",value:t,onChange:w=>r(w.target.value),required:!0,className:"mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"}),f.jsx("button",{type:"button",onClick:()=>i(!s),className:"absolute inset-y-0 right-0 pr-3 text-blue-700",children:s?f.jsx($a,{}):f.jsx(za,{})})]})]}),f.jsxs("p",{className:"mt-4 flex justify-between",children:[f.jsx(Q,{to:"/admin-login",className:"text-blue-600 hover:underline",children:"Admin Login"}),f.jsx(Q,{to:"/forgot-password",className:"text-blue-600 hover:underline",children:"Forgot Password?"})]}),f.jsx("button",{type:"submit",className:"mt-4 w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 transition duration-300",children:"Login"})]}),f.jsxs("p",{className:"mt-4 text-center",children:["Don't have an account? ",f.jsx(Q,{to:"/register",className:"text-blue-600 hover:underline",children:"Register"})]}),f.jsx("p",{className:"mt-2 text-center",children:f.jsx(Q,{to:"/",className:"text-blue-600 hover:underline",children:"Go to Home"})})]}),f.jsx(Qf,{isOpen:a,onClose:()=>l(!1),message:c})]})}function Ha({isOpen:n,onClose:e,message:t}){return n?f.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50",children:f.jsxs("div",{className:"bg-white p-6 rounded shadow-lg text-center",children:[f.jsx("h2",{className:"text-xl font-bold mb-4",children:"EMRs Says:"}),f.jsx("p",{children:t}),f.jsx("button",{className:"mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800 transition duration-400",onClick:e,children:"Close"})]})}):null}function zb(){const[n,e]=S.useState(""),[t,r]=S.useState(!1),[s,i]=S.useState(""),a=async l=>{l.preventDefault();try{await rT(ot,n),i("Password reset link sent! Check your email."),r(!0)}catch(c){let h;switch(c.code){case"auth/user-not-found":h="No user found with this email.";break;case"auth/invalid-email":h="Invalid email format.";break;default:h="An error occurred. Please try again."}i(h),r(!0)}};return f.jsxs("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:[f.jsxs("div",{className:"bg-white p-8 rounded shadow-md w-full max-w-md",children:[f.jsx("h2",{className:"text-2xl font-bold mb-6 text-center",children:"Forgot Password"}),f.jsxs("form",{onSubmit:a,children:[f.jsxs("div",{className:"mb-4",children:[f.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email"}),f.jsx("input",{type:"email",id:"email",value:n,onChange:l=>e(l.target.value),required:!0,className:"mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"})]}),f.jsx("button",{type:"submit",className:"mt-2 w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 transition duration-400",children:"Reset Password"})]}),f.jsxs("p",{className:"mt-4 text-center",children:["Password Reset Done? ",f.jsx(Q,{to:"/login",className:"text-blue-600 hover:underline",children:"Login"})]})]}),f.jsx(Ha,{isOpen:t,onClose:()=>r(!1),message:s})]})}function Hb(){const[n,e]=S.useState(""),[t,r]=S.useState(""),[s,i]=S.useState(""),[a,l]=S.useState(!1),[c,h]=S.useState(!1),[p,g]=S.useState(""),w=ft(),x=async C=>{C.preventDefault();try{await sT(ot,t,s),w("/verify")}catch(N){let R;switch(N.code){case"auth/email-already-in-use":R="This email is already registered. Please use a different email or log in.";break;case"auth/invalid-email":R="Invalid email format.";break;case"auth/weak-password":R="Password should be at least 6 characters.";break;case"auth/network-request-failed":R="Connect to a network!";break;default:R="An error occurred. Please try again."}g(R),h(!0)}};return f.jsxs("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:[f.jsxs("div",{className:"max-w-md w-full bg-white p-8 rounded-lg shadow-md",children:[f.jsx("h2",{className:"text-2xl font-bold mb-6 text-center text-blue-500",children:"Register"}),f.jsxs("form",{onSubmit:x,children:[f.jsxs("div",{className:"mb-4",children:[f.jsx("label",{className:"block text-gray-700",children:"Name"}),f.jsx("input",{type:"text",className:"w-full p-3 border border-gray-300 rounded-lg",required:!0,value:n,onChange:C=>e(C.target.value)})]}),f.jsxs("div",{className:"mb-4",children:[f.jsx("label",{className:"block text-gray-700",children:"Email"}),f.jsx("input",{type:"email",className:"w-full p-3 border border-gray-300 rounded-lg",required:!0,value:t,onChange:C=>r(C.target.value)})]}),f.jsxs("div",{className:"mb-4",children:[f.jsx("label",{className:"block text-gray-700",children:"Password"}),f.jsxs("div",{className:"relative",children:[f.jsx("input",{type:a?"text":"password",className:"w-full p-3 border border-gray-300 rounded-lg",required:!0,value:s,onChange:C=>i(C.target.value)}),f.jsx("button",{type:"button",onClick:()=>l(!a),className:"absolute inset-y-0 right-0 pr-3 text-blue-700",children:a?f.jsx($a,{}):f.jsx(za,{})})]})]}),f.jsx("button",{type:"submit",className:"mt-2 w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300",children:"Register"})]}),f.jsxs("p",{className:"mt-4 text-center",children:["Already have an account? ",f.jsx(Q,{to:"/login",className:"text-blue-600 hover:underline",children:"Login"})]})]}),f.jsx(Ha,{isOpen:c,onClose:()=>h(!1),message:p})]})}const It=[{question:"Which of the following is the primary goal of securing Electronic Medical Records (EMR)?",options:["Reducing operational costs","Ensuring patient privacy and data integrity","Increasing patient enrollment","Enhancing patient engagement"],answer:" Ensuring patient privacy and data integrity"},{question:"What is the most effective method to ensure only authorized personnel can access EMRs?",options:["Using generic login credentials","Implementing multi-factor authentication (MFA)","Sharing passwords among staff","Storing passwords in plain text"],answer:"Implementing multi-factor authentication (MFA)"},{question:"Which regulation governs the protection of personal data in Nigeria?",options:["GDPR","HIPAA","NDPR","CCPA"],answer:"NDPR"},{question:"What is the purpose of encrypting EMR data?",options:["To speed up data transmission","To reduce data storage costs","To protect data from unauthorized access","To enhance data sharing capabilities"],answer:"To protect data from unauthorized access"},{question:"Which of the following is a best practice for securing EMR systems against cyber attacks?",options:["Regularly updating software and systems","Using outdated antivirus software","Disabling firewalls","Ignoring security patches"],answer:"Regularly updating software and systems"},{question:"How can healthcare facilities ensure the physical security of EMR systems?",options:["Leaving servers in public areas","Restricting access to server rooms","Allowing unrestricted access to all employees","Keeping server rooms unlocked"],answer:"Restricting access to server rooms"},{question:"What is the role of audit logs in EMR security?",options:["To enhance system performance","To monitor and track access to EMR data","To delete old medical records","To share patient data with third parties"],answer:"To monitor and track access to EMR data"},{question:"Which of the following is a critical step in disaster recovery planning for EMR systems?",options:["Ignoring backup procedures","Regularly backing up EMR data","Storing backups in the same location as the original data","Using unencrypted backup tapes"],answer:"Regularly backing up EMR data"},{question:"Why is user training important in securing EMR systems?",options:["To reduce the need for technical support","To prevent unauthorized access and data breaches","To encourage password sharing","To eliminate the need for security protocols"],answer:"To prevent unauthorized access and data breaches"},{question:"What is a common consequence of failing to secure EMRs properly?",options:["Increased patient satisfaction","Data breaches and legal penalties","Faster data access","Lower operational costs"],answer:"Data breaches and legal penalties"},{question:"How often should security risk assessments be conducted for EMR systems?",options:["Every 10 years","Once during the system setup","Annually or whenever there are significant changes","Only after a data breach occurs"],answer:"Annually or whenever there are significant changes"},{question:"Which technology helps in the secure transmission of EMR data over networks?",options:["FTP","HTTP","VPN","Telnet"],answer:"VPN"},{question:"Which of the following should be included in an EMR system's access control policy?",options:["Password length and complexity requirements","Allowing guest users","Sharing passwords among staff","Disabling account lockout features"],answer:"Password length and complexity requirements"},{question:"What should be done to secure EMR data stored on mobile devices?",options:["Disabling encryption","Using strong encryption methods","Allowing public access","Storing data in plain text"],answer:"Using strong encryption methods"},{question:"Which practice helps in maintaining data integrity in EMR systems?",options:["Allowing unrestricted data editing","Implementing strict data access controls","Ignoring data validation processes","Encouraging data duplication"],answer:"Implementing strict data access controls"},{question:"Why is it important to have a data retention policy for EMRs?",options:["To ensure that data is kept indefinitely","To comply with legal and regulatory requirements","To reduce storage space by deleting all old records","To avoid creating backup copies"],answer:"To comply with legal and regulatory requirements)"},{question:"What is the benefit of conducting regular security audits on EMR systems?",options:["Identifying and addressing potential vulnerabilities","Increasing the system's complexity","Reducing the need for technical staff","Ignoring security flaws"],answer:"Identifying and addressing potential vulnerabilities"},{question:"Which of the following can help in protecting EMR data from ransomware attacks?",options:["Disabling antivirus software","Keeping software and systems up to date","Allowing users to install any software","Ignoring suspicious emails"],answer:"Keeping software and systems up to date"},{question:"What is the role of firewalls in securing EMR systems?",options:["To monitor and control incoming and outgoing network traffic","To increase network speed","To reduce the need for data encryption","To allow all traffic through the network"],answer:"To monitor and control incoming and outgoing network traffic"},{question:"Which of the following best describes the principle of least privilege in EMR security?",options:["Granting all users full access rights","Giving users the minimum level of access required for their role"," Allowing unrestricted access to administrators","Disabling access control mechanisms"],answer:"Giving users the minimum level of access required for their role"}];function Wb(){const[n,e]=S.useState(0),[t,r]=S.useState(0),[s,i]=S.useState(""),[a,l]=S.useState(!1),[c,h]=S.useState(""),[p,g]=S.useState(!1),w=ft();S.useEffect(()=>{if(p){const R=setTimeout(()=>{g(!1)},2e3);return()=>clearTimeout(R)}},[p]);const x=R=>{i(R.target.value)},C=()=>{if(!s){h("Please select an option before proceeding."),g(!0);return}s===It[n].answer&&r(t+1),i(""),h(""),n<It.length-1?e(n+1):l(!0)},N=()=>{w("/register")};return f.jsxs("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:[f.jsx("div",{className:"bg-white p-6 rounded shadow-md w-full max-w-md max-w-lg lg:max-w-6xl",children:a?f.jsxs("div",{children:[f.jsx("h3",{className:"text-3xl font-bold mb-4 text-center",children:"Quiz Results"}),f.jsxs("p",{className:"text-2xl mb-4 text-center",children:["Your score: ",t," / ",It.length]}),f.jsx("div",{className:"space-y-4",children:It.map((R,V)=>f.jsxs("div",{className:"mb-4",children:[f.jsx("h4",{children:R.question}),f.jsxs("p",{className:"font-bold",children:["Correct answer: ",R.answer]})]},V))}),f.jsx("button",{onClick:N,className:"mt-4 w-full py-2 px-4 bg-green-500 text-white font-bold rounded-md hover:bg-green-700 transition duration-300",children:"Proceed to Register for the Training"})]}):f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"mb-7 flex flex-col space-y-2",children:[f.jsxs("h3",{className:"text-2xl font-bold",children:["Question ",n+1,"/",It.length]}),f.jsx("div",{className:"mt-4 w-full bg-gray-200 h-2 rounded-full",children:f.jsx("div",{className:"bg-blue-700 h-2 rounded-full",style:{width:`${(n+1)/It.length*100}%`}})})]}),f.jsx("h4",{className:"text-xl font-semibold mb-4",children:It[n].question}),f.jsx("div",{className:"space-y-4",children:It[n].options.map((R,V)=>f.jsxs("div",{className:"flex items-center",children:[f.jsx("input",{type:"radio",name:"option",value:R,checked:s===R,onChange:x,className:"mr-3"}),f.jsx("label",{children:R})]},V))}),f.jsx("button",{onClick:C,className:"mt-6 w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 transition duration-400",children:"Next"})]})}),p&&f.jsx("div",{className:"fixed text-center inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50",children:f.jsxs("div",{className:"bg-white p-6 rounded shadow-md w-full max-w-md",children:[f.jsx("h3",{className:"text-xl font-bold mb-4",children:"Error"}),f.jsx("p",{children:c})]})})]})}const mn=S.createContext(),Gb=({children:n})=>{const[e,t]=S.useState(null),[r,s]=S.useState(!1);S.useEffect(()=>ot.onAuthStateChanged(h=>{t(h),s(h?h.emailVerified:!1)}),[]);const i=(c,h)=>ot.signInWithEmailAndPassword(c,h),a=(c,h)=>ot.createUserWithEmailAndPassword(c,h),l=()=>ot.signOut();return f.jsx(mn.Provider,{value:{user:e,isVerified:r,login:i,register:a,logout:l},children:n})};function Kb(){const[n,e]=S.useState(!1),[t,r]=S.useState(""),s=ft(),{user:i}=S.useContext(mn);S.useEffect(()=>{(async()=>{i&&(await Fo(i),i.emailVerified&&s("/login"))})()},[i,s]);const a=async()=>{i&&(await Fo(i),i.emailVerified?s("/quiz"):(r("Email not verified yet. Please check your email."),e(!0)))},l=async()=>{try{await iT(ot.currentUser),r("Verification email sent successfully! Please check your email and click on the link to verify your account."),e(!0)}catch(c){console.error("Error sending verification email:",c),r("Error sending verification email. Please try again later."),e(!0)}};return f.jsxs("div",{className:"min-h-screen flex items-center justify-center bg-gray-200",children:[f.jsxs("div",{className:"bg-white p-7 rounded shadow-md w-full max-w-md",children:[f.jsx("h3",{className:"text-2xl font-bold mb-5 text-center text-blue-700",children:"Email Verification"}),f.jsx("p",{className:"mb-4 text-center",children:"A verification link will be sent to your email."}),f.jsx("button",{onClick:l,className:"mt-4 w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-800 transition duration-400",children:"Send Verification Email"}),f.jsx("button",{onClick:a,className:"mt-4 w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-800 transition duration-400",children:"Confirm Verification"})]}),f.jsx(Ha,{isOpen:n,onClose:()=>e(!1),message:t})]})}function Qb(){const[n,e]=S.useState(""),[t,r]=S.useState(""),[s,i]=S.useState(!1),[a,l]=S.useState("");S.useEffect(()=>{let h;return(s||a)&&(h=setTimeout(()=>{i(!1),r(""),l("")},3e3)),()=>clearTimeout(h)},[s,a]);const c=async h=>{h.preventDefault();try{await Sa(pt(_t,"feedback"),{feedback:n,timestamp:new Date}),e(""),r("Feedback submitted successfully!"),i(!0),l("")}catch{r(""),l("Error submitting feedback. Please try again.")}};return f.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:f.jsxs("div",{className:"bg-white p-7 rounded shadow-md w-full max-w-md",children:[f.jsx("h3",{className:"text-2xl font-bold mb-6 text-center text-blue-500",children:"Provide A Feedback"}),f.jsxs("form",{onSubmit:c,children:[f.jsx("div",{className:"mb-4",children:f.jsx("textarea",{rows:"5",value:n,className:"mt-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline align-top h-32",onChange:h=>e(h.target.value),required:!0})}),f.jsx("button",{type:"submit",className:"w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition duration-300",children:"Submit"}),t&&f.jsx("p",{className:"mt-4 text-green-500",children:t}),a&&f.jsx("p",{className:"mt-4 text-red-500",children:a})]})]})})}const Xb="/assets/data-breach-D_nCaaJo.jpg",Yb="/assets/insider-threat-DEzYK_M_.jpg",Jb="/assets/ransomware-Ct2uMmDi.jpg",Zb="/assets/weak-password-kGAjRUQ1.png",eA="/assets/physical_theft-fN5JrP7E.png",tA="/assets/phishing-CsI4oc5X.jpg";function nA(){return f.jsx("div",{className:"min-h-screen flex flex-col bg-gray-100",children:f.jsx("div",{className:"flex-grow flex items-center justify-center",children:f.jsxs("div",{className:"max-w-5xl w-full bg-white p-8 rounded-lg shadow-md text-center",children:[f.jsx("h2",{className:"text-4xl font-bold mb-3 text-blue-700 underline",children:"Welcome to EMRs Training"}),f.jsx("p",{className:"text-lg mb-5 underline text-red-400",children:"DON'T CLICK - 'Never trust, Always Verify'"}),f.jsx("p",{className:"text-lg text-gray-700 mb-6",children:"Here you can find various training materials and resources to help you secure your electronic medical records effectively."}),f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[f.jsxs("div",{className:"relative group",children:[f.jsx("img",{src:Xb,alt:"Data Breaches",className:"w-full h-64 object-cover rounded-lg"}),f.jsxs("div",{className:"absolute inset-0 bg-blue-600 bg-opacity-75 flex flex-col items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:[f.jsx("h3",{className:"text-2xl text-white font-bold mb-4",children:"DATA BREACHES"}),f.jsx(Q,{to:"/training/data-breaches",className:"bg-black text-white py-2 px-4 rounded-lg",target:"_blank",children:"Go to Course"})]})]}),f.jsxs("div",{className:"relative group",children:[f.jsx("img",{src:Yb,alt:"Insider Threats",className:"w-full h-64 object-cover rounded-lg"}),f.jsxs("div",{className:"absolute inset-0 bg-blue-600 bg-opacity-75 flex flex-col items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:[f.jsx("h3",{className:"text-2xl text-white font-bold mb-4",children:"INSIDER THREATS"}),f.jsx(Q,{to:"/training/insider-threats",className:"bg-black text-white py-2 px-4 rounded-lg",target:"_blank",children:"Go to Course"})]})]}),f.jsxs("div",{className:"relative group",children:[f.jsx("img",{src:Jb,alt:"Ransomware",className:"w-full h-64 object-cover rounded-lg"}),f.jsxs("div",{className:"absolute inset-0 bg-blue-600 bg-opacity-75 flex flex-col items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:[f.jsx("h3",{className:"text-2xl text-white font-bold mb-4",children:"RANSOMWARE"}),f.jsx(Q,{to:"/training/ransomware",className:"bg-black text-white py-2 px-4 rounded-lg",target:"_blank",children:"Go to Course"})]})]}),f.jsxs("div",{className:"relative group",children:[f.jsx("img",{src:Zb,alt:"Weak Passwords",className:"w-full h-64 object-cover rounded-lg"}),f.jsxs("div",{className:"absolute inset-0 bg-blue-600 bg-opacity-75 flex flex-col items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:[f.jsx("h3",{className:"text-2xl text-white font-bold mb-4",children:"WEAK PASSWORDS"}),f.jsx(Q,{to:"/training/weak-passwords",className:"bg-black text-white py-2 px-4 rounded-lg",target:"_blank",children:"Go to Course"})]})]}),f.jsxs("div",{className:"relative group",children:[f.jsx("img",{src:eA,alt:"Physical Theft",className:"w-full h-64 object-cover rounded-lg"}),f.jsxs("div",{className:"absolute inset-0 bg-blue-600 bg-opacity-75 flex flex-col items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:[f.jsx("h3",{className:"text-2xl text-white font-bold mb-4",children:"PHYSICAL THEFT"}),f.jsx(Q,{to:"/training/physical-theft",className:"bg-black text-white py-2 px-4 rounded-lg",target:"_blank",children:"Go to Course"})]})]}),f.jsxs("div",{className:"relative group",children:[f.jsx("img",{src:tA,alt:"Phishing Attacks",className:"w-full h-64 object-cover rounded-lg"}),f.jsxs("div",{className:"absolute inset-0 bg-blue-600 bg-opacity-75 flex flex-col items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:[f.jsx("h3",{className:"text-2xl text-white font-bold mb-4",children:"PHISHING ATTACKS"}),f.jsx(Q,{to:"/training/phishing-attacks",className:"bg-black text-white py-2 px-4 rounded-lg",target:"_blank",children:"Go to Course"})]})]}),f.jsxs(Q,{to:"/training/feedback",className:"mt-6 block bg-blue-800 text-white py-4 rounded-lg shadow-md hover:bg-white hover:text-blue-800 transition duration-300 flex items-center justify-center space-x-3 col-span-full",children:[f.jsx(Ub,{className:"text-2xl"}),f.jsx("span",{children:"Provide Feedback"})]})]})]})})})}function rA({isOpen:n,onClose:e,message:t}){return n?f.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-60",children:f.jsxs("div",{className:"bg-white p-6 rounded shadow-lg text-center",children:[f.jsx("h2",{className:"text-xl font-bold mb-4",children:"EMRs (Admin) Says:"}),f.jsx("p",{children:t}),f.jsx("button",{className:"mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800 transition duration-400",onClick:e,children:"Close"})]})}):null}function sA(){const[n,e]=S.useState(""),[t,r]=S.useState(""),[s,i]=S.useState(null),[a,l]=S.useState("data-breaches"),[c,h]=S.useState(0),[p,g]=S.useState(!1),[w,x]=S.useState(""),C=async()=>{if(!s){x("Please fill all entries!"),g(!0);return}const N=Nb(Mb,`training/${a}/${s.name}`),R=Pb(N,s);R.on("state_changed",V=>{const j=V.bytesTransferred/V.totalBytes*100;h(j)},V=>{console.error(V),x("Error occurred during upload. Please try again."),g(!0)},async()=>{const V=await Cb(R.snapshot.ref);await Sa(pt(_t,a),{title:n,description:t,fileURL:V}),e(""),r(""),i(null),h(0),x("File Uploaded Successfully!"),g(!0)})};return f.jsxs("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:[f.jsxs("div",{className:"bg-white p-8 rounded shadow-md w-full max-w-2xl",children:[f.jsx("h2",{className:"text-2xl font-bold mb-6 text-blue-700 text-center",children:"Admin Panel"}),f.jsxs("form",{children:[f.jsxs("div",{className:"mb-4",children:[f.jsx("label",{className:"block text-gray-700",children:"Title"}),f.jsx("input",{type:"text",value:n,onChange:N=>e(N.target.value),className:"w-full p-2 border border-gray-300 rounded mt-1"})]}),f.jsxs("div",{className:"mb-4",children:[f.jsx("label",{className:"block text-gray-700",children:"Description"}),f.jsx("textarea",{value:t,onChange:N=>r(N.target.value),className:"w-full p-3 border border-gray-300 rounded mt-1"})]}),f.jsxs("div",{className:"mb-4",children:[f.jsx("label",{className:"block text-gray-700",children:"Section"}),f.jsxs("select",{value:a,onChange:N=>l(N.target.value),className:"w-full p-2 border border-gray-300 rounded mt-1",children:[f.jsx("option",{value:"data-breaches",children:"Data Breaches"}),f.jsx("option",{value:"insider-threats",children:"Insider Threats"}),f.jsx("option",{value:"ransomware",children:"Ransomware"}),f.jsx("option",{value:"weak-passwords",children:"Weak Passwords"}),f.jsx("option",{value:"physical-theft",children:"Physical Theft"}),f.jsx("option",{value:"phishing-attacks",children:"Phishing Attacks"})]})]}),f.jsxs("div",{className:"mb-4",children:[f.jsx("label",{className:"block text-gray-700",children:"File"}),f.jsx("input",{type:"file",onChange:N=>i(N.target.files[0]),className:"w-full p-2 border border-gray-300 rounded mt-1"})]}),c>0&&f.jsx("div",{className:"w-full bg-gray-200 rounded mt-1",children:f.jsxs("div",{className:"bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded",style:{width:`${c}%`},children:[c,"%"]})}),f.jsx("button",{type:"button",onClick:C,className:"mt-4 w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition duration-300",children:"Upload"})]})]}),f.jsx(rA,{isOpen:p,onClose:()=>g(!1),message:w})]})}function iA(){const[n,e]=S.useState(""),[t,r]=S.useState(""),[s,i]=S.useState(""),[a,l]=S.useState(!1),[c,h]=S.useState(""),p=ft(),g=async w=>{w.preventDefault();try{if(await yf(ot,n,t),n==="admin@emrs.com")p("/admin");else throw new Error("Unauthorized Access!")}catch(x){let C;switch(x.code){case"auth/user-not-found":C="No user found with this email.";break;case"auth/wrong-password":C="Invalid password. Please try again.";break;case"auth/invalid-email":C="Invalid email format.";break;case"auth/invalid-credential":C="Invalid Login Credentials.";break;case"auth/network-request-failed":C="Connect to a network!";break;case"auth/too-many-requests":C="Too many login attempts. Please try again later.";break;default:C=x.message||"Invalid Login Credentials. Please try again."}h(C),l(!0)}};return f.jsxs("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:[f.jsxs("div",{className:"bg-white p-8 rounded shadow-md w-full max-w-md",children:[f.jsx("h2",{className:"text-2xl font-bold mb-6 text-center text-blue-600",children:"Admin Login"}),f.jsxs("form",{onSubmit:g,children:[f.jsxs("div",{className:"mb-4",children:[f.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Username"}),f.jsx("input",{type:"email",id:"email",value:n,onChange:w=>e(w.target.value),required:!0,className:"mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"})]}),f.jsxs("div",{className:"mb-4",children:[f.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),f.jsxs("div",{className:"relative",children:[f.jsx("input",{type:s?"text":"password",id:"password",value:t,onChange:w=>r(w.target.value),required:!0,className:"mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"}),f.jsx("button",{type:"button",onClick:()=>i(!s),className:"absolute inset-y-0 right-0 pr-3 text-blue-700",children:s?f.jsx($a,{}):f.jsx(za,{})})]})]}),f.jsx("p",{className:"mt-4 text-left",children:f.jsx(Q,{to:"/login",className:"text-blue-600 hover:underline",children:"Training"})}),f.jsx("button",{type:"submit",className:"mt-4 w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 transition duration-300",children:"Login"})]})]}),f.jsx(Qf,{isOpen:a,onClose:()=>l(!1),message:c})]})}function oA(){const{logout:n}=S.useContext(mn),e=ft(),t=()=>{console.log("Logging out..."),n(),e("/admin-login")};return S.useEffect(()=>{t()},[]),f.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:f.jsxs("div",{className:"bg-white p-8 rounded shadow-md w-full max-w-md text-center",children:[f.jsx("h2",{className:"text-2xl font-bold mb-6 text-center text-blue-500",children:"Log Out"}),f.jsx("p",{className:"mb-6 text-lg text-gray-700",children:"You are being logged out..."})]})})}function aA(){const[n,e]=S.useState(!1);return f.jsx(f.Fragment,{children:f.jsxs("nav",{className:"bg-blue-800 text-white p-4 shadow-md",children:[f.jsxs("div",{className:"max-w-7xl mx-auto flex justify-between items-center",children:[f.jsx("div",{className:"logo text-2xl font-bold",children:f.jsx(Q,{to:"/admin",children:"EMRs (Admin)"})}),f.jsx("div",{className:"hidden md:flex space-x-6 justify-center flex-grow"}),f.jsx("div",{className:"hidden md:flex font-bold",children:f.jsx(Q,{to:"/admin-logout",className:"bg-blue-400 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105",children:"LOGOUT"})}),f.jsx("div",{className:"md:hidden",children:f.jsx("button",{onClick:()=>e(!n),children:n?f.jsx(Qo,{className:"h-6 w-6 transition duration-300"}):f.jsx(Ko,{className:"h-6 w-6 transition duration-300"})})})]}),f.jsx("div",{className:`md:hidden flex flex-col space-y-6 transition-all duration-300 ${n?"max-h-screen opacity-100":"max-h-0 opacity-0 overflow-hidden"}`,children:f.jsx(Q,{to:"/admin-logout",className:"mt-7 bg-blue-400 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105",children:"LOGOUT"})})]})})}function lA({element:n}){const{user:e}=S.useContext(mn);return e&&e.email==="admin@emrs.com"?n:f.jsx(Go,{to:"/admin-login"})}function cA(){const{logout:n}=S.useContext(mn),e=ft(),t=()=>{console.log("Logging out..."),n(),e("/login")};return S.useEffect(()=>{t()},[]),f.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:f.jsxs("div",{className:"bg-white p-8 rounded shadow-md w-full max-w-md text-center",children:[f.jsx("h2",{className:"text-2xl font-bold mb-6 text-center text-blue-500",children:"Log Out"}),f.jsx("p",{className:"mb-6 text-lg text-gray-700",children:"You are being logged out..."})]})})}function uA(){const[n,e]=S.useState([]);return S.useEffect(()=>{(async()=>{const s=(await zn(pt(_t,"data-breaches"))).docs.map(i=>i.data());e(s)})()},[]),f.jsxs("div",{className:"min-h-screen flex flex-col items-center bg-gray-100",children:[f.jsx("h2",{className:"text-3xl font-bold my-6 text-center capitalize",children:"DATA BREACHES"}),f.jsx("div",{className:"w-full max-w-7xl p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:n.map((t,r)=>f.jsxs("div",{className:"bg-white p-6 rounded shadow-md mb-6",children:[f.jsx("h3",{className:"text-2xl font-bold mb-2",children:t.title}),f.jsx("p",{className:"mb-4",children:t.description}),t.fileURL&&f.jsxs("video",{controls:!0,className:"w-full rounded-lg",children:[f.jsx("source",{src:t.fileURL,type:"video/mp4"}),"Your browser does not support the video tag."]})]},r))})]})}function hA(){const[n,e]=S.useState([]);return S.useEffect(()=>{(async()=>{const s=(await zn(pt(_t,"insider-threats"))).docs.map(i=>i.data());e(s)})()},[]),f.jsxs("div",{className:"min-h-screen flex flex-col items-center bg-gray-100",children:[f.jsx("h2",{className:"text-3xl font-bold my-6 text-center capitalize",children:"INSIDER THREATS"}),f.jsx("div",{className:"w-full max-w-7xl p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:n.map((t,r)=>f.jsxs("div",{className:"bg-white p-6 rounded shadow-md mb-6",children:[f.jsx("h3",{className:"text-2xl font-bold mb-2",children:t.title}),f.jsx("p",{className:"mb-4",children:t.description}),t.fileURL&&f.jsxs("video",{controls:!0,className:"w-full rounded-lg",children:[f.jsx("source",{src:t.fileURL,type:"video/mp4"}),"Your browser does not support the video tag."]})]},r))})]})}function dA(){const[n,e]=S.useState([]);return S.useEffect(()=>{(async()=>{const s=(await zn(pt(_t,"ransomware"))).docs.map(i=>i.data());e(s)})()},[]),f.jsxs("div",{className:"min-h-screen flex flex-col items-center bg-gray-100",children:[f.jsx("h2",{className:"text-3xl font-bold my-6 text-center capitalize",children:"RANSOMWARE"}),f.jsx("div",{className:"w-full max-w-7xl p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:n.map((t,r)=>f.jsxs("div",{className:"bg-white p-6 rounded shadow-md mb-6",children:[f.jsx("h3",{className:"text-2xl font-bold mb-2",children:t.title}),f.jsx("p",{className:"mb-4",children:t.description}),t.fileURL&&f.jsxs("video",{controls:!0,className:"w-full rounded-lg",children:[f.jsx("source",{src:t.fileURL,type:"video/mp4"}),"Your browser does not support the video tag."]})]},r))})]})}function fA(){const[n,e]=S.useState([]);return S.useEffect(()=>{(async()=>{const s=(await zn(pt(_t,"weak-passwords"))).docs.map(i=>i.data());e(s)})()},[]),f.jsxs("div",{className:"min-h-screen flex flex-col items-center bg-gray-100",children:[f.jsx("h2",{className:"text-3xl font-bold my-6 text-center capitalize",children:"WEAK PASSWORDS"}),f.jsx("div",{className:"w-full max-w-7xl p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:n.map((t,r)=>f.jsxs("div",{className:"bg-white p-6 rounded shadow-md mb-6",children:[f.jsx("h3",{className:"text-2xl font-bold mb-2",children:t.title}),f.jsx("p",{className:"mb-4",children:t.description}),t.fileURL&&f.jsxs("video",{controls:!0,className:"w-full rounded-lg",children:[f.jsx("source",{src:t.fileURL,type:"video/mp4"}),"Your browser does not support the video tag."]})]},r))})]})}function pA(){const[n,e]=S.useState([]);return S.useEffect(()=>{(async()=>{const s=(await zn(pt(_t,"physical-theft"))).docs.map(i=>i.data());e(s)})()},[]),f.jsxs("div",{className:"min-h-screen flex flex-col items-center bg-gray-100",children:[f.jsx("h2",{className:"text-3xl font-bold my-6 text-center capitalize",children:"PHYSICAL THEFT"}),f.jsx("div",{className:"w-full max-w-7xl p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:n.map((t,r)=>f.jsxs("div",{className:"bg-white p-6 rounded shadow-md mb-6",children:[f.jsx("h3",{className:"text-2xl font-bold mb-2",children:t.title}),f.jsx("p",{className:"mb-4",children:t.description}),t.fileURL&&f.jsxs("video",{controls:!0,className:"w-full rounded-lg",children:[f.jsx("source",{src:t.fileURL,type:"video/mp4"}),"Your browser does not support the video tag."]})]},r))})]})}function mA(){const[n,e]=S.useState([]);return S.useEffect(()=>{(async()=>{const s=(await zn(pt(_t,"phishing-attacks"))).docs.map(i=>i.data());e(s)})()},[]),f.jsxs("div",{className:"min-h-screen flex flex-col items-center bg-gray-100",children:[f.jsx("h2",{className:"text-3xl font-bold my-6 text-center capitalize",children:"PHISHING ATTACKS"}),f.jsx("div",{className:"w-full max-w-7xl p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:n.map((t,r)=>f.jsxs("div",{className:"bg-white p-6 rounded shadow-md mb-6",children:[f.jsx("h3",{className:"text-2xl font-bold mb-2",children:t.title}),f.jsx("p",{className:"mb-4",children:t.description}),t.fileURL&&f.jsxs("video",{controls:!0,className:"w-full rounded-lg",children:[f.jsx("source",{src:t.fileURL,type:"video/mp4"}),"Your browser does not support the video tag."]})]},r))})]})}function bt({element:n}){const{user:e}=S.useContext(mn);return e?n:f.jsx(Go,{to:"/login",replace:!0})}function gA({element:n}){const{user:e,isVerified:t}=S.useContext(mn);return e&&!t?f.jsx(Go,{to:"/verify",replace:!0}):n}function _A(){return f.jsx(Gb,{children:f.jsx(Om,{children:f.jsx(yA,{})})})}function yA(){const n=Un(),e=n.pathname.startsWith("/training")||n.pathname==="/login"||n.pathname==="/register"||n.pathname==="/forgot-password"||n.pathname==="/dashboard"||n.pathname==="/quiz"||n.pathname==="/verify"||n.pathname==="/logout",t=n.pathname.startsWith("/admin")||n.pathname==="/admin-login"||n.pathname==="/logout";return f.jsxs("div",{className:"flex flex-col min-h-screen",children:[!e&&!t&&f.jsx(Wm,{}),e&&!t&&f.jsx(qb,{}),t&&f.jsx(aA,{}),f.jsx("div",{className:"flex-grow",children:f.jsxs(Rm,{children:[f.jsx(he,{path:"/",element:f.jsxs(f.Fragment,{children:[f.jsx(Km,{}),f.jsx(Xm,{}),f.jsx(Ym,{}),f.jsx(Zm,{}),f.jsx(Fb,{})]})}),f.jsx(he,{path:"/login",element:f.jsx($b,{})}),f.jsx(he,{path:"/forgot-password",element:f.jsx(zb,{})}),f.jsx(he,{path:"/register",element:f.jsx(gA,{element:f.jsx(Hb,{})})}),f.jsx(he,{path:"/verify",element:f.jsx(Kb,{})}),f.jsx(he,{path:"/logout",element:f.jsx(cA,{})}),f.jsx(he,{path:"/quiz",element:f.jsx(Wb,{})}),f.jsx(he,{path:"/training",element:f.jsx(bt,{element:f.jsx(nA,{})})}),f.jsx(he,{path:"/admin-login",element:f.jsx(iA,{})}),f.jsx(he,{path:"/admin-logout",element:f.jsx(oA,{})}),f.jsx(he,{path:"/admin",element:f.jsx(lA,{element:f.jsx(sA,{})})}),f.jsx(he,{path:"/training/feedback",element:f.jsx(bt,{element:f.jsx(Qb,{})})}),f.jsx(he,{path:"/training/data-breaches",element:f.jsx(bt,{element:f.jsx(uA,{})})}),f.jsx(he,{path:"/training/insider-threats",element:f.jsx(bt,{element:f.jsx(hA,{})})}),f.jsx(he,{path:"/training/ransomware",element:f.jsx(bt,{element:f.jsx(dA,{})})}),f.jsx(he,{path:"/training/weak-passwords",element:f.jsx(bt,{element:f.jsx(fA,{})})}),f.jsx(he,{path:"/training/physical-theft",element:f.jsx(bt,{element:f.jsx(pA,{})})}),f.jsx(he,{path:"/training/phishing-attacks",element:f.jsx(bt,{element:f.jsx(mA,{})})})]})}),f.jsx(Bb,{})]})}mo.createRoot(document.getElementById("root")).render(f.jsx(kt.StrictMode,{children:f.jsx(_A,{})}));
