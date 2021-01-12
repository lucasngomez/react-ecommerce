import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from "./ItemCount"
import { Row, Container, Button } from 'react-bootstrap'

const ItemDetail = ({item, id, qty, itemAdded, onAdd, setItemsToCart, setItemAdded, addItem}) => {

    const [endBuy, setEndButton] = React.useState(false)

    const buttonEndBuy = e => {
        setEndButton(true)
    }

    function addProduct(evt) {
        console.log(item)
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
                    {qty ?
                        <Link to="/cart">
                            <Button variant="light" onClick={setItemsToCart}>Checkout</Button>
                        </Link>   
                        :
                        <ItemCount 
                            className='item-detail-counter' 
                            stockQty={10} 
                            onAdd={onAdd} 
                            itemAdded={itemAdded} 
                            setItemAdded={setItemAdded}
                            addItem={addItem}
                        /> 
                    }
        </Row>
        </>
    )
}

export default ItemDetail