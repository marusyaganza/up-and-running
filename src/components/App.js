import React, { Component } from 'react';
import Header from './Header/Header';
import '../styles/main.scss';
import MainPage from './MainPage/MainPage';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <MainPage />
                <section>
                    <h1>Main content</h1>
                </section>
            </div>
        );
    }
}

export default App;
