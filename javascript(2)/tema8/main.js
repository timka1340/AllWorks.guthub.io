class Order{
    constructor(product_name,product_price,user_email,count,delivery){
        this.product_name = product_name;
        this.product_price = product_price;
        this.user_email = user_email;
        this.count = count;
        this.delivery = delivery;
        this.submitted = false;
        this.total_price = this.getTotalPrice()
    }
    getTotalPrice(){
        let deliveryPrice;
        if(this.delivery == 'Новапошта'){
            deliveryPrice = 70;
        }else if(this.delivery == 'Укр пошта'){
            deliveryPrice = 50;
        }else if(this.delivery == "кур'ер"){
            deliveryPrice = 100;
        }else{
            deliveryPrice = 1000000000000000;
        }
        return this.product_price * this.count + deliveryPrice;
    }
    saveOrder(){
        db.collection("orders-t8").add(
            {
                product_name: this.product_name,
                product_price: this.product_price,
                user_email: this.user_email,
                count: this.count,
                delivery: this.delivery,
                submitted: this.submitted,
                total_price: this.total_price
            }
        )
    }

}
function createOrder(){
    let order = new Order(
        document.getElementById('product_name').value,
        document.getElementById('product_price').value,
        document.getElementById('user_email').value,
        document.getElementById('count').value,
        document.getElementById('delivery').value
    )
    console.log(order)
    order.saveOrder()
}