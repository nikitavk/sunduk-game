const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/browserAll-DT0mxM0_.js","assets/webworkerAll-CnP6x4UB.js","assets/Filter-DBla0ifw.js","assets/WebGPURenderer-BSuB32Rp.js","assets/BufferResource-BYCVqExW.js","assets/RenderTargetSystem-Bt8jJjVE.js","assets/WebGLRenderer-BSzPmBsP.js","assets/CanvasRenderer-Dx_6pwIA.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Wm="modulepreload",Xm=function(i){return"/sunduk-game/"+i},Uh={},wr=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){let l=function(c){return Promise.all(c.map(h=>Promise.resolve(h).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=a?.nonce||a?.getAttribute("nonce");s=l(e.map(c=>{if(c=Xm(c),c in Uh)return;Uh[c]=!0;const h=c.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":Wm,h||(f.as="script"),f.crossOrigin="",f.href=c,o&&f.setAttribute("nonce",o),document.head.appendChild(f),h)return new Promise((d,g)=>{f.addEventListener("load",d),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})};var qt=(i=>(i.Application="application",i.WebGLPipes="webgl-pipes",i.WebGLPipesAdaptor="webgl-pipes-adaptor",i.WebGLSystem="webgl-system",i.WebGPUPipes="webgpu-pipes",i.WebGPUPipesAdaptor="webgpu-pipes-adaptor",i.WebGPUSystem="webgpu-system",i.CanvasSystem="canvas-system",i.CanvasPipesAdaptor="canvas-pipes-adaptor",i.CanvasPipes="canvas-pipes",i.Asset="asset",i.LoadParser="load-parser",i.ResolveParser="resolve-parser",i.CacheParser="cache-parser",i.DetectionParser="detection-parser",i.MaskEffect="mask-effect",i.BlendMode="blend-mode",i.TextureSource="texture-source",i.Environment="environment",i.ShapeBuilder="shape-builder",i.Batcher="batcher",i))(qt||{});const Ol=i=>{if(typeof i=="function"||typeof i=="object"&&i.extension){if(!i.extension)throw new Error("Extension class must have an extension object");i={...typeof i.extension!="object"?{type:i.extension}:i.extension,ref:i}}if(typeof i=="object")i={...i};else throw new Error("Invalid extension type");return typeof i.type=="string"&&(i.type=[i.type]),i},Qr=(i,t)=>Ol(i).priority??t,Be={_addHandlers:{},_removeHandlers:{},_queue:{},remove(...i){return i.map(Ol).forEach(t=>{t.type.forEach(e=>this._removeHandlers[e]?.(t))}),this},add(...i){return i.map(Ol).forEach(t=>{t.type.forEach(e=>{const n=this._addHandlers,s=this._queue;n[e]?n[e]?.(t):(s[e]=s[e]||[],s[e]?.push(t))})}),this},handle(i,t,e){const n=this._addHandlers,s=this._removeHandlers;if(n[i]||s[i])throw new Error(`Extension type ${i} already has a handler`);n[i]=t,s[i]=e;const r=this._queue;return r[i]&&(r[i]?.forEach(a=>t(a)),delete r[i]),this},handleByMap(i,t){return this.handle(i,e=>{e.name&&(t[e.name]=e.ref)},e=>{e.name&&delete t[e.name]})},handleByNamedList(i,t,e=-1){return this.handle(i,n=>{t.findIndex(r=>r.name===n.name)>=0||(t.push({name:n.name,value:n.ref}),t.sort((r,a)=>Qr(a.value,e)-Qr(r.value,e)))},n=>{const s=t.findIndex(r=>r.name===n.name);s!==-1&&t.splice(s,1)})},handleByList(i,t,e=-1){return this.handle(i,n=>{t.includes(n.ref)||(t.push(n.ref),t.sort((s,r)=>Qr(r,e)-Qr(s,e)))},n=>{const s=t.indexOf(n.ref);s!==-1&&t.splice(s,1)})},mixin(i,...t){for(const e of t)Object.defineProperties(i.prototype,Object.getOwnPropertyDescriptors(e))}},Ym={extension:{type:qt.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await wr(()=>import("./browserAll-DT0mxM0_.js"),__vite__mapDeps([0,1,2]))}},$m={extension:{type:qt.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await wr(()=>import("./webworkerAll-CnP6x4UB.js"),__vite__mapDeps([1,2]))}};class Ke{constructor(t,e,n){this._x=e||0,this._y=n||0,this._observer=t}clone(t){return new Ke(t??this._observer,this._x,this._y)}set(t=0,e=t){return(this._x!==t||this._y!==e)&&(this._x=t,this._y=e,this._observer._onUpdate(this)),this}copyFrom(t){return(this._x!==t.x||this._y!==t.y)&&(this._x=t.x,this._y=t.y,this._observer._onUpdate(this)),this}copyTo(t){return t.set(this._x,this._y),t}equals(t){return t.x===this._x&&t.y===this._y}toString(){return`[pixi.js/math:ObservablePoint x=${this._x} y=${this._y} scope=${this._observer}]`}get x(){return this._x}set x(t){this._x!==t&&(this._x=t,this._observer._onUpdate(this))}get y(){return this._y}set y(t){this._y!==t&&(this._y=t,this._observer._onUpdate(this))}}function of(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var bo={exports:{}},Fh;function qm(){return Fh||(Fh=1,(function(i){var t=Object.prototype.hasOwnProperty,e="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(e=!1));function s(l,c,h){this.fn=l,this.context=c,this.once=h||!1}function r(l,c,h,u,f){if(typeof h!="function")throw new TypeError("The listener must be a function");var d=new s(h,u||l,f),g=e?e+c:c;return l._events[g]?l._events[g].fn?l._events[g]=[l._events[g],d]:l._events[g].push(d):(l._events[g]=d,l._eventsCount++),l}function a(l,c){--l._eventsCount===0?l._events=new n:delete l._events[c]}function o(){this._events=new n,this._eventsCount=0}o.prototype.eventNames=function(){var c=[],h,u;if(this._eventsCount===0)return c;for(u in h=this._events)t.call(h,u)&&c.push(e?u.slice(1):u);return Object.getOwnPropertySymbols?c.concat(Object.getOwnPropertySymbols(h)):c},o.prototype.listeners=function(c){var h=e?e+c:c,u=this._events[h];if(!u)return[];if(u.fn)return[u.fn];for(var f=0,d=u.length,g=new Array(d);f<d;f++)g[f]=u[f].fn;return g},o.prototype.listenerCount=function(c){var h=e?e+c:c,u=this._events[h];return u?u.fn?1:u.length:0},o.prototype.emit=function(c,h,u,f,d,g){var _=e?e+c:c;if(!this._events[_])return!1;var m=this._events[_],p=arguments.length,M,S;if(m.fn){switch(m.once&&this.removeListener(c,m.fn,void 0,!0),p){case 1:return m.fn.call(m.context),!0;case 2:return m.fn.call(m.context,h),!0;case 3:return m.fn.call(m.context,h,u),!0;case 4:return m.fn.call(m.context,h,u,f),!0;case 5:return m.fn.call(m.context,h,u,f,d),!0;case 6:return m.fn.call(m.context,h,u,f,d,g),!0}for(S=1,M=new Array(p-1);S<p;S++)M[S-1]=arguments[S];m.fn.apply(m.context,M)}else{var v=m.length,T;for(S=0;S<v;S++)switch(m[S].once&&this.removeListener(c,m[S].fn,void 0,!0),p){case 1:m[S].fn.call(m[S].context);break;case 2:m[S].fn.call(m[S].context,h);break;case 3:m[S].fn.call(m[S].context,h,u);break;case 4:m[S].fn.call(m[S].context,h,u,f);break;default:if(!M)for(T=1,M=new Array(p-1);T<p;T++)M[T-1]=arguments[T];m[S].fn.apply(m[S].context,M)}}return!0},o.prototype.on=function(c,h,u){return r(this,c,h,u,!1)},o.prototype.once=function(c,h,u){return r(this,c,h,u,!0)},o.prototype.removeListener=function(c,h,u,f){var d=e?e+c:c;if(!this._events[d])return this;if(!h)return a(this,d),this;var g=this._events[d];if(g.fn)g.fn===h&&(!f||g.once)&&(!u||g.context===u)&&a(this,d);else{for(var _=0,m=[],p=g.length;_<p;_++)(g[_].fn!==h||f&&!g[_].once||u&&g[_].context!==u)&&m.push(g[_]);m.length?this._events[d]=m.length===1?m[0]:m:a(this,d)}return this},o.prototype.removeAllListeners=function(c){var h;return c?(h=e?e+c:c,this._events[h]&&a(this,h)):(this._events=new n,this._eventsCount=0),this},o.prototype.off=o.prototype.removeListener,o.prototype.addListener=o.prototype.on,o.prefixed=e,o.EventEmitter=o,i.exports=o})(bo)),bo.exports}var jm=qm();const ii=of(jm),Km=Math.PI*2,Zm=180/Math.PI,Jm=Math.PI/180;class tn{constructor(t=0,e=0){this.x=0,this.y=0,this.x=t,this.y=e}clone(){return new tn(this.x,this.y)}copyFrom(t){return this.set(t.x,t.y),this}copyTo(t){return t.set(this.x,this.y),t}equals(t){return t.x===this.x&&t.y===this.y}set(t=0,e=t){return this.x=t,this.y=e,this}toString(){return`[pixi.js/math:Point x=${this.x} y=${this.y}]`}static get shared(){return To.x=0,To.y=0,To}}const To=new tn;class ne{constructor(t=1,e=0,n=0,s=1,r=0,a=0){this.array=null,this.a=t,this.b=e,this.c=n,this.d=s,this.tx=r,this.ty=a}fromArray(t){this.a=t[0],this.b=t[1],this.c=t[3],this.d=t[4],this.tx=t[2],this.ty=t[5]}set(t,e,n,s,r,a){return this.a=t,this.b=e,this.c=n,this.d=s,this.tx=r,this.ty=a,this}toArray(t,e){this.array||(this.array=new Float32Array(9));const n=e||this.array;return t?(n[0]=this.a,n[1]=this.b,n[2]=0,n[3]=this.c,n[4]=this.d,n[5]=0,n[6]=this.tx,n[7]=this.ty,n[8]=1):(n[0]=this.a,n[1]=this.c,n[2]=this.tx,n[3]=this.b,n[4]=this.d,n[5]=this.ty,n[6]=0,n[7]=0,n[8]=1),n}apply(t,e){e=e||new tn;const n=t.x,s=t.y;return e.x=this.a*n+this.c*s+this.tx,e.y=this.b*n+this.d*s+this.ty,e}applyInverse(t,e){e=e||new tn;const n=this.a,s=this.b,r=this.c,a=this.d,o=this.tx,l=this.ty,c=1/(n*a+r*-s),h=t.x,u=t.y;return e.x=a*c*h+-r*c*u+(l*r-o*a)*c,e.y=n*c*u+-s*c*h+(-l*n+o*s)*c,e}translate(t,e){return this.tx+=t,this.ty+=e,this}scale(t,e){return this.a*=t,this.d*=e,this.c*=t,this.b*=e,this.tx*=t,this.ty*=e,this}rotate(t){const e=Math.cos(t),n=Math.sin(t),s=this.a,r=this.c,a=this.tx;return this.a=s*e-this.b*n,this.b=s*n+this.b*e,this.c=r*e-this.d*n,this.d=r*n+this.d*e,this.tx=a*e-this.ty*n,this.ty=a*n+this.ty*e,this}append(t){const e=this.a,n=this.b,s=this.c,r=this.d;return this.a=t.a*e+t.b*s,this.b=t.a*n+t.b*r,this.c=t.c*e+t.d*s,this.d=t.c*n+t.d*r,this.tx=t.tx*e+t.ty*s+this.tx,this.ty=t.tx*n+t.ty*r+this.ty,this}appendFrom(t,e){const n=t.a,s=t.b,r=t.c,a=t.d,o=t.tx,l=t.ty,c=e.a,h=e.b,u=e.c,f=e.d;return this.a=n*c+s*u,this.b=n*h+s*f,this.c=r*c+a*u,this.d=r*h+a*f,this.tx=o*c+l*u+e.tx,this.ty=o*h+l*f+e.ty,this}setTransform(t,e,n,s,r,a,o,l,c){return this.a=Math.cos(o+c)*r,this.b=Math.sin(o+c)*r,this.c=-Math.sin(o-l)*a,this.d=Math.cos(o-l)*a,this.tx=t-(n*this.a+s*this.c),this.ty=e-(n*this.b+s*this.d),this}prepend(t){const e=this.tx;if(t.a!==1||t.b!==0||t.c!==0||t.d!==1){const n=this.a,s=this.c;this.a=n*t.a+this.b*t.c,this.b=n*t.b+this.b*t.d,this.c=s*t.a+this.d*t.c,this.d=s*t.b+this.d*t.d}return this.tx=e*t.a+this.ty*t.c+t.tx,this.ty=e*t.b+this.ty*t.d+t.ty,this}decompose(t){const e=this.a,n=this.b,s=this.c,r=this.d,a=t.pivot,o=-Math.atan2(-s,r),l=Math.atan2(n,e),c=Math.abs(o+l);return c<1e-5||Math.abs(Km-c)<1e-5?(t.rotation=l,t.skew.x=t.skew.y=0):(t.rotation=0,t.skew.x=o,t.skew.y=l),t.scale.x=Math.sqrt(e*e+n*n),t.scale.y=Math.sqrt(s*s+r*r),t.position.x=this.tx+(a.x*e+a.y*s),t.position.y=this.ty+(a.x*n+a.y*r),t}invert(){const t=this.a,e=this.b,n=this.c,s=this.d,r=this.tx,a=t*s-e*n;return this.a=s/a,this.b=-e/a,this.c=-n/a,this.d=t/a,this.tx=(n*this.ty-s*r)/a,this.ty=-(t*this.ty-e*r)/a,this}isIdentity(){return this.a===1&&this.b===0&&this.c===0&&this.d===1&&this.tx===0&&this.ty===0}identity(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this}clone(){const t=new ne;return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyTo(t){return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyFrom(t){return this.a=t.a,this.b=t.b,this.c=t.c,this.d=t.d,this.tx=t.tx,this.ty=t.ty,this}equals(t){return t.a===this.a&&t.b===this.b&&t.c===this.c&&t.d===this.d&&t.tx===this.tx&&t.ty===this.ty}toString(){return`[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`}static get IDENTITY(){return tg.identity()}static get shared(){return Qm.identity()}}const Qm=new ne,tg=new ne,ss=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],rs=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],as=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],os=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],Bl=[],lf=[],ta=Math.sign;function eg(){for(let i=0;i<16;i++){const t=[];Bl.push(t);for(let e=0;e<16;e++){const n=ta(ss[i]*ss[e]+as[i]*rs[e]),s=ta(rs[i]*ss[e]+os[i]*rs[e]),r=ta(ss[i]*as[e]+as[i]*os[e]),a=ta(rs[i]*as[e]+os[i]*os[e]);for(let o=0;o<16;o++)if(ss[o]===n&&rs[o]===s&&as[o]===r&&os[o]===a){t.push(o);break}}}for(let i=0;i<16;i++){const t=new ne;t.set(ss[i],rs[i],as[i],os[i],0,0),lf.push(t)}}eg();const Te={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:i=>ss[i],uY:i=>rs[i],vX:i=>as[i],vY:i=>os[i],inv:i=>i&8?i&15:-i&7,add:(i,t)=>Bl[i][t],sub:(i,t)=>Bl[i][Te.inv(t)],rotate180:i=>i^4,isVertical:i=>(i&3)===2,byDirection:(i,t)=>Math.abs(i)*2<=Math.abs(t)?t>=0?Te.S:Te.N:Math.abs(t)*2<=Math.abs(i)?i>0?Te.E:Te.W:t>0?i>0?Te.SE:Te.SW:i>0?Te.NE:Te.NW,matrixAppendRotationInv:(i,t,e=0,n=0,s=0,r=0)=>{const a=lf[Te.inv(t)],o=a.a,l=a.b,c=a.c,h=a.d,u=e-Math.min(0,o*s,c*r,o*s+c*r),f=n-Math.min(0,l*s,h*r,l*s+h*r),d=i.a,g=i.b,_=i.c,m=i.d;i.a=o*d+l*_,i.b=o*g+l*m,i.c=c*d+h*_,i.d=c*g+h*m,i.tx=u*d+f*_+i.tx,i.ty=u*g+f*m+i.ty},transformRectCoords:(i,t,e,n)=>{const{x:s,y:r,width:a,height:o}=i,{x:l,y:c,width:h,height:u}=t;return e===Te.E?(n.set(s+l,r+c,a,o),n):e===Te.S?n.set(h-r-o+l,s+c,o,a):e===Te.W?n.set(h-s-a+l,u-r-o+c,a,o):e===Te.N?n.set(r+l,u-s-a+c,o,a):n.set(s+l,r+c,a,o)}},ea=[new tn,new tn,new tn,new tn];class Oe{constructor(t=0,e=0,n=0,s=0){this.type="rectangle",this.x=Number(t),this.y=Number(e),this.width=Number(n),this.height=Number(s)}get left(){return this.x}get right(){return this.x+this.width}get top(){return this.y}get bottom(){return this.y+this.height}isEmpty(){return this.left===this.right||this.top===this.bottom}static get EMPTY(){return new Oe(0,0,0,0)}clone(){return new Oe(this.x,this.y,this.width,this.height)}copyFromBounds(t){return this.x=t.minX,this.y=t.minY,this.width=t.maxX-t.minX,this.height=t.maxY-t.minY,this}copyFrom(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this}copyTo(t){return t.copyFrom(this),t}contains(t,e){return this.width<=0||this.height<=0?!1:t>=this.x&&t<this.x+this.width&&e>=this.y&&e<this.y+this.height}strokeContains(t,e,n,s=.5){const{width:r,height:a}=this;if(r<=0||a<=0)return!1;const o=this.x,l=this.y,c=n*(1-s),h=n-c,u=o-c,f=o+r+c,d=l-c,g=l+a+c,_=o+h,m=o+r-h,p=l+h,M=l+a-h;return t>=u&&t<=f&&e>=d&&e<=g&&!(t>_&&t<m&&e>p&&e<M)}intersects(t,e){if(!e){const I=this.x<t.x?t.x:this.x;if((this.right>t.right?t.right:this.right)<=I)return!1;const y=this.y<t.y?t.y:this.y;return(this.bottom>t.bottom?t.bottom:this.bottom)>y}const n=this.left,s=this.right,r=this.top,a=this.bottom;if(s<=n||a<=r)return!1;const o=ea[0].set(t.left,t.top),l=ea[1].set(t.left,t.bottom),c=ea[2].set(t.right,t.top),h=ea[3].set(t.right,t.bottom);if(c.x<=o.x||l.y<=o.y)return!1;const u=Math.sign(e.a*e.d-e.b*e.c);if(u===0||(e.apply(o,o),e.apply(l,l),e.apply(c,c),e.apply(h,h),Math.max(o.x,l.x,c.x,h.x)<=n||Math.min(o.x,l.x,c.x,h.x)>=s||Math.max(o.y,l.y,c.y,h.y)<=r||Math.min(o.y,l.y,c.y,h.y)>=a))return!1;const f=u*(l.y-o.y),d=u*(o.x-l.x),g=f*n+d*r,_=f*s+d*r,m=f*n+d*a,p=f*s+d*a;if(Math.max(g,_,m,p)<=f*o.x+d*o.y||Math.min(g,_,m,p)>=f*h.x+d*h.y)return!1;const M=u*(o.y-c.y),S=u*(c.x-o.x),v=M*n+S*r,T=M*s+S*r,E=M*n+S*a,A=M*s+S*a;return!(Math.max(v,T,E,A)<=M*o.x+S*o.y||Math.min(v,T,E,A)>=M*h.x+S*h.y)}pad(t=0,e=t){return this.x-=t,this.y-=e,this.width+=t*2,this.height+=e*2,this}fit(t){const e=Math.max(this.x,t.x),n=Math.min(this.x+this.width,t.x+t.width),s=Math.max(this.y,t.y),r=Math.min(this.y+this.height,t.y+t.height);return this.x=e,this.width=Math.max(n-e,0),this.y=s,this.height=Math.max(r-s,0),this}ceil(t=1,e=.001){const n=Math.ceil((this.x+this.width-e)*t)/t,s=Math.ceil((this.y+this.height-e)*t)/t;return this.x=Math.floor((this.x+e)*t)/t,this.y=Math.floor((this.y+e)*t)/t,this.width=n-this.x,this.height=s-this.y,this}scale(t,e=t){return this.x*=t,this.y*=e,this.width*=t,this.height*=e,this}enlarge(t){const e=Math.min(this.x,t.x),n=Math.max(this.x+this.width,t.x+t.width),s=Math.min(this.y,t.y),r=Math.max(this.y+this.height,t.y+t.height);return this.x=e,this.width=n-e,this.y=s,this.height=r-s,this}getBounds(t){return t||(t=new Oe),t.copyFrom(this),t}containsRect(t){if(this.width<=0||this.height<=0)return!1;const e=t.x,n=t.y,s=t.x+t.width,r=t.y+t.height;return e>=this.x&&e<this.x+this.width&&n>=this.y&&n<this.y+this.height&&s>=this.x&&s<this.x+this.width&&r>=this.y&&r<this.y+this.height}set(t,e,n,s){return this.x=t,this.y=e,this.width=n,this.height=s,this}toString(){return`[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`}}const Eo={default:-1};function Ue(i="default"){return Eo[i]===void 0&&(Eo[i]=-1),++Eo[i]}const Nh=new Set,Le="8.0.0",ng="8.3.4",zs={quiet:!1,noColor:!1},ce=((i,t,e=3)=>{if(zs.quiet||Nh.has(t))return;let n=new Error().stack;const s=`${t}
Deprecated since v${i}`,r=typeof console.groupCollapsed=="function"&&!zs.noColor;typeof n>"u"?console.warn("PixiJS Deprecation Warning: ",s):(n=n.split(`
`).splice(e).join(`
`),r?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",s),console.warn(n),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",s),console.warn(n))),Nh.add(t)});Object.defineProperties(ce,{quiet:{get:()=>zs.quiet,set:i=>{zs.quiet=i},enumerable:!0,configurable:!1},noColor:{get:()=>zs.noColor,set:i=>{zs.noColor=i},enumerable:!0,configurable:!1}});const cf=()=>{};function $s(i){return i+=i===0?1:0,--i,i|=i>>>1,i|=i>>>2,i|=i>>>4,i|=i>>>8,i|=i>>>16,i+1}function Oh(i){return!(i&i-1)&&!!i}function hf(i){const t={};for(const e in i)i[e]!==void 0&&(t[e]=i[e]);return t}const Bh=Object.create(null);function ig(i){const t=Bh[i];return t===void 0&&(Bh[i]=Ue("resource")),t}const uf=class df extends ii{constructor(t={}){super(),this._resourceType="textureSampler",this._touched=0,this._maxAnisotropy=1,this.destroyed=!1,t={...df.defaultOptions,...t},this.addressMode=t.addressMode,this.addressModeU=t.addressModeU??this.addressModeU,this.addressModeV=t.addressModeV??this.addressModeV,this.addressModeW=t.addressModeW??this.addressModeW,this.scaleMode=t.scaleMode,this.magFilter=t.magFilter??this.magFilter,this.minFilter=t.minFilter??this.minFilter,this.mipmapFilter=t.mipmapFilter??this.mipmapFilter,this.lodMinClamp=t.lodMinClamp,this.lodMaxClamp=t.lodMaxClamp,this.compare=t.compare,this.maxAnisotropy=t.maxAnisotropy??1}set addressMode(t){this.addressModeU=t,this.addressModeV=t,this.addressModeW=t}get addressMode(){return this.addressModeU}set wrapMode(t){ce(Le,"TextureStyle.wrapMode is now TextureStyle.addressMode"),this.addressMode=t}get wrapMode(){return this.addressMode}set scaleMode(t){this.magFilter=t,this.minFilter=t,this.mipmapFilter=t}get scaleMode(){return this.magFilter}set maxAnisotropy(t){this._maxAnisotropy=Math.min(t,16),this._maxAnisotropy>1&&(this.scaleMode="linear")}get maxAnisotropy(){return this._maxAnisotropy}get _resourceId(){return this._sharedResourceId||this._generateResourceId()}update(){this._sharedResourceId=null,this.emit("change",this)}_generateResourceId(){const t=`${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;return this._sharedResourceId=ig(t),this._resourceId}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this.removeAllListeners()}};uf.defaultOptions={addressMode:"clamp-to-edge",scaleMode:"linear"};let qs=uf;const ff=class pf extends ii{constructor(t={}){super(),this.options=t,this._gpuData=Object.create(null),this._gcLastUsed=-1,this.uid=Ue("textureSource"),this._resourceType="textureSource",this._resourceId=Ue("resource"),this.uploadMethodId="unknown",this._resolution=1,this.pixelWidth=1,this.pixelHeight=1,this.width=1,this.height=1,this.sampleCount=1,this.mipLevelCount=1,this.autoGenerateMipmaps=!1,this.format="rgba8unorm",this.dimension="2d",this.viewDimension="2d",this.arrayLayerCount=1,this.antialias=!1,this._touched=0,this._batchTick=-1,this._textureBindLocation=-1,t={...pf.defaultOptions,...t},this.label=t.label??"",this.resource=t.resource,this.autoGarbageCollect=t.autoGarbageCollect,this._resolution=t.resolution,t.width?this.pixelWidth=t.width*this._resolution:this.pixelWidth=this.resource?this.resourceWidth??1:1,t.height?this.pixelHeight=t.height*this._resolution:this.pixelHeight=this.resource?this.resourceHeight??1:1,this.width=this.pixelWidth/this._resolution,this.height=this.pixelHeight/this._resolution,this.format=t.format,this.dimension=t.dimensions,this.viewDimension=t.viewDimension??t.dimensions,this.arrayLayerCount=t.arrayLayerCount,this.mipLevelCount=t.mipLevelCount,this.autoGenerateMipmaps=t.autoGenerateMipmaps,this.sampleCount=t.sampleCount,this.antialias=t.antialias,this.alphaMode=t.alphaMode,this.style=new qs(hf(t)),this.destroyed=!1,this._refreshPOT()}get source(){return this}get style(){return this._style}set style(t){this.style!==t&&(this._style?.off("change",this._onStyleChange,this),this._style=t,this._style?.on("change",this._onStyleChange,this),this._onStyleChange())}set maxAnisotropy(t){this._style.maxAnisotropy=t}get maxAnisotropy(){return this._style.maxAnisotropy}get addressMode(){return this._style.addressMode}set addressMode(t){this._style.addressMode=t}get repeatMode(){return this._style.addressMode}set repeatMode(t){this._style.addressMode=t}get magFilter(){return this._style.magFilter}set magFilter(t){this._style.magFilter=t}get minFilter(){return this._style.minFilter}set minFilter(t){this._style.minFilter=t}get mipmapFilter(){return this._style.mipmapFilter}set mipmapFilter(t){this._style.mipmapFilter=t}get lodMinClamp(){return this._style.lodMinClamp}set lodMinClamp(t){this._style.lodMinClamp=t}get lodMaxClamp(){return this._style.lodMaxClamp}set lodMaxClamp(t){this._style.lodMaxClamp=t}_onStyleChange(){this.emit("styleChange",this)}update(){if(this.resource){const t=this._resolution;if(this.resize(this.resourceWidth/t,this.resourceHeight/t))return}this.emit("update",this)}destroy(){this.destroyed=!0,this.unload(),this.emit("destroy",this),this._style&&(this._style.destroy(),this._style=null),this.uploadMethodId=null,this.resource=null,this.removeAllListeners()}unload(){this._resourceId=Ue("resource"),this.emit("change",this),this.emit("unload",this);for(const t in this._gpuData)this._gpuData[t]?.destroy?.();this._gpuData=Object.create(null)}get resourceWidth(){const{resource:t}=this;return t.naturalWidth||t.videoWidth||t.displayWidth||t.width}get resourceHeight(){const{resource:t}=this;return t.naturalHeight||t.videoHeight||t.displayHeight||t.height}get resolution(){return this._resolution}set resolution(t){this._resolution!==t&&(this._resolution=t,this.width=this.pixelWidth/t,this.height=this.pixelHeight/t)}resize(t,e,n){n||(n=this._resolution),t||(t=this.width),e||(e=this.height);const s=Math.round(t*n),r=Math.round(e*n);return this.width=s/n,this.height=r/n,this._resolution=n,this.pixelWidth===s&&this.pixelHeight===r?!1:(this._refreshPOT(),this.pixelWidth=s,this.pixelHeight=r,this.emit("resize",this),this._resourceId=Ue("resource"),this.emit("change",this),!0)}updateMipmaps(){this.autoGenerateMipmaps&&this.mipLevelCount>1&&this.emit("updateMipmaps",this)}set wrapMode(t){this._style.wrapMode=t}get wrapMode(){return this._style.wrapMode}set scaleMode(t){this._style.scaleMode=t}get scaleMode(){return this._style.scaleMode}_refreshPOT(){this.isPowerOfTwo=Oh(this.pixelWidth)&&Oh(this.pixelHeight)}static test(t){throw new Error("Unimplemented")}};ff.defaultOptions={resolution:1,format:"bgra8unorm",alphaMode:"premultiply-alpha-on-upload",dimensions:"2d",viewDimension:"2d",arrayLayerCount:1,mipLevelCount:1,autoGenerateMipmaps:!1,sampleCount:1,antialias:!1,autoGarbageCollect:!1};let Vn=ff;class Qc extends Vn{constructor(t){const e=t.resource||new Float32Array(t.width*t.height*4);let n=t.format;n||(e instanceof Float32Array?n="rgba32float":e instanceof Int32Array||e instanceof Uint32Array?n="rgba32uint":e instanceof Int16Array||e instanceof Uint16Array?n="rgba16uint":(e instanceof Int8Array,n="bgra8unorm")),super({...t,resource:e,format:n}),this.uploadMethodId="buffer"}static test(t){return t instanceof Int8Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array}}Qc.extension=qt.TextureSource;const kh=new ne;class sg{constructor(t,e){this.mapCoord=new ne,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,typeof e>"u"?this.clampMargin=t.width<10?0:.5:this.clampMargin=e,this.isSimple=!1,this.texture=t}get texture(){return this._texture}set texture(t){this.texture!==t&&(this._texture?.removeListener("update",this.update,this),this._texture=t,this._texture.addListener("update",this.update,this),this.update())}multiplyUvs(t,e){e===void 0&&(e=t);const n=this.mapCoord;for(let s=0;s<t.length;s+=2){const r=t[s],a=t[s+1];e[s]=r*n.a+a*n.c+n.tx,e[s+1]=r*n.b+a*n.d+n.ty}return e}update(){const t=this._texture;this._updateID++;const e=t.uvs;this.mapCoord.set(e.x1-e.x0,e.y1-e.y0,e.x3-e.x0,e.y3-e.y0,e.x0,e.y0);const n=t.orig,s=t.trim;s&&(kh.set(n.width/s.width,0,0,n.height/s.height,-s.x/s.width,-s.y/s.height),this.mapCoord.append(kh));const r=t.source,a=this.uClampFrame,o=this.clampMargin/r._resolution,l=this.clampOffset/r._resolution;return a[0]=(t.frame.x+o+l)/r.width,a[1]=(t.frame.y+o+l)/r.height,a[2]=(t.frame.x+t.frame.width-o+l)/r.width,a[3]=(t.frame.y+t.frame.height-o+l)/r.height,this.uClampOffset[0]=this.clampOffset/r.pixelWidth,this.uClampOffset[1]=this.clampOffset/r.pixelHeight,this.isSimple=t.frame.width===r.width&&t.frame.height===r.height&&t.rotate===0,!0}}let ye=class extends ii{constructor({source:t,label:e,frame:n,orig:s,trim:r,defaultAnchor:a,defaultBorders:o,rotate:l,dynamic:c}={}){if(super(),this.uid=Ue("texture"),this.uvs={x0:0,y0:0,x1:0,y1:0,x2:0,y2:0,x3:0,y3:0},this.frame=new Oe,this.noFrame=!1,this.dynamic=!1,this.isTexture=!0,this.label=e,this.source=t?.source??new Vn,this.noFrame=!n,n)this.frame.copyFrom(n);else{const{width:h,height:u}=this._source;this.frame.width=h,this.frame.height=u}this.orig=s||this.frame,this.trim=r,this.rotate=l??0,this.defaultAnchor=a,this.defaultBorders=o,this.destroyed=!1,this.dynamic=c||!1,this.updateUvs()}set source(t){this._source&&this._source.off("resize",this.update,this),this._source=t,t.on("resize",this.update,this),this.emit("update",this)}get source(){return this._source}get textureMatrix(){return this._textureMatrix||(this._textureMatrix=new sg(this)),this._textureMatrix}get width(){return this.orig.width}get height(){return this.orig.height}updateUvs(){const{uvs:t,frame:e}=this,{width:n,height:s}=this._source,r=e.x/n,a=e.y/s,o=e.width/n,l=e.height/s;let c=this.rotate;if(c){const h=o/2,u=l/2,f=r+h,d=a+u;c=Te.add(c,Te.NW),t.x0=f+h*Te.uX(c),t.y0=d+u*Te.uY(c),c=Te.add(c,2),t.x1=f+h*Te.uX(c),t.y1=d+u*Te.uY(c),c=Te.add(c,2),t.x2=f+h*Te.uX(c),t.y2=d+u*Te.uY(c),c=Te.add(c,2),t.x3=f+h*Te.uX(c),t.y3=d+u*Te.uY(c)}else t.x0=r,t.y0=a,t.x1=r+o,t.y1=a,t.x2=r+o,t.y2=a+l,t.x3=r,t.y3=a+l}destroy(t=!1){this._source&&(this._source.off("resize",this.update,this),t&&(this._source.destroy(),this._source=null)),this._textureMatrix=null,this.destroyed=!0,this.emit("destroy",this),this.removeAllListeners()}update(){this.noFrame&&(this.frame.width=this._source.width,this.frame.height=this._source.height),this.updateUvs(),this.emit("update",this)}get baseTexture(){return ce(Le,"Texture.baseTexture is now Texture.source"),this._source}};ye.EMPTY=new ye({label:"EMPTY",source:new Vn({label:"EMPTY"})});ye.EMPTY.destroy=cf;ye.WHITE=new ye({source:new Qc({resource:new Uint8Array([255,255,255,255]),width:1,height:1,alphaMode:"premultiply-alpha-on-upload",label:"WHITE"}),label:"WHITE"});ye.WHITE.destroy=cf;function mf(i,t,e){const{width:n,height:s}=e.orig,r=e.trim;if(r){const a=r.width,o=r.height;i.minX=r.x-t._x*n,i.maxX=i.minX+a,i.minY=r.y-t._y*s,i.maxY=i.minY+o}else i.minX=-t._x*n,i.maxX=i.minX+n,i.minY=-t._y*s,i.maxY=i.minY+s}const Gh=new ne;class In{constructor(t=1/0,e=1/0,n=-1/0,s=-1/0){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=Gh,this.minX=t,this.minY=e,this.maxX=n,this.maxY=s}isEmpty(){return this.minX>this.maxX||this.minY>this.maxY}get rectangle(){this._rectangle||(this._rectangle=new Oe);const t=this._rectangle;return this.minX>this.maxX||this.minY>this.maxY?(t.x=0,t.y=0,t.width=0,t.height=0):t.copyFromBounds(this),t}clear(){return this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=Gh,this}set(t,e,n,s){this.minX=t,this.minY=e,this.maxX=n,this.maxY=s}addFrame(t,e,n,s,r){r||(r=this.matrix);const a=r.a,o=r.b,l=r.c,c=r.d,h=r.tx,u=r.ty;let f=this.minX,d=this.minY,g=this.maxX,_=this.maxY,m=a*t+l*e+h,p=o*t+c*e+u;m<f&&(f=m),p<d&&(d=p),m>g&&(g=m),p>_&&(_=p),m=a*n+l*e+h,p=o*n+c*e+u,m<f&&(f=m),p<d&&(d=p),m>g&&(g=m),p>_&&(_=p),m=a*t+l*s+h,p=o*t+c*s+u,m<f&&(f=m),p<d&&(d=p),m>g&&(g=m),p>_&&(_=p),m=a*n+l*s+h,p=o*n+c*s+u,m<f&&(f=m),p<d&&(d=p),m>g&&(g=m),p>_&&(_=p),this.minX=f,this.minY=d,this.maxX=g,this.maxY=_}addRect(t,e){this.addFrame(t.x,t.y,t.x+t.width,t.y+t.height,e)}addBounds(t,e){this.addFrame(t.minX,t.minY,t.maxX,t.maxY,e)}addBoundsMask(t){this.minX=this.minX>t.minX?this.minX:t.minX,this.minY=this.minY>t.minY?this.minY:t.minY,this.maxX=this.maxX<t.maxX?this.maxX:t.maxX,this.maxY=this.maxY<t.maxY?this.maxY:t.maxY}applyMatrix(t){const e=this.minX,n=this.minY,s=this.maxX,r=this.maxY,{a,b:o,c:l,d:c,tx:h,ty:u}=t;let f=a*e+l*n+h,d=o*e+c*n+u;this.minX=f,this.minY=d,this.maxX=f,this.maxY=d,f=a*s+l*n+h,d=o*s+c*n+u,this.minX=f<this.minX?f:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=f>this.maxX?f:this.maxX,this.maxY=d>this.maxY?d:this.maxY,f=a*e+l*r+h,d=o*e+c*r+u,this.minX=f<this.minX?f:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=f>this.maxX?f:this.maxX,this.maxY=d>this.maxY?d:this.maxY,f=a*s+l*r+h,d=o*s+c*r+u,this.minX=f<this.minX?f:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=f>this.maxX?f:this.maxX,this.maxY=d>this.maxY?d:this.maxY}fit(t){return this.minX<t.left&&(this.minX=t.left),this.maxX>t.right&&(this.maxX=t.right),this.minY<t.top&&(this.minY=t.top),this.maxY>t.bottom&&(this.maxY=t.bottom),this}fitBounds(t,e,n,s){return this.minX<t&&(this.minX=t),this.maxX>e&&(this.maxX=e),this.minY<n&&(this.minY=n),this.maxY>s&&(this.maxY=s),this}pad(t,e=t){return this.minX-=t,this.maxX+=t,this.minY-=e,this.maxY+=e,this}ceil(){return this.minX=Math.floor(this.minX),this.minY=Math.floor(this.minY),this.maxX=Math.ceil(this.maxX),this.maxY=Math.ceil(this.maxY),this}clone(){return new In(this.minX,this.minY,this.maxX,this.maxY)}scale(t,e=t){return this.minX*=t,this.minY*=e,this.maxX*=t,this.maxY*=e,this}get x(){return this.minX}set x(t){const e=this.maxX-this.minX;this.minX=t,this.maxX=t+e}get y(){return this.minY}set y(t){const e=this.maxY-this.minY;this.minY=t,this.maxY=t+e}get width(){return this.maxX-this.minX}set width(t){this.maxX=this.minX+t}get height(){return this.maxY-this.minY}set height(t){this.maxY=this.minY+t}get left(){return this.minX}get right(){return this.maxX}get top(){return this.minY}get bottom(){return this.maxY}get isPositive(){return this.maxX-this.minX>0&&this.maxY-this.minY>0}get isValid(){return this.minX+this.minY!==1/0}addVertexData(t,e,n,s){let r=this.minX,a=this.minY,o=this.maxX,l=this.maxY;s||(s=this.matrix);const c=s.a,h=s.b,u=s.c,f=s.d,d=s.tx,g=s.ty;for(let _=e;_<n;_+=2){const m=t[_],p=t[_+1],M=c*m+u*p+d,S=h*m+f*p+g;r=M<r?M:r,a=S<a?S:a,o=M>o?M:o,l=S>l?S:l}this.minX=r,this.minY=a,this.maxX=o,this.maxY=l}containsPoint(t,e){return this.minX<=t&&this.minY<=e&&this.maxX>=t&&this.maxY>=e}toString(){return`[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`}copyFrom(t){return this.minX=t.minX,this.minY=t.minY,this.maxX=t.maxX,this.maxY=t.maxY,this}}var rg={grad:.9,turn:360,rad:360/(2*Math.PI)},ai=function(i){return typeof i=="string"?i.length>0:typeof i=="number"},$e=function(i,t,e){return t===void 0&&(t=0),e===void 0&&(e=Math.pow(10,t)),Math.round(e*i)/e+0},Cn=function(i,t,e){return t===void 0&&(t=0),e===void 0&&(e=1),i>e?e:i>t?i:t},gf=function(i){return(i=isFinite(i)?i%360:0)>0?i:i+360},zh=function(i){return{r:Cn(i.r,0,255),g:Cn(i.g,0,255),b:Cn(i.b,0,255),a:Cn(i.a)}},wo=function(i){return{r:$e(i.r),g:$e(i.g),b:$e(i.b),a:$e(i.a,3)}},ag=/^#([0-9a-f]{3,8})$/i,na=function(i){var t=i.toString(16);return t.length<2?"0"+t:t},_f=function(i){var t=i.r,e=i.g,n=i.b,s=i.a,r=Math.max(t,e,n),a=r-Math.min(t,e,n),o=a?r===t?(e-n)/a:r===e?2+(n-t)/a:4+(t-e)/a:0;return{h:60*(o<0?o+6:o),s:r?a/r*100:0,v:r/255*100,a:s}},xf=function(i){var t=i.h,e=i.s,n=i.v,s=i.a;t=t/360*6,e/=100,n/=100;var r=Math.floor(t),a=n*(1-e),o=n*(1-(t-r)*e),l=n*(1-(1-t+r)*e),c=r%6;return{r:255*[n,o,a,a,l,n][c],g:255*[l,n,n,o,a,a][c],b:255*[a,a,l,n,n,o][c],a:s}},Hh=function(i){return{h:gf(i.h),s:Cn(i.s,0,100),l:Cn(i.l,0,100),a:Cn(i.a)}},Vh=function(i){return{h:$e(i.h),s:$e(i.s),l:$e(i.l),a:$e(i.a,3)}},Wh=function(i){return xf((e=(t=i).s,{h:t.h,s:(e*=((n=t.l)<50?n:100-n)/100)>0?2*e/(n+e)*100:0,v:n+e,a:t.a}));var t,e,n},Ar=function(i){return{h:(t=_f(i)).h,s:(s=(200-(e=t.s))*(n=t.v)/100)>0&&s<200?e*n/100/(s<=100?s:200-s)*100:0,l:s/2,a:t.a};var t,e,n,s},og=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,lg=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,cg=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,hg=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,kl={string:[[function(i){var t=ag.exec(i);return t?(i=t[1]).length<=4?{r:parseInt(i[0]+i[0],16),g:parseInt(i[1]+i[1],16),b:parseInt(i[2]+i[2],16),a:i.length===4?$e(parseInt(i[3]+i[3],16)/255,2):1}:i.length===6||i.length===8?{r:parseInt(i.substr(0,2),16),g:parseInt(i.substr(2,2),16),b:parseInt(i.substr(4,2),16),a:i.length===8?$e(parseInt(i.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(i){var t=cg.exec(i)||hg.exec(i);return t?t[2]!==t[4]||t[4]!==t[6]?null:zh({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(i){var t=og.exec(i)||lg.exec(i);if(!t)return null;var e,n,s=Hh({h:(e=t[1],n=t[2],n===void 0&&(n="deg"),Number(e)*(rg[n]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return Wh(s)},"hsl"]],object:[[function(i){var t=i.r,e=i.g,n=i.b,s=i.a,r=s===void 0?1:s;return ai(t)&&ai(e)&&ai(n)?zh({r:Number(t),g:Number(e),b:Number(n),a:Number(r)}):null},"rgb"],[function(i){var t=i.h,e=i.s,n=i.l,s=i.a,r=s===void 0?1:s;if(!ai(t)||!ai(e)||!ai(n))return null;var a=Hh({h:Number(t),s:Number(e),l:Number(n),a:Number(r)});return Wh(a)},"hsl"],[function(i){var t=i.h,e=i.s,n=i.v,s=i.a,r=s===void 0?1:s;if(!ai(t)||!ai(e)||!ai(n))return null;var a=(function(o){return{h:gf(o.h),s:Cn(o.s,0,100),v:Cn(o.v,0,100),a:Cn(o.a)}})({h:Number(t),s:Number(e),v:Number(n),a:Number(r)});return xf(a)},"hsv"]]},Xh=function(i,t){for(var e=0;e<t.length;e++){var n=t[e][0](i);if(n)return[n,t[e][1]]}return[null,void 0]},ug=function(i){return typeof i=="string"?Xh(i.trim(),kl.string):typeof i=="object"&&i!==null?Xh(i,kl.object):[null,void 0]},Ao=function(i,t){var e=Ar(i);return{h:e.h,s:Cn(e.s+100*t,0,100),l:e.l,a:e.a}},Co=function(i){return(299*i.r+587*i.g+114*i.b)/1e3/255},Yh=function(i,t){var e=Ar(i);return{h:e.h,s:e.s,l:Cn(e.l+100*t,0,100),a:e.a}},Gl=(function(){function i(t){this.parsed=ug(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return i.prototype.isValid=function(){return this.parsed!==null},i.prototype.brightness=function(){return $e(Co(this.rgba),2)},i.prototype.isDark=function(){return Co(this.rgba)<.5},i.prototype.isLight=function(){return Co(this.rgba)>=.5},i.prototype.toHex=function(){return t=wo(this.rgba),e=t.r,n=t.g,s=t.b,a=(r=t.a)<1?na($e(255*r)):"","#"+na(e)+na(n)+na(s)+a;var t,e,n,s,r,a},i.prototype.toRgb=function(){return wo(this.rgba)},i.prototype.toRgbString=function(){return t=wo(this.rgba),e=t.r,n=t.g,s=t.b,(r=t.a)<1?"rgba("+e+", "+n+", "+s+", "+r+")":"rgb("+e+", "+n+", "+s+")";var t,e,n,s,r},i.prototype.toHsl=function(){return Vh(Ar(this.rgba))},i.prototype.toHslString=function(){return t=Vh(Ar(this.rgba)),e=t.h,n=t.s,s=t.l,(r=t.a)<1?"hsla("+e+", "+n+"%, "+s+"%, "+r+")":"hsl("+e+", "+n+"%, "+s+"%)";var t,e,n,s,r},i.prototype.toHsv=function(){return t=_f(this.rgba),{h:$e(t.h),s:$e(t.s),v:$e(t.v),a:$e(t.a,3)};var t},i.prototype.invert=function(){return $n({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},i.prototype.saturate=function(t){return t===void 0&&(t=.1),$n(Ao(this.rgba,t))},i.prototype.desaturate=function(t){return t===void 0&&(t=.1),$n(Ao(this.rgba,-t))},i.prototype.grayscale=function(){return $n(Ao(this.rgba,-1))},i.prototype.lighten=function(t){return t===void 0&&(t=.1),$n(Yh(this.rgba,t))},i.prototype.darken=function(t){return t===void 0&&(t=.1),$n(Yh(this.rgba,-t))},i.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},i.prototype.alpha=function(t){return typeof t=="number"?$n({r:(e=this.rgba).r,g:e.g,b:e.b,a:t}):$e(this.rgba.a,3);var e},i.prototype.hue=function(t){var e=Ar(this.rgba);return typeof t=="number"?$n({h:t,s:e.s,l:e.l,a:e.a}):$e(e.h)},i.prototype.isEqual=function(t){return this.toHex()===$n(t).toHex()},i})(),$n=function(i){return i instanceof Gl?i:new Gl(i)},$h=[],dg=function(i){i.forEach(function(t){$h.indexOf(t)<0&&(t(Gl,kl),$h.push(t))})};function fg(i,t){var e={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},n={};for(var s in e)n[e[s]]=s;var r={};i.prototype.toName=function(a){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var o,l,c=n[this.toHex()];if(c)return c;if(a?.closest){var h=this.toRgb(),u=1/0,f="black";if(!r.length)for(var d in e)r[d]=new i(e[d]).toRgb();for(var g in e){var _=(o=h,l=r[g],Math.pow(o.r-l.r,2)+Math.pow(o.g-l.g,2)+Math.pow(o.b-l.b,2));_<u&&(u=_,f=g)}return f}},t.string.push([function(a){var o=a.toLowerCase(),l=o==="transparent"?"#0000":e[o];return l?new i(l).toRgb():null},"name"])}dg([fg]);const js=class Sr{constructor(t=16777215){this._value=null,this._components=new Float32Array(4),this._components.fill(1),this._int=16777215,this.value=t}get red(){return this._components[0]}get green(){return this._components[1]}get blue(){return this._components[2]}get alpha(){return this._components[3]}setValue(t){return this.value=t,this}set value(t){if(t instanceof Sr)this._value=this._cloneSource(t._value),this._int=t._int,this._components.set(t._components);else{if(t===null)throw new Error("Cannot set Color#value to null");(this._value===null||!this._isSourceEqual(this._value,t))&&(this._value=this._cloneSource(t),this._normalize(this._value))}}get value(){return this._value}_cloneSource(t){return typeof t=="string"||typeof t=="number"||t instanceof Number||t===null?t:Array.isArray(t)||ArrayBuffer.isView(t)?t.slice(0):typeof t=="object"&&t!==null?{...t}:t}_isSourceEqual(t,e){const n=typeof t;if(n!==typeof e)return!1;if(n==="number"||n==="string"||t instanceof Number)return t===e;if(Array.isArray(t)&&Array.isArray(e)||ArrayBuffer.isView(t)&&ArrayBuffer.isView(e))return t.length!==e.length?!1:t.every((r,a)=>r===e[a]);if(t!==null&&e!==null){const r=Object.keys(t),a=Object.keys(e);return r.length!==a.length?!1:r.every(o=>t[o]===e[o])}return t===e}toRgba(){const[t,e,n,s]=this._components;return{r:t,g:e,b:n,a:s}}toRgb(){const[t,e,n]=this._components;return{r:t,g:e,b:n}}toRgbaString(){const[t,e,n]=this.toUint8RgbArray();return`rgba(${t},${e},${n},${this.alpha})`}toUint8RgbArray(t){const[e,n,s]=this._components;return this._arrayRgb||(this._arrayRgb=[]),t||(t=this._arrayRgb),t[0]=Math.round(e*255),t[1]=Math.round(n*255),t[2]=Math.round(s*255),t}toArray(t){this._arrayRgba||(this._arrayRgba=[]),t||(t=this._arrayRgba);const[e,n,s,r]=this._components;return t[0]=e,t[1]=n,t[2]=s,t[3]=r,t}toRgbArray(t){this._arrayRgb||(this._arrayRgb=[]),t||(t=this._arrayRgb);const[e,n,s]=this._components;return t[0]=e,t[1]=n,t[2]=s,t}toNumber(){return this._int}toBgrNumber(){const[t,e,n]=this.toUint8RgbArray();return(n<<16)+(e<<8)+t}toLittleEndianNumber(){const t=this._int;return(t>>16)+(t&65280)+((t&255)<<16)}multiply(t){const[e,n,s,r]=Sr._temp.setValue(t)._components;return this._components[0]*=e,this._components[1]*=n,this._components[2]*=s,this._components[3]*=r,this._refreshInt(),this._value=null,this}premultiply(t,e=!0){return e&&(this._components[0]*=t,this._components[1]*=t,this._components[2]*=t),this._components[3]=t,this._refreshInt(),this._value=null,this}toPremultiplied(t,e=!0){if(t===1)return(255<<24)+this._int;if(t===0)return e?0:this._int;let n=this._int>>16&255,s=this._int>>8&255,r=this._int&255;return e&&(n=n*t+.5|0,s=s*t+.5|0,r=r*t+.5|0),(t*255<<24)+(n<<16)+(s<<8)+r}toHex(){const t=this._int.toString(16);return`#${"000000".substring(0,6-t.length)+t}`}toHexa(){const e=Math.round(this._components[3]*255).toString(16);return this.toHex()+"00".substring(0,2-e.length)+e}setAlpha(t){return this._components[3]=this._clamp(t),this}_normalize(t){let e,n,s,r;if((typeof t=="number"||t instanceof Number)&&t>=0&&t<=16777215){const a=t;e=(a>>16&255)/255,n=(a>>8&255)/255,s=(a&255)/255,r=1}else if((Array.isArray(t)||t instanceof Float32Array)&&t.length>=3&&t.length<=4)t=this._clamp(t),[e,n,s,r=1]=t;else if((t instanceof Uint8Array||t instanceof Uint8ClampedArray)&&t.length>=3&&t.length<=4)t=this._clamp(t,0,255),[e,n,s,r=255]=t,e/=255,n/=255,s/=255,r/=255;else if(typeof t=="string"||typeof t=="object"){if(typeof t=="string"){const o=Sr.HEX_PATTERN.exec(t);o&&(t=`#${o[2]}`)}const a=$n(t);a.isValid()&&({r:e,g:n,b:s,a:r}=a.rgba,e/=255,n/=255,s/=255)}if(e!==void 0)this._components[0]=e,this._components[1]=n,this._components[2]=s,this._components[3]=r,this._refreshInt();else throw new Error(`Unable to convert color ${t}`)}_refreshInt(){this._clamp(this._components);const[t,e,n]=this._components;this._int=(t*255<<16)+(e*255<<8)+(n*255|0)}_clamp(t,e=0,n=1){return typeof t=="number"?Math.min(Math.max(t,e),n):(t.forEach((s,r)=>{t[r]=Math.min(Math.max(s,e),n)}),t)}static isColorLike(t){return typeof t=="number"||typeof t=="string"||t instanceof Number||t instanceof Sr||Array.isArray(t)||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Float32Array||t.r!==void 0&&t.g!==void 0&&t.b!==void 0||t.r!==void 0&&t.g!==void 0&&t.b!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0&&t.a!==void 0}};js.shared=new js;js._temp=new js;js.HEX_PATTERN=/^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;let He=js;const pg={cullArea:null,cullable:!1,cullableChildren:!0};let Ro=0;const qh=500;function on(...i){Ro!==qh&&(Ro++,Ro===qh?console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS."):console.warn("PixiJS Warning: ",...i))}const Vr={_registeredResources:new Set,register(i){this._registeredResources.add(i)},unregister(i){this._registeredResources.delete(i)},release(){this._registeredResources.forEach(i=>i.clear())},get registeredCount(){return this._registeredResources.size},isRegistered(i){return this._registeredResources.has(i)},reset(){this._registeredResources.clear()}};class mg{constructor(t,e){this._pool=[],this._count=0,this._index=0,this._classType=t,e&&this.prepopulate(e)}prepopulate(t){for(let e=0;e<t;e++)this._pool[this._index++]=new this._classType;this._count+=t}get(t){let e;return this._index>0?e=this._pool[--this._index]:(e=new this._classType,this._count++),e.init?.(t),e}return(t){t.reset?.(),this._pool[this._index++]=t}get totalSize(){return this._count}get totalFree(){return this._index}get totalUsed(){return this._count-this._index}clear(){if(this._pool.length>0&&this._pool[0].destroy)for(let t=0;t<this._index;t++)this._pool[t].destroy();this._pool.length=0,this._count=0,this._index=0}}class gg{constructor(){this._poolsByClass=new Map}prepopulate(t,e){this.getPool(t).prepopulate(e)}get(t,e){return this.getPool(t).get(e)}return(t){this.getPool(t.constructor).return(t)}getPool(t){return this._poolsByClass.has(t)||this._poolsByClass.set(t,new mg(t)),this._poolsByClass.get(t)}stats(){const t={};return this._poolsByClass.forEach(e=>{const n=t[e._classType.name]?e._classType.name+e._classType.ID:e._classType.name;t[n]={free:e.totalFree,used:e.totalUsed,size:e.totalSize}}),t}clear(){this._poolsByClass.forEach(t=>t.clear()),this._poolsByClass.clear()}}const pn=new gg;Vr.register(pn);const _g={get isCachedAsTexture(){return!!this.renderGroup?.isCachedAsTexture},cacheAsTexture(i){typeof i=="boolean"&&i===!1?this.disableRenderGroup():(this.enableRenderGroup(),this.renderGroup.enableCacheAsTexture(i===!0?{}:i))},updateCacheTexture(){this.renderGroup?.updateCacheTexture()},get cacheAsBitmap(){return this.isCachedAsTexture},set cacheAsBitmap(i){ce("v8.6.0","cacheAsBitmap is deprecated, use cacheAsTexture instead."),this.cacheAsTexture(i)}};function xg(i,t,e){const n=i.length;let s;if(t>=n||e===0)return;e=t+e>n?n-t:e;const r=n-e;for(s=t;s<r;++s)i[s]=i[s+e];i.length=r}const vg={allowChildren:!0,removeChildren(i=0,t){const e=t??this.children.length,n=e-i,s=[];if(n>0&&n<=e){for(let a=e-1;a>=i;a--){const o=this.children[a];o&&(s.push(o),o.parent=null)}xg(this.children,i,e);const r=this.renderGroup||this.parentRenderGroup;r&&r.removeChildren(s);for(let a=0;a<s.length;++a){const o=s[a];o.parentRenderLayer?.detach(o),this.emit("childRemoved",o,this,a),s[a].emit("removed",this)}return s.length>0&&this._didViewChangeTick++,s}else if(n===0&&this.children.length===0)return s;throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},removeChildAt(i){const t=this.getChildAt(i);return this.removeChild(t)},getChildAt(i){if(i<0||i>=this.children.length)throw new Error(`getChildAt: Index (${i}) does not exist.`);return this.children[i]},setChildIndex(i,t){if(t<0||t>=this.children.length)throw new Error(`The index ${t} supplied is out of bounds ${this.children.length}`);this.getChildIndex(i),this.addChildAt(i,t)},getChildIndex(i){const t=this.children.indexOf(i);if(t===-1)throw new Error("The supplied Container must be a child of the caller");return t},addChildAt(i,t){this.allowChildren||ce(Le,"addChildAt: Only Containers will be allowed to add children in v8.0.0");const{children:e}=this;if(t<0||t>e.length)throw new Error(`${i}addChildAt: The index ${t} supplied is out of bounds ${e.length}`);if(i.parent){const s=i.parent.children.indexOf(i);if(i.parent===this&&s===t)return i;s!==-1&&i.parent.children.splice(s,1)}t===e.length?e.push(i):e.splice(t,0,i),i.parent=this,i.didChange=!0,i._updateFlags=15;const n=this.renderGroup||this.parentRenderGroup;return n&&n.addChild(i),this.sortableChildren&&(this.sortDirty=!0),this.emit("childAdded",i,this,t),i.emit("added",this),i},swapChildren(i,t){if(i===t)return;const e=this.getChildIndex(i),n=this.getChildIndex(t);this.children[e]=t,this.children[n]=i;const s=this.renderGroup||this.parentRenderGroup;s&&(s.structureDidChange=!0),this._didContainerChangeTick++},removeFromParent(){this.parent?.removeChild(this)},reparentChild(...i){return i.length===1?this.reparentChildAt(i[0],this.children.length):(i.forEach(t=>this.reparentChildAt(t,this.children.length)),i[0])},reparentChildAt(i,t){if(i.parent===this)return this.setChildIndex(i,t),i;const e=i.worldTransform.clone();i.removeFromParent(),this.addChildAt(i,t);const n=this.worldTransform.clone();return n.invert(),e.prepend(n),i.setFromMatrix(e),i},replaceChild(i,t){i.updateLocalTransform(),this.addChildAt(t,this.getChildIndex(i)),t.setFromMatrix(i.localTransform),t.updateLocalTransform(),this.removeChild(i)}},yg={collectRenderables(i,t,e){this.parentRenderLayer&&this.parentRenderLayer!==e||this.globalDisplayStatus<7||!this.includeInBuild||(this.sortableChildren&&this.sortChildren(),this.isSimple?this.collectRenderablesSimple(i,t,e):this.renderGroup?t.renderPipes.renderGroup.addRenderGroup(this.renderGroup,i):this.collectRenderablesWithEffects(i,t,e))},collectRenderablesSimple(i,t,e){const n=this.children,s=n.length;for(let r=0;r<s;r++)n[r].collectRenderables(i,t,e)},collectRenderablesWithEffects(i,t,e){const{renderPipes:n}=t;for(let s=0;s<this.effects.length;s++){const r=this.effects[s];n[r.pipe].push(r,this,i)}this.collectRenderablesSimple(i,t,e);for(let s=this.effects.length-1;s>=0;s--){const r=this.effects[s];n[r.pipe].pop(r,this,i)}}};class jh{constructor(){this.pipe="filter",this.priority=1}destroy(){for(let t=0;t<this.filters.length;t++)this.filters[t].destroy();this.filters=null,this.filterArea=null}}class Sg{constructor(){this._effectClasses=[],this._tests=[],this._initialized=!1}init(){this._initialized||(this._initialized=!0,this._effectClasses.forEach(t=>{this.add({test:t.test,maskClass:t})}))}add(t){this._tests.push(t)}getMaskEffect(t){this._initialized||this.init();for(let e=0;e<this._tests.length;e++){const n=this._tests[e];if(n.test(t))return pn.get(n.maskClass,t)}return t}returnMaskEffect(t){pn.return(t)}}const zl=new Sg;Be.handleByList(qt.MaskEffect,zl._effectClasses);const Mg={_maskEffect:null,_maskOptions:{inverse:!1},_filterEffect:null,effects:[],_markStructureAsChanged(){const i=this.renderGroup||this.parentRenderGroup;i&&(i.structureDidChange=!0)},addEffect(i){this.effects.indexOf(i)===-1&&(this.effects.push(i),this.effects.sort((e,n)=>e.priority-n.priority),this._markStructureAsChanged(),this._updateIsSimple())},removeEffect(i){const t=this.effects.indexOf(i);t!==-1&&(this.effects.splice(t,1),this._markStructureAsChanged(),this._updateIsSimple())},set mask(i){const t=this._maskEffect;t?.mask!==i&&(t&&(this.removeEffect(t),zl.returnMaskEffect(t),this._maskEffect=null),i!=null&&(this._maskEffect=zl.getMaskEffect(i),this.addEffect(this._maskEffect)))},get mask(){return this._maskEffect?.mask},setMask(i){this._maskOptions={...this._maskOptions,...i},i.mask&&(this.mask=i.mask),this._markStructureAsChanged()},set filters(i){!Array.isArray(i)&&i&&(i=[i]);const t=this._filterEffect||(this._filterEffect=new jh);i=i;const e=i?.length>0,n=t.filters?.length>0,s=e!==n;i=Array.isArray(i)?i.slice(0):i,t.filters=Object.freeze(i),s&&(e?this.addEffect(t):(this.removeEffect(t),t.filters=i??null))},get filters(){return this._filterEffect?.filters},set filterArea(i){this._filterEffect||(this._filterEffect=new jh),this._filterEffect.filterArea=i},get filterArea(){return this._filterEffect?.filterArea}},bg={label:null,get name(){return ce(Le,"Container.name property has been removed, use Container.label instead"),this.label},set name(i){ce(Le,"Container.name property has been removed, use Container.label instead"),this.label=i},getChildByName(i,t=!1){return this.getChildByLabel(i,t)},getChildByLabel(i,t=!1){const e=this.children;for(let n=0;n<e.length;n++){const s=e[n];if(s.label===i||i instanceof RegExp&&i.test(s.label))return s}if(t)for(let n=0;n<e.length;n++){const r=e[n].getChildByLabel(i,!0);if(r)return r}return null},getChildrenByLabel(i,t=!1,e=[]){const n=this.children;for(let s=0;s<n.length;s++){const r=n[s];(r.label===i||i instanceof RegExp&&i.test(r.label))&&e.push(r)}if(t)for(let s=0;s<n.length;s++)n[s].getChildrenByLabel(i,!0,e);return e}},an=pn.getPool(ne),gi=pn.getPool(In),Tg=new ne,Eg={getFastGlobalBounds(i,t){t||(t=new In),t.clear(),this._getGlobalBoundsRecursive(!!i,t,this.parentRenderLayer),t.isValid||t.set(0,0,0,0);const e=this.renderGroup||this.parentRenderGroup;return t.applyMatrix(e.worldTransform),t},_getGlobalBoundsRecursive(i,t,e){let n=t;if(i&&this.parentRenderLayer&&this.parentRenderLayer!==e||this.localDisplayStatus!==7||!this.measurable)return;const s=!!this.effects.length;if((this.renderGroup||s)&&(n=gi.get().clear()),this.boundsArea)t.addRect(this.boundsArea,this.worldTransform);else{if(this.renderPipeId){const a=this.bounds;n.addFrame(a.minX,a.minY,a.maxX,a.maxY,this.groupTransform)}const r=this.children;for(let a=0;a<r.length;a++)r[a]._getGlobalBoundsRecursive(i,n,e)}if(s){let r=!1;const a=this.renderGroup||this.parentRenderGroup;for(let o=0;o<this.effects.length;o++)this.effects[o].addBounds&&(r||(r=!0,n.applyMatrix(a.worldTransform)),this.effects[o].addBounds(n,!0));r&&n.applyMatrix(a.worldTransform.copyTo(Tg).invert()),t.addBounds(n),gi.return(n)}else this.renderGroup&&(t.addBounds(n,this.relativeGroupTransform),gi.return(n))}};function vf(i,t,e){e.clear();let n,s;return i.parent?t?n=i.parent.worldTransform:(s=an.get().identity(),n=th(i,s)):n=ne.IDENTITY,yf(i,e,n,t),s&&an.return(s),e.isValid||e.set(0,0,0,0),e}function yf(i,t,e,n){if(!i.visible||!i.measurable)return;let s;n?s=i.worldTransform:(i.updateLocalTransform(),s=an.get(),s.appendFrom(i.localTransform,e));const r=t,a=!!i.effects.length;if(a&&(t=gi.get().clear()),i.boundsArea)t.addRect(i.boundsArea,s);else{const o=i.bounds;o&&!o.isEmpty()&&(t.matrix=s,t.addBounds(o));for(let l=0;l<i.children.length;l++)yf(i.children[l],t,s,n)}if(a){for(let o=0;o<i.effects.length;o++)i.effects[o].addBounds?.(t);r.addBounds(t,ne.IDENTITY),gi.return(t)}n||an.return(s)}function th(i,t){const e=i.parent;return e&&(th(e,t),e.updateLocalTransform(),t.append(e.localTransform)),t}function Sf(i,t){if(i===16777215||!t)return t;if(t===16777215||!i)return i;const e=i>>16&255,n=i>>8&255,s=i&255,r=t>>16&255,a=t>>8&255,o=t&255,l=e*r/255|0,c=n*a/255|0,h=s*o/255|0;return(l<<16)+(c<<8)+h}const Kh=16777215;function Zh(i,t){return i===Kh?t:t===Kh?i:Sf(i,t)}function ka(i){return((i&255)<<16)+(i&65280)+(i>>16&255)}const wg={getGlobalAlpha(i){if(i)return this.renderGroup?this.renderGroup.worldAlpha:this.parentRenderGroup?this.parentRenderGroup.worldAlpha*this.alpha:this.alpha;let t=this.alpha,e=this.parent;for(;e;)t*=e.alpha,e=e.parent;return t},getGlobalTransform(i=new ne,t){if(t)return i.copyFrom(this.worldTransform);this.updateLocalTransform();const e=th(this,an.get().identity());return i.appendFrom(this.localTransform,e),an.return(e),i},getGlobalTint(i){if(i)return this.renderGroup?ka(this.renderGroup.worldColor):this.parentRenderGroup?ka(Zh(this.localColor,this.parentRenderGroup.worldColor)):this.tint;let t=this.localColor,e=this.parent;for(;e;)t=Zh(t,e.localColor),e=e.parent;return ka(t)}};function Mf(i,t,e){return t.clear(),e||(e=ne.IDENTITY),bf(i,t,e,i,!0),t.isValid||t.set(0,0,0,0),t}function bf(i,t,e,n,s){let r;if(s)r=an.get(),r=e.copyTo(r);else{if(!i.visible||!i.measurable)return;i.updateLocalTransform();const l=i.localTransform;r=an.get(),r.appendFrom(l,e)}const a=t,o=!!i.effects.length;if(o&&(t=gi.get().clear()),i.boundsArea)t.addRect(i.boundsArea,r);else{i.renderPipeId&&(t.matrix=r,t.addBounds(i.bounds));const l=i.children;for(let c=0;c<l.length;c++)bf(l[c],t,r,n,!1)}if(o){for(let l=0;l<i.effects.length;l++)i.effects[l].addLocalBounds?.(t,n);a.addBounds(t,ne.IDENTITY),gi.return(t)}an.return(r)}function Tf(i,t){const e=i.children;for(let n=0;n<e.length;n++){const s=e[n],r=s.uid,a=(s._didViewChangeTick&65535)<<16|s._didContainerChangeTick&65535,o=t.index;(t.data[o]!==r||t.data[o+1]!==a)&&(t.data[t.index]=r,t.data[t.index+1]=a,t.didChange=!0),t.index=o+2,s.children.length&&Tf(s,t)}return t.didChange}const Ag=new ne,Cg={_localBoundsCacheId:-1,_localBoundsCacheData:null,_setWidth(i,t){const e=Math.sign(this.scale.x)||1;t!==0?this.scale.x=i/t*e:this.scale.x=e},_setHeight(i,t){const e=Math.sign(this.scale.y)||1;t!==0?this.scale.y=i/t*e:this.scale.y=e},getLocalBounds(){this._localBoundsCacheData||(this._localBoundsCacheData={data:[],index:1,didChange:!1,localBounds:new In});const i=this._localBoundsCacheData;return i.index=1,i.didChange=!1,i.data[0]!==this._didViewChangeTick&&(i.didChange=!0,i.data[0]=this._didViewChangeTick),Tf(this,i),i.didChange&&Mf(this,i.localBounds,Ag),i.localBounds},getBounds(i,t){return vf(this,i,t||new In)}},Rg={_onRender:null,set onRender(i){const t=this.renderGroup||this.parentRenderGroup;if(!i){this._onRender&&t?.removeOnRender(this),this._onRender=null;return}this._onRender||t?.addOnRender(this),this._onRender=i},get onRender(){return this._onRender}},Pg={_zIndex:0,sortDirty:!1,sortableChildren:!1,get zIndex(){return this._zIndex},set zIndex(i){this._zIndex!==i&&(this._zIndex=i,this.depthOfChildModified())},depthOfChildModified(){this.parent&&(this.parent.sortableChildren=!0,this.parent.sortDirty=!0),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0)},sortChildren(){this.sortDirty&&(this.sortDirty=!1,this.children.sort(Ig))}};function Ig(i,t){return i._zIndex-t._zIndex}const Dg={getGlobalPosition(i=new tn,t=!1){return this.parent?this.parent.toGlobal(this._position,i,t):(i.x=this._position.x,i.y=this._position.y),i},toGlobal(i,t,e=!1){const n=this.getGlobalTransform(an.get(),e);return t=n.apply(i,t),an.return(n),t},toLocal(i,t,e,n){t&&(i=t.toGlobal(i,e,n));const s=this.getGlobalTransform(an.get(),n);return e=s.applyInverse(i,e),an.return(s),e}};class eh{constructor(){this.uid=Ue("instructionSet"),this.instructions=[],this.instructionSize=0,this.renderables=[],this.gcTick=0}reset(){this.instructionSize=0}destroy(){this.instructions.length=0,this.renderables.length=0,this.renderPipes=null,this.gcTick=0}add(t){this.instructions[this.instructionSize++]=t}log(){this.instructions.length=this.instructionSize,console.table(this.instructions,["type","action"])}}let Lg=0;class Ug{constructor(t){this._poolKeyHash=Object.create(null),this._texturePool={},this.textureOptions=t||{},this.enableFullScreen=!1,this.textureStyle=new qs(this.textureOptions)}createTexture(t,e,n){const s=new Vn({...this.textureOptions,width:t,height:e,resolution:1,antialias:n,autoGarbageCollect:!1});return new ye({source:s,label:`texturePool_${Lg++}`})}getOptimalTexture(t,e,n=1,s){let r=Math.ceil(t*n-1e-6),a=Math.ceil(e*n-1e-6);r=$s(r),a=$s(a);const o=(r<<17)+(a<<1)+(s?1:0);this._texturePool[o]||(this._texturePool[o]=[]);let l=this._texturePool[o].pop();return l||(l=this.createTexture(r,a,s)),l.source._resolution=n,l.source.width=r/n,l.source.height=a/n,l.source.pixelWidth=r,l.source.pixelHeight=a,l.frame.x=0,l.frame.y=0,l.frame.width=t,l.frame.height=e,l.updateUvs(),this._poolKeyHash[l.uid]=o,l}getSameSizeTexture(t,e=!1){const n=t.source;return this.getOptimalTexture(t.width,t.height,n._resolution,e)}returnTexture(t,e=!1){const n=this._poolKeyHash[t.uid];e&&(t.source.style=this.textureStyle),this._texturePool[n].push(t)}clear(t){if(t=t!==!1,t)for(const e in this._texturePool){const n=this._texturePool[e];if(n)for(let s=0;s<n.length;s++)n[s].destroy(!0)}this._texturePool={}}}const no=new Ug;Vr.register(no);class Fg{constructor(){this.renderPipeId="renderGroup",this.root=null,this.canBundle=!1,this.renderGroupParent=null,this.renderGroupChildren=[],this.worldTransform=new ne,this.worldColorAlpha=4294967295,this.worldColor=16777215,this.worldAlpha=1,this.childrenToUpdate=Object.create(null),this.updateTick=0,this.gcTick=0,this.childrenRenderablesToUpdate={list:[],index:0},this.structureDidChange=!0,this.instructionSet=new eh,this._onRenderContainers=[],this.textureNeedsUpdate=!0,this.isCachedAsTexture=!1,this._matrixDirty=7}init(t){this.root=t,t._onRender&&this.addOnRender(t),t.didChange=!0;const e=t.children;for(let n=0;n<e.length;n++){const s=e[n];s._updateFlags=15,this.addChild(s)}}enableCacheAsTexture(t={}){this.textureOptions=t,this.isCachedAsTexture=!0,this.textureNeedsUpdate=!0}disableCacheAsTexture(){this.isCachedAsTexture=!1,this.texture&&(no.returnTexture(this.texture,!0),this.texture=null)}updateCacheTexture(){this.textureNeedsUpdate=!0;const t=this._parentCacheAsTextureRenderGroup;t&&!t.textureNeedsUpdate&&t.updateCacheTexture()}reset(){this.renderGroupChildren.length=0;for(const t in this.childrenToUpdate){const e=this.childrenToUpdate[t];e.list.fill(null),e.index=0}this.childrenRenderablesToUpdate.index=0,this.childrenRenderablesToUpdate.list.fill(null),this.root=null,this.updateTick=0,this.structureDidChange=!0,this._onRenderContainers.length=0,this.renderGroupParent=null,this.disableCacheAsTexture()}get localTransform(){return this.root.localTransform}addRenderGroupChild(t){t.renderGroupParent&&t.renderGroupParent._removeRenderGroupChild(t),t.renderGroupParent=this,this.renderGroupChildren.push(t)}_removeRenderGroupChild(t){const e=this.renderGroupChildren.indexOf(t);e>-1&&this.renderGroupChildren.splice(e,1),t.renderGroupParent=null}addChild(t){if(this.structureDidChange=!0,t.parentRenderGroup=this,t.updateTick=-1,t.parent===this.root?t.relativeRenderGroupDepth=1:t.relativeRenderGroupDepth=t.parent.relativeRenderGroupDepth+1,t.didChange=!0,this.onChildUpdate(t),t.renderGroup){this.addRenderGroupChild(t.renderGroup);return}t._onRender&&this.addOnRender(t);const e=t.children;for(let n=0;n<e.length;n++)this.addChild(e[n])}removeChild(t){if(this.structureDidChange=!0,t._onRender&&(t.renderGroup||this.removeOnRender(t)),t.parentRenderGroup=null,t.renderGroup){this._removeRenderGroupChild(t.renderGroup);return}const e=t.children;for(let n=0;n<e.length;n++)this.removeChild(e[n])}removeChildren(t){for(let e=0;e<t.length;e++)this.removeChild(t[e])}onChildUpdate(t){let e=this.childrenToUpdate[t.relativeRenderGroupDepth];e||(e=this.childrenToUpdate[t.relativeRenderGroupDepth]={index:0,list:[]}),e.list[e.index++]=t}updateRenderable(t){t.globalDisplayStatus<7||(this.instructionSet.renderPipes[t.renderPipeId].updateRenderable(t),t.didViewUpdate=!1)}onChildViewUpdate(t){this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++]=t}get isRenderable(){return this.root.localDisplayStatus===7&&this.worldAlpha>0}addOnRender(t){this._onRenderContainers.push(t)}removeOnRender(t){this._onRenderContainers.splice(this._onRenderContainers.indexOf(t),1)}runOnRender(t){for(let e=0;e<this._onRenderContainers.length;e++)this._onRenderContainers[e]._onRender(t)}destroy(){this.disableCacheAsTexture(),this.renderGroupParent=null,this.root=null,this.childrenRenderablesToUpdate=null,this.childrenToUpdate=null,this.renderGroupChildren=null,this._onRenderContainers=null,this.instructionSet=null}getChildren(t=[]){const e=this.root.children;for(let n=0;n<e.length;n++)this._getChildren(e[n],t);return t}_getChildren(t,e=[]){if(e.push(t),t.renderGroup)return e;const n=t.children;for(let s=0;s<n.length;s++)this._getChildren(n[s],e);return e}invalidateMatrices(){this._matrixDirty=7}get inverseWorldTransform(){return(this._matrixDirty&1)===0?this._inverseWorldTransform:(this._matrixDirty&=-2,this._inverseWorldTransform||(this._inverseWorldTransform=new ne),this._inverseWorldTransform.copyFrom(this.worldTransform).invert())}get textureOffsetInverseTransform(){return(this._matrixDirty&2)===0?this._textureOffsetInverseTransform:(this._matrixDirty&=-3,this._textureOffsetInverseTransform||(this._textureOffsetInverseTransform=new ne),this._textureOffsetInverseTransform.copyFrom(this.inverseWorldTransform).translate(-this._textureBounds.x,-this._textureBounds.y))}get inverseParentTextureTransform(){if((this._matrixDirty&4)===0)return this._inverseParentTextureTransform;this._matrixDirty&=-5;const t=this._parentCacheAsTextureRenderGroup;return t?(this._inverseParentTextureTransform||(this._inverseParentTextureTransform=new ne),this._inverseParentTextureTransform.copyFrom(this.worldTransform).prepend(t.inverseWorldTransform).translate(-t._textureBounds.x,-t._textureBounds.y)):this.worldTransform}get cacheToLocalTransform(){return this.isCachedAsTexture?this.textureOffsetInverseTransform:this._parentCacheAsTextureRenderGroup?this._parentCacheAsTextureRenderGroup.textureOffsetInverseTransform:null}}function Ng(i,t,e={}){for(const n in t)!e[n]&&t[n]!==void 0&&(i[n]=t[n])}const Po=new Ke(null),ia=new Ke(null),Io=new Ke(null,1,1),sa=new Ke(null),Jh=1,Og=2,Do=4;class rn extends ii{constructor(t={}){super(),this.uid=Ue("renderable"),this._updateFlags=15,this.renderGroup=null,this.parentRenderGroup=null,this.parentRenderGroupIndex=0,this.didChange=!1,this.didViewUpdate=!1,this.relativeRenderGroupDepth=0,this.children=[],this.parent=null,this.includeInBuild=!0,this.measurable=!0,this.isSimple=!0,this.parentRenderLayer=null,this.updateTick=-1,this.localTransform=new ne,this.relativeGroupTransform=new ne,this.groupTransform=this.relativeGroupTransform,this.destroyed=!1,this._position=new Ke(this,0,0),this._scale=Io,this._pivot=ia,this._origin=sa,this._skew=Po,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._rotation=0,this.localColor=16777215,this.localAlpha=1,this.groupAlpha=1,this.groupColor=16777215,this.groupColorAlpha=4294967295,this.localBlendMode="inherit",this.groupBlendMode="normal",this.localDisplayStatus=7,this.globalDisplayStatus=7,this._didContainerChangeTick=0,this._didViewChangeTick=0,this._didLocalTransformChangeId=-1,this.effects=[],Ng(this,t,{children:!0,parent:!0,effects:!0}),t.children?.forEach(e=>this.addChild(e)),t.parent?.addChild(this)}static mixin(t){ce("8.8.0","Container.mixin is deprecated, please use extensions.mixin instead."),Be.mixin(rn,t)}set _didChangeId(t){this._didViewChangeTick=t>>12&4095,this._didContainerChangeTick=t&4095}get _didChangeId(){return this._didContainerChangeTick&4095|(this._didViewChangeTick&4095)<<12}addChild(...t){if(this.allowChildren||ce(Le,"addChild: Only Containers will be allowed to add children in v8.0.0"),t.length>1){for(let s=0;s<t.length;s++)this.addChild(t[s]);return t[0]}const e=t[0],n=this.renderGroup||this.parentRenderGroup;return e.parent===this?(this.children.splice(this.children.indexOf(e),1),this.children.push(e),n&&(n.structureDidChange=!0),e):(e.parent&&e.parent.removeChild(e),this.children.push(e),this.sortableChildren&&(this.sortDirty=!0),e.parent=this,e.didChange=!0,e._updateFlags=15,n&&n.addChild(e),this.emit("childAdded",e,this,this.children.length-1),e.emit("added",this),this._didViewChangeTick++,e._zIndex!==0&&e.depthOfChildModified(),e)}removeChild(...t){if(t.length>1){for(let s=0;s<t.length;s++)this.removeChild(t[s]);return t[0]}const e=t[0],n=this.children.indexOf(e);return n>-1&&(this._didViewChangeTick++,this.children.splice(n,1),this.renderGroup?this.renderGroup.removeChild(e):this.parentRenderGroup&&this.parentRenderGroup.removeChild(e),e.parentRenderLayer&&e.parentRenderLayer.detach(e),e.parent=null,this.emit("childRemoved",e,this,n),e.emit("removed",this)),e}_onUpdate(t){t&&t===this._skew&&this._updateSkew(),this._didContainerChangeTick++,!this.didChange&&(this.didChange=!0,this.parentRenderGroup&&this.parentRenderGroup.onChildUpdate(this))}set isRenderGroup(t){!!this.renderGroup!==t&&(t?this.enableRenderGroup():this.disableRenderGroup())}get isRenderGroup(){return!!this.renderGroup}enableRenderGroup(){if(this.renderGroup)return;const t=this.parentRenderGroup;t?.removeChild(this),this.renderGroup=pn.get(Fg,this),this.groupTransform=ne.IDENTITY,t?.addChild(this),this._updateIsSimple()}disableRenderGroup(){if(!this.renderGroup)return;const t=this.parentRenderGroup;t?.removeChild(this),pn.return(this.renderGroup),this.renderGroup=null,this.groupTransform=this.relativeGroupTransform,t?.addChild(this),this._updateIsSimple()}_updateIsSimple(){this.isSimple=!this.renderGroup&&this.effects.length===0}get worldTransform(){return this._worldTransform||(this._worldTransform=new ne),this.renderGroup?this._worldTransform.copyFrom(this.renderGroup.worldTransform):this.parentRenderGroup&&this._worldTransform.appendFrom(this.relativeGroupTransform,this.parentRenderGroup.worldTransform),this._worldTransform}get x(){return this._position.x}set x(t){this._position.x=t}get y(){return this._position.y}set y(t){this._position.y=t}get position(){return this._position}set position(t){this._position.copyFrom(t)}get rotation(){return this._rotation}set rotation(t){this._rotation!==t&&(this._rotation=t,this._onUpdate(this._skew))}get angle(){return this.rotation*Zm}set angle(t){this.rotation=t*Jm}get pivot(){return this._pivot===ia&&(this._pivot=new Ke(this,0,0)),this._pivot}set pivot(t){this._pivot===ia&&(this._pivot=new Ke(this,0,0),this._origin!==sa&&on("Setting both a pivot and origin on a Container is not recommended. This can lead to unexpected behavior if not handled carefully.")),typeof t=="number"?this._pivot.set(t):this._pivot.copyFrom(t)}get skew(){return this._skew===Po&&(this._skew=new Ke(this,0,0)),this._skew}set skew(t){this._skew===Po&&(this._skew=new Ke(this,0,0)),this._skew.copyFrom(t)}get scale(){return this._scale===Io&&(this._scale=new Ke(this,1,1)),this._scale}set scale(t){this._scale===Io&&(this._scale=new Ke(this,0,0)),typeof t=="string"&&(t=parseFloat(t)),typeof t=="number"?this._scale.set(t):this._scale.copyFrom(t)}get origin(){return this._origin===sa&&(this._origin=new Ke(this,0,0)),this._origin}set origin(t){this._origin===sa&&(this._origin=new Ke(this,0,0),this._pivot!==ia&&on("Setting both a pivot and origin on a Container is not recommended. This can lead to unexpected behavior if not handled carefully.")),typeof t=="number"?this._origin.set(t):this._origin.copyFrom(t)}get width(){return Math.abs(this.scale.x*this.getLocalBounds().width)}set width(t){const e=this.getLocalBounds().width;this._setWidth(t,e)}get height(){return Math.abs(this.scale.y*this.getLocalBounds().height)}set height(t){const e=this.getLocalBounds().height;this._setHeight(t,e)}getSize(t){t||(t={});const e=this.getLocalBounds();return t.width=Math.abs(this.scale.x*e.width),t.height=Math.abs(this.scale.y*e.height),t}setSize(t,e){const n=this.getLocalBounds();typeof t=="object"?(e=t.height??t.width,t=t.width):e??(e=t),t!==void 0&&this._setWidth(t,n.width),e!==void 0&&this._setHeight(e,n.height)}_updateSkew(){const t=this._rotation,e=this._skew;this._cx=Math.cos(t+e._y),this._sx=Math.sin(t+e._y),this._cy=-Math.sin(t-e._x),this._sy=Math.cos(t-e._x)}updateTransform(t){return this.position.set(typeof t.x=="number"?t.x:this.position.x,typeof t.y=="number"?t.y:this.position.y),this.scale.set(typeof t.scaleX=="number"?t.scaleX||1:this.scale.x,typeof t.scaleY=="number"?t.scaleY||1:this.scale.y),this.rotation=typeof t.rotation=="number"?t.rotation:this.rotation,this.skew.set(typeof t.skewX=="number"?t.skewX:this.skew.x,typeof t.skewY=="number"?t.skewY:this.skew.y),this.pivot.set(typeof t.pivotX=="number"?t.pivotX:this.pivot.x,typeof t.pivotY=="number"?t.pivotY:this.pivot.y),this.origin.set(typeof t.originX=="number"?t.originX:this.origin.x,typeof t.originY=="number"?t.originY:this.origin.y),this}setFromMatrix(t){t.decompose(this)}updateLocalTransform(){const t=this._didContainerChangeTick;if(this._didLocalTransformChangeId===t)return;this._didLocalTransformChangeId=t;const e=this.localTransform,n=this._scale,s=this._pivot,r=this._origin,a=this._position,o=n._x,l=n._y,c=s._x,h=s._y,u=-r._x,f=-r._y;e.a=this._cx*o,e.b=this._sx*o,e.c=this._cy*l,e.d=this._sy*l,e.tx=a._x-(c*e.a+h*e.c)+(u*e.a+f*e.c)-u,e.ty=a._y-(c*e.b+h*e.d)+(u*e.b+f*e.d)-f}set alpha(t){t!==this.localAlpha&&(this.localAlpha=t,this._updateFlags|=Jh,this._onUpdate())}get alpha(){return this.localAlpha}set tint(t){const n=He.shared.setValue(t??16777215).toBgrNumber();n!==this.localColor&&(this.localColor=n,this._updateFlags|=Jh,this._onUpdate())}get tint(){return ka(this.localColor)}set blendMode(t){this.localBlendMode!==t&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=Og,this.localBlendMode=t,this._onUpdate())}get blendMode(){return this.localBlendMode}get visible(){return!!(this.localDisplayStatus&2)}set visible(t){const e=t?2:0;(this.localDisplayStatus&2)!==e&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=Do,this.localDisplayStatus^=2,this._onUpdate())}get culled(){return!(this.localDisplayStatus&4)}set culled(t){const e=t?0:4;(this.localDisplayStatus&4)!==e&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=Do,this.localDisplayStatus^=4,this._onUpdate())}get renderable(){return!!(this.localDisplayStatus&1)}set renderable(t){const e=t?1:0;(this.localDisplayStatus&1)!==e&&(this._updateFlags|=Do,this.localDisplayStatus^=1,this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._onUpdate())}get isRenderable(){return this.localDisplayStatus===7&&this.groupAlpha>0}destroy(t=!1){if(this.destroyed)return;this.destroyed=!0;let e;if(this.children.length&&(e=this.removeChildren(0,this.children.length)),this.removeFromParent(),this.parent=null,this._maskEffect=null,this._filterEffect=null,this.effects=null,this._position=null,this._scale=null,this._pivot=null,this._origin=null,this._skew=null,this.emit("destroyed",this),this.removeAllListeners(),(typeof t=="boolean"?t:t?.children)&&e)for(let s=0;s<e.length;++s)e[s].destroy(t);this.renderGroup?.destroy(),this.renderGroup=null}}Be.mixin(rn,vg,Eg,Dg,Rg,Cg,Mg,bg,Pg,pg,_g,wg,yg);class nh extends rn{constructor(t){super(t),this.canBundle=!0,this.allowChildren=!1,this._roundPixels=0,this._lastUsed=-1,this._gpuData=Object.create(null),this.autoGarbageCollect=!0,this._gcLastUsed=-1,this._bounds=new In(0,1,0,0),this._boundsDirty=!0,this.autoGarbageCollect=t.autoGarbageCollect??!0}get bounds(){return this._boundsDirty?(this.updateBounds(),this._boundsDirty=!1,this._bounds):this._bounds}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}containsPoint(t){const e=this.bounds,{x:n,y:s}=t;return n>=e.minX&&n<=e.maxX&&s>=e.minY&&s<=e.maxY}onViewUpdate(){if(this._didViewChangeTick++,this._boundsDirty=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}unload(){this.emit("unload",this);for(const t in this._gpuData)this._gpuData[t]?.destroy();this._gpuData=Object.create(null),this.onViewUpdate()}destroy(t){this.unload(),super.destroy(t),this._bounds=null}collectRenderablesSimple(t,e,n){const{renderPipes:s}=e;s.blendMode.pushBlendMode(this,this.groupBlendMode,t);const a=s[this.renderPipeId];a?.addRenderable&&a.addRenderable(this,t),this.didViewUpdate=!1;const o=this.children,l=o.length;for(let c=0;c<l;c++)o[c].collectRenderables(t,e,n);s.blendMode.popBlendMode(t)}}class Dr extends nh{constructor(t=ye.EMPTY){t instanceof ye&&(t={texture:t});const{texture:e=ye.EMPTY,anchor:n,roundPixels:s,width:r,height:a,...o}=t;super({label:"Sprite",...o}),this.renderPipeId="sprite",this.batched=!0,this._visualBounds={minX:0,maxX:1,minY:0,maxY:0},this._anchor=new Ke({_onUpdate:()=>{this.onViewUpdate()}}),n?this.anchor=n:e.defaultAnchor&&(this.anchor=e.defaultAnchor),this.texture=e,this.allowChildren=!1,this.roundPixels=s??!1,r!==void 0&&(this.width=r),a!==void 0&&(this.height=a)}static from(t,e=!1){return t instanceof ye?new Dr(t):new Dr(ye.from(t,e))}set texture(t){t||(t=ye.EMPTY);const e=this._texture;e!==t&&(e&&e.dynamic&&e.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this._texture=t,this._width&&this._setWidth(this._width,this._texture.orig.width),this._height&&this._setHeight(this._height,this._texture.orig.height),this.onViewUpdate())}get texture(){return this._texture}get visualBounds(){return mf(this._visualBounds,this._anchor,this._texture),this._visualBounds}get sourceBounds(){return ce("8.6.1","Sprite.sourceBounds is deprecated, use visualBounds instead."),this.visualBounds}updateBounds(){const t=this._anchor,e=this._texture,n=this._bounds,{width:s,height:r}=e.orig;n.minX=-t._x*s,n.maxX=n.minX+s,n.minY=-t._y*r,n.maxY=n.minY+r}destroy(t=!1){if(super.destroy(t),typeof t=="boolean"?t:t?.texture){const n=typeof t=="boolean"?t:t?.textureSource;this._texture.destroy(n)}this._texture=null,this._visualBounds=null,this._bounds=null,this._anchor=null}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get width(){return Math.abs(this.scale.x)*this._texture.orig.width}set width(t){this._setWidth(t,this._texture.orig.width),this._width=t}get height(){return Math.abs(this.scale.y)*this._texture.orig.height}set height(t){this._setHeight(t,this._texture.orig.height),this._height=t}getSize(t){return t||(t={}),t.width=Math.abs(this.scale.x)*this._texture.orig.width,t.height=Math.abs(this.scale.y)*this._texture.orig.height,t}setSize(t,e){typeof t=="object"?(e=t.height??t.width,t=t.width):e??(e=t),t!==void 0&&this._setWidth(t,this._texture.orig.width),e!==void 0&&this._setHeight(e,this._texture.orig.height)}}const Bg=new In;function Ef(i,t,e){const n=Bg;i.measurable=!0,vf(i,e,n),t.addBoundsMask(n),i.measurable=!1}function wf(i,t,e){const n=gi.get();i.measurable=!0;const s=an.get().identity(),r=Af(i,e,s);Mf(i,n,r),i.measurable=!1,t.addBoundsMask(n),an.return(s),gi.return(n)}function Af(i,t,e){return i?(i!==t&&(Af(i.parent,t,e),i.updateLocalTransform(),e.append(i.localTransform)),e):(on("Mask bounds, renderable is not inside the root container"),e)}class Cf{constructor(t){this.priority=0,this.inverse=!1,this.pipe="alphaMask",t?.mask&&this.init(t.mask)}init(t){this.mask=t,this.renderMaskToTexture=!(t instanceof Dr),this.mask.renderable=this.renderMaskToTexture,this.mask.includeInBuild=!this.renderMaskToTexture,this.mask.measurable=!1}reset(){this.mask!==null&&(this.mask.measurable=!0,this.mask=null)}addBounds(t,e){this.inverse||Ef(this.mask,t,e)}addLocalBounds(t,e){wf(this.mask,t,e)}containsPoint(t,e){const n=this.mask;return e(n,t)}destroy(){this.reset()}static test(t){return t instanceof Dr}}Cf.extension=qt.MaskEffect;class Rf{constructor(t){this.priority=0,this.pipe="colorMask",t?.mask&&this.init(t.mask)}init(t){this.mask=t}destroy(){}static test(t){return typeof t=="number"}}Rf.extension=qt.MaskEffect;class Pf{constructor(t){this.priority=0,this.pipe="stencilMask",t?.mask&&this.init(t.mask)}init(t){this.mask=t,this.mask.includeInBuild=!1,this.mask.measurable=!1}reset(){this.mask!==null&&(this.mask.measurable=!0,this.mask.includeInBuild=!0,this.mask=null)}addBounds(t,e){Ef(this.mask,t,e)}addLocalBounds(t,e){wf(this.mask,t,e)}containsPoint(t,e){const n=this.mask;return e(n,t)}destroy(){this.reset()}static test(t){return t instanceof rn}}Pf.extension=qt.MaskEffect;const kg={createCanvas:(i,t)=>{const e=document.createElement("canvas");return e.width=i,e.height=t,e},createImage:()=>new Image,getCanvasRenderingContext2D:()=>CanvasRenderingContext2D,getWebGLRenderingContext:()=>WebGLRenderingContext,getNavigator:()=>navigator,getBaseUrl:()=>document.baseURI??window.location.href,getFontFaceSet:()=>document.fonts,fetch:(i,t)=>fetch(i,t),parseXML:i=>new DOMParser().parseFromString(i,"text/xml")};let Qh=kg;const xn={get(){return Qh},set(i){Qh=i}};class If extends Vn{constructor(t){t.resource||(t.resource=xn.get().createCanvas()),t.width||(t.width=t.resource.width,t.autoDensity||(t.width/=t.resolution)),t.height||(t.height=t.resource.height,t.autoDensity||(t.height/=t.resolution)),super(t),this.uploadMethodId="image",this.autoDensity=t.autoDensity,this.resizeCanvas(),this.transparent=!!t.transparent}resizeCanvas(){this.autoDensity&&"style"in this.resource&&(this.resource.style.width=`${this.width}px`,this.resource.style.height=`${this.height}px`),(this.resource.width!==this.pixelWidth||this.resource.height!==this.pixelHeight)&&(this.resource.width=this.pixelWidth,this.resource.height=this.pixelHeight)}resize(t=this.width,e=this.height,n=this._resolution){const s=super.resize(t,e,n);return s&&this.resizeCanvas(),s}static test(t){return globalThis.HTMLCanvasElement&&t instanceof HTMLCanvasElement||globalThis.OffscreenCanvas&&t instanceof OffscreenCanvas}get context2D(){return this._context2D||(this._context2D=this.resource.getContext("2d"))}}If.extension=qt.TextureSource;class $a extends Vn{constructor(t){super(t),this.uploadMethodId="image",this.autoGarbageCollect=!0}static test(t){return globalThis.HTMLImageElement&&t instanceof HTMLImageElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||globalThis.VideoFrame&&t instanceof VideoFrame}}$a.extension=qt.TextureSource;var qa=(i=>(i[i.INTERACTION=50]="INTERACTION",i[i.HIGH=25]="HIGH",i[i.NORMAL=0]="NORMAL",i[i.LOW=-25]="LOW",i[i.UTILITY=-50]="UTILITY",i))(qa||{});class Lo{constructor(t,e=null,n=0,s=!1){this.next=null,this.previous=null,this._destroyed=!1,this._fn=t,this._context=e,this.priority=n,this._once=s}match(t,e=null){return this._fn===t&&this._context===e}emit(t){this._fn&&(this._context?this._fn.call(this._context,t):this._fn(t));const e=this.next;return this._once&&this.destroy(!0),this._destroyed&&(this.next=null),e}connect(t){this.previous=t,t.next&&(t.next.previous=this),this.next=t.next,t.next=this}destroy(t=!1){this._destroyed=!0,this._fn=null,this._context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);const e=this.next;return this.next=t?null:e,this.previous=null,e}}const Df=class _n{constructor(){this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new Lo(null,null,1/0),this.deltaMS=1/_n.targetFPMS,this.elapsedMS=1/_n.targetFPMS,this._tick=t=>{this._requestId=null,this.started&&(this.update(t),this.started&&this._requestId===null&&this._head.next&&(this._requestId=requestAnimationFrame(this._tick)))}}_requestIfNeeded(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))}_cancelIfNeeded(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)}_startIfPossible(){this.started?this._requestIfNeeded():this.autoStart&&this.start()}add(t,e,n=qa.NORMAL){return this._addListener(new Lo(t,e,n))}addOnce(t,e,n=qa.NORMAL){return this._addListener(new Lo(t,e,n,!0))}_addListener(t){let e=this._head.next,n=this._head;if(!e)t.connect(n);else{for(;e;){if(t.priority>e.priority){t.connect(n);break}n=e,e=e.next}t.previous||t.connect(n)}return this._startIfPossible(),this}remove(t,e){let n=this._head.next;for(;n;)n.match(t,e)?n=n.destroy():n=n.next;return this._head.next||this._cancelIfNeeded(),this}get count(){if(!this._head)return 0;let t=0,e=this._head;for(;e=e.next;)t++;return t}start(){this.started||(this.started=!0,this._requestIfNeeded())}stop(){this.started&&(this.started=!1,this._cancelIfNeeded())}destroy(){if(!this._protected){this.stop();let t=this._head.next;for(;t;)t=t.destroy(!0);this._head.destroy(),this._head=null}}update(t=performance.now()){let e;if(t>this.lastTime){if(e=this.elapsedMS=t-this.lastTime,e>this._maxElapsedMS&&(e=this._maxElapsedMS),e*=this.speed,this._minElapsedMS){const r=t-this._lastFrame|0;if(r<this._minElapsedMS)return;this._lastFrame=t-r%this._minElapsedMS}this.deltaMS=e,this.deltaTime=this.deltaMS*_n.targetFPMS;const n=this._head;let s=n.next;for(;s;)s=s.emit(this);n.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=t}get FPS(){return 1e3/this.elapsedMS}get minFPS(){return 1e3/this._maxElapsedMS}set minFPS(t){const e=Math.min(this.maxFPS,t),n=Math.min(Math.max(0,e)/1e3,_n.targetFPMS);this._maxElapsedMS=1/n}get maxFPS(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0}set maxFPS(t){if(t===0)this._minElapsedMS=0;else{const e=Math.max(this.minFPS,t);this._minElapsedMS=1/(e/1e3)}}static get shared(){if(!_n._shared){const t=_n._shared=new _n;t.autoStart=!0,t._protected=!0}return _n._shared}static get system(){if(!_n._system){const t=_n._system=new _n;t.autoStart=!0,t._protected=!0}return _n._system}};Df.targetFPMS=.06;let Hs=Df,Uo;async function Gg(){return Uo??(Uo=(async()=>{const t=xn.get().createCanvas(1,1).getContext("webgl");if(!t)return"premultiply-alpha-on-upload";const e=await new Promise(a=>{const o=document.createElement("video");o.onloadeddata=()=>a(o),o.onerror=()=>a(null),o.autoplay=!1,o.crossOrigin="anonymous",o.preload="auto",o.src="data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=",o.load()});if(!e)return"premultiply-alpha-on-upload";const n=t.createTexture();t.bindTexture(t.TEXTURE_2D,n);const s=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,s),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e);const r=new Uint8Array(4);return t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,r),t.deleteFramebuffer(s),t.deleteTexture(n),t.getExtension("WEBGL_lose_context")?.loseContext(),r[0]<=r[3]?"premultiplied-alpha":"premultiply-alpha-on-upload"})()),Uo}const io=class Lf extends Vn{constructor(t){super(t),this.isReady=!1,this.uploadMethodId="video",t={...Lf.defaultOptions,...t},this._autoUpdate=!0,this._isConnectedToTicker=!1,this._updateFPS=t.updateFPS||0,this._msToNextUpdate=0,this.autoPlay=t.autoPlay!==!1,this.alphaMode=t.alphaMode??"premultiply-alpha-on-upload",this._videoFrameRequestCallback=this._videoFrameRequestCallback.bind(this),this._videoFrameRequestCallbackHandle=null,this._load=null,this._resolve=null,this._reject=null,this._onCanPlay=this._onCanPlay.bind(this),this._onCanPlayThrough=this._onCanPlayThrough.bind(this),this._onError=this._onError.bind(this),this._onPlayStart=this._onPlayStart.bind(this),this._onPlayStop=this._onPlayStop.bind(this),this._onSeeked=this._onSeeked.bind(this),t.autoLoad!==!1&&this.load()}updateFrame(){if(!this.destroyed){if(this._updateFPS){const t=Hs.shared.elapsedMS*this.resource.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-t)}(!this._updateFPS||this._msToNextUpdate<=0)&&(this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0),this.isValid&&this.update()}}_videoFrameRequestCallback(){this.updateFrame(),this.destroyed?this._videoFrameRequestCallbackHandle=null:this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback)}get isValid(){return!!this.resource.videoWidth&&!!this.resource.videoHeight}async load(){if(this._load)return this._load;const t=this.resource,e=this.options;return(t.readyState===t.HAVE_ENOUGH_DATA||t.readyState===t.HAVE_FUTURE_DATA)&&t.width&&t.height&&(t.complete=!0),t.addEventListener("play",this._onPlayStart),t.addEventListener("pause",this._onPlayStop),t.addEventListener("seeked",this._onSeeked),this._isSourceReady()?this._mediaReady():(e.preload||t.addEventListener("canplay",this._onCanPlay),t.addEventListener("canplaythrough",this._onCanPlayThrough),t.addEventListener("error",this._onError,!0)),this.alphaMode=await Gg(),this._load=new Promise((n,s)=>{this.isValid?n(this):(this._resolve=n,this._reject=s,e.preloadTimeoutMs!==void 0&&(this._preloadTimeout=setTimeout(()=>{this._onError(new ErrorEvent(`Preload exceeded timeout of ${e.preloadTimeoutMs}ms`))})),t.load())}),this._load}_onError(t){this.resource.removeEventListener("error",this._onError,!0),this.emit("error",t),this._reject&&(this._reject(t),this._reject=null,this._resolve=null)}_isSourcePlaying(){const t=this.resource;return!t.paused&&!t.ended}_isSourceReady(){return this.resource.readyState>2}_onPlayStart(){this.isValid||this._mediaReady(),this._configureAutoUpdate()}_onPlayStop(){this._configureAutoUpdate()}_onSeeked(){this._autoUpdate&&!this._isSourcePlaying()&&(this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0)}_onCanPlay(){this.resource.removeEventListener("canplay",this._onCanPlay),this._mediaReady()}_onCanPlayThrough(){this.resource.removeEventListener("canplaythrough",this._onCanPlay),this._preloadTimeout&&(clearTimeout(this._preloadTimeout),this._preloadTimeout=void 0),this._mediaReady()}_mediaReady(){const t=this.resource;this.isValid&&(this.isReady=!0,this.resize(t.videoWidth,t.videoHeight)),this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0,this._resolve&&(this._resolve(this),this._resolve=null,this._reject=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&this.resource.play()}destroy(){this._configureAutoUpdate();const t=this.resource;t&&(t.removeEventListener("play",this._onPlayStart),t.removeEventListener("pause",this._onPlayStop),t.removeEventListener("seeked",this._onSeeked),t.removeEventListener("canplay",this._onCanPlay),t.removeEventListener("canplaythrough",this._onCanPlayThrough),t.removeEventListener("error",this._onError,!0),t.pause(),t.src="",t.load()),super.destroy()}get autoUpdate(){return this._autoUpdate}set autoUpdate(t){t!==this._autoUpdate&&(this._autoUpdate=t,this._configureAutoUpdate())}get updateFPS(){return this._updateFPS}set updateFPS(t){t!==this._updateFPS&&(this._updateFPS=t,this._configureAutoUpdate())}_configureAutoUpdate(){this._autoUpdate&&this._isSourcePlaying()?!this._updateFPS&&this.resource.requestVideoFrameCallback?(this._isConnectedToTicker&&(Hs.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0),this._videoFrameRequestCallbackHandle===null&&(this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback))):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker||(Hs.shared.add(this.updateFrame,this),this._isConnectedToTicker=!0,this._msToNextUpdate=0)):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker&&(Hs.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0))}static test(t){return globalThis.HTMLVideoElement&&t instanceof HTMLVideoElement}};io.extension=qt.TextureSource;io.defaultOptions={...Vn.defaultOptions,autoLoad:!0,autoPlay:!0,updateFPS:0,crossorigin:!0,loop:!1,muted:!0,playsinline:!0,preload:!1};io.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"};let zg=io;const ks=(i,t,e=!1)=>(Array.isArray(i)||(i=[i]),t?i.map(n=>typeof n=="string"||e?t(n):n):i);class Hg{constructor(){this._parsers=[],this._cache=new Map,this._cacheMap=new Map}reset(){this._cacheMap.clear(),this._cache.clear()}has(t){return this._cache.has(t)}get(t){const e=this._cache.get(t);return e||on(`[Assets] Asset id ${t} was not found in the Cache`),e}set(t,e){const n=ks(t);let s;for(let l=0;l<this.parsers.length;l++){const c=this.parsers[l];if(c.test(e)){s=c.getCacheableAssets(n,e);break}}const r=new Map(Object.entries(s||{}));s||n.forEach(l=>{r.set(l,e)});const a=[...r.keys()],o={cacheKeys:a,keys:n};n.forEach(l=>{this._cacheMap.set(l,o)}),a.forEach(l=>{const c=s?s[l]:e;this._cache.has(l)&&this._cache.get(l)!==c&&on("[Cache] already has key:",l),this._cache.set(l,r.get(l))})}remove(t){if(!this._cacheMap.has(t)){on(`[Assets] Asset id ${t} was not found in the Cache`);return}const e=this._cacheMap.get(t);e.cacheKeys.forEach(s=>{this._cache.delete(s)}),e.keys.forEach(s=>{this._cacheMap.delete(s)})}get parsers(){return this._parsers}}const Gs=new Hg,Hl=[];Be.handleByList(qt.TextureSource,Hl);function Uf(i={}){const t=i&&i.resource,e=t?i.resource:i,n=t?i:{resource:i};for(let s=0;s<Hl.length;s++){const r=Hl[s];if(r.test(e))return new r(n)}throw new Error(`Could not find a source type for resource: ${n.resource}`)}function Vg(i={},t=!1){const e=i&&i.resource,n=e?i.resource:i,s=e?i:{resource:i};if(!t&&Gs.has(n))return Gs.get(n);const r=new ye({source:Uf(s)});return r.on("destroy",()=>{Gs.has(n)&&Gs.remove(n)}),t||Gs.set(n,r),r}function Wg(i,t=!1){return typeof i=="string"?Gs.get(i):i instanceof Vn?new ye({source:i}):Vg(i,t)}ye.from=Wg;Vn.from=Uf;Be.add(Cf,Rf,Pf,zg,$a,If,Qc);var Ff=(i=>(i[i.Low=0]="Low",i[i.Normal=1]="Normal",i[i.High=2]="High",i))(Ff||{});function Fn(i){if(typeof i!="string")throw new TypeError(`Path must be a string. Received ${JSON.stringify(i)}`)}function ar(i){return i.split("?")[0].split("#")[0]}function Xg(i){return i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Yg(i,t,e){return i.replace(new RegExp(Xg(t),"g"),e)}function $g(i,t){let e="",n=0,s=-1,r=0,a=-1;for(let o=0;o<=i.length;++o){if(o<i.length)a=i.charCodeAt(o);else{if(a===47)break;a=47}if(a===47){if(!(s===o-1||r===1))if(s!==o-1&&r===2){if(e.length<2||n!==2||e.charCodeAt(e.length-1)!==46||e.charCodeAt(e.length-2)!==46){if(e.length>2){const l=e.lastIndexOf("/");if(l!==e.length-1){l===-1?(e="",n=0):(e=e.slice(0,l),n=e.length-1-e.lastIndexOf("/")),s=o,r=0;continue}}else if(e.length===2||e.length===1){e="",n=0,s=o,r=0;continue}}}else e.length>0?e+=`/${i.slice(s+1,o)}`:e=i.slice(s+1,o),n=o-s-1;s=o,r=0}else a===46&&r!==-1?++r:r=-1}return e}const Lr={toPosix(i){return Yg(i,"\\","/")},isUrl(i){return/^https?:/.test(this.toPosix(i))},isDataUrl(i){return/^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(i)},isBlobUrl(i){return i.startsWith("blob:")},hasProtocol(i){return/^[^/:]+:/.test(this.toPosix(i))},getProtocol(i){Fn(i),i=this.toPosix(i);const t=/^file:\/\/\//.exec(i);if(t)return t[0];const e=/^[^/:]+:\/{0,2}/.exec(i);return e?e[0]:""},toAbsolute(i,t,e){if(Fn(i),this.isDataUrl(i)||this.isBlobUrl(i))return i;const n=ar(this.toPosix(t??xn.get().getBaseUrl())),s=ar(this.toPosix(e??this.rootname(n)));return i=this.toPosix(i),i.startsWith("/")?Lr.join(s,i.slice(1)):this.isAbsolute(i)?i:this.join(n,i)},normalize(i){if(Fn(i),i.length===0)return".";if(this.isDataUrl(i)||this.isBlobUrl(i))return i;i=this.toPosix(i);let t="";const e=i.startsWith("/");this.hasProtocol(i)&&(t=this.rootname(i),i=i.slice(t.length));const n=i.endsWith("/");return i=$g(i),i.length>0&&n&&(i+="/"),e?`/${i}`:t+i},isAbsolute(i){return Fn(i),i=this.toPosix(i),this.hasProtocol(i)?!0:i.startsWith("/")},join(...i){if(i.length===0)return".";let t;for(let e=0;e<i.length;++e){const n=i[e];if(Fn(n),n.length>0)if(t===void 0)t=n;else{const s=i[e-1]??"";this.joinExtensions.includes(this.extname(s).toLowerCase())?t+=`/../${n}`:t+=`/${n}`}}return t===void 0?".":this.normalize(t)},dirname(i){if(Fn(i),i.length===0)return".";i=this.toPosix(i);let t=i.charCodeAt(0);const e=t===47;let n=-1,s=!0;const r=this.getProtocol(i),a=i;i=i.slice(r.length);for(let o=i.length-1;o>=1;--o)if(t=i.charCodeAt(o),t===47){if(!s){n=o;break}}else s=!1;return n===-1?e?"/":this.isUrl(a)?r+i:r:e&&n===1?"//":r+i.slice(0,n)},rootname(i){Fn(i),i=this.toPosix(i);let t="";if(i.startsWith("/")?t="/":t=this.getProtocol(i),this.isUrl(i)){const e=i.indexOf("/",t.length);e!==-1?t=i.slice(0,e):t=i,t.endsWith("/")||(t+="/")}return t},basename(i,t){Fn(i),t&&Fn(t),i=ar(this.toPosix(i));let e=0,n=-1,s=!0,r;if(t!==void 0&&t.length>0&&t.length<=i.length){if(t.length===i.length&&t===i)return"";let a=t.length-1,o=-1;for(r=i.length-1;r>=0;--r){const l=i.charCodeAt(r);if(l===47){if(!s){e=r+1;break}}else o===-1&&(s=!1,o=r+1),a>=0&&(l===t.charCodeAt(a)?--a===-1&&(n=r):(a=-1,n=o))}return e===n?n=o:n===-1&&(n=i.length),i.slice(e,n)}for(r=i.length-1;r>=0;--r)if(i.charCodeAt(r)===47){if(!s){e=r+1;break}}else n===-1&&(s=!1,n=r+1);return n===-1?"":i.slice(e,n)},extname(i){Fn(i),i=ar(this.toPosix(i));let t=-1,e=0,n=-1,s=!0,r=0;for(let a=i.length-1;a>=0;--a){const o=i.charCodeAt(a);if(o===47){if(!s){e=a+1;break}continue}n===-1&&(s=!1,n=a+1),o===46?t===-1?t=a:r!==1&&(r=1):t!==-1&&(r=-1)}return t===-1||n===-1||r===0||r===1&&t===n-1&&t===e+1?"":i.slice(t,n)},parse(i){Fn(i);const t={root:"",dir:"",base:"",ext:"",name:""};if(i.length===0)return t;i=ar(this.toPosix(i));let e=i.charCodeAt(0);const n=this.isAbsolute(i);let s;t.root=this.rootname(i),n||this.hasProtocol(i)?s=1:s=0;let r=-1,a=0,o=-1,l=!0,c=i.length-1,h=0;for(;c>=s;--c){if(e=i.charCodeAt(c),e===47){if(!l){a=c+1;break}continue}o===-1&&(l=!1,o=c+1),e===46?r===-1?r=c:h!==1&&(h=1):r!==-1&&(h=-1)}return r===-1||o===-1||h===0||h===1&&r===o-1&&r===a+1?o!==-1&&(a===0&&n?t.base=t.name=i.slice(1,o):t.base=t.name=i.slice(a,o)):(a===0&&n?(t.name=i.slice(1,r),t.base=i.slice(1,o)):(t.name=i.slice(a,r),t.base=i.slice(a,o)),t.ext=i.slice(r,o)),t.dir=this.dirname(i),t},sep:"/",delimiter:":",joinExtensions:[".html"]};function Nf(i,t,e,n,s){const r=t[e];for(let a=0;a<r.length;a++){const o=r[a];e<t.length-1?Nf(i.replace(n[e],o),t,e+1,n,s):s.push(i.replace(n[e],o))}}function qg(i){const t=/\{(.*?)\}/g,e=i.match(t),n=[];if(e){const s=[];e.forEach(r=>{const a=r.substring(1,r.length-1).split(",");s.push(a)}),Nf(i,s,0,e,n)}else n.push(i);return n}const tu=i=>!Array.isArray(i);class Of{constructor(){this._defaultBundleIdentifierOptions={connector:"-",createBundleAssetId:(t,e)=>`${t}${this._bundleIdConnector}${e}`,extractAssetIdFromBundle:(t,e)=>e.replace(`${t}${this._bundleIdConnector}`,"")},this._bundleIdConnector=this._defaultBundleIdentifierOptions.connector,this._createBundleAssetId=this._defaultBundleIdentifierOptions.createBundleAssetId,this._extractAssetIdFromBundle=this._defaultBundleIdentifierOptions.extractAssetIdFromBundle,this._assetMap={},this._preferredOrder=[],this._parsers=[],this._resolverHash={},this._bundles={}}setBundleIdentifier(t){if(this._bundleIdConnector=t.connector??this._bundleIdConnector,this._createBundleAssetId=t.createBundleAssetId??this._createBundleAssetId,this._extractAssetIdFromBundle=t.extractAssetIdFromBundle??this._extractAssetIdFromBundle,this._extractAssetIdFromBundle("foo",this._createBundleAssetId("foo","bar"))!=="bar")throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")}prefer(...t){t.forEach(e=>{this._preferredOrder.push(e),e.priority||(e.priority=Object.keys(e.params))}),this._resolverHash={}}set basePath(t){this._basePath=t}get basePath(){return this._basePath}set rootPath(t){this._rootPath=t}get rootPath(){return this._rootPath}get parsers(){return this._parsers}reset(){this.setBundleIdentifier(this._defaultBundleIdentifierOptions),this._assetMap={},this._preferredOrder=[],this._resolverHash={},this._rootPath=null,this._basePath=null,this._manifest=null,this._bundles={},this._defaultSearchParams=null}setDefaultSearchParams(t){if(typeof t=="string")this._defaultSearchParams=t;else{const e=t;this._defaultSearchParams=Object.keys(e).map(n=>`${encodeURIComponent(n)}=${encodeURIComponent(e[n])}`).join("&")}}getAlias(t){const{alias:e,src:n}=t;return ks(e||n,r=>typeof r=="string"?r:Array.isArray(r)?r.map(a=>a?.src??a):r?.src?r.src:r,!0)}addManifest(t){this._manifest&&on("[Resolver] Manifest already exists, this will be overwritten"),this._manifest=t,t.bundles.forEach(e=>{this.addBundle(e.name,e.assets)})}addBundle(t,e){const n=[];let s=e;Array.isArray(e)||(s=Object.entries(e).map(([r,a])=>typeof a=="string"||Array.isArray(a)?{alias:r,src:a}:{alias:r,...a})),s.forEach(r=>{const a=r.src,o=r.alias;let l;if(typeof o=="string"){const c=this._createBundleAssetId(t,o);n.push(c),l=[o,c]}else{const c=o.map(h=>this._createBundleAssetId(t,h));n.push(...c),l=[...o,...c]}this.add({...r,alias:l,src:a})}),this._bundles[t]=n}add(t){const e=[];Array.isArray(t)?e.push(...t):e.push(t);let n;n=r=>{this.hasKey(r)&&on(`[Resolver] already has key: ${r} overwriting`)},ks(e).forEach(r=>{const{src:a}=r;let{data:o,format:l,loadParser:c,parser:h}=r;const u=ks(a).map(_=>typeof _=="string"?qg(_):Array.isArray(_)?_:[_]),f=this.getAlias(r);Array.isArray(f)?f.forEach(n):n(f);const d=[],g=_=>{const m=this._parsers.find(p=>p.test(_));return{src:_,...m?.parse(_)}};u.forEach(_=>{_.forEach(m=>{let p={};if(typeof m!="object"?p=g(m):(o=m.data??o,l=m.format??l,(m.loadParser||m.parser)&&(c=m.loadParser??c,h=m.parser??h),p={...g(m.src),...m}),!f)throw new Error(`[Resolver] alias is undefined for this asset: ${p.src}`);p=this._buildResolvedAsset(p,{aliases:f,data:o,format:l,loadParser:c,parser:h,progressSize:r.progressSize}),d.push(p)})}),f.forEach(_=>{this._assetMap[_]=d})})}resolveBundle(t){const e=tu(t);t=ks(t);const n={};return t.forEach(s=>{const r=this._bundles[s];if(r){const a=this.resolve(r),o={};for(const l in a){const c=a[l];o[this._extractAssetIdFromBundle(s,l)]=c}n[s]=o}}),e?n[t[0]]:n}resolveUrl(t){const e=this.resolve(t);if(typeof t!="string"){const n={};for(const s in e)n[s]=e[s].src;return n}return e.src}resolve(t){const e=tu(t);t=ks(t);const n={};return t.forEach(s=>{if(!this._resolverHash[s])if(this._assetMap[s]){let r=this._assetMap[s];const a=this._getPreferredOrder(r);a?.priority.forEach(o=>{a.params[o].forEach(l=>{const c=r.filter(h=>h[o]?h[o]===l:!1);c.length&&(r=c)})}),this._resolverHash[s]=r[0]}else this._resolverHash[s]=this._buildResolvedAsset({alias:[s],src:s},{});n[s]=this._resolverHash[s]}),e?n[t[0]]:n}hasKey(t){return!!this._assetMap[t]}hasBundle(t){return!!this._bundles[t]}_getPreferredOrder(t){for(let e=0;e<t.length;e++){const n=t[e],s=this._preferredOrder.find(r=>r.params.format.includes(n.format));if(s)return s}return this._preferredOrder[0]}_appendDefaultSearchParams(t){if(!this._defaultSearchParams)return t;const e=/\?/.test(t)?"&":"?";return`${t}${e}${this._defaultSearchParams}`}_buildResolvedAsset(t,e){const{aliases:n,data:s,loadParser:r,parser:a,format:o,progressSize:l}=e;return(this._basePath||this._rootPath)&&(t.src=Lr.toAbsolute(t.src,this._basePath,this._rootPath)),t.alias=n??t.alias??[t.src],t.src=this._appendDefaultSearchParams(t.src),t.data={...s||{},...t.data},t.loadParser=r??t.loadParser,t.parser=a??t.parser,t.format=o??t.format??jg(t.src),l!==void 0&&(t.progressSize=l),t}}Of.RETINA_PREFIX=/@([0-9\.]+)x/;function jg(i){return i.split(".").pop().split("?").shift().split("#").shift()}const eu=(i,t)=>{const e=t.split("?")[1];return e&&(i+=`?${e}`),i},Bf=class Mr{constructor(t,e){this.linkedSheets=[];let n=t;t?.source instanceof Vn&&(n={texture:t,data:e});const{texture:s,data:r,cachePrefix:a=""}=n;this.cachePrefix=a,this._texture=s instanceof ye?s:null,this.textureSource=s.source,this.textures={},this.animations={},this.data=r;const o=parseFloat(r.meta.scale);o?(this.resolution=o,s.source.resolution=this.resolution):this.resolution=s.source._resolution,this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}parse(){return new Promise(t=>{this._callback=t,this._batchIndex=0,this._frameKeys.length<=Mr.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()})}parseSync(){return this._processFrames(0,!0),this._processAnimations(),this.textures}_processFrames(t,e=!1){let n=t;const s=e?1/0:Mr.BATCH_SIZE;for(;n-t<s&&n<this._frameKeys.length;){const r=this._frameKeys[n],a=this._frames[r],o=a.frame;if(o){let l=null,c=null;const h=a.trimmed!==!1&&a.sourceSize?a.sourceSize:a.frame,u=new Oe(0,0,Math.floor(h.w)/this.resolution,Math.floor(h.h)/this.resolution);a.rotated?l=new Oe(Math.floor(o.x)/this.resolution,Math.floor(o.y)/this.resolution,Math.floor(o.h)/this.resolution,Math.floor(o.w)/this.resolution):l=new Oe(Math.floor(o.x)/this.resolution,Math.floor(o.y)/this.resolution,Math.floor(o.w)/this.resolution,Math.floor(o.h)/this.resolution),a.trimmed!==!1&&a.spriteSourceSize&&(c=new Oe(Math.floor(a.spriteSourceSize.x)/this.resolution,Math.floor(a.spriteSourceSize.y)/this.resolution,Math.floor(o.w)/this.resolution,Math.floor(o.h)/this.resolution)),this.textures[r]=new ye({source:this.textureSource,frame:l,orig:u,trim:c,rotate:a.rotated?2:0,defaultAnchor:a.anchor,defaultBorders:a.borders,label:r.toString()})}n++}}_processAnimations(){const t=this.data.animations||{};for(const e in t){this.animations[e]=[];for(let n=0;n<t[e].length;n++){const s=t[e][n];this.animations[e].push(this.textures[s])}}}_parseComplete(){const t=this._callback;this._callback=null,this._batchIndex=0,t.call(this,this.textures)}_nextBatch(){this._processFrames(this._batchIndex*Mr.BATCH_SIZE),this._batchIndex++,setTimeout(()=>{this._batchIndex*Mr.BATCH_SIZE<this._frameKeys.length?this._nextBatch():(this._processAnimations(),this._parseComplete())},0)}destroy(t=!1){for(const e in this.textures)this.textures[e].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,t&&(this._texture?.destroy(),this.textureSource.destroy()),this._texture=null,this.textureSource=null,this.linkedSheets=[]}};Bf.BATCH_SIZE=1e3;let nu=Bf;const Kg=["jpg","png","jpeg","avif","webp","basis","etc2","bc7","bc6h","bc5","bc4","bc3","bc2","bc1","eac","astc"];function kf(i,t,e){const n={};if(i.forEach(s=>{n[s]=t}),Object.keys(t.textures).forEach(s=>{n[`${t.cachePrefix}${s}`]=t.textures[s]}),!e){const s=Lr.dirname(i[0]);t.linkedSheets.forEach((r,a)=>{const o=kf([`${s}/${t.data.meta.related_multi_packs[a]}`],r,!0);Object.assign(n,o)})}return n}const Zg={extension:qt.Asset,cache:{test:i=>i instanceof nu,getCacheableAssets:(i,t)=>kf(i,t,!1)},resolver:{extension:{type:qt.ResolveParser,name:"resolveSpritesheet"},test:i=>{const e=i.split("?")[0].split("."),n=e.pop(),s=e.pop();return n==="json"&&Kg.includes(s)},parse:i=>{const t=i.split(".");return{resolution:parseFloat(Of.RETINA_PREFIX.exec(i)?.[1]??"1"),format:t[t.length-2],src:i}}},loader:{name:"spritesheetLoader",id:"spritesheet",extension:{type:qt.LoadParser,priority:Ff.Normal,name:"spritesheetLoader"},async testParse(i,t){return Lr.extname(t.src).toLowerCase()===".json"&&!!i.frames},async parse(i,t,e){const{texture:n,imageFilename:s,textureOptions:r,cachePrefix:a}=t?.data??{};let o=Lr.dirname(t.src);o&&o.lastIndexOf("/")!==o.length-1&&(o+="/");let l;if(n instanceof ye)l=n;else{const u=eu(o+(s??i.meta.image),t.src);l=(await e.load([{src:u,data:r}]))[u]}const c=new nu({texture:l.source,data:i,cachePrefix:a});await c.parse();const h=i?.meta?.related_multi_packs;if(Array.isArray(h)){const u=[];for(const d of h){if(typeof d!="string")continue;let g=o+d;t.data?.ignoreMultiPack||(g=eu(g,t.src),u.push(e.load({src:g,data:{textureOptions:r,ignoreMultiPack:!0}})))}const f=await Promise.all(u);c.linkedSheets=f,f.forEach(d=>{d.linkedSheets=[c].concat(c.linkedSheets.filter(g=>g!==d))})}return c},async unload(i,t,e){await e.unload(i.textureSource._sourceOrigin),i.destroy(!1)}}};Be.add(Zg);const Fo=Object.create(null),iu=Object.create(null);function ih(i,t){let e=iu[i];return e===void 0&&(Fo[t]===void 0&&(Fo[t]=1),iu[i]=e=Fo[t]++),e}let ra;function Gf(){return(!ra||ra?.isContextLost())&&(ra=xn.get().createCanvas().getContext("webgl",{})),ra}let aa;function Jg(){if(!aa){aa="mediump";const i=Gf();i&&i.getShaderPrecisionFormat&&(aa=i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision?"highp":"mediump")}return aa}function Qg(i,t,e){return t?i:e?(i=i.replace("out vec4 finalColor;",""),`

        #ifdef GL_ES // This checks if it is WebGL1
        #define in varying
        #define finalColor gl_FragColor
        #define texture texture2D
        #endif
        ${i}
        `):`

        #ifdef GL_ES // This checks if it is WebGL1
        #define in attribute
        #define out varying
        #endif
        ${i}
        `}function t_(i,t,e){const n=e?t.maxSupportedFragmentPrecision:t.maxSupportedVertexPrecision;if(i.substring(0,9)!=="precision"){let s=e?t.requestedFragmentPrecision:t.requestedVertexPrecision;return s==="highp"&&n!=="highp"&&(s="mediump"),`precision ${s} float;
${i}`}else if(n!=="highp"&&i.substring(0,15)==="precision highp")return i.replace("precision highp","precision mediump");return i}function e_(i,t){return t?`#version 300 es
${i}`:i}const n_={},i_={};function s_(i,{name:t="pixi-program"},e=!0){t=t.replace(/\s+/g,"-"),t+=e?"-fragment":"-vertex";const n=e?n_:i_;return n[t]?(n[t]++,t+=`-${n[t]}`):n[t]=1,i.indexOf("#define SHADER_NAME")!==-1?i:`${`#define SHADER_NAME ${t}`}
${i}`}function r_(i,t){return t?i.replace("#version 300 es",""):i}const No={stripVersion:r_,ensurePrecision:t_,addProgramDefines:Qg,setProgramName:s_,insertVersion:e_},or=Object.create(null),zf=class Vl{constructor(t){t={...Vl.defaultOptions,...t};const e=t.fragment.indexOf("#version 300 es")!==-1,n={stripVersion:e,ensurePrecision:{requestedFragmentPrecision:t.preferredFragmentPrecision,requestedVertexPrecision:t.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:Jg()},setProgramName:{name:t.name},addProgramDefines:e,insertVersion:e};let s=t.fragment,r=t.vertex;Object.keys(No).forEach(a=>{const o=n[a];s=No[a](s,o,!0),r=No[a](r,o,!1)}),this.fragment=s,this.vertex=r,this.transformFeedbackVaryings=t.transformFeedbackVaryings,this._key=ih(`${this.vertex}:${this.fragment}`,"gl-program")}destroy(){this.fragment=null,this.vertex=null,this._attributeData=null,this._uniformData=null,this._uniformBlockData=null,this.transformFeedbackVaryings=null,or[this._cacheKey]=null}static from(t){const e=`${t.vertex}:${t.fragment}`;return or[e]||(or[e]=new Vl(t),or[e]._cacheKey=e),or[e]}};zf.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};let Hf=zf;const su={uint8x2:{size:2,stride:2,normalised:!1},uint8x4:{size:4,stride:4,normalised:!1},sint8x2:{size:2,stride:2,normalised:!1},sint8x4:{size:4,stride:4,normalised:!1},unorm8x2:{size:2,stride:2,normalised:!0},unorm8x4:{size:4,stride:4,normalised:!0},snorm8x2:{size:2,stride:2,normalised:!0},snorm8x4:{size:4,stride:4,normalised:!0},uint16x2:{size:2,stride:4,normalised:!1},uint16x4:{size:4,stride:8,normalised:!1},sint16x2:{size:2,stride:4,normalised:!1},sint16x4:{size:4,stride:8,normalised:!1},unorm16x2:{size:2,stride:4,normalised:!0},unorm16x4:{size:4,stride:8,normalised:!0},snorm16x2:{size:2,stride:4,normalised:!0},snorm16x4:{size:4,stride:8,normalised:!0},float16x2:{size:2,stride:4,normalised:!1},float16x4:{size:4,stride:8,normalised:!1},float32:{size:1,stride:4,normalised:!1},float32x2:{size:2,stride:8,normalised:!1},float32x3:{size:3,stride:12,normalised:!1},float32x4:{size:4,stride:16,normalised:!1},uint32:{size:1,stride:4,normalised:!1},uint32x2:{size:2,stride:8,normalised:!1},uint32x3:{size:3,stride:12,normalised:!1},uint32x4:{size:4,stride:16,normalised:!1},sint32:{size:1,stride:4,normalised:!1},sint32x2:{size:2,stride:8,normalised:!1},sint32x3:{size:3,stride:12,normalised:!1},sint32x4:{size:4,stride:16,normalised:!1}};function a_(i){return su[i]??su.float32}const o_={f32:"float32","vec2<f32>":"float32x2","vec3<f32>":"float32x3","vec4<f32>":"float32x4",vec2f:"float32x2",vec3f:"float32x3",vec4f:"float32x4",i32:"sint32","vec2<i32>":"sint32x2","vec3<i32>":"sint32x3","vec4<i32>":"sint32x4",vec2i:"sint32x2",vec3i:"sint32x3",vec4i:"sint32x4",u32:"uint32","vec2<u32>":"uint32x2","vec3<u32>":"uint32x3","vec4<u32>":"uint32x4",vec2u:"uint32x2",vec3u:"uint32x3",vec4u:"uint32x4",bool:"uint32","vec2<bool>":"uint32x2","vec3<bool>":"uint32x3","vec4<bool>":"uint32x4"},ru=/@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|\)|$)/g;function au(i,t){let e;for(;(e=ru.exec(i))!==null;){const n=o_[e[3]]??"float32";t[e[2]]={location:parseInt(e[1],10),format:n,stride:a_(n).stride,offset:0,instance:!1,start:0}}ru.lastIndex=0}function l_(i){return i.replace(/\/\/.*$/gm,"").replace(/\/\*[\s\S]*?\*\//g,"")}function c_({source:i,entryPoint:t}){const e={},n=l_(i),s=n.indexOf(`fn ${t}(`);if(s===-1)return e;const r=n.indexOf("->",s);if(r===-1)return e;const a=n.substring(s,r);if(au(a,e),Object.keys(e).length===0){const o=a.match(/\(\s*\w+\s*:\s*(\w+)/);if(o){const l=o[1],c=new RegExp(`struct\\s+${l}\\s*\\{([^}]+)\\}`,"s"),h=n.match(c);h&&au(h[1],e)}}return e}function Oo(i){const t=/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g,e=/@group\((\d+)\)/,n=/@binding\((\d+)\)/,s=/var(<[^>]+>)? (\w+)/,r=/:\s*([\w<>]+)/,a=/struct\s+(\w+)\s*{([^}]+)}/g,o=/(\w+)\s*:\s*([\w\<\>]+)/g,l=/struct\s+(\w+)/,c=i.match(t)?.map(u=>({group:parseInt(u.match(e)[1],10),binding:parseInt(u.match(n)[1],10),name:u.match(s)[2],isUniform:u.match(s)[1]==="<uniform>",type:u.match(r)[1]}));if(!c)return{groups:[],structs:[]};const h=i.match(a)?.map(u=>{const f=u.match(l)[1],d=u.match(o).reduce((g,_)=>{const[m,p]=_.split(":");return g[m.trim()]=p.trim(),g},{});return d?{name:f,members:d}:null}).filter(({name:u})=>c.some(f=>f.type===u||f.type.includes(`<${u}>`)))??[];return{groups:c,structs:h}}var ls=(i=>(i[i.VERTEX=1]="VERTEX",i[i.FRAGMENT=2]="FRAGMENT",i[i.COMPUTE=4]="COMPUTE",i))(ls||{});function h_({groups:i}){const t=[];for(let e=0;e<i.length;e++){const n=i[e];t[n.group]||(t[n.group]=[]),n.isUniform?t[n.group].push({binding:n.binding,visibility:ls.VERTEX|ls.FRAGMENT,buffer:{type:"uniform"}}):n.type==="sampler"?t[n.group].push({binding:n.binding,visibility:ls.FRAGMENT,sampler:{type:"filtering"}}):n.type==="texture_2d"||n.type.startsWith("texture_2d<")?t[n.group].push({binding:n.binding,visibility:ls.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}}):n.type==="texture_2d_array"||n.type.startsWith("texture_2d_array<")?t[n.group].push({binding:n.binding,visibility:ls.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}}):(n.type==="texture_cube"||n.type.startsWith("texture_cube<"))&&t[n.group].push({binding:n.binding,visibility:ls.FRAGMENT,texture:{sampleType:"float",viewDimension:"cube",multisampled:!1}})}for(let e=0;e<t.length;e++)t[e]||(t[e]=[]);return t}function u_({groups:i}){const t=[];for(let e=0;e<i.length;e++){const n=i[e];t[n.group]||(t[n.group]={}),t[n.group][n.name]=n.binding}return t}function d_(i,t){const e=new Set,n=new Set,s=[...i.structs,...t.structs].filter(a=>e.has(a.name)?!1:(e.add(a.name),!0)),r=[...i.groups,...t.groups].filter(a=>{const o=`${a.name}-${a.binding}`;return n.has(o)?!1:(n.add(o),!0)});return{structs:s,groups:r}}const lr=Object.create(null);class so{constructor(t){this._layoutKey=0,this._attributeLocationsKey=0;const{fragment:e,vertex:n,layout:s,gpuLayout:r,name:a}=t;if(this.name=a,this.fragment=e,this.vertex=n,e.source===n.source){const o=Oo(e.source);this.structsAndGroups=o}else{const o=Oo(n.source),l=Oo(e.source);this.structsAndGroups=d_(o,l)}this.layout=s??u_(this.structsAndGroups),this.gpuLayout=r??h_(this.structsAndGroups),this.autoAssignGlobalUniforms=this.layout[0]?.globalUniforms!==void 0,this.autoAssignLocalUniforms=this.layout[1]?.localUniforms!==void 0,this._generateProgramKey()}_generateProgramKey(){const{vertex:t,fragment:e}=this,n=t.source+e.source+t.entryPoint+e.entryPoint;this._layoutKey=ih(n,"program")}get attributeData(){return this._attributeData??(this._attributeData=c_(this.vertex)),this._attributeData}destroy(){this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null,lr[this._cacheKey]=null}static from(t){const e=`${t.vertex.source}:${t.fragment.source}:${t.fragment.entryPoint}:${t.vertex.entryPoint}`;return lr[e]||(lr[e]=new so(t),lr[e]._cacheKey=e),lr[e]}}const Vf=["f32","i32","vec2<f32>","vec3<f32>","vec4<f32>","mat2x2<f32>","mat3x3<f32>","mat4x4<f32>","mat3x2<f32>","mat4x2<f32>","mat2x3<f32>","mat4x3<f32>","mat2x4<f32>","mat3x4<f32>","vec2<i32>","vec3<i32>","vec4<i32>"],f_=Vf.reduce((i,t)=>(i[t]=!0,i),{});function p_(i,t){switch(i){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*t);case"vec3<f32>":return new Float32Array(3*t);case"vec4<f32>":return new Float32Array(4*t);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}const Wf=class Xf{constructor(t,e){this._touched=0,this.uid=Ue("uniform"),this._resourceType="uniformGroup",this._resourceId=Ue("resource"),this.isUniformGroup=!0,this._dirtyId=0,this.destroyed=!1,e={...Xf.defaultOptions,...e},this.uniformStructures=t;const n={};for(const s in t){const r=t[s];if(r.name=s,r.size=r.size??1,!f_[r.type]){const a=r.type.match(/^array<(\w+(?:<\w+>)?),\s*(\d+)>$/);if(a){const[,o,l]=a;throw new Error(`Uniform type ${r.type} is not supported. Use type: '${o}', size: ${l} instead.`)}throw new Error(`Uniform type ${r.type} is not supported. Supported uniform types are: ${Vf.join(", ")}`)}r.value??(r.value=p_(r.type,r.size)),n[s]=r.value}this.uniforms=n,this._dirtyId=1,this.ubo=e.ubo,this.isStatic=e.isStatic,this._signature=ih(Object.keys(n).map(s=>`${s}-${t[s].type}`).join("-"),"uniform-group")}update(){this._dirtyId++}};Wf.defaultOptions={ubo:!1,isStatic:!1};let Yf=Wf;class Ga{constructor(t){this.resources=Object.create(null),this._dirty=!0;let e=0;for(const n in t){const s=t[n];this.setResource(s,e++)}this._updateKey()}_updateKey(){if(!this._dirty)return;this._dirty=!1;const t=[];let e=0;for(const n in this.resources)t[e++]=this.resources[n]._resourceId;this._key=t.join("|")}setResource(t,e){const n=this.resources[e];t!==n&&(n&&t.off?.("change",this.onResourceChange,this),t.on?.("change",this.onResourceChange,this),this.resources[e]=t,this._dirty=!0)}getResource(t){return this.resources[t]}_touch(t,e){const n=this.resources;for(const s in n)n[s]._gcLastUsed=t,n[s]._touched=e}destroy(){const t=this.resources;for(const e in t)t[e]?.off?.("change",this.onResourceChange,this);this.resources=null}onResourceChange(t){if(this._dirty=!0,t.destroyed){const e=this.resources;for(const n in e)e[n]===t&&(e[n]=null)}else this._updateKey()}}var Wl=(i=>(i[i.WEBGL=1]="WEBGL",i[i.WEBGPU=2]="WEBGPU",i[i.CANVAS=4]="CANVAS",i[i.BOTH=3]="BOTH",i))(Wl||{});class sh extends ii{constructor(t){super(),this.uid=Ue("shader"),this._uniformBindMap=Object.create(null),this._ownedBindGroups=[],this._destroyed=!1;let{gpuProgram:e,glProgram:n,groups:s,resources:r,compatibleRenderers:a,groupMap:o}=t;this.gpuProgram=e,this.glProgram=n,a===void 0&&(a=0,e&&(a|=Wl.WEBGPU),n&&(a|=Wl.WEBGL)),this.compatibleRenderers=a;const l={};if(!r&&!s&&(r={}),r&&s)throw new Error("[Shader] Cannot have both resources and groups");if(!e&&s&&!o)throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");if(!e&&s&&o)for(const c in o)for(const h in o[c]){const u=o[c][h];l[u]={group:c,binding:h,name:u}}else if(e&&s&&!o){const c=e.structsAndGroups.groups;o={},c.forEach(h=>{o[h.group]=o[h.group]||{},o[h.group][h.binding]=h.name,l[h.name]=h})}else if(r){s={},o={},e&&e.structsAndGroups.groups.forEach(u=>{o[u.group]=o[u.group]||{},o[u.group][u.binding]=u.name,l[u.name]=u});let c=0;for(const h in r)l[h]||(s[99]||(s[99]=new Ga,this._ownedBindGroups.push(s[99])),l[h]={group:99,binding:c,name:h},o[99]=o[99]||{},o[99][c]=h,c++);for(const h in r){const u=h;let f=r[h];!f.source&&!f._resourceType&&(f=new Yf(f));const d=l[u];d&&(s[d.group]||(s[d.group]=new Ga,this._ownedBindGroups.push(s[d.group])),s[d.group].setResource(f,d.binding))}}this.groups=s,this._uniformBindMap=o,this.resources=this._buildResourceAccessor(s,l)}addResource(t,e,n){var s,r;(s=this._uniformBindMap)[e]||(s[e]={}),(r=this._uniformBindMap[e])[n]||(r[n]=t),this.groups[e]||(this.groups[e]=new Ga,this._ownedBindGroups.push(this.groups[e]))}_buildResourceAccessor(t,e){const n={};for(const s in e){const r=e[s];Object.defineProperty(n,r.name,{get(){return t[r.group].getResource(r.binding)},set(a){t[r.group].setResource(a,r.binding)}})}return n}destroy(t=!1){this._destroyed||(this._destroyed=!0,this.emit("destroy",this),t&&(this.gpuProgram?.destroy(),this.glProgram?.destroy()),this.gpuProgram=null,this.glProgram=null,this.removeAllListeners(),this._uniformBindMap=null,this._ownedBindGroups.forEach(e=>{e.destroy()}),this._ownedBindGroups=null,this.resources=null,this.groups=null)}static from(t){const{gpu:e,gl:n,...s}=t;let r,a;return e&&(r=so.from(e)),n&&(a=Hf.from(n)),new sh({gpuProgram:r,glProgram:a,...s})}}const m_={normal:0,add:1,multiply:2,screen:3,overlay:4,erase:5,"normal-npm":6,"add-npm":7,"screen-npm":8,min:9,max:10},Bo=0,ko=1,Go=2,zo=3,Ho=4,Vo=5,Xl=class $f{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<Bo)}set blend(t){!!(this.data&1<<Bo)!==t&&(this.data^=1<<Bo)}get offsets(){return!!(this.data&1<<ko)}set offsets(t){!!(this.data&1<<ko)!==t&&(this.data^=1<<ko)}set cullMode(t){if(t==="none"){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace=t==="front"}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return!!(this.data&1<<Go)}set culling(t){!!(this.data&1<<Go)!==t&&(this.data^=1<<Go)}get depthTest(){return!!(this.data&1<<zo)}set depthTest(t){!!(this.data&1<<zo)!==t&&(this.data^=1<<zo)}get depthMask(){return!!(this.data&1<<Vo)}set depthMask(t){!!(this.data&1<<Vo)!==t&&(this.data^=1<<Vo)}get clockwiseFrontFace(){return!!(this.data&1<<Ho)}set clockwiseFrontFace(t){!!(this.data&1<<Ho)!==t&&(this.data^=1<<Ho)}get blendMode(){return this._blendMode}set blendMode(t){this.blend=t!=="none",this._blendMode=t,this._blendModeId=m_[t]||0}get polygonOffset(){return this._polygonOffset}set polygonOffset(t){this.offsets=!!t,this._polygonOffset=t}toString(){return`[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){const t=new $f;return t.depthTest=!1,t.blend=!0,t}};Xl.default2d=Xl.for2d();let qf=Xl;const Yl=[];Be.handleByNamedList(qt.Environment,Yl);async function g_(i){if(!i)for(let t=0;t<Yl.length;t++){const e=Yl[t];if(e.value.test()){await e.value.load();return}}}let cr;function __(){if(typeof cr=="boolean")return cr;try{cr=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{cr=!1}return cr}function ou(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=jf(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=M_(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,u=l;for(let f=e;f<s;f+=e){const d=i[f],g=i[f+1];d<o&&(o=d),g<l&&(l=g),d>h&&(h=d),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Ur(r,a,e,o,l,c,0),a}function jf(i,t,e,n,s){let r;if(s===L_(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=lu(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=lu(a/n|0,i[a],i[a+1],r);return r&&Ks(r,r.next)&&(Nr(r),r=r.next),r}function gs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ks(e,e.next)||Pe(e.prev,e,e.next)===0)){if(Nr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ur(i,t,e,n,s,r,a){if(!i)return;!a&&r&&A_(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?v_(i,n,s,r):x_(i)){t.push(l.i,i.i,c.i),Nr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=y_(gs(i),t),Ur(i,t,e,n,s,r,2)):a===2&&S_(i,t,e,n,s,r):Ur(gs(i),t,e,n,s,r,1);break}}}function x_(i){const t=i.prev,e=i,n=i.next;if(Pe(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),f=Math.max(s,r,a),d=Math.max(o,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&br(s,o,r,l,a,c,g.x,g.y)&&Pe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function v_(i,t,e,n){const s=i.prev,r=i,a=i.next;if(Pe(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,d=Math.min(o,l,c),g=Math.min(h,u,f),_=Math.max(o,l,c),m=Math.max(h,u,f),p=$l(d,g,t,e,n),M=$l(_,m,t,e,n);let S=i.prevZ,v=i.nextZ;for(;S&&S.z>=p&&v&&v.z<=M;){if(S.x>=d&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&br(o,h,l,u,c,f,S.x,S.y)&&Pe(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&br(o,h,l,u,c,f,v.x,v.y)&&Pe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=p;){if(S.x>=d&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&br(o,h,l,u,c,f,S.x,S.y)&&Pe(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=M;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&br(o,h,l,u,c,f,v.x,v.y)&&Pe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function y_(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Ks(n,s)&&Zf(n,e,e.next,s)&&Fr(n,s)&&Fr(s,n)&&(t.push(n.i,e.i,s.i),Nr(e),Nr(e.next),e=i=s),e=e.next}while(e!==i);return gs(e)}function S_(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&P_(a,o)){let l=Jf(a,o);a=gs(a,a.next),l=gs(l,l.next),Ur(a,t,e,n,s,r,0),Ur(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function M_(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=jf(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(R_(c))}s.sort(b_);for(let r=0;r<s.length;r++)e=T_(s[r],e);return e}function b_(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function T_(i,t){const e=E_(i,t);if(!e)return t;const n=Jf(e,i);return gs(n,n.next),gs(e,e.next)}function E_(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(Ks(i,e))return e;do{if(Ks(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Kf(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);Fr(e,i)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&w_(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function w_(i,t){return Pe(i.prev,i,t.prev)<0&&Pe(t.next,i,i.next)<0}function A_(i,t,e,n){let s=i;do s.z===0&&(s.z=$l(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,C_(s)}function C_(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function $l(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function R_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Kf(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function br(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Kf(i,t,e,n,s,r,a,o)}function P_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!I_(i,t)&&(Fr(i,t)&&Fr(t,i)&&D_(i,t)&&(Pe(i.prev,i,t.prev)||Pe(i,t.prev,t))||Ks(i,t)&&Pe(i.prev,i,i.next)>0&&Pe(t.prev,t,t.next)>0)}function Pe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ks(i,t){return i.x===t.x&&i.y===t.y}function Zf(i,t,e,n){const s=la(Pe(i,t,e)),r=la(Pe(i,t,n)),a=la(Pe(e,n,i)),o=la(Pe(e,n,t));return!!(s!==r&&a!==o||s===0&&oa(i,e,t)||r===0&&oa(i,n,t)||a===0&&oa(e,i,n)||o===0&&oa(e,t,n))}function oa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function la(i){return i>0?1:i<0?-1:0}function I_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Zf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Fr(i,t){return Pe(i.prev,i,i.next)<0?Pe(i,t,i.next)>=0&&Pe(i,i.prev,t)>=0:Pe(i,t,i.prev)<0||Pe(i,i.next,t)<0}function D_(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Jf(i,t){const e=ql(i.i,i.x,i.y),n=ql(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function lu(i,t,e,n){const s=ql(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Nr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ql(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function L_(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}const U_=ou.default||ou;var Qf=(i=>(i[i.NONE=0]="NONE",i[i.COLOR=16384]="COLOR",i[i.STENCIL=1024]="STENCIL",i[i.DEPTH=256]="DEPTH",i[i.COLOR_DEPTH=16640]="COLOR_DEPTH",i[i.COLOR_STENCIL=17408]="COLOR_STENCIL",i[i.DEPTH_STENCIL=1280]="DEPTH_STENCIL",i[i.ALL=17664]="ALL",i))(Qf||{});class F_{constructor(t){this.items=[],this._name=t}emit(t,e,n,s,r,a,o,l){const{name:c,items:h}=this;for(let u=0,f=h.length;u<f;u++)h[u][c](t,e,n,s,r,a,o,l);return this}add(t){return t[this._name]&&(this.remove(t),this.items.push(t)),this}remove(t){const e=this.items.indexOf(t);return e!==-1&&this.items.splice(e,1),this}contains(t){return this.items.indexOf(t)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const N_=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],tp=class ep extends ii{constructor(t){super(),this.tick=0,this.uid=Ue("renderer"),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=t.type,this.name=t.name,this.config=t;const e=[...N_,...this.config.runners??[]];this._addRunners(...e),this._unsafeEvalCheck()}async init(t={}){const e=t.skipExtensionImports===!0?!0:t.manageImports===!1;await g_(e),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const n in this._systemsHash)t={...this._systemsHash[n].constructor.defaultOptions,...t};t={...ep.defaultOptions,...t},this._roundPixels=t.roundPixels?1:0;for(let n=0;n<this.runners.init.items.length;n++)await this.runners.init.items[n].init(t);this._initOptions=t}render(t,e){this.tick++;let n=t;if(n instanceof rn&&(n={container:n},e&&(ce(Le,"passing a second argument is deprecated, please use render options instead"),n.target=e.renderTexture)),n.target||(n.target=this.view.renderTarget),n.target===this.view.renderTarget&&(this._lastObjectRendered=n.container,n.clearColor??(n.clearColor=this.background.colorRgba),n.clear??(n.clear=this.background.clearBeforeRender)),n.clearColor){const s=Array.isArray(n.clearColor)&&n.clearColor.length===4;n.clearColor=s?n.clearColor:He.shared.setValue(n.clearColor).toArray()}n.transform||(n.container.updateLocalTransform(),n.transform=n.container.localTransform),n.container.visible&&(n.container.enableRenderGroup(),this.runners.prerender.emit(n),this.runners.renderStart.emit(n),this.runners.render.emit(n),this.runners.renderEnd.emit(n),this.runners.postrender.emit(n))}resize(t,e,n){const s=this.view.resolution;this.view.resize(t,e,n),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),n!==void 0&&n!==s&&this.runners.resolutionChange.emit(n)}clear(t={}){const e=this;t.target||(t.target=e.renderTarget.renderTarget),t.clearColor||(t.clearColor=this.background.colorRgba),t.clear??(t.clear=Qf.ALL);const{clear:n,clearColor:s,target:r,mipLevel:a,layer:o}=t;He.shared.setValue(s??this.background.colorRgba),e.renderTarget.clear(r,n,He.shared.toArray(),a??0,o??0)}get resolution(){return this.view.resolution}set resolution(t){this.view.resolution=t,this.runners.resolutionChange.emit(t)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...t){t.forEach(e=>{this.runners[e]=new F_(e)})}_addSystems(t){let e;for(e in t){const n=t[e];this._addSystem(n.value,n.name)}}_addSystem(t,e){const n=new t(this);if(this[e])throw new Error(`Whoops! The name "${e}" is already in use`);this[e]=n,this._systemsHash[e]=n;for(const s in this.runners)this.runners[s].add(n);return this}_addPipes(t,e){const n=e.reduce((s,r)=>(s[r.name]=r.value,s),{});t.forEach(s=>{const r=s.value,a=s.name,o=n[a];this.renderPipes[a]=new r(this,o?new o:null),this.runners.destroy.add(this.renderPipes[a])})}destroy(t=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(t),(t===!0||typeof t=="object"&&t.releaseGlobalResources)&&Vr.release(),Object.values(this.runners).forEach(e=>{e.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(t){return this.textureGenerator.generateTexture(t)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!__())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};tp.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let np=tp,ca;function O_(i){return ca!==void 0||(ca=(()=>{const t={stencil:!0,failIfMajorPerformanceCaveat:i??np.defaultOptions.failIfMajorPerformanceCaveat};try{if(!xn.get().getWebGLRenderingContext())return!1;let n=xn.get().createCanvas().getContext("webgl",t);const s=!!n?.getContextAttributes()?.stencil;if(n){const r=n.getExtension("WEBGL_lose_context");r&&r.loseContext()}return n=null,s}catch{return!1}})()),ca}let ha;async function B_(i={}){return ha!==void 0||(ha=await(async()=>{const t=xn.get().getNavigator().gpu;if(!t)return!1;try{return await(await t.requestAdapter(i)).requestDevice(),!0}catch{return!1}})()),ha}const cu=["webgl","webgpu","canvas"];async function k_(i){let t=[];i.preference?(t.push(i.preference),cu.forEach(r=>{r!==i.preference&&t.push(r)})):t=cu.slice();let e,n={};for(let r=0;r<t.length;r++){const a=t[r];if(a==="webgpu"&&await B_()){const{WebGPURenderer:o}=await wr(async()=>{const{WebGPURenderer:l}=await import("./WebGPURenderer-BSuB32Rp.js");return{WebGPURenderer:l}},__vite__mapDeps([3,4,5,2]));e=o,n={...i,...i.webgpu};break}else if(a==="webgl"&&O_(i.failIfMajorPerformanceCaveat??np.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:o}=await wr(async()=>{const{WebGLRenderer:l}=await import("./WebGLRenderer-BSzPmBsP.js");return{WebGLRenderer:l}},__vite__mapDeps([6,4,5,2]));e=o,n={...i,...i.webgl};break}else if(a==="canvas"){const{CanvasRenderer:o}=await wr(async()=>{const{CanvasRenderer:l}=await import("./CanvasRenderer-Dx_6pwIA.js");return{CanvasRenderer:l}},__vite__mapDeps([7,5,2]));e=o,n={...i,...i.canvasOptions};break}}if(delete n.webgpu,delete n.webgl,delete n.canvasOptions,!e)throw new Error("No available renderer for the current environment");const s=new e;return await s.init(n),s}const ip="8.16.0";class sp{static init(){globalThis.__PIXI_APP_INIT__?.(this,ip)}static destroy(){}}sp.extension=qt.Application;class G_{constructor(t){this._renderer=t}init(){globalThis.__PIXI_RENDERER_INIT__?.(this._renderer,ip)}destroy(){this._renderer=null}}G_.extension={type:[qt.WebGLSystem,qt.WebGPUSystem],name:"initHook",priority:-10};class rp{static init(t){Object.defineProperty(this,"resizeTo",{configurable:!0,set(e){globalThis.removeEventListener("resize",this.queueResize),this._resizeTo=e,e&&(globalThis.addEventListener("resize",this.queueResize),this.resize())},get(){return this._resizeTo}}),this.queueResize=()=>{this._resizeTo&&(this._cancelResize(),this._resizeId=requestAnimationFrame(()=>this.resize()))},this._cancelResize=()=>{this._resizeId&&(cancelAnimationFrame(this._resizeId),this._resizeId=null)},this.resize=()=>{if(!this._resizeTo)return;this._cancelResize();let e,n;if(this._resizeTo===globalThis.window)e=globalThis.innerWidth,n=globalThis.innerHeight;else{const{clientWidth:s,clientHeight:r}=this._resizeTo;e=s,n=r}this.renderer.resize(e,n),this.render()},this._resizeId=null,this._resizeTo=null,this.resizeTo=t.resizeTo||null}static destroy(){globalThis.removeEventListener("resize",this.queueResize),this._cancelResize(),this._cancelResize=null,this.queueResize=null,this.resizeTo=null,this.resize=null}}rp.extension=qt.Application;class ap{static init(t){t=Object.assign({autoStart:!0,sharedTicker:!1},t),Object.defineProperty(this,"ticker",{configurable:!0,set(e){this._ticker&&this._ticker.remove(this.render,this),this._ticker=e,e&&e.add(this.render,this,qa.LOW)},get(){return this._ticker}}),this.stop=()=>{this._ticker.stop()},this.start=()=>{this._ticker.start()},this._ticker=null,this.ticker=t.sharedTicker?Hs.shared:new Hs,t.autoStart&&this.start()}static destroy(){if(this._ticker){const t=this._ticker;this.ticker=null,t.destroy()}}}ap.extension=qt.Application;Be.add(rp);Be.add(ap);const op=class jl{constructor(...t){this.stage=new rn,t[0]!==void 0&&ce(Le,"Application constructor options are deprecated, please use Application.init() instead.")}async init(t){t={...t},this.stage||(this.stage=new rn),this.renderer=await k_(t),jl._plugins.forEach(e=>{e.init.call(this,t)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return ce(Le,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(t=!1,e=!1){const n=jl._plugins.slice(0);n.reverse(),n.forEach(s=>{s.destroy.call(this)}),this.stage.destroy(e),this.stage=null,this.renderer.destroy(t),this.renderer=null}};op._plugins=[];let lp=op;Be.handleByList(qt.Application,lp._plugins);Be.add(sp);var Wo,hu;function z_(){if(hu)return Wo;hu=1,Wo=e;var i={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},t=/([astvzqmhlc])([^astvzqmhlc]*)/ig;function e(r){var a=[];return r.replace(t,function(o,l,c){var h=l.toLowerCase();for(c=s(c),h=="m"&&c.length>2&&(a.push([l].concat(c.splice(0,2))),h="l",l=l=="m"?"l":"L");;){if(c.length==i[h])return c.unshift(l),a.push(c);if(c.length<i[h])throw new Error("malformed path data");a.push([l].concat(c.splice(0,i[h])))}}),a}var n=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;function s(r){var a=r.match(n);return a?a.map(Number):[]}return Wo}var H_=z_();const V_=of(H_);function W_(i,t){const e=V_(i),n=[];let s=null,r=0,a=0;for(let o=0;o<e.length;o++){const l=e[o],c=l[0],h=l;switch(c){case"M":r=h[1],a=h[2],t.moveTo(r,a);break;case"m":r+=h[1],a+=h[2],t.moveTo(r,a);break;case"H":r=h[1],t.lineTo(r,a);break;case"h":r+=h[1],t.lineTo(r,a);break;case"V":a=h[1],t.lineTo(r,a);break;case"v":a+=h[1],t.lineTo(r,a);break;case"L":r=h[1],a=h[2],t.lineTo(r,a);break;case"l":r+=h[1],a+=h[2],t.lineTo(r,a);break;case"C":r=h[5],a=h[6],t.bezierCurveTo(h[1],h[2],h[3],h[4],r,a);break;case"c":t.bezierCurveTo(r+h[1],a+h[2],r+h[3],a+h[4],r+h[5],a+h[6]),r+=h[5],a+=h[6];break;case"S":r=h[3],a=h[4],t.bezierCurveToShort(h[1],h[2],r,a);break;case"s":t.bezierCurveToShort(r+h[1],a+h[2],r+h[3],a+h[4]),r+=h[3],a+=h[4];break;case"Q":r=h[3],a=h[4],t.quadraticCurveTo(h[1],h[2],r,a);break;case"q":t.quadraticCurveTo(r+h[1],a+h[2],r+h[3],a+h[4]),r+=h[3],a+=h[4];break;case"T":r=h[1],a=h[2],t.quadraticCurveToShort(r,a);break;case"t":r+=h[1],a+=h[2],t.quadraticCurveToShort(r,a);break;case"A":r=h[6],a=h[7],t.arcToSvg(h[1],h[2],h[3],h[4],h[5],r,a);break;case"a":r+=h[6],a+=h[7],t.arcToSvg(h[1],h[2],h[3],h[4],h[5],r,a);break;case"Z":case"z":t.closePath(),n.length>0&&(s=n.pop(),s?(r=s.startX,a=s.startY):(r=0,a=0)),s=null;break;default:on(`Unknown SVG path command: ${c}`)}c!=="Z"&&c!=="z"&&s===null&&(s={startX:r,startY:a},n.push(s))}return t}class rh{constructor(t=0,e=0,n=0){this.type="circle",this.x=t,this.y=e,this.radius=n}clone(){return new rh(this.x,this.y,this.radius)}contains(t,e){if(this.radius<=0)return!1;const n=this.radius*this.radius;let s=this.x-t,r=this.y-e;return s*=s,r*=r,s+r<=n}strokeContains(t,e,n,s=.5){if(this.radius===0)return!1;const r=this.x-t,a=this.y-e,o=this.radius,l=(1-s)*n,c=Math.sqrt(r*r+a*a);return c<=o+l&&c>o-(n-l)}getBounds(t){return t||(t=new Oe),t.x=this.x-this.radius,t.y=this.y-this.radius,t.width=this.radius*2,t.height=this.radius*2,t}copyFrom(t){return this.x=t.x,this.y=t.y,this.radius=t.radius,this}copyTo(t){return t.copyFrom(this),t}toString(){return`[pixi.js/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`}}class ah{constructor(t=0,e=0,n=0,s=0){this.type="ellipse",this.x=t,this.y=e,this.halfWidth=n,this.halfHeight=s}clone(){return new ah(this.x,this.y,this.halfWidth,this.halfHeight)}contains(t,e){if(this.halfWidth<=0||this.halfHeight<=0)return!1;let n=(t-this.x)/this.halfWidth,s=(e-this.y)/this.halfHeight;return n*=n,s*=s,n+s<=1}strokeContains(t,e,n,s=.5){const{halfWidth:r,halfHeight:a}=this;if(r<=0||a<=0)return!1;const o=n*(1-s),l=n-o,c=r-l,h=a-l,u=r+o,f=a+o,d=t-this.x,g=e-this.y,_=d*d/(c*c)+g*g/(h*h),m=d*d/(u*u)+g*g/(f*f);return _>1&&m<=1}getBounds(t){return t||(t=new Oe),t.x=this.x-this.halfWidth,t.y=this.y-this.halfHeight,t.width=this.halfWidth*2,t.height=this.halfHeight*2,t}copyFrom(t){return this.x=t.x,this.y=t.y,this.halfWidth=t.halfWidth,this.halfHeight=t.halfHeight,this}copyTo(t){return t.copyFrom(this),t}toString(){return`[pixi.js/math:Ellipse x=${this.x} y=${this.y} halfWidth=${this.halfWidth} halfHeight=${this.halfHeight}]`}}function X_(i,t,e,n,s,r){const a=i-e,o=t-n,l=s-e,c=r-n,h=a*l+o*c,u=l*l+c*c;let f=-1;u!==0&&(f=h/u);let d,g;f<0?(d=e,g=n):f>1?(d=s,g=r):(d=e+f*l,g=n+f*c);const _=i-d,m=t-g;return _*_+m*m}let Y_,$_;class Cr{constructor(...t){this.type="polygon";let e=Array.isArray(t[0])?t[0]:t;if(typeof e[0]!="number"){const n=[];for(let s=0,r=e.length;s<r;s++)n.push(e[s].x,e[s].y);e=n}this.points=e,this.closePath=!0}isClockwise(){let t=0;const e=this.points,n=e.length;for(let s=0;s<n;s+=2){const r=e[s],a=e[s+1],o=e[(s+2)%n],l=e[(s+3)%n];t+=(o-r)*(l+a)}return t<0}containsPolygon(t){const e=this.getBounds(Y_),n=t.getBounds($_);if(!e.containsRect(n))return!1;const s=t.points;for(let r=0;r<s.length;r+=2){const a=s[r],o=s[r+1];if(!this.contains(a,o))return!1}return!0}clone(){const t=this.points.slice(),e=new Cr(t);return e.closePath=this.closePath,e}contains(t,e){let n=!1;const s=this.points.length/2;for(let r=0,a=s-1;r<s;a=r++){const o=this.points[r*2],l=this.points[r*2+1],c=this.points[a*2],h=this.points[a*2+1];l>e!=h>e&&t<(c-o)*((e-l)/(h-l))+o&&(n=!n)}return n}strokeContains(t,e,n,s=.5){const r=n*n,a=r*(1-s),o=r-a,{points:l}=this,c=l.length-(this.closePath?0:2);for(let h=0;h<c;h+=2){const u=l[h],f=l[h+1],d=l[(h+2)%l.length],g=l[(h+3)%l.length],_=X_(t,e,u,f,d,g),m=Math.sign((d-u)*(e-f)-(g-f)*(t-u));if(_<=(m<0?o:a))return!0}return!1}getBounds(t){t||(t=new Oe);const e=this.points;let n=1/0,s=-1/0,r=1/0,a=-1/0;for(let o=0,l=e.length;o<l;o+=2){const c=e[o],h=e[o+1];n=c<n?c:n,s=c>s?c:s,r=h<r?h:r,a=h>a?h:a}return t.x=n,t.width=s-n,t.y=r,t.height=a-r,t}copyFrom(t){return this.points=t.points.slice(),this.closePath=t.closePath,this}copyTo(t){return t.copyFrom(this),t}toString(){return`[pixi.js/math:PolygoncloseStroke=${this.closePath}points=${this.points.reduce((t,e)=>`${t}, ${e}`,"")}]`}get lastX(){return this.points[this.points.length-2]}get lastY(){return this.points[this.points.length-1]}get x(){return ce("8.11.0","Polygon.lastX is deprecated, please use Polygon.lastX instead."),this.points[this.points.length-2]}get y(){return ce("8.11.0","Polygon.y is deprecated, please use Polygon.lastY instead."),this.points[this.points.length-1]}get startX(){return this.points[0]}get startY(){return this.points[1]}}const ua=(i,t,e,n,s,r,a)=>{const o=i-e,l=t-n,c=Math.sqrt(o*o+l*l);return c>=s-r&&c<=s+a};class oh{constructor(t=0,e=0,n=0,s=0,r=20){this.type="roundedRectangle",this.x=t,this.y=e,this.width=n,this.height=s,this.radius=r}getBounds(t){return t||(t=new Oe),t.x=this.x,t.y=this.y,t.width=this.width,t.height=this.height,t}clone(){return new oh(this.x,this.y,this.width,this.height,this.radius)}copyFrom(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this}copyTo(t){return t.copyFrom(this),t}contains(t,e){if(this.width<=0||this.height<=0)return!1;if(t>=this.x&&t<=this.x+this.width&&e>=this.y&&e<=this.y+this.height){const n=Math.max(0,Math.min(this.radius,Math.min(this.width,this.height)/2));if(e>=this.y+n&&e<=this.y+this.height-n||t>=this.x+n&&t<=this.x+this.width-n)return!0;let s=t-(this.x+n),r=e-(this.y+n);const a=n*n;if(s*s+r*r<=a||(s=t-(this.x+this.width-n),s*s+r*r<=a)||(r=e-(this.y+this.height-n),s*s+r*r<=a)||(s=t-(this.x+n),s*s+r*r<=a))return!0}return!1}strokeContains(t,e,n,s=.5){const{x:r,y:a,width:o,height:l,radius:c}=this,h=n*(1-s),u=n-h,f=r+c,d=a+c,g=o-c*2,_=l-c*2,m=r+o,p=a+l;return(t>=r-h&&t<=r+u||t>=m-u&&t<=m+h)&&e>=d&&e<=d+_||(e>=a-h&&e<=a+u||e>=p-u&&e<=p+h)&&t>=f&&t<=f+g?!0:t<f&&e<d&&ua(t,e,f,d,c,u,h)||t>m-c&&e<d&&ua(t,e,m-c,d,c,u,h)||t>m-c&&e>p-c&&ua(t,e,m-c,p-c,c,u,h)||t<f&&e>p-c&&ua(t,e,f,p-c,c,u,h)}toString(){return`[pixi.js/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`}}const cp={};function q_(i,t,e){let n=2166136261;for(let s=0;s<t;s++)n^=i[s].uid,n=Math.imul(n,16777619),n>>>=0;return cp[n]||j_(i,t,n,e)}function j_(i,t,e,n){const s={};let r=0;for(let o=0;o<n;o++){const l=o<t?i[o]:ye.EMPTY.source;s[r++]=l.source,s[r++]=l.style}const a=new Ga(s);return cp[e]=a,a}class uu{constructor(t){typeof t=="number"?this.rawBinaryData=new ArrayBuffer(t):t instanceof Uint8Array?this.rawBinaryData=t.buffer:this.rawBinaryData=t,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData),this.size=this.rawBinaryData.byteLength}get int8View(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View}get uint8View(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View}get int16View(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View}get int32View(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View}get float64View(){return this._float64Array||(this._float64Array=new Float64Array(this.rawBinaryData)),this._float64Array}get bigUint64View(){return this._bigUint64Array||(this._bigUint64Array=new BigUint64Array(this.rawBinaryData)),this._bigUint64Array}view(t){return this[`${t}View`]}destroy(){this.rawBinaryData=null,this.uint32View=null,this.float32View=null,this.uint16View=null,this._int8View=null,this._uint8View=null,this._int16View=null,this._int32View=null,this._float64Array=null,this._bigUint64Array=null}static sizeOf(t){switch(t){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(`${t} isn't a valid view type`)}}}function du(i,t,e,n){if(e??(e=0),n??(n=Math.min(i.byteLength-e,t.byteLength)),!(e&7)&&!(n&7)){const s=n/8;new Float64Array(t,0,s).set(new Float64Array(i,e,s))}else if(!(e&3)&&!(n&3)){const s=n/4;new Float32Array(t,0,s).set(new Float32Array(i,e,s))}else new Uint8Array(t).set(new Uint8Array(i,e,n))}const K_={normal:"normal-npm",add:"add-npm",screen:"screen-npm"};var Z_=(i=>(i[i.DISABLED=0]="DISABLED",i[i.RENDERING_MASK_ADD=1]="RENDERING_MASK_ADD",i[i.MASK_ACTIVE=2]="MASK_ACTIVE",i[i.INVERSE_MASK_ACTIVE=3]="INVERSE_MASK_ACTIVE",i[i.RENDERING_MASK_REMOVE=4]="RENDERING_MASK_REMOVE",i[i.NONE=5]="NONE",i))(Z_||{});function fu(i,t){return t.alphaMode==="no-premultiply-alpha"&&K_[i]||i}const J_=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join(`
`);function Q_(i){let t="";for(let e=0;e<i;++e)e>0&&(t+=`
else `),e<i-1&&(t+=`if(test == ${e}.0){}`);return t}function t0(i,t){if(i===0)throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");const e=t.createShader(t.FRAGMENT_SHADER);try{for(;;){const n=J_.replace(/%forloop%/gi,Q_(i));if(t.shaderSource(e,n),t.compileShader(e),!t.getShaderParameter(e,t.COMPILE_STATUS))i=i/2|0;else break}}finally{t.deleteShader(e)}return i}let Ss=null;function e0(){if(Ss)return Ss;const i=Gf();return Ss=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),Ss=t0(Ss,i),i.getExtension("WEBGL_lose_context")?.loseContext(),Ss}class n0{constructor(){this.ids=Object.create(null),this.textures=[],this.count=0}clear(){for(let t=0;t<this.count;t++){const e=this.textures[t];this.textures[t]=null,this.ids[e.uid]=null}this.count=0}}class i0{constructor(){this.renderPipeId="batch",this.action="startBatch",this.start=0,this.size=0,this.textures=new n0,this.blendMode="normal",this.topology="triangle-strip",this.canBundle=!0}destroy(){this.textures=null,this.gpuBindGroup=null,this.bindGroup=null,this.batcher=null,this.elements=null}}const Rr=[];let ja=0;Vr.register({clear:()=>{if(Rr.length>0)for(const i of Rr)i&&i.destroy();Rr.length=0,ja=0}});function pu(){return ja>0?Rr[--ja]:new i0}function mu(i){i.elements=null,Rr[ja++]=i}let hr=0;const hp=class up{constructor(t){this.uid=Ue("batcher"),this.dirty=!0,this.batchIndex=0,this.batches=[],this._elements=[],t={...up.defaultOptions,...t},t.maxTextures||(ce("v8.8.0","maxTextures is a required option for Batcher now, please pass it in the options"),t.maxTextures=e0());const{maxTextures:e,attributesInitialSize:n,indicesInitialSize:s}=t;this.attributeBuffer=new uu(n*4),this.indexBuffer=new Uint16Array(s),this.maxTextures=e}begin(){this.elementSize=0,this.elementStart=0,this.indexSize=0,this.attributeSize=0;for(let t=0;t<this.batchIndex;t++)mu(this.batches[t]);this.batchIndex=0,this._batchIndexStart=0,this._batchIndexSize=0,this.dirty=!0}add(t){this._elements[this.elementSize++]=t,t._indexStart=this.indexSize,t._attributeStart=this.attributeSize,t._batcher=this,this.indexSize+=t.indexSize,this.attributeSize+=t.attributeSize*this.vertexSize}checkAndUpdateTexture(t,e){const n=t._batch.textures.ids[e._source.uid];return!n&&n!==0?!1:(t._textureId=n,t.texture=e,!0)}updateElement(t){this.dirty=!0;const e=this.attributeBuffer;t.packAsQuad?this.packQuadAttributes(t,e.float32View,e.uint32View,t._attributeStart,t._textureId):this.packAttributes(t,e.float32View,e.uint32View,t._attributeStart,t._textureId)}break(t){const e=this._elements;if(!e[this.elementStart])return;let n=pu(),s=n.textures;s.clear();const r=e[this.elementStart];let a=fu(r.blendMode,r.texture._source),o=r.topology;this.attributeSize*4>this.attributeBuffer.size&&this._resizeAttributeBuffer(this.attributeSize*4),this.indexSize>this.indexBuffer.length&&this._resizeIndexBuffer(this.indexSize);const l=this.attributeBuffer.float32View,c=this.attributeBuffer.uint32View,h=this.indexBuffer;let u=this._batchIndexSize,f=this._batchIndexStart,d="startBatch",g=[];const _=this.maxTextures;for(let m=this.elementStart;m<this.elementSize;++m){const p=e[m];e[m]=null;const S=p.texture._source,v=fu(p.blendMode,S),T=a!==v||o!==p.topology;if(S._batchTick===hr&&!T){p._textureId=S._textureBindLocation,u+=p.indexSize,p.packAsQuad?(this.packQuadAttributes(p,l,c,p._attributeStart,p._textureId),this.packQuadIndex(h,p._indexStart,p._attributeStart/this.vertexSize)):(this.packAttributes(p,l,c,p._attributeStart,p._textureId),this.packIndex(p,h,p._indexStart,p._attributeStart/this.vertexSize)),p._batch=n,g.push(p);continue}S._batchTick=hr,(s.count>=_||T)&&(this._finishBatch(n,f,u-f,s,a,o,t,d,g),d="renderBatch",f=u,a=v,o=p.topology,n=pu(),s=n.textures,s.clear(),g=[],++hr),p._textureId=S._textureBindLocation=s.count,s.ids[S.uid]=s.count,s.textures[s.count++]=S,p._batch=n,g.push(p),u+=p.indexSize,p.packAsQuad?(this.packQuadAttributes(p,l,c,p._attributeStart,p._textureId),this.packQuadIndex(h,p._indexStart,p._attributeStart/this.vertexSize)):(this.packAttributes(p,l,c,p._attributeStart,p._textureId),this.packIndex(p,h,p._indexStart,p._attributeStart/this.vertexSize))}s.count>0&&(this._finishBatch(n,f,u-f,s,a,o,t,d,g),f=u,++hr),this.elementStart=this.elementSize,this._batchIndexStart=f,this._batchIndexSize=u}_finishBatch(t,e,n,s,r,a,o,l,c){t.gpuBindGroup=null,t.bindGroup=null,t.action=l,t.batcher=this,t.textures=s,t.blendMode=r,t.topology=a,t.start=e,t.size=n,t.elements=c,++hr,this.batches[this.batchIndex++]=t,o.add(t)}finish(t){this.break(t)}ensureAttributeBuffer(t){t*4<=this.attributeBuffer.size||this._resizeAttributeBuffer(t*4)}ensureIndexBuffer(t){t<=this.indexBuffer.length||this._resizeIndexBuffer(t)}_resizeAttributeBuffer(t){const e=Math.max(t,this.attributeBuffer.size*2),n=new uu(e);du(this.attributeBuffer.rawBinaryData,n.rawBinaryData),this.attributeBuffer=n}_resizeIndexBuffer(t){const e=this.indexBuffer;let n=Math.max(t,e.length*1.5);n+=n%2;const s=n>65535?new Uint32Array(n):new Uint16Array(n);if(s.BYTES_PER_ELEMENT!==e.BYTES_PER_ELEMENT)for(let r=0;r<e.length;r++)s[r]=e[r];else du(e.buffer,s.buffer);this.indexBuffer=s}packQuadIndex(t,e,n){t[e]=n+0,t[e+1]=n+1,t[e+2]=n+2,t[e+3]=n+0,t[e+4]=n+2,t[e+5]=n+3}packIndex(t,e,n,s){const r=t.indices,a=t.indexSize,o=t.indexOffset,l=t.attributeOffset;for(let c=0;c<a;c++)e[n++]=s+r[c+o]-l}destroy(t={}){if(this.batches!==null){for(let e=0;e<this.batchIndex;e++)mu(this.batches[e]);this.batches=null,this.geometry.destroy(!0),this.geometry=null,t.shader&&(this.shader?.destroy(),this.shader=null);for(let e=0;e<this._elements.length;e++)this._elements[e]&&(this._elements[e]._batch=null);this._elements=null,this.indexBuffer=null,this.attributeBuffer.destroy(),this.attributeBuffer=null}}};hp.defaultOptions={maxTextures:null,attributesInitialSize:4,indicesInitialSize:6};let s0=hp;var dn=(i=>(i[i.MAP_READ=1]="MAP_READ",i[i.MAP_WRITE=2]="MAP_WRITE",i[i.COPY_SRC=4]="COPY_SRC",i[i.COPY_DST=8]="COPY_DST",i[i.INDEX=16]="INDEX",i[i.VERTEX=32]="VERTEX",i[i.UNIFORM=64]="UNIFORM",i[i.STORAGE=128]="STORAGE",i[i.INDIRECT=256]="INDIRECT",i[i.QUERY_RESOLVE=512]="QUERY_RESOLVE",i[i.STATIC=1024]="STATIC",i))(dn||{});class Or extends ii{constructor(t){let{data:e,size:n}=t;const{usage:s,label:r,shrinkToFit:a}=t;super(),this._gpuData=Object.create(null),this._gcLastUsed=-1,this.autoGarbageCollect=!0,this.uid=Ue("buffer"),this._resourceType="buffer",this._resourceId=Ue("resource"),this._touched=0,this._updateID=1,this._dataInt32=null,this.shrinkToFit=!0,this.destroyed=!1,e instanceof Array&&(e=new Float32Array(e)),this._data=e,n??(n=e?.byteLength);const o=!!e;this.descriptor={size:n,usage:s,mappedAtCreation:o,label:r},this.shrinkToFit=a??!0}get data(){return this._data}set data(t){this.setDataWithSize(t,t.length,!0)}get dataInt32(){return this._dataInt32||(this._dataInt32=new Int32Array(this.data.buffer)),this._dataInt32}get static(){return!!(this.descriptor.usage&dn.STATIC)}set static(t){t?this.descriptor.usage|=dn.STATIC:this.descriptor.usage&=~dn.STATIC}setDataWithSize(t,e,n){if(this._updateID++,this._updateSize=e*t.BYTES_PER_ELEMENT,this._data===t){n&&this.emit("update",this);return}const s=this._data;if(this._data=t,this._dataInt32=null,!s||s.length!==t.length){!this.shrinkToFit&&s&&t.byteLength<s.byteLength?n&&this.emit("update",this):(this.descriptor.size=t.byteLength,this._resourceId=Ue("resource"),this.emit("change",this));return}n&&this.emit("update",this)}update(t){this._updateSize=t??this._updateSize,this._updateID++,this.emit("update",this)}unload(){this.emit("unload",this);for(const t in this._gpuData)this._gpuData[t]?.destroy();this._gpuData=Object.create(null)}destroy(){this.destroyed=!0,this.unload(),this.emit("destroy",this),this.emit("change",this),this._data=null,this.descriptor=null,this.removeAllListeners()}}function dp(i,t){if(!(i instanceof Or)){let e=t?dn.INDEX:dn.VERTEX;i instanceof Array&&(t?(i=new Uint32Array(i),e=dn.INDEX|dn.COPY_DST):(i=new Float32Array(i),e=dn.VERTEX|dn.COPY_DST)),i=new Or({data:i,label:t?"index-mesh-buffer":"vertex-mesh-buffer",usage:e})}return i}function r0(i,t,e){const n=i.getAttribute(t);if(!n)return e.minX=0,e.minY=0,e.maxX=0,e.maxY=0,e;const s=n.buffer.data;let r=1/0,a=1/0,o=-1/0,l=-1/0;const c=s.BYTES_PER_ELEMENT,h=(n.offset||0)/c,u=(n.stride||8)/c;for(let f=h;f<s.length;f+=u){const d=s[f],g=s[f+1];d>o&&(o=d),g>l&&(l=g),d<r&&(r=d),g<a&&(a=g)}return e.minX=r,e.minY=a,e.maxX=o,e.maxY=l,e}function a0(i){return(i instanceof Or||Array.isArray(i)||i.BYTES_PER_ELEMENT)&&(i={buffer:i}),i.buffer=dp(i.buffer,!1),i}class o0 extends ii{constructor(t={}){super(),this._gpuData=Object.create(null),this.autoGarbageCollect=!0,this._gcLastUsed=-1,this.uid=Ue("geometry"),this._layoutKey=0,this.instanceCount=1,this._bounds=new In,this._boundsDirty=!0;const{attributes:e,indexBuffer:n,topology:s}=t;if(this.buffers=[],this.attributes={},e)for(const r in e)this.addAttribute(r,e[r]);this.instanceCount=t.instanceCount??1,n&&this.addIndex(n),this.topology=s||"triangle-list"}onBufferUpdate(){this._boundsDirty=!0,this.emit("update",this)}getAttribute(t){return this.attributes[t]}getIndex(){return this.indexBuffer}getBuffer(t){return this.getAttribute(t).buffer}getSize(){for(const t in this.attributes){const e=this.attributes[t];return e.buffer.data.length/(e.stride/4||e.size)}return 0}addAttribute(t,e){const n=a0(e);this.buffers.indexOf(n.buffer)===-1&&(this.buffers.push(n.buffer),n.buffer.on("update",this.onBufferUpdate,this),n.buffer.on("change",this.onBufferUpdate,this)),this.attributes[t]=n}addIndex(t){this.indexBuffer=dp(t,!0),this.buffers.push(this.indexBuffer)}get bounds(){return this._boundsDirty?(this._boundsDirty=!1,r0(this,"aPosition",this._bounds)):this._bounds}unload(){this.emit("unload",this);for(const t in this._gpuData)this._gpuData[t]?.destroy();this._gpuData=Object.create(null)}destroy(t=!1){this.emit("destroy",this),this.removeAllListeners(),t&&this.buffers.forEach(e=>e.destroy()),this.unload(),this.indexBuffer?.destroy(),this.attributes=null,this.buffers=null,this.indexBuffer=null,this._bounds=null}}const l0=new Float32Array(1),c0=new Uint32Array(1);class h0 extends o0{constructor(){const e=new Or({data:l0,label:"attribute-batch-buffer",usage:dn.VERTEX|dn.COPY_DST,shrinkToFit:!1}),n=new Or({data:c0,label:"index-batch-buffer",usage:dn.INDEX|dn.COPY_DST,shrinkToFit:!1}),s=24;super({attributes:{aPosition:{buffer:e,format:"float32x2",stride:s,offset:0},aUV:{buffer:e,format:"float32x2",stride:s,offset:8},aColor:{buffer:e,format:"unorm8x4",stride:s,offset:16},aTextureIdAndRound:{buffer:e,format:"uint16x2",stride:s,offset:20}},indexBuffer:n})}}function gu(i,t,e){if(i)for(const n in i){const s=n.toLocaleLowerCase(),r=t[s];if(r){let a=i[n];n==="header"&&(a=a.replace(/@in\s+[^;]+;\s*/g,"").replace(/@out\s+[^;]+;\s*/g,"")),e&&r.push(`//----${e}----//`),r.push(a)}else on(`${n} placement hook does not exist in shader`)}}const u0=/\{\{(.*?)\}\}/g;function _u(i){const t={};return(i.match(u0)?.map(n=>n.replace(/[{()}]/g,""))??[]).forEach(n=>{t[n]=[]}),t}function xu(i,t){let e;const n=/@in\s+([^;]+);/g;for(;(e=n.exec(i))!==null;)t.push(e[1])}function vu(i,t,e=!1){const n=[];xu(t,n),i.forEach(o=>{o.header&&xu(o.header,n)});const s=n;e&&s.sort();const r=s.map((o,l)=>`       @location(${l}) ${o},`).join(`
`);let a=t.replace(/@in\s+[^;]+;\s*/g,"");return a=a.replace("{{in}}",`
${r}
`),a}function yu(i,t){let e;const n=/@out\s+([^;]+);/g;for(;(e=n.exec(i))!==null;)t.push(e[1])}function d0(i){const e=/\b(\w+)\s*:/g.exec(i);return e?e[1]:""}function f0(i){const t=/@.*?\s+/g;return i.replace(t,"")}function p0(i,t){const e=[];yu(t,e),i.forEach(l=>{l.header&&yu(l.header,e)});let n=0;const s=e.sort().map(l=>l.indexOf("builtin")>-1?l:`@location(${n++}) ${l}`).join(`,
`),r=e.sort().map(l=>`       var ${f0(l)};`).join(`
`),a=`return VSOutput(
            ${e.sort().map(l=>` ${d0(l)}`).join(`,
`)});`;let o=t.replace(/@out\s+[^;]+;\s*/g,"");return o=o.replace("{{struct}}",`
${s}
`),o=o.replace("{{start}}",`
${r}
`),o=o.replace("{{return}}",`
${a}
`),o}function Su(i,t){let e=i;for(const n in t){const s=t[n];s.join(`
`).length?e=e.replace(`{{${n}}}`,`//-----${n} START-----//
${s.join(`
`)}
//----${n} FINISH----//`):e=e.replace(`{{${n}}}`,"")}return e}const Oi=Object.create(null),Xo=new Map;let m0=0;function g0({template:i,bits:t}){const e=fp(i,t);if(Oi[e])return Oi[e];const{vertex:n,fragment:s}=x0(i,t);return Oi[e]=pp(n,s,t),Oi[e]}function _0({template:i,bits:t}){const e=fp(i,t);return Oi[e]||(Oi[e]=pp(i.vertex,i.fragment,t)),Oi[e]}function x0(i,t){const e=t.map(a=>a.vertex).filter(a=>!!a),n=t.map(a=>a.fragment).filter(a=>!!a);let s=vu(e,i.vertex,!0);s=p0(e,s);const r=vu(n,i.fragment,!0);return{vertex:s,fragment:r}}function fp(i,t){return t.map(e=>(Xo.has(e)||Xo.set(e,m0++),Xo.get(e))).sort((e,n)=>e-n).join("-")+i.vertex+i.fragment}function pp(i,t,e){const n=_u(i),s=_u(t);return e.forEach(r=>{gu(r.vertex,n,r.name),gu(r.fragment,s,r.name)}),{vertex:Su(i,n),fragment:Su(t,s)}}const v0=`
    @in aPosition: vec2<f32>;
    @in aUV: vec2<f32>;

    @out @builtin(position) vPosition: vec4<f32>;
    @out vUV : vec2<f32>;
    @out vColor : vec4<f32>;

    {{header}}

    struct VSOutput {
        {{struct}}
    };

    @vertex
    fn main( {{in}} ) -> VSOutput {

        var worldTransformMatrix = globalUniforms.uWorldTransformMatrix;
        var modelMatrix = mat3x3<f32>(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        var position = aPosition;
        var uv = aUV;

        {{start}}

        vColor = vec4<f32>(1., 1., 1., 1.);

        {{main}}

        vUV = uv;

        var modelViewProjectionMatrix = globalUniforms.uProjectionMatrix * worldTransformMatrix * modelMatrix;

        vPosition =  vec4<f32>((modelViewProjectionMatrix *  vec3<f32>(position, 1.0)).xy, 0.0, 1.0);

        vColor *= globalUniforms.uWorldColorAlpha;

        {{end}}

        {{return}}
    };
`,y0=`
    @in vUV : vec2<f32>;
    @in vColor : vec4<f32>;

    {{header}}

    @fragment
    fn main(
        {{in}}
      ) -> @location(0) vec4<f32> {

        {{start}}

        var outColor:vec4<f32>;

        {{main}}

        var finalColor:vec4<f32> = outColor * vColor;

        {{end}}

        return finalColor;
      };
`,S0=`
    in vec2 aPosition;
    in vec2 aUV;

    out vec4 vColor;
    out vec2 vUV;

    {{header}}

    void main(void){

        mat3 worldTransformMatrix = uWorldTransformMatrix;
        mat3 modelMatrix = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        vec2 position = aPosition;
        vec2 uv = aUV;

        {{start}}

        vColor = vec4(1.);

        {{main}}

        vUV = uv;

        mat3 modelViewProjectionMatrix = uProjectionMatrix * worldTransformMatrix * modelMatrix;

        gl_Position = vec4((modelViewProjectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);

        vColor *= uWorldColorAlpha;

        {{end}}
    }
`,M0=`

    in vec4 vColor;
    in vec2 vUV;

    out vec4 finalColor;

    {{header}}

    void main(void) {

        {{start}}

        vec4 outColor;

        {{main}}

        finalColor = outColor * vColor;

        {{end}}
    }
`,b0={name:"global-uniforms-bit",vertex:{header:`
        struct GlobalUniforms {
            uProjectionMatrix:mat3x3<f32>,
            uWorldTransformMatrix:mat3x3<f32>,
            uWorldColorAlpha: vec4<f32>,
            uResolution: vec2<f32>,
        }

        @group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
        `}},T0={name:"global-uniforms-bit",vertex:{header:`
          uniform mat3 uProjectionMatrix;
          uniform mat3 uWorldTransformMatrix;
          uniform vec4 uWorldColorAlpha;
          uniform vec2 uResolution;
        `}};function E0({bits:i,name:t}){const e=g0({template:{fragment:y0,vertex:v0},bits:[b0,...i]});return so.from({name:t,vertex:{source:e.vertex,entryPoint:"main"},fragment:{source:e.fragment,entryPoint:"main"}})}function w0({bits:i,name:t}){return new Hf({name:t,..._0({template:{vertex:S0,fragment:M0},bits:[T0,...i]})})}const A0={name:"color-bit",vertex:{header:`
            @in aColor: vec4<f32>;
        `,main:`
            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);
        `}},C0={name:"color-bit",vertex:{header:`
            in vec4 aColor;
        `,main:`
            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);
        `}},Yo={};function R0(i){const t=[];if(i===1)t.push("@group(1) @binding(0) var textureSource1: texture_2d<f32>;"),t.push("@group(1) @binding(1) var textureSampler1: sampler;");else{let e=0;for(let n=0;n<i;n++)t.push(`@group(1) @binding(${e++}) var textureSource${n+1}: texture_2d<f32>;`),t.push(`@group(1) @binding(${e++}) var textureSampler${n+1}: sampler;`)}return t.join(`
`)}function P0(i){const t=[];if(i===1)t.push("outColor = textureSampleGrad(textureSource1, textureSampler1, vUV, uvDx, uvDy);");else{t.push("switch vTextureId {");for(let e=0;e<i;e++)e===i-1?t.push("  default:{"):t.push(`  case ${e}:{`),t.push(`      outColor = textureSampleGrad(textureSource${e+1}, textureSampler${e+1}, vUV, uvDx, uvDy);`),t.push("      break;}");t.push("}")}return t.join(`
`)}function I0(i){return Yo[i]||(Yo[i]={name:"texture-batch-bit",vertex:{header:`
                @in aTextureIdAndRound: vec2<u32>;
                @out @interpolate(flat) vTextureId : u32;
            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1)
                {
                    vPosition = vec4<f32>(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
                }
            `},fragment:{header:`
                @in @interpolate(flat) vTextureId: u32;

                ${R0(i)}
            `,main:`
                var uvDx = dpdx(vUV);
                var uvDy = dpdy(vUV);

                ${P0(i)}
            `}}),Yo[i]}const $o={};function D0(i){const t=[];for(let e=0;e<i;e++)e>0&&t.push("else"),e<i-1&&t.push(`if(vTextureId < ${e}.5)`),t.push("{"),t.push(`	outColor = texture(uTextures[${e}], vUV);`),t.push("}");return t.join(`
`)}function L0(i){return $o[i]||($o[i]={name:"texture-batch-bit",vertex:{header:`
                in vec2 aTextureIdAndRound;
                out float vTextureId;

            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1.)
                {
                    gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
                }
            `},fragment:{header:`
                in float vTextureId;

                uniform sampler2D uTextures[${i}];

            `,main:`

                ${D0(i)}
            `}}),$o[i]}const U0={name:"round-pixels-bit",vertex:{header:`
            fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32>
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},F0={name:"round-pixels-bit",vertex:{header:`
            vec2 roundPixels(vec2 position, vec2 targetSize)
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},Mu={};function N0(i){let t=Mu[i];if(t)return t;const e=new Int32Array(i);for(let n=0;n<i;n++)e[n]=n;return t=Mu[i]=new Yf({uTextures:{value:e,type:"i32",size:i}},{isStatic:!0}),t}class bu extends sh{constructor(t){const e=w0({name:"batch",bits:[C0,L0(t),F0]}),n=E0({name:"batch",bits:[A0,I0(t),U0]});super({glProgram:e,gpuProgram:n,resources:{batchSamplers:N0(t)}}),this.maxTextures=t}}let ur=null;const mp=class gp extends s0{constructor(t){super(t),this.geometry=new h0,this.name=gp.extension.name,this.vertexSize=6,ur??(ur=new bu(t.maxTextures)),this.shader=ur}packAttributes(t,e,n,s,r){const a=r<<16|t.roundPixels&65535,o=t.transform,l=o.a,c=o.b,h=o.c,u=o.d,f=o.tx,d=o.ty,{positions:g,uvs:_}=t,m=t.color,p=t.attributeOffset,M=p+t.attributeSize;for(let S=p;S<M;S++){const v=S*2,T=g[v],E=g[v+1];e[s++]=l*T+h*E+f,e[s++]=u*E+c*T+d,e[s++]=_[v],e[s++]=_[v+1],n[s++]=m,n[s++]=a}}packQuadAttributes(t,e,n,s,r){const a=t.texture,o=t.transform,l=o.a,c=o.b,h=o.c,u=o.d,f=o.tx,d=o.ty,g=t.bounds,_=g.maxX,m=g.minX,p=g.maxY,M=g.minY,S=a.uvs,v=t.color,T=r<<16|t.roundPixels&65535;e[s+0]=l*m+h*M+f,e[s+1]=u*M+c*m+d,e[s+2]=S.x0,e[s+3]=S.y0,n[s+4]=v,n[s+5]=T,e[s+6]=l*_+h*M+f,e[s+7]=u*M+c*_+d,e[s+8]=S.x1,e[s+9]=S.y1,n[s+10]=v,n[s+11]=T,e[s+12]=l*_+h*p+f,e[s+13]=u*p+c*_+d,e[s+14]=S.x2,e[s+15]=S.y2,n[s+16]=v,n[s+17]=T,e[s+18]=l*m+h*p+f,e[s+19]=u*p+c*m+d,e[s+20]=S.x3,e[s+21]=S.y3,n[s+22]=v,n[s+23]=T}_updateMaxTextures(t){this.shader.maxTextures!==t&&(ur=new bu(t),this.shader=ur)}destroy(){this.shader=null,super.destroy()}};mp.extension={type:[qt.Batcher],name:"default"};let O0=mp;class Wr{constructor(t){this.items=Object.create(null);const{renderer:e,type:n,onUnload:s,priority:r,name:a}=t;this._renderer=e,e.gc.addResourceHash(this,"items",n,r??0),this._onUnload=s,this.name=a}add(t){return this.items[t.uid]?!1:(this.items[t.uid]=t,t.once("unload",this.remove,this),t._gcLastUsed=this._renderer.gc.now,!0)}remove(t,...e){if(!this.items[t.uid])return;const n=t._gpuData[this._renderer.uid];n&&(this._onUnload?.(t,...e),n.destroy(),t._gpuData[this._renderer.uid]=null,this.items[t.uid]=null)}removeAll(...t){Object.values(this.items).forEach(e=>e&&this.remove(e,...t))}destroy(...t){this.removeAll(...t),this.items=Object.create(null),this._renderer=null,this._onUnload=null}}function B0(i,t,e,n,s,r,a,o=null){let l=0;e*=t,s*=r;const c=o.a,h=o.b,u=o.c,f=o.d,d=o.tx,g=o.ty;for(;l<a;){const _=i[e],m=i[e+1];n[s]=c*_+u*m+d,n[s+1]=h*_+f*m+g,s+=r,e+=t,l++}}function k0(i,t,e,n){let s=0;for(t*=e;s<n;)i[t]=0,i[t+1]=0,t+=e,s++}function _p(i,t,e,n,s){const r=t.a,a=t.b,o=t.c,l=t.d,c=t.tx,h=t.ty;e||(e=0),n||(n=2),s||(s=i.length/n-e);let u=e*n;for(let f=0;f<s;f++){const d=i[u],g=i[u+1];i[u]=r*d+o*g+c,i[u+1]=a*d+l*g+h,u+=n}}const G0=new ne;class lh{constructor(){this.packAsQuad=!1,this.batcherName="default",this.topology="triangle-list",this.applyTransform=!0,this.roundPixels=0,this._batcher=null,this._batch=null}get uvs(){return this.geometryData.uvs}get positions(){return this.geometryData.vertices}get indices(){return this.geometryData.indices}get blendMode(){return this.renderable&&this.applyTransform?this.renderable.groupBlendMode:"normal"}get color(){const t=this.baseColor,e=t>>16|t&65280|(t&255)<<16,n=this.renderable;return n?Sf(e,n.groupColor)+(this.alpha*n.groupAlpha*255<<24):e+(this.alpha*255<<24)}get transform(){return this.renderable?.groupTransform||G0}copyTo(t){t.indexOffset=this.indexOffset,t.indexSize=this.indexSize,t.attributeOffset=this.attributeOffset,t.attributeSize=this.attributeSize,t.baseColor=this.baseColor,t.alpha=this.alpha,t.texture=this.texture,t.geometryData=this.geometryData,t.topology=this.topology}reset(){this.applyTransform=!0,this.renderable=null,this.topology="triangle-list"}destroy(){this.renderable=null,this.texture=null,this.geometryData=null,this._batcher=null,this._batch=null}}const Br={extension:{type:qt.ShapeBuilder,name:"circle"},build(i,t){let e,n,s,r,a,o;if(i.type==="circle"){const v=i;if(a=o=v.radius,a<=0)return!1;e=v.x,n=v.y,s=r=0}else if(i.type==="ellipse"){const v=i;if(a=v.halfWidth,o=v.halfHeight,a<=0||o<=0)return!1;e=v.x,n=v.y,s=r=0}else{const v=i,T=v.width/2,E=v.height/2;e=v.x+T,n=v.y+E,a=o=Math.max(0,Math.min(v.radius,Math.min(T,E))),s=T-a,r=E-o}if(s<0||r<0)return!1;const l=Math.ceil(2.3*Math.sqrt(a+o)),c=l*8+(s?4:0)+(r?4:0);if(c===0)return!1;if(l===0)return t[0]=t[6]=e+s,t[1]=t[3]=n+r,t[2]=t[4]=e-s,t[5]=t[7]=n-r,!0;let h=0,u=l*4+(s?2:0)+2,f=u,d=c,g=s+a,_=r,m=e+g,p=e-g,M=n+_;if(t[h++]=m,t[h++]=M,t[--u]=M,t[--u]=p,r){const v=n-_;t[f++]=p,t[f++]=v,t[--d]=v,t[--d]=m}for(let v=1;v<l;v++){const T=Math.PI/2*(v/l),E=s+Math.cos(T)*a,A=r+Math.sin(T)*o,I=e+E,b=e-E,y=n+A,C=n-A;t[h++]=I,t[h++]=y,t[--u]=y,t[--u]=b,t[f++]=b,t[f++]=C,t[--d]=C,t[--d]=I}g=s,_=r+o,m=e+g,p=e-g,M=n+_;const S=n-_;return t[h++]=m,t[h++]=M,t[--d]=S,t[--d]=m,s&&(t[h++]=p,t[h++]=M,t[--d]=S,t[--d]=p),!0},triangulate(i,t,e,n,s,r){if(i.length===0)return;let a=0,o=0;for(let h=0;h<i.length;h+=2)a+=i[h],o+=i[h+1];a/=i.length/2,o/=i.length/2;let l=n;t[l*e]=a,t[l*e+1]=o;const c=l++;for(let h=0;h<i.length;h+=2)t[l*e]=i[h],t[l*e+1]=i[h+1],h>0&&(s[r++]=l,s[r++]=c,s[r++]=l-1),l++;s[r++]=c+1,s[r++]=c,s[r++]=l-1}},z0={...Br,extension:{...Br.extension,name:"ellipse"}},H0={...Br,extension:{...Br.extension,name:"roundedRectangle"}},xp=1e-4,Tu=1e-4;function V0(i){const t=i.length;if(t<6)return 1;let e=0;for(let n=0,s=i[t-2],r=i[t-1];n<t;n+=2){const a=i[n],o=i[n+1];e+=(a-s)*(o+r),s=a,r=o}return e<0?-1:1}function Eu(i,t,e,n,s,r,a,o){const l=i-e*s,c=t-n*s,h=i+e*r,u=t+n*r;let f,d;a?(f=n,d=-e):(f=-n,d=e);const g=l+f,_=c+d,m=h+f,p=u+d;return o.push(g,_),o.push(m,p),2}function Ki(i,t,e,n,s,r,a,o){const l=e-i,c=n-t;let h=Math.atan2(l,c),u=Math.atan2(s-i,r-t);o&&h<u?h+=Math.PI*2:!o&&h>u&&(u+=Math.PI*2);let f=h;const d=u-h,g=Math.abs(d),_=Math.sqrt(l*l+c*c),m=(15*g*Math.sqrt(_)/Math.PI>>0)+1,p=d/m;if(f+=p,o){a.push(i,t),a.push(e,n);for(let M=1,S=f;M<m;M++,S+=p)a.push(i,t),a.push(i+Math.sin(S)*_,t+Math.cos(S)*_);a.push(i,t),a.push(s,r)}else{a.push(e,n),a.push(i,t);for(let M=1,S=f;M<m;M++,S+=p)a.push(i+Math.sin(S)*_,t+Math.cos(S)*_),a.push(i,t);a.push(s,r),a.push(i,t)}return m*2}function W0(i,t,e,n,s,r){const a=xp;if(i.length===0)return;const o=t;let l=o.alignment;if(t.alignment!==.5){let X=V0(i);l=(l-.5)*X+.5}const c=new tn(i[0],i[1]),h=new tn(i[i.length-2],i[i.length-1]),u=n,f=Math.abs(c.x-h.x)<a&&Math.abs(c.y-h.y)<a;if(u){i=i.slice(),f&&(i.pop(),i.pop(),h.set(i[i.length-2],i[i.length-1]));const X=(c.x+h.x)*.5,Q=(h.y+c.y)*.5;i.unshift(X,Q),i.push(X,Q)}const d=s,g=i.length/2;let _=i.length;const m=d.length/2,p=o.width/2,M=p*p,S=o.miterLimit*o.miterLimit;let v=i[0],T=i[1],E=i[2],A=i[3],I=0,b=0,y=-(T-A),C=v-E,B=0,N=0,G=Math.sqrt(y*y+C*C);y/=G,C/=G,y*=p,C*=p;const W=l,D=(1-W)*2,L=W*2;u||(o.cap==="round"?_+=Ki(v-y*(D-L)*.5,T-C*(D-L)*.5,v-y*D,T-C*D,v+y*L,T+C*L,d,!0)+2:o.cap==="square"&&(_+=Eu(v,T,y,C,D,L,!0,d))),d.push(v-y*D,T-C*D),d.push(v+y*L,T+C*L);for(let X=1;X<g-1;++X){v=i[(X-1)*2],T=i[(X-1)*2+1],E=i[X*2],A=i[X*2+1],I=i[(X+1)*2],b=i[(X+1)*2+1],y=-(T-A),C=v-E,G=Math.sqrt(y*y+C*C),y/=G,C/=G,y*=p,C*=p,B=-(A-b),N=E-I,G=Math.sqrt(B*B+N*N),B/=G,N/=G,B*=p,N*=p;const Q=E-v,it=T-A,At=E-I,Ct=b-A,Qt=Q*At+it*Ct,ae=it*At-Ct*Q,j=ae<0;if(Math.abs(ae)<.001*Math.abs(Qt)){d.push(E-y*D,A-C*D),d.push(E+y*L,A+C*L),Qt>=0&&(o.join==="round"?_+=Ki(E,A,E-y*D,A-C*D,E-B*D,A-N*D,d,!1)+4:_+=2,d.push(E-B*L,A-N*L),d.push(E+B*D,A+N*D));continue}const et=(-y+v)*(-C+A)-(-y+E)*(-C+T),mt=(-B+I)*(-N+A)-(-B+E)*(-N+b),Nt=(Q*mt-At*et)/ae,St=(Ct*et-it*mt)/ae,Kt=(Nt-E)*(Nt-E)+(St-A)*(St-A),he=E+(Nt-E)*D,Bt=A+(St-A)*D,Gt=E-(Nt-E)*L,Ht=A-(St-A)*L,Ot=Math.min(Q*Q+it*it,At*At+Ct*Ct),te=j?D:L,P=Ot+te*te*M;Kt<=P?o.join==="bevel"||Kt/M>S?(j?(d.push(he,Bt),d.push(E+y*L,A+C*L),d.push(he,Bt),d.push(E+B*L,A+N*L)):(d.push(E-y*D,A-C*D),d.push(Gt,Ht),d.push(E-B*D,A-N*D),d.push(Gt,Ht)),_+=2):o.join==="round"?j?(d.push(he,Bt),d.push(E+y*L,A+C*L),_+=Ki(E,A,E+y*L,A+C*L,E+B*L,A+N*L,d,!0)+4,d.push(he,Bt),d.push(E+B*L,A+N*L)):(d.push(E-y*D,A-C*D),d.push(Gt,Ht),_+=Ki(E,A,E-y*D,A-C*D,E-B*D,A-N*D,d,!1)+4,d.push(E-B*D,A-N*D),d.push(Gt,Ht)):(d.push(he,Bt),d.push(Gt,Ht)):(d.push(E-y*D,A-C*D),d.push(E+y*L,A+C*L),o.join==="round"?j?_+=Ki(E,A,E+y*L,A+C*L,E+B*L,A+N*L,d,!0)+2:_+=Ki(E,A,E-y*D,A-C*D,E-B*D,A-N*D,d,!1)+2:o.join==="miter"&&Kt/M<=S&&(j?(d.push(Gt,Ht),d.push(Gt,Ht)):(d.push(he,Bt),d.push(he,Bt)),_+=2),d.push(E-B*D,A-N*D),d.push(E+B*L,A+N*L),_+=2)}v=i[(g-2)*2],T=i[(g-2)*2+1],E=i[(g-1)*2],A=i[(g-1)*2+1],y=-(T-A),C=v-E,G=Math.sqrt(y*y+C*C),y/=G,C/=G,y*=p,C*=p,d.push(E-y*D,A-C*D),d.push(E+y*L,A+C*L),u||(o.cap==="round"?_+=Ki(E-y*(D-L)*.5,A-C*(D-L)*.5,E-y*D,A-C*D,E+y*L,A+C*L,d,!1)+2:o.cap==="square"&&(_+=Eu(E,A,y,C,D,L,!1,d)));const $=Tu*Tu;for(let X=m;X<_+m-2;++X)v=d[X*2],T=d[X*2+1],E=d[(X+1)*2],A=d[(X+1)*2+1],I=d[(X+2)*2],b=d[(X+2)*2+1],!(Math.abs(v*(A-b)+E*(b-T)+I*(T-A))<$)&&r.push(X,X+1,X+2)}function X0(i,t,e,n){const s=xp;if(i.length===0)return;const r=i[0],a=i[1],o=i[i.length-2],l=i[i.length-1],c=t||Math.abs(r-o)<s&&Math.abs(a-l)<s,h=e,u=i.length/2,f=h.length/2;for(let d=0;d<u;d++)h.push(i[d*2]),h.push(i[d*2+1]);for(let d=0;d<u-1;d++)n.push(f+d,f+d+1);c&&n.push(f+u-1,f)}function vp(i,t,e,n,s,r,a){const o=U_(i,t,2);if(!o)return;for(let c=0;c<o.length;c+=3)r[a++]=o[c]+s,r[a++]=o[c+1]+s,r[a++]=o[c+2]+s;let l=s*n;for(let c=0;c<i.length;c+=2)e[l]=i[c],e[l+1]=i[c+1],l+=n}const Y0=[],$0={extension:{type:qt.ShapeBuilder,name:"polygon"},build(i,t){for(let e=0;e<i.points.length;e++)t[e]=i.points[e];return!0},triangulate(i,t,e,n,s,r){vp(i,Y0,t,e,n,s,r)}},q0={extension:{type:qt.ShapeBuilder,name:"rectangle"},build(i,t){const e=i,n=e.x,s=e.y,r=e.width,a=e.height;return r>0&&a>0?(t[0]=n,t[1]=s,t[2]=n+r,t[3]=s,t[4]=n+r,t[5]=s+a,t[6]=n,t[7]=s+a,!0):!1},triangulate(i,t,e,n,s,r){let a=0;n*=e,t[n+a]=i[0],t[n+a+1]=i[1],a+=e,t[n+a]=i[2],t[n+a+1]=i[3],a+=e,t[n+a]=i[6],t[n+a+1]=i[7],a+=e,t[n+a]=i[4],t[n+a+1]=i[5],a+=e;const o=n/e;s[r++]=o,s[r++]=o+1,s[r++]=o+2,s[r++]=o+1,s[r++]=o+3,s[r++]=o+2}},j0={extension:{type:qt.ShapeBuilder,name:"triangle"},build(i,t){return t[0]=i.x,t[1]=i.y,t[2]=i.x2,t[3]=i.y2,t[4]=i.x3,t[5]=i.y3,!0},triangulate(i,t,e,n,s,r){let a=0;n*=e,t[n+a]=i[0],t[n+a+1]=i[1],a+=e,t[n+a]=i[2],t[n+a+1]=i[3],a+=e,t[n+a]=i[4],t[n+a+1]=i[5];const o=n/e;s[r++]=o,s[r++]=o+1,s[r++]=o+2}},wu=[{offset:0,color:"white"},{offset:1,color:"black"}],ch=class Kl{constructor(...t){this.uid=Ue("fillGradient"),this._tick=0,this.type="linear",this.colorStops=[];let e=K0(t);e={...e.type==="radial"?Kl.defaultRadialOptions:Kl.defaultLinearOptions,...hf(e)},this._textureSize=e.textureSize,this._wrapMode=e.wrapMode,e.type==="radial"?(this.center=e.center,this.outerCenter=e.outerCenter??this.center,this.innerRadius=e.innerRadius,this.outerRadius=e.outerRadius,this.scale=e.scale,this.rotation=e.rotation):(this.start=e.start,this.end=e.end),this.textureSpace=e.textureSpace,this.type=e.type,e.colorStops.forEach(s=>{this.addColorStop(s.offset,s.color)})}addColorStop(t,e){return this.colorStops.push({offset:t,color:He.shared.setValue(e).toHexa()}),this}buildLinearGradient(){if(this.texture)return;let{x:t,y:e}=this.start,{x:n,y:s}=this.end,r=n-t,a=s-e;const o=r<0||a<0;if(this._wrapMode==="clamp-to-edge"){if(r<0){const m=t;t=n,n=m,r*=-1}if(a<0){const m=e;e=s,s=m,a*=-1}}const l=this.colorStops.length?this.colorStops:wu,c=this._textureSize,{canvas:h,context:u}=Cu(c,1),f=o?u.createLinearGradient(this._textureSize,0,0,0):u.createLinearGradient(0,0,this._textureSize,0);Au(f,l),u.fillStyle=f,u.fillRect(0,0,c,1),this.texture=new ye({source:new $a({resource:h,addressMode:this._wrapMode})});const d=Math.sqrt(r*r+a*a),g=Math.atan2(a,r),_=new ne;_.scale(d/c,1),_.rotate(g),_.translate(t,e),this.textureSpace==="local"&&_.scale(c,c),this.transform=_}buildGradient(){this.texture||this._tick++,this.type==="linear"?this.buildLinearGradient():this.buildRadialGradient()}buildRadialGradient(){if(this.texture)return;const t=this.colorStops.length?this.colorStops:wu,e=this._textureSize,{canvas:n,context:s}=Cu(e,e),{x:r,y:a}=this.center,{x:o,y:l}=this.outerCenter,c=this.innerRadius,h=this.outerRadius,u=o-h,f=l-h,d=e/(h*2),g=(r-u)*d,_=(a-f)*d,m=s.createRadialGradient(g,_,c*d,(o-u)*d,(l-f)*d,h*d);Au(m,t),s.fillStyle=t[t.length-1].color,s.fillRect(0,0,e,e),s.fillStyle=m,s.translate(g,_),s.rotate(this.rotation),s.scale(1,this.scale),s.translate(-g,-_),s.fillRect(0,0,e,e),this.texture=new ye({source:new $a({resource:n,addressMode:this._wrapMode})});const p=new ne;p.scale(1/d,1/d),p.translate(u,f),this.textureSpace==="local"&&p.scale(e,e),this.transform=p}destroy(){this.texture?.destroy(!0),this.texture=null,this.transform=null,this.colorStops=[],this.start=null,this.end=null,this.center=null,this.outerCenter=null}get styleKey(){return`fill-gradient-${this.uid}-${this._tick}`}};ch.defaultLinearOptions={start:{x:0,y:0},end:{x:0,y:1},colorStops:[],textureSpace:"local",type:"linear",textureSize:256,wrapMode:"clamp-to-edge"};ch.defaultRadialOptions={center:{x:.5,y:.5},innerRadius:0,outerRadius:.5,colorStops:[],scale:1,textureSpace:"local",type:"radial",textureSize:256,wrapMode:"clamp-to-edge"};let yi=ch;function Au(i,t){for(let e=0;e<t.length;e++){const n=t[e];i.addColorStop(n.offset,n.color)}}function Cu(i,t){const e=xn.get().createCanvas(i,t),n=e.getContext("2d");return{canvas:e,context:n}}function K0(i){let t=i[0]??{};return(typeof t=="number"||i[1])&&(ce("8.5.2","use options object instead"),t={type:"linear",start:{x:i[0],y:i[1]},end:{x:i[2],y:i[3]},textureSpace:i[4],textureSize:i[5]??yi.defaultLinearOptions.textureSize}),t}const Z0=new ne,J0=new Oe;function Q0(i,t,e,n){const s=t.matrix?i.copyFrom(t.matrix).invert():i.identity();if(t.textureSpace==="local"){const a=e.getBounds(J0);t.width&&a.pad(t.width);const{x:o,y:l}=a,c=1/a.width,h=1/a.height,u=-o*c,f=-l*h,d=s.a,g=s.b,_=s.c,m=s.d;s.a*=c,s.b*=c,s.c*=h,s.d*=h,s.tx=u*d+f*_+s.tx,s.ty=u*g+f*m+s.ty}else s.translate(t.texture.frame.x,t.texture.frame.y),s.scale(1/t.texture.source.width,1/t.texture.source.height);const r=t.texture.source.style;return!(t.fill instanceof yi)&&r.addressMode==="clamp-to-edge"&&(r.addressMode="repeat",r.update()),n&&s.append(Z0.copyFrom(n).invert()),s}const ro={};Be.handleByMap(qt.ShapeBuilder,ro);Be.add(q0,$0,j0,Br,z0,H0);const tx=new Oe,ex=new ne;function nx(i,t){const{geometryData:e,batches:n}=t;n.length=0,e.indices.length=0,e.vertices.length=0,e.uvs.length=0;for(let s=0;s<i.instructions.length;s++){const r=i.instructions[s];if(r.action==="texture")ix(r.data,n,e);else if(r.action==="fill"||r.action==="stroke"){const a=r.action==="stroke",o=r.data.path.shapePath,l=r.data.style,c=r.data.hole;a&&c&&Ru(c.shapePath,l,!0,n,e),c&&(o.shapePrimitives[o.shapePrimitives.length-1].holes=c.shapePath.shapePrimitives),Ru(o,l,a,n,e)}}}function ix(i,t,e){const n=[],s=ro.rectangle,r=tx;r.x=i.dx,r.y=i.dy,r.width=i.dw,r.height=i.dh;const a=i.transform;if(!s.build(r,n))return;const{vertices:o,uvs:l,indices:c}=e,h=c.length,u=o.length/2;a&&_p(n,a),s.triangulate(n,o,2,u,c,h);const f=i.image,d=f.uvs;l.push(d.x0,d.y0,d.x1,d.y1,d.x3,d.y3,d.x2,d.y2);const g=pn.get(lh);g.indexOffset=h,g.indexSize=c.length-h,g.attributeOffset=u,g.attributeSize=o.length/2-u,g.baseColor=i.style,g.alpha=i.alpha,g.texture=f,g.geometryData=e,t.push(g)}function Ru(i,t,e,n,s){const{vertices:r,uvs:a,indices:o}=s;i.shapePrimitives.forEach(({shape:l,transform:c,holes:h})=>{const u=[],f=ro[l.type];if(!f.build(l,u))return;const d=o.length,g=r.length/2;let _="triangle-list";if(c&&_p(u,c),e){const S=l.closePath??!0,v=t;v.pixelLine?(X0(u,S,r,o),_="line-list"):W0(u,v,!1,S,r,o)}else if(h){const S=[],v=u.slice();sx(h).forEach(E=>{S.push(v.length/2),v.push(...E)}),vp(v,S,r,2,g,o,d)}else f.triangulate(u,r,2,g,o,d);const m=a.length/2,p=t.texture;if(p!==ye.WHITE){const S=Q0(ex,t,l,c);B0(r,2,g,a,m,2,r.length/2-g,S)}else k0(a,m,2,r.length/2-g);const M=pn.get(lh);M.indexOffset=d,M.indexSize=o.length-d,M.attributeOffset=g,M.attributeSize=r.length/2-g,M.baseColor=t.color,M.alpha=t.alpha,M.texture=p,M.geometryData=s,M.topology=_,n.push(M)})}function sx(i){const t=[];for(let e=0;e<i.length;e++){const n=i[e].shape,s=[];ro[n.type].build(n,s)&&t.push(s)}return t}class rx{constructor(){this.batches=[],this.geometryData={vertices:[],uvs:[],indices:[]}}reset(){this.batches&&this.batches.forEach(t=>{pn.return(t)}),this.graphicsData&&pn.return(this.graphicsData),this.isBatchable=!1,this.context=null,this.batches.length=0,this.geometryData.indices.length=0,this.geometryData.vertices.length=0,this.geometryData.uvs.length=0,this.graphicsData=null}destroy(){this.reset(),this.batches=null,this.geometryData=null}}class ax{constructor(){this.instructions=new eh}init(t){const e=t.maxTextures;this.batcher?this.batcher._updateMaxTextures(e):this.batcher=new O0({maxTextures:e}),this.instructions.reset()}get geometry(){return ce(ng,"GraphicsContextRenderData#geometry is deprecated, please use batcher.geometry instead."),this.batcher.geometry}destroy(){this.batcher.destroy(),this.instructions.destroy(),this.batcher=null,this.instructions=null}}const hh=class Zl{constructor(t){this._renderer=t,this._managedContexts=new Wr({renderer:t,type:"resource",name:"graphicsContext"})}init(t){Zl.defaultOptions.bezierSmoothness=t?.bezierSmoothness??Zl.defaultOptions.bezierSmoothness}getContextRenderData(t){return t._gpuData[this._renderer.uid].graphicsData||this._initContextRenderData(t)}updateGpuContext(t){const e=!!t._gpuData[this._renderer.uid],n=t._gpuData[this._renderer.uid]||this._initContext(t);if(t.dirty||!e){e&&n.reset(),nx(t,n);const s=t.batchMode;t.customShader||s==="no-batch"?n.isBatchable=!1:s==="auto"?n.isBatchable=n.geometryData.vertices.length<400:n.isBatchable=!0,t.dirty=!1}return n}getGpuContext(t){return t._gpuData[this._renderer.uid]||this._initContext(t)}_initContextRenderData(t){const e=pn.get(ax,{maxTextures:this._renderer.limits.maxBatchableTextures}),n=t._gpuData[this._renderer.uid],{batches:s,geometryData:r}=n;n.graphicsData=e;const a=r.vertices.length,o=r.indices.length;for(let u=0;u<s.length;u++)s[u].applyTransform=!1;const l=e.batcher;l.ensureAttributeBuffer(a),l.ensureIndexBuffer(o),l.begin();for(let u=0;u<s.length;u++){const f=s[u];l.add(f)}l.finish(e.instructions);const c=l.geometry;c.indexBuffer.setDataWithSize(l.indexBuffer,l.indexSize,!0),c.buffers[0].setDataWithSize(l.attributeBuffer.float32View,l.attributeSize,!0);const h=l.batches;for(let u=0;u<h.length;u++){const f=h[u];f.bindGroup=q_(f.textures.textures,f.textures.count,this._renderer.limits.maxBatchableTextures)}return e}_initContext(t){const e=new rx;return e.context=t,t._gpuData[this._renderer.uid]=e,this._managedContexts.add(t),e}destroy(){this._managedContexts.destroy(),this._renderer=null}};hh.extension={type:[qt.WebGLSystem,qt.WebGPUSystem],name:"graphicsContext"};hh.defaultOptions={bezierSmoothness:.5};let uh=hh;const ox=8,da=11920929e-14,lx=1;function yp(i,t,e,n,s,r,a,o,l,c){const u=Math.min(.99,Math.max(0,c??uh.defaultOptions.bezierSmoothness));let f=(lx-u)/1;return f*=f,cx(t,e,n,s,r,a,o,l,i,f),i}function cx(i,t,e,n,s,r,a,o,l,c){Jl(i,t,e,n,s,r,a,o,l,c,0),l.push(a,o)}function Jl(i,t,e,n,s,r,a,o,l,c,h){if(h>ox)return;const u=(i+e)/2,f=(t+n)/2,d=(e+s)/2,g=(n+r)/2,_=(s+a)/2,m=(r+o)/2,p=(u+d)/2,M=(f+g)/2,S=(d+_)/2,v=(g+m)/2,T=(p+S)/2,E=(M+v)/2;if(h>0){let A=a-i,I=o-t;const b=Math.abs((e-a)*I-(n-o)*A),y=Math.abs((s-a)*I-(r-o)*A);if(b>da&&y>da){if((b+y)*(b+y)<=c*(A*A+I*I)){l.push(T,E);return}}else if(b>da){if(b*b<=c*(A*A+I*I)){l.push(T,E);return}}else if(y>da){if(y*y<=c*(A*A+I*I)){l.push(T,E);return}}else if(A=T-(i+a)/2,I=E-(t+o)/2,A*A+I*I<=c){l.push(T,E);return}}Jl(i,t,u,f,p,M,T,E,l,c,h+1),Jl(T,E,S,v,_,m,a,o,l,c,h+1)}const hx=8,ux=11920929e-14,dx=1;function fx(i,t,e,n,s,r,a,o){const c=Math.min(.99,Math.max(0,o??uh.defaultOptions.bezierSmoothness));let h=(dx-c)/1;return h*=h,px(t,e,n,s,r,a,i,h),i}function px(i,t,e,n,s,r,a,o){Ql(a,i,t,e,n,s,r,o,0),a.push(s,r)}function Ql(i,t,e,n,s,r,a,o,l){if(l>hx)return;const c=(t+n)/2,h=(e+s)/2,u=(n+r)/2,f=(s+a)/2,d=(c+u)/2,g=(h+f)/2;let _=r-t,m=a-e;const p=Math.abs((n-r)*m-(s-a)*_);if(p>ux){if(p*p<=o*(_*_+m*m)){i.push(d,g);return}}else if(_=d-(t+r)/2,m=g-(e+a)/2,_*_+m*m<=o){i.push(d,g);return}Ql(i,t,e,c,h,d,g,o,l+1),Ql(i,d,g,u,f,r,a,o,l+1)}function Sp(i,t,e,n,s,r,a,o){let l=Math.abs(s-r);(!a&&s>r||a&&r>s)&&(l=2*Math.PI-l),o||(o=Math.max(6,Math.floor(6*Math.pow(n,1/3)*(l/Math.PI)))),o=Math.max(o,3);let c=l/o,h=s;c*=a?-1:1;for(let u=0;u<o+1;u++){const f=Math.cos(h),d=Math.sin(h),g=t+f*n,_=e+d*n;i.push(g,_),h+=c}}function mx(i,t,e,n,s,r){const a=i[i.length-2],l=i[i.length-1]-e,c=a-t,h=s-e,u=n-t,f=Math.abs(l*u-c*h);if(f<1e-8||r===0){(i[i.length-2]!==t||i[i.length-1]!==e)&&i.push(t,e);return}const d=l*l+c*c,g=h*h+u*u,_=l*h+c*u,m=r*Math.sqrt(d)/f,p=r*Math.sqrt(g)/f,M=m*_/d,S=p*_/g,v=m*u+p*c,T=m*h+p*l,E=c*(p+M),A=l*(p+M),I=u*(m+S),b=h*(m+S),y=Math.atan2(A-T,E-v),C=Math.atan2(b-T,I-v);Sp(i,v+t,T+e,r,y,C,c*h>u*l)}const Pr=Math.PI*2,qo={centerX:0,centerY:0,ang1:0,ang2:0},jo=({x:i,y:t},e,n,s,r,a,o,l)=>{i*=e,t*=n;const c=s*i-r*t,h=r*i+s*t;return l.x=c+a,l.y=h+o,l};function gx(i,t){const e=t===-1.5707963267948966?-.551915024494:1.3333333333333333*Math.tan(t/4),n=t===1.5707963267948966?.551915024494:e,s=Math.cos(i),r=Math.sin(i),a=Math.cos(i+t),o=Math.sin(i+t);return[{x:s-r*n,y:r+s*n},{x:a+o*n,y:o-a*n},{x:a,y:o}]}const Pu=(i,t,e,n)=>{const s=i*n-t*e<0?-1:1;let r=i*e+t*n;return r>1&&(r=1),r<-1&&(r=-1),s*Math.acos(r)},_x=(i,t,e,n,s,r,a,o,l,c,h,u,f)=>{const d=Math.pow(s,2),g=Math.pow(r,2),_=Math.pow(h,2),m=Math.pow(u,2);let p=d*g-d*m-g*_;p<0&&(p=0),p/=d*m+g*_,p=Math.sqrt(p)*(a===o?-1:1);const M=p*s/r*u,S=p*-r/s*h,v=c*M-l*S+(i+e)/2,T=l*M+c*S+(t+n)/2,E=(h-M)/s,A=(u-S)/r,I=(-h-M)/s,b=(-u-S)/r,y=Pu(1,0,E,A);let C=Pu(E,A,I,b);o===0&&C>0&&(C-=Pr),o===1&&C<0&&(C+=Pr),f.centerX=v,f.centerY=T,f.ang1=y,f.ang2=C};function xx(i,t,e,n,s,r,a,o=0,l=0,c=0){if(r===0||a===0)return;const h=Math.sin(o*Pr/360),u=Math.cos(o*Pr/360),f=u*(t-n)/2+h*(e-s)/2,d=-h*(t-n)/2+u*(e-s)/2;if(f===0&&d===0)return;r=Math.abs(r),a=Math.abs(a);const g=Math.pow(f,2)/Math.pow(r,2)+Math.pow(d,2)/Math.pow(a,2);g>1&&(r*=Math.sqrt(g),a*=Math.sqrt(g)),_x(t,e,n,s,r,a,l,c,h,u,f,d,qo);let{ang1:_,ang2:m}=qo;const{centerX:p,centerY:M}=qo;let S=Math.abs(m)/(Pr/4);Math.abs(1-S)<1e-7&&(S=1);const v=Math.max(Math.ceil(S),1);m/=v;let T=i[i.length-2],E=i[i.length-1];const A={x:0,y:0};for(let I=0;I<v;I++){const b=gx(_,m),{x:y,y:C}=jo(b[0],r,a,u,h,p,M,A),{x:B,y:N}=jo(b[1],r,a,u,h,p,M,A),{x:G,y:W}=jo(b[2],r,a,u,h,p,M,A);yp(i,T,E,y,C,B,N,G,W),T=G,E=W,_+=m}}function vx(i,t,e){const n=(a,o)=>{const l=o.x-a.x,c=o.y-a.y,h=Math.sqrt(l*l+c*c),u=l/h,f=c/h;return{len:h,nx:u,ny:f}},s=(a,o)=>{a===0?i.moveTo(o.x,o.y):i.lineTo(o.x,o.y)};let r=t[t.length-1];for(let a=0;a<t.length;a++){const o=t[a%t.length],l=o.radius??e;if(l<=0){s(a,o),r=o;continue}const c=t[(a+1)%t.length],h=n(o,r),u=n(o,c);if(h.len<1e-4||u.len<1e-4){s(a,o),r=o;continue}let f=Math.asin(h.nx*u.ny-h.ny*u.nx),d=1,g=!1;h.nx*u.nx-h.ny*-u.ny<0?f<0?f=Math.PI+f:(f=Math.PI-f,d=-1,g=!0):f>0&&(d=-1,g=!0);const _=f/2;let m,p=Math.abs(Math.cos(_)*l/Math.sin(_));p>Math.min(h.len/2,u.len/2)?(p=Math.min(h.len/2,u.len/2),m=Math.abs(p*Math.sin(_)/Math.cos(_))):m=l;const M=o.x+u.nx*p+-u.ny*m*d,S=o.y+u.ny*p+u.nx*m*d,v=Math.atan2(h.ny,h.nx)+Math.PI/2*d,T=Math.atan2(u.ny,u.nx)-Math.PI/2*d;a===0&&i.moveTo(M+Math.cos(v)*m,S+Math.sin(v)*m),i.arc(M,S,m,v,T,g),r=o}}function yx(i,t,e,n){const s=(o,l)=>Math.sqrt((o.x-l.x)**2+(o.y-l.y)**2),r=(o,l,c)=>({x:o.x+(l.x-o.x)*c,y:o.y+(l.y-o.y)*c}),a=t.length;for(let o=0;o<a;o++){const l=t[(o+1)%a],c=l.radius??e;if(c<=0){o===0?i.moveTo(l.x,l.y):i.lineTo(l.x,l.y);continue}const h=t[o],u=t[(o+2)%a],f=s(h,l);let d;if(f<1e-4)d=l;else{const m=Math.min(f/2,c);d=r(l,h,m/f)}const g=s(u,l);let _;if(g<1e-4)_=l;else{const m=Math.min(g/2,c);_=r(l,u,m/g)}o===0?i.moveTo(d.x,d.y):i.lineTo(d.x,d.y),i.quadraticCurveTo(l.x,l.y,_.x,_.y,n)}}const Sx=new Oe;class Mx{constructor(t){this.shapePrimitives=[],this._currentPoly=null,this._bounds=new In,this._graphicsPath2D=t,this.signed=t.checkForHoles}moveTo(t,e){return this.startPoly(t,e),this}lineTo(t,e){this._ensurePoly();const n=this._currentPoly.points,s=n[n.length-2],r=n[n.length-1];return(s!==t||r!==e)&&n.push(t,e),this}arc(t,e,n,s,r,a){this._ensurePoly(!1);const o=this._currentPoly.points;return Sp(o,t,e,n,s,r,a),this}arcTo(t,e,n,s,r){this._ensurePoly();const a=this._currentPoly.points;return mx(a,t,e,n,s,r),this}arcToSvg(t,e,n,s,r,a,o){const l=this._currentPoly.points;return xx(l,this._currentPoly.lastX,this._currentPoly.lastY,a,o,t,e,n,s,r),this}bezierCurveTo(t,e,n,s,r,a,o){this._ensurePoly();const l=this._currentPoly;return yp(this._currentPoly.points,l.lastX,l.lastY,t,e,n,s,r,a,o),this}quadraticCurveTo(t,e,n,s,r){this._ensurePoly();const a=this._currentPoly;return fx(this._currentPoly.points,a.lastX,a.lastY,t,e,n,s,r),this}closePath(){return this.endPoly(!0),this}addPath(t,e){this.endPoly(),e&&!e.isIdentity()&&(t=t.clone(!0),t.transform(e));const n=this.shapePrimitives,s=n.length;for(let r=0;r<t.instructions.length;r++){const a=t.instructions[r];this[a.action](...a.data)}if(t.checkForHoles&&n.length-s>1){let r=null;for(let a=s;a<n.length;a++){const o=n[a];if(o.shape.type==="polygon"){const l=o.shape,c=r?.shape;c&&c.containsPolygon(l)?(r.holes||(r.holes=[]),r.holes.push(o),n.copyWithin(a,a+1),n.length--,a--):r=o}}}return this}finish(t=!1){this.endPoly(t)}rect(t,e,n,s,r){return this.drawShape(new Oe(t,e,n,s),r),this}circle(t,e,n,s){return this.drawShape(new rh(t,e,n),s),this}poly(t,e,n){const s=new Cr(t);return s.closePath=e,this.drawShape(s,n),this}regularPoly(t,e,n,s,r=0,a){s=Math.max(s|0,3);const o=-1*Math.PI/2+r,l=Math.PI*2/s,c=[];for(let h=0;h<s;h++){const u=o-h*l;c.push(t+n*Math.cos(u),e+n*Math.sin(u))}return this.poly(c,!0,a),this}roundPoly(t,e,n,s,r,a=0,o){if(s=Math.max(s|0,3),r<=0)return this.regularPoly(t,e,n,s,a);const l=n*Math.sin(Math.PI/s)-.001;r=Math.min(r,l);const c=-1*Math.PI/2+a,h=Math.PI*2/s,u=(s-2)*Math.PI/s/2;for(let f=0;f<s;f++){const d=f*h+c,g=t+n*Math.cos(d),_=e+n*Math.sin(d),m=d+Math.PI+u,p=d-Math.PI-u,M=g+r*Math.cos(m),S=_+r*Math.sin(m),v=g+r*Math.cos(p),T=_+r*Math.sin(p);f===0?this.moveTo(M,S):this.lineTo(M,S),this.quadraticCurveTo(g,_,v,T,o)}return this.closePath()}roundShape(t,e,n=!1,s){return t.length<3?this:(n?yx(this,t,e,s):vx(this,t,e),this.closePath())}filletRect(t,e,n,s,r){if(r===0)return this.rect(t,e,n,s);const a=Math.min(n,s)/2,o=Math.min(a,Math.max(-a,r)),l=t+n,c=e+s,h=o<0?-o:0,u=Math.abs(o);return this.moveTo(t,e+u).arcTo(t+h,e+h,t+u,e,u).lineTo(l-u,e).arcTo(l-h,e+h,l,e+u,u).lineTo(l,c-u).arcTo(l-h,c-h,t+n-u,c,u).lineTo(t+u,c).arcTo(t+h,c-h,t,c-u,u).closePath()}chamferRect(t,e,n,s,r,a){if(r<=0)return this.rect(t,e,n,s);const o=Math.min(r,Math.min(n,s)/2),l=t+n,c=e+s,h=[t+o,e,l-o,e,l,e+o,l,c-o,l-o,c,t+o,c,t,c-o,t,e+o];for(let u=h.length-1;u>=2;u-=2)h[u]===h[u-2]&&h[u-1]===h[u-3]&&h.splice(u-1,2);return this.poly(h,!0,a)}ellipse(t,e,n,s,r){return this.drawShape(new ah(t,e,n,s),r),this}roundRect(t,e,n,s,r,a){return this.drawShape(new oh(t,e,n,s,r),a),this}drawShape(t,e){return this.endPoly(),this.shapePrimitives.push({shape:t,transform:e}),this}startPoly(t,e){let n=this._currentPoly;return n&&this.endPoly(),n=new Cr,n.points.push(t,e),this._currentPoly=n,this}endPoly(t=!1){const e=this._currentPoly;return e&&e.points.length>2&&(e.closePath=t,this.shapePrimitives.push({shape:e})),this._currentPoly=null,this}_ensurePoly(t=!0){if(!this._currentPoly&&(this._currentPoly=new Cr,t)){const e=this.shapePrimitives[this.shapePrimitives.length-1];if(e){let n=e.shape.x,s=e.shape.y;if(e.transform&&!e.transform.isIdentity()){const r=e.transform,a=n;n=r.a*n+r.c*s+r.tx,s=r.b*a+r.d*s+r.ty}this._currentPoly.points.push(n,s)}else this._currentPoly.points.push(0,0)}}buildPath(){const t=this._graphicsPath2D;this.shapePrimitives.length=0,this._currentPoly=null;for(let e=0;e<t.instructions.length;e++){const n=t.instructions[e];this[n.action](...n.data)}this.finish()}get bounds(){const t=this._bounds;t.clear();const e=this.shapePrimitives;for(let n=0;n<e.length;n++){const s=e[n],r=s.shape.getBounds(Sx);s.transform?t.addRect(r,s.transform):t.addRect(r)}return t}}class _i{constructor(t,e=!1){this.instructions=[],this.uid=Ue("graphicsPath"),this._dirty=!0,this.checkForHoles=e,typeof t=="string"?W_(t,this):this.instructions=t?.slice()??[]}get shapePath(){return this._shapePath||(this._shapePath=new Mx(this)),this._dirty&&(this._dirty=!1,this._shapePath.buildPath()),this._shapePath}addPath(t,e){return t=t.clone(),this.instructions.push({action:"addPath",data:[t,e]}),this._dirty=!0,this}arc(...t){return this.instructions.push({action:"arc",data:t}),this._dirty=!0,this}arcTo(...t){return this.instructions.push({action:"arcTo",data:t}),this._dirty=!0,this}arcToSvg(...t){return this.instructions.push({action:"arcToSvg",data:t}),this._dirty=!0,this}bezierCurveTo(...t){return this.instructions.push({action:"bezierCurveTo",data:t}),this._dirty=!0,this}bezierCurveToShort(t,e,n,s,r){const a=this.instructions[this.instructions.length-1],o=this.getLastPoint(tn.shared);let l=0,c=0;if(!a||a.action!=="bezierCurveTo")l=o.x,c=o.y;else{l=a.data[2],c=a.data[3];const h=o.x,u=o.y;l=h+(h-l),c=u+(u-c)}return this.instructions.push({action:"bezierCurveTo",data:[l,c,t,e,n,s,r]}),this._dirty=!0,this}closePath(){return this.instructions.push({action:"closePath",data:[]}),this._dirty=!0,this}ellipse(...t){return this.instructions.push({action:"ellipse",data:t}),this._dirty=!0,this}lineTo(...t){return this.instructions.push({action:"lineTo",data:t}),this._dirty=!0,this}moveTo(...t){return this.instructions.push({action:"moveTo",data:t}),this}quadraticCurveTo(...t){return this.instructions.push({action:"quadraticCurveTo",data:t}),this._dirty=!0,this}quadraticCurveToShort(t,e,n){const s=this.instructions[this.instructions.length-1],r=this.getLastPoint(tn.shared);let a=0,o=0;if(!s||s.action!=="quadraticCurveTo")a=r.x,o=r.y;else{a=s.data[0],o=s.data[1];const l=r.x,c=r.y;a=l+(l-a),o=c+(c-o)}return this.instructions.push({action:"quadraticCurveTo",data:[a,o,t,e,n]}),this._dirty=!0,this}rect(t,e,n,s,r){return this.instructions.push({action:"rect",data:[t,e,n,s,r]}),this._dirty=!0,this}circle(t,e,n,s){return this.instructions.push({action:"circle",data:[t,e,n,s]}),this._dirty=!0,this}roundRect(...t){return this.instructions.push({action:"roundRect",data:t}),this._dirty=!0,this}poly(...t){return this.instructions.push({action:"poly",data:t}),this._dirty=!0,this}regularPoly(...t){return this.instructions.push({action:"regularPoly",data:t}),this._dirty=!0,this}roundPoly(...t){return this.instructions.push({action:"roundPoly",data:t}),this._dirty=!0,this}roundShape(...t){return this.instructions.push({action:"roundShape",data:t}),this._dirty=!0,this}filletRect(...t){return this.instructions.push({action:"filletRect",data:t}),this._dirty=!0,this}chamferRect(...t){return this.instructions.push({action:"chamferRect",data:t}),this._dirty=!0,this}star(t,e,n,s,r,a,o){r||(r=s/2);const l=-1*Math.PI/2+a,c=n*2,h=Math.PI*2/c,u=[];for(let f=0;f<c;f++){const d=f%2?r:s,g=f*h+l;u.push(t+d*Math.cos(g),e+d*Math.sin(g))}return this.poly(u,!0,o),this}clone(t=!1){const e=new _i;if(e.checkForHoles=this.checkForHoles,!t)e.instructions=this.instructions.slice();else for(let n=0;n<this.instructions.length;n++){const s=this.instructions[n];e.instructions.push({action:s.action,data:s.data.slice()})}return e}clear(){return this.instructions.length=0,this._dirty=!0,this}transform(t){if(t.isIdentity())return this;const e=t.a,n=t.b,s=t.c,r=t.d,a=t.tx,o=t.ty;let l=0,c=0,h=0,u=0,f=0,d=0,g=0,_=0;for(let m=0;m<this.instructions.length;m++){const p=this.instructions[m],M=p.data;switch(p.action){case"moveTo":case"lineTo":l=M[0],c=M[1],M[0]=e*l+s*c+a,M[1]=n*l+r*c+o;break;case"bezierCurveTo":h=M[0],u=M[1],f=M[2],d=M[3],l=M[4],c=M[5],M[0]=e*h+s*u+a,M[1]=n*h+r*u+o,M[2]=e*f+s*d+a,M[3]=n*f+r*d+o,M[4]=e*l+s*c+a,M[5]=n*l+r*c+o;break;case"quadraticCurveTo":h=M[0],u=M[1],l=M[2],c=M[3],M[0]=e*h+s*u+a,M[1]=n*h+r*u+o,M[2]=e*l+s*c+a,M[3]=n*l+r*c+o;break;case"arcToSvg":l=M[5],c=M[6],g=M[0],_=M[1],M[0]=e*g+s*_,M[1]=n*g+r*_,M[5]=e*l+s*c+a,M[6]=n*l+r*c+o;break;case"circle":M[4]=dr(M[3],t);break;case"rect":M[4]=dr(M[4],t);break;case"ellipse":M[8]=dr(M[8],t);break;case"roundRect":M[5]=dr(M[5],t);break;case"addPath":M[0].transform(t);break;case"poly":M[2]=dr(M[2],t);break;default:on("unknown transform action",p.action);break}}return this._dirty=!0,this}get bounds(){return this.shapePath.bounds}getLastPoint(t){let e=this.instructions.length-1,n=this.instructions[e];if(!n)return t.x=0,t.y=0,t;for(;n.action==="closePath";){if(e--,e<0)return t.x=0,t.y=0,t;n=this.instructions[e]}switch(n.action){case"moveTo":case"lineTo":t.x=n.data[0],t.y=n.data[1];break;case"quadraticCurveTo":t.x=n.data[2],t.y=n.data[3];break;case"bezierCurveTo":t.x=n.data[4],t.y=n.data[5];break;case"arc":case"arcToSvg":t.x=n.data[5],t.y=n.data[6];break;case"addPath":n.data[0].getLastPoint(t);break}return t}}function dr(i,t){return i?i.prepend(t):t.clone()}function De(i,t,e){const n=i.getAttribute(t);return n?Number(n):e}function bx(i,t){const e=i.querySelectorAll("defs");for(let n=0;n<e.length;n++){const s=e[n];for(let r=0;r<s.children.length;r++){const a=s.children[r];switch(a.nodeName.toLowerCase()){case"lineargradient":t.defs[a.id]=Tx(a);break;case"radialgradient":t.defs[a.id]=Ex();break}}}}function Tx(i){const t=De(i,"x1",0),e=De(i,"y1",0),n=De(i,"x2",1),s=De(i,"y2",0),r=i.getAttribute("gradientUnits")||"objectBoundingBox",a=new yi(t,e,n,s,r==="objectBoundingBox"?"local":"global");for(let o=0;o<i.children.length;o++){const l=i.children[o],c=De(l,"offset",0),h=He.shared.setValue(l.getAttribute("stop-color")).toNumber();a.addColorStop(c,h)}return a}function Ex(i){return on("[SVG Parser] Radial gradients are not yet supported"),new yi(0,0,1,0)}function Iu(i){const t=i.match(/url\s*\(\s*['"]?\s*#([^'"\s)]+)\s*['"]?\s*\)/i);return t?t[1]:""}const Du={fill:{type:"paint",default:0},"fill-opacity":{type:"number",default:1},stroke:{type:"paint",default:0},"stroke-width":{type:"number",default:1},"stroke-opacity":{type:"number",default:1},"stroke-linecap":{type:"string",default:"butt"},"stroke-linejoin":{type:"string",default:"miter"},"stroke-miterlimit":{type:"number",default:10},"stroke-dasharray":{type:"string",default:"none"},"stroke-dashoffset":{type:"number",default:0},opacity:{type:"number",default:1}};function Mp(i,t){const e=i.getAttribute("style"),n={},s={},r={strokeStyle:n,fillStyle:s,useFill:!1,useStroke:!1};for(const a in Du){const o=i.getAttribute(a);o&&Lu(t,r,a,o.trim())}if(e){const a=e.split(";");for(let o=0;o<a.length;o++){const l=a[o].trim(),[c,h]=l.split(":");Du[c]&&Lu(t,r,c,h.trim())}}return{strokeStyle:r.useStroke?n:null,fillStyle:r.useFill?s:null,useFill:r.useFill,useStroke:r.useStroke}}function Lu(i,t,e,n){switch(e){case"stroke":if(n!=="none"){if(n.startsWith("url(")){const s=Iu(n);t.strokeStyle.fill=i.defs[s]}else t.strokeStyle.color=He.shared.setValue(n).toNumber();t.useStroke=!0}break;case"stroke-width":t.strokeStyle.width=Number(n);break;case"fill":if(n!=="none"){if(n.startsWith("url(")){const s=Iu(n);t.fillStyle.fill=i.defs[s]}else t.fillStyle.color=He.shared.setValue(n).toNumber();t.useFill=!0}break;case"fill-opacity":t.fillStyle.alpha=Number(n);break;case"stroke-opacity":t.strokeStyle.alpha=Number(n);break;case"opacity":t.fillStyle.alpha=Number(n),t.strokeStyle.alpha=Number(n);break}}function wx(i){if(i.length<=2)return!0;const t=i.map(o=>o.area).sort((o,l)=>l-o),[e,n]=t,s=t[t.length-1],r=e/n,a=n/s;return!(r>3&&a<2)}function Ax(i){return i.split(/(?=[Mm])/).filter(n=>n.trim().length>0)}function Cx(i){const t=i.match(/[-+]?[0-9]*\.?[0-9]+/g);if(!t||t.length<4)return 0;const e=t.map(Number),n=[],s=[];for(let h=0;h<e.length;h+=2)h+1<e.length&&(n.push(e[h]),s.push(e[h+1]));if(n.length===0||s.length===0)return 0;const r=Math.min(...n),a=Math.max(...n),o=Math.min(...s),l=Math.max(...s);return(a-r)*(l-o)}function Uu(i,t){const e=new _i(i,!1);for(const n of e.instructions)t.instructions.push(n)}function Rx(i,t){if(typeof i=="string"){const a=document.createElement("div");a.innerHTML=i.trim(),i=a.querySelector("svg")}const e={context:t,defs:{},path:new _i};bx(i,e);const n=i.children,{fillStyle:s,strokeStyle:r}=Mp(i,e);for(let a=0;a<n.length;a++){const o=n[a];o.nodeName.toLowerCase()!=="defs"&&bp(o,e,s,r)}return t}function bp(i,t,e,n){const s=i.children,{fillStyle:r,strokeStyle:a}=Mp(i,t);r&&e?e={...e,...r}:r&&(e=r),a&&n?n={...n,...a}:a&&(n=a);const o=!e&&!n;o&&(e={color:0});let l,c,h,u,f,d,g,_,m,p,M,S,v,T,E,A,I;switch(i.nodeName.toLowerCase()){case"path":{T=i.getAttribute("d");const b=i.getAttribute("fill-rule"),y=Ax(T),C=b==="evenodd",B=y.length>1;if(C&&B){const G=y.map(D=>({path:D,area:Cx(D)}));if(G.sort((D,L)=>L.area-D.area),y.length>3||!wx(G))for(let D=0;D<G.length;D++){const L=G[D],$=D===0;t.context.beginPath();const X=new _i(void 0,!0);Uu(L.path,X),t.context.path(X),$?(e&&t.context.fill(e),n&&t.context.stroke(n)):t.context.cut()}else for(let D=0;D<G.length;D++){const L=G[D],$=D%2===1;t.context.beginPath();const X=new _i(void 0,!0);Uu(L.path,X),t.context.path(X),$?t.context.cut():(e&&t.context.fill(e),n&&t.context.stroke(n))}}else{const G=b?b==="evenodd":!0;E=new _i(T,G),t.context.path(E),e&&t.context.fill(e),n&&t.context.stroke(n)}break}case"circle":g=De(i,"cx",0),_=De(i,"cy",0),m=De(i,"r",0),t.context.ellipse(g,_,m,m),e&&t.context.fill(e),n&&t.context.stroke(n);break;case"rect":l=De(i,"x",0),c=De(i,"y",0),A=De(i,"width",0),I=De(i,"height",0),p=De(i,"rx",0),M=De(i,"ry",0),p||M?t.context.roundRect(l,c,A,I,p||M):t.context.rect(l,c,A,I),e&&t.context.fill(e),n&&t.context.stroke(n);break;case"ellipse":g=De(i,"cx",0),_=De(i,"cy",0),p=De(i,"rx",0),M=De(i,"ry",0),t.context.beginPath(),t.context.ellipse(g,_,p,M),e&&t.context.fill(e),n&&t.context.stroke(n);break;case"line":h=De(i,"x1",0),u=De(i,"y1",0),f=De(i,"x2",0),d=De(i,"y2",0),t.context.beginPath(),t.context.moveTo(h,u),t.context.lineTo(f,d),n&&t.context.stroke(n);break;case"polygon":v=i.getAttribute("points"),S=v.match(/-?\d+/g).map(b=>parseInt(b,10)),t.context.poly(S,!0),e&&t.context.fill(e),n&&t.context.stroke(n);break;case"polyline":v=i.getAttribute("points"),S=v.match(/-?\d+/g).map(b=>parseInt(b,10)),t.context.poly(S,!1),n&&t.context.stroke(n);break;case"g":case"svg":break;default:{on(`[SVG parser] <${i.nodeName}> elements unsupported`);break}}o&&(e=null);for(let b=0;b<s.length;b++)bp(s[b],t,e,n)}const Fu={repeat:{addressModeU:"repeat",addressModeV:"repeat"},"repeat-x":{addressModeU:"repeat",addressModeV:"clamp-to-edge"},"repeat-y":{addressModeU:"clamp-to-edge",addressModeV:"repeat"},"no-repeat":{addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}};class ao{constructor(t,e){this.uid=Ue("fillPattern"),this._tick=0,this.transform=new ne,this.texture=t,this.transform.scale(1/t.frame.width,1/t.frame.height),e&&(t.source.style.addressModeU=Fu[e].addressModeU,t.source.style.addressModeV=Fu[e].addressModeV)}setTransform(t){const e=this.texture;this.transform.copyFrom(t),this.transform.invert(),this.transform.scale(1/e.frame.width,1/e.frame.height),this._tick++}get texture(){return this._texture}set texture(t){this._texture!==t&&(this._texture=t,this._tick++)}get styleKey(){return`fill-pattern-${this.uid}-${this._tick}`}destroy(){this.texture.destroy(!0),this.texture=null}}function Px(i){return He.isColorLike(i)}function Nu(i){return i instanceof ao}function Ou(i){return i instanceof yi}function Ix(i){return i instanceof ye}function Dx(i,t,e){const n=He.shared.setValue(t??0);return i.color=n.toNumber(),i.alpha=n.alpha===1?e.alpha:n.alpha,i.texture=ye.WHITE,{...e,...i}}function Lx(i,t,e){return i.texture=t,{...e,...i}}function Bu(i,t,e){return i.fill=t,i.color=16777215,i.texture=t.texture,i.matrix=t.transform,{...e,...i}}function ku(i,t,e){return t.buildGradient(),i.fill=t,i.color=16777215,i.texture=t.texture,i.matrix=t.transform,i.textureSpace=t.textureSpace,{...e,...i}}function Ux(i,t){const e={...t,...i},n=He.shared.setValue(e.color);return e.alpha*=n.alpha,e.color=n.toNumber(),e}function fs(i,t){if(i==null)return null;const e={},n=i;return Px(i)?Dx(e,i,t):Ix(i)?Lx(e,i,t):Nu(i)?Bu(e,i,t):Ou(i)?ku(e,i,t):n.fill&&Nu(n.fill)?Bu(n,n.fill,t):n.fill&&Ou(n.fill)?ku(n,n.fill,t):Ux(n,t)}function Ka(i,t){const{width:e,alignment:n,miterLimit:s,cap:r,join:a,pixelLine:o,...l}=t,c=fs(i,l);return c?{width:e,alignment:n,miterLimit:s,cap:r,join:a,pixelLine:o,...c}:null}const Fx=new tn,Gu=new ne,dh=class qn extends ii{constructor(){super(...arguments),this._gpuData=Object.create(null),this.autoGarbageCollect=!0,this._gcLastUsed=-1,this.uid=Ue("graphicsContext"),this.dirty=!0,this.batchMode="auto",this.instructions=[],this.destroyed=!1,this._activePath=new _i,this._transform=new ne,this._fillStyle={...qn.defaultFillStyle},this._strokeStyle={...qn.defaultStrokeStyle},this._stateStack=[],this._tick=0,this._bounds=new In,this._boundsDirty=!0}clone(){const t=new qn;return t.batchMode=this.batchMode,t.instructions=this.instructions.slice(),t._activePath=this._activePath.clone(),t._transform=this._transform.clone(),t._fillStyle={...this._fillStyle},t._strokeStyle={...this._strokeStyle},t._stateStack=this._stateStack.slice(),t._bounds=this._bounds.clone(),t._boundsDirty=!0,t}get fillStyle(){return this._fillStyle}set fillStyle(t){this._fillStyle=fs(t,qn.defaultFillStyle)}get strokeStyle(){return this._strokeStyle}set strokeStyle(t){this._strokeStyle=Ka(t,qn.defaultStrokeStyle)}setFillStyle(t){return this._fillStyle=fs(t,qn.defaultFillStyle),this}setStrokeStyle(t){return this._strokeStyle=fs(t,qn.defaultStrokeStyle),this}texture(t,e,n,s,r,a){return this.instructions.push({action:"texture",data:{image:t,dx:n||0,dy:s||0,dw:r||t.frame.width,dh:a||t.frame.height,transform:this._transform.clone(),alpha:this._fillStyle.alpha,style:e||e===0?He.shared.setValue(e).toNumber():16777215}}),this.onUpdate(),this}beginPath(){return this._activePath=new _i,this}fill(t,e){let n;const s=this.instructions[this.instructions.length-1];return this._tick===0&&s?.action==="stroke"?n=s.data.path:n=this._activePath.clone(),n?(t!=null&&(e!==void 0&&typeof t=="number"&&(ce(Le,"GraphicsContext.fill(color, alpha) is deprecated, use GraphicsContext.fill({ color, alpha }) instead"),t={color:t,alpha:e}),this._fillStyle=fs(t,qn.defaultFillStyle)),this.instructions.push({action:"fill",data:{style:this.fillStyle,path:n}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}_initNextPathLocation(){const{x:t,y:e}=this._activePath.getLastPoint(tn.shared);this._activePath.clear(),this._activePath.moveTo(t,e)}stroke(t){let e;const n=this.instructions[this.instructions.length-1];return this._tick===0&&n?.action==="fill"?e=n.data.path:e=this._activePath.clone(),e?(t!=null&&(this._strokeStyle=Ka(t,qn.defaultStrokeStyle)),this.instructions.push({action:"stroke",data:{style:this.strokeStyle,path:e}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}cut(){for(let t=0;t<2;t++){const e=this.instructions[this.instructions.length-1-t],n=this._activePath.clone();if(e&&(e.action==="stroke"||e.action==="fill"))if(e.data.hole)e.data.hole.addPath(n);else{e.data.hole=n;break}}return this._initNextPathLocation(),this}arc(t,e,n,s,r,a){this._tick++;const o=this._transform;return this._activePath.arc(o.a*t+o.c*e+o.tx,o.b*t+o.d*e+o.ty,n,s,r,a),this}arcTo(t,e,n,s,r){this._tick++;const a=this._transform;return this._activePath.arcTo(a.a*t+a.c*e+a.tx,a.b*t+a.d*e+a.ty,a.a*n+a.c*s+a.tx,a.b*n+a.d*s+a.ty,r),this}arcToSvg(t,e,n,s,r,a,o){this._tick++;const l=this._transform;return this._activePath.arcToSvg(t,e,n,s,r,l.a*a+l.c*o+l.tx,l.b*a+l.d*o+l.ty),this}bezierCurveTo(t,e,n,s,r,a,o){this._tick++;const l=this._transform;return this._activePath.bezierCurveTo(l.a*t+l.c*e+l.tx,l.b*t+l.d*e+l.ty,l.a*n+l.c*s+l.tx,l.b*n+l.d*s+l.ty,l.a*r+l.c*a+l.tx,l.b*r+l.d*a+l.ty,o),this}closePath(){return this._tick++,this._activePath?.closePath(),this}ellipse(t,e,n,s){return this._tick++,this._activePath.ellipse(t,e,n,s,this._transform.clone()),this}circle(t,e,n){return this._tick++,this._activePath.circle(t,e,n,this._transform.clone()),this}path(t){return this._tick++,this._activePath.addPath(t,this._transform.clone()),this}lineTo(t,e){this._tick++;const n=this._transform;return this._activePath.lineTo(n.a*t+n.c*e+n.tx,n.b*t+n.d*e+n.ty),this}moveTo(t,e){this._tick++;const n=this._transform,s=this._activePath.instructions,r=n.a*t+n.c*e+n.tx,a=n.b*t+n.d*e+n.ty;return s.length===1&&s[0].action==="moveTo"?(s[0].data[0]=r,s[0].data[1]=a,this):(this._activePath.moveTo(r,a),this)}quadraticCurveTo(t,e,n,s,r){this._tick++;const a=this._transform;return this._activePath.quadraticCurveTo(a.a*t+a.c*e+a.tx,a.b*t+a.d*e+a.ty,a.a*n+a.c*s+a.tx,a.b*n+a.d*s+a.ty,r),this}rect(t,e,n,s){return this._tick++,this._activePath.rect(t,e,n,s,this._transform.clone()),this}roundRect(t,e,n,s,r){return this._tick++,this._activePath.roundRect(t,e,n,s,r,this._transform.clone()),this}poly(t,e){return this._tick++,this._activePath.poly(t,e,this._transform.clone()),this}regularPoly(t,e,n,s,r=0,a){return this._tick++,this._activePath.regularPoly(t,e,n,s,r,a),this}roundPoly(t,e,n,s,r,a){return this._tick++,this._activePath.roundPoly(t,e,n,s,r,a),this}roundShape(t,e,n,s){return this._tick++,this._activePath.roundShape(t,e,n,s),this}filletRect(t,e,n,s,r){return this._tick++,this._activePath.filletRect(t,e,n,s,r),this}chamferRect(t,e,n,s,r,a){return this._tick++,this._activePath.chamferRect(t,e,n,s,r,a),this}star(t,e,n,s,r=0,a=0){return this._tick++,this._activePath.star(t,e,n,s,r,a,this._transform.clone()),this}svg(t){return this._tick++,Rx(t,this),this}restore(){const t=this._stateStack.pop();return t&&(this._transform=t.transform,this._fillStyle=t.fillStyle,this._strokeStyle=t.strokeStyle),this}save(){return this._stateStack.push({transform:this._transform.clone(),fillStyle:{...this._fillStyle},strokeStyle:{...this._strokeStyle}}),this}getTransform(){return this._transform}resetTransform(){return this._transform.identity(),this}rotate(t){return this._transform.rotate(t),this}scale(t,e=t){return this._transform.scale(t,e),this}setTransform(t,e,n,s,r,a){return t instanceof ne?(this._transform.set(t.a,t.b,t.c,t.d,t.tx,t.ty),this):(this._transform.set(t,e,n,s,r,a),this)}transform(t,e,n,s,r,a){return t instanceof ne?(this._transform.append(t),this):(Gu.set(t,e,n,s,r,a),this._transform.append(Gu),this)}translate(t,e=t){return this._transform.translate(t,e),this}clear(){return this._activePath.clear(),this.instructions.length=0,this.resetTransform(),this.onUpdate(),this}onUpdate(){this._boundsDirty=!0,!this.dirty&&(this.emit("update",this,16),this.dirty=!0)}get bounds(){if(!this._boundsDirty)return this._bounds;this._boundsDirty=!1;const t=this._bounds;t.clear();for(let e=0;e<this.instructions.length;e++){const n=this.instructions[e],s=n.action;if(s==="fill"){const r=n.data;t.addBounds(r.path.bounds)}else if(s==="texture"){const r=n.data;t.addFrame(r.dx,r.dy,r.dx+r.dw,r.dy+r.dh,r.transform)}if(s==="stroke"){const r=n.data,a=r.style.alignment,o=r.style.width*(1-a),l=r.path.bounds;t.addFrame(l.minX-o,l.minY-o,l.maxX+o,l.maxY+o)}}return t}containsPoint(t){if(!this.bounds.containsPoint(t.x,t.y))return!1;const e=this.instructions;let n=!1;for(let s=0;s<e.length;s++){const r=e[s],a=r.data,o=a.path;if(!r.action||!o)continue;const l=a.style,c=o.shapePath.shapePrimitives;for(let h=0;h<c.length;h++){const u=c[h].shape;if(!l||!u)continue;const f=c[h].transform,d=f?f.applyInverse(t,Fx):t;if(r.action==="fill")n=u.contains(d.x,d.y);else{const _=l;n=u.strokeContains(d.x,d.y,_.width,_.alignment)}const g=a.hole;if(g){const _=g.shapePath?.shapePrimitives;if(_)for(let m=0;m<_.length;m++)_[m].shape.contains(d.x,d.y)&&(n=!1)}if(n)return!0}}return n}unload(){this.emit("unload",this);for(const t in this._gpuData)this._gpuData[t]?.destroy();this._gpuData=Object.create(null)}destroy(t=!1){if(this.destroyed)return;if(this.destroyed=!0,this._stateStack.length=0,this._transform=null,this.unload(),this.emit("destroy",this),this.removeAllListeners(),typeof t=="boolean"?t:t?.texture){const n=typeof t=="boolean"?t:t?.textureSource;this._fillStyle.texture&&(this._fillStyle.fill&&"uid"in this._fillStyle.fill?this._fillStyle.fill.destroy():this._fillStyle.texture.destroy(n)),this._strokeStyle.texture&&(this._strokeStyle.fill&&"uid"in this._strokeStyle.fill?this._strokeStyle.fill.destroy():this._strokeStyle.texture.destroy(n))}this._fillStyle=null,this._strokeStyle=null,this.instructions=null,this._activePath=null,this._bounds=null,this._stateStack=null,this.customShader=null,this._transform=null}};dh.defaultFillStyle={color:16777215,alpha:1,texture:ye.WHITE,matrix:null,fill:null,textureSpace:"local"};dh.defaultStrokeStyle={width:1,color:16777215,alpha:1,alignment:.5,miterLimit:10,cap:"butt",join:"miter",texture:ye.WHITE,matrix:null,fill:null,textureSpace:"local",pixelLine:!1};let kn=dh;class Nx{constructor(){this.isBatchable=!1}reset(){this.isBatchable=!1,this.context=null,this.graphicsData&&(this.graphicsData.destroy(),this.graphicsData=null)}destroy(){this.reset()}}class Ox{constructor(){this.instructions=new eh}init(){this.instructions.reset()}destroy(){this.instructions.destroy(),this.instructions=null}}const fh=class tc{constructor(t){this._renderer=t,this._managedContexts=new Wr({renderer:t,type:"resource",name:"graphicsContext"})}init(t){tc.defaultOptions.bezierSmoothness=t?.bezierSmoothness??tc.defaultOptions.bezierSmoothness}getContextRenderData(t){return this.getGpuContext(t).graphicsData||this._initContextRenderData(t)}updateGpuContext(t){const e=t._gpuData,n=!!e[this._renderer.uid],s=e[this._renderer.uid]||this._initContext(t);return(t.dirty||!n)&&(n&&s.reset(),s.isBatchable=!1,t.dirty=!1),s}getGpuContext(t){return t._gpuData[this._renderer.uid]||this._initContext(t)}_initContextRenderData(t){const e=new Ox,n=this.getGpuContext(t);return n.graphicsData=e,e.init(),e}_initContext(t){const e=new Nx;return e.context=t,t._gpuData[this._renderer.uid]=e,this._managedContexts.add(t),e}destroy(){this._managedContexts.destroy(),this._renderer=null}};fh.extension={type:[qt.CanvasSystem],name:"graphicsContext"};fh.defaultOptions={bezierSmoothness:.5};let Bx=fh;class Tp{constructor(t,e){this.state=qf.for2d(),this.renderer=t,this._adaptor=e,this.renderer.runners.contextChange.add(this),this._managedGraphics=new Wr({renderer:t,type:"renderable",priority:-1,name:"graphics"})}contextChange(){this._adaptor.contextChange(this.renderer)}validateRenderable(t){return!1}addRenderable(t,e){this._managedGraphics.add(t),this.renderer.renderPipes.batch.break(e),e.add(t)}updateRenderable(t){}execute(t){t.isRenderable&&this._adaptor.execute(this,t)}destroy(){this._managedGraphics.destroy(),this.renderer=null,this._adaptor.destroy(),this._adaptor=null}}Tp.extension={type:[qt.CanvasPipes],name:"graphics"};function kx(i,t,e){const n=(i>>24&255)/255;t[e++]=(i&255)/255*n,t[e++]=(i>>8&255)/255*n,t[e++]=(i>>16&255)/255*n,t[e++]=n}class Gx{constructor(){this.batches=[],this.batched=!1}destroy(){this.batches.forEach(t=>{pn.return(t)}),this.batches.length=0}}class Ep{constructor(t,e){this.state=qf.for2d(),this.renderer=t,this._adaptor=e,this.renderer.runners.contextChange.add(this),this._managedGraphics=new Wr({renderer:t,type:"renderable",priority:-1,name:"graphics"})}contextChange(){this._adaptor.contextChange(this.renderer)}validateRenderable(t){const e=t.context,n=!!t._gpuData,r=this.renderer.graphicsContext.updateGpuContext(e);return!!(r.isBatchable||n!==r.isBatchable)}addRenderable(t,e){const s=this.renderer.graphicsContext.updateGpuContext(t.context);t.didViewUpdate&&this._rebuild(t),s.isBatchable?this._addToBatcher(t,e):(this.renderer.renderPipes.batch.break(e),e.add(t))}updateRenderable(t){const n=this._getGpuDataForRenderable(t).batches;for(let s=0;s<n.length;s++){const r=n[s];r._batcher.updateElement(r)}}execute(t){if(!t.isRenderable)return;const e=this.renderer,n=t.context;if(!e.graphicsContext.getGpuContext(n).batches.length)return;const r=n.customShader||this._adaptor.shader;this.state.blendMode=t.groupBlendMode;const a=r.resources.localUniforms.uniforms;a.uTransformMatrix=t.groupTransform,a.uRound=e._roundPixels|t._roundPixels,kx(t.groupColorAlpha,a.uColor,0),this._adaptor.execute(this,t)}_rebuild(t){const e=this._getGpuDataForRenderable(t),s=this.renderer.graphicsContext.updateGpuContext(t.context);e.destroy(),s.isBatchable&&this._updateBatchesForRenderable(t,e)}_addToBatcher(t,e){const n=this.renderer.renderPipes.batch,s=this._getGpuDataForRenderable(t).batches;for(let r=0;r<s.length;r++){const a=s[r];n.addToBatch(a,e)}}_getGpuDataForRenderable(t){return t._gpuData[this.renderer.uid]||this._initGpuDataForRenderable(t)}_initGpuDataForRenderable(t){const e=new Gx;return t._gpuData[this.renderer.uid]=e,this._managedGraphics.add(t),e}_updateBatchesForRenderable(t,e){const n=t.context,r=this.renderer.graphicsContext.getGpuContext(n),a=this.renderer._roundPixels|t._roundPixels;e.batches=r.batches.map(o=>{const l=pn.get(lh);return o.copyTo(l),l.renderable=t,l.roundPixels=a,l})}destroy(){this._managedGraphics.destroy(),this.renderer=null,this._adaptor.destroy(),this._adaptor=null,this.state=null}}Ep.extension={type:[qt.WebGLPipes,qt.WebGPUPipes],name:"graphics"};Be.add(Tp);Be.add(Ep);Be.add(Bx);Be.add(uh);class _e extends nh{constructor(t){t instanceof kn&&(t={context:t});const{context:e,roundPixels:n,...s}=t||{};super({label:"Graphics",...s}),this.renderPipeId="graphics",e?this.context=e:(this.context=this._ownedContext=new kn,this.context.autoGarbageCollect=this.autoGarbageCollect),this.didViewUpdate=!0,this.allowChildren=!1,this.roundPixels=n??!1}set context(t){t!==this._context&&(this._context&&(this._context.off("update",this.onViewUpdate,this),this._context.off("unload",this.unload,this)),this._context=t,this._context.on("update",this.onViewUpdate,this),this._context.on("unload",this.unload,this),this.onViewUpdate())}get context(){return this._context}get bounds(){return this._context.bounds}updateBounds(){}containsPoint(t){return this._context.containsPoint(t)}destroy(t){this._ownedContext&&!t?this._ownedContext.destroy(t):(t===!0||t?.context===!0)&&this._context.destroy(t),this._ownedContext=null,this._context=null,super.destroy(t)}_onTouch(t){this._gcLastUsed=t,this._context._gcLastUsed=t}_callContextMethod(t,e){return this.context[t](...e),this}setFillStyle(...t){return this._callContextMethod("setFillStyle",t)}setStrokeStyle(...t){return this._callContextMethod("setStrokeStyle",t)}fill(...t){return this._callContextMethod("fill",t)}stroke(...t){return this._callContextMethod("stroke",t)}texture(...t){return this._callContextMethod("texture",t)}beginPath(){return this._callContextMethod("beginPath",[])}cut(){return this._callContextMethod("cut",[])}arc(...t){return this._callContextMethod("arc",t)}arcTo(...t){return this._callContextMethod("arcTo",t)}arcToSvg(...t){return this._callContextMethod("arcToSvg",t)}bezierCurveTo(...t){return this._callContextMethod("bezierCurveTo",t)}closePath(){return this._callContextMethod("closePath",[])}ellipse(...t){return this._callContextMethod("ellipse",t)}circle(...t){return this._callContextMethod("circle",t)}path(...t){return this._callContextMethod("path",t)}lineTo(...t){return this._callContextMethod("lineTo",t)}moveTo(...t){return this._callContextMethod("moveTo",t)}quadraticCurveTo(...t){return this._callContextMethod("quadraticCurveTo",t)}rect(...t){return this._callContextMethod("rect",t)}roundRect(...t){return this._callContextMethod("roundRect",t)}poly(...t){return this._callContextMethod("poly",t)}regularPoly(...t){return this._callContextMethod("regularPoly",t)}roundPoly(...t){return this._callContextMethod("roundPoly",t)}roundShape(...t){return this._callContextMethod("roundShape",t)}filletRect(...t){return this._callContextMethod("filletRect",t)}chamferRect(...t){return this._callContextMethod("chamferRect",t)}star(...t){return this._callContextMethod("star",t)}svg(...t){return this._callContextMethod("svg",t)}restore(...t){return this._callContextMethod("restore",t)}save(){return this._callContextMethod("save",[])}getTransform(){return this.context.getTransform()}resetTransform(){return this._callContextMethod("resetTransform",[])}rotateTransform(...t){return this._callContextMethod("rotate",t)}scaleTransform(...t){return this._callContextMethod("scale",t)}setTransform(...t){return this._callContextMethod("setTransform",t)}transform(...t){return this._callContextMethod("transform",t)}translateTransform(...t){return this._callContextMethod("translate",t)}clear(){return this._callContextMethod("clear",[])}get fillStyle(){return this._context.fillStyle}set fillStyle(t){this._context.fillStyle=t}get strokeStyle(){return this._context.strokeStyle}set strokeStyle(t){this._context.strokeStyle=t}clone(t=!1){return t?new _e(this._context.clone()):(this._ownedContext=null,new _e(this._context))}lineStyle(t,e,n){ce(Le,"Graphics#lineStyle is no longer needed. Use Graphics#setStrokeStyle to set the stroke style.");const s={};return t&&(s.width=t),e&&(s.color=e),n&&(s.alpha=n),this.context.strokeStyle=s,this}beginFill(t,e){ce(Le,"Graphics#beginFill is no longer needed. Use Graphics#fill to fill the shape with the desired style.");const n={};return t!==void 0&&(n.color=t),e!==void 0&&(n.alpha=e),this.context.fillStyle=n,this}endFill(){ce(Le,"Graphics#endFill is no longer needed. Use Graphics#fill to fill the shape with the desired style."),this.context.fill();const t=this.context.strokeStyle;return(t.width!==kn.defaultStrokeStyle.width||t.color!==kn.defaultStrokeStyle.color||t.alpha!==kn.defaultStrokeStyle.alpha)&&this.context.stroke(),this}drawCircle(...t){return ce(Le,"Graphics#drawCircle has been renamed to Graphics#circle"),this._callContextMethod("circle",t)}drawEllipse(...t){return ce(Le,"Graphics#drawEllipse has been renamed to Graphics#ellipse"),this._callContextMethod("ellipse",t)}drawPolygon(...t){return ce(Le,"Graphics#drawPolygon has been renamed to Graphics#poly"),this._callContextMethod("poly",t)}drawRect(...t){return ce(Le,"Graphics#drawRect has been renamed to Graphics#rect"),this._callContextMethod("rect",t)}drawRoundedRect(...t){return ce(Le,"Graphics#drawRoundedRect has been renamed to Graphics#roundRect"),this._callContextMethod("roundRect",t)}drawStar(...t){return ce(Le,"Graphics#drawStar has been renamed to Graphics#star"),this._callContextMethod("star",t)}}class zx extends nh{constructor(t,e){const{text:n,resolution:s,style:r,anchor:a,width:o,height:l,roundPixels:c,...h}=t;super({...h}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=e,this.text=n??"",this.style=r,this.resolution=s??null,this.allowChildren=!1,this._anchor=new Ke({_onUpdate:()=>{this.onViewUpdate()}}),a&&(this.anchor=a),this.roundPixels=c??!1,o!==void 0&&(this.width=o),l!==void 0&&(this.height=l)}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}set text(t){t=t.toString(),this._text!==t&&(this._text=t,this.onViewUpdate())}get text(){return this._text}set resolution(t){this._autoResolution=t===null,this._resolution=t,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(t){t||(t={}),this._style?.off("update",this.onViewUpdate,this),t instanceof this._styleClass?this._style=t:this._style=new this._styleClass(t),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(t){this._setWidth(t,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(t){this._setHeight(t,this.bounds.height)}getSize(t){return t||(t={}),t.width=Math.abs(this.scale.x)*this.bounds.width,t.height=Math.abs(this.scale.y)*this.bounds.height,t}setSize(t,e){typeof t=="object"?(e=t.height??t.width,t=t.width):e??(e=t),t!==void 0&&this._setWidth(t,this.bounds.width),e!==void 0&&this._setHeight(e,this.bounds.height)}containsPoint(t){const e=this.bounds.width,n=this.bounds.height,s=-e*this.anchor.x;let r=0;return t.x>=s&&t.x<=s+e&&(r=-n*this.anchor.y,t.y>=r&&t.y<=r+n)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}destroy(t=!1){super.destroy(t),this.owner=null,this._bounds=null,this._anchor=null,(typeof t=="boolean"?t:t?.style)&&this._style.destroy(t),this._style=null,this._text=null}get styleKey(){return`${this._text}:${this._style.styleKey}:${this._resolution}`}}function Hx(i,t){let e=i[0]??{};return(typeof e=="string"||i[1])&&(ce(Le,`use new ${t}({ text: "hi!", style }) instead`),e={text:e,style:i[1]}),e}class Vx{constructor(t){this._canvasPool=Object.create(null),this.canvasOptions=t||{},this.enableFullScreen=!1}_createCanvasAndContext(t,e){const n=xn.get().createCanvas();n.width=t,n.height=e;const s=n.getContext("2d");return{canvas:n,context:s}}getOptimalCanvasAndContext(t,e,n=1){t=Math.ceil(t*n-1e-6),e=Math.ceil(e*n-1e-6),t=$s(t),e=$s(e);const s=(t<<17)+(e<<1);this._canvasPool[s]||(this._canvasPool[s]=[]);let r=this._canvasPool[s].pop();return r||(r=this._createCanvasAndContext(t,e)),r}returnCanvasAndContext(t){const e=t.canvas,{width:n,height:s}=e,r=(n<<17)+(s<<1);t.context.resetTransform(),t.context.clearRect(0,0,n,s),this._canvasPool[r].push(t)}clear(){this._canvasPool={}}}const ec=new Vx;Vr.register(ec);let Zi=null,pi=null;function Wx(i,t){Zi||(Zi=xn.get().createCanvas(256,128),pi=Zi.getContext("2d",{willReadFrequently:!0}),pi.globalCompositeOperation="copy",pi.globalAlpha=1),(Zi.width<i||Zi.height<t)&&(Zi.width=$s(i),Zi.height=$s(t))}function zu(i,t,e){for(let n=0,s=4*e*t;n<t;++n,s+=4)if(i[s+3]!==0)return!1;return!0}function Hu(i,t,e,n,s){const r=4*t;for(let a=n,o=n*r+4*e;a<=s;++a,o+=r)if(i[o+3]!==0)return!1;return!0}function Xx(...i){let t=i[0];t.canvas||(t={canvas:i[0],resolution:i[1]});const{canvas:e}=t,n=Math.min(t.resolution??1,1),s=t.width??e.width,r=t.height??e.height;let a=t.output;if(Wx(s,r),!pi)throw new TypeError("Failed to get canvas 2D context");pi.drawImage(e,0,0,s,r,0,0,s*n,r*n);const l=pi.getImageData(0,0,s,r).data;let c=0,h=0,u=s-1,f=r-1;for(;h<r&&zu(l,s,h);)++h;if(h===r)return Oe.EMPTY;for(;zu(l,s,f);)--f;for(;Hu(l,s,c,h,f);)++c;for(;Hu(l,s,u,h,f);)--u;return++u,++f,pi.globalCompositeOperation="source-over",pi.strokeRect(c,h,u-c,f-h),pi.globalCompositeOperation="copy",a??(a=new Oe),a.set(c/n,h/n,(u-c)/n,(f-h)/n),a}class Yx{constructor(t=0,e=0,n=!1){this.first=null,this.items=Object.create(null),this.last=null,this.max=t,this.resetTtl=n,this.size=0,this.ttl=e}clear(){return this.first=null,this.items=Object.create(null),this.last=null,this.size=0,this}delete(t){if(this.has(t)){const e=this.items[t];delete this.items[t],this.size--,e.prev!==null&&(e.prev.next=e.next),e.next!==null&&(e.next.prev=e.prev),this.first===e&&(this.first=e.next),this.last===e&&(this.last=e.prev)}return this}entries(t=this.keys()){const e=new Array(t.length);for(let n=0;n<t.length;n++){const s=t[n];e[n]=[s,this.get(s)]}return e}evict(t=!1){if(t||this.size>0){const e=this.first;delete this.items[e.key],--this.size===0?(this.first=null,this.last=null):(this.first=e.next,this.first.prev=null)}return this}expiresAt(t){let e;return this.has(t)&&(e=this.items[t].expiry),e}get(t){const e=this.items[t];if(e!==void 0){if(this.ttl>0&&e.expiry<=Date.now()){this.delete(t);return}return this.moveToEnd(e),e.value}}has(t){return t in this.items}moveToEnd(t){this.last!==t&&(t.prev!==null&&(t.prev.next=t.next),t.next!==null&&(t.next.prev=t.prev),this.first===t&&(this.first=t.next),t.prev=this.last,t.next=null,this.last!==null&&(this.last.next=t),this.last=t,this.first===null&&(this.first=t))}keys(){const t=new Array(this.size);let e=this.first,n=0;for(;e!==null;)t[n++]=e.key,e=e.next;return t}setWithEvicted(t,e,n=this.resetTtl){let s=null;if(this.has(t))this.set(t,e,!0,n);else{this.max>0&&this.size===this.max&&(s={...this.first},this.evict(!0));let r=this.items[t]={expiry:this.ttl>0?Date.now()+this.ttl:this.ttl,key:t,prev:this.last,next:null,value:e};++this.size===1?this.first=r:this.last.next=r,this.last=r}return s}set(t,e,n=!1,s=this.resetTtl){let r=this.items[t];return n||r!==void 0?(r.value=e,n===!1&&s&&(r.expiry=this.ttl>0?Date.now()+this.ttl:this.ttl),this.moveToEnd(r)):(this.max>0&&this.size===this.max&&this.evict(!0),r=this.items[t]={expiry:this.ttl>0?Date.now()+this.ttl:this.ttl,key:t,prev:this.last,next:null,value:e},++this.size===1?this.first=r:this.last.next=r,this.last=r),this}values(t=this.keys()){const e=new Array(t.length);for(let n=0;n<t.length;n++)e[n]=this.get(t[n]);return e}}function $x(i=1e3,t=0,e=!1){if(isNaN(i)||i<0)throw new TypeError("Invalid max value");if(isNaN(t)||t<0)throw new TypeError("Invalid ttl value");if(typeof e!="boolean")throw new TypeError("Invalid resetTtl value");return new Yx(i,t,e)}function wp(i){return!!i.tagStyles&&Object.keys(i.tagStyles).length>0}function Ap(i){return i.includes("<")}function qx(i,t){return i.clone().assign(t)}function jx(i,t){const e=[],n=t.tagStyles;if(!wp(t)||!Ap(i))return e.push({text:i,style:t}),e;const s=[t],r=[];let a="",o=0;for(;o<i.length;){const l=i[o];if(l==="<"){const c=i.indexOf(">",o);if(c===-1){a+=l,o++;continue}const h=i.slice(o+1,c);if(h.startsWith("/")){const u=h.slice(1).trim();if(r.length>0&&r[r.length-1]===u){a.length>0&&(e.push({text:a,style:s[s.length-1]}),a=""),s.pop(),r.pop(),o=c+1;continue}else{a+=i.slice(o,c+1),o=c+1;continue}}else{const u=h.trim();if(n[u]){a.length>0&&(e.push({text:a,style:s[s.length-1]}),a="");const f=s[s.length-1],d=qx(f,n[u]);s.push(d),r.push(u),o=c+1;continue}else{a+=i.slice(o,c+1),o=c+1;continue}}}else a+=l,o++}return a.length>0&&e.push({text:a,style:s[s.length-1]}),e}const Kx=[10,13],Zx=new Set(Kx),Jx=[9,32,8192,8193,8194,8195,8196,8197,8198,8200,8201,8202,8287,12288],Qx=new Set(Jx),tv=/(\r\n|\r|\n)/,ev=/(?:\r\n|\r|\n)/;function ph(i){return typeof i!="string"?!1:Zx.has(i.charCodeAt(0))}function zn(i,t){return typeof i!="string"?!1:Qx.has(i.charCodeAt(0))}function Cp(i){return i==="normal"||i==="pre-line"}function Rp(i){return i==="normal"}function fi(i){if(typeof i!="string")return"";let t=i.length-1;for(;t>=0&&zn(i[t]);)t--;return t<i.length-1?i.slice(0,t+1):i}function Pp(i){const t=[],e=[];if(typeof i!="string")return t;for(let n=0;n<i.length;n++){const s=i[n],r=i[n+1];if(zn(s)||ph(s)){e.length>0&&(t.push(e.join("")),e.length=0),s==="\r"&&r===`
`?(t.push(`\r
`),n++):t.push(s);continue}e.push(s)}return e.length>0&&t.push(e.join("")),t}function Ip(i,t,e,n){const s=e(i),r=[];for(let a=0;a<s.length;a++){let o=s[a],l=o,c=1;for(;s[a+c];){const h=s[a+c];if(!n(l,h,i,a,t))o+=h,l=h,c++;else break}a+=c-1,r.push(o)}return r}const nv=/\r\n|\r|\n/g;function iv(i,t,e,n,s,r,a,o){const l=jx(i,t);if(Rp(t.whiteSpace))for(let G=0;G<l.length;G++){const W=l[G];l[G]={text:W.text.replace(nv," "),style:W.style}}const h=[];let u=[];for(const G of l){const W=G.text.split(tv);for(let D=0;D<W.length;D++){const L=W[D];L===`\r
`||L==="\r"||L===`
`?(h.push(u),u=[]):L.length>0&&u.push({text:L,style:G.style})}}(u.length>0||h.length===0)&&h.push(u);const f=e?sv(h,t,n,s,a,o):h,d=[],g=[],_=[],m=[],p=[];let M=0;const S=t._fontString,v=r(S);v.fontSize===0&&(v.fontSize=t.fontSize,v.ascent=t.fontSize);let T="",E=!!t.dropShadow;for(const G of f){let W=0,D=v.ascent,L=v.descent,$="";for(const Q of G){const it=Q.style._fontString,At=r(it);it!==T&&(n.font=it,T=it);const Ct=s(Q.text,Q.style.letterSpacing,n);W+=Ct,D=Math.max(D,At.ascent),L=Math.max(L,At.descent),$+=Q.text,!E&&Q.style.dropShadow&&(E=!0)}G.length===0&&(D=v.ascent,L=v.descent),d.push(W),g.push(D),_.push(L),p.push($);const X=t.lineHeight||D+L;m.push(X+t.leading),M=Math.max(M,W)}const A=t._stroke?.width||0,y=(e&&t.align!=="left"&&t.align!=="justify"?Math.max(M,t.wordWrapWidth):M)+A+(t.dropShadow?t.dropShadow.distance:0);let C=0;for(let G=0;G<m.length;G++)C+=m[G];C=Math.max(C,m[0]+A);const B=C+(t.dropShadow?t.dropShadow.distance:0),N=t.lineHeight||v.fontSize;return{width:y,height:B,lines:p,lineWidths:d,lineHeight:N+t.leading,maxLineWidth:M,fontProperties:v,runsByLine:f,lineAscents:g,lineDescents:_,lineHeights:m,hasDropShadow:E}}function sv(i,t,e,n,s,r){const{letterSpacing:a,whiteSpace:o,wordWrapWidth:l,breakWords:c}=t,h=Cp(o),u=l+a,f={};let d="";const g=(m,p)=>{const M=`${m}|${p.styleKey}`;let S=f[M];if(S===void 0){const v=p._fontString;v!==d&&(e.font=v,d=v),S=n(m,p.letterSpacing,e)+p.letterSpacing,f[M]=S}return S},_=[];for(const m of i){const p=rv(m),M=_.length,S=C=>{let B=0,N=C;do{const{token:G,style:W}=p[N];B+=g(G,W),N++}while(N<p.length&&p[N].continuesFromPrevious);return B},v=C=>{const B=[];let N=C;do B.push({token:p[N].token,style:p[N].style}),N++;while(N<p.length&&p[N].continuesFromPrevious);return B};let T=[],E=0,A=!h,I=null;const b=()=>{I&&I.text.length>0&&T.push(I),I=null},y=()=>{if(b(),T.length>0){const C=T[T.length-1];C.text=fi(C.text),C.text.length===0&&T.pop()}_.push(T),T=[],E=0,A=!1};for(let C=0;C<p.length;C++){const{token:B,style:N,continuesFromPrevious:G}=p[C],W=g(B,N);if(h){const $=zn(B),X=I?.text[I.text.length-1]??T[T.length-1]?.text.slice(-1)??"",Q=X?zn(X):!1;if($&&Q)continue}const D=!G,L=D?S(C):W;if(L>u&&D)if(E>0&&y(),c){const $=v(C);for(let X=0;X<$.length;X++){const Q=$[X].token,it=$[X].style,At=Ip(Q,c,r,s);for(const Ct of At){const Qt=g(Ct,it);Qt+E>u&&y(),!I||I.style!==it?(b(),I={text:Ct,style:it}):I.text+=Ct,E+=Qt}}C+=$.length-1}else{const $=v(C);b(),_.push($.map(X=>({text:X.token,style:X.style}))),A=!1,C+=$.length-1}else if(L+E>u&&D){if(zn(B)){A=!1;continue}y(),I={text:B,style:N},E=W}else if(G&&!c)!I||I.style!==N?(b(),I={text:B,style:N}):I.text+=B,E+=W;else{const $=zn(B);if(E===0&&$&&!A)continue;!I||I.style!==N?(b(),I={text:B,style:N}):I.text+=B,E+=W}}if(b(),T.length>0){const C=T[T.length-1];C.text=fi(C.text),C.text.length===0&&T.pop()}(T.length>0||_.length===M)&&_.push(T)}return _}function rv(i){const t=[];let e=!1;for(const n of i){const s=Pp(n.text);let r=!0;for(const a of s){const o=zn(a)||ph(a),l=r&&e&&!o;t.push({token:a,style:n.style,continuesFromPrevious:l}),e=!o,r=!1}}return t}const av={willReadFrequently:!0};function Vu(i,t,e,n,s){let r=e[i];return typeof r!="number"&&(r=s(i,t,n)+t,e[i]=r),r}function ov(i,t,e,n,s,r,a){const o=e.getContext("2d",av);o.font=t._fontString;let l=0,c="";const h=[],u=Object.create(null),{letterSpacing:f,whiteSpace:d}=t,g=Cp(d),_=Rp(d);let m=!g;const p=t.wordWrapWidth+f,M=Pp(i);for(let v=0;v<M.length;v++){let T=M[v];if(ph(T)){if(!_){h.push(fi(c)),m=!g,c="",l=0;continue}T=" "}if(g){const A=zn(T),I=zn(c[c.length-1]);if(A&&I)continue}const E=Vu(T,f,u,o,n);if(E>p)if(c!==""&&(h.push(fi(c)),c="",l=0),s(T,t.breakWords)){const A=Ip(T,t.breakWords,a,r);for(const I of A){const b=Vu(I,f,u,o,n);b+l>p&&(h.push(fi(c)),m=!1,c="",l=0),c+=I,l+=b}}else c.length>0&&(h.push(fi(c)),c="",l=0),h.push(fi(T)),m=!1,c="",l=0;else E+l>p&&(m=!1,h.push(fi(c)),c="",l=0),(c.length>0||!zn(T)||m)&&(c+=T,l+=E)}const S=fi(c);return S.length>0&&h.push(S),h.join(`
`)}const Wu={willReadFrequently:!0},Ti=class kt{static get experimentalLetterSpacingSupported(){let t=kt._experimentalLetterSpacingSupported;if(t===void 0){const e=xn.get().getCanvasRenderingContext2D().prototype;t=kt._experimentalLetterSpacingSupported="letterSpacing"in e||"textLetterSpacing"in e}return t}constructor(t,e,n,s,r,a,o,l,c,h){this.text=t,this.style=e,this.width=n,this.height=s,this.lines=r,this.lineWidths=a,this.lineHeight=o,this.maxLineWidth=l,this.fontProperties=c,h&&(this.runsByLine=h.runsByLine,this.lineAscents=h.lineAscents,this.lineDescents=h.lineDescents,this.lineHeights=h.lineHeights,this.hasDropShadow=h.hasDropShadow)}static measureText(t=" ",e,n=kt._canvas,s=e.wordWrap){const r=`${t}-${e.styleKey}-wordWrap-${s}`;if(kt._measurementCache.has(r))return kt._measurementCache.get(r);if(wp(e)&&Ap(t)){const T=iv(t,e,s,kt._context,kt._measureText,kt.measureFont,kt.canBreakChars,kt.wordWrapSplit),E=new kt(t,e,T.width,T.height,T.lines,T.lineWidths,T.lineHeight,T.maxLineWidth,T.fontProperties,{runsByLine:T.runsByLine,lineAscents:T.lineAscents,lineDescents:T.lineDescents,lineHeights:T.lineHeights,hasDropShadow:T.hasDropShadow});return kt._measurementCache.set(r,E),E}const o=e._fontString,l=kt.measureFont(o);l.fontSize===0&&(l.fontSize=e.fontSize,l.ascent=e.fontSize,l.descent=0);const c=kt._context;c.font=o;const u=(s?kt._wordWrap(t,e,n):t).split(ev),f=new Array(u.length);let d=0;for(let T=0;T<u.length;T++){const E=kt._measureText(u[T],e.letterSpacing,c);f[T]=E,d=Math.max(d,E)}const g=e._stroke?.width??0,_=e.lineHeight||l.fontSize,m=kt._getAlignWidth(d,e,s),p=kt._adjustWidthForStyle(m,e),M=Math.max(_,l.fontSize+g)+(u.length-1)*(_+e.leading),S=kt._adjustHeightForStyle(M,e),v=new kt(t,e,p,S,u,f,_+e.leading,d,l);return kt._measurementCache.set(r,v),v}static _adjustWidthForStyle(t,e){const n=e._stroke?.width||0;let s=t+n;return e.dropShadow&&(s+=e.dropShadow.distance),s}static _adjustHeightForStyle(t,e){let n=t;return e.dropShadow&&(n+=e.dropShadow.distance),n}static _getAlignWidth(t,e,n){return n&&e.align!=="left"&&e.align!=="justify"?Math.max(t,e.wordWrapWidth):t}static _measureText(t,e,n){let s=!1;kt.experimentalLetterSpacingSupported&&(kt.experimentalLetterSpacing?(n.letterSpacing=`${e}px`,n.textLetterSpacing=`${e}px`,s=!0):(n.letterSpacing="0px",n.textLetterSpacing="0px"));const r=n.measureText(t);let a=r.width;const o=-(r.actualBoundingBoxLeft??0);let c=(r.actualBoundingBoxRight??0)-o;if(a>0)if(s)a-=e,c-=e;else{const h=(kt.graphemeSegmenter(t).length-1)*e;a+=h,c+=h}return Math.max(a,c)}static _wordWrap(t,e,n=kt._canvas){return ov(t,e,n,kt._measureText,kt.canBreakWords,kt.canBreakChars,kt.wordWrapSplit)}static isBreakingSpace(t,e){return zn(t)}static canBreakWords(t,e){return e}static canBreakChars(t,e,n,s,r){return!0}static wordWrapSplit(t){return kt.graphemeSegmenter(t)}static measureFont(t){if(kt._fonts[t])return kt._fonts[t];const e=kt._context;e.font=t;const n=e.measureText(kt.METRICS_STRING+kt.BASELINE_SYMBOL),s=n.actualBoundingBoxAscent??0,r=n.actualBoundingBoxDescent??0,a={ascent:s,descent:r,fontSize:s+r};return kt._fonts[t]=a,a}static clearMetrics(t=""){t?delete kt._fonts[t]:kt._fonts={}}static get _canvas(){if(!kt.__canvas){let t;try{const e=new OffscreenCanvas(0,0);if(e.getContext("2d",Wu)?.measureText)return kt.__canvas=e,e;t=xn.get().createCanvas()}catch{t=xn.get().createCanvas()}t.width=t.height=10,kt.__canvas=t}return kt.__canvas}static get _context(){return kt.__context||(kt.__context=kt._canvas.getContext("2d",Wu)),kt.__context}};Ti.METRICS_STRING="|ÉqÅ";Ti.BASELINE_SYMBOL="M";Ti.BASELINE_MULTIPLIER=1.4;Ti.HEIGHT_MULTIPLIER=2;Ti.graphemeSegmenter=(()=>{if(typeof Intl?.Segmenter=="function"){const i=new Intl.Segmenter;return t=>{const e=i.segment(t),n=[];let s=0;for(const r of e)n[s++]=r.segment;return n}}return i=>[...i]})();Ti.experimentalLetterSpacing=!1;Ti._fonts={};Ti._measurementCache=$x(1e3);let Fi=Ti;const lv=["serif","sans-serif","monospace","cursive","fantasy","system-ui"];function nc(i){const t=typeof i.fontSize=="number"?`${i.fontSize}px`:i.fontSize;let e=i.fontFamily;Array.isArray(i.fontFamily)||(e=i.fontFamily.split(","));for(let n=e.length-1;n>=0;n--){let s=e[n].trim();!/([\"\'])[^\'\"]+\1/.test(s)&&!lv.includes(s)&&(s=`"${s}"`),e[n]=s}return`${i.fontStyle} ${i.fontVariant} ${i.fontWeight} ${t} ${e.join(",")}`}const Xu=1e5;function fa(i,t,e,n=0,s=0,r=0){if(i.texture===ye.WHITE&&!i.fill)return He.shared.setValue(i.color).setAlpha(i.alpha??1).toHexa();if(i.fill){if(i.fill instanceof ao){const a=i.fill,o=t.createPattern(a.texture.source.resource,"repeat"),l=a.transform.copyTo(ne.shared);return l.scale(a.texture.source.pixelWidth,a.texture.source.pixelHeight),o.setTransform(l),o}else if(i.fill instanceof yi){const a=i.fill,o=a.type==="linear",l=a.textureSpace==="local";let c=1,h=1;l&&e&&(c=e.width+n,h=e.height+n);let u,f=!1;if(o){const{start:d,end:g}=a;u=t.createLinearGradient(d.x*c+s,d.y*h+r,g.x*c+s,g.y*h+r),f=Math.abs(g.x-d.x)<Math.abs((g.y-d.y)*.1)}else{const{center:d,innerRadius:g,outerCenter:_,outerRadius:m}=a;u=t.createRadialGradient(d.x*c+s,d.y*h+r,g*c,_.x*c+s,_.y*h+r,m*c)}if(f&&l&&e){const d=e.lineHeight/h;for(let g=0;g<e.lines.length;g++){const _=(g*e.lineHeight+n/2)/h;a.colorStops.forEach(m=>{let p=_+m.offset*d;p=Math.max(0,Math.min(1,p)),u.addColorStop(Math.floor(p*Xu)/Xu,He.shared.setValue(m.color).toHex())})}}else a.colorStops.forEach(d=>{u.addColorStop(d.offset,He.shared.setValue(d.color).toHex())});return u}}else{const a=t.createPattern(i.texture.source.resource,"repeat"),o=i.matrix.copyTo(ne.shared);return o.scale(i.texture.source.pixelWidth,i.texture.source.pixelHeight),a.setTransform(o),a}return on("FillStyle not recognised",i),"red"}const Yu=new Oe;class cv{getCanvasAndContext(t){const{text:e,style:n,resolution:s=1}=t,r=n._getFinalPadding(),a=Fi.measureText(e||" ",n),o=Math.ceil(Math.ceil(Math.max(1,a.width)+r*2)*s),l=Math.ceil(Math.ceil(Math.max(1,a.height)+r*2)*s),c=ec.getOptimalCanvasAndContext(o,l);this._renderTextToCanvas(n,r,s,c,a);const h=n.trim?Xx({canvas:c.canvas,width:o,height:l,resolution:1,output:Yu}):Yu.set(0,0,o,l);return{canvasAndContext:c,frame:h}}returnCanvasAndContext(t){ec.returnCanvasAndContext(t)}_renderTextToCanvas(t,e,n,s,r){if(r.runsByLine&&r.runsByLine.length>0){this._renderTaggedTextToCanvas(r,t,e,n,s);return}const{canvas:a,context:o}=s,l=nc(t),c=r.lines,h=r.lineHeight,u=r.lineWidths,f=r.maxLineWidth,d=r.fontProperties,g=a.height;if(o.resetTransform(),o.scale(n,n),o.textBaseline=t.textBaseline,t._stroke?.width){const E=t._stroke;o.lineWidth=E.width,o.miterLimit=E.miterLimit,o.lineJoin=E.join,o.lineCap=E.cap}o.font=l;let _,m;const p=t.dropShadow?2:1,M=t.wordWrap?t.wordWrapWidth:f,v=(t._stroke?.width??0)/2;let T=(h-d.fontSize)/2;h-d.fontSize<0&&(T=0);for(let E=0;E<p;++E){const A=t.dropShadow&&E===0,I=A?Math.ceil(Math.max(1,g)+e*2):0,b=I*n;if(A)this._setupDropShadow(o,t,n,b);else{const y=t._gradientBounds,C=t._gradientOffset;if(y){const B={width:y.width,height:y.height,lineHeight:y.height,lines:r.lines};this._setFillAndStrokeStyles(o,t,B,e,v,C?.x??0,C?.y??0)}else C?this._setFillAndStrokeStyles(o,t,r,e,v,C.x,C.y):this._setFillAndStrokeStyles(o,t,r,e,v);o.shadowColor="black"}for(let y=0;y<c.length;y++)_=v,m=v+y*h+d.ascent+T,_+=this._getAlignmentOffset(u[y],M,t.align),t._stroke?.width&&this._drawLetterSpacing(c[y],t,s,_+e,m+e-I,!0),t._fill!==void 0&&this._drawLetterSpacing(c[y],t,s,_+e,m+e-I)}}_renderTaggedTextToCanvas(t,e,n,s,r){const{canvas:a,context:o}=r,{runsByLine:l,lineWidths:c,maxLineWidth:h,lineAscents:u,lineHeights:f,hasDropShadow:d}=t,g=a.height;o.resetTransform(),o.scale(s,s),o.textBaseline=e.textBaseline;const _=d?2:1,m=e.wordWrap?e.wordWrapWidth:h,M=(e._stroke?.width??0)/2,S=[];for(let v=0;v<l.length;v++){const T=l[v],E=[];for(const A of T){const I=nc(A.style);o.font=I,E.push({width:Fi._measureText(A.text,A.style.letterSpacing,o),font:I})}S.push(E)}for(let v=0;v<_;++v){const T=d&&v===0,E=T?Math.ceil(Math.max(1,g)+n*2):0,A=E*s;T||(o.shadowColor="black");let I=M;for(let b=0;b<l.length;b++){const y=l[b],C=c[b],B=u[b],N=f[b],G=S[b];let W=M;W+=this._getAlignmentOffset(C,m,e.align);const D=I+B;let L=W+n;for(let $=0;$<y.length;$++){const X=y[$],{width:Q,font:it}=G[$];if(o.font=it,o.textBaseline=X.style.textBaseline,X.style._stroke?.width){const At=X.style._stroke;if(o.lineWidth=At.width,o.miterLimit=At.miterLimit,o.lineJoin=At.join,o.lineCap=At.cap,T)if(X.style.dropShadow)this._setupDropShadow(o,X.style,s,A);else{L+=Q;continue}else{const Ct=Fi.measureFont(it),Qt=X.style.lineHeight||Ct.fontSize,ae={width:Q,height:Qt,lineHeight:Qt,lines:[X.text]};o.strokeStyle=fa(At,o,ae,n*2,L-n,I)}this._drawLetterSpacing(X.text,X.style,r,L,D+n-E,!0)}L+=Q}L=W+n;for(let $=0;$<y.length;$++){const X=y[$],{width:Q,font:it}=G[$];if(o.font=it,o.textBaseline=X.style.textBaseline,X.style._fill!==void 0){if(T)if(X.style.dropShadow)this._setupDropShadow(o,X.style,s,A);else{L+=Q;continue}else{const At=Fi.measureFont(it),Ct=X.style.lineHeight||At.fontSize,Qt={width:Q,height:Ct,lineHeight:Ct,lines:[X.text]};o.fillStyle=fa(X.style._fill,o,Qt,n*2,L-n,I)}this._drawLetterSpacing(X.text,X.style,r,L,D+n-E,!1)}L+=Q}I+=N}}}_setFillAndStrokeStyles(t,e,n,s,r,a=0,o=0){if(t.fillStyle=e._fill?fa(e._fill,t,n,s*2,a,o):null,e._stroke?.width){const l=r+s*2;t.strokeStyle=fa(e._stroke,t,n,l,a,o)}}_setupDropShadow(t,e,n,s){t.fillStyle="black",t.strokeStyle="black";const r=e.dropShadow,a=r.color,o=r.alpha;t.shadowColor=He.shared.setValue(a).setAlpha(o).toRgbaString();const l=r.blur*n,c=r.distance*n;t.shadowBlur=l,t.shadowOffsetX=Math.cos(r.angle)*c,t.shadowOffsetY=Math.sin(r.angle)*c+s}_getAlignmentOffset(t,e,n){return n==="right"?e-t:n==="center"?(e-t)/2:0}_drawLetterSpacing(t,e,n,s,r,a=!1){const{context:o}=n,l=e.letterSpacing;let c=!1;if(Fi.experimentalLetterSpacingSupported&&(Fi.experimentalLetterSpacing?(o.letterSpacing=`${l}px`,o.textLetterSpacing=`${l}px`,c=!0):(o.letterSpacing="0px",o.textLetterSpacing="0px")),l===0||c){a?o.strokeText(t,s,r):o.fillText(t,s,r);return}let h=s;const u=Fi.graphemeSegmenter(t);let f=o.measureText(t).width,d=0;for(let g=0;g<u.length;++g){const _=u[g];a?o.strokeText(_,h,r):o.fillText(_,h,r);let m="";for(let p=g+1;p<u.length;++p)m+=u[p];d=o.measureText(m).width,h+=f-d+l,f=d}}}const Vs=new cv,mh=class cs extends ii{constructor(t={}){super(),this.uid=Ue("textStyle"),this._tick=0,this._cachedFontString=null,hv(t),t instanceof cs&&(t=t._toObject());const s={...cs.defaultTextStyle,...t};for(const r in s){const a=r;this[a]=s[r]}this._tagStyles=t.tagStyles??void 0,this.update(),this._tick=0}get align(){return this._align}set align(t){this._align!==t&&(this._align=t,this.update())}get breakWords(){return this._breakWords}set breakWords(t){this._breakWords!==t&&(this._breakWords=t,this.update())}get dropShadow(){return this._dropShadow}set dropShadow(t){this._dropShadow!==t&&(t!==null&&typeof t=="object"?this._dropShadow=this._createProxy({...cs.defaultDropShadow,...t}):this._dropShadow=t?this._createProxy({...cs.defaultDropShadow}):null,this.update())}get fontFamily(){return this._fontFamily}set fontFamily(t){this._fontFamily!==t&&(this._fontFamily=t,this.update())}get fontSize(){return this._fontSize}set fontSize(t){this._fontSize!==t&&(typeof t=="string"?this._fontSize=parseInt(t,10):this._fontSize=t,this.update())}get fontStyle(){return this._fontStyle}set fontStyle(t){this._fontStyle!==t&&(this._fontStyle=t.toLowerCase(),this.update())}get fontVariant(){return this._fontVariant}set fontVariant(t){this._fontVariant!==t&&(this._fontVariant=t,this.update())}get fontWeight(){return this._fontWeight}set fontWeight(t){this._fontWeight!==t&&(this._fontWeight=t,this.update())}get leading(){return this._leading}set leading(t){this._leading!==t&&(this._leading=t,this.update())}get letterSpacing(){return this._letterSpacing}set letterSpacing(t){this._letterSpacing!==t&&(this._letterSpacing=t,this.update())}get lineHeight(){return this._lineHeight}set lineHeight(t){this._lineHeight!==t&&(this._lineHeight=t,this.update())}get padding(){return this._padding}set padding(t){this._padding!==t&&(this._padding=t,this.update())}get filters(){return this._filters}set filters(t){this._filters!==t&&(this._filters=Object.freeze(t),this.update())}get trim(){return this._trim}set trim(t){this._trim!==t&&(this._trim=t,this.update())}get textBaseline(){return this._textBaseline}set textBaseline(t){this._textBaseline!==t&&(this._textBaseline=t,this.update())}get whiteSpace(){return this._whiteSpace}set whiteSpace(t){this._whiteSpace!==t&&(this._whiteSpace=t,this.update())}get wordWrap(){return this._wordWrap}set wordWrap(t){this._wordWrap!==t&&(this._wordWrap=t,this.update())}get wordWrapWidth(){return this._wordWrapWidth}set wordWrapWidth(t){this._wordWrapWidth!==t&&(this._wordWrapWidth=t,this.update())}get fill(){return this._originalFill}set fill(t){t!==this._originalFill&&(this._originalFill=t,this._isFillStyle(t)&&(this._originalFill=this._createProxy({...kn.defaultFillStyle,...t},()=>{this._fill=fs({...this._originalFill},kn.defaultFillStyle)})),this._fill=fs(t===0?"black":t,kn.defaultFillStyle),this.update())}get stroke(){return this._originalStroke}set stroke(t){t!==this._originalStroke&&(this._originalStroke=t,this._isFillStyle(t)&&(this._originalStroke=this._createProxy({...kn.defaultStrokeStyle,...t},()=>{this._stroke=Ka({...this._originalStroke},kn.defaultStrokeStyle)})),this._stroke=Ka(t,kn.defaultStrokeStyle),this.update())}get tagStyles(){return this._tagStyles}set tagStyles(t){this._tagStyles!==t&&(this._tagStyles=t??void 0,this.update())}update(){this._tick++,this._cachedFontString=null,this.emit("update",this)}reset(){const t=cs.defaultTextStyle;for(const e in t)this[e]=t[e]}assign(t){for(const e in t){const n=e;this[n]=t[e]}return this}get styleKey(){return`${this.uid}-${this._tick}`}get _fontString(){return this._cachedFontString===null&&(this._cachedFontString=nc(this)),this._cachedFontString}_toObject(){return{align:this.align,breakWords:this.breakWords,dropShadow:this._dropShadow?{...this._dropShadow}:null,fill:this._fill?{...this._fill}:void 0,fontFamily:this.fontFamily,fontSize:this.fontSize,fontStyle:this.fontStyle,fontVariant:this.fontVariant,fontWeight:this.fontWeight,leading:this.leading,letterSpacing:this.letterSpacing,lineHeight:this.lineHeight,padding:this.padding,stroke:this._stroke?{...this._stroke}:void 0,textBaseline:this.textBaseline,trim:this.trim,whiteSpace:this.whiteSpace,wordWrap:this.wordWrap,wordWrapWidth:this.wordWrapWidth,filters:this._filters?[...this._filters]:void 0,tagStyles:this._tagStyles?{...this._tagStyles}:void 0}}clone(){return new cs(this._toObject())}_getFinalPadding(){let t=0;if(this._filters)for(let e=0;e<this._filters.length;e++)t+=this._filters[e].padding;return Math.max(this._padding,t)}destroy(t=!1){if(this.removeAllListeners(),typeof t=="boolean"?t:t?.texture){const n=typeof t=="boolean"?t:t?.textureSource;this._fill?.texture&&this._fill.texture.destroy(n),this._originalFill?.texture&&this._originalFill.texture.destroy(n),this._stroke?.texture&&this._stroke.texture.destroy(n),this._originalStroke?.texture&&this._originalStroke.texture.destroy(n)}this._fill=null,this._stroke=null,this.dropShadow=null,this._originalStroke=null,this._originalFill=null}_createProxy(t,e){return new Proxy(t,{set:(n,s,r)=>(n[s]===r||(n[s]=r,e?.(s,r),this.update()),!0)})}_isFillStyle(t){return(t??null)!==null&&!(He.isColorLike(t)||t instanceof yi||t instanceof ao)}};mh.defaultDropShadow={alpha:1,angle:Math.PI/6,blur:0,color:"black",distance:5};mh.defaultTextStyle={align:"left",breakWords:!1,dropShadow:null,fill:"black",fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",leading:0,letterSpacing:0,lineHeight:0,padding:0,stroke:null,textBaseline:"alphabetic",trim:!1,whiteSpace:"pre",wordWrap:!1,wordWrapWidth:100};let un=mh;function hv(i){const t=i;if(typeof t.dropShadow=="boolean"&&t.dropShadow){const e=un.defaultDropShadow;i.dropShadow={alpha:t.dropShadowAlpha??e.alpha,angle:t.dropShadowAngle??e.angle,blur:t.dropShadowBlur??e.blur,color:t.dropShadowColor??e.color,distance:t.dropShadowDistance??e.distance}}if(t.strokeThickness!==void 0){ce(Le,"strokeThickness is now a part of stroke");const e=t.stroke;let n={};if(He.isColorLike(e))n.color=e;else if(e instanceof yi||e instanceof ao)n.fill=e;else if(Object.hasOwnProperty.call(e,"color")||Object.hasOwnProperty.call(e,"fill"))n=e;else throw new Error("Invalid stroke value.");i.stroke={...n,width:t.strokeThickness}}if(Array.isArray(t.fillGradientStops)){if(ce(Le,"gradient fill is now a fill pattern: `new FillGradient(...)`"),!Array.isArray(t.fill)||t.fill.length===0)throw new Error("Invalid fill value. Expected an array of colors for gradient fill.");t.fill.length!==t.fillGradientStops.length&&on("The number of fill colors must match the number of fill gradient stops.");const e=new yi({start:{x:0,y:0},end:{x:0,y:1},textureSpace:"local"}),n=t.fillGradientStops.slice(),s=t.fill.map(r=>He.shared.setValue(r).toNumber());n.forEach((r,a)=>{e.addColorStop(r,s[a])}),i.fill={fill:e}}}function uv(i,t){const{texture:e,bounds:n}=i,s=t._style._getFinalPadding();mf(n,t._anchor,e);const r=t._anchor._x*s*2,a=t._anchor._y*s*2;n.minX-=s-r,n.minY-=s-a,n.maxX-=s-r,n.maxY-=s-a}class dv{constructor(){this.batcherName="default",this.topology="triangle-list",this.attributeSize=4,this.indexSize=6,this.packAsQuad=!0,this.roundPixels=0,this._attributeStart=0,this._batcher=null,this._batch=null}get blendMode(){return this.renderable.groupBlendMode}get color(){return this.renderable.groupColorAlpha}reset(){this.renderable=null,this.texture=null,this._batcher=null,this._batch=null,this.bounds=null}destroy(){this.reset()}}class fv extends dv{}class Dp{constructor(t){this._renderer=t,t.runners.resolutionChange.add(this),this._managedTexts=new Wr({renderer:t,type:"renderable",onUnload:this.onTextUnload.bind(this),name:"canvasText"})}resolutionChange(){for(const t in this._managedTexts.items){const e=this._managedTexts.items[t];e?._autoResolution&&e.onViewUpdate()}}validateRenderable(t){const e=this._getGpuText(t),n=t.styleKey;return e.currentKey!==n?!0:t._didTextUpdate}addRenderable(t,e){const n=this._getGpuText(t);if(t._didTextUpdate){const s=t._autoResolution?this._renderer.resolution:t.resolution;(n.currentKey!==t.styleKey||t._resolution!==s)&&this._updateGpuText(t),t._didTextUpdate=!1,uv(n,t)}this._renderer.renderPipes.batch.addToBatch(n,e)}updateRenderable(t){const e=this._getGpuText(t);e._batcher.updateElement(e)}_updateGpuText(t){const e=this._getGpuText(t);e.texture&&this._renderer.canvasText.decreaseReferenceCount(e.currentKey),t._resolution=t._autoResolution?this._renderer.resolution:t.resolution,e.texture=this._renderer.canvasText.getManagedTexture(t),e.currentKey=t.styleKey}_getGpuText(t){return t._gpuData[this._renderer.uid]||this.initGpuText(t)}initGpuText(t){const e=new fv;return e.currentKey="--",e.renderable=t,e.transform=t.groupTransform,e.bounds={minX:0,maxX:1,minY:0,maxY:0},e.roundPixels=this._renderer._roundPixels|t._roundPixels,t._gpuData[this._renderer.uid]=e,this._managedTexts.add(t),e}onTextUnload(t){const e=t._gpuData[this._renderer.uid];if(!e)return;const{canvasText:n}=this._renderer;n.getReferenceCount(e.currentKey)>0?n.decreaseReferenceCount(e.currentKey):e.texture&&n.returnTexture(e.texture)}destroy(){this._managedTexts.destroy(),this._renderer=null}}Dp.extension={type:[qt.WebGLPipes,qt.WebGPUPipes,qt.CanvasPipes],name:"text"};const pv=new In;function mv(i,t,e,n){const s=pv;s.minX=0,s.minY=0,s.maxX=i.width/n|0,s.maxY=i.height/n|0;const r=no.getOptimalTexture(s.width,s.height,n,!1);return r.source.uploadMethodId="image",r.source.resource=i,r.source.alphaMode="premultiply-alpha-on-upload",r.frame.width=t/n,r.frame.height=e/n,r.source.emit("update",r.source),r.updateUvs(),r}class Lp{constructor(t,e){this._activeTextures={},this._renderer=t,this._retainCanvasContext=e}getTexture(t,e,n,s){typeof t=="string"&&(ce("8.0.0","CanvasTextSystem.getTexture: Use object TextOptions instead of separate arguments"),t={text:t,style:n,resolution:e}),t.style instanceof un||(t.style=new un(t.style)),t.textureStyle instanceof qs||(t.textureStyle=new qs(t.textureStyle)),typeof t.text!="string"&&(t.text=t.text.toString());const{text:r,style:a,textureStyle:o}=t,l=t.resolution??this._renderer.resolution,{frame:c,canvasAndContext:h}=Vs.getCanvasAndContext({text:r,style:a,resolution:l}),u=mv(h.canvas,c.width,c.height,l);if(o&&(u.source.style=o),a.trim&&(c.pad(a.padding),u.frame.copyFrom(c),u.frame.scale(1/l),u.updateUvs()),a.filters){const f=this._applyFilters(u,a.filters);return this.returnTexture(u),Vs.returnCanvasAndContext(h),f}return this._renderer.texture.initSource(u._source),this._retainCanvasContext||Vs.returnCanvasAndContext(h),u}returnTexture(t){const e=t.source,n=e.resource;if(this._retainCanvasContext&&n?.getContext){const s=n.getContext("2d");s&&Vs.returnCanvasAndContext({canvas:n,context:s})}e.resource=null,e.uploadMethodId="unknown",e.alphaMode="no-premultiply-alpha",no.returnTexture(t,!0)}renderTextToCanvas(){ce("8.10.0","CanvasTextSystem.renderTextToCanvas: no longer supported, use CanvasTextSystem.getTexture instead")}getManagedTexture(t){t._resolution=t._autoResolution?this._renderer.resolution:t.resolution;const e=t.styleKey;if(this._activeTextures[e])return this._increaseReferenceCount(e),this._activeTextures[e].texture;const n=this.getTexture({text:t.text,style:t.style,resolution:t._resolution,textureStyle:t.textureStyle});return this._activeTextures[e]={texture:n,usageCount:1},n}decreaseReferenceCount(t){const e=this._activeTextures[t];e&&(e.usageCount--,e.usageCount===0&&(this.returnTexture(e.texture),this._activeTextures[t]=null))}getReferenceCount(t){return this._activeTextures[t]?.usageCount??0}_increaseReferenceCount(t){this._activeTextures[t].usageCount++}_applyFilters(t,e){const n=this._renderer.renderTarget.renderTarget,s=this._renderer.filter.generateFilteredTexture({texture:t,filters:e});return this._renderer.renderTarget.bind(n,!1),s}destroy(){this._renderer=null;for(const t in this._activeTextures)this._activeTextures[t]&&this.returnTexture(this._activeTextures[t].texture);this._activeTextures=null}}class Up extends Lp{constructor(t){super(t,!0)}}Up.extension={type:[qt.CanvasSystem],name:"canvasText"};class Fp extends Lp{constructor(t){super(t,!1)}}Fp.extension={type:[qt.WebGLSystem,qt.WebGPUSystem],name:"canvasText"};Be.add(Up);Be.add(Fp);Be.add(Dp);class Xn extends zx{constructor(...t){const e=Hx(t,"Text");super(e,un),this.renderPipeId="text",e.textureStyle&&(this.textureStyle=e.textureStyle instanceof qs?e.textureStyle:new qs(e.textureStyle))}updateBounds(){const t=this._bounds,e=this._anchor;let n=0,s=0;if(this._style.trim){const{frame:r,canvasAndContext:a}=Vs.getCanvasAndContext({text:this.text,style:this._style,resolution:1});Vs.returnCanvasAndContext(a),n=r.width,s=r.height}else{const r=Fi.measureText(this._text,this._style);n=r.width,s=r.height}t.minX=-e._x*n,t.maxX=t.minX+n,t.minY=-e._y*s,t.maxY=t.minY+s}}Be.add(Ym,$m);const ic=80;class gv{leftKey={down:!1,timestamp:0};rightKey={down:!1,timestamp:0};leftTouch={down:!1,timestamp:0};rightTouch={down:!1,timestamp:0};leftTouchId=null;rightTouchId=null;canvas;leftPressQueue=0;rightPressQueue=0;constructor(t){this.canvas=t,this.bindKeyboard(),this.bindTouch()}bindKeyboard(){window.addEventListener("keydown",t=>{if(t.repeat)return;const e=performance.now();(t.key==="a"||t.key==="A"||t.key==="ArrowLeft")&&(this.leftKey={down:!0,timestamp:e},this.leftPressQueue++),(t.key==="d"||t.key==="D"||t.key==="ArrowRight")&&(this.rightKey={down:!0,timestamp:e},this.rightPressQueue++)}),window.addEventListener("keyup",t=>{(t.key==="a"||t.key==="A"||t.key==="ArrowLeft")&&(this.leftKey={down:!1,timestamp:0}),(t.key==="d"||t.key==="D"||t.key==="ArrowRight")&&(this.rightKey={down:!1,timestamp:0})})}bindTouch(){this.canvas.addEventListener("touchstart",t=>{t.preventDefault();const e=performance.now(),n=this.canvas.getBoundingClientRect();for(const s of Array.from(t.changedTouches)){const r=s.clientX-n.left,a=n.width/2;r<a&&this.leftTouchId===null?(this.leftTouchId=s.identifier,this.leftTouch={down:!0,timestamp:e},this.leftPressQueue++):r>=a&&this.rightTouchId===null&&(this.rightTouchId=s.identifier,this.rightTouch={down:!0,timestamp:e},this.rightPressQueue++)}}),this.canvas.addEventListener("touchend",t=>{t.preventDefault();for(const e of Array.from(t.changedTouches))e.identifier===this.leftTouchId&&(this.leftTouchId=null,this.leftTouch={down:!1,timestamp:0}),e.identifier===this.rightTouchId&&(this.rightTouchId=null,this.rightTouch={down:!1,timestamp:0})}),this.canvas.addEventListener("touchcancel",t=>{for(const e of Array.from(t.changedTouches))e.identifier===this.leftTouchId&&(this.leftTouchId=null,this.leftTouch={down:!1,timestamp:0}),e.identifier===this.rightTouchId&&(this.rightTouchId=null,this.rightTouch={down:!1,timestamp:0})})}get left(){return this.leftKey.down||this.leftTouch.down}get right(){return this.rightKey.down||this.rightTouch.down}consumeLeftPresses(){const t=this.leftPressQueue;return this.leftPressQueue=0,t}consumeRightPresses(){const t=this.rightPressQueue;return this.rightPressQueue=0,t}getAction(){const t=this.left,e=this.right;if(t&&e)return"shake";if(t&&!e){const n=Math.max(this.leftKey.timestamp,this.leftTouch.timestamp),s=Math.max(this.rightKey.timestamp,this.rightTouch.timestamp);return s>0&&n-s<ic&&n-s>0?"shake":"left"}if(e&&!t){const n=Math.max(this.leftKey.timestamp,this.leftTouch.timestamp),s=Math.max(this.rightKey.timestamp,this.rightTouch.timestamp);return n>0&&s-n<ic&&s-n>0?"shake":"right"}return"none"}destroy(){}}const oo="sfx/",Ae=`${oo}kenney_casino-audio/Audio/`,ee=`${oo}kenney_impact-sounds/Audio/`,nn=`${oo}kenney_interface-sounds/Audio/`,oi=`${oo}kenney_rpg-audio/Audio/`;class _v{ctx=null;buffers=new Map;loading=new Set;nextProximityClick=0;getCtx(){if(!this.ctx)try{this.ctx=new AudioContext}catch{return null}return this.ctx}unlock(){const t=this.getCtx();t&&t.state==="suspended"&&t.resume(),this.preload()}async loadSound(t){if(!(this.buffers.has(t)||this.loading.has(t))){this.loading.add(t);try{const n=await(await fetch(t)).arrayBuffer(),s=this.getCtx();if(s){const r=await s.decodeAudioData(n);this.buffers.set(t,r)}}catch{}this.loading.delete(t)}}preload(){const t=[`${nn}tick_001.ogg`,`${nn}click_003.ogg`,`${Ae}dice-shake-1.ogg`,`${Ae}dice-shake-2.ogg`,`${Ae}dice-shake-3.ogg`,`${nn}glass_003.ogg`,`${oi}handleCoins.ogg`,`${oi}handleCoins2.ogg`,`${Ae}chips-handle-1.ogg`,`${Ae}chips-handle-2.ogg`,`${Ae}chips-handle-3.ogg`,`${Ae}chips-handle-4.ogg`,`${Ae}chips-handle-5.ogg`,`${Ae}chips-handle-6.ogg`,`${Ae}chip-lay-1.ogg`,`${Ae}chip-lay-2.ogg`,`${Ae}chip-lay-3.ogg`,`${nn}error_004.ogg`,`${Ae}card-slide-1.ogg`,`${oi}creak1.ogg`,`${oi}creak2.ogg`,`${oi}creak3.ogg`,`${ee}impactWood_heavy_000.ogg`,`${ee}impactWood_heavy_001.ogg`,`${ee}impactWood_light_000.ogg`,`${ee}impactWood_light_001.ogg`,`${ee}impactWood_light_002.ogg`,`${ee}impactWood_light_003.ogg`,`${ee}impactWood_light_004.ogg`,`${ee}impactSoft_heavy_000.ogg`,`${ee}impactSoft_heavy_001.ogg`,`${ee}impactPunch_heavy_000.ogg`,`${ee}impactPunch_heavy_001.ogg`,`${nn}glass_001.ogg`,`${nn}glass_002.ogg`,`${nn}confirmation_002.ogg`,`${ee}impactPlank_medium_000.ogg`,`${ee}impactPlank_medium_001.ogg`,`${ee}impactBell_heavy_000.ogg`,`${ee}impactBell_heavy_001.ogg`,`${ee}impactBell_heavy_002.ogg`];for(const e of t)this.loadSound(e)}play(t,e=1,n=1){const s=this.getCtx();if(!s)return;const r=this.buffers.get(t);if(!r)return;const a=s.createBufferSource();a.buffer=r,a.playbackRate.value=n;const o=s.createGain();o.gain.value=e,a.connect(o).connect(s.destination),a.start()}playRandom(t,e=1,n=1){const s=t[Math.floor(Math.random()*t.length)];this.play(s,e,n)}playTick(){this.play(`${nn}tick_001.ogg`,.5,.9+Math.random()*.2)}updateProximity(t,e){if(t<=0){this.nextProximityClick=0;return}const n=.06+(1-t)*.74;this.nextProximityClick-=e,this.nextProximityClick<=0&&(this.nextProximityClick=n,this.play(`${nn}click_003.ogg`,.15+t*.35,.7+t*.8))}resetProximity(){this.nextProximityClick=0}playShakeRattle(t){this.playRandom([`${Ae}dice-shake-1.ogg`,`${Ae}dice-shake-2.ogg`,`${Ae}dice-shake-3.ogg`],.4,.8+Math.random()*.4)}playCoinOut(t){this.playRandom([`${Ae}chip-lay-1.ogg`,`${Ae}chip-lay-2.ogg`,`${Ae}chip-lay-3.ogg`],.6)}playTelegraphChime(){this.play(`${nn}glass_003.ogg`,.6)}playTelegraphExtract(t){this.play(`${oi}handleCoins.ogg`,.7),this.play(`${ee}impactBell_heavy_000.ogg`,.25,1.5)}playComboExtract(t,e){const n=Math.min(e,8),s=1+(n-1)*.1,r=.5+(n-1)*.06;this.playRandom([`${Ae}chips-handle-1.ogg`,`${Ae}chips-handle-2.ogg`,`${Ae}chips-handle-3.ogg`,`${Ae}chips-handle-4.ogg`,`${Ae}chips-handle-5.ogg`,`${Ae}chips-handle-6.ogg`],Math.min(r,1),s),n>=3&&this.playRandom([`${ee}impactBell_heavy_000.ogg`,`${ee}impactBell_heavy_001.ogg`,`${ee}impactBell_heavy_002.ogg`],.15+(n-3)*.05,1.2+(n-3)*.15)}playNearMiss(){this.play(`${nn}error_004.ogg`,.35)}playCoinShift(){this.play(`${Ae}card-slide-1.ogg`,.5,.7)}playMimicShiver(){this.playRandom([`${oi}creak1.ogg`,`${oi}creak2.ogg`,`${oi}creak3.ogg`],.3,1.2+Math.random()*.3)}playMimicGrowl(t){this.playRandom([`${ee}impactWood_heavy_000.ogg`,`${ee}impactWood_heavy_001.ogg`],.15+t*.2,.5+Math.random()*.2)}playTeethChatter(){const t=this.getCtx();if(!t)return;const e=3+Math.floor(Math.random()*2),n=[`${ee}impactWood_light_000.ogg`,`${ee}impactWood_light_001.ogg`,`${ee}impactWood_light_002.ogg`,`${ee}impactWood_light_003.ogg`,`${ee}impactWood_light_004.ogg`];for(let s=0;s<e;s++){const r=n[Math.floor(Math.random()*n.length)],a=this.buffers.get(r);if(!a)continue;const o=t.createBufferSource();o.buffer=a,o.playbackRate.value=1.5+Math.random()*.5;const l=t.createGain();l.gain.value=.2,o.connect(l).connect(t.destination),o.start(t.currentTime+s*.06)}}playWarningGrowl(){this.playRandom([`${ee}impactSoft_heavy_000.ogg`,`${ee}impactSoft_heavy_001.ogg`],.6,.4),this.play(`${ee}impactWood_heavy_000.ogg`,.3,.3)}playMimicSnap(){this.playRandom([`${ee}impactPunch_heavy_000.ogg`,`${ee}impactPunch_heavy_001.ogg`],.8,.7),this.playRandom([`${ee}impactPlank_medium_000.ogg`,`${ee}impactPlank_medium_001.ogg`],.6,.5)}playStarChime(t){const e=[`${nn}glass_001.ogg`,`${nn}glass_002.ogg`,`${nn}glass_003.ogg`],n=.8+t*.2;this.play(e[t]??e[2],.5,n),t===2&&this.play(`${nn}confirmation_002.ogg`,.4,1.2)}playEmptyThud(){this.play(`${ee}impactWood_heavy_000.ogg`,.25,.4)}playHandTap(){this.play(`${ee}impactWood_light_000.ogg`,.2)}}const $u=8,qu=3;function lo(i,t,e){const n=Math.abs(i-t);return Math.min(n,e-n)}function Np(i,t,e){if(t.extracted)return 0;const n=lo(i,t.sweetSpot,e);return n>qu?0:1-n/qu}function ju(i,t,e){let n=0;for(const s of t)n=Math.max(n,Np(i,s,e));return n}function xv(i,t,e){let n=null,s=1/0;for(const r of t){if(r.extracted)continue;const a=lo(i,r.sweetSpot,e);a<s&&(s=a,n=r)}return n}function vv(i){const t=i.filter(n=>!n.extracted);if(t.length===0)return null;const e=t[Math.floor(Math.random()*t.length)];return e.extracted=!0,e}function sc(i,t){return{type:i,sweetSpot:Math.floor(Math.random()*t),extracted:!1,misses:0}}function yv(i,t){const e=[];return e.push(sc(i[0],t)),e}function Sv(i,t,e){let n;do n=Math.floor(Math.random()*e);while(n===i.sweetSpot);i.sweetSpot=n,i.misses=0}const Mv=3.5,bv=1.5;function Ku(){return{activeCoin:null,windowTimer:0,cooldown:0,directionHint:0,directionHintTimer:0,justOpened:!1,justReassigned:!1,justMissed:!1}}function Tv(i,t,e,n,s){if(i.justOpened=!1,i.justReassigned=!1,i.justMissed=!1,i.cooldown>0&&(i.cooldown-=s),i.directionHintTimer>0&&(i.directionHintTimer-=s,i.directionHintTimer<=0&&(i.directionHint=0)),i.activeCoin){if(i.activeCoin.extracted){i.activeCoin=null,i.windowTimer=0;return}if(lo(t,i.activeCoin.sweetSpot,n)>1){Zu(i.activeCoin,e,n,i),i.activeCoin=null,i.windowTimer=0;return}i.windowTimer-=s,i.windowTimer<=0&&(Zu(i.activeCoin,e,n,i),i.activeCoin=null,i.windowTimer=0,i.cooldown=bv);return}if(!(i.cooldown>0)){for(const r of e)if(!r.extracted&&r.sweetSpot===t){i.activeCoin=r,i.windowTimer=Mv,i.justOpened=!0;return}}}function Zu(i,t,e,n){n.justMissed=!0,Sv(i,t,e),n.justReassigned=!0}function Ev(i,t,e,n){if(n.activeCoin)return!1;for(const s of t){if(s.extracted)continue;if(lo(i,s.sweetSpot,e)===1)return!0}return!1}const wv=.008,Av=.03,Cv=.01,Rv=.002,Pv=.002,Iv=.7,Dv=.4,Lv=.15,Uv=.5,Fv=.6,Nv=.3,Ov=.8,Ws=1.5,Op=4,Bv=.2,Za=.8,Bp=2.5;function Ju(){return{value:1,stage:"calm",prevStage:"calm",snapTriggered:!1,snapPhase:0,snapTimer:0,gameOver:!1,shiverTimer:Ws+Math.random()*(Op-Ws),shiverActive:0,justShivered:!1,chatterTimer:Za+Math.random()*(Bp-Za),justChattered:!1,growlIntensity:0}}function kv(i){return i>=Iv?"calm":i>=Dv?"twitchy":i>=Lv?"agitated":"snap"}function pa(i,t){i.snapTriggered||i.gameOver||(i.prevStage=i.stage,i.value=Math.max(0,i.value-t),i.stage=kv(i.value))}function Gv(i){return i.stage!==i.prevStage}function zv(i,t){if(i.justShivered=!1,i.justChattered=!1,!i.gameOver){if(i.stage==="snap"&&!i.snapTriggered&&(i.snapTriggered=!0,i.snapPhase=0,i.snapTimer=Uv),i.snapTriggered&&!i.gameOver){i.snapTimer-=t,i.snapTimer<=0&&(i.snapPhase++,i.snapPhase===1?i.snapTimer=Fv:i.snapPhase===2?i.snapTimer=Nv:i.snapPhase===3?i.snapTimer=Ov:i.gameOver=!0);return}if(i.stage==="twitchy"||i.stage==="agitated"){if(i.shiverActive>0)i.shiverActive-=t;else if(i.shiverTimer-=t,i.shiverTimer<=0){i.shiverActive=Bv,i.justShivered=!0;const e=i.stage==="agitated"?Ws*.5:Op-Ws,n=i.stage==="agitated"?Ws*.3:Ws;i.shiverTimer=n+Math.random()*e}}i.stage==="agitated"?(i.chatterTimer-=t,i.chatterTimer<=0&&(i.justChattered=!0,i.chatterTimer=Za+Math.random()*(Bp-Za)),i.growlIntensity=Math.min(1,i.growlIntensity+t*.5)):i.growlIntensity=Math.max(0,i.growlIntensity-t*2)}}function Hv(i){switch(i.stage){case"calm":return 1;case"twitchy":return 1.6;case"agitated":return 2.4;case"snap":return 0}}function Vv(i){switch(i.stage){case"calm":return 1;case"twitchy":return 1.3;case"agitated":return 1.8;case"snap":return 0}}function Wv(i){switch(i.stage){case"calm":return 1;case"twitchy":return 1.5;case"agitated":return 2.5;case"snap":return 0}}const gh="182",Xv=0,Qu=1,Yv=2,za=1,$v=2,Tr=3,ki=0,fn=1,wn=2,xi=0,Xs=1,td=2,ed=3,nd=4,qv=5,us=100,jv=101,Kv=102,Zv=103,Jv=104,Qv=200,ty=201,ey=202,ny=203,rc=204,ac=205,iy=206,sy=207,ry=208,ay=209,oy=210,ly=211,cy=212,hy=213,uy=214,oc=0,lc=1,cc=2,Zs=3,hc=4,uc=5,dc=6,fc=7,kp=0,dy=1,fy=2,Jn=0,Gp=1,zp=2,Hp=3,Vp=4,Wp=5,Xp=6,Yp=7,$p=300,_s=301,Js=302,pc=303,mc=304,co=306,gc=1e3,mi=1001,_c=1002,Ze=1003,py=1004,ma=1005,en=1006,Ko=1007,ps=1008,An=1009,qp=1010,jp=1011,kr=1012,_h=1013,ei=1014,Kn=1015,Si=1016,xh=1017,vh=1018,Gr=1020,Kp=35902,Zp=35899,Jp=1021,Qp=1022,Hn=1023,Mi=1026,ms=1027,tm=1028,yh=1029,Qs=1030,Sh=1031,Mh=1033,Ha=33776,Va=33777,Wa=33778,Xa=33779,xc=35840,vc=35841,yc=35842,Sc=35843,Mc=36196,bc=37492,Tc=37496,Ec=37488,wc=37489,Ac=37490,Cc=37491,Rc=37808,Pc=37809,Ic=37810,Dc=37811,Lc=37812,Uc=37813,Fc=37814,Nc=37815,Oc=37816,Bc=37817,kc=37818,Gc=37819,zc=37820,Hc=37821,Vc=36492,Wc=36494,Xc=36495,Yc=36283,$c=36284,qc=36285,jc=36286,my=3200,gy=0,_y=1,Ni="",Tn="srgb",tr="srgb-linear",Ja="linear",xe="srgb",Ms=7680,id=519,xy=512,vy=513,yy=514,bh=515,Sy=516,My=517,Th=518,by=519,sd=35044,rd="300 es",Zn=2e3,Qa=2001;function em(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function to(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ty(){const i=to("canvas");return i.style.display="block",i}const ad={};function od(...i){const t="THREE."+i.shift();console.log(t,...i)}function Wt(...i){const t="THREE."+i.shift();console.warn(t,...i)}function de(...i){const t="THREE."+i.shift();console.error(t,...i)}function zr(...i){const t=i.join(" ");t in ad||(ad[t]=!0,Wt(...i))}function Ey(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}class nr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zo=Math.PI/180,Kc=180/Math.PI;function Xr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]).toLowerCase()}function re(i,t,e){return Math.max(t,Math.min(e,i))}function wy(i,t){return(i%t+t)%t}function Jo(i,t,e){return(1-e)*i+e*t}function fr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function hn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ve{constructor(t=0,e=0){ve.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yr{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],d=r[a+1],g=r[a+2],_=r[a+3];if(o<=0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o>=1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let m=l*f+c*d+h*g+u*_;m<0&&(f=-f,d=-d,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){const M=Math.acos(m),S=Math.sin(M);p=Math.sin(p*M)/S,o=Math.sin(o*M)/S,l=l*p+f*o,c=c*p+d*o,h=h*p+g*o,u=u*p+_*o}else{l=l*p+f*o,c=c*p+d*o,h=h*p+g*o,u=u*p+_*o;const M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-o*d,t[e+2]=c*g+h*d+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:Wt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(t=0,e=0,n=0){V.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ld.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ld.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qo.copy(this).projectOnVector(t),this.sub(Qo)}reflect(t){return this.sub(Qo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qo=new V,ld=new Yr;class Yt{constructor(t,e,n,s,r,a,o,l,c){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],M=s[1],S=s[4],v=s[7],T=s[2],E=s[5],A=s[8];return r[0]=a*_+o*M+l*T,r[3]=a*m+o*S+l*E,r[6]=a*p+o*v+l*A,r[1]=c*_+h*M+u*T,r[4]=c*m+h*S+u*E,r[7]=c*p+h*v+u*A,r[2]=f*_+d*M+g*T,r[5]=f*m+d*S+g*E,r[8]=f*p+d*v+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(tl.makeScale(t,e)),this}rotate(t){return this.premultiply(tl.makeRotation(-t)),this}translate(t,e){return this.premultiply(tl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const tl=new Yt,cd=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hd=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ay(){const i={enabled:!0,workingColorSpace:tr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===xe&&(s.r=vi(s.r),s.g=vi(s.g),s.b=vi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xe&&(s.r=Ys(s.r),s.g=Ys(s.g),s.b=Ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ni?Ja:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return zr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return zr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[tr]:{primaries:t,whitePoint:n,transfer:Ja,toXYZ:cd,fromXYZ:hd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:t,whitePoint:n,transfer:xe,toXYZ:cd,fromXYZ:hd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}}),i}const le=Ay();function vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let bs;class Cy{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{bs===void 0&&(bs=to("canvas")),bs.width=t.width,bs.height=t.height;const s=bs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=bs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=to("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=vi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vi(e[n]/255)*255):e[n]=vi(e[n]);return{data:e,width:t.width,height:t.height}}else return Wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ry=0;class Eh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=Xr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(el(s[a].image)):r.push(el(s[a]))}else r=el(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function el(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Cy.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Wt("Texture: Unable to serialize Texture."),{})}let Py=0;const nl=new V;class ln extends nr{constructor(t=ln.DEFAULT_IMAGE,e=ln.DEFAULT_MAPPING,n=mi,s=mi,r=en,a=ps,o=Hn,l=An,c=ln.DEFAULT_ANISOTROPY,h=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Py++}),this.uuid=Xr(),this.name="",this.source=new Eh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(nl).x}get height(){return this.source.getSize(nl).y}get depth(){return this.source.getSize(nl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Wt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$p)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gc:t.x=t.x-Math.floor(t.x);break;case mi:t.x=t.x<0?0:1;break;case _c:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gc:t.y=t.y-Math.floor(t.y);break;case mi:t.y=t.y<0?0:1;break;case _c:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=$p;ln.DEFAULT_ANISOTROPY=1;class Ne{constructor(t=0,e=0,n=0,s=1){Ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,v=(d+1)/2,T=(p+1)/2,E=(h+f)/4,A=(u+_)/4,I=(g+m)/4;return S>v&&S>T?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=E/n,r=A/n):v>T?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=E/s,r=I/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=A/r,s=I/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-_)/M,this.z=(f-h)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Iy extends nr{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new ln(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Eh(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends Iy{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class nm extends ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Dy extends ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $r{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Nn):Nn.fromBufferAttribute(r,a),Nn.applyMatrix4(t.matrixWorld),this.expandByPoint(Nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ga.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ga.copy(n.boundingBox)),ga.applyMatrix4(t.matrixWorld),this.union(ga)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Nn),Nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(pr),_a.subVectors(this.max,pr),Ts.subVectors(t.a,pr),Es.subVectors(t.b,pr),ws.subVectors(t.c,pr),Ri.subVectors(Es,Ts),Pi.subVectors(ws,Es),Ji.subVectors(Ts,ws);let e=[0,-Ri.z,Ri.y,0,-Pi.z,Pi.y,0,-Ji.z,Ji.y,Ri.z,0,-Ri.x,Pi.z,0,-Pi.x,Ji.z,0,-Ji.x,-Ri.y,Ri.x,0,-Pi.y,Pi.x,0,-Ji.y,Ji.x,0];return!il(e,Ts,Es,ws,_a)||(e=[1,0,0,0,1,0,0,0,1],!il(e,Ts,Es,ws,_a))?!1:(xa.crossVectors(Ri,Pi),e=[xa.x,xa.y,xa.z],il(e,Ts,Es,ws,_a))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const li=[new V,new V,new V,new V,new V,new V,new V,new V],Nn=new V,ga=new $r,Ts=new V,Es=new V,ws=new V,Ri=new V,Pi=new V,Ji=new V,pr=new V,_a=new V,xa=new V,Qi=new V;function il(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Qi.fromArray(i,r);const o=s.x*Math.abs(Qi.x)+s.y*Math.abs(Qi.y)+s.z*Math.abs(Qi.z),l=t.dot(Qi),c=e.dot(Qi),h=n.dot(Qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ly=new $r,mr=new V,sl=new V;class wh{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ly.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;mr.subVectors(t,this.center);const e=mr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(mr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(mr.copy(t.center).add(sl)),this.expandByPoint(mr.copy(t.center).sub(sl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ci=new V,rl=new V,va=new V,Ii=new V,al=new V,ya=new V,ol=new V;class Uy{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ci.copy(this.origin).addScaledVector(this.direction,e),ci.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){rl.copy(t).add(e).multiplyScalar(.5),va.copy(e).sub(t).normalize(),Ii.copy(this.origin).sub(rl);const r=t.distanceTo(e)*.5,a=-this.direction.dot(va),o=Ii.dot(this.direction),l=-Ii.dot(va),c=Ii.lengthSq(),h=Math.abs(1-a*a);let u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(rl).addScaledVector(va,f),d}intersectSphere(t,e){ci.subVectors(t.center,this.origin);const n=ci.dot(this.direction),s=ci.dot(ci)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ci)!==null}intersectTriangle(t,e,n,s,r){al.subVectors(e,t),ya.subVectors(n,t),ol.crossVectors(al,ya);let a=this.direction.dot(ol),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ii.subVectors(this.origin,t);const l=o*this.direction.dot(ya.crossVectors(Ii,ya));if(l<0)return null;const c=o*this.direction.dot(al.cross(Ii));if(c<0||l+c>a)return null;const h=-o*Ii.dot(ol);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ge{constructor(t,e,n,s,r,a,o,l,c,h,u,f,d,g,_,m){Ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,d,g,_,m)}set(t,e,n,s,r,a,o,l,c,h,u,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ge().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,s=1/As.setFromMatrixColumn(t,0).length(),r=1/As.setFromMatrixColumn(t,1).length(),a=1/As.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,d=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f+_*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f-_*o,e[4]=-a*u,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,d=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=a*l,d=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=a*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=o*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fy,t,Ny)}lookAt(t,e,n){const s=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Di.crossVectors(n,mn),Di.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Di.crossVectors(n,mn)),Di.normalize(),Sa.crossVectors(mn,Di),s[0]=Di.x,s[4]=Sa.x,s[8]=mn.x,s[1]=Di.y,s[5]=Sa.y,s[9]=mn.y,s[2]=Di.z,s[6]=Sa.z,s[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],S=n[7],v=n[11],T=n[15],E=s[0],A=s[4],I=s[8],b=s[12],y=s[1],C=s[5],B=s[9],N=s[13],G=s[2],W=s[6],D=s[10],L=s[14],$=s[3],X=s[7],Q=s[11],it=s[15];return r[0]=a*E+o*y+l*G+c*$,r[4]=a*A+o*C+l*W+c*X,r[8]=a*I+o*B+l*D+c*Q,r[12]=a*b+o*N+l*L+c*it,r[1]=h*E+u*y+f*G+d*$,r[5]=h*A+u*C+f*W+d*X,r[9]=h*I+u*B+f*D+d*Q,r[13]=h*b+u*N+f*L+d*it,r[2]=g*E+_*y+m*G+p*$,r[6]=g*A+_*C+m*W+p*X,r[10]=g*I+_*B+m*D+p*Q,r[14]=g*b+_*N+m*L+p*it,r[3]=M*E+S*y+v*G+T*$,r[7]=M*A+S*C+v*W+T*X,r[11]=M*I+S*B+v*D+T*Q,r[15]=M*b+S*N+v*L+T*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15],M=l*d-c*f,S=o*d-c*u,v=o*f-l*u,T=a*d-c*h,E=a*f-l*h,A=a*u-o*h;return e*(_*M-m*S+p*v)-n*(g*M-m*T+p*E)+s*(g*S-_*T+p*A)-r*(g*v-_*E+m*A)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],M=u*m*c-_*f*c+_*l*d-o*m*d-u*l*p+o*f*p,S=g*f*c-h*m*c-g*l*d+a*m*d+h*l*p-a*f*p,v=h*_*c-g*u*c+g*o*d-a*_*d-h*o*p+a*u*p,T=g*u*l-h*_*l-g*o*f+a*_*f+h*o*m-a*u*m,E=e*M+n*S+s*v+r*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=M*A,t[1]=(_*f*r-u*m*r-_*s*d+n*m*d+u*s*p-n*f*p)*A,t[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*p+n*l*p)*A,t[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*d-n*l*d)*A,t[4]=S*A,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*A,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*A,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*d+e*l*d)*A,t[8]=v*A,t[9]=(g*u*r-h*_*r-g*n*d+e*_*d+h*n*p-e*u*p)*A,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*p+e*o*p)*A,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*d-e*o*d)*A,t[12]=T*A,t[13]=(h*_*s-g*u*s+g*n*f-e*_*f-h*n*m+e*u*m)*A,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*m-e*o*m)*A,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*f+e*o*f)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,g=r*u,_=a*h,m=a*u,p=o*u,M=l*c,S=l*h,v=l*u,T=n.x,E=n.y,A=n.z;return s[0]=(1-(_+p))*T,s[1]=(d+v)*T,s[2]=(g-S)*T,s[3]=0,s[4]=(d-v)*E,s[5]=(1-(f+p))*E,s[6]=(m+M)*E,s[7]=0,s[8]=(g+S)*A,s[9]=(m-M)*A,s[10]=(1-(f+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;if(t.x=s[12],t.y=s[13],t.z=s[14],this.determinant()===0)return n.set(1,1,1),e.identity(),this;let r=As.set(s[0],s[1],s[2]).length();const a=As.set(s[4],s[5],s[6]).length(),o=As.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),On.copy(this);const c=1/r,h=1/a,u=1/o;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=h,On.elements[5]*=h,On.elements[6]*=h,On.elements[8]*=u,On.elements[9]*=u,On.elements[10]*=u,e.setFromRotationMatrix(On),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Zn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s);let g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===Zn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Qa)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Zn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s);let g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===Zn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===Qa)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const As=new V,On=new Ge,Fy=new V(0,0,0),Ny=new V(1,1,1),Di=new V,Sa=new V,mn=new V,ud=new Ge,dd=new Yr;class bi{constructor(t=0,e=0,n=0,s=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(re(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-re(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ud.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ud,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return dd.setFromEuler(this),this.setFromQuaternion(dd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class im{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Oy=0;const fd=new V,Cs=new Yr,hi=new Ge,Ma=new V,gr=new V,By=new V,ky=new Yr,pd=new V(1,0,0),md=new V(0,1,0),gd=new V(0,0,1),_d={type:"added"},Gy={type:"removed"},Rs={type:"childadded",child:null},ll={type:"childremoved",child:null};class vn extends nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=Xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const t=new V,e=new bi,n=new Yr,s=new V(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ge},normalMatrix:{value:new Yt}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new im,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.premultiply(Cs),this}rotateX(t){return this.rotateOnAxis(pd,t)}rotateY(t){return this.rotateOnAxis(md,t)}rotateZ(t){return this.rotateOnAxis(gd,t)}translateOnAxis(t,e){return fd.copy(t).applyQuaternion(this.quaternion),this.position.add(fd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(pd,t)}translateY(t){return this.translateOnAxis(md,t)}translateZ(t){return this.translateOnAxis(gd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ma.copy(t):Ma.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(gr,Ma,this.up):hi.lookAt(Ma,gr,this.up),this.quaternion.setFromRotationMatrix(hi),s&&(hi.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(hi),this.quaternion.premultiply(Cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(de("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_d),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null):de("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gy),ll.child=t,this.dispatchEvent(ll),ll.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_d),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,t,By),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,ky,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}vn.DEFAULT_UP=new V(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new V,ui=new V,cl=new V,di=new V,Ps=new V,Is=new V,xd=new V,hl=new V,ul=new V,dl=new V,fl=new Ne,pl=new Ne,ml=new Ne;class Gn{constructor(t=new V,e=new V,n=new V){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Bn.subVectors(t,e),s.cross(Bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Bn.subVectors(s,e),ui.subVectors(n,e),cl.subVectors(t,e);const a=Bn.dot(Bn),o=Bn.dot(ui),l=Bn.dot(cl),c=ui.dot(ui),h=ui.dot(cl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,di.x),l.addScaledVector(a,di.y),l.addScaledVector(o,di.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return fl.setScalar(0),pl.setScalar(0),ml.setScalar(0),fl.fromBufferAttribute(t,e),pl.fromBufferAttribute(t,n),ml.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(fl,r.x),a.addScaledVector(pl,r.y),a.addScaledVector(ml,r.z),a}static isFrontFacing(t,e,n,s){return Bn.subVectors(n,e),ui.subVectors(t,e),Bn.cross(ui).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Bn.cross(ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Gn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Gn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Gn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Gn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Gn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ps.subVectors(s,n),Is.subVectors(r,n),hl.subVectors(t,n);const l=Ps.dot(hl),c=Is.dot(hl);if(l<=0&&c<=0)return e.copy(n);ul.subVectors(t,s);const h=Ps.dot(ul),u=Is.dot(ul);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ps,a);dl.subVectors(t,r);const d=Ps.dot(dl),g=Is.dot(dl);if(g>=0&&d<=g)return e.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Is,o);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return xd.subVectors(r,s),o=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(xd,o);const p=1/(m+_+f);return a=_*p,o=f*p,e.copy(n).addScaledVector(Ps,a).addScaledVector(Is,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const sm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},ba={h:0,s:0,l:0};function gl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Se{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=le.workingColorSpace){if(t=wy(t,1),e=re(e,0,1),n=re(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=gl(a,r,t+1/3),this.g=gl(a,r,t),this.b=gl(a,r,t-1/3)}return le.colorSpaceToWorking(this,s),this}setStyle(t,e=Tn){function n(r){r!==void 0&&parseFloat(r)<1&&Wt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Wt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Tn){const n=sm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vi(t.r),this.g=vi(t.g),this.b=vi(t.b),this}copyLinearToSRGB(t){return this.r=Ys(t.r),this.g=Ys(t.g),this.b=Ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Tn){return le.workingToColorSpace(Qe.copy(this),t),Math.round(re(Qe.r*255,0,255))*65536+Math.round(re(Qe.g*255,0,255))*256+Math.round(re(Qe.b*255,0,255))}getHexString(t=Tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(Qe.copy(this),e);const n=Qe.r,s=Qe.g,r=Qe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=Tn){le.workingToColorSpace(Qe.copy(this),t);const e=Qe.r,n=Qe.g,s=Qe.b;return t!==Tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Li),this.setHSL(Li.h+t,Li.s+e,Li.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Li),t.getHSL(ba);const n=Jo(Li.h,ba.h,e),s=Jo(Li.s,ba.s,e),r=Jo(Li.l,ba.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qe=new Se;Se.NAMES=sm;let zy=0;class ho extends nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=Xr(),this.name="",this.type="Material",this.blending=Xs,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rc,this.blendDst=ac,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=id,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Wt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(n.blending=this.blending),this.side!==ki&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==rc&&(n.blendSrc=this.blendSrc),this.blendDst!==ac&&(n.blendDst=this.blendDst),this.blendEquation!==us&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==id&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ir extends ho{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=kp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ke=new V,Ta=new ve;let Hy=0;class ti{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hy++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=sd,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ta.fromBufferAttribute(this,e),Ta.applyMatrix3(t),this.setXY(e,Ta.x,Ta.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=hn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fr(e,this.array)),e}setX(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fr(e,this.array)),e}setY(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fr(e,this.array)),e}setW(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array),s=hn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array),s=hn(s,this.array),r=hn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==sd&&(t.usage=this.usage),t}}class rm extends ti{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class am extends ti{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Rn extends ti{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Vy=0;const bn=new Ge,_l=new vn,Ds=new V,gn=new $r,_r=new $r,Ye=new V;class si extends nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=Xr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(em(t)?am:rm)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return bn.makeRotationFromQuaternion(t),this.applyMatrix4(bn),this}rotateX(t){return bn.makeRotationX(t),this.applyMatrix4(bn),this}rotateY(t){return bn.makeRotationY(t),this.applyMatrix4(bn),this}rotateZ(t){return bn.makeRotationZ(t),this.applyMatrix4(bn),this}translate(t,e,n){return bn.makeTranslation(t,e,n),this.applyMatrix4(bn),this}scale(t,e,n){return bn.makeScale(t,e,n),this.applyMatrix4(bn),this}lookAt(t){return _l.lookAt(t),_l.updateMatrix(),this.applyMatrix4(_l.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Rn(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $r);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){de("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&de('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wh);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){de("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const n=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];_r.setFromBufferAttribute(o),this.morphTargetsRelative?(Ye.addVectors(gn.min,_r.min),gn.expandByPoint(Ye),Ye.addVectors(gn.max,_r.max),gn.expandByPoint(Ye)):(gn.expandByPoint(_r.min),gn.expandByPoint(_r.max))}gn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ye.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ye));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ye.fromBufferAttribute(o,c),l&&(Ds.fromBufferAttribute(t,c),Ye.add(Ds)),s=Math.max(s,n.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&de('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){de("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ti(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new V,l[I]=new V;const c=new V,h=new V,u=new V,f=new ve,d=new ve,g=new ve,_=new V,m=new V;function p(I,b,y){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,I),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(C),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(C),o[I].add(_),o[b].add(_),o[y].add(_),l[I].add(m),l[b].add(m),l[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let I=0,b=M.length;I<b;++I){const y=M[I],C=y.start,B=y.count;for(let N=C,G=C+B;N<G;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const S=new V,v=new V,T=new V,E=new V;function A(I){T.fromBufferAttribute(s,I),E.copy(T);const b=o[I];S.copy(b),S.sub(T.multiplyScalar(T.dot(b))).normalize(),v.crossVectors(E,b);const C=v.dot(l[I])<0?-1:1;a.setXYZW(I,S.x,S.y,S.z,C)}for(let I=0,b=M.length;I<b;++I){const y=M[I],C=y.start,B=y.count;for(let N=C,G=C+B;N<G;N+=3)A(t.getX(N+0)),A(t.getX(N+1)),A(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ti(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new V,r=new V,a=new V,o=new V,l=new V,c=new V,h=new V,u=new V;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new ti(f,h,u)}if(this.index===null)return Wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new si,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vd=new Ge,ts=new Uy,Ea=new wh,yd=new V,wa=new V,Aa=new V,Ca=new V,xl=new V,Ra=new V,Sd=new V,Pa=new V;class Pn extends vn{constructor(t=new si,e=new Ir){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Ra.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(xl.fromBufferAttribute(u,t),a?Ra.addScaledVector(xl,h):Ra.addScaledVector(xl.sub(e),h))}e.add(Ra)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(r),ts.copy(t.ray).recast(t.near),!(Ea.containsPoint(ts.origin)===!1&&(ts.intersectSphere(Ea,yd)===null||ts.origin.distanceToSquared(yd)>(t.far-t.near)**2))&&(vd.copy(r).invert(),ts.copy(t.ray).applyMatrix4(vd),!(n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ts)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],M=Math.max(m.start,d.start),S=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,T=S;v<T;v+=3){const E=o.getX(v),A=o.getX(v+1),I=o.getX(v+2);s=Ia(this,p,t,n,c,h,u,E,A,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=o.getX(m),S=o.getX(m+1),v=o.getX(m+2);s=Ia(this,a,t,n,c,h,u,M,S,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],M=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,T=S;v<T;v+=3){const E=v,A=v+1,I=v+2;s=Ia(this,p,t,n,c,h,u,E,A,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=m,S=m+1,v=m+2;s=Ia(this,a,t,n,c,h,u,M,S,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Wy(i,t,e,n,s,r,a,o){let l;if(t.side===fn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ki,o),l===null)return null;Pa.copy(o),Pa.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Pa);return c<e.near||c>e.far?null:{distance:c,point:Pa.clone(),object:i}}function Ia(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,wa),i.getVertexPosition(l,Aa),i.getVertexPosition(c,Ca);const h=Wy(i,t,e,n,wa,Aa,Ca,Sd);if(h){const u=new V;Gn.getBarycoord(Sd,wa,Aa,Ca,u),s&&(h.uv=Gn.getInterpolatedAttribute(s,o,l,c,u,new ve)),r&&(h.uv1=Gn.getInterpolatedAttribute(r,o,l,c,u,new ve)),a&&(h.normal=Gn.getInterpolatedAttribute(a,o,l,c,u,new V),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new V,materialIndex:0};Gn.getNormal(wa,Aa,Ca,f.normal),h.face=f,h.barycoord=u}return h}class qr extends si{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Rn(c,3)),this.setAttribute("normal",new Rn(h,3)),this.setAttribute("uv",new Rn(u,2));function g(_,m,p,M,S,v,T,E,A,I,b){const y=v/A,C=T/I,B=v/2,N=T/2,G=E/2,W=A+1,D=I+1;let L=0,$=0;const X=new V;for(let Q=0;Q<D;Q++){const it=Q*C-N;for(let At=0;At<W;At++){const Ct=At*y-B;X[_]=Ct*M,X[m]=it*S,X[p]=G,c.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[p]=E>0?1:-1,h.push(X.x,X.y,X.z),u.push(At/A),u.push(1-Q/I),L+=1}}for(let Q=0;Q<I;Q++)for(let it=0;it<A;it++){const At=f+it+W*Q,Ct=f+it+W*(Q+1),Qt=f+(it+1)+W*(Q+1),ae=f+(it+1)+W*Q;l.push(At,Ct,ae),l.push(Ct,Qt,ae),$+=6}o.addGroup(d,$,b),d+=$,f+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function er(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function sn(i){const t={};for(let e=0;e<i.length;e++){const n=er(i[e]);for(const s in n)t[s]=n[s]}return t}function Xy(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function om(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const Yy={clone:er,merge:sn};var $y=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends ho{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$y,this.fragmentShader=qy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=er(t.uniforms),this.uniformsGroups=Xy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class lm extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=Zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ui=new V,Md=new ve,bd=new ve;class En extends lm{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Kc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Kc*2*Math.atan(Math.tan(Zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ui.x,Ui.y).multiplyScalar(-t/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-t/Ui.z)}getViewSize(t,e){return this.getViewBounds(t,Md,bd),e.subVectors(bd,Md)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ls=-90,Us=1;class jy extends vn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new En(Ls,Us,t,e);s.layers=this.layers,this.add(s);const r=new En(Ls,Us,t,e);r.layers=this.layers,this.add(r);const a=new En(Ls,Us,t,e);a.layers=this.layers,this.add(a);const o=new En(Ls,Us,t,e);o.layers=this.layers,this.add(o);const l=new En(Ls,Us,t,e);l.layers=this.layers,this.add(l);const c=new En(Ls,Us,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class cm extends ln{constructor(t=[],e=_s,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hm extends Qn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new cm(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qr(5,5,5),r=new ni({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:xi});r.uniforms.tEquirect.value=e;const a=new Pn(s,r),o=e.minFilter;return e.minFilter===ps&&(e.minFilter=en),new jy(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class Da extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ky={type:"move"};class vl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Da,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Da,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Da,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ky)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Da;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Zy extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Jy extends ln{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ze,h=Ze,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const yl=new V,Qy=new V,tS=new Yt;class hs{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=yl.subVectors(n,e).cross(Qy.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(yl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||tS.getNormalMatrix(t),s=this.coplanarPoint(yl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new wh,eS=new ve(.5,.5),La=new V;class um{constructor(t=new hs,e=new hs,n=new hs,s=new hs,r=new hs,a=new hs){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Zn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],_=r[9],m=r[10],p=r[11],M=r[12],S=r[13],v=r[14],T=r[15];if(s[0].setComponents(c-a,d-h,p-g,T-M).normalize(),s[1].setComponents(c+a,d+h,p+g,T+M).normalize(),s[2].setComponents(c+o,d+u,p+_,T+S).normalize(),s[3].setComponents(c-o,d-u,p-_,T-S).normalize(),n)s[4].setComponents(l,f,m,v).normalize(),s[5].setComponents(c-l,d-f,p-m,T-v).normalize();else if(s[4].setComponents(c-l,d-f,p-m,T-v).normalize(),e===Zn)s[5].setComponents(c+l,d+f,p+m,T+v).normalize();else if(e===Qa)s[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(t){es.center.set(0,0,0);const e=eS.distanceTo(t.center);return es.radius=.7071067811865476+e,es.applyMatrix4(t.matrixWorld),this.intersectsSphere(es)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(La.x=s.normal.x>0?t.max.x:t.min.x,La.y=s.normal.y>0?t.max.y:t.min.y,La.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(La)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hr extends ln{constructor(t,e,n=ei,s,r,a,o=Ze,l=Ze,c,h=Mi,u=1){if(h!==Mi&&h!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Eh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class nS extends Hr{constructor(t,e=ei,n=_s,s,r,a=Ze,o=Ze,l,c=Mi){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class dm extends ln{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ah extends si{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new V,h=new ve;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Rn(a,3)),this.setAttribute("normal",new Rn(o,3)),this.setAttribute("uv",new Rn(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ah(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class jr extends si{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const M=p*f-a;for(let S=0;S<c;S++){const v=S*u-r;g.push(v,-M,0),_.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const S=M+c*p,v=M+c*(p+1),T=M+1+c*(p+1),E=M+1+c*p;d.push(S,v,E),d.push(v,T,E)}this.setIndex(d),this.setAttribute("position",new Rn(g,3)),this.setAttribute("normal",new Rn(_,3)),this.setAttribute("uv",new Rn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jr(t.width,t.height,t.widthSegments,t.heightSegments)}}class iS extends ni{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class sS extends ho{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=my,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rS extends ho{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class fm extends lm{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class aS extends En{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Td(i,t,e,n){const s=oS(n);switch(e){case Jp:return i*t;case tm:return i*t/s.components*s.byteLength;case yh:return i*t/s.components*s.byteLength;case Qs:return i*t*2/s.components*s.byteLength;case Sh:return i*t*2/s.components*s.byteLength;case Qp:return i*t*3/s.components*s.byteLength;case Hn:return i*t*4/s.components*s.byteLength;case Mh:return i*t*4/s.components*s.byteLength;case Ha:case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wa:case Xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vc:case Sc:return Math.max(i,16)*Math.max(t,8)/4;case xc:case yc:return Math.max(i,8)*Math.max(t,8)/2;case Mc:case bc:case Ec:case wc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Tc:case Ac:case Cc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Rc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ic:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Dc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Lc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Uc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Fc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Nc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Oc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Bc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case kc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Gc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case zc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Hc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Vc:case Wc:case Xc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Yc:case $c:return Math.ceil(i/4)*Math.ceil(t/4)*8;case qc:case jc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function oS(i){switch(i){case An:case qp:return{byteLength:1,components:1};case kr:case jp:case Si:return{byteLength:2,components:1};case xh:case vh:return{byteLength:2,components:4};case ei:case _h:case Kn:return{byteLength:4,components:1};case Kp:case Zp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gh}}));typeof window<"u"&&(window.__THREE__?Wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gh);function pm(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function lS(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var cS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hS=`#ifdef USE_ALPHAHASH
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
#endif`,uS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_S=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,SS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,MS=`#ifdef USE_IRIDESCENCE
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
#endif`,bS=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,TS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,ES=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,RS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,PS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,IS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,DS=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
} // validated`,LS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,US=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,FS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,OS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kS="gl_FragColor = linearToOutputTexel( gl_FragColor );",GS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zS=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,HS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,VS=`#ifdef USE_ENVMAP
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
#endif`,WS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,XS=`#ifdef USE_ENVMAP
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
#endif`,YS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$S=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,KS=`#ifdef USE_GRADIENTMAP
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
}`,ZS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,JS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,eM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,nM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,oM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_M=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xM=`#if defined( USE_POINTS_UV )
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
#endif`,vM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,MM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,EM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,AM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,CM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,IM=`#ifdef USE_NORMALMAP
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
#endif`,DM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,LM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,UM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,FM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,BM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,VM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,XM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,YM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$M=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,KM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZM=`#ifdef USE_SKINNING
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
#endif`,JM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eb=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nb=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ib=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ob=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ub=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,mb=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,_b=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yb=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sb=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mb=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,bb=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Tb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Eb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,wb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Ab=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Cb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Rb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Ib=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Db=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Lb=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ub=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Fb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Nb=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Ob=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Bb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,kb=`uniform vec3 color;
uniform float opacity;
#include <common>
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
}`,Gb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,zb=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,$t={alphahash_fragment:cS,alphahash_pars_fragment:hS,alphamap_fragment:uS,alphamap_pars_fragment:dS,alphatest_fragment:fS,alphatest_pars_fragment:pS,aomap_fragment:mS,aomap_pars_fragment:gS,batching_pars_vertex:_S,batching_vertex:xS,begin_vertex:vS,beginnormal_vertex:yS,bsdfs:SS,iridescence_fragment:MS,bumpmap_pars_fragment:bS,clipping_planes_fragment:TS,clipping_planes_pars_fragment:ES,clipping_planes_pars_vertex:wS,clipping_planes_vertex:AS,color_fragment:CS,color_pars_fragment:RS,color_pars_vertex:PS,color_vertex:IS,common:DS,cube_uv_reflection_fragment:LS,defaultnormal_vertex:US,displacementmap_pars_vertex:FS,displacementmap_vertex:NS,emissivemap_fragment:OS,emissivemap_pars_fragment:BS,colorspace_fragment:kS,colorspace_pars_fragment:GS,envmap_fragment:zS,envmap_common_pars_fragment:HS,envmap_pars_fragment:VS,envmap_pars_vertex:WS,envmap_physical_pars_fragment:eM,envmap_vertex:XS,fog_vertex:YS,fog_pars_vertex:$S,fog_fragment:qS,fog_pars_fragment:jS,gradientmap_pars_fragment:KS,lightmap_pars_fragment:ZS,lights_lambert_fragment:JS,lights_lambert_pars_fragment:QS,lights_pars_begin:tM,lights_toon_fragment:nM,lights_toon_pars_fragment:iM,lights_phong_fragment:sM,lights_phong_pars_fragment:rM,lights_physical_fragment:aM,lights_physical_pars_fragment:oM,lights_fragment_begin:lM,lights_fragment_maps:cM,lights_fragment_end:hM,logdepthbuf_fragment:uM,logdepthbuf_pars_fragment:dM,logdepthbuf_pars_vertex:fM,logdepthbuf_vertex:pM,map_fragment:mM,map_pars_fragment:gM,map_particle_fragment:_M,map_particle_pars_fragment:xM,metalnessmap_fragment:vM,metalnessmap_pars_fragment:yM,morphinstance_vertex:SM,morphcolor_vertex:MM,morphnormal_vertex:bM,morphtarget_pars_vertex:TM,morphtarget_vertex:EM,normal_fragment_begin:wM,normal_fragment_maps:AM,normal_pars_fragment:CM,normal_pars_vertex:RM,normal_vertex:PM,normalmap_pars_fragment:IM,clearcoat_normal_fragment_begin:DM,clearcoat_normal_fragment_maps:LM,clearcoat_pars_fragment:UM,iridescence_pars_fragment:FM,opaque_fragment:NM,packing:OM,premultiplied_alpha_fragment:BM,project_vertex:kM,dithering_fragment:GM,dithering_pars_fragment:zM,roughnessmap_fragment:HM,roughnessmap_pars_fragment:VM,shadowmap_pars_fragment:WM,shadowmap_pars_vertex:XM,shadowmap_vertex:YM,shadowmask_pars_fragment:$M,skinbase_vertex:qM,skinning_pars_vertex:jM,skinning_vertex:KM,skinnormal_vertex:ZM,specularmap_fragment:JM,specularmap_pars_fragment:QM,tonemapping_fragment:tb,tonemapping_pars_fragment:eb,transmission_fragment:nb,transmission_pars_fragment:ib,uv_pars_fragment:sb,uv_pars_vertex:rb,uv_vertex:ab,worldpos_vertex:ob,background_vert:lb,background_frag:cb,backgroundCube_vert:hb,backgroundCube_frag:ub,cube_vert:db,cube_frag:fb,depth_vert:pb,depth_frag:mb,distance_vert:gb,distance_frag:_b,equirect_vert:xb,equirect_frag:vb,linedashed_vert:yb,linedashed_frag:Sb,meshbasic_vert:Mb,meshbasic_frag:bb,meshlambert_vert:Tb,meshlambert_frag:Eb,meshmatcap_vert:wb,meshmatcap_frag:Ab,meshnormal_vert:Cb,meshnormal_frag:Rb,meshphong_vert:Pb,meshphong_frag:Ib,meshphysical_vert:Db,meshphysical_frag:Lb,meshtoon_vert:Ub,meshtoon_frag:Fb,points_vert:Nb,points_frag:Ob,shadow_vert:Bb,shadow_frag:kb,sprite_vert:Gb,sprite_frag:zb},pt={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},jn={basic:{uniforms:sn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:sn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Se(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:sn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:sn([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:sn([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Se(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:sn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:sn([pt.points,pt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:sn([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:sn([pt.common,pt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:sn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:sn([pt.sprite,pt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distance:{uniforms:sn([pt.common,pt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distance_vert,fragmentShader:$t.distance_frag},shadow:{uniforms:sn([pt.lights,pt.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};jn.physical={uniforms:sn([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const Ua={r:0,b:0,g:0},ns=new bi,Hb=new Ge;function Vb(i,t,e,n,s,r,a){const o=new Se(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?e:t).get(v)),v}function _(S){let v=!1;const T=g(S);T===null?p(o,l):T&&T.isColor&&(p(T,1),v=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,v){const T=g(v);T&&(T.isCubeTexture||T.mapping===co)?(h===void 0&&(h=new Pn(new qr(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:er(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,A,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ns.copy(v.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Hb.makeRotationFromEuler(ns)),h.material.toneMapped=le.getTransfer(T.colorSpace)!==xe,(u!==T||f!==T.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=T,f=T.version,d=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Pn(new jr(2,2),new ni({name:"BackgroundMaterial",uniforms:er(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=le.getTransfer(T.colorSpace)!==xe,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||f!==T.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=T,f=T.version,d=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,v){S.getRGB(Ua,om(i)),n.buffers.color.setClear(Ua.r,Ua.g,Ua.b,v,a)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,v=1){o.set(S),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(o,l)},render:_,addToRenderList:m,dispose:M}}function Wb(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(y,C,B,N,G){let W=!1;const D=u(N,B,C);r!==D&&(r=D,c(r.object)),W=d(y,N,B,G),W&&g(y,N,B,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,v(y,C,B,N),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,C,B){const N=B.wireframe===!0;let G=n[y.id];G===void 0&&(G={},n[y.id]=G);let W=G[C.id];W===void 0&&(W={},G[C.id]=W);let D=W[N];return D===void 0&&(D=f(l()),W[N]=D),D}function f(y){const C=[],B=[],N=[];for(let G=0;G<e;G++)C[G]=0,B[G]=0,N[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:B,attributeDivisors:N,object:y,attributes:{},index:null}}function d(y,C,B,N){const G=r.attributes,W=C.attributes;let D=0;const L=B.getAttributes();for(const $ in L)if(L[$].location>=0){const Q=G[$];let it=W[$];if(it===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(it=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(it=y.instanceColor)),Q===void 0||Q.attribute!==it||it&&Q.data!==it.data)return!0;D++}return r.attributesNum!==D||r.index!==N}function g(y,C,B,N){const G={},W=C.attributes;let D=0;const L=B.getAttributes();for(const $ in L)if(L[$].location>=0){let Q=W[$];Q===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(Q=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(Q=y.instanceColor));const it={};it.attribute=Q,Q&&Q.data&&(it.data=Q.data),G[$]=it,D++}r.attributes=G,r.attributesNum=D,r.index=N}function _(){const y=r.newAttributes;for(let C=0,B=y.length;C<B;C++)y[C]=0}function m(y){p(y,0)}function p(y,C){const B=r.newAttributes,N=r.enabledAttributes,G=r.attributeDivisors;B[y]=1,N[y]===0&&(i.enableVertexAttribArray(y),N[y]=1),G[y]!==C&&(i.vertexAttribDivisor(y,C),G[y]=C)}function M(){const y=r.newAttributes,C=r.enabledAttributes;for(let B=0,N=C.length;B<N;B++)C[B]!==y[B]&&(i.disableVertexAttribArray(B),C[B]=0)}function S(y,C,B,N,G,W,D){D===!0?i.vertexAttribIPointer(y,C,B,G,W):i.vertexAttribPointer(y,C,B,N,G,W)}function v(y,C,B,N){_();const G=N.attributes,W=B.getAttributes(),D=C.defaultAttributeValues;for(const L in W){const $=W[L];if($.location>=0){let X=G[L];if(X===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(X=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(X=y.instanceColor)),X!==void 0){const Q=X.normalized,it=X.itemSize,At=t.get(X);if(At===void 0)continue;const Ct=At.buffer,Qt=At.type,ae=At.bytesPerElement,j=Qt===i.INT||Qt===i.UNSIGNED_INT||X.gpuType===_h;if(X.isInterleavedBufferAttribute){const et=X.data,mt=et.stride,Nt=X.offset;if(et.isInstancedInterleavedBuffer){for(let St=0;St<$.locationSize;St++)p($.location+St,et.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let St=0;St<$.locationSize;St++)m($.location+St);i.bindBuffer(i.ARRAY_BUFFER,Ct);for(let St=0;St<$.locationSize;St++)S($.location+St,it/$.locationSize,Qt,Q,mt*ae,(Nt+it/$.locationSize*St)*ae,j)}else{if(X.isInstancedBufferAttribute){for(let et=0;et<$.locationSize;et++)p($.location+et,X.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let et=0;et<$.locationSize;et++)m($.location+et);i.bindBuffer(i.ARRAY_BUFFER,Ct);for(let et=0;et<$.locationSize;et++)S($.location+et,it/$.locationSize,Qt,Q,it*ae,it/$.locationSize*et*ae,j)}}else if(D!==void 0){const Q=D[L];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv($.location,Q);break;case 3:i.vertexAttrib3fv($.location,Q);break;case 4:i.vertexAttrib4fv($.location,Q);break;default:i.vertexAttrib1fv($.location,Q)}}}}M()}function T(){I();for(const y in n){const C=n[y];for(const B in C){const N=C[B];for(const G in N)h(N[G].object),delete N[G];delete C[B]}delete n[y]}}function E(y){if(n[y.id]===void 0)return;const C=n[y.id];for(const B in C){const N=C[B];for(const G in N)h(N[G].object),delete N[G];delete C[B]}delete n[y.id]}function A(y){for(const C in n){const B=n[C];if(B[y.id]===void 0)continue;const N=B[y.id];for(const G in N)h(N[G].object),delete N[G];delete B[y.id]}}function I(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function Xb(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Yb(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Hn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const I=A===Si&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==An&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Kn&&!I)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Wt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:v,maxSamples:T,samples:E}}function $b(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new hs,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const M=r?0:n,S=M*4;let v=p.clippingState||null;l.value=v,v=h(g,f,S,d);for(let T=0;T!==S;++T)v[T]=e[T];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,v=d;S!==_;++S,v+=4)a.copy(u[S]).applyMatrix4(M,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function qb(i){let t=new WeakMap;function e(a,o){return o===pc?a.mapping=_s:o===mc&&(a.mapping=Js),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===pc||o===mc)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new hm(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Bi=4,Ed=[.125,.215,.35,.446,.526,.582],ds=20,jb=256,xr=new fm,wd=new Se;let Sl=null,Ml=0,bl=0,Tl=!1;const Kb=new V;class Ad{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Kb}=r;Sl=this._renderer.getRenderTarget(),Ml=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),Tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Sl,Ml,bl),this._renderer.xr.enabled=Tl,t.scissorTest=!1,Fs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_s||t.mapping===Js?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sl=this._renderer.getRenderTarget(),Ml=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),Tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:Si,format:Hn,colorSpace:tr,depthBuffer:!1},s=Cd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cd(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Zb(r)),this._blurMaterial=Qb(r,t,e),this._ggxMaterial=Jb(r,t,e)}return s}_compileMaterial(t){const e=new Pn(new si,t);this._renderer.compile(e,xr)}_sceneToCubeUV(t,e,n,s,r){const l=new En(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(wd),u.toneMapping=Jn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pn(new qr,new Ir({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const M=t.background;M?M.isColor&&(m.color.copy(M),t.background=null,p=!0):(m.color.copy(wd),p=!0);for(let S=0;S<6;S++){const v=S%3;v===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):v===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));const T=this._cubeSize;Fs(s,v*T,S>2?T:0,T,T),u.setRenderTarget(s),p&&u.render(_,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=M}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===_s||t.mapping===Js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rd());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Fs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,xr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=0+c*1.25,d=u*f,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-Bi?n-g+Bi:0),p=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,Fs(r,m,p,3*_,2*_),s.setRenderTarget(r),s.render(o,xr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Fs(t,m,p,3*_,2*_),s.setRenderTarget(t),s.render(o,xr)}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&de("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[s];u.material=c;const f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ds-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ds;m>ds&&Wt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ds}`);const p=[];let M=0;for(let A=0;A<ds;++A){const I=A/_,b=Math.exp(-I*I/2);p.push(b),A===0?M+=b:A<m&&(M+=2*b)}for(let A=0;A<p.length;A++)p[A]=p[A]/M;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;const v=this._sizeLods[s],T=3*v*(s>S-Bi?s-S+Bi:0),E=4*(this._cubeSize-v);Fs(e,T,E,3*v,2*v),l.setRenderTarget(e),l.render(u,xr)}}function Zb(i){const t=[],e=[],n=[];let s=i;const r=i-Bi+1+Ed.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Bi?l=Ed[a-i+Bi-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*d),S=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let E=0;E<d;E++){const A=E%3*2/3-1,I=E>2?0:-1,b=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];M.set(b,_*g*E),S.set(f,m*g*E);const y=[E,E,E,E,E,E];v.set(y,p*g*E)}const T=new si;T.setAttribute("position",new ti(M,_)),T.setAttribute("uv",new ti(S,m)),T.setAttribute("faceIndex",new ti(v,p)),n.push(new Pn(T,null)),s>Bi&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Cd(i,t,e){const n=new Qn(i,t,e);return n.texture.mapping=co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Jb(i,t,e){return new ni({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:uo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Qb(i,t,e){const n=new Float32Array(ds),s=new V(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:uo(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Rd(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uo(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Pd(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function uo(){return`

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
	`}function tT(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===pc||l===mc,h=l===_s||l===Js;if(c||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Ad(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Ad(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function eT(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&zr("WebGLRenderer: "+n+" extension not supported."),s}}}function nT(i,t,e,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let S=0,v=M.length;S<v;S+=3){const T=M[S+0],E=M[S+1],A=M[S+2];f.push(T,E,E,A,A,T)}}else if(g!==void 0){const M=g.array;_=g.version;for(let S=0,v=M.length/3-1;S<v;S+=3){const T=S+0,E=S+1,A=S+2;f.push(T,E,E,A,A,T)}}else return;const m=new(em(f)?am:rm)(f,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function iT(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*a),e.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*a,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=d[M]*_[M];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function sT(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:de("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function rT(i,t,e){const n=new WeakMap,s=new Ne;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let b=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let S=0;d===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let v=o.attributes.position.count*S,T=1;v>t.maxTextureSize&&(T=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const E=new Float32Array(v*T*4*u),A=new nm(E,v,T,u);A.type=Kn,A.needsUpdate=!0;const I=S*4;for(let y=0;y<u;y++){const C=m[y],B=p[y],N=M[y],G=v*T*4*y;for(let W=0;W<C.count;W++){const D=W*I;d===!0&&(s.fromBufferAttribute(C,W),E[G+D+0]=s.x,E[G+D+1]=s.y,E[G+D+2]=s.z,E[G+D+3]=0),g===!0&&(s.fromBufferAttribute(B,W),E[G+D+4]=s.x,E[G+D+5]=s.y,E[G+D+6]=s.z,E[G+D+7]=0),_===!0&&(s.fromBufferAttribute(N,W),E[G+D+8]=s.x,E[G+D+9]=s.y,E[G+D+10]=s.z,E[G+D+11]=N.itemSize===4?s.w:1)}}f={count:u,texture:A,size:new ve(v,T)},n.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function aT(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const oT={[Gp]:"LINEAR_TONE_MAPPING",[zp]:"REINHARD_TONE_MAPPING",[Hp]:"CINEON_TONE_MAPPING",[Vp]:"ACES_FILMIC_TONE_MAPPING",[Xp]:"AGX_TONE_MAPPING",[Yp]:"NEUTRAL_TONE_MAPPING",[Wp]:"CUSTOM_TONE_MAPPING"};function lT(i,t,e,n,s){const r=new Qn(t,e,{type:i,depthBuffer:n,stencilBuffer:s}),a=new Qn(t,e,{type:Si,depthBuffer:!1,stencilBuffer:!1}),o=new si;o.setAttribute("position",new Rn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Rn([0,2,0,0,2,0],2));const l=new iS({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Pn(o,l),h=new fm(-1,1,1,-1,0,1);let u=null,f=null,d=!1,g,_=null,m=[],p=!1;this.setSize=function(M,S){r.setSize(M,S),a.setSize(M,S);for(let v=0;v<m.length;v++){const T=m[v];T.setSize&&T.setSize(M,S)}},this.setEffects=function(M){m=M,p=m.length>0&&m[0].isRenderPass===!0;const S=r.width,v=r.height;for(let T=0;T<m.length;T++){const E=m[T];E.setSize&&E.setSize(S,v)}},this.begin=function(M,S){if(d||M.toneMapping===Jn&&m.length===0)return!1;if(_=S,S!==null){const v=S.width,T=S.height;(r.width!==v||r.height!==T)&&this.setSize(v,T)}return p===!1&&M.setRenderTarget(r),g=M.toneMapping,M.toneMapping=Jn,!0},this.hasRenderPass=function(){return p},this.end=function(M,S){M.toneMapping=g,d=!0;let v=r,T=a;for(let E=0;E<m.length;E++){const A=m[E];if(A.enabled!==!1&&(A.render(M,T,v,S),A.needsSwap!==!1)){const I=v;v=T,T=I}}if(u!==M.outputColorSpace||f!==M.toneMapping){u=M.outputColorSpace,f=M.toneMapping,l.defines={},le.getTransfer(u)===xe&&(l.defines.SRGB_TRANSFER="");const E=oT[f];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=v.texture,M.setRenderTarget(_),M.render(c,h),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const mm=new ln,Zc=new Hr(1,1),gm=new nm,_m=new Dy,xm=new cm,Id=[],Dd=[],Ld=new Float32Array(16),Ud=new Float32Array(9),Fd=new Float32Array(4);function ir(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Id[s];if(r===void 0&&(r=new Float32Array(s),Id[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function We(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function fo(i,t){let e=Dd[t];e===void 0&&(e=new Int32Array(t),Dd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function cT(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function hT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2fv(this.addr,t),We(e,t)}}function uT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;i.uniform3fv(this.addr,t),We(e,t)}}function dT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4fv(this.addr,t),We(e,t)}}function fT(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,n))return;Fd.set(n),i.uniformMatrix2fv(this.addr,!1,Fd),We(e,n)}}function pT(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,n))return;Ud.set(n),i.uniformMatrix3fv(this.addr,!1,Ud),We(e,n)}}function mT(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,n))return;Ld.set(n),i.uniformMatrix4fv(this.addr,!1,Ld),We(e,n)}}function gT(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function _T(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2iv(this.addr,t),We(e,t)}}function xT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3iv(this.addr,t),We(e,t)}}function vT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4iv(this.addr,t),We(e,t)}}function yT(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ST(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2uiv(this.addr,t),We(e,t)}}function MT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3uiv(this.addr,t),We(e,t)}}function bT(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4uiv(this.addr,t),We(e,t)}}function TT(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Zc.compareFunction=e.isReversedDepthBuffer()?Th:bh,r=Zc):r=mm,e.setTexture2D(t||r,s)}function ET(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||_m,s)}function wT(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||xm,s)}function AT(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||gm,s)}function CT(i){switch(i){case 5126:return cT;case 35664:return hT;case 35665:return uT;case 35666:return dT;case 35674:return fT;case 35675:return pT;case 35676:return mT;case 5124:case 35670:return gT;case 35667:case 35671:return _T;case 35668:case 35672:return xT;case 35669:case 35673:return vT;case 5125:return yT;case 36294:return ST;case 36295:return MT;case 36296:return bT;case 35678:case 36198:case 36298:case 36306:case 35682:return TT;case 35679:case 36299:case 36307:return ET;case 35680:case 36300:case 36308:case 36293:return wT;case 36289:case 36303:case 36311:case 36292:return AT}}function RT(i,t){i.uniform1fv(this.addr,t)}function PT(i,t){const e=ir(t,this.size,2);i.uniform2fv(this.addr,e)}function IT(i,t){const e=ir(t,this.size,3);i.uniform3fv(this.addr,e)}function DT(i,t){const e=ir(t,this.size,4);i.uniform4fv(this.addr,e)}function LT(i,t){const e=ir(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function UT(i,t){const e=ir(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function FT(i,t){const e=ir(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function NT(i,t){i.uniform1iv(this.addr,t)}function OT(i,t){i.uniform2iv(this.addr,t)}function BT(i,t){i.uniform3iv(this.addr,t)}function kT(i,t){i.uniform4iv(this.addr,t)}function GT(i,t){i.uniform1uiv(this.addr,t)}function zT(i,t){i.uniform2uiv(this.addr,t)}function HT(i,t){i.uniform3uiv(this.addr,t)}function VT(i,t){i.uniform4uiv(this.addr,t)}function WT(i,t,e){const n=this.cache,s=t.length,r=fo(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),We(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Zc:a=mm;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function XT(i,t,e){const n=this.cache,s=t.length,r=fo(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||_m,r[a])}function YT(i,t,e){const n=this.cache,s=t.length,r=fo(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||xm,r[a])}function $T(i,t,e){const n=this.cache,s=t.length,r=fo(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||gm,r[a])}function qT(i){switch(i){case 5126:return RT;case 35664:return PT;case 35665:return IT;case 35666:return DT;case 35674:return LT;case 35675:return UT;case 35676:return FT;case 5124:case 35670:return NT;case 35667:case 35671:return OT;case 35668:case 35672:return BT;case 35669:case 35673:return kT;case 5125:return GT;case 36294:return zT;case 36295:return HT;case 36296:return VT;case 35678:case 36198:case 36298:case 36306:case 35682:return WT;case 35679:case 36299:case 36307:return XT;case 35680:case 36300:case 36308:case 36293:return YT;case 36289:case 36303:case 36311:case 36292:return $T}}class jT{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=CT(e.type)}}class KT{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qT(e.type)}}class ZT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const El=/(\w+)(\])?(\[|\.)?/g;function Nd(i,t){i.seq.push(t),i.map[t.id]=t}function JT(i,t,e){const n=i.name,s=n.length;for(El.lastIndex=0;;){const r=El.exec(n),a=El.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Nd(e,c===void 0?new jT(o,i,t):new KT(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new ZT(o),Nd(e,u)),e=u}}}class Ya{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);JT(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Od(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const QT=37297;let tE=0;function eE(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Bd=new Yt;function nE(i){le._getMatrix(Bd,le.workingColorSpace,i);const t=`mat3( ${Bd.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(i)){case Ja:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return Wt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function kd(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+eE(i.getShaderSource(t),o)}else return r}function iE(i,t){const e=nE(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const sE={[Gp]:"Linear",[zp]:"Reinhard",[Hp]:"Cineon",[Vp]:"ACESFilmic",[Xp]:"AgX",[Yp]:"Neutral",[Wp]:"Custom"};function rE(i,t){const e=sE[t];return e===void 0?(Wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Fa=new V;function aE(){le.getLuminanceCoefficients(Fa);const i=Fa.x.toFixed(4),t=Fa.y.toFixed(4),e=Fa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oE(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Er).join(`
`)}function lE(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function cE(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Er(i){return i!==""}function Gd(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const hE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jc(i){return i.replace(hE,dE)}const uE=new Map;function dE(i,t){let e=$t[t];if(e===void 0){const n=uE.get(t);if(n!==void 0)e=$t[n],Wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Jc(e)}const fE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hd(i){return i.replace(fE,pE)}function pE(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const mE={[za]:"SHADOWMAP_TYPE_PCF",[Tr]:"SHADOWMAP_TYPE_VSM"};function gE(i){return mE[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _E={[_s]:"ENVMAP_TYPE_CUBE",[Js]:"ENVMAP_TYPE_CUBE",[co]:"ENVMAP_TYPE_CUBE_UV"};function xE(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":_E[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const vE={[Js]:"ENVMAP_MODE_REFRACTION"};function yE(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":vE[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const SE={[kp]:"ENVMAP_BLENDING_MULTIPLY",[dy]:"ENVMAP_BLENDING_MIX",[fy]:"ENVMAP_BLENDING_ADD"};function ME(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":SE[i.combine]||"ENVMAP_BLENDING_NONE"}function bE(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function TE(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=gE(e),c=xE(e),h=yE(e),u=ME(e),f=bE(e),d=oE(e),g=lE(r),_=s.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Er).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Er).join(`
`),p.length>0&&(p+=`
`)):(m=[Vd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Er).join(`
`),p=[Vd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Jn?"#define TONE_MAPPING":"",e.toneMapping!==Jn?$t.tonemapping_pars_fragment:"",e.toneMapping!==Jn?rE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,iE("linearToOutputTexel",e.outputColorSpace),aE(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Er).join(`
`)),a=Jc(a),a=Gd(a,e),a=zd(a,e),o=Jc(o),o=Gd(o,e),o=zd(o,e),a=Hd(a),o=Hd(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===rd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=M+m+a,v=M+p+o,T=Od(s,s.VERTEX_SHADER,S),E=Od(s,s.FRAGMENT_SHADER,v);s.attachShader(_,T),s.attachShader(_,E),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(C){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(_)||"",N=s.getShaderInfoLog(T)||"",G=s.getShaderInfoLog(E)||"",W=B.trim(),D=N.trim(),L=G.trim();let $=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,E);else{const Q=kd(s,T,"vertex"),it=kd(s,E,"fragment");de("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+W+`
`+Q+`
`+it)}else W!==""?Wt("WebGLProgram: Program Info Log:",W):(D===""||L==="")&&(X=!1);X&&(C.diagnostics={runnable:$,programLog:W,vertexShader:{log:D,prefix:m},fragmentShader:{log:L,prefix:p}})}s.deleteShader(T),s.deleteShader(E),I=new Ya(s,_),b=cE(s,_)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,QT)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tE++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=E,this}let EE=0;class wE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new AE(t),e.set(t,n)),n}}class AE{constructor(t){this.id=EE++,this.code=t,this.usedTimes=0}}function CE(i,t,e,n,s,r,a){const o=new im,l=new wE,c=new Set,h=[],u=new Map,f=s.logarithmicDepthBuffer;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,y,C,B,N){const G=B.fog,W=N.geometry,D=b.isMeshStandardMaterial?B.environment:null,L=(b.isMeshStandardMaterial?e:t).get(b.envMap||D),$=L&&L.mapping===co?L.image.height:null,X=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&Wt("WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const Q=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,it=Q!==void 0?Q.length:0;let At=0;W.morphAttributes.position!==void 0&&(At=1),W.morphAttributes.normal!==void 0&&(At=2),W.morphAttributes.color!==void 0&&(At=3);let Ct,Qt,ae,j;if(X){const ie=jn[X];Ct=ie.vertexShader,Qt=ie.fragmentShader}else Ct=b.vertexShader,Qt=b.fragmentShader,l.update(b),ae=l.getVertexShaderID(b),j=l.getFragmentShaderID(b);const et=i.getRenderTarget(),mt=i.state.buffers.depth.getReversed(),Nt=N.isInstancedMesh===!0,St=N.isBatchedMesh===!0,Kt=!!b.map,he=!!b.matcap,Bt=!!L,Gt=!!b.aoMap,Ht=!!b.lightMap,Ot=!!b.bumpMap,te=!!b.normalMap,P=!!b.displacementMap,Ce=!!b.emissiveMap,Zt=!!b.metalnessMap,fe=!!b.roughnessMap,Mt=b.anisotropy>0,R=b.clearcoat>0,x=b.dispersion>0,U=b.iridescence>0,q=b.sheen>0,Z=b.transmission>0,Y=Mt&&!!b.anisotropyMap,bt=R&&!!b.clearcoatMap,ht=R&&!!b.clearcoatNormalMap,wt=R&&!!b.clearcoatRoughnessMap,Ut=U&&!!b.iridescenceMap,tt=U&&!!b.iridescenceThicknessMap,at=q&&!!b.sheenColorMap,vt=q&&!!b.sheenRoughnessMap,Et=!!b.specularMap,lt=!!b.specularColorMap,zt=!!b.specularIntensityMap,F=Z&&!!b.transmissionMap,ft=Z&&!!b.thicknessMap,st=!!b.gradientMap,gt=!!b.alphaMap,nt=b.alphaTest>0,J=!!b.alphaHash,rt=!!b.extensions;let Dt=Jn;b.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Dt=i.toneMapping);const me={shaderID:X,shaderType:b.type,shaderName:b.name,vertexShader:Ct,fragmentShader:Qt,defines:b.defines,customVertexShaderID:ae,customFragmentShaderID:j,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:St,batchingColor:St&&N._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&N.instanceColor!==null,instancingMorph:Nt&&N.morphTexture!==null,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:tr,alphaToCoverage:!!b.alphaToCoverage,map:Kt,matcap:he,envMap:Bt,envMapMode:Bt&&L.mapping,envMapCubeUVHeight:$,aoMap:Gt,lightMap:Ht,bumpMap:Ot,normalMap:te,displacementMap:P,emissiveMap:Ce,normalMapObjectSpace:te&&b.normalMapType===_y,normalMapTangentSpace:te&&b.normalMapType===gy,metalnessMap:Zt,roughnessMap:fe,anisotropy:Mt,anisotropyMap:Y,clearcoat:R,clearcoatMap:bt,clearcoatNormalMap:ht,clearcoatRoughnessMap:wt,dispersion:x,iridescence:U,iridescenceMap:Ut,iridescenceThicknessMap:tt,sheen:q,sheenColorMap:at,sheenRoughnessMap:vt,specularMap:Et,specularColorMap:lt,specularIntensityMap:zt,transmission:Z,transmissionMap:F,thicknessMap:ft,gradientMap:st,opaque:b.transparent===!1&&b.blending===Xs&&b.alphaToCoverage===!1,alphaMap:gt,alphaTest:nt,alphaHash:J,combine:b.combine,mapUv:Kt&&_(b.map.channel),aoMapUv:Gt&&_(b.aoMap.channel),lightMapUv:Ht&&_(b.lightMap.channel),bumpMapUv:Ot&&_(b.bumpMap.channel),normalMapUv:te&&_(b.normalMap.channel),displacementMapUv:P&&_(b.displacementMap.channel),emissiveMapUv:Ce&&_(b.emissiveMap.channel),metalnessMapUv:Zt&&_(b.metalnessMap.channel),roughnessMapUv:fe&&_(b.roughnessMap.channel),anisotropyMapUv:Y&&_(b.anisotropyMap.channel),clearcoatMapUv:bt&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:ht&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ut&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:at&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:vt&&_(b.sheenRoughnessMap.channel),specularMapUv:Et&&_(b.specularMap.channel),specularColorMapUv:lt&&_(b.specularColorMap.channel),specularIntensityMapUv:zt&&_(b.specularIntensityMap.channel),transmissionMapUv:F&&_(b.transmissionMap.channel),thicknessMapUv:ft&&_(b.thicknessMap.channel),alphaMapUv:gt&&_(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(te||Mt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!W.attributes.uv&&(Kt||gt),fog:!!G,useFog:b.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:mt,skinning:N.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:At,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Dt,decodeVideoTexture:Kt&&b.map.isVideoTexture===!0&&le.getTransfer(b.map.colorSpace)===xe,decodeVideoTextureEmissive:Ce&&b.emissiveMap.isVideoTexture===!0&&le.getTransfer(b.emissiveMap.colorSpace)===xe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===wn,flipSided:b.side===fn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:rt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&b.extensions.multiDraw===!0||St)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return me.vertexUv1s=c.has(1),me.vertexUv2s=c.has(2),me.vertexUv3s=c.has(3),c.clear(),me}function p(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const C in b.defines)y.push(C),y.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(M(y,b),S(y,b),y.push(i.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function M(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function S(b,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),b.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),b.push(o.mask)}function v(b){const y=g[b.type];let C;if(y){const B=jn[y];C=Yy.clone(B.uniforms)}else C=b.uniforms;return C}function T(b,y){let C=u.get(y);return C!==void 0?++C.usedTimes:(C=new TE(i,y,b,r),h.push(C),u.set(y,C)),C}function E(b){if(--b.usedTimes===0){const y=h.indexOf(b);h[y]=h[h.length-1],h.pop(),u.delete(b.cacheKey),b.destroy()}}function A(b){l.remove(b)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:T,releaseProgram:E,releaseShaderCache:A,programs:h,dispose:I}}function RE(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function PE(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Wd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Xd(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,d,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function o(u,f,d,g,_,m){const p=a(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,g,_,m){const p=a(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||PE),n.length>1&&n.sort(f||Wd),s.length>1&&s.sort(f||Wd)}function h(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function IE(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Xd,i.set(n,[a])):s>=r.length?(a=new Xd,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function DE(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new Se};break;case"SpotLight":e={position:new V,direction:new V,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":e={color:new Se,position:new V,halfWidth:new V,halfHeight:new V};break}return i[t.id]=e,e}}}function LE(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let UE=0;function FE(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function NE(i){const t=new DE,e=LE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);const s=new V,r=new Ge,a=new Ge;function o(c){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,M=0,S=0,v=0,T=0,E=0,A=0;c.sort(FE);for(let b=0,y=c.length;b<y;b++){const C=c[b],B=C.color,N=C.intensity,G=C.distance;let W=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Qs?W=C.shadow.map.texture:W=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=B.r*N,u+=B.g*N,f+=B.b*N;else if(C.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(C.sh.coefficients[D],N);A++}else if(C.isDirectionalLight){const D=t.get(C);if(D.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const L=C.shadow,$=e.get(C);$.shadowIntensity=L.intensity,$.shadowBias=L.bias,$.shadowNormalBias=L.normalBias,$.shadowRadius=L.radius,$.shadowMapSize=L.mapSize,n.directionalShadow[d]=$,n.directionalShadowMap[d]=W,n.directionalShadowMatrix[d]=C.shadow.matrix,M++}n.directional[d]=D,d++}else if(C.isSpotLight){const D=t.get(C);D.position.setFromMatrixPosition(C.matrixWorld),D.color.copy(B).multiplyScalar(N),D.distance=G,D.coneCos=Math.cos(C.angle),D.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),D.decay=C.decay,n.spot[_]=D;const L=C.shadow;if(C.map&&(n.spotLightMap[T]=C.map,T++,L.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[_]=L.matrix,C.castShadow){const $=e.get(C);$.shadowIntensity=L.intensity,$.shadowBias=L.bias,$.shadowNormalBias=L.normalBias,$.shadowRadius=L.radius,$.shadowMapSize=L.mapSize,n.spotShadow[_]=$,n.spotShadowMap[_]=W,v++}_++}else if(C.isRectAreaLight){const D=t.get(C);D.color.copy(B).multiplyScalar(N),D.halfWidth.set(C.width*.5,0,0),D.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=D,m++}else if(C.isPointLight){const D=t.get(C);if(D.color.copy(C.color).multiplyScalar(C.intensity),D.distance=C.distance,D.decay=C.decay,C.castShadow){const L=C.shadow,$=e.get(C);$.shadowIntensity=L.intensity,$.shadowBias=L.bias,$.shadowNormalBias=L.normalBias,$.shadowRadius=L.radius,$.shadowMapSize=L.mapSize,$.shadowCameraNear=L.camera.near,$.shadowCameraFar=L.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=C.shadow.matrix,S++}n.point[g]=D,g++}else if(C.isHemisphereLight){const D=t.get(C);D.skyColor.copy(C.color).multiplyScalar(N),D.groundColor.copy(C.groundColor).multiplyScalar(N),n.hemi[p]=D,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const I=n.hash;(I.directionalLength!==d||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==M||I.numPointShadows!==S||I.numSpotShadows!==v||I.numSpotMaps!==T||I.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,I.directionalLength=d,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=M,I.numPointShadows=S,I.numSpotShadows=v,I.numSpotMaps=T,I.numLightProbes=A,n.version=UE++)}function l(c,h){let u=0,f=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const S=c[p];if(S.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(S.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Yd(i){const t=new NE(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function OE(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Yd(i),t.set(s,[o])):r>=a.length?(o=new Yd(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const BE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,GE=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],zE=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],$d=new Ge,vr=new V,wl=new V;function HE(i,t,e){let n=new um;const s=new ve,r=new ve,a=new Ne,o=new sS,l=new rS,c={},h=e.maxTextureSize,u={[ki]:fn,[fn]:ki,[wn]:wn},f=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:BE,fragmentShader:kE}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new si;g.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Pn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=za;let p=this.type;this.render=function(E,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;E.type===$v&&(Wt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),E.type=za);const b=i.getRenderTarget(),y=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),B=i.state;B.setBlending(xi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const N=p!==this.type;N&&A.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(W=>W.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,W=E.length;G<W;G++){const D=E[G],L=D.shadow;if(L===void 0){Wt("WebGLShadowMap:",D,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;s.copy(L.mapSize);const $=L.getFrameExtents();if(s.multiply($),r.copy(L.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,L.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,L.mapSize.y=r.y)),L.map===null||N===!0){if(L.map!==null&&(L.map.depthTexture!==null&&(L.map.depthTexture.dispose(),L.map.depthTexture=null),L.map.dispose()),this.type===Tr){if(D.isPointLight){Wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}L.map=new Qn(s.x,s.y,{format:Qs,type:Si,minFilter:en,magFilter:en,generateMipmaps:!1}),L.map.texture.name=D.name+".shadowMap",L.map.depthTexture=new Hr(s.x,s.y,Kn),L.map.depthTexture.name=D.name+".shadowMapDepth",L.map.depthTexture.format=Mi,L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=Ze,L.map.depthTexture.magFilter=Ze}else{D.isPointLight?(L.map=new hm(s.x),L.map.depthTexture=new nS(s.x,ei)):(L.map=new Qn(s.x,s.y),L.map.depthTexture=new Hr(s.x,s.y,ei)),L.map.depthTexture.name=D.name+".shadowMap",L.map.depthTexture.format=Mi;const Q=i.state.buffers.depth.getReversed();this.type===za?(L.map.depthTexture.compareFunction=Q?Th:bh,L.map.depthTexture.minFilter=en,L.map.depthTexture.magFilter=en):(L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=Ze,L.map.depthTexture.magFilter=Ze)}L.camera.updateProjectionMatrix()}const X=L.map.isWebGLCubeRenderTarget?6:1;for(let Q=0;Q<X;Q++){if(L.map.isWebGLCubeRenderTarget)i.setRenderTarget(L.map,Q),i.clear();else{Q===0&&(i.setRenderTarget(L.map),i.clear());const it=L.getViewport(Q);a.set(r.x*it.x,r.y*it.y,r.x*it.z,r.y*it.w),B.viewport(a)}if(D.isPointLight){const it=L.camera,At=L.matrix,Ct=D.distance||it.far;Ct!==it.far&&(it.far=Ct,it.updateProjectionMatrix()),vr.setFromMatrixPosition(D.matrixWorld),it.position.copy(vr),wl.copy(it.position),wl.add(GE[Q]),it.up.copy(zE[Q]),it.lookAt(wl),it.updateMatrixWorld(),At.makeTranslation(-vr.x,-vr.y,-vr.z),$d.multiplyMatrices(it.projectionMatrix,it.matrixWorldInverse),L._frustum.setFromProjectionMatrix($d,it.coordinateSystem,it.reversedDepth)}else L.updateMatrices(D);n=L.getFrustum(),v(A,I,L.camera,D,this.type)}L.isPointLightShadow!==!0&&this.type===Tr&&M(L,I),L.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,y,C)};function M(E,A){const I=t.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Qn(s.x,s.y,{format:Qs,type:Si})),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,I,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,I,d,_,null)}function S(E,A,I,b){let y=null;const C=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)y=C;else if(y=I.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const B=y.uuid,N=A.uuid;let G=c[B];G===void 0&&(G={},c[B]=G);let W=G[N];W===void 0&&(W=y.clone(),G[N]=W,A.addEventListener("dispose",T)),y=W}if(y.visible=A.visible,y.wireframe=A.wireframe,b===Tr?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:u[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const B=i.properties.get(y);B.light=I}return y}function v(E,A,I,b,y){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===Tr)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);const N=t.update(E),G=E.material;if(Array.isArray(G)){const W=N.groups;for(let D=0,L=W.length;D<L;D++){const $=W[D],X=G[$.materialIndex];if(X&&X.visible){const Q=S(E,X,b,y);E.onBeforeShadow(i,E,A,I,N,Q,$),i.renderBufferDirect(I,null,N,Q,E,$),E.onAfterShadow(i,E,A,I,N,Q,$)}}}else if(G.visible){const W=S(E,G,b,y);E.onBeforeShadow(i,E,A,I,N,W,null),i.renderBufferDirect(I,null,N,W,E,null),E.onAfterShadow(i,E,A,I,N,W,null)}}const B=E.children;for(let N=0,G=B.length;N<G;N++)v(B[N],A,I,b,y)}function T(E){E.target.removeEventListener("dispose",T);for(const I in c){const b=c[I],y=E.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const VE={[oc]:lc,[cc]:dc,[hc]:fc,[Zs]:uc,[lc]:oc,[dc]:cc,[fc]:hc,[uc]:Zs};function WE(i,t){function e(){let F=!1;const ft=new Ne;let st=null;const gt=new Ne(0,0,0,0);return{setMask:function(nt){st!==nt&&!F&&(i.colorMask(nt,nt,nt,nt),st=nt)},setLocked:function(nt){F=nt},setClear:function(nt,J,rt,Dt,me){me===!0&&(nt*=Dt,J*=Dt,rt*=Dt),ft.set(nt,J,rt,Dt),gt.equals(ft)===!1&&(i.clearColor(nt,J,rt,Dt),gt.copy(ft))},reset:function(){F=!1,st=null,gt.set(-1,0,0,0)}}}function n(){let F=!1,ft=!1,st=null,gt=null,nt=null;return{setReversed:function(J){if(ft!==J){const rt=t.get("EXT_clip_control");J?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT),ft=J;const Dt=nt;nt=null,this.setClear(Dt)}},getReversed:function(){return ft},setTest:function(J){J?et(i.DEPTH_TEST):mt(i.DEPTH_TEST)},setMask:function(J){st!==J&&!F&&(i.depthMask(J),st=J)},setFunc:function(J){if(ft&&(J=VE[J]),gt!==J){switch(J){case oc:i.depthFunc(i.NEVER);break;case lc:i.depthFunc(i.ALWAYS);break;case cc:i.depthFunc(i.LESS);break;case Zs:i.depthFunc(i.LEQUAL);break;case hc:i.depthFunc(i.EQUAL);break;case uc:i.depthFunc(i.GEQUAL);break;case dc:i.depthFunc(i.GREATER);break;case fc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=J}},setLocked:function(J){F=J},setClear:function(J){nt!==J&&(ft&&(J=1-J),i.clearDepth(J),nt=J)},reset:function(){F=!1,st=null,gt=null,nt=null,ft=!1}}}function s(){let F=!1,ft=null,st=null,gt=null,nt=null,J=null,rt=null,Dt=null,me=null;return{setTest:function(ie){F||(ie?et(i.STENCIL_TEST):mt(i.STENCIL_TEST))},setMask:function(ie){ft!==ie&&!F&&(i.stencilMask(ie),ft=ie)},setFunc:function(ie,ze,Ee){(st!==ie||gt!==ze||nt!==Ee)&&(i.stencilFunc(ie,ze,Ee),st=ie,gt=ze,nt=Ee)},setOp:function(ie,ze,Ee){(J!==ie||rt!==ze||Dt!==Ee)&&(i.stencilOp(ie,ze,Ee),J=ie,rt=ze,Dt=Ee)},setLocked:function(ie){F=ie},setClear:function(ie){me!==ie&&(i.clearStencil(ie),me=ie)},reset:function(){F=!1,ft=null,st=null,gt=null,nt=null,J=null,rt=null,Dt=null,me=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,S=null,v=null,T=null,E=null,A=new Se(0,0,0),I=0,b=!1,y=null,C=null,B=null,N=null,G=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,L=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec($)[1]),D=L>=1):$.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),D=L>=2);let X=null,Q={};const it=i.getParameter(i.SCISSOR_BOX),At=i.getParameter(i.VIEWPORT),Ct=new Ne().fromArray(it),Qt=new Ne().fromArray(At);function ae(F,ft,st,gt){const nt=new Uint8Array(4),J=i.createTexture();i.bindTexture(F,J),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let rt=0;rt<st;rt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,nt):i.texImage2D(ft+rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,nt);return J}const j={};j[i.TEXTURE_2D]=ae(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(i.DEPTH_TEST),a.setFunc(Zs),Ot(!1),te(Qu),et(i.CULL_FACE),Gt(xi);function et(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function mt(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Nt(F,ft){return u[F]!==ft?(i.bindFramebuffer(F,ft),u[F]=ft,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ft),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function St(F,ft){let st=d,gt=!1;if(F){st=f.get(ft),st===void 0&&(st=[],f.set(ft,st));const nt=F.textures;if(st.length!==nt.length||st[0]!==i.COLOR_ATTACHMENT0){for(let J=0,rt=nt.length;J<rt;J++)st[J]=i.COLOR_ATTACHMENT0+J;st.length=nt.length,gt=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,gt=!0);gt&&i.drawBuffers(st)}function Kt(F){return g!==F?(i.useProgram(F),g=F,!0):!1}const he={[us]:i.FUNC_ADD,[jv]:i.FUNC_SUBTRACT,[Kv]:i.FUNC_REVERSE_SUBTRACT};he[Zv]=i.MIN,he[Jv]=i.MAX;const Bt={[Qv]:i.ZERO,[ty]:i.ONE,[ey]:i.SRC_COLOR,[rc]:i.SRC_ALPHA,[oy]:i.SRC_ALPHA_SATURATE,[ry]:i.DST_COLOR,[iy]:i.DST_ALPHA,[ny]:i.ONE_MINUS_SRC_COLOR,[ac]:i.ONE_MINUS_SRC_ALPHA,[ay]:i.ONE_MINUS_DST_COLOR,[sy]:i.ONE_MINUS_DST_ALPHA,[ly]:i.CONSTANT_COLOR,[cy]:i.ONE_MINUS_CONSTANT_COLOR,[hy]:i.CONSTANT_ALPHA,[uy]:i.ONE_MINUS_CONSTANT_ALPHA};function Gt(F,ft,st,gt,nt,J,rt,Dt,me,ie){if(F===xi){_===!0&&(mt(i.BLEND),_=!1);return}if(_===!1&&(et(i.BLEND),_=!0),F!==qv){if(F!==m||ie!==b){if((p!==us||v!==us)&&(i.blendEquation(i.FUNC_ADD),p=us,v=us),ie)switch(F){case Xs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case td:i.blendFunc(i.ONE,i.ONE);break;case ed:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nd:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:de("WebGLState: Invalid blending: ",F);break}else switch(F){case Xs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case td:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ed:de("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nd:de("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:de("WebGLState: Invalid blending: ",F);break}M=null,S=null,T=null,E=null,A.set(0,0,0),I=0,m=F,b=ie}return}nt=nt||ft,J=J||st,rt=rt||gt,(ft!==p||nt!==v)&&(i.blendEquationSeparate(he[ft],he[nt]),p=ft,v=nt),(st!==M||gt!==S||J!==T||rt!==E)&&(i.blendFuncSeparate(Bt[st],Bt[gt],Bt[J],Bt[rt]),M=st,S=gt,T=J,E=rt),(Dt.equals(A)===!1||me!==I)&&(i.blendColor(Dt.r,Dt.g,Dt.b,me),A.copy(Dt),I=me),m=F,b=!1}function Ht(F,ft){F.side===wn?mt(i.CULL_FACE):et(i.CULL_FACE);let st=F.side===fn;ft&&(st=!st),Ot(st),F.blending===Xs&&F.transparent===!1?Gt(xi):Gt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const gt=F.stencilWrite;o.setTest(gt),gt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ce(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(F){y!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),y=F)}function te(F){F!==Xv?(et(i.CULL_FACE),F!==C&&(F===Qu?i.cullFace(i.BACK):F===Yv?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):mt(i.CULL_FACE),C=F}function P(F){F!==B&&(D&&i.lineWidth(F),B=F)}function Ce(F,ft,st){F?(et(i.POLYGON_OFFSET_FILL),(N!==ft||G!==st)&&(i.polygonOffset(ft,st),N=ft,G=st)):mt(i.POLYGON_OFFSET_FILL)}function Zt(F){F?et(i.SCISSOR_TEST):mt(i.SCISSOR_TEST)}function fe(F){F===void 0&&(F=i.TEXTURE0+W-1),X!==F&&(i.activeTexture(F),X=F)}function Mt(F,ft,st){st===void 0&&(X===null?st=i.TEXTURE0+W-1:st=X);let gt=Q[st];gt===void 0&&(gt={type:void 0,texture:void 0},Q[st]=gt),(gt.type!==F||gt.texture!==ft)&&(X!==st&&(i.activeTexture(st),X=st),i.bindTexture(F,ft||j[F]),gt.type=F,gt.texture=ft)}function R(){const F=Q[X];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(F){de("WebGLState:",F)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(F){de("WebGLState:",F)}}function q(){try{i.texSubImage2D(...arguments)}catch(F){de("WebGLState:",F)}}function Z(){try{i.texSubImage3D(...arguments)}catch(F){de("WebGLState:",F)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(F){de("WebGLState:",F)}}function bt(){try{i.compressedTexSubImage3D(...arguments)}catch(F){de("WebGLState:",F)}}function ht(){try{i.texStorage2D(...arguments)}catch(F){de("WebGLState:",F)}}function wt(){try{i.texStorage3D(...arguments)}catch(F){de("WebGLState:",F)}}function Ut(){try{i.texImage2D(...arguments)}catch(F){de("WebGLState:",F)}}function tt(){try{i.texImage3D(...arguments)}catch(F){de("WebGLState:",F)}}function at(F){Ct.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Ct.copy(F))}function vt(F){Qt.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Qt.copy(F))}function Et(F,ft){let st=c.get(ft);st===void 0&&(st=new WeakMap,c.set(ft,st));let gt=st.get(F);gt===void 0&&(gt=i.getUniformBlockIndex(ft,F.name),st.set(F,gt))}function lt(F,ft){const gt=c.get(ft).get(F);l.get(ft)!==gt&&(i.uniformBlockBinding(ft,gt,F.__bindingPointIndex),l.set(ft,gt))}function zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},X=null,Q={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,S=null,v=null,T=null,E=null,A=new Se(0,0,0),I=0,b=!1,y=null,C=null,B=null,N=null,G=null,Ct.set(0,0,i.canvas.width,i.canvas.height),Qt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:mt,bindFramebuffer:Nt,drawBuffers:St,useProgram:Kt,setBlending:Gt,setMaterial:Ht,setFlipSided:Ot,setCullFace:te,setLineWidth:P,setPolygonOffset:Ce,setScissorTest:Zt,activeTexture:fe,bindTexture:Mt,unbindTexture:R,compressedTexImage2D:x,compressedTexImage3D:U,texImage2D:Ut,texImage3D:tt,updateUBOMapping:Et,uniformBlockBinding:lt,texStorage2D:ht,texStorage3D:wt,texSubImage2D:q,texSubImage3D:Z,compressedTexSubImage2D:Y,compressedTexSubImage3D:bt,scissor:at,viewport:vt,reset:zt}}function XE(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ve,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,x){return d?new OffscreenCanvas(R,x):to("canvas")}function _(R,x,U){let q=1;const Z=Mt(R);if((Z.width>U||Z.height>U)&&(q=U/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Y=Math.floor(q*Z.width),bt=Math.floor(q*Z.height);u===void 0&&(u=g(Y,bt));const ht=x?g(Y,bt):u;return ht.width=Y,ht.height=bt,ht.getContext("2d").drawImage(R,0,0,Y,bt),Wt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+bt+")."),ht}else return"data"in R&&Wt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(R,x,U,q,Z=!1){if(R!==null){if(i[R]!==void 0)return i[R];Wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=x;if(x===i.RED&&(U===i.FLOAT&&(Y=i.R32F),U===i.HALF_FLOAT&&(Y=i.R16F),U===i.UNSIGNED_BYTE&&(Y=i.R8)),x===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(Y=i.R8UI),U===i.UNSIGNED_SHORT&&(Y=i.R16UI),U===i.UNSIGNED_INT&&(Y=i.R32UI),U===i.BYTE&&(Y=i.R8I),U===i.SHORT&&(Y=i.R16I),U===i.INT&&(Y=i.R32I)),x===i.RG&&(U===i.FLOAT&&(Y=i.RG32F),U===i.HALF_FLOAT&&(Y=i.RG16F),U===i.UNSIGNED_BYTE&&(Y=i.RG8)),x===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(Y=i.RG8UI),U===i.UNSIGNED_SHORT&&(Y=i.RG16UI),U===i.UNSIGNED_INT&&(Y=i.RG32UI),U===i.BYTE&&(Y=i.RG8I),U===i.SHORT&&(Y=i.RG16I),U===i.INT&&(Y=i.RG32I)),x===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),U===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),U===i.UNSIGNED_INT&&(Y=i.RGB32UI),U===i.BYTE&&(Y=i.RGB8I),U===i.SHORT&&(Y=i.RGB16I),U===i.INT&&(Y=i.RGB32I)),x===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),U===i.UNSIGNED_INT&&(Y=i.RGBA32UI),U===i.BYTE&&(Y=i.RGBA8I),U===i.SHORT&&(Y=i.RGBA16I),U===i.INT&&(Y=i.RGBA32I)),x===i.RGB&&(U===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),x===i.RGBA){const bt=Z?Ja:le.getTransfer(q);U===i.FLOAT&&(Y=i.RGBA32F),U===i.HALF_FLOAT&&(Y=i.RGBA16F),U===i.UNSIGNED_BYTE&&(Y=bt===xe?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(R,x){let U;return R?x===null||x===ei||x===Gr?U=i.DEPTH24_STENCIL8:x===Kn?U=i.DEPTH32F_STENCIL8:x===kr&&(U=i.DEPTH24_STENCIL8,Wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ei||x===Gr?U=i.DEPTH_COMPONENT24:x===Kn?U=i.DEPTH_COMPONENT32F:x===kr&&(U=i.DEPTH_COMPONENT16),U}function T(R,x){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ze&&R.minFilter!==en?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function E(R){const x=R.target;x.removeEventListener("dispose",E),I(x),x.isVideoTexture&&h.delete(x)}function A(R){const x=R.target;x.removeEventListener("dispose",A),y(x)}function I(R){const x=n.get(R);if(x.__webglInit===void 0)return;const U=R.source,q=f.get(U);if(q){const Z=q[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&b(R),Object.keys(q).length===0&&f.delete(U)}n.remove(R)}function b(R){const x=n.get(R);i.deleteTexture(x.__webglTexture);const U=R.source,q=f.get(U);delete q[x.__cacheKey],a.memory.textures--}function y(R){const x=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let Z=0;Z<x.__webglFramebuffer[q].length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[q][Z]);else i.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)i.deleteFramebuffer(x.__webglFramebuffer[q]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const U=R.textures;for(let q=0,Z=U.length;q<Z;q++){const Y=n.get(U[q]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(U[q])}n.remove(R)}let C=0;function B(){C=0}function N(){const R=C;return R>=s.maxTextures&&Wt("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),C+=1,R}function G(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function W(R,x){const U=n.get(R);if(R.isVideoTexture&&Zt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&U.__version!==R.version){const q=R.image;if(q===null)Wt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Wt("WebGLRenderer: Texture marked for update but image is incomplete");else{j(U,R,x);return}}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+x)}function D(R,x){const U=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){j(U,R,x);return}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+x)}function L(R,x){const U=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){j(U,R,x);return}e.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+x)}function $(R,x){const U=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&U.__version!==R.version){et(U,R,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+x)}const X={[gc]:i.REPEAT,[mi]:i.CLAMP_TO_EDGE,[_c]:i.MIRRORED_REPEAT},Q={[Ze]:i.NEAREST,[py]:i.NEAREST_MIPMAP_NEAREST,[ma]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[Ko]:i.LINEAR_MIPMAP_NEAREST,[ps]:i.LINEAR_MIPMAP_LINEAR},it={[xy]:i.NEVER,[by]:i.ALWAYS,[vy]:i.LESS,[bh]:i.LEQUAL,[yy]:i.EQUAL,[Th]:i.GEQUAL,[Sy]:i.GREATER,[My]:i.NOTEQUAL};function At(R,x){if(x.type===Kn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===en||x.magFilter===Ko||x.magFilter===ma||x.magFilter===ps||x.minFilter===en||x.minFilter===Ko||x.minFilter===ma||x.minFilter===ps)&&Wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,X[x.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,X[x.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,X[x.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Q[x.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Q[x.minFilter]),x.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,it[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ze||x.minFilter!==ma&&x.minFilter!==ps||x.type===Kn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const U=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ct(R,x){let U=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",E));const q=x.source;let Z=f.get(q);Z===void 0&&(Z={},f.set(q,Z));const Y=G(x);if(Y!==R.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),Z[Y].usedTimes++;const bt=Z[R.__cacheKey];bt!==void 0&&(Z[R.__cacheKey].usedTimes--,bt.usedTimes===0&&b(x)),R.__cacheKey=Y,R.__webglTexture=Z[Y].texture}return U}function Qt(R,x,U){return Math.floor(Math.floor(R/U)/x)}function ae(R,x,U,q){const Y=R.updateRanges;if(Y.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,U,q,x.data);else{Y.sort((tt,at)=>tt.start-at.start);let bt=0;for(let tt=1;tt<Y.length;tt++){const at=Y[bt],vt=Y[tt],Et=at.start+at.count,lt=Qt(vt.start,x.width,4),zt=Qt(at.start,x.width,4);vt.start<=Et+1&&lt===zt&&Qt(vt.start+vt.count-1,x.width,4)===lt?at.count=Math.max(at.count,vt.start+vt.count-at.start):(++bt,Y[bt]=vt)}Y.length=bt+1;const ht=i.getParameter(i.UNPACK_ROW_LENGTH),wt=i.getParameter(i.UNPACK_SKIP_PIXELS),Ut=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let tt=0,at=Y.length;tt<at;tt++){const vt=Y[tt],Et=Math.floor(vt.start/4),lt=Math.ceil(vt.count/4),zt=Et%x.width,F=Math.floor(Et/x.width),ft=lt,st=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,zt),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,zt,F,ft,st,U,q,x.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ht),i.pixelStorei(i.UNPACK_SKIP_PIXELS,wt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ut)}}function j(R,x,U){let q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=i.TEXTURE_3D);const Z=Ct(R,x),Y=x.source;e.bindTexture(q,R.__webglTexture,i.TEXTURE0+U);const bt=n.get(Y);if(Y.version!==bt.__version||Z===!0){e.activeTexture(i.TEXTURE0+U);const ht=le.getPrimaries(le.workingColorSpace),wt=x.colorSpace===Ni?null:le.getPrimaries(x.colorSpace),Ut=x.colorSpace===Ni||ht===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let tt=_(x.image,!1,s.maxTextureSize);tt=fe(x,tt);const at=r.convert(x.format,x.colorSpace),vt=r.convert(x.type);let Et=S(x.internalFormat,at,vt,x.colorSpace,x.isVideoTexture);At(q,x);let lt;const zt=x.mipmaps,F=x.isVideoTexture!==!0,ft=bt.__version===void 0||Z===!0,st=Y.dataReady,gt=T(x,tt);if(x.isDepthTexture)Et=v(x.format===ms,x.type),ft&&(F?e.texStorage2D(i.TEXTURE_2D,1,Et,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,Et,tt.width,tt.height,0,at,vt,null));else if(x.isDataTexture)if(zt.length>0){F&&ft&&e.texStorage2D(i.TEXTURE_2D,gt,Et,zt[0].width,zt[0].height);for(let nt=0,J=zt.length;nt<J;nt++)lt=zt[nt],F?st&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,lt.width,lt.height,at,vt,lt.data):e.texImage2D(i.TEXTURE_2D,nt,Et,lt.width,lt.height,0,at,vt,lt.data);x.generateMipmaps=!1}else F?(ft&&e.texStorage2D(i.TEXTURE_2D,gt,Et,tt.width,tt.height),st&&ae(x,tt,at,vt)):e.texImage2D(i.TEXTURE_2D,0,Et,tt.width,tt.height,0,at,vt,tt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){F&&ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Et,zt[0].width,zt[0].height,tt.depth);for(let nt=0,J=zt.length;nt<J;nt++)if(lt=zt[nt],x.format!==Hn)if(at!==null)if(F){if(st)if(x.layerUpdates.size>0){const rt=Td(lt.width,lt.height,x.format,x.type);for(const Dt of x.layerUpdates){const me=lt.data.subarray(Dt*rt/lt.data.BYTES_PER_ELEMENT,(Dt+1)*rt/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,Dt,lt.width,lt.height,1,at,me)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,lt.width,lt.height,tt.depth,at,lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,Et,lt.width,lt.height,tt.depth,0,lt.data,0,0);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?st&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,lt.width,lt.height,tt.depth,at,vt,lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,Et,lt.width,lt.height,tt.depth,0,at,vt,lt.data)}else{F&&ft&&e.texStorage2D(i.TEXTURE_2D,gt,Et,zt[0].width,zt[0].height);for(let nt=0,J=zt.length;nt<J;nt++)lt=zt[nt],x.format!==Hn?at!==null?F?st&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,lt.width,lt.height,at,lt.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,Et,lt.width,lt.height,0,lt.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?st&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,lt.width,lt.height,at,vt,lt.data):e.texImage2D(i.TEXTURE_2D,nt,Et,lt.width,lt.height,0,at,vt,lt.data)}else if(x.isDataArrayTexture)if(F){if(ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Et,tt.width,tt.height,tt.depth),st)if(x.layerUpdates.size>0){const nt=Td(tt.width,tt.height,x.format,x.type);for(const J of x.layerUpdates){const rt=tt.data.subarray(J*nt/tt.data.BYTES_PER_ELEMENT,(J+1)*nt/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,tt.width,tt.height,1,at,vt,rt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,at,vt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Et,tt.width,tt.height,tt.depth,0,at,vt,tt.data);else if(x.isData3DTexture)F?(ft&&e.texStorage3D(i.TEXTURE_3D,gt,Et,tt.width,tt.height,tt.depth),st&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,at,vt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,Et,tt.width,tt.height,tt.depth,0,at,vt,tt.data);else if(x.isFramebufferTexture){if(ft)if(F)e.texStorage2D(i.TEXTURE_2D,gt,Et,tt.width,tt.height);else{let nt=tt.width,J=tt.height;for(let rt=0;rt<gt;rt++)e.texImage2D(i.TEXTURE_2D,rt,Et,nt,J,0,at,vt,null),nt>>=1,J>>=1}}else if(zt.length>0){if(F&&ft){const nt=Mt(zt[0]);e.texStorage2D(i.TEXTURE_2D,gt,Et,nt.width,nt.height)}for(let nt=0,J=zt.length;nt<J;nt++)lt=zt[nt],F?st&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,at,vt,lt):e.texImage2D(i.TEXTURE_2D,nt,Et,at,vt,lt);x.generateMipmaps=!1}else if(F){if(ft){const nt=Mt(tt);e.texStorage2D(i.TEXTURE_2D,gt,Et,nt.width,nt.height)}st&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at,vt,tt)}else e.texImage2D(i.TEXTURE_2D,0,Et,at,vt,tt);m(x)&&p(q),bt.__version=Y.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function et(R,x,U){if(x.image.length!==6)return;const q=Ct(R,x),Z=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+U);const Y=n.get(Z);if(Z.version!==Y.__version||q===!0){e.activeTexture(i.TEXTURE0+U);const bt=le.getPrimaries(le.workingColorSpace),ht=x.colorSpace===Ni?null:le.getPrimaries(x.colorSpace),wt=x.colorSpace===Ni||bt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const Ut=x.isCompressedTexture||x.image[0].isCompressedTexture,tt=x.image[0]&&x.image[0].isDataTexture,at=[];for(let J=0;J<6;J++)!Ut&&!tt?at[J]=_(x.image[J],!0,s.maxCubemapSize):at[J]=tt?x.image[J].image:x.image[J],at[J]=fe(x,at[J]);const vt=at[0],Et=r.convert(x.format,x.colorSpace),lt=r.convert(x.type),zt=S(x.internalFormat,Et,lt,x.colorSpace),F=x.isVideoTexture!==!0,ft=Y.__version===void 0||q===!0,st=Z.dataReady;let gt=T(x,vt);At(i.TEXTURE_CUBE_MAP,x);let nt;if(Ut){F&&ft&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,zt,vt.width,vt.height);for(let J=0;J<6;J++){nt=at[J].mipmaps;for(let rt=0;rt<nt.length;rt++){const Dt=nt[rt];x.format!==Hn?Et!==null?F?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,rt,0,0,Dt.width,Dt.height,Et,Dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,rt,zt,Dt.width,Dt.height,0,Dt.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,rt,0,0,Dt.width,Dt.height,Et,lt,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,rt,zt,Dt.width,Dt.height,0,Et,lt,Dt.data)}}}else{if(nt=x.mipmaps,F&&ft){nt.length>0&&gt++;const J=Mt(at[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,zt,J.width,J.height)}for(let J=0;J<6;J++)if(tt){F?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,at[J].width,at[J].height,Et,lt,at[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,zt,at[J].width,at[J].height,0,Et,lt,at[J].data);for(let rt=0;rt<nt.length;rt++){const me=nt[rt].image[J].image;F?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,rt+1,0,0,me.width,me.height,Et,lt,me.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,rt+1,zt,me.width,me.height,0,Et,lt,me.data)}}else{F?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Et,lt,at[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,zt,Et,lt,at[J]);for(let rt=0;rt<nt.length;rt++){const Dt=nt[rt];F?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,rt+1,0,0,Et,lt,Dt.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,rt+1,zt,Et,lt,Dt.image[J])}}}m(x)&&p(i.TEXTURE_CUBE_MAP),Y.__version=Z.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function mt(R,x,U,q,Z,Y){const bt=r.convert(U.format,U.colorSpace),ht=r.convert(U.type),wt=S(U.internalFormat,bt,ht,U.colorSpace),Ut=n.get(x),tt=n.get(U);if(tt.__renderTarget=x,!Ut.__hasExternalTextures){const at=Math.max(1,x.width>>Y),vt=Math.max(1,x.height>>Y);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,Y,wt,at,vt,x.depth,0,bt,ht,null):e.texImage2D(Z,Y,wt,at,vt,0,bt,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Ce(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,Z,tt.__webglTexture,0,P(x)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,Z,tt.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(R,x,U){if(i.bindRenderbuffer(i.RENDERBUFFER,R),x.depthBuffer){const q=x.depthTexture,Z=q&&q.isDepthTexture?q.type:null,Y=v(x.stencilBuffer,Z),bt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ce(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,P(x),Y,x.width,x.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,P(x),Y,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Y,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,R)}else{const q=x.textures;for(let Z=0;Z<q.length;Z++){const Y=q[Z],bt=r.convert(Y.format,Y.colorSpace),ht=r.convert(Y.type),wt=S(Y.internalFormat,bt,ht,Y.colorSpace);Ce(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,P(x),wt,x.width,x.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,P(x),wt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,wt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function St(R,x,U){const q=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(x.depthTexture);if(Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,x.depthTexture.addEventListener("dispose",E)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),At(i.TEXTURE_CUBE_MAP,x.depthTexture);const Ut=r.convert(x.depthTexture.format),tt=r.convert(x.depthTexture.type);let at;x.depthTexture.format===Mi?at=i.DEPTH_COMPONENT24:x.depthTexture.format===ms&&(at=i.DEPTH24_STENCIL8);for(let vt=0;vt<6;vt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,at,x.width,x.height,0,Ut,tt,null)}}else W(x.depthTexture,0);const Y=Z.__webglTexture,bt=P(x),ht=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+U:i.TEXTURE_2D,wt=x.depthTexture.format===ms?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Mi)Ce(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,wt,ht,Y,0,bt):i.framebufferTexture2D(i.FRAMEBUFFER,wt,ht,Y,0);else if(x.depthTexture.format===ms)Ce(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,wt,ht,Y,0,bt):i.framebufferTexture2D(i.FRAMEBUFFER,wt,ht,Y,0);else throw new Error("Unknown depthTexture format")}function Kt(R){const x=n.get(R),U=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const q=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=q}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(U)for(let q=0;q<6;q++)St(x.__webglFramebuffer[q],R,q);else{const q=R.texture.mipmaps;q&&q.length>0?St(x.__webglFramebuffer[0],R,0):St(x.__webglFramebuffer,R,0)}else if(U){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=i.createRenderbuffer(),Nt(x.__webglDepthbuffer[q],R,!1);else{const Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,Y)}}else{const q=R.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Nt(x.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,Y)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function he(R,x,U){const q=n.get(R);x!==void 0&&mt(q.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Kt(R)}function Bt(R){const x=R.texture,U=n.get(R),q=n.get(x);R.addEventListener("dispose",A);const Z=R.textures,Y=R.isWebGLCubeRenderTarget===!0,bt=Z.length>1;if(bt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=x.version,a.memory.textures++),Y){U.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[ht]=[];for(let wt=0;wt<x.mipmaps.length;wt++)U.__webglFramebuffer[ht][wt]=i.createFramebuffer()}else U.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let ht=0;ht<x.mipmaps.length;ht++)U.__webglFramebuffer[ht]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(bt)for(let ht=0,wt=Z.length;ht<wt;ht++){const Ut=n.get(Z[ht]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Ce(R)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ht=0;ht<Z.length;ht++){const wt=Z[ht];U.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[ht]);const Ut=r.convert(wt.format,wt.colorSpace),tt=r.convert(wt.type),at=S(wt.internalFormat,Ut,tt,wt.colorSpace,R.isXRRenderTarget===!0),vt=P(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,at,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,U.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Nt(U.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),At(i.TEXTURE_CUBE_MAP,x);for(let ht=0;ht<6;ht++)if(x.mipmaps&&x.mipmaps.length>0)for(let wt=0;wt<x.mipmaps.length;wt++)mt(U.__webglFramebuffer[ht][wt],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,wt);else mt(U.__webglFramebuffer[ht],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(x)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ht=0,wt=Z.length;ht<wt;ht++){const Ut=Z[ht],tt=n.get(Ut);let at=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(at=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,tt.__webglTexture),At(at,Ut),mt(U.__webglFramebuffer,R,Ut,i.COLOR_ATTACHMENT0+ht,at,0),m(Ut)&&p(at)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ht=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,q.__webglTexture),At(ht,x),x.mipmaps&&x.mipmaps.length>0)for(let wt=0;wt<x.mipmaps.length;wt++)mt(U.__webglFramebuffer[wt],R,x,i.COLOR_ATTACHMENT0,ht,wt);else mt(U.__webglFramebuffer,R,x,i.COLOR_ATTACHMENT0,ht,0);m(x)&&p(ht),e.unbindTexture()}R.depthBuffer&&Kt(R)}function Gt(R){const x=R.textures;for(let U=0,q=x.length;U<q;U++){const Z=x[U];if(m(Z)){const Y=M(R),bt=n.get(Z).__webglTexture;e.bindTexture(Y,bt),p(Y),e.unbindTexture()}}}const Ht=[],Ot=[];function te(R){if(R.samples>0){if(Ce(R)===!1){const x=R.textures,U=R.width,q=R.height;let Z=i.COLOR_BUFFER_BIT;const Y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(R),ht=x.length>1;if(ht)for(let Ut=0;Ut<x.length;Ut++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);const wt=R.texture.mipmaps;wt&&wt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Ut=0;Ut<x.length;Ut++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[Ut]);const tt=n.get(x[Ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,tt,0)}i.blitFramebuffer(0,0,U,q,0,0,U,q,Z,i.NEAREST),l===!0&&(Ht.length=0,Ot.length=0,Ht.push(i.COLOR_ATTACHMENT0+Ut),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ht.push(Y),Ot.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ot)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ht))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let Ut=0;Ut<x.length;Ut++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,bt.__webglColorRenderbuffer[Ut]);const tt=n.get(x[Ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.TEXTURE_2D,tt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const x=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function P(R){return Math.min(s.maxSamples,R.samples)}function Ce(R){const x=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Zt(R){const x=a.render.frame;h.get(R)!==x&&(h.set(R,x),R.update())}function fe(R,x){const U=R.colorSpace,q=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||U!==tr&&U!==Ni&&(le.getTransfer(U)===xe?(q!==Hn||Z!==An)&&Wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):de("WebGLTextures: Unsupported texture color space:",U)),x}function Mt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=B,this.setTexture2D=W,this.setTexture2DArray=D,this.setTexture3D=L,this.setTextureCube=$,this.rebindTextures=he,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=Ce,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function YE(i,t){function e(n,s=Ni){let r;const a=le.getTransfer(s);if(n===An)return i.UNSIGNED_BYTE;if(n===xh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Kp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zp)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===qp)return i.BYTE;if(n===jp)return i.SHORT;if(n===kr)return i.UNSIGNED_SHORT;if(n===_h)return i.INT;if(n===ei)return i.UNSIGNED_INT;if(n===Kn)return i.FLOAT;if(n===Si)return i.HALF_FLOAT;if(n===Jp)return i.ALPHA;if(n===Qp)return i.RGB;if(n===Hn)return i.RGBA;if(n===Mi)return i.DEPTH_COMPONENT;if(n===ms)return i.DEPTH_STENCIL;if(n===tm)return i.RED;if(n===yh)return i.RED_INTEGER;if(n===Qs)return i.RG;if(n===Sh)return i.RG_INTEGER;if(n===Mh)return i.RGBA_INTEGER;if(n===Ha||n===Va||n===Wa||n===Xa)if(a===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ha)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ha)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xc||n===vc||n===yc||n===Sc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Sc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Mc||n===bc||n===Tc||n===Ec||n===wc||n===Ac||n===Cc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Mc||n===bc)return a===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Tc)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ec)return r.COMPRESSED_R11_EAC;if(n===wc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ac)return r.COMPRESSED_RG11_EAC;if(n===Cc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Rc||n===Pc||n===Ic||n===Dc||n===Lc||n===Uc||n===Fc||n===Nc||n===Oc||n===Bc||n===kc||n===Gc||n===zc||n===Hc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Rc)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pc)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ic)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Dc)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Lc)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uc)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fc)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Nc)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oc)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bc)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===kc)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gc)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zc)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hc)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vc||n===Wc||n===Xc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Vc)return a===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yc||n===$c||n===qc||n===jc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Yc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$c)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const $E=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new dm(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ni({vertexShader:$E,fragmentShader:qE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pn(new jr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class KE extends nr{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new jE,p={},M=e.getContextAttributes();let S=null,v=null;const T=[],E=[],A=new ve;let I=null;const b=new En;b.viewport=new Ne;const y=new En;y.viewport=new Ne;const C=[b,y],B=new aS;let N=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let et=T[j];return et===void 0&&(et=new vl,T[j]=et),et.getTargetRaySpace()},this.getControllerGrip=function(j){let et=T[j];return et===void 0&&(et=new vl,T[j]=et),et.getGripSpace()},this.getHand=function(j){let et=T[j];return et===void 0&&(et=new vl,T[j]=et),et.getHandSpace()};function W(j){const et=E.indexOf(j.inputSource);if(et===-1)return;const mt=T[et];mt!==void 0&&(mt.update(j.inputSource,j.frame,c||a),mt.dispatchEvent({type:j.type,data:j.inputSource}))}function D(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",L);for(let j=0;j<T.length;j++){const et=E[j];et!==null&&(E[j]=null,T[j].disconnect(et))}N=null,G=null,m.reset();for(const j in p)delete p[j];t.setRenderTarget(S),d=null,f=null,u=null,s=null,v=null,ae.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",D),s.addEventListener("inputsourceschange",L),M.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,Nt=null,St=null;M.depth&&(St=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=M.stencil?ms:Mi,Nt=M.stencil?Gr:ei);const Kt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Kt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Qn(f.textureWidth,f.textureHeight,{format:Hn,type:An,depthTexture:new Hr(f.textureWidth,f.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const mt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,mt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Qn(d.framebufferWidth,d.framebufferHeight,{format:Hn,type:An,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ae.setContext(s),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function L(j){for(let et=0;et<j.removed.length;et++){const mt=j.removed[et],Nt=E.indexOf(mt);Nt>=0&&(E[Nt]=null,T[Nt].disconnect(mt))}for(let et=0;et<j.added.length;et++){const mt=j.added[et];let Nt=E.indexOf(mt);if(Nt===-1){for(let Kt=0;Kt<T.length;Kt++)if(Kt>=E.length){E.push(mt),Nt=Kt;break}else if(E[Kt]===null){E[Kt]=mt,Nt=Kt;break}if(Nt===-1)break}const St=T[Nt];St&&St.connect(mt)}}const $=new V,X=new V;function Q(j,et,mt){$.setFromMatrixPosition(et.matrixWorld),X.setFromMatrixPosition(mt.matrixWorld);const Nt=$.distanceTo(X),St=et.projectionMatrix.elements,Kt=mt.projectionMatrix.elements,he=St[14]/(St[10]-1),Bt=St[14]/(St[10]+1),Gt=(St[9]+1)/St[5],Ht=(St[9]-1)/St[5],Ot=(St[8]-1)/St[0],te=(Kt[8]+1)/Kt[0],P=he*Ot,Ce=he*te,Zt=Nt/(-Ot+te),fe=Zt*-Ot;if(et.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(fe),j.translateZ(Zt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),St[10]===-1)j.projectionMatrix.copy(et.projectionMatrix),j.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const Mt=he+Zt,R=Bt+Zt,x=P-fe,U=Ce+(Nt-fe),q=Gt*Bt/R*Mt,Z=Ht*Bt/R*Mt;j.projectionMatrix.makePerspective(x,U,q,Z,Mt,R),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function it(j,et){et===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(et.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let et=j.near,mt=j.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(mt=m.depthFar)),B.near=y.near=b.near=et,B.far=y.far=b.far=mt,(N!==B.near||G!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),N=B.near,G=B.far),B.layers.mask=j.layers.mask|6,b.layers.mask=B.layers.mask&3,y.layers.mask=B.layers.mask&5;const Nt=j.parent,St=B.cameras;it(B,Nt);for(let Kt=0;Kt<St.length;Kt++)it(St[Kt],Nt);St.length===2?Q(B,b,y):B.projectionMatrix.copy(b.projectionMatrix),At(j,B,Nt)};function At(j,et,mt){mt===null?j.matrix.copy(et.matrixWorld):(j.matrix.copy(mt.matrixWorld),j.matrix.invert(),j.matrix.multiply(et.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(et.projectionMatrix),j.projectionMatrixInverse.copy(et.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Kc*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(j){return p[j]};let Ct=null;function Qt(j,et){if(h=et.getViewerPose(c||a),g=et,h!==null){const mt=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let Nt=!1;mt.length!==B.cameras.length&&(B.cameras.length=0,Nt=!0);for(let Bt=0;Bt<mt.length;Bt++){const Gt=mt[Bt];let Ht=null;if(d!==null)Ht=d.getViewport(Gt);else{const te=u.getViewSubImage(f,Gt);Ht=te.viewport,Bt===0&&(t.setRenderTargetTextures(v,te.colorTexture,te.depthStencilTexture),t.setRenderTarget(v))}let Ot=C[Bt];Ot===void 0&&(Ot=new En,Ot.layers.enable(Bt),Ot.viewport=new Ne,C[Bt]=Ot),Ot.matrix.fromArray(Gt.transform.matrix),Ot.matrix.decompose(Ot.position,Ot.quaternion,Ot.scale),Ot.projectionMatrix.fromArray(Gt.projectionMatrix),Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(),Ot.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),Bt===0&&(B.matrix.copy(Ot.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Nt===!0&&B.cameras.push(Ot)}const St=s.enabledFeatures;if(St&&St.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const Bt=u.getDepthInformation(mt[0]);Bt&&Bt.isValid&&Bt.texture&&m.init(Bt,s.renderState)}if(St&&St.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let Bt=0;Bt<mt.length;Bt++){const Gt=mt[Bt].camera;if(Gt){let Ht=p[Gt];Ht||(Ht=new dm,p[Gt]=Ht);const Ot=u.getCameraImage(Gt);Ht.sourceTexture=Ot}}}}for(let mt=0;mt<T.length;mt++){const Nt=E[mt],St=T[mt];Nt!==null&&St!==void 0&&St.update(Nt,et,c||a)}Ct&&Ct(j,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const ae=new pm;ae.setAnimationLoop(Qt),this.setAnimationLoop=function(j){Ct=j},this.dispose=function(){}}}const is=new bi,ZE=new Ge;function JE(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,om(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,S,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===fn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===fn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),S=M.envMap,v=M.envMapRotation;S&&(m.envMap.value=S,is.copy(v),is.x*=-1,is.y*=-1,is.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),m.envMapRotation.value.setFromMatrix4(ZE.makeRotationFromEuler(is)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===fn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function QE(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){const v=S.program;n.uniformBlockBinding(M,v)}function c(M,S){let v=s[M.id];v===void 0&&(g(M),v=h(M),s[M.id]=v,M.addEventListener("dispose",m));const T=S.program;n.updateUBOMapping(M,T);const E=t.render.frame;r[M.id]!==E&&(f(M),r[M.id]=E)}function h(M){const S=u();M.__bindingPointIndex=S;const v=i.createBuffer(),T=M.__size,E=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,T,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,v),v}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return de("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const S=s[M.id],v=M.uniforms,T=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let E=0,A=v.length;E<A;E++){const I=Array.isArray(v[E])?v[E]:[v[E]];for(let b=0,y=I.length;b<y;b++){const C=I[b];if(d(C,E,b,T)===!0){const B=C.__offset,N=Array.isArray(C.value)?C.value:[C.value];let G=0;for(let W=0;W<N.length;W++){const D=N[W],L=_(D);typeof D=="number"||typeof D=="boolean"?(C.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,B+G,C.__data)):D.isMatrix3?(C.__data[0]=D.elements[0],C.__data[1]=D.elements[1],C.__data[2]=D.elements[2],C.__data[3]=0,C.__data[4]=D.elements[3],C.__data[5]=D.elements[4],C.__data[6]=D.elements[5],C.__data[7]=0,C.__data[8]=D.elements[6],C.__data[9]=D.elements[7],C.__data[10]=D.elements[8],C.__data[11]=0):(D.toArray(C.__data,G),G+=L.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,S,v,T){const E=M.value,A=S+"_"+v;if(T[A]===void 0)return typeof E=="number"||typeof E=="boolean"?T[A]=E:T[A]=E.clone(),!0;{const I=T[A];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return T[A]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function g(M){const S=M.uniforms;let v=0;const T=16;for(let A=0,I=S.length;A<I;A++){const b=Array.isArray(S[A])?S[A]:[S[A]];for(let y=0,C=b.length;y<C;y++){const B=b[y],N=Array.isArray(B.value)?B.value:[B.value];for(let G=0,W=N.length;G<W;G++){const D=N[G],L=_(D),$=v%T,X=$%L.boundary,Q=$+X;v+=X,Q!==0&&T-Q<L.storage&&(v+=T-Q),B.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=L.storage}}}const E=v%T;return E>0&&(v+=T-E),M.__size=v,M.__cache={},this}function _(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?Wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Wt("WebGLRenderer: Unsupported uniform value type.",M),S}function m(M){const S=M.target;S.removeEventListener("dispose",m);const v=a.indexOf(S.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}const t1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Yn=null;function e1(){return Yn===null&&(Yn=new Jy(t1,16,16,Qs,Si),Yn.name="DFG_LUT",Yn.minFilter=en,Yn.magFilter=en,Yn.wrapS=mi,Yn.wrapT=mi,Yn.generateMipmaps=!1,Yn.needsUpdate=!0),Yn}class n1{constructor(t={}){const{canvas:e=Ty(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=An}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=d,m=new Set([Mh,Sh,yh]),p=new Set([An,ei,kr,Gr,xh,vh]),M=new Uint32Array(4),S=new Int32Array(4);let v=null,T=null;const E=[],A=[];let I=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let y=!1;this._outputColorSpace=Tn;let C=0,B=0,N=null,G=-1,W=null;const D=new Ne,L=new Ne;let $=null;const X=new Se(0);let Q=0,it=e.width,At=e.height,Ct=1,Qt=null,ae=null;const j=new Ne(0,0,it,At),et=new Ne(0,0,it,At);let mt=!1;const Nt=new um;let St=!1,Kt=!1;const he=new Ge,Bt=new V,Gt=new Ne,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ot=!1;function te(){return N===null?Ct:1}let P=n;function Ce(w,O){return e.getContext(w,O)}try{const w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${gh}`),e.addEventListener("webglcontextlost",Dt,!1),e.addEventListener("webglcontextrestored",me,!1),e.addEventListener("webglcontextcreationerror",ie,!1),P===null){const O="webgl2";if(P=Ce(O,w),P===null)throw Ce(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw de("WebGLRenderer: "+w.message),w}let Zt,fe,Mt,R,x,U,q,Z,Y,bt,ht,wt,Ut,tt,at,vt,Et,lt,zt,F,ft,st,gt,nt;function J(){Zt=new eT(P),Zt.init(),st=new YE(P,Zt),fe=new Yb(P,Zt,t,st),Mt=new WE(P,Zt),fe.reversedDepthBuffer&&f&&Mt.buffers.depth.setReversed(!0),R=new sT(P),x=new RE,U=new XE(P,Zt,Mt,x,fe,st,R),q=new qb(b),Z=new tT(b),Y=new lS(P),gt=new Wb(P,Y),bt=new nT(P,Y,R,gt),ht=new aT(P,bt,Y,R),zt=new rT(P,fe,U),vt=new $b(x),wt=new CE(b,q,Z,Zt,fe,gt,vt),Ut=new JE(b,x),tt=new IE,at=new OE(Zt),lt=new Vb(b,q,Z,Mt,ht,g,l),Et=new HE(b,ht,fe),nt=new QE(P,R,fe,Mt),F=new Xb(P,Zt,R),ft=new iT(P,Zt,R),R.programs=wt.programs,b.capabilities=fe,b.extensions=Zt,b.properties=x,b.renderLists=tt,b.shadowMap=Et,b.state=Mt,b.info=R}J(),_!==An&&(I=new lT(_,e.width,e.height,s,r));const rt=new KE(b,P);this.xr=rt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const w=Zt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Zt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Ct},this.setPixelRatio=function(w){w!==void 0&&(Ct=w,this.setSize(it,At,!1))},this.getSize=function(w){return w.set(it,At)},this.setSize=function(w,O,z=!0){if(rt.isPresenting){Wt("WebGLRenderer: Can't change size while VR device is presenting.");return}it=w,At=O,e.width=Math.floor(w*Ct),e.height=Math.floor(O*Ct),z===!0&&(e.style.width=w+"px",e.style.height=O+"px"),I!==null&&I.setSize(e.width,e.height),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(it*Ct,At*Ct).floor()},this.setDrawingBufferSize=function(w,O,z){it=w,At=O,Ct=z,e.width=Math.floor(w*z),e.height=Math.floor(O*z),this.setViewport(0,0,w,O)},this.setEffects=function(w){if(_===An){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let O=0;O<w.length;O++)if(w[O].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(j)},this.setViewport=function(w,O,z,H){w.isVector4?j.set(w.x,w.y,w.z,w.w):j.set(w,O,z,H),Mt.viewport(D.copy(j).multiplyScalar(Ct).round())},this.getScissor=function(w){return w.copy(et)},this.setScissor=function(w,O,z,H){w.isVector4?et.set(w.x,w.y,w.z,w.w):et.set(w,O,z,H),Mt.scissor(L.copy(et).multiplyScalar(Ct).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(w){Mt.setScissorTest(mt=w)},this.setOpaqueSort=function(w){Qt=w},this.setTransparentSort=function(w){ae=w},this.getClearColor=function(w){return w.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor(...arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha(...arguments)},this.clear=function(w=!0,O=!0,z=!0){let H=0;if(w){let k=!1;if(N!==null){const ct=N.texture.format;k=m.has(ct)}if(k){const ct=N.texture.type,_t=p.has(ct),dt=lt.getClearColor(),xt=lt.getClearAlpha(),Tt=dt.r,Lt=dt.g,It=dt.b;_t?(M[0]=Tt,M[1]=Lt,M[2]=It,M[3]=xt,P.clearBufferuiv(P.COLOR,0,M)):(S[0]=Tt,S[1]=Lt,S[2]=It,S[3]=xt,P.clearBufferiv(P.COLOR,0,S))}else H|=P.COLOR_BUFFER_BIT}O&&(H|=P.DEPTH_BUFFER_BIT),z&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",ie,!1),lt.dispose(),tt.dispose(),at.dispose(),x.dispose(),q.dispose(),Z.dispose(),ht.dispose(),gt.dispose(),nt.dispose(),wt.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",zi),rt.removeEventListener("sessionend",Hi),yn.stop()};function Dt(w){w.preventDefault(),od("WebGLRenderer: Context Lost."),y=!0}function me(){od("WebGLRenderer: Context Restored."),y=!1;const w=R.autoReset,O=Et.enabled,z=Et.autoUpdate,H=Et.needsUpdate,k=Et.type;J(),R.autoReset=w,Et.enabled=O,Et.autoUpdate=z,Et.needsUpdate=H,Et.type=k}function ie(w){de("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ze(w){const O=w.target;O.removeEventListener("dispose",ze),Ee(O)}function Ee(w){Ei(w),x.remove(w)}function Ei(w){const O=x.get(w).programs;O!==void 0&&(O.forEach(function(z){wt.releaseProgram(z)}),w.isShaderMaterial&&wt.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,z,H,k,ct){O===null&&(O=Ht);const _t=k.isMesh&&k.matrixWorld.determinant()<0,dt=Yi(w,O,z,H,k);Mt.setMaterial(H,_t);let xt=z.index,Tt=1;if(H.wireframe===!0){if(xt=bt.getWireframeAttribute(z),xt===void 0)return;Tt=2}const Lt=z.drawRange,It=z.attributes.position;let Ft=Lt.start*Tt,ge=(Lt.start+Lt.count)*Tt;ct!==null&&(Ft=Math.max(Ft,ct.start*Tt),ge=Math.min(ge,(ct.start+ct.count)*Tt)),xt!==null?(Ft=Math.max(Ft,0),ge=Math.min(ge,xt.count)):It!=null&&(Ft=Math.max(Ft,0),ge=Math.min(ge,It.count));const Me=ge-Ft;if(Me<0||Me===1/0)return;gt.setup(k,H,dt,z,xt);let we,pe=F;if(xt!==null&&(we=Y.get(xt),pe=ft,pe.setIndex(we)),k.isMesh)H.wireframe===!0?(Mt.setLineWidth(H.wireframeLinewidth*te()),pe.setMode(P.LINES)):pe.setMode(P.TRIANGLES);else if(k.isLine){let Rt=H.linewidth;Rt===void 0&&(Rt=1),Mt.setLineWidth(Rt*te()),k.isLineSegments?pe.setMode(P.LINES):k.isLineLoop?pe.setMode(P.LINE_LOOP):pe.setMode(P.LINE_STRIP)}else k.isPoints?pe.setMode(P.POINTS):k.isSprite&&pe.setMode(P.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)zr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pe.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Zt.get("WEBGL_multi_draw"))pe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Rt=k._multiDrawStarts,oe=k._multiDrawCounts,se=k._multiDrawCount,je=xt?Y.get(xt).bytesPerElement:1,ut=x.get(H).currentProgram.getUniforms();for(let K=0;K<se;K++)ut.setValue(P,"_gl_DrawID",K),pe.render(Rt[K]/je,oe[K])}else if(k.isInstancedMesh)pe.renderInstances(Ft,Me,k.count);else if(z.isInstancedBufferGeometry){const Rt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,oe=Math.min(z.instanceCount,Rt);pe.renderInstances(Ft,Me,oe)}else pe.render(Ft,Me)};function Gi(w,O,z){w.transparent===!0&&w.side===wn&&w.forceSinglePass===!1?(w.side=fn,w.needsUpdate=!0,Wi(w,O,z),w.side=ki,w.needsUpdate=!0,Wi(w,O,z),w.side=wn):Wi(w,O,z)}this.compile=function(w,O,z=null){z===null&&(z=w),T=at.get(z),T.init(O),A.push(T),z.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),w!==z&&w.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),T.setupLights();const H=new Set;return w.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ct=k.material;if(ct)if(Array.isArray(ct))for(let _t=0;_t<ct.length;_t++){const dt=ct[_t];Gi(dt,z,k),H.add(dt)}else Gi(ct,z,k),H.add(ct)}),T=A.pop(),H},this.compileAsync=function(w,O,z=null){const H=this.compile(w,O,z);return new Promise(k=>{function ct(){if(H.forEach(function(_t){x.get(_t).currentProgram.isReady()&&H.delete(_t)}),H.size===0){k(w);return}setTimeout(ct,10)}Zt.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let Dn=null;function ri(w){Dn&&Dn(w)}function zi(){yn.stop()}function Hi(){yn.start()}const yn=new pm;yn.setAnimationLoop(ri),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(w){Dn=w,rt.setAnimationLoop(w),w===null?yn.stop():yn.start()},rt.addEventListener("sessionstart",zi),rt.addEventListener("sessionend",Hi),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){de("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;const z=rt.enabled===!0&&rt.isPresenting===!0,H=I!==null&&(N===null||z)&&I.begin(b,N);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(O),O=rt.getCamera()),w.isScene===!0&&w.onBeforeRender(b,w,O,N),T=at.get(w,A.length),T.init(O),A.push(T),he.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Nt.setFromProjectionMatrix(he,Zn,O.reversedDepth),Kt=this.localClippingEnabled,St=vt.init(this.clippingPlanes,Kt),v=tt.get(w,E.length),v.init(),E.push(v),rt.enabled===!0&&rt.isPresenting===!0){const _t=b.xr.getDepthSensingMesh();_t!==null&&Ln(_t,O,-1/0,b.sortObjects)}Ln(w,O,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(Qt,ae),Ot=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Ot&&lt.addToRenderList(v,w),this.info.render.frame++,St===!0&&vt.beginShadows();const k=T.state.shadowsArray;if(Et.render(k,w,O),St===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&I.hasRenderPass())===!1){const _t=v.opaque,dt=v.transmissive;if(T.setupLights(),O.isArrayCamera){const xt=O.cameras;if(dt.length>0)for(let Tt=0,Lt=xt.length;Tt<Lt;Tt++){const It=xt[Tt];xs(_t,dt,w,It)}Ot&&lt.render(w);for(let Tt=0,Lt=xt.length;Tt<Lt;Tt++){const It=xt[Tt];Wn(v,w,It,It.viewport)}}else dt.length>0&&xs(_t,dt,w,O),Ot&&lt.render(w),Wn(v,w,O)}N!==null&&B===0&&(U.updateMultisampleRenderTarget(N),U.updateRenderTargetMipmap(N)),H&&I.end(b),w.isScene===!0&&w.onAfterRender(b,w,O),gt.resetDefaultState(),G=-1,W=null,A.pop(),A.length>0?(T=A[A.length-1],St===!0&&vt.setGlobalState(b.clippingPlanes,T.state.camera)):T=null,E.pop(),E.length>0?v=E[E.length-1]:v=null};function Ln(w,O,z,H){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Nt.intersectsSprite(w)){H&&Gt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(he);const _t=ht.update(w),dt=w.material;dt.visible&&v.push(w,_t,dt,z,Gt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Nt.intersectsObject(w))){const _t=ht.update(w),dt=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Gt.copy(w.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Gt.copy(_t.boundingSphere.center)),Gt.applyMatrix4(w.matrixWorld).applyMatrix4(he)),Array.isArray(dt)){const xt=_t.groups;for(let Tt=0,Lt=xt.length;Tt<Lt;Tt++){const It=xt[Tt],Ft=dt[It.materialIndex];Ft&&Ft.visible&&v.push(w,_t,Ft,z,Gt.z,It)}}else dt.visible&&v.push(w,_t,dt,z,Gt.z,null)}}const ct=w.children;for(let _t=0,dt=ct.length;_t<dt;_t++)Ln(ct[_t],O,z,H)}function Wn(w,O,z,H){const{opaque:k,transmissive:ct,transparent:_t}=w;T.setupLightsView(z),St===!0&&vt.setGlobalState(b.clippingPlanes,z),H&&Mt.viewport(D.copy(H)),k.length>0&&wi(k,O,z),ct.length>0&&wi(ct,O,z),_t.length>0&&wi(_t,O,z),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function xs(w,O,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[H.id]===void 0){const Ft=Zt.has("EXT_color_buffer_half_float")||Zt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[H.id]=new Qn(1,1,{generateMipmaps:!0,type:Ft?Si:An,minFilter:ps,samples:fe.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace})}const ct=T.state.transmissionRenderTarget[H.id],_t=H.viewport||D;ct.setSize(_t.z*b.transmissionResolutionScale,_t.w*b.transmissionResolutionScale);const dt=b.getRenderTarget(),xt=b.getActiveCubeFace(),Tt=b.getActiveMipmapLevel();b.setRenderTarget(ct),b.getClearColor(X),Q=b.getClearAlpha(),Q<1&&b.setClearColor(16777215,.5),b.clear(),Ot&&lt.render(z);const Lt=b.toneMapping;b.toneMapping=Jn;const It=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),T.setupLightsView(H),St===!0&&vt.setGlobalState(b.clippingPlanes,H),wi(w,z,H),U.updateMultisampleRenderTarget(ct),U.updateRenderTargetMipmap(ct),Zt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let ge=0,Me=O.length;ge<Me;ge++){const we=O[ge],{object:pe,geometry:Rt,material:oe,group:se}=we;if(oe.side===wn&&pe.layers.test(H.layers)){const je=oe.side;oe.side=fn,oe.needsUpdate=!0,Vi(pe,z,H,Rt,oe,se),oe.side=je,oe.needsUpdate=!0,Ft=!0}}Ft===!0&&(U.updateMultisampleRenderTarget(ct),U.updateRenderTargetMipmap(ct))}b.setRenderTarget(dt,xt,Tt),b.setClearColor(X,Q),It!==void 0&&(H.viewport=It),b.toneMapping=Lt}function wi(w,O,z){const H=O.isScene===!0?O.overrideMaterial:null;for(let k=0,ct=w.length;k<ct;k++){const _t=w[k],{object:dt,geometry:xt,group:Tt}=_t;let Lt=_t.material;Lt.allowOverride===!0&&H!==null&&(Lt=H),dt.layers.test(z.layers)&&Vi(dt,O,z,xt,Lt,Tt)}}function Vi(w,O,z,H,k,ct){w.onBeforeRender(b,O,z,H,k,ct),w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(b,O,z,H,w,ct),k.transparent===!0&&k.side===wn&&k.forceSinglePass===!1?(k.side=fn,k.needsUpdate=!0,b.renderBufferDirect(z,O,H,k,w,ct),k.side=ki,k.needsUpdate=!0,b.renderBufferDirect(z,O,H,k,w,ct),k.side=wn):b.renderBufferDirect(z,O,H,k,w,ct),w.onAfterRender(b,O,z,H,k,ct)}function Wi(w,O,z){O.isScene!==!0&&(O=Ht);const H=x.get(w),k=T.state.lights,ct=T.state.shadowsArray,_t=k.state.version,dt=wt.getParameters(w,k.state,ct,O,z),xt=wt.getProgramCacheKey(dt);let Tt=H.programs;H.environment=w.isMeshStandardMaterial?O.environment:null,H.fog=O.fog,H.envMap=(w.isMeshStandardMaterial?Z:q).get(w.envMap||H.environment),H.envMapRotation=H.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Tt===void 0&&(w.addEventListener("dispose",ze),Tt=new Map,H.programs=Tt);let Lt=Tt.get(xt);if(Lt!==void 0){if(H.currentProgram===Lt&&H.lightsStateVersion===_t)return Un(w,dt),Lt}else dt.uniforms=wt.getUniforms(w),w.onBeforeCompile(dt,b),Lt=wt.acquireProgram(dt,xt),Tt.set(xt,Lt),H.uniforms=dt.uniforms;const It=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(It.clippingPlanes=vt.uniform),Un(w,dt),H.needsLights=Fe(w),H.lightsStateVersion=_t,H.needsLights&&(It.ambientLightColor.value=k.state.ambient,It.lightProbe.value=k.state.probe,It.directionalLights.value=k.state.directional,It.directionalLightShadows.value=k.state.directionalShadow,It.spotLights.value=k.state.spot,It.spotLightShadows.value=k.state.spotShadow,It.rectAreaLights.value=k.state.rectArea,It.ltc_1.value=k.state.rectAreaLTC1,It.ltc_2.value=k.state.rectAreaLTC2,It.pointLights.value=k.state.point,It.pointLightShadows.value=k.state.pointShadow,It.hemisphereLights.value=k.state.hemi,It.directionalShadowMap.value=k.state.directionalShadowMap,It.directionalShadowMatrix.value=k.state.directionalShadowMatrix,It.spotShadowMap.value=k.state.spotShadowMap,It.spotLightMatrix.value=k.state.spotLightMatrix,It.spotLightMap.value=k.state.spotLightMap,It.pointShadowMap.value=k.state.pointShadowMap,It.pointShadowMatrix.value=k.state.pointShadowMatrix),H.currentProgram=Lt,H.uniformsList=null,Lt}function Xi(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=Ya.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Un(w,O){const z=x.get(w);z.outputColorSpace=O.outputColorSpace,z.batching=O.batching,z.batchingColor=O.batchingColor,z.instancing=O.instancing,z.instancingColor=O.instancingColor,z.instancingMorph=O.instancingMorph,z.skinning=O.skinning,z.morphTargets=O.morphTargets,z.morphNormals=O.morphNormals,z.morphColors=O.morphColors,z.morphTargetsCount=O.morphTargetsCount,z.numClippingPlanes=O.numClippingPlanes,z.numIntersection=O.numClipIntersection,z.vertexAlphas=O.vertexAlphas,z.vertexTangents=O.vertexTangents,z.toneMapping=O.toneMapping}function Yi(w,O,z,H,k){O.isScene!==!0&&(O=Ht),U.resetTextureUnits();const ct=O.fog,_t=H.isMeshStandardMaterial?O.environment:null,dt=N===null?b.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:tr,xt=(H.isMeshStandardMaterial?Z:q).get(H.envMap||_t),Tt=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Lt=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),It=!!z.morphAttributes.position,Ft=!!z.morphAttributes.normal,ge=!!z.morphAttributes.color;let Me=Jn;H.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Me=b.toneMapping);const we=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,pe=we!==void 0?we.length:0,Rt=x.get(H),oe=T.state.lights;if(St===!0&&(Kt===!0||w!==W)){const Jt=w===W&&H.id===G;vt.setState(H,w,Jt)}let se=!1;H.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==oe.state.version||Rt.outputColorSpace!==dt||k.isBatchedMesh&&Rt.batching===!1||!k.isBatchedMesh&&Rt.batching===!0||k.isBatchedMesh&&Rt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Rt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Rt.instancing===!1||!k.isInstancedMesh&&Rt.instancing===!0||k.isSkinnedMesh&&Rt.skinning===!1||!k.isSkinnedMesh&&Rt.skinning===!0||k.isInstancedMesh&&Rt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Rt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Rt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Rt.instancingMorph===!1&&k.morphTexture!==null||Rt.envMap!==xt||H.fog===!0&&Rt.fog!==ct||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==vt.numPlanes||Rt.numIntersection!==vt.numIntersection)||Rt.vertexAlphas!==Tt||Rt.vertexTangents!==Lt||Rt.morphTargets!==It||Rt.morphNormals!==Ft||Rt.morphColors!==ge||Rt.toneMapping!==Me||Rt.morphTargetsCount!==pe)&&(se=!0):(se=!0,Rt.__version=H.version);let je=Rt.currentProgram;se===!0&&(je=Wi(H,O,k));let ut=!1,K=!1,yt=!1;const ot=je.getUniforms(),Pt=Rt.uniforms;if(Mt.useProgram(je.program)&&(ut=!0,K=!0,yt=!0),H.id!==G&&(G=H.id,K=!0),ut||W!==w){Mt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ot.setValue(P,"projectionMatrix",w.projectionMatrix),ot.setValue(P,"viewMatrix",w.matrixWorldInverse);const be=ot.map.cameraPosition;be!==void 0&&be.setValue(P,Bt.setFromMatrixPosition(w.matrixWorld)),fe.logarithmicDepthBuffer&&ot.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ot.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),W!==w&&(W=w,K=!0,yt=!0)}if(Rt.needsLights&&(oe.state.directionalShadowMap.length>0&&ot.setValue(P,"directionalShadowMap",oe.state.directionalShadowMap,U),oe.state.spotShadowMap.length>0&&ot.setValue(P,"spotShadowMap",oe.state.spotShadowMap,U),oe.state.pointShadowMap.length>0&&ot.setValue(P,"pointShadowMap",oe.state.pointShadowMap,U)),k.isSkinnedMesh){ot.setOptional(P,k,"bindMatrix"),ot.setOptional(P,k,"bindMatrixInverse");const Jt=k.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),ot.setValue(P,"boneTexture",Jt.boneTexture,U))}k.isBatchedMesh&&(ot.setOptional(P,k,"batchingTexture"),ot.setValue(P,"batchingTexture",k._matricesTexture,U),ot.setOptional(P,k,"batchingIdTexture"),ot.setValue(P,"batchingIdTexture",k._indirectTexture,U),ot.setOptional(P,k,"batchingColorTexture"),k._colorsTexture!==null&&ot.setValue(P,"batchingColorTexture",k._colorsTexture,U));const ue=z.morphAttributes;if((ue.position!==void 0||ue.normal!==void 0||ue.color!==void 0)&&zt.update(k,z,je),(K||Rt.receiveShadow!==k.receiveShadow)&&(Rt.receiveShadow=k.receiveShadow,ot.setValue(P,"receiveShadow",k.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Pt.envMap.value=xt,Pt.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&O.environment!==null&&(Pt.envMapIntensity.value=O.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=e1()),K&&(ot.setValue(P,"toneMappingExposure",b.toneMappingExposure),Rt.needsLights&&$i(Pt,yt),ct&&H.fog===!0&&Ut.refreshFogUniforms(Pt,ct),Ut.refreshMaterialUniforms(Pt,H,Ct,At,T.state.transmissionRenderTarget[w.id]),Ya.upload(P,Xi(Rt),Pt,U)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ya.upload(P,Xi(Rt),Pt,U),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ot.setValue(P,"center",k.center),ot.setValue(P,"modelViewMatrix",k.modelViewMatrix),ot.setValue(P,"normalMatrix",k.normalMatrix),ot.setValue(P,"modelMatrix",k.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Jt=H.uniformsGroups;for(let be=0,Ai=Jt.length;be<Ai;be++){const Sn=Jt[be];nt.update(Sn,je),nt.bind(Sn,je)}}return je}function $i(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Fe(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(w,O,z){const H=x.get(w);H.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),x.get(w.texture).__webglTexture=O,x.get(w.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:z,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,O){const z=x.get(w);z.__webglFramebuffer=O,z.__useDefaultFramebuffer=O===void 0};const qe=P.createFramebuffer();this.setRenderTarget=function(w,O=0,z=0){N=w,C=O,B=z;let H=null,k=!1,ct=!1;if(w){const dt=x.get(w);if(dt.__useDefaultFramebuffer!==void 0){Mt.bindFramebuffer(P.FRAMEBUFFER,dt.__webglFramebuffer),D.copy(w.viewport),L.copy(w.scissor),$=w.scissorTest,Mt.viewport(D),Mt.scissor(L),Mt.setScissorTest($),G=-1;return}else if(dt.__webglFramebuffer===void 0)U.setupRenderTarget(w);else if(dt.__hasExternalTextures)U.rebindTextures(w,x.get(w.texture).__webglTexture,x.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Lt=w.depthTexture;if(dt.__boundDepthTexture!==Lt){if(Lt!==null&&x.has(Lt)&&(w.width!==Lt.image.width||w.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(w)}}const xt=w.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(ct=!0);const Tt=x.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Tt[O])?H=Tt[O][z]:H=Tt[O],k=!0):w.samples>0&&U.useMultisampledRTT(w)===!1?H=x.get(w).__webglMultisampledFramebuffer:Array.isArray(Tt)?H=Tt[z]:H=Tt,D.copy(w.viewport),L.copy(w.scissor),$=w.scissorTest}else D.copy(j).multiplyScalar(Ct).floor(),L.copy(et).multiplyScalar(Ct).floor(),$=mt;if(z!==0&&(H=qe),Mt.bindFramebuffer(P.FRAMEBUFFER,H)&&Mt.drawBuffers(w,H),Mt.viewport(D),Mt.scissor(L),Mt.setScissorTest($),k){const dt=x.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,dt.__webglTexture,z)}else if(ct){const dt=O;for(let xt=0;xt<w.textures.length;xt++){const Tt=x.get(w.textures[xt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+xt,Tt.__webglTexture,z,dt)}}else if(w!==null&&z!==0){const dt=x.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,dt.__webglTexture,z)}G=-1},this.readRenderTargetPixels=function(w,O,z,H,k,ct,_t,dt=0){if(!(w&&w.isWebGLRenderTarget)){de("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=x.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_t!==void 0&&(xt=xt[_t]),xt){Mt.bindFramebuffer(P.FRAMEBUFFER,xt);try{const Tt=w.textures[dt],Lt=Tt.format,It=Tt.type;if(!fe.textureFormatReadable(Lt)){de("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!fe.textureTypeReadable(It)){de("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-H&&z>=0&&z<=w.height-k&&(w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+dt),P.readPixels(O,z,H,k,st.convert(Lt),st.convert(It),ct))}finally{const Tt=N!==null?x.get(N).__webglFramebuffer:null;Mt.bindFramebuffer(P.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(w,O,z,H,k,ct,_t,dt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=x.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_t!==void 0&&(xt=xt[_t]),xt)if(O>=0&&O<=w.width-H&&z>=0&&z<=w.height-k){Mt.bindFramebuffer(P.FRAMEBUFFER,xt);const Tt=w.textures[dt],Lt=Tt.format,It=Tt.type;if(!fe.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!fe.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ft=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ft),P.bufferData(P.PIXEL_PACK_BUFFER,ct.byteLength,P.STREAM_READ),w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+dt),P.readPixels(O,z,H,k,st.convert(Lt),st.convert(It),0);const ge=N!==null?x.get(N).__webglFramebuffer:null;Mt.bindFramebuffer(P.FRAMEBUFFER,ge);const Me=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Ey(P,Me,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ft),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ct),P.deleteBuffer(Ft),P.deleteSync(Me),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,O=null,z=0){const H=Math.pow(2,-z),k=Math.floor(w.image.width*H),ct=Math.floor(w.image.height*H),_t=O!==null?O.x:0,dt=O!==null?O.y:0;U.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,z,0,0,_t,dt,k,ct),Mt.unbindTexture()};const sr=P.createFramebuffer(),qi=P.createFramebuffer();this.copyTextureToTexture=function(w,O,z=null,H=null,k=0,ct=null){ct===null&&(k!==0?(zr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ct=k,k=0):ct=0);let _t,dt,xt,Tt,Lt,It,Ft,ge,Me;const we=w.isCompressedTexture?w.mipmaps[ct]:w.image;if(z!==null)_t=z.max.x-z.min.x,dt=z.max.y-z.min.y,xt=z.isBox3?z.max.z-z.min.z:1,Tt=z.min.x,Lt=z.min.y,It=z.isBox3?z.min.z:0;else{const ue=Math.pow(2,-k);_t=Math.floor(we.width*ue),dt=Math.floor(we.height*ue),w.isDataArrayTexture?xt=we.depth:w.isData3DTexture?xt=Math.floor(we.depth*ue):xt=1,Tt=0,Lt=0,It=0}H!==null?(Ft=H.x,ge=H.y,Me=H.z):(Ft=0,ge=0,Me=0);const pe=st.convert(O.format),Rt=st.convert(O.type);let oe;O.isData3DTexture?(U.setTexture3D(O,0),oe=P.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(U.setTexture2DArray(O,0),oe=P.TEXTURE_2D_ARRAY):(U.setTexture2D(O,0),oe=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment);const se=P.getParameter(P.UNPACK_ROW_LENGTH),je=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ut=P.getParameter(P.UNPACK_SKIP_PIXELS),K=P.getParameter(P.UNPACK_SKIP_ROWS),yt=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,we.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,we.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Tt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Lt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,It);const ot=w.isDataArrayTexture||w.isData3DTexture,Pt=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){const ue=x.get(w),Jt=x.get(O),be=x.get(ue.__renderTarget),Ai=x.get(Jt.__renderTarget);Mt.bindFramebuffer(P.READ_FRAMEBUFFER,be.__webglFramebuffer),Mt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let Sn=0;Sn<xt;Sn++)ot&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,x.get(w).__webglTexture,k,It+Sn),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,x.get(O).__webglTexture,ct,Me+Sn)),P.blitFramebuffer(Tt,Lt,_t,dt,Ft,ge,_t,dt,P.DEPTH_BUFFER_BIT,P.NEAREST);Mt.bindFramebuffer(P.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(k!==0||w.isRenderTargetTexture||x.has(w)){const ue=x.get(w),Jt=x.get(O);Mt.bindFramebuffer(P.READ_FRAMEBUFFER,sr),Mt.bindFramebuffer(P.DRAW_FRAMEBUFFER,qi);for(let be=0;be<xt;be++)ot?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ue.__webglTexture,k,It+be):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ue.__webglTexture,k),Pt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Jt.__webglTexture,ct,Me+be):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Jt.__webglTexture,ct),k!==0?P.blitFramebuffer(Tt,Lt,_t,dt,Ft,ge,_t,dt,P.COLOR_BUFFER_BIT,P.NEAREST):Pt?P.copyTexSubImage3D(oe,ct,Ft,ge,Me+be,Tt,Lt,_t,dt):P.copyTexSubImage2D(oe,ct,Ft,ge,Tt,Lt,_t,dt);Mt.bindFramebuffer(P.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Pt?w.isDataTexture||w.isData3DTexture?P.texSubImage3D(oe,ct,Ft,ge,Me,_t,dt,xt,pe,Rt,we.data):O.isCompressedArrayTexture?P.compressedTexSubImage3D(oe,ct,Ft,ge,Me,_t,dt,xt,pe,we.data):P.texSubImage3D(oe,ct,Ft,ge,Me,_t,dt,xt,pe,Rt,we):w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ct,Ft,ge,_t,dt,pe,Rt,we.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ct,Ft,ge,we.width,we.height,pe,we.data):P.texSubImage2D(P.TEXTURE_2D,ct,Ft,ge,_t,dt,pe,Rt,we);P.pixelStorei(P.UNPACK_ROW_LENGTH,se),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,je),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ut),P.pixelStorei(P.UNPACK_SKIP_ROWS,K),P.pixelStorei(P.UNPACK_SKIP_IMAGES,yt),ct===0&&O.generateMipmaps&&P.generateMipmap(oe),Mt.unbindTexture()},this.initRenderTarget=function(w){x.get(w).__webglFramebuffer===void 0&&U.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?U.setTextureCube(w,0):w.isData3DTexture?U.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?U.setTexture2DArray(w,0):U.setTexture2D(w,0),Mt.unbindTexture()},this.resetState=function(){C=0,B=0,N=null,Mt.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}}const qd=new Ah(8,12),i1=new jr(6,10),jd=[12088115,12632256,16766720],Kd=[16729190,4504575,16768324,4521864,16746751,16755251];class s1{scene;camera;renderer;particles=[];w=0;h=0;constructor(t){this.scene=new Zy,this.camera=new En(60,1,1,2e3),this.camera.position.z=500,this.renderer=new n1({alpha:!0,premultipliedAlpha:!1,antialias:!0}),this.renderer.setClearColor(0,0);const e=this.renderer.domElement;e.style.pointerEvents="none",e.style.zIndex="10",t.appendChild(e)}resize(t,e){this.w=t,this.h=e,this.renderer.setSize(t,e),this.renderer.setPixelRatio(window.devicePixelRatio||1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}toWorld(t,e){return[t-this.w/2,-(e-this.h/2)]}spawnCoinBurst(t,e,n,s,r){const[a,o]=this.toWorld(t,e),l=80+r*200,c=150+r*250,h=1+r*1.2;for(let u=0;u<s;u++){const f=new Ir({color:n,side:wn,transparent:!0,opacity:1}),d=new Pn(qd,f);d.position.set(a,o,0),d.scale.setScalar(h),this.scene.add(d);const g=Math.random()*Math.PI*2,_=40+Math.random()*60+r*80;this.particles.push({mesh:d,vx:Math.cos(g)*_,vy:Math.sin(g)*_+l*.3,vz:c+Math.random()*c*.5,rotSpeedX:(Math.random()-.5)*8,rotSpeedY:(Math.random()-.5)*8,rotSpeedZ:0,age:0,lifetime:.8+Math.random()*.6+r*.3,drift:0,driftFreq:0,gravity:-120})}}spawnConfetti(t){for(let e=0;e<t;e++){const n=Kd[Math.floor(Math.random()*Kd.length)],s=new Ir({color:n,side:wn,transparent:!0,opacity:1}),r=new Pn(i1,s),a=(Math.random()-.5)*this.w*.8,o=this.h/2*.6+Math.random()*this.h/2*.4;r.position.set(a,o,50+Math.random()*100),r.scale.setScalar(.8+Math.random()*.6),this.scene.add(r),this.particles.push({mesh:r,vx:(Math.random()-.5)*40,vy:-20-Math.random()*30,vz:20+Math.random()*60,rotSpeedX:(Math.random()-.5)*6,rotSpeedY:(Math.random()-.5)*6,rotSpeedZ:(Math.random()-.5)*4,age:0,lifetime:2+Math.random()*1,drift:15+Math.random()*25,driftFreq:2+Math.random()*3,gravity:-50})}}spawnCelebration(){for(let t=0;t<40;t++){const e=jd[Math.floor(Math.random()*jd.length)],n=new Ir({color:e,side:wn,transparent:!0,opacity:1}),s=new Pn(qd,n),r=(Math.random()-.5)*this.w*.9,a=this.h/2*.5+Math.random()*this.h/2*.5;s.position.set(r,a,Math.random()*80),s.scale.setScalar(1+Math.random()*1),this.scene.add(s),this.particles.push({mesh:s,vx:(Math.random()-.5)*80,vy:40+Math.random()*80,vz:60+Math.random()*150,rotSpeedX:(Math.random()-.5)*10,rotSpeedY:(Math.random()-.5)*10,rotSpeedZ:0,age:Math.random()*.3,lifetime:2.5+Math.random()*1,drift:5+Math.random()*15,driftFreq:1+Math.random()*2,gravity:-80})}this.spawnConfetti(60)}update(t){for(let e=this.particles.length-1;e>=0;e--){const n=this.particles[e];n.age+=t,n.vy+=n.gravity*t,n.mesh.position.x+=n.vx*t+Math.sin(n.age*n.driftFreq)*n.drift*t,n.mesh.position.y+=n.vy*t,n.mesh.position.z+=n.vz*t,n.mesh.rotation.x+=n.rotSpeedX*t,n.mesh.rotation.y+=n.rotSpeedY*t,n.mesh.rotation.z+=n.rotSpeedZ*t,n.vz*=Math.max(0,1-t*1.5);const s=n.lifetime*.7;if(n.age>s){const r=n.mesh.material;r.opacity=Math.max(0,1-(n.age-s)/(n.lifetime-s))}n.age>=n.lifetime&&(this.scene.remove(n.mesh),n.mesh.material.dispose(),this.particles.splice(e,1))}this.renderer.render(this.scene,this.camera)}dispose(){for(const t of this.particles)this.scene.remove(t.mesh),t.mesh.material.dispose();this.particles.length=0,this.renderer.dispose()}}class r1{supported;nextProximityPulse=0;constructor(){this.supported=typeof navigator<"u"&&"vibrate"in navigator}vib(t){this.supported&&navigator.vibrate(t)}tick(){this.vib(8)}updateProximity(t,e){if(t<=0)return;const n=.5-t*.42;this.nextProximityPulse-=e,this.nextProximityPulse<=0&&(this.nextProximityPulse=n,this.vib(6+Math.round(t*14)))}resetProximity(){this.nextProximityPulse=0}shakeHit(){this.vib(20)}telegraphOpen(){this.vib(12)}coinOut(t,e){const n=t?35+Math.round(e*25):25;this.vib(n)}comboMilestone(t){t===3?this.vib([15,40,15,40,15]):t===5?this.vib([25,30,25,30,25]):t>=10&&this.vib([40,20,40,20,40])}mimicShiver(){this.vib([12,25,12,25,12])}mimicChatter(){this.vib([6,15,6,15,6,15,6])}mimicGrowl(){this.vib(80)}snapWarning(){this.vib(100)}mimicSnap(){this.vib(200)}starReveal(){this.vib(10)}}const a1=1710638,o1=9133628,eo=6044190,Al=4491519,Cl=16746564,Rl=16729156,Pl=13935988,Il=9136404,l1=16768324,Dl={copper:12088115,silver:12632256,gold:16766720},c1=30,Ll=16766720,h1=3355456,yr=.5,Re=12,u1=Math.PI*2/Re,d1=60,Ul=50,Zd=8,f1=.05,Fl=.25,Na=36,Jd=60,Qd=.82,Oa=1,tf=16,ef=1.8,nf=.006,Ns=240,Os=160,sf=10,p1=600,Nl=2,m1=180,g1=360,rf=.25,Ba=30,Bs=6;async function _1(){const i=new lp;await i.init({background:a1,resizeTo:window,antialias:!0,resolution:window.devicePixelRatio||1,autoDensity:!0});const t=document.getElementById("game");t.appendChild(i.canvas);const e=new gv(i.canvas),n=new _v,s=new s1(t),r=new r1,a=()=>{n.unlock()};window.addEventListener("keydown",a,{once:!0}),window.addEventListener("touchstart",a,{once:!0}),window.addEventListener("mousedown",a,{once:!0});const o=["copper","copper","copper","copper","copper","copper","copper","copper","copper","copper","silver","silver","silver","silver","silver","silver","gold","gold","gold","gold"],l=o.length;let c=0;const h=yv(o,Re);let u=-1;function f(){if(c++,c<o.length){let ut;do ut=Math.floor(Math.random()*Re);while(ut===Ee);u=ut}else u=-1}const d=Ku(),g=Ju(),_=[],m=new _e;i.stage.addChild(m);function p(ut,K){m.clear(),m.rect(0,0,ut,K),m.fill({color:2236974});const yt=K*.72;m.rect(0,yt,ut,K-yt),m.fill({color:1381656}),m.moveTo(0,yt),m.lineTo(ut,yt),m.stroke({color:2763317,width:2});for(let ot=0;ot<5;ot++){const Pt=ot*(yt/5);m.moveTo(0,Pt),m.lineTo(ut,Pt),m.stroke({color:1973800,width:1});const ue=ot%2*80;for(let Jt=ue;Jt<ut;Jt+=160)m.moveTo(Jt,Pt),m.lineTo(Jt,Pt+yt/5),m.stroke({color:1973800,width:1})}}const M=new rn;M.scale.set(1.5),i.stage.addChild(M);const S=new _e;S.roundRect(-6,0,12,40,3),S.fill({color:13944992}),S.roundRect(-6,0,12,40,3),S.stroke({color:10129520,width:1}),S.moveTo(0,0),S.lineTo(0,-6),S.stroke({color:2236962,width:1.5}),S.roundRect(-14,38,28,6,2),S.fill({color:6710869}),S.roundRect(-14,38,28,6,2),S.stroke({color:4473912,width:1}),M.addChild(S);const v=new _e;M.addChild(v);const T=new _e;T.circle(0,-10,30),T.fill({color:16750899}),T.alpha=.06,M.addChildAt(T,0);const E=2.2;function A(ut){const K=new rn;K.scale.set(E);const yt=ut?1:-1,ot=new _e;ot.moveTo(-18*yt,-20),ot.lineTo(22*yt,-14),ot.lineTo(26*yt,4),ot.quadraticCurveTo(20*yt,18,0,20),ot.quadraticCurveTo(-22*yt,16,-22*yt,-4),ot.lineTo(-18*yt,-20),ot.fill({color:3816002}),ot.moveTo(-18*yt,-20),ot.lineTo(22*yt,-14),ot.lineTo(26*yt,4),ot.quadraticCurveTo(20*yt,18,0,20),ot.quadraticCurveTo(-22*yt,16,-22*yt,-4),ot.lineTo(-18*yt,-20),ot.stroke({color:2763312,width:2}),ot.moveTo(-14*yt,-12),ot.lineTo(18*yt,-8),ot.stroke({color:2763312,width:3}),ot.moveTo(4*yt,-6),ot.lineTo(8*yt,6),ot.lineTo(2*yt,10),ot.stroke({color:3026486,width:2}),ot.moveTo(-6*yt,12),ot.quadraticCurveTo(6*yt,16,16*yt,10),ot.stroke({color:2236968,width:2}),ot.circle(-4*yt,-4,5),ot.fill({color:1579038}),ot.circle(12*yt,-2,5),ot.fill({color:1579038}),K.addChild(ot);const Pt=new _e;return Pt.circle(-4*yt,-4,4),Pt.circle(12*yt,-2,4),Pt.fill({color:16724736}),Pt.alpha=0,K.addChild(Pt),{container:K,eyeGlow:Pt}}const I=A(!0),b=A(!1);i.stage.addChild(I.container),i.stage.addChild(b.container);const y=new rn;i.stage.addChild(y);const C=new _e;x1(C,Ns,Os),y.addChild(C);const B=new _e;B.roundRect(-Ba/2,-Os/2-Bs/2,Ba,Bs,2),B.fill({color:1118488}),B.roundRect(-Ba/2,-Os/2-Bs/2,Ba,Bs,2),B.stroke({color:eo,width:1}),y.addChild(B);const N=new _e;N.circle(0,-10,8),N.roundRect(-4,-6,8,20,2),N.fill({color:2759178}),C.addChild(N);const G=38,W=-36,D=18,L=13,$=9,X=5,Q=new rn;Q.alpha=0,C.addChild(Q);function it(){const ut=new rn,K=new _e;K.ellipse(0,0,D,L),K.fill({color:15261136}),K.ellipse(0,0,D,L),K.stroke({color:12886144,width:2}),ut.addChild(K);const yt=new _e;yt.moveTo(-D+3,-2),yt.lineTo(-D+10,-1),yt.stroke({color:13404262,width:.5}),yt.moveTo(D-3,1),yt.lineTo(D-9,2),yt.stroke({color:13404262,width:.5}),yt.moveTo(-D+4,3),yt.lineTo(-D+11,2),yt.stroke({color:12285781,width:.4}),ut.addChild(yt);const ot=new _e;ot.circle(0,0,$),ot.fill({color:12281344}),ot.circle(0,0,$),ot.stroke({color:6697728,width:1.5}),ot.circle(0,0,$*.65),ot.stroke({color:14518306,width:1}),ut.addChild(ot);const Pt=new _e;Pt.circle(0,0,X),Pt.fill({color:526344}),ut.addChild(Pt);const ue=new _e;ue.circle(-2,-2,2),ue.fill({color:16777215}),ue.alpha=.7,ut.addChild(ue);const Jt=new _e;Jt.ellipse(0,-L+3,D-1,5),Jt.fill({color:0}),Jt.alpha=.12,ut.addChild(Jt);const be=new _e;return be.ellipse(0,0,D+1,L+1),be.stroke({color:eo,width:2}),ut.addChild(be),{container:ut,iris:ot,pupil:Pt,highlight:ue}}const At=it(),Ct=At.container;Ct.x=-G,Ct.y=W,Q.addChild(Ct);const Qt=At.iris,ae=At.pupil,j=At.highlight,et=it(),mt=et.container;mt.x=G,mt.y=W,Q.addChild(mt);const Nt=et.iris,St=et.pupil,Kt=et.highlight,he=new _e;af(he,Na,Jd,!0),he.x=-Ns/2-Na/2+6,he.y=8,y.addChild(he);const Bt=new _e;af(Bt,Na,Jd,!1),Bt.x=Ns/2+Na/2-6,Bt.y=8,y.addChild(Bt);const Gt=new _e,Ht=new _e;Gt.alpha=0,Ht.alpha=0,i.stage.addChild(Gt),i.stage.addChild(Ht);const Ot=new _e;Ot.alpha=0,i.stage.addChild(Ot);const te=new rn;te.alpha=0,i.stage.addChild(te);const P=new _e;P.moveTo(-16,8),P.quadraticCurveTo(-16,-18,0,-20),P.quadraticCurveTo(16,-18,16,8),P.quadraticCurveTo(12,16,8,8),P.quadraticCurveTo(4,0,0,8),P.quadraticCurveTo(-4,16,-8,8),P.quadraticCurveTo(-12,0,-16,8),P.fill({color:14544639}),P.stroke({color:11189213,width:1.5}),P.circle(-6,-6,3),P.fill({color:2236996}),P.circle(6,-6,3),P.fill({color:2236996}),P.circle(-5,-6,1.2),P.fill({color:16777215}),P.circle(7,-6,1.2),P.fill({color:16777215}),P.ellipse(-10,-1,3,1.5),P.fill({color:16755370}),P.ellipse(10,-1,3,1.5),P.fill({color:16755370}),P.ellipse(0,0,2.5,2),P.fill({color:5596808}),te.addChild(P),te.scale.set(1.8);let Ce=0,Zt=0,fe=0;const Mt=new Xn({text:"",style:new un({fontFamily:"monospace",fontSize:20,fontWeight:"bold",fill:13421738})});Mt.anchor.set(.5,1),i.stage.addChild(Mt);const R=new Xn({text:"",style:new un({fontFamily:"monospace",fontSize:14,fill:5592432})});R.anchor.set(.5,0),i.stage.addChild(R);const x=new Xn({text:"",style:new un({fontFamily:"monospace",fontSize:28,fontWeight:"bold",fill:16777215})});x.anchor.set(.5,.5),x.alpha=0,i.stage.addChild(x);const U=new _e;U.alpha=0,i.stage.addChild(U);const q=new Xn({text:"SNAP!",style:new un({fontFamily:"monospace",fontSize:64,fontWeight:"bold",fill:16724787})});q.anchor.set(.5,.5),q.alpha=0,i.stage.addChild(q);const Z=new Xn({text:"",style:new un({fontFamily:"monospace",fontSize:24,fill:13421738,align:"center"})});Z.anchor.set(.5,.5),Z.alpha=0,i.stage.addChild(Z);const Y=new Xn({text:"tap to continue",style:new un({fontFamily:"monospace",fontSize:18,fill:6710920})});Y.anchor.set(.5,.5),Y.alpha=0,i.stage.addChild(Y);const bt=new Xn({text:"CHEST CLEARED!",style:new un({fontFamily:"monospace",fontSize:48,fontWeight:"bold",fill:Ll})});bt.anchor.set(.5,.5),bt.alpha=0,i.stage.addChild(bt);function ht(ut,K,yt){const Pt=K*.4;ut.moveTo(0,-K);for(let ue=0;ue<5;ue++){const Jt=ue*2*Math.PI/5-Math.PI/2,be=Jt+Math.PI/5;ut.lineTo(Math.cos(Jt)*K,Math.sin(Jt)*K),ut.lineTo(Math.cos(be)*Pt,Math.sin(be)*Pt)}ut.closePath(),ut.fill({color:yt})}const wt=28,Ut=80,tt=[];for(let ut=0;ut<3;ut++){const K=new _e;K.alpha=0,i.stage.addChild(K),tt.push(K)}const at=new rn;i.stage.addChild(at);const vt=new _e;at.addChild(vt);const Et=new Xn({text:"SUNDUK",style:new un({fontFamily:"monospace",fontSize:72,fontWeight:"bold",fill:Ll})});Et.anchor.set(.5,.5),at.addChild(Et);const lt=new Xn({text:["Tap LEFT / RIGHT to rotate the chest","Find the sweet spot — listen for clicks","Tap BOTH sides to shake coins out","Don't anger the mimic!"].join(`
`),style:new un({fontFamily:"monospace",fontSize:14,fill:6715272,lineHeight:22,align:"center"})});lt.anchor.set(.5,.5),at.addChild(lt);const zt=new Xn({text:"tap to play",style:new un({fontFamily:"monospace",fontSize:22,fill:8947865})});zt.anchor.set(.5,.5),at.addChild(zt);function F(){const ut=i.screen.width,K=i.screen.height;y.x=ut/2,y.y=K/2,M.x=ut/2-Ns/2-60,M.y=K*.72-44,I.container.x=ut/2-Ns/2-140,I.container.y=K/2-30,b.container.x=ut/2+Ns/2+140,b.container.y=K/2-30,R.x=ut/2,R.y=8,Mt.x=ut/2,Mt.y=K-12,x.x=ut/2,x.y=K/2+Os/2+60,Gt.clear(),Gt.rect(0,0,ut/2,K),Gt.fill({color:Al}),Ht.clear(),Ht.rect(ut/2,0,ut/2,K),Ht.fill({color:Cl}),Ot.clear(),Ot.rect(0,0,ut,K),Ot.fill({color:l1}),U.clear(),U.rect(0,0,ut,K),U.fill({color:0}),q.x=ut/2,q.y=K/2-80,bt.x=ut/2,bt.y=K/2-80,Z.x=ut/2,Z.y=K/2+40,Y.x=ut/2,Y.y=K/2+80;for(let yt=0;yt<3;yt++)tt[yt].x=ut/2+(yt-1)*Ut,tt[yt].y=K/2-20;vt.clear(),vt.rect(0,0,ut,K),vt.fill({color:0}),vt.alpha=.7,Et.x=ut/2,Et.y=K/2-60,lt.x=ut/2,lt.y=K/2+10,zt.x=ut/2,zt.y=K/2+75,p(ut,K),s.resize(ut,K)}F(),window.addEventListener("resize",F);function ft(){if(u>=0&&c<o.length){const ut=sc(o[c],Re);ut.sweetSpot=u,h.push(ut),f()}}function st(){if(u<0)return 0;let ut=u-Ee;return ut>Re/2&&(ut-=Re),ut<-Re/2&&(ut+=Re),ut>0?1:ut<0?-1:0}function gt(ut,K,yt=0){const ot=new _e,Pt=K?sf*(1.3+yt*.3):sf;ot.circle(0,0,Pt),ot.fill({color:Dl[ut]}),ot.circle(0,0,Pt),ot.stroke({color:3355443,width:1.5}),ot.circle(0,0,Pt*.55),ot.stroke({color:3355443,width:1}),i.stage.addChild(ot);const ue=0,Jt=-Os/2-Bs/2,be=y.rotation,Ai=Math.cos(be),Sn=Math.sin(be),po=y.x+ue*Ai-Jt*Sn,mo=y.y+ue*Sn+Jt*Ai,rr=be-Math.PI/2,Ci=(Math.random()-.5)*.4,go=(K?g1:m1)*(1+yt*.6);_.push({x:po,y:mo,vx:Math.cos(rr+Ci)*go,vy:Math.sin(rr+Ci)*go-(K?180+yt*120:80),rotation:0,rotSpeed:(Math.random()-.5)*(K?18+yt*10:8),type:ut,graphic:ot,age:0})}let nt="menu",J=0,rt=0,Dt=0,me=0,ie=!1,ze=!1,Ee=0;f();let Ei=0,Gi=0,Dn=0,ri=0,zi=0,Hi=0,yn="none",Ln=0,Wn=!1,xs=Oa,wi=Oa,Vi=0,Wi=0,Xi=0,Un=0,Yi=0,$i=0,Fe=0,qe=0,sr=!1,qi=0,w=0,O=0,z="candle",H=0,k=0,ct=0,_t=!1,dt=!1,xt=0,Tt=0,Lt=1,It=0,Ft=0;const ge=.12;let Me=0,we=!1,pe=!1,Rt=0,oe="calm";function se(){h.length=0,c=0,h.push(sc(o[0],Re)),f(),Object.assign(g,Ju()),Object.assign(d,Ku()),Ee=0,Ei=0,Gi=0,Yi=0,Fe=0,ct=0,_t=!1,dt=!1,Me=0,we=!1,pe=!1,Rt=0,qe=0,sr=!1,oe="calm",xt=0,U.alpha=0,q.alpha=0,bt.alpha=0,Z.alpha=0,Y.alpha=0,J=0,rt=0,Dt=0,me=0,ie=!1,ze=!1;for(const ut of tt)ut.alpha=0;for(const ut of _)i.stage.removeChild(ut.graphic),ut.graphic.destroy();_.length=0}const je=()=>{nt==="menu"?(nt="playing",at.visible=!1,n.unlock(),se()):nt==="results"&&ie&&(nt="menu",ie=!1,se(),at.visible=!0)};window.addEventListener("keydown",je),window.addEventListener("touchstart",je),window.addEventListener("mousedown",je),i.ticker.add(ut=>{const K=ut.deltaMS/1e3,yt=i.screen.width/2,ot=i.screen.height/2;if(nt==="menu"){e.getAction(),e.consumeLeftPresses(),e.consumeRightPresses(),Vi+=K*ef*Math.PI*2;const Vt=1+Math.sin(Vi)*nf;y.x=yt,y.y=ot,y.scale.set(Vt),y.rotation=0,k+=K;const jt=Math.sin(k*11)*.08,Ie=Math.sin(k*17+2)*.05,Xt=.9+Math.sin(k*5)*.1+jt+Ie;v.clear(),v.moveTo(0,-4),v.quadraticCurveTo(-8,-28*.55,0,-28*Xt),v.quadraticCurveTo(8,-28*.55,0,-4),v.fill({color:16746496}),v.moveTo(0,-5),v.quadraticCurveTo(-4,-28*.45,0,-28*.7*Xt),v.quadraticCurveTo(4,-28*.45,0,-5),v.fill({color:16768324}),T.alpha=.04+Xt*.03,zt.alpha=.5+Math.sin(k*2)*.3,Mt.text="",R.text="";return}if(nt==="results"){e.getAction(),e.consumeLeftPresses(),e.consumeRightPresses(),rt+=K;const Vt=ze?.85:1;if(U.alpha+=(Vt-U.alpha)*Math.min(1,5*K),ze?bt.alpha+=(1-bt.alpha)*Math.min(1,4*K):q.alpha+=(1-q.alpha)*Math.min(1,4*K),ze&&rt>.5){const jt=rt-.5,Ie=Math.min(3,Math.floor(jt/yr)+1);for(let Xt=0;Xt<3;Xt++)if(Xt<Ie&&Xt<Dt){Xt>=me&&(me=Xt+1,n.playStarChime(Xt),r.starReveal(),tt[Xt].clear(),ht(tt[Xt],wt,Ll));const Mn=jt-Xt*yr,cn=Mn<.15?1+(.15-Mn)*3:1;tt[Xt].alpha+=(1-tt[Xt].alpha)*Math.min(1,8*K),tt[Xt].scale.set(cn)}else Xt<3&&jt>Xt*yr&&(tt[Xt].alpha<.01&&(tt[Xt].clear(),ht(tt[Xt],wt,h1)),tt[Xt].alpha+=(.4-tt[Xt].alpha)*Math.min(1,4*K),tt[Xt].scale.set(1))}rt>.8+(ze?Dt*yr:0)&&(Z.alpha+=(1-Z.alpha)*Math.min(1,3*K)),rt>1.2+(ze?Dt*yr:0)&&(Y.alpha+=(1-Y.alpha)*Math.min(1,2*K),ie||(ie=!0)),s.update(K);return}const Pt=g.snapTriggered?"none":e.getAction(),ue=h.filter(Vt=>Vt.extracted).length,Jt=l-ue;if(g.snapTriggered&&(e.consumeLeftPresses(),e.consumeRightPresses()),Pt!=="shake"){const Vt=e.consumeLeftPresses(),Ie=e.consumeRightPresses()-Vt;Ie!==0&&(Ee=((Ee+Ie)%Re+Re)%Re,n.playTick(),r.tick(),Wi=performance.now(),Xi=Ie)}else e.consumeLeftPresses(),e.consumeRightPresses(),yn!=="shake"&&Xi!==0&&performance.now()-Wi<ic&&(Ee=((Ee-Xi)%Re+Re)%Re,Xi=0);const be=Ee*u1;if(Tv(d,Ee,h,Re,K),d.justMissed&&(pa(g,Av),Fe=0),d.justReassigned&&n.playCoinShift(),d.justOpened){n.playTelegraphChime(),r.telegraphOpen();const Vt=Math.random();z=Vt<.33?"candle":Vt<.66?"gargoyle":"ghost",z==="candle"&&(qi=1),z==="ghost"&&(Ce=st(),fe=0)}if(qi=Math.max(0,qi-K*4),Pt==="shake"?(yn!=="shake"&&(Ln=Ul,Wn=!1,Un=0),Ln>0&&(Ln-=ut.deltaMS,Ln<=0&&(Wn=!0,Un=Fl))):(Ln=0,Wn=!1,Un=0),Wn&&(Un+=K,Un>=Fl)){Un-=Fl,r.shakeHit();const Vt=y.rotation,jt=Math.cos(Vt),Ie=Math.sin(Vt),Xt=y.x+83*Ie,Mn=y.y+(-Os/2-Bs/2)*jt;if(d.activeCoin&&!d.activeCoin.extracted){const cn=d.activeCoin;cn.extracted=!0,Fe++,J++;const Xe=Math.min(1,(Fe-1)/5);Fe>=2?n.playComboExtract(cn.type,Fe):n.playTelegraphExtract(cn.type),r.coinOut(!0,Xe),gt(cn.type,!0,Xe),zi=.2+Xe*.25,$i=rf,s.spawnCoinBurst(Xt,Mn,Dl[cn.type],8+Math.round(Xe*10),Xe),qe=Math.max(qe,.1+Xe*.3),Fe===3?(s.spawnConfetti(20),qe=Math.max(qe,.4),r.comboMilestone(3)):Fe===5?(s.spawnConfetti(40),qe=Math.max(qe,.6),r.comboMilestone(5)):Fe===10&&(s.spawnConfetti(80),qe=Math.max(qe,.8),r.comboMilestone(10)),pa(g,Fe>=2?Pv:wv),ft(),d.directionHint=0,d.directionHintTimer=0,d.activeCoin=null,d.windowTimer=0,d.cooldown=0,Wn=!1,Ln=Ul,Un=0}else{Fe=0;const cn=Ev(Ee,h,Re,d);if(Yi++,pa(g,Cv),Yi>=$u){Yi=0;const Xe=vv(h);Xe&&(n.playCoinOut(Xe.type),r.coinOut(!1,0),gt(Xe.type,!1,0),$i=rf,s.spawnCoinBurst(Xt,Mn,Dl[Xe.type],4,0),qe=Math.max(qe,.08),ft(),Wn=!1,Ln=Ul,Un=0)}else if(cn)n.playNearMiss(),pa(g,Rv);else{const Xe=ju(Ee,h,Re);n.playShakeRattle(Math.max(.15,Xe))}}}if($i=Math.max(0,$i-K),Pt!=="shake"&&$i<=0){const Vt=ju(Ee,h,Re);n.updateProximity(Vt,K),r.updateProximity(Vt,K)}else Pt==="shake"&&(n.resetProximity(),r.resetProximity());const Ai=Pt==="left"||Pt==="shake"?Qd:Oa,Sn=Pt==="right"||Pt==="shake"?Qd:Oa;xs+=(Ai-xs)*Math.min(1,tf*K),wi+=(Sn-wi)*Math.min(1,tf*K),he.scale.x=xs,Bt.scale.x=wi,Jt>0&&zv(g,K),Gv(g)&&(g.stage==="twitchy"&&oe==="calm"&&n.playMimicShiver(),oe=g.stage),g.stage==="agitated"&&!g.snapTriggered&&(Me-=K,Me<=0&&(n.playMimicGrowl(g.growlIntensity),r.mimicGrowl(),Me=.3+Math.random()*.2)),g.justShivered&&(n.playMimicShiver(),r.mimicShiver()),g.justChattered&&(n.playTeethChatter(),r.mimicChatter()),g.snapTriggered&&!we&&g.snapPhase===0&&(n.playWarningGrowl(),r.snapWarning(),we=!0),g.snapTriggered&&!pe&&g.snapPhase===2&&(n.playMimicSnap(),r.mimicSnap(),pe=!0,Rt=1);const po=Hv(g),mo=Vv(g);Vi+=K*ef*po*Math.PI*2;const rr=1+Math.sin(Vi)*nf*mo;let Ci=be-Ei;for(;Ci>Math.PI;)Ci-=Math.PI*2;for(;Ci<-Math.PI;)Ci+=Math.PI*2;const Ch=Ci*d1;Gi+=(Ch-Gi*16)*K,Ei+=Gi*K;let _o=0,xo=0,vo=0;g.shiverActive>0?(_o=(Math.random()-.5)*6,xo=(Math.random()-.5)*4,vo=(Math.random()-.5)*.03):g.stage==="agitated"&&!g.snapTriggered&&(_o=(Math.random()-.5)*3,xo=(Math.random()-.5)*2,vo=(Math.random()-.5)*.015),Rt=Math.max(0,Rt-K*3),qe=Math.max(0,qe-K*6);const Kr=Math.max(Rt,qe),vm=Kr>0?(Math.random()-.5)*30*Kr:0,ym=Kr>0?(Math.random()-.5)*20*Kr:0;if(g.snapTriggered&&g.snapPhase>=1){const Vt=Math.min(1,12*K);y.x+=(yt+vm-y.x)*Vt,y.y+=(ot+ym-y.y)*Vt,y.rotation=Ei,y.scale.set(1)}else if(Wn)y.x=yt+(Math.random()-.5)*Zd,y.y=ot+(Math.random()-.5)*Zd*.6,y.rotation=Ei+(Math.random()-.5)*f1,y.scale.set(rr);else{const Vt=Math.min(1,12*K);y.x+=(yt+_o-y.x)*Vt,y.y+=(ot+xo-y.y)*Vt,y.rotation=Ei+vo,y.scale.set(rr)}k+=K;const Rh=z==="candle"&&d.activeCoin?st():0,Sm=Rh!==0?Rh:z==="candle"&&d.directionHintTimer>0?d.directionHint*.8:0;H+=(Sm-H)*Math.min(1,6*K);const yo=Wv(g),Mm=Math.sin(k*11)*.08*yo,bm=Math.sin(k*17+2)*.05*yo,Tm=Math.sin(k*7+5)*.04*yo,Ph=Mm+bm+Tm,So=d.activeCoin!=null||d.directionHintTimer>0,vs=qi*qi,ys=(So?38:28)+vs*20,Mo=.9+Math.sin(k*5)*.1+Ph,ji=H*2+Ph*.3,Em=255,wm=136+Math.round(vs*119),Am=Math.round(vs*204),Cm=255,Rm=221+Math.round(vs*34),Pm=68+Math.round(vs*187),Im=Em<<16|wm<<8|Am,Dm=Cm<<16|Rm<<8|Pm;v.clear(),v.moveTo(0,-4),v.quadraticCurveTo(-8+ji*14,-ys*.55,ji*12,-ys*Mo),v.quadraticCurveTo(8+ji*14,-ys*.55,0,-4),v.fill({color:Im}),v.moveTo(0,-5),v.quadraticCurveTo(-4+ji*8,-ys*.45,ji*7,-ys*.7*Mo),v.quadraticCurveTo(4+ji*8,-ys*.45,0,-5),v.fill({color:Dm});const Lm=Fe>=2?Math.min(1,(Fe-1)/5)*.2:0;T.alpha=.04+Mo*.03+(So?.08:0)+vs*.25+Lm,T.x=ji*10;const Um=z==="ghost"&&So&&Ce!==0,Ih=4;if(Zt+=(Um?Ih:-Ih)*K,Zt=Math.max(0,Math.min(1,Zt)),Zt>0){fe+=K*3;const Vt=i.screen.width,jt=22,Ie=40,Xt=Zt*Zt*(3-2*Zt);Ce>0?(te.x=Vt+Ie-Xt*(Ie+jt),te.scale.x=-1.8):(te.x=-Ie+Xt*(Ie+jt),te.scale.x=1.8),te.y=i.screen.height*.35+Math.sin(fe)*8,te.rotation=Math.sin(fe*1.3)*.1,te.alpha=Xt*.85}else te.alpha=0;for(let Vt=_.length-1;Vt>=0;Vt--){const jt=_[Vt];jt.age+=K,jt.vy+=p1*K,jt.x+=jt.vx*K,jt.y+=jt.vy*K,jt.rotation+=jt.rotSpeed*K,jt.graphic.x=jt.x,jt.graphic.y=jt.y,jt.graphic.rotation=jt.rotation;const Ie=Nl*.7;jt.age>Ie&&(jt.graphic.alpha=1-(jt.age-Ie)/(Nl-Ie)),jt.age>=Nl&&(i.stage.removeChild(jt.graphic),jt.graphic.destroy(),_.splice(Vt,1))}s.update(K);const Dh=z==="gargoyle"&&d.activeCoin?st():0,Fm=Dh<0?1:0,Nm=Dh>0?1:0;w+=(Fm-w)*Math.min(1,8*K),O+=(Nm-O)*Math.min(1,8*K);const Lh=d.activeCoin?.15*Math.sin(k*6):0;I.eyeGlow.alpha=Math.max(0,w+(w>.1?Lh:0)),b.eyeGlow.alpha=Math.max(0,O+(O>.1?Lh:0));const Om=ue/l,Bm=Math.max(0,Math.min(1,(Om-.4)/.2)),km=g.stage!=="calm"?1:0,Gm=Math.max(Bm,km);if(xt+=(Gm-xt)*Math.min(1,3*K),Q.alpha=xt,xt>.05){let Vt=d.activeCoin?st():0;const jt=Fe>=3?.08+Math.min(1,(Fe-1)/5)*.12:0;((g.stage==="agitated"||jt>0)&&Math.random()<.05+jt||g.stage==="twitchy"&&Math.random()<.02)&&(Vt=Math.random()<.5?-1:1);const Ie=Vt*6;Tt+=(Ie-Tt)*Math.min(1,10*K),ae.x=Tt,Qt.x=Tt*.6,j.x=-2+Tt,St.x=Tt,Nt.x=Tt*.6,Kt.x=-2+Tt;let Xt=1;if(d.activeCoin?Xt=1.4:g.stage==="agitated"?Xt=1.3:g.stage==="twitchy"&&(Xt=1.1),Fe>=2){const Xe=Math.min(1,(Fe-1)/5);Xt=Math.max(Xt,1.4+Xe*.4)}g.snapTriggered&&g.snapPhase===0&&(Xt=1.6),Lt+=(Xt-Lt)*Math.min(1,8*K),Ft<=0&&!d.activeCoin&&(It-=K,It<=0&&(Ft=1,It=g.stage==="agitated"?1+Math.random()*2:g.stage==="twitchy"?1.5+Math.random()*3:2+Math.random()*4)),Ft>0&&(Ft-=K/ge,Ft<0&&(Ft=0));const Mn=Ft>.5?1-(Ft-.5)*2:Ft*2,cn=Lt*(Ft>0?Mn:1);Ct.scale.y=cn,mt.scale.y=cn}const Zr=8,Jr=.1;if(Pt==="left"?(Dn=Jr,ri=Math.max(0,ri-Zr*K)):Pt==="right"?(ri=Jr,Dn=Math.max(0,Dn-Zr*K)):Pt==="shake"?(Dn=Jr,ri=Jr,Gt.tint=Rl,Ht.tint=Rl):(Dn=Math.max(0,Dn-Zr*K),ri=Math.max(0,ri-Zr*K)),Pt!=="shake"&&(Gt.tint=Al,Ht.tint=Cl),Gt.alpha=Dn,Ht.alpha=ri,zi=Math.max(0,zi-3*K),Ot.alpha=zi,Pt!==yn&&Pt!=="none"&&(x.text=Pt.toUpperCase(),Hi=1,Pt==="shake"?x.style.fill=Rl:Pt==="left"?x.style.fill=Al:x.style.fill=Cl),Hi=Math.max(0,Hi-2.5*K),x.alpha=Hi,g.snapTriggered?(g.snapPhase>=3?U.alpha+=(1-U.alpha)*Math.min(1,5*K):g.snapPhase>=2&&(U.alpha=.3*Rt),g.gameOver&&nt==="playing"&&(ze=!1,Dt=0,Z.text=`${ue} / ${l} coins extracted`,nt="results",rt=0)):U.alpha=0,!_t&&Pt!=="none"&&(_t=!0),_t&&!dt&&!g.snapTriggered&&(ct+=K),(Jt===0||g.gameOver)&&!dt&&(dt=!0,Jt===0&&!sr&&(sr=!0,s.spawnCelebration(),qe=1),Jt===0&&nt==="playing")){ze=!0,Dt=1,ct<c1&&(Dt=2),J>=l&&(Dt=3);const Vt=ct,jt=Vt<60?`${Vt.toFixed(1)}s`:`${Math.floor(Vt/60)}:${(Vt%60).toFixed(1).padStart(4,"0")}`;Z.text=`${l} coins  ·  ${jt}`,setTimeout(()=>{nt==="playing"&&(nt="results",rt=0)},800)}if(!g.snapTriggered&&!dt){const Vt=ct,jt=Vt<60?`${Vt.toFixed(1)}s`:`${Math.floor(Vt/60)}:${(Vt%60).toFixed(1).padStart(4,"0")}`,Ie=Math.round(g.value*100);Mt.text=`${ue}/${l}  ${jt}`;const Xt=Ee*360/Re%360,Mn=xv(Ee,h,Re),cn=Mn?Np(Ee,Mn,Re).toFixed(2):"0",Xe=d.activeCoin?`TG:${d.windowTimer.toFixed(1)}s`:"tg:off",zm=d.directionHint<0?"dir:<":d.directionHint>0?"dir:>":"",Hm=Mn?`miss:${Mn.misses}/2`:"",Vm=Fe>0?`combo:${Fe}x`:"";R.text=`${Pt}  |  pos: ${Ee}/${Re}  |  ${Xt}°  |  prox: ${cn}  |  bf: ${Yi}/${$u}  |  ${Xe}  ${zm}  ${Hm}  ${Vm}  |  ${Jt} left  |  patience: ${Ie}% [${g.stage}]`}else Mt.text="",R.text="";yn=Pt})}function x1(i,t,e){i.roundRect(-t/2,-e/2,t,e,12),i.fill({color:o1}),i.roundRect(-t/2,-e/2,t,e,12),i.stroke({color:eo,width:4}),i.moveTo(-t/2+8,-e/2+e*.35),i.lineTo(t/2-8,-e/2+e*.35),i.stroke({color:eo,width:2});for(const n of[-e/2+e*.15,e/2-e*.15])i.roundRect(-t/2-2,n-4,t+4,8,2),i.fill({color:6710869});i.roundRect(-16,-20,32,40,6),i.fill({color:8947824}),i.roundRect(-16,-20,32,40,6),i.stroke({color:5592384,width:2})}function af(i,t,e,n){const s=n?1:-1;i.roundRect(-t/2,-e/2,t,e,10),i.fill({color:Pl}),i.roundRect(-t/2,-e/2,t,e,10),i.stroke({color:Il,width:2});const r=n?t/2:-t/2;for(let o=0;o<4;o++){const l=-e/2+10+o*13;i.roundRect(r-5*s,l,10*s,10,4),i.fill({color:Pl}),i.roundRect(r-5*s,l,10*s,10,4),i.stroke({color:Il,width:1})}const a=n?-t/2+4:t/2-4;i.ellipse(a,-e/2+8,7,10),i.fill({color:Pl}),i.ellipse(a,-e/2+8,7,10),i.stroke({color:Il,width:1})}_1();export{no as $,np as A,Or as B,He as C,xn as D,ii as E,yi as F,so as G,ih as H,Qf as I,Vn as J,Yf as K,ec as L,ne as M,E0 as N,A0 as O,tn as P,U0 as Q,Wl as R,sh as S,ye as T,qa as U,I0 as V,sg as W,O0 as X,pn as Y,vf as Z,In as _,qf as a,jh as a0,Dr as a1,dv as a2,Fg as a3,Zh as a4,Do as a5,Jh as a6,Og as a7,qs as a8,Oe as a9,Mf as aa,kx as ab,ip as ac,ce as ad,Vr as ae,Le as af,G_ as ag,F_ as ah,o0 as ai,t0 as aj,w0 as ak,C0 as al,F0 as am,L0 as an,N0 as ao,Hf as b,Z_ as c,dn as d,Ue as e,Te as f,a_ as g,ka as h,qt as i,_e as j,Q0 as k,W0 as l,Sf as m,ao as n,If as o,Be as p,Hs as q,xg as r,ro as s,rn as t,__ as u,q_ as v,on as w,Wr as x,du as y,Ga as z};
