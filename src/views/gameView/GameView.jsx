

import styles from './gameView.module.css';

const GameView = ({ children }) => {
  return (
    <div className={styles.game_view}>
       {children}
    </div>
  );
}

export default GameView;