// Cek bilangan
let range = 15;
let result = []

for (let i = 1; i < range; i++){
    if (i % 7 == 0) {
        result.push('bestada')
        continue
    }
    result.push(i)
}
result.push('sukses')
result =result.join(',')
console.log(result);



//Cek nilai array yg sama
const angka = [3, 7, 1, 2, 6, 7, 8, 8, 12, 5, 3, 12];

const cek = angka.reduce(function(a, b, c, d) {
    if (d.indexOf(b) !== c && a.indexOf(b)< 0) a.push(b);
    return a;
}, []);
console.log(cek);

 // Mengurutkan dari angka terbesar   
angka.sort(function (a, b) {
    return b - a;
})
console.log(angka.join('-'));










