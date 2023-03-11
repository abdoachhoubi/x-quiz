import React, { useState, useCallback } from "react";
import Head from "next/head";
import Link from "next/link";
import illustration from "@/public/club__logo.svg";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const { src: pic1 } = illustration;

const Lines = ({ top }) => {
  return (
    <>
      {top && <span className="line0"></span>}
      <span className="line1"></span>
      <span className="line2"></span>
      <span className="line3"></span>
      <span className="line4"></span>
      <span className="line5"></span>
      <span className="line6"></span>
    </>
  );
};

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  // Function to handle a player's move
  function handleMove(index) {
    if (board[index] !== "" || winner !== null) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    const newWinner = calculateWinner(newBoard);
    if (newWinner !== null) {
      setWinner(newWinner);
    } else if (newBoard.every((square) => square !== "")) {
      setWinner("Draw");
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  }

  // Function to calculate the winner of the game
  function calculateWinner(board) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] !== "" && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  // Render the game board
  return (
    <main className="container dark">
      <section className="content center">
        <div className="TicTacToe">
          <div className="board">
            {board.map((value, index) => (
              <div
                key={index}
                className="cell"
                onClick={() => handleMove(index)}
              >
                <h1 className={value === "X" ? "blue" : "pink"}>{value}</h1>
              </div>
            ))}
          </div>
          {winner !== null && (
            <h1 className={winner === "X" ? "winner blue" : "winner pink"}>
              {winner === "Draw" ? "It's a Draw" : `${winner} Wins`}
            </h1>
          )}
        </div>
        {winner && (
          <>
            <Link href="/qr" className="button cta__choose">
              Scan The QR Code
            </Link>
            <Link href="/" className="button cta__choose">
              Back To Home
            </Link>
          </>
        )}
      </section>
      <section className="cover particles">
        <Particles
          id="tsparticles"
          url="/particles.json"
          init={particlesInit}
          loaded={particlesLoaded}
        />
        <img className="logo__image" src={pic1} alt="cover image" />
      </section>
    </main>
  );
}

const Xoxo = () => {
  return (
    <>
      <Head>
        <title>X-QUIZ</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Lines />
      <TicTacToe />
      <div
        className="body"
        onClick={(e) => {
          e.bubbles = false;
        }}
      ></div>
    </>
  );
};

export default Xoxo;
