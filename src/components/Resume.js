import React, { Component } from 'react';
import { RunServices, PageContent } from '../global/Services';
import { Container } from 'react-bootstrap';


class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : !PageContent.About ? '***' : PageContent.About['name'],
            address : !PageContent.About ? '***' : PageContent.About['address'],
            phone : !PageContent.About ? '***' : PageContent.About['phone'],
            email : !PageContent.About ? '***' : PageContent.About['email']
        };
      }
    componentDidMount() {
        if(!PageContent.About) {
            RunServices().getAbout().then(data => {
                if(!data) return;
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
        this.state = {
            title : !PageContent.Education ? '***' : PageContent.Education['title'],
            position : !PageContent.Education ? '***' : PageContent.Education['position'],
            start : !PageContent.Education ? '***' : PageContent.Education['start'],
            end : !PageContent.Education ? '***' : PageContent.Education['end'],
            note1 : !PageContent.Education ? '***' : PageContent.Education['note1']
        };
    }
    componentDidMount() {
        if(!PageContent.Education) {
            RunServices().getEducation().then(data => {
                if(!data) return;
                PageContent.Education = data;
                this.setState({
                    title: data['title'],
                    position: data['position'],
                    start: data['start'],
                    end: data['end'],
                    note1: data['note1'],
                  });
            });
        }
    }

    render() {
        const {title, position, start, end, note1} = this.state;
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