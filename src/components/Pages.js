import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { PreviewGrid } from './Elements';

export class Home extends Component {
    render() {
        return (
            <>
                <Container style={{ height: '30px' }}>
                </Container>
                <PreviewGrid />
            </>
        )
    }
}

export class Preview extends Component {
    render() {
        return (
            <Container>
                <h1>Preview...</h1>
            </Container>
        )
    }
}

export class Preview01 extends Component {
    render() {
        return (
            <Container>
                <h1>Preview 01...</h1>
            </Container>
        )
    }
}

export class Preview02 extends Component {
    render() {
        return (
            <Container>
                <h1>Preview 02...</h1>
            </Container>
        )
    }
}

export class Tutorials extends Component {
    render() {
        return (
            <Container>
                <h1>Tutorials...</h1>
            </Container>
        )
    }
}

export class Article02 extends Component {
    render() {
        return (
            <Container>
                <h1>Article 02...</h1>
            </Container>
        )
    }
}

export class Contact extends Component {
    render() {
        return (
            <Container>
                <h1>Contact...</h1>
            </Container>
        )
    }
}