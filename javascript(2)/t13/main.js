


document.addEventListener('DOMContentLoaded', async function(){


const data = {
    message: 'Hi!❤',
    products: []

};

const CardCom = {
    props: ['product'],
    template: `<div class="card my-2" @click="countTotalPrice()">
    <div class="row">
        <h5 class="text-center">{{product.name}}</h2>
        <p class="d-flex justify-content-center mt-2">
            <img :src="product.img" alt="">
        </p>
        <p class="d-flex justify-content-between">
            <input class="form-control" type="number">
            <span> Кількість</span>
        </p>
        <p class="d-flex justify-content-between">
            <input 
                type="color" 
                class="form-control form-control-color" v-model="product.count" @change="countTotalPrice()"
                id="exampleColorInput" 
                value="#563d7c" 
                title="Choose your color">
            <label for="exampleColorInput" class="form-label">Колір</label>
        </p>
        <div class="d-flex align-items-start flex-column">
            <p>
                <input type="checkbox"> Передзамолення (-5%) <br>
                <small class="text-muted">Очікування 2-3 тижні</small>
            </p>
            <p>
                <input type="checkbox" v-model="product.preOrder"> Швидка доставка (+10%)
            </p>
        </div>
        <p class="d-flex justify-content-between">
            <span>Ціна: </span>
            <span>{{product.prise}}$</span>
        </p>
        <p class="d-flex justify-content-between">
           <span>Вартість замовлення: </span>
           <span>$1050</span>
        </p>
        <p class="d-flex justify-content-end">
            <a class="btn btn-primary">Замовити</a>
        </p>
    </div>
</div>`,
methods: {
    countTotalPrice(){
        let preOrderPrice = 0;
        let fastDeliveryPrice = 0;
        let productsPrice = this.product.price * this.product.count
        if(this.product.preOrder){

        } 
        console.log(productsPrice)
    }
}
}

const drawProducts = {
    data(){
        return data
    },
    methods: {
        getProducts(){
            db.collection('products').get().then(res =>{

                res.forEach(doc => {
                    let product = doc.data();
                    product.id = doc.id;
                    this.products.push(product)
                })
            })
        }
    },
    components: {
        'card': CardCom
    },
    mounted(){
        this.getProducts()
    }
}
Vue.createApp(drawProducts).mount('#tovari')









})