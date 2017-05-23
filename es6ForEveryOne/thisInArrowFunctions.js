const box=document.querySelector('.box');
box.addEventListener('click',function() {
  let first = 'opening';
  let second ='open';

  if(this.classList.contains(first)){
    [first,second]=[second,first];
  }
  console.log(this);
  this.classList.toggle('opening');
  setTimeout(function(){
    this.classList.toggle('open');
  },500);
});
