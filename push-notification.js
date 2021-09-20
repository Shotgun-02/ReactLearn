import firebase from 'firebase';
export const initializeFirebase = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyCQd0Ce3zMP_XGhdelrBLln27u2_qBSyRM",
    authDomain: "todolist-e3c17.firebaseapp.com",
    databaseURL: "XXXXXXXXXXXXX",
    projectId: "todolist-e3c17",
    storageBucket: "todolist-e3c17.appspot.com",
    messagingSenderId: "195088394599",
    appId: "1:195088394599:web:00bdffa78d238021df67c2"
  });
}
