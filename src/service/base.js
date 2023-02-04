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

export function getBlogData() {

    return new Promise(res => {
        res(
        [
            {
                title: `Data Structures`,
                auth: `GeeksforGeeks`,
                img: `https://live.staticflickr.com/65535/51720551677_ed3bcf1a62.jpg`
            },
            {
                title: `Difference between Linear and Non-linear Data Structures - GeeksforGeeks`,
                auth: `GeeksforGeeks`,
                img: `https://live.staticflickr.com/65535/51725115042_1678f7a23f.jpg`
            },
            {
                title: `What Are Data Structures? {Classification & Types} | phoenixNAP KB`,
                auth: `phoenixNAP`,
                img: `https://phoenixnap.com/kb/wp-content/uploads/2022/10/data-structures-types-classification.png`
            },
            {
                title: `What is the Classification of Data Structure with Diagram`,
                auth: `Tutorialscan`,
                img: `https://live.staticflickr.com/65535/51726236650_a390837dfb.jpg`
            },
            {
                title: `Introduction to Data Structures and Algorithms | Studytonight`,
                auth: `Studytonight`,
                img: `https://live.staticflickr.com/65535/51728456656_7e4105ffc0.jpg`
            },
            {
                title: `Introduction to Data Structures and Algorithms | 2`,
                auth: `Studytonight`,
                img: `https://live.staticflickr.com/65535/51761145941_091d74543c.jpg`
            },
            {
                title: `Introduction to Data Structures and Algorithms | 8`,
                auth: `Studytonight`,
                img: `https://live.staticflickr.com/65535/51725347106_0a289e0761.jpg`
            },
            {
                title: `Introduction to Data Structures and Algorithms | 3`,
                auth: `Studytonight`,
                img: `https://live.staticflickr.com/65535/51722748656_25256ece4a.jpg`
            },
            {
                title: `Introduction to Data Structures and Algorithms | 5`,
                auth: `Studytonight`,
                img: `https://live.staticflickr.com/65535/51722742296_3a27c6cfd0.jpg`
            },
            {
                title: `Introduction to Data Structures and Algorithms | 7`,
                auth: `Studytonight`,
                img: `https://live.staticflickr.com/65535/51699992153_d166c33ac6.jpg`
            },
            {
                title: `Introduction to Data Structures and Algorithms | 9`,
                auth: `Studytonight`,
                img: `https://live.staticflickr.com/65535/51700325044_fd76c51d8f.jpg`
            },
            {
                title: `End game`,
                auth: `Studytonight`,
                img: `https://live.staticflickr.com/65535/51743911796_d96b75c90c.jpg`
            }
        ])
    })
}