import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { fetchPixabay } from "./js/pixabay-api";
import { crieteMarkap } from "./js/render-functions";
const lightBox = new SimpleLightbox(".gallery-item a", {
    captionsData: "alt",
    captionDelay: "250",
})

const form = document.querySelector(".form");
const list = document.querySelector(".list");
const loader = document.querySelector(".loader");
loader.style.visibility = 'hidden';
const API_KEY = "47389076-066c089ec4ce8fe31e83dc6f8";
form.addEventListener("submit", handleSub);

function handleSub(event) {
    event.preventDefault();
    list.innerHTML = "";
    loader.style.visibility = '';
    const inputValue = event.target.elements.input.value.trim();
        if (inputValue.length < 1) {
        loader.style.visibility = 'hidden';
        return iziToast.show({
            title: '',
            message: "Please enter the searh",
            backgroundColor: `red`,
            messageColor: `#fff`,
            position: "topRight"
        });
        
        
    };
    const params = new URLSearchParams({
        key: API_KEY,
        q: inputValue,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true"
    }); 
    const urlPixeBay = `https://pixabay.com/api/?${params}`;
    
 
    fetchPixabay (urlPixeBay)
        .then((data) => {
            if (data.total === 0) {
                list.innerHTML = "";
                return iziToast.show({
            title: '',
            message: "Sorry, there are no images matching your search query. Please try again!",
            backgroundColor: `red`,
            messageColor: `#fff`,
            position: "topRight"
        })
            };
            list.innerHTML = crieteMarkap(data.hits);
            lightBox.refresh();
    })
        .catch((error)=> {
        iziToast.show({
            title: '',
            message: `${error}`,
            backgroundColor: `red`,
            messageColor: `#fff`,
            position: "topRight"
        });
        
        })
        .finally(() => {
            loader.style.visibility = 'hidden';
            event.target.reset();
       })

};



    
 
