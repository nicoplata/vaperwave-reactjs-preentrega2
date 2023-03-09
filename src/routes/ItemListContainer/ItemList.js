import React from 'react';

const ItemList = ({items}) => {
    return (
        <div className='itemListContainer'>
            {items.map((items) => 
            <>
                <div className="itemList">
                    <img src={items.src}></img>
                    <div className="cardInfo">
                        <p>{items.name}</p>
                        <p>{items.price}</p>
                    </div>
                </div>
            </>
            )};
        </div>
    );
}

export default ItemList