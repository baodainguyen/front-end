import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route, Routes
} from "react-router-dom";
import { NavLink } from './global/Services';
import { Navigator } from '../src/components/BootstrapElements';
import { SubMenu, MainMenu, Contact } from './components/Pages';
import { Home } from './components/Home';
import { Ecma } from './components/Ecma';
import { ES6Features } from './components/ES6Features';
import { TutorialCheatSheet } from './components/Tutorials';
import { Resume } from './components/Resume';
import { removeSpace } from './global/Globals';
import './scss/style.scss';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { navs: NavLink.Navs };
    }
    componentDidMount() {
        NavLink.get().then(_navs => {
            _navs.unshift({title: 'Main'})
            _navs.unshift({title: 'ES6Features'})
            this.setState({ navs: _navs });
        });        
    }

    render() {
        const _navs = this.state.navs;
        return (
            <>
                <Router>
                    < Navigator list={_navs} />
                    < BodyPage list={_navs} />
                </Router>
            </>
        );
    }
}
class BodyPage extends Component {

    render() {
        const _navs = this.props.list;
        return (
            <Routes>
                <Route exact path="/" element={<Home />} />
                {_navs.map((item) => {
                    return getPageFromNav(item);

                })}
                {/*<Route path="/TutorialCheatSheet" element={<TutorialCheatSheet />} />
                    <Route exact path="/article02" element={<Article02 />} />
                    <Route exact path="/about" element={<Resume />} />
                    <Route exact path="/contact" element={<Contact />} /> */}
            </Routes>
        );
    }
}
function getPageFromNav(item) {
    const sub1 = !!item.sub1 ? <Route exact path={`/${removeSpace(item.sub1)}`} element={getPageFromSubMenu(item.sub1)} /> : <></>;
    const sub2 = !!item.sub2 ? <Route exact path={`/${removeSpace(item.sub2)}`} element={getPageFromSubMenu(item.sub2)} /> : <></>;
    return <>
        <Route exact path={`/${item.title}`} element={getPageFromMainMenu(item.title)} />
        {sub1}
        {sub2}
    </>
}
function getPageFromMainMenu(title) {
    if (isEqualLowCase(title, 'about')) return <Resume />;
    if (isEqualLowCase(title, 'contact')) return <Contact />;
    if (isEqualLowCase(title, 'Main')) return <Ecma />;
    if (isEqualLowCase(title, 'ES6Features')) return <ES6Features />;
    return <MainMenu />;
}
function getPageFromSubMenu(sub) {
    if (isEqualLowCase(sub, 'cheat sheet')) return <TutorialCheatSheet />;
    return <SubMenu />;
}
function isEqualLowCase(txt1, txt2) {
    txt1 = txt1.trim().toLowerCase();
    txt2 = txt2.trim().toLowerCase();
    return txt1 === txt2;
}