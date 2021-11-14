import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { PreviewGrid } from './Elements';
import { RunServices, PageContent } from '../global/Services';


export class Home extends Component {
    render() {
        return (
            <>
                <Container style={{ height: '30px' }}>
                </Container>
                <PreviewGrid />
            </>
        )
    }
}

export class Preview extends Component {
    render() {
        return (
            <Container>
                <h1>Preview...</h1>
            </Container>
        )
    }
}

export class Preview01 extends Component {
    render() {
        return (
            <Container>
                <h1>Preview 01...</h1>
            </Container>
        )
    }
}

export class Preview02 extends Component {
    render() {
        return (
            <Container>
                <h1>Preview 02...</h1>
            </Container>
        )
    }
}

export class Tutorials extends Component {
    render() {
        return (
            <Container>
                <h1>Tutorials...</h1>
            </Container>
        )
    }
}

export class Article01 extends Component {
    render() {
        return (
            <Container>
                <h1>Article 01...</h1>
            </Container>
        )
    }
}

export class Article02 extends Component {
    render() {
        return (
            <Container>
                <h1>Article 02...</h1>
            </Container>
        )
    }
}

export class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : !PageContent.About ? 'Dainb' : PageContent.About['name'],
            address : !PageContent.About ? '...' : PageContent.About['address'],
            phone : !PageContent.About ? '...' : PageContent.About['phone'],
            email : !PageContent.About ? '...' : PageContent.About['email']
        };
      }
    componentDidMount() {
        if(!PageContent.About) {
            RunServices().getAbout().then(data => {
                PageContent.About = data;
                this.setState({
                    name: data['name'],
                    address: data['address'],
                    phone: data['phone'],
                    email: data['email'],
                  });
            });
        }
    }

    render() {
        const {name, address, phone, email} = this.state;
        return (
            <Container>
                <h1>About...</h1>
                <h3>Name: {name}</h3>
                <p>Address: {address}</p>
                <p>Phone: {phone}</p>
                <p>Email: {email}</p>
            </Container>
        )
    }
}

export class Contact extends Component {
    render() {
        return (
            <Container>
                <h1>Contact...</h1>
            </Container>
        )
    }
}