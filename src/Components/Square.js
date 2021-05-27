import React from "react";
import "../App.css";

function Square({ value, chooseSquare }) {
  return (
    <div onClick={chooseSquare} className="square">
      {value}
    </div>
  );
}

export default Square;
