import styles from './style.module.css';

export default function Square({ value, onSquareClick }) {
    return (
      <button className={styles.square} onClick={onSquareClick}>
        {value}
      </button>
    );
}