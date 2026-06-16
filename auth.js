import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { app } from "./firebase.js";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Menunggu DOM (HTML) selesai dimuat sepenuhnya
document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            signInWithPopup(auth, provider)
                .then((result) => {
                    alert("Berhasil login: " + result.user.displayName);
                    document.getElementById('loginPage').style.display = 'none';
                    document.getElementById('chatPage').style.display = 'block';
                })
                .catch((error) => {
                    console.error("Gagal login: ", error);
                    alert("Login gagal: " + error.message);
                });
        });
    } else {
        console.error("Tombol login tidak ditemukan!");
    }
});