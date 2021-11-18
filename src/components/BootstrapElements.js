import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route, Routes
} from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Home, SubMenu, MainMenu, Contact } from '../components/Pages';
import { TutorialCheatSheet } from './Tutorials';
import { Resume } from './Resume';
import { Logo } from '../global/Files';
import { RunServices, PageContent } from '../global/Services'
import { removeSpace, isEqualLowCase } from '../global/Globals'

export class Navigator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navs: PageContent.Navigator
        };
    }
    componentDidMount() {
        RunServices().getNavigator().then(_navs => {
            PageContent.Navigator = _navs;
            this.setState({ navs: _navs });
        });
    }

    render() {
        const _navs = this.state.navs;

        return (
            <Router>
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
            </Router>
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
    if(isEqualLowCase(title, 'about')) return <Resume />;
    if(isEqualLowCase(title, 'contact')) return <Contact />;
    return <MainMenu />;
}
function getPageFromSubMenu(sub){
    if(isEqualLowCase(sub, 'cheat sheet')) return <TutorialCheatSheet />;
    return <SubMenu />;
}