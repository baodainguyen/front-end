import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Subcribe } from './Elements';

export class MainMenu extends Component {
    render() {
        return (
            <Container>
                <h1>Main Menu Page ...</h1>
            </Container>
        )
    }
}

export class SubMenu extends Component {
    render() {
        return (
            <Container>
                <h1>Sub Page ...</h1>
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

