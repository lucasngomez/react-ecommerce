import React from 'react'

import Item from './Item'
import Slider from './Slider'
import ItemListContainer from './ItemListContainer'
import { Container, Row } from 'react-bootstrap'

import { Route, Switch } from 'react-router-dom'

const Main = () => {
    
    return (
        <>
            <Slider></Slider>
            <Container>
                <Switch>
                    <Route path="/" exact>
                        <ItemListContainer />
                    </Route>
                    <Route path="/category/man" exact>
                        <ItemListContainer />
                    </Route>
                    <Route path="/item/:id">
                        <Item />
                    </Route>            
                </Switch>
            </Container>
        </>
    )
}

export default Main