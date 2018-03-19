import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      text: ''
    }
  }
  
  changeText(val){
    this.setState({
      text: val
    })
  }

  render() {
    return (
      <div className="App">
        <input placeholder={'Type Here...'} onChange={e => this.changeText(e.target.value)} />
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}

export default App;
