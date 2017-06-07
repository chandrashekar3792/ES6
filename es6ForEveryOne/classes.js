//Class declaration
class Dog {
  constructor(name,breed){
      this.name=name;
      this.breed=breed;
  }
  bark(){
    console.log(`BArk Bark my name is ${this.name}`)
  }
  cuddle(){
    console.log( `Dog breed ${this.breed}`);
  }
  static info(){
    console.log('A dog is better than a cat 10 times');
  }
  get description(){
    return `${this.name} is a ${this.breed} type of dog`;
  }

  set nicknames(value){
    this.nick=value.trim();
  }

  get nickname(){
    return this.nick;
  }
}

const snickers= new Dog('Snickers','King Charles');
console.log('snickers',snickers);
//Class expression
// const Dog = class  {
//
//
// }

//To call static method we need to call with class name
//ex
Dog.info();
//We can not call with instance of class
//ex snickers.info()

// setters
snickers.nicknames='snicky';
//getters
snickers.nickname
