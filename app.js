import { db } from "./firebase.js";
import { ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

const messagesRef = ref(db, 'messages');

document.getElementById('sendBtn').addEventListener('click', () => {
    const msg = document.getElementById('messageInput').value;
    push(messagesRef, { text: msg, user: "K87057346888957" });
    document.getElementById('messageInput').value = "";
});

onValue(messagesRef, (snapshot) => {
    const data = snapshot.val();
    const msgDiv = document.getElementById('messages');
    msgDiv.innerHTML = "";
    for (let id in data) {
        msgDiv.innerHTML += `<p>${data[id].user}: ${data[id].text}</p>`;
    }
});