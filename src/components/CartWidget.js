import React from 'react'
//Bootstrap
import { Button, Badge } from 'react-bootstrap'
//Resources
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const CartBadge = () => {
    return (
        <Button variant="lite">
            <FontAwesomeIcon icon={faShoppingCart}/>
            <Badge variant="ml-3 light">0</Badge>
        </Button>
    )
}

export default CartBadge
