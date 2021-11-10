import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../scss/style.scss'

export class Footer extends Component {
    render() {
        return (
            <Container>
                <Content />
            </Container>
        )
    }
}

class Content extends Component {
    render() {
        return (
            <div>
                <h2>Footer's Content</h2>
                <p>The content text!!!</p>
            </div>
        );
    }
}

export class PreviewGrid extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col md={4} xs={12} className="d-flex align-items-center">
                        <div>
                            <h5>- Super Easy way to build perfect website</h5>
                            <h3>Meet Wizixo - Creative Agency Multi-Purpose Theme</h3>
                            <p>Ultimate all-around theme specially designed for the agency, marketing firms, portfolio, creative, startup, landing page and corporate.</p>
                            <Button variant="dark">Purchase Now!</Button>{' '}
                        </div>
                    </Col>
                    <Col md={8} xs={12}>
                        <div className="position-relative w-100 dnb-card-group" style={{ backgroundColor: '#ffffff' }}>
                            <div className="position-absolute rounded dnb-card1" style={{ backgroundColor: 'cyan' }}></div>
                            <div className="position-absolute rounded dnb-card2" style={{ backgroundColor: 'pink' }}></div>
                            <div className="position-absolute rounded dnb-card3" style={{ backgroundColor: 'blue' }}></div>
                            <div className="position-absolute rounded dnb-card4" style={{ backgroundColor: 'green' }}></div>
                            <div className="position-absolute rounded dnb-card5" style={{ backgroundColor: 'yellow' }}></div>
                            <div className="position-absolute rounded dnb-card6" style={{ backgroundColor: 'cyan' }}></div>
                            <div className="position-absolute rounded dnb-card7" style={{ backgroundColor: 'pink' }}></div>
                            <div className="position-absolute rounded dnb-card8" style={{ backgroundColor: 'green' }}></div>
                            <div className="position-absolute rounded dnb-card9" style={{ backgroundColor: 'blue' }}></div>
                        </div>
                    </Col>
                </Row>

            </Container>
        );
    }
}