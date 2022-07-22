import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Banner = () => {
    return(
        <section className="banner">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Bonjour a la Platforme
                        </span>
                        
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;