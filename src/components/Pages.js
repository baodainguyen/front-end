import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Subcribe } from './Elements';
import { Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';
export class MainMenu extends Component {
    render() {
        return (
            <Container>
                <h1><Nav.Link as={Link} to="/" href="#home">Main Menu Page ...</Nav.Link></h1>
            </Container>
        )
    }
}

export class SubMenu extends Component {
    render() {
        return (
            <Container>
                <h1><Nav.Link as={Link} to="/" href="#home">Sub Page ...</Nav.Link></h1>
            </Container>
        )
    }
}

export class Contact extends Component {
    render() {
        return (
            <Container>
                <h1>Contact...</h1>
                <Subcribe />
            </Container>
        )
    }
}

