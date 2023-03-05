import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

import './Menu.css';

const Menu = () => {

  const ref = useRef();

    const items = [
        {
            path: '/',
            text: 'Products'
        },
        {
            path: '/add-product',
            text: 'Add Product'
        }
    ];
  return (
    <div id="menu-container" ref={ref}>
        
        <ul className="nav">
          
            {items.map((item, i)=> (
                <li className="menu-item" key={i}>
                    <NavLink className='menu-item'
                        style={({ isActive }) => ({
                            color: isActive ? '#ec008c' : '#081530',
                        })}
                        to={item.path}
                    >
                        {item.text}
                    </NavLink>
                </li>
            ))}
         
          
        </ul>
      </div>
  );
};

export default Menu;