import React from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import { Container, Row } from 'react-bootstrap'

const ItemListContainer = ({ title, text }) => {

    const STOCK = 15
    const INITIAL = 1

    return (
        <Container className="mt-3">
            <h3 className="text-center">{title}</h3>
            <p className="text-center font-weight-light">{text}</p>
            <Row className="d-flex justify-content-center">
                <ItemList/>
            </Row>
            <ItemCount
                stock = {STOCK}
                initial = {INITIAL}
            />
        </Container>
    )
}

export default ItemListContainer