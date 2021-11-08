import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes
} from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Home, About, Contact } from '../components/Pages';
import { Logo } from '../global/Files';

export class Navigator extends Component {
    render() {
        return (
            <Router>
                <Navbar collapseOnSelect bg="light" variant="light" expand="lg" sticky="top">
                    <Container>
                        <Link className="navbar-brand" to="/"><Logo style={{ display: 'inline-block' }} /></Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto"> </Nav>
                            <Nav>
                                <NavDropdown title="Sections" >
                                    <NavDropdown.Item >
                                        Demo01
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                                </NavDropdown>
                                <Link className="nav-link" to="/">Home</Link>
                                <Link className="nav-link" to="/about">About</Link>
                                <Link className="nav-link" to="/users" >Contact</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div>
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
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/users" element={<Contact />} />
                    </Routes>
                </div>
            </Router>
        );
    }
}
