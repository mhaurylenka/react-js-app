import React, { useState } from 'react';

import Header from './Header';
import Card from './Card';

const App = () => {

  const [cardState, changeCardState] = useState({ caption: "Caption 1", text: "Hello World" });

  const [baseState, setBaseState] = useState(cardState)

  const changeCaptiondHadler = (event) => {
    changeCardState({ caption: event.target.value, text: cardState.text });
  }

  const changeTextdHadler = (event) => {
    changeCardState({ caption: cardState.caption, text: event.target.value });
  }

  const cancelChangedState = () => {
    changeCardState(baseState)
  }

  const saveChangedState = () => {
    setBaseState(cardState)
  }

  return (
    <div>
      <Header />
      <Card
        caption = {cardState.caption}
        text = {cardState.text}
        changeCaption = {changeCaptiondHadler}
        changeText = {changeTextdHadler}
        cancelChanges = {cancelChangedState}
        saveChanges = {saveChangedState}
      />
    </div>
  );
};

export default App;