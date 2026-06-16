import { db } from "./firebase.js";
import { ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const messagesRef = ref(db, 'messages');
// ... sisanya kode chat Anda ...