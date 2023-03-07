import React, { useState, useEffect } from 'react';
import EditProduct from "../editProduct/EditProduct"

const ProductCard = ({products, deleteByID, setReload, reload}) =>{
    const [editProduct, setEditProduct] = useState(false)

    return(
        !editProduct ?
        <div className='product' key={products.id}>
        <div className='btns-container'>
            <button className='blue-btn btn' onClick={()=> setEditProduct(!editProduct)}>
                Edit
            </button>
            <button className='red-btn btn' onClick={()=> deleteByID({products, setReload, reload})}>
                Delete
            </button>
        </div>
        <div className='product-info'>
            <h2>{products.name}</h2>
            
                <img src={products.url} className='product-img'/>
        
            <p className='remove-margin'>Price: {products.price}</p>
            <p className='remove-margin'>Quantity: {products.quantity}</p>
            
            <h3>Description:</h3>
            <p className='description'>{products.description}</p>
        </div>
        </div>
        : <EditProduct products={products} setReload={setReload} reload={reload} />
    )
}

export default ProductCard