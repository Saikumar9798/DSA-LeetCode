function lengthOfLIS(nums: number[]): number {
    let LISlength = -Infinity, dp = new Array(nums.length).fill(1);
    for(let i = 0; i < nums.length; ++i){
        let max = 0;
        for(let j = 0; j < i; ++j){
            if(nums[j] < nums[i])
                max = Math.max(max, dp[j])
        }
        dp[i] = 1 + max;
        if(dp[i] > LISlength) LISlength = dp[i];
    }
    return LISlength;
};