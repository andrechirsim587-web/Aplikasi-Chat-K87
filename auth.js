import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { app } from "./firebase.js"; // Memastikan terhubung ke konfigurasi firebase

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Menunggu tombol siap di halaman HTML
document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            signInWithPopup(auth, provider)
                .then((result) => {
                    // Jika berhasil, beri tahu user
                    alert("Berhasil login sebagai: " + result.user.displayName);
                    console.log("User berhasil login:", result.user);
                })
                .catch((error) => {
                    // Jika gagal, tampilkan error di console
                    console.error("Gagal login: ", error);
                    alert("Login gagal, cek console untuk detailnya.");
                });
        });
    } else {
        console.error("Tombol dengan id='loginBtn' tidak ditemukan di index.html!");
    }
});