let main = document.getElementById(`main`);
let car1 = {
    image:"<img src=q.jpg>",
    name:"Rolls-Royce",
    price: 750760,
    color: "рожево сірий",
    probig: 0,
}
let cars =  `
<div class="car">
${car1.image}
<h3>  
${car1.name}</h3> <br>
<h3> ${car1.price}</h3> <br>
<h3> ${car1.color}</h3> <br>
<h3>${car1.probig}</h3> <br>
</div>`;
let car2 = {
    image:"<img src= w.webp>",
    name:"lexus",
    price: 300000,
    color: "blask",
    probig: 0,
}
cars +=  `
<div class="car">
${car2.image}
<h3>  
${car2.name}</h3> <br>
<h3> ${car2.price}</h3> <br>
<h3> ${car2.color}</h3> <br>
<h3>${car2.probig}</h3> <br>
</div>`;
let car3 = {
    image:"<img src= e.webp>",
    name:"Mazerati",
    price: 180000,
    color: "green",
    probig: 0,
}
cars +=  `
<div class="car">
${car3.image}
<h3>  
${car3.name}</h3> <br>
<h3> ${car3.price}</h3> <br>
<h3> ${car3.color}</h3> <br>
<h3>${car3.probig}</h3> <br>
</div>`;
main.innerHTML =cars;
