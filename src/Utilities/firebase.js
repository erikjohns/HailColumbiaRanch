import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD8eFGTEgUTUZz8bpeFMXYb2vernpgRRko",
  authDomain: "hail-columbia-ranch.firebaseapp.com",
  projectId: "hail-columbia-ranch",
  storageBucket: "hail-columbia-ranch.appspot.com",
  messagingSenderId: "914957116820",
  appId: "1:914957116820:web:17601cb2980fa912135b81",
  measurementId: "G-9BLXMEZCVE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;