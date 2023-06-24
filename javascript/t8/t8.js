let dni = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'нд'];
let cyma = [1234, 1235, 1236, 1237, 1238, 1239, 1230];
let zp = 0;
console.log(`ден прибуток`);

for(i=0; i < dni.length; i++){
    zp = zp + cyma[i];
    console.log(`${dni[i]} - ${cyma[i]}`);
}