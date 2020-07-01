// Buat Query untuk Menampilkan :
// 1.Tampilkan Nama Unit, Nama Obat, Stock, Satuan Obat, dan Tanggal Kadaluarsa.
//   Urutkan Berdasarkan Nama Unit
// 2. Tampilkan Nama Obat, Nama Unit, Stock, dan Tanggal Kadaluarsa obat-obat
// yg Akan Kadaluarsa 7 Hari Kedepan, lalu Urutkan Berdasarkan Stock Terbesar.


// ANSWER
// =============
// 1
/*
SELECT u.Nama_unit, o.Nama, p.stock, o.Satuan, p.Tanggal_kadaluarsa
FROM PERSEDIAAN as p
JOIN UNIT as u
JOIN OBAT as o
ORDER BY u.Nama_unit ASC
*/

// 2

/*
SELECT o.Nama, u.Nama_unit, p.stock, p.Tanggal_kadaluarsa
FROM PERSEDIAAN as p
JOIN UNIT as u
JOIN OBAT as o
WHERE p.Tanggal_kadaluarsa = >= DATE(NOW()) + INTERVAL 7 DAY
ORDER BY p.stock DESC
*/