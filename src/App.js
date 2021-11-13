import React, { Component } from 'react';
import {Navigator} from '../src/components/BootstrapElements';
import {Footer} from '../src/components/Elements';
import './scss/style.scss'

class App extends Component {
    render() {
        return (
            <div>
                <Navigator />
                <Footer />
            </div>
        );
    }
}
export default App;
