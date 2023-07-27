import { createContext,useReducer } from "react";
import Game from "../../models/Game";

// const initialState = {
//   type: 6,
//   playerCount: 4,
//   players: [],
//   turn: 0,
//   boneYard: []
// }

const initialState = new Game(6,4);

export const GameContext = createContext();

export const GameContextProvider = ({children}) => {
  const [state,dispatch] = useReducer(GameContext,initialState);
  const value = {state,dispatch};
  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  )
}