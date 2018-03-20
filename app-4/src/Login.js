import React, { Component } from 'react';

class Login extends Component{
    constructor(props){
        super(props)
    }

    render(){

        return(
            <div>
                <br />
                <input onChange={e => this.props.user(e.target.value)} />
                <input onChange={e => this.props.pass(e.target.value)} />
                <button onClick={this.props.login} >Login</button>
            </div>
        )
    }
}

export default Login