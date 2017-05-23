function calculateBills(total,tax=0.13,tip=0.15){
  return (total*tax)+(total*tip);
}

const totalBill=calculateBills(100);
console.log(totalBill);

const totalBill=calculateBills(100,0.25);
console.log(totalBill);

const totalBill=calculateBills(100,undefined, 0.25);
console.log(totalBill);
