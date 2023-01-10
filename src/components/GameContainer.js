import React from "react";
import { useState, useEffect } from "react";
import { data } from "./data.js";
import { Square } from "./Square";
import { winningSquares } from "./winningSquares";

function GameContainer(props) {
  const [box, setBoxes] = useState(data);

  const { disabled, setDisabled, player1Turn, changeTurns } = props;

  function handleWinner() {
    for (let i = 0; i < winningSquares.length; i++) {
      let [a, b, c] = winningSquares[i];
      if (
        box[a].value === box[b].value &&
        box[c].value === box[a].value &&
        box[a].value
      ) {
        console.log("winner", player1Turn);
        setDisabled(true);
      }
    }
  }

  useEffect(() => {
    handleWinner();
  }, [box]);

  function handleClick(id) {
    if (disabled) return;
    let copy = [...box];
    for (let i = 0; i < copy.length; i++) {
      if (copy[i].id === id && !copy[i].value) {
        copy[i].value = player1Turn ? "X" : "O";
        setBoxes(copy);
        changeTurns();
      }
    }
  }

  const boxElements = box.map((ele, index) => (
    <Square
      id={ele.id}
      value={ele.value}
      selected={ele.selected}
      handleClick={handleClick}
      key={index}
    />
  ));

  return <div className="gamecontainer">{boxElements}</div>;
}

export { GameContainer };
