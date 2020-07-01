// Nomor 3
// Arif diberikan N integer dari inputan (1 - 50),
// Jika N bernilai ganjil, cetak "Arif",
// Jika N bernilai genap dan diantara 2 dan 5, cetak "Bukan Arif",
// Jika N bernilai genap dan diantara 6 dan 20, cetak "Arif",
// Jika N bernilai genap dan N>20, cetak "Bukan Arif"

function checkingNumber(num) {
    if (!Number.isInteger(num)) {
        return console.log("Input should be integer number.")
    }

    if (num > 50) {
        return console.log("Input should be less than 50.")
    }

    if (num > 2 && num < 5 && (num % 2 == 0)) {
        return console.log("Bukan Arif")
    }

    if (num > 6 && num < 20 && (num % 2 == 0)) {
        return console.log("Arif")
    }

    if ((num % 2) == 0 && num > 20) {
        return console.log("Bukan Arif")
    }

    if ((num % 2) != 0) {
        return console.log("Arif")
    }
}

checkingNumber(8)
checkingNumber(22)