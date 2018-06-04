import React, { Component } from 'react';
import styles from './Header.scss';

class Header extends Component {
    render() {
        const navItem = [1, 2, 3, 4, 5].map(i => <li key={ i }> <a href="#"> item { i } </a></li>);
        return (
            <header>
                <nav id="main-nav">
                    <div className="wrapper">
                        <div id="logo">Logo</div>
                        <ul>{ navItem }</ul>
                    </div>
                </nav>
            </header>
        );
    }
}
export default Header;
