const apple={
  color:'Red',
  sie:'Medium',
  weight:50,
  sugar:10
};

for(const prop of Object.keys(apple)()){
  console.log(prop);//keys
  const value=apple[prop];
  console.log(value);//values
}

// if want actual elements text
for
