const firebaseConfig = {
  apiKey: "AIzaSyCrTDLgZ3kfT7nEG6qTr7N-UO0IKawaJGM",
  authDomain: "milkilgg.firebaseapp.com",
  projectId: "milkilgg",
  storageBucket: "milkilgg.firebasestorage.app",
  messagingSenderId: "679416194056",
  appId: "1:679416194056:web:fb7766ce4e3d4f79831dbd"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

// Atalho para Firestore
const db = firebase.firestore();
