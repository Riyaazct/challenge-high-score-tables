import { useState } from "react";
import allCountryScores from "./scores";

// sort countries alphabetically
allCountryScores.sort((a, b) => {
  let textA = a.name.toLowerCase();
  let textB = b.name.toLowerCase();
  return textA < textB ? -1 : textA > textB ? 1 : 0;
});

let HighScoreTable = () => {
  const [data, setdata] = useState(allCountryScores);
  const [order, setorder] = useState("ASC");

  let [{ scores }] = data;

  let arrayOfScores = data.map(({ scores }, i) =>
    scores.map((p) => p.s)
  );

  // const sorting = (col) => {
  //   if (order === "ASC") {
  //     const sorted = [...data].sort((a, b) => (a < b ? -1 : 1));

  //     setdata(sorted);
  //     setorder("DSC");
  //   }
  //   if (order === "DSC") {
  //     const sorted = [...data].sort((a, b) => (a > b ? 1 : -1));
  //     setdata(sorted);
  //     setorder("ASC");
  //   }
  // };

  return (
    <>
      <button onClick={() => {}}>Click</button>
      {data.map(({ name, scores }, index) => {
        return (
          <div className="table-container" key={index}>
            <h3>{name}</h3>
            <table className="table">
              <tbody>
                {scores.map(({ n, s }, i) => (
                  <tr key={i}>
                    <td>{n}</td>
                    <td>{s}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </>
  );
};

export default HighScoreTable;
