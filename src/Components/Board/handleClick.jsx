import calculateWinner from "./calculateWinner";

export default function handleClick(i, squares, xIsNext, onPlay) {
    if (calculateWinner(squares) || squares[i]) {
        return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
}
