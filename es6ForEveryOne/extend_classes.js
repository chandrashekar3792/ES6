class Animal {
  constructor(name){
    this.name=name;
    this.thirst=100;
    this.belly=[];
  }
  drink(){
    this.thirst -=10;
    return this.thirst;
  }
  eat(food){
    this.belly.push(food);
    return this.belly;
  }
}

class Dog extends Animal{
  constructor(name,breed){
    super(name);
    this.breed=breed;
  }
  bark(){
    console.log(`Bark Bark I\m a dog`);
  }
}
const rhino=new Animal('Rhiney');
const snickers=new Dog('Snickers','King Charles');


rhino.eat('burger');//['burger'];
rhino.eat('leaves');//['burger','leaves'];
rhino.eat('zeebra');//['burger','leaves','zeebra'];

rhino.drink()//90
rhino.drink()//80
rhino.drink()//70

console.log(rhino);

snickers.bark();
snickers.eat('plastic');
snickers.eat('burger');
console.log(snickers);
