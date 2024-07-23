import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.EMRS_FIREBASE_API_KEY,
  authDomain: process.env.EMRS_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EMRS_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EMRS_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EMRS_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EMRS_FIREBASE_APP_ID,
  measurementId: process.env.EMRS_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage, analytics };