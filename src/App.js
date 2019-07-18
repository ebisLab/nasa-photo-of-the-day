import React from "react";
import "./App.css";
import Container from './components/Container'
import NasaData from './components/NasaData'

function App() {
  return (
    <div className="App">
      <div className="container">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!!!!
      </p>
      <section className="infoSection">
        <li>Stats:</li>
        <li>Predictions: </li>
        <li>Images: </li>
        <Container />
        <NasaData />
      </section>
    </div>
    </div>
  );
}

export default App;
