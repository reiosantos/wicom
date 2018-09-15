import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <div className="App-header">
                        <img src="images/logo1.png" alt="WICOM" className="logo" />
                        <ul className="main-nav">
                            <li><a href="">Home</a></li>
                            <li><a href="">Reports</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

