import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as h,i as f}from"./assets/vendor-77e16229.js";const p=document.querySelector("#datetime-picker"),s=document.querySelector(".btn"),b=document.querySelector("[data-days]"),g=document.querySelector("[data-hours]"),y=document.querySelector("[data-minutes]"),S=document.querySelector("[data-seconds]");s.disabled=!0;let i;const v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){Number(t[0])<=Date.now()?f.error({position:"topRight",progressBarColor:"rgb(181, 27, 27)",backgroundColor:"rgb(239, 64, 64)",iconUrl:"/src/img/error.svg",message:"Please choose a date in the future",messageColor:"rgb(255, 255, 255)"}):(s.disabled=!1,i=t[0],console.log(i))}};h("#datetime-picker",v);function k(t){const u=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:u,hours:d,minutes:l,seconds:m}}class C{constructor({onTick:e}){this.isActive=!1,this.onTick=e,this.intervalId=null}start(){if(this.isActive)return;const e=Number(i);this.isActive=!0,this.intervalId=setInterval(()=>{const o=Date.now(),n=e-o,c=k(n);this.onTick(c)},1e3),s.disabled=!0,p.disabled=!0}stop(){clearInterval(this.intervalId),this.isActive=!1}}const a=new C({onTick:T});function T({days:t,hours:e,minutes:o,seconds:n}){b.textContent=r(t),g.textContent=r(e),y.textContent=r(o),S.textContent=r(n),t===0&&e===0&&o===0&&n===0&&a.stop()}function r(t){return String(t).padStart(2,"0")}s.addEventListener("click",a.start.bind(a));
//# sourceMappingURL=commonHelpers.js.map
