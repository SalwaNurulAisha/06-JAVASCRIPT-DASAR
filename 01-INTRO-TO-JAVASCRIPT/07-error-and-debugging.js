/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
// Type Error merupakan mekanisme eksekusi terhadap suatu operasi atau fungsi dengan tipe objek yang tidak sesuai.
// Reference Error merupakan objek yang memberikan keterangan kesalahan ketika variable tidak ada (doesn't exist).
// Range Error merupakan kesalahan yang terjadi saat variabel berada di luar rentang nilainya.
// Syntax Error merupakan kesalahan yang muncul karena adanya aturan bahasa pemrograman tertentu yang tidak diikuti.

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
// Ketika menjalankan console.log(salaryWithVar), yang terjadi adalah undefined. sementara jika menjalankan console.log(salaryWithConst), yang terjadi adalah Uncaught ReferenceError: salaryWithConst is not defined
// Error ini termasuk kategori Reference Error
// Hal ini terjadi karena pada saat console.log dijalankan, variable nya belum dideklarasikan

console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;