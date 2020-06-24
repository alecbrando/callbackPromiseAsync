
export default async function getClue (){
    const response = await fetch("https://jservice.xyz/api/random-clue");
    if(response.status !== 200){
        throw new Error(response.status);
    }
    const clue = await response.json();
    return clue;
};