import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarContent.css';

const SidebarContent = ({ sidebarHandler }) => {
    return (
        <div className="sidebarContent">
            <div className="sidebar-heading">
                <h2>Our Top Products</h2>
            </div>
            <Link className='link-element' onClick={sidebarHandler} to="fruits">Fruits</Link>
            <Link className='link-element' onClick={sidebarHandler} to="vegetables">Vegetables</Link>
            <Link className='link-element' onClick={sidebarHandler} to="dairy">Dairy</Link>
            <Link className='link-element' onClick={sidebarHandler} to="meat">Meat</Link>
            <Link className='link-element' onClick={sidebarHandler} to="gifts">Gifts</Link>
        </div>
    );
}

export default SidebarContent;
