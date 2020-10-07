(function(){
  const button = document.getElementById('cub');
  button.addEventListener('click', () => {
    const container = document.getElementById('container');
    container.style.justifyContent = 'flex-end';
  })
})()