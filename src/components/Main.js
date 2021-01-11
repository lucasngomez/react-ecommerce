import Item from './Item'
import Slider from './Slider'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'

import { Container } from 'react-bootstrap'

import { Route, Switch } from 'react-router-dom'

const Main = () => {

    return (
        <>
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
        </>
    )
}

export default Main