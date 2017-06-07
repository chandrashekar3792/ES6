//When you put a method on original constructor it will
// be inherited by rest of them

function Dog(name,breed){
  this.name=name;
  this.breed=breed;
}

Dog.prototype.bark=function(){
  console.log(`Bark Bark! My name is ${this.name}`);
}

Dog.prototype.cuddle=function(){
  console.log( `Dog breed ${this.breed}`);
}

const snickers= new Dog('Snickers','King Charles');
console.log('snickers',snickers);
snickers.bark();
snickers.cuddle();
//Once create an new Object,the functions created using prototype called automatically
