import React, { useEffect, useState } from 'react';
import './itemListContainer.css'
import ItemList from './ItemList';
import { Link } from 'react-router-dom';

const items = [
    {
        id:"1",
        name: "vape box mod 80w",
        category: "PODS",
        categoryId: "1",
        src: "./images/pod-vapeboxmod80w.jpg",
        liked: false,
        price: "$6.000"
    },
    {
        name: "voopoo vmate pod kit",
        id:"2",
        category: "PODS",
        categoryId: "1",
        src: "./images/pod-voopoo-vmate.jpg",
        liked: false,
        price: "$5.000"
    },
    {
        name: "voopoo drag max kit",
        id:"3",
        category: "PODS",
        categoryId: "1",
        src: "./images/pod-voopoodragmax.jpg",
        liked: false,
        price: "$50.000"
    },
    {
        name: "vapoeresso gen s kit",
        id:"4",
        category: "PODS",
        categoryId: "1",
        src: "./images/pod-vapoeresso.jpg",
        liked: false,
        price: "$42.500"
    },
    {
        name: "monkey fart",
        id:"5",
        category: "SMOKES",
        categoryId: "2",
        src: "./images/smoke-monkeyfart.jpg",
        liked: false,
        price: "$3.000"
    },
    {
        name: "ambicion",
        id:"6",
        category: "SMOKES",
        categoryId: "2",
        src: "./images/smoke-ambicion.jpg",
        liked: false,
        price: "$3.750"
    },
    {
        name: "golden virginia",
        id:"7",
        category: "SMOKES",
        categoryId: "2",
        src: "./images/smoke-goldenvirginia.jpg",
        liked: false,
        price: "$3.000"
    },
    {
        name: "croissant",
        id:"8",
        category: "SMOKES",
        categoryId: "2",
        src: "./images/smoke-croissant.jpg",
        liked: false,
        price: "$3.700"
    },
    {
        name: "resistencia jomo lite 40",
        id:"9",
        category: "RESISTENCIAS",
        categoryId: "3",
        src: "./images/resistencia-jomolite40.jpg",
        liked: false,
        price: "$1.750"
    },
    {
        name: "resistencia vapepen",
        id:"10",
        category: "RESISTENCIAS",
        categoryId: "3",
        src: "./images/resistencia-vapepen.jpg",
        liked: false,
        price: "$1.750"
    },
    {
        name: "resistencia m2",
        id:"11",
        category: "RESISTENCIAS",
        categoryId: "3",
        src: "./images/resistencia-m2.jpg",
        liked: false,
        price: "$1.750"
    },
    {
        name: "resistencia vapoeresso euc",
        id:"12",
        category: "RESISTENCIAS",
        categoryId: "3",
        src: "./images/resistencia-vapoeresso euc.jpg",
        liked: false,
        price: "$1.750"
    }
]

const ItemListContainer = () => {

    const [item, setItem] = useState([]);

    useEffect(() => {
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(items)
            }, 2000)
        })
        
        promise.then((res) => res.json())
        promise.then((res) => setItem(res))

    }, [])

    return (

    <Link to={`/item/${item.id}`}><ItemList key={item.id} items={item}/></Link>
    )
}

export default ItemListContainer