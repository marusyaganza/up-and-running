import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Float from '../Float/Float';
import Home from '../Home/Home';
import Project from '../Project/Project';

class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path="/" component={ Home } exact />
                    <Route path="/projects/" component={ Project } />
                    <Route path="/float/" component={ Float } />
                    <Route render={ () => <h1>Not found</h1> } />
                </Switch>
            </main>
        );
    }
}

export default Main;
