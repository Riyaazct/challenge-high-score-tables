import HighScoreTable from "./HighScoreTable";
import allCountryScores from "./scores";

allCountryScores.sort((a, b) => {
  let textA = a.name.toLowerCase();
  let textB = b.name.toLowerCase();
  return textA < textB ? -1 : textA > textB ? 1 : 0;
});

const scores = allCountryScores.map((score, i) => {
  return <HighScoreTable key={i} data={allCountryScores[i]} />;
});

const ScoreCard = () => scores;

export default ScoreCard;
