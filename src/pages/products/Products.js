import React, { useState, useEffect } from 'react';
import Layout from "../../layout/Layout"
import { getProducts } from "../../api/APIProducts"
import "./Products.css"

const Products = () => {

    const [products, setProducts] = useState(null); 
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    // On page load, GET products 
    useEffect(()=>{
        setLoading(true)
        getProducts({setLoading, setError, setProducts});
    },[])

    const MapProducts =()=>(
        error ? <span className='error'> {error} </span> :
        products &&
            products.map((products) => 
            <div className='product' key={products.id}>
                <div className='btns-container'>
                    <button className='red-btn btn'>Edit</button>
                    <button className='blue-btn btn'>Delete</button>
                </div>
                <div className='product-info'>
                    <h2>{products.name}</h2>
                    
                        <img src={products.url} className='product-img'/>
                
                    <p className='remove-margin'>Price: {products.price}</p>
                    <p className='remove-margin'>Quantity: {products.quantity}</p>
                    
                    <h3>Description:</h3>
                    <p>{products.description}</p>
                </div>
            </div>
            )
      
    )
        return (
            <Layout>
                <div className='center-layout'>
                    <h1 className='title'>Products</h1>
                </div>

                {loading 
                    ? <div className="loading-container">
                        <h2>Loading..</h2>
                    </div>
                    :
                    <div className='set-width'>
                        <div className='product-container'>
                            <MapProducts error={error}/>
                        </div>
                    </div>
                   
                    }
            </Layout>
        );

    
}

export default Products;