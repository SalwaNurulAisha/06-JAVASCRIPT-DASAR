/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
// Ada dua Variable Scope di JavaScript yaitu local scope dan global scope
// variable local scope ialah variabel yang dideklarasikan di dalam fungsi pada JavaScript. sedangkan variable global scope ialah ruang lingkup di luar ruang lingkup fungsi-fungsi dalam kode javascript yang dibuat.
// GLOBAL SCOPE
function createUserName() {
userName = "Salwa"; 
};

function modifyUserName() {
    if(userName)
        userName = "Nurul";
};

function showUserName() {
    alert(userName);  
};

createUserName();
showUserName(); // Salwa

modifyUserName();
showUserName(); // Nurul 

// LOCAL SCOPE
function createUserName() {
    var userName = "Salwa";
}

function showUserName() {
    try{
        alert(userName);
    }
    catch(ex)
    {
        document.getElementById("error").innerHTML = ex;
    }
}

createUserName();
showUserName(); // throws error: userName is not defined

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
// Mariah
// karena terdapat variable yang menggunakan global scope, sehingga dideklarasikan di luar ruang lingkup fungsi-fungsi kode javascript yang dibuat.
// pada console.log terdapat function printFirstName yang berarti output memunculkan nama depan dari Mariah Carey.

const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));