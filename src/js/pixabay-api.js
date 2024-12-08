export { fetchPixabay };
    function fetchPixabay(Url) {
        return fetch(Url) 
        .then((res) => {
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            return res.json();
        })
    }
    
   