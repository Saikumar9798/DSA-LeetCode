function findLongestChain(pairs: number[][]): number {
    pairs.sort((a,b)=>a[0]-b[0]);
    let count = -Infinity, dp = new Array(pairs.length).fill(1); 
    for(let i = 0; i < pairs.length; ++i){
        let max = 0;
        for(let j = 0; j < i; ++j){
            if(pairs[i][0] > pairs[j][1]) max = Math.max(max, dp[j])
        }
        dp[i] = 1 + max;
        if(dp[i] > count) count = dp[i] 
    }
    return count;
};