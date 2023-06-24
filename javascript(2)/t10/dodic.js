function dodati_tovar(){
    let tovar = {
        name: document.getElementById('name').value,
        prise: document.getElementById('prise').value,
        img: document.getElementById('img').value,
        developer: document.getElementById('text').value,
        reviews: document.getElementById('reviews').value
    }
    db.collection('products').add(tovar).then(function(){
        location.reload()
    })
}