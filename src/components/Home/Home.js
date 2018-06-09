import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Miniature from '../../components/Miniature/Miniature';
import { PHOTOS_URL } from '../../constants/constants';
import styles from './Home.scss';

class Home extends Component {
    constructor() {
        super();
        this.state = { projects: null };
    }

    componentDidMount() {
        fetch(PHOTOS_URL)
            .then(response => response.json())
            .then(json => {
                const projects = Array.from(json).slice(0, 30);
                this.setState({ projects });
            });
    }

    renderImages(width, height, num, href, items, startCount = 0) {
        const src = `http://via.placeholder.com/${width}x${height}`;
        const result = Array.from({ length: num }, (v, i) => i + startCount).map(i => (<li key={ i }> <img src={ src } alt="" /> <Link to={ `/${href}/` }> { items ? items[i] : `item${i}` } </Link></li>));
        return (
            result
        );
    }

    render() {
        const projects = !this.state.projects ? <p> Loading... </p> :
            this.state.projects.map(item => (
                <li key={ item.id }>
                    <Miniature
                        id={ item.id }
                        title={ item.title }
                        src={ item.thumbnailUrl }
                    />
                </li>
            ));
        return (
            <div>
                <Banner
                    height="1800"
                    width="3500"
                    title="Welcome Home!"
                    subTitle="We are glad to see you"
                />
                <section id="services">
                    <div className="wrapper">
                        <h1>Services</h1>
                        <ul>
                            { this.renderImages(180, 180, 1, 'float', ['Float']) }
                            { this.renderImages(180, 180, 2, '#', null, 1) }
                        </ul>
                    </div>
                </section>
                <section id="projects">
                    <div className="wrapper">
                        <h1>Our Projects</h1>
                        <ul>
                            { projects }
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;
