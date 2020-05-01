import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCxZoVZC_sWwTBTu01vM1fsVpQoo6yuzKE",
    authDomain: "crud-firebase-29b1e.firebaseapp.com",
    databaseURL: "https://crud-firebase-29b1e.firebaseio.com",
    projectId: "crud-firebase-29b1e",
    storageBucket: "crud-firebase-29b1e.appspot.com",
    messagingSenderId: "924009433140",
    appId: "1:924009433140:web:8afecbb4476dd7e1892261"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export {db};

  // const firebaseApp = firebase.initializeApp(firebaseConfig);

  // firebaseApp.firestore().settings({timestampsInSnapshots: true});

  // export default firebaseApp.firestore();