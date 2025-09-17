import { useState } from 'react';
import Board from '../Board';
import jumpTo from './jumpTo';
import styles from './style.module.css'

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
    }

    const moves = history.map((squares, move) => {
      let description;
      if (move > 0) {
        description = 'Ir para o ' + move + 'º movimento';
      } else {
        description = 'Ir para o inicio';
      }
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move, setCurrentMove)}>{description}</button>
        </li>
      );
    });

    return (
      <div className={styles.game}>
        <h1 className={styles.title}>JOGO DA VELHA</h1>
        <div className={styles.gameContent}>
          <div className={styles.gameBoard}>
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
          </div>
          <div className={styles.gameInfo}>
            <ol>{moves}</ol>
          </div>
        </div>
      </div>
    );
}
