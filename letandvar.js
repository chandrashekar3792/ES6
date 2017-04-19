var x=3;
function varFunc(randamize){
  if(randamize){
    var x = Math.random();
    return x;
  }
  return x;
}
varFunc(false);//undifined

let x=3;
function letFunc(randamize){
  if(randamize){
    let x = Math.random();
    return x;
  }
  return x;
}
letFunc(false);//3
