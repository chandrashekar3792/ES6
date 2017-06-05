const weather= new Promise((resolve)=>{
  setTimeout(()=>{
    resolve({temp:20,conditions:'Sunny with clouds'});
  },2000);
});

const tweets= new Promise((resolve)=>{
  setTimeout(()=>{
    resolve(['I Like Cake','BBQ is good Too!']);
  },500);
});

Promise
  .all([weather,tweets])
  .then(response =>{
    console.log(response);
  });
