function showModal(id){
	document.getElementById(id).classList.add(`show`);
	
}

function hideModal(id){
	document.getElementById(id).classList.remove(`show`);
}

function saveTask(){
	let des = document.getElementById(`des`);
	let sta = document.getElementById(`sta`);
	let task = {
		describe: des,
		status: sta
		
	}
	let tasks = getTasks();
 task.push
}

