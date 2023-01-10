import "./styles.css";
import { GameContainer } from "./components/GameContainer";
import { useState, useEffect } from "react";
import { data } from "./components/data";

export default function App() {
  const [disabled, setDisabled] = useState(false);
  const [player1Turn, setPlayer1Turn] = useState(true);

  function changeTurns() {
    setPlayer1Turn((prev) => !prev);
  }

  function restart() {
    setDisabled(false);
    setPlayer1Turn(true);
    data.map();
  }

  const display = disabled ? (
    "Game Over"
  ) : (
    <GameContainer
      disabled={disabled}
      setDisabled={setDisabled}
      player1Turn={player1Turn}
      changeTurns={changeTurns}
    />
  );
  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      <h1>{display}</h1>
      <h1>{player1Turn ? "Player 2 Wins" : "Player 1 Wins"}</h1>;
    </div>
  );
}
