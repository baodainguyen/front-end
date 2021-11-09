import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import '../scss/style.scss'

export class Footer extends Component {
    render() {
        return (
            <Container>                
                <Header />
                <Content />
            </Container>
        )
    }
}

class Header extends Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
            </div>
        );
    }
}
class Content extends Component {
    render() {
        return (
            <div>
                <h2>Content</h2>
                <p>The content text!!!</p>
            </div>
        );
    }
}