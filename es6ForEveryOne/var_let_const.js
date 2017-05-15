//Function level scoping
function setWidth(){
  var width=100;
  console.log(width);
}

setWidth();

// console.log(width)//uncaught err

//Global scoping
var height=178;
function setHeight(){
  height=200;
}
setHeight();
console.log(height);//200

//Block Level scoping
var age=25;
if(age>15){
  var dogYears=age*7;
  console.log(`You are ${dogYears} dog years old`);
}
// console.log(dogYears);//uncaught error

const key='abc123';
key='xyz';//TypeError: Assignment to constant variable.
console.log(`key ${key}`);
