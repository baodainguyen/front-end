import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes
} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div>
                <Router>
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
                            <Route path="/" element={<Home/>} />
                            <Route path="/about" element={<About/>} />
                            <Route path="/users" element={<Contact/>} />
                        </Routes>
                    </div>
                </Router>
                <Header />
                <Content />
            </div>
        );
    }
}
export default App;

export class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Home...</h1>
            </div>
        )
    }
}

export class About extends React.Component {
    render() {
        return (
            <div>
                <h1>About...</h1>
            </div>
        )
    }
}

export class Contact extends React.Component {
    render() {
        return (
            <div>
                <h1>Contact...</h1>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
            </div>
        );
    }
}
class Content extends React.Component {
    render() {
        return (
            <div>
                <h2>Content</h2>
                <p>The content text!!!</p>
            </div>
        );
    }
}