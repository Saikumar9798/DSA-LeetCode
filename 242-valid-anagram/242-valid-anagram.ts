function isAnagram(s: string, t: string): boolean {
    const visitedS = {}
    for(let letter of s){
        if(letter in visitedS) ++visitedS[letter];
        else visitedS[letter] = 1;
    }
    for(let letter of t){
        if(letter in visitedS){
            if(visitedS[letter] > 1) --visitedS[letter];
            else delete visitedS[letter]
        }
        else return false;
    }
    return Object.keys(visitedS).length === 0;
};