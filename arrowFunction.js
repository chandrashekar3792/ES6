var things = [1,2,3,4,5];
things.map(function (thing) {
    console.log(thing);//1,2,3,4,5
})

//OR

things.map((thing) => {
  console.log(thing);//1,2,3,4,5
});

var strings= things.map(thing => thing.toString());

function Person(){
  this.age=0;

  setInterval(growUp() => {
    this.age++;
  },1000);
};

var p new Person(); //age=1000
