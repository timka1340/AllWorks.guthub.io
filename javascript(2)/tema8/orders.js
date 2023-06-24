class Admin{
    constructor(){
    }
static vuvid(){
    document.getElementById('tbody').innerHTML = ''
    db.collection("orders-t8").get()
    .then(res => {
        let index = 1;
        res.forEach(doc => {
            let ord = {...doc.data(),id: doc.id}
            this.drawOrders(ord, index)
            index++;

        })
    })
}




static drawOrders(order, index){
    let tr = document.createElement('tr');

    let th_number = document.createElement('th');
    let th_name = document.createElement('th');
    let td_price = document.createElement('td');
    let td_email = document.createElement('td');
    let td_count = document.createElement('td');
    let td_total_prise = document.createElement('td');
    let td_delivary = document.createElement('td');
    let td_submited = document.createElement('td');
    let td_button = document.createElement('td');
    let td_a = document.createElement('td');

    th_number.innerText = index;
    th_name.innerText = order.product_name;
    td_price.innerText = order.product_price;
    td_email.innerText = order.user_email;
    td_count.innerText = order.count;
    td_total_prise.innerText = order.total_price;
    td_delivary.innerText = order.delivery;
    td_submited.innerText = order.submitted;

    let button = document.createElement('button');
    let a = document.createElement('a');
    a.href = `mailto:${order.user_email}?subject=Order%20submited&body=Test%20body.%0AWith%20many%20text.`;
    a.classList.add('btn');
    a.classList.add('btn-primary');
    a.innerText = 'vidpravutu list'
    button.setAttribute('type','button')
    button.classList.add('btn')
    button.classList.add('btn-primary')
    button.innerText ='Pidtverdutu'

    button.addEventListener('click', function(){
        Admin.submitOrder(order.id)
    })


    td_button.appendChild(button)
    td_a.appendChild(a)

    tr.appendChild(th_number)
    tr.appendChild(th_name)
    tr.appendChild(td_price)
    tr.appendChild(td_email)
    tr.appendChild(td_count)
    tr.appendChild(td_total_prise)
    tr.appendChild(td_delivary)
    tr.appendChild(td_submited)
    tr.appendChild(td_button)
    tr.appendChild(td_a)

    document.getElementById('tbody').appendChild(tr)
}
static submitOrder(order_id){
   db.collection("orders-t8")
   .doc(order_id)
   .update({submitted:true})
   .then(function(res){
    console.log('Zamovlenna Ubdate')
    Admin.vuvid();
   })
}
}
Admin.vuvid();