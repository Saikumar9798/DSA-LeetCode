function countSubstrings(s: string, count = 0): number {
    for(let i =0; i < s.length; ++i){
        for(let j = i; j < s.length; ++j){
            if(checkPalindrome(s.slice(i, j+1))) count++;
        }
    }
    return count;
};

function checkPalindrome(s: string): boolean{
    let i = 0, j = s.length-1;
    while(i<=j) {
        if(s[i] !== s[j]) 
            return false;
        i++; --j;
    }
    return true;
}