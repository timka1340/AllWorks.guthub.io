function register(){
let login = document.getElementById(`login`);
let email = document.getElementById(`email`);
let pass = document.getElementById(`pass`);

let user ={
	login:login,
	email:email,
	pass:pass
}

console.log(user)
localstorage.setItem(`users`,JSON.stringify
)

}

function check_login(){
	 if(document.getElementById(`login`).value.length <   4){
		 document.getElementById(`pomilka`).innerHTML = `mini login`;
		 setTimeout(function(){
			  document.getElementById(`pomilka`).innerHTML = ``;
		 },1000)
		 
	 }
}
function check_email+++