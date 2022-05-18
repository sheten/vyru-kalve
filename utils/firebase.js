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

export const sendContactDetails = async (formData, registratorName, registratorEmail, registratorPhone) => {
  console.log("hello from send", formData)
  var textCode = `
  <p>Registruojančio asmens vardas pavardė: ${registratorName}</p>
  <p>Registruojančio asmens el. paštas: ${registratorEmail}</p>
  <p>Registruojančio asmens telefono numeris: ${registratorPhone}</p>
  <p>-------</p>`;

  formData.map(el => {
    var singlePerson = `    
    <p>Stovyklautojas nr.: ${el.person}</p>
    <p>Stovyklautojo nr. ${el.person} vardas pavardė: ${el.name}</p>
    <p>Stovyklautojo nr. ${el.person} gimimo diena: ${el.birthday}</p>
    <p>Stovyklautojo nr. ${el.person} el. paštas: ${el.personEmail}</p>
    <p>Stovyklautojo nr. ${el.person} telefono numeris: ${el.personPhone}</p>
    <p>Stovyklautojo nr. ${el.person} gyvenamosios vietos adresas: ${el.address}</p>
    <p>Informacija apie dalyvio nr. ${el.person} fizinės, psichinės, dvasinės sveikatos būklę. (Alergijos, turėtos operacijos, traumos, baimės, padididėjęs jautrumas, vartoti ar vartojami vaistai): ${el.childHealthStatus}</p>
    <p>Prašome įvardinti 2 (du) asmenis, kurie, esant būtinybei, turi teisę pasiimti dalyvį iš stovyklos. (Nurodyti vardą, pavardę ir telefono numerį. Pilnamečiai dalyviai nurodo vieną asmenį, į kurį galima būtų kreiptis ligos ar nelaimingo atsitikimo atveju): ${el.backupContacts}</p>
    <p>Stovyklautojo nr. ${el.person} Facebook vardas: ${el.facebookName}</p>
    <p>-------</p>`
    textCode = textCode + singlePerson;
  })

  const docData = {
    // to: "rupsyse@gmail.com",
    to: "blauskas@gmail.com",
    message: {
      subject: `Nauja Registracija, registravo: ${registratorName}`,
      text: textCode,
      html: textCode,
    }
  };


  try {
    const docRef = await addDoc(collection(firestore, "mail"), docData);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export { firestore, storage }