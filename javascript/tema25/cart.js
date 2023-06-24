function getCartProducts(){
	let cart = JSON.parse(localStorage.getItem(`cart`))
	if(cart === null){
		return [];
	}
	else{
		return cart
	}
}
let cart_html = ``;
getCartProducts().map
cart_html+= ``;
