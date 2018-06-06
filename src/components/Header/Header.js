import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.scss';

class Header extends Component {
    render() {
        const activeStyle = {
            fontWeight: 'bold',
            background: '#033648',
        };
        return (
            <div>
                <header>
                    <nav id="main-nav">
                        <div className="wrapper">
                            <a id="logo" href="/">
                                    Logo
                            </a>
                            <ul>
                                <li>
                                    <NavLink
                                        to="/float/"
                                        exact
                                        activeStyle={ activeStyle }
                                    >
                               Float
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/"
                                        exact
                                        activeStyle={ activeStyle }
                                    >
                                       Home
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}
export default Header;
