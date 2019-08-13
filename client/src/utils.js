import { publicTextPath } from './Constants';

export const readTextFile = (textFile, callback) => {
    const rawFile = new XMLHttpRequest();
    const filePath = `${publicTextPath}${textFile}`;

    rawFile.open('GET', filePath);
    rawFile.onreadystatechange = () => {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status === 0) {
                console.log(rawFile.responseText);
                callback(rawFile.responseText);
            }
        }
    };
    rawFile.send(null);
}
