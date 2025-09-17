import Square from "../Square";
import styles from './style.module.css';
import calculateWinner from "./calculateWinner";
import handleClick from "./handleClick";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Board({ xIsNext, squares, onPlay }) {
  
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'VENCEDOR: ' + winner;
  } else {
    status = 'Próximo jogador: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className={styles.status}>{status}</div>
      <div className={styles.boardRow}>
        <Square value={squares[0]} onSquareClick={() => handleClick(0, squares, xIsNext, onPlay)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1, squares, xIsNext, onPlay)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2, squares, xIsNext, onPlay)} />
      </div>
      <div className={styles.boardRow}>
        <Square value={squares[3]} onSquareClick={() => handleClick(3, squares, xIsNext, onPlay)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4, squares, xIsNext, onPlay)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5, squares, xIsNext, onPlay)} />
      </div>
      <div className={styles.boardRow}>
        <Square value={squares[6]} onSquareClick={() => handleClick(6, squares, xIsNext, onPlay)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7, squares, xIsNext, onPlay)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8, squares, xIsNext, onPlay)} />
      </div>
    </>
  );
}
