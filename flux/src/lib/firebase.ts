import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "fluxco-2acd4.firebaseapp.com",
  projectId: "fluxco-2acd4",
  storageBucket: "fluxco-2acd4.firebasestorage.app",
  messagingSenderId: "1006252263581",
  appId: "1:1006252263581:web:0260ce9e029815ec03ac74",
  measurementId: "G-77LXTRNKGR",
};

// Prevent re-initialization on hot reloads
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Analytics only runs in the browser — isSupported() guards against SSR
export const initAnalytics = async () => {
  if (await isSupported()) {
    return getAnalytics(app);
  }
  return null;
};

export { app };
