// function findTargetSumWays(nums: number[], target: number): number {
//   return dp(nums.length-1, nums, target)  
// };

// function dp(index: number,nums: number[], target: number, sum = 0, memo = new Map()){
//     const key = `${index}#${sum}`;
//     if (memo.has(key)) return memo.get(key);
//     if(index < 0 && sum === target) return 1;
//     if (index < 0) return 0;
//     const positiveDp = dp(index-1, nums, target, sum+nums[index])
//     const negativeDp = dp(index-1, nums, target, sum-nums[index])
//     memo.set(key, sum);
//     memo[key] = positiveDp+negativeDp
//     return memo[key];
// }

var findTargetSumWays = function(nums, S) {
    const memo = new Map();
    const n = nums.length;
    
    return countWaysToSum(n - 1, S);
    
    function countWaysToSum(index, rem) {
        const key = `${index}#${rem}`;
        
        // base case         
        if (index < 0) {
			if (rem === 0) return 1;
			return 0;
        }
        if (memo.has(key)) return memo.get(key);
        
        const plus = countWaysToSum(index - 1, rem + nums[index]) 
		const minus = countWaysToSum(index - 1, rem - nums[index]);
	    const count = plus + minus;
	
        memo.set(key, count);
        
        return count;
    }
};