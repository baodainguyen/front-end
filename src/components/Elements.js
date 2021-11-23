import React, { Component } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { getCookie, CookieKey, isEmail } from '../global/Globals';
import { Logos, GroupLogos } from '../global/Files';
import { RunServices } from '../global/Services';

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

export class Subcribe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '', id: Date.now(),
            nofity: `We'll never share your email with anyone else.`
        };
        this.subcribeEmail = this.subcribeEmail.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
    }
    componentDidMount() {
        var _id = getCookie(CookieKey.Id);
        _id = +(_id);

        this.setState({ id: _id });
    }
    subcribeEmail(e) {
        e.preventDefault();
        const email = this.state.email;
        if (isEmail(email)) {
            const _id = this.state.id;
            const emailObj = {};
            emailObj[_id.toString()] = email;
            this.setState({nofity: `Thank you for your submit!`});
            RunServices().setSubcribe(emailObj);
            return;
        }
        // alert
    }
    handleEmail(e) {
        let _email = e.target.value;
        this.setState({ email: _email });
        if(!isEmail(_email)) {
            this.setState({nofity : `We'll never share your email with anyone else.`});
        }
    }

    render() {
        const _email = this.state.email;
        var isInvalid = _email != '' && !isEmail(_email);

        return (
            <Form onSubmit={this.subcribeEmail}>
                <Form.Group className="row g-3" controlId="formBasicEmail">
                    <div className="col-auto">
                        <Form.Control type="email" placeholder="Enter email"
                            className={isInvalid ? "is-invalid" : ""}
                            value={_email} onChange={this.handleEmail} />
                        <Form.Text className="text-muted">
                            {this.state.nofity}
                        </Form.Text>
                    </div>
                    <div className="col-auto">
                        <Button variant="primary" type="submit">
                            <strong className="text-white">Subcribe</strong>
                        </Button>
                    </div>
                </Form.Group>
            </Form>
        );
    }
}