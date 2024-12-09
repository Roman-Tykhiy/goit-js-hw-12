import{a as y,S as b,i as n}from"./assets/vendor-DEenWwFD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const L="https://pixabay.com/api/",w="47389076-066c089ec4ce8fe31e83dc6f8";async function f(t,r=1){return await y(`${L}`,{params:{key:w,q:`${t}`,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:`${r}`}})}function h(t){return t.map(({webformatURL:r,largeImageURL:s,tags:l,likes:e,views:o,comments:i,downloads:g})=>`<li class="gallery-item">
        <a class="gallery-link" href="${s}">
        <img
        class="gallery-image"
        src="${r}" 
        data-source="${s}"
        alt="${l}"
        width="360"
    />
    <div class="item-container">
        <p class="text">Likes <span>${e}</span></p>
        <p class="text">Views <span>${o}</span></p>
        <p class="text">Comments <span>${i}</span></p>
        <p class="text">Downloads <span>${g}</span></p>
    </div></a>
     
    </li>`).join("")}const m=new b(".gallery-item a",{captionsData:"alt",captionDelay:"250"}),$=document.querySelector(".form"),c=document.querySelector(".list"),u=document.querySelector(".loader"),a=document.querySelector(".load-more");let d;u.style.visibility="hidden";$.addEventListener("submit",v);function v(t){t.preventDefault(),c.innerHTML="";const r=t.target.elements.input.value.trim();if(C(r),r.length<1)return a.classList.replace("load-more-nohidden","hidden"),u.style.visibility="hidden",n.show({title:"",message:"Please enter the searh",backgroundColor:"red",messageColor:"#fff",position:"topRight"});f(r,d=1).then(({data:s})=>{if(s.total===0)return a.classList.replace("load-more-nohidden","hidden"),c.innerHTML="",n.show({title:"",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",messageColor:"#fff",position:"topRight"});c.innerHTML=h(s.hits),m.refresh(),a.classList.replace("hidden","load-more-nohidden")}).catch(s=>{n.show({title:"",message:`${s}`,backgroundColor:"red",messageColor:"#fff",position:"topRight"})}).finally(()=>{t.target.reset()})}let p;function C(t){return p=t,p}a.addEventListener("click",x);async function x(){d+=1,u.style.visibility="",await f(p,d).then(({data:t})=>{c.insertAdjacentHTML("beforeend",h(t.hits)),m.refresh(),d>=t.totalHits&&(a.classList.replace("load-more-nohidden","hidden"),n.show({title:"",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"red",messageColor:"#fff",position:"topRight"}));const s=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:s*2,behavior:"smooth"})}).catch(t=>{n.show({title:"",message:`${t}`,backgroundColor:"red",messageColor:"#fff",position:"topRight"})}).finally(()=>{u.style.visibility="hidden"})}
//# sourceMappingURL=index.js.map
