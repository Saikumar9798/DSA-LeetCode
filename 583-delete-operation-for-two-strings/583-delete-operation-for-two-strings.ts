function minDistance(word1: string, word2: string): number {
    return word1.length+ word2.length - 2*LCS(word1,word2)
};

function LCS(s1:string, s2:string){
    const dp = new Array(s1.length+1).fill(0).map(_=>new Array(s2.length+1).fill(0));
    for(let i = 1; i < s1.length+1; ++i){
        for(let j = 1; j < s2.length+1; ++j){
            if(s1[i-1] === s2[j-1]) dp[i][j] = dp[i-1][j-1]+1;
            else dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
        }
    }
    return dp[s1.length][s2.length]
}