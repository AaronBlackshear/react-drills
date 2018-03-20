import React, { Component } from 'react';

class Todo extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <br />
                <input placeholder='Add Item...' onChange={e => this.props.listitem(e.target.value)} />
                <button onClick={() => this.props.additem} >Add Item</button>
                <ul>
                    <li>{this.props.list}</li>
                </ul>
            </div>
        )
    }
}

export default Todo;