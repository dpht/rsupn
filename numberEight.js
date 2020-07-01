/*Nomor 8

Terdapat blangan 1 sampai x = 300.
Pertanyaan :
a. berapa kali angka yg mengandung 9 muncul ?
b. ada berapa angka dengan kelipatan 5 muncul ?
c. ada berapa angka yg jika dibagi dengan 2 dan 3
hasilnya tetap desimal ?
Note : buat dengan pemograman yg dikuasai
(disarankan PHP or Javascript) dan buat dalam sebuah
fungsi dinamis.

*/

function checkNumber(num) {
    var resultNine = 0
    var resultFive = 0
    var resultTwoThree = 0

    if (!Number.isInteger(num) || num <= 0) {
        return console.log("Input Should be an Integer and greater than 0")
    }
    for (var i = 1; i <= num; i++) {
        // contains number 9
        var iString = i.toString()
        var counter = 0
        while (counter < iString.length) {
            if (iString.indexOf('9', counter) === counter) {
                resultNine += 1
            }
            counter += 1
        }

        // 5
        if ((i % 5) == 0) {
            resultFive += 1
        }

        // /2 and /3
        if ((i % 2) == 0 && (i % 3) == 0) {
            resultTwoThree += 1
        }

    }
    return console.log(
        "a: " + resultNine + " || " +
        "b: " + resultFive + " || " +
        "c: " + resultTwoThree)
}

checkNumber(100)