const firebaseConfig = {
    apiKey: "AIzaSyDkV46OAWt3T-4YYbKIHf8iH7sETr9eKCE",
    authDomain: "christmas-fe4af.firebaseapp.com",
    projectId: "christmas-fe4af",
    storageBucket: "christmas-fe4af.appspot.com",
    messagingSenderId: "416529199848",
    appId: "1:416529199848:web:e6bbe3c102b539533f0f5d"
  };
    firebase.initializeApp(firebaseConfig);
  
              var db = firebase.firestore();
 function saveUser(){
        let user = {
                name: document.getElementById('name').value,
                lastname: document.getElementById('lastname').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value
            }
            db.collection("users").add(user)
            console.log(user)
 }