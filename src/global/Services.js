import { collection, getDocs, doc, getDoc, setDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseApp = initializeApp({ apiKey: 'AIzaSyBEt6yngDEuwTHLZmR0GECQfUD9xNFKEwo', authDomain: 'front-end-2021.firebaseapp.com', projectId: 'front-end-2021' });
const db = getFirestore();

export function RunServices() {
    async function setSubcribe(emailObj) {
        await setDoc(doc(db, "subcribes", "email"), emailObj);
    }
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
            resolve(navs);
        });
    }
    async function getPreviewImages() {
        const queryImgs = await getDocs(collection(db, "home", "section01", 'images'));
        return new Promise(resolve => {
            var _imgs = [];
            queryImgs.forEach((doc) => {
                _imgs.push(doc.data()); //{title, url}
            }); //console.log(_imgs)
            resolve(_imgs);
        });
    }
    async function getSection01() {
        const s01 = doc(db, "home", "section01");
        const docS01 = await getDoc(s01);
        return new Promise(resolve => {
            if (docS01.exists()) {
                resolve(docS01.data());//{title, head, des, abutton}
            }
        });
    }
    async function getSection02() {
        const s02 = doc(db, "home", "section02");
        const docS02 = await getDoc(s02);
        return new Promise(resolve => {
            if (docS02.exists()) {
                resolve(docS02.data());//{title, head}
            }
        });
    }
    async function getAllCard() {
        const queryImgs = await getDocs(collection(db, "home", "section02", 'cards'));
        return new Promise(resolve => {
            var _cards = [];
            queryImgs.forEach((doc) => {
                _cards.push(doc.data()); //{title, img, head, des}
            });
            resolve(_cards);
        });
    }

    return {
        getSection02: getSection02,
        getAllCard: getAllCard,
        setSubcribe: setSubcribe,
        getSection01: getSection01,
        getPreviewImages: getPreviewImages,
        getNavigator: getNavigator,
        getEducation: getEducation,
        getAbout: getAbout
    }
}

export const PageContent = {
    Section01: undefined,
    Section02: undefined,
    Cards: [],
    PreviewImgs: [],
    NavLink: [],
    About: undefined,
    Education: undefined
}
