import React, { useState, useEffect } from 'react';
import Item from '../item/Item';
import AddItemModal from '../item/AddItemModal';
import Axios from 'axios';

const Items = () => {

    const [items, setItems] = useState([]);

    useEffect(()=>{
        Axios.get('http://localhost:5000/items')
            .then(res => setItems(res.data));
    }, [items])

    return (
        
        <div>

            <AddItemModal/>

            <div className="flex flex-wrap justify-center">
                {
                    items.map(item => <Item item={item}/>)
                }
            </div>

        </div>
    );
}

export default Items;