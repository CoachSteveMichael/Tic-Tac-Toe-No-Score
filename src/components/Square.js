import React from "react";

function Square(props) {
  return (
    <div className="square" onClick={() => props.handleClick(props.id)}>
      {props.value}
    </div>
  );
}

export { Square };
