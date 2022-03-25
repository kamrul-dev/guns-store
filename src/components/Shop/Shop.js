import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbar';
import './Shop.css'

// Data load on Shop conponent
const Shop = () => {
    const [guns, setGuns] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setGuns(data));
    }, []);
    return (
        <div>
            <Navbar></Navbar>
            <div className="card-container">
                {
                    guns.map(gun => <Card
                        key={gun.id}
                        gun={gun}
                    />)
                }
            </div>
        </div>
    );
};

export default Shop;