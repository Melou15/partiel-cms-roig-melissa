
let newImg = document.getElementById('newImg');
let divImg = document.getElementById('divImg');

newImg.addEventListener('click', function() {
  let creaImg = document.createElement('img');
  creaImg.src = 'https://cdn.shopify.com/s/files/1/0113/2557/1136/products/broderie-diamant-chaton-mignon-animaux-chats-figuredart-free-shipping-france_544_1024x1024@2x.jpg?v=1580449416';
  divImg.appendChild(creaImg);
});
