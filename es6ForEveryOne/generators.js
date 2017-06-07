//A function can stop or pause to an definate amount of times

function* listPeople(){
  yield 'Chandru';
  yield 'Shekar';
  yield 'Naik';
}

const people = listPeople();
people.next()//{value:"chandru",done:false};
people.next()//{value:"Shekar",done:false};
people.next()//{value:"Naik",done:false};
people.next()//{value:undefined,done:true};

function* listI(){
  let i=0;
  yield i;
  i++;
  yield i;
  i++;
  yield i;
}

const item= listI();
item.next();//{value:0,done:false}
item.next();//{value:1,done:false}
item.next();//{value:2,done:false}
item.next();//{undefined,done:true}

const movies=[{name:'Bee Movie',stars:10},
{name:'Star Wars',stars:1},
{name:'Virgin Sucides',stars:7},
{name:'King of road',stars:8}];

function* loop(arr){
  for(const item of arr){
    yield item;
  }
}

const inventorGen=loop(movies);
inventorGen.next();//{value:{name:'Bee Movie',stars:10},done:false}
inventorGen.next();//{value:{name:'Star Wars',stars:1},done:false}
inventorGen.next();//{name:'Virgin Sucides',stars:7},done:false}
inventorGen.next();//{value:{King of road',stars:8},done:false}
inventorGen.next();//{value:undefined},done:true}
