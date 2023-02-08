import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route, Routes
} from "react-router-dom";
import { Navigator } from '../src/components/BootstrapElements';
import { SubMenu, Contact } from './components/Pages';
import { Home } from './components/Home';
import { Ecma } from './pages/home';
import { Blog } from './pages/blog';
import { ES6Features } from './components/ES6Features';
import { Resume } from './components/Resume';
import './scss/style.scss';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navs: [
                { title: 'Main' },
                { title: 'ES6 Features' },
                { title: 'Tutorials', subs: ['Demo 00', 'Article1'] },
                { title: 'Demo' },
                { title: 'About' },
                { title: 'Contact'},
            ]
        };
    }
    render() {
        const _navs = this.state.navs;
        return (
            <>
                <Router>
                    < Navigator listmenu={_navs} />
                    < BodyPage />
                </Router>
            </>
        );
    }
}
class BodyPage extends Component {

    render() {
        return (
            <Routes>
                <Route exact path="/" element={< Blog />} />
                <Route exact path="/Main" element={< Ecma />} />
                <Route exact path="/ES6-Features" element={< ES6Features />} />
                <Route exact path="/Demo-00" element={< SubMenu />} />
                <Route exact path="/Article1" element={< SubMenu />} />
                <Route exact path="/Demo" element={< Home />} />
                <Route exact path="/About" element={< Resume />} />
                <Route exact path="/Contact" element={< Contact />} />
            </Routes>
        );
    }
}