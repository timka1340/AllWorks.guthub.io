let order = {
    name:`` ,
    phone:`` ,
    tovar:`` ,
    cina:`` ,
    chech:``
} 
const all_orders = [
	{
		client_name: "Дмитро Іванов",
		client_phone: "+3809781240",
		order_name: "Iphone X",
		order_price: "520",
		order_status: true
	},
	{
		client_name: "Тетяня Микитенко",
		client_phone: "+3809646712",
		order_name: "Клавіатура",
		order_price: "60",
		order_status: false
	},
	{
		client_name: "Андірй Тарасенко",
		client_phone: "+3809641412",
		order_name: "Телефон Samsung",
		order_price: "360",
		order_status: true
	}
]
function addOrder(){
    order.name = document.getElementById(`client_name`).value
    order.phone = document.getElementById(`client_name`).value;
    order.tovar = document.getElementById(`client_name`).value
    order.cina = document.getElementById(`client_name`).value
    order.chrch = document.getElementById(`client_name`).value
    console.log(order);
}
let vertalobys = document.getElementById(`orders_table`);
let data = "";
for(i=0;i<all_orders.length;i++){
 data += `<tr>
<td>1</td>
<td>${client_name}</td>
<td>${client_phone}</td>
<td>${order_name}</td>
<td class="centered">${order_price}</td>
<td class="centered"><input type="checkbox" checked></td>
<td class="centered"><button class="del_btn">Видалити</button></td>
</tr> `;
}
vertalobys.innerHTML = data;

