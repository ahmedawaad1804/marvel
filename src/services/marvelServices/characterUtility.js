import md5 from 'md5';

const publicKey = "fd391dfe9bac064bbfcffe0d11b9362e"
const privateKey = "8f572b27791840bdf9ae180adc7fb63377a92018"

export function hashURLKeys() {
    const ts = Date.now().toString()
    const stringToHash = ts + privateKey + publicKey;
    const hash = md5(stringToHash);
    return '?ts=' + ts + '&apikey=' + publicKey + '&hash=' + hash;
}
export function addOffset(offset) {
    return '&offset=' + offset
}