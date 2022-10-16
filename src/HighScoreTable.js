import React from "react";

let HighScoreTable = (props) => {
  // console.log(props.data.scores);
  props.data.scores.sort((a, b) =>
    a.s <= b.s ? 1 : a.s >= b.s ? -1 : 0
  );
  return (
    <div className="table-container">
      <h3>{props.data.name}</h3>
      <table className="table">
        <tbody>
          {props.data.scores.map((e, i) => {
            return (
              <tr key={i}>
                <td>{e.n}</td>
                <td>{e.s}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HighScoreTable;
