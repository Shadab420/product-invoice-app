import React from 'react';
import EditItemModal from './EditItemModal';
import DeleteItemModal from './DeleteItemModal';



const Item = (props) => {
    const {_id, name, description, price, image} = props.item;

    return (
        <div className="p-4 md:w-2/5 lg:w-1/4">
        <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
            
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={image} alt="Item"/>
          <div className="p-3">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3 font-bold">{ name }</h1>
            <p className="leading-relaxed mb-3">{ description }</p>
            <div className="text-orange-200 font-bold mr-3 flex justify-between items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-gray-300">
              <EditItemModal item = {props}/>
              <DeleteItemModal item={props}/>
              Price: { price } TK.
            </div>
              
          </div>
        </div>
      </div>
    );
}

export default Item;