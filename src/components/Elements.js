import React, { Component } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
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
            <section >
                {Logos.map((item, i) => {
                    const { src, name } = item;
                    return <span key={`program-lang-${i}`}
                        className="d-inline-flex align-items-center bg-light me-3 mb-3 py-2 px-3 rounded-2 shadow-sm"
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

export class Subcribe extends Component {
    state = {
        email: '', id: Date.now(),
        nofity: `We'll never share your email with anyone else.`
    };
    componentDidMount() {
        var _id = getCookie(CookieKey.Id);
        _id = +(_id);

        this.setState({ id: _id });
    }
    subcribeEmail = (e) => {
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
    handleEmail = (e) => {
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
