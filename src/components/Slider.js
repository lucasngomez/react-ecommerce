import React from 'react'
// Bootstrap
import { Container, Carousel } from 'react-bootstrap'

const Slider = () => {
    return (
        <>
            <Container className="mt-3">
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://essential.vteximg.com.br/arquivos/ids/356858/zx-1600x576.jpg?v=637372316343070000"
                        alt="model zx"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://essential.vteximg.com.br/arquivos/ids/387104/zero1600x576.jpg?v=637408071902170000"
                        alt="voyager collection"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://essential.vteximg.com.br/arquivos/ids/383487/BTS-1600x576.jpg?v=637411388755830000"
                        alt="zero shoes"
                        />
                    </Carousel.Item>
                    </Carousel>
            </Container>
        </>
    )
}

export default Slider;