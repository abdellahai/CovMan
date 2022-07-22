import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {ArrowRightCircle} from 'react-bootstrap-icons';
const Banner = () => {
    return(
        <section className="banner">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1 className="tagline">
                            {'Bonjour a la Platforme'}<span className='wrap'>CovMan</span>
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum sagittis erat eu gravida. Pellentesque eget libero pulvinar, commodo nulla at, rutrum mi. Donec fermentum turpis in elit scelerisque, vitae dapibus orci pulvinar. Mauris laoreet, nibh imperdiet porttitor feugiat, ex dui finibus orci, id pulvinar velit lectus sit amet est. Vestibulum finibus dignissim diam. Vivamus pulvinar est in ex tincidunt dapibus. Suspendisse sit amet odio turpis.</p>
                        <Button variant='outline-primary' href='/register'>Commencer a utiliser <ArrowRightCircle size = {25}/></Button>                    
                    </Col>
                    <Col xs={12} md={6} xl={7}>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;