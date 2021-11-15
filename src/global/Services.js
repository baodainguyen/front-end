import { doc, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseApp = initializeApp({
  apiKey: 'AIzaSyBEt6yngDEuwTHLZmR0GECQfUD9xNFKEwo',
  authDomain: 'front-end-2021.firebaseapp.com',
  projectId: 'front-end-2021'
});
const db = getFirestore();

export function RunServices (){
    
    function postXHR ({url, type}, data) {
        return new Promise(resolve => {
            type = type || 'POST';
            var xhr = new XMLHttpRequest();
            xhr.open(type, url, true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200){
                    resolve(JSON.parse(this.response));
                }
            };
                if(data) {
                    var encoded = Object.keys(data).map(function(k) {
                        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
                    }).join('&');
                    xhr.send(encoded);
                }
                else {
                    xhr.send();
                }
          });
    };
    
    function getXHR (url){ 
        return postXHR ({url: url, type: 'GET'});
    };
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
    
    async function ipLookup(){
        const xhrCall = await getXHR("https://freegeoip.app/json/",).then(response => {
            var d = { 
                Ip: response.ip, 
                Region: response.region_name, 
                Country: response.country_name
            };
            console.log(response);
            return response;
            // iplkp.post(
            //     getUrl("xHxJ5kp7DRo63AfLu6fdO_wb_b0QIqjDalRSQxi4F8KQL94t0"),
            //     {data:d})
        });        
        console.log('out side of call');
        return xhrCall;
    };

    return {
        getEducation: getEducation,
        getAbout: getAbout,
        ipLookup : ipLookup
    }
}

export const PageContent = {
    About: undefined,
    Education: undefined
}
