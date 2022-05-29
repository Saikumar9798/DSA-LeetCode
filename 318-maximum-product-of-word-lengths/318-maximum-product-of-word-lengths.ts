function maxProduct(words: string[]): number {
    let max = 0;
    for(let i = 0; i < words.length; ++i){
        for(let j = i; j < words.length; ++j){
            if(findIntersection(words[i], words[j])) max = Math.max(max, words[i].length * words[j].length)
        }
    }
    return max
};

function findIntersection(first: string, second: string){
    let obj = {};
    for(let letter of first) obj[letter] = 1;
    for(let letter of second) if(letter in obj) return false;
    return true;
}