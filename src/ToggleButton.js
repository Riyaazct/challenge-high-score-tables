import { useState } from "react";
// import allCountryScores from "./scores";

const ToggleButton = (props) => {
  const [sort, setsort] = useState(0);

  props.data[0].scores.sort((a, b) =>
    a.s > b.s ? 1 : a.s < b.s ? -1 : 0
  );

  function sorter() {}

  return <button onClick={sorter}>Click me</button>;
};

export default ToggleButton;
