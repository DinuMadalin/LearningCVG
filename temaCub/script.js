(function(){
  const button = document.getElementById('moveButton');
  button.addEventListener('click', () => {
    const container = document.getElementById('container');
    container.style.justifyContent = 'flex-end';
  })
})()