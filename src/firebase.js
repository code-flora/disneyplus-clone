import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import 'firebase/compat/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDy-IST1ltru_fFq67-pbJK1Uxu0qUKDMw",
    authDomain: "disney-plus-clone-e2d5c.firebaseapp.com",
    projectId: "disney-plus-clone-e2d5c",
    storageBucket: "disney-plus-clone-e2d5c.appspot.com",
    messagingSenderId: "996473289593",
    appId: "1:996473289593:web:7237e17448543c0f340da8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
