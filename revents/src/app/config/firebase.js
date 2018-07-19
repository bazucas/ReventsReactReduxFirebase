import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAH-DiYHzH1WLkTvPz6gtzNVcoXfTCMO3o",
    authDomain: "trim-silicon-210110.firebaseapp.com",
    databaseURL: "https://trim-silicon-210110.firebaseio.com",
    projectId: "trim-silicon-210110",
    storageBucket: "trim-silicon-210110.appspot.com",
    messagingSenderId: "1055385203130"
  };

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
}

firestore.settings(settings);

export default firebase;