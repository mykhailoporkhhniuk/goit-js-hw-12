import{A as S,S as E,i as h}from"./assets/vendor-65e4e6bd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const q=S.create({baseURL:"https://pixabay.com/api/",params:{key:"44691348-434c97a8e5e51442929a69f01",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15}});async function y(s,t){return(await q.get("",{params:{q:s,page:t}})).data}function P({comments:s,downloads:t,views:o,likes:i,largeImageURL:e,tags:r,webformatURL:a}){return`<li class="gallery-item">
      <a href="${e}" class="gallery-link">
        <img src="${a}" alt="${r}" class="gallery-img">
      </a>
      <div class="info">
      <div class="info-container">
        <p class="key">Likes</p>
        <p class="value">${i}</p>
      <div class="info-container">
        <p class="key">Views</p>
        <p class="value">${o}</p>
      </div>
      <div class="info-container">
        <p class="key">Comments</p>
        <p class="value">${s}</p>
      </div>
      <div class="info-container">
        <p class="key">Downloads</p>
        <p class="value">${t}</p>
      </div>
      </div>
    </li>`}function g(s){return s.map(P).join("")}const v=new E(".gallery-item a",{captionsData:"alt",captionDelay:250}),u=document.querySelector(".search-form"),x=document.querySelector("#search-input"),L=document.querySelector(".loader"),c=document.querySelector(".gallery"),f=document.querySelector(".more-img-btn");let n=1,$=15,l=0,d="";function b(){L.classList.remove("hidden")}function p(){L.classList.add("hidden")}function w(){f.classList.add("hidden")}function B(){f.classList.remove("hidden")}u.addEventListener("submit",async s=>{n=1,s.preventDefault(),d=x.value.trim(),b();try{const{hits:t,totalHits:o}=await y(d,n);if(l=Math.ceil(o/$),console.log(l),t.length===0){h.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"432px",color:"#ef4040"}),c.innerHTML="",m(),p(),u.reset();return}const i=g(t);c.innerHTML=i,v.refresh(),p(),u.reset()}catch{}m()});f.addEventListener("click",async()=>{n++,w(),b();try{const{hits:s}=await y(d,n),t=g(s);c.insertAdjacentHTML("beforeend",t),v.refresh(),O(),p()}catch{}m()});function m(){n>=l?(w(),l&&h.info({title:"",message:"We`re sorry, but you`ve reached the end of search results."})):B()}function O(){const t=c.children[0].getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
