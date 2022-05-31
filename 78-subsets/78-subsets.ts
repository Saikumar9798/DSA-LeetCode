function subsets(nums: number[]): number[][] {
    let result = [[]], stack = [];
    function helper(i: number){
        if(i === nums.length) return;
        while(i < nums.length){
            stack.push(nums[i]);
            result.push([...stack]);
            helper(i+1);
            stack.pop();
            ++i;
        }
    }
    helper(0);
    return result;
};