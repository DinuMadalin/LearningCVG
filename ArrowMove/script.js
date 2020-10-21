(function() {
  // Luam cubul pentru ca lui vrem sa ii modificam proprietatile
  const cub = document.getElementById('cub');
  // adaugam event de keydowm pe tot documentul HTML nu doar pe cub
  document.addEventListener('keydown', (event) => {
    // laum tot style'yl cubului
    const style = window.getComputedStyle(cub);
    // vedem care este valoare lui top si il facem integer pentru ca el este string de forma "10px"
    const currentTopValue = parseInt(style.top);
    let newValue;
    switch (event.key)
    { case 'ArrowUp':
        // pentru sageata sus micsoram valoarea topului
        newValue = currentTopValue - 3;
        // cand punem noua valoare pe cub o punem cum era initial, string de forma "7px"
        cub.style.top = newValue + "px";
        // intrerupem cu break ca sa nu mai intre in celelate cazuri
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
        // code for any other key here - nu trebuie sa punem nimic aici
        break;
    }
  })
})()