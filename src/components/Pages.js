import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Subcribe } from './Elements';
import { NavLink } from "react-router-dom";
export class MainMenu extends Component {
    render() {
        return (
            <Container>
                <h1>
                    <NavLink className="nav-link" to="/">
                        <i className="bi bi-search ms-3"></i>Main Menu Page ...
                    </NavLink></h1>
            </Container>
        )
    }
}

export class SubMenu extends Component {
    render() {
        return (
            <Container>
                <h1>
                    <NavLink className="nav-link" to="/">
                        Sub Page ...
                    </NavLink>
                </h1>
            </Container>
        )
    }
}

export class Contact extends Component {
    render() {
        return (
            <Container>
                <h1>Contact...</h1>
                <Subcribe />
            </Container>
        )
    }
}

