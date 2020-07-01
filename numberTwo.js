// - Waktu Masuk dan Waktu Keluar Menjadi Input untuk Menentukan Tarif
// - Waktu yg Diinput Terdiri Dari Jam dan Menit
// - Biaya Parkir 2 Jam Pertama Sebesar Rp. 3.500
// - Untuk 1 Jam Berikutnya dikenakan Biaya Rp. 1.500
// - Jika Waktu Diatas Jam 18.00, Maka Tarif Jam Berikutnya Adalah Rp. 2.000
// - Jika Menit Sudah Diatas Menit 30, Maka Dihitung Beda Jam

function parkingFee(a, b) {
    try {
        var now = new Date()
        var nowHour = now.getHours()
        var year = now.getFullYear()
        var month = now.getMonth()
        var day = now.getDay()
        var startTime = a.split(":")
        var endTime = b.split(":")

        var start = new Date(year, month, day, startTime[0], startTime[1], "00")
        var end = new Date(year, month, day, endTime[0], endTime[1], "00")

    } catch (error) {
        return console.log("Invalid Time Format", error)
    }

    if ((end - start) < 0) {
        return console.log("End Time should be greather than start time!.")
    }

    var totalTime = (((end.getTime() - start.getTime()) / 1000) / 60)

    var tmpTime = totalTime
    var OneHourFee = 1500
    var theFirstTwoHourFee = 3500
    var totalFee = 0

    // First 2 hours
    if (tmpTime <= 120 || tmpTime >= 120) {
        totalFee += theFirstTwoHourFee
        tmpTime -= 120
    }

    // Checking current time and cahnge /hourFee
    if (nowHour >= 18) {
        OneHourFee = 2000
    }

    // looping for checking time > 60 minute
    while (tmpTime >= 60) {
        totalFee += OneHourFee
        tmpTime -= 60
    }

    // last check if time > 30 minute
    if (tmpTime > 30) {
        totalFee += OneHourFee
        tmpTime -= 30
    }
    return console.log('Total Time: ' + totalTime + ' minutes ' + ' - ' + 'Total Fee: Rp.' + totalFee)
}

parkingFee("15:00", "14:01")