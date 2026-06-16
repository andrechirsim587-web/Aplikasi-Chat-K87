import { db } from "./firebase.js";
import { ref, push, onValue } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-database.js";

const messagesRef = ref(db, 'messages');

// Fungsi untuk mengirim pesan
const sendBtn = document.getElementById('sendBtn');
if (sendBtn) {
    sendBtn.addEventListener('click', () => {
        const msg = document.getElementById('messageInput').value;
        if (msg.trim() !== "") {
            push(messagesRef, { text: msg, user: "User" });
            document.getElementById('messageInput').value = "";
        }
    });
}

// Fungsi untuk menampilkan pesan
onValue(messagesRef, (snapshot) => {
    const data = snapshot.val();
    const msgDiv = document.getElementById('messages');
    if (msgDiv) {
        msgDiv.innerHTML = "";
        for (let id in data) {
            msgDiv.innerHTML += `<p><strong>${data[id].user}:</strong> ${data[id].text}</p>`;
        }
    }
});