const Test = (props) => {
  console.log(props);
  return (
    <div>
      <h3>{}</h3>
      <table className="table">
        <tbody className="table-container">
          <tr>
            <td>{}</td>
            <td>{}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Test;
