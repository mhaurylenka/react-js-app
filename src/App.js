import React, { useState } from 'react';

import Header from './Header';
import Card from './Card';

const App = () => {

  const [cardState, setCardState] = useState({ caption: "Caption 1", text: "Hello World" });

  const saveChangedState = (tempState) => {
    setCardState(tempState);
  }

  return (
    <div>
      <Header />
      <Card
        cardData = {cardState}
        onSaveChanges = {saveChangedState}
      />
    </div>
  );
};

export default App;