import React from "react"
import { Container, Row, Button } from 'react-bootstrap'

const ItemCount = ( { stock, initial }) => {

    const [Count, setCount] = React.useState(initial);
  
    let upCount = () => {
        if(Count < stock) {
            setCount(Count + 1)
        }
    }

    let downCount = () => {
        if(Count > 0) {
            setCount(Count - 1)
        }
    }

    if (Count === 0) {
        setCount (Count + 1)
    }

    return (
        <>
            <Container className="container-fluid">
                <Row className="justify-content-center">
                    <Button  variant="light" onClick={downCount}>-</Button>
                        <p className=" m-3">{Count}</p>
                    <Button variant="light" onClick={upCount}>+</Button>
                </Row>
            </Container>
        </>
    )
}

export default ItemCount;