import React, { Component } from 'react';
import { DataAbout, DataEducation } from '../global/Services';
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
            <div className="container">
                <h1>About</h1>
                <h3>{name}</h3>
                <p>{address}</p>
                <p>{phone}</p>
                <p>Email: {email}</p>
            </div>
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
            <div className="container">
                <h1>Education</h1>
                <h3>{title}</h3>
                <p>{position}</p>
                <p>{start} - {end}</p>
                <p>{note1}</p>
            </div>
        )
    }
}

export class Resume extends Component {

    render() {
        return (
            <div className="container">
                <About />
                <Education />
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="row">
                            <div className="col-xs-4 col-md-12 col-sm-4">
                                <img className="img-thumbnail w-100 p-0"
                                    src="https://live.staticflickr.com/65535/51720551677_ed3bcf1a62.jpg" />
                            </div>
                            <div className="col-xs-8 col-md-12 col-sm-8 mt-3">
                                <h3 className="fw-bold">Nguyen Ba Dai</h3>
                                <p>.Net Developer</p>
                                <h5>Profile</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-8 col-sm-12">
                        <h3>Asana</h3>
                        <p>Nora spends most of there time on ...</p>
                        <p>Product Infrastructure</p>
                        <p>Network Security</p>
                        <p>Security Testing</p>
                        <strong>Security Audit Outsourcing</strong>
                        <p>Fix bugs</p>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12">
                        <h5>Biography</h5>
                        <p>Stakeboarder, coffee addict, audiophile, Mad Men fan and hoistic designer. Performing at the sweet spot between art and sustainnability to craft experiences that go beyond design. Let's design a word that's thoughtful, considered and aesthetically pleasing.</p>
                        <h5>Location</h5>
                        <p>Tokyo, Japan</p>
                    </div>
                </div>
            </div>
        )
    }
}
