function longestCommonSubsequence(text1: string, text2: string): number {
    let dp = {}
    function helper(i1: number, i2: number){
        const arg = `${i1}-${i2}`;
        if(dp[arg]) return dp[arg];
        if(!text1 || !text2 || i1<0 || i2<0) {
            dp[arg] = 0;
            return 0;
        }
        let count = 0;
        if(text1[i1] === text2[i2]) count = 1+helper(i1-1, i2-1);
        else
            count = Math.max(helper(i1-1,i2), helper(i1,i2-1));
        dp[arg] = count
        return count;
    }
    return helper(text1.length-1, text2.length-1)
};