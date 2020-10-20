(function click(){
  const cub = document.getElementById('cub');
  var pos = Math.floor(Math.random() * 100) + 1;
  cub.addEventListener('click', () => {
    var pos = Math.floor(Math.random() * 100) + 1;
    var poss = Math.floor(Math.random() * 100) + 1;
      cub.style.bottom = pos + "%"; 
      cub.style.right =poss + "%";
  })
})()

(function arrow() {
  const cub = document.getElementById('cub');
  cub.addEventListener('keydown', (event) => {
    var a = Math.floor(Math.random() * 100) + 1;
    var b = Math.floor(Math.random() * 100) + 1;
    var c = Math.floor(Math.random() * 100) + 1;
    var d = Math.floor(Math.random() * 100) + 1;
    switch (event.key)
    { case 'Arrowup' : parseInt(cub.style.bottom = a + "%");
      case 'Arrowdown' :  parseInt(cub.style.bottom = b + "%");
      case 'Arrowleft' :  parseInt(cub.style.right = c + "%");
      case 'Arrowright' :  parseInt(cub.style.right = d + "%");
    }
  })
})()