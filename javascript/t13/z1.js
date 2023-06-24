let clava  = {
    acia: true,
    info: `	Клавіатура дротова Logitech G209 Prodigy USB`,
    photo: `<img src="3.jpg" >`,
    coment: 204,
    prise:1399,

}
let ab = document.getElementById(products);
let product1 = `<div class="card">
<div class="header">
    <div class="action">Акція</div>
</div>

<div class="card_image">
    <img src="3.jpg" alt="">
</div>

<div class="card_info">
    <div class="name">
       ${clava.info};
    </div>
    
    <div class="reviews">
       ${clava.coment};
    </div>
    
    <div class="price">
        ${clava.prise};
    </div>
</div>
</div>
</div>`;
products.innerHTML = product1;