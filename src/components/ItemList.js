import React, { useState, useEffect } from 'react'
import Item from './Item'

const ItemList = () => {

    const [products, setProducts] = useState([])

    let productList = [
                {
                    "id": 0,
                    "title": "puma cali sport mix",
                    "price": 120,
                    "brand": "puma",
                    "pictureUrl": "../resources/product_01.png"
                },
                {
                    "id": 1,
                    "title": "nike air force 1 '07",
                    "price": 120,
                    "brand": "nike",
                    "pictureUrl": "../resources/product_01.png"
                },
                {
                    "id": 2,
                    "title": "adidas originals superstar",
                    "price": 120,
                    "brand": "adidas",
                    "pictureUrl": "../resources/product_01.png"
                }
            ]

        const injectProducts = () => {
            setProducts(productList)
        }

        useEffect(() => {
            setTimeout(function(){ 
                injectProducts()
             }, 3000);
        }, [])

        return (
            products.map((product) => {
                return <Item 
                            id = {product.id}
                            title = {product.title}
                            price = {product.price}
                            brand = {product.brand}
                            pictureUrl = {product.pictureUrl}
                        />
            })
        )
}

export default ItemList