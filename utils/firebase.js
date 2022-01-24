import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/storage"

const firebaseProductionConfig = {
  apiKey: "AIzaSyCcNpI4HqzarXEkQwyppPB8ijdJh6UlMc0",
  authDomain: "vyru-kalve.firebaseapp.com",
  projectId: "vyru-kalve",
  storageBucket: "vyru-kalve.appspot.com",
  messagingSenderId: "381240541435",
  appId: "1:381240541435:web:137d1a8d5d6c56f512305e"
}

if (!firebase.apps.length){
  firebase.initializeApp(firebaseProductionConfig)
}

const firestore = firebase.firestore();
const storage = firebase.storage();

export { firestore, storage }