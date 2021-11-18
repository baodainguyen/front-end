
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