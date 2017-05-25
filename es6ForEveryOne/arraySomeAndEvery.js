const ages =[32,15,19,12];

const adultPresent = ages.some(age => age >= 18);

console.log(adultPresent);//true;

const youngins=ages.some(age => age <= 10);

console.log(youngins);//false;

const allOldEnough=ages.every(age => age>=18);
console.log(allOldEnough);//false
