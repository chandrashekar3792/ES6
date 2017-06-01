const firstName='chandrashekar';
const lastName='S';
const age=24;
const breed='King';

const dog={
  firstName:firstName,
  lastName:lastName,
  age:age,
  breed:breed
};
console.log(dog);

// Same as Above
const dog={
  firstName,
  lastName,
  age,
  breed
  };

  //some property same and some different then
  const Dog={
    fullName:firstName,
    lastName,
    age,
    breed=['hugo','sunny']
    };

    const modal={
      create:function(){

      },
      open:function(){

      },
      close:function(){

      }
    };

    const modal={
      create(args1){

      },
      open(args1){

      },
      close(args1){

      }
    };
