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










