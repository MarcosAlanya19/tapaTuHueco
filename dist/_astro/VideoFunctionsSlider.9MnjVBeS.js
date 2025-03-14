import{e as N,c as T,m as w,a as H,b as G,d as F,g as q,f as R,h as X,i as V,j as Y,k as A,S as U,A as _,l as Z}from"./effect-virtual-transition-end.BoPAwFwq.js";import"./index.ai7qpRr1.js";/* empty css                       */function I(b,e,k,p){return b.params.createElements&&Object.keys(p).forEach(g=>{if(!k[g]&&k.auto===!0){let o=N(b.el,`.${p[g]}`)[0];o||(o=T("div",p[g]),o.className=p[g],b.el.append(o)),k[g]=o,e[g]=o}}),k}function J(b){let{swiper:e,extendParams:k,on:p,emit:g}=b;k({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function o(n){let s;return n&&typeof n=="string"&&e.isElement&&(s=e.el.querySelector(n)||e.hostEl.querySelector(n),s)?s:(n&&(typeof n=="string"&&(s=[...document.querySelectorAll(n)]),e.params.uniqueNavElements&&typeof n=="string"&&s&&s.length>1&&e.el.querySelectorAll(n).length===1?s=e.el.querySelector(n):s&&s.length===1&&(s=s[0])),n&&!s?n:s)}function M(n,s){const c=e.params.navigation;n=w(n),n.forEach(l=>{l&&(l.classList[s?"add":"remove"](...c.disabledClass.split(" ")),l.tagName==="BUTTON"&&(l.disabled=s),e.params.watchOverflow&&e.enabled&&l.classList[e.isLocked?"add":"remove"](c.lockClass))})}function d(){const{nextEl:n,prevEl:s}=e.navigation;if(e.params.loop){M(s,!1),M(n,!1);return}M(s,e.isBeginning&&!e.params.rewind),M(n,e.isEnd&&!e.params.rewind)}function P(n){n.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),g("navigationPrev"))}function E(n){n.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),g("navigationNext"))}function y(){const n=e.params.navigation;if(e.params.navigation=I(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(n.nextEl||n.prevEl))return;let s=o(n.nextEl),c=o(n.prevEl);Object.assign(e.navigation,{nextEl:s,prevEl:c}),s=w(s),c=w(c);const l=(t,a)=>{t&&t.addEventListener("click",a==="next"?E:P),!e.enabled&&t&&t.classList.add(...n.lockClass.split(" "))};s.forEach(t=>l(t,"next")),c.forEach(t=>l(t,"prev"))}function $(){let{nextEl:n,prevEl:s}=e.navigation;n=w(n),s=w(s);const c=(l,t)=>{l.removeEventListener("click",t==="next"?E:P),l.classList.remove(...e.params.navigation.disabledClass.split(" "))};n.forEach(l=>c(l,"next")),s.forEach(l=>c(l,"prev"))}p("init",()=>{e.params.navigation.enabled===!1?B():(y(),d())}),p("toEdge fromEdge lock unlock",()=>{d()}),p("destroy",()=>{$()}),p("enable disable",()=>{let{nextEl:n,prevEl:s}=e.navigation;if(n=w(n),s=w(s),e.enabled){d();return}[...n,...s].filter(c=>!!c).forEach(c=>c.classList.add(e.params.navigation.lockClass))}),p("click",(n,s)=>{let{nextEl:c,prevEl:l}=e.navigation;c=w(c),l=w(l);const t=s.target;let a=l.includes(t)||c.includes(t);if(e.isElement&&!a){const i=s.path||s.composedPath&&s.composedPath();i&&(a=i.find(r=>c.includes(r)||l.includes(r)))}if(e.params.navigation.hideOnClick&&!a){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===t||e.pagination.el.contains(t)))return;let i;c.length?i=c[0].classList.contains(e.params.navigation.hiddenClass):l.length&&(i=l[0].classList.contains(e.params.navigation.hiddenClass)),g(i===!0?"navigationShow":"navigationHide"),[...c,...l].filter(r=>!!r).forEach(r=>r.classList.toggle(e.params.navigation.hiddenClass))}});const L=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),y(),d()},B=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),$()};Object.assign(e.navigation,{enable:L,disable:B,update:d,init:y,destroy:$})}function j(b){return b===void 0&&(b=""),`.${b.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function K(b){let{swiper:e,extendParams:k,on:p,emit:g}=b;const o="swiper-pagination";k({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:t=>t,formatFractionTotal:t=>t,bulletClass:`${o}-bullet`,bulletActiveClass:`${o}-bullet-active`,modifierClass:`${o}-`,currentClass:`${o}-current`,totalClass:`${o}-total`,hiddenClass:`${o}-hidden`,progressbarFillClass:`${o}-progressbar-fill`,progressbarOppositeClass:`${o}-progressbar-opposite`,clickableClass:`${o}-clickable`,lockClass:`${o}-lock`,horizontalClass:`${o}-horizontal`,verticalClass:`${o}-vertical`,paginationDisabledClass:`${o}-disabled`}}),e.pagination={el:null,bullets:[]};let M,d=0;function P(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function E(t,a){const{bulletActiveClass:i}=e.params.pagination;t&&(t=t[`${a==="prev"?"previous":"next"}ElementSibling`],t&&(t.classList.add(`${i}-${a}`),t=t[`${a==="prev"?"previous":"next"}ElementSibling`],t&&t.classList.add(`${i}-${a}-${a}`)))}function y(t,a,i){if(t=t%i,a=a%i,a===t+1)return"next";if(a===t-1)return"previous"}function $(t){const a=t.target.closest(j(e.params.pagination.bulletClass));if(!a)return;t.preventDefault();const i=F(a)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===i)return;const r=y(e.realIndex,i,e.slides.length);r==="next"?e.slideNext():r==="previous"?e.slidePrev():e.slideToLoop(i)}else e.slideTo(i)}function L(){const t=e.rtl,a=e.params.pagination;if(P())return;let i=e.pagination.el;i=w(i);let r,x;const v=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,D=e.params.loop?Math.ceil(v/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(x=e.previousRealIndex||0,r=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(r=e.snapIndex,x=e.previousSnapIndex):(x=e.previousIndex||0,r=e.activeIndex||0),a.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const u=e.pagination.bullets;let S,C,O;if(a.dynamicBullets&&(M=G(u[0],e.isHorizontal()?"width":"height"),i.forEach(h=>{h.style[e.isHorizontal()?"width":"height"]=`${M*(a.dynamicMainBullets+4)}px`}),a.dynamicMainBullets>1&&x!==void 0&&(d+=r-(x||0),d>a.dynamicMainBullets-1?d=a.dynamicMainBullets-1:d<0&&(d=0)),S=Math.max(r-d,0),C=S+(Math.min(u.length,a.dynamicMainBullets)-1),O=(C+S)/2),u.forEach(h=>{const f=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(m=>`${a.bulletActiveClass}${m}`)].map(m=>typeof m=="string"&&m.includes(" ")?m.split(" "):m).flat();h.classList.remove(...f)}),i.length>1)u.forEach(h=>{const f=F(h);f===r?h.classList.add(...a.bulletActiveClass.split(" ")):e.isElement&&h.setAttribute("part","bullet"),a.dynamicBullets&&(f>=S&&f<=C&&h.classList.add(...`${a.bulletActiveClass}-main`.split(" ")),f===S&&E(h,"prev"),f===C&&E(h,"next"))});else{const h=u[r];if(h&&h.classList.add(...a.bulletActiveClass.split(" ")),e.isElement&&u.forEach((f,m)=>{f.setAttribute("part",m===r?"bullet-active":"bullet")}),a.dynamicBullets){const f=u[S],m=u[C];for(let z=S;z<=C;z+=1)u[z]&&u[z].classList.add(...`${a.bulletActiveClass}-main`.split(" "));E(f,"prev"),E(m,"next")}}if(a.dynamicBullets){const h=Math.min(u.length,a.dynamicMainBullets+4),f=(M*h-M)/2-O*M,m=t?"right":"left";u.forEach(z=>{z.style[e.isHorizontal()?m:"top"]=`${f}px`})}}i.forEach((u,S)=>{if(a.type==="fraction"&&(u.querySelectorAll(j(a.currentClass)).forEach(C=>{C.textContent=a.formatFractionCurrent(r+1)}),u.querySelectorAll(j(a.totalClass)).forEach(C=>{C.textContent=a.formatFractionTotal(D)})),a.type==="progressbar"){let C;a.progressbarOpposite?C=e.isHorizontal()?"vertical":"horizontal":C=e.isHorizontal()?"horizontal":"vertical";const O=(r+1)/D;let h=1,f=1;C==="horizontal"?h=O:f=O,u.querySelectorAll(j(a.progressbarFillClass)).forEach(m=>{m.style.transform=`translate3d(0,0,0) scaleX(${h}) scaleY(${f})`,m.style.transitionDuration=`${e.params.speed}ms`})}a.type==="custom"&&a.renderCustom?(u.innerHTML=a.renderCustom(e,r+1,D),S===0&&g("paginationRender",u)):(S===0&&g("paginationRender",u),g("paginationUpdate",u)),e.params.watchOverflow&&e.enabled&&u.classList[e.isLocked?"add":"remove"](a.lockClass)})}function B(){const t=e.params.pagination;if(P())return;const a=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let i=e.pagination.el;i=w(i);let r="";if(t.type==="bullets"){let x=e.params.loop?Math.ceil(a/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&x>a&&(x=a);for(let v=0;v<x;v+=1)t.renderBullet?r+=t.renderBullet.call(e,v,t.bulletClass):r+=`<${t.bulletElement} ${e.isElement?'part="bullet"':""} class="${t.bulletClass}"></${t.bulletElement}>`}t.type==="fraction"&&(t.renderFraction?r=t.renderFraction.call(e,t.currentClass,t.totalClass):r=`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),t.type==="progressbar"&&(t.renderProgressbar?r=t.renderProgressbar.call(e,t.progressbarFillClass):r=`<span class="${t.progressbarFillClass}"></span>`),e.pagination.bullets=[],i.forEach(x=>{t.type!=="custom"&&(x.innerHTML=r||""),t.type==="bullets"&&e.pagination.bullets.push(...x.querySelectorAll(j(t.bulletClass)))}),t.type!=="custom"&&g("paginationRender",i[0])}function n(){e.params.pagination=I(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const t=e.params.pagination;if(!t.el)return;let a;typeof t.el=="string"&&e.isElement&&(a=e.el.querySelector(t.el)),!a&&typeof t.el=="string"&&(a=[...document.querySelectorAll(t.el)]),a||(a=t.el),!(!a||a.length===0)&&(e.params.uniqueNavElements&&typeof t.el=="string"&&Array.isArray(a)&&a.length>1&&(a=[...e.el.querySelectorAll(t.el)],a.length>1&&(a=a.find(i=>H(i,".swiper")[0]===e.el))),Array.isArray(a)&&a.length===1&&(a=a[0]),Object.assign(e.pagination,{el:a}),a=w(a),a.forEach(i=>{t.type==="bullets"&&t.clickable&&i.classList.add(...(t.clickableClass||"").split(" ")),i.classList.add(t.modifierClass+t.type),i.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.type==="bullets"&&t.dynamicBullets&&(i.classList.add(`${t.modifierClass}${t.type}-dynamic`),d=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),t.type==="progressbar"&&t.progressbarOpposite&&i.classList.add(t.progressbarOppositeClass),t.clickable&&i.addEventListener("click",$),e.enabled||i.classList.add(t.lockClass)}))}function s(){const t=e.params.pagination;if(P())return;let a=e.pagination.el;a&&(a=w(a),a.forEach(i=>{i.classList.remove(t.hiddenClass),i.classList.remove(t.modifierClass+t.type),i.classList.remove(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.clickable&&(i.classList.remove(...(t.clickableClass||"").split(" ")),i.removeEventListener("click",$))})),e.pagination.bullets&&e.pagination.bullets.forEach(i=>i.classList.remove(...t.bulletActiveClass.split(" ")))}p("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const t=e.params.pagination;let{el:a}=e.pagination;a=w(a),a.forEach(i=>{i.classList.remove(t.horizontalClass,t.verticalClass),i.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass)})}),p("init",()=>{e.params.pagination.enabled===!1?l():(n(),B(),L())}),p("activeIndexChange",()=>{typeof e.snapIndex>"u"&&L()}),p("snapIndexChange",()=>{L()}),p("snapGridLengthChange",()=>{B(),L()}),p("destroy",()=>{s()}),p("enable disable",()=>{let{el:t}=e.pagination;t&&(t=w(t),t.forEach(a=>a.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),p("lock unlock",()=>{L()}),p("click",(t,a)=>{const i=a.target,r=w(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&r&&r.length>0&&!i.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&i===e.navigation.nextEl||e.navigation.prevEl&&i===e.navigation.prevEl))return;const x=r[0].classList.contains(e.params.pagination.hiddenClass);g(x===!0?"paginationShow":"paginationHide"),r.forEach(v=>v.classList.toggle(e.params.pagination.hiddenClass))}});const c=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=w(t),t.forEach(a=>a.classList.remove(e.params.pagination.paginationDisabledClass))),n(),B(),L()},l=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=w(t),t.forEach(a=>a.classList.add(e.params.pagination.paginationDisabledClass))),s()};Object.assign(e.pagination,{enable:c,disable:l,render:B,update:L,init:n,destroy:s})}function Q(b,e,k){const p=`swiper-slide-shadow${` swiper-slide-shadow-${b}`}`,g=q(e);let o=g.querySelector(`.${p.split(" ").join(".")}`);return o||(o=T("div",p.split(" ")),g.append(o)),o}function W(b){let{swiper:e,extendParams:k,on:p}=b;k({creativeEffect:{limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const g=d=>typeof d=="string"?d:`${d}px`;R({effect:"creative",swiper:e,on:p,setTranslate:()=>{const{slides:d,wrapperEl:P,slidesSizesGrid:E}=e,y=e.params.creativeEffect,{progressMultiplier:$}=y,L=e.params.centeredSlides,B=X(e);if(L){const n=E[0]/2-e.params.slidesOffsetBefore||0;P.style.transform=`translateX(calc(50% - ${n}px))`}for(let n=0;n<d.length;n+=1){const s=d[n],c=s.progress,l=Math.min(Math.max(s.progress,-y.limitProgress),y.limitProgress);let t=l;L||(t=Math.min(Math.max(s.originalProgress,-y.limitProgress),y.limitProgress));const a=s.swiperSlideOffset,i=[e.params.cssMode?-a-e.translate:-a,0,0],r=[0,0,0];let x=!1;e.isHorizontal()||(i[1]=i[0],i[0]=0);let v={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};l<0?(v=y.next,x=!0):l>0&&(v=y.prev,x=!0),i.forEach((f,m)=>{i[m]=`calc(${f}px + (${g(v.translate[m])} * ${Math.abs(l*$)}))`}),r.forEach((f,m)=>{let z=v.rotate[m]*Math.abs(l*$);r[m]=z}),s.style.zIndex=-Math.abs(Math.round(c))+d.length;const D=i.join(", "),u=`rotateX(${B(r[0])}deg) rotateY(${B(r[1])}deg) rotateZ(${B(r[2])}deg)`,S=t<0?`scale(${1+(1-v.scale)*t*$})`:`scale(${1-(1-v.scale)*t*$})`,C=t<0?1+(1-v.opacity)*t*$:1-(1-v.opacity)*t*$,O=`translate3d(${D}) ${u} ${S}`;if(x&&v.shadow||!x){let f=s.querySelector(".swiper-slide-shadow");if(!f&&v.shadow&&(f=Q("creative",s)),f){const m=y.shadowPerProgress?l*(1/y.limitProgress):l;f.style.opacity=Math.min(Math.max(Math.abs(m),0),1)}}const h=V(y,s);h.style.transform=O,h.style.opacity=C,v.origin&&(h.style.transformOrigin=v.origin)}},setTransition:d=>{const P=e.slides.map(E=>q(E));P.forEach(E=>{E.style.transitionDuration=`${d}ms`,E.querySelectorAll(".swiper-slide-shadow").forEach(y=>{y.style.transitionDuration=`${d}ms`})}),Y({swiper:e,duration:d,transformElements:P,allSlides:!0})},perspective:()=>e.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}const ee=[{src:"FunctionOne.mp4",text:"Registra una foto, indica la ubicación y describe el problema. ¡Así de fácil!"},{src:"FunctionTwo.mp4",text:"Documenta cualquier irregularidad que encuentres en tu ciudad y repórtala fácilmente."},{src:"FunctionThree.mp4",text:"Sé testigo del impacto de tu acción y recibe notificaciones cuando se solucionen."}],se=()=>A.jsxs("div",{className:"slider-container",children:[A.jsx(U,{className:"swiper-custom",slidesPerView:1,spaceBetween:10,grabCursor:!0,loop:!0,autoplay:{delay:2e4,disableOnInteraction:!1},navigation:{enabled:!0},pagination:{clickable:!0},effect:"creative",speed:1100,creativeEffect:{prev:{shadow:!1,translate:[0,0,-500]},next:{translate:["100%",0,0]}},modules:[J,K,_,W],children:ee.map((b,e)=>A.jsx(Z,{children:A.jsxs("div",{className:"swiper-slide-custom",children:[A.jsx("div",{className:"slide-text",children:b.text}),A.jsx("div",{className:"video-container",children:A.jsx("video",{autoPlay:!0,muted:!0,playsInline:!0,loop:!0,className:"video",children:A.jsx("source",{src:`/videos/${b.src}`,type:"video/mp4"})})})]})},e))}),A.jsx("style",{jsx:!0,children:`
        .slider-container {
          position: relative;
        }

        .swiper-custom {
          width: 560px;
          height: 560px;
          box-shadow: none;
          position: relative;
        }

        .swiper-slide-custom {
          display: grid;
          grid-template-rows: auto 1fr;
          background: white;
          width: 480px;
          height: 480px;
          border-radius: 15px;
          box-shadow: 0px 10px 33px 2px rgba(0, 0, 0, 0.15);
        }

        .slide-text {
          font-size: 18px;
          font-family: 'LeagueSpartan', sans-serif;
          font-weight: 300;
          text-align: center;
          padding: 30px 50px;
	        padding-bottom: 12px;
        }

        .video-container {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          overflow: hidden;
          position: relative;
          width: 100%;
          height: 100%;
        }

        .video {
          position: absolute;
          bottom: -70px;
          width: 100%;
          height: 115%;
          object-fit: cover;
        }

        .swiper-button-prev,
        .swiper-button-next {
          width: 51px;
          height: 51px;
          font-size: 28px !important;
          color: #242F5F !important;
          position: absolute;
          z-index: 10;
          opacity: 1 !important;
          transition: background-color 0.3s ease, color 0.3s ease;
          border-radius: 50%;
          background-color: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          border: 2px solid transparent;
        }

        .swiper-button-prev:hover {
          background-color: #242F5F;
          color: #ffffff !important;
        }

        .swiper-button-next:hover {
          background-color: #242F5F;
          color: #ffffff !important;
        }
        
        .swiper-button-next::after {
          font-size: 28px !important;
          transform: translateX(2px)
        }

        .swiper-button-prev::after {
          font-size: 28px !important;
          transform: translateX(-2px);
        }

        .swiper-pagination-bullet {
          background-color: #242f5f !important;
          opacity: 1;
        }
        
        .swiper-slide {
	        display: grid;
	        align-items: center;
	        justify-items: center;
	        background-color: transparent;
        }

        .swiper-pagination-bullet-active {
          background-color: #e42521 !important;
        }

        .swiper-pagination {
          bottom: 10px !important;
        }

        @media (max-width: 580px) {
          .swiper-custom {
            width: 450px;
            height: 550px;
          }
	        
          .swiper-slide-custom {
            width: 355px;
            height: 455px;
          }
        }

        @media (max-width: 480px) {
          .swiper-button-prev::after,
          .swiper-button-next::after {
            display: none;
          }
	        
          .swiper-custom {
            width: 100vw;
            height: 500px;
          }

          .swiper-slide-custom {
            margin: 0 auto;
            height: 455px;
          }
        }

        @media (max-width: 450px) {
          .swiper-custom {
            width: 100vw;
            height: 470px;
          }

          .swiper-slide-custom {
            margin: 0 auto;
            height: 425px;
          }
        }

        @media (max-width: 420px) {
          .swiper-custom {
            margin: 0 auto;
            height: 460px;
          }

          .swiper-slide-custom {
            margin: 0 auto;
            height: 395px;
          }
        }
			`})]});export{se as default};
