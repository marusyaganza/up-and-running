import React from 'react';
import './Banner.scss';

const banner = props => {
    const src = `http://via.placeholder.com/${props.width}x${props.height}`;
    return (
        <div className="lead-banner">
            <img src={ src } alt="" />
            <div className="banner-content">
                <div className="wrapper">
                    <span className="title">{ props.title }</span>
                    <span className="sub-title">{ props.subTitle }</span>
                </div>
            </div>
        </div>
    );
};


export default banner;
