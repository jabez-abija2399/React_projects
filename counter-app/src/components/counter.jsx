import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
  };
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => { 
    this.setState({ count: this.state.count - 1 });
  }

  handleDelete = () => {
    console.log("Event Handler Called");
    }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button onClick={this.handleDecrement} className="btn btn-secondary btn-sm m-2">Decrement</button>
        <button onClick={this.handleDelete} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
