import React from 'react';

const Star = ({ selected = false, onclick = f => f }) =>
    (<div className={ (selected) ? 'star selected' : 'star' } onClick={ onclick } />);
export default Star;
