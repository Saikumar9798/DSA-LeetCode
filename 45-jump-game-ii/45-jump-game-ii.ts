function jump(nums: number[]): number {
    let dp = {};
    const numsLen = nums.length-1;
    function helper(i: number){
        if(i >= numsLen) return 0;
        if(dp[i]) return dp[i];
        let steps = Infinity;
            for(let j = i+1; j <= i+nums[i] && j <= numsLen; ++j){
                steps = Math.min(1+helper(j), steps);
            }
        dp[i] = steps;
        return steps
    }
    return helper(0);
};