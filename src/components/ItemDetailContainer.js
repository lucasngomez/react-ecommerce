import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [ items, setItems ] = useState([])   

    useEffect(() => {
        fetch("https://api.mercadolibre.com/sites/MLA/search?nickname=MOOV-ML")
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            let products = res.results.slice(0,9)
            setItems(products)
            console.log(products)
        })
    }, [])

    return (
        <>
            { items.length == 0 ? <p>There is any items!</p> : null }
            { items.map((item) => {
                return <ItemDetail 
                id = {item.id}
                title = {item.title.split('-')[0]}
                price = {item.price}
                thumbnail = {item.thumbnail}
                />
            })}
        </>
    )

}

export default ItemDetailContainer