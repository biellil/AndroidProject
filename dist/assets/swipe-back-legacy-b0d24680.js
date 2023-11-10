System.register(["./index-legacy-4c35a7fc.js"],(function(t,e){"use strict";var r;return{setters:[t=>{r=t.c}],execute:function(){class e{constructor(t,e,r,s,i){this.id=e,this.name=r,this.disableScroll=i,this.priority=1e6*s+e,this.ctrl=t}canStart(){return!!this.ctrl&&this.ctrl.canStart(this.name)}start(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)}capture(){if(!this.ctrl)return!1;const t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t}release(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))}destroy(){this.release(),this.ctrl=void 0}}class s{constructor(t,e,r,s){this.id=e,this.disable=r,this.disableScroll=s,this.ctrl=t}block(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.disableGesture(t,this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}}unblock(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.enableGesture(t,this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}}destroy(){this.unblock(),this.ctrl=void 0}}const i="backdrop-no-scroll",n=new
/*!
       * (C) Ionic http://ionicframework.com - MIT License
       */
class{constructor(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}createGesture(t){var r;return new e(this,this.newID(),t.name,null!==(r=t.priority)&&void 0!==r?r:0,!!t.disableScroll)}createBlocker(t={}){return new s(this,this.newID(),t.disable,!!t.disableScroll)}start(t,e,r){return this.canStart(t)?(this.requestedStart.set(e,r),!0):(this.requestedStart.delete(e),!1)}capture(t,e,r){if(!this.start(t,e,r))return!1;const s=this.requestedStart;let i=-1e4;if(s.forEach((t=>{i=Math.max(i,t)})),i===r){this.capturedId=e,s.clear();const r=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return document.dispatchEvent(r),!0}return s.delete(e),!1}release(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)}disableGesture(t,e){let r=this.disabledGestures.get(t);void 0===r&&(r=new Set,this.disabledGestures.set(t,r)),r.add(e)}enableGesture(t,e){const r=this.disabledGestures.get(t);void 0!==r&&r.delete(e)}disableScroll(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&document.body.classList.add(i)}enableScroll(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&document.body.classList.remove(i)}canStart(t){return void 0===this.capturedId&&!this.isDisabled(t)}isCaptured(){return void 0!==this.capturedId}isScrollDisabled(){return this.disabledScroll.size>0}isDisabled(t){const e=this.disabledGestures.get(t);return!!(e&&e.size>0)}newID(){return this.gestureId++,this.gestureId}},l=(t,e,r,s)=>{const i=a(t)?{capture:!!s.capture,passive:!!s.passive}:!!s.capture;let n,l;return t.__zone_symbol__addEventListener?(n="__zone_symbol__addEventListener",l="__zone_symbol__removeEventListener"):(n="addEventListener",l="removeEventListener"),t[n](e,r,i),()=>{t[l](e,r,i)}},a=t=>{if(void 0===o)try{const e=Object.defineProperty({},"passive",{get:()=>{o=!0}});t.addEventListener("optsTest",(()=>{}),e)}catch(e){o=!1}return!!o};let o;const c=t=>t instanceof Document?t:t.ownerDocument,d=t=>{let e=!1,r=!1,s=!0,i=!1;const a=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),o=a.canStart,d=a.onWillStart,v=a.onStart,m=a.onEnd,p=a.notCaptured,S=a.onMove,y=a.threshold,f=a.passive,g=a.blurOnStart,X={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},w=((t,e,r)=>{const s=r*(Math.PI/180),i="x"===t,n=Math.cos(s),l=e*e;let a=0,o=0,c=!1,d=0;return{start(t,e){a=t,o=e,d=0,c=!0},detect(t,e){if(!c)return!1;const r=t-a,s=e-o,u=r*r+s*s;if(u<l)return!1;const h=Math.sqrt(u),b=(i?r:s)/h;return d=b>n?1:b<-n?-1:0,c=!1,!0},isGesture:()=>0!==d,getDirection:()=>d}})(a.direction,a.threshold,a.maxAngle),Y=n.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),G=()=>{e&&(i=!1,S&&S(X))},_=()=>!!Y.capture()&&(e=!0,s=!1,X.startX=X.currentX,X.startY=X.currentY,X.startTime=X.currentTime,d?d(X).then(D):D(),!0),D=()=>{g&&(()=>{if("undefined"!=typeof document){const t=document.activeElement;(null==t?void 0:t.blur)&&t.blur()}})(),v&&v(X),s=!0},E=()=>{e=!1,r=!1,i=!1,s=!0,Y.release()},I=t=>{const r=e,i=s;E(),i&&(u(X,t),r?m&&m(X):p&&p(X))},L=((t,e,r,s,i)=>{let n,a,o,d,u,h,b,v=0;const m=s=>{v=Date.now()+2e3,e(s)&&(!a&&r&&(a=l(t,"touchmove",r,i)),o||(o=l(s.target,"touchend",S,i)),d||(d=l(s.target,"touchcancel",S,i)))},p=s=>{v>Date.now()||e(s)&&(!h&&r&&(h=l(c(t),"mousemove",r,i)),b||(b=l(c(t),"mouseup",y,i)))},S=t=>{f(),s&&s(t)},y=t=>{g(),s&&s(t)},f=()=>{a&&a(),o&&o(),d&&d(),a=o=d=void 0},g=()=>{h&&h(),b&&b(),h=b=void 0},X=()=>{f(),g()},w=(e=!0)=>{e?(n||(n=l(t,"touchstart",m,i)),u||(u=l(t,"mousedown",p,i))):(n&&n(),u&&u(),n=u=void 0,X())};return{enable:w,stop:X,destroy:()=>{w(!1),s=r=e=void 0}}})(a.el,(t=>{const e=b(t);return!(r||!s)&&(h(t,X),X.startX=X.currentX,X.startY=X.currentY,X.startTime=X.currentTime=e,X.velocityX=X.velocityY=X.deltaX=X.deltaY=0,X.event=t,(!o||!1!==o(X))&&(Y.release(),!!Y.start()&&(r=!0,0===y?_():(w.start(X.startX,X.startY),!0))))}),(t=>{e?!i&&s&&(i=!0,u(X,t),requestAnimationFrame(G)):(u(X,t),w.detect(X.currentX,X.currentY)&&(w.isGesture()&&_()||M()))}),I,{capture:!1,passive:f}),M=()=>{E(),L.stop(),p&&p(X)};return{enable(t=!0){t||(e&&I(void 0),E()),L.enable(t)},destroy(){Y.destroy(),L.destroy()}}},u=(t,e)=>{if(!e)return;const r=t.currentX,s=t.currentY,i=t.currentTime;h(e,t);const n=t.currentX,l=t.currentY,a=(t.currentTime=b(e))-i;if(a>0&&a<100){const e=(n-r)/a,i=(l-s)/a;t.velocityX=.7*e+.3*t.velocityX,t.velocityY=.7*i+.3*t.velocityY}t.deltaX=n-t.startX,t.deltaY=l-t.startY,t.event=e},h=(t,e)=>{let r=0,s=0;if(t){const e=t.changedTouches;if(e&&e.length>0){const t=e[0];r=t.clientX,s=t.clientY}else void 0!==t.pageX&&(r=t.pageX,s=t.pageY)}e.currentX=r,e.currentY=s},b=t=>t.timeStamp||Date.now(),v=t=>t&&""!==t.dir?"rtl"===t.dir.toLowerCase():"rtl"===(null===document||void 0===document?void 0:document.dir.toLowerCase());t("createSwipeBackGesture",((t,e,s,i,n)=>{const l=t.ownerDocument.defaultView;let a=v(t);const o=t=>a?-t.deltaX:t.deltaX;return d({el:t,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:r=>(a=v(t),(t=>{const{startX:e}=t;return a?e>=l.innerWidth-50:e<=50})(r)&&e()),onStart:s,onMove:t=>{const e=o(t)/l.innerWidth;i(e)},onEnd:t=>{const e=o(t),s=l.innerWidth,i=e/s,c=(t=>a?-t.velocityX:t.velocityX)(t),d=c>=0&&(c>.2||e>s/2),u=(d?1-i:i)*s;let h=0;if(u>5){const t=u/Math.abs(c);h=Math.min(t,540)}n(d,i<=0?.01:r(0,i,.9999),h)}})}))}}}));
