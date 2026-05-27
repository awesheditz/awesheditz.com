// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBQufHrVHEnzcz40SC9olE4_kKKsvZz-kE",
  authDomain: "awesheditz.firebaseapp.com",
  projectId: "awesheditz",
  storageBucket: "awesheditz.firebasestorage.app",
  messagingSenderId: "586642323708",
  appId: "1:586642323708:web:77ad6b33c4b0906d057f79",
  measurementId: "G-PLM39NJ2JG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db };
