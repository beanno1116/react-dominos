import BoardView from "./views/boardView/BoardView"
import { GameContextProvider } from "./contexts/gameContext/GameContext"

import GameView from "./views/gameView/GameView"

function App() {
  

  return (
    <GameContextProvider>
      <GameView>
        <BoardView />
      </GameView>
    </GameContextProvider>
  )
}

export default App
