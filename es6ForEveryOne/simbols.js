// primitive data types -6
//Numbers
//Strings
//object
//Boolean
//Null
//undefined

//-- new primitive type
//Symbols
const cs=Symbol('chandrashekar Naik');
const name=Symbol('chandrashekar Naik');

const classRoom={
  [Symbol('Mark')]:{grade:35,gender:'male'},
  [Symbol('olivia')]:{grade:80,gender:'male'},
  [Symbol('olivia')]:{grade:80,gender:'male'},
}

//Symbols cannot be iterable or looped

const syms=Object.getOwnPropertySymbols(classRoom);
const data=syms.map(sym =>
  console.log(classRoom[sym]));
