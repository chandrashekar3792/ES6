
const details =['Chandru','shekar','24','chandru.com'];

const [ firstname,lastname,age,website]=details;

const data='Chandru,shekar,24,chandru.com,hdhd,ffff';
const [firstname,lastname,age,website]= data.split(',');

const team=['sagar','sai','arif','rakesh','praveen','chandru','AAA s']
const [captain,assistant,...players]=team;
