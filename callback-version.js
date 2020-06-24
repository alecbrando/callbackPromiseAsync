// const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

export function getClue (cb) {
    let xhttp = new XMLHttpRequest();

    //event to handle action
    xhttp.addEventListener('readystatechange', () => {
        if (xhttp.readyState !== XMLHttpRequest.DONE) return;
        if(xhttp.status !== 200){
            cb(xhttp.status);
        } else {
            const data = JSON.parse(xhttp.responseText);
            cb(null, data);
        }
    });
    
    //gather action
    xhttp.open('GET', 'https://jservice.xyz/api/random-clue');
    //action
    xhttp.send();
}

// export function getClue(callback) {
//     const xhr = new XMLHttpRequest();

//     xhr.addEventListener('readystatechange', () => {
//         if (xhr.readyState !== XMLHttpRequest.DONE) return;
//         if (xhr.status !== 200) {
//             callback(xhr.status);
//         } else {
//             const clue = JSON.parse(xhr.responseText);
//             callback(null, clue);
//         }
//     });

//     xhr.open('GET', 'https://jservice.xyz/api/random-clue');
//     xhr.send();
// }
