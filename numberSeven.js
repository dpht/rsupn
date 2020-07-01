/*
Semisal tumpukan kaos kaki Dimas sebagai berikut :
merah, biru, kuning, merah, kuning, merah, kuning,
cokelat, jingga, biru, hitam, putih, merah, kuning, putih
berapa jumlah pasang kaos kaki Dimas?
*/

function checkSocks(arr) {
    var result = 0
    if (arr.length <= 2) return console.log(result)
    newArr = arr.map(element => { return element.toLowerCase() })
    var dict = {}
    newArr.forEach(element => {
        if (element in dict) {
            dict[element] += 1
        } else dict[element] = 1

        if (dict[element] >= 2 || (dict[element] % 2) == 0) {
            result += 1
        }
    });

    return console.log("Total Pasang Kaos Kaki Dimas: " + result)
}

checkSocks([
    "merah", "Biru", "Kuning", "Merah", "Kuning",
    "cokelat", "Jingga", "Biru", "hitam", "putih",
    "merah", "Kuning", "putih"
])