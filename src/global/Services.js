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
            });
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
        const s03 = doc(db, "home", "section03");
        const _title = await getDoc(s03);

        const query = await getDocs(collection(db, "home", "section03", 'slides'));
        return new Promise(resolve => {
            var _slides = [];
            query.forEach((doc) => {
                _slides.push(doc.data()); //{title, img, sub}
            });
            const _s3 = _title.exists() ? _title.data() : {};
            resolve({
                title: _s3.title,
                slides: _slides
            });
        });
    }
    async function getSection03() {
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
        getNavigator: getNavigator,
        getPreviewImages: getPreviewImages,
        getSection01: getSection01,
        getSection02: getSection02,
        getSection03: getSection03,
        getAllCard: getAllCard,
        getEducation: getEducation,
        getAbout: getAbout,
        setSubcribe: setSubcribe
    }
}

export const DataEducation = {
    title: '', position: '', start: '', end: '', note1: '',
    get: async function () {
        if (this.title === '') {
            const data = await RunServices().getEducation();
            this.title = data['title'];
            this.position = data['position'];
            this.start = data['start'];
            this.end = data['end'];
            this.note1 = data['note1'];
            return data;
        }
        return new Promise(r => { });
    }
}
export const DataAbout = {
    name: '***', address: '***', phone: '***', email: '***',
    get: async function () {
        if (this.name === '***') {
            const data = await RunServices().getAbout();
            this.name = data['name'];
            this.address = data['address'];
            this.phone = data['phone'];
            this.email = data['email'];
            return data;
        }
        return new Promise(r => { });
    }
}
export const DataSection03 = {
    title: undefined, head: undefined, cards: [],
    getText: async function () {
        if (this.title === undefined || this.head === undefined) {
            const data = await RunServices().getSection03();
            this.title = data.title;
            this.head = data.head;
            return data;
        }
        return new Promise(r => { });
    },
    getAllCards: async function () {
        if (this.cards.length < 1) {
            this.cards = await RunServices().getAllCard();
            return this.cards;
        }
        return new Promise(r => { });
    }
}
export const DataSection02 = {
    Text: undefined,
    Slides: [],
    get: async function () {
        if (this.Text === undefined) {
            const data = await RunServices().getSection02();
            this.Text = data.title;
            this.Slides = data.slides;
            return data;
        }
        return new Promise(r => {
            r({
                title: this.Text, slides: this.Slides
            })
        });
    }
}
export const DataSection01 = {
    Text: {},
    getText: async function () {
        if (this.Text.title === undefined) {
            const data = await RunServices().getSection01();
            this.Text = data; // { title, head, des, abutton? }
            return data;
        }
        return new Promise(r => { });   // don't run then function
    },
    Imgs: [],
    getImgs: async function () {
        if (this.Imgs.length < 1) {
            const _imgs = await RunServices().getPreviewImages();
            if (!_imgs || _imgs.length < 1)
                return [];
            this.Imgs = _imgs;
            return _imgs;
        }
        return new Promise(r => { });   // don't run then function
    }
}

export const NavLink = {
    Navs: [],
    get: async function () {
        if (this.Navs.length < 1) {
            const _navs = await RunServices().getNavigator();
            this.Navs = _navs;
            return _navs;
        }
        return new Promise(r => { });
    },
    getRoute: function () {
        var _rL = [];
        this.Navs.filter(i => {
            if (i.title) _rL.push(removeSpace(i.title));
            if (i.sub1) _rL.push(removeSpace(i.sub1));
            if (i.sub2) _rL.push(removeSpace(i.sub2));
            return true;
        });
        return _rL;
    }
}
