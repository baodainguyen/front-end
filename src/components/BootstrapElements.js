import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes
} from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Home, Preview, Preview01, Preview02, Tutorials, Article01, Article02, About, Contact } from '../components/Pages';
import { Logo } from '../global/Files';
import { RunServices } from '../global/Services'

export class Navigator extends Component {
    componentDidMount() {        
        console.log('start call');
        // RunServices().ipLookup().then((data) => {
        //     console.log('finish', data)
        // });
    }

    render() {
        return (
            <Router>
                <Navbar collapseOnSelect bg="light" variant="light" expand="lg" sticky="top">
                    <Container>
                        <Navbar.Brand as={Link} to="/" href="#home">
                            <img style={{ display: 'inline-block', width: '54px' }} src={Logo}/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto"> </Nav>
                            <Nav>
                                <Nav.Link as={Link} to="/" href="#home">Home</Nav.Link>
                                <div className="dnb-link-group">
                                    <Nav.Link as={Link} to="/preview" href="#preview">Preview</Nav.Link>
                                    <Nav.Link as={Link} to="/preview1" href="#preview1">Demo 01</Nav.Link>
                                    <Nav.Link as={Link} to="/preview2" href="#preview2">Demo 02</Nav.Link>
                                </div>
                                <div className="dnb-link-group">
                                    <Nav.Link as={Link} to="/tutorials" href="#tutorials">Tutorials</Nav.Link>
                                    <Nav.Link as={Link} to="/article1" href="#article1">Article 01</Nav.Link>
                                    <Nav.Link as={Link} to="/article2" href="#article2">Article 02</Nav.Link>
                                </div>
                                <Nav.Link as={Link} to="/about" href="#about">Abouts</Nav.Link>
                                <Nav.Link as={Link} to="/contact" href="#contact">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/preview" element={<Preview />} />
                    <Route exact path="/preview01" element={<Preview01 />} />
                    <Route exact path="/preview02" element={<Preview02 />} />
                    <Route exact path="/tutorials" element={<Tutorials />} />
                    <Route exact path="/article01" element={<Article01 />} />
                    <Route exact path="/article02" element={<Article02 />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        );
    }
}
