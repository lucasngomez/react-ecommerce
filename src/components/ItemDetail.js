import React from 'react'
import { Card, Button } from 'react-bootstrap'
import ItemCount from './ItemCount'

import { Link } from 'react-router-dom'

const ItemDetail = ({ id, title, price, thumbnail }) => {

    const Stock = 10
    const Initial = 0

    return (
        <>
            <Card className="text-center m-2" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={thumbnail} />
                <Card.Body>
                    <Card.Title><Link to={"/item/"+id} key={id}>{title}</Link></Card.Title>
                    <Card.Text>
                        <p>price: {price}</p>
                    </Card.Text>
                    <ItemCount
                        stock = {Stock}
                        initial = {Initial}
                    />
                    <Button variant="primary">Add to cart</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default ItemDetail