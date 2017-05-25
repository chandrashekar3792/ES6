const cuts=['chuck','brisket','shank','short Rib'];

for(let i=0; i<cuts.length;i++){
  console.log(cuts[i]);
}

cuts.forEach((cut)=>{
  console.log(cut);
  // if(cut==='brisket'){ //not supports break,continue
  //   break;
  // }
})

for( const index in cuts){
  console.log(cuts[index]);
}

// for getting array values
for(const cut of cuts){
  console.log(cut);
  if(cut==='brisket'){
    break;
  }
}

// if we want index along with values
for( const cut of cuts.entries()){
  console.log(cut[0],cut[1]);//cut[0] is index,cut[1] is value
}

for([i,cut] of cuts.entries()){
  console.log(`${cut} is the ${i} item`);
}

function addUpNumber(){
  let total=0;
  for(num of arguments){
    total+=num;
  }
  return total;
}

addUpNumber(10,23,52,34,12,13,123);
