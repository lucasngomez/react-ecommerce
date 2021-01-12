import React, { useState } from "react"

import Slider from './Slider'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import CartContext from './CartContext'

import { Provider } from "./Context"

import { Container } from 'react-bootstrap'

import { Route, Switch } from 'react-router-dom'

const Main = () => {

    const [ valor, setValor ] = useState(true)

    return (
        <>
            <CartContext>
                <Slider></Slider>
                <Container>
                <Switch>

                    <Route path="/" exact>
                        <ItemListContainer/> 
                    </Route>

                    <Route path="/category/:id">
                        <ItemListContainer/> 
                    </Route>

                    <Route path="/item/:id">
                        <ItemDetailContainer/>
                    </Route>

                </Switch>
                </Container>
            </CartContext>
        </>
    )
}

export default Main