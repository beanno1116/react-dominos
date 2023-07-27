class Player{
  id = 0;
  name = "";
  score = 0;
  hand = [];
  isPerson = true;

  constructor(_id,_name){
    this.id = _id;
    this.name = _name ? _name : `Player ${parseInt(_id) + 1}`;
  }
  
}

export default Player;