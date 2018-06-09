import React from 'react';
import Link from 'react-router-dom/es/Link';

const miniature = props => (
    <Link to={ `/projects/${props.id}/` }>
        <img src={ props.src } alt="" />
        <p> project#{ props.id }</p>
    </Link>
);

export default miniature;
