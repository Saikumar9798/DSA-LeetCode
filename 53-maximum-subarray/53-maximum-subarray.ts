function maxSubArray(nums: number[]): number {
    let maxSum = -Infinity;
    let localMaxSum = -Infinity;
    nums.forEach(num=>{
        localMaxSum = Math.max(num, num+localMaxSum);
        if(localMaxSum > maxSum) maxSum = localMaxSum
    })
    return maxSum;
};