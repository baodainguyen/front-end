import React, { useEffect } from 'react';

export const CookieKey = {
    Id: '_id'
}
export function getCookie(keyStr) {
    let _c = document.cookie;
    if (!_c) {   // create
        _c = setCookie();
    }; //console.log(_c)
    let i = _c.indexOf(keyStr);
    if(i < 0) {
        _c = setCookie();
        i = _c.indexOf(keyStr);
    }
    let j = _c.indexOf(';', i);
    let _r = _c.slice(i, j);
    i = _r.indexOf('=') + 1;
    _r = _r.slice(i, j);

    return _r;
}
function setCookie() {
    const d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 3600 * 1000));
    var _c = `${CookieKey.Id}=${Date.now()};`;
    _c += `expires=${d.toUTCString()};`;
    _c += `path=/`;
    document.cookie = _c;
    return _c;
}
export function isEmail(email) {
    email = !email ? '' : String(email).toLowerCase();
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export function isEmpty(str) {
    if (!str) return true;
    return str.trim() === '';
}

export function removeSpace(txtSource, txtReplace) {
    txtSource = txtSource.toString();
    txtReplace = txtReplace ? txtReplace.toString() : '-';
    return txtSource.replaceAll('  ', txtReplace).replaceAll(' ', txtReplace);
}

export function isEqualLowCase(txt1, txt2) {
    txt1 = txt1.trim().toLowerCase();
    txt2 = txt2.trim().toLowerCase();
    return txt1 === txt2;
}

export function CheatSheetJs() {

    useEffect(() => {
        const script = document.createElement('script');

        script.src = "cheatsheet.bundle.js";
        script.async = true;

        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []) // empty dependency array = only called on mount and unmount
    return (<></>);
}
export function BootStrapJs() {

    useEffect(() => {
        const script = document.createElement('script');

        script.src = "bootstrapjs.bundle.js";
        script.async = true;

        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []) // empty dependency array = only called on mount and unmount
    return (<></>);
}
