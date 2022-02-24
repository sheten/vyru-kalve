import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/storage"
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCcNpI4HqzarXEkQwyppPB8ijdJh6UlMc0",
  authDomain: "vyru-kalve.firebaseapp.com",
  projectId: "vyru-kalve",
  storageBucket: "vyru-kalve.appspot.com",
  messagingSenderId: "381240541435",
  appId: "1:381240541435:web:137d1a8d5d6c56f512305e"
}

const app = initializeApp(firebaseConfig);

const firestore = getFirestore();
const storage = getStorage();

export const sendContactDetails = async ({ name, parentEmail, childEmail, parentPhone, childPhone, address, childHealthStatus, backupContacts, facebookName }) => {
  console.log("hello from send")

  const docData = {
    name,
    parentEmail,
    childEmail,
    parentPhone,
    childPhone,
    address,
    childHealthStatus,
    backupContacts,
    facebookName,
    to: ['blauskas@gmail.com'],
    message: {
      subject: 'Nauja Registracija',

      text: `<p>Stovyklautojo vardas pavardė: ${name}</p>
      <p>Registruojančio asmens el. paštas: ${parentEmail}</p>
      <p>Stovyklautojo el. paštas: ${childEmail}</p>
      <p>Registruojančio asmens telefono numeris: ${parentPhone}</p>
      <p>Stovyklautojo telefono numeris: ${childPhone}</p>
      <p>Stovyklautojo gyvenamosios vietos adresas: ${address}</p>
      <p>Informacija apie dalyvio fizinės, psichinės, dvasinės sveikatos būklę. (Alergijos, turėtos operacijos, traumos, baimės, padididėjęs jautrumas, vartoti ar vartojami vaistai): ${childHealthStatus}</p>
      <p>Prašome įvardinti 2 (du) asmenis, kurie, esant būtinybei, turi teisę pasiimti dalyvį iš stovyklos. (Nurodyti vardą, pavardę ir telefono numerį. Pilnamečiai dalyviai nurodo vieną asmenį, į kurį galima būtų kreiptis ligos ar nelaimingo atsitikimo atveju): ${backupContacts}</p>
      <p>Stovyklautojo Facebook vardas: ${facebookName}</p>`,

      html: `<p>Stovyklautojo vardas pavardė: ${name}</p>
      <p>Registruojančio asmens el. paštas: ${parentEmail}</p>
      <p>Stovyklautojo el. paštas: ${childEmail}</p>
      <p>Registruojančio asmens telefono numeris: ${parentPhone}</p>
      <p>Stovyklautojo telefono numeris: ${childPhone}</p>
      <p>Stovyklautojo gyvenamosios vietos adresas: ${address}</p>
      <p>Informacija apie dalyvio fizinės, psichinės, dvasinės sveikatos būklę. (Alergijos, turėtos operacijos, traumos, baimės, padididėjęs jautrumas, vartoti ar vartojami vaistai): ${childHealthStatus}</p>
      <p>Prašome įvardinti 2 (du) asmenis, kurie, esant būtinybei, turi teisę pasiimti dalyvį iš stovyklos. (Nurodyti vardą, pavardę ir telefono numerį. Pilnamečiai dalyviai nurodo vieną asmenį, į kurį galima būtų kreiptis ligos ar nelaimingo atsitikimo atveju): ${backupContacts}</p>
      <p>Stovyklautojo Facebook vardas: ${facebookName}</p>`,
    }
  };


  try {
    const docRef = await addDoc(collection(firestore, "mail"), docData);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  console.log("yay")
}

export { firestore, storage }