import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';

class Home extends Component {
    renderImages(width, height, num, href, items, startCount = 0) {
        const src = `http://via.placeholder.com/${width}x${height}`;
        const result = Array.from({ length: num }, (v, i) => i + startCount).map(i => (<li key={ i }> <img src={ src } alt="" /> <Link to={ href }> { items ? items[i] : `item${i}` } </Link></li>));
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
                    title="Welcome Home!"
                    subTitle="We are glad to see you"
                />
                <section id="services">
                    <div className="wrapper">
                        <h1>Services</h1>
                        <ul>
                            { this.renderImages(180, 180, 1, '/float/', ['Float']) }
                            { this.renderImages(180, 180, 2, '#', null, 1) }
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

export default Home;
