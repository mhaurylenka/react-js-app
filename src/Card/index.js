import React, { useState } from 'react';
import { AiFillSave, AiFillCloseSquare, AiFillEdit } from "react-icons/ai";

import './index.css';

const Card = props => {

    const [checkBoxStyleState, setCheckBoxStyleState] = useState({ isChecked: false })

    const [checkBoxEditModeState, setCheckBoxEditModeState] = useState({ isEditModeActive: false })

    const changeCheckBoxStyle = () => {
        setCheckBoxStyleState({
            isChecked: !checkBoxStyleState.isChecked
        });
    }

    console.log(checkBoxStyleState)

    const activeEditMode = () => {
        setCheckBoxEditModeState({
            isEditModeActive: !checkBoxEditModeState.isEditModeActive
        });
        setCheckBoxStyleState({ isChecked: false });
    }

    const saveChangedState = () => {
        props.saveChanges();
        activeEditMode();
    }

    const cancelChangedState = () => {
        props.cancelChanges();
        activeEditMode();
    }

    return (
        <div style={{ display: 'inline-block' }}>
            {checkBoxEditModeState.isEditModeActive ? (
                <div className="card-unchecked">
                    <input className="caption" value={props.caption} onChange={props.changeCaption} />
                    <div className="buttons">
                        <AiFillSave className="icon-size" onClick={saveChangedState} />
                        <AiFillCloseSquare className="icon-size" onClick={cancelChangedState} />
                        <input className="card-checkbox" type="hidden" onChange={changeCheckBoxStyle} />
                        <input className="card-square" type="hidden" onChange={activeEditMode} />
                    </div>
                    <hr />
                    <input type="text" value={props.text} onChange={props.changeText} />
                </div>) : (
                    <div className={checkBoxStyleState.isChecked ? "card-checked" : "card-unchecked"}>
                        <h3 className="caption">{props.caption}</h3>
                        <div className="buttons">
                            <input className="card-checkbox" type="checkbox" onChange={changeCheckBoxStyle} />
                            <AiFillEdit className="card-square icon-size" onClick={activeEditMode} />
                        </div>
                        <hr />
                        <p>{props.text}</p>
                    </div>)
            }
        </div>
    );
}

export default Card;