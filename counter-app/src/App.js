import React, { Component } from "react"; // Import React and Component from react library
import logo from "./logo.svg"; // Import logo image
import NavBar from "./components/navbar"; // Import NavBar component
import Counters from "./components/counters"; // Import Counters component
import "./App.css"; // Import CSS file for styling

class App extends Component { // App component is a class component 
  state = {
    counters: [
      { id: 1, value: 0 }, // Counter object with id 1 and initial value 0
      { id: 2, value: 0 }, // Counter object with id 2 and initial value 0
      { id: 3, value: 0 }, // Counter object with id 3 and initial value 0
      { id: 4, value: 0 }, // Counter object with id 4 and initial value 0
    ],
  };

  handleIncrement = (counter) => { // Handle incrementing value of counter object in counters array 
    const counters = [...this.state.counters]; // Clone counters array to avoid direct mutation of state object 
    const index = counters.indexOf(counter);  // Get index of counter object in counters array   
    counters[index] = { ...counter }; // Clone counter object to avoid direct mutation of state object 
    counters[index].value++;  // Increment value of counter object 
    this.setState(() => ({ counters })); // Update state object with new counters array 
  }; 

  handleDecrement = (counter) => { // Handle decrementing value of counter object in counters array
    const counters = [...this.state.counters]; // Clone counters array to avoid direct mutation of state object
    const index = counters.indexOf(counter);  // Get index of counter object in counters array

    if (counters[index].value === 0) return null; // Prevent decrementing below 0 value of counter

    counters[index] = { ...counter }; // Clone counter object to avoid direct mutation of state object
    counters[index].value--; // Decrement value of counter object
    this.setState({ counters }); // Update state object with new counters array
  };

  handleReset = () => { // Handle resetting all counter values to 0
    const counters = this.state.counters.map((c) => { // Map over counters array
      c.value = 0; // Set value of each counter to 0
      return c; // Return updated counter object
    });
    this.setState({ counters }); // Update state object with new counters array
  };

  handleDelete = (counterId) => { // Handle deleting a counter object from counters array
    const counters = this.state.counters.filter((c) => c.id !== counterId); // Filter out counter object with matching id
    this.setState({ counters }); // Update state object with new counters array
  };

  render() { // Render method to display components
    return (
      <React.Fragment> {/* React Fragment to group multiple elements */}
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length} // Pass total number of counters with value > 0 to NavBar component
        />
        <main className="container"> {/* Main container for the app */}
          <Counters
            counters={this.state.counters} // Pass counters array to Counters component
            onReset={this.handleReset} // Pass handleReset method to Counters component
            onIncrement={this.handleIncrement} // Pass handleIncrement method to Counters component
            onDecrement={this.handleDecrement} // Pass handleDecrement method to Counters component
            onDelete={this.handleDelete} // Pass handleDelete method to Counters component
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App; // Export App component as default export
