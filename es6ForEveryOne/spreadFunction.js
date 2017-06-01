const inventors=['einstein','newton','Galileo'];

const newInventors=['Musk','Jobs'];

inventors.push(...newInventors);

function sayHey(first,last){
  alert(`Hey ${first} ${last}`);
}

// we can call two ways
// First Usual way
const name=['chandra','shekar'];
sayHey(name[0],name[1]);

//or
sayHey(...name);
