(function(){
  const div = document.getElementById('cub');
  var pos = Math.floor(Math.random() * 100) + 1;
  div.addEventListener('click', () => {
    const container = document.getElementById('container');
    container.style.top=pos+"px";
    container.style.bottom=pos+"px";
    container.style.right=pos+"px";
    container.style.left=pos+"px";
  })
})()