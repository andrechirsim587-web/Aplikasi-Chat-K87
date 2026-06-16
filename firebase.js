import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "chat-k87057346888957.firebaseapp.com",
  databaseURL: "https://chat-k87057346888957-default-rtdb.firebaseio.com", // Pastikan baris ini ada
  projectId: "chat-k87057346888957",
  storageBucket: "chat-k87057346888957.appspot.com",
  messagingSenderId: "883206886895",
  appId: "1:883206886895:web:..."
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);