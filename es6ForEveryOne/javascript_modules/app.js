import { uniq } from 'lodash';
import { apiKEY as key,
          url,
          sayHi,
          cats,
          dogs} from './src/config';
//import anyName from './src/config'; //we can give any name because it was exported as default

//console.log(anyName);
console.log(key);
console.log(url);
sayHi('Chandru');
console.log(cats);
console.log(dogs);

const ages = [1,1,4,52,12,4];

console.log(uniq(ages));
