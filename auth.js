import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { app } from "./firebase.js";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            signInWithPopup(auth, provider)
                .then((result) => {
                    alert("Berhasil Login: " + result.user.displayName);
                    document.getElementById('loginPage').style.display = 'none';
                    document.getElementById('chatPage').style.display = 'block';
                })
                .catch((error) => console.error(error));
        });
    }
});