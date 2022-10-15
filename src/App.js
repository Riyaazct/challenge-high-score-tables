import "./App.css";
import React from "react";
import ScoreCard from "./ScoreCard";
// import { Navbar, Jumbotron, Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <h1>High Scores per country</h1>
      <ScoreCard />
    </div>
  );
}

export default App;
