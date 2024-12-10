import axios from "axios";
export { per_page };
export { fetchPixabay };
const urlPixeBay = `https://pixabay.com/api/`;    
const API_KEY = "47389076-066c089ec4ce8fe31e83dc6f8";
const per_page = 15;
async function fetchPixabay(userInput, pages = 1) {
       const responce = await axios(`${urlPixeBay}`, {
           params: {
               key: API_KEY,
               q: `${userInput}`,
               image_type: "photo",
               orientation: "horizontal",
               safesearch: "true",
               per_page,
               page: `${pages}`
           }
           
       }); 
    
    
       return responce;
       
    }
    
   