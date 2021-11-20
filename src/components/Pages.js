import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

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

class Subcribe extends Component {

    render() {
        return (
            <Form >
                <Form.Group className="row g-3" controlId="formBasicEmail">
                    <div className="col-auto">
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </div>
                    <div className="col-auto">
                        <Button variant="primary" type="submit">
                            <strong>Subcribe</strong>
                        </Button>
                    </div>
                </Form.Group>
            </Form>
        );
    }
}