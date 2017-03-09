
// Array element to separate variable's
//=========Destruring Array=================
var one = ["foo","bar","baz"];

//var foo=one[0]
//var bar=one[1]
//var baz=one[2]

var [foo,bar,baz]= one;

console.log('foo,bar,baz',foo,bar,baz);

// Object element to separate variable's
//=========Destruring Object=================
var two = {
  foo:"hello",
  bar:"goodbye",
  baz:"Hello Again"
};

//var foo=two.foo
//var bar=two.bar
//var baz=two.baz

var {foo,bar,baz}= two;
console.log('foo,bar,baz',foo,bar,baz);
