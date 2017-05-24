const name='Snickers';
const age=2;

var sentence='My dog '+ name +'is'+age *7+'year Old';

//ES6
const sentence=`My Dog ${name} is ${age *7} years Old`;

//multiple line Strings
const markup = `
<div class="person">
  <h2>
    ${name}
  </h2>
</div>`;

document.body.innerHTML=markup;

//Nested template Strings

const dogs=[
  {name:'Snickers',age:2},
  {name:'Hugo',age:8},
  {name:'Sunny',age:1},
]
const markup=`
<ul class="dogs">
  ${dogs.map(dog => `<li>
                      ${dog.name}
                      is
                      ${dog.age *7}
                       years old`
                     </li>
  ).join('')}
</ul>`;
document.body.innerHTML=markup;
