import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Logos, GroupLogos } from '../global/Files';
import '../scss/style.scss'

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
            <div style={{marginTop: '69px'}}>
                <div className="d-flex">
                    {Logos.map((logoItem, i) => (
                        <TechnologyItem logo={logoItem} key={i} />
                    ))}
                    <TechnologyGroupLogo />
                </div>
            </div>
        );
    }
}
class TechnologyItem extends Component {
    render() {
        const { src, name } = this.props.logo;
        return (
            <div className="dnb-tech-item rounded">
                <div><img src={src} alt={`${name} Logo`} /></div>
                <h3>{name}</h3>
            </div>
        );
    }
}
class TechnologyGroupLogo extends Component {
    render() {
        const name = `+ ${GroupLogos.length}`;
        return (
            <div className="dnb-tech-item rounded">
                <div className="d-flex flex-column" style={{maxHeight: '131px'}}>
                    {GroupLogos.map((logoItem, i) => (
                        <img src={logoItem.src} alt={`${logoItem.name} Logo`} key={i}/>
                    ))}
                </div>
                <h3>{name}</h3>
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