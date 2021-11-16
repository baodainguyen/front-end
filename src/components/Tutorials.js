import React, { Component } from 'react';
import { CheatSheet } from './CheatSheet';

export class Tutorials extends Component {
    // componentDidMount() { }
    
    render() {
        return (
            <>
                <CheatSheet />
            </>
        )
    }
}

export class TutorialCheatSheet extends Component {
    // componentDidMount() { }
    
    render() {
        return (
            <div className="dnb-cheatsheet">
                <CheatSheet />
            </div>
        )
    }
}