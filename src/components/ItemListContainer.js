import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const ItemListContainer = ({title, text}) => {
    return (
        <Container className="mt-3">
            <h3 className="text-center">{title}</h3>
            <p className="text-center font-weight-light">{text}</p>
        </Container>
    )
}

export default ItemListContainer