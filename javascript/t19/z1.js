function vivodText(){
	let text = document.getElementById(`text`).value;
	localStorage.setItem(`text`,text)
	drawText();
}

function drawText(){

	let text = localStorage.getItem(`text`);
	let stored_text = document.getElementById(`stored_text`);
	stored_text.innerText = text;
}
function clean(){
	localStorage.clear();
}
function OS(){	

localStorage.getItem(`text`);
document.getElementById(`text`).value = text;
}
drawText()