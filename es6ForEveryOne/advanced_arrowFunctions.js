
const race='100 Meters';
const winners=['chandru','shekar','naik'];
//Convert Array into object
const win=winners.map((winner,i) =>({name:w,race:race,place:i+1}));
// if Both Key and value has same name no need to put it in key value format
// just put value instead
const win=winners.map((winner,i) =>({name:w,race:race,place:i+1}));
console.table(win);

const ages=[23,25,28,45,]

const old = ages.filter(age => age>60);
