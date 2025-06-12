import { Component } from "react";

export default class Task1 extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            count: 0
        }
    }

    handleIncrementClick = () => {
        this.setState({count: this.state.count + 1})
    }
    handleDecrementClick = () => {
        this.setState ({count: this.state.count - 1})
    }

    
  render() {
    return (
      <>
        <h1>Counter's number is</h1>
        <p>{this.state.count}</p>
        <button onClick={this.handleIncrementClick}>Increment</button>
        <button onClick={this.handleDecrementClick}>Decrement</button>
      </>
    );
  }
}