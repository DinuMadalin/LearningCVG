(function(){
  const div = document.getElementById('cub');
  var pos = (container.style.justifyContent = 'flex-start');
  div.addEventListener('click', () => {
    const container = document.getElementById('container');
    if(container.style.justifyContent === 'flex-start'){
    container.style.justifyContent = 'flex-end';
    } else {
         container.style.justifyContent = 'flex-start';
    }
  })
})()