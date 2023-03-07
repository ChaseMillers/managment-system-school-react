import React, { useState, useEffect } from 'react';
import Layout from "../../layout/Layout"
import { getProducts, deleteByID } from "../../api/APIProducts"
import "./Products.css"
import ProductCard from "../productCard/productCard"


const Products = () => {

    const [products, setProducts] = useState(null); 
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [reload, setReload] = useState(false)

    // On page load, GET products 
    useEffect(()=>{
        setLoading(true)
        getProducts({setLoading, setError, setProducts});
    },[reload])


    const MapProducts =()=>(
        error ? <span className='error'> {error} </span> :
        products &&
            products.map((products,i) => 
            <ProductCard 
                key={i}
                products={products}
                deleteByID={deleteByID} 
                setReload={setReload} 
                reload={reload}
            />
            )
      
    )
        return (
            <Layout>
                <div className='center-layout'>
                    <h1 className='title'>Products</h1>
                </div>

                {loading 
                    ? <div className="center-layout">
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