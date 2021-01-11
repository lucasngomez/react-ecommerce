import React from 'react'
import { NavLink } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Item = ({id,title,price,pictureUrl}) => {
    return (
        <>
        <Card className="text-center m-2" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pictureUrl} alt={`title-id`}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <p>${price}</p>
                    </Card.Text>
                    
            </Card.Body>
            <Card.Footer>
                <NavLink className="" to={`/item/${id}`}>View Details</NavLink>
            </Card.Footer>
        </Card>
        </>
    )
}

export default Item