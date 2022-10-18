import { useState } from "react";
import allCountryScores from "./scores";

// sort countries alphabetically
// allCountryScores.sort((a, b) => {
//   let textA = a.name.toLowerCase();
//   let textB = b.name.toLowerCase();
//   return textA < textB ? -1 : textA > textB ? 1 : 0;
// });

let HighScoreTable = () => {
  const [data, setdata] = useState(allCountryScores);
  const [order, setorder] = useState("ASC");

  let [{ scores }] = data;

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[col] > b[col] ? 1 : -1
      );
      setdata(sorted);
      setorder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a[col] < b[col] ? 1 : -1
      );
      setdata(sorted);
      setorder("ASC");
    }
  };

  return (
    <>
      <button className="button" onClick={() => sorting({ scores })}>
        Sort
      </button>
      {data.map(({ name, scores }, index) => {
        return (
          <div className="table-container" key={index}>
            <h3>{name}</h3>
            <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th onClick={() => sorting("Name")}>Name</th>
                  <th onClick={() => sorting("Score")}>Score</th>
                </tr>
              </thead>
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
