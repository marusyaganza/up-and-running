import React, { Component } from 'react';
import styles from './Float.scss';
import Banner from '../Banner/Banner';

class MainPage extends Component {
    renderImages(width, height, num) {
        const src = `http://via.placeholder.com/${width}x${height}`;
        const result = Array.from({ length: num }, (v, i) => i).map(i => (<li key={ i }> <img src={ src } alt="" /> <a href="#"> item { i } </a></li>));
        return (
            result
        );
    }
    render() {
        return (
            <div>
                <Banner
                    height="1800"
                    width="3500"
                    title="Check our video"
                    subTitle="Learning in 6 weeks"
                />
                <section id="services">
                    <div className="wrapper">
                        <h1>Services</h1>
                        <ul>
                            { this.renderImages(180, 180, 3) }
                        </ul>
                    </div>
                </section>
                <section id="projects">
                    <div className="wrapper">
                        <h1>Our Projects</h1>
                        <ul>
                            { this.renderImages(150, 150, 15) }
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}

export default MainPage;
