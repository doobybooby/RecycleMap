import firebase from 'firebase'



var firebaseApp = firebase.initializeApp({
    
  
 
    apiKey: "AIzaSyCXfzEaT49QtRYLuczJsTbwBrEH5Y3WYgM",
    authDomain: "recyclemap-fc3e5.firebaseapp.com",
    projectId: "recyclemap-fc3e5",
    storageBucket: "recyclemap-fc3e5.appspot.com",
    messagingSenderId: "608910929452",
    appId: "1:608910929452:web:4b25fea3cbb64abca6ab89"
  
 
})

var db = firebaseApp.firestore();

export { db }
  
