import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as h,i as f}from"./assets/vendor-77e16229.js";const p=document.querySelector("#datetime-picker"),s=document.querySelector(".btn"),b=document.querySelector("[data-days]"),y=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),g=document.querySelector("[data-seconds]");s.disabled=!0;let c;const v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){Number(t[0])<=Date.now()?f.error({position:"topRight",progressBarColor:"rgb(181, 27, 27)",backgroundColor:"rgb(239, 64, 64)",iconUrl:"../img/error.svg",message:"Please choose a date in the future",messageColor:"rgb(255, 255, 255)"}):(s.disabled=!1,c=t[0])}};h("#datetime-picker",v);function k(t){const u=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:u,hours:d,minutes:l,seconds:m}}class C{constructor({onTick:e}){this.isActive=!1,this.onTick=e,this.intervalId=null}start(){if(this.isActive)return;const e=Number(c);this.isActive=!0,this.intervalId=setInterval(()=>{const o=Date.now(),n=e-o,a=k(n);this.onTick(a)},1e3),s.disabled=!0,p.disabled=!0}stop(){clearInterval(this.intervalId),this.isActive=!1}}const i=new C({onTick:T});function T({days:t,hours:e,minutes:o,seconds:n}){b.textContent=r(t),y.textContent=r(e),S.textContent=r(o),g.textContent=r(n),t===0&&e===0&&o===0&&n===0&&i.stop()}function r(t){return String(t).padStart(2,"0")}s.addEventListener("click",i.start.bind(i));
//# sourceMappingURL=commonHelpers.js.map
