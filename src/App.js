import React, { useState } from 'react';

import Header from './Header';
import Card from './Card';
import { Checkbox } from './Styles/Checkbox';

const App = () => {

  const [cardsState, setCardsState] = useState([
    { id: "id1", caption: "Caption 1", text: "Hello World 1" },
    { id: "id2", caption: "Caption 2", text: "Hello World 2" },
    { id: "id3", caption: "Caption 3", text: "Hello World 3" },
    { id: "id4", caption: "Caption 4", text: "Hello World 4" },
    { id: "id5", caption: "Caption 5", text: "Hello World 5" },
    { id: "id6", caption: "Caption 6", text: "Hello World 6" },
    { id: "id7", caption: "Caption 7", text: "Hello World 7" },
    { id: "id8", caption: "Caption 8", text: "Hello World 8" },
    { id: "id9", caption: "Caption 9", text: "Hello World 9" }
  ]);

  const [readModeState, setReadModeState] = useState({
    isReadModeActive: false
  });

  const saveChangedState = (tempState) => {
    const cardId = cardsState.findIndex(card => {
      return card.id === tempState.id;
    });
    let cards = [...cardsState];
    cards[cardId] = tempState;
    setCardsState(cards);
  }

  const toggleReadMode = () => {
    setReadModeState({
      isReadModeActive: !readModeState.isReadModeActive
    });
  };

  return (
    <div>
      <Header />
      <Checkbox box={readModeState.isReadModeActive}>
        <input type="checkbox" id="only-read" onClick={toggleReadMode} />
        <label>Только просмотр</label>
      </Checkbox>
      <div>
        {cardsState.map((card, index) => {
          return <Card
            cardData={card}
            key={index}
            onChangeReadMode={readModeState}
            onSaveChanges={saveChangedState} />
        })}
      </div>
    </div>
  );
};

export default App;