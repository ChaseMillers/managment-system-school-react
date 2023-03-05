import React, { useState, Fragment } from 'react';
import Layout from '../../layout/Layout'
import "./AddProduct.css"
import {createProduct} from '../../api/APIProducts'

const AddProduct = () => {
       
        const [data, setData] = useState({
            name:"Stapler",
            price:"5.99",
            quantity:"5",
            description:"This is a fine stapler, that much is for sure",
            url: "https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/907183/907183_p_1/907183"
        });
        const [response, setResponse] = useState()

        // DATA HANDLING
        const handleChange = name => event => {
            setData({ ...data, [name]: event.target.value });
        };

        // SUBMIT
        const handleSubmit = e => {
            e.preventDefault();
            createProduct({data, setResponse})
        };

        
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
                    // required
                />

                <label htmlFor="price">Price</label>
                <input
                    className="product-input"
                    type="price"
                    name="price"
                    id="price"
                    value={data.price}
                    onChange={handleChange("price")}
                    // required
                />

                <label htmlFor="quantity">Quantity</label>
                <input
                    className="product-input"
                    type="quantity"
                    name="quantity"
                    id="quantity"
                    value={data.quantity}
                    onChange={handleChange("quantity")}
                    // required
                />

                <label htmlFor="url">URL</label>
                <input
                    className="product-input"
                    type="url"
                    name="url"
                    id="url"
                    value={data.url}
                    onChange={handleChange("url")}
                    // required
                />
                
                <label htmlFor="description">Description</label>
                <textarea
                    className="product-input"
                    type="description"
                    name="description"
                    id="description"
                    value={data.description}
                    onChange={handleChange("description")}
                    // required
                />

                <button type="submit">Add Product</button>
            </form>
        );

        return (
            <Layout>
                <div className='center-layout'>
                    {form()}
                </div>
                {response && <p className='success'>Product {response.name} Was Successfully Added.</p>}
            </Layout>
        );

    
}

export default AddProduct;