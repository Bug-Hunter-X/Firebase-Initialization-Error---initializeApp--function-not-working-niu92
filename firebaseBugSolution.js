import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

// Check if Firebase is already initialized
if (getApps().length === 0) {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  console.log('Firebase initialized successfully!');
} else {
  console.log('Firebase already initialized.');
}

// ... rest of your Firebase code ...
