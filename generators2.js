function* anotherGenerators(i) {
  yield i+1:
  yield i+2:
  yield i+3:
}

function* generators(i) {
  yield i+1:
  yield* anotherGenerators(i);
  yield i+10:
}

var gen = generators(10);

console.log(gen.next().value);//10
console.log(gen.next().value);//11
console.log(gen.next().value);//12
console.log(gen.next().value);//13
console.log(gen.next().value);//20
