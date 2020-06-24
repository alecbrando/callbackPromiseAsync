import * as callbackVersionJs from "./callback-version.js"; //callback
import getClueFromPromise from "./promise-version.js"; // promise
import getClueFromAsync from "./async-await-version.js";

const callButton = document.getElementById('use-callback');
const promiseButton = document.getElementById('use-promise');
const asyncButton = document.getElementById('use-async-await');
const checkResponse = document.getElementById('check-response');
const playerResponse = document.getElementById('player-response');
const score = document.getElementById('score');
let value = 0;


callButton.addEventListener('click', () => {

    callbackVersionJs.getClue((err, clue) => {
        if (err !== null) {
            return console.error(err);
        }
        console.log(clue);
        fillPage(clue);

    });
});

promiseButton.addEventListener('click', () => {
    getClueFromPromise()
        .then(clue => fillPage(clue));
});


asyncButton.addEventListener('click', async () => {
    try {
    const clue = await getClueFromAsync();
    console.log(clue);
    fillPage(clue);
} catch (err) {
    console.log(err);
}
});


function fillPage(clue){

    document.getElementById('question').innerHTML = clue.question;
    document.getElementById('answer').innerHTML = clue.answer;
    document.getElementById('value').innerHTML = clue.value;
    document.getElementById('category-title').innerHTML = clue.category.title;

    if (clue.invalidCount > 0) {
        document.getElementById('invalid-count').innerHTML = 'invalid'
    } else {
        document.getElementById('invalid-count').innerHTML = 'valid'
    }
    checkResponse.addEventListener('click', () => {
        if(clue.answer.toLowerCase().includes(playerResponse.value.toLowerCase())){
            value = value + clue.value;
            score.innerHTML = value;
        }

    });
    playerResponse.addEventListener('keyup', (event) => {
        if (playerResponse.value) {
            checkResponse.classList.remove('is-hidden');
        }
    });
}



