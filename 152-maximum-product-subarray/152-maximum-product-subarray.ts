function maxProduct(nums: number[]): number {
    let max = nums[0], min = nums[0], ans = nums[0];
    for(let i = 1; i < nums.length; ++i){
        if(nums[i] < 0) [max,min] = [min,max];
        max = Math.max(nums[i]*max, nums[i]);
        min = Math.min(nums[i]*min, nums[i]);
        if(max > ans) ans = max
    }
    return ans
};