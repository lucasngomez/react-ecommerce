import React, { useState, useEffect } from 'react'

import ItemCount from './ItemCount'
import ItemDetail from './ItemDetail'

import { Container, Row } from 'react-bootstrap'

const ItemListContainer = () => {

    const STOCK = 15
    const INITIAL = 1

    const [ items, setItems ] = useState([])   

    useEffect(() => {
        fetch("https://api.mercadolibre.com/sites/MLA/search?nickname=MOOV-ML")
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            let products = res.results.slice(0,9)
            setItems(products)
        })
    }, [])

    return (
        <Container className="mt-3">
            <Row className="d-flex justify-content-center">
                { items.length === 0 ? <p>Empty!</p> : null }
                { items.map((item) => {
                    return <ItemDetail 
                    id = {item.id}
                    title = {item.title.split('-')[0]}
                    price = {item.price}
                    thumbnail = {item.thumbnail}
                    />
                })}
            </Row>
            <ItemCount
                stock = {STOCK}
                initial = {INITIAL}
            />
        </Container>
    )
}

export default ItemListContainer