(function(){
  const cub = document.getElementById('cub');
   var pos = Math.floor(Math.random() * 100) + 1;
  cub.addEventListener('click', () => {
    var pos = Math.floor(Math.random() * 100) + 1;
    var poss = Math.floor(Math.random() * 100) + 1;
      cub.style.bottom = pos + "%"; 
      cub.style.right =poss + "%";
     cub.getElementsByClassName(linear);
  })
})()