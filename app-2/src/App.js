import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      list: ['eggs', 'bacon', 'milk', 'ham', 'turkey'],
    }
  }

  render() {
    var listedItems = this.state.list.map((e,i) => <h1 key={i}>{e}</h1>);
    return (
      <div className="App">
          {listedItems}
      </div>
    );
  }
}

export default App;
