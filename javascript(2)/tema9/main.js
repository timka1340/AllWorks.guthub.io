
const test = {
    testp: []
}

const testVue = {
    data(){
        return test
    },

    methods: {

        
    },
    mounted(){
        db.collection('user_test').get().then(res =>{
            res.forEach(doc => {
                let user = doc.data();
                user.id = doc.id;
                this.testp.push(user);
            })
        })
    }
}

Vue.createApp(testVue).mount('#app');