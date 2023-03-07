import React, { useState, Fragment } from 'react';
import Layout from '../../layout/Layout'
import "./EditProduct.css"
import {editProduct} from '../../api/APIProducts'

const EditProduct = ({products, setReload, reload}) => {
       
        const [data, setData] = useState({
            name:products.name,
            price:products.price,
            quantity:products.quantity,
            description:products.description,
            url: products.url
        });
        const [response, setResponse] = useState()

        // DATA HANDLING
        const handleChange = name => event => {
            setData({ ...data, [name]: event.target.value });
        };

        // SUBMIT
        const handleSubmit = e => {
            e.preventDefault();
            editProduct({data, setReload, reload, products})
        };

        const cancle =()=> {
            setReload(!reload)
        }

        const form = () => (
        
             <form onSubmit={handleSubmit} className="center">
             <h1 className='title'>Add Product</h1>
             

                <label htmlFor="name">Name</label>
                <input
                    className="product-input"
                    type="text"
                    name="name"
                    id="name"
                    value={data.name}
                    onChange={handleChange("name")}
                    required
                />

                <label htmlFor="price">Price</label>
                <input
                    className="product-input"
                    type="price"
                    name="price"
                    id="price"
                    value={data.price}
                    onChange={handleChange("price")}
                    required
                />

                <label htmlFor="quantity">Quantity</label>
                <input
                    className="product-input"
                    type="quantity"
                    name="quantity"
                    id="quantity"
                    value={data.quantity}
                    onChange={handleChange("quantity")}
                    required
                />

                <label htmlFor="url">URL</label>
                <input
                    className="product-input"
                    type="url"
                    name="url"
                    id="url"
                    value={data.url}
                    onChange={handleChange("url")}
                    required
                />
                
                <label htmlFor="description">Description</label>
                <textarea
                    className="product-input"
                    type="description"
                    name="description"
                    id="description"
                    value={data.description}
                    onChange={handleChange("description")}
                    required
                />

                <button type="submit" className='green-btn'>Save</button>
                <button  className='red-btn' onClick={()=> cancle()}>Cancle</button>
            </form>
        );

        return (
            <div className='center-layout'>
                {form()}
            </div>
        );

    
}

export default EditProduct;