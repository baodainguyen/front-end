import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Logo } from '../global/Files';
import { removeSpace } from '../global/Globals';

export class Navigator extends Component {

    render() {
        const _navs = this.props.list;

        return (
            <Navbar collapseOnSelect bg="light" variant="light" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/" href="#home">
                        <img style={{ display: 'inline-block', width: '54px' }} src={Logo} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"> </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/" href="#home">Home</Nav.Link>
                            {_navs.map((item) => {
                                const hasSub = !!item.sub1 || !!item.sub2;
                                if (hasSub) {
                                    return <div className="dnb-link-group" key={item.title}>
                                        <Nav.Link as={Link} to={`/${item.title}`} href={`#${removeSpace(item.title)}`}>{item.title}</Nav.Link>
                                        {!!item.sub1 ? <Nav.Link as={Link} to={`/${removeSpace(item.sub1)}`} href={`#${removeSpace(item.sub1)}`}>{item.sub1}</Nav.Link> : <></>}
                                        {!!item.sub1 ? <Nav.Link as={Link} to={`/${removeSpace(item.sub2)}`} href={`#${removeSpace(item.sub2)}`}>{item.sub2}</Nav.Link> : <></>}
                                    </div>
                                } else {
                                    return <Nav.Link as={Link} key={item.title} to={`/${removeSpace(item.title)}`} href={`#${removeSpace(item.title)}`}>{item.title}</Nav.Link>;
                                }
                            })}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}
