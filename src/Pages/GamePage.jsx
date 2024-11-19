import React, { useState } from "react";
import { useEffect } from "react";
import "./GamePage.css";
import ModelComponent from "./ModelComponent";
import { useNavigate } from "react-router-dom";
function GamePage() {
  const navigate = useNavigate();
  const player1 = localStorage.getItem("player1Name") || "Player1";
  const player2 = localStorage.getItem("player2Name") || "Player2";
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
      PlayerPlaying("X");
    }
  }, [turn]);

  const checkWinner = (newvalues) => {
    setCount(count + 1);
    console.log(count);
    if (count == 9) {
      setdisplaywinner(true);
    }
    for (let i = 0; i < 8; i++) {
      const val1 = winningPatterns[i][0];
      const val2 = winningPatterns[i][1];
      const val3 = winningPatterns[i][2];
      console.log(val1, val2, val3);
      if (
        newvalues[val1] === "X" &&
        newvalues[val2] === "X" &&
        newvalues[val3] === "X"
      ) {
        setWinner(player1);
        if (i < 3) {
          document
            .getElementById(`horline${i + 1}`)
            .classList.add("animate-line");
        } else if (i < 6) {
          document
            .getElementById(`verline${i + 1}`)
            .classList.add("animate-line-2");
        }
        setTimeout(() => {
          setdisplaywinner(true);
        }, 0);
      } else if (
        newvalues[val1] === "O" &&
        newvalues[val2] === "O" &&
        newvalues[val3] === "O"
      ) {
        setWinner(player2);
        if (i < 3) {
          document
            .getElementById(`horline${i + 1}`)
            .classList.add("animate-line");
        } else if (i < 6) {
          document
            .getElementById(`verline${i + 1}`)
            .classList.add("animate-line-2");
        }
        setTimeout(() => {
          setdisplaywinner(true);
        }, 0);
      }
    }

    // if (values[0] == "X" && values[1] == "X" && values[2] == "X") {
    //   document.getElementById("horline1").classList.add("animate-line");
    //   setWinner(player1);
    //   setTimeout(() => {
    //     setdisplaywinner(true);
    //   }, 600);
    //   //   alert("Player 1 Wins");
    //   //   window.location.reload();
    // } else if (values[3] == "X" && values[4] == "X" && values[5] == "X") {
    //   document.getElementById("horline2").classList.add("animate-line");
    //   setWinner(player1);
    //   setTimeout(() => {
    //     setdisplaywinner(true);
    //   }, 600);
    //   //   alert("Player 1 Wins");
    //   //   window.location.reload();
    // } else if (values[6] == "X" && values[7] == "X" && values[8] == "X") {
    //   document.getElementById("horline3").classList.add("animate-line");
    //   setWinner(player1);
    //   setTimeout(() => {
    //     setdisplaywinner(true);
    //   }, 600);
    //   //   alert("Player 1 Wins");
    //   //   window.location.reload();
    // } else if (values[0] == "X" && values[3] == "X" && values[6] == "X") {
    //   document.getElementById("verline4").classList.add("animate-line-2");
    //   setWinner(player1);
    //   setTimeout(() => {
    //     setdisplaywinner(true);
    //   }, 600);
    //   // window.location.reload();
    // } else if (values[1] == "X" && values[4] == "X" && values[7] == "X") {
    //   document.getElementById("verline5").classList.add("animate-line-2");
    //   setWinner(player1);
    //   setTimeout(() => {
    //     setdisplaywinner(true);
    //   }, 600);
    //   //   alert("Player 1 Wins");
    //   //   window.location.reload();
    // } else if (values[2] == "X" && values[5] == "X" && values[8] == "X") {
    //   document.getElementById("verline6").classList.add("animate-line-2");
    //   setWinner(player1);
    //   setTimeout(() => {
    //     setdisplaywinner(true);
    //   }, 600);
    //   //   alert("Player 1 Wins");
    //   //   window.location.reload();
    // } else if (values[0] == "X" && values[4] == "X" && values[8] == "X") {
    //   setWinner(player1);
    //   setdisplaywinner(true);
    //   //   alert("Player 1 Wins");
    //   //   window.location.reload();
    // } else if (values[2] == "X" && values[4] == "X" && values[6] == "X") {
    //   setWinner(player1);
    //   setdisplaywinner(true);
    //   //   alert("Player 1 Wins");
    //   //   window.location.reload();
    // } else if (values[0] == "O" && values[1] == "O" && values[2] == "O") {
    //   setWinner(player2);
    //   document.getElementById("horline1").classList.add("animate-line");
    //   setTimeout(() => {
    //     setdisplaywinner(true);
    //   }, 600);
    //   //   alert("Player 2 Wins");
    //   //   window.location.reload();
    // } else if (values[3] == "O" && values[4] == "O" && values[5] == "O") {
    //   setWinner(player2);
    //   document.getElementById("horline2").classList.add("animate-line");
    //   setTimeout(() => {
    //     setdisplaywinner(true);
    //   }, 600);
    //   //   alert("Player 2 Wins");
    //   //   window.location.reload();
    // } else if (values[6] == "O" && values[7] == "O" && values[8] == "O") {
    //   setWinner(player2);
    //   document.getElementById("horline3").classList.add("animate-line");
    //   setTimeout(() => {
    //     setdisplaywinner(true);
    //   }, 600);
    //   //   alert("Player 2 Wins");
    //   //   window.location.reload();
    // } else if (values[0] == "O" && values[3] == "O" && values[6] == "O") {
    //   setWinner(player2);
    //   document.getElementById("verline4").classList.add("animate-line-2");
    //   setTimeout(() => {
    //     setdisplaywinner(true);
    //   }, 600);
    //   //   alert("Player 2 Wins");
    //   //   window.location.reload();
    // } else if (values[1] == "O" && values[4] == "O" && values[7] == "O") {
    //   setWinner(player2);
    //   document.getElementById("verline5").classList.add("animate-line-2");
    //   setTimeout(() => {
    //     setdisplaywinner(true);
    //   }, 600);
    //   //   alert("Player 2 Wins");
    //   //   window.location.reload();
    // } else if (values[2] == "O" && values[5] == "O" && values[8] == "O") {
    //   setWinner(player2);
    //   document.getElementById("verline6").classList.add("animate-line-2");
    //   setTimeout(() => {
    //     setdisplaywinner(true);
    //   }, 600);
    //   //   alert("Player 2 Wins");
    //   //   window.location.reload();
    // } else if (values[0] == "O" && values[4] == "O" && values[8] == "O") {
    //   setWinner(player2);
    //   setdisplaywinner(true);
    //   //   alert("Player 2 Wins");
    //   //   window.location.reload();
    // } else if (values[2] == "O" && values[4] == "O" && values[6] == "O") {
    //   setWinner(player2);
    //   setdisplaywinner(true);
    //   //   alert("Player 2 Wins");
    //   //   window.location.reload();
    // }
  };

  const changeValue = (ind) => {
    const newValues = [...values];
    newValues[ind] = turn;
    setvalues(newValues);
    setturn(turn === "X" ? "O" : "X");
    PlayerPlaying(turn === "X" ? "O" : "X");
    checkWinner(newValues);
    console.log(document.getElementById(ind));
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

  const PlayerPlaying = (t) => {
    if (t === "X") {
      // document.getElementById("Player1Name").classList.remove("PlayerName");
      const p1 = document.getElementById("Player1Name");
      p1.classList.add("PlayerPlaying");
      const p2 = document.getElementById("Player2Name");
      p2.classList.remove("PlayerPlaying");
      console.log("this is XX", p1, p2);
    } else if (t === "O") {
      const p1 = document.getElementById("Player2Name");
      p1.classList.add("PlayerPlaying");
      const p2 = document.getElementById("Player1Name");
      p2.classList.remove("PlayerPlaying");
      console.log("this is OO", p1, p2);
    }
  };

  return (
    <div className="GameContainer">
      {displaywinner && <ModelComponent props={{ winner: Winner }} />}
      <img src="logobg.png" style={{ height: "90px" }} />
      <div className="verline4" id="verline4"></div>
      <div className="verline5" id="verline5"></div>
      <div className="verline6" id="verline6"></div>
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
          <p className="PlayerName" id="Player1Name">
            {player1}
          </p>
        </div>
        <div className="secondPlayer">
          <p className="PlayerName" id="Player2Name">
            {player2}
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

export default GamePage;
