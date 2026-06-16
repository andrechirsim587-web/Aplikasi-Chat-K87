import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { app } from "./firebase.js";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Menunggu seluruh elemen HTML dimuat terlebih dahulu
document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            console.log("Tombol ditekan, mencoba login...");
            signInWithPopup(auth, provider)
                .then((result) => {
                    console.log("Login Berhasil:", result.user.displayName);
                    alert("Berhasil login!");
                })
                .catch((error) => {
                    console.error("Login Gagal:", error);
                    alert("Gagal: " + error.message);
                });
        });
    } else {
        console.error("Elemen 'loginBtn' tidak ditemukan di dokumen HTML!");
    }
});