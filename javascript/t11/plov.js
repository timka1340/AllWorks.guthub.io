let user = [`Мішка`, `Машка`];
let xcvSRFbjk = document.getElementById(`table`);
let data = `<tr>
<th>№</th>
<th>Користувач</th>
<th>відправити лист</th>
</tr>`
for(i=0; i<user.length; i++){
if(1 & 2 == 0){data += `<tp class="gray"><tr>
<th>${i+1}</th>
<th>${user[0]}</th>
<th><input type="checkbox"></th>
</tr>`}else{
data += `<tr>
<th>${i+1}</th>
<th>${user[0]}</th>
<th><input type="checkbox"></th>
</tr>`}}
xcvSRFbjk.innerHTML=data
 

