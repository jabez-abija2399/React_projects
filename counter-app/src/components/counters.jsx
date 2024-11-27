import React, { Component } from "react"; // Import React and Component from react library
import Counter from "./counter"; // Import Counter component

class Counters extends Component {
  // Define Counters class component
  render() {
    // Render method to render the component
    const { onReset, counters, onDelete, onIncrement, onDecrement } =
      this.props; // Destructure props

    return (
      <div>
        {" "}
        {/* Container div */}
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          {" "}
          Reset {/* Reset button */}
        </button>
        {counters.map(
          (
            counter // Map over counters array
          ) => (
            <Counter
              counter={counter} // Pass counter object as prop
              key={counter.id} // Unique key for each counter
              onDelete={onDelete} // Pass onDelete function as prop
              onIncrement={onIncrement} // Pass onIncrement function as prop
              onDecrement={onDecrement} // Pass onDecrement function as prop
            />
          )
        )}
      </div>
    );
  }
}

export default Counters; // Export Counters component
