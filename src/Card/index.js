import React, { useState, useEffect } from 'react';
import { AiFillSave, AiFillCloseSquare, AiFillEdit } from "react-icons/ai";

import './index.css';

const Card = props => {

    const [checkBoxStyleState, setCheckBoxStyleState] = useState({ isChecked: false });

    const [checkBoxEditModeState, setCheckBoxEditModeState] = useState({ isEditModeActive: false });

    const [tempState, setTempState] = useState({ ...props.cardData });

    useEffect(() => {
        setTempState({ ...props.cardData });
        setCheckBoxEditModeState({ isEditModeActive: false });
    }, [props.onChangeReadMode.isReadModeActive]);

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
        setTempState({ ...tempState, [property]: event.target.value });
    }

    const saveChangedState = () => {
        props.onSaveChanges(tempState);
        toggleEditMode();
    }

    const cancelChangedState = () => {
        setTempState({ ...props.cardData });
        toggleEditMode();
    }

    let buttons = (
        <div className="buttons">
            <input className="card-checkbox" type="checkbox" onChange={changeCheckBoxStyle} />
            <AiFillEdit className="card-square icon-size" onClick={toggleEditMode} />
        </div>
    )

    if (checkBoxEditModeState.isEditModeActive) {
        buttons = (
            <div className="buttons">
                <AiFillSave className="icon-size" onClick={saveChangedState} />
                <AiFillCloseSquare className="icon-size" onClick={cancelChangedState} />
                <input className="card-checkbox" type="hidden" onChange={changeCheckBoxStyle} />
                <input className="card-square" type="hidden" onChange={toggleEditMode} />
            </div>
        )
    }

    if (props.onChangeReadMode.isReadModeActive) {
        buttons = (
            <div className="buttons">
                <input className="card-checkbox" type="checkbox" onChange={changeCheckBoxStyle} />
            </div>
        )
    }

    return (
        <div style={{ display: 'inline-block' }}>
            <div
                className={checkBoxEditModeState.isEditModeActive && !props.onChangeReadMode.isReadModeActive ?
                    "card-unchecked" : (
                        checkBoxStyleState.isChecked ?
                            "card-checked" :
                            "card-unchecked"
                    )
                }>
                {checkBoxEditModeState.isEditModeActive && !props.onChangeReadMode.isReadModeActive ?
                    <input className="caption" value={tempState.caption} onChange={(e) => changePropertyHandler(e, "caption")} /> :
                    <h3 className="caption">{tempState.caption}</h3>
                }
                {buttons}
                <hr />
                {checkBoxEditModeState.isEditModeActive && !props.onChangeReadMode.isReadModeActive ?
                    <input type="text" value={tempState.text} onChange={(e) => changePropertyHandler(e, "text")} /> :
                    <p>{tempState.text}</p>
                }
            </div>
        </div>
    );
}

export default Card;