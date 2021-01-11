import React, { useState } from 'react'
import ItemCount from "./ItemCount"
import { Row, Container, Button } from 'react-bootstrap'

const ItemDetail = ({item}) => {

    const [endBuy, setEndButton] = React.useState(false)

    const buttonEndBuy = e => {
        setEndButton(true)
    }

    return (
        <>
        <Row>
            <Container className="col-md-12">
                <h3>{item.title} - ${item.price}</h3>
                <img src={item.pictureUrl} alt={item.title}/>
                <p>{item.description}</p>
            </Container>
        </Row>
        <Row className="justify-content-center">
                <ItemCount stock={10} initial={1} buttonEndBuy={buttonEndBuy}/>
                {endBuy ? <Button className="btn btn-primary">Finish Buy</Button> : ""}
        </Row>
        </>
    )
}

export default ItemDetail