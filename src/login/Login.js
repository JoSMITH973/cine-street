import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Register';
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link,useHistory } from "react-router-dom";
import { Container, Col, Image, Row, Form, FormControl, Button } from 'react-bootstrap';
import { logDOM } from '@testing-library/react';

function getIcon(link) {
    let url = process.env.PUBLIC_URL+link
    return url
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                        token: '',
                        mail: '',
                        pwd: ''
                    };
    
        this.mailChange = this.mailChange.bind(this);
        this.pwdChange = this.pwdChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    mailChange(event) {
        this.setState({mail: event.target.value});
    }
    
    pwdChange(event) {
        this.setState({pwd: event.target.value});
    }
    
    handleSubmit(event) {
        // alert('Mail : ' + this.state.mail + '   Password : ' +this.state.pwd);
        fetch(`http://localhost:3306/GetUser/${(this.state.mail)}/${(this.state.pwd)}`)
        .then(res => {
            return res.json().then(data => {
                // this.setState({key: data[0].date_ajout});
                console.log(data[0].date_ajout);
            })
        })
        .then(state => {
            this.setState(state);
            // console.log(state);
        })
        .catch(err => {
            alert('Votre email ou mot de passe est incorrect !')
            console.log(err);
        })
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Container>
                    <Row className="d-flex justify-content-center">
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Image className="img-heading mt-4" src={getIcon('icones/logo.png')} rounded width="200" height="125"/>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <h2 className="font-weight-bold mt-4">Connexion</h2>
                    </Row>
                </Container>
                <Container>
                    <Form className="mt-4" onSubmit={this.handleSubmit}>
                        <Form.Group controlId="pseudoForm">
                            <Form.Label className="font-weight-bold">Adresse email ou pseudonyme</Form.Label>
                            <Form.Control value={this.state.mail} onChange={this.mailChange} className="input-border shadow" type="text" placeholder="johnsmith@example.com" />
                        </Form.Group>
                            <Form.Group controlId="passwordForm">
                            <Form.Label className="font-weight-bold">Mot de passe</Form.Label>
                            <Form.Control value={this.state.pwd} onChange={this.pwdChange} className="input-border shadow" type="password" placeholder="•••••••••••••" />
                        </Form.Group>
                        <Row className="d-flex justify-content-center mt-4">
                            <Button type="submit" className="bigButton shadow">CONNEXION</Button>            
                        </Row>
                    </Form>
                </Container>
                <Container>
                    <Row className="justify-content-around  my-4">
                        <Link className="smallLink" to="/forgetPassword">Mot de passe oublié ?</Link>
                        <Link className="smallLink" to="/register">Inscription</Link>       
            
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Login;
