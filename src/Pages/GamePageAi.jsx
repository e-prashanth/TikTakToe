import React, { useState } from "react";
import { useEffect } from "react";
import "./GamePage.css";
import ModelComponent from "./ModelComponent";
import { useNavigate } from "react-router-dom";
function GamePageAi() {
  const navigate = useNavigate();
  const player1 = localStorage.getItem("player1Name") || "Player1";
  const [values, setvalues] = useState(["", "", "", "", "", "", "", "", ""]);
  const winningPatterns = [
    [0, 1, 2], //row 1
    [3, 4, 5], //row 2
    [6, 7, 8], //row 3
    [0, 3, 6], //col 1
    [1, 4, 7], //col 2
    [2, 5, 8], //col 3
    [0, 4, 8], //diag 1
    [2, 4, 6], //diag 2
  ];
  const [turn, setturn] = useState("X");
  const [displaywinner, setdisplaywinner] = useState(false);
  const [Winner, setWinner] = useState("None");
  const [count, setCount] = useState(1);
  useEffect(() => {
    if (turn === "X") {
      MakeAMove();
    }
  }, [turn]);

  const checkWinner = (newvalues) => {
    setCount(count + 1);
    if (count == 9) {
      setdisplaywinner(true);
    }
    for (let i = 0; i < 8; i++) {
      const val1 = winningPatterns[i][0];
      const val2 = winningPatterns[i][1];
      const val3 = winningPatterns[i][2];
      if (
        newvalues[val1] === "X" &&
        newvalues[val2] === "X" &&
        newvalues[val3] === "X"
      ) {
        setWinner('Computer');
        setTimeout(() => {
          setdisplaywinner(true);
        }, 0);
      } else if (
        newvalues[val1] === "O" &&
        newvalues[val2] === "O" &&
        newvalues[val3] === "O"
      ) {
        setWinner(player1);
        setTimeout(() => {
          setdisplaywinner(true);
        }, 0);
      }
    }
  };

  const changeValue = (ind) => {
    const newValues = [...values];
    newValues[ind] = turn;
    setvalues(newValues);
    setturn(turn === "X" ? "O" : "X");
    checkWinner(newValues);
    const slot = document.getElementById(ind);
    slot.disabled = true;
    turn === "X"
      ? (slot.style.color = "whitesmoke")
      : (slot.style.color = "black");
  };

  const handleResetGame = () => {
    window.location.reload();
  };
  const handleGoBack = () => {
    localStorage.clear();
    navigate("/TikTakToe/");
  };

  const SeeWinner = (newvalues) => {
    for (let i = 0; i < 8; i++) {
      const val1 = winningPatterns[i][0];
      const val2 = winningPatterns[i][1];
      const val3 = winningPatterns[i][2];
      if (
        newvalues[val1] === "X" &&
        newvalues[val2] === "X" &&
        newvalues[val3] === "X"
      ) {
        return 1; // Player X wins
      } else if (
        newvalues[val1] === "O" &&
        newvalues[val2] === "O" &&
        newvalues[val3] === "O"
      ) {
        return -1; // Player O wins
      }
    }

    // Check for draw
    let draw = true;
    for (let i = 0; i < 9; i++) {
      if (newvalues[i] === "") {
        draw = false;
        break;
      }
    }

    if (draw) {
      return 0; // Game is a draw
    }

    // If no winner and no draw yet, return null
    return null;
  };

  const MakeAMove = () => {
    let bestScore = -Infinity;
    let bestMove;
    let tempvalues = values;
    for (let i = 0; i < 9; i++) {
      if (values[i] === "") {
        tempvalues[i] = "X";
        let score = miniMax(tempvalues, 0, false);
        tempvalues[i] = "";
        if (score > bestScore) {
          bestScore = score;
          bestMove = i;
        }
      }
    }
    if (bestMove !== undefined) {
      const newValues = [...values];
      newValues[bestMove] = "X";
      setvalues(newValues);
      setturn("O");
      checkWinner(newValues);
      const slot = document.getElementById(bestMove);
      slot.disabled = true;
      console.log("bestmove:", bestMove);
    }
  };

  const miniMax = (tempValues, depth, isMaximizing) => {
    const score = SeeWinner(tempValues);
    if (score !== null) {
      return score * (10 - depth); // Adjust score based on depth
    }

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < 9; i++) {
        if (tempValues[i] === "") {
          tempValues[i] = "X";
          let currentScore = miniMax(tempValues, depth + 1, false);
          tempValues[i] = "";
          bestScore = Math.max(bestScore, currentScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < 9; i++) {
        if (tempValues[i] === "") {
          tempValues[i] = "O";
          let currentScore = miniMax(tempValues, depth + 1, true);
          tempValues[i] = "";
          bestScore = Math.min(bestScore, currentScore);
        }
      }
      return bestScore;
    }
  };


  return (
    <div className="GameContainer">
      {displaywinner && <ModelComponent props={{ winner: Winner }} />}
      <img src="logobg.png" style={{ height: "90px" }} />
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
      </div>
      <div className="PlayerContainer">
        <div className="firstPlayer">
          <p className="PlayerName" id="Player1Name">
            {"Computer(X)"}
          </p>
        </div>
        <div className="secondPlayer">
          <p className="PlayerName" id="Player2Name">
            {`${player1}(O)`}
          </p>
        </div>
      </div>
      <button
        className="ResetButton1"
        onClick={() => {
          handleResetGame();
        }}
      >
        Reset Game
      </button>
      <button
        className="ResetButton1"
        onClick={() => {
          handleGoBack();
        }}
      >
        Go Back
      </button>
    </div>
  );
}

export default GamePageAi;
