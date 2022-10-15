import {initializeApp} from  "firebase/app"
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnhkjjtZP-u-QjBXGVKitPO3-XHyNP4IA",
  authDomain: "fir-project-53dfc.firebaseapp.com",
  projectId: "fir-project-53dfc",
  storageBucket: "fir-project-53dfc.appspot.com",
  messagingSenderId: "115053386453",
  appId: "1:115053386453:web:6417db331915fc0f46e05c",
};

const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const db=getFirestore(app)


