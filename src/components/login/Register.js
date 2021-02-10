import '../../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Col, Image, Row, Form, FormControl, Button } from 'react-bootstrap';



function Register() {

  return (
      <div>
        <Container>
          <Row className="d-flex justify-content-center">
            <Image className="img-heading mt-4" src=".\logocinestreet.png" rounded width="200" height="125"/>
          </Row>
          <Row className="d-flex justify-content-center">
            <h2 className="font-weight-bold mt-4">Inscription</h2>
          </Row>
          <Container>
            <Form className="mt-4">
              <Form.Group controlId="pseudoForm">
                <Form.Label className="font-weight-bold">Pseudonyme</Form.Label>
                <Form.Control className="input-border shadow" type="text" placeholder="John" />
              </Form.Group>
              <Form.Group controlId="emailForm">
                <Form.Label className="font-weight-bold">Email</Form.Label>
                <Form.Control className="input-border shadow" type="email" placeholder="johnsmith@example.com" />
              </Form.Group>
              <Form.Group controlId="passwordForm">
                <Form.Label className="font-weight-bold">Mot de passe</Form.Label>
                <Form.Control className="input-border shadow" type="password" placeholder="••••••••••" />
              </Form.Group>
              <Form.Group controlId="confirmPasswordForm">
                <Form.Label className="font-weight-bold">Confirmer le mot de passe</Form.Label>
                <Form.Control className="input-border shadow" type="password" placeholder="••••••••••" />
              </Form.Group>
              <Row className="d-flex justify-content-center mt-4">
                <Button type="submit" className="bigButton shadow">INSCRIPTION</Button>            
              </Row>
            </Form>
          </Container>
          <Row className="d-flex justify-content-center">
            <Link className="smallLink my-4" to="/login">Déjà inscrit ? Connectez-vous</Link>       
          </Row>
        </Container>
      </div>

  );
}

export default Register;
