import React from "react"
import { Container, Row, Button } from 'react-bootstrap'

const ItemCount = ( { 
    className,
    stockQty, 
    onAdd, 
    itemAdded, 
    setItemAdded,
    buttonEndBuy }) => {

    const decrease = () => {
        if(itemAdded <= 1) {
        }else {
            setItemAdded(itemAdded - 1);
        }  
    };

    const increase = () => {
        if(itemAdded >= stockQty) {
        } else {
            setItemAdded(itemAdded + 1);
        }
    };


    return (
        <>
        {
            <Container className="container-fluid">
            <Row className="justify-content-center">
                <Button  variant="light" onClick={decrease}>-</Button>
                    <p className=" m-3">{itemAdded}</p>
                <Button variant="light" onClick={increase}>+</Button>
            </Row>
            <Row className="justify-content-center"> 
                <Button variant="light" onClick={onAdd}>Añadir al carro</Button>   
            </Row>
            </Container>
        }
        </>
    )
}

export default ItemCount;