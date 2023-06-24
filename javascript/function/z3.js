let amogus = {
    name: "Oslik",
    familia:"Ia",
    age: "4",
    emeil: "osiniy@toymail.com",
    misto: "korobka",
}
let tbody = document.getElementById(`table`)
function showUser(){
    tbody.innerHTML = ` <tr>
    <td>${amogus.name}</td>
    <td>${amogus.familia}</td>
    <td>${amogus.age}</td>
    <td>${amogus.emeil}</td>
    <td>${amogus.misto}</td>
</tr>`;

}
function changeName(x){
amogus.name = x;
showUser();
}
function changelastname(x){
    amogus.familia = x;
    showUser();
    }
    function changeAge(x){
        amogus.age = x;
        showUser();
        }
        function changeEmail(x){
            amogus.emeil = x;
            showUser();
            }
            function changeMisto(x){
                amogus.misto = x;
                showUser();
                }