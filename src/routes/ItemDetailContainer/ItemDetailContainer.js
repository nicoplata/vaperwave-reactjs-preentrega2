import React, { useEffect, setTimeout, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({items}) => {

    const [{ id } ]= useParams();
    const [ item, setItem ] = useState({});

    useEffect(()=> {
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(items)
            }, 2000)
        });
        
        promise.then((res) => res.json())
        promise.then((res) => setItem(res)); 
    }, [id]);

    console.log(item)

    return (
        <div> {id} </div>
    )
};

export default ItemDetailContainer;