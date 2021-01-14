import React from 'react';

import './Card.css';

const Card = props => {
    return (
        <div className="card">
            <h3> { props.caption } </h3>
            <hr/>
            <p> { props.text } </p>
        </div>
    );
}

export default Card;