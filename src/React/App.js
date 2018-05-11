import React, { Component } from 'react';
import {connect} from 'react-redux'

const mapStateToProps =  (state)=>{
  return {
    count: state.number.number,
    names: state.names
  }
}

class App extends Component {

  onIncrement = ()=>{
    this.props.dispatch({
      type:'INCREMENT'
    })
  }

  onDecrement = ()=>{
    this.props.dispatch({
      type:'DECREMENT'
    })
  }

  onIncrementBy10 = () => {
    this.props.dispatch({
      type: 'INCREMENT10', 
      payload: 10
    })
  }

  onAddName = () => {
    this.props.dispatch({
      type: 'ADD_NAME',
      payload: 'bleh'
    })
    console.log(this.props.names)
  }


  render() {
    return (
      <div> 
        <button onClick={this.onIncrementBy10}>+10</button>
        <button onClick={this.onIncrement}>+</button>
        {this.props.count}
        <button onClick={this.onDecrement}>-</button>
        <div>
          <button onClick={this.onAddName}>Add Name</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App)
