"use strict";

class Person {
  constructor(age,height){
    this.age=age;
    this.height=height;
    console.log('age is',this.age,'height is',this.height);
  }
// Get Method
  get agePlus(){
    return this.age + this.height;
  }
}

var person = new Person(28,6);
console.log(person.agePlus);

// Example two

class Cat{
  constructor(name){
    this.name = name;
  }

  speak(){
    console.log(this.nam + 'makes noise');
  }
}

var cat= new Cart('Meow');
cat.speak();

class Lion extends Cat {
  // function overriding
  speak(){
    super.speak();
    console.log(this.name+'roars');
  }
}

var meow = new Lion('meow');


