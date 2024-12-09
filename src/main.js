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
const loadMore = document.querySelector(".load-more");
let pages ;
loader.style.visibility = 'hidden';


form.addEventListener("submit", handleSub);
function handleSub(event) {
    event.preventDefault();
    list.innerHTML = "";
    const inputValue = event.target.elements.input.value.trim();
    getUserInput(inputValue)
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
    
    fetchPixabay(inputValue, pages = 1)
        .then(({data}) => { 
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
            loadMore.classList.replace("hidden", "load-more-nohidden")
            
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
            
            event.target.reset();
        })
    
};
let userValue ;
function getUserInput(inputValue) {
    userValue = inputValue;
     return userValue;
    
}


    
loadMore.addEventListener("click", onLoadMore);
async function onLoadMore() {
        pages += 1;
        loader.style.visibility = '';
        await fetchPixabay(userValue, pages)
         .then(({ data }) => {
             list.insertAdjacentHTML("beforeend", crieteMarkap(data.hits));
             lightBox.refresh();
             if (pages >= data.totalHits) {
                 loadMore.classList.replace("load-more-nohidden", "hidden")
                  iziToast.show({
            title: '',
            message: `We're sorry, but you've reached the end of search results.`,
            backgroundColor: `red`,
            messageColor: `#fff`,
            position: "topRight"
        });
             }

             const card = document.querySelector(".gallery-item");
             const cardHeight = card.getBoundingClientRect().height;
             window.scrollBy({
                 left: 0,
                 top: cardHeight * 2,
                 behavior: "smooth"
             })
            
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
        })
}
