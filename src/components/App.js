import React, { Component } from 'react';
import Header from './Header/Header';
import '../styles/main.scss';
import MainPage from './MainPage/Main';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <MainPage />
            </div>
        );
    }
}

export default App;
