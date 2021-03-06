import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyARfH7_JaOD0mkkCJy_3Nlrwy3bshD88K8",
  authDomain: "movie-weather-app.firebaseapp.com",
  projectId: "movie-weather-app",
  storageBucket: "movie-weather-app.appspot.com",
  messagingSenderId: "357372821517",
  appId: "1:357372821517:web:a990de0097b110a9015544"
};

const firebaseApp= firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export{auth};
export default db;