import React, { useState } from 'react';
import Item from '../item/Item';
import AddItemModal from '../item/AddItemModal';


let fakeData = [
    {
        _id: 1,
        name: 'Kola',
        description: "description lorem ipsum description lorem ipsum description lorem ipsum",
        price: 5,
        image: 'https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-320-80.jpg'
    },

    {
        _id: 2,
        name: 'Aam',
        description: "description lorem ipsum description lorem ipsum description lorem ipsum",
        price: 10,
        image: 'https://previews.123rf.com/images/volff/volff1603/volff160300288/54522547-mango-cubes-and-mango-fruit-isolated-on-a-white-background-.jpg'
    },

    {
        _id: 3,
        name: 'Khejur',
        description: "description lorem ipsum description lorem ipsum description lorem ipsum",
        price: 20,
        image: 'https://upokari.com/wp-content/uploads/2018/04/1-2.jpg'
    }
]

const Items = () => {

    return (
        
        <div>

            <AddItemModal/>

            <div className="flex flex-wrap justify-center">
                {
                    fakeData.map(item => <Item item={item}/>)
                }
            </div>

        </div>
    );
}

export default Items;