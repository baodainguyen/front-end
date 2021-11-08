import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes
} from "react-router-dom";
import {Navbar, Container, Nav } from 'react-bootstrap';

export class Navigator extends Component {
    render() {
        return (
            <Router>
                <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                    <Link className="navbar-brand" to="/">Open source</Link>
                        <Nav className="me-auto">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/about">About</Link>
                            <Link className="nav-link" to="/users">Contact</Link>
                        </Nav>
                    </Container>
                </Navbar>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/users">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/about" element={<About/>} />
                        <Route path="/users" element={<Contact/>} />
                    </Routes>
                </div>
            </Router>
        );
    }
}

export class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Home...</h1>
            </div>
        )
    }
}

export class About extends React.Component {
    render() {
        return (
            <div>
                <h1>About...</h1>
            </div>
        )
    }
}

export class Contact extends React.Component {
    render() {
        return (
            <div>
                <h1>Contact...</h1>
            </div>
        )
    }
}