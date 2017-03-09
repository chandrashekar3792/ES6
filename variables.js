"use strict"

//Original, Function scope
var foo = "foo";

//Similiar to var,except it is block scope
let bar = "bar";

//Cannot be re-assigned
const baz="baz";

//=======const example==============
const foo ="first thing";

foo= "second thing";
console.log('foo',foo);//first thing


const foo= {
  one:"hello",
  two:{
    three:"goodbye"
  }
};

foo.two.three = "not goodbye";

console.log(foo);//{one:'hello',two:{three:not goodbye}}

//============var examples=============
function varTest(){
  var foo = true;

  if(true){
    var foo = false;
    console.log(foo)//false
  }
  console.log(foo);//false
}



//============let examples=============
function letTest(){
  let foo = true;
  if(true){
    let foo=false
    console.log(foo)//false
  }
  console.log(foo);//true
}
