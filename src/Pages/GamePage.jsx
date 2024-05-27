import React, { useState } from "react";
import "./GamePage.css";
function GamePage() {
  const player1 = localStorage.getItem("player1Name") | "Player1";
  const player2 = localStorage.getItem("player2Name") | "Player2";
  const [values, setvalues] = useState(["", "", "", "", "", "", "", "", ""]);
  const [turn, setturn] = useState("X");
  const checkWinner = () => {
    console.log(values);
    if (values[0] == "X" && values[1] == "X" && values[2] == "X") {
      document.getElementById("horline1").classList.add("animate-line");
      //   alert("Player 1 Wins");
      //   window.location.reload();
    } else if (values[3] == "X" && values[4] == "X" && values[5] == "X") {
      document.getElementById("horline2").classList.add("animate-line");
      //   alert("Player 1 Wins");
      //   window.location.reload();
    } else if (values[6] == "X" && values[7] == "X" && values[8] == "X") {
      document.getElementById("horline3").classList.add("animate-line");
      //   alert("Player 1 Wins");
      //   window.location.reload();
    } else if (values[0] == "X" && values[3] == "X" && values[6] == "X") {
      alert("Player 1 Wins");
      window.location.reload();
    } else if (values[1] == "X" && values[4] == "X" && values[7] == "X") {
      alert("Player 1 Wins");
      window.location.reload();
    } else if (values[2] == "X" && values[5] == "X" && values[8] == "X") {
      alert("Player 1 Wins");
      window.location.reload();
    } else if (values[0] == "X" && values[4] == "X" && values[8] == "X") {
      alert("Player 1 Wins");
      window.location.reload();
    } else if (values[2] == "X" && values[5] == "X" && values[6] == "X") {
      alert("Player 1 Wins");
      window.location.reload();
    } else if (values[0] == "O" && values[1] == "O" && values[2] == "O") {
      document.getElementById("horline1").classList.add("animate-line");
      //   alert("Player 2 Wins");
      //   window.location.reload();
    } else if (values[3] == "O" && values[4] == "O" && values[5] == "O") {
      document.getElementById("horline2").classList.add("animate-line");
      //   alert("Player 2 Wins");
      //   window.location.reload();
    } else if (values[6] == "O" && values[7] == "O" && values[8] == "O") {
      document.getElementById("horline3").classList.add("animate-line");
      //   alert("Player 2 Wins");
      //   window.location.reload();
    } else if (values[0] == "O" && values[3] == "O" && values[6] == "O") {
      alert("Player 2 Wins");
      window.location.reload();
    } else if (values[1] == "O" && values[4] == "O" && values[7] == "O") {
      alert("Player 2 Wins");
      window.location.reload();
    } else if (values[2] == "O" && values[5] == "O" && values[8] == "O") {
      alert("Player 2 Wins");
      window.location.reload();
    } else if (values[0] == "O" && values[4] == "O" && values[8] == "O") {
      alert("Player 2 Wins");
      window.location.reload();
    } else if (values[2] == "O" && values[5] == "O" && values[6] == "O") {
      alert("Player 2 Wins");
      window.location.reload();
    }
  };
  const changeValue = (ind) => {
    const newValues = [...values];
    newValues[ind] = turn;
    setvalues(newValues);
    setturn(turn === "X" ? "O" : "X");
    checkWinner();
    document.getElementById(ind).disabled = true;
  };

  return (
    <div className="GameContainer">
      <img src="/logobg.png" style={{ height: "90px" }} />

      {/* <img src="/horline.png" className="horline1"/> */}
      <div className="boxContainer">
        <div className="firstContainer">
          <button
            className="Slots"
            id="0"
            onClick={() => {
              changeValue(0);
            }}
          >
            {values[0]}
          </button>
          <button
            className="Slots"
            id="1"
            onClick={() => {
              changeValue(1);
            }}
          >
            {values[1]}
          </button>
          <button
            className="Slots"
            id="2"
            onClick={() => {
              changeValue(2);
            }}
          >
            {values[2]}
          </button>
          <div className="horline1" id="horline1"></div>
        </div>
        <div className="secondContainer">
          <button
            className="Slots"
            id="3"
            onClick={() => {
              changeValue(3);
            }}
          >
            {values[3]}
          </button>
          <button
            className="Slots"
            id="4"
            onClick={() => {
              changeValue(4);
            }}
          >
            {values[4]}
          </button>
          <button
            className="Slots"
            id="5"
            onClick={() => {
              changeValue(5);
            }}
          >
            {values[5]}
          </button>
          <div className="horline2" id="horline2"></div>
        </div>
        <div className="thirdContainer">
          <button
            className="Slots"
            id="6"
            onClick={() => {
              changeValue(6);
            }}
          >
            {values[6]}
          </button>
          <button
            className="Slots"
            id="7"
            onClick={() => {
              changeValue(7);
            }}
          >
            {values[7]}
          </button>
          <button
            className="Slots"
            id="8"
            onClick={() => {
              changeValue(8);
            }}
          >
            {values[8]}
          </button>
          <div className="horline3" id="horline3"></div>
        </div>
      </div>
    </div>
  );
}

export default GamePage;
