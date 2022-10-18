import "./App.css";
// import { Navbar, Jumbotron, Button } from "react-bootstrap";
import HighScoreTable from "./HighScoreTable";

function App() {
  return (
    <>
      <div className="App">
        <h1>High Scores per country</h1>
        <HighScoreTable />
      </div>
    </>
  );
}

export default App;
