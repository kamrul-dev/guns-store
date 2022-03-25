import React from 'react';
import './Card.css'
import { FiShoppingCart } from 'react-icons/fi';

// Card componet for display product information
const Card = ({gun}) => {
    const {img, name, bullet, capacity, price, action} = gun;
    return (
        <div className="card">
            <div className='image-container'>
                <img src={img} alt="" />
            </div>
            <div className='gun-info'>
                <h1>{name}</h1>
                <p>Bullet type: {bullet}</p>
                <p>Capacity: {capacity}</p>
                <p>Action: {action}</p>
            </div>
            <div className='add-to-cart'>
                <button className='icon'><FiShoppingCart/></button>
                <h1>Price: ${price}</h1>
            </div>
        </div>
    );
};

export default Card;