import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route, Routes
} from "react-router-dom";
import { RunServices } from './global/Services';
import { Navigator } from '../src/components/BootstrapElements';
import { SubMenu, MainMenu, Contact } from './components/Pages';
import { Home } from './components/Home';
import { TutorialCheatSheet } from './components/Tutorials';
import { Resume } from './components/Resume';
import { Footer } from '../src/components/Elements';
import { removeSpace, isEqualLowCase } from './global/Globals';
import './scss/style.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navs: []
        };
    }
    componentDidMount() {
        RunServices().getNavigator().then(_navs => {
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
                <Footer />
            </>
        );
    }
}
export default App;

class BodyPage extends Component {

    render() {
        const _navs = this.props.list;
        return (
            <Routes>
                <Route exact path="/" element={<Home />} />
                {_navs.map((item) => {
                    return getPageFromNav(item);

                })}
                {/*<Route exact path="/tutorials" element={<Tutorials />} />
                    <Route path="/TutorialCheatSheet" element={<TutorialCheatSheet />} />
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
    return <MainMenu />;
}
function getPageFromSubMenu(sub) {
    if (isEqualLowCase(sub, 'cheat sheet')) return <TutorialCheatSheet />;
    return <SubMenu />;
}