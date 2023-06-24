let data = {
    name: 'Volodumur',

socials: [{
    name: 'Safari',
        img: "https://help.apple.com/assets/634F499B46529C188C4F687C/634F499C46529C188C4F6883/uk_UA/fd47575ee10ce7f149900e7dc633c131.png"},
{
         name: 'TikTok',
        img: "https://p16-va-tiktok.ibyteimg.com/obj/musically-maliva-obj/56f4ab72da9c2f03f9dbbe9f42aab933.png"},
{
  name: 'Telegram',
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/800px-Telegram_2019_Logo.svg.png"
},{
        name: 'YouTube',
    img: "https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc"},
{
    name: 'KineMaster',
    img: "https://play-lh.googleusercontent.com/Jaw57u6LQJNeqKfjJER9MM5On66ZXopBk3rrShag1BBZrX6cZdxxIMGf8nYA_Av0meA"}
],
tovars: [

]
}
const SocialsComponent = {
    props: ['social'],
    template: `
    <div class="card" style="width: 200px; padding: 10px; margin: 10px;">
            <h2 class="text-center">{{social.name}}</h2>
            <img v-bind:src="social.img" style='width:100px; height: 100px; margin:0 auto;'>
        </div>
    `
}

const app = {
    data(){
        return data
    },
    metods: {
        
    },
    components: {
        SocialsComponent
    },
    mounted(){
        db.collection('products').get().then(res =>{
            res.forEach(tov => {
                let product = tov.data();
                product.id = tov.id;
                this.tovars.push(product)

            })
        })
    }
}
Vue.createApp(app).mount('#test')