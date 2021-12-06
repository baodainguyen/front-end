import React, { Component } from 'react';
import { DataAbout, DataEducation } from '../global/Services';
import { Container, Row, Col } from 'react-bootstrap';
import { getCookie, CookieKey } from '../global/Globals';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, DataAbout)
    }
    componentDidMount() {
        DataAbout.get().then(data => {
            this.setState({
                name: data['name'],
                address: data['address'],
                phone: data['phone'],
                email: data['email'],
            });
        });
    }
    render() {
        const { name, address, phone, email } = this.state;
        return (
            <Container>
                <h1>About</h1>
                <h3>{name}</h3>
                <p>{address}</p>
                <p>{phone}</p>
                <p>Email: {email}</p>
            </Container>
        )
    }
}

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, DataEducation);
    }
    componentDidMount() {
        DataEducation.get().then(data => {
            this.setState({
                title: data['title'],
                position: data['position'],
                start: data['start'],
                end: data['end'],
                note1: data['note1'],
            });
        });
    }

    render() {
        const { title, position, start, end, note1 } = this.state;
        return (
            <Container>
                <h1>Education</h1>
                <h3>{title}</h3>
                <p>{position}</p>
                <p>{start} - {end}</p>
                <p>{note1}</p>
            </Container>
        )
    }
}

export class Resume extends Component {

    render() {
        return (
            <Container>
                <About />
                <Education />
                <Row>
                    <Col lg={3} md={4} sm={12}>
                        <Row>
                            <Col md={12} sm={4} xs={4}>
                                <img className="img-thumbnail w-100 p-0" 
                                src="https://live.staticflickr.com/65535/51720551677_ed3bcf1a62.jpg"/>
                            </Col>
                            <Col md={12} sm={8} xs={8} className="mt-3">
                                <h3 className="fw-bold">Nguyen Ba Dai</h3>
                                <p>.Net Developer</p>
                                <h5>Profile</h5>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6} md={8} sm={12}>
                        <h3>Asana</h3>
                        <p>Nora spends most of there time on ...</p>
                        <p>Product Infrastructure</p>
                        <p>Network Security</p>
                        <p>Security Testing</p>
                        <strong>Security Audit Outsourcing</strong>
                        <p>Fix bugs</p>
                    </Col>
                    <Col lg={3} md={12} sm={12}>
                        <h5>Biography</h5>
                        <p>Stakeboarder, coffee addict, audiophile, Mad Men fan and hoistic designer. Performing at the sweet spot between art and sustainnability to craft experiences that go beyond design. Let's design a word that's thoughtful, considered and aesthetically pleasing.</p>
                        <h5>Location</h5>
                        <p>Tokyo, Japan</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}
