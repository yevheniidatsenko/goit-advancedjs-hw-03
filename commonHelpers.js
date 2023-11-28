import{a as d,S as p,i as m}from"./assets/vendor-d7a5248b.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();d.defaults.headers.common["x-api-key"]="live_yoBOBNyy7jzfl4OGADTaPZEi6BY0rlNaAfH9a2VOo3BB2nfgjhZguG2a1DjklnJF";async function y(){return(await d.get("https://api.thecatapi.com/v1/breeds")).data}async function h(e){return(await d.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${e}`)).data}const u=document.querySelector("body"),s=document.querySelector(".select"),a=document.querySelector(".loader"),l=document.querySelector(".cat-info");s.style.display="none";document.addEventListener("DOMContentLoaded",g);async function g(){try{const e=await y();a.style.display="none",b(e),s.style.display="flex",B(),s.addEventListener("change",S)}catch(e){f(e)}}function b(e){const n=e.map(({id:c,name:r})=>`<option value="${c}">${r}</option>`).join("");s.innerHTML=`<select class="breed-select" id="selectElement">${n}</select>`}function S(){const e=v();L(e)}function v(){const e=document.getElementById("selectElement");return e.options[e.selectedIndex].value}async function L(e){try{l.style.display="none",a.style.display="block";const n=await h(e);a.style.display="none",O(n)}catch(n){f(n)}}function O(e){l.style.display="flex";const n=`
    <img class="cat-img" src="${e[0].url}" alt="${e[0].breeds[0].name}" />
    <div class="breed-info">
      <h1 class="cat-name">${e[0].breeds[0].name}</h1>
      <p class="description">${e[0].breeds[0].description}</p>
      <h2 class="temperament">Temperament:</h2>
      <p class="temp-descr">${e[0].breeds[0].temperament}</p>
    </div>
  `;l.innerHTML=n}function B(){new p(".breed-select")}function f(e){u.innerHTML="Oops! Something went wrong! Try reloading the page!",u.style.color="#ff0000",m.error({message:"Error fetching cat information! Try again!",position:"topRight",color:"#ff0000"}),console.log(e.message)}
//# sourceMappingURL=commonHelpers.js.map
