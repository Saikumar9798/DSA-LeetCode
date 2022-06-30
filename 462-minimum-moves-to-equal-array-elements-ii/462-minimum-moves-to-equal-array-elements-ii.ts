function minMoves2(nums: number[]): number {
    nums.sort((a,b)=>a-b);
    let minSteps = 0;
    const median = nums[nums.length/2 | 0];
    for(let num of nums){
        minSteps += Math.abs(num-median)
    }
    return minSteps
};