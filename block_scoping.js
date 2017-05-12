//The scope of a variable defined with let is block scope.
//Variable Hoisting
// -> let will not hoist to the entire scope of bock they appear in
//By contrast var could hoist as below
{
  console.log(c); // undefined. Due to hoisting
  var c = 2;
}
//
{
  console.log(b); // ReferenceError: b is not defined
  let b = 3;
}

function varLoop() {
  for (var i = 0; i < 5; ++i) {
      setTimeout(function () {
          console.log(i); // output '5' 5 times
      }, 100);
  }
}

function letLoop(){
  for (let i = 0; i < 5; ++i) {
      setTimeout(function () {
          console.log(i); // output 0, 1, 2, 3, 4
      }, 100);
  }
}
varLoop();
letLoop();
