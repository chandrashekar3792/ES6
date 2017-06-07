class MovieCollection extends Array {
  constructor(name, ...items) {
    super(...items);
    this.name=name;
  }
  add(movie){
      this.push(movie);
  }
  topRated(limit=10){
    return this.sort((a,b)=>(a.stars>b.stars ?-1:1).slice(0,limit));
  }
}

const movies= new MovieCollection('Chandru\'s Fav Movies',
  {name:'Bee Movie',stars:10},
  {name:'Star Wars',stars:1},
  {name:'Virgin Sucides',stars:7},
  {name:'King of road',stars:8}
);
console.log(movies);
console.log(movies.name);
movies.add({name:'Titanic',stars:5});
