import React, { useState } from 'react';
import { AiFillSave, AiFillCloseSquare, AiFillEdit } from "react-icons/ai";

import './index.css';

const Card = props => {

    const [checkBoxStyleState, setCheckBoxStyleState] = useState({ isChecked: false })

    const [checkBoxEditModeState, setCheckBoxEditModeState] = useState({ isEditModeActive: false })

    const [tempState, setTempState] = useState({...props.cardData});

    const changeCheckBoxStyle = () => {
        setCheckBoxStyleState({
            isChecked: !checkBoxStyleState.isChecked
        });
    }

    const toggleEditMode = () => {
        setCheckBoxEditModeState({
            isEditModeActive: !checkBoxEditModeState.isEditModeActive
        });
        setCheckBoxStyleState({ isChecked: false });
    }

    const changePropertyHandler = (event, property) => {
        setTempState({...tempState, [property]: event.target.value });
    }

    const saveChangedState = () => {
        props.onSaveChanges(tempState);
        toggleEditMode();
    }

    const cancelChangedState = () => {
        setTempState({...props.cardData});
        toggleEditMode();
    }

    return (
        <div style={{ display: 'inline-block' }}>
            {checkBoxEditModeState.isEditModeActive ? (
                <div className="card-unchecked">
                    <input className="caption" value={tempState.caption} onChange={(e) => changePropertyHandler(e, "caption")} />
                    <div className="buttons">
                        <AiFillSave className="icon-size" onClick={saveChangedState} />
                        <AiFillCloseSquare className="icon-size" onClick={cancelChangedState} />
                        <input className="card-checkbox" type="hidden" onChange={changeCheckBoxStyle} />
                        <input className="card-square" type="hidden" onChange={toggleEditMode} />
                    </div>
                    <hr />
                    <input type="text" value={tempState.text} onChange={(e) => changePropertyHandler(e, "text")} />
                </div>) : (
                    <div className={checkBoxStyleState.isChecked ? "card-checked" : "card-unchecked"}>
                        <h3 className="caption">{tempState.caption}</h3>
                        <div className="buttons">
                            <input className="card-checkbox" type="checkbox" onChange={changeCheckBoxStyle} />
                            <AiFillEdit className="card-square icon-size" onClick={toggleEditMode} />
                        </div>
                        <hr />
                        <p>{tempState.text}</p>
                    </div>)
            }
        </div>
    );
}

export default Card;