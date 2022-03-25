import React from 'react';
import './Navbar.css';
import { FiShoppingCart } from 'react-icons/fi';
const Navbar = () => {
    return (
        <div className='navbar'>
            <h1>Guns Store</h1>
            <div className='cart-counter'>
                <span></span>
                <FiShoppingCart className='icon' color='#FFFFFF' />
            </div>
        </div>
    );
};

export default Navbar;