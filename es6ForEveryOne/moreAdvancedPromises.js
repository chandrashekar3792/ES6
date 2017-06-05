const authors=[
  {name:'chandru',twitter:'@chandrunaik92',bio:'Web Developer'},
  {name:'shekar',twitter:'dddj@dkdl',bio:'Css styler'},
  {name:'naik',twitter:'dddjss',bio:'html styler'}
];

const posts=[
  {title:'I Love JS',author:'chandru',id:1},
  {title:'JS In Action',author:'shekar',id:2},
  {title:'CSS tricks',author:'naik',id:3}
];

function getPostById(id){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const post=posts.find(post => post.id===id);
      if(post){
        resolve(post);
      }else{
        reject(Error('No Post was found'));
      }
    },200);
  });
}

function hydrateAuthor(post){
  return new Promise((resolve,reject)=>{
     const authorDetails=authors.find(person => person.name===post.author);
     if(authorDetails){
       post.author=authorDetails
       resolve(post);
     }else{
       reject(Error('No Author found'));
     }
  });
}

getPostById(2)
  .then(post => {
    return hydrateAuthor(post);
  }).then(post =>{
    console.log('author details',post);
  }).catch(err =>{
    console.log('err',err);
  });
