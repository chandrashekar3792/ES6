// In weakMaps there are somany functions doesn't as maps
var myMap = new Map();

var myWeakMap = new WeakMap();

var object1 = {'foo':'bar'}
var object1 = {'bar':'baz'}

myMap.set(object1,'hello');
myWeakMap.set(object2,'hello');

//--similarities
console.log(myMap.get(object1));//hello
console.log(myWeakMap.get(object2))//hello
//---diffrence
object1=null;
object2=null;

myMap.forEach(function(key,val){
  console.log(key,val);//foo,bar
});
myWeakMap.get(object2);//undifined
