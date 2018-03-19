import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      list: ['ice cream', 'sushi', 'spaghetti', 'milk', 'eggs'],
      input : ''
    }
  }

  userInput(val){
    this.setState({
      input: val
    })
  }

  render() {
    let filteredList = this.state.list.filter(e => e.includes(this.state.input)).map((cur) => <h1>{cur}</h1>);

    return (
      <div className="App">
        <input onChange={e => this.userInput(e.target.value)} />
        {filteredList}
      </div>
    );
  }
}

export default App;
