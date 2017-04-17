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
