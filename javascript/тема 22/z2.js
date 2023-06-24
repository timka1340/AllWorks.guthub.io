function kartocha(){
	let card = document.getElementById(`cards`);
	let cards = document.getElementById(`cards_num`).value;
	let foo = ``;
	for(i=0;i<cards;i++){
		foo += `<div class="card">
		  <div class="card-body my-2">
			<h5 class="card-title">Card ${cards}</h5>
		  </div>
		</div>`;
		card.innerHTML = foo;
	}
}