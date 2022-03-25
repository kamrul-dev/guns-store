import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbar';
import './Shop.css'

// Data load on Shop conponent
const Shop = () => {
    const [guns, setGuns] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (gun) => {
        const newCart = [...cart, gun];
        setCart(newCart);
    }

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setGuns(data));
    }, []);
    return (
        <div>
            <Navbar cart={cart}></Navbar>
            <div className="card-container">
                {
                    guns.map(gun => <Card
                        key={gun.id}
                        gun={gun}
                        handleAddToCart={handleAddToCart}
                    />)
                }
            </div>
        </div>
    );
};

export default Shop;