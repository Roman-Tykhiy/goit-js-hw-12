import{a as h,S as g,i as a}from"./assets/vendor-DEenWwFD.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(e){if(e.ep)return;e.ep=!0;const i=r(e);fetch(e.href,i)}})();const b="https://pixabay.com/api/",L="47389076-066c089ec4ce8fe31e83dc6f8";async function f(t,s=1){return await h(`${b}`,{params:{key:L,q:`${t}`,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:`${s}`}})}function m(t){return t.map(({webformatURL:s,largeImageURL:r,tags:n,likes:e,views:i,comments:o,downloads:y})=>`<li class="gallery-item">
        <a class="gallery-link" href="${r}">
        <img
        class="gallery-image"
        src="${s}" 
        data-source="${r}"
        alt="${n}"
        width="360"
    />
    <div class="item-container">
        <p class="text">Likes <span>${e}</span></p>
        <p class="text">Views <span>${i}</span></p>
        <p class="text">Comments <span>${o}</span></p>
        <p class="text">Downloads <span>${y}</span></p>
    </div></a>
     
    </li>`).join("")}const $=new g(".gallery-item a",{captionsData:"alt",captionDelay:"250"}),v=document.querySelector(".form"),l=document.querySelector(".list"),c=document.querySelector(".loader"),d=document.querySelector(".load-more");let u;c.style.visibility="hidden";d.style.visibility="hidden";v.addEventListener("submit",w);function w(t){t.preventDefault(),u=0,l.innerHTML="",c.style.visibility="";const s=t.target.elements.input.value.trim();if(x(s),s.length<1)return c.style.visibility="hidden",a.show({title:"",message:"Please enter the searh",backgroundColor:"red",messageColor:"#fff",position:"topRight"});f(s,u=1).then(({data:r})=>{if(r.total===0)return l.innerHTML="",a.show({title:"",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",messageColor:"#fff",position:"topRight"});l.innerHTML=m(r.hits),$.refresh(),d.style.visibility=""}).catch(r=>{a.show({title:"",message:`${r}`,backgroundColor:"red",messageColor:"#fff",position:"topRight"})}).finally(()=>{c.style.visibility="hidden",t.target.reset()})}let p;function x(t){return p=t,p}d.addEventListener("click",C);async function C(){u+=1,await f(p,u).then(({data:t})=>{l.insertAdjacentHTML("beforeend",m(t.hits))}).catch(t=>{a.show({title:"",message:`${t}`,backgroundColor:"red",messageColor:"#fff",position:"topRight"})}).finally(()=>{})}
//# sourceMappingURL=index.js.map
