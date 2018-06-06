import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Float from '../Float/Float';
import Home from '../Home/Home';


class MainPage extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path="/" component={ Home } exact />
                    <Route path="/float/" component={ Float } />
                    <Route render={ () => <h1>Not found</h1> } />
                </Switch>
            </main>
        );
    }
}

export default MainPage;
