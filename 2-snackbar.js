import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                              */import{i as s}from"./assets/vendor-BbbuE1sJ.js";const r=document.querySelector(".form");r.addEventListener("submit",e=>{e.preventDefault();const o=Number(r.delay.value),i=r.state.value;m(o,i).then(t=>{s.success({title:"Success",message:`Fulfilled promise in ${t}ms`,backgroundColor:"#59A10D",position:"topRight",timeout:3e3})}).catch(t=>{s.error({title:"Error",message:`Rejected promise in ${t}ms`,backgroundColor:"#EF4040",position:"topRight",timeout:3e3})})});function m(e,o){return new Promise((i,t)=>{setTimeout(()=>{o==="fulfilled"?i(e):t(e)},e)})}
//# sourceMappingURL=2-snackbar.js.map