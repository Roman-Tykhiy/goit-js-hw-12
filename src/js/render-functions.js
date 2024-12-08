export { crieteMarkap };
function crieteMarkap(arr) {
    return arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => 
        `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
        <img
        class="gallery-image"
        src="${webformatURL}" 
        data-source="${largeImageURL}"
        alt="${tags}"
        width="360"
    />
    <div class="item-container">
        <p class="text">Likes <span>${likes}</span></p>
        <p class="text">Views <span>${views}</span></p>
        <p class="text">Comments <span>${comments}</span></p>
        <p class="text">Downloads <span>${downloads}</span></p>
    </div></a>
     
    </li>`).join("");
       
}