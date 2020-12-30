import { React, useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

import ItemCount from './ItemCount'

import { Card, Button } from 'react-bootstrap'

const Item = () => {

    const paramsURL = useParams()
    const Stock = 10
    const Initial = 0
    
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

    let item = []

    if (items != null) {
        items.forEach(element => {
            if (element.id === paramsURL.id ) {
                item = element
                console.log(element)
            }
        })
    }
    return (
        <>
            {
                <Card className="text-center m-2" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.thumbnail}/>
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    <p>price: {item.price}</p>
                                </Card.Text>
                                <ItemCount
                                    stock = {Stock}
                                    initial = {Initial}
                                />
                                <Button variant="primary">Add to cart</Button>
                        </Card.Body>
                </Card>
            }
        </>
    )
}

export default Item
