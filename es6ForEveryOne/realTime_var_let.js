//VAR Examples

  //1 Blocking Code
  for(var i=0;i<10;i++){
    console.log(i);//0...9
  }

  //2 Non Blocking Code
  for(var i=0;i<10;i++){
    setTimeout(function() {
      console.log(`The Number is ${i}`);//10...10 times
    },1000);
  }

//LET Examples

for(let i=0;i<10;i++){
  console.log(i);//0...9
}

for(let i=0;i<10;i++){
  setTimeout(function() {
    console.log(`The Number is ${i}`);//10...10 times
  },1000);
}
