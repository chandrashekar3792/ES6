const course='RGE2';

course.startsWith('AC');//False
course.startsWith('rg');//False
course.startsWith('RG');//TRUE
course.startsWith('R');//TRUE
course.startsWith('RGE');//TRUE

const course2='825242631RT0001';
course.endsWith(2);//TRUE;
course2.endsWith(RT);//false;
course2.endsWith(RT,11);//false; Consideer the first 11 Numbers


course2.includes(RT);//TRUE
course2.includes(rt);//false

function leftPad(str,length=20){
  return `-> ${' '.repeat(length - str.length)}${str}`;
}

console.log(leftPad(make));
console.log(leftPad(mode));
console.log(leftPad(colour));
