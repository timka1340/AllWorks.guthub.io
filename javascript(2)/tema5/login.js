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

let sait_users = [];
db.collection('user_test').get().then(function(res){
    res.forEach(function(doc){
    let user = doc.data()
    user.id = doc.id;
    sait_users.push(user)
    });
})
console.log(sait_users)
function chek_sign(){
let email = document.getElementById('email').value;
let password = document.getElementById('email').value;
for(i=0; i<sait_users.length; i++){
    if(sait_users[i].email == email){
        if(sait_users[i].password == password){
localStorage.setItem('sing_in',JSON.stringify(sait_users[i]))
        }
    }
    }
}
