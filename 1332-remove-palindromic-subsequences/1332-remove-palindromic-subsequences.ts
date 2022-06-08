function removePalindromeSub(s: string): number {
    return checkPalindrome(s) ? 1 : 2;
};

function checkPalindrome(s:string):boolean{
    for(let i = 0, j = s.length-1; i < s.length; ++i, --j)
        if(s[i] !== s[j]) return false;
    return true;
}