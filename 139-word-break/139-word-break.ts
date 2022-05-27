function wordBreak(s: string, words: string[]): boolean {
    let dp = Array(s.length+1).fill(false);
    const newS = " "+s;
    let wordsObject = {};
    for(let i = 0 ; i < words.length; ++i)
        wordsObject[`${words[i]}`] = words[i];
    dp[0] = true;
    for(let i =1; i <= newS.length; ++i){
        for(let j = i-1; j > -1; --j){
            if(dp[j] && (newS.slice(j+1, i+1) in wordsObject)){
                dp[i] = true;
                break;
            }
        }
    }
    return dp[s.length]
};

// function wordBreak(s: string, words: string[]): boolean {
//     let dp = {};
//     function helper(i: number){
//         if(i>=s.length) return true;
//         if(dp[i]) return dp[i];
//         for(let word of words){
//             if(s.substr(i,word.length).includes(word)){
//                 dp[i] = helper(i+word.length)
//                 if(dp[i]) return true;
//             }
//         }
//         dp[i] = false;
//         return dp[i];
//     }
//     return helper(0);
// };