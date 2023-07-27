import { useContext } from "react";

import { GameContext } from "../contexts/gameContext/GameContext";
import Player from "../models/Player";
import Domino from "../models/Domino";

const totalBoneCount = (_gameType) => {
  return ((Math.pow(_gameType,2) + (3*_gameType) + 2) / 2);
}


const useGameManager = () => {
  const {state,dispatch} = useContext(GameContext);

  const createPlayers = () => {
    let retArr = [];
    try {
      let playerCount = state.playerCount;      
      for (let i = 0; i < playerCount; i++) {
        const player = new Player(i);
        retArr = [...retArr,player];
      }
    } catch (error) {
      console.log("Error creating players")
      return;
    } 
    return retArr;

  }
  const createBoneYard = () => {
    let retArr = [];
    try {
      let itr = 0;
      while (itr > 0) {
        for (let i = 0; i < itr; i++) {
          const domino = new Domino(itr,i);
          
        }
      }
    } catch (error) {
      console.log("Error creating boneyard");
    }
  }

}

export default useGameManager;