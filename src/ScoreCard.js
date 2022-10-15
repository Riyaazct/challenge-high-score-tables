import HighScoreTable from "./HighScoreTable";
import allCountryScores from "./scores";

const scores = allCountryScores.map((score, i) => {
  return <HighScoreTable key={i} data={allCountryScores[i]} />;
});

const ScoreCard = () => scores;

export default ScoreCard;
