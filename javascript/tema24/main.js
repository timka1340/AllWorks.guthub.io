
function drawcards(){
	let cards = document.getElementById(`cards`)
	let card_html;
	
	
	
	
	
	
	
	
	
	
	
	cards.innerHTML= cards_html;
}
function findDevelopers(){
	let developers = [];
	
phones.map(funktion(phone){
	if(developers.indexOf(phone.developers) === -1){
	developers.push(phone.developers)
})
let datalistOptinos =document.getElementById(`datalistOpinos`)
let optinos = ``;
developers.map(function(dev){
	optinos += `<optinos value="${dev}">`
})
datalistOpinos.innerHTML = optinos;
}
findDevelopers()
functiom safeFilter(){
	developer: document.getElementById(`developer`).value,
	name: document.getElementById(`name`).value,
	 max_prise: document.getElementById(`max_prise`).value,
	min_prise: document.getElementById(`min_prise`).value,
	order: document.getElementById(`order`).value,
}
localStorage.setItem("filter", JSON.stringify(filter))
