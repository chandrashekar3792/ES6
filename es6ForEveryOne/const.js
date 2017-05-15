const key ='chndd';

// key='ddd';//error cannot change constants

//Constant objects can be modified
const person ={
  name:'chandru',
  age:25
}
person.age=29;

console.log(person);

//Constants can be copied or assigned another variable

const chss=Object.freeze(person);
console.log('chass',chss);
