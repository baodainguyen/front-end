import { collection, getDocs, doc, getDoc, setDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseApp = initializeApp({ apiKey: 'AIzaSyBEt6yngDEuwTHLZmR0GECQfUD9xNFKEwo', authDomain: 'front-end-2021.firebaseapp.com', projectId: 'front-end-2021' });
const db = getFirestore();

async function getCollection(collecName){
    const querySnapshot = await getDocs(collection(db, collecName))
    return new Promise(resolve => {
        var lst = [];
        querySnapshot.forEach((doc) => {
            lst.push(doc.data());
        });
        resolve(lst);
    })
}

export function getSlider() {
    return getCollection(`slider`)
}