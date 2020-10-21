(function() {
  const cub = document.getElementById('cub');
  document.addEventListener('keydown', (event) => {
    const style = window.getComputedStyle(cub);
    const currentTopValue = parseInt(style.top);
    let newValue;
    switch (event.key)
    { case 'ArrowUp':
        newValue = currentTopValue - 3;
        cub.style.top = newValue + "px";
        break;
      case 'ArrowDown':
        newValue = currentTopValue + 3;
        cub.style.top = newValue + "px";
        break;
      case 'ArrowLeft':
        // code for moving left
        break;
      case 'ArrowRight':
        // code for moving right
        break;
      default:
        break;
    }
  })
})()