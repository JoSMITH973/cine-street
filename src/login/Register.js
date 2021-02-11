import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter, Switch, Route, Link, useHistory } from "react-router-dom";
import { Container, Col, Image, Row, Form, FormControl, Button } from 'react-bootstrap';
import Login from './Login';
import ForgetPassword from './forgetPassword';
import getIcon from '../functions/global'

function Register() {
    const history = useHistory();
    const goLogin= () => history.push('/');


  return (
      <div>
        <BrowserRouter>
            <Container>
            <Row className="d-flex justify-content-center">
                <Image className="img-heading mt-4" src={getIcon('icones/logo.png')} rounded width="200" height="125"/>
            </Row>
            <Row className="d-flex justify-content-center">
                <h2 className="font-weight-bold mt-4">Inscription</h2>
            </Row>
            </Container>
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
            <Container>
            <Row className="d-flex justify-content-center">
                {/* <Link className="smallLink my-4" to="/" onClick={goLogin}>Déjà inscrit ? Connectez-vous</Link>        */}
                <p className="smallLink my-4" onClick={goLogin}> Déjà inscrit ? Connectez-vous</p>       
            </Row>
            </Container>
        </BrowserRouter>
      </div>

  );
}

export default Register;