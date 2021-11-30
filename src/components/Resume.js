import React, { Component } from 'react';
import { DataAbout, DataEducation } from '../global/Services';
import { Container } from 'react-bootstrap';
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
            </Container>
        )
    }
}
