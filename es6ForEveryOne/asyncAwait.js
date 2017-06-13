var execute=false;
async function wait(){
  if(execute){
    return 123;
  }else{
     throw new Error('Problem!');
  }
}

wait()
.then(x => console.log('result',x));
.catch(err => console.log('err',err));
