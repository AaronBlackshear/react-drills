import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

class App extends Component {
  constructor() {
    super()
    this.state = {
      list: '',
      addItem: ''
    }
    this.input = this.input.bind(this);
    this.additem = this.additem.bind(this);
  }

  input(val) {
    this.setState({
      addItem: val
    })
    console.log(this.state.addItem)
  }

  additem() {
    this.setState({
      list: this.state.addItem
    })
    console.log(this.state.list)
  }

  render() {

    return (
      <div className="App">
        <Todo listitem={this.input} additem={this.additem} list={this.state.list} />
      </div>
    );
  }
}

export default App;
