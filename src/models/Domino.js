class Domino{
  
  
  constructor(_val1,_val2){
    this.max = (_val1 === _val2) ? _val1 : (_val1 > _val2) ? _val1 : _val2;
    this.min = (_val1 === _val2) ? _val2 : (_val2 > _val1) ? _val2 : _val1;
  }
}

export default Domino;