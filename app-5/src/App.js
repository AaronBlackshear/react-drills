import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image img={'https://images.pexels.com/photos/691582/pexels-photo-691582.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'} />
      </div>
    );
  }
}

export default App;
