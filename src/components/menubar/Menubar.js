import React, { useState } from 'react';
import './menubar.css';
import { Link } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';


const Menubar = ({children}) => {

    return (
        <div className="min-h-screen">
            <div className="menubar xs:w-1/3 sm:w-1/3 lg:w-1/5" id="menubar">
                <div>
                    <h1>Menubar</h1>
                </div>
                <hr/>
                <div className="flex flex-col menu">
                    <Link to="/dashboard"><h1 className="menu-item">Items</h1></Link>
                    <Link to="/login"><h1 className="menu-item">Invoice</h1></Link>
                    <Link to='/'><span className="flex justify-center items-center"><FaSignOutAlt/><h1 className="menu-item">Logout</h1></span></Link>
                </div>
            </div>
            <div className="mx-auto">
                {children}
            </div>
        </div>
    )
}

export default Menubar;
