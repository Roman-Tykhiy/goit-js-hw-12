import{a as h,S as g,i as a}from"./assets/vendor-DEenWwFD.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const b="47389076-066c089ec4ce8fe31e83dc6f8";async function d(o,i,t=1){return await h(`${o}`,{params:{key:b,q:`${i}`,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:`${t}`}})}function f(o){return o.map(({webformatURL:i,largeImageURL:t,tags:r,likes:e,views:s,comments:n,downloads:y})=>`<li class="gallery-item">
        <a class="gallery-link" href="${t}">
        <img
        class="gallery-image"
        src="${i}" 
        data-source="${t}"
        alt="${r}"
        width="360"
    />
    <div class="item-container">
        <p class="text">Likes <span>${e}</span></p>
        <p class="text">Views <span>${s}</span></p>
        <p class="text">Comments <span>${n}</span></p>
        <p class="text">Downloads <span>${y}</span></p>
    </div></a>
     
    </li>`).join("")}const L=new g(".gallery-item a",{captionsData:"alt",captionDelay:"250"}),$=document.querySelector(".form"),l=document.querySelector(".list"),c=document.querySelector(".loader"),u=document.querySelector(".load-more");let p;c.style.visibility="hidden";u.style.visibility="hidden";const m="https://pixabay.com/api/";$.addEventListener("submit",v);function v(o){o.preventDefault(),p=1,l.innerHTML="",c.style.visibility="";const i=o.target.elements.input.value.trim();if(w(i),i.length<1)return c.style.visibility="hidden",a.show({title:"",message:"Please enter the searh",backgroundColor:"red",messageColor:"#fff",position:"topRight"});d(m,i,p).then(({data:t})=>{if(t.total===0)return l.innerHTML="",a.show({title:"",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",messageColor:"#fff",position:"topRight"});l.innerHTML=f(t.hits),L.refresh(),u.style.visibility=""}).catch(t=>{a.show({title:"",message:`${t}`,backgroundColor:"red",messageColor:"#fff",position:"topRight"})}).finally(()=>{c.style.visibility="hidden",o.target.reset()})}function w(o){u.addEventListener("click",i);async function i(){p+=1,await d(m,o,p).then(({data:t})=>{l.insertAdjacentHTML("beforeend",f(t.hits))}).catch(t=>{a.show({title:"",message:`${t}`,backgroundColor:"red",messageColor:"#fff",position:"topRight"})}).finally(()=>{})}}
//# sourceMappingURL=index.js.map
