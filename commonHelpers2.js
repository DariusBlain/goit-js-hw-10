import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as t}from"./assets/vendor-77e16229.js";const o=document.getElementById("input-number"),c=document.querySelector(".decrement-btn"),m=document.querySelector(".increment-btn");c.addEventListener("click",()=>{o.stepDown()});m.addEventListener("click",()=>{o.stepUp()});const l=document.querySelector(".form");function u(r){r.preventDefault();const e=r.target.delay.value,s=r.target.state.value;return new Promise((n,i)=>{setTimeout(s==="fulfilled"?()=>{n(t.success({position:"topRight",progressBarColor:"rgb(50, 97, 1)",backgroundColor:"rgb(89, 161, 13)",iconUrl:"/src/img/succes.svg",message:`Fulfilled promise in ${e} ms`,messageColor:"rgb(255, 255, 255)"}))}:()=>{i(t.error({position:"topRight",progressBarColor:"rgb(181, 27, 27)",backgroundColor:"rgb(239, 64, 64)",iconUrl:"/src/img/error.svg",message:`Rejected promise in ${e} ms`,messageColor:"rgb(255, 255, 255)"}))},e)})}l.addEventListener("submit",u);
//# sourceMappingURL=commonHelpers2.js.map
