
class Game{
  type = 6;
  playerCount = 4;
  currentTurn = 0;
  boneYard = [];
  inHandCount = 7;
  players = [];

  constructor(_type=6,_playerCount=4){
    this.type = _type;
    this.playerCount = _playerCount;
  }


}

export default Game;