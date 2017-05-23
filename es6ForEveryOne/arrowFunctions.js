const names =['chandra','shekar','naik'];

const fullname = names.map(function (name) {
  return `${name} S`;
});

// for single parameters
const fullname2 = names.map(name=> {
  return `${name} S`;
});

// In Single Line
const fullname4=names.map( name => `${name} S`);

// If No Arguments
const fullname5=names.map(() => `${name} S`);

// for multiple parameters
const fullname3 = names.map((name,dhdh)=>{
  return `${name} S`;
}
// named function
function myfunc(name){
  console.log('Named Function');
};

// Arrow / Ananymous Function 
const sayMyName=(name)=>{
  console.log(`Hello ${name}`);
}
sayMyName('Chandru');
