import '../../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Register';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Col, Image, Row, Form, FormControl, Button } from 'react-bootstrap';

function Login() {
  return (
    <div>
      <Container>
        <Row className="d-flex justify-content-center">
          <Image className="img-heading mt-4" src=".\logocinestreet.png" rounded width="200" height="125"/>
        </Row>
        <Row className="d-flex justify-content-center">
          <h2 className="font-weight-bold mt-4">Connexion</h2>
        </Row>
          <Container>
            <Form className="mt-4">
              <Form.Group controlId="pseudoForm">
                <Form.Label className="font-weight-bold">Adresse email ou pseudonyme</Form.Label>
                <Form.Control className="input-border shadow" type="text" placeholder="johnsmith@example.com" />
              </Form.Group>
              <Form.Group controlId="passwordForm">
                <Form.Label className="font-weight-bold">Mot de passe</Form.Label>
                <Form.Control className="input-border shadow" type="password" placeholder="monsupermdp" />
              </Form.Group>
              <Row className="d-flex justify-content-center mt-4">
                <Button type="submit" className="bigButton shadow">CONNEXION</Button>            
              </Row>
            </Form>
        </Container>
        <Row className="justify-content-around  my-4">
          <Link className="smallLink" to="/forgetPassword">Mot de passe oublié ?</Link>
          <Link className="smallLink" to="/register">Inscription</Link>            
        </Row>
      </Container>
    </div>

  );
}

export default Login;
