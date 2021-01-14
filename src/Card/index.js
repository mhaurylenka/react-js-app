import React, { useState } from 'react';

import './index.css';

const Card = props => {

    let cardClass;
    
    const [ styleState, setStyleState ] = useState({
        isChecked: false
    })

    const changeCheckBox = () => {
        setStyleState({
            isChecked: !styleState.isChecked
        });
    }

    if(styleState.isChecked) {
        cardClass = "card-checked";
    }
    else {
        cardClass = "card-unchecked";
    }
    
    return (
        <div className={cardClass}>
            <h3 className="caprion">{props.caption}</h3>
            <input className="card-checkbox" type="checkbox" onChange={changeCheckBox}/>
            <hr/>
            <p>{props.text}</p>
        </div>
    );
}

export default Card;