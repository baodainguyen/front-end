import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Logos, GroupLogos } from '../global/Files';

export class Footer extends Component {

    render() {
        return (
            <Container>
                <ListTechnology />
                <h2>Footer's Content</h2>

            </Container>
        )
    }
}

class ListTechnology extends Component {
    render() {
        return (
            <div style={{ marginTop: '69px' }}>
                <Row >
                    {Logos.map((logoItem, i) => (
                        <TechnologyItem logo={logoItem} key={i} />
                    ))}
                    <TechnologyGroupLogo />
                    <Col lg={2} md={4} sm={6}>
                        <h3>Get Started Quicker</h3>
                        <p>Get inspiration from Pens using frameworks, libraries, and design patterns. Then, start your own with premade templates.</p>
                        <Button className="rounded-1" variant="dark">Explore Topics</Button>{' '}
                    </Col>
                </Row>
            </div>
        );
    }
}
class TechnologyItem extends Component {
    render() {
        const { src, name } = this.props.logo;
        return (
            <Col lg={2} md={4} sm={6}>
                <div className="dnb-tech-item rounded">
                    <div><img src={src} alt={`${name} Logo`} /></div>
                    <h3>{name}</h3>
                </div>
            </Col>
        );
    }
}
class TechnologyGroupLogo extends Component {
    render() {
        const name = `+ ${GroupLogos.length}`;
        return (
            <Col lg={2} md={4} sm={6}>
                <div className="dnb-tech-item rounded">
                    <div className="d-flex flex-column dnb-tech-item-group" style={{ maxHeight: '131px' }}>
                        {GroupLogos.map((logoItem, i) => (
                            <img src={logoItem.src} alt={`${logoItem.name} Logo`} key={i} />
                        ))}
                    </div>
                    <h3>{name}</h3>
                </div>
            </Col>
        );
    }
}
