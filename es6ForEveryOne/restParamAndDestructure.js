function convertCurrency(rate,...amounts){
  // if don't know how many parameters then we can use arguments inbuilt function
  // if a want one specific and other as unkouwn length
  console.log(rate,amounts);
}

convertCurrency(1.54,10,23,52,1,56);//1.54,[10,23,52,1,56]
convertCurrency(1.54,10);//1.54,[10]


const runner=['chandru','shekar',123,5.5,6,3,35];
const[firstname,lastname,...marks]=runner;
