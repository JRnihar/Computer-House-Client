
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDsRlviJcoJj1FYdACm8Pwr_P4bEWbSjbU",
    authDomain: "final-project-d2e43.firebaseapp.com",
    projectId: "final-project-d2e43",
    storageBucket: "final-project-d2e43.appspot.com",
    messagingSenderId: "534314744062",
    appId: "1:534314744062:web:4b928a2126acf457244daf"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth