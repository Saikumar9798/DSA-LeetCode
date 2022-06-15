function longestPalindrome(s: string): number {
    const letters = {}; 
    let flag = 0;
    for(let letter of s){
        if(letter in letters) ++letters[letter];
        else letters[letter] = 1;
    }
    const out = Object.keys(letters).reduce((acc, curr)=>{
        if(letters[curr]%2 === 0) return acc+letters[curr];
        flag = 1;
        return acc+letters[curr]-1;
    },0);
    return flag ? out+1: out;
};