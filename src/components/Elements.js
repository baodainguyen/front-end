import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { getCookie, CookieKey, isEmail } from '../global/Globals';
import { Logos } from '../global/Files';
import { RunServices } from '../global/Services';

export class Footer extends Component {

    render() {
        return (
            <Container>
                <ListLang />
                <h2>Footer's Content</h2>

            </Container>
        )
    }
}
class ListLang extends Component {

    render() {
        return (
            <section className="">
                {Logos.map((item, i) => {
                    const { src, name } = item;
                    return <span key={`program-lang-${i}`}
                        className="d-inline-flex align-items-center bg-light me-3 mb-3 py-2 px-3 rounded-2"
                    >
                        <img className="dnb-h30" src={src} alt={`${name} Logo`} />
                        {
                            name ? <span className="fs-5 ms-2 text-dark">{name}</span> : <></>
                        }
                    </span>
                })}
            </section>
        );
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
            this.setState({ nofity: `Thank you for your submit!` });
            RunServices().setSubcribe(emailObj);
            return;
        }
        // alert
    }
    handleEmail(e) {
        let _email = e.target.value;
        this.setState({ email: _email });
        if (!isEmail(_email)) {
            this.setState({ nofity: `We'll never share your email with anyone else.` });
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

export class DnbButtonRoute extends Component {
    render() {
        const { linkTo, children } = this.props;
        return (
            <a href={linkTo} as={Link} to={`/${linkTo}`} className="btn btn-primary text-white">
                {children}
            </a>
        );
    }
}

export class BackgroundLinear extends Component {

    render() {
        const { children, botLeftColor, midColor, topRightColor, className } = this.props;
        const _bg = `linear-gradient(to right top, #${botLeftColor} 0%, #${midColor} 25%, #${topRightColor} 100%)`;

        return (
            <section className={className}
                style={{ backgroundImage: _bg }}>
                {children}
            </section>
        );
    }
}