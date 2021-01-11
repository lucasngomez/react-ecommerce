import React from 'react'
import Item from './Item'
import Loader from './Loader'
import { Row, Container } from 'react-bootstrap'

const ItemList = ({items}) => {

    return (
            <>
                {items.length > 0
                ? items.map(item=>{
                    return (
                        <Item key={item.id} id={item.id} title={item.title} price={item.price} pictureUrl={item.pictureUrl}/>
                    )
                })
                : <Loader/>}
            </>
    )
}

export default ItemList