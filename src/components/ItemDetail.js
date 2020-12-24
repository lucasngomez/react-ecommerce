import React from 'react'
import { Container, Row, Card, Button } from 'react-bootstrap'

const ItemDetail = ({ id, title, price, thumbnail }) => {
    return (
        <>
            <Card className="text-center m-2" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={thumbnail} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <p>price: {price}</p>
                    </Card.Text>
                    <Button variant="primary">Add to cart</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default ItemDetail