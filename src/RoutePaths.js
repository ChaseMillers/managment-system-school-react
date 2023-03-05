import React from 'react';
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Products from "./pages/products/Products"
import AddProduct from "./pages/addProduct/AddProduct"

const RoutePaths = () => {
  

    return(
        <Router>
            <Routes>
                <Route path="/" element={<Products />} /> 
                <Route path="/add-product" element={<AddProduct />} /> 
            </Routes>
        </Router>
    )
}
export default RoutePaths; 