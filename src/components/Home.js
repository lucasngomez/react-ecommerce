import React from 'react'

import Slider from './Slider'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'

import { Container, Row } from 'react-bootstrap'

const Home = () => {

    const sectionTitle = "Content"
    const textContent = "Eiusmod ipsum dolore dolor dolore tempor veniam. Adipisicing exercitation fugiat duis irure anim. Officia consequat excepteur ullamco adipisicing magna sit mollit. Aliqua commodo consectetur tempor mollit culpa dolor. Eu ex et consectetur sint qui dolor deserunt elit officia. Velit duis irure quis ut qui occaecat magna. In proident consectetur magna ea."
    
    return (
        <>
            <Slider></Slider>
            <ItemListContainer
                title = {sectionTitle}
                text = {textContent}
            />
            <Container>
                <Row className="d-flex justify-content-center">
                    <ItemDetailContainer />
                </Row>
            </Container>
        </>
    )
}

export default Home