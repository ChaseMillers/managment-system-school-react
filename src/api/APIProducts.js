import axios from 'axios';
// const URL = process.env.REACT_APP_API_LOCAL || "http://localhost:8080"
const URL = "http://localhost:8080"

export const createProduct =({ data, setResponse })=>{

    const formData = {
        "name":"Stapler",
        "price":"5.99",
        "quantity":"5",
        "description":"This is a fine stapler, that much is for sure",
        "url": "https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/907183/907183_p_1/907183"
    }

    
    axios.post(`${URL}/api/postProduct`, formData).then(
        response => { // http://httpbin.org/anything <- Post here for testing
       
        const msg = response.data
        setResponse(msg)
        console.log(msg) 
    })
    .catch(error => {
        console.log(error.response.data);
    })
}

export const getProducts =({ setLoading, setProducts})=>{
    
    axios.get(`${URL}/api/getProducts`).then(
        response => { 
       
        const msg = response.data
        setProducts(msg)
        setLoading(false)
    })
    .catch(error => {
        const msg = error.response.data
        setLoading(false)
        console.log(error.response.data);
    })
}

