import React, { useEffect } from 'react';

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
      return ( <></> );
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
      return ( <></> );
}