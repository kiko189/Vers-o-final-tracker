// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA91AoWZFOG1EbLz6p5OjfJd-Us-S9x4YQ",
  authDomain: "gta-tracker-67774.firebaseapp.com",
  projectId: "gta-tracker-67774",
  storageBucket: "gta-tracker-67774.firebasestorage.app",
  messagingSenderId: "2917447473",
  appId: "1:2917447473:web:552539a68b5f84865fa210",
  measurementId: "G-01KDYD43WX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Seleção de elementos
const loginForm = document.getElementById('login-form');
const logoutBtn = document.getElementById('logout-btn');

// Evento de login
loginForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Evita o envio do formulário

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Realiza o login
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Login bem-sucedido
      const user = userCredential.user;
      console.log("Usuário logado:", user);
      // Mostrar botão de logout
      logoutBtn.style.display = "block";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Erro de login:", errorCode, errorMessage);
    });
});

// Evento de logout
logoutBtn.addEventListener('click', () => {
  firebase.auth().signOut()
    .then(() => {
      console.log("Usuário deslogado");
      logoutBtn.style.display = "none";
    })
    .catch((error) => {
      console.error("Erro ao deslogar:", error);
    });
});
