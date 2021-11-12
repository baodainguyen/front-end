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

export class Navigator extends Component {
    render() {
        return (
            <Router>
                <Navbar collapseOnSelect bg="light" variant="light" expand="lg" sticky="top">
                    <Container>
                        <Link className="navbar-brand" to="/">
                            <img style={{ display: 'inline-block', width: '54px' }} src={Logo}/></Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto"> </Nav>
                            <Nav>
                                <Link className="nav-link" to="/">Home</Link>
                                <div className="dnb-link-group">
                                    <Link className="nav-link" to="/preview">Preview</Link>
                                    <Link className="nav-link" to="/preview01">Demo 01</Link>
                                    <Link className="nav-link" to="/preview02">Demo 02</Link>
                                </div>
                                <div className="dnb-link-group">
                                    <Link className="nav-link" to="/tutorials">Tutorials</Link>
                                    <Link className="nav-link" to="/article01">Article 01</Link>
                                    <Link className="nav-link" to="/article02">Article 02</Link>
                                </div>
                                <Link className="nav-link" to="/about" >Abouts</Link>
                                <Link className="nav-link" to="/contact" >Contact</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/preview" element={<Preview />} />
                    <Route path="/preview01" element={<Preview01 />} />
                    <Route path="/preview02" element={<Preview02 />} />
                    <Route path="/tutorials" element={<Tutorials />} />
                    <Route path="/article01" element={<Article01 />} />
                    <Route path="/article02" element={<Article02 />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        );
    }
}
