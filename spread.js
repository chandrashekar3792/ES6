//Scenario One=====================
function foo(one,two,three){
  console.log(two);
};
var arr=[1,2,3];

foo(arr);//undefined

//Scenario Two=====================
function foo(one,two,three){
  console.log(one);
};
var arr=[1,2,3];

foo(arr);//[1,2,3]


//Spread example1============
function foo(one,two,three){

  console.log(one);
};
var arr=[1,2,3];

foo.apply(null,foo);//1
// OR
foo(... foo);//1

 //Spread example2============
 var arr = [1,2,3,4,5];

 var [a,b,...theRest]=arr;
 console.log(a);//1
 console.log(b);//2
 console.log(theRest);//[3,4,5]

 //Spread example3
 var arrayOne = ['thing','otherThing'];
 var arrayTwo = ['foo','bar',arrayOne,'baz'];
 console.log(arrayTwo); //['foo','bar',['thing','otherThing'],,'baz']


 var arrayTwo=['foo','bar',...arrayOne,'baz'];
 console.log(arrayTwo); //['foo','bar','thing','otherThing','baz']
