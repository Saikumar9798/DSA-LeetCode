function combinationSum4(nums: number[], target: number): number {
    let dp = Array(target+1).fill(0);
    dp[0] = 1;
    for(let i = 1; i <= target; ++i)
        for(let num of nums)
            if(i - num >= 0) dp[i] += dp[i-num]
    return dp[target];
};

// function combinationSum4(nums: number[], target: number): number {
//     let count = 0;
//     function helper(target: number): void{
//         if(!target) {
//             count++;
//             return;
//         }
//         if(target < 0) return;
//         for(let num of nums){
//             if((target-num) >= 0) {
//                 helper(target-num)
//             }
//         }
//     }
//     helper(target);
//     return count;
// };