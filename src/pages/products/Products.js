import React, { useState, useEffect } from 'react';
import Layout from "../../layout/Layout"
import { getProducts, deleteByID } from "../../api/APIProducts"
import "./Products.css"
import ProductCard from "../productCard/ProductCard"

const Products = () => {
    const [products, setProducts] = useState(null); 
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [reload, setReload] = useState(false)
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(null);

    // On page load, GET products 
    useEffect(()=>{
        setLoading(true)
        getProducts({setLoading, setError, setProducts});
    },[reload])

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
        if (!query) {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(
                (product) =>
                    product.name.toLowerCase().indexOf(query) === 0
            );
            setFilteredProducts(filtered);
        }
    };
    

    const MapProducts =()=>(
        error ? <span className='error'> {error} </span> :
        products &&
            products
                .filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((product, i) => 
                    <ProductCard 
                        key={i}
                        products={product}
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
                <input
                    type="text"
                    placeholder="Search for a product.."
                    value={searchQuery}
                    onChange={handleSearch}
                />
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
