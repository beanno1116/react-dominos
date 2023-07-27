import React from 'react';

import styles from './boardView.module.css';
import BoardCorner from './components/BoardCorner';
import PlayerArea from './components/PlayerArea';
import BoardArea from './components/boardArea/BoardArea';
import useGameManager from '../../hooks/useGameManager';

const BoardView = ({ ...props }) => {
  useGameManager();  


  return (
    <div className={styles.board_view}>
      
      <div className={styles.board_view_grid}>

        <BoardCorner />

        <PlayerArea />

        <BoardCorner />

        <PlayerArea />

        <BoardArea />
        
        <PlayerArea />

        <BoardCorner />
        
        <PlayerArea />

        <BoardCorner />
        
      </div>
       
    </div>
  );
}

export default BoardView;