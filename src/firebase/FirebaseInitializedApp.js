import { initializeApp } from "firebase/app";
import firebaseConfig from "./FirebaseConfig";
const FirbaseInitizedApp = () => {
  return initializeApp(firebaseConfig);
};

export default FirbaseInitizedApp;
