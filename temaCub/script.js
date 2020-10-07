(function(){
  const div = document.getElementById('cub');
  div.addEventListener('click', () => {
    const container = document.getElementById('container');
    container.style.justifyContent = 'flex-end';
  })
})()