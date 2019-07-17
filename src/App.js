import React from "react";
import "./App.css";
import Container from './components/Container'

function App() {
  return (
    <div className="App">
      <div className="container">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!!!!
      </p>
      <section>
        <li>Stats:</li>
        <li>Predictions: </li>
        <li>Images: </li>
        <Container />
      </section>
    </div>
    </div>
  );
}

export default App;
