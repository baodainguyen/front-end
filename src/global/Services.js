import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseApp = initializeApp({
  apiKey: 'AIzaSyBEt6yngDEuwTHLZmR0GECQfUD9xNFKEwo',
  authDomain: 'front-end-2021.firebaseapp.com',
  projectId: 'front-end-2021'
});
const db = getFirestore();

export function RunServices (){
    
    async function getAbout() {
        const ind = doc(db, "about", "individual");
        const docInd = await getDoc(ind);
        return new Promise(resolve => {
            if (docInd.exists()) {
                resolve(docInd.data());
              }
        });
    }
    async function getEducation() {
        const univers = doc(db, "about", "experience", 'education', 'university');
        const docUnivers = await getDoc(univers);
        return new Promise(resolve => {
            if (docUnivers.exists()) {
                resolve(docUnivers.data());
              }
        });
    }
    async function getNavigator() {
        const querySnapshot = await getDocs(collection(db, "navigator"));
        return new Promise(resolve => {
            var navs = [];
            querySnapshot.forEach((doc) => {
            // console.log(doc.id, " => ", doc.data());
                navs.push(doc.data());
            });
            console.log(navs)
            resolve(navs);
        });
    }
    

    return {
        getNavigator: getNavigator,
        getEducation: getEducation,
        getAbout: getAbout
    }
}

export const PageContent = {
    Navigator: [],
    About: undefined,
    Education: undefined
}
