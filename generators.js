// Generators are special kind of function that can pause and resume states
"use strict";

function* neverEnding(){
  let index=0;
  while(index<2){
    yield index++;
  }
}

let gen = neverEnding();

console.log(gen.next()); //{value:0,done:false}
//Iterators are

while(gen.next().done ===false){
  console.log(gen.next());//{value:1,done:false}
}
