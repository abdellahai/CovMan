import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import '../styles/Forms.css'

function LoginForm() {
  return (
    <section className="banner">
        <Container>
        <Row className="align-items-center">
            <Col xs = {12} xl = {5} md={3}>
    <Form className = 'Login'>
      <Form.Group className="mb-5" controlId="formBasicEmail">
        {/* <Form.Label className="Login">Email address</Form.Label> */}
        <Form.Control type="email" placeholder="Email" />
     
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        {/* <Form.Label>Password</Form.Label> */}
        <Form.Control type="password" placeholder="Mot de passe" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Souviens-moi" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Se connecter
      </Button>
    </Form>
    <span><p className="interact">Vous avez deja compte</p></span>
    </Col>
    </Row>
    </Container>
    </section>
  );
}

export default LoginForm;