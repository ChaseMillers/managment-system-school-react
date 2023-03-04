import React, { Fragment, Suspense, lazy} from "react";
import Menu from "../menu/Menu"
import "./Layout.css"


const Layout = ({
    children
}) => (
        <Fragment>  
            <header className="app-header">
                <h1>
                <span className="app-title">Product Managment System</span>
                </h1>
            </header>
            <span className="body-container"> 
                <Menu />
                <div className='container-layout'>  
                    {children}
                </div>
            </span>
        </Fragment>
    );

export default Layout;