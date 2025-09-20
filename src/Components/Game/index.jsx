import { useState } from 'react';
import Board from '../Board';
import Button from 'react-bootstrap/Button';
import styles from './style.module.css'

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];
    const [darkMode, setDarkMode] = useState(false);

    function handlePlay(nextSquares) {
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
    }

    function restart() {
      setHistory([Array(9).fill(null)]);
      setCurrentMove(0);
    }

    return (
      <div className={styles.game}>
        <h1 className={styles.title}>JOGO DA VELHA</h1>
        <div className={styles.gameContent}>
          <div className={styles.gameBoard}>
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
          </div>
          <div className={styles.buttons}>
            <Button className={styles.btnReplay} onClick={restart}>
              RESET <i class="bi bi-repeat" style={{fontSize:'30px'}}></i>
            </Button>
          </div>
        </div>
      </div>
    );
}
