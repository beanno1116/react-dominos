/* eslint-disable no-debugger */
import React, { useEffect, useRef } from 'react';

import styles from './boardArea.module.css';
import Domino from '../../../../domino/Domino';

const BoardArea = ({ ...props }) => {

  const boardAreaRef = useRef(null);

  useEffect(() => {
    // debugger;
    if (boardAreaRef) {
      const boardRect = boardAreaRef.current.getBoundingClientRect();
      let midX = (boardRect.width / 2);
      let midY = (boardRect.height / 2);
      let midPoint  = {x:midX,y:midY};
    }
  },[])

  return (
    <div ref={boardAreaRef} className={styles.board_area}>
      <Domino />
       {/* <div style={{position:"relative",width:"150px",height:"75px",top:"284.7727px",left:"697.7272px",backgroundColor:"white"}}>
       </div> */}
    </div>
  );
}

export default BoardArea;