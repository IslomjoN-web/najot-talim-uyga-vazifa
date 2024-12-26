let maxsulot = [
    { nomi: "Banan", soni: 10, narxi: 5000 },
    { nomi: "Apilsin", soni: 10, narxi: 55000 },
    { nomi: "Mandarin", soni: 10, narxi: 5000 },
    { nomi: "Kakos", soni: 10, narxi: 45000 },
    { nomi: "Xurmo", soni: 10, narxi: 5000 },
    { nomi: "Olma", soni: 10, narxi: 5000 },
    { nomi: "Nok", soni: 10, narxi: 5000 },
    { nomi: "Uzum", soni: 10, narxi: 55000 },
    { nomi: "sariq Uzum", soni: 10, narxi: 55000 },
    { nomi: "mini Banan", soni: 10, narxi: 10000 },
    { nomi: "Kivi", soni: 10, narxi: 100000 },
    { nomi: "Olxori", soni: 10, narxi: 3000 }
]
// console.log(maxsulot);

let Productss = function (_nomi, _soni, _narxi) {
    this.nomi = _nomi
    this.soni = _soni
    this.narxi = _narxi
}

let addProducts = () => {
    let maxsulot_nomi = prompt("maxsulot nomini kiriitng")
    let maxsulot_soni = +prompt("maxsulot sonini kirirting")
    let maxsulot_narxi = +prompt("maxsulot narxini kiriting")
    let newmaxsulot = new Productss(maxsulot_nomi, maxsulot_soni, maxsulot_narxi)
    maxsulot.push(newmaxsulot)
    console.log(maxsulot);
}



let searchProduct = function () {
    let savatcha = [];
    let maxsulotQidiruvi = prompt("Maxsulot qidiring:");
    
    let topilgan = maxsulot.find((item) => item.nomi.toLowerCase() === maxsulotQidiruvi.toLowerCase());

    if (topilgan) {
        let tanlanganSoni = +prompt(`${topilgan.nomi}dan qancha olmoqchisiz? (Mavjud: ${topilgan.soni})`);

        if (tanlanganSoni > 0 && tanlanganSoni <= topilgan.soni) {
            // Savatchaga qo'shish
            savatcha.push({
                nomi: topilgan.nomi,
                soni: tanlanganSoni,
                narxi: topilgan.narxi,
            });

            topilgan.soni -= tanlanganSoni;

            console.log(`Savatchaga qo'shildi:`, savatcha);
            console.log(`Qolgan mahsulotlar:`, maxsulot);
        } else {
            console.log("Kiritilgan miqdor mavjuddan ko‘p yoki noto‘g‘ri.");
        }
    } else {
        console.log("Bu mahsulot topilmadi.");
    }
};


console.log(maxsulot);






