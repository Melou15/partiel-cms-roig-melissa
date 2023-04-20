let clicBtn = document.getElementById('clicBtn');
let compteur = document.getElementById('compteur');

let count = 0;
if (localStorage.getItem('count') !== null) {
  count = parseInt(localStorage.getItem('count'));
}

clicBtn.addEventListener('click', function() {
  count++;
  compteur.innerHTML = count;
  localStorage.setItem('compteur', count);
});
