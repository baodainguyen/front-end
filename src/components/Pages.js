import React, { Component } from 'react';
import { Subcribe } from './Elements';
import { NavLink } from "react-router-dom";

export class SubMenu extends Component {
    render() {
        return (
            <div className="container">
                <h1>
                    <NavLink className="nav-link" to="/">
                        Sub Page ...
                    </NavLink>
                </h1>
            </div>
        )
    }
}

export class Contact extends Component {
    render() {
        return (
            <div className="container">
                <h1><i className="bi bi-search ms-3"></i>Contact...</h1>
                <Subcribe />
            </div>
        )
    }
}

