import React from 'react';

import '../Card/Card.css';

const card = (props) => {
    return (
        <div className="card">
            <h3> { props.caption } </h3>
            <hr/>
            <p> { props.text } </p>
        </div>
    );
}

export default card;