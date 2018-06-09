import React, { Component } from 'react';
import { PHOTOS_URL } from '../../constants/constants';
class Project extends Component {
    constructor() {
        super();
        this.state = { project: null };
    }
    componentDidMount() {
        const id = this.props.history.location.pathname.slice(10, -1);
        fetch(PHOTOS_URL + id)
            .then(response => response.json())
            .then(json => this.setState({ project: json }))
            .catch(err => console.log('Someting went wrong: ', err));
    }
    render() {
        return !this.state.project ? <h2> Loading... </h2> :
            (
                <div className="wrapper">
                    <h1>Picture #{ this.state.project.id }</h1>
                    <h3>From album #{ this.state.project.albumId }</h3>
                    <img src={ this.state.project.url } alt="" />
                    <h2>{ this.state.project.title }</h2>
                </div>
            );
    }
}
export default Project;
