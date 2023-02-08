export const CookieKey = {
    Id: '_id'
}
export function getCookie(keyStr) {
    let _c = document.cookie;
    if (!_c) {   // create
        _c = setCookie();
    }; //console.log(_c)
    let i = _c.indexOf(keyStr);
    if (i < 0) {
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

export function getAverageRGB(imgEl) {
    var blockSize = 5, // only visit every 5 pixels
        defaultRGB = { r: 0, g: 0, b: 0 }, // for non-supporting envs
        canvas = document.createElement('canvas'),
        context = canvas.getContext && canvas.getContext('2d'),
        data, width, height,
        i = -4,
        length,
        rgb = { r: 0, g: 0, b: 0 },
        count = 0;

    if (!context) {
        return defaultRGB;
    }

    height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

    context.drawImage(imgEl, 0, 0);

    try {
        data = context.getImageData(0, 0, width, height);
    } catch (e) {
        /* security error, img on diff domain *///alert('x');
        return defaultRGB;
    }

    length = data.data.length;

    while ((i += blockSize * 4) < length) {
        ++count;
        rgb.r += data.data[i];
        rgb.g += data.data[i + 1];
        rgb.b += data.data[i + 2];
    }

    // ~~ used to floor values
    rgb.r = ~~(rgb.r / count);
    rgb.g = ~~(rgb.g / count);
    rgb.b = ~~(rgb.b / count);

    return rgb;
}
export function getLuminanceFrom(r, g, b) {
    const luminance = .2126 * r + .7152 * g + .0722 * b;
    //console.log(luminance)
    if (luminance < 221)
        return ('rgb(255,255,255)');
    return ('rgb(0,0,0)');
}
export function getRgba (rgbString, a) {   // rgb(123,456,789)
    if(0 > a || a > 1) a = 1;
    var x = rgbString.replace('rgb', 'rgba');
    x = x.replace(')', `,${a})`);
    return x;
}