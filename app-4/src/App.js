import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';

class App extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: ''
    }
    this.changeUser = this.changeUser.bind(this);
    this.changePass = this.changePass.bind(this);
    this.login = this.login.bind(this);
  }

  changeUser(val){
    this.setState({
      username: val
    })
  }

  changePass(val){
    this.setState({
      password: val
    })
  }

  login(){
    alert('Username: ' + this.state.username + ' Password: ' + this.state.password)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Login user={this.changeUser} pass={this.changePass} login={this.login} />
      </div>
    );
  }
}

export default App;
