export default function getClue(){
    return fetch('https://jservice.xyz/api/random-clue')
        .then(res => res.json())
        .then(data => data)
        .catch(reason => console.log('It failed because:', reason));
}