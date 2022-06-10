function lengthOfLongestSubstring(s: string): number {
    if(!s) return 0;
    let tempObject = {};
    let l = 0, r = 0, len = 0;
    while(r < s.length){
        if(!(s[r] in tempObject))
            tempObject[s[r]] = r;
        else{
            if(tempObject[s[r]] >= l)
                l = tempObject[s[r]]+1;
            tempObject[s[r]] = r;
        }
        len = Math.max(len, r-l+1);
        ++r;
    }
    return len;
};