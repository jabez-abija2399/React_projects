import logo from "./logo.svg";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <main className="container">
        <Counters />
      </main>
    </div>
  );
}

export default App;
