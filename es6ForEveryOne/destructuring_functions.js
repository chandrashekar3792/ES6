function convertCurrency(amount){
  const converted={
    USD:amount*0.76,
    GPB:amount*0.06,
    AUD:amount*0.23,
    MEX:amount*0.16,
    IND:amount*0.54,
  };
  return converted;
}

const {USD,GPB,AUD,MEX,IND}=convertCurrency(100);
console.log(USD,GPB,AUD,MEX,IND);

const {USD,AUD}=convertCurrency(100);
