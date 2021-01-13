import React, { Component } from 'react';

import Header from './Header/Header';
import Card from './Card/Card';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Card caption="Caption 1" text="Hello World"/>
        <Card caption="Caption 2" text="This is my first React Component"/>
      </div>
    );
  }
};

export default App;