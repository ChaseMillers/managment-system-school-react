import React, { useState, useEffect } from 'react';
import EditProduct from "../editProduct/EditProduct"
import {getProductByID} from "../../api/APIProducts"
import "./ProductCard.css"

const ProductCard = ({products, deleteByID, setReload, reload}) =>{
    const [editProduct, setEditProduct] = useState(false)
    const [expand, setexpand] = useState(false)
    const [info, setMoreInfo] = useState()

    const expandHook =()=>{
        setexpand(!expand)
        getProductByID({products, setMoreInfo})
    }

    return(
        !editProduct ?
        <div className='product-card' onClick={ ()=> expandHook() }>
            <div className='product' key={products.id}>
            <div className='product-info'>
                <h2>{products.name}</h2>
                <img src={products.url} className='product-img'/>
                { expand && info &&
                <div className='more-details'>
                    <h3>Details:</h3>
                    <p className='remove-margin'>Product ID: {info.id}</p>
                    <p className='remove-margin'>Price: {info.price}</p>
                    <p className='remove-margin'>Quantity: {info.quantity}</p>
                    <h3>Description:</h3>
                    <p>{info.description}</p>
                    <div className='btns-container'>
                        <button className='blue-btn btn' onClick={()=> setEditProduct(!editProduct)}>
                            Edit
                        </button>
                        <button className='red-btn btn' onClick={()=> deleteByID({info, setReload, reload})}>
                            Delete
                        </button>
                    </div>
                </div>
                }
            </div>
            </div>
        </div>
        : <EditProduct products={products} setReload={setReload} reload={reload} />
    )
}

export default ProductCard
