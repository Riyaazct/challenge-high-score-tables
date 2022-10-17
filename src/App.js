import "./App.css";
import React, { useState } from "react";
import ScoreCard from "./ScoreCard";
// import { Navbar, Jumbotron, Button } from "react-bootstrap";
import allCountryScores from "./scores";
import ToggleButton from "./ToggleButton";

function App() {
  return (
    <>
      <div className="App">
        <ToggleButton data={allCountryScores} />
        <h1>High Scores per country</h1>
        <ScoreCard />
      </div>
    </>
  );
}

export default App;
