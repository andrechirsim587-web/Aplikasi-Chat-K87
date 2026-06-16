console.log("auth.js sudah dimuat!");

document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            alert("Tombol berhasil dideteksi dan diklik!");
            console.log("Tombol diklik!");
        });
    } else {
        console.error("ID loginBtn tidak ditemukan di HTML!");
    }
});