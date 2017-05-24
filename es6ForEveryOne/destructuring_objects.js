const person={
  name:'Chandru',
  country:'India',
  city:'Bangalore',
  gitHub:'chandrashekar3792'
};

//Normal way
const username=person.name;
const country=person.country;

//ES6 way

const { username,country} = person;
const { username,country,city} = person;
const { username,country,city,gitHub} = person;
const { username} = person;

const chandru={
  first:'Chandra',
  last:'Shekar',
  links:{
    social:{
      twitter:'https//twitter.com/chandrunaik92',
      facebook:'https://facebook.com/chandrashekarnaiks'
    },
    web:'https://chandrashekar3792.github.io'
  }
}

const {twitter,facebook}=chandru.links.social;
const {twitter:tweet,facebook:fb}=chandru.links.social;


const settings={width:500,colour:'Black'}// height fontsize undefined

const { width=100,height=100,colour:'Blue',fontsize:25}=settings;
