let card = document.getElementById('cards');
let numder = document.getElementById('cards');

number.addEventListener('change',function(){
	drawCards(number.value)
})
function drawCards(num_cards){
	let cards_html = ``;
	for(i=0;i<num_cards;i++){
		cards_html += ` <div class="card">
                <div class="card-body">
                <p class="card-text">card ${i+1}</p>
                </div>
            </div>`
	}
	cards.innerHTML =cards_html;
}