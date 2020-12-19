import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Item = ({ id, title, price, brand, pictureUrl }) => {
    return (
        <>
            <Card className="text-center m-2" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={pictureUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <p>id: {id}</p>
                        <p>price: {price}</p>
                        <p>brand: {brand}</p>
                    </Card.Text>
                    <Button variant="primary">Add to cart</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Item
