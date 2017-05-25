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

for(const cut of cuts){
  console.log(cut);
  if(cut==='brisket'){
    break;
  }
}
