function element(){
	let users = document.getElementById(`myModal`);
	myModal.style.display = `block`
	findUser(id)
	document.getElementById(`modal.body`).innerHTML = `
	<p><b>Ім'я:</b>${usr.name}</p>
			<p><b>${user.addres.city}</b></p>
			<p><b>${user.email}</b></p>
			<p><b>$</b></p>
			<p><b>Сайт:</b></p>
			<p><b>Компанія:</b></p>`;
}
function modal(){
	let users = document.getElementById(`myModal`);
	myModal.style.display = `none`
}
function draw(){
	let user = document.getElementById(`users_table`);
	let new_user = ``;
	users.map(function(user, index){
	 new_user += `	<tr>
					<td>${index + 1}</td>
					<td>${user.name}</td>
					<td>${user.emeil}</td>
					<td>
						<button onclick="element()"class="btn btn-sm btn-primary">
							Детально
						</button>
					</td>
					<td>
						<button class="btn btn-danger">Видалити</button>
					</td>
				</tr>
	 `})
	
	users_table.innerHTML = new_user;
}
draw();

function findUser(id ){ = users.filter(function(user){
	return user.id === id
})
return filtered[0];
}