import React, { Component } from 'react';
import styles from './Header.scss';

class Header extends Component {
    render() {
        const navItem = [1, 2, 3, 4, 5].map(i => <li> <a href="#"> item { i } </a></li>);
        return (
            <header>
                <nav>
                    <ul>{ navItem }</ul>
                </nav>
            </header>

        );
    }
}
export default Header;
