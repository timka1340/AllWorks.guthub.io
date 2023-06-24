const firebaseConfig = {
    apiKey: "AIzaSyDMTz8qEc6a6CAtRit63FxgH62iBRmgKgw",
    authDomain: "mm2rb-2b0bb.firebaseapp.com",
    projectId: "mm2rb-2b0bb",
    storageBucket: "mm2rb-2b0bb.appspot.com",
    messagingSenderId: "335543025501",
    appId: "1:335543025501:web:9bd851dcada2ce57cfb2b4",
    measurementId: "G-3EY64C0VZW"
  };
  
  
  firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
class Phone {
    constructor(name, company, operatingSystem, screen, price, battery, color){
        this.name = name;
        this.company = company;
        this.operatingSystem = operatingSystem;
        this.screen = screen;
        this.price = price;
        this.battery = battery;
        this.color = color;
    }
    displayTitle(){
        return `${this.company} ${this.name} ${this.color}`
    }
    credit_4_month(){
        let month_additional_cost = this.price*(4/100)
        let month_total = 4;
        let total_price = month_additional_cost * month_total + this.price;
        return `Загальна ціна телефону пфсля 4 місяців - ${total_price}`
    }
    credit_6_month(){
        let month_additional_cost = this.price*(5/100)
        let month_total = 5;
        let total_price = month_additional_cost * month_total + this.price;
        return `Загальна ціна телефону пфсля 6 місяців - ${total_price}`
    }
    credit_12_month(){
        let month_additional_cost = this.price*(6/100)
        let month_total = 6;
        let total_price = month_additional_cost * month_total + this.price;
        return `Загальна ціна телефону пфсля 12 місяців - ${total_price}`
    }
}
let phone_1 = new Phone('Iphone', 'Apple', 'ios', '6.1', 13000, 3750, 'blue')

let all_phones = [phone_1]

function addNewPhone(){
    let new_phone = new Phone(
        document.getElementById('name').value,
        document.getElementById('company').value,
        document.getElementById('operating_system').value,
        Number(document.getElementById('screen').value),
        Number(document.getElementById('price').value),
        Number(document.getElementById('battery').value),
        document.getElementById('color').value
    )
    all_phones.push(new_phone)
    db.collection('phones').add(new_phone).then(function(){
        console.log('!!!!')
    })
    console.log(all_phones)
    drawPhones()
}
function drawPhones(){
   let phones_table = document.getElementById('phones_table');
phones_table.innerHTML = '';
   all_phones.forEach((phone,idx) => {
    let tr = document.createElement(`tr`);
    tr.innerHTML = `
    <th scope='row'>${idx+1}</th>
    <td>${phone.name}</td>
    <td>${phone.company}</td>
    <td>${phone.operatingSystem}</td>
    <td>${phone.screen}</td>
    <td>${phone.price}</td>
    <td>${phone.battery}</td>
    <td>${phone.color}</td>
    <td>
    <button class="btn btn-sm btn-primary" onclick="alert('${phone.displayTitle()}">
    main info
    </button>
    </td>

    <td>
    <button class="btn btn-sm btn-primary"onclick="alert('${phone.credit_4_month}">
    4 month
    </button>
    </td>

    <td>
    <button class="btn btn-sm btn-primary"onclick="alert('${phone.credit_6_month}">
    6 month
    </button>
    </td>

    <td>
    <button class="btn btn-sm btn-primary"onclick="alert('${phone.credit_12_month}">
    12 month
    </button>
    </td>
    `
    phones_table.appendChild(tr)
   })
}
drawPhones()