import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyB_i-VtP6GzIKAJ3sQpUiMcHWUZ8lAg6RA",
  authDomain: "chat-k87057346888957.firebaseapp.com",
  projectId: "chat-k87057346888957",
  storageBucket: "chat-k87057346888957.firebasestorage.app",
  messagingSenderId: "883206886895",
  appId: "1:883206886895:web:924861d3710af7e29f121a"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);