(function(){
  const div = document.getElementById('cub');
  div.addEventListener('click', () => {
    if( container.style.justifyContent = 'flex-start'){
    const container = document.getElementById('container');
    container.style.justifyContent = 'flex-end';
    } else {
      const container = document.getElementById('container');
    container.style.justifyContent = 'flex-start';
    }
  })
})()