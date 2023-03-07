import axios from 'axios';
// const URL = process.env.REACT_APP_API_LOCAL || "http://localhost:8080"
const URL = "http://localhost:8080"

export const createProduct =({ data, setResponse })=>{

    const formData = {
        "name":data.name,
        "price":data.price,
        "quantity":data.quantity,
        "description":data.description,
        "url":data.url
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

export const deleteByID =({products, setReload, reload})=>{
    axios.delete(`${URL}/api/product/${products.id}`).then(
        response => { 
            console.log(response.data)
            setReload(!reload)
    })
    .catch(error => {
        const msg = error.response.data
        console.log(error.response.data);
    })
}

export const editProduct =({data, setReload, reload, products})=>{
    const formData = {
        "name":data.name,
        "price":data.price,
        "quantity":data.quantity,
        "description":data.description,
        "url":data.url
    }

    axios.put(`${URL}/api/product/${products.id}`, formData).then(
        response => { 
            console.log(response.data)
            setReload(!reload)
    })
    .catch(error => {
        const msg = error.response.data
        console.log(error.response.data);
    })
}