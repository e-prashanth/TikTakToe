import React, { useState } from "react";
import "./GamePage.css";
import ModelComponent from "./ModelComponent";
import { useNavigate } from "react-router-dom";
function GamePage() {
  const navigate = useNavigate();
  const player1 = localStorage.getItem("player1Name") || "Player1";
  const player2 = localStorage.getItem("player2Name") || "Player2";
  const [values, setvalues] = useState(["", "", "", "", "", "", "", "", ""]);
  const [turn, setturn] = useState("X");
  const [displaywinner, setdisplaywinner] = useState(false);
  const [Winner, setWinner] = useState("None");
  const [count, setCount] = useState(1);
  const checkWinner = () => {
    setCount(count + 1);
    console.log(count);
    if (count == 9) {
      setdisplaywinner(true);
    }
    console.log(values);
    if (values[0] == "X" && values[1] == "X" && values[2] == "X") {
      document.getElementById("horline1").classList.add("animate-line");
      setWinner(player1);
      setTimeout(() => {
        setdisplaywinner(true);
      }, 600);
      //   alert("Player 1 Wins");
      //   window.location.reload();
    } else if (values[3] == "X" && values[4] == "X" && values[5] == "X") {
      document.getElementById("horline2").classList.add("animate-line");
      setWinner(player1);
      setTimeout(() => {
        setdisplaywinner(true);
      }, 600);
      //   alert("Player 1 Wins");
      //   window.location.reload();
    } else if (values[6] == "X" && values[7] == "X" && values[8] == "X") {
      document.getElementById("horline3").classList.add("animate-line");
      setWinner(player1);
      setTimeout(() => {
        setdisplaywinner(true);
      }, 600);
      //   alert("Player 1 Wins");
      //   window.location.reload();
    } else if (values[0] == "X" && values[3] == "X" && values[6] == "X") {
      document.getElementById("verline1").classList.add("animate-line-2");
      setWinner(player1);
      setTimeout(() => {
        setdisplaywinner(true);
      }, 600);
      // window.location.reload();
    } else if (values[1] == "X" && values[4] == "X" && values[7] == "X") {
      document.getElementById("verline2").classList.add("animate-line-2");
      setWinner(player1);
      setTimeout(() => {
        setdisplaywinner(true);
      }, 600);
      //   alert("Player 1 Wins");
      //   window.location.reload();
    } else if (values[2] == "X" && values[5] == "X" && values[8] == "X") {
      document.getElementById("verline3").classList.add("animate-line-2");
      setWinner(player1);
      setTimeout(() => {
        setdisplaywinner(true);
      }, 600);
      //   alert("Player 1 Wins");
      //   window.location.reload();
    } else if (values[0] == "X" && values[4] == "X" && values[8] == "X") {
      setWinner(player1);
      setdisplaywinner(true);
      //   alert("Player 1 Wins");
      //   window.location.reload();
    } else if (values[2] == "X" && values[4] == "X" && values[6] == "X") {
      setWinner(player1);
      setdisplaywinner(true);
      //   alert("Player 1 Wins");
      //   window.location.reload();
    } else if (values[0] == "O" && values[1] == "O" && values[2] == "O") {
      setWinner(player2);
      document.getElementById("horline1").classList.add("animate-line");
      setTimeout(() => {
        setdisplaywinner(true);
      }, 600);
      //   alert("Player 2 Wins");
      //   window.location.reload();
    } else if (values[3] == "O" && values[4] == "O" && values[5] == "O") {
      setWinner(player2);
      document.getElementById("horline2").classList.add("animate-line");
      setTimeout(() => {
        setdisplaywinner(true);
      }, 600);
      //   alert("Player 2 Wins");
      //   window.location.reload();
    } else if (values[6] == "O" && values[7] == "O" && values[8] == "O") {
      setWinner(player2);
      document.getElementById("horline3").classList.add("animate-line");
      setTimeout(() => {
        setdisplaywinner(true);
      }, 600);
      //   alert("Player 2 Wins");
      //   window.location.reload();
    } else if (values[0] == "O" && values[3] == "O" && values[6] == "O") {
      setWinner(player2);
      document.getElementById("verline1").classList.add("animate-line-2");
      setTimeout(() => {
        setdisplaywinner(true);
      }, 600);
      //   alert("Player 2 Wins");
      //   window.location.reload();
    } else if (values[1] == "O" && values[4] == "O" && values[7] == "O") {
      setWinner(player2);
      document.getElementById("verline2").classList.add("animate-line-2");
      setTimeout(() => {
        setdisplaywinner(true);
      }, 600);
      //   alert("Player 2 Wins");
      //   window.location.reload();
    } else if (values[2] == "O" && values[5] == "O" && values[8] == "O") {
      setWinner(player2);
      document.getElementById("verline3").classList.add("animate-line-2");
      setTimeout(() => {
        setdisplaywinner(true);
      }, 600);
      //   alert("Player 2 Wins");
      //   window.location.reload();
    } else if (values[0] == "O" && values[4] == "O" && values[8] == "O") {
      setWinner(player2);
      setdisplaywinner(true);
      //   alert("Player 2 Wins");
      //   window.location.reload();
    } else if (values[2] == "O" && values[4] == "O" && values[6] == "O") {
      setWinner(player2);
      setdisplaywinner(true);
      //   alert("Player 2 Wins");
      //   window.location.reload();
    }
  };
  const changeValue = (ind) => {
    const newValues = [...values];
    newValues[ind] = turn;
    setvalues(newValues);
    setturn(turn === "X" ? "O" : "X");
    checkWinner();
    console.log(document.getElementById(ind));
    document.getElementById(ind).disabled = true;
  };
  const handleResetGame = () => {
    window.location.reload();
  };
  const handleGoBack = () => {
    navigate("/TikTakToe/");
  };

  return (
    <div className="GameContainer">
      {displaywinner && <ModelComponent props={{ winner: Winner }} />}
      <img src="logobg.png" style={{ height: "90px" }} />
      <div className="verline1" id="verline1"></div>
      <div className="verline2" id="verline2"></div>
      <div className="verline3" id="verline3"></div>
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
      <div className="PlayerContainer">
        <div className="firstPlayer">
          {turn === "X" && <img className="arrowImage" src="arrow.png"></img>}
          <img className="profileImage" src="profile.png"></img>
          <h1>{player1}</h1>
        </div>
        <div className="secondPlayer">
          <img className="profileImage" src="profile.png"></img>
          <h1>{player2}</h1>
          {turn === "O" && (
            <img className="arrowImage" src="arrow-L.png"></img>
          )}
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

export default GamePage;
