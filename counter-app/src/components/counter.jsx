import React, { Component } from "react"; // Import React and Component from react library

class Counter extends Component { // Define Counter class component
  render() { // Render method to display the component
    return (
      <div className="row"> {/* Container div with Bootstrap row class */}
        <div className="col-1"> {/* Column with width 1 */}
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span> {/* Span element with dynamic classes and text */}
        </div>

        <div className="col"> {/* Column for buttons */}
          <button
            onClick={() => this.props.onIncrement(this.props.counter)} // Increment button with onClick event
            className="btn btn-secondary btn-sm" // Bootstrap button classes
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)} // Decrement button with onClick event
            className="btn btn-secondary btn-sm m-2" // Bootstrap button classes with margin
            disabled={this.props.counter.value === 0} // Disable button if counter value is 0 
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)} // Delete button with onClick event
            className="btn btn-danger btn-sm" // Bootstrap button classes for danger style
          >
            X
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() { // Method to get dynamic classes for badge
    let classes = "badge m-2 bg-"; // Base classes for badge
    classes += this.props.counter.value === 0 ? "warning" : "primary"; // Conditional class based on counter value
    return classes; // Return the complete class string
  }

  formatCount() { // Method to format the counter value
    const { value } = this.props.counter; // Destructure value from props
    return value === 0 ? "Zero" : value; // Return "Zero" if value is 0, otherwise return the value
  }
}

export default Counter; // Export Counter component as default
